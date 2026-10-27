// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const UTC = $.UTC;
const datetime = $.datetime;
const timedelta = $.timedelta;

import { WeightUnit } from "../src/extended_vehicle_models";

import { parse_driving_history, parse_e_vehicle_eligibility, parse_ev_charge_stations, parse_last_known_camera_usage_counter, parse_parking_chargeable, parse_shareable_capabilities } from "../src/extended_vehicle_parsing";

import { DistanceUnit, SpeedUnit } from "../src/models";

import { PlugConnectorType } from "../src/navigation_inputs";

/** Translated upstream test_driving_history_parses_non_null_tuples_dates_and_unknown_enums. */
export function test_driving_history_parses_non_null_tuples_dates_and_unknown_enums(...__args: any[]): any {
let history, summary, trip;
let {} = $.bind(__args, [], {}, [], null, null);
history = $.call(parse_driving_history, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["drivingHistory"]: Object.assign({}, {["__typename"]: "DrivingHistory"}, {["tripSummaries"]: [Object.assign({}, {["__typename"]: "TripSummary"}, {["userId"]: "driver-1"}, {["day"]: 31}, {["month"]: 7}, {["year"]: 2026}, {["numberOfTrips"]: 2}, {["distanceTraveled"]: Object.assign({}, {["__typename"]: "Distance"}, {["unit"]: "FUTURE_DISTANCE_UNIT"}, {["value"]: 42.5})}, {["duration"]: "PT1H30M"}, {["averageSpeed"]: Object.assign({}, {["__typename"]: "Speed"}, {["type"]: "FUTURE_SPEED_UNIT"}, {["value"]: 28.3})}, {["energyConsumed"]: 9.75}, {["co2Saved"]: Object.assign({}, {["__typename"]: "Weight"}, {["unit"]: "FUTURE_WEIGHT_UNIT"}, {["value"]: 7.2})})]}, {["trips"]: [Object.assign({}, {["__typename"]: "Trip"}, {["distance"]: Object.assign({}, {["__typename"]: "Distance"}, {["unit"]: "KILOMETER"}, {["value"]: 21.25})}, {["startDate"]: "2026-07-31T12:00:00-07:00"}, {["endDate"]: "2026-07-31T12:45:00-07:00"}, {["duration"]: 45}, {["startLocation"]: Object.assign({}, {["__typename"]: "Location"}, {["latitude"]: 32.7}, {["longitude"]: -(117.1)})}, {["endLocation"]: Object.assign({}, {["__typename"]: "Location"}, {["latitude"]: null}, {["longitude"]: null})}, {["averageSpeed"]: Object.assign({}, {["__typename"]: "Speed"}, {["type"]: "MPH"}, {["value"]: 35})}, {["energyConsumed"]: 4.5}, {["energySaved"]: null}, {["co2Saved"]: null}, {["userId"]: null})]})})})], null);
$.assert(((history !== null)), "test_extended_vehicle_reads_part_02.py:91: history is not None");
$.assert($.call($.isinstance, [$.attr(history, "trip_summaries"), $.tuple], null), "test_extended_vehicle_reads_part_02.py:92: isinstance(history.trip_summaries, tuple)");
$.assert($.call($.isinstance, [$.attr(history, "trips"), $.tuple], null), "test_extended_vehicle_reads_part_02.py:93: isinstance(history.trips, tuple)");
summary = $.get($.attr(history, "trip_summaries"), 0);
$.assert((($.attr(summary, "distance_traveled") !== null)), "test_extended_vehicle_reads_part_02.py:95: summary.distance_traveled is not None");
$.assert((($.attr($.attr(summary, "distance_traveled"), "unit") === $.attr(DistanceUnit, "UNKNOWN_VALUE"))), "test_extended_vehicle_reads_part_02.py:96: summary.distance_traveled.unit is DistanceUnit.UNKNOWN_VALUE");
$.assert((($.attr(summary, "average_speed") !== null)), "test_extended_vehicle_reads_part_02.py:97: summary.average_speed is not None");
$.assert((($.attr($.attr(summary, "average_speed"), "type") === $.attr(SpeedUnit, "UNKNOWN_VALUE"))), "test_extended_vehicle_reads_part_02.py:98: summary.average_speed.type is SpeedUnit.UNKNOWN_VALUE");
$.assert((($.attr(summary, "co2_saved") !== null)), "test_extended_vehicle_reads_part_02.py:99: summary.co2_saved is not None");
$.assert((($.attr($.attr(summary, "co2_saved"), "unit") === $.attr(WeightUnit, "UNKNOWN_VALUE"))), "test_extended_vehicle_reads_part_02.py:100: summary.co2_saved.unit is WeightUnit.UNKNOWN_VALUE");
trip = $.get($.attr(history, "trips"), 0);
$.assert((($.attr(trip, "distance") !== null)), "test_extended_vehicle_reads_part_02.py:102: trip.distance is not None");
$.assert((($.attr($.attr(trip, "distance"), "unit") === $.attr(DistanceUnit, "KILOMETER"))), "test_extended_vehicle_reads_part_02.py:103: trip.distance.unit is DistanceUnit.KILOMETER");
$.assert((($.attr(trip, "start_date") !== null)), "test_extended_vehicle_reads_part_02.py:104: trip.start_date is not None");
$.assertEqual($.call($.attr($.attr(trip, "start_date"), "utcoffset"), [], null), $.call(timedelta, [], Object.assign({}, {"hours": -(7)})), "test_extended_vehicle_reads_part_02.py:105: trip.start_date.utcoffset() == timedelta(hours=-7)");
$.assert((($.attr(trip, "end_date") !== null)), "test_extended_vehicle_reads_part_02.py:106: trip.end_date is not None");
$.assertEqual($.call($.attr($.attr(trip, "end_date"), "utcoffset"), [], null), $.call(timedelta, [], Object.assign({}, {"hours": -(7)})), "test_extended_vehicle_reads_part_02.py:107: trip.end_date.utcoffset() == timedelta(hours=-7)");
$.assert((($.attr(trip, "start_location") !== null)), "test_extended_vehicle_reads_part_02.py:108: trip.start_location is not None");
$.assertEqual($.attr($.attr(trip, "start_location"), "latitude"), 32.7, "test_extended_vehicle_reads_part_02.py:109: trip.start_location.latitude == 32.7");
$.assert((($.attr(trip, "end_location") !== null)), "test_extended_vehicle_reads_part_02.py:110: trip.end_location is not None");
$.assert((($.attr($.attr(trip, "end_location"), "latitude") === null)), "test_extended_vehicle_reads_part_02.py:111: trip.end_location.latitude is None");
}

