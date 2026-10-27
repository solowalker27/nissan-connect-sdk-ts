// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const pytest = $.pytest;

import { FakeResponse, FakeSession, graphql_response, make_client } from "./test_pnc";

import { PlugAndChargeCertificateRetryOutcome, PlugAndChargeCertificateRetryResult, PlugAndChargeServiceData, PlugAndChargeServiceState, PlugAndChargeServiceStatus, PlugAndChargeStatusInput, PlugAndChargeUpdateOutcome, PublicChargeSessionState, PublicChargeSessionStopOutcome, PublicChargeSessionStopResult, ReadOnlyError, ResponseError } from "../src/index";

/** Translated upstream test_wait_for_public_charge_session_matches_service_terminal_states. */
export async function test_wait_for_public_charge_session_matches_service_terminal_states(...__args: any[]): any {
let result, session;
let {} = $.bind(__args, [], {}, [], null, null);
/** Translated upstream status_response. */
function status_response(...__args: any[]): any {
let {"state": state} = $.bind(__args, ["state"], {}, [], null, null);
return $.call(graphql_response, [Object.assign({}, {["sessionStatus"]: Object.assign({}, {["__typename"]: "EmpSessionStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpChargeSessionData"}, {["status"]: state}, {["locationCoordinates"]: null})})})], null);
}
session = $.call(FakeSession, [$.call(status_response, ["PENDING"], null), $.call(status_response, ["RESERVATION"], null), $.call(status_response, ["FUTURE_STATE"], null), $.call(status_response, ["ACTIVE"], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_wait_for_public_charge_session_status"), ["VIN"], Object.assign({}, {"poll_interval_seconds": 0.001}, {"timeout_seconds": 1})));
$.assert(((result !== null)), "test_pnc_part_02.py:55: result is not None");
$.assert((($.attr(result, "data") !== null)), "test_pnc_part_02.py:56: result.data is not None");
$.assert((($.attr($.attr(result, "data"), "status") === $.attr(PublicChargeSessionState, "ACTIVE"))), "test_pnc_part_02.py:57: result.data.status is PublicChargeSessionState.ACTIVE");
$.assert(($.eq($.call($.len, [$.attr(session, "calls")], null), 4)), "test_pnc_part_02.py:58: len(session.calls) == 4");
}

/** Translated upstream test_public_charge_waiter_preserves_service_null_boundaries. */
export async function test_public_charge_waiter_preserves_service_null_boundaries(...__args: any[]): any {
let missing_data, missing_data_session, status_null, status_null_session;
let {} = $.bind(__args, [], {}, [], null, null);
missing_data_session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["sessionStatus"]: Object.assign({}, {["__typename"]: "EmpSessionStatusResponse"}, {["data"]: null})})], null)], null);
status_null_session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["sessionStatus"]: Object.assign({}, {["__typename"]: "EmpSessionStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpChargeSessionData"}, {["status"]: null}, {["locationCoordinates"]: null})})})], null)], null);
missing_data = (await $.call($.attr($.call(make_client, [missing_data_session], null), "async_wait_for_public_charge_session_status"), ["VIN"], Object.assign({}, {"poll_interval_seconds": 0.001}, {"timeout_seconds": 1})));
status_null = (await $.call($.attr($.call(make_client, [status_null_session], null), "async_wait_for_public_charge_session_status"), ["VIN"], Object.assign({}, {"poll_interval_seconds": 0.001}, {"timeout_seconds": 1})));
$.assert(((missing_data === null)), "test_pnc_part_02.py:102: missing_data is None");
$.assert(((status_null !== null)), "test_pnc_part_02.py:103: status_null is not None");
$.assert((($.attr(status_null, "data") !== null)), "test_pnc_part_02.py:104: status_null.data is not None");
$.assert((($.attr($.attr(status_null, "data"), "status") === null)), "test_pnc_part_02.py:105: status_null.data.status is None");
}

/** Translated upstream test_pnc_waiters_raise_on_service_timeout. */
export async function test_pnc_waiters_raise_on_service_timeout(...__args: any[]): any {
let charge_session, pnc_session;
let {} = $.bind(__args, [], {}, [], null, null);
pnc_session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["pncServiceStatus"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPnCServiceStatusData"}, {["pncServiceStatus"]: "ENABLING"})})})], null)], null);
charge_session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["sessionStatus"]: Object.assign({}, {["__typename"]: "EmpSessionStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpChargeSessionData"}, {["status"]: "PENDING"}, {["locationCoordinates"]: null})})})], null)], null);
await $.raises($.TimeoutError, null, async () => {
(await $.call($.attr($.call(make_client, [pnc_session], null), "async_wait_for_pnc_service_status"), ["VIN", $.attr(PlugAndChargeServiceState, "ENABLED")], Object.assign({}, {"poll_interval_seconds": 1}, {"timeout_seconds": 0.001})));
});
await $.raises($.TimeoutError, null, async () => {
(await $.call($.attr($.call(make_client, [charge_session], null), "async_wait_for_public_charge_session_status"), ["VIN"], Object.assign({}, {"poll_interval_seconds": 1}, {"timeout_seconds": 0.001})));
});
}

