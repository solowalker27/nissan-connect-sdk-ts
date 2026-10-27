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
exports._VehicleDetailClientMixin = exports.parse_vehicle_valet_alert = exports.parse_vehicle_status_and_recalls = exports.parse_vehicle_speed_alerts = exports.parse_vehicle_nickname = exports.parse_vehicle_model_year = exports.parse_vehicle_doors_status = exports.parse_vehicle_curfew_alerts = exports.parse_vehicle_core_status = exports.parse_vehicle_climate_status = exports.parse_vehicle_boundary_alerts = exports.parse_vehicle_battery_status = exports.VehicleStatusAndRecalls = exports.VehicleNickname = exports.VehicleModelYear = exports.vehicle_valet_alerts_variables = exports.vehicle_status_variables = exports.vehicle_status_and_recalls_variables = exports.vehicle_speed_alerts_variables = exports.vehicle_nickname_variables = exports.vehicle_model_year_variables = exports.vehicle_doors_status_variables = exports.vehicle_curfew_alerts_variables = exports.vehicle_climate_status_variables = exports.vehicle_boundary_alerts_variables = exports.vehicle_battery_status_variables = exports.parse_vehicle_status = exports.VehicleStatus = exports.ValetAlert = exports.TemperatureUnit = exports.SpeedUnit = exports.SpeedAlert = exports.DoorsStatus = exports.DistanceUnit = exports.CurfewAlert = exports.ClimateStatus = exports.BoundaryAlert = exports.BatteryStatus = exports.serialize_enum = exports.UnsetType = exports.UNSET = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "BatteryStatus", { enumerable: true, get: function () { return models_1.BatteryStatus; } });
Object.defineProperty(exports, "BoundaryAlert", { enumerable: true, get: function () { return models_1.BoundaryAlert; } });
Object.defineProperty(exports, "ClimateStatus", { enumerable: true, get: function () { return models_1.ClimateStatus; } });
Object.defineProperty(exports, "CurfewAlert", { enumerable: true, get: function () { return models_1.CurfewAlert; } });
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "DoorsStatus", { enumerable: true, get: function () { return models_1.DoorsStatus; } });
Object.defineProperty(exports, "SpeedAlert", { enumerable: true, get: function () { return models_1.SpeedAlert; } });
Object.defineProperty(exports, "SpeedUnit", { enumerable: true, get: function () { return models_1.SpeedUnit; } });
Object.defineProperty(exports, "TemperatureUnit", { enumerable: true, get: function () { return models_1.TemperatureUnit; } });
Object.defineProperty(exports, "ValetAlert", { enumerable: true, get: function () { return models_1.ValetAlert; } });
Object.defineProperty(exports, "VehicleStatus", { enumerable: true, get: function () { return models_1.VehicleStatus; } });
const parsing_1 = require("./parsing");
Object.defineProperty(exports, "parse_vehicle_status", { enumerable: true, get: function () { return parsing_1.parse_vehicle_status; } });
const vehicle_detail_inputs_1 = require("./vehicle_detail_inputs");
Object.defineProperty(exports, "vehicle_battery_status_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_battery_status_variables; } });
Object.defineProperty(exports, "vehicle_boundary_alerts_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_boundary_alerts_variables; } });
Object.defineProperty(exports, "vehicle_climate_status_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_climate_status_variables; } });
Object.defineProperty(exports, "vehicle_curfew_alerts_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_curfew_alerts_variables; } });
Object.defineProperty(exports, "vehicle_doors_status_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_doors_status_variables; } });
Object.defineProperty(exports, "vehicle_model_year_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_model_year_variables; } });
Object.defineProperty(exports, "vehicle_nickname_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_nickname_variables; } });
Object.defineProperty(exports, "vehicle_speed_alerts_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_speed_alerts_variables; } });
Object.defineProperty(exports, "vehicle_status_and_recalls_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_status_and_recalls_variables; } });
Object.defineProperty(exports, "vehicle_status_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_status_variables; } });
Object.defineProperty(exports, "vehicle_valet_alerts_variables", { enumerable: true, get: function () { return vehicle_detail_inputs_1.vehicle_valet_alerts_variables; } });
const vehicle_detail_models_1 = require("./vehicle_detail_models");
Object.defineProperty(exports, "VehicleModelYear", { enumerable: true, get: function () { return vehicle_detail_models_1.VehicleModelYear; } });
Object.defineProperty(exports, "VehicleNickname", { enumerable: true, get: function () { return vehicle_detail_models_1.VehicleNickname; } });
Object.defineProperty(exports, "VehicleStatusAndRecalls", { enumerable: true, get: function () { return vehicle_detail_models_1.VehicleStatusAndRecalls; } });
const vehicle_detail_parsing_1 = require("./vehicle_detail_parsing");
Object.defineProperty(exports, "parse_vehicle_battery_status", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_battery_status; } });
Object.defineProperty(exports, "parse_vehicle_boundary_alerts", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_boundary_alerts; } });
Object.defineProperty(exports, "parse_vehicle_climate_status", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_climate_status; } });
Object.defineProperty(exports, "parse_vehicle_core_status", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_core_status; } });
Object.defineProperty(exports, "parse_vehicle_curfew_alerts", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_curfew_alerts; } });
Object.defineProperty(exports, "parse_vehicle_doors_status", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_doors_status; } });
Object.defineProperty(exports, "parse_vehicle_model_year", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_model_year; } });
Object.defineProperty(exports, "parse_vehicle_nickname", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_nickname; } });
Object.defineProperty(exports, "parse_vehicle_speed_alerts", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_speed_alerts; } });
Object.defineProperty(exports, "parse_vehicle_status_and_recalls", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_status_and_recalls; } });
Object.defineProperty(exports, "parse_vehicle_valet_alert", { enumerable: true, get: function () { return vehicle_detail_parsing_1.parse_vehicle_valet_alert; } });
/** Translated upstream _VehicleDetailClientMixin. */
class _VehicleDetailClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _VehicleDetailClientMixin, __args); }
    /** Return cached dynamic status without waking the vehicle. */
    async async_get_vehicle_status(...__args) {
        let data;
        let { "vin": vin, "distance_unit": distance_unit, "temperature_unit": temperature_unit } = _runtime_1.py.bind(__args, ["vin"], { "distance_unit": _runtime_1.py.attr(models_1.DistanceUnit, "MILE"), "temperature_unit": _runtime_1.py.attr(models_1.TemperatureUnit, "FAHRENHEIT") }, ["distance_unit", "temperature_unit"], null, null);
        /** Return cached dynamic status without waking the vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleDynamicData", _runtime_1.py.attr(operations, "VEHICLE_DYNAMIC_DATA"), Object.assign({}, { ["vin"]: vin }, { ["unit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [distance_unit], null) }, { ["temperatureUnit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [temperature_unit], null) })], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_status, [data, vin], null);
    }
    /** Return the upstream service's standalone cached battery-status response. */
    async async_get_vehicle_battery_status(...__args) {
        let data;
        let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
        /** Return the upstream service's standalone cached battery-status response. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleBatteryStatus", _runtime_1.py.attr(operations, "VEHICLE_BATTERY_STATUS"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_battery_status_variables, [vin], Object.assign({}, { "unit": unit }))], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_battery_status, [data, vin], null);
    }
    /** Return the upstream service's standalone boundary-alert collection. */
    async async_get_vehicle_boundary_alerts(...__args) {
        let data;
        let { "vin": vin, "distance_unit": distance_unit } = _runtime_1.py.bind(__args, ["vin"], { "distance_unit": graphql_input_1.UNSET }, ["distance_unit"], null, null);
        /** Return the upstream service's standalone boundary-alert collection. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleBoundaryAlerts", _runtime_1.py.attr(operations, "VEHICLE_BOUNDARY_ALERTS"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_boundary_alerts_variables, [vin], Object.assign({}, { "distance_unit": distance_unit }))], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_boundary_alerts, [data], null);
    }
    /** Return the upstream service's standalone cached climate-status response. */
    async async_get_vehicle_climate_status(...__args) {
        let data;
        let { "vin": vin, "temperature_unit": temperature_unit } = _runtime_1.py.bind(__args, ["vin", "temperature_unit"], {}, [], null, null);
        /** Return the upstream service's standalone cached climate-status response. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleClimateStatus", _runtime_1.py.attr(operations, "VEHICLE_CLIMATE_STATUS"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_climate_status_variables, [vin, temperature_unit], null)], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_climate_status, [data, vin], null);
    }
    /** Return the upstream service's standalone curfew-alert collection. */
    async async_get_vehicle_curfew_alerts(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the upstream service's standalone curfew-alert collection. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleCurfewAlerts", _runtime_1.py.attr(operations, "VEHICLE_CURFEW_ALERTS"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_curfew_alerts_variables, [vin], null)], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_curfew_alerts, [data], null);
    }
    /** Return the upstream service's standalone cached doors-status response. */
    async async_get_vehicle_doors_status(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the upstream service's standalone cached doors-status response. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleDoorsStatus", _runtime_1.py.attr(operations, "VEHICLE_DOORS_STATUS"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_doors_status_variables, [vin], null)], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_doors_status, [data, vin], null);
    }
    /** Return the standalone required model and year fields for a vehicle. */
    async async_get_vehicle_model_year(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the standalone required model and year fields for a vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleModelYear", _runtime_1.py.attr(operations, "VEHICLE_MODEL_YEAR"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_model_year_variables, [vin], null)], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_model_year, [data], null);
    }
    /** Return the standalone nullable nickname response for a vehicle. */
    async async_get_vehicle_nickname(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the standalone nullable nickname response for a vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleNickname", _runtime_1.py.attr(operations, "VEHICLE_NICKNAME"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_nickname_variables, [vin], null)], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_nickname, [data], null);
    }
    /** Return the upstream service's standalone speed-alert collection. */
    async async_get_vehicle_speed_alerts(...__args) {
        let data;
        let { "vin": vin, "speed_unit": speed_unit } = _runtime_1.py.bind(__args, ["vin"], { "speed_unit": graphql_input_1.UNSET }, ["speed_unit"], null, null);
        /** Return the upstream service's standalone speed-alert collection. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleSpeedAlerts", _runtime_1.py.attr(operations, "VEHICLE_SPEED_ALERTS"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_speed_alerts_variables, [vin], Object.assign({}, { "speed_unit": speed_unit }))], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_speed_alerts, [data], null);
    }
    /** Return the narrower non-EV VehicleStatus operation from the upstream service. */
    async async_get_vehicle_core_status(...__args) {
        let data;
        let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
        /** Return the narrower non-EV VehicleStatus operation from the upstream service. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleStatus", _runtime_1.py.attr(operations, "VEHICLE_STATUS"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_status_variables, [vin], Object.assign({}, { "unit": unit }))], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_core_status, [data, vin], null);
    }
    /** Return the upstream service's combined cached core status and recalls response. */
    async async_get_vehicle_status_and_recalls(...__args) {
        let data;
        let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
        /** Return the upstream service's combined cached core status and recalls response. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleStatusAndRecalls", _runtime_1.py.attr(operations, "VEHICLE_STATUS_AND_RECALLS"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_status_and_recalls_variables, [vin], Object.assign({}, { "unit": unit }))], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_status_and_recalls, [data, vin], null);
    }
    /** Return the upstream service's standalone valet-alert response. */
    async async_get_vehicle_valet_alert(...__args) {
        let data;
        let { "vin": vin, "distance_unit": distance_unit } = _runtime_1.py.bind(__args, ["vin"], { "distance_unit": graphql_input_1.UNSET }, ["distance_unit"], null, null);
        /** Return the upstream service's standalone valet-alert response. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleValetAlerts", _runtime_1.py.attr(operations, "VEHICLE_VALET_ALERTS"), _runtime_1.py.call(vehicle_detail_inputs_1.vehicle_valet_alerts_variables, [vin], Object.assign({}, { "distance_unit": distance_unit }))], null));
        return _runtime_1.py.call(vehicle_detail_parsing_1.parse_vehicle_valet_alert, [data], null);
    }
}
exports._VehicleDetailClientMixin = _VehicleDetailClientMixin;
_runtime_1.py.classType(_VehicleDetailClientMixin);
//# sourceMappingURL=_vehicle_detail_client.js.map