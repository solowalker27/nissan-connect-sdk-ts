// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const hashlib = $.hashlib;

const re = $.re;

const Callable = $.Callable;
const Mapping = $.Mapping;

const FrozenInstanceError = $.FrozenInstanceError;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { NissanClient, ReadOnlyError, Tokens, operations } from "../src/index";

import { cancel_charge_plan_variables, charge_product_variables, enroll_charge_plan_variables, pricing_details_variables } from "../src/charge_plan_inputs";

import { ChargePlanAccountStatus, ChargePlanCancellationOutcome, ChargePlanCancellationResult, ChargePlanEnrollmentData, ChargePlanEnrollmentResult, ChargePlanPricingConnector, ChargePlanPricingDetails, ChargePlanPricingEvse, ChargeProductData, ChargeProductResult } from "../src/charge_plan_models";

import { parse_cancel_charge_plan, parse_charge_product, parse_enroll_charge_plan, parse_pricing_details } from "../src/charge_plan_parsing";

import { ResponseError } from "../src/exceptions";

export let EXPECTED_OPERATIONS = Object.assign({}, {["ChargeProduct"]: [$.attr(operations, "CHARGE_PRODUCT"), $.attr(operations, "CHARGE_PRODUCT_OPERATION_ID"), "8c707418299ea7636b8b80f307e4cbad719c8bd348eb8243dc4e7c50ae037a9a"]}, {["PricingDetails"]: [$.attr(operations, "PRICING_DETAILS"), $.attr(operations, "PRICING_DETAILS_OPERATION_ID"), "fc33f94f7659158617ad457cf5a3a92ea6a906f45f1b0086bf38626594e3c2c9"]}, {["EnrollChargePlan"]: [$.attr(operations, "ENROLL_CHARGE_PLAN"), $.attr(operations, "ENROLL_CHARGE_PLAN_OPERATION_ID"), "04aa3a8cafdb0be5fd0a51927b6f5a0a2bd0318a6519957a6b3a466406924ea7"]}, {["CancelChargePlan"]: [$.attr(operations, "CANCEL_CHARGE_PLAN"), $.attr(operations, "CANCEL_CHARGE_PLAN_OPERATION_ID"), "6143736732d743059868f2a9ac3688791892fcb3d5849f4b7d7bc32e95948eab"]});

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

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {"read_only": true}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token", "id-token"], null)}, {"read_only": read_only}));
}

/** Translated upstream graphql_response. */
export function graphql_response(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
return $.call(FakeResponse, [Object.assign({}, {["data"]: $.call($.dict, [data], null)})], null);
}

/** Translated upstream test_charge_plan_operations_match_service_documents_and_ids. */
export function test_charge_plan_operations_match_service_documents_and_ids(...__args: any[]): any {
let tokens;
let {"operation_name": operation_name, "document": document, "operation_id": operation_id, "token_hash": token_hash} = $.bind(__args, ["operation_name", "document", "operation_id", "token_hash"], {}, [], null, null);
$.assert($.call($.attr(document, "startswith"), [[("query " + $.str(operation_name)), ("mutation " + $.str(operation_name))]], null), "test_charge_plans.py:117: document.startswith((f'query {operation_name}', f'mutation {operation_name}'))");
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), operation_id, "test_charge_plans.py:118: hashlib.sha256(document.encode()).hexdigest() == operation_id");
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), token_hash, "test_charge_plans.py:120: hashlib.sha256(tokens.encode()).hexdigest() == token_hash");
}

/** Translated upstream test_charge_plan_variables_match_non_null_service_inputs. */
export function test_charge_plan_variables_match_non_null_service_inputs(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(charge_product_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}), "test_charge_plans.py:124: charge_product_variables('VIN') == {'vin': 'VIN'}");
$.assertEqual($.call(pricing_details_variables, ["VIN", "LOCATION-1"], null), Object.assign({}, {["locationId"]: "LOCATION-1"}, {["vin"]: "VIN"}), "test_charge_plans.py:125: pricing_details_variables('VIN', 'LOCATION-1') == {'locationId': 'LOCATION-1', 'vin': 'VIN'}");
$.assertEqual($.call(enroll_charge_plan_variables, ["VIN", "SKU-1", "ARIYA", "2026"], null), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["productSku"]: "SKU-1"}, {["model"]: "ARIYA"}, {["year"]: "2026"})}), "test_charge_plans.py:129: enroll_charge_plan_variables('VIN', 'SKU-1', 'ARIYA', '2026') == {'config': {'vin': 'VIN', 'productSku': 'SKU-1', 'model': 'ARIYA', 'year': '2026'}}");
$.assertEqual($.call(cancel_charge_plan_variables, ["VIN"], null), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"})}), "test_charge_plans.py:142: cancel_charge_plan_variables('VIN') == {'config': {'vin': 'VIN'}}");
}

