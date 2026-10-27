// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { CoordinateInput, DestinationInput, Journey, JourneyWaypoint, NavigationAddress, NavigationCoordinate, NavigationDataSource, PointOfInterestFolder, ReadOnlyError, ServiceRequest, ServiceRequestKind, ServiceRequestResult, ServiceRequestStatus, TJunctionLocationInput, VehicleJourneys } from "../src/index";

/** Translated upstream test_t_junction_mutations_use_exact_required_input_shapes. */
export async function test_t_junction_mutations_use_exact_required_input_shapes(...__args: any[]): any {
let call, client, deleted_saved, deleted_unsaved, saved, session, updated, variables;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["saveTJunctionLocations"]: Object.assign({}, {["serviceRequestId"]: "save-tj"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["updateSavedTJunctionLocation"]: Object.assign({}, {["serviceRequestId"]: "update-tj"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["deleteSavedTJunctionLocations"]: Object.assign({}, {["serviceRequestId"]: "delete-saved-tj"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["deleteUnsavedTJunctionLocations"]: Object.assign({}, {["serviceRequestId"]: "delete-unsaved-tj"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
saved = (await $.call($.attr(client, "async_save_t_junction_locations"), ["JN1TESTVIN", "2026-08-01T12:00:00Z", [$.call(TJunctionLocationInput, ["location-1", "Downtown"], null)]], null));
updated = (await $.call($.attr(client, "async_update_saved_t_junction_location"), ["JN1TESTVIN", "location-1", "Main and First"], null));
deleted_saved = (await $.call($.attr(client, "async_delete_saved_t_junction_locations"), ["JN1TESTVIN", ["location-1", "location-2"]], Object.assign({}, {"last_updated_at": ""})));
deleted_unsaved = (await $.call($.attr(client, "async_delete_unsaved_t_junction_locations"), ["JN1TESTVIN", ["location-3"]], null));
$.assertEqual(saved, $.call(ServiceRequest, ["save-tj", $.attr(ServiceRequestKind, "T_JUNCTION")], null), "test_client_part_11.py:78: saved == ServiceRequest('save-tj', ServiceRequestKind.T_JUNCTION)");
$.assertEqual(updated, $.call(ServiceRequest, ["update-tj", $.attr(ServiceRequestKind, "T_JUNCTION")], null), "test_client_part_11.py:79: updated == ServiceRequest('update-tj', ServiceRequestKind.T_JUNCTION)");
$.assertEqual(deleted_saved, $.call(ServiceRequest, ["delete-saved-tj", $.attr(ServiceRequestKind, "T_JUNCTION")], null), "test_client_part_11.py:80: deleted_saved == ServiceRequest('delete-saved-tj', ServiceRequestKind.T_JUNCTION)");
$.assertEqual(deleted_unsaved, $.call(ServiceRequest, ["delete-unsaved-tj", $.attr(ServiceRequestKind, "T_JUNCTION")], null), "test_client_part_11.py:81: deleted_unsaved == ServiceRequest('delete-unsaved-tj', ServiceRequestKind.T_JUNCTION)");
variables = (() => { const __out: any = []; for (const call of $.iterable($.attr(session, "calls"))) { __out.push($.get($.get(call, "json"), "variables")); } return __out; })();
$.assertEqual(variables, [Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["lastUpdatedAt"]: "2026-08-01T12:00:00Z"}, {["locationIds"]: [Object.assign({}, {["id"]: "location-1"}, {["name"]: "Downtown"})]})}), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["id"]: "location-1"}, {["locationName"]: "Main and First"})}), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["locationIds"]: ["location-1", "location-2"]}, {["lastUpdatedAt"]: ""})}), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["locationIds"]: ["location-3"]})})], "test_client_part_11.py:86: variables == [{'input': {'vin': 'JN1TESTVIN', 'lastUpdatedAt': '2026-08-01T12:00:00Z', 'locationIds': [{'id': 'location-1', 'name': 'Downtown'}]}}, {'input': {'vin': 'JN1TESTVIN', 'id': 'location-1', 'locationName': 'Main and First'}}, {'input': {'vin': 'JN1TESTVIN', 'locationIds': ['location-1', 'location-2'], 'lastUpdatedAt': ''}}, {'input': {'vin': 'JN1TESTVIN', 'locationIds': ['location-3']}}]");
}

/** Translated upstream test_navigation_request_status_dispatches_route_and_t_junction_checks. */
export async function test_navigation_request_status_dispatches_route_and_t_junction_checks(...__args: any[]): any {
let call, client, operation_names, route, session, t_junction;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkRouteServiceRequest"]: Object.assign({}, {["status"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["checkTJunctionServiceRequest"]: Object.assign({}, {["status"]: "FAILED"}, {["statusDetails"]: "TIMED_OUT"})})})], null)], null);
client = $.call(make_client, [session], null);
route = (await $.call($.attr(client, "async_check_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["route-request", $.attr(ServiceRequestKind, "ROUTE")], null)], null));
t_junction = (await $.call($.attr(client, "async_check_service_request"), ["JN1TESTVIN", $.call(ServiceRequest, ["t-junction-request", $.attr(ServiceRequestKind, "T_JUNCTION")], null)], null));
$.assertEqual(route, $.call(ServiceRequestResult, [null], null), "test_client_part_11.py:139: route == ServiceRequestResult(None)");
$.assert((($.attr(route, "is_terminal") === false)), "test_client_part_11.py:140: route.is_terminal is False");
$.assertEqual(t_junction, $.call(ServiceRequestResult, [$.attr(ServiceRequestStatus, "FAILED")], Object.assign({}, {"status_details": "TIMED_OUT"})), "test_client_part_11.py:141: t_junction == ServiceRequestResult(ServiceRequestStatus.FAILED, status_details='TIMED_OUT')");
operation_names = (() => { const __out: any = []; for (const call of $.iterable($.attr(session, "calls"))) { __out.push($.get($.get(call, "json"), "operationName")); } return __out; })();
$.assertEqual(operation_names, ["CheckRouteServiceRequest", "CheckTJunctionServiceRequest"], "test_client_part_11.py:148: operation_names == ['CheckRouteServiceRequest', 'CheckTJunctionServiceRequest']");
}

/** Translated upstream test_navigation_commands_respect_read_only_mode. */
export async function test_navigation_commands_respect_read_only_mode(...__args: any[]): any {
let client, destination, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
destination = $.call(DestinationInput, ["Home", $.call(CoordinateInput, [32.7, -(117.1)], null)], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_send_journey"), ["JN1TESTVIN", [destination]], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_send_point_of_interest"), ["JN1TESTVIN", $.attr(PointOfInterestFolder, "RECENTS"), destination], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_delete_route"), ["JN1TESTVIN", "route-1"], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_delete_unsaved_t_junction_locations"), ["JN1TESTVIN", ["location-1"]], null));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_11.py:173: session.calls == []");
}

