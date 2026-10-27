// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _required_bool, _required_datetime, _required_enum, _required_nullable_enum, _required_nullable_string, _required_string, _required_string_tuple, _typed_object, _typename } from "./_driver_value_parsing";
export { _required_bool, _required_datetime, _required_enum, _required_nullable_enum, _required_nullable_string, _required_string, _required_string_tuple, _typed_object, _typename };

import { DriverInvite, DriverOperationError, EmergencyContact, EmergencyContactRelationship, InviteDriverSuccess, InviteNotificationType, InviteStatus } from "./driver_models";
export { DriverInvite, DriverOperationError, EmergencyContact, EmergencyContactRelationship, InviteDriverSuccess, InviteNotificationType, InviteStatus };

export let _BASE_CONNECTED_VEHICLE_TYPES = $.call($.frozenset, [new Set(["AVK2Vehicle", "AVKVehicle", "ConnectedVehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "ElectricVehicle", "EVOVehicle"])], null);

export let _DRIVER_INVITES_ERROR_TYPES = $.call($.frozenset, [new Set(["GeneralErrors", "DatabaseError", "BrandError", "TokenError", "VinValidationError"])], null);

export let _INVITE_DRIVER_ERROR_TYPES = $.call($.frozenset, [new Set(["FirstNameValidationError", "LastNameValidationError", "EmailValidationError", "PhoneValidationError", "ExistingInviteError", "MaxInvitesReachedError"])], null);

export let _DRIVER_INVITE_ACTION_ERROR_TYPES = $.call($.frozenset, [new Set(["GeneralErrors", "DatabaseError", "InvalidInviteIdError", "TokenError", "BrandError", "TermsAndConditionsError", "CountryError"])], null);

export function _parse_emergency_contact(value: unknown, path: string): EmergencyContact;
/** Translated upstream _parse_emergency_contact. */
export function _parse_emergency_contact(...__args: any[]): any {
let contact;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
contact = $.call(_typed_object, [value, path], null);
return $.call(EmergencyContact, [], Object.assign({}, {"typename": $.call(_typename, [contact, path], null)}, {"id": $.call(_required_nullable_string, [contact, "id", ($.str(path) + ".id")], null)}, {"first_name": $.call(_required_nullable_string, [contact, "firstName", ($.str(path) + ".firstName")], null)}, {"last_name": $.call(_required_nullable_string, [contact, "lastName", ($.str(path) + ".lastName")], null)}, {"primary_phone": $.call(_required_nullable_string, [contact, "primaryPhone", ($.str(path) + ".primaryPhone")], null)}, {"secondary_phone": $.call(_required_nullable_string, [contact, "secondaryPhone", ($.str(path) + ".secondaryPhone")], null)}, {"relationship": $.call(_required_nullable_enum, [contact, "relationship", EmergencyContactRelationship, ($.str(path) + ".relationship")], null)}));
}

export function _parse_driver_invite(value: unknown, path: string): DriverInvite;
/** Translated upstream _parse_driver_invite. */
export function _parse_driver_invite(...__args: any[]): any {
let invite;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
invite = $.call(_typed_object, [value, path], null);
return $.call(DriverInvite, [], Object.assign({}, {"typename": $.call(_typename, [invite, path], null)}, {"invite_id": $.call(_required_string, [invite, "inviteId", ($.str(path) + ".inviteId")], null)}, {"driver_first_name": $.call(_required_string, [invite, "driverFirstName", ($.str(path) + ".driverFirstName")], null)}, {"driver_last_name": $.call(_required_string, [invite, "driverLastName", ($.str(path) + ".driverLastName")], null)}, {"driver_email": $.call(_required_string, [invite, "driverEmail", ($.str(path) + ".driverEmail")], null)}, {"driver_phone_number": $.call(_required_string, [invite, "driverPhoneNumber", ($.str(path) + ".driverPhoneNumber")], null)}, {"invite_date_time": $.call(_required_datetime, [invite, "inviteDateTime", ($.str(path) + ".inviteDateTime")], null)}, {"invite_expiry_date_time": $.call(_required_datetime, [invite, "inviteExpiryDateTime", ($.str(path) + ".inviteExpiryDateTime")], null)}, {"invite_type": $.call(_required_enum, [invite, "inviteType", InviteNotificationType, ($.str(path) + ".inviteType")], null)}, {"notifications_to_primary": $.call(_required_bool, [invite, "notificationsToPrimary", ($.str(path) + ".notificationsToPrimary")], null)}, {"usage_history": $.call(_required_bool, [invite, "usageHistory", ($.str(path) + ".usageHistory")], null)}, {"status": $.call(_required_enum, [invite, "status", InviteStatus, ($.str(path) + ".status")], null)}, {"cdiid": $.call(_required_nullable_string, [invite, "cdiid", ($.str(path) + ".cdiid")], null)}));
}

export function _parse_invite_driver_success(result: Record<string, unknown>, path: string): InviteDriverSuccess;
/** Translated upstream _parse_invite_driver_success. */
export function _parse_invite_driver_success(...__args: any[]): any {
let {"result": result, "path": path} = $.bind(__args, ["result", "path"], {}, [], null, null);
return $.call(InviteDriverSuccess, [], Object.assign({}, {"vin": $.call(_required_string, [result, "vin", ($.str(path) + ".vin")], null)}, {"invite_id": $.call(_required_string, [result, "inviteId", ($.str(path) + ".inviteId")], null)}, {"driver_first_name": $.call(_required_string, [result, "driverFirstName", ($.str(path) + ".driverFirstName")], null)}, {"driver_last_name": $.call(_required_string, [result, "driverLastName", ($.str(path) + ".driverLastName")], null)}, {"driver_email": $.call(_required_string, [result, "driverEmail", ($.str(path) + ".driverEmail")], null)}, {"driver_phone_number": $.call(_required_string, [result, "driverPhoneNumber", ($.str(path) + ".driverPhoneNumber")], null)}, {"entitlements": $.call(_required_string_tuple, [result, "entitlements", ($.str(path) + ".entitlements")], null)}, {"invite_type": $.call(_required_enum, [result, "inviteType", InviteNotificationType, ($.str(path) + ".inviteType")], null)}, {"usage_history": $.call(_required_bool, [result, "usageHistory", ($.str(path) + ".usageHistory")], null)}, {"notifications_to_primary": $.call(_required_bool, [result, "notificationsToPrimary", ($.str(path) + ".notificationsToPrimary")], null)}, {"invite_date_time": $.call(_required_datetime, [result, "inviteDateTime", ($.str(path) + ".inviteDateTime")], null)}, {"status": $.call(_required_enum, [result, "status", InviteStatus, ($.str(path) + ".status")], null)}));
}

export function _parse_error(result: Record<string, unknown>, path: string, typename: string): DriverOperationError;
/** Translated upstream _parse_error. */
export function _parse_error(...__args: any[]): any {
let {"result": result, "path": path, "typename": typename} = $.bind(__args, ["result", "path", "typename"], {}, [], null, null);
return $.call(DriverOperationError, [typename, $.call(_required_string, [result, "errorMessage", ($.str(path) + ".errorMessage")], null)], null);
}
