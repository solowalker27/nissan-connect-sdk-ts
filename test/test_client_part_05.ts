// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { DataPrivacyMode, ReadOnlyError, ReminderNotificationsAfterLeavingVehicle, ResponseError, VehicleAlertKind, VehicleAlertRequest, VehicleWifiConsumption } from "../src/index";

/** Translated upstream test_wait_for_alert_request_uses_returned_operation_id. */
export async function test_wait_for_alert_request_uses_returned_operation_id(...__args: any[]): any {
let client, payload, session, status;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["boundaryAlert"]: Object.assign({}, {["status"]: "SUCCESS"})})})})], null)], null);
client = $.call(make_client, [session], null);
status = (await $.call($.attr(client, "async_wait_for_alert_request"), ["JN1TESTVIN", $.call(VehicleAlertRequest, ["operation-2", $.attr(VehicleAlertKind, "BOUNDARY")], null)], null));
$.assertEqual(status, "SUCCESS", "test_client_part_05.py:39: status == 'SUCCESS'");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["serviceRequestId"]: "operation-2"}), "test_client_part_05.py:41: payload['variables'] == {'vin': 'JN1TESTVIN', 'serviceRequestId': 'operation-2'}");
}

/** Translated upstream test_get_reminder_notifications_after_leaving_vehicle_parses_service_contract. */
export async function test_get_reminder_notifications_after_leaving_vehicle_parses_service_contract(...__args: any[]): any {
let field, payload, query, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["reminderNotificationsAfterLeavingVehicle"]: Object.assign({}, {["lock"]: true}, {["door"]: false}, {["trunk"]: null}, {["sunroof"]: true}, {["window"]: false})})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_get_reminder_notifications_after_leaving_vehicle"), ["JN1TESTVIN"], null));
$.assertEqual(result, $.call(ReminderNotificationsAfterLeavingVehicle, [], Object.assign({}, {"lock": true}, {"door": false}, {"trunk": null}, {"sunroof": true}, {"window": false})), "test_client_part_05.py:72: result == ReminderNotificationsAfterLeavingVehicle(lock=True, door=False, trunk=None, sunroof=True, window=False)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "ReminderNotificationsAfterLeavingVehicle", "test_client_part_05.py:80: payload['operationName'] == 'ReminderNotificationsAfterLeavingVehicle'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}), "test_client_part_05.py:81: payload['variables'] == {'vin': 'JN1TESTVIN'}");
query = $.get(payload, "query");
$.assert(($.contains(query, "... on BaseAVK2Vehicle")), "test_client_part_05.py:83: '... on BaseAVK2Vehicle' in query");
$.assert(($.contains(query, "reminderNotificationsAfterLeavingVehicle")), "test_client_part_05.py:84: 'reminderNotificationsAfterLeavingVehicle' in query");
$.assert($.call($.all, [(() => { const __out: any = []; for (const field of $.iterable(["lock", "door", "trunk", "sunroof", "window"])) { __out.push(($.contains(query, field))); } return __out; })()], null), "test_client_part_05.py:85: all((field in query for field in ('lock', 'door', 'trunk', 'sunroof', 'window')))");
}

/** Translated upstream test_get_reminder_notifications_preserves_nullable_response_chain. */
export async function test_get_reminder_notifications_preserves_nullable_response_chain(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["reminderNotificationsAfterLeavingVehicle"]: null})})})], null)], null);
client = $.call(make_client, [session], null);
$.assert((((await $.call($.attr(client, "async_get_reminder_notifications_after_leaving_vehicle"), ["VIN"], null)) === null)), "test_client_part_05.py:106: await client.async_get_reminder_notifications_after_leaving_vehicle('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_reminder_notifications_after_leaving_vehicle"), ["VIN"], null)) === null)), "test_client_part_05.py:107: await client.async_get_reminder_notifications_after_leaving_vehicle('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_reminder_notifications_after_leaving_vehicle"), ["VIN"], null)) === null)), "test_client_part_05.py:108: await client.async_get_reminder_notifications_after_leaving_vehicle('VIN') is None");
}

