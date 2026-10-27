// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _parse_catalog_package } from "./_commerce_catalog_parsing";
export { _parse_catalog_package };

import { _parse_added_cart, _parse_added_product, _parse_energy_charge_session, _parse_payment_card } from "./_commerce_payment_parsing";
export { _parse_added_cart, _parse_added_product, _parse_energy_charge_session, _parse_payment_card };

import { _nullable_list, _required_list, _required_nullable_datetime, _required_typed_object } from "./_commerce_value_parsing";
export { _nullable_list, _required_list, _required_nullable_datetime, _required_typed_object };

import { _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename } from "./account_parsing";
export { _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename };

import { AddProductToCartResult, CancelPendingSubscriptionResult, CancelSubscriptionGeneralError, CancelSubscriptionResult, CancelSubscriptionStatus, CancelSubscriptionSuccess, NissanPayAccount, NissanPayOrder, NissanPayOrderHistory, NissanPayOrderHistoryPagination, NissanPayPaymentMethod, NissanStoreCatalogPackage, NissanStoreProductCatalog, ProductAddedToNissanStoreCart, ProductCatalogResult, UnselectedCommerceResult, UpsertNissanPayAccountFailure, UpsertNissanPayAccountResult, UpsertNissanPayAccountSuccess } from "./commerce_models";
export { AddProductToCartResult, CancelPendingSubscriptionResult, CancelSubscriptionGeneralError, CancelSubscriptionResult, CancelSubscriptionStatus, CancelSubscriptionSuccess, NissanPayAccount, NissanPayOrder, NissanPayOrderHistory, NissanPayOrderHistoryPagination, NissanPayPaymentMethod, NissanStoreCatalogPackage, NissanStoreProductCatalog, ProductAddedToNissanStoreCart, ProductCatalogResult, UnselectedCommerceResult, UpsertNissanPayAccountFailure, UpsertNissanPayAccountResult, UpsertNissanPayAccountSuccess };

export function parse_add_product_to_cart(data: Record<string, unknown>): AddProductToCartResult | null;
/** Parse every selected Nissan Store add-to-cart union branch. */
export function parse_add_product_to_cart(...__args: any[]): any {
let cart, product, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected Nissan Store add-to-cart union branch. */
root_field = "addProductToNissanStoreCart";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth((!$.eq(typename, "AddProductToNissanStoreCartOutput")))) {
return $.call(UnselectedCommerceResult, [typename], null);
}
cart = $.call(_required_optional_typed_object, [root, "cart", ($.str(root_field) + ".cart")], null);
product = $.call(_required_optional_typed_object, [root, "product", ($.str(root_field) + ".product")], null);
return $.call(ProductAddedToNissanStoreCart, [], Object.assign({}, {"cart": ($.truth(((cart !== null))) ? $.call(_parse_added_cart, [cart, ($.str(root_field) + ".cart")], null) : null)}, {"product": ($.truth(((product !== null))) ? $.call(_parse_added_product, [product, ($.str(root_field) + ".product")], null) : null)}));
}

export function parse_cancel_pending_subscription(data: Record<string, unknown>): CancelPendingSubscriptionResult | UnselectedCommerceResult;
/** Parse pending-subscription cancellation status. */
export function parse_cancel_pending_subscription(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse pending-subscription cancellation status. */
root_field = "cancelPendingSubscription";
root = $.call(_required_typed_object, [data, root_field, root_field], null);
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "ResponseStatusType")))) {
return $.call(CancelPendingSubscriptionResult, [$.call(_required_nullable_bool, [root, "success", ($.str(root_field) + ".success")], null)], null);
}
return $.call(UnselectedCommerceResult, [typename], null);
}

