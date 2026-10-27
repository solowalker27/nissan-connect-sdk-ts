// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const re = $.re;

const Mapping = $.Mapping;

const cast = $.cast;

const ClientSession = $.ClientSession;

import { NissanClient, Tokens } from "../src/index";

/** Translated upstream FakeResponse. */
export class FakeResponse {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
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
/** Translated upstream __init__. */
constructor(...__args: any[]) {
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

export let EXPECTED_QUERY_TOKEN_HASHES = Object.assign({}, {["DrivingHistory"]: "55c6560e71d7b5f267e7edfabced0c4dbe9e5240d034b3e8ab579d2ad5b0152e"}, {["EVChargeStations"]: "18b57f6f03c5c1552323f1a95c25af0929be916e190ca7c2be04ab19fa78e383"}, {["eVehicleEligibility"]: "7c2bcccfa5c0d963a580c8aa536a1354b34ac84e69502cc1d66f2e7ce3adca8c"}, {["LastKnownCameraUsageCounter"]: "975fb5c31998d845d5546d71233e53ca45d2c377d823d00fee0c373af111599e"}, {["LocationDetails"]: "a17394651892824a08fc8ddec625d9aa1641f89f101fad2139235986ca174ffc"}, {["ParkingChargeable"]: "6ec1a2169360a3edd23aab2321a1efa54b81e22f6a0e83a456cbc3413182ee30"}, {["ShareableCapabilities"]: "46ce25e824af31aea94723979e168bc0494a51a210287c3a314e0d9e0df00c25"}, {["TariffPricing"]: "8fe80027d8aad800cef5c59ed797854822a2f5c09aaaa684ac49151208823f4f"});

/** Translated upstream graphql_response. */
export function graphql_response(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
return $.call(FakeResponse, [Object.assign({}, {["data"]: $.call($.dict, [data], null)})], null);
}

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session} = $.bind(__args, ["session"], {}, [], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"read_only": true}, {"tokens": TOKENS}));
}

/** Translated upstream assert_graphql_call. */
export function assert_graphql_call(...__args: any[]): any {
let document, payload, tokens;
let {"session": session, "index": index, "operation_name": operation_name, "variables": variables} = $.bind(__args, ["session", "index", "operation_name", "variables"], {}, [], null, null);
payload = $.call($.attr($.get($.attr(session, "calls"), index), "get"), ["json"], null);
$.assert($.call($.isinstance, [payload, Mapping], null), "test_extended_vehicle_reads.py:75: isinstance(payload, Mapping)");
$.assert(($.eq($.get(payload, "operationName"), operation_name)), "test_extended_vehicle_reads.py:76: payload['operationName'] == operation_name");
$.assert(($.eq($.get(payload, "variables"), variables)), "test_extended_vehicle_reads.py:77: payload['variables'] == variables");
document = $.get(payload, "query");
$.assert($.call($.isinstance, [document, $.str], null), "test_extended_vehicle_reads.py:79: isinstance(document, str)");
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), $.get(EXPECTED_QUERY_TOKEN_HASHES, operation_name))), "test_extended_vehicle_reads.py:81: hashlib.sha256(tokens.encode()).hexdigest() == EXPECTED_QUERY_TOKEN_HASHES[operation_name]");
}
