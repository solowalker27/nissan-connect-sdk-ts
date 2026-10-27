// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

export const NissanStoreClientOrigin = $.enumType("NissanStoreClientOrigin", {"WEB": "WEB", "ONE_APP": "ONE_APP", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type NissanStoreClientOrigin = ReturnType<typeof NissanStoreClientOrigin>;

export const NissanPayPaymentProcessor = $.enumType("NissanPayPaymentProcessor", {"VISA": "VISA", "MASTERCARD": "MASTERCARD", "AMEX": "AMEX", "DISCOVER": "DISCOVER", "DINERSCLUB": "DINERSCLUB", "JCB": "JCB", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type NissanPayPaymentProcessor = ReturnType<typeof NissanPayPaymentProcessor>;

export const NissanPayPaymentMethodStatus = $.enumType("NissanPayPaymentMethodStatus", {"ACTIVE": "ACTIVE", "AWAITING_PAYMENT": "AWAITING_PAYMENT", "ERRORED": "ERRORED", "EXPIRED": "EXPIRED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type NissanPayPaymentMethodStatus = ReturnType<typeof NissanPayPaymentMethodStatus>;

export const NissanPayChargeSessionType = $.enumType("NissanPayChargeSessionType", {"FOUNDATIONAL": "FOUNDATIONAL", "PLUG_AND_CHARGE": "PLUG_AND_CHARGE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type NissanPayChargeSessionType = ReturnType<typeof NissanPayChargeSessionType>;

/** Future union branch represented only by its selected type name. */
export class UnselectedCommerceResult {
readonly typename: string;
static __fields = [["typename", $.MISSING]];
constructor(typename: string);
constructor(options: { typename: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnselectedCommerceResult, __args);  Object.freeze(this); }
}
$.classType(UnselectedCommerceResult);

/** Required delivery group returned for a cart. */
export class NissanStoreDeliveryGroup {
readonly id: string;
static __fields = [["id", $.MISSING]];
constructor(id: string);
constructor(options: { id: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStoreDeliveryGroup, __args);  Object.freeze(this); }
}
$.classType(NissanStoreDeliveryGroup);

/** Cart and its required delivery group. */
export class NissanStoreCart {
readonly id: string;
readonly delivery_group: NissanStoreDeliveryGroup;
static __fields = [["id", $.MISSING], ["delivery_group", $.MISSING]];
constructor(id: string, delivery_group: NissanStoreDeliveryGroup);
constructor(options: { id: string; delivery_group: NissanStoreDeliveryGroup });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStoreCart, __args);  Object.freeze(this); }
}
$.classType(NissanStoreCart);

/** Nullable numeric pricing term and unit. */
export class NissanStorePricingTerm {
readonly value: number | null;
readonly unit: string | null;
static __fields = [["value", $.MISSING], ["unit", $.MISSING]];
constructor(value: number | null, unit: string | null);
constructor(options: { value: number | null; unit: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStorePricingTerm, __args);  Object.freeze(this); }
}
$.classType(NissanStorePricingTerm);

/** Subscription attached to an added product. */
export class NissanStoreSubscription {
readonly id: string;
readonly selling_model_type: string | null;
readonly pricing_term: NissanStorePricingTerm | null;
static __fields = [["id", $.MISSING], ["selling_model_type", $.MISSING], ["pricing_term", $.MISSING]];
constructor(id: string, selling_model_type: string | null, pricing_term: NissanStorePricingTerm | null);
constructor(options: { id: string; selling_model_type: string | null; pricing_term: NissanStorePricingTerm | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStoreSubscription, __args);  Object.freeze(this); }
}
$.classType(NissanStoreSubscription);

/** Product returned after it is added to a cart. */
export class NissanStoreAddedProduct {
readonly id: string;
readonly name: string | null;
readonly subscription: NissanStoreSubscription | null;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["subscription", $.MISSING]];
constructor(id: string, name: string | null, subscription: NissanStoreSubscription | null);
constructor(options: { id: string; name: string | null; subscription: NissanStoreSubscription | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStoreAddedProduct, __args);  Object.freeze(this); }
}
$.classType(NissanStoreAddedProduct);

/** Nullable cart and product returned by add-to-cart. */
export class ProductAddedToNissanStoreCart {
readonly cart: NissanStoreCart | null;
readonly product: NissanStoreAddedProduct | null;
static __fields = [["cart", $.MISSING], ["product", $.MISSING]];
constructor(cart: NissanStoreCart | null, product: NissanStoreAddedProduct | null);
constructor(options: { cart: NissanStoreCart | null; product: NissanStoreAddedProduct | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ProductAddedToNissanStoreCart, __args);  Object.freeze(this); }
}
$.classType(ProductAddedToNissanStoreCart);

export type AddProductToCartResult = ProductAddedToNissanStoreCart | UnselectedCommerceResult;

/** Nullable success flag returned by pending-order cancellation. */
export class CancelPendingSubscriptionResult {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CancelPendingSubscriptionResult, __args);  Object.freeze(this); }
}
$.classType(CancelPendingSubscriptionResult);

/** Generic nullable status branch returned by subscription cancellation. */
export class CancelSubscriptionStatus {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CancelSubscriptionStatus, __args);  Object.freeze(this); }
}
$.classType(CancelSubscriptionStatus);

/** Detailed subscription-cancellation success branch. */
export class CancelSubscriptionSuccess {
readonly success: boolean | null;
readonly subscription_end_date: $.DateValue | null;
static __fields = [["success", $.MISSING], ["subscription_end_date", $.MISSING]];
constructor(success: boolean | null, subscription_end_date: $.DateValue | null);
constructor(options: { success: boolean | null; subscription_end_date: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CancelSubscriptionSuccess, __args);  Object.freeze(this); }
}
$.classType(CancelSubscriptionSuccess);

/** Subscription-cancellation error branch. */
export class CancelSubscriptionGeneralError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CancelSubscriptionGeneralError, __args);  Object.freeze(this); }
}
$.classType(CancelSubscriptionGeneralError);

