// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Callable = $.Callable;

const dataclass = $.dataclass;
const field = $.field;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { AddressInput, CoordinateInput, address_input, coordinate_input } from "./common_inputs";
export { AddressInput, CoordinateInput, address_input, coordinate_input };

import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };

import { DistanceUnit, TemperatureUnit } from "./models";
export { DistanceUnit, TemperatureUnit };

export const NavigationDataSource = $.enumType("NavigationDataSource", {"KMR": "KMR"}, true);
export type NavigationDataSource = ReturnType<typeof NavigationDataSource>;

export const PointOfInterestFolder = $.enumType("PointOfInterestFolder", {"FAVORITES": "FAVORITES", "RECENTS": "RECENTS", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type PointOfInterestFolder = ReturnType<typeof PointOfInterestFolder>;

export const PointOfInterestFolderFilter = $.enumType("PointOfInterestFolderFilter", {"FAVORITES": "FAVORITES", "RECENTS": "RECENTS", "BOTH": "BOTH", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type PointOfInterestFolderFilter = ReturnType<typeof PointOfInterestFolderFilter>;

export const RouteCalculationCondition = $.enumType("RouteCalculationCondition", {"FASTEST_ROUTE": "FASTEST_ROUTE", "SHORTEST_ROUTE": "SHORTEST_ROUTE", "ECO_ROUTE": "ECO_ROUTE", "GENERAL_ROUTE": "GENERAL_ROUTE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type RouteCalculationCondition = ReturnType<typeof RouteCalculationCondition>;

export const RecalculatedWaypointType = $.enumType("RecalculatedWaypointType", {"WAYPOINT": "WAYPOINT", "EPOI_NOT_RECALCULATED": "EPOI_NOT_RECALCULATED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type RecalculatedWaypointType = ReturnType<typeof RecalculatedWaypointType>;

export const ChargingConnectorType = $.enumType("ChargingConnectorType", {"NORMAL": "NORMAL", "QUICK": "QUICK", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type ChargingConnectorType = ReturnType<typeof ChargingConnectorType>;

export const PlugConnectorType = $.enumType("PlugConnectorType", {"CCS": "CCS", "J1772": "J1772", "NACS": "NACS", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type PlugConnectorType = ReturnType<typeof PlugConnectorType>;

export const RouteChargingTimeUnit = $.enumType("RouteChargingTimeUnit", {"MINUTE": "MIN", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type RouteChargingTimeUnit = ReturnType<typeof RouteChargingTimeUnit>;

export const NotificationIntervalUnit = $.enumType("NotificationIntervalUnit", {"MINUTE": "MIN", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type NotificationIntervalUnit = ReturnType<typeof NotificationIntervalUnit>;

export const RouteStatus = $.enumType("RouteStatus", {"RESERVED": "RESERVED", "IN_PROGRESS": "IN_PROGRESS", "COMPLETED": "COMPLETED", "FAILED": "FAILED", "CANCELLED": "CANCELLED", "DEPARTURED": "DEPARTURED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type RouteStatus = ReturnType<typeof RouteStatus>;

/** Destination sent as a journey waypoint or point of interest. */
export class DestinationInput {
readonly name: string;
readonly coordinate: CoordinateInput;
readonly address: AddressInput;
readonly phone_number: string | UnsetType | null;
readonly recalculated_waypoint_type: RecalculatedWaypointType | UnsetType | null;
readonly charging_output: number | UnsetType | null;
static __fields = [["name", $.MISSING], ["coordinate", $.MISSING], ["address", $.call(field, [], Object.assign({}, {"default_factory": AddressInput}))], ["phone_number", UNSET], ["recalculated_waypoint_type", UNSET], ["charging_output", UNSET]];
constructor(name: string, coordinate: CoordinateInput, address?: AddressInput, phone_number?: string | UnsetType | null, recalculated_waypoint_type?: RecalculatedWaypointType | UnsetType | null, charging_output?: number | UnsetType | null);
constructor(options: { name: string; coordinate: CoordinateInput; address?: AddressInput; phone_number?: string | UnsetType | null; recalculated_waypoint_type?: RecalculatedWaypointType | UnsetType | null; charging_output?: number | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DestinationInput, __args);  Object.freeze(this); }
}
$.classType(DestinationInput);

/** Charging duration attached to a planned-route waypoint. */
export class RouteChargingTimeInput {
readonly value: number;
readonly unit: RouteChargingTimeUnit;
static __fields = [["value", $.MISSING], ["unit", $.attr(RouteChargingTimeUnit, "MINUTE")]];
constructor(value: number, unit?: RouteChargingTimeUnit);
constructor(options: { value: number; unit?: RouteChargingTimeUnit });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RouteChargingTimeInput, __args);  Object.freeze(this); }
}
$.classType(RouteChargingTimeInput);

/** One waypoint stored in a planned route. */
export class RouteWaypointInput {
readonly name: string;
readonly coordinate: CoordinateInput;
readonly address: AddressInput;
readonly phone_number: string | UnsetType | null;
readonly recalculated_waypoint_type: RecalculatedWaypointType | UnsetType | null;
readonly charging_output: number | UnsetType | null;
readonly charging_time: RouteChargingTimeInput | UnsetType | null;
readonly charger_type: ChargingConnectorType | UnsetType | null;
readonly state_of_charge_difference: number | UnsetType | null;
static __fields = [["name", $.MISSING], ["coordinate", $.MISSING], ["address", $.call(field, [], Object.assign({}, {"default_factory": AddressInput}))], ["phone_number", UNSET], ["recalculated_waypoint_type", UNSET], ["charging_output", UNSET], ["charging_time", UNSET], ["charger_type", UNSET], ["state_of_charge_difference", UNSET]];
constructor(name: string, coordinate: CoordinateInput, address?: AddressInput, phone_number?: string | UnsetType | null, recalculated_waypoint_type?: RecalculatedWaypointType | UnsetType | null, charging_output?: number | UnsetType | null, charging_time?: RouteChargingTimeInput | UnsetType | null, charger_type?: ChargingConnectorType | UnsetType | null, state_of_charge_difference?: number | UnsetType | null);
constructor(options: { name: string; coordinate: CoordinateInput; address?: AddressInput; phone_number?: string | UnsetType | null; recalculated_waypoint_type?: RecalculatedWaypointType | UnsetType | null; charging_output?: number | UnsetType | null; charging_time?: RouteChargingTimeInput | UnsetType | null; charger_type?: ChargingConnectorType | UnsetType | null; state_of_charge_difference?: number | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RouteWaypointInput, __args);  Object.freeze(this); }
}
$.classType(RouteWaypointInput);

/** Integer route distance whose non-null unit may be omitted. */
export class RouteDistanceInput {
readonly value: number;
readonly unit: DistanceUnit | UnsetType;
static __fields = [["value", $.MISSING], ["unit", UNSET]];
constructor(value: number, unit?: DistanceUnit | UnsetType);
constructor(options: { value: number; unit?: DistanceUnit | UnsetType });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RouteDistanceInput, __args);  Object.freeze(this); }
}
$.classType(RouteDistanceInput);

/** Route temperature whose unit may be omitted or explicitly null. */
export class RouteTemperatureInput {
readonly value: number;
readonly unit: TemperatureUnit | UnsetType | null;
static __fields = [["value", $.MISSING], ["unit", UNSET]];
constructor(value: number, unit?: TemperatureUnit | UnsetType | null);
constructor(options: { value: number; unit?: TemperatureUnit | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RouteTemperatureInput, __args);  Object.freeze(this); }
}
$.classType(RouteTemperatureInput);

/** Notification interval stored with a planned route. */
export class RouteNotificationIntervalInput {
readonly value: number;
readonly unit: NotificationIntervalUnit;
static __fields = [["value", $.MISSING], ["unit", $.attr(NotificationIntervalUnit, "MINUTE")]];
constructor(value: number, unit?: NotificationIntervalUnit);
constructor(options: { value: number; unit?: NotificationIntervalUnit });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RouteNotificationIntervalInput, __args);  Object.freeze(this); }
}
$.classType(RouteNotificationIntervalInput);

/** Complete route settings required by Nissan's save-route mutation. */
export class PlannedRouteInput {
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
static __fields = [["name", $.MISSING], ["routes", $.MISSING], ["estimated_time_of_departure", $.MISSING], ["estimated_time_of_arrival", $.MISSING], ["distance", $.MISSING], ["temperature", UNSET], ["should_recalculate_route", UNSET], ["should_enable_notification", UNSET], ["notification_interval", UNSET], ["avoid_highway", UNSET], ["avoid_tolls", UNSET], ["avoid_ferries", UNSET]];
constructor(name: string, routes: ReadonlyArray<RouteWaypointInput | null>, estimated_time_of_departure: $.DateValue, estimated_time_of_arrival: $.DateValue, distance: RouteDistanceInput, temperature?: RouteTemperatureInput | UnsetType | null, should_recalculate_route?: boolean | UnsetType | null, should_enable_notification?: boolean | UnsetType | null, notification_interval?: RouteNotificationIntervalInput | UnsetType | null, avoid_highway?: boolean | UnsetType | null, avoid_tolls?: boolean | UnsetType | null, avoid_ferries?: boolean | UnsetType | null);
constructor(options: { name: string; routes: ReadonlyArray<RouteWaypointInput | null>; estimated_time_of_departure: $.DateValue; estimated_time_of_arrival: $.DateValue; distance: RouteDistanceInput; temperature?: RouteTemperatureInput | UnsetType | null; should_recalculate_route?: boolean | UnsetType | null; should_enable_notification?: boolean | UnsetType | null; notification_interval?: RouteNotificationIntervalInput | UnsetType | null; avoid_highway?: boolean | UnsetType | null; avoid_tolls?: boolean | UnsetType | null; avoid_ferries?: boolean | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PlannedRouteInput, __args);  Object.freeze(this); }
}
$.classType(PlannedRouteInput);

/** Partial planned-route update; omitted fields remain unchanged. */
export class PlannedRouteUpdate {
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
static __fields = [["id", $.MISSING], ["name", UNSET], ["routes", UNSET], ["estimated_time_of_departure", UNSET], ["estimated_time_of_arrival", UNSET], ["distance", UNSET], ["temperature", UNSET], ["notification_interval", UNSET], ["should_enable_notification", UNSET], ["should_recalculate_route", UNSET], ["avoid_highway", UNSET], ["avoid_tolls", UNSET], ["avoid_ferries", UNSET]];
constructor(id: string, name?: string | UnsetType | null, routes?: ReadonlyArray<RouteWaypointInput | null> | UnsetType | null, estimated_time_of_departure?: $.DateValue | UnsetType | null, estimated_time_of_arrival?: $.DateValue | UnsetType | null, distance?: RouteDistanceInput | UnsetType | null, temperature?: RouteTemperatureInput | UnsetType | null, notification_interval?: RouteNotificationIntervalInput | UnsetType | null, should_enable_notification?: boolean | UnsetType | null, should_recalculate_route?: boolean | UnsetType | null, avoid_highway?: boolean | UnsetType | null, avoid_tolls?: boolean | UnsetType | null, avoid_ferries?: boolean | UnsetType | null);
constructor(options: { id: string; name?: string | UnsetType | null; routes?: ReadonlyArray<RouteWaypointInput | null> | UnsetType | null; estimated_time_of_departure?: $.DateValue | UnsetType | null; estimated_time_of_arrival?: $.DateValue | UnsetType | null; distance?: RouteDistanceInput | UnsetType | null; temperature?: RouteTemperatureInput | UnsetType | null; notification_interval?: RouteNotificationIntervalInput | UnsetType | null; should_enable_notification?: boolean | UnsetType | null; should_recalculate_route?: boolean | UnsetType | null; avoid_highway?: boolean | UnsetType | null; avoid_tolls?: boolean | UnsetType | null; avoid_ferries?: boolean | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PlannedRouteUpdate, __args);  Object.freeze(this); }
}
$.classType(PlannedRouteUpdate);

/** Unsaved T-Junction location selected for saving. */
export class TJunctionLocationInput {
readonly id: string;
readonly name: string;
static __fields = [["id", $.MISSING], ["name", $.MISSING]];
constructor(id: string, name: string);
constructor(options: { id: string; name: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TJunctionLocationInput, __args);  Object.freeze(this); }
}
$.classType(TJunctionLocationInput);

export function destination_input(value: DestinationInput): Record<string, unknown>;
/** Translated upstream destination_input. */
export function destination_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"name": $.attr(value, "name")}, {"phoneNumber": $.attr(value, "phone_number")}, {"coordinate": $.call(coordinate_input, [$.attr(value, "coordinate")], null)}, {"address": $.call(address_input, [$.attr(value, "address")], null)}, {"recalculatedWaypointType": $.call(optional_navigation_enum, [$.attr(value, "recalculated_waypoint_type")], null)}, {"chargingOutput": $.attr(value, "charging_output")}));
}

export function route_waypoint_input(value: RouteWaypointInput): Record<string, unknown>;
/** Translated upstream route_waypoint_input. */
export function route_waypoint_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"name": $.attr(value, "name")}, {"coordinate": $.call(coordinate_input, [$.attr(value, "coordinate")], null)}, {"address": $.call(address_input, [$.attr(value, "address")], null)}, {"phoneNumber": $.attr(value, "phone_number")}, {"recalculatedWaypointType": $.call(optional_navigation_enum, [$.attr(value, "recalculated_waypoint_type")], null)}, {"chargingOutput": $.attr(value, "charging_output")}, {"chargingTime": $.call(_optional_serialized, [$.attr(value, "charging_time"), route_charging_time_input], null)}, {"chargerType": $.call(optional_navigation_enum, [$.attr(value, "charger_type")], null)}, {"socDiff": $.attr(value, "state_of_charge_difference")}));
}

export function route_distance_input(value: RouteDistanceInput): Record<string, unknown>;
/** Translated upstream route_distance_input. */
export function route_distance_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"value": $.attr(value, "value")}, {"unit": $.call(optional_navigation_enum, [$.attr(value, "unit")], null)}));
}

