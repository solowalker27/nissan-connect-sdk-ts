import { py as $ } from "./_runtime";
import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { _navigation_headers } from "./_client_helpers";
export { _navigation_headers };
import { UNSET, UnsetType, optional_input_fields } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields };
import { ServiceRequest, ServiceRequestKind } from "./models";
export { ServiceRequest, ServiceRequestKind };
import { DestinationInput, NavigationDataSource, PlannedRouteInput, PlannedRouteUpdate, PointOfInterestFolder, RouteCalculationCondition, TJunctionLocationInput, delete_saved_t_junction_locations_input, delete_unsaved_t_junction_locations_input, destination_input, navigation_enum_input, optional_destination_time, optional_navigation_enum, planned_route_input, planned_route_update_input, save_t_junction_locations_input, update_saved_t_junction_location_input } from "./navigation_inputs";
export { DestinationInput, NavigationDataSource, PlannedRouteInput, PlannedRouteUpdate, PointOfInterestFolder, RouteCalculationCondition, TJunctionLocationInput, delete_saved_t_junction_locations_input, delete_unsaved_t_junction_locations_input, destination_input, navigation_enum_input, optional_destination_time, optional_navigation_enum, planned_route_input, planned_route_update_input, save_t_junction_locations_input, update_saved_t_junction_location_input };
declare const _NavigationCommandClientMixin_base: any;
/** Translated upstream _NavigationCommandClientMixin. */
export declare class _NavigationCommandClientMixin extends _NavigationCommandClientMixin_base {
    constructor(...__args: any[]);
    async_send_journey(vin: string, waypoints: ReadonlyArray<DestinationInput>, options?: {
        avoid_highway?: boolean | UnsetType | null;
        avoid_tolls?: boolean | UnsetType | null;
        avoid_ferries?: boolean | UnsetType | null;
        estimated_time_of_arrival?: $.DateValue | UnsetType | null;
        estimated_time_of_departure?: $.DateValue | UnsetType | null;
        arrival_flag?: boolean | UnsetType | null;
        departure_flag?: boolean | UnsetType | null;
        data_source?: NavigationDataSource | null;
    }): Promise<boolean>;
    async_send_planned_route(vin: string, route_id: string, options?: {
        estimated_time_of_arrival?: $.DateValue | UnsetType | null;
        estimated_time_of_departure?: $.DateValue | UnsetType | null;
        arrival_flag?: boolean | UnsetType | null;
        departure_flag?: boolean | UnsetType | null;
        data_source?: NavigationDataSource | null;
    }): Promise<boolean>;
    async_send_point_of_interest(vin: string, folder: PointOfInterestFolder, destination: DestinationInput, options?: {
        calculation_condition?: RouteCalculationCondition | UnsetType | null;
        avoid_highway?: boolean | UnsetType | null;
        avoid_tolls?: boolean | UnsetType | null;
        avoid_ferries?: boolean | UnsetType | null;
    }): Promise<boolean>;
    async_save_route(vin: string, route: PlannedRouteInput, options?: {
        arrival_flag?: boolean | UnsetType | null;
        departure_flag?: boolean | UnsetType | null;
        data_source?: NavigationDataSource | null;
    }): Promise<ServiceRequest>;
    async_update_route(vin: string, route: PlannedRouteUpdate, options?: {
        arrival_flag?: boolean | UnsetType | null;
        departure_flag?: boolean | UnsetType | null;
    }): Promise<ServiceRequest>;
    async_delete_route(vin: string, route_id: string): Promise<boolean>;
    async_delete_favorite_point_of_interest(vin: string, destination_id: string): Promise<boolean>;
    async_save_t_junction_locations(vin: string, last_updated_at: string, locations: ReadonlyArray<TJunctionLocationInput>): Promise<ServiceRequest>;
    async_update_saved_t_junction_location(vin: string, location_id: string, location_name: string): Promise<ServiceRequest>;
    async_delete_saved_t_junction_locations(vin: string, location_ids: ReadonlyArray<string>, options: {
        last_updated_at: string;
    }): Promise<ServiceRequest>;
    async_delete_unsaved_t_junction_locations(vin: string, location_ids: ReadonlyArray<string>): Promise<ServiceRequest>;
}
export interface _NavigationCommandClientMixin extends _NissanClientBase {
}
