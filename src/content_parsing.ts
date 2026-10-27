// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

import { MobileCarrierCode } from "./account_models";
export { MobileCarrierCode };

import { _required_enum, _required_field, _required_int, _required_nullable_bool, _required_nullable_string, _required_optional_typed_object, _required_string, _typed_object } from "./account_parsing";
export { _required_enum, _required_field, _required_int, _required_nullable_bool, _required_nullable_string, _required_optional_typed_object, _required_string, _typed_object };

import { CertifiedPreOwnedDetails, CertifiedPreOwnedProvider, ContactEmailAddresses, ContactLinks, ContactPhoneNumbers, ContactUsInfo, FrequentlyAskedQuestion, FrequentlyAskedQuestionCategory, LiveChatHours, MobileCarrier } from "./content_models";
export { CertifiedPreOwnedDetails, CertifiedPreOwnedProvider, ContactEmailAddresses, ContactLinks, ContactPhoneNumbers, ContactUsInfo, FrequentlyAskedQuestion, FrequentlyAskedQuestionCategory, LiveChatHours, MobileCarrier };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function parse_contact_us(data: Record<string, unknown>): ContactUsInfo;
/** Parse account and support contact information. */
export function parse_contact_us(...__args: any[]): any {
let contact, email_addresses, links, phone_numbers;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse account and support contact information. */
contact = $.call(_required_typed_object, [data, "contactUs", "contactUs"], null);
links = $.call(_required_optional_typed_object, [contact, "link", "contactUs.link"], null);
phone_numbers = $.call(_required_optional_typed_object, [contact, "phoneNumber", "contactUs.phoneNumber"], null);
email_addresses = $.call(_required_optional_typed_object, [contact, "email", "contactUs.email"], null);
return $.call(ContactUsInfo, [], Object.assign({}, {"links": ($.truth(((links !== null))) ? $.call(_parse_contact_links, [links], null) : null)}, {"phone_numbers": ($.truth(((phone_numbers !== null))) ? $.call(_parse_phone_numbers, [phone_numbers], null) : null)}, {"email_addresses": ($.truth(((email_addresses !== null))) ? $.call(ContactEmailAddresses, [$.call(_required_nullable_string, [email_addresses, "secondDeliveryCustomerSupport", "contactUs.email.secondDeliveryCustomerSupport"], null)], null) : null)}));
}

export function parse_cpo_details(data: Record<string, unknown>): CertifiedPreOwnedDetails | null;
/** Parse nullable certified-pre-owned provider details. */
export function parse_cpo_details(...__args: any[]): any {
let details, index, item, parsed_providers, path, provider, providers, value, values;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable certified-pre-owned provider details. */
value = $.call(_required_field, [data, "cpoDetails", "cpoDetails"], null);
if ($.truth(((value === null)))) {
return null;
}
details = $.call(_typed_object, [value, "cpoDetails"], null);
providers = $.call(_nullable_object_list, [details, "data", "cpoDetails.data"], null);
parsed_providers = null;
if ($.truth(((providers !== null)))) {
values = [];
for ([index, provider] of $.iterable($.call($.enumerate, [providers], null))) {
if ($.truth(((provider === null)))) {
$.call($.attr(values, "append"), [null], null);
continue;
}
path = ("cpoDetails.data[" + $.str(index) + "]");
item = $.call(_typed_object, [provider, path], null);
$.call($.attr(values, "append"), [$.call(CertifiedPreOwnedProvider, [$.call(_required_nullable_string, [item, "brandName", ($.str(path) + ".brandName")], null), $.call(_required_nullable_string, [item, "preferredProvider", ($.str(path) + ".preferredProvider")], null)], null)], null);
}
parsed_providers = $.call($.tuple, [values], null);
}
return $.call(CertifiedPreOwnedDetails, [], Object.assign({}, {"status_code": $.call(_required_nullable_string, [details, "statusCode", "cpoDetails.statusCode"], null)}, {"status_message": $.call(_required_nullable_string, [details, "statusMessage", "cpoDetails.statusMessage"], null)}, {"timestamp": $.call(_required_nullable_string, [details, "timestamp", "cpoDetails.timestamp"], null)}, {"data": parsed_providers}));
}

export function parse_faq(data: Record<string, unknown>): ReadonlyArray<FrequentlyAskedQuestionCategory>;
/** Parse required FAQ categories and entries. */
export function parse_faq(...__args: any[]): any {
let categories, category, category_value, entries, entry, entry_index, entry_path, entry_value, index, parsed_entries, path, results;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse required FAQ categories and entries. */
categories = $.call(_required_list, [data, "faqs", "faqs"], null);
results = [];
for ([index, category_value] of $.iterable($.call($.enumerate, [categories], null))) {
path = ("faqs[" + $.str(index) + "]");
category = $.call(_typed_object, [category_value, path], null);
entries = $.call(_required_list, [category, "data", ($.str(path) + ".data")], null);
parsed_entries = [];
for ([entry_index, entry_value] of $.iterable($.call($.enumerate, [entries], null))) {
entry_path = ($.str(path) + ".data[" + $.str(entry_index) + "]");
entry = $.call(_typed_object, [entry_value, entry_path], null);
$.call($.attr(parsed_entries, "append"), [$.call(FrequentlyAskedQuestion, [$.call(_required_string, [entry, "question", ($.str(entry_path) + ".question")], null), $.call(_required_string, [entry, "answer", ($.str(entry_path) + ".answer")], null)], null)], null);
}
$.call($.attr(results, "append"), [$.call(FrequentlyAskedQuestionCategory, [], Object.assign({}, {"category": $.call(_required_string, [category, "category", ($.str(path) + ".category")], null)}, {"entries": $.call($.tuple, [parsed_entries], null)}))], null);
}
return $.call($.tuple, [results], null);
}

