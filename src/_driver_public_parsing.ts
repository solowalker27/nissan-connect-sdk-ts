// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _parse_driver_invite, _parse_emergency_contact, _parse_error, _parse_invite_driver_success } from "./_driver_detail_parsing";
export { _parse_driver_invite, _parse_emergency_contact, _parse_error, _parse_invite_driver_success };

import { _nullable_list, _required_bool, _required_list, _required_nullable_bool, _required_nullable_string, _required_string_tuple, _required_value, _root, _typename } from "./_driver_value_parsing";
export { _nullable_list, _required_bool, _required_list, _required_nullable_bool, _required_nullable_string, _required_string_tuple, _required_value, _root, _typename };

import { CreateEmergencyContactResult, CreateRSALinkResult, DeleteDriverResult, DeleteEmergencyContactResult, DriverInviteActionResult, DriverInvitesResult, EmergencyContact, EmergencyContactsResult, InviteDriverResult, OwnerInviteActionResult, UpdateDriverResult, UpdateDriverSuccess, UpdateEmergencyContactResult } from "./driver_models";
export { CreateEmergencyContactResult, CreateRSALinkResult, DeleteDriverResult, DeleteEmergencyContactResult, DriverInviteActionResult, DriverInvitesResult, EmergencyContact, EmergencyContactsResult, InviteDriverResult, OwnerInviteActionResult, UpdateDriverResult, UpdateDriverSuccess, UpdateEmergencyContactResult };

import { ResponseError } from "./exceptions";
export { ResponseError };

