// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Mapping = $.Mapping;

const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { DistanceUnit, NavigationCoordinate, NavigationDataSource, NavigationDistance, NavigationNotificationInterval, NavigationRouteWaypoint, NavigationTemperature, NotificationIntervalUnit, PlannedRoute, PointOfInterestDestination, PointOfInterestDestinationFolder, RecalculatedWaypointType, RouteHistoryEntry, RouteStatus, TemperatureUnit, VehicleJourneys, VehiclePlannedRoutes, VehiclePointOfInterestDestinations, VehicleRoutesHistory } from "../src/index";

/** Translated upstream test_get_vehicle_planned_routes_parses_typed_fields_and_kmr_header. */
export async function test_get_vehicle_planned_routes_parses_typed_fields_and_kmr_header(...__args: any[]): any {
let client, headers, payload, routes, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["plannedRoutes"]: [null, Object.assign({}, {["id"]: "route-1"}, {["name"]: "Morning"}, {["estimatedTimeOfDeparture"]: "2026-08-02T15:00:00Z"}, {["estimatedTimeOfArrival"]: "2026-08-02T16:15:00Z"}, {["distance"]: Object.assign({}, {["value"]: 42}, {["unit"]: "MILE"})}, {["temperature"]: Object.assign({}, {["value"]: 70.0}, {["unit"]: "FAHRENHEIT"})}, {["routes"]: [null, Object.assign({}, {["name"]: "Charger"}, {["phoneNumber"]: null}, {["address"]: null}, {["location"]: Object.assign({}, {["latitude"]: 32.8}, {["longitude"]: -(117.2)})}, {["recalculatedWaypointType"]: "FUTURE_VALUE"}, {["chargingOutput"]: 150})]}, {["avoidHighway"]: false}, {["avoidTolls"]: true}, {["avoidFerries"]: null}, {["shouldRecalculateRoute"]: true}, {["shouldEnableNotification"]: true}, {["notificationInterval"]: Object.assign({}, {["value"]: 15}, {["unit"]: "MIN"})}, {["arrivalFlag"]: false}, {["departureFlag"]: true})]})})})], null)], null);
client = $.call(make_client, [session], null);
routes = (await $.call($.attr(client, "async_get_vehicle_planned_routes"), ["JN1TESTVIN"], Object.assign({}, {"distance_unit": $.attr(DistanceUnit, "MILE")}, {"temperature_unit": $.attr(TemperatureUnit, "FAHRENHEIT")}, {"data_source": $.attr(NavigationDataSource, "KMR")})));
$.assertEqual(routes, $.call(VehiclePlannedRoutes, [[null, $.call(PlannedRoute, [], Object.assign({}, {"id": "route-1"}, {"name": "Morning"}, {"estimated_time_of_departure": $.call($.attr(datetime, "fromisoformat"), ["2026-08-02T15:00:00+00:00"], null)}, {"estimated_time_of_arrival": $.call($.attr(datetime, "fromisoformat"), ["2026-08-02T16:15:00+00:00"], null)}, {"distance": $.call(NavigationDistance, [42, $.attr(DistanceUnit, "MILE")], null)}, {"temperature": $.call(NavigationTemperature, [70.0, $.attr(TemperatureUnit, "FAHRENHEIT")], null)}, {"routes": [null, $.call(NavigationRouteWaypoint, [], Object.assign({}, {"name": "Charger"}, {"phone_number": null}, {"address": null}, {"location": $.call(NavigationCoordinate, [32.8, -(117.2)], null)}, {"recalculated_waypoint_type": $.attr(RecalculatedWaypointType, "UNKNOWN_VALUE")}, {"charging_output": 150}))]}, {"avoid_highway": false}, {"avoid_tolls": true}, {"avoid_ferries": null}, {"should_recalculate_route": true}, {"should_enable_notification": true}, {"notification_interval": $.call(NavigationNotificationInterval, [15, $.attr(NotificationIntervalUnit, "MINUTE")], null)}, {"arrival_flag": false}, {"departure_flag": true}))]], null), "test_client_part_12.py:92: routes == VehiclePlannedRoutes((None, PlannedRoute(id='route-1', name='Morning', estimated_time_of_departure=datetime.fromisoformat('2026-08-02T15:00:00+00:00'), estimated_time_of_arrival=datetime.fromisoformat('2026-08-02T16:15:00+00:00'), distance=NavigationDistance(42, DistanceUnit.MILE), temperature=NavigationTemperature(70.0, TemperatureUnit.FAHRENHEIT), routes=(None, NavigationRouteWaypoint(name='Charger', phone_number=None, address=None, location=NavigationCoordinate(32.8, -117.2), recalculated_waypoint_type=RecalculatedWaypointType.UNKNOWN_VALUE, charging_output=150)), avoid_highway=False, avoid_tolls=True, avoid_ferries=None, should_recalculate_route=True, should_enable_notification=True, notification_interval=NavigationNotificationInterval(15, NotificationIntervalUnit.MINUTE), arrival_flag=False, departure_flag=True)))");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["distanceUnit"]: "MILE"}, {["temperatureUnit"]: "FAHRENHEIT"}), "test_client_part_12.py:128: payload['variables'] == {'vin': 'JN1TESTVIN', 'distanceUnit': 'MILE', 'temperatureUnit': 'FAHRENHEIT'}");
headers = $.get($.get($.attr(session, "calls"), 0), "headers");
$.assertEqual($.get(headers, "x-tsp-datasource"), "KMR", "test_client_part_12.py:134: headers['x-tsp-datasource'] == 'KMR'");
}

