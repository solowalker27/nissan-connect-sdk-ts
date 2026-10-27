"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports.UserInfo = exports.UpdatedAccountAddress = exports.UpdateAccountSuccess = exports.UpdateAccountPostalCodeError = exports.UpdateAccountMobileNumberError = exports.UpdateAccountLastNameError = exports.UpdateAccountLandlineNumberError = exports.UpdateAccountGeneralError = exports.UpdateAccountFirstNameError = exports.UpdateAccountAddressError = exports.UnselectedAccountResult = exports.SecurityQuestion = exports.PinValidationError = exports.PinOperationSuccess = exports.NNAMarketingPreferences = exports.NissanIdRequiresOwnerPortalProfileCompletion = exports.NissanIdRequiresOwnerPortalPasswordReset = exports.NissanIdRequiresNmacPasswordReset = exports.NissanIdExists = exports.NissanIdDoesNotExist = exports.NCIMarketingPreferences = exports.MobileNetworkOperator = exports.MobileCarrierCode = exports.MarketingPreferenceType = exports.MarketingNotificationPreferences = exports.DeleteAccountResult = exports.CreatePinError = void 0;
exports.parse_validate_nissan_id = parse_validate_nissan_id;
exports.parse_security_questions = parse_security_questions;
exports.parse_user_info = parse_user_info;
exports.parse_terms_and_conditions = parse_terms_and_conditions;
exports.parse_marketing_preferences = parse_marketing_preferences;
exports.parse_create_pin = parse_create_pin;
exports.parse_update_pin = parse_update_pin;
exports.parse_update_account = parse_update_account;
exports.parse_delete_account = parse_delete_account;
exports.parse_update_nci_marketing_preferences = parse_update_nci_marketing_preferences;
exports.parse_update_nna_marketing_preferences = parse_update_nna_marketing_preferences;
exports._parse_updated_marketing_preferences = _parse_updated_marketing_preferences;
exports._parse_country_marketing_preferences = _parse_country_marketing_preferences;
exports._parse_notification_preferences = _parse_notification_preferences;
exports._marketing_preference_list = _marketing_preference_list;
exports._parse_updated_address = _parse_updated_address;
exports._parse_mobile_network_operator = _parse_mobile_network_operator;
exports._root = _root;
exports._typed_object = _typed_object;
exports._required_optional_typed_object = _required_optional_typed_object;
exports._typename = _typename;
exports._required_field = _required_field;
exports._required_string = _required_string;
exports._required_nullable_string = _required_nullable_string;
exports._required_nullable_bool = _required_nullable_bool;
exports._required_int = _required_int;
exports._required_nullable_int = _required_nullable_int;
exports._required_enum = _required_enum;
exports._enum = _enum;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const StrEnum = _runtime_1.py.StrEnum;
const account_models_1 = require("./account_models");
Object.defineProperty(exports, "CreatePinError", { enumerable: true, get: function () { return account_models_1.CreatePinError; } });
Object.defineProperty(exports, "DeleteAccountResult", { enumerable: true, get: function () { return account_models_1.DeleteAccountResult; } });
Object.defineProperty(exports, "MarketingNotificationPreferences", { enumerable: true, get: function () { return account_models_1.MarketingNotificationPreferences; } });
Object.defineProperty(exports, "MarketingPreferenceType", { enumerable: true, get: function () { return account_models_1.MarketingPreferenceType; } });
Object.defineProperty(exports, "MobileCarrierCode", { enumerable: true, get: function () { return account_models_1.MobileCarrierCode; } });
Object.defineProperty(exports, "MobileNetworkOperator", { enumerable: true, get: function () { return account_models_1.MobileNetworkOperator; } });
Object.defineProperty(exports, "NCIMarketingPreferences", { enumerable: true, get: function () { return account_models_1.NCIMarketingPreferences; } });
Object.defineProperty(exports, "NissanIdDoesNotExist", { enumerable: true, get: function () { return account_models_1.NissanIdDoesNotExist; } });
Object.defineProperty(exports, "NissanIdExists", { enumerable: true, get: function () { return account_models_1.NissanIdExists; } });
Object.defineProperty(exports, "NissanIdRequiresNmacPasswordReset", { enumerable: true, get: function () { return account_models_1.NissanIdRequiresNmacPasswordReset; } });
Object.defineProperty(exports, "NissanIdRequiresOwnerPortalPasswordReset", { enumerable: true, get: function () { return account_models_1.NissanIdRequiresOwnerPortalPasswordReset; } });
Object.defineProperty(exports, "NissanIdRequiresOwnerPortalProfileCompletion", { enumerable: true, get: function () { return account_models_1.NissanIdRequiresOwnerPortalProfileCompletion; } });
Object.defineProperty(exports, "NNAMarketingPreferences", { enumerable: true, get: function () { return account_models_1.NNAMarketingPreferences; } });
Object.defineProperty(exports, "PinOperationSuccess", { enumerable: true, get: function () { return account_models_1.PinOperationSuccess; } });
Object.defineProperty(exports, "PinValidationError", { enumerable: true, get: function () { return account_models_1.PinValidationError; } });
Object.defineProperty(exports, "SecurityQuestion", { enumerable: true, get: function () { return account_models_1.SecurityQuestion; } });
Object.defineProperty(exports, "UnselectedAccountResult", { enumerable: true, get: function () { return account_models_1.UnselectedAccountResult; } });
Object.defineProperty(exports, "UpdateAccountAddressError", { enumerable: true, get: function () { return account_models_1.UpdateAccountAddressError; } });
Object.defineProperty(exports, "UpdateAccountFirstNameError", { enumerable: true, get: function () { return account_models_1.UpdateAccountFirstNameError; } });
Object.defineProperty(exports, "UpdateAccountGeneralError", { enumerable: true, get: function () { return account_models_1.UpdateAccountGeneralError; } });
Object.defineProperty(exports, "UpdateAccountLandlineNumberError", { enumerable: true, get: function () { return account_models_1.UpdateAccountLandlineNumberError; } });
Object.defineProperty(exports, "UpdateAccountLastNameError", { enumerable: true, get: function () { return account_models_1.UpdateAccountLastNameError; } });
Object.defineProperty(exports, "UpdateAccountMobileNumberError", { enumerable: true, get: function () { return account_models_1.UpdateAccountMobileNumberError; } });
Object.defineProperty(exports, "UpdateAccountPostalCodeError", { enumerable: true, get: function () { return account_models_1.UpdateAccountPostalCodeError; } });
Object.defineProperty(exports, "UpdateAccountSuccess", { enumerable: true, get: function () { return account_models_1.UpdateAccountSuccess; } });
Object.defineProperty(exports, "UpdatedAccountAddress", { enumerable: true, get: function () { return account_models_1.UpdatedAccountAddress; } });
Object.defineProperty(exports, "UserInfo", { enumerable: true, get: function () { return account_models_1.UserInfo; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Parse every generated Nissan ID validation union branch. */
function parse_validate_nissan_id(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated Nissan ID validation union branch. */
    root_field = "validateNissanID";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NissanIdExists")))) {
        return _runtime_1.py.call(account_models_1.NissanIdExists, [_runtime_1.py.call(_required_string, [root, "nissanId", (_runtime_1.py.str(root_field) + ".nissanId")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NissanIdDoesNotExist")))) {
        return _runtime_1.py.call(account_models_1.NissanIdDoesNotExist, [_runtime_1.py.call(_required_string, [root, "nissanId", (_runtime_1.py.str(root_field) + ".nissanId")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NissanIdRequiresOwnerPortalPWReset")))) {
        return _runtime_1.py.call(account_models_1.NissanIdRequiresOwnerPortalPasswordReset, [_runtime_1.py.call(_required_string, [root, "nissanId", (_runtime_1.py.str(root_field) + ".nissanId")], null), _runtime_1.py.call(_required_string, [root, "link", (_runtime_1.py.str(root_field) + ".link")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NissanIdRequiresOwnerPortalProfileCompletion")))) {
        return _runtime_1.py.call(account_models_1.NissanIdRequiresOwnerPortalProfileCompletion, [_runtime_1.py.call(_required_string, [root, "nissanId", (_runtime_1.py.str(root_field) + ".nissanId")], null), _runtime_1.py.call(_required_string, [root, "link", (_runtime_1.py.str(root_field) + ".link")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NissanIdRequiresNMACPWReset")))) {
        return _runtime_1.py.call(account_models_1.NissanIdRequiresNmacPasswordReset, [_runtime_1.py.call(_required_string, [root, "nissanId", (_runtime_1.py.str(root_field) + ".nissanId")], null), _runtime_1.py.call(_required_string, [root, "link", (_runtime_1.py.str(root_field) + ".link")], null)], null);
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Parse nullable security questions and nullable list items. */
function parse_security_questions(...__args) {
    let field, index, item, path, question, questions, value;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable security questions and nullable list items. */
    field = "securityQuestions";
    value = _runtime_1.py.call(_required_field, [data, field, field], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(field) + " is not a list")], null);
    }
    questions = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(questions, "append"), [null], null);
            continue;
        }
        path = (_runtime_1.py.str(field) + "[" + _runtime_1.py.str(index) + "]");
        question = _runtime_1.py.call(_typed_object, [item, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(questions, "append"), [_runtime_1.py.call(account_models_1.SecurityQuestion, [_runtime_1.py.call(_required_nullable_string, [question, "id", (_runtime_1.py.str(path) + ".id")], null), _runtime_1.py.call(_required_nullable_string, [question, "question", (_runtime_1.py.str(path) + ".question")], null)], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [questions], null);
}
/** Parse nullable signed-in user security flags. */
function parse_user_info(...__args) {
    let root;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable signed-in user security flags. */
    root = _runtime_1.py.call(_root, [data, "user"], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_models_1.UserInfo, [], Object.assign({}, { "pin_configured": _runtime_1.py.call(_required_nullable_bool, [root, "pinConfigured", "user.pinConfigured"], null) }, { "security_question_id": _runtime_1.py.call(_required_nullable_string, [root, "securityQuestionId", "user.securityQuestionId"], null) }, { "is_lite_account": _runtime_1.py.call(_required_nullable_bool, [root, "isLiteAccount", "user.isLiteAccount"], null) }));
}
/** Parse the nullable account terms scalar. */
function parse_terms_and_conditions(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable account terms scalar. */
    return _runtime_1.py.call(_required_nullable_string, [data, "termsAndConditions", "termsAndConditions"], null);
}
/** Parse the signed-in user's country-specific marketing preferences. */
function parse_marketing_preferences(...__args) {
    let preferences, user;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the signed-in user's country-specific marketing preferences. */
    user = _runtime_1.py.call(_root, [data, "user"], null);
    if (_runtime_1.py.truth(((user === null)))) {
        return null;
    }
    preferences = _runtime_1.py.call(_required_optional_typed_object, [user, "countryMarketingPreferences", "user.countryMarketingPreferences"], null);
    if (_runtime_1.py.truth(((preferences === null)))) {
        return null;
    }
    return _runtime_1.py.call(_parse_country_marketing_preferences, [preferences, "user.countryMarketingPreferences"], null);
}
/** Parse every generated CreatePin union branch. */
function parse_create_pin(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated CreatePin union branch. */
    root_field = "createPin";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ResponseStatus")))) {
        return _runtime_1.py.call(account_models_1.PinOperationSuccess, [_runtime_1.py.call(_required_nullable_bool, [root, "success", (_runtime_1.py.str(root_field) + ".success")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "CreatePINError")))) {
        return _runtime_1.py.call(account_models_1.CreatePinError, [_runtime_1.py.call(_required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Parse every generated UpdatePin union branch. */
function parse_update_pin(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated UpdatePin union branch. */
    root_field = "updatePin";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ResponseStatus")))) {
        return _runtime_1.py.call(account_models_1.PinOperationSuccess, [_runtime_1.py.call(_required_nullable_bool, [root, "success", (_runtime_1.py.str(root_field) + ".success")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ValidationError")))) {
        return _runtime_1.py.call(account_models_1.PinValidationError, [_runtime_1.py.call(_required_nullable_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Parse every generated account-update union branch. */
function parse_update_account(...__args) {
    let address, carrier, message_path, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated account-update union branch. */
    root_field = "updateAccount";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    message_path = (_runtime_1.py.str(root_field) + ".message");
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateAccountFirstNameError")))) {
        return _runtime_1.py.call(account_models_1.UpdateAccountFirstNameError, [_runtime_1.py.call(_required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateAccountLastNameError")))) {
        return _runtime_1.py.call(account_models_1.UpdateAccountLastNameError, [_runtime_1.py.call(_required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateAccountAddressError")))) {
        return _runtime_1.py.call(account_models_1.UpdateAccountAddressError, [_runtime_1.py.call(_required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateAccountPostalCodeError")))) {
        return _runtime_1.py.call(account_models_1.UpdateAccountPostalCodeError, [_runtime_1.py.call(_required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateAccountMobileNumberError")))) {
        return _runtime_1.py.call(account_models_1.UpdateAccountMobileNumberError, [_runtime_1.py.call(_required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateAccountLandlineNumberError")))) {
        return _runtime_1.py.call(account_models_1.UpdateAccountLandlineNumberError, [_runtime_1.py.call(_required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateAccountGeneralError")))) {
        return _runtime_1.py.call(account_models_1.UpdateAccountGeneralError, [_runtime_1.py.call(_required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((!_runtime_1.py.eq(typename, "User")))) {
        return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
    }
    address = _runtime_1.py.call(_required_optional_typed_object, [root, "address", (_runtime_1.py.str(root_field) + ".address")], null);
    carrier = _runtime_1.py.call(_required_optional_typed_object, [root, "mobileNetworkOperator", (_runtime_1.py.str(root_field) + ".mobileNetworkOperator")], null);
    return _runtime_1.py.call(account_models_1.UpdateAccountSuccess, [], Object.assign({}, { "first_name": _runtime_1.py.call(_required_string, [root, "firstName", (_runtime_1.py.str(root_field) + ".firstName")], null) }, { "last_name": _runtime_1.py.call(_required_string, [root, "lastName", (_runtime_1.py.str(root_field) + ".lastName")], null) }, { "email": _runtime_1.py.call(_required_string, [root, "email", (_runtime_1.py.str(root_field) + ".email")], null) }, { "mobile_number": _runtime_1.py.call(_required_nullable_string, [root, "mobileNumber", (_runtime_1.py.str(root_field) + ".mobileNumber")], null) }, { "address": _runtime_1.py.call(_parse_updated_address, [address, (_runtime_1.py.str(root_field) + ".address")], null) }, { "mobile_network_operator": _runtime_1.py.call(_parse_mobile_network_operator, [carrier, (_runtime_1.py.str(root_field) + ".mobileNetworkOperator")], null) }));
}
/** Parse the nullable account-deletion status. */
function parse_delete_account(...__args) {
    let root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable account-deletion status. */
    root_field = "deleteAccount";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_models_1.DeleteAccountResult, [_runtime_1.py.call(_required_nullable_bool, [root, "success", (_runtime_1.py.str(root_field) + ".success")], null)], null);
}
/** Parse country preferences returned after an NCI update. */
function parse_update_nci_marketing_preferences(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse country preferences returned after an NCI update. */
    return _runtime_1.py.call(_parse_updated_marketing_preferences, [data, "updateNCIAccountPreferences"], null);
}
/** Parse country preferences returned after an NNA update. */
function parse_update_nna_marketing_preferences(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse country preferences returned after an NNA update. */
    return _runtime_1.py.call(_parse_updated_marketing_preferences, [data, "updateAccountPreferences"], null);
}
/** Translated upstream _parse_updated_marketing_preferences. */
function _parse_updated_marketing_preferences(...__args) {
    let path, preferences, root;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    path = (_runtime_1.py.str(root_field) + ".countryMarketingPreferences");
    preferences = _runtime_1.py.call(_required_optional_typed_object, [root, "countryMarketingPreferences", path], null);
    if (_runtime_1.py.truth(((preferences === null)))) {
        return null;
    }
    return _runtime_1.py.call(_parse_country_marketing_preferences, [preferences, path], null);
}
/** Translated upstream _parse_country_marketing_preferences. */
function _parse_country_marketing_preferences(...__args) {
    let typename;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    typename = _runtime_1.py.call(_typename, [value, path], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCIMarketingPreferences")))) {
        return _runtime_1.py.call(account_models_1.NCIMarketingPreferences, [], Object.assign({}, { "email": _runtime_1.py.call(_required_nullable_bool, [value, "email", (_runtime_1.py.str(path) + ".email")], null) }, { "product_updates": _runtime_1.py.call(_parse_notification_preferences, [value, "productUpdates", (_runtime_1.py.str(path) + ".productUpdates")], null) }, { "news_events": _runtime_1.py.call(_parse_notification_preferences, [value, "newsEvents", (_runtime_1.py.str(path) + ".newsEvents")], null) }, { "offers_promotion": _runtime_1.py.call(_parse_notification_preferences, [value, "offersPromotion", (_runtime_1.py.str(path) + ".offersPromotion")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NNAMarketingPreferences")))) {
        return _runtime_1.py.call(account_models_1.NNAMarketingPreferences, [], Object.assign({}, { "newsletter": _runtime_1.py.call(_marketing_preference_list, [value, "newsletter", path], null) }, { "product_offers": _runtime_1.py.call(_marketing_preference_list, [value, "productOffers", path], null) }, { "service_offers": _runtime_1.py.call(_marketing_preference_list, [value, "serviceOffers", path], null) }, { "scheduled_maintenance": _runtime_1.py.call(_marketing_preference_list, [value, "scheduledMaintenance", path], null) }, { "feedback": _runtime_1.py.call(_marketing_preference_list, [value, "feedback", path], null) }));
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Translated upstream _parse_notification_preferences. */
function _parse_notification_preferences(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_optional_typed_object, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_models_1.MarketingNotificationPreferences, [], Object.assign({}, { "email": _runtime_1.py.call(_required_nullable_bool, [value, "email", (_runtime_1.py.str(path) + ".email")], null) }, { "text_message": _runtime_1.py.call(_required_nullable_bool, [value, "textMessage", (_runtime_1.py.str(path) + ".textMessage")], null) }, { "direct_mail": _runtime_1.py.call(_required_nullable_bool, [value, "directMail", (_runtime_1.py.str(path) + ".directMail")], null) }, { "in_app": _runtime_1.py.call(_required_nullable_bool, [value, "inApp", (_runtime_1.py.str(path) + ".inApp")], null) }, { "in_vehicle": _runtime_1.py.call(_required_nullable_bool, [value, "inVehicle", (_runtime_1.py.str(path) + ".inVehicle")], null) }));
}
/** Translated upstream _marketing_preference_list. */
function _marketing_preference_list(...__args) {
    let index, item, path, result, value;
    let { "container": container, "field": field, "parent_path": parent_path } = _runtime_1.py.bind(__args, ["container", "field", "parent_path"], {}, [], null, null);
    path = (_runtime_1.py.str(parent_path) + "." + _runtime_1.py.str(field));
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    result = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(result, "append"), [null], null);
            continue;
        }
        _runtime_1.py.call(_runtime_1.py.attr(result, "append"), [_runtime_1.py.call(_enum, [item, account_models_1.MarketingPreferenceType, (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [result], null);
}
/** Translated upstream _parse_updated_address. */
function _parse_updated_address(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_models_1.UpdatedAccountAddress, [], Object.assign({}, { "address_1": _runtime_1.py.call(_required_nullable_string, [value, "address1", (_runtime_1.py.str(path) + ".address1")], null) }, { "address_2": _runtime_1.py.call(_required_nullable_string, [value, "address2", (_runtime_1.py.str(path) + ".address2")], null) }, { "city": _runtime_1.py.call(_required_nullable_string, [value, "city", (_runtime_1.py.str(path) + ".city")], null) }, { "state": _runtime_1.py.call(_required_nullable_string, [value, "state", (_runtime_1.py.str(path) + ".state")], null) }, { "country": _runtime_1.py.call(_required_nullable_string, [value, "country", (_runtime_1.py.str(path) + ".country")], null) }, { "postal_code": _runtime_1.py.call(_required_nullable_string, [value, "postalCode", (_runtime_1.py.str(path) + ".postalCode")], null) }, { "district": _runtime_1.py.call(_required_nullable_string, [value, "district", (_runtime_1.py.str(path) + ".district")], null) }, { "street_number": _runtime_1.py.call(_required_nullable_string, [value, "streetNumber", (_runtime_1.py.str(path) + ".streetNumber")], null) }));
}
/** Translated upstream _parse_mobile_network_operator. */
function _parse_mobile_network_operator(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_models_1.MobileNetworkOperator, [], Object.assign({}, { "code": _runtime_1.py.call(_required_enum, [value, "code", account_models_1.MobileCarrierCode, (_runtime_1.py.str(path) + ".code")], null) }, { "id": _runtime_1.py.call(_required_int, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(_required_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }));
}
/** Translated upstream _root. */
function _root(...__args) {
    let value;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    value = _runtime_1.py.get(data, root_field);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_typed_object, [value, root_field], null);
}
/** Translated upstream _typed_object. */
function _typed_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    _runtime_1.py.call(_typename, [value, path], null);
    return value;
}
/** Translated upstream _required_optional_typed_object. */
function _required_optional_typed_object(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_typed_object, [value, path], null);
}
/** Translated upstream _typename. */
function _typename(...__args) {
    let { "container": container, "path": path } = _runtime_1.py.bind(__args, ["container", "path"], {}, [], null, null);
    return _runtime_1.py.call(_required_string, [container, "__typename", (_runtime_1.py.str(path) + ".__typename")], null);
}
/** Translated upstream _required_field. */
function _required_field(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is missing")], null);
    }
    return _runtime_1.py.get(container, field);
}
/** Translated upstream _required_string. */
function _required_string(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return value;
}
/** Translated upstream _required_nullable_string. */
function _required_nullable_string(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return value;
}
/** Translated upstream _required_nullable_bool. */
function _required_nullable_bool(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _required_int. */
function _required_int(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.int], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an integer")], null);
    }
    return value;
}
/** Translated upstream _required_nullable_int. */
function _required_nullable_int(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.int], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an integer")], null);
    }
    return value;
}
/** Translated upstream _required_enum. */
function _required_enum(...__args) {
    let { "container": container, "field": field, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "enum_type", "path"], {}, [], null, null);
    return _runtime_1.py.call(_enum, [_runtime_1.py.call(_required_field, [container, field, path], null), enum_type, path], null);
}
/** Translated upstream _enum. */
function _enum(...__args) {
    let { "value": value, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    try {
        return _runtime_1.py.call(enum_type, [value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            try {
                return _runtime_1.py.call(enum_type, ["UNKNOWN__"], null);
            }
            catch (__error) {
                if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
                    throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " has an unsupported value: " + _runtime_1.py.str(value))], null);
                }
                else {
                    throw __error;
                }
            }
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=account_parsing.js.map