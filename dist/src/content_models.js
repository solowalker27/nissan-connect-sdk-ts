"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCarrier = exports.LiveChatHours = exports.FrequentlyAskedQuestionCategory = exports.FrequentlyAskedQuestion = exports.CertifiedPreOwnedDetails = exports.CertifiedPreOwnedProvider = exports.ContactUsInfo = exports.ContactEmailAddresses = exports.ContactPhoneNumbers = exports.ContactLinks = exports.ClientType = exports.MobileCarrierCode = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const account_models_1 = require("./account_models");
Object.defineProperty(exports, "MobileCarrierCode", { enumerable: true, get: function () { return account_models_1.MobileCarrierCode; } });
exports.ClientType = _runtime_1.py.enumType("ClientType", { "IOS": "IOS", "ANDROID": "ANDROID", "OTHER": "OTHER", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Nullable account, ownership, assistance, and informational links. */
class ContactLinks {
    privacy_policy;
    data_privacy;
    collision_repair;
    accident_helper;
    check_owners_portal;
    warranty;
    forgot_password;
    edit_contact_information_and_change_password;
    parts_and_accessories;
    ifs_account;
    ncesi_insurance;
    roadside_aid;
    buy_protection;
    nissan_added_security_plan_video;
    nissan_certified_pre_owned_video;
    nissan_prepaid_maintenance_plan_video;
    second_delivery_marketing_video;
    disconnect_remote_access;
    delete_account;
    aries_app;
    static __fields = [["privacy_policy", _runtime_1.py.MISSING], ["data_privacy", _runtime_1.py.MISSING], ["collision_repair", _runtime_1.py.MISSING], ["accident_helper", _runtime_1.py.MISSING], ["check_owners_portal", _runtime_1.py.MISSING], ["warranty", _runtime_1.py.MISSING], ["forgot_password", _runtime_1.py.MISSING], ["edit_contact_information_and_change_password", _runtime_1.py.MISSING], ["parts_and_accessories", _runtime_1.py.MISSING], ["ifs_account", _runtime_1.py.MISSING], ["ncesi_insurance", _runtime_1.py.MISSING], ["roadside_aid", _runtime_1.py.MISSING], ["buy_protection", _runtime_1.py.MISSING], ["nissan_added_security_plan_video", _runtime_1.py.MISSING], ["nissan_certified_pre_owned_video", _runtime_1.py.MISSING], ["nissan_prepaid_maintenance_plan_video", _runtime_1.py.MISSING], ["second_delivery_marketing_video", _runtime_1.py.MISSING], ["disconnect_remote_access", _runtime_1.py.MISSING], ["delete_account", _runtime_1.py.MISSING], ["aries_app", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ContactLinks, __args); Object.freeze(this); }
}
exports.ContactLinks = ContactLinks;
_runtime_1.py.classType(ContactLinks);
/** Nullable support phone numbers published by Nissan. */
class ContactPhoneNumbers {
    customer_care;
    stolen_vehicle_locator;
    stolen_vehicle_info;
    personal_assistant;
    roadside_assistant;
    ownership_verification;
    reset_voice_pin;
    second_delivery_customer_support;
    plug_and_charge_support;
    nissan_store;
    static __fields = [["customer_care", _runtime_1.py.MISSING], ["stolen_vehicle_locator", _runtime_1.py.MISSING], ["stolen_vehicle_info", _runtime_1.py.MISSING], ["personal_assistant", _runtime_1.py.MISSING], ["roadside_assistant", _runtime_1.py.MISSING], ["ownership_verification", _runtime_1.py.MISSING], ["reset_voice_pin", _runtime_1.py.MISSING], ["second_delivery_customer_support", _runtime_1.py.MISSING], ["plug_and_charge_support", _runtime_1.py.MISSING], ["nissan_store", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ContactPhoneNumbers, __args); Object.freeze(this); }
}
exports.ContactPhoneNumbers = ContactPhoneNumbers;
_runtime_1.py.classType(ContactPhoneNumbers);
/** Nullable support email addresses published by Nissan. */
class ContactEmailAddresses {
    second_delivery_customer_support;
    static __fields = [["second_delivery_customer_support", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ContactEmailAddresses, __args); Object.freeze(this); }
}
exports.ContactEmailAddresses = ContactEmailAddresses;
_runtime_1.py.classType(ContactEmailAddresses);
/** Contact links, phone numbers, and email addresses. */
class ContactUsInfo {
    links;
    phone_numbers;
    email_addresses;
    static __fields = [["links", _runtime_1.py.MISSING], ["phone_numbers", _runtime_1.py.MISSING], ["email_addresses", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ContactUsInfo, __args); Object.freeze(this); }
}
exports.ContactUsInfo = ContactUsInfo;
_runtime_1.py.classType(ContactUsInfo);
/** Nullable certified-pre-owned brand and preferred provider. */
class CertifiedPreOwnedProvider {
    brand_name;
    preferred_provider;
    static __fields = [["brand_name", _runtime_1.py.MISSING], ["preferred_provider", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CertifiedPreOwnedProvider, __args); Object.freeze(this); }
}
exports.CertifiedPreOwnedProvider = CertifiedPreOwnedProvider;
_runtime_1.py.classType(CertifiedPreOwnedProvider);
/** Certified-pre-owned service response. */
class CertifiedPreOwnedDetails {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CertifiedPreOwnedDetails, __args); Object.freeze(this); }
}
exports.CertifiedPreOwnedDetails = CertifiedPreOwnedDetails;
_runtime_1.py.classType(CertifiedPreOwnedDetails);
/** A required question and answer. */
class FrequentlyAskedQuestion {
    question;
    answer;
    static __fields = [["question", _runtime_1.py.MISSING], ["answer", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, FrequentlyAskedQuestion, __args); Object.freeze(this); }
}
exports.FrequentlyAskedQuestion = FrequentlyAskedQuestion;
_runtime_1.py.classType(FrequentlyAskedQuestion);
/** FAQ category and its required entries. */
class FrequentlyAskedQuestionCategory {
    category;
    entries;
    static __fields = [["category", _runtime_1.py.MISSING], ["entries", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, FrequentlyAskedQuestionCategory, __args); Object.freeze(this); }
}
exports.FrequentlyAskedQuestionCategory = FrequentlyAskedQuestionCategory;
_runtime_1.py.classType(FrequentlyAskedQuestionCategory);
/** Nullable availability window for one support department. */
class LiveChatHours {
    department_name;
    opening_time;
    closing_time;
    after_hour_message;
    available_now;
    static __fields = [["department_name", _runtime_1.py.MISSING], ["opening_time", _runtime_1.py.MISSING], ["closing_time", _runtime_1.py.MISSING], ["after_hour_message", _runtime_1.py.MISSING], ["available_now", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, LiveChatHours, __args); Object.freeze(this); }
}
exports.LiveChatHours = LiveChatHours;
_runtime_1.py.classType(LiveChatHours);
/** Mobile carrier accepted by account registration and updates. */
class MobileCarrier {
    id;
    code;
    name;
    static __fields = [["id", _runtime_1.py.MISSING], ["code", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MobileCarrier, __args); Object.freeze(this); }
}
exports.MobileCarrier = MobileCarrier;
_runtime_1.py.classType(MobileCarrier);
//# sourceMappingURL=content_models.js.map