// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const hashlib = $.hashlib;

const Awaitable = $.Awaitable;
const Mapping = $.Mapping;

const UTC = $.UTC;
const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { AddressInput, InvalidSecondDeliveryAddress, NissanClient, ReadOnlyError, SecondDeliveryAddress, SecondDeliveryAppointmentInput, SecondDeliveryAppointmentMode, SecondDeliveryBookedAppointment, SecondDeliveryContactInput, SecondDeliveryEligibility, SecondDeliveryOperationError, SecondDeliveryOperationSuccess, SecondDeliveryTimeSlots, Tokens, UnselectedSecondDeliveryResult, operations } from "../src/index";

import { second_delivery_appointment_variables, second_delivery_home_slots_variables, second_delivery_location_slots_variables, second_delivery_send_auth_code_variables, second_delivery_verify_auth_code_variables, update_second_delivery_appointment_variables } from "../src/second_delivery_inputs";

import { parse_cancel_second_delivery_appointment, parse_create_second_delivery_appointment, parse_second_delivery_address_validation, parse_second_delivery_appointment, parse_second_delivery_eligibility, parse_second_delivery_home_time_slots } from "../src/second_delivery_parsing";

export let EXPECTED_OPERATIONS = Object.assign({}, {["CANCEL_SECOND_DELIVERY_APPOINTMENT"]: "8038b57ab8afc28fb2f5c2153bcc89dea2650492101ce5817d08e0b613114668"}, {["CREATE_SECOND_DELIVERY_APPOINTMENT"]: "b6698d3dc4e338707998f4c9d7b2afa600b7d4980d05be50cd91f72c2ea71ee6"}, {["SECOND_DELIVERY_APPOINTMENT"]: "ca4319223c37ad3874b942484c301bf4b3b93171ff58bd43da2ab242a23af8df"}, {["SECOND_DELIVERY_APPOINTMENTS_AT_HOME"]: "e2d81521613aa8074f420a5f861e0d99891d9499bf968b6115a85220a72f7a0c"}, {["SECOND_DELIVERY_APPOINTMENTS_AT_HUB"]: "285d5991246c2008726e4ed4e5a2b12003da5dd7fd09121379fb6cec4527ab40"}, {["SECOND_DELIVERY_APPOINTMENTS_AT_VIRTUAL"]: "5a24913a76195ffd03ee01cc8b41932f19f48610e3b114c27c0959f4541b3366"}, {["SECOND_DELIVERY_ELIGIBILITY"]: "a19cdb3243dd2c8ae4c78fef51a829517988ac12ba1f3e4dd295e782f1bfcfae"}, {["SECOND_DELIVERY_SEND_AUTH_CODE"]: "fcada57a54859a26e4e8dcad4ae4a3d6e4282a5d7a62e0c433a18dc205c86204"}, {["SECOND_DELIVERY_VERIFY_AUTH_CODE"]: "011c0bc00940b689bc42b3c30a96bc755632cd12cefc1bbbe62db9abee8baa9e"}, {["UPDATE_SECOND_DELIVERY_APPOINTMENT"]: "af55dd2d886a10cb014a2187786513b1c7398c72c8e0048c1cf2355b5b04529e"}, {["VALIDATE_SECOND_DELIVERY_ADDRESS"]: "dfe7c26961f631dd97c91be4b03d896db2691978b64f130d306ab5e0bb7fca12"});

/** Translated upstream FakeResponse. */
export class FakeResponse {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeResponse, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
this["status"] = 200;
this["_payload"] = Object.assign({}, {["data"]: data});
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
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token", "id-token"], null)}, {"read_only": read_only}));
}

/** Translated upstream appointment. */
export function appointment(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(SecondDeliveryAppointmentInput, [], Object.assign({}, {"vin": "VIN"}, {"address": $.call(AddressInput, [], Object.assign({}, {"address1": "1 Main St"}, {"city": "Franklin"}))}, {"contact": $.call(SecondDeliveryContactInput, ["First", "Last", "+15555550100", "owner@example.test"], null)}, {"time_slot_id": 42}, {"redelivery_notes": null}, {"mode": $.attr(SecondDeliveryAppointmentMode, "AT_HOME")}));
}

