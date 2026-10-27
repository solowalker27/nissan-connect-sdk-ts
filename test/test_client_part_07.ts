// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client, vehicle_subscription_payload, vehicle_subscription_product_payload } from "./test_client";

import { ResponseError, TemperatureUnit, V2LState, V2LStatus } from "../src/index";

/** Translated upstream test_get_vehicle_subscriptions_rejects_contract_violations. */
export async function test_get_vehicle_subscriptions_rejects_contract_violations(...__args: any[]): any {
let session;
let {"subscriptions": subscriptions, "match": match} = $.bind(__args, ["subscriptions", "match"], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseVehicle"}, {["capabilities"]: Object.assign({}, {["__typename"]: "VehicleCapability"}, {["subscriptions"]: subscriptions})})})})], null)], null);
await $.raises(ResponseError, match, async () => {
(await $.call($.attr($.call(make_client, [session], null), "async_get_vehicle_subscriptions"), ["VIN"], null));
});
}

/** Translated upstream test_get_vehicle_capabilities_parses_service_accessories_contract. */
export async function test_get_vehicle_capabilities_parses_service_accessories_contract(...__args: any[]): any {
let accessories, capabilities, client, payload, seats, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["capabilities"]: Object.assign({}, {["telematicsProgram"]: "NISSAN_CONNECT"}, {["status"]: "ENROLLED"}, {["serviceCapability"]: [Object.assign({}, {["type"]: "CLIMATE_CONTROL"}, {["enabled"]: true}, {["subscribed"]: true})]}, {["accessoriesDetails"]: Object.assign({}, {["seatHeater"]: Object.assign({}, {["enabled"]: true}, {["accessories"]: Object.assign({}, {["assistantSeat"]: "HEATING_AND_COOLING"}, {["driverSeat"]: "HEATING_AND_COOLING"}, {["secondCentreSeat"]: null}, {["secondLeftSeat"]: "HEATING"}, {["secondRightSeat"]: "HEATING"}, {["thirdLeftSeat"]: null}, {["thirdRightSeat"]: null})})}, {["steeringHeat"]: Object.assign({}, {["enabled"]: true})}, {["sunRoof"]: Object.assign({}, {["type"]: "ELECTRIC"}, {["enabled"]: true})}, {["windowStatus"]: Object.assign({}, {["enabled"]: true})}, {["wayPoint"]: Object.assign({}, {["enabled"]: true}, {["maxNumber"]: 5})}, {["hvacTemperatures"]: Object.assign({}, {["unit"]: "CELSIUS"}, {["default"]: 22.0}, {["min"]: 16.0}, {["max"]: 30.0}, {["resolution"]: 0.5})})})})})})], null)], null);
client = $.call(make_client, [session], null);
capabilities = (await $.call($.attr(client, "async_get_vehicle_capabilities"), ["JN1TESTVIN"], Object.assign({}, {"temperature_unit": $.attr(TemperatureUnit, "CELSIUS")})));
$.assertEqual($.attr(capabilities, "telematics_program"), "NISSAN_CONNECT", "test_client_part_07.py:138: capabilities.telematics_program == 'NISSAN_CONNECT'");
$.assertEqual($.attr(capabilities, "enrollment_status"), "ENROLLED", "test_client_part_07.py:139: capabilities.enrollment_status == 'ENROLLED'");
$.assertEqual($.call($.len, [$.attr(capabilities, "services")], null), 1, "test_client_part_07.py:140: len(capabilities.services) == 1");
$.assertEqual($.attr($.get($.attr(capabilities, "services"), 0), "type"), "CLIMATE_CONTROL", "test_client_part_07.py:141: capabilities.services[0].type == 'CLIMATE_CONTROL'");
$.assert((($.attr(capabilities, "accessories_details") !== null)), "test_client_part_07.py:142: capabilities.accessories_details is not None");
accessories = $.attr(capabilities, "accessories_details");
$.assert((($.attr(accessories, "seat_heater") !== null)), "test_client_part_07.py:145: accessories.seat_heater is not None");
$.assert((($.attr($.attr(accessories, "seat_heater"), "enabled") === true)), "test_client_part_07.py:146: accessories.seat_heater.enabled is True");
$.assert((($.attr($.attr(accessories, "seat_heater"), "accessories") !== null)), "test_client_part_07.py:147: accessories.seat_heater.accessories is not None");
seats = $.attr($.attr(accessories, "seat_heater"), "accessories");
$.assertEqual($.attr(seats, "assistant_seat"), "HEATING_AND_COOLING", "test_client_part_07.py:149: seats.assistant_seat == 'HEATING_AND_COOLING'");
$.assertEqual($.attr(seats, "driver_seat"), "HEATING_AND_COOLING", "test_client_part_07.py:150: seats.driver_seat == 'HEATING_AND_COOLING'");
$.assert((($.attr(seats, "second_centre_seat") === null)), "test_client_part_07.py:151: seats.second_centre_seat is None");
$.assertEqual($.attr(seats, "second_left_seat"), "HEATING", "test_client_part_07.py:152: seats.second_left_seat == 'HEATING'");
$.assertEqual($.attr(seats, "second_right_seat"), "HEATING", "test_client_part_07.py:153: seats.second_right_seat == 'HEATING'");
$.assert((($.attr(seats, "third_left_seat") === null)), "test_client_part_07.py:154: seats.third_left_seat is None");
$.assert((($.attr(seats, "third_right_seat") === null)), "test_client_part_07.py:155: seats.third_right_seat is None");
$.assert((($.attr(accessories, "steering_heat") !== null)), "test_client_part_07.py:157: accessories.steering_heat is not None");
$.assert((($.attr($.attr(accessories, "steering_heat"), "enabled") === true)), "test_client_part_07.py:158: accessories.steering_heat.enabled is True");
$.assert((($.attr(accessories, "sun_roof") !== null)), "test_client_part_07.py:159: accessories.sun_roof is not None");
$.assertEqual($.attr($.attr(accessories, "sun_roof"), "type"), "ELECTRIC", "test_client_part_07.py:160: accessories.sun_roof.type == 'ELECTRIC'");
$.assert((($.attr($.attr(accessories, "sun_roof"), "enabled") === true)), "test_client_part_07.py:161: accessories.sun_roof.enabled is True");
$.assert((($.attr(accessories, "window_status") !== null)), "test_client_part_07.py:162: accessories.window_status is not None");
$.assert((($.attr($.attr(accessories, "window_status"), "enabled") === true)), "test_client_part_07.py:163: accessories.window_status.enabled is True");
$.assert((($.attr(accessories, "way_point") !== null)), "test_client_part_07.py:164: accessories.way_point is not None");
$.assert((($.attr($.attr(accessories, "way_point"), "enabled") === true)), "test_client_part_07.py:165: accessories.way_point.enabled is True");
$.assertEqual($.attr($.attr(accessories, "way_point"), "max_number"), 5, "test_client_part_07.py:166: accessories.way_point.max_number == 5");
$.assert((($.attr(accessories, "hvac_temperatures") !== null)), "test_client_part_07.py:167: accessories.hvac_temperatures is not None");
$.assertEqual($.attr($.attr(accessories, "hvac_temperatures"), "unit"), "CELSIUS", "test_client_part_07.py:168: accessories.hvac_temperatures.unit == 'CELSIUS'");
$.assertEqual($.attr($.attr(accessories, "hvac_temperatures"), "default"), 22.0, "test_client_part_07.py:169: accessories.hvac_temperatures.default == 22.0");
$.assertEqual($.attr($.attr(accessories, "hvac_temperatures"), "minimum"), 16.0, "test_client_part_07.py:170: accessories.hvac_temperatures.minimum == 16.0");
$.assertEqual($.attr($.attr(accessories, "hvac_temperatures"), "maximum"), 30.0, "test_client_part_07.py:171: accessories.hvac_temperatures.maximum == 30.0");
$.assertEqual($.attr($.attr(accessories, "hvac_temperatures"), "resolution"), 0.5, "test_client_part_07.py:172: accessories.hvac_temperatures.resolution == 0.5");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "VehicleCapabilities", "test_client_part_07.py:175: payload['operationName'] == 'VehicleCapabilities'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["unit"]: "CELSIUS"}), "test_client_part_07.py:176: payload['variables'] == {'vin': 'JN1TESTVIN', 'unit': 'CELSIUS'}");
$.assert(($.contains($.get(payload, "query"), "accessoriesDetails")), "test_client_part_07.py:177: 'accessoriesDetails' in cast(str, payload['query'])");
}

