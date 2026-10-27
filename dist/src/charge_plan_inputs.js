"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.charge_product_variables = charge_product_variables;
exports.pricing_details_variables = pricing_details_variables;
exports.enroll_charge_plan_variables = enroll_charge_plan_variables;
exports.cancel_charge_plan_variables = cancel_charge_plan_variables;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
/** Serialize the required vehicle identity for ChargeProduct. */
function charge_product_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required vehicle identity for ChargeProduct. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize the required vehicle and charging-location identities. */
function pricing_details_variables(...__args) {
    let { "vin": vin, "location_id": location_id } = _runtime_1.py.bind(__args, ["vin", "location_id"], {}, [], null, null);
    /** Serialize the required vehicle and charging-location identities. */
    return Object.assign({}, { ["locationId"]: location_id }, { ["vin"]: vin });
}
/** Serialize the complete non-null EMP charge-plan enrollment input. */
function enroll_charge_plan_variables(...__args) {
    let { "vin": vin, "product_sku": product_sku, "model": model, "year": year } = _runtime_1.py.bind(__args, ["vin", "product_sku", "model", "year"], {}, [], null, null);
    /** Serialize the complete non-null EMP charge-plan enrollment input. */
    return Object.assign({}, { ["config"]: Object.assign({}, { ["vin"]: vin }, { ["productSku"]: product_sku }, { ["model"]: model }, { ["year"]: year }) });
}
/** Serialize the required EMP charge-plan cancellation input. */
function cancel_charge_plan_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required EMP charge-plan cancellation input. */
    return Object.assign({}, { ["config"]: Object.assign({}, { ["vin"]: vin }) });
}
//# sourceMappingURL=charge_plan_inputs.js.map