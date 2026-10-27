// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const re = $.re;

const Mapping = $.Mapping;

const FrozenInstanceError = $.FrozenInstanceError;

const StrEnum = $.StrEnum;

const pytest = $.pytest;

import { operations } from "../src/index";

import { ACCOUNT_STATUS_POLL_INTERVAL_SECONDS, ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS, EnergyAccountConnector, EnergyAccountData, EnergyAccountPollingOutcome, EnergyAccountStatus, EnergyAccountStatusReason, EnergyAccountStatusResult, EnergyNacsStatus, EnergyPncStatus, EnergyToggleStatus, account_status_polling_outcome } from "../src/energy_account_models";

import { parse_account_status } from "../src/energy_account_parsing";

import { ResponseError } from "../src/exceptions";

/** Translated upstream account_status_payload. */
export function account_status_payload(...__args: any[]): any {
let data;
let {"fields": fields} = $.bind(__args, [], {}, [], null, "fields");
data = Object.assign({}, {["__typename"]: "EmpAccountStatusData"}, fields);
return Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["data"]: data})});
}

/** Translated upstream test_account_status_operation_matches_service_document_id_and_tokens. */
export function test_account_status_operation_matches_service_document_id_and_tokens(...__args: any[]): any {
let document, tokens;
let {} = $.bind(__args, [], {}, [], null, null);
document = $.attr(operations, "ACCOUNT_STATUS");
$.assert(($.eq(document, "query AccountStatus($vin: String!) { accountStatus(vin: $vin) { __typename statusCode statusMessage timestamp data { __typename status statusReason pncStatus pncStatusReason toggleStatus nacsStatus connectors { __typename id connectorName } } } }")), "test_energy_account.py:43: document == 'query AccountStatus($vin: String!) { accountStatus(vin: $vin) { __typename statusCode statusMessage timestamp data { __typename status statusReason pncStatus pncStatusReason toggleStatus nacsStatus connectors { __typename id connectorName } } } }'");
$.assert(($.eq($.attr(operations, "ACCOUNT_STATUS_OPERATION_ID"), "fa9270fd8f34b96477a72ee8b6f0207707e2173d34cc45b25fe5049db85a6def")), "test_energy_account.py:49: operations.ACCOUNT_STATUS_OPERATION_ID == 'fa9270fd8f34b96477a72ee8b6f0207707e2173d34cc45b25fe5049db85a6def'");
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), $.attr(operations, "ACCOUNT_STATUS_OPERATION_ID"))), "test_energy_account.py:52: hashlib.sha256(document.encode()).hexdigest() == operations.ACCOUNT_STATUS_OPERATION_ID");
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), "8c8d9019a1fd539d4d5de07033c48f0ed2ee12d22f9a35e8adb59448262b1756")), "test_energy_account.py:54: hashlib.sha256(tokens.encode()).hexdigest() == '8c8d9019a1fd539d4d5de07033c48f0ed2ee12d22f9a35e8adb59448262b1756'");
}

/** Translated upstream test_parse_account_status_preserves_exact_nullable_response_shape. */
export function test_parse_account_status_preserves_exact_nullable_response_shape(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_account_status, [Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "2026-07-31T12:00:00Z"}, {["data"]: Object.assign({}, {["__typename"]: "EmpAccountStatusData"}, {["status"]: "ACTIVE"}, {["statusReason"]: "NA"}, {["pncStatus"]: "READY"}, {["pncStatusReason"]: null}, {["toggleStatus"]: "ENABLED"}, {["nacsStatus"]: "IN_ACTIVE"}, {["connectors"]: [null, Object.assign({}, {["__typename"]: "EmpConnector"}, {["id"]: "CONNECTOR-1"}, {["connectorName"]: null})]})})})], null);
$.assert(($.eq(result, $.call(EnergyAccountStatusResult, [], Object.assign({}, {"status_code": "1000"}, {"status_message": null}, {"timestamp": "2026-07-31T12:00:00Z"}, {"data": $.call(EnergyAccountData, [], Object.assign({}, {"status": $.attr(EnergyAccountStatus, "ACTIVE")}, {"status_reason": $.attr(EnergyAccountStatusReason, "NA")}, {"pnc_status": $.attr(EnergyPncStatus, "READY")}, {"pnc_status_reason": null}, {"toggle_status": $.attr(EnergyToggleStatus, "ENABLED")}, {"nacs_status": $.attr(EnergyNacsStatus, "IN_ACTIVE")}, {"connectors": [null, $.call(EnergyAccountConnector, ["CONNECTOR-1", null], null)]}))})))), "test_energy_account.py:88: result == EnergyAccountStatusResult(status_code='1000', status_message=None, timestamp='2026-07-31T12:00:00Z', data=EnergyAccountData(status=EnergyAccountStatus.ACTIVE, status_reason=EnergyAccountStatusReason.NA, pnc_status=EnergyPncStatus.READY, pnc_status_reason=None, toggle_status=EnergyToggleStatus.ENABLED, nacs_status=EnergyNacsStatus.IN_ACTIVE, connectors=(None, EnergyAccountConnector('CONNECTOR-1', None))))");
}

