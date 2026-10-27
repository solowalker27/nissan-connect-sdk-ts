// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _required_bool, _required_enum, _required_field, _required_int, _required_list, _required_nullable_bool, _required_nullable_date, _required_nullable_datetime, _required_nullable_enum, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename } from "./_maintenance_value_parsing";
export { _required_bool, _required_enum, _required_field, _required_int, _required_list, _required_nullable_bool, _required_nullable_date, _required_nullable_datetime, _required_nullable_enum, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename };

import { MaintenancePart, PartReminderConfiguration, PartsReminder, PartsReminderConfigurationThresholds, PartsReminderMutationResult, PartsReminderStatus, PastServiceExists, PastServiceGeneralError, PastServiceResult, PastServiceSuccess, ReminderDistance, ServiceContract, UnknownPastServiceResult, WarrantyServiceContractStatus } from "./maintenance_models";
export { MaintenancePart, PartReminderConfiguration, PartsReminder, PartsReminderConfigurationThresholds, PartsReminderMutationResult, PartsReminderStatus, PastServiceExists, PastServiceGeneralError, PastServiceResult, PastServiceSuccess, ReminderDistance, ServiceContract, UnknownPastServiceResult, WarrantyServiceContractStatus };

import { DistanceUnit } from "./models";
export { DistanceUnit };

