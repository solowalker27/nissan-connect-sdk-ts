// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Awaitable = $.Awaitable;
const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { AccountAddress, CreatePinError, DeleteAccountResult, GenerateOtpSuccess, MarketingPreferenceInput, MarketingPreferenceType, MobileCarrierCode, MobileNetworkOperator, NcarIcarAccountAvailable, NcarIcarCustomerEnrollment, NcarIcarVerifyOtpFailed, NCIMarketingPreferenceInput, NissanClient, PinOperationSuccess, PinValidationError, ReadOnlyError, RegisterAccountAddressInput, RegisterAccountDuplicateEmailError, RegisterAccountInput, RegisterAccountSuccess, RequestProof, Tokens, UpdateAccountInput, UpdateAccountSuccess, UpdatedAccountAddress, VerifyOtpFailed } from "../src/index";

import { parse_generate_otp, parse_ncar_icar_customer_enrollment, parse_ncar_icar_generate_otp, parse_ncar_icar_register_account, parse_ncar_icar_verify_account, parse_ncar_icar_verify_otp, parse_register_account, parse_verify_otp } from "../src/account_enrollment_parsing";

import { generate_otp_variables, ncar_icar_generate_otp_variables, ncar_icar_verify_account_variables, ncar_icar_verify_otp_variables, pin_variables, register_account_variables, update_account_variables, update_nci_marketing_preferences_variables, update_nna_marketing_preferences_variables, validate_nissan_id_variables, verify_otp_variables } from "../src/account_inputs";

import { parse_create_pin, parse_delete_account, parse_update_account, parse_update_pin } from "../src/account_parsing";

/** Translated upstream FakeResponse. */
export class FakeResponse {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeResponse, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"field": field, "value": value} = $.bind(__args, ["field", "value"], {"value": null}, [], null, null);
this["status"] = 200;
this["_payload"] = Object.assign({}, {["data"]: Object.assign({}, {[field]: value})});
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

/** Translated upstream FakeApplicationTokenResponse. */
export class FakeApplicationTokenResponse extends $.mix(FakeResponse) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeApplicationTokenResponse, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.superInit(this, FakeApplicationTokenResponse, ["applicationToken"]);
this["_payload"] = Object.assign({}, {["access_token"]: "application-access-token"});
}
}
$.classType(FakeApplicationTokenResponse);

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

/** Translated upstream account. */
export function account(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(RegisterAccountInput, [], Object.assign({}, {"first_name": "Ada"}, {"last_name": "Lovelace"}, {"email": "ada@example.test"}, {"phone_number": "+15555550100"}, {"password": "secret"}, {"address": $.call(RegisterAccountAddressInput, [], Object.assign({}, {"address_1": "1 Main St"}, {"city": "Franklin"}, {"state": "TN"}, {"postal_code": "37064"}, {"country": "US"}))}));
}

/** Translated upstream nna_preferences. */
export function nna_preferences(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(MarketingPreferenceInput, [], Object.assign({}, {"newsletter": []}, {"product_offers": []}, {"service_offers": []}, {"scheduled_maintenance": []}, {"feedback": [$.attr(MarketingPreferenceType, "EMAIL")]}));
}

/** Translated upstream client. */
export function client(...__args: any[]): any {
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token", "id-token"], null)}, {"read_only": read_only}, {"request_proof": $.call(RequestProof, ["api-attestation", "device-status"], null)}));
}

/** Translated upstream payloads. */
export function payloads(...__args: any[]): any {
let call, value, values;
let {"session": session} = $.bind(__args, ["session"], {}, [], null, null);
values = [];
for (call of $.iterable($.attr(session, "calls"))) {
value = $.call($.attr(call, "get"), ["json"], null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
continue;
}
$.call($.attr(values, "append"), [value], null);
}
return values;
}

