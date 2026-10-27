// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

export const PlugAndChargeStatusInput = $.enumType("PlugAndChargeStatusInput", {"ENABLE": "ENABLE", "DISABLE": "DISABLE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type PlugAndChargeStatusInput = ReturnType<typeof PlugAndChargeStatusInput>;

export const PlugAndChargeServiceState = $.enumType("PlugAndChargeServiceState", {"PENDING": "PENDING", "ENABLING": "ENABLING", "ENABLED": "ENABLED", "DISABLING": "DISABLING", "DISABLED": "DISABLED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type PlugAndChargeServiceState = ReturnType<typeof PlugAndChargeServiceState>;

export const PublicChargeSessionState = $.enumType("PublicChargeSessionState", {"ACTIVE": "ACTIVE", "COMPLETED": "COMPLETED", "FAILED": "FAILED", "PENDING": "PENDING", "RESERVATION": "RESERVATION", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type PublicChargeSessionState = ReturnType<typeof PublicChargeSessionState>;

export const PlugAndChargeUpdateOutcome = $.enumType("PlugAndChargeUpdateOutcome", {"SUCCESS": "SUCCESS", "PENDING": "PENDING", "FAILED": "FAILED", "DISABLE_ERROR": "DISABLE_ERROR", "UNKNOWN": "UNKNOWN"}, true);
export type PlugAndChargeUpdateOutcome = ReturnType<typeof PlugAndChargeUpdateOutcome>;

export const PublicChargeSessionStopOutcome = $.enumType("PublicChargeSessionStopOutcome", {"SUCCESS": "SUCCESS", "FAILED": "FAILED", "UNEXPECTED_ERROR": "UNEXPECTED_ERROR", "UNKNOWN": "UNKNOWN"}, true);
export type PublicChargeSessionStopOutcome = ReturnType<typeof PublicChargeSessionStopOutcome>;

export const PlugAndChargeCertificateRetryOutcome = $.enumType("PlugAndChargeCertificateRetryOutcome", {"SUCCESS": "SUCCESS", "FAILED": "FAILED", "UNKNOWN": "UNKNOWN"}, true);
export type PlugAndChargeCertificateRetryOutcome = ReturnType<typeof PlugAndChargeCertificateRetryOutcome>;

/** Nullable vehicle and enrollment fields in a Plug & Charge response. */
export class PlugAndChargeServiceData {
readonly vin: string | null;
readonly state: PlugAndChargeServiceState | null;
static __fields = [["vin", $.MISSING], ["state", $.MISSING]];
constructor(vin: string | null, state: PlugAndChargeServiceState | null);
constructor(options: { vin: string | null; state: PlugAndChargeServiceState | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PlugAndChargeServiceData, __args);  Object.freeze(this); }
}
$.classType(PlugAndChargeServiceData);

/** Status envelope returned by Plug & Charge reads and updates. */
export class PlugAndChargeServiceStatus {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: PlugAndChargeServiceData | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: PlugAndChargeServiceData | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: PlugAndChargeServiceData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PlugAndChargeServiceStatus, __args);  Object.freeze(this); }
update_outcome(requested_status: PlugAndChargeStatusInput): PlugAndChargeUpdateOutcome;
/** Interpret this response relative to the requested enrollment state. */
update_outcome(...__args: any[]): any {
let state, terminal_state, transitional_state;
let {"requested_status": requested_status} = $.bind(__args, ["requested_status"], {}, [], null, null);
/** Interpret this response relative to the requested enrollment state. */
if ($.eq(requested_status, $.attr(PlugAndChargeStatusInput, "ENABLE"))) {
terminal_state = $.attr(PlugAndChargeServiceState, "ENABLED");
transitional_state = $.attr(PlugAndChargeServiceState, "ENABLING");
} else if ($.eq(requested_status, $.attr(PlugAndChargeStatusInput, "DISABLE"))) {
terminal_state = $.attr(PlugAndChargeServiceState, "DISABLED");
transitional_state = $.attr(PlugAndChargeServiceState, "DISABLING");
} else {
throw $.call($.ValueError, ["UNKNOWN_VALUE cannot be sent as a GraphQL input"], null);
}
state = ($.truth((($.attr(this, "data") !== null))) ? $.attr($.attr(this, "data"), "state") : null);
if ($.truth($.and(() => ((state === null)), () => ($.eq($.attr(this, "status_code"), "2004"))))) {
return $.attr(PlugAndChargeUpdateOutcome, "DISABLE_ERROR");
}
if ($.truth(((state === null)))) {
return $.attr(PlugAndChargeUpdateOutcome, "UNKNOWN");
}
if ($.truth(((state === terminal_state)))) {
return $.attr(PlugAndChargeUpdateOutcome, "SUCCESS");
}
if ($.truth(((state === transitional_state)))) {
return $.attr(PlugAndChargeUpdateOutcome, "PENDING");
}
return $.attr(PlugAndChargeUpdateOutcome, "FAILED");
}
}
$.classType(PlugAndChargeServiceStatus);

/** Nullable details returned after starting a public charging session. */
export class PublicChargeSessionStartData {
readonly vin: string | null;
readonly evse_id: string | null;
readonly status: PublicChargeSessionState | null;
readonly message: string | null;
readonly stop_session_allowed: boolean | null;
static __fields = [["vin", $.MISSING], ["evse_id", $.MISSING], ["status", $.MISSING], ["message", $.MISSING], ["stop_session_allowed", $.MISSING]];
constructor(vin: string | null, evse_id: string | null, status: PublicChargeSessionState | null, message: string | null, stop_session_allowed: boolean | null);
constructor(options: { vin: string | null; evse_id: string | null; status: PublicChargeSessionState | null; message: string | null; stop_session_allowed: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PublicChargeSessionStartData, __args);  Object.freeze(this); }
}
$.classType(PublicChargeSessionStartData);

/** Status envelope returned by the public-session start mutation. */
export class PublicChargeSessionStartResult {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: PublicChargeSessionStartData | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: PublicChargeSessionStartData | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: PublicChargeSessionStartData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PublicChargeSessionStartResult, __args);  Object.freeze(this); }
}
$.classType(PublicChargeSessionStartResult);

/** Status envelope returned by the public-session stop mutation. */
export class PublicChargeSessionStopResult {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PublicChargeSessionStopResult, __args);  Object.freeze(this); }
/** Return the upstream service's interpretation of the EMP status code. */
get outcome(): PublicChargeSessionStopOutcome {
/** Return the upstream service's interpretation of the EMP status code. */
if ($.truth(($.eq($.attr(this, "status_code"), "1000")))) {
return $.attr(PublicChargeSessionStopOutcome, "SUCCESS");
}
if ($.truth(($.contains(new Set(["3026", "3028"]), $.attr(this, "status_code"))))) {
return $.attr(PublicChargeSessionStopOutcome, "FAILED");
}
if ($.truth(($.contains(new Set(["3027", "3029", "4011", "4014", "5000"]), $.attr(this, "status_code"))))) {
return $.attr(PublicChargeSessionStopOutcome, "UNEXPECTED_ERROR");
}
return $.attr(PublicChargeSessionStopOutcome, "UNKNOWN");
}
}
$.classType(PublicChargeSessionStopResult);