export function route_temperature_input(value: RouteTemperatureInput): Record<string, unknown>;
/** Translated upstream route_temperature_input. */
export function route_temperature_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"value": $.attr(value, "value")}, {"unit": $.call(optional_navigation_enum, [$.attr(value, "unit")], null)}));
}

export function route_notification_interval_input(value: RouteNotificationIntervalInput): Record<string, unknown>;
/** Translated upstream route_notification_interval_input. */
export function route_notification_interval_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return Object.assign({}, {["value"]: $.attr(value, "value")}, {["unit"]: $.call(navigation_enum_input, [$.attr(value, "unit")], null)});
}

export function route_charging_time_input(value: RouteChargingTimeInput): Record<string, unknown>;
/** Translated upstream route_charging_time_input. */
export function route_charging_time_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return Object.assign({}, {["unit"]: $.call(navigation_enum_input, [$.attr(value, "unit")], null)}, {["value"]: $.attr(value, "value")});
}

export function planned_route_input(value: PlannedRouteInput): Record<string, unknown>;
/** Translated upstream planned_route_input. */
export function planned_route_input(...__args: any[]): any {
let item;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"name": $.attr(value, "name")}, {"routes": (() => { const __out: any = []; for (const item of $.iterable($.attr(value, "routes"))) { __out.push(($.truth(((item !== null))) ? $.call(route_waypoint_input, [item], null) : null)); } return __out; })()}, {"estimatedTimeOfDeparture": $.call(serialize_datetime, [$.attr(value, "estimated_time_of_departure")], null)}, {"estimatedTimeOfArrival": $.call(serialize_datetime, [$.attr(value, "estimated_time_of_arrival")], null)}, {"distance": $.call(route_distance_input, [$.attr(value, "distance")], null)}, {"temperature": $.call(_optional_serialized, [$.attr(value, "temperature"), route_temperature_input], null)}, {"shouldRecalculateRoute": $.attr(value, "should_recalculate_route")}, {"shouldEnableNotification": $.attr(value, "should_enable_notification")}, {"notificationInterval": $.call(_optional_serialized, [$.attr(value, "notification_interval"), route_notification_interval_input], null)}, {"avoidHighway": $.attr(value, "avoid_highway")}, {"avoidTolls": $.attr(value, "avoid_tolls")}, {"avoidFerries": $.attr(value, "avoid_ferries")}));
}