export type CancelSubscriptionResult = CancelSubscriptionStatus | CancelSubscriptionSuccess | CancelSubscriptionGeneralError | UnselectedCommerceResult;

/** Nullable card metadata selected by Nissan Pay. */
export class NissanPayPaymentMethodCard {
readonly payment_processor: NissanPayPaymentProcessor | null;
readonly payment_icon: string | null;
readonly is_default: boolean | null;
readonly last_four_digits: string | null;
readonly expiry_month: number | null;
readonly expiry_year: number | null;
readonly status: NissanPayPaymentMethodStatus | null;
static __fields = [["payment_processor", $.MISSING], ["payment_icon", $.MISSING], ["is_default", $.MISSING], ["last_four_digits", $.MISSING], ["expiry_month", $.MISSING], ["expiry_year", $.MISSING], ["status", $.MISSING]];
constructor(payment_processor: NissanPayPaymentProcessor | null, payment_icon: string | null, is_default: boolean | null, last_four_digits: string | null, expiry_month: number | null, expiry_year: number | null, status: NissanPayPaymentMethodStatus | null);
constructor(options: { payment_processor: NissanPayPaymentProcessor | null; payment_icon: string | null; is_default: boolean | null; last_four_digits: string | null; expiry_month: number | null; expiry_year: number | null; status: NissanPayPaymentMethodStatus | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanPayPaymentMethodCard, __args);  Object.freeze(this); }
}
$.classType(NissanPayPaymentMethodCard);

export type NissanPayPaymentMethod = NissanPayPaymentMethodCard | UnselectedCommerceResult;

/** Nullable payment methods and digital-wallet URL. */
export class NissanPayAccount {
readonly payment_methods: ReadonlyArray<NissanPayPaymentMethod | null> | null;
readonly digital_wallet_url: string | null;
static __fields = [["payment_methods", $.MISSING], ["digital_wallet_url", $.MISSING]];
constructor(payment_methods: ReadonlyArray<NissanPayPaymentMethod | null> | null, digital_wallet_url: string | null);
constructor(options: { payment_methods: ReadonlyArray<NissanPayPaymentMethod | null> | null; digital_wallet_url: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanPayAccount, __args);  Object.freeze(this); }
}
$.classType(NissanPayAccount);

/** Nullable address and coordinates attached to a Nissan Pay order. */
export class NissanPayOrderAddress {
readonly city: string | null;
readonly country: string | null;
readonly country_code: string | null;
readonly latitude: number | null;
readonly longitude: number | null;
readonly postal_code: string | null;
readonly state: string | null;
readonly state_code: string | null;
readonly street: string | null;
static __fields = [["city", $.MISSING], ["country", $.MISSING], ["country_code", $.MISSING], ["latitude", $.MISSING], ["longitude", $.MISSING], ["postal_code", $.MISSING], ["state", $.MISSING], ["state_code", $.MISSING], ["street", $.MISSING]];
constructor(city: string | null, country: string | null, country_code: string | null, latitude: number | null, longitude: number | null, postal_code: string | null, state: string | null, state_code: string | null, street: string | null);
constructor(options: { city: string | null; country: string | null; country_code: string | null; latitude: number | null; longitude: number | null; postal_code: string | null; state: string | null; state_code: string | null; street: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanPayOrderAddress, __args);  Object.freeze(this); }
}
$.classType(NissanPayOrderAddress);

