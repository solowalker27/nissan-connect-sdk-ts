// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { EnergyAccountStatus, NissanClient, ReadOnlyError, Tokens, V1GNotificationCategory, V1GNotificationPreferenceInput } from "../src/index";

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

/** Translated upstream graphql_response. */
export function graphql_response(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
return $.call(FakeResponse, [Object.assign({}, {["data"]: $.call($.dict, [data], null)})], null);
}

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {"read_only": true}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token", "id-token"], null)}, {"read_only": read_only}));
}

/** Translated upstream test_energy_and_v1g_client_wires_exact_operations. */
export async function test_energy_and_v1g_client_wires_exact_operations(...__args: any[]): any {
let call, client, payload, payloads, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["accountStatus"]: null})], null), $.call(graphql_response, [Object.assign({}, {["v1GMonitoredChargingAccountStatus"]: null})], null), $.call(graphql_response, [Object.assign({}, {["v1GTokenizedUrl"]: null})], null), $.call(graphql_response, [Object.assign({}, {["vehicles"]: null})], null), $.call(graphql_response, [Object.assign({}, {["v1GEnrollMonitoredChargingPlan"]: null})], null), $.call(graphql_response, [Object.assign({}, {["v1GCancelMonitoredChargingPlan"]: null})], null), $.call(graphql_response, [Object.assign({}, {["v1GUpdateNotificationPreferences"]: null})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
$.assert((((await $.call($.attr(client, "async_get_energy_account_status"), ["VIN"], null)) === null)), "test_energy_client.py:70: await client.async_get_energy_account_status('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_v1g_monitored_charging_account_status"), ["VIN"], null)) === null)), "test_energy_client.py:71: await client.async_get_v1g_monitored_charging_account_status('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_v1g_tokenized_url"), ["VIN"], null)) === null)), "test_energy_client.py:72: await client.async_get_v1g_tokenized_url('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicles_with_capabilities"), [], null)) === null)), "test_energy_client.py:73: await client.async_get_vehicles_with_capabilities() is None");
$.assert((((await $.call($.attr(client, "async_enroll_v1g_monitored_charging_plan"), ["VIN", "ARIYA", "2026"], Object.assign({}, {"plan": "CUSTOM-PLAN"}))) === null)), "test_energy_client.py:74: await client.async_enroll_v1g_monitored_charging_plan('VIN', 'ARIYA', '2026', plan='CUSTOM-PLAN') is None");
$.assert((((await $.call($.attr(client, "async_cancel_v1g_monitored_charging_plan"), ["VIN"], null)) === null)), "test_energy_client.py:83: await client.async_cancel_v1g_monitored_charging_plan('VIN') is None");
$.assert((((await $.call($.attr(client, "async_update_v1g_notification_preferences"), ["VIN"], Object.assign({}, {"preferences": [$.call(V1GNotificationPreferenceInput, [$.attr(V1GNotificationCategory, "MONTHLY_INSIGHTS")], Object.assign({}, {"email_status": null}, {"push_status": true})), null]}))) === null)), "test_energy_client.py:84: await client.async_update_v1g_notification_preferences('VIN', preferences=(V1GNotificationPreferenceInput(V1GNotificationCategory.MONTHLY_INSIGHTS, email_status=None, push_status=True), None)) is None");
payloads = (() => { const __out: any = []; for (const call of $.iterable($.attr(session, "calls"))) { __out.push($.get(call, "json")); } return __out; })();
$.assert($.call($.all, [(() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.call($.isinstance, [payload, Mapping], null)); } return __out; })()], null), "test_energy_client.py:100: all((isinstance(payload, Mapping) for payload in payloads))");
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "operationName")); } return __out; })(), ["AccountStatus", "V1GMonitoredChargingAccountStatus", "V1GTokenizedUrl", "WearableVehicles", "V1GEnrollMonitoredChargingPlan", "V1GCancelMonitoredChargingPlan", "V1GUpdateNotificationPreferences"], "test_energy_client.py:101: [payload['operationName'] for payload in payloads] == ['AccountStatus', 'V1GMonitoredChargingAccountStatus', 'V1GTokenizedUrl', 'WearableVehicles', 'V1GEnrollMonitoredChargingPlan', 'V1GCancelMonitoredChargingPlan', 'V1GUpdateNotificationPreferences']");
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "variables")); } return __out; })(), [Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}), {}, Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["plan"]: "CUSTOM-PLAN"}, {["model"]: "ARIYA"}, {["year"]: "2026"})}), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"})}), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["v1GNotificationPreferences"]: [Object.assign({}, {["v1GNotificationCategory"]: "Monthly Insights"}, {["v1GEmailStatus"]: null}, {["v1GPushStatus"]: true}), null]})})], "test_energy_client.py:110: [payload['variables'] for payload in payloads] == [{'vin': 'VIN'}, {'vin': 'VIN'}, {'vin': 'VIN'}, {}, {'config': {'vin': 'VIN', 'plan': 'CUSTOM-PLAN', 'model': 'ARIYA', 'year': '2026'}}, {'config': {'vin': 'VIN'}}, {'config': {'vin': 'VIN', 'v1GNotificationPreferences': [{'v1GNotificationCategory': 'Monthly Insights', 'v1GEmailStatus': None, 'v1GPushStatus': True}, None]}}]");
}