export function planned_route_update_input(value: PlannedRouteUpdate): Record<string, unknown>;
/** Translated upstream planned_route_update_input. */
export function planned_route_update_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"id": $.attr(value, "id")}, {"name": $.attr(value, "name")}, {"routes": $.call(_optional_routes, [$.attr(value, "routes")], null)}, {"estimatedTimeOfDeparture": $.call(_optional_datetime, [$.attr(value, "estimated_time_of_departure")], null)}, {"estimatedTimeOfArrival": $.call(_optional_datetime, [$.attr(value, "estimated_time_of_arrival")], null)}, {"distance": $.call(_optional_serialized, [$.attr(value, "distance"), route_distance_input], null)}, {"temperature": $.call(_optional_serialized, [$.attr(value, "temperature"), route_temperature_input], null)}, {"notificationInterval": $.call(_optional_serialized, [$.attr(value, "notification_interval"), route_notification_interval_input], null)}, {"shouldEnableNotification": $.attr(value, "should_enable_notification")}, {"shouldRecalculateRoute": $.attr(value, "should_recalculate_route")}, {"avoidHighway": $.attr(value, "avoid_highway")}, {"avoidTolls": $.attr(value, "avoid_tolls")}, {"avoidFerries": $.attr(value, "avoid_ferries")}));
}

