"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnselectedSecondDeliveryResult = exports.SecondDeliveryOperationSuccess = exports.SecondDeliveryOperationError = exports.ResponseError = exports._typename = exports._root = exports._required_string = exports._required_nullable_string = exports._required_field = void 0;
exports._parse_operation_result = _parse_operation_result;
exports._required_nullable_float = _required_nullable_float;
exports._required_datetime = _required_datetime;
exports._required_nullable_datetime = _required_nullable_datetime;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return account_parsing_1._root; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const second_delivery_models_1 = require("./second_delivery_models");
Object.defineProperty(exports, "SecondDeliveryOperationError", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryOperationError; } });
Object.defineProperty(exports, "SecondDeliveryOperationSuccess", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryOperationSuccess; } });
Object.defineProperty(exports, "UnselectedSecondDeliveryResult", { enumerable: true, get: function () { return second_delivery_models_1.UnselectedSecondDeliveryResult; } });
/** Translated upstream _parse_operation_result. */
function _parse_operation_result(...__args) {
    let root, success, typename;
    let { "data": data, "field": field, "success_typename": success_typename, "error_typenames": error_typenames } = _runtime_1.py.bind(__args, ["data", "field", "success_typename", "error_typenames"], {}, [], null, null);
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, success_typename)))) {
        success = _runtime_1.py.call(account_parsing_1._required_field, [root, "success", (_runtime_1.py.str(field) + ".success")], null);
        if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [success, _runtime_1.py.bool], null)))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(field) + ".success is not a boolean")], null);
        }
        return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryOperationSuccess, [success], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.contains(error_typenames, typename)))) {
        return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryOperationError, [typename, _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(second_delivery_models_1.UnselectedSecondDeliveryResult, [typename], null);
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
/** Translated upstream _required_nullable_datetime. */
function _required_nullable_datetime(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_nullable_string, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
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
//# sourceMappingURL=_second_delivery_value_parsing.js.map