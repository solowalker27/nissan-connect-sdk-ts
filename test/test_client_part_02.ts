// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { DistanceUnit, RemoteServiceHistory, SpeedUnit, VehicleAlerts, VehiclePhotos } from "../src/index";

/** Translated upstream test_get_photos_around_vehicle_preserves_nullable_result. */
export async function test_get_photos_around_vehicle_preserves_nullable_result(...__args: any[]): any {
let client, missing_photos, missing_vehicle, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["year"]: "2026"}, {["model"]: "ARIYA"}, {["vin"]: "JN1TESTVIN"}, {["photosAroundVehicle"]: null})})})], null)], null);
client = $.call(make_client, [session], null);
missing_vehicle = (await $.call($.attr(client, "async_get_photos_around_vehicle"), ["JN1TESTVIN"], null));
missing_photos = (await $.call($.attr(client, "async_get_photos_around_vehicle"), ["JN1TESTVIN"], null));
$.assert(((missing_vehicle === null)), "test_client_part_02.py:45: missing_vehicle is None");
$.assert(($.eq(missing_photos, $.call(VehiclePhotos, [], Object.assign({}, {"vin": "JN1TESTVIN"}, {"year": "2026"}, {"model": "ARIYA"}, {"photos": null})))), "test_client_part_02.py:46: missing_photos == VehiclePhotos(vin='JN1TESTVIN', year='2026', model='ARIYA', photos=None)");
}

/** Translated upstream test_get_remote_service_history_parses_service_contract_and_raw_enums. */
export async function test_get_remote_service_history_parses_service_contract_and_raw_enums(...__args: any[]): any {
let client, entry, payload, query, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["remoteServiceHistory"]: Object.assign({}, {["pageNumber"]: 2}, {["itemsPerPage"]: 10}, {["totalItems"]: 11}, {["totalPages"]: 2}, {["history"]: [Object.assign({}, {["serviceRequestId"]: "request-1"}, {["status"]: "FUTURE_STATUS"}, {["serviceType"]: "FUTURE_SERVICE"}, {["statusChangeDateTime"]: "2026-07-31T20:30:00Z"}), null]})})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_get_remote_service_history"), ["JN1TESTVIN"], Object.assign({}, {"page_number": 2}, {"items_per_page": 10})));
$.assert(((result !== null)), "test_client_part_02.py:90: result is not None");
$.assert(($.eq($.attr(result, "page_number"), 2)), "test_client_part_02.py:91: result.page_number == 2");
$.assert(($.eq($.attr(result, "items_per_page"), 10)), "test_client_part_02.py:92: result.items_per_page == 10");
$.assert(($.eq($.attr(result, "total_items"), 11)), "test_client_part_02.py:93: result.total_items == 11");
$.assert(($.eq($.attr(result, "total_pages"), 2)), "test_client_part_02.py:94: result.total_pages == 2");
$.assert((($.attr(result, "history") !== null)), "test_client_part_02.py:95: result.history is not None");
$.assert(($.eq($.call($.len, [$.attr(result, "history")], null), 2)), "test_client_part_02.py:96: len(result.history) == 2");
entry = $.get($.attr(result, "history"), 0);
$.assert(((entry !== null)), "test_client_part_02.py:98: entry is not None");
$.assert(($.eq($.attr(entry, "service_request_id"), "request-1")), "test_client_part_02.py:99: entry.service_request_id == 'request-1'");
$.assert(($.eq($.attr(entry, "status"), "FUTURE_STATUS")), "test_client_part_02.py:100: entry.status == 'FUTURE_STATUS'");
$.assert(($.eq($.attr(entry, "service_type"), "FUTURE_SERVICE")), "test_client_part_02.py:101: entry.service_type == 'FUTURE_SERVICE'");
$.assert((($.attr(entry, "status_change_date_time") !== null)), "test_client_part_02.py:102: entry.status_change_date_time is not None");
$.assert(($.eq($.call($.attr($.attr(entry, "status_change_date_time"), "isoformat"), [], null), "2026-07-31T20:30:00+00:00")), "test_client_part_02.py:103: entry.status_change_date_time.isoformat() == '2026-07-31T20:30:00+00:00'");
$.assert((($.get($.attr(result, "history"), 1) === null)), "test_client_part_02.py:104: result.history[1] is None");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(payload, "operationName"), "RemoteServiceHistory")), "test_client_part_02.py:107: payload['operationName'] == 'RemoteServiceHistory'");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["pageNumber"]: 2}, {["itemsPerPage"]: 10}))), "test_client_part_02.py:108: payload['variables'] == {'vin': 'JN1TESTVIN', 'pageNumber': 2, 'itemsPerPage': 10}");
query = $.get(payload, "query");
$.assert(($.contains(query, "paginate: { pageNumber: $pageNumber itemsPerPage: $itemsPerPage }")), "test_client_part_02.py:114: 'paginate: { pageNumber: $pageNumber itemsPerPage: $itemsPerPage }' in query");
$.assert(($.contains(query, "statusChangeDateTime")), "test_client_part_02.py:115: 'statusChangeDateTime' in query");
}

