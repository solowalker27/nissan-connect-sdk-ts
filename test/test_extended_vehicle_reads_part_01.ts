// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Callable = $.Callable;
const Mapping = $.Mapping;

const pytest = $.pytest;

import { FakeSession, assert_graphql_call, graphql_response, make_client } from "./test_extended_vehicle_reads";

import { UNSET } from "../src/index";

import { CoordinateInput } from "../src/common_inputs";

import { EmpConnectorLevelInput, EmpEvseStatusInput, driving_history_variables, ev_charge_stations_variables, location_details_variables } from "../src/extended_vehicle_inputs";

import { DrivingHistoryAggregator, WeightUnit } from "../src/extended_vehicle_models";

import { DistanceUnit, SpeedUnit } from "../src/models";

import { PlugConnectorType } from "../src/navigation_inputs";

/** Translated upstream test_extended_reads_use_exact_documents_and_apollo_variables. */
export async function test_extended_reads_use_exact_documents_and_apollo_variables(...__args: any[]): any {
let client, coordinate, expected_calls, index, operation_name, required_location_variables, responses, session, variables, vehicle_null;
let {} = $.bind(__args, [], {}, [], null, null);
vehicle_null = Object.assign({}, {["vehicle"]: null});
responses = [$.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [Object.assign({}, {["eVehicleEligibility"]: null})], null), $.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [Object.assign({}, {["locationDetails"]: null})], null), $.call(graphql_response, [Object.assign({}, {["locationDetails"]: null})], null), $.call(graphql_response, [Object.assign({}, {["locationDetails"]: null})], null), $.call(graphql_response, [Object.assign({}, {["parkingChargeable"]: null})], null), $.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [vehicle_null], null), $.call(graphql_response, [Object.assign({}, {["tariffPricing"]: null})], null)];
session = $.call(FakeSession, [...$.iterable(responses)], null);
client = $.call(make_client, [session], null);
coordinate = $.call(CoordinateInput, [32.7157, -(117.1611)], null);
$.assert((((await $.call($.attr(client, "async_get_driving_history"), ["VIN", $.attr(DrivingHistoryAggregator, "DAILY")], Object.assign({}, {"distance_unit": UNSET}, {"weight_unit": UNSET}, {"speed_unit": UNSET}))) === null)), "test_extended_vehicle_reads_part_01.py:54: await client.async_get_driving_history('VIN', DrivingHistoryAggregator.DAILY, distance_unit=UNSET, weight_unit=UNSET, speed_unit=UNSET) is None");
$.assert((((await $.call($.attr(client, "async_get_driving_history"), ["VIN", $.attr(DrivingHistoryAggregator, "MONTHLY")], Object.assign({}, {"distance_unit": null}, {"weight_unit": null}, {"speed_unit": null}))) === null)), "test_extended_vehicle_reads_part_01.py:64: await client.async_get_driving_history('VIN', DrivingHistoryAggregator.MONTHLY, distance_unit=None, weight_unit=None, speed_unit=None) is None");
$.assert((((await $.call($.attr(client, "async_get_driving_history"), ["VIN", $.attr(DrivingHistoryAggregator, "YEARLY")], Object.assign({}, {"distance_unit": $.attr(DistanceUnit, "KILOMETER")}, {"weight_unit": $.attr(WeightUnit, "KILOGRAM")}, {"speed_unit": $.attr(SpeedUnit, "KPH")}))) === null)), "test_extended_vehicle_reads_part_01.py:74: await client.async_get_driving_history('VIN', DrivingHistoryAggregator.YEARLY, distance_unit=DistanceUnit.KILOMETER, weight_unit=WeightUnit.KILOGRAM, speed_unit=SpeedUnit.KPH) is None");
$.assert((((await $.call($.attr(client, "async_get_ev_charge_stations"), ["VIN", coordinate], Object.assign({}, {"plug_connector_types": UNSET}, {"enable_within_range_restriction": UNSET}))) === null)), "test_extended_vehicle_reads_part_01.py:85: await client.async_get_ev_charge_stations('VIN', coordinate, plug_connector_types=UNSET, enable_within_range_restriction=UNSET) is None");
$.assert((((await $.call($.attr(client, "async_get_ev_charge_stations"), ["VIN", coordinate], Object.assign({}, {"plug_connector_types": null}, {"enable_within_range_restriction": null}))) === null)), "test_extended_vehicle_reads_part_01.py:94: await client.async_get_ev_charge_stations('VIN', coordinate, plug_connector_types=None, enable_within_range_restriction=None) is None");
$.assert((((await $.call($.attr(client, "async_get_ev_charge_stations"), ["VIN", coordinate], Object.assign({}, {"plug_connector_types": [$.attr(PlugConnectorType, "CCS"), null, $.attr(PlugConnectorType, "NACS")]}, {"enable_within_range_restriction": true}))) === null)), "test_extended_vehicle_reads_part_01.py:103: await client.async_get_ev_charge_stations('VIN', coordinate, plug_connector_types=(PlugConnectorType.CCS, None, PlugConnectorType.NACS), enable_within_range_restriction=True) is None");
$.assert((((await $.call($.attr(client, "async_get_e_vehicle_eligibility"), ["VIN"], null)) === null)), "test_extended_vehicle_reads_part_01.py:113: await client.async_get_e_vehicle_eligibility('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_last_known_camera_usage_counter"), ["VIN"], null)) === null)), "test_extended_vehicle_reads_part_01.py:114: await client.async_get_last_known_camera_usage_counter('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_location_details"), ["VIN", "32.7157", "-117.1611", true, 25], Object.assign({}, {"operator_names": UNSET}, {"evse": UNSET}, {"plug_types": UNSET}, {"charge_level": UNSET}, {"pnc_stations_only": UNSET}))) === null)), "test_extended_vehicle_reads_part_01.py:116: await client.async_get_location_details('VIN', '32.7157', '-117.1611', True, 25, operator_names=UNSET, evse=UNSET, plug_types=UNSET, charge_level=UNSET, pnc_stations_only=UNSET) is None");
$.assert((((await $.call($.attr(client, "async_get_location_details"), ["VIN", "32.7157", "-117.1611", true, 25], Object.assign({}, {"operator_names": null}, {"evse": null}, {"plug_types": null}, {"charge_level": null}, {"pnc_stations_only": null}))) === null)), "test_extended_vehicle_reads_part_01.py:131: await client.async_get_location_details('VIN', '32.7157', '-117.1611', True, 25, operator_names=None, evse=None, plug_types=None, charge_level=None, pnc_stations_only=None) is None");
$.assert((((await $.call($.attr(client, "async_get_location_details"), ["VIN", "32.7157", "-117.1611", false, 50], Object.assign({}, {"operator_names": ["Operator", null]}, {"evse": $.attr(EmpEvseStatusInput, "AVAILABLE")}, {"plug_types": ["CCS", null]}, {"charge_level": $.attr(EmpConnectorLevelInput, "L3")}, {"pnc_stations_only": false}))) === null)), "test_extended_vehicle_reads_part_01.py:146: await client.async_get_location_details('VIN', '32.7157', '-117.1611', False, 50, operator_names=('Operator', None), evse=EmpEvseStatusInput.AVAILABLE, plug_types=('CCS', None), charge_level=EmpConnectorLevelInput.L3, pnc_stations_only=False) is None");
$.assert((((await $.call($.attr(client, "async_get_parking_chargeable"), ["EVSE-1"], null)) === null)), "test_extended_vehicle_reads_part_01.py:162: await client.async_get_parking_chargeable('EVSE-1') is None");
$.assert((((await $.call($.attr(client, "async_get_shareable_capabilities"), ["VIN"], Object.assign({}, {"driver_id": UNSET}))) === null)), "test_extended_vehicle_reads_part_01.py:163: await client.async_get_shareable_capabilities('VIN', driver_id=UNSET) is None");
$.assert((((await $.call($.attr(client, "async_get_shareable_capabilities"), ["VIN"], Object.assign({}, {"driver_id": null}))) === null)), "test_extended_vehicle_reads_part_01.py:164: await client.async_get_shareable_capabilities('VIN', driver_id=None) is None");
$.assert((((await $.call($.attr(client, "async_get_shareable_capabilities"), ["VIN"], Object.assign({}, {"driver_id": "driver-1"}))) === null)), "test_extended_vehicle_reads_part_01.py:165: await client.async_get_shareable_capabilities('VIN', driver_id='driver-1') is None");
$.assert((((await $.call($.attr(client, "async_get_tariff_pricing"), ["VIN", "location-1"], null)) === null)), "test_extended_vehicle_reads_part_01.py:166: await client.async_get_tariff_pricing('VIN', 'location-1') is None");
required_location_variables = Object.assign({}, {["vin"]: "VIN"}, {["latitude"]: "32.7157"}, {["longitude"]: "-117.1611"}, {["inNetworkOnly"]: true}, {["range"]: 25});
expected_calls = [["DrivingHistory", Object.assign({}, {["vin"]: "VIN"}, {["aggregator"]: "DAILY"})], ["DrivingHistory", Object.assign({}, {["vin"]: "VIN"}, {["aggregator"]: "MONTHLY"}, {["distanceUnit"]: null}, {["weightUnit"]: null}, {["speedUnit"]: null})], ["DrivingHistory", Object.assign({}, {["vin"]: "VIN"}, {["aggregator"]: "YEARLY"}, {["distanceUnit"]: "KILOMETER"}, {["weightUnit"]: "KILOGRAM"}, {["speedUnit"]: "KPH"})], ["EVChargeStations", Object.assign({}, {["vin"]: "VIN"}, {["coordinate"]: Object.assign({}, {["latitude"]: 32.7157}, {["longitude"]: -(117.1611)})})], ["EVChargeStations", Object.assign({}, {["vin"]: "VIN"}, {["coordinate"]: Object.assign({}, {["latitude"]: 32.7157}, {["longitude"]: -(117.1611)})}, {["plugConnectorTypes"]: null}, {["enableWithinRangeRestriction"]: null})], ["EVChargeStations", Object.assign({}, {["vin"]: "VIN"}, {["coordinate"]: Object.assign({}, {["latitude"]: 32.7157}, {["longitude"]: -(117.1611)})}, {["plugConnectorTypes"]: ["CCS", null, "NACS"]}, {["enableWithinRangeRestriction"]: true})], ["eVehicleEligibility", Object.assign({}, {["vin"]: "VIN"})], ["LastKnownCameraUsageCounter", Object.assign({}, {["vin"]: "VIN"})], ["LocationDetails", required_location_variables], ["LocationDetails", Object.assign({}, required_location_variables, {["operatorName"]: null}, {["evse"]: null}, {["plugType"]: null}, {["chargeLevel"]: null}, {["pncStationsOnly"]: null})], ["LocationDetails", Object.assign({}, {["vin"]: "VIN"}, {["latitude"]: "32.7157"}, {["longitude"]: "-117.1611"}, {["inNetworkOnly"]: false}, {["range"]: 50}, {["operatorName"]: ["Operator", null]}, {["evse"]: "AVAILABLE"}, {["plugType"]: ["CCS", null]}, {["chargeLevel"]: "L3"}, {["pncStationsOnly"]: false})], ["ParkingChargeable", Object.assign({}, {["evseId"]: "EVSE-1"})], ["ShareableCapabilities", Object.assign({}, {["vin"]: "VIN"})], ["ShareableCapabilities", Object.assign({}, {["vin"]: "VIN"}, {["driverId"]: null})], ["ShareableCapabilities", Object.assign({}, {["vin"]: "VIN"}, {["driverId"]: "driver-1"})], ["TariffPricing", Object.assign({}, {["vin"]: "VIN"}, {["locationId"]: "location-1"})]];
$.assertEqual($.call($.len, [$.attr(session, "calls")], null), $.call($.len, [expected_calls], null), "test_extended_vehicle_reads_part_01.py:257: len(session.calls) == len(expected_calls)");
for ([index, [operation_name, variables]] of $.iterable($.call($.enumerate, [expected_calls], null))) {
$.call(assert_graphql_call, [session, index, operation_name, variables], null);
}
}

