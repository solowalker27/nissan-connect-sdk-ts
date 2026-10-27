// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { CoordinateInput, DistanceUnit, EVWaypoint, EVWaypointLimitReachedError, EVWaypointRoute, EVWaypointRouteType, EVWaypointStatus, EVWaypointUnableToCompleteRouteError, NavigationAddress, NavigationCoordinate, NavigationDataSource, NavigationDistance, PlugConnectorType, ResponseError, RouteWaypointInput, SavedTJunctionLocation, TJunctionLocations, UnableToCompleteSubStepErrorDetails, UnsavedTJunctionLocation } from "../src/index";

/** Translated upstream test_get_t_junction_locations_parses_required_location_fields. */
export async function test_get_t_junction_locations_parses_required_location_fields(...__args: any[]): any {
let client, locations, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["unsavedTJunctionLocations"]: [Object.assign({}, {["id"]: "unsaved-1"}, {["latitude"]: 32.71}, {["longitude"]: -(117.16)}, {["direction"]: 180.0}, {["launchDate"]: "2026-08-01T12:00:00Z"}, {["address"]: null})]}, {["savedTJunctionLocations"]: [Object.assign({}, {["id"]: "saved-1"}, {["latitude"]: 32.72}, {["longitude"]: -(117.17)}, {["direction"]: 90.0}, {["locationName"]: "Downtown"}, {["address"]: Object.assign({}, {["address1"]: null}, {["address2"]: null}, {["city"]: "San Diego"}, {["state"]: "CA"}, {["country"]: "US"}, {["postalCode"]: null})})]})})})], null)], null);
client = $.call(make_client, [session], null);
locations = (await $.call($.attr(client, "async_get_t_junction_locations"), ["JN1TESTVIN"], null));
$.assert(($.eq(locations, $.call(TJunctionLocations, [], Object.assign({}, {"unsaved_t_junction_locations": [$.call(UnsavedTJunctionLocation, [], Object.assign({}, {"id": "unsaved-1"}, {"latitude": 32.71}, {"longitude": -(117.16)}, {"direction": 180.0}, {"launch_date": $.call($.attr(datetime, "fromisoformat"), ["2026-08-01T12:00:00+00:00"], null)}, {"address": null}))]}, {"saved_t_junction_locations": [$.call(SavedTJunctionLocation, [], Object.assign({}, {"id": "saved-1"}, {"latitude": 32.72}, {"longitude": -(117.17)}, {"direction": 90.0}, {"location_name": "Downtown"}, {"address": $.call(NavigationAddress, [], Object.assign({}, {"address1": null}, {"address2": null}, {"city": "San Diego"}, {"state": "CA"}, {"postal_code": null}, {"country": "US"}))}))]})))), "test_client_part_13.py:81: locations == TJunctionLocations(unsaved_t_junction_locations=(UnsavedTJunctionLocation(id='unsaved-1', latitude=32.71, longitude=-117.16, direction=180.0, launch_date=datetime.fromisoformat('2026-08-01T12:00:00+00:00'), address=None),), saved_t_junction_locations=(SavedTJunctionLocation(id='saved-1', latitude=32.72, longitude=-117.17, direction=90.0, location_name='Downtown', address=NavigationAddress(address1=None, address2=None, city='San Diego', state='CA', postal_code=None, country='US')),))");
}

