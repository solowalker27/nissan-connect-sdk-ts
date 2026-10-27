// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const datetime = $.datetime;

import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { MobileInfoInput, register_device_for_push_notifications_variables, register_push_notifications_variables, unregister_device_for_push_notifications_variables, unregister_push_notifications_variables } from "./device_notification_inputs";
export { MobileInfoInput, register_device_for_push_notifications_variables, register_push_notifications_variables, unregister_device_for_push_notifications_variables, unregister_push_notifications_variables };

import { DeviceOS, PushNotificationResult } from "./device_notification_models";
export { DeviceOS, PushNotificationResult };

import { parse_register_device_for_push_notifications, parse_register_push_notifications, parse_unregister_device_for_push_notifications, parse_unregister_push_notifications } from "./device_notification_parsing";
export { parse_register_device_for_push_notifications, parse_register_push_notifications, parse_unregister_device_for_push_notifications, parse_unregister_push_notifications };

import { UNSET, UnsetType, optional_input_fields } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields };

import { ServiceRequest, ServiceRequestKind } from "./models";
export { ServiceRequest, ServiceRequestKind };

import { NotificationPreferenceInput, notification_preferences_input, update_nissan_energy_notification_preferences_variables } from "./notification_inputs";
export { NotificationPreferenceInput, notification_preferences_input, update_nissan_energy_notification_preferences_variables };

import { NissanEnergyNotificationPreferencesUpdate, NotificationPreference } from "./notification_models";
export { NissanEnergyNotificationPreferencesUpdate, NotificationPreference };

import { parse_notification_preferences, parse_update_nissan_energy_notification_preferences } from "./notification_parsing";
export { parse_notification_preferences, parse_update_nissan_energy_notification_preferences };

import { data_wipe_type_input, download_ota_update_input, ota_activation_schedule_input } from "./ota_inputs";
export { data_wipe_type_input, download_ota_update_input, ota_activation_schedule_input };

import { DataWipeType } from "./ota_models";
export { DataWipeType };

