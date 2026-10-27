"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports._typed_object = exports._required_string = exports._required_nullable_string = exports._required_nullable_bool = exports._required_field = void 0;
exports._nullable_list = _nullable_list;
exports._optional_selected_nullable_list = _optional_selected_nullable_list;
exports._required_string_list = _required_string_list;
exports._optional_selected_nullable_string = _optional_selected_nullable_string;
exports._optional_selected_nullable_bool = _optional_selected_nullable_bool;
exports._required_bool = _required_bool;
exports._required_nullable_float = _required_nullable_float;
exports._required_datetime = _required_datetime;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Callable = _runtime_1.py.Callable;
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return account_parsing_1._typed_object; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Translated upstream _nullable_list. */
function _nullable_list(...__args) {
    let index, item, item_path, result, value;
    let { "container": container, "field": field, "path": path, "parser": parser } = _runtime_1.py.bind(__args, ["container", "field", "path", "parser"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    result = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(result, "append"), [null], null);
            continue;
        }
        item_path = (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]");
        _runtime_1.py.call(_runtime_1.py.attr(result, "append"), [_runtime_1.py.call(parser, [_runtime_1.py.call(account_parsing_1._typed_object, [item, item_path], null), item_path], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [result], null);
}
/** Translated upstream _optional_selected_nullable_list. */
function _optional_selected_nullable_list(...__args) {
    let { "container": container, "field": field, "parent_path": parent_path, "parser": parser } = _runtime_1.py.bind(__args, ["container", "field", "parent_path", "parser"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        return null;
    }
    return _runtime_1.py.call(_nullable_list, [container, field, (_runtime_1.py.str(parent_path) + "." + _runtime_1.py.str(field)), parser], null);
}
/** Translated upstream _required_string_list. */
function _required_string_list(...__args) {
    let index, item, path, result, value;
    let { "container": container, "field": field, "parent_path": parent_path } = _runtime_1.py.bind(__args, ["container", "field", "parent_path"], {}, [], null, null);
    path = (_runtime_1.py.str(parent_path) + "." + _runtime_1.py.str(field));
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    result = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [value], null))) {
        if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [item, _runtime_1.py.str], null)))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "] is not a string")], null);
        }
        _runtime_1.py.call(_runtime_1.py.attr(result, "append"), [item], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [result], null);
}
/** Translated upstream _optional_selected_nullable_string. */
function _optional_selected_nullable_string(...__args) {
    let { "container": container, "field": field, "parent_path": parent_path } = _runtime_1.py.bind(__args, ["container", "field", "parent_path"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        return null;
    }
    return _runtime_1.py.call(account_parsing_1._required_nullable_string, [container, field, (_runtime_1.py.str(parent_path) + "." + _runtime_1.py.str(field))], null);
}
/** Translated upstream _optional_selected_nullable_bool. */
function _optional_selected_nullable_bool(...__args) {
    let { "container": container, "field": field, "parent_path": parent_path } = _runtime_1.py.bind(__args, ["container", "field", "parent_path"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        return null;
    }
    return _runtime_1.py.call(account_parsing_1._required_nullable_bool, [container, field, (_runtime_1.py.str(parent_path) + "." + _runtime_1.py.str(field))], null);
}
/** Translated upstream _required_bool. */
function _required_bool(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
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
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.union(_runtime_1.py.int, _runtime_1.py.float)], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a number")], null);
    }
    return _runtime_1.py.call(_runtime_1.py.float, [value], null);
}
/** Translated upstream _required_datetime. */
function _required_datetime(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_string, [container, field, path], null);
    try {
        return _runtime_1.py.call(_runtime_1.py.attr(datetime, "fromisoformat"), [_runtime_1.py.call(_runtime_1.py.attr(value, "replace"), ["Z", "+00:00"], null)], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO date-time")], null);
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=_dealer_value_parsing.js.map