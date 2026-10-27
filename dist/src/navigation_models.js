"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVWaypointUnableToCompleteRouteError = exports.EVWaypointLimitReachedError = exports.EVWaypointMinimumRequirementNotMetError = exports.UnableToCompleteSubStepErrorDetails = exports.NoChargingStationWithinRangeErrorDetails = exports.MissingBatteryDetailsErrorDetails = exports.EVWaypoint = exports.EVWaypointRoute = exports.EVWaypointRouteType = exports.EVWaypointStatus = exports.TJunctionLocations = exports.SavedTJunctionLocation = exports.UnsavedTJunctionLocation = exports.VehiclePointOfInterestDestinations = exports.PointOfInterestDestinationFolder = exports.PointOfInterestDestination = exports.VehicleRoutesHistory = exports.RouteHistoryEntry = exports.VehiclePlannedRoutes = exports.PlannedRoute = exports.NavigationRouteWaypoint = exports.VehicleJourneys = exports.Journey = exports.JourneyWaypoint = exports.NavigationNotificationInterval = exports.NavigationTemperature = exports.NavigationDistance = exports.NavigationCoordinate = exports.NavigationAddress = exports.RouteStatus = exports.RecalculatedWaypointType = exports.NotificationIntervalUnit = exports.TemperatureUnit = exports.DistanceUnit = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "TemperatureUnit", { enumerable: true, get: function () { return models_1.TemperatureUnit; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "NotificationIntervalUnit", { enumerable: true, get: function () { return navigation_inputs_1.NotificationIntervalUnit; } });
Object.defineProperty(exports, "RecalculatedWaypointType", { enumerable: true, get: function () { return navigation_inputs_1.RecalculatedWaypointType; } });
Object.defineProperty(exports, "RouteStatus", { enumerable: true, get: function () { return navigation_inputs_1.RouteStatus; } });
/** Nullable address fields returned for a navigation destination. */
class NavigationAddress {
    address1;
    address2;
    city;
    state;
    postal_code;
    country;
    static __fields = [["address1", _runtime_1.py.MISSING], ["address2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NavigationAddress, __args); Object.freeze(this); }
}
exports.NavigationAddress = NavigationAddress;
_runtime_1.py.classType(NavigationAddress);
/** Nullable coordinates returned for a navigation destination. */
class NavigationCoordinate {
    latitude;
    longitude;
    static __fields = [["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NavigationCoordinate, __args); Object.freeze(this); }
}
exports.NavigationCoordinate = NavigationCoordinate;
_runtime_1.py.classType(NavigationCoordinate);
/** A non-null distance value and unit within an optional response object. */
class NavigationDistance {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NavigationDistance, __args); Object.freeze(this); }
}
exports.NavigationDistance = NavigationDistance;
_runtime_1.py.classType(NavigationDistance);
/** A non-null temperature value and unit within an optional response object. */
class NavigationTemperature {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NavigationTemperature, __args); Object.freeze(this); }
}
exports.NavigationTemperature = NavigationTemperature;
_runtime_1.py.classType(NavigationTemperature);
/** Nullable route-notification interval fields. */
class NavigationNotificationInterval {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NavigationNotificationInterval, __args); Object.freeze(this); }
}
exports.NavigationNotificationInterval = NavigationNotificationInterval;
_runtime_1.py.classType(NavigationNotificationInterval);
/** One nullable-field waypoint returned in the vehicle journey list. */
class JourneyWaypoint {
    id;
    name;
    address;
    coordinate;
    phone_number;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["coordinate", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, JourneyWaypoint, __args); Object.freeze(this); }
}
exports.JourneyWaypoint = JourneyWaypoint;
_runtime_1.py.classType(JourneyWaypoint);
/** One journey and its nullable waypoint list. */
class Journey {
    waypoints;
    static __fields = [["waypoints", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, Journey, __args); Object.freeze(this); }
}
exports.Journey = Journey;
_runtime_1.py.classType(Journey);
/** The nullable journey collection exposed by a connected vehicle. */
class VehicleJourneys {
    journeys;
    static __fields = [["journeys", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleJourneys, __args); Object.freeze(this); }
}
exports.VehicleJourneys = VehicleJourneys;
_runtime_1.py.classType(VehicleJourneys);
/** One waypoint returned in a planned route or route-history entry. */
class NavigationRouteWaypoint {
    name;
    phone_number;
    address;
    location;
    recalculated_waypoint_type;
    charging_output;
    static __fields = [["name", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["location", _runtime_1.py.MISSING], ["recalculated_waypoint_type", _runtime_1.py.MISSING], ["charging_output", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NavigationRouteWaypoint, __args); Object.freeze(this); }
}
exports.NavigationRouteWaypoint = NavigationRouteWaypoint;
_runtime_1.py.classType(NavigationRouteWaypoint);
/** One saved vehicle route with upstream nullability preserved. */
class PlannedRoute {
    id;
    name;
    estimated_time_of_departure;
    estimated_time_of_arrival;
    distance;
    temperature;
    routes;
    avoid_highway;
    avoid_tolls;
    avoid_ferries;
    should_recalculate_route;
    should_enable_notification;
    notification_interval;
    arrival_flag;
    departure_flag;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["estimated_time_of_departure", _runtime_1.py.MISSING], ["estimated_time_of_arrival", _runtime_1.py.MISSING], ["distance", _runtime_1.py.MISSING], ["temperature", _runtime_1.py.MISSING], ["routes", _runtime_1.py.MISSING], ["avoid_highway", _runtime_1.py.MISSING], ["avoid_tolls", _runtime_1.py.MISSING], ["avoid_ferries", _runtime_1.py.MISSING], ["should_recalculate_route", _runtime_1.py.MISSING], ["should_enable_notification", _runtime_1.py.MISSING], ["notification_interval", _runtime_1.py.MISSING], ["arrival_flag", _runtime_1.py.MISSING], ["departure_flag", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PlannedRoute, __args); Object.freeze(this); }
}
exports.PlannedRoute = PlannedRoute;
_runtime_1.py.classType(PlannedRoute);
/** The nullable saved-route collection exposed by an electric vehicle. */
class VehiclePlannedRoutes {
    planned_routes;
    static __fields = [["planned_routes", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehiclePlannedRoutes, __args); Object.freeze(this); }
}
exports.VehiclePlannedRoutes = VehiclePlannedRoutes;
_runtime_1.py.classType(VehiclePlannedRoutes);
/** One route-history entry returned for an electric AVK2 vehicle. */
class RouteHistoryEntry {
    id;
    name;
    estimated_time_of_departure;
    estimated_time_of_arrival;
    status;
    distance;
    temperature;
    routes;
    arrival_flag;
    departure_flag;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["estimated_time_of_departure", _runtime_1.py.MISSING], ["estimated_time_of_arrival", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING], ["distance", _runtime_1.py.MISSING], ["temperature", _runtime_1.py.MISSING], ["routes", _runtime_1.py.MISSING], ["arrival_flag", _runtime_1.py.MISSING], ["departure_flag", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RouteHistoryEntry, __args); Object.freeze(this); }
}
exports.RouteHistoryEntry = RouteHistoryEntry;
_runtime_1.py.classType(RouteHistoryEntry);
/** The nullable route-history collection exposed by an electric AVK2 vehicle. */
class VehicleRoutesHistory {
    route_history;
    static __fields = [["route_history", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleRoutesHistory, __args); Object.freeze(this); }
}
exports.VehicleRoutesHistory = VehicleRoutesHistory;
_runtime_1.py.classType(VehicleRoutesHistory);
/** One nullable-field point-of-interest destination. */
class PointOfInterestDestination {
    id;
    phone_number;
    name;
    address;
    coordinate;
    static __fields = [["id", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["coordinate", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PointOfInterestDestination, __args); Object.freeze(this); }
}
exports.PointOfInterestDestination = PointOfInterestDestination;
_runtime_1.py.classType(PointOfInterestDestination);
/** One point-of-interest folder and its nullable destination list. */
class PointOfInterestDestinationFolder {
    folder_name;
    destinations;
    static __fields = [["folder_name", _runtime_1.py.MISSING], ["destinations", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PointOfInterestDestinationFolder, __args); Object.freeze(this); }
}
exports.PointOfInterestDestinationFolder = PointOfInterestDestinationFolder;
_runtime_1.py.classType(PointOfInterestDestinationFolder);
/** The nullable point-of-interest folders exposed by a connected vehicle. */
class VehiclePointOfInterestDestinations {
    folders;
    static __fields = [["folders", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehiclePointOfInterestDestinations, __args); Object.freeze(this); }
}
exports.VehiclePointOfInterestDestinations = VehiclePointOfInterestDestinations;
_runtime_1.py.classType(VehiclePointOfInterestDestinations);
/** One unsaved T-Junction location returned by an EVO vehicle. */
class UnsavedTJunctionLocation {
    id;
    latitude;
    longitude;
    direction;
    launch_date;
    address;
    static __fields = [["id", _runtime_1.py.MISSING], ["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING], ["direction", _runtime_1.py.MISSING], ["launch_date", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnsavedTJunctionLocation, __args); Object.freeze(this); }
}
exports.UnsavedTJunctionLocation = UnsavedTJunctionLocation;
_runtime_1.py.classType(UnsavedTJunctionLocation);
/** One saved T-Junction location returned by an EVO vehicle. */
class SavedTJunctionLocation {
    id;
    latitude;
    longitude;
    direction;
    location_name;
    address;
    static __fields = [["id", _runtime_1.py.MISSING], ["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING], ["direction", _runtime_1.py.MISSING], ["location_name", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SavedTJunctionLocation, __args); Object.freeze(this); }
}
exports.SavedTJunctionLocation = SavedTJunctionLocation;
_runtime_1.py.classType(SavedTJunctionLocation);
/** The non-null saved and unsaved T-Junction location collections. */
class TJunctionLocations {
    unsaved_t_junction_locations;
    saved_t_junction_locations;
    static __fields = [["unsaved_t_junction_locations", _runtime_1.py.MISSING], ["saved_t_junction_locations", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TJunctionLocations, __args); Object.freeze(this); }
}
exports.TJunctionLocations = TJunctionLocations;
_runtime_1.py.classType(TJunctionLocations);
exports.EVWaypointStatus = _runtime_1.py.enumType("EVWaypointStatus", { "AVAILABLE": "AVAILABLE", "UNAVAILABLE": "UNAVAILABLE", "UNKNOWN": "UNKNOWN", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.EVWaypointRouteType = _runtime_1.py.enumType("EVWaypointRouteType", { "ORIGIN": "ORIGIN", "STOP": "STOP", "CHARGING_STATION": "CHARGING_STATION", "DESTINATION": "DESTINATION", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** One nullable-field waypoint in a calculated EV route. */
class EVWaypointRoute {
    name;
    arrival_time;
    charging_time_in_seconds;
    level;
    type;
    address;
    location;
    status;
    charging_output;
    static __fields = [["name", _runtime_1.py.MISSING], ["arrival_time", _runtime_1.py.MISSING], ["charging_time_in_seconds", _runtime_1.py.MISSING], ["level", _runtime_1.py.MISSING], ["type", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["location", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING], ["charging_output", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVWaypointRoute, __args); Object.freeze(this); }
}
exports.EVWaypointRoute = EVWaypointRoute;
_runtime_1.py.classType(EVWaypointRoute);
/** A successful EV route calculation. */
class EVWaypoint {
    departure_time;
    arrival_time;
    total_charging_time_in_seconds;
    total_travel_time_in_seconds;
    total_distance;
    routes;
    static __fields = [["departure_time", _runtime_1.py.MISSING], ["arrival_time", _runtime_1.py.MISSING], ["total_charging_time_in_seconds", _runtime_1.py.MISSING], ["total_travel_time_in_seconds", _runtime_1.py.MISSING], ["total_distance", _runtime_1.py.MISSING], ["routes", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVWaypoint, __args); Object.freeze(this); }
}
exports.EVWaypoint = EVWaypoint;
_runtime_1.py.classType(EVWaypoint);
/** Battery fields missing from an EV route request. */
class MissingBatteryDetailsErrorDetails {
    battery_capacity;
    starting_battery_level;
    static __fields = [["battery_capacity", _runtime_1.py.MISSING], ["starting_battery_level", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MissingBatteryDetailsErrorDetails, __args); Object.freeze(this); }
}
exports.MissingBatteryDetailsErrorDetails = MissingBatteryDetailsErrorDetails;
_runtime_1.py.classType(MissingBatteryDetailsErrorDetails);
/** Charging-station search values that prevented EV route completion. */
class NoChargingStationWithinRangeErrorDetails {
    center;
    radius;
    charging_connectors;
    min_power;
    static __fields = [["center", _runtime_1.py.MISSING], ["radius", _runtime_1.py.MISSING], ["charging_connectors", _runtime_1.py.MISSING], ["min_power", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NoChargingStationWithinRangeErrorDetails, __args); Object.freeze(this); }
}
exports.NoChargingStationWithinRangeErrorDetails = NoChargingStationWithinRangeErrorDetails;
_runtime_1.py.classType(NoChargingStationWithinRangeErrorDetails);
/** Route sub-step values that prevented EV route completion. */
class UnableToCompleteSubStepErrorDetails {
    start;
    end;
    distance;
    speed;
    slope;
    starting_battery;
    battery_capacity;
    battery_consumption;
    soc_after_charging_near_start;
    minimum_battery;
    charging_station_max_power;
    static __fields = [["start", _runtime_1.py.MISSING], ["end", _runtime_1.py.MISSING], ["distance", _runtime_1.py.MISSING], ["speed", _runtime_1.py.MISSING], ["slope", _runtime_1.py.MISSING], ["starting_battery", _runtime_1.py.MISSING], ["battery_capacity", _runtime_1.py.MISSING], ["battery_consumption", _runtime_1.py.MISSING], ["soc_after_charging_near_start", _runtime_1.py.MISSING], ["minimum_battery", _runtime_1.py.MISSING], ["charging_station_max_power", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnableToCompleteSubStepErrorDetails, __args); Object.freeze(this); }
}
exports.UnableToCompleteSubStepErrorDetails = UnableToCompleteSubStepErrorDetails;
_runtime_1.py.classType(UnableToCompleteSubStepErrorDetails);
/** A failed EV route calculation whose minimum requirements were not met. */
class EVWaypointMinimumRequirementNotMetError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVWaypointMinimumRequirementNotMetError, __args); Object.freeze(this); }
}
exports.EVWaypointMinimumRequirementNotMetError = EVWaypointMinimumRequirementNotMetError;
_runtime_1.py.classType(EVWaypointMinimumRequirementNotMetError);
/** A failed EV route calculation that exceeded a service limit. */
class EVWaypointLimitReachedError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVWaypointLimitReachedError, __args); Object.freeze(this); }
}
exports.EVWaypointLimitReachedError = EVWaypointLimitReachedError;
_runtime_1.py.classType(EVWaypointLimitReachedError);
/** A failed EV route calculation with an optional typed detail branch. */
class EVWaypointUnableToCompleteRouteError {
    reason;
    message;
    details;
    static __fields = [["reason", _runtime_1.py.MISSING], ["message", _runtime_1.py.MISSING], ["details", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVWaypointUnableToCompleteRouteError, __args); Object.freeze(this); }
}
exports.EVWaypointUnableToCompleteRouteError = EVWaypointUnableToCompleteRouteError;
_runtime_1.py.classType(EVWaypointUnableToCompleteRouteError);
//# sourceMappingURL=navigation_models.js.map