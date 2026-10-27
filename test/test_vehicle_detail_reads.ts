// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { BatteryStatus, ClimateStatus, DistanceReading, DistanceUnit, DoorsStatus, NissanClient, ResponseError, SpeedUnit, TemperatureReading, TemperatureUnit, Tokens, VehicleModelYear, VehicleNickname, VehicleStatus, VehicleStatusAndRecalls, operations } from "../src/index";

import { vehicle_battery_status_variables, vehicle_boundary_alerts_variables, vehicle_climate_status_variables, vehicle_curfew_alerts_variables, vehicle_doors_status_variables, vehicle_model_year_variables, vehicle_nickname_variables, vehicle_speed_alerts_variables, vehicle_status_and_recalls_variables, vehicle_status_variables, vehicle_valet_alerts_variables } from "../src/vehicle_detail_inputs";

import { parse_vehicle_battery_status, parse_vehicle_boundary_alerts, parse_vehicle_climate_status, parse_vehicle_core_status, parse_vehicle_curfew_alerts, parse_vehicle_doors_status, parse_vehicle_model_year, parse_vehicle_nickname, parse_vehicle_speed_alerts, parse_vehicle_status_and_recalls, parse_vehicle_valet_alert } from "../src/vehicle_detail_parsing";

export let EXPECTED_OPERATIONS = Object.assign({}, {["VEHICLE_BATTERY_STATUS"]: "d157b289331668ddf5f7eecaf93efe73a95f12794d424f5bb3edbbcc1536defc"}, {["VEHICLE_BOUNDARY_ALERTS"]: "1b39f2447a0b7f2b87172930d52884163821cba61390c1ed574f7091eb329590"}, {["VEHICLE_CLIMATE_STATUS"]: "613bc1a2d4fe33cfbcfe05ceb0822fdec1e4b6b44d1c1835614ecff1dda05bbf"}, {["VEHICLE_CURFEW_ALERTS"]: "8c32c5e7976dc8f1f05c02dca78c1b2772b621a67b795f9dd54c1c9c85e6cefe"}, {["VEHICLE_DOORS_STATUS"]: "2615e0f31156f0c197c8cda7fbd5faf242b1be3ee2315323f554361de5ce710d"}, {["VEHICLE_MODEL_YEAR"]: "68caf946fc54a0decc35dd011ab528649823b17d89f60f83d47db0270c89c625"}, {["VEHICLE_NICKNAME"]: "548cbf9cb3accff338e62dc1b03f46e77daf056b13f5e7c71f3318f9bc188255"}, {["VEHICLE_SPEED_ALERTS"]: "3250f9f2c20de1e6635592a1e7e084db04f588930739d58f57b1f6a2557fc553"}, {["VEHICLE_STATUS"]: "fcce613d98daca4c170d6293b45183422a145f9d4c0f6a124b01bdc5405f2407"}, {["VEHICLE_STATUS_AND_RECALLS"]: "1b52ab3c1b996e32f3908ae6f270f87a064516f16b94de07a9f0cc5002687f1e"}, {["VEHICLE_VALET_ALERTS"]: "9e8b9ea4c2c34471e1f94fa2a81963a1d226fa22cde37c104e31b35b09057a76"});

/** Translated upstream test_vehicle_detail_operations_match_service_documents. */
export function test_vehicle_detail_operations_match_service_documents(...__args: any[]): any {
let document, operation_id;
let {"constant": constant, "expected_id": expected_id} = $.bind(__args, ["constant", "expected_id"], {}, [], null, null);
document = $.call($.getattr, [operations, constant], null);
operation_id = $.call($.getattr, [operations, ($.str(constant) + "_OPERATION_ID")], null);
$.assert(($.eq(operation_id, expected_id)), "test_vehicle_detail_reads.py:80: operation_id == expected_id");
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), expected_id)), "test_vehicle_detail_reads.py:81: hashlib.sha256(document.encode()).hexdigest() == expected_id");
}

