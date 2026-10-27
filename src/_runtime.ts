/** Native JavaScript equivalents for the Python constructs used by the generated SDK. */
import { isDeepStrictEqual } from 'node:util';
import { createHash, randomUUID } from 'node:crypto';
import { AsyncLocalStorage } from 'node:async_hooks';

export namespace py {
  export const MISSING = Symbol('missing');
  export const SKIP = {};
  const KW = Symbol('keyword arguments');
  const ENUM = Symbol('enum');
  export class ValueError extends Error {}
  export class RuntimeError extends Error {}
  export class TimeoutError extends Error {}
  export class IndexError extends Error {}
  export class KeyError extends Error {}
  export class AssertionError extends Error {}
  export const TypeError = globalThis.TypeError;
  export const FrozenInstanceError = globalThis.TypeError;
  export const Exception = Error;
  export const ClientError = class ClientError extends Error {};
  export const ClientSession = Object;
  export const Mapping = Symbol('Mapping');
  export const Sequence = Symbol('Sequence');
  export const Protocol = class Protocol {};
  export const Final = null;
  export const Callable = null;
  export const Awaitable = null;
  export const StrEnum = Symbol('StrEnum');
  export const Enum = StrEnum;
  export class EnumValue<Value extends string = string> {
    readonly [ENUM] = true;
    constructor(readonly value: Value, readonly name: string, readonly owner: string, readonly stringEnum = true) {}
    toString() { return this.value; }
    toJSON() { return this.value; }
    [Symbol.toPrimitive]() { return this.value; }
  }
  export type EnumType<T extends Record<string,string>> = ((value:T[keyof T]|EnumValue<T[keyof T]>)=>EnumValue<T[keyof T]>) & {readonly [K in keyof T]:EnumValue<T[K]>} & Iterable<EnumValue<T[keyof T]>>;
  export function enumType<const T extends Record<string,string>>(name: string, values: T, stringEnum = true): EnumType<T> {
    const members = Object.entries(values).map(([k, v]) => Object.freeze(new EnumValue(v, k, name, stringEnum)));
    const type: any = (value: any) => {
      const found = members.find(m => m === value || m.value === value);
      if (!found) throw new ValueError(`${value} is not a valid ${name}`);
      return found;
    };
    for (const member of members) type[member.name] = member;
    type[Symbol.iterator] = () => members[Symbol.iterator]();
    type.__enum = name;
    return type;
  }
  export const isKw = (v:any):boolean => Boolean(v?.[KW]);
  export const kw = (values: Record<string, any>): any => ({[KW]: true, values});
  export function bind(args: any[], positional: string[], defaults: Record<string, any>, keyword: string[], vararg: string | null, kwarg: string | null): any {
    const copy = [...args];
    let named: any = {};
    if (copy.length && copy.at(-1)?.[KW]) named = copy.pop().values;
    // Native callers may pass a final options object for Python keyword-only parameters.
    else if (keyword.length && copy.length > positional.length && isRecord(copy.at(-1))) named = copy.pop();
    const out: any = {...defaults};
    const assigned = new Set<string>();
    copy.slice(0, positional.length).forEach((value, i) => { out[positional[i]] = value; assigned.add(positional[i]); });
    if (copy.length > positional.length && !vararg) throw new TypeError('Too many positional arguments');
    if (vararg) out[vararg] = copy.slice(positional.length);
    if (kwarg) out[kwarg] = {};
    for (const [key, value] of Object.entries(named)) {
      if (!positional.includes(key) && !keyword.includes(key)) {
        if (kwarg) { out[kwarg][key] = value; continue; }
        throw new TypeError(`Unexpected keyword argument ${key}`);
      }
      if (assigned.has(key)) throw new TypeError(`Multiple values for ${key}`);
      out[key] = value;
    }
    for (const key of [...positional, ...keyword]) if (!(key in out)) throw new TypeError(`Missing required argument ${key}`);
    return out;
  }
  export function call(fn: any, args: any[], keywords: any = null): any {
    if (typeof fn !== 'function') throw new TypeError(`Cannot call ${String(fn)}`);
    const input = keywords ? [...args, kw(keywords)] : args;
    if (fn.__class || fn === Error || Error.isPrototypeOf(fn) || /^class\s/.test(Function.prototype.toString.call(fn))) return new fn(...input);
    const result = fn(...input); if (result instanceof Promise) result.catch(() => {}); return result;
  }
  export function classType(cls: any) { Object.defineProperty(cls, '__class', {value: true}); }
  export function mix(...bases: any[]): any {
    if (!bases.length) return class {};
    class Combined extends bases[0] {}
    // Python MRO uses the first implementation found in declared bases.
    for (const base of [...bases].reverse()) {
      const chain = []; for (let p = base.prototype; p && p !== Object.prototype; p = Object.getPrototypeOf(p)) chain.unshift(p);
      for (const p of chain) for (const key of Reflect.ownKeys(p)) if (key !== 'constructor') Object.defineProperty(Combined.prototype, key, Object.getOwnPropertyDescriptor(p, key)!);
    }
    return Combined;
  }
  export function initData(target: any, cls: any, args: any[]) {
    const chain = []; for(let c=cls; c && c!==Function.prototype; c=Object.getPrototypeOf(c)) if(Object.hasOwn(c,'__fields')) chain.unshift(c.__fields);
    const fields = chain.flat() as [string, any][];
    let input = args;
    if (args.length === 1 && isRecord(args[0]) && !args[0]?.[KW]) input = [kw(args[0])];
    const defaults = Object.fromEntries(fields.filter(f => f[1] !== MISSING).map(([key, value]) => [key, value?.__factory ? call(value.__factory, []) : value]));
    Object.assign(target, bind(input, fields.map(f => f[0]), defaults, [], null, null));
  }
  export const field = (...args: any[]) => {
    const {default_factory, ...rest} = args.at(-1)?.values ?? {};
    return default_factory ? {__factory: default_factory} : rest.default;
  };
  export function superInit(target: any, cls: any, args: any[]) { const parent=Object.getPrototypeOf(cls.prototype); const init=parent?.__init__; if(init) return init.apply(target,args); target.message = str(args[0] ?? ''); }
  function isRecord(v: any): boolean { return v !== null && typeof v === 'object' && (Object.getPrototypeOf(v) === Object.prototype || Object.getPrototypeOf(v) === null); }
  export function str(v: any = ''): string { return v === null ? 'None' : v === true ? 'True' : v === false ? 'False' : String(v); }
  export function int(v: any): number { const n = Number(v); if (!Number.isFinite(n)) throw new ValueError('Invalid integer'); return Math.trunc(n); }
  export function float(v: any): number { const n = /^(?:[-+]?inf(?:inity)?)$/i.test(String(v)) ? (String(v).startsWith('-')?-Infinity:Infinity) : Number(v); if (Number.isNaN(n) && String(v).toLowerCase() !== 'nan') throw new ValueError('Invalid float'); return n; }
  export function bool(v: any): boolean { return truth(v); }
  export function object(v?: any) { return v ?? {}; }
  export function dict(value: any = {}, ...rest: any[]) {
    const kwargs = rest.at(-1)?.[KW] ? rest.at(-1).values : value?.[KW] ? value.values : {};
    if (value?.[KW]) value = {};
    return {...(Array.isArray(value) ? Object.fromEntries(value) : value), ...kwargs};
  }
  export function* iterable(value: any): Iterable<any> {
    if (value == null) throw new TypeError('None is not iterable');
    if (value[Symbol.iterator]) yield* value;
    else yield* Object.keys(value);
  }
  export const list = (v: any = []) => [...iterable(v)];
  export const tuple = list;
  export const set = (v: any = []) => new Set(iterable(v));
  export const frozenset = set;
  export const len = (v: any) => v?.length ?? v?.size ?? Object.keys(v).length;
  export function isinstance(value: any, type: any): boolean {
    if (Array.isArray(type)) return type.some(t => isinstance(value, t));
    if (type === Mapping || type === dict) return isRecord(value);
    if (type === Sequence || type === list || type === tuple) return Array.isArray(value);
    if (type === str) return typeof value === 'string' || value instanceof EnumValue;
    if (type === bool) return typeof value === 'boolean';
    if (type === int) return typeof value === 'boolean' || (typeof value === 'number' && Number.isInteger(value));
    if (type === float) return typeof value === 'number';
    if (type === StrEnum) return value instanceof EnumValue && value.stringEnum;
    if (type?.__enum) return value instanceof EnumValue && value.owner === type.__enum;
    if (type === datetime || type === date) return value instanceof DateValue && (type !== date || value.isDate);
    if (type === set || type === frozenset) return value instanceof Set;
    return typeof type === 'function' && value instanceof type;
  }
  export function truth(value: any): boolean {
    if (value == null || value === false || value === 0 || value === '') return false;
    if (Array.isArray(value) || typeof value === 'string') return value.length > 0;
    if (value instanceof Set || value instanceof Map) return value.size > 0;
    if (isRecord(value)) return Object.keys(value).length > 0;
    return true;
  }
  export function eq(a: any, b: any): boolean {
    if (a instanceof EnumValue || b instanceof EnumValue) return str(a) === str(b);
    if (a instanceof DateValue && b instanceof DateValue) return a.epoch === b.epoch;
    if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every((v,i) => eq(v,b[i]));
    if (a && b && typeof a === 'object' && typeof b === 'object' && !(a instanceof Set) && !(b instanceof Set)) {
      if (a.constructor !== b.constructor && !isRecord(a) && !isRecord(b)) return false;
      const keys = Object.keys(a); return keys.length === Object.keys(b).length && keys.every(k => k in b && eq(a[k],b[k]));
    }
    return isDeepStrictEqual(a,b);
  }
  export const contains = (haystack: any, value: any): boolean => typeof haystack === 'string' ? haystack.includes(str(value)) : Array.isArray(haystack) || haystack instanceof Set ? [...haystack].some(v => eq(v,value)) : Object.hasOwn(haystack,str(value));
  export const or = (...fns: (() => any)[]) => { let v; for (const f of fns) { v = f(); if (truth(v)) return v; } return v; };
  export const and = (...fns: (() => any)[]) => { let v; for (const f of fns) { v = f(); if (!truth(v)) return v; } return v; };
  export const union = (a: any, b: any) => a instanceof Set && b instanceof Set ? new Set([...a,...b]) : typeof a === 'function' || Array.isArray(a) ? [a,b].flat() : ({...a, ...b});
  export const add = (a: any, b: any) => Array.isArray(a) ? [...a, ...b] : a + b;
  export const mul = (a: any, b: any) => typeof a === 'string' ? a.repeat(Math.max(0,b)) : a*b;
  export const mod = (a: number, b: number) => ((a%b)+b)%b;
  export function get(value: any, key: any): any {
    const k = Array.isArray(value) || typeof value === 'string' ? (key < 0 ? value.length + key : key) : str(key);
    if (!(k in Object(value))) throw new IndexError(`Missing key or index ${k}`);
    return value[k];
  }
  export const slice = (value: any, start: any, stop: any, step: any) => { if (step != null && step !== 1) throw new ValueError('Unsupported slice step'); return value.slice(start ?? 0, stop ?? undefined); };
  export function attr(value: any, key: string): any {
    if (value == null) throw new TypeError(`Cannot access ${key} on None`);
    if (key === 'get' && isRecord(value)) return (k: any, fallback: any = null) => Object.hasOwn(value, str(k)) ? value[str(k)] : fallback;
    if (key === 'items') return () => Object.entries(value);
    if (key === 'values') return () => Object.values(value);
    if (key === 'keys') return () => Object.keys(value);
    if (key === 'update' && isRecord(value)) return (v: any) => Object.assign(value, v?.[KW] ? v.values : v);
    if (key === '__setitem__') return (k: any, v: any) => { value[k] = v; };
    if (key === 'append') return (v: any) => { value.push(v); };
    if (key === 'pop' && Array.isArray(value)) return (i: number = -1) => { if (!value.length) throw new IndexError('pop from empty list'); return value.splice(i < 0 ? value.length + i : i,1)[0]; };
    if (key === 'encode' && typeof value === 'string') return () => Buffer.from(value);
    if (key === 'decode' && Buffer.isBuffer(value)) return () => value.toString('utf8');
    if (key === 'partition') return (sep:string) => {const i=value.indexOf(sep);return i<0?[value,'','']:[value.slice(0,i),sep,value.slice(i+sep.length)];};
    if (key === 'removeprefix') return (prefix: string) => value.startsWith(prefix) ? value.slice(prefix.length) : value;
    if (key === 'strip') return () => value.trim();
    if (key === 'rstrip') return (chars: string = ' ') => value.replace(new RegExp('['+chars+']+$'),'');
    if (key === 'lower') return () => value.toLowerCase();
    if (key === 'startswith') return (prefix: any) => (Array.isArray(prefix) ? prefix : [prefix]).some(p => value.startsWith(p));
    if (key === 'endswith') return (suffix: any) => (Array.isArray(suffix) ? suffix : [suffix]).some(p => value.endsWith(p));
    if (key === 'join' && typeof value === 'string') return (items: any) => [...iterable(items)].map(str).join(value);
    if (key === 'format') return (...args: any[]) => { const fields=args.at(-1)?.values ?? {}; return value.replace(/\{(\w+)\}/g, (_: any,k: string) => str(fields[k])); };
    if (key === 'replace' && typeof value === 'string') return (old: string, next: string) => value.split(old).join(next);
    const result = value[key];
    if (result === undefined && !(key in Object(value))) throw new TypeError(`Missing attribute ${key}`);
    return typeof result === 'function' && !result.__class && !result.__enum ? result.bind(value) : result;
  }
  export const getattr = (v: any, k: string, fallback: any = MISSING) => k in v ? attr(v,k) : fallback !== MISSING ? fallback : attr(v,k);
  export const hasattr = (v: any, k: string) => k in v;
  export const vars = (v: any) => v;
  export const enumerate = (v: any, start: any = 0) => [...iterable(v)].map((x,i) => [i+(start?.[KW]?start.values.start:start),x]);
  export const range = (start: number, end?: number) => Array.from({length:Math.max(0,(end ?? start)-(end==null?0:start))},(_,i)=>i+(end==null?0:start));
  export const any = (v: any) => [...iterable(v)].some(truth);
  export const all = (v: any) => [...iterable(v)].every(truth);
  export const sum = (v: any) => [...iterable(v)].reduce((a,b)=>a+Number(b),0);
  export const iter = (v: any) => iterable(v)[Symbol.iterator]();
  export const next = (v: any) => v.next().value;
  export const assert_never = (v: never): never => { throw new ValueError(`Unexpected value ${v}`); };
  export const uuid4 = randomUUID;
  export const version = (_: any) => '0.1.0';
  export const urlunsplit = (parts: string[]) => `${parts[0]}://${parts[1]}/${parts[2]}${parts[3]?'?'+parts[3]:''}${parts[4]?'#'+parts[4]:''}`;
  export const base64 = {
    b64encode: (v: any) => Buffer.from(Buffer.from(v).toString('base64')),
    b64decode: (v: any) => Buffer.from(v,'base64'),
    urlsafe_b64encode: (v: any) => Buffer.from(Buffer.from(v).toString('base64url')),
    urlsafe_b64decode: (v: any) => Buffer.from(v,'base64url'),
  };
  export const b64decode = base64.b64decode;
  export const json = { dumps: JSON.stringify, loads: (v: any) => { try { return JSON.parse(str(v)); } catch { throw new ValueError('Invalid JSON'); } }, JSONDecodeError: ValueError };
  export const math = {isfinite: Number.isFinite};
  export const time = {time: () => Date.now()/1000};
  export const inspect = {isawaitable: (v: any) => v != null && typeof v.then === 'function'};
  export const hashlib = {sha256: (v: any) => ({hexdigest: () => createHash('sha256').update(v).digest('hex')})};
  export const re = {findall: (pattern: string, v: string) => [...v.matchAll(new RegExp(pattern,'g'))].map(m => m.length>1 ? m.length===2?m[1]:m.slice(1) : m[0]), escape: (v: string) => v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')};
  export class DateValue {
    constructor(readonly iso: string, readonly isDate = false) {}
    get epoch() { return Date.parse(this.iso); }
    get tzinfo() { return /(?:Z|[+-]\d\d:\d\d)$/.test(this.iso) ? {} : null; }
    utcoffset() { const m = this.iso.match(/([+-])(\d\d):(\d\d)$/); return this.tzinfo ? (m ? (m[1]==='-'?-1:1)*(+m[2]*60 + +m[3])*60 : 0) : null; }
    isoformat() { return this.iso; }
    toJSON() { return this.iso; }
    toString() { return this.iso; }
  }
  function parseDate(value: string, isDate = false) {
    if (typeof value !== 'string' || !/^\d{4}-\d\d-\d\d(?:$|T)/.test(value) || !Number.isFinite(Date.parse(value))) throw new ValueError('Invalid ISO date');
    const [year,month,day]=value.slice(0,10).split('-').map(Number);if(month<1||month>12||day<1||day>new Date(Date.UTC(year,month,0)).getUTCDate() || (isDate && value.length!==10)) throw new ValueError('Invalid ISO date');
    return new DateValue(value.replace(/Z$/,'+00:00'), isDate);
  }
  export const UTC = 0;
  export const timedelta = (...args:any[]) => {const v=args.at(-1)?.values ?? {};return (v.days??0)*86400+(v.hours??0)*3600+(v.minutes??0)*60+(v.seconds??0);};
  export const timezone = (offset:number)=>offset;
  function formatOffset(offset:number) {return (offset<0?'-':'+')+String(Math.floor(Math.abs(offset)/3600)).padStart(2,'0')+':'+String(Math.floor(Math.abs(offset)%3600/60)).padStart(2,'0');}
  export const datetime: any = Object.assign((...args: any[]) => {
    const options=args.at(-1)?.[KW]?args.pop().values:{}; const [y,m,d,h=0,min=0,s=0] = args; const tz=options.tzinfo; 
    return parseDate(`${String(y).padStart(4,'0')}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}T${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(s).padStart(2,'0')}${tz===0?'+00:00':typeof tz==='number'?formatOffset(tz):''}`);
  }, {fromisoformat: (v: string) => parseDate(v)});
  export const date: any = Object.assign((y: number,m: number,d: number) => parseDate(`${String(y).padStart(4,'0')}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`,true), {fromisoformat: (v: string) => parseDate(v,true)});
  class Mutex {
    tail: Promise<void> = Promise.resolve();
    async run<T>(fn: () => Promise<T>): Promise<T> { let release!:()=>void; const before=this.tail; this.tail=new Promise(r=>release=r); await before; try {return await fn();} finally {release();} }
  }
  const deadlines = new AsyncLocalStorage<AbortSignal>();
  export const currentSignal = () => deadlines.getStore();
  export const locked = <T>(mutex: Mutex, fn:()=>Promise<T>) => mutex.run(fn);
  export async function timeout<T>(seconds: number, fn:()=>Promise<T>): Promise<T> {
    const controller = new AbortController();
    let timer: NodeJS.Timeout;
    const limit = new Promise<never>((_, reject) => { timer=setTimeout(()=>{controller.abort();reject(new TimeoutError('Operation timed out'));},seconds*1000); });
    try { return await Promise.race([deadlines.run(controller.signal,fn), limit]); } finally { clearTimeout(timer!); controller.abort(); }
  }
  export const asyncio = {
    Lock: () => new Mutex(),
    sleep: (seconds: number) => new Promise<void>((resolve,reject) => { const signal=deadlines.getStore(); if(signal?.aborted) return reject(new TimeoutError()); const timer=setTimeout(done,seconds*1000); function done() {signal?.removeEventListener('abort',abort);resolve();} function abort(){clearTimeout(timer);reject(new TimeoutError());} signal?.addEventListener('abort',abort,{once:true}); }),
  };
  export const ClientTimeout = (...args: any[]) => args.at(-1)?.values ?? {};

}

export const kw = py.kw;
