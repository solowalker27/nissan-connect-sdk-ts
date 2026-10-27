// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



import { FakeSession, assert_graphql_call, graphql_response, make_client } from "./test_pnc";

import { PlugAndChargeCertificateRetryResult, PlugAndChargeServiceData, PlugAndChargeServiceState, PlugAndChargeServiceStatus, PlugAndChargeStatusInput, PublicChargeLocationCoordinates, PublicChargeSessionData, PublicChargeSessionStartData, PublicChargeSessionStartResult, PublicChargeSessionState, PublicChargeSessionStatus, PublicChargeSessionStopResult } from "../src/index";

/** Translated upstream test_get_pnc_service_status_parses_nullable_enrollment_data. */
export async function test_get_pnc_service_status_parses_nullable_enrollment_data(...__args: any[]): any {
let client, result, session, unknown;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["pncServiceStatus"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "2026-07-31T19:00:00Z"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusData"}, {["vin"]: "VIN"}, {["pncServiceStatus"]: "ENABLED"})})})], null), $.call(graphql_response, [Object.assign({}, {["pncServiceStatus"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusData"}, {["pncServiceStatus"]: "FUTURE_STATE"})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_get_pnc_service_status"), ["VIN"], null));
unknown = (await $.call($.attr(client, "async_get_pnc_service_status"), ["VIN"], null));
$.assertEqual(result, $.call(PlugAndChargeServiceStatus, [], Object.assign({}, {"status_code": "1000"}, {"status_message": null}, {"timestamp": "2026-07-31T19:00:00Z"}, {"data": $.call(PlugAndChargeServiceData, ["VIN", $.attr(PlugAndChargeServiceState, "ENABLED")], null)})), "test_pnc_part_01.py:60: result == PlugAndChargeServiceStatus(status_code='1000', status_message=None, timestamp='2026-07-31T19:00:00Z', data=PlugAndChargeServiceData('VIN', PlugAndChargeServiceState.ENABLED))");
$.assert(((unknown !== null)), "test_pnc_part_01.py:66: unknown is not None");
$.assertEqual($.attr(unknown, "data"), $.call(PlugAndChargeServiceData, [null, $.attr(PlugAndChargeServiceState, "UNKNOWN_VALUE")], null), "test_pnc_part_01.py:67: unknown.data == PlugAndChargeServiceData(None, PlugAndChargeServiceState.UNKNOWN_VALUE)");
$.call(assert_graphql_call, [session, 0, "PNCServiceStatus", Object.assign({}, {["vin"]: "VIN"})], null);
}

/** Translated upstream test_get_public_charge_session_status_parses_service_contract. */
export async function test_get_public_charge_session_status_parses_service_contract(...__args: any[]): any {
let result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["sessionStatus"]: Object.assign({}, {["__typename"]: "EmpSessionStatusResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: "active"}, {["timestamp"]: null}, {["data"]: Object.assign({}, {["__typename"]: "EmpChargeSessionData"}, {["sessionUid"]: "session-1"}, {["status"]: "ACTIVE"}, {["message"]: null}, {["stopSessionAllowed"]: true}, {["cpoName"]: "Operator"}, {["physicalReference"]: "A-12"}, {["locationAddress"]: "1 Main St"}, {["locationCity"]: "San Diego"}, {["locationState"]: "CA"}, {["locationCoordinates"]: Object.assign({}, {["__typename"]: "EmpCoordinates"}, {["latitude"]: "32.1"}, {["longitude"]: "-117.2"})})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_get_public_charge_session_status"), ["VIN"], null));
$.assertEqual(result, $.call(PublicChargeSessionStatus, [], Object.assign({}, {"status_code": "1000"}, {"status_message": "active"}, {"timestamp": null}, {"data": $.call(PublicChargeSessionData, [], Object.assign({}, {"session_uid": "session-1"}, {"status": $.attr(PublicChargeSessionState, "ACTIVE")}, {"message": null}, {"stop_session_allowed": true}, {"cpo_name": "Operator"}, {"physical_reference": "A-12"}, {"location_address": "1 Main St"}, {"location_city": "San Diego"}, {"location_state": "CA"}, {"location_coordinates": $.call(PublicChargeLocationCoordinates, ["32.1", "-117.2"], null)}))})), "test_pnc_part_01.py:107: result == PublicChargeSessionStatus(status_code='1000', status_message='active', timestamp=None, data=PublicChargeSessionData(session_uid='session-1', status=PublicChargeSessionState.ACTIVE, message=None, stop_session_allowed=True, cpo_name='Operator', physical_reference='A-12', location_address='1 Main St', location_city='San Diego', location_state='CA', location_coordinates=PublicChargeLocationCoordinates('32.1', '-117.2')))");
$.call(assert_graphql_call, [session, 0, "ChargeSessionStatus", Object.assign({}, {["vin"]: "VIN"})], null);
}

