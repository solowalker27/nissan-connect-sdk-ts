"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertNissanPayAccountFailure = exports.UpsertNissanPayAccountSuccess = exports.NissanStoreProductCatalog = exports.NissanStoreCatalogPackage = exports.NissanStoreCatalogPromotion = exports.NissanStoreCatalogChildProduct = exports.NissanStoreCatalogSellingModel = exports.NissanPayOrderHistory = exports.NissanPayOrderHistoryPagination = exports.NissanPayEnergyChargeSession = exports.NissanPayOrderPaymentMethod = exports.NissanPayOrderAddress = exports.NissanPayAccount = exports.NissanPayPaymentMethodCard = exports.CancelSubscriptionGeneralError = exports.CancelSubscriptionSuccess = exports.CancelSubscriptionStatus = exports.CancelPendingSubscriptionResult = exports.ProductAddedToNissanStoreCart = exports.NissanStoreAddedProduct = exports.NissanStoreSubscription = exports.NissanStorePricingTerm = exports.NissanStoreCart = exports.NissanStoreDeliveryGroup = exports.UnselectedCommerceResult = exports.NissanPayChargeSessionType = exports.NissanPayPaymentMethodStatus = exports.NissanPayPaymentProcessor = exports.NissanStoreClientOrigin = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
exports.NissanStoreClientOrigin = _runtime_1.py.enumType("NissanStoreClientOrigin", { "WEB": "WEB", "ONE_APP": "ONE_APP", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.NissanPayPaymentProcessor = _runtime_1.py.enumType("NissanPayPaymentProcessor", { "VISA": "VISA", "MASTERCARD": "MASTERCARD", "AMEX": "AMEX", "DISCOVER": "DISCOVER", "DINERSCLUB": "DINERSCLUB", "JCB": "JCB", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.NissanPayPaymentMethodStatus = _runtime_1.py.enumType("NissanPayPaymentMethodStatus", { "ACTIVE": "ACTIVE", "AWAITING_PAYMENT": "AWAITING_PAYMENT", "ERRORED": "ERRORED", "EXPIRED": "EXPIRED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.NissanPayChargeSessionType = _runtime_1.py.enumType("NissanPayChargeSessionType", { "FOUNDATIONAL": "FOUNDATIONAL", "PLUG_AND_CHARGE": "PLUG_AND_CHARGE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Future union branch represented only by its selected type name. */
class UnselectedCommerceResult {
    typename;
    static __fields = [["typename", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnselectedCommerceResult, __args); Object.freeze(this); }
}
exports.UnselectedCommerceResult = UnselectedCommerceResult;
_runtime_1.py.classType(UnselectedCommerceResult);
/** Required delivery group returned for a cart. */
class NissanStoreDeliveryGroup {
    id;
    static __fields = [["id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStoreDeliveryGroup, __args); Object.freeze(this); }
}
exports.NissanStoreDeliveryGroup = NissanStoreDeliveryGroup;
_runtime_1.py.classType(NissanStoreDeliveryGroup);
/** Cart and its required delivery group. */
class NissanStoreCart {
    id;
    delivery_group;
    static __fields = [["id", _runtime_1.py.MISSING], ["delivery_group", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStoreCart, __args); Object.freeze(this); }
}
exports.NissanStoreCart = NissanStoreCart;
_runtime_1.py.classType(NissanStoreCart);
/** Nullable numeric pricing term and unit. */
class NissanStorePricingTerm {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStorePricingTerm, __args); Object.freeze(this); }
}
exports.NissanStorePricingTerm = NissanStorePricingTerm;
_runtime_1.py.classType(NissanStorePricingTerm);
/** Subscription attached to an added product. */
class NissanStoreSubscription {
    id;
    selling_model_type;
    pricing_term;
    static __fields = [["id", _runtime_1.py.MISSING], ["selling_model_type", _runtime_1.py.MISSING], ["pricing_term", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStoreSubscription, __args); Object.freeze(this); }
}
exports.NissanStoreSubscription = NissanStoreSubscription;
_runtime_1.py.classType(NissanStoreSubscription);
/** Product returned after it is added to a cart. */
class NissanStoreAddedProduct {
    id;
    name;
    subscription;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["subscription", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStoreAddedProduct, __args); Object.freeze(this); }
}
exports.NissanStoreAddedProduct = NissanStoreAddedProduct;
_runtime_1.py.classType(NissanStoreAddedProduct);
/** Nullable cart and product returned by add-to-cart. */
class ProductAddedToNissanStoreCart {
    cart;
    product;
    static __fields = [["cart", _runtime_1.py.MISSING], ["product", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ProductAddedToNissanStoreCart, __args); Object.freeze(this); }
}
exports.ProductAddedToNissanStoreCart = ProductAddedToNissanStoreCart;
_runtime_1.py.classType(ProductAddedToNissanStoreCart);
/** Nullable success flag returned by pending-order cancellation. */
class CancelPendingSubscriptionResult {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CancelPendingSubscriptionResult, __args); Object.freeze(this); }
}
exports.CancelPendingSubscriptionResult = CancelPendingSubscriptionResult;
_runtime_1.py.classType(CancelPendingSubscriptionResult);
/** Generic nullable status branch returned by subscription cancellation. */
class CancelSubscriptionStatus {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CancelSubscriptionStatus, __args); Object.freeze(this); }
}
exports.CancelSubscriptionStatus = CancelSubscriptionStatus;
_runtime_1.py.classType(CancelSubscriptionStatus);
/** Detailed subscription-cancellation success branch. */
class CancelSubscriptionSuccess {
    success;
    subscription_end_date;
    static __fields = [["success", _runtime_1.py.MISSING], ["subscription_end_date", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CancelSubscriptionSuccess, __args); Object.freeze(this); }
}
exports.CancelSubscriptionSuccess = CancelSubscriptionSuccess;
_runtime_1.py.classType(CancelSubscriptionSuccess);
/** Subscription-cancellation error branch. */
class CancelSubscriptionGeneralError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CancelSubscriptionGeneralError, __args); Object.freeze(this); }
}
exports.CancelSubscriptionGeneralError = CancelSubscriptionGeneralError;
_runtime_1.py.classType(CancelSubscriptionGeneralError);
/** Nullable card metadata selected by Nissan Pay. */
class NissanPayPaymentMethodCard {
    payment_processor;
    payment_icon;
    is_default;
    last_four_digits;
    expiry_month;
    expiry_year;
    status;
    static __fields = [["payment_processor", _runtime_1.py.MISSING], ["payment_icon", _runtime_1.py.MISSING], ["is_default", _runtime_1.py.MISSING], ["last_four_digits", _runtime_1.py.MISSING], ["expiry_month", _runtime_1.py.MISSING], ["expiry_year", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanPayPaymentMethodCard, __args); Object.freeze(this); }
}
exports.NissanPayPaymentMethodCard = NissanPayPaymentMethodCard;
_runtime_1.py.classType(NissanPayPaymentMethodCard);
/** Nullable payment methods and digital-wallet URL. */
class NissanPayAccount {
    payment_methods;
    digital_wallet_url;
    static __fields = [["payment_methods", _runtime_1.py.MISSING], ["digital_wallet_url", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanPayAccount, __args); Object.freeze(this); }
}
exports.NissanPayAccount = NissanPayAccount;
_runtime_1.py.classType(NissanPayAccount);
/** Nullable address and coordinates attached to a Nissan Pay order. */
class NissanPayOrderAddress {
    city;
    country;
    country_code;
    latitude;
    longitude;
    postal_code;
    state;
    state_code;
    street;
    static __fields = [["city", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING], ["country_code", _runtime_1.py.MISSING], ["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["state_code", _runtime_1.py.MISSING], ["street", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanPayOrderAddress, __args); Object.freeze(this); }
}
exports.NissanPayOrderAddress = NissanPayOrderAddress;
_runtime_1.py.classType(NissanPayOrderAddress);
/** Nullable payment metadata attached to an order. */
class NissanPayOrderPaymentMethod {
    type;
    processor;
    last_four_digits;
    static __fields = [["type", _runtime_1.py.MISSING], ["processor", _runtime_1.py.MISSING], ["last_four_digits", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanPayOrderPaymentMethod, __args); Object.freeze(this); }
}
exports.NissanPayOrderPaymentMethod = NissanPayOrderPaymentMethod;
_runtime_1.py.classType(NissanPayOrderPaymentMethod);
/** Energy charging order returned by Nissan Pay. */
class NissanPayEnergyChargeSession {
    order_date;
    total_cost;
    address;
    payment_method;
    cpo_brand;
    session_type;
    charge_start_time;
    charge_end_time;
    charge_duration;
    connector_type;
    total_energy;
    subtotal;
    service_fee_total;
    static __fields = [["order_date", _runtime_1.py.MISSING], ["total_cost", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["payment_method", _runtime_1.py.MISSING], ["cpo_brand", _runtime_1.py.MISSING], ["session_type", _runtime_1.py.MISSING], ["charge_start_time", _runtime_1.py.MISSING], ["charge_end_time", _runtime_1.py.MISSING], ["charge_duration", _runtime_1.py.MISSING], ["connector_type", _runtime_1.py.MISSING], ["total_energy", _runtime_1.py.MISSING], ["subtotal", _runtime_1.py.MISSING], ["service_fee_total", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanPayEnergyChargeSession, __args); Object.freeze(this); }
}
exports.NissanPayEnergyChargeSession = NissanPayEnergyChargeSession;
_runtime_1.py.classType(NissanPayEnergyChargeSession);
/** Nullable order-history pagination metadata. */
class NissanPayOrderHistoryPagination {
    next_page_cursor;
    total_size;
    static __fields = [["next_page_cursor", _runtime_1.py.MISSING], ["total_size", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanPayOrderHistoryPagination, __args); Object.freeze(this); }
}
exports.NissanPayOrderHistoryPagination = NissanPayOrderHistoryPagination;
_runtime_1.py.classType(NissanPayOrderHistoryPagination);
/** Required order entries and nullable pagination metadata. */
class NissanPayOrderHistory {
    items;
    pagination;
    static __fields = [["items", _runtime_1.py.MISSING], ["pagination", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanPayOrderHistory, __args); Object.freeze(this); }
}
exports.NissanPayOrderHistory = NissanPayOrderHistory;
_runtime_1.py.classType(NissanPayOrderHistory);
/** Nullable pricing details for a product selling model. */
class NissanStoreCatalogSellingModel {
    pricing_term_unit;
    retail_price;
    discounted_price;
    selling_model_type;
    selling_model_id;
    static __fields = [["pricing_term_unit", _runtime_1.py.MISSING], ["retail_price", _runtime_1.py.MISSING], ["discounted_price", _runtime_1.py.MISSING], ["selling_model_type", _runtime_1.py.MISSING], ["selling_model_id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStoreCatalogSellingModel, __args); Object.freeze(this); }
}
exports.NissanStoreCatalogSellingModel = NissanStoreCatalogSellingModel;
_runtime_1.py.classType(NissanStoreCatalogSellingModel);
/** Nullable child-product presentation data. */
class NissanStoreCatalogChildProduct {
    name;
    customer_facing;
    static __fields = [["name", _runtime_1.py.MISSING], ["customer_facing", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStoreCatalogChildProduct, __args); Object.freeze(this); }
}
exports.NissanStoreCatalogChildProduct = NissanStoreCatalogChildProduct;
_runtime_1.py.classType(NissanStoreCatalogChildProduct);
/** Nullable Nissan Store promotion details. */
class NissanStoreCatalogPromotion {
    promotion_id;
    priority;
    name;
    monthly_price;
    annual_price;
    end_date;
    description;
    static __fields = [["promotion_id", _runtime_1.py.MISSING], ["priority", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["monthly_price", _runtime_1.py.MISSING], ["annual_price", _runtime_1.py.MISSING], ["end_date", _runtime_1.py.MISSING], ["description", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStoreCatalogPromotion, __args); Object.freeze(this); }
}
exports.NissanStoreCatalogPromotion = NissanStoreCatalogPromotion;
_runtime_1.py.classType(NissanStoreCatalogPromotion);
/** Product package returned by the Nissan Store catalog. */
class NissanStoreCatalogPackage {
    short_description;
    trial_duration;
    product_image_url;
    long_description;
    selling_models;
    product_id;
    name;
    child_products;
    is_feature_on_demand;
    promotions;
    static __fields = [["short_description", _runtime_1.py.MISSING], ["trial_duration", _runtime_1.py.MISSING], ["product_image_url", _runtime_1.py.MISSING], ["long_description", _runtime_1.py.MISSING], ["selling_models", _runtime_1.py.MISSING], ["product_id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["child_products", _runtime_1.py.MISSING], ["is_feature_on_demand", _runtime_1.py.MISSING], ["promotions", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStoreCatalogPackage, __args); Object.freeze(this); }
}
exports.NissanStoreCatalogPackage = NissanStoreCatalogPackage;
_runtime_1.py.classType(NissanStoreCatalogPackage);
/** Nullable package list returned by the catalog union. */
class NissanStoreProductCatalog {
    packages;
    static __fields = [["packages", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanStoreProductCatalog, __args); Object.freeze(this); }
}
exports.NissanStoreProductCatalog = NissanStoreProductCatalog;
_runtime_1.py.classType(NissanStoreProductCatalog);
/** Successful Nissan Pay account synchronization. */
class UpsertNissanPayAccountSuccess {
    response_message;
    response_code;
    response;
    customer_id;
    static __fields = [["response_message", _runtime_1.py.MISSING], ["response_code", _runtime_1.py.MISSING], ["response", _runtime_1.py.MISSING], ["customer_id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpsertNissanPayAccountSuccess, __args); Object.freeze(this); }
}
exports.UpsertNissanPayAccountSuccess = UpsertNissanPayAccountSuccess;
_runtime_1.py.classType(UpsertNissanPayAccountSuccess);
/** Failed Nissan Pay account synchronization. */
class UpsertNissanPayAccountFailure {
    response_message;
    response_code;
    response;
    static __fields = [["response_message", _runtime_1.py.MISSING], ["response_code", _runtime_1.py.MISSING], ["response", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpsertNissanPayAccountFailure, __args); Object.freeze(this); }
}
exports.UpsertNissanPayAccountFailure = UpsertNissanPayAccountFailure;
_runtime_1.py.classType(UpsertNissanPayAccountFailure);
//# sourceMappingURL=commerce_models.js.map