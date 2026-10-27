import { _EnergyClientMixin } from "./_energy_client";
export { _EnergyClientMixin };
import { ACCOUNT_STATUS_POLL_INTERVAL_SECONDS, ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS, EnergyAccountPollingOutcome, EnergyAccountStatusResult, account_status_polling_outcome } from "./energy_account_models";
export { ACCOUNT_STATUS_POLL_INTERVAL_SECONDS, ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS, EnergyAccountPollingOutcome, EnergyAccountStatusResult, account_status_polling_outcome };
import { PlugAndChargeServiceState, PlugAndChargeServiceStatus, PublicChargeSessionState, PublicChargeSessionStatus } from "./pnc_models";
export { PlugAndChargeServiceState, PlugAndChargeServiceStatus, PublicChargeSessionState, PublicChargeSessionStatus };
declare const _PollingClientMixin_base: any;
/** Translated upstream _PollingClientMixin. */
export declare class _PollingClientMixin extends _PollingClientMixin_base {
    constructor(...__args: any[]);
    async_wait_for_pnc_service_status(vin: string, desired_state: PlugAndChargeServiceState, options?: {
        poll_interval_seconds?: number;
        timeout_seconds?: number;
    }): Promise<PlugAndChargeServiceStatus | null>;
    async_wait_for_energy_account_status(vin: string, options?: {
        poll_interval_seconds?: number;
        timeout_seconds?: number;
    }): Promise<EnergyAccountStatusResult | null>;
    async_wait_for_public_charge_session_status(vin: string, options?: {
        poll_interval_seconds?: number;
        timeout_seconds?: number;
    }): Promise<PublicChargeSessionStatus | null>;
}
export interface _PollingClientMixin extends _EnergyClientMixin {
}
