// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import { _enum, _float, _nullable_datetime, _nullable_enum, _nullable_float, _nullable_int, _nullable_string, _optional_typed_object, _typed_object } from "./_extended_vehicle_value_parsing";
export { _enum, _float, _nullable_datetime, _nullable_enum, _nullable_float, _nullable_int, _nullable_string, _optional_typed_object, _typed_object };

import { DrivingHistoryAverageSpeed, DrivingHistoryCo2Saved, DrivingHistoryCoordinate, DrivingHistoryDistance, DrivingHistoryTrip, DrivingHistoryTripSummary, WeightUnit } from "./extended_vehicle_models";
export { DrivingHistoryAverageSpeed, DrivingHistoryCo2Saved, DrivingHistoryCoordinate, DrivingHistoryDistance, DrivingHistoryTrip, DrivingHistoryTripSummary, WeightUnit };

import { DistanceUnit, SpeedUnit } from "./models";
export { DistanceUnit, SpeedUnit };

export function _parse_driving_history_summary(value: unknown, path: string): DrivingHistoryTripSummary;
/** Translated upstream _parse_driving_history_summary. */
export function _parse_driving_history_summary(...__args: any[]): any {
let summary;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
summary = $.call(_typed_object, [value, path], null);
return $.call(DrivingHistoryTripSummary, [], Object.assign({}, {"user_id": $.call(_nullable_string, [$.call($.attr(summary, "get"), ["userId"], null), ($.str(path) + ".userId")], null)}, {"day": $.call(_nullable_int, [$.call($.attr(summary, "get"), ["day"], null), ($.str(path) + ".day")], null)}, {"month": $.call(_nullable_int, [$.call($.attr(summary, "get"), ["month"], null), ($.str(path) + ".month")], null)}, {"year": $.call(_nullable_int, [$.call($.attr(summary, "get"), ["year"], null), ($.str(path) + ".year")], null)}, {"number_of_trips": $.call(_nullable_int, [$.call($.attr(summary, "get"), ["numberOfTrips"], null), ($.str(path) + ".numberOfTrips")], null)}, {"distance_traveled": $.call(_parse_optional_driving_distance, [$.call($.attr(summary, "get"), ["distanceTraveled"], null), ($.str(path) + ".distanceTraveled")], null)}, {"duration": $.call(_nullable_string, [$.call($.attr(summary, "get"), ["duration"], null), ($.str(path) + ".duration")], null)}, {"average_speed": $.call(_parse_optional_average_speed, [$.call($.attr(summary, "get"), ["averageSpeed"], null), ($.str(path) + ".averageSpeed")], null)}, {"energy_consumed": $.call(_nullable_float, [$.call($.attr(summary, "get"), ["energyConsumed"], null), ($.str(path) + ".energyConsumed")], null)}, {"co2_saved": $.call(_parse_optional_co2_saved, [$.call($.attr(summary, "get"), ["co2Saved"], null), ($.str(path) + ".co2Saved")], null)}));
}

