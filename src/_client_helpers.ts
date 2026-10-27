// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { serialize_enum } from "./graphql_input";
export { serialize_enum };

import { ChargeScheduleInput, ClimateParameters, ClimateScheduleInput, ClimateSettings, ServiceRequestKind, ServiceRequestResult, ServiceRequestStatus } from "./models";
export { ChargeScheduleInput, ClimateParameters, ClimateScheduleInput, ClimateSettings, ServiceRequestKind, ServiceRequestResult, ServiceRequestStatus };

import { NavigationDataSource } from "./navigation_inputs";
export { NavigationDataSource };

export function _start_climate_input(climate: ClimateSettings): Record<string, unknown>;
/** Translated upstream _start_climate_input. */
export function _start_climate_input(...__args: any[]): any {
let {"climate": climate} = $.bind(__args, ["climate"], {}, [], null, null);
return Object.assign({}, {["unit"]: $.call(serialize_enum, [$.attr(climate, "unit")], null)}, {["temperatureValue"]: $.attr(climate, "temperature")});
}

export function _temperature_input(climate: ClimateSettings): Record<string, unknown>;
/** Translated upstream _temperature_input. */
export function _temperature_input(...__args: any[]): any {
let {"climate": climate} = $.bind(__args, ["climate"], {}, [], null, null);
return Object.assign({}, {["value"]: $.attr(climate, "temperature")}, {["unit"]: $.call(serialize_enum, [$.attr(climate, "unit")], null)});
}

export function _climate_parameters_input(parameters: ClimateParameters | null): Record<string, unknown> | null;
/** Translated upstream _climate_parameters_input. */
export function _climate_parameters_input(...__args: any[]): any {
let seats, seats_input;
let {"parameters": parameters} = $.bind(__args, ["parameters"], {}, [], null, null);
if ($.truth(((parameters === null)))) {
return null;
}
seats = $.attr(parameters, "seats");
seats_input = null;
if ($.truth(((seats !== null)))) {
seats_input = $.call(_optional_variables, [], Object.assign({}, {"frontDriverState": $.call(_enum_value, [$.attr(seats, "front_driver")], null)}, {"frontPassengerState": $.call(_enum_value, [$.attr(seats, "front_passenger")], null)}, {"rearLeftPassengerState": $.call(_enum_value, [$.attr(seats, "rear_left")], null)}, {"rearRightPassengerState": $.call(_enum_value, [$.attr(seats, "rear_right")], null)}, {"rearCenterPassengerState": $.call(_enum_value, [$.attr(seats, "rear_center")], null)}, {"thirdLeftState": $.call(_enum_value, [$.attr(seats, "third_left")], null)}, {"thirdRightState": $.call(_enum_value, [$.attr(seats, "third_right")], null)}));
}
return $.call(_optional_variables, [], Object.assign({}, {"seatsClimate": seats_input}, {"steeringWheelHeaterState": $.call(_on_off, [$.attr(parameters, "steering_wheel_heater")], null)}, {"defrostAndDeicerState": $.call(_on_off, [$.attr(parameters, "defrost_and_deicer")], null)}));
}

export function _charge_schedule_input(schedule: ChargeScheduleInput): Record<string, unknown>;
/** Translated upstream _charge_schedule_input. */
export function _charge_schedule_input(...__args: any[]): any {
let day;
let {"schedule": schedule} = $.bind(__args, ["schedule"], {}, [], null, null);
return Object.assign({}, {["startDateTime"]: $.call(_date_time_input, [$.attr(schedule, "start_date_time")], null)}, {["duration"]: $.attr(schedule, "duration")}, {["weekDays"]: (() => { const __out: any = []; for (const day of $.iterable($.attr(schedule, "week_days"))) { __out.push($.call(serialize_enum, [day], null)); } return __out; })()});
}

export function _climate_schedule_input(schedule: ClimateScheduleInput): Record<string, unknown>;
/** Translated upstream _climate_schedule_input. */
export function _climate_schedule_input(...__args: any[]): any {
let day;
let {"schedule": schedule} = $.bind(__args, ["schedule"], {}, [], null, null);
return Object.assign({}, {["startDateTime"]: $.call(_date_time_input, [$.attr(schedule, "start_date_time")], null)}, {["weekDays"]: (() => { const __out: any = []; for (const day of $.iterable($.attr(schedule, "week_days"))) { __out.push($.call(serialize_enum, [day], null)); } return __out; })()}, {["temperature"]: $.call(_temperature_input, [$.attr(schedule, "climate")], null)});
}

