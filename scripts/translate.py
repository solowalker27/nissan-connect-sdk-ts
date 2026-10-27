#!/usr/bin/env python3
"""Deterministic development-only AST translation. No Python code is shipped at runtime."""
import ast, json, pathlib, sys, hashlib, collections
ROOT=pathlib.Path(__file__).resolve().parents[1]
UP=pathlib.Path(sys.argv[1]).resolve()
MODE=sys.argv[2] if len(sys.argv)>2 else 'tests'
RESERVED={'null','true','false','default','delete','new','var','let','const','function','class','extends','super','this','in','instanceof','typeof','void','with','yield','await','arguments','public','private','protected','static','package','interface','implements'}
def ident(s): return '$'+s if s in RESERVED else s
BUILTINS=set('isinstance str int float bool dict list tuple set frozenset len any all enumerate range getattr hasattr vars iter next sum object Exception ValueError RuntimeError TimeoutError TypeError AssertionError IndexError KeyError'.split())
STDLIB={'typing','collections.abc','dataclasses','enum','datetime','aiohttp','uuid','base64','importlib.metadata','urllib.parse'}
TREES={p.stem:ast.parse(p.read_text()) for p in (UP/'src/pynissan').glob('*.py')}
CLASSES={n.name:n for t in TREES.values() for n in t.body if isinstance(n,ast.ClassDef)}
def allfields(cls):
 out=[]
 for b in cls.bases:
  if isinstance(b,ast.Name) and b.id in CLASSES: out.extend(allfields(CLASSES[b.id]))
 return out+[n for n in cls.body if isinstance(n,ast.AnnAssign) and isinstance(n.target,ast.Name)]
