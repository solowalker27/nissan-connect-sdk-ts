// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

const Final = $.Final;

import { ChargePlanAccountStatus } from "./charge_plan_models";
export { ChargePlanAccountStatus };

export let EnergyAccountStatus = ChargePlanAccountStatus;
export type EnergyAccountStatus = ChargePlanAccountStatus;

export let ACCOUNT_STATUS_POLL_INTERVAL_SECONDS = 2.0;

export let ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS = 210.0;

export const EnergyAccountStatusReason = $.enumType("EnergyAccountStatusReason", {"DECLINED_PAYMENT": "DECLINED_PAYMENT", "SVT": "SVT", "INVALID_PAYMENT": "INVALID_PAYMENT", "NA": "NA", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EnergyAccountStatusReason = ReturnType<typeof EnergyAccountStatusReason>;

export const EnergyPncStatus = $.enumType("EnergyPncStatus", {"PENDING": "PENDING", "INSTALLING": "INSTALLING", "READY": "READY", "FAILED": "FAILED", "NA": "NA", "RENEWING": "RENEWING", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EnergyPncStatus = ReturnType<typeof EnergyPncStatus>;

export const EnergyToggleStatus = $.enumType("EnergyToggleStatus", {"ENABLING": "ENABLING", "ENABLED": "ENABLED", "DISABLING": "DISABLING", "DISABLED": "DISABLED", "PENDING": "PENDING", "NA": "NA", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EnergyToggleStatus = ReturnType<typeof EnergyToggleStatus>;

export const EnergyNacsStatus = $.enumType("EnergyNacsStatus", {"ACTIVE": "ACTIVE", "IN_ACTIVE": "IN_ACTIVE", "NOT_APPLICABLE": "NOT_APPLICABLE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EnergyNacsStatus = ReturnType<typeof EnergyNacsStatus>;

export const EnergyAccountPollingOutcome = $.enumType("EnergyAccountPollingOutcome", {"RETRY": "RETRY", "COMPLETE": "COMPLETE"}, true);
export type EnergyAccountPollingOutcome = ReturnType<typeof EnergyAccountPollingOutcome>;

/** Nullable identity fields for one account charging connector. */
export class EnergyAccountConnector {
readonly id: string | null;
readonly connector_name: string | null;
static __fields = [["id", $.MISSING], ["connector_name", $.MISSING]];
constructor(id: string | null, connector_name: string | null);
constructor(options: { id: string | null; connector_name: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EnergyAccountConnector, __args);  Object.freeze(this); }
}
$.classType(EnergyAccountConnector);

/** Nullable Nissan Energy enrollment and connector details. */
export class EnergyAccountData {
readonly status: EnergyAccountStatus | null;
readonly status_reason: EnergyAccountStatusReason | null;
readonly pnc_status: EnergyPncStatus | null;
readonly pnc_status_reason: string | null;
readonly toggle_status: EnergyToggleStatus | null;
readonly nacs_status: EnergyNacsStatus | null;
readonly connectors: ReadonlyArray<EnergyAccountConnector | null> | null;
static __fields = [["status", $.MISSING], ["status_reason", $.MISSING], ["pnc_status", $.MISSING], ["pnc_status_reason", $.MISSING], ["toggle_status", $.MISSING], ["nacs_status", $.MISSING], ["connectors", $.MISSING]];
constructor(status: EnergyAccountStatus | null, status_reason: EnergyAccountStatusReason | null, pnc_status: EnergyPncStatus | null, pnc_status_reason: string | null, toggle_status: EnergyToggleStatus | null, nacs_status: EnergyNacsStatus | null, connectors: ReadonlyArray<EnergyAccountConnector | null> | null);
constructor(options: { status: EnergyAccountStatus | null; status_reason: EnergyAccountStatusReason | null; pnc_status: EnergyPncStatus | null; pnc_status_reason: string | null; toggle_status: EnergyToggleStatus | null; nacs_status: EnergyNacsStatus | null; connectors: ReadonlyArray<EnergyAccountConnector | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EnergyAccountData, __args);  Object.freeze(this); }
}
$.classType(EnergyAccountData);

/** Status envelope returned by the AccountStatus query. */
export class EnergyAccountStatusResult {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: EnergyAccountData | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: EnergyAccountData | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: EnergyAccountData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EnergyAccountStatusResult, __args);  Object.freeze(this); }
}
$.classType(EnergyAccountStatusResult);

export function account_status_polling_outcome(result: EnergyAccountStatusResult | null): EnergyAccountPollingOutcome;
/** Return whether the upstream service would repeat or finish account-status polling. */
export function account_status_polling_outcome(...__args: any[]): any {
let {"result": result} = $.bind(__args, ["result"], {}, [], null, null);
/** Return whether the upstream service would repeat or finish account-status polling. */
if ($.truth($.or(() => ((result === null)), () => (($.attr(result, "data") === null))))) {
return $.attr(EnergyAccountPollingOutcome, "RETRY");
}
if ($.truth($.or(() => (($.attr($.attr(result, "data"), "status") === null)), () => (($.attr($.attr(result, "data"), "status") === $.attr(EnergyAccountStatus, "ENROLLING")))))) {
return $.attr(EnergyAccountPollingOutcome, "RETRY");
}
return $.attr(EnergyAccountPollingOutcome, "COMPLETE");
}
