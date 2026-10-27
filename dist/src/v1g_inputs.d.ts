import { py as $ } from "./_runtime";
import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
export declare const V1GNotificationCategory: $.EnumType<{
    readonly NEW_PRIME_TIME_HOURS: "New PrimeTime Hours";
    readonly PRIME_TIME_UPCOMING_REMINDER: "PrimeTime Upcoming Reminder";
    readonly MONTHLY_INSIGHTS: "Monthly Insights";
    readonly PRIME_TIME_STATS_UPDATES: "PrimeTime Stats Updates";
}>;
export type V1GNotificationCategory = ReturnType<typeof V1GNotificationCategory>;
/** One V1G category patch with independently optional channel flags. */
export declare class V1GNotificationPreferenceInput {
    readonly notification_category: string;
    readonly email_status: boolean | UnsetType | null;
    readonly push_status: boolean | UnsetType | null;
    readonly sms_status: boolean | UnsetType | null;
    static __fields: any[][];
    constructor(notification_category: string, email_status?: boolean | UnsetType | null, push_status?: boolean | UnsetType | null, sms_status?: boolean | UnsetType | null);
    constructor(options: {
        notification_category: string;
        email_status?: boolean | UnsetType | null;
        push_status?: boolean | UnsetType | null;
        sms_status?: boolean | UnsetType | null;
    });
}
export declare function v1g_monitored_charging_account_status_variables(vin: string): Record<string, unknown>;
export declare function v1g_tokenized_url_variables(vin: string): Record<string, unknown>;
export declare function v1g_update_notification_preferences_variables(vin: string, options?: {
    preferences?: ReadonlyArray<V1GNotificationPreferenceInput | null> | UnsetType | null;
}): Record<string, unknown>;
export declare function v1g_enroll_monitored_charging_plan_variables(vin: string, model: string, year: string, options?: {
    plan?: string | UnsetType | null;
}): Record<string, unknown>;
export declare function v1g_cancel_monitored_charging_plan_variables(vin: string): Record<string, unknown>;
export declare function v1g_notification_preference_input(value: V1GNotificationPreferenceInput): Record<string, unknown>;
export declare function _notification_category_input(value: string): string;
export declare function _optional_preferences(value: ReadonlyArray<V1GNotificationPreferenceInput | null> | UnsetType | null): unknown;