/** Translated upstream test_toggle_reminder_notifications_sends_only_supplied_patch_fields. */
export async function test_toggle_reminder_notifications_sends_only_supplied_patch_fields(...__args: any[]): any {
let payload, query, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["toggleReminderNotificationsAfterLeavingVehicle"]: Object.assign({}, {["success"]: false})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], Object.assign({}, {"read_only": false})), "async_toggle_reminder_notifications_after_leaving_vehicle"), ["JN1TESTVIN"], Object.assign({}, {"enable_door": false}, {"enable_window": true})));
$.assert(((result === false)), "test_client_part_05.py:135: result is False");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "ToggleReminderNotificationsAfterLeavingVehicle", "test_client_part_05.py:137: payload['operationName'] == 'ToggleReminderNotificationsAfterLeavingVehicle'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["reminderNotifications"]: Object.assign({}, {["enableDoor"]: false}, {["enableWindow"]: true})}), "test_client_part_05.py:138: payload['variables'] == {'vin': 'JN1TESTVIN', 'reminderNotifications': {'enableDoor': False, 'enableWindow': True}}");
query = $.get(payload, "query");
$.assert(($.contains(query, "$reminderNotifications: ToggleReminderNotificationsAfterLeavingVehicleInput!")), "test_client_part_05.py:146: '$reminderNotifications: ToggleReminderNotificationsAfterLeavingVehicleInput!' in query");
$.assert(($.contains(query, "toggleReminderNotificationsAfterLeavingVehicle")), "test_client_part_05.py:147: 'toggleReminderNotificationsAfterLeavingVehicle' in query");
}

/** Translated upstream test_toggle_reminder_notifications_preserves_nullable_success. */
export async function test_toggle_reminder_notifications_preserves_nullable_success(...__args: any[]): any {
let client, missing_result, nullable_success, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["toggleReminderNotificationsAfterLeavingVehicle"]: null})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["toggleReminderNotificationsAfterLeavingVehicle"]: Object.assign({}, {["success"]: null})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
missing_result = (await $.call($.attr(client, "async_toggle_reminder_notifications_after_leaving_vehicle"), ["VIN"], Object.assign({}, {"enable_lock": true})));
nullable_success = (await $.call($.attr(client, "async_toggle_reminder_notifications_after_leaving_vehicle"), ["VIN"], Object.assign({}, {"enable_lock": false})));
$.assert(((missing_result === null)), "test_client_part_05.py:179: missing_result is None");
$.assert(((nullable_success === null)), "test_client_part_05.py:180: nullable_success is None");
}

/** Translated upstream test_toggle_reminder_notifications_rejects_empty_patch_before_io. */
export async function test_toggle_reminder_notifications_rejects_empty_patch_before_io(...__args: any[]): any {
let session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
await $.raises($.ValueError, "At least one reminder notification setting", async () => {
(await $.call($.attr($.call(make_client, [session], Object.assign({}, {"read_only": false})), "async_toggle_reminder_notifications_after_leaving_vehicle"), ["VIN"], null));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_05.py:193: session.calls == []");
}

/** Translated upstream test_toggle_reminder_notifications_respects_read_only_mode. */
export async function test_toggle_reminder_notifications_respects_read_only_mode(...__args: any[]): any {
let session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr($.call(make_client, [session], null), "async_toggle_reminder_notifications_after_leaving_vehicle"), ["VIN"], Object.assign({}, {"enable_trunk": true})));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_05.py:206: session.calls == []");
}

