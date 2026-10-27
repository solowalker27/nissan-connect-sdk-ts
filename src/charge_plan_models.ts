// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

export const ChargePlanAccountStatus = $.enumType("ChargePlanAccountStatus", {"PENDING": "PENDING", "FAILED": "FAILED", "ACTIVE": "ACTIVE", "INACTIVE": "INACTIVE", "CANCELLED": "CANCELLED", "CLOSED": "CLOSED", "ENROLLING": "ENROLLING", "NOT_ENROLLED": "NOT_ENROLLED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type ChargePlanAccountStatus = ReturnType<typeof ChargePlanAccountStatus>;

export const ChargePlanCancellationOutcome = $.enumType("ChargePlanCancellationOutcome", {"SUCCESS": "SUCCESS", "FAILED": "FAILED", "UNKNOWN": "UNKNOWN"}, true);
export type ChargePlanCancellationOutcome = ReturnType<typeof ChargePlanCancellationOutcome>;

/** Nullable EMP product fields available for charge-plan enrollment. */
export class ChargeProductData {
readonly product_sku: string | null;
readonly price: string | null;
readonly description: string | null;
static __fields = [["product_sku", $.MISSING], ["price", $.MISSING], ["description", $.MISSING]];
constructor(product_sku: string | null, price: string | null, description: string | null);
constructor(options: { product_sku: string | null; price: string | null; description: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargeProductData, __args);  Object.freeze(this); }
}
$.classType(ChargeProductData);

/** Status envelope returned by the ChargeProduct query. */
export class ChargeProductResult {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: ChargeProductData | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ChargeProductData | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: ChargeProductData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargeProductResult, __args);  Object.freeze(this); }
}
$.classType(ChargeProductResult);

/** Nullable tariff fields for one charging connector. */
export class ChargePlanPricingConnector {
readonly connector_id: string | null;
readonly tariff: string | null;
static __fields = [["connector_id", $.MISSING], ["tariff", $.MISSING]];
constructor(connector_id: string | null, tariff: string | null);
constructor(options: { connector_id: string | null; tariff: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargePlanPricingConnector, __args);  Object.freeze(this); }
}
$.classType(ChargePlanPricingConnector);

/** Nullable connector collection for one pricing EVSE. */
export class ChargePlanPricingEvse {
readonly connectors: ReadonlyArray<ChargePlanPricingConnector | null> | null;
static __fields = [["connectors", $.MISSING]];
constructor(connectors: ReadonlyArray<ChargePlanPricingConnector | null> | null);
constructor(options: { connectors: ReadonlyArray<ChargePlanPricingConnector | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargePlanPricingEvse, __args);  Object.freeze(this); }
}
$.classType(ChargePlanPricingEvse);

/** Nullable fees and EVSE tariffs returned for a charging location. */
export class ChargePlanPricingDetails {
readonly parking_tariff: string | null;
readonly flat_fee: string | null;
readonly congestion_fee: string | null;
readonly evses: ReadonlyArray<ChargePlanPricingEvse | null> | null;
static __fields = [["parking_tariff", $.MISSING], ["flat_fee", $.MISSING], ["congestion_fee", $.MISSING], ["evses", $.MISSING]];
constructor(parking_tariff: string | null, flat_fee: string | null, congestion_fee: string | null, evses: ReadonlyArray<ChargePlanPricingEvse | null> | null);
constructor(options: { parking_tariff: string | null; flat_fee: string | null; congestion_fee: string | null; evses: ReadonlyArray<ChargePlanPricingEvse | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargePlanPricingDetails, __args);  Object.freeze(this); }
}
$.classType(ChargePlanPricingDetails);

/** Nullable vehicle and account status returned after enrollment. */
export class ChargePlanEnrollmentData {
readonly vin: string | null;
readonly status: ChargePlanAccountStatus | null;
static __fields = [["vin", $.MISSING], ["status", $.MISSING]];
constructor(vin: string | null, status: ChargePlanAccountStatus | null);
constructor(options: { vin: string | null; status: ChargePlanAccountStatus | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargePlanEnrollmentData, __args);  Object.freeze(this); }
}
$.classType(ChargePlanEnrollmentData);

/** Status envelope returned by the charge-plan enrollment mutation. */
export class ChargePlanEnrollmentResult {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: ChargePlanEnrollmentData | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ChargePlanEnrollmentData | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: ChargePlanEnrollmentData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargePlanEnrollmentResult, __args);  Object.freeze(this); }
}
$.classType(ChargePlanEnrollmentResult);

/** Status envelope returned by the charge-plan cancellation mutation. */
export class ChargePlanCancellationResult {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargePlanCancellationResult, __args);  Object.freeze(this); }
/** Return the upstream service's interpretation of the EMP status code. */
get outcome(): ChargePlanCancellationOutcome {
/** Return the upstream service's interpretation of the EMP status code. */
if ($.truth(($.eq($.attr(this, "status_code"), "1000")))) {
return $.attr(ChargePlanCancellationOutcome, "SUCCESS");
}
if ($.truth(($.eq($.attr(this, "status_code"), "5000")))) {
return $.attr(ChargePlanCancellationOutcome, "FAILED");
}
return $.attr(ChargePlanCancellationOutcome, "UNKNOWN");
}
}
$.classType(ChargePlanCancellationResult);
