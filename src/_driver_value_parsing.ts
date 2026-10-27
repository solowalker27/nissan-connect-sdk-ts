// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { ResponseError } from "./exceptions";
export { ResponseError };

export let _BASE_CONNECTED_VEHICLE_TYPES = $.call($.frozenset, [new Set(["AVK2Vehicle", "AVKVehicle", "ConnectedVehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "ElectricVehicle", "EVOVehicle"])], null);

export let _DRIVER_INVITES_ERROR_TYPES = $.call($.frozenset, [new Set(["GeneralErrors", "DatabaseError", "BrandError", "TokenError", "VinValidationError"])], null);

export let _INVITE_DRIVER_ERROR_TYPES = $.call($.frozenset, [new Set(["FirstNameValidationError", "LastNameValidationError", "EmailValidationError", "PhoneValidationError", "ExistingInviteError", "MaxInvitesReachedError"])], null);

export let _DRIVER_INVITE_ACTION_ERROR_TYPES = $.call($.frozenset, [new Set(["GeneralErrors", "DatabaseError", "InvalidInviteIdError", "TokenError", "BrandError", "TermsAndConditionsError", "CountryError"])], null);

export function _root(data: Record<string, unknown>, root_field: string): Record<string, unknown> | null;
/** Translated upstream _root. */
export function _root(...__args: any[]): any {
let value;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
value = $.call(_required_value, [data, root_field, root_field], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_typed_object, [value, root_field], null);
}

export function _typed_object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _typed_object. */
export function _typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
$.call(_typename, [value, path], null);
return value;
}

export function _typename(container: Record<string, unknown>, path: string): string;
/** Translated upstream _typename. */
export function _typename(...__args: any[]): any {
let {"container": container, "path": path} = $.bind(__args, ["container", "path"], {}, [], null, null);
return $.call(_required_string, [container, "__typename", ($.str(path) + ".__typename")], null);
}

export function _required_value(container: Record<string, unknown>, field: string, path: string): unknown;
/** Translated upstream _required_value. */
export function _required_value(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
if ($.truth((!$.contains(container, field)))) {
throw $.call(ResponseError, [($.str(path) + " is missing")], null);
}
return $.get(container, field);
}

export function _required_string(container: Record<string, unknown>, field: string, path: string): string;
/** Translated upstream _required_string. */
export function _required_string(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_string, [$.call(_required_value, [container, field, path], null), path], null);
}

export function _required_nullable_string(container: Record<string, unknown>, field: string, path: string): string | null;
/** Translated upstream _required_nullable_string. */
export function _required_nullable_string(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_value, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_string, [value, path], null);
}

export function _required_bool(container: Record<string, unknown>, field: string, path: string): boolean;
/** Translated upstream _required_bool. */
export function _required_bool(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_value, [container, field, path], null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _required_nullable_bool(container: Record<string, unknown>, field: string, path: string): boolean | null;
/** Translated upstream _required_nullable_bool. */
export function _required_nullable_bool(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_value, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _required_list(container: Record<string, unknown>, field: string, path: string): ReadonlyArray<unknown>;
/** Translated upstream _required_list. */
export function _required_list(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_value, [container, field, path], null);
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
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _required_string_tuple(container: Record<string, unknown>, field: string, path: string): ReadonlyArray<string>;
/** Translated upstream _required_string_tuple. */
export function _required_string_tuple(...__args: any[]): any {
let index, value, values;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
values = $.call(_required_list, [container, field, path], null);
return $.call($.tuple, [(() => { const __out: any = []; for (const [index, value] of $.iterable($.call($.enumerate, [values], null))) { __out.push($.call(_string, [value, ($.str(path) + "[" + $.str(index) + "]")], null)); } return __out; })()], null);
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

export function _required_datetime(container: Record<string, unknown>, field: string, path: string): $.DateValue;
/** Translated upstream _required_datetime. */
export function _required_datetime(...__args: any[]): any {
let normalized, raw_value, result;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
raw_value = $.call(_required_string, [container, field, path], null);
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

export function _required_enum(container: Record<string, unknown>, field: string, enum_type: any, path: string): any;
/** Translated upstream _required_enum. */
export function _required_enum(...__args: any[]): any {
let {"container": container, "field": field, "enum_type": enum_type, "path": path} = $.bind(__args, ["container", "field", "enum_type", "path"], {}, [], null, null);
return $.call(_enum, [$.call(_required_value, [container, field, path], null), enum_type, path], null);
}

export function _required_nullable_enum(container: Record<string, unknown>, field: string, enum_type: any, path: string): any | null;
/** Translated upstream _required_nullable_enum. */
export function _required_nullable_enum(...__args: any[]): any {
let value;
let {"container": container, "field": field, "enum_type": enum_type, "path": path} = $.bind(__args, ["container", "field", "enum_type", "path"], {}, [], null, null);
value = $.call(_required_value, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_enum, [value, enum_type, path], null);
}

export function _enum(value: unknown, enum_type: any, path: string): any;
/** Translated upstream _enum. */
export function _enum(...__args: any[]): any {
let raw_value;
let {"value": value, "enum_type": enum_type, "path": path} = $.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
raw_value = $.call(_string, [value, path], null);
try {
return $.call(enum_type, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.call(enum_type, ["UNKNOWN__"], null); } else { throw __error; }
}
}