export function _date_time_input(value: $.DateValue): string;
/** Translated upstream _date_time_input. */
export function _date_time_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => (($.attr(value, "tzinfo") === null)), () => (($.call($.attr(value, "utcoffset"), [], null) === null))))) {
throw $.call($.ValueError, ["Nissan date-time inputs must include a UTC offset"], null);
}
return $.call($.attr(value, "isoformat"), [], null);
}

export function _enum_value(value: $.EnumValue | null): string | null;
/** Translated upstream _enum_value. */
export function _enum_value(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return ($.truth(((value !== null))) ? $.call(serialize_enum, [value], null) : null);
}

export function _on_off(value: boolean | null): string | null;
/** Translated upstream _on_off. */
export function _on_off(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return ($.truth(value) ? "ON" : "OFF");
}

export function _optional_variables(): Record<string, unknown>;
/** Translated upstream _optional_variables. */
export function _optional_variables(...__args: any[]): any {
let key, value;
let {"values": values} = $.bind(__args, [], {}, [], null, "values");
return (() => { const __out: any = {}; for (const [key, value] of $.iterable($.call($.attr(values, "items"), [], null))) { if ($.truth(((value !== null)))) { __out[key] = value; } } return __out; })();
}

export function _validate_positive_integer(value: number, name: string): null;
/** Translated upstream _validate_positive_integer. */
export function _validate_positive_integer(...__args: any[]): any {
let {"value": value, "name": name} = $.bind(__args, ["value", "name"], {}, [], null, null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.int], null)), () => $.call($.isinstance, [value, $.bool], null), () => ((value <= 0))))) {
throw $.call($.ValueError, [($.str(name) + " must be a positive integer")], null);
}
}

export function _response_object(data: Record<string, unknown>, root_field: string): Record<string, unknown>;
/** Translated upstream _response_object. */
export function _response_object(...__args: any[]): any {
let result;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
result = $.call($.attr(data, "get"), [root_field], null);
if ($.truth(!$.truth($.call($.isinstance, [result, Mapping], null)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing from the Nissan response")], null);
}
return result;
}

export function _success(data: Record<string, unknown>, root_field: string): boolean;
/** Translated upstream _success. */
export function _success(...__args: any[]): any {
let message, result, success;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
result = $.call(_response_object, [data, root_field], null);
success = $.call($.attr(result, "get"), ["success"], null);
if ($.truth($.call($.isinstance, [success, $.bool], null))) {
return success;
}
message = $.call($.attr(result, "get"), ["message"], null);
if ($.truth($.and(() => $.call($.isinstance, [message, $.str], null), () => message))) {
throw $.call(ResponseError, [message], null);
}
throw $.call(ResponseError, [($.str(root_field) + " did not return a success value")], null);
}

export function _nullable_success(data: Record<string, unknown>, root_field: string): boolean;
/** Translated upstream _nullable_success. */
export function _nullable_success(...__args: any[]): any {
let message, raw_result, result, success;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
raw_result = $.call($.attr(data, "get"), [root_field], null);
if ($.truth(((raw_result === null)))) {
return false;
}
if ($.truth(!$.truth($.call($.isinstance, [raw_result, Mapping], null)))) {
throw $.call(ResponseError, [($.str(root_field) + " is not an object")], null);
}
result = raw_result;
success = $.call($.attr(result, "get"), ["success"], null);
if ($.truth($.call($.isinstance, [success, $.bool], null))) {
return success;
}
message = $.call($.attr(result, "get"), ["message"], null);
if ($.truth($.and(() => $.call($.isinstance, [message, $.str], null), () => message))) {
throw $.call(ResponseError, [message], null);
}
return false;
}

export function _navigation_headers(data_source: NavigationDataSource | null): Record<string, string> | null;
/** Translated upstream _navigation_headers. */
export function _navigation_headers(...__args: any[]): any {
let {"data_source": data_source} = $.bind(__args, ["data_source"], {}, [], null, null);
if ($.truth(((data_source === null)))) {
return null;
}
return Object.assign({}, {["x-tsp-datasource"]: $.call(serialize_enum, [data_source], null)});
}

export function _is_terminal_service_request(kind: ServiceRequestKind, result: ServiceRequestResult): boolean;
/** Translated upstream _is_terminal_service_request. */
export function _is_terminal_service_request(...__args: any[]): any {
let {"kind": kind, "result": result} = $.bind(__args, ["kind", "result"], {}, [], null, null);
if ($.truth(($.contains(new Set([$.attr(ServiceRequestKind, "ROUTE"), $.attr(ServiceRequestKind, "T_JUNCTION")]), kind)))) {
return ($.contains(new Set([$.attr(ServiceRequestStatus, "SUCCESS"), $.attr(ServiceRequestStatus, "FAILED")]), $.attr(result, "status")));
}
return $.attr(result, "is_terminal");
}
