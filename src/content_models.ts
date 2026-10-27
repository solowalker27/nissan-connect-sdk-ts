// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { MobileCarrierCode } from "./account_models";
export { MobileCarrierCode };

export const ClientType = $.enumType("ClientType", {"IOS": "IOS", "ANDROID": "ANDROID", "OTHER": "OTHER", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type ClientType = ReturnType<typeof ClientType>;

/** Nullable account, ownership, assistance, and informational links. */
export class ContactLinks {
readonly privacy_policy: string | null;
readonly data_privacy: string | null;
readonly collision_repair: string | null;
readonly accident_helper: string | null;
readonly check_owners_portal: string | null;
readonly warranty: string | null;
readonly forgot_password: string | null;
readonly edit_contact_information_and_change_password: string | null;
readonly parts_and_accessories: string | null;
readonly ifs_account: string | null;
readonly ncesi_insurance: string | null;
readonly roadside_aid: string | null;
readonly buy_protection: string | null;
readonly nissan_added_security_plan_video: string | null;
readonly nissan_certified_pre_owned_video: string | null;
readonly nissan_prepaid_maintenance_plan_video: string | null;
readonly second_delivery_marketing_video: string | null;
readonly disconnect_remote_access: string | null;
readonly delete_account: string | null;
readonly aries_app: string | null;
static __fields = [["privacy_policy", $.MISSING], ["data_privacy", $.MISSING], ["collision_repair", $.MISSING], ["accident_helper", $.MISSING], ["check_owners_portal", $.MISSING], ["warranty", $.MISSING], ["forgot_password", $.MISSING], ["edit_contact_information_and_change_password", $.MISSING], ["parts_and_accessories", $.MISSING], ["ifs_account", $.MISSING], ["ncesi_insurance", $.MISSING], ["roadside_aid", $.MISSING], ["buy_protection", $.MISSING], ["nissan_added_security_plan_video", $.MISSING], ["nissan_certified_pre_owned_video", $.MISSING], ["nissan_prepaid_maintenance_plan_video", $.MISSING], ["second_delivery_marketing_video", $.MISSING], ["disconnect_remote_access", $.MISSING], ["delete_account", $.MISSING], ["aries_app", $.MISSING]];
constructor(privacy_policy: string | null, data_privacy: string | null, collision_repair: string | null, accident_helper: string | null, check_owners_portal: string | null, warranty: string | null, forgot_password: string | null, edit_contact_information_and_change_password: string | null, parts_and_accessories: string | null, ifs_account: string | null, ncesi_insurance: string | null, roadside_aid: string | null, buy_protection: string | null, nissan_added_security_plan_video: string | null, nissan_certified_pre_owned_video: string | null, nissan_prepaid_maintenance_plan_video: string | null, second_delivery_marketing_video: string | null, disconnect_remote_access: string | null, delete_account: string | null, aries_app: string | null);
constructor(options: { privacy_policy: string | null; data_privacy: string | null; collision_repair: string | null; accident_helper: string | null; check_owners_portal: string | null; warranty: string | null; forgot_password: string | null; edit_contact_information_and_change_password: string | null; parts_and_accessories: string | null; ifs_account: string | null; ncesi_insurance: string | null; roadside_aid: string | null; buy_protection: string | null; nissan_added_security_plan_video: string | null; nissan_certified_pre_owned_video: string | null; nissan_prepaid_maintenance_plan_video: string | null; second_delivery_marketing_video: string | null; disconnect_remote_access: string | null; delete_account: string | null; aries_app: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ContactLinks, __args);  Object.freeze(this); }
}
$.classType(ContactLinks);

/** Nullable support phone numbers published by Nissan. */
export class ContactPhoneNumbers {
readonly customer_care: string | null;
readonly stolen_vehicle_locator: string | null;
readonly stolen_vehicle_info: string | null;
readonly personal_assistant: string | null;
readonly roadside_assistant: string | null;
readonly ownership_verification: string | null;
readonly reset_voice_pin: string | null;
readonly second_delivery_customer_support: string | null;
readonly plug_and_charge_support: string | null;
readonly nissan_store: string | null;
static __fields = [["customer_care", $.MISSING], ["stolen_vehicle_locator", $.MISSING], ["stolen_vehicle_info", $.MISSING], ["personal_assistant", $.MISSING], ["roadside_assistant", $.MISSING], ["ownership_verification", $.MISSING], ["reset_voice_pin", $.MISSING], ["second_delivery_customer_support", $.MISSING], ["plug_and_charge_support", $.MISSING], ["nissan_store", $.MISSING]];
constructor(customer_care: string | null, stolen_vehicle_locator: string | null, stolen_vehicle_info: string | null, personal_assistant: string | null, roadside_assistant: string | null, ownership_verification: string | null, reset_voice_pin: string | null, second_delivery_customer_support: string | null, plug_and_charge_support: string | null, nissan_store: string | null);
constructor(options: { customer_care: string | null; stolen_vehicle_locator: string | null; stolen_vehicle_info: string | null; personal_assistant: string | null; roadside_assistant: string | null; ownership_verification: string | null; reset_voice_pin: string | null; second_delivery_customer_support: string | null; plug_and_charge_support: string | null; nissan_store: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ContactPhoneNumbers, __args);  Object.freeze(this); }
}
$.classType(ContactPhoneNumbers);

/** Nullable support email addresses published by Nissan. */
export class ContactEmailAddresses {
readonly second_delivery_customer_support: string | null;
static __fields = [["second_delivery_customer_support", $.MISSING]];
constructor(second_delivery_customer_support: string | null);
constructor(options: { second_delivery_customer_support: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ContactEmailAddresses, __args);  Object.freeze(this); }
}
$.classType(ContactEmailAddresses);

/** Contact links, phone numbers, and email addresses. */
export class ContactUsInfo {
readonly links: ContactLinks | null;
readonly phone_numbers: ContactPhoneNumbers | null;
readonly email_addresses: ContactEmailAddresses | null;
static __fields = [["links", $.MISSING], ["phone_numbers", $.MISSING], ["email_addresses", $.MISSING]];
constructor(links: ContactLinks | null, phone_numbers: ContactPhoneNumbers | null, email_addresses: ContactEmailAddresses | null);
constructor(options: { links: ContactLinks | null; phone_numbers: ContactPhoneNumbers | null; email_addresses: ContactEmailAddresses | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ContactUsInfo, __args);  Object.freeze(this); }
}
$.classType(ContactUsInfo);

/** Nullable certified-pre-owned brand and preferred provider. */
export class CertifiedPreOwnedProvider {
readonly brand_name: string | null;
readonly preferred_provider: string | null;
static __fields = [["brand_name", $.MISSING], ["preferred_provider", $.MISSING]];
constructor(brand_name: string | null, preferred_provider: string | null);
constructor(options: { brand_name: string | null; preferred_provider: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CertifiedPreOwnedProvider, __args);  Object.freeze(this); }
}
$.classType(CertifiedPreOwnedProvider);

/** Certified-pre-owned service response. */
export class CertifiedPreOwnedDetails {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: ReadonlyArray<CertifiedPreOwnedProvider | null> | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ReadonlyArray<CertifiedPreOwnedProvider | null> | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: ReadonlyArray<CertifiedPreOwnedProvider | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CertifiedPreOwnedDetails, __args);  Object.freeze(this); }
}
$.classType(CertifiedPreOwnedDetails);

