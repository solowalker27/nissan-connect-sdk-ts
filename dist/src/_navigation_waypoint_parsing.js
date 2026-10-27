"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnableToCompleteSubStepErrorDetails = exports.NoChargingStationWithinRangeErrorDetails = exports.NavigationTemperature = exports.NavigationRouteWaypoint = exports.NavigationNotificationInterval = exports.NavigationDistance = exports.NavigationCoordinate = exports.NavigationAddress = exports.MissingBatteryDetailsErrorDetails = exports.EVWaypointStatus = exports.EVWaypointRouteType = exports.EVWaypointRoute = exports.EVWaypoint = exports.RecalculatedWaypointType = exports.NotificationIntervalUnit = exports.TemperatureUnit = exports.DistanceUnit = exports.ResponseError = exports._string = exports._optional_object = exports._object = exports._nullable_string = exports._nullable_list = exports._nullable_int = exports._nullable_float = exports._nullable_enum = exports._nullable_datetime = exports._int = exports._float = exports._enum = void 0;
exports._parse_ev_waypoint = _parse_ev_waypoint;
exports._parse_ev_waypoint_error_details = _parse_ev_waypoint_error_details;
exports._parse_navigation_route_waypoints = _parse_navigation_route_waypoints;
exports._parse_optional_address = _parse_optional_address;
exports._parse_optional_coordinate = _parse_optional_coordinate;
exports._parse_optional_distance = _parse_optional_distance;
exports._parse_optional_temperature = _parse_optional_temperature;
exports._parse_optional_notification_interval = _parse_optional_notification_interval;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _navigation_value_parsing_1 = require("./_navigation_value_parsing");
Object.defineProperty(exports, "_enum", { enumerable: true, get: function () { return _navigation_value_parsing_1._enum; } });
Object.defineProperty(exports, "_float", { enumerable: true, get: function () { return _navigation_value_parsing_1._float; } });
Object.defineProperty(exports, "_int", { enumerable: true, get: function () { return _navigation_value_parsing_1._int; } });
Object.defineProperty(exports, "_nullable_datetime", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_datetime; } });
Object.defineProperty(exports, "_nullable_enum", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_enum; } });
Object.defineProperty(exports, "_nullable_float", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_float; } });
Object.defineProperty(exports, "_nullable_int", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_int; } });
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_nullable_string", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_string; } });
Object.defineProperty(exports, "_object", { enumerable: true, get: function () { return _navigation_value_parsing_1._object; } });
Object.defineProperty(exports, "_optional_object", { enumerable: true, get: function () { return _navigation_value_parsing_1._optional_object; } });
Object.defineProperty(exports, "_string", { enumerable: true, get: function () { return _navigation_value_parsing_1._string; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "TemperatureUnit", { enumerable: true, get: function () { return models_1.TemperatureUnit; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "NotificationIntervalUnit", { enumerable: true, get: function () { return navigation_inputs_1.NotificationIntervalUnit; } });
Object.defineProperty(exports, "RecalculatedWaypointType", { enumerable: true, get: function () { return navigation_inputs_1.RecalculatedWaypointType; } });
const navigation_models_1 = require("./navigation_models");
Object.defineProperty(exports, "EVWaypoint", { enumerable: true, get: function () { return navigation_models_1.EVWaypoint; } });
Object.defineProperty(exports, "EVWaypointRoute", { enumerable: true, get: function () { return navigation_models_1.EVWaypointRoute; } });
Object.defineProperty(exports, "EVWaypointRouteType", { enumerable: true, get: function () { return navigation_models_1.EVWaypointRouteType; } });
Object.defineProperty(exports, "EVWaypointStatus", { enumerable: true, get: function () { return navigation_models_1.EVWaypointStatus; } });
Object.defineProperty(exports, "MissingBatteryDetailsErrorDetails", { enumerable: true, get: function () { return navigation_models_1.MissingBatteryDetailsErrorDetails; } });
Object.defineProperty(exports, "NavigationAddress", { enumerable: true, get: function () { return navigation_models_1.NavigationAddress; } });
Object.defineProperty(exports, "NavigationCoordinate", { enumerable: true, get: function () { return navigation_models_1.NavigationCoordinate; } });
Object.defineProperty(exports, "NavigationDistance", { enumerable: true, get: function () { return navigation_models_1.NavigationDistance; } });
Object.defineProperty(exports, "NavigationNotificationInterval", { enumerable: true, get: function () { return navigation_models_1.NavigationNotificationInterval; } });
Object.defineProperty(exports, "NavigationRouteWaypoint", { enumerable: true, get: function () { return navigation_models_1.NavigationRouteWaypoint; } });
Object.defineProperty(exports, "NavigationTemperature", { enumerable: true, get: function () { return navigation_models_1.NavigationTemperature; } });
Object.defineProperty(exports, "NoChargingStationWithinRangeErrorDetails", { enumerable: true, get: function () { return navigation_models_1.NoChargingStationWithinRangeErrorDetails; } });
Object.defineProperty(exports, "UnableToCompleteSubStepErrorDetails", { enumerable: true, get: function () { return navigation_models_1.UnableToCompleteSubStepErrorDetails; } });
/** Translated upstream _parse_ev_waypoint. */
function _parse_ev_waypoint(...__args) {
    let index, parsed_routes, path, raw_route, raw_routes, route, routes;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    raw_routes = _runtime_1.py.call(_navigation_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["routes"], null), "vehicle.evWaypoints.routes"], null);
    routes = null;
    if (_runtime_1.py.truth(((raw_routes !== null)))) {
        parsed_routes = [];
        for ([index, raw_route] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_routes], null))) {
            if (_runtime_1.py.truth(((raw_route === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_routes, "append"), [null], null);
                continue;
            }
            path = ("vehicle.evWaypoints.routes[" + _runtime_1.py.str(index) + "]");
            route = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_route, path], null);
            _runtime_1.py.call(_runtime_1.py.attr(parsed_routes, "append"), [_runtime_1.py.call(navigation_models_1.EVWaypointRoute, [], Object.assign({}, { "name": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["name"], null), (_runtime_1.py.str(path) + ".name")], null) }, { "arrival_time": _runtime_1.py.call(_navigation_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["arrivalTime"], null), (_runtime_1.py.str(path) + ".arrivalTime")], null) }, { "charging_time_in_seconds": _runtime_1.py.call(_navigation_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["chargingTimeInSeconds"], null), (_runtime_1.py.str(path) + ".chargingTimeInSeconds")], null) }, { "level": _runtime_1.py.call(_navigation_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["level"], null), (_runtime_1.py.str(path) + ".level")], null) }, { "type": _runtime_1.py.call(_navigation_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["type"], null), navigation_models_1.EVWaypointRouteType, (_runtime_1.py.str(path) + ".type")], null) }, { "address": _runtime_1.py.call(_parse_optional_address, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["address"], null), (_runtime_1.py.str(path) + ".address")], null) }, { "location": _runtime_1.py.call(_parse_optional_coordinate, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["location"], null), (_runtime_1.py.str(path) + ".location")], null) }, { "status": _runtime_1.py.call(_navigation_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["status"], null), navigation_models_1.EVWaypointStatus, (_runtime_1.py.str(path) + ".status")], null) }, { "charging_output": _runtime_1.py.call(_navigation_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["chargingOutput"], null), (_runtime_1.py.str(path) + ".chargingOutput")], null) }))], null);
        }
        routes = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_routes], null);
    }
    return _runtime_1.py.call(navigation_models_1.EVWaypoint, [], Object.assign({}, { "departure_time": _runtime_1.py.call(_navigation_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["departureTime"], null), "vehicle.evWaypoints.departureTime"], null) }, { "arrival_time": _runtime_1.py.call(_navigation_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["arrivalTime"], null), "vehicle.evWaypoints.arrivalTime"], null) }, { "total_charging_time_in_seconds": _runtime_1.py.call(_navigation_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["totalChargingTimeInSeconds"], null), "vehicle.evWaypoints.totalChargingTimeInSeconds"], null) }, { "total_travel_time_in_seconds": _runtime_1.py.call(_navigation_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["totalTravelTimeInSeconds"], null), "vehicle.evWaypoints.totalTravelTimeInSeconds"], null) }, { "total_distance": _runtime_1.py.call(_parse_optional_distance, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["totalDistance"], null), "vehicle.evWaypoints.totalDistance"], null) }, { "routes": routes }));
}
/** Translated upstream _parse_ev_waypoint_error_details. */
function _parse_ev_waypoint_error_details(...__args) {
    let details, typename;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    details = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [value, "vehicle.evWaypoints.details"], null);
    if (_runtime_1.py.truth(((details === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_navigation_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["__typename"], null), "vehicle.evWaypoints.details.__typename"], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "MissingBatteryDetailsErrorDetails")))) {
        return _runtime_1.py.call(navigation_models_1.MissingBatteryDetailsErrorDetails, [], Object.assign({}, { "battery_capacity": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["batteryCapacity"], null), "vehicle.evWaypoints.details.batteryCapacity"], null) }, { "starting_battery_level": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["startingBatteryLevel"], null), "vehicle.evWaypoints.details.startingBatteryLevel"], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NoChargingStationWithinRangeErrorDetails")))) {
        return _runtime_1.py.call(navigation_models_1.NoChargingStationWithinRangeErrorDetails, [], Object.assign({}, { "center": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["center"], null), "vehicle.evWaypoints.details.center"], null) }, { "radius": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["radius"], null), "vehicle.evWaypoints.details.radius"], null) }, { "charging_connectors": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["chargingConnectors"], null), "vehicle.evWaypoints.details.chargingConnectors"], null) }, { "min_power": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["minPower"], null), "vehicle.evWaypoints.details.minPower"], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UnableToCompleteSubStepErrorDetails")))) {
        return _runtime_1.py.call(navigation_models_1.UnableToCompleteSubStepErrorDetails, [], Object.assign({}, { "start": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["start"], null), "vehicle.evWaypoints.details.start"], null) }, { "end": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["end"], null), "vehicle.evWaypoints.details.end"], null) }, { "distance": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["distance"], null), "vehicle.evWaypoints.details.distance"], null) }, { "speed": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["speed"], null), "vehicle.evWaypoints.details.speed"], null) }, { "slope": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["slope"], null), "vehicle.evWaypoints.details.slope"], null) }, { "starting_battery": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["startingBattery"], null), "vehicle.evWaypoints.details.startingBattery"], null) }, { "battery_capacity": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["batteryCapacity"], null), "vehicle.evWaypoints.details.batteryCapacity"], null) }, { "battery_consumption": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["batteryConsumption"], null), "vehicle.evWaypoints.details.batteryConsumption"], null) }, { "soc_after_charging_near_start": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["socAfterChargingNearStart"], null), "vehicle.evWaypoints.details.socAfterChargingNearStart"], null) }, { "minimum_battery": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["minimumBattery"], null), "vehicle.evWaypoints.details.minimumBattery"], null) }, { "charging_station_max_power": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["chargingStationMaxPower"], null), "vehicle.evWaypoints.details.chargingStationMaxPower"], null) }));
    }
    throw _runtime_1.py.call(exceptions_1.ResponseError, [("Unsupported vehicle.evWaypoints.details type: " + _runtime_1.py.str(typename))], null);
}
/** Translated upstream _parse_navigation_route_waypoints. */
function _parse_navigation_route_waypoints(...__args) {
    let index, item_path, raw_route, raw_routes, route, routes;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_routes = _runtime_1.py.call(_navigation_value_parsing_1._nullable_list, [value, path], null);
    if (_runtime_1.py.truth(((raw_routes === null)))) {
        return null;
    }
    routes = [];
    for ([index, raw_route] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_routes], null))) {
        if (_runtime_1.py.truth(((raw_route === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(routes, "append"), [null], null);
            continue;
        }
        item_path = (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]");
        route = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_route, item_path], null);
        _runtime_1.py.call(_runtime_1.py.attr(routes, "append"), [_runtime_1.py.call(navigation_models_1.NavigationRouteWaypoint, [], Object.assign({}, { "name": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["name"], null), (_runtime_1.py.str(item_path) + ".name")], null) }, { "phone_number": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["phoneNumber"], null), (_runtime_1.py.str(item_path) + ".phoneNumber")], null) }, { "address": _runtime_1.py.call(_parse_optional_address, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["address"], null), (_runtime_1.py.str(item_path) + ".address")], null) }, { "location": _runtime_1.py.call(_parse_optional_coordinate, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["location"], null), (_runtime_1.py.str(item_path) + ".location")], null) }, { "recalculated_waypoint_type": _runtime_1.py.call(_navigation_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["recalculatedWaypointType"], null), navigation_inputs_1.RecalculatedWaypointType, (_runtime_1.py.str(item_path) + ".recalculatedWaypointType")], null) }, { "charging_output": _runtime_1.py.call(_navigation_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["chargingOutput"], null), (_runtime_1.py.str(item_path) + ".chargingOutput")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [routes], null);
}
/** Translated upstream _parse_optional_address. */
function _parse_optional_address(...__args) {
    let address;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    address = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [value, path], null);
    if (_runtime_1.py.truth(((address === null)))) {
        return null;
    }
    return _runtime_1.py.call(navigation_models_1.NavigationAddress, [], Object.assign({}, { "address1": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["address1"], null), (_runtime_1.py.str(path) + ".address1")], null) }, { "address2": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["address2"], null), (_runtime_1.py.str(path) + ".address2")], null) }, { "city": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["city"], null), (_runtime_1.py.str(path) + ".city")], null) }, { "state": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["state"], null), (_runtime_1.py.str(path) + ".state")], null) }, { "postal_code": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["postalCode"], null), (_runtime_1.py.str(path) + ".postalCode")], null) }, { "country": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["country"], null), (_runtime_1.py.str(path) + ".country")], null) }));
}
/** Translated upstream _parse_optional_coordinate. */
function _parse_optional_coordinate(...__args) {
    let coordinate;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    coordinate = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [value, path], null);
    if (_runtime_1.py.truth(((coordinate === null)))) {
        return null;
    }
    return _runtime_1.py.call(navigation_models_1.NavigationCoordinate, [], Object.assign({}, { "latitude": _runtime_1.py.call(_navigation_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(coordinate, "get"), ["latitude"], null), (_runtime_1.py.str(path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_navigation_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(coordinate, "get"), ["longitude"], null), (_runtime_1.py.str(path) + ".longitude")], null) }));
}
/** Translated upstream _parse_optional_distance. */
function _parse_optional_distance(...__args) {
    let distance;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    distance = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [value, path], null);
    if (_runtime_1.py.truth(((distance === null)))) {
        return null;
    }
    return _runtime_1.py.call(navigation_models_1.NavigationDistance, [], Object.assign({}, { "value": _runtime_1.py.call(_navigation_value_parsing_1._int, [_runtime_1.py.call(_runtime_1.py.attr(distance, "get"), ["value"], null), (_runtime_1.py.str(path) + ".value")], null) }, { "unit": _runtime_1.py.call(_navigation_value_parsing_1._enum, [_runtime_1.py.call(_runtime_1.py.attr(distance, "get"), ["unit"], null), models_1.DistanceUnit, (_runtime_1.py.str(path) + ".unit")], null) }));
}
/** Translated upstream _parse_optional_temperature. */
function _parse_optional_temperature(...__args) {
    let temperature;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    temperature = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [value, path], null);
    if (_runtime_1.py.truth(((temperature === null)))) {
        return null;
    }
    return _runtime_1.py.call(navigation_models_1.NavigationTemperature, [], Object.assign({}, { "value": _runtime_1.py.call(_navigation_value_parsing_1._float, [_runtime_1.py.call(_runtime_1.py.attr(temperature, "get"), ["value"], null), (_runtime_1.py.str(path) + ".value")], null) }, { "unit": _runtime_1.py.call(_navigation_value_parsing_1._enum, [_runtime_1.py.call(_runtime_1.py.attr(temperature, "get"), ["unit"], null), models_1.TemperatureUnit, (_runtime_1.py.str(path) + ".unit")], null) }));
}
/** Translated upstream _parse_optional_notification_interval. */
function _parse_optional_notification_interval(...__args) {
    let interval;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    interval = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [value, path], null);
    if (_runtime_1.py.truth(((interval === null)))) {
        return null;
    }
    return _runtime_1.py.call(navigation_models_1.NavigationNotificationInterval, [], Object.assign({}, { "value": _runtime_1.py.call(_navigation_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(interval, "get"), ["value"], null), (_runtime_1.py.str(path) + ".value")], null) }, { "unit": _runtime_1.py.call(_navigation_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(interval, "get"), ["unit"], null), navigation_inputs_1.NotificationIntervalUnit, (_runtime_1.py.str(path) + ".unit")], null) }));
}
//# sourceMappingURL=_navigation_waypoint_parsing.js.map