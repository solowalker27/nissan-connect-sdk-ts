// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { V1GAccountStatus, V1GMonitoredChargingAccountData, V1GMonitoredChargingAccountStatusResult, V1GMonitoredChargingPlanCancellationResult, V1GMonitoredChargingPlanEnrollmentData, V1GMonitoredChargingPlanEnrollmentResult, V1GNotificationPreference, V1GNotificationPreferencesUpdateResult, V1GTokenizedUrlData, V1GTokenizedUrlResult } from "./v1g_models";
export { V1GAccountStatus, V1GMonitoredChargingAccountData, V1GMonitoredChargingAccountStatusResult, V1GMonitoredChargingPlanCancellationResult, V1GMonitoredChargingPlanEnrollmentData, V1GMonitoredChargingPlanEnrollmentResult, V1GNotificationPreference, V1GNotificationPreferencesUpdateResult, V1GTokenizedUrlData, V1GTokenizedUrlResult };

export function parse_v1g_monitored_charging_account_status(data: Record<string, unknown>): V1GMonitoredChargingAccountStatusResult | null;
/** Parse the raw nullable V1G monitored-account response. */
export function parse_v1g_monitored_charging_account_status(...__args: any[]): any {
let account_data, path, raw_data, root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw nullable V1G monitored-account response. */
root_field = "v1GMonitoredChargingAccountStatus";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
raw_data = $.call(_required_optional_typed_object, [root, "data", ($.str(root_field) + ".data")], null);
account_data = null;
if ($.truth(((raw_data !== null)))) {
path = ($.str(root_field) + ".data");
account_data = $.call(V1GMonitoredChargingAccountData, [], Object.assign({}, {"account_status": $.call(_nullable_account_status, [$.call(_required_value, [raw_data, "v1GMonitoredChargingAccountStatus", ($.str(path) + ".v1GMonitoredChargingAccountStatus")], null), ($.str(path) + ".v1GMonitoredChargingAccountStatus")], null)}, {"notification_preferences": $.call(_required_notification_preferences, [raw_data, "v1GNotificationPreferences", ($.str(path) + ".v1GNotificationPreferences")], null)}, {"vin": $.call(_nullable_string, [$.call(_required_value, [raw_data, "vin", ($.str(path) + ".vin")], null), ($.str(path) + ".vin")], null)}));
}
return $.call(V1GMonitoredChargingAccountStatusResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call(_required_value, [root, "statusCode", ($.str(root_field) + ".statusCode")], null), ($.str(root_field) + ".statusCode")], null)}, {"data": account_data}));
}

export function parse_v1g_update_notification_preferences(data: Record<string, unknown>): V1GNotificationPreferencesUpdateResult | null;
/** Parse the raw nullable V1G notification-preference update. */
export function parse_v1g_update_notification_preferences(...__args: any[]): any {
let root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw nullable V1G notification-preference update. */
root_field = "v1GUpdateNotificationPreferences";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(V1GNotificationPreferencesUpdateResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call(_required_value, [root, "statusCode", ($.str(root_field) + ".statusCode")], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call(_required_value, [root, "statusMessage", ($.str(root_field) + ".statusMessage")], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call(_required_value, [root, "timestamp", ($.str(root_field) + ".timestamp")], null), ($.str(root_field) + ".timestamp")], null)}, {"notification_preferences": $.call(_required_notification_preferences, [root, "v1GNotificationPreferences", ($.str(root_field) + ".v1GNotificationPreferences")], null)}));
}

export function parse_v1g_tokenized_url(data: Record<string, unknown>): V1GTokenizedUrlResult | null;
/** Parse the raw nullable V1G tokenized-URL response. */
export function parse_v1g_tokenized_url(...__args: any[]): any {
let path, raw_data, root, root_field, tokenized_url;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw nullable V1G tokenized-URL response. */
root_field = "v1GTokenizedUrl";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
raw_data = $.call(_required_optional_typed_object, [root, "data", ($.str(root_field) + ".data")], null);
tokenized_url = null;
if ($.truth(((raw_data !== null)))) {
path = ($.str(root_field) + ".data");
tokenized_url = $.call(V1GTokenizedUrlData, [], Object.assign({}, {"url": $.call(_nullable_string, [$.call(_required_value, [raw_data, "url", ($.str(path) + ".url")], null), ($.str(path) + ".url")], null)}, {"vin": $.call(_nullable_string, [$.call(_required_value, [raw_data, "vin", ($.str(path) + ".vin")], null), ($.str(path) + ".vin")], null)}));
}
return $.call(V1GTokenizedUrlResult, [], Object.assign({}, {"data": tokenized_url}));
}

