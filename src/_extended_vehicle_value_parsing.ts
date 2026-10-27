// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { ResponseError } from "./exceptions";
export { ResponseError };

export function _parse_nullable_string_items(value: unknown, path: string): ReadonlyArray<string | null> | null;
/** Translated upstream _parse_nullable_string_items. */
export function _parse_nullable_string_items(...__args: any[]): any {
let index, item, values;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
values = $.call(_nullable_list, [value, path], null);
if ($.truth(((values === null)))) {
return null;
}
return $.call($.tuple, [(() => { const __out: any = []; for (const [index, item] of $.iterable($.call($.enumerate, [values], null))) { __out.push($.call(_nullable_string, [item, ($.str(path) + "[" + $.str(index) + "]")], null)); } return __out; })()], null);
}

export function _parse_nullable_int_items(value: unknown, path: string): ReadonlyArray<number | null> | null;
/** Translated upstream _parse_nullable_int_items. */
export function _parse_nullable_int_items(...__args: any[]): any {
let index, item, values;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
values = $.call(_nullable_list, [value, path], null);
if ($.truth(((values === null)))) {
return null;
}
return $.call($.tuple, [(() => { const __out: any = []; for (const [index, item] of $.iterable($.call($.enumerate, [values], null))) { __out.push($.call(_nullable_int, [item, ($.str(path) + "[" + $.str(index) + "]")], null)); } return __out; })()], null);
}

export function _vehicle(data: Record<string, unknown>): Record<string, unknown> | null;
/** Translated upstream _vehicle. */
export function _vehicle(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
if ($.truth((!$.contains(data, "vehicle")))) {
throw $.call(ResponseError, ["vehicle is missing"], null);
}
return $.call(_optional_typed_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
}

export function _object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _object. */
export function _object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
return value;
}

export function _typed_object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _typed_object. */
export function _typed_object(...__args: any[]): any {
let result;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
result = $.call(_object, [value, path], null);
$.call(_string, [$.call($.attr(result, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
return result;
}

export function _optional_typed_object(value: unknown, path: string): Record<string, unknown> | null;
/** Translated upstream _optional_typed_object. */
export function _optional_typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_typed_object, [value, path], null);
}

export function _list(value: unknown, path: string): ReadonlyArray<unknown>;
/** Translated upstream _list. */
export function _list(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _nullable_list(value: unknown, path: string): ReadonlyArray<unknown> | null;
/** Translated upstream _nullable_list. */
export function _nullable_list(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_list, [value, path], null);
}

export function _string(value: unknown, path: string): string;
/** Translated upstream _string. */
export function _string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return value;
}

export function _nullable_string(value: unknown, path: string): string | null;
/** Translated upstream _nullable_string. */
export function _nullable_string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_string, [value, path], null);
}

export function _int(value: unknown, path: string): number;
/** Translated upstream _int. */
export function _int(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.int], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an integer")], null);
}
return value;
}

export function _nullable_int(value: unknown, path: string): number | null;
/** Translated upstream _nullable_int. */
export function _nullable_int(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_int, [value, path], null);
}

export function _float(value: unknown, path: string): number;
/** Translated upstream _float. */
export function _float(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, [$.int, $.float]], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not numeric")], null);
}
return $.call($.float, [value], null);
}

export function _nullable_float(value: unknown, path: string): number | null;
/** Translated upstream _nullable_float. */
export function _nullable_float(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_float, [value, path], null);
}

export function _nullable_bool(value: unknown, path: string): boolean | null;
/** Translated upstream _nullable_bool. */
export function _nullable_bool(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _enum(value: unknown, enum_type: any, path: string): any;
/** Translated upstream _enum. */
export function _enum(...__args: any[]): any {
let raw_value, unknown_value;
let {"value": value, "enum_type": enum_type, "path": path} = $.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
raw_value = $.call(_string, [value, path], null);
try {
return $.call(enum_type, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { unknown_value = $.call($.getattr, [enum_type, "UNKNOWN_VALUE", null], null);
if ($.truth($.call($.isinstance, [unknown_value, enum_type], null))) {
return unknown_value;
}
throw $.call(ResponseError, [($.str(path) + " has an unsupported value: " + $.str(raw_value))], null); } else { throw __error; }
}
}

export function _nullable_enum(value: unknown, enum_type: any, path: string): any | null;
/** Translated upstream _nullable_enum. */
export function _nullable_enum(...__args: any[]): any {
let {"value": value, "enum_type": enum_type, "path": path} = $.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_enum, [value, enum_type, path], null);
}

export function _nullable_datetime(value: unknown, path: string): $.DateValue | null;
/** Translated upstream _nullable_datetime. */
export function _nullable_datetime(...__args: any[]): any {
let normalized, raw_value, result;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
raw_value = $.call(_string, [value, path], null);
normalized = ($.truth($.call($.attr(raw_value, "endswith"), ["Z"], null)) ? ($.str($.slice(raw_value, null, -(1), null)) + "+00:00") : raw_value);
try {
result = $.call($.attr(datetime, "fromisoformat"), [normalized], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { let error = __error; throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time")], null); } else { throw __error; }
}
if ($.truth($.or(() => (($.attr(result, "tzinfo") === null)), () => (($.call($.attr(result, "utcoffset"), [], null) === null))))) {
throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time with an offset")], null);
}
return result;
}