/** A required question and answer. */
export class FrequentlyAskedQuestion {
readonly question: string;
readonly answer: string;
static __fields = [["question", $.MISSING], ["answer", $.MISSING]];
constructor(question: string, answer: string);
constructor(options: { question: string; answer: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, FrequentlyAskedQuestion, __args);  Object.freeze(this); }
}
$.classType(FrequentlyAskedQuestion);

/** FAQ category and its required entries. */
export class FrequentlyAskedQuestionCategory {
readonly category: string;
readonly entries: ReadonlyArray<FrequentlyAskedQuestion>;
static __fields = [["category", $.MISSING], ["entries", $.MISSING]];
constructor(category: string, entries: ReadonlyArray<FrequentlyAskedQuestion>);
constructor(options: { category: string; entries: ReadonlyArray<FrequentlyAskedQuestion> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, FrequentlyAskedQuestionCategory, __args);  Object.freeze(this); }
}
$.classType(FrequentlyAskedQuestionCategory);

/** Nullable availability window for one support department. */
export class LiveChatHours {
readonly department_name: string | null;
readonly opening_time: $.DateValue | null;
readonly closing_time: $.DateValue | null;
readonly after_hour_message: string | null;
readonly available_now: boolean | null;
static __fields = [["department_name", $.MISSING], ["opening_time", $.MISSING], ["closing_time", $.MISSING], ["after_hour_message", $.MISSING], ["available_now", $.MISSING]];
constructor(department_name: string | null, opening_time: $.DateValue | null, closing_time: $.DateValue | null, after_hour_message: string | null, available_now: boolean | null);
constructor(options: { department_name: string | null; opening_time: $.DateValue | null; closing_time: $.DateValue | null; after_hour_message: string | null; available_now: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, LiveChatHours, __args);  Object.freeze(this); }
}
$.classType(LiveChatHours);

/** Mobile carrier accepted by account registration and updates. */
export class MobileCarrier {
readonly id: number;
readonly code: MobileCarrierCode;
readonly name: string;
static __fields = [["id", $.MISSING], ["code", $.MISSING], ["name", $.MISSING]];
constructor(id: number, code: MobileCarrierCode, name: string);
constructor(options: { id: number; code: MobileCarrierCode; name: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MobileCarrier, __args);  Object.freeze(this); }
}
$.classType(MobileCarrier);
