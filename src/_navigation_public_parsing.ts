// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _datetime, _float, _list, _nullable_bool, _nullable_datetime, _nullable_enum, _nullable_list, _nullable_string, _object, _optional_object, _string } from "./_navigation_value_parsing";
export { _datetime, _float, _list, _nullable_bool, _nullable_datetime, _nullable_enum, _nullable_list, _nullable_string, _object, _optional_object, _string };

import { _parse_ev_waypoint, _parse_ev_waypoint_error_details, _parse_navigation_route_waypoints, _parse_optional_address, _parse_optional_coordinate, _parse_optional_distance, _parse_optional_notification_interval, _parse_optional_temperature } from "./_navigation_waypoint_parsing";
export { _parse_ev_waypoint, _parse_ev_waypoint_error_details, _parse_navigation_route_waypoints, _parse_optional_address, _parse_optional_coordinate, _parse_optional_distance, _parse_optional_notification_interval, _parse_optional_temperature };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { RouteStatus } from "./navigation_inputs";
export { RouteStatus };

import { EVWaypointLimitReachedError, EVWaypointMinimumRequirementNotMetError, EVWaypointResult, EVWaypointUnableToCompleteRouteError, Journey, JourneyWaypoint, PlannedRoute, PointOfInterestDestination, PointOfInterestDestinationFolder, RouteHistoryEntry, SavedTJunctionLocation, TJunctionLocations, UnsavedTJunctionLocation, VehicleJourneys, VehiclePlannedRoutes, VehiclePointOfInterestDestinations, VehicleRoutesHistory } from "./navigation_models";
export { EVWaypointLimitReachedError, EVWaypointMinimumRequirementNotMetError, EVWaypointResult, EVWaypointUnableToCompleteRouteError, Journey, JourneyWaypoint, PlannedRoute, PointOfInterestDestination, PointOfInterestDestinationFolder, RouteHistoryEntry, SavedTJunctionLocation, TJunctionLocations, UnsavedTJunctionLocation, VehicleJourneys, VehiclePlannedRoutes, VehiclePointOfInterestDestinations, VehicleRoutesHistory };

export function parse_vehicle_journeys(data: Record<string, unknown>): VehicleJourneys | null;
/** Parse a vehicle's nullable journey collection. */
export function parse_vehicle_journeys(...__args: any[]): any {
let index, journey, journeys, path, raw_journey, raw_journeys, raw_waypoint, raw_waypoints, vehicle, waypoint, waypoint_index, waypoints;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a vehicle's nullable journey collection. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
if ($.truth((!$.contains(vehicle, "journeys")))) {
return null;
}
raw_journeys = $.call(_nullable_list, [$.call($.attr(vehicle, "get"), ["journeys"], null), "vehicle.journeys"], null);
if ($.truth(((raw_journeys === null)))) {
return $.call(VehicleJourneys, [null], null);
}
journeys = [];
for ([index, raw_journey] of $.iterable($.call($.enumerate, [raw_journeys], null))) {
if ($.truth(((raw_journey === null)))) {
$.call($.attr(journeys, "append"), [null], null);
continue;
}
journey = $.call(_object, [raw_journey, ("vehicle.journeys[" + $.str(index) + "]")], null);
raw_waypoints = $.call(_nullable_list, [$.call($.attr(journey, "get"), ["waypoints"], null), ("vehicle.journeys[" + $.str(index) + "].waypoints")], null);
if ($.truth(((raw_waypoints === null)))) {
$.call($.attr(journeys, "append"), [$.call(Journey, [null], null)], null);
continue;
}
waypoints = [];
for ([waypoint_index, raw_waypoint] of $.iterable($.call($.enumerate, [raw_waypoints], null))) {
if ($.truth(((raw_waypoint === null)))) {
$.call($.attr(waypoints, "append"), [null], null);
continue;
}
path = ("vehicle.journeys[" + $.str(index) + "].waypoints[" + $.str(waypoint_index) + "]");
waypoint = $.call(_object, [raw_waypoint, path], null);
$.call($.attr(waypoints, "append"), [$.call(JourneyWaypoint, [], Object.assign({}, {"id": $.call(_nullable_string, [$.call($.attr(waypoint, "get"), ["id"], null), ($.str(path) + ".id")], null)}, {"name": $.call(_nullable_string, [$.call($.attr(waypoint, "get"), ["name"], null), ($.str(path) + ".name")], null)}, {"address": $.call(_parse_optional_address, [$.call($.attr(waypoint, "get"), ["address"], null), ($.str(path) + ".address")], null)}, {"coordinate": $.call(_parse_optional_coordinate, [$.call($.attr(waypoint, "get"), ["coordinate"], null), ($.str(path) + ".coordinate")], null)}, {"phone_number": $.call(_nullable_string, [$.call($.attr(waypoint, "get"), ["phoneNumber"], null), ($.str(path) + ".phoneNumber")], null)}))], null);
}
$.call($.attr(journeys, "append"), [$.call(Journey, [$.call($.tuple, [waypoints], null)], null)], null);
}
return $.call(VehicleJourneys, [$.call($.tuple, [journeys], null)], null);
}

