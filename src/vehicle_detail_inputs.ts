// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const StrEnum = $.StrEnum;

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

import { DistanceUnit, SpeedUnit, TemperatureUnit } from "./models";
export { DistanceUnit, SpeedUnit, TemperatureUnit };

export function vehicle_battery_status_variables(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Record<string, unknown>;
/** Serialize the exact VehicleBatteryStatus variables. */
export function vehicle_battery_status_variables(...__args: any[]): any {
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Serialize the exact VehicleBatteryStatus variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"unit": $.call(_optional_enum, [unit], null)}));
}

export function vehicle_boundary_alerts_variables(vin: string, options?: { distance_unit?: DistanceUnit | UnsetType | null }): Record<string, unknown>;
/** Serialize the exact VehicleBoundaryAlerts variables. */
export function vehicle_boundary_alerts_variables(...__args: any[]): any {
let {"vin": vin, "distance_unit": distance_unit} = $.bind(__args, ["vin"], {"distance_unit": UNSET}, ["distance_unit"], null, null);
/** Serialize the exact VehicleBoundaryAlerts variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"distanceUnit": $.call(_optional_enum, [distance_unit], null)}));
}

export function vehicle_climate_status_variables(vin: string, temperature_unit: TemperatureUnit): Record<string, unknown>;
/** Serialize the required VehicleClimateStatus variables. */
export function vehicle_climate_status_variables(...__args: any[]): any {
let {"vin": vin, "temperature_unit": temperature_unit} = $.bind(__args, ["vin", "temperature_unit"], {}, [], null, null);
/** Serialize the required VehicleClimateStatus variables. */
return Object.assign({}, {["vin"]: vin}, {["temperatureUnit"]: $.call(serialize_enum, [temperature_unit], null)});
}

export function vehicle_curfew_alerts_variables(vin: string): Record<string, unknown>;
/** Serialize the required VehicleCurfewAlerts VIN. */
export function vehicle_curfew_alerts_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VehicleCurfewAlerts VIN. */
return Object.assign({}, {["vin"]: vin});
}

export function vehicle_doors_status_variables(vin: string): Record<string, unknown>;
/** Serialize the required VehicleDoorsStatus VIN. */
export function vehicle_doors_status_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VehicleDoorsStatus VIN. */
return Object.assign({}, {["vin"]: vin});
}

export function vehicle_model_year_variables(vin: string): Record<string, unknown>;
/** Serialize the required VehicleModelYear VIN. */
export function vehicle_model_year_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VehicleModelYear VIN. */
return Object.assign({}, {["vin"]: vin});
}

export function vehicle_nickname_variables(vin: string): Record<string, unknown>;
/** Serialize the required VehicleNickname VIN. */
export function vehicle_nickname_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VehicleNickname VIN. */
return Object.assign({}, {["vin"]: vin});
}

export function vehicle_speed_alerts_variables(vin: string, options?: { speed_unit?: SpeedUnit | UnsetType | null }): Record<string, unknown>;
/** Serialize the exact VehicleSpeedAlerts variables. */
export function vehicle_speed_alerts_variables(...__args: any[]): any {
let {"vin": vin, "speed_unit": speed_unit} = $.bind(__args, ["vin"], {"speed_unit": UNSET}, ["speed_unit"], null, null);
/** Serialize the exact VehicleSpeedAlerts variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"speedUnit": $.call(_optional_enum, [speed_unit], null)}));
}

export function vehicle_status_variables(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Record<string, unknown>;
/** Serialize the exact VehicleStatus variables. */
export function vehicle_status_variables(...__args: any[]): any {
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Serialize the exact VehicleStatus variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"unit": $.call(_optional_enum, [unit], null)}));
}

export function vehicle_status_and_recalls_variables(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Record<string, unknown>;
/** Serialize the exact VehicleStatusAndRecalls variables. */
export function vehicle_status_and_recalls_variables(...__args: any[]): any {
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Serialize the exact VehicleStatusAndRecalls variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"unit": $.call(_optional_enum, [unit], null)}));
}

export function vehicle_valet_alerts_variables(vin: string, options?: { distance_unit?: DistanceUnit | UnsetType | null }): Record<string, unknown>;
/** Serialize the exact VehicleValetAlerts variables. */
export function vehicle_valet_alerts_variables(...__args: any[]): any {
let {"vin": vin, "distance_unit": distance_unit} = $.bind(__args, ["vin"], {"distance_unit": UNSET}, ["distance_unit"], null, null);
/** Serialize the exact VehicleValetAlerts variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"distanceUnit": $.call(_optional_enum, [distance_unit], null)}));
}

export function _optional_enum(value: $.EnumValue | UnsetType | null): unknown;
/** Translated upstream _optional_enum. */
export function _optional_enum(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call(serialize_enum, [value], null);
}
