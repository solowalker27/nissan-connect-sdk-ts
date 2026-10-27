// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { DistanceUnit, TemperatureUnit } from "./models";
export { DistanceUnit, TemperatureUnit };

import { NotificationIntervalUnit, RecalculatedWaypointType, RouteStatus } from "./navigation_inputs";
export { NotificationIntervalUnit, RecalculatedWaypointType, RouteStatus };

/** Nullable address fields returned for a navigation destination. */
export class NavigationAddress {
readonly address1: string | null;
readonly address2: string | null;
readonly city: string | null;
readonly state: string | null;
readonly postal_code: string | null;
readonly country: string | null;
static __fields = [["address1", $.MISSING], ["address2", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["postal_code", $.MISSING], ["country", $.MISSING]];
constructor(address1: string | null, address2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null);
constructor(options: { address1: string | null; address2: string | null; city: string | null; state: string | null; postal_code: string | null; country: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NavigationAddress, __args);  Object.freeze(this); }
}
$.classType(NavigationAddress);

/** Nullable coordinates returned for a navigation destination. */
export class NavigationCoordinate {
readonly latitude: number | null;
readonly longitude: number | null;
static __fields = [["latitude", $.MISSING], ["longitude", $.MISSING]];
constructor(latitude: number | null, longitude: number | null);
constructor(options: { latitude: number | null; longitude: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NavigationCoordinate, __args);  Object.freeze(this); }
}
$.classType(NavigationCoordinate);

/** A non-null distance value and unit within an optional response object. */
export class NavigationDistance {
readonly value: number;
readonly unit: DistanceUnit;
static __fields = [["value", $.MISSING], ["unit", $.MISSING]];
constructor(value: number, unit: DistanceUnit);
constructor(options: { value: number; unit: DistanceUnit });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NavigationDistance, __args);  Object.freeze(this); }
}
$.classType(NavigationDistance);

/** A non-null temperature value and unit within an optional response object. */
export class NavigationTemperature {
readonly value: number;
readonly unit: TemperatureUnit;
static __fields = [["value", $.MISSING], ["unit", $.MISSING]];
constructor(value: number, unit: TemperatureUnit);
constructor(options: { value: number; unit: TemperatureUnit });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NavigationTemperature, __args);  Object.freeze(this); }
}
$.classType(NavigationTemperature);

/** Nullable route-notification interval fields. */
export class NavigationNotificationInterval {
readonly value: number | null;
readonly unit: NotificationIntervalUnit | null;
static __fields = [["value", $.MISSING], ["unit", $.MISSING]];
constructor(value: number | null, unit: NotificationIntervalUnit | null);
constructor(options: { value: number | null; unit: NotificationIntervalUnit | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NavigationNotificationInterval, __args);  Object.freeze(this); }
}
$.classType(NavigationNotificationInterval);

/** One nullable-field waypoint returned in the vehicle journey list. */
export class JourneyWaypoint {
readonly id: string | null;
readonly name: string | null;
readonly address: NavigationAddress | null;
readonly coordinate: NavigationCoordinate | null;
readonly phone_number: string | null;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["address", $.MISSING], ["coordinate", $.MISSING], ["phone_number", $.MISSING]];
constructor(id: string | null, name: string | null, address: NavigationAddress | null, coordinate: NavigationCoordinate | null, phone_number: string | null);
constructor(options: { id: string | null; name: string | null; address: NavigationAddress | null; coordinate: NavigationCoordinate | null; phone_number: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, JourneyWaypoint, __args);  Object.freeze(this); }
}
$.classType(JourneyWaypoint);

/** One journey and its nullable waypoint list. */
export class Journey {
readonly waypoints: ReadonlyArray<JourneyWaypoint | null> | null;
static __fields = [["waypoints", $.MISSING]];
constructor(waypoints: ReadonlyArray<JourneyWaypoint | null> | null);
constructor(options: { waypoints: ReadonlyArray<JourneyWaypoint | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, Journey, __args);  Object.freeze(this); }
}
$.classType(Journey);