/** Translated upstream test_unknown_enum_sentinels_cannot_be_serialized. */
export function test_unknown_enum_sentinels_cannot_be_serialized(...__args: any[]): any {
let {"serializer": serializer} = $.bind(__args, ["serializer"], {}, [], null, null);
$.raises($.ValueError, "UNKNOWN_VALUE", () => {
$.call(serializer, [], null);
});
}

$.register("test_extended_vehicle_reads_part_01.py::test_extended_reads_use_exact_documents_and_apollo_variables", test_extended_reads_use_exact_documents_and_apollo_variables, []);

$.register("test_extended_vehicle_reads_part_01.py::test_unknown_enum_sentinels_cannot_be_serialized", test_unknown_enum_sentinels_cannot_be_serialized, [["serializer", [() => $.call(driving_history_variables, ["VIN", $.attr(DrivingHistoryAggregator, "UNKNOWN_VALUE")], null), () => $.call(driving_history_variables, ["VIN", $.attr(DrivingHistoryAggregator, "DAILY")], Object.assign({}, {"distance_unit": $.attr(DistanceUnit, "UNKNOWN_VALUE")})), () => $.call(driving_history_variables, ["VIN", $.attr(DrivingHistoryAggregator, "DAILY")], Object.assign({}, {"weight_unit": $.attr(WeightUnit, "UNKNOWN_VALUE")})), () => $.call(driving_history_variables, ["VIN", $.attr(DrivingHistoryAggregator, "DAILY")], Object.assign({}, {"speed_unit": $.attr(SpeedUnit, "UNKNOWN_VALUE")})), () => $.call(ev_charge_stations_variables, ["VIN", $.call(CoordinateInput, [1.0, 2.0], null)], Object.assign({}, {"plug_connector_types": [$.attr(PlugConnectorType, "UNKNOWN_VALUE")]})), () => $.call(location_details_variables, ["VIN", "1", "2", false, 5], Object.assign({}, {"evse": $.attr(EmpEvseStatusInput, "UNKNOWN_VALUE")})), () => $.call(location_details_variables, ["VIN", "1", "2", false, 5], Object.assign({}, {"charge_level": $.attr(EmpConnectorLevelInput, "UNKNOWN_VALUE")}))]]]);
