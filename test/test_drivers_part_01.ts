// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const hashlib = $.hashlib;

const re = $.re;

const Callable = $.Callable;

const pytest = $.pytest;

import { OPERATION_CONTRACTS } from "./test_drivers";

import { CreateEmergencyContactInput, DriverInviteActionInput, DriverInviteInput, OwnerInviteActionInput, UpdateDriverInput, UpdateEmergencyContactInput, create_emergency_contact_variables, create_rsa_link_variables, delete_driver_variables, delete_emergency_contact_variables, driver_invite_action_variables, driver_invites_variables, emergency_contacts_variables, invite_driver_variables, owner_invite_action_variables, update_driver_variables, update_emergency_contact_variables } from "../src/driver_inputs";

import { DriverInviteAction, EmergencyContact, EmergencyContactRelationship, EmergencyContactsResult, InviteNotificationType, InviteStatus, OwnerInviteAction } from "../src/driver_models";

import { parse_emergency_contacts } from "../src/driver_parsing";

import { UNSET } from "../src/graphql_input";

/** Translated upstream test_driver_operations_match_exact_persisted_contracts. */
export function test_driver_operations_match_exact_persisted_contracts(...__args: any[]): any {
let tokens;
let {"document": document, "operation_id": operation_id, "token_hash": token_hash} = $.bind(__args, ["document", "operation_id", "token_hash"], {}, [], null, null);
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), operation_id, "test_drivers_part_01.py:54: hashlib.sha256(document.encode()).hexdigest() == operation_id");
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), token_hash, "test_drivers_part_01.py:55: hashlib.sha256(tokens.encode()).hexdigest() == token_hash");
}

/** Translated upstream test_driver_enums_match_all_service_values. */
export function test_driver_enums_match_all_service_values(...__args: any[]): any {
let value;
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call($.tuple, [(() => { const __out: any = []; for (const value of $.iterable(EmergencyContactRelationship)) { __out.push($.attr(value, "value")); } return __out; })()], null), ["ASSISTANT", "BROTHER", "BUSINESS_CONTACT", "CHAUFFEUR", "CO_WORKER", "DAUGHTER", "DOCTOR", "EMPLOYEE", "FATHER", "FIANCE", "FIANCEE", "FRIEND", "GRANDFATHER", "GRANDMOTHER", "MOTHER", "OTHER", "PARENTS", "PARTNER", "RELATIVE", "SIGNIFICANT_OTHER", "SISTER", "SON", "SPOUSE", "UNKNOWN__"], "test_drivers_part_01.py:59: tuple((value.value for value in EmergencyContactRelationship)) == ('ASSISTANT', 'BROTHER', 'BUSINESS_CONTACT', 'CHAUFFEUR', 'CO_WORKER', 'DAUGHTER', 'DOCTOR', 'EMPLOYEE', 'FATHER', 'FIANCE', 'FIANCEE', 'FRIEND', 'GRANDFATHER', 'GRANDMOTHER', 'MOTHER', 'OTHER', 'PARENTS', 'PARTNER', 'RELATIVE', 'SIGNIFICANT_OTHER', 'SISTER', 'SON', 'SPOUSE', 'UNKNOWN__')");
$.assertEqual($.call($.tuple, [(() => { const __out: any = []; for (const value of $.iterable(InviteNotificationType)) { __out.push($.attr(value, "value")); } return __out; })()], null), ["SMS", "EMAIL", "UNKNOWN__"], "test_drivers_part_01.py:85: tuple((value.value for value in InviteNotificationType)) == ('SMS', 'EMAIL', 'UNKNOWN__')");
$.assertEqual($.call($.tuple, [(() => { const __out: any = []; for (const value of $.iterable(InviteStatus)) { __out.push($.attr(value, "value")); } return __out; })()], null), ["ACCEPTED", "PENDING", "DECLINE", "REMOVED", "CANCEL", "EXPIRED", "INVALIDATE", "NONE", "UNKNOWN__"], "test_drivers_part_01.py:90: tuple((value.value for value in InviteStatus)) == ('ACCEPTED', 'PENDING', 'DECLINE', 'REMOVED', 'CANCEL', 'EXPIRED', 'INVALIDATE', 'NONE', 'UNKNOWN__')");
$.assertEqual($.call($.tuple, [(() => { const __out: any = []; for (const value of $.iterable(DriverInviteAction)) { __out.push($.attr(value, "value")); } return __out; })()], null), ["DECLINE", "ACCEPT", "INVALIDATE", "UNKNOWN__"], "test_drivers_part_01.py:101: tuple((value.value for value in DriverInviteAction)) == ('DECLINE', 'ACCEPT', 'INVALIDATE', 'UNKNOWN__')");
$.assertEqual($.call($.tuple, [(() => { const __out: any = []; for (const value of $.iterable(OwnerInviteAction)) { __out.push($.attr(value, "value")); } return __out; })()], null), ["RESEND", "CANCEL", "UNKNOWN__"], "test_drivers_part_01.py:107: tuple((value.value for value in OwnerInviteAction)) == ('RESEND', 'CANCEL', 'UNKNOWN__')");
}

