// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _nested_optional_str, _object, _optional_bool, _optional_datetime, _optional_float, _optional_int, _optional_object, _optional_on_off, _optional_seat_option, _optional_str, _required_datetime, _required_distance_unit, _required_float, _required_int, _required_str } from "./_parsing_values";
export { _nested_optional_str, _object, _optional_bool, _optional_datetime, _optional_float, _optional_int, _optional_object, _optional_on_off, _optional_seat_option, _optional_str, _required_datetime, _required_distance_unit, _required_float, _required_int, _required_str };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { BatteryStatus, ClimateParameters, ClimateStatus, DistanceReading, DoorsStatus, DoorState, EngineOilDrainRange, MaintenanceIndicator, Mileage, SeatClimateSettings, ServiceRequest, ServiceRequestKind, ServiceRequestResult, ServiceRequestStatus, TemperatureReading, TirePressure, VehicleLocation } from "./models";
export { BatteryStatus, ClimateParameters, ClimateStatus, DistanceReading, DoorsStatus, DoorState, EngineOilDrainRange, MaintenanceIndicator, Mileage, SeatClimateSettings, ServiceRequest, ServiceRequestKind, ServiceRequestResult, ServiceRequestStatus, TemperatureReading, TirePressure, VehicleLocation };

export function parse_service_request(data: Record<string, unknown>, root_field: string, kind: ServiceRequestKind): ServiceRequest;
/** Parse an accepted asynchronous remote request and its immediate metadata. */
export function parse_service_request(...__args: any[]): any {
let additional_data, climate_defaults_error_message, climate_defaults_success, message, request_id, result;
let {"data": data, "root_field": root_field, "kind": kind} = $.bind(__args, ["data", "root_field", "kind"], {}, [], null, null);
/** Parse an accepted asynchronous remote request and its immediate metadata. */
result = $.call(_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
request_id = $.call(_optional_str, [$.call($.attr(result, "get"), ["serviceRequestId"], null)], null);
if ($.truth(!$.truth(request_id))) {
message = $.call(_optional_str, [$.call($.attr(result, "get"), ["message"], null)], null);
if ($.truth(message)) {
throw $.call(ResponseError, [message], null);
}
throw $.call(ResponseError, [($.str(root_field) + " did not return a service request id")], null);
}
additional_data = $.call(_optional_object, [$.call($.attr(result, "get"), ["additionalData"], null), ($.str(root_field) + ".additionalData")], null);
climate_defaults_success = null;
climate_defaults_error_message = null;
if ($.truth(((additional_data !== null)))) {
climate_defaults_success = $.call(_optional_bool, [$.call($.attr(additional_data, "get"), ["success"], null)], null);
climate_defaults_error_message = $.call(_optional_str, [$.call($.attr(additional_data, "get"), ["message"], null)], null);
}
return $.call(ServiceRequest, [], Object.assign({}, {"id": request_id}, {"kind": kind}, {"climate_defaults_success": climate_defaults_success}, {"climate_defaults_error_message": climate_defaults_error_message}));
}

export function parse_service_request_result(data: Record<string, unknown>, root_field: string, vin: string): ServiceRequestResult;
/** Parse a remote service-request status operation. */
export function parse_service_request_result(...__args: any[]): any {
let location_value, raw_status, result, status, status_value;
let {"data": data, "root_field": root_field, "vin": vin} = $.bind(__args, ["data", "root_field", "vin"], {}, [], null, null);
/** Parse a remote service-request status operation. */
result = $.call(_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
raw_status = $.call($.attr(result, "get"), ["status"], null);
status = null;
if ($.truth(((raw_status !== null)))) {
status_value = $.call(_required_str, [raw_status, ($.str(root_field) + ".status")], null);
try {
status = $.call(ServiceRequestStatus, [status_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { status = $.attr(ServiceRequestStatus, "UNKNOWN_VALUE"); } else { throw __error; }
}
}
location_value = $.call(_optional_object, [$.call($.attr(result, "get"), ["location"], null), ($.str(root_field) + ".location")], null);
return $.call(ServiceRequestResult, [], Object.assign({}, {"status": status}, {"status_details": $.call(_optional_str, [$.call($.attr(result, "get"), ["statusDetails"], null)], null)}, {"location": ($.truth(((location_value !== null))) ? $.call(_parse_location, [location_value, vin], null) : null)}, {"activation_date_time": $.call(_optional_datetime, [$.call($.attr(result, "get"), ["activationDateTime"], null)], null)}, {"status_change_date_time": $.call(_optional_datetime, [$.call($.attr(result, "get"), ["statusChangeDateTime"], null)], null)}));
}

export function _parse_battery(value: Record<string, unknown>): BatteryStatus;
/** Translated upstream _parse_battery. */
export function _parse_battery(...__args: any[]): any {
let remaining;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
remaining = $.call(_optional_object, [$.call($.attr(value, "get"), ["remainingMileage"], null), "batteryStatus.remainingMileage"], null);
return $.call(BatteryStatus, [], Object.assign({}, {"level": $.call(_optional_int, [$.call($.attr(value, "get"), ["level"], null)], null)}, {"is_plugged_in": $.call(_optional_bool, [$.call($.attr(value, "get"), ["isPluggedIn"], null)], null)}, {"is_charging": $.call(_optional_bool, [$.call($.attr(value, "get"), ["isCharging"], null)], null)}, {"remaining_charge_time": $.call(_optional_int, [$.call($.attr(value, "get"), ["remainingChargeTime"], null)], null)}, {"remaining_mileage": ($.truth(((remaining !== null))) ? $.call(_parse_distance, [remaining], null) : null)}));
}

export function _parse_climate_status(value: Record<string, unknown>): ClimateStatus;
/** Translated upstream _parse_climate_status. */
export function _parse_climate_status(...__args: any[]): any {
let temperature;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
temperature = $.call(_optional_object, [$.call($.attr(value, "get"), ["temperature"], null), "climateStatus.temperature"], null);
return $.call(ClimateStatus, [], Object.assign({}, {"state": $.call(_optional_str, [$.call($.attr(value, "get"), ["state"], null)], null)}, {"temperature": ($.truth(((temperature !== null))) ? $.call(_parse_temperature, [temperature], null) : null)}));
}

export function _parse_engine_oil_drain_range(value: Record<string, unknown>): EngineOilDrainRange;
/** Translated upstream _parse_engine_oil_drain_range. */
export function _parse_engine_oil_drain_range(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(EngineOilDrainRange, [], Object.assign({}, {"range": $.call(_required_int, [$.call($.attr(value, "get"), ["range"], null), "engineOilDrainRange.range"], null)}, {"unit": $.call(_required_distance_unit, [$.call($.attr(value, "get"), ["unit"], null), "engineOilDrainRange.unit"], null)}, {"last_updated_at": $.call(_required_datetime, [$.call($.attr(value, "get"), ["lastUpdatedAt"], null), "engineOilDrainRange.lastUpdatedAt"], null)}));
}

export function _parse_doors(value: Record<string, unknown>): DoorsStatus;
/** Translated upstream _parse_doors. */
export function _parse_doors(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(DoorsStatus, [], Object.assign({}, {"last_updated_at": $.call(_optional_datetime, [$.call($.attr(value, "get"), ["lastUpdatedAt"], null)], null)}, {"front_left": $.call(_parse_door, [$.call($.attr(value, "get"), ["doorFrontLeft"], null), "doorsStatus.doorFrontLeft"], null)}, {"front_right": $.call(_parse_door, [$.call($.attr(value, "get"), ["doorFrontRight"], null), "doorsStatus.doorFrontRight"], null)}, {"rear_left": $.call(_parse_door, [$.call($.attr(value, "get"), ["doorRearLeft"], null), "doorsStatus.doorRearLeft"], null)}, {"rear_right": $.call(_parse_door, [$.call($.attr(value, "get"), ["doorRearRight"], null), "doorsStatus.doorRearRight"], null)}, {"engine_hood_ajar": $.call(_nested_optional_str, [$.call($.attr(value, "get"), ["engineHood"], null), "ajar"], null)}, {"hatch_ajar": $.call(_nested_optional_str, [$.call($.attr(value, "get"), ["hatch"], null), "ajar"], null)}, {"sunroof_ajar": $.call(_nested_optional_str, [$.call($.attr(value, "get"), ["sunroof"], null), "ajar"], null)}, {"trunk_lock": $.call(_nested_optional_str, [$.call($.attr(value, "get"), ["trunk"], null), "lock"], null)}, {"overall_lock": $.call(_nested_optional_str, [$.call($.attr(value, "get"), ["overallLock"], null), "lock"], null)}));
}

export function _parse_door(value: unknown, path: string): DoorState | null;
/** Translated upstream _parse_door. */
export function _parse_door(...__args: any[]): any {
let item;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
item = $.call(_optional_object, [value, path], null);
if ($.truth(((item === null)))) {
return null;
}
return $.call(DoorState, [], Object.assign({}, {"ajar": $.call(_optional_str, [$.call($.attr(item, "get"), ["ajar"], null)], null)}, {"window": $.call(_optional_str, [$.call($.attr(item, "get"), ["window"], null)], null)}, {"lock": $.call(_optional_str, [$.call($.attr(item, "get"), ["lock"], null)], null)}));
}

export function _parse_distance(value: Record<string, unknown>): DistanceReading;
/** Translated upstream _parse_distance. */
export function _parse_distance(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(DistanceReading, [], Object.assign({}, {"value": $.call(_optional_int, [$.call($.attr(value, "get"), ["value"], null)], null)}, {"unit": $.call(_optional_str, [$.call($.attr(value, "get"), ["unit"], null)], null)}, {"last_updated_at": $.call(_optional_datetime, [$.call($.attr(value, "get"), ["lastUpdatedAt"], null)], null)}));
}

export function _parse_mileage(value: Record<string, unknown>): Mileage;
/** Translated upstream _parse_mileage. */
export function _parse_mileage(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(Mileage, [], Object.assign({}, {"total": $.call(_optional_int, [$.call($.attr(value, "get"), ["total"], null)], null)}, {"unit": $.call(_optional_str, [$.call($.attr(value, "get"), ["unit"], null)], null)}, {"recorded_at": $.call(_optional_datetime, [$.call($.attr(value, "get"), ["recordedTime"], null)], null)}));
}

export function _parse_tires(value: Record<string, unknown>): TirePressure;
/** Translated upstream _parse_tires. */
export function _parse_tires(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(TirePressure, [], Object.assign({}, {"last_updated_at": $.call(_optional_datetime, [$.call($.attr(value, "get"), ["lastUpdatedAt"], null)], null)}, {"front_left": $.call(_optional_int, [$.call($.attr(value, "get"), ["flPressure"], null)], null)}, {"front_right": $.call(_optional_int, [$.call($.attr(value, "get"), ["frPressure"], null)], null)}, {"rear_left": $.call(_optional_int, [$.call($.attr(value, "get"), ["rlPressure"], null)], null)}, {"rear_right": $.call(_optional_int, [$.call($.attr(value, "get"), ["rrPressure"], null)], null)}, {"front_left_status": $.call(_optional_int, [$.call($.attr(value, "get"), ["flStatus"], null)], null)}, {"front_right_status": $.call(_optional_int, [$.call($.attr(value, "get"), ["frStatus"], null)], null)}, {"rear_left_status": $.call(_optional_int, [$.call($.attr(value, "get"), ["rlStatus"], null)], null)}, {"rear_right_status": $.call(_optional_int, [$.call($.attr(value, "get"), ["rrStatus"], null)], null)}));
}

export function _parse_maintenance_indicator(value: Record<string, unknown>): MaintenanceIndicator;
/** Translated upstream _parse_maintenance_indicator. */
export function _parse_maintenance_indicator(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(MaintenanceIndicator, [], Object.assign({}, {"active": $.call(_optional_bool, [$.call($.attr(value, "get"), ["active"], null)], null)}, {"detailed_message": $.call(_optional_str, [$.call($.attr(value, "get"), ["detailedMessage"], null)], null)}, {"type": $.call(_optional_str, [$.call($.attr(value, "get"), ["type"], null)], null)}));
}

export function _parse_temperature(value: Record<string, unknown>): TemperatureReading;
/** Translated upstream _parse_temperature. */
export function _parse_temperature(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(TemperatureReading, [], Object.assign({}, {"value": $.call(_required_float, [$.call($.attr(value, "get"), ["value"], null), "temperature.value"], null)}, {"unit": $.call(_required_str, [$.call($.attr(value, "get"), ["unit"], null), "temperature.unit"], null)}));
}

export function _parse_location(value: Record<string, unknown>, vin: string): VehicleLocation;
/** Translated upstream _parse_location. */
export function _parse_location(...__args: any[]): any {
let {"value": value, "vin": vin} = $.bind(__args, ["value", "vin"], {}, [], null, null);
return $.call(VehicleLocation, [], Object.assign({}, {"vin": vin}, {"latitude": $.call(_optional_float, [$.call($.attr(value, "get"), ["latitude"], null)], null)}, {"longitude": $.call(_optional_float, [$.call($.attr(value, "get"), ["longitude"], null)], null)}, {"last_updated_at": $.call(_optional_datetime, [$.call($.attr(value, "get"), ["lastUpdatedAt"], null)], null)}));
}

export function _parse_climate_parameters(value: Record<string, unknown>): ClimateParameters;
/** Translated upstream _parse_climate_parameters. */
export function _parse_climate_parameters(...__args: any[]): any {
let seats, seats_value;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
seats_value = $.call(_optional_object, [$.call($.attr(value, "get"), ["seatsClimate"], null), "parameters.seatsClimate"], null);
seats = null;
if ($.truth(((seats_value !== null)))) {
seats = $.call(SeatClimateSettings, [], Object.assign({}, {"front_driver": $.call(_optional_seat_option, [$.call($.attr(seats_value, "get"), ["frontDriverState"], null)], null)}, {"front_passenger": $.call(_optional_seat_option, [$.call($.attr(seats_value, "get"), ["frontPassengerState"], null)], null)}, {"rear_left": $.call(_optional_seat_option, [$.call($.attr(seats_value, "get"), ["rearLeftPassengerState"], null)], null)}, {"rear_right": $.call(_optional_seat_option, [$.call($.attr(seats_value, "get"), ["rearRightPassengerState"], null)], null)}, {"rear_center": $.call(_optional_seat_option, [$.call($.attr(seats_value, "get"), ["rearCenterPassengerState"], null)], null)}, {"third_left": $.call(_optional_seat_option, [$.call($.attr(seats_value, "get"), ["thirdLeftState"], null)], null)}, {"third_right": $.call(_optional_seat_option, [$.call($.attr(seats_value, "get"), ["thirdRightState"], null)], null)}));
}
return $.call(ClimateParameters, [], Object.assign({}, {"seats": seats}, {"steering_wheel_heater": $.call(_optional_on_off, [$.call($.attr(value, "get"), ["steeringWheelHeaterState"], null)], null)}, {"defrost_and_deicer": $.call(_optional_on_off, [$.call($.attr(value, "get"), ["defrostAndDeicerState"], null)], null)}));
}