export function parse_vehicle_planned_routes(data: Record<string, unknown>): VehiclePlannedRoutes | null;
/** Parse a vehicle's nullable saved planned routes. */
export function parse_vehicle_planned_routes(...__args: any[]): any {
let index, path, raw_route, raw_routes, route, routes, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a vehicle's nullable saved planned routes. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
if ($.truth((!$.contains(vehicle, "plannedRoutes")))) {
return null;
}
raw_routes = $.call(_nullable_list, [$.call($.attr(vehicle, "get"), ["plannedRoutes"], null), "vehicle.plannedRoutes"], null);
if ($.truth(((raw_routes === null)))) {
return $.call(VehiclePlannedRoutes, [null], null);
}
routes = [];
for ([index, raw_route] of $.iterable($.call($.enumerate, [raw_routes], null))) {
if ($.truth(((raw_route === null)))) {
$.call($.attr(routes, "append"), [null], null);
continue;
}
path = ("vehicle.plannedRoutes[" + $.str(index) + "]");
route = $.call(_object, [raw_route, path], null);
$.call($.attr(routes, "append"), [$.call(PlannedRoute, [], Object.assign({}, {"id": $.call(_nullable_string, [$.call($.attr(route, "get"), ["id"], null), ($.str(path) + ".id")], null)}, {"name": $.call(_nullable_string, [$.call($.attr(route, "get"), ["name"], null), ($.str(path) + ".name")], null)}, {"estimated_time_of_departure": $.call(_nullable_datetime, [$.call($.attr(route, "get"), ["estimatedTimeOfDeparture"], null), ($.str(path) + ".estimatedTimeOfDeparture")], null)}, {"estimated_time_of_arrival": $.call(_nullable_datetime, [$.call($.attr(route, "get"), ["estimatedTimeOfArrival"], null), ($.str(path) + ".estimatedTimeOfArrival")], null)}, {"distance": $.call(_parse_optional_distance, [$.call($.attr(route, "get"), ["distance"], null), ($.str(path) + ".distance")], null)}, {"temperature": $.call(_parse_optional_temperature, [$.call($.attr(route, "get"), ["temperature"], null), ($.str(path) + ".temperature")], null)}, {"routes": $.call(_parse_navigation_route_waypoints, [$.call($.attr(route, "get"), ["routes"], null), ($.str(path) + ".routes")], null)}, {"avoid_highway": $.call(_nullable_bool, [$.call($.attr(route, "get"), ["avoidHighway"], null), ($.str(path) + ".avoidHighway")], null)}, {"avoid_tolls": $.call(_nullable_bool, [$.call($.attr(route, "get"), ["avoidTolls"], null), ($.str(path) + ".avoidTolls")], null)}, {"avoid_ferries": $.call(_nullable_bool, [$.call($.attr(route, "get"), ["avoidFerries"], null), ($.str(path) + ".avoidFerries")], null)}, {"should_recalculate_route": $.call(_nullable_bool, [$.call($.attr(route, "get"), ["shouldRecalculateRoute"], null), ($.str(path) + ".shouldRecalculateRoute")], null)}, {"should_enable_notification": $.call(_nullable_bool, [$.call($.attr(route, "get"), ["shouldEnableNotification"], null), ($.str(path) + ".shouldEnableNotification")], null)}, {"notification_interval": $.call(_parse_optional_notification_interval, [$.call($.attr(route, "get"), ["notificationInterval"], null), ($.str(path) + ".notificationInterval")], null)}, {"arrival_flag": $.call(_nullable_bool, [$.call($.attr(route, "get"), ["arrivalFlag"], null), ($.str(path) + ".arrivalFlag")], null)}, {"departure_flag": $.call(_nullable_bool, [$.call($.attr(route, "get"), ["departureFlag"], null), ($.str(path) + ".departureFlag")], null)}))], null);
}
return $.call(VehiclePlannedRoutes, [$.call($.tuple, [routes], null)], null);
}

