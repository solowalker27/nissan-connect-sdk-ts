"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kw = exports.py = void 0;
/** Native JavaScript equivalents for the Python constructs used by the generated SDK. */
const node_util_1 = require("node:util");
const node_crypto_1 = require("node:crypto");
const node_async_hooks_1 = require("node:async_hooks");
var py;
(function (py) {
    py.MISSING = Symbol('missing');
    py.SKIP = {};
    const KW = Symbol('keyword arguments');
    const ENUM = Symbol('enum');
    class ValueError extends Error {
    }
    py.ValueError = ValueError;
    class RuntimeError extends Error {
    }
    py.RuntimeError = RuntimeError;
    class TimeoutError extends Error {
    }
    py.TimeoutError = TimeoutError;
    class IndexError extends Error {
    }
    py.IndexError = IndexError;
    class KeyError extends Error {
    }
    py.KeyError = KeyError;
    class AssertionError extends Error {
    }
    py.AssertionError = AssertionError;
    py.TypeError = globalThis.TypeError;
    py.FrozenInstanceError = globalThis.TypeError;
    py.Exception = Error;
    py.ClientError = class ClientError extends Error {
    };
    py.ClientSession = Object;
    py.Mapping = Symbol('Mapping');
    py.Sequence = Symbol('Sequence');
    py.Protocol = class Protocol {
    };
    py.Final = null;
    py.Callable = null;
    py.Awaitable = null;
    py.StrEnum = Symbol('StrEnum');
    py.Enum = py.StrEnum;
    class EnumValue {
        value;
        name;
        owner;
        stringEnum;
        [ENUM] = true;
        constructor(value, name, owner, stringEnum = true) {
            this.value = value;
            this.name = name;
            this.owner = owner;
            this.stringEnum = stringEnum;
        }
        toString() { return this.value; }
        toJSON() { return this.value; }
        [Symbol.toPrimitive]() { return this.value; }
    }
    py.EnumValue = EnumValue;
    function enumType(name, values, stringEnum = true) {
        const members = Object.entries(values).map(([k, v]) => Object.freeze(new EnumValue(v, k, name, stringEnum)));
        const type = (value) => {
            const found = members.find(m => m === value || m.value === value);
            if (!found)
                throw new ValueError(`${value} is not a valid ${name}`);
            return found;
        };
        for (const member of members)
            type[member.name] = member;
        type[Symbol.iterator] = () => members[Symbol.iterator]();
        type.__enum = name;
        return type;
    }
    py.enumType = enumType;
    py.keywordValues = (v) => v?.[KW] ? v.values : v;
    py.isKw = (v) => Boolean(v?.[KW]);
    py.kw = (values) => ({ [KW]: true, values });
    function bind(args, positional, defaults, keyword, vararg, kwarg) {
        const copy = [...args];
        let named = {};
        if (copy.length && copy.at(-1)?.[KW])
            named = copy.pop().values;
        // Native callers may pass a final options object for Python keyword-only parameters.
        else if (keyword.length && copy.length > positional.length && isRecord(copy.at(-1)))
            named = copy.pop();
        const out = { ...defaults };
        const assigned = new Set();
        copy.slice(0, positional.length).forEach((value, i) => { out[positional[i]] = value; assigned.add(positional[i]); });
        if (copy.length > positional.length && !vararg)
            throw new py.TypeError('Too many positional arguments');
        if (vararg)
            out[vararg] = copy.slice(positional.length);
        if (kwarg)
            out[kwarg] = {};
        for (const [key, value] of Object.entries(named)) {
            if (!positional.includes(key) && !keyword.includes(key)) {
                if (kwarg) {
                    out[kwarg][key] = value;
                    continue;
                }
                throw new py.TypeError(`Unexpected keyword argument ${key}`);
            }
            if (assigned.has(key))
                throw new py.TypeError(`Multiple values for ${key}`);
            out[key] = value;
        }
        for (const key of [...positional, ...keyword])
            if (!(key in out))
                throw new py.TypeError(`Missing required argument ${key}`);
        return out;
    }
    py.bind = bind;
    function call(fn, args, keywords = null) {
        if (typeof fn !== 'function')
            throw new py.TypeError(`Cannot call ${String(fn)}`);
        const input = keywords ? [...args, py.kw(keywords)] : args;
        if (fn.__class || fn === Error || Error.isPrototypeOf(fn) || /^class\s/.test(Function.prototype.toString.call(fn)))
            return new fn(...input);
        const result = fn(...input);
        if (result instanceof Promise)
            result.catch(() => { });
        return result;
    }
    py.call = call;
    function classType(cls) { Object.defineProperty(cls, '__class', { value: true }); }
    py.classType = classType;
    function mix(...bases) {
        if (!bases.length)
            return class {
            };
        class Combined extends bases[0] {
        }
        // Python MRO uses the first implementation found in declared bases.
        for (const base of [...bases].reverse()) {
            const chain = [];
            for (let p = base.prototype; p && p !== Object.prototype; p = Object.getPrototypeOf(p))
                chain.unshift(p);
            for (const p of chain)
                for (const key of Reflect.ownKeys(p))
                    if (key !== 'constructor')
                        Object.defineProperty(Combined.prototype, key, Object.getOwnPropertyDescriptor(p, key));
        }
        return Combined;
    }
    py.mix = mix;
    function initData(target, cls, args) {
        const chain = [];
        for (let c = cls; c && c !== Function.prototype; c = Object.getPrototypeOf(c))
            if (Object.hasOwn(c, '__fields'))
                chain.unshift(c.__fields);
        const fields = chain.flat();
        let input = args;
        if (args.length === 1 && isRecord(args[0]) && !args[0]?.[KW])
            input = [py.kw(args[0])];
        const defaults = Object.fromEntries(fields.filter(f => f[1] !== py.MISSING).map(([key, value]) => [key, value?.__factory ? call(value.__factory, []) : value]));
        Object.assign(target, bind(input, fields.map(f => f[0]), defaults, [], null, null));
    }
    py.initData = initData;
    py.field = (...args) => {
        const { default_factory, ...rest } = args.at(-1)?.values ?? {};
        return default_factory ? { __factory: default_factory } : rest.default;
    };
    function superInit(target, cls, args) { const parent = Object.getPrototypeOf(cls.prototype); const init = parent?.__init__; if (init)
        return init.apply(target, args); target.message = str(args[0] ?? ''); }
    py.superInit = superInit;
    function isRecord(v) { return v !== null && typeof v === 'object' && (Object.getPrototypeOf(v) === Object.prototype || Object.getPrototypeOf(v) === null); }
    function str(v = '') { return v === null ? 'None' : v === true ? 'True' : v === false ? 'False' : String(v); }
    py.str = str;
    function int(v) { const n = Number(v); if (!Number.isFinite(n))
        throw new ValueError('Invalid integer'); return Math.trunc(n); }
    py.int = int;
    function float(v) { const n = /^(?:[-+]?inf(?:inity)?)$/i.test(String(v)) ? (String(v).startsWith('-') ? -Infinity : Infinity) : Number(v); if (Number.isNaN(n) && String(v).toLowerCase() !== 'nan')
        throw new ValueError('Invalid float'); return n; }
    py.float = float;
    function bool(v) { return truth(v); }
    py.bool = bool;
    function object(v) { return v ?? {}; }
    py.object = object;
    function dict(value = {}, ...rest) {
        const kwargs = rest.at(-1)?.[KW] ? rest.at(-1).values : value?.[KW] ? value.values : {};
        if (value?.[KW])
            value = {};
        return { ...(Array.isArray(value) ? Object.fromEntries(value) : value), ...kwargs };
    }
    py.dict = dict;
    function* iterable(value) {
        if (value == null)
            throw new py.TypeError('None is not iterable');
        if (value[Symbol.iterator])
            yield* value;
        else
            yield* Object.keys(value);
    }
    py.iterable = iterable;
    py.list = (v = []) => [...iterable(v)];
    py.tuple = py.list;
    py.set = (v = []) => new Set(iterable(v));
    py.frozenset = py.set;
    py.len = (v) => v?.length ?? v?.size ?? Object.keys(v).length;
    function isinstance(value, type) {
        if (Array.isArray(type))
            return type.some(t => isinstance(value, t));
        if (type === py.Mapping || type === dict)
            return isRecord(value);
        if (type === py.Sequence || type === py.list || type === py.tuple)
            return Array.isArray(value);
        if (type === str)
            return typeof value === 'string' || value instanceof EnumValue;
        if (type === bool)
            return typeof value === 'boolean';
        if (type === int)
            return typeof value === 'boolean' || (typeof value === 'number' && Number.isInteger(value));
        if (type === float)
            return typeof value === 'number';
        if (type === py.StrEnum)
            return value instanceof EnumValue && value.stringEnum;
        if (type?.__enum)
            return value instanceof EnumValue && value.owner === type.__enum;
        if (type === py.datetime || type === py.date)
            return value instanceof DateValue && (type !== py.date || value.isDate);
        if (type === py.set || type === py.frozenset)
            return value instanceof Set;
        return typeof type === 'function' && value instanceof type;
    }
    py.isinstance = isinstance;
    function truth(value) {
        if (value == null || value === false || value === 0 || value === '')
            return false;
        if (Array.isArray(value) || typeof value === 'string')
            return value.length > 0;
        if (value instanceof Set || value instanceof Map)
            return value.size > 0;
        if (isRecord(value))
            return Object.keys(value).length > 0;
        return true;
    }
    py.truth = truth;
    function eq(a, b) {
        if (a instanceof EnumValue || b instanceof EnumValue)
            return str(a) === str(b);
        if (a instanceof DateValue && b instanceof DateValue)
            return a.epoch === b.epoch;
        if (Array.isArray(a) && Array.isArray(b))
            return a.length === b.length && a.every((v, i) => eq(v, b[i]));
        if (a && b && typeof a === 'object' && typeof b === 'object' && !(a instanceof Set) && !(b instanceof Set)) {
            if (a.constructor !== b.constructor && !isRecord(a) && !isRecord(b))
                return false;
            const keys = Object.keys(a);
            return keys.length === Object.keys(b).length && keys.every(k => k in b && eq(a[k], b[k]));
        }
        return (0, node_util_1.isDeepStrictEqual)(a, b);
    }
    py.eq = eq;
    py.contains = (haystack, value) => typeof haystack === 'string' ? haystack.includes(str(value)) : Array.isArray(haystack) || haystack instanceof Set ? [...haystack].some(v => eq(v, value)) : Object.hasOwn(haystack, str(value));
    py.or = (...fns) => { let v; for (const f of fns) {
        v = f();
        if (truth(v))
            return v;
    } return v; };
    py.and = (...fns) => { let v; for (const f of fns) {
        v = f();
        if (!truth(v))
            return v;
    } return v; };
    py.union = (a, b) => a instanceof Set && b instanceof Set ? new Set([...a, ...b]) : typeof a === 'function' || Array.isArray(a) ? [a, b].flat() : ({ ...a, ...b });
    py.add = (a, b) => Array.isArray(a) ? [...a, ...b] : a + b;
    py.mul = (a, b) => typeof a === 'string' ? a.repeat(Math.max(0, b)) : a * b;
    py.mod = (a, b) => ((a % b) + b) % b;
    function get(value, key) {
        const k = Array.isArray(value) || typeof value === 'string' ? (key < 0 ? value.length + key : key) : str(key);
        if (!(k in Object(value)))
            throw new IndexError(`Missing key or index ${k}`);
        return value[k];
    }
    py.get = get;
    py.slice = (value, start, stop, step) => { if (step != null && step !== 1)
        throw new ValueError('Unsupported slice step'); return value.slice(start ?? 0, stop ?? undefined); };
    function attr(value, key) {
        if (value == null)
            throw new py.TypeError(`Cannot access ${key} on None`);
        if (key === 'get' && isRecord(value))
            return (k, fallback = null) => Object.hasOwn(value, str(k)) ? value[str(k)] : fallback;
        if (key === 'items')
            return () => Object.entries(value);
        if (key === 'values')
            return () => Object.values(value);
        if (key === 'keys')
            return () => Object.keys(value);
        if (key === 'update' && isRecord(value))
            return (v) => Object.assign(value, v?.[KW] ? v.values : v);
        if (key === '__setitem__')
            return (k, v) => { value[k] = v; };
        if (key === 'append')
            return (v) => { value.push(v); };
        if (key === 'pop' && Array.isArray(value))
            return (i = -1) => { if (!value.length)
                throw new IndexError('pop from empty list'); return value.splice(i < 0 ? value.length + i : i, 1)[0]; };
        if (key === 'encode' && typeof value === 'string')
            return () => Buffer.from(value);
        if (key === 'decode' && Buffer.isBuffer(value))
            return () => value.toString('utf8');
        if (key === 'partition')
            return (sep) => { const i = value.indexOf(sep); return i < 0 ? [value, '', ''] : [value.slice(0, i), sep, value.slice(i + sep.length)]; };
        if (key === 'removeprefix')
            return (prefix) => value.startsWith(prefix) ? value.slice(prefix.length) : value;
        if (key === 'strip')
            return () => value.trim();
        if (key === 'rstrip')
            return (chars = ' ') => value.replace(new RegExp('[' + chars + ']+$'), '');
        if (key === 'lower')
            return () => value.toLowerCase();
        if (key === 'startswith')
            return (prefix) => (Array.isArray(prefix) ? prefix : [prefix]).some(p => value.startsWith(p));
        if (key === 'endswith')
            return (suffix) => (Array.isArray(suffix) ? suffix : [suffix]).some(p => value.endsWith(p));
        if (key === 'join' && typeof value === 'string')
            return (items) => [...iterable(items)].map(str).join(value);
        if (key === 'format')
            return (...args) => { const fields = args.at(-1)?.values ?? {}; return value.replace(/\{(\w+)\}/g, (_, k) => str(fields[k])); };
        if (key === 'replace' && typeof value === 'string')
            return (old, next) => value.split(old).join(next);
        const result = value[key];
        if (result === undefined && !(key in Object(value)))
            throw new py.TypeError(`Missing attribute ${key}`);
        return typeof result === 'function' && !result.__class && !result.__enum ? result.bind(value) : result;
    }
    py.attr = attr;
    py.getattr = (v, k, fallback = py.MISSING) => k in v ? attr(v, k) : fallback !== py.MISSING ? fallback : attr(v, k);
    py.hasattr = (v, k) => k in v;
    py.vars = (v) => v;
    py.enumerate = (v, start = 0) => [...iterable(v)].map((x, i) => [i + (start?.[KW] ? start.values.start : start), x]);
    py.range = (start, end) => Array.from({ length: Math.max(0, (end ?? start) - (end == null ? 0 : start)) }, (_, i) => i + (end == null ? 0 : start));
    py.any = (v) => [...iterable(v)].some(truth);
    py.all = (v) => [...iterable(v)].every(truth);
    py.sum = (v) => [...iterable(v)].reduce((a, b) => a + Number(b), 0);
    py.iter = (v) => iterable(v)[Symbol.iterator]();
    py.next = (v) => v.next().value;
    py.assert_never = (v) => { throw new ValueError(`Unexpected value ${v}`); };
    py.uuid4 = node_crypto_1.randomUUID;
    py.version = (_) => '0.1.0';
    py.urlunsplit = (parts) => `${parts[0]}://${parts[1]}/${parts[2]}${parts[3] ? '?' + parts[3] : ''}${parts[4] ? '#' + parts[4] : ''}`;
    py.base64 = {
        b64encode: (v) => Buffer.from(Buffer.from(v).toString('base64')),
        b64decode: (v) => Buffer.from(v, 'base64'),
        urlsafe_b64encode: (v) => Buffer.from(Buffer.from(v).toString('base64url')),
        urlsafe_b64decode: (v) => Buffer.from(v, 'base64url'),
    };
    py.b64decode = py.base64.b64decode;
    py.json = { dumps: JSON.stringify, loads: (v) => { try {
            return JSON.parse(str(v));
        }
        catch {
            throw new ValueError('Invalid JSON');
        } }, JSONDecodeError: ValueError };
    py.math = { isfinite: Number.isFinite };
    py.time = { time: () => Date.now() / 1000 };
    py.inspect = { isawaitable: (v) => v != null && typeof v.then === 'function' };
    py.hashlib = { sha256: (v) => ({ hexdigest: () => (0, node_crypto_1.createHash)('sha256').update(v).digest('hex') }) };
    py.re = { findall: (pattern, v) => [...v.matchAll(new RegExp(pattern, 'g'))].map(m => m.length > 1 ? m.length === 2 ? m[1] : m.slice(1) : m[0]), escape: (v) => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') };
    class DateValue {
        iso;
        isDate;
        constructor(iso, isDate = false) {
            this.iso = iso;
            this.isDate = isDate;
        }
        get epoch() { return Date.parse(this.iso); }
        get tzinfo() { return /(?:Z|[+-]\d\d:\d\d)$/.test(this.iso) ? {} : null; }
        utcoffset() { const m = this.iso.match(/([+-])(\d\d):(\d\d)$/); return this.tzinfo ? (m ? (m[1] === '-' ? -1 : 1) * (+m[2] * 60 + +m[3]) * 60 : 0) : null; }
        isoformat() { return this.iso; }
        toJSON() { return this.iso; }
        toString() { return this.iso; }
    }
    py.DateValue = DateValue;
    function parseDate(value, isDate = false) {
        if (typeof value !== 'string' || !/^\d{4}-\d\d-\d\d(?:$|T)/.test(value) || !Number.isFinite(Date.parse(value)))
            throw new ValueError('Invalid ISO date');
        const [year, month, day] = value.slice(0, 10).split('-').map(Number);
        if (month < 1 || month > 12 || day < 1 || day > new Date(Date.UTC(year, month, 0)).getUTCDate() || (isDate && value.length !== 10))
            throw new ValueError('Invalid ISO date');
        return new DateValue(value.replace(/Z$/, '+00:00'), isDate);
    }
    py.UTC = 0;
    py.timedelta = (...args) => { const v = args.at(-1)?.values ?? {}; return (v.days ?? 0) * 86400 + (v.hours ?? 0) * 3600 + (v.minutes ?? 0) * 60 + (v.seconds ?? 0); };
    py.timezone = (offset) => offset;
    function formatOffset(offset) { return (offset < 0 ? '-' : '+') + String(Math.floor(Math.abs(offset) / 3600)).padStart(2, '0') + ':' + String(Math.floor(Math.abs(offset) % 3600 / 60)).padStart(2, '0'); }
    py.datetime = Object.assign((...args) => {
        const options = args.at(-1)?.[KW] ? args.pop().values : {};
        const [y, m, d, h = 0, min = 0, s = 0] = args;
        const tz = options.tzinfo;
        return parseDate(`${String(y).padStart(4, '0')}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}T${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(s).padStart(2, '0')}${tz === 0 ? '+00:00' : typeof tz === 'number' ? formatOffset(tz) : ''}`);
    }, { fromisoformat: (v) => parseDate(v) });
    py.date = Object.assign((y, m, d) => parseDate(`${String(y).padStart(4, '0')}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`, true), { fromisoformat: (v) => parseDate(v, true) });
    class Mutex {
        tail = Promise.resolve();
        async run(fn) { let release; const before = this.tail; this.tail = new Promise(r => release = r); await before; try {
            return await fn();
        }
        finally {
            release();
        } }
    }
    const deadlines = new node_async_hooks_1.AsyncLocalStorage();
    py.currentSignal = () => deadlines.getStore();
    py.locked = (mutex, fn) => mutex.run(fn);
    async function timeout(seconds, fn) {
        const controller = new AbortController();
        let timer;
        const limit = new Promise((_, reject) => { timer = setTimeout(() => { controller.abort(); reject(new TimeoutError('Operation timed out')); }, seconds * 1000); });
        try {
            return await Promise.race([deadlines.run(controller.signal, fn), limit]);
        }
        finally {
            clearTimeout(timer);
            controller.abort();
        }
    }
    py.timeout = timeout;
    py.asyncio = {
        Lock: () => new Mutex(),
        sleep: (seconds) => new Promise((resolve, reject) => { const signal = deadlines.getStore(); if (signal?.aborted)
            return reject(new TimeoutError()); const timer = setTimeout(done, seconds * 1000); function done() { signal?.removeEventListener('abort', abort); resolve(); } function abort() { clearTimeout(timer); reject(new TimeoutError()); } signal?.addEventListener('abort', abort, { once: true }); }),
    };
    py.ClientTimeout = (...args) => args.at(-1)?.values ?? {};
})(py || (exports.py = py = {}));
exports.kw = py.kw;
//# sourceMappingURL=_runtime.js.map