/** Translated upstream test_get_vehicle_data_privacy_mode_is_typed_without_on_fallback. */
export async function test_get_vehicle_data_privacy_mode_is_typed_without_on_fallback(...__args: any[]): any {
let client, payload, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["dataPrivacyMode"]: "OFF"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["dataPrivacyMode"]: "FUTURE_MODE"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null)], null);
client = $.call(make_client, [session], null);
$.assert((((await $.call($.attr(client, "async_get_vehicle_data_privacy_mode"), ["VIN"], null)) === $.attr(DataPrivacyMode, "OFF"))), "test_client_part_05.py:218: await client.async_get_vehicle_data_privacy_mode('VIN') is DataPrivacyMode.OFF");
$.assert((((await $.call($.attr(client, "async_get_vehicle_data_privacy_mode"), ["VIN"], null)) === $.attr(DataPrivacyMode, "UNKNOWN_VALUE"))), "test_client_part_05.py:219: await client.async_get_vehicle_data_privacy_mode('VIN') is DataPrivacyMode.UNKNOWN_VALUE");
$.assert((((await $.call($.attr(client, "async_get_vehicle_data_privacy_mode"), ["VIN"], null)) === null)), "test_client_part_05.py:220: await client.async_get_vehicle_data_privacy_mode('VIN') is None");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "VehicleDataPrivacyMode", "test_client_part_05.py:223: payload['operationName'] == 'VehicleDataPrivacyMode'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "VIN"}), "test_client_part_05.py:224: payload['variables'] == {'vin': 'VIN'}");
$.assert(($.contains($.get(payload, "query"), "dataPrivacyMode")), "test_client_part_05.py:225: 'dataPrivacyMode' in cast(str, payload['query'])");
}

/** Translated upstream test_get_vehicle_data_privacy_mode_requires_field_when_vehicle_exists. */
export async function test_get_vehicle_data_privacy_mode_requires_field_when_vehicle_exists(...__args: any[]): any {
let session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["dataPrivacyMode"]: null})})})], null)], null);
await $.raises(ResponseError, "vehicle\\.dataPrivacyMode", async () => {
(await $.call($.attr($.call(make_client, [session], null), "async_get_vehicle_data_privacy_mode"), ["VIN"], null));
});
}

/** Translated upstream test_get_vehicle_wifi_consumption_parses_required_gigabyte_values. */
export async function test_get_vehicle_wifi_consumption_parses_required_gigabyte_values(...__args: any[]): any {
let field, payload, query, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["capabilities"]: Object.assign({}, {["wifiConsumption"]: Object.assign({}, {["usagePercent"]: 12.5}, {["usageAmount"]: 1}, {["dataCapAmount"]: 8.0}, {["updatedAt"]: "2026-07-31T22:15:00Z"})})})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_get_vehicle_wifi_consumption"), ["JN1TESTVIN"], null));
$.assert(((result !== null)), "test_client_part_05.py:260: result is not None");
$.assertEqual(result, $.call(VehicleWifiConsumption, [], Object.assign({}, {"usage_percent": 12.5}, {"usage_amount_gb": 1.0}, {"data_cap_amount_gb": 8.0}, {"updated_at": $.attr(result, "updated_at")})), "test_client_part_05.py:261: result == VehicleWifiConsumption(usage_percent=12.5, usage_amount_gb=1.0, data_cap_amount_gb=8.0, updated_at=result.updated_at)");
$.assertEqual($.call($.attr($.attr(result, "updated_at"), "isoformat"), [], null), "2026-07-31T22:15:00+00:00", "test_client_part_05.py:267: result.updated_at.isoformat() == '2026-07-31T22:15:00+00:00'");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "VehicleWifiConsumption", "test_client_part_05.py:269: payload['operationName'] == 'VehicleWifiConsumption'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}), "test_client_part_05.py:270: payload['variables'] == {'vin': 'JN1TESTVIN'}");
query = $.get(payload, "query");
$.assert(($.contains(query, "wifiConsumption")), "test_client_part_05.py:272: 'wifiConsumption' in query");
$.assert($.call($.all, [(() => { const __out: any = []; for (const field of $.iterable(["usagePercent", "usageAmount", "dataCapAmount", "updatedAt"])) { __out.push(($.contains(query, field))); } return __out; })()], null), "test_client_part_05.py:273: all((field in query for field in ('usagePercent', 'usageAmount', 'dataCapAmount', 'updatedAt')))");
}

