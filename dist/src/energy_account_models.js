"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnergyAccountStatusResult = exports.EnergyAccountData = exports.EnergyAccountConnector = exports.EnergyAccountPollingOutcome = exports.EnergyNacsStatus = exports.EnergyToggleStatus = exports.EnergyPncStatus = exports.EnergyAccountStatusReason = exports.ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS = exports.ACCOUNT_STATUS_POLL_INTERVAL_SECONDS = exports.EnergyAccountStatus = exports.ChargePlanAccountStatus = void 0;
exports.account_status_polling_outcome = account_status_polling_outcome;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
const Final = _runtime_1.py.Final;
const charge_plan_models_1 = require("./charge_plan_models");
Object.defineProperty(exports, "ChargePlanAccountStatus", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanAccountStatus; } });
exports.EnergyAccountStatus = charge_plan_models_1.ChargePlanAccountStatus;
exports.ACCOUNT_STATUS_POLL_INTERVAL_SECONDS = 2.0;
exports.ACCOUNT_STATUS_POLL_TIMEOUT_SECONDS = 210.0;
exports.EnergyAccountStatusReason = _runtime_1.py.enumType("EnergyAccountStatusReason", { "DECLINED_PAYMENT": "DECLINED_PAYMENT", "SVT": "SVT", "INVALID_PAYMENT": "INVALID_PAYMENT", "NA": "NA", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.EnergyPncStatus = _runtime_1.py.enumType("EnergyPncStatus", { "PENDING": "PENDING", "INSTALLING": "INSTALLING", "READY": "READY", "FAILED": "FAILED", "NA": "NA", "RENEWING": "RENEWING", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.EnergyToggleStatus = _runtime_1.py.enumType("EnergyToggleStatus", { "ENABLING": "ENABLING", "ENABLED": "ENABLED", "DISABLING": "DISABLING", "DISABLED": "DISABLED", "PENDING": "PENDING", "NA": "NA", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.EnergyNacsStatus = _runtime_1.py.enumType("EnergyNacsStatus", { "ACTIVE": "ACTIVE", "IN_ACTIVE": "IN_ACTIVE", "NOT_APPLICABLE": "NOT_APPLICABLE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.EnergyAccountPollingOutcome = _runtime_1.py.enumType("EnergyAccountPollingOutcome", { "RETRY": "RETRY", "COMPLETE": "COMPLETE" }, true);
/** Nullable identity fields for one account charging connector. */
class EnergyAccountConnector {
    id;
    connector_name;
    static __fields = [["id", _runtime_1.py.MISSING], ["connector_name", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EnergyAccountConnector, __args); Object.freeze(this); }
}
exports.EnergyAccountConnector = EnergyAccountConnector;
_runtime_1.py.classType(EnergyAccountConnector);
/** Nullable Nissan Energy enrollment and connector details. */
class EnergyAccountData {
    status;
    status_reason;
    pnc_status;
    pnc_status_reason;
    toggle_status;
    nacs_status;
    connectors;
    static __fields = [["status", _runtime_1.py.MISSING], ["status_reason", _runtime_1.py.MISSING], ["pnc_status", _runtime_1.py.MISSING], ["pnc_status_reason", _runtime_1.py.MISSING], ["toggle_status", _runtime_1.py.MISSING], ["nacs_status", _runtime_1.py.MISSING], ["connectors", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EnergyAccountData, __args); Object.freeze(this); }
}
exports.EnergyAccountData = EnergyAccountData;
_runtime_1.py.classType(EnergyAccountData);
/** Status envelope returned by the AccountStatus query. */
class EnergyAccountStatusResult {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EnergyAccountStatusResult, __args); Object.freeze(this); }
}
exports.EnergyAccountStatusResult = EnergyAccountStatusResult;
_runtime_1.py.classType(EnergyAccountStatusResult);
/** Return whether the upstream service would repeat or finish account-status polling. */
function account_status_polling_outcome(...__args) {
    let { "result": result } = _runtime_1.py.bind(__args, ["result"], {}, [], null, null);
    /** Return whether the upstream service would repeat or finish account-status polling. */
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((result === null)), () => ((_runtime_1.py.attr(result, "data") === null))))) {
        return _runtime_1.py.attr(exports.EnergyAccountPollingOutcome, "RETRY");
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((_runtime_1.py.attr(_runtime_1.py.attr(result, "data"), "status") === null)), () => ((_runtime_1.py.attr(_runtime_1.py.attr(result, "data"), "status") === _runtime_1.py.attr(exports.EnergyAccountStatus, "ENROLLING")))))) {
        return _runtime_1.py.attr(exports.EnergyAccountPollingOutcome, "RETRY");
    }
    return _runtime_1.py.attr(exports.EnergyAccountPollingOutcome, "COMPLETE");
}
//# sourceMappingURL=energy_account_models.js.map