/** Translated upstream test_vehicle_detail_variables_preserve_apollo_optionality. */
export function test_vehicle_detail_variables_preserve_apollo_optionality(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(vehicle_battery_status_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_vehicle_detail_reads.py:85: vehicle_battery_status_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(vehicle_battery_status_variables, ["VIN"], Object.assign({}, {"unit": null})), Object.assign({}, {["vin"]: "VIN"}, {["unit"]: null}))), "test_vehicle_detail_reads.py:86: vehicle_battery_status_variables('VIN', unit=None) == {'vin': 'VIN', 'unit': None}");
$.assert(($.eq($.call(vehicle_battery_status_variables, ["VIN"], Object.assign({}, {"unit": $.attr(DistanceUnit, "MILE")})), Object.assign({}, {["vin"]: "VIN"}, {["unit"]: "MILE"}))), "test_vehicle_detail_reads.py:90: vehicle_battery_status_variables('VIN', unit=DistanceUnit.MILE) == {'vin': 'VIN', 'unit': 'MILE'}");
$.assert(($.eq($.call(vehicle_boundary_alerts_variables, ["VIN"], Object.assign({}, {"distance_unit": $.attr(DistanceUnit, "KILOMETER")})), Object.assign({}, {["vin"]: "VIN"}, {["distanceUnit"]: "KILOMETER"}))), "test_vehicle_detail_reads.py:94: vehicle_boundary_alerts_variables('VIN', distance_unit=DistanceUnit.KILOMETER) == {'vin': 'VIN', 'distanceUnit': 'KILOMETER'}");
$.assert(($.eq($.call(vehicle_climate_status_variables, ["VIN", $.attr(TemperatureUnit, "CELSIUS")], null), Object.assign({}, {["vin"]: "VIN"}, {["temperatureUnit"]: "CELSIUS"}))), "test_vehicle_detail_reads.py:98: vehicle_climate_status_variables('VIN', TemperatureUnit.CELSIUS) == {'vin': 'VIN', 'temperatureUnit': 'CELSIUS'}");
$.assert(($.eq($.call(vehicle_curfew_alerts_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_vehicle_detail_reads.py:102: vehicle_curfew_alerts_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(vehicle_doors_status_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_vehicle_detail_reads.py:103: vehicle_doors_status_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(vehicle_model_year_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_vehicle_detail_reads.py:104: vehicle_model_year_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(vehicle_nickname_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_vehicle_detail_reads.py:105: vehicle_nickname_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(vehicle_speed_alerts_variables, ["VIN"], Object.assign({}, {"speed_unit": $.attr(SpeedUnit, "MPH")})), Object.assign({}, {["vin"]: "VIN"}, {["speedUnit"]: "MPH"}))), "test_vehicle_detail_reads.py:106: vehicle_speed_alerts_variables('VIN', speed_unit=SpeedUnit.MPH) == {'vin': 'VIN', 'speedUnit': 'MPH'}");
$.assert(($.eq($.call(vehicle_status_variables, ["VIN"], Object.assign({}, {"unit": null})), Object.assign({}, {["vin"]: "VIN"}, {["unit"]: null}))), "test_vehicle_detail_reads.py:110: vehicle_status_variables('VIN', unit=None) == {'vin': 'VIN', 'unit': None}");
$.assert(($.eq($.call(vehicle_status_and_recalls_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_vehicle_detail_reads.py:111: vehicle_status_and_recalls_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(vehicle_valet_alerts_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_vehicle_detail_reads.py:112: vehicle_valet_alerts_variables('VIN') == {'vin': 'VIN'}");
}

/** Translated upstream test_vehicle_detail_variables_reject_unknown_enum_inputs. */
export function test_vehicle_detail_variables_reject_unknown_enum_inputs(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.raises($.ValueError, "UNKNOWN_VALUE cannot be sent", () => {
$.call(vehicle_battery_status_variables, ["VIN"], Object.assign({}, {"unit": $.attr(DistanceUnit, "UNKNOWN_VALUE")}));
});
$.raises($.ValueError, "UNKNOWN_VALUE cannot be sent", () => {
$.call(vehicle_speed_alerts_variables, ["VIN"], Object.assign({}, {"speed_unit": $.attr(SpeedUnit, "UNKNOWN_VALUE")}));
});
}

/** Translated upstream test_parse_standalone_battery_climate_and_doors. */
export function test_parse_standalone_battery_climate_and_doors(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_vehicle_battery_status, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["batteryStatus"]: Object.assign({}, {["__typename"]: "BatteryStatus"}, {["level"]: 81}, {["isPluggedIn"]: true}, {["isCharging"]: false}, {["remainingChargeTime"]: 25}, {["remainingMileage"]: Object.assign({}, {["__typename"]: "Distance"}, {["unit"]: "MILE"}, {["value"]: 220})})})}), "VIN"], null), $.call(BatteryStatus, [81, true, false, 25, $.call(DistanceReading, [220, "MILE"], null)], null))), "test_vehicle_detail_reads.py:123: parse_vehicle_battery_status({'vehicle': {'__typename': 'ElectricAVK2Vehicle', 'batteryStatus': {'__typename': 'BatteryStatus', 'level': 81, 'isPluggedIn': True, 'isCharging': False, 'remainingChargeTime': 25, 'remainingMileage': {'__typename': 'Distance', 'unit': 'MILE', 'value': 220}}}}, 'VIN') == BatteryStatus(81, True, False, 25, DistanceReading(220, 'MILE'))");
$.assert(($.eq($.call(parse_vehicle_climate_status, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["climateStatus"]: Object.assign({}, {["__typename"]: "ClimateStatus"}, {["state"]: "OFF"}, {["temperature"]: Object.assign({}, {["__typename"]: "Temperature"}, {["value"]: 21.5}, {["unit"]: "CELSIUS"})})})}), "VIN"], null), $.call(ClimateStatus, ["OFF", $.call(TemperatureReading, [21.5, "CELSIUS"], null)], null))), "test_vehicle_detail_reads.py:143: parse_vehicle_climate_status({'vehicle': {'__typename': 'ElectricAVK2Vehicle', 'climateStatus': {'__typename': 'ClimateStatus', 'state': 'OFF', 'temperature': {'__typename': 'Temperature', 'value': 21.5, 'unit': 'CELSIUS'}}}}, 'VIN') == ClimateStatus('OFF', TemperatureReading(21.5, 'CELSIUS'))");
$.assert(($.eq($.call(parse_vehicle_doors_status, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["doorsStatus"]: Object.assign({}, {["__typename"]: "DoorsStatus"}, {["lastUpdatedAt"]: null})})}), "VIN"], null), $.call(DoorsStatus, [null, null, null, null, null, null, null, null, null, null], null))), "test_vehicle_detail_reads.py:160: parse_vehicle_doors_status({'vehicle': {'__typename': 'AVK2Vehicle', 'doorsStatus': {'__typename': 'DoorsStatus', 'lastUpdatedAt': None}}}, 'VIN') == DoorsStatus(None, None, None, None, None, None, None, None, None, None)");
}