/** Translated upstream test_get_vehicle_routes_history_preserves_status_and_nulls. */
export async function test_get_vehicle_routes_history_preserves_status_and_nulls(...__args: any[]): any {
let client, history, payload, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["routeHistory"]: [Object.assign({}, {["id"]: null}, {["name"]: "Completed trip"}, {["estimatedTimeOfDeparture"]: null}, {["estimatedTimeOfArrival"]: null}, {["status"]: "DEPARTURED"}, {["distance"]: null}, {["temperature"]: null}, {["routes"]: null}, {["arrivalFlag"]: null}, {["departureFlag"]: false})]})})})], null)], null);
client = $.call(make_client, [session], null);
history = (await $.call($.attr(client, "async_get_vehicle_routes_history"), ["JN1TESTVIN"], Object.assign({}, {"status": $.attr(RouteStatus, "COMPLETED")})));
$.assertEqual(history, $.call(VehicleRoutesHistory, [[$.call(RouteHistoryEntry, [], Object.assign({}, {"id": null}, {"name": "Completed trip"}, {"estimated_time_of_departure": null}, {"estimated_time_of_arrival": null}, {"status": $.attr(RouteStatus, "DEPARTURED")}, {"distance": null}, {"temperature": null}, {"routes": null}, {"arrival_flag": null}, {"departure_flag": false}))]], null), "test_client_part_12.py:171: history == VehicleRoutesHistory((RouteHistoryEntry(id=None, name='Completed trip', estimated_time_of_departure=None, estimated_time_of_arrival=None, status=RouteStatus.DEPARTURED, distance=None, temperature=None, routes=None, arrival_flag=None, departure_flag=False),))");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "RoutesHistory", "test_client_part_12.py:188: payload['operationName'] == 'RoutesHistory'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["status"]: "COMPLETED"}), "test_client_part_12.py:189: payload['variables'] == {'vin': 'JN1TESTVIN', 'status': 'COMPLETED'}");
}

/** Translated upstream test_get_vehicle_point_of_interest_destinations_defaults_to_both. */
export async function test_get_vehicle_point_of_interest_destinations_defaults_to_both(...__args: any[]): any {
let client, destinations, payload, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["pointOfInterestDestination"]: Object.assign({}, {["folders"]: [null, Object.assign({}, {["folderName"]: "CUSTOM_FOLDER_LABEL"}, {["destinations"]: [null, Object.assign({}, {["id"]: "destination-1"}, {["phoneNumber"]: "555-0100"}, {["name"]: "Work"}, {["address"]: null}, {["coordinate"]: Object.assign({}, {["latitude"]: null}, {["longitude"]: -(117.1)})})]})]})})})})], null)], null);
client = $.call(make_client, [session], null);
destinations = (await $.call($.attr(client, "async_get_vehicle_point_of_interest_destinations"), ["JN1TESTVIN"], null));
$.assertEqual(destinations, $.call(VehiclePointOfInterestDestinations, [[null, $.call(PointOfInterestDestinationFolder, [], Object.assign({}, {"folder_name": "CUSTOM_FOLDER_LABEL"}, {"destinations": [null, $.call(PointOfInterestDestination, [], Object.assign({}, {"id": "destination-1"}, {"phone_number": "555-0100"}, {"name": "Work"}, {"address": null}, {"coordinate": $.call(NavigationCoordinate, [null, -(117.1)], null)}))]}))]], null), "test_client_part_12.py:230: destinations == VehiclePointOfInterestDestinations((None, PointOfInterestDestinationFolder(folder_name='CUSTOM_FOLDER_LABEL', destinations=(None, PointOfInterestDestination(id='destination-1', phone_number='555-0100', name='Work', address=None, coordinate=NavigationCoordinate(None, -117.1))))))");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["folderName"]: "BOTH"}), "test_client_part_12.py:249: payload['variables'] == {'vin': 'JN1TESTVIN', 'folderName': 'BOTH'}");
}

