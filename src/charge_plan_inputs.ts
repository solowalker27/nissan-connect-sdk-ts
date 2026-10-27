// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



export function charge_product_variables(vin: string): Record<string, unknown>;
/** Serialize the required vehicle identity for ChargeProduct. */
export function charge_product_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required vehicle identity for ChargeProduct. */
return Object.assign({}, {["vin"]: vin});
}

export function pricing_details_variables(vin: string, location_id: string): Record<string, unknown>;
/** Serialize the required vehicle and charging-location identities. */
export function pricing_details_variables(...__args: any[]): any {
let {"vin": vin, "location_id": location_id} = $.bind(__args, ["vin", "location_id"], {}, [], null, null);
/** Serialize the required vehicle and charging-location identities. */
return Object.assign({}, {["locationId"]: location_id}, {["vin"]: vin});
}

export function enroll_charge_plan_variables(vin: string, product_sku: string, model: string, year: string): Record<string, unknown>;
/** Serialize the complete non-null EMP charge-plan enrollment input. */
export function enroll_charge_plan_variables(...__args: any[]): any {
let {"vin": vin, "product_sku": product_sku, "model": model, "year": year} = $.bind(__args, ["vin", "product_sku", "model", "year"], {}, [], null, null);
/** Serialize the complete non-null EMP charge-plan enrollment input. */
return Object.assign({}, {["config"]: Object.assign({}, {["vin"]: vin}, {["productSku"]: product_sku}, {["model"]: model}, {["year"]: year})});
}

export function cancel_charge_plan_variables(vin: string): Record<string, unknown>;
/** Serialize the required EMP charge-plan cancellation input. */
export function cancel_charge_plan_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required EMP charge-plan cancellation input. */
return Object.assign({}, {["config"]: Object.assign({}, {["vin"]: vin})});
}
