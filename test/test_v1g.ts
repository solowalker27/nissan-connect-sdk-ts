// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const hashlib = $.hashlib;

const re = $.re;

const Callable = $.Callable;
const Mapping = $.Mapping;

const pytest = $.pytest;

import { ResponseError } from "../src/exceptions";

import { UNSET } from "../src/graphql_input";

import { V1G_CANCEL_MONITORED_CHARGING_PLAN, V1G_CANCEL_MONITORED_CHARGING_PLAN_OPERATION_ID, V1G_ENROLL_MONITORED_CHARGING_PLAN, V1G_ENROLL_MONITORED_CHARGING_PLAN_OPERATION_ID, V1G_MONITORED_CHARGING_ACCOUNT_STATUS, V1G_MONITORED_CHARGING_ACCOUNT_STATUS_OPERATION_ID, V1G_TOKENIZED_URL, V1G_TOKENIZED_URL_OPERATION_ID, V1G_UPDATE_NOTIFICATION_PREFERENCES, V1G_UPDATE_NOTIFICATION_PREFERENCES_OPERATION_ID } from "../src/operations";

import { V1GNotificationCategory, V1GNotificationPreferenceInput, v1g_cancel_monitored_charging_plan_variables, v1g_enroll_monitored_charging_plan_variables, v1g_monitored_charging_account_status_variables, v1g_tokenized_url_variables, v1g_update_notification_preferences_variables } from "../src/v1g_inputs";

import { V1GAccountStatus, V1GMonitoredChargingAccountData, V1GMonitoredChargingAccountStatusResult, V1GMonitoredChargingPlanCancellationResult, V1GMonitoredChargingPlanEnrollmentData, V1GMonitoredChargingPlanEnrollmentResult, V1GNotificationPreference, V1GNotificationPreferencesUpdateResult, V1GTokenizedUrlData, V1GTokenizedUrlResult } from "../src/v1g_models";

import { parse_v1g_cancel_monitored_charging_plan, parse_v1g_enroll_monitored_charging_plan, parse_v1g_monitored_charging_account_status, parse_v1g_tokenized_url, parse_v1g_update_notification_preferences } from "../src/v1g_parsing";

export type V1GParser = ((arg0: Record<string, unknown>) => unknown);

export let OPERATION_CONTRACTS = [[V1G_MONITORED_CHARGING_ACCOUNT_STATUS, V1G_MONITORED_CHARGING_ACCOUNT_STATUS_OPERATION_ID, "0e1f8a5c0609423deb46c97710a93be95e174690f384c42723d13309f78b9ae9"], [V1G_UPDATE_NOTIFICATION_PREFERENCES, V1G_UPDATE_NOTIFICATION_PREFERENCES_OPERATION_ID, "8ff5410e7f19803fe6852039984932e6de80f57679b4a75eddcf04f25211fcaa"], [V1G_TOKENIZED_URL, V1G_TOKENIZED_URL_OPERATION_ID, "60f3b2476b14301438b34bcf2368f2eb14efd82a743f0f18c7deb6b158bc6ced"], [V1G_ENROLL_MONITORED_CHARGING_PLAN, V1G_ENROLL_MONITORED_CHARGING_PLAN_OPERATION_ID, "8741790f53b6d85416f6fd634c4912a0a8af76411d38373d4b99abfbd94a4458"], [V1G_CANCEL_MONITORED_CHARGING_PLAN, V1G_CANCEL_MONITORED_CHARGING_PLAN_OPERATION_ID, "a64cf29b9ef88e15edd58ebb9554073e79d5d3605ddd8b0722e90c0bcf72e2a6"]];

/** Translated upstream test_v1g_operations_match_exact_persisted_contracts. */
export function test_v1g_operations_match_exact_persisted_contracts(...__args: any[]): any {
let tokens;
let {"document": document, "operation_id": operation_id, "token_hash": token_hash} = $.bind(__args, ["document", "operation_id", "token_hash"], {}, [], null, null);
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), operation_id, "test_v1g.py:91: hashlib.sha256(document.encode()).hexdigest() == operation_id");
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), token_hash, "test_v1g.py:92: hashlib.sha256(tokens.encode()).hexdigest() == token_hash");
}