/** Translated upstream test_pnc_command_outcomes_match_service_mappings. */
export function test_pnc_command_outcomes_match_service_mappings(...__args: any[]): any {
let disabled, enabled, enabling, pending;
let {} = $.bind(__args, [], {}, [], null, null);
enabled = $.call(PlugAndChargeServiceStatus, ["1000", null, null, $.call(PlugAndChargeServiceData, ["VIN", $.attr(PlugAndChargeServiceState, "ENABLED")], null)], null);
enabling = $.call(PlugAndChargeServiceStatus, ["1000", null, null, $.call(PlugAndChargeServiceData, ["VIN", $.attr(PlugAndChargeServiceState, "ENABLING")], null)], null);
disabled = $.call(PlugAndChargeServiceStatus, ["1000", null, null, $.call(PlugAndChargeServiceData, ["VIN", $.attr(PlugAndChargeServiceState, "DISABLED")], null)], null);
pending = $.call(PlugAndChargeServiceStatus, ["1000", null, null, $.call(PlugAndChargeServiceData, ["VIN", $.attr(PlugAndChargeServiceState, "PENDING")], null)], null);
$.assert((($.call($.attr(enabled, "update_outcome"), [$.attr(PlugAndChargeStatusInput, "ENABLE")], null) === $.attr(PlugAndChargeUpdateOutcome, "SUCCESS"))), "test_pnc_part_02.py:178: enabled.update_outcome(PlugAndChargeStatusInput.ENABLE) is PlugAndChargeUpdateOutcome.SUCCESS");
$.assert((($.call($.attr(enabling, "update_outcome"), [$.attr(PlugAndChargeStatusInput, "ENABLE")], null) === $.attr(PlugAndChargeUpdateOutcome, "PENDING"))), "test_pnc_part_02.py:182: enabling.update_outcome(PlugAndChargeStatusInput.ENABLE) is PlugAndChargeUpdateOutcome.PENDING");
$.assert((($.call($.attr(disabled, "update_outcome"), [$.attr(PlugAndChargeStatusInput, "ENABLE")], null) === $.attr(PlugAndChargeUpdateOutcome, "FAILED"))), "test_pnc_part_02.py:186: disabled.update_outcome(PlugAndChargeStatusInput.ENABLE) is PlugAndChargeUpdateOutcome.FAILED");
$.assert((($.call($.attr(pending, "update_outcome"), [$.attr(PlugAndChargeStatusInput, "DISABLE")], null) === $.attr(PlugAndChargeUpdateOutcome, "FAILED"))), "test_pnc_part_02.py:190: pending.update_outcome(PlugAndChargeStatusInput.DISABLE) is PlugAndChargeUpdateOutcome.FAILED");
$.assert((($.call($.attr($.call(PlugAndChargeServiceStatus, ["2004", null, null, null], null), "update_outcome"), [$.attr(PlugAndChargeStatusInput, "DISABLE")], null) === $.attr(PlugAndChargeUpdateOutcome, "DISABLE_ERROR"))), "test_pnc_part_02.py:194: PlugAndChargeServiceStatus('2004', None, None, None).update_outcome(PlugAndChargeStatusInput.DISABLE) is PlugAndChargeUpdateOutcome.DISABLE_ERROR");
$.assert((($.call($.attr($.call(PlugAndChargeServiceStatus, [null, null, null, null], null), "update_outcome"), [$.attr(PlugAndChargeStatusInput, "ENABLE")], null) === $.attr(PlugAndChargeUpdateOutcome, "UNKNOWN"))), "test_pnc_part_02.py:200: PlugAndChargeServiceStatus(None, None, None, None).update_outcome(PlugAndChargeStatusInput.ENABLE) is PlugAndChargeUpdateOutcome.UNKNOWN");
$.raises($.ValueError, "UNKNOWN_VALUE", () => {
$.call($.attr(enabled, "update_outcome"), [$.attr(PlugAndChargeStatusInput, "UNKNOWN_VALUE")], null);
});
$.assert((($.attr($.call(PublicChargeSessionStopResult, ["1000", null, null], null), "outcome") === $.attr(PublicChargeSessionStopOutcome, "SUCCESS"))), "test_pnc_part_02.py:209: PublicChargeSessionStopResult('1000', None, None).outcome is PublicChargeSessionStopOutcome.SUCCESS");
$.assert((($.attr($.call(PublicChargeSessionStopResult, ["3026", null, null], null), "outcome") === $.attr(PublicChargeSessionStopOutcome, "FAILED"))), "test_pnc_part_02.py:213: PublicChargeSessionStopResult('3026', None, None).outcome is PublicChargeSessionStopOutcome.FAILED");
$.assert((($.attr($.call(PublicChargeSessionStopResult, ["4014", null, null], null), "outcome") === $.attr(PublicChargeSessionStopOutcome, "UNEXPECTED_ERROR"))), "test_pnc_part_02.py:217: PublicChargeSessionStopResult('4014', None, None).outcome is PublicChargeSessionStopOutcome.UNEXPECTED_ERROR");
$.assert((($.attr($.call(PublicChargeSessionStopResult, ["future", null, null], null), "outcome") === $.attr(PublicChargeSessionStopOutcome, "UNKNOWN"))), "test_pnc_part_02.py:221: PublicChargeSessionStopResult('future', None, None).outcome is PublicChargeSessionStopOutcome.UNKNOWN");
$.assert((($.attr($.call(PlugAndChargeCertificateRetryResult, ["1000"], null), "outcome") === $.attr(PlugAndChargeCertificateRetryOutcome, "SUCCESS"))), "test_pnc_part_02.py:225: PlugAndChargeCertificateRetryResult('1000').outcome is PlugAndChargeCertificateRetryOutcome.SUCCESS");
$.assert((($.attr($.call(PlugAndChargeCertificateRetryResult, ["2028"], null), "outcome") === $.attr(PlugAndChargeCertificateRetryOutcome, "FAILED"))), "test_pnc_part_02.py:229: PlugAndChargeCertificateRetryResult('2028').outcome is PlugAndChargeCertificateRetryOutcome.FAILED");
$.assert((($.attr($.call(PlugAndChargeCertificateRetryResult, ["future"], null), "outcome") === $.attr(PlugAndChargeCertificateRetryOutcome, "UNKNOWN"))), "test_pnc_part_02.py:233: PlugAndChargeCertificateRetryResult('future').outcome is PlugAndChargeCertificateRetryOutcome.UNKNOWN");
}

