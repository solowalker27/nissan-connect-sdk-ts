"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DRIVER_INVITE_ACTION_ERROR_TYPES = exports._INVITE_DRIVER_ERROR_TYPES = exports._DRIVER_INVITES_ERROR_TYPES = exports._BASE_CONNECTED_VEHICLE_TYPES = exports.ResponseError = void 0;
exports._root = _root;
exports._typed_object = _typed_object;
exports._typename = _typename;
exports._required_value = _required_value;
exports._required_string = _required_string;
exports._required_nullable_string = _required_nullable_string;
exports._required_bool = _required_bool;
exports._required_nullable_bool = _required_nullable_bool;
exports._required_list = _required_list;
exports._nullable_list = _nullable_list;
exports._required_string_tuple = _required_string_tuple;
exports._string = _string;
exports._required_datetime = _required_datetime;
exports._required_enum = _required_enum;
exports._required_nullable_enum = _required_nullable_enum;
exports._enum = _enum;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
exports._BASE_CONNECTED_VEHICLE_TYPES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["AVK2Vehicle", "AVKVehicle", "ConnectedVehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "ElectricVehicle", "EVOVehicle"])], null);
exports._DRIVER_INVITES_ERROR_TYPES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["GeneralErrors", "DatabaseError", "BrandError", "TokenError", "VinValidationError"])], null);
exports._INVITE_DRIVER_ERROR_TYPES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["FirstNameValidationError", "LastNameValidationError", "EmailValidationError", "PhoneValidationError", "ExistingInviteError", "MaxInvitesReachedError"])], null);
exports._DRIVER_INVITE_ACTION_ERROR_TYPES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["GeneralErrors", "DatabaseError", "InvalidInviteIdError", "TokenError", "BrandError", "TermsAndConditionsError", "CountryError"])], null);
/** Translated upstream _root. */
function _root(...__args) {
    let value;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    value = _runtime_1.py.call(_required_value, [data, root_field, root_field], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_typed_object, [value, root_field], null);
}
/** Translated upstream _typed_object. */
function _typed_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    _runtime_1.py.call(_typename, [value, path], null);
    return value;
}
/** Translated upstream _typename. */
function _typename(...__args) {
    let { "container": container, "path": path } = _runtime_1.py.bind(__args, ["container", "path"], {}, [], null, null);
    return _runtime_1.py.call(_required_string, [container, "__typename", (_runtime_1.py.str(path) + ".__typename")], null);
}
/** Translated upstream _required_value. */
function _required_value(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is missing")], null);
    }
    return _runtime_1.py.get(container, field);
}
/** Translated upstream _required_string. */
function _required_string(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    return _runtime_1.py.call(_string, [_runtime_1.py.call(_required_value, [container, field, path], null), path], null);
}
/** Translated upstream _required_nullable_string. */
function _required_nullable_string(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_value, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_string, [value, path], null);
}
/** Translated upstream _required_bool. */
function _required_bool(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_value, [container, field, path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _required_nullable_bool. */
function _required_nullable_bool(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_value, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _required_list. */
function _required_list(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_value, [container, field, path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
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
/** Translated upstream _required_string_tuple. */
function _required_string_tuple(...__args) {
    let index, value, values;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    values = _runtime_1.py.call(_required_list, [container, field, path], null);
    return _runtime_1.py.call(_runtime_1.py.tuple, [(() => { const __out = []; for (const [index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
            __out.push(_runtime_1.py.call(_string, [value, (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]")], null));
        } return __out; })()], null);
}
/** Translated upstream _string. */
function _string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return value;
}
/** Translated upstream _required_datetime. */
function _required_datetime(...__args) {
    let normalized, raw_value, result;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_required_string, [container, field, path], null);
    normalized = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(raw_value, "endswith"), ["Z"], null)) ? (_runtime_1.py.str(_runtime_1.py.slice(raw_value, null, -(1), null)) + "+00:00") : raw_value);
    try {
        result = _runtime_1.py.call(_runtime_1.py.attr(datetime, "fromisoformat"), [normalized], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            let error = __error;
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time")], null);
        }
        else {
            throw __error;
        }
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((_runtime_1.py.attr(result, "tzinfo") === null)), () => ((_runtime_1.py.call(_runtime_1.py.attr(result, "utcoffset"), [], null) === null))))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time with an offset")], null);
    }
    return result;
}
/** Translated upstream _required_enum. */
function _required_enum(...__args) {
    let { "container": container, "field": field, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "enum_type", "path"], {}, [], null, null);
    return _runtime_1.py.call(_enum, [_runtime_1.py.call(_required_value, [container, field, path], null), enum_type, path], null);
}
/** Translated upstream _required_nullable_enum. */
function _required_nullable_enum(...__args) {
    let value;
    let { "container": container, "field": field, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "enum_type", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_value, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_enum, [value, enum_type, path], null);
}
/** Translated upstream _enum. */
function _enum(...__args) {
    let raw_value;
    let { "value": value, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_string, [value, path], null);
    try {
        return _runtime_1.py.call(enum_type, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.call(enum_type, ["UNKNOWN__"], null);
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=_driver_value_parsing.js.map