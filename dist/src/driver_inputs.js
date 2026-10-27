"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerInviteActionInput = exports.UpdateDriverInput = exports.DriverInviteActionInput = exports.DriverInviteInput = exports.UpdateEmergencyContactInput = exports.CreateEmergencyContactInput = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.OwnerInviteAction = exports.InviteNotificationType = exports.EmergencyContactRelationship = exports.DriverInviteAction = void 0;
exports.emergency_contacts_variables = emergency_contacts_variables;
exports.create_emergency_contact_variables = create_emergency_contact_variables;
exports.update_emergency_contact_variables = update_emergency_contact_variables;
exports.delete_emergency_contact_variables = delete_emergency_contact_variables;
exports.driver_invites_variables = driver_invites_variables;
exports.invite_driver_variables = invite_driver_variables;
exports.driver_invite_action_variables = driver_invite_action_variables;
exports.delete_driver_variables = delete_driver_variables;
exports.update_driver_variables = update_driver_variables;
exports.owner_invite_action_variables = owner_invite_action_variables;
exports.create_rsa_link_variables = create_rsa_link_variables;
exports.create_emergency_contact_input = create_emergency_contact_input;
exports.update_emergency_contact_input = update_emergency_contact_input;
exports.driver_invite_input = driver_invite_input;
exports.driver_invite_action_input = driver_invite_action_input;
exports.update_driver_input = update_driver_input;
exports.owner_invite_action_input = owner_invite_action_input;
exports._optional_enum = _optional_enum;
exports._optional_input = _optional_input;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Callable = _runtime_1.py.Callable;
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
const driver_models_1 = require("./driver_models");
Object.defineProperty(exports, "DriverInviteAction", { enumerable: true, get: function () { return driver_models_1.DriverInviteAction; } });
Object.defineProperty(exports, "EmergencyContactRelationship", { enumerable: true, get: function () { return driver_models_1.EmergencyContactRelationship; } });
Object.defineProperty(exports, "InviteNotificationType", { enumerable: true, get: function () { return driver_models_1.InviteNotificationType; } });
Object.defineProperty(exports, "OwnerInviteAction", { enumerable: true, get: function () { return driver_models_1.OwnerInviteAction; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
/** Required and optional fields for a new emergency contact. */
class CreateEmergencyContactInput {
    first_name;
    last_name;
    primary_phone;
    relationship;
    secondary_phone;
    static __fields = [["first_name", _runtime_1.py.MISSING], ["last_name", _runtime_1.py.MISSING], ["primary_phone", _runtime_1.py.MISSING], ["relationship", _runtime_1.py.MISSING], ["secondary_phone", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CreateEmergencyContactInput, __args); Object.freeze(this); }
}
exports.CreateEmergencyContactInput = CreateEmergencyContactInput;
_runtime_1.py.classType(CreateEmergencyContactInput);
/** Emergency-contact patch with Apollo omission semantics. */
class UpdateEmergencyContactInput {
    emergency_contact_id;
    first_name;
    last_name;
    primary_phone;
    secondary_phone;
    relationship;
    static __fields = [["emergency_contact_id", _runtime_1.py.MISSING], ["first_name", graphql_input_1.UNSET], ["last_name", graphql_input_1.UNSET], ["primary_phone", graphql_input_1.UNSET], ["secondary_phone", graphql_input_1.UNSET], ["relationship", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateEmergencyContactInput, __args); Object.freeze(this); }
}
exports.UpdateEmergencyContactInput = UpdateEmergencyContactInput;
_runtime_1.py.classType(UpdateEmergencyContactInput);
/** Required identity, permissions, and delivery channel for a driver invite. */
class DriverInviteInput {
    driver_first_name;
    driver_last_name;
    driver_email;
    driver_phone_number;
    vin;
    entitlements;
    invite_type;
    usage_history;
    notifications_to_primary;
    static __fields = [["driver_first_name", _runtime_1.py.MISSING], ["driver_last_name", _runtime_1.py.MISSING], ["driver_email", _runtime_1.py.MISSING], ["driver_phone_number", _runtime_1.py.MISSING], ["vin", _runtime_1.py.MISSING], ["entitlements", _runtime_1.py.MISSING], ["invite_type", _runtime_1.py.MISSING], ["usage_history", _runtime_1.py.MISSING], ["notifications_to_primary", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DriverInviteInput, __args); Object.freeze(this); }
}
exports.DriverInviteInput = DriverInviteInput;
_runtime_1.py.classType(DriverInviteInput);
/** Prospective-driver action with optional terms acceptance. */
class DriverInviteActionInput {
    invite_id;
    action;
    terms_and_conditions;
    static __fields = [["invite_id", _runtime_1.py.MISSING], ["action", _runtime_1.py.MISSING], ["terms_and_conditions", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DriverInviteActionInput, __args); Object.freeze(this); }
}
exports.DriverInviteActionInput = DriverInviteActionInput;
_runtime_1.py.classType(DriverInviteActionInput);
/** Required replacement permissions for an invited driver. */
class UpdateDriverInput {
    invite_id;
    entitlements;
    usage_history;
    notifications_to_primary;
    static __fields = [["invite_id", _runtime_1.py.MISSING], ["entitlements", _runtime_1.py.MISSING], ["usage_history", _runtime_1.py.MISSING], ["notifications_to_primary", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateDriverInput, __args); Object.freeze(this); }
}
exports.UpdateDriverInput = UpdateDriverInput;
_runtime_1.py.classType(UpdateDriverInput);
/** Owner action and notification channel for a driver invitation. */
class OwnerInviteActionInput {
    invite_id;
    action;
    notification_type;
    static __fields = [["invite_id", _runtime_1.py.MISSING], ["action", _runtime_1.py.MISSING], ["notification_type", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OwnerInviteActionInput, __args); Object.freeze(this); }
}
exports.OwnerInviteActionInput = OwnerInviteActionInput;
_runtime_1.py.classType(OwnerInviteActionInput);
/** Serialize the required VIN for the EmergencyContacts query. */
function emergency_contacts_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for the EmergencyContacts query. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize a complete emergency-contact creation request. */
function create_emergency_contact_variables(...__args) {
    let { "vin": vin, "contact": contact } = _runtime_1.py.bind(__args, ["vin", "contact"], {}, [], null, null);
    /** Serialize a complete emergency-contact creation request. */
    return Object.assign({}, { ["vin"]: vin }, { ["contact"]: _runtime_1.py.call(create_emergency_contact_input, [contact], null) });
}
/** Serialize an emergency-contact patch without inventing omitted fields. */
function update_emergency_contact_variables(...__args) {
    let { "vin": vin, "contact": contact } = _runtime_1.py.bind(__args, ["vin", "contact"], {}, [], null, null);
    /** Serialize an emergency-contact patch without inventing omitted fields. */
    return Object.assign({}, { ["vin"]: vin }, { ["contact"]: _runtime_1.py.call(update_emergency_contact_input, [contact], null) });
}
/** Serialize the required emergency-contact deletion identifiers. */
function delete_emergency_contact_variables(...__args) {
    let { "vin": vin, "emergency_contact_id": emergency_contact_id } = _runtime_1.py.bind(__args, ["vin", "emergency_contact_id"], {}, [], null, null);
    /** Serialize the required emergency-contact deletion identifiers. */
    return Object.assign({}, { ["vin"]: vin }, { ["emergencyContactId"]: emergency_contact_id });
}
/** Serialize the required VIN for the DriverInvites query. */
function driver_invites_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for the DriverInvites query. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize InviteDriver's nullable Apollo-optional config variable. */
function invite_driver_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], { "config": graphql_input_1.UNSET }, [], null, null);
    /** Serialize InviteDriver's nullable Apollo-optional config variable. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "config": _runtime_1.py.call(_optional_input, [config, driver_invite_input], null) }));
}
/** Serialize DriverInviteAction's nullable Apollo-optional config variable. */
function driver_invite_action_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], { "config": graphql_input_1.UNSET }, [], null, null);
    /** Serialize DriverInviteAction's nullable Apollo-optional config variable. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "config": _runtime_1.py.call(_optional_input, [config, driver_invite_action_input], null) }));
}
/** Serialize the required invitation ID for DeleteDriver. */
function delete_driver_variables(...__args) {
    let { "invite_id": invite_id } = _runtime_1.py.bind(__args, ["invite_id"], {}, [], null, null);
    /** Serialize the required invitation ID for DeleteDriver. */
    return Object.assign({}, { ["inviteId"]: invite_id });
}
/** Serialize the required UpdateDriver config variable. */
function update_driver_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize the required UpdateDriver config variable. */
    return Object.assign({}, { ["config"]: _runtime_1.py.call(update_driver_input, [config], null) });
}
/** Serialize OwnerInviteAction's nullable Apollo-optional config variable. */
function owner_invite_action_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], { "config": graphql_input_1.UNSET }, [], null, null);
    /** Serialize OwnerInviteAction's nullable Apollo-optional config variable. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "config": _runtime_1.py.call(_optional_input, [config, owner_invite_action_input], null) }));
}
/** Serialize the required VIN for CreateRSALink. */
function create_rsa_link_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for CreateRSALink. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize a CreateEmergencyContact input object. */
function create_emergency_contact_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize a CreateEmergencyContact input object. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "firstName": _runtime_1.py.attr(value, "first_name") }, { "lastName": _runtime_1.py.attr(value, "last_name") }, { "primaryPhone": _runtime_1.py.attr(value, "primary_phone") }, { "secondaryPhone": _runtime_1.py.attr(value, "secondary_phone") }, { "relationship": _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "relationship")], null) }));
}
/** Serialize an UpdateEmergencyContact input object. */
function update_emergency_contact_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize an UpdateEmergencyContact input object. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "emergencyContactId": _runtime_1.py.attr(value, "emergency_contact_id") }, { "firstName": _runtime_1.py.attr(value, "first_name") }, { "lastName": _runtime_1.py.attr(value, "last_name") }, { "primaryPhone": _runtime_1.py.attr(value, "primary_phone") }, { "secondaryPhone": _runtime_1.py.attr(value, "secondary_phone") }, { "relationship": _runtime_1.py.call(_optional_enum, [_runtime_1.py.attr(value, "relationship")], null) }));
}
/** Serialize a DriverInviteInput object. */
function driver_invite_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize a DriverInviteInput object. */
    return Object.assign({}, { ["driverFirstName"]: _runtime_1.py.attr(value, "driver_first_name") }, { ["driverLastName"]: _runtime_1.py.attr(value, "driver_last_name") }, { ["driverEmail"]: _runtime_1.py.attr(value, "driver_email") }, { ["driverPhoneNumber"]: _runtime_1.py.attr(value, "driver_phone_number") }, { ["vin"]: _runtime_1.py.attr(value, "vin") }, { ["entitlements"]: _runtime_1.py.call(_runtime_1.py.list, [_runtime_1.py.attr(value, "entitlements")], null) }, { ["inviteType"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "invite_type")], null) }, { ["usageHistory"]: _runtime_1.py.attr(value, "usage_history") }, { ["notificationsToPrimary"]: _runtime_1.py.attr(value, "notifications_to_primary") });
}
/** Serialize a DriverInviteActionInput object. */
function driver_invite_action_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize a DriverInviteActionInput object. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "inviteId": _runtime_1.py.attr(value, "invite_id") }, { "action": _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "action")], null) }, { "termsAndConditions": _runtime_1.py.attr(value, "terms_and_conditions") }));
}
/** Serialize an UpdateDriverInput object. */
function update_driver_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize an UpdateDriverInput object. */
    return Object.assign({}, { ["inviteId"]: _runtime_1.py.attr(value, "invite_id") }, { ["entitlements"]: _runtime_1.py.call(_runtime_1.py.list, [_runtime_1.py.attr(value, "entitlements")], null) }, { ["usageHistory"]: _runtime_1.py.attr(value, "usage_history") }, { ["notificationsToPrimary"]: _runtime_1.py.attr(value, "notifications_to_primary") });
}
/** Serialize an OwnerInviteActionInput object. */
function owner_invite_action_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize an OwnerInviteActionInput object. */
    return Object.assign({}, { ["inviteId"]: _runtime_1.py.attr(value, "invite_id") }, { ["action"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "action")], null) }, { ["notificationType"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "notification_type")], null) });
}
/** Translated upstream _optional_enum. */
function _optional_enum(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
}
/** Translated upstream _optional_input. */
function _optional_input(...__args) {
    let { "value": value, "serializer": serializer } = _runtime_1.py.bind(__args, ["value", "serializer"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(serializer, [value], null);
}
//# sourceMappingURL=driver_inputs.js.map