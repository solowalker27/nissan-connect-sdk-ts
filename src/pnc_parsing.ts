// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { PlugAndChargeCertificateRetryResult, PlugAndChargeServiceData, PlugAndChargeServiceState, PlugAndChargeServiceStatus, PublicChargeLocationCoordinates, PublicChargeSessionData, PublicChargeSessionStartData, PublicChargeSessionStartResult, PublicChargeSessionState, PublicChargeSessionStatus, PublicChargeSessionStopResult } from "./pnc_models";
export { PlugAndChargeCertificateRetryResult, PlugAndChargeServiceData, PlugAndChargeServiceState, PlugAndChargeServiceStatus, PublicChargeLocationCoordinates, PublicChargeSessionData, PublicChargeSessionStartData, PublicChargeSessionStartResult, PublicChargeSessionState, PublicChargeSessionStatus, PublicChargeSessionStopResult };

export function parse_pnc_service_status(data: Record<string, unknown>): PlugAndChargeServiceStatus | null;
/** Parse the nullable Plug & Charge service-status response. */
export function parse_pnc_service_status(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable Plug & Charge service-status response. */
return $.call(_parse_pnc_service_status, [data, "pncServiceStatus"], null);
}

export function parse_update_pnc_service_status(data: Record<string, unknown>): PlugAndChargeServiceStatus | null;
/** Parse the nullable Plug & Charge enrollment-update response. */
export function parse_update_pnc_service_status(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable Plug & Charge enrollment-update response. */
return $.call(_parse_pnc_service_status, [data, "updatePnCServiceStatus"], null);
}

