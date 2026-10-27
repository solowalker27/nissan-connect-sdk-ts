// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _parse_part, _parse_parts_reminder, _parse_parts_reminder_mutation, _parse_past_service_result, _parse_service_contract } from "./_maintenance_detail_parsing";
export { _parse_part, _parse_parts_reminder, _parse_parts_reminder_mutation, _parse_past_service_result, _parse_service_contract };

import { _required_date, _required_datetime, _required_enum, _required_float, _required_int, _required_nullable_datetime, _required_nullable_list, _required_optional_typed_object, _required_string, _typed_object, _typename, _vehicle } from "./_maintenance_value_parsing";
export { _required_date, _required_datetime, _required_enum, _required_float, _required_int, _required_nullable_datetime, _required_nullable_list, _required_optional_typed_object, _required_string, _typed_object, _typename, _vehicle };

import { CollisionHistoryEntry, CollisionProbeReading, MaintenancePart, MaintenanceTimeline, PartsReminder, PartsReminderMutationResult, PastServiceResult, ServiceContract, VehiclePartsReminders } from "./maintenance_models";
export { CollisionHistoryEntry, CollisionProbeReading, MaintenancePart, MaintenanceTimeline, PartsReminder, PartsReminderMutationResult, PastServiceResult, ServiceContract, VehiclePartsReminders };

import { DistanceUnit } from "./models";
export { DistanceUnit };

