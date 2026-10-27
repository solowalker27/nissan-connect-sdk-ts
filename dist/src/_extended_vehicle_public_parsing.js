"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TariffPricing = exports.ShareableCapabilityGroup = exports.ShareableCapabilities = exports.ParkingChargeableData = exports.ParkingChargeable = exports.LocationDetails = exports.LastKnownCameraUsageCounter = exports.EVehicleEligibilityData = exports.EVehicleEligibility = exports.EVChargeStation = exports.EmpLocation = exports.DrivingHistoryTripSummary = exports.DrivingHistoryTrip = exports.DrivingHistory = exports.ResponseError = exports._vehicle = exports._optional_typed_object = exports._nullable_string = exports._nullable_list = exports._nullable_datetime = exports._nullable_bool = exports._list = exports._parse_tariff_pricing_data = exports._parse_shareable_capability_group = exports._parse_ev_charge_station = exports._parse_emp_location = exports._parse_driving_history_trip = exports._parse_driving_history_summary = void 0;
exports.parse_driving_history = parse_driving_history;
exports.parse_ev_charge_stations = parse_ev_charge_stations;
exports.parse_e_vehicle_eligibility = parse_e_vehicle_eligibility;
exports.parse_last_known_camera_usage_counter = parse_last_known_camera_usage_counter;
exports.parse_location_details = parse_location_details;
exports.parse_parking_chargeable = parse_parking_chargeable;
exports.parse_shareable_capabilities = parse_shareable_capabilities;
exports.parse_tariff_pricing = parse_tariff_pricing;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _extended_vehicle_driving_parsing_1 = require("./_extended_vehicle_driving_parsing");
Object.defineProperty(exports, "_parse_driving_history_summary", { enumerable: true, get: function () { return _extended_vehicle_driving_parsing_1._parse_driving_history_summary; } });
Object.defineProperty(exports, "_parse_driving_history_trip", { enumerable: true, get: function () { return _extended_vehicle_driving_parsing_1._parse_driving_history_trip; } });
const _extended_vehicle_location_parsing_1 = require("./_extended_vehicle_location_parsing");
Object.defineProperty(exports, "_parse_emp_location", { enumerable: true, get: function () { return _extended_vehicle_location_parsing_1._parse_emp_location; } });
Object.defineProperty(exports, "_parse_ev_charge_station", { enumerable: true, get: function () { return _extended_vehicle_location_parsing_1._parse_ev_charge_station; } });
const _extended_vehicle_tariff_parsing_1 = require("./_extended_vehicle_tariff_parsing");
Object.defineProperty(exports, "_parse_shareable_capability_group", { enumerable: true, get: function () { return _extended_vehicle_tariff_parsing_1._parse_shareable_capability_group; } });
Object.defineProperty(exports, "_parse_tariff_pricing_data", { enumerable: true, get: function () { return _extended_vehicle_tariff_parsing_1._parse_tariff_pricing_data; } });
const _extended_vehicle_value_parsing_1 = require("./_extended_vehicle_value_parsing");
Object.defineProperty(exports, "_list", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._list; } });
Object.defineProperty(exports, "_nullable_bool", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_bool; } });
Object.defineProperty(exports, "_nullable_datetime", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_datetime; } });
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_nullable_string", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_string; } });
Object.defineProperty(exports, "_optional_typed_object", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._optional_typed_object; } });
Object.defineProperty(exports, "_vehicle", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._vehicle; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const extended_vehicle_models_1 = require("./extended_vehicle_models");
Object.defineProperty(exports, "DrivingHistory", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistory; } });
Object.defineProperty(exports, "DrivingHistoryTrip", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryTrip; } });
Object.defineProperty(exports, "DrivingHistoryTripSummary", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryTripSummary; } });
Object.defineProperty(exports, "EmpLocation", { enumerable: true, get: function () { return extended_vehicle_models_1.EmpLocation; } });
Object.defineProperty(exports, "EVChargeStation", { enumerable: true, get: function () { return extended_vehicle_models_1.EVChargeStation; } });
Object.defineProperty(exports, "EVehicleEligibility", { enumerable: true, get: function () { return extended_vehicle_models_1.EVehicleEligibility; } });
Object.defineProperty(exports, "EVehicleEligibilityData", { enumerable: true, get: function () { return extended_vehicle_models_1.EVehicleEligibilityData; } });
Object.defineProperty(exports, "LastKnownCameraUsageCounter", { enumerable: true, get: function () { return extended_vehicle_models_1.LastKnownCameraUsageCounter; } });
Object.defineProperty(exports, "LocationDetails", { enumerable: true, get: function () { return extended_vehicle_models_1.LocationDetails; } });
Object.defineProperty(exports, "ParkingChargeable", { enumerable: true, get: function () { return extended_vehicle_models_1.ParkingChargeable; } });
Object.defineProperty(exports, "ParkingChargeableData", { enumerable: true, get: function () { return extended_vehicle_models_1.ParkingChargeableData; } });
Object.defineProperty(exports, "ShareableCapabilities", { enumerable: true, get: function () { return extended_vehicle_models_1.ShareableCapabilities; } });
Object.defineProperty(exports, "ShareableCapabilityGroup", { enumerable: true, get: function () { return extended_vehicle_models_1.ShareableCapabilityGroup; } });
Object.defineProperty(exports, "TariffPricing", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffPricing; } });
/** Parse an electric vehicle's driving history with strict list nullability. */
function parse_driving_history(...__args) {
    let history, index, path, summaries, summary_values, trip_values, trips, value, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse an electric vehicle's driving history with strict list nullability. */
    vehicle = _runtime_1.py.call(_extended_vehicle_value_parsing_1._vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "drivingHistory"))))) {
        return null;
    }
    path = "vehicle.drivingHistory";
    history = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["drivingHistory"], null), path], null);
    if (_runtime_1.py.truth(((history === null)))) {
        return null;
    }
    summary_values = _runtime_1.py.call(_extended_vehicle_value_parsing_1._list, [_runtime_1.py.call(_runtime_1.py.attr(history, "get"), ["tripSummaries"], null), (_runtime_1.py.str(path) + ".tripSummaries")], null);
    summaries = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [summary_values], null))) {
        _runtime_1.py.call(_runtime_1.py.attr(summaries, "append"), [_runtime_1.py.call(_extended_vehicle_driving_parsing_1._parse_driving_history_summary, [value, (_runtime_1.py.str(path) + ".tripSummaries[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    trip_values = _runtime_1.py.call(_extended_vehicle_value_parsing_1._list, [_runtime_1.py.call(_runtime_1.py.attr(history, "get"), ["trips"], null), (_runtime_1.py.str(path) + ".trips")], null);
    trips = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [trip_values], null))) {
        _runtime_1.py.call(_runtime_1.py.attr(trips, "append"), [_runtime_1.py.call(_extended_vehicle_driving_parsing_1._parse_driving_history_trip, [value, (_runtime_1.py.str(path) + ".trips[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.DrivingHistory, [_runtime_1.py.call(_runtime_1.py.tuple, [summaries], null), _runtime_1.py.call(_runtime_1.py.tuple, [trips], null)], null);
}
/** Parse nearby charging stations while preserving nullable list items. */
function parse_ev_charge_stations(...__args) {
    let index, path, stations, value, values, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nearby charging stations while preserving nullable list items. */
    vehicle = _runtime_1.py.call(_extended_vehicle_value_parsing_1._vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "evChargeStations"))))) {
        return null;
    }
    path = "vehicle.evChargeStations";
    values = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["evChargeStations"], null), path], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    stations = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((value === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(stations, "append"), [null], null);
            continue;
        }
        _runtime_1.py.call(_runtime_1.py.attr(stations, "append"), [_runtime_1.py.call(_extended_vehicle_location_parsing_1._parse_ev_charge_station, [value, (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [stations], null);
}
/** Parse the raw eVehicle eligibility status wrapper. */
function parse_e_vehicle_eligibility(...__args) {
    let eligibility_data, result, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw eVehicle eligibility status wrapper. */
    root_field = "eVehicleEligibility";
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    result = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    eligibility_data = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["data"], null), (_runtime_1.py.str(root_field) + ".data")], null);
    return _runtime_1.py.call(extended_vehicle_models_1.EVehicleEligibility, [], Object.assign({}, { "status_code": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": (_runtime_1.py.truth(((eligibility_data !== null))) ? _runtime_1.py.call(extended_vehicle_models_1.EVehicleEligibilityData, [], Object.assign({}, { "vin": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(eligibility_data, "get"), ["vin"], null), (_runtime_1.py.str(root_field) + ".data.vin")], null) }, { "v1g_eligible": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(eligibility_data, "get"), ["v1GEligible"], null), (_runtime_1.py.str(root_field) + ".data.v1GEligible")], null) })) : null) }));
}
/** Parse the last known camera usage counter for an AVK2 vehicle. */
function parse_last_known_camera_usage_counter(...__args) {
    let path, result, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the last known camera usage counter for an AVK2 vehicle. */
    vehicle = _runtime_1.py.call(_extended_vehicle_value_parsing_1._vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "lastKnownCameraUsageCounter"))))) {
        return null;
    }
    path = "vehicle.lastKnownCameraUsageCounter";
    result = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["lastKnownCameraUsageCounter"], null), path], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    return _runtime_1.py.call(extended_vehicle_models_1.LastKnownCameraUsageCounter, [], Object.assign({}, { "counter": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["counter"], null), (_runtime_1.py.str(path) + ".counter")], null) }, { "last_update_time": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["lastUpdateTime"], null), (_runtime_1.py.str(path) + ".lastUpdateTime")], null) }));
}
/** Parse the raw EMP status wrapper and charging-location collection. */
function parse_location_details(...__args) {
    let index, locations, parsed_locations, raw_locations, result, root_field, value;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw EMP status wrapper and charging-location collection. */
    root_field = "locationDetails";
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    result = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    raw_locations = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["data"], null), (_runtime_1.py.str(root_field) + ".data")], null);
    locations = null;
    if (_runtime_1.py.truth(((raw_locations !== null)))) {
        parsed_locations = [];
        for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_locations], null))) {
            if (_runtime_1.py.truth(((value === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_locations, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_locations, "append"), [_runtime_1.py.call(_extended_vehicle_location_parsing_1._parse_emp_location, [value, (_runtime_1.py.str(root_field) + ".data[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        locations = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_locations], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.LocationDetails, [], Object.assign({}, { "status_code": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": locations }));
}
/** Parse the raw EMP parking-chargeability status wrapper. */
function parse_parking_chargeable(...__args) {
    let raw_data, result, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw EMP parking-chargeability status wrapper. */
    root_field = "parkingChargeable";
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    result = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    raw_data = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["data"], null), (_runtime_1.py.str(root_field) + ".data")], null);
    return _runtime_1.py.call(extended_vehicle_models_1.ParkingChargeable, [], Object.assign({}, { "status_code": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": (_runtime_1.py.truth(((raw_data !== null))) ? _runtime_1.py.call(extended_vehicle_models_1.ParkingChargeableData, [], Object.assign({}, { "evse_id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["evseId"], null), (_runtime_1.py.str(root_field) + ".data.evseId")], null) }, { "is_parking_chargeable": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["isParkingChargeable"], null), (_runtime_1.py.str(root_field) + ".data.isParkingChargeable")], null) }, { "is_congestion_chargeable": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["isCongestionChargeable"], null), (_runtime_1.py.str(root_field) + ".data.isCongestionChargeable")], null) })) : null) }));
}
/** Parse shareable capability groups while retaining nullable list items. */
function parse_shareable_capabilities(...__args) {
    let groups, index, path, raw_groups, result, value, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse shareable capability groups while retaining nullable list items. */
    vehicle = _runtime_1.py.call(_extended_vehicle_value_parsing_1._vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "shareableCapabilities"))))) {
        return null;
    }
    path = "vehicle.shareableCapabilities";
    result = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["shareableCapabilities"], null), path], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    raw_groups = _runtime_1.py.call(_extended_vehicle_value_parsing_1._list, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["group"], null), (_runtime_1.py.str(path) + ".group")], null);
    groups = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_groups], null))) {
        if (_runtime_1.py.truth(((value === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(groups, "append"), [null], null);
            continue;
        }
        _runtime_1.py.call(_runtime_1.py.attr(groups, "append"), [_runtime_1.py.call(_extended_vehicle_tariff_parsing_1._parse_shareable_capability_group, [value, (_runtime_1.py.str(path) + ".group[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.ShareableCapabilities, [_runtime_1.py.call(_runtime_1.py.tuple, [groups], null)], null);
}
/** Parse the raw EMP tariff-pricing status wrapper. */
function parse_tariff_pricing(...__args) {
    let raw_data, result, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw EMP tariff-pricing status wrapper. */
    root_field = "tariffPricing";
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    result = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    raw_data = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["data"], null), (_runtime_1.py.str(root_field) + ".data")], null);
    return _runtime_1.py.call(extended_vehicle_models_1.TariffPricing, [], Object.assign({}, { "status_code": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": (_runtime_1.py.truth(((raw_data !== null))) ? _runtime_1.py.call(_extended_vehicle_tariff_parsing_1._parse_tariff_pricing_data, [raw_data, (_runtime_1.py.str(root_field) + ".data")], null) : null) }));
}
//# sourceMappingURL=_extended_vehicle_public_parsing.js.map