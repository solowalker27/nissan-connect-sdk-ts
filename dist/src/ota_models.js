"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtaUpdateProgress = exports.OtaUpdateErrorInfo = exports.OtaUpdate = exports.OtaBatteryLevel = exports.OtaCampaignDescription = exports.OtaUpdateStatus = exports.DataWipeType = exports.OtaUpdateState = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
exports.OtaUpdateState = _runtime_1.py.enumType("OtaUpdateState", { "READY_FOR_DOWNLOAD": "READY_FOR_DOWNLOAD", "DOWNLOADING": "DOWNLOADING", "INSTALLING": "INSTALLING", "READY_FOR_ACTIVATION": "READY_FOR_ACTIVATION", "ACTIVATION_SCHEDULED": "ACTIVATION_SCHEDULED", "ACTIVATING": "ACTIVATING", "ACTIVATION_COMPLETED": "ACTIVATION_COMPLETED", "ACTIVATION_FAILED_RETRYABLE": "ACTIVATION_FAILED_RETRYABLE", "ACTIVATION_FAILED_NOT_RETRYABLE": "ACTIVATION_FAILED_NOT_RETRYABLE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.DataWipeType = _runtime_1.py.enumType("DataWipeType", { "WIPE": "WIPE", "TCU_WIPE": "TCU_WIPE", "HU_WIPE": "HU_WIPE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Current state and optional timing details for an OTA campaign. */
class OtaUpdateStatus {
    status;
    activation_timer_value;
    progress;
    count_down_time_start;
    count_down_delay;
    static __fields = [["status", _runtime_1.py.MISSING], ["activation_timer_value", _runtime_1.py.MISSING], ["progress", _runtime_1.py.MISSING], ["count_down_time_start", _runtime_1.py.MISSING], ["count_down_delay", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OtaUpdateStatus, __args); Object.freeze(this); }
}
exports.OtaUpdateStatus = OtaUpdateStatus;
_runtime_1.py.classType(OtaUpdateStatus);
/** Optional release notes and disclaimers for an OTA campaign. */
class OtaCampaignDescription {
    global_release_note;
    download_disclaimer;
    activation_disclaimer;
    activation_estimated_time;
    static __fields = [["global_release_note", _runtime_1.py.MISSING], ["download_disclaimer", _runtime_1.py.MISSING], ["activation_disclaimer", _runtime_1.py.MISSING], ["activation_estimated_time", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OtaCampaignDescription, __args); Object.freeze(this); }
}
exports.OtaCampaignDescription = OtaCampaignDescription;
_runtime_1.py.classType(OtaCampaignDescription);
/** Battery requirements reported for OTA activation. */
class OtaBatteryLevel {
    activation_enabled;
    state_of_charge;
    activation_minimum_battery_level;
    static __fields = [["activation_enabled", _runtime_1.py.MISSING], ["state_of_charge", _runtime_1.py.MISSING], ["activation_minimum_battery_level", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OtaBatteryLevel, __args); Object.freeze(this); }
}
exports.OtaBatteryLevel = OtaBatteryLevel;
_runtime_1.py.classType(OtaBatteryLevel);
/** An OTA campaign currently associated with a vehicle. */
class OtaUpdate {
    campaign_operation_id;
    status;
    campaign_description;
    battery_level;
    size;
    last_checked;
    activation_timer_value;
    static __fields = [["campaign_operation_id", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING], ["campaign_description", _runtime_1.py.MISSING], ["battery_level", _runtime_1.py.MISSING], ["size", _runtime_1.py.MISSING], ["last_checked", _runtime_1.py.MISSING], ["activation_timer_value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OtaUpdate, __args); Object.freeze(this); }
}
exports.OtaUpdate = OtaUpdate;
_runtime_1.py.classType(OtaUpdate);
/** One non-null error returned while an OTA campaign is progressing. */
class OtaUpdateErrorInfo {
    error_code;
    error_message;
    is_retryable;
    static __fields = [["error_code", _runtime_1.py.MISSING], ["error_message", _runtime_1.py.MISSING], ["is_retryable", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OtaUpdateErrorInfo, __args); Object.freeze(this); }
}
exports.OtaUpdateErrorInfo = OtaUpdateErrorInfo;
_runtime_1.py.classType(OtaUpdateErrorInfo);
/** Latest progress and errors for one OTA campaign. */
class OtaUpdateProgress {
    status;
    percentage;
    error_info;
    static __fields = [["status", _runtime_1.py.MISSING], ["percentage", _runtime_1.py.MISSING], ["error_info", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OtaUpdateProgress, __args); Object.freeze(this); }
}
exports.OtaUpdateProgress = OtaUpdateProgress;
_runtime_1.py.classType(OtaUpdateProgress);
//# sourceMappingURL=ota_models.js.map