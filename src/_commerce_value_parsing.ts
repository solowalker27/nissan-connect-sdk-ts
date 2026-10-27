// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Callable = $.Callable;
const Mapping = $.Mapping;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { _enum, _required_field, _typed_object } from "./account_parsing";
export { _enum, _required_field, _typed_object };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function _parse_nullable_object_list(container: Record<string, unknown>, field: string, parent_path: string, parser: ((arg0: Record<string, unknown>, arg1: string) => any)): ReadonlyArray<any | null> | null;
/** Translated upstream _parse_nullable_object_list. */
export function _parse_nullable_object_list(...__args: any[]): any {
let index, path, results, value, values;
let {"container": container, "field": field, "parent_path": parent_path, "parser": parser} = $.bind(__args, ["container", "field", "parent_path", "parser"], {}, [], null, null);
values = $.call(_nullable_list, [container, field, ($.str(parent_path) + "." + $.str(field))], null);
if ($.truth(((values === null)))) {
return null;
}
results = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(results, "append"), [null], null);
continue;
}
path = ($.str(parent_path) + "." + $.str(field) + "[" + $.str(index) + "]");
$.call($.attr(results, "append"), [$.call(parser, [$.call(_typed_object, [value, path], null), path], null)], null);
}
return $.call($.tuple, [results], null);
}

export function _required_typed_object(container: Record<string, unknown>, field: string, path: string): Record<string, unknown>;
/** Translated upstream _required_typed_object. */
export function _required_typed_object(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_typed_object, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _required_list(container: Record<string, unknown>, field: string, path: string): ReadonlyArray<unknown>;
/** Translated upstream _required_list. */
export function _required_list(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _nullable_list(container: Record<string, unknown>, field: string, path: string): ReadonlyArray<unknown> | null;
/** Translated upstream _nullable_list. */
export function _nullable_list(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _required_nullable_float(container: Record<string, unknown>, field: string, path: string): number | null;
/** Translated upstream _required_nullable_float. */
export function _required_nullable_float(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, [$.int, $.float]], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a number")], null);
}
return $.call($.float, [value], null);
}

export function _required_nullable_datetime(container: Record<string, unknown>, field: string, path: string): $.DateValue | null;
/** Translated upstream _required_nullable_datetime. */
export function _required_nullable_datetime(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a date-time string")], null);
}
try {
return $.call($.attr(datetime, "fromisoformat"), [$.call($.attr(value, "replace"), ["Z", "+00:00"], null)], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { let error = __error; throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time")], null); } else { throw __error; }
}
}

export function _required_nullable_enum(container: Record<string, unknown>, field: string, enum_type: any, path: string): any | null;
/** Translated upstream _required_nullable_enum. */
export function _required_nullable_enum(...__args: any[]): any {
let value;
let {"container": container, "field": field, "enum_type": enum_type, "path": path} = $.bind(__args, ["container", "field", "enum_type", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_enum, [value, enum_type, path], null);
}
