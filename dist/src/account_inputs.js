"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountInput = exports.RegisterAccountInput = exports.RegisterAccountAddressInput = exports.MarketingPreferenceInput = exports.NCIMarketingPreferenceInput = exports.NotificationPreferenceTogglesInput = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.address_input = exports.AddressInput = exports.MarketingPreferenceType = void 0;
exports.notification_preference_toggles_input = notification_preference_toggles_input;
exports.nci_marketing_preference_input = nci_marketing_preference_input;
exports.marketing_preference_input = marketing_preference_input;
exports.register_account_address_input = register_account_address_input;
exports.register_account_input = register_account_input;
exports.update_account_input = update_account_input;
exports.validate_nissan_id_variables = validate_nissan_id_variables;
exports.register_account_variables = register_account_variables;
exports.ncar_icar_verify_account_variables = ncar_icar_verify_account_variables;
exports.ncar_icar_generate_otp_variables = ncar_icar_generate_otp_variables;
exports.ncar_icar_verify_otp_variables = ncar_icar_verify_otp_variables;
exports.generate_otp_variables = generate_otp_variables;
exports.verify_otp_variables = verify_otp_variables;
exports.pin_variables = pin_variables;
exports.update_account_variables = update_account_variables;
exports.update_nci_marketing_preferences_variables = update_nci_marketing_preferences_variables;
exports.update_nna_marketing_preferences_variables = update_nna_marketing_preferences_variables;
exports._marketing_channels = _marketing_channels;
exports._optional_marketing_channels = _optional_marketing_channels;
exports._optional_notification_toggles = _optional_notification_toggles;
exports._optional_marketing_preference = _optional_marketing_preference;
exports._optional_address = _optional_address;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const account_models_1 = require("./account_models");
Object.defineProperty(exports, "MarketingPreferenceType", { enumerable: true, get: function () { return account_models_1.MarketingPreferenceType; } });
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "AddressInput", { enumerable: true, get: function () { return common_inputs_1.AddressInput; } });
Object.defineProperty(exports, "address_input", { enumerable: true, get: function () { return common_inputs_1.address_input; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
/** Optional delivery-channel toggles accepted by NCI preferences. */
class NotificationPreferenceTogglesInput {
    email;
    text_message;
    direct_mail;
    in_vehicle;
    in_app;
    static __fields = [["email", graphql_input_1.UNSET], ["text_message", graphql_input_1.UNSET], ["direct_mail", graphql_input_1.UNSET], ["in_vehicle", graphql_input_1.UNSET], ["in_app", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NotificationPreferenceTogglesInput, __args); Object.freeze(this); }
}
exports.NotificationPreferenceTogglesInput = NotificationPreferenceTogglesInput;
_runtime_1.py.classType(NotificationPreferenceTogglesInput);
/** Required email choice and optional NCI preference categories. */
class NCIMarketingPreferenceInput {
    email;
    offers_promotion;
    news_events;
    product_updates;
    static __fields = [["email", _runtime_1.py.MISSING], ["offers_promotion", graphql_input_1.UNSET], ["news_events", graphql_input_1.UNSET], ["product_updates", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCIMarketingPreferenceInput, __args); Object.freeze(this); }
}
exports.NCIMarketingPreferenceInput = NCIMarketingPreferenceInput;
_runtime_1.py.classType(NCIMarketingPreferenceInput);
/** NNA marketing channels grouped by communication category. */
class MarketingPreferenceInput {
    newsletter;
    product_offers;
    service_offers;
    scheduled_maintenance;
    feedback;
    promotion_offers;
    static __fields = [["newsletter", _runtime_1.py.MISSING], ["product_offers", _runtime_1.py.MISSING], ["service_offers", _runtime_1.py.MISSING], ["scheduled_maintenance", _runtime_1.py.MISSING], ["feedback", _runtime_1.py.MISSING], ["promotion_offers", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MarketingPreferenceInput, __args); Object.freeze(this); }
}
exports.MarketingPreferenceInput = MarketingPreferenceInput;
_runtime_1.py.classType(MarketingPreferenceInput);
/** Postal address required for direct account registration. */
class RegisterAccountAddressInput {
    address_1;
    city;
    state;
    postal_code;
    country;
    address_2;
    static __fields = [["address_1", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING], ["address_2", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountAddressInput, __args); Object.freeze(this); }
}
exports.RegisterAccountAddressInput = RegisterAccountAddressInput;
_runtime_1.py.classType(RegisterAccountAddressInput);
/** Complete account-registration input accepted by Nissan. */
class RegisterAccountInput {
    first_name;
    last_name;
    email;
    phone_number;
    password;
    address;
    second_last_name;
    mobile_carrier_id;
    marketing_preferences;
    static __fields = [["first_name", _runtime_1.py.MISSING], ["last_name", _runtime_1.py.MISSING], ["email", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["password", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["second_last_name", graphql_input_1.UNSET], ["mobile_carrier_id", graphql_input_1.UNSET], ["marketing_preferences", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountInput, __args); Object.freeze(this); }
}
exports.RegisterAccountInput = RegisterAccountInput;
_runtime_1.py.classType(RegisterAccountInput);
/** Nullable, independently optional account fields accepted by updates. */
class UpdateAccountInput {
    first_name;
    last_name;
    email;
    landline_number;
    mobile_number;
    mobile_carrier_id;
    address;
    static __fields = [["first_name", graphql_input_1.UNSET], ["last_name", graphql_input_1.UNSET], ["email", graphql_input_1.UNSET], ["landline_number", graphql_input_1.UNSET], ["mobile_number", graphql_input_1.UNSET], ["mobile_carrier_id", graphql_input_1.UNSET], ["address", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateAccountInput, __args); Object.freeze(this); }
}
exports.UpdateAccountInput = UpdateAccountInput;
_runtime_1.py.classType(UpdateAccountInput);
/** Serialize NCI notification toggles with Apollo omission semantics. */
function notification_preference_toggles_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize NCI notification toggles with Apollo omission semantics. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "email": _runtime_1.py.attr(value, "email") }, { "textMessage": _runtime_1.py.attr(value, "text_message") }, { "directMail": _runtime_1.py.attr(value, "direct_mail") }, { "inVehicle": _runtime_1.py.attr(value, "in_vehicle") }, { "inApp": _runtime_1.py.attr(value, "in_app") }));
}
/** Serialize an NCI marketing-preference input. */
function nci_marketing_preference_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize an NCI marketing-preference input. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "email": _runtime_1.py.attr(value, "email") }, { "offersPromotion": _runtime_1.py.call(_optional_notification_toggles, [_runtime_1.py.attr(value, "offers_promotion")], null) }, { "newsEvents": _runtime_1.py.call(_optional_notification_toggles, [_runtime_1.py.attr(value, "news_events")], null) }, { "productUpdates": _runtime_1.py.call(_optional_notification_toggles, [_runtime_1.py.attr(value, "product_updates")], null) }));
}
/** Serialize an NNA marketing-preference input. */
function marketing_preference_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize an NNA marketing-preference input. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "newsletter": _runtime_1.py.call(_marketing_channels, [_runtime_1.py.attr(value, "newsletter")], null) }, { "productOffers": _runtime_1.py.call(_marketing_channels, [_runtime_1.py.attr(value, "product_offers")], null) }, { "serviceOffers": _runtime_1.py.call(_marketing_channels, [_runtime_1.py.attr(value, "service_offers")], null) }, { "scheduledMaintenance": _runtime_1.py.call(_marketing_channels, [_runtime_1.py.attr(value, "scheduled_maintenance")], null) }, { "feedback": _runtime_1.py.call(_marketing_channels, [_runtime_1.py.attr(value, "feedback")], null) }, { "promotionOffers": _runtime_1.py.call(_optional_marketing_channels, [_runtime_1.py.attr(value, "promotion_offers")], null) }));
}
/** Serialize the required registration address. */
function register_account_address_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize the required registration address. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "address1": _runtime_1.py.attr(value, "address_1") }, { "address2": _runtime_1.py.attr(value, "address_2") }, { "city": _runtime_1.py.attr(value, "city") }, { "state": _runtime_1.py.attr(value, "state") }, { "postalCode": _runtime_1.py.attr(value, "postal_code") }, { "country": _runtime_1.py.attr(value, "country") }));
}
/** Serialize the direct account-registration input. */
function register_account_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize the direct account-registration input. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "firstName": _runtime_1.py.attr(value, "first_name") }, { "lastName": _runtime_1.py.attr(value, "last_name") }, { "secondLastName": _runtime_1.py.attr(value, "second_last_name") }, { "email": _runtime_1.py.attr(value, "email") }, { "phoneNumber": _runtime_1.py.attr(value, "phone_number") }, { "mobileCarrierId": _runtime_1.py.attr(value, "mobile_carrier_id") }, { "password": _runtime_1.py.attr(value, "password") }, { "address": _runtime_1.py.call(register_account_address_input, [_runtime_1.py.attr(value, "address")], null) }, { "marketingPreferences": _runtime_1.py.call(_optional_marketing_preference, [_runtime_1.py.attr(value, "marketing_preferences")], null) }));
}
/** Serialize independently optional account fields. */
function update_account_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize independently optional account fields. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "firstName": _runtime_1.py.attr(value, "first_name") }, { "lastName": _runtime_1.py.attr(value, "last_name") }, { "email": _runtime_1.py.attr(value, "email") }, { "landlineNumber": _runtime_1.py.attr(value, "landline_number") }, { "mobileNumber": _runtime_1.py.attr(value, "mobile_number") }, { "mobileCarrierId": _runtime_1.py.attr(value, "mobile_carrier_id") }, { "address": _runtime_1.py.call(_optional_address, [_runtime_1.py.attr(value, "address")], null) }));
}
/** Serialize a Nissan ID validation request. */
function validate_nissan_id_variables(...__args) {
    let { "nissan_id": nissan_id } = _runtime_1.py.bind(__args, ["nissan_id"], {}, [], null, null);
    /** Serialize a Nissan ID validation request. */
    return Object.assign({}, { ["nissanId"]: nissan_id });
}
/** Serialize account-registration variables. */
function register_account_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize account-registration variables. */
    return Object.assign({}, { ["config"]: _runtime_1.py.call(register_account_input, [config], null) });
}
/** Serialize an NCAR/ICAR enrollment identifier. */
function ncar_icar_verify_account_variables(...__args) {
    let { "guid": guid } = _runtime_1.py.bind(__args, ["guid"], {}, [], null, null);
    /** Serialize an NCAR/ICAR enrollment identifier. */
    return Object.assign({}, { ["guid"]: guid });
}
/** Serialize NCAR/ICAR OTP generation variables. */
function ncar_icar_generate_otp_variables(...__args) {
    let { "guid": guid, "phone_number": phone_number } = _runtime_1.py.bind(__args, ["guid", "phone_number"], {}, [], null, null);
    /** Serialize NCAR/ICAR OTP generation variables. */
    return Object.assign({}, { ["guid"]: guid }, { ["phoneNumber"]: phone_number });
}
/** Serialize NCAR/ICAR OTP verification variables. */
function ncar_icar_verify_otp_variables(...__args) {
    let { "guid": guid, "phone_number": phone_number, "reference_id": reference_id, "otp": otp } = _runtime_1.py.bind(__args, ["guid", "phone_number", "reference_id", "otp"], {}, [], null, null);
    /** Serialize NCAR/ICAR OTP verification variables. */
    return Object.assign({}, { ["guid"]: guid }, { ["phoneNumber"]: phone_number }, { ["referenceId"]: reference_id }, { ["otp"]: otp });
}
/** Serialize direct OTP generation variables. */
function generate_otp_variables(...__args) {
    let { "phone_number": phone_number } = _runtime_1.py.bind(__args, ["phone_number"], {}, [], null, null);
    /** Serialize direct OTP generation variables. */
    return Object.assign({}, { ["phoneNumber"]: phone_number });
}
/** Serialize direct OTP verification variables. */
function verify_otp_variables(...__args) {
    let { "phone_number": phone_number, "otp": otp, "reference_id": reference_id } = _runtime_1.py.bind(__args, ["phone_number", "otp", "reference_id"], {}, [], null, null);
    /** Serialize direct OTP verification variables. */
    return Object.assign({}, { ["phoneNumber"]: phone_number }, { ["otp"]: otp }, { ["referenceId"]: reference_id });
}
/** Serialize PIN creation or update variables. */
function pin_variables(...__args) {
    let { "question_id": question_id, "answer": answer, "new_pin": new_pin } = _runtime_1.py.bind(__args, ["question_id", "answer", "new_pin"], {}, [], null, null);
    /** Serialize PIN creation or update variables. */
    return Object.assign({}, { ["questionId"]: question_id }, { ["answer"]: answer }, { ["newPin"]: new_pin });
}
/** Serialize an optional nullable account update input. */
function update_account_variables(...__args) {
    let serialized;
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], { "config": graphql_input_1.UNSET }, [], null, null);
    /** Serialize an optional nullable account update input. */
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [config, UpdateAccountInput], null))) {
        serialized = _runtime_1.py.call(update_account_input, [config], null);
    }
    else {
        serialized = config;
    }
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "config": serialized }));
}
/** Serialize required NCI marketing preferences. */
function update_nci_marketing_preferences_variables(...__args) {
    let { "marketing_preferences": marketing_preferences } = _runtime_1.py.bind(__args, ["marketing_preferences"], {}, [], null, null);
    /** Serialize required NCI marketing preferences. */
    return Object.assign({}, { ["marketingPreferences"]: _runtime_1.py.call(nci_marketing_preference_input, [marketing_preferences], null) });
}
/** Serialize optional nullable NNA marketing preferences. */
function update_nna_marketing_preferences_variables(...__args) {
    let serialized;
    let { "marketing_preferences": marketing_preferences } = _runtime_1.py.bind(__args, ["marketing_preferences"], { "marketing_preferences": graphql_input_1.UNSET }, [], null, null);
    /** Serialize optional nullable NNA marketing preferences. */
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [marketing_preferences, MarketingPreferenceInput], null))) {
        serialized = _runtime_1.py.call(marketing_preference_input, [marketing_preferences], null);
    }
    else {
        serialized = marketing_preferences;
    }
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "marketingPreferences": serialized }));
}
/** Translated upstream _marketing_channels. */
function _marketing_channels(...__args) {
    let value;
    let { "values": values } = _runtime_1.py.bind(__args, ["values"], {}, [], null, null);
    return (() => { const __out = []; for (const value of _runtime_1.py.iterable(values)) {
        __out.push(_runtime_1.py.call(graphql_input_1.serialize_enum, [value], null));
    } return __out; })();
}
/** Translated upstream _optional_marketing_channels. */
function _optional_marketing_channels(...__args) {
    let { "values": values } = _runtime_1.py.bind(__args, ["values"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [values, _runtime_1.py.tuple], null))) {
        return _runtime_1.py.call(_marketing_channels, [values], null);
    }
    return values;
}
/** Translated upstream _optional_notification_toggles. */
function _optional_notification_toggles(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, NotificationPreferenceTogglesInput], null))) {
        return _runtime_1.py.call(notification_preference_toggles_input, [value], null);
    }
    return value;
}
/** Translated upstream _optional_marketing_preference. */
function _optional_marketing_preference(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, MarketingPreferenceInput], null))) {
        return _runtime_1.py.call(marketing_preference_input, [value], null);
    }
    return value;
}
/** Translated upstream _optional_address. */
function _optional_address(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, common_inputs_1.AddressInput], null))) {
        return _runtime_1.py.call(common_inputs_1.address_input, [value], null);
    }
    return value;
}
//# sourceMappingURL=account_inputs.js.map