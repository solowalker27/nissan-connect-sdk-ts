"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports._NavigationCommandClientMixin = exports.update_saved_t_junction_location_input = exports.save_t_junction_locations_input = exports.planned_route_update_input = exports.planned_route_input = exports.optional_navigation_enum = exports.optional_destination_time = exports.navigation_enum_input = exports.destination_input = exports.delete_unsaved_t_junction_locations_input = exports.delete_saved_t_junction_locations_input = exports.TJunctionLocationInput = exports.RouteCalculationCondition = exports.PointOfInterestFolder = exports.PlannedRouteUpdate = exports.PlannedRouteInput = exports.NavigationDataSource = exports.DestinationInput = exports.ServiceRequestKind = exports.ServiceRequest = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports._navigation_headers = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const datetime = _runtime_1.py.datetime;
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const _client_helpers_1 = require("./_client_helpers");
Object.defineProperty(exports, "_navigation_headers", { enumerable: true, get: function () { return _client_helpers_1._navigation_headers; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
const models_1 = require("./models");
Object.defineProperty(exports, "ServiceRequest", { enumerable: true, get: function () { return models_1.ServiceRequest; } });
Object.defineProperty(exports, "ServiceRequestKind", { enumerable: true, get: function () { return models_1.ServiceRequestKind; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "DestinationInput", { enumerable: true, get: function () { return navigation_inputs_1.DestinationInput; } });
Object.defineProperty(exports, "NavigationDataSource", { enumerable: true, get: function () { return navigation_inputs_1.NavigationDataSource; } });
Object.defineProperty(exports, "PlannedRouteInput", { enumerable: true, get: function () { return navigation_inputs_1.PlannedRouteInput; } });
Object.defineProperty(exports, "PlannedRouteUpdate", { enumerable: true, get: function () { return navigation_inputs_1.PlannedRouteUpdate; } });
Object.defineProperty(exports, "PointOfInterestFolder", { enumerable: true, get: function () { return navigation_inputs_1.PointOfInterestFolder; } });
Object.defineProperty(exports, "RouteCalculationCondition", { enumerable: true, get: function () { return navigation_inputs_1.RouteCalculationCondition; } });
Object.defineProperty(exports, "TJunctionLocationInput", { enumerable: true, get: function () { return navigation_inputs_1.TJunctionLocationInput; } });
Object.defineProperty(exports, "delete_saved_t_junction_locations_input", { enumerable: true, get: function () { return navigation_inputs_1.delete_saved_t_junction_locations_input; } });
Object.defineProperty(exports, "delete_unsaved_t_junction_locations_input", { enumerable: true, get: function () { return navigation_inputs_1.delete_unsaved_t_junction_locations_input; } });
Object.defineProperty(exports, "destination_input", { enumerable: true, get: function () { return navigation_inputs_1.destination_input; } });
Object.defineProperty(exports, "navigation_enum_input", { enumerable: true, get: function () { return navigation_inputs_1.navigation_enum_input; } });
Object.defineProperty(exports, "optional_destination_time", { enumerable: true, get: function () { return navigation_inputs_1.optional_destination_time; } });
Object.defineProperty(exports, "optional_navigation_enum", { enumerable: true, get: function () { return navigation_inputs_1.optional_navigation_enum; } });
Object.defineProperty(exports, "planned_route_input", { enumerable: true, get: function () { return navigation_inputs_1.planned_route_input; } });
Object.defineProperty(exports, "planned_route_update_input", { enumerable: true, get: function () { return navigation_inputs_1.planned_route_update_input; } });
Object.defineProperty(exports, "save_t_junction_locations_input", { enumerable: true, get: function () { return navigation_inputs_1.save_t_junction_locations_input; } });
Object.defineProperty(exports, "update_saved_t_junction_location_input", { enumerable: true, get: function () { return navigation_inputs_1.update_saved_t_junction_location_input; } });
/** Translated upstream _NavigationCommandClientMixin. */
class _NavigationCommandClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _NavigationCommandClientMixin, __args); }
    /** Send an ad-hoc journey and its waypoints to the vehicle. */
    async async_send_journey(...__args) {
        let waypoint;
        let { "vin": vin, "waypoints": waypoints, "avoid_highway": avoid_highway, "avoid_tolls": avoid_tolls, "avoid_ferries": avoid_ferries, "estimated_time_of_arrival": estimated_time_of_arrival, "estimated_time_of_departure": estimated_time_of_departure, "arrival_flag": arrival_flag, "departure_flag": departure_flag, "data_source": data_source } = _runtime_1.py.bind(__args, ["vin", "waypoints"], { "avoid_highway": graphql_input_1.UNSET, "avoid_tolls": graphql_input_1.UNSET, "avoid_ferries": graphql_input_1.UNSET, "estimated_time_of_arrival": graphql_input_1.UNSET, "estimated_time_of_departure": graphql_input_1.UNSET, "arrival_flag": graphql_input_1.UNSET, "departure_flag": graphql_input_1.UNSET, "data_source": null }, ["avoid_highway", "avoid_tolls", "avoid_ferries", "estimated_time_of_arrival", "estimated_time_of_departure", "arrival_flag", "departure_flag", "data_source"], null, null);
        /** Send an ad-hoc journey and its waypoints to the vehicle. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_nullable_success_operation"), ["SendJourney", _runtime_1.py.attr(operations, "SEND_JOURNEY"), "sendJourney", _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "waypoints": (() => { const __out = []; for (const waypoint of _runtime_1.py.iterable(waypoints)) {
                    __out.push(_runtime_1.py.call(navigation_inputs_1.destination_input, [waypoint], null));
                } return __out; })() }, { "avoidHighway": avoid_highway }, { "avoidTolls": avoid_tolls }, { "avoidFerries": avoid_ferries }, { "estimatedTimeOfArrival": _runtime_1.py.call(navigation_inputs_1.optional_destination_time, [estimated_time_of_arrival], null) }, { "estimatedTimeOfDeparture": _runtime_1.py.call(navigation_inputs_1.optional_destination_time, [estimated_time_of_departure], null) }, { "arrivalFlag": arrival_flag }, { "departureFlag": departure_flag }))], Object.assign({}, { "extra_headers": _runtime_1.py.call(_client_helpers_1._navigation_headers, [data_source], null) })));
    }
    /** Send a previously saved route to the vehicle. */
    async async_send_planned_route(...__args) {
        let { "vin": vin, "route_id": route_id, "estimated_time_of_arrival": estimated_time_of_arrival, "estimated_time_of_departure": estimated_time_of_departure, "arrival_flag": arrival_flag, "departure_flag": departure_flag, "data_source": data_source } = _runtime_1.py.bind(__args, ["vin", "route_id"], { "estimated_time_of_arrival": graphql_input_1.UNSET, "estimated_time_of_departure": graphql_input_1.UNSET, "arrival_flag": graphql_input_1.UNSET, "departure_flag": graphql_input_1.UNSET, "data_source": null }, ["estimated_time_of_arrival", "estimated_time_of_departure", "arrival_flag", "departure_flag", "data_source"], null, null);
        /** Send a previously saved route to the vehicle. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_nullable_success_operation"), ["SendPlannedRoute", _runtime_1.py.attr(operations, "SEND_PLANNED_ROUTE"), "sendPlannedRoute", _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "routeId": route_id }, { "estimatedTimeOfArrival": _runtime_1.py.call(navigation_inputs_1.optional_destination_time, [estimated_time_of_arrival], null) }, { "estimatedTimeOfDeparture": _runtime_1.py.call(navigation_inputs_1.optional_destination_time, [estimated_time_of_departure], null) }, { "arrivalFlag": arrival_flag }, { "departureFlag": departure_flag }))], Object.assign({}, { "extra_headers": _runtime_1.py.call(_client_helpers_1._navigation_headers, [data_source], null) })));
    }
    /** Send a favorite or recent point of interest to the vehicle. */
    async async_send_point_of_interest(...__args) {
        let { "vin": vin, "folder": folder, "destination": destination, "calculation_condition": calculation_condition, "avoid_highway": avoid_highway, "avoid_tolls": avoid_tolls, "avoid_ferries": avoid_ferries } = _runtime_1.py.bind(__args, ["vin", "folder", "destination"], { "calculation_condition": graphql_input_1.UNSET, "avoid_highway": graphql_input_1.UNSET, "avoid_tolls": graphql_input_1.UNSET, "avoid_ferries": graphql_input_1.UNSET }, ["calculation_condition", "avoid_highway", "avoid_tolls", "avoid_ferries"], null, null);
        /** Send a favorite or recent point of interest to the vehicle. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_nullable_success_operation"), ["SendPointOfInterest", _runtime_1.py.attr(operations, "SEND_POINT_OF_INTEREST"), "sendPointOfInterest", _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "folderName": _runtime_1.py.call(navigation_inputs_1.navigation_enum_input, [folder], null) }, { "destinationInput": _runtime_1.py.call(navigation_inputs_1.destination_input, [destination], null) }, { "calculationCondition": _runtime_1.py.call(navigation_inputs_1.optional_navigation_enum, [calculation_condition], null) }, { "avoidHighway": avoid_highway }, { "avoidTolls": avoid_tolls }, { "avoidFerries": avoid_ferries }))], null));
    }
    /** Save a planned route in the vehicle account. */
    async async_save_route(...__args) {
        let { "vin": vin, "route": route, "arrival_flag": arrival_flag, "departure_flag": departure_flag, "data_source": data_source } = _runtime_1.py.bind(__args, ["vin", "route"], { "arrival_flag": graphql_input_1.UNSET, "departure_flag": graphql_input_1.UNSET, "data_source": null }, ["arrival_flag", "departure_flag", "data_source"], null, null);
        /** Save a planned route in the vehicle account. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["SaveRoute", _runtime_1.py.attr(operations, "SAVE_ROUTE"), "saveRoute", _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "plannedRoute": _runtime_1.py.call(navigation_inputs_1.planned_route_input, [route], null) }, { "arrivalFlag": arrival_flag }, { "departureFlag": departure_flag })), _runtime_1.py.attr(models_1.ServiceRequestKind, "ROUTE")], Object.assign({}, { "extra_headers": _runtime_1.py.call(_client_helpers_1._navigation_headers, [data_source], null) })));
    }
    /** Patch a saved planned route. */
    async async_update_route(...__args) {
        let { "vin": vin, "route": route, "arrival_flag": arrival_flag, "departure_flag": departure_flag } = _runtime_1.py.bind(__args, ["vin", "route"], { "arrival_flag": graphql_input_1.UNSET, "departure_flag": graphql_input_1.UNSET }, ["arrival_flag", "departure_flag"], null, null);
        /** Patch a saved planned route. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["UpdateRoute", _runtime_1.py.attr(operations, "UPDATE_ROUTE"), "updateRoute", _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "plannedRoute": _runtime_1.py.call(navigation_inputs_1.planned_route_update_input, [route], null) }, { "arrivalFlag": arrival_flag }, { "departureFlag": departure_flag })), _runtime_1.py.attr(models_1.ServiceRequestKind, "ROUTE")], null));
    }
    /** Delete a saved planned route. */
    async async_delete_route(...__args) {
        let { "vin": vin, "route_id": route_id } = _runtime_1.py.bind(__args, ["vin", "route_id"], {}, [], null, null);
        /** Delete a saved planned route. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_nullable_success_operation"), ["DeleteRoute", _runtime_1.py.attr(operations, "DELETE_ROUTE"), "deleteRoute", Object.assign({}, { ["vin"]: vin }, { ["routeId"]: route_id })], null));
    }
    /** Delete a destination from the vehicle's favorites. */
    async async_delete_favorite_point_of_interest(...__args) {
        let { "vin": vin, "destination_id": destination_id } = _runtime_1.py.bind(__args, ["vin", "destination_id"], {}, [], null, null);
        /** Delete a destination from the vehicle's favorites. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_nullable_success_operation"), ["DeleteFavoritePointOfInterest", _runtime_1.py.attr(operations, "DELETE_FAVORITE_POINT_OF_INTEREST"), "deleteFavoritePointOfInterest", Object.assign({}, { ["vin"]: vin }, { ["destinationId"]: destination_id })], null));
    }
    /** Save selected T-junction camera locations. */
    async async_save_t_junction_locations(...__args) {
        let { "vin": vin, "last_updated_at": last_updated_at, "locations": locations } = _runtime_1.py.bind(__args, ["vin", "last_updated_at", "locations"], {}, [], null, null);
        /** Save selected T-junction camera locations. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["SaveTJunctionLocations", _runtime_1.py.attr(operations, "SAVE_T_JUNCTION_LOCATIONS"), "saveTJunctionLocations", Object.assign({}, { ["input"]: _runtime_1.py.call(navigation_inputs_1.save_t_junction_locations_input, [vin, last_updated_at, locations], null) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "T_JUNCTION")], null));
    }
    /** Rename a saved T-junction camera location. */
    async async_update_saved_t_junction_location(...__args) {
        let { "vin": vin, "location_id": location_id, "location_name": location_name } = _runtime_1.py.bind(__args, ["vin", "location_id", "location_name"], {}, [], null, null);
        /** Rename a saved T-junction camera location. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["UpdateSavedTJunctionLocation", _runtime_1.py.attr(operations, "UPDATE_SAVED_T_JUNCTION_LOCATION"), "updateSavedTJunctionLocation", Object.assign({}, { ["input"]: _runtime_1.py.call(navigation_inputs_1.update_saved_t_junction_location_input, [vin, location_id, location_name], null) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "T_JUNCTION")], null));
    }
    /** Delete saved T-junction camera locations. */
    async async_delete_saved_t_junction_locations(...__args) {
        let { "vin": vin, "location_ids": location_ids, "last_updated_at": last_updated_at } = _runtime_1.py.bind(__args, ["vin", "location_ids"], {}, ["last_updated_at"], null, null);
        /** Delete saved T-junction camera locations. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["DeleteSavedTJunctionLocations", _runtime_1.py.attr(operations, "DELETE_SAVED_T_JUNCTION_LOCATIONS"), "deleteSavedTJunctionLocations", Object.assign({}, { ["input"]: _runtime_1.py.call(navigation_inputs_1.delete_saved_t_junction_locations_input, [vin, location_ids, last_updated_at], null) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "T_JUNCTION")], null));
    }
    /** Discard unsaved T-junction camera locations. */
    async async_delete_unsaved_t_junction_locations(...__args) {
        let { "vin": vin, "location_ids": location_ids } = _runtime_1.py.bind(__args, ["vin", "location_ids"], {}, [], null, null);
        /** Discard unsaved T-junction camera locations. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["DeleteUnsavedTJunctionLocations", _runtime_1.py.attr(operations, "DELETE_UNSAVED_T_JUNCTION_LOCATIONS"), "deleteUnsavedTJunctionLocations", Object.assign({}, { ["input"]: _runtime_1.py.call(navigation_inputs_1.delete_unsaved_t_junction_locations_input, [vin, location_ids], null) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "T_JUNCTION")], null));
    }
}
exports._NavigationCommandClientMixin = _NavigationCommandClientMixin;
_runtime_1.py.classType(_NavigationCommandClientMixin);
//# sourceMappingURL=_navigation_command_client.js.map