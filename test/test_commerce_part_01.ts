// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const hashlib = $.hashlib;

const UTC = $.UTC;
const datetime = $.datetime;

const pytest = $.pytest;

import { EXPECTED_OPERATIONS, product_input } from "./test_commerce";

import { CancelPendingSubscriptionResult, CancelSubscriptionGeneralError, CancelSubscriptionInput, CancelSubscriptionSuccess, NissanPayAccount, NissanPayChargeSessionType, NissanPayEnergyChargeSession, NissanPayOrderAddress, NissanPayOrderHistory, NissanPayOrderHistoryPagination, NissanPayOrderPaymentMethod, NissanPayPaymentMethodCard, NissanPayPaymentMethodStatus, NissanPayPaymentProcessor, NissanStoreAddedProduct, NissanStoreCart, NissanStoreClientOrigin, NissanStoreDeliveryGroup, NissanStorePricingTerm, NissanStoreSubscription, ProductAddedToNissanStoreCart, ProductCatalogInput, UnselectedCommerceResult, operations } from "../src/index";

import { add_product_to_cart_variables, cancel_pending_subscription_variables, cancel_subscription_variables, nissan_pay_order_history_variables, nissan_store_link_variables, product_catalog_variables } from "../src/commerce_inputs";

import { parse_add_product_to_cart, parse_cancel_pending_subscription, parse_cancel_subscription, parse_digital_wallet_url, parse_nissan_pay, parse_nissan_pay_order_history, parse_nissan_store_checkout_url, parse_trial_checkout_link } from "../src/commerce_parsing";

/** Translated upstream test_commerce_operations_match_service_documents. */
export function test_commerce_operations_match_service_documents(...__args: any[]): any {
let constant, document, expected_id, operation_id;
let {} = $.bind(__args, [], {}, [], null, null);
for ([constant, expected_id] of $.iterable($.call($.attr(EXPECTED_OPERATIONS, "items"), [], null))) {
document = $.call($.getattr, [operations, constant], null);
operation_id = $.call($.getattr, [operations, ($.str(constant) + "_OPERATION_ID")], null);
$.assertEqual(operation_id, expected_id, "test_commerce_part_01.py:62: operation_id == expected_id");
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), expected_id, "test_commerce_part_01.py:63: hashlib.sha256(document.encode()).hexdigest() == expected_id");
}
}

/** Translated upstream test_commerce_inputs_preserve_required_optional_and_nullable_fields. */
export function test_commerce_inputs_preserve_required_optional_and_nullable_fields(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(add_product_to_cart_variables, [$.call(product_input, [], null)], null), Object.assign({}, {["addProductToNissanStoreCartInput"]: Object.assign({}, {["promotionId"]: null}, {["productId"]: "product-id"}, {["quantity"]: 1}, {["vin"]: "VIN"}, {["productSellingModelId"]: "selling-model-id"})}), "test_commerce_part_01.py:67: add_product_to_cart_variables(product_input()) == {'addProductToNissanStoreCartInput': {'promotionId': None, 'productId': 'product-id', 'quantity': 1, 'vin': 'VIN', 'productSellingModelId': 'selling-model-id'}}");
$.assertEqual($.call(cancel_pending_subscription_variables, ["pending-id"], null), Object.assign({}, {["cancelPendingSubscriptionInput"]: Object.assign({}, {["pendingOrderId"]: "pending-id"})}), "test_commerce_part_01.py:76: cancel_pending_subscription_variables('pending-id') == {'cancelPendingSubscriptionInput': {'pendingOrderId': 'pending-id'}}");
$.assertEqual($.call(cancel_subscription_variables, [$.call(CancelSubscriptionInput, [], null)], null), Object.assign({}, {["cancelSubscriptionInput"]: {}}), "test_commerce_part_01.py:79: cancel_subscription_variables(CancelSubscriptionInput()) == {'cancelSubscriptionInput': {}}");
$.assertEqual($.call(cancel_subscription_variables, [$.call(CancelSubscriptionInput, [null], null)], null), Object.assign({}, {["cancelSubscriptionInput"]: Object.assign({}, {["subscriptionId"]: null})}), "test_commerce_part_01.py:82: cancel_subscription_variables(CancelSubscriptionInput(None)) == {'cancelSubscriptionInput': {'subscriptionId': None}}");
$.assertEqual($.call(product_catalog_variables, [$.call(ProductCatalogInput, [], null)], null), Object.assign({}, {["productCatalogInput"]: {}}), "test_commerce_part_01.py:85: product_catalog_variables(ProductCatalogInput()) == {'productCatalogInput': {}}");
$.assertEqual($.call(product_catalog_variables, [$.call(ProductCatalogInput, [null], null)], null), Object.assign({}, {["productCatalogInput"]: Object.assign({}, {["vin"]: null})}), "test_commerce_part_01.py:86: product_catalog_variables(ProductCatalogInput(None)) == {'productCatalogInput': {'vin': None}}");
$.assertEqual($.call(nissan_pay_order_history_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}), "test_commerce_part_01.py:89: nissan_pay_order_history_variables('VIN') == {'vin': 'VIN'}");
$.assertEqual($.call(nissan_store_link_variables, ["VIN", $.attr(NissanStoreClientOrigin, "ONE_APP")], null), Object.assign({}, {["vin"]: "VIN"}, {["clientOrigin"]: "ONE_APP"}), "test_commerce_part_01.py:90: nissan_store_link_variables('VIN', NissanStoreClientOrigin.ONE_APP) == {'vin': 'VIN', 'clientOrigin': 'ONE_APP'}");
$.raises($.ValueError, "UNKNOWN_VALUE cannot be sent", () => {
$.call(nissan_store_link_variables, ["VIN", $.attr(NissanStoreClientOrigin, "UNKNOWN_VALUE")], null);
});
}