/** Translated upstream test_second_delivery_operations_match_service_documents. */
export function test_second_delivery_operations_match_service_documents(...__args: any[]): any {
let constant, document, expected_id, operation_id;
let {} = $.bind(__args, [], {}, [], null, null);
for ([constant, expected_id] of $.iterable($.call($.attr(EXPECTED_OPERATIONS, "items"), [], null))) {
document = $.call($.getattr, [operations, constant], null);
operation_id = $.call($.getattr, [operations, ($.str(constant) + "_OPERATION_ID")], null);
$.assertEqual(operation_id, expected_id, "test_second_delivery.py:138: operation_id == expected_id");
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), expected_id, "test_second_delivery.py:139: hashlib.sha256(document.encode()).hexdigest() == expected_id");
}
}

/** Translated upstream test_second_delivery_inputs_preserve_omitted_and_null_fields. */
export function test_second_delivery_inputs_preserve_omitted_and_null_fields(...__args: any[]): any {
let config;
let {} = $.bind(__args, [], {}, [], null, null);
config = $.call(appointment, [], null);
$.assertEqual($.call(second_delivery_appointment_variables, [config], null), Object.assign({}, {["vin"]: "VIN"}, {["address"]: Object.assign({}, {["address1"]: "1 Main St"}, {["city"]: "Franklin"})}, {["contactInformation"]: Object.assign({}, {["firstName"]: "First"}, {["lastName"]: "Last"}, {["phoneNumber"]: "+15555550100"}, {["email"]: "owner@example.test"})}, {["timeSlotId"]: 42}, {["redeliveryNotes"]: null}, {["mode"]: "AT_HOME"}), "test_second_delivery.py:144: second_delivery_appointment_variables(config) == {'vin': 'VIN', 'address': {'address1': '1 Main St', 'city': 'Franklin'}, 'contactInformation': {'firstName': 'First', 'lastName': 'Last', 'phoneNumber': '+15555550100', 'email': 'owner@example.test'}, 'timeSlotId': 42, 'redeliveryNotes': None, 'mode': 'AT_HOME'}");
$.assertEqual($.call(update_second_delivery_appointment_variables, [7, config], null), Object.assign({}, {["vin"]: "VIN"}, {["activityId"]: 7}, {["address"]: Object.assign({}, {["address1"]: "1 Main St"}, {["city"]: "Franklin"})}, {["contactInformation"]: Object.assign({}, {["firstName"]: "First"}, {["lastName"]: "Last"}, {["phoneNumber"]: "+15555550100"}, {["email"]: "owner@example.test"})}, {["timeSlotId"]: 42}, {["redeliveryNotes"]: null}), "test_second_delivery.py:157: update_second_delivery_appointment_variables(7, config) == {'vin': 'VIN', 'activityId': 7, 'address': {'address1': '1 Main St', 'city': 'Franklin'}, 'contactInformation': {'firstName': 'First', 'lastName': 'Last', 'phoneNumber': '+15555550100', 'email': 'owner@example.test'}, 'timeSlotId': 42, 'redeliveryNotes': None}");
$.raises($.ValueError, "UNKNOWN_VALUE cannot be sent", () => {
$.call(second_delivery_appointment_variables, [$.call(SecondDeliveryAppointmentInput, ["VIN", $.call(AddressInput, [], null), $.attr(config, "contact"), 42], Object.assign({}, {"mode": $.attr(SecondDeliveryAppointmentMode, "UNKNOWN_VALUE")}))], null);
});
}

