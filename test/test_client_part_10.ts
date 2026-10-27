// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, jwt_with_expiration, make_client } from "./test_client";

import { AddressInput, ChargingConnectorType, CoordinateInput, DestinationInput, DistanceUnit, NavigationDataSource, NotificationIntervalUnit, PlannedRouteInput, PlannedRouteUpdate, PointOfInterestFolder, RecalculatedWaypointType, ResponseError, RouteCalculationCondition, RouteChargingTimeInput, RouteDistanceInput, RouteNotificationIntervalInput, RouteTemperatureInput, RouteWaypointInput, ServiceRequest, ServiceRequestKind, Tokens } from "../src/index";

/** Translated upstream test_graphql_401_refreshes_once_and_retries. */
export async function test_graphql_401_refreshes_once_and_retries(...__args: any[]): any {
let client, retry_headers, session, vehicles;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [401, Object.assign({}, {["message"]: "expired"})], null), $.call(FakeResponse, [200, Object.assign({}, {["access_token"]: "replacement-access"}, {["refresh_token"]: "replacement-refresh"}, {["id_token"]: "replacement-id"})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicles"]: []})})], null)], null);
client = $.call(make_client, [session], null);
vehicles = (await $.call($.attr(client, "async_get_vehicles"), [], null));
$.assert(($.eq(vehicles, [])), "test_client_part_10.py:58: vehicles == ()");
$.assert(($.eq($.call($.len, [$.attr(session, "calls")], null), 3)), "test_client_part_10.py:59: len(session.calls) == 3");
retry_headers = $.get($.get($.attr(session, "calls"), 2), "headers");
$.assert(($.eq($.get(retry_headers, "Authorization"), "Bearer replacement-access")), "test_client_part_10.py:61: retry_headers['Authorization'] == 'Bearer replacement-access'");
}

/** Translated upstream test_expired_jwt_refreshes_before_graphql_request. */
export async function test_expired_jwt_refreshes_before_graphql_request(...__args: any[]): any {
let client, graphql_headers, session, vehicles;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["access_token"]: "replacement-access"}, {["refresh_token"]: "replacement-refresh"}, {["id_token"]: "replacement-id"})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicles"]: []})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"tokens": $.call(Tokens, [$.call(jwt_with_expiration, [0], null), "refresh-token", "id-token"], null)}));
vehicles = (await $.call($.attr(client, "async_get_vehicles"), [], null));
$.assert(($.eq(vehicles, [])), "test_client_part_10.py:84: vehicles == ()");
$.assert(($.eq($.call($.len, [$.attr(session, "calls")], null), 2)), "test_client_part_10.py:85: len(session.calls) == 2");
$.assert($.call($.attr($.call($.str, [$.get($.get($.attr(session, "calls"), 0), "url")], null), "endswith"), ["/token"], null), "test_client_part_10.py:86: str(session.calls[0]['url']).endswith('/token')");
$.assert(($.eq($.get($.get($.attr(session, "calls"), 0), "data"), Object.assign({}, {["refresh_token"]: "refresh-token"}, {["grant_type"]: "refresh_token"}))), "test_client_part_10.py:87: session.calls[0]['data'] == {'refresh_token': 'refresh-token', 'grant_type': 'refresh_token'}");
graphql_headers = $.get($.get($.attr(session, "calls"), 1), "headers");
$.assert(($.eq($.get(graphql_headers, "Authorization"), "Bearer replacement-access")), "test_client_part_10.py:92: graphql_headers['Authorization'] == 'Bearer replacement-access'");
}

/** Translated upstream test_expired_id_token_refreshes_before_graphql_request. */
export async function test_expired_id_token_refreshes_before_graphql_request(...__args: any[]): any {
let client, graphql_headers, session, vehicles;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["access_token"]: "replacement-access"}, {["refresh_token"]: "replacement-refresh"}, {["id_token"]: "replacement-id"})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicles"]: []})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"tokens": $.call(Tokens, ["opaque-access-token", "refresh-token", $.call(jwt_with_expiration, [0], null)], null)}));
vehicles = (await $.call($.attr(client, "async_get_vehicles"), [], null));
$.assert(($.eq(vehicles, [])), "test_client_part_10.py:119: vehicles == ()");
$.assert(($.eq($.call($.len, [$.attr(session, "calls")], null), 2)), "test_client_part_10.py:120: len(session.calls) == 2");
$.assert($.call($.attr($.call($.str, [$.get($.get($.attr(session, "calls"), 0), "url")], null), "endswith"), ["/token"], null), "test_client_part_10.py:121: str(session.calls[0]['url']).endswith('/token')");
graphql_headers = $.get($.get($.attr(session, "calls"), 1), "headers");
$.assert(($.eq($.get(graphql_headers, "Authorization"), "Bearer replacement-access")), "test_client_part_10.py:123: graphql_headers['Authorization'] == 'Bearer replacement-access'");
$.assert(($.eq($.get(graphql_headers, "id-token"), "replacement-id")), "test_client_part_10.py:124: graphql_headers['id-token'] == 'replacement-id'");
}

