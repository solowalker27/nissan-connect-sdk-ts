// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

export const V1GNotificationCategory = $.enumType("V1GNotificationCategory", {"NEW_PRIME_TIME_HOURS": "New PrimeTime Hours", "PRIME_TIME_UPCOMING_REMINDER": "PrimeTime Upcoming Reminder", "MONTHLY_INSIGHTS": "Monthly Insights", "PRIME_TIME_STATS_UPDATES": "PrimeTime Stats Updates"}, true);
export type V1GNotificationCategory = ReturnType<typeof V1GNotificationCategory>;

/** One V1G category patch with independently optional channel flags. */
export class V1GNotificationPreferenceInput {
readonly notification_category: string;
readonly email_status: boolean | UnsetType | null;
readonly push_status: boolean | UnsetType | null;
readonly sms_status: boolean | UnsetType | null;
static __fields = [["notification_category", $.MISSING], ["email_status", UNSET], ["push_status", UNSET], ["sms_status", UNSET]];
constructor(notification_category: string, email_status?: boolean | UnsetType | null, push_status?: boolean | UnsetType | null, sms_status?: boolean | UnsetType | null);
constructor(options: { notification_category: string; email_status?: boolean | UnsetType | null; push_status?: boolean | UnsetType | null; sms_status?: boolean | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GNotificationPreferenceInput, __args);  Object.freeze(this); }
}
$.classType(V1GNotificationPreferenceInput);

export function v1g_monitored_charging_account_status_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for the V1G account-status query. */
export function v1g_monitored_charging_account_status_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for the V1G account-status query. */
return Object.assign({}, {["vin"]: vin});
}

export function v1g_tokenized_url_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for the V1G tokenized-URL query. */
export function v1g_tokenized_url_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for the V1G tokenized-URL query. */
return Object.assign({}, {["vin"]: vin});
}

export function v1g_update_notification_preferences_variables(vin: string, options?: { preferences?: ReadonlyArray<V1GNotificationPreferenceInput | null> | UnsetType | null }): Record<string, unknown>;
/** Serialize a V1G preference patch with Apollo omission semantics. */
export function v1g_update_notification_preferences_variables(...__args: any[]): any {
let {"vin": vin, "preferences": preferences} = $.bind(__args, ["vin"], {"preferences": UNSET}, ["preferences"], null, null);
/** Serialize a V1G preference patch with Apollo omission semantics. */
return Object.assign({}, {["config"]: $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"v1GNotificationPreferences": $.call(_optional_preferences, [preferences], null)}))});
}

export function v1g_enroll_monitored_charging_plan_variables(vin: string, model: string, year: string, options?: { plan?: string | UnsetType | null }): Record<string, unknown>;
/** Serialize V1G enrollment without supplying an implicit plan. */
export function v1g_enroll_monitored_charging_plan_variables(...__args: any[]): any {
let {"vin": vin, "model": model, "year": year, "plan": plan} = $.bind(__args, ["vin", "model", "year"], {"plan": UNSET}, ["plan"], null, null);
/** Serialize V1G enrollment without supplying an implicit plan. */
return Object.assign({}, {["config"]: $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"plan": plan}, {"model": model}, {"year": year}))});
}

export function v1g_cancel_monitored_charging_plan_variables(vin: string): Record<string, unknown>;
/** Serialize the required V1G plan-cancellation input. */
export function v1g_cancel_monitored_charging_plan_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required V1G plan-cancellation input. */
return Object.assign({}, {["config"]: Object.assign({}, {["vin"]: vin})});
}

export function v1g_notification_preference_input(value: V1GNotificationPreferenceInput): Record<string, unknown>;
/** Serialize one nullable-field V1G notification preference. */
export function v1g_notification_preference_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize one nullable-field V1G notification preference. */
return $.call(optional_input_fields, [], Object.assign({}, {"v1GNotificationCategory": $.call(_notification_category_input, [$.attr(value, "notification_category")], null)}, {"v1GEmailStatus": $.attr(value, "email_status")}, {"v1GPushStatus": $.attr(value, "push_status")}, {"v1GSmsStatus": $.attr(value, "sms_status")}));
}

export function _notification_category_input(value: string): string;
/** Translated upstream _notification_category_input. */
export function _notification_category_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, V1GNotificationCategory], null))) {
return $.call(serialize_enum, [value], null);
}
return value;
}

export function _optional_preferences(value: ReadonlyArray<V1GNotificationPreferenceInput | null> | UnsetType | null): unknown;
/** Translated upstream _optional_preferences. */
export function _optional_preferences(...__args: any[]): any {
let item;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return (() => { const __out: any = []; for (const item of $.iterable(value)) { __out.push(($.truth(((item !== null))) ? $.call(v1g_notification_preference_input, [item], null) : null)); } return __out; })();
}