/** Translated upstream test_parse_second_delivery_appointment_and_time_slots. */
export function test_parse_second_delivery_appointment_and_time_slots(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_second_delivery_appointment, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "Vehicle"}, {["secondDelivery"]: Object.assign({}, {["__typename"]: "SecondDelivery"}, {["appointment"]: Object.assign({}, {["__typename"]: "SecondDeliveryExistingBookedAppointment"}, {["id"]: null}, {["activityId"]: null}, {["beginsAt"]: null}, {["address"]: null}, {["contact"]: null}, {["redeliveryNotes"]: null}, {["featureNotes"]: null}, {["hub"]: null}, {["mode"]: null})})})})], null), $.call(SecondDeliveryBookedAppointment, [null, null, null, null, null, null, null, null, null], null), "test_second_delivery.py:183: parse_second_delivery_appointment({'vehicle': {'__typename': 'Vehicle', 'secondDelivery': {'__typename': 'SecondDelivery', 'appointment': {'__typename': 'SecondDeliveryExistingBookedAppointment', 'id': None, 'activityId': None, 'beginsAt': None, 'address': None, 'contact': None, 'redeliveryNotes': None, 'featureNotes': None, 'hub': None, 'mode': None}}}}) == SecondDeliveryBookedAppointment(None, None, None, None, None, None, None, None, None)");
$.assertEqual($.call(parse_second_delivery_home_time_slots, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "Vehicle"}, {["secondDelivery"]: Object.assign({}, {["__typename"]: "SecondDelivery"}, {["appointments"]: Object.assign({}, {["__typename"]: "Appointments"}, {["atHome"]: Object.assign({}, {["__typename"]: "SecondDeliveryAppointmentTimeSlotsSuccessResponse"}, {["hub"]: null}, {["slotsByDate"]: []})})})})})], null), $.call(SecondDeliveryTimeSlots, [null, []], null), "test_second_delivery.py:205: parse_second_delivery_home_time_slots({'vehicle': {'__typename': 'Vehicle', 'secondDelivery': {'__typename': 'SecondDelivery', 'appointments': {'__typename': 'Appointments', 'atHome': {'__typename': 'SecondDeliveryAppointmentTimeSlotsSuccessResponse', 'hub': None, 'slotsByDate': []}}}}}) == SecondDeliveryTimeSlots(None, ())");
}

/** Translated upstream test_parse_eligibility_validation_and_mutation_unions. */
export function test_parse_eligibility_validation_and_mutation_unions(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_second_delivery_eligibility, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "Vehicle"}, {["secondDelivery"]: Object.assign({}, {["__typename"]: "SecondDelivery"}, {["eligibility"]: Object.assign({}, {["__typename"]: "FutureEligibility"})}, {["cta"]: null})})})], null), $.call(SecondDeliveryEligibility, [$.call(UnselectedSecondDeliveryResult, ["FutureEligibility"], null), null], null), "test_second_delivery.py:226: parse_second_delivery_eligibility({'vehicle': {'__typename': 'Vehicle', 'secondDelivery': {'__typename': 'SecondDelivery', 'eligibility': {'__typename': 'FutureEligibility'}, 'cta': None}}}) == SecondDeliveryEligibility(UnselectedSecondDeliveryResult('FutureEligibility'), None)");
$.assertEqual($.call(parse_second_delivery_address_validation, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "Vehicle"}, {["secondDelivery"]: Object.assign({}, {["__typename"]: "SecondDelivery"}, {["validateAddress"]: Object.assign({}, {["__typename"]: "InvalidSecondDeliveryAddress"}, {["valid"]: false}, {["dealerAddress"]: Object.assign({}, {["__typename"]: "Address"}, {["address1"]: "1 Main St"}, {["address2"]: null}, {["city"]: "Franklin"}, {["state"]: "TN"}, {["postalCode"]: "37064"}, {["country"]: "US"})})})})})], null), $.call(InvalidSecondDeliveryAddress, [false, $.call(SecondDeliveryAddress, ["1 Main St", null, "Franklin", "TN", "37064", "US"], null)], null), "test_second_delivery.py:238: parse_second_delivery_address_validation({'vehicle': {'__typename': 'Vehicle', 'secondDelivery': {'__typename': 'SecondDelivery', 'validateAddress': {'__typename': 'InvalidSecondDeliveryAddress', 'valid': False, 'dealerAddress': {'__typename': 'Address', 'address1': '1 Main St', 'address2': None, 'city': 'Franklin', 'state': 'TN', 'postalCode': '37064', 'country': 'US'}}}}}) == InvalidSecondDeliveryAddress(False, SecondDeliveryAddress('1 Main St', None, 'Franklin', 'TN', '37064', 'US'))");
$.assertEqual($.call(parse_cancel_second_delivery_appointment, [Object.assign({}, {["cancelSecondDeliveryAppointment"]: Object.assign({}, {["__typename"]: "CancelSecondDeliveryAppointmentSuccessResponse"}, {["success"]: true})})], null), $.call(SecondDeliveryOperationSuccess, [true], null), "test_second_delivery.py:264: parse_cancel_second_delivery_appointment({'cancelSecondDeliveryAppointment': {'__typename': 'CancelSecondDeliveryAppointmentSuccessResponse', 'success': True}}) == SecondDeliveryOperationSuccess(True)");
$.assertEqual($.call(parse_create_second_delivery_appointment, [Object.assign({}, {["createSecondDeliveryAppointment"]: Object.assign({}, {["__typename"]: "CreateSecondDeliveryInvalidTimeSlotErrorResponse"}, {["message"]: null})})], null), $.call(SecondDeliveryOperationError, ["CreateSecondDeliveryInvalidTimeSlotErrorResponse", null], null), "test_second_delivery.py:272: parse_create_second_delivery_appointment({'createSecondDeliveryAppointment': {'__typename': 'CreateSecondDeliveryInvalidTimeSlotErrorResponse', 'message': None}}) == SecondDeliveryOperationError('CreateSecondDeliveryInvalidTimeSlotErrorResponse', None)");
}

