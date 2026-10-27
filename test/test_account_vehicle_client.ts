// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const Awaitable = $.Awaitable;
const Mapping = $.Mapping;

const date = $.date;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { CreateEmergencyContactInput, CreatePartsReminderInput, DistanceUnit, DriverInviteAction, DriverInviteActionInput, DriverInviteInput, EmergencyContactRelationship, InviteNotificationType, NcarIcarRegisterAccountAddressInput, NcarIcarRegisterAccountInput, NissanClient, OwnerInviteAction, OwnerInviteActionInput, PastServiceInput, ReadOnlyError, ResetPartsReminderInput, Tokens, UpdateDriverInput, UpdateEmergencyContactInput, UpdatePartsReminderInput, UpdatePastServiceInput, VehicleHologram } from "../src/index";

import { create_emergency_contact_variables, create_rsa_link_variables, delete_driver_variables, delete_emergency_contact_variables, driver_invite_action_variables, driver_invites_variables, emergency_contacts_variables, invite_driver_variables, owner_invite_action_variables, update_driver_variables, update_emergency_contact_variables } from "../src/driver_inputs";

import { add_vehicle_variables, apc_agreement_variables, apc_document_url_variables, connected_terms_and_conditions_by_vin_variables, create_apc_agreement_variables, delete_vehicle_variables, ncar_icar_add_vehicle_variables, onboarding_features_variables, ownership_status_variables, pending_vehicles_variables, update_apc_agreement_variables, update_vehicle_manual_mileage_variables, update_vehicle_nickname_variables, update_vehicle_variables, upload_ownership_verification_variables } from "../src/garage_inputs";

import { add_past_service_variables, collision_history_variables, collision_probe_data_variables, create_parts_reminder_variables, delete_parts_reminder_variables, get_maintenance_timeline_variables, get_service_contracts_variables, parts_reminders_variables, reset_parts_reminder_variables, update_parts_reminder_variables, update_past_service_variables } from "../src/maintenance_inputs";

/** Translated upstream FakeResponse. */
export class FakeResponse {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
this["status"] = 200;
this["_payload"] = Object.assign({}, {["data"]: $.call($.dict, [data], null)});
}
/** Translated upstream __aenter__. */
async __aenter__(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return this;
}
/** Translated upstream __aexit__. */
async __aexit__(...__args: any[]): any {
let {"args": args} = $.bind(__args, [], {}, [], "args", null);
return null;
}
/** Translated upstream json. */
async json(...__args: any[]): any {
let {"content_type": content_type} = $.bind(__args, [], {"content_type": null}, ["content_type"], null, null);
return $.attr(this, "_payload");
}
}
$.classType(FakeResponse);

/** Translated upstream FakeSession. */
export class FakeSession {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
let {"responses": responses} = $.bind(__args, [], {}, [], "responses", null);
this["responses"] = $.call($.list, [responses], null);
this["calls"] = [];
}
/** Translated upstream post. */
post(...__args: any[]): any {
let {"url": url, "kwargs": kwargs} = $.bind(__args, ["url"], {}, [], null, "kwargs");
$.call($.attr($.attr(this, "calls"), "append"), [Object.assign({}, {["url"]: url}, kwargs)], null);
if ($.truth(!$.truth($.attr(this, "responses")))) {
throw $.call($.AssertionError, ["Unexpected HTTP request"], null);
}
return $.call($.attr($.attr(this, "responses"), "pop"), [0], null);
}
}
$.classType(FakeSession);

/** Translated upstream response. */
export function response(...__args: any[]): any {
let {"field": field, "value": value} = $.bind(__args, ["field", "value"], {"value": null}, [], null, null);
return $.call(FakeResponse, [Object.assign({}, {[field]: value})], null);
}

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token", "id-token"], null)}, {"read_only": read_only}));
}

/** Translated upstream payloads. */
export function payloads(...__args: any[]): any {
let call, value, values;
let {"session": session} = $.bind(__args, ["session"], {}, [], null, null);
values = [];
for (call of $.iterable($.attr(session, "calls"))) {
value = $.get(call, "json");
$.assert($.call($.isinstance, [value, Mapping], null), "test_account_vehicle_client.py:122: isinstance(value, Mapping)");
$.call($.attr(values, "append"), [value], null);
}
return values;
}