/** Translated upstream test_get_charge_config_parses_both_limits. */
export async function test_get_charge_config_parses_both_limits(...__args: any[]): any {
let client, config, payload, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["chargeConfig"]: Object.assign({}, {["limits"]: Object.assign({}, {["notification"]: Object.assign({}, {["percent"]: 25})}, {["charge"]: Object.assign({}, {["percent"]: 80})})})})})})], null)], null);
client = $.call(make_client, [session], null);
config = (await $.call($.attr(client, "async_get_charge_config"), ["JN1TESTVIN"], null));
$.assert(((config !== null)), "test_client_part_07.py:203: config is not None");
$.assertEqual($.attr(config, "charge_limit_percent"), 80, "test_client_part_07.py:204: config.charge_limit_percent == 80");
$.assertEqual($.attr(config, "notification_threshold_percent"), 25, "test_client_part_07.py:205: config.notification_threshold_percent == 25");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "ChargeConfig", "test_client_part_07.py:207: payload['operationName'] == 'ChargeConfig'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}), "test_client_part_07.py:208: payload['variables'] == {'vin': 'JN1TESTVIN'}");
}

/** Translated upstream test_get_v2l_status_parses_state_and_percentage_levels. */
export async function test_get_v2l_status_parses_state_and_percentage_levels(...__args: any[]): any {
let client, payload, session, status;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["v2lStatus"]: Object.assign({}, {["state"]: "OUTSIDE_ON"}, {["chargeLimitationLevel"]: 35}, {["chargeMinimumLimitationLevel"]: 10.5})})})})], null)], null);
client = $.call(make_client, [session], null);
status = (await $.call($.attr(client, "async_get_v2l_status"), ["JN1TESTVIN"], null));
$.assertEqual(status, $.call(V2LStatus, [], Object.assign({}, {"state": $.attr(V2LState, "OUTSIDE_ON")}, {"charge_limit_percent": 35.0}, {"minimum_charge_limit_percent": 10.5})), "test_client_part_07.py:233: status == V2LStatus(state=V2LState.OUTSIDE_ON, charge_limit_percent=35.0, minimum_charge_limit_percent=10.5)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "V2lStatus", "test_client_part_07.py:239: payload['operationName'] == 'V2lStatus'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}), "test_client_part_07.py:240: payload['variables'] == {'vin': 'JN1TESTVIN'}");
$.assert(($.contains($.get(payload, "query"), "chargeMinimumLimitationLevel")), "test_client_part_07.py:241: 'chargeMinimumLimitationLevel' in cast(str, payload['query'])");
}

