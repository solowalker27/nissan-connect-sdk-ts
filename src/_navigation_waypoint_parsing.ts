// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _enum, _float, _int, _nullable_datetime, _nullable_enum, _nullable_float, _nullable_int, _nullable_list, _nullable_string, _object, _optional_object, _string } from "./_navigation_value_parsing";
export { _enum, _float, _int, _nullable_datetime, _nullable_enum, _nullable_float, _nullable_int, _nullable_list, _nullable_string, _object, _optional_object, _string };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { DistanceUnit, TemperatureUnit } from "./models";
export { DistanceUnit, TemperatureUnit };

import { NotificationIntervalUnit, RecalculatedWaypointType } from "./navigation_inputs";
export { NotificationIntervalUnit, RecalculatedWaypointType };

import { EVWaypoint, EVWaypointErrorDetails, EVWaypointRoute, EVWaypointRouteType, EVWaypointStatus, MissingBatteryDetailsErrorDetails, NavigationAddress, NavigationCoordinate, NavigationDistance, NavigationNotificationInterval, NavigationRouteWaypoint, NavigationTemperature, NoChargingStationWithinRangeErrorDetails, UnableToCompleteSubStepErrorDetails } from "./navigation_models";
export { EVWaypoint, EVWaypointErrorDetails, EVWaypointRoute, EVWaypointRouteType, EVWaypointStatus, MissingBatteryDetailsErrorDetails, NavigationAddress, NavigationCoordinate, NavigationDistance, NavigationNotificationInterval, NavigationRouteWaypoint, NavigationTemperature, NoChargingStationWithinRangeErrorDetails, UnableToCompleteSubStepErrorDetails };

export function _parse_ev_waypoint(value: Record<string, unknown>): EVWaypoint;
/** Translated upstream _parse_ev_waypoint. */
export function _parse_ev_waypoint(...__args: any[]): any {
let index, parsed_routes, path, raw_route, raw_routes, route, routes;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
raw_routes = $.call(_nullable_list, [$.call($.attr(value, "get"), ["routes"], null), "vehicle.evWaypoints.routes"], null);
routes = null;
if ($.truth(((raw_routes !== null)))) {
parsed_routes = [];
for ([index, raw_route] of $.iterable($.call($.enumerate, [raw_routes], null))) {
if ($.truth(((raw_route === null)))) {
$.call($.attr(parsed_routes, "append"), [null], null);
continue;
}
path = ("vehicle.evWaypoints.routes[" + $.str(index) + "]");
route = $.call(_object, [raw_route, path], null);
$.call($.attr(parsed_routes, "append"), [$.call(EVWaypointRoute, [], Object.assign({}, {"name": $.call(_nullable_string, [$.call($.attr(route, "get"), ["name"], null), ($.str(path) + ".name")], null)}, {"arrival_time": $.call(_nullable_datetime, [$.call($.attr(route, "get"), ["arrivalTime"], null), ($.str(path) + ".arrivalTime")], null)}, {"charging_time_in_seconds": $.call(_nullable_int, [$.call($.attr(route, "get"), ["chargingTimeInSeconds"], null), ($.str(path) + ".chargingTimeInSeconds")], null)}, {"level": $.call(_nullable_int, [$.call($.attr(route, "get"), ["level"], null), ($.str(path) + ".level")], null)}, {"type": $.call(_nullable_enum, [$.call($.attr(route, "get"), ["type"], null), EVWaypointRouteType, ($.str(path) + ".type")], null)}, {"address": $.call(_parse_optional_address, [$.call($.attr(route, "get"), ["address"], null), ($.str(path) + ".address")], null)}, {"location": $.call(_parse_optional_coordinate, [$.call($.attr(route, "get"), ["location"], null), ($.str(path) + ".location")], null)}, {"status": $.call(_nullable_enum, [$.call($.attr(route, "get"), ["status"], null), EVWaypointStatus, ($.str(path) + ".status")], null)}, {"charging_output": $.call(_nullable_int, [$.call($.attr(route, "get"), ["chargingOutput"], null), ($.str(path) + ".chargingOutput")], null)}))], null);
}
routes = $.call($.tuple, [parsed_routes], null);
}
return $.call(EVWaypoint, [], Object.assign({}, {"departure_time": $.call(_nullable_datetime, [$.call($.attr(value, "get"), ["departureTime"], null), "vehicle.evWaypoints.departureTime"], null)}, {"arrival_time": $.call(_nullable_datetime, [$.call($.attr(value, "get"), ["arrivalTime"], null), "vehicle.evWaypoints.arrivalTime"], null)}, {"total_charging_time_in_seconds": $.call(_nullable_int, [$.call($.attr(value, "get"), ["totalChargingTimeInSeconds"], null), "vehicle.evWaypoints.totalChargingTimeInSeconds"], null)}, {"total_travel_time_in_seconds": $.call(_nullable_int, [$.call($.attr(value, "get"), ["totalTravelTimeInSeconds"], null), "vehicle.evWaypoints.totalTravelTimeInSeconds"], null)}, {"total_distance": $.call(_parse_optional_distance, [$.call($.attr(value, "get"), ["totalDistance"], null), "vehicle.evWaypoints.totalDistance"], null)}, {"routes": routes}));
}

