// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

export const EmergencyContactRelationship = $.enumType("EmergencyContactRelationship", {"ASSISTANT": "ASSISTANT", "BROTHER": "BROTHER", "BUSINESS_CONTACT": "BUSINESS_CONTACT", "CHAUFFEUR": "CHAUFFEUR", "CO_WORKER": "CO_WORKER", "DAUGHTER": "DAUGHTER", "DOCTOR": "DOCTOR", "EMPLOYEE": "EMPLOYEE", "FATHER": "FATHER", "FIANCE": "FIANCE", "FIANCEE": "FIANCEE", "FRIEND": "FRIEND", "GRANDFATHER": "GRANDFATHER", "GRANDMOTHER": "GRANDMOTHER", "MOTHER": "MOTHER", "OTHER": "OTHER", "PARENTS": "PARENTS", "PARTNER": "PARTNER", "RELATIVE": "RELATIVE", "SIGNIFICANT_OTHER": "SIGNIFICANT_OTHER", "SISTER": "SISTER", "SON": "SON", "SPOUSE": "SPOUSE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EmergencyContactRelationship = ReturnType<typeof EmergencyContactRelationship>;

export const InviteNotificationType = $.enumType("InviteNotificationType", {"SMS": "SMS", "EMAIL": "EMAIL", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type InviteNotificationType = ReturnType<typeof InviteNotificationType>;

export const InviteStatus = $.enumType("InviteStatus", {"ACCEPTED": "ACCEPTED", "PENDING": "PENDING", "DECLINE": "DECLINE", "REMOVED": "REMOVED", "CANCEL": "CANCEL", "EXPIRED": "EXPIRED", "INVALIDATE": "INVALIDATE", "NONE": "NONE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type InviteStatus = ReturnType<typeof InviteStatus>;

export const DriverInviteAction = $.enumType("DriverInviteAction", {"DECLINE": "DECLINE", "ACCEPT": "ACCEPT", "INVALIDATE": "INVALIDATE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type DriverInviteAction = ReturnType<typeof DriverInviteAction>;

export const OwnerInviteAction = $.enumType("OwnerInviteAction", {"RESEND": "RESEND", "CANCEL": "CANCEL", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type OwnerInviteAction = ReturnType<typeof OwnerInviteAction>;

/** One nullable-field emergency contact returned for a vehicle. */
export class EmergencyContact {
readonly typename: string;
readonly id: string | null;
readonly first_name: string | null;
readonly last_name: string | null;
readonly primary_phone: string | null;
readonly secondary_phone: string | null;
readonly relationship: EmergencyContactRelationship | null;
static __fields = [["typename", $.MISSING], ["id", $.MISSING], ["first_name", $.MISSING], ["last_name", $.MISSING], ["primary_phone", $.MISSING], ["secondary_phone", $.MISSING], ["relationship", $.MISSING]];
constructor(typename: string, id: string | null, first_name: string | null, last_name: string | null, primary_phone: string | null, secondary_phone: string | null, relationship: EmergencyContactRelationship | null);
constructor(options: { typename: string; id: string | null; first_name: string | null; last_name: string | null; primary_phone: string | null; secondary_phone: string | null; relationship: EmergencyContactRelationship | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EmergencyContact, __args);  Object.freeze(this); }
}
$.classType(EmergencyContact);

/** Vehicle type and emergency contacts selected by the vehicle fragment. */
export class EmergencyContactsResult {
readonly typename: string;
readonly emergency_contacts: ReadonlyArray<EmergencyContact | null> | null;
static __fields = [["typename", $.MISSING], ["emergency_contacts", $.MISSING]];
constructor(typename: string, emergency_contacts: ReadonlyArray<EmergencyContact | null> | null);
constructor(options: { typename: string; emergency_contacts: ReadonlyArray<EmergencyContact | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EmergencyContactsResult, __args);  Object.freeze(this); }
}
$.classType(EmergencyContactsResult);

/** Nullable response status returned after creating an emergency contact. */
export class CreateEmergencyContactResult {
readonly typename: string;
readonly success: boolean | null;
static __fields = [["typename", $.MISSING], ["success", $.MISSING]];
constructor(typename: string, success: boolean | null);
constructor(options: { typename: string; success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CreateEmergencyContactResult, __args);  Object.freeze(this); }
}
$.classType(CreateEmergencyContactResult);

/** Nullable response status returned after updating an emergency contact. */
export class UpdateEmergencyContactResult {
readonly typename: string;
readonly success: boolean | null;
static __fields = [["typename", $.MISSING], ["success", $.MISSING]];
constructor(typename: string, success: boolean | null);
constructor(options: { typename: string; success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateEmergencyContactResult, __args);  Object.freeze(this); }
}
$.classType(UpdateEmergencyContactResult);

/** Nullable response status returned after deleting an emergency contact. */
export class DeleteEmergencyContactResult {
readonly typename: string;
readonly success: boolean | null;
static __fields = [["typename", $.MISSING], ["success", $.MISSING]];
constructor(typename: string, success: boolean | null);
constructor(options: { typename: string; success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DeleteEmergencyContactResult, __args);  Object.freeze(this); }
}
$.classType(DeleteEmergencyContactResult);

/** A known driver-operation error branch and its server message. */
export class DriverOperationError {
readonly typename: string;
readonly error_message: string;
static __fields = [["typename", $.MISSING], ["error_message", $.MISSING]];
constructor(typename: string, error_message: string);
constructor(options: { typename: string; error_message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DriverOperationError, __args);  Object.freeze(this); }
}
$.classType(DriverOperationError);

/** One current driver invitation returned by Nissan. */
export class DriverInvite {
readonly typename: string;
readonly invite_id: string;
readonly driver_first_name: string;
readonly driver_last_name: string;
readonly driver_email: string;
readonly driver_phone_number: string;
readonly invite_date_time: $.DateValue;
readonly invite_expiry_date_time: $.DateValue;
readonly invite_type: InviteNotificationType;
readonly notifications_to_primary: boolean;
readonly usage_history: boolean;
readonly status: InviteStatus;
readonly cdiid: string | null;
static __fields = [["typename", $.MISSING], ["invite_id", $.MISSING], ["driver_first_name", $.MISSING], ["driver_last_name", $.MISSING], ["driver_email", $.MISSING], ["driver_phone_number", $.MISSING], ["invite_date_time", $.MISSING], ["invite_expiry_date_time", $.MISSING], ["invite_type", $.MISSING], ["notifications_to_primary", $.MISSING], ["usage_history", $.MISSING], ["status", $.MISSING], ["cdiid", $.MISSING]];
constructor(typename: string, invite_id: string, driver_first_name: string, driver_last_name: string, driver_email: string, driver_phone_number: string, invite_date_time: $.DateValue, invite_expiry_date_time: $.DateValue, invite_type: InviteNotificationType, notifications_to_primary: boolean, usage_history: boolean, status: InviteStatus, cdiid: string | null);
constructor(options: { typename: string; invite_id: string; driver_first_name: string; driver_last_name: string; driver_email: string; driver_phone_number: string; invite_date_time: $.DateValue; invite_expiry_date_time: $.DateValue; invite_type: InviteNotificationType; notifications_to_primary: boolean; usage_history: boolean; status: InviteStatus; cdiid: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DriverInvite, __args);  Object.freeze(this); }
}
$.classType(DriverInvite);

/** Future-safe union result for the DriverInvites query. */
export class DriverInvitesResult {
readonly typename: string;
readonly invites: ReadonlyArray<DriverInvite> | null;
readonly error: DriverOperationError | null;
static __fields = [["typename", $.MISSING], ["invites", $.MISSING], ["error", $.MISSING]];
constructor(typename: string, invites: ReadonlyArray<DriverInvite> | null, error: DriverOperationError | null);
constructor(options: { typename: string; invites: ReadonlyArray<DriverInvite> | null; error: DriverOperationError | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DriverInvitesResult, __args);  Object.freeze(this); }
}
$.classType(DriverInvitesResult);

/** Driver invitation returned by a successful InviteDriver mutation. */
export class InviteDriverSuccess {
readonly vin: string;
readonly invite_id: string;
readonly driver_first_name: string;
readonly driver_last_name: string;
readonly driver_email: string;
readonly driver_phone_number: string;
readonly entitlements: ReadonlyArray<string>;
readonly invite_type: InviteNotificationType;
readonly usage_history: boolean;
readonly notifications_to_primary: boolean;
readonly invite_date_time: $.DateValue;
readonly status: InviteStatus;
static __fields = [["vin", $.MISSING], ["invite_id", $.MISSING], ["driver_first_name", $.MISSING], ["driver_last_name", $.MISSING], ["driver_email", $.MISSING], ["driver_phone_number", $.MISSING], ["entitlements", $.MISSING], ["invite_type", $.MISSING], ["usage_history", $.MISSING], ["notifications_to_primary", $.MISSING], ["invite_date_time", $.MISSING], ["status", $.MISSING]];
constructor(vin: string, invite_id: string, driver_first_name: string, driver_last_name: string, driver_email: string, driver_phone_number: string, entitlements: ReadonlyArray<string>, invite_type: InviteNotificationType, usage_history: boolean, notifications_to_primary: boolean, invite_date_time: $.DateValue, status: InviteStatus);
constructor(options: { vin: string; invite_id: string; driver_first_name: string; driver_last_name: string; driver_email: string; driver_phone_number: string; entitlements: ReadonlyArray<string>; invite_type: InviteNotificationType; usage_history: boolean; notifications_to_primary: boolean; invite_date_time: $.DateValue; status: InviteStatus });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, InviteDriverSuccess, __args);  Object.freeze(this); }
}
$.classType(InviteDriverSuccess);

/** Future-safe success or validation-error result for InviteDriver. */
export class InviteDriverResult {
readonly typename: string;
readonly invitation: InviteDriverSuccess | null;
readonly error: DriverOperationError | null;
static __fields = [["typename", $.MISSING], ["invitation", $.MISSING], ["error", $.MISSING]];
constructor(typename: string, invitation: InviteDriverSuccess | null, error: DriverOperationError | null);
constructor(options: { typename: string; invitation: InviteDriverSuccess | null; error: DriverOperationError | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, InviteDriverResult, __args);  Object.freeze(this); }
}
$.classType(InviteDriverResult);

/** Future-safe result for a prospective driver's invitation action. */
export class DriverInviteActionResult {
readonly typename: string;
readonly success: boolean | null;
readonly error: DriverOperationError | null;
static __fields = [["typename", $.MISSING], ["success", $.MISSING], ["error", $.MISSING]];
constructor(typename: string, success: boolean | null, error: DriverOperationError | null);
constructor(options: { typename: string; success: boolean | null; error: DriverOperationError | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DriverInviteActionResult, __args);  Object.freeze(this); }
}
$.classType(DriverInviteActionResult);

/** Future-safe result for deleting a driver invitation. */
export class DeleteDriverResult {
readonly typename: string;
readonly success: boolean | null;
static __fields = [["typename", $.MISSING], ["success", $.MISSING]];
constructor(typename: string, success: boolean | null);
constructor(options: { typename: string; success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DeleteDriverResult, __args);  Object.freeze(this); }
}
$.classType(DeleteDriverResult);

/** Driver permissions returned by a successful UpdateDriver mutation. */
export class UpdateDriverSuccess {
readonly entitlements: ReadonlyArray<string>;
readonly usage_history: boolean;
readonly notifications_to_primary: boolean;
readonly success: boolean;
static __fields = [["entitlements", $.MISSING], ["usage_history", $.MISSING], ["notifications_to_primary", $.MISSING], ["success", $.MISSING]];
constructor(entitlements: ReadonlyArray<string>, usage_history: boolean, notifications_to_primary: boolean, success: boolean);
constructor(options: { entitlements: ReadonlyArray<string>; usage_history: boolean; notifications_to_primary: boolean; success: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateDriverSuccess, __args);  Object.freeze(this); }
}
$.classType(UpdateDriverSuccess);

/** Future-safe result for updating a driver's permissions. */
export class UpdateDriverResult {
readonly typename: string;
readonly driver: UpdateDriverSuccess | null;
static __fields = [["typename", $.MISSING], ["driver", $.MISSING]];
constructor(typename: string, driver: UpdateDriverSuccess | null);
constructor(options: { typename: string; driver: UpdateDriverSuccess | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateDriverResult, __args);  Object.freeze(this); }
}
$.classType(UpdateDriverResult);

/** Future-safe result for an owner's invitation action. */
export class OwnerInviteActionResult {
readonly typename: string;
readonly success: boolean | null;
static __fields = [["typename", $.MISSING], ["success", $.MISSING]];
constructor(typename: string, success: boolean | null);
constructor(options: { typename: string; success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OwnerInviteActionResult, __args);  Object.freeze(this); }
}
$.classType(OwnerInviteActionResult);

/** Nullable roadside-assistance link returned for a vehicle. */
export class CreateRSALinkResult {
readonly typename: string;
readonly link: string | null;
static __fields = [["typename", $.MISSING], ["link", $.MISSING]];
constructor(typename: string, link: string | null);
constructor(options: { typename: string; link: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CreateRSALinkResult, __args);  Object.freeze(this); }
}
$.classType(CreateRSALinkResult);
