// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const re = $.re;

const Callable = $.Callable;
const Mapping = $.Mapping;

const pytest = $.pytest;

import { operations } from "../src/index";

import { ResponseError } from "../src/exceptions";

import { ServiceCapability } from "../src/models";

import { VehicleCapabilitySummary, VehicleWithCapabilities } from "../src/wearable_models";

import { parse_vehicles_with_capabilities } from "../src/wearable_parsing";

export let EXPECTED_DOCUMENT = "query WearableVehicles { vehicles { __typename vin nickname image year model driverType capabilities { __typename telematicsProgram status serviceCapability { __typename type enabled subscribed } } } }";

export let EXPECTED_OPERATION_ID = "ba7b89a00f05ce82ede35558ebf0464d3f22cd2c9b0b5559a4a2f587a9b843db";

/** Translated upstream _vehicle_payload. */
export function _vehicle_payload(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return Object.assign({}, {["__typename"]: "BaseElectric2Vehicle"}, {["vin"]: "JN1DF0CD0RM000001"}, {["nickname"]: "Ariya"}, {["image"]: "https://example.invalid/ariya.png"}, {["year"]: "2024"}, {["model"]: "ARIYA"}, {["driverType"]: "PRIMARY"}, {["capabilities"]: Object.assign({}, {["__typename"]: "VehicleCapability"}, {["telematicsProgram"]: "NNA_EV"}, {["status"]: "ENROLLED"}, {["serviceCapability"]: [Object.assign({}, {["__typename"]: "ServiceCapability"}, {["type"]: "REMOTE_CLIMATE_CONTROL"}, {["enabled"]: true}, {["subscribed"]: null}), null]})});
}

/** Translated upstream test_wearable_vehicles_operation_matches_service_document_and_id. */
export function test_wearable_vehicles_operation_matches_service_document_and_id(...__args: any[]): any {
let tokens;
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.attr(operations, "WEARABLE_VEHICLES"), EXPECTED_DOCUMENT)), "test_wearable_vehicles.py:55: operations.WEARABLE_VEHICLES == EXPECTED_DOCUMENT");
$.assert(($.eq($.attr(operations, "WEARABLE_VEHICLES_OPERATION_ID"), EXPECTED_OPERATION_ID)), "test_wearable_vehicles.py:56: operations.WEARABLE_VEHICLES_OPERATION_ID == EXPECTED_OPERATION_ID");
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr($.attr(operations, "WEARABLE_VEHICLES"), "encode"), [], null)], null), "hexdigest"), [], null), EXPECTED_OPERATION_ID)), "test_wearable_vehicles.py:57: hashlib.sha256(operations.WEARABLE_VEHICLES.encode()).hexdigest() == EXPECTED_OPERATION_ID");
tokens = $.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", $.attr(operations, "WEARABLE_VEHICLES")], null);
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr($.call($.attr(" ", "join"), [tokens], null), "encode"), [], null)], null), "hexdigest"), [], null), EXPECTED_OPERATION_ID)), "test_wearable_vehicles.py:65: hashlib.sha256(' '.join(tokens).encode()).hexdigest() == EXPECTED_OPERATION_ID");
}

/** Translated upstream test_parse_wearable_vehicles_preserves_exact_response_shape. */
export function test_parse_wearable_vehicles_preserves_exact_response_shape(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_vehicles_with_capabilities, [Object.assign({}, {["vehicles"]: [$.call(_vehicle_payload, [], null)]})], null);
$.assert(($.eq(result, [$.call(VehicleWithCapabilities, [], Object.assign({}, {"vin": "JN1DF0CD0RM000001"}, {"nickname": "Ariya"}, {"image_url": "https://example.invalid/ariya.png"}, {"year": "2024"}, {"model": "ARIYA"}, {"driver_type": "PRIMARY"}, {"capabilities": $.call(VehicleCapabilitySummary, [], Object.assign({}, {"telematics_program": "NNA_EV"}, {"enrollment_status": "ENROLLED"}, {"services": [$.call(ServiceCapability, [], Object.assign({}, {"type": "REMOTE_CLIMATE_CONTROL"}, {"enabled": true}, {"subscribed": null})), null]}))}))])), "test_wearable_vehicles.py:71: result == (VehicleWithCapabilities(vin='JN1DF0CD0RM000001', nickname='Ariya', image_url='https://example.invalid/ariya.png', year='2024', model='ARIYA', driver_type='PRIMARY', capabilities=VehicleCapabilitySummary(telematics_program='NNA_EV', enrollment_status='ENROLLED', services=(ServiceCapability(type='REMOTE_CLIMATE_CONTROL', enabled=True, subscribed=None), None))),)");
}