export function parse_start_charge_session(data: Record<string, unknown>): PublicChargeSessionStartResult | null;
/** Parse the nullable public-session start response. */
export function parse_start_charge_session(...__args: any[]): any {
let details, path, raw_details, root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable public-session start response. */
root_field = "startChargeSession";
root = $.call(_required_optional_object, [data, root_field, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
$.call(_typename, [root, root_field], null);
raw_details = $.call(_required_optional_object, [root, "data", ($.str(root_field) + ".data")], null);
details = null;
if ($.truth(((raw_details !== null)))) {
path = ($.str(root_field) + ".data");
$.call(_typename, [raw_details, path], null);
details = $.call(PublicChargeSessionStartData, [], Object.assign({}, {"vin": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["vin"], null), ($.str(path) + ".vin")], null)}, {"evse_id": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["evseId"], null), ($.str(path) + ".evseId")], null)}, {"status": $.call(_nullable_session_state, [$.call($.attr(raw_details, "get"), ["status"], null), ($.str(path) + ".status")], null)}, {"message": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["message"], null), ($.str(path) + ".message")], null)}, {"stop_session_allowed": $.call(_nullable_bool, [$.call($.attr(raw_details, "get"), ["stopSessionAllowed"], null), ($.str(path) + ".stopSessionAllowed")], null)}));
}
return $.call(PublicChargeSessionStartResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(root, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": details}));
}

export function parse_stop_charge_session(data: Record<string, unknown>): PublicChargeSessionStopResult | null;
/** Parse the nullable public-session stop response. */
export function parse_stop_charge_session(...__args: any[]): any {
let root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable public-session stop response. */
root_field = "stopChargeSession";
root = $.call(_required_optional_object, [data, root_field, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
$.call(_typename, [root, root_field], null);
return $.call(PublicChargeSessionStopResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(root, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}));
}

export function parse_charge_session_status(data: Record<string, unknown>): PublicChargeSessionStatus | null;
/** Parse the nullable current public charging-session response. */
export function parse_charge_session_status(...__args: any[]): any {
let coordinates, coordinates_path, details, path, raw_coordinates, raw_details, root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable current public charging-session response. */
root_field = "sessionStatus";
root = $.call(_required_optional_object, [data, root_field, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
$.call(_typename, [root, root_field], null);
raw_details = $.call(_required_optional_object, [root, "data", ($.str(root_field) + ".data")], null);
details = null;
if ($.truth(((raw_details !== null)))) {
path = ($.str(root_field) + ".data");
$.call(_typename, [raw_details, path], null);
raw_coordinates = $.call(_required_optional_object, [raw_details, "locationCoordinates", ($.str(path) + ".locationCoordinates")], null);
coordinates = null;
if ($.truth(((raw_coordinates !== null)))) {
coordinates_path = ($.str(path) + ".locationCoordinates");
$.call(_typename, [raw_coordinates, coordinates_path], null);
coordinates = $.call(PublicChargeLocationCoordinates, [], Object.assign({}, {"latitude": $.call(_nullable_string, [$.call($.attr(raw_coordinates, "get"), ["latitude"], null), ($.str(coordinates_path) + ".latitude")], null)}, {"longitude": $.call(_nullable_string, [$.call($.attr(raw_coordinates, "get"), ["longitude"], null), ($.str(coordinates_path) + ".longitude")], null)}));
}
details = $.call(PublicChargeSessionData, [], Object.assign({}, {"session_uid": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["sessionUid"], null), ($.str(path) + ".sessionUid")], null)}, {"status": $.call(_nullable_session_state, [$.call($.attr(raw_details, "get"), ["status"], null), ($.str(path) + ".status")], null)}, {"message": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["message"], null), ($.str(path) + ".message")], null)}, {"stop_session_allowed": $.call(_nullable_bool, [$.call($.attr(raw_details, "get"), ["stopSessionAllowed"], null), ($.str(path) + ".stopSessionAllowed")], null)}, {"cpo_name": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["cpoName"], null), ($.str(path) + ".cpoName")], null)}, {"physical_reference": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["physicalReference"], null), ($.str(path) + ".physicalReference")], null)}, {"location_address": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["locationAddress"], null), ($.str(path) + ".locationAddress")], null)}, {"location_city": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["locationCity"], null), ($.str(path) + ".locationCity")], null)}, {"location_state": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["locationState"], null), ($.str(path) + ".locationState")], null)}, {"location_coordinates": coordinates}));
}
return $.call(PublicChargeSessionStatus, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(root, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": details}));
}

export function parse_retry_certificate_install(data: Record<string, unknown>): PlugAndChargeCertificateRetryResult | null;
/** Parse the nullable certificate-install retry result. */
export function parse_retry_certificate_install(...__args: any[]): any {
let root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable certificate-install retry result. */
root_field = "retryCertInstall";
root = $.call(_required_optional_object, [data, root_field, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
$.call(_typename, [root, root_field], null);
return $.call(PlugAndChargeCertificateRetryResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}));
}

export function _parse_pnc_service_status(data: Record<string, unknown>, root_field: string): PlugAndChargeServiceStatus | null;
/** Translated upstream _parse_pnc_service_status. */
export function _parse_pnc_service_status(...__args: any[]): any {
let details, path, raw_details, root;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
root = $.call(_required_optional_object, [data, root_field, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
$.call(_typename, [root, root_field], null);
raw_details = $.call(_required_optional_object, [root, "data", ($.str(root_field) + ".data")], null);
details = null;
if ($.truth(((raw_details !== null)))) {
path = ($.str(root_field) + ".data");
$.call(_typename, [raw_details, path], null);
details = $.call(PlugAndChargeServiceData, [], Object.assign({}, {"vin": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["vin"], null), ($.str(path) + ".vin")], null)}, {"state": $.call(_nullable_service_state, [$.call($.attr(raw_details, "get"), ["pncServiceStatus"], null), ($.str(path) + ".pncServiceStatus")], null)}));
}
return $.call(PlugAndChargeServiceStatus, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(root, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": details}));
}

export function _required_optional_object(container: Record<string, unknown>, field: string, path: string): Record<string, unknown> | null;
/** Translated upstream _required_optional_object. */
export function _required_optional_object(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
if ($.truth((!$.contains(container, field)))) {
throw $.call(ResponseError, [($.str(path) + " is missing")], null);
}
value = $.call($.attr(container, "get"), [field], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
return value;
}

export function _typename(value: Record<string, unknown>, path: string): null;
/** Translated upstream _typename. */
export function _typename(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_string, [$.call($.attr(value, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
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

export function _nullable_service_state(value: unknown, path: string): PlugAndChargeServiceState | null;
/** Translated upstream _nullable_service_state. */
export function _nullable_service_state(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_nullable_string, [value, path], null);
if ($.truth(((raw_value === null)))) {
return null;
}
try {
return $.call(PlugAndChargeServiceState, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(PlugAndChargeServiceState, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _nullable_session_state(value: unknown, path: string): PublicChargeSessionState | null;
/** Translated upstream _nullable_session_state. */
export function _nullable_session_state(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_nullable_string, [value, path], null);
if ($.truth(((raw_value === null)))) {
return null;
}
try {
return $.call(PublicChargeSessionState, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(PublicChargeSessionState, "UNKNOWN_VALUE"); } else { throw __error; }
}
}