export function t_junction_location_input(value: TJunctionLocationInput): Record<string, unknown>;
/** Translated upstream t_junction_location_input. */
export function t_junction_location_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return Object.assign({}, {["id"]: $.attr(value, "id")}, {["name"]: $.attr(value, "name")});
}

export function save_t_junction_locations_input(vin: string, last_updated_at: string, locations: ReadonlyArray<TJunctionLocationInput>): Record<string, unknown>;
/** Translated upstream save_t_junction_locations_input. */
export function save_t_junction_locations_input(...__args: any[]): any {
let location;
let {"vin": vin, "last_updated_at": last_updated_at, "locations": locations} = $.bind(__args, ["vin", "last_updated_at", "locations"], {}, [], null, null);
return Object.assign({}, {["vin"]: vin}, {["lastUpdatedAt"]: last_updated_at}, {["locationIds"]: (() => { const __out: any = []; for (const location of $.iterable(locations)) { __out.push($.call(t_junction_location_input, [location], null)); } return __out; })()});
}

export function update_saved_t_junction_location_input(vin: string, location_id: string, location_name: string): Record<string, unknown>;
/** Translated upstream update_saved_t_junction_location_input. */
export function update_saved_t_junction_location_input(...__args: any[]): any {
let {"vin": vin, "location_id": location_id, "location_name": location_name} = $.bind(__args, ["vin", "location_id", "location_name"], {}, [], null, null);
return Object.assign({}, {["vin"]: vin}, {["id"]: location_id}, {["locationName"]: location_name});
}

