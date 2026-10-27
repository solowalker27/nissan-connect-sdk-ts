import { py as $ } from "./_runtime";
import { AddressInput, CoordinateInput, address_input, coordinate_input } from "./common_inputs";
export { AddressInput, CoordinateInput, address_input, coordinate_input };
import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };
import { DistanceUnit, TemperatureUnit } from "./models";
export { DistanceUnit, TemperatureUnit };
export declare const NavigationDataSource: $.EnumType<{
    readonly KMR: "KMR";
}>;
export type NavigationDataSource = ReturnType<typeof NavigationDataSource>;
export declare const PointOfInterestFolder: $.EnumType<{
    readonly FAVORITES: "FAVORITES";
    readonly RECENTS: "RECENTS";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type PointOfInterestFolder = ReturnType<typeof PointOfInterestFolder>;
export declare const PointOfInterestFolderFilter: $.EnumType<{
    readonly FAVORITES: "FAVORITES";
    readonly RECENTS: "RECENTS";
    readonly BOTH: "BOTH";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type PointOfInterestFolderFilter = ReturnType<typeof PointOfInterestFolderFilter>;
export declare const RouteCalculationCondition: $.EnumType<{
    readonly FASTEST_ROUTE: "FASTEST_ROUTE";
    readonly SHORTEST_ROUTE: "SHORTEST_ROUTE";
    readonly ECO_ROUTE: "ECO_ROUTE";
    readonly GENERAL_ROUTE: "GENERAL_ROUTE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type RouteCalculationCondition = ReturnType<typeof RouteCalculationCondition>;
export declare const RecalculatedWaypointType: $.EnumType<{
    readonly WAYPOINT: "WAYPOINT";
    readonly EPOI_NOT_RECALCULATED: "EPOI_NOT_RECALCULATED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type RecalculatedWaypointType = ReturnType<typeof RecalculatedWaypointType>;
export declare const ChargingConnectorType: $.EnumType<{
    readonly NORMAL: "NORMAL";
    readonly QUICK: "QUICK";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type ChargingConnectorType = ReturnType<typeof ChargingConnectorType>;
export declare const PlugConnectorType: $.EnumType<{
    readonly CCS: "CCS";
    readonly J1772: "J1772";
    readonly NACS: "NACS";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type PlugConnectorType = ReturnType<typeof PlugConnectorType>;
export declare const RouteChargingTimeUnit: $.EnumType<{
    readonly MINUTE: "MIN";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type RouteChargingTimeUnit = ReturnType<typeof RouteChargingTimeUnit>;
export declare const NotificationIntervalUnit: $.EnumType<{
    readonly MINUTE: "MIN";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type NotificationIntervalUnit = ReturnType<typeof NotificationIntervalUnit>;
export declare const RouteStatus: $.EnumType<{
    readonly RESERVED: "RESERVED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly CANCELLED: "CANCELLED";
    readonly DEPARTURED: "DEPARTURED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type RouteStatus = ReturnType<typeof RouteStatus>;
/** Destination sent as a journey waypoint or point of interest. */
export declare class DestinationInput {
    readonly name: string;
    readonly coordinate: CoordinateInput;
    readonly address: AddressInput;
    readonly phone_number: string | UnsetType | null;
    readonly recalculated_waypoint_type: RecalculatedWaypointType | UnsetType | null;
    readonly charging_output: number | UnsetType | null;
    static __fields: any[][];
    constructor(name: string, coordinate: CoordinateInput, address?: AddressInput, phone_number?: string | UnsetType | null, recalculated_waypoint_type?: RecalculatedWaypointType | UnsetType | null, charging_output?: number | UnsetType | null);
    constructor(options: {
        name: string;
        coordinate: CoordinateInput;
        address?: AddressInput;
        phone_number?: string | UnsetType | null;
        recalculated_waypoint_type?: RecalculatedWaypointType | UnsetType | null;
        charging_output?: number | UnsetType | null;
    });
}
/** Charging duration attached to a planned-route waypoint. */
export declare class RouteChargingTimeInput {
    readonly value: number;
    readonly unit: RouteChargingTimeUnit;
    static __fields: any[][];
    constructor(value: number, unit?: RouteChargingTimeUnit);
    constructor(options: {
        value: number;
        unit?: RouteChargingTimeUnit;
    });
}
/** One waypoint stored in a planned route. */
export declare class RouteWaypointInput {
    readonly name: string;
    readonly coordinate: CoordinateInput;
    readonly address: AddressInput;
    readonly phone_number: string | UnsetType | null;
    readonly recalculated_waypoint_type: RecalculatedWaypointType | UnsetType | null;
    readonly charging_output: number | UnsetType | null;
    readonly charging_time: RouteChargingTimeInput | UnsetType | null;
    readonly charger_type: ChargingConnectorType | UnsetType | null;
    readonly state_of_charge_difference: number | UnsetType | null;
    static __fields: any[][];
    constructor(name: string, coordinate: CoordinateInput, address?: AddressInput, phone_number?: string | UnsetType | null, recalculated_waypoint_type?: RecalculatedWaypointType | UnsetType | null, charging_output?: number | UnsetType | null, charging_time?: RouteChargingTimeInput | UnsetType | null, charger_type?: ChargingConnectorType | UnsetType | null, state_of_charge_difference?: number | UnsetType | null);
    constructor(options: {
        name: string;
        coordinate: CoordinateInput;
        address?: AddressInput;
        phone_number?: string | UnsetType | null;
        recalculated_waypoint_type?: RecalculatedWaypointType | UnsetType | null;
        charging_output?: number | UnsetType | null;
        charging_time?: RouteChargingTimeInput | UnsetType | null;
        charger_type?: ChargingConnectorType | UnsetType | null;
        state_of_charge_difference?: number | UnsetType | null;
    });
}
/** Integer route distance whose non-null unit may be omitted. */
export declare class RouteDistanceInput {
    readonly value: number;
    readonly unit: DistanceUnit | UnsetType;
    static __fields: any[][];
    constructor(value: number, unit?: DistanceUnit | UnsetType);
    constructor(options: {
        value: number;
        unit?: DistanceUnit | UnsetType;
    });
}
/** Route temperature whose unit may be omitted or explicitly null. */
export declare class RouteTemperatureInput {
    readonly value: number;
    readonly unit: TemperatureUnit | UnsetType | null;
    static __fields: any[][];
    constructor(value: number, unit?: TemperatureUnit | UnsetType | null);
    constructor(options: {
        value: number;
        unit?: TemperatureUnit | UnsetType | null;
    });
}
/** Notification interval stored with a planned route. */
export declare class RouteNotificationIntervalInput {
    readonly value: number;
    readonly unit: NotificationIntervalUnit;
    static __fields: any[][];
    constructor(value: number, unit?: NotificationIntervalUnit);
    constructor(options: {
        value: number;
        unit?: NotificationIntervalUnit;
    });
}
/** Complete route settings required by Nissan's save-route mutation. */
export declare class PlannedRouteInput {
    readonly name: string;
    readonly routes: ReadonlyArray<RouteWaypointInput | null>;
    readonly estimated_time_of_departure: $.DateValue;
    readonly estimated_time_of_arrival: $.DateValue;
    readonly distance: RouteDistanceInput;
    readonly temperature: RouteTemperatureInput | UnsetType | null;
    readonly should_recalculate_route: boolean | UnsetType | null;
    readonly should_enable_notification: boolean | UnsetType | null;
    readonly notification_interval: RouteNotificationIntervalInput | UnsetType | null;
    readonly avoid_highway: boolean | UnsetType | null;
    readonly avoid_tolls: boolean | UnsetType | null;
    readonly avoid_ferries: boolean | UnsetType | null;
    static __fields: any[][];
    constructor(name: string, routes: ReadonlyArray<RouteWaypointInput | null>, estimated_time_of_departure: $.DateValue, estimated_time_of_arrival: $.DateValue, distance: RouteDistanceInput, temperature?: RouteTemperatureInput | UnsetType | null, should_recalculate_route?: boolean | UnsetType | null, should_enable_notification?: boolean | UnsetType | null, notification_interval?: RouteNotificationIntervalInput | UnsetType | null, avoid_highway?: boolean | UnsetType | null, avoid_tolls?: boolean | UnsetType | null, avoid_ferries?: boolean | UnsetType | null);
    constructor(options: {
        name: string;
        routes: ReadonlyArray<RouteWaypointInput | null>;
        estimated_time_of_departure: $.DateValue;
        estimated_time_of_arrival: $.DateValue;
        distance: RouteDistanceInput;
        temperature?: RouteTemperatureInput | UnsetType | null;
        should_recalculate_route?: boolean | UnsetType | null;
        should_enable_notification?: boolean | UnsetType | null;
        notification_interval?: RouteNotificationIntervalInput | UnsetType | null;
        avoid_highway?: boolean | UnsetType | null;
        avoid_tolls?: boolean | UnsetType | null;
        avoid_ferries?: boolean | UnsetType | null;
    });
}
/** Partial planned-route update; omitted fields remain unchanged. */
export declare class PlannedRouteUpdate {
    readonly id: string;
    readonly name: string | UnsetType | null;
    readonly routes: ReadonlyArray<RouteWaypointInput | null> | UnsetType | null;
    readonly estimated_time_of_departure: $.DateValue | UnsetType | null;
    readonly estimated_time_of_arrival: $.DateValue | UnsetType | null;
    readonly distance: RouteDistanceInput | UnsetType | null;
    readonly temperature: RouteTemperatureInput | UnsetType | null;
    readonly notification_interval: RouteNotificationIntervalInput | UnsetType | null;
    readonly should_enable_notification: boolean | UnsetType | null;
    readonly should_recalculate_route: boolean | UnsetType | null;
    readonly avoid_highway: boolean | UnsetType | null;
    readonly avoid_tolls: boolean | UnsetType | null;
    readonly avoid_ferries: boolean | UnsetType | null;
    static __fields: any[][];
    constructor(id: string, name?: string | UnsetType | null, routes?: ReadonlyArray<RouteWaypointInput | null> | UnsetType | null, estimated_time_of_departure?: $.DateValue | UnsetType | null, estimated_time_of_arrival?: $.DateValue | UnsetType | null, distance?: RouteDistanceInput | UnsetType | null, temperature?: RouteTemperatureInput | UnsetType | null, notification_interval?: RouteNotificationIntervalInput | UnsetType | null, should_enable_notification?: boolean | UnsetType | null, should_recalculate_route?: boolean | UnsetType | null, avoid_highway?: boolean | UnsetType | null, avoid_tolls?: boolean | UnsetType | null, avoid_ferries?: boolean | UnsetType | null);
    constructor(options: {
        id: string;
        name?: string | UnsetType | null;
        routes?: ReadonlyArray<RouteWaypointInput | null> | UnsetType | null;
        estimated_time_of_departure?: $.DateValue | UnsetType | null;
        estimated_time_of_arrival?: $.DateValue | UnsetType | null;
        distance?: RouteDistanceInput | UnsetType | null;
        temperature?: RouteTemperatureInput | UnsetType | null;
        notification_interval?: RouteNotificationIntervalInput | UnsetType | null;
        should_enable_notification?: boolean | UnsetType | null;
        should_recalculate_route?: boolean | UnsetType | null;
        avoid_highway?: boolean | UnsetType | null;
        avoid_tolls?: boolean | UnsetType | null;
        avoid_ferries?: boolean | UnsetType | null;
    });
}
/** Unsaved T-Junction location selected for saving. */
export declare class TJunctionLocationInput {
    readonly id: string;
    readonly name: string;
    static __fields: (string | symbol)[][];
    constructor(id: string, name: string);
    constructor(options: {
        id: string;
        name: string;
    });
}
export declare function destination_input(value: DestinationInput): Record<string, unknown>;
export declare function route_waypoint_input(value: RouteWaypointInput): Record<string, unknown>;
export declare function route_distance_input(value: RouteDistanceInput): Record<string, unknown>;
export declare function route_temperature_input(value: RouteTemperatureInput): Record<string, unknown>;
export declare function route_notification_interval_input(value: RouteNotificationIntervalInput): Record<string, unknown>;
export declare function route_charging_time_input(value: RouteChargingTimeInput): Record<string, unknown>;
export declare function planned_route_input(value: PlannedRouteInput): Record<string, unknown>;
export declare function planned_route_update_input(value: PlannedRouteUpdate): Record<string, unknown>;
export declare function t_junction_location_input(value: TJunctionLocationInput): Record<string, unknown>;
export declare function save_t_junction_locations_input(vin: string, last_updated_at: string, locations: ReadonlyArray<TJunctionLocationInput>): Record<string, unknown>;
export declare function update_saved_t_junction_location_input(vin: string, location_id: string, location_name: string): Record<string, unknown>;
export declare function delete_saved_t_junction_locations_input(vin: string, location_ids: ReadonlyArray<string>, last_updated_at: string): Record<string, unknown>;
export declare function delete_unsaved_t_junction_locations_input(vin: string, location_ids: ReadonlyArray<string>): Record<string, unknown>;
export declare function optional_destination_time(value: $.DateValue | UnsetType | null): unknown;
export declare function optional_navigation_enum(value: $.EnumValue | UnsetType | null): unknown;
export declare function navigation_enum_input(value: $.EnumValue): string;
export declare function nullable_route_waypoints_input(values: ReadonlyArray<RouteWaypointInput | null>): ReadonlyArray<unknown>;
export declare function nullable_plug_connector_types_input(values: ReadonlyArray<PlugConnectorType | null>): ReadonlyArray<string | null>;
export declare function optional_battery_level_string(value: number | UnsetType | null): unknown;
export declare function _optional_routes(value: ReadonlyArray<RouteWaypointInput | null> | UnsetType | null): unknown;
export declare function _optional_datetime(value: $.DateValue | UnsetType | null): unknown;
export declare function _optional_serialized(value: any | UnsetType | null, serializer: ((arg0: any) => unknown)): unknown;