/** Translated upstream test_start_public_charge_session_preserves_optional_location. */
export async function test_start_public_charge_session_preserves_optional_location(...__args: any[]): any {
let base_config, client, explicit_null, explicit_value, result, result_data, session;
let {} = $.bind(__args, [], {}, [], null, null);
result_data = Object.assign({}, {["__typename"]: "EmpStartChargeSessionData"}, {["vin"]: "VIN"}, {["evseId"]: "EVSE-1"}, {["status"]: "PENDING"}, {["message"]: null}, {["stopSessionAllowed"]: false});
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["startChargeSession"]: Object.assign({}, {["__typename"]: "EmpStartChargeSessionResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "now"}, {["data"]: result_data})})], null), $.call(graphql_response, [Object.assign({}, {["startChargeSession"]: null})], null), $.call(graphql_response, [Object.assign({}, {["startChargeSession"]: null})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
result = (await $.call($.attr(client, "async_start_public_charge_session"), ["VIN", "EVSE-1"], null));
explicit_null = (await $.call($.attr(client, "async_start_public_charge_session"), ["VIN", "EVSE-1"], Object.assign({}, {"location_id": null})));
explicit_value = (await $.call($.attr(client, "async_start_public_charge_session"), ["VIN", "EVSE-1"], Object.assign({}, {"location_id": "LOCATION-1"})));
$.assertEqual(result, $.call(PublicChargeSessionStartResult, [], Object.assign({}, {"status_code": "1000"}, {"status_message": null}, {"timestamp": "now"}, {"data": $.call(PublicChargeSessionStartData, [], Object.assign({}, {"vin": "VIN"}, {"evse_id": "EVSE-1"}, {"status": $.attr(PublicChargeSessionState, "PENDING")}, {"message": null}, {"stop_session_allowed": false}))})), "test_pnc_part_01.py:165: result == PublicChargeSessionStartResult(status_code='1000', status_message=None, timestamp='now', data=PublicChargeSessionStartData(vin='VIN', evse_id='EVSE-1', status=PublicChargeSessionState.PENDING, message=None, stop_session_allowed=False))");
$.assert(((explicit_null === null)), "test_pnc_part_01.py:177: explicit_null is None");
$.assert(((explicit_value === null)), "test_pnc_part_01.py:178: explicit_value is None");
base_config = Object.assign({}, {["vin"]: "VIN"}, {["evseId"]: "EVSE-1"});
$.call(assert_graphql_call, [session, 0, "StartChargeSession", Object.assign({}, {["config"]: base_config})], null);
$.call(assert_graphql_call, [session, 1, "StartChargeSession", Object.assign({}, {["config"]: Object.assign({}, base_config, {["locationId"]: null})})], null);
$.call(assert_graphql_call, [session, 2, "StartChargeSession", Object.assign({}, {["config"]: Object.assign({}, base_config, {["locationId"]: "LOCATION-1"})})], null);
}

/** Translated upstream test_stop_public_charge_session_sends_required_service_vin. */
export async function test_stop_public_charge_session_sends_required_service_vin(...__args: any[]): any {
let client, expected, response, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
response = Object.assign({}, {["stopChargeSession"]: Object.assign({}, {["__typename"]: "EmpStopChargeSessionResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "now"})});
session = $.call(FakeSession, [$.call(graphql_response, [response], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
result = (await $.call($.attr(client, "async_stop_public_charge_session"), ["VIN"], null));
expected = $.call(PublicChargeSessionStopResult, ["1000", null, "now"], null);
$.assertEqual(result, expected, "test_pnc_part_01.py:212: result == expected");
$.call(assert_graphql_call, [session, 0, "StopChargeSession", Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"})})], null);
}

/** Translated upstream test_update_pnc_and_retry_certificate_parse_statuses. */
export async function test_update_pnc_and_retry_certificate_parse_statuses(...__args: any[]): any {
let client, retry, session, update;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["updatePnCServiceStatus"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: "enabled"}, {["timestamp"]: "now"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusData"}, {["vin"]: "VIN"}, {["pncServiceStatus"]: "ENABLING"})})})], null), $.call(graphql_response, [Object.assign({}, {["retryCertInstall"]: Object.assign({}, {["__typename"]: "EmpRetryCertInstallResponse"}, {["statusCode"]: "1000"})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
update = (await $.call($.attr(client, "async_update_pnc_service_status"), ["VIN", $.attr(PlugAndChargeStatusInput, "ENABLE")], null));
retry = (await $.call($.attr(client, "async_retry_pnc_certificate_install"), ["VIN"], null));
$.assertEqual(update, $.call(PlugAndChargeServiceStatus, ["1000", "enabled", "now", $.call(PlugAndChargeServiceData, ["VIN", $.attr(PlugAndChargeServiceState, "ENABLING")], null)], null), "test_pnc_part_01.py:250: update == PlugAndChargeServiceStatus('1000', 'enabled', 'now', PlugAndChargeServiceData('VIN', PlugAndChargeServiceState.ENABLING))");
$.assertEqual(retry, $.call(PlugAndChargeCertificateRetryResult, ["1000"], null), "test_pnc_part_01.py:256: retry == PlugAndChargeCertificateRetryResult('1000')");
$.call(assert_graphql_call, [session, 0, "UpdatePnCServiceStatus", Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["pncServiceStatus"]: "ENABLE"})})], null);
$.call(assert_graphql_call, [session, 1, "RetryCertInstall", Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"})})], null);
}

/** Translated upstream test_wait_for_pnc_service_status_matches_service_polling_semantics. */
export async function test_wait_for_pnc_service_status_matches_service_polling_semantics(...__args: any[]): any {
let result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["pncServiceStatus"]: null})], null), $.call(graphql_response, [Object.assign({}, {["pncServiceStatus"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusData"}, {["pncServiceStatus"]: "ENABLING"})})})], null), $.call(graphql_response, [Object.assign({}, {["pncServiceStatus"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusData"}, {["pncServiceStatus"]: "ENABLED"})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_wait_for_pnc_service_status"), ["VIN", $.attr(PlugAndChargeServiceState, "ENABLED")], Object.assign({}, {"poll_interval_seconds": 0.001}, {"timeout_seconds": 1})));
$.assert(((result !== null)), "test_pnc_part_01.py:305: result is not None");
$.assertEqual($.attr(result, "data"), $.call(PlugAndChargeServiceData, [null, $.attr(PlugAndChargeServiceState, "ENABLED")], null), "test_pnc_part_01.py:306: result.data == PlugAndChargeServiceData(None, PlugAndChargeServiceState.ENABLED)");
$.assertEqual($.call($.len, [$.attr(session, "calls")], null), 3, "test_pnc_part_01.py:310: len(session.calls) == 3");
}

$.register("test_pnc_part_01.py::test_get_pnc_service_status_parses_nullable_enrollment_data", test_get_pnc_service_status_parses_nullable_enrollment_data, []);

$.register("test_pnc_part_01.py::test_get_public_charge_session_status_parses_service_contract", test_get_public_charge_session_status_parses_service_contract, []);

$.register("test_pnc_part_01.py::test_start_public_charge_session_preserves_optional_location", test_start_public_charge_session_preserves_optional_location, []);

$.register("test_pnc_part_01.py::test_stop_public_charge_session_sends_required_service_vin", test_stop_public_charge_session_sends_required_service_vin, []);

$.register("test_pnc_part_01.py::test_update_pnc_and_retry_certificate_parse_statuses", test_update_pnc_and_retry_certificate_parse_statuses, []);

$.register("test_pnc_part_01.py::test_wait_for_pnc_service_status_matches_service_polling_semantics", test_wait_for_pnc_service_status_matches_service_polling_semantics, []);