/** Translated upstream _OtaNotificationClientMixin. */
export class _OtaNotificationClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _OtaNotificationClientMixin, __args); }
async_download_ota_update(vin: string, ota_update_id: string): Promise<ServiceRequest>;
/** Ask a compatible vehicle to download an offered OTA campaign. */
async async_download_ota_update(...__args: any[]): any {
let {"vin": vin, "ota_update_id": ota_update_id} = $.bind(__args, ["vin", "ota_update_id"], {}, [], null, null);
/** Ask a compatible vehicle to download an offered OTA campaign. */
return (await $.call($.attr(this, "_async_service_request"), ["DownloadOTAUpdate", $.attr(operations, "DOWNLOAD_OTA_UPDATE"), "downloadOTAUpdate", Object.assign({}, {["vin"]: vin}, {["input"]: $.call(download_ota_update_input, [ota_update_id], null)}), $.attr(ServiceRequestKind, "OTA")], null));
}
async_activate_ota_update(vin: string, ota_update_id: string): Promise<ServiceRequest>;
/** Ask a compatible vehicle to activate a downloaded OTA campaign. */
async async_activate_ota_update(...__args: any[]): any {
let {"vin": vin, "ota_update_id": ota_update_id} = $.bind(__args, ["vin", "ota_update_id"], {}, [], null, null);
/** Ask a compatible vehicle to activate a downloaded OTA campaign. */
return (await $.call($.attr(this, "_async_service_request"), ["ActivateOTAUpdate", $.attr(operations, "ACTIVATE_OTA_UPDATE"), "activateOTAUpdate", Object.assign({}, {["vin"]: vin}, {["otaUpdateId"]: ota_update_id}), $.attr(ServiceRequestKind, "OTA")], null));
}
async_cancel_ota_activation(vin: string, ota_update_id: string): Promise<ServiceRequest>;
/** Cancel an OTA campaign activation in progress. */
async async_cancel_ota_activation(...__args: any[]): any {
let {"vin": vin, "ota_update_id": ota_update_id} = $.bind(__args, ["vin", "ota_update_id"], {}, [], null, null);
/** Cancel an OTA campaign activation in progress. */
return (await $.call($.attr(this, "_async_service_request"), ["CancelActivationOTAUpdate", $.attr(operations, "CANCEL_ACTIVATION_OTA_UPDATE"), "cancelActivationOTAUpdate", Object.assign({}, {["vin"]: vin}, {["otaUpdateId"]: ota_update_id}), $.attr(ServiceRequestKind, "OTA")], null));
}
async_schedule_ota_activation(vin: string, ota_update_id: string, scheduled_date: $.DateValue): Promise<ServiceRequest>;
/** Schedule activation of a downloaded OTA campaign. */
async async_schedule_ota_activation(...__args: any[]): any {
let {"vin": vin, "ota_update_id": ota_update_id, "scheduled_date": scheduled_date} = $.bind(__args, ["vin", "ota_update_id", "scheduled_date"], {}, [], null, null);
/** Schedule activation of a downloaded OTA campaign. */
return (await $.call($.attr(this, "_async_service_request"), ["ScheduleActivationOTAUpdate", $.attr(operations, "SCHEDULE_ACTIVATION_OTA_UPDATE"), "scheduleActivationOTAUpdate", Object.assign({}, {["vin"]: vin}, {["input"]: $.call(ota_activation_schedule_input, [ota_update_id, scheduled_date], null)}), $.attr(ServiceRequestKind, "OTA")], null));
}
async_update_scheduled_ota_activation(vin: string, ota_update_id: string, scheduled_date: $.DateValue): Promise<ServiceRequest>;
/** Move an already scheduled OTA campaign activation. */
async async_update_scheduled_ota_activation(...__args: any[]): any {
let {"vin": vin, "ota_update_id": ota_update_id, "scheduled_date": scheduled_date} = $.bind(__args, ["vin", "ota_update_id", "scheduled_date"], {}, [], null, null);
/** Move an already scheduled OTA campaign activation. */
return (await $.call($.attr(this, "_async_service_request"), ["UpdateScheduledActivationOTAUpdate", $.attr(operations, "UPDATE_SCHEDULED_ACTIVATION_OTA_UPDATE"), "updateScheduledActivationOTAUpdate", Object.assign({}, {["vin"]: vin}, {["input"]: $.call(ota_activation_schedule_input, [ota_update_id, scheduled_date], null)}), $.attr(ServiceRequestKind, "OTA")], null));
}
async_cancel_scheduled_ota_activation(vin: string, ota_update_id: string): Promise<ServiceRequest>;
/** Cancel a scheduled OTA campaign activation. */
async async_cancel_scheduled_ota_activation(...__args: any[]): any {
let {"vin": vin, "ota_update_id": ota_update_id} = $.bind(__args, ["vin", "ota_update_id"], {}, [], null, null);
/** Cancel a scheduled OTA campaign activation. */
return (await $.call($.attr(this, "_async_service_request"), ["CancelScheduledActivationOTAUpdate", $.attr(operations, "CANCEL_SCHEDULED_ACTIVATION_OTA_UPDATE"), "cancelScheduledActivationOTAUpdate", Object.assign({}, {["vin"]: vin}, {["otaUpdateId"]: ota_update_id}), $.attr(ServiceRequestKind, "OTA")], null));
}
async_wipe_vehicle_data(vin: string, options?: { data_wipe_type?: DataWipeType | UnsetType | null }): Promise<ServiceRequest>;
/** Submit Nissan's remote vehicle data-wipe operation. */
async async_wipe_vehicle_data(...__args: any[]): any {
let serialized_type;
let {"vin": vin, "data_wipe_type": data_wipe_type} = $.bind(__args, ["vin"], {"data_wipe_type": UNSET}, ["data_wipe_type"], null, null);
/** Submit Nissan's remote vehicle data-wipe operation. */
serialized_type = data_wipe_type;
if ($.truth($.call($.isinstance, [data_wipe_type, DataWipeType], null))) {
serialized_type = $.call(data_wipe_type_input, [data_wipe_type], null);
}
return (await $.call($.attr(this, "_async_service_request"), ["DataWipe", $.attr(operations, "DATA_WIPE"), "dataWipe", $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"dataWipeType": serialized_type})), $.attr(ServiceRequestKind, "DATA_WIPE")], null));
}
async_set_notification_preferences(vin: string, preferences: ReadonlyArray<NotificationPreferenceInput | null>): Promise<ReadonlyArray<NotificationPreference | null> | null>;
/** Replace vehicle notification opt-ins with the supplied preferences. */
async async_set_notification_preferences(...__args: any[]): any {
let data;
let {"vin": vin, "preferences": preferences} = $.bind(__args, ["vin", "preferences"], {}, [], null, null);
/** Replace vehicle notification opt-ins with the supplied preferences. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SetNotificationPreferences", $.attr(operations, "SET_NOTIFICATION_PREFERENCES"), Object.assign({}, {["vin"]: vin}, {["preferences"]: $.call(notification_preferences_input, [preferences], null)})], null));
return $.call(parse_notification_preferences, [data, "setNotificationPreferences"], null);
}
async_update_nissan_energy_notification_preferences(vin: string, options?: { email_status?: boolean | UnsetType | null; push_status?: boolean | UnsetType | null; sms_status?: boolean | UnsetType | null }): Promise<NissanEnergyNotificationPreferencesUpdate | null>;
/** Patch Nissan Energy delivery flags, preserving omitted and null values. */
async async_update_nissan_energy_notification_preferences(...__args: any[]): any {
let data;
let {"vin": vin, "email_status": email_status, "push_status": push_status, "sms_status": sms_status} = $.bind(__args, ["vin"], {"email_status": UNSET, "push_status": UNSET, "sms_status": UNSET}, ["email_status", "push_status", "sms_status"], null, null);
/** Patch Nissan Energy delivery flags, preserving omitted and null values. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateNotificationPreferences", $.attr(operations, "UPDATE_NISSAN_ENERGY_NOTIFICATION_PREFERENCES"), $.call(update_nissan_energy_notification_preferences_variables, [vin], Object.assign({}, {"email_status": email_status}, {"push_status": push_status}, {"sms_status": sms_status}))], null));
return $.call(parse_update_nissan_energy_notification_preferences, [data], null);
}
async_register_push_notifications(device_id: string, token: string, device_os: DeviceOS): Promise<boolean | null>;
/** Register a legacy push token for the authenticated account. */
async async_register_push_notifications(...__args: any[]): any {
let data;
let {"device_id": device_id, "token": token, "device_os": device_os} = $.bind(__args, ["device_id", "token", "device_os"], {}, [], null, null);
/** Register a legacy push token for the authenticated account. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["RegisterPushNotifications", $.attr(operations, "REGISTER_PUSH_NOTIFICATIONS"), $.call(register_push_notifications_variables, [device_id, token, device_os], null)], null));
return $.call(parse_register_push_notifications, [data], null);
}
async_unregister_push_notifications(device_id: string, device_os: DeviceOS): Promise<boolean | null>;
/** Unregister a legacy push token for the authenticated account. */
async async_unregister_push_notifications(...__args: any[]): any {
let data;
let {"device_id": device_id, "device_os": device_os} = $.bind(__args, ["device_id", "device_os"], {}, [], null, null);
/** Unregister a legacy push token for the authenticated account. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UnregisterPushNotifications", $.attr(operations, "UNREGISTER_PUSH_NOTIFICATIONS"), $.call(unregister_push_notifications_variables, [device_id, device_os], null)], null));
return $.call(parse_unregister_push_notifications, [data], null);
}
async_register_device_for_push_notifications(mobile_info: MobileInfoInput): Promise<PushNotificationResult | null>;
/** Register a mobile installation through Nissan's current push API. */
async async_register_device_for_push_notifications(...__args: any[]): any {
let data;
let {"mobile_info": mobile_info} = $.bind(__args, ["mobile_info"], {}, [], null, null);
/** Register a mobile installation through Nissan's current push API. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["RegisterDeviceForPushNotifications", $.attr(operations, "REGISTER_DEVICE_FOR_PUSH_NOTIFICATIONS"), $.call(register_device_for_push_notifications_variables, [mobile_info], null)], null));
return $.call(parse_register_device_for_push_notifications, [data], null);
}
async_unregister_device_for_push_notifications(app_name: string, device_id: string, device_os: DeviceOS): Promise<PushNotificationResult | null>;
/** Unregister a mobile installation from Nissan's current push API. */
async async_unregister_device_for_push_notifications(...__args: any[]): any {
let data;
let {"app_name": app_name, "device_id": device_id, "device_os": device_os} = $.bind(__args, ["app_name", "device_id", "device_os"], {}, [], null, null);
/** Unregister a mobile installation from Nissan's current push API. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UnregisterDeviceForPushNotifications", $.attr(operations, "UNREGISTER_DEVICE_FOR_PUSH_NOTIFICATIONS"), $.call(unregister_device_for_push_notifications_variables, [app_name, device_id, device_os], null)], null));
return $.call(parse_unregister_device_for_push_notifications, [data], null);
}
}
$.classType(_OtaNotificationClientMixin);
export interface _OtaNotificationClientMixin extends _NissanClientBase {}
