// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _parse_driving_history_summary, _parse_driving_history_trip } from "./_extended_vehicle_driving_parsing";
export { _parse_driving_history_summary, _parse_driving_history_trip };

import { _parse_emp_location, _parse_ev_charge_station } from "./_extended_vehicle_location_parsing";
export { _parse_emp_location, _parse_ev_charge_station };

import { _parse_shareable_capability_group, _parse_tariff_pricing_data } from "./_extended_vehicle_tariff_parsing";
export { _parse_shareable_capability_group, _parse_tariff_pricing_data };

import { _list, _nullable_bool, _nullable_datetime, _nullable_list, _nullable_string, _optional_typed_object, _vehicle } from "./_extended_vehicle_value_parsing";
export { _list, _nullable_bool, _nullable_datetime, _nullable_list, _nullable_string, _optional_typed_object, _vehicle };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { DrivingHistory, DrivingHistoryTrip, DrivingHistoryTripSummary, EmpLocation, EVChargeStation, EVehicleEligibility, EVehicleEligibilityData, LastKnownCameraUsageCounter, LocationDetails, ParkingChargeable, ParkingChargeableData, ShareableCapabilities, ShareableCapabilityGroup, TariffPricing } from "./extended_vehicle_models";
export { DrivingHistory, DrivingHistoryTrip, DrivingHistoryTripSummary, EmpLocation, EVChargeStation, EVehicleEligibility, EVehicleEligibilityData, LastKnownCameraUsageCounter, LocationDetails, ParkingChargeable, ParkingChargeableData, ShareableCapabilities, ShareableCapabilityGroup, TariffPricing };

export function parse_driving_history(data: Record<string, unknown>): DrivingHistory | null;
/** Parse an electric vehicle's driving history with strict list nullability. */
export function parse_driving_history(...__args: any[]): any {
let history, index, path, summaries, summary_values, trip_values, trips, value, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse an electric vehicle's driving history with strict list nullability. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "drivingHistory"))))) {
return null;
}
path = "vehicle.drivingHistory";
history = $.call(_optional_typed_object, [$.call($.attr(vehicle, "get"), ["drivingHistory"], null), path], null);
if ($.truth(((history === null)))) {
return null;
}
summary_values = $.call(_list, [$.call($.attr(history, "get"), ["tripSummaries"], null), ($.str(path) + ".tripSummaries")], null);
summaries = [];
for ([index, value] of $.iterable($.call($.enumerate, [summary_values], null))) {
$.call($.attr(summaries, "append"), [$.call(_parse_driving_history_summary, [value, ($.str(path) + ".tripSummaries[" + $.str(index) + "]")], null)], null);
}
trip_values = $.call(_list, [$.call($.attr(history, "get"), ["trips"], null), ($.str(path) + ".trips")], null);
trips = [];
for ([index, value] of $.iterable($.call($.enumerate, [trip_values], null))) {
$.call($.attr(trips, "append"), [$.call(_parse_driving_history_trip, [value, ($.str(path) + ".trips[" + $.str(index) + "]")], null)], null);
}
return $.call(DrivingHistory, [$.call($.tuple, [summaries], null), $.call($.tuple, [trips], null)], null);
}

export function parse_ev_charge_stations(data: Record<string, unknown>): ReadonlyArray<EVChargeStation | null> | null;
/** Parse nearby charging stations while preserving nullable list items. */
export function parse_ev_charge_stations(...__args: any[]): any {
let index, path, stations, value, values, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nearby charging stations while preserving nullable list items. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "evChargeStations"))))) {
return null;
}
path = "vehicle.evChargeStations";
values = $.call(_nullable_list, [$.call($.attr(vehicle, "get"), ["evChargeStations"], null), path], null);
if ($.truth(((values === null)))) {
return null;
}
stations = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(stations, "append"), [null], null);
continue;
}
$.call($.attr(stations, "append"), [$.call(_parse_ev_charge_station, [value, ($.str(path) + "[" + $.str(index) + "]")], null)], null);
}
return $.call($.tuple, [stations], null);
}

export function parse_e_vehicle_eligibility(data: Record<string, unknown>): EVehicleEligibility | null;
/** Parse the raw eVehicle eligibility status wrapper. */
export function parse_e_vehicle_eligibility(...__args: any[]): any {
let eligibility_data, result, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw eVehicle eligibility status wrapper. */
root_field = "eVehicleEligibility";
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
result = $.call(_optional_typed_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
if ($.truth(((result === null)))) {
return null;
}
eligibility_data = $.call(_optional_typed_object, [$.call($.attr(result, "get"), ["data"], null), ($.str(root_field) + ".data")], null);
return $.call(EVehicleEligibility, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(result, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": ($.truth(((eligibility_data !== null))) ? $.call(EVehicleEligibilityData, [], Object.assign({}, {"vin": $.call(_nullable_string, [$.call($.attr(eligibility_data, "get"), ["vin"], null), ($.str(root_field) + ".data.vin")], null)}, {"v1g_eligible": $.call(_nullable_bool, [$.call($.attr(eligibility_data, "get"), ["v1GEligible"], null), ($.str(root_field) + ".data.v1GEligible")], null)})) : null)}));
}

export function parse_last_known_camera_usage_counter(data: Record<string, unknown>): LastKnownCameraUsageCounter | null;
/** Parse the last known camera usage counter for an AVK2 vehicle. */
export function parse_last_known_camera_usage_counter(...__args: any[]): any {
let path, result, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the last known camera usage counter for an AVK2 vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "lastKnownCameraUsageCounter"))))) {
return null;
}
path = "vehicle.lastKnownCameraUsageCounter";
result = $.call(_optional_typed_object, [$.call($.attr(vehicle, "get"), ["lastKnownCameraUsageCounter"], null), path], null);
if ($.truth(((result === null)))) {
return null;
}
return $.call(LastKnownCameraUsageCounter, [], Object.assign({}, {"counter": $.call(_nullable_string, [$.call($.attr(result, "get"), ["counter"], null), ($.str(path) + ".counter")], null)}, {"last_update_time": $.call(_nullable_datetime, [$.call($.attr(result, "get"), ["lastUpdateTime"], null), ($.str(path) + ".lastUpdateTime")], null)}));
}

