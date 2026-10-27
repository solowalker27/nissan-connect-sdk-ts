// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { DataWipeType, NotificationCategory, NotificationDestination, NotificationPreferenceInput, NotificationTypeInput, ReadOnlyError, ResponseError, ServiceRequest, ServiceRequestKind, ServiceRequestResult, ServiceRequestStatus } from "../src/index";

/** Translated upstream test_download_ota_update_surfaces_operation_in_progress_error. */
export async function test_download_ota_update_surfaces_operation_in_progress_error(...__args: any[]): any {
let session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["downloadOTAUpdate"]: Object.assign({}, {["__typename"]: "OperationInProgressError"}, {["message"]: "Another operation is active"})})})], null)], null);
await $.raises(ResponseError, "Another operation is active", async () => {
(await $.call($.attr($.call(make_client, [session], Object.assign({}, {"read_only": false})), "async_download_ota_update"), ["JN1TESTVIN", "ota-1"], null));
});
}

/** Translated upstream test_data_wipe_preserves_omitted_null_and_enum_inputs. */
export async function test_data_wipe_preserves_omitted_null_and_enum_inputs(...__args: any[]): any {
let $null, call, client, omitted, session, tcu, variables;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["dataWipe"]: Object.assign({}, {["serviceRequestId"]: "wipe-1"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["dataWipe"]: Object.assign({}, {["serviceRequestId"]: "wipe-2"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["dataWipe"]: Object.assign({}, {["serviceRequestId"]: "wipe-3"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
omitted = (await $.call($.attr(client, "async_wipe_vehicle_data"), ["JN1TESTVIN"], null));
$null = (await $.call($.attr(client, "async_wipe_vehicle_data"), ["JN1TESTVIN"], Object.assign({}, {"data_wipe_type": null})));
tcu = (await $.call($.attr(client, "async_wipe_vehicle_data"), ["JN1TESTVIN"], Object.assign({}, {"data_wipe_type": $.attr(DataWipeType, "TCU_WIPE")})));
$.assert(($.eq(omitted, $.call(ServiceRequest, ["wipe-1", $.attr(ServiceRequestKind, "DATA_WIPE")], null))), "test_client_part_15.py:68: omitted == ServiceRequest('wipe-1', ServiceRequestKind.DATA_WIPE)");
$.assert(($.eq($null, $.call(ServiceRequest, ["wipe-2", $.attr(ServiceRequestKind, "DATA_WIPE")], null))), "test_client_part_15.py:69: null == ServiceRequest('wipe-2', ServiceRequestKind.DATA_WIPE)");
$.assert(($.eq(tcu, $.call(ServiceRequest, ["wipe-3", $.attr(ServiceRequestKind, "DATA_WIPE")], null))), "test_client_part_15.py:70: tcu == ServiceRequest('wipe-3', ServiceRequestKind.DATA_WIPE)");
variables = (() => { const __out: any = []; for (const call of $.iterable($.attr(session, "calls"))) { __out.push($.get($.get(call, "json"), "variables")); } return __out; })();
$.assert(($.eq(variables, [Object.assign({}, {["vin"]: "JN1TESTVIN"}), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["dataWipeType"]: null}), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["dataWipeType"]: "TCU_WIPE"})])), "test_client_part_15.py:75: variables == [{'vin': 'JN1TESTVIN'}, {'vin': 'JN1TESTVIN', 'dataWipeType': None}, {'vin': 'JN1TESTVIN', 'dataWipeType': 'TCU_WIPE'}]");
await $.raises(ResponseError, "does not expose a status operation for data_wipe requests", async () => {
(await $.call($.attr(client, "async_check_service_request"), ["JN1TESTVIN", tcu], null));
});
$.assert(($.eq($.call($.len, [$.attr(session, "calls")], null), 3)), "test_client_part_15.py:86: len(session.calls) == 3");
}

/** Translated upstream test_check_ota_service_request_uses_exact_poller. */
export async function test_check_ota_service_request_uses_exact_poller(...__args: any[]): any {
let client, payload, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkOtaUpdateServiceRequest"]: Object.assign({}, {["status"]: null})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_check_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["ota-request", $.attr(ServiceRequestKind, "OTA")], null)], null));
$.assert(($.eq(result, $.call(ServiceRequestResult, [], Object.assign({}, {"status": null})))), "test_client_part_15.py:104: result == ServiceRequestResult(status=None)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(payload, "operationName"), "CheckOtaUpdateServiceRequest")), "test_client_part_15.py:106: payload['operationName'] == 'CheckOtaUpdateServiceRequest'");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["serviceRequestId"]: "ota-request"}))), "test_client_part_15.py:107: payload['variables'] == {'vin': 'JN1TESTVIN', 'serviceRequestId': 'ota-request'}");
}

/** Translated upstream test_wait_for_ota_request_accepts_common_terminal_statuses. */
export async function test_wait_for_ota_request_accepts_common_terminal_statuses(...__args: any[]): any {
let client, result, session;
let {"terminal_status": terminal_status} = $.bind(__args, ["terminal_status"], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkOtaUpdateServiceRequest"]: Object.assign({}, {["status"]: terminal_status})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_wait_for_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["ota-request", $.attr(ServiceRequestKind, "OTA")], null)], Object.assign({}, {"poll_interval_seconds": 0.001}, {"timeout_seconds": 1})));
$.assert(($.eq($.attr(result, "status"), $.call(ServiceRequestStatus, [terminal_status], null))), "test_client_part_15.py:136: result.status == ServiceRequestStatus(terminal_status)");
$.assert(($.eq($.call($.len, [$.attr(session, "calls")], null), 1)), "test_client_part_15.py:137: len(session.calls) == 1");
}

/** Translated upstream test_ota_and_notification_writes_respect_read_only_mode. */
export async function test_ota_and_notification_writes_respect_read_only_mode(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_download_ota_update"), ["JN1TESTVIN", "ota-1"], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_wipe_vehicle_data"), ["JN1TESTVIN"], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_set_notification_preferences"), ["JN1TESTVIN", []], null));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_client_part_15.py:152: session.calls == []");
}

/** Translated upstream test_ota_and_notification_inputs_reject_invalid_values_before_io. */
export async function test_ota_and_notification_inputs_reject_invalid_values_before_io(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_wipe_vehicle_data"), ["JN1TESTVIN"], Object.assign({}, {"data_wipe_type": $.attr(DataWipeType, "UNKNOWN_VALUE")})));
});
await $.raises($.ValueError, "UTC offset", async () => {
(await $.call($.attr(client, "async_schedule_ota_activation"), ["JN1TESTVIN", "ota-1", $.call(datetime, [2026, 8, 5, 18, 0], null)], null));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_set_notification_preferences"), ["JN1TESTVIN", [$.call(NotificationPreferenceInput, [$.attr(NotificationCategory, "UNKNOWN_VALUE"), []], null)]], null));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_set_notification_preferences"), ["JN1TESTVIN", [$.call(NotificationPreferenceInput, [$.attr(NotificationCategory, "ENGINE"), [$.call(NotificationTypeInput, [$.attr(NotificationDestination, "UNKNOWN_VALUE"), true], null)]], null)]], null));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_client_part_15.py:197: session.calls == []");
}

$.register("test_client_part_15.py::test_download_ota_update_surfaces_operation_in_progress_error", test_download_ota_update_surfaces_operation_in_progress_error, []);

$.register("test_client_part_15.py::test_data_wipe_preserves_omitted_null_and_enum_inputs", test_data_wipe_preserves_omitted_null_and_enum_inputs, []);

$.register("test_client_part_15.py::test_check_ota_service_request_uses_exact_poller", test_check_ota_service_request_uses_exact_poller, []);

$.register("test_client_part_15.py::test_wait_for_ota_request_accepts_common_terminal_statuses", test_wait_for_ota_request_accepts_common_terminal_statuses, [["terminal_status", ["UPDATE_SUCCESS", "CANCELLATION_SUCCESS"]]]);

$.register("test_client_part_15.py::test_ota_and_notification_writes_respect_read_only_mode", test_ota_and_notification_writes_respect_read_only_mode, []);

$.register("test_client_part_15.py::test_ota_and_notification_inputs_reject_invalid_values_before_io", test_ota_and_notification_inputs_reject_invalid_values_before_io, []);