/** Translated upstream test_get_remote_service_history_preserves_nullable_page_and_list. */
export async function test_get_remote_service_history_preserves_nullable_page_and_list(...__args: any[]): any {
let client, missing_page, missing_vehicle, nullable_page, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["remoteServiceHistory"]: null})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["remoteServiceHistory"]: Object.assign({}, {["pageNumber"]: null}, {["itemsPerPage"]: null}, {["totalItems"]: null}, {["totalPages"]: null}, {["history"]: null})})})})], null)], null);
client = $.call(make_client, [session], null);
missing_vehicle = (await $.call($.attr(client, "async_get_remote_service_history"), ["JN1TESTVIN"], Object.assign({}, {"page_number": 1}, {"items_per_page": 10})));
missing_page = (await $.call($.attr(client, "async_get_remote_service_history"), ["JN1TESTVIN"], Object.assign({}, {"page_number": 1}, {"items_per_page": 10})));
nullable_page = (await $.call($.attr(client, "async_get_remote_service_history"), ["JN1TESTVIN"], Object.assign({}, {"page_number": 1}, {"items_per_page": 10})));
$.assert(((missing_vehicle === null)), "test_client_part_02.py:152: missing_vehicle is None");
$.assert(((missing_page === null)), "test_client_part_02.py:153: missing_page is None");
$.assert(($.eq(nullable_page, $.call(RemoteServiceHistory, [], Object.assign({}, {"page_number": null}, {"items_per_page": null}, {"total_items": null}, {"total_pages": null}, {"history": null})))), "test_client_part_02.py:154: nullable_page == RemoteServiceHistory(page_number=None, items_per_page=None, total_items=None, total_pages=None, history=None)");
}