/** Translated upstream test_required_driver_variables_use_exact_shapes. */
export function test_required_driver_variables_use_exact_shapes(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(emergency_contacts_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}), "test_drivers_part_01.py:115: emergency_contacts_variables('VIN') == {'vin': 'VIN'}");
$.assertEqual($.call(driver_invites_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}), "test_drivers_part_01.py:116: driver_invites_variables('VIN') == {'vin': 'VIN'}");
$.assertEqual($.call(delete_emergency_contact_variables, ["VIN", "CONTACT"], null), Object.assign({}, {["vin"]: "VIN"}, {["emergencyContactId"]: "CONTACT"}), "test_drivers_part_01.py:117: delete_emergency_contact_variables('VIN', 'CONTACT') == {'vin': 'VIN', 'emergencyContactId': 'CONTACT'}");
$.assertEqual($.call(delete_driver_variables, ["INVITE"], null), Object.assign({}, {["inviteId"]: "INVITE"}), "test_drivers_part_01.py:121: delete_driver_variables('INVITE') == {'inviteId': 'INVITE'}");
$.assertEqual($.call(create_rsa_link_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}), "test_drivers_part_01.py:122: create_rsa_link_variables('VIN') == {'vin': 'VIN'}");
}

/** Translated upstream test_emergency_contact_inputs_preserve_apollo_optional_states. */
export function test_emergency_contact_inputs_preserve_apollo_optional_states(...__args: any[]): any {
let created;
let {} = $.bind(__args, [], {}, [], null, null);
created = $.call(CreateEmergencyContactInput, ["Ada", "Lovelace", "+15550000000", $.attr(EmergencyContactRelationship, "FRIEND")], null);
$.assertEqual($.call(create_emergency_contact_variables, ["VIN", created], null), Object.assign({}, {["vin"]: "VIN"}, {["contact"]: Object.assign({}, {["firstName"]: "Ada"}, {["lastName"]: "Lovelace"}, {["primaryPhone"]: "+15550000000"}, {["relationship"]: "FRIEND"})}), "test_drivers_part_01.py:132: create_emergency_contact_variables('VIN', created) == {'vin': 'VIN', 'contact': {'firstName': 'Ada', 'lastName': 'Lovelace', 'primaryPhone': '+15550000000', 'relationship': 'FRIEND'}}");
$.assertEqual($.get($.call(create_emergency_contact_variables, ["VIN", $.call(CreateEmergencyContactInput, ["Ada", "Lovelace", "+15550000000", $.attr(EmergencyContactRelationship, "FRIEND")], Object.assign({}, {"secondary_phone": null}))], null), "contact"), Object.assign({}, {["firstName"]: "Ada"}, {["lastName"]: "Lovelace"}, {["primaryPhone"]: "+15550000000"}, {["secondaryPhone"]: null}, {["relationship"]: "FRIEND"}), "test_drivers_part_01.py:141: create_emergency_contact_variables('VIN', CreateEmergencyContactInput('Ada', 'Lovelace', '+15550000000', EmergencyContactRelationship.FRIEND, secondary_phone=None))['contact'] == {'firstName': 'Ada', 'lastName': 'Lovelace', 'primaryPhone': '+15550000000', 'secondaryPhone': None, 'relationship': 'FRIEND'}");
$.assertEqual($.call(update_emergency_contact_variables, ["VIN", $.call(UpdateEmergencyContactInput, ["CONTACT"], Object.assign({}, {"first_name": UNSET}, {"last_name": null}, {"primary_phone": "+15551111111"}, {"secondary_phone": null}, {"relationship": $.attr(EmergencyContactRelationship, "SPOUSE")}))], null), Object.assign({}, {["vin"]: "VIN"}, {["contact"]: Object.assign({}, {["emergencyContactId"]: "CONTACT"}, {["lastName"]: null}, {["primaryPhone"]: "+15551111111"}, {["secondaryPhone"]: null}, {["relationship"]: "SPOUSE"})}), "test_drivers_part_01.py:158: update_emergency_contact_variables('VIN', UpdateEmergencyContactInput('CONTACT', first_name=UNSET, last_name=None, primary_phone='+15551111111', secondary_phone=None, relationship=EmergencyContactRelationship.SPOUSE)) == {'vin': 'VIN', 'contact': {'emergencyContactId': 'CONTACT', 'lastName': None, 'primaryPhone': '+15551111111', 'secondaryPhone': None, 'relationship': 'SPOUSE'}}");
}