/** Translated upstream test_navigation_reads_distinguish_absent_branches_from_null_lists. */
export async function test_navigation_reads_distinguish_absent_branches_from_null_lists(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: {}})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["journeys"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: {}})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["plannedRoutes"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: {}})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["routeHistory"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: {}})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["pointOfInterestDestination"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["pointOfInterestDestination"]: Object.assign({}, {["folders"]: null})})})})], null)], null);
client = $.call(make_client, [session], null);
$.assert((((await $.call($.attr(client, "async_get_vehicle_journeys"), ["JN1TESTVIN"], null)) === null)), "test_client_part_12.py:273: await client.async_get_vehicle_journeys('JN1TESTVIN') is None");
$.assertEqual((await $.call($.attr(client, "async_get_vehicle_journeys"), ["JN1TESTVIN"], null)), $.call(VehicleJourneys, [null], null), "test_client_part_12.py:274: await client.async_get_vehicle_journeys('JN1TESTVIN') == VehicleJourneys(None)");
$.assert((((await $.call($.attr(client, "async_get_vehicle_planned_routes"), ["JN1TESTVIN"], null)) === null)), "test_client_part_12.py:275: await client.async_get_vehicle_planned_routes('JN1TESTVIN') is None");
$.assertEqual((await $.call($.attr(client, "async_get_vehicle_planned_routes"), ["JN1TESTVIN"], null)), $.call(VehiclePlannedRoutes, [null], null), "test_client_part_12.py:276: await client.async_get_vehicle_planned_routes('JN1TESTVIN') == VehiclePlannedRoutes(None)");
$.assert((((await $.call($.attr(client, "async_get_vehicle_routes_history"), ["JN1TESTVIN"], null)) === null)), "test_client_part_12.py:277: await client.async_get_vehicle_routes_history('JN1TESTVIN') is None");
$.assertEqual((await $.call($.attr(client, "async_get_vehicle_routes_history"), ["JN1TESTVIN"], null)), $.call(VehicleRoutesHistory, [null], null), "test_client_part_12.py:278: await client.async_get_vehicle_routes_history('JN1TESTVIN') == VehicleRoutesHistory(None)");
$.assert((((await $.call($.attr(client, "async_get_vehicle_point_of_interest_destinations"), ["JN1TESTVIN"], null)) === null)), "test_client_part_12.py:279: await client.async_get_vehicle_point_of_interest_destinations('JN1TESTVIN') is None");
$.assert((((await $.call($.attr(client, "async_get_vehicle_point_of_interest_destinations"), ["JN1TESTVIN"], null)) === null)), "test_client_part_12.py:280: await client.async_get_vehicle_point_of_interest_destinations('JN1TESTVIN') is None");
$.assertEqual((await $.call($.attr(client, "async_get_vehicle_point_of_interest_destinations"), ["JN1TESTVIN"], null)), $.call(VehiclePointOfInterestDestinations, [null], null), "test_client_part_12.py:281: await client.async_get_vehicle_point_of_interest_destinations('JN1TESTVIN') == VehiclePointOfInterestDestinations(None)");
}

$.register("test_client_part_12.py::test_get_vehicle_planned_routes_parses_typed_fields_and_kmr_header", test_get_vehicle_planned_routes_parses_typed_fields_and_kmr_header, []);

$.register("test_client_part_12.py::test_get_vehicle_routes_history_preserves_status_and_nulls", test_get_vehicle_routes_history_preserves_status_and_nulls, []);

$.register("test_client_part_12.py::test_get_vehicle_point_of_interest_destinations_defaults_to_both", test_get_vehicle_point_of_interest_destinations_defaults_to_both, []);

$.register("test_client_part_12.py::test_navigation_reads_distinguish_absent_branches_from_null_lists", test_navigation_reads_distinguish_absent_branches_from_null_lists, []);
