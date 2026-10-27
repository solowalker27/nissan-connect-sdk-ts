// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { AddressInput, AlertRadiusInput, BoundaryAlertInput, BoundaryAlertType, BreachAlerts, CoordinateInput, DistanceUnit, ResponseError, VehicleAlertKind, VehicleAlertRequest } from "../src/index";

/** Translated upstream test_get_vehicle_alerts_rejects_missing_required_alert_field. */
export async function test_get_vehicle_alerts_rejects_missing_required_alert_field(...__args: any[]): any {
let session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["boundaryAlerts"]: [Object.assign({}, {["serviceRequestId"]: null}, {["alertType"]: "ON_ENTRY"}, {["name"]: "Home"}, {["enabled"]: true}, {["inVehicleWarning"]: false}, {["address"]: null}, {["location"]: null}, {["radius"]: null})]}, {["curfewAlerts"]: []}, {["speedAlerts"]: []}, {["valetAlert"]: null})})})], null)], null);
await $.raises(ResponseError, "serviceRequestId", async () => {
(await $.call($.attr($.call(make_client, [session], null), "async_get_vehicle_alerts"), ["JN1TESTVIN"], null));
});
}

/** Translated upstream test_get_breach_alerts_uses_defaults_and_preserves_raw_values. */
export async function test_get_breach_alerts_uses_defaults_and_preserves_raw_values(...__args: any[]): any {
let breach, client, payload, query, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["breachAlerts"]: Object.assign({}, {["itemsPerPage"]: 20}, {["pageNumber"]: 1}, {["totalItems"]: 2}, {["totalPages"]: 1}, {["alerts"]: [Object.assign({}, {["serviceType"]: "FUTURE_SERVICE"}, {["breachDateTime"]: "2026-07-31T20:30:00Z"}, {["name"]: "Garage"}, {["location"]: Object.assign({}, {["latitude"]: 32.8}, {["longitude"]: -(117.2)})}), null]})})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_get_breach_alerts"), ["JN1TESTVIN"], null));
$.assert(((result !== null)), "test_client_part_03.py:92: result is not None");
$.assertEqual($.attr(result, "items_per_page"), 20, "test_client_part_03.py:93: result.items_per_page == 20");
$.assertEqual($.attr(result, "page_number"), 1, "test_client_part_03.py:94: result.page_number == 1");
$.assertEqual($.attr(result, "total_items"), 2, "test_client_part_03.py:95: result.total_items == 2");
$.assertEqual($.attr(result, "total_pages"), 1, "test_client_part_03.py:96: result.total_pages == 1");
$.assert((($.attr(result, "alerts") !== null)), "test_client_part_03.py:97: result.alerts is not None");
breach = $.get($.attr(result, "alerts"), 0);
$.assert(((breach !== null)), "test_client_part_03.py:99: breach is not None");
$.assertEqual($.attr(breach, "service_type"), "FUTURE_SERVICE", "test_client_part_03.py:100: breach.service_type == 'FUTURE_SERVICE'");
$.assert((($.attr(breach, "breach_date_time") !== null)), "test_client_part_03.py:101: breach.breach_date_time is not None");
$.assertEqual($.call($.attr($.attr(breach, "breach_date_time"), "isoformat"), [], null), "2026-07-31T20:30:00+00:00", "test_client_part_03.py:102: breach.breach_date_time.isoformat() == '2026-07-31T20:30:00+00:00'");
$.assert((($.attr(breach, "location") !== null)), "test_client_part_03.py:103: breach.location is not None");
$.assertEqual($.attr($.attr(breach, "location"), "longitude"), -(117.2), "test_client_part_03.py:104: breach.location.longitude == -117.2");
$.assert((($.get($.attr(result, "alerts"), 1) === null)), "test_client_part_03.py:105: result.alerts[1] is None");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "BreachAlerts", "test_client_part_03.py:108: payload['operationName'] == 'BreachAlerts'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["pageNumber"]: 1}, {["itemsPerPage"]: 20}), "test_client_part_03.py:109: payload['variables'] == {'vin': 'JN1TESTVIN', 'pageNumber': 1, 'itemsPerPage': 20}");
query = $.get(payload, "query");
$.assert(($.contains(query, "paginate: { itemsPerPage: $itemsPerPage pageNumber: $pageNumber }")), "test_client_part_03.py:115: 'paginate: { itemsPerPage: $itemsPerPage pageNumber: $pageNumber }' in query");
$.assert(($.contains(query, "breachDateTime")), "test_client_part_03.py:116: 'breachDateTime' in query");
}

