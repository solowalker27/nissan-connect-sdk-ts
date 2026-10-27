// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Callable = $.Callable;

const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

import { DriverInviteAction, EmergencyContactRelationship, InviteNotificationType, OwnerInviteAction } from "./driver_models";
export { DriverInviteAction, EmergencyContactRelationship, InviteNotificationType, OwnerInviteAction };

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

/** Required and optional fields for a new emergency contact. */
export class CreateEmergencyContactInput {
readonly first_name: string;
readonly last_name: string;
readonly primary_phone: string;
readonly relationship: EmergencyContactRelationship;
readonly secondary_phone: string | UnsetType | null;
static __fields = [["first_name", $.MISSING], ["last_name", $.MISSING], ["primary_phone", $.MISSING], ["relationship", $.MISSING], ["secondary_phone", UNSET]];
constructor(first_name: string, last_name: string, primary_phone: string, relationship: EmergencyContactRelationship, secondary_phone?: string | UnsetType | null);
constructor(options: { first_name: string; last_name: string; primary_phone: string; relationship: EmergencyContactRelationship; secondary_phone?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CreateEmergencyContactInput, __args);  Object.freeze(this); }
}
$.classType(CreateEmergencyContactInput);

/** Emergency-contact patch with Apollo omission semantics. */
export class UpdateEmergencyContactInput {
readonly emergency_contact_id: string;
readonly first_name: string | UnsetType | null;
readonly last_name: string | UnsetType | null;
readonly primary_phone: string | UnsetType | null;
readonly secondary_phone: string | UnsetType | null;
readonly relationship: EmergencyContactRelationship | UnsetType | null;
static __fields = [["emergency_contact_id", $.MISSING], ["first_name", UNSET], ["last_name", UNSET], ["primary_phone", UNSET], ["secondary_phone", UNSET], ["relationship", UNSET]];
constructor(emergency_contact_id: string, first_name?: string | UnsetType | null, last_name?: string | UnsetType | null, primary_phone?: string | UnsetType | null, secondary_phone?: string | UnsetType | null, relationship?: EmergencyContactRelationship | UnsetType | null);
constructor(options: { emergency_contact_id: string; first_name?: string | UnsetType | null; last_name?: string | UnsetType | null; primary_phone?: string | UnsetType | null; secondary_phone?: string | UnsetType | null; relationship?: EmergencyContactRelationship | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateEmergencyContactInput, __args);  Object.freeze(this); }
}
$.classType(UpdateEmergencyContactInput);

/** Required identity, permissions, and delivery channel for a driver invite. */
export class DriverInviteInput {
readonly driver_first_name: string;
readonly driver_last_name: string;
readonly driver_email: string;
readonly driver_phone_number: string;
readonly vin: string;
readonly entitlements: ReadonlyArray<string>;
readonly invite_type: InviteNotificationType;
readonly usage_history: boolean;
readonly notifications_to_primary: boolean;
static __fields = [["driver_first_name", $.MISSING], ["driver_last_name", $.MISSING], ["driver_email", $.MISSING], ["driver_phone_number", $.MISSING], ["vin", $.MISSING], ["entitlements", $.MISSING], ["invite_type", $.MISSING], ["usage_history", $.MISSING], ["notifications_to_primary", $.MISSING]];
constructor(driver_first_name: string, driver_last_name: string, driver_email: string, driver_phone_number: string, vin: string, entitlements: ReadonlyArray<string>, invite_type: InviteNotificationType, usage_history: boolean, notifications_to_primary: boolean);
constructor(options: { driver_first_name: string; driver_last_name: string; driver_email: string; driver_phone_number: string; vin: string; entitlements: ReadonlyArray<string>; invite_type: InviteNotificationType; usage_history: boolean; notifications_to_primary: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DriverInviteInput, __args);  Object.freeze(this); }
}
$.classType(DriverInviteInput);

/** Prospective-driver action with optional terms acceptance. */
export class DriverInviteActionInput {
readonly invite_id: string;
readonly action: DriverInviteAction;
readonly terms_and_conditions: boolean | UnsetType | null;
static __fields = [["invite_id", $.MISSING], ["action", $.MISSING], ["terms_and_conditions", UNSET]];
constructor(invite_id: string, action: DriverInviteAction, terms_and_conditions?: boolean | UnsetType | null);
constructor(options: { invite_id: string; action: DriverInviteAction; terms_and_conditions?: boolean | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DriverInviteActionInput, __args);  Object.freeze(this); }
}
$.classType(DriverInviteActionInput);

