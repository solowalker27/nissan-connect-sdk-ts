// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const UTC = $.UTC;
const datetime = $.datetime;

const pytest = $.pytest;

import { DriverParser } from "./test_drivers";

import { CreateEmergencyContactResult, CreateRSALinkResult, DeleteDriverResult, DeleteEmergencyContactResult, DriverInvite, DriverInviteActionResult, DriverInvitesResult, DriverOperationError, InviteDriverResult, InviteDriverSuccess, InviteNotificationType, InviteStatus, OwnerInviteActionResult, UpdateDriverResult, UpdateDriverSuccess, UpdateEmergencyContactResult } from "../src/driver_models";

import { parse_create_emergency_contact, parse_create_rsa_link, parse_delete_driver, parse_delete_emergency_contact, parse_driver_invite_action, parse_driver_invites, parse_emergency_contacts, parse_invite_driver, parse_owner_invite_action, parse_update_driver, parse_update_emergency_contact } from "../src/driver_parsing";

/** Translated upstream test_parse_emergency_contact_mutation_results_preserves_nullable_success. */
export function test_parse_emergency_contact_mutation_results_preserves_nullable_success(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_create_emergency_contact, [Object.assign({}, {["createEmergencyContact"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: null})})], null), $.call(CreateEmergencyContactResult, ["ResponseStatus", null], null))), "test_drivers_part_02.py:42: parse_create_emergency_contact({'createEmergencyContact': {'__typename': 'ResponseStatus', 'success': None}}) == CreateEmergencyContactResult('ResponseStatus', None)");
$.assert(($.eq($.call(parse_create_emergency_contact, [Object.assign({}, {["createEmergencyContact"]: Object.assign({}, {["__typename"]: "FutureCreateResult"})})], null), $.call(CreateEmergencyContactResult, ["FutureCreateResult", null], null))), "test_drivers_part_02.py:45: parse_create_emergency_contact({'createEmergencyContact': {'__typename': 'FutureCreateResult'}}) == CreateEmergencyContactResult('FutureCreateResult', None)");
$.assert(($.eq($.call(parse_update_emergency_contact, [Object.assign({}, {["updateEmergencyContact"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: true})})], null), $.call(UpdateEmergencyContactResult, ["ResponseStatus", true], null))), "test_drivers_part_02.py:48: parse_update_emergency_contact({'updateEmergencyContact': {'__typename': 'ResponseStatus', 'success': True}}) == UpdateEmergencyContactResult('ResponseStatus', True)");
$.assert(($.eq($.call(parse_delete_emergency_contact, [Object.assign({}, {["deleteEmergencyContact"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: false})})], null), $.call(DeleteEmergencyContactResult, ["ResponseStatus", false], null))), "test_drivers_part_02.py:51: parse_delete_emergency_contact({'deleteEmergencyContact': {'__typename': 'ResponseStatus', 'success': False}}) == DeleteEmergencyContactResult('ResponseStatus', False)");
}

/** Translated upstream test_parse_driver_invites_success_is_exact_and_future_safe. */
export function test_parse_driver_invites_success_is_exact_and_future_safe(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_driver_invites, [Object.assign({}, {["driverInvites"]: Object.assign({}, {["__typename"]: "DriverInvitesSuccessResponse"}, {["invites"]: [Object.assign({}, {["__typename"]: "Invitation"}, {["inviteId"]: "INVITE"}, {["driverFirstName"]: "Ada"}, {["driverLastName"]: "Lovelace"}, {["driverEmail"]: "ada@example.invalid"}, {["driverPhoneNumber"]: "+15550000000"}, {["inviteDateTime"]: "2026-07-31T12:00:00Z"}, {["inviteExpiryDateTime"]: "2026-08-07T12:00:00+00:00"}, {["inviteType"]: "FUTURE_CHANNEL"}, {["notificationsToPrimary"]: true}, {["usageHistory"]: false}, {["status"]: "FUTURE_STATUS"}, {["cdiid"]: null})]})})], null);
$.assert(($.eq(result, $.call(DriverInvitesResult, ["DriverInvitesSuccessResponse", [$.call(DriverInvite, ["Invitation", "INVITE", "Ada", "Lovelace", "ada@example.invalid", "+15550000000", $.call(datetime, [2026, 7, 31, 12], Object.assign({}, {"tzinfo": UTC})), $.call(datetime, [2026, 8, 7, 12], Object.assign({}, {"tzinfo": UTC})), $.attr(InviteNotificationType, "UNKNOWN_VALUE"), true, false, $.attr(InviteStatus, "UNKNOWN_VALUE"), null], null)], null], null))), "test_drivers_part_02.py:82: result == DriverInvitesResult('DriverInvitesSuccessResponse', (DriverInvite('Invitation', 'INVITE', 'Ada', 'Lovelace', 'ada@example.invalid', '+15550000000', datetime(2026, 7, 31, 12, tzinfo=UTC), datetime(2026, 8, 7, 12, tzinfo=UTC), InviteNotificationType.UNKNOWN_VALUE, True, False, InviteStatus.UNKNOWN_VALUE, None),), None)");
$.assert(($.eq($.call(parse_driver_invites, [Object.assign({}, {["driverInvites"]: Object.assign({}, {["__typename"]: "FutureDriverInvitesResult"})})], null), $.call(DriverInvitesResult, ["FutureDriverInvitesResult", null, null], null))), "test_drivers_part_02.py:103: parse_driver_invites({'driverInvites': {'__typename': 'FutureDriverInvitesResult'}}) == DriverInvitesResult('FutureDriverInvitesResult', None, None)");
}

