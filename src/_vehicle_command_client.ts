// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { _charge_schedule_input, _climate_parameters_input, _climate_schedule_input, _optional_variables, _temperature_input } from "./_client_helpers";
export { _charge_schedule_input, _climate_parameters_input, _climate_schedule_input, _optional_variables, _temperature_input };

import { ChargeScheduleInput, ClimateScheduleInput, ClimateSettings, ServiceRequest, ServiceRequestKind } from "./models";
export { ChargeScheduleInput, ClimateScheduleInput, ClimateSettings, ServiceRequest, ServiceRequestKind };

/** Translated upstream _VehicleCommandClientMixin. */
export class _VehicleCommandClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _VehicleCommandClientMixin, __args); }
async_lock_doors(vin: string): Promise<ServiceRequest>;
/** Lock the vehicle doors. */
async async_lock_doors(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Lock the vehicle doors. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["DoorLock", $.attr(operations, "DOOR_LOCK"), "doorLock", vin, $.attr(ServiceRequestKind, "DOOR")], null));
}
async_unlock_doors(vin: string): Promise<ServiceRequest>;
/** Unlock the vehicle doors. */
async async_unlock_doors(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Unlock the vehicle doors. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["DoorUnlock", $.attr(operations, "DOOR_UNLOCK"), "doorUnlock", vin, $.attr(ServiceRequestKind, "DOOR")], null));
}
async_flash_lights(vin: string): Promise<ServiceRequest>;
/** Flash the vehicle lights. */
async async_flash_lights(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Flash the vehicle lights. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["FlashLights", $.attr(operations, "FLASH_LIGHTS"), "flashLights", vin, $.attr(ServiceRequestKind, "HORN_LIGHT")], null));
}
async_flash_lights_and_horn(vin: string): Promise<ServiceRequest>;
/** Flash the lights and sound the horn. */
async async_flash_lights_and_horn(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Flash the lights and sound the horn. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["FlashLightsHorn", $.attr(operations, "FLASH_LIGHTS_HORN"), "flashLightsHorn", vin, $.attr(ServiceRequestKind, "HORN_LIGHT")], null));
}
async_locate_vehicle(vin: string): Promise<ServiceRequest>;
/** Request a fresh vehicle location. */
async async_locate_vehicle(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Request a fresh vehicle location. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["LocateVehicle", $.attr(operations, "LOCATE_VEHICLE"), "locateVehicle", vin, $.attr(ServiceRequestKind, "LOCATION")], null));
}
async_start_engine(vin: string, options?: { climate?: ClimateSettings | null; set_as_default?: boolean | null }): Promise<ServiceRequest>;
/** Start the engine, optionally with a climate configuration. */
async async_start_engine(...__args: any[]): any {
let engine_climate;
let {"vin": vin, "climate": climate, "set_as_default": set_as_default} = $.bind(__args, ["vin"], {"climate": null, "set_as_default": null}, ["climate", "set_as_default"], null, null);
/** Start the engine, optionally with a climate configuration. */
engine_climate = null;
if ($.truth(((climate !== null)))) {
engine_climate = $.call(_optional_variables, [], Object.assign({}, {"temperature": $.call(_temperature_input, [climate], null)}, {"parameters": $.call(_climate_parameters_input, [$.attr(climate, "parameters")], null)}));
}
return (await $.call($.attr(this, "_async_service_request"), ["EngineStart", $.attr(operations, "ENGINE_START"), "engineStart", $.call(_optional_variables, [], Object.assign({}, {"vin": vin}, {"climate": engine_climate}, {"setAsDefault": set_as_default})), $.attr(ServiceRequestKind, "ENGINE")], null));
}
async_stop_engine(vin: string): Promise<ServiceRequest>;
/** Stop a remotely started engine. */
async async_stop_engine(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Stop a remotely started engine. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["EngineStop", $.attr(operations, "ENGINE_STOP"), "engineStop", vin, $.attr(ServiceRequestKind, "ENGINE")], null));
}
async_refresh_vehicle_status(vin: string): Promise<ServiceRequest>;
/** Ask the vehicle to publish fresh dynamic status. */
async async_refresh_vehicle_status(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Ask the vehicle to publish fresh dynamic status. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["RefreshVehicleStatus", $.attr(operations, "REFRESH_VEHICLE_STATUS"), "refreshVehicleStatus", vin, $.attr(ServiceRequestKind, "VEHICLE_STATUS")], null));
}
async_refresh_battery_status(vin: string): Promise<boolean>;
/** Ask the electric vehicle to refresh its battery status. */
async async_refresh_battery_status(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Ask the electric vehicle to refresh its battery status. */
return (await $.call($.attr(this, "_async_success_operation"), ["RefreshBatteryStatus", $.attr(operations, "REFRESH_BATTERY_STATUS"), "refreshBatteryStatus", Object.assign({}, {["vin"]: vin})], null));
}
async_refresh_climate_status(vin: string): Promise<boolean>;
/** Ask the vehicle to refresh its climate status. */
async async_refresh_climate_status(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Ask the vehicle to refresh its climate status. */
return (await $.call($.attr(this, "_async_success_operation"), ["RefreshClimateStatus", $.attr(operations, "REFRESH_CLIMATE_STATUS"), "refreshClimateStatus", Object.assign({}, {["vin"]: vin})], null));
}
async_wake_up_vehicle(vin: string): Promise<boolean>;
/** Wake the vehicle telematics unit. */
async async_wake_up_vehicle(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Wake the vehicle telematics unit. */
return (await $.call($.attr(this, "_async_success_operation"), ["WakeUpVehicle", $.attr(operations, "WAKE_UP_VEHICLE"), "wakeUp", Object.assign({}, {["vin"]: vin})], null));
}
async_take_photos_around_vehicle(vin: string): Promise<ServiceRequest>;
/** Request exterior camera photos on supported vehicles. */
async async_take_photos_around_vehicle(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Request exterior camera photos on supported vehicles. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["TakePhotosAroundVehicle", $.attr(operations, "TAKE_PHOTOS_AROUND_VEHICLE"), "takePhotosAroundVehicle", vin, $.attr(ServiceRequestKind, "PHOTO")], null));
}
async_create_charge_schedule(vin: string, schedule: ChargeScheduleInput): Promise<ServiceRequest>;
/** Create a recurring charge schedule. */
async async_create_charge_schedule(...__args: any[]): any {
let {"vin": vin, "schedule": schedule} = $.bind(__args, ["vin", "schedule"], {}, [], null, null);
/** Create a recurring charge schedule. */
return (await $.call($.attr(this, "_async_service_request"), ["CreateChargeSchedule", $.attr(operations, "CREATE_CHARGE_SCHEDULE"), "createChargeSchedule", Object.assign({}, {["vin"]: vin}, {["schedule"]: $.call(_charge_schedule_input, [schedule], null)}), $.attr(ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
}
async_update_charge_schedule(vin: string, schedule_id: string, schedule: ChargeScheduleInput): Promise<ServiceRequest>;
/** Replace a recurring charge schedule. */
async async_update_charge_schedule(...__args: any[]): any {
let schedule_input;
let {"vin": vin, "schedule_id": schedule_id, "schedule": schedule} = $.bind(__args, ["vin", "schedule_id", "schedule"], {}, [], null, null);
/** Replace a recurring charge schedule. */
schedule_input = Object.assign({}, {["id"]: schedule_id}, $.call(_charge_schedule_input, [schedule], null));
return (await $.call($.attr(this, "_async_service_request"), ["UpdateChargeSchedule", $.attr(operations, "UPDATE_CHARGE_SCHEDULE"), "updateChargeSchedule", Object.assign({}, {["vin"]: vin}, {["schedule"]: schedule_input}), $.attr(ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
}
async_delete_charge_schedule(vin: string, schedule_id: string): Promise<ServiceRequest>;
/** Delete a recurring charge schedule. */
async async_delete_charge_schedule(...__args: any[]): any {
let {"vin": vin, "schedule_id": schedule_id} = $.bind(__args, ["vin", "schedule_id"], {}, [], null, null);
/** Delete a recurring charge schedule. */
return (await $.call($.attr(this, "_async_service_request"), ["DeleteChargeSchedule", $.attr(operations, "DELETE_CHARGE_SCHEDULE"), "deleteChargeSchedule", Object.assign({}, {["vin"]: vin}, {["id"]: schedule_id}), $.attr(ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
}
async_toggle_charge_schedule(vin: string, schedule_id: string, options: { enabled: boolean }): Promise<ServiceRequest>;
/** Enable or disable a recurring charge schedule. */
async async_toggle_charge_schedule(...__args: any[]): any {
let {"vin": vin, "schedule_id": schedule_id, "enabled": enabled} = $.bind(__args, ["vin", "schedule_id"], {}, ["enabled"], null, null);
/** Enable or disable a recurring charge schedule. */
return (await $.call($.attr(this, "_async_service_request"), ["ToggleChargeSchedule", $.attr(operations, "TOGGLE_CHARGE_SCHEDULE"), "toggleChargeSchedule", Object.assign({}, {["vin"]: vin}, {["schedule"]: Object.assign({}, {["id"]: schedule_id}, {["enable"]: enabled})}), $.attr(ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
}
async_create_climate_schedule(vin: string, schedule: ClimateScheduleInput): Promise<ServiceRequest>;
/** Create a recurring climate schedule. */
async async_create_climate_schedule(...__args: any[]): any {
let {"vin": vin, "schedule": schedule} = $.bind(__args, ["vin", "schedule"], {}, [], null, null);
/** Create a recurring climate schedule. */
return (await $.call($.attr(this, "_async_service_request"), ["CreateClimateSchedule", $.attr(operations, "CREATE_CLIMATE_SCHEDULE"), "createClimateSchedule", $.call(_optional_variables, [], Object.assign({}, {"vin": vin}, {"schedule": $.call(_climate_schedule_input, [schedule], null)}, {"climateAccessories": $.call(_climate_parameters_input, [$.attr($.attr(schedule, "climate"), "parameters")], null)})), $.attr(ServiceRequestKind, "CLIMATE")], null));
}
async_update_climate_schedule(vin: string, schedule_id: string, schedule: ClimateScheduleInput): Promise<ServiceRequest>;
/** Replace a recurring climate schedule. */
async async_update_climate_schedule(...__args: any[]): any {
let schedule_input;
let {"vin": vin, "schedule_id": schedule_id, "schedule": schedule} = $.bind(__args, ["vin", "schedule_id", "schedule"], {}, [], null, null);
/** Replace a recurring climate schedule. */
schedule_input = Object.assign({}, {["id"]: schedule_id}, $.call(_climate_schedule_input, [schedule], null));
return (await $.call($.attr(this, "_async_service_request"), ["UpdateClimateSchedule", $.attr(operations, "UPDATE_CLIMATE_SCHEDULE"), "updateClimateSchedule", $.call(_optional_variables, [], Object.assign({}, {"vin": vin}, {"schedule": schedule_input}, {"climateAccessories": $.call(_climate_parameters_input, [$.attr($.attr(schedule, "climate"), "parameters")], null)})), $.attr(ServiceRequestKind, "CLIMATE")], null));
}
async_delete_climate_schedule(vin: string, schedule_id: string): Promise<ServiceRequest>;
/** Delete a recurring climate schedule. */
async async_delete_climate_schedule(...__args: any[]): any {
let {"vin": vin, "schedule_id": schedule_id} = $.bind(__args, ["vin", "schedule_id"], {}, [], null, null);
/** Delete a recurring climate schedule. */
return (await $.call($.attr(this, "_async_service_request"), ["DeleteClimateSchedule", $.attr(operations, "DELETE_CLIMATE_SCHEDULE"), "deleteClimateSchedule", Object.assign({}, {["vin"]: vin}, {["id"]: schedule_id}), $.attr(ServiceRequestKind, "CLIMATE")], null));
}
async_toggle_climate_schedule(vin: string, schedule_id: string, options: { enabled: boolean }): Promise<ServiceRequest>;
/** Enable or disable a recurring climate schedule. */
async async_toggle_climate_schedule(...__args: any[]): any {
let {"vin": vin, "schedule_id": schedule_id, "enabled": enabled} = $.bind(__args, ["vin", "schedule_id"], {}, ["enabled"], null, null);
/** Enable or disable a recurring climate schedule. */
return (await $.call($.attr(this, "_async_service_request"), ["ToggleClimateSchedule", $.attr(operations, "TOGGLE_CLIMATE_SCHEDULE"), "toggleClimateSchedule", Object.assign({}, {["vin"]: vin}, {["schedule"]: Object.assign({}, {["id"]: schedule_id}, {["enable"]: enabled})}), $.attr(ServiceRequestKind, "CLIMATE")], null));
}
}
$.classType(_VehicleCommandClientMixin);
export interface _VehicleCommandClientMixin extends _NissanClientBase {}
