// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const hashlib = $.hashlib;

const Mapping = $.Mapping;

const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client, vehicle_subscription_payload, vehicle_subscription_product_payload } from "./test_client";

import { ProductType, PurchaseType, ReadOnlyError, ResponseError, VehiclePreferences, VehicleSubscription, VehicleSubscriptionPendingOrder, VehicleSubscriptionProduct, VehicleSubscriptions } from "../src/index";

/** Translated upstream test_get_vehicle_preferences_preserves_nullable_mil_data_sharing_flags. */
export async function test_get_vehicle_preferences_preserves_nullable_mil_data_sharing_flags(...__args: any[]): any {
let field, payload, query, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["preferences"]: Object.assign({}, {["communication"]: Object.assign({}, {["milDataSharing"]: Object.assign({}, {["enabled"]: true}, {["text"]: false}, {["phone"]: null}, {["email"]: true})})})})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_get_vehicle_preferences"), ["JN1TESTVIN"], null));
$.assertEqual(result, $.call(VehiclePreferences, [], Object.assign({}, {"enabled": true}, {"text": false}, {"phone": null}, {"email": true})), "test_client_part_06.py:56: result == VehiclePreferences(enabled=True, text=False, phone=None, email=True)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "VehiclePreferences", "test_client_part_06.py:63: payload['operationName'] == 'VehiclePreferences'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}), "test_client_part_06.py:64: payload['variables'] == {'vin': 'JN1TESTVIN'}");
query = $.get(payload, "query");
$.assert(($.contains(query, "preferences")), "test_client_part_06.py:66: 'preferences' in query");
$.assert(($.contains(query, "communication")), "test_client_part_06.py:67: 'communication' in query");
$.assert(($.contains(query, "milDataSharing")), "test_client_part_06.py:68: 'milDataSharing' in query");
$.assert($.call($.all, [(() => { const __out: any = []; for (const field of $.iterable(["enabled", "text", "phone", "email"])) { __out.push(($.contains(query, field))); } return __out; })()], null), "test_client_part_06.py:69: all((field in query for field in ('enabled', 'text', 'phone', 'email')))");
}

/** Translated upstream test_get_vehicle_preferences_preserves_nullable_response_chain. */
export async function test_get_vehicle_preferences_preserves_nullable_response_chain(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["preferences"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["preferences"]: Object.assign({}, {["communication"]: null})})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["preferences"]: Object.assign({}, {["communication"]: Object.assign({}, {["milDataSharing"]: null})})})})})], null)], null);
client = $.call(make_client, [session], null);
$.assert((((await $.call($.attr(client, "async_get_vehicle_preferences"), ["VIN"], null)) === null)), "test_client_part_06.py:88: await client.async_get_vehicle_preferences('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_preferences"), ["VIN"], null)) === null)), "test_client_part_06.py:89: await client.async_get_vehicle_preferences('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_preferences"), ["VIN"], null)) === null)), "test_client_part_06.py:90: await client.async_get_vehicle_preferences('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_preferences"), ["VIN"], null)) === null)), "test_client_part_06.py:91: await client.async_get_vehicle_preferences('VIN') is None");
}

/** Translated upstream test_update_vehicle_preferences_sends_complete_snapshot_with_nulls. */
export async function test_update_vehicle_preferences_sends_complete_snapshot_with_nulls(...__args: any[]): any {
let payload, preferences, query, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["updateVehiclePreferences"]: Object.assign({}, {["success"]: true})})})], null)], null);
preferences = $.call(VehiclePreferences, [], Object.assign({}, {"enabled": true}, {"text": false}, {"phone": null}, {"email": true}));
result = (await $.call($.attr($.call(make_client, [session], Object.assign({}, {"read_only": false})), "async_update_vehicle_preferences"), ["JN1TESTVIN", preferences], null));
$.assert(((result === true)), "test_client_part_06.py:114: result is True");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "UpdateVehiclePreferences", "test_client_part_06.py:116: payload['operationName'] == 'UpdateVehiclePreferences'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["communication"]: Object.assign({}, {["milDataSharing"]: Object.assign({}, {["enabled"]: true}, {["text"]: false}, {["phone"]: null}, {["email"]: true})})}), "test_client_part_06.py:117: payload['variables'] == {'vin': 'JN1TESTVIN', 'communication': {'milDataSharing': {'enabled': True, 'text': False, 'phone': None, 'email': True}}}");
query = $.get(payload, "query");
$.assert(($.contains(query, "$communication: UpdateVehiclePreferencesCommunicationInput!")), "test_client_part_06.py:129: '$communication: UpdateVehiclePreferencesCommunicationInput!' in query");
$.assert(($.contains(query, "... on ResponseStatus { success }")), "test_client_part_06.py:130: '... on ResponseStatus { success }' in query");
$.assert(($.contains(query, "... on GeneralError { message }")), "test_client_part_06.py:131: '... on GeneralError { message }' in query");
}

