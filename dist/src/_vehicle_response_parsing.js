"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleLocation = exports.TirePressure = exports.TemperatureReading = exports.ServiceRequestStatus = exports.ServiceRequestResult = exports.ServiceRequestKind = exports.ServiceRequest = exports.SeatClimateSettings = exports.Mileage = exports.MaintenanceIndicator = exports.EngineOilDrainRange = exports.DoorState = exports.DoorsStatus = exports.DistanceReading = exports.ClimateStatus = exports.ClimateParameters = exports.BatteryStatus = exports.ResponseError = exports._required_str = exports._required_int = exports._required_float = exports._required_distance_unit = exports._required_datetime = exports._optional_str = exports._optional_seat_option = exports._optional_on_off = exports._optional_object = exports._optional_int = exports._optional_float = exports._optional_datetime = exports._optional_bool = exports._object = exports._nested_optional_str = void 0;
exports.parse_service_request = parse_service_request;
exports.parse_service_request_result = parse_service_request_result;
exports._parse_battery = _parse_battery;
exports._parse_climate_status = _parse_climate_status;
exports._parse_engine_oil_drain_range = _parse_engine_oil_drain_range;
exports._parse_doors = _parse_doors;
exports._parse_door = _parse_door;
exports._parse_distance = _parse_distance;
exports._parse_mileage = _parse_mileage;
exports._parse_tires = _parse_tires;
exports._parse_maintenance_indicator = _parse_maintenance_indicator;
exports._parse_temperature = _parse_temperature;
exports._parse_location = _parse_location;
exports._parse_climate_parameters = _parse_climate_parameters;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _parsing_values_1 = require("./_parsing_values");
Object.defineProperty(exports, "_nested_optional_str", { enumerable: true, get: function () { return _parsing_values_1._nested_optional_str; } });
Object.defineProperty(exports, "_object", { enumerable: true, get: function () { return _parsing_values_1._object; } });
Object.defineProperty(exports, "_optional_bool", { enumerable: true, get: function () { return _parsing_values_1._optional_bool; } });
Object.defineProperty(exports, "_optional_datetime", { enumerable: true, get: function () { return _parsing_values_1._optional_datetime; } });
Object.defineProperty(exports, "_optional_float", { enumerable: true, get: function () { return _parsing_values_1._optional_float; } });
Object.defineProperty(exports, "_optional_int", { enumerable: true, get: function () { return _parsing_values_1._optional_int; } });
Object.defineProperty(exports, "_optional_object", { enumerable: true, get: function () { return _parsing_values_1._optional_object; } });
Object.defineProperty(exports, "_optional_on_off", { enumerable: true, get: function () { return _parsing_values_1._optional_on_off; } });
Object.defineProperty(exports, "_optional_seat_option", { enumerable: true, get: function () { return _parsing_values_1._optional_seat_option; } });
Object.defineProperty(exports, "_optional_str", { enumerable: true, get: function () { return _parsing_values_1._optional_str; } });
Object.defineProperty(exports, "_required_datetime", { enumerable: true, get: function () { return _parsing_values_1._required_datetime; } });
Object.defineProperty(exports, "_required_distance_unit", { enumerable: true, get: function () { return _parsing_values_1._required_distance_unit; } });
Object.defineProperty(exports, "_required_float", { enumerable: true, get: function () { return _parsing_values_1._required_float; } });
Object.defineProperty(exports, "_required_int", { enumerable: true, get: function () { return _parsing_values_1._required_int; } });
Object.defineProperty(exports, "_required_str", { enumerable: true, get: function () { return _parsing_values_1._required_str; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "BatteryStatus", { enumerable: true, get: function () { return models_1.BatteryStatus; } });
Object.defineProperty(exports, "ClimateParameters", { enumerable: true, get: function () { return models_1.ClimateParameters; } });
Object.defineProperty(exports, "ClimateStatus", { enumerable: true, get: function () { return models_1.ClimateStatus; } });
Object.defineProperty(exports, "DistanceReading", { enumerable: true, get: function () { return models_1.DistanceReading; } });
Object.defineProperty(exports, "DoorsStatus", { enumerable: true, get: function () { return models_1.DoorsStatus; } });
Object.defineProperty(exports, "DoorState", { enumerable: true, get: function () { return models_1.DoorState; } });
Object.defineProperty(exports, "EngineOilDrainRange", { enumerable: true, get: function () { return models_1.EngineOilDrainRange; } });
Object.defineProperty(exports, "MaintenanceIndicator", { enumerable: true, get: function () { return models_1.MaintenanceIndicator; } });
Object.defineProperty(exports, "Mileage", { enumerable: true, get: function () { return models_1.Mileage; } });
Object.defineProperty(exports, "SeatClimateSettings", { enumerable: true, get: function () { return models_1.SeatClimateSettings; } });
Object.defineProperty(exports, "ServiceRequest", { enumerable: true, get: function () { return models_1.ServiceRequest; } });
Object.defineProperty(exports, "ServiceRequestKind", { enumerable: true, get: function () { return models_1.ServiceRequestKind; } });
Object.defineProperty(exports, "ServiceRequestResult", { enumerable: true, get: function () { return models_1.ServiceRequestResult; } });
Object.defineProperty(exports, "ServiceRequestStatus", { enumerable: true, get: function () { return models_1.ServiceRequestStatus; } });
Object.defineProperty(exports, "TemperatureReading", { enumerable: true, get: function () { return models_1.TemperatureReading; } });
Object.defineProperty(exports, "TirePressure", { enumerable: true, get: function () { return models_1.TirePressure; } });
Object.defineProperty(exports, "VehicleLocation", { enumerable: true, get: function () { return models_1.VehicleLocation; } });
/** Parse an accepted asynchronous remote request and its immediate metadata. */
function parse_service_request(...__args) {
    let additional_data, climate_defaults_error_message, climate_defaults_success, message, request_id, result;
    let { "data": data, "root_field": root_field, "kind": kind } = _runtime_1.py.bind(__args, ["data", "root_field", "kind"], {}, [], null, null);
    /** Parse an accepted asynchronous remote request and its immediate metadata. */
    result = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    request_id = _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["serviceRequestId"], null)], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(request_id))) {
        message = _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["message"], null)], null);
        if (_runtime_1.py.truth(message)) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [message], null);
        }
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " did not return a service request id")], null);
    }
    additional_data = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["additionalData"], null), (_runtime_1.py.str(root_field) + ".additionalData")], null);
    climate_defaults_success = null;
    climate_defaults_error_message = null;
    if (_runtime_1.py.truth(((additional_data !== null)))) {
        climate_defaults_success = _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(additional_data, "get"), ["success"], null)], null);
        climate_defaults_error_message = _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(additional_data, "get"), ["message"], null)], null);
    }
    return _runtime_1.py.call(models_1.ServiceRequest, [], Object.assign({}, { "id": request_id }, { "kind": kind }, { "climate_defaults_success": climate_defaults_success }, { "climate_defaults_error_message": climate_defaults_error_message }));
}
/** Parse a remote service-request status operation. */
function parse_service_request_result(...__args) {
    let location_value, raw_status, result, status, status_value;
    let { "data": data, "root_field": root_field, "vin": vin } = _runtime_1.py.bind(__args, ["data", "root_field", "vin"], {}, [], null, null);
    /** Parse a remote service-request status operation. */
    result = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    raw_status = _runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["status"], null);
    status = null;
    if (_runtime_1.py.truth(((raw_status !== null)))) {
        status_value = _runtime_1.py.call(_parsing_values_1._required_str, [raw_status, (_runtime_1.py.str(root_field) + ".status")], null);
        try {
            status = _runtime_1.py.call(models_1.ServiceRequestStatus, [status_value], null);
        }
        catch (__error) {
            if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
                status = _runtime_1.py.attr(models_1.ServiceRequestStatus, "UNKNOWN_VALUE");
            }
            else {
                throw __error;
            }
        }
    }
    location_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["location"], null), (_runtime_1.py.str(root_field) + ".location")], null);
    return _runtime_1.py.call(models_1.ServiceRequestResult, [], Object.assign({}, { "status": status }, { "status_details": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusDetails"], null)], null) }, { "location": (_runtime_1.py.truth(((location_value !== null))) ? _runtime_1.py.call(_parse_location, [location_value, vin], null) : null) }, { "activation_date_time": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["activationDateTime"], null)], null) }, { "status_change_date_time": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusChangeDateTime"], null)], null) }));
}
/** Translated upstream _parse_battery. */
function _parse_battery(...__args) {
    let remaining;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    remaining = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["remainingMileage"], null), "batteryStatus.remainingMileage"], null);
    return _runtime_1.py.call(models_1.BatteryStatus, [], Object.assign({}, { "level": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["level"], null)], null) }, { "is_plugged_in": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["isPluggedIn"], null)], null) }, { "is_charging": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["isCharging"], null)], null) }, { "remaining_charge_time": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["remainingChargeTime"], null)], null) }, { "remaining_mileage": (_runtime_1.py.truth(((remaining !== null))) ? _runtime_1.py.call(_parse_distance, [remaining], null) : null) }));
}
/** Translated upstream _parse_climate_status. */
function _parse_climate_status(...__args) {
    let temperature;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    temperature = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["temperature"], null), "climateStatus.temperature"], null);
    return _runtime_1.py.call(models_1.ClimateStatus, [], Object.assign({}, { "state": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["state"], null)], null) }, { "temperature": (_runtime_1.py.truth(((temperature !== null))) ? _runtime_1.py.call(_parse_temperature, [temperature], null) : null) }));
}
/** Translated upstream _parse_engine_oil_drain_range. */
function _parse_engine_oil_drain_range(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.EngineOilDrainRange, [], Object.assign({}, { "range": _runtime_1.py.call(_parsing_values_1._required_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["range"], null), "engineOilDrainRange.range"], null) }, { "unit": _runtime_1.py.call(_parsing_values_1._required_distance_unit, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["unit"], null), "engineOilDrainRange.unit"], null) }, { "last_updated_at": _runtime_1.py.call(_parsing_values_1._required_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["lastUpdatedAt"], null), "engineOilDrainRange.lastUpdatedAt"], null) }));
}
/** Translated upstream _parse_doors. */
function _parse_doors(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.DoorsStatus, [], Object.assign({}, { "last_updated_at": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["lastUpdatedAt"], null)], null) }, { "front_left": _runtime_1.py.call(_parse_door, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["doorFrontLeft"], null), "doorsStatus.doorFrontLeft"], null) }, { "front_right": _runtime_1.py.call(_parse_door, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["doorFrontRight"], null), "doorsStatus.doorFrontRight"], null) }, { "rear_left": _runtime_1.py.call(_parse_door, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["doorRearLeft"], null), "doorsStatus.doorRearLeft"], null) }, { "rear_right": _runtime_1.py.call(_parse_door, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["doorRearRight"], null), "doorsStatus.doorRearRight"], null) }, { "engine_hood_ajar": _runtime_1.py.call(_parsing_values_1._nested_optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["engineHood"], null), "ajar"], null) }, { "hatch_ajar": _runtime_1.py.call(_parsing_values_1._nested_optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["hatch"], null), "ajar"], null) }, { "sunroof_ajar": _runtime_1.py.call(_parsing_values_1._nested_optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["sunroof"], null), "ajar"], null) }, { "trunk_lock": _runtime_1.py.call(_parsing_values_1._nested_optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["trunk"], null), "lock"], null) }, { "overall_lock": _runtime_1.py.call(_parsing_values_1._nested_optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["overallLock"], null), "lock"], null) }));
}
/** Translated upstream _parse_door. */
function _parse_door(...__args) {
    let item;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    item = _runtime_1.py.call(_parsing_values_1._optional_object, [value, path], null);
    if (_runtime_1.py.truth(((item === null)))) {
        return null;
    }
    return _runtime_1.py.call(models_1.DoorState, [], Object.assign({}, { "ajar": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["ajar"], null)], null) }, { "window": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["window"], null)], null) }, { "lock": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["lock"], null)], null) }));
}
/** Translated upstream _parse_distance. */
function _parse_distance(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.DistanceReading, [], Object.assign({}, { "value": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["value"], null)], null) }, { "unit": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["unit"], null)], null) }, { "last_updated_at": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["lastUpdatedAt"], null)], null) }));
}
/** Translated upstream _parse_mileage. */
function _parse_mileage(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.Mileage, [], Object.assign({}, { "total": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["total"], null)], null) }, { "unit": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["unit"], null)], null) }, { "recorded_at": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["recordedTime"], null)], null) }));
}
/** Translated upstream _parse_tires. */
function _parse_tires(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.TirePressure, [], Object.assign({}, { "last_updated_at": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["lastUpdatedAt"], null)], null) }, { "front_left": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["flPressure"], null)], null) }, { "front_right": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["frPressure"], null)], null) }, { "rear_left": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["rlPressure"], null)], null) }, { "rear_right": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["rrPressure"], null)], null) }, { "front_left_status": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["flStatus"], null)], null) }, { "front_right_status": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["frStatus"], null)], null) }, { "rear_left_status": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["rlStatus"], null)], null) }, { "rear_right_status": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["rrStatus"], null)], null) }));
}
/** Translated upstream _parse_maintenance_indicator. */
function _parse_maintenance_indicator(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.MaintenanceIndicator, [], Object.assign({}, { "active": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["active"], null)], null) }, { "detailed_message": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["detailedMessage"], null)], null) }, { "type": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["type"], null)], null) }));
}
/** Translated upstream _parse_temperature. */
function _parse_temperature(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.TemperatureReading, [], Object.assign({}, { "value": _runtime_1.py.call(_parsing_values_1._required_float, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["value"], null), "temperature.value"], null) }, { "unit": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["unit"], null), "temperature.unit"], null) }));
}
/** Translated upstream _parse_location. */
function _parse_location(...__args) {
    let { "value": value, "vin": vin } = _runtime_1.py.bind(__args, ["value", "vin"], {}, [], null, null);
    return _runtime_1.py.call(models_1.VehicleLocation, [], Object.assign({}, { "vin": vin }, { "latitude": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["latitude"], null)], null) }, { "longitude": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["longitude"], null)], null) }, { "last_updated_at": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["lastUpdatedAt"], null)], null) }));
}
/** Translated upstream _parse_climate_parameters. */
function _parse_climate_parameters(...__args) {
    let seats, seats_value;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    seats_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["seatsClimate"], null), "parameters.seatsClimate"], null);
    seats = null;
    if (_runtime_1.py.truth(((seats_value !== null)))) {
        seats = _runtime_1.py.call(models_1.SeatClimateSettings, [], Object.assign({}, { "front_driver": _runtime_1.py.call(_parsing_values_1._optional_seat_option, [_runtime_1.py.call(_runtime_1.py.attr(seats_value, "get"), ["frontDriverState"], null)], null) }, { "front_passenger": _runtime_1.py.call(_parsing_values_1._optional_seat_option, [_runtime_1.py.call(_runtime_1.py.attr(seats_value, "get"), ["frontPassengerState"], null)], null) }, { "rear_left": _runtime_1.py.call(_parsing_values_1._optional_seat_option, [_runtime_1.py.call(_runtime_1.py.attr(seats_value, "get"), ["rearLeftPassengerState"], null)], null) }, { "rear_right": _runtime_1.py.call(_parsing_values_1._optional_seat_option, [_runtime_1.py.call(_runtime_1.py.attr(seats_value, "get"), ["rearRightPassengerState"], null)], null) }, { "rear_center": _runtime_1.py.call(_parsing_values_1._optional_seat_option, [_runtime_1.py.call(_runtime_1.py.attr(seats_value, "get"), ["rearCenterPassengerState"], null)], null) }, { "third_left": _runtime_1.py.call(_parsing_values_1._optional_seat_option, [_runtime_1.py.call(_runtime_1.py.attr(seats_value, "get"), ["thirdLeftState"], null)], null) }, { "third_right": _runtime_1.py.call(_parsing_values_1._optional_seat_option, [_runtime_1.py.call(_runtime_1.py.attr(seats_value, "get"), ["thirdRightState"], null)], null) }));
    }
    return _runtime_1.py.call(models_1.ClimateParameters, [], Object.assign({}, { "seats": seats }, { "steering_wheel_heater": _runtime_1.py.call(_parsing_values_1._optional_on_off, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["steeringWheelHeaterState"], null)], null) }, { "defrost_and_deicer": _runtime_1.py.call(_parsing_values_1._optional_on_off, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["defrostAndDeicerState"], null)], null) }));
}
//# sourceMappingURL=_vehicle_response_parsing.js.map