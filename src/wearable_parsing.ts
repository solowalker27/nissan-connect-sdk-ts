// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { ServiceCapability } from "./models";
export { ServiceCapability };

import { VehicleCapabilitySummary, VehicleWithCapabilities } from "./wearable_models";
export { VehicleCapabilitySummary, VehicleWithCapabilities };

export function parse_vehicles_with_capabilities(data: Record<string, unknown>): ReadonlyArray<VehicleWithCapabilities | null> | null;
/** Parse the wearable client's nullable batch vehicle response. */
export function parse_vehicles_with_capabilities(...__args: any[]): any {
let index, value, values, vehicles;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the wearable client's nullable batch vehicle response. */
if ($.truth((!$.contains(data, "vehicles")))) {
throw $.call(ResponseError, ["vehicles is missing"], null);
}
values = $.call(_nullable_list, [$.call($.attr(data, "get"), ["vehicles"], null), "vehicles"], null);
if ($.truth(((values === null)))) {
return null;
}
vehicles = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(vehicles, "append"), [null], null);
continue;
}
$.call($.attr(vehicles, "append"), [$.call(_parse_vehicle, [value, ("vehicles[" + $.str(index) + "]")], null)], null);
}
return $.call($.tuple, [vehicles], null);
}

export function _parse_vehicle(value: unknown, path: string): VehicleWithCapabilities;
/** Translated upstream _parse_vehicle. */
export function _parse_vehicle(...__args: any[]): any {
let vehicle;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
vehicle = $.call(_typed_object, [value, path], null);
return $.call(VehicleWithCapabilities, [], Object.assign({}, {"vin": $.call(_string, [$.call($.attr(vehicle, "get"), ["vin"], null), ($.str(path) + ".vin")], null)}, {"nickname": $.call(_nullable_string, [$.call($.attr(vehicle, "get"), ["nickname"], null), ($.str(path) + ".nickname")], null)}, {"image_url": $.call(_string, [$.call($.attr(vehicle, "get"), ["image"], null), ($.str(path) + ".image")], null)}, {"year": $.call(_string, [$.call($.attr(vehicle, "get"), ["year"], null), ($.str(path) + ".year")], null)}, {"model": $.call(_string, [$.call($.attr(vehicle, "get"), ["model"], null), ($.str(path) + ".model")], null)}, {"driver_type": $.call(_nullable_string, [$.call($.attr(vehicle, "get"), ["driverType"], null), ($.str(path) + ".driverType")], null)}, {"capabilities": $.call(_parse_optional_capabilities, [$.call($.attr(vehicle, "get"), ["capabilities"], null), ($.str(path) + ".capabilities")], null)}));
}

export function _parse_optional_capabilities(value: unknown, path: string): VehicleCapabilitySummary | null;
/** Translated upstream _parse_optional_capabilities. */
export function _parse_optional_capabilities(...__args: any[]): any {
let capabilities, index, parsed_services, raw_service, raw_services, services;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
capabilities = $.call(_typed_object, [value, path], null);
raw_services = $.call(_nullable_list, [$.call($.attr(capabilities, "get"), ["serviceCapability"], null), ($.str(path) + ".serviceCapability")], null);
services = null;
if ($.truth(((raw_services !== null)))) {
parsed_services = [];
for ([index, raw_service] of $.iterable($.call($.enumerate, [raw_services], null))) {
if ($.truth(((raw_service === null)))) {
$.call($.attr(parsed_services, "append"), [null], null);
continue;
}
$.call($.attr(parsed_services, "append"), [$.call(_parse_service_capability, [raw_service, ($.str(path) + ".serviceCapability[" + $.str(index) + "]")], null)], null);
}
services = $.call($.tuple, [parsed_services], null);
}
return $.call(VehicleCapabilitySummary, [], Object.assign({}, {"telematics_program": $.call(_string, [$.call($.attr(capabilities, "get"), ["telematicsProgram"], null), ($.str(path) + ".telematicsProgram")], null)}, {"enrollment_status": $.call(_string, [$.call($.attr(capabilities, "get"), ["status"], null), ($.str(path) + ".status")], null)}, {"services": services}));
}

export function _parse_service_capability(value: unknown, path: string): ServiceCapability;
/** Translated upstream _parse_service_capability. */
export function _parse_service_capability(...__args: any[]): any {
let service;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
service = $.call(_typed_object, [value, path], null);
return $.call(ServiceCapability, [], Object.assign({}, {"type": $.call(_string, [$.call($.attr(service, "get"), ["type"], null), ($.str(path) + ".type")], null)}, {"enabled": $.call(_bool, [$.call($.attr(service, "get"), ["enabled"], null), ($.str(path) + ".enabled")], null)}, {"subscribed": $.call(_nullable_bool, [$.call($.attr(service, "get"), ["subscribed"], null), ($.str(path) + ".subscribed")], null)}));
}

export function _typed_object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _typed_object. */
export function _typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
$.call(_string, [$.call($.attr(value, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
return value;
}

export function _nullable_list(value: unknown, path: string): ReadonlyArray<unknown> | null;
/** Translated upstream _nullable_list. */
export function _nullable_list(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _string(value: unknown, path: string): string;
/** Translated upstream _string. */
export function _string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return value;
}

export function _nullable_string(value: unknown, path: string): string | null;
/** Translated upstream _nullable_string. */
export function _nullable_string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_string, [value, path], null);
}

export function _bool(value: unknown, path: string): boolean;
/** Translated upstream _bool. */
export function _bool(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _nullable_bool(value: unknown, path: string): boolean | null;
/** Translated upstream _nullable_bool. */
export function _nullable_bool(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_bool, [value, path], null);
}
