// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { UNSET, AlertScheduleInput, AlertSpeedInput, BoundaryAlertUpdate, CurfewAlertInput, ReadOnlyError, SpeedAlertInput, SpeedUnit, ValetRadiusInput, VehicleAlertKind, VehicleAlertRequest, WeekDay } from "../src/index";

/** Translated upstream test_update_boundary_alert_distinguishes_omitted_and_null_fields. */
export async function test_update_boundary_alert_distinguishes_omitted_and_null_fields(...__args: any[]): any {
let client, payload, request, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["setBoundaryAlert"]: Object.assign({}, {["serviceRequestId"]: "operation-2"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
request = (await $.call($.attr(client, "async_update_boundary_alert"), ["JN1TESTVIN", "configured-alert-1", $.call(BoundaryAlertUpdate, [], Object.assign({}, {"name": null}, {"radius": UNSET}, {"in_vehicle_warning": false}))], null));
$.assert(($.eq(request, $.call(VehicleAlertRequest, ["operation-2", $.attr(VehicleAlertKind, "BOUNDARY")], null))), "test_client_part_04.py:50: request == VehicleAlertRequest('operation-2', VehicleAlertKind.BOUNDARY)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(payload, "operationName"), "SetBoundaryAlert")), "test_client_part_04.py:52: payload['operationName'] == 'SetBoundaryAlert'");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["alert"]: Object.assign({}, {["serviceRequestId"]: "configured-alert-1"}, {["name"]: null}, {["inVehicleWarning"]: false})}))), "test_client_part_04.py:53: payload['variables'] == {'vin': 'JN1TESTVIN', 'alert': {'serviceRequestId': 'configured-alert-1', 'name': None, 'inVehicleWarning': False}}");
}

/** Translated upstream test_curfew_alert_create_and_update_use_exact_schedule_contract. */
export async function test_curfew_alert_create_and_update_use_exact_schedule_contract(...__args: any[]): any {
let alert, client, create_payload, created, expected_alert, session, update_payload, updated;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["createCurfewAlert"]: Object.assign({}, {["serviceRequestId"]: "curfew-create"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["setCurfewAlert"]: Object.assign({}, {["serviceRequestId"]: "curfew-update"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
alert = $.call(CurfewAlertInput, [], Object.assign({}, {"name": "Night"}, {"in_vehicle_warning": true}, {"schedule": $.call(AlertScheduleInput, [$.call($.attr(datetime, "fromisoformat"), ["2026-08-01T22:00:00-07:00"], null), "PT8H", [$.attr(WeekDay, "FRIDAY"), $.attr(WeekDay, "SATURDAY")]], null)}));
created = (await $.call($.attr(client, "async_create_curfew_alert"), ["JN1TESTVIN", alert], null));
updated = (await $.call($.attr(client, "async_update_curfew_alert"), ["JN1TESTVIN", "configured-curfew-1", alert], null));
$.assert(($.eq(created, $.call(VehicleAlertRequest, ["curfew-create", $.attr(VehicleAlertKind, "CURFEW")], null))), "test_client_part_04.py:93: created == VehicleAlertRequest('curfew-create', VehicleAlertKind.CURFEW)");
$.assert(($.eq(updated, $.call(VehicleAlertRequest, ["curfew-update", $.attr(VehicleAlertKind, "CURFEW")], null))), "test_client_part_04.py:94: updated == VehicleAlertRequest('curfew-update', VehicleAlertKind.CURFEW)");
create_payload = $.get($.get($.attr(session, "calls"), 0), "json");
update_payload = $.get($.get($.attr(session, "calls"), 1), "json");
expected_alert = Object.assign({}, {["name"]: "Night"}, {["inVehicleWarning"]: true}, {["schedule"]: Object.assign({}, {["startDateTime"]: "2026-08-01T22:00:00-07:00"}, {["duration"]: "PT8H"}, {["weekDays"]: ["FR", "SA"]})});
$.assert(($.eq($.get(create_payload, "operationName"), "CreateCurfewAlert")), "test_client_part_04.py:106: create_payload['operationName'] == 'CreateCurfewAlert'");
$.assert(($.eq($.get(create_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["alert"]: expected_alert}))), "test_client_part_04.py:107: create_payload['variables'] == {'vin': 'JN1TESTVIN', 'alert': expected_alert}");
$.assert(($.eq($.get(update_payload, "operationName"), "SetCurfewAlert")), "test_client_part_04.py:108: update_payload['operationName'] == 'SetCurfewAlert'");
$.assert(($.eq($.get(update_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["serviceRequestId"]: "configured-curfew-1"}, {["alert"]: expected_alert}))), "test_client_part_04.py:109: update_payload['variables'] == {'vin': 'JN1TESTVIN', 'serviceRequestId': 'configured-curfew-1', 'alert': expected_alert}");
}

/** Translated upstream test_curfew_alert_rejects_naive_date_time_before_network_request. */
export async function test_curfew_alert_rejects_naive_date_time_before_network_request(...__args: any[]): any {
let alert, client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
alert = $.call(CurfewAlertInput, [], Object.assign({}, {"name": "Night"}, {"in_vehicle_warning": false}, {"schedule": $.call(AlertScheduleInput, [$.call(datetime, [2026, 8, 1, 22], null), "PT8H", [$.attr(WeekDay, "MONDAY")]], null)}));
await $.raises($.ValueError, "UTC offset", async () => {
(await $.call($.attr(client, "async_create_curfew_alert"), ["JN1TESTVIN", alert], null));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_client_part_04.py:129: session.calls == []");
}

/** Translated upstream test_speed_alert_create_and_update_use_modern_and_legacy_fields. */
export async function test_speed_alert_create_and_update_use_modern_and_legacy_fields(...__args: any[]): any {
let client, create_payload, created, session, update_payload, updated;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["createSpeedAlert"]: Object.assign({}, {["serviceRequestId"]: "speed-create"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["setSpeedAlert"]: Object.assign({}, {["serviceRequestId"]: "speed-update"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
created = (await $.call($.attr(client, "async_create_speed_alert"), ["JN1TESTVIN", $.call(SpeedAlertInput, [], Object.assign({}, {"in_vehicle_warning": true}, {"speed": $.call(AlertSpeedInput, [$.attr(SpeedUnit, "MPH"), 65], null)}))], null));
updated = (await $.call($.attr(client, "async_update_speed_alert"), ["JN1TESTVIN", "configured-speed-1", $.call(SpeedAlertInput, [], Object.assign({}, {"in_vehicle_warning": false}, {"speed": null}, {"speed_in_mph": 55}))], null));
$.assert(($.eq(created, $.call(VehicleAlertRequest, ["speed-create", $.attr(VehicleAlertKind, "SPEED")], null))), "test_client_part_04.py:163: created == VehicleAlertRequest('speed-create', VehicleAlertKind.SPEED)");
$.assert(($.eq(updated, $.call(VehicleAlertRequest, ["speed-update", $.attr(VehicleAlertKind, "SPEED")], null))), "test_client_part_04.py:164: updated == VehicleAlertRequest('speed-update', VehicleAlertKind.SPEED)");
create_payload = $.get($.get($.attr(session, "calls"), 0), "json");
update_payload = $.get($.get($.attr(session, "calls"), 1), "json");
$.assert(($.eq($.get(create_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["alert"]: Object.assign({}, {["inVehicleWarning"]: true}, {["speed"]: Object.assign({}, {["type"]: "MPH"}, {["value"]: 65})})}))), "test_client_part_04.py:167: create_payload['variables'] == {'vin': 'JN1TESTVIN', 'alert': {'inVehicleWarning': True, 'speed': {'type': 'MPH', 'value': 65}}}");
$.assert(($.eq($.get(update_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["alert"]: Object.assign({}, {["serviceRequestId"]: "configured-speed-1"}, {["speedInMPH"]: 55}, {["inVehicleWarning"]: false}, {["speed"]: null})}))), "test_client_part_04.py:174: update_payload['variables'] == {'vin': 'JN1TESTVIN', 'alert': {'serviceRequestId': 'configured-speed-1', 'speedInMPH': 55, 'inVehicleWarning': False, 'speed': None}}");
}

/** Translated upstream test_alert_delete_and_toggle_commands_use_exact_operations. */
export async function test_alert_delete_and_toggle_commands_use_exact_operations(...__args: any[]): any {
let client, payload, request, session, variables;
let {"method_name": method_name, "args": args, "kwargs": kwargs, "operation_name": operation_name, "root_field": root_field, "kind": kind} = $.bind(__args, ["method_name", "args", "kwargs", "operation_name", "root_field", "kind"], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {[root_field]: Object.assign({}, {["serviceRequestId"]: "operation-1"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
request = (await $.call($.call($.getattr, [client, method_name], null), [...$.iterable(args)], Object.assign({}, kwargs)));
$.assert(($.eq(request, $.call(VehicleAlertRequest, ["operation-1", kind], null))), "test_client_part_04.py:262: request == VehicleAlertRequest('operation-1', kind)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(payload, "operationName"), operation_name)), "test_client_part_04.py:264: payload['operationName'] == operation_name");
variables = $.get(payload, "variables");
$.assert(($.eq($.get(variables, "vin"), "JN1TESTVIN")), "test_client_part_04.py:266: variables['vin'] == 'JN1TESTVIN'");
if ($.truth($.call($.attr(operation_name, "startswith"), ["Toggle"], null))) {
$.assert(($.eq($.get(variables, "alert"), Object.assign({}, {["serviceRequestId"]: "configured-1"}, {["enable"]: $.get(kwargs, "enabled")}))), "test_client_part_04.py:268: variables['alert'] == {'serviceRequestId': 'configured-1', 'enable': kwargs['enabled']}");
} else {
$.assert(($.eq($.get(variables, "serviceRequestId"), "configured-1")), "test_client_part_04.py:273: variables['serviceRequestId'] == 'configured-1'");
}
}

/** Translated upstream test_activate_valet_alert_preserves_omitted_and_explicit_null_variables. */
export async function test_activate_valet_alert_preserves_omitted_and_explicit_null_variables(...__args: any[]): any {
let client, null_radius_payload, omitted_payload, radius_payload, request_with_null_radius, request_with_radius, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["activateValetAlert"]: Object.assign({}, {["serviceRequestId"]: "valet-1"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["activateValetAlert"]: Object.assign({}, {["serviceRequestId"]: "valet-2"})})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["activateValetAlert"]: Object.assign({}, {["serviceRequestId"]: "valet-3"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
(await $.call($.attr(client, "async_activate_valet_alert"), ["JN1TESTVIN"], null));
request_with_radius = (await $.call($.attr(client, "async_activate_valet_alert"), ["JN1TESTVIN"], Object.assign({}, {"radius": $.call(ValetRadiusInput, [1.5], null)}, {"location": null})));
request_with_null_radius = (await $.call($.attr(client, "async_activate_valet_alert"), ["JN1TESTVIN"], Object.assign({}, {"radius": null})));
$.assert(($.eq(request_with_radius, $.call(VehicleAlertRequest, ["valet-2", $.attr(VehicleAlertKind, "VALET")], null))), "test_client_part_04.py:305: request_with_radius == VehicleAlertRequest('valet-2', VehicleAlertKind.VALET)");
$.assert(($.eq(request_with_null_radius, $.call(VehicleAlertRequest, ["valet-3", $.attr(VehicleAlertKind, "VALET")], null))), "test_client_part_04.py:306: request_with_null_radius == VehicleAlertRequest('valet-3', VehicleAlertKind.VALET)");
omitted_payload = $.get($.get($.attr(session, "calls"), 0), "json");
radius_payload = $.get($.get($.attr(session, "calls"), 1), "json");
null_radius_payload = $.get($.get($.attr(session, "calls"), 2), "json");
$.assert(($.eq($.get(omitted_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}))), "test_client_part_04.py:310: omitted_payload['variables'] == {'vin': 'JN1TESTVIN'}");
$.assert(($.eq($.get(radius_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["radiusWithUnit"]: Object.assign({}, {["value"]: 1.5})}, {["location"]: null}))), "test_client_part_04.py:311: radius_payload['variables'] == {'vin': 'JN1TESTVIN', 'radiusWithUnit': {'value': 1.5}, 'location': None}");
$.assert(($.eq($.get(null_radius_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["radiusWithUnit"]: null}))), "test_client_part_04.py:316: null_radius_payload['variables'] == {'vin': 'JN1TESTVIN', 'radiusWithUnit': None}");
}

/** Translated upstream test_alert_commands_respect_read_only_mode. */
export async function test_alert_commands_respect_read_only_mode(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_create_speed_alert"), ["JN1TESTVIN", $.call(SpeedAlertInput, [], Object.assign({}, {"in_vehicle_warning": true}, {"speed": $.call(AlertSpeedInput, [$.attr(SpeedUnit, "MPH"), 65], null)}))], null));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_client_part_04.py:336: session.calls == []");
}

$.register("test_client_part_04.py::test_update_boundary_alert_distinguishes_omitted_and_null_fields", test_update_boundary_alert_distinguishes_omitted_and_null_fields, []);

$.register("test_client_part_04.py::test_curfew_alert_create_and_update_use_exact_schedule_contract", test_curfew_alert_create_and_update_use_exact_schedule_contract, []);

$.register("test_client_part_04.py::test_curfew_alert_rejects_naive_date_time_before_network_request", test_curfew_alert_rejects_naive_date_time_before_network_request, []);

$.register("test_client_part_04.py::test_speed_alert_create_and_update_use_modern_and_legacy_fields", test_speed_alert_create_and_update_use_modern_and_legacy_fields, []);

$.register("test_client_part_04.py::test_alert_delete_and_toggle_commands_use_exact_operations", test_alert_delete_and_toggle_commands_use_exact_operations, [[["method_name", "args", "kwargs", "operation_name", "root_field", "kind"], [["async_delete_boundary_alert", ["JN1TESTVIN", "configured-1"], {}, "CancelBoundaryAlert", "cancelBoundaryAlert", $.attr(VehicleAlertKind, "BOUNDARY")], ["async_toggle_boundary_alert", ["JN1TESTVIN", "configured-1"], Object.assign({}, {["enabled"]: true}), "ToggleBoundaryAlert", "toggleBoundaryAlert", $.attr(VehicleAlertKind, "BOUNDARY")], ["async_delete_curfew_alert", ["JN1TESTVIN", "configured-1"], {}, "CancelCurfewAlert", "cancelCurfewAlert", $.attr(VehicleAlertKind, "CURFEW")], ["async_toggle_curfew_alert", ["JN1TESTVIN", "configured-1"], Object.assign({}, {["enabled"]: false}), "ToggleCurfewAlert", "toggleCurfewAlert", $.attr(VehicleAlertKind, "CURFEW")], ["async_delete_speed_alert", ["JN1TESTVIN", "configured-1"], {}, "CancelSpeedAlert", "cancelSpeedAlert", $.attr(VehicleAlertKind, "SPEED")], ["async_toggle_speed_alert", ["JN1TESTVIN", "configured-1"], Object.assign({}, {["enabled"]: true}), "ToggleSpeedAlert", "toggleSpeedAlert", $.attr(VehicleAlertKind, "SPEED")], ["async_deactivate_valet_alert", ["JN1TESTVIN", "configured-1"], {}, "DeactivateValetAlert", "deactivateValetAlert", $.attr(VehicleAlertKind, "VALET")]]]]);

$.register("test_client_part_04.py::test_activate_valet_alert_preserves_omitted_and_explicit_null_variables", test_activate_valet_alert_preserves_omitted_and_explicit_null_variables, []);

$.register("test_client_part_04.py::test_alert_commands_respect_read_only_mode", test_alert_commands_respect_read_only_mode, []);