export function parse_location_details(data: Record<string, unknown>): LocationDetails | null;
/** Parse the raw EMP status wrapper and charging-location collection. */
export function parse_location_details(...__args: any[]): any {
let index, locations, parsed_locations, raw_locations, result, root_field, value;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw EMP status wrapper and charging-location collection. */
root_field = "locationDetails";
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
result = $.call(_optional_typed_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
if ($.truth(((result === null)))) {
return null;
}
raw_locations = $.call(_nullable_list, [$.call($.attr(result, "get"), ["data"], null), ($.str(root_field) + ".data")], null);
locations = null;
if ($.truth(((raw_locations !== null)))) {
parsed_locations = [];
for ([index, value] of $.iterable($.call($.enumerate, [raw_locations], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(parsed_locations, "append"), [null], null);
continue;
}
$.call($.attr(parsed_locations, "append"), [$.call(_parse_emp_location, [value, ($.str(root_field) + ".data[" + $.str(index) + "]")], null)], null);
}
locations = $.call($.tuple, [parsed_locations], null);
}
return $.call(LocationDetails, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(result, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": locations}));
}

export function parse_parking_chargeable(data: Record<string, unknown>): ParkingChargeable | null;
/** Parse the raw EMP parking-chargeability status wrapper. */
export function parse_parking_chargeable(...__args: any[]): any {
let raw_data, result, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw EMP parking-chargeability status wrapper. */
root_field = "parkingChargeable";
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
result = $.call(_optional_typed_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
if ($.truth(((result === null)))) {
return null;
}
raw_data = $.call(_optional_typed_object, [$.call($.attr(result, "get"), ["data"], null), ($.str(root_field) + ".data")], null);
return $.call(ParkingChargeable, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(result, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": ($.truth(((raw_data !== null))) ? $.call(ParkingChargeableData, [], Object.assign({}, {"evse_id": $.call(_nullable_string, [$.call($.attr(raw_data, "get"), ["evseId"], null), ($.str(root_field) + ".data.evseId")], null)}, {"is_parking_chargeable": $.call(_nullable_bool, [$.call($.attr(raw_data, "get"), ["isParkingChargeable"], null), ($.str(root_field) + ".data.isParkingChargeable")], null)}, {"is_congestion_chargeable": $.call(_nullable_bool, [$.call($.attr(raw_data, "get"), ["isCongestionChargeable"], null), ($.str(root_field) + ".data.isCongestionChargeable")], null)})) : null)}));
}

export function parse_shareable_capabilities(data: Record<string, unknown>): ShareableCapabilities | null;
/** Parse shareable capability groups while retaining nullable list items. */
export function parse_shareable_capabilities(...__args: any[]): any {
let groups, index, path, raw_groups, result, value, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse shareable capability groups while retaining nullable list items. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "shareableCapabilities"))))) {
return null;
}
path = "vehicle.shareableCapabilities";
result = $.call(_optional_typed_object, [$.call($.attr(vehicle, "get"), ["shareableCapabilities"], null), path], null);
if ($.truth(((result === null)))) {
return null;
}
raw_groups = $.call(_list, [$.call($.attr(result, "get"), ["group"], null), ($.str(path) + ".group")], null);
groups = [];
for ([index, value] of $.iterable($.call($.enumerate, [raw_groups], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(groups, "append"), [null], null);
continue;
}
$.call($.attr(groups, "append"), [$.call(_parse_shareable_capability_group, [value, ($.str(path) + ".group[" + $.str(index) + "]")], null)], null);
}
return $.call(ShareableCapabilities, [$.call($.tuple, [groups], null)], null);
}

export function parse_tariff_pricing(data: Record<string, unknown>): TariffPricing | null;
/** Parse the raw EMP tariff-pricing status wrapper. */
export function parse_tariff_pricing(...__args: any[]): any {
let raw_data, result, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw EMP tariff-pricing status wrapper. */
root_field = "tariffPricing";
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
result = $.call(_optional_typed_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
if ($.truth(((result === null)))) {
return null;
}
raw_data = $.call(_optional_typed_object, [$.call($.attr(result, "get"), ["data"], null), ($.str(root_field) + ".data")], null);
return $.call(TariffPricing, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(result, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(result, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": ($.truth(((raw_data !== null))) ? $.call(_parse_tariff_pricing_data, [raw_data, ($.str(root_field) + ".data")], null) : null)}));
}
