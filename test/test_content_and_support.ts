// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const Mapping = $.Mapping;

const UTC = $.UTC;
const datetime = $.datetime;

const cast = $.cast;

const ClientSession = $.ClientSession;

import { CertifiedPreOwnedDetails, CertifiedPreOwnedProvider, ClientType, FrequentlyAskedQuestion, FrequentlyAskedQuestionCategory, LiveChatHours, MobileCarrier, MobileCarrierCode, NissanClient, Tokens, operations } from "../src/index";

import { contact_us_variables, faq_variables, live_chat_hours_variables } from "../src/content_inputs";

import { parse_contact_us, parse_cpo_details, parse_faq, parse_live_chat_hours, parse_mobile_carriers } from "../src/content_parsing";

export let EXPECTED_OPERATIONS = Object.assign({}, {["CONTACT_US"]: "1a2cb197c34dd46fa630db96c73045b2db32ba1ebdeaada4317094c5e388477a"}, {["CPO_DETAILS"]: "72e02068df86ded6c9c68b75bcc2854a4cddfc8304d78b0e8334c5e72571753b"}, {["FAQ"]: "5896b6271d98fa7ad09ea38a7c1cf04e371b87514719d7ce8b4999bc60c0346d"}, {["LIVE_CHAT_HOURS"]: "92c22ee63380315cd5c61993db910e8c451495d0f822c7a008a76642282d98a9"}, {["MOBILE_CARRIERS"]: "5092ec79bc33ce00b3955693e1ecc513c3728bfe5be2c722dbf0525bdead660d"});

/** Translated upstream FakeResponse. */
export class FakeResponse {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
let {"field": field, "value": value} = $.bind(__args, ["field", "value"], {}, [], null, null);
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

/** Translated upstream FakeSession. */
export class FakeSession {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
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

/** Translated upstream test_content_operations_match_service_documents. */
export function test_content_operations_match_service_documents(...__args: any[]): any {
let constant, document, expected_id, operation_id;
let {} = $.bind(__args, [], {}, [], null, null);
for ([constant, expected_id] of $.iterable($.call($.attr(EXPECTED_OPERATIONS, "items"), [], null))) {
document = $.call($.getattr, [operations, constant], null);
operation_id = $.call($.getattr, [operations, ($.str(constant) + "_OPERATION_ID")], null);
$.assert(($.eq(operation_id, expected_id)), "test_content_and_support.py:76: operation_id == expected_id");
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), expected_id)), "test_content_and_support.py:77: hashlib.sha256(document.encode()).hexdigest() == expected_id");
}
}

/** Translated upstream test_content_query_variables_preserve_apollo_optionality. */
export function test_content_query_variables_preserve_apollo_optionality(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(contact_us_variables, [$.attr(ClientType, "ANDROID")], null), Object.assign({}, {["clientType"]: "ANDROID"}))), "test_content_and_support.py:81: contact_us_variables(ClientType.ANDROID) == {'clientType': 'ANDROID'}");
$.assert(($.eq($.call(faq_variables, [], null), {})), "test_content_and_support.py:82: faq_variables() == {}");
$.assert(($.eq($.call(faq_variables, [null], null), Object.assign({}, {["categories"]: null}))), "test_content_and_support.py:83: faq_variables(None) == {'categories': None}");
$.assert(($.eq($.call(faq_variables, [["OWNER", null]], null), Object.assign({}, {["categories"]: ["OWNER", null]}))), "test_content_and_support.py:84: faq_variables(('OWNER', None)) == {'categories': ['OWNER', None]}");
$.assert(($.eq($.call(live_chat_hours_variables, [["SALES", null]], Object.assign({}, {"enhanced_chat": null})), Object.assign({}, {["departments"]: ["SALES", null]}, {["enhancedChat"]: null}))), "test_content_and_support.py:85: live_chat_hours_variables(('SALES', None), enhanced_chat=None) == {'departments': ['SALES', None], 'enhancedChat': None}");
}