export function parse_vehicle_routes_history(data: Record<string, unknown>): VehicleRoutesHistory | null;
/** Parse a vehicle's nullable route-history collection. */
export function parse_vehicle_routes_history(...__args: any[]): any {
let entries, entry, index, path, raw_entries, raw_entry, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a vehicle's nullable route-history collection. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
if ($.truth((!$.contains(vehicle, "routeHistory")))) {
return null;
}
raw_entries = $.call(_nullable_list, [$.call($.attr(vehicle, "get"), ["routeHistory"], null), "vehicle.routeHistory"], null);
if ($.truth(((raw_entries === null)))) {
return $.call(VehicleRoutesHistory, [null], null);
}
entries = [];
for ([index, raw_entry] of $.iterable($.call($.enumerate, [raw_entries], null))) {
if ($.truth(((raw_entry === null)))) {
$.call($.attr(entries, "append"), [null], null);
continue;
}
path = ("vehicle.routeHistory[" + $.str(index) + "]");
entry = $.call(_object, [raw_entry, path], null);
$.call($.attr(entries, "append"), [$.call(RouteHistoryEntry, [], Object.assign({}, {"id": $.call(_nullable_string, [$.call($.attr(entry, "get"), ["id"], null), ($.str(path) + ".id")], null)}, {"name": $.call(_nullable_string, [$.call($.attr(entry, "get"), ["name"], null), ($.str(path) + ".name")], null)}, {"estimated_time_of_departure": $.call(_nullable_datetime, [$.call($.attr(entry, "get"), ["estimatedTimeOfDeparture"], null), ($.str(path) + ".estimatedTimeOfDeparture")], null)}, {"estimated_time_of_arrival": $.call(_nullable_datetime, [$.call($.attr(entry, "get"), ["estimatedTimeOfArrival"], null), ($.str(path) + ".estimatedTimeOfArrival")], null)}, {"status": $.call(_nullable_enum, [$.call($.attr(entry, "get"), ["status"], null), RouteStatus, ($.str(path) + ".status")], null)}, {"distance": $.call(_parse_optional_distance, [$.call($.attr(entry, "get"), ["distance"], null), ($.str(path) + ".distance")], null)}, {"temperature": $.call(_parse_optional_temperature, [$.call($.attr(entry, "get"), ["temperature"], null), ($.str(path) + ".temperature")], null)}, {"routes": $.call(_parse_navigation_route_waypoints, [$.call($.attr(entry, "get"), ["routes"], null), ($.str(path) + ".routes")], null)}, {"arrival_flag": $.call(_nullable_bool, [$.call($.attr(entry, "get"), ["arrivalFlag"], null), ($.str(path) + ".arrivalFlag")], null)}, {"departure_flag": $.call(_nullable_bool, [$.call($.attr(entry, "get"), ["departureFlag"], null), ($.str(path) + ".departureFlag")], null)}))], null);
}
return $.call(VehicleRoutesHistory, [$.call($.tuple, [entries], null)], null);
}

