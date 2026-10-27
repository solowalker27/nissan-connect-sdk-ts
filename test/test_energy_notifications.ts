// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const re = $.re;

const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { UNSET, NissanClient, NissanEnergyNotificationPreferences, NissanEnergyNotificationPreferencesUpdate, ReadOnlyError, ResponseError, Tokens } from "../src/index";

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

export let EXPECTED_QUERY_TOKEN_HASHES = Object.assign({}, {["NissanEnergyNotificationPreferences"]: "5dbb8c7ef7184562f4f3631bdf3df8f5cb515d3f5e536dd0662dddb0921fb813"}, {["UpdateNotificationPreferences"]: "c7c1f767fc2b0c5486ff4109196190c65022b28b25931de0a3d3c6c7ad189685"});

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
$.assert($.call($.isinstance, [payload, Mapping], null), "test_energy_notifications.py:79: isinstance(payload, Mapping)");
$.assert(($.eq($.get(payload, "operationName"), operation_name)), "test_energy_notifications.py:80: payload['operationName'] == operation_name");
$.assert(($.eq($.get(payload, "variables"), variables)), "test_energy_notifications.py:81: payload['variables'] == variables");
document = $.get(payload, "query");
$.assert($.call($.isinstance, [document, $.str], null), "test_energy_notifications.py:83: isinstance(document, str)");
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), $.get(EXPECTED_QUERY_TOKEN_HASHES, operation_name))), "test_energy_notifications.py:85: hashlib.sha256(tokens.encode()).hexdigest() == EXPECTED_QUERY_TOKEN_HASHES[operation_name]");
}

/** Translated upstream test_get_nissan_energy_notification_preferences_uses_exact_contract. */
export async function test_get_nissan_energy_notification_preferences_uses_exact_contract(...__args: any[]): any {
let result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpAccountStatusData"}, {["notificationPreferences"]: Object.assign({}, {["__typename"]: "EmpNotificationPreferencesData"}, {["emailStatus"]: true}, {["pushStatus"]: null}, {["smsStatus"]: false})})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_get_nissan_energy_notification_preferences"), ["VIN"], null));
$.assert(($.eq(result, $.call(NissanEnergyNotificationPreferences, [], Object.assign({}, {"email_status": true}, {"push_status": null}, {"sms_status": false})))), "test_energy_notifications.py:112: result == NissanEnergyNotificationPreferences(email_status=True, push_status=None, sms_status=False)");
$.call(assert_graphql_call, [session, 0, "NissanEnergyNotificationPreferences", Object.assign({}, {["vin"]: "VIN"})], null);
}

/** Translated upstream test_get_nissan_energy_preferences_preserves_nullable_response_chain. */
export async function test_get_nissan_energy_preferences_preserves_nullable_response_chain(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["accountStatus"]: null})], null), $.call(graphql_response, [Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["data"]: null})})], null), $.call(graphql_response, [Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpAccountStatusData"}, {["notificationPreferences"]: null})})})], null)], null);
client = $.call(make_client, [session], null);
$.assert((((await $.call($.attr(client, "async_get_nissan_energy_notification_preferences"), ["VIN"], null)) === null)), "test_energy_notifications.py:150: await client.async_get_nissan_energy_notification_preferences('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_nissan_energy_notification_preferences"), ["VIN"], null)) === null)), "test_energy_notifications.py:151: await client.async_get_nissan_energy_notification_preferences('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_nissan_energy_notification_preferences"), ["VIN"], null)) === null)), "test_energy_notifications.py:152: await client.async_get_nissan_energy_notification_preferences('VIN') is None");
}