export function parse_cancel_subscription(data: Record<string, unknown>): CancelSubscriptionResult | null;
/** Parse every selected subscription-cancellation union branch. */
export function parse_cancel_subscription(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected subscription-cancellation union branch. */
root_field = "cancelSubscription";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "ResponseStatus")))) {
return $.call(CancelSubscriptionStatus, [$.call(_required_nullable_bool, [root, "success", ($.str(root_field) + ".success")], null)], null);
}
if ($.truth(($.eq(typename, "CancelSubscriptionSuccessResponse")))) {
return $.call(CancelSubscriptionSuccess, [], Object.assign({}, {"success": $.call(_required_nullable_bool, [root, "success", ($.str(root_field) + ".success")], null)}, {"subscription_end_date": $.call(_required_nullable_datetime, [root, "subscriptionEndDate", ($.str(root_field) + ".subscriptionEndDate")], null)}));
}
if ($.truth(($.eq(typename, "CancelSubscriptionGeneralError")))) {
return $.call(CancelSubscriptionGeneralError, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
return $.call(UnselectedCommerceResult, [typename], null);
}

export function parse_trial_checkout_link(data: Record<string, unknown>): string | null;
/** Parse the nullable feature-on-demand trial checkout link. */
export function parse_trial_checkout_link(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable feature-on-demand trial checkout link. */
return $.call(_required_nullable_string, [data, "createNissanStoreFODTrialCheckoutLink", "createNissanStoreFODTrialCheckoutLink"], null);
}

export function parse_digital_wallet_url(data: Record<string, unknown>): string | null;
/** Parse the nullable Nissan Pay digital-wallet URL. */
export function parse_digital_wallet_url(...__args: any[]): any {
let nissan_pay, wallet;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable Nissan Pay digital-wallet URL. */
nissan_pay = $.call(_required_optional_typed_object, [data, "nissanPay", "nissanPay"], null);
if ($.truth(((nissan_pay === null)))) {
return null;
}
wallet = $.call(_required_optional_typed_object, [nissan_pay, "digitalWallet", "nissanPay.digitalWallet"], null);
if ($.truth(((wallet === null)))) {
return null;
}
return $.call(_required_nullable_string, [wallet, "url", "nissanPay.digitalWallet.url"], null);
}

export function parse_nissan_pay(data: Record<string, unknown>): NissanPayAccount | null;
/** Parse Nissan Pay methods and the nullable digital-wallet URL. */
export function parse_nissan_pay(...__args: any[]): any {
let index, item, methods, parsed_methods, path, root, typename, value, values, wallet;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse Nissan Pay methods and the nullable digital-wallet URL. */
root = $.call(_required_optional_typed_object, [data, "nissanPay", "nissanPay"], null);
if ($.truth(((root === null)))) {
return null;
}
methods = $.call(_nullable_list, [root, "paymentMethods", "nissanPay.paymentMethods"], null);
parsed_methods = null;
if ($.truth(((methods !== null)))) {
values = [];
for ([index, value] of $.iterable($.call($.enumerate, [methods], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(values, "append"), [null], null);
continue;
}
path = ("nissanPay.paymentMethods[" + $.str(index) + "]");
item = $.call(_typed_object, [value, path], null);
typename = $.call(_typename, [item, path], null);
if ($.truth(($.eq(typename, "NissanPayPaymentMethodCard")))) {
$.call($.attr(values, "append"), [$.call(_parse_payment_card, [item, path], null)], null);
} else {
$.call($.attr(values, "append"), [$.call(UnselectedCommerceResult, [typename], null)], null);
}
}
parsed_methods = $.call($.tuple, [values], null);
}
wallet = $.call(_required_optional_typed_object, [root, "digitalWallet", "nissanPay.digitalWallet"], null);
return $.call(NissanPayAccount, [], Object.assign({}, {"payment_methods": parsed_methods}, {"digital_wallet_url": ($.truth(((wallet !== null))) ? $.call(_required_nullable_string, [wallet, "url", "nissanPay.digitalWallet.url"], null) : null)}));
}

export function parse_nissan_pay_order_history(data: Record<string, unknown>): NissanPayOrderHistory | null;
/** Parse the nullable Nissan Pay energy order history. */
export function parse_nissan_pay_order_history(...__args: any[]): any {
let history, index, item, item_values, items, nissan_pay, pagination, path, typename, value;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable Nissan Pay energy order history. */
nissan_pay = $.call(_required_optional_typed_object, [data, "nissanPay", "nissanPay"], null);
if ($.truth(((nissan_pay === null)))) {
return null;
}
history = $.call(_required_optional_typed_object, [nissan_pay, "orderHistory", "nissanPay.orderHistory"], null);
if ($.truth(((history === null)))) {
return null;
}
item_values = $.call(_required_list, [history, "items", "nissanPay.orderHistory.items"], null);
items = [];
for ([index, value] of $.iterable($.call($.enumerate, [item_values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(items, "append"), [null], null);
continue;
}
path = ("nissanPay.orderHistory.items[" + $.str(index) + "]");
item = $.call(_typed_object, [value, path], null);
typename = $.call(_typename, [item, path], null);
if ($.truth(($.eq(typename, "NissanPayEnergyChargeSession")))) {
$.call($.attr(items, "append"), [$.call(_parse_energy_charge_session, [item, path], null)], null);
} else {
$.call($.attr(items, "append"), [$.call(UnselectedCommerceResult, [typename], null)], null);
}
}
pagination = $.call(_required_optional_typed_object, [history, "pagination", "nissanPay.orderHistory.pagination"], null);
return $.call(NissanPayOrderHistory, [], Object.assign({}, {"items": $.call($.tuple, [items], null)}, {"pagination": ($.truth(((pagination !== null))) ? $.call(NissanPayOrderHistoryPagination, [], Object.assign({}, {"next_page_cursor": $.call(_required_nullable_string, [pagination, "nextPageCursor", "nissanPay.orderHistory.pagination.nextPageCursor"], null)}, {"total_size": $.call(_required_nullable_int, [pagination, "totalSize", "nissanPay.orderHistory.pagination.totalSize"], null)})) : null)}));
}

export function parse_nissan_store_checkout_url(data: Record<string, unknown>): string | null;
/** Parse the nullable Nissan Store checkout URL. */
export function parse_nissan_store_checkout_url(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable Nissan Store checkout URL. */
return $.call(_required_nullable_string, [data, "nissanStoreCheckoutURL", "nissanStoreCheckoutURL"], null);
}

export function parse_product_catalog(data: Record<string, unknown>): ProductCatalogResult | null;
/** Parse every selected Nissan Store product-catalog union branch. */
export function parse_product_catalog(...__args: any[]): any {
let index, packages, parsed_packages, path, root, root_field, typename, value, values;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected Nissan Store product-catalog union branch. */
root_field = "productCatalog";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth((!$.eq(typename, "NSProductCatalog")))) {
return $.call(UnselectedCommerceResult, [typename], null);
}
packages = $.call(_nullable_list, [root, "packages", ($.str(root_field) + ".packages")], null);
parsed_packages = null;
if ($.truth(((packages !== null)))) {
values = [];
for ([index, value] of $.iterable($.call($.enumerate, [packages], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(values, "append"), [null], null);
continue;
}
path = ($.str(root_field) + ".packages[" + $.str(index) + "]");
$.call($.attr(values, "append"), [$.call(_parse_catalog_package, [$.call(_typed_object, [value, path], null), path], null)], null);
}
parsed_packages = $.call($.tuple, [values], null);
}
return $.call(NissanStoreProductCatalog, [parsed_packages], null);
}

export function parse_upsert_nissan_pay_account(data: Record<string, unknown>): UpsertNissanPayAccountResult | null;
/** Parse every selected Nissan Pay account-upsert union branch. */
export function parse_upsert_nissan_pay_account(...__args: any[]): any {
let response, response_code, response_message, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected Nissan Pay account-upsert union branch. */
root_field = "upsertNissanPayAccount";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth((!$.contains(new Set(["UpsertNissanPayAccountSuccessResponse", "UpsertNissanPayAccountFailureResponse"]), typename)))) {
return $.call(UnselectedCommerceResult, [typename], null);
}
response_message = $.call(_required_nullable_string, [root, "responseMessage", ($.str(root_field) + ".responseMessage")], null);
response_code = $.call(_required_nullable_string, [root, "responseCode", ($.str(root_field) + ".responseCode")], null);
response = $.call(_required_nullable_string, [root, "response", ($.str(root_field) + ".response")], null);
if ($.truth(($.eq(typename, "UpsertNissanPayAccountSuccessResponse")))) {
return $.call(UpsertNissanPayAccountSuccess, [response_message, response_code, response, $.call(_required_nullable_string, [root, "customerId", ($.str(root_field) + ".customerId")], null)], null);
}
return $.call(UpsertNissanPayAccountFailure, [response_message, response_code, response], null);
}