/** Translated upstream test_send_journey_serializes_optional_inputs_and_kmr_header. */
export async function test_send_journey_serializes_optional_inputs_and_kmr_header(...__args: any[]): any {
let arrival, client, headers, payload, session, success;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["sendJourney"]: Object.assign({}, {["success"]: true})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
arrival = $.call($.attr(datetime, "fromisoformat"), ["2026-08-01T09:30:00-07:00"], null);
success = (await $.call($.attr(client, "async_send_journey"), ["JN1TESTVIN", [$.call(DestinationInput, ["Home", $.call(CoordinateInput, [32.7157, -(117.1611)], null), $.call(AddressInput, [], Object.assign({}, {"address1": "1 Main St"}, {"city": "San Diego"}, {"country": "US"}))], Object.assign({}, {"phone_number": null}, {"recalculated_waypoint_type": $.attr(RecalculatedWaypointType, "WAYPOINT")}))]], Object.assign({}, {"avoid_tolls": null}, {"estimated_time_of_arrival": arrival}, {"arrival_flag": false}, {"data_source": $.attr(NavigationDataSource, "KMR")})));
$.assert(((success === true)), "test_client_part_10.py:152: success is True");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(payload, "operationName"), "SendJourney")), "test_client_part_10.py:154: payload['operationName'] == 'SendJourney'");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["waypoints"]: [Object.assign({}, {["name"]: "Home"}, {["phoneNumber"]: null}, {["coordinate"]: Object.assign({}, {["latitude"]: 32.7157}, {["longitude"]: -(117.1611)})}, {["address"]: Object.assign({}, {["address1"]: "1 Main St"}, {["city"]: "San Diego"}, {["country"]: "US"})}, {["recalculatedWaypointType"]: "WAYPOINT"})]}, {["avoidTolls"]: null}, {["estimatedTimeOfArrival"]: "2026-08-01T09:30:00-07:00"}, {["arrivalFlag"]: false}))), "test_client_part_10.py:155: payload['variables'] == {'vin': 'JN1TESTVIN', 'waypoints': [{'name': 'Home', 'phoneNumber': None, 'coordinate': {'latitude': 32.7157, 'longitude': -117.1611}, 'address': {'address1': '1 Main St', 'city': 'San Diego', 'country': 'US'}, 'recalculatedWaypointType': 'WAYPOINT'}], 'avoidTolls': None, 'estimatedTimeOfArrival': '2026-08-01T09:30:00-07:00', 'arrivalFlag': False}");
headers = $.get($.get($.attr(session, "calls"), 0), "headers");
$.assert(($.eq($.get(headers, "x-tsp-datasource"), "KMR")), "test_client_part_10.py:175: headers['x-tsp-datasource'] == 'KMR'");
}