/** Translated upstream test_parse_wearable_vehicles_preserves_future_enum_values. */
export function test_parse_wearable_vehicles_preserves_future_enum_values(...__args: any[]): any {
let capabilities, parsed_service, parsed_vehicle, result, service, services, vehicle;
let {} = $.bind(__args, [], {}, [], null, null);
vehicle = $.call(_vehicle_payload, [], null);
vehicle["driverType"] = "FUTURE_DRIVER";
capabilities = $.get(vehicle, "capabilities");
$.assert($.call($.isinstance, [capabilities, $.dict], null), "test_wearable_vehicles.py:99: isinstance(capabilities, dict)");
capabilities["telematicsProgram"] = "FUTURE_PROGRAM";
capabilities["status"] = "FUTURE_STATUS";
services = $.get(capabilities, "serviceCapability");
$.assert($.call($.isinstance, [services, $.list], null), "test_wearable_vehicles.py:103: isinstance(services, list)");
service = $.get(services, 0);
$.assert($.call($.isinstance, [service, $.dict], null), "test_wearable_vehicles.py:105: isinstance(service, dict)");
service["type"] = "FUTURE_SERVICE";
result = $.call(parse_vehicles_with_capabilities, [Object.assign({}, {["vehicles"]: [vehicle]})], null);
$.assert(((result !== null)), "test_wearable_vehicles.py:110: result is not None");
parsed_vehicle = $.get(result, 0);
$.assert(((parsed_vehicle !== null)), "test_wearable_vehicles.py:112: parsed_vehicle is not None");
$.assert(($.eq($.attr(parsed_vehicle, "driver_type"), "FUTURE_DRIVER")), "test_wearable_vehicles.py:113: parsed_vehicle.driver_type == 'FUTURE_DRIVER'");
$.assert((($.attr(parsed_vehicle, "capabilities") !== null)), "test_wearable_vehicles.py:114: parsed_vehicle.capabilities is not None");
$.assert(($.eq($.attr($.attr(parsed_vehicle, "capabilities"), "telematics_program"), "FUTURE_PROGRAM")), "test_wearable_vehicles.py:115: parsed_vehicle.capabilities.telematics_program == 'FUTURE_PROGRAM'");
$.assert(($.eq($.attr($.attr(parsed_vehicle, "capabilities"), "enrollment_status"), "FUTURE_STATUS")), "test_wearable_vehicles.py:116: parsed_vehicle.capabilities.enrollment_status == 'FUTURE_STATUS'");
$.assert((($.attr($.attr(parsed_vehicle, "capabilities"), "services") !== null)), "test_wearable_vehicles.py:117: parsed_vehicle.capabilities.services is not None");
parsed_service = $.get($.attr($.attr(parsed_vehicle, "capabilities"), "services"), 0);
$.assert(((parsed_service !== null)), "test_wearable_vehicles.py:119: parsed_service is not None");
$.assert(($.eq($.attr(parsed_service, "type"), "FUTURE_SERVICE")), "test_wearable_vehicles.py:120: parsed_service.type == 'FUTURE_SERVICE'");
}

/** Translated upstream test_parse_wearable_vehicles_preserves_nullable_root_list_and_items. */
export function test_parse_wearable_vehicles_preserves_nullable_root_list_and_items(...__args: any[]): any {
let {"payload": payload, "expected": expected} = $.bind(__args, ["payload", "expected"], {}, [], null, null);
$.assert(($.eq($.call(parse_vehicles_with_capabilities, [payload], null), expected)), "test_wearable_vehicles.py:135: parse_vehicles_with_capabilities(payload) == expected");
}

/** Translated upstream test_parse_wearable_vehicle_preserves_nullable_vehicle_fields. */
export function test_parse_wearable_vehicle_preserves_nullable_vehicle_fields(...__args: any[]): any {
let parsed_vehicle, result, vehicle;
let {} = $.bind(__args, [], {}, [], null, null);
vehicle = $.call(_vehicle_payload, [], null);
vehicle["nickname"] = null;
vehicle["driverType"] = null;
vehicle["capabilities"] = null;
result = $.call(parse_vehicles_with_capabilities, [Object.assign({}, {["vehicles"]: [vehicle]})], null);
$.assert(((result !== null)), "test_wearable_vehicles.py:146: result is not None");
parsed_vehicle = $.get(result, 0);
$.assert(((parsed_vehicle !== null)), "test_wearable_vehicles.py:148: parsed_vehicle is not None");
$.assert((($.attr(parsed_vehicle, "nickname") === null)), "test_wearable_vehicles.py:149: parsed_vehicle.nickname is None");
$.assert((($.attr(parsed_vehicle, "driver_type") === null)), "test_wearable_vehicles.py:150: parsed_vehicle.driver_type is None");
$.assert((($.attr(parsed_vehicle, "capabilities") === null)), "test_wearable_vehicles.py:151: parsed_vehicle.capabilities is None");
}

