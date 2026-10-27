// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const StrEnum = $.StrEnum;

import { EnergyAccountConnector, EnergyAccountData, EnergyAccountStatus, EnergyAccountStatusReason, EnergyAccountStatusResult, EnergyNacsStatus, EnergyPncStatus, EnergyToggleStatus } from "./energy_account_models";
export { EnergyAccountConnector, EnergyAccountData, EnergyAccountStatus, EnergyAccountStatusReason, EnergyAccountStatusResult, EnergyNacsStatus, EnergyPncStatus, EnergyToggleStatus };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function parse_account_status(data: Record<string, unknown>): EnergyAccountStatusResult | null;
/** Parse the nullable Nissan Energy account status response. */
export function parse_account_status(...__args: any[]): any {
let account_data, connectors, connectors_path, index, parsed_connectors, raw_connector, raw_connectors, raw_data, root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable Nissan Energy account status response. */
root_field = "accountStatus";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
raw_data = $.call(_optional_typed_object, [$.call($.attr(root, "get"), ["data"], null), ($.str(root_field) + ".data")], null);
account_data = null;
if ($.truth(((raw_data !== null)))) {
connectors_path = ($.str(root_field) + ".data.connectors");
raw_connectors = $.call(_nullable_list, [$.call($.attr(raw_data, "get"), ["connectors"], null), connectors_path], null);
connectors = null;
if ($.truth(((raw_connectors !== null)))) {
parsed_connectors = [];
for ([index, raw_connector] of $.iterable($.call($.enumerate, [raw_connectors], null))) {
if ($.truth(((raw_connector === null)))) {
$.call($.attr(parsed_connectors, "append"), [null], null);
continue;
}
$.call($.attr(parsed_connectors, "append"), [$.call(_parse_connector, [raw_connector, ($.str(connectors_path) + "[" + $.str(index) + "]")], null)], null);
}
connectors = $.call($.tuple, [parsed_connectors], null);
}
account_data = $.call(EnergyAccountData, [], Object.assign({}, {"status": $.call(_nullable_enum, [$.call($.attr(raw_data, "get"), ["status"], null), EnergyAccountStatus, ($.str(root_field) + ".data.status")], null)}, {"status_reason": $.call(_nullable_enum, [$.call($.attr(raw_data, "get"), ["statusReason"], null), EnergyAccountStatusReason, ($.str(root_field) + ".data.statusReason")], null)}, {"pnc_status": $.call(_nullable_enum, [$.call($.attr(raw_data, "get"), ["pncStatus"], null), EnergyPncStatus, ($.str(root_field) + ".data.pncStatus")], null)}, {"pnc_status_reason": $.call(_nullable_string, [$.call($.attr(raw_data, "get"), ["pncStatusReason"], null), ($.str(root_field) + ".data.pncStatusReason")], null)}, {"toggle_status": $.call(_nullable_enum, [$.call($.attr(raw_data, "get"), ["toggleStatus"], null), EnergyToggleStatus, ($.str(root_field) + ".data.toggleStatus")], null)}, {"nacs_status": $.call(_nullable_enum, [$.call($.attr(raw_data, "get"), ["nacsStatus"], null), EnergyNacsStatus, ($.str(root_field) + ".data.nacsStatus")], null)}, {"connectors": connectors}));
}
return $.call(EnergyAccountStatusResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(root, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": account_data}));
}

export function _parse_connector(value: unknown, path: string): EnergyAccountConnector;
/** Translated upstream _parse_connector. */
export function _parse_connector(...__args: any[]): any {
let connector;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
connector = $.call(_typed_object, [value, path], null);
return $.call(EnergyAccountConnector, [], Object.assign({}, {"id": $.call(_nullable_string, [$.call($.attr(connector, "get"), ["id"], null), ($.str(path) + ".id")], null)}, {"connector_name": $.call(_nullable_string, [$.call($.attr(connector, "get"), ["connectorName"], null), ($.str(path) + ".connectorName")], null)}));
}

export function _root(data: Record<string, unknown>, root_field: string): Record<string, unknown> | null;
/** Translated upstream _root. */
export function _root(...__args: any[]): any {
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
return $.call(_optional_typed_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
}

export function _typed_object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _typed_object. */
export function _typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
$.call(_string, [$.call($.attr(value, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
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

export function _nullable_enum(value: unknown, enum_type: any, path: string): any | null;
/** Translated upstream _nullable_enum. */
export function _nullable_enum(...__args: any[]): any {
let raw_value, unknown_value;
let {"value": value, "enum_type": enum_type, "path": path} = $.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
raw_value = $.call(_nullable_string, [value, path], null);
if ($.truth(((raw_value === null)))) {
return null;
}
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