export function _parse_driving_history_trip(value: unknown, path: string): DrivingHistoryTrip;
/** Translated upstream _parse_driving_history_trip. */
export function _parse_driving_history_trip(...__args: any[]): any {
let trip;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
trip = $.call(_typed_object, [value, path], null);
return $.call(DrivingHistoryTrip, [], Object.assign({}, {"distance": $.call(_parse_optional_driving_distance, [$.call($.attr(trip, "get"), ["distance"], null), ($.str(path) + ".distance")], null)}, {"start_date": $.call(_nullable_datetime, [$.call($.attr(trip, "get"), ["startDate"], null), ($.str(path) + ".startDate")], null)}, {"end_date": $.call(_nullable_datetime, [$.call($.attr(trip, "get"), ["endDate"], null), ($.str(path) + ".endDate")], null)}, {"duration": $.call(_nullable_int, [$.call($.attr(trip, "get"), ["duration"], null), ($.str(path) + ".duration")], null)}, {"start_location": $.call(_parse_optional_driving_coordinate, [$.call($.attr(trip, "get"), ["startLocation"], null), ($.str(path) + ".startLocation")], null)}, {"end_location": $.call(_parse_optional_driving_coordinate, [$.call($.attr(trip, "get"), ["endLocation"], null), ($.str(path) + ".endLocation")], null)}, {"average_speed": $.call(_parse_optional_average_speed, [$.call($.attr(trip, "get"), ["averageSpeed"], null), ($.str(path) + ".averageSpeed")], null)}, {"energy_consumed": $.call(_nullable_float, [$.call($.attr(trip, "get"), ["energyConsumed"], null), ($.str(path) + ".energyConsumed")], null)}, {"energy_saved": $.call(_nullable_float, [$.call($.attr(trip, "get"), ["energySaved"], null), ($.str(path) + ".energySaved")], null)}, {"co2_saved": $.call(_parse_optional_co2_saved, [$.call($.attr(trip, "get"), ["co2Saved"], null), ($.str(path) + ".co2Saved")], null)}, {"user_id": $.call(_nullable_string, [$.call($.attr(trip, "get"), ["userId"], null), ($.str(path) + ".userId")], null)}));
}

export function _parse_optional_driving_distance(value: unknown, path: string): DrivingHistoryDistance | null;
/** Translated upstream _parse_optional_driving_distance. */
export function _parse_optional_driving_distance(...__args: any[]): any {
let distance;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
distance = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((distance === null)))) {
return null;
}
return $.call(DrivingHistoryDistance, [], Object.assign({}, {"unit": $.call(_enum, [$.call($.attr(distance, "get"), ["unit"], null), DistanceUnit, ($.str(path) + ".unit")], null)}, {"value": $.call(_float, [$.call($.attr(distance, "get"), ["value"], null), ($.str(path) + ".value")], null)}));
}

export function _parse_optional_average_speed(value: unknown, path: string): DrivingHistoryAverageSpeed | null;
/** Translated upstream _parse_optional_average_speed. */
export function _parse_optional_average_speed(...__args: any[]): any {
let speed;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
speed = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((speed === null)))) {
return null;
}
return $.call(DrivingHistoryAverageSpeed, [], Object.assign({}, {"type": $.call(_nullable_enum, [$.call($.attr(speed, "get"), ["type"], null), SpeedUnit, ($.str(path) + ".type")], null)}, {"value": $.call(_nullable_float, [$.call($.attr(speed, "get"), ["value"], null), ($.str(path) + ".value")], null)}));
}

export function _parse_optional_co2_saved(value: unknown, path: string): DrivingHistoryCo2Saved | null;
/** Translated upstream _parse_optional_co2_saved. */
export function _parse_optional_co2_saved(...__args: any[]): any {
let saved;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
saved = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((saved === null)))) {
return null;
}
return $.call(DrivingHistoryCo2Saved, [], Object.assign({}, {"unit": $.call(_nullable_enum, [$.call($.attr(saved, "get"), ["unit"], null), WeightUnit, ($.str(path) + ".unit")], null)}, {"value": $.call(_nullable_float, [$.call($.attr(saved, "get"), ["value"], null), ($.str(path) + ".value")], null)}));
}

export function _parse_optional_driving_coordinate(value: unknown, path: string): DrivingHistoryCoordinate | null;
/** Translated upstream _parse_optional_driving_coordinate. */
export function _parse_optional_driving_coordinate(...__args: any[]): any {
let coordinate;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
coordinate = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((coordinate === null)))) {
return null;
}
return $.call(DrivingHistoryCoordinate, [], Object.assign({}, {"latitude": $.call(_nullable_float, [$.call($.attr(coordinate, "get"), ["latitude"], null), ($.str(path) + ".latitude")], null)}, {"longitude": $.call(_nullable_float, [$.call($.attr(coordinate, "get"), ["longitude"], null), ($.str(path) + ".longitude")], null)}));
}
