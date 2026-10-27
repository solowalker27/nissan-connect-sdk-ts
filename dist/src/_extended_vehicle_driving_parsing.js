"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeedUnit = exports.DistanceUnit = exports.WeightUnit = exports.DrivingHistoryTripSummary = exports.DrivingHistoryTrip = exports.DrivingHistoryDistance = exports.DrivingHistoryCoordinate = exports.DrivingHistoryCo2Saved = exports.DrivingHistoryAverageSpeed = exports._typed_object = exports._optional_typed_object = exports._nullable_string = exports._nullable_int = exports._nullable_float = exports._nullable_enum = exports._nullable_datetime = exports._float = exports._enum = void 0;
exports._parse_driving_history_summary = _parse_driving_history_summary;
exports._parse_driving_history_trip = _parse_driving_history_trip;
exports._parse_optional_driving_distance = _parse_optional_driving_distance;
exports._parse_optional_average_speed = _parse_optional_average_speed;
exports._parse_optional_co2_saved = _parse_optional_co2_saved;
exports._parse_optional_driving_coordinate = _parse_optional_driving_coordinate;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const _extended_vehicle_value_parsing_1 = require("./_extended_vehicle_value_parsing");
Object.defineProperty(exports, "_enum", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._enum; } });
Object.defineProperty(exports, "_float", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._float; } });
Object.defineProperty(exports, "_nullable_datetime", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_datetime; } });
Object.defineProperty(exports, "_nullable_enum", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_enum; } });
Object.defineProperty(exports, "_nullable_float", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_float; } });
Object.defineProperty(exports, "_nullable_int", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_int; } });
Object.defineProperty(exports, "_nullable_string", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_string; } });
Object.defineProperty(exports, "_optional_typed_object", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._optional_typed_object; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._typed_object; } });
const extended_vehicle_models_1 = require("./extended_vehicle_models");
Object.defineProperty(exports, "DrivingHistoryAverageSpeed", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryAverageSpeed; } });
Object.defineProperty(exports, "DrivingHistoryCo2Saved", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryCo2Saved; } });
Object.defineProperty(exports, "DrivingHistoryCoordinate", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryCoordinate; } });
Object.defineProperty(exports, "DrivingHistoryDistance", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryDistance; } });
Object.defineProperty(exports, "DrivingHistoryTrip", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryTrip; } });
Object.defineProperty(exports, "DrivingHistoryTripSummary", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryTripSummary; } });
Object.defineProperty(exports, "WeightUnit", { enumerable: true, get: function () { return extended_vehicle_models_1.WeightUnit; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "SpeedUnit", { enumerable: true, get: function () { return models_1.SpeedUnit; } });
/** Translated upstream _parse_driving_history_summary. */
function _parse_driving_history_summary(...__args) {
    let summary;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    summary = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(extended_vehicle_models_1.DrivingHistoryTripSummary, [], Object.assign({}, { "user_id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["userId"], null), (_runtime_1.py.str(path) + ".userId")], null) }, { "day": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["day"], null), (_runtime_1.py.str(path) + ".day")], null) }, { "month": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["month"], null), (_runtime_1.py.str(path) + ".month")], null) }, { "year": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["year"], null), (_runtime_1.py.str(path) + ".year")], null) }, { "number_of_trips": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["numberOfTrips"], null), (_runtime_1.py.str(path) + ".numberOfTrips")], null) }, { "distance_traveled": _runtime_1.py.call(_parse_optional_driving_distance, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["distanceTraveled"], null), (_runtime_1.py.str(path) + ".distanceTraveled")], null) }, { "duration": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["duration"], null), (_runtime_1.py.str(path) + ".duration")], null) }, { "average_speed": _runtime_1.py.call(_parse_optional_average_speed, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["averageSpeed"], null), (_runtime_1.py.str(path) + ".averageSpeed")], null) }, { "energy_consumed": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["energyConsumed"], null), (_runtime_1.py.str(path) + ".energyConsumed")], null) }, { "co2_saved": _runtime_1.py.call(_parse_optional_co2_saved, [_runtime_1.py.call(_runtime_1.py.attr(summary, "get"), ["co2Saved"], null), (_runtime_1.py.str(path) + ".co2Saved")], null) }));
}
/** Translated upstream _parse_driving_history_trip. */
function _parse_driving_history_trip(...__args) {
    let trip;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    trip = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(extended_vehicle_models_1.DrivingHistoryTrip, [], Object.assign({}, { "distance": _runtime_1.py.call(_parse_optional_driving_distance, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["distance"], null), (_runtime_1.py.str(path) + ".distance")], null) }, { "start_date": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["startDate"], null), (_runtime_1.py.str(path) + ".startDate")], null) }, { "end_date": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["endDate"], null), (_runtime_1.py.str(path) + ".endDate")], null) }, { "duration": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["duration"], null), (_runtime_1.py.str(path) + ".duration")], null) }, { "start_location": _runtime_1.py.call(_parse_optional_driving_coordinate, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["startLocation"], null), (_runtime_1.py.str(path) + ".startLocation")], null) }, { "end_location": _runtime_1.py.call(_parse_optional_driving_coordinate, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["endLocation"], null), (_runtime_1.py.str(path) + ".endLocation")], null) }, { "average_speed": _runtime_1.py.call(_parse_optional_average_speed, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["averageSpeed"], null), (_runtime_1.py.str(path) + ".averageSpeed")], null) }, { "energy_consumed": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["energyConsumed"], null), (_runtime_1.py.str(path) + ".energyConsumed")], null) }, { "energy_saved": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["energySaved"], null), (_runtime_1.py.str(path) + ".energySaved")], null) }, { "co2_saved": _runtime_1.py.call(_parse_optional_co2_saved, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["co2Saved"], null), (_runtime_1.py.str(path) + ".co2Saved")], null) }, { "user_id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(trip, "get"), ["userId"], null), (_runtime_1.py.str(path) + ".userId")], null) }));
}
/** Translated upstream _parse_optional_driving_distance. */
function _parse_optional_driving_distance(...__args) {
    let distance;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    distance = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((distance === null)))) {
        return null;
    }
    return _runtime_1.py.call(extended_vehicle_models_1.DrivingHistoryDistance, [], Object.assign({}, { "unit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._enum, [_runtime_1.py.call(_runtime_1.py.attr(distance, "get"), ["unit"], null), models_1.DistanceUnit, (_runtime_1.py.str(path) + ".unit")], null) }, { "value": _runtime_1.py.call(_extended_vehicle_value_parsing_1._float, [_runtime_1.py.call(_runtime_1.py.attr(distance, "get"), ["value"], null), (_runtime_1.py.str(path) + ".value")], null) }));
}
/** Translated upstream _parse_optional_average_speed. */
function _parse_optional_average_speed(...__args) {
    let speed;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    speed = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((speed === null)))) {
        return null;
    }
    return _runtime_1.py.call(extended_vehicle_models_1.DrivingHistoryAverageSpeed, [], Object.assign({}, { "type": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(speed, "get"), ["type"], null), models_1.SpeedUnit, (_runtime_1.py.str(path) + ".type")], null) }, { "value": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(speed, "get"), ["value"], null), (_runtime_1.py.str(path) + ".value")], null) }));
}
/** Translated upstream _parse_optional_co2_saved. */
function _parse_optional_co2_saved(...__args) {
    let saved;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    saved = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((saved === null)))) {
        return null;
    }
    return _runtime_1.py.call(extended_vehicle_models_1.DrivingHistoryCo2Saved, [], Object.assign({}, { "unit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(saved, "get"), ["unit"], null), extended_vehicle_models_1.WeightUnit, (_runtime_1.py.str(path) + ".unit")], null) }, { "value": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(saved, "get"), ["value"], null), (_runtime_1.py.str(path) + ".value")], null) }));
}
/** Translated upstream _parse_optional_driving_coordinate. */
function _parse_optional_driving_coordinate(...__args) {
    let coordinate;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    coordinate = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((coordinate === null)))) {
        return null;
    }
    return _runtime_1.py.call(extended_vehicle_models_1.DrivingHistoryCoordinate, [], Object.assign({}, { "latitude": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(coordinate, "get"), ["latitude"], null), (_runtime_1.py.str(path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(coordinate, "get"), ["longitude"], null), (_runtime_1.py.str(path) + ".longitude")], null) }));
}
//# sourceMappingURL=_extended_vehicle_driving_parsing.js.map