/** Translated upstream test_parse_vehicle_model_year_and_nickname_preserve_nullability. */
export function test_parse_vehicle_model_year_and_nickname_preserve_nullability(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_vehicle_model_year, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["model"]: "ARIYA"}, {["year"]: "2026"})})], null), $.call(VehicleModelYear, ["ElectricAVK2Vehicle", "ARIYA", "2026"], null))), "test_vehicle_detail_reads.py:175: parse_vehicle_model_year({'vehicle': {'__typename': 'ElectricAVK2Vehicle', 'model': 'ARIYA', 'year': '2026'}}) == VehicleModelYear('ElectricAVK2Vehicle', 'ARIYA', '2026')");
$.assert(($.eq($.call(parse_vehicle_nickname, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["nickname"]: null})})], null), $.call(VehicleNickname, ["ElectricAVK2Vehicle", null], null))), "test_vehicle_detail_reads.py:184: parse_vehicle_nickname({'vehicle': {'__typename': 'ElectricAVK2Vehicle', 'nickname': None}}) == VehicleNickname('ElectricAVK2Vehicle', None)");
$.assert((($.call(parse_vehicle_model_year, [Object.assign({}, {["vehicle"]: null})], null) === null)), "test_vehicle_detail_reads.py:192: parse_vehicle_model_year({'vehicle': None}) is None");
$.assert((($.call(parse_vehicle_nickname, [Object.assign({}, {["vehicle"]: null})], null) === null)), "test_vehicle_detail_reads.py:193: parse_vehicle_nickname({'vehicle': None}) is None");
$.raises(ResponseError, "vehicle\\.model is not a string", () => {
$.call(parse_vehicle_model_year, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["model"]: null}, {["year"]: "2026"})})], null);
});
}

/** Translated upstream test_parse_standalone_alerts_preserves_null_and_empty_values. */
export function test_parse_standalone_alerts_preserves_null_and_empty_values(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_vehicle_boundary_alerts, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["boundaryAlerts"]: []})})], null), [])), "test_vehicle_detail_reads.py:207: parse_vehicle_boundary_alerts({'vehicle': {'__typename': 'AVK2Vehicle', 'boundaryAlerts': []}}) == ()");
$.assert((($.call(parse_vehicle_curfew_alerts, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["curfewAlerts"]: null})})], null) === null)), "test_vehicle_detail_reads.py:213: parse_vehicle_curfew_alerts({'vehicle': {'__typename': 'AVK2Vehicle', 'curfewAlerts': None}}) is None");
$.assert(($.eq($.call(parse_vehicle_speed_alerts, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["speedAlerts"]: []})})], null), [])), "test_vehicle_detail_reads.py:219: parse_vehicle_speed_alerts({'vehicle': {'__typename': 'AVK2Vehicle', 'speedAlerts': []}}) == ()");
$.assert((($.call(parse_vehicle_valet_alert, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["valetAlert"]: null})})], null) === null)), "test_vehicle_detail_reads.py:223: parse_vehicle_valet_alert({'vehicle': {'__typename': 'AVK2Vehicle', 'valetAlert': None}}) is None");
}