/** Translated upstream test_get_vehicle_alerts_parses_service_contract_and_preserves_raw_enums. */
export async function test_get_vehicle_alerts_parses_service_contract_and_preserves_raw_enums(...__args: any[]): any {
let boundary, client, curfew, payload, query, result, session, speed;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["boundaryAlerts"]: [Object.assign({}, {["serviceRequestId"]: "boundary-1"}, {["alertType"]: "FUTURE_BOUNDARY"}, {["name"]: "Home"}, {["enabled"]: true}, {["inVehicleWarning"]: false}, {["address"]: Object.assign({}, {["address1"]: "1 Main St"}, {["address2"]: null}, {["city"]: "San Diego"}, {["state"]: "CA"}, {["country"]: "US"}, {["postalCode"]: "92101"})}, {["location"]: Object.assign({}, {["latitude"]: 32.7}, {["longitude"]: -(117.1)})}, {["radius"]: Object.assign({}, {["value"]: 2.5}, {["unit"]: "FUTURE_DISTANCE"})}), null]}, {["curfewAlerts"]: [Object.assign({}, {["serviceRequestId"]: "curfew-1"}, {["name"]: "Night"}, {["enabled"]: false}, {["inVehicleWarning"]: true}, {["schedule"]: Object.assign({}, {["allDay"]: null}, {["startDateTime"]: "2026-08-01T22:00:00-07:00"}, {["duration"]: "PT8H"}, {["weekDays"]: ["MO", null, "FUTURE_DAY"]})})]}, {["speedAlerts"]: [Object.assign({}, {["serviceRequestId"]: "speed-1"}, {["name"]: "Freeway"}, {["enabled"]: true}, {["inVehicleWarning"]: true}, {["speedThreshold"]: Object.assign({}, {["type"]: "FUTURE_SPEED"}, {["value"]: 65})})]}, {["valetAlert"]: Object.assign({}, {["serviceRequestId"]: null}, {["radius"]: Object.assign({}, {["unit"]: null}, {["value"]: 0.5})})})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_get_vehicle_alerts"), ["JN1TESTVIN"], Object.assign({}, {"speed_unit": $.attr(SpeedUnit, "MPH")}, {"distance_unit": $.attr(DistanceUnit, "MILE")})));
$.assert(((result !== null)), "test_client_part_02.py:231: result is not None");
$.assert((($.attr(result, "boundary_alerts") !== null)), "test_client_part_02.py:232: result.boundary_alerts is not None");
boundary = $.get($.attr(result, "boundary_alerts"), 0);
$.assert(((boundary !== null)), "test_client_part_02.py:234: boundary is not None");
$.assert(($.eq($.attr(boundary, "alert_type"), "FUTURE_BOUNDARY")), "test_client_part_02.py:235: boundary.alert_type == 'FUTURE_BOUNDARY'");
$.assert((($.attr(boundary, "address") !== null)), "test_client_part_02.py:236: boundary.address is not None");
$.assert(($.eq($.attr($.attr(boundary, "address"), "postal_code"), "92101")), "test_client_part_02.py:237: boundary.address.postal_code == '92101'");
$.assert((($.attr(boundary, "location") !== null)), "test_client_part_02.py:238: boundary.location is not None");
$.assert(($.eq($.attr($.attr(boundary, "location"), "latitude"), 32.7)), "test_client_part_02.py:239: boundary.location.latitude == 32.7");
$.assert((($.attr(boundary, "radius") !== null)), "test_client_part_02.py:240: boundary.radius is not None");
$.assert(($.eq($.attr($.attr(boundary, "radius"), "value"), 2.5)), "test_client_part_02.py:241: boundary.radius.value == 2.5");
$.assert(($.eq($.attr($.attr(boundary, "radius"), "unit"), "FUTURE_DISTANCE")), "test_client_part_02.py:242: boundary.radius.unit == 'FUTURE_DISTANCE'");
$.assert((($.get($.attr(result, "boundary_alerts"), 1) === null)), "test_client_part_02.py:243: result.boundary_alerts[1] is None");
$.assert((($.attr(result, "curfew_alerts") !== null)), "test_client_part_02.py:245: result.curfew_alerts is not None");
curfew = $.get($.attr(result, "curfew_alerts"), 0);
$.assert(((curfew !== null)), "test_client_part_02.py:247: curfew is not None");
$.assert((($.attr(curfew, "schedule") !== null)), "test_client_part_02.py:248: curfew.schedule is not None");
$.assert(($.eq($.call($.attr($.attr($.attr(curfew, "schedule"), "start_date_time"), "isoformat"), [], null), "2026-08-01T22:00:00-07:00")), "test_client_part_02.py:249: curfew.schedule.start_date_time.isoformat() == '2026-08-01T22:00:00-07:00'");
$.assert(($.eq($.attr($.attr(curfew, "schedule"), "week_days"), ["MO", null, "FUTURE_DAY"])), "test_client_part_02.py:250: curfew.schedule.week_days == ('MO', None, 'FUTURE_DAY')");
$.assert((($.attr(result, "speed_alerts") !== null)), "test_client_part_02.py:252: result.speed_alerts is not None");
speed = $.get($.attr(result, "speed_alerts"), 0);
$.assert(((speed !== null)), "test_client_part_02.py:254: speed is not None");
$.assert((($.attr(speed, "threshold") !== null)), "test_client_part_02.py:255: speed.threshold is not None");
$.assert(($.eq($.attr($.attr(speed, "threshold"), "unit"), "FUTURE_SPEED")), "test_client_part_02.py:256: speed.threshold.unit == 'FUTURE_SPEED'");
$.assert(($.eq($.attr($.attr(speed, "threshold"), "value"), 65.0)), "test_client_part_02.py:257: speed.threshold.value == 65.0");
$.assert((($.attr(result, "valet_alert") !== null)), "test_client_part_02.py:259: result.valet_alert is not None");
$.assert((($.attr($.attr(result, "valet_alert"), "service_request_id") === null)), "test_client_part_02.py:260: result.valet_alert.service_request_id is None");
$.assert((($.attr($.attr(result, "valet_alert"), "radius") !== null)), "test_client_part_02.py:261: result.valet_alert.radius is not None");
$.assert((($.attr($.attr($.attr(result, "valet_alert"), "radius"), "unit") === null)), "test_client_part_02.py:262: result.valet_alert.radius.unit is None");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(payload, "operationName"), "VehicleAlerts")), "test_client_part_02.py:265: payload['operationName'] == 'VehicleAlerts'");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["speedUnit"]: "MPH"}, {["distanceUnit"]: "MILE"}))), "test_client_part_02.py:266: payload['variables'] == {'vin': 'JN1TESTVIN', 'speedUnit': 'MPH', 'distanceUnit': 'MILE'}");
query = $.get(payload, "query");
$.assert(($.contains(query, "fragment BoundaryAlertDetails on BoundaryAlert")), "test_client_part_02.py:272: 'fragment BoundaryAlertDetails on BoundaryAlert' in query");
$.assert(($.contains(query, "fragment CurfewAlertDetails on CurfewAlert")), "test_client_part_02.py:273: 'fragment CurfewAlertDetails on CurfewAlert' in query");
$.assert(($.contains(query, "fragment SpeedAlertDetails on SpeedAlert")), "test_client_part_02.py:274: 'fragment SpeedAlertDetails on SpeedAlert' in query");
$.assert(($.contains(query, "fragment ValetAlertDetails on ValetAlert")), "test_client_part_02.py:275: 'fragment ValetAlertDetails on ValetAlert' in query");
}

