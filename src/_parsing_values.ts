// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { CameraPosition, CameraService, DistanceUnit, ProductType, PurchaseType, SeatClimateOption, V2LState, WeekDay } from "./models";
export { CameraPosition, CameraService, DistanceUnit, ProductType, PurchaseType, SeatClimateOption, V2LState, WeekDay };

export function _parse_week_days(value: unknown, path: string): ReadonlyArray<WeekDay>;
/** Translated upstream _parse_week_days. */
export function _parse_week_days(...__args: any[]): any {
let days, item, raw, values;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
values = $.call(_list, [value, path], null);
days = [];
for (item of $.iterable(values)) {
raw = $.call(_required_str, [item, path], null);
try {
$.call($.attr(days, "append"), [$.call(WeekDay, [raw], null)], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { $.call($.attr(days, "append"), [$.attr(WeekDay, "UNKNOWN_VALUE")], null); } else { throw __error; }
}
}
return $.call($.tuple, [days], null);
}

export function _optional_seat_option(value: unknown): SeatClimateOption | null;
/** Translated upstream _optional_seat_option. */
export function _optional_seat_option(...__args: any[]): any {
let raw;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
raw = $.call(_optional_str, [value], null);
if ($.truth(((raw === null)))) {
return null;
}
try {
return $.call(SeatClimateOption, [raw], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(SeatClimateOption, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _optional_camera_position(value: unknown): CameraPosition | null;
/** Translated upstream _optional_camera_position. */
export function _optional_camera_position(...__args: any[]): any {
let raw;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
raw = $.call(_optional_str, [value], null);
if ($.truth(((raw === null)))) {
return null;
}
try {
return $.call(CameraPosition, [raw], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(CameraPosition, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _optional_camera_service(value: unknown): CameraService | null;
/** Translated upstream _optional_camera_service. */
export function _optional_camera_service(...__args: any[]): any {
let raw;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
raw = $.call(_optional_str, [value], null);
if ($.truth(((raw === null)))) {
return null;
}
try {
return $.call(CameraService, [raw], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(CameraService, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _optional_v2l_state(value: unknown): V2LState | null;
/** Translated upstream _optional_v2l_state. */
export function _optional_v2l_state(...__args: any[]): any {
let raw;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
raw = $.call(_optional_str, [value], null);
if ($.truth(((raw === null)))) {
return null;
}
try {
return $.call(V2LState, [raw], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(V2LState, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _optional_on_off(value: unknown): boolean | null;
/** Translated upstream _optional_on_off. */
export function _optional_on_off(...__args: any[]): any {
let raw;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
raw = $.call(_optional_str, [value], null);
if ($.truth(($.eq(raw, "ON")))) {
return true;
}
if ($.truth(($.eq(raw, "OFF")))) {
return false;
}
return null;
}

export function _nested_optional_str(value: unknown, key: string): string | null;
/** Translated upstream _nested_optional_str. */
export function _nested_optional_str(...__args: any[]): any {
let item;
let {"value": value, "key": key} = $.bind(__args, ["value", "key"], {}, [], null, null);
item = $.call(_optional_object, [value, key], null);
return ($.truth(((item !== null))) ? $.call(_optional_str, [$.call($.attr(item, "get"), [key], null)], null) : null);
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

export function _optional_object(value: unknown, path: string): Record<string, unknown> | null;
/** Translated upstream _optional_object. */
export function _optional_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_object, [value, path], null);
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

export function _optional_list(value: unknown, path: string): ReadonlyArray<unknown> | null;
/** Translated upstream _optional_list. */
export function _optional_list(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_list, [value, path], null);
}

export function _required_str(value: unknown, path: string): string;
/** Translated upstream _required_str. */
export function _required_str(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.str], null)), () => !$.truth(value)))) {
throw $.call(ResponseError, [($.str(path) + " is not a non-empty string")], null);
}
return value;
}

export function _required_graphql_string(value: unknown, path: string): string;
/** Translated upstream _required_graphql_string. */
export function _required_graphql_string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return value;
}

export function _nullable_graphql_string(value: unknown, path: string): string | null;
/** Translated upstream _nullable_graphql_string. */
export function _nullable_graphql_string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_required_graphql_string, [value, path], null);
}

export function _optional_str(value: unknown): string | null;
/** Translated upstream _optional_str. */
export function _optional_str(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return ($.truth($.call($.isinstance, [value, $.str], null)) ? value : null);
}

export function _required_bool(value: unknown, path: string): boolean;
/** Translated upstream _required_bool. */
export function _required_bool(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _required_int(value: unknown, path: string): number;
/** Translated upstream _required_int. */
export function _required_int(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.int], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an integer")], null);
}
return value;
}

export function _optional_bool(value: unknown): boolean | null;
/** Translated upstream _optional_bool. */
export function _optional_bool(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return ($.truth($.call($.isinstance, [value, $.bool], null)) ? value : null);
}

export function _nullable_graphql_bool(value: unknown, path: string): boolean | null;
/** Translated upstream _nullable_graphql_bool. */
export function _nullable_graphql_bool(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_required_bool, [value, path], null);
}

export function _optional_int(value: unknown): number | null;
/** Translated upstream _optional_int. */
export function _optional_int(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return ($.truth($.and(() => $.call($.isinstance, [value, $.int], null), () => !$.truth($.call($.isinstance, [value, $.bool], null)))) ? value : null);
}

export function _required_float(value: unknown, path: string): number;
/** Translated upstream _required_float. */
export function _required_float(...__args: any[]): any {
let result;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
result = $.call(_optional_float, [value], null);
if ($.truth(((result === null)))) {
throw $.call(ResponseError, [($.str(path) + " is not numeric")], null);
}
return result;
}

export function _required_distance_unit(value: unknown, path: string): DistanceUnit;
/** Translated upstream _required_distance_unit. */
export function _required_distance_unit(...__args: any[]): any {
let raw;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw = $.call(_required_str, [value, path], null);
try {
return $.call(DistanceUnit, [raw], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(DistanceUnit, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _optional_float(value: unknown): number | null;
/** Translated upstream _optional_float. */
export function _optional_float(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.and(() => $.call($.isinstance, [value, [$.int, $.float]], null), () => !$.truth($.call($.isinstance, [value, $.bool], null))))) {
return $.call($.float, [value], null);
}
return null;
}

export function _required_datetime(value: unknown, path: string): $.DateValue;
/** Translated upstream _required_datetime. */
export function _required_datetime(...__args: any[]): any {
let parsed;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
parsed = $.call(_optional_datetime, [value], null);
if ($.truth(((parsed === null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time")], null);
}
return parsed;
}

export function _required_aware_datetime(value: unknown, path: string): $.DateValue;
/** Translated upstream _required_aware_datetime. */
export function _required_aware_datetime(...__args: any[]): any {
let normalized, parsed;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time with an offset")], null);
}
normalized = ($.truth($.call($.attr(value, "endswith"), ["Z"], null)) ? ($.str($.slice(value, null, -(1), null)) + "+00:00") : value);
try {
parsed = $.call($.attr(datetime, "fromisoformat"), [normalized], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { let error = __error; throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time with an offset")], null); } else { throw __error; }
}
if ($.truth($.or(() => (($.attr(parsed, "tzinfo") === null)), () => (($.call($.attr(parsed, "utcoffset"), [], null) === null))))) {
throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time with an offset")], null);
}
return parsed;
}

export function _nullable_aware_datetime(value: unknown, path: string): $.DateValue | null;
/** Translated upstream _nullable_aware_datetime. */
export function _nullable_aware_datetime(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_required_aware_datetime, [value, path], null);
}

export function _optional_datetime(value: unknown): $.DateValue | null;
/** Translated upstream _optional_datetime. */
export function _optional_datetime(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
return null;
}
try {
return $.call($.attr(datetime, "fromisoformat"), [$.call($.attr(value, "replace"), ["Z", "+00:00"], null)], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return null; } else { throw __error; }
}
}

export function _nullable_purchase_type(value: unknown, path: string): PurchaseType | string | null;
/** Translated upstream _nullable_purchase_type. */
export function _nullable_purchase_type(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
raw_value = $.call(_required_str, [value, path], null);
try {
return $.call(PurchaseType, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return raw_value; } else { throw __error; }
}
}

export function _nullable_product_type(value: unknown, path: string): ProductType | string | null;
/** Translated upstream _nullable_product_type. */
export function _nullable_product_type(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
raw_value = $.call(_required_str, [value, path], null);
try {
return $.call(ProductType, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return raw_value; } else { throw __error; }
}
}
