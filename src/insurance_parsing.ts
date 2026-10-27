// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _required_enum, _required_field, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename } from "./account_parsing";
export { _required_enum, _required_field, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { InsuranceContact, InsuranceStatus, UnselectedInsuranceResult, VehicleInsurance, VehicleInsuranceMutationError, VehicleInsuranceMutationResult, VehicleInsuranceMutationSuccess, VehicleInsurer } from "./insurance_models";
export { InsuranceContact, InsuranceStatus, UnselectedInsuranceResult, VehicleInsurance, VehicleInsuranceMutationError, VehicleInsuranceMutationResult, VehicleInsuranceMutationSuccess, VehicleInsurer };

export function parse_add_vehicle_insurance(data: Record<string, unknown>): VehicleInsuranceMutationResult | null;
/** Parse every generated add-insurance union branch. */
export function parse_add_vehicle_insurance(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated add-insurance union branch. */
return $.call(_parse_insurance_mutation, [data, "addVehicleInsurance", "AddVehicleInsuranceSuccess", "AddVehicleInsuranceGeneralError"], null);
}

export function parse_update_vehicle_insurance(data: Record<string, unknown>): VehicleInsuranceMutationResult | null;
/** Parse every generated update-insurance union branch. */
export function parse_update_vehicle_insurance(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated update-insurance union branch. */
return $.call(_parse_insurance_mutation, [data, "updateVehicleInsurance", "UpdateVehicleInsuranceSuccess", "UpdateVehicleInsuranceGeneralError"], null);
}

export function parse_vehicle_insurance(data: Record<string, unknown>): VehicleInsurance | null;
/** Parse the nullable insurance policy attached to a nullable vehicle. */
export function parse_vehicle_insurance(...__args: any[]): any {
let insurance, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable insurance policy attached to a nullable vehicle. */
vehicle = $.call(_root, [data, "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
$.call(_typename, [vehicle, "vehicle"], null);
insurance = $.call(_required_optional_typed_object, [vehicle, "insurance", "vehicle.insurance"], null);
if ($.truth(((insurance === null)))) {
return null;
}
return $.call(_parse_vehicle_insurance, [insurance, "vehicle.insurance"], null);
}

export function parse_insurers(data: Record<string, unknown>): ReadonlyArray<VehicleInsurer | null> | null;
/** Parse the nullable insurer catalog and nullable list entries. */
export function parse_insurers(...__args: any[]): any {
let field, index, insurers, item, path, value;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable insurer catalog and nullable list entries. */
field = "insurers";
value = $.call(_required_field, [data, field, field], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(field) + " is not a list")], null);
}
insurers = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(insurers, "append"), [null], null);
continue;
}
path = ($.str(field) + "[" + $.str(index) + "]");
$.call($.attr(insurers, "append"), [$.call(_parse_insurer, [$.call(_typed_object, [item, path], null), path], null)], null);
}
return $.call($.tuple, [insurers], null);
}

export function _parse_insurance_mutation(data: Record<string, unknown>, field: string, success_typename: string, error_typename: string): VehicleInsuranceMutationResult | null;
/** Translated upstream _parse_insurance_mutation. */
export function _parse_insurance_mutation(...__args: any[]): any {
let root, typename;
let {"data": data, "field": field, "success_typename": success_typename, "error_typename": error_typename} = $.bind(__args, ["data", "field", "success_typename", "error_typename"], {}, [], null, null);
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, success_typename)))) {
return $.call(VehicleInsuranceMutationSuccess, [$.call(_required_bool, [root, "success", ($.str(field) + ".success")], null)], null);
}
if ($.truth(($.eq(typename, error_typename)))) {
return $.call(VehicleInsuranceMutationError, [$.call(_required_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedInsuranceResult, [typename], null);
}

export function _parse_vehicle_insurance(value: Record<string, unknown>, path: string): VehicleInsurance;
/** Translated upstream _parse_vehicle_insurance. */
export function _parse_vehicle_insurance(...__args: any[]): any {
let insurer;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_typename, [value, path], null);
insurer = $.call(_typed_object, [$.call(_required_field, [value, "insurer", ($.str(path) + ".insurer")], null), ($.str(path) + ".insurer")], null);
return $.call(VehicleInsurance, [], Object.assign({}, {"id": $.call(_required_string, [value, "id", ($.str(path) + ".id")], null)}, {"policy_number": $.call(_required_string, [value, "policyNumber", ($.str(path) + ".policyNumber")], null)}, {"expiration_date": $.call(_required_string, [value, "expirationDate", ($.str(path) + ".expirationDate")], null)}, {"status": $.call(_required_enum, [value, "status", InsuranceStatus, ($.str(path) + ".status")], null)}, {"insurer": $.call(_parse_insurer, [insurer, ($.str(path) + ".insurer")], null)}));
}

export function _parse_insurer(value: Record<string, unknown>, path: string): VehicleInsurer;
/** Translated upstream _parse_insurer. */
export function _parse_insurer(...__args: any[]): any {
let contact, contacts, contacts_value, index, item, item_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_typename, [value, path], null);
contacts_value = $.call(_required_field, [value, "contacts", ($.str(path) + ".contacts")], null);
if ($.truth(!$.truth($.call($.isinstance, [contacts_value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + ".contacts is not a list")], null);
}
contacts = [];
for ([index, item] of $.iterable($.call($.enumerate, [contacts_value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(contacts, "append"), [null], null);
continue;
}
item_path = ($.str(path) + ".contacts[" + $.str(index) + "]");
contact = $.call(_typed_object, [item, item_path], null);
$.call(_typename, [contact, item_path], null);
$.call($.attr(contacts, "append"), [$.call(InsuranceContact, [$.call(_required_nullable_string, [contact, "location", ($.str(item_path) + ".location")], null), $.call(_required_nullable_string, [contact, "phoneNumber", ($.str(item_path) + ".phoneNumber")], null)], null)], null);
}
return $.call(VehicleInsurer, [], Object.assign({}, {"id": $.call(_required_string, [value, "id", ($.str(path) + ".id")], null)}, {"name": $.call(_required_string, [value, "name", ($.str(path) + ".name")], null)}, {"contacts": $.call($.tuple, [contacts], null)}));
}

export function _required_bool(container: Record<string, unknown>, field: string, path: string): boolean;
/** Translated upstream _required_bool. */
export function _required_bool(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}
