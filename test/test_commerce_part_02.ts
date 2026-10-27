// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Awaitable = $.Awaitable;
const Mapping = $.Mapping;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client, product_input } from "./test_commerce";

import { CancelSubscriptionInput, NissanStoreCatalogChildProduct, NissanStoreCatalogPackage, NissanStoreCatalogPromotion, NissanStoreCatalogSellingModel, NissanStoreClientOrigin, NissanStoreProductCatalog, ProductCatalogInput, ReadOnlyError, UnselectedCommerceResult, UpsertNissanPayAccountFailure } from "../src/index";

import { add_product_to_cart_variables, cancel_pending_subscription_variables, cancel_subscription_variables, nissan_pay_order_history_variables, nissan_store_link_variables, product_catalog_variables } from "../src/commerce_inputs";

import { parse_product_catalog, parse_upsert_nissan_pay_account } from "../src/commerce_parsing";

/** Translated upstream test_parse_product_catalog_and_upsert_result. */
export function test_parse_product_catalog_and_upsert_result(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_product_catalog, [Object.assign({}, {["productCatalog"]: Object.assign({}, {["__typename"]: "NSProductCatalog"}, {["packages"]: [null, Object.assign({}, {["__typename"]: "Package"}, {["shortDescription"]: "Package"}, {["npTrialDuration"]: null}, {["productImageUrl"]: null}, {["longDescription"]: null}, {["sellingModels"]: [Object.assign({}, {["__typename"]: "SellingModel"}, {["sellingModelPricingTermUnit"]: "MONTH"}, {["retailPrice"]: 10}, {["discountedPrice"]: 8.5}, {["sellingModelType"]: "SUBSCRIPTION"}, {["sellingModelId"]: "model-id"})]}, {["productId"]: "product-id"}, {["name"]: "Feature"}, {["childProducts"]: [Object.assign({}, {["__typename"]: "ChildProduct"}, {["name"]: "Child"}, {["npCustomerFacing"]: true})]}, {["isFoD"]: true}, {["promotions"]: [Object.assign({}, {["__typename"]: "Promotion"}, {["promotionId"]: "promotion-id"}, {["priority"]: 1}, {["name"]: "Offer"}, {["monthlyPromotionPrice"]: 7}, {["annualPromotionPrice"]: 70}, {["endDate"]: "2026-12-31"}, {["description"]: null})]})]})})], null), $.call(NissanStoreProductCatalog, [[null, $.call(NissanStoreCatalogPackage, ["Package", null, null, null, [$.call(NissanStoreCatalogSellingModel, ["MONTH", 10.0, 8.5, "SUBSCRIPTION", "model-id"], null)], "product-id", "Feature", [$.call(NissanStoreCatalogChildProduct, ["Child", true], null)], true, [$.call(NissanStoreCatalogPromotion, ["promotion-id", 1, "Offer", 7.0, 70.0, "2026-12-31", null], null)]], null)]], null), "test_commerce_part_02.py:41: parse_product_catalog({'productCatalog': {'__typename': 'NSProductCatalog', 'packages': [None, {'__typename': 'Package', 'shortDescription': 'Package', 'npTrialDuration': None, 'productImageUrl': None, 'longDescription': None, 'sellingModels': [{'__typename': 'SellingModel', 'sellingModelPricingTermUnit': 'MONTH', 'retailPrice': 10, 'discountedPrice': 8.5, 'sellingModelType': 'SUBSCRIPTION', 'sellingModelId': 'model-id'}], 'productId': 'product-id', 'name': 'Feature', 'childProducts': [{'__typename': 'ChildProduct', 'name': 'Child', 'npCustomerFacing': True}], 'isFoD': True, 'promotions': [{'__typename': 'Promotion', 'promotionId': 'promotion-id', 'priority': 1, 'name': 'Offer', 'monthlyPromotionPrice': 7, 'annualPromotionPrice': 70, 'endDate': '2026-12-31', 'description': None}]}]}}) == NissanStoreProductCatalog((None, NissanStoreCatalogPackage('Package', None, None, None, (NissanStoreCatalogSellingModel('MONTH', 10.0, 8.5, 'SUBSCRIPTION', 'model-id'),), 'product-id', 'Feature', (NissanStoreCatalogChildProduct('Child', True),), True, (NissanStoreCatalogPromotion('promotion-id', 1, 'Offer', 7.0, 70.0, '2026-12-31', None),))))");
$.assertEqual($.call(parse_upsert_nissan_pay_account, [Object.assign({}, {["upsertNissanPayAccount"]: Object.assign({}, {["__typename"]: "UpsertNissanPayAccountFailureResponse"}, {["responseMessage"]: null}, {["responseCode"]: "FAILED"}, {["response"]: null})})], null), $.call(UpsertNissanPayAccountFailure, [null, "FAILED", null], null), "test_commerce_part_02.py:124: parse_upsert_nissan_pay_account({'upsertNissanPayAccount': {'__typename': 'UpsertNissanPayAccountFailureResponse', 'responseMessage': None, 'responseCode': 'FAILED', 'response': None}}) == UpsertNissanPayAccountFailure(None, 'FAILED', None)");
$.assertEqual($.call(parse_upsert_nissan_pay_account, [Object.assign({}, {["upsertNissanPayAccount"]: Object.assign({}, {["__typename"]: "FutureUpsertResult"})})], null), $.call(UnselectedCommerceResult, ["FutureUpsertResult"], null), "test_commerce_part_02.py:134: parse_upsert_nissan_pay_account({'upsertNissanPayAccount': {'__typename': 'FutureUpsertResult'}}) == UnselectedCommerceResult('FutureUpsertResult')");
}

