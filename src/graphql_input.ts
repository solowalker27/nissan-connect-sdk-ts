// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const datetime = $.datetime;

const Enum = $.Enum;
const StrEnum = $.StrEnum;

const Final = $.Final;

export const UnsetType = $.enumType("UnsetType", {"UNSET": "UNSET"}, false);
export type UnsetType = ReturnType<typeof UnsetType>;

export let UNSET = $.attr(UnsetType, "UNSET");

export function serialize_datetime(value: $.DateValue): string;
/** Serialize an offset-aware date-time for Nissan's GraphQL API. */
export function serialize_datetime(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize an offset-aware date-time for Nissan's GraphQL API. */
if ($.truth($.or(() => (($.attr(value, "tzinfo") === null)), () => (($.call($.attr(value, "utcoffset"), [], null) === null))))) {
throw $.call($.ValueError, ["Nissan date-time inputs must include a UTC offset"], null);
}
return $.call($.attr(value, "isoformat"), [], null);
}

export function serialize_enum(value: $.EnumValue): string;
/** Serialize a schema-valid GraphQL enum value. */
export function serialize_enum(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize a schema-valid GraphQL enum value. */
if ($.truth(($.eq($.attr(value, "value"), "UNKNOWN__")))) {
throw $.call($.ValueError, ["UNKNOWN_VALUE cannot be sent to Nissan as an input enum"], null);
}
return $.attr(value, "value");
}

export function optional_input_fields(): Record<string, unknown>;
/** Keep explicitly supplied GraphQL fields, including explicit nulls. */
export function optional_input_fields(...__args: any[]): any {
let key, value;
let {"values": values} = $.bind(__args, [], {}, [], null, "values");
/** Keep explicitly supplied GraphQL fields, including explicit nulls. */
return (() => { const __out: any = {}; for (const [key, value] of $.iterable($.call($.attr(values, "items"), [], null))) { if ($.truth(((value !== UNSET)))) { __out[key] = value; } } return __out; })();
}
