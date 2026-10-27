import { py as $ } from "./_runtime";
export declare const OtaUpdateState: $.EnumType<{
    readonly READY_FOR_DOWNLOAD: "READY_FOR_DOWNLOAD";
    readonly DOWNLOADING: "DOWNLOADING";
    readonly INSTALLING: "INSTALLING";
    readonly READY_FOR_ACTIVATION: "READY_FOR_ACTIVATION";
    readonly ACTIVATION_SCHEDULED: "ACTIVATION_SCHEDULED";
    readonly ACTIVATING: "ACTIVATING";
    readonly ACTIVATION_COMPLETED: "ACTIVATION_COMPLETED";
    readonly ACTIVATION_FAILED_RETRYABLE: "ACTIVATION_FAILED_RETRYABLE";
    readonly ACTIVATION_FAILED_NOT_RETRYABLE: "ACTIVATION_FAILED_NOT_RETRYABLE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type OtaUpdateState = ReturnType<typeof OtaUpdateState>;
export declare const DataWipeType: $.EnumType<{
    readonly WIPE: "WIPE";
    readonly TCU_WIPE: "TCU_WIPE";
    readonly HU_WIPE: "HU_WIPE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type DataWipeType = ReturnType<typeof DataWipeType>;
/** Current state and optional timing details for an OTA campaign. */
export declare class OtaUpdateStatus {
    readonly status: OtaUpdateState | null;
    readonly activation_timer_value: $.DateValue | null;
    readonly progress: number | null;
    readonly count_down_time_start: $.DateValue | null;
    readonly count_down_delay: number | null;
    static __fields: (string | symbol)[][];
    constructor(status: OtaUpdateState | null, activation_timer_value: $.DateValue | null, progress: number | null, count_down_time_start: $.DateValue | null, count_down_delay: number | null);
    constructor(options: {
        status: OtaUpdateState | null;
        activation_timer_value: $.DateValue | null;
        progress: number | null;
        count_down_time_start: $.DateValue | null;
        count_down_delay: number | null;
    });
}
/** Optional release notes and disclaimers for an OTA campaign. */
export declare class OtaCampaignDescription {
    readonly global_release_note: string | null;
    readonly download_disclaimer: string | null;
    readonly activation_disclaimer: string | null;
    readonly activation_estimated_time: string | null;
    static __fields: (string | symbol)[][];
    constructor(global_release_note: string | null, download_disclaimer: string | null, activation_disclaimer: string | null, activation_estimated_time: string | null);
    constructor(options: {
        global_release_note: string | null;
        download_disclaimer: string | null;
        activation_disclaimer: string | null;
        activation_estimated_time: string | null;
    });
}
/** Battery requirements reported for OTA activation. */
export declare class OtaBatteryLevel {
    readonly activation_enabled: boolean;
    readonly state_of_charge: number | null;
    readonly activation_minimum_battery_level: number | null;
    static __fields: (string | symbol)[][];
    constructor(activation_enabled: boolean, state_of_charge: number | null, activation_minimum_battery_level: number | null);
    constructor(options: {
        activation_enabled: boolean;
        state_of_charge: number | null;
        activation_minimum_battery_level: number | null;
    });
}
/** An OTA campaign currently associated with a vehicle. */
export declare class OtaUpdate {
    readonly campaign_operation_id: string;
    readonly status: OtaUpdateStatus;
    readonly campaign_description: OtaCampaignDescription;
    readonly battery_level: OtaBatteryLevel;
    readonly size: number | null;
    readonly last_checked: $.DateValue | null;
    readonly activation_timer_value: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(campaign_operation_id: string, status: OtaUpdateStatus, campaign_description: OtaCampaignDescription, battery_level: OtaBatteryLevel, size: number | null, last_checked: $.DateValue | null, activation_timer_value: $.DateValue | null);
    constructor(options: {
        campaign_operation_id: string;
        status: OtaUpdateStatus;
        campaign_description: OtaCampaignDescription;
        battery_level: OtaBatteryLevel;
        size: number | null;
        last_checked: $.DateValue | null;
        activation_timer_value: $.DateValue | null;
    });
}
/** One non-null error returned while an OTA campaign is progressing. */
export declare class OtaUpdateErrorInfo {
    readonly error_code: string;
    readonly error_message: string;
    readonly is_retryable: boolean;
    static __fields: (string | symbol)[][];
    constructor(error_code: string, error_message: string, is_retryable: boolean);
    constructor(options: {
        error_code: string;
        error_message: string;
        is_retryable: boolean;
    });
}
/** Latest progress and errors for one OTA campaign. */
export declare class OtaUpdateProgress {
    readonly status: OtaUpdateState | null;
    readonly percentage: number | null;
    readonly error_info: ReadonlyArray<OtaUpdateErrorInfo> | null;
    static __fields: (string | symbol)[][];
    constructor(status: OtaUpdateState | null, percentage: number | null, error_info: ReadonlyArray<OtaUpdateErrorInfo> | null);
    constructor(options: {
        status: OtaUpdateState | null;
        percentage: number | null;
        error_info: ReadonlyArray<OtaUpdateErrorInfo> | null;
    });
}
