// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const asyncio = $.asyncio;

const math = $.math;

import { _EnergyClientMixin } from "./_energy_client";
export { _EnergyClientMixin };

import { ACCOUNT_STATUS_POLL_INTERVAL_SECONDS, ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS, EnergyAccountPollingOutcome, EnergyAccountStatusResult, account_status_polling_outcome } from "./energy_account_models";
export { ACCOUNT_STATUS_POLL_INTERVAL_SECONDS, ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS, EnergyAccountPollingOutcome, EnergyAccountStatusResult, account_status_polling_outcome };

import { PlugAndChargeServiceState, PlugAndChargeServiceStatus, PublicChargeSessionState, PublicChargeSessionStatus } from "./pnc_models";
export { PlugAndChargeServiceState, PlugAndChargeServiceStatus, PublicChargeSessionState, PublicChargeSessionStatus };

/** Translated upstream _PollingClientMixin. */
export class _PollingClientMixin extends $.mix(_EnergyClientMixin) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _PollingClientMixin, __args); }
async_wait_for_pnc_service_status(vin: string, desired_state: PlugAndChargeServiceState, options?: { poll_interval_seconds?: number; timeout_seconds?: number }): Promise<PlugAndChargeServiceStatus | null>;
/** Poll enrollment while it remains in the desired transition state. */
async async_wait_for_pnc_service_status(...__args: any[]): any {
let result, state, transitional_state;
let {"vin": vin, "desired_state": desired_state, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds} = $.bind(__args, ["vin", "desired_state"], {"poll_interval_seconds": 3.0, "timeout_seconds": 210.0}, ["poll_interval_seconds", "timeout_seconds"], null, null);
/** Poll enrollment while it remains in the desired transition state. */
if ($.eq(desired_state, $.attr(PlugAndChargeServiceState, "ENABLED"))) {
transitional_state = $.attr(PlugAndChargeServiceState, "ENABLING");
} else if ($.eq(desired_state, $.attr(PlugAndChargeServiceState, "DISABLED"))) {
transitional_state = $.attr(PlugAndChargeServiceState, "DISABLING");
} else {
throw $.call($.ValueError, ["desired_state must be ENABLED or DISABLED"], null);
}
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
throw $.call($.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
}
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
throw $.call($.ValueError, ["timeout_seconds must be a positive finite number"], null);
}
return await $.timeout(timeout_seconds, async () => {
while ($.truth(true)) {
result = (await $.call($.attr(this, "async_get_pnc_service_status"), [vin], null));
state = ($.truth($.and(() => ((result !== null)), () => (($.attr(result, "data") !== null)))) ? $.attr($.attr(result, "data"), "state") : null);
if ($.truth($.and(() => ((state !== null)), () => ((state !== transitional_state))))) {
return result;
}
(await $.call($.attr(asyncio, "sleep"), [poll_interval_seconds], null));
}
});
}
async_wait_for_energy_account_status(vin: string, options?: { poll_interval_seconds?: number; timeout_seconds?: number }): Promise<EnergyAccountStatusResult | null>;
/** Poll Nissan Energy account status until it leaves enrollment transition. */
async async_wait_for_energy_account_status(...__args: any[]): any {
let result;
let {"vin": vin, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds} = $.bind(__args, ["vin"], {"poll_interval_seconds": ACCOUNT_STATUS_POLL_INTERVAL_SECONDS, "timeout_seconds": ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS}, ["poll_interval_seconds", "timeout_seconds"], null, null);
/** Poll Nissan Energy account status until it leaves enrollment transition. */
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
throw $.call($.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
}
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
throw $.call($.ValueError, ["timeout_seconds must be a positive finite number"], null);
}
return await $.timeout(timeout_seconds, async () => {
while ($.truth(true)) {
result = (await $.call($.attr(this, "async_get_energy_account_status"), [vin], null));
if ($.truth((($.call(account_status_polling_outcome, [result], null) === $.attr(EnergyAccountPollingOutcome, "COMPLETE"))))) {
return result;
}
(await $.call($.attr(asyncio, "sleep"), [poll_interval_seconds], null));
}
});
}
async_wait_for_public_charge_session_status(vin: string, options?: { poll_interval_seconds?: number; timeout_seconds?: number }): Promise<PublicChargeSessionStatus | null>;
/** Poll a public session until it leaves pending or reservation state. */
async async_wait_for_public_charge_session_status(...__args: any[]): any {
let result, state, terminal_states;
let {"vin": vin, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds} = $.bind(__args, ["vin"], {"poll_interval_seconds": 3.0, "timeout_seconds": 210.0}, ["poll_interval_seconds", "timeout_seconds"], null, null);
/** Poll a public session until it leaves pending or reservation state. */
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
throw $.call($.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
}
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
throw $.call($.ValueError, ["timeout_seconds must be a positive finite number"], null);
}
terminal_states = new Set([$.attr(PublicChargeSessionState, "ACTIVE"), $.attr(PublicChargeSessionState, "COMPLETED"), $.attr(PublicChargeSessionState, "FAILED")]);
return await $.timeout(timeout_seconds, async () => {
while ($.truth(true)) {
result = (await $.call($.attr(this, "async_get_public_charge_session_status"), [vin], null));
if ($.truth($.or(() => ((result === null)), () => (($.attr(result, "data") === null))))) {
return null;
}
state = $.attr($.attr(result, "data"), "status");
if ($.truth($.or(() => ((state === null)), () => ($.contains(terminal_states, state))))) {
return result;
}
(await $.call($.attr(asyncio, "sleep"), [poll_interval_seconds], null));
}
});
}
}
$.classType(_PollingClientMixin);
export interface _PollingClientMixin extends _EnergyClientMixin {}