/** Translated upstream test_v1g_read_and_cancel_variables_use_exact_shapes. */
export function test_v1g_read_and_cancel_variables_use_exact_shapes(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(v1g_monitored_charging_account_status_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}), "test_v1g.py:96: v1g_monitored_charging_account_status_variables('VIN') == {'vin': 'VIN'}");
$.assertEqual($.call(v1g_tokenized_url_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}), "test_v1g.py:97: v1g_tokenized_url_variables('VIN') == {'vin': 'VIN'}");
$.assertEqual($.call(v1g_cancel_monitored_charging_plan_variables, ["VIN"], null), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"})}), "test_v1g.py:98: v1g_cancel_monitored_charging_plan_variables('VIN') == {'config': {'vin': 'VIN'}}");
}

/** Translated upstream test_v1g_known_categories_and_account_states_are_exact. */
export function test_v1g_known_categories_and_account_states_are_exact(...__args: any[]): any {
let category;
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call($.tuple, [V1GNotificationCategory], null), [$.attr(V1GNotificationCategory, "NEW_PRIME_TIME_HOURS"), $.attr(V1GNotificationCategory, "PRIME_TIME_UPCOMING_REMINDER"), $.attr(V1GNotificationCategory, "MONTHLY_INSIGHTS"), $.attr(V1GNotificationCategory, "PRIME_TIME_STATS_UPDATES")], "test_v1g.py:102: tuple(V1GNotificationCategory) == (V1GNotificationCategory.NEW_PRIME_TIME_HOURS, V1GNotificationCategory.PRIME_TIME_UPCOMING_REMINDER, V1GNotificationCategory.MONTHLY_INSIGHTS, V1GNotificationCategory.PRIME_TIME_STATS_UPDATES)");
$.assertEqual($.call($.tuple, [(() => { const __out: any = []; for (const category of $.iterable(V1GNotificationCategory)) { __out.push($.attr(category, "value")); } return __out; })()], null), ["New PrimeTime Hours", "PrimeTime Upcoming Reminder", "Monthly Insights", "PrimeTime Stats Updates"], "test_v1g.py:108: tuple((category.value for category in V1GNotificationCategory)) == ('New PrimeTime Hours', 'PrimeTime Upcoming Reminder', 'Monthly Insights', 'PrimeTime Stats Updates')");
$.assertEqual($.call($.tuple, [V1GAccountStatus], null), [$.attr(V1GAccountStatus, "FAILED"), $.attr(V1GAccountStatus, "ACTIVE"), $.attr(V1GAccountStatus, "INACTIVE"), $.attr(V1GAccountStatus, "ENROLLING"), $.attr(V1GAccountStatus, "NOT_ENROLLED"), $.attr(V1GAccountStatus, "CANCELLED"), $.attr(V1GAccountStatus, "CLOSED"), $.attr(V1GAccountStatus, "UNKNOWN_VALUE")], "test_v1g.py:114: tuple(V1GAccountStatus) == (V1GAccountStatus.FAILED, V1GAccountStatus.ACTIVE, V1GAccountStatus.INACTIVE, V1GAccountStatus.ENROLLING, V1GAccountStatus.NOT_ENROLLED, V1GAccountStatus.CANCELLED, V1GAccountStatus.CLOSED, V1GAccountStatus.UNKNOWN_VALUE)");
}