export function _parse_ev_waypoint_error_details(value: unknown): EVWaypointErrorDetails | null;
/** Translated upstream _parse_ev_waypoint_error_details. */
export function _parse_ev_waypoint_error_details(...__args: any[]): any {
let details, typename;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
details = $.call(_optional_object, [value, "vehicle.evWaypoints.details"], null);
if ($.truth(((details === null)))) {
return null;
}
typename = $.call(_string, [$.call($.attr(details, "get"), ["__typename"], null), "vehicle.evWaypoints.details.__typename"], null);
if ($.truth(($.eq(typename, "MissingBatteryDetailsErrorDetails")))) {
return $.call(MissingBatteryDetailsErrorDetails, [], Object.assign({}, {"battery_capacity": $.call(_nullable_string, [$.call($.attr(details, "get"), ["batteryCapacity"], null), "vehicle.evWaypoints.details.batteryCapacity"], null)}, {"starting_battery_level": $.call(_nullable_string, [$.call($.attr(details, "get"), ["startingBatteryLevel"], null), "vehicle.evWaypoints.details.startingBatteryLevel"], null)}));
}
if ($.truth(($.eq(typename, "NoChargingStationWithinRangeErrorDetails")))) {
return $.call(NoChargingStationWithinRangeErrorDetails, [], Object.assign({}, {"center": $.call(_nullable_string, [$.call($.attr(details, "get"), ["center"], null), "vehicle.evWaypoints.details.center"], null)}, {"radius": $.call(_nullable_string, [$.call($.attr(details, "get"), ["radius"], null), "vehicle.evWaypoints.details.radius"], null)}, {"charging_connectors": $.call(_nullable_string, [$.call($.attr(details, "get"), ["chargingConnectors"], null), "vehicle.evWaypoints.details.chargingConnectors"], null)}, {"min_power": $.call(_nullable_string, [$.call($.attr(details, "get"), ["minPower"], null), "vehicle.evWaypoints.details.minPower"], null)}));
}
if ($.truth(($.eq(typename, "UnableToCompleteSubStepErrorDetails")))) {
return $.call(UnableToCompleteSubStepErrorDetails, [], Object.assign({}, {"start": $.call(_nullable_string, [$.call($.attr(details, "get"), ["start"], null), "vehicle.evWaypoints.details.start"], null)}, {"end": $.call(_nullable_string, [$.call($.attr(details, "get"), ["end"], null), "vehicle.evWaypoints.details.end"], null)}, {"distance": $.call(_nullable_string, [$.call($.attr(details, "get"), ["distance"], null), "vehicle.evWaypoints.details.distance"], null)}, {"speed": $.call(_nullable_string, [$.call($.attr(details, "get"), ["speed"], null), "vehicle.evWaypoints.details.speed"], null)}, {"slope": $.call(_nullable_string, [$.call($.attr(details, "get"), ["slope"], null), "vehicle.evWaypoints.details.slope"], null)}, {"starting_battery": $.call(_nullable_string, [$.call($.attr(details, "get"), ["startingBattery"], null), "vehicle.evWaypoints.details.startingBattery"], null)}, {"battery_capacity": $.call(_nullable_string, [$.call($.attr(details, "get"), ["batteryCapacity"], null), "vehicle.evWaypoints.details.batteryCapacity"], null)}, {"battery_consumption": $.call(_nullable_string, [$.call($.attr(details, "get"), ["batteryConsumption"], null), "vehicle.evWaypoints.details.batteryConsumption"], null)}, {"soc_after_charging_near_start": $.call(_nullable_string, [$.call($.attr(details, "get"), ["socAfterChargingNearStart"], null), "vehicle.evWaypoints.details.socAfterChargingNearStart"], null)}, {"minimum_battery": $.call(_nullable_string, [$.call($.attr(details, "get"), ["minimumBattery"], null), "vehicle.evWaypoints.details.minimumBattery"], null)}, {"charging_station_max_power": $.call(_nullable_string, [$.call($.attr(details, "get"), ["chargingStationMaxPower"], null), "vehicle.evWaypoints.details.chargingStationMaxPower"], null)}));
}
throw $.call(ResponseError, [("Unsupported vehicle.evWaypoints.details type: " + $.str(typename))], null);
}