/** Translated upstream test_client_wires_all_second_delivery_operations. */
export async function test_client_wires_all_second_delivery_operations(...__args: any[]): any {
let address, call, config, end, payload, payloads, sdk, session, start;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [Object.assign({}, {["vehicle"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["vehicle"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["vehicle"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["vehicle"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["vehicle"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["vehicle"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["cancelSecondDeliveryAppointment"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["createSecondDeliveryAppointment"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["secondDeliverySendAuthCode"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["secondDeliveryVerifyAuthCode"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["updateSecondDeliveryAppointment"]: null})], null)], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
config = $.call(appointment, [], null);
address = $.call(AddressInput, [], Object.assign({}, {"postal_code": "37064"}));
start = $.call(datetime, [2026, 8, 1], Object.assign({}, {"tzinfo": UTC}));
end = $.call(datetime, [2026, 8, 31], Object.assign({}, {"tzinfo": UTC}));
$.assert((((await $.call($.attr(sdk, "async_get_second_delivery_appointment"), ["VIN"], null)) === null)), "test_second_delivery.py:305: await sdk.async_get_second_delivery_appointment('VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_get_second_delivery_home_time_slots"), ["VIN", address, "HUB", start, end], null)) === null)), "test_second_delivery.py:306: await sdk.async_get_second_delivery_home_time_slots('VIN', address, 'HUB', start, end) is None");
$.assert((((await $.call($.attr(sdk, "async_get_second_delivery_hub_time_slots"), ["HUB", "37064", start, end, "VIN"], null)) === null)), "test_second_delivery.py:316: await sdk.async_get_second_delivery_hub_time_slots('HUB', '37064', start, end, 'VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_get_second_delivery_virtual_time_slots"), ["HUB", "37064", start, end, "VIN"], null)) === null)), "test_second_delivery.py:320: await sdk.async_get_second_delivery_virtual_time_slots('HUB', '37064', start, end, 'VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_get_second_delivery_eligibility"), ["VIN"], null)) === null)), "test_second_delivery.py:330: await sdk.async_get_second_delivery_eligibility('VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_validate_second_delivery_address"), ["VIN", address], null)) === null)), "test_second_delivery.py:331: await sdk.async_validate_second_delivery_address('VIN', address) is None");
$.assert((((await $.call($.attr(sdk, "async_cancel_second_delivery_appointment"), [7], null)) === null)), "test_second_delivery.py:332: await sdk.async_cancel_second_delivery_appointment(7) is None");
$.assert((((await $.call($.attr(sdk, "async_create_second_delivery_appointment"), [config], null)) === null)), "test_second_delivery.py:333: await sdk.async_create_second_delivery_appointment(config) is None");
$.assert((((await $.call($.attr(sdk, "async_second_delivery_send_auth_code"), [42, "access-token"], Object.assign({}, {"send_via_email": true}, {"send_via_sms": false}))) === null)), "test_second_delivery.py:334: await sdk.async_second_delivery_send_auth_code(42, 'access-token', send_via_email=True, send_via_sms=False) is None");
$.assert((((await $.call($.attr(sdk, "async_second_delivery_verify_auth_code"), [42, "access-token", "123456"], null)) === null)), "test_second_delivery.py:343: await sdk.async_second_delivery_verify_auth_code(42, 'access-token', '123456') is None");
$.assert((((await $.call($.attr(sdk, "async_update_second_delivery_appointment"), [7, config], null)) === null)), "test_second_delivery.py:344: await sdk.async_update_second_delivery_appointment(7, config) is None");
payloads = [];
for (call of $.iterable($.attr(session, "calls"))) {
payload = $.get(call, "json");
$.assert($.call($.isinstance, [payload, Mapping], null), "test_second_delivery.py:349: isinstance(payload, Mapping)");
$.call($.attr(payloads, "append"), [payload], null);
}
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "operationName")); } return __out; })(), ["SecondDeliveryAppointment", "SecondDeliveryAppointmentsAtHome", "SecondDeliveryAppointmentsAtHub", "SecondDeliveryAppointmentsAtVirtual", "SecondDeliveryEligibility", "ValidateSecondDeliveryAddress", "CancelSecondDeliveryAppointment", "CreateSecondDeliveryAppointment", "SecondDeliverySendAuthCode", "SecondDeliveryVerifyAuthCode", "UpdateSecondDeliveryAppointment"], "test_second_delivery.py:351: [payload['operationName'] for payload in payloads] == ['SecondDeliveryAppointment', 'SecondDeliveryAppointmentsAtHome', 'SecondDeliveryAppointmentsAtHub', 'SecondDeliveryAppointmentsAtVirtual', 'SecondDeliveryEligibility', 'ValidateSecondDeliveryAddress', 'CancelSecondDeliveryAppointment', 'CreateSecondDeliveryAppointment', 'SecondDeliverySendAuthCode', 'SecondDeliveryVerifyAuthCode', 'UpdateSecondDeliveryAppointment']");
$.assertEqual($.get($.get(payloads, 1), "variables"), $.call(second_delivery_home_slots_variables, ["VIN", address, "HUB", start, end], null), "test_second_delivery.py:364: payloads[1]['variables'] == second_delivery_home_slots_variables('VIN', address, 'HUB', start, end)");
$.assertEqual($.get($.get(payloads, 2), "variables"), $.call(second_delivery_location_slots_variables, ["HUB", "37064", start, end, "VIN"], null), "test_second_delivery.py:371: payloads[2]['variables'] == second_delivery_location_slots_variables('HUB', '37064', start, end, 'VIN')");
$.assertEqual($.get($.get(payloads, 8), "variables"), $.call(second_delivery_send_auth_code_variables, [42, "access-token", true, false], null), "test_second_delivery.py:378: payloads[8]['variables'] == second_delivery_send_auth_code_variables(42, 'access-token', True, False)");
$.assertEqual($.get($.get(payloads, 9), "variables"), $.call(second_delivery_verify_auth_code_variables, [42, "access-token", "123456"], null), "test_second_delivery.py:384: payloads[9]['variables'] == second_delivery_verify_auth_code_variables(42, 'access-token', '123456')");
}

