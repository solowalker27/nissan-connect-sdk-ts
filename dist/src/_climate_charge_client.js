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
exports._ClimateChargeClientMixin = exports.parse_v1g_update_notification_preferences = exports.parse_v1g_enroll_monitored_charging_plan = exports.parse_v1g_cancel_monitored_charging_plan = exports.V1GNotificationPreferencesUpdateResult = exports.V1GMonitoredChargingPlanEnrollmentResult = exports.V1GMonitoredChargingPlanCancellationResult = exports.v1g_update_notification_preferences_variables = exports.v1g_enroll_monitored_charging_plan_variables = exports.v1g_cancel_monitored_charging_plan_variables = exports.V1GNotificationPreferenceInput = exports.parse_update_pnc_service_status = exports.parse_stop_charge_session = exports.parse_start_charge_session = exports.parse_retry_certificate_install = exports.PublicChargeSessionStopResult = exports.PublicChargeSessionStartResult = exports.PlugAndChargeStatusInput = exports.PlugAndChargeServiceStatus = exports.PlugAndChargeCertificateRetryResult = exports.update_pnc_service_status_variables = exports.stop_charge_session_variables = exports.start_charge_session_variables = exports.retry_certificate_install_variables = exports.parse_climate_schedules = exports.parse_climate_defaults = exports.VehicleClimateSchedules = exports.TemperatureUnit = exports.ServiceRequestKind = exports.ServiceRequest = exports.ClimateSettings = exports.ClimateDefaults = exports.serialize_enum = exports.UnsetType = exports.UNSET = exports.parse_enroll_charge_plan = exports.parse_cancel_charge_plan = exports.ChargePlanEnrollmentResult = exports.ChargePlanCancellationResult = exports.enroll_charge_plan_variables = exports.cancel_charge_plan_variables = exports._success = exports._start_climate_input = exports._optional_variables = exports._date_time_input = exports._climate_parameters_input = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const datetime = _runtime_1.py.datetime;
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const _client_helpers_1 = require("./_client_helpers");
Object.defineProperty(exports, "_climate_parameters_input", { enumerable: true, get: function () { return _client_helpers_1._climate_parameters_input; } });
Object.defineProperty(exports, "_date_time_input", { enumerable: true, get: function () { return _client_helpers_1._date_time_input; } });
Object.defineProperty(exports, "_optional_variables", { enumerable: true, get: function () { return _client_helpers_1._optional_variables; } });
Object.defineProperty(exports, "_start_climate_input", { enumerable: true, get: function () { return _client_helpers_1._start_climate_input; } });
Object.defineProperty(exports, "_success", { enumerable: true, get: function () { return _client_helpers_1._success; } });
const charge_plan_inputs_1 = require("./charge_plan_inputs");
Object.defineProperty(exports, "cancel_charge_plan_variables", { enumerable: true, get: function () { return charge_plan_inputs_1.cancel_charge_plan_variables; } });
Object.defineProperty(exports, "enroll_charge_plan_variables", { enumerable: true, get: function () { return charge_plan_inputs_1.enroll_charge_plan_variables; } });
const charge_plan_models_1 = require("./charge_plan_models");
Object.defineProperty(exports, "ChargePlanCancellationResult", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanCancellationResult; } });
Object.defineProperty(exports, "ChargePlanEnrollmentResult", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanEnrollmentResult; } });
const charge_plan_parsing_1 = require("./charge_plan_parsing");
Object.defineProperty(exports, "parse_cancel_charge_plan", { enumerable: true, get: function () { return charge_plan_parsing_1.parse_cancel_charge_plan; } });
Object.defineProperty(exports, "parse_enroll_charge_plan", { enumerable: true, get: function () { return charge_plan_parsing_1.parse_enroll_charge_plan; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "ClimateDefaults", { enumerable: true, get: function () { return models_1.ClimateDefaults; } });
Object.defineProperty(exports, "ClimateSettings", { enumerable: true, get: function () { return models_1.ClimateSettings; } });
Object.defineProperty(exports, "ServiceRequest", { enumerable: true, get: function () { return models_1.ServiceRequest; } });
Object.defineProperty(exports, "ServiceRequestKind", { enumerable: true, get: function () { return models_1.ServiceRequestKind; } });
Object.defineProperty(exports, "TemperatureUnit", { enumerable: true, get: function () { return models_1.TemperatureUnit; } });
Object.defineProperty(exports, "VehicleClimateSchedules", { enumerable: true, get: function () { return models_1.VehicleClimateSchedules; } });
const parsing_1 = require("./parsing");
Object.defineProperty(exports, "parse_climate_defaults", { enumerable: true, get: function () { return parsing_1.parse_climate_defaults; } });
Object.defineProperty(exports, "parse_climate_schedules", { enumerable: true, get: function () { return parsing_1.parse_climate_schedules; } });
const pnc_inputs_1 = require("./pnc_inputs");
Object.defineProperty(exports, "retry_certificate_install_variables", { enumerable: true, get: function () { return pnc_inputs_1.retry_certificate_install_variables; } });
Object.defineProperty(exports, "start_charge_session_variables", { enumerable: true, get: function () { return pnc_inputs_1.start_charge_session_variables; } });
Object.defineProperty(exports, "stop_charge_session_variables", { enumerable: true, get: function () { return pnc_inputs_1.stop_charge_session_variables; } });
Object.defineProperty(exports, "update_pnc_service_status_variables", { enumerable: true, get: function () { return pnc_inputs_1.update_pnc_service_status_variables; } });
const pnc_models_1 = require("./pnc_models");
Object.defineProperty(exports, "PlugAndChargeCertificateRetryResult", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeCertificateRetryResult; } });
Object.defineProperty(exports, "PlugAndChargeServiceStatus", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeServiceStatus; } });
Object.defineProperty(exports, "PlugAndChargeStatusInput", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeStatusInput; } });
Object.defineProperty(exports, "PublicChargeSessionStartResult", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionStartResult; } });
Object.defineProperty(exports, "PublicChargeSessionStopResult", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionStopResult; } });
const pnc_parsing_1 = require("./pnc_parsing");
Object.defineProperty(exports, "parse_retry_certificate_install", { enumerable: true, get: function () { return pnc_parsing_1.parse_retry_certificate_install; } });
Object.defineProperty(exports, "parse_start_charge_session", { enumerable: true, get: function () { return pnc_parsing_1.parse_start_charge_session; } });
Object.defineProperty(exports, "parse_stop_charge_session", { enumerable: true, get: function () { return pnc_parsing_1.parse_stop_charge_session; } });
Object.defineProperty(exports, "parse_update_pnc_service_status", { enumerable: true, get: function () { return pnc_parsing_1.parse_update_pnc_service_status; } });
const v1g_inputs_1 = require("./v1g_inputs");
Object.defineProperty(exports, "V1GNotificationPreferenceInput", { enumerable: true, get: function () { return v1g_inputs_1.V1GNotificationPreferenceInput; } });
Object.defineProperty(exports, "v1g_cancel_monitored_charging_plan_variables", { enumerable: true, get: function () { return v1g_inputs_1.v1g_cancel_monitored_charging_plan_variables; } });
Object.defineProperty(exports, "v1g_enroll_monitored_charging_plan_variables", { enumerable: true, get: function () { return v1g_inputs_1.v1g_enroll_monitored_charging_plan_variables; } });
Object.defineProperty(exports, "v1g_update_notification_preferences_variables", { enumerable: true, get: function () { return v1g_inputs_1.v1g_update_notification_preferences_variables; } });
const v1g_models_1 = require("./v1g_models");
Object.defineProperty(exports, "V1GMonitoredChargingPlanCancellationResult", { enumerable: true, get: function () { return v1g_models_1.V1GMonitoredChargingPlanCancellationResult; } });
Object.defineProperty(exports, "V1GMonitoredChargingPlanEnrollmentResult", { enumerable: true, get: function () { return v1g_models_1.V1GMonitoredChargingPlanEnrollmentResult; } });
Object.defineProperty(exports, "V1GNotificationPreferencesUpdateResult", { enumerable: true, get: function () { return v1g_models_1.V1GNotificationPreferencesUpdateResult; } });
const v1g_parsing_1 = require("./v1g_parsing");
Object.defineProperty(exports, "parse_v1g_cancel_monitored_charging_plan", { enumerable: true, get: function () { return v1g_parsing_1.parse_v1g_cancel_monitored_charging_plan; } });
Object.defineProperty(exports, "parse_v1g_enroll_monitored_charging_plan", { enumerable: true, get: function () { return v1g_parsing_1.parse_v1g_enroll_monitored_charging_plan; } });
Object.defineProperty(exports, "parse_v1g_update_notification_preferences", { enumerable: true, get: function () { return v1g_parsing_1.parse_v1g_update_notification_preferences; } });
/** Translated upstream _ClimateChargeClientMixin. */
class _ClimateChargeClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _ClimateChargeClientMixin, __args); }
    /** Return recurring and one-time climate schedules and their accessories. */
    async async_get_climate_schedules(...__args) {
        let data;
        let { "vin": vin, "temperature_unit": temperature_unit } = _runtime_1.py.bind(__args, ["vin"], { "temperature_unit": _runtime_1.py.attr(models_1.TemperatureUnit, "FAHRENHEIT") }, ["temperature_unit"], null, null);
        /** Return recurring and one-time climate schedules and their accessories. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleClimateSchedules", _runtime_1.py.attr(operations, "VEHICLE_CLIMATE_SCHEDULES"), Object.assign({}, { ["vin"]: vin }, { ["temperatureUnit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [temperature_unit], null) })], null));
        return _runtime_1.py.call(parsing_1.parse_climate_schedules, [data], null);
    }
    /** Return saved climate defaults when supported by the vehicle. */
    async async_get_climate_defaults(...__args) {
        let data;
        let { "vin": vin, "temperature_unit": temperature_unit } = _runtime_1.py.bind(__args, ["vin"], { "temperature_unit": _runtime_1.py.attr(models_1.TemperatureUnit, "FAHRENHEIT") }, ["temperature_unit"], null, null);
        /** Return saved climate defaults when supported by the vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleClimateDefaults", _runtime_1.py.attr(operations, "VEHICLE_CLIMATE_DEFAULTS"), Object.assign({}, { ["vin"]: vin }, { ["temperatureUnit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [temperature_unit], null) })], null));
        return _runtime_1.py.call(parsing_1.parse_climate_defaults, [data], null);
    }
    /** Start cabin climate control. */
    async async_start_climate(...__args) {
        let variables;
        let { "vin": vin, "climate": climate, "set_as_default": set_as_default } = _runtime_1.py.bind(__args, ["vin", "climate"], { "set_as_default": null }, ["set_as_default"], null, null);
        /** Start cabin climate control. */
        variables = _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "vin": vin }, { "climate": _runtime_1.py.call(_client_helpers_1._start_climate_input, [climate], null) }, { "parameters": _runtime_1.py.call(_client_helpers_1._climate_parameters_input, [_runtime_1.py.attr(climate, "parameters")], null) }, { "setAsDefault": set_as_default }));
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["StartClimate", _runtime_1.py.attr(operations, "START_CLIMATE"), "startClimate", variables, _runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")], null));
    }
    /** Adjust climate settings while remote climate is active. */
    async async_adjust_climate(...__args) {
        let variables;
        let { "vin": vin, "climate": climate, "set_as_default": set_as_default } = _runtime_1.py.bind(__args, ["vin", "climate"], { "set_as_default": null }, ["set_as_default"], null, null);
        /** Adjust climate settings while remote climate is active. */
        variables = _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "vin": vin }, { "climate": _runtime_1.py.call(_client_helpers_1._start_climate_input, [climate], null) }, { "parameters": _runtime_1.py.call(_client_helpers_1._climate_parameters_input, [_runtime_1.py.attr(climate, "parameters")], null) }, { "setAsDefault": set_as_default }));
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["AdjustClimate", _runtime_1.py.attr(operations, "ADJUST_CLIMATE"), "adjustClimate", variables, _runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")], null));
    }
    /** Stop remote cabin climate control. */
    async async_stop_climate(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Stop remote cabin climate control. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["StopClimate", _runtime_1.py.attr(operations, "STOP_CLIMATE"), "stopClimate", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")], null));
    }
    /** Save the vehicle's default climate temperature and accessories. */
    async async_set_climate_defaults(...__args) {
        let data;
        let { "vin": vin, "climate": climate } = _runtime_1.py.bind(__args, ["vin", "climate"], {}, [], null, null);
        /** Save the vehicle's default climate temperature and accessories. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SetClimateDefaults", _runtime_1.py.attr(operations, "SET_CLIMATE_DEFAULTS"), _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "vin": vin }, { "climate": _runtime_1.py.call(_client_helpers_1._start_climate_input, [climate], null) }, { "parameters": _runtime_1.py.call(_client_helpers_1._climate_parameters_input, [_runtime_1.py.attr(climate, "parameters")], null) }))], null));
        return _runtime_1.py.call(_client_helpers_1._success, [data, "setClimateDefaults"], null);
    }
    /** Schedule a one-time delayed climate start. */
    async async_set_delayed_climate(...__args) {
        let { "vin": vin, "start_date_time": start_date_time, "climate": climate } = _runtime_1.py.bind(__args, ["vin", "start_date_time", "climate"], {}, [], null, null);
        /** Schedule a one-time delayed climate start. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["SetDelayedClimate", _runtime_1.py.attr(operations, "SET_DELAYED_CLIMATE"), "setDelayedClimate", _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "vin": vin }, { "startDateTime": _runtime_1.py.call(_client_helpers_1._date_time_input, [start_date_time], null) }, { "climate": _runtime_1.py.call(_client_helpers_1._start_climate_input, [climate], null) }, { "climateAccessories": _runtime_1.py.call(_client_helpers_1._climate_parameters_input, [_runtime_1.py.attr(climate, "parameters")], null) })), _runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")], null));
    }
    /** Cancel the one-time delayed climate request. */
    async async_cancel_delayed_climate(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Cancel the one-time delayed climate request. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["CancelDelayedClimate", _runtime_1.py.attr(operations, "CANCEL_DELAYED_CLIMATE"), "cancelDelayedClimate", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")], null));
    }
    /** Start charging an attached electric vehicle. */
    async async_start_charge(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Start charging an attached electric vehicle. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["StartCharge", _runtime_1.py.attr(operations, "START_CHARGE"), "startCharge", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE")], null));
    }
    /** Stop charging an attached electric vehicle. */
    async async_stop_charge(...__args) {
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Stop charging an attached electric vehicle. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_simple_service_request"), ["StopCharge", _runtime_1.py.attr(operations, "STOP_CHARGE"), "stopCharge", vin, _runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE")], null));
    }
    /** Start a Nissan Energy public charging session at one EVSE. */
    async async_start_public_charge_session(...__args) {
        let data;
        let { "vin": vin, "evse_id": evse_id, "location_id": location_id } = _runtime_1.py.bind(__args, ["vin", "evse_id"], { "location_id": graphql_input_1.UNSET }, ["location_id"], null, null);
        /** Start a Nissan Energy public charging session at one EVSE. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["StartChargeSession", _runtime_1.py.attr(operations, "START_CHARGE_SESSION"), _runtime_1.py.call(pnc_inputs_1.start_charge_session_variables, [vin, evse_id], Object.assign({}, { "location_id": location_id }))], null));
        return _runtime_1.py.call(pnc_parsing_1.parse_start_charge_session, [data], null);
    }
    /** Enroll the vehicle in an EMP charging product. */
    async async_enroll_charge_plan(...__args) {
        let data;
        let { "vin": vin, "product_sku": product_sku, "model": model, "year": year } = _runtime_1.py.bind(__args, ["vin", "product_sku", "model", "year"], {}, [], null, null);
        /** Enroll the vehicle in an EMP charging product. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["EnrollChargePlan", _runtime_1.py.attr(operations, "ENROLL_CHARGE_PLAN"), _runtime_1.py.call(charge_plan_inputs_1.enroll_charge_plan_variables, [vin, product_sku, model, year], null)], null));
        return _runtime_1.py.call(charge_plan_parsing_1.parse_enroll_charge_plan, [data], null);
    }
    /** Cancel the vehicle's EMP charging-product enrollment. */
    async async_cancel_charge_plan(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Cancel the vehicle's EMP charging-product enrollment. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CancelChargePlan", _runtime_1.py.attr(operations, "CANCEL_CHARGE_PLAN"), _runtime_1.py.call(charge_plan_inputs_1.cancel_charge_plan_variables, [vin], null)], null));
        return _runtime_1.py.call(charge_plan_parsing_1.parse_cancel_charge_plan, [data], null);
    }
    /** Stop the active Nissan Energy public charging session. */
    async async_stop_public_charge_session(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Stop the active Nissan Energy public charging session. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["StopChargeSession", _runtime_1.py.attr(operations, "STOP_CHARGE_SESSION"), _runtime_1.py.call(pnc_inputs_1.stop_charge_session_variables, [vin], null)], null));
        return _runtime_1.py.call(pnc_parsing_1.parse_stop_charge_session, [data], null);
    }
    /** Enable or disable Nissan Energy Plug & Charge enrollment. */
    async async_update_pnc_service_status(...__args) {
        let data;
        let { "vin": vin, "status": status } = _runtime_1.py.bind(__args, ["vin", "status"], {}, [], null, null);
        /** Enable or disable Nissan Energy Plug & Charge enrollment. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdatePnCServiceStatus", _runtime_1.py.attr(operations, "UPDATE_PNC_SERVICE_STATUS"), _runtime_1.py.call(pnc_inputs_1.update_pnc_service_status_variables, [vin, status], null)], null));
        return _runtime_1.py.call(pnc_parsing_1.parse_update_pnc_service_status, [data], null);
    }
    /** Retry installation of the vehicle's Plug & Charge certificate. */
    async async_retry_pnc_certificate_install(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Retry installation of the vehicle's Plug & Charge certificate. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["RetryCertInstall", _runtime_1.py.attr(operations, "RETRY_CERT_INSTALL"), _runtime_1.py.call(pnc_inputs_1.retry_certificate_install_variables, [vin], null)], null));
        return _runtime_1.py.call(pnc_parsing_1.parse_retry_certificate_install, [data], null);
    }
    /** Enroll in V1G Charging Insights with an explicit caller-selected plan. */
    async async_enroll_v1g_monitored_charging_plan(...__args) {
        let data;
        let { "vin": vin, "model": model, "year": year, "plan": plan } = _runtime_1.py.bind(__args, ["vin", "model", "year"], { "plan": graphql_input_1.UNSET }, ["plan"], null, null);
        /** Enroll in V1G Charging Insights with an explicit caller-selected plan. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["V1GEnrollMonitoredChargingPlan", _runtime_1.py.attr(operations, "V1G_ENROLL_MONITORED_CHARGING_PLAN"), _runtime_1.py.call(v1g_inputs_1.v1g_enroll_monitored_charging_plan_variables, [vin, model, year], Object.assign({}, { "plan": plan }))], null));
        return _runtime_1.py.call(v1g_parsing_1.parse_v1g_enroll_monitored_charging_plan, [data], null);
    }
    /** Permanently cancel V1G Charging Insights enrollment for a vehicle. */
    async async_cancel_v1g_monitored_charging_plan(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Permanently cancel V1G Charging Insights enrollment for a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["V1GCancelMonitoredChargingPlan", _runtime_1.py.attr(operations, "V1G_CANCEL_MONITORED_CHARGING_PLAN"), _runtime_1.py.call(v1g_inputs_1.v1g_cancel_monitored_charging_plan_variables, [vin], null)], null));
        return _runtime_1.py.call(v1g_parsing_1.parse_v1g_cancel_monitored_charging_plan, [data], null);
    }
    /** Patch V1G Charging Insights notification channels. */
    async async_update_v1g_notification_preferences(...__args) {
        let data;
        let { "vin": vin, "preferences": preferences } = _runtime_1.py.bind(__args, ["vin"], { "preferences": graphql_input_1.UNSET }, ["preferences"], null, null);
        /** Patch V1G Charging Insights notification channels. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["V1GUpdateNotificationPreferences", _runtime_1.py.attr(operations, "V1G_UPDATE_NOTIFICATION_PREFERENCES"), _runtime_1.py.call(v1g_inputs_1.v1g_update_notification_preferences_variables, [vin], Object.assign({}, { "preferences": preferences }))], null));
        return _runtime_1.py.call(v1g_parsing_1.parse_v1g_update_notification_preferences, [data], null);
    }
    /** Set the electric vehicle charging limit. */
    async async_set_charge_limit(...__args) {
        let { "vin": vin, "percent": percent } = _runtime_1.py.bind(__args, ["vin", "percent"], {}, [], null, null);
        /** Set the electric vehicle charging limit. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["SetChargeLimit", _runtime_1.py.attr(operations, "SET_CHARGE_LIMIT"), "setChargeLimit", Object.assign({}, { ["vin"]: vin }, { ["percent"]: percent }), _runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
    }
    /** Set the battery percentage that triggers a charge notification. */
    async async_set_charge_notification_threshold(...__args) {
        let { "vin": vin, "percent": percent } = _runtime_1.py.bind(__args, ["vin", "percent"], {}, [], null, null);
        /** Set the battery percentage that triggers a charge notification. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["SetNotificationLimit", _runtime_1.py.attr(operations, "SET_NOTIFICATION_LIMIT"), "setChargeNotificationThreshold", Object.assign({}, { ["vin"]: vin }, { ["percent"]: percent }), _runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
    }
    /** Set the minimum battery percentage reserved while using V2L. */
    async async_set_v2l_minimum_battery_charge_level(...__args) {
        let { "vin": vin, "percent": percent } = _runtime_1.py.bind(__args, ["vin", "percent"], {}, [], null, null);
        /** Set the minimum battery percentage reserved while using V2L. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), ["SetV2L", _runtime_1.py.attr(operations, "SET_V2L"), "setV2L", Object.assign({}, { ["vin"]: vin }, { ["input"]: Object.assign({}, { ["minimumBatteryChargeLevel"]: percent }) }), _runtime_1.py.attr(models_1.ServiceRequestKind, "V2L")], null));
    }
}
exports._ClimateChargeClientMixin = _ClimateChargeClientMixin;
_runtime_1.py.classType(_ClimateChargeClientMixin);
//# sourceMappingURL=_climate_charge_client.js.map