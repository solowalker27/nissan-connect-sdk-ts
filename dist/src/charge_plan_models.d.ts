import { py as $ } from "./_runtime";
export declare const ChargePlanAccountStatus: $.EnumType<{
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
export type ChargePlanAccountStatus = ReturnType<typeof ChargePlanAccountStatus>;
export declare const ChargePlanCancellationOutcome: $.EnumType<{
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly UNKNOWN: "UNKNOWN";
}>;
export type ChargePlanCancellationOutcome = ReturnType<typeof ChargePlanCancellationOutcome>;
/** Nullable EMP product fields available for charge-plan enrollment. */
export declare class ChargeProductData {
    readonly product_sku: string | null;
    readonly price: string | null;
    readonly description: string | null;
    static __fields: (string | symbol)[][];
    constructor(product_sku: string | null, price: string | null, description: string | null);
    constructor(options: {
        product_sku: string | null;
        price: string | null;
        description: string | null;
    });
}
/** Status envelope returned by the ChargeProduct query. */
export declare class ChargeProductResult {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: ChargeProductData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ChargeProductData | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: ChargeProductData | null;
    });
}
/** Nullable tariff fields for one charging connector. */
export declare class ChargePlanPricingConnector {
    readonly connector_id: string | null;
    readonly tariff: string | null;
    static __fields: (string | symbol)[][];
    constructor(connector_id: string | null, tariff: string | null);
    constructor(options: {
        connector_id: string | null;
        tariff: string | null;
    });
}
/** Nullable connector collection for one pricing EVSE. */
export declare class ChargePlanPricingEvse {
    readonly connectors: ReadonlyArray<ChargePlanPricingConnector | null> | null;
    static __fields: (string | symbol)[][];
    constructor(connectors: ReadonlyArray<ChargePlanPricingConnector | null> | null);
    constructor(options: {
        connectors: ReadonlyArray<ChargePlanPricingConnector | null> | null;
    });
}
/** Nullable fees and EVSE tariffs returned for a charging location. */
export declare class ChargePlanPricingDetails {
    readonly parking_tariff: string | null;
    readonly flat_fee: string | null;
    readonly congestion_fee: string | null;
    readonly evses: ReadonlyArray<ChargePlanPricingEvse | null> | null;
    static __fields: (string | symbol)[][];
    constructor(parking_tariff: string | null, flat_fee: string | null, congestion_fee: string | null, evses: ReadonlyArray<ChargePlanPricingEvse | null> | null);
    constructor(options: {
        parking_tariff: string | null;
        flat_fee: string | null;
        congestion_fee: string | null;
        evses: ReadonlyArray<ChargePlanPricingEvse | null> | null;
    });
}
/** Nullable vehicle and account status returned after enrollment. */
export declare class ChargePlanEnrollmentData {
    readonly vin: string | null;
    readonly status: ChargePlanAccountStatus | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string | null, status: ChargePlanAccountStatus | null);
    constructor(options: {
        vin: string | null;
        status: ChargePlanAccountStatus | null;
    });
}
/** Status envelope returned by the charge-plan enrollment mutation. */
export declare class ChargePlanEnrollmentResult {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: ChargePlanEnrollmentData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ChargePlanEnrollmentData | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: ChargePlanEnrollmentData | null;
    });
}
/** Status envelope returned by the charge-plan cancellation mutation. */
export declare class ChargePlanCancellationResult {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
    });
    /** Return the upstream service's interpretation of the EMP status code. */
    get outcome(): ChargePlanCancellationOutcome;
}