/** Translated upstream test_account_enrollment_parsers_cover_success_error_and_nullable_results. */
export function test_account_enrollment_parsers_cover_success_error_and_nullable_results(...__args: any[]): any {
let enrollment, expected_enrollment;
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_register_account, [Object.assign({}, {["registerAccount"]: Object.assign({}, {["__typename"]: "RegisterAccountSuccessResponse"}, {["userId"]: "user-id"})})], null), $.call(RegisterAccountSuccess, ["user-id"], null), "test_account_mutations.py:148: parse_register_account({'registerAccount': {'__typename': 'RegisterAccountSuccessResponse', 'userId': 'user-id'}}) == RegisterAccountSuccess('user-id')");
$.assertEqual($.call(parse_ncar_icar_register_account, [Object.assign({}, {["ncarIcarRegisterAccount"]: Object.assign({}, {["__typename"]: "RegisterAccountDuplicateEmailError"}, {["message"]: "Already registered"})})], null), $.call(RegisterAccountDuplicateEmailError, ["Already registered"], null), "test_account_mutations.py:156: parse_ncar_icar_register_account({'ncarIcarRegisterAccount': {'__typename': 'RegisterAccountDuplicateEmailError', 'message': 'Already registered'}}) == RegisterAccountDuplicateEmailError('Already registered')");
$.assertEqual($.call(parse_ncar_icar_verify_account, [Object.assign({}, {["ncarIcarVerifyAccount"]: Object.assign({}, {["__typename"]: "NCARICARAccountAvailable"}, {["email"]: "ada@example.test"}, {["phoneNumber"]: "+15555550100"}, {["isOTPRequired"]: true})})], null), $.call(NcarIcarAccountAvailable, ["ada@example.test", "+15555550100", true], null), "test_account_mutations.py:164: parse_ncar_icar_verify_account({'ncarIcarVerifyAccount': {'__typename': 'NCARICARAccountAvailable', 'email': 'ada@example.test', 'phoneNumber': '+15555550100', 'isOTPRequired': True}}) == NcarIcarAccountAvailable('ada@example.test', '+15555550100', True)");
enrollment = Object.assign({}, {["__typename"]: "NCARICARCustomerEnrollmentResponse"}, {["vin"]: null}, {["firstName"]: "Ada"}, {["lastName"]: null}, {["email"]: "ada@example.test"}, {["phoneNumber"]: null}, {["address"]: Object.assign({}, {["__typename"]: "Address"}, {["address1"]: "1 Main St"}, {["address2"]: null}, {["city"]: "Franklin"}, {["state"]: "TN"}, {["postalCode"]: "37064"}, {["country"]: "US"})});
expected_enrollment = $.call(NcarIcarCustomerEnrollment, [null, "Ada", null, "ada@example.test", null, $.call(AccountAddress, ["1 Main St", null, "Franklin", "TN", "37064", "US"], null)], null);
$.assertEqual($.call(parse_ncar_icar_customer_enrollment, [Object.assign({}, {["ncarIcarCustomerEnrollment"]: enrollment})], null), expected_enrollment, "test_account_mutations.py:200: parse_ncar_icar_customer_enrollment({'ncarIcarCustomerEnrollment': enrollment}) == expected_enrollment");
$.assertEqual($.call(parse_ncar_icar_verify_otp, [Object.assign({}, {["ncarIcarVerifyOTP"]: enrollment})], null), expected_enrollment, "test_account_mutations.py:204: parse_ncar_icar_verify_otp({'ncarIcarVerifyOTP': enrollment}) == expected_enrollment");
}

