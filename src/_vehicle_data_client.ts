// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };

import { CreatePartsReminderInput, PastServiceInput, ResetPartsReminderInput, UpdatePartsReminderInput, UpdatePastServiceInput, add_past_service_variables, collision_history_variables, collision_probe_data_variables, create_parts_reminder_variables, delete_parts_reminder_variables, get_maintenance_timeline_variables, get_service_contracts_variables, parts_reminders_variables, reset_parts_reminder_variables, update_parts_reminder_variables, update_past_service_variables } from "./maintenance_inputs";
export { CreatePartsReminderInput, PastServiceInput, ResetPartsReminderInput, UpdatePartsReminderInput, UpdatePastServiceInput, add_past_service_variables, collision_history_variables, collision_probe_data_variables, create_parts_reminder_variables, delete_parts_reminder_variables, get_maintenance_timeline_variables, get_service_contracts_variables, parts_reminders_variables, reset_parts_reminder_variables, update_parts_reminder_variables, update_past_service_variables };

import { CollisionHistoryEntry, CollisionProbeReading, MaintenanceTimeline, PartsReminderMutationResult, PastServiceResult, ServiceContract, VehiclePartsReminders } from "./maintenance_models";
export { CollisionHistoryEntry, CollisionProbeReading, MaintenanceTimeline, PartsReminderMutationResult, PastServiceResult, ServiceContract, VehiclePartsReminders };

import { parse_add_past_service, parse_collision_history, parse_collision_probe_data, parse_create_parts_reminder, parse_delete_parts_reminder, parse_maintenance_timeline, parse_parts_reminders, parse_reset_parts_reminder, parse_service_contracts, parse_update_parts_reminder, parse_update_past_service } from "./maintenance_parsing";
export { parse_add_past_service, parse_collision_history, parse_collision_probe_data, parse_create_parts_reminder, parse_delete_parts_reminder, parse_maintenance_timeline, parse_parts_reminders, parse_reset_parts_reminder, parse_service_contracts, parse_update_parts_reminder, parse_update_past_service };

import { DataPrivacyMode, DistanceUnit, RemoteServiceHistory, VehiclePreferences, VehicleSubscriptions, VehicleWifiConsumption } from "./models";
export { DataPrivacyMode, DistanceUnit, RemoteServiceHistory, VehiclePreferences, VehicleSubscriptions, VehicleWifiConsumption };

import { parse_remote_service_history, parse_vehicle_data_privacy_mode, parse_vehicle_preferences, parse_vehicle_subscriptions, parse_vehicle_wifi_consumption } from "./parsing";
export { parse_remote_service_history, parse_vehicle_data_privacy_mode, parse_vehicle_preferences, parse_vehicle_subscriptions, parse_vehicle_wifi_consumption };