/** Translated upstream test_charge_plan_client_wires_all_four_operations. */
export async function test_charge_plan_client_wires_all_four_operations(...__args: any[]): any {
let call, client, payload, payloads, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["chargeProduct"]: null})], null), $.call(graphql_response, [Object.assign({}, {["pricingDetails"]: null})], null), $.call(graphql_response, [Object.assign({}, {["enrollChargePlan"]: null})], null), $.call(graphql_response, [Object.assign({}, {["cancelChargePlan"]: null})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
$.assert((((await $.call($.attr(client, "async_get_charge_product"), ["VIN"], null)) === null)), "test_charge_plans.py:154: await client.async_get_charge_product('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_charge_plan_pricing_details"), ["VIN", "LOCATION-1"], null)) === null)), "test_charge_plans.py:155: await client.async_get_charge_plan_pricing_details('VIN', 'LOCATION-1') is None");
$.assert((((await $.call($.attr(client, "async_enroll_charge_plan"), ["VIN", "SKU-1", "ARIYA", "2026"], null)) === null)), "test_charge_plans.py:156: await client.async_enroll_charge_plan('VIN', 'SKU-1', 'ARIYA', '2026') is None");
$.assert((((await $.call($.attr(client, "async_cancel_charge_plan"), ["VIN"], null)) === null)), "test_charge_plans.py:157: await client.async_cancel_charge_plan('VIN') is None");
payloads = (() => { const __out: any = []; for (const call of $.iterable($.attr(session, "calls"))) { __out.push($.get(call, "json")); } return __out; })();
$.assert($.call($.all, [(() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.call($.isinstance, [payload, Mapping], null)); } return __out; })()], null), "test_charge_plans.py:160: all((isinstance(payload, Mapping) for payload in payloads))");
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "operationName")); } return __out; })(), ["ChargeProduct", "PricingDetails", "EnrollChargePlan", "CancelChargePlan"], "test_charge_plans.py:161: [payload['operationName'] for payload in payloads] == ['ChargeProduct', 'PricingDetails', 'EnrollChargePlan', 'CancelChargePlan']");
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "variables")); } return __out; })(), [Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["locationId"]: "LOCATION-1"}, {["vin"]: "VIN"}), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"}, {["productSku"]: "SKU-1"}, {["model"]: "ARIYA"}, {["year"]: "2026"})}), Object.assign({}, {["config"]: Object.assign({}, {["vin"]: "VIN"})})], "test_charge_plans.py:167: [payload['variables'] for payload in payloads] == [{'vin': 'VIN'}, {'locationId': 'LOCATION-1', 'vin': 'VIN'}, {'config': {'vin': 'VIN', 'productSku': 'SKU-1', 'model': 'ARIYA', 'year': '2026'}}, {'config': {'vin': 'VIN'}}]");
}

/** Translated upstream test_charge_plan_mutations_respect_read_only_before_io. */
export async function test_charge_plan_mutations_respect_read_only_before_io(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_enroll_charge_plan"), ["VIN", "SKU-1", "ARIYA", "2026"], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_cancel_charge_plan"), ["VIN"], null));
});
$.assertEqual($.attr(session, "calls"), [], "test_charge_plans.py:191: session.calls == []");
}