/** Translated upstream test_otp_and_pin_parsers_cover_the_selected_union_shapes. */
export function test_otp_and_pin_parsers_cover_the_selected_union_shapes(...__args: any[]): any {
let generated;
let {} = $.bind(__args, [], {}, [], null, null);
generated = Object.assign({}, {["__typename"]: "GenerateOTPResponse"}, {["referenceId"]: "reference-id"}, {["retryAvailable"]: 2});
$.assertEqual($.call(parse_generate_otp, [Object.assign({}, {["nissanGenerateOTP"]: generated})], null), $.call(GenerateOtpSuccess, ["reference-id", 2], null), "test_account_mutations.py:213: parse_generate_otp({'nissanGenerateOTP': generated}) == GenerateOtpSuccess('reference-id', 2)");
$.assertEqual($.call(parse_ncar_icar_generate_otp, [Object.assign({}, {["ncarIcarGenerateOTP"]: generated})], null), $.call(GenerateOtpSuccess, ["reference-id", 2], null), "test_account_mutations.py:217: parse_ncar_icar_generate_otp({'ncarIcarGenerateOTP': generated}) == GenerateOtpSuccess('reference-id', 2)");
$.assertEqual($.call(parse_verify_otp, [Object.assign({}, {["nissanVerifyOTP"]: Object.assign({}, {["__typename"]: "VerifyOTPFailed"}, {["message"]: null}, {["retryAvailable"]: 1})})], null), $.call(VerifyOtpFailed, [null, 1], null), "test_account_mutations.py:220: parse_verify_otp({'nissanVerifyOTP': {'__typename': 'VerifyOTPFailed', 'message': None, 'retryAvailable': 1}}) == VerifyOtpFailed(None, 1)");
$.assertEqual($.call(parse_ncar_icar_verify_otp, [Object.assign({}, {["ncarIcarVerifyOTP"]: Object.assign({}, {["__typename"]: "NCARICARVerifyOTPFailed"}, {["referenceId"]: "next-reference-id"}, {["retryAvailable"]: 1})})], null), $.call(NcarIcarVerifyOtpFailed, ["next-reference-id", 1], null), "test_account_mutations.py:229: parse_ncar_icar_verify_otp({'ncarIcarVerifyOTP': {'__typename': 'NCARICARVerifyOTPFailed', 'referenceId': 'next-reference-id', 'retryAvailable': 1}}) == NcarIcarVerifyOtpFailed('next-reference-id', 1)");
$.assertEqual($.call(parse_create_pin, [Object.assign({}, {["createPin"]: Object.assign({}, {["__typename"]: "CreatePINError"}, {["message"]: "Invalid PIN"})})], null), $.call(CreatePinError, ["Invalid PIN"], null), "test_account_mutations.py:238: parse_create_pin({'createPin': {'__typename': 'CreatePINError', 'message': 'Invalid PIN'}}) == CreatePinError('Invalid PIN')");
$.assertEqual($.call(parse_update_pin, [Object.assign({}, {["updatePin"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: null})})], null), $.call(PinOperationSuccess, [null], null), "test_account_mutations.py:241: parse_update_pin({'updatePin': {'__typename': 'ResponseStatus', 'success': None}}) == PinOperationSuccess(None)");
$.assertEqual($.call(parse_update_pin, [Object.assign({}, {["updatePin"]: Object.assign({}, {["__typename"]: "ValidationError"}, {["message"]: null})})], null), $.call(PinValidationError, [null], null), "test_account_mutations.py:244: parse_update_pin({'updatePin': {'__typename': 'ValidationError', 'message': None}}) == PinValidationError(None)");
}

/** Translated upstream test_update_and_delete_account_parsers_preserve_exact_output_shapes. */
export function test_update_and_delete_account_parsers_preserve_exact_output_shapes(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_update_account, [Object.assign({}, {["updateAccount"]: Object.assign({}, {["__typename"]: "User"}, {["firstName"]: "Ada"}, {["lastName"]: "Lovelace"}, {["email"]: "ada@example.test"}, {["mobileNumber"]: null}, {["address"]: Object.assign({}, {["__typename"]: "Address"}, {["address1"]: "1 Main St"}, {["address2"]: null}, {["city"]: "Franklin"}, {["state"]: "TN"}, {["country"]: "US"}, {["postalCode"]: "37064"}, {["district"]: null}, {["streetNumber"]: null})}, {["mobileNetworkOperator"]: Object.assign({}, {["__typename"]: "MobileNetworkOperator"}, {["code"]: "FUTURE_CARRIER"}, {["id"]: 7}, {["name"]: "Carrier"})})})], null), $.call(UpdateAccountSuccess, ["Ada", "Lovelace", "ada@example.test", null, $.call(UpdatedAccountAddress, ["1 Main St", null, "Franklin", "TN", "US", "37064", null, null], null), $.call(MobileNetworkOperator, [$.attr(MobileCarrierCode, "UNKNOWN_VALUE"), 7, "Carrier"], null)], null), "test_account_mutations.py:250: parse_update_account({'updateAccount': {'__typename': 'User', 'firstName': 'Ada', 'lastName': 'Lovelace', 'email': 'ada@example.test', 'mobileNumber': None, 'address': {'__typename': 'Address', 'address1': '1 Main St', 'address2': None, 'city': 'Franklin', 'state': 'TN', 'country': 'US', 'postalCode': '37064', 'district': None, 'streetNumber': None}, 'mobileNetworkOperator': {'__typename': 'MobileNetworkOperator', 'code': 'FUTURE_CARRIER', 'id': 7, 'name': 'Carrier'}}}) == UpdateAccountSuccess('Ada', 'Lovelace', 'ada@example.test', None, UpdatedAccountAddress('1 Main St', None, 'Franklin', 'TN', 'US', '37064', None, None), MobileNetworkOperator(MobileCarrierCode.UNKNOWN_VALUE, 7, 'Carrier'))");
$.assertEqual($.call(parse_delete_account, [Object.assign({}, {["deleteAccount"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: true})})], null), $.call(DeleteAccountResult, [true], null), "test_account_mutations.py:294: parse_delete_account({'deleteAccount': {'__typename': 'ResponseStatus', 'success': True}}) == DeleteAccountResult(True)");
}