export function parse_vehicle_point_of_interest_destinations(data: Record<string, unknown>): VehiclePointOfInterestDestinations | null;
/** Parse a vehicle's nullable point-of-interest folders. */
export function parse_vehicle_point_of_interest_destinations(...__args: any[]): any {
let container, destination, destination_index, destination_path, destinations, folder, folders, index, parsed_destinations, path, raw_destination, raw_destinations, raw_folder, raw_folders, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a vehicle's nullable point-of-interest folders. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
if ($.truth((!$.contains(vehicle, "pointOfInterestDestination")))) {
return null;
}
container = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["pointOfInterestDestination"], null), "vehicle.pointOfInterestDestination"], null);
if ($.truth(((container === null)))) {
return null;
}
raw_folders = $.call(_nullable_list, [$.call($.attr(container, "get"), ["folders"], null), "vehicle.pointOfInterestDestination.folders"], null);
if ($.truth(((raw_folders === null)))) {
return $.call(VehiclePointOfInterestDestinations, [null], null);
}
folders = [];
for ([index, raw_folder] of $.iterable($.call($.enumerate, [raw_folders], null))) {
if ($.truth(((raw_folder === null)))) {
$.call($.attr(folders, "append"), [null], null);
continue;
}
path = ("vehicle.pointOfInterestDestination.folders[" + $.str(index) + "]");
folder = $.call(_object, [raw_folder, path], null);
raw_destinations = $.call(_nullable_list, [$.call($.attr(folder, "get"), ["destinations"], null), ($.str(path) + ".destinations")], null);
destinations = null;
if ($.truth(((raw_destinations !== null)))) {
parsed_destinations = [];
for ([destination_index, raw_destination] of $.iterable($.call($.enumerate, [raw_destinations], null))) {
if ($.truth(((raw_destination === null)))) {
$.call($.attr(parsed_destinations, "append"), [null], null);
continue;
}
destination_path = ($.str(path) + ".destinations[" + $.str(destination_index) + "]");
destination = $.call(_object, [raw_destination, destination_path], null);
$.call($.attr(parsed_destinations, "append"), [$.call(PointOfInterestDestination, [], Object.assign({}, {"id": $.call(_nullable_string, [$.call($.attr(destination, "get"), ["id"], null), ($.str(destination_path) + ".id")], null)}, {"phone_number": $.call(_nullable_string, [$.call($.attr(destination, "get"), ["phoneNumber"], null), ($.str(destination_path) + ".phoneNumber")], null)}, {"name": $.call(_nullable_string, [$.call($.attr(destination, "get"), ["name"], null), ($.str(destination_path) + ".name")], null)}, {"address": $.call(_parse_optional_address, [$.call($.attr(destination, "get"), ["address"], null), ($.str(destination_path) + ".address")], null)}, {"coordinate": $.call(_parse_optional_coordinate, [$.call($.attr(destination, "get"), ["coordinate"], null), ($.str(destination_path) + ".coordinate")], null)}))], null);
}
destinations = $.call($.tuple, [parsed_destinations], null);
}
$.call($.attr(folders, "append"), [$.call(PointOfInterestDestinationFolder, [], Object.assign({}, {"folder_name": $.call(_nullable_string, [$.call($.attr(folder, "get"), ["folderName"], null), ($.str(path) + ".folderName")], null)}, {"destinations": destinations}))], null);
}
return $.call(VehiclePointOfInterestDestinations, [$.call($.tuple, [folders], null)], null);
}