/** Translated upstream test_parse_account_status_preserves_nullable_root_envelope_and_data. */
export function test_parse_account_status_preserves_nullable_root_envelope_and_data(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert((($.call(parse_account_status, [Object.assign({}, {["accountStatus"]: null})], null) === null)), "test_energy_account.py:105: parse_account_status({'accountStatus': None}) is None");
$.assert(($.eq($.call(parse_account_status, [Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["statusCode"]: null}, {["statusMessage"]: null}, {["timestamp"]: null}, {["data"]: null})})], null), $.call(EnergyAccountStatusResult, [null, null, null, null], null))), "test_energy_account.py:106: parse_account_status({'accountStatus': {'__typename': 'EmpAccountStatusResponse', 'statusCode': None, 'statusMessage': None, 'timestamp': None, 'data': None}}) == EnergyAccountStatusResult(None, None, None, None)");
$.raises(ResponseError, "^accountStatus is missing$", () => {
$.call(parse_account_status, [{}], null);
});
}

/** Translated upstream test_parse_account_status_distinguishes_nullable_and_empty_connectors. */
export function test_parse_account_status_distinguishes_nullable_and_empty_connectors(...__args: any[]): any {
let empty, nullable;
let {} = $.bind(__args, [], {}, [], null, null);
nullable = $.call(parse_account_status, [$.call(account_status_payload, [], Object.assign({}, {"status": null}, {"statusReason": null}, {"pncStatus": null}, {"pncStatusReason": null}, {"toggleStatus": null}, {"nacsStatus": null}, {"connectors": null}))], null);
empty = $.call(parse_account_status, [$.call(account_status_payload, [], Object.assign({}, {"connectors": []}))], null);
$.assert(($.eq(nullable, $.call(EnergyAccountStatusResult, [null, null, null, $.call(EnergyAccountData, [null, null, null, null, null, null, null], null)], null))), "test_energy_account.py:136: nullable == EnergyAccountStatusResult(None, None, None, EnergyAccountData(None, None, None, None, None, None, None))");
$.assert(($.eq(empty, $.call(EnergyAccountStatusResult, [null, null, null, $.call(EnergyAccountData, [null, null, null, null, null, null, []], null)], null))), "test_energy_account.py:142: empty == EnergyAccountStatusResult(None, None, None, EnergyAccountData(None, None, None, None, None, None, ()))");
}

export let ENUM_FIELDS = [[EnergyAccountStatus, "status", ["PENDING", "FAILED", "ACTIVE", "INACTIVE", "CANCELLED", "CLOSED", "ENROLLING", "NOT_ENROLLED", "UNKNOWN__"]], [EnergyAccountStatusReason, "statusReason", ["DECLINED_PAYMENT", "SVT", "INVALID_PAYMENT", "NA", "UNKNOWN__"]], [EnergyPncStatus, "pncStatus", ["PENDING", "INSTALLING", "READY", "FAILED", "NA", "RENEWING", "UNKNOWN__"]], [EnergyToggleStatus, "toggleStatus", ["ENABLING", "ENABLED", "DISABLING", "DISABLED", "PENDING", "NA", "UNKNOWN__"]], [EnergyNacsStatus, "nacsStatus", ["ACTIVE", "IN_ACTIVE", "NOT_APPLICABLE", "UNKNOWN__"]]];