/** Translated upstream test_parse_wearable_vehicle_preserves_nullable_and_empty_service_lists. */
export function test_parse_wearable_vehicle_preserves_nullable_and_empty_service_lists(...__args: any[]): any {
let capabilities, parsed_vehicle, result, vehicle;
let {"service_capability": service_capability} = $.bind(__args, ["service_capability"], {}, [], null, null);
vehicle = $.call(_vehicle_payload, [], null);
capabilities = $.get(vehicle, "capabilities");
$.assert($.call($.isinstance, [capabilities, $.dict], null), "test_wearable_vehicles.py:160: isinstance(capabilities, dict)");
capabilities["serviceCapability"] = service_capability;
result = $.call(parse_vehicles_with_capabilities, [Object.assign({}, {["vehicles"]: [vehicle]})], null);
$.assert(((result !== null)), "test_wearable_vehicles.py:165: result is not None");
parsed_vehicle = $.get(result, 0);
$.assert(((parsed_vehicle !== null)), "test_wearable_vehicles.py:167: parsed_vehicle is not None");
$.assert((($.attr(parsed_vehicle, "capabilities") !== null)), "test_wearable_vehicles.py:168: parsed_vehicle.capabilities is not None");
if ($.truth(((service_capability === null)))) {
$.assert((($.attr($.attr(parsed_vehicle, "capabilities"), "services") === null)), "test_wearable_vehicles.py:170: parsed_vehicle.capabilities.services is None");
} else {
$.assert(($.eq($.attr($.attr(parsed_vehicle, "capabilities"), "services"), [])), "test_wearable_vehicles.py:172: parsed_vehicle.capabilities.services == ()");
}
}

/** Translated upstream test_parse_wearable_vehicle_rejects_missing_or_malformed_required_scalars. */
export function test_parse_wearable_vehicle_rejects_missing_or_malformed_required_scalars(...__args: any[]): any {
let vehicle;
let {"field": field, "value": value, "message": message} = $.bind(__args, ["field", "value", "message"], {}, [], null, null);
vehicle = $.call(_vehicle_payload, [], null);
vehicle[field] = value;
$.raises(ResponseError, $.call($.attr(re, "escape"), [message], null), () => {
$.call(parse_vehicles_with_capabilities, [Object.assign({}, {["vehicles"]: [vehicle]})], null);
});
}

/** Translated upstream test_parse_wearable_vehicle_rejects_malformed_capability_scalars. */
export function test_parse_wearable_vehicle_rejects_malformed_capability_scalars(...__args: any[]): any {
let vehicle;
let {"mutate": mutate, "message": message} = $.bind(__args, ["mutate", "message"], {}, [], null, null);
vehicle = $.call(_vehicle_payload, [], null);
$.call(mutate, [vehicle], null);
$.raises(ResponseError, $.call($.attr(re, "escape"), [message], null), () => {
$.call(parse_vehicles_with_capabilities, [Object.assign({}, {["vehicles"]: [vehicle]})], null);
});
}

/** Translated upstream test_parse_wearable_vehicles_rejects_malformed_root. */
export function test_parse_wearable_vehicles_rejects_malformed_root(...__args: any[]): any {
let {"payload": payload, "message": message} = $.bind(__args, ["payload", "message"], {}, [], null, null);
$.raises(ResponseError, $.call($.attr(re, "escape"), [message], null), () => {
$.call(parse_vehicles_with_capabilities, [payload], null);
});
}

/** Translated upstream test_parse_wearable_vehicle_rejects_malformed_nested_shapes. */
export function test_parse_wearable_vehicle_rejects_malformed_nested_shapes(...__args: any[]): any {
let vehicle;
let {"mutate": mutate, "message": message} = $.bind(__args, ["mutate", "message"], {}, [], null, null);
vehicle = $.call(_vehicle_payload, [], null);
$.call(mutate, [vehicle], null);
$.raises(ResponseError, $.call($.attr(re, "escape"), [message], null), () => {
$.call(parse_vehicles_with_capabilities, [Object.assign({}, {["vehicles"]: [vehicle]})], null);
});
}

$.register("test_wearable_vehicles.py::test_wearable_vehicles_operation_matches_service_document_and_id", test_wearable_vehicles_operation_matches_service_document_and_id, []);

$.register("test_wearable_vehicles.py::test_parse_wearable_vehicles_preserves_exact_response_shape", test_parse_wearable_vehicles_preserves_exact_response_shape, []);