/** Translated upstream test_save_and_update_route_preserve_omitted_and_null_fields. */
export async function test_save_and_update_route_preserve_omitted_and_null_fields(...__args: any[]): any {
let arrival, client, created, departure, route, save_headers, save_payload, session, update_headers, update_payload, updated;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["saveRoute"]: Object.assign({}, {["serviceRequestId"]: "save-1"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["updateRoute"]: Object.assign({}, {["serviceRequestId"]: "update-1"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
departure = $.call($.attr(datetime, "fromisoformat"), ["2026-08-02T08:00:00-07:00"], null);
arrival = $.call($.attr(datetime, "fromisoformat"), ["2026-08-02T09:15:00-07:00"], null);
route = $.call(PlannedRouteInput, [], Object.assign({}, {"name": "Morning route"}, {"routes": [$.call(RouteWaypointInput, [], Object.assign({}, {"name": "Quick charger"}, {"coordinate": $.call(CoordinateInput, [32.8, -(117.2)], null)}, {"phone_number": null}, {"charging_output": 150}, {"charging_time": $.call(RouteChargingTimeInput, [25], null)}, {"charger_type": $.attr(ChargingConnectorType, "QUICK")}, {"state_of_charge_difference": 35})), null]}, {"estimated_time_of_departure": departure}, {"estimated_time_of_arrival": arrival}, {"distance": $.call(RouteDistanceInput, [42, $.attr(DistanceUnit, "MILE")], null)}, {"temperature": $.call(RouteTemperatureInput, [70.0, null], null)}, {"notification_interval": $.call(RouteNotificationIntervalInput, [15, $.attr(NotificationIntervalUnit, "MINUTE")], null)}, {"avoid_highway": false}));
created = (await $.call($.attr(client, "async_save_route"), ["JN1TESTVIN", route], Object.assign({}, {"arrival_flag": null}, {"data_source": $.attr(NavigationDataSource, "KMR")})));
updated = (await $.call($.attr(client, "async_update_route"), ["JN1TESTVIN", $.call(PlannedRouteUpdate, ["route-1"], Object.assign({}, {"name": null}, {"routes": null}, {"avoid_tolls": false}))], Object.assign({}, {"departure_flag": null})));
$.assert(($.eq(created, $.call(ServiceRequest, ["save-1", $.attr(ServiceRequestKind, "ROUTE")], null))), "test_client_part_10.py:229: created == ServiceRequest('save-1', ServiceRequestKind.ROUTE)");
$.assert(($.eq(updated, $.call(ServiceRequest, ["update-1", $.attr(ServiceRequestKind, "ROUTE")], null))), "test_client_part_10.py:230: updated == ServiceRequest('update-1', ServiceRequestKind.ROUTE)");
save_payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(save_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["plannedRoute"]: Object.assign({}, {["name"]: "Morning route"}, {["routes"]: [Object.assign({}, {["name"]: "Quick charger"}, {["coordinate"]: Object.assign({}, {["latitude"]: 32.8}, {["longitude"]: -(117.2)})}, {["address"]: {}}, {["phoneNumber"]: null}, {["chargingOutput"]: 150}, {["chargingTime"]: Object.assign({}, {["unit"]: "MIN"}, {["value"]: 25})}, {["chargerType"]: "QUICK"}, {["socDiff"]: 35}), null]}, {["estimatedTimeOfDeparture"]: "2026-08-02T08:00:00-07:00"}, {["estimatedTimeOfArrival"]: "2026-08-02T09:15:00-07:00"}, {["distance"]: Object.assign({}, {["value"]: 42}, {["unit"]: "MILE"})}, {["temperature"]: Object.assign({}, {["value"]: 70.0}, {["unit"]: null})}, {["notificationInterval"]: Object.assign({}, {["value"]: 15}, {["unit"]: "MIN"})}, {["avoidHighway"]: false})}, {["arrivalFlag"]: null}))), "test_client_part_10.py:232: save_payload['variables'] == {'vin': 'JN1TESTVIN', 'plannedRoute': {'name': 'Morning route', 'routes': [{'name': 'Quick charger', 'coordinate': {'latitude': 32.8, 'longitude': -117.2}, 'address': {}, 'phoneNumber': None, 'chargingOutput': 150, 'chargingTime': {'unit': 'MIN', 'value': 25}, 'chargerType': 'QUICK', 'socDiff': 35}, None], 'estimatedTimeOfDeparture': '2026-08-02T08:00:00-07:00', 'estimatedTimeOfArrival': '2026-08-02T09:15:00-07:00', 'distance': {'value': 42, 'unit': 'MILE'}, 'temperature': {'value': 70.0, 'unit': None}, 'notificationInterval': {'value': 15, 'unit': 'MIN'}, 'avoidHighway': False}, 'arrivalFlag': None}");
save_headers = $.get($.get($.attr(session, "calls"), 0), "headers");
update_headers = $.get($.get($.attr(session, "calls"), 1), "headers");
$.assert(($.eq($.get(save_headers, "x-tsp-datasource"), "KMR")), "test_client_part_10.py:260: save_headers['x-tsp-datasource'] == 'KMR'");
$.assert((!$.contains(update_headers, "x-tsp-datasource")), "test_client_part_10.py:261: 'x-tsp-datasource' not in update_headers");
update_payload = $.get($.get($.attr(session, "calls"), 1), "json");
$.assert(($.eq($.get(update_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["plannedRoute"]: Object.assign({}, {["id"]: "route-1"}, {["name"]: null}, {["routes"]: null}, {["avoidTolls"]: false})}, {["departureFlag"]: null}))), "test_client_part_10.py:263: update_payload['variables'] == {'vin': 'JN1TESTVIN', 'plannedRoute': {'id': 'route-1', 'name': None, 'routes': None, 'avoidTolls': False}, 'departureFlag': None}");
}

