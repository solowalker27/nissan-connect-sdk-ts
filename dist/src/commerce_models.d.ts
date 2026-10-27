import { py as $ } from "./_runtime";
export declare const NissanStoreClientOrigin: $.EnumType<{
    readonly WEB: "WEB";
    readonly ONE_APP: "ONE_APP";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type NissanStoreClientOrigin = ReturnType<typeof NissanStoreClientOrigin>;
export declare const NissanPayPaymentProcessor: $.EnumType<{
    readonly VISA: "VISA";
    readonly MASTERCARD: "MASTERCARD";
    readonly AMEX: "AMEX";
    readonly DISCOVER: "DISCOVER";
    readonly DINERSCLUB: "DINERSCLUB";
    readonly JCB: "JCB";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type NissanPayPaymentProcessor = ReturnType<typeof NissanPayPaymentProcessor>;
export declare const NissanPayPaymentMethodStatus: $.EnumType<{
    readonly ACTIVE: "ACTIVE";
    readonly AWAITING_PAYMENT: "AWAITING_PAYMENT";
    readonly ERRORED: "ERRORED";
    readonly EXPIRED: "EXPIRED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type NissanPayPaymentMethodStatus = ReturnType<typeof NissanPayPaymentMethodStatus>;
export declare const NissanPayChargeSessionType: $.EnumType<{
    readonly FOUNDATIONAL: "FOUNDATIONAL";
    readonly PLUG_AND_CHARGE: "PLUG_AND_CHARGE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type NissanPayChargeSessionType = ReturnType<typeof NissanPayChargeSessionType>;
/** Future union branch represented only by its selected type name. */
export declare class UnselectedCommerceResult {
    readonly typename: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string);
    constructor(options: {
        typename: string;
    });
}
/** Required delivery group returned for a cart. */
export declare class NissanStoreDeliveryGroup {
    readonly id: string;
    static __fields: (string | symbol)[][];
    constructor(id: string);
    constructor(options: {
        id: string;
    });
}
/** Cart and its required delivery group. */
export declare class NissanStoreCart {
    readonly id: string;
    readonly delivery_group: NissanStoreDeliveryGroup;
    static __fields: (string | symbol)[][];
    constructor(id: string, delivery_group: NissanStoreDeliveryGroup);
    constructor(options: {
        id: string;
        delivery_group: NissanStoreDeliveryGroup;
    });
}
/** Nullable numeric pricing term and unit. */
export declare class NissanStorePricingTerm {
    readonly value: number | null;
    readonly unit: string | null;
    static __fields: (string | symbol)[][];
    constructor(value: number | null, unit: string | null);
    constructor(options: {
        value: number | null;
        unit: string | null;
    });
}
/** Subscription attached to an added product. */
export declare class NissanStoreSubscription {
    readonly id: string;
    readonly selling_model_type: string | null;
    readonly pricing_term: NissanStorePricingTerm | null;
    static __fields: (string | symbol)[][];
    constructor(id: string, selling_model_type: string | null, pricing_term: NissanStorePricingTerm | null);
    constructor(options: {
        id: string;
        selling_model_type: string | null;
        pricing_term: NissanStorePricingTerm | null;
    });
}
/** Product returned after it is added to a cart. */
export declare class NissanStoreAddedProduct {
    readonly id: string;
    readonly name: string | null;
    readonly subscription: NissanStoreSubscription | null;
    static __fields: (string | symbol)[][];
    constructor(id: string, name: string | null, subscription: NissanStoreSubscription | null);
    constructor(options: {
        id: string;
        name: string | null;
        subscription: NissanStoreSubscription | null;
    });
}
/** Nullable cart and product returned by add-to-cart. */
export declare class ProductAddedToNissanStoreCart {
    readonly cart: NissanStoreCart | null;
    readonly product: NissanStoreAddedProduct | null;
    static __fields: (string | symbol)[][];
    constructor(cart: NissanStoreCart | null, product: NissanStoreAddedProduct | null);
    constructor(options: {
        cart: NissanStoreCart | null;
        product: NissanStoreAddedProduct | null;
    });
}
export type AddProductToCartResult = ProductAddedToNissanStoreCart | UnselectedCommerceResult;
/** Nullable success flag returned by pending-order cancellation. */
export declare class CancelPendingSubscriptionResult {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
/** Generic nullable status branch returned by subscription cancellation. */
export declare class CancelSubscriptionStatus {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
/** Detailed subscription-cancellation success branch. */
export declare class CancelSubscriptionSuccess {
    readonly success: boolean | null;
    readonly subscription_end_date: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null, subscription_end_date: $.DateValue | null);
    constructor(options: {
        success: boolean | null;
        subscription_end_date: $.DateValue | null;
    });
}
/** Subscription-cancellation error branch. */
export declare class CancelSubscriptionGeneralError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export type CancelSubscriptionResult = CancelSubscriptionStatus | CancelSubscriptionSuccess | CancelSubscriptionGeneralError | UnselectedCommerceResult;
/** Nullable card metadata selected by Nissan Pay. */
export declare class NissanPayPaymentMethodCard {
    readonly payment_processor: NissanPayPaymentProcessor | null;
    readonly payment_icon: string | null;
    readonly is_default: boolean | null;
    readonly last_four_digits: string | null;
    readonly expiry_month: number | null;
    readonly expiry_year: number | null;
    readonly status: NissanPayPaymentMethodStatus | null;
    static __fields: (string | symbol)[][];
    constructor(payment_processor: NissanPayPaymentProcessor | null, payment_icon: string | null, is_default: boolean | null, last_four_digits: string | null, expiry_month: number | null, expiry_year: number | null, status: NissanPayPaymentMethodStatus | null);
    constructor(options: {
        payment_processor: NissanPayPaymentProcessor | null;
        payment_icon: string | null;
        is_default: boolean | null;
        last_four_digits: string | null;
        expiry_month: number | null;
        expiry_year: number | null;
        status: NissanPayPaymentMethodStatus | null;
    });
}
export type NissanPayPaymentMethod = NissanPayPaymentMethodCard | UnselectedCommerceResult;
/** Nullable payment methods and digital-wallet URL. */
export declare class NissanPayAccount {
    readonly payment_methods: ReadonlyArray<NissanPayPaymentMethod | null> | null;
    readonly digital_wallet_url: string | null;
    static __fields: (string | symbol)[][];
    constructor(payment_methods: ReadonlyArray<NissanPayPaymentMethod | null> | null, digital_wallet_url: string | null);
    constructor(options: {
        payment_methods: ReadonlyArray<NissanPayPaymentMethod | null> | null;
        digital_wallet_url: string | null;
    });
}
/** Nullable address and coordinates attached to a Nissan Pay order. */
export declare class NissanPayOrderAddress {
    readonly city: string | null;
    readonly country: string | null;
    readonly country_code: string | null;
    readonly latitude: number | null;
    readonly longitude: number | null;
    readonly postal_code: string | null;
    readonly state: string | null;
    readonly state_code: string | null;
    readonly street: string | null;
    static __fields: (string | symbol)[][];
    constructor(city: string | null, country: string | null, country_code: string | null, latitude: number | null, longitude: number | null, postal_code: string | null, state: string | null, state_code: string | null, street: string | null);
    constructor(options: {
        city: string | null;
        country: string | null;
        country_code: string | null;
        latitude: number | null;
        longitude: number | null;
        postal_code: string | null;
        state: string | null;
        state_code: string | null;
        street: string | null;
    });
}
/** Nullable payment metadata attached to an order. */
export declare class NissanPayOrderPaymentMethod {
    readonly type: string | null;
    readonly processor: NissanPayPaymentProcessor | null;
    readonly last_four_digits: string | null;
    static __fields: (string | symbol)[][];
    constructor(type: string | null, processor: NissanPayPaymentProcessor | null, last_four_digits: string | null);
    constructor(options: {
        type: string | null;
        processor: NissanPayPaymentProcessor | null;
        last_four_digits: string | null;
    });
}
/** Energy charging order returned by Nissan Pay. */
export declare class NissanPayEnergyChargeSession {
    readonly order_date: $.DateValue | null;
    readonly total_cost: number | null;
    readonly address: NissanPayOrderAddress | null;
    readonly payment_method: NissanPayOrderPaymentMethod | null;
    readonly cpo_brand: string | null;
    readonly session_type: NissanPayChargeSessionType | null;
    readonly charge_start_time: string | null;
    readonly charge_end_time: string | null;
    readonly charge_duration: string | null;
    readonly connector_type: string | null;
    readonly total_energy: number | null;
    readonly subtotal: number | null;
    readonly service_fee_total: number | null;
    static __fields: (string | symbol)[][];
    constructor(order_date: $.DateValue | null, total_cost: number | null, address: NissanPayOrderAddress | null, payment_method: NissanPayOrderPaymentMethod | null, cpo_brand: string | null, session_type: NissanPayChargeSessionType | null, charge_start_time: string | null, charge_end_time: string | null, charge_duration: string | null, connector_type: string | null, total_energy: number | null, subtotal: number | null, service_fee_total: number | null);
    constructor(options: {
        order_date: $.DateValue | null;
        total_cost: number | null;
        address: NissanPayOrderAddress | null;
        payment_method: NissanPayOrderPaymentMethod | null;
        cpo_brand: string | null;
        session_type: NissanPayChargeSessionType | null;
        charge_start_time: string | null;
        charge_end_time: string | null;
        charge_duration: string | null;
        connector_type: string | null;
        total_energy: number | null;
        subtotal: number | null;
        service_fee_total: number | null;
    });
}
export type NissanPayOrder = NissanPayEnergyChargeSession | UnselectedCommerceResult;
/** Nullable order-history pagination metadata. */
export declare class NissanPayOrderHistoryPagination {
    readonly next_page_cursor: string | null;
    readonly total_size: number | null;
    static __fields: (string | symbol)[][];
    constructor(next_page_cursor: string | null, total_size: number | null);
    constructor(options: {
        next_page_cursor: string | null;
        total_size: number | null;
    });
}
/** Required order entries and nullable pagination metadata. */
export declare class NissanPayOrderHistory {
    readonly items: ReadonlyArray<NissanPayOrder | null>;
    readonly pagination: NissanPayOrderHistoryPagination | null;
    static __fields: (string | symbol)[][];
    constructor(items: ReadonlyArray<NissanPayOrder | null>, pagination: NissanPayOrderHistoryPagination | null);
    constructor(options: {
        items: ReadonlyArray<NissanPayOrder | null>;
        pagination: NissanPayOrderHistoryPagination | null;
    });
}
/** Nullable pricing details for a product selling model. */
export declare class NissanStoreCatalogSellingModel {
    readonly pricing_term_unit: string | null;
    readonly retail_price: number | null;
    readonly discounted_price: number | null;
    readonly selling_model_type: string | null;
    readonly selling_model_id: string | null;
    static __fields: (string | symbol)[][];
    constructor(pricing_term_unit: string | null, retail_price: number | null, discounted_price: number | null, selling_model_type: string | null, selling_model_id: string | null);
    constructor(options: {
        pricing_term_unit: string | null;
        retail_price: number | null;
        discounted_price: number | null;
        selling_model_type: string | null;
        selling_model_id: string | null;
    });
}
/** Nullable child-product presentation data. */
export declare class NissanStoreCatalogChildProduct {
    readonly name: string | null;
    readonly customer_facing: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(name: string | null, customer_facing: boolean | null);
    constructor(options: {
        name: string | null;
        customer_facing: boolean | null;
    });
}
/** Nullable Nissan Store promotion details. */
export declare class NissanStoreCatalogPromotion {
    readonly promotion_id: string | null;
    readonly priority: number | null;
    readonly name: string | null;
    readonly monthly_price: number | null;
    readonly annual_price: number | null;
    readonly end_date: string | null;
    readonly description: string | null;
    static __fields: (string | symbol)[][];
    constructor(promotion_id: string | null, priority: number | null, name: string | null, monthly_price: number | null, annual_price: number | null, end_date: string | null, description: string | null);
    constructor(options: {
        promotion_id: string | null;
        priority: number | null;
        name: string | null;
        monthly_price: number | null;
        annual_price: number | null;
        end_date: string | null;
        description: string | null;
    });
}
/** Product package returned by the Nissan Store catalog. */
export declare class NissanStoreCatalogPackage {
    readonly short_description: string | null;
    readonly trial_duration: number | null;
    readonly product_image_url: string | null;
    readonly long_description: string | null;
    readonly selling_models: ReadonlyArray<NissanStoreCatalogSellingModel | null> | null;
    readonly product_id: string | null;
    readonly name: string | null;
    readonly child_products: ReadonlyArray<NissanStoreCatalogChildProduct | null> | null;
    readonly is_feature_on_demand: boolean | null;
    readonly promotions: ReadonlyArray<NissanStoreCatalogPromotion | null> | null;
    static __fields: (string | symbol)[][];
    constructor(short_description: string | null, trial_duration: number | null, product_image_url: string | null, long_description: string | null, selling_models: ReadonlyArray<NissanStoreCatalogSellingModel | null> | null, product_id: string | null, name: string | null, child_products: ReadonlyArray<NissanStoreCatalogChildProduct | null> | null, is_feature_on_demand: boolean | null, promotions: ReadonlyArray<NissanStoreCatalogPromotion | null> | null);
    constructor(options: {
        short_description: string | null;
        trial_duration: number | null;
        product_image_url: string | null;
        long_description: string | null;
        selling_models: ReadonlyArray<NissanStoreCatalogSellingModel | null> | null;
        product_id: string | null;
        name: string | null;
        child_products: ReadonlyArray<NissanStoreCatalogChildProduct | null> | null;
        is_feature_on_demand: boolean | null;
        promotions: ReadonlyArray<NissanStoreCatalogPromotion | null> | null;
    });
}
/** Nullable package list returned by the catalog union. */
export declare class NissanStoreProductCatalog {
    readonly packages: ReadonlyArray<NissanStoreCatalogPackage | null> | null;
    static __fields: (string | symbol)[][];
    constructor(packages: ReadonlyArray<NissanStoreCatalogPackage | null> | null);
    constructor(options: {
        packages: ReadonlyArray<NissanStoreCatalogPackage | null> | null;
    });
}
export type ProductCatalogResult = NissanStoreProductCatalog | UnselectedCommerceResult;
/** Successful Nissan Pay account synchronization. */
export declare class UpsertNissanPayAccountSuccess {
    readonly response_message: string | null;
    readonly response_code: string | null;
    readonly response: string | null;
    readonly customer_id: string | null;
    static __fields: (string | symbol)[][];
    constructor(response_message: string | null, response_code: string | null, response: string | null, customer_id: string | null);
    constructor(options: {
        response_message: string | null;
        response_code: string | null;
        response: string | null;
        customer_id: string | null;
    });
}
/** Failed Nissan Pay account synchronization. */
export declare class UpsertNissanPayAccountFailure {
    readonly response_message: string | null;
    readonly response_code: string | null;
    readonly response: string | null;
    static __fields: (string | symbol)[][];
    constructor(response_message: string | null, response_code: string | null, response: string | null);
    constructor(options: {
        response_message: string | null;
        response_code: string | null;
        response: string | null;
    });
}
export type UpsertNissanPayAccountResult = UpsertNissanPayAccountSuccess | UpsertNissanPayAccountFailure | UnselectedCommerceResult;