$.register("test_wearable_vehicles.py::test_parse_wearable_vehicles_preserves_future_enum_values", test_parse_wearable_vehicles_preserves_future_enum_values, []);

$.register("test_wearable_vehicles.py::test_parse_wearable_vehicles_preserves_nullable_root_list_and_items", test_parse_wearable_vehicles_preserves_nullable_root_list_and_items, [[["payload", "expected"], [[Object.assign({}, {["vehicles"]: null}), null], [Object.assign({}, {["vehicles"]: []}), []], [Object.assign({}, {["vehicles"]: [null]}), [null]]]]]);

$.register("test_wearable_vehicles.py::test_parse_wearable_vehicle_preserves_nullable_vehicle_fields", test_parse_wearable_vehicle_preserves_nullable_vehicle_fields, []);

$.register("test_wearable_vehicles.py::test_parse_wearable_vehicle_preserves_nullable_and_empty_service_lists", test_parse_wearable_vehicle_preserves_nullable_and_empty_service_lists, [["service_capability", [null, []]]]);

$.register("test_wearable_vehicles.py::test_parse_wearable_vehicle_rejects_missing_or_malformed_required_scalars", test_parse_wearable_vehicle_rejects_missing_or_malformed_required_scalars, [[["field", "value", "message"], [["vin", null, "vehicles[0].vin is not a string"], ["image", null, "vehicles[0].image is not a string"], ["year", null, "vehicles[0].year is not a string"], ["model", null, "vehicles[0].model is not a string"], ["vin", 1, "vehicles[0].vin is not a string"], ["image", false, "vehicles[0].image is not a string"]]]]);

$.register("test_wearable_vehicles.py::test_parse_wearable_vehicle_rejects_malformed_capability_scalars", test_parse_wearable_vehicle_rejects_malformed_capability_scalars, [[["mutate", "message"], [[(vehicle) => $.call($.attr($.get(vehicle, "capabilities"), "__setitem__"), ["telematicsProgram", null], null), "vehicles[0].capabilities.telematicsProgram is not a string"], [(vehicle) => $.call($.attr($.get(vehicle, "capabilities"), "__setitem__"), ["status", null], null), "vehicles[0].capabilities.status is not a string"], [(vehicle) => $.call($.attr($.get($.get($.get(vehicle, "capabilities"), "serviceCapability"), 0), "__setitem__"), ["type", null], null), "vehicles[0].capabilities.serviceCapability[0].type is not a string"], [(vehicle) => $.call($.attr($.get($.get($.get(vehicle, "capabilities"), "serviceCapability"), 0), "__setitem__"), ["enabled", null], null), "vehicles[0].capabilities.serviceCapability[0].enabled is not a boolean"]]]]);

$.register("test_wearable_vehicles.py::test_parse_wearable_vehicles_rejects_malformed_root", test_parse_wearable_vehicles_rejects_malformed_root, [[["payload", "message"], [[{}, "vehicles is missing"], [Object.assign({}, {["vehicles"]: {}}), "vehicles is not a list"], [Object.assign({}, {["vehicles"]: ["vehicle"]}), "vehicles[0] is not an object"]]]]);

$.register("test_wearable_vehicles.py::test_parse_wearable_vehicle_rejects_malformed_nested_shapes", test_parse_wearable_vehicle_rejects_malformed_nested_shapes, [[["mutate", "message"], [[(vehicle) => $.call($.attr(vehicle, "__setitem__"), ["__typename", null], null), "vehicles[0].__typename is not a string"], [(vehicle) => $.call($.attr(vehicle, "__setitem__"), ["capabilities", "capabilities"], null), "vehicles[0].capabilities is not an object"], [(vehicle) => $.call($.attr($.get(vehicle, "capabilities"), "__setitem__"), ["__typename", null], null), "vehicles[0].capabilities.__typename is not a string"], [(vehicle) => $.call($.attr($.get(vehicle, "capabilities"), "__setitem__"), ["serviceCapability", {}], null), "vehicles[0].capabilities.serviceCapability is not a list"], [(vehicle) => $.call($.attr($.get($.get(vehicle, "capabilities"), "serviceCapability"), "__setitem__"), [0, "service"], null), "vehicles[0].capabilities.serviceCapability[0] is not an object"], [(vehicle) => $.call($.attr($.get($.get($.get(vehicle, "capabilities"), "serviceCapability"), 0), "__setitem__"), ["__typename", null], null), "vehicles[0].capabilities.serviceCapability[0].__typename is not a string"], [(vehicle) => $.call($.attr($.get($.get($.get(vehicle, "capabilities"), "serviceCapability"), 0), "__setitem__"), ["subscribed", "yes"], null), "vehicles[0].capabilities.serviceCapability[0].subscribed is not a boolean"]]]]);