/** Translated upstream test_parse_vehicle_core_status_and_combined_recalls. */
export function test_parse_vehicle_core_status_and_combined_recalls(...__args: any[]): any {
let expected_status, vehicle;
let {} = $.bind(__args, [], {}, [], null, null);
vehicle = Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["doorsStatus"]: null}, {["fuelAutonomy"]: null}, {["mileage"]: null}, {["tirePressure"]: null}, {["mils"]: []});
expected_status = $.call(VehicleStatus, [], Object.assign({}, {"vin": "VIN"}, {"vehicle_type": "AVK2Vehicle"}, {"battery": null}, {"climate": null}, {"doors": null}, {"fuel_range": null}, {"mileage": null}, {"tire_pressure": null}, {"maintenance_indicators": []}));
$.assert(($.eq($.call(parse_vehicle_core_status, [Object.assign({}, {["vehicle"]: vehicle}), "VIN"], null), expected_status)), "test_vehicle_detail_reads.py:250: parse_vehicle_core_status({'vehicle': vehicle}, 'VIN') == expected_status");
$.assert(($.eq($.call(parse_vehicle_status_and_recalls, [Object.assign({}, {["vehicle"]: Object.assign({}, vehicle, {["recalls"]: []})}), "VIN"], null), $.call(VehicleStatusAndRecalls, [expected_status, []], null))), "test_vehicle_detail_reads.py:251: parse_vehicle_status_and_recalls({'vehicle': {**vehicle, 'recalls': []}}, 'VIN') == VehicleStatusAndRecalls(expected_status, ())");
$.assert((($.call(parse_vehicle_core_status, [Object.assign({}, {["vehicle"]: null}), "VIN"], null) === null)), "test_vehicle_detail_reads.py:255: parse_vehicle_core_status({'vehicle': None}, 'VIN') is None");
$.assert((($.call(parse_vehicle_status_and_recalls, [Object.assign({}, {["vehicle"]: null}), "VIN"], null) === null)), "test_vehicle_detail_reads.py:256: parse_vehicle_status_and_recalls({'vehicle': None}, 'VIN') is None");
}

/** Translated upstream FakeResponse. */
export class FakeResponse {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
let {} = $.bind(__args, [], {}, [], null, null);
this["status"] = 200;
}
/** Translated upstream __aenter__. */
async __aenter__(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return this;
}
/** Translated upstream __aexit__. */
async __aexit__(...__args: any[]): any {
let {"args": args} = $.bind(__args, [], {}, [], "args", null);
return null;
}
/** Translated upstream json. */
async json(...__args: any[]): any {
let {"content_type": content_type} = $.bind(__args, [], {"content_type": null}, ["content_type"], null, null);
return Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})});
}
}
$.classType(FakeResponse);

/** Translated upstream FakeSession. */
export class FakeSession {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
let _;
let {"response_count": response_count} = $.bind(__args, ["response_count"], {}, [], null, null);
this["responses"] = (() => { const __out: any = []; for (const _ of $.iterable($.call($.range, [response_count], null))) { __out.push($.call(FakeResponse, [], null)); } return __out; })();
this["calls"] = [];
}
/** Translated upstream post. */
post(...__args: any[]): any {
let {"url": url, "kwargs": kwargs} = $.bind(__args, ["url"], {}, [], null, "kwargs");
$.call($.attr($.attr(this, "calls"), "append"), [Object.assign({}, {["url"]: url}, kwargs)], null);
if ($.truth(!$.truth($.attr(this, "responses")))) {
throw $.call($.AssertionError, ["Unexpected HTTP request"], null);
}
return $.call($.attr($.attr(this, "responses"), "pop"), [0], null);
}
}
$.classType(FakeSession);

