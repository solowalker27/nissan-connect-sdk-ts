import { py as $ } from "./_runtime";
export declare const DeviceOS: $.EnumType<{
    readonly IOS: "IOS";
    readonly ANDROID: "ANDROID";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type DeviceOS = ReturnType<typeof DeviceOS>;
/** Nullable summary fields returned for one in-vehicle message. */
export declare class InVehicleMessageSummary {
    readonly campaign_id: string | null;
    readonly created_date_time: $.DateValue | null;
    readonly title: string | null;
    readonly viewed: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(campaign_id: string | null, created_date_time: $.DateValue | null, title: string | null, viewed: boolean | null);
    constructor(options: {
        campaign_id: string | null;
        created_date_time: $.DateValue | null;
        title: string | null;
        viewed: boolean | null;
    });
}
/** Nullable detail fields returned for one in-vehicle message. */
export declare class InVehicleMessage {
    readonly title: string | null;
    readonly campaign_id: string | null;
    readonly viewed: boolean | null;
    readonly text: string | null;
    readonly expire_date: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(title: string | null, campaign_id: string | null, viewed: boolean | null, text: string | null, expire_date: $.DateValue | null);
    constructor(options: {
        title: string | null;
        campaign_id: string | null;
        viewed: boolean | null;
        text: string | null;
        expire_date: $.DateValue | null;
    });
}
/** Successful result from the current device push API. */
export declare class PushNotificationSuccess {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Database failure returned by the current device push API. */
export declare class PushNotificationDatabaseError {
    readonly error_message: string;
    static __fields: (string | symbol)[][];
    constructor(error_message: string);
    constructor(options: {
        error_message: string;
    });
}
/** Push-token failure returned by the current device push API. */
export declare class PushNotificationTokenError {
    readonly error_message: string;
    static __fields: (string | symbol)[][];
    constructor(error_message: string);
    constructor(options: {
        error_message: string;
    });
}
export type PushNotificationResult = PushNotificationSuccess | PushNotificationDatabaseError | PushNotificationTokenError;