/** Translated upstream test_update_nissan_energy_preferences_preserves_patch_values. */
export async function test_update_nissan_energy_preferences_preserves_patch_values(...__args: any[]): any {
let client, null_result, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["updateNotificationPreferences"]: Object.assign({}, {["__typename"]: "EmpUpdateNotificationPreferencesResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "2026-07-31T18:30:00Z"}, {["data"]: Object.assign({}, {["__typename"]: "EmpNotificationPreferencesData"}, {["emailStatus"]: true}, {["pushStatus"]: null}, {["smsStatus"]: false})})})], null), $.call(graphql_response, [Object.assign({}, {["updateNotificationPreferences"]: null})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
result = (await $.call($.attr(client, "async_update_nissan_energy_notification_preferences"), ["VIN"], Object.assign({}, {"email_status": true}, {"push_status": null}, {"sms_status": false})));
null_result = (await $.call($.attr(client, "async_update_nissan_energy_notification_preferences"), ["VIN"], Object.assign({}, {"email_status": UNSET}, {"push_status": UNSET}, {"sms_status": UNSET})));
$.assert(($.eq(result, $.call(NissanEnergyNotificationPreferencesUpdate, [], Object.assign({}, {"status_code": "1000"}, {"status_message": null}, {"timestamp": "2026-07-31T18:30:00Z"}, {"preferences": $.call(NissanEnergyNotificationPreferences, [true, null, false], null)})))), "test_energy_notifications.py:190: result == NissanEnergyNotificationPreferencesUpdate(status_code='1000', status_message=None, timestamp='2026-07-31T18:30:00Z', preferences=NissanEnergyNotificationPreferences(True, None, False))");
$.assert(((null_result === null)), "test_energy_notifications.py:196: null_result is None");
$.call(assert_graphql_call, [session, 0, "UpdateNotificationPreferences", Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["emailStatus"]: true}, {["pushStatus"]: null}, {["smsStatus"]: false})})], null);
$.call(assert_graphql_call, [session, 1, "UpdateNotificationPreferences", Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"})})], null);
}

/** Translated upstream test_update_nissan_energy_preferences_respects_read_only_mode. */
export async function test_update_nissan_energy_preferences_respects_read_only_mode(...__args: any[]): any {
let session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr($.call(make_client, [session], null), "async_update_nissan_energy_notification_preferences"), ["VIN"], Object.assign({}, {"push_status": true})));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_energy_notifications.py:227: session.calls == []");
}

/** Translated upstream test_nissan_energy_preferences_reject_malformed_response_fields. */
export async function test_nissan_energy_preferences_reject_malformed_response_fields(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [{}], null), $.call(graphql_response, [Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpAccountStatusData"}, {["notificationPreferences"]: Object.assign({}, {["__typename"]: "EmpNotificationPreferencesData"}, {["emailStatus"]: "yes"})})})})], null)], null);
client = $.call(make_client, [session], null);
await $.raises(ResponseError, "accountStatus is missing", async () => {
(await $.call($.attr(client, "async_get_nissan_energy_notification_preferences"), ["VIN"], null));
});
await $.raises(ResponseError, "emailStatus is not a boolean", async () => {
(await $.call($.attr(client, "async_get_nissan_energy_notification_preferences"), ["VIN"], null));
});
}

$.register("test_energy_notifications.py::test_get_nissan_energy_notification_preferences_uses_exact_contract", test_get_nissan_energy_notification_preferences_uses_exact_contract, []);

$.register("test_energy_notifications.py::test_get_nissan_energy_preferences_preserves_nullable_response_chain", test_get_nissan_energy_preferences_preserves_nullable_response_chain, []);

$.register("test_energy_notifications.py::test_update_nissan_energy_preferences_preserves_patch_values", test_update_nissan_energy_preferences_preserves_patch_values, []);

$.register("test_energy_notifications.py::test_update_nissan_energy_preferences_respects_read_only_mode", test_update_nissan_energy_preferences_respects_read_only_mode, []);

$.register("test_energy_notifications.py::test_nissan_energy_preferences_reject_malformed_response_fields", test_nissan_energy_preferences_reject_malformed_response_fields, []);
