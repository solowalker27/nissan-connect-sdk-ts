// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { ClimateParameters, ClimateSettings, ServiceRequest, ServiceRequestKind, ServiceRequestResult, ServiceRequestStatus, TemperatureUnit } from "../src/index";

/** Translated upstream test_start_climate_serializes_accessories_and_returns_request. */
export async function test_start_climate_serializes_accessories_and_returns_request(...__args: any[]): any {
let client, payload, request, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["startClimate"]: Object.assign({}, {["serviceRequestId"]: "request-123"}, {["additionalData"]: Object.assign({}, {["__typename"]: "SetClimateDefaultsResponse"}, {["success"]: true})})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
request = (await $.call($.attr(client, "async_start_climate"), ["JN1TESTVIN", $.call(ClimateSettings, [72.0, $.attr(TemperatureUnit, "FAHRENHEIT"), $.call(ClimateParameters, [], Object.assign({}, {"steering_wheel_heater": true}, {"defrost_and_deicer": false}))], null)], Object.assign({}, {"set_as_default": true})));
$.assertEqual(request, $.call(ServiceRequest, ["request-123", $.attr(ServiceRequestKind, "CLIMATE")], Object.assign({}, {"climate_defaults_success": true})), "test_client_part_09.py:54: request == ServiceRequest('request-123', ServiceRequestKind.CLIMATE, climate_defaults_success=True)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "StartClimate", "test_client_part_09.py:60: payload['operationName'] == 'StartClimate'");
$.assert(($.contains($.get(payload, "query"), "... on SetClimateDefaultsResponse { success }")), "test_client_part_09.py:61: '... on SetClimateDefaultsResponse { success }' in cast(str, payload['query'])");
$.assert(($.contains($.get(payload, "query"), "... on SetClimateDefaultsError { message }")), "test_client_part_09.py:62: '... on SetClimateDefaultsError { message }' in cast(str, payload['query'])");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["climate"]: Object.assign({}, {["unit"]: "FAHRENHEIT"}, {["temperatureValue"]: 72.0})}, {["parameters"]: Object.assign({}, {["steeringWheelHeaterState"]: "ON"}, {["defrostAndDeicerState"]: "OFF"})}, {["setAsDefault"]: true}), "test_client_part_09.py:63: payload['variables'] == {'vin': 'JN1TESTVIN', 'climate': {'unit': 'FAHRENHEIT', 'temperatureValue': 72.0}, 'parameters': {'steeringWheelHeaterState': 'ON', 'defrostAndDeicerState': 'OFF'}, 'setAsDefault': True}");
}

/** Translated upstream test_adjust_climate_returns_climate_defaults_error. */
export async function test_adjust_climate_returns_climate_defaults_error(...__args: any[]): any {
let client, payload, query, request, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["adjustClimate"]: Object.assign({}, {["serviceRequestId"]: "request-adjust"}, {["additionalData"]: Object.assign({}, {["__typename"]: "SetClimateDefaultsError"}, {["message"]: "Defaults could not be saved"})})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
request = (await $.call($.attr(client, "async_adjust_climate"), ["JN1TESTVIN", $.call(ClimateSettings, [22.0, $.attr(TemperatureUnit, "CELSIUS")], null)], Object.assign({}, {"set_as_default": true})));
$.assertEqual(request, $.call(ServiceRequest, ["request-adjust", $.attr(ServiceRequestKind, "CLIMATE")], Object.assign({}, {"climate_defaults_error_message": "Defaults could not be saved"})), "test_client_part_09.py:100: request == ServiceRequest('request-adjust', ServiceRequestKind.CLIMATE, climate_defaults_error_message='Defaults could not be saved')");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "AdjustClimate", "test_client_part_09.py:106: payload['operationName'] == 'AdjustClimate'");
query = $.get(payload, "query");
$.assert(($.contains(query, "... on SetClimateDefaultsResponse { success }")), "test_client_part_09.py:108: '... on SetClimateDefaultsResponse { success }' in query");
$.assert(($.contains(query, "... on SetClimateDefaultsError { message }")), "test_client_part_09.py:109: '... on SetClimateDefaultsError { message }' in query");
}