/** Translated upstream test_update_vehicle_preferences_respects_read_only_mode. */
export async function test_update_vehicle_preferences_respects_read_only_mode(...__args: any[]): any {
let preferences, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
preferences = $.call(VehiclePreferences, [null, null, null, null], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr($.call(make_client, [session], null), "async_update_vehicle_preferences"), ["VIN", preferences], null));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_06.py:142: session.calls == []");
}

/** Translated upstream test_update_vehicle_preferences_raises_server_message. */
export async function test_update_vehicle_preferences_raises_server_message(...__args: any[]): any {
let preferences, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["updateVehiclePreferences"]: Object.assign({}, {["__typename"]: "GeneralError"}, {["message"]: "Rejected"})})})], null)], null);
preferences = $.call(VehiclePreferences, [true, false, null, null], null);
await $.raises(ResponseError, "Rejected", async () => {
(await $.call($.attr($.call(make_client, [session], Object.assign({}, {"read_only": false})), "async_update_vehicle_preferences"), ["VIN", preferences], null));
});
}

/** Translated upstream test_get_vehicle_subscriptions_preserves_wire_values_and_exact_query. */
export async function test_get_vehicle_subscriptions_preserves_wire_values_and_exact_query(...__args: any[]): any {
let payload, query, result, session, subscription;
let {} = $.bind(__args, [], {}, [], null, null);
subscription = $.call(vehicle_subscription_payload, [], Object.assign({}, {"subscriptionServiceType": "Paid"}, {"nextBillingDate": "2027-02-03T04:05:06Z"}, {"goodwillEndDate": "2027-01-01T00:00:00+00:00"}, {"goodwillStartDate": "2026-12-01T00:00:00-08:00"}, {"graceEndDate": null}, {"subscriptionStartDate": "2099-01-01T12:00:00+05:30"}, {"isActive": false}, {"npSubscriptionPrice": " $12.99 "}, {"product": $.call(vehicle_subscription_product_payload, [], Object.assign({}, {"services": [null, "REMOTE_ENGINE"]}))}, {"pendingOrder": Object.assign({}, {["__typename"]: "VehicleSubscriptionPendingOrder"}, {["pendingOrderId"]: "pending-1"}, {["packageName"]: "Different package"}, {["activationDate"]: null})}));
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"}, {["capabilities"]: Object.assign({}, {["__typename"]: "VehicleCapability"}, {["subscriptions"]: [null, subscription]})})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_get_vehicle_subscriptions"), ["JN1TESTVIN"], null));
$.assertEqual(result, $.call(VehicleSubscriptions, [], Object.assign({}, {"vin": "JN1TESTVIN"}, {"subscriptions": [null, $.call(VehicleSubscription, [], Object.assign({}, {"subscription_id": "subscription-1"}, {"subscription_service_type": "Paid"}, {"purchase_type": $.attr(PurchaseType, "SUBSCRIPTION")}, {"product_type": $.attr(ProductType, "TELEMATICS")}, {"next_billing_date": $.call($.attr(datetime, "fromisoformat"), ["2027-02-03T04:05:06+00:00"], null)}, {"goodwill_end_date": $.call($.attr(datetime, "fromisoformat"), ["2027-01-01T00:00:00+00:00"], null)}, {"goodwill_start_date": $.call($.attr(datetime, "fromisoformat"), ["2026-12-01T00:00:00-08:00"], null)}, {"grace_end_date": null}, {"subscription_start_date": $.call($.attr(datetime, "fromisoformat"), ["2099-01-01T12:00:00+05:30"], null)}, {"subscription_end_date": null}, {"is_active": false}, {"np_subscription_price": " $12.99 "}, {"product": $.call(VehicleSubscriptionProduct, [], Object.assign({}, {"product_id": "product-1"}, {"marketing_name": "Premium"}, {"description": "Connected services"}, {"services": [null, "REMOTE_ENGINE"]}))}, {"pending_order": $.call(VehicleSubscriptionPendingOrder, [], Object.assign({}, {"pending_order_id": "pending-1"}, {"package_name": "Different package"}, {"activation_date": null}))}))]})), "test_client_part_06.py:207: result == VehicleSubscriptions(vin='JN1TESTVIN', subscriptions=(None, VehicleSubscription(subscription_id='subscription-1', subscription_service_type='Paid', purchase_type=PurchaseType.SUBSCRIPTION, product_type=ProductType.TELEMATICS, next_billing_date=datetime.fromisoformat('2027-02-03T04:05:06+00:00'), goodwill_end_date=datetime.fromisoformat('2027-01-01T00:00:00+00:00'), goodwill_start_date=datetime.fromisoformat('2026-12-01T00:00:00-08:00'), grace_end_date=None, subscription_start_date=datetime.fromisoformat('2099-01-01T12:00:00+05:30'), subscription_end_date=None, is_active=False, np_subscription_price=' $12.99 ', product=VehicleSubscriptionProduct(product_id='product-1', marketing_name='Premium', description='Connected services', services=(None, 'REMOTE_ENGINE')), pending_order=VehicleSubscriptionPendingOrder(pending_order_id='pending-1', package_name='Different package', activation_date=None))))");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "VehicleSubscriptions", "test_client_part_06.py:239: payload['operationName'] == 'VehicleSubscriptions'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}), "test_client_part_06.py:240: payload['variables'] == {'vin': 'JN1TESTVIN'}");
query = $.get(payload, "query");
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(query, "encode"), [], null)], null), "hexdigest"), [], null), "f73083b80399d14527938d7dfd92db232b5376ea2d36d9bc481e561bae67f566", "test_client_part_06.py:242: hashlib.sha256(query.encode()).hexdigest() == 'f73083b80399d14527938d7dfd92db232b5376ea2d36d9bc481e561bae67f566'");
}

