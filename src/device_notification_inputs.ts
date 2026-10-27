// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const Final = $.Final;

import { DeviceOS } from "./device_notification_models";
export { DeviceOS };

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

export let MYNISSAN_ANDROID_APP_NAME = "mynissan-android";

/** One mobile device registered to receive Nissan push notifications. */
export class MobileInput {
readonly device_id: string;
readonly device_os: DeviceOS;
readonly app_name: string;
readonly token: string;
static __fields = [["device_id", $.MISSING], ["device_os", $.MISSING], ["app_name", $.MISSING], ["token", $.MISSING]];
constructor(device_id: string, device_os: DeviceOS, app_name: string, token: string);
constructor(options: { device_id: string; device_os: DeviceOS; app_name: string; token: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MobileInput, __args);  Object.freeze(this); }
}
$.classType(MobileInput);

/** Top-level device input accepted by Nissan's current push API. */
export class MobileInfoInput {
readonly mobile: MobileInput;
static __fields = [["mobile", $.MISSING]];
constructor(mobile: MobileInput);
constructor(options: { mobile: MobileInput });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MobileInfoInput, __args);  Object.freeze(this); }
}
$.classType(MobileInfoInput);

export function device_os_input(value: DeviceOS): string;
/** Serialize a schema-valid mobile operating system. */
export function device_os_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize a schema-valid mobile operating system. */
return $.call(serialize_enum, [value], null);
}

export function current_device_type_input(value: DeviceOS): string;
/** Map the schema enum to the title-cased string used by the current API. */
export function current_device_type_input(...__args: any[]): any {
let raw_value;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Map the schema enum to the title-cased string used by the current API. */
raw_value = $.call(serialize_enum, [value], null);
return $.get(Object.assign({}, {["ANDROID"]: "Android"}, {["IOS"]: "Ios"}), raw_value);
}

export function mobile_input(value: MobileInput): Record<string, unknown>;
/** Serialize one mobile device using Nissan's GraphQL field names. */
export function mobile_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize one mobile device using Nissan's GraphQL field names. */
return Object.assign({}, {["deviceId"]: $.attr(value, "device_id")}, {["deviceType"]: $.call(current_device_type_input, [$.attr(value, "device_os")], null)}, {["appName"]: $.attr(value, "app_name")}, {["token"]: $.attr(value, "token")});
}

export function mobile_info_input(value: MobileInfoInput): Record<string, unknown>;
/** Serialize the wrapper required by device push registration. */
export function mobile_info_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize the wrapper required by device push registration. */
return Object.assign({}, {["mobile"]: $.call(mobile_input, [$.attr(value, "mobile")], null)});
}

export function register_push_notifications_variables(device_id: string, token: string, device_os: DeviceOS): Record<string, unknown>;
/** Build variables for the legacy push registration mutation. */
export function register_push_notifications_variables(...__args: any[]): any {
let {"device_id": device_id, "token": token, "device_os": device_os} = $.bind(__args, ["device_id", "token", "device_os"], {}, [], null, null);
/** Build variables for the legacy push registration mutation. */
return Object.assign({}, {["deviceId"]: device_id}, {["token"]: token}, {["deviceOS"]: $.call(device_os_input, [device_os], null)});
}

export function unregister_push_notifications_variables(device_id: string, device_os: DeviceOS): Record<string, unknown>;
/** Build variables for the legacy push unregistration mutation. */
export function unregister_push_notifications_variables(...__args: any[]): any {
let {"device_id": device_id, "device_os": device_os} = $.bind(__args, ["device_id", "device_os"], {}, [], null, null);
/** Build variables for the legacy push unregistration mutation. */
return Object.assign({}, {["deviceId"]: device_id}, {["deviceOS"]: $.call(device_os_input, [device_os], null)});
}

export function register_device_for_push_notifications_variables(value: MobileInfoInput): Record<string, unknown>;
/** Build variables for the current device push registration mutation. */
export function register_device_for_push_notifications_variables(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Build variables for the current device push registration mutation. */
return Object.assign({}, {["mobileInfoInput"]: $.call(mobile_info_input, [value], null)});
}

export function unregister_device_for_push_notifications_variables(app_name: string, device_id: string, device_os: DeviceOS): Record<string, unknown>;
/** Build variables for the current device push unregistration mutation. */
export function unregister_device_for_push_notifications_variables(...__args: any[]): any {
let {"app_name": app_name, "device_id": device_id, "device_os": device_os} = $.bind(__args, ["app_name", "device_id", "device_os"], {}, [], null, null);
/** Build variables for the current device push unregistration mutation. */
return Object.assign({}, {["appName"]: app_name}, {["deviceId"]: device_id}, {["deviceType"]: $.call(current_device_type_input, [device_os], null)});
}

export function in_vehicle_messages_variables(vin: string): Record<string, unknown>;
/** Build variables for the in-vehicle message list query. */
export function in_vehicle_messages_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Build variables for the in-vehicle message list query. */
return Object.assign({}, {["vin"]: vin});
}

export function in_vehicle_message_variables(vin: string, campaign_id: string, push?: boolean | UnsetType | null): Record<string, unknown>;
/** Build detail-query variables while preserving omitted and null push values. */
export function in_vehicle_message_variables(...__args: any[]): any {
let {"vin": vin, "campaign_id": campaign_id, "push": push} = $.bind(__args, ["vin", "campaign_id", "push"], {"push": UNSET}, [], null, null);
/** Build detail-query variables while preserving omitted and null push values. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"campaignId": campaign_id}, {"push": push}));
}
