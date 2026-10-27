// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

import { InVehicleMessage, InVehicleMessageSummary, PushNotificationDatabaseError, PushNotificationResult, PushNotificationSuccess, PushNotificationTokenError } from "./device_notification_models";
export { InVehicleMessage, InVehicleMessageSummary, PushNotificationDatabaseError, PushNotificationResult, PushNotificationSuccess, PushNotificationTokenError };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function parse_register_push_notifications(data: Record<string, unknown>): boolean | null;
/** Parse the nullable scalar returned by legacy push registration. */
export function parse_register_push_notifications(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable scalar returned by legacy push registration. */
return $.call(_parse_legacy_push_result, [data, "registerNotifications"], null);
}

export function parse_unregister_push_notifications(data: Record<string, unknown>): boolean | null;
/** Parse the nullable scalar returned by legacy push unregistration. */
export function parse_unregister_push_notifications(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable scalar returned by legacy push unregistration. */
return $.call(_parse_legacy_push_result, [data, "unregisterNotifications"], null);
}

export function parse_register_device_for_push_notifications(data: Record<string, unknown>): PushNotificationResult | null;
/** Parse the typed union returned by current device push registration. */
export function parse_register_device_for_push_notifications(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the typed union returned by current device push registration. */
return $.call(_parse_device_push_result, [data, "registerDeviceForPushNotifications"], null);
}

export function parse_unregister_device_for_push_notifications(data: Record<string, unknown>): PushNotificationResult | null;
/** Parse the typed union returned by current device push unregistration. */
export function parse_unregister_device_for_push_notifications(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the typed union returned by current device push unregistration. */
return $.call(_parse_device_push_result, [data, "unregisterDeviceForPushNotifications"], null);
}

export function parse_in_vehicle_messages(data: Record<string, unknown>): ReadonlyArray<InVehicleMessageSummary | null> | null;
/** Parse a nullable message list while preserving nullable list items. */
export function parse_in_vehicle_messages(...__args: any[]): any {
let index, message, messages, path, raw_message, values, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a nullable message list while preserving nullable list items. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "inVehicleMessages"))))) {
return null;
}
values = $.call(_nullable_list, [$.call($.attr(vehicle, "get"), ["inVehicleMessages"], null), "vehicle.inVehicleMessages"], null);
if ($.truth(((values === null)))) {
return null;
}
messages = [];
for ([index, raw_message] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((raw_message === null)))) {
$.call($.attr(messages, "append"), [null], null);
continue;
}
path = ("vehicle.inVehicleMessages[" + $.str(index) + "]");
message = $.call(_object, [raw_message, path], null);
$.call(_string, [$.call($.attr(message, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
$.call($.attr(messages, "append"), [$.call(InVehicleMessageSummary, [], Object.assign({}, {"campaign_id": $.call(_nullable_string, [$.call($.attr(message, "get"), ["campaignId"], null), ($.str(path) + ".campaignId")], null)}, {"created_date_time": $.call(_nullable_datetime, [$.call($.attr(message, "get"), ["createdDateTime"], null), ($.str(path) + ".createdDateTime")], null)}, {"title": $.call(_nullable_string, [$.call($.attr(message, "get"), ["title"], null), ($.str(path) + ".title")], null)}, {"viewed": $.call(_nullable_bool, [$.call($.attr(message, "get"), ["viewed"], null), ($.str(path) + ".viewed")], null)}))], null);
}
return $.call($.tuple, [messages], null);
}

export function parse_in_vehicle_message(data: Record<string, unknown>): InVehicleMessage | null;
/** Parse nullable detail for one in-vehicle message. */
export function parse_in_vehicle_message(...__args: any[]): any {
let message, path, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable detail for one in-vehicle message. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "inVehicleMessage"))))) {
return null;
}
path = "vehicle.inVehicleMessage";
message = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["inVehicleMessage"], null), path], null);
if ($.truth(((message === null)))) {
return null;
}
$.call(_string, [$.call($.attr(message, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
return $.call(InVehicleMessage, [], Object.assign({}, {"title": $.call(_nullable_string, [$.call($.attr(message, "get"), ["title"], null), ($.str(path) + ".title")], null)}, {"campaign_id": $.call(_nullable_string, [$.call($.attr(message, "get"), ["campaignId"], null), ($.str(path) + ".campaignId")], null)}, {"viewed": $.call(_nullable_bool, [$.call($.attr(message, "get"), ["viewed"], null), ($.str(path) + ".viewed")], null)}, {"text": $.call(_nullable_string, [$.call($.attr(message, "get"), ["text"], null), ($.str(path) + ".text")], null)}, {"expire_date": $.call(_nullable_datetime, [$.call($.attr(message, "get"), ["expireDate"], null), ($.str(path) + ".expireDate")], null)}));
}

export function _parse_legacy_push_result(data: Record<string, unknown>, root_field: string): boolean | null;
/** Translated upstream _parse_legacy_push_result. */
export function _parse_legacy_push_result(...__args: any[]): any {
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
return $.call(_nullable_bool, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
}

export function _parse_device_push_result(data: Record<string, unknown>, root_field: string): PushNotificationResult | null;
/** Translated upstream _parse_device_push_result. */
export function _parse_device_push_result(...__args: any[]): any {
let result, typename;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
result = $.call(_optional_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
if ($.truth(((result === null)))) {
return null;
}
typename = $.call(_string, [$.call($.attr(result, "get"), ["__typename"], null), ($.str(root_field) + ".__typename")], null);
if ($.truth(($.eq(typename, "GeneralMessage")))) {
return $.call(PushNotificationSuccess, [], Object.assign({}, {"message": $.call(_string, [$.call($.attr(result, "get"), ["message"], null), ($.str(root_field) + ".message")], null)}));
}
if ($.truth(($.eq(typename, "DatabaseError")))) {
return $.call(PushNotificationDatabaseError, [], Object.assign({}, {"error_message": $.call(_string, [$.call($.attr(result, "get"), ["errorMessage"], null), ($.str(root_field) + ".errorMessage")], null)}));
}
if ($.truth(($.eq(typename, "TokenError")))) {
return $.call(PushNotificationTokenError, [], Object.assign({}, {"error_message": $.call(_string, [$.call($.attr(result, "get"), ["errorMessage"], null), ($.str(root_field) + ".errorMessage")], null)}));
}
throw $.call(ResponseError, [("Unsupported " + $.str(root_field) + " type: " + $.str(typename))], null);
}

export function _vehicle(data: Record<string, unknown>): Record<string, unknown> | null;
/** Translated upstream _vehicle. */
export function _vehicle(...__args: any[]): any {
let vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
if ($.truth((!$.contains(data, "vehicle")))) {
throw $.call(ResponseError, ["vehicle is missing"], null);
}
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle !== null)))) {
$.call(_string, [$.call($.attr(vehicle, "get"), ["__typename"], null), "vehicle.__typename"], null);
}
return vehicle;
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

export function _nullable_datetime(value: unknown, path: string): $.DateValue | null;
/** Translated upstream _nullable_datetime. */
export function _nullable_datetime(...__args: any[]): any {
let normalized, raw_value, result;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
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