/** The nullable journey collection exposed by a connected vehicle. */
export class VehicleJourneys {
readonly journeys: ReadonlyArray<Journey | null> | null;
static __fields = [["journeys", $.MISSING]];
constructor(journeys: ReadonlyArray<Journey | null> | null);
constructor(options: { journeys: ReadonlyArray<Journey | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleJourneys, __args);  Object.freeze(this); }
}
$.classType(VehicleJourneys);

/** One waypoint returned in a planned route or route-history entry. */
export class NavigationRouteWaypoint {
readonly name: string | null;
readonly phone_number: string | null;
readonly address: NavigationAddress | null;
readonly location: NavigationCoordinate | null;
readonly recalculated_waypoint_type: RecalculatedWaypointType | null;
readonly charging_output: number | null;
static __fields = [["name", $.MISSING], ["phone_number", $.MISSING], ["address", $.MISSING], ["location", $.MISSING], ["recalculated_waypoint_type", $.MISSING], ["charging_output", $.MISSING]];
constructor(name: string | null, phone_number: string | null, address: NavigationAddress | null, location: NavigationCoordinate | null, recalculated_waypoint_type: RecalculatedWaypointType | null, charging_output: number | null);
constructor(options: { name: string | null; phone_number: string | null; address: NavigationAddress | null; location: NavigationCoordinate | null; recalculated_waypoint_type: RecalculatedWaypointType | null; charging_output: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NavigationRouteWaypoint, __args);  Object.freeze(this); }
}
$.classType(NavigationRouteWaypoint);

/** One saved vehicle route with upstream nullability preserved. */
export class PlannedRoute {
readonly id: string | null;
readonly name: string | null;
readonly estimated_time_of_departure: $.DateValue | null;
readonly estimated_time_of_arrival: $.DateValue | null;
readonly distance: NavigationDistance | null;
readonly temperature: NavigationTemperature | null;
readonly routes: ReadonlyArray<NavigationRouteWaypoint | null> | null;
readonly avoid_highway: boolean | null;
readonly avoid_tolls: boolean | null;
readonly avoid_ferries: boolean | null;
readonly should_recalculate_route: boolean | null;
readonly should_enable_notification: boolean | null;
readonly notification_interval: NavigationNotificationInterval | null;
readonly arrival_flag: boolean | null;
readonly departure_flag: boolean | null;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["estimated_time_of_departure", $.MISSING], ["estimated_time_of_arrival", $.MISSING], ["distance", $.MISSING], ["temperature", $.MISSING], ["routes", $.MISSING], ["avoid_highway", $.MISSING], ["avoid_tolls", $.MISSING], ["avoid_ferries", $.MISSING], ["should_recalculate_route", $.MISSING], ["should_enable_notification", $.MISSING], ["notification_interval", $.MISSING], ["arrival_flag", $.MISSING], ["departure_flag", $.MISSING]];
constructor(id: string | null, name: string | null, estimated_time_of_departure: $.DateValue | null, estimated_time_of_arrival: $.DateValue | null, distance: NavigationDistance | null, temperature: NavigationTemperature | null, routes: ReadonlyArray<NavigationRouteWaypoint | null> | null, avoid_highway: boolean | null, avoid_tolls: boolean | null, avoid_ferries: boolean | null, should_recalculate_route: boolean | null, should_enable_notification: boolean | null, notification_interval: NavigationNotificationInterval | null, arrival_flag: boolean | null, departure_flag: boolean | null);
constructor(options: { id: string | null; name: string | null; estimated_time_of_departure: $.DateValue | null; estimated_time_of_arrival: $.DateValue | null; distance: NavigationDistance | null; temperature: NavigationTemperature | null; routes: ReadonlyArray<NavigationRouteWaypoint | null> | null; avoid_highway: boolean | null; avoid_tolls: boolean | null; avoid_ferries: boolean | null; should_recalculate_route: boolean | null; should_enable_notification: boolean | null; notification_interval: NavigationNotificationInterval | null; arrival_flag: boolean | null; departure_flag: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PlannedRoute, __args);  Object.freeze(this); }
}
$.classType(PlannedRoute);

