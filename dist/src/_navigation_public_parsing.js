"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRoutesHistory = exports.VehiclePointOfInterestDestinations = exports.VehiclePlannedRoutes = exports.VehicleJourneys = exports.UnsavedTJunctionLocation = exports.TJunctionLocations = exports.SavedTJunctionLocation = exports.RouteHistoryEntry = exports.PointOfInterestDestinationFolder = exports.PointOfInterestDestination = exports.PlannedRoute = exports.JourneyWaypoint = exports.Journey = exports.EVWaypointUnableToCompleteRouteError = exports.EVWaypointMinimumRequirementNotMetError = exports.EVWaypointLimitReachedError = exports.RouteStatus = exports.ResponseError = exports._parse_optional_temperature = exports._parse_optional_notification_interval = exports._parse_optional_distance = exports._parse_optional_coordinate = exports._parse_optional_address = exports._parse_navigation_route_waypoints = exports._parse_ev_waypoint_error_details = exports._parse_ev_waypoint = exports._string = exports._optional_object = exports._object = exports._nullable_string = exports._nullable_list = exports._nullable_enum = exports._nullable_datetime = exports._nullable_bool = exports._list = exports._float = exports._datetime = void 0;
exports.parse_vehicle_journeys = parse_vehicle_journeys;
exports.parse_vehicle_planned_routes = parse_vehicle_planned_routes;
exports.parse_vehicle_routes_history = parse_vehicle_routes_history;
exports.parse_vehicle_point_of_interest_destinations = parse_vehicle_point_of_interest_destinations;
exports.parse_t_junction_locations = parse_t_junction_locations;
exports.parse_vehicle_ev_waypoints = parse_vehicle_ev_waypoints;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _navigation_value_parsing_1 = require("./_navigation_value_parsing");
Object.defineProperty(exports, "_datetime", { enumerable: true, get: function () { return _navigation_value_parsing_1._datetime; } });
Object.defineProperty(exports, "_float", { enumerable: true, get: function () { return _navigation_value_parsing_1._float; } });
Object.defineProperty(exports, "_list", { enumerable: true, get: function () { return _navigation_value_parsing_1._list; } });
Object.defineProperty(exports, "_nullable_bool", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_bool; } });
Object.defineProperty(exports, "_nullable_datetime", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_datetime; } });
Object.defineProperty(exports, "_nullable_enum", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_enum; } });
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_nullable_string", { enumerable: true, get: function () { return _navigation_value_parsing_1._nullable_string; } });
Object.defineProperty(exports, "_object", { enumerable: true, get: function () { return _navigation_value_parsing_1._object; } });
Object.defineProperty(exports, "_optional_object", { enumerable: true, get: function () { return _navigation_value_parsing_1._optional_object; } });
Object.defineProperty(exports, "_string", { enumerable: true, get: function () { return _navigation_value_parsing_1._string; } });
const _navigation_waypoint_parsing_1 = require("./_navigation_waypoint_parsing");
Object.defineProperty(exports, "_parse_ev_waypoint", { enumerable: true, get: function () { return _navigation_waypoint_parsing_1._parse_ev_waypoint; } });
Object.defineProperty(exports, "_parse_ev_waypoint_error_details", { enumerable: true, get: function () { return _navigation_waypoint_parsing_1._parse_ev_waypoint_error_details; } });
Object.defineProperty(exports, "_parse_navigation_route_waypoints", { enumerable: true, get: function () { return _navigation_waypoint_parsing_1._parse_navigation_route_waypoints; } });
Object.defineProperty(exports, "_parse_optional_address", { enumerable: true, get: function () { return _navigation_waypoint_parsing_1._parse_optional_address; } });
Object.defineProperty(exports, "_parse_optional_coordinate", { enumerable: true, get: function () { return _navigation_waypoint_parsing_1._parse_optional_coordinate; } });
Object.defineProperty(exports, "_parse_optional_distance", { enumerable: true, get: function () { return _navigation_waypoint_parsing_1._parse_optional_distance; } });
Object.defineProperty(exports, "_parse_optional_notification_interval", { enumerable: true, get: function () { return _navigation_waypoint_parsing_1._parse_optional_notification_interval; } });
Object.defineProperty(exports, "_parse_optional_temperature", { enumerable: true, get: function () { return _navigation_waypoint_parsing_1._parse_optional_temperature; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "RouteStatus", { enumerable: true, get: function () { return navigation_inputs_1.RouteStatus; } });
const navigation_models_1 = require("./navigation_models");
Object.defineProperty(exports, "EVWaypointLimitReachedError", { enumerable: true, get: function () { return navigation_models_1.EVWaypointLimitReachedError; } });
Object.defineProperty(exports, "EVWaypointMinimumRequirementNotMetError", { enumerable: true, get: function () { return navigation_models_1.EVWaypointMinimumRequirementNotMetError; } });
Object.defineProperty(exports, "EVWaypointUnableToCompleteRouteError", { enumerable: true, get: function () { return navigation_models_1.EVWaypointUnableToCompleteRouteError; } });
Object.defineProperty(exports, "Journey", { enumerable: true, get: function () { return navigation_models_1.Journey; } });
Object.defineProperty(exports, "JourneyWaypoint", { enumerable: true, get: function () { return navigation_models_1.JourneyWaypoint; } });
Object.defineProperty(exports, "PlannedRoute", { enumerable: true, get: function () { return navigation_models_1.PlannedRoute; } });
Object.defineProperty(exports, "PointOfInterestDestination", { enumerable: true, get: function () { return navigation_models_1.PointOfInterestDestination; } });
Object.defineProperty(exports, "PointOfInterestDestinationFolder", { enumerable: true, get: function () { return navigation_models_1.PointOfInterestDestinationFolder; } });
Object.defineProperty(exports, "RouteHistoryEntry", { enumerable: true, get: function () { return navigation_models_1.RouteHistoryEntry; } });
Object.defineProperty(exports, "SavedTJunctionLocation", { enumerable: true, get: function () { return navigation_models_1.SavedTJunctionLocation; } });
Object.defineProperty(exports, "TJunctionLocations", { enumerable: true, get: function () { return navigation_models_1.TJunctionLocations; } });
Object.defineProperty(exports, "UnsavedTJunctionLocation", { enumerable: true, get: function () { return navigation_models_1.UnsavedTJunctionLocation; } });
Object.defineProperty(exports, "VehicleJourneys", { enumerable: true, get: function () { return navigation_models_1.VehicleJourneys; } });
Object.defineProperty(exports, "VehiclePlannedRoutes", { enumerable: true, get: function () { return navigation_models_1.VehiclePlannedRoutes; } });
Object.defineProperty(exports, "VehiclePointOfInterestDestinations", { enumerable: true, get: function () { return navigation_models_1.VehiclePointOfInterestDestinations; } });
Object.defineProperty(exports, "VehicleRoutesHistory", { enumerable: true, get: function () { return navigation_models_1.VehicleRoutesHistory; } });
/** Parse a vehicle's nullable journey collection. */
function parse_vehicle_journeys(...__args) {
    let index, journey, journeys, path, raw_journey, raw_journeys, raw_waypoint, raw_waypoints, vehicle, waypoint, waypoint_index, waypoints;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a vehicle's nullable journey collection. */
    vehicle = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    if (_runtime_1.py.truth((!_runtime_1.py.contains(vehicle, "journeys")))) {
        return null;
    }
    raw_journeys = _runtime_1.py.call(_navigation_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["journeys"], null), "vehicle.journeys"], null);
    if (_runtime_1.py.truth(((raw_journeys === null)))) {
        return _runtime_1.py.call(navigation_models_1.VehicleJourneys, [null], null);
    }
    journeys = [];
    for ([index, raw_journey] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_journeys], null))) {
        if (_runtime_1.py.truth(((raw_journey === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(journeys, "append"), [null], null);
            continue;
        }
        journey = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_journey, ("vehicle.journeys[" + _runtime_1.py.str(index) + "]")], null);
        raw_waypoints = _runtime_1.py.call(_navigation_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(journey, "get"), ["waypoints"], null), ("vehicle.journeys[" + _runtime_1.py.str(index) + "].waypoints")], null);
        if (_runtime_1.py.truth(((raw_waypoints === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(journeys, "append"), [_runtime_1.py.call(navigation_models_1.Journey, [null], null)], null);
            continue;
        }
        waypoints = [];
        for ([waypoint_index, raw_waypoint] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_waypoints], null))) {
            if (_runtime_1.py.truth(((raw_waypoint === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(waypoints, "append"), [null], null);
                continue;
            }
            path = ("vehicle.journeys[" + _runtime_1.py.str(index) + "].waypoints[" + _runtime_1.py.str(waypoint_index) + "]");
            waypoint = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_waypoint, path], null);
            _runtime_1.py.call(_runtime_1.py.attr(waypoints, "append"), [_runtime_1.py.call(navigation_models_1.JourneyWaypoint, [], Object.assign({}, { "id": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(waypoint, "get"), ["id"], null), (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(waypoint, "get"), ["name"], null), (_runtime_1.py.str(path) + ".name")], null) }, { "address": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_address, [_runtime_1.py.call(_runtime_1.py.attr(waypoint, "get"), ["address"], null), (_runtime_1.py.str(path) + ".address")], null) }, { "coordinate": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_coordinate, [_runtime_1.py.call(_runtime_1.py.attr(waypoint, "get"), ["coordinate"], null), (_runtime_1.py.str(path) + ".coordinate")], null) }, { "phone_number": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(waypoint, "get"), ["phoneNumber"], null), (_runtime_1.py.str(path) + ".phoneNumber")], null) }))], null);
        }
        _runtime_1.py.call(_runtime_1.py.attr(journeys, "append"), [_runtime_1.py.call(navigation_models_1.Journey, [_runtime_1.py.call(_runtime_1.py.tuple, [waypoints], null)], null)], null);
    }
    return _runtime_1.py.call(navigation_models_1.VehicleJourneys, [_runtime_1.py.call(_runtime_1.py.tuple, [journeys], null)], null);
}
/** Parse a vehicle's nullable saved planned routes. */
function parse_vehicle_planned_routes(...__args) {
    let index, path, raw_route, raw_routes, route, routes, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a vehicle's nullable saved planned routes. */
    vehicle = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    if (_runtime_1.py.truth((!_runtime_1.py.contains(vehicle, "plannedRoutes")))) {
        return null;
    }
    raw_routes = _runtime_1.py.call(_navigation_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["plannedRoutes"], null), "vehicle.plannedRoutes"], null);
    if (_runtime_1.py.truth(((raw_routes === null)))) {
        return _runtime_1.py.call(navigation_models_1.VehiclePlannedRoutes, [null], null);
    }
    routes = [];
    for ([index, raw_route] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_routes], null))) {
        if (_runtime_1.py.truth(((raw_route === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(routes, "append"), [null], null);
            continue;
        }
        path = ("vehicle.plannedRoutes[" + _runtime_1.py.str(index) + "]");
        route = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_route, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(routes, "append"), [_runtime_1.py.call(navigation_models_1.PlannedRoute, [], Object.assign({}, { "id": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["id"], null), (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["name"], null), (_runtime_1.py.str(path) + ".name")], null) }, { "estimated_time_of_departure": _runtime_1.py.call(_navigation_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["estimatedTimeOfDeparture"], null), (_runtime_1.py.str(path) + ".estimatedTimeOfDeparture")], null) }, { "estimated_time_of_arrival": _runtime_1.py.call(_navigation_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["estimatedTimeOfArrival"], null), (_runtime_1.py.str(path) + ".estimatedTimeOfArrival")], null) }, { "distance": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_distance, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["distance"], null), (_runtime_1.py.str(path) + ".distance")], null) }, { "temperature": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_temperature, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["temperature"], null), (_runtime_1.py.str(path) + ".temperature")], null) }, { "routes": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_navigation_route_waypoints, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["routes"], null), (_runtime_1.py.str(path) + ".routes")], null) }, { "avoid_highway": _runtime_1.py.call(_navigation_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["avoidHighway"], null), (_runtime_1.py.str(path) + ".avoidHighway")], null) }, { "avoid_tolls": _runtime_1.py.call(_navigation_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["avoidTolls"], null), (_runtime_1.py.str(path) + ".avoidTolls")], null) }, { "avoid_ferries": _runtime_1.py.call(_navigation_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["avoidFerries"], null), (_runtime_1.py.str(path) + ".avoidFerries")], null) }, { "should_recalculate_route": _runtime_1.py.call(_navigation_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["shouldRecalculateRoute"], null), (_runtime_1.py.str(path) + ".shouldRecalculateRoute")], null) }, { "should_enable_notification": _runtime_1.py.call(_navigation_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["shouldEnableNotification"], null), (_runtime_1.py.str(path) + ".shouldEnableNotification")], null) }, { "notification_interval": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_notification_interval, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["notificationInterval"], null), (_runtime_1.py.str(path) + ".notificationInterval")], null) }, { "arrival_flag": _runtime_1.py.call(_navigation_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["arrivalFlag"], null), (_runtime_1.py.str(path) + ".arrivalFlag")], null) }, { "departure_flag": _runtime_1.py.call(_navigation_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(route, "get"), ["departureFlag"], null), (_runtime_1.py.str(path) + ".departureFlag")], null) }))], null);
    }
    return _runtime_1.py.call(navigation_models_1.VehiclePlannedRoutes, [_runtime_1.py.call(_runtime_1.py.tuple, [routes], null)], null);
}
/** Parse a vehicle's nullable route-history collection. */
function parse_vehicle_routes_history(...__args) {
    let entries, entry, index, path, raw_entries, raw_entry, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a vehicle's nullable route-history collection. */
    vehicle = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    if (_runtime_1.py.truth((!_runtime_1.py.contains(vehicle, "routeHistory")))) {
        return null;
    }
    raw_entries = _runtime_1.py.call(_navigation_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["routeHistory"], null), "vehicle.routeHistory"], null);
    if (_runtime_1.py.truth(((raw_entries === null)))) {
        return _runtime_1.py.call(navigation_models_1.VehicleRoutesHistory, [null], null);
    }
    entries = [];
    for ([index, raw_entry] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_entries], null))) {
        if (_runtime_1.py.truth(((raw_entry === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(entries, "append"), [null], null);
            continue;
        }
        path = ("vehicle.routeHistory[" + _runtime_1.py.str(index) + "]");
        entry = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_entry, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(entries, "append"), [_runtime_1.py.call(navigation_models_1.RouteHistoryEntry, [], Object.assign({}, { "id": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["id"], null), (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["name"], null), (_runtime_1.py.str(path) + ".name")], null) }, { "estimated_time_of_departure": _runtime_1.py.call(_navigation_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["estimatedTimeOfDeparture"], null), (_runtime_1.py.str(path) + ".estimatedTimeOfDeparture")], null) }, { "estimated_time_of_arrival": _runtime_1.py.call(_navigation_value_parsing_1._nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["estimatedTimeOfArrival"], null), (_runtime_1.py.str(path) + ".estimatedTimeOfArrival")], null) }, { "status": _runtime_1.py.call(_navigation_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["status"], null), navigation_inputs_1.RouteStatus, (_runtime_1.py.str(path) + ".status")], null) }, { "distance": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_distance, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["distance"], null), (_runtime_1.py.str(path) + ".distance")], null) }, { "temperature": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_temperature, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["temperature"], null), (_runtime_1.py.str(path) + ".temperature")], null) }, { "routes": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_navigation_route_waypoints, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["routes"], null), (_runtime_1.py.str(path) + ".routes")], null) }, { "arrival_flag": _runtime_1.py.call(_navigation_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["arrivalFlag"], null), (_runtime_1.py.str(path) + ".arrivalFlag")], null) }, { "departure_flag": _runtime_1.py.call(_navigation_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(entry, "get"), ["departureFlag"], null), (_runtime_1.py.str(path) + ".departureFlag")], null) }))], null);
    }
    return _runtime_1.py.call(navigation_models_1.VehicleRoutesHistory, [_runtime_1.py.call(_runtime_1.py.tuple, [entries], null)], null);
}
/** Parse a vehicle's nullable point-of-interest folders. */
function parse_vehicle_point_of_interest_destinations(...__args) {
    let container, destination, destination_index, destination_path, destinations, folder, folders, index, parsed_destinations, path, raw_destination, raw_destinations, raw_folder, raw_folders, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a vehicle's nullable point-of-interest folders. */
    vehicle = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    if (_runtime_1.py.truth((!_runtime_1.py.contains(vehicle, "pointOfInterestDestination")))) {
        return null;
    }
    container = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["pointOfInterestDestination"], null), "vehicle.pointOfInterestDestination"], null);
    if (_runtime_1.py.truth(((container === null)))) {
        return null;
    }
    raw_folders = _runtime_1.py.call(_navigation_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(container, "get"), ["folders"], null), "vehicle.pointOfInterestDestination.folders"], null);
    if (_runtime_1.py.truth(((raw_folders === null)))) {
        return _runtime_1.py.call(navigation_models_1.VehiclePointOfInterestDestinations, [null], null);
    }
    folders = [];
    for ([index, raw_folder] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_folders], null))) {
        if (_runtime_1.py.truth(((raw_folder === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(folders, "append"), [null], null);
            continue;
        }
        path = ("vehicle.pointOfInterestDestination.folders[" + _runtime_1.py.str(index) + "]");
        folder = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_folder, path], null);
        raw_destinations = _runtime_1.py.call(_navigation_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(folder, "get"), ["destinations"], null), (_runtime_1.py.str(path) + ".destinations")], null);
        destinations = null;
        if (_runtime_1.py.truth(((raw_destinations !== null)))) {
            parsed_destinations = [];
            for ([destination_index, raw_destination] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_destinations], null))) {
                if (_runtime_1.py.truth(((raw_destination === null)))) {
                    _runtime_1.py.call(_runtime_1.py.attr(parsed_destinations, "append"), [null], null);
                    continue;
                }
                destination_path = (_runtime_1.py.str(path) + ".destinations[" + _runtime_1.py.str(destination_index) + "]");
                destination = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_destination, destination_path], null);
                _runtime_1.py.call(_runtime_1.py.attr(parsed_destinations, "append"), [_runtime_1.py.call(navigation_models_1.PointOfInterestDestination, [], Object.assign({}, { "id": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(destination, "get"), ["id"], null), (_runtime_1.py.str(destination_path) + ".id")], null) }, { "phone_number": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(destination, "get"), ["phoneNumber"], null), (_runtime_1.py.str(destination_path) + ".phoneNumber")], null) }, { "name": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(destination, "get"), ["name"], null), (_runtime_1.py.str(destination_path) + ".name")], null) }, { "address": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_address, [_runtime_1.py.call(_runtime_1.py.attr(destination, "get"), ["address"], null), (_runtime_1.py.str(destination_path) + ".address")], null) }, { "coordinate": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_coordinate, [_runtime_1.py.call(_runtime_1.py.attr(destination, "get"), ["coordinate"], null), (_runtime_1.py.str(destination_path) + ".coordinate")], null) }))], null);
            }
            destinations = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_destinations], null);
        }
        _runtime_1.py.call(_runtime_1.py.attr(folders, "append"), [_runtime_1.py.call(navigation_models_1.PointOfInterestDestinationFolder, [], Object.assign({}, { "folder_name": _runtime_1.py.call(_navigation_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(folder, "get"), ["folderName"], null), (_runtime_1.py.str(path) + ".folderName")], null) }, { "destinations": destinations }))], null);
    }
    return _runtime_1.py.call(navigation_models_1.VehiclePointOfInterestDestinations, [_runtime_1.py.call(_runtime_1.py.tuple, [folders], null)], null);
}
/** Parse saved and unsaved T-junction camera locations. */
function parse_t_junction_locations(...__args) {
    let index, location, path, raw_location, raw_saved, raw_unsaved, saved, unsaved, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse saved and unsaved T-junction camera locations. */
    vehicle = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(_runtime_1.py.and(() => (!_runtime_1.py.contains(vehicle, "unsavedTJunctionLocations")), () => (!_runtime_1.py.contains(vehicle, "savedTJunctionLocations"))))) {
        return null;
    }
    raw_unsaved = _runtime_1.py.call(_navigation_value_parsing_1._list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["unsavedTJunctionLocations"], null), "vehicle.unsavedTJunctionLocations"], null);
    raw_saved = _runtime_1.py.call(_navigation_value_parsing_1._list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["savedTJunctionLocations"], null), "vehicle.savedTJunctionLocations"], null);
    unsaved = [];
    for ([index, raw_location] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_unsaved], null))) {
        path = ("vehicle.unsavedTJunctionLocations[" + _runtime_1.py.str(index) + "]");
        location = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_location, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(unsaved, "append"), [_runtime_1.py.call(navigation_models_1.UnsavedTJunctionLocation, [], Object.assign({}, { "id": _runtime_1.py.call(_navigation_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["id"], null), (_runtime_1.py.str(path) + ".id")], null) }, { "latitude": _runtime_1.py.call(_navigation_value_parsing_1._float, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["latitude"], null), (_runtime_1.py.str(path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_navigation_value_parsing_1._float, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["longitude"], null), (_runtime_1.py.str(path) + ".longitude")], null) }, { "direction": _runtime_1.py.call(_navigation_value_parsing_1._float, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["direction"], null), (_runtime_1.py.str(path) + ".direction")], null) }, { "launch_date": _runtime_1.py.call(_navigation_value_parsing_1._datetime, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["launchDate"], null), (_runtime_1.py.str(path) + ".launchDate")], null) }, { "address": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_address, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["address"], null), (_runtime_1.py.str(path) + ".address")], null) }))], null);
    }
    saved = [];
    for ([index, raw_location] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_saved], null))) {
        path = ("vehicle.savedTJunctionLocations[" + _runtime_1.py.str(index) + "]");
        location = _runtime_1.py.call(_navigation_value_parsing_1._object, [raw_location, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(saved, "append"), [_runtime_1.py.call(navigation_models_1.SavedTJunctionLocation, [], Object.assign({}, { "id": _runtime_1.py.call(_navigation_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["id"], null), (_runtime_1.py.str(path) + ".id")], null) }, { "latitude": _runtime_1.py.call(_navigation_value_parsing_1._float, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["latitude"], null), (_runtime_1.py.str(path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_navigation_value_parsing_1._float, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["longitude"], null), (_runtime_1.py.str(path) + ".longitude")], null) }, { "direction": _runtime_1.py.call(_navigation_value_parsing_1._float, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["direction"], null), (_runtime_1.py.str(path) + ".direction")], null) }, { "location_name": _runtime_1.py.call(_navigation_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationName"], null), (_runtime_1.py.str(path) + ".locationName")], null) }, { "address": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_optional_address, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["address"], null), (_runtime_1.py.str(path) + ".address")], null) }))], null);
    }
    return _runtime_1.py.call(navigation_models_1.TJunctionLocations, [_runtime_1.py.call(_runtime_1.py.tuple, [unsaved], null), _runtime_1.py.call(_runtime_1.py.tuple, [saved], null)], null);
}
/** Parse a successful EV route calculation or its typed error branch. */
function parse_vehicle_ev_waypoints(...__args) {
    let result, typename, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a successful EV route calculation or its typed error branch. */
    vehicle = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    result = _runtime_1.py.call(_navigation_value_parsing_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["evWaypoints"], null), "vehicle.evWaypoints"], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_navigation_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["__typename"], null), "vehicle.evWaypoints.__typename"], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "EVWaypoint")))) {
        return _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_ev_waypoint, [result], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "MinimumRequirementNotMetError")))) {
        return _runtime_1.py.call(navigation_models_1.EVWaypointMinimumRequirementNotMetError, [_runtime_1.py.call(_navigation_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["message"], null), "vehicle.evWaypoints.message"], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "LimitReachedError")))) {
        return _runtime_1.py.call(navigation_models_1.EVWaypointLimitReachedError, [_runtime_1.py.call(_navigation_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["message"], null), "vehicle.evWaypoints.message"], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UnableToCompleteRouteError")))) {
        return _runtime_1.py.call(navigation_models_1.EVWaypointUnableToCompleteRouteError, [], Object.assign({}, { "reason": _runtime_1.py.call(_navigation_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["reason"], null), "vehicle.evWaypoints.reason"], null) }, { "message": _runtime_1.py.call(_navigation_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["message"], null), "vehicle.evWaypoints.message"], null) }, { "details": _runtime_1.py.call(_navigation_waypoint_parsing_1._parse_ev_waypoint_error_details, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["details"], null)], null) }));
    }
    throw _runtime_1.py.call(exceptions_1.ResponseError, [("Unsupported vehicle.evWaypoints type: " + _runtime_1.py.str(typename))], null);
}
//# sourceMappingURL=_navigation_public_parsing.js.map