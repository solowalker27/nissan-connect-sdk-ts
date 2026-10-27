"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleWifiConsumption = exports.VehicleSubscriptions = exports.VehicleSubscriptionProduct = exports.VehicleSubscriptionPendingOrder = exports.VehicleSubscription = exports.VehiclePreferences = exports._required_graphql_string = exports._required_float = exports._required_datetime = exports._required_aware_datetime = exports._optional_object = exports._optional_bool = exports._object = exports._nullable_purchase_type = exports._nullable_product_type = exports._nullable_graphql_string = exports._nullable_graphql_bool = exports._nullable_aware_datetime = exports._list = void 0;
exports.parse_vehicle_wifi_consumption = parse_vehicle_wifi_consumption;
exports.parse_vehicle_preferences = parse_vehicle_preferences;
exports.parse_vehicle_subscriptions = parse_vehicle_subscriptions;
exports._parse_vehicle_subscription = _parse_vehicle_subscription;
exports._parse_vehicle_subscription_product = _parse_vehicle_subscription_product;
exports._parse_vehicle_subscription_pending_order = _parse_vehicle_subscription_pending_order;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _parsing_values_1 = require("./_parsing_values");
Object.defineProperty(exports, "_list", { enumerable: true, get: function () { return _parsing_values_1._list; } });
Object.defineProperty(exports, "_nullable_aware_datetime", { enumerable: true, get: function () { return _parsing_values_1._nullable_aware_datetime; } });
Object.defineProperty(exports, "_nullable_graphql_bool", { enumerable: true, get: function () { return _parsing_values_1._nullable_graphql_bool; } });
Object.defineProperty(exports, "_nullable_graphql_string", { enumerable: true, get: function () { return _parsing_values_1._nullable_graphql_string; } });
Object.defineProperty(exports, "_nullable_product_type", { enumerable: true, get: function () { return _parsing_values_1._nullable_product_type; } });
Object.defineProperty(exports, "_nullable_purchase_type", { enumerable: true, get: function () { return _parsing_values_1._nullable_purchase_type; } });
Object.defineProperty(exports, "_object", { enumerable: true, get: function () { return _parsing_values_1._object; } });
Object.defineProperty(exports, "_optional_bool", { enumerable: true, get: function () { return _parsing_values_1._optional_bool; } });
Object.defineProperty(exports, "_optional_object", { enumerable: true, get: function () { return _parsing_values_1._optional_object; } });
Object.defineProperty(exports, "_required_aware_datetime", { enumerable: true, get: function () { return _parsing_values_1._required_aware_datetime; } });
Object.defineProperty(exports, "_required_datetime", { enumerable: true, get: function () { return _parsing_values_1._required_datetime; } });
Object.defineProperty(exports, "_required_float", { enumerable: true, get: function () { return _parsing_values_1._required_float; } });
Object.defineProperty(exports, "_required_graphql_string", { enumerable: true, get: function () { return _parsing_values_1._required_graphql_string; } });
const models_1 = require("./models");
Object.defineProperty(exports, "VehiclePreferences", { enumerable: true, get: function () { return models_1.VehiclePreferences; } });
Object.defineProperty(exports, "VehicleSubscription", { enumerable: true, get: function () { return models_1.VehicleSubscription; } });
Object.defineProperty(exports, "VehicleSubscriptionPendingOrder", { enumerable: true, get: function () { return models_1.VehicleSubscriptionPendingOrder; } });
Object.defineProperty(exports, "VehicleSubscriptionProduct", { enumerable: true, get: function () { return models_1.VehicleSubscriptionProduct; } });
Object.defineProperty(exports, "VehicleSubscriptions", { enumerable: true, get: function () { return models_1.VehicleSubscriptions; } });
Object.defineProperty(exports, "VehicleWifiConsumption", { enumerable: true, get: function () { return models_1.VehicleWifiConsumption; } });
/** Parse nullable vehicle Wi-Fi consumption with required inner fields. */
function parse_vehicle_wifi_consumption(...__args) {
    let capabilities, consumption, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable vehicle Wi-Fi consumption with required inner fields. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    capabilities = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["capabilities"], null), "vehicle.capabilities"], null);
    if (_runtime_1.py.truth(((capabilities === null)))) {
        return null;
    }
    consumption = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["wifiConsumption"], null), "vehicle.capabilities.wifiConsumption"], null);
    if (_runtime_1.py.truth(((consumption === null)))) {
        return null;
    }
    return _runtime_1.py.call(models_1.VehicleWifiConsumption, [], Object.assign({}, { "usage_percent": _runtime_1.py.call(_parsing_values_1._required_float, [_runtime_1.py.call(_runtime_1.py.attr(consumption, "get"), ["usagePercent"], null), "vehicle.capabilities.wifiConsumption.usagePercent"], null) }, { "usage_amount_gb": _runtime_1.py.call(_parsing_values_1._required_float, [_runtime_1.py.call(_runtime_1.py.attr(consumption, "get"), ["usageAmount"], null), "vehicle.capabilities.wifiConsumption.usageAmount"], null) }, { "data_cap_amount_gb": _runtime_1.py.call(_parsing_values_1._required_float, [_runtime_1.py.call(_runtime_1.py.attr(consumption, "get"), ["dataCapAmount"], null), "vehicle.capabilities.wifiConsumption.dataCapAmount"], null) }, { "updated_at": _runtime_1.py.call(_parsing_values_1._required_datetime, [_runtime_1.py.call(_runtime_1.py.attr(consumption, "get"), ["updatedAt"], null), "vehicle.capabilities.wifiConsumption.updatedAt"], null) }));
}
/** Parse nullable MIL/DTC maintenance-data sharing preferences. */
function parse_vehicle_preferences(...__args) {
    let communication, mil_data_sharing, preferences, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable MIL/DTC maintenance-data sharing preferences. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    preferences = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["preferences"], null), "vehicle.preferences"], null);
    if (_runtime_1.py.truth(((preferences === null)))) {
        return null;
    }
    communication = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(preferences, "get"), ["communication"], null), "vehicle.preferences.communication"], null);
    if (_runtime_1.py.truth(((communication === null)))) {
        return null;
    }
    mil_data_sharing = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(communication, "get"), ["milDataSharing"], null), "vehicle.preferences.communication.milDataSharing"], null);
    if (_runtime_1.py.truth(((mil_data_sharing === null)))) {
        return null;
    }
    return _runtime_1.py.call(models_1.VehiclePreferences, [], Object.assign({}, { "enabled": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(mil_data_sharing, "get"), ["enabled"], null)], null) }, { "text": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(mil_data_sharing, "get"), ["text"], null)], null) }, { "phone": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(mil_data_sharing, "get"), ["phone"], null)], null) }, { "email": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(mil_data_sharing, "get"), ["email"], null)], null) }));
}
/** Parse the vehicle subscription capability without app-level coercion. */
function parse_vehicle_subscriptions(...__args) {
    let capabilities, index, path, raw_subscription, subscriptions, values, vehicle;
    let { "data": data, "vin": vin } = _runtime_1.py.bind(__args, ["data", "vin"], {}, [], null, null);
    /** Parse the vehicle subscription capability without app-level coercion. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["__typename"], null), "vehicle.__typename"], null);
    capabilities = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["capabilities"], null), "vehicle.capabilities"], null);
    if (_runtime_1.py.truth(((capabilities === null)))) {
        return _runtime_1.py.call(models_1.VehicleSubscriptions, [], Object.assign({}, { "vin": vin }, { "subscriptions": null }));
    }
    _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["__typename"], null), "vehicle.capabilities.__typename"], null);
    values = _runtime_1.py.call(_parsing_values_1._list, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["subscriptions"], null), "vehicle.capabilities.subscriptions"], null);
    subscriptions = [];
    for ([index, raw_subscription] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((raw_subscription === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(subscriptions, "append"), [null], null);
            continue;
        }
        path = ("vehicle.capabilities.subscriptions[" + _runtime_1.py.str(index) + "]");
        _runtime_1.py.call(_runtime_1.py.attr(subscriptions, "append"), [_runtime_1.py.call(_parse_vehicle_subscription, [_runtime_1.py.call(_parsing_values_1._object, [raw_subscription, path], null), path], null)], null);
    }
    return _runtime_1.py.call(models_1.VehicleSubscriptions, [], Object.assign({}, { "vin": vin }, { "subscriptions": _runtime_1.py.call(_runtime_1.py.tuple, [subscriptions], null) }));
}
/** Translated upstream _parse_vehicle_subscription. */
function _parse_vehicle_subscription(...__args) {
    let pending_order, pending_order_path, pending_order_value, product, product_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
    product_path = (_runtime_1.py.str(path) + ".product");
    product = _runtime_1.py.call(_parse_vehicle_subscription_product, [_runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["product"], null), product_path], null), product_path], null);
    pending_order_path = (_runtime_1.py.str(path) + ".pendingOrder");
    pending_order_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["pendingOrder"], null), pending_order_path], null);
    pending_order = (_runtime_1.py.truth(((pending_order_value !== null))) ? _runtime_1.py.call(_parse_vehicle_subscription_pending_order, [pending_order_value, pending_order_path], null) : null);
    return _runtime_1.py.call(models_1.VehicleSubscription, [], Object.assign({}, { "subscription_id": _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["subscriptionId"], null), (_runtime_1.py.str(path) + ".subscriptionId")], null) }, { "subscription_service_type": _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["subscriptionServiceType"], null), (_runtime_1.py.str(path) + ".subscriptionServiceType")], null) }, { "purchase_type": _runtime_1.py.call(_parsing_values_1._nullable_purchase_type, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["purchaseType"], null), (_runtime_1.py.str(path) + ".purchaseType")], null) }, { "product_type": _runtime_1.py.call(_parsing_values_1._nullable_product_type, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["productType"], null), (_runtime_1.py.str(path) + ".productType")], null) }, { "next_billing_date": _runtime_1.py.call(_parsing_values_1._nullable_aware_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["nextBillingDate"], null), (_runtime_1.py.str(path) + ".nextBillingDate")], null) }, { "goodwill_end_date": _runtime_1.py.call(_parsing_values_1._nullable_aware_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["goodwillEndDate"], null), (_runtime_1.py.str(path) + ".goodwillEndDate")], null) }, { "goodwill_start_date": _runtime_1.py.call(_parsing_values_1._nullable_aware_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["goodwillStartDate"], null), (_runtime_1.py.str(path) + ".goodwillStartDate")], null) }, { "grace_end_date": _runtime_1.py.call(_parsing_values_1._nullable_aware_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["graceEndDate"], null), (_runtime_1.py.str(path) + ".graceEndDate")], null) }, { "subscription_start_date": _runtime_1.py.call(_parsing_values_1._required_aware_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["subscriptionStartDate"], null), (_runtime_1.py.str(path) + ".subscriptionStartDate")], null) }, { "subscription_end_date": _runtime_1.py.call(_parsing_values_1._nullable_aware_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["subscriptionEndDate"], null), (_runtime_1.py.str(path) + ".subscriptionEndDate")], null) }, { "is_active": _runtime_1.py.call(_parsing_values_1._nullable_graphql_bool, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["isActive"], null), (_runtime_1.py.str(path) + ".isActive")], null) }, { "np_subscription_price": _runtime_1.py.call(_parsing_values_1._nullable_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["npSubscriptionPrice"], null), (_runtime_1.py.str(path) + ".npSubscriptionPrice")], null) }, { "product": product }, { "pending_order": pending_order }));
}
/** Translated upstream _parse_vehicle_subscription_product. */
function _parse_vehicle_subscription_product(...__args) {
    let index, raw_service, raw_services, services;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
    raw_services = _runtime_1.py.call(_parsing_values_1._list, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["services"], null), (_runtime_1.py.str(path) + ".services")], null);
    services = _runtime_1.py.call(_runtime_1.py.tuple, [(() => { const __out = []; for (const [index, raw_service] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_services], null))) {
            __out.push((_runtime_1.py.truth(((raw_service === null))) ? null : _runtime_1.py.call(_parsing_values_1._required_graphql_string, [raw_service, (_runtime_1.py.str(path) + ".services[" + _runtime_1.py.str(index) + "]")], null)));
        } return __out; })()], null);
    return _runtime_1.py.call(models_1.VehicleSubscriptionProduct, [], Object.assign({}, { "product_id": _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["productId"], null), (_runtime_1.py.str(path) + ".productId")], null) }, { "marketing_name": _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["marketingName"], null), (_runtime_1.py.str(path) + ".marketingName")], null) }, { "description": _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["description"], null), (_runtime_1.py.str(path) + ".description")], null) }, { "services": services }));
}
/** Translated upstream _parse_vehicle_subscription_pending_order. */
function _parse_vehicle_subscription_pending_order(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
    return _runtime_1.py.call(models_1.VehicleSubscriptionPendingOrder, [], Object.assign({}, { "pending_order_id": _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["pendingOrderId"], null), (_runtime_1.py.str(path) + ".pendingOrderId")], null) }, { "package_name": _runtime_1.py.call(_parsing_values_1._required_graphql_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["packageName"], null), (_runtime_1.py.str(path) + ".packageName")], null) }, { "activation_date": _runtime_1.py.call(_parsing_values_1._nullable_aware_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["activationDate"], null), (_runtime_1.py.str(path) + ".activationDate")], null) }));
}
//# sourceMappingURL=_vehicle_subscription_parsing.js.map