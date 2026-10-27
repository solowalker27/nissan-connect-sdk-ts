// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const hashlib = $.hashlib;

const re = $.re;

const Mapping = $.Mapping;

const cast = $.cast;

const ClientSession = $.ClientSession;

import { NissanClient, Tokens } from "../src/index";

/** Translated upstream FakeResponse. */
export class FakeResponse {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeResponse, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"payload": payload} = $.bind(__args, ["payload"], {}, [], null, null);
this["status"] = 200;
this["_payload"] = payload;
}
/** Translated upstream __aenter__. */
async __aenter__(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return this;
}
/** Translated upstream __aexit__. */
async __aexit__(...__args: any[]): any {
let {"args": args} = $.bind(__args, [], {}, [], "args", null);
return null;
}
/** Translated upstream json. */
async json(...__args: any[]): any {
let {"content_type": content_type} = $.bind(__args, [], {"content_type": null}, ["content_type"], null, null);
return $.attr(this, "_payload");
}
}
$.classType(FakeResponse);

/** Translated upstream FakeSession. */
export class FakeSession {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeSession, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"responses": responses} = $.bind(__args, [], {}, [], "responses", null);
this["responses"] = $.call($.list, [responses], null);
this["calls"] = [];
}
/** Translated upstream post. */
post(...__args: any[]): any {
let {"url": url, "kwargs": kwargs} = $.bind(__args, ["url"], {}, [], null, "kwargs");
$.call($.attr($.attr(this, "calls"), "append"), [Object.assign({}, {["url"]: url}, kwargs)], null);
if ($.truth(!$.truth($.attr(this, "responses")))) {
throw $.call($.AssertionError, ["Unexpected HTTP request"], null);
}
return $.call($.attr($.attr(this, "responses"), "pop"), [0], null);
}
}
$.classType(FakeSession);

export let TOKENS = $.call(Tokens, ["access-token", "refresh-token", "id-token"], null);

export let EXPECTED_QUERY_TOKEN_HASHES = Object.assign({}, {["PNCServiceStatus"]: "8e5faf53447663be5f531982756936d5d89e67de6bb41f743da95ba3eb1a953d"}, {["StartChargeSession"]: "0b9d134d2abd860cd43a826ec1d07fd6e260af629c8da56117410dffdca5bee7"}, {["StopChargeSession"]: "4648f5902628a8393dc6ca401b640f3f793e8ccecd54c1f460097bd3231b01cd"}, {["UpdatePnCServiceStatus"]: "b295b10adb0ab3f909c79ceef445e5600bf802c37e1175f6788ccb4abd4ea6a6"}, {["RetryCertInstall"]: "9a8a1986b379936600807df51cb5e1b8948e55729e9b32fb306b6fcb83ae2571"}, {["ChargeSessionStatus"]: "fea805ebe2313ced668deb5a04175f1e36ef3c004bd0d378b611f879cb0f89a5"});

/** Translated upstream graphql_response. */
export function graphql_response(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
return $.call(FakeResponse, [Object.assign({}, {["data"]: $.call($.dict, [data], null)})], null);
}

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {"read_only": true}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"read_only": read_only}, {"tokens": TOKENS}));
}

/** Translated upstream assert_graphql_call. */
export function assert_graphql_call(...__args: any[]): any {
let document, payload, tokens;
let {"session": session, "index": index, "operation_name": operation_name, "variables": variables} = $.bind(__args, ["session", "index", "operation_name", "variables"], {}, [], null, null);
payload = $.call($.attr($.get($.attr(session, "calls"), index), "get"), ["json"], null);
$.assert($.call($.isinstance, [payload, Mapping], null), "test_pnc.py:74: isinstance(payload, Mapping)");
$.assertEqual($.get(payload, "operationName"), operation_name, "test_pnc.py:75: payload['operationName'] == operation_name");
$.assertEqual($.get(payload, "variables"), variables, "test_pnc.py:76: payload['variables'] == variables");
document = $.get(payload, "query");
$.assert($.call($.isinstance, [document, $.str], null), "test_pnc.py:78: isinstance(document, str)");
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), $.get(EXPECTED_QUERY_TOKEN_HASHES, operation_name), "test_pnc.py:80: hashlib.sha256(tokens.encode()).hexdigest() == EXPECTED_QUERY_TOKEN_HASHES[operation_name]");
}