/** Translated upstream test_get_breach_alerts_preserves_nullable_page. */
export async function test_get_breach_alerts_preserves_nullable_page(...__args: any[]): any {
let client, missing_page, missing_vehicle, nullable_page, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["breachAlerts"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["breachAlerts"]: Object.assign({}, {["itemsPerPage"]: null}, {["pageNumber"]: null}, {["totalItems"]: null}, {["totalPages"]: null}, {["alerts"]: null})})})})], null)], null);
client = $.call(make_client, [session], null);
missing_vehicle = (await $.call($.attr(client, "async_get_breach_alerts"), ["JN1TESTVIN"], null));
missing_page = (await $.call($.attr(client, "async_get_breach_alerts"), ["JN1TESTVIN"], null));
nullable_page = (await $.call($.attr(client, "async_get_breach_alerts"), ["JN1TESTVIN"], null));
$.assert(((missing_vehicle === null)), "test_client_part_03.py:147: missing_vehicle is None");
$.assert(((missing_page === null)), "test_client_part_03.py:148: missing_page is None");
$.assertEqual(nullable_page, $.call(BreachAlerts, [], Object.assign({}, {"items_per_page": null}, {"page_number": null}, {"total_items": null}, {"total_pages": null}, {"alerts": null})), "test_client_part_03.py:149: nullable_page == BreachAlerts(items_per_page=None, page_number=None, total_items=None, total_pages=None, alerts=None)");
}

/** Translated upstream test_get_breach_alerts_rejects_invalid_pagination_before_network. */
export async function test_get_breach_alerts_rejects_invalid_pagination_before_network(...__args: any[]): any {
let session;
let {"page_number": page_number, "items_per_page": items_per_page, "name": name} = $.bind(__args, ["page_number", "items_per_page", "name"], {}, [], null, null);
session = $.call(FakeSession, [], null);
await $.raises($.ValueError, name, async () => {
(await $.call($.attr($.call(make_client, [session], null), "async_get_breach_alerts"), ["JN1TESTVIN"], Object.assign({}, {"page_number": page_number}, {"items_per_page": items_per_page})));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_03.py:184: session.calls == []");
}

/** Translated upstream test_get_alert_request_status_dispatches_exact_read_only_query. */
export async function test_get_alert_request_status_dispatches_exact_read_only_query(...__args: any[]): any {
let client, payload, query, session, status;
let {"alert_kind": alert_kind, "operation_name": operation_name, "root_field": root_field} = $.bind(__args, ["alert_kind", "operation_name", "root_field"], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {[root_field]: Object.assign({}, {["status"]: "FUTURE_STATUS"})})})})], null)], null);
client = $.call(make_client, [session], null);
status = (await $.call($.attr(client, "async_get_alert_request_status"), ["JN1TESTVIN", "request-1", alert_kind], null));
$.assertEqual(status, "FUTURE_STATUS", "test_client_part_03.py:216: status == 'FUTURE_STATUS'");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), operation_name, "test_client_part_03.py:218: payload['operationName'] == operation_name");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["serviceRequestId"]: "request-1"}), "test_client_part_03.py:219: payload['variables'] == {'vin': 'JN1TESTVIN', 'serviceRequestId': 'request-1'}");
query = $.get(payload, "query");
$.assert(($.contains(query, ($.str(root_field) + "(serviceRequestId: $serviceRequestId)"))), "test_client_part_03.py:224: f'{root_field}(serviceRequestId: $serviceRequestId)' in query");
}

/** Translated upstream test_get_alert_request_status_preserves_nullable_valet_status. */
export async function test_get_alert_request_status_preserves_nullable_valet_status(...__args: any[]): any {
let client, missing_vehicle, nullable_status, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["valetAlert"]: Object.assign({}, {["status"]: null})})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null)], null);
client = $.call(make_client, [session], null);
nullable_status = (await $.call($.attr(client, "async_get_alert_request_status"), ["JN1TESTVIN", "request-1", $.attr(VehicleAlertKind, "VALET")], null));
missing_vehicle = (await $.call($.attr(client, "async_get_alert_request_status"), ["JN1TESTVIN", "request-1", $.attr(VehicleAlertKind, "BOUNDARY")], null));
$.assert(((nullable_status === null)), "test_client_part_03.py:246: nullable_status is None");
$.assert(((missing_vehicle === null)), "test_client_part_03.py:247: missing_vehicle is None");
}

/** Translated upstream test_get_alert_request_status_requires_boundary_status_when_present. */
export async function test_get_alert_request_status_requires_boundary_status_when_present(...__args: any[]): any {
let session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["boundaryAlert"]: Object.assign({}, {["status"]: null})})})})], null)], null);
await $.raises(ResponseError, "boundaryAlert\\.status", async () => {
(await $.call($.attr($.call(make_client, [session], null), "async_get_alert_request_status"), ["JN1TESTVIN", "request-1", $.attr(VehicleAlertKind, "BOUNDARY")], null));
});
}