/** Translated upstream test_kmr_header_is_preserved_after_token_refresh_retry. */
export async function test_kmr_header_is_preserved_after_token_refresh_retry(...__args: any[]): any {
let client, initial_headers, retry_headers, session, success;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [401, Object.assign({}, {["message"]: "expired"})], null), $.call(FakeResponse, [200, Object.assign({}, {["access_token"]: "replacement-access"}, {["refresh_token"]: "replacement-refresh"}, {["id_token"]: "replacement-id"})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["sendPlannedRoute"]: Object.assign({}, {["success"]: true})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
success = (await $.call($.attr(client, "async_send_planned_route"), ["JN1TESTVIN", "route-1"], Object.assign({}, {"data_source": $.attr(NavigationDataSource, "KMR")})));
$.assert(((success === true)), "test_client_part_11.py:198: success is True");
initial_headers = $.get($.get($.attr(session, "calls"), 0), "headers");
retry_headers = $.get($.get($.attr(session, "calls"), 2), "headers");
$.assertEqual($.get(initial_headers, "x-tsp-datasource"), "KMR", "test_client_part_11.py:201: initial_headers['x-tsp-datasource'] == 'KMR'");
$.assertEqual($.get(retry_headers, "x-tsp-datasource"), "KMR", "test_client_part_11.py:202: retry_headers['x-tsp-datasource'] == 'KMR'");
$.assertEqual($.get(retry_headers, "Authorization"), "Bearer replacement-access", "test_client_part_11.py:203: retry_headers['Authorization'] == 'Bearer replacement-access'");
}

/** Translated upstream test_get_vehicle_journeys_preserves_nullable_lists_and_items. */
export async function test_get_vehicle_journeys_preserves_nullable_lists_and_items(...__args: any[]): any {
let client, journeys, payload, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["journeys"]: [null, Object.assign({}, {["waypoints"]: [null, Object.assign({}, {["id"]: "waypoint-1"}, {["name"]: "Home"}, {["phoneNumber"]: null}, {["address"]: Object.assign({}, {["address1"]: "1 Main St"}, {["address2"]: null}, {["city"]: "San Diego"}, {["state"]: "CA"}, {["postalCode"]: "92101"}, {["country"]: "US"})}, {["coordinate"]: Object.assign({}, {["latitude"]: 32.7157}, {["longitude"]: -(117.1611)})})]})]})})})], null)], null);
client = $.call(make_client, [session], null);
journeys = (await $.call($.attr(client, "async_get_vehicle_journeys"), ["JN1TESTVIN"], null));
$.assertEqual(journeys, $.call(VehicleJourneys, [[null, $.call(Journey, [[null, $.call(JourneyWaypoint, [], Object.assign({}, {"id": "waypoint-1"}, {"name": "Home"}, {"address": $.call(NavigationAddress, [], Object.assign({}, {"address1": "1 Main St"}, {"address2": null}, {"city": "San Diego"}, {"state": "CA"}, {"postal_code": "92101"}, {"country": "US"}))}, {"coordinate": $.call(NavigationCoordinate, [32.7157, -(117.1611)], null)}, {"phone_number": null}))]], null)]], null), "test_client_part_11.py:248: journeys == VehicleJourneys((None, Journey((None, JourneyWaypoint(id='waypoint-1', name='Home', address=NavigationAddress(address1='1 Main St', address2=None, city='San Diego', state='CA', postal_code='92101', country='US'), coordinate=NavigationCoordinate(32.7157, -117.1611), phone_number=None)))))");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "VehicleJourneys", "test_client_part_11.py:273: payload['operationName'] == 'VehicleJourneys'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}), "test_client_part_11.py:274: payload['variables'] == {'vin': 'JN1TESTVIN'}");
}

$.register("test_client_part_11.py::test_t_junction_mutations_use_exact_required_input_shapes", test_t_junction_mutations_use_exact_required_input_shapes, []);

$.register("test_client_part_11.py::test_navigation_request_status_dispatches_route_and_t_junction_checks", test_navigation_request_status_dispatches_route_and_t_junction_checks, []);

$.register("test_client_part_11.py::test_navigation_commands_respect_read_only_mode", test_navigation_commands_respect_read_only_mode, []);

$.register("test_client_part_11.py::test_kmr_header_is_preserved_after_token_refresh_retry", test_kmr_header_is_preserved_after_token_refresh_retry, []);

$.register("test_client_part_11.py::test_get_vehicle_journeys_preserves_nullable_lists_and_items", test_get_vehicle_journeys_preserves_nullable_lists_and_items, []);