export function _parse_navigation_route_waypoints(value: unknown, path: string): ReadonlyArray<NavigationRouteWaypoint | null> | null;
/** Translated upstream _parse_navigation_route_waypoints. */
export function _parse_navigation_route_waypoints(...__args: any[]): any {
let index, item_path, raw_route, raw_routes, route, routes;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_routes = $.call(_nullable_list, [value, path], null);
if ($.truth(((raw_routes === null)))) {
return null;
}
routes = [];
for ([index, raw_route] of $.iterable($.call($.enumerate, [raw_routes], null))) {
if ($.truth(((raw_route === null)))) {
$.call($.attr(routes, "append"), [null], null);
continue;
}
item_path = ($.str(path) + "[" + $.str(index) + "]");
route = $.call(_object, [raw_route, item_path], null);
$.call($.attr(routes, "append"), [$.call(NavigationRouteWaypoint, [], Object.assign({}, {"name": $.call(_nullable_string, [$.call($.attr(route, "get"), ["name"], null), ($.str(item_path) + ".name")], null)}, {"phone_number": $.call(_nullable_string, [$.call($.attr(route, "get"), ["phoneNumber"], null), ($.str(item_path) + ".phoneNumber")], null)}, {"address": $.call(_parse_optional_address, [$.call($.attr(route, "get"), ["address"], null), ($.str(item_path) + ".address")], null)}, {"location": $.call(_parse_optional_coordinate, [$.call($.attr(route, "get"), ["location"], null), ($.str(item_path) + ".location")], null)}, {"recalculated_waypoint_type": $.call(_nullable_enum, [$.call($.attr(route, "get"), ["recalculatedWaypointType"], null), RecalculatedWaypointType, ($.str(item_path) + ".recalculatedWaypointType")], null)}, {"charging_output": $.call(_nullable_int, [$.call($.attr(route, "get"), ["chargingOutput"], null), ($.str(item_path) + ".chargingOutput")], null)}))], null);
}
return $.call($.tuple, [routes], null);
}