/** Translated upstream test_parse_driver_invites_preserves_every_known_error. */
export function test_parse_driver_invites_preserves_every_known_error(...__args: any[]): any {
let {"typename": typename} = $.bind(__args, ["typename"], {}, [], null, null);
$.assert(($.eq($.call(parse_driver_invites, [Object.assign({}, {["driverInvites"]: Object.assign({}, {["__typename"]: typename}, {["errorMessage"]: "denied"})})], null), $.call(DriverInvitesResult, [typename, null, $.call(DriverOperationError, [typename, "denied"], null)], null))), "test_drivers_part_02.py:113: parse_driver_invites({'driverInvites': {'__typename': typename, 'errorMessage': 'denied'}}) == DriverInvitesResult(typename, None, DriverOperationError(typename, 'denied'))");
}

/** Translated upstream test_parse_invite_driver_success_is_exact. */
export function test_parse_invite_driver_success_is_exact(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_invite_driver, [Object.assign({}, {["inviteDriver"]: Object.assign({}, {["__typename"]: "InviteDriverSuccessResponse"}, {["vin"]: "VIN"}, {["inviteId"]: "INVITE"}, {["driverFirstName"]: "Ada"}, {["driverLastName"]: "Lovelace"}, {["driverEmail"]: "ada@example.invalid"}, {["driverPhoneNumber"]: "+15550000000"}, {["entitlements"]: ["CLIMATE", "LOCK"]}, {["inviteType"]: "EMAIL"}, {["usageHistory"]: true}, {["notificationsToPrimary"]: false}, {["inviteDateTime"]: "2026-07-31T12:00:00-07:00"}, {["status"]: "PENDING"})})], null);
$.assert(($.eq(result, $.call(InviteDriverResult, ["InviteDriverSuccessResponse", $.call(InviteDriverSuccess, ["VIN", "INVITE", "Ada", "Lovelace", "ada@example.invalid", "+15550000000", ["CLIMATE", "LOCK"], $.attr(InviteNotificationType, "EMAIL"), true, false, $.call($.attr(datetime, "fromisoformat"), ["2026-07-31T12:00:00-07:00"], null), $.attr(InviteStatus, "PENDING")], null), null], null))), "test_drivers_part_02.py:143: result == InviteDriverResult('InviteDriverSuccessResponse', InviteDriverSuccess('VIN', 'INVITE', 'Ada', 'Lovelace', 'ada@example.invalid', '+15550000000', ('CLIMATE', 'LOCK'), InviteNotificationType.EMAIL, True, False, datetime.fromisoformat('2026-07-31T12:00:00-07:00'), InviteStatus.PENDING), None)");
}

/** Translated upstream test_parse_invite_driver_preserves_every_known_error. */
export function test_parse_invite_driver_preserves_every_known_error(...__args: any[]): any {
let {"typename": typename} = $.bind(__args, ["typename"], {}, [], null, null);
$.assert(($.eq($.call(parse_invite_driver, [Object.assign({}, {["inviteDriver"]: Object.assign({}, {["__typename"]: typename}, {["errorMessage"]: "invalid"})})], null), $.call(InviteDriverResult, [typename, null, $.call(DriverOperationError, [typename, "invalid"], null)], null))), "test_drivers_part_02.py:175: parse_invite_driver({'inviteDriver': {'__typename': typename, 'errorMessage': 'invalid'}}) == InviteDriverResult(typename, None, DriverOperationError(typename, 'invalid'))");
}