/** Translated upstream test_parse_account_status_maps_every_service_enum_value. */
export function test_parse_account_status_maps_every_service_enum_value(...__args: any[]): any {
let parsed_by_field, result;
let {"enum_type": enum_type, "field": field, "raw_value": raw_value} = $.bind(__args, ["enum_type", "field", "raw_value"], {}, [], null, null);
result = $.call(parse_account_status, [$.call(account_status_payload, [], Object.assign({}, Object.assign({}, {[field]: raw_value})))], null);
$.assert(((result !== null)), "test_energy_account.py:204: result is not None");
$.assert((($.attr(result, "data") !== null)), "test_energy_account.py:205: result.data is not None");
parsed_by_field = Object.assign({}, {["status"]: $.attr($.attr(result, "data"), "status")}, {["statusReason"]: $.attr($.attr(result, "data"), "status_reason")}, {["pncStatus"]: $.attr($.attr(result, "data"), "pnc_status")}, {["toggleStatus"]: $.attr($.attr(result, "data"), "toggle_status")}, {["nacsStatus"]: $.attr($.attr(result, "data"), "nacs_status")});
$.assert((($.get(parsed_by_field, field) === $.call(enum_type, [raw_value], null))), "test_energy_account.py:213: parsed_by_field[field] is enum_type(raw_value)");
}

/** Translated upstream test_parse_account_status_maps_future_enums_to_unknown_value. */
export function test_parse_account_status_maps_future_enums_to_unknown_value(...__args: any[]): any {
let parsed_by_field, result;
let {"enum_type": enum_type, "field": field} = $.bind(__args, ["enum_type", "field"], {}, [], null, null);
result = $.call(parse_account_status, [$.call(account_status_payload, [], Object.assign({}, Object.assign({}, {[field]: "FUTURE_VALUE"})))], null);
$.assert(((result !== null)), "test_energy_account.py:226: result is not None");
$.assert((($.attr(result, "data") !== null)), "test_energy_account.py:227: result.data is not None");
parsed_by_field = Object.assign({}, {["status"]: $.attr($.attr(result, "data"), "status")}, {["statusReason"]: $.attr($.attr(result, "data"), "status_reason")}, {["pncStatus"]: $.attr($.attr(result, "data"), "pnc_status")}, {["toggleStatus"]: $.attr($.attr(result, "data"), "toggle_status")}, {["nacsStatus"]: $.attr($.attr(result, "data"), "nacs_status")});
$.assert((($.get(parsed_by_field, field) === $.call(enum_type, ["UNKNOWN__"], null))), "test_energy_account.py:235: parsed_by_field[field] is enum_type('UNKNOWN__')");
}

/** Translated upstream test_parse_account_status_rejects_malformed_responses. */
export function test_parse_account_status_rejects_malformed_responses(...__args: any[]): any {
let {"payload": payload, "message": message} = $.bind(__args, ["payload", "message"], {}, [], null, null);
$.raises(ResponseError, $.call($.attr(re, "escape"), [message], null), () => {
$.call(parse_account_status, [payload], null);
});
}

/** Translated upstream test_account_status_polling_outcome_matches_service. */
export function test_account_status_polling_outcome_matches_service(...__args: any[]): any {
let {"result": result, "outcome": outcome} = $.bind(__args, ["result", "outcome"], {}, [], null, null);
$.assert((($.call(account_status_polling_outcome, [result], null) === outcome)), "test_energy_account.py:366: account_status_polling_outcome(result) is outcome");
}

/** Translated upstream test_account_status_polling_constants_match_service. */
export function test_account_status_polling_constants_match_service(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq(ACCOUNT_STATUS_POLL_INTERVAL_SECONDS, 2.0)), "test_energy_account.py:370: ACCOUNT_STATUS_POLL_INTERVAL_SECONDS == 2.0");
$.assert(($.eq(ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS, 210.0)), "test_energy_account.py:371: ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS == 210.0");
}

/** Translated upstream test_energy_account_models_are_frozen. */
export function test_energy_account_models_are_frozen(...__args: any[]): any {
let connector;
let {} = $.bind(__args, [], {}, [], null, null);
connector = $.call(EnergyAccountConnector, ["CONNECTOR-1", "NACS"], null);
$.raises(FrozenInstanceError, null, () => {
connector["id"] = "CONNECTOR-2";
});
}

$.register("test_energy_account.py::test_account_status_operation_matches_service_document_id_and_tokens", test_account_status_operation_matches_service_document_id_and_tokens, []);

$.register("test_energy_account.py::test_parse_account_status_preserves_exact_nullable_response_shape", test_parse_account_status_preserves_exact_nullable_response_shape, []);