export function _parse_optional_address(value: unknown, path: string): NavigationAddress | null;
/** Translated upstream _parse_optional_address. */
export function _parse_optional_address(...__args: any[]): any {
let address;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
address = $.call(_optional_object, [value, path], null);
if ($.truth(((address === null)))) {
return null;
}
return $.call(NavigationAddress, [], Object.assign({}, {"address1": $.call(_nullable_string, [$.call($.attr(address, "get"), ["address1"], null), ($.str(path) + ".address1")], null)}, {"address2": $.call(_nullable_string, [$.call($.attr(address, "get"), ["address2"], null), ($.str(path) + ".address2")], null)}, {"city": $.call(_nullable_string, [$.call($.attr(address, "get"), ["city"], null), ($.str(path) + ".city")], null)}, {"state": $.call(_nullable_string, [$.call($.attr(address, "get"), ["state"], null), ($.str(path) + ".state")], null)}, {"postal_code": $.call(_nullable_string, [$.call($.attr(address, "get"), ["postalCode"], null), ($.str(path) + ".postalCode")], null)}, {"country": $.call(_nullable_string, [$.call($.attr(address, "get"), ["country"], null), ($.str(path) + ".country")], null)}));
}

export function _parse_optional_coordinate(value: unknown, path: string): NavigationCoordinate | null;
/** Translated upstream _parse_optional_coordinate. */
export function _parse_optional_coordinate(...__args: any[]): any {
let coordinate;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
coordinate = $.call(_optional_object, [value, path], null);
if ($.truth(((coordinate === null)))) {
return null;
}
return $.call(NavigationCoordinate, [], Object.assign({}, {"latitude": $.call(_nullable_float, [$.call($.attr(coordinate, "get"), ["latitude"], null), ($.str(path) + ".latitude")], null)}, {"longitude": $.call(_nullable_float, [$.call($.attr(coordinate, "get"), ["longitude"], null), ($.str(path) + ".longitude")], null)}));
}

export function _parse_optional_distance(value: unknown, path: string): NavigationDistance | null;
/** Translated upstream _parse_optional_distance. */
export function _parse_optional_distance(...__args: any[]): any {
let distance;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
distance = $.call(_optional_object, [value, path], null);
if ($.truth(((distance === null)))) {
return null;
}
return $.call(NavigationDistance, [], Object.assign({}, {"value": $.call(_int, [$.call($.attr(distance, "get"), ["value"], null), ($.str(path) + ".value")], null)}, {"unit": $.call(_enum, [$.call($.attr(distance, "get"), ["unit"], null), DistanceUnit, ($.str(path) + ".unit")], null)}));
}

export function _parse_optional_temperature(value: unknown, path: string): NavigationTemperature | null;
/** Translated upstream _parse_optional_temperature. */
export function _parse_optional_temperature(...__args: any[]): any {
let temperature;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
temperature = $.call(_optional_object, [value, path], null);
if ($.truth(((temperature === null)))) {
return null;
}
return $.call(NavigationTemperature, [], Object.assign({}, {"value": $.call(_float, [$.call($.attr(temperature, "get"), ["value"], null), ($.str(path) + ".value")], null)}, {"unit": $.call(_enum, [$.call($.attr(temperature, "get"), ["unit"], null), TemperatureUnit, ($.str(path) + ".unit")], null)}));
}

export function _parse_optional_notification_interval(value: unknown, path: string): NavigationNotificationInterval | null;
/** Translated upstream _parse_optional_notification_interval. */
export function _parse_optional_notification_interval(...__args: any[]): any {
let interval;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
interval = $.call(_optional_object, [value, path], null);
if ($.truth(((interval === null)))) {
return null;
}
return $.call(NavigationNotificationInterval, [], Object.assign({}, {"value": $.call(_nullable_int, [$.call($.attr(interval, "get"), ["value"], null), ($.str(path) + ".value")], null)}, {"unit": $.call(_nullable_enum, [$.call($.attr(interval, "get"), ["unit"], null), NotificationIntervalUnit, ($.str(path) + ".unit")], null)}));
}
