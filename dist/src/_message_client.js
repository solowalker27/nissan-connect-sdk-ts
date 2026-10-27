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
exports._MessageClientMixin = exports.parse_ota_update_progress = exports.parse_ota_update = exports.OtaUpdateProgress = exports.OtaUpdate = exports.parse_notification_preferences = exports.parse_nissan_energy_notification_preferences = exports.NotificationPreference = exports.NissanEnergyNotificationPreferences = exports.UnsetType = exports.parse_in_vehicle_messages = exports.parse_in_vehicle_message = exports.InVehicleMessageSummary = exports.InVehicleMessage = exports.in_vehicle_messages_variables = exports.in_vehicle_message_variables = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const device_notification_inputs_1 = require("./device_notification_inputs");
Object.defineProperty(exports, "in_vehicle_message_variables", { enumerable: true, get: function () { return device_notification_inputs_1.in_vehicle_message_variables; } });
Object.defineProperty(exports, "in_vehicle_messages_variables", { enumerable: true, get: function () { return device_notification_inputs_1.in_vehicle_messages_variables; } });
const device_notification_models_1 = require("./device_notification_models");
Object.defineProperty(exports, "InVehicleMessage", { enumerable: true, get: function () { return device_notification_models_1.InVehicleMessage; } });
Object.defineProperty(exports, "InVehicleMessageSummary", { enumerable: true, get: function () { return device_notification_models_1.InVehicleMessageSummary; } });
const device_notification_parsing_1 = require("./device_notification_parsing");
Object.defineProperty(exports, "parse_in_vehicle_message", { enumerable: true, get: function () { return device_notification_parsing_1.parse_in_vehicle_message; } });
Object.defineProperty(exports, "parse_in_vehicle_messages", { enumerable: true, get: function () { return device_notification_parsing_1.parse_in_vehicle_messages; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
const notification_models_1 = require("./notification_models");
Object.defineProperty(exports, "NissanEnergyNotificationPreferences", { enumerable: true, get: function () { return notification_models_1.NissanEnergyNotificationPreferences; } });
Object.defineProperty(exports, "NotificationPreference", { enumerable: true, get: function () { return notification_models_1.NotificationPreference; } });
const notification_parsing_1 = require("./notification_parsing");
Object.defineProperty(exports, "parse_nissan_energy_notification_preferences", { enumerable: true, get: function () { return notification_parsing_1.parse_nissan_energy_notification_preferences; } });
Object.defineProperty(exports, "parse_notification_preferences", { enumerable: true, get: function () { return notification_parsing_1.parse_notification_preferences; } });
const ota_models_1 = require("./ota_models");
Object.defineProperty(exports, "OtaUpdate", { enumerable: true, get: function () { return ota_models_1.OtaUpdate; } });
Object.defineProperty(exports, "OtaUpdateProgress", { enumerable: true, get: function () { return ota_models_1.OtaUpdateProgress; } });
const ota_parsing_1 = require("./ota_parsing");
Object.defineProperty(exports, "parse_ota_update", { enumerable: true, get: function () { return ota_parsing_1.parse_ota_update; } });
Object.defineProperty(exports, "parse_ota_update_progress", { enumerable: true, get: function () { return ota_parsing_1.parse_ota_update_progress; } });
/** Translated upstream _MessageClientMixin. */
class _MessageClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _MessageClientMixin, __args); }
    /** Return the OTA campaign currently offered to a compatible vehicle. */
    async async_get_ota_update(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the OTA campaign currently offered to a compatible vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["OtaUpdate", _runtime_1.py.attr(operations, "OTA_UPDATE"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(ota_parsing_1.parse_ota_update, [data], null);
    }
    /** Return download or activation progress for one OTA campaign. */
    async async_get_ota_update_progress(...__args) {
        let data;
        let { "vin": vin, "campaign_operation_id": campaign_operation_id } = _runtime_1.py.bind(__args, ["vin", "campaign_operation_id"], {}, [], null, null);
        /** Return download or activation progress for one OTA campaign. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["OtaUpdateProgress", _runtime_1.py.attr(operations, "OTA_UPDATE_PROGRESS"), Object.assign({}, { ["campaignOperationId"]: campaign_operation_id }, { ["vin"]: vin })], null));
        return _runtime_1.py.call(ota_parsing_1.parse_ota_update_progress, [data], null);
    }
    /** Return vehicle notification opt-ins grouped by category. */
    async async_get_notification_preferences(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return vehicle notification opt-ins grouped by category. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NotificationPreferences", _runtime_1.py.attr(operations, "NOTIFICATION_PREFERENCES"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(notification_parsing_1.parse_notification_preferences, [data], null);
    }
    /** Return Nissan Energy Charge Network delivery preferences. */
    async async_get_nissan_energy_notification_preferences(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return Nissan Energy Charge Network delivery preferences. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NissanEnergyNotificationPreferences", _runtime_1.py.attr(operations, "NISSAN_ENERGY_NOTIFICATION_PREFERENCES"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(notification_parsing_1.parse_nissan_energy_notification_preferences, [data], null);
    }
    /** Return the vehicle's nullable in-vehicle message summaries. */
    async async_get_in_vehicle_messages(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the vehicle's nullable in-vehicle message summaries. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["InVehicleMessages", _runtime_1.py.attr(operations, "IN_VEHICLE_MESSAGES"), _runtime_1.py.call(device_notification_inputs_1.in_vehicle_messages_variables, [vin], null)], null));
        return _runtime_1.py.call(device_notification_parsing_1.parse_in_vehicle_messages, [data], null);
    }
    /** Fetch one message, allowing Nissan to record the detail as viewed. */
    async async_get_in_vehicle_message(...__args) {
        let data;
        let { "vin": vin, "campaign_id": campaign_id, "push": push } = _runtime_1.py.bind(__args, ["vin", "campaign_id"], { "push": false }, ["push"], null, null);
        /** Fetch one message, allowing Nissan to record the detail as viewed. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["InVehicleMessage", _runtime_1.py.attr(operations, "IN_VEHICLE_MESSAGE"), _runtime_1.py.call(device_notification_inputs_1.in_vehicle_message_variables, [vin, campaign_id], Object.assign({}, { "push": push }))], null));
        return _runtime_1.py.call(device_notification_parsing_1.parse_in_vehicle_message, [data], null);
    }
}
exports._MessageClientMixin = _MessageClientMixin;
_runtime_1.py.classType(_MessageClientMixin);
//# sourceMappingURL=_message_client.js.map