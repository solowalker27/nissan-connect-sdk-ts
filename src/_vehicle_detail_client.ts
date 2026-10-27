// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { UNSET, UnsetType, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, serialize_enum };

import { BatteryStatus, BoundaryAlert, ClimateStatus, CurfewAlert, DistanceUnit, DoorsStatus, SpeedAlert, SpeedUnit, TemperatureUnit, ValetAlert, VehicleStatus } from "./models";
export { BatteryStatus, BoundaryAlert, ClimateStatus, CurfewAlert, DistanceUnit, DoorsStatus, SpeedAlert, SpeedUnit, TemperatureUnit, ValetAlert, VehicleStatus };

import { parse_vehicle_status } from "./parsing";
export { parse_vehicle_status };

import { vehicle_battery_status_variables, vehicle_boundary_alerts_variables, vehicle_climate_status_variables, vehicle_curfew_alerts_variables, vehicle_doors_status_variables, vehicle_model_year_variables, vehicle_nickname_variables, vehicle_speed_alerts_variables, vehicle_status_and_recalls_variables, vehicle_status_variables, vehicle_valet_alerts_variables } from "./vehicle_detail_inputs";
export { vehicle_battery_status_variables, vehicle_boundary_alerts_variables, vehicle_climate_status_variables, vehicle_curfew_alerts_variables, vehicle_doors_status_variables, vehicle_model_year_variables, vehicle_nickname_variables, vehicle_speed_alerts_variables, vehicle_status_and_recalls_variables, vehicle_status_variables, vehicle_valet_alerts_variables };

import { VehicleModelYear, VehicleNickname, VehicleStatusAndRecalls } from "./vehicle_detail_models";
export { VehicleModelYear, VehicleNickname, VehicleStatusAndRecalls };

import { parse_vehicle_battery_status, parse_vehicle_boundary_alerts, parse_vehicle_climate_status, parse_vehicle_core_status, parse_vehicle_curfew_alerts, parse_vehicle_doors_status, parse_vehicle_model_year, parse_vehicle_nickname, parse_vehicle_speed_alerts, parse_vehicle_status_and_recalls, parse_vehicle_valet_alert } from "./vehicle_detail_parsing";
export { parse_vehicle_battery_status, parse_vehicle_boundary_alerts, parse_vehicle_climate_status, parse_vehicle_core_status, parse_vehicle_curfew_alerts, parse_vehicle_doors_status, parse_vehicle_model_year, parse_vehicle_nickname, parse_vehicle_speed_alerts, parse_vehicle_status_and_recalls, parse_vehicle_valet_alert };

