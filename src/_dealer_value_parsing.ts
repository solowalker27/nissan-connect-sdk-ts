// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Callable = $.Callable;
const Mapping = $.Mapping;

const datetime = $.datetime;

import { _required_field, _required_nullable_bool, _required_nullable_string, _required_string, _typed_object } from "./account_parsing";
export { _required_field, _required_nullable_bool, _required_nullable_string, _required_string, _typed_object };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function _nullable_list(container: Record<string, unknown>, field: string, path: string, parser: ((arg0: Record<string, unknown>, arg1: string) => any)): ReadonlyArray<any | null> | null;
/** Translated upstream _nullable_list. */
export function _nullable_list(...__args: any[]): any {
let index, item, item_path, result, value;
let {"container": container, "field": field, "path": path, "parser": parser} = $.bind(__args, ["container", "field", "path", "parser"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
result = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(result, "append"), [null], null);
continue;
}
item_path = ($.str(path) + "[" + $.str(index) + "]");
$.call($.attr(result, "append"), [$.call(parser, [$.call(_typed_object, [item, item_path], null), item_path], null)], null);
}
return $.call($.tuple, [result], null);
}

export function _optional_selected_nullable_list(container: Record<string, unknown>, field: string, parent_path: string, parser: ((arg0: Record<string, unknown>, arg1: string) => any)): ReadonlyArray<any | null> | null;
/** Translated upstream _optional_selected_nullable_list. */
export function _optional_selected_nullable_list(...__args: any[]): any {
let {"container": container, "field": field, "parent_path": parent_path, "parser": parser} = $.bind(__args, ["container", "field", "parent_path", "parser"], {}, [], null, null);
if ($.truth((!$.contains(container, field)))) {
return null;
}
return $.call(_nullable_list, [container, field, ($.str(parent_path) + "." + $.str(field)), parser], null);
}

export function _required_string_list(container: Record<string, unknown>, field: string, parent_path: string): ReadonlyArray<string>;
/** Translated upstream _required_string_list. */
export function _required_string_list(...__args: any[]): any {
let index, item, path, result, value;
let {"container": container, "field": field, "parent_path": parent_path} = $.bind(__args, ["container", "field", "parent_path"], {}, [], null, null);
path = ($.str(parent_path) + "." + $.str(field));
value = $.call(_required_field, [container, field, path], null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
result = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth(!$.truth($.call($.isinstance, [item, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + "[" + $.str(index) + "] is not a string")], null);
}
$.call($.attr(result, "append"), [item], null);
}
return $.call($.tuple, [result], null);
}

export function _optional_selected_nullable_string(container: Record<string, unknown>, field: string, parent_path: string): string | null;
/** Translated upstream _optional_selected_nullable_string. */
export function _optional_selected_nullable_string(...__args: any[]): any {
let {"container": container, "field": field, "parent_path": parent_path} = $.bind(__args, ["container", "field", "parent_path"], {}, [], null, null);
if ($.truth((!$.contains(container, field)))) {
return null;
}
return $.call(_required_nullable_string, [container, field, ($.str(parent_path) + "." + $.str(field))], null);
}

export function _optional_selected_nullable_bool(container: Record<string, unknown>, field: string, parent_path: string): boolean | null;
/** Translated upstream _optional_selected_nullable_bool. */
export function _optional_selected_nullable_bool(...__args: any[]): any {
let {"container": container, "field": field, "parent_path": parent_path} = $.bind(__args, ["container", "field", "parent_path"], {}, [], null, null);
if ($.truth((!$.contains(container, field)))) {
return null;
}
return $.call(_required_nullable_bool, [container, field, ($.str(parent_path) + "." + $.str(field))], null);
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

export function _required_datetime(container: Record<string, unknown>, field: string, path: string): $.DateValue;
/** Translated upstream _required_datetime. */
export function _required_datetime(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_string, [container, field, path], null);
try {
return $.call($.attr(datetime, "fromisoformat"), [$.call($.attr(value, "replace"), ["Z", "+00:00"], null)], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { throw $.call(ResponseError, [($.str(path) + " is not an ISO date-time")], null); } else { throw __error; }
}
}
