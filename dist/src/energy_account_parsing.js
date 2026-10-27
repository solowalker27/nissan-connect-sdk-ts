"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports.EnergyToggleStatus = exports.EnergyPncStatus = exports.EnergyNacsStatus = exports.EnergyAccountStatusResult = exports.EnergyAccountStatusReason = exports.EnergyAccountStatus = exports.EnergyAccountData = exports.EnergyAccountConnector = void 0;
exports.parse_account_status = parse_account_status;
exports._parse_connector = _parse_connector;
exports._root = _root;
exports._typed_object = _typed_object;
exports._optional_typed_object = _optional_typed_object;
exports._nullable_list = _nullable_list;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._nullable_enum = _nullable_enum;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const StrEnum = _runtime_1.py.StrEnum;
const energy_account_models_1 = require("./energy_account_models");
Object.defineProperty(exports, "EnergyAccountConnector", { enumerable: true, get: function () { return energy_account_models_1.EnergyAccountConnector; } });
Object.defineProperty(exports, "EnergyAccountData", { enumerable: true, get: function () { return energy_account_models_1.EnergyAccountData; } });
Object.defineProperty(exports, "EnergyAccountStatus", { enumerable: true, get: function () { return energy_account_models_1.EnergyAccountStatus; } });
Object.defineProperty(exports, "EnergyAccountStatusReason", { enumerable: true, get: function () { return energy_account_models_1.EnergyAccountStatusReason; } });
Object.defineProperty(exports, "EnergyAccountStatusResult", { enumerable: true, get: function () { return energy_account_models_1.EnergyAccountStatusResult; } });
Object.defineProperty(exports, "EnergyNacsStatus", { enumerable: true, get: function () { return energy_account_models_1.EnergyNacsStatus; } });
Object.defineProperty(exports, "EnergyPncStatus", { enumerable: true, get: function () { return energy_account_models_1.EnergyPncStatus; } });
Object.defineProperty(exports, "EnergyToggleStatus", { enumerable: true, get: function () { return energy_account_models_1.EnergyToggleStatus; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Parse the nullable Nissan Energy account status response. */
function parse_account_status(...__args) {
    let account_data, connectors, connectors_path, index, parsed_connectors, raw_connector, raw_connectors, raw_data, root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable Nissan Energy account status response. */
    root_field = "accountStatus";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    raw_data = _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["data"], null), (_runtime_1.py.str(root_field) + ".data")], null);
    account_data = null;
    if (_runtime_1.py.truth(((raw_data !== null)))) {
        connectors_path = (_runtime_1.py.str(root_field) + ".data.connectors");
        raw_connectors = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["connectors"], null), connectors_path], null);
        connectors = null;
        if (_runtime_1.py.truth(((raw_connectors !== null)))) {
            parsed_connectors = [];
            for ([index, raw_connector] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_connectors], null))) {
                if (_runtime_1.py.truth(((raw_connector === null)))) {
                    _runtime_1.py.call(_runtime_1.py.attr(parsed_connectors, "append"), [null], null);
                    continue;
                }
                _runtime_1.py.call(_runtime_1.py.attr(parsed_connectors, "append"), [_runtime_1.py.call(_parse_connector, [raw_connector, (_runtime_1.py.str(connectors_path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
            }
            connectors = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_connectors], null);
        }
        account_data = _runtime_1.py.call(energy_account_models_1.EnergyAccountData, [], Object.assign({}, { "status": _runtime_1.py.call(_nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["status"], null), energy_account_models_1.EnergyAccountStatus, (_runtime_1.py.str(root_field) + ".data.status")], null) }, { "status_reason": _runtime_1.py.call(_nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["statusReason"], null), energy_account_models_1.EnergyAccountStatusReason, (_runtime_1.py.str(root_field) + ".data.statusReason")], null) }, { "pnc_status": _runtime_1.py.call(_nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["pncStatus"], null), energy_account_models_1.EnergyPncStatus, (_runtime_1.py.str(root_field) + ".data.pncStatus")], null) }, { "pnc_status_reason": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["pncStatusReason"], null), (_runtime_1.py.str(root_field) + ".data.pncStatusReason")], null) }, { "toggle_status": _runtime_1.py.call(_nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["toggleStatus"], null), energy_account_models_1.EnergyToggleStatus, (_runtime_1.py.str(root_field) + ".data.toggleStatus")], null) }, { "nacs_status": _runtime_1.py.call(_nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(raw_data, "get"), ["nacsStatus"], null), energy_account_models_1.EnergyNacsStatus, (_runtime_1.py.str(root_field) + ".data.nacsStatus")], null) }, { "connectors": connectors }));
    }
    return _runtime_1.py.call(energy_account_models_1.EnergyAccountStatusResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": account_data }));
}
/** Translated upstream _parse_connector. */
function _parse_connector(...__args) {
    let connector;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    connector = _runtime_1.py.call(_typed_object, [value, path], null);
    return _runtime_1.py.call(energy_account_models_1.EnergyAccountConnector, [], Object.assign({}, { "id": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["id"], null), (_runtime_1.py.str(path) + ".id")], null) }, { "connector_name": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["connectorName"], null), (_runtime_1.py.str(path) + ".connectorName")], null) }));
}
/** Translated upstream _root. */
function _root(...__args) {
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    return _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
}
/** Translated upstream _typed_object. */
function _typed_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
    return value;
}
/** Translated upstream _optional_typed_object. */
function _optional_typed_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_typed_object, [value, path], null);
}
/** Translated upstream _nullable_list. */
function _nullable_list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
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
/** Translated upstream _nullable_enum. */
function _nullable_enum(...__args) {
    let raw_value, unknown_value;
    let { "value": value, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_nullable_string, [value, path], null);
    if (_runtime_1.py.truth(((raw_value === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(enum_type, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            unknown_value = _runtime_1.py.call(_runtime_1.py.getattr, [enum_type, "UNKNOWN_VALUE", null], null);
            if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [unknown_value, enum_type], null))) {
                return unknown_value;
            }
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " has an unsupported value: " + _runtime_1.py.str(raw_value))], null);
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=energy_account_parsing.js.map