export function delete_saved_t_junction_locations_input(vin: string, location_ids: ReadonlyArray<string>, last_updated_at: string): Record<string, unknown>;
/** Translated upstream delete_saved_t_junction_locations_input. */
export function delete_saved_t_junction_locations_input(...__args: any[]): any {
let {"vin": vin, "location_ids": location_ids, "last_updated_at": last_updated_at} = $.bind(__args, ["vin", "location_ids", "last_updated_at"], {}, [], null, null);
return Object.assign({}, {["vin"]: vin}, {["locationIds"]: $.call($.list, [location_ids], null)}, {["lastUpdatedAt"]: last_updated_at});
}

export function delete_unsaved_t_junction_locations_input(vin: string, location_ids: ReadonlyArray<string>): Record<string, unknown>;
/** Translated upstream delete_unsaved_t_junction_locations_input. */
export function delete_unsaved_t_junction_locations_input(...__args: any[]): any {
let {"vin": vin, "location_ids": location_ids} = $.bind(__args, ["vin", "location_ids"], {}, [], null, null);
return Object.assign({}, {["vin"]: vin}, {["locationIds"]: $.call($.list, [location_ids], null)});
}

export function optional_destination_time(value: $.DateValue | UnsetType | null): unknown;
/** Translated upstream optional_destination_time. */
export function optional_destination_time(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(_optional_datetime, [value], null);
}