/** Translated upstream test_ev_charge_stations_preserve_nullable_lists_and_unknown_connector_enum. */
export function test_ev_charge_stations_preserve_nullable_lists_and_unknown_connector_enum(...__args: any[]): any {
let connector, station, stations;
let {} = $.bind(__args, [], {}, [], null, null);
stations = $.call(parse_ev_charge_stations, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricVehicle"}, {["evChargeStations"]: [null, Object.assign({}, {["__typename"]: "EvChargeStation"}, {["id"]: "station-1"}, {["name"]: "Station"}, {["phoneNumber"]: null}, {["address"]: Object.assign({}, {["__typename"]: "Address"}, {["address1"]: "1 Main St"}, {["address2"]: null}, {["city"]: "San Diego"}, {["country"]: "US"}, {["postalCode"]: "92101"}, {["state"]: "CA"})}, {["location"]: Object.assign({}, {["__typename"]: "Coordinate"}, {["latitude"]: 32.7157}, {["longitude"]: -(117.1611)})}, {["connectors"]: [null, Object.assign({}, {["__typename"]: "Connector"}, {["plugConnectorType"]: "FUTURE_CONNECTOR"}, {["ratedPowerKW"]: 150}, {["voltageV"]: 400}, {["currentA"]: 375}, {["currentType"]: "DC"})]})]})})], null);
$.assert(((stations !== null)), "test_extended_vehicle_reads_part_02.py:157: stations is not None");
$.assert($.call($.isinstance, [stations, $.tuple], null), "test_extended_vehicle_reads_part_02.py:158: isinstance(stations, tuple)");
$.assert((($.get(stations, 0) === null)), "test_extended_vehicle_reads_part_02.py:159: stations[0] is None");
station = $.get(stations, 1);
$.assert(((station !== null)), "test_extended_vehicle_reads_part_02.py:161: station is not None");
$.assert((($.attr(station, "address") !== null)), "test_extended_vehicle_reads_part_02.py:162: station.address is not None");
$.assertEqual($.attr($.attr(station, "address"), "postal_code"), "92101", "test_extended_vehicle_reads_part_02.py:163: station.address.postal_code == '92101'");
$.assert((($.attr(station, "location") !== null)), "test_extended_vehicle_reads_part_02.py:164: station.location is not None");
$.assertEqual($.attr($.attr(station, "location"), "latitude"), 32.7157, "test_extended_vehicle_reads_part_02.py:165: station.location.latitude == 32.7157");
$.assert((($.attr(station, "connectors") !== null)), "test_extended_vehicle_reads_part_02.py:166: station.connectors is not None");
$.assert($.call($.isinstance, [$.attr(station, "connectors"), $.tuple], null), "test_extended_vehicle_reads_part_02.py:167: isinstance(station.connectors, tuple)");
$.assert((($.get($.attr(station, "connectors"), 0) === null)), "test_extended_vehicle_reads_part_02.py:168: station.connectors[0] is None");
connector = $.get($.attr(station, "connectors"), 1);
$.assert(((connector !== null)), "test_extended_vehicle_reads_part_02.py:170: connector is not None");
$.assert((($.attr(connector, "plug_connector_type") === $.attr(PlugConnectorType, "UNKNOWN_VALUE"))), "test_extended_vehicle_reads_part_02.py:171: connector.plug_connector_type is PlugConnectorType.UNKNOWN_VALUE");
$.assertEqual($.attr(connector, "rated_power_kw"), 150.0, "test_extended_vehicle_reads_part_02.py:172: connector.rated_power_kw == 150.0");
}

/** Translated upstream test_status_wrappers_camera_counter_and_shareable_capabilities_parse_exactly. */
export function test_status_wrappers_camera_counter_and_shareable_capabilities_parse_exactly(...__args: any[]): any {
let camera, capability, eligibility, group, parking, shareable;
let {} = $.bind(__args, [], {}, [], null, null);
eligibility = $.call(parse_e_vehicle_eligibility, [Object.assign({}, {["eVehicleEligibility"]: Object.assign({}, {["__typename"]: "EVehicleEligibilityResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "raw-eligibility-timestamp"}, {["data"]: Object.assign({}, {["__typename"]: "EVehicleEligibilityData"}, {["vin"]: "VIN"}, {["v1GEligible"]: true})})})], null);
$.assert(((eligibility !== null)), "test_extended_vehicle_reads_part_02.py:191: eligibility is not None");
$.assertEqual($.attr(eligibility, "status_code"), "1000", "test_extended_vehicle_reads_part_02.py:192: eligibility.status_code == '1000'");
$.assert((($.attr(eligibility, "status_message") === null)), "test_extended_vehicle_reads_part_02.py:193: eligibility.status_message is None");
$.assertEqual($.attr(eligibility, "timestamp"), "raw-eligibility-timestamp", "test_extended_vehicle_reads_part_02.py:194: eligibility.timestamp == 'raw-eligibility-timestamp'");
$.assert((($.attr(eligibility, "data") !== null)), "test_extended_vehicle_reads_part_02.py:195: eligibility.data is not None");
$.assert((($.attr($.attr(eligibility, "data"), "v1g_eligible") === true)), "test_extended_vehicle_reads_part_02.py:196: eligibility.data.v1g_eligible is True");
camera = $.call(parse_last_known_camera_usage_counter, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["lastKnownCameraUsageCounter"]: Object.assign({}, {["__typename"]: "CameraUsageCounter"}, {["counter"]: "00042"}, {["lastUpdateTime"]: "2026-07-31T19:30:00Z"})})})], null);
$.assert(((camera !== null)), "test_extended_vehicle_reads_part_02.py:210: camera is not None");
$.assertEqual($.attr(camera, "counter"), "00042", "test_extended_vehicle_reads_part_02.py:211: camera.counter == '00042'");
$.assertEqual($.attr(camera, "last_update_time"), $.call(datetime, [2026, 7, 31, 19, 30], Object.assign({}, {"tzinfo": UTC})), "test_extended_vehicle_reads_part_02.py:212: camera.last_update_time == datetime(2026, 7, 31, 19, 30, tzinfo=UTC)");
parking = $.call(parse_parking_chargeable, [Object.assign({}, {["parkingChargeable"]: Object.assign({}, {["__typename"]: "ParkingChargeableResponse"}, {["statusCode"]: "4002"}, {["statusMessage"]: "raw message"}, {["timestamp"]: "raw-parking-timestamp"}, {["data"]: Object.assign({}, {["__typename"]: "ParkingChargeableData"}, {["evseId"]: "EVSE-1"}, {["isParkingChargeable"]: true}, {["isCongestionChargeable"]: null})})})], null);
$.assert(((parking !== null)), "test_extended_vehicle_reads_part_02.py:230: parking is not None");
$.assertEqual($.attr(parking, "status_code"), "4002", "test_extended_vehicle_reads_part_02.py:231: parking.status_code == '4002'");
$.assertEqual($.attr(parking, "status_message"), "raw message", "test_extended_vehicle_reads_part_02.py:232: parking.status_message == 'raw message'");
$.assertEqual($.attr(parking, "timestamp"), "raw-parking-timestamp", "test_extended_vehicle_reads_part_02.py:233: parking.timestamp == 'raw-parking-timestamp'");
$.assert((($.attr(parking, "data") !== null)), "test_extended_vehicle_reads_part_02.py:234: parking.data is not None");
$.assert((($.attr($.attr(parking, "data"), "is_parking_chargeable") === true)), "test_extended_vehicle_reads_part_02.py:235: parking.data.is_parking_chargeable is True");
$.assert((($.attr($.attr(parking, "data"), "is_congestion_chargeable") === null)), "test_extended_vehicle_reads_part_02.py:236: parking.data.is_congestion_chargeable is None");
shareable = $.call(parse_shareable_capabilities, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["shareableCapabilities"]: Object.assign({}, {["__typename"]: "ShareableCapabilities"}, {["group"]: [null, Object.assign({}, {["__typename"]: "CapabilityGroup"}, {["id"]: "B03"}, {["name"]: null}, {["shared"]: true}, {["capabilities"]: [null, Object.assign({}, {["__typename"]: "Capability"}, {["id"]: "REMOTE_CLIMATE"}, {["name"]: "Climate"}, {["shareable"]: false})]})]})})})], null);
$.assert(((shareable !== null)), "test_extended_vehicle_reads_part_02.py:266: shareable is not None");
$.assert($.call($.isinstance, [$.attr(shareable, "groups"), $.tuple], null), "test_extended_vehicle_reads_part_02.py:267: isinstance(shareable.groups, tuple)");
$.assert((($.get($.attr(shareable, "groups"), 0) === null)), "test_extended_vehicle_reads_part_02.py:268: shareable.groups[0] is None");
group = $.get($.attr(shareable, "groups"), 1);
$.assert(((group !== null)), "test_extended_vehicle_reads_part_02.py:270: group is not None");
$.assertEqual($.attr(group, "id"), "B03", "test_extended_vehicle_reads_part_02.py:271: group.id == 'B03'");
$.assert($.call($.isinstance, [$.attr(group, "capabilities"), $.tuple], null), "test_extended_vehicle_reads_part_02.py:272: isinstance(group.capabilities, tuple)");
$.assert((($.get($.attr(group, "capabilities"), 0) === null)), "test_extended_vehicle_reads_part_02.py:273: group.capabilities[0] is None");
capability = $.get($.attr(group, "capabilities"), 1);
$.assert(((capability !== null)), "test_extended_vehicle_reads_part_02.py:275: capability is not None");
$.assertEqual($.attr(capability, "id"), "REMOTE_CLIMATE", "test_extended_vehicle_reads_part_02.py:276: capability.id == 'REMOTE_CLIMATE'");
$.assert((($.attr(capability, "shareable") === false)), "test_extended_vehicle_reads_part_02.py:277: capability.shareable is False");
}

$.register("test_extended_vehicle_reads_part_02.py::test_driving_history_parses_non_null_tuples_dates_and_unknown_enums", test_driving_history_parses_non_null_tuples_dates_and_unknown_enums, []);

$.register("test_extended_vehicle_reads_part_02.py::test_ev_charge_stations_preserve_nullable_lists_and_unknown_connector_enum", test_ev_charge_stations_preserve_nullable_lists_and_unknown_connector_enum, []);

$.register("test_extended_vehicle_reads_part_02.py::test_status_wrappers_camera_counter_and_shareable_capabilities_parse_exactly", test_status_wrappers_camera_counter_and_shareable_capabilities_parse_exactly, []);
