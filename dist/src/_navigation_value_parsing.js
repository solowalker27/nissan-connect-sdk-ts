"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = void 0;
exports._object = _object;
exports._optional_object = _optional_object;
exports._list = _list;
exports._nullable_list = _nullable_list;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._int = _int;
exports._nullable_int = _nullable_int;
exports._float = _float;
exports._nullable_float = _nullable_float;
exports._nullable_bool = _nullable_bool;
exports._enum = _enum;
exports._nullable_enum = _nullable_enum;
exports._datetime = _datetime;
exports._nullable_datetime = _nullable_datetime;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Translated upstream _object. */
function _object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    return value;
}
/** Translated upstream _optional_object. */
function _optional_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_object, [value, path], null);
}
/** Translated upstream _list. */
function _list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
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
    return _runtime_1.py.call(_list, [value, path], null);
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
/** Translated upstream _int. */
function _int(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.int], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an integer")], null);
    }
    return value;
}
/** Translated upstream _nullable_int. */
function _nullable_int(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_int, [value, path], null);
}
/** Translated upstream _float. */
function _float(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, [_runtime_1.py.int, _runtime_1.py.float]], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not numeric")], null);
    }
    return _runtime_1.py.call(_runtime_1.py.float, [value], null);
}
/** Translated upstream _nullable_float. */
function _nullable_float(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_float, [value, path], null);
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
/** Translated upstream _enum. */
function _enum(...__args) {
    let raw_value, unknown_value;
    let { "value": value, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_string, [value, path], null);
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
/** Translated upstream _nullable_enum. */
function _nullable_enum(...__args) {
    let { "value": value, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_enum, [value, enum_type, path], null);
}
/** Translated upstream _datetime. */
function _datetime(...__args) {
    let normalized, raw_value, result;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_string, [value, path], null);
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
/** Translated upstream _nullable_datetime. */
function _nullable_datetime(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_datetime, [value, path], null);
}
//# sourceMappingURL=_navigation_value_parsing.js.map