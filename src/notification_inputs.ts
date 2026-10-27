// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

import { NotificationCategory, NotificationDestination } from "./notification_models";
export { NotificationCategory, NotificationDestination };

/** Required opt-in value for one notification delivery channel. */
export class NotificationTypeInput {
readonly destination: NotificationDestination;
readonly opt_in: boolean;
static __fields = [["destination", $.MISSING], ["opt_in", $.MISSING]];
constructor(destination: NotificationDestination, opt_in: boolean);
constructor(options: { destination: NotificationDestination; opt_in: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NotificationTypeInput, __args);  Object.freeze(this); }
}
$.classType(NotificationTypeInput);

/** Required notification category and its channel preferences. */
export class NotificationPreferenceInput {
readonly notification_category: NotificationCategory;
readonly notification_type: ReadonlyArray<NotificationTypeInput | null>;
static __fields = [["notification_category", $.MISSING], ["notification_type", $.MISSING]];
constructor(notification_category: NotificationCategory, notification_type: ReadonlyArray<NotificationTypeInput | null>);
constructor(options: { notification_category: NotificationCategory; notification_type: ReadonlyArray<NotificationTypeInput | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NotificationPreferenceInput, __args);  Object.freeze(this); }
}
$.classType(NotificationPreferenceInput);

export function notification_type_input(value: NotificationTypeInput): Record<string, unknown>;
/** Serialize one notification-channel preference. */
export function notification_type_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize one notification-channel preference. */
return Object.assign({}, {["destination"]: $.call(notification_destination_input, [$.attr(value, "destination")], null)}, {["optIn"]: $.attr(value, "opt_in")});
}

export function notification_preference_input(value: NotificationPreferenceInput): Record<string, unknown>;
/** Serialize one notification-category preference. */
export function notification_preference_input(...__args: any[]): any {
let item;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize one notification-category preference. */
return Object.assign({}, {["notificationCategory"]: $.call(notification_category_input, [$.attr(value, "notification_category")], null)}, {["notificationType"]: (() => { const __out: any = []; for (const item of $.iterable($.attr(value, "notification_type"))) { __out.push(($.truth(((item !== null))) ? $.call(notification_type_input, [item], null) : null)); } return __out; })()});
}

export function notification_preferences_input(values: ReadonlyArray<NotificationPreferenceInput | null>): ReadonlyArray<unknown>;
/** Serialize the non-null preferences list accepted by Nissan. */
export function notification_preferences_input(...__args: any[]): any {
let value;
let {"values": values} = $.bind(__args, ["values"], {}, [], null, null);
/** Serialize the non-null preferences list accepted by Nissan. */
return (() => { const __out: any = []; for (const value of $.iterable(values)) { __out.push(($.truth(((value !== null))) ? $.call(notification_preference_input, [value], null) : null)); } return __out; })();
}

export function notification_category_input(value: NotificationCategory): string;
/** Serialize a schema-valid notification category. */
export function notification_category_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize a schema-valid notification category. */
return $.call(serialize_enum, [value], null);
}

export function notification_destination_input(value: NotificationDestination): string;
/** Serialize a schema-valid notification destination. */
export function notification_destination_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize a schema-valid notification destination. */
return $.call(serialize_enum, [value], null);
}

export function update_nissan_energy_notification_preferences_variables(vin: string, options?: { email_status?: boolean | UnsetType | null; push_status?: boolean | UnsetType | null; sms_status?: boolean | UnsetType | null }): Record<string, unknown>;
/** Build the Nissan Energy patch while preserving omitted and null values. */
export function update_nissan_energy_notification_preferences_variables(...__args: any[]): any {
let {"vin": vin, "email_status": email_status, "push_status": push_status, "sms_status": sms_status} = $.bind(__args, ["vin"], {"email_status": UNSET, "push_status": UNSET, "sms_status": UNSET}, ["email_status", "push_status", "sms_status"], null, null);
/** Build the Nissan Energy patch while preserving omitted and null values. */
return Object.assign({}, {["config"]: $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"emailStatus": email_status}, {"pushStatus": push_status}, {"smsStatus": sms_status}))});
}