/** Translated upstream test_parse_add_to_cart_and_subscription_cancellations. */
export function test_parse_add_to_cart_and_subscription_cancellations(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_add_product_to_cart, [Object.assign({}, {["addProductToNissanStoreCart"]: Object.assign({}, {["__typename"]: "AddProductToNissanStoreCartOutput"}, {["cart"]: Object.assign({}, {["__typename"]: "Cart"}, {["id"]: "cart-id"}, {["deliveryGroup"]: Object.assign({}, {["__typename"]: "DeliveryGroup"}, {["id"]: "group-id"})})}, {["product"]: Object.assign({}, {["__typename"]: "Product"}, {["id"]: "product-id"}, {["name"]: null}, {["subscription"]: Object.assign({}, {["__typename"]: "Subscription"}, {["id"]: "subscription-id"}, {["sellingModelType"]: "MONTHLY"}, {["pricingTerm"]: Object.assign({}, {["__typename"]: "PricingTerm"}, {["value"]: 12}, {["unit"]: "MONTH"})})})})})], null), $.call(ProductAddedToNissanStoreCart, [$.call(NissanStoreCart, ["cart-id", $.call(NissanStoreDeliveryGroup, ["group-id"], null)], null), $.call(NissanStoreAddedProduct, ["product-id", null, $.call(NissanStoreSubscription, ["subscription-id", "MONTHLY", $.call(NissanStorePricingTerm, [12, "MONTH"], null)], null)], null)], null), "test_commerce_part_01.py:99: parse_add_product_to_cart({'addProductToNissanStoreCart': {'__typename': 'AddProductToNissanStoreCartOutput', 'cart': {'__typename': 'Cart', 'id': 'cart-id', 'deliveryGroup': {'__typename': 'DeliveryGroup', 'id': 'group-id'}}, 'product': {'__typename': 'Product', 'id': 'product-id', 'name': None, 'subscription': {'__typename': 'Subscription', 'id': 'subscription-id', 'sellingModelType': 'MONTHLY', 'pricingTerm': {'__typename': 'PricingTerm', 'value': 12, 'unit': 'MONTH'}}}}}) == ProductAddedToNissanStoreCart(NissanStoreCart('cart-id', NissanStoreDeliveryGroup('group-id')), NissanStoreAddedProduct('product-id', None, NissanStoreSubscription('subscription-id', 'MONTHLY', NissanStorePricingTerm(12, 'MONTH'))))");
$.assertEqual($.call(parse_cancel_pending_subscription, [Object.assign({}, {["cancelPendingSubscription"]: Object.assign({}, {["__typename"]: "ResponseStatusType"}, {["success"]: null})})], null), $.call(CancelPendingSubscriptionResult, [null], null), "test_commerce_part_01.py:137: parse_cancel_pending_subscription({'cancelPendingSubscription': {'__typename': 'ResponseStatusType', 'success': None}}) == CancelPendingSubscriptionResult(None)");
$.assertEqual($.call(parse_cancel_subscription, [Object.assign({}, {["cancelSubscription"]: Object.assign({}, {["__typename"]: "CancelSubscriptionSuccessResponse"}, {["success"]: true}, {["subscriptionEndDate"]: "2026-08-01T00:00:00Z"})})], null), $.call(CancelSubscriptionSuccess, [true, $.call(datetime, [2026, 8, 1], Object.assign({}, {"tzinfo": UTC}))], null), "test_commerce_part_01.py:145: parse_cancel_subscription({'cancelSubscription': {'__typename': 'CancelSubscriptionSuccessResponse', 'success': True, 'subscriptionEndDate': '2026-08-01T00:00:00Z'}}) == CancelSubscriptionSuccess(True, datetime(2026, 8, 1, tzinfo=UTC))");
$.assertEqual($.call(parse_cancel_subscription, [Object.assign({}, {["cancelSubscription"]: Object.assign({}, {["__typename"]: "CancelSubscriptionGeneralError"}, {["message"]: "Unable to cancel"})})], null), $.call(CancelSubscriptionGeneralError, ["Unable to cancel"], null), "test_commerce_part_01.py:154: parse_cancel_subscription({'cancelSubscription': {'__typename': 'CancelSubscriptionGeneralError', 'message': 'Unable to cancel'}}) == CancelSubscriptionGeneralError('Unable to cancel')");
}