export function parse_live_chat_hours(data: Record<string, unknown>): ReadonlyArray<LiveChatHours | null> | null;
/** Parse nullable live-chat availability entries. */
export function parse_live_chat_hours(...__args: any[]): any {
let contact, index, item, path, results, value, values;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable live-chat availability entries. */
contact = $.call(_required_typed_object, [data, "contactUs", "contactUs"], null);
values = $.call(_nullable_object_list, [contact, "liveChatHours", "contactUs.liveChatHours"], null);
if ($.truth(((values === null)))) {
return null;
}
results = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(results, "append"), [null], null);
continue;
}
path = ("contactUs.liveChatHours[" + $.str(index) + "]");
item = $.call(_typed_object, [value, path], null);
$.call($.attr(results, "append"), [$.call(LiveChatHours, [], Object.assign({}, {"department_name": $.call(_required_nullable_string, [item, "departmentName", ($.str(path) + ".departmentName")], null)}, {"opening_time": $.call(_required_nullable_datetime, [item, "openingTime", ($.str(path) + ".openingTime")], null)}, {"closing_time": $.call(_required_nullable_datetime, [item, "closingTime", ($.str(path) + ".closingTime")], null)}, {"after_hour_message": $.call(_required_nullable_string, [item, "afterHourMessage", ($.str(path) + ".afterHourMessage")], null)}, {"available_now": $.call(_required_nullable_bool, [item, "availableNow", ($.str(path) + ".availableNow")], null)}))], null);
}
return $.call($.tuple, [results], null);
}

export function parse_mobile_carriers(data: Record<string, unknown>): ReadonlyArray<MobileCarrier>;
/** Parse the required mobile-carrier catalog. */
export function parse_mobile_carriers(...__args: any[]): any {
let carriers, index, item, path, value, values;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the required mobile-carrier catalog. */
values = $.call(_required_list, [data, "mobileCarriers", "mobileCarriers"], null);
carriers = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
path = ("mobileCarriers[" + $.str(index) + "]");
item = $.call(_typed_object, [value, path], null);
$.call($.attr(carriers, "append"), [$.call(MobileCarrier, [], Object.assign({}, {"id": $.call(_required_int, [item, "id", ($.str(path) + ".id")], null)}, {"code": $.call(_required_enum, [item, "code", MobileCarrierCode, ($.str(path) + ".code")], null)}, {"name": $.call(_required_string, [item, "name", ($.str(path) + ".name")], null)}))], null);
}
return $.call($.tuple, [carriers], null);
}

export function _parse_contact_links(value: Record<string, unknown>): ContactLinks;
/** Translated upstream _parse_contact_links. */
export function _parse_contact_links(...__args: any[]): any {
let field, fields, path, values;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
path = "contactUs.link";
fields = ["privacyPolicy", "dataPrivacy", "collisionRepair", "accidentHelper", "checkOwnersPortal", "warranty", "forgotPassword", "editContactInformationAndChangePassword", "partsAndAccessories", "ifsAccount", "ncesiInsurance", "roadsideAid", "buyProtection", "nissanAddedSecurityPlanVideo", "nissanCertifiedPreOwnedVideo", "nissanPrepaidMaintenancePlanVideo", "secondDeliveryMarketingVideo", "disconnectRemoteAccess", "deleteAccount", "ariesApp"];
values = $.call($.tuple, [(() => { const __out: any = []; for (const field of $.iterable(fields)) { __out.push($.call(_required_nullable_string, [value, field, ($.str(path) + "." + $.str(field))], null)); } return __out; })()], null);
return $.call(ContactLinks, [...$.iterable(values)], null);
}

export function _parse_phone_numbers(value: Record<string, unknown>): ContactPhoneNumbers;
/** Translated upstream _parse_phone_numbers. */
export function _parse_phone_numbers(...__args: any[]): any {
let field, fields, path, values;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
path = "contactUs.phoneNumber";
fields = ["customerCare", "stolenVehicleLocator", "stolenVehicleInfo", "personalAssistant", "roadsideAssistant", "ownershipVerification", "resetVoicePin", "secondDeliveryCustomerSupport", "plugAndChargeSupport", "nissanStore"];
values = $.call($.tuple, [(() => { const __out: any = []; for (const field of $.iterable(fields)) { __out.push($.call(_required_nullable_string, [value, field, ($.str(path) + "." + $.str(field))], null)); } return __out; })()], null);
return $.call(ContactPhoneNumbers, [...$.iterable(values)], null);
}

export function _required_typed_object(container: Record<string, unknown>, field: string, path: string): Record<string, unknown>;
/** Translated upstream _required_typed_object. */
export function _required_typed_object(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_typed_object, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _required_list(container: Record<string, unknown>, field: string, path: string): ReadonlyArray<unknown>;
/** Translated upstream _required_list. */
export function _required_list(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _nullable_object_list(container: Record<string, unknown>, field: string, path: string): ReadonlyArray<unknown> | null;
/** Translated upstream _nullable_object_list. */
export function _nullable_object_list(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _required_nullable_datetime(container: Record<string, unknown>, field: string, path: string): $.DateValue | null;
/** Translated upstream _required_nullable_datetime. */
export function _required_nullable_datetime(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a date-time string")], null);
}
try {
return $.call($.attr(datetime, "fromisoformat"), [$.call($.attr(value, "replace"), ["Z", "+00:00"], null)], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { let error = __error; throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time")], null); } else { throw __error; }
}
}
