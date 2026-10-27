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

/** Translated upstream _NavigationReadClientMixin. */
export class _NavigationReadClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _NavigationReadClientMixin, __args); }
async_get_vehicle_location(vin: string): Promise<VehicleLocation>;
/** Return the last cached location without requesting a new fix. */
async async_get_vehicle_location(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the last cached location without requesting a new fix. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleLocation", $.attr(operations, "VEHICLE_LOCATION"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_vehicle_location, [data, vin], null);
}
async_get_photos_around_vehicle(vin: string): Promise<VehiclePhotos | null>;
/** Return cached vehicle photos and their temporary links when available. */
async async_get_photos_around_vehicle(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return cached vehicle photos and their temporary links when available. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["PhotosAroundVehicle", $.attr(operations, "PHOTOS_AROUND_VEHICLE"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_photos_around_vehicle, [data], null);
}
async_get_vehicle_journeys(vin: string): Promise<VehicleJourneys | null>;
/** Return journeys cached for a connected vehicle. */
async async_get_vehicle_journeys(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return journeys cached for a connected vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleJourneys", $.attr(operations, "VEHICLE_JOURNEYS"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_vehicle_journeys, [data], null);
}
async_get_vehicle_planned_routes(vin: string, options?: { distance_unit?: DistanceUnit | UnsetType | null; temperature_unit?: TemperatureUnit | UnsetType | null; data_source?: NavigationDataSource | null }): Promise<VehiclePlannedRoutes | null>;
/** Return saved planned routes for an electric vehicle. */
async async_get_vehicle_planned_routes(...__args: any[]): any {
let data;
let {"vin": vin, "distance_unit": distance_unit, "temperature_unit": temperature_unit, "data_source": data_source} = $.bind(__args, ["vin"], {"distance_unit": UNSET, "temperature_unit": UNSET, "data_source": null}, ["distance_unit", "temperature_unit", "data_source"], null, null);
/** Return saved planned routes for an electric vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehiclePlannedRoutes", $.attr(operations, "VEHICLE_PLANNED_ROUTES"), $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"distanceUnit": $.call(optional_navigation_enum, [distance_unit], null)}, {"temperatureUnit": $.call(optional_navigation_enum, [temperature_unit], null)}))], Object.assign({}, {"extra_headers": $.call(_navigation_headers, [data_source], null)})));
return $.call(parse_vehicle_planned_routes, [data], null);
}
async_get_vehicle_point_of_interest_destinations(vin: string, options?: { folder?: PointOfInterestFolderFilter | UnsetType | null }): Promise<VehiclePointOfInterestDestinations | null>;
/** Return favorite and recent destinations stored for a vehicle. */
async async_get_vehicle_point_of_interest_destinations(...__args: any[]): any {
let data;
let {"vin": vin, "folder": folder} = $.bind(__args, ["vin"], {"folder": $.attr(PointOfInterestFolderFilter, "BOTH")}, ["folder"], null, null);
/** Return favorite and recent destinations stored for a vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehiclePOIDestinations", $.attr(operations, "VEHICLE_POINT_OF_INTEREST_DESTINATIONS"), $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"folderName": $.call(optional_navigation_enum, [folder], null)}))], null));
return $.call(parse_vehicle_point_of_interest_destinations, [data], null);
}
async_get_vehicle_routes_history(vin: string, options?: { distance_unit?: DistanceUnit | UnsetType | null; temperature_unit?: TemperatureUnit | UnsetType | null; status?: RouteStatus | UnsetType | null }): Promise<VehicleRoutesHistory | null>;
/** Return route history for a compatible electric AVK2 vehicle. */
async async_get_vehicle_routes_history(...__args: any[]): any {
let data;
let {"vin": vin, "distance_unit": distance_unit, "temperature_unit": temperature_unit, "status": status} = $.bind(__args, ["vin"], {"distance_unit": UNSET, "temperature_unit": UNSET, "status": UNSET}, ["distance_unit", "temperature_unit", "status"], null, null);
/** Return route history for a compatible electric AVK2 vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["RoutesHistory", $.attr(operations, "ROUTES_HISTORY"), $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"distanceUnit": $.call(optional_navigation_enum, [distance_unit], null)}, {"temperatureUnit": $.call(optional_navigation_enum, [temperature_unit], null)}, {"status": $.call(optional_navigation_enum, [status], null)}))], null));
return $.call(parse_vehicle_routes_history, [data], null);
}
async_get_t_junction_locations(vin: string): Promise<TJunctionLocations | null>;
/** Return saved and unsaved T-junction camera locations. */
async async_get_t_junction_locations(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return saved and unsaved T-junction camera locations. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["TJunctionLocations", $.attr(operations, "T_JUNCTION_LOCATIONS"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_t_junction_locations, [data], null);
}
async_get_vehicle_ev_waypoints(vin: string, routes: ReadonlyArray<RouteWaypointInput | null>, plug_connector_types: ReadonlyArray<PlugConnectorType | null>, options?: { depart_at?: $.DateValue | UnsetType | null; arrived_by?: $.DateValue | UnsetType | null; state_of_charge_at_destination?: number | UnsetType | null; distance_unit?: DistanceUnit | UnsetType | null; estimated_battery_level_at_departure?: number | UnsetType | null; minimum_power?: number | UnsetType | null; state_of_charge_at_stop?: number | UnsetType | null; use_hvac?: boolean | UnsetType | null; avoid_highway?: boolean | UnsetType | null; avoid_tolls?: boolean | UnsetType | null; avoid_ferries?: boolean | UnsetType | null; data_source?: NavigationDataSource | null }): Promise<EVWaypointResult | null>;
/** Calculate electric route waypoints or return a typed route error. */
async async_get_vehicle_ev_waypoints(...__args: any[]): any {
let data, effective_state_of_charge_at_stop;
let {"vin": vin, "routes": routes, "plug_connector_types": plug_connector_types, "depart_at": depart_at, "arrived_by": arrived_by, "state_of_charge_at_destination": state_of_charge_at_destination, "distance_unit": distance_unit, "estimated_battery_level_at_departure": estimated_battery_level_at_departure, "minimum_power": minimum_power, "state_of_charge_at_stop": state_of_charge_at_stop, "use_hvac": use_hvac, "avoid_highway": avoid_highway, "avoid_tolls": avoid_tolls, "avoid_ferries": avoid_ferries, "data_source": data_source} = $.bind(__args, ["vin", "routes", "plug_connector_types"], {"depart_at": UNSET, "arrived_by": UNSET, "state_of_charge_at_destination": UNSET, "distance_unit": UNSET, "estimated_battery_level_at_departure": UNSET, "minimum_power": UNSET, "state_of_charge_at_stop": UNSET, "use_hvac": UNSET, "avoid_highway": UNSET, "avoid_tolls": UNSET, "avoid_ferries": UNSET, "data_source": null}, ["depart_at", "arrived_by", "state_of_charge_at_destination", "distance_unit", "estimated_battery_level_at_departure", "minimum_power", "state_of_charge_at_stop", "use_hvac", "avoid_highway", "avoid_tolls", "avoid_ferries", "data_source"], null, null);
/** Calculate electric route waypoints or return a typed route error. */
effective_state_of_charge_at_stop = state_of_charge_at_stop;
if ($.truth($.and(() => ((data_source === $.attr(NavigationDataSource, "KMR"))), () => $.call($.isinstance, [effective_state_of_charge_at_stop, UnsetType], null)))) {
effective_state_of_charge_at_stop = 20;
}
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleEVWaypoints", $.attr(operations, "VEHICLE_EV_WAYPOINTS"), $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"departAt": $.call(optional_destination_time, [depart_at], null)}, {"arrivedBy": $.call(optional_destination_time, [arrived_by], null)}, {"socAtDestination": state_of_charge_at_destination}, {"routes": $.call(nullable_route_waypoints_input, [routes], null)}, {"distanceUnit": $.call(optional_navigation_enum, [distance_unit], null)}, {"plugConnectorTypes": $.call(nullable_plug_connector_types_input, [plug_connector_types], null)}, {"estimatedBatteryLevelAtDeparture": $.call(optional_battery_level_string, [estimated_battery_level_at_departure], null)}, {"minPower": minimum_power}, {"socAtStop": effective_state_of_charge_at_stop}, {"useHvac": use_hvac}, {"avoidHighway": avoid_highway}, {"avoidTolls": avoid_tolls}, {"avoidFerries": avoid_ferries}))], Object.assign({}, {"extra_headers": $.call(_navigation_headers, [data_source], null)})));
return $.call(parse_vehicle_ev_waypoints, [data], null);
}
}
$.classType(_NavigationReadClientMixin);
export interface _NavigationReadClientMixin extends _NissanClientBase {}
