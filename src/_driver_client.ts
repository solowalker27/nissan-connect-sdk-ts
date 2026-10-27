// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { CreateEmergencyContactInput, DriverInviteActionInput, DriverInviteInput, OwnerInviteActionInput, UpdateDriverInput, UpdateEmergencyContactInput, create_emergency_contact_variables, create_rsa_link_variables, delete_driver_variables, delete_emergency_contact_variables, driver_invite_action_variables, driver_invites_variables, emergency_contacts_variables, invite_driver_variables, owner_invite_action_variables, update_driver_variables, update_emergency_contact_variables } from "./driver_inputs";
export { CreateEmergencyContactInput, DriverInviteActionInput, DriverInviteInput, OwnerInviteActionInput, UpdateDriverInput, UpdateEmergencyContactInput, create_emergency_contact_variables, create_rsa_link_variables, delete_driver_variables, delete_emergency_contact_variables, driver_invite_action_variables, driver_invites_variables, emergency_contacts_variables, invite_driver_variables, owner_invite_action_variables, update_driver_variables, update_emergency_contact_variables };

import { CreateEmergencyContactResult, CreateRSALinkResult, DeleteDriverResult, DeleteEmergencyContactResult, DriverInviteActionResult, DriverInvitesResult, EmergencyContactsResult, InviteDriverResult, OwnerInviteActionResult, UpdateDriverResult, UpdateEmergencyContactResult } from "./driver_models";
export { CreateEmergencyContactResult, CreateRSALinkResult, DeleteDriverResult, DeleteEmergencyContactResult, DriverInviteActionResult, DriverInvitesResult, EmergencyContactsResult, InviteDriverResult, OwnerInviteActionResult, UpdateDriverResult, UpdateEmergencyContactResult };

import { parse_create_emergency_contact, parse_create_rsa_link, parse_delete_driver, parse_delete_emergency_contact, parse_driver_invite_action, parse_driver_invites, parse_emergency_contacts, parse_invite_driver, parse_owner_invite_action, parse_update_driver, parse_update_emergency_contact } from "./driver_parsing";
export { parse_create_emergency_contact, parse_create_rsa_link, parse_delete_driver, parse_delete_emergency_contact, parse_driver_invite_action, parse_driver_invites, parse_emergency_contacts, parse_invite_driver, parse_owner_invite_action, parse_update_driver, parse_update_emergency_contact };

import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };

