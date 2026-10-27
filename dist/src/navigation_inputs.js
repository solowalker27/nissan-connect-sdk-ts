"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TJunctionLocationInput = exports.PlannedRouteUpdate = exports.PlannedRouteInput = exports.RouteNotificationIntervalInput = exports.RouteTemperatureInput = exports.RouteDistanceInput = exports.RouteWaypointInput = exports.RouteChargingTimeInput = exports.DestinationInput = exports.RouteStatus = exports.NotificationIntervalUnit = exports.RouteChargingTimeUnit = exports.PlugConnectorType = exports.ChargingConnectorType = exports.RecalculatedWaypointType = exports.RouteCalculationCondition = exports.PointOfInterestFolderFilter = exports.PointOfInterestFolder = exports.NavigationDataSource = exports.TemperatureUnit = exports.DistanceUnit = exports.serialize_enum = exports.serialize_datetime = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.coordinate_input = exports.address_input = exports.CoordinateInput = exports.AddressInput = void 0;
exports.destination_input = destination_input;
exports.route_waypoint_input = route_waypoint_input;
exports.route_distance_input = route_distance_input;
exports.route_temperature_input = route_temperature_input;
exports.route_notification_interval_input = route_notification_interval_input;
exports.route_charging_time_input = route_charging_time_input;
exports.planned_route_input = planned_route_input;
exports.planned_route_update_input = planned_route_update_input;
exports.t_junction_location_input = t_junction_location_input;
exports.save_t_junction_locations_input = save_t_junction_locations_input;
exports.update_saved_t_junction_location_input = update_saved_t_junction_location_input;
exports.delete_saved_t_junction_locations_input = delete_saved_t_junction_locations_input;
exports.delete_unsaved_t_junction_locations_input = delete_unsaved_t_junction_locations_input;
exports.optional_destination_time = optional_destination_time;
exports.optional_navigation_enum = optional_navigation_enum;
exports.navigation_enum_input = navigation_enum_input;
exports.nullable_route_waypoints_input = nullable_route_waypoints_input;
exports.nullable_plug_connector_types_input = nullable_plug_connector_types_input;
exports.optional_battery_level_string = optional_battery_level_string;
exports._optional_routes = _optional_routes;
exports._optional_datetime = _optional_datetime;
exports._optional_serialized = _optional_serialized;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Callable = _runtime_1.py.Callable;
const dataclass = _runtime_1.py.dataclass;
const field = _runtime_1.py.field;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "AddressInput", { enumerable: true, get: function () { return common_inputs_1.AddressInput; } });
Object.defineProperty(exports, "CoordinateInput", { enumerable: true, get: function () { return common_inputs_1.CoordinateInput; } });
Object.defineProperty(exports, "address_input", { enumerable: true, get: function () { return common_inputs_1.address_input; } });
Object.defineProperty(exports, "coordinate_input", { enumerable: true, get: function () { return common_inputs_1.coordinate_input; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_datetime", { enumerable: true, get: function () { return graphql_input_1.serialize_datetime; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "TemperatureUnit", { enumerable: true, get: function () { return models_1.TemperatureUnit; } });
exports.NavigationDataSource = _runtime_1.py.enumType("NavigationDataSource", { "KMR": "KMR" }, true);
exports.PointOfInterestFolder = _runtime_1.py.enumType("PointOfInterestFolder", { "FAVORITES": "FAVORITES", "RECENTS": "RECENTS", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.PointOfInterestFolderFilter = _runtime_1.py.enumType("PointOfInterestFolderFilter", { "FAVORITES": "FAVORITES", "RECENTS": "RECENTS", "BOTH": "BOTH", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.RouteCalculationCondition = _runtime_1.py.enumType("RouteCalculationCondition", { "FASTEST_ROUTE": "FASTEST_ROUTE", "SHORTEST_ROUTE": "SHORTEST_ROUTE", "ECO_ROUTE": "ECO_ROUTE", "GENERAL_ROUTE": "GENERAL_ROUTE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.RecalculatedWaypointType = _runtime_1.py.enumType("RecalculatedWaypointType", { "WAYPOINT": "WAYPOINT", "EPOI_NOT_RECALCULATED": "EPOI_NOT_RECALCULATED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.ChargingConnectorType = _runtime_1.py.enumType("ChargingConnectorType", { "NORMAL": "NORMAL", "QUICK": "QUICK", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.PlugConnectorType = _runtime_1.py.enumType("PlugConnectorType", { "CCS": "CCS", "J1772": "J1772", "NACS": "NACS", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.RouteChargingTimeUnit = _runtime_1.py.enumType("RouteChargingTimeUnit", { "MINUTE": "MIN", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.NotificationIntervalUnit = _runtime_1.py.enumType("NotificationIntervalUnit", { "MINUTE": "MIN", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.RouteStatus = _runtime_1.py.enumType("RouteStatus", { "RESERVED": "RESERVED", "IN_PROGRESS": "IN_PROGRESS", "COMPLETED": "COMPLETED", "FAILED": "FAILED", "CANCELLED": "CANCELLED", "DEPARTURED": "DEPARTURED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Destination sent as a journey waypoint or point of interest. */
class DestinationInput {
    name;
    coordinate;
    address;
    phone_number;
    recalculated_waypoint_type;
    charging_output;
    static __fields = [["name", _runtime_1.py.MISSING], ["coordinate", _runtime_1.py.MISSING], ["address", _runtime_1.py.call(field, [], Object.assign({}, { "default_factory": common_inputs_1.AddressInput }))], ["phone_number", graphql_input_1.UNSET], ["recalculated_waypoint_type", graphql_input_1.UNSET], ["charging_output", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DestinationInput, __args); Object.freeze(this); }
}
exports.DestinationInput = DestinationInput;
_runtime_1.py.classType(DestinationInput);
/** Charging duration attached to a planned-route waypoint. */
class RouteChargingTimeInput {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.attr(exports.RouteChargingTimeUnit, "MINUTE")]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RouteChargingTimeInput, __args); Object.freeze(this); }
}
exports.RouteChargingTimeInput = RouteChargingTimeInput;
_runtime_1.py.classType(RouteChargingTimeInput);
/** One waypoint stored in a planned route. */
class RouteWaypointInput {
    name;
    coordinate;
    address;
    phone_number;
    recalculated_waypoint_type;
    charging_output;
    charging_time;
    charger_type;
    state_of_charge_difference;
    static __fields = [["name", _runtime_1.py.MISSING], ["coordinate", _runtime_1.py.MISSING], ["address", _runtime_1.py.call(field, [], Object.assign({}, { "default_factory": common_inputs_1.AddressInput }))], ["phone_number", graphql_input_1.UNSET], ["recalculated_waypoint_type", graphql_input_1.UNSET], ["charging_output", graphql_input_1.UNSET], ["charging_time", graphql_input_1.UNSET], ["charger_type", graphql_input_1.UNSET], ["state_of_charge_difference", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RouteWaypointInput, __args); Object.freeze(this); }
}
exports.RouteWaypointInput = RouteWaypointInput;
_runtime_1.py.classType(RouteWaypointInput);
/** Integer route distance whose non-null unit may be omitted. */
class RouteDistanceInput {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RouteDistanceInput, __args); Object.freeze(this); }
}
exports.RouteDistanceInput = RouteDistanceInput;
_runtime_1.py.classType(RouteDistanceInput);
/** Route temperature whose unit may be omitted or explicitly null. */
class RouteTemperatureInput {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RouteTemperatureInput, __args); Object.freeze(this); }
}
exports.RouteTemperatureInput = RouteTemperatureInput;
_runtime_1.py.classType(RouteTemperatureInput);
/** Notification interval stored with a planned route. */
class RouteNotificationIntervalInput {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.attr(exports.NotificationIntervalUnit, "MINUTE")]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RouteNotificationIntervalInput, __args); Object.freeze(this); }
}
exports.RouteNotificationIntervalInput = RouteNotificationIntervalInput;
_runtime_1.py.classType(RouteNotificationIntervalInput);
/** Complete route settings required by Nissan's save-route mutation. */
class PlannedRouteInput {
    name;
    routes;
    estimated_time_of_departure;
    estimated_time_of_arrival;
    distance;
    temperature;
    should_recalculate_route;
    should_enable_notification;
    notification_interval;
    avoid_highway;
    avoid_tolls;
    avoid_ferries;
    static __fields = [["name", _runtime_1.py.MISSING], ["routes", _runtime_1.py.MISSING], ["estimated_time_of_departure", _runtime_1.py.MISSING], ["estimated_time_of_arrival", _runtime_1.py.MISSING], ["distance", _runtime_1.py.MISSING], ["temperature", graphql_input_1.UNSET], ["should_recalculate_route", graphql_input_1.UNSET], ["should_enable_notification", graphql_input_1.UNSET], ["notification_interval", graphql_input_1.UNSET], ["avoid_highway", graphql_input_1.UNSET], ["avoid_tolls", graphql_input_1.UNSET], ["avoid_ferries", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PlannedRouteInput, __args); Object.freeze(this); }
}
exports.PlannedRouteInput = PlannedRouteInput;
_runtime_1.py.classType(PlannedRouteInput);
/** Partial planned-route update; omitted fields remain unchanged. */
class PlannedRouteUpdate {
    id;
    name;
    routes;
    estimated_time_of_departure;
    estimated_time_of_arrival;
    distance;
    temperature;
    notification_interval;
    should_enable_notification;
    should_recalculate_route;
    avoid_highway;
    avoid_tolls;
    avoid_ferries;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", graphql_input_1.UNSET], ["routes", graphql_input_1.UNSET], ["estimated_time_of_departure", graphql_input_1.UNSET], ["estimated_time_of_arrival", graphql_input_1.UNSET], ["distance", graphql_input_1.UNSET], ["temperature", graphql_input_1.UNSET], ["notification_interval", graphql_input_1.UNSET], ["should_enable_notification", graphql_input_1.UNSET], ["should_recalculate_route", graphql_input_1.UNSET], ["avoid_highway", graphql_input_1.UNSET], ["avoid_tolls", graphql_input_1.UNSET], ["avoid_ferries", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PlannedRouteUpdate, __args); Object.freeze(this); }
}
exports.PlannedRouteUpdate = PlannedRouteUpdate;
_runtime_1.py.classType(PlannedRouteUpdate);
/** Unsaved T-Junction location selected for saving. */
class TJunctionLocationInput {
    id;
    name;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TJunctionLocationInput, __args); Object.freeze(this); }
}
exports.TJunctionLocationInput = TJunctionLocationInput;
_runtime_1.py.classType(TJunctionLocationInput);
/** Translated upstream destination_input. */
function destination_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "name": _runtime_1.py.attr(value, "name") }, { "phoneNumber": _runtime_1.py.attr(value, "phone_number") }, { "coordinate": _runtime_1.py.call(common_inputs_1.coordinate_input, [_runtime_1.py.attr(value, "coordinate")], null) }, { "address": _runtime_1.py.call(common_inputs_1.address_input, [_runtime_1.py.attr(value, "address")], null) }, { "recalculatedWaypointType": _runtime_1.py.call(optional_navigation_enum, [_runtime_1.py.attr(value, "recalculated_waypoint_type")], null) }, { "chargingOutput": _runtime_1.py.attr(value, "charging_output") }));
}
/** Translated upstream route_waypoint_input. */
function route_waypoint_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "name": _runtime_1.py.attr(value, "name") }, { "coordinate": _runtime_1.py.call(common_inputs_1.coordinate_input, [_runtime_1.py.attr(value, "coordinate")], null) }, { "address": _runtime_1.py.call(common_inputs_1.address_input, [_runtime_1.py.attr(value, "address")], null) }, { "phoneNumber": _runtime_1.py.attr(value, "phone_number") }, { "recalculatedWaypointType": _runtime_1.py.call(optional_navigation_enum, [_runtime_1.py.attr(value, "recalculated_waypoint_type")], null) }, { "chargingOutput": _runtime_1.py.attr(value, "charging_output") }, { "chargingTime": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "charging_time"), route_charging_time_input], null) }, { "chargerType": _runtime_1.py.call(optional_navigation_enum, [_runtime_1.py.attr(value, "charger_type")], null) }, { "socDiff": _runtime_1.py.attr(value, "state_of_charge_difference") }));
}
/** Translated upstream route_distance_input. */
function route_distance_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "value": _runtime_1.py.attr(value, "value") }, { "unit": _runtime_1.py.call(optional_navigation_enum, [_runtime_1.py.attr(value, "unit")], null) }));
}
/** Translated upstream route_temperature_input. */
function route_temperature_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "value": _runtime_1.py.attr(value, "value") }, { "unit": _runtime_1.py.call(optional_navigation_enum, [_runtime_1.py.attr(value, "unit")], null) }));
}
/** Translated upstream route_notification_interval_input. */
function route_notification_interval_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return Object.assign({}, { ["value"]: _runtime_1.py.attr(value, "value") }, { ["unit"]: _runtime_1.py.call(navigation_enum_input, [_runtime_1.py.attr(value, "unit")], null) });
}
/** Translated upstream route_charging_time_input. */
function route_charging_time_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return Object.assign({}, { ["unit"]: _runtime_1.py.call(navigation_enum_input, [_runtime_1.py.attr(value, "unit")], null) }, { ["value"]: _runtime_1.py.attr(value, "value") });
}
/** Translated upstream planned_route_input. */
function planned_route_input(...__args) {
    let item;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "name": _runtime_1.py.attr(value, "name") }, { "routes": (() => { const __out = []; for (const item of _runtime_1.py.iterable(_runtime_1.py.attr(value, "routes"))) {
            __out.push((_runtime_1.py.truth(((item !== null))) ? _runtime_1.py.call(route_waypoint_input, [item], null) : null));
        } return __out; })() }, { "estimatedTimeOfDeparture": _runtime_1.py.call(graphql_input_1.serialize_datetime, [_runtime_1.py.attr(value, "estimated_time_of_departure")], null) }, { "estimatedTimeOfArrival": _runtime_1.py.call(graphql_input_1.serialize_datetime, [_runtime_1.py.attr(value, "estimated_time_of_arrival")], null) }, { "distance": _runtime_1.py.call(route_distance_input, [_runtime_1.py.attr(value, "distance")], null) }, { "temperature": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "temperature"), route_temperature_input], null) }, { "shouldRecalculateRoute": _runtime_1.py.attr(value, "should_recalculate_route") }, { "shouldEnableNotification": _runtime_1.py.attr(value, "should_enable_notification") }, { "notificationInterval": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "notification_interval"), route_notification_interval_input], null) }, { "avoidHighway": _runtime_1.py.attr(value, "avoid_highway") }, { "avoidTolls": _runtime_1.py.attr(value, "avoid_tolls") }, { "avoidFerries": _runtime_1.py.attr(value, "avoid_ferries") }));
}
/** Translated upstream planned_route_update_input. */
function planned_route_update_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "id": _runtime_1.py.attr(value, "id") }, { "name": _runtime_1.py.attr(value, "name") }, { "routes": _runtime_1.py.call(_optional_routes, [_runtime_1.py.attr(value, "routes")], null) }, { "estimatedTimeOfDeparture": _runtime_1.py.call(_optional_datetime, [_runtime_1.py.attr(value, "estimated_time_of_departure")], null) }, { "estimatedTimeOfArrival": _runtime_1.py.call(_optional_datetime, [_runtime_1.py.attr(value, "estimated_time_of_arrival")], null) }, { "distance": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "distance"), route_distance_input], null) }, { "temperature": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "temperature"), route_temperature_input], null) }, { "notificationInterval": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "notification_interval"), route_notification_interval_input], null) }, { "shouldEnableNotification": _runtime_1.py.attr(value, "should_enable_notification") }, { "shouldRecalculateRoute": _runtime_1.py.attr(value, "should_recalculate_route") }, { "avoidHighway": _runtime_1.py.attr(value, "avoid_highway") }, { "avoidTolls": _runtime_1.py.attr(value, "avoid_tolls") }, { "avoidFerries": _runtime_1.py.attr(value, "avoid_ferries") }));
}
/** Translated upstream t_junction_location_input. */
function t_junction_location_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return Object.assign({}, { ["id"]: _runtime_1.py.attr(value, "id") }, { ["name"]: _runtime_1.py.attr(value, "name") });
}
/** Translated upstream save_t_junction_locations_input. */
function save_t_junction_locations_input(...__args) {
    let location;
    let { "vin": vin, "last_updated_at": last_updated_at, "locations": locations } = _runtime_1.py.bind(__args, ["vin", "last_updated_at", "locations"], {}, [], null, null);
    return Object.assign({}, { ["vin"]: vin }, { ["lastUpdatedAt"]: last_updated_at }, { ["locationIds"]: (() => { const __out = []; for (const location of _runtime_1.py.iterable(locations)) {
            __out.push(_runtime_1.py.call(t_junction_location_input, [location], null));
        } return __out; })() });
}
/** Translated upstream update_saved_t_junction_location_input. */
function update_saved_t_junction_location_input(...__args) {
    let { "vin": vin, "location_id": location_id, "location_name": location_name } = _runtime_1.py.bind(__args, ["vin", "location_id", "location_name"], {}, [], null, null);
    return Object.assign({}, { ["vin"]: vin }, { ["id"]: location_id }, { ["locationName"]: location_name });
}
/** Translated upstream delete_saved_t_junction_locations_input. */
function delete_saved_t_junction_locations_input(...__args) {
    let { "vin": vin, "location_ids": location_ids, "last_updated_at": last_updated_at } = _runtime_1.py.bind(__args, ["vin", "location_ids", "last_updated_at"], {}, [], null, null);
    return Object.assign({}, { ["vin"]: vin }, { ["locationIds"]: _runtime_1.py.call(_runtime_1.py.list, [location_ids], null) }, { ["lastUpdatedAt"]: last_updated_at });
}
/** Translated upstream delete_unsaved_t_junction_locations_input. */
function delete_unsaved_t_junction_locations_input(...__args) {
    let { "vin": vin, "location_ids": location_ids } = _runtime_1.py.bind(__args, ["vin", "location_ids"], {}, [], null, null);
    return Object.assign({}, { ["vin"]: vin }, { ["locationIds"]: _runtime_1.py.call(_runtime_1.py.list, [location_ids], null) });
}
/** Translated upstream optional_destination_time. */
function optional_destination_time(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(_optional_datetime, [value], null);
}
/** Translated upstream optional_navigation_enum. */
function optional_navigation_enum(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, StrEnum], null))) {
        return _runtime_1.py.call(navigation_enum_input, [value], null);
    }
    return value;
}
/** Translated upstream navigation_enum_input. */
function navigation_enum_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
}
/** Translated upstream nullable_route_waypoints_input. */
function nullable_route_waypoints_input(...__args) {
    let value;
    let { "values": values } = _runtime_1.py.bind(__args, ["values"], {}, [], null, null);
    return (() => { const __out = []; for (const value of _runtime_1.py.iterable(values)) {
        __out.push((_runtime_1.py.truth(((value !== null))) ? _runtime_1.py.call(route_waypoint_input, [value], null) : null));
    } return __out; })();
}
/** Translated upstream nullable_plug_connector_types_input. */
function nullable_plug_connector_types_input(...__args) {
    let value;
    let { "values": values } = _runtime_1.py.bind(__args, ["values"], {}, [], null, null);
    return (() => { const __out = []; for (const value of _runtime_1.py.iterable(values)) {
        __out.push((_runtime_1.py.truth(((value !== null))) ? _runtime_1.py.call(navigation_enum_input, [value], null) : null));
    } return __out; })();
}
/** Translated upstream optional_battery_level_string. */
function optional_battery_level_string(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(_runtime_1.py.str, [value], null);
}
/** Translated upstream _optional_routes. */
function _optional_routes(...__args) {
    let item;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return (() => { const __out = []; for (const item of _runtime_1.py.iterable(value)) {
        __out.push((_runtime_1.py.truth(((item !== null))) ? _runtime_1.py.call(route_waypoint_input, [item], null) : null));
    } return __out; })();
}
/** Translated upstream _optional_datetime. */
function _optional_datetime(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(graphql_input_1.serialize_datetime, [value], null);
}
/** Translated upstream _optional_serialized. */
function _optional_serialized(...__args) {
    let { "value": value, "serializer": serializer } = _runtime_1.py.bind(__args, ["value", "serializer"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(serializer, [value], null);
}
//# sourceMappingURL=navigation_inputs.js.map