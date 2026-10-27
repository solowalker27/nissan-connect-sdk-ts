// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";

const Sequence = $.Sequence;

/** Base exception raised by pynissan. */
export class NissanError extends $.mix($.Exception) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, NissanError, __args); }
}
$.classType(NissanError);

/** Raised when a state-changing operation is blocked by read-only mode. */
export class ReadOnlyError extends $.mix(NissanError) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, ReadOnlyError, __args); }
}
$.classType(ReadOnlyError);
export interface ReadOnlyError extends NissanError {}

/** Raised when the upstream service cannot be reached. */
export class NetworkError extends $.mix(NissanError) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, NetworkError, __args); }
}
$.classType(NetworkError);
export interface NetworkError extends NissanError {}

/** Raised when an upstream response has an unexpected shape. */
export class ResponseError extends $.mix(NissanError) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, ResponseError, __args); }
}
$.classType(ResponseError);
export interface ResponseError extends NissanError {}

/** Raised when authentication or token refresh fails. */
export class AuthenticationError extends $.mix(NissanError) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, AuthenticationError, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"status": status, "message": message} = $.bind(__args, ["status", "message"], {}, [], null, null);
$.superInit(this, AuthenticationError, [message]);
this["status"] = status;
}
}
$.classType(AuthenticationError);
export interface AuthenticationError extends NissanError {}

/** Raised when the connected vehicle API rejects a request. */
export class ApiError extends $.mix(NissanError) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, ApiError, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"status": status, "message": message} = $.bind(__args, ["status", "message"], {}, [], null, null);
$.superInit(this, ApiError, [message]);
this["status"] = status;
}
}
$.classType(ApiError);
export interface ApiError extends NissanError {}

/** Raised when a GraphQL response contains operation errors. */
export class GraphQLError extends $.mix(NissanError) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, GraphQLError, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"messages": messages} = $.bind(__args, ["messages"], {}, [], null, null);
this["messages"] = $.call($.tuple, [messages], null);
$.superInit(this, GraphQLError, [$.call($.attr("; ", "join"), [$.attr(this, "messages")], null)]);
}
}
$.classType(GraphQLError);
export interface GraphQLError extends NissanError {}