/** Translated upstream test_client_wires_all_commerce_operations. */
export async function test_client_wires_all_commerce_operations(...__args: any[]): any {
let call, cancellation, catalog, payload, payloads, product, sdk, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, ["addProductToNissanStoreCart", null], null), $.call(FakeResponse, ["cancelPendingSubscription", Object.assign({}, {["__typename"]: "FutureStatus"})], null), $.call(FakeResponse, ["cancelSubscription", null], null), $.call(FakeResponse, ["createNissanStoreFODTrialCheckoutLink", null], null), $.call(FakeResponse, ["nissanPay", null], null), $.call(FakeResponse, ["nissanPay", null], null), $.call(FakeResponse, ["nissanPay", null], null), $.call(FakeResponse, ["nissanStoreCheckoutURL", null], null), $.call(FakeResponse, ["productCatalog", null], null), $.call(FakeResponse, ["upsertNissanPayAccount", null], null)], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
product = $.call(product_input, [], null);
cancellation = $.call(CancelSubscriptionInput, ["subscription-id"], null);
catalog = $.call(ProductCatalogInput, ["VIN"], null);
$.assert((((await $.call($.attr(sdk, "async_add_product_to_nissan_store_cart"), [product], null)) === null)), "test_commerce_part_02.py:157: await sdk.async_add_product_to_nissan_store_cart(product) is None");
$.assertEqual((await $.call($.attr(sdk, "async_cancel_pending_subscription"), ["pending-id"], null)), $.call(UnselectedCommerceResult, ["FutureStatus"], null), "test_commerce_part_02.py:158: await sdk.async_cancel_pending_subscription('pending-id') == UnselectedCommerceResult('FutureStatus')");
$.assert((((await $.call($.attr(sdk, "async_cancel_subscription"), [cancellation], null)) === null)), "test_commerce_part_02.py:161: await sdk.async_cancel_subscription(cancellation) is None");
$.assert((((await $.call($.attr(sdk, "async_create_nissan_store_fod_trial_checkout_link"), ["VIN"], null)) === null)), "test_commerce_part_02.py:162: await sdk.async_create_nissan_store_fod_trial_checkout_link('VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_get_digital_wallet_url"), [], null)) === null)), "test_commerce_part_02.py:163: await sdk.async_get_digital_wallet_url() is None");
$.assert((((await $.call($.attr(sdk, "async_get_nissan_pay"), [], null)) === null)), "test_commerce_part_02.py:164: await sdk.async_get_nissan_pay() is None");
$.assert((((await $.call($.attr(sdk, "async_get_nissan_pay_order_history"), ["VIN"], null)) === null)), "test_commerce_part_02.py:165: await sdk.async_get_nissan_pay_order_history('VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_get_nissan_store_checkout_url"), ["VIN"], null)) === null)), "test_commerce_part_02.py:166: await sdk.async_get_nissan_store_checkout_url('VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_get_product_catalog"), [catalog], null)) === null)), "test_commerce_part_02.py:167: await sdk.async_get_product_catalog(catalog) is None");
$.assert((((await $.call($.attr(sdk, "async_upsert_nissan_pay_account"), [], null)) === null)), "test_commerce_part_02.py:168: await sdk.async_upsert_nissan_pay_account() is None");
payloads = [];
for (call of $.iterable($.attr(session, "calls"))) {
payload = $.get(call, "json");
$.assert($.call($.isinstance, [payload, Mapping], null), "test_commerce_part_02.py:173: isinstance(payload, Mapping)");
$.call($.attr(payloads, "append"), [payload], null);
}
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "operationName")); } return __out; })(), ["AddProductToNissanStoreCart", "CancelPendingSubscription", "CancelSubscription", "CreateNissanStoreFODTrialCheckoutLink", "DigitalWalletURL", "NissanPay", "NissanPayOrderHistory", "NissanStoreCheckoutURL", "ProductCatalog", "UpsertNissanPayAccount"], "test_commerce_part_02.py:175: [payload['operationName'] for payload in payloads] == ['AddProductToNissanStoreCart', 'CancelPendingSubscription', 'CancelSubscription', 'CreateNissanStoreFODTrialCheckoutLink', 'DigitalWalletURL', 'NissanPay', 'NissanPayOrderHistory', 'NissanStoreCheckoutURL', 'ProductCatalog', 'UpsertNissanPayAccount']");
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "variables")); } return __out; })(), [$.call(add_product_to_cart_variables, [product], null), $.call(cancel_pending_subscription_variables, ["pending-id"], null), $.call(cancel_subscription_variables, [cancellation], null), $.call(nissan_store_link_variables, ["VIN", $.attr(NissanStoreClientOrigin, "ONE_APP")], null), {}, {}, $.call(nissan_pay_order_history_variables, ["VIN"], null), $.call(nissan_store_link_variables, ["VIN", $.attr(NissanStoreClientOrigin, "ONE_APP")], null), $.call(product_catalog_variables, [catalog], null), {}], "test_commerce_part_02.py:187: [payload['variables'] for payload in payloads] == [add_product_to_cart_variables(product), cancel_pending_subscription_variables('pending-id'), cancel_subscription_variables(cancellation), nissan_store_link_variables('VIN', NissanStoreClientOrigin.ONE_APP), {}, {}, nissan_pay_order_history_variables('VIN'), nissan_store_link_variables('VIN', NissanStoreClientOrigin.ONE_APP), product_catalog_variables(catalog), {}]");
}