/** Translated upstream test_get_vehicle_ev_waypoints_serializes_kmr_request_and_success. */
export async function test_get_vehicle_ev_waypoints_serializes_kmr_request_and_success(...__args: any[]): any {
let client, headers, payload, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["evWaypoints"]: Object.assign({}, {["__typename"]: "EVWaypoint"}, {["departureTime"]: "2026-08-03T15:00:00Z"}, {["arrivalTime"]: null}, {["totalChargingTimeInSeconds"]: 1500}, {["totalTravelTimeInSeconds"]: 7200}, {["totalDistance"]: Object.assign({}, {["unit"]: "MILE"}, {["value"]: 84})}, {["routes"]: [null, Object.assign({}, {["name"]: "Fast charger"}, {["arrivalTime"]: "2026-08-03T16:00:00Z"}, {["chargingTimeInSeconds"]: 1500}, {["level"]: 25}, {["type"]: "CHARGING_STATION"}, {["address"]: null}, {["location"]: Object.assign({}, {["latitude"]: 33.0}, {["longitude"]: -(117.5)})}, {["status"]: "AVAILABLE"}, {["chargingOutput"]: 150})]})})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_get_vehicle_ev_waypoints"), ["JN1TESTVIN", [$.call(RouteWaypointInput, ["Destination", $.call(CoordinateInput, [33.1, -(117.6)], null)], Object.assign({}, {"phone_number": null})), null], [$.attr(PlugConnectorType, "CCS"), null]], Object.assign({}, {"depart_at": $.call($.attr(datetime, "fromisoformat"), ["2026-08-03T08:00:00-07:00"], null)}, {"arrived_by": null}, {"state_of_charge_at_destination": 20}, {"distance_unit": $.attr(DistanceUnit, "MILE")}, {"estimated_battery_level_at_departure": 85}, {"minimum_power": 50.0}, {"use_hvac": false}, {"data_source": $.attr(NavigationDataSource, "KMR")})));
$.assert(($.eq(result, $.call(EVWaypoint, [], Object.assign({}, {"departure_time": $.call($.attr(datetime, "fromisoformat"), ["2026-08-03T15:00:00+00:00"], null)}, {"arrival_time": null}, {"total_charging_time_in_seconds": 1500}, {"total_travel_time_in_seconds": 7200}, {"total_distance": $.call(NavigationDistance, [84, $.attr(DistanceUnit, "MILE")], null)}, {"routes": [null, $.call(EVWaypointRoute, [], Object.assign({}, {"name": "Fast charger"}, {"arrival_time": $.call($.attr(datetime, "fromisoformat"), ["2026-08-03T16:00:00+00:00"], null)}, {"charging_time_in_seconds": 1500}, {"level": 25}, {"type": $.attr(EVWaypointRouteType, "CHARGING_STATION")}, {"address": null}, {"location": $.call(NavigationCoordinate, [33.0, -(117.5)], null)}, {"status": $.attr(EVWaypointStatus, "AVAILABLE")}, {"charging_output": 150}))]})))), "test_client_part_13.py:173: result == EVWaypoint(departure_time=datetime.fromisoformat('2026-08-03T15:00:00+00:00'), arrival_time=None, total_charging_time_in_seconds=1500, total_travel_time_in_seconds=7200, total_distance=NavigationDistance(84, DistanceUnit.MILE), routes=(None, EVWaypointRoute(name='Fast charger', arrival_time=datetime.fromisoformat('2026-08-03T16:00:00+00:00'), charging_time_in_seconds=1500, level=25, type=EVWaypointRouteType.CHARGING_STATION, address=None, location=NavigationCoordinate(33.0, -117.5), status=EVWaypointStatus.AVAILABLE, charging_output=150)))");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(payload, "operationName"), "VehicleEVWaypoints")), "test_client_part_13.py:195: payload['operationName'] == 'VehicleEVWaypoints'");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["departAt"]: "2026-08-03T08:00:00-07:00"}, {["arrivedBy"]: null}, {["socAtDestination"]: 20}, {["routes"]: [Object.assign({}, {["name"]: "Destination"}, {["coordinate"]: Object.assign({}, {["latitude"]: 33.1}, {["longitude"]: -(117.6)})}, {["address"]: {}}, {["phoneNumber"]: null}), null]}, {["distanceUnit"]: "MILE"}, {["plugConnectorTypes"]: ["CCS", null]}, {["estimatedBatteryLevelAtDeparture"]: "85"}, {["minPower"]: 50.0}, {["socAtStop"]: 20}, {["useHvac"]: false}))), "test_client_part_13.py:196: payload['variables'] == {'vin': 'JN1TESTVIN', 'departAt': '2026-08-03T08:00:00-07:00', 'arrivedBy': None, 'socAtDestination': 20, 'routes': [{'name': 'Destination', 'coordinate': {'latitude': 33.1, 'longitude': -117.6}, 'address': {}, 'phoneNumber': None}, None], 'distanceUnit': 'MILE', 'plugConnectorTypes': ['CCS', None], 'estimatedBatteryLevelAtDeparture': '85', 'minPower': 50.0, 'socAtStop': 20, 'useHvac': False}");
headers = $.get($.get($.attr(session, "calls"), 0), "headers");
$.assert(($.eq($.get(headers, "x-tsp-datasource"), "KMR")), "test_client_part_13.py:218: headers['x-tsp-datasource'] == 'KMR'");
}

