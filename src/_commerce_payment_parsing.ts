// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _required_nullable_datetime, _required_nullable_enum, _required_nullable_float, _required_typed_object } from "./_commerce_value_parsing";
export { _required_nullable_datetime, _required_nullable_enum, _required_nullable_float, _required_typed_object };

import { _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string } from "./account_parsing";
export { _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string };

import { NissanPayChargeSessionType, NissanPayEnergyChargeSession, NissanPayOrderAddress, NissanPayOrderPaymentMethod, NissanPayPaymentMethodCard, NissanPayPaymentMethodStatus, NissanPayPaymentProcessor, NissanStoreAddedProduct, NissanStoreCart, NissanStoreDeliveryGroup, NissanStorePricingTerm, NissanStoreSubscription } from "./commerce_models";
export { NissanPayChargeSessionType, NissanPayEnergyChargeSession, NissanPayOrderAddress, NissanPayOrderPaymentMethod, NissanPayPaymentMethodCard, NissanPayPaymentMethodStatus, NissanPayPaymentProcessor, NissanStoreAddedProduct, NissanStoreCart, NissanStoreDeliveryGroup, NissanStorePricingTerm, NissanStoreSubscription };

export function _parse_added_cart(value: Record<string, unknown>, path: string): NissanStoreCart;
/** Translated upstream _parse_added_cart. */
export function _parse_added_cart(...__args: any[]): any {
let delivery, delivery_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
delivery_path = ($.str(path) + ".deliveryGroup");
delivery = $.call(_required_typed_object, [value, "deliveryGroup", delivery_path], null);
return $.call(NissanStoreCart, [], Object.assign({}, {"id": $.call(_required_string, [value, "id", ($.str(path) + ".id")], null)}, {"delivery_group": $.call(NissanStoreDeliveryGroup, [$.call(_required_string, [delivery, "id", ($.str(delivery_path) + ".id")], null)], null)}));
}

export function _parse_added_product(value: Record<string, unknown>, path: string): NissanStoreAddedProduct;
/** Translated upstream _parse_added_product. */
export function _parse_added_product(...__args: any[]): any {
let subscription, subscription_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
subscription_path = ($.str(path) + ".subscription");
subscription = $.call(_required_optional_typed_object, [value, "subscription", subscription_path], null);
return $.call(NissanStoreAddedProduct, [], Object.assign({}, {"id": $.call(_required_string, [value, "id", ($.str(path) + ".id")], null)}, {"name": $.call(_required_nullable_string, [value, "name", ($.str(path) + ".name")], null)}, {"subscription": ($.truth(((subscription !== null))) ? $.call(_parse_added_subscription, [subscription, subscription_path], null) : null)}));
}

export function _parse_added_subscription(value: Record<string, unknown>, path: string): NissanStoreSubscription;
/** Translated upstream _parse_added_subscription. */
export function _parse_added_subscription(...__args: any[]): any {
let pricing, pricing_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
pricing_path = ($.str(path) + ".pricingTerm");
pricing = $.call(_required_optional_typed_object, [value, "pricingTerm", pricing_path], null);
return $.call(NissanStoreSubscription, [], Object.assign({}, {"id": $.call(_required_string, [value, "id", ($.str(path) + ".id")], null)}, {"selling_model_type": $.call(_required_nullable_string, [value, "sellingModelType", ($.str(path) + ".sellingModelType")], null)}, {"pricing_term": ($.truth(((pricing !== null))) ? $.call(NissanStorePricingTerm, [], Object.assign({}, {"value": $.call(_required_nullable_int, [pricing, "value", ($.str(pricing_path) + ".value")], null)}, {"unit": $.call(_required_nullable_string, [pricing, "unit", ($.str(pricing_path) + ".unit")], null)})) : null)}));
}

export function _parse_payment_card(value: Record<string, unknown>, path: string): NissanPayPaymentMethodCard;
/** Translated upstream _parse_payment_card. */
export function _parse_payment_card(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NissanPayPaymentMethodCard, [], Object.assign({}, {"payment_processor": $.call(_required_nullable_enum, [value, "paymentProcessor", NissanPayPaymentProcessor, ($.str(path) + ".paymentProcessor")], null)}, {"payment_icon": $.call(_required_nullable_string, [value, "paymentIcon", ($.str(path) + ".paymentIcon")], null)}, {"is_default": $.call(_required_nullable_bool, [value, "isDefault", ($.str(path) + ".isDefault")], null)}, {"last_four_digits": $.call(_required_nullable_string, [value, "last4Digits", ($.str(path) + ".last4Digits")], null)}, {"expiry_month": $.call(_required_nullable_int, [value, "expiryMonth", ($.str(path) + ".expiryMonth")], null)}, {"expiry_year": $.call(_required_nullable_int, [value, "expiryYear", ($.str(path) + ".expiryYear")], null)}, {"status": $.call(_required_nullable_enum, [value, "status", NissanPayPaymentMethodStatus, ($.str(path) + ".status")], null)}));
}

