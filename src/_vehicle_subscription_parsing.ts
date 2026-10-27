// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _list, _nullable_aware_datetime, _nullable_graphql_bool, _nullable_graphql_string, _nullable_product_type, _nullable_purchase_type, _object, _optional_bool, _optional_object, _required_aware_datetime, _required_datetime, _required_float, _required_graphql_string } from "./_parsing_values";
export { _list, _nullable_aware_datetime, _nullable_graphql_bool, _nullable_graphql_string, _nullable_product_type, _nullable_purchase_type, _object, _optional_bool, _optional_object, _required_aware_datetime, _required_datetime, _required_float, _required_graphql_string };

import { VehiclePreferences, VehicleSubscription, VehicleSubscriptionPendingOrder, VehicleSubscriptionProduct, VehicleSubscriptions, VehicleWifiConsumption } from "./models";
export { VehiclePreferences, VehicleSubscription, VehicleSubscriptionPendingOrder, VehicleSubscriptionProduct, VehicleSubscriptions, VehicleWifiConsumption };

export function parse_vehicle_wifi_consumption(data: Record<string, unknown>): VehicleWifiConsumption | null;
/** Parse nullable vehicle Wi-Fi consumption with required inner fields. */
export function parse_vehicle_wifi_consumption(...__args: any[]): any {
let capabilities, consumption, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable vehicle Wi-Fi consumption with required inner fields. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
capabilities = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["capabilities"], null), "vehicle.capabilities"], null);
if ($.truth(((capabilities === null)))) {
return null;
}
consumption = $.call(_optional_object, [$.call($.attr(capabilities, "get"), ["wifiConsumption"], null), "vehicle.capabilities.wifiConsumption"], null);
if ($.truth(((consumption === null)))) {
return null;
}
return $.call(VehicleWifiConsumption, [], Object.assign({}, {"usage_percent": $.call(_required_float, [$.call($.attr(consumption, "get"), ["usagePercent"], null), "vehicle.capabilities.wifiConsumption.usagePercent"], null)}, {"usage_amount_gb": $.call(_required_float, [$.call($.attr(consumption, "get"), ["usageAmount"], null), "vehicle.capabilities.wifiConsumption.usageAmount"], null)}, {"data_cap_amount_gb": $.call(_required_float, [$.call($.attr(consumption, "get"), ["dataCapAmount"], null), "vehicle.capabilities.wifiConsumption.dataCapAmount"], null)}, {"updated_at": $.call(_required_datetime, [$.call($.attr(consumption, "get"), ["updatedAt"], null), "vehicle.capabilities.wifiConsumption.updatedAt"], null)}));
}

export function parse_vehicle_preferences(data: Record<string, unknown>): VehiclePreferences | null;
/** Parse nullable MIL/DTC maintenance-data sharing preferences. */
export function parse_vehicle_preferences(...__args: any[]): any {
let communication, mil_data_sharing, preferences, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable MIL/DTC maintenance-data sharing preferences. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
preferences = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["preferences"], null), "vehicle.preferences"], null);
if ($.truth(((preferences === null)))) {
return null;
}
communication = $.call(_optional_object, [$.call($.attr(preferences, "get"), ["communication"], null), "vehicle.preferences.communication"], null);
if ($.truth(((communication === null)))) {
return null;
}
mil_data_sharing = $.call(_optional_object, [$.call($.attr(communication, "get"), ["milDataSharing"], null), "vehicle.preferences.communication.milDataSharing"], null);
if ($.truth(((mil_data_sharing === null)))) {
return null;
}
return $.call(VehiclePreferences, [], Object.assign({}, {"enabled": $.call(_optional_bool, [$.call($.attr(mil_data_sharing, "get"), ["enabled"], null)], null)}, {"text": $.call(_optional_bool, [$.call($.attr(mil_data_sharing, "get"), ["text"], null)], null)}, {"phone": $.call(_optional_bool, [$.call($.attr(mil_data_sharing, "get"), ["phone"], null)], null)}, {"email": $.call(_optional_bool, [$.call($.attr(mil_data_sharing, "get"), ["email"], null)], null)}));
}

