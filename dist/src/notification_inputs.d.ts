import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
import { NotificationCategory, NotificationDestination } from "./notification_models";
export { NotificationCategory, NotificationDestination };
/** Required opt-in value for one notification delivery channel. */
export declare class NotificationTypeInput {
    readonly destination: NotificationDestination;
    readonly opt_in: boolean;
    static __fields: (string | symbol)[][];
    constructor(destination: NotificationDestination, opt_in: boolean);
    constructor(options: {
        destination: NotificationDestination;
        opt_in: boolean;
    });
}
/** Required notification category and its channel preferences. */
export declare class NotificationPreferenceInput {
    readonly notification_category: NotificationCategory;
    readonly notification_type: ReadonlyArray<NotificationTypeInput | null>;
    static __fields: (string | symbol)[][];
    constructor(notification_category: NotificationCategory, notification_type: ReadonlyArray<NotificationTypeInput | null>);
    constructor(options: {
        notification_category: NotificationCategory;
        notification_type: ReadonlyArray<NotificationTypeInput | null>;
    });
}
export declare function notification_type_input(value: NotificationTypeInput): Record<string, unknown>;
export declare function notification_preference_input(value: NotificationPreferenceInput): Record<string, unknown>;
export declare function notification_preferences_input(values: ReadonlyArray<NotificationPreferenceInput | null>): ReadonlyArray<unknown>;
export declare function notification_category_input(value: NotificationCategory): string;
export declare function notification_destination_input(value: NotificationDestination): string;
export declare function update_nissan_energy_notification_preferences_variables(vin: string, options?: {
    email_status?: boolean | UnsetType | null;
    push_status?: boolean | UnsetType | null;
    sms_status?: boolean | UnsetType | null;
}): Record<string, unknown>;