/** Translated upstream garage_account. */
export function garage_account(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(NcarIcarRegisterAccountInput, [], Object.assign({}, {"first_name": "Ada"}, {"last_name": "Lovelace"}, {"email": "ada@example.com"}, {"phone_number": "+15555550100"}, {"address": $.call(NcarIcarRegisterAccountAddressInput, [], Object.assign({}, {"address_1": "1 Main St"}, {"address_2": "Suite 2"}, {"city": "Franklin"}, {"state": "TN"}, {"postal_code": "37064"}, {"country": "US"}))}));
}

/** Translated upstream emergency_contact. */
export function emergency_contact(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(CreateEmergencyContactInput, [], Object.assign({}, {"first_name": "Grace"}, {"last_name": "Hopper"}, {"primary_phone": "+15555550101"}, {"relationship": $.attr(EmergencyContactRelationship, "FRIEND")}));
}

/** Translated upstream driver_invite. */
export function driver_invite(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(DriverInviteInput, [], Object.assign({}, {"driver_first_name": "Katherine"}, {"driver_last_name": "Johnson"}, {"driver_email": "katherine@example.com"}, {"driver_phone_number": "+15555550102"}, {"vin": "VIN"}, {"entitlements": ["REMOTE_DOOR"]}, {"invite_type": $.attr(InviteNotificationType, "EMAIL")}, {"usage_history": true}, {"notifications_to_primary": false}));
}

