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
exports._OtaNotificationClientMixin = exports.DataWipeType = exports.ota_activation_schedule_input = exports.download_ota_update_input = exports.data_wipe_type_input = exports.parse_update_nissan_energy_notification_preferences = exports.parse_notification_preferences = exports.NotificationPreference = exports.NissanEnergyNotificationPreferencesUpdate = exports.update_nissan_energy_notification_preferences_variables = exports.notification_preferences_input = exports.NotificationPreferenceInput = exports.ServiceRequestKind = exports.ServiceRequest = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.parse_unregister_push_notifications = exports.parse_unregister_device_for_push_notifications = exports.parse_register_push_notifications = exports.parse_register_device_for_push_notifications = exports.DeviceOS = exports.unregister_push_notifications_variables = exports.unregister_device_for_push_notifications_variables = exports.register_push_notifications_variables = exports.register_device_for_push_notifications_variables = exports.MobileInfoInput = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const datetime = _runtime_1.py.datetime;
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const device_notification_inputs_1 = require("./device_notification_inputs");
Object.defineProperty(exports, "MobileInfoInput", { enumerable: true, get: function () { return device_notification_inputs_1.MobileInfoInput; } });
Object.defineProperty(exports, "register_device_for_push_notifications_variables", { enumerable: true, get: function () { return device_notification_inputs_1.register_device_for_push_notifications_variables; } });
Object.defineProperty(exports, "register_push_notifications_variables", { enumerable: true, get: function () { return device_notification_inputs_1.register_push_notifications_variables; } });
Object.defineProperty(exports, "unregister_device_for_push_notifications_variables", { enumerable: true, get: function () { return device_notification_inputs_1.unregister_device_for_push_notifications_variables; } });
Object.defineProperty(exports, "unregister_push_notifications_variables", { enumerable: true, get: function () { return device_notification_inputs_1.unregister_push_notifications_variables; } });
const device_notification_models_1 = require("./device_notification_models");
Object.defineProperty(exports, "DeviceOS", { enumerable: true, get: function () { return device_notification_models_1.DeviceOS; } });
const device_notification_parsing_1 = require("./device_notification_parsing");
Object.defineProperty(exports, "parse_register_device_for_push_notifications", { enumerable: true, get: function () { return device_notification_parsing_1.parse_register_device_for_push_notifications; } });
Object.defineProperty(exports, "parse_register_push_notifications", { enumerable: true, get: function () { return device_notification_parsing_1.parse_register_push_notifications; } });
Object.defineProperty(exports, "parse_unregister_device_for_push_notifications", { enumerable: true, get: function () { return device_notification_parsing_1.parse_unregister_device_for_push_notifications; } });
Object.defineProperty(exports, "parse_unregister_push_notifications", { enumerable: true, get: function () { return device_notification_parsing_1.parse_unregister_push_notifications; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
const models_1 = require("./models");
Object.defineProperty(exports, "ServiceRequest", { enumerable: true, get: function () { return models_1.ServiceRequest; } });
Object.defineProperty(exports, "ServiceRequestKind", { enumerable: true, get: function () { return models_1.ServiceRequestKind; } });
const notification_inputs_1 = require("./notification_inputs");
Object.defineProperty(exports, "NotificationPreferenceInput", { enumerable: true, get: function () { return notification_inputs_1.NotificationPreferenceInput; } });
Object.defineProperty(exports, "notification_preferences_input", { enumerable: true, get: function () { return notification_inputs_1.notification_preferences_input; } });
Object.defineProperty(exports, "update_nissan_energy_notification_preferences_variables", { enumerable: true, get: function () { return notification_inputs_1.update_nissan_energy_notification_preferences_variables; } });
const notification_models_1 = require("./notification_models");
Object.defineProperty(exports, "NissanEnergyNotificationPreferencesUpdate", { enumerable: true, get: function () { return notification_models_1.NissanEnergyNotificationPreferencesUpdate; } });
Object.defineProperty(exports, "NotificationPreference", { enumerable: true, get: function () { return notification_models_1.NotificationPreference; } });
const notification_parsing_1 = require("./notification_parsing");
Object.defineProperty(exports, "parse_notification_preferences", { enumerable: true, get: function () { return notification_parsing_1.parse_notification_preferences; } });
Object.defineProperty(exports, "parse_update_nissan_energy_notification_preferences", { enumerable: true, get: function () { return notification_parsing_1.parse_update_nissan_energy_notification_preferences; } });
const ota_inputs_1 = require("./ota_inputs");
Object.defineProperty(exports, "data_wipe_type_input", { enumerable: true, get: function () { return ota_inputs_1.data_wipe_type_input; } });
Object.defineProperty(exports, "download_ota_update_input", { enumerable: true, get: function () { return ota_inputs_1.download_ota_update_input; } });
Object.defineProperty(exports, "ota_activation_schedule_input", { enumerable: true, get: function () { return ota_inputs_1.ota_activation_schedule_input; } });
const ota_models_1 = require("./ota_models");
Object.defineProperty(exports, "DataWipeType", { enumerable: true, get: function () { return ota_models_1.DataWipeType; } });
/** Translated upstream _OtaNotificationClientMixin. */
class _OtaNotificationClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _OtaNotificationClientMixin, __args); }
    /** Ask a compatible vehicle to download an offered OTA campaign. */
    async async_download_ota_update(...__args) {
        let { "vin": vin, "ota_update_id": ota_update_id } = _runtime_1.py.bind(__args, ["vin", "ota_update_id"], {}, [], null, null);
        /** Ask a compatible vehicle to download an offered OTA campaign. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["DownloadOTAUpdate", _runtime_1.py.attr(operations, "DOWNLOAD_OTA_UPDATE"), "downloadOTAUpdate", Object.assign({}, { ["vin"]: vin }, { ["input"]: _runtime_1.py.call(ota_inputs_1.download_ota_update_input, [ota_update_id], null) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "OTA")], null));
    }
    /** Ask a compatible vehicle to activate a downloaded OTA campaign. */
    async async_activate_ota_update(...__args) {
        let { "vin": vin, "ota_update_id": ota_update_id } = _runtime_1.py.bind(__args, ["vin", "ota_update_id"], {}, [], null, null);
        /** Ask a compatible vehicle to activate a downloaded OTA campaign. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["ActivateOTAUpdate", _runtime_1.py.attr(operations, "ACTIVATE_OTA_UPDATE"), "activateOTAUpdate", Object.assign({}, { ["vin"]: vin }, { ["otaUpdateId"]: ota_update_id }), _runtime_1.py.attr(models_1.ServiceRequestKind, "OTA")], null));
    }
    /** Cancel an OTA campaign activation in progress. */
    async async_cancel_ota_activation(...__args) {
        let { "vin": vin, "ota_update_id": ota_update_id } = _runtime_1.py.bind(__args, ["vin", "ota_update_id"], {}, [], null, null);
        /** Cancel an OTA campaign activation in progress. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["CancelActivationOTAUpdate", _runtime_1.py.attr(operations, "CANCEL_ACTIVATION_OTA_UPDATE"), "cancelActivationOTAUpdate", Object.assign({}, { ["vin"]: vin }, { ["otaUpdateId"]: ota_update_id }), _runtime_1.py.attr(models_1.ServiceRequestKind, "OTA")], null));
    }
    /** Schedule activation of a downloaded OTA campaign. */
    async async_schedule_ota_activation(...__args) {
        let { "vin": vin, "ota_update_id": ota_update_id, "scheduled_date": scheduled_date } = _runtime_1.py.bind(__args, ["vin", "ota_update_id", "scheduled_date"], {}, [], null, null);
        /** Schedule activation of a downloaded OTA campaign. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["ScheduleActivationOTAUpdate", _runtime_1.py.attr(operations, "SCHEDULE_ACTIVATION_OTA_UPDATE"), "scheduleActivationOTAUpdate", Object.assign({}, { ["vin"]: vin }, { ["input"]: _runtime_1.py.call(ota_inputs_1.ota_activation_schedule_input, [ota_update_id, scheduled_date], null) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "OTA")], null));
    }
    /** Move an already scheduled OTA campaign activation. */
    async async_update_scheduled_ota_activation(...__args) {
        let { "vin": vin, "ota_update_id": ota_update_id, "scheduled_date": scheduled_date } = _runtime_1.py.bind(__args, ["vin", "ota_update_id", "scheduled_date"], {}, [], null, null);
        /** Move an already scheduled OTA campaign activation. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["UpdateScheduledActivationOTAUpdate", _runtime_1.py.attr(operations, "UPDATE_SCHEDULED_ACTIVATION_OTA_UPDATE"), "updateScheduledActivationOTAUpdate", Object.assign({}, { ["vin"]: vin }, { ["input"]: _runtime_1.py.call(ota_inputs_1.ota_activation_schedule_input, [ota_update_id, scheduled_date], null) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "OTA")], null));
    }
    /** Cancel a scheduled OTA campaign activation. */
    async async_cancel_scheduled_ota_activation(...__args) {
        let { "vin": vin, "ota_update_id": ota_update_id } = _runtime_1.py.bind(__args, ["vin", "ota_update_id"], {}, [], null, null);
        /** Cancel a scheduled OTA campaign activation. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["CancelScheduledActivationOTAUpdate", _runtime_1.py.attr(operations, "CANCEL_SCHEDULED_ACTIVATION_OTA_UPDATE"), "cancelScheduledActivationOTAUpdate", Object.assign({}, { ["vin"]: vin }, { ["otaUpdateId"]: ota_update_id }), _runtime_1.py.attr(models_1.ServiceRequestKind, "OTA")], null));
    }
    /** Submit Nissan's remote vehicle data-wipe operation. */
    async async_wipe_vehicle_data(...__args) {
        let serialized_type;
        let { "vin": vin, "data_wipe_type": data_wipe_type } = _runtime_1.py.bind(__args, ["vin"], { "data_wipe_type": graphql_input_1.UNSET }, ["data_wipe_type"], null, null);
        /** Submit Nissan's remote vehicle data-wipe operation. */
        serialized_type = data_wipe_type;
        if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [data_wipe_type, ota_models_1.DataWipeType], null))) {
            serialized_type = _runtime_1.py.call(ota_inputs_1.data_wipe_type_input, [data_wipe_type], null);
        }
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["DataWipe", _runtime_1.py.attr(operations, "DATA_WIPE"), "dataWipe", _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "dataWipeType": serialized_type })), _runtime_1.py.attr(models_1.ServiceRequestKind, "DATA_WIPE")], null));
    }
    /** Replace vehicle notification opt-ins with the supplied preferences. */
    async async_set_notification_preferences(...__args) {
        let data;
        let { "vin": vin, "preferences": preferences } = _runtime_1.py.bind(__args, ["vin", "preferences"], {}, [], null, null);
        /** Replace vehicle notification opt-ins with the supplied preferences. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SetNotificationPreferences", _runtime_1.py.attr(operations, "SET_NOTIFICATION_PREFERENCES"), Object.assign({}, { ["vin"]: vin }, { ["preferences"]: _runtime_1.py.call(notification_inputs_1.notification_preferences_input, [preferences], null) })], null));
        return _runtime_1.py.call(notification_parsing_1.parse_notification_preferences, [data, "setNotificationPreferences"], null);
    }
    /** Patch Nissan Energy delivery flags, preserving omitted and null values. */
    async async_update_nissan_energy_notification_preferences(...__args) {
        let data;
        let { "vin": vin, "email_status": email_status, "push_status": push_status, "sms_status": sms_status } = _runtime_1.py.bind(__args, ["vin"], { "email_status": graphql_input_1.UNSET, "push_status": graphql_input_1.UNSET, "sms_status": graphql_input_1.UNSET }, ["email_status", "push_status", "sms_status"], null, null);
        /** Patch Nissan Energy delivery flags, preserving omitted and null values. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateNotificationPreferences", _runtime_1.py.attr(operations, "UPDATE_NISSAN_ENERGY_NOTIFICATION_PREFERENCES"), _runtime_1.py.call(notification_inputs_1.update_nissan_energy_notification_preferences_variables, [vin], Object.assign({}, { "email_status": email_status }, { "push_status": push_status }, { "sms_status": sms_status }))], null));
        return _runtime_1.py.call(notification_parsing_1.parse_update_nissan_energy_notification_preferences, [data], null);
    }
    /** Register a legacy push token for the authenticated account. */
    async async_register_push_notifications(...__args) {
        let data;
        let { "device_id": device_id, "token": token, "device_os": device_os } = _runtime_1.py.bind(__args, ["device_id", "token", "device_os"], {}, [], null, null);
        /** Register a legacy push token for the authenticated account. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["RegisterPushNotifications", _runtime_1.py.attr(operations, "REGISTER_PUSH_NOTIFICATIONS"), _runtime_1.py.call(device_notification_inputs_1.register_push_notifications_variables, [device_id, token, device_os], null)], null));
        return _runtime_1.py.call(device_notification_parsing_1.parse_register_push_notifications, [data], null);
    }
    /** Unregister a legacy push token for the authenticated account. */
    async async_unregister_push_notifications(...__args) {
        let data;
        let { "device_id": device_id, "device_os": device_os } = _runtime_1.py.bind(__args, ["device_id", "device_os"], {}, [], null, null);
        /** Unregister a legacy push token for the authenticated account. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UnregisterPushNotifications", _runtime_1.py.attr(operations, "UNREGISTER_PUSH_NOTIFICATIONS"), _runtime_1.py.call(device_notification_inputs_1.unregister_push_notifications_variables, [device_id, device_os], null)], null));
        return _runtime_1.py.call(device_notification_parsing_1.parse_unregister_push_notifications, [data], null);
    }
    /** Register a mobile installation through Nissan's current push API. */
    async async_register_device_for_push_notifications(...__args) {
        let data;
        let { "mobile_info": mobile_info } = _runtime_1.py.bind(__args, ["mobile_info"], {}, [], null, null);
        /** Register a mobile installation through Nissan's current push API. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["RegisterDeviceForPushNotifications", _runtime_1.py.attr(operations, "REGISTER_DEVICE_FOR_PUSH_NOTIFICATIONS"), _runtime_1.py.call(device_notification_inputs_1.register_device_for_push_notifications_variables, [mobile_info], null)], null));
        return _runtime_1.py.call(device_notification_parsing_1.parse_register_device_for_push_notifications, [data], null);
    }
    /** Unregister a mobile installation from Nissan's current push API. */
    async async_unregister_device_for_push_notifications(...__args) {
        let data;
        let { "app_name": app_name, "device_id": device_id, "device_os": device_os } = _runtime_1.py.bind(__args, ["app_name", "device_id", "device_os"], {}, [], null, null);
        /** Unregister a mobile installation from Nissan's current push API. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UnregisterDeviceForPushNotifications", _runtime_1.py.attr(operations, "UNREGISTER_DEVICE_FOR_PUSH_NOTIFICATIONS"), _runtime_1.py.call(device_notification_inputs_1.unregister_device_for_push_notifications_variables, [app_name, device_id, device_os], null)], null));
        return _runtime_1.py.call(device_notification_parsing_1.parse_unregister_device_for_push_notifications, [data], null);
    }
}
exports._OtaNotificationClientMixin = _OtaNotificationClientMixin;
_runtime_1.py.classType(_OtaNotificationClientMixin);
//# sourceMappingURL=_ota_notification_client.js.map