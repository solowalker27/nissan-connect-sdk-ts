"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports._typed_object = exports._required_field = exports._enum = void 0;
exports._parse_nullable_object_list = _parse_nullable_object_list;
exports._required_typed_object = _required_typed_object;
exports._required_list = _required_list;
exports._nullable_list = _nullable_list;
exports._required_nullable_float = _required_nullable_float;
exports._required_nullable_datetime = _required_nullable_datetime;
exports._required_nullable_enum = _required_nullable_enum;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Callable = _runtime_1.py.Callable;
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_enum", { enumerable: true, get: function () { return account_parsing_1._enum; } });
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return account_parsing_1._typed_object; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Translated upstream _parse_nullable_object_list. */
function _parse_nullable_object_list(...__args) {
    let index, path, results, value, values;
    let { "container": container, "field": field, "parent_path": parent_path, "parser": parser } = _runtime_1.py.bind(__args, ["container", "field", "parent_path", "parser"], {}, [], null, null);
    values = _runtime_1.py.call(_nullable_list, [container, field, (_runtime_1.py.str(parent_path) + "." + _runtime_1.py.str(field))], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    results = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((value === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(results, "append"), [null], null);
            continue;
        }
        path = (_runtime_1.py.str(parent_path) + "." + _runtime_1.py.str(field) + "[" + _runtime_1.py.str(index) + "]");
        _runtime_1.py.call(_runtime_1.py.attr(results, "append"), [_runtime_1.py.call(parser, [_runtime_1.py.call(account_parsing_1._typed_object, [value, path], null), path], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [results], null);
}
/** Translated upstream _required_typed_object. */
function _required_typed_object(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    return _runtime_1.py.call(account_parsing_1._typed_object, [_runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null), path], null);
}
/** Translated upstream _required_list. */
function _required_list(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _nullable_list. */
function _nullable_list(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _required_nullable_float. */
function _required_nullable_float(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, [_runtime_1.py.int, _runtime_1.py.float]], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a number")], null);
    }
    return _runtime_1.py.call(_runtime_1.py.float, [value], null);
}
/** Translated upstream _required_nullable_datetime. */
function _required_nullable_datetime(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a date-time string")], null);
    }
    try {
        return _runtime_1.py.call(_runtime_1.py.attr(datetime, "fromisoformat"), [_runtime_1.py.call(_runtime_1.py.attr(value, "replace"), ["Z", "+00:00"], null)], null);
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
}
/** Translated upstream _required_nullable_enum. */
function _required_nullable_enum(...__args) {
    let value;
    let { "container": container, "field": field, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "enum_type", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_parsing_1._enum, [value, enum_type, path], null);
}
//# sourceMappingURL=_commerce_value_parsing.js.map