/** The nullable saved-route collection exposed by an electric vehicle. */
export class VehiclePlannedRoutes {
readonly planned_routes: ReadonlyArray<PlannedRoute | null> | null;
static __fields = [["planned_routes", $.MISSING]];
constructor(planned_routes: ReadonlyArray<PlannedRoute | null> | null);
constructor(options: { planned_routes: ReadonlyArray<PlannedRoute | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehiclePlannedRoutes, __args);  Object.freeze(this); }
}
$.classType(VehiclePlannedRoutes);

/** One route-history entry returned for an electric AVK2 vehicle. */
export class RouteHistoryEntry {
readonly id: string | null;
readonly name: string | null;
readonly estimated_time_of_departure: $.DateValue | null;
readonly estimated_time_of_arrival: $.DateValue | null;
readonly status: RouteStatus | null;
readonly distance: NavigationDistance | null;
readonly temperature: NavigationTemperature | null;
readonly routes: ReadonlyArray<NavigationRouteWaypoint | null> | null;
readonly arrival_flag: boolean | null;
readonly departure_flag: boolean | null;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["estimated_time_of_departure", $.MISSING], ["estimated_time_of_arrival", $.MISSING], ["status", $.MISSING], ["distance", $.MISSING], ["temperature", $.MISSING], ["routes", $.MISSING], ["arrival_flag", $.MISSING], ["departure_flag", $.MISSING]];
constructor(id: string | null, name: string | null, estimated_time_of_departure: $.DateValue | null, estimated_time_of_arrival: $.DateValue | null, status: RouteStatus | null, distance: NavigationDistance | null, temperature: NavigationTemperature | null, routes: ReadonlyArray<NavigationRouteWaypoint | null> | null, arrival_flag: boolean | null, departure_flag: boolean | null);
constructor(options: { id: string | null; name: string | null; estimated_time_of_departure: $.DateValue | null; estimated_time_of_arrival: $.DateValue | null; status: RouteStatus | null; distance: NavigationDistance | null; temperature: NavigationTemperature | null; routes: ReadonlyArray<NavigationRouteWaypoint | null> | null; arrival_flag: boolean | null; departure_flag: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RouteHistoryEntry, __args);  Object.freeze(this); }
}
$.classType(RouteHistoryEntry);

/** The nullable route-history collection exposed by an electric AVK2 vehicle. */
export class VehicleRoutesHistory {
readonly route_history: ReadonlyArray<RouteHistoryEntry | null> | null;
static __fields = [["route_history", $.MISSING]];
constructor(route_history: ReadonlyArray<RouteHistoryEntry | null> | null);
constructor(options: { route_history: ReadonlyArray<RouteHistoryEntry | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleRoutesHistory, __args);  Object.freeze(this); }
}
$.classType(VehicleRoutesHistory);

/** One nullable-field point-of-interest destination. */
export class PointOfInterestDestination {
readonly id: string | null;
readonly phone_number: string | null;
readonly name: string | null;
readonly address: NavigationAddress | null;
readonly coordinate: NavigationCoordinate | null;
static __fields = [["id", $.MISSING], ["phone_number", $.MISSING], ["name", $.MISSING], ["address", $.MISSING], ["coordinate", $.MISSING]];
constructor(id: string | null, phone_number: string | null, name: string | null, address: NavigationAddress | null, coordinate: NavigationCoordinate | null);
constructor(options: { id: string | null; phone_number: string | null; name: string | null; address: NavigationAddress | null; coordinate: NavigationCoordinate | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PointOfInterestDestination, __args);  Object.freeze(this); }
}
$.classType(PointOfInterestDestination);