/** Translated upstream test_read_only_mode_blocks_all_second_delivery_mutations_before_network. */
export async function test_read_only_mode_blocks_all_second_delivery_mutations_before_network(...__args: any[]): any {
let call, calls, config, sdk, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": true}));
config = $.call(appointment, [], null);
calls = [$.call($.attr(sdk, "async_cancel_second_delivery_appointment"), [7], null), $.call($.attr(sdk, "async_create_second_delivery_appointment"), [config], null), $.call($.attr(sdk, "async_second_delivery_send_auth_code"), [42, "access-token"], Object.assign({}, {"send_via_email": true}, {"send_via_sms": false})), $.call($.attr(sdk, "async_second_delivery_verify_auth_code"), [42, "access-token", "123456"], null), $.call($.attr(sdk, "async_update_second_delivery_appointment"), [7, config], null)];
for (call of $.iterable(calls)) {
await $.raises(ReadOnlyError, null, async () => {
(await call);
});
}
$.assertEqual($.attr(session, "calls"), [], "test_second_delivery.py:412: session.calls == []");
}

$.register("test_second_delivery.py::test_second_delivery_operations_match_service_documents", test_second_delivery_operations_match_service_documents, []);

$.register("test_second_delivery.py::test_second_delivery_inputs_preserve_omitted_and_null_fields", test_second_delivery_inputs_preserve_omitted_and_null_fields, []);

$.register("test_second_delivery.py::test_parse_second_delivery_appointment_and_time_slots", test_parse_second_delivery_appointment_and_time_slots, []);

$.register("test_second_delivery.py::test_parse_eligibility_validation_and_mutation_unions", test_parse_eligibility_validation_and_mutation_unions, []);

$.register("test_second_delivery.py::test_client_wires_all_second_delivery_operations", test_client_wires_all_second_delivery_operations, []);

$.register("test_second_delivery.py::test_read_only_mode_blocks_all_second_delivery_mutations_before_network", test_read_only_mode_blocks_all_second_delivery_mutations_before_network, []);
