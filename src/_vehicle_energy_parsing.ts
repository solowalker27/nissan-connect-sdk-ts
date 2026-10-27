// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _list, _object, _optional_datetime, _optional_float, _optional_int, _optional_list, _optional_object, _optional_str, _optional_v2l_state, _parse_week_days, _required_datetime, _required_str } from "./_parsing_values";
export { _list, _object, _optional_datetime, _optional_float, _optional_int, _optional_list, _optional_object, _optional_str, _optional_v2l_state, _parse_week_days, _required_datetime, _required_str };

import { _parse_climate_parameters, _parse_temperature } from "./_vehicle_response_parsing";
export { _parse_climate_parameters, _parse_temperature };

import { ChargeConfig, ChargeHistorySummary, ChargeSchedule, ChargeSession, ClimateDefaults, ClimateSchedule, DelayedClimateSchedule, V2LStatus, VehicleChargeHistory, VehicleClimateSchedules } from "./models";
export { ChargeConfig, ChargeHistorySummary, ChargeSchedule, ChargeSession, ClimateDefaults, ClimateSchedule, DelayedClimateSchedule, V2LStatus, VehicleChargeHistory, VehicleClimateSchedules };

export function parse_charge_schedules(data: Record<string, unknown>): ReadonlyArray<ChargeSchedule>;
/** Parse charge schedules. */
export function parse_charge_schedules(...__args: any[]): any {
let index, item, schedules, value, values, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse charge schedules. */
vehicle = $.call(_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
values = $.or(() => $.call(_optional_list, [$.call($.attr(vehicle, "get"), ["chargeSchedules"], null), "vehicle.chargeSchedules"], null), () => []);
schedules = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
item = $.call(_object, [value, ("vehicle.chargeSchedules[" + $.str(index) + "]")], null);
$.call($.attr(schedules, "append"), [$.call(ChargeSchedule, [], Object.assign({}, {"id": $.call(_required_str, [$.call($.attr(item, "get"), ["id"], null), "chargeSchedule.id"], null)}, {"state": $.call(_optional_str, [$.call($.attr(item, "get"), ["state"], null)], null)}, {"start_date_time": $.call(_required_datetime, [$.call($.attr(item, "get"), ["startDateTime"], null), "chargeSchedule.startDateTime"], null)}, {"duration": $.call(_required_str, [$.call($.attr(item, "get"), ["duration"], null), "chargeSchedule.duration"], null)}, {"week_days": $.call(_parse_week_days, [$.call($.attr(item, "get"), ["weekDays"], null), "chargeSchedule.weekDays"], null)}))], null);
}
return $.call($.tuple, [schedules], null);
}

export function parse_charge_config(data: Record<string, unknown>): ChargeConfig | null;
/** Parse configured charging limits, if supported by the vehicle. */
export function parse_charge_config(...__args: any[]): any {
let charge, config, limits, notification, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse configured charging limits, if supported by the vehicle. */
vehicle = $.call(_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
config = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["chargeConfig"], null), "vehicle.chargeConfig"], null);
if ($.truth(((config === null)))) {
return null;
}
limits = $.call(_optional_object, [$.call($.attr(config, "get"), ["limits"], null), "vehicle.chargeConfig.limits"], null);
if ($.truth(((limits === null)))) {
return $.call(ChargeConfig, [null, null], null);
}
charge = $.call(_optional_object, [$.call($.attr(limits, "get"), ["charge"], null), "vehicle.chargeConfig.limits.charge"], null);
notification = $.call(_optional_object, [$.call($.attr(limits, "get"), ["notification"], null), "vehicle.chargeConfig.limits.notification"], null);
return $.call(ChargeConfig, [], Object.assign({}, {"charge_limit_percent": ($.truth(((charge !== null))) ? $.call(_optional_int, [$.call($.attr(charge, "get"), ["percent"], null)], null) : null)}, {"notification_threshold_percent": ($.truth(((notification !== null))) ? $.call(_optional_int, [$.call($.attr(notification, "get"), ["percent"], null)], null) : null)}));
}

export function parse_v2l_status(data: Record<string, unknown>): V2LStatus | null;
/** Parse V2L state and battery reserve percentages. */
export function parse_v2l_status(...__args: any[]): any {
let status, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse V2L state and battery reserve percentages. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
status = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["v2lStatus"], null), "vehicle.v2lStatus"], null);
if ($.truth(((status === null)))) {
return null;
}
return $.call(V2LStatus, [], Object.assign({}, {"state": $.call(_optional_v2l_state, [$.call($.attr(status, "get"), ["state"], null)], null)}, {"charge_limit_percent": $.call(_optional_float, [$.call($.attr(status, "get"), ["chargeLimitationLevel"], null)], null)}, {"minimum_charge_limit_percent": $.call(_optional_float, [$.call($.attr(status, "get"), ["chargeMinimumLimitationLevel"], null)], null)}));
}