/** One point-of-interest folder and its nullable destination list. */
export class PointOfInterestDestinationFolder {
readonly folder_name: string | null;
readonly destinations: ReadonlyArray<PointOfInterestDestination | null> | null;
static __fields = [["folder_name", $.MISSING], ["destinations", $.MISSING]];
constructor(folder_name: string | null, destinations: ReadonlyArray<PointOfInterestDestination | null> | null);
constructor(options: { folder_name: string | null; destinations: ReadonlyArray<PointOfInterestDestination | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PointOfInterestDestinationFolder, __args);  Object.freeze(this); }
}
$.classType(PointOfInterestDestinationFolder);

/** The nullable point-of-interest folders exposed by a connected vehicle. */
export class VehiclePointOfInterestDestinations {
readonly folders: ReadonlyArray<PointOfInterestDestinationFolder | null> | null;
static __fields = [["folders", $.MISSING]];
constructor(folders: ReadonlyArray<PointOfInterestDestinationFolder | null> | null);
constructor(options: { folders: ReadonlyArray<PointOfInterestDestinationFolder | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehiclePointOfInterestDestinations, __args);  Object.freeze(this); }
}
$.classType(VehiclePointOfInterestDestinations);

/** One unsaved T-Junction location returned by an EVO vehicle. */
export class UnsavedTJunctionLocation {
readonly id: string;
readonly latitude: number;
readonly longitude: number;
readonly direction: number;
readonly launch_date: $.DateValue;
readonly address: NavigationAddress | null;
static __fields = [["id", $.MISSING], ["latitude", $.MISSING], ["longitude", $.MISSING], ["direction", $.MISSING], ["launch_date", $.MISSING], ["address", $.MISSING]];
constructor(id: string, latitude: number, longitude: number, direction: number, launch_date: $.DateValue, address: NavigationAddress | null);
constructor(options: { id: string; latitude: number; longitude: number; direction: number; launch_date: $.DateValue; address: NavigationAddress | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnsavedTJunctionLocation, __args);  Object.freeze(this); }
}
$.classType(UnsavedTJunctionLocation);

/** One saved T-Junction location returned by an EVO vehicle. */
export class SavedTJunctionLocation {
readonly id: string;
readonly latitude: number;
readonly longitude: number;
readonly direction: number;
readonly location_name: string;
readonly address: NavigationAddress | null;
static __fields = [["id", $.MISSING], ["latitude", $.MISSING], ["longitude", $.MISSING], ["direction", $.MISSING], ["location_name", $.MISSING], ["address", $.MISSING]];
constructor(id: string, latitude: number, longitude: number, direction: number, location_name: string, address: NavigationAddress | null);
constructor(options: { id: string; latitude: number; longitude: number; direction: number; location_name: string; address: NavigationAddress | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SavedTJunctionLocation, __args);  Object.freeze(this); }
}
$.classType(SavedTJunctionLocation);

/** The non-null saved and unsaved T-Junction location collections. */
export class TJunctionLocations {
readonly unsaved_t_junction_locations: ReadonlyArray<UnsavedTJunctionLocation>;
readonly saved_t_junction_locations: ReadonlyArray<SavedTJunctionLocation>;
static __fields = [["unsaved_t_junction_locations", $.MISSING], ["saved_t_junction_locations", $.MISSING]];
constructor(unsaved_t_junction_locations: ReadonlyArray<UnsavedTJunctionLocation>, saved_t_junction_locations: ReadonlyArray<SavedTJunctionLocation>);
constructor(options: { unsaved_t_junction_locations: ReadonlyArray<UnsavedTJunctionLocation>; saved_t_junction_locations: ReadonlyArray<SavedTJunctionLocation> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TJunctionLocations, __args);  Object.freeze(this); }
}
$.classType(TJunctionLocations);