/** Translated upstream _VehicleDataClientMixin. */
export class _VehicleDataClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _VehicleDataClientMixin, __args); }
async_get_vehicle_data_privacy_mode(vin: string): Promise<DataPrivacyMode | null>;
/** Return the vehicle's current data privacy mode. */
async async_get_vehicle_data_privacy_mode(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the vehicle's current data privacy mode. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleDataPrivacyMode", $.attr(operations, "VEHICLE_DATA_PRIVACY_MODE"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_vehicle_data_privacy_mode, [data], null);
}
async_get_vehicle_wifi_consumption(vin: string): Promise<VehicleWifiConsumption | null>;
/** Return current in-vehicle Wi-Fi consumption when available. */
async async_get_vehicle_wifi_consumption(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return current in-vehicle Wi-Fi consumption when available. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleWifiConsumption", $.attr(operations, "VEHICLE_WIFI_CONSUMPTION"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_vehicle_wifi_consumption, [data], null);
}
async_get_vehicle_preferences(vin: string): Promise<VehiclePreferences | null>;
/** Return MIL/DTC maintenance-data sharing preferences when available. */
async async_get_vehicle_preferences(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return MIL/DTC maintenance-data sharing preferences when available. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehiclePreferences", $.attr(operations, "VEHICLE_PREFERENCES"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_vehicle_preferences, [data], null);
}
async_get_vehicle_subscriptions(vin: string): Promise<VehicleSubscriptions | null>;
/** Return the vehicle subscription capability without app-level filtering. */
async async_get_vehicle_subscriptions(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the vehicle subscription capability without app-level filtering. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleSubscriptions", $.attr(operations, "VEHICLE_SUBSCRIPTIONS"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_vehicle_subscriptions, [data, vin], null);
}
async_update_vehicle_preferences(vin: string, preferences: VehiclePreferences): Promise<boolean>;
/** Replace all MIL/DTC maintenance-data sharing preferences. */
async async_update_vehicle_preferences(...__args: any[]): any {
let {"vin": vin, "preferences": preferences} = $.bind(__args, ["vin", "preferences"], {}, [], null, null);
/** Replace all MIL/DTC maintenance-data sharing preferences. */
return (await $.call($.attr(this, "_async_success_operation"), ["UpdateVehiclePreferences", $.attr(operations, "UPDATE_VEHICLE_PREFERENCES"), "updateVehiclePreferences", Object.assign({}, {["vin"]: vin}, {["communication"]: Object.assign({}, {["milDataSharing"]: Object.assign({}, {["enabled"]: $.attr(preferences, "enabled")}, {["text"]: $.attr(preferences, "text")}, {["phone"]: $.attr(preferences, "phone")}, {["email"]: $.attr(preferences, "email")})})})], null));
}
async_get_remote_service_history(vin: string, options: { page_number: number; items_per_page: number }): Promise<RemoteServiceHistory | null>;
/** Return one page of raw remote-service request history. */
async async_get_remote_service_history(...__args: any[]): any {
let data;
let {"vin": vin, "page_number": page_number, "items_per_page": items_per_page} = $.bind(__args, ["vin"], {}, ["page_number", "items_per_page"], null, null);
/** Return one page of raw remote-service request history. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["RemoteServiceHistory", $.attr(operations, "REMOTE_SERVICE_HISTORY"), Object.assign({}, {["vin"]: vin}, {["pageNumber"]: page_number}, {["itemsPerPage"]: items_per_page})], null));
return $.call(parse_remote_service_history, [data], null);
}
async_get_maintenance_timeline(vin: string, mileage_unit?: DistanceUnit): Promise<MaintenanceTimeline | null>;
/** Return the vehicle's current and projected maintenance milestones. */
async async_get_maintenance_timeline(...__args: any[]): any {
let data;
let {"vin": vin, "mileage_unit": mileage_unit} = $.bind(__args, ["vin", "mileage_unit"], {"mileage_unit": $.attr(DistanceUnit, "MILE")}, [], null, null);
/** Return the vehicle's current and projected maintenance milestones. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GetMaintenanceTimeline", $.attr(operations, "GET_MAINTENANCE_TIMELINE"), $.call(get_maintenance_timeline_variables, [vin, mileage_unit], null)], null));
return $.call(parse_maintenance_timeline, [data], null);
}
async_get_service_contracts(vin: string, mileage: number): Promise<ReadonlyArray<ServiceContract | null> | null>;
/** Return warranty service contracts evaluated at the supplied mileage. */
async async_get_service_contracts(...__args: any[]): any {
let data;
let {"vin": vin, "mileage": mileage} = $.bind(__args, ["vin", "mileage"], {}, [], null, null);
/** Return warranty service contracts evaluated at the supplied mileage. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GetServiceContracts", $.attr(operations, "GET_SERVICE_CONTRACTS"), $.call(get_service_contracts_variables, [vin, mileage], null)], null));
return $.call(parse_service_contracts, [data], null);
}
async_add_past_service(service?: PastServiceInput | UnsetType | null): Promise<PastServiceResult | null>;
/** Add a completed maintenance record to the account. */
async async_add_past_service(...__args: any[]): any {
let data;
let {"service": service} = $.bind(__args, ["service"], {"service": UNSET}, [], null, null);
/** Add a completed maintenance record to the account. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["AddPastService", $.attr(operations, "ADD_PAST_SERVICE"), $.call(add_past_service_variables, [service], null)], null));
return $.call(parse_add_past_service, [data], null);
}
async_update_past_service(service: UpdatePastServiceInput): Promise<PastServiceResult | null>;
/** Replace a completed maintenance record. */
async async_update_past_service(...__args: any[]): any {
let data;
let {"service": service} = $.bind(__args, ["service"], {}, [], null, null);
/** Replace a completed maintenance record. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdatePastService", $.attr(operations, "UPDATE_PAST_SERVICE"), $.call(update_past_service_variables, [service], null)], null));
return $.call(parse_update_past_service, [data], null);
}
async_get_parts_reminders(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Promise<VehiclePartsReminders | null>;
/** Return the vehicle's service-part catalog and configured reminders. */
async async_get_parts_reminders(...__args: any[]): any {
let data;
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Return the vehicle's service-part catalog and configured reminders. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["PartsReminders", $.attr(operations, "PARTS_REMINDERS"), $.call(parts_reminders_variables, [vin], Object.assign({}, {"unit": unit}))], null));
return $.call(parse_parts_reminders, [data], null);
}
async_create_parts_reminder(vin: string, reminder: CreatePartsReminderInput): Promise<PartsReminderMutationResult | null>;
/** Create a service-parts reminder for a vehicle. */
async async_create_parts_reminder(...__args: any[]): any {
let data;
let {"vin": vin, "reminder": reminder} = $.bind(__args, ["vin", "reminder"], {}, [], null, null);
/** Create a service-parts reminder for a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreatePartsReminder", $.attr(operations, "CREATE_PARTS_REMINDER"), $.call(create_parts_reminder_variables, [vin, reminder], null)], null));
return $.call(parse_create_parts_reminder, [data], null);
}
async_update_parts_reminder(vin: string, reminder: UpdatePartsReminderInput): Promise<PartsReminderMutationResult | null>;
/** Replace a service-parts reminder for a vehicle. */
async async_update_parts_reminder(...__args: any[]): any {
let data;
let {"vin": vin, "reminder": reminder} = $.bind(__args, ["vin", "reminder"], {}, [], null, null);
/** Replace a service-parts reminder for a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdatePartsReminder", $.attr(operations, "UPDATE_PARTS_REMINDER"), $.call(update_parts_reminder_variables, [vin, reminder], null)], null));
return $.call(parse_update_parts_reminder, [data], null);
}
async_reset_parts_reminder(vin: string, reminder: ResetPartsReminderInput): Promise<PartsReminderMutationResult | null>;
/** Reset a service-parts reminder schedule. */
async async_reset_parts_reminder(...__args: any[]): any {
let data;
let {"vin": vin, "reminder": reminder} = $.bind(__args, ["vin", "reminder"], {}, [], null, null);
/** Reset a service-parts reminder schedule. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ResetPartsReminder", $.attr(operations, "RESET_PARTS_REMINDER"), $.call(reset_parts_reminder_variables, [vin, reminder], null)], null));
return $.call(parse_reset_parts_reminder, [data], null);
}
async_delete_parts_reminder(vin: string, reminder_id: string): Promise<PartsReminderMutationResult | null>;
/** Delete a service-parts reminder from a vehicle. */
async async_delete_parts_reminder(...__args: any[]): any {
let data;
let {"vin": vin, "reminder_id": reminder_id} = $.bind(__args, ["vin", "reminder_id"], {}, [], null, null);
/** Delete a service-parts reminder from a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DeletePartsReminder", $.attr(operations, "DELETE_PARTS_REMINDER"), $.call(delete_parts_reminder_variables, [vin, reminder_id], null)], null));
return $.call(parse_delete_parts_reminder, [data], null);
}
async_get_collision_history(vin: string): Promise<ReadonlyArray<CollisionHistoryEntry | null> | null>;
/** Return collision reports attached to the vehicle account. */
async async_get_collision_history(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return collision reports attached to the vehicle account. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CollisionHistory", $.attr(operations, "COLLISION_HISTORY"), $.call(collision_history_variables, [vin], null)], null));
return $.call(parse_collision_history, [data], null);
}
async_get_collision_probe_data(vin: string): Promise<ReadonlyArray<CollisionProbeReading | null> | null>;
/** Return vehicle telemetry captured for a collision report. */
async async_get_collision_probe_data(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return vehicle telemetry captured for a collision report. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CollisionProbeData", $.attr(operations, "COLLISION_PROBE_DATA"), $.call(collision_probe_data_variables, [vin], null)], null));
return $.call(parse_collision_probe_data, [data], null);
}
}
$.classType(_VehicleDataClientMixin);
export interface _VehicleDataClientMixin extends _NissanClientBase {}
