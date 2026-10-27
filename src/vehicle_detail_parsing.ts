// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { BatteryStatus, BoundaryAlert, ClimateStatus, CurfewAlert, DoorsStatus, SpeedAlert, ValetAlert, VehicleStatus } from "./models";
export { BatteryStatus, BoundaryAlert, ClimateStatus, CurfewAlert, DoorsStatus, SpeedAlert, ValetAlert, VehicleStatus };

import { parse_vehicle_alerts, parse_vehicle_status } from "./parsing";
export { parse_vehicle_alerts, parse_vehicle_status };

import { parse_vehicle_recalls } from "./service_parsing";
export { parse_vehicle_recalls };

import { VehicleModelYear, VehicleNickname, VehicleStatusAndRecalls } from "./vehicle_detail_models";
export { VehicleModelYear, VehicleNickname, VehicleStatusAndRecalls };

export function parse_vehicle_battery_status(data: Record<string, unknown>, vin: string): BatteryStatus | null;
/** Parse the nullable battery fragment from VehicleBatteryStatus. */
export function parse_vehicle_battery_status(...__args: any[]): any {
let {"data": data, "vin": vin} = $.bind(__args, ["data", "vin"], {}, [], null, null);
/** Parse the nullable battery fragment from VehicleBatteryStatus. */
if ($.truth((($.call(_nullable_vehicle, [data], null) === null)))) {
return null;
}
return $.attr($.call(parse_vehicle_status, [data, vin], null), "battery");
}

export function parse_vehicle_boundary_alerts(data: Record<string, unknown>): ReadonlyArray<BoundaryAlert | null> | null;
/** Parse the nullable boundary-alert collection. */
export function parse_vehicle_boundary_alerts(...__args: any[]): any {
let alerts;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable boundary-alert collection. */
alerts = $.call(parse_vehicle_alerts, [data], null);
return ($.truth(((alerts !== null))) ? $.attr(alerts, "boundary_alerts") : null);
}

export function parse_vehicle_climate_status(data: Record<string, unknown>, vin: string): ClimateStatus | null;
/** Parse the nullable climate fragment from VehicleClimateStatus. */
export function parse_vehicle_climate_status(...__args: any[]): any {
let {"data": data, "vin": vin} = $.bind(__args, ["data", "vin"], {}, [], null, null);
/** Parse the nullable climate fragment from VehicleClimateStatus. */
if ($.truth((($.call(_nullable_vehicle, [data], null) === null)))) {
return null;
}
return $.attr($.call(parse_vehicle_status, [data, vin], null), "climate");
}

export function parse_vehicle_curfew_alerts(data: Record<string, unknown>): ReadonlyArray<CurfewAlert | null> | null;
/** Parse the nullable curfew-alert collection. */
export function parse_vehicle_curfew_alerts(...__args: any[]): any {
let alerts;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable curfew-alert collection. */
alerts = $.call(parse_vehicle_alerts, [data], null);
return ($.truth(((alerts !== null))) ? $.attr(alerts, "curfew_alerts") : null);
}

export function parse_vehicle_doors_status(data: Record<string, unknown>, vin: string): DoorsStatus | null;
/** Parse the nullable doors fragment from VehicleDoorsStatus. */
export function parse_vehicle_doors_status(...__args: any[]): any {
let {"data": data, "vin": vin} = $.bind(__args, ["data", "vin"], {}, [], null, null);
/** Parse the nullable doors fragment from VehicleDoorsStatus. */
if ($.truth((($.call(_nullable_vehicle, [data], null) === null)))) {
return null;
}
return $.attr($.call(parse_vehicle_status, [data, vin], null), "doors");
}