/** Translated upstream test_read_only_mode_blocks_every_commerce_mutation_before_network. */
export async function test_read_only_mode_blocks_every_commerce_mutation_before_network(...__args: any[]): any {
let call, calls, sdk, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": true}));
calls = [$.call($.attr(sdk, "async_add_product_to_nissan_store_cart"), [$.call(product_input, [], null)], null), $.call($.attr(sdk, "async_cancel_pending_subscription"), ["pending-id"], null), $.call($.attr(sdk, "async_cancel_subscription"), [$.call(CancelSubscriptionInput, ["subscription-id"], null)], null), $.call($.attr(sdk, "async_create_nissan_store_fod_trial_checkout_link"), ["VIN"], null), $.call($.attr(sdk, "async_upsert_nissan_pay_account"), [], null)];
for (call of $.iterable(calls)) {
await $.raises(ReadOnlyError, null, async () => {
(await call);
});
}
$.assertEqual($.attr(session, "calls"), [], "test_commerce_part_02.py:216: session.calls == []");
}

$.register("test_commerce_part_02.py::test_parse_product_catalog_and_upsert_result", test_parse_product_catalog_and_upsert_result, []);

$.register("test_commerce_part_02.py::test_client_wires_all_commerce_operations", test_client_wires_all_commerce_operations, []);

$.register("test_commerce_part_02.py::test_read_only_mode_blocks_every_commerce_mutation_before_network", test_read_only_mode_blocks_every_commerce_mutation_before_network, []);