/** Translated upstream test_get_vehicle_wifi_consumption_preserves_nullable_response_chain. */
export async function test_get_vehicle_wifi_consumption_preserves_nullable_response_chain(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["capabilities"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["capabilities"]: Object.assign({}, {["wifiConsumption"]: null})})})})], null)], null);
client = $.call(make_client, [session], null);
$.assert((((await $.call($.attr(client, "async_get_vehicle_wifi_consumption"), ["VIN"], null)) === null)), "test_client_part_05.py:290: await client.async_get_vehicle_wifi_consumption('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_wifi_consumption"), ["VIN"], null)) === null)), "test_client_part_05.py:291: await client.async_get_vehicle_wifi_consumption('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_wifi_consumption"), ["VIN"], null)) === null)), "test_client_part_05.py:292: await client.async_get_vehicle_wifi_consumption('VIN') is None");
}

/** Translated upstream test_get_vehicle_wifi_consumption_requires_inner_fields. */
export async function test_get_vehicle_wifi_consumption_requires_inner_fields(...__args: any[]): any {
let session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["capabilities"]: Object.assign({}, {["wifiConsumption"]: Object.assign({}, {["usagePercent"]: 12.5}, {["usageAmount"]: 1.0}, {["dataCapAmount"]: 8.0}, {["updatedAt"]: null})})})})})], null)], null);
await $.raises(ResponseError, "wifiConsumption\\.updatedAt", async () => {
(await $.call($.attr($.call(make_client, [session], null), "async_get_vehicle_wifi_consumption"), ["VIN"], null));
});
}

$.register("test_client_part_05.py::test_wait_for_alert_request_uses_returned_operation_id", test_wait_for_alert_request_uses_returned_operation_id, []);

$.register("test_client_part_05.py::test_get_reminder_notifications_after_leaving_vehicle_parses_service_contract", test_get_reminder_notifications_after_leaving_vehicle_parses_service_contract, []);

$.register("test_client_part_05.py::test_get_reminder_notifications_preserves_nullable_response_chain", test_get_reminder_notifications_preserves_nullable_response_chain, []);

$.register("test_client_part_05.py::test_toggle_reminder_notifications_sends_only_supplied_patch_fields", test_toggle_reminder_notifications_sends_only_supplied_patch_fields, []);

$.register("test_client_part_05.py::test_toggle_reminder_notifications_preserves_nullable_success", test_toggle_reminder_notifications_preserves_nullable_success, []);

$.register("test_client_part_05.py::test_toggle_reminder_notifications_rejects_empty_patch_before_io", test_toggle_reminder_notifications_rejects_empty_patch_before_io, []);

$.register("test_client_part_05.py::test_toggle_reminder_notifications_respects_read_only_mode", test_toggle_reminder_notifications_respects_read_only_mode, []);

$.register("test_client_part_05.py::test_get_vehicle_data_privacy_mode_is_typed_without_on_fallback", test_get_vehicle_data_privacy_mode_is_typed_without_on_fallback, []);

$.register("test_client_part_05.py::test_get_vehicle_data_privacy_mode_requires_field_when_vehicle_exists", test_get_vehicle_data_privacy_mode_requires_field_when_vehicle_exists, []);

$.register("test_client_part_05.py::test_get_vehicle_wifi_consumption_parses_required_gigabyte_values", test_get_vehicle_wifi_consumption_parses_required_gigabyte_values, []);

$.register("test_client_part_05.py::test_get_vehicle_wifi_consumption_preserves_nullable_response_chain", test_get_vehicle_wifi_consumption_preserves_nullable_response_chain, []);

$.register("test_client_part_05.py::test_get_vehicle_wifi_consumption_requires_inner_fields", test_get_vehicle_wifi_consumption_requires_inner_fields, []);