export function parse_vehicle_model_year(data: Record<string, unknown>): VehicleModelYear | null;
/** Parse the required model and year for a nullable vehicle. */
export function parse_vehicle_model_year(...__args: any[]): any {
let vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the required model and year for a nullable vehicle. */
vehicle = $.call(_nullable_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
return $.call(VehicleModelYear, [], Object.assign({}, {"vehicle_type": $.call(_required_string, [vehicle, "__typename", "vehicle.__typename"], null)}, {"model": $.call(_required_string, [vehicle, "model", "vehicle.model"], null)}, {"year": $.call(_required_string, [vehicle, "year", "vehicle.year"], null)}));
}

export function parse_vehicle_nickname(data: Record<string, unknown>): VehicleNickname | null;
/** Parse the nullable nickname for a nullable vehicle. */
export function parse_vehicle_nickname(...__args: any[]): any {
let vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable nickname for a nullable vehicle. */
vehicle = $.call(_nullable_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
return $.call(VehicleNickname, [], Object.assign({}, {"vehicle_type": $.call(_required_string, [vehicle, "__typename", "vehicle.__typename"], null)}, {"nickname": $.call(_required_nullable_string, [vehicle, "nickname", "vehicle.nickname"], null)}));
}

export function parse_vehicle_speed_alerts(data: Record<string, unknown>): ReadonlyArray<SpeedAlert | null> | null;
/** Parse the nullable speed-alert collection. */
export function parse_vehicle_speed_alerts(...__args: any[]): any {
let alerts;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable speed-alert collection. */
alerts = $.call(parse_vehicle_alerts, [data], null);
return ($.truth(((alerts !== null))) ? $.attr(alerts, "speed_alerts") : null);
}

export function parse_vehicle_core_status(data: Record<string, unknown>, vin: string): VehicleStatus | null;
/** Parse the nullable non-EV dynamic VehicleStatus response. */
export function parse_vehicle_core_status(...__args: any[]): any {
let {"data": data, "vin": vin} = $.bind(__args, ["data", "vin"], {}, [], null, null);
/** Parse the nullable non-EV dynamic VehicleStatus response. */
if ($.truth((($.call(_nullable_vehicle, [data], null) === null)))) {
return null;
}
return $.call(parse_vehicle_status, [data, vin], null);
}

export function parse_vehicle_status_and_recalls(data: Record<string, unknown>, vin: string): VehicleStatusAndRecalls | null;
/** Parse cached dynamic status and the non-null recall list. */
export function parse_vehicle_status_and_recalls(...__args: any[]): any {
let recalls;
let {"data": data, "vin": vin} = $.bind(__args, ["data", "vin"], {}, [], null, null);
/** Parse cached dynamic status and the non-null recall list. */
if ($.truth((($.call(_nullable_vehicle, [data], null) === null)))) {
return null;
}
recalls = $.call(parse_vehicle_recalls, [data], null);
if ($.truth(((recalls === null)))) {
throw $.call(ResponseError, ["vehicle.recalls is missing"], null);
}
return $.call(VehicleStatusAndRecalls, [], Object.assign({}, {"status": $.call(parse_vehicle_status, [data, vin], null)}, {"recalls": recalls}));
}

export function parse_vehicle_valet_alert(data: Record<string, unknown>): ValetAlert | null;
/** Parse the nullable valet-alert object. */
export function parse_vehicle_valet_alert(...__args: any[]): any {
let alerts;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable valet-alert object. */
alerts = $.call(parse_vehicle_alerts, [data], null);
return ($.truth(((alerts !== null))) ? $.attr(alerts, "valet_alert") : null);
}

export function _nullable_vehicle(data: Record<string, unknown>): Record<string, unknown> | null;
/** Translated upstream _nullable_vehicle. */
export function _nullable_vehicle(...__args: any[]): any {
let value;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
if ($.truth((!$.contains(data, "vehicle")))) {
throw $.call(ResponseError, ["vehicle is missing"], null);
}
value = $.call($.attr(data, "get"), ["vehicle"], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, ["vehicle is not an object"], null);
}
return value;
}

export function _required_string(value: Record<string, unknown>, field: string, path: string): string;
/** Translated upstream _required_string. */
export function _required_string(...__args: any[]): any {
let raw;
let {"value": value, "field": field, "path": path} = $.bind(__args, ["value", "field", "path"], {}, [], null, null);
raw = $.call($.attr(value, "get"), [field], null);
if ($.truth(!$.truth($.call($.isinstance, [raw, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return raw;
}

export function _required_nullable_string(value: Record<string, unknown>, field: string, path: string): string | null;
/** Translated upstream _required_nullable_string. */
export function _required_nullable_string(...__args: any[]): any {
let raw;
let {"value": value, "field": field, "path": path} = $.bind(__args, ["value", "field", "path"], {}, [], null, null);
raw = $.call($.attr(value, "get"), [field], null);
if ($.truth(((raw === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [raw, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return raw;
}