/** Translated upstream test_parse_charge_product_preserves_nullable_status_and_product_fields. */
export function test_parse_charge_product_preserves_nullable_status_and_product_fields(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_charge_product, [Object.assign({}, {["chargeProduct"]: Object.assign({}, {["__typename"]: "EmpChargeProductResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "2026-07-31T12:00:00Z"}, {["data"]: Object.assign({}, {["__typename"]: "EmpChargeProductData"}, {["productSKU"]: "SKU-1"}, {["price"]: "12.50"}, {["description"]: null})})})], null);
$.assertEqual(result, $.call(ChargeProductResult, [], Object.assign({}, {"status_code": "1000"}, {"status_message": null}, {"timestamp": "2026-07-31T12:00:00Z"}, {"data": $.call(ChargeProductData, [], Object.assign({}, {"product_sku": "SKU-1"}, {"price": "12.50"}, {"description": null}))})), "test_charge_plans.py:212: result == ChargeProductResult(status_code='1000', status_message=None, timestamp='2026-07-31T12:00:00Z', data=ChargeProductData(product_sku='SKU-1', price='12.50', description=None))");
}

/** Translated upstream test_parse_pricing_details_preserves_nullable_lists_and_items. */
export function test_parse_pricing_details_preserves_nullable_lists_and_items(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_pricing_details, [Object.assign({}, {["pricingDetails"]: Object.assign({}, {["__typename"]: "EmpPricingDetailsResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPricingDetailsData"}, {["parkingTariff"]: "5.00"}, {["flatFee"]: null}, {["congestionFee"]: "2.00"}, {["evses"]: [null, Object.assign({}, {["__typename"]: "EmpEVSE"}, {["connectors"]: [null, Object.assign({}, {["__typename"]: "EmpConnector"}, {["connectorId"]: "CONNECTOR-1"}, {["tariff"]: null})]})]})})})], null);
$.assertEqual(result, $.call(ChargePlanPricingDetails, [], Object.assign({}, {"parking_tariff": "5.00"}, {"flat_fee": null}, {"congestion_fee": "2.00"}, {"evses": [null, $.call(ChargePlanPricingEvse, [], Object.assign({}, {"connectors": [null, $.call(ChargePlanPricingConnector, ["CONNECTOR-1", null], null)]}))]})), "test_charge_plans.py:253: result == ChargePlanPricingDetails(parking_tariff='5.00', flat_fee=None, congestion_fee='2.00', evses=(None, ChargePlanPricingEvse(connectors=(None, ChargePlanPricingConnector('CONNECTOR-1', None)))))");
}

/** Translated upstream test_parse_enrollment_maps_every_service_account_status. */
export function test_parse_enrollment_maps_every_service_account_status(...__args: any[]): any {
let result;
let {"raw_status": raw_status} = $.bind(__args, ["raw_status"], {}, [], null, null);
result = $.call(parse_enroll_charge_plan, [Object.assign({}, {["enrollChargePlan"]: Object.assign({}, {["__typename"]: "EmpEnrollChargePlanResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: "accepted"}, {["timestamp"]: "now"}, {["data"]: Object.assign({}, {["__typename"]: "EmpEnrollChargePlanData"}, {["vin"]: "VIN"}, {["status"]: raw_status})})})], null);
$.assertEqual(result, $.call(ChargePlanEnrollmentResult, ["1000", "accepted", "now", $.call(ChargePlanEnrollmentData, ["VIN", $.call(ChargePlanAccountStatus, [raw_status], null)], null)], null), "test_charge_plans.py:299: result == ChargePlanEnrollmentResult('1000', 'accepted', 'now', ChargePlanEnrollmentData('VIN', ChargePlanAccountStatus(raw_status)))");
}

/** Translated upstream test_parse_enrollment_maps_future_status_to_unknown_value. */
export function test_parse_enrollment_maps_future_status_to_unknown_value(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_enroll_charge_plan, [Object.assign({}, {["enrollChargePlan"]: Object.assign({}, {["__typename"]: "EmpEnrollChargePlanResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpEnrollChargePlanData"}, {["vin"]: null}, {["status"]: "FUTURE_STATE"})})})], null);
$.assertEqual(result, $.call(ChargePlanEnrollmentResult, [null, null, null, $.call(ChargePlanEnrollmentData, [null, $.attr(ChargePlanAccountStatus, "UNKNOWN_VALUE")], null)], null), "test_charge_plans.py:321: result == ChargePlanEnrollmentResult(None, None, None, ChargePlanEnrollmentData(None, ChargePlanAccountStatus.UNKNOWN_VALUE))");
}

/** Translated upstream test_cancel_charge_plan_outcome_matches_service. */
export function test_cancel_charge_plan_outcome_matches_service(...__args: any[]): any {
let result;
let {"status_code": status_code, "outcome": outcome} = $.bind(__args, ["status_code", "outcome"], {}, [], null, null);
result = $.call(parse_cancel_charge_plan, [Object.assign({}, {["cancelChargePlan"]: Object.assign({}, {["__typename"]: "EmpCancelChargePlanResponse"}, {["statusCode"]: status_code}, {["statusMessage"]: null}, {["timestamp"]: null})})], null);
$.assertEqual(result, $.call(ChargePlanCancellationResult, [status_code, null, null], null), "test_charge_plans.py:354: result == ChargePlanCancellationResult(status_code, None, None)");
$.assert(((result !== null)), "test_charge_plans.py:355: result is not None");
$.assert((($.attr(result, "outcome") === outcome)), "test_charge_plans.py:356: result.outcome is outcome");
}

/** Translated upstream test_charge_plan_parsers_preserve_nullable_roots. */
export function test_charge_plan_parsers_preserve_nullable_roots(...__args: any[]): any {
let {"parser": parser, "root_field": root_field} = $.bind(__args, ["parser", "root_field"], {}, [], null, null);
$.assert((($.call(parser, [Object.assign({}, {[root_field]: null})], null) === null)), "test_charge_plans.py:372: parser({root_field: None}) is None");
$.raises(ResponseError, ("^" + $.str(root_field) + " is missing$"), () => {
$.call(parser, [{}], null);
});
}

/** Translated upstream test_nullable_data_and_lists_remain_distinct_from_empty_lists. */
export function test_nullable_data_and_lists_remain_distinct_from_empty_lists(...__args: any[]): any {
let details, enrollment, product;
let {} = $.bind(__args, [], {}, [], null, null);
$.assert((($.call(parse_pricing_details, [Object.assign({}, {["pricingDetails"]: Object.assign({}, {["__typename"]: "EmpPricingDetailsResponse"}, {["data"]: null})})], null) === null)), "test_charge_plans.py:378: parse_pricing_details({'pricingDetails': {'__typename': 'EmpPricingDetailsResponse', 'data': None}}) is None");
details = $.call(parse_pricing_details, [Object.assign({}, {["pricingDetails"]: Object.assign({}, {["__typename"]: "EmpPricingDetailsResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPricingDetailsData"}, {["evses"]: []})})})], null);
$.assertEqual(details, $.call(ChargePlanPricingDetails, [null, null, null, []], null), "test_charge_plans.py:400: details == ChargePlanPricingDetails(None, None, None, ())");
product = $.call(parse_charge_product, [Object.assign({}, {["chargeProduct"]: Object.assign({}, {["__typename"]: "EmpChargeProductResponse"}, {["data"]: null})})], null);
enrollment = $.call(parse_enroll_charge_plan, [Object.assign({}, {["enrollChargePlan"]: Object.assign({}, {["__typename"]: "EmpEnrollChargePlanResponse"}, {["data"]: null})})], null);
$.assertEqual(product, $.call(ChargeProductResult, [null, null, null, null], null), "test_charge_plans.py:418: product == ChargeProductResult(None, None, None, None)");
$.assertEqual(enrollment, $.call(ChargePlanEnrollmentResult, [null, null, null, null], null), "test_charge_plans.py:419: enrollment == ChargePlanEnrollmentResult(None, None, None, None)");
}

/** Translated upstream test_charge_plan_parsers_reject_malformed_responses. */
export function test_charge_plan_parsers_reject_malformed_responses(...__args: any[]): any {
let parser_by_root, root_field;
let {"payload": payload, "message": message} = $.bind(__args, ["payload", "message"], {}, [], null, null);
root_field = $.call($.next, [$.call($.iter, [payload], null)], null);
parser_by_root = Object.assign({}, {["chargeProduct"]: parse_charge_product}, {["pricingDetails"]: parse_pricing_details}, {["enrollChargePlan"]: parse_enroll_charge_plan}, {["cancelChargePlan"]: parse_cancel_charge_plan});
$.raises(ResponseError, $.call($.attr(re, "escape"), [message], null), () => {
$.call($.get(parser_by_root, root_field), [payload], null);
});
}

/** Translated upstream test_charge_plan_models_are_frozen. */
export function test_charge_plan_models_are_frozen(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(ChargePlanCancellationResult, ["1000", null, null], null);
$.raises(FrozenInstanceError, null, () => {
result["status_code"] = "5000";
});
}

$.register("test_charge_plans.py::test_charge_plan_operations_match_service_documents_and_ids", test_charge_plan_operations_match_service_documents_and_ids, [[["operation_name", "document", "operation_id", "token_hash"], (() => { const __out: any = []; for (const [operation_name, values] of $.iterable($.call($.attr(EXPECTED_OPERATIONS, "items"), [], null))) { __out.push([operation_name, ...$.iterable(values)]); } return __out; })()]]);

$.register("test_charge_plans.py::test_charge_plan_variables_match_non_null_service_inputs", test_charge_plan_variables_match_non_null_service_inputs, []);

$.register("test_charge_plans.py::test_charge_plan_client_wires_all_four_operations", test_charge_plan_client_wires_all_four_operations, []);

$.register("test_charge_plans.py::test_charge_plan_mutations_respect_read_only_before_io", test_charge_plan_mutations_respect_read_only_before_io, []);

$.register("test_charge_plans.py::test_parse_charge_product_preserves_nullable_status_and_product_fields", test_parse_charge_product_preserves_nullable_status_and_product_fields, []);

$.register("test_charge_plans.py::test_parse_pricing_details_preserves_nullable_lists_and_items", test_parse_pricing_details_preserves_nullable_lists_and_items, []);

$.register("test_charge_plans.py::test_parse_enrollment_maps_every_service_account_status", test_parse_enrollment_maps_every_service_account_status, [["raw_status", ["PENDING", "FAILED", "ACTIVE", "INACTIVE", "CANCELLED", "CLOSED", "ENROLLING", "NOT_ENROLLED"]]]);

$.register("test_charge_plans.py::test_parse_enrollment_maps_future_status_to_unknown_value", test_parse_enrollment_maps_future_status_to_unknown_value, []);

$.register("test_charge_plans.py::test_cancel_charge_plan_outcome_matches_service", test_cancel_charge_plan_outcome_matches_service, [[["status_code", "outcome"], [["1000", $.attr(ChargePlanCancellationOutcome, "SUCCESS")], ["5000", $.attr(ChargePlanCancellationOutcome, "FAILED")], ["4011", $.attr(ChargePlanCancellationOutcome, "UNKNOWN")], ["future", $.attr(ChargePlanCancellationOutcome, "UNKNOWN")], [null, $.attr(ChargePlanCancellationOutcome, "UNKNOWN")]]]]);

$.register("test_charge_plans.py::test_charge_plan_parsers_preserve_nullable_roots", test_charge_plan_parsers_preserve_nullable_roots, [[["parser", "root_field"], [[parse_charge_product, "chargeProduct"], [parse_pricing_details, "pricingDetails"], [parse_enroll_charge_plan, "enrollChargePlan"], [parse_cancel_charge_plan, "cancelChargePlan"]]]]);

$.register("test_charge_plans.py::test_nullable_data_and_lists_remain_distinct_from_empty_lists", test_nullable_data_and_lists_remain_distinct_from_empty_lists, []);

$.register("test_charge_plans.py::test_charge_plan_parsers_reject_malformed_responses", test_charge_plan_parsers_reject_malformed_responses, [[["payload", "message"], [[Object.assign({}, {["chargeProduct"]: {}}), "chargeProduct.__typename is not a string"], [Object.assign({}, {["chargeProduct"]: Object.assign({}, {["__typename"]: "EmpChargeProductResponse"}, {["statusCode"]: 1000})}), "chargeProduct.statusCode is not a string"], [Object.assign({}, {["pricingDetails"]: Object.assign({}, {["__typename"]: "EmpPricingDetailsResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPricingDetailsData"}, {["evses"]: "not-a-list"})})}), "pricingDetails.data.evses is not a list"], [Object.assign({}, {["pricingDetails"]: Object.assign({}, {["__typename"]: "EmpPricingDetailsResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpPricingDetailsData"}, {["evses"]: [Object.assign({}, {["__typename"]: "EmpEVSE"}, {["connectors"]: [{}]})]})})}), "pricingDetails.data.evses[0].connectors[0].__typename is not a string"], [Object.assign({}, {["enrollChargePlan"]: Object.assign({}, {["__typename"]: "EmpEnrollChargePlanResponse"}, {["data"]: Object.assign({}, {["__typename"]: "EmpEnrollChargePlanData"}, {["status"]: 1})})}), "enrollChargePlan.data.status is not a string"], [Object.assign({}, {["cancelChargePlan"]: []}), "cancelChargePlan is not an object"]]]]);

$.register("test_charge_plans.py::test_charge_plan_models_are_frozen", test_charge_plan_models_are_frozen, []);