export function parse_vehicle_charge_history(data: Record<string, unknown>): VehicleChargeHistory | null;
/** Parse charging sessions and aggregate summaries, if supported. */
export function parse_vehicle_charge_history(...__args: any[]): any {
let charge_values, charges, history, index, item, summaries, summary_values, value, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse charging sessions and aggregate summaries, if supported. */
vehicle = $.call(_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
history = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["chargeHistory"], null), "vehicle.chargeHistory"], null);
if ($.truth(((history === null)))) {
return null;
}
charge_values = $.call(_list, [$.call($.attr(history, "get"), ["charges"], null), "vehicle.chargeHistory.charges"], null);
charges = [];
for ([index, value] of $.iterable($.call($.enumerate, [charge_values], null))) {
item = $.call(_object, [value, ("vehicle.chargeHistory.charges[" + $.str(index) + "]")], null);
$.call($.attr(charges, "append"), [$.call(ChargeSession, [], Object.assign({}, {"start": $.call(_optional_datetime, [$.call($.attr(item, "get"), ["start"], null)], null)}, {"end": $.call(_optional_datetime, [$.call($.attr(item, "get"), ["end"], null)], null)}, {"duration": $.call(_optional_str, [$.call($.attr(item, "get"), ["duration"], null)], null)}, {"recovered_energy_kwh": $.call(_optional_float, [$.call($.attr(item, "get"), ["recoveredEnergy"], null)], null)}))], null);
}
summary_values = $.call(_list, [$.call($.attr(history, "get"), ["chargeSummaries"], null), "vehicle.chargeHistory.chargeSummaries"], null);
summaries = [];
for ([index, value] of $.iterable($.call($.enumerate, [summary_values], null))) {
item = $.call(_object, [value, ("vehicle.chargeHistory.chargeSummaries[" + $.str(index) + "]")], null);
$.call($.attr(summaries, "append"), [$.call(ChargeHistorySummary, [], Object.assign({}, {"day": $.call(_optional_int, [$.call($.attr(item, "get"), ["day"], null)], null)}, {"month": $.call(_optional_int, [$.call($.attr(item, "get"), ["month"], null)], null)}, {"year": $.call(_optional_int, [$.call($.attr(item, "get"), ["year"], null)], null)}, {"number_of_charge_sessions": $.call(_optional_int, [$.call($.attr(item, "get"), ["numberOfChargeSessions"], null)], null)}, {"total_energy_recovered_kwh": $.call(_optional_float, [$.call($.attr(item, "get"), ["totalEnergyRecovered"], null)], null)}, {"total_duration_minutes": $.call(_optional_int, [$.call($.attr(item, "get"), ["totalDuration"], null)], null)}, {"number_of_errors": $.call(_optional_int, [$.call($.attr(item, "get"), ["numberOfErrors"], null)], null)}, {"user_id": $.call(_optional_str, [$.call($.attr(item, "get"), ["userId"], null)], null)}, {"role_type": $.call(_optional_str, [$.call($.attr(item, "get"), ["roleType"], null)], null)}))], null);
}
return $.call(VehicleChargeHistory, [$.call($.tuple, [charges], null), $.call($.tuple, [summaries], null)], null);
}

export function parse_climate_schedules(data: Record<string, unknown>): VehicleClimateSchedules;
/** Parse recurring and one-time climate schedules and their accessories. */
export function parse_climate_schedules(...__args: any[]): any {
let accessories, delayed, index, item, schedules, temperature, value, values, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse recurring and one-time climate schedules and their accessories. */
vehicle = $.call(_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
values = $.or(() => $.call(_optional_list, [$.call($.attr(vehicle, "get"), ["climateSchedules"], null), "vehicle.climateSchedules"], null), () => []);
schedules = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
item = $.call(_object, [value, ("vehicle.climateSchedules[" + $.str(index) + "]")], null);
temperature = $.call(_object, [$.call($.attr(item, "get"), ["temperature"], null), "climateSchedule.temperature"], null);
$.call($.attr(schedules, "append"), [$.call(ClimateSchedule, [], Object.assign({}, {"id": $.call(_required_str, [$.call($.attr(item, "get"), ["id"], null), "climateSchedule.id"], null)}, {"state": $.call(_optional_str, [$.call($.attr(item, "get"), ["state"], null)], null)}, {"start_date_time": $.call(_required_datetime, [$.call($.attr(item, "get"), ["startDateTime"], null), "climateSchedule.startDateTime"], null)}, {"week_days": $.call(_parse_week_days, [$.call($.attr(item, "get"), ["weekDays"], null), "climateSchedule.weekDays"], null)}, {"temperature": $.call(_parse_temperature, [temperature], null)}))], null);
}
accessories = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["climateSchedulesAccessories"], null), "vehicle.climateSchedulesAccessories"], null);
delayed = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["delayedClimateSchedule"], null), "vehicle.delayedClimateSchedule"], null);
return $.call(VehicleClimateSchedules, [], Object.assign({}, {"schedules": $.call($.tuple, [schedules], null)}, {"accessories": ($.truth(((accessories !== null))) ? $.call(_parse_climate_parameters, [accessories], null) : null)}, {"delayed_schedule": ($.truth(((delayed !== null))) ? $.call(DelayedClimateSchedule, [], Object.assign({}, {"start_date_time": $.call(_optional_datetime, [$.call($.attr(delayed, "get"), ["startDateTime"], null)], null)})) : null)}));
}

export function parse_climate_defaults(data: Record<string, unknown>): ClimateDefaults | null;
/** Parse saved climate defaults, if supported by the vehicle. */
export function parse_climate_defaults(...__args: any[]): any {
let climate, defaults, parameters, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse saved climate defaults, if supported by the vehicle. */
vehicle = $.call(_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
defaults = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["climateDefaults"], null), "vehicle.climateDefaults"], null);
if ($.truth(((defaults === null)))) {
return null;
}
climate = $.call(_optional_object, [$.call($.attr(defaults, "get"), ["climate"], null), "vehicle.climateDefaults.climate"], null);
parameters = $.call(_optional_object, [$.call($.attr(defaults, "get"), ["parameters"], null), "vehicle.climateDefaults.parameters"], null);
return $.call(ClimateDefaults, [], Object.assign({}, {"climate": ($.truth(((climate !== null))) ? $.call(_parse_temperature, [climate], null) : null)}, {"parameters": ($.truth(((parameters !== null))) ? $.call(_parse_climate_parameters, [parameters], null) : null)}));
}