/** Nullable string coordinates reported for a public charging session. */
export class PublicChargeLocationCoordinates {
readonly latitude: string | null;
readonly longitude: string | null;
static __fields = [["latitude", $.MISSING], ["longitude", $.MISSING]];
constructor(latitude: string | null, longitude: string | null);
constructor(options: { latitude: string | null; longitude: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PublicChargeLocationCoordinates, __args);  Object.freeze(this); }
}
$.classType(PublicChargeLocationCoordinates);

/** Nullable details for the current Nissan Energy charging session. */
export class PublicChargeSessionData {
readonly session_uid: string | null;
readonly status: PublicChargeSessionState | null;
readonly message: string | null;
readonly stop_session_allowed: boolean | null;
readonly cpo_name: string | null;
readonly physical_reference: string | null;
readonly location_address: string | null;
readonly location_city: string | null;
readonly location_state: string | null;
readonly location_coordinates: PublicChargeLocationCoordinates | null;
static __fields = [["session_uid", $.MISSING], ["status", $.MISSING], ["message", $.MISSING], ["stop_session_allowed", $.MISSING], ["cpo_name", $.MISSING], ["physical_reference", $.MISSING], ["location_address", $.MISSING], ["location_city", $.MISSING], ["location_state", $.MISSING], ["location_coordinates", $.MISSING]];
constructor(session_uid: string | null, status: PublicChargeSessionState | null, message: string | null, stop_session_allowed: boolean | null, cpo_name: string | null, physical_reference: string | null, location_address: string | null, location_city: string | null, location_state: string | null, location_coordinates: PublicChargeLocationCoordinates | null);
constructor(options: { session_uid: string | null; status: PublicChargeSessionState | null; message: string | null; stop_session_allowed: boolean | null; cpo_name: string | null; physical_reference: string | null; location_address: string | null; location_city: string | null; location_state: string | null; location_coordinates: PublicChargeLocationCoordinates | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PublicChargeSessionData, __args);  Object.freeze(this); }
}
$.classType(PublicChargeSessionData);

/** Status envelope for the current Nissan Energy charging session. */
export class PublicChargeSessionStatus {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: PublicChargeSessionData | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: PublicChargeSessionData | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: PublicChargeSessionData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PublicChargeSessionStatus, __args);  Object.freeze(this); }
}
$.classType(PublicChargeSessionStatus);

/** Nullable EMP status code returned by certificate-install retry. */
export class PlugAndChargeCertificateRetryResult {
readonly status_code: string | null;
static __fields = [["status_code", $.MISSING]];
constructor(status_code: string | null);
constructor(options: { status_code: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PlugAndChargeCertificateRetryResult, __args);  Object.freeze(this); }
/** Return the upstream service's interpretation of certificate-retry status. */
get outcome(): PlugAndChargeCertificateRetryOutcome {
/** Return the upstream service's interpretation of certificate-retry status. */
if ($.truth(($.eq($.attr(this, "status_code"), "1000")))) {
return $.attr(PlugAndChargeCertificateRetryOutcome, "SUCCESS");
}
if ($.truth(($.contains(new Set([null, "", "2024", "2028", "2029", "2030", "4011", "5000"]), $.attr(this, "status_code"))))) {
return $.attr(PlugAndChargeCertificateRetryOutcome, "FAILED");
}
return $.attr(PlugAndChargeCertificateRetryOutcome, "UNKNOWN");
}
}
$.classType(PlugAndChargeCertificateRetryResult);
