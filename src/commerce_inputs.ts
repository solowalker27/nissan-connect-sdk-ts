// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

import { NissanStoreClientOrigin } from "./commerce_models";
export { NissanStoreClientOrigin };

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

/** Required product selection and optional promotion for Nissan Store. */
export class AddProductToCartInput {
readonly product_id: string;
readonly quantity: number;
readonly vin: string;
readonly product_selling_model_id: string;
readonly promotion_id: string | UnsetType | null;
static __fields = [["product_id", $.MISSING], ["quantity", $.MISSING], ["vin", $.MISSING], ["product_selling_model_id", $.MISSING], ["promotion_id", UNSET]];
constructor(product_id: string, quantity: number, vin: string, product_selling_model_id: string, promotion_id?: string | UnsetType | null);
constructor(options: { product_id: string; quantity: number; vin: string; product_selling_model_id: string; promotion_id?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AddProductToCartInput, __args);  Object.freeze(this); }
}
$.classType(AddProductToCartInput);

/** Optional nullable subscription identifier accepted by cancellation. */
export class CancelSubscriptionInput {
readonly subscription_id: string | UnsetType | null;
static __fields = [["subscription_id", UNSET]];
constructor(subscription_id?: string | UnsetType | null);
constructor(options: { subscription_id?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CancelSubscriptionInput, __args);  Object.freeze(this); }
}
$.classType(CancelSubscriptionInput);

/** Optional nullable VIN filter accepted by Nissan Store catalog. */
export class ProductCatalogInput {
readonly vin: string | UnsetType | null;
static __fields = [["vin", UNSET]];
constructor(vin?: string | UnsetType | null);
constructor(options: { vin?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ProductCatalogInput, __args);  Object.freeze(this); }
}
$.classType(ProductCatalogInput);

export function add_product_to_cart_variables(config: AddProductToCartInput): Record<string, unknown>;
/** Serialize Nissan Store add-to-cart variables. */
export function add_product_to_cart_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize Nissan Store add-to-cart variables. */
return Object.assign({}, {["addProductToNissanStoreCartInput"]: $.call(optional_input_fields, [], Object.assign({}, {"promotionId": $.attr(config, "promotion_id")}, {"productId": $.attr(config, "product_id")}, {"quantity": $.attr(config, "quantity")}, {"vin": $.attr(config, "vin")}, {"productSellingModelId": $.attr(config, "product_selling_model_id")}))});
}

export function cancel_pending_subscription_variables(pending_order_id: string): Record<string, unknown>;
/** Serialize a required pending-order identifier. */
export function cancel_pending_subscription_variables(...__args: any[]): any {
let {"pending_order_id": pending_order_id} = $.bind(__args, ["pending_order_id"], {}, [], null, null);
/** Serialize a required pending-order identifier. */
return Object.assign({}, {["cancelPendingSubscriptionInput"]: Object.assign({}, {["pendingOrderId"]: pending_order_id})});
}

export function cancel_subscription_variables(config: CancelSubscriptionInput): Record<string, unknown>;
/** Serialize subscription cancellation input. */
export function cancel_subscription_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize subscription cancellation input. */
return Object.assign({}, {["cancelSubscriptionInput"]: $.call(optional_input_fields, [], Object.assign({}, {"subscriptionId": $.attr(config, "subscription_id")}))});
}

export function nissan_store_link_variables(vin: string, client_origin: NissanStoreClientOrigin): Record<string, unknown>;
/** Serialize Nissan Store checkout-link variables. */
export function nissan_store_link_variables(...__args: any[]): any {
let {"vin": vin, "client_origin": client_origin} = $.bind(__args, ["vin", "client_origin"], {}, [], null, null);
/** Serialize Nissan Store checkout-link variables. */
return Object.assign({}, {["vin"]: vin}, {["clientOrigin"]: $.call(serialize_enum, [client_origin], null)});
}

export function nissan_pay_order_history_variables(vin: string, page_cursor?: string | UnsetType | null): Record<string, unknown>;
/** Serialize paginated Nissan Pay order-history variables. */
export function nissan_pay_order_history_variables(...__args: any[]): any {
let {"vin": vin, "page_cursor": page_cursor} = $.bind(__args, ["vin", "page_cursor"], {"page_cursor": UNSET}, [], null, null);
/** Serialize paginated Nissan Pay order-history variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"pageCursor": page_cursor}));
}

export function product_catalog_variables(config: ProductCatalogInput): Record<string, unknown>;
/** Serialize the required product-catalog input wrapper. */
export function product_catalog_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize the required product-catalog input wrapper. */
return Object.assign({}, {["productCatalogInput"]: $.call(optional_input_fields, [], Object.assign({}, {"vin": $.attr(config, "vin")}))});
}
