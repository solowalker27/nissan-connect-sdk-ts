// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { in_vehicle_message_variables, in_vehicle_messages_variables } from "./device_notification_inputs";
export { in_vehicle_message_variables, in_vehicle_messages_variables };

import { InVehicleMessage, InVehicleMessageSummary } from "./device_notification_models";
export { InVehicleMessage, InVehicleMessageSummary };

import { parse_in_vehicle_message, parse_in_vehicle_messages } from "./device_notification_parsing";
export { parse_in_vehicle_message, parse_in_vehicle_messages };

import { UnsetType } from "./graphql_input";
export { UnsetType };

import { NissanEnergyNotificationPreferences, NotificationPreference } from "./notification_models";
export { NissanEnergyNotificationPreferences, NotificationPreference };

import { parse_nissan_energy_notification_preferences, parse_notification_preferences } from "./notification_parsing";
export { parse_nissan_energy_notification_preferences, parse_notification_preferences };

import { OtaUpdate, OtaUpdateProgress } from "./ota_models";
export { OtaUpdate, OtaUpdateProgress };

import { parse_ota_update, parse_ota_update_progress } from "./ota_parsing";
export { parse_ota_update, parse_ota_update_progress };

/** Translated upstream _MessageClientMixin. */
export class _MessageClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _MessageClientMixin, __args); }
async_get_ota_update(vin: string): Promise<OtaUpdate | null>;
/** Return the OTA campaign currently offered to a compatible vehicle. */
async async_get_ota_update(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the OTA campaign currently offered to a compatible vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["OtaUpdate", $.attr(operations, "OTA_UPDATE"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_ota_update, [data], null);
}
async_get_ota_update_progress(vin: string, campaign_operation_id: string): Promise<OtaUpdateProgress | null>;
/** Return download or activation progress for one OTA campaign. */
async async_get_ota_update_progress(...__args: any[]): any {
let data;
let {"vin": vin, "campaign_operation_id": campaign_operation_id} = $.bind(__args, ["vin", "campaign_operation_id"], {}, [], null, null);
/** Return download or activation progress for one OTA campaign. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["OtaUpdateProgress", $.attr(operations, "OTA_UPDATE_PROGRESS"), Object.assign({}, {["campaignOperationId"]: campaign_operation_id}, {["vin"]: vin})], null));
return $.call(parse_ota_update_progress, [data], null);
}
async_get_notification_preferences(vin: string): Promise<ReadonlyArray<NotificationPreference | null> | null>;
/** Return vehicle notification opt-ins grouped by category. */
async async_get_notification_preferences(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return vehicle notification opt-ins grouped by category. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NotificationPreferences", $.attr(operations, "NOTIFICATION_PREFERENCES"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_notification_preferences, [data], null);
}
async_get_nissan_energy_notification_preferences(vin: string): Promise<NissanEnergyNotificationPreferences | null>;
/** Return Nissan Energy Charge Network delivery preferences. */
async async_get_nissan_energy_notification_preferences(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return Nissan Energy Charge Network delivery preferences. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NissanEnergyNotificationPreferences", $.attr(operations, "NISSAN_ENERGY_NOTIFICATION_PREFERENCES"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_nissan_energy_notification_preferences, [data], null);
}
async_get_in_vehicle_messages(vin: string): Promise<ReadonlyArray<InVehicleMessageSummary | null> | null>;
/** Return the vehicle's nullable in-vehicle message summaries. */
async async_get_in_vehicle_messages(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the vehicle's nullable in-vehicle message summaries. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["InVehicleMessages", $.attr(operations, "IN_VEHICLE_MESSAGES"), $.call(in_vehicle_messages_variables, [vin], null)], null));
return $.call(parse_in_vehicle_messages, [data], null);
}
async_get_in_vehicle_message(vin: string, campaign_id: string, options?: { push?: boolean | UnsetType | null }): Promise<InVehicleMessage | null>;
/** Fetch one message, allowing Nissan to record the detail as viewed. */
async async_get_in_vehicle_message(...__args: any[]): any {
let data;
let {"vin": vin, "campaign_id": campaign_id, "push": push} = $.bind(__args, ["vin", "campaign_id"], {"push": false}, ["push"], null, null);
/** Fetch one message, allowing Nissan to record the detail as viewed. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["InVehicleMessage", $.attr(operations, "IN_VEHICLE_MESSAGE"), $.call(in_vehicle_message_variables, [vin, campaign_id], Object.assign({}, {"push": push}))], null));
return $.call(parse_in_vehicle_message, [data], null);
}
}
$.classType(_MessageClientMixin);
export interface _MessageClientMixin extends _NissanClientBase {}