/** Translated upstream test_v1g_update_variables_preserve_all_apollo_optional_states. */
export function test_v1g_update_variables_preserve_all_apollo_optional_states(...__args: any[]): any {
let variables;
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(v1g_update_notification_preferences_variables, ["VIN"], null), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"})}), "test_v1g.py:127: v1g_update_notification_preferences_variables('VIN') == {'config': {'vin': 'VIN'}}");
$.assertEqual($.call(v1g_update_notification_preferences_variables, ["VIN"], Object.assign({}, {"preferences": null})), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["v1GNotificationPreferences"]: null})}), "test_v1g.py:128: v1g_update_notification_preferences_variables('VIN', preferences=None) == {'config': {'vin': 'VIN', 'v1GNotificationPreferences': None}}");
$.assertEqual($.call(v1g_update_notification_preferences_variables, ["VIN"], Object.assign({}, {"preferences": []})), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["v1GNotificationPreferences"]: []})}), "test_v1g.py:132: v1g_update_notification_preferences_variables('VIN', preferences=()) == {'config': {'vin': 'VIN', 'v1GNotificationPreferences': []}}");
variables = $.call(v1g_update_notification_preferences_variables, ["VIN"], Object.assign({}, {"preferences": [null, $.call(V1GNotificationPreferenceInput, [$.attr(V1GNotificationCategory, "NEW_PRIME_TIME_HOURS")], Object.assign({}, {"email_status": UNSET}, {"push_status": null}, {"sms_status": true})), $.call(V1GNotificationPreferenceInput, ["Future category"], Object.assign({}, {"email_status": false}))]}));
$.assertEqual(variables, Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["v1GNotificationPreferences"]: [null, Object.assign({}, {["v1GNotificationCategory"]: "New PrimeTime Hours"}, {["v1GPushStatus"]: null}, {["v1GSmsStatus"]: true}), Object.assign({}, {["v1GNotificationCategory"]: "Future category"}, {["v1GEmailStatus"]: false})]})}), "test_v1g.py:151: variables == {'config': {'vin': 'VIN', 'v1GNotificationPreferences': [None, {'v1GNotificationCategory': 'New PrimeTime Hours', 'v1GPushStatus': None, 'v1GSmsStatus': True}, {'v1GNotificationCategory': 'Future category', 'v1GEmailStatus': False}]}}");
}

/** Translated upstream test_v1g_enrollment_plan_has_no_hidden_default. */
export function test_v1g_enrollment_plan_has_no_hidden_default(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(v1g_enroll_monitored_charging_plan_variables, ["VIN", "ARIYA", "2025"], null), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["model"]: "ARIYA"}, {["year"]: "2025"})}), "test_v1g.py:171: v1g_enroll_monitored_charging_plan_variables('VIN', 'ARIYA', '2025') == {'config': {'vin': 'VIN', 'model': 'ARIYA', 'year': '2025'}}");
$.assertEqual($.call(v1g_enroll_monitored_charging_plan_variables, ["VIN", "ARIYA", "2025"], Object.assign({}, {"plan": null})), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["plan"]: null}, {["model"]: "ARIYA"}, {["year"]: "2025"})}), "test_v1g.py:174: v1g_enroll_monitored_charging_plan_variables('VIN', 'ARIYA', '2025', plan=None) == {'config': {'vin': 'VIN', 'plan': None, 'model': 'ARIYA', 'year': '2025'}}");
$.assertEqual($.call(v1g_enroll_monitored_charging_plan_variables, ["VIN", "ARIYA", "2025"], Object.assign({}, {"plan": "V1G-MC1"})), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["plan"]: "V1G-MC1"}, {["model"]: "ARIYA"}, {["year"]: "2025"})}), "test_v1g.py:180: v1g_enroll_monitored_charging_plan_variables('VIN', 'ARIYA', '2025', plan='V1G-MC1') == {'config': {'vin': 'VIN', 'plan': 'V1G-MC1', 'model': 'ARIYA', 'year': '2025'}}");
}

/** Translated upstream test_parse_v1g_account_status_preserves_raw_payload_and_future_values. */
export function test_parse_v1g_account_status_preserves_raw_payload_and_future_values(...__args: any[]): any {
let data, result;
let {} = $.bind(__args, [], {}, [], null, null);
data = Object.assign({}, {["v1GMonitoredChargingAccountStatus"]: Object.assign({}, {["__typename"]: "V1GMonitoredChargingAccountStatusResponse"}, {["statusCode"]: "5000"}, {["data"]: Object.assign({}, {["__typename"]: "V1GMonitoredChargingAccountStatusData"}, {["v1GMonitoredChargingAccountStatus"]: "FUTURE_STATUS"}, {["v1GNotificationPreferences"]: [null, Object.assign({}, {["__typename"]: "V1GNotificationPreferencesData"}, {["v1GNotificationCategory"]: "Future category"}, {["v1GEmailStatus"]: true}, {["v1GPushStatus"]: null}, {["v1GSmsStatus"]: false})]}, {["vin"]: null})})});
result = $.call(parse_v1g_monitored_charging_account_status, [data], null);
$.assertEqual(result, $.call(V1GMonitoredChargingAccountStatusResult, [], Object.assign({}, {"status_code": "5000"}, {"data": $.call(V1GMonitoredChargingAccountData, [], Object.assign({}, {"account_status": $.attr(V1GAccountStatus, "UNKNOWN_VALUE")}, {"notification_preferences": [null, $.call(V1GNotificationPreference, ["Future category", true, null, false], null)]}, {"vin": null}))})), "test_v1g.py:220: result == V1GMonitoredChargingAccountStatusResult(status_code='5000', data=V1GMonitoredChargingAccountData(account_status=V1GAccountStatus.UNKNOWN_VALUE, notification_preferences=(None, V1GNotificationPreference('Future category', True, None, False)), vin=None))");
$.assert((($.attr(result, "is_success") === false)), "test_v1g.py:231: result.is_success is False");
}