export function _parse_energy_charge_session(value: Record<string, unknown>, path: string): NissanPayEnergyChargeSession;
/** Translated upstream _parse_energy_charge_session. */
export function _parse_energy_charge_session(...__args: any[]): any {
let address, address_path, payment, payment_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
address_path = ($.str(path) + ".address");
address = $.call(_required_optional_typed_object, [value, "address", address_path], null);
payment_path = ($.str(path) + ".paymentMethod");
payment = $.call(_required_optional_typed_object, [value, "paymentMethod", payment_path], null);
return $.call(NissanPayEnergyChargeSession, [], Object.assign({}, {"order_date": $.call(_required_nullable_datetime, [value, "orderDate", ($.str(path) + ".orderDate")], null)}, {"total_cost": $.call(_required_nullable_float, [value, "totalCost", ($.str(path) + ".totalCost")], null)}, {"address": ($.truth(((address !== null))) ? $.call(_parse_order_address, [address, address_path], null) : null)}, {"payment_method": ($.truth(((payment !== null))) ? $.call(_parse_order_payment_method, [payment, payment_path], null) : null)}, {"cpo_brand": $.call(_required_nullable_string, [value, "cpoBrand", ($.str(path) + ".cpoBrand")], null)}, {"session_type": $.call(_required_nullable_enum, [value, "sessionType", NissanPayChargeSessionType, ($.str(path) + ".sessionType")], null)}, {"charge_start_time": $.call(_required_nullable_string, [value, "chargeStartTime", ($.str(path) + ".chargeStartTime")], null)}, {"charge_end_time": $.call(_required_nullable_string, [value, "chargeEndTime", ($.str(path) + ".chargeEndTime")], null)}, {"charge_duration": $.call(_required_nullable_string, [value, "chargeDuration", ($.str(path) + ".chargeDuration")], null)}, {"connector_type": $.call(_required_nullable_string, [value, "connectorType", ($.str(path) + ".connectorType")], null)}, {"total_energy": $.call(_required_nullable_float, [value, "totalEnergy", ($.str(path) + ".totalEnergy")], null)}, {"subtotal": $.call(_required_nullable_float, [value, "subtotal", ($.str(path) + ".subtotal")], null)}, {"service_fee_total": $.call(_required_nullable_float, [value, "serviceFeeTotal", ($.str(path) + ".serviceFeeTotal")], null)}));
}

export function _parse_order_address(value: Record<string, unknown>, path: string): NissanPayOrderAddress;
/** Translated upstream _parse_order_address. */
export function _parse_order_address(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NissanPayOrderAddress, [], Object.assign({}, {"city": $.call(_required_nullable_string, [value, "city", ($.str(path) + ".city")], null)}, {"country": $.call(_required_nullable_string, [value, "country", ($.str(path) + ".country")], null)}, {"country_code": $.call(_required_nullable_string, [value, "countryCode", ($.str(path) + ".countryCode")], null)}, {"latitude": $.call(_required_nullable_float, [value, "latitude", ($.str(path) + ".latitude")], null)}, {"longitude": $.call(_required_nullable_float, [value, "longitude", ($.str(path) + ".longitude")], null)}, {"postal_code": $.call(_required_nullable_string, [value, "postalCode", ($.str(path) + ".postalCode")], null)}, {"state": $.call(_required_nullable_string, [value, "state", ($.str(path) + ".state")], null)}, {"state_code": $.call(_required_nullable_string, [value, "stateCode", ($.str(path) + ".stateCode")], null)}, {"street": $.call(_required_nullable_string, [value, "street", ($.str(path) + ".street")], null)}));
}

export function _parse_order_payment_method(value: Record<string, unknown>, path: string): NissanPayOrderPaymentMethod;
/** Translated upstream _parse_order_payment_method. */
export function _parse_order_payment_method(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NissanPayOrderPaymentMethod, [], Object.assign({}, {"type": $.call(_required_nullable_string, [value, "type", ($.str(path) + ".type")], null)}, {"processor": $.call(_required_nullable_enum, [value, "processor", NissanPayPaymentProcessor, ($.str(path) + ".processor")], null)}, {"last_four_digits": $.call(_required_nullable_string, [value, "last4", ($.str(path) + ".last4")], null)}));
}
