"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports.MobileCarrier = exports.LiveChatHours = exports.FrequentlyAskedQuestionCategory = exports.FrequentlyAskedQuestion = exports.ContactUsInfo = exports.ContactPhoneNumbers = exports.ContactLinks = exports.ContactEmailAddresses = exports.CertifiedPreOwnedProvider = exports.CertifiedPreOwnedDetails = exports._typed_object = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_bool = exports._required_int = exports._required_field = exports._required_enum = exports.MobileCarrierCode = void 0;
exports.parse_contact_us = parse_contact_us;
exports.parse_cpo_details = parse_cpo_details;
exports.parse_faq = parse_faq;
exports.parse_live_chat_hours = parse_live_chat_hours;
exports.parse_mobile_carriers = parse_mobile_carriers;
exports._parse_contact_links = _parse_contact_links;
exports._parse_phone_numbers = _parse_phone_numbers;
exports._required_typed_object = _required_typed_object;
exports._required_list = _required_list;
exports._nullable_object_list = _nullable_object_list;
exports._required_nullable_datetime = _required_nullable_datetime;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const account_models_1 = require("./account_models");
Object.defineProperty(exports, "MobileCarrierCode", { enumerable: true, get: function () { return account_models_1.MobileCarrierCode; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_enum", { enumerable: true, get: function () { return account_parsing_1._required_enum; } });
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_int", { enumerable: true, get: function () { return account_parsing_1._required_int; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return account_parsing_1._typed_object; } });
const content_models_1 = require("./content_models");
Object.defineProperty(exports, "CertifiedPreOwnedDetails", { enumerable: true, get: function () { return content_models_1.CertifiedPreOwnedDetails; } });
Object.defineProperty(exports, "CertifiedPreOwnedProvider", { enumerable: true, get: function () { return content_models_1.CertifiedPreOwnedProvider; } });
Object.defineProperty(exports, "ContactEmailAddresses", { enumerable: true, get: function () { return content_models_1.ContactEmailAddresses; } });
Object.defineProperty(exports, "ContactLinks", { enumerable: true, get: function () { return content_models_1.ContactLinks; } });
Object.defineProperty(exports, "ContactPhoneNumbers", { enumerable: true, get: function () { return content_models_1.ContactPhoneNumbers; } });
Object.defineProperty(exports, "ContactUsInfo", { enumerable: true, get: function () { return content_models_1.ContactUsInfo; } });
Object.defineProperty(exports, "FrequentlyAskedQuestion", { enumerable: true, get: function () { return content_models_1.FrequentlyAskedQuestion; } });
Object.defineProperty(exports, "FrequentlyAskedQuestionCategory", { enumerable: true, get: function () { return content_models_1.FrequentlyAskedQuestionCategory; } });
Object.defineProperty(exports, "LiveChatHours", { enumerable: true, get: function () { return content_models_1.LiveChatHours; } });
Object.defineProperty(exports, "MobileCarrier", { enumerable: true, get: function () { return content_models_1.MobileCarrier; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Parse account and support contact information. */
function parse_contact_us(...__args) {
    let contact, email_addresses, links, phone_numbers;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse account and support contact information. */
    contact = _runtime_1.py.call(_required_typed_object, [data, "contactUs", "contactUs"], null);
    links = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [contact, "link", "contactUs.link"], null);
    phone_numbers = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [contact, "phoneNumber", "contactUs.phoneNumber"], null);
    email_addresses = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [contact, "email", "contactUs.email"], null);
    return _runtime_1.py.call(content_models_1.ContactUsInfo, [], Object.assign({}, { "links": (_runtime_1.py.truth(((links !== null))) ? _runtime_1.py.call(_parse_contact_links, [links], null) : null) }, { "phone_numbers": (_runtime_1.py.truth(((phone_numbers !== null))) ? _runtime_1.py.call(_parse_phone_numbers, [phone_numbers], null) : null) }, { "email_addresses": (_runtime_1.py.truth(((email_addresses !== null))) ? _runtime_1.py.call(content_models_1.ContactEmailAddresses, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [email_addresses, "secondDeliveryCustomerSupport", "contactUs.email.secondDeliveryCustomerSupport"], null)], null) : null) }));
}
/** Parse nullable certified-pre-owned provider details. */
function parse_cpo_details(...__args) {
    let details, index, item, parsed_providers, path, provider, providers, value, values;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable certified-pre-owned provider details. */
    value = _runtime_1.py.call(account_parsing_1._required_field, [data, "cpoDetails", "cpoDetails"], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    details = _runtime_1.py.call(account_parsing_1._typed_object, [value, "cpoDetails"], null);
    providers = _runtime_1.py.call(_nullable_object_list, [details, "data", "cpoDetails.data"], null);
    parsed_providers = null;
    if (_runtime_1.py.truth(((providers !== null)))) {
        values = [];
        for ([index, provider] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [providers], null))) {
            if (_runtime_1.py.truth(((provider === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(values, "append"), [null], null);
                continue;
            }
            path = ("cpoDetails.data[" + _runtime_1.py.str(index) + "]");
            item = _runtime_1.py.call(account_parsing_1._typed_object, [provider, path], null);
            _runtime_1.py.call(_runtime_1.py.attr(values, "append"), [_runtime_1.py.call(content_models_1.CertifiedPreOwnedProvider, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [item, "brandName", (_runtime_1.py.str(path) + ".brandName")], null), _runtime_1.py.call(account_parsing_1._required_nullable_string, [item, "preferredProvider", (_runtime_1.py.str(path) + ".preferredProvider")], null)], null)], null);
        }
        parsed_providers = _runtime_1.py.call(_runtime_1.py.tuple, [values], null);
    }
    return _runtime_1.py.call(content_models_1.CertifiedPreOwnedDetails, [], Object.assign({}, { "status_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [details, "statusCode", "cpoDetails.statusCode"], null) }, { "status_message": _runtime_1.py.call(account_parsing_1._required_nullable_string, [details, "statusMessage", "cpoDetails.statusMessage"], null) }, { "timestamp": _runtime_1.py.call(account_parsing_1._required_nullable_string, [details, "timestamp", "cpoDetails.timestamp"], null) }, { "data": parsed_providers }));
}
/** Parse required FAQ categories and entries. */
function parse_faq(...__args) {
    let categories, category, category_value, entries, entry, entry_index, entry_path, entry_value, index, parsed_entries, path, results;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse required FAQ categories and entries. */
    categories = _runtime_1.py.call(_required_list, [data, "faqs", "faqs"], null);
    results = [];
    for ([index, category_value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [categories], null))) {
        path = ("faqs[" + _runtime_1.py.str(index) + "]");
        category = _runtime_1.py.call(account_parsing_1._typed_object, [category_value, path], null);
        entries = _runtime_1.py.call(_required_list, [category, "data", (_runtime_1.py.str(path) + ".data")], null);
        parsed_entries = [];
        for ([entry_index, entry_value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [entries], null))) {
            entry_path = (_runtime_1.py.str(path) + ".data[" + _runtime_1.py.str(entry_index) + "]");
            entry = _runtime_1.py.call(account_parsing_1._typed_object, [entry_value, entry_path], null);
            _runtime_1.py.call(_runtime_1.py.attr(parsed_entries, "append"), [_runtime_1.py.call(content_models_1.FrequentlyAskedQuestion, [_runtime_1.py.call(account_parsing_1._required_string, [entry, "question", (_runtime_1.py.str(entry_path) + ".question")], null), _runtime_1.py.call(account_parsing_1._required_string, [entry, "answer", (_runtime_1.py.str(entry_path) + ".answer")], null)], null)], null);
        }
        _runtime_1.py.call(_runtime_1.py.attr(results, "append"), [_runtime_1.py.call(content_models_1.FrequentlyAskedQuestionCategory, [], Object.assign({}, { "category": _runtime_1.py.call(account_parsing_1._required_string, [category, "category", (_runtime_1.py.str(path) + ".category")], null) }, { "entries": _runtime_1.py.call(_runtime_1.py.tuple, [parsed_entries], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [results], null);
}
/** Parse nullable live-chat availability entries. */
function parse_live_chat_hours(...__args) {
    let contact, index, item, path, results, value, values;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable live-chat availability entries. */
    contact = _runtime_1.py.call(_required_typed_object, [data, "contactUs", "contactUs"], null);
    values = _runtime_1.py.call(_nullable_object_list, [contact, "liveChatHours", "contactUs.liveChatHours"], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    results = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((value === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(results, "append"), [null], null);
            continue;
        }
        path = ("contactUs.liveChatHours[" + _runtime_1.py.str(index) + "]");
        item = _runtime_1.py.call(account_parsing_1._typed_object, [value, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(results, "append"), [_runtime_1.py.call(content_models_1.LiveChatHours, [], Object.assign({}, { "department_name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [item, "departmentName", (_runtime_1.py.str(path) + ".departmentName")], null) }, { "opening_time": _runtime_1.py.call(_required_nullable_datetime, [item, "openingTime", (_runtime_1.py.str(path) + ".openingTime")], null) }, { "closing_time": _runtime_1.py.call(_required_nullable_datetime, [item, "closingTime", (_runtime_1.py.str(path) + ".closingTime")], null) }, { "after_hour_message": _runtime_1.py.call(account_parsing_1._required_nullable_string, [item, "afterHourMessage", (_runtime_1.py.str(path) + ".afterHourMessage")], null) }, { "available_now": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [item, "availableNow", (_runtime_1.py.str(path) + ".availableNow")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [results], null);
}
/** Parse the required mobile-carrier catalog. */
function parse_mobile_carriers(...__args) {
    let carriers, index, item, path, value, values;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the required mobile-carrier catalog. */
    values = _runtime_1.py.call(_required_list, [data, "mobileCarriers", "mobileCarriers"], null);
    carriers = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        path = ("mobileCarriers[" + _runtime_1.py.str(index) + "]");
        item = _runtime_1.py.call(account_parsing_1._typed_object, [value, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(carriers, "append"), [_runtime_1.py.call(content_models_1.MobileCarrier, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_int, [item, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "code": _runtime_1.py.call(account_parsing_1._required_enum, [item, "code", account_models_1.MobileCarrierCode, (_runtime_1.py.str(path) + ".code")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_string, [item, "name", (_runtime_1.py.str(path) + ".name")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [carriers], null);
}
/** Translated upstream _parse_contact_links. */
function _parse_contact_links(...__args) {
    let field, fields, path, values;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    path = "contactUs.link";
    fields = ["privacyPolicy", "dataPrivacy", "collisionRepair", "accidentHelper", "checkOwnersPortal", "warranty", "forgotPassword", "editContactInformationAndChangePassword", "partsAndAccessories", "ifsAccount", "ncesiInsurance", "roadsideAid", "buyProtection", "nissanAddedSecurityPlanVideo", "nissanCertifiedPreOwnedVideo", "nissanPrepaidMaintenancePlanVideo", "secondDeliveryMarketingVideo", "disconnectRemoteAccess", "deleteAccount", "ariesApp"];
    values = _runtime_1.py.call(_runtime_1.py.tuple, [(() => { const __out = []; for (const field of _runtime_1.py.iterable(fields)) {
            __out.push(_runtime_1.py.call(account_parsing_1._required_nullable_string, [value, field, (_runtime_1.py.str(path) + "." + _runtime_1.py.str(field))], null));
        } return __out; })()], null);
    return _runtime_1.py.call(content_models_1.ContactLinks, [..._runtime_1.py.iterable(values)], null);
}
/** Translated upstream _parse_phone_numbers. */
function _parse_phone_numbers(...__args) {
    let field, fields, path, values;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    path = "contactUs.phoneNumber";
    fields = ["customerCare", "stolenVehicleLocator", "stolenVehicleInfo", "personalAssistant", "roadsideAssistant", "ownershipVerification", "resetVoicePin", "secondDeliveryCustomerSupport", "plugAndChargeSupport", "nissanStore"];
    values = _runtime_1.py.call(_runtime_1.py.tuple, [(() => { const __out = []; for (const field of _runtime_1.py.iterable(fields)) {
            __out.push(_runtime_1.py.call(account_parsing_1._required_nullable_string, [value, field, (_runtime_1.py.str(path) + "." + _runtime_1.py.str(field))], null));
        } return __out; })()], null);
    return _runtime_1.py.call(content_models_1.ContactPhoneNumbers, [..._runtime_1.py.iterable(values)], null);
}
/** Translated upstream _required_typed_object. */
function _required_typed_object(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    return _runtime_1.py.call(account_parsing_1._typed_object, [_runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null), path], null);
}
/** Translated upstream _required_list. */
function _required_list(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _nullable_object_list. */
function _nullable_object_list(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _required_nullable_datetime. */
function _required_nullable_datetime(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a date-time string")], null);
    }
    try {
        return _runtime_1.py.call(_runtime_1.py.attr(datetime, "fromisoformat"), [_runtime_1.py.call(_runtime_1.py.attr(value, "replace"), ["Z", "+00:00"], null)], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            let error = __error;
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time")], null);
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=content_parsing.js.map