/** Translated upstream test_get_vehicle_alerts_preserves_nullable_fragment_and_lists. */
export async function test_get_vehicle_alerts_preserves_nullable_fragment_and_lists(...__args: any[]): any {
let call, client, missing_vehicle, nullable_alerts, payload, session, unsupported_vehicle;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: null})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseVehicle"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["boundaryAlerts"]: null}, {["curfewAlerts"]: null}, {["speedAlerts"]: null}, {["valetAlert"]: null})})})], null)], null);
client = $.call(make_client, [session], null);
missing_vehicle = (await $.call($.attr(client, "async_get_vehicle_alerts"), ["JN1TESTVIN"], null));
unsupported_vehicle = (await $.call($.attr(client, "async_get_vehicle_alerts"), ["JN1TESTVIN"], null));
nullable_alerts = (await $.call($.attr(client, "async_get_vehicle_alerts"), ["JN1TESTVIN"], null));
$.assert(((missing_vehicle === null)), "test_client_part_02.py:303: missing_vehicle is None");
$.assert(((unsupported_vehicle === null)), "test_client_part_02.py:304: unsupported_vehicle is None");
$.assert(($.eq(nullable_alerts, $.call(VehicleAlerts, [], Object.assign({}, {"boundary_alerts": null}, {"curfew_alerts": null}, {"speed_alerts": null}, {"valet_alert": null})))), "test_client_part_02.py:305: nullable_alerts == VehicleAlerts(boundary_alerts=None, curfew_alerts=None, speed_alerts=None, valet_alert=None)");
for (call of $.iterable($.attr(session, "calls"))) {
payload = $.get(call, "json");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}))), "test_client_part_02.py:313: payload['variables'] == {'vin': 'JN1TESTVIN'}");
}
}

$.register("test_client_part_02.py::test_get_photos_around_vehicle_preserves_nullable_result", test_get_photos_around_vehicle_preserves_nullable_result, []);

$.register("test_client_part_02.py::test_get_remote_service_history_parses_service_contract_and_raw_enums", test_get_remote_service_history_parses_service_contract_and_raw_enums, []);

$.register("test_client_part_02.py::test_get_remote_service_history_preserves_nullable_page_and_list", test_get_remote_service_history_preserves_nullable_page_and_list, []);

$.register("test_client_part_02.py::test_get_vehicle_alerts_parses_service_contract_and_preserves_raw_enums", test_get_vehicle_alerts_parses_service_contract_and_preserves_raw_enums, []);

$.register("test_client_part_02.py::test_get_vehicle_alerts_preserves_nullable_fragment_and_lists", test_get_vehicle_alerts_preserves_nullable_fragment_and_lists, []);