/** Translated upstream test_get_vehicle_subscriptions_distinguishes_nullable_response_branches. */
export async function test_get_vehicle_subscriptions_distinguishes_nullable_response_branches(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseVehicle"}, {["capabilities"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseVehicle"}, {["capabilities"]: Object.assign({}, {["__typename"]: "VehicleCapability"}, {["subscriptions"]: []})})})})], null)], null);
client = $.call(make_client, [session], null);
$.assert((((await $.call($.attr(client, "async_get_vehicle_subscriptions"), ["VIN"], null)) === null)), "test_client_part_06.py:279: await client.async_get_vehicle_subscriptions('VIN') is None");
$.assertEqual((await $.call($.attr(client, "async_get_vehicle_subscriptions"), ["VIN"], null)), $.call(VehicleSubscriptions, [], Object.assign({}, {"vin": "VIN"}, {"subscriptions": null})), "test_client_part_06.py:280: await client.async_get_vehicle_subscriptions('VIN') == VehicleSubscriptions(vin='VIN', subscriptions=None)");
$.assertEqual((await $.call($.attr(client, "async_get_vehicle_subscriptions"), ["VIN"], null)), $.call(VehicleSubscriptions, [], Object.assign({}, {"vin": "VIN"}, {"subscriptions": []})), "test_client_part_06.py:284: await client.async_get_vehicle_subscriptions('VIN') == VehicleSubscriptions(vin='VIN', subscriptions=())");
}

