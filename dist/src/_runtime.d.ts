import { randomUUID } from 'node:crypto';
export declare namespace py {
    export const MISSING: unique symbol;
    export const SKIP: {};
    const ENUM: unique symbol;
    export class ValueError extends Error {
    }
    export class RuntimeError extends Error {
    }
    export class TimeoutError extends Error {
    }
    export class IndexError extends Error {
    }
    export class KeyError extends Error {
    }
    export class AssertionError extends Error {
    }
    export const TypeError: TypeErrorConstructor;
    export const FrozenInstanceError: TypeErrorConstructor;
    export const Exception: ErrorConstructor;
    export const ClientError: {
        new (message?: string): {
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        new (message?: string, options?: ErrorOptions): {
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace(err: Error, stackTraces: NodeJS.CallSite[]): any;
        stackTraceLimit: number;
    };
    export const ClientSession: ObjectConstructor;
    export const Mapping: unique symbol;
    export const Sequence: unique symbol;
    export const Protocol: {
        new (): {};
    };
    export const Final: null;
    export const Callable: null;
    export const Awaitable: null;
    export const StrEnum: unique symbol;
    export const Enum: symbol;
    export class EnumValue<Value extends string = string> {
        readonly value: Value;
        readonly name: string;
        readonly owner: string;
        readonly stringEnum: boolean;
        readonly [ENUM] = true;
        constructor(value: Value, name: string, owner: string, stringEnum?: boolean);
        toString(): Value;
        toJSON(): Value;
        [Symbol.toPrimitive](): Value;
    }
    export type EnumType<T extends Record<string, string>> = ((value: T[keyof T] | EnumValue<T[keyof T]>) => EnumValue<T[keyof T]>) & {
        readonly [K in keyof T]: EnumValue<T[K]>;
    } & Iterable<EnumValue<T[keyof T]>>;
    export function enumType<const T extends Record<string, string>>(name: string, values: T, stringEnum?: boolean): EnumType<T>;
    export const keywordValues: (v: any) => Record<string, any>;
    export const isKw: (v: any) => boolean;
    export const kw: (values: Record<string, any>) => any;
    export function bind(args: any[], positional: string[], defaults: Record<string, any>, keyword: string[], vararg: string | null, kwarg: string | null): any;
    export function call(fn: any, args: any[], keywords?: any): any;
    export function classType(cls: any): void;
    export function mix(...bases: any[]): any;
    export function initData(target: any, cls: any, args: any[]): void;
    export const field: (...args: any[]) => any;
    export function superInit(target: any, cls: any, args: any[]): any;
    export function str(v?: any): string;
    export function int(v: any): number;
    export function float(v: any): number;
    export function bool(v: any): boolean;
    export function object(v?: any): any;
    export function dict(value?: any, ...rest: any[]): any;
    export function iterable(value: any): Iterable<any>;
    export const list: (v?: any) => any[];
    export const tuple: (v?: any) => any[];
    export const set: (v?: any) => Set<any>;
    export const frozenset: (v?: any) => Set<any>;
    export const len: (v: any) => any;
    export function isinstance(value: any, type: any): boolean;
    export function truth(value: any): boolean;
    export function eq(a: any, b: any): boolean;
    export const contains: (haystack: any, value: any) => boolean;
    export const or: (...fns: (() => any)[]) => any;
    export const and: (...fns: (() => any)[]) => any;
    export const union: (a: any, b: any) => any;
    export const add: (a: any, b: any) => any;
    export const mul: (a: any, b: any) => string | number;
    export const mod: (a: number, b: number) => number;
    export function get(value: any, key: any): any;
    export const slice: (value: any, start: any, stop: any, step: any) => any;
    export function attr(value: any, key: string): any;
    export const getattr: (v: any, k: string, fallback?: any) => any;
    export const hasattr: (v: any, k: string) => boolean;
    export const vars: (v: any) => any;
    export const enumerate: (v: any, start?: any) => any[][];
    export const range: (start: number, end?: number) => number[];
    export const any: (v: any) => boolean;
    export const all: (v: any) => boolean;
    export const sum: (v: any) => any;
    export const iter: (v: any) => Iterator<any, any, any>;
    export const next: (v: any) => any;
    export const assert_never: (v: never) => never;
    export const uuid4: typeof randomUUID;
    export const version: (_: any) => string;
    export const urlunsplit: (parts: string[]) => string;
    export const base64: {
        b64encode: (v: any) => Buffer<ArrayBuffer>;
        b64decode: (v: any) => Buffer<ArrayBuffer>;
        urlsafe_b64encode: (v: any) => Buffer<ArrayBuffer>;
        urlsafe_b64decode: (v: any) => Buffer<ArrayBuffer>;
    };
    export const b64decode: (v: any) => Buffer<ArrayBuffer>;
    export const json: {
        dumps: {
            (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
            (value: any, replacer?: (number | string)[] | null, space?: string | number): string;
        };
        loads: (v: any) => any;
        JSONDecodeError: typeof ValueError;
    };
    export const math: {
        isfinite: (number: unknown) => boolean;
    };
    export const time: {
        time: () => number;
    };
    export const inspect: {
        isawaitable: (v: any) => boolean;
    };
    export const hashlib: {
        sha256: (v: any) => {
            hexdigest: () => string;
        };
    };
    export const re: {
        findall: (pattern: string, v: string) => (string | string[])[];
        escape: (v: string) => string;
    };
    export class DateValue {
        readonly iso: string;
        readonly isDate: boolean;
        constructor(iso: string, isDate?: boolean);
        get epoch(): number;
        get tzinfo(): {} | null;
        utcoffset(): number | null;
        isoformat(): string;
        toJSON(): string;
        toString(): string;
    }
    export const UTC = 0;
    export const timedelta: (...args: any[]) => any;
    export const timezone: (offset: number) => number;
    export const datetime: any;
    export const date: any;
    class Mutex {
        tail: Promise<void>;
        run<T>(fn: () => Promise<T>): Promise<T>;
    }
    export const currentSignal: () => AbortSignal | undefined;
    export const locked: <T>(mutex: Mutex, fn: () => Promise<T>) => Promise<T>;
    export function timeout<T>(seconds: number, fn: () => Promise<T>): Promise<T>;
    export const asyncio: {
        Lock: () => Mutex;
        sleep: (seconds: number) => Promise<void>;
    };
    export const ClientTimeout: (...args: any[]) => any;
    export {};
}
export declare const kw: (values: Record<string, any>) => any;