/** Translated upstream test_parse_driver_invite_action_preserves_every_known_error. */
export function test_parse_driver_invite_action_preserves_every_known_error(...__args: any[]): any {
let {"typename": typename} = $.bind(__args, ["typename"], {}, [], null, null);
$.assert(($.eq($.call(parse_driver_invite_action, [Object.assign({}, {["driverInviteAction"]: Object.assign({}, {["__typename"]: typename}, {["errorMessage"]: "invalid"})})], null), $.call(DriverInviteActionResult, [typename, null, $.call(DriverOperationError, [typename, "invalid"], null)], null))), "test_drivers_part_02.py:197: parse_driver_invite_action({'driverInviteAction': {'__typename': typename, 'errorMessage': 'invalid'}}) == DriverInviteActionResult(typename, None, DriverOperationError(typename, 'invalid'))");
}

/** Translated upstream test_parse_remaining_driver_results_preserves_success_and_future_branches. */
export function test_parse_remaining_driver_results_preserves_success_and_future_branches(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_driver_invite_action, [Object.assign({}, {["driverInviteAction"]: Object.assign({}, {["__typename"]: "DriverInviteActionSuccessResponse"}, {["success"]: true})})], null), $.call(DriverInviteActionResult, ["DriverInviteActionSuccessResponse", true, null], null))), "test_drivers_part_02.py:207: parse_driver_invite_action({'driverInviteAction': {'__typename': 'DriverInviteActionSuccessResponse', 'success': True}}) == DriverInviteActionResult('DriverInviteActionSuccessResponse', True, None)");
$.assert(($.eq($.call(parse_delete_driver, [Object.assign({}, {["deleteDriver"]: Object.assign({}, {["__typename"]: "DeleteDriverSuccessResponse"}, {["success"]: false})})], null), $.call(DeleteDriverResult, ["DeleteDriverSuccessResponse", false], null))), "test_drivers_part_02.py:215: parse_delete_driver({'deleteDriver': {'__typename': 'DeleteDriverSuccessResponse', 'success': False}}) == DeleteDriverResult('DeleteDriverSuccessResponse', False)");
$.assert(($.eq($.call(parse_update_driver, [Object.assign({}, {["updateDriver"]: Object.assign({}, {["__typename"]: "UpdateDriverSuccessResponse"}, {["entitlements"]: ["CLIMATE"]}, {["usageHistory"]: false}, {["notificationsToPrimary"]: true}, {["success"]: true})})], null), $.call(UpdateDriverResult, ["UpdateDriverSuccessResponse", $.call(UpdateDriverSuccess, [["CLIMATE"], false, true, true], null)], null))), "test_drivers_part_02.py:218: parse_update_driver({'updateDriver': {'__typename': 'UpdateDriverSuccessResponse', 'entitlements': ['CLIMATE'], 'usageHistory': False, 'notificationsToPrimary': True, 'success': True}}) == UpdateDriverResult('UpdateDriverSuccessResponse', UpdateDriverSuccess(('CLIMATE',), False, True, True))");
$.assert(($.eq($.call(parse_owner_invite_action, [Object.assign({}, {["ownerInviteAction"]: Object.assign({}, {["__typename"]: "OwnerInviteActionSuccessResponse"}, {["success"]: true})})], null), $.call(OwnerInviteActionResult, ["OwnerInviteActionSuccessResponse", true], null))), "test_drivers_part_02.py:232: parse_owner_invite_action({'ownerInviteAction': {'__typename': 'OwnerInviteActionSuccessResponse', 'success': True}}) == OwnerInviteActionResult('OwnerInviteActionSuccessResponse', True)");
$.assert(($.eq($.call(parse_delete_driver, [Object.assign({}, {["deleteDriver"]: Object.assign({}, {["__typename"]: "FutureDeleteDriverResponse"})})], null), $.call(DeleteDriverResult, ["FutureDeleteDriverResponse", null], null))), "test_drivers_part_02.py:240: parse_delete_driver({'deleteDriver': {'__typename': 'FutureDeleteDriverResponse'}}) == DeleteDriverResult('FutureDeleteDriverResponse', None)");
$.assert(($.eq($.call(parse_update_driver, [Object.assign({}, {["updateDriver"]: Object.assign({}, {["__typename"]: "FutureUpdateDriverResponse"})})], null), $.call(UpdateDriverResult, ["FutureUpdateDriverResponse", null], null))), "test_drivers_part_02.py:243: parse_update_driver({'updateDriver': {'__typename': 'FutureUpdateDriverResponse'}}) == UpdateDriverResult('FutureUpdateDriverResponse', None)");
$.assert(($.eq($.call(parse_owner_invite_action, [Object.assign({}, {["ownerInviteAction"]: Object.assign({}, {["__typename"]: "FutureOwnerActionResponse"})})], null), $.call(OwnerInviteActionResult, ["FutureOwnerActionResponse", null], null))), "test_drivers_part_02.py:246: parse_owner_invite_action({'ownerInviteAction': {'__typename': 'FutureOwnerActionResponse'}}) == OwnerInviteActionResult('FutureOwnerActionResponse', None)");
}