export function parse_v1g_enroll_monitored_charging_plan(data: Record<string, unknown>): V1GMonitoredChargingPlanEnrollmentResult | null;
/** Parse the raw nullable V1G monitored-plan enrollment response. */
export function parse_v1g_enroll_monitored_charging_plan(...__args: any[]): any {
let enrollment, path, raw_data, root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw nullable V1G monitored-plan enrollment response. */
root_field = "v1GEnrollMonitoredChargingPlan";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
raw_data = $.call(_required_optional_typed_object, [root, "data", ($.str(root_field) + ".data")], null);
enrollment = null;
if ($.truth(((raw_data !== null)))) {
path = ($.str(root_field) + ".data");
enrollment = $.call(V1GMonitoredChargingPlanEnrollmentData, [], Object.assign({}, {"account_status": $.call(_nullable_account_status, [$.call(_required_value, [raw_data, "v1GMonitoredChargingAccountStatus", ($.str(path) + ".v1GMonitoredChargingAccountStatus")], null), ($.str(path) + ".v1GMonitoredChargingAccountStatus")], null)}));
}
return $.call(V1GMonitoredChargingPlanEnrollmentResult, [], Object.assign({}, {"data": enrollment}));
}

export function parse_v1g_cancel_monitored_charging_plan(data: Record<string, unknown>): V1GMonitoredChargingPlanCancellationResult | null;
/** Parse the raw nullable V1G monitored-plan cancellation response. */
export function parse_v1g_cancel_monitored_charging_plan(...__args: any[]): any {
let root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw nullable V1G monitored-plan cancellation response. */
root_field = "v1GCancelMonitoredChargingPlan";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(V1GMonitoredChargingPlanCancellationResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call(_required_value, [root, "statusCode", ($.str(root_field) + ".statusCode")], null), ($.str(root_field) + ".statusCode")], null)}));
}

export function _root(data: Record<string, unknown>, root_field: string): Record<string, unknown> | null;
/** Translated upstream _root. */
export function _root(...__args: any[]): any {
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
return $.call(_required_optional_typed_object, [data, root_field, root_field], null);
}

export function _required_optional_typed_object(container: Record<string, unknown>, field: string, path: string): Record<string, unknown> | null;
/** Translated upstream _required_optional_typed_object. */
export function _required_optional_typed_object(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_value, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_typed_object, [value, path], null);
}

export function _typed_object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _typed_object. */
export function _typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
$.call(_string, [$.call(_required_value, [value, "__typename", ($.str(path) + ".__typename")], null), ($.str(path) + ".__typename")], null);
return value;
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

export function _required_notification_preferences(container: Record<string, unknown>, field: string, path: string): ReadonlyArray<V1GNotificationPreference | null> | null;
/** Translated upstream _required_notification_preferences. */
export function _required_notification_preferences(...__args: any[]): any {
let index, item, preferences, value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_value, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
preferences = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(preferences, "append"), [null], null);
continue;
}
$.call($.attr(preferences, "append"), [$.call(_parse_notification_preference, [item, ($.str(path) + "[" + $.str(index) + "]")], null)], null);
}
return $.call($.tuple, [preferences], null);
}

export function _parse_notification_preference(value: unknown, path: string): V1GNotificationPreference;
/** Translated upstream _parse_notification_preference. */
export function _parse_notification_preference(...__args: any[]): any {
let preference;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
preference = $.call(_typed_object, [value, path], null);
return $.call(V1GNotificationPreference, [], Object.assign({}, {"notification_category": $.call(_nullable_string, [$.call(_required_value, [preference, "v1GNotificationCategory", ($.str(path) + ".v1GNotificationCategory")], null), ($.str(path) + ".v1GNotificationCategory")], null)}, {"email_status": $.call(_nullable_bool, [$.call(_required_value, [preference, "v1GEmailStatus", ($.str(path) + ".v1GEmailStatus")], null), ($.str(path) + ".v1GEmailStatus")], null)}, {"push_status": $.call(_nullable_bool, [$.call(_required_value, [preference, "v1GPushStatus", ($.str(path) + ".v1GPushStatus")], null), ($.str(path) + ".v1GPushStatus")], null)}, {"sms_status": $.call(_nullable_bool, [$.call(_required_value, [preference, "v1GSmsStatus", ($.str(path) + ".v1GSmsStatus")], null), ($.str(path) + ".v1GSmsStatus")], null)}));
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

export function _nullable_account_status(value: unknown, path: string): V1GAccountStatus | null;
/** Translated upstream _nullable_account_status. */
export function _nullable_account_status(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_nullable_string, [value, path], null);
if ($.truth(((raw_value === null)))) {
return null;
}
try {
return $.call(V1GAccountStatus, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(V1GAccountStatus, "UNKNOWN_VALUE"); } else { throw __error; }
}
}
