// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

import { _required_field, _required_nullable_string, _required_string, _root, _typename } from "./account_parsing";
export { _required_field, _required_nullable_string, _required_string, _root, _typename };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { SecondDeliveryOperationError, SecondDeliveryOperationResult, SecondDeliveryOperationSuccess, UnselectedSecondDeliveryResult } from "./second_delivery_models";
export { SecondDeliveryOperationError, SecondDeliveryOperationResult, SecondDeliveryOperationSuccess, UnselectedSecondDeliveryResult };

export function _parse_operation_result(data: Record<string, unknown>, field: string, success_typename: string, error_typenames: ReadonlySet<string>): SecondDeliveryOperationResult | null;
/** Translated upstream _parse_operation_result. */
export function _parse_operation_result(...__args: any[]): any {
let root, success, typename;
let {"data": data, "field": field, "success_typename": success_typename, "error_typenames": error_typenames} = $.bind(__args, ["data", "field", "success_typename", "error_typenames"], {}, [], null, null);
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, success_typename)))) {
success = $.call(_required_field, [root, "success", ($.str(field) + ".success")], null);
if ($.truth(!$.truth($.call($.isinstance, [success, $.bool], null)))) {
throw $.call(ResponseError, [($.str(field) + ".success is not a boolean")], null);
}
return $.call(SecondDeliveryOperationSuccess, [success], null);
}
if ($.truth(($.contains(error_typenames, typename)))) {
return $.call(SecondDeliveryOperationError, [typename, $.call(_required_nullable_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedSecondDeliveryResult, [typename], null);
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