/** Translated upstream _VehicleDetailClientMixin. */
export class _VehicleDetailClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _VehicleDetailClientMixin, __args); }
async_get_vehicle_status(vin: string, options?: { distance_unit?: DistanceUnit; temperature_unit?: TemperatureUnit }): Promise<VehicleStatus>;
/** Return cached dynamic status without waking the vehicle. */
async async_get_vehicle_status(...__args: any[]): any {
let data;
let {"vin": vin, "distance_unit": distance_unit, "temperature_unit": temperature_unit} = $.bind(__args, ["vin"], {"distance_unit": $.attr(DistanceUnit, "MILE"), "temperature_unit": $.attr(TemperatureUnit, "FAHRENHEIT")}, ["distance_unit", "temperature_unit"], null, null);
/** Return cached dynamic status without waking the vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleDynamicData", $.attr(operations, "VEHICLE_DYNAMIC_DATA"), Object.assign({}, {["vin"]: vin}, {["unit"]: $.call(serialize_enum, [distance_unit], null)}, {["temperatureUnit"]: $.call(serialize_enum, [temperature_unit], null)})], null));
return $.call(parse_vehicle_status, [data, vin], null);
}
async_get_vehicle_battery_status(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Promise<BatteryStatus | null>;
/** Return the upstream service's standalone cached battery-status response. */
async async_get_vehicle_battery_status(...__args: any[]): any {
let data;
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Return the upstream service's standalone cached battery-status response. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleBatteryStatus", $.attr(operations, "VEHICLE_BATTERY_STATUS"), $.call(vehicle_battery_status_variables, [vin], Object.assign({}, {"unit": unit}))], null));
return $.call(parse_vehicle_battery_status, [data, vin], null);
}
async_get_vehicle_boundary_alerts(vin: string, options?: { distance_unit?: DistanceUnit | UnsetType | null }): Promise<ReadonlyArray<BoundaryAlert | null> | null>;
/** Return the upstream service's standalone boundary-alert collection. */
async async_get_vehicle_boundary_alerts(...__args: any[]): any {
let data;
let {"vin": vin, "distance_unit": distance_unit} = $.bind(__args, ["vin"], {"distance_unit": UNSET}, ["distance_unit"], null, null);
/** Return the upstream service's standalone boundary-alert collection. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleBoundaryAlerts", $.attr(operations, "VEHICLE_BOUNDARY_ALERTS"), $.call(vehicle_boundary_alerts_variables, [vin], Object.assign({}, {"distance_unit": distance_unit}))], null));
return $.call(parse_vehicle_boundary_alerts, [data], null);
}
async_get_vehicle_climate_status(vin: string, temperature_unit: TemperatureUnit): Promise<ClimateStatus | null>;
/** Return the upstream service's standalone cached climate-status response. */
async async_get_vehicle_climate_status(...__args: any[]): any {
let data;
let {"vin": vin, "temperature_unit": temperature_unit} = $.bind(__args, ["vin", "temperature_unit"], {}, [], null, null);
/** Return the upstream service's standalone cached climate-status response. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleClimateStatus", $.attr(operations, "VEHICLE_CLIMATE_STATUS"), $.call(vehicle_climate_status_variables, [vin, temperature_unit], null)], null));
return $.call(parse_vehicle_climate_status, [data, vin], null);
}
async_get_vehicle_curfew_alerts(vin: string): Promise<ReadonlyArray<CurfewAlert | null> | null>;
/** Return the upstream service's standalone curfew-alert collection. */
async async_get_vehicle_curfew_alerts(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the upstream service's standalone curfew-alert collection. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleCurfewAlerts", $.attr(operations, "VEHICLE_CURFEW_ALERTS"), $.call(vehicle_curfew_alerts_variables, [vin], null)], null));
return $.call(parse_vehicle_curfew_alerts, [data], null);
}
async_get_vehicle_doors_status(vin: string): Promise<DoorsStatus | null>;
/** Return the upstream service's standalone cached doors-status response. */
async async_get_vehicle_doors_status(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the upstream service's standalone cached doors-status response. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleDoorsStatus", $.attr(operations, "VEHICLE_DOORS_STATUS"), $.call(vehicle_doors_status_variables, [vin], null)], null));
return $.call(parse_vehicle_doors_status, [data, vin], null);
}
async_get_vehicle_model_year(vin: string): Promise<VehicleModelYear | null>;
/** Return the standalone required model and year fields for a vehicle. */
async async_get_vehicle_model_year(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the standalone required model and year fields for a vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleModelYear", $.attr(operations, "VEHICLE_MODEL_YEAR"), $.call(vehicle_model_year_variables, [vin], null)], null));
return $.call(parse_vehicle_model_year, [data], null);
}
async_get_vehicle_nickname(vin: string): Promise<VehicleNickname | null>;
/** Return the standalone nullable nickname response for a vehicle. */
async async_get_vehicle_nickname(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the standalone nullable nickname response for a vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleNickname", $.attr(operations, "VEHICLE_NICKNAME"), $.call(vehicle_nickname_variables, [vin], null)], null));
return $.call(parse_vehicle_nickname, [data], null);
}
async_get_vehicle_speed_alerts(vin: string, options?: { speed_unit?: SpeedUnit | UnsetType | null }): Promise<ReadonlyArray<SpeedAlert | null> | null>;
/** Return the upstream service's standalone speed-alert collection. */
async async_get_vehicle_speed_alerts(...__args: any[]): any {
let data;
let {"vin": vin, "speed_unit": speed_unit} = $.bind(__args, ["vin"], {"speed_unit": UNSET}, ["speed_unit"], null, null);
/** Return the upstream service's standalone speed-alert collection. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleSpeedAlerts", $.attr(operations, "VEHICLE_SPEED_ALERTS"), $.call(vehicle_speed_alerts_variables, [vin], Object.assign({}, {"speed_unit": speed_unit}))], null));
return $.call(parse_vehicle_speed_alerts, [data], null);
}
async_get_vehicle_core_status(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Promise<VehicleStatus | null>;
/** Return the narrower non-EV VehicleStatus operation from the upstream service. */
async async_get_vehicle_core_status(...__args: any[]): any {
let data;
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Return the narrower non-EV VehicleStatus operation from the upstream service. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleStatus", $.attr(operations, "VEHICLE_STATUS"), $.call(vehicle_status_variables, [vin], Object.assign({}, {"unit": unit}))], null));
return $.call(parse_vehicle_core_status, [data, vin], null);
}
async_get_vehicle_status_and_recalls(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Promise<VehicleStatusAndRecalls | null>;
/** Return the upstream service's combined cached core status and recalls response. */
async async_get_vehicle_status_and_recalls(...__args: any[]): any {
let data;
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Return the upstream service's combined cached core status and recalls response. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleStatusAndRecalls", $.attr(operations, "VEHICLE_STATUS_AND_RECALLS"), $.call(vehicle_status_and_recalls_variables, [vin], Object.assign({}, {"unit": unit}))], null));
return $.call(parse_vehicle_status_and_recalls, [data, vin], null);
}
async_get_vehicle_valet_alert(vin: string, options?: { distance_unit?: DistanceUnit | UnsetType | null }): Promise<ValetAlert | null>;
/** Return the upstream service's standalone valet-alert response. */
async async_get_vehicle_valet_alert(...__args: any[]): any {
let data;
let {"vin": vin, "distance_unit": distance_unit} = $.bind(__args, ["vin"], {"distance_unit": UNSET}, ["distance_unit"], null, null);
/** Return the upstream service's standalone valet-alert response. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleValetAlerts", $.attr(operations, "VEHICLE_VALET_ALERTS"), $.call(vehicle_valet_alerts_variables, [vin], Object.assign({}, {"distance_unit": distance_unit}))], null));
return $.call(parse_vehicle_valet_alert, [data], null);
}
}
$.classType(_VehicleDetailClientMixin);
export interface _VehicleDetailClientMixin extends _NissanClientBase {}