/** Translated upstream test_nullable_driver_configs_preserve_omitted_null_and_value. */
export function test_nullable_driver_configs_preserve_omitted_null_and_value(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(invite_driver_variables, [], null), {}, "test_drivers_part_01.py:181: invite_driver_variables() == {}");
$.assertEqual($.call(invite_driver_variables, [null], null), Object.assign({}, {["config"]: null}), "test_drivers_part_01.py:182: invite_driver_variables(None) == {'config': None}");
$.assertEqual($.call(driver_invite_action_variables, [], null), {}, "test_drivers_part_01.py:183: driver_invite_action_variables() == {}");
$.assertEqual($.call(driver_invite_action_variables, [null], null), Object.assign({}, {["config"]: null}), "test_drivers_part_01.py:184: driver_invite_action_variables(None) == {'config': None}");
$.assertEqual($.call(owner_invite_action_variables, [], null), {}, "test_drivers_part_01.py:185: owner_invite_action_variables() == {}");
$.assertEqual($.call(owner_invite_action_variables, [null], null), Object.assign({}, {["config"]: null}), "test_drivers_part_01.py:186: owner_invite_action_variables(None) == {'config': None}");
$.assertEqual($.call(invite_driver_variables, [$.call(DriverInviteInput, ["Ada", "Lovelace", "ada@example.invalid", "+15550000000", "VIN", [], $.attr(InviteNotificationType, "EMAIL"), false, true], null)], null), Object.assign({}, {["config"]: Object.assign({}, {["driverFirstName"]: "Ada"}, {["driverLastName"]: "Lovelace"}, {["driverEmail"]: "ada@example.invalid"}, {["driverPhoneNumber"]: "+15550000000"}, {["vin"]: "VIN"}, {["entitlements"]: []}, {["inviteType"]: "EMAIL"}, {["usageHistory"]: false}, {["notificationsToPrimary"]: true})}), "test_drivers_part_01.py:188: invite_driver_variables(DriverInviteInput('Ada', 'Lovelace', 'ada@example.invalid', '+15550000000', 'VIN', (), InviteNotificationType.EMAIL, False, True)) == {'config': {'driverFirstName': 'Ada', 'driverLastName': 'Lovelace', 'driverEmail': 'ada@example.invalid', 'driverPhoneNumber': '+15550000000', 'vin': 'VIN', 'entitlements': [], 'inviteType': 'EMAIL', 'usageHistory': False, 'notificationsToPrimary': True}}");
$.assertEqual($.call(driver_invite_action_variables, [$.call(DriverInviteActionInput, ["INVITE", $.attr(DriverInviteAction, "ACCEPT")], null)], null), Object.assign({}, {["config"]: Object.assign({}, {["inviteId"]: "INVITE"}, {["action"]: "ACCEPT"})}), "test_drivers_part_01.py:213: driver_invite_action_variables(DriverInviteActionInput('INVITE', DriverInviteAction.ACCEPT)) == {'config': {'inviteId': 'INVITE', 'action': 'ACCEPT'}}");
$.assertEqual($.call(driver_invite_action_variables, [$.call(DriverInviteActionInput, ["INVITE", $.attr(DriverInviteAction, "ACCEPT")], Object.assign({}, {"terms_and_conditions": null}))], null), Object.assign({}, {["config"]: Object.assign({}, {["inviteId"]: "INVITE"}, {["action"]: "ACCEPT"}, {["termsAndConditions"]: null})}), "test_drivers_part_01.py:216: driver_invite_action_variables(DriverInviteActionInput('INVITE', DriverInviteAction.ACCEPT, terms_and_conditions=None)) == {'config': {'inviteId': 'INVITE', 'action': 'ACCEPT', 'termsAndConditions': None}}");
$.assertEqual($.call(owner_invite_action_variables, [$.call(OwnerInviteActionInput, ["INVITE", $.attr(OwnerInviteAction, "RESEND"), $.attr(InviteNotificationType, "SMS")], null)], null), Object.assign({}, {["config"]: Object.assign({}, {["inviteId"]: "INVITE"}, {["action"]: "RESEND"}, {["notificationType"]: "SMS"})}), "test_drivers_part_01.py:229: owner_invite_action_variables(OwnerInviteActionInput('INVITE', OwnerInviteAction.RESEND, InviteNotificationType.SMS)) == {'config': {'inviteId': 'INVITE', 'action': 'RESEND', 'notificationType': 'SMS'}}");
}