export let _AVK2_VEHICLE_TYPENAMES = $.call($.frozenset, [new Set(["AVK2Vehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "EVOVehicle"])], null);

export function _parse_service_contract(value: unknown, path: string): ServiceContract;
/** Translated upstream _parse_service_contract. */
export function _parse_service_contract(...__args: any[]): any {
let contract;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
contract = $.call(_typed_object, [value, path], null);
return $.call(ServiceContract, [], Object.assign({}, {"status": $.call(_required_nullable_enum, [contract, "status", WarrantyServiceContractStatus, ($.str(path) + ".status")], null)}, {"coverage": $.call(_required_nullable_string, [contract, "coverage", ($.str(path) + ".coverage")], null)}, {"coverage_description": $.call(_required_nullable_string, [contract, "coverageDescription", ($.str(path) + ".coverageDescription")], null)}, {"coverage_name": $.call(_required_nullable_string, [contract, "coverageName", ($.str(path) + ".coverageName")], null)}, {"plan_effective_date": $.call(_required_nullable_date, [contract, "planEffectiveDate", ($.str(path) + ".planEffectiveDate")], null)}, {"plan_effective_miles": $.call(_required_nullable_int, [contract, "planEffectiveMiles", ($.str(path) + ".planEffectiveMiles")], null)}, {"plan_expiration_date": $.call(_required_nullable_date, [contract, "planExpirationDate", ($.str(path) + ".planExpirationDate")], null)}, {"plan_expiration_odometer": $.call(_required_nullable_int, [contract, "planExpirationOdometer", ($.str(path) + ".planExpirationOdometer")], null)}, {"plan_cancelled_date": $.call(_required_nullable_date, [contract, "planCancelledDate", ($.str(path) + ".planCancelledDate")], null)}, {"plan_cancelled_odometer": $.call(_required_nullable_int, [contract, "planCancelledOdometer", ($.str(path) + ".planCancelledOdometer")], null)}, {"agreement": $.call(_required_nullable_string, [contract, "agreement", ($.str(path) + ".agreement")], null)}, {"deductible_amount": $.call(_required_nullable_int, [contract, "deductibleAmount", ($.str(path) + ".deductibleAmount")], null)}, {"expiring_soon": $.call(_required_nullable_bool, [contract, "expiringSoon", ($.str(path) + ".expiringSoon")], null)}));
}

export function _parse_past_service_result(data: Record<string, unknown>, root_field: string): PastServiceResult | null;
/** Translated upstream _parse_past_service_result. */
export function _parse_past_service_result(...__args: any[]): any {
let root, typename;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "PastServiceSuccess")))) {
return $.call(PastServiceSuccess, [$.call(_required_bool, [root, "success", ($.str(root_field) + ".success")], null)], null);
}
if ($.truth(($.eq(typename, "RegisterGeneralError")))) {
return $.call(PastServiceGeneralError, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "PastServiceExists")))) {
return $.call(PastServiceExists, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
return $.call(UnknownPastServiceResult, [typename], null);
}

export function _parse_part(value: unknown, path: string): MaintenancePart;
/** Translated upstream _parse_part. */
export function _parse_part(...__args: any[]): any {
let configuration, configuration_path, distance_path, months_path, part, raw_configuration, raw_distance, raw_months;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
part = $.call(_typed_object, [value, path], null);
configuration_path = ($.str(path) + ".reminderConfiguration");
raw_configuration = $.call(_required_optional_typed_object, [part, "reminderConfiguration", configuration_path], null);
configuration = null;
if ($.truth(((raw_configuration !== null)))) {
months_path = ($.str(configuration_path) + ".months");
distance_path = ($.str(configuration_path) + ".distance");
raw_months = $.call(_required_optional_typed_object, [raw_configuration, "months", months_path], null);
raw_distance = $.call(_required_optional_typed_object, [raw_configuration, "distance", distance_path], null);
configuration = $.call(PartReminderConfiguration, [], Object.assign({}, {"months": ($.truth(((raw_months !== null))) ? $.call(_parse_configuration_thresholds, [raw_months, months_path], null) : null)}, {"distance": ($.truth(((raw_distance !== null))) ? $.call(_parse_configuration_thresholds, [raw_distance, distance_path], null) : null)}));
}
return $.call(MaintenancePart, [], Object.assign({}, {"id": $.call(_required_nullable_string, [part, "id", ($.str(path) + ".id")], null)}, {"name": $.call(_required_string, [part, "name", ($.str(path) + ".name")], null)}, {"reminder_configuration": configuration}));
}

export function _parse_configuration_thresholds(value: unknown, path: string): PartsReminderConfigurationThresholds;
/** Translated upstream _parse_configuration_thresholds. */
export function _parse_configuration_thresholds(...__args: any[]): any {
let thresholds;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
thresholds = $.call(_typed_object, [value, path], null);
return $.call(PartsReminderConfigurationThresholds, [], Object.assign({}, {"min": $.call(_required_int, [thresholds, "min", ($.str(path) + ".min")], null)}, {"max": $.call(_required_int, [thresholds, "max", ($.str(path) + ".max")], null)}, {"interval": $.call(_required_int, [thresholds, "interval", ($.str(path) + ".interval")], null)}, {"distance_unit": $.call(_required_nullable_enum, [thresholds, "distanceUnit", DistanceUnit, ($.str(path) + ".distanceUnit")], null)}));
}

export function _parse_parts_reminder(value: unknown, path: string): PartsReminder;
/** Translated upstream _parse_parts_reminder. */
export function _parse_parts_reminder(...__args: any[]): any {
let index, parts, parts_path, raw_part, raw_parts, reminder;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
reminder = $.call(_typed_object, [value, path], null);
parts_path = ($.str(path) + ".parts");
raw_parts = $.call(_required_list, [reminder, "parts", parts_path], null);
parts = [];
for ([index, raw_part] of $.iterable($.call($.enumerate, [raw_parts], null))) {
$.call($.attr(parts, "append"), [$.call(_parse_part, [raw_part, ($.str(parts_path) + "[" + $.str(index) + "]")], null)], null);
}
return $.call(PartsReminder, [], Object.assign({}, {"id": $.call(_required_string, [reminder, "id", ($.str(path) + ".id")], null)}, {"overdue": $.call(_required_bool, [reminder, "overdue", ($.str(path) + ".overdue")], null)}, {"date": $.call(_required_nullable_datetime, [reminder, "date", ($.str(path) + ".date")], null)}, {"months_interval": $.call(_required_nullable_int, [reminder, "monthsInterval", ($.str(path) + ".monthsInterval")], null)}, {"distance_interval": $.call(_required_nullable_distance, [reminder, "distanceInterval", ($.str(path) + ".distanceInterval")], null)}, {"next_reminder_distance": $.call(_required_nullable_distance, [reminder, "nextReminderDistance", ($.str(path) + ".nextReminderDistance")], null)}, {"next_reminder_date": $.call(_required_nullable_datetime, [reminder, "nextReminderDate", ($.str(path) + ".nextReminderDate")], null)}, {"status": $.call(_required_nullable_enum, [reminder, "status", PartsReminderStatus, ($.str(path) + ".status")], null)}, {"parts": $.call($.tuple, [parts], null)}, {"mileage": $.call(_required_nullable_distance, [reminder, "mileage", ($.str(path) + ".mileage")], null)}));
}

export function _required_nullable_distance(container: Record<string, unknown>, field: string, path: string): ReminderDistance | null;
/** Translated upstream _required_nullable_distance. */
export function _required_nullable_distance(...__args: any[]): any {
let distance, value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
distance = $.call(_typed_object, [value, path], null);
return $.call(ReminderDistance, [], Object.assign({}, {"unit": $.call(_required_enum, [distance, "unit", DistanceUnit, ($.str(path) + ".unit")], null)}, {"value": $.call(_required_int, [distance, "value", ($.str(path) + ".value")], null)}));
}

export function _parse_parts_reminder_mutation(data: Record<string, unknown>, root_field: string, options: { conditional_response_status: boolean }): PartsReminderMutationResult | null;
/** Translated upstream _parse_parts_reminder_mutation. */
export function _parse_parts_reminder_mutation(...__args: any[]): any {
let root, typename;
let {"data": data, "root_field": root_field, "conditional_response_status": conditional_response_status} = $.bind(__args, ["data", "root_field"], {}, ["conditional_response_status"], null, null);
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth($.and(() => conditional_response_status, () => (!$.eq(typename, "ResponseStatus"))))) {
return $.call(PartsReminderMutationResult, [], Object.assign({}, {"typename": typename}, {"success": null}));
}
return $.call(PartsReminderMutationResult, [], Object.assign({}, {"typename": typename}, {"success": $.call(_required_nullable_bool, [root, "success", ($.str(root_field) + ".success")], null)}));
}
