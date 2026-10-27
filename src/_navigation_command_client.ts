// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const datetime = $.datetime;

import * as operations from "./operations";

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

/** Translated upstream _NavigationCommandClientMixin. */
export class _NavigationCommandClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _NavigationCommandClientMixin, __args); }
async_send_journey(vin: string, waypoints: ReadonlyArray<DestinationInput>, options?: { avoid_highway?: boolean | UnsetType | null; avoid_tolls?: boolean | UnsetType | null; avoid_ferries?: boolean | UnsetType | null; estimated_time_of_arrival?: $.DateValue | UnsetType | null; estimated_time_of_departure?: $.DateValue | UnsetType | null; arrival_flag?: boolean | UnsetType | null; departure_flag?: boolean | UnsetType | null; data_source?: NavigationDataSource | null }): Promise<boolean>;
/** Send an ad-hoc journey and its waypoints to the vehicle. */
async async_send_journey(...__args: any[]): any {
let waypoint;
let {"vin": vin, "waypoints": waypoints, "avoid_highway": avoid_highway, "avoid_tolls": avoid_tolls, "avoid_ferries": avoid_ferries, "estimated_time_of_arrival": estimated_time_of_arrival, "estimated_time_of_departure": estimated_time_of_departure, "arrival_flag": arrival_flag, "departure_flag": departure_flag, "data_source": data_source} = $.bind(__args, ["vin", "waypoints"], {"avoid_highway": UNSET, "avoid_tolls": UNSET, "avoid_ferries": UNSET, "estimated_time_of_arrival": UNSET, "estimated_time_of_departure": UNSET, "arrival_flag": UNSET, "departure_flag": UNSET, "data_source": null}, ["avoid_highway", "avoid_tolls", "avoid_ferries", "estimated_time_of_arrival", "estimated_time_of_departure", "arrival_flag", "departure_flag", "data_source"], null, null);
/** Send an ad-hoc journey and its waypoints to the vehicle. */
return (await $.call($.attr(this, "_async_nullable_success_operation"), ["SendJourney", $.attr(operations, "SEND_JOURNEY"), "sendJourney", $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"waypoints": (() => { const __out: any = []; for (const waypoint of $.iterable(waypoints)) { __out.push($.call(destination_input, [waypoint], null)); } return __out; })()}, {"avoidHighway": avoid_highway}, {"avoidTolls": avoid_tolls}, {"avoidFerries": avoid_ferries}, {"estimatedTimeOfArrival": $.call(optional_destination_time, [estimated_time_of_arrival], null)}, {"estimatedTimeOfDeparture": $.call(optional_destination_time, [estimated_time_of_departure], null)}, {"arrivalFlag": arrival_flag}, {"departureFlag": departure_flag}))], Object.assign({}, {"extra_headers": $.call(_navigation_headers, [data_source], null)})));
}
async_send_planned_route(vin: string, route_id: string, options?: { estimated_time_of_arrival?: $.DateValue | UnsetType | null; estimated_time_of_departure?: $.DateValue | UnsetType | null; arrival_flag?: boolean | UnsetType | null; departure_flag?: boolean | UnsetType | null; data_source?: NavigationDataSource | null }): Promise<boolean>;
/** Send a previously saved route to the vehicle. */
async async_send_planned_route(...__args: any[]): any {
let {"vin": vin, "route_id": route_id, "estimated_time_of_arrival": estimated_time_of_arrival, "estimated_time_of_departure": estimated_time_of_departure, "arrival_flag": arrival_flag, "departure_flag": departure_flag, "data_source": data_source} = $.bind(__args, ["vin", "route_id"], {"estimated_time_of_arrival": UNSET, "estimated_time_of_departure": UNSET, "arrival_flag": UNSET, "departure_flag": UNSET, "data_source": null}, ["estimated_time_of_arrival", "estimated_time_of_departure", "arrival_flag", "departure_flag", "data_source"], null, null);
/** Send a previously saved route to the vehicle. */
return (await $.call($.attr(this, "_async_nullable_success_operation"), ["SendPlannedRoute", $.attr(operations, "SEND_PLANNED_ROUTE"), "sendPlannedRoute", $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"routeId": route_id}, {"estimatedTimeOfArrival": $.call(optional_destination_time, [estimated_time_of_arrival], null)}, {"estimatedTimeOfDeparture": $.call(optional_destination_time, [estimated_time_of_departure], null)}, {"arrivalFlag": arrival_flag}, {"departureFlag": departure_flag}))], Object.assign({}, {"extra_headers": $.call(_navigation_headers, [data_source], null)})));
}
async_send_point_of_interest(vin: string, folder: PointOfInterestFolder, destination: DestinationInput, options?: { calculation_condition?: RouteCalculationCondition | UnsetType | null; avoid_highway?: boolean | UnsetType | null; avoid_tolls?: boolean | UnsetType | null; avoid_ferries?: boolean | UnsetType | null }): Promise<boolean>;
/** Send a favorite or recent point of interest to the vehicle. */
async async_send_point_of_interest(...__args: any[]): any {
let {"vin": vin, "folder": folder, "destination": destination, "calculation_condition": calculation_condition, "avoid_highway": avoid_highway, "avoid_tolls": avoid_tolls, "avoid_ferries": avoid_ferries} = $.bind(__args, ["vin", "folder", "destination"], {"calculation_condition": UNSET, "avoid_highway": UNSET, "avoid_tolls": UNSET, "avoid_ferries": UNSET}, ["calculation_condition", "avoid_highway", "avoid_tolls", "avoid_ferries"], null, null);
/** Send a favorite or recent point of interest to the vehicle. */
return (await $.call($.attr(this, "_async_nullable_success_operation"), ["SendPointOfInterest", $.attr(operations, "SEND_POINT_OF_INTEREST"), "sendPointOfInterest", $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"folderName": $.call(navigation_enum_input, [folder], null)}, {"destinationInput": $.call(destination_input, [destination], null)}, {"calculationCondition": $.call(optional_navigation_enum, [calculation_condition], null)}, {"avoidHighway": avoid_highway}, {"avoidTolls": avoid_tolls}, {"avoidFerries": avoid_ferries}))], null));
}
async_save_route(vin: string, route: PlannedRouteInput, options?: { arrival_flag?: boolean | UnsetType | null; departure_flag?: boolean | UnsetType | null; data_source?: NavigationDataSource | null }): Promise<ServiceRequest>;
/** Save a planned route in the vehicle account. */
async async_save_route(...__args: any[]): any {
let {"vin": vin, "route": route, "arrival_flag": arrival_flag, "departure_flag": departure_flag, "data_source": data_source} = $.bind(__args, ["vin", "route"], {"arrival_flag": UNSET, "departure_flag": UNSET, "data_source": null}, ["arrival_flag", "departure_flag", "data_source"], null, null);
/** Save a planned route in the vehicle account. */
return (await $.call($.attr(this, "_async_service_request"), ["SaveRoute", $.attr(operations, "SAVE_ROUTE"), "saveRoute", $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"plannedRoute": $.call(planned_route_input, [route], null)}, {"arrivalFlag": arrival_flag}, {"departureFlag": departure_flag})), $.attr(ServiceRequestKind, "ROUTE")], Object.assign({}, {"extra_headers": $.call(_navigation_headers, [data_source], null)})));
}
async_update_route(vin: string, route: PlannedRouteUpdate, options?: { arrival_flag?: boolean | UnsetType | null; departure_flag?: boolean | UnsetType | null }): Promise<ServiceRequest>;
/** Patch a saved planned route. */
async async_update_route(...__args: any[]): any {
let {"vin": vin, "route": route, "arrival_flag": arrival_flag, "departure_flag": departure_flag} = $.bind(__args, ["vin", "route"], {"arrival_flag": UNSET, "departure_flag": UNSET}, ["arrival_flag", "departure_flag"], null, null);
/** Patch a saved planned route. */
return (await $.call($.attr(this, "_async_service_request"), ["UpdateRoute", $.attr(operations, "UPDATE_ROUTE"), "updateRoute", $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"plannedRoute": $.call(planned_route_update_input, [route], null)}, {"arrivalFlag": arrival_flag}, {"departureFlag": departure_flag})), $.attr(ServiceRequestKind, "ROUTE")], null));
}
async_delete_route(vin: string, route_id: string): Promise<boolean>;
/** Delete a saved planned route. */
async async_delete_route(...__args: any[]): any {
let {"vin": vin, "route_id": route_id} = $.bind(__args, ["vin", "route_id"], {}, [], null, null);
/** Delete a saved planned route. */
return (await $.call($.attr(this, "_async_nullable_success_operation"), ["DeleteRoute", $.attr(operations, "DELETE_ROUTE"), "deleteRoute", Object.assign({}, {["vin"]: vin}, {["routeId"]: route_id})], null));
}
async_delete_favorite_point_of_interest(vin: string, destination_id: string): Promise<boolean>;
/** Delete a destination from the vehicle's favorites. */
async async_delete_favorite_point_of_interest(...__args: any[]): any {
let {"vin": vin, "destination_id": destination_id} = $.bind(__args, ["vin", "destination_id"], {}, [], null, null);
/** Delete a destination from the vehicle's favorites. */
return (await $.call($.attr(this, "_async_nullable_success_operation"), ["DeleteFavoritePointOfInterest", $.attr(operations, "DELETE_FAVORITE_POINT_OF_INTEREST"), "deleteFavoritePointOfInterest", Object.assign({}, {["vin"]: vin}, {["destinationId"]: destination_id})], null));
}
async_save_t_junction_locations(vin: string, last_updated_at: string, locations: ReadonlyArray<TJunctionLocationInput>): Promise<ServiceRequest>;
/** Save selected T-junction camera locations. */
async async_save_t_junction_locations(...__args: any[]): any {
let {"vin": vin, "last_updated_at": last_updated_at, "locations": locations} = $.bind(__args, ["vin", "last_updated_at", "locations"], {}, [], null, null);
/** Save selected T-junction camera locations. */
return (await $.call($.attr(this, "_async_service_request"), ["SaveTJunctionLocations", $.attr(operations, "SAVE_T_JUNCTION_LOCATIONS"), "saveTJunctionLocations", Object.assign({}, {["input"]: $.call(save_t_junction_locations_input, [vin, last_updated_at, locations], null)}), $.attr(ServiceRequestKind, "T_JUNCTION")], null));
}
async_update_saved_t_junction_location(vin: string, location_id: string, location_name: string): Promise<ServiceRequest>;
/** Rename a saved T-junction camera location. */
async async_update_saved_t_junction_location(...__args: any[]): any {
let {"vin": vin, "location_id": location_id, "location_name": location_name} = $.bind(__args, ["vin", "location_id", "location_name"], {}, [], null, null);
/** Rename a saved T-junction camera location. */
return (await $.call($.attr(this, "_async_service_request"), ["UpdateSavedTJunctionLocation", $.attr(operations, "UPDATE_SAVED_T_JUNCTION_LOCATION"), "updateSavedTJunctionLocation", Object.assign({}, {["input"]: $.call(update_saved_t_junction_location_input, [vin, location_id, location_name], null)}), $.attr(ServiceRequestKind, "T_JUNCTION")], null));
}
async_delete_saved_t_junction_locations(vin: string, location_ids: ReadonlyArray<string>, options: { last_updated_at: string }): Promise<ServiceRequest>;
/** Delete saved T-junction camera locations. */
async async_delete_saved_t_junction_locations(...__args: any[]): any {
let {"vin": vin, "location_ids": location_ids, "last_updated_at": last_updated_at} = $.bind(__args, ["vin", "location_ids"], {}, ["last_updated_at"], null, null);
/** Delete saved T-junction camera locations. */
return (await $.call($.attr(this, "_async_service_request"), ["DeleteSavedTJunctionLocations", $.attr(operations, "DELETE_SAVED_T_JUNCTION_LOCATIONS"), "deleteSavedTJunctionLocations", Object.assign({}, {["input"]: $.call(delete_saved_t_junction_locations_input, [vin, location_ids, last_updated_at], null)}), $.attr(ServiceRequestKind, "T_JUNCTION")], null));
}
async_delete_unsaved_t_junction_locations(vin: string, location_ids: ReadonlyArray<string>): Promise<ServiceRequest>;
/** Discard unsaved T-junction camera locations. */
async async_delete_unsaved_t_junction_locations(...__args: any[]): any {
let {"vin": vin, "location_ids": location_ids} = $.bind(__args, ["vin", "location_ids"], {}, [], null, null);
/** Discard unsaved T-junction camera locations. */
return (await $.call($.attr(this, "_async_service_request"), ["DeleteUnsavedTJunctionLocations", $.attr(operations, "DELETE_UNSAVED_T_JUNCTION_LOCATIONS"), "deleteUnsavedTJunctionLocations", Object.assign({}, {["input"]: $.call(delete_unsaved_t_junction_locations_input, [vin, location_ids], null)}), $.attr(ServiceRequestKind, "T_JUNCTION")], null));
}
}
$.classType(_NavigationCommandClientMixin);
export interface _NavigationCommandClientMixin extends _NissanClientBase {}
