"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DRIVER_INVITE_ACTION_ERROR_TYPES = exports._INVITE_DRIVER_ERROR_TYPES = exports._DRIVER_INVITES_ERROR_TYPES = exports._BASE_CONNECTED_VEHICLE_TYPES = exports.ResponseError = exports.UpdateEmergencyContactResult = exports.UpdateDriverSuccess = exports.UpdateDriverResult = exports.OwnerInviteActionResult = exports.InviteDriverResult = exports.EmergencyContactsResult = exports.EmergencyContact = exports.DriverInvitesResult = exports.DriverInviteActionResult = exports.DeleteEmergencyContactResult = exports.DeleteDriverResult = exports.CreateRSALinkResult = exports.CreateEmergencyContactResult = exports._typename = exports._root = exports._required_value = exports._required_string_tuple = exports._required_nullable_string = exports._required_nullable_bool = exports._required_list = exports._required_bool = exports._nullable_list = exports._parse_invite_driver_success = exports._parse_error = exports._parse_emergency_contact = exports._parse_driver_invite = void 0;
exports.parse_emergency_contacts = parse_emergency_contacts;
exports.parse_create_emergency_contact = parse_create_emergency_contact;
exports.parse_update_emergency_contact = parse_update_emergency_contact;
exports.parse_delete_emergency_contact = parse_delete_emergency_contact;
exports.parse_driver_invites = parse_driver_invites;
exports.parse_invite_driver = parse_invite_driver;
exports.parse_driver_invite_action = parse_driver_invite_action;
exports.parse_delete_driver = parse_delete_driver;
exports.parse_update_driver = parse_update_driver;
exports.parse_owner_invite_action = parse_owner_invite_action;
exports.parse_create_rsa_link = parse_create_rsa_link;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _driver_detail_parsing_1 = require("./_driver_detail_parsing");
Object.defineProperty(exports, "_parse_driver_invite", { enumerable: true, get: function () { return _driver_detail_parsing_1._parse_driver_invite; } });
Object.defineProperty(exports, "_parse_emergency_contact", { enumerable: true, get: function () { return _driver_detail_parsing_1._parse_emergency_contact; } });
Object.defineProperty(exports, "_parse_error", { enumerable: true, get: function () { return _driver_detail_parsing_1._parse_error; } });
Object.defineProperty(exports, "_parse_invite_driver_success", { enumerable: true, get: function () { return _driver_detail_parsing_1._parse_invite_driver_success; } });
const _driver_value_parsing_1 = require("./_driver_value_parsing");
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _driver_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_required_bool", { enumerable: true, get: function () { return _driver_value_parsing_1._required_bool; } });
Object.defineProperty(exports, "_required_list", { enumerable: true, get: function () { return _driver_value_parsing_1._required_list; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return _driver_value_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return _driver_value_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_string_tuple", { enumerable: true, get: function () { return _driver_value_parsing_1._required_string_tuple; } });
Object.defineProperty(exports, "_required_value", { enumerable: true, get: function () { return _driver_value_parsing_1._required_value; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return _driver_value_parsing_1._root; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return _driver_value_parsing_1._typename; } });
const driver_models_1 = require("./driver_models");
Object.defineProperty(exports, "CreateEmergencyContactResult", { enumerable: true, get: function () { return driver_models_1.CreateEmergencyContactResult; } });
Object.defineProperty(exports, "CreateRSALinkResult", { enumerable: true, get: function () { return driver_models_1.CreateRSALinkResult; } });
Object.defineProperty(exports, "DeleteDriverResult", { enumerable: true, get: function () { return driver_models_1.DeleteDriverResult; } });
Object.defineProperty(exports, "DeleteEmergencyContactResult", { enumerable: true, get: function () { return driver_models_1.DeleteEmergencyContactResult; } });
Object.defineProperty(exports, "DriverInviteActionResult", { enumerable: true, get: function () { return driver_models_1.DriverInviteActionResult; } });
Object.defineProperty(exports, "DriverInvitesResult", { enumerable: true, get: function () { return driver_models_1.DriverInvitesResult; } });
Object.defineProperty(exports, "EmergencyContact", { enumerable: true, get: function () { return driver_models_1.EmergencyContact; } });
Object.defineProperty(exports, "EmergencyContactsResult", { enumerable: true, get: function () { return driver_models_1.EmergencyContactsResult; } });
Object.defineProperty(exports, "InviteDriverResult", { enumerable: true, get: function () { return driver_models_1.InviteDriverResult; } });
Object.defineProperty(exports, "OwnerInviteActionResult", { enumerable: true, get: function () { return driver_models_1.OwnerInviteActionResult; } });
Object.defineProperty(exports, "UpdateDriverResult", { enumerable: true, get: function () { return driver_models_1.UpdateDriverResult; } });
Object.defineProperty(exports, "UpdateDriverSuccess", { enumerable: true, get: function () { return driver_models_1.UpdateDriverSuccess; } });
Object.defineProperty(exports, "UpdateEmergencyContactResult", { enumerable: true, get: function () { return driver_models_1.UpdateEmergencyContactResult; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
exports._BASE_CONNECTED_VEHICLE_TYPES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["AVK2Vehicle", "AVKVehicle", "ConnectedVehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "ElectricVehicle", "EVOVehicle"])], null);
exports._DRIVER_INVITES_ERROR_TYPES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["GeneralErrors", "DatabaseError", "BrandError", "TokenError", "VinValidationError"])], null);
exports._INVITE_DRIVER_ERROR_TYPES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["FirstNameValidationError", "LastNameValidationError", "EmailValidationError", "PhoneValidationError", "ExistingInviteError", "MaxInvitesReachedError"])], null);
exports._DRIVER_INVITE_ACTION_ERROR_TYPES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["GeneralErrors", "DatabaseError", "InvalidInviteIdError", "TokenError", "BrandError", "TermsAndConditionsError", "CountryError"])], null);
/** Parse a nullable vehicle and its nullable emergency-contact collection. */
function parse_emergency_contacts(...__args) {
    let contacts, contacts_path, index, parsed_contacts, raw_contact, raw_contacts, root_field, typename, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a nullable vehicle and its nullable emergency-contact collection. */
    root_field = "vehicle";
    vehicle = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_driver_value_parsing_1._typename, [vehicle, root_field], null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(vehicle, "emergencyContacts")))) {
        if (_runtime_1.py.truth((_runtime_1.py.contains(exports._BASE_CONNECTED_VEHICLE_TYPES, typename)))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + ".emergencyContacts is missing")], null);
        }
        return _runtime_1.py.call(driver_models_1.EmergencyContactsResult, [typename, null], null);
    }
    contacts_path = (_runtime_1.py.str(root_field) + ".emergencyContacts");
    raw_contacts = _runtime_1.py.call(_driver_value_parsing_1._nullable_list, [_runtime_1.py.call(_driver_value_parsing_1._required_value, [vehicle, "emergencyContacts", contacts_path], null), contacts_path], null);
    contacts = null;
    if (_runtime_1.py.truth(((raw_contacts !== null)))) {
        parsed_contacts = [];
        for ([index, raw_contact] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_contacts], null))) {
            if (_runtime_1.py.truth(((raw_contact === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_contacts, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_contacts, "append"), [_runtime_1.py.call(_driver_detail_parsing_1._parse_emergency_contact, [raw_contact, (_runtime_1.py.str(contacts_path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        contacts = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_contacts], null);
    }
    return _runtime_1.py.call(driver_models_1.EmergencyContactsResult, [typename, contacts], null);
}
/** Parse the nullable union returned by CreateEmergencyContact. */
function parse_create_emergency_contact(...__args) {
    let result, root_field, success, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable union returned by CreateEmergencyContact. */
    root_field = "createEmergencyContact";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null);
    success = null;
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ResponseStatus")))) {
        success = _runtime_1.py.call(_driver_value_parsing_1._required_nullable_bool, [result, "success", (_runtime_1.py.str(root_field) + ".success")], null);
    }
    return _runtime_1.py.call(driver_models_1.CreateEmergencyContactResult, [typename, success], null);
}
/** Parse UpdateEmergencyContact's nullable direct response. */
function parse_update_emergency_contact(...__args) {
    let result, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse UpdateEmergencyContact's nullable direct response. */
    root_field = "updateEmergencyContact";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    return _runtime_1.py.call(driver_models_1.UpdateEmergencyContactResult, [_runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null), _runtime_1.py.call(_driver_value_parsing_1._required_nullable_bool, [result, "success", (_runtime_1.py.str(root_field) + ".success")], null)], null);
}
/** Parse DeleteEmergencyContact's nullable direct response. */
function parse_delete_emergency_contact(...__args) {
    let result, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse DeleteEmergencyContact's nullable direct response. */
    root_field = "deleteEmergencyContact";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    return _runtime_1.py.call(driver_models_1.DeleteEmergencyContactResult, [_runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null), _runtime_1.py.call(_driver_value_parsing_1._required_nullable_bool, [result, "success", (_runtime_1.py.str(root_field) + ".success")], null)], null);
}
/** Parse every known DriverInvites union branch and preserve future types. */
function parse_driver_invites(...__args) {
    let index, invites, invites_path, raw_invites, result, root_field, typename, value;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every known DriverInvites union branch and preserve future types. */
    root_field = "driverInvites";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "DriverInvitesSuccessResponse")))) {
        invites_path = (_runtime_1.py.str(root_field) + ".invites");
        raw_invites = _runtime_1.py.call(_driver_value_parsing_1._required_list, [result, "invites", invites_path], null);
        invites = _runtime_1.py.call(_runtime_1.py.tuple, [(() => { const __out = []; for (const [index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_invites], null))) {
                __out.push(_runtime_1.py.call(_driver_detail_parsing_1._parse_driver_invite, [value, (_runtime_1.py.str(invites_path) + "[" + _runtime_1.py.str(index) + "]")], null));
            } return __out; })()], null);
        return _runtime_1.py.call(driver_models_1.DriverInvitesResult, [typename, invites, null], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.contains(exports._DRIVER_INVITES_ERROR_TYPES, typename)))) {
        return _runtime_1.py.call(driver_models_1.DriverInvitesResult, [typename, null, _runtime_1.py.call(_driver_detail_parsing_1._parse_error, [result, root_field, typename], null)], null);
    }
    return _runtime_1.py.call(driver_models_1.DriverInvitesResult, [typename, null, null], null);
}
/** Parse every known InviteDriver union branch and preserve future types. */
function parse_invite_driver(...__args) {
    let result, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every known InviteDriver union branch and preserve future types. */
    root_field = "inviteDriver";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "InviteDriverSuccessResponse")))) {
        return _runtime_1.py.call(driver_models_1.InviteDriverResult, [typename, _runtime_1.py.call(_driver_detail_parsing_1._parse_invite_driver_success, [result, root_field], null), null], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.contains(exports._INVITE_DRIVER_ERROR_TYPES, typename)))) {
        return _runtime_1.py.call(driver_models_1.InviteDriverResult, [typename, null, _runtime_1.py.call(_driver_detail_parsing_1._parse_error, [result, root_field, typename], null)], null);
    }
    return _runtime_1.py.call(driver_models_1.InviteDriverResult, [typename, null, null], null);
}
/** Parse every known DriverInviteAction union branch and preserve future types. */
function parse_driver_invite_action(...__args) {
    let result, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every known DriverInviteAction union branch and preserve future types. */
    root_field = "driverInviteAction";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "DriverInviteActionSuccessResponse")))) {
        return _runtime_1.py.call(driver_models_1.DriverInviteActionResult, [typename, _runtime_1.py.call(_driver_value_parsing_1._required_bool, [result, "success", (_runtime_1.py.str(root_field) + ".success")], null), null], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.contains(exports._DRIVER_INVITE_ACTION_ERROR_TYPES, typename)))) {
        return _runtime_1.py.call(driver_models_1.DriverInviteActionResult, [typename, null, _runtime_1.py.call(_driver_detail_parsing_1._parse_error, [result, root_field, typename], null)], null);
    }
    return _runtime_1.py.call(driver_models_1.DriverInviteActionResult, [typename, null, null], null);
}
/** Parse DeleteDriver's known success branch and preserve future types. */
function parse_delete_driver(...__args) {
    let result, root_field, success, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse DeleteDriver's known success branch and preserve future types. */
    root_field = "deleteDriver";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null);
    success = null;
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "DeleteDriverSuccessResponse")))) {
        success = _runtime_1.py.call(_driver_value_parsing_1._required_bool, [result, "success", (_runtime_1.py.str(root_field) + ".success")], null);
    }
    return _runtime_1.py.call(driver_models_1.DeleteDriverResult, [typename, success], null);
}
/** Parse UpdateDriver's known success branch and preserve future types. */
function parse_update_driver(...__args) {
    let driver, result, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse UpdateDriver's known success branch and preserve future types. */
    root_field = "updateDriver";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null);
    driver = null;
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateDriverSuccessResponse")))) {
        driver = _runtime_1.py.call(driver_models_1.UpdateDriverSuccess, [], Object.assign({}, { "entitlements": _runtime_1.py.call(_driver_value_parsing_1._required_string_tuple, [result, "entitlements", (_runtime_1.py.str(root_field) + ".entitlements")], null) }, { "usage_history": _runtime_1.py.call(_driver_value_parsing_1._required_bool, [result, "usageHistory", (_runtime_1.py.str(root_field) + ".usageHistory")], null) }, { "notifications_to_primary": _runtime_1.py.call(_driver_value_parsing_1._required_bool, [result, "notificationsToPrimary", (_runtime_1.py.str(root_field) + ".notificationsToPrimary")], null) }, { "success": _runtime_1.py.call(_driver_value_parsing_1._required_bool, [result, "success", (_runtime_1.py.str(root_field) + ".success")], null) }));
    }
    return _runtime_1.py.call(driver_models_1.UpdateDriverResult, [typename, driver], null);
}
/** Parse OwnerInviteAction's known success branch and preserve future types. */
function parse_owner_invite_action(...__args) {
    let result, root_field, success, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse OwnerInviteAction's known success branch and preserve future types. */
    root_field = "ownerInviteAction";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null);
    success = null;
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "OwnerInviteActionSuccessResponse")))) {
        success = _runtime_1.py.call(_driver_value_parsing_1._required_bool, [result, "success", (_runtime_1.py.str(root_field) + ".success")], null);
    }
    return _runtime_1.py.call(driver_models_1.OwnerInviteActionResult, [typename, success], null);
}
/** Parse CreateRSALink's nullable direct response and link. */
function parse_create_rsa_link(...__args) {
    let result, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse CreateRSALink's nullable direct response and link. */
    root_field = "createRSALink";
    result = _runtime_1.py.call(_driver_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    return _runtime_1.py.call(driver_models_1.CreateRSALinkResult, [_runtime_1.py.call(_driver_value_parsing_1._typename, [result, root_field], null), _runtime_1.py.call(_driver_value_parsing_1._required_nullable_string, [result, "link", (_runtime_1.py.str(root_field) + ".link")], null)], null);
}
//# sourceMappingURL=_driver_public_parsing.js.map