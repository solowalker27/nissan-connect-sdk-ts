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
exports._NissanClientBase = exports.RequestProof = exports.parse_vehicle_alert_request = exports.parse_service_request_result = exports.parse_service_request = exports.VehicleAlertRequest = exports.VehicleAlertKind = exports.Tokens = exports.ServiceRequestResult = exports.ServiceRequestKind = exports.ServiceRequest = exports.ResponseError = exports.ReadOnlyError = exports.Country = exports._NissanTransport = exports.profile_for = exports._success = exports._nullable_success = exports._is_terminal_service_request = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const asyncio = _runtime_1.py.asyncio;
const math = _runtime_1.py.math;
const Mapping = _runtime_1.py.Mapping;
const ClientSession = _runtime_1.py.ClientSession;
const operations = __importStar(require("./operations"));
const _client_helpers_1 = require("./_client_helpers");
Object.defineProperty(exports, "_is_terminal_service_request", { enumerable: true, get: function () { return _client_helpers_1._is_terminal_service_request; } });
Object.defineProperty(exports, "_nullable_success", { enumerable: true, get: function () { return _client_helpers_1._nullable_success; } });
Object.defineProperty(exports, "_success", { enumerable: true, get: function () { return _client_helpers_1._success; } });
const _profile_1 = require("./_profile");
Object.defineProperty(exports, "profile_for", { enumerable: true, get: function () { return _profile_1.profile_for; } });
const _transport_1 = require("./_transport");
Object.defineProperty(exports, "_NissanTransport", { enumerable: true, get: function () { return _transport_1._NissanTransport; } });
const countries_1 = require("./countries");
Object.defineProperty(exports, "Country", { enumerable: true, get: function () { return countries_1.Country; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ReadOnlyError", { enumerable: true, get: function () { return exceptions_1.ReadOnlyError; } });
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "ServiceRequest", { enumerable: true, get: function () { return models_1.ServiceRequest; } });
Object.defineProperty(exports, "ServiceRequestKind", { enumerable: true, get: function () { return models_1.ServiceRequestKind; } });
Object.defineProperty(exports, "ServiceRequestResult", { enumerable: true, get: function () { return models_1.ServiceRequestResult; } });
Object.defineProperty(exports, "Tokens", { enumerable: true, get: function () { return models_1.Tokens; } });
Object.defineProperty(exports, "VehicleAlertKind", { enumerable: true, get: function () { return models_1.VehicleAlertKind; } });
Object.defineProperty(exports, "VehicleAlertRequest", { enumerable: true, get: function () { return models_1.VehicleAlertRequest; } });
const parsing_1 = require("./parsing");
Object.defineProperty(exports, "parse_service_request", { enumerable: true, get: function () { return parsing_1.parse_service_request; } });
Object.defineProperty(exports, "parse_service_request_result", { enumerable: true, get: function () { return parsing_1.parse_service_request_result; } });
Object.defineProperty(exports, "parse_vehicle_alert_request", { enumerable: true, get: function () { return parsing_1.parse_vehicle_alert_request; } });
const request_proof_1 = require("./request_proof");
Object.defineProperty(exports, "RequestProof", { enumerable: true, get: function () { return request_proof_1.RequestProof; } });
/** Translated upstream _NissanClientBase. */
class _NissanClientBase {
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _NissanClientBase, __args); }
    /** Translated upstream __init__. */
    __init__(...__args) {
        let { "session": session, "country": country, "tokens": tokens, "token_listener": token_listener, "read_only": read_only, "oauth_device_id": oauth_device_id, "request_proof": request_proof, "request_proof_provider": request_proof_provider } = _runtime_1.py.bind(__args, ["session"], { "country": _runtime_1.py.attr(countries_1.Country, "US"), "tokens": null, "token_listener": null, "read_only": true, "oauth_device_id": null, "request_proof": null, "request_proof_provider": null }, ["country", "tokens", "token_listener", "read_only", "oauth_device_id", "request_proof", "request_proof_provider"], null, null);
        this["_transport"] = _runtime_1.py.call(_transport_1._NissanTransport, [session], Object.assign({}, { "profile": _runtime_1.py.call(_profile_1.profile_for, [country], null) }, { "tokens": tokens }, { "token_listener": token_listener }, { "oauth_device_id": oauth_device_id }, { "request_proof": request_proof }, { "request_proof_provider": request_proof_provider }));
        this["_country"] = country;
        this["_read_only"] = read_only;
    }
    /** Return the country selected for this client. */
    get country() {
        /** Return the country selected for this client. */
        return _runtime_1.py.attr(this, "_country");
    }
    /** Return whether state-changing operations are blocked. */
    get read_only() {
        /** Return whether state-changing operations are blocked. */
        return _runtime_1.py.attr(this, "_read_only");
    }
    /** Return the currently active OAuth tokens. */
    get tokens() {
        /** Return the currently active OAuth tokens. */
        return _runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "tokens");
    }
    /** Return the identifier used for a mobile OAuth authorization scope. */
    get oauth_device_id() {
        /** Return the identifier used for a mobile OAuth authorization scope. */
        return _runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "oauth_device_id");
    }
    /** Authenticate with MyNISSAN credentials. */
    async async_authenticate(...__args) {
        let { "email": email, "password": password } = _runtime_1.py.bind(__args, ["email", "password"], {}, [], null, null);
        /** Authenticate with MyNISSAN credentials. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_authenticate"), [email, password], null));
    }
    /** Refresh and publish the active OAuth token set. */
    async async_refresh_tokens(...__args) {
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Refresh and publish the active OAuth token set. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_refresh_tokens"), [], null));
    }
    /** Check an asynchronous request using its matching Nissan operation. */
    async async_check_service_request(...__args) {
        let check, checks, data, document, operation_name, root_field;
        let { "vin": vin, "request": request } = _runtime_1.py.bind(__args, ["vin", "request"], {}, [], null, null);
        /** Check an asynchronous request using its matching Nissan operation. */
        checks = Object.assign({}, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE")]: ["CheckChargeServiceRequest", _runtime_1.py.attr(operations, "CHECK_CHARGE_REQUEST"), "checkChargeServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "CHARGE_CONFIGURATION")]: ["CheckChargeConfigServiceRequest", _runtime_1.py.attr(operations, "CHECK_CHARGE_CONFIGURATION_REQUEST"), "checkChargeConfigServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "CLIMATE")]: ["CheckRemoteClimateRequest", _runtime_1.py.attr(operations, "CHECK_CLIMATE_REQUEST"), "checkRemoteClimateRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "DOOR")]: ["CheckDoorServiceRequest", _runtime_1.py.attr(operations, "CHECK_DOOR_REQUEST"), "checkDoorServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "ENGINE")]: ["CheckEngineServiceRequest", _runtime_1.py.attr(operations, "CHECK_ENGINE_REQUEST"), "checkEngineServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "HORN_LIGHT")]: ["CheckHornLightServiceRequest", _runtime_1.py.attr(operations, "CHECK_HORN_LIGHT_REQUEST"), "checkHornLightServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "LOCATION")]: ["CheckLocationServiceRequest", _runtime_1.py.attr(operations, "CHECK_LOCATION_REQUEST"), "checkLocationServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "OTA")]: ["CheckOtaUpdateServiceRequest", _runtime_1.py.attr(operations, "CHECK_OTA_UPDATE_REQUEST"), "checkOtaUpdateServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "PHOTO")]: ["CheckTakePhotosAroundVehicleServiceRequest", _runtime_1.py.attr(operations, "CHECK_PHOTO_REQUEST"), "checkTakePhotosAroundVehicleServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "ROUTE")]: ["CheckRouteServiceRequest", _runtime_1.py.attr(operations, "CHECK_ROUTE_REQUEST"), "checkRouteServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "T_JUNCTION")]: ["CheckTJunctionServiceRequest", _runtime_1.py.attr(operations, "CHECK_T_JUNCTION_REQUEST"), "checkTJunctionServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "V2L")]: ["CheckV2LServiceRequest", _runtime_1.py.attr(operations, "CHECK_V2L_REQUEST"), "checkV2LServiceRequest"] }, { [_runtime_1.py.attr(models_1.ServiceRequestKind, "VEHICLE_STATUS")]: ["CheckRefreshVehicleStatusRequest", _runtime_1.py.attr(operations, "CHECK_REFRESH_VEHICLE_STATUS_REQUEST"), "checkRefreshVehicleStatusRequest"] });
        check = _runtime_1.py.call(_runtime_1.py.attr(checks, "get"), [_runtime_1.py.attr(request, "kind")], null);
        if (_runtime_1.py.truth(((check === null)))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [("Nissan does not expose a status operation for " + _runtime_1.py.str(_runtime_1.py.attr(_runtime_1.py.attr(request, "kind"), "value")) + " requests")], null);
        }
        [operation_name, document, root_field] = check;
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), [operation_name, document, Object.assign({}, { ["vin"]: vin }, { ["serviceRequestId"]: _runtime_1.py.attr(request, "id") })], null));
        return _runtime_1.py.call(parsing_1.parse_service_request_result, [data, root_field, vin], null);
    }
    /** Poll a remote request until Nissan returns a terminal status. */
    async async_wait_for_service_request(...__args) {
        let result;
        let { "vin": vin, "request": request, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds } = _runtime_1.py.bind(__args, ["vin", "request"], { "poll_interval_seconds": 3.0, "timeout_seconds": 210.0 }, ["poll_interval_seconds", "timeout_seconds"], null, null);
        /** Poll a remote request until Nissan returns a terminal status. */
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
        }
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["timeout_seconds must be a positive finite number"], null);
        }
        return await _runtime_1.py.timeout(timeout_seconds, async () => {
            while (_runtime_1.py.truth(true)) {
                result = (await _runtime_1.py.call(_runtime_1.py.attr(this, "async_check_service_request"), [vin, request], null));
                if (_runtime_1.py.truth(_runtime_1.py.call(_client_helpers_1._is_terminal_service_request, [_runtime_1.py.attr(request, "kind"), result], null))) {
                    return result;
                }
                (await _runtime_1.py.call(_runtime_1.py.attr(asyncio, "sleep"), [poll_interval_seconds], null));
            }
        });
    }
    /** Translated upstream _async_simple_service_request. */
    async _async_simple_service_request(...__args) {
        let { "operation_name": operation_name, "document": document, "root_field": root_field, "vin": vin, "kind": kind } = _runtime_1.py.bind(__args, ["operation_name", "document", "root_field", "vin", "kind"], {}, [], null, null);
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_service_request"), [operation_name, document, root_field, Object.assign({}, { ["vin"]: vin }), kind], null));
    }
    /** Translated upstream _async_service_request. */
    async _async_service_request(...__args) {
        let data;
        let { "operation_name": operation_name, "document": document, "root_field": root_field, "variables": variables, "kind": kind, "extra_headers": extra_headers } = _runtime_1.py.bind(__args, ["operation_name", "document", "root_field", "variables", "kind"], { "extra_headers": null }, ["extra_headers"], null, null);
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), [operation_name, document, variables], Object.assign({}, { "extra_headers": extra_headers })));
        return _runtime_1.py.call(parsing_1.parse_service_request, [data, root_field, kind], null);
    }
    /** Translated upstream _async_vehicle_alert_request. */
    async _async_vehicle_alert_request(...__args) {
        let data;
        let { "operation_name": operation_name, "document": document, "root_field": root_field, "variables": variables, "kind": kind } = _runtime_1.py.bind(__args, ["operation_name", "document", "root_field", "variables", "kind"], {}, [], null, null);
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), [operation_name, document, variables], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_alert_request, [data, root_field, kind], null);
    }
    /** Translated upstream _async_success_operation. */
    async _async_success_operation(...__args) {
        let data;
        let { "operation_name": operation_name, "document": document, "root_field": root_field, "variables": variables } = _runtime_1.py.bind(__args, ["operation_name", "document", "root_field", "variables"], {}, [], null, null);
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), [operation_name, document, variables], null));
        return _runtime_1.py.call(_client_helpers_1._success, [data, root_field], null);
    }
    /** Translated upstream _async_nullable_success_operation. */
    async _async_nullable_success_operation(...__args) {
        let data;
        let { "operation_name": operation_name, "document": document, "root_field": root_field, "variables": variables, "extra_headers": extra_headers } = _runtime_1.py.bind(__args, ["operation_name", "document", "root_field", "variables"], { "extra_headers": null }, ["extra_headers"], null, null);
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), [operation_name, document, variables], Object.assign({}, { "extra_headers": extra_headers })));
        return _runtime_1.py.call(_client_helpers_1._nullable_success, [data, root_field], null);
    }
    /** Translated upstream _ensure_write_allowed. */
    _ensure_write_allowed(...__args) {
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        if (_runtime_1.py.truth(_runtime_1.py.attr(this, "_read_only"))) {
            throw _runtime_1.py.call(exceptions_1.ReadOnlyError, ["State-changing operations are disabled; construct the client with read_only=False"], null);
        }
    }
}
exports._NissanClientBase = _NissanClientBase;
_runtime_1.py.classType(_NissanClientBase);
//# sourceMappingURL=_client_base.js.map