/** Translated upstream test_parse_v1g_update_preserves_nullable_preference_items. */
export function test_parse_v1g_update_preserves_nullable_preference_items(...__args: any[]): any {
let data, result;
let {} = $.bind(__args, [], {}, [], null, null);
data = Object.assign({}, {["v1GUpdateNotificationPreferences"]: Object.assign({}, {["__typename"]: "V1GUpdateNotificationPreferencesResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "2026-07-31T12:00:00Z"}, {["v1GNotificationPreferences"]: [null, Object.assign({}, {["__typename"]: "V1GNotificationPreferencesData"}, {["v1GNotificationCategory"]: null}, {["v1GEmailStatus"]: null}, {["v1GPushStatus"]: true}, {["v1GSmsStatus"]: false})]})});
result = $.call(parse_v1g_update_notification_preferences, [data], null);
$.assertEqual(result, $.call(V1GNotificationPreferencesUpdateResult, [], Object.assign({}, {"status_code": "1000"}, {"status_message": null}, {"timestamp": "2026-07-31T12:00:00Z"}, {"notification_preferences": [null, $.call(V1GNotificationPreference, [null, null, true, false], null)]})), "test_v1g.py:256: result == V1GNotificationPreferencesUpdateResult(status_code='1000', status_message=None, timestamp='2026-07-31T12:00:00Z', notification_preferences=(None, V1GNotificationPreference(None, None, True, False)))");
$.assert((($.attr(result, "is_success") === true)), "test_v1g.py:265: result.is_success is True");
}

/** Translated upstream test_parse_v1g_tokenized_url_and_enrollment_keep_raw_wrappers. */
export function test_parse_v1g_tokenized_url_and_enrollment_keep_raw_wrappers(...__args: any[]): any {
let enrollment_result, url_result;
let {} = $.bind(__args, [], {}, [], null, null);
url_result = $.call(parse_v1g_tokenized_url, [Object.assign({}, {["v1GTokenizedUrl"]: Object.assign({}, {["__typename"]: "V1GTokenizedUrlResponse"}, {["data"]: Object.assign({}, {["__typename"]: "V1GTokenizedUrlData"}, {["url"]: "https://example.invalid/token"}, {["vin"]: "VIN"})})})], null);
enrollment_result = $.call(parse_v1g_enroll_monitored_charging_plan, [Object.assign({}, {["v1GEnrollMonitoredChargingPlan"]: Object.assign({}, {["__typename"]: "V1GEnrollMonitoredChargingPlanResponse"}, {["data"]: Object.assign({}, {["__typename"]: "V1GEnrollMonitoredChargingPlanData"}, {["v1GMonitoredChargingAccountStatus"]: "ACTIVE"})})})], null);
$.assertEqual(url_result, $.call(V1GTokenizedUrlResult, [$.call(V1GTokenizedUrlData, ["https://example.invalid/token", "VIN"], null)], null), "test_v1g.py:293: url_result == V1GTokenizedUrlResult(V1GTokenizedUrlData('https://example.invalid/token', 'VIN'))");
$.assertEqual(enrollment_result, $.call(V1GMonitoredChargingPlanEnrollmentResult, [$.call(V1GMonitoredChargingPlanEnrollmentData, [$.attr(V1GAccountStatus, "ACTIVE")], null)], null), "test_v1g.py:296: enrollment_result == V1GMonitoredChargingPlanEnrollmentResult(V1GMonitoredChargingPlanEnrollmentData(V1GAccountStatus.ACTIVE))");
$.assert(!$.truth($.call($.hasattr, [url_result, "is_success"], null)), "test_v1g.py:299: not hasattr(url_result, 'is_success')");
$.assert(!$.truth($.call($.hasattr, [enrollment_result, "is_success"], null)), "test_v1g.py:300: not hasattr(enrollment_result, 'is_success')");
}

/** Translated upstream test_v1g_business_success_requires_exact_code_1000. */
export function test_v1g_business_success_requires_exact_code_1000(...__args: any[]): any {
let account, cancellation, update;
let {"status_code": status_code, "expected": expected} = $.bind(__args, ["status_code", "expected"], {}, [], null, null);
account = $.call(V1GMonitoredChargingAccountStatusResult, [status_code, null], null);
update = $.call(V1GNotificationPreferencesUpdateResult, [status_code, null, null, null], null);
cancellation = $.call(V1GMonitoredChargingPlanCancellationResult, [status_code], null);
$.assert((($.attr(account, "is_success") === expected)), "test_v1g.py:315: account.is_success is expected");
$.assert((($.attr(update, "is_success") === expected)), "test_v1g.py:316: update.is_success is expected");
$.assert((($.attr(cancellation, "is_success") === expected)), "test_v1g.py:317: cancellation.is_success is expected");
}

/** Translated upstream test_v1g_parsers_accept_nullable_root. */
export function test_v1g_parsers_accept_nullable_root(...__args: any[]): any {
let {"parser": parser, "root_field": root_field} = $.bind(__args, ["parser", "root_field"], {}, [], null, null);
$.assert((($.call(parser, [Object.assign({}, {[root_field]: null})], null) === null)), "test_v1g.py:343: parser({root_field: None}) is None");
}

/** Translated upstream test_v1g_parsers_preserve_nullable_nested_objects_and_lists. */
export function test_v1g_parsers_preserve_nullable_nested_objects_and_lists(...__args: any[]): any {
let account, enrollment, update, url;
let {} = $.bind(__args, [], {}, [], null, null);
account = $.call(parse_v1g_monitored_charging_account_status, [Object.assign({}, {["v1GMonitoredChargingAccountStatus"]: Object.assign({}, {["__typename"]: "AccountResponse"}, {["statusCode"]: null}, {["data"]: null})})], null);
update = $.call(parse_v1g_update_notification_preferences, [Object.assign({}, {["v1GUpdateNotificationPreferences"]: Object.assign({}, {["__typename"]: "UpdateResponse"}, {["statusCode"]: null}, {["statusMessage"]: null}, {["timestamp"]: null}, {["v1GNotificationPreferences"]: null})})], null);
url = $.call(parse_v1g_tokenized_url, [Object.assign({}, {["v1GTokenizedUrl"]: Object.assign({}, {["__typename"]: "UrlResponse"}, {["data"]: null})})], null);
enrollment = $.call(parse_v1g_enroll_monitored_charging_plan, [Object.assign({}, {["v1GEnrollMonitoredChargingPlan"]: Object.assign({}, {["__typename"]: "EnrollmentResponse"}, {["data"]: null})})], null);
$.assertEqual(account, $.call(V1GMonitoredChargingAccountStatusResult, [null, null], null), "test_v1g.py:377: account == V1GMonitoredChargingAccountStatusResult(None, None)");
$.assertEqual(update, $.call(V1GNotificationPreferencesUpdateResult, [null, null, null, null], null), "test_v1g.py:378: update == V1GNotificationPreferencesUpdateResult(None, None, None, None)");
$.assertEqual(url, $.call(V1GTokenizedUrlResult, [null], null), "test_v1g.py:379: url == V1GTokenizedUrlResult(None)");
$.assertEqual(enrollment, $.call(V1GMonitoredChargingPlanEnrollmentResult, [null], null), "test_v1g.py:380: enrollment == V1GMonitoredChargingPlanEnrollmentResult(None)");
}

/** Translated upstream test_v1g_parsers_reject_malformed_or_missing_fields. */
export function test_v1g_parsers_reject_malformed_or_missing_fields(...__args: any[]): any {
let {"parser": parser, "payload": payload, "message": message} = $.bind(__args, ["parser", "payload", "message"], {}, [], null, null);
$.raises(ResponseError, message, () => {
$.call(parser, [payload], null);
});
}

$.register("test_v1g.py::test_v1g_operations_match_exact_persisted_contracts", test_v1g_operations_match_exact_persisted_contracts, [[["document", "operation_id", "token_hash"], OPERATION_CONTRACTS]]);

$.register("test_v1g.py::test_v1g_read_and_cancel_variables_use_exact_shapes", test_v1g_read_and_cancel_variables_use_exact_shapes, []);

$.register("test_v1g.py::test_v1g_known_categories_and_account_states_are_exact", test_v1g_known_categories_and_account_states_are_exact, []);

$.register("test_v1g.py::test_v1g_update_variables_preserve_all_apollo_optional_states", test_v1g_update_variables_preserve_all_apollo_optional_states, []);

$.register("test_v1g.py::test_v1g_enrollment_plan_has_no_hidden_default", test_v1g_enrollment_plan_has_no_hidden_default, []);

$.register("test_v1g.py::test_parse_v1g_account_status_preserves_raw_payload_and_future_values", test_parse_v1g_account_status_preserves_raw_payload_and_future_values, []);

$.register("test_v1g.py::test_parse_v1g_update_preserves_nullable_preference_items", test_parse_v1g_update_preserves_nullable_preference_items, []);

$.register("test_v1g.py::test_parse_v1g_tokenized_url_and_enrollment_keep_raw_wrappers", test_parse_v1g_tokenized_url_and_enrollment_keep_raw_wrappers, []);

$.register("test_v1g.py::test_v1g_business_success_requires_exact_code_1000", test_v1g_business_success_requires_exact_code_1000, [[["status_code", "expected"], [["1000", true], ["5000", false], [null, false], ["", false]]]]);

$.register("test_v1g.py::test_v1g_parsers_accept_nullable_root", test_v1g_parsers_accept_nullable_root, [[["parser", "root_field"], [[parse_v1g_monitored_charging_account_status, "v1GMonitoredChargingAccountStatus"], [parse_v1g_update_notification_preferences, "v1GUpdateNotificationPreferences"], [parse_v1g_tokenized_url, "v1GTokenizedUrl"], [parse_v1g_enroll_monitored_charging_plan, "v1GEnrollMonitoredChargingPlan"], [parse_v1g_cancel_monitored_charging_plan, "v1GCancelMonitoredChargingPlan"]]]]);

$.register("test_v1g.py::test_v1g_parsers_preserve_nullable_nested_objects_and_lists", test_v1g_parsers_preserve_nullable_nested_objects_and_lists, []);

$.register("test_v1g.py::test_v1g_parsers_reject_malformed_or_missing_fields", test_v1g_parsers_reject_malformed_or_missing_fields, [[["parser", "payload", "message"], [[parse_v1g_monitored_charging_account_status, {}, "v1GMonitoredChargingAccountStatus is missing"], [parse_v1g_monitored_charging_account_status, Object.assign({}, {["v1GMonitoredChargingAccountStatus"]: Object.assign({}, {["statusCode"]: null}, {["data"]: null})}), "__typename is missing"], [parse_v1g_monitored_charging_account_status, Object.assign({}, {["v1GMonitoredChargingAccountStatus"]: Object.assign({}, {["__typename"]: "AccountResponse"}, {["data"]: null})}), "statusCode is missing"], [parse_v1g_update_notification_preferences, Object.assign({}, {["v1GUpdateNotificationPreferences"]: Object.assign({}, {["__typename"]: "UpdateResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: null}, {["v1GNotificationPreferences"]: {}})}), "v1GNotificationPreferences is not a list"], [parse_v1g_tokenized_url, Object.assign({}, {["v1GTokenizedUrl"]: Object.assign({}, {["__typename"]: "UrlResponse"}, {["data"]: Object.assign({}, {["__typename"]: "UrlData"}, {["url"]: 1}, {["vin"]: null})})}), "url is not a string"], [parse_v1g_enroll_monitored_charging_plan, Object.assign({}, {["v1GEnrollMonitoredChargingPlan"]: Object.assign({}, {["__typename"]: "EnrollmentResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EnrollmentData"}, {["v1GMonitoredChargingAccountStatus"]: false})})}), "v1GMonitoredChargingAccountStatus is not a string"], [parse_v1g_cancel_monitored_charging_plan, Object.assign({}, {["v1GCancelMonitoredChargingPlan"]: Object.assign({}, {["__typename"]: "CancellationResponse"}, {["statusCode"]: 1000})}), "statusCode is not a string"]]]]);