/** Translated upstream test_update_driver_input_has_no_hidden_permission_defaults. */
export function test_update_driver_input_has_no_hidden_permission_defaults(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(update_driver_variables, [$.call(UpdateDriverInput, ["INVITE", ["CLIMATE", "LOCK"], false, true], null)], null), Object.assign({}, {["config"]: Object.assign({}, {["inviteId"]: "INVITE"}, {["entitlements"]: ["CLIMATE", "LOCK"]}, {["usageHistory"]: false}, {["notificationsToPrimary"]: true})}), "test_drivers_part_01.py:245: update_driver_variables(UpdateDriverInput('INVITE', ('CLIMATE', 'LOCK'), False, True)) == {'config': {'inviteId': 'INVITE', 'entitlements': ['CLIMATE', 'LOCK'], 'usageHistory': False, 'notificationsToPrimary': True}}");
}

/** Translated upstream test_unknown_input_enums_are_never_serialized. */
export function test_unknown_input_enums_are_never_serialized(...__args: any[]): any {
let {"serialize": serialize} = $.bind(__args, ["serialize"], {}, [], null, null);
$.raises($.ValueError, "UNKNOWN_VALUE", () => {
$.call(serialize, [], null);
});
}

/** Translated upstream test_parse_emergency_contacts_preserves_nullable_fields_items_and_future_enum. */
export function test_parse_emergency_contacts_preserves_nullable_fields_items_and_future_enum(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_emergency_contacts, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["emergencyContacts"]: [null, Object.assign({}, {["__typename"]: "EmergencyContact"}, {["id"]: null}, {["firstName"]: "Ada"}, {["lastName"]: null}, {["primaryPhone"]: "+15550000000"}, {["secondaryPhone"]: null}, {["relationship"]: "FUTURE_RELATIONSHIP"})]})})], null);
$.assertEqual(result, $.call(EmergencyContactsResult, ["ElectricAVK2Vehicle", [null, $.call(EmergencyContact, ["EmergencyContact", null, "Ada", null, "+15550000000", null, $.attr(EmergencyContactRelationship, "UNKNOWN_VALUE")], null)]], null), "test_drivers_part_01.py:327: result == EmergencyContactsResult('ElectricAVK2Vehicle', (None, EmergencyContact('EmergencyContact', None, 'Ada', None, '+15550000000', None, EmergencyContactRelationship.UNKNOWN_VALUE)))");
$.assertEqual($.call(parse_emergency_contacts, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "NonConnectedVehicleResponse"})})], null), $.call(EmergencyContactsResult, ["NonConnectedVehicleResponse", null], null), "test_drivers_part_01.py:342: parse_emergency_contacts({'vehicle': {'__typename': 'NonConnectedVehicleResponse'}}) == EmergencyContactsResult('NonConnectedVehicleResponse', None)");
$.assertEqual($.call(parse_emergency_contacts, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ConnectedVehicle"}, {["emergencyContacts"]: null})})], null), $.call(EmergencyContactsResult, ["ConnectedVehicle", null], null), "test_drivers_part_01.py:345: parse_emergency_contacts({'vehicle': {'__typename': 'ConnectedVehicle', 'emergencyContacts': None}}) == EmergencyContactsResult('ConnectedVehicle', None)");
}

$.register("test_drivers_part_01.py::test_driver_operations_match_exact_persisted_contracts", test_driver_operations_match_exact_persisted_contracts, [[["document", "operation_id", "token_hash"], OPERATION_CONTRACTS]]);

$.register("test_drivers_part_01.py::test_driver_enums_match_all_service_values", test_driver_enums_match_all_service_values, []);

$.register("test_drivers_part_01.py::test_required_driver_variables_use_exact_shapes", test_required_driver_variables_use_exact_shapes, []);

$.register("test_drivers_part_01.py::test_emergency_contact_inputs_preserve_apollo_optional_states", test_emergency_contact_inputs_preserve_apollo_optional_states, []);

$.register("test_drivers_part_01.py::test_nullable_driver_configs_preserve_omitted_null_and_value", test_nullable_driver_configs_preserve_omitted_null_and_value, []);

$.register("test_drivers_part_01.py::test_update_driver_input_has_no_hidden_permission_defaults", test_update_driver_input_has_no_hidden_permission_defaults, []);

$.register("test_drivers_part_01.py::test_unknown_input_enums_are_never_serialized", test_unknown_input_enums_are_never_serialized, [["serialize", [() => $.call(create_emergency_contact_variables, ["VIN", $.call(CreateEmergencyContactInput, ["Ada", "Lovelace", "+15550000000", $.attr(EmergencyContactRelationship, "UNKNOWN_VALUE")], null)], null), () => $.call(update_emergency_contact_variables, ["VIN", $.call(UpdateEmergencyContactInput, ["CONTACT"], Object.assign({}, {"relationship": $.attr(EmergencyContactRelationship, "UNKNOWN_VALUE")}))], null), () => $.call(invite_driver_variables, [$.call(DriverInviteInput, ["Ada", "Lovelace", "ada@example.invalid", "+15550000000", "VIN", [], $.attr(InviteNotificationType, "UNKNOWN_VALUE"), false, false], null)], null), () => $.call(driver_invite_action_variables, [$.call(DriverInviteActionInput, ["INVITE", $.attr(DriverInviteAction, "UNKNOWN_VALUE")], null)], null), () => $.call(owner_invite_action_variables, [$.call(OwnerInviteActionInput, ["INVITE", $.attr(OwnerInviteAction, "UNKNOWN_VALUE"), $.attr(InviteNotificationType, "EMAIL")], null)], null)]]]);

$.register("test_drivers_part_01.py::test_parse_emergency_contacts_preserves_nullable_fields_items_and_future_enum", test_parse_emergency_contacts_preserves_nullable_fields_items_and_future_enum, []);
