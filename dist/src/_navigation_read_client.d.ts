import { py as $ } from "./_runtime";
import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { _navigation_headers } from "./_client_helpers";
export { _navigation_headers };
import { UNSET, UnsetType, optional_input_fields } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields };
import { DistanceUnit, TemperatureUnit, VehicleLocation, VehiclePhotos } from "./models";
export { DistanceUnit, TemperatureUnit, VehicleLocation, VehiclePhotos };
import { NavigationDataSource, PlugConnectorType, PointOfInterestFolderFilter, RouteStatus, RouteWaypointInput, nullable_plug_connector_types_input, nullable_route_waypoints_input, optional_battery_level_string, optional_destination_time, optional_navigation_enum } from "./navigation_inputs";
export { NavigationDataSource, PlugConnectorType, PointOfInterestFolderFilter, RouteStatus, RouteWaypointInput, nullable_plug_connector_types_input, nullable_route_waypoints_input, optional_battery_level_string, optional_destination_time, optional_navigation_enum };
import { EVWaypointResult, TJunctionLocations, VehicleJourneys, VehiclePlannedRoutes, VehiclePointOfInterestDestinations, VehicleRoutesHistory } from "./navigation_models";
export { EVWaypointResult, TJunctionLocations, VehicleJourneys, VehiclePlannedRoutes, VehiclePointOfInterestDestinations, VehicleRoutesHistory };
import { parse_t_junction_locations, parse_vehicle_ev_waypoints, parse_vehicle_journeys, parse_vehicle_planned_routes, parse_vehicle_point_of_interest_destinations, parse_vehicle_routes_history } from "./navigation_parsing";
export { parse_t_junction_locations, parse_vehicle_ev_waypoints, parse_vehicle_journeys, parse_vehicle_planned_routes, parse_vehicle_point_of_interest_destinations, parse_vehicle_routes_history };
import { parse_photos_around_vehicle, parse_vehicle_location } from "./parsing";
export { parse_photos_around_vehicle, parse_vehicle_location };
declare const _NavigationReadClientMixin_base: any;
/** Translated upstream _NavigationReadClientMixin. */
export declare class _NavigationReadClientMixin extends _NavigationReadClientMixin_base {
    constructor(...__args: any[]);
    async_get_vehicle_location(vin: string): Promise<VehicleLocation>;
    async_get_photos_around_vehicle(vin: string): Promise<VehiclePhotos | null>;
    async_get_vehicle_journeys(vin: string): Promise<VehicleJourneys | null>;
    async_get_vehicle_planned_routes(vin: string, options?: {
        distance_unit?: DistanceUnit | UnsetType | null;
        temperature_unit?: TemperatureUnit | UnsetType | null;
        data_source?: NavigationDataSource | null;
    }): Promise<VehiclePlannedRoutes | null>;
    async_get_vehicle_point_of_interest_destinations(vin: string, options?: {
        folder?: PointOfInterestFolderFilter | UnsetType | null;
    }): Promise<VehiclePointOfInterestDestinations | null>;
    async_get_vehicle_routes_history(vin: string, options?: {
        distance_unit?: DistanceUnit | UnsetType | null;
        temperature_unit?: TemperatureUnit | UnsetType | null;
        status?: RouteStatus | UnsetType | null;
    }): Promise<VehicleRoutesHistory | null>;
    async_get_t_junction_locations(vin: string): Promise<TJunctionLocations | null>;
    async_get_vehicle_ev_waypoints(vin: string, routes: ReadonlyArray<RouteWaypointInput | null>, plug_connector_types: ReadonlyArray<PlugConnectorType | null>, options?: {
        depart_at?: $.DateValue | UnsetType | null;
        arrived_by?: $.DateValue | UnsetType | null;
        state_of_charge_at_destination?: number | UnsetType | null;
        distance_unit?: DistanceUnit | UnsetType | null;
        estimated_battery_level_at_departure?: number | UnsetType | null;
        minimum_power?: number | UnsetType | null;
        state_of_charge_at_stop?: number | UnsetType | null;
        use_hvac?: boolean | UnsetType | null;
        avoid_highway?: boolean | UnsetType | null;
        avoid_tolls?: boolean | UnsetType | null;
        avoid_ferries?: boolean | UnsetType | null;
        data_source?: NavigationDataSource | null;
    }): Promise<EVWaypointResult | null>;
}
export interface _NavigationReadClientMixin extends _NissanClientBase {
}
