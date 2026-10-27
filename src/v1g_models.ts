// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

export const V1GAccountStatus = $.enumType("V1GAccountStatus", {"FAILED": "FAILED", "ACTIVE": "ACTIVE", "INACTIVE": "INACTIVE", "ENROLLING": "ENROLLING", "NOT_ENROLLED": "NOT_ENROLLED", "CANCELLED": "CANCELLED", "CLOSED": "CLOSED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type V1GAccountStatus = ReturnType<typeof V1GAccountStatus>;

/** Raw nullable V1G notification-category and channel values. */
export class V1GNotificationPreference {
readonly notification_category: string | null;
readonly email_status: boolean | null;
readonly push_status: boolean | null;
readonly sms_status: boolean | null;
static __fields = [["notification_category", $.MISSING], ["email_status", $.MISSING], ["push_status", $.MISSING], ["sms_status", $.MISSING]];
constructor(notification_category: string | null, email_status: boolean | null, push_status: boolean | null, sms_status: boolean | null);
constructor(options: { notification_category: string | null; email_status: boolean | null; push_status: boolean | null; sms_status: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GNotificationPreference, __args);  Object.freeze(this); }
}
$.classType(V1GNotificationPreference);

/** Raw nullable V1G account details for one VIN. */
export class V1GMonitoredChargingAccountData {
readonly account_status: V1GAccountStatus | null;
readonly notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null;
readonly vin: string | null;
static __fields = [["account_status", $.MISSING], ["notification_preferences", $.MISSING], ["vin", $.MISSING]];
constructor(account_status: V1GAccountStatus | null, notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null, vin: string | null);
constructor(options: { account_status: V1GAccountStatus | null; notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null; vin: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GMonitoredChargingAccountData, __args);  Object.freeze(this); }
}
$.classType(V1GMonitoredChargingAccountData);

/** Status envelope returned by the V1G account-status query. */
export class V1GMonitoredChargingAccountStatusResult {
readonly status_code: string | null;
readonly data: V1GMonitoredChargingAccountData | null;
static __fields = [["status_code", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, data: V1GMonitoredChargingAccountData | null);
constructor(options: { status_code: string | null; data: V1GMonitoredChargingAccountData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GMonitoredChargingAccountStatusResult, __args);  Object.freeze(this); }
/** Return the upstream service's exact business-success interpretation. */
get is_success(): boolean {
/** Return the upstream service's exact business-success interpretation. */
return ($.eq($.attr(this, "status_code"), "1000"));
}
}
$.classType(V1GMonitoredChargingAccountStatusResult);

/** Nullable tokenized URL and VIN returned by V1G. */
export class V1GTokenizedUrlData {
readonly url: string | null;
readonly vin: string | null;
static __fields = [["url", $.MISSING], ["vin", $.MISSING]];
constructor(url: string | null, vin: string | null);
constructor(options: { url: string | null; vin: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GTokenizedUrlData, __args);  Object.freeze(this); }
}
$.classType(V1GTokenizedUrlData);

/** Nullable data wrapper returned by the tokenized-URL query. */
export class V1GTokenizedUrlResult {
readonly data: V1GTokenizedUrlData | null;
static __fields = [["data", $.MISSING]];
constructor(data: V1GTokenizedUrlData | null);
constructor(options: { data: V1GTokenizedUrlData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GTokenizedUrlResult, __args);  Object.freeze(this); }
}
$.classType(V1GTokenizedUrlResult);

/** Nullable account status returned by V1G enrollment. */
export class V1GMonitoredChargingPlanEnrollmentData {
readonly account_status: V1GAccountStatus | null;
static __fields = [["account_status", $.MISSING]];
constructor(account_status: V1GAccountStatus | null);
constructor(options: { account_status: V1GAccountStatus | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GMonitoredChargingPlanEnrollmentData, __args);  Object.freeze(this); }
}
$.classType(V1GMonitoredChargingPlanEnrollmentData);

/** Nullable data wrapper returned by V1G enrollment. */
export class V1GMonitoredChargingPlanEnrollmentResult {
readonly data: V1GMonitoredChargingPlanEnrollmentData | null;
static __fields = [["data", $.MISSING]];
constructor(data: V1GMonitoredChargingPlanEnrollmentData | null);
constructor(options: { data: V1GMonitoredChargingPlanEnrollmentData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GMonitoredChargingPlanEnrollmentResult, __args);  Object.freeze(this); }
}
$.classType(V1GMonitoredChargingPlanEnrollmentResult);

/** Status code returned by V1G monitored-plan cancellation. */
export class V1GMonitoredChargingPlanCancellationResult {
readonly status_code: string | null;
static __fields = [["status_code", $.MISSING]];
constructor(status_code: string | null);
constructor(options: { status_code: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GMonitoredChargingPlanCancellationResult, __args);  Object.freeze(this); }
/** Return the upstream service's exact business-success interpretation. */
get is_success(): boolean {
/** Return the upstream service's exact business-success interpretation. */
return ($.eq($.attr(this, "status_code"), "1000"));
}
}
$.classType(V1GMonitoredChargingPlanCancellationResult);

/** Status envelope and raw preferences returned by a V1G patch. */
export class V1GNotificationPreferencesUpdateResult {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["notification_preferences", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; notification_preferences: ReadonlyArray<V1GNotificationPreference | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V1GNotificationPreferencesUpdateResult, __args);  Object.freeze(this); }
/** Return the upstream service's exact business-success interpretation. */
get is_success(): boolean {
/** Return the upstream service's exact business-success interpretation. */
return ($.eq($.attr(this, "status_code"), "1000"));
}
}
$.classType(V1GNotificationPreferencesUpdateResult);