/** Nullable payment metadata attached to an order. */
export class NissanPayOrderPaymentMethod {
readonly type: string | null;
readonly processor: NissanPayPaymentProcessor | null;
readonly last_four_digits: string | null;
static __fields = [["type", $.MISSING], ["processor", $.MISSING], ["last_four_digits", $.MISSING]];
constructor(type: string | null, processor: NissanPayPaymentProcessor | null, last_four_digits: string | null);
constructor(options: { type: string | null; processor: NissanPayPaymentProcessor | null; last_four_digits: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanPayOrderPaymentMethod, __args);  Object.freeze(this); }
}
$.classType(NissanPayOrderPaymentMethod);

/** Energy charging order returned by Nissan Pay. */
export class NissanPayEnergyChargeSession {
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
static __fields = [["order_date", $.MISSING], ["total_cost", $.MISSING], ["address", $.MISSING], ["payment_method", $.MISSING], ["cpo_brand", $.MISSING], ["session_type", $.MISSING], ["charge_start_time", $.MISSING], ["charge_end_time", $.MISSING], ["charge_duration", $.MISSING], ["connector_type", $.MISSING], ["total_energy", $.MISSING], ["subtotal", $.MISSING], ["service_fee_total", $.MISSING]];
constructor(order_date: $.DateValue | null, total_cost: number | null, address: NissanPayOrderAddress | null, payment_method: NissanPayOrderPaymentMethod | null, cpo_brand: string | null, session_type: NissanPayChargeSessionType | null, charge_start_time: string | null, charge_end_time: string | null, charge_duration: string | null, connector_type: string | null, total_energy: number | null, subtotal: number | null, service_fee_total: number | null);
constructor(options: { order_date: $.DateValue | null; total_cost: number | null; address: NissanPayOrderAddress | null; payment_method: NissanPayOrderPaymentMethod | null; cpo_brand: string | null; session_type: NissanPayChargeSessionType | null; charge_start_time: string | null; charge_end_time: string | null; charge_duration: string | null; connector_type: string | null; total_energy: number | null; subtotal: number | null; service_fee_total: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanPayEnergyChargeSession, __args);  Object.freeze(this); }
}
$.classType(NissanPayEnergyChargeSession);

export type NissanPayOrder = NissanPayEnergyChargeSession | UnselectedCommerceResult;

/** Nullable order-history pagination metadata. */
export class NissanPayOrderHistoryPagination {
readonly next_page_cursor: string | null;
readonly total_size: number | null;
static __fields = [["next_page_cursor", $.MISSING], ["total_size", $.MISSING]];
constructor(next_page_cursor: string | null, total_size: number | null);
constructor(options: { next_page_cursor: string | null; total_size: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanPayOrderHistoryPagination, __args);  Object.freeze(this); }
}
$.classType(NissanPayOrderHistoryPagination);

/** Required order entries and nullable pagination metadata. */
export class NissanPayOrderHistory {
readonly items: ReadonlyArray<NissanPayOrder | null>;
readonly pagination: NissanPayOrderHistoryPagination | null;
static __fields = [["items", $.MISSING], ["pagination", $.MISSING]];
constructor(items: ReadonlyArray<NissanPayOrder | null>, pagination: NissanPayOrderHistoryPagination | null);
constructor(options: { items: ReadonlyArray<NissanPayOrder | null>; pagination: NissanPayOrderHistoryPagination | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanPayOrderHistory, __args);  Object.freeze(this); }
}
$.classType(NissanPayOrderHistory);

/** Nullable pricing details for a product selling model. */
export class NissanStoreCatalogSellingModel {
readonly pricing_term_unit: string | null;
readonly retail_price: number | null;
readonly discounted_price: number | null;
readonly selling_model_type: string | null;
readonly selling_model_id: string | null;
static __fields = [["pricing_term_unit", $.MISSING], ["retail_price", $.MISSING], ["discounted_price", $.MISSING], ["selling_model_type", $.MISSING], ["selling_model_id", $.MISSING]];
constructor(pricing_term_unit: string | null, retail_price: number | null, discounted_price: number | null, selling_model_type: string | null, selling_model_id: string | null);
constructor(options: { pricing_term_unit: string | null; retail_price: number | null; discounted_price: number | null; selling_model_type: string | null; selling_model_id: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStoreCatalogSellingModel, __args);  Object.freeze(this); }
}
$.classType(NissanStoreCatalogSellingModel);

