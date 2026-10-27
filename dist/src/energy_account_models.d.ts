import { py as $ } from "./_runtime";
import { ChargePlanAccountStatus } from "./charge_plan_models";
export { ChargePlanAccountStatus };
export declare let EnergyAccountStatus: $.EnumType<{
    readonly PENDING: "PENDING";
    readonly FAILED: "FAILED";
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly CANCELLED: "CANCELLED";
    readonly CLOSED: "CLOSED";
    readonly ENROLLING: "ENROLLING";
    readonly NOT_ENROLLED: "NOT_ENROLLED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EnergyAccountStatus = ChargePlanAccountStatus;
export declare let ACCOUNT_STATUS_POLL_INTERVAL_SECONDS: number;
export declare let ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS: number;
export declare const EnergyAccountStatusReason: $.EnumType<{
    readonly DECLINED_PAYMENT: "DECLINED_PAYMENT";
    readonly SVT: "SVT";
    readonly INVALID_PAYMENT: "INVALID_PAYMENT";
    readonly NA: "NA";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EnergyAccountStatusReason = ReturnType<typeof EnergyAccountStatusReason>;
export declare const EnergyPncStatus: $.EnumType<{
    readonly PENDING: "PENDING";
    readonly INSTALLING: "INSTALLING";
    readonly READY: "READY";
    readonly FAILED: "FAILED";
    readonly NA: "NA";
    readonly RENEWING: "RENEWING";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EnergyPncStatus = ReturnType<typeof EnergyPncStatus>;
export declare const EnergyToggleStatus: $.EnumType<{
    readonly ENABLING: "ENABLING";
    readonly ENABLED: "ENABLED";
    readonly DISABLING: "DISABLING";
    readonly DISABLED: "DISABLED";
    readonly PENDING: "PENDING";
    readonly NA: "NA";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EnergyToggleStatus = ReturnType<typeof EnergyToggleStatus>;
export declare const EnergyNacsStatus: $.EnumType<{
    readonly ACTIVE: "ACTIVE";
    readonly IN_ACTIVE: "IN_ACTIVE";
    readonly NOT_APPLICABLE: "NOT_APPLICABLE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EnergyNacsStatus = ReturnType<typeof EnergyNacsStatus>;
export declare const EnergyAccountPollingOutcome: $.EnumType<{
    readonly RETRY: "RETRY";
    readonly COMPLETE: "COMPLETE";
}>;
export type EnergyAccountPollingOutcome = ReturnType<typeof EnergyAccountPollingOutcome>;
/** Nullable identity fields for one account charging connector. */
export declare class EnergyAccountConnector {
    readonly id: string | null;
    readonly connector_name: string | null;
    static __fields: (string | symbol)[][];
    constructor(id: string | null, connector_name: string | null);
    constructor(options: {
        id: string | null;
        connector_name: string | null;
    });
}
/** Nullable Nissan Energy enrollment and connector details. */
export declare class EnergyAccountData {
    readonly status: EnergyAccountStatus | null;
    readonly status_reason: EnergyAccountStatusReason | null;
    readonly pnc_status: EnergyPncStatus | null;
    readonly pnc_status_reason: string | null;
    readonly toggle_status: EnergyToggleStatus | null;
    readonly nacs_status: EnergyNacsStatus | null;
    readonly connectors: ReadonlyArray<EnergyAccountConnector | null> | null;
    static __fields: (string | symbol)[][];
    constructor(status: EnergyAccountStatus | null, status_reason: EnergyAccountStatusReason | null, pnc_status: EnergyPncStatus | null, pnc_status_reason: string | null, toggle_status: EnergyToggleStatus | null, nacs_status: EnergyNacsStatus | null, connectors: ReadonlyArray<EnergyAccountConnector | null> | null);
    constructor(options: {
        status: EnergyAccountStatus | null;
        status_reason: EnergyAccountStatusReason | null;
        pnc_status: EnergyPncStatus | null;
        pnc_status_reason: string | null;
        toggle_status: EnergyToggleStatus | null;
        nacs_status: EnergyNacsStatus | null;
        connectors: ReadonlyArray<EnergyAccountConnector | null> | null;
    });
}
/** Status envelope returned by the AccountStatus query. */
export declare class EnergyAccountStatusResult {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: EnergyAccountData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: EnergyAccountData | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: EnergyAccountData | null;
    });
}
export declare function account_status_polling_outcome(result: EnergyAccountStatusResult | null): EnergyAccountPollingOutcome;