/** Translated upstream test_parse_contact_us_preserves_nullable_groups_and_fields. */
export function test_parse_contact_us_preserves_nullable_groups_and_fields(...__args: any[]): any {
let field, link_fields, links, result;
let {} = $.bind(__args, [], {}, [], null, null);
link_fields = ["privacyPolicy", "dataPrivacy", "collisionRepair", "accidentHelper", "checkOwnersPortal", "warranty", "forgotPassword", "editContactInformationAndChangePassword", "partsAndAccessories", "ifsAccount", "ncesiInsurance", "roadsideAid", "buyProtection", "nissanAddedSecurityPlanVideo", "nissanCertifiedPreOwnedVideo", "nissanPrepaidMaintenancePlanVideo", "secondDeliveryMarketingVideo", "disconnectRemoteAccess", "deleteAccount", "ariesApp"];
links = (() => { const __out: any = {}; for (const field of $.iterable(link_fields)) { __out[field] = null; } return __out; })();
$.call($.attr(links, "update"), [Object.assign({}, {["__typename"]: "ContactUsLink"}, {["privacyPolicy"]: "https://example.test"})], null);
result = $.call(parse_contact_us, [Object.assign({}, {["contactUs"]: Object.assign({}, {["__typename"]: "ContactUs"}, {["link"]: links}, {["phoneNumber"]: null}, {["email"]: Object.assign({}, {["__typename"]: "ContactUsEmail"}, {["secondDeliveryCustomerSupport"]: null})})})], null);
$.assert((($.attr(result, "links") !== null)), "test_content_and_support.py:131: result.links is not None");
$.assert(($.eq($.attr($.attr(result, "links"), "privacy_policy"), "https://example.test")), "test_content_and_support.py:132: result.links.privacy_policy == 'https://example.test'");
$.assert((($.attr($.attr(result, "links"), "aries_app") === null)), "test_content_and_support.py:133: result.links.aries_app is None");
$.assert((($.attr(result, "phone_numbers") === null)), "test_content_and_support.py:134: result.phone_numbers is None");
$.assert((($.attr(result, "email_addresses") !== null)), "test_content_and_support.py:135: result.email_addresses is not None");
$.assert((($.attr($.attr(result, "email_addresses"), "second_delivery_customer_support") === null)), "test_content_and_support.py:136: result.email_addresses.second_delivery_customer_support is None");
}

/** Translated upstream test_parse_cpo_faq_live_chat_and_mobile_carriers. */
export function test_parse_cpo_faq_live_chat_and_mobile_carriers(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_cpo_details, [Object.assign({}, {["cpoDetails"]: Object.assign({}, {["__typename"]: "CpoDetails"}, {["statusCode"]: null}, {["statusMessage"]: "Ready"}, {["timestamp"]: null}, {["data"]: [null, Object.assign({}, {["__typename"]: "CpoData"}, {["brandName"]: "Nissan"}, {["preferredProvider"]: null})]})})], null), $.call(CertifiedPreOwnedDetails, [null, "Ready", null, [null, $.call(CertifiedPreOwnedProvider, ["Nissan", null], null)]], null))), "test_content_and_support.py:140: parse_cpo_details({'cpoDetails': {'__typename': 'CpoDetails', 'statusCode': None, 'statusMessage': 'Ready', 'timestamp': None, 'data': [None, {'__typename': 'CpoData', 'brandName': 'Nissan', 'preferredProvider': None}]}}) == CertifiedPreOwnedDetails(None, 'Ready', None, (None, CertifiedPreOwnedProvider('Nissan', None)))");
$.assert(($.eq($.call(parse_faq, [Object.assign({}, {["faqs"]: [Object.assign({}, {["__typename"]: "FAQ"}, {["category"]: "ACCOUNT"}, {["data"]: [Object.assign({}, {["__typename"]: "FAQData"}, {["question"]: "How?"}, {["answer"]: "Carefully."})]})]})], null), [$.call(FrequentlyAskedQuestionCategory, ["ACCOUNT", [$.call(FrequentlyAskedQuestion, ["How?", "Carefully."], null)]], null)])), "test_content_and_support.py:163: parse_faq({'faqs': [{'__typename': 'FAQ', 'category': 'ACCOUNT', 'data': [{'__typename': 'FAQData', 'question': 'How?', 'answer': 'Carefully.'}]}]}) == (FrequentlyAskedQuestionCategory('ACCOUNT', (FrequentlyAskedQuestion('How?', 'Carefully.'),)),)");
$.assert(($.eq($.call(parse_live_chat_hours, [Object.assign({}, {["contactUs"]: Object.assign({}, {["__typename"]: "ContactUs"}, {["liveChatHours"]: [null, Object.assign({}, {["__typename"]: "LiveChatHours"}, {["departmentName"]: "Sales"}, {["openingTime"]: "2026-07-31T08:00:00Z"}, {["closingTime"]: null}, {["afterHourMessage"]: null}, {["availableNow"]: true})]})})], null), [null, $.call(LiveChatHours, ["Sales", $.call(datetime, [2026, 7, 31, 8], Object.assign({}, {"tzinfo": UTC})), null, null, true], null)])), "test_content_and_support.py:185: parse_live_chat_hours({'contactUs': {'__typename': 'ContactUs', 'liveChatHours': [None, {'__typename': 'LiveChatHours', 'departmentName': 'Sales', 'openingTime': '2026-07-31T08:00:00Z', 'closingTime': None, 'afterHourMessage': None, 'availableNow': True}]}}) == (None, LiveChatHours('Sales', datetime(2026, 7, 31, 8, tzinfo=UTC), None, None, True))");
$.assert(($.eq($.call(parse_mobile_carriers, [Object.assign({}, {["mobileCarriers"]: [Object.assign({}, {["__typename"]: "MobileCarrier"}, {["id"]: 7}, {["code"]: "FUTURE_CARRIER"}, {["name"]: "Carrier"})]})], null), [$.call(MobileCarrier, [7, $.attr(MobileCarrierCode, "UNKNOWN_VALUE"), "Carrier"], null)])), "test_content_and_support.py:212: parse_mobile_carriers({'mobileCarriers': [{'__typename': 'MobileCarrier', 'id': 7, 'code': 'FUTURE_CARRIER', 'name': 'Carrier'}]}) == (MobileCarrier(7, MobileCarrierCode.UNKNOWN_VALUE, 'Carrier'),)");
}