/** Translated upstream test_start_engine_returns_climate_defaults_result. */
export async function test_start_engine_returns_climate_defaults_result(...__args: any[]): any {
let client, payload, query, request, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["engineStart"]: Object.assign({}, {["serviceRequestId"]: "request-engine"}, {["additionalData"]: Object.assign({}, {["__typename"]: "SetClimateDefaultsResponse"}, {["success"]: false})})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
request = (await $.call($.attr(client, "async_start_engine"), ["JN1TESTVIN"], Object.assign({}, {"climate": $.call(ClimateSettings, [70.0, $.attr(TemperatureUnit, "FAHRENHEIT")], null)}, {"set_as_default": true})));
$.assertEqual(request, $.call(ServiceRequest, ["request-engine", $.attr(ServiceRequestKind, "ENGINE")], Object.assign({}, {"climate_defaults_success": false})), "test_client_part_09.py:138: request == ServiceRequest('request-engine', ServiceRequestKind.ENGINE, climate_defaults_success=False)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "EngineStart", "test_client_part_09.py:144: payload['operationName'] == 'EngineStart'");
query = $.get(payload, "query");
$.assert(($.contains(query, "... on SetClimateDefaultsResponse { success }")), "test_client_part_09.py:146: '... on SetClimateDefaultsResponse { success }' in query");
$.assert(($.contains(query, "... on SetClimateDefaultsError { message }")), "test_client_part_09.py:147: '... on SetClimateDefaultsError { message }' in query");
}

/** Translated upstream test_request_status_check_is_allowed_in_read_only_mode. */
export async function test_request_status_check_is_allowed_in_read_only_mode(...__args: any[]): any {
let client, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkRemoteClimateRequest"]: Object.assign({}, {["status"]: "PENDING"})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_check_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["request-123", $.attr(ServiceRequestKind, "CLIMATE")], null)], null));
$.assertEqual($.attr($.attr(result, "status"), "value"), "PENDING", "test_client_part_09.py:165: result.status.value == 'PENDING'");
}

/** Translated upstream test_service_request_result_status_properties_cover_all_known_statuses. */
export function test_service_request_result_status_properties_cover_all_known_statuses(...__args: any[]): any {
let failed, pending_without_status, result, status, successful;
let {} = $.bind(__args, [], {}, [], null, null);
successful = new Set([$.attr(ServiceRequestStatus, "SUCCESS"), $.attr(ServiceRequestStatus, "SUCCESS_EXECUTION_CONFIRMED"), $.attr(ServiceRequestStatus, "CANCELLATION_SUCCESS"), $.attr(ServiceRequestStatus, "CANCEL_UPDATE_SUCCESS"), $.attr(ServiceRequestStatus, "UPDATE_SUCCESS")]);
failed = new Set([$.attr(ServiceRequestStatus, "FAILED"), $.attr(ServiceRequestStatus, "CANCELLATION_FAILED"), $.attr(ServiceRequestStatus, "CANCEL_UPDATE_FAILED"), $.attr(ServiceRequestStatus, "UPDATE_FAILED")]);
for (status of $.iterable(ServiceRequestStatus)) {
result = $.call(ServiceRequestResult, [status], null);
$.assert((($.attr(result, "is_terminal") === ($.contains($.union(successful, failed), status)))), "test_client_part_09.py:186: result.is_terminal is (status in successful | failed)");
$.assert((($.attr(result, "is_success") === ($.contains(successful, status)))), "test_client_part_09.py:187: result.is_success is (status in successful)");
}
pending_without_status = $.call(ServiceRequestResult, [null], null);
$.assert((($.attr(pending_without_status, "is_terminal") === false)), "test_client_part_09.py:190: pending_without_status.is_terminal is False");
$.assert((($.attr(pending_without_status, "is_success") === false)), "test_client_part_09.py:191: pending_without_status.is_success is False");
}

/** Translated upstream test_wait_for_service_request_checks_immediately_and_sleeps_between_checks. */
export async function test_wait_for_service_request_checks_immediately_and_sleeps_between_checks(...__args: any[]): any {
let client, result, session, sleep_calls;
let {"monkeypatch": monkeypatch} = $.bind(__args, ["monkeypatch"], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkRemoteClimateRequest"]: Object.assign({}, {["status"]: "PENDING"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkRemoteClimateRequest"]: Object.assign({}, {["status"]: "SENT"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkRemoteClimateRequest"]: Object.assign({}, {["status"]: "SUCCESS"})})})], null)], null);
client = $.call(make_client, [session], null);
sleep_calls = [];
/** Translated upstream fake_sleep. */
async function fake_sleep(...__args: any[]): any {
let {"delay": delay} = $.bind(__args, ["delay"], {}, [], null, null);
$.call($.attr(sleep_calls, "append"), [delay], null);
$.assertEqual($.call($.len, [$.attr(session, "calls")], null), $.call($.len, [sleep_calls], null), "test_client_part_09.py:208: len(session.calls) == len(sleep_calls)");
}
$.call($.attr(monkeypatch, "setattr"), ["pynissan._client_base.asyncio.sleep", fake_sleep], null);
result = (await $.call($.attr(client, "async_wait_for_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["request-123", $.attr(ServiceRequestKind, "CLIMATE")], null)], Object.assign({}, {"poll_interval_seconds": 2.5})));
$.assert((($.attr(result, "status") === $.attr(ServiceRequestStatus, "SUCCESS"))), "test_client_part_09.py:218: result.status is ServiceRequestStatus.SUCCESS");
$.assert((($.attr(result, "is_terminal") === true)), "test_client_part_09.py:219: result.is_terminal is True");
$.assert((($.attr(result, "is_success") === true)), "test_client_part_09.py:220: result.is_success is True");
$.assertEqual(sleep_calls, [2.5, 2.5], "test_client_part_09.py:221: sleep_calls == [2.5, 2.5]");
$.assertEqual($.call($.len, [$.attr(session, "calls")], null), 3, "test_client_part_09.py:222: len(session.calls) == 3");
}

/** Translated upstream test_wait_for_service_request_returns_terminal_failure_without_sleep. */
export async function test_wait_for_service_request_returns_terminal_failure_without_sleep(...__args: any[]): any {
let client, result, session;
let {"monkeypatch": monkeypatch} = $.bind(__args, ["monkeypatch"], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkEngineServiceRequest"]: Object.assign({}, {["status"]: "FAILED"})})})], null)], null);
client = $.call(make_client, [session], null);
/** Translated upstream fail_if_called. */
async function fail_if_called(...__args: any[]): any {
let {"delay": delay} = $.bind(__args, ["delay"], {}, [], null, null);
throw $.call($.AssertionError, [("unexpected sleep for " + $.str(delay) + " seconds")], null);
}
$.call($.attr(monkeypatch, "setattr"), ["pynissan._client_base.asyncio.sleep", fail_if_called], null);
result = (await $.call($.attr(client, "async_wait_for_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["request-engine", $.attr(ServiceRequestKind, "ENGINE")], null)], null));
$.assert((($.attr(result, "status") === $.attr(ServiceRequestStatus, "FAILED"))), "test_client_part_09.py:244: result.status is ServiceRequestStatus.FAILED");
$.assert((($.attr(result, "is_terminal") === true)), "test_client_part_09.py:245: result.is_terminal is True");
$.assert((($.attr(result, "is_success") === false)), "test_client_part_09.py:246: result.is_success is False");
$.assertEqual($.call($.len, [$.attr(session, "calls")], null), 1, "test_client_part_09.py:247: len(session.calls) == 1");
}

/** Translated upstream test_route_waiter_continues_through_unknown_status. */
export async function test_route_waiter_continues_through_unknown_status(...__args: any[]): any {
let client, result, session, sleep_calls;
let {"monkeypatch": monkeypatch} = $.bind(__args, ["monkeypatch"], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkRouteServiceRequest"]: Object.assign({}, {["status"]: "UNKNOWN__"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkRouteServiceRequest"]: Object.assign({}, {["status"]: "SUCCESS"})})})], null)], null);
client = $.call(make_client, [session], null);
sleep_calls = [];
/** Translated upstream fake_sleep. */
async function fake_sleep(...__args: any[]): any {
let {"delay": delay} = $.bind(__args, ["delay"], {}, [], null, null);
$.call($.attr(sleep_calls, "append"), [delay], null);
}
$.call($.attr(monkeypatch, "setattr"), ["pynissan._client_base.asyncio.sleep", fake_sleep], null);
result = (await $.call($.attr(client, "async_wait_for_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["route-request", $.attr(ServiceRequestKind, "ROUTE")], null)], Object.assign({}, {"poll_interval_seconds": 1.5})));
$.assert((($.attr(result, "status") === $.attr(ServiceRequestStatus, "SUCCESS"))), "test_client_part_09.py:278: result.status is ServiceRequestStatus.SUCCESS");
$.assertEqual(sleep_calls, [1.5], "test_client_part_09.py:279: sleep_calls == [1.5]");
}

/** Translated upstream test_wait_for_service_request_validates_timings_before_network. */
export async function test_wait_for_service_request_validates_timings_before_network(...__args: any[]): any {
let client, session;
let {"poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds} = $.bind(__args, ["poll_interval_seconds", "timeout_seconds"], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises($.ValueError, "positive finite number", async () => {
(await $.call($.attr(client, "async_wait_for_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["request-123", $.attr(ServiceRequestKind, "CLIMATE")], null)], Object.assign({}, {"poll_interval_seconds": poll_interval_seconds}, {"timeout_seconds": timeout_seconds})));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_09.py:311: session.calls == []");
}

/** Translated upstream test_v2l_request_status_uses_matching_check_operation. */
export async function test_v2l_request_status_uses_matching_check_operation(...__args: any[]): any {
let client, payload, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkV2LServiceRequest"]: Object.assign({}, {["status"]: "SUCCESS"})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_check_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["request-v2l", $.attr(ServiceRequestKind, "V2L")], null)], null));
$.assertEqual($.attr($.attr(result, "status"), "value"), "SUCCESS", "test_client_part_09.py:329: result.status.value == 'SUCCESS'");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "CheckV2LServiceRequest", "test_client_part_09.py:331: payload['operationName'] == 'CheckV2LServiceRequest'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["serviceRequestId"]: "request-v2l"}), "test_client_part_09.py:332: payload['variables'] == {'vin': 'JN1TESTVIN', 'serviceRequestId': 'request-v2l'}");
}

$.register("test_client_part_09.py::test_start_climate_serializes_accessories_and_returns_request", test_start_climate_serializes_accessories_and_returns_request, []);

$.register("test_client_part_09.py::test_adjust_climate_returns_climate_defaults_error", test_adjust_climate_returns_climate_defaults_error, []);

$.register("test_client_part_09.py::test_start_engine_returns_climate_defaults_result", test_start_engine_returns_climate_defaults_result, []);

$.register("test_client_part_09.py::test_request_status_check_is_allowed_in_read_only_mode", test_request_status_check_is_allowed_in_read_only_mode, []);

$.register("test_client_part_09.py::test_service_request_result_status_properties_cover_all_known_statuses", test_service_request_result_status_properties_cover_all_known_statuses, []);

$.register("test_client_part_09.py::test_wait_for_service_request_checks_immediately_and_sleeps_between_checks", test_wait_for_service_request_checks_immediately_and_sleeps_between_checks, []);

$.register("test_client_part_09.py::test_wait_for_service_request_returns_terminal_failure_without_sleep", test_wait_for_service_request_returns_terminal_failure_without_sleep, []);

$.register("test_client_part_09.py::test_route_waiter_continues_through_unknown_status", test_route_waiter_continues_through_unknown_status, []);

$.register("test_client_part_09.py::test_wait_for_service_request_validates_timings_before_network", test_wait_for_service_request_validates_timings_before_network, [[["poll_interval_seconds", "timeout_seconds"], [[0.0, 210.0], [-(1.0), 210.0], [$.call($.float, ["nan"], null), 210.0], [$.call($.float, ["inf"], null), 210.0], [3.0, 0.0], [3.0, -(1.0)], [3.0, $.call($.float, ["nan"], null)], [3.0, $.call($.float, ["inf"], null)]]]]);

$.register("test_client_part_09.py::test_v2l_request_status_uses_matching_check_operation", test_v2l_request_status_uses_matching_check_operation, []);
