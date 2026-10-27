"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekDay = exports.V2LState = exports.SeatClimateOption = exports.PurchaseType = exports.ProductType = exports.DistanceUnit = exports.CameraService = exports.CameraPosition = exports.ResponseError = void 0;
exports._parse_week_days = _parse_week_days;
exports._optional_seat_option = _optional_seat_option;
exports._optional_camera_position = _optional_camera_position;
exports._optional_camera_service = _optional_camera_service;
exports._optional_v2l_state = _optional_v2l_state;
exports._optional_on_off = _optional_on_off;
exports._nested_optional_str = _nested_optional_str;
exports._object = _object;
exports._optional_object = _optional_object;
exports._list = _list;
exports._optional_list = _optional_list;
exports._required_str = _required_str;
exports._required_graphql_string = _required_graphql_string;
exports._nullable_graphql_string = _nullable_graphql_string;
exports._optional_str = _optional_str;
exports._required_bool = _required_bool;
exports._required_int = _required_int;
exports._optional_bool = _optional_bool;
exports._nullable_graphql_bool = _nullable_graphql_bool;
exports._optional_int = _optional_int;
exports._required_float = _required_float;
exports._required_distance_unit = _required_distance_unit;
exports._optional_float = _optional_float;
exports._required_datetime = _required_datetime;
exports._required_aware_datetime = _required_aware_datetime;
exports._nullable_aware_datetime = _nullable_aware_datetime;
exports._optional_datetime = _optional_datetime;
exports._nullable_purchase_type = _nullable_purchase_type;
exports._nullable_product_type = _nullable_product_type;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "CameraPosition", { enumerable: true, get: function () { return models_1.CameraPosition; } });
Object.defineProperty(exports, "CameraService", { enumerable: true, get: function () { return models_1.CameraService; } });
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "ProductType", { enumerable: true, get: function () { return models_1.ProductType; } });
Object.defineProperty(exports, "PurchaseType", { enumerable: true, get: function () { return models_1.PurchaseType; } });
Object.defineProperty(exports, "SeatClimateOption", { enumerable: true, get: function () { return models_1.SeatClimateOption; } });
Object.defineProperty(exports, "V2LState", { enumerable: true, get: function () { return models_1.V2LState; } });
Object.defineProperty(exports, "WeekDay", { enumerable: true, get: function () { return models_1.WeekDay; } });
/** Translated upstream _parse_week_days. */
function _parse_week_days(...__args) {
    let days, item, raw, values;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    values = _runtime_1.py.call(_list, [value, path], null);
    days = [];
    for (item of _runtime_1.py.iterable(values)) {
        raw = _runtime_1.py.call(_required_str, [item, path], null);
        try {
            _runtime_1.py.call(_runtime_1.py.attr(days, "append"), [_runtime_1.py.call(models_1.WeekDay, [raw], null)], null);
        }
        catch (__error) {
            if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
                _runtime_1.py.call(_runtime_1.py.attr(days, "append"), [_runtime_1.py.attr(models_1.WeekDay, "UNKNOWN_VALUE")], null);
            }
            else {
                throw __error;
            }
        }
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [days], null);
}
/** Translated upstream _optional_seat_option. */
function _optional_seat_option(...__args) {
    let raw;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    raw = _runtime_1.py.call(_optional_str, [value], null);
    if (_runtime_1.py.truth(((raw === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(models_1.SeatClimateOption, [raw], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(models_1.SeatClimateOption, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _optional_camera_position. */
function _optional_camera_position(...__args) {
    let raw;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    raw = _runtime_1.py.call(_optional_str, [value], null);
    if (_runtime_1.py.truth(((raw === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(models_1.CameraPosition, [raw], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(models_1.CameraPosition, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _optional_camera_service. */
function _optional_camera_service(...__args) {
    let raw;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    raw = _runtime_1.py.call(_optional_str, [value], null);
    if (_runtime_1.py.truth(((raw === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(models_1.CameraService, [raw], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(models_1.CameraService, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _optional_v2l_state. */
function _optional_v2l_state(...__args) {
    let raw;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    raw = _runtime_1.py.call(_optional_str, [value], null);
    if (_runtime_1.py.truth(((raw === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(models_1.V2LState, [raw], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(models_1.V2LState, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _optional_on_off. */
function _optional_on_off(...__args) {
    let raw;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    raw = _runtime_1.py.call(_optional_str, [value], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(raw, "ON")))) {
        return true;
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(raw, "OFF")))) {
        return false;
    }
    return null;
}
/** Translated upstream _nested_optional_str. */
function _nested_optional_str(...__args) {
    let item;
    let { "value": value, "key": key } = _runtime_1.py.bind(__args, ["value", "key"], {}, [], null, null);
    item = _runtime_1.py.call(_optional_object, [value, key], null);
    return (_runtime_1.py.truth(((item !== null))) ? _runtime_1.py.call(_optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), [key], null)], null) : null);
}
/** Translated upstream _object. */
function _object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    return value;
}
/** Translated upstream _optional_object. */
function _optional_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_object, [value, path], null);
}
/** Translated upstream _list. */
function _list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _optional_list. */
function _optional_list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_list, [value, path], null);
}
/** Translated upstream _required_str. */
function _required_str(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)), () => !_runtime_1.py.truth(value)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a non-empty string")], null);
    }
    return value;
}
/** Translated upstream _required_graphql_string. */
function _required_graphql_string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return value;
}
/** Translated upstream _nullable_graphql_string. */
function _nullable_graphql_string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_required_graphql_string, [value, path], null);
}
/** Translated upstream _optional_str. */
function _optional_str(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)) ? value : null);
}
/** Translated upstream _required_bool. */
function _required_bool(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _required_int. */
function _required_int(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.int], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an integer")], null);
    }
    return value;
}
/** Translated upstream _optional_bool. */
function _optional_bool(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)) ? value : null);
}
/** Translated upstream _nullable_graphql_bool. */
function _nullable_graphql_bool(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_required_bool, [value, path], null);
}
/** Translated upstream _optional_int. */
function _optional_int(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return (_runtime_1.py.truth(_runtime_1.py.and(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.int], null), () => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) ? value : null);
}
/** Translated upstream _required_float. */
function _required_float(...__args) {
    let result;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    result = _runtime_1.py.call(_optional_float, [value], null);
    if (_runtime_1.py.truth(((result === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not numeric")], null);
    }
    return result;
}
/** Translated upstream _required_distance_unit. */
function _required_distance_unit(...__args) {
    let raw;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw = _runtime_1.py.call(_required_str, [value, path], null);
    try {
        return _runtime_1.py.call(models_1.DistanceUnit, [raw], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(models_1.DistanceUnit, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _optional_float. */
function _optional_float(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.and(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, [_runtime_1.py.int, _runtime_1.py.float]], null), () => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null))))) {
        return _runtime_1.py.call(_runtime_1.py.float, [value], null);
    }
    return null;
}
/** Translated upstream _required_datetime. */
function _required_datetime(...__args) {
    let parsed;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    parsed = _runtime_1.py.call(_optional_datetime, [value], null);
    if (_runtime_1.py.truth(((parsed === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time")], null);
    }
    return parsed;
}
/** Translated upstream _required_aware_datetime. */
function _required_aware_datetime(...__args) {
    let normalized, parsed;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time with an offset")], null);
    }
    normalized = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(value, "endswith"), ["Z"], null)) ? (_runtime_1.py.str(_runtime_1.py.slice(value, null, -(1), null)) + "+00:00") : value);
    try {
        parsed = _runtime_1.py.call(_runtime_1.py.attr(datetime, "fromisoformat"), [normalized], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            let error = __error;
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time with an offset")], null);
        }
        else {
            throw __error;
        }
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((_runtime_1.py.attr(parsed, "tzinfo") === null)), () => ((_runtime_1.py.call(_runtime_1.py.attr(parsed, "utcoffset"), [], null) === null))))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time with an offset")], null);
    }
    return parsed;
}
/** Translated upstream _nullable_aware_datetime. */
function _nullable_aware_datetime(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_required_aware_datetime, [value, path], null);
}
/** Translated upstream _optional_datetime. */
function _optional_datetime(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(_runtime_1.py.attr(datetime, "fromisoformat"), [_runtime_1.py.call(_runtime_1.py.attr(value, "replace"), ["Z", "+00:00"], null)], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return null;
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _nullable_purchase_type. */
function _nullable_purchase_type(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    raw_value = _runtime_1.py.call(_required_str, [value, path], null);
    try {
        return _runtime_1.py.call(models_1.PurchaseType, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return raw_value;
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _nullable_product_type. */
function _nullable_product_type(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    raw_value = _runtime_1.py.call(_required_str, [value, path], null);
    try {
        return _runtime_1.py.call(models_1.ProductType, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return raw_value;
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=_parsing_values.js.map