/** Translated upstream test_create_boundary_alert_serializes_complete_typed_input. */
export async function test_create_boundary_alert_serializes_complete_typed_input(...__args: any[]): any {
let client, payload, request, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["createBoundaryAlert"]: Object.assign({}, {["serviceRequestId"]: "operation-1"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
request = (await $.call($.attr(client, "async_create_boundary_alert"), ["JN1TESTVIN", $.call(BoundaryAlertInput, [], Object.assign({}, {"name": "Home"}, {"coordinate": $.call(CoordinateInput, [32.72, -(117.16)], null)}, {"address": $.call(AddressInput, [], Object.assign({}, {"address1": "100 Main St"}, {"city": "San Diego"}, {"state": "CA"}, {"postal_code": "92101"}, {"country": "US"}, {"district": null}))}, {"radius": $.call(AlertRadiusInput, [2.5, $.attr(DistanceUnit, "MILE")], null)}, {"in_vehicle_warning": true}, {"alert_type": $.attr(BoundaryAlertType, "ON_EXIT")}))], null));
$.assertEqual(request, $.call(VehicleAlertRequest, ["operation-1", $.attr(VehicleAlertKind, "BOUNDARY")], null), "test_client_part_03.py:293: request == VehicleAlertRequest('operation-1', VehicleAlertKind.BOUNDARY)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "CreateBoundaryAlert", "test_client_part_03.py:295: payload['operationName'] == 'CreateBoundaryAlert'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["alert"]: Object.assign({}, {["name"]: "Home"}, {["coordinate"]: Object.assign({}, {["latitude"]: 32.72}, {["longitude"]: -(117.16)})}, {["address"]: Object.assign({}, {["address1"]: "100 Main St"}, {["city"]: "San Diego"}, {["state"]: "CA"}, {["postalCode"]: "92101"}, {["country"]: "US"}, {["district"]: null})}, {["radius"]: Object.assign({}, {["value"]: 2.5}, {["unit"]: "MILE"})}, {["inVehicleWarning"]: true}, {["alertType"]: "ON_EXIT"})}), "test_client_part_03.py:296: payload['variables'] == {'vin': 'JN1TESTVIN', 'alert': {'name': 'Home', 'coordinate': {'latitude': 32.72, 'longitude': -117.16}, 'address': {'address1': '100 Main St', 'city': 'San Diego', 'state': 'CA', 'postalCode': '92101', 'country': 'US', 'district': None}, 'radius': {'value': 2.5, 'unit': 'MILE'}, 'inVehicleWarning': True, 'alertType': 'ON_EXIT'}}");
}

$.register("test_client_part_03.py::test_get_vehicle_alerts_rejects_missing_required_alert_field", test_get_vehicle_alerts_rejects_missing_required_alert_field, []);

$.register("test_client_part_03.py::test_get_breach_alerts_uses_defaults_and_preserves_raw_values", test_get_breach_alerts_uses_defaults_and_preserves_raw_values, []);

$.register("test_client_part_03.py::test_get_breach_alerts_preserves_nullable_page", test_get_breach_alerts_preserves_nullable_page, []);

$.register("test_client_part_03.py::test_get_breach_alerts_rejects_invalid_pagination_before_network", test_get_breach_alerts_rejects_invalid_pagination_before_network, [[["page_number", "items_per_page", "name"], [[0, 20, "page_number"], [-(1), 20, "page_number"], [true, 20, "page_number"], [1, 0, "items_per_page"], [1, -(1), "items_per_page"], [1, false, "items_per_page"]]]]);

$.register("test_client_part_03.py::test_get_alert_request_status_dispatches_exact_read_only_query", test_get_alert_request_status_dispatches_exact_read_only_query, [[["alert_kind", "operation_name", "root_field"], [[$.attr(VehicleAlertKind, "BOUNDARY"), "VehicleBoundaryAlert", "boundaryAlert"], [$.attr(VehicleAlertKind, "CURFEW"), "VehicleCurfewAlert", "curfewAlert"], [$.attr(VehicleAlertKind, "SPEED"), "VehicleSpeedAlert", "speedAlert"], [$.attr(VehicleAlertKind, "VALET"), "VehicleValetAlert", "valetAlert"]]]]);

$.register("test_client_part_03.py::test_get_alert_request_status_preserves_nullable_valet_status", test_get_alert_request_status_preserves_nullable_valet_status, []);

$.register("test_client_part_03.py::test_get_alert_request_status_requires_boundary_status_when_present", test_get_alert_request_status_requires_boundary_status_when_present, []);

$.register("test_client_part_03.py::test_create_boundary_alert_serializes_complete_typed_input", test_create_boundary_alert_serializes_complete_typed_input, []);