export let _AVK2_VEHICLE_TYPENAMES = $.call($.frozenset, [new Set(["AVK2Vehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "EVOVehicle"])], null);

export function parse_maintenance_timeline(data: Record<string, unknown>): MaintenanceTimeline | null;
/** Parse the nullable maintenance timeline for a vehicle. */
export function parse_maintenance_timeline(...__args: any[]): any {
let path, timeline, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable maintenance timeline for a vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
path = "vehicle.maintenanceTimeline";
timeline = $.call(_required_optional_typed_object, [vehicle, "maintenanceTimeline", path], null);
if ($.truth(((timeline === null)))) {
return null;
}
return $.call(MaintenanceTimeline, [], Object.assign({}, {"last_service_date": $.call(_required_date, [timeline, "lastServiceDate", ($.str(path) + ".lastServiceDate")], null)}, {"last_service_mileage": $.call(_required_int, [timeline, "lastServiceMileage", ($.str(path) + ".lastServiceMileage")], null)}, {"next_service_date": $.call(_required_date, [timeline, "nextServiceDate", ($.str(path) + ".nextServiceDate")], null)}, {"next_service_mileage": $.call(_required_int, [timeline, "nextServiceMileage", ($.str(path) + ".nextServiceMileage")], null)}, {"remaining_service_mileage": $.call(_required_int, [timeline, "remainingServiceMileage", ($.str(path) + ".remainingServiceMileage")], null)}, {"remaining_service_months": $.call(_required_int, [timeline, "remainingServiceMonths", ($.str(path) + ".remainingServiceMonths")], null)}, {"mileage_unit": $.call(_required_enum, [timeline, "mileageUnit", DistanceUnit, ($.str(path) + ".mileageUnit")], null)}, {"current_mileage": $.call(_required_int, [timeline, "currentMileage", ($.str(path) + ".currentMileage")], null)}));
}

export function parse_service_contracts(data: Record<string, unknown>): ReadonlyArray<ServiceContract | null> | null;
/** Parse the nullable service-contract list for a vehicle. */
export function parse_service_contracts(...__args: any[]): any {
let contracts, contracts_path, index, path, raw_contract, raw_contracts, vehicle, warranty, warranty_path;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable service-contract list for a vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
warranty_path = "vehicle.warranty";
warranty = $.call(_required_optional_typed_object, [vehicle, "warranty", warranty_path], null);
if ($.truth(((warranty === null)))) {
return null;
}
contracts_path = ($.str(warranty_path) + ".serviceContracts");
raw_contracts = $.call(_required_nullable_list, [warranty, "serviceContracts", contracts_path], null);
if ($.truth(((raw_contracts === null)))) {
return null;
}
contracts = [];
for ([index, raw_contract] of $.iterable($.call($.enumerate, [raw_contracts], null))) {
if ($.truth(((raw_contract === null)))) {
$.call($.attr(contracts, "append"), [null], null);
continue;
}
path = ($.str(contracts_path) + "[" + $.str(index) + "]");
$.call($.attr(contracts, "append"), [$.call(_parse_service_contract, [raw_contract, path], null)], null);
}
return $.call($.tuple, [contracts], null);
}

export function parse_add_past_service(data: Record<string, unknown>): PastServiceResult | null;
/** Parse the nullable AddPastService union result. */
export function parse_add_past_service(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable AddPastService union result. */
return $.call(_parse_past_service_result, [data, "addPastService"], null);
}

export function parse_update_past_service(data: Record<string, unknown>): PastServiceResult | null;
/** Parse the nullable UpdatePastService union result. */
export function parse_update_past_service(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable UpdatePastService union result. */
return $.call(_parse_past_service_result, [data, "updatePastService"], null);
}

export function parse_parts_reminders(data: Record<string, unknown>): VehiclePartsReminders | null;
/** Parse the nullable AVK2 part catalog and reminder list. */
export function parse_parts_reminders(...__args: any[]): any {
let index, parsed_parts, parsed_reminders, parts, parts_path, raw_part, raw_parts, raw_reminder, raw_reminders, reminders, reminders_path, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable AVK2 part catalog and reminder list. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
if ($.truth((!$.contains(_AVK2_VEHICLE_TYPENAMES, $.call(_typename, [vehicle, "vehicle"], null))))) {
return null;
}
parts_path = "vehicle.parts";
raw_parts = $.call(_required_nullable_list, [vehicle, "parts", parts_path], null);
parts = null;
if ($.truth(((raw_parts !== null)))) {
parsed_parts = [];
for ([index, raw_part] of $.iterable($.call($.enumerate, [raw_parts], null))) {
if ($.truth(((raw_part === null)))) {
$.call($.attr(parsed_parts, "append"), [null], null);
continue;
}
$.call($.attr(parsed_parts, "append"), [$.call(_parse_part, [raw_part, ($.str(parts_path) + "[" + $.str(index) + "]")], null)], null);
}
parts = $.call($.tuple, [parsed_parts], null);
}
reminders_path = "vehicle.partsReminders";
raw_reminders = $.call(_required_nullable_list, [vehicle, "partsReminders", reminders_path], null);
reminders = null;
if ($.truth(((raw_reminders !== null)))) {
parsed_reminders = [];
for ([index, raw_reminder] of $.iterable($.call($.enumerate, [raw_reminders], null))) {
if ($.truth(((raw_reminder === null)))) {
$.call($.attr(parsed_reminders, "append"), [null], null);
continue;
}
$.call($.attr(parsed_reminders, "append"), [$.call(_parse_parts_reminder, [raw_reminder, ($.str(reminders_path) + "[" + $.str(index) + "]")], null)], null);
}
reminders = $.call($.tuple, [parsed_reminders], null);
}
return $.call(VehiclePartsReminders, [], Object.assign({}, {"parts": parts}, {"reminders": reminders}));
}

export function parse_create_parts_reminder(data: Record<string, unknown>): PartsReminderMutationResult | null;
/** Parse the nullable CreatePartsReminder response. */
export function parse_create_parts_reminder(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable CreatePartsReminder response. */
return $.call(_parse_parts_reminder_mutation, [data, "createPartsReminder"], Object.assign({}, {"conditional_response_status": false}));
}

export function parse_update_parts_reminder(data: Record<string, unknown>): PartsReminderMutationResult | null;
/** Parse the nullable UpdatePartsReminder union response. */
export function parse_update_parts_reminder(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable UpdatePartsReminder union response. */
return $.call(_parse_parts_reminder_mutation, [data, "updatePartsReminder"], Object.assign({}, {"conditional_response_status": true}));
}

export function parse_reset_parts_reminder(data: Record<string, unknown>): PartsReminderMutationResult | null;
/** Parse the nullable ResetPartsReminder response. */
export function parse_reset_parts_reminder(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable ResetPartsReminder response. */
return $.call(_parse_parts_reminder_mutation, [data, "resetPartsReminder"], Object.assign({}, {"conditional_response_status": false}));
}

export function parse_delete_parts_reminder(data: Record<string, unknown>): PartsReminderMutationResult | null;
/** Parse the nullable DeletePartsReminder union response. */
export function parse_delete_parts_reminder(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable DeletePartsReminder union response. */
return $.call(_parse_parts_reminder_mutation, [data, "deletePartsReminder"], Object.assign({}, {"conditional_response_status": true}));
}

export function parse_collision_history(data: Record<string, unknown>): ReadonlyArray<CollisionHistoryEntry | null> | null;
/** Parse nullable collision reports for a vehicle. */
export function parse_collision_history(...__args: any[]): any {
let entry, history, history_path, index, path, raw_entry, raw_history, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable collision reports for a vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
history_path = "vehicle.collisionHistory";
raw_history = $.call(_required_nullable_list, [vehicle, "collisionHistory", history_path], null);
if ($.truth(((raw_history === null)))) {
return null;
}
history = [];
for ([index, raw_entry] of $.iterable($.call($.enumerate, [raw_history], null))) {
if ($.truth(((raw_entry === null)))) {
$.call($.attr(history, "append"), [null], null);
continue;
}
path = ($.str(history_path) + "[" + $.str(index) + "]");
entry = $.call(_typed_object, [raw_entry, path], null);
$.call($.attr(history, "append"), [$.call(CollisionHistoryEntry, [], Object.assign({}, {"collision_id": $.call(_required_string, [entry, "collisionId", ($.str(path) + ".collisionId")], null)}, {"report_date_time": $.call(_required_nullable_datetime, [entry, "reportDateTime", ($.str(path) + ".reportDateTime")], null)}, {"collision_date_time": $.call(_required_nullable_datetime, [entry, "collisionDateTime", ($.str(path) + ".collisionDateTime")], null)}))], null);
}
return $.call($.tuple, [history], null);
}

export function parse_collision_probe_data(data: Record<string, unknown>): ReadonlyArray<CollisionProbeReading | null> | null;
/** Parse nullable AVK2 collision probe readings for a vehicle. */
export function parse_collision_probe_data(...__args: any[]): any {
let index, path, raw_reading, raw_readings, reading, readings, readings_path, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable AVK2 collision probe readings for a vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
if ($.truth((!$.contains(_AVK2_VEHICLE_TYPENAMES, $.call(_typename, [vehicle, "vehicle"], null))))) {
return null;
}
readings_path = "vehicle.collisionProbeReadings";
raw_readings = $.call(_required_nullable_list, [vehicle, "collisionProbeReadings", readings_path], null);
if ($.truth(((raw_readings === null)))) {
return null;
}
readings = [];
for ([index, raw_reading] of $.iterable($.call($.enumerate, [raw_readings], null))) {
if ($.truth(((raw_reading === null)))) {
$.call($.attr(readings, "append"), [null], null);
continue;
}
path = ($.str(readings_path) + "[" + $.str(index) + "]");
reading = $.call(_typed_object, [raw_reading, path], null);
$.call($.attr(readings, "append"), [$.call(CollisionProbeReading, [], Object.assign({}, {"collision_time": $.call(_required_datetime, [reading, "collisionTime", ($.str(path) + ".collisionTime")], null)}, {"latitude": $.call(_required_float, [reading, "latitude", ($.str(path) + ".latitude")], null)}, {"longitude": $.call(_required_float, [reading, "longitude", ($.str(path) + ".longitude")], null)}, {"mil_count": $.call(_required_int, [reading, "milCount", ($.str(path) + ".milCount")], null)}, {"mil_data": $.call(_required_string, [reading, "milData", ($.str(path) + ".milData")], null)}, {"odometer": $.call(_required_float, [reading, "odometer", ($.str(path) + ".odometer")], null)}, {"speed": $.call(_required_float, [reading, "speed", ($.str(path) + ".speed")], null)}, {"unit": $.call(_required_enum, [reading, "unit", DistanceUnit, ($.str(path) + ".unit")], null)}))], null);
}
return $.call($.tuple, [readings], null);
}
