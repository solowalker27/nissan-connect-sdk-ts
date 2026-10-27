"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlugAndChargeCertificateRetryResult = exports.PublicChargeSessionStatus = exports.PublicChargeSessionData = exports.PublicChargeLocationCoordinates = exports.PublicChargeSessionStopResult = exports.PublicChargeSessionStartResult = exports.PublicChargeSessionStartData = exports.PlugAndChargeServiceStatus = exports.PlugAndChargeServiceData = exports.PlugAndChargeCertificateRetryOutcome = exports.PublicChargeSessionStopOutcome = exports.PlugAndChargeUpdateOutcome = exports.PublicChargeSessionState = exports.PlugAndChargeServiceState = exports.PlugAndChargeStatusInput = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
exports.PlugAndChargeStatusInput = _runtime_1.py.enumType("PlugAndChargeStatusInput", { "ENABLE": "ENABLE", "DISABLE": "DISABLE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.PlugAndChargeServiceState = _runtime_1.py.enumType("PlugAndChargeServiceState", { "PENDING": "PENDING", "ENABLING": "ENABLING", "ENABLED": "ENABLED", "DISABLING": "DISABLING", "DISABLED": "DISABLED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.PublicChargeSessionState = _runtime_1.py.enumType("PublicChargeSessionState", { "ACTIVE": "ACTIVE", "COMPLETED": "COMPLETED", "FAILED": "FAILED", "PENDING": "PENDING", "RESERVATION": "RESERVATION", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.PlugAndChargeUpdateOutcome = _runtime_1.py.enumType("PlugAndChargeUpdateOutcome", { "SUCCESS": "SUCCESS", "PENDING": "PENDING", "FAILED": "FAILED", "DISABLE_ERROR": "DISABLE_ERROR", "UNKNOWN": "UNKNOWN" }, true);
exports.PublicChargeSessionStopOutcome = _runtime_1.py.enumType("PublicChargeSessionStopOutcome", { "SUCCESS": "SUCCESS", "FAILED": "FAILED", "UNEXPECTED_ERROR": "UNEXPECTED_ERROR", "UNKNOWN": "UNKNOWN" }, true);
exports.PlugAndChargeCertificateRetryOutcome = _runtime_1.py.enumType("PlugAndChargeCertificateRetryOutcome", { "SUCCESS": "SUCCESS", "FAILED": "FAILED", "UNKNOWN": "UNKNOWN" }, true);
/** Nullable vehicle and enrollment fields in a Plug & Charge response. */
class PlugAndChargeServiceData {
    vin;
    state;
    static __fields = [["vin", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PlugAndChargeServiceData, __args); Object.freeze(this); }
}
exports.PlugAndChargeServiceData = PlugAndChargeServiceData;
_runtime_1.py.classType(PlugAndChargeServiceData);
/** Status envelope returned by Plug & Charge reads and updates. */
class PlugAndChargeServiceStatus {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PlugAndChargeServiceStatus, __args); Object.freeze(this); }
    /** Interpret this response relative to the requested enrollment state. */
    update_outcome(...__args) {
        let state, terminal_state, transitional_state;
        let { "requested_status": requested_status } = _runtime_1.py.bind(__args, ["requested_status"], {}, [], null, null);
        /** Interpret this response relative to the requested enrollment state. */
        if (_runtime_1.py.eq(requested_status, _runtime_1.py.attr(exports.PlugAndChargeStatusInput, "ENABLE"))) {
            terminal_state = _runtime_1.py.attr(exports.PlugAndChargeServiceState, "ENABLED");
            transitional_state = _runtime_1.py.attr(exports.PlugAndChargeServiceState, "ENABLING");
        }
        else if (_runtime_1.py.eq(requested_status, _runtime_1.py.attr(exports.PlugAndChargeStatusInput, "DISABLE"))) {
            terminal_state = _runtime_1.py.attr(exports.PlugAndChargeServiceState, "DISABLED");
            transitional_state = _runtime_1.py.attr(exports.PlugAndChargeServiceState, "DISABLING");
        }
        else {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["UNKNOWN_VALUE cannot be sent as a GraphQL input"], null);
        }
        state = (_runtime_1.py.truth(((_runtime_1.py.attr(this, "data") !== null))) ? _runtime_1.py.attr(_runtime_1.py.attr(this, "data"), "state") : null);
        if (_runtime_1.py.truth(_runtime_1.py.and(() => ((state === null)), () => (_runtime_1.py.eq(_runtime_1.py.attr(this, "status_code"), "2004"))))) {
            return _runtime_1.py.attr(exports.PlugAndChargeUpdateOutcome, "DISABLE_ERROR");
        }
        if (_runtime_1.py.truth(((state === null)))) {
            return _runtime_1.py.attr(exports.PlugAndChargeUpdateOutcome, "UNKNOWN");
        }
        if (_runtime_1.py.truth(((state === terminal_state)))) {
            return _runtime_1.py.attr(exports.PlugAndChargeUpdateOutcome, "SUCCESS");
        }
        if (_runtime_1.py.truth(((state === transitional_state)))) {
            return _runtime_1.py.attr(exports.PlugAndChargeUpdateOutcome, "PENDING");
        }
        return _runtime_1.py.attr(exports.PlugAndChargeUpdateOutcome, "FAILED");
    }
}
exports.PlugAndChargeServiceStatus = PlugAndChargeServiceStatus;
_runtime_1.py.classType(PlugAndChargeServiceStatus);
/** Nullable details returned after starting a public charging session. */
class PublicChargeSessionStartData {
    vin;
    evse_id;
    status;
    message;
    stop_session_allowed;
    static __fields = [["vin", _runtime_1.py.MISSING], ["evse_id", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING], ["message", _runtime_1.py.MISSING], ["stop_session_allowed", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PublicChargeSessionStartData, __args); Object.freeze(this); }
}
exports.PublicChargeSessionStartData = PublicChargeSessionStartData;
_runtime_1.py.classType(PublicChargeSessionStartData);
/** Status envelope returned by the public-session start mutation. */
class PublicChargeSessionStartResult {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PublicChargeSessionStartResult, __args); Object.freeze(this); }
}
exports.PublicChargeSessionStartResult = PublicChargeSessionStartResult;
_runtime_1.py.classType(PublicChargeSessionStartResult);
/** Status envelope returned by the public-session stop mutation. */
class PublicChargeSessionStopResult {
    status_code;
    status_message;
    timestamp;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PublicChargeSessionStopResult, __args); Object.freeze(this); }
    /** Return the upstream service's interpretation of the EMP status code. */
    get outcome() {
        /** Return the upstream service's interpretation of the EMP status code. */
        if (_runtime_1.py.truth((_runtime_1.py.eq(_runtime_1.py.attr(this, "status_code"), "1000")))) {
            return _runtime_1.py.attr(exports.PublicChargeSessionStopOutcome, "SUCCESS");
        }
        if (_runtime_1.py.truth((_runtime_1.py.contains(new Set(["3026", "3028"]), _runtime_1.py.attr(this, "status_code"))))) {
            return _runtime_1.py.attr(exports.PublicChargeSessionStopOutcome, "FAILED");
        }
        if (_runtime_1.py.truth((_runtime_1.py.contains(new Set(["3027", "3029", "4011", "4014", "5000"]), _runtime_1.py.attr(this, "status_code"))))) {
            return _runtime_1.py.attr(exports.PublicChargeSessionStopOutcome, "UNEXPECTED_ERROR");
        }
        return _runtime_1.py.attr(exports.PublicChargeSessionStopOutcome, "UNKNOWN");
    }
}
exports.PublicChargeSessionStopResult = PublicChargeSessionStopResult;
_runtime_1.py.classType(PublicChargeSessionStopResult);
/** Nullable string coordinates reported for a public charging session. */
class PublicChargeLocationCoordinates {
    latitude;
    longitude;
    static __fields = [["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PublicChargeLocationCoordinates, __args); Object.freeze(this); }
}
exports.PublicChargeLocationCoordinates = PublicChargeLocationCoordinates;
_runtime_1.py.classType(PublicChargeLocationCoordinates);
/** Nullable details for the current Nissan Energy charging session. */
class PublicChargeSessionData {
    session_uid;
    status;
    message;
    stop_session_allowed;
    cpo_name;
    physical_reference;
    location_address;
    location_city;
    location_state;
    location_coordinates;
    static __fields = [["session_uid", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING], ["message", _runtime_1.py.MISSING], ["stop_session_allowed", _runtime_1.py.MISSING], ["cpo_name", _runtime_1.py.MISSING], ["physical_reference", _runtime_1.py.MISSING], ["location_address", _runtime_1.py.MISSING], ["location_city", _runtime_1.py.MISSING], ["location_state", _runtime_1.py.MISSING], ["location_coordinates", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PublicChargeSessionData, __args); Object.freeze(this); }
}
exports.PublicChargeSessionData = PublicChargeSessionData;
_runtime_1.py.classType(PublicChargeSessionData);
/** Status envelope for the current Nissan Energy charging session. */
class PublicChargeSessionStatus {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PublicChargeSessionStatus, __args); Object.freeze(this); }
}
exports.PublicChargeSessionStatus = PublicChargeSessionStatus;
_runtime_1.py.classType(PublicChargeSessionStatus);
/** Nullable EMP status code returned by certificate-install retry. */
class PlugAndChargeCertificateRetryResult {
    status_code;
    static __fields = [["status_code", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PlugAndChargeCertificateRetryResult, __args); Object.freeze(this); }
    /** Return the upstream service's interpretation of certificate-retry status. */
    get outcome() {
        /** Return the upstream service's interpretation of certificate-retry status. */
        if (_runtime_1.py.truth((_runtime_1.py.eq(_runtime_1.py.attr(this, "status_code"), "1000")))) {
            return _runtime_1.py.attr(exports.PlugAndChargeCertificateRetryOutcome, "SUCCESS");
        }
        if (_runtime_1.py.truth((_runtime_1.py.contains(new Set([null, "", "2024", "2028", "2029", "2030", "4011", "5000"]), _runtime_1.py.attr(this, "status_code"))))) {
            return _runtime_1.py.attr(exports.PlugAndChargeCertificateRetryOutcome, "FAILED");
        }
        return _runtime_1.py.attr(exports.PlugAndChargeCertificateRetryOutcome, "UNKNOWN");
    }
}
exports.PlugAndChargeCertificateRetryResult = PlugAndChargeCertificateRetryResult;
_runtime_1.py.classType(PlugAndChargeCertificateRetryResult);
//# sourceMappingURL=pnc_models.js.map