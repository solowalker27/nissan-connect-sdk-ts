"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLError = exports.ApiError = exports.AuthenticationError = exports.ResponseError = exports.NetworkError = exports.ReadOnlyError = exports.NissanError = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Sequence = _runtime_1.py.Sequence;
/** Base exception raised by pynissan. */
class NissanError extends _runtime_1.py.mix(_runtime_1.py.Exception) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, NissanError, __args); }
}
exports.NissanError = NissanError;
_runtime_1.py.classType(NissanError);
/** Raised when a state-changing operation is blocked by read-only mode. */
class ReadOnlyError extends _runtime_1.py.mix(NissanError) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, ReadOnlyError, __args); }
}
exports.ReadOnlyError = ReadOnlyError;
_runtime_1.py.classType(ReadOnlyError);
/** Raised when the upstream service cannot be reached. */
class NetworkError extends _runtime_1.py.mix(NissanError) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, NetworkError, __args); }
}
exports.NetworkError = NetworkError;
_runtime_1.py.classType(NetworkError);
/** Raised when an upstream response has an unexpected shape. */
class ResponseError extends _runtime_1.py.mix(NissanError) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, ResponseError, __args); }
}
exports.ResponseError = ResponseError;
_runtime_1.py.classType(ResponseError);
/** Raised when authentication or token refresh fails. */
class AuthenticationError extends _runtime_1.py.mix(NissanError) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, AuthenticationError, __args); }
    /** Translated upstream __init__. */
    __init__(...__args) {
        let { "status": status, "message": message } = _runtime_1.py.bind(__args, ["status", "message"], {}, [], null, null);
        _runtime_1.py.superInit(this, AuthenticationError, [message]);
        this["status"] = status;
    }
}
exports.AuthenticationError = AuthenticationError;
_runtime_1.py.classType(AuthenticationError);
/** Raised when the connected vehicle API rejects a request. */
class ApiError extends _runtime_1.py.mix(NissanError) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, ApiError, __args); }
    /** Translated upstream __init__. */
    __init__(...__args) {
        let { "status": status, "message": message } = _runtime_1.py.bind(__args, ["status", "message"], {}, [], null, null);
        _runtime_1.py.superInit(this, ApiError, [message]);
        this["status"] = status;
    }
}
exports.ApiError = ApiError;
_runtime_1.py.classType(ApiError);
/** Raised when a GraphQL response contains operation errors. */
class GraphQLError extends _runtime_1.py.mix(NissanError) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, GraphQLError, __args); }
    /** Translated upstream __init__. */
    __init__(...__args) {
        let { "messages": messages } = _runtime_1.py.bind(__args, ["messages"], {}, [], null, null);
        this["messages"] = _runtime_1.py.call(_runtime_1.py.tuple, [messages], null);
        _runtime_1.py.superInit(this, GraphQLError, [_runtime_1.py.call(_runtime_1.py.attr("; ", "join"), [_runtime_1.py.attr(this, "messages")], null)]);
    }
}
exports.GraphQLError = GraphQLError;
_runtime_1.py.classType(GraphQLError);
//# sourceMappingURL=exceptions.js.map