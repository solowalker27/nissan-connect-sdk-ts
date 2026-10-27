// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

export const OtaUpdateState = $.enumType("OtaUpdateState", {"READY_FOR_DOWNLOAD": "READY_FOR_DOWNLOAD", "DOWNLOADING": "DOWNLOADING", "INSTALLING": "INSTALLING", "READY_FOR_ACTIVATION": "READY_FOR_ACTIVATION", "ACTIVATION_SCHEDULED": "ACTIVATION_SCHEDULED", "ACTIVATING": "ACTIVATING", "ACTIVATION_COMPLETED": "ACTIVATION_COMPLETED", "ACTIVATION_FAILED_RETRYABLE": "ACTIVATION_FAILED_RETRYABLE", "ACTIVATION_FAILED_NOT_RETRYABLE": "ACTIVATION_FAILED_NOT_RETRYABLE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type OtaUpdateState = ReturnType<typeof OtaUpdateState>;

export const DataWipeType = $.enumType("DataWipeType", {"WIPE": "WIPE", "TCU_WIPE": "TCU_WIPE", "HU_WIPE": "HU_WIPE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type DataWipeType = ReturnType<typeof DataWipeType>;

/** Current state and optional timing details for an OTA campaign. */
export class OtaUpdateStatus {
readonly status: OtaUpdateState | null;
readonly activation_timer_value: $.DateValue | null;
readonly progress: number | null;
readonly count_down_time_start: $.DateValue | null;
readonly count_down_delay: number | null;
static __fields = [["status", $.MISSING], ["activation_timer_value", $.MISSING], ["progress", $.MISSING], ["count_down_time_start", $.MISSING], ["count_down_delay", $.MISSING]];
constructor(status: OtaUpdateState | null, activation_timer_value: $.DateValue | null, progress: number | null, count_down_time_start: $.DateValue | null, count_down_delay: number | null);
constructor(options: { status: OtaUpdateState | null; activation_timer_value: $.DateValue | null; progress: number | null; count_down_time_start: $.DateValue | null; count_down_delay: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OtaUpdateStatus, __args);  Object.freeze(this); }
}
$.classType(OtaUpdateStatus);

/** Optional release notes and disclaimers for an OTA campaign. */
export class OtaCampaignDescription {
readonly global_release_note: string | null;
readonly download_disclaimer: string | null;
readonly activation_disclaimer: string | null;
readonly activation_estimated_time: string | null;
static __fields = [["global_release_note", $.MISSING], ["download_disclaimer", $.MISSING], ["activation_disclaimer", $.MISSING], ["activation_estimated_time", $.MISSING]];
constructor(global_release_note: string | null, download_disclaimer: string | null, activation_disclaimer: string | null, activation_estimated_time: string | null);
constructor(options: { global_release_note: string | null; download_disclaimer: string | null; activation_disclaimer: string | null; activation_estimated_time: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OtaCampaignDescription, __args);  Object.freeze(this); }
}
$.classType(OtaCampaignDescription);

/** Battery requirements reported for OTA activation. */
export class OtaBatteryLevel {
readonly activation_enabled: boolean;
readonly state_of_charge: number | null;
readonly activation_minimum_battery_level: number | null;
static __fields = [["activation_enabled", $.MISSING], ["state_of_charge", $.MISSING], ["activation_minimum_battery_level", $.MISSING]];
constructor(activation_enabled: boolean, state_of_charge: number | null, activation_minimum_battery_level: number | null);
constructor(options: { activation_enabled: boolean; state_of_charge: number | null; activation_minimum_battery_level: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OtaBatteryLevel, __args);  Object.freeze(this); }
}
$.classType(OtaBatteryLevel);

/** An OTA campaign currently associated with a vehicle. */
export class OtaUpdate {
readonly campaign_operation_id: string;
readonly status: OtaUpdateStatus;
readonly campaign_description: OtaCampaignDescription;
readonly battery_level: OtaBatteryLevel;
readonly size: number | null;
readonly last_checked: $.DateValue | null;
readonly activation_timer_value: $.DateValue | null;
static __fields = [["campaign_operation_id", $.MISSING], ["status", $.MISSING], ["campaign_description", $.MISSING], ["battery_level", $.MISSING], ["size", $.MISSING], ["last_checked", $.MISSING], ["activation_timer_value", $.MISSING]];
constructor(campaign_operation_id: string, status: OtaUpdateStatus, campaign_description: OtaCampaignDescription, battery_level: OtaBatteryLevel, size: number | null, last_checked: $.DateValue | null, activation_timer_value: $.DateValue | null);
constructor(options: { campaign_operation_id: string; status: OtaUpdateStatus; campaign_description: OtaCampaignDescription; battery_level: OtaBatteryLevel; size: number | null; last_checked: $.DateValue | null; activation_timer_value: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OtaUpdate, __args);  Object.freeze(this); }
}
$.classType(OtaUpdate);

/** One non-null error returned while an OTA campaign is progressing. */
export class OtaUpdateErrorInfo {
readonly error_code: string;
readonly error_message: string;
readonly is_retryable: boolean;
static __fields = [["error_code", $.MISSING], ["error_message", $.MISSING], ["is_retryable", $.MISSING]];
constructor(error_code: string, error_message: string, is_retryable: boolean);
constructor(options: { error_code: string; error_message: string; is_retryable: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OtaUpdateErrorInfo, __args);  Object.freeze(this); }
}
$.classType(OtaUpdateErrorInfo);

/** Latest progress and errors for one OTA campaign. */
export class OtaUpdateProgress {
readonly status: OtaUpdateState | null;
readonly percentage: number | null;
readonly error_info: ReadonlyArray<OtaUpdateErrorInfo> | null;
static __fields = [["status", $.MISSING], ["percentage", $.MISSING], ["error_info", $.MISSING]];
constructor(status: OtaUpdateState | null, percentage: number | null, error_info: ReadonlyArray<OtaUpdateErrorInfo> | null);
constructor(options: { status: OtaUpdateState | null; percentage: number | null; error_info: ReadonlyArray<OtaUpdateErrorInfo> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OtaUpdateProgress, __args);  Object.freeze(this); }
}
$.classType(OtaUpdateProgress);
