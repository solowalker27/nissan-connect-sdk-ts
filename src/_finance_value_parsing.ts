// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Callable = $.Callable;
const Mapping = $.Mapping;

const date = $.date;
const datetime = $.datetime;

import { _required_field, _required_nullable_string, _required_string, _typed_object } from "./account_parsing";
export { _required_field, _required_nullable_string, _required_string, _typed_object };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function _nullable_list(container: Record<string, unknown>, field: string, path: string, parser: ((arg0: Record<string, unknown>, arg1: string) => any)): ReadonlyArray<any | null> | null;
/** Translated upstream _nullable_list. */
export function _nullable_list(...__args: any[]): any {
let index, item, item_path, items, value;
let {"container": container, "field": field, "path": path, "parser": parser} = $.bind(__args, ["container", "field", "path", "parser"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
items = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(items, "append"), [null], null);
continue;
}
item_path = ($.str(path) + "[" + $.str(index) + "]");
$.call($.attr(items, "append"), [$.call(parser, [$.call(_typed_object, [item, item_path], null), item_path], null)], null);
}
return $.call($.tuple, [items], null);
}

export function _required_bool(container: Record<string, unknown>, field: string, path: string): boolean;
/** Translated upstream _required_bool. */
export function _required_bool(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
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
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.union($.int, $.float)], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a number")], null);
}
return $.call($.float, [value], null);
}

export function _required_date(container: Record<string, unknown>, field: string, path: string): $.DateValue;
/** Translated upstream _required_date. */
export function _required_date(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_string, [container, field, path], null);
return $.call(_parse_date, [value, path], null);
}

export function _required_nullable_date(container: Record<string, unknown>, field: string, path: string): $.DateValue | null;
/** Translated upstream _required_nullable_date. */
export function _required_nullable_date(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_nullable_string, [container, field, path], null);
return ($.truth(((value === null))) ? null : $.call(_parse_date, [value, path], null));
}

export function _required_nullable_datetime(container: Record<string, unknown>, field: string, path: string): $.DateValue | null;
/** Translated upstream _required_nullable_datetime. */
export function _required_nullable_datetime(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_nullable_string, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
try {
return $.call($.attr(datetime, "fromisoformat"), [$.call($.attr(value, "replace"), ["Z", "+00:00"], null)], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { throw $.call(ResponseError, [($.str(path) + " is not an ISO date-time")], null); } else { throw __error; }
}
}

export function _parse_date(value: string, path: string): $.DateValue;
/** Translated upstream _parse_date. */
export function _parse_date(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
try {
return $.call($.attr(date, "fromisoformat"), [value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { throw $.call(ResponseError, [($.str(path) + " is not an ISO date")], null); } else { throw __error; }
}
}