/** Translated upstream test_parse_nissan_pay_methods_and_urls. */
export function test_parse_nissan_pay_methods_and_urls(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_trial_checkout_link, [Object.assign({}, {["createNissanStoreFODTrialCheckoutLink"]: "https://example.test/trial"})], null), "https://example.test/trial", "test_commerce_part_01.py:165: parse_trial_checkout_link({'createNissanStoreFODTrialCheckoutLink': 'https://example.test/trial'}) == 'https://example.test/trial'");
$.assertEqual($.call(parse_nissan_store_checkout_url, [Object.assign({}, {["nissanStoreCheckoutURL"]: "https://example.test/checkout"})], null), "https://example.test/checkout", "test_commerce_part_01.py:171: parse_nissan_store_checkout_url({'nissanStoreCheckoutURL': 'https://example.test/checkout'}) == 'https://example.test/checkout'");
$.assert((($.call(parse_digital_wallet_url, [Object.assign({}, {["nissanPay"]: Object.assign({}, {["__typename"]: "NissanPay"}, {["digitalWallet"]: Object.assign({}, {["__typename"]: "DigitalWallet"}, {["url"]: null})})})], null) === null)), "test_commerce_part_01.py:175: parse_digital_wallet_url({'nissanPay': {'__typename': 'NissanPay', 'digitalWallet': {'__typename': 'DigitalWallet', 'url': None}}}) is None");
$.assertEqual($.call(parse_nissan_pay, [Object.assign({}, {["nissanPay"]: Object.assign({}, {["__typename"]: "NissanPay"}, {["paymentMethods"]: [null, Object.assign({}, {["__typename"]: "NissanPayPaymentMethodCard"}, {["paymentProcessor"]: "VISA"}, {["paymentIcon"]: null}, {["isDefault"]: true}, {["last4Digits"]: "1234"}, {["expiryMonth"]: 8}, {["expiryYear"]: 2030}, {["status"]: "ACTIVE"}), Object.assign({}, {["__typename"]: "FuturePaymentMethod"})]}, {["digitalWallet"]: Object.assign({}, {["__typename"]: "DigitalWallet"}, {["url"]: "https://example.test/wallet"})})})], null), $.call(NissanPayAccount, [[null, $.call(NissanPayPaymentMethodCard, [$.attr(NissanPayPaymentProcessor, "VISA"), null, true, "1234", 8, 2030, $.attr(NissanPayPaymentMethodStatus, "ACTIVE")], null), $.call(UnselectedCommerceResult, ["FuturePaymentMethod"], null)], "https://example.test/wallet"], null), "test_commerce_part_01.py:186: parse_nissan_pay({'nissanPay': {'__typename': 'NissanPay', 'paymentMethods': [None, {'__typename': 'NissanPayPaymentMethodCard', 'paymentProcessor': 'VISA', 'paymentIcon': None, 'isDefault': True, 'last4Digits': '1234', 'expiryMonth': 8, 'expiryYear': 2030, 'status': 'ACTIVE'}, {'__typename': 'FuturePaymentMethod'}], 'digitalWallet': {'__typename': 'DigitalWallet', 'url': 'https://example.test/wallet'}}}) == NissanPayAccount((None, NissanPayPaymentMethodCard(NissanPayPaymentProcessor.VISA, None, True, '1234', 8, 2030, NissanPayPaymentMethodStatus.ACTIVE), UnselectedCommerceResult('FuturePaymentMethod')), 'https://example.test/wallet')");
}

