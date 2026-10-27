"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargePlanCancellationResult = exports.ChargePlanEnrollmentResult = exports.ChargePlanEnrollmentData = exports.ChargePlanPricingDetails = exports.ChargePlanPricingEvse = exports.ChargePlanPricingConnector = exports.ChargeProductResult = exports.ChargeProductData = exports.ChargePlanCancellationOutcome = exports.ChargePlanAccountStatus = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
exports.ChargePlanAccountStatus = _runtime_1.py.enumType("ChargePlanAccountStatus", { "PENDING": "PENDING", "FAILED": "FAILED", "ACTIVE": "ACTIVE", "INACTIVE": "INACTIVE", "CANCELLED": "CANCELLED", "CLOSED": "CLOSED", "ENROLLING": "ENROLLING", "NOT_ENROLLED": "NOT_ENROLLED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.ChargePlanCancellationOutcome = _runtime_1.py.enumType("ChargePlanCancellationOutcome", { "SUCCESS": "SUCCESS", "FAILED": "FAILED", "UNKNOWN": "UNKNOWN" }, true);
/** Nullable EMP product fields available for charge-plan enrollment. */
class ChargeProductData {
    product_sku;
    price;
    description;
    static __fields = [["product_sku", _runtime_1.py.MISSING], ["price", _runtime_1.py.MISSING], ["description", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargeProductData, __args); Object.freeze(this); }
}
exports.ChargeProductData = ChargeProductData;
_runtime_1.py.classType(ChargeProductData);
/** Status envelope returned by the ChargeProduct query. */
class ChargeProductResult {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargeProductResult, __args); Object.freeze(this); }
}
exports.ChargeProductResult = ChargeProductResult;
_runtime_1.py.classType(ChargeProductResult);
/** Nullable tariff fields for one charging connector. */
class ChargePlanPricingConnector {
    connector_id;
    tariff;
    static __fields = [["connector_id", _runtime_1.py.MISSING], ["tariff", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargePlanPricingConnector, __args); Object.freeze(this); }
}
exports.ChargePlanPricingConnector = ChargePlanPricingConnector;
_runtime_1.py.classType(ChargePlanPricingConnector);
/** Nullable connector collection for one pricing EVSE. */
class ChargePlanPricingEvse {
    connectors;
    static __fields = [["connectors", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargePlanPricingEvse, __args); Object.freeze(this); }
}
exports.ChargePlanPricingEvse = ChargePlanPricingEvse;
_runtime_1.py.classType(ChargePlanPricingEvse);
/** Nullable fees and EVSE tariffs returned for a charging location. */
class ChargePlanPricingDetails {
    parking_tariff;
    flat_fee;
    congestion_fee;
    evses;
    static __fields = [["parking_tariff", _runtime_1.py.MISSING], ["flat_fee", _runtime_1.py.MISSING], ["congestion_fee", _runtime_1.py.MISSING], ["evses", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargePlanPricingDetails, __args); Object.freeze(this); }
}
exports.ChargePlanPricingDetails = ChargePlanPricingDetails;
_runtime_1.py.classType(ChargePlanPricingDetails);
/** Nullable vehicle and account status returned after enrollment. */
class ChargePlanEnrollmentData {
    vin;
    status;
    static __fields = [["vin", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargePlanEnrollmentData, __args); Object.freeze(this); }
}
exports.ChargePlanEnrollmentData = ChargePlanEnrollmentData;
_runtime_1.py.classType(ChargePlanEnrollmentData);
/** Status envelope returned by the charge-plan enrollment mutation. */
class ChargePlanEnrollmentResult {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargePlanEnrollmentResult, __args); Object.freeze(this); }
}
exports.ChargePlanEnrollmentResult = ChargePlanEnrollmentResult;
_runtime_1.py.classType(ChargePlanEnrollmentResult);
/** Status envelope returned by the charge-plan cancellation mutation. */
class ChargePlanCancellationResult {
    status_code;
    status_message;
    timestamp;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargePlanCancellationResult, __args); Object.freeze(this); }
    /** Return the upstream service's interpretation of the EMP status code. */
    get outcome() {
        /** Return the upstream service's interpretation of the EMP status code. */
        if (_runtime_1.py.truth((_runtime_1.py.eq(_runtime_1.py.attr(this, "status_code"), "1000")))) {
            return _runtime_1.py.attr(exports.ChargePlanCancellationOutcome, "SUCCESS");
        }
        if (_runtime_1.py.truth((_runtime_1.py.eq(_runtime_1.py.attr(this, "status_code"), "5000")))) {
            return _runtime_1.py.attr(exports.ChargePlanCancellationOutcome, "FAILED");
        }
        return _runtime_1.py.attr(exports.ChargePlanCancellationOutcome, "UNKNOWN");
    }
}
exports.ChargePlanCancellationResult = ChargePlanCancellationResult;
_runtime_1.py.classType(ChargePlanCancellationResult);
//# sourceMappingURL=charge_plan_models.js.map