"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCatalogInput = exports.CancelSubscriptionInput = exports.AddProductToCartInput = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.NissanStoreClientOrigin = void 0;
exports.add_product_to_cart_variables = add_product_to_cart_variables;
exports.cancel_pending_subscription_variables = cancel_pending_subscription_variables;
exports.cancel_subscription_variables = cancel_subscription_variables;
exports.nissan_store_link_variables = nissan_store_link_variables;
exports.nissan_pay_order_history_variables = nissan_pay_order_history_variables;
exports.product_catalog_variables = product_catalog_variables;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const commerce_models_1 = require("./commerce_models");
Object.defineProperty(exports, "NissanStoreClientOrigin", { enumerable: true, get: function () { return commerce_models_1.NissanStoreClientOrigin; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
/** Required product selection and optional promotion for Nissan Store. */
class AddProductToCartInput {
    product_id;
    quantity;
    vin;
    product_selling_model_id;
    promotion_id;
    static __fields = [["product_id", _runtime_1.py.MISSING], ["quantity", _runtime_1.py.MISSING], ["vin", _runtime_1.py.MISSING], ["product_selling_model_id", _runtime_1.py.MISSING], ["promotion_id", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AddProductToCartInput, __args); Object.freeze(this); }
}
exports.AddProductToCartInput = AddProductToCartInput;
_runtime_1.py.classType(AddProductToCartInput);
/** Optional nullable subscription identifier accepted by cancellation. */
class CancelSubscriptionInput {
    subscription_id;
    static __fields = [["subscription_id", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CancelSubscriptionInput, __args); Object.freeze(this); }
}
exports.CancelSubscriptionInput = CancelSubscriptionInput;
_runtime_1.py.classType(CancelSubscriptionInput);
/** Optional nullable VIN filter accepted by Nissan Store catalog. */
class ProductCatalogInput {
    vin;
    static __fields = [["vin", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ProductCatalogInput, __args); Object.freeze(this); }
}
exports.ProductCatalogInput = ProductCatalogInput;
_runtime_1.py.classType(ProductCatalogInput);
/** Serialize Nissan Store add-to-cart variables. */
function add_product_to_cart_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize Nissan Store add-to-cart variables. */
    return Object.assign({}, { ["addProductToNissanStoreCartInput"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "promotionId": _runtime_1.py.attr(config, "promotion_id") }, { "productId": _runtime_1.py.attr(config, "product_id") }, { "quantity": _runtime_1.py.attr(config, "quantity") }, { "vin": _runtime_1.py.attr(config, "vin") }, { "productSellingModelId": _runtime_1.py.attr(config, "product_selling_model_id") })) });
}
/** Serialize a required pending-order identifier. */
function cancel_pending_subscription_variables(...__args) {
    let { "pending_order_id": pending_order_id } = _runtime_1.py.bind(__args, ["pending_order_id"], {}, [], null, null);
    /** Serialize a required pending-order identifier. */
    return Object.assign({}, { ["cancelPendingSubscriptionInput"]: Object.assign({}, { ["pendingOrderId"]: pending_order_id }) });
}
/** Serialize subscription cancellation input. */
function cancel_subscription_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize subscription cancellation input. */
    return Object.assign({}, { ["cancelSubscriptionInput"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "subscriptionId": _runtime_1.py.attr(config, "subscription_id") })) });
}
/** Serialize Nissan Store checkout-link variables. */
function nissan_store_link_variables(...__args) {
    let { "vin": vin, "client_origin": client_origin } = _runtime_1.py.bind(__args, ["vin", "client_origin"], {}, [], null, null);
    /** Serialize Nissan Store checkout-link variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["clientOrigin"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [client_origin], null) });
}
/** Serialize paginated Nissan Pay order-history variables. */
function nissan_pay_order_history_variables(...__args) {
    let { "vin": vin, "page_cursor": page_cursor } = _runtime_1.py.bind(__args, ["vin", "page_cursor"], { "page_cursor": graphql_input_1.UNSET }, [], null, null);
    /** Serialize paginated Nissan Pay order-history variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "pageCursor": page_cursor }));
}
/** Serialize the required product-catalog input wrapper. */
function product_catalog_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize the required product-catalog input wrapper. */
    return Object.assign({}, { ["productCatalogInput"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": _runtime_1.py.attr(config, "vin") })) });
}
//# sourceMappingURL=commerce_inputs.js.map