/** Translated upstream test_account_client_wires_every_operation. */
export async function test_account_client_wires_every_operation(...__args: any[]): any {
let application_token_call, nci, nna, registration, request, requests, sdk, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeApplicationTokenResponse, [], null), $.call(FakeResponse, ["validateNissanID"], null), $.call(FakeResponse, ["securityQuestions"], null), $.call(FakeResponse, ["user"], null), $.call(FakeResponse, ["termsAndConditions"], null), $.call(FakeResponse, ["user"], null), $.call(FakeResponse, ["registerAccount"], null), $.call(FakeResponse, ["ncarIcarRegisterAccount"], null), $.call(FakeResponse, ["ncarIcarVerifyAccount"], null), $.call(FakeResponse, ["ncarIcarCustomerEnrollment"], null), $.call(FakeResponse, ["ncarIcarGenerateOTP"], null), $.call(FakeResponse, ["ncarIcarVerifyOTP"], null), $.call(FakeResponse, ["nissanGenerateOTP"], null), $.call(FakeResponse, ["nissanVerifyOTP"], null), $.call(FakeResponse, ["createPin"], null), $.call(FakeResponse, ["updatePin"], null), $.call(FakeResponse, ["updateAccount"], null), $.call(FakeResponse, ["deleteAccount"], null), $.call(FakeResponse, ["updateNCIAccountPreferences"], null), $.call(FakeResponse, ["updateAccountPreferences"], null)], null);
sdk = $.call(client, [session], Object.assign({}, {"read_only": false}));
registration = $.call(account, [], null);
nci = $.call(NCIMarketingPreferenceInput, [], Object.assign({}, {"email": true}));
nna = $.call(nna_preferences, [], null);
$.assert((((await $.call($.attr(sdk, "async_validate_nissan_id"), ["ada@example.test"], null)) === null)), "test_account_mutations.py:327: await sdk.async_validate_nissan_id('ada@example.test') is None");
$.assert((((await $.call($.attr(sdk, "async_get_security_questions"), [], null)) === null)), "test_account_mutations.py:328: await sdk.async_get_security_questions() is None");
$.assert((((await $.call($.attr(sdk, "async_get_user_info"), [], null)) === null)), "test_account_mutations.py:329: await sdk.async_get_user_info() is None");
$.assert((((await $.call($.attr(sdk, "async_get_terms_and_conditions"), [], null)) === null)), "test_account_mutations.py:330: await sdk.async_get_terms_and_conditions() is None");
$.assert((((await $.call($.attr(sdk, "async_get_marketing_preferences"), [], null)) === null)), "test_account_mutations.py:331: await sdk.async_get_marketing_preferences() is None");
$.assert((((await $.call($.attr(sdk, "async_register_account"), [registration], null)) === null)), "test_account_mutations.py:332: await sdk.async_register_account(registration) is None");
$.assert((((await $.call($.attr(sdk, "async_register_ncar_icar_account"), [registration], null)) === null)), "test_account_mutations.py:333: await sdk.async_register_ncar_icar_account(registration) is None");
$.assert((((await $.call($.attr(sdk, "async_verify_ncar_icar_account"), ["guid"], null)) === null)), "test_account_mutations.py:334: await sdk.async_verify_ncar_icar_account('guid') is None");
$.assert((((await $.call($.attr(sdk, "async_get_ncar_icar_customer_enrollment"), ["guid"], null)) === null)), "test_account_mutations.py:335: await sdk.async_get_ncar_icar_customer_enrollment('guid') is None");
$.assert((((await $.call($.attr(sdk, "async_generate_ncar_icar_otp"), ["guid", "+15555550100"], null)) === null)), "test_account_mutations.py:336: await sdk.async_generate_ncar_icar_otp('guid', '+15555550100') is None");
$.assert((((await $.call($.attr(sdk, "async_verify_ncar_icar_otp"), ["guid", "+15555550100", "reference-id", "123456"], null)) === null)), "test_account_mutations.py:337: await sdk.async_verify_ncar_icar_otp('guid', '+15555550100', 'reference-id', '123456') is None");
$.assert((((await $.call($.attr(sdk, "async_generate_otp"), ["+15555550100"], null)) === null)), "test_account_mutations.py:346: await sdk.async_generate_otp('+15555550100') is None");
$.assert((((await $.call($.attr(sdk, "async_verify_otp"), ["+15555550100", "123456", "reference-id"], null)) === null)), "test_account_mutations.py:347: await sdk.async_verify_otp('+15555550100', '123456', 'reference-id') is None");
$.assert((((await $.call($.attr(sdk, "async_create_pin"), ["question-id", "answer", "1234"], null)) === null)), "test_account_mutations.py:348: await sdk.async_create_pin('question-id', 'answer', '1234') is None");
$.assert((((await $.call($.attr(sdk, "async_update_pin"), ["question-id", "answer", "5678"], null)) === null)), "test_account_mutations.py:349: await sdk.async_update_pin('question-id', 'answer', '5678') is None");
$.assert((((await $.call($.attr(sdk, "async_update_account"), [$.call(UpdateAccountInput, [], Object.assign({}, {"first_name": "Ada"}))], null)) === null)), "test_account_mutations.py:350: await sdk.async_update_account(UpdateAccountInput(first_name='Ada')) is None");
$.assert((((await $.call($.attr(sdk, "async_delete_account"), [], null)) === null)), "test_account_mutations.py:351: await sdk.async_delete_account() is None");
$.assert((((await $.call($.attr(sdk, "async_update_nci_marketing_preferences"), [nci], null)) === null)), "test_account_mutations.py:352: await sdk.async_update_nci_marketing_preferences(nci) is None");
$.assert((((await $.call($.attr(sdk, "async_update_nna_marketing_preferences"), [nna], null)) === null)), "test_account_mutations.py:353: await sdk.async_update_nna_marketing_preferences(nna) is None");
requests = $.call(payloads, [session], null);
application_token_call = $.get($.attr(session, "calls"), 0);
$.assertEqual($.get(application_token_call, "data"), Object.assign({}, {["client_id"]: "6wYMOME6Rs4kWVxS4i6b2RUsR4Ma"}, {["client_secret"]: "fWp6esCzsq3vCY6RLf3p_CV_ukAa"}, {["scope"]: $.add("openid device_", $.attr(sdk, "oauth_device_id"))}, {["grant_type"]: "client_credentials"}), "test_account_mutations.py:357: application_token_call['data'] == {'client_id': '6wYMOME6Rs4kWVxS4i6b2RUsR4Ma', 'client_secret': 'fWp6esCzsq3vCY6RLf3p_CV_ukAa', 'scope': 'openid device_' + sdk.oauth_device_id, 'grant_type': 'client_credentials'}");
$.assertEqual((() => { const __out: any = []; for (const request of $.iterable(requests)) { __out.push($.get(request, "operationName")); } return __out; })(), ["ValidateNissanID", "SecurityQuestions", "UserInfo", "TermsAndConditions", "MarketingPreferences", "RegisterAccount", "NcarIcarRegisterAccount", "NcarIcarVerifyAccount", "NcarIcarCustomerEnrollment", "NcarIcarGenerateOTP", "NcarIcarVerifyOTP", "GenerateOTP", "VerifyOTP", "CreatePin", "UpdatePin", "UpdateAccount", "DeleteAccount", "UpdateNCIMarketingPreferences", "UpdateNNAMarketingPreferences"], "test_account_mutations.py:363: [request['operationName'] for request in requests] == ['ValidateNissanID', 'SecurityQuestions', 'UserInfo', 'TermsAndConditions', 'MarketingPreferences', 'RegisterAccount', 'NcarIcarRegisterAccount', 'NcarIcarVerifyAccount', 'NcarIcarCustomerEnrollment', 'NcarIcarGenerateOTP', 'NcarIcarVerifyOTP', 'GenerateOTP', 'VerifyOTP', 'CreatePin', 'UpdatePin', 'UpdateAccount', 'DeleteAccount', 'UpdateNCIMarketingPreferences', 'UpdateNNAMarketingPreferences']");
$.assertEqual((() => { const __out: any = []; for (const request of $.iterable(requests)) { __out.push($.get(request, "variables")); } return __out; })(), [$.call(validate_nissan_id_variables, ["ada@example.test"], null), {}, {}, {}, {}, $.call(register_account_variables, [registration], null), $.call(register_account_variables, [registration], null), $.call(ncar_icar_verify_account_variables, ["guid"], null), $.call(ncar_icar_verify_account_variables, ["guid"], null), $.call(ncar_icar_generate_otp_variables, ["guid", "+15555550100"], null), $.call(ncar_icar_verify_otp_variables, ["guid", "+15555550100", "reference-id", "123456"], null), $.call(generate_otp_variables, ["+15555550100"], null), $.call(verify_otp_variables, ["+15555550100", "123456", "reference-id"], null), $.call(pin_variables, ["question-id", "answer", "1234"], null), $.call(pin_variables, ["question-id", "answer", "5678"], null), $.call(update_account_variables, [$.call(UpdateAccountInput, [], Object.assign({}, {"first_name": "Ada"}))], null), {}, $.call(update_nci_marketing_preferences_variables, [nci], null), $.call(update_nna_marketing_preferences_variables, [nna], null)], "test_account_mutations.py:384: [request['variables'] for request in requests] == [validate_nissan_id_variables('ada@example.test'), {}, {}, {}, {}, register_account_variables(registration), register_account_variables(registration), ncar_icar_verify_account_variables('guid'), ncar_icar_verify_account_variables('guid'), ncar_icar_generate_otp_variables('guid', '+15555550100'), ncar_icar_verify_otp_variables('guid', '+15555550100', 'reference-id', '123456'), generate_otp_variables('+15555550100'), verify_otp_variables('+15555550100', '123456', 'reference-id'), pin_variables('question-id', 'answer', '1234'), pin_variables('question-id', 'answer', '5678'), update_account_variables(UpdateAccountInput(first_name='Ada')), {}, update_nci_marketing_preferences_variables(nci), update_nna_marketing_preferences_variables(nna)]");
}