$.register("test_energy_account.py::test_parse_account_status_preserves_nullable_root_envelope_and_data", test_parse_account_status_preserves_nullable_root_envelope_and_data, []);

$.register("test_energy_account.py::test_parse_account_status_distinguishes_nullable_and_empty_connectors", test_parse_account_status_distinguishes_nullable_and_empty_connectors, []);

$.register("test_energy_account.py::test_parse_account_status_maps_every_service_enum_value", test_parse_account_status_maps_every_service_enum_value, [[["enum_type", "field", "raw_value"], (() => { const __out: any = []; for (const [enum_type, field, raw_values] of $.iterable(ENUM_FIELDS)) { for (const raw_value of $.iterable(raw_values)) { __out.push([enum_type, field, raw_value]); } } return __out; })()]]);

$.register("test_energy_account.py::test_parse_account_status_maps_future_enums_to_unknown_value", test_parse_account_status_maps_future_enums_to_unknown_value, [[["enum_type", "field"], (() => { const __out: any = []; for (const [enum_type, field, _] of $.iterable(ENUM_FIELDS)) { __out.push([enum_type, field]); } return __out; })()]]);

$.register("test_energy_account.py::test_parse_account_status_rejects_malformed_responses", test_parse_account_status_rejects_malformed_responses, [[["payload", "message"], [[Object.assign({}, {["accountStatus"]: []}), "accountStatus is not an object"], [Object.assign({}, {["accountStatus"]: {}}), "accountStatus.__typename is not a string"], [Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["statusCode"]: 1000})}), "accountStatus.statusCode is not a string"], [Object.assign({}, {["accountStatus"]: Object.assign({}, {["__typename"]: "EmpAccountStatusResponse"}, {["data"]: []})}), "accountStatus.data is not an object"], [$.call(account_status_payload, [], Object.assign({}, {"status": 1})), "accountStatus.data.status is not a string"], [$.call(account_status_payload, [], Object.assign({}, {"connectors": "not-a-list"})), "accountStatus.data.connectors is not a list"], [$.call(account_status_payload, [], Object.assign({}, {"connectors": [1]})), "accountStatus.data.connectors[0] is not an object"], [$.call(account_status_payload, [], Object.assign({}, {"connectors": [{}]})), "accountStatus.data.connectors[0].__typename is not a string"], [$.call(account_status_payload, [], Object.assign({}, {"connectors": [Object.assign({}, {["__typename"]: "EmpConnector"}, {["id"]: 1})]})), "accountStatus.data.connectors[0].id is not a string"], [$.call(account_status_payload, [], Object.assign({}, {"pncStatusReason": false})), "accountStatus.data.pncStatusReason is not a string"]]]]);

$.register("test_energy_account.py::test_account_status_polling_outcome_matches_service", test_account_status_polling_outcome_matches_service, [[["result", "outcome"], [[null, $.attr(EnergyAccountPollingOutcome, "RETRY")], [$.call(EnergyAccountStatusResult, [null, null, null, null], null), $.attr(EnergyAccountPollingOutcome, "RETRY")], [$.call(EnergyAccountStatusResult, [null, null, null, $.call(EnergyAccountData, [null, null, null, null, null, null, null], null)], null), $.attr(EnergyAccountPollingOutcome, "RETRY")], [$.call(EnergyAccountStatusResult, [null, null, null, $.call(EnergyAccountData, [$.attr(EnergyAccountStatus, "ENROLLING"), null, null, null, null, null, null], null)], null), $.attr(EnergyAccountPollingOutcome, "RETRY")], [$.call(EnergyAccountStatusResult, [null, null, null, $.call(EnergyAccountData, [$.attr(EnergyAccountStatus, "ACTIVE"), null, null, null, null, null, null], null)], null), $.attr(EnergyAccountPollingOutcome, "COMPLETE")], [$.call(EnergyAccountStatusResult, [null, null, null, $.call(EnergyAccountData, [$.attr(EnergyAccountStatus, "UNKNOWN_VALUE"), null, null, null, null, null, null], null)], null), $.attr(EnergyAccountPollingOutcome, "COMPLETE")]]]]);

$.register("test_energy_account.py::test_account_status_polling_constants_match_service", test_account_status_polling_constants_match_service, []);

$.register("test_energy_account.py::test_energy_account_models_are_frozen", test_energy_account_models_are_frozen, []);
