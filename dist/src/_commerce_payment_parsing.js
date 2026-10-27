"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NissanStoreSubscription = exports.NissanStorePricingTerm = exports.NissanStoreDeliveryGroup = exports.NissanStoreCart = exports.NissanStoreAddedProduct = exports.NissanPayPaymentProcessor = exports.NissanPayPaymentMethodStatus = exports.NissanPayPaymentMethodCard = exports.NissanPayOrderPaymentMethod = exports.NissanPayOrderAddress = exports.NissanPayEnergyChargeSession = exports.NissanPayChargeSessionType = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_int = exports._required_nullable_bool = exports._required_typed_object = exports._required_nullable_float = exports._required_nullable_enum = exports._required_nullable_datetime = void 0;
exports._parse_added_cart = _parse_added_cart;
exports._parse_added_product = _parse_added_product;
exports._parse_added_subscription = _parse_added_subscription;
exports._parse_payment_card = _parse_payment_card;
exports._parse_energy_charge_session = _parse_energy_charge_session;
exports._parse_order_address = _parse_order_address;
exports._parse_order_payment_method = _parse_order_payment_method;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _commerce_value_parsing_1 = require("./_commerce_value_parsing");
Object.defineProperty(exports, "_required_nullable_datetime", { enumerable: true, get: function () { return _commerce_value_parsing_1._required_nullable_datetime; } });
Object.defineProperty(exports, "_required_nullable_enum", { enumerable: true, get: function () { return _commerce_value_parsing_1._required_nullable_enum; } });
Object.defineProperty(exports, "_required_nullable_float", { enumerable: true, get: function () { return _commerce_value_parsing_1._required_nullable_float; } });
Object.defineProperty(exports, "_required_typed_object", { enumerable: true, get: function () { return _commerce_value_parsing_1._required_typed_object; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return account_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
const commerce_models_1 = require("./commerce_models");
Object.defineProperty(exports, "NissanPayChargeSessionType", { enumerable: true, get: function () { return commerce_models_1.NissanPayChargeSessionType; } });
Object.defineProperty(exports, "NissanPayEnergyChargeSession", { enumerable: true, get: function () { return commerce_models_1.NissanPayEnergyChargeSession; } });
Object.defineProperty(exports, "NissanPayOrderAddress", { enumerable: true, get: function () { return commerce_models_1.NissanPayOrderAddress; } });
Object.defineProperty(exports, "NissanPayOrderPaymentMethod", { enumerable: true, get: function () { return commerce_models_1.NissanPayOrderPaymentMethod; } });
Object.defineProperty(exports, "NissanPayPaymentMethodCard", { enumerable: true, get: function () { return commerce_models_1.NissanPayPaymentMethodCard; } });
Object.defineProperty(exports, "NissanPayPaymentMethodStatus", { enumerable: true, get: function () { return commerce_models_1.NissanPayPaymentMethodStatus; } });
Object.defineProperty(exports, "NissanPayPaymentProcessor", { enumerable: true, get: function () { return commerce_models_1.NissanPayPaymentProcessor; } });
Object.defineProperty(exports, "NissanStoreAddedProduct", { enumerable: true, get: function () { return commerce_models_1.NissanStoreAddedProduct; } });
Object.defineProperty(exports, "NissanStoreCart", { enumerable: true, get: function () { return commerce_models_1.NissanStoreCart; } });
Object.defineProperty(exports, "NissanStoreDeliveryGroup", { enumerable: true, get: function () { return commerce_models_1.NissanStoreDeliveryGroup; } });
Object.defineProperty(exports, "NissanStorePricingTerm", { enumerable: true, get: function () { return commerce_models_1.NissanStorePricingTerm; } });
Object.defineProperty(exports, "NissanStoreSubscription", { enumerable: true, get: function () { return commerce_models_1.NissanStoreSubscription; } });
/** Translated upstream _parse_added_cart. */
function _parse_added_cart(...__args) {
    let delivery, delivery_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    delivery_path = (_runtime_1.py.str(path) + ".deliveryGroup");
    delivery = _runtime_1.py.call(_commerce_value_parsing_1._required_typed_object, [value, "deliveryGroup", delivery_path], null);
    return _runtime_1.py.call(commerce_models_1.NissanStoreCart, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_string, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "delivery_group": _runtime_1.py.call(commerce_models_1.NissanStoreDeliveryGroup, [_runtime_1.py.call(account_parsing_1._required_string, [delivery, "id", (_runtime_1.py.str(delivery_path) + ".id")], null)], null) }));
}
/** Translated upstream _parse_added_product. */
function _parse_added_product(...__args) {
    let subscription, subscription_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    subscription_path = (_runtime_1.py.str(path) + ".subscription");
    subscription = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "subscription", subscription_path], null);
    return _runtime_1.py.call(commerce_models_1.NissanStoreAddedProduct, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_string, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "subscription": (_runtime_1.py.truth(((subscription !== null))) ? _runtime_1.py.call(_parse_added_subscription, [subscription, subscription_path], null) : null) }));
}
/** Translated upstream _parse_added_subscription. */
function _parse_added_subscription(...__args) {
    let pricing, pricing_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    pricing_path = (_runtime_1.py.str(path) + ".pricingTerm");
    pricing = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "pricingTerm", pricing_path], null);
    return _runtime_1.py.call(commerce_models_1.NissanStoreSubscription, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_string, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "selling_model_type": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "sellingModelType", (_runtime_1.py.str(path) + ".sellingModelType")], null) }, { "pricing_term": (_runtime_1.py.truth(((pricing !== null))) ? _runtime_1.py.call(commerce_models_1.NissanStorePricingTerm, [], Object.assign({}, { "value": _runtime_1.py.call(account_parsing_1._required_nullable_int, [pricing, "value", (_runtime_1.py.str(pricing_path) + ".value")], null) }, { "unit": _runtime_1.py.call(account_parsing_1._required_nullable_string, [pricing, "unit", (_runtime_1.py.str(pricing_path) + ".unit")], null) })) : null) }));
}
/** Translated upstream _parse_payment_card. */
function _parse_payment_card(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(commerce_models_1.NissanPayPaymentMethodCard, [], Object.assign({}, { "payment_processor": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_enum, [value, "paymentProcessor", commerce_models_1.NissanPayPaymentProcessor, (_runtime_1.py.str(path) + ".paymentProcessor")], null) }, { "payment_icon": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "paymentIcon", (_runtime_1.py.str(path) + ".paymentIcon")], null) }, { "is_default": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "isDefault", (_runtime_1.py.str(path) + ".isDefault")], null) }, { "last_four_digits": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "last4Digits", (_runtime_1.py.str(path) + ".last4Digits")], null) }, { "expiry_month": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "expiryMonth", (_runtime_1.py.str(path) + ".expiryMonth")], null) }, { "expiry_year": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "expiryYear", (_runtime_1.py.str(path) + ".expiryYear")], null) }, { "status": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_enum, [value, "status", commerce_models_1.NissanPayPaymentMethodStatus, (_runtime_1.py.str(path) + ".status")], null) }));
}
/** Translated upstream _parse_energy_charge_session. */
function _parse_energy_charge_session(...__args) {
    let address, address_path, payment, payment_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    address_path = (_runtime_1.py.str(path) + ".address");
    address = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "address", address_path], null);
    payment_path = (_runtime_1.py.str(path) + ".paymentMethod");
    payment = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "paymentMethod", payment_path], null);
    return _runtime_1.py.call(commerce_models_1.NissanPayEnergyChargeSession, [], Object.assign({}, { "order_date": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_datetime, [value, "orderDate", (_runtime_1.py.str(path) + ".orderDate")], null) }, { "total_cost": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "totalCost", (_runtime_1.py.str(path) + ".totalCost")], null) }, { "address": (_runtime_1.py.truth(((address !== null))) ? _runtime_1.py.call(_parse_order_address, [address, address_path], null) : null) }, { "payment_method": (_runtime_1.py.truth(((payment !== null))) ? _runtime_1.py.call(_parse_order_payment_method, [payment, payment_path], null) : null) }, { "cpo_brand": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "cpoBrand", (_runtime_1.py.str(path) + ".cpoBrand")], null) }, { "session_type": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_enum, [value, "sessionType", commerce_models_1.NissanPayChargeSessionType, (_runtime_1.py.str(path) + ".sessionType")], null) }, { "charge_start_time": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "chargeStartTime", (_runtime_1.py.str(path) + ".chargeStartTime")], null) }, { "charge_end_time": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "chargeEndTime", (_runtime_1.py.str(path) + ".chargeEndTime")], null) }, { "charge_duration": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "chargeDuration", (_runtime_1.py.str(path) + ".chargeDuration")], null) }, { "connector_type": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "connectorType", (_runtime_1.py.str(path) + ".connectorType")], null) }, { "total_energy": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "totalEnergy", (_runtime_1.py.str(path) + ".totalEnergy")], null) }, { "subtotal": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "subtotal", (_runtime_1.py.str(path) + ".subtotal")], null) }, { "service_fee_total": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "serviceFeeTotal", (_runtime_1.py.str(path) + ".serviceFeeTotal")], null) }));
}
/** Translated upstream _parse_order_address. */
function _parse_order_address(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(commerce_models_1.NissanPayOrderAddress, [], Object.assign({}, { "city": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "city", (_runtime_1.py.str(path) + ".city")], null) }, { "country": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "country", (_runtime_1.py.str(path) + ".country")], null) }, { "country_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "countryCode", (_runtime_1.py.str(path) + ".countryCode")], null) }, { "latitude": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "latitude", (_runtime_1.py.str(path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "longitude", (_runtime_1.py.str(path) + ".longitude")], null) }, { "postal_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "postalCode", (_runtime_1.py.str(path) + ".postalCode")], null) }, { "state": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "state", (_runtime_1.py.str(path) + ".state")], null) }, { "state_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "stateCode", (_runtime_1.py.str(path) + ".stateCode")], null) }, { "street": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "street", (_runtime_1.py.str(path) + ".street")], null) }));
}
/** Translated upstream _parse_order_payment_method. */
function _parse_order_payment_method(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(commerce_models_1.NissanPayOrderPaymentMethod, [], Object.assign({}, { "type": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "type", (_runtime_1.py.str(path) + ".type")], null) }, { "processor": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_enum, [value, "processor", commerce_models_1.NissanPayPaymentProcessor, (_runtime_1.py.str(path) + ".processor")], null) }, { "last_four_digits": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "last4", (_runtime_1.py.str(path) + ".last4")], null) }));
}
//# sourceMappingURL=_commerce_payment_parsing.js.map