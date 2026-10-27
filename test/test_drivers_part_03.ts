// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const pytest = $.pytest;

import { DriverParser } from "./test_drivers";

import { parse_create_rsa_link, parse_driver_invite_action, parse_driver_invites, parse_emergency_contacts, parse_invite_driver, parse_update_driver, parse_update_emergency_contact } from "../src/driver_parsing";

import { ResponseError } from "../src/exceptions";

/** Translated upstream test_driver_parsers_reject_malformed_or_missing_fields. */
export function test_driver_parsers_reject_malformed_or_missing_fields(...__args: any[]): any {
let {"parser": parser, "payload": payload, "message": message} = $.bind(__args, ["parser", "payload", "message"], {}, [], null, null);
$.raises(ResponseError, message, () => {
$.call(parser, [payload], null);
});
}

$.register("test_drivers_part_03.py::test_driver_parsers_reject_malformed_or_missing_fields", test_driver_parsers_reject_malformed_or_missing_fields, [[["parser", "payload", "message"], [[parse_driver_invites, {}, "driverInvites is missing"], [parse_driver_invites, Object.assign({}, {["driverInvites"]: []}), "driverInvites is not an object"], [parse_driver_invites, Object.assign({}, {["driverInvites"]: Object.assign({}, {["invites"]: []})}), "driverInvites.__typename is missing"], [parse_emergency_contacts, Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ConnectedVehicle"})}), "vehicle.emergencyContacts is missing"], [parse_emergency_contacts, Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ConnectedVehicle"}, {["emergencyContacts"]: {}})}), "vehicle.emergencyContacts is not a list"], [parse_driver_invites, Object.assign({}, {["driverInvites"]: Object.assign({}, {["__typename"]: "DriverInvitesSuccessResponse"}, {["invites"]: [null]})}), "driverInvites.invites\\[0\\] is not an object"], [parse_driver_invites, Object.assign({}, {["driverInvites"]: Object.assign({}, {["__typename"]: "GeneralErrors"})}), "driverInvites.errorMessage is missing"], [parse_invite_driver, Object.assign({}, {["inviteDriver"]: Object.assign({}, {["__typename"]: "InviteDriverSuccessResponse"}, {["vin"]: "VIN"}, {["inviteId"]: "INVITE"}, {["driverFirstName"]: "Ada"}, {["driverLastName"]: "Lovelace"}, {["driverEmail"]: "ada@example.invalid"}, {["driverPhoneNumber"]: "+15550000000"}, {["entitlements"]: []}, {["inviteType"]: "EMAIL"}, {["usageHistory"]: true}, {["notificationsToPrimary"]: false}, {["inviteDateTime"]: "2026-07-31T12:00:00"}, {["status"]: "PENDING"})}), "inviteDriver.inviteDateTime is not an ISO-8601 date-time with an offset"], [parse_driver_invite_action, Object.assign({}, {["driverInviteAction"]: Object.assign({}, {["__typename"]: "DriverInviteActionSuccessResponse"}, {["success"]: null})}), "driverInviteAction.success is not a boolean"], [parse_update_driver, Object.assign({}, {["updateDriver"]: Object.assign({}, {["__typename"]: "UpdateDriverSuccessResponse"}, {["entitlements"]: [null]}, {["usageHistory"]: false}, {["notificationsToPrimary"]: true}, {["success"]: true})}), "updateDriver.entitlements\\[0\\] is not a string"], [parse_update_emergency_contact, Object.assign({}, {["updateEmergencyContact"]: Object.assign({}, {["__typename"]: "ResponseStatus"})}), "updateEmergencyContact.success is missing"], [parse_create_rsa_link, Object.assign({}, {["createRSALink"]: Object.assign({}, {["__typename"]: "RSALink"})}), "createRSALink.link is missing"]]]]);