export let _BASE_CONNECTED_VEHICLE_TYPES = $.call($.frozenset, [new Set(["AVK2Vehicle", "AVKVehicle", "ConnectedVehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "ElectricVehicle", "EVOVehicle"])], null);

export let _DRIVER_INVITES_ERROR_TYPES = $.call($.frozenset, [new Set(["GeneralErrors", "DatabaseError", "BrandError", "TokenError", "VinValidationError"])], null);

export let _INVITE_DRIVER_ERROR_TYPES = $.call($.frozenset, [new Set(["FirstNameValidationError", "LastNameValidationError", "EmailValidationError", "PhoneValidationError", "ExistingInviteError", "MaxInvitesReachedError"])], null);

export let _DRIVER_INVITE_ACTION_ERROR_TYPES = $.call($.frozenset, [new Set(["GeneralErrors", "DatabaseError", "InvalidInviteIdError", "TokenError", "BrandError", "TermsAndConditionsError", "CountryError"])], null);

export function parse_emergency_contacts(data: Record<string, unknown>): EmergencyContactsResult | null;
/** Parse a nullable vehicle and its nullable emergency-contact collection. */
export function parse_emergency_contacts(...__args: any[]): any {
let contacts, contacts_path, index, parsed_contacts, raw_contact, raw_contacts, root_field, typename, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a nullable vehicle and its nullable emergency-contact collection. */
root_field = "vehicle";
vehicle = $.call(_root, [data, root_field], null);
if ($.truth(((vehicle === null)))) {
return null;
}
typename = $.call(_typename, [vehicle, root_field], null);
if ($.truth((!$.contains(vehicle, "emergencyContacts")))) {
if ($.truth(($.contains(_BASE_CONNECTED_VEHICLE_TYPES, typename)))) {
throw $.call(ResponseError, [($.str(root_field) + ".emergencyContacts is missing")], null);
}
return $.call(EmergencyContactsResult, [typename, null], null);
}
contacts_path = ($.str(root_field) + ".emergencyContacts");
raw_contacts = $.call(_nullable_list, [$.call(_required_value, [vehicle, "emergencyContacts", contacts_path], null), contacts_path], null);
contacts = null;
if ($.truth(((raw_contacts !== null)))) {
parsed_contacts = [];
for ([index, raw_contact] of $.iterable($.call($.enumerate, [raw_contacts], null))) {
if ($.truth(((raw_contact === null)))) {
$.call($.attr(parsed_contacts, "append"), [null], null);
continue;
}
$.call($.attr(parsed_contacts, "append"), [$.call(_parse_emergency_contact, [raw_contact, ($.str(contacts_path) + "[" + $.str(index) + "]")], null)], null);
}
contacts = $.call($.tuple, [parsed_contacts], null);
}
return $.call(EmergencyContactsResult, [typename, contacts], null);
}

export function parse_create_emergency_contact(data: Record<string, unknown>): CreateEmergencyContactResult | null;
/** Parse the nullable union returned by CreateEmergencyContact. */
export function parse_create_emergency_contact(...__args: any[]): any {
let result, root_field, success, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable union returned by CreateEmergencyContact. */
root_field = "createEmergencyContact";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
typename = $.call(_typename, [result, root_field], null);
success = null;
if ($.truth(($.eq(typename, "ResponseStatus")))) {
success = $.call(_required_nullable_bool, [result, "success", ($.str(root_field) + ".success")], null);
}
return $.call(CreateEmergencyContactResult, [typename, success], null);
}

export function parse_update_emergency_contact(data: Record<string, unknown>): UpdateEmergencyContactResult | null;
/** Parse UpdateEmergencyContact's nullable direct response. */
export function parse_update_emergency_contact(...__args: any[]): any {
let result, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse UpdateEmergencyContact's nullable direct response. */
root_field = "updateEmergencyContact";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
return $.call(UpdateEmergencyContactResult, [$.call(_typename, [result, root_field], null), $.call(_required_nullable_bool, [result, "success", ($.str(root_field) + ".success")], null)], null);
}

export function parse_delete_emergency_contact(data: Record<string, unknown>): DeleteEmergencyContactResult | null;
/** Parse DeleteEmergencyContact's nullable direct response. */
export function parse_delete_emergency_contact(...__args: any[]): any {
let result, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse DeleteEmergencyContact's nullable direct response. */
root_field = "deleteEmergencyContact";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
return $.call(DeleteEmergencyContactResult, [$.call(_typename, [result, root_field], null), $.call(_required_nullable_bool, [result, "success", ($.str(root_field) + ".success")], null)], null);
}

export function parse_driver_invites(data: Record<string, unknown>): DriverInvitesResult | null;
/** Parse every known DriverInvites union branch and preserve future types. */
export function parse_driver_invites(...__args: any[]): any {
let index, invites, invites_path, raw_invites, result, root_field, typename, value;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every known DriverInvites union branch and preserve future types. */
root_field = "driverInvites";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
typename = $.call(_typename, [result, root_field], null);
if ($.truth(($.eq(typename, "DriverInvitesSuccessResponse")))) {
invites_path = ($.str(root_field) + ".invites");
raw_invites = $.call(_required_list, [result, "invites", invites_path], null);
invites = $.call($.tuple, [(() => { const __out: any = []; for (const [index, value] of $.iterable($.call($.enumerate, [raw_invites], null))) { __out.push($.call(_parse_driver_invite, [value, ($.str(invites_path) + "[" + $.str(index) + "]")], null)); } return __out; })()], null);
return $.call(DriverInvitesResult, [typename, invites, null], null);
}
if ($.truth(($.contains(_DRIVER_INVITES_ERROR_TYPES, typename)))) {
return $.call(DriverInvitesResult, [typename, null, $.call(_parse_error, [result, root_field, typename], null)], null);
}
return $.call(DriverInvitesResult, [typename, null, null], null);
}

export function parse_invite_driver(data: Record<string, unknown>): InviteDriverResult | null;
/** Parse every known InviteDriver union branch and preserve future types. */
export function parse_invite_driver(...__args: any[]): any {
let result, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every known InviteDriver union branch and preserve future types. */
root_field = "inviteDriver";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
typename = $.call(_typename, [result, root_field], null);
if ($.truth(($.eq(typename, "InviteDriverSuccessResponse")))) {
return $.call(InviteDriverResult, [typename, $.call(_parse_invite_driver_success, [result, root_field], null), null], null);
}
if ($.truth(($.contains(_INVITE_DRIVER_ERROR_TYPES, typename)))) {
return $.call(InviteDriverResult, [typename, null, $.call(_parse_error, [result, root_field, typename], null)], null);
}
return $.call(InviteDriverResult, [typename, null, null], null);
}

export function parse_driver_invite_action(data: Record<string, unknown>): DriverInviteActionResult | null;
/** Parse every known DriverInviteAction union branch and preserve future types. */
export function parse_driver_invite_action(...__args: any[]): any {
let result, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every known DriverInviteAction union branch and preserve future types. */
root_field = "driverInviteAction";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
typename = $.call(_typename, [result, root_field], null);
if ($.truth(($.eq(typename, "DriverInviteActionSuccessResponse")))) {
return $.call(DriverInviteActionResult, [typename, $.call(_required_bool, [result, "success", ($.str(root_field) + ".success")], null), null], null);
}
if ($.truth(($.contains(_DRIVER_INVITE_ACTION_ERROR_TYPES, typename)))) {
return $.call(DriverInviteActionResult, [typename, null, $.call(_parse_error, [result, root_field, typename], null)], null);
}
return $.call(DriverInviteActionResult, [typename, null, null], null);
}

export function parse_delete_driver(data: Record<string, unknown>): DeleteDriverResult | null;
/** Parse DeleteDriver's known success branch and preserve future types. */
export function parse_delete_driver(...__args: any[]): any {
let result, root_field, success, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse DeleteDriver's known success branch and preserve future types. */
root_field = "deleteDriver";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
typename = $.call(_typename, [result, root_field], null);
success = null;
if ($.truth(($.eq(typename, "DeleteDriverSuccessResponse")))) {
success = $.call(_required_bool, [result, "success", ($.str(root_field) + ".success")], null);
}
return $.call(DeleteDriverResult, [typename, success], null);
}

export function parse_update_driver(data: Record<string, unknown>): UpdateDriverResult | null;
/** Parse UpdateDriver's known success branch and preserve future types. */
export function parse_update_driver(...__args: any[]): any {
let driver, result, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse UpdateDriver's known success branch and preserve future types. */
root_field = "updateDriver";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
typename = $.call(_typename, [result, root_field], null);
driver = null;
if ($.truth(($.eq(typename, "UpdateDriverSuccessResponse")))) {
driver = $.call(UpdateDriverSuccess, [], Object.assign({}, {"entitlements": $.call(_required_string_tuple, [result, "entitlements", ($.str(root_field) + ".entitlements")], null)}, {"usage_history": $.call(_required_bool, [result, "usageHistory", ($.str(root_field) + ".usageHistory")], null)}, {"notifications_to_primary": $.call(_required_bool, [result, "notificationsToPrimary", ($.str(root_field) + ".notificationsToPrimary")], null)}, {"success": $.call(_required_bool, [result, "success", ($.str(root_field) + ".success")], null)}));
}
return $.call(UpdateDriverResult, [typename, driver], null);
}

export function parse_owner_invite_action(data: Record<string, unknown>): OwnerInviteActionResult | null;
/** Parse OwnerInviteAction's known success branch and preserve future types. */
export function parse_owner_invite_action(...__args: any[]): any {
let result, root_field, success, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse OwnerInviteAction's known success branch and preserve future types. */
root_field = "ownerInviteAction";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
typename = $.call(_typename, [result, root_field], null);
success = null;
if ($.truth(($.eq(typename, "OwnerInviteActionSuccessResponse")))) {
success = $.call(_required_bool, [result, "success", ($.str(root_field) + ".success")], null);
}
return $.call(OwnerInviteActionResult, [typename, success], null);
}

export function parse_create_rsa_link(data: Record<string, unknown>): CreateRSALinkResult | null;
/** Parse CreateRSALink's nullable direct response and link. */
export function parse_create_rsa_link(...__args: any[]): any {
let result, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse CreateRSALink's nullable direct response and link. */
root_field = "createRSALink";
result = $.call(_root, [data, root_field], null);
if ($.truth(((result === null)))) {
return null;
}
return $.call(CreateRSALinkResult, [$.call(_typename, [result, root_field], null), $.call(_required_nullable_string, [result, "link", ($.str(root_field) + ".link")], null)], null);
}