/** Translated upstream test_parse_nissan_pay_order_history. */
export function test_parse_nissan_pay_order_history(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_nissan_pay_order_history, [Object.assign({}, {["nissanPay"]: Object.assign({}, {["__typename"]: "NissanPay"}, {["orderHistory"]: Object.assign({}, {["__typename"]: "OrderHistory"}, {["items"]: [null, Object.assign({}, {["__typename"]: "NissanPayEnergyChargeSession"}, {["orderDate"]: "2026-07-31T12:00:00Z"}, {["totalCost"]: 8.5}, {["address"]: Object.assign({}, {["__typename"]: "Address"}, {["city"]: "Franklin"}, {["country"]: "United States"}, {["countryCode"]: "US"}, {["latitude"]: 35.9}, {["longitude"]: -(86.8)}, {["postalCode"]: "37064"}, {["state"]: "Tennessee"}, {["stateCode"]: "TN"}, {["street"]: "1 Main St"})}, {["paymentMethod"]: Object.assign({}, {["__typename"]: "PaymentMethod"}, {["type"]: "CARD"}, {["processor"]: "FUTURE_PROCESSOR"}, {["last4"]: "1234"})}, {["cpoBrand"]: "Network"}, {["sessionType"]: "PLUG_AND_CHARGE"}, {["chargeStartTime"]: "start"}, {["chargeEndTime"]: "end"}, {["chargeDuration"]: "PT30M"}, {["connectorType"]: "CCS"}, {["totalEnergy"]: 15.2}, {["subtotal"]: 7.5}, {["serviceFeeTotal"]: 1.0})]}, {["pagination"]: Object.assign({}, {["__typename"]: "Pagination"}, {["nextPageCursor"]: null}, {["totalSize"]: 1})})})})], null), $.call(NissanPayOrderHistory, [[null, $.call(NissanPayEnergyChargeSession, [$.call(datetime, [2026, 7, 31, 12], Object.assign({}, {"tzinfo": UTC})), 8.5, $.call(NissanPayOrderAddress, ["Franklin", "United States", "US", 35.9, -(86.8), "37064", "Tennessee", "TN", "1 Main St"], null), $.call(NissanPayOrderPaymentMethod, ["CARD", $.attr(NissanPayPaymentProcessor, "UNKNOWN_VALUE"), "1234"], null), "Network", $.attr(NissanPayChargeSessionType, "PLUG_AND_CHARGE"), "start", "end", "PT30M", "CCS", 15.2, 7.5, 1.0], null)], $.call(NissanPayOrderHistoryPagination, [null, 1], null)], null), "test_commerce_part_01.py:229: parse_nissan_pay_order_history({'nissanPay': {'__typename': 'NissanPay', 'orderHistory': {'__typename': 'OrderHistory', 'items': [None, {'__typename': 'NissanPayEnergyChargeSession', 'orderDate': '2026-07-31T12:00:00Z', 'totalCost': 8.5, 'address': {'__typename': 'Address', 'city': 'Franklin', 'country': 'United States', 'countryCode': 'US', 'latitude': 35.9, 'longitude': -86.8, 'postalCode': '37064', 'state': 'Tennessee', 'stateCode': 'TN', 'street': '1 Main St'}, 'paymentMethod': {'__typename': 'PaymentMethod', 'type': 'CARD', 'processor': 'FUTURE_PROCESSOR', 'last4': '1234'}, 'cpoBrand': 'Network', 'sessionType': 'PLUG_AND_CHARGE', 'chargeStartTime': 'start', 'chargeEndTime': 'end', 'chargeDuration': 'PT30M', 'connectorType': 'CCS', 'totalEnergy': 15.2, 'subtotal': 7.5, 'serviceFeeTotal': 1.0}], 'pagination': {'__typename': 'Pagination', 'nextPageCursor': None, 'totalSize': 1}}}}) == NissanPayOrderHistory((None, NissanPayEnergyChargeSession(datetime(2026, 7, 31, 12, tzinfo=UTC), 8.5, NissanPayOrderAddress('Franklin', 'United States', 'US', 35.9, -86.8, '37064', 'Tennessee', 'TN', '1 Main St'), NissanPayOrderPaymentMethod('CARD', NissanPayPaymentProcessor.UNKNOWN_VALUE, '1234'), 'Network', NissanPayChargeSessionType.PLUG_AND_CHARGE, 'start', 'end', 'PT30M', 'CCS', 15.2, 7.5, 1.0)), NissanPayOrderHistoryPagination(None, 1))");
}

$.register("test_commerce_part_01.py::test_commerce_operations_match_service_documents", test_commerce_operations_match_service_documents, []);

$.register("test_commerce_part_01.py::test_commerce_inputs_preserve_required_optional_and_nullable_fields", test_commerce_inputs_preserve_required_optional_and_nullable_fields, []);

$.register("test_commerce_part_01.py::test_parse_add_to_cart_and_subscription_cancellations", test_parse_add_to_cart_and_subscription_cancellations, []);

$.register("test_commerce_part_01.py::test_parse_nissan_pay_methods_and_urls", test_parse_nissan_pay_methods_and_urls, []);

$.register("test_commerce_part_01.py::test_parse_nissan_pay_order_history", test_parse_nissan_pay_order_history, []);