/** Translated upstream test_garage_client_wires_all_operations. */
export async function test_garage_client_wires_all_operations(...__args: any[]): any {
let account, client, requests, session, value;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(response, ["addVehicle"], null), $.call(response, ["deleteVehicle"], null), $.call(response, ["ncarIcarAddVehicle"], null), $.call(response, ["pendingVehicles"], null), $.call(response, ["vehicle"], null), $.call(response, ["vehicle"], null), $.call(response, ["vehicle"], null), $.call(response, ["createAPCAgreement"], null), $.call(response, ["updateAPCAgreement"], null), $.call(response, ["connectedTermsAndConditionsByVIN"], null), $.call(response, ["vehicle"], null), $.call(response, ["updateVehicle"], null), $.call(response, ["updateVehicle"], null), $.call(response, ["updateVehicle"], null), $.call(response, ["uploadOwnershipVerification"], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
account = $.call(garage_account, [], null);
$.assert((((await $.call($.attr(client, "async_add_vehicle"), ["VIN", true], null)) === null)), "test_account_vehicle_client.py:188: await client.async_add_vehicle('VIN', True) is None");
$.assert((((await $.call($.attr(client, "async_delete_vehicle"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:189: await client.async_delete_vehicle('VIN') is None");
$.assert((((await $.call($.attr(client, "async_add_ncar_icar_vehicle"), [true, "GUID"], Object.assign({}, {"account": account}))) === null)), "test_account_vehicle_client.py:190: await client.async_add_ncar_icar_vehicle(True, 'GUID', account=account) is None");
$.assert((((await $.call($.attr(client, "async_get_pending_vehicles"), [], null)) === null)), "test_account_vehicle_client.py:191: await client.async_get_pending_vehicles() is None");
$.assert((((await $.call($.attr(client, "async_get_ownership_status"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:192: await client.async_get_ownership_status('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_apc_agreement"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:193: await client.async_get_apc_agreement('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_apc_document_url"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:194: await client.async_get_apc_document_url('VIN') is None");
$.assert((((await $.call($.attr(client, "async_create_apc_agreement"), ["VIN", true], null)) === null)), "test_account_vehicle_client.py:195: await client.async_create_apc_agreement('VIN', True) is None");
$.assert((((await $.call($.attr(client, "async_update_apc_agreement"), ["VIN", false], null)) === null)), "test_account_vehicle_client.py:196: await client.async_update_apc_agreement('VIN', False) is None");
$.assert((((await $.call($.attr(client, "async_get_connected_terms_and_conditions_by_vin"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:197: await client.async_get_connected_terms_and_conditions_by_vin('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_onboarding_features"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:198: await client.async_get_onboarding_features('VIN') is None");
$.assert((((await $.call($.attr(client, "async_update_vehicle"), ["VIN"], Object.assign({}, {"license_plate": "ARIYA"}, {"hologram": $.attr(VehicleHologram, "E")}))) === null)), "test_account_vehicle_client.py:199: await client.async_update_vehicle('VIN', license_plate='ARIYA', hologram=VehicleHologram.E) is None");
$.assert((((await $.call($.attr(client, "async_update_vehicle_manual_mileage"), ["VIN"], Object.assign({}, {"manual_mileage": 1234}))) === null)), "test_account_vehicle_client.py:207: await client.async_update_vehicle_manual_mileage('VIN', manual_mileage=1234) is None");
$.assert((((await $.call($.attr(client, "async_update_vehicle_nickname"), ["VIN", "Blue"], null)) === null)), "test_account_vehicle_client.py:208: await client.async_update_vehicle_nickname('VIN', 'Blue') is None");
$.assert((((await $.call($.attr(client, "async_upload_ownership_verification"), ["VIN", "title.pdf", "BASE64", true], null)) === null)), "test_account_vehicle_client.py:209: await client.async_upload_ownership_verification('VIN', 'title.pdf', 'BASE64', True) is None");
requests = $.call(payloads, [session], null);
$.assert(($.eq((() => { const __out: any = []; for (const value of $.iterable(requests)) { __out.push($.get(value, "operationName")); } return __out; })(), ["AddVehicle", "DeleteVehicle", "NcarIcarAddVehicle", "PendingVehicles", "OwnershipStatus", "APCAgreement", "APCDocumentURL", "CreateAPCAgreement", "UpdateAPCAgreement", "ConnectedTermsAndConditionsByVIN", "OnboardingFeatures", "UpdateVehicle", "UpdateVehicleManualMileage", "UpdateVehicleNickname", "UploadOwnershipVerification"])), "test_account_vehicle_client.py:220: [value['operationName'] for value in requests] == ['AddVehicle', 'DeleteVehicle', 'NcarIcarAddVehicle', 'PendingVehicles', 'OwnershipStatus', 'APCAgreement', 'APCDocumentURL', 'CreateAPCAgreement', 'UpdateAPCAgreement', 'ConnectedTermsAndConditionsByVIN', 'OnboardingFeatures', 'UpdateVehicle', 'UpdateVehicleManualMileage', 'UpdateVehicleNickname', 'UploadOwnershipVerification']");
$.assert(($.eq((() => { const __out: any = []; for (const value of $.iterable(requests)) { __out.push($.get(value, "variables")); } return __out; })(), [$.call(add_vehicle_variables, ["VIN", true], null), $.call(delete_vehicle_variables, ["VIN"], null), $.call(ncar_icar_add_vehicle_variables, [true, "GUID"], Object.assign({}, {"account": account})), $.call(pending_vehicles_variables, [], null), $.call(ownership_status_variables, ["VIN"], null), $.call(apc_agreement_variables, ["VIN"], null), $.call(apc_document_url_variables, ["VIN"], null), $.call(create_apc_agreement_variables, ["VIN", true], null), $.call(update_apc_agreement_variables, ["VIN", false], null), $.call(connected_terms_and_conditions_by_vin_variables, ["VIN"], null), $.call(onboarding_features_variables, ["VIN"], null), $.call(update_vehicle_variables, ["VIN"], Object.assign({}, {"license_plate": "ARIYA"}, {"hologram": $.attr(VehicleHologram, "E")})), $.call(update_vehicle_manual_mileage_variables, ["VIN"], Object.assign({}, {"manual_mileage": 1234})), $.call(update_vehicle_nickname_variables, ["VIN", "Blue"], null), $.call(upload_ownership_verification_variables, ["VIN", "title.pdf", "BASE64", true], null)])), "test_account_vehicle_client.py:237: [value['variables'] for value in requests] == [add_vehicle_variables('VIN', True), delete_vehicle_variables('VIN'), ncar_icar_add_vehicle_variables(True, 'GUID', account=account), pending_vehicles_variables(), ownership_status_variables('VIN'), apc_agreement_variables('VIN'), apc_document_url_variables('VIN'), create_apc_agreement_variables('VIN', True), update_apc_agreement_variables('VIN', False), connected_terms_and_conditions_by_vin_variables('VIN'), onboarding_features_variables('VIN'), update_vehicle_variables('VIN', license_plate='ARIYA', hologram=VehicleHologram.E), update_vehicle_manual_mileage_variables('VIN', manual_mileage=1234), update_vehicle_nickname_variables('VIN', 'Blue'), upload_ownership_verification_variables('VIN', 'title.pdf', 'BASE64', True)]");
}

/** Translated upstream test_driver_and_emergency_client_wires_all_operations. */
export async function test_driver_and_emergency_client_wires_all_operations(...__args: any[]): any {
let client, contact, contact_update, driver_update, invite, invite_action, owner_action, requests, session, value;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(response, ["vehicle"], null), $.call(response, ["createEmergencyContact"], null), $.call(response, ["updateEmergencyContact"], null), $.call(response, ["deleteEmergencyContact"], null), $.call(response, ["driverInvites"], null), $.call(response, ["inviteDriver"], null), $.call(response, ["driverInviteAction"], null), $.call(response, ["deleteDriver"], null), $.call(response, ["updateDriver"], null), $.call(response, ["ownerInviteAction"], null), $.call(response, ["createRSALink"], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
contact = $.call(emergency_contact, [], null);
contact_update = $.call(UpdateEmergencyContactInput, ["CONTACT"], Object.assign({}, {"first_name": "Rear Admiral Grace"}));
invite = $.call(driver_invite, [], null);
invite_action = $.call(DriverInviteActionInput, ["INVITE", $.attr(DriverInviteAction, "ACCEPT")], Object.assign({}, {"terms_and_conditions": true}));
driver_update = $.call(UpdateDriverInput, ["INVITE", ["REMOTE_DOOR", "REMOTE_CLIMATE"], true, false], null);
owner_action = $.call(OwnerInviteActionInput, ["INVITE", $.attr(OwnerInviteAction, "RESEND"), $.attr(InviteNotificationType, "EMAIL")], null);
$.assert((((await $.call($.attr(client, "async_get_emergency_contacts"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:303: await client.async_get_emergency_contacts('VIN') is None");
$.assert((((await $.call($.attr(client, "async_create_emergency_contact"), ["VIN", contact], null)) === null)), "test_account_vehicle_client.py:304: await client.async_create_emergency_contact('VIN', contact) is None");
$.assert((((await $.call($.attr(client, "async_update_emergency_contact"), ["VIN", contact_update], null)) === null)), "test_account_vehicle_client.py:305: await client.async_update_emergency_contact('VIN', contact_update) is None");
$.assert((((await $.call($.attr(client, "async_delete_emergency_contact"), ["VIN", "CONTACT"], null)) === null)), "test_account_vehicle_client.py:306: await client.async_delete_emergency_contact('VIN', 'CONTACT') is None");
$.assert((((await $.call($.attr(client, "async_get_driver_invites"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:307: await client.async_get_driver_invites('VIN') is None");
$.assert((((await $.call($.attr(client, "async_invite_driver"), [invite], null)) === null)), "test_account_vehicle_client.py:308: await client.async_invite_driver(invite) is None");
$.assert((((await $.call($.attr(client, "async_driver_invite_action"), [invite_action], null)) === null)), "test_account_vehicle_client.py:309: await client.async_driver_invite_action(invite_action) is None");
$.assert((((await $.call($.attr(client, "async_delete_driver"), ["INVITE"], null)) === null)), "test_account_vehicle_client.py:310: await client.async_delete_driver('INVITE') is None");
$.assert((((await $.call($.attr(client, "async_update_driver"), [driver_update], null)) === null)), "test_account_vehicle_client.py:311: await client.async_update_driver(driver_update) is None");
$.assert((((await $.call($.attr(client, "async_owner_invite_action"), [owner_action], null)) === null)), "test_account_vehicle_client.py:312: await client.async_owner_invite_action(owner_action) is None");
$.assert((((await $.call($.attr(client, "async_create_rsa_link"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:313: await client.async_create_rsa_link('VIN') is None");
requests = $.call(payloads, [session], null);
$.assert(($.eq((() => { const __out: any = []; for (const value of $.iterable(requests)) { __out.push($.get(value, "operationName")); } return __out; })(), ["EmergencyContacts", "CreateEmergencyContact", "UpdateEmergencyContact", "DeleteEmergencyContact", "DriverInvites", "InviteDriver", "DriverInviteAction", "DeleteDriver", "UpdateDriver", "OwnerInviteAction", "CreateRSALink"])), "test_account_vehicle_client.py:316: [value['operationName'] for value in requests] == ['EmergencyContacts', 'CreateEmergencyContact', 'UpdateEmergencyContact', 'DeleteEmergencyContact', 'DriverInvites', 'InviteDriver', 'DriverInviteAction', 'DeleteDriver', 'UpdateDriver', 'OwnerInviteAction', 'CreateRSALink']");
$.assert(($.eq((() => { const __out: any = []; for (const value of $.iterable(requests)) { __out.push($.get(value, "variables")); } return __out; })(), [$.call(emergency_contacts_variables, ["VIN"], null), $.call(create_emergency_contact_variables, ["VIN", contact], null), $.call(update_emergency_contact_variables, ["VIN", contact_update], null), $.call(delete_emergency_contact_variables, ["VIN", "CONTACT"], null), $.call(driver_invites_variables, ["VIN"], null), $.call(invite_driver_variables, [invite], null), $.call(driver_invite_action_variables, [invite_action], null), $.call(delete_driver_variables, ["INVITE"], null), $.call(update_driver_variables, [driver_update], null), $.call(owner_invite_action_variables, [owner_action], null), $.call(create_rsa_link_variables, ["VIN"], null)])), "test_account_vehicle_client.py:329: [value['variables'] for value in requests] == [emergency_contacts_variables('VIN'), create_emergency_contact_variables('VIN', contact), update_emergency_contact_variables('VIN', contact_update), delete_emergency_contact_variables('VIN', 'CONTACT'), driver_invites_variables('VIN'), invite_driver_variables(invite), driver_invite_action_variables(invite_action), delete_driver_variables('INVITE'), update_driver_variables(driver_update), owner_invite_action_variables(owner_action), create_rsa_link_variables('VIN')]");
}

/** Translated upstream test_maintenance_client_wires_all_operations. */
export async function test_maintenance_client_wires_all_operations(...__args: any[]): any {
let client, created_reminder, past_service, requests, reset_reminder, session, updated_reminder, updated_service, value;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(response, ["vehicle"], null), $.call(response, ["vehicle"], null), $.call(response, ["addPastService"], null), $.call(response, ["updatePastService"], null), $.call(response, ["vehicle"], null), $.call(response, ["createPartsReminder"], null), $.call(response, ["updatePartsReminder"], null), $.call(response, ["resetPartsReminder"], null), $.call(response, ["deletePartsReminder"], null), $.call(response, ["vehicle"], null), $.call(response, ["vehicle"], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
past_service = $.call(PastServiceInput, ["VIN", 42, $.call(date, [2026, 7, 1], null), 1200], null);
updated_service = $.call(UpdatePastServiceInput, ["VIN", 42, $.call(date, [2026, 7, 2], null), 1201, 7], null);
created_reminder = $.call(CreatePartsReminderInput, [["CABIN_FILTER"]], null);
updated_reminder = $.call(UpdatePartsReminderInput, ["REMINDER", ["CABIN_FILTER"]], null);
reset_reminder = $.call(ResetPartsReminderInput, ["REMINDER", ["CABIN_FILTER"]], null);
$.assert((((await $.call($.attr(client, "async_get_maintenance_timeline"), ["VIN", $.attr(DistanceUnit, "MILE")], null)) === null)), "test_account_vehicle_client.py:371: await client.async_get_maintenance_timeline('VIN', DistanceUnit.MILE) is None");
$.assert((((await $.call($.attr(client, "async_get_service_contracts"), ["VIN", 1200], null)) === null)), "test_account_vehicle_client.py:372: await client.async_get_service_contracts('VIN', 1200) is None");
$.assert((((await $.call($.attr(client, "async_add_past_service"), [past_service], null)) === null)), "test_account_vehicle_client.py:373: await client.async_add_past_service(past_service) is None");
$.assert((((await $.call($.attr(client, "async_update_past_service"), [updated_service], null)) === null)), "test_account_vehicle_client.py:374: await client.async_update_past_service(updated_service) is None");
$.assert((((await $.call($.attr(client, "async_get_parts_reminders"), ["VIN"], Object.assign({}, {"unit": $.attr(DistanceUnit, "MILE")}))) === null)), "test_account_vehicle_client.py:375: await client.async_get_parts_reminders('VIN', unit=DistanceUnit.MILE) is None");
$.assert((((await $.call($.attr(client, "async_create_parts_reminder"), ["VIN", created_reminder], null)) === null)), "test_account_vehicle_client.py:376: await client.async_create_parts_reminder('VIN', created_reminder) is None");
$.assert((((await $.call($.attr(client, "async_update_parts_reminder"), ["VIN", updated_reminder], null)) === null)), "test_account_vehicle_client.py:377: await client.async_update_parts_reminder('VIN', updated_reminder) is None");
$.assert((((await $.call($.attr(client, "async_reset_parts_reminder"), ["VIN", reset_reminder], null)) === null)), "test_account_vehicle_client.py:378: await client.async_reset_parts_reminder('VIN', reset_reminder) is None");
$.assert((((await $.call($.attr(client, "async_delete_parts_reminder"), ["VIN", "REMINDER"], null)) === null)), "test_account_vehicle_client.py:379: await client.async_delete_parts_reminder('VIN', 'REMINDER') is None");
$.assert((((await $.call($.attr(client, "async_get_collision_history"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:380: await client.async_get_collision_history('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_collision_probe_data"), ["VIN"], null)) === null)), "test_account_vehicle_client.py:381: await client.async_get_collision_probe_data('VIN') is None");
requests = $.call(payloads, [session], null);
$.assert(($.eq((() => { const __out: any = []; for (const value of $.iterable(requests)) { __out.push($.get(value, "operationName")); } return __out; })(), ["GetMaintenanceTimeline", "GetServiceContracts", "AddPastService", "UpdatePastService", "PartsReminders", "CreatePartsReminder", "UpdatePartsReminder", "ResetPartsReminder", "DeletePartsReminder", "CollisionHistory", "CollisionProbeData"])), "test_account_vehicle_client.py:384: [value['operationName'] for value in requests] == ['GetMaintenanceTimeline', 'GetServiceContracts', 'AddPastService', 'UpdatePastService', 'PartsReminders', 'CreatePartsReminder', 'UpdatePartsReminder', 'ResetPartsReminder', 'DeletePartsReminder', 'CollisionHistory', 'CollisionProbeData']");
$.assert(($.eq((() => { const __out: any = []; for (const value of $.iterable(requests)) { __out.push($.get(value, "variables")); } return __out; })(), [$.call(get_maintenance_timeline_variables, ["VIN", $.attr(DistanceUnit, "MILE")], null), $.call(get_service_contracts_variables, ["VIN", 1200], null), $.call(add_past_service_variables, [past_service], null), $.call(update_past_service_variables, [updated_service], null), $.call(parts_reminders_variables, ["VIN"], Object.assign({}, {"unit": $.attr(DistanceUnit, "MILE")})), $.call(create_parts_reminder_variables, ["VIN", created_reminder], null), $.call(update_parts_reminder_variables, ["VIN", updated_reminder], null), $.call(reset_parts_reminder_variables, ["VIN", reset_reminder], null), $.call(delete_parts_reminder_variables, ["VIN", "REMINDER"], null), $.call(collision_history_variables, ["VIN"], null), $.call(collision_probe_data_variables, ["VIN"], null)])), "test_account_vehicle_client.py:397: [value['variables'] for value in requests] == [get_maintenance_timeline_variables('VIN', DistanceUnit.MILE), get_service_contracts_variables('VIN', 1200), add_past_service_variables(past_service), update_past_service_variables(updated_service), parts_reminders_variables('VIN', unit=DistanceUnit.MILE), create_parts_reminder_variables('VIN', created_reminder), update_parts_reminder_variables('VIN', updated_reminder), reset_parts_reminder_variables('VIN', reset_reminder), delete_parts_reminder_variables('VIN', 'REMINDER'), collision_history_variables('VIN'), collision_probe_data_variables('VIN')]");
}

/** Translated upstream assert_read_only. */
export async function assert_read_only(...__args: any[]): any {
let {"awaitable": awaitable} = $.bind(__args, ["awaitable"], {}, [], null, null);
await $.raises(ReadOnlyError, null, async () => {
(await awaitable);
});
}

/** Translated upstream test_all_new_mutations_respect_read_only_before_io. */
export async function test_all_new_mutations_respect_read_only_before_io(...__args: any[]): any {
let account, client, contact, invite, past_service, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": true}));
account = $.call(garage_account, [], null);
contact = $.call(emergency_contact, [], null);
invite = $.call(driver_invite, [], null);
past_service = $.call(PastServiceInput, ["VIN", 42, $.call(date, [2026, 7, 1], null), 1200], null);
(await $.call(assert_read_only, [$.call($.attr(client, "async_add_vehicle"), ["VIN", true], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_delete_vehicle"), ["VIN"], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_add_ncar_icar_vehicle"), [true, "GUID"], Object.assign({}, {"account": account}))], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_create_apc_agreement"), ["VIN", true], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_update_apc_agreement"), ["VIN", false], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_get_connected_terms_and_conditions_by_vin"), ["VIN"], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_update_vehicle"), ["VIN"], Object.assign({}, {"hologram": $.attr(VehicleHologram, "E")}))], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_update_vehicle_manual_mileage"), ["VIN"], Object.assign({}, {"manual_mileage": 1200}))], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_update_vehicle_nickname"), ["VIN", "Blue"], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_upload_ownership_verification"), ["VIN", "title.pdf", "BASE64", true], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_create_emergency_contact"), ["VIN", contact], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_update_emergency_contact"), ["VIN", $.call(UpdateEmergencyContactInput, ["CONTACT"], Object.assign({}, {"first_name": "Grace"}))], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_delete_emergency_contact"), ["VIN", "CONTACT"], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_invite_driver"), [invite], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_driver_invite_action"), [$.call(DriverInviteActionInput, ["INVITE", $.attr(DriverInviteAction, "ACCEPT")], null)], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_delete_driver"), ["INVITE"], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_update_driver"), [$.call(UpdateDriverInput, ["INVITE", [], false, false], null)], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_owner_invite_action"), [$.call(OwnerInviteActionInput, ["INVITE", $.attr(OwnerInviteAction, "CANCEL"), $.attr(InviteNotificationType, "EMAIL")], null)], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_create_rsa_link"), ["VIN"], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_add_past_service"), [past_service], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_update_past_service"), [$.call(UpdatePastServiceInput, ["VIN", 42, $.call(date, [2026, 7, 1], null), 1200, 7], null)], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_create_parts_reminder"), ["VIN", $.call(CreatePartsReminderInput, [["CABIN_FILTER"]], null)], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_update_parts_reminder"), ["VIN", $.call(UpdatePartsReminderInput, ["REMINDER", ["CABIN_FILTER"]], null)], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_reset_parts_reminder"), ["VIN", $.call(ResetPartsReminderInput, ["REMINDER", ["CABIN_FILTER"]], null)], null)], null));
(await $.call(assert_read_only, [$.call($.attr(client, "async_delete_parts_reminder"), ["VIN", "REMINDER"], null)], null));
$.assert(($.eq($.attr(session, "calls"), [])), "test_account_vehicle_client.py:491: session.calls == []");
}

$.register("test_account_vehicle_client.py::test_garage_client_wires_all_operations", test_garage_client_wires_all_operations, []);

$.register("test_account_vehicle_client.py::test_driver_and_emergency_client_wires_all_operations", test_driver_and_emergency_client_wires_all_operations, []);

$.register("test_account_vehicle_client.py::test_maintenance_client_wires_all_operations", test_maintenance_client_wires_all_operations, []);

$.register("test_account_vehicle_client.py::test_all_new_mutations_respect_read_only_before_io", test_all_new_mutations_respect_read_only_before_io, []);