/** Translated upstream test_get_vehicle_ev_waypoints_returns_typed_errors. */
export async function test_get_vehicle_ev_waypoints_returns_typed_errors(...__args: any[]): any {
let client, limit, session, unable;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["evWaypoints"]: Object.assign({}, {["__typename"]: "LimitReachedError"}, {["message"]: "Route limit reached"})})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["evWaypoints"]: Object.assign({}, {["__typename"]: "UnableToCompleteRouteError"}, {["reason"]: "NO_ROUTE"}, {["message"]: "Unable to complete"}, {["details"]: Object.assign({}, {["__typename"]: "UnableToCompleteSubStepErrorDetails"}, {["start"]: "A"}, {["end"]: "B"}, {["distance"]: null}, {["speed"]: null}, {["slope"]: null}, {["startingBattery"]: "80"}, {["batteryCapacity"]: null}, {["batteryConsumption"]: null}, {["socAfterChargingNearStart"]: null}, {["minimumBattery"]: "10"}, {["chargingStationMaxPower"]: null})})})})})], null)], null);
client = $.call(make_client, [session], null);
limit = (await $.call($.attr(client, "async_get_vehicle_ev_waypoints"), ["JN1TESTVIN", [], []], null));
unable = (await $.call($.attr(client, "async_get_vehicle_ev_waypoints"), ["JN1TESTVIN", [], []], null));
$.assert(($.eq(limit, $.call(EVWaypointLimitReachedError, ["Route limit reached"], null))), "test_client_part_13.py:271: limit == EVWaypointLimitReachedError('Route limit reached')");
$.assert(($.eq(unable, $.call(EVWaypointUnableToCompleteRouteError, [], Object.assign({}, {"reason": "NO_ROUTE"}, {"message": "Unable to complete"}, {"details": $.call(UnableToCompleteSubStepErrorDetails, [], Object.assign({}, {"start": "A"}, {"end": "B"}, {"distance": null}, {"speed": null}, {"slope": null}, {"starting_battery": "80"}, {"battery_capacity": null}, {"battery_consumption": null}, {"soc_after_charging_near_start": null}, {"minimum_battery": "10"}, {"charging_station_max_power": null}))})))), "test_client_part_13.py:272: unable == EVWaypointUnableToCompleteRouteError(reason='NO_ROUTE', message='Unable to complete', details=UnableToCompleteSubStepErrorDetails(start='A', end='B', distance=None, speed=None, slope=None, starting_battery='80', battery_capacity=None, battery_consumption=None, soc_after_charging_near_start=None, minimum_battery='10', charging_station_max_power=None))");
}

/** Translated upstream test_get_vehicle_ev_waypoints_rejects_unsupported_result_type. */
export async function test_get_vehicle_ev_waypoints_rejects_unsupported_result_type(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["evWaypoints"]: Object.assign({}, {["__typename"]: "FutureResult"})})})})], null)], null);
client = $.call(make_client, [session], null);
await $.raises(ResponseError, "Unsupported vehicle\\.evWaypoints type: FutureResult", async () => {
(await $.call($.attr(client, "async_get_vehicle_ev_waypoints"), ["JN1TESTVIN", [], []], null));
});
}

/** Translated upstream test_get_vehicle_ev_waypoints_rejects_unsupported_error_details_type. */
export async function test_get_vehicle_ev_waypoints_rejects_unsupported_error_details_type(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["evWaypoints"]: Object.assign({}, {["__typename"]: "UnableToCompleteRouteError"}, {["reason"]: "NO_ROUTE"}, {["message"]: "Unable to complete"}, {["details"]: Object.assign({}, {["__typename"]: "FutureDetails"})})})})})], null)], null);
client = $.call(make_client, [session], null);
await $.raises(ResponseError, "Unsupported vehicle\\.evWaypoints\\.details type: FutureDetails", async () => {
(await $.call($.attr(client, "async_get_vehicle_ev_waypoints"), ["JN1TESTVIN", [], []], null));
});
}

$.register("test_client_part_13.py::test_get_t_junction_locations_parses_required_location_fields", test_get_t_junction_locations_parses_required_location_fields, []);

$.register("test_client_part_13.py::test_get_vehicle_ev_waypoints_serializes_kmr_request_and_success", test_get_vehicle_ev_waypoints_serializes_kmr_request_and_success, []);

$.register("test_client_part_13.py::test_get_vehicle_ev_waypoints_returns_typed_errors", test_get_vehicle_ev_waypoints_returns_typed_errors, []);

$.register("test_client_part_13.py::test_get_vehicle_ev_waypoints_rejects_unsupported_result_type", test_get_vehicle_ev_waypoints_rejects_unsupported_result_type, []);

$.register("test_client_part_13.py::test_get_vehicle_ev_waypoints_rejects_unsupported_error_details_type", test_get_vehicle_ev_waypoints_rejects_unsupported_error_details_type, []);