/** Translated upstream test_vehicle_detail_client_wires_all_exact_operations. */
export async function test_vehicle_detail_client_wires_all_exact_operations(...__args: any[]): any {
let call, client, payload, payloads, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [11], null);
client = $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access", "refresh", "id"], null)}));
$.assert((((await $.call($.attr(client, "async_get_vehicle_battery_status"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:292: await client.async_get_vehicle_battery_status('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_boundary_alerts"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:293: await client.async_get_vehicle_boundary_alerts('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_climate_status"), ["VIN", $.attr(TemperatureUnit, "FAHRENHEIT")], null)) === null)), "test_vehicle_detail_reads.py:294: await client.async_get_vehicle_climate_status('VIN', TemperatureUnit.FAHRENHEIT) is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_curfew_alerts"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:295: await client.async_get_vehicle_curfew_alerts('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_doors_status"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:296: await client.async_get_vehicle_doors_status('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_model_year"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:297: await client.async_get_vehicle_model_year('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_nickname"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:298: await client.async_get_vehicle_nickname('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_speed_alerts"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:299: await client.async_get_vehicle_speed_alerts('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_core_status"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:300: await client.async_get_vehicle_core_status('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_status_and_recalls"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:301: await client.async_get_vehicle_status_and_recalls('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_valet_alert"), ["VIN"], null)) === null)), "test_vehicle_detail_reads.py:302: await client.async_get_vehicle_valet_alert('VIN') is None");
payloads = [];
for (call of $.iterable($.attr(session, "calls"))) {
payload = $.get(call, "json");
$.assert($.call($.isinstance, [payload, Mapping], null), "test_vehicle_detail_reads.py:307: isinstance(payload, Mapping)");
$.call($.attr(payloads, "append"), [payload], null);
}
$.assert(($.eq((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "operationName")); } return __out; })(), ["VehicleBatteryStatus", "VehicleBoundaryAlerts", "VehicleClimateStatus", "VehicleCurfewAlerts", "VehicleDoorsStatus", "VehicleModelYear", "VehicleNickname", "VehicleSpeedAlerts", "VehicleStatus", "VehicleStatusAndRecalls", "VehicleValetAlerts"])), "test_vehicle_detail_reads.py:309: [payload['operationName'] for payload in payloads] == ['VehicleBatteryStatus', 'VehicleBoundaryAlerts', 'VehicleClimateStatus', 'VehicleCurfewAlerts', 'VehicleDoorsStatus', 'VehicleModelYear', 'VehicleNickname', 'VehicleSpeedAlerts', 'VehicleStatus', 'VehicleStatusAndRecalls', 'VehicleValetAlerts']");
$.assert(($.eq((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "variables")); } return __out; })(), [Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}, {["temperatureUnit"]: "FAHRENHEIT"}), Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"}), Object.assign({}, {["vin"]: "VIN"})])), "test_vehicle_detail_reads.py:322: [payload['variables'] for payload in payloads] == [{'vin': 'VIN'}, {'vin': 'VIN'}, {'vin': 'VIN', 'temperatureUnit': 'FAHRENHEIT'}, {'vin': 'VIN'}, {'vin': 'VIN'}, {'vin': 'VIN'}, {'vin': 'VIN'}, {'vin': 'VIN'}, {'vin': 'VIN'}, {'vin': 'VIN'}, {'vin': 'VIN'}]");
}

$.register("test_vehicle_detail_reads.py::test_vehicle_detail_operations_match_service_documents", test_vehicle_detail_operations_match_service_documents, [[["constant", "expected_id"], $.call($.attr(EXPECTED_OPERATIONS, "items"), [], null)]]);

$.register("test_vehicle_detail_reads.py::test_vehicle_detail_variables_preserve_apollo_optionality", test_vehicle_detail_variables_preserve_apollo_optionality, []);

$.register("test_vehicle_detail_reads.py::test_vehicle_detail_variables_reject_unknown_enum_inputs", test_vehicle_detail_variables_reject_unknown_enum_inputs, []);

$.register("test_vehicle_detail_reads.py::test_parse_standalone_battery_climate_and_doors", test_parse_standalone_battery_climate_and_doors, []);

$.register("test_vehicle_detail_reads.py::test_parse_vehicle_model_year_and_nickname_preserve_nullability", test_parse_vehicle_model_year_and_nickname_preserve_nullability, []);

$.register("test_vehicle_detail_reads.py::test_parse_standalone_alerts_preserves_null_and_empty_values", test_parse_standalone_alerts_preserves_null_and_empty_values, []);

$.register("test_vehicle_detail_reads.py::test_parse_vehicle_core_status_and_combined_recalls", test_parse_vehicle_core_status_and_combined_recalls, []);

$.register("test_vehicle_detail_reads.py::test_vehicle_detail_client_wires_all_exact_operations", test_vehicle_detail_client_wires_all_exact_operations, []);
