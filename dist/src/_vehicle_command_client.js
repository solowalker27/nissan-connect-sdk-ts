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
exports._VehicleCommandClientMixin = exports.ServiceRequestKind = exports.ServiceRequest = exports.ClimateSettings = exports.ClimateScheduleInput = exports.ChargeScheduleInput = exports._temperature_input = exports._optional_variables = exports._climate_schedule_input = exports._climate_parameters_input = exports._charge_schedule_input = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const _client_helpers_1 = require("./_client_helpers");
Object.defineProperty(exports, "_charge_schedule_input", { enumerable: true, get: function () { return _client_helpers_1._charge_schedule_input; } });
Object.defineProperty(exports, "_climate_parameters_input", { enumerable: true, get: function () { return _client_helpers_1._climate_parameters_input; } });
Object.defineProperty(exports, "_climate_schedule_input", { enumerable: true, get: function () { return _client_helpers_1._climate_schedule_input; } });
Object.defineProperty(exports, "_optional_variables", { enumerable: true, get: function () { return _client_helpers_1._optional_variables; } });
Object.defineProperty(exports, "_temperature_input", { enumerable: true, get: function () { return _client_helpers_1._temperature_input; } });
const models_1 = require("./models");
Object.defineProperty(exports, "ChargeScheduleInput", { enumerable: true, get: function () { return models_1.ChargeScheduleInput; } });
Object.defineProperty(exports, "ClimateScheduleInput", { enumerable: true, get: function () { return models_1.ClimateScheduleInput; } });
Object.defineProperty(exports, "ClimateSettings", { enumerable: true, get: function () { return models_1.ClimateSettings; } });
Object.defineProperty(exports, "ServiceRequest", { enumerable: true, get: function () { return models_1.ServiceRequest; } });
Object.defineProperty(exports, "ServiceRequestKind", { enumerable: true, get: function () { return models_1.ServiceRequestKind; } });
/** Translated upstream _VehicleCommandClientMixin. */
class _VehicleCommandClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _VehicleCommandClientMixin, __args); }
    /** Lock the vehicle doors. */
    async async_lock_doors(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Lock the vehicle doors. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["DoorLock", _runtime_1.py.attr(operations, "DOOR_LOCK"), "doorLock", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "DOOR")], null));
    }
    /** Unlock the vehicle doors. */
    async async_unlock_doors(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Unlock the vehicle doors. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["DoorUnlock", _runtime_1.py.attr(operations, "DOOR_UNLOCK"), "doorUnlock", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "DOOR")], null));
    }
    /** Flash the vehicle lights. */
    async async_flash_lights(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Flash the vehicle lights. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["FlashLights", _runtime_1.py.attr(operations, "FLASH_LIGHTS"), "flashLights", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "HORN_LIGHT")], null));
    }
    /** Flash the lights and sound the horn. */
    async async_flash_lights_and_horn(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Flash the lights and sound the horn. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["FlashLightsHorn", _runtime_1.py.attr(operations, "FLASH_LIGHTS_HORN"), "flashLightsHorn", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "HORN_LIGHT")], null));
    }
    /** Request a fresh vehicle location. */
    async async_locate_vehicle(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Request a fresh vehicle location. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["LocateVehicle", _runtime_1.py.attr(operations, "LOCATE_VEHICLE"), "locateVehicle", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "LOCATION")], null));
    }
    /** Start the engine, optionally with a climate configuration. */
    async async_start_engine(...__args) {
        let engine_climate;
        let { "vin": vin, "climate": climate, "set_as_default": set_as_default } = _runtime_1.py.bind(__args, ["vin"], { "climate": null, "set_as_default": null }, ["climate", "set_as_default"], null, null);
        /** Start the engine, optionally with a climate configuration. */
        engine_climate = null;
        if (_runtime_1.py.truth(((climate !== null)))) {
            engine_climate = _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "temperature": _runtime_1.py.call(_client_helpers_1._temperature_input, [climate], null) }, { "parameters": _runtime_1.py.call(_client_helpers_1._climate_parameters_input, [_runtime_1.py.attr(climate, "parameters")], null) }));
        }
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["EngineStart", _runtime_1.py.attr(operations, "ENGINE_START"), "engineStart", _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "vin": vin }, { "climate": engine_climate }, { "setAsDefault": set_as_default })), _runtime_1.py.attr(models_1.ServiceRequestKind, "ENGINE")], null));
    }
    /** Stop a remotely started engine. */
    async async_stop_engine(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Stop a remotely started engine. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["EngineStop", _runtime_1.py.attr(operations, "ENGINE_STOP"), "engineStop", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "ENGINE")], null));
    }
    /** Ask the vehicle to publish fresh dynamic status. */
    async async_refresh_vehicle_status(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Ask the vehicle to publish fresh dynamic status. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["RefreshVehicleStatus", _runtime_1.py.attr(operations, "REFRESH_VEHICLE_STATUS"), "refreshVehicleStatus", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "VEHICLE_STATUS")], null));
    }
    /** Ask the electric vehicle to refresh its battery status. */
    async async_refresh_battery_status(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Ask the electric vehicle to refresh its battery status. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_success_operation"), ["RefreshBatteryStatus", _runtime_1.py.attr(operations, "REFRESH_BATTERY_STATUS"), "refreshBatteryStatus", Object.assign({}, { ["vin"]: vin })], null));
    }
    /** Ask the vehicle to refresh its climate status. */
    async async_refresh_climate_status(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Ask the vehicle to refresh its climate status. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_success_operation"), ["RefreshClimateStatus", _runtime_1.py.attr(operations, "REFRESH_CLIMATE_STATUS"), "refreshClimateStatus", Object.assign({}, { ["vin"]: vin })], null));
    }
    /** Wake the vehicle telematics unit. */
    async async_wake_up_vehicle(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Wake the vehicle telematics unit. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_success_operation"), ["WakeUpVehicle", _runtime_1.py.attr(operations, "WAKE_UP_VEHICLE"), "wakeUp", Object.assign({}, { ["vin"]: vin })], null));
    }
    /** Request exterior camera photos on supported vehicles. */
    async async_take_photos_around_vehicle(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Request exterior camera photos on supported vehicles. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["TakePhotosAroundVehicle", _runtime_1.py.attr(operations, "TAKE_PHOTOS_AROUND_VEHICLE"), "takePhotosAroundVehicle", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "PHOTO")], null));
    }
    /** Create a recurring charge schedule. */
    async async_create_charge_schedule(...__args) {
        let { "vin": vin, "schedule": schedule } = _runtime_1.py.bind(__args, ["vin", "schedule"], {}, [], null, null);
        /** Create a recurring charge schedule. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["CreateChargeSchedule", _runtime_1.py.attr(operations, "CREATE_CHARGE_SCHEDULE"), "createChargeSchedule", Object.assign({}, { ["vin"]: vin }, { ["schedule"]: _runtime_1.py.call(_client_helpers_1._charge_schedule_input, [schedule], null) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
    }
    /** Replace a recurring charge schedule. */
    async async_update_charge_schedule(...__args) {
        let schedule_input;
        let { "vin": vin, "schedule_id": schedule_id, "schedule": schedule } = _runtime_1.py.bind(__args, ["vin", "schedule_id", "schedule"], {}, [], null, null);
        /** Replace a recurring charge schedule. */
        schedule_input = Object.assign({}, { ["id"]: schedule_id }, _runtime_1.py.call(_client_helpers_1._charge_schedule_input, [schedule], null));
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["UpdateChargeSchedule", _runtime_1.py.attr(operations, "UPDATE_CHARGE_SCHEDULE"), "updateChargeSchedule", Object.assign({}, { ["vin"]: vin }, { ["schedule"]: schedule_input }), _runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
    }
    /** Delete a recurring charge schedule. */
    async async_delete_charge_schedule(...__args) {
        let { "vin": vin, "schedule_id": schedule_id } = _runtime_1.py.bind(__args, ["vin", "schedule_id"], {}, [], null, null);
        /** Delete a recurring charge schedule. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["DeleteChargeSchedule", _runtime_1.py.attr(operations, "DELETE_CHARGE_SCHEDULE"), "deleteChargeSchedule", Object.assign({}, { ["vin"]: vin }, { ["id"]: schedule_id }), _runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
    }
    /** Enable or disable a recurring charge schedule. */
    async async_toggle_charge_schedule(...__args) {
        let { "vin": vin, "schedule_id": schedule_id, "enabled": enabled } = _runtime_1.py.bind(__args, ["vin", "schedule_id"], {}, ["enabled"], null, null);
        /** Enable or disable a recurring charge schedule. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["ToggleChargeSchedule", _runtime_1.py.attr(operations, "TOGGLE_CHARGE_SCHEDULE"), "toggleChargeSchedule", Object.assign({}, { ["vin"]: vin }, { ["schedule"]: Object.assign({}, { ["id"]: schedule_id }, { ["enable"]: enabled }) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
    }
    /** Create a recurring climate schedule. */
    async async_create_climate_schedule(...__args) {
        let { "vin": vin, "schedule": schedule } = _runtime_1.py.bind(__args, ["vin", "schedule"], {}, [], null, null);
        /** Create a recurring climate schedule. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["CreateClimateSchedule", _runtime_1.py.attr(operations, "CREATE_CLIMATE_SCHEDULE"), "createClimateSchedule", _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "vin": vin }, { "schedule": _runtime_1.py.call(_client_helpers_1._climate_schedule_input, [schedule], null) }, { "climateAccessories": _runtime_1.py.call(_client_helpers_1._climate_parameters_input, [_runtime_1.py.attr(_runtime_1.py.attr(schedule, "climate"), "parameters")], null) })), _runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")], null));
    }
    /** Replace a recurring climate schedule. */
    async async_update_climate_schedule(...__args) {
        let schedule_input;
        let { "vin": vin, "schedule_id": schedule_id, "schedule": schedule } = _runtime_1.py.bind(__args, ["vin", "schedule_id", "schedule"], {}, [], null, null);
        /** Replace a recurring climate schedule. */
        schedule_input = Object.assign({}, { ["id"]: schedule_id }, _runtime_1.py.call(_client_helpers_1._climate_schedule_input, [schedule], null));
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["UpdateClimateSchedule", _runtime_1.py.attr(operations, "UPDATE_CLIMATE_SCHEDULE"), "updateClimateSchedule", _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "vin": vin }, { "schedule": schedule_input }, { "climateAccessories": _runtime_1.py.call(_client_helpers_1._climate_parameters_input, [_runtime_1.py.attr(_runtime_1.py.attr(schedule, "climate"), "parameters")], null) })), _runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")], null));
    }
    /** Delete a recurring climate schedule. */
    async async_delete_climate_schedule(...__args) {
        let { "vin": vin, "schedule_id": schedule_id } = _runtime_1.py.bind(__args, ["vin", "schedule_id"], {}, [], null, null);
        /** Delete a recurring climate schedule. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["DeleteClimateSchedule", _runtime_1.py.attr(operations, "DELETE_CLIMATE_SCHEDULE"), "deleteClimateSchedule", Object.assign({}, { ["vin"]: vin }, { ["id"]: schedule_id }), _runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")], null));
    }
    /** Enable or disable a recurring climate schedule. */
    async async_toggle_climate_schedule(...__args) {
        let { "vin": vin, "schedule_id": schedule_id, "enabled": enabled } = _runtime_1.py.bind(__args, ["vin", "schedule_id"], {}, ["enabled"], null, null);
        /** Enable or disable a recurring climate schedule. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["ToggleClimateSchedule", _runtime_1.py.attr(operations, "TOGGLE_CLIMATE_SCHEDULE"), "toggleClimateSchedule", Object.assign({}, { ["vin"]: vin }, { ["schedule"]: Object.assign({}, { ["id"]: schedule_id }, { ["enable"]: enabled }) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")], null));
    }
}
exports._VehicleCommandClientMixin = _VehicleCommandClientMixin;
_runtime_1.py.classType(_VehicleCommandClientMixin);
//# sourceMappingURL=_vehicle_command_client.js.map