/** Translated upstream test_pnc_waiters_reject_invalid_polling_inputs_before_io. */
export async function test_pnc_waiters_reject_invalid_polling_inputs_before_io(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises($.ValueError, "ENABLED or DISABLED", async () => {
(await $.call($.attr(client, "async_wait_for_pnc_service_status"), ["VIN", $.attr(PlugAndChargeServiceState, "ENABLING")], null));
});
await $.raises($.ValueError, "poll_interval_seconds", async () => {
(await $.call($.attr(client, "async_wait_for_public_charge_session_status"), ["VIN"], Object.assign({}, {"poll_interval_seconds": 0})));
});
await $.raises($.ValueError, "timeout_seconds", async () => {
(await $.call($.attr(client, "async_wait_for_public_charge_session_status"), ["VIN"], Object.assign({}, {"timeout_seconds": $.call($.float, ["nan"], null)})));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_pnc_part_02.py:259: session.calls == []");
}

/** Translated upstream test_pnc_mutations_respect_read_only_mode_before_io. */
export async function test_pnc_mutations_respect_read_only_mode_before_io(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_start_public_charge_session"), ["VIN", "EVSE-1"], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_stop_public_charge_session"), ["VIN"], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_update_pnc_service_status"), ["VIN", $.attr(PlugAndChargeStatusInput, "ENABLE")], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_retry_pnc_certificate_install"), ["VIN"], null));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_pnc_part_02.py:278: session.calls == []");
}

/** Translated upstream test_pnc_unknown_input_is_rejected_and_malformed_responses_fail. */
export async function test_pnc_unknown_input_is_rejected_and_malformed_responses_fail(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [{}], null), $.call(graphql_response, [Object.assign({}, {["sessionStatus"]: Object.assign({}, {["__typename"]: "EmpSessionStatusResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpChargeSessionData"}, {["stopSessionAllowed"]: "yes"}, {["locationCoordinates"]: null})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_update_pnc_service_status"), ["VIN", $.attr(PlugAndChargeStatusInput, "UNKNOWN_VALUE")], null));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_pnc_part_02.py:304: session.calls == []");
await $.raises(ResponseError, "pncServiceStatus is missing", async () => {
(await $.call($.attr(client, "async_get_pnc_service_status"), ["VIN"], null));
});
await $.raises(ResponseError, "stopSessionAllowed is not a boolean", async () => {
(await $.call($.attr(client, "async_get_public_charge_session_status"), ["VIN"], null));
});
}

$.register("test_pnc_part_02.py::test_wait_for_public_charge_session_matches_service_terminal_states", test_wait_for_public_charge_session_matches_service_terminal_states, []);

$.register("test_pnc_part_02.py::test_public_charge_waiter_preserves_service_null_boundaries", test_public_charge_waiter_preserves_service_null_boundaries, []);

$.register("test_pnc_part_02.py::test_pnc_waiters_raise_on_service_timeout", test_pnc_waiters_raise_on_service_timeout, []);

$.register("test_pnc_part_02.py::test_pnc_command_outcomes_match_service_mappings", test_pnc_command_outcomes_match_service_mappings, []);

$.register("test_pnc_part_02.py::test_pnc_waiters_reject_invalid_polling_inputs_before_io", test_pnc_waiters_reject_invalid_polling_inputs_before_io, []);

$.register("test_pnc_part_02.py::test_pnc_mutations_respect_read_only_mode_before_io", test_pnc_mutations_respect_read_only_mode_before_io, []);

$.register("test_pnc_part_02.py::test_pnc_unknown_input_is_rejected_and_malformed_responses_fail", test_pnc_unknown_input_is_rejected_and_malformed_responses_fail, []);