/** Translated upstream test_client_wires_every_content_and_support_query. */
export async function test_client_wires_every_content_and_support_query(...__args: any[]): any {
let call, payload, payloads, sdk, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, ["contactUs", Object.assign({}, {["__typename"]: "ContactUs"}, {["link"]: null}, {["phoneNumber"]: null}, {["email"]: null})], null), $.call(FakeResponse, ["cpoDetails", null], null), $.call(FakeResponse, ["faqs", []], null), $.call(FakeResponse, ["contactUs", Object.assign({}, {["__typename"]: "ContactUs"}, {["liveChatHours"]: null})], null), $.call(FakeResponse, ["mobileCarriers", []], null)], null);
sdk = $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token", "id-token"], null)}));
$.assert((($.attr((await $.call($.attr(sdk, "async_get_contact_us"), [], null)), "links") === null)), "test_content_and_support.py:247: (await sdk.async_get_contact_us()).links is None");
$.assert((((await $.call($.attr(sdk, "async_get_cpo_details"), [], null)) === null)), "test_content_and_support.py:248: await sdk.async_get_cpo_details() is None");
$.assert(($.eq((await $.call($.attr(sdk, "async_get_faq"), [["ACCOUNT"]], null)), [])), "test_content_and_support.py:249: await sdk.async_get_faq(('ACCOUNT',)) == ()");
$.assert((((await $.call($.attr(sdk, "async_get_live_chat_hours"), [], Object.assign({}, {"enhanced_chat": true}))) === null)), "test_content_and_support.py:250: await sdk.async_get_live_chat_hours(enhanced_chat=True) is None");
$.assert(($.eq((await $.call($.attr(sdk, "async_get_mobile_carriers"), [], null)), [])), "test_content_and_support.py:251: await sdk.async_get_mobile_carriers() == ()");
payloads = [];
for (call of $.iterable($.attr(session, "calls"))) {
payload = $.get(call, "json");
$.assert($.call($.isinstance, [payload, Mapping], null), "test_content_and_support.py:256: isinstance(payload, Mapping)");
$.call($.attr(payloads, "append"), [payload], null);
}
$.assert(($.eq((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "operationName")); } return __out; })(), ["ContactUs", "CpoDetails", "FAQ", "LiveChatHours", "MobileCarriers"])), "test_content_and_support.py:258: [payload['operationName'] for payload in payloads] == ['ContactUs', 'CpoDetails', 'FAQ', 'LiveChatHours', 'MobileCarriers']");
$.assert(($.eq((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "variables")); } return __out; })(), [$.call(contact_us_variables, [$.attr(ClientType, "ANDROID")], null), {}, $.call(faq_variables, [["ACCOUNT"]], null), $.call(live_chat_hours_variables, [], Object.assign({}, {"enhanced_chat": true})), {}])), "test_content_and_support.py:265: [payload['variables'] for payload in payloads] == [contact_us_variables(ClientType.ANDROID), {}, faq_variables(('ACCOUNT',)), live_chat_hours_variables(enhanced_chat=True), {}]");
}

$.register("test_content_and_support.py::test_content_operations_match_service_documents", test_content_operations_match_service_documents, []);

$.register("test_content_and_support.py::test_content_query_variables_preserve_apollo_optionality", test_content_query_variables_preserve_apollo_optionality, []);

$.register("test_content_and_support.py::test_parse_contact_us_preserves_nullable_groups_and_fields", test_parse_contact_us_preserves_nullable_groups_and_fields, []);

$.register("test_content_and_support.py::test_parse_cpo_faq_live_chat_and_mobile_carriers", test_parse_cpo_faq_live_chat_and_mobile_carriers, []);

$.register("test_content_and_support.py::test_client_wires_every_content_and_support_query", test_client_wires_every_content_and_support_query, []);
