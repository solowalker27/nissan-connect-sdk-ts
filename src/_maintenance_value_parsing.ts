// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const date = $.date;
const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { ResponseError } from "./exceptions";
export { ResponseError };

export let _AVK2_VEHICLE_TYPENAMES = $.call($.frozenset, [new Set(["AVK2Vehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "EVOVehicle"])], null);

export function _vehicle(data: Record<string, unknown>): Record<string, unknown> | null;
/** Translated upstream _vehicle. */
export function _vehicle(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
return $.call(_root, [data, "vehicle"], null);
}

export function _root(data: Record<string, unknown>, root_field: string): Record<string, unknown> | null;
/** Translated upstream _root. */
export function _root(...__args: any[]): any {
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
return $.call(_optional_typed_object, [$.get(data, root_field), root_field], null);
}

export function _required_field(container: Record<string, unknown>, field: string, path: string): unknown;
/** Translated upstream _required_field. */
export function _required_field(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
if ($.truth((!$.contains(container, field)))) {
throw $.call(ResponseError, [($.str(path) + " is missing")], null);
}
return $.get(container, field);
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

export function _optional_typed_object(value: unknown, path: string): Record<string, unknown> | null;
/** Translated upstream _optional_typed_object. */
export function _optional_typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_typed_object, [value, path], null);
}

export function _required_optional_typed_object(container: Record<string, unknown>, field: string, path: string): Record<string, unknown> | null;
/** Translated upstream _required_optional_typed_object. */
export function _required_optional_typed_object(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_optional_typed_object, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _typename(container: Record<string, unknown>, path: string): string;
/** Translated upstream _typename. */
export function _typename(...__args: any[]): any {
let {"container": container, "path": path} = $.bind(__args, ["container", "path"], {}, [], null, null);
return $.call(_required_string, [container, "__typename", ($.str(path) + ".__typename")], null);
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

export function _required_nullable_list(container: Record<string, unknown>, field: string, path: string): ReadonlyArray<unknown> | null;
/** Translated upstream _required_nullable_list. */
export function _required_nullable_list(...__args: any[]): any {
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

export function _string(value: unknown, path: string): string;
/** Translated upstream _string. */
export function _string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return value;
}

export function _required_string(container: Record<string, unknown>, field: string, path: string): string;
/** Translated upstream _required_string. */
export function _required_string(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_string, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _required_nullable_string(container: Record<string, unknown>, field: string, path: string): string | null;
/** Translated upstream _required_nullable_string. */
export function _required_nullable_string(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
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

export function _required_int(container: Record<string, unknown>, field: string, path: string): number;
/** Translated upstream _required_int. */
export function _required_int(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_int, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _required_nullable_int(container: Record<string, unknown>, field: string, path: string): number | null;
/** Translated upstream _required_nullable_int. */
export function _required_nullable_int(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
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

export function _required_float(container: Record<string, unknown>, field: string, path: string): number;
/** Translated upstream _required_float. */
export function _required_float(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_float, [$.call(_required_field, [container, field, path], null), path], null);
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

export function _required_nullable_bool(container: Record<string, unknown>, field: string, path: string): boolean | null;
/** Translated upstream _required_nullable_bool. */
export function _required_nullable_bool(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _required_enum(container: Record<string, unknown>, field: string, enum_type: any, path: string): any;
/** Translated upstream _required_enum. */
export function _required_enum(...__args: any[]): any {
let {"container": container, "field": field, "enum_type": enum_type, "path": path} = $.bind(__args, ["container", "field", "enum_type", "path"], {}, [], null, null);
return $.call(_enum, [$.call(_required_field, [container, field, path], null), enum_type, path], null);
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

export function _enum(value: unknown, enum_type: any, path: string): any;
/** Translated upstream _enum. */
export function _enum(...__args: any[]): any {
let raw_value;
let {"value": value, "enum_type": enum_type, "path": path} = $.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
raw_value = $.call(_string, [value, path], null);
try {
return $.call(enum_type, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { try {
return $.call(enum_type, ["UNKNOWN__"], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { throw $.call(ResponseError, [($.str(path) + " has an unsupported value: " + $.str(raw_value))], null); } else { throw __error; }
} } else { throw __error; }
}
}

export function _required_datetime(container: Record<string, unknown>, field: string, path: string): $.DateValue;
/** Translated upstream _required_datetime. */
export function _required_datetime(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_datetime, [$.call(_required_field, [container, field, path], null), path], null);
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
return $.call(_datetime, [value, path], null);
}

export function _datetime(value: unknown, path: string): $.DateValue;
/** Translated upstream _datetime. */
export function _datetime(...__args: any[]): any {
let normalized, raw_value, result;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
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

export function _required_date(container: Record<string, unknown>, field: string, path: string): $.DateValue;
/** Translated upstream _required_date. */
export function _required_date(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_date, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _required_nullable_date(container: Record<string, unknown>, field: string, path: string): $.DateValue | null;
/** Translated upstream _required_nullable_date. */
export function _required_nullable_date(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_date, [value, path], null);
}

export function _date(value: unknown, path: string): $.DateValue;
/** Translated upstream _date. */
export function _date(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_string, [value, path], null);
try {
return $.call($.attr(date, "fromisoformat"), [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { let error = __error; throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date")], null); } else { throw __error; }
}
}