/** Translated upstream test_navigation_nullable_success_and_limit_error. */
export async function test_navigation_nullable_success_and_limit_error(...__args: any[]): any {
let client, poi_payload, session, success;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["sendPlannedRoute"]: Object.assign({}, {["success"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["sendPointOfInterest"]: Object.assign({}, {["__typename"]: "LimitReachedError"}, {["message"]: "Destination limit reached"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
success = (await $.call($.attr(client, "async_send_planned_route"), ["JN1TESTVIN", "route-1"], null));
await $.raises(ResponseError, "Destination limit reached", async () => {
(await $.call($.attr(client, "async_send_point_of_interest"), ["JN1TESTVIN", $.attr(PointOfInterestFolder, "FAVORITES"), $.call(DestinationInput, ["Work", $.call(CoordinateInput, [32.7, -(117.1)], null)], null)], Object.assign({}, {"calculation_condition": $.attr(RouteCalculationCondition, "FASTEST_ROUTE")})));
});
$.assert(((success === false)), "test_client_part_10.py:302: success is False");
poi_payload = $.get($.get($.attr(session, "calls"), 1), "json");
$.assert(($.eq($.get(poi_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["folderName"]: "FAVORITES"}, {["destinationInput"]: Object.assign({}, {["name"]: "Work"}, {["coordinate"]: Object.assign({}, {["latitude"]: 32.7}, {["longitude"]: -(117.1)})}, {["address"]: {}})}, {["calculationCondition"]: "FASTEST_ROUTE"}))), "test_client_part_10.py:304: poi_payload['variables'] == {'vin': 'JN1TESTVIN', 'folderName': 'FAVORITES', 'destinationInput': {'name': 'Work', 'coordinate': {'latitude': 32.7, 'longitude': -117.1}, 'address': {}}, 'calculationCondition': 'FASTEST_ROUTE'}");
}

/** Translated upstream test_route_and_point_of_interest_deletes_return_upstream_success. */
export async function test_route_and_point_of_interest_deletes_return_upstream_success(...__args: any[]): any {
let client, favorite_deleted, route_deleted, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["deleteRoute"]: Object.assign({}, {["success"]: true})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["deleteFavoritePointOfInterest"]: Object.assign({}, {["success"]: false})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
route_deleted = (await $.call($.attr(client, "async_delete_route"), ["JN1TESTVIN", "route-1"], null));
favorite_deleted = (await $.call($.attr(client, "async_delete_favorite_point_of_interest"), ["JN1TESTVIN", "destination-1"], null));
$.assert(((route_deleted === true)), "test_client_part_10.py:333: route_deleted is True");
$.assert(((favorite_deleted === false)), "test_client_part_10.py:334: favorite_deleted is False");
}

$.register("test_client_part_10.py::test_graphql_401_refreshes_once_and_retries", test_graphql_401_refreshes_once_and_retries, []);

$.register("test_client_part_10.py::test_expired_jwt_refreshes_before_graphql_request", test_expired_jwt_refreshes_before_graphql_request, []);

$.register("test_client_part_10.py::test_expired_id_token_refreshes_before_graphql_request", test_expired_id_token_refreshes_before_graphql_request, []);

$.register("test_client_part_10.py::test_send_journey_serializes_optional_inputs_and_kmr_header", test_send_journey_serializes_optional_inputs_and_kmr_header, []);

$.register("test_client_part_10.py::test_save_and_update_route_preserve_omitted_and_null_fields", test_save_and_update_route_preserve_omitted_and_null_fields, []);

$.register("test_client_part_10.py::test_navigation_nullable_success_and_limit_error", test_navigation_nullable_success_and_limit_error, []);

$.register("test_client_part_10.py::test_route_and_point_of_interest_deletes_return_upstream_success", test_route_and_point_of_interest_deletes_return_upstream_success, []);
