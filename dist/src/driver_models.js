"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRSALinkResult = exports.OwnerInviteActionResult = exports.UpdateDriverResult = exports.UpdateDriverSuccess = exports.DeleteDriverResult = exports.DriverInviteActionResult = exports.InviteDriverResult = exports.InviteDriverSuccess = exports.DriverInvitesResult = exports.DriverInvite = exports.DriverOperationError = exports.DeleteEmergencyContactResult = exports.UpdateEmergencyContactResult = exports.CreateEmergencyContactResult = exports.EmergencyContactsResult = exports.EmergencyContact = exports.OwnerInviteAction = exports.DriverInviteAction = exports.InviteStatus = exports.InviteNotificationType = exports.EmergencyContactRelationship = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
exports.EmergencyContactRelationship = _runtime_1.py.enumType("EmergencyContactRelationship", { "ASSISTANT": "ASSISTANT", "BROTHER": "BROTHER", "BUSINESS_CONTACT": "BUSINESS_CONTACT", "CHAUFFEUR": "CHAUFFEUR", "CO_WORKER": "CO_WORKER", "DAUGHTER": "DAUGHTER", "DOCTOR": "DOCTOR", "EMPLOYEE": "EMPLOYEE", "FATHER": "FATHER", "FIANCE": "FIANCE", "FIANCEE": "FIANCEE", "FRIEND": "FRIEND", "GRANDFATHER": "GRANDFATHER", "GRANDMOTHER": "GRANDMOTHER", "MOTHER": "MOTHER", "OTHER": "OTHER", "PARENTS": "PARENTS", "PARTNER": "PARTNER", "RELATIVE": "RELATIVE", "SIGNIFICANT_OTHER": "SIGNIFICANT_OTHER", "SISTER": "SISTER", "SON": "SON", "SPOUSE": "SPOUSE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.InviteNotificationType = _runtime_1.py.enumType("InviteNotificationType", { "SMS": "SMS", "EMAIL": "EMAIL", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.InviteStatus = _runtime_1.py.enumType("InviteStatus", { "ACCEPTED": "ACCEPTED", "PENDING": "PENDING", "DECLINE": "DECLINE", "REMOVED": "REMOVED", "CANCEL": "CANCEL", "EXPIRED": "EXPIRED", "INVALIDATE": "INVALIDATE", "NONE": "NONE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.DriverInviteAction = _runtime_1.py.enumType("DriverInviteAction", { "DECLINE": "DECLINE", "ACCEPT": "ACCEPT", "INVALIDATE": "INVALIDATE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.OwnerInviteAction = _runtime_1.py.enumType("OwnerInviteAction", { "RESEND": "RESEND", "CANCEL": "CANCEL", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** One nullable-field emergency contact returned for a vehicle. */
class EmergencyContact {
    typename;
    id;
    first_name;
    last_name;
    primary_phone;
    secondary_phone;
    relationship;
    static __fields = [["typename", _runtime_1.py.MISSING], ["id", _runtime_1.py.MISSING], ["first_name", _runtime_1.py.MISSING], ["last_name", _runtime_1.py.MISSING], ["primary_phone", _runtime_1.py.MISSING], ["secondary_phone", _runtime_1.py.MISSING], ["relationship", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EmergencyContact, __args); Object.freeze(this); }
}
exports.EmergencyContact = EmergencyContact;
_runtime_1.py.classType(EmergencyContact);
/** Vehicle type and emergency contacts selected by the vehicle fragment. */
class EmergencyContactsResult {
    typename;
    emergency_contacts;
    static __fields = [["typename", _runtime_1.py.MISSING], ["emergency_contacts", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EmergencyContactsResult, __args); Object.freeze(this); }
}
exports.EmergencyContactsResult = EmergencyContactsResult;
_runtime_1.py.classType(EmergencyContactsResult);
/** Nullable response status returned after creating an emergency contact. */
class CreateEmergencyContactResult {
    typename;
    success;
    static __fields = [["typename", _runtime_1.py.MISSING], ["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CreateEmergencyContactResult, __args); Object.freeze(this); }
}
exports.CreateEmergencyContactResult = CreateEmergencyContactResult;
_runtime_1.py.classType(CreateEmergencyContactResult);
/** Nullable response status returned after updating an emergency contact. */
class UpdateEmergencyContactResult {
    typename;
    success;
    static __fields = [["typename", _runtime_1.py.MISSING], ["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateEmergencyContactResult, __args); Object.freeze(this); }
}
exports.UpdateEmergencyContactResult = UpdateEmergencyContactResult;
_runtime_1.py.classType(UpdateEmergencyContactResult);
/** Nullable response status returned after deleting an emergency contact. */
class DeleteEmergencyContactResult {
    typename;
    success;
    static __fields = [["typename", _runtime_1.py.MISSING], ["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DeleteEmergencyContactResult, __args); Object.freeze(this); }
}
exports.DeleteEmergencyContactResult = DeleteEmergencyContactResult;
_runtime_1.py.classType(DeleteEmergencyContactResult);
/** A known driver-operation error branch and its server message. */
class DriverOperationError {
    typename;
    error_message;
    static __fields = [["typename", _runtime_1.py.MISSING], ["error_message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DriverOperationError, __args); Object.freeze(this); }
}
exports.DriverOperationError = DriverOperationError;
_runtime_1.py.classType(DriverOperationError);
/** One current driver invitation returned by Nissan. */
class DriverInvite {
    typename;
    invite_id;
    driver_first_name;
    driver_last_name;
    driver_email;
    driver_phone_number;
    invite_date_time;
    invite_expiry_date_time;
    invite_type;
    notifications_to_primary;
    usage_history;
    status;
    cdiid;
    static __fields = [["typename", _runtime_1.py.MISSING], ["invite_id", _runtime_1.py.MISSING], ["driver_first_name", _runtime_1.py.MISSING], ["driver_last_name", _runtime_1.py.MISSING], ["driver_email", _runtime_1.py.MISSING], ["driver_phone_number", _runtime_1.py.MISSING], ["invite_date_time", _runtime_1.py.MISSING], ["invite_expiry_date_time", _runtime_1.py.MISSING], ["invite_type", _runtime_1.py.MISSING], ["notifications_to_primary", _runtime_1.py.MISSING], ["usage_history", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING], ["cdiid", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DriverInvite, __args); Object.freeze(this); }
}
exports.DriverInvite = DriverInvite;
_runtime_1.py.classType(DriverInvite);
/** Future-safe union result for the DriverInvites query. */
class DriverInvitesResult {
    typename;
    invites;
    error;
    static __fields = [["typename", _runtime_1.py.MISSING], ["invites", _runtime_1.py.MISSING], ["error", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DriverInvitesResult, __args); Object.freeze(this); }
}
exports.DriverInvitesResult = DriverInvitesResult;
_runtime_1.py.classType(DriverInvitesResult);
/** Driver invitation returned by a successful InviteDriver mutation. */
class InviteDriverSuccess {
    vin;
    invite_id;
    driver_first_name;
    driver_last_name;
    driver_email;
    driver_phone_number;
    entitlements;
    invite_type;
    usage_history;
    notifications_to_primary;
    invite_date_time;
    status;
    static __fields = [["vin", _runtime_1.py.MISSING], ["invite_id", _runtime_1.py.MISSING], ["driver_first_name", _runtime_1.py.MISSING], ["driver_last_name", _runtime_1.py.MISSING], ["driver_email", _runtime_1.py.MISSING], ["driver_phone_number", _runtime_1.py.MISSING], ["entitlements", _runtime_1.py.MISSING], ["invite_type", _runtime_1.py.MISSING], ["usage_history", _runtime_1.py.MISSING], ["notifications_to_primary", _runtime_1.py.MISSING], ["invite_date_time", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, InviteDriverSuccess, __args); Object.freeze(this); }
}
exports.InviteDriverSuccess = InviteDriverSuccess;
_runtime_1.py.classType(InviteDriverSuccess);
/** Future-safe success or validation-error result for InviteDriver. */
class InviteDriverResult {
    typename;
    invitation;
    error;
    static __fields = [["typename", _runtime_1.py.MISSING], ["invitation", _runtime_1.py.MISSING], ["error", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, InviteDriverResult, __args); Object.freeze(this); }
}
exports.InviteDriverResult = InviteDriverResult;
_runtime_1.py.classType(InviteDriverResult);
/** Future-safe result for a prospective driver's invitation action. */
class DriverInviteActionResult {
    typename;
    success;
    error;
    static __fields = [["typename", _runtime_1.py.MISSING], ["success", _runtime_1.py.MISSING], ["error", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DriverInviteActionResult, __args); Object.freeze(this); }
}
exports.DriverInviteActionResult = DriverInviteActionResult;
_runtime_1.py.classType(DriverInviteActionResult);
/** Future-safe result for deleting a driver invitation. */
class DeleteDriverResult {
    typename;
    success;
    static __fields = [["typename", _runtime_1.py.MISSING], ["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DeleteDriverResult, __args); Object.freeze(this); }
}
exports.DeleteDriverResult = DeleteDriverResult;
_runtime_1.py.classType(DeleteDriverResult);
/** Driver permissions returned by a successful UpdateDriver mutation. */
class UpdateDriverSuccess {
    entitlements;
    usage_history;
    notifications_to_primary;
    success;
    static __fields = [["entitlements", _runtime_1.py.MISSING], ["usage_history", _runtime_1.py.MISSING], ["notifications_to_primary", _runtime_1.py.MISSING], ["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateDriverSuccess, __args); Object.freeze(this); }
}
exports.UpdateDriverSuccess = UpdateDriverSuccess;
_runtime_1.py.classType(UpdateDriverSuccess);
/** Future-safe result for updating a driver's permissions. */
class UpdateDriverResult {
    typename;
    driver;
    static __fields = [["typename", _runtime_1.py.MISSING], ["driver", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateDriverResult, __args); Object.freeze(this); }
}
exports.UpdateDriverResult = UpdateDriverResult;
_runtime_1.py.classType(UpdateDriverResult);
/** Future-safe result for an owner's invitation action. */
class OwnerInviteActionResult {
    typename;
    success;
    static __fields = [["typename", _runtime_1.py.MISSING], ["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OwnerInviteActionResult, __args); Object.freeze(this); }
}
exports.OwnerInviteActionResult = OwnerInviteActionResult;
_runtime_1.py.classType(OwnerInviteActionResult);
/** Nullable roadside-assistance link returned for a vehicle. */
class CreateRSALinkResult {
    typename;
    link;
    static __fields = [["typename", _runtime_1.py.MISSING], ["link", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CreateRSALinkResult, __args); Object.freeze(this); }
}
exports.CreateRSALinkResult = CreateRSALinkResult;
_runtime_1.py.classType(CreateRSALinkResult);
//# sourceMappingURL=driver_models.js.map