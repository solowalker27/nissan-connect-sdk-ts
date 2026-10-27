"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationDataSource = exports.ServiceRequestStatus = exports.ServiceRequestResult = exports.ServiceRequestKind = exports.ClimateSettings = exports.ClimateScheduleInput = exports.ClimateParameters = exports.ChargeScheduleInput = exports.serialize_enum = exports.ResponseError = void 0;
exports._start_climate_input = _start_climate_input;
exports._temperature_input = _temperature_input;
exports._climate_parameters_input = _climate_parameters_input;
exports._charge_schedule_input = _charge_schedule_input;
exports._climate_schedule_input = _climate_schedule_input;
exports._date_time_input = _date_time_input;
exports._enum_value = _enum_value;
exports._on_off = _on_off;
exports._optional_variables = _optional_variables;
exports._validate_positive_integer = _validate_positive_integer;
exports._response_object = _response_object;
exports._success = _success;
exports._nullable_success = _nullable_success;
exports._navigation_headers = _navigation_headers;
exports._is_terminal_service_request = _is_terminal_service_request;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "ChargeScheduleInput", { enumerable: true, get: function () { return models_1.ChargeScheduleInput; } });
Object.defineProperty(exports, "ClimateParameters", { enumerable: true, get: function () { return models_1.ClimateParameters; } });
Object.defineProperty(exports, "ClimateScheduleInput", { enumerable: true, get: function () { return models_1.ClimateScheduleInput; } });
Object.defineProperty(exports, "ClimateSettings", { enumerable: true, get: function () { return models_1.ClimateSettings; } });
Object.defineProperty(exports, "ServiceRequestKind", { enumerable: true, get: function () { return models_1.ServiceRequestKind; } });
Object.defineProperty(exports, "ServiceRequestResult", { enumerable: true, get: function () { return models_1.ServiceRequestResult; } });
Object.defineProperty(exports, "ServiceRequestStatus", { enumerable: true, get: function () { return models_1.ServiceRequestStatus; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "NavigationDataSource", { enumerable: true, get: function () { return navigation_inputs_1.NavigationDataSource; } });
/** Translated upstream _start_climate_input. */
function _start_climate_input(...__args) {
    let { "climate": climate } = _runtime_1.py.bind(__args, ["climate"], {}, [], null, null);
    return Object.assign({}, { ["unit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(climate, "unit")], null) }, { ["temperatureValue"]: _runtime_1.py.attr(climate, "temperature") });
}
/** Translated upstream _temperature_input. */
function _temperature_input(...__args) {
    let { "climate": climate } = _runtime_1.py.bind(__args, ["climate"], {}, [], null, null);
    return Object.assign({}, { ["value"]: _runtime_1.py.attr(climate, "temperature") }, { ["unit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(climate, "unit")], null) });
}
/** Translated upstream _climate_parameters_input. */
function _climate_parameters_input(...__args) {
    let seats, seats_input;
    let { "parameters": parameters } = _runtime_1.py.bind(__args, ["parameters"], {}, [], null, null);
    if (_runtime_1.py.truth(((parameters === null)))) {
        return null;
    }
    seats = _runtime_1.py.attr(parameters, "seats");
    seats_input = null;
    if (_runtime_1.py.truth(((seats !== null)))) {
        seats_input = _runtime_1.py.call(_optional_variables, [], Object.assign({}, { "frontDriverState": _runtime_1.py.call(_enum_value, [_runtime_1.py.attr(seats, "front_driver")], null) }, { "frontPassengerState": _runtime_1.py.call(_enum_value, [_runtime_1.py.attr(seats, "front_passenger")], null) }, { "rearLeftPassengerState": _runtime_1.py.call(_enum_value, [_runtime_1.py.attr(seats, "rear_left")], null) }, { "rearRightPassengerState": _runtime_1.py.call(_enum_value, [_runtime_1.py.attr(seats, "rear_right")], null) }, { "rearCenterPassengerState": _runtime_1.py.call(_enum_value, [_runtime_1.py.attr(seats, "rear_center")], null) }, { "thirdLeftState": _runtime_1.py.call(_enum_value, [_runtime_1.py.attr(seats, "third_left")], null) }, { "thirdRightState": _runtime_1.py.call(_enum_value, [_runtime_1.py.attr(seats, "third_right")], null) }));
    }
    return _runtime_1.py.call(_optional_variables, [], Object.assign({}, { "seatsClimate": seats_input }, { "steeringWheelHeaterState": _runtime_1.py.call(_on_off, [_runtime_1.py.attr(parameters, "steering_wheel_heater")], null) }, { "defrostAndDeicerState": _runtime_1.py.call(_on_off, [_runtime_1.py.attr(parameters, "defrost_and_deicer")], null) }));
}
/** Translated upstream _charge_schedule_input. */
function _charge_schedule_input(...__args) {
    let day;
    let { "schedule": schedule } = _runtime_1.py.bind(__args, ["schedule"], {}, [], null, null);
    return Object.assign({}, { ["startDateTime"]: _runtime_1.py.call(_date_time_input, [_runtime_1.py.attr(schedule, "start_date_time")], null) }, { ["duration"]: _runtime_1.py.attr(schedule, "duration") }, { ["weekDays"]: (() => { const __out = []; for (const day of _runtime_1.py.iterable(_runtime_1.py.attr(schedule, "week_days"))) {
            __out.push(_runtime_1.py.call(graphql_input_1.serialize_enum, [day], null));
        } return __out; })() });
}
/** Translated upstream _climate_schedule_input. */
function _climate_schedule_input(...__args) {
    let day;
    let { "schedule": schedule } = _runtime_1.py.bind(__args, ["schedule"], {}, [], null, null);
    return Object.assign({}, { ["startDateTime"]: _runtime_1.py.call(_date_time_input, [_runtime_1.py.attr(schedule, "start_date_time")], null) }, { ["weekDays"]: (() => { const __out = []; for (const day of _runtime_1.py.iterable(_runtime_1.py.attr(schedule, "week_days"))) {
            __out.push(_runtime_1.py.call(graphql_input_1.serialize_enum, [day], null));
        } return __out; })() }, { ["temperature"]: _runtime_1.py.call(_temperature_input, [_runtime_1.py.attr(schedule, "climate")], null) });
}
/** Translated upstream _date_time_input. */
function _date_time_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((_runtime_1.py.attr(value, "tzinfo") === null)), () => ((_runtime_1.py.call(_runtime_1.py.attr(value, "utcoffset"), [], null) === null))))) {
        throw _runtime_1.py.call(_runtime_1.py.ValueError, ["Nissan date-time inputs must include a UTC offset"], null);
    }
    return _runtime_1.py.call(_runtime_1.py.attr(value, "isoformat"), [], null);
}
/** Translated upstream _enum_value. */
function _enum_value(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return (_runtime_1.py.truth(((value !== null))) ? _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null) : null);
}
/** Translated upstream _on_off. */
function _on_off(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return (_runtime_1.py.truth(value) ? "ON" : "OFF");
}
/** Translated upstream _optional_variables. */
function _optional_variables(...__args) {
    let key, value;
    let { "values": values } = _runtime_1.py.bind(__args, [], {}, [], null, "values");
    return (() => { const __out = {}; for (const [key, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.attr(values, "items"), [], null))) {
        if (_runtime_1.py.truth(((value !== null)))) {
            __out[key] = value;
        }
    } return __out; })();
}
/** Translated upstream _validate_positive_integer. */
function _validate_positive_integer(...__args) {
    let { "value": value, "name": name } = _runtime_1.py.bind(__args, ["value", "name"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.int], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null), () => ((value <= 0))))) {
        throw _runtime_1.py.call(_runtime_1.py.ValueError, [(_runtime_1.py.str(name) + " must be a positive integer")], null);
    }
}
/** Translated upstream _response_object. */
function _response_object(...__args) {
    let result;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    result = _runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [result, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing from the Nissan response")], null);
    }
    return result;
}
/** Translated upstream _success. */
function _success(...__args) {
    let message, result, success;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    result = _runtime_1.py.call(_response_object, [data, root_field], null);
    success = _runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["success"], null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [success, _runtime_1.py.bool], null))) {
        return success;
    }
    message = _runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["message"], null);
    if (_runtime_1.py.truth(_runtime_1.py.and(() => _runtime_1.py.call(_runtime_1.py.isinstance, [message, _runtime_1.py.str], null), () => message))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [message], null);
    }
    throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " did not return a success value")], null);
}
/** Translated upstream _nullable_success. */
function _nullable_success(...__args) {
    let message, raw_result, result, success;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    raw_result = _runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null);
    if (_runtime_1.py.truth(((raw_result === null)))) {
        return false;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [raw_result, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is not an object")], null);
    }
    result = raw_result;
    success = _runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["success"], null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [success, _runtime_1.py.bool], null))) {
        return success;
    }
    message = _runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["message"], null);
    if (_runtime_1.py.truth(_runtime_1.py.and(() => _runtime_1.py.call(_runtime_1.py.isinstance, [message, _runtime_1.py.str], null), () => message))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [message], null);
    }
    return false;
}
/** Translated upstream _navigation_headers. */
function _navigation_headers(...__args) {
    let { "data_source": data_source } = _runtime_1.py.bind(__args, ["data_source"], {}, [], null, null);
    if (_runtime_1.py.truth(((data_source === null)))) {
        return null;
    }
    return Object.assign({}, { ["x-tsp-datasource"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [data_source], null) });
}
/** Translated upstream _is_terminal_service_request. */
function _is_terminal_service_request(...__args) {
    let { "kind": kind, "result": result } = _runtime_1.py.bind(__args, ["kind", "result"], {}, [], null, null);
    if (_runtime_1.py.truth((_runtime_1.py.contains(new Set([_runtime_1.py.attr(models_1.ServiceRequestKind, "ROUTE"), _runtime_1.py.attr(models_1.ServiceRequestKind, "T_JUNCTION")]), kind)))) {
        return (_runtime_1.py.contains(new Set([_runtime_1.py.attr(models_1.ServiceRequestStatus, "SUCCESS"), _runtime_1.py.attr(models_1.ServiceRequestStatus, "FAILED")]), _runtime_1.py.attr(result, "status")));
    }
    return _runtime_1.py.attr(result, "is_terminal");
}
//# sourceMappingURL=_client_helpers.js.map