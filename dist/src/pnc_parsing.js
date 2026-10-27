"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicChargeSessionStopResult = exports.PublicChargeSessionStatus = exports.PublicChargeSessionState = exports.PublicChargeSessionStartResult = exports.PublicChargeSessionStartData = exports.PublicChargeSessionData = exports.PublicChargeLocationCoordinates = exports.PlugAndChargeServiceStatus = exports.PlugAndChargeServiceState = exports.PlugAndChargeServiceData = exports.PlugAndChargeCertificateRetryResult = exports.ResponseError = void 0;
exports.parse_pnc_service_status = parse_pnc_service_status;
exports.parse_update_pnc_service_status = parse_update_pnc_service_status;
exports.parse_start_charge_session = parse_start_charge_session;
exports.parse_stop_charge_session = parse_stop_charge_session;
exports.parse_charge_session_status = parse_charge_session_status;
exports.parse_retry_certificate_install = parse_retry_certificate_install;
exports._parse_pnc_service_status = _parse_pnc_service_status;
exports._required_optional_object = _required_optional_object;
exports._typename = _typename;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._nullable_bool = _nullable_bool;
exports._nullable_service_state = _nullable_service_state;
exports._nullable_session_state = _nullable_session_state;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const pnc_models_1 = require("./pnc_models");
Object.defineProperty(exports, "PlugAndChargeCertificateRetryResult", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeCertificateRetryResult; } });
Object.defineProperty(exports, "PlugAndChargeServiceData", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeServiceData; } });
Object.defineProperty(exports, "PlugAndChargeServiceState", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeServiceState; } });
Object.defineProperty(exports, "PlugAndChargeServiceStatus", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeServiceStatus; } });
Object.defineProperty(exports, "PublicChargeLocationCoordinates", { enumerable: true, get: function () { return pnc_models_1.PublicChargeLocationCoordinates; } });
Object.defineProperty(exports, "PublicChargeSessionData", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionData; } });
Object.defineProperty(exports, "PublicChargeSessionStartData", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionStartData; } });
Object.defineProperty(exports, "PublicChargeSessionStartResult", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionStartResult; } });
Object.defineProperty(exports, "PublicChargeSessionState", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionState; } });
Object.defineProperty(exports, "PublicChargeSessionStatus", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionStatus; } });
Object.defineProperty(exports, "PublicChargeSessionStopResult", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionStopResult; } });
/** Parse the nullable Plug & Charge service-status response. */
function parse_pnc_service_status(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable Plug & Charge service-status response. */
    return _runtime_1.py.call(_parse_pnc_service_status, [data, "pncServiceStatus"], null);
}
/** Parse the nullable Plug & Charge enrollment-update response. */
function parse_update_pnc_service_status(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable Plug & Charge enrollment-update response. */
    return _runtime_1.py.call(_parse_pnc_service_status, [data, "updatePnCServiceStatus"], null);
}
/** Parse the nullable public-session start response. */
function parse_start_charge_session(...__args) {
    let details, path, raw_details, root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable public-session start response. */
    root_field = "startChargeSession";
    root = _runtime_1.py.call(_required_optional_object, [data, root_field, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    _runtime_1.py.call(_typename, [root, root_field], null);
    raw_details = _runtime_1.py.call(_required_optional_object, [root, "data", (_runtime_1.py.str(root_field) + ".data")], null);
    details = null;
    if (_runtime_1.py.truth(((raw_details !== null)))) {
        path = (_runtime_1.py.str(root_field) + ".data");
        _runtime_1.py.call(_typename, [raw_details, path], null);
        details = _runtime_1.py.call(pnc_models_1.PublicChargeSessionStartData, [], Object.assign({}, { "vin": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["vin"], null), (_runtime_1.py.str(path) + ".vin")], null) }, { "evse_id": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["evseId"], null), (_runtime_1.py.str(path) + ".evseId")], null) }, { "status": _runtime_1.py.call(_nullable_session_state, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["status"], null), (_runtime_1.py.str(path) + ".status")], null) }, { "message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["message"], null), (_runtime_1.py.str(path) + ".message")], null) }, { "stop_session_allowed": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["stopSessionAllowed"], null), (_runtime_1.py.str(path) + ".stopSessionAllowed")], null) }));
    }
    return _runtime_1.py.call(pnc_models_1.PublicChargeSessionStartResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": details }));
}
/** Parse the nullable public-session stop response. */
function parse_stop_charge_session(...__args) {
    let root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable public-session stop response. */
    root_field = "stopChargeSession";
    root = _runtime_1.py.call(_required_optional_object, [data, root_field, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    _runtime_1.py.call(_typename, [root, root_field], null);
    return _runtime_1.py.call(pnc_models_1.PublicChargeSessionStopResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }));
}
/** Parse the nullable current public charging-session response. */
function parse_charge_session_status(...__args) {
    let coordinates, coordinates_path, details, path, raw_coordinates, raw_details, root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable current public charging-session response. */
    root_field = "sessionStatus";
    root = _runtime_1.py.call(_required_optional_object, [data, root_field, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    _runtime_1.py.call(_typename, [root, root_field], null);
    raw_details = _runtime_1.py.call(_required_optional_object, [root, "data", (_runtime_1.py.str(root_field) + ".data")], null);
    details = null;
    if (_runtime_1.py.truth(((raw_details !== null)))) {
        path = (_runtime_1.py.str(root_field) + ".data");
        _runtime_1.py.call(_typename, [raw_details, path], null);
        raw_coordinates = _runtime_1.py.call(_required_optional_object, [raw_details, "locationCoordinates", (_runtime_1.py.str(path) + ".locationCoordinates")], null);
        coordinates = null;
        if (_runtime_1.py.truth(((raw_coordinates !== null)))) {
            coordinates_path = (_runtime_1.py.str(path) + ".locationCoordinates");
            _runtime_1.py.call(_typename, [raw_coordinates, coordinates_path], null);
            coordinates = _runtime_1.py.call(pnc_models_1.PublicChargeLocationCoordinates, [], Object.assign({}, { "latitude": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_coordinates, "get"), ["latitude"], null), (_runtime_1.py.str(coordinates_path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_coordinates, "get"), ["longitude"], null), (_runtime_1.py.str(coordinates_path) + ".longitude")], null) }));
        }
        details = _runtime_1.py.call(pnc_models_1.PublicChargeSessionData, [], Object.assign({}, { "session_uid": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["sessionUid"], null), (_runtime_1.py.str(path) + ".sessionUid")], null) }, { "status": _runtime_1.py.call(_nullable_session_state, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["status"], null), (_runtime_1.py.str(path) + ".status")], null) }, { "message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["message"], null), (_runtime_1.py.str(path) + ".message")], null) }, { "stop_session_allowed": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["stopSessionAllowed"], null), (_runtime_1.py.str(path) + ".stopSessionAllowed")], null) }, { "cpo_name": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["cpoName"], null), (_runtime_1.py.str(path) + ".cpoName")], null) }, { "physical_reference": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["physicalReference"], null), (_runtime_1.py.str(path) + ".physicalReference")], null) }, { "location_address": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["locationAddress"], null), (_runtime_1.py.str(path) + ".locationAddress")], null) }, { "location_city": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["locationCity"], null), (_runtime_1.py.str(path) + ".locationCity")], null) }, { "location_state": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["locationState"], null), (_runtime_1.py.str(path) + ".locationState")], null) }, { "location_coordinates": coordinates }));
    }
    return _runtime_1.py.call(pnc_models_1.PublicChargeSessionStatus, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": details }));
}
/** Parse the nullable certificate-install retry result. */
function parse_retry_certificate_install(...__args) {
    let root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable certificate-install retry result. */
    root_field = "retryCertInstall";
    root = _runtime_1.py.call(_required_optional_object, [data, root_field, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    _runtime_1.py.call(_typename, [root, root_field], null);
    return _runtime_1.py.call(pnc_models_1.PlugAndChargeCertificateRetryResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }));
}
/** Translated upstream _parse_pnc_service_status. */
function _parse_pnc_service_status(...__args) {
    let details, path, raw_details, root;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    root = _runtime_1.py.call(_required_optional_object, [data, root_field, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    _runtime_1.py.call(_typename, [root, root_field], null);
    raw_details = _runtime_1.py.call(_required_optional_object, [root, "data", (_runtime_1.py.str(root_field) + ".data")], null);
    details = null;
    if (_runtime_1.py.truth(((raw_details !== null)))) {
        path = (_runtime_1.py.str(root_field) + ".data");
        _runtime_1.py.call(_typename, [raw_details, path], null);
        details = _runtime_1.py.call(pnc_models_1.PlugAndChargeServiceData, [], Object.assign({}, { "vin": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["vin"], null), (_runtime_1.py.str(path) + ".vin")], null) }, { "state": _runtime_1.py.call(_nullable_service_state, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["pncServiceStatus"], null), (_runtime_1.py.str(path) + ".pncServiceStatus")], null) }));
    }
    return _runtime_1.py.call(pnc_models_1.PlugAndChargeServiceStatus, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": details }));
}
/** Translated upstream _required_optional_object. */
function _required_optional_object(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is missing")], null);
    }
    value = _runtime_1.py.call(_runtime_1.py.attr(container, "get"), [field], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    return value;
}
/** Translated upstream _typename. */
function _typename(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
}
/** Translated upstream _string. */
function _string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return value;
}
/** Translated upstream _nullable_string. */
function _nullable_string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_string, [value, path], null);
}
/** Translated upstream _nullable_bool. */
function _nullable_bool(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _nullable_service_state. */
function _nullable_service_state(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_nullable_string, [value, path], null);
    if (_runtime_1.py.truth(((raw_value === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(pnc_models_1.PlugAndChargeServiceState, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(pnc_models_1.PlugAndChargeServiceState, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _nullable_session_state. */
function _nullable_session_state(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_nullable_string, [value, path], null);
    if (_runtime_1.py.truth(((raw_value === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(pnc_models_1.PublicChargeSessionState, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(pnc_models_1.PublicChargeSessionState, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=pnc_parsing.js.map