/** Translated upstream test_parse_create_rsa_link_preserves_nullable_link. */
export function test_parse_create_rsa_link_preserves_nullable_link(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_create_rsa_link, [Object.assign({}, {["createRSALink"]: Object.assign({}, {["__typename"]: "RSALink"}, {["link"]: null})})], null), $.call(CreateRSALinkResult, ["RSALink", null], null))), "test_drivers_part_02.py:252: parse_create_rsa_link({'createRSALink': {'__typename': 'RSALink', 'link': None}}) == CreateRSALinkResult('RSALink', None)");
$.assert(($.eq($.call(parse_create_rsa_link, [Object.assign({}, {["createRSALink"]: Object.assign({}, {["__typename"]: "RSALink"}, {["link"]: "https://example.invalid/rsa"})})], null), $.call(CreateRSALinkResult, ["RSALink", "https://example.invalid/rsa"], null))), "test_drivers_part_02.py:255: parse_create_rsa_link({'createRSALink': {'__typename': 'RSALink', 'link': 'https://example.invalid/rsa'}}) == CreateRSALinkResult('RSALink', 'https://example.invalid/rsa')");
}

/** Translated upstream test_driver_parsers_accept_nullable_roots. */
export function test_driver_parsers_accept_nullable_roots(...__args: any[]): any {
let {"parser": parser, "root_field": root_field} = $.bind(__args, ["parser", "root_field"], {}, [], null, null);
$.assert((($.call(parser, [Object.assign({}, {[root_field]: null})], null) === null)), "test_drivers_part_02.py:280: parser({root_field: None}) is None");
}

$.register("test_drivers_part_02.py::test_parse_emergency_contact_mutation_results_preserves_nullable_success", test_parse_emergency_contact_mutation_results_preserves_nullable_success, []);

$.register("test_drivers_part_02.py::test_parse_driver_invites_success_is_exact_and_future_safe", test_parse_driver_invites_success_is_exact_and_future_safe, []);

$.register("test_drivers_part_02.py::test_parse_driver_invites_preserves_every_known_error", test_parse_driver_invites_preserves_every_known_error, [["typename", ["GeneralErrors", "DatabaseError", "BrandError", "TokenError", "VinValidationError"]]]);

$.register("test_drivers_part_02.py::test_parse_invite_driver_success_is_exact", test_parse_invite_driver_success_is_exact, []);

$.register("test_drivers_part_02.py::test_parse_invite_driver_preserves_every_known_error", test_parse_invite_driver_preserves_every_known_error, [["typename", ["FirstNameValidationError", "LastNameValidationError", "EmailValidationError", "PhoneValidationError", "ExistingInviteError", "MaxInvitesReachedError"]]]);

$.register("test_drivers_part_02.py::test_parse_driver_invite_action_preserves_every_known_error", test_parse_driver_invite_action_preserves_every_known_error, [["typename", ["GeneralErrors", "DatabaseError", "InvalidInviteIdError", "TokenError", "BrandError", "TermsAndConditionsError", "CountryError"]]]);

$.register("test_drivers_part_02.py::test_parse_remaining_driver_results_preserves_success_and_future_branches", test_parse_remaining_driver_results_preserves_success_and_future_branches, []);

$.register("test_drivers_part_02.py::test_parse_create_rsa_link_preserves_nullable_link", test_parse_create_rsa_link_preserves_nullable_link, []);

$.register("test_drivers_part_02.py::test_driver_parsers_accept_nullable_roots", test_driver_parsers_accept_nullable_roots, [[["parser", "root_field"], [[parse_emergency_contacts, "vehicle"], [parse_create_emergency_contact, "createEmergencyContact"], [parse_update_emergency_contact, "updateEmergencyContact"], [parse_delete_emergency_contact, "deleteEmergencyContact"], [parse_driver_invites, "driverInvites"], [parse_invite_driver, "inviteDriver"], [parse_driver_invite_action, "driverInviteAction"], [parse_delete_driver, "deleteDriver"], [parse_update_driver, "updateDriver"], [parse_owner_invite_action, "ownerInviteAction"], [parse_create_rsa_link, "createRSALink"]]]]);