/** Translated upstream test_get_vehicle_subscriptions_preserves_novel_enums_nulls_and_order. */
export async function test_get_vehicle_subscriptions_preserves_novel_enums_nulls_and_order(...__args: any[]): any {
let first, first_result, result, second, second_result, session;
let {} = $.bind(__args, [], {}, [], null, null);
first = $.call(vehicle_subscription_payload, [], Object.assign({}, {"subscriptionId": "duplicate"}, {"purchaseType": "LOYALTY"}, {"productType": "FUTURE_PRODUCT"}, {"isActive": null}, {"npSubscriptionPrice": null}));
second = $.call(vehicle_subscription_payload, [], Object.assign({}, {"subscriptionId": "duplicate"}, {"purchaseType": null}, {"productType": null}, {"isActive": false}, {"npSubscriptionPrice": ""}));
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseVehicle"}, {["capabilities"]: Object.assign({}, {["__typename"]: "VehicleCapability"}, {["subscriptions"]: [first, second]})})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_get_vehicle_subscriptions"), ["VIN"], null));
$.assert(((result !== null)), "test_client_part_06.py:325: result is not None");
$.assert((($.attr(result, "subscriptions") !== null)), "test_client_part_06.py:326: result.subscriptions is not None");
[first_result, second_result] = $.attr(result, "subscriptions");
$.assert(((first_result !== null)), "test_client_part_06.py:328: first_result is not None");
$.assertEqual($.attr(first_result, "purchase_type"), "LOYALTY", "test_client_part_06.py:329: first_result.purchase_type == 'LOYALTY'");
$.assert(!$.truth($.call($.isinstance, [$.attr(first_result, "purchase_type"), PurchaseType], null)), "test_client_part_06.py:330: not isinstance(first_result.purchase_type, PurchaseType)");
$.assertEqual($.attr(first_result, "product_type"), "FUTURE_PRODUCT", "test_client_part_06.py:331: first_result.product_type == 'FUTURE_PRODUCT'");
$.assert(!$.truth($.call($.isinstance, [$.attr(first_result, "product_type"), ProductType], null)), "test_client_part_06.py:332: not isinstance(first_result.product_type, ProductType)");
$.assert((($.attr(first_result, "is_active") === null)), "test_client_part_06.py:333: first_result.is_active is None");
$.assert((($.attr(first_result, "np_subscription_price") === null)), "test_client_part_06.py:334: first_result.np_subscription_price is None");
$.assert(((second_result !== null)), "test_client_part_06.py:335: second_result is not None");
$.assertEqual($.attr(second_result, "subscription_id"), $.attr(first_result, "subscription_id"), "test_client_part_06.py:336: second_result.subscription_id == first_result.subscription_id");
$.assert((($.attr(second_result, "purchase_type") === null)), "test_client_part_06.py:337: second_result.purchase_type is None");
$.assert((($.attr(second_result, "product_type") === null)), "test_client_part_06.py:338: second_result.product_type is None");
$.assert((($.attr(second_result, "is_active") === false)), "test_client_part_06.py:339: second_result.is_active is False");
$.assertEqual($.attr(second_result, "np_subscription_price"), "", "test_client_part_06.py:340: second_result.np_subscription_price == ''");
}

$.register("test_client_part_06.py::test_get_vehicle_preferences_preserves_nullable_mil_data_sharing_flags", test_get_vehicle_preferences_preserves_nullable_mil_data_sharing_flags, []);

$.register("test_client_part_06.py::test_get_vehicle_preferences_preserves_nullable_response_chain", test_get_vehicle_preferences_preserves_nullable_response_chain, []);

$.register("test_client_part_06.py::test_update_vehicle_preferences_sends_complete_snapshot_with_nulls", test_update_vehicle_preferences_sends_complete_snapshot_with_nulls, []);

$.register("test_client_part_06.py::test_update_vehicle_preferences_respects_read_only_mode", test_update_vehicle_preferences_respects_read_only_mode, []);

$.register("test_client_part_06.py::test_update_vehicle_preferences_raises_server_message", test_update_vehicle_preferences_raises_server_message, []);

$.register("test_client_part_06.py::test_get_vehicle_subscriptions_preserves_wire_values_and_exact_query", test_get_vehicle_subscriptions_preserves_wire_values_and_exact_query, []);

$.register("test_client_part_06.py::test_get_vehicle_subscriptions_distinguishes_nullable_response_branches", test_get_vehicle_subscriptions_distinguishes_nullable_response_branches, []);

$.register("test_client_part_06.py::test_get_vehicle_subscriptions_preserves_novel_enums_nulls_and_order", test_get_vehicle_subscriptions_preserves_novel_enums_nulls_and_order, []);
