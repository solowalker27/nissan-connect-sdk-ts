"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1GNotificationPreferencesUpdateResult = exports.V1GMonitoredChargingPlanCancellationResult = exports.V1GMonitoredChargingPlanEnrollmentResult = exports.V1GMonitoredChargingPlanEnrollmentData = exports.V1GTokenizedUrlResult = exports.V1GTokenizedUrlData = exports.V1GMonitoredChargingAccountStatusResult = exports.V1GMonitoredChargingAccountData = exports.V1GNotificationPreference = exports.V1GAccountStatus = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
exports.V1GAccountStatus = _runtime_1.py.enumType("V1GAccountStatus", { "FAILED": "FAILED", "ACTIVE": "ACTIVE", "INACTIVE": "INACTIVE", "ENROLLING": "ENROLLING", "NOT_ENROLLED": "NOT_ENROLLED", "CANCELLED": "CANCELLED", "CLOSED": "CLOSED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Raw nullable V1G notification-category and channel values. */
class V1GNotificationPreference {
    notification_category;
    email_status;
    push_status;
    sms_status;
    static __fields = [["notification_category", _runtime_1.py.MISSING], ["email_status", _runtime_1.py.MISSING], ["push_status", _runtime_1.py.MISSING], ["sms_status", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GNotificationPreference, __args); Object.freeze(this); }
}
exports.V1GNotificationPreference = V1GNotificationPreference;
_runtime_1.py.classType(V1GNotificationPreference);
/** Raw nullable V1G account details for one VIN. */
class V1GMonitoredChargingAccountData {
    account_status;
    notification_preferences;
    vin;
    static __fields = [["account_status", _runtime_1.py.MISSING], ["notification_preferences", _runtime_1.py.MISSING], ["vin", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GMonitoredChargingAccountData, __args); Object.freeze(this); }
}
exports.V1GMonitoredChargingAccountData = V1GMonitoredChargingAccountData;
_runtime_1.py.classType(V1GMonitoredChargingAccountData);
/** Status envelope returned by the V1G account-status query. */
class V1GMonitoredChargingAccountStatusResult {
    status_code;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GMonitoredChargingAccountStatusResult, __args); Object.freeze(this); }
    /** Return the upstream service's exact business-success interpretation. */
    get is_success() {
        /** Return the upstream service's exact business-success interpretation. */
        return (_runtime_1.py.eq(_runtime_1.py.attr(this, "status_code"), "1000"));
    }
}
exports.V1GMonitoredChargingAccountStatusResult = V1GMonitoredChargingAccountStatusResult;
_runtime_1.py.classType(V1GMonitoredChargingAccountStatusResult);
/** Nullable tokenized URL and VIN returned by V1G. */
class V1GTokenizedUrlData {
    url;
    vin;
    static __fields = [["url", _runtime_1.py.MISSING], ["vin", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GTokenizedUrlData, __args); Object.freeze(this); }
}
exports.V1GTokenizedUrlData = V1GTokenizedUrlData;
_runtime_1.py.classType(V1GTokenizedUrlData);
/** Nullable data wrapper returned by the tokenized-URL query. */
class V1GTokenizedUrlResult {
    data;
    static __fields = [["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GTokenizedUrlResult, __args); Object.freeze(this); }
}
exports.V1GTokenizedUrlResult = V1GTokenizedUrlResult;
_runtime_1.py.classType(V1GTokenizedUrlResult);
/** Nullable account status returned by V1G enrollment. */
class V1GMonitoredChargingPlanEnrollmentData {
    account_status;
    static __fields = [["account_status", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GMonitoredChargingPlanEnrollmentData, __args); Object.freeze(this); }
}
exports.V1GMonitoredChargingPlanEnrollmentData = V1GMonitoredChargingPlanEnrollmentData;
_runtime_1.py.classType(V1GMonitoredChargingPlanEnrollmentData);
/** Nullable data wrapper returned by V1G enrollment. */
class V1GMonitoredChargingPlanEnrollmentResult {
    data;
    static __fields = [["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GMonitoredChargingPlanEnrollmentResult, __args); Object.freeze(this); }
}
exports.V1GMonitoredChargingPlanEnrollmentResult = V1GMonitoredChargingPlanEnrollmentResult;
_runtime_1.py.classType(V1GMonitoredChargingPlanEnrollmentResult);
/** Status code returned by V1G monitored-plan cancellation. */
class V1GMonitoredChargingPlanCancellationResult {
    status_code;
    static __fields = [["status_code", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GMonitoredChargingPlanCancellationResult, __args); Object.freeze(this); }
    /** Return the upstream service's exact business-success interpretation. */
    get is_success() {
        /** Return the upstream service's exact business-success interpretation. */
        return (_runtime_1.py.eq(_runtime_1.py.attr(this, "status_code"), "1000"));
    }
}
exports.V1GMonitoredChargingPlanCancellationResult = V1GMonitoredChargingPlanCancellationResult;
_runtime_1.py.classType(V1GMonitoredChargingPlanCancellationResult);
/** Status envelope and raw preferences returned by a V1G patch. */
class V1GNotificationPreferencesUpdateResult {
    status_code;
    status_message;
    timestamp;
    notification_preferences;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["notification_preferences", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GNotificationPreferencesUpdateResult, __args); Object.freeze(this); }
    /** Return the upstream service's exact business-success interpretation. */
    get is_success() {
        /** Return the upstream service's exact business-success interpretation. */
        return (_runtime_1.py.eq(_runtime_1.py.attr(this, "status_code"), "1000"));
    }
}
exports.V1GNotificationPreferencesUpdateResult = V1GNotificationPreferencesUpdateResult;
_runtime_1.py.classType(V1GNotificationPreferencesUpdateResult);
//# sourceMappingURL=v1g_models.js.map