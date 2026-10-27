"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports._PollingClientMixin = exports.PublicChargeSessionStatus = exports.PublicChargeSessionState = exports.PlugAndChargeServiceStatus = exports.PlugAndChargeServiceState = exports.account_status_polling_outcome = exports.EnergyAccountStatusResult = exports.EnergyAccountPollingOutcome = exports.ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS = exports.ACCOUNT_STATUS_POLL_INTERVAL_SECONDS = exports._EnergyClientMixin = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const asyncio = _runtime_1.py.asyncio;
const math = _runtime_1.py.math;
const _energy_client_1 = require("./_energy_client");
Object.defineProperty(exports, "_EnergyClientMixin", { enumerable: true, get: function () { return _energy_client_1._EnergyClientMixin; } });
const energy_account_models_1 = require("./energy_account_models");
Object.defineProperty(exports, "ACCOUNT_STATUS_POLL_INTERVAL_SECONDS", { enumerable: true, get: function () { return energy_account_models_1.ACCOUNT_STATUS_POLL_INTERVAL_SECONDS; } });
Object.defineProperty(exports, "ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS", { enumerable: true, get: function () { return energy_account_models_1.ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS; } });
Object.defineProperty(exports, "EnergyAccountPollingOutcome", { enumerable: true, get: function () { return energy_account_models_1.EnergyAccountPollingOutcome; } });
Object.defineProperty(exports, "EnergyAccountStatusResult", { enumerable: true, get: function () { return energy_account_models_1.EnergyAccountStatusResult; } });
Object.defineProperty(exports, "account_status_polling_outcome", { enumerable: true, get: function () { return energy_account_models_1.account_status_polling_outcome; } });
const pnc_models_1 = require("./pnc_models");
Object.defineProperty(exports, "PlugAndChargeServiceState", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeServiceState; } });
Object.defineProperty(exports, "PlugAndChargeServiceStatus", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeServiceStatus; } });
Object.defineProperty(exports, "PublicChargeSessionState", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionState; } });
Object.defineProperty(exports, "PublicChargeSessionStatus", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionStatus; } });
/** Translated upstream _PollingClientMixin. */
class _PollingClientMixin extends _runtime_1.py.mix(_energy_client_1._EnergyClientMixin) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _PollingClientMixin, __args); }
    /** Poll enrollment while it remains in the desired transition state. */
    async async_wait_for_pnc_service_status(...__args) {
        let result, state, transitional_state;
        let { "vin": vin, "desired_state": desired_state, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds } = _runtime_1.py.bind(__args, ["vin", "desired_state"], { "poll_interval_seconds": 3.0, "timeout_seconds": 210.0 }, ["poll_interval_seconds", "timeout_seconds"], null, null);
        /** Poll enrollment while it remains in the desired transition state. */
        if (_runtime_1.py.eq(desired_state, _runtime_1.py.attr(pnc_models_1.PlugAndChargeServiceState, "ENABLED"))) {
            transitional_state = _runtime_1.py.attr(pnc_models_1.PlugAndChargeServiceState, "ENABLING");
        }
        else if (_runtime_1.py.eq(desired_state, _runtime_1.py.attr(pnc_models_1.PlugAndChargeServiceState, "DISABLED"))) {
            transitional_state = _runtime_1.py.attr(pnc_models_1.PlugAndChargeServiceState, "DISABLING");
        }
        else {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["desired_state must be ENABLED or DISABLED"], null);
        }
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
        }
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["timeout_seconds must be a positive finite number"], null);
        }
        return await _runtime_1.py.timeout(timeout_seconds, async () => {
            while (_runtime_1.py.truth(true)) {
                result = (await _runtime_1.py.call(_runtime_1.py.attr(this, "async_get_pnc_service_status"), [vin], null));
                state = (_runtime_1.py.truth(_runtime_1.py.and(() => ((result !== null)), () => ((_runtime_1.py.attr(result, "data") !== null)))) ? _runtime_1.py.attr(_runtime_1.py.attr(result, "data"), "state") : null);
                if (_runtime_1.py.truth(_runtime_1.py.and(() => ((state !== null)), () => ((state !== transitional_state))))) {
                    return result;
                }
                (await _runtime_1.py.call(_runtime_1.py.attr(asyncio, "sleep"), [poll_interval_seconds], null));
            }
        });
    }
    /** Poll Nissan Energy account status until it leaves enrollment transition. */
    async async_wait_for_energy_account_status(...__args) {
        let result;
        let { "vin": vin, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds } = _runtime_1.py.bind(__args, ["vin"], { "poll_interval_seconds": energy_account_models_1.ACCOUNT_STATUS_POLL_INTERVAL_SECONDS, "timeout_seconds": energy_account_models_1.ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS }, ["poll_interval_seconds", "timeout_seconds"], null, null);
        /** Poll Nissan Energy account status until it leaves enrollment transition. */
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
        }
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["timeout_seconds must be a positive finite number"], null);
        }
        return await _runtime_1.py.timeout(timeout_seconds, async () => {
            while (_runtime_1.py.truth(true)) {
                result = (await _runtime_1.py.call(_runtime_1.py.attr(this, "async_get_energy_account_status"), [vin], null));
                if (_runtime_1.py.truth(((_runtime_1.py.call(energy_account_models_1.account_status_polling_outcome, [result], null) === _runtime_1.py.attr(energy_account_models_1.EnergyAccountPollingOutcome, "COMPLETE"))))) {
                    return result;
                }
                (await _runtime_1.py.call(_runtime_1.py.attr(asyncio, "sleep"), [poll_interval_seconds], null));
            }
        });
    }
    /** Poll a public session until it leaves pending or reservation state. */
    async async_wait_for_public_charge_session_status(...__args) {
        let result, state, terminal_states;
        let { "vin": vin, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds } = _runtime_1.py.bind(__args, ["vin"], { "poll_interval_seconds": 3.0, "timeout_seconds": 210.0 }, ["poll_interval_seconds", "timeout_seconds"], null, null);
        /** Poll a public session until it leaves pending or reservation state. */
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
        }
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["timeout_seconds must be a positive finite number"], null);
        }
        terminal_states = new Set([_runtime_1.py.attr(pnc_models_1.PublicChargeSessionState, "ACTIVE"), _runtime_1.py.attr(pnc_models_1.PublicChargeSessionState, "COMPLETED"), _runtime_1.py.attr(pnc_models_1.PublicChargeSessionState, "FAILED")]);
        return await _runtime_1.py.timeout(timeout_seconds, async () => {
            while (_runtime_1.py.truth(true)) {
                result = (await _runtime_1.py.call(_runtime_1.py.attr(this, "async_get_public_charge_session_status"), [vin], null));
                if (_runtime_1.py.truth(_runtime_1.py.or(() => ((result === null)), () => ((_runtime_1.py.attr(result, "data") === null))))) {
                    return null;
                }
                state = _runtime_1.py.attr(_runtime_1.py.attr(result, "data"), "status");
                if (_runtime_1.py.truth(_runtime_1.py.or(() => ((state === null)), () => (_runtime_1.py.contains(terminal_states, state))))) {
                    return result;
                }
                (await _runtime_1.py.call(_runtime_1.py.attr(asyncio, "sleep"), [poll_interval_seconds], null));
            }
        });
    }
}
exports._PollingClientMixin = _PollingClientMixin;
_runtime_1.py.classType(_PollingClientMixin);
//# sourceMappingURL=_polling_client.js.map