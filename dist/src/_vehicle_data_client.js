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
exports._VehicleDataClientMixin = exports.parse_vehicle_wifi_consumption = exports.parse_vehicle_subscriptions = exports.parse_vehicle_preferences = exports.parse_vehicle_data_privacy_mode = exports.parse_remote_service_history = exports.VehicleWifiConsumption = exports.VehicleSubscriptions = exports.VehiclePreferences = exports.RemoteServiceHistory = exports.DistanceUnit = exports.DataPrivacyMode = exports.parse_update_past_service = exports.parse_update_parts_reminder = exports.parse_service_contracts = exports.parse_reset_parts_reminder = exports.parse_parts_reminders = exports.parse_maintenance_timeline = exports.parse_delete_parts_reminder = exports.parse_create_parts_reminder = exports.parse_collision_probe_data = exports.parse_collision_history = exports.parse_add_past_service = exports.VehiclePartsReminders = exports.ServiceContract = exports.PartsReminderMutationResult = exports.MaintenanceTimeline = exports.CollisionProbeReading = exports.CollisionHistoryEntry = exports.update_past_service_variables = exports.update_parts_reminder_variables = exports.reset_parts_reminder_variables = exports.parts_reminders_variables = exports.get_service_contracts_variables = exports.get_maintenance_timeline_variables = exports.delete_parts_reminder_variables = exports.create_parts_reminder_variables = exports.collision_probe_data_variables = exports.collision_history_variables = exports.add_past_service_variables = exports.UpdatePastServiceInput = exports.UpdatePartsReminderInput = exports.ResetPartsReminderInput = exports.PastServiceInput = exports.CreatePartsReminderInput = exports.UnsetType = exports.UNSET = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
const maintenance_inputs_1 = require("./maintenance_inputs");
Object.defineProperty(exports, "CreatePartsReminderInput", { enumerable: true, get: function () { return maintenance_inputs_1.CreatePartsReminderInput; } });
Object.defineProperty(exports, "PastServiceInput", { enumerable: true, get: function () { return maintenance_inputs_1.PastServiceInput; } });
Object.defineProperty(exports, "ResetPartsReminderInput", { enumerable: true, get: function () { return maintenance_inputs_1.ResetPartsReminderInput; } });
Object.defineProperty(exports, "UpdatePartsReminderInput", { enumerable: true, get: function () { return maintenance_inputs_1.UpdatePartsReminderInput; } });
Object.defineProperty(exports, "UpdatePastServiceInput", { enumerable: true, get: function () { return maintenance_inputs_1.UpdatePastServiceInput; } });
Object.defineProperty(exports, "add_past_service_variables", { enumerable: true, get: function () { return maintenance_inputs_1.add_past_service_variables; } });
Object.defineProperty(exports, "collision_history_variables", { enumerable: true, get: function () { return maintenance_inputs_1.collision_history_variables; } });
Object.defineProperty(exports, "collision_probe_data_variables", { enumerable: true, get: function () { return maintenance_inputs_1.collision_probe_data_variables; } });
Object.defineProperty(exports, "create_parts_reminder_variables", { enumerable: true, get: function () { return maintenance_inputs_1.create_parts_reminder_variables; } });
Object.defineProperty(exports, "delete_parts_reminder_variables", { enumerable: true, get: function () { return maintenance_inputs_1.delete_parts_reminder_variables; } });
Object.defineProperty(exports, "get_maintenance_timeline_variables", { enumerable: true, get: function () { return maintenance_inputs_1.get_maintenance_timeline_variables; } });
Object.defineProperty(exports, "get_service_contracts_variables", { enumerable: true, get: function () { return maintenance_inputs_1.get_service_contracts_variables; } });
Object.defineProperty(exports, "parts_reminders_variables", { enumerable: true, get: function () { return maintenance_inputs_1.parts_reminders_variables; } });
Object.defineProperty(exports, "reset_parts_reminder_variables", { enumerable: true, get: function () { return maintenance_inputs_1.reset_parts_reminder_variables; } });
Object.defineProperty(exports, "update_parts_reminder_variables", { enumerable: true, get: function () { return maintenance_inputs_1.update_parts_reminder_variables; } });
Object.defineProperty(exports, "update_past_service_variables", { enumerable: true, get: function () { return maintenance_inputs_1.update_past_service_variables; } });
const maintenance_models_1 = require("./maintenance_models");
Object.defineProperty(exports, "CollisionHistoryEntry", { enumerable: true, get: function () { return maintenance_models_1.CollisionHistoryEntry; } });
Object.defineProperty(exports, "CollisionProbeReading", { enumerable: true, get: function () { return maintenance_models_1.CollisionProbeReading; } });
Object.defineProperty(exports, "MaintenanceTimeline", { enumerable: true, get: function () { return maintenance_models_1.MaintenanceTimeline; } });
Object.defineProperty(exports, "PartsReminderMutationResult", { enumerable: true, get: function () { return maintenance_models_1.PartsReminderMutationResult; } });
Object.defineProperty(exports, "ServiceContract", { enumerable: true, get: function () { return maintenance_models_1.ServiceContract; } });
Object.defineProperty(exports, "VehiclePartsReminders", { enumerable: true, get: function () { return maintenance_models_1.VehiclePartsReminders; } });
const maintenance_parsing_1 = require("./maintenance_parsing");
Object.defineProperty(exports, "parse_add_past_service", { enumerable: true, get: function () { return maintenance_parsing_1.parse_add_past_service; } });
Object.defineProperty(exports, "parse_collision_history", { enumerable: true, get: function () { return maintenance_parsing_1.parse_collision_history; } });
Object.defineProperty(exports, "parse_collision_probe_data", { enumerable: true, get: function () { return maintenance_parsing_1.parse_collision_probe_data; } });
Object.defineProperty(exports, "parse_create_parts_reminder", { enumerable: true, get: function () { return maintenance_parsing_1.parse_create_parts_reminder; } });
Object.defineProperty(exports, "parse_delete_parts_reminder", { enumerable: true, get: function () { return maintenance_parsing_1.parse_delete_parts_reminder; } });
Object.defineProperty(exports, "parse_maintenance_timeline", { enumerable: true, get: function () { return maintenance_parsing_1.parse_maintenance_timeline; } });
Object.defineProperty(exports, "parse_parts_reminders", { enumerable: true, get: function () { return maintenance_parsing_1.parse_parts_reminders; } });
Object.defineProperty(exports, "parse_reset_parts_reminder", { enumerable: true, get: function () { return maintenance_parsing_1.parse_reset_parts_reminder; } });
Object.defineProperty(exports, "parse_service_contracts", { enumerable: true, get: function () { return maintenance_parsing_1.parse_service_contracts; } });
Object.defineProperty(exports, "parse_update_parts_reminder", { enumerable: true, get: function () { return maintenance_parsing_1.parse_update_parts_reminder; } });
Object.defineProperty(exports, "parse_update_past_service", { enumerable: true, get: function () { return maintenance_parsing_1.parse_update_past_service; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DataPrivacyMode", { enumerable: true, get: function () { return models_1.DataPrivacyMode; } });
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "RemoteServiceHistory", { enumerable: true, get: function () { return models_1.RemoteServiceHistory; } });
Object.defineProperty(exports, "VehiclePreferences", { enumerable: true, get: function () { return models_1.VehiclePreferences; } });
Object.defineProperty(exports, "VehicleSubscriptions", { enumerable: true, get: function () { return models_1.VehicleSubscriptions; } });
Object.defineProperty(exports, "VehicleWifiConsumption", { enumerable: true, get: function () { return models_1.VehicleWifiConsumption; } });
const parsing_1 = require("./parsing");
Object.defineProperty(exports, "parse_remote_service_history", { enumerable: true, get: function () { return parsing_1.parse_remote_service_history; } });
Object.defineProperty(exports, "parse_vehicle_data_privacy_mode", { enumerable: true, get: function () { return parsing_1.parse_vehicle_data_privacy_mode; } });
Object.defineProperty(exports, "parse_vehicle_preferences", { enumerable: true, get: function () { return parsing_1.parse_vehicle_preferences; } });
Object.defineProperty(exports, "parse_vehicle_subscriptions", { enumerable: true, get: function () { return parsing_1.parse_vehicle_subscriptions; } });
Object.defineProperty(exports, "parse_vehicle_wifi_consumption", { enumerable: true, get: function () { return parsing_1.parse_vehicle_wifi_consumption; } });
/** Translated upstream _VehicleDataClientMixin. */
class _VehicleDataClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _VehicleDataClientMixin, __args); }
    /** Return the vehicle's current data privacy mode. */
    async async_get_vehicle_data_privacy_mode(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the vehicle's current data privacy mode. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleDataPrivacyMode", _runtime_1.py.attr(operations, "VEHICLE_DATA_PRIVACY_MODE"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_data_privacy_mode, [data], null);
    }
    /** Return current in-vehicle Wi-Fi consumption when available. */
    async async_get_vehicle_wifi_consumption(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return current in-vehicle Wi-Fi consumption when available. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleWifiConsumption", _runtime_1.py.attr(operations, "VEHICLE_WIFI_CONSUMPTION"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_wifi_consumption, [data], null);
    }
    /** Return MIL/DTC maintenance-data sharing preferences when available. */
    async async_get_vehicle_preferences(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return MIL/DTC maintenance-data sharing preferences when available. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehiclePreferences", _runtime_1.py.attr(operations, "VEHICLE_PREFERENCES"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_preferences, [data], null);
    }
    /** Return the vehicle subscription capability without app-level filtering. */
    async async_get_vehicle_subscriptions(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the vehicle subscription capability without app-level filtering. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleSubscriptions", _runtime_1.py.attr(operations, "VEHICLE_SUBSCRIPTIONS"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_subscriptions, [data, vin], null);
    }
    /** Replace all MIL/DTC maintenance-data sharing preferences. */
    async async_update_vehicle_preferences(...__args) {
        let { "vin": vin, "preferences": preferences } = _runtime_1.py.bind(__args, ["vin", "preferences"], {}, [], null, null);
        /** Replace all MIL/DTC maintenance-data sharing preferences. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_success_operation"), ["UpdateVehiclePreferences", _runtime_1.py.attr(operations, "UPDATE_VEHICLE_PREFERENCES"), "updateVehiclePreferences", Object.assign({}, { ["vin"]: vin }, { ["communication"]: Object.assign({}, { ["milDataSharing"]: Object.assign({}, { ["enabled"]: _runtime_1.py.attr(preferences, "enabled") }, { ["text"]: _runtime_1.py.attr(preferences, "text") }, { ["phone"]: _runtime_1.py.attr(preferences, "phone") }, { ["email"]: _runtime_1.py.attr(preferences, "email") }) }) })], null));
    }
    /** Return one page of raw remote-service request history. */
    async async_get_remote_service_history(...__args) {
        let data;
        let { "vin": vin, "page_number": page_number, "items_per_page": items_per_page } = _runtime_1.py.bind(__args, ["vin"], {}, ["page_number", "items_per_page"], null, null);
        /** Return one page of raw remote-service request history. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["RemoteServiceHistory", _runtime_1.py.attr(operations, "REMOTE_SERVICE_HISTORY"), Object.assign({}, { ["vin"]: vin }, { ["pageNumber"]: page_number }, { ["itemsPerPage"]: items_per_page })], null));
        return _runtime_1.py.call(parsing_1.parse_remote_service_history, [data], null);
    }
    /** Return the vehicle's current and projected maintenance milestones. */
    async async_get_maintenance_timeline(...__args) {
        let data;
        let { "vin": vin, "mileage_unit": mileage_unit } = _runtime_1.py.bind(__args, ["vin", "mileage_unit"], { "mileage_unit": _runtime_1.py.attr(models_1.DistanceUnit, "MILE") }, [], null, null);
        /** Return the vehicle's current and projected maintenance milestones. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GetMaintenanceTimeline", _runtime_1.py.attr(operations, "GET_MAINTENANCE_TIMELINE"), _runtime_1.py.call(maintenance_inputs_1.get_maintenance_timeline_variables, [vin, mileage_unit], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_maintenance_timeline, [data], null);
    }
    /** Return warranty service contracts evaluated at the supplied mileage. */
    async async_get_service_contracts(...__args) {
        let data;
        let { "vin": vin, "mileage": mileage } = _runtime_1.py.bind(__args, ["vin", "mileage"], {}, [], null, null);
        /** Return warranty service contracts evaluated at the supplied mileage. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GetServiceContracts", _runtime_1.py.attr(operations, "GET_SERVICE_CONTRACTS"), _runtime_1.py.call(maintenance_inputs_1.get_service_contracts_variables, [vin, mileage], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_service_contracts, [data], null);
    }
    /** Add a completed maintenance record to the account. */
    async async_add_past_service(...__args) {
        let data;
        let { "service": service } = _runtime_1.py.bind(__args, ["service"], { "service": graphql_input_1.UNSET }, [], null, null);
        /** Add a completed maintenance record to the account. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["AddPastService", _runtime_1.py.attr(operations, "ADD_PAST_SERVICE"), _runtime_1.py.call(maintenance_inputs_1.add_past_service_variables, [service], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_add_past_service, [data], null);
    }
    /** Replace a completed maintenance record. */
    async async_update_past_service(...__args) {
        let data;
        let { "service": service } = _runtime_1.py.bind(__args, ["service"], {}, [], null, null);
        /** Replace a completed maintenance record. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdatePastService", _runtime_1.py.attr(operations, "UPDATE_PAST_SERVICE"), _runtime_1.py.call(maintenance_inputs_1.update_past_service_variables, [service], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_update_past_service, [data], null);
    }
    /** Return the vehicle's service-part catalog and configured reminders. */
    async async_get_parts_reminders(...__args) {
        let data;
        let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
        /** Return the vehicle's service-part catalog and configured reminders. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["PartsReminders", _runtime_1.py.attr(operations, "PARTS_REMINDERS"), _runtime_1.py.call(maintenance_inputs_1.parts_reminders_variables, [vin], Object.assign({}, { "unit": unit }))], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_parts_reminders, [data], null);
    }
    /** Create a service-parts reminder for a vehicle. */
    async async_create_parts_reminder(...__args) {
        let data;
        let { "vin": vin, "reminder": reminder } = _runtime_1.py.bind(__args, ["vin", "reminder"], {}, [], null, null);
        /** Create a service-parts reminder for a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreatePartsReminder", _runtime_1.py.attr(operations, "CREATE_PARTS_REMINDER"), _runtime_1.py.call(maintenance_inputs_1.create_parts_reminder_variables, [vin, reminder], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_create_parts_reminder, [data], null);
    }
    /** Replace a service-parts reminder for a vehicle. */
    async async_update_parts_reminder(...__args) {
        let data;
        let { "vin": vin, "reminder": reminder } = _runtime_1.py.bind(__args, ["vin", "reminder"], {}, [], null, null);
        /** Replace a service-parts reminder for a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdatePartsReminder", _runtime_1.py.attr(operations, "UPDATE_PARTS_REMINDER"), _runtime_1.py.call(maintenance_inputs_1.update_parts_reminder_variables, [vin, reminder], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_update_parts_reminder, [data], null);
    }
    /** Reset a service-parts reminder schedule. */
    async async_reset_parts_reminder(...__args) {
        let data;
        let { "vin": vin, "reminder": reminder } = _runtime_1.py.bind(__args, ["vin", "reminder"], {}, [], null, null);
        /** Reset a service-parts reminder schedule. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ResetPartsReminder", _runtime_1.py.attr(operations, "RESET_PARTS_REMINDER"), _runtime_1.py.call(maintenance_inputs_1.reset_parts_reminder_variables, [vin, reminder], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_reset_parts_reminder, [data], null);
    }
    /** Delete a service-parts reminder from a vehicle. */
    async async_delete_parts_reminder(...__args) {
        let data;
        let { "vin": vin, "reminder_id": reminder_id } = _runtime_1.py.bind(__args, ["vin", "reminder_id"], {}, [], null, null);
        /** Delete a service-parts reminder from a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DeletePartsReminder", _runtime_1.py.attr(operations, "DELETE_PARTS_REMINDER"), _runtime_1.py.call(maintenance_inputs_1.delete_parts_reminder_variables, [vin, reminder_id], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_delete_parts_reminder, [data], null);
    }
    /** Return collision reports attached to the vehicle account. */
    async async_get_collision_history(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return collision reports attached to the vehicle account. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CollisionHistory", _runtime_1.py.attr(operations, "COLLISION_HISTORY"), _runtime_1.py.call(maintenance_inputs_1.collision_history_variables, [vin], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_collision_history, [data], null);
    }
    /** Return vehicle telemetry captured for a collision report. */
    async async_get_collision_probe_data(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return vehicle telemetry captured for a collision report. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CollisionProbeData", _runtime_1.py.attr(operations, "COLLISION_PROBE_DATA"), _runtime_1.py.call(maintenance_inputs_1.collision_probe_data_variables, [vin], null)], null));
        return _runtime_1.py.call(maintenance_parsing_1.parse_collision_probe_data, [data], null);
    }
}
exports._VehicleDataClientMixin = _VehicleDataClientMixin;
_runtime_1.py.classType(_VehicleDataClientMixin);
//# sourceMappingURL=_vehicle_data_client.js.map