/** Required replacement permissions for an invited driver. */
export class UpdateDriverInput {
readonly invite_id: string;
readonly entitlements: ReadonlyArray<string>;
readonly usage_history: boolean;
readonly notifications_to_primary: boolean;
static __fields = [["invite_id", $.MISSING], ["entitlements", $.MISSING], ["usage_history", $.MISSING], ["notifications_to_primary", $.MISSING]];
constructor(invite_id: string, entitlements: ReadonlyArray<string>, usage_history: boolean, notifications_to_primary: boolean);
constructor(options: { invite_id: string; entitlements: ReadonlyArray<string>; usage_history: boolean; notifications_to_primary: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateDriverInput, __args);  Object.freeze(this); }
}
$.classType(UpdateDriverInput);

/** Owner action and notification channel for a driver invitation. */
export class OwnerInviteActionInput {
readonly invite_id: string;
readonly action: OwnerInviteAction;
readonly notification_type: InviteNotificationType;
static __fields = [["invite_id", $.MISSING], ["action", $.MISSING], ["notification_type", $.MISSING]];
constructor(invite_id: string, action: OwnerInviteAction, notification_type: InviteNotificationType);
constructor(options: { invite_id: string; action: OwnerInviteAction; notification_type: InviteNotificationType });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OwnerInviteActionInput, __args);  Object.freeze(this); }
}
$.classType(OwnerInviteActionInput);

export function emergency_contacts_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for the EmergencyContacts query. */
export function emergency_contacts_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for the EmergencyContacts query. */
return Object.assign({}, {["vin"]: vin});
}

export function create_emergency_contact_variables(vin: string, contact: CreateEmergencyContactInput): Record<string, unknown>;
/** Serialize a complete emergency-contact creation request. */
export function create_emergency_contact_variables(...__args: any[]): any {
let {"vin": vin, "contact": contact} = $.bind(__args, ["vin", "contact"], {}, [], null, null);
/** Serialize a complete emergency-contact creation request. */
return Object.assign({}, {["vin"]: vin}, {["contact"]: $.call(create_emergency_contact_input, [contact], null)});
}

export function update_emergency_contact_variables(vin: string, contact: UpdateEmergencyContactInput): Record<string, unknown>;
/** Serialize an emergency-contact patch without inventing omitted fields. */
export function update_emergency_contact_variables(...__args: any[]): any {
let {"vin": vin, "contact": contact} = $.bind(__args, ["vin", "contact"], {}, [], null, null);
/** Serialize an emergency-contact patch without inventing omitted fields. */
return Object.assign({}, {["vin"]: vin}, {["contact"]: $.call(update_emergency_contact_input, [contact], null)});
}

export function delete_emergency_contact_variables(vin: string, emergency_contact_id: string): Record<string, unknown>;
/** Serialize the required emergency-contact deletion identifiers. */
export function delete_emergency_contact_variables(...__args: any[]): any {
let {"vin": vin, "emergency_contact_id": emergency_contact_id} = $.bind(__args, ["vin", "emergency_contact_id"], {}, [], null, null);
/** Serialize the required emergency-contact deletion identifiers. */
return Object.assign({}, {["vin"]: vin}, {["emergencyContactId"]: emergency_contact_id});
}

export function driver_invites_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for the DriverInvites query. */
export function driver_invites_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for the DriverInvites query. */
return Object.assign({}, {["vin"]: vin});
}

export function invite_driver_variables(config?: DriverInviteInput | UnsetType | null): Record<string, unknown>;
/** Serialize InviteDriver's nullable Apollo-optional config variable. */
export function invite_driver_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {"config": UNSET}, [], null, null);
/** Serialize InviteDriver's nullable Apollo-optional config variable. */
return $.call(optional_input_fields, [], Object.assign({}, {"config": $.call(_optional_input, [config, driver_invite_input], null)}));
}

export function driver_invite_action_variables(config?: DriverInviteActionInput | UnsetType | null): Record<string, unknown>;
/** Serialize DriverInviteAction's nullable Apollo-optional config variable. */
export function driver_invite_action_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {"config": UNSET}, [], null, null);
/** Serialize DriverInviteAction's nullable Apollo-optional config variable. */
return $.call(optional_input_fields, [], Object.assign({}, {"config": $.call(_optional_input, [config, driver_invite_action_input], null)}));
}

export function delete_driver_variables(invite_id: string): Record<string, unknown>;
/** Serialize the required invitation ID for DeleteDriver. */
export function delete_driver_variables(...__args: any[]): any {
let {"invite_id": invite_id} = $.bind(__args, ["invite_id"], {}, [], null, null);
/** Serialize the required invitation ID for DeleteDriver. */
return Object.assign({}, {["inviteId"]: invite_id});
}

export function update_driver_variables(config: UpdateDriverInput): Record<string, unknown>;
/** Serialize the required UpdateDriver config variable. */
export function update_driver_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize the required UpdateDriver config variable. */
return Object.assign({}, {["config"]: $.call(update_driver_input, [config], null)});
}

export function owner_invite_action_variables(config?: OwnerInviteActionInput | UnsetType | null): Record<string, unknown>;
/** Serialize OwnerInviteAction's nullable Apollo-optional config variable. */
export function owner_invite_action_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {"config": UNSET}, [], null, null);
/** Serialize OwnerInviteAction's nullable Apollo-optional config variable. */
return $.call(optional_input_fields, [], Object.assign({}, {"config": $.call(_optional_input, [config, owner_invite_action_input], null)}));
}

export function create_rsa_link_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for CreateRSALink. */
export function create_rsa_link_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for CreateRSALink. */
return Object.assign({}, {["vin"]: vin});
}

export function create_emergency_contact_input(value: CreateEmergencyContactInput): Record<string, unknown>;
/** Serialize a CreateEmergencyContact input object. */
export function create_emergency_contact_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize a CreateEmergencyContact input object. */
return $.call(optional_input_fields, [], Object.assign({}, {"firstName": $.attr(value, "first_name")}, {"lastName": $.attr(value, "last_name")}, {"primaryPhone": $.attr(value, "primary_phone")}, {"secondaryPhone": $.attr(value, "secondary_phone")}, {"relationship": $.call(serialize_enum, [$.attr(value, "relationship")], null)}));
}

export function update_emergency_contact_input(value: UpdateEmergencyContactInput): Record<string, unknown>;
/** Serialize an UpdateEmergencyContact input object. */
export function update_emergency_contact_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize an UpdateEmergencyContact input object. */
return $.call(optional_input_fields, [], Object.assign({}, {"emergencyContactId": $.attr(value, "emergency_contact_id")}, {"firstName": $.attr(value, "first_name")}, {"lastName": $.attr(value, "last_name")}, {"primaryPhone": $.attr(value, "primary_phone")}, {"secondaryPhone": $.attr(value, "secondary_phone")}, {"relationship": $.call(_optional_enum, [$.attr(value, "relationship")], null)}));
}

export function driver_invite_input(value: DriverInviteInput): Record<string, unknown>;
/** Serialize a DriverInviteInput object. */
export function driver_invite_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize a DriverInviteInput object. */
return Object.assign({}, {["driverFirstName"]: $.attr(value, "driver_first_name")}, {["driverLastName"]: $.attr(value, "driver_last_name")}, {["driverEmail"]: $.attr(value, "driver_email")}, {["driverPhoneNumber"]: $.attr(value, "driver_phone_number")}, {["vin"]: $.attr(value, "vin")}, {["entitlements"]: $.call($.list, [$.attr(value, "entitlements")], null)}, {["inviteType"]: $.call(serialize_enum, [$.attr(value, "invite_type")], null)}, {["usageHistory"]: $.attr(value, "usage_history")}, {["notificationsToPrimary"]: $.attr(value, "notifications_to_primary")});
}

export function driver_invite_action_input(value: DriverInviteActionInput): Record<string, unknown>;
/** Serialize a DriverInviteActionInput object. */
export function driver_invite_action_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize a DriverInviteActionInput object. */
return $.call(optional_input_fields, [], Object.assign({}, {"inviteId": $.attr(value, "invite_id")}, {"action": $.call(serialize_enum, [$.attr(value, "action")], null)}, {"termsAndConditions": $.attr(value, "terms_and_conditions")}));
}

export function update_driver_input(value: UpdateDriverInput): Record<string, unknown>;
/** Serialize an UpdateDriverInput object. */
export function update_driver_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize an UpdateDriverInput object. */
return Object.assign({}, {["inviteId"]: $.attr(value, "invite_id")}, {["entitlements"]: $.call($.list, [$.attr(value, "entitlements")], null)}, {["usageHistory"]: $.attr(value, "usage_history")}, {["notificationsToPrimary"]: $.attr(value, "notifications_to_primary")});
}

export function owner_invite_action_input(value: OwnerInviteActionInput): Record<string, unknown>;
/** Serialize an OwnerInviteActionInput object. */
export function owner_invite_action_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize an OwnerInviteActionInput object. */
return Object.assign({}, {["inviteId"]: $.attr(value, "invite_id")}, {["action"]: $.call(serialize_enum, [$.attr(value, "action")], null)}, {["notificationType"]: $.call(serialize_enum, [$.attr(value, "notification_type")], null)});
}

export function _optional_enum(value: $.EnumValue | UnsetType | null): unknown;
/** Translated upstream _optional_enum. */
export function _optional_enum(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call(serialize_enum, [value], null);
}

export function _optional_input(value: any | UnsetType | null, serializer: ((arg0: any) => Record<string, unknown>)): unknown;
/** Translated upstream _optional_input. */
export function _optional_input(...__args: any[]): any {
let {"value": value, "serializer": serializer} = $.bind(__args, ["value", "serializer"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call(serializer, [value], null);
}