class Translator:
 def __init__(self, file, tests=False):
  self.file=file;self.tests=tests;self.depth=0;self.cls=None;self.method=False;self.uid=0;self.names=set();self.reg=[]
 def t(self,n):
  if n is None:return 'void'
  if isinstance(n,ast.Constant):
   if n.value is None:return 'null'
   if isinstance(n.value,str):
    try:return self.t(ast.parse(n.value,mode='eval').body)
    except:return 'any'
   return 'any'
  if isinstance(n,ast.Name):
   mapping={'str':'string','int':'number','float':'number','bool':'boolean','object':'unknown','None':'null','datetime':'$.DateValue','date':'$.DateValue','ClientSession':'import("./http").HttpSession','StrEnum':'$.EnumValue','Enum':'$.EnumValue'}
   if n.id in mapping:return mapping[n.id]
   if n.id in {'T','EnumT','ResultT','ModelT','ValueT','InputT','ItemT','_T'}:return 'any'
   return ident(n.id)
  if isinstance(n,ast.BinOp) and isinstance(n.op,ast.BitOr):return self.t(n.left)+' | '+self.t(n.right)
  if isinstance(n,ast.Subscript):
   name=n.value.id if isinstance(n.value,ast.Name) else ''
   args=n.slice.elts if isinstance(n.slice,ast.Tuple) else [n.slice]
   if name in {'Final','Annotated'}:return self.t(args[0])
   if name in {'Mapping','dict'}:return 'Record<'+self.t(args[0])+', '+self.t(args[1])+'>'
   if name in {'list','Sequence','set','frozenset'}:return ('ReadonlySet<' if name in {'set','frozenset'} else 'ReadonlyArray<')+self.t(args[0])+'>'
   if name=='tuple':return 'ReadonlyArray<'+self.t(args[0])+'>' if len(args)==2 and isinstance(args[1],ast.Constant) and args[1].value is Ellipsis else 'readonly ['+', '.join(self.t(a) for a in args)+']'
   if name=='Awaitable':return 'Promise<'+('void' if isinstance(args[0],ast.Constant) and args[0].value is None else self.t(args[0]))+'>'
   if name=='Callable':
    pars=args[0].elts if isinstance(args[0],ast.List) else []
    return '(('+', '.join('arg'+str(i)+': '+self.t(a) for i,a in enumerate(pars))+') => '+('void' if isinstance(args[1],ast.Constant) and args[1].value is None else self.t(args[1]))+')'
   if name=='type':return 'any'
   return 'any'
  return 'any'
 def signature(self,n,method):
  args=(n.args.posonlyargs+n.args.args)[1:] if method else n.args.posonlyargs+n.args.args
  optional={a.arg for a in args[-len(n.args.defaults):]} if n.args.defaults else set()
  params=[ident(a.arg)+('?' if a.arg in optional else '')+': '+self.t(a.annotation) for a in args]
  if n.args.vararg:params.append('...'+ident(n.args.vararg.arg)+': ReadonlyArray<'+self.t(n.args.vararg.annotation)+'>')
  if n.args.kwonlyargs:
   optfields=[ident(a.arg)+('?' if default is not None else '')+': '+self.t(a.annotation) for a,default in zip(n.args.kwonlyargs,n.args.kw_defaults)]
   params.append('options'+('?' if all(v is not None for v in n.args.kw_defaults) else '')+': { '+ '; '.join(optfields)+' }')
  return ', '.join(params)
 def e(self,n):
  if n is None:return 'null'
  if isinstance(n,ast.Constant):return 'undefined' if n.value is Ellipsis else json.dumps(n.value,ensure_ascii=False)
  if isinstance(n,ast.Name):
   if n.id=='self' and self.method:return 'this'
   return '$.'+n.id if n.id in BUILTINS else ident(n.id)
  if isinstance(n,ast.Attribute):return f'$.attr({self.e(n.value)}, {json.dumps(n.attr)})'
  if isinstance(n,(ast.List,ast.Tuple,ast.Set)):
   a='['+', '.join(('...$.iterable('+self.e(v.value)+')') if isinstance(v,ast.Starred) else self.e(v) for v in n.elts)+']'
   return f'new Set({a})' if isinstance(n,ast.Set) else a
  if isinstance(n,ast.Dict):
   return 'Object.assign({}, '+', '.join(self.e(v) if k is None else '{['+self.e(k)+']: '+self.e(v)+'}' for k,v in zip(n.keys,n.values))+')' if n.keys else '{}'
  if isinstance(n,ast.Call):
   if isinstance(n.func,ast.Name) and n.func.id=='cast':return self.e(n.args[1])
   if isinstance(n.func,ast.Attribute) and isinstance(n.func.value,ast.Call) and isinstance(n.func.value.func,ast.Name) and n.func.value.func.id=='super':return '$.superInit(this, '+ident(self.cls)+', ['+', '.join(self.e(x) for x in n.args)+'])'
   args='['+', '.join('...$.iterable('+self.e(v.value)+')' if isinstance(v,ast.Starred) else self.e(v) for v in n.args)+']'
   kwargs='Object.assign({}, '+', '.join(self.e(k.value) if k.arg is None else '{'+json.dumps(k.arg)+': '+self.e(k.value)+'}' for k in n.keywords)+')' if n.keywords else 'null'
   return f'$.call({self.e(n.func)}, {args}, {kwargs})'
  if isinstance(n,ast.Subscript):
   if isinstance(n.value,ast.Name) and n.value.id in {'Callable','Mapping','Sequence','Awaitable','dict','list','tuple','set','frozenset','Final'}: return self.e(n.value)
   if isinstance(n.slice,ast.Slice):return f'$.slice({self.e(n.value)}, {self.e(n.slice.lower)}, {self.e(n.slice.upper)}, {self.e(n.slice.step)})'
   return f'$.get({self.e(n.value)}, {self.e(n.slice)})'
  if isinstance(n,ast.Await):return '(await '+self.e(n.value)+')'
  if isinstance(n,ast.UnaryOp):
   if isinstance(n.op,ast.Not):return '!$.truth('+self.e(n.operand)+')'
   return ('-' if isinstance(n.op,ast.USub) else '+')+'('+self.e(n.operand)+')'
  if isinstance(n,ast.Compare):
   out=[];left=n.left
   for op,right in zip(n.ops,n.comparators):
    a,b=self.e(left),self.e(right)
    if isinstance(op,(ast.Eq,ast.NotEq)):s=f'$.eq({a}, {b})';s=('!'+s) if isinstance(op,ast.NotEq) else s
    elif isinstance(op,(ast.Is,ast.IsNot)):s=f'({a} {"!==" if isinstance(op,ast.IsNot) else "==="} {b})'
    elif isinstance(op,(ast.In,ast.NotIn)):s=f'$.contains({b}, {a})';s=('!'+s) if isinstance(op,ast.NotIn) else s
    else:s=f'({a} '+{ast.Lt:'<',ast.LtE:'<=',ast.Gt:'>',ast.GtE:'>='}[type(op)]+f' {b})'
    out.append(s);left=right
   return '('+' && '.join(out)+')'
  if isinstance(n,ast.BoolOp):
   fn='or' if isinstance(n.op,ast.Or) else 'and'
   return '$.'+fn+'('+', '.join('() => '+self.e(x) for x in n.values)+')'
  if isinstance(n,ast.BinOp):
   if isinstance(n.op,ast.BitOr):return '$.union('+self.e(n.left)+', '+self.e(n.right)+')'
   if isinstance(n.op,ast.Add):return '$.add('+self.e(n.left)+', '+self.e(n.right)+')'
   if isinstance(n.op,ast.Mult):return '$.mul('+self.e(n.left)+', '+self.e(n.right)+')'
   if isinstance(n.op,ast.Mod):return '$.mod('+self.e(n.left)+', '+self.e(n.right)+')'
   raise ValueError(ast.dump(n))
  if isinstance(n,ast.IfExp):return f'($.truth({self.e(n.test)}) ? {self.e(n.body)} : {self.e(n.orelse)})'
  if isinstance(n,ast.JoinedStr):return '('+' + '.join(json.dumps(x.value) if isinstance(x,ast.Constant) else '$.str('+self.e(x.value)+')' for x in n.values)+')'
  if isinstance(n,ast.Lambda):
   args=[ident(x.arg) for x in n.args.args]
   defaults=[self.e(x) for x in n.args.defaults]
   params=[x+(' = '+defaults[i-len(args)+len(defaults)] if i>=len(args)-len(defaults) else '') for i,x in enumerate(args)]
   return '('+', '.join(params)+') => '+self.e(n.body)
  if isinstance(n,(ast.ListComp,ast.GeneratorExp,ast.DictComp)):
   expr='__out.push('+self.e(n.elt)+');' if not isinstance(n,ast.DictComp) else '__out['+self.e(n.key)+'] = '+self.e(n.value)+';'
   for gen in reversed(n.generators):
    for cond in reversed(gen.ifs):expr='if ($.truth('+self.e(cond)+')) { '+expr+' }'
    expr='for (const '+self.target(gen.target)+' of $.iterable('+self.e(gen.iter)+')) { '+expr+' }'
   return '(() => { const __out: any = '+('{}' if isinstance(n,ast.DictComp) else '[]')+'; '+expr+' return __out; })()'
  if isinstance(n,ast.NamedExpr):return '('+self.e(n.target)+' = '+self.e(n.value)+')'
  if isinstance(n,ast.Starred):return '...$.iterable('+self.e(n.value)+')'
  raise ValueError(f'{self.file}:{n.lineno} expression {ast.dump(n)}')
 def target(self,n):
  if isinstance(n,ast.Name):return ident(n.id)
  if isinstance(n,(ast.Tuple,ast.List)):return '['+', '.join(self.target(v) for v in n.elts)+']'
  if isinstance(n,ast.Attribute):return self.e(n.value)+'['+json.dumps(n.attr)+']'
  if isinstance(n,ast.Subscript):return self.e(n.value)+'['+self.e(n.slice)+']'
  raise ValueError(ast.dump(n))
 def block(self,body):return '\n'.join(self.s(n) for n in body)
 def s(self,n,top=False):
  if isinstance(n,ast.Expr):
   if isinstance(n.value,ast.Constant) and isinstance(n.value.value,str):return '/** '+n.value.value.replace('*/','* /')+' */'
   return self.e(n.value)+';'
  if isinstance(n,(ast.Assign,ast.AnnAssign)):
   if isinstance(n,ast.AnnAssign) and n.value is None:return ''
   targets=n.targets if isinstance(n,ast.Assign) else [n.target]
   result='\n'.join(('export let ' if top and isinstance(t,ast.Name) else '')+self.target(t)+' = '+self.e(n.value)+';' for t in targets)
   if top and not self.tests and isinstance(n.value,ast.Name) and n.value.id in CLASSES: result+='\n'+ '\n'.join('export type '+ident(t.id)+' = '+ident(n.value.id)+';' for t in targets if isinstance(t,ast.Name))
   return result
  if isinstance(n,ast.AugAssign):return self.target(n.target)+' = $.add('+self.e(n.target)+', '+self.e(n.value)+');'
  if isinstance(n,ast.Return):return 'return '+self.e(n.value)+';'
  if isinstance(n,ast.If):return 'if ($.truth('+self.e(n.test)+')) {\n'+self.block(n.body)+'\n}'+(' else {\n'+self.block(n.orelse)+'\n}' if n.orelse else '')
  if isinstance(n,ast.For):return 'for ('+self.target(n.target)+' of $.iterable('+self.e(n.iter)+')) {\n'+self.block(n.body)+'\n}'
  if isinstance(n,ast.While):return 'while ($.truth('+self.e(n.test)+')) {\n'+self.block(n.body)+'\n}'
  if isinstance(n,ast.Continue):return 'continue;'
  if isinstance(n,ast.Break):return 'break;'
  if isinstance(n,ast.Pass):return ''
  if isinstance(n,ast.Raise):return 'throw '+self.e(n.exc)+';'
  if isinstance(n,ast.Assert):
   message=self.e(n.msg) if n.msg else json.dumps(f'{self.file.name}:{n.lineno}: {ast.unparse(n.test)}')
   if isinstance(n.test,ast.Compare) and len(n.test.ops)==1 and isinstance(n.test.ops[0],ast.Eq): return '$.assertEqual('+self.e(n.test.left)+', '+self.e(n.test.comparators[0])+', '+message+');'
   return '$.assert('+self.e(n.test)+', '+message+');'
  if isinstance(n,ast.Delete):return '\n'.join('delete '+self.target(t)+';' for t in n.targets)
  if isinstance(n,(ast.FunctionDef,ast.AsyncFunctionDef)):return self.function(n,top=top)
  if isinstance(n,ast.ClassDef):return self.classdef(n)
  if isinstance(n,ast.TypeAlias):return 'export type '+ident(n.name.id)+' = '+self.t(n.value)+';'
  if isinstance(n,ast.Try):
   catches=[]
   for h in n.handlers:
    types=h.type.elts if isinstance(h.type,ast.Tuple) else [h.type]
    check=' || '.join('$.isinstance(__error, '+self.e(t)+')' for t in types) if h.type else 'true'
    catches.append(('if' if not catches else 'else if')+' ('+check+') { '+('let '+ident(h.name)+' = __error; ' if h.name else '')+self.block(h.body)+' }')
   return 'try {\n'+self.block(n.body)+'\n} catch (__error) {\n'+'\n'.join(catches)+' else { throw __error; }\n}'
  if isinstance(n,(ast.With,ast.AsyncWith)):
   assert len(n.items)==1
   item=n.items[0];cx=item.context_expr
   if isinstance(n,ast.With):
    # pytest.raises: run the body itself inside a checked exception boundary.
    args=cx.args;kw={k.arg:k.value for k in cx.keywords};asyncbody=any(isinstance(x,ast.Await) for q in n.body for x in ast.walk(q))
    return (self.target(item.optional_vars)+' = ' if item.optional_vars else '')+('await ' if asyncbody else '')+'$.raises('+self.e(args[0])+', '+self.e(kw.get('match'))+', '+('async ' if asyncbody else '')+'() => {\n'+self.block(n.body)+'\n});'
   if isinstance(cx,ast.Call) and isinstance(cx.func,ast.Attribute) and cx.func.attr=='timeout':
    return 'return await $.timeout('+self.e(cx.args[0])+', async () => {\n'+self.block(n.body)+'\n});'
   if item.optional_vars is not None:
    return '{ const '+self.target(item.optional_vars)+' = await '+self.e(cx)+';\n'+self.block(n.body)+'\n}'
   return 'return await $.locked('+self.e(cx)+', async () => {\n'+self.block(n.body)+'\n});'
  if isinstance(n,ast.Match):
   out='';v=self.e(n.subject)
   for c in n.cases:
    if isinstance(c.pattern,ast.MatchAs):out+=' else {\n'+self.block(c.body)+'\n}';continue
    out+=('if' if not out else ' else if')+' ($.eq('+v+', '+self.e(c.pattern.value)+')) {\n'+self.block(c.body)+'\n}'
   return out
  if isinstance(n,(ast.Import,ast.ImportFrom)):return self.imports(n)
  raise ValueError(f'{self.file}:{getattr(n,"lineno",0)} statement {ast.dump(n)}')
 def function(self,n,top=False):
  oldmethod=self.method;self.method=self.cls is not None and not top
  method=self.method
  prop=any(isinstance(d,ast.Name) and d.id=='property' for d in n.decorator_list)
  ctor=False
  args=(n.args.posonlyargs+n.args.args)[1:] if method else n.args.posonlyargs+n.args.args
  names=[ident(a.arg) for a in args]+[ident(a.arg) for a in n.args.kwonlyargs]
  allnames=[a.arg for a in args]+[a.arg for a in n.args.kwonlyargs]
  defaults={a.arg:self.e(v) for a,v in zip(args[-len(n.args.defaults):],n.args.defaults)} if n.args.defaults else {}
  defaults.update({a.arg:self.e(v) for a,v in zip(n.args.kwonlyargs,n.args.kw_defaults) if v is not None})
  defobj='{'+', '.join(json.dumps(k)+': '+v for k,v in defaults.items())+'}'
  stores=set()
  for stmt in n.body:
   for q in ast.walk(stmt):
    if isinstance(q,ast.Name) and isinstance(q.ctx,ast.Store):stores.add(ident(q.id))
  stores-=set(names)|{'self'}
  # Nested scopes are isolated; extra declarations for their stores are harmless.
  if n.args.vararg: names.append(ident(n.args.vararg.arg));allnames.append(n.args.vararg.arg);stores.discard(ident(n.args.vararg.arg))
  if n.args.kwarg: names.append(ident(n.args.kwarg.arg));allnames.append(n.args.kwarg.arg);stores.discard(ident(n.args.kwarg.arg))
  pre=('let '+', '.join(sorted(stores))+';\n') if stores else ''
  bind='' if prop else 'let {'+', '.join((json.dumps(k)+': '+v) for k,v in zip(allnames,names))+'} = $.bind(__args, '+json.dumps([a.arg for a in args])+', '+defobj+', '+json.dumps([a.arg for a in n.args.kwonlyargs])+', '+json.dumps(n.args.vararg.arg if n.args.vararg else None)+', '+json.dumps(n.args.kwarg.arg if n.args.kwarg else None)+');\n'
  name='constructor' if ctor else ('get '+ident(n.name) if prop else ident(n.name))
  prefix='' if method else ('export ' if top else '')+'function '
  asyncs='async ' if isinstance(n,ast.AsyncFunctionDef) else ''
  result=('/** '+(ast.get_docstring(n) or ('Translated upstream '+n.name+'.')).replace('*/','* /')+' */\n')+(asyncs+name if method else prefix.replace('function ',asyncs+'function ')+name)+'('+('' if prop else '...__args: any[]')+')'+('' if ctor else ': any')+' {\n'+('super(...__args);\n' if ctor and self.bases else '')+pre+bind+self.block(n.body)+'\n}'
  if not self.tests and not prop and n.name!='__init__':
   overload=(('' if method else 'export function ')+ident(n.name)+'('+self.signature(n,method)+'): '+('Promise<'+self.t(n.returns)+'>' if isinstance(n,ast.AsyncFunctionDef) else self.t(n.returns))+';\n')
   result=overload+result
  elif not self.tests and prop:
   result=result.replace('): any {', '): '+self.t(n.returns)+' {',1)
  self.method=oldmethod
  if top and self.tests and n.name.startswith('test_'):
   params=[d for d in n.decorator_list if isinstance(d,ast.Call) and isinstance(d.func,ast.Attribute) and d.func.attr=='parametrize']
   decorators='['+', '.join('['+self.e(d.args[0])+', '+self.e(d.args[1])+']' for d in params)+']'
   self.reg.append('$.register('+json.dumps(self.file.name+'::'+n.name)+', '+ident(n.name)+', '+decorators+');')
  return result
 def classdef(self,n):
  oldcls,oldmethod=self.cls,self.method;self.cls=n.name;self.method=True
  bases=[self.e(b) for b in n.bases];oldbases=getattr(self,'bases',[]);self.bases=bases
  isenum=any(isinstance(b,ast.Name) and b.id in ('StrEnum','Enum') for b in n.bases)
  if any(isinstance(b,ast.Name) and b.id=='Protocol' for b in n.bases):
   method=next(x for x in n.body if isinstance(x,ast.FunctionDef) and x.name=='__call__')
   self.method=oldmethod;self.cls=oldcls;self.bases=oldbases
   return '/** '+(ast.get_docstring(n) or n.name)+' */\nexport type '+ident(n.name)+' = ('+self.signature(method,True)+') => '+self.t(method.returns)+';'
  if isenum:
   values={t.id:self.e(s.value) for s in n.body if isinstance(s,ast.Assign) for t in s.targets if isinstance(t,ast.Name)}
   result='export const '+ident(n.name)+' = $.enumType('+json.dumps(n.name)+', {'+', '.join(json.dumps(k)+': '+v for k,v in values.items())+'}, '+str(any(isinstance(b,ast.Name) and b.id=='StrEnum' for b in n.bases)).lower()+');\nexport type '+ident(n.name)+' = ReturnType<typeof '+ident(n.name)+'>;'
  else:
   datac=any(isinstance(d,ast.Call) and isinstance(d.func,ast.Name) and d.func.id=='dataclass' for d in n.decorator_list)
   fields=[s for s in n.body if isinstance(s,ast.AnnAssign) and isinstance(s.target,ast.Name)] if datac else []
   methods=[s for s in n.body if isinstance(s,(ast.FunctionDef,ast.AsyncFunctionDef))]
   content=[]
   if datac:
    content += ['readonly '+ident(f.target.id)+': '+self.t(f.annotation)+';' for f in fields]
    specs='['+', '.join('['+json.dumps(f.target.id)+', '+('$.MISSING' if f.value is None else self.e(f.value))+']' for f in fields)+']'
    content.append('static __fields = '+specs+';')
    allfs=allfields(n)
    content.append('constructor('+', '.join(ident(f.target.id)+('?' if f.value is not None else '')+': '+self.t(f.annotation) for f in allfs)+');')
    content.append('constructor(options: { '+ '; '.join(ident(f.target.id)+('?' if f.value is not None else '')+': '+self.t(f.annotation) for f in allfs)+' });')
    content.append('constructor(...__args: any[]) { '+('super($.SKIP); ' if bases else '')+'if (__args[0] === $.SKIP) return; $.initData(this, '+ident(n.name)+', __args); '+('this.__post_init__();' if any(x.name=='__post_init__' for x in methods) else '')+' Object.freeze(this); }')
   if not datac: content.append('constructor(...__args: any[]) { '+('super($.SKIP); ' if bases else '')+'if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, '+ident(n.name)+', __args); }')
   content += [self.function(m) for m in methods]
   result='/** '+(ast.get_docstring(n) or 'Translated upstream '+n.name+'.').replace('*/','* /')+' */\nexport class '+ident(n.name)+(' extends $.mix('+', '.join(bases)+')' if bases else '')+' {\n'+'\n'.join(content)+'\n}\n$.classType('+ident(n.name)+');'
  if not self.tests and not isenum:
   inherit=[ident(b.id) for b in n.bases if isinstance(b,ast.Name) and b.id in CLASSES]
   if inherit:result+='\nexport interface '+ident(n.name)+' extends '+', '.join(inherit)+' {}'
  self.cls,self.method,self.bases=oldcls,oldmethod,oldbases
  return result
 def imports(self,n):
  if isinstance(n,ast.Import):
   lines=[]
   for a in n.names:
    name=ident(a.asname or a.name)
    if a.name=='pynissan':lines.append('import * as '+name+' from "../src/index";')
    else:lines.append('const '+name+' = $.'+a.name+';')
   return '\n'.join(lines)
  mod=n.module or ''
  if mod=='__future__':return ''
  if mod in STDLIB:
   return '\n'.join('const '+ident(a.asname or a.name)+' = $.'+a.name+';' for a in n.names)
  if mod.startswith('pynissan'):
   path='../src/'+(mod.split('.',1)[1] if '.' in mod else 'index')
  elif self.tests and mod.startswith('test_'):path='./'+mod
  elif n.level:path='./'+('index' if mod=='__init__' else ('native-client' if self.file.stem=='__init__' and mod=='client' else mod))
  else:raise ValueError('Unknown import '+ast.unparse(n))
  if not mod and n.level:
   return '\n'.join('import * as '+ident(a.asname or a.name)+' from "./'+a.name+'";' for a in n.names)
  return 'import { '+', '.join(a.name+(' as '+ident(a.asname) if a.asname else '') for a in n.names)+' } from '+json.dumps(path)+';'+('\nexport { '+', '.join(ident(a.asname or a.name) for a in n.names)+' };' if not self.tests else '')
 def run(self):
  tree=ast.parse(self.file.read_text())
  result=['// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.','// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.','import { py as $ } from '+json.dumps('./_support' if self.tests else './_runtime')+';']
  for n in tree.body:result.append(self.s(n,top=True))
  result.extend(self.reg)
  if not self.tests and self.file.stem=='__init__': result.append('export * as operations from \"./operations\";\nexport { FetchSession } from \"./http\";\nexport { kw } from \"./_runtime\";\nexport { dateTime, dateOnly, DateTime } from \"./dates\";')
  return '\n\n'.join(result)+'\n'
files=sorted((UP/('tests' if MODE=='tests' else 'src/pynissan')).glob('*.py'))
for f in files:
 if MODE=='tests' and f.name=='test_public_api.py':continue # Language-specific contracts have a native translation.
 out=ROOT/('test' if MODE=='tests' else 'src')/(('index' if f.stem=='__init__' else f.stem)+'.ts')
 try:out.write_text(Translator(f,MODE=='tests').run())
 except Exception as e:print(f,e);raise
print(f'Translated {len(files)} {MODE} modules')