export function optional_navigation_enum(value: $.EnumValue | UnsetType | null): unknown;
/** Translated upstream optional_navigation_enum. */
export function optional_navigation_enum(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, StrEnum], null))) {
return $.call(navigation_enum_input, [value], null);
}
return value;
}

export function navigation_enum_input(value: $.EnumValue): string;
/** Translated upstream navigation_enum_input. */
export function navigation_enum_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(serialize_enum, [value], null);
}

export function nullable_route_waypoints_input(values: ReadonlyArray<RouteWaypointInput | null>): ReadonlyArray<unknown>;
/** Translated upstream nullable_route_waypoints_input. */
export function nullable_route_waypoints_input(...__args: any[]): any {
let value;
let {"values": values} = $.bind(__args, ["values"], {}, [], null, null);
return (() => { const __out: any = []; for (const value of $.iterable(values)) { __out.push(($.truth(((value !== null))) ? $.call(route_waypoint_input, [value], null) : null)); } return __out; })();
}

export function nullable_plug_connector_types_input(values: ReadonlyArray<PlugConnectorType | null>): ReadonlyArray<string | null>;
/** Translated upstream nullable_plug_connector_types_input. */
export function nullable_plug_connector_types_input(...__args: any[]): any {
let value;
let {"values": values} = $.bind(__args, ["values"], {}, [], null, null);
return (() => { const __out: any = []; for (const value of $.iterable(values)) { __out.push(($.truth(((value !== null))) ? $.call(navigation_enum_input, [value], null) : null)); } return __out; })();
}

export function optional_battery_level_string(value: number | UnsetType | null): unknown;
/** Translated upstream optional_battery_level_string. */
export function optional_battery_level_string(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call($.str, [value], null);
}

export function _optional_routes(value: ReadonlyArray<RouteWaypointInput | null> | UnsetType | null): unknown;
/** Translated upstream _optional_routes. */
export function _optional_routes(...__args: any[]): any {
let item;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return (() => { const __out: any = []; for (const item of $.iterable(value)) { __out.push(($.truth(((item !== null))) ? $.call(route_waypoint_input, [item], null) : null)); } return __out; })();
}

export function _optional_datetime(value: $.DateValue | UnsetType | null): unknown;
/** Translated upstream _optional_datetime. */
export function _optional_datetime(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call(serialize_datetime, [value], null);
}

export function _optional_serialized(value: any | UnsetType | null, serializer: ((arg0: any) => unknown)): unknown;
/** Translated upstream _optional_serialized. */
export function _optional_serialized(...__args: any[]): any {
let {"value": value, "serializer": serializer} = $.bind(__args, ["value", "serializer"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call(serializer, [value], null);
}