/** Nullable child-product presentation data. */
export class NissanStoreCatalogChildProduct {
readonly name: string | null;
readonly customer_facing: boolean | null;
static __fields = [["name", $.MISSING], ["customer_facing", $.MISSING]];
constructor(name: string | null, customer_facing: boolean | null);
constructor(options: { name: string | null; customer_facing: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStoreCatalogChildProduct, __args);  Object.freeze(this); }
}
$.classType(NissanStoreCatalogChildProduct);

/** Nullable Nissan Store promotion details. */
export class NissanStoreCatalogPromotion {
readonly promotion_id: string | null;
readonly priority: number | null;
readonly name: string | null;
readonly monthly_price: number | null;
readonly annual_price: number | null;
readonly end_date: string | null;
readonly description: string | null;
static __fields = [["promotion_id", $.MISSING], ["priority", $.MISSING], ["name", $.MISSING], ["monthly_price", $.MISSING], ["annual_price", $.MISSING], ["end_date", $.MISSING], ["description", $.MISSING]];
constructor(promotion_id: string | null, priority: number | null, name: string | null, monthly_price: number | null, annual_price: number | null, end_date: string | null, description: string | null);
constructor(options: { promotion_id: string | null; priority: number | null; name: string | null; monthly_price: number | null; annual_price: number | null; end_date: string | null; description: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStoreCatalogPromotion, __args);  Object.freeze(this); }
}
$.classType(NissanStoreCatalogPromotion);

/** Product package returned by the Nissan Store catalog. */
export class NissanStoreCatalogPackage {
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
static __fields = [["short_description", $.MISSING], ["trial_duration", $.MISSING], ["product_image_url", $.MISSING], ["long_description", $.MISSING], ["selling_models", $.MISSING], ["product_id", $.MISSING], ["name", $.MISSING], ["child_products", $.MISSING], ["is_feature_on_demand", $.MISSING], ["promotions", $.MISSING]];
constructor(short_description: string | null, trial_duration: number | null, product_image_url: string | null, long_description: string | null, selling_models: ReadonlyArray<NissanStoreCatalogSellingModel | null> | null, product_id: string | null, name: string | null, child_products: ReadonlyArray<NissanStoreCatalogChildProduct | null> | null, is_feature_on_demand: boolean | null, promotions: ReadonlyArray<NissanStoreCatalogPromotion | null> | null);
constructor(options: { short_description: string | null; trial_duration: number | null; product_image_url: string | null; long_description: string | null; selling_models: ReadonlyArray<NissanStoreCatalogSellingModel | null> | null; product_id: string | null; name: string | null; child_products: ReadonlyArray<NissanStoreCatalogChildProduct | null> | null; is_feature_on_demand: boolean | null; promotions: ReadonlyArray<NissanStoreCatalogPromotion | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStoreCatalogPackage, __args);  Object.freeze(this); }
}
$.classType(NissanStoreCatalogPackage);

/** Nullable package list returned by the catalog union. */
export class NissanStoreProductCatalog {
readonly packages: ReadonlyArray<NissanStoreCatalogPackage | null> | null;
static __fields = [["packages", $.MISSING]];
constructor(packages: ReadonlyArray<NissanStoreCatalogPackage | null> | null);
constructor(options: { packages: ReadonlyArray<NissanStoreCatalogPackage | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanStoreProductCatalog, __args);  Object.freeze(this); }
}
$.classType(NissanStoreProductCatalog);

export type ProductCatalogResult = NissanStoreProductCatalog | UnselectedCommerceResult;

/** Successful Nissan Pay account synchronization. */
export class UpsertNissanPayAccountSuccess {
readonly response_message: string | null;
readonly response_code: string | null;
readonly response: string | null;
readonly customer_id: string | null;
static __fields = [["response_message", $.MISSING], ["response_code", $.MISSING], ["response", $.MISSING], ["customer_id", $.MISSING]];
constructor(response_message: string | null, response_code: string | null, response: string | null, customer_id: string | null);
constructor(options: { response_message: string | null; response_code: string | null; response: string | null; customer_id: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpsertNissanPayAccountSuccess, __args);  Object.freeze(this); }
}
$.classType(UpsertNissanPayAccountSuccess);

/** Failed Nissan Pay account synchronization. */
export class UpsertNissanPayAccountFailure {
readonly response_message: string | null;
readonly response_code: string | null;
readonly response: string | null;
static __fields = [["response_message", $.MISSING], ["response_code", $.MISSING], ["response", $.MISSING]];
constructor(response_message: string | null, response_code: string | null, response: string | null);
constructor(options: { response_message: string | null; response_code: string | null; response: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpsertNissanPayAccountFailure, __args);  Object.freeze(this); }
}
$.classType(UpsertNissanPayAccountFailure);

export type UpsertNissanPayAccountResult = UpsertNissanPayAccountSuccess | UpsertNissanPayAccountFailure | UnselectedCommerceResult;
