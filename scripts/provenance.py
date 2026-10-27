#!/usr/bin/env python3
"""Record every upstream source/test hash and public source surface."""
import ast,hashlib,json,pathlib,sys,subprocess
root=pathlib.Path(__file__).resolve().parents[1]; up=pathlib.Path(sys.argv[1]).resolve()
trees={p.stem:ast.parse(p.read_text()) for p in (up/'src/pynissan').glob('*.py')}
exports=next(ast.literal_eval(n.value) for n in trees['__init__'].body if isinstance(n,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='__all__' for t in n.targets))
classes=[n for t in trees.values() for n in t.body if isinstance(n,ast.ClassDef)]
functions=[n for t in trees.values() for n in t.body if isinstance(n,(ast.FunctionDef,ast.AsyncFunctionDef))]
methods=sorted({n.name for c in classes if c.name.endswith('Mixin') or c.name=='_NissanClientBase' for n in c.body if isinstance(n,ast.AsyncFunctionDef) and n.name.startswith('async_')})
result={'upstream':'https://github.com/bvdcode/nissan-connect-sdk','commit':subprocess.check_output(['git','-C',str(up),'rev-parse','HEAD'],text=True).strip(),'upstreamVersion':'0.2.1','translation':'Auto-generated TypeScript; native Node.js runtime','license':'MIT, Copyright (c) 2026 Vadim Belov','files':{str(p.relative_to(up)):hashlib.sha256(p.read_bytes()).hexdigest() for folder in ['src/pynissan','tests'] for p in sorted((up/folder).glob('*.py'))},'publicExports':exports,'asyncMethods':methods,'undocumentedPublicSymbols':sorted(n.name for n in classes+functions if n.name in exports and not ast.get_docstring(n)),'upstreamTestFunctions':sorted(f'{p.name}::{n.name}' for p in (up/'tests').glob('*.py') for n in ast.parse(p.read_text()).body if isinstance(n,(ast.FunctionDef,ast.AsyncFunctionDef)) and n.name.startswith('test_'))}
(root/'PROVENANCE.json').write_text(json.dumps(result,indent=2)+'\n')
print(len(methods),'async methods,',len(exports),'public exports,',len(result['upstreamTestFunctions']),'test functions')
