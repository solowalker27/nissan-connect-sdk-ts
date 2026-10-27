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
exports._NavigationReadClientMixin = exports.parse_vehicle_location = exports.parse_photos_around_vehicle = exports.parse_vehicle_routes_history = exports.parse_vehicle_point_of_interest_destinations = exports.parse_vehicle_planned_routes = exports.parse_vehicle_journeys = exports.parse_vehicle_ev_waypoints = exports.parse_t_junction_locations = exports.VehicleRoutesHistory = exports.VehiclePointOfInterestDestinations = exports.VehiclePlannedRoutes = exports.VehicleJourneys = exports.TJunctionLocations = exports.optional_navigation_enum = exports.optional_destination_time = exports.optional_battery_level_string = exports.nullable_route_waypoints_input = exports.nullable_plug_connector_types_input = exports.RouteWaypointInput = exports.RouteStatus = exports.PointOfInterestFolderFilter = exports.PlugConnectorType = exports.NavigationDataSource = exports.VehiclePhotos = exports.VehicleLocation = exports.TemperatureUnit = exports.DistanceUnit = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports._navigation_headers = exports._NissanClientBase = void 0;
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
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "TemperatureUnit", { enumerable: true, get: function () { return models_1.TemperatureUnit; } });
Object.defineProperty(exports, "VehicleLocation", { enumerable: true, get: function () { return models_1.VehicleLocation; } });
Object.defineProperty(exports, "VehiclePhotos", { enumerable: true, get: function () { return models_1.VehiclePhotos; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "NavigationDataSource", { enumerable: true, get: function () { return navigation_inputs_1.NavigationDataSource; } });
Object.defineProperty(exports, "PlugConnectorType", { enumerable: true, get: function () { return navigation_inputs_1.PlugConnectorType; } });
Object.defineProperty(exports, "PointOfInterestFolderFilter", { enumerable: true, get: function () { return navigation_inputs_1.PointOfInterestFolderFilter; } });
Object.defineProperty(exports, "RouteStatus", { enumerable: true, get: function () { return navigation_inputs_1.RouteStatus; } });
Object.defineProperty(exports, "RouteWaypointInput", { enumerable: true, get: function () { return navigation_inputs_1.RouteWaypointInput; } });
Object.defineProperty(exports, "nullable_plug_connector_types_input", { enumerable: true, get: function () { return navigation_inputs_1.nullable_plug_connector_types_input; } });
Object.defineProperty(exports, "nullable_route_waypoints_input", { enumerable: true, get: function () { return navigation_inputs_1.nullable_route_waypoints_input; } });
Object.defineProperty(exports, "optional_battery_level_string", { enumerable: true, get: function () { return navigation_inputs_1.optional_battery_level_string; } });
Object.defineProperty(exports, "optional_destination_time", { enumerable: true, get: function () { return navigation_inputs_1.optional_destination_time; } });
Object.defineProperty(exports, "optional_navigation_enum", { enumerable: true, get: function () { return navigation_inputs_1.optional_navigation_enum; } });
const navigation_models_1 = require("./navigation_models");
Object.defineProperty(exports, "TJunctionLocations", { enumerable: true, get: function () { return navigation_models_1.TJunctionLocations; } });
Object.defineProperty(exports, "VehicleJourneys", { enumerable: true, get: function () { return navigation_models_1.VehicleJourneys; } });
Object.defineProperty(exports, "VehiclePlannedRoutes", { enumerable: true, get: function () { return navigation_models_1.VehiclePlannedRoutes; } });
Object.defineProperty(exports, "VehiclePointOfInterestDestinations", { enumerable: true, get: function () { return navigation_models_1.VehiclePointOfInterestDestinations; } });
Object.defineProperty(exports, "VehicleRoutesHistory", { enumerable: true, get: function () { return navigation_models_1.VehicleRoutesHistory; } });
const navigation_parsing_1 = require("./navigation_parsing");
Object.defineProperty(exports, "parse_t_junction_locations", { enumerable: true, get: function () { return navigation_parsing_1.parse_t_junction_locations; } });
Object.defineProperty(exports, "parse_vehicle_ev_waypoints", { enumerable: true, get: function () { return navigation_parsing_1.parse_vehicle_ev_waypoints; } });
Object.defineProperty(exports, "parse_vehicle_journeys", { enumerable: true, get: function () { return navigation_parsing_1.parse_vehicle_journeys; } });
Object.defineProperty(exports, "parse_vehicle_planned_routes", { enumerable: true, get: function () { return navigation_parsing_1.parse_vehicle_planned_routes; } });
Object.defineProperty(exports, "parse_vehicle_point_of_interest_destinations", { enumerable: true, get: function () { return navigation_parsing_1.parse_vehicle_point_of_interest_destinations; } });
Object.defineProperty(exports, "parse_vehicle_routes_history", { enumerable: true, get: function () { return navigation_parsing_1.parse_vehicle_routes_history; } });
const parsing_1 = require("./parsing");
Object.defineProperty(exports, "parse_photos_around_vehicle", { enumerable: true, get: function () { return parsing_1.parse_photos_around_vehicle; } });
Object.defineProperty(exports, "parse_vehicle_location", { enumerable: true, get: function () { return parsing_1.parse_vehicle_location; } });
/** Translated upstream _NavigationReadClientMixin. */
class _NavigationReadClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _NavigationReadClientMixin, __args); }
    /** Return the last cached location without requesting a new fix. */
    async async_get_vehicle_location(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the last cached location without requesting a new fix. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleLocation", _runtime_1.py.attr(operations, "VEHICLE_LOCATION"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_location, [data, vin], null);
    }
    /** Return cached vehicle photos and their temporary links when available. */
    async async_get_photos_around_vehicle(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return cached vehicle photos and their temporary links when available. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["PhotosAroundVehicle", _runtime_1.py.attr(operations, "PHOTOS_AROUND_VEHICLE"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_photos_around_vehicle, [data], null);
    }
    /** Return journeys cached for a connected vehicle. */
    async async_get_vehicle_journeys(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return journeys cached for a connected vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleJourneys", _runtime_1.py.attr(operations, "VEHICLE_JOURNEYS"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(navigation_parsing_1.parse_vehicle_journeys, [data], null);
    }
    /** Return saved planned routes for an electric vehicle. */
    async async_get_vehicle_planned_routes(...__args) {
        let data;
        let { "vin": vin, "distance_unit": distance_unit, "temperature_unit": temperature_unit, "data_source": data_source } = _runtime_1.py.bind(__args, ["vin"], { "distance_unit": graphql_input_1.UNSET, "temperature_unit": graphql_input_1.UNSET, "data_source": null }, ["distance_unit", "temperature_unit", "data_source"], null, null);
        /** Return saved planned routes for an electric vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehiclePlannedRoutes", _runtime_1.py.attr(operations, "VEHICLE_PLANNED_ROUTES"), _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "distanceUnit": _runtime_1.py.call(navigation_inputs_1.optional_navigation_enum, [distance_unit], null) }, { "temperatureUnit": _runtime_1.py.call(navigation_inputs_1.optional_navigation_enum, [temperature_unit], null) }))], Object.assign({}, { "extra_headers": _runtime_1.py.call(_client_helpers_1._navigation_headers, [data_source], null) })));
        return _runtime_1.py.call(navigation_parsing_1.parse_vehicle_planned_routes, [data], null);
    }
    /** Return favorite and recent destinations stored for a vehicle. */
    async async_get_vehicle_point_of_interest_destinations(...__args) {
        let data;
        let { "vin": vin, "folder": folder } = _runtime_1.py.bind(__args, ["vin"], { "folder": _runtime_1.py.attr(navigation_inputs_1.PointOfInterestFolderFilter, "BOTH") }, ["folder"], null, null);
        /** Return favorite and recent destinations stored for a vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehiclePOIDestinations", _runtime_1.py.attr(operations, "VEHICLE_POINT_OF_INTEREST_DESTINATIONS"), _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "folderName": _runtime_1.py.call(navigation_inputs_1.optional_navigation_enum, [folder], null) }))], null));
        return _runtime_1.py.call(navigation_parsing_1.parse_vehicle_point_of_interest_destinations, [data], null);
    }
    /** Return route history for a compatible electric AVK2 vehicle. */
    async async_get_vehicle_routes_history(...__args) {
        let data;
        let { "vin": vin, "distance_unit": distance_unit, "temperature_unit": temperature_unit, "status": status } = _runtime_1.py.bind(__args, ["vin"], { "distance_unit": graphql_input_1.UNSET, "temperature_unit": graphql_input_1.UNSET, "status": graphql_input_1.UNSET }, ["distance_unit", "temperature_unit", "status"], null, null);
        /** Return route history for a compatible electric AVK2 vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["RoutesHistory", _runtime_1.py.attr(operations, "ROUTES_HISTORY"), _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "distanceUnit": _runtime_1.py.call(navigation_inputs_1.optional_navigation_enum, [distance_unit], null) }, { "temperatureUnit": _runtime_1.py.call(navigation_inputs_1.optional_navigation_enum, [temperature_unit], null) }, { "status": _runtime_1.py.call(navigation_inputs_1.optional_navigation_enum, [status], null) }))], null));
        return _runtime_1.py.call(navigation_parsing_1.parse_vehicle_routes_history, [data], null);
    }
    /** Return saved and unsaved T-junction camera locations. */
    async async_get_t_junction_locations(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return saved and unsaved T-junction camera locations. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["TJunctionLocations", _runtime_1.py.attr(operations, "T_JUNCTION_LOCATIONS"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(navigation_parsing_1.parse_t_junction_locations, [data], null);
    }
    /** Calculate electric route waypoints or return a typed route error. */
    async async_get_vehicle_ev_waypoints(...__args) {
        let data, effective_state_of_charge_at_stop;
        let { "vin": vin, "routes": routes, "plug_connector_types": plug_connector_types, "depart_at": depart_at, "arrived_by": arrived_by, "state_of_charge_at_destination": state_of_charge_at_destination, "distance_unit": distance_unit, "estimated_battery_level_at_departure": estimated_battery_level_at_departure, "minimum_power": minimum_power, "state_of_charge_at_stop": state_of_charge_at_stop, "use_hvac": use_hvac, "avoid_highway": avoid_highway, "avoid_tolls": avoid_tolls, "avoid_ferries": avoid_ferries, "data_source": data_source } = _runtime_1.py.bind(__args, ["vin", "routes", "plug_connector_types"], { "depart_at": graphql_input_1.UNSET, "arrived_by": graphql_input_1.UNSET, "state_of_charge_at_destination": graphql_input_1.UNSET, "distance_unit": graphql_input_1.UNSET, "estimated_battery_level_at_departure": graphql_input_1.UNSET, "minimum_power": graphql_input_1.UNSET, "state_of_charge_at_stop": graphql_input_1.UNSET, "use_hvac": graphql_input_1.UNSET, "avoid_highway": graphql_input_1.UNSET, "avoid_tolls": graphql_input_1.UNSET, "avoid_ferries": graphql_input_1.UNSET, "data_source": null }, ["depart_at", "arrived_by", "state_of_charge_at_destination", "distance_unit", "estimated_battery_level_at_departure", "minimum_power", "state_of_charge_at_stop", "use_hvac", "avoid_highway", "avoid_tolls", "avoid_ferries", "data_source"], null, null);
        /** Calculate electric route waypoints or return a typed route error. */
        effective_state_of_charge_at_stop = state_of_charge_at_stop;
        if (_runtime_1.py.truth(_runtime_1.py.and(() => ((data_source === _runtime_1.py.attr(navigation_inputs_1.NavigationDataSource, "KMR"))), () => _runtime_1.py.call(_runtime_1.py.isinstance, [effective_state_of_charge_at_stop, graphql_input_1.UnsetType], null)))) {
            effective_state_of_charge_at_stop = 20;
        }
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleEVWaypoints", _runtime_1.py.attr(operations, "VEHICLE_EV_WAYPOINTS"), _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "departAt": _runtime_1.py.call(navigation_inputs_1.optional_destination_time, [depart_at], null) }, { "arrivedBy": _runtime_1.py.call(navigation_inputs_1.optional_destination_time, [arrived_by], null) }, { "socAtDestination": state_of_charge_at_destination }, { "routes": _runtime_1.py.call(navigation_inputs_1.nullable_route_waypoints_input, [routes], null) }, { "distanceUnit": _runtime_1.py.call(navigation_inputs_1.optional_navigation_enum, [distance_unit], null) }, { "plugConnectorTypes": _runtime_1.py.call(navigation_inputs_1.nullable_plug_connector_types_input, [plug_connector_types], null) }, { "estimatedBatteryLevelAtDeparture": _runtime_1.py.call(navigation_inputs_1.optional_battery_level_string, [estimated_battery_level_at_departure], null) }, { "minPower": minimum_power }, { "socAtStop": effective_state_of_charge_at_stop }, { "useHvac": use_hvac }, { "avoidHighway": avoid_highway }, { "avoidTolls": avoid_tolls }, { "avoidFerries": avoid_ferries }))], Object.assign({}, { "extra_headers": _runtime_1.py.call(_client_helpers_1._navigation_headers, [data_source], null) })));
        return _runtime_1.py.call(navigation_parsing_1.parse_vehicle_ev_waypoints, [data], null);
    }
}
exports._NavigationReadClientMixin = _NavigationReadClientMixin;
_runtime_1.py.classType(_NavigationReadClientMixin);
//# sourceMappingURL=_navigation_read_client.js.map