/** Translated upstream test_get_v2l_status_preserves_nulls_and_unknown_state. */
export async function test_get_v2l_status_preserves_nulls_and_unknown_state(...__args: any[]): any {
let client, session, status;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["v2lStatus"]: Object.assign({}, {["state"]: "FUTURE_STATE"}, {["chargeLimitationLevel"]: null}, {["chargeMinimumLimitationLevel"]: null})})})})], null)], null);
client = $.call(make_client, [session], null);
status = (await $.call($.attr(client, "async_get_v2l_status"), ["JN1TESTVIN"], null));
$.assertEqual(status, $.call(V2LStatus, [], Object.assign({}, {"state": $.attr(V2LState, "UNKNOWN_VALUE")}, {"charge_limit_percent": null}, {"minimum_charge_limit_percent": null})), "test_client_part_07.py:266: status == V2LStatus(state=V2LState.UNKNOWN_VALUE, charge_limit_percent=None, minimum_charge_limit_percent=None)");
}

$.register("test_client_part_07.py::test_get_vehicle_subscriptions_rejects_contract_violations", test_get_vehicle_subscriptions_rejects_contract_violations, [[["subscriptions", "match"], [[null, "subscriptions is not a list"], [[$.call(vehicle_subscription_payload, [], Object.assign({}, {"subscriptionId": null}))], "subscriptionId is not a string"], [[$.call(vehicle_subscription_payload, [], Object.assign({}, {"product": null}))], "product is not an object"], [[$.call(vehicle_subscription_payload, [], Object.assign({}, {"product": $.call(vehicle_subscription_product_payload, [], Object.assign({}, {"services": null}))}))], "services is not a list"], [[$.call(vehicle_subscription_payload, [], Object.assign({}, {"subscriptionStartDate": "2026-01-01T12:00:00"}))], "subscriptionStartDate is not an ISO-8601 date-time with an offset"], [[$.call(vehicle_subscription_payload, [], Object.assign({}, {"nextBillingDate": "not-a-date"}))], "nextBillingDate is not an ISO-8601 date-time with an offset"], [[$.call(vehicle_subscription_payload, [], Object.assign({}, {"isActive": "true"}))], "isActive is not a boolean"], [[$.call(vehicle_subscription_payload, [], Object.assign({}, {"product": $.call(vehicle_subscription_product_payload, [], Object.assign({}, {"services": [1]}))}))], "services\\[0\\] is not a string"]]]]);

$.register("test_client_part_07.py::test_get_vehicle_capabilities_parses_service_accessories_contract", test_get_vehicle_capabilities_parses_service_accessories_contract, []);

$.register("test_client_part_07.py::test_get_charge_config_parses_both_limits", test_get_charge_config_parses_both_limits, []);

$.register("test_client_part_07.py::test_get_v2l_status_parses_state_and_percentage_levels", test_get_v2l_status_parses_state_and_percentage_levels, []);

$.register("test_client_part_07.py::test_get_v2l_status_preserves_nulls_and_unknown_state", test_get_v2l_status_preserves_nulls_and_unknown_state, []);