export function parse_vehicle_subscriptions(data: Record<string, unknown>, vin: string): VehicleSubscriptions | null;
/** Parse the vehicle subscription capability without app-level coercion. */
export function parse_vehicle_subscriptions(...__args: any[]): any {
let capabilities, index, path, raw_subscription, subscriptions, values, vehicle;
let {"data": data, "vin": vin} = $.bind(__args, ["data", "vin"], {}, [], null, null);
/** Parse the vehicle subscription capability without app-level coercion. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
$.call(_required_graphql_string, [$.call($.attr(vehicle, "get"), ["__typename"], null), "vehicle.__typename"], null);
capabilities = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["capabilities"], null), "vehicle.capabilities"], null);
if ($.truth(((capabilities === null)))) {
return $.call(VehicleSubscriptions, [], Object.assign({}, {"vin": vin}, {"subscriptions": null}));
}
$.call(_required_graphql_string, [$.call($.attr(capabilities, "get"), ["__typename"], null), "vehicle.capabilities.__typename"], null);
values = $.call(_list, [$.call($.attr(capabilities, "get"), ["subscriptions"], null), "vehicle.capabilities.subscriptions"], null);
subscriptions = [];
for ([index, raw_subscription] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((raw_subscription === null)))) {
$.call($.attr(subscriptions, "append"), [null], null);
continue;
}
path = ("vehicle.capabilities.subscriptions[" + $.str(index) + "]");
$.call($.attr(subscriptions, "append"), [$.call(_parse_vehicle_subscription, [$.call(_object, [raw_subscription, path], null), path], null)], null);
}
return $.call(VehicleSubscriptions, [], Object.assign({}, {"vin": vin}, {"subscriptions": $.call($.tuple, [subscriptions], null)}));
}

export function _parse_vehicle_subscription(value: Record<string, unknown>, path: string): VehicleSubscription;
/** Translated upstream _parse_vehicle_subscription. */
export function _parse_vehicle_subscription(...__args: any[]): any {
let pending_order, pending_order_path, pending_order_value, product, product_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_required_graphql_string, [$.call($.attr(value, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
product_path = ($.str(path) + ".product");
product = $.call(_parse_vehicle_subscription_product, [$.call(_object, [$.call($.attr(value, "get"), ["product"], null), product_path], null), product_path], null);
pending_order_path = ($.str(path) + ".pendingOrder");
pending_order_value = $.call(_optional_object, [$.call($.attr(value, "get"), ["pendingOrder"], null), pending_order_path], null);
pending_order = ($.truth(((pending_order_value !== null))) ? $.call(_parse_vehicle_subscription_pending_order, [pending_order_value, pending_order_path], null) : null);
return $.call(VehicleSubscription, [], Object.assign({}, {"subscription_id": $.call(_required_graphql_string, [$.call($.attr(value, "get"), ["subscriptionId"], null), ($.str(path) + ".subscriptionId")], null)}, {"subscription_service_type": $.call(_required_graphql_string, [$.call($.attr(value, "get"), ["subscriptionServiceType"], null), ($.str(path) + ".subscriptionServiceType")], null)}, {"purchase_type": $.call(_nullable_purchase_type, [$.call($.attr(value, "get"), ["purchaseType"], null), ($.str(path) + ".purchaseType")], null)}, {"product_type": $.call(_nullable_product_type, [$.call($.attr(value, "get"), ["productType"], null), ($.str(path) + ".productType")], null)}, {"next_billing_date": $.call(_nullable_aware_datetime, [$.call($.attr(value, "get"), ["nextBillingDate"], null), ($.str(path) + ".nextBillingDate")], null)}, {"goodwill_end_date": $.call(_nullable_aware_datetime, [$.call($.attr(value, "get"), ["goodwillEndDate"], null), ($.str(path) + ".goodwillEndDate")], null)}, {"goodwill_start_date": $.call(_nullable_aware_datetime, [$.call($.attr(value, "get"), ["goodwillStartDate"], null), ($.str(path) + ".goodwillStartDate")], null)}, {"grace_end_date": $.call(_nullable_aware_datetime, [$.call($.attr(value, "get"), ["graceEndDate"], null), ($.str(path) + ".graceEndDate")], null)}, {"subscription_start_date": $.call(_required_aware_datetime, [$.call($.attr(value, "get"), ["subscriptionStartDate"], null), ($.str(path) + ".subscriptionStartDate")], null)}, {"subscription_end_date": $.call(_nullable_aware_datetime, [$.call($.attr(value, "get"), ["subscriptionEndDate"], null), ($.str(path) + ".subscriptionEndDate")], null)}, {"is_active": $.call(_nullable_graphql_bool, [$.call($.attr(value, "get"), ["isActive"], null), ($.str(path) + ".isActive")], null)}, {"np_subscription_price": $.call(_nullable_graphql_string, [$.call($.attr(value, "get"), ["npSubscriptionPrice"], null), ($.str(path) + ".npSubscriptionPrice")], null)}, {"product": product}, {"pending_order": pending_order}));
}

export function _parse_vehicle_subscription_product(value: Record<string, unknown>, path: string): VehicleSubscriptionProduct;
/** Translated upstream _parse_vehicle_subscription_product. */
export function _parse_vehicle_subscription_product(...__args: any[]): any {
let index, raw_service, raw_services, services;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_required_graphql_string, [$.call($.attr(value, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
raw_services = $.call(_list, [$.call($.attr(value, "get"), ["services"], null), ($.str(path) + ".services")], null);
services = $.call($.tuple, [(() => { const __out: any = []; for (const [index, raw_service] of $.iterable($.call($.enumerate, [raw_services], null))) { __out.push(($.truth(((raw_service === null))) ? null : $.call(_required_graphql_string, [raw_service, ($.str(path) + ".services[" + $.str(index) + "]")], null))); } return __out; })()], null);
return $.call(VehicleSubscriptionProduct, [], Object.assign({}, {"product_id": $.call(_required_graphql_string, [$.call($.attr(value, "get"), ["productId"], null), ($.str(path) + ".productId")], null)}, {"marketing_name": $.call(_required_graphql_string, [$.call($.attr(value, "get"), ["marketingName"], null), ($.str(path) + ".marketingName")], null)}, {"description": $.call(_required_graphql_string, [$.call($.attr(value, "get"), ["description"], null), ($.str(path) + ".description")], null)}, {"services": services}));
}

export function _parse_vehicle_subscription_pending_order(value: Record<string, unknown>, path: string): VehicleSubscriptionPendingOrder;
/** Translated upstream _parse_vehicle_subscription_pending_order. */
export function _parse_vehicle_subscription_pending_order(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_required_graphql_string, [$.call($.attr(value, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
return $.call(VehicleSubscriptionPendingOrder, [], Object.assign({}, {"pending_order_id": $.call(_required_graphql_string, [$.call($.attr(value, "get"), ["pendingOrderId"], null), ($.str(path) + ".pendingOrderId")], null)}, {"package_name": $.call(_required_graphql_string, [$.call($.attr(value, "get"), ["packageName"], null), ($.str(path) + ".packageName")], null)}, {"activation_date": $.call(_nullable_aware_datetime, [$.call($.attr(value, "get"), ["activationDate"], null), ($.str(path) + ".activationDate")], null)}));
}