export function parse_t_junction_locations(data: Record<string, unknown>): TJunctionLocations | null;
/** Parse saved and unsaved T-junction camera locations. */
export function parse_t_junction_locations(...__args: any[]): any {
let index, location, path, raw_location, raw_saved, raw_unsaved, saved, unsaved, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse saved and unsaved T-junction camera locations. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
if ($.truth($.and(() => (!$.contains(vehicle, "unsavedTJunctionLocations")), () => (!$.contains(vehicle, "savedTJunctionLocations"))))) {
return null;
}
raw_unsaved = $.call(_list, [$.call($.attr(vehicle, "get"), ["unsavedTJunctionLocations"], null), "vehicle.unsavedTJunctionLocations"], null);
raw_saved = $.call(_list, [$.call($.attr(vehicle, "get"), ["savedTJunctionLocations"], null), "vehicle.savedTJunctionLocations"], null);
unsaved = [];
for ([index, raw_location] of $.iterable($.call($.enumerate, [raw_unsaved], null))) {
path = ("vehicle.unsavedTJunctionLocations[" + $.str(index) + "]");
location = $.call(_object, [raw_location, path], null);
$.call($.attr(unsaved, "append"), [$.call(UnsavedTJunctionLocation, [], Object.assign({}, {"id": $.call(_string, [$.call($.attr(location, "get"), ["id"], null), ($.str(path) + ".id")], null)}, {"latitude": $.call(_float, [$.call($.attr(location, "get"), ["latitude"], null), ($.str(path) + ".latitude")], null)}, {"longitude": $.call(_float, [$.call($.attr(location, "get"), ["longitude"], null), ($.str(path) + ".longitude")], null)}, {"direction": $.call(_float, [$.call($.attr(location, "get"), ["direction"], null), ($.str(path) + ".direction")], null)}, {"launch_date": $.call(_datetime, [$.call($.attr(location, "get"), ["launchDate"], null), ($.str(path) + ".launchDate")], null)}, {"address": $.call(_parse_optional_address, [$.call($.attr(location, "get"), ["address"], null), ($.str(path) + ".address")], null)}))], null);
}
saved = [];
for ([index, raw_location] of $.iterable($.call($.enumerate, [raw_saved], null))) {
path = ("vehicle.savedTJunctionLocations[" + $.str(index) + "]");
location = $.call(_object, [raw_location, path], null);
$.call($.attr(saved, "append"), [$.call(SavedTJunctionLocation, [], Object.assign({}, {"id": $.call(_string, [$.call($.attr(location, "get"), ["id"], null), ($.str(path) + ".id")], null)}, {"latitude": $.call(_float, [$.call($.attr(location, "get"), ["latitude"], null), ($.str(path) + ".latitude")], null)}, {"longitude": $.call(_float, [$.call($.attr(location, "get"), ["longitude"], null), ($.str(path) + ".longitude")], null)}, {"direction": $.call(_float, [$.call($.attr(location, "get"), ["direction"], null), ($.str(path) + ".direction")], null)}, {"location_name": $.call(_string, [$.call($.attr(location, "get"), ["locationName"], null), ($.str(path) + ".locationName")], null)}, {"address": $.call(_parse_optional_address, [$.call($.attr(location, "get"), ["address"], null), ($.str(path) + ".address")], null)}))], null);
}
return $.call(TJunctionLocations, [$.call($.tuple, [unsaved], null), $.call($.tuple, [saved], null)], null);
}

export function parse_vehicle_ev_waypoints(data: Record<string, unknown>): EVWaypointResult | null;
/** Parse a successful EV route calculation or its typed error branch. */
export function parse_vehicle_ev_waypoints(...__args: any[]): any {
let result, typename, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a successful EV route calculation or its typed error branch. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
result = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["evWaypoints"], null), "vehicle.evWaypoints"], null);
if ($.truth(((result === null)))) {
return null;
}
typename = $.call(_string, [$.call($.attr(result, "get"), ["__typename"], null), "vehicle.evWaypoints.__typename"], null);
if ($.truth(($.eq(typename, "EVWaypoint")))) {
return $.call(_parse_ev_waypoint, [result], null);
}
if ($.truth(($.eq(typename, "MinimumRequirementNotMetError")))) {
return $.call(EVWaypointMinimumRequirementNotMetError, [$.call(_string, [$.call($.attr(result, "get"), ["message"], null), "vehicle.evWaypoints.message"], null)], null);
}
if ($.truth(($.eq(typename, "LimitReachedError")))) {
return $.call(EVWaypointLimitReachedError, [$.call(_string, [$.call($.attr(result, "get"), ["message"], null), "vehicle.evWaypoints.message"], null)], null);
}
if ($.truth(($.eq(typename, "UnableToCompleteRouteError")))) {
return $.call(EVWaypointUnableToCompleteRouteError, [], Object.assign({}, {"reason": $.call(_string, [$.call($.attr(result, "get"), ["reason"], null), "vehicle.evWaypoints.reason"], null)}, {"message": $.call(_string, [$.call($.attr(result, "get"), ["message"], null), "vehicle.evWaypoints.message"], null)}, {"details": $.call(_parse_ev_waypoint_error_details, [$.call($.attr(result, "get"), ["details"], null)], null)}));
}
throw $.call(ResponseError, [("Unsupported vehicle.evWaypoints type: " + $.str(typename))], null);
}
