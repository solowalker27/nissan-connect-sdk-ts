import { py as $ } from "./_runtime";
import { DistanceUnit, TemperatureUnit } from "./models";
export { DistanceUnit, TemperatureUnit };
import { NotificationIntervalUnit, RecalculatedWaypointType, RouteStatus } from "./navigation_inputs";
export { NotificationIntervalUnit, RecalculatedWaypointType, RouteStatus };
/** Nullable address fields returned for a navigation destination. */
export declare class NavigationAddress {
    readonly address1: string | null;
    readonly address2: string | null;
    readonly city: string | null;
    readonly state: string | null;
    readonly postal_code: string | null;
    readonly country: string | null;
    static __fields: (string | symbol)[][];
    constructor(address1: string | null, address2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null);
    constructor(options: {
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        postal_code: string | null;
        country: string | null;
    });
}
/** Nullable coordinates returned for a navigation destination. */
export declare class NavigationCoordinate {
    readonly latitude: number | null;
    readonly longitude: number | null;
    static __fields: (string | symbol)[][];
    constructor(latitude: number | null, longitude: number | null);
    constructor(options: {
        latitude: number | null;
        longitude: number | null;
    });
}
/** A non-null distance value and unit within an optional response object. */
export declare class NavigationDistance {
    readonly value: number;
    readonly unit: DistanceUnit;
    static __fields: (string | symbol)[][];
    constructor(value: number, unit: DistanceUnit);
    constructor(options: {
        value: number;
        unit: DistanceUnit;
    });
}
/** A non-null temperature value and unit within an optional response object. */
export declare class NavigationTemperature {
    readonly value: number;
    readonly unit: TemperatureUnit;
    static __fields: (string | symbol)[][];
    constructor(value: number, unit: TemperatureUnit);
    constructor(options: {
        value: number;
        unit: TemperatureUnit;
    });
}
/** Nullable route-notification interval fields. */
export declare class NavigationNotificationInterval {
    readonly value: number | null;
    readonly unit: NotificationIntervalUnit | null;
    static __fields: (string | symbol)[][];
    constructor(value: number | null, unit: NotificationIntervalUnit | null);
    constructor(options: {
        value: number | null;
        unit: NotificationIntervalUnit | null;
    });
}
/** One nullable-field waypoint returned in the vehicle journey list. */
export declare class JourneyWaypoint {
    readonly id: string | null;
    readonly name: string | null;
    readonly address: NavigationAddress | null;
    readonly coordinate: NavigationCoordinate | null;
    readonly phone_number: string | null;
    static __fields: (string | symbol)[][];
    constructor(id: string | null, name: string | null, address: NavigationAddress | null, coordinate: NavigationCoordinate | null, phone_number: string | null);
    constructor(options: {
        id: string | null;
        name: string | null;
        address: NavigationAddress | null;
        coordinate: NavigationCoordinate | null;
        phone_number: string | null;
    });
}
/** One journey and its nullable waypoint list. */
export declare class Journey {
    readonly waypoints: ReadonlyArray<JourneyWaypoint | null> | null;
    static __fields: (string | symbol)[][];
    constructor(waypoints: ReadonlyArray<JourneyWaypoint | null> | null);
    constructor(options: {
        waypoints: ReadonlyArray<JourneyWaypoint | null> | null;
    });
}
/** The nullable journey collection exposed by a connected vehicle. */
export declare class VehicleJourneys {
    readonly journeys: ReadonlyArray<Journey | null> | null;
    static __fields: (string | symbol)[][];
    constructor(journeys: ReadonlyArray<Journey | null> | null);
    constructor(options: {
        journeys: ReadonlyArray<Journey | null> | null;
    });
}
/** One waypoint returned in a planned route or route-history entry. */
export declare class NavigationRouteWaypoint {
    readonly name: string | null;
    readonly phone_number: string | null;
    readonly address: NavigationAddress | null;
    readonly location: NavigationCoordinate | null;
    readonly recalculated_waypoint_type: RecalculatedWaypointType | null;
    readonly charging_output: number | null;
    static __fields: (string | symbol)[][];
    constructor(name: string | null, phone_number: string | null, address: NavigationAddress | null, location: NavigationCoordinate | null, recalculated_waypoint_type: RecalculatedWaypointType | null, charging_output: number | null);
    constructor(options: {
        name: string | null;
        phone_number: string | null;
        address: NavigationAddress | null;
        location: NavigationCoordinate | null;
        recalculated_waypoint_type: RecalculatedWaypointType | null;
        charging_output: number | null;
    });
}
/** One saved vehicle route with upstream nullability preserved. */
export declare class PlannedRoute {
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
    static __fields: (string | symbol)[][];
    constructor(id: string | null, name: string | null, estimated_time_of_departure: $.DateValue | null, estimated_time_of_arrival: $.DateValue | null, distance: NavigationDistance | null, temperature: NavigationTemperature | null, routes: ReadonlyArray<NavigationRouteWaypoint | null> | null, avoid_highway: boolean | null, avoid_tolls: boolean | null, avoid_ferries: boolean | null, should_recalculate_route: boolean | null, should_enable_notification: boolean | null, notification_interval: NavigationNotificationInterval | null, arrival_flag: boolean | null, departure_flag: boolean | null);
    constructor(options: {
        id: string | null;
        name: string | null;
        estimated_time_of_departure: $.DateValue | null;
        estimated_time_of_arrival: $.DateValue | null;
        distance: NavigationDistance | null;
        temperature: NavigationTemperature | null;
        routes: ReadonlyArray<NavigationRouteWaypoint | null> | null;
        avoid_highway: boolean | null;
        avoid_tolls: boolean | null;
        avoid_ferries: boolean | null;
        should_recalculate_route: boolean | null;
        should_enable_notification: boolean | null;
        notification_interval: NavigationNotificationInterval | null;
        arrival_flag: boolean | null;
        departure_flag: boolean | null;
    });
}
/** The nullable saved-route collection exposed by an electric vehicle. */
export declare class VehiclePlannedRoutes {
    readonly planned_routes: ReadonlyArray<PlannedRoute | null> | null;
    static __fields: (string | symbol)[][];
    constructor(planned_routes: ReadonlyArray<PlannedRoute | null> | null);
    constructor(options: {
        planned_routes: ReadonlyArray<PlannedRoute | null> | null;
    });
}
/** One route-history entry returned for an electric AVK2 vehicle. */
export declare class RouteHistoryEntry {
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
    static __fields: (string | symbol)[][];
    constructor(id: string | null, name: string | null, estimated_time_of_departure: $.DateValue | null, estimated_time_of_arrival: $.DateValue | null, status: RouteStatus | null, distance: NavigationDistance | null, temperature: NavigationTemperature | null, routes: ReadonlyArray<NavigationRouteWaypoint | null> | null, arrival_flag: boolean | null, departure_flag: boolean | null);
    constructor(options: {
        id: string | null;
        name: string | null;
        estimated_time_of_departure: $.DateValue | null;
        estimated_time_of_arrival: $.DateValue | null;
        status: RouteStatus | null;
        distance: NavigationDistance | null;
        temperature: NavigationTemperature | null;
        routes: ReadonlyArray<NavigationRouteWaypoint | null> | null;
        arrival_flag: boolean | null;
        departure_flag: boolean | null;
    });
}
/** The nullable route-history collection exposed by an electric AVK2 vehicle. */
export declare class VehicleRoutesHistory {
    readonly route_history: ReadonlyArray<RouteHistoryEntry | null> | null;
    static __fields: (string | symbol)[][];
    constructor(route_history: ReadonlyArray<RouteHistoryEntry | null> | null);
    constructor(options: {
        route_history: ReadonlyArray<RouteHistoryEntry | null> | null;
    });
}
/** One nullable-field point-of-interest destination. */
export declare class PointOfInterestDestination {
    readonly id: string | null;
    readonly phone_number: string | null;
    readonly name: string | null;
    readonly address: NavigationAddress | null;
    readonly coordinate: NavigationCoordinate | null;
    static __fields: (string | symbol)[][];
    constructor(id: string | null, phone_number: string | null, name: string | null, address: NavigationAddress | null, coordinate: NavigationCoordinate | null);
    constructor(options: {
        id: string | null;
        phone_number: string | null;
        name: string | null;
        address: NavigationAddress | null;
        coordinate: NavigationCoordinate | null;
    });
}
/** One point-of-interest folder and its nullable destination list. */
export declare class PointOfInterestDestinationFolder {
    readonly folder_name: string | null;
    readonly destinations: ReadonlyArray<PointOfInterestDestination | null> | null;
    static __fields: (string | symbol)[][];
    constructor(folder_name: string | null, destinations: ReadonlyArray<PointOfInterestDestination | null> | null);
    constructor(options: {
        folder_name: string | null;
        destinations: ReadonlyArray<PointOfInterestDestination | null> | null;
    });
}
/** The nullable point-of-interest folders exposed by a connected vehicle. */
export declare class VehiclePointOfInterestDestinations {
    readonly folders: ReadonlyArray<PointOfInterestDestinationFolder | null> | null;
    static __fields: (string | symbol)[][];
    constructor(folders: ReadonlyArray<PointOfInterestDestinationFolder | null> | null);
    constructor(options: {
        folders: ReadonlyArray<PointOfInterestDestinationFolder | null> | null;
    });
}
/** One unsaved T-Junction location returned by an EVO vehicle. */
export declare class UnsavedTJunctionLocation {
    readonly id: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly direction: number;
    readonly launch_date: $.DateValue;
    readonly address: NavigationAddress | null;
    static __fields: (string | symbol)[][];
    constructor(id: string, latitude: number, longitude: number, direction: number, launch_date: $.DateValue, address: NavigationAddress | null);
    constructor(options: {
        id: string;
        latitude: number;
        longitude: number;
        direction: number;
        launch_date: $.DateValue;
        address: NavigationAddress | null;
    });
}
/** One saved T-Junction location returned by an EVO vehicle. */
export declare class SavedTJunctionLocation {
    readonly id: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly direction: number;
    readonly location_name: string;
    readonly address: NavigationAddress | null;
    static __fields: (string | symbol)[][];
    constructor(id: string, latitude: number, longitude: number, direction: number, location_name: string, address: NavigationAddress | null);
    constructor(options: {
        id: string;
        latitude: number;
        longitude: number;
        direction: number;
        location_name: string;
        address: NavigationAddress | null;
    });
}
/** The non-null saved and unsaved T-Junction location collections. */
export declare class TJunctionLocations {
    readonly unsaved_t_junction_locations: ReadonlyArray<UnsavedTJunctionLocation>;
    readonly saved_t_junction_locations: ReadonlyArray<SavedTJunctionLocation>;
    static __fields: (string | symbol)[][];
    constructor(unsaved_t_junction_locations: ReadonlyArray<UnsavedTJunctionLocation>, saved_t_junction_locations: ReadonlyArray<SavedTJunctionLocation>);
    constructor(options: {
        unsaved_t_junction_locations: ReadonlyArray<UnsavedTJunctionLocation>;
        saved_t_junction_locations: ReadonlyArray<SavedTJunctionLocation>;
    });
}
export declare const EVWaypointStatus: $.EnumType<{
    readonly AVAILABLE: "AVAILABLE";
    readonly UNAVAILABLE: "UNAVAILABLE";
    readonly UNKNOWN: "UNKNOWN";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EVWaypointStatus = ReturnType<typeof EVWaypointStatus>;
export declare const EVWaypointRouteType: $.EnumType<{
    readonly ORIGIN: "ORIGIN";
    readonly STOP: "STOP";
    readonly CHARGING_STATION: "CHARGING_STATION";
    readonly DESTINATION: "DESTINATION";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EVWaypointRouteType = ReturnType<typeof EVWaypointRouteType>;
/** One nullable-field waypoint in a calculated EV route. */
export declare class EVWaypointRoute {
    readonly name: string | null;
    readonly arrival_time: $.DateValue | null;
    readonly charging_time_in_seconds: number | null;
    readonly level: number | null;
    readonly type: EVWaypointRouteType | null;
    readonly address: NavigationAddress | null;
    readonly location: NavigationCoordinate | null;
    readonly status: EVWaypointStatus | null;
    readonly charging_output: number | null;
    static __fields: (string | symbol)[][];
    constructor(name: string | null, arrival_time: $.DateValue | null, charging_time_in_seconds: number | null, level: number | null, type: EVWaypointRouteType | null, address: NavigationAddress | null, location: NavigationCoordinate | null, status: EVWaypointStatus | null, charging_output: number | null);
    constructor(options: {
        name: string | null;
        arrival_time: $.DateValue | null;
        charging_time_in_seconds: number | null;
        level: number | null;
        type: EVWaypointRouteType | null;
        address: NavigationAddress | null;
        location: NavigationCoordinate | null;
        status: EVWaypointStatus | null;
        charging_output: number | null;
    });
}
/** A successful EV route calculation. */
export declare class EVWaypoint {
    readonly departure_time: $.DateValue | null;
    readonly arrival_time: $.DateValue | null;
    readonly total_charging_time_in_seconds: number | null;
    readonly total_travel_time_in_seconds: number | null;
    readonly total_distance: NavigationDistance | null;
    readonly routes: ReadonlyArray<EVWaypointRoute | null> | null;
    static __fields: (string | symbol)[][];
    constructor(departure_time: $.DateValue | null, arrival_time: $.DateValue | null, total_charging_time_in_seconds: number | null, total_travel_time_in_seconds: number | null, total_distance: NavigationDistance | null, routes: ReadonlyArray<EVWaypointRoute | null> | null);
    constructor(options: {
        departure_time: $.DateValue | null;
        arrival_time: $.DateValue | null;
        total_charging_time_in_seconds: number | null;
        total_travel_time_in_seconds: number | null;
        total_distance: NavigationDistance | null;
        routes: ReadonlyArray<EVWaypointRoute | null> | null;
    });
}
/** Battery fields missing from an EV route request. */
export declare class MissingBatteryDetailsErrorDetails {
    readonly battery_capacity: string | null;
    readonly starting_battery_level: string | null;
    static __fields: (string | symbol)[][];
    constructor(battery_capacity: string | null, starting_battery_level: string | null);
    constructor(options: {
        battery_capacity: string | null;
        starting_battery_level: string | null;
    });
}
/** Charging-station search values that prevented EV route completion. */
export declare class NoChargingStationWithinRangeErrorDetails {
    readonly center: string | null;
    readonly radius: string | null;
    readonly charging_connectors: string | null;
    readonly min_power: string | null;
    static __fields: (string | symbol)[][];
    constructor(center: string | null, radius: string | null, charging_connectors: string | null, min_power: string | null);
    constructor(options: {
        center: string | null;
        radius: string | null;
        charging_connectors: string | null;
        min_power: string | null;
    });
}
/** Route sub-step values that prevented EV route completion. */
export declare class UnableToCompleteSubStepErrorDetails {
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
    static __fields: (string | symbol)[][];
    constructor(start: string | null, end: string | null, distance: string | null, speed: string | null, slope: string | null, starting_battery: string | null, battery_capacity: string | null, battery_consumption: string | null, soc_after_charging_near_start: string | null, minimum_battery: string | null, charging_station_max_power: string | null);
    constructor(options: {
        start: string | null;
        end: string | null;
        distance: string | null;
        speed: string | null;
        slope: string | null;
        starting_battery: string | null;
        battery_capacity: string | null;
        battery_consumption: string | null;
        soc_after_charging_near_start: string | null;
        minimum_battery: string | null;
        charging_station_max_power: string | null;
    });
}
export type EVWaypointErrorDetails = MissingBatteryDetailsErrorDetails | NoChargingStationWithinRangeErrorDetails | UnableToCompleteSubStepErrorDetails;
/** A failed EV route calculation whose minimum requirements were not met. */
export declare class EVWaypointMinimumRequirementNotMetError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** A failed EV route calculation that exceeded a service limit. */
export declare class EVWaypointLimitReachedError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** A failed EV route calculation with an optional typed detail branch. */
export declare class EVWaypointUnableToCompleteRouteError {
    readonly reason: string;
    readonly message: string;
    readonly details: EVWaypointErrorDetails | null;
    static __fields: (string | symbol)[][];
    constructor(reason: string, message: string, details: EVWaypointErrorDetails | null);
    constructor(options: {
        reason: string;
        message: string;
        details: EVWaypointErrorDetails | null;
    });
}
export type EVWaypointResult = EVWaypoint | EVWaypointMinimumRequirementNotMetError | EVWaypointLimitReachedError | EVWaypointUnableToCompleteRouteError;