/** Translated upstream test_v1g_mutations_respect_read_only_before_io. */
export async function test_v1g_mutations_respect_read_only_before_io(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_enroll_v1g_monitored_charging_plan"), ["VIN", "ARIYA", "2026"], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_cancel_v1g_monitored_charging_plan"), ["VIN"], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_update_v1g_notification_preferences"), ["VIN"], null));
});
$.assertEqual($.attr(session, "calls"), [], "test_energy_client.py:151: session.calls == []");
}

/** Translated upstream test_energy_account_waiter_matches_service_retry_states. */
export async function test_energy_account_waiter_matches_service_retry_states(...__args: any[]): any {
let result, session;
let {} = $.bind(__args, [], {}, [], null, null);
/** Translated upstream status_response. */
function status_response(...__args: any[]): any {
let {"status": status} = $.bind(__args, ["status"], {}, [], null, null);
return $.call(graphql_response, [Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpAccountStatusData"}, {["status"]: status})})})], null);
}
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["accountStatus"]: null})], null), $.call(status_response, ["ENROLLING"], null), $.call(status_response, ["ACTIVE"], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_wait_for_energy_account_status"), ["VIN"], Object.assign({}, {"poll_interval_seconds": 0.001}, {"timeout_seconds": 1})));
$.assert(((result !== null)), "test_energy_client.py:180: result is not None");
$.assert((($.attr(result, "data") !== null)), "test_energy_client.py:181: result.data is not None");
$.assert((($.attr($.attr(result, "data"), "status") === $.attr(EnergyAccountStatus, "ACTIVE"))), "test_energy_client.py:182: result.data.status is EnergyAccountStatus.ACTIVE");
$.assertEqual($.call($.len, [$.attr(session, "calls")], null), 3, "test_energy_client.py:183: len(session.calls) == 3");
}

/** Translated upstream test_energy_account_waiter_validates_and_times_out_without_extra_io. */
export async function test_energy_account_waiter_validates_and_times_out_without_extra_io(...__args: any[]): any {
let invalid_client, invalid_session, timeout_session;
let {} = $.bind(__args, [], {}, [], null, null);
invalid_session = $.call(FakeSession, [], null);
invalid_client = $.call(make_client, [invalid_session], null);
await $.raises($.ValueError, "poll_interval_seconds", async () => {
(await $.call($.attr(invalid_client, "async_wait_for_energy_account_status"), ["VIN"], Object.assign({}, {"poll_interval_seconds": 0})));
});
await $.raises($.ValueError, "timeout_seconds", async () => {
(await $.call($.attr(invalid_client, "async_wait_for_energy_account_status"), ["VIN"], Object.assign({}, {"timeout_seconds": $.call($.float, ["nan"], null)})));
});
$.assertEqual($.attr(invalid_session, "calls"), [], "test_energy_client.py:200: invalid_session.calls == []");
timeout_session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["accountStatus"]: null})], null)], null);
await $.raises($.TimeoutError, null, async () => {
(await $.call($.attr($.call(make_client, [timeout_session], null), "async_wait_for_energy_account_status"), ["VIN"], Object.assign({}, {"poll_interval_seconds": 1}, {"timeout_seconds": 0.001})));
});
$.assertEqual($.call($.len, [$.attr(timeout_session, "calls")], null), 1, "test_energy_client.py:209: len(timeout_session.calls) == 1");
}

$.register("test_energy_client.py::test_energy_and_v1g_client_wires_exact_operations", test_energy_and_v1g_client_wires_exact_operations, []);

$.register("test_energy_client.py::test_v1g_mutations_respect_read_only_before_io", test_v1g_mutations_respect_read_only_before_io, []);

$.register("test_energy_client.py::test_energy_account_waiter_matches_service_retry_states", test_energy_account_waiter_matches_service_retry_states, []);

$.register("test_energy_client.py::test_energy_account_waiter_validates_and_times_out_without_extra_io", test_energy_account_waiter_validates_and_times_out_without_extra_io, []);