/** Translated upstream _DriverClientMixin. */
export class _DriverClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _DriverClientMixin, __args); }
async_get_emergency_contacts(vin: string): Promise<EmergencyContactsResult | null>;
/** Return emergency contacts configured for a vehicle. */
async async_get_emergency_contacts(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return emergency contacts configured for a vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["EmergencyContacts", $.attr(operations, "EMERGENCY_CONTACTS"), $.call(emergency_contacts_variables, [vin], null)], null));
return $.call(parse_emergency_contacts, [data], null);
}
async_create_emergency_contact(vin: string, contact: CreateEmergencyContactInput): Promise<CreateEmergencyContactResult | null>;
/** Create an emergency contact for a vehicle. */
async async_create_emergency_contact(...__args: any[]): any {
let data;
let {"vin": vin, "contact": contact} = $.bind(__args, ["vin", "contact"], {}, [], null, null);
/** Create an emergency contact for a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreateEmergencyContact", $.attr(operations, "CREATE_EMERGENCY_CONTACT"), $.call(create_emergency_contact_variables, [vin, contact], null)], null));
return $.call(parse_create_emergency_contact, [data], null);
}
async_update_emergency_contact(vin: string, contact: UpdateEmergencyContactInput): Promise<UpdateEmergencyContactResult | null>;
/** Update an emergency contact configured for a vehicle. */
async async_update_emergency_contact(...__args: any[]): any {
let data;
let {"vin": vin, "contact": contact} = $.bind(__args, ["vin", "contact"], {}, [], null, null);
/** Update an emergency contact configured for a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateEmergencyContact", $.attr(operations, "UPDATE_EMERGENCY_CONTACT"), $.call(update_emergency_contact_variables, [vin, contact], null)], null));
return $.call(parse_update_emergency_contact, [data], null);
}
async_delete_emergency_contact(vin: string, emergency_contact_id: string): Promise<DeleteEmergencyContactResult | null>;
/** Delete an emergency contact configured for a vehicle. */
async async_delete_emergency_contact(...__args: any[]): any {
let data;
let {"vin": vin, "emergency_contact_id": emergency_contact_id} = $.bind(__args, ["vin", "emergency_contact_id"], {}, [], null, null);
/** Delete an emergency contact configured for a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DeleteEmergencyContact", $.attr(operations, "DELETE_EMERGENCY_CONTACT"), $.call(delete_emergency_contact_variables, [vin, emergency_contact_id], null)], null));
return $.call(parse_delete_emergency_contact, [data], null);
}
async_get_driver_invites(vin: string): Promise<DriverInvitesResult | null>;
/** Return shared-driver invitations for a vehicle. */
async async_get_driver_invites(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return shared-driver invitations for a vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DriverInvites", $.attr(operations, "DRIVER_INVITES"), $.call(driver_invites_variables, [vin], null)], null));
return $.call(parse_driver_invites, [data], null);
}
async_invite_driver(config?: DriverInviteInput | UnsetType | null): Promise<InviteDriverResult | null>;
/** Invite another account to drive a vehicle with selected permissions. */
async async_invite_driver(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {"config": UNSET}, [], null, null);
/** Invite another account to drive a vehicle with selected permissions. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["InviteDriver", $.attr(operations, "INVITE_DRIVER"), $.call(invite_driver_variables, [config], null)], null));
return $.call(parse_invite_driver, [data], null);
}
async_driver_invite_action(config?: DriverInviteActionInput | UnsetType | null): Promise<DriverInviteActionResult | null>;
/** Accept, decline, or invalidate a received driver invitation. */
async async_driver_invite_action(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {"config": UNSET}, [], null, null);
/** Accept, decline, or invalidate a received driver invitation. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DriverInviteAction", $.attr(operations, "DRIVER_INVITE_ACTION"), $.call(driver_invite_action_variables, [config], null)], null));
return $.call(parse_driver_invite_action, [data], null);
}
async_delete_driver(invite_id: string): Promise<DeleteDriverResult | null>;
/** Remove a shared driver or invitation from the account. */
async async_delete_driver(...__args: any[]): any {
let data;
let {"invite_id": invite_id} = $.bind(__args, ["invite_id"], {}, [], null, null);
/** Remove a shared driver or invitation from the account. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DeleteDriver", $.attr(operations, "DELETE_DRIVER"), $.call(delete_driver_variables, [invite_id], null)], null));
return $.call(parse_delete_driver, [data], null);
}
async_update_driver(config: UpdateDriverInput): Promise<UpdateDriverResult | null>;
/** Replace a shared driver's permissions and notification settings. */
async async_update_driver(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Replace a shared driver's permissions and notification settings. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateDriver", $.attr(operations, "UPDATE_DRIVER"), $.call(update_driver_variables, [config], null)], null));
return $.call(parse_update_driver, [data], null);
}
async_owner_invite_action(config?: OwnerInviteActionInput | UnsetType | null): Promise<OwnerInviteActionResult | null>;
/** Resend or cancel a shared-driver invitation as the vehicle owner. */
async async_owner_invite_action(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {"config": UNSET}, [], null, null);
/** Resend or cancel a shared-driver invitation as the vehicle owner. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["OwnerInviteAction", $.attr(operations, "OWNER_INVITE_ACTION"), $.call(owner_invite_action_variables, [config], null)], null));
return $.call(parse_owner_invite_action, [data], null);
}
async_create_rsa_link(vin: string): Promise<CreateRSALinkResult | null>;
/** Create the roadside-assistance link associated with a vehicle. */
async async_create_rsa_link(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Create the roadside-assistance link associated with a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreateRSALink", $.attr(operations, "CREATE_RSA_LINK"), $.call(create_rsa_link_variables, [vin], null)], null));
return $.call(parse_create_rsa_link, [data], null);
}
}
$.classType(_DriverClientMixin);
export interface _DriverClientMixin extends _NissanClientBase {}