export const EVWaypointStatus = $.enumType("EVWaypointStatus", {"AVAILABLE": "AVAILABLE", "UNAVAILABLE": "UNAVAILABLE", "UNKNOWN": "UNKNOWN", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EVWaypointStatus = ReturnType<typeof EVWaypointStatus>;

export const EVWaypointRouteType = $.enumType("EVWaypointRouteType", {"ORIGIN": "ORIGIN", "STOP": "STOP", "CHARGING_STATION": "CHARGING_STATION", "DESTINATION": "DESTINATION", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EVWaypointRouteType = ReturnType<typeof EVWaypointRouteType>;

/** One nullable-field waypoint in a calculated EV route. */
export class EVWaypointRoute {
readonly name: string | null;
readonly arrival_time: $.DateValue | null;
readonly charging_time_in_seconds: number | null;
readonly level: number | null;
readonly type: EVWaypointRouteType | null;
readonly address: NavigationAddress | null;
readonly location: NavigationCoordinate | null;
readonly status: EVWaypointStatus | null;
readonly charging_output: number | null;
static __fields = [["name", $.MISSING], ["arrival_time", $.MISSING], ["charging_time_in_seconds", $.MISSING], ["level", $.MISSING], ["type", $.MISSING], ["address", $.MISSING], ["location", $.MISSING], ["status", $.MISSING], ["charging_output", $.MISSING]];
constructor(name: string | null, arrival_time: $.DateValue | null, charging_time_in_seconds: number | null, level: number | null, type: EVWaypointRouteType | null, address: NavigationAddress | null, location: NavigationCoordinate | null, status: EVWaypointStatus | null, charging_output: number | null);
constructor(options: { name: string | null; arrival_time: $.DateValue | null; charging_time_in_seconds: number | null; level: number | null; type: EVWaypointRouteType | null; address: NavigationAddress | null; location: NavigationCoordinate | null; status: EVWaypointStatus | null; charging_output: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVWaypointRoute, __args);  Object.freeze(this); }
}
$.classType(EVWaypointRoute);

/** A successful EV route calculation. */
export class EVWaypoint {
readonly departure_time: $.DateValue | null;
readonly arrival_time: $.DateValue | null;
readonly total_charging_time_in_seconds: number | null;
readonly total_travel_time_in_seconds: number | null;
readonly total_distance: NavigationDistance | null;
readonly routes: ReadonlyArray<EVWaypointRoute | null> | null;
static __fields = [["departure_time", $.MISSING], ["arrival_time", $.MISSING], ["total_charging_time_in_seconds", $.MISSING], ["total_travel_time_in_seconds", $.MISSING], ["total_distance", $.MISSING], ["routes", $.MISSING]];
constructor(departure_time: $.DateValue | null, arrival_time: $.DateValue | null, total_charging_time_in_seconds: number | null, total_travel_time_in_seconds: number | null, total_distance: NavigationDistance | null, routes: ReadonlyArray<EVWaypointRoute | null> | null);
constructor(options: { departure_time: $.DateValue | null; arrival_time: $.DateValue | null; total_charging_time_in_seconds: number | null; total_travel_time_in_seconds: number | null; total_distance: NavigationDistance | null; routes: ReadonlyArray<EVWaypointRoute | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVWaypoint, __args);  Object.freeze(this); }
}
$.classType(EVWaypoint);

/** Battery fields missing from an EV route request. */
export class MissingBatteryDetailsErrorDetails {
readonly battery_capacity: string | null;
readonly starting_battery_level: string | null;
static __fields = [["battery_capacity", $.MISSING], ["starting_battery_level", $.MISSING]];
constructor(battery_capacity: string | null, starting_battery_level: string | null);
constructor(options: { battery_capacity: string | null; starting_battery_level: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MissingBatteryDetailsErrorDetails, __args);  Object.freeze(this); }
}
$.classType(MissingBatteryDetailsErrorDetails);

/** Charging-station search values that prevented EV route completion. */
export class NoChargingStationWithinRangeErrorDetails {
readonly center: string | null;
readonly radius: string | null;
readonly charging_connectors: string | null;
readonly min_power: string | null;
static __fields = [["center", $.MISSING], ["radius", $.MISSING], ["charging_connectors", $.MISSING], ["min_power", $.MISSING]];
constructor(center: string | null, radius: string | null, charging_connectors: string | null, min_power: string | null);
constructor(options: { center: string | null; radius: string | null; charging_connectors: string | null; min_power: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NoChargingStationWithinRangeErrorDetails, __args);  Object.freeze(this); }
}
$.classType(NoChargingStationWithinRangeErrorDetails);

/** Route sub-step values that prevented EV route completion. */
export class UnableToCompleteSubStepErrorDetails {
readonly start: string | null;
readonly end: string | null;
readonly distance: string | null;
readonly speed: string | null;
readonly slope: string | null;
readonly starting_battery: string | null;
readonly battery_capacity: string | null;
readonly battery_consumption: string | null;
readonly soc_after_charging_near_start: string | null;
readonly minimum_battery: string | null;
readonly charging_station_max_power: string | null;
static __fields = [["start", $.MISSING], ["end", $.MISSING], ["distance", $.MISSING], ["speed", $.MISSING], ["slope", $.MISSING], ["starting_battery", $.MISSING], ["battery_capacity", $.MISSING], ["battery_consumption", $.MISSING], ["soc_after_charging_near_start", $.MISSING], ["minimum_battery", $.MISSING], ["charging_station_max_power", $.MISSING]];
constructor(start: string | null, end: string | null, distance: string | null, speed: string | null, slope: string | null, starting_battery: string | null, battery_capacity: string | null, battery_consumption: string | null, soc_after_charging_near_start: string | null, minimum_battery: string | null, charging_station_max_power: string | null);
constructor(options: { start: string | null; end: string | null; distance: string | null; speed: string | null; slope: string | null; starting_battery: string | null; battery_capacity: string | null; battery_consumption: string | null; soc_after_charging_near_start: string | null; minimum_battery: string | null; charging_station_max_power: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnableToCompleteSubStepErrorDetails, __args);  Object.freeze(this); }
}
$.classType(UnableToCompleteSubStepErrorDetails);

export type EVWaypointErrorDetails = MissingBatteryDetailsErrorDetails | NoChargingStationWithinRangeErrorDetails | UnableToCompleteSubStepErrorDetails;

/** A failed EV route calculation whose minimum requirements were not met. */
export class EVWaypointMinimumRequirementNotMetError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVWaypointMinimumRequirementNotMetError, __args);  Object.freeze(this); }
}
$.classType(EVWaypointMinimumRequirementNotMetError);

/** A failed EV route calculation that exceeded a service limit. */
export class EVWaypointLimitReachedError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVWaypointLimitReachedError, __args);  Object.freeze(this); }
}
$.classType(EVWaypointLimitReachedError);

/** A failed EV route calculation with an optional typed detail branch. */
export class EVWaypointUnableToCompleteRouteError {
readonly reason: string;
readonly message: string;
readonly details: EVWaypointErrorDetails | null;
static __fields = [["reason", $.MISSING], ["message", $.MISSING], ["details", $.MISSING]];
constructor(reason: string, message: string, details: EVWaypointErrorDetails | null);
constructor(options: { reason: string; message: string; details: EVWaypointErrorDetails | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVWaypointUnableToCompleteRouteError, __args);  Object.freeze(this); }
}
$.classType(EVWaypointUnableToCompleteRouteError);

export type EVWaypointResult = EVWaypoint | EVWaypointMinimumRequirementNotMetError | EVWaypointLimitReachedError | EVWaypointUnableToCompleteRouteError;
