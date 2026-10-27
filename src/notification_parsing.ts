// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { NissanEnergyNotificationPreferences, NissanEnergyNotificationPreferencesUpdate, NotificationCategory, NotificationDestination, NotificationPreference, NotificationTypePreference } from "./notification_models";
export { NissanEnergyNotificationPreferences, NissanEnergyNotificationPreferencesUpdate, NotificationCategory, NotificationDestination, NotificationPreference, NotificationTypePreference };

export function parse_nissan_energy_notification_preferences(data: Record<string, unknown>): NissanEnergyNotificationPreferences | null;
/** Parse the nullable Nissan Energy notification-preference chain. */
export function parse_nissan_energy_notification_preferences(...__args: any[]): any {
let account_data, account_status, preferences;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable Nissan Energy notification-preference chain. */
account_status = $.call(_required_optional_object, [data, "accountStatus", "accountStatus"], null);
if ($.truth(((account_status === null)))) {
return null;
}
$.call(_string, [$.call($.attr(account_status, "get"), ["__typename"], null), "accountStatus.__typename"], null);
account_data = $.call(_required_optional_object, [account_status, "data", "accountStatus.data"], null);
if ($.truth(((account_data === null)))) {
return null;
}
$.call(_string, [$.call($.attr(account_data, "get"), ["__typename"], null), "accountStatus.data.__typename"], null);
preferences = $.call(_required_optional_object, [account_data, "notificationPreferences", "accountStatus.data.notificationPreferences"], null);
if ($.truth(((preferences === null)))) {
return null;
}
return $.call(_parse_nissan_energy_preferences, [preferences, "accountStatus.data.notificationPreferences"], null);
}

export function parse_update_nissan_energy_notification_preferences(data: Record<string, unknown>): NissanEnergyNotificationPreferencesUpdate | null;
/** Parse status and nullable result from the Nissan Energy mutation. */
export function parse_update_nissan_energy_notification_preferences(...__args: any[]): any {
let path, preferences, preferences_data, result;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse status and nullable result from the Nissan Energy mutation. */
path = "updateNotificationPreferences";
result = $.call(_required_optional_object, [data, path, path], null);
if ($.truth(((result === null)))) {
return null;
}
$.call(_string, [$.call($.attr(result, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
preferences_data = $.call(_required_optional_object, [result, "data", ($.str(path) + ".data")], null);
preferences = ($.truth(((preferences_data !== null))) ? $.call(_parse_nissan_energy_preferences, [preferences_data, ($.str(path) + ".data")], null) : null);
return $.call(NissanEnergyNotificationPreferencesUpdate, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusCode"], null), ($.str(path) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusMessage"], null), ($.str(path) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(result, "get"), ["timestamp"], null), ($.str(path) + ".timestamp")], null)}, {"preferences": preferences}));
}

export function parse_notification_preferences(data: Record<string, unknown>, root_field?: string): ReadonlyArray<NotificationPreference | null> | null;
/** Parse preferences from the vehicle query or preference mutation. */
export function parse_notification_preferences(...__args: any[]): any {
let container, index, notification_type, notification_types, path, preference, preferences, raw_preference, raw_type, raw_types, type_index, type_path, values;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {"root_field": "vehicle"}, [], null, null);
/** Parse preferences from the vehicle query or preference mutation. */
container = $.call(_optional_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
if ($.truth($.or(() => ((container === null)), () => (!$.contains(container, "notificationPreferences"))))) {
return null;
}
values = $.call(_nullable_list, [$.call($.attr(container, "get"), ["notificationPreferences"], null), ($.str(root_field) + ".notificationPreferences")], null);
if ($.truth(((values === null)))) {
return null;
}
preferences = [];
for ([index, raw_preference] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((raw_preference === null)))) {
$.call($.attr(preferences, "append"), [null], null);
continue;
}
path = ($.str(root_field) + ".notificationPreferences[" + $.str(index) + "]");
preference = $.call(_object, [raw_preference, path], null);
raw_types = $.call(_list, [$.call($.attr(preference, "get"), ["notificationType"], null), ($.str(path) + ".notificationType")], null);
notification_types = [];
for ([type_index, raw_type] of $.iterable($.call($.enumerate, [raw_types], null))) {
if ($.truth(((raw_type === null)))) {
$.call($.attr(notification_types, "append"), [null], null);
continue;
}
type_path = ($.str(path) + ".notificationType[" + $.str(type_index) + "]");
notification_type = $.call(_object, [raw_type, type_path], null);
$.call($.attr(notification_types, "append"), [$.call(NotificationTypePreference, [], Object.assign({}, {"destination": $.call(_destination, [$.call($.attr(notification_type, "get"), ["destination"], null), ($.str(type_path) + ".destination")], null)}, {"opt_in": $.call(_bool, [$.call($.attr(notification_type, "get"), ["optIn"], null), ($.str(type_path) + ".optIn")], null)}))], null);
}
$.call($.attr(preferences, "append"), [$.call(NotificationPreference, [], Object.assign({}, {"notification_category": $.call(_category, [$.call($.attr(preference, "get"), ["notificationCategory"], null), ($.str(path) + ".notificationCategory")], null)}, {"notification_type": $.call($.tuple, [notification_types], null)}))], null);
}
return $.call($.tuple, [preferences], null);
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

export function _required_optional_object(container: Record<string, unknown>, field: string, path: string): Record<string, unknown> | null;
/** Translated upstream _required_optional_object. */
export function _required_optional_object(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
if ($.truth((!$.contains(container, field)))) {
throw $.call(ResponseError, [($.str(path) + " is missing")], null);
}
return $.call(_optional_object, [$.call($.attr(container, "get"), [field], null), path], null);
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

export function _nullable_list(value: unknown, path: string): ReadonlyArray<unknown> | null;
/** Translated upstream _nullable_list. */
export function _nullable_list(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_list, [value, path], null);
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

export function _bool(value: unknown, path: string): boolean;
/** Translated upstream _bool. */
export function _bool(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _nullable_bool(value: unknown, path: string): boolean | null;
/** Translated upstream _nullable_bool. */
export function _nullable_bool(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_bool, [value, path], null);
}

export function _parse_nissan_energy_preferences(value: Record<string, unknown>, path: string): NissanEnergyNotificationPreferences;
/** Translated upstream _parse_nissan_energy_preferences. */
export function _parse_nissan_energy_preferences(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_string, [$.call($.attr(value, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
return $.call(NissanEnergyNotificationPreferences, [], Object.assign({}, {"email_status": $.call(_nullable_bool, [$.call($.attr(value, "get"), ["emailStatus"], null), ($.str(path) + ".emailStatus")], null)}, {"push_status": $.call(_nullable_bool, [$.call($.attr(value, "get"), ["pushStatus"], null), ($.str(path) + ".pushStatus")], null)}, {"sms_status": $.call(_nullable_bool, [$.call($.attr(value, "get"), ["smsStatus"], null), ($.str(path) + ".smsStatus")], null)}));
}

export function _category(value: unknown, path: string): NotificationCategory;
/** Translated upstream _category. */
export function _category(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_string, [value, path], null);
try {
return $.call(NotificationCategory, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(NotificationCategory, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _destination(value: unknown, path: string): NotificationDestination;
/** Translated upstream _destination. */
export function _destination(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_string, [value, path], null);
try {
return $.call(NotificationDestination, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(NotificationDestination, "UNKNOWN_VALUE"); } else { throw __error; }
}
}