/** Translated upstream test_read_only_mode_blocks_every_account_mutation_before_network. */
export async function test_read_only_mode_blocks_every_account_mutation_before_network(...__args: any[]): any {
let call, calls, registration, sdk, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
sdk = $.call(client, [session], Object.assign({}, {"read_only": true}));
registration = $.call(account, [], null);
calls = [$.call($.attr(sdk, "async_register_account"), [registration], null), $.call($.attr(sdk, "async_register_ncar_icar_account"), [registration], null), $.call($.attr(sdk, "async_verify_ncar_icar_account"), ["guid"], null), $.call($.attr(sdk, "async_get_ncar_icar_customer_enrollment"), ["guid"], null), $.call($.attr(sdk, "async_generate_ncar_icar_otp"), ["guid", "+15555550100"], null), $.call($.attr(sdk, "async_verify_ncar_icar_otp"), ["guid", "+15555550100", "reference-id", "123456"], null), $.call($.attr(sdk, "async_generate_otp"), ["+15555550100"], null), $.call($.attr(sdk, "async_verify_otp"), ["+15555550100", "123456", "reference-id"], null), $.call($.attr(sdk, "async_create_pin"), ["question-id", "answer", "1234"], null), $.call($.attr(sdk, "async_update_pin"), ["question-id", "answer", "5678"], null), $.call($.attr(sdk, "async_update_account"), [$.call(UpdateAccountInput, [], Object.assign({}, {"first_name": "Ada"}))], null), $.call($.attr(sdk, "async_delete_account"), [], null), $.call($.attr(sdk, "async_update_nci_marketing_preferences"), [$.call(NCIMarketingPreferenceInput, [], Object.assign({}, {"email": true}))], null), $.call($.attr(sdk, "async_update_nna_marketing_preferences"), [$.call(nna_preferences, [], null)], null)];
for (call of $.iterable(calls)) {
await $.raises(ReadOnlyError, null, async () => {
(await call);
});
}
$.assertEqual($.attr(session, "calls"), [], "test_account_mutations.py:442: session.calls == []");
}

$.register("test_account_mutations.py::test_account_enrollment_parsers_cover_success_error_and_nullable_results", test_account_enrollment_parsers_cover_success_error_and_nullable_results, []);

$.register("test_account_mutations.py::test_otp_and_pin_parsers_cover_the_selected_union_shapes", test_otp_and_pin_parsers_cover_the_selected_union_shapes, []);

$.register("test_account_mutations.py::test_update_and_delete_account_parsers_preserve_exact_output_shapes", test_update_and_delete_account_parsers_preserve_exact_output_shapes, []);

$.register("test_account_mutations.py::test_account_client_wires_every_operation", test_account_client_wires_every_operation, []);

$.register("test_account_mutations.py::test_read_only_mode_blocks_every_account_mutation_before_network", test_read_only_mode_blocks_every_account_mutation_before_network, []);
