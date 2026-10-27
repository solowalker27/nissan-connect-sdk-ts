import { py as $ } from "./_runtime";
export declare const V1GAccountStatus: $.EnumType<{
    readonly FAILED: "FAILED";
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly ENROLLING: "ENROLLING";
    readonly NOT_ENROLLED: "NOT_ENROLLED";
    readonly CANCELLED: "CANCELLED";
    readonly CLOSED: "CLOSED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type V1GAccountStatus = ReturnType<typeof V1GAccountStatus>;
/** Raw nullable V1G notification-category and channel values. */
export declare class V1GNotificationPreference {
    readonly notification_category: string | null;
    readonly email_status: boolean | null;
    readonly push_status: boolean | null;
    readonly sms_status: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(notification_category: string | null, email_status: boolean | null, push_status: boolean | null, sms_status: boolean | null);
    constructor(options: {
        notification_category: string | null;
        email_status: boolean | null;
        push_status: boolean | null;
        sms_status: boolean | null;
    });
}
/** Raw nullable V1G account details for one VIN. */
export declare class V1GMonitoredChargingAccountData {
    readonly account_status: V1GAccountStatus | null;
    readonly notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null;
    readonly vin: string | null;
    static __fields: (string | symbol)[][];
    constructor(account_status: V1GAccountStatus | null, notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null, vin: string | null);
    constructor(options: {
        account_status: V1GAccountStatus | null;
        notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null;
        vin: string | null;
    });
}
/** Status envelope returned by the V1G account-status query. */
export declare class V1GMonitoredChargingAccountStatusResult {
    readonly status_code: string | null;
    readonly data: V1GMonitoredChargingAccountData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, data: V1GMonitoredChargingAccountData | null);
    constructor(options: {
        status_code: string | null;
        data: V1GMonitoredChargingAccountData | null;
    });
    /** Return the upstream service's exact business-success interpretation. */
    get is_success(): boolean;
}
/** Nullable tokenized URL and VIN returned by V1G. */
export declare class V1GTokenizedUrlData {
    readonly url: string | null;
    readonly vin: string | null;
    static __fields: (string | symbol)[][];
    constructor(url: string | null, vin: string | null);
    constructor(options: {
        url: string | null;
        vin: string | null;
    });
}
/** Nullable data wrapper returned by the tokenized-URL query. */
export declare class V1GTokenizedUrlResult {
    readonly data: V1GTokenizedUrlData | null;
    static __fields: (string | symbol)[][];
    constructor(data: V1GTokenizedUrlData | null);
    constructor(options: {
        data: V1GTokenizedUrlData | null;
    });
}
/** Nullable account status returned by V1G enrollment. */
export declare class V1GMonitoredChargingPlanEnrollmentData {
    readonly account_status: V1GAccountStatus | null;
    static __fields: (string | symbol)[][];
    constructor(account_status: V1GAccountStatus | null);
    constructor(options: {
        account_status: V1GAccountStatus | null;
    });
}
/** Nullable data wrapper returned by V1G enrollment. */
export declare class V1GMonitoredChargingPlanEnrollmentResult {
    readonly data: V1GMonitoredChargingPlanEnrollmentData | null;
    static __fields: (string | symbol)[][];
    constructor(data: V1GMonitoredChargingPlanEnrollmentData | null);
    constructor(options: {
        data: V1GMonitoredChargingPlanEnrollmentData | null;
    });
}
/** Status code returned by V1G monitored-plan cancellation. */
export declare class V1GMonitoredChargingPlanCancellationResult {
    readonly status_code: string | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null);
    constructor(options: {
        status_code: string | null;
    });
    /** Return the upstream service's exact business-success interpretation. */
    get is_success(): boolean;
}
/** Status envelope and raw preferences returned by a V1G patch. */
export declare class V1GNotificationPreferencesUpdateResult {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null;
    });
    /** Return the upstream service's exact business-success interpretation. */
    get is_success(): boolean;
}
