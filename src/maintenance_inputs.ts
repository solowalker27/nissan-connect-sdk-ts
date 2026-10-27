// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Callable = $.Callable;

const dataclass = $.dataclass;

const date = $.date;
const datetime = $.datetime;

import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };

import { DistanceUnit } from "./models";
export { DistanceUnit };

/** Fields accepted when adding a completed service record. */
export class PastServiceInput {
readonly vin: string;
readonly dealer_id: number;
readonly invoice_date: $.DateValue;
readonly odometer: number;
readonly op_code_id: string | UnsetType | null;
readonly comment: string | UnsetType | null;
static __fields = [["vin", $.MISSING], ["dealer_id", $.MISSING], ["invoice_date", $.MISSING], ["odometer", $.MISSING], ["op_code_id", UNSET], ["comment", UNSET]];
constructor(vin: string, dealer_id: number, invoice_date: $.DateValue, odometer: number, op_code_id?: string | UnsetType | null, comment?: string | UnsetType | null);
constructor(options: { vin: string; dealer_id: number; invoice_date: $.DateValue; odometer: number; op_code_id?: string | UnsetType | null; comment?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PastServiceInput, __args);  Object.freeze(this); }
}
$.classType(PastServiceInput);

/** Fields accepted when replacing a completed service record. */
export class UpdatePastServiceInput {
readonly vin: string;
readonly dealer_id: number;
readonly invoice_date: $.DateValue;
readonly odometer: number;
readonly maintenance_id: number;
readonly op_code_id: string | UnsetType | null;
readonly comment: string | UnsetType | null;
static __fields = [["vin", $.MISSING], ["dealer_id", $.MISSING], ["invoice_date", $.MISSING], ["odometer", $.MISSING], ["maintenance_id", $.MISSING], ["op_code_id", UNSET], ["comment", UNSET]];
constructor(vin: string, dealer_id: number, invoice_date: $.DateValue, odometer: number, maintenance_id: number, op_code_id?: string | UnsetType | null, comment?: string | UnsetType | null);
constructor(options: { vin: string; dealer_id: number; invoice_date: $.DateValue; odometer: number; maintenance_id: number; op_code_id?: string | UnsetType | null; comment?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdatePastServiceInput, __args);  Object.freeze(this); }
}
$.classType(UpdatePastServiceInput);

/** Integer reminder distance whose non-null unit may be omitted. */
export class DistanceInput {
readonly value: number;
readonly unit: DistanceUnit | UnsetType;
static __fields = [["value", $.MISSING], ["unit", UNSET]];
constructor(value: number, unit?: DistanceUnit | UnsetType);
constructor(options: { value: number; unit?: DistanceUnit | UnsetType });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DistanceInput, __args);  Object.freeze(this); }
}
$.classType(DistanceInput);

/** Optional calendar and distance intervals for a parts reminder. */
export class ReminderInterval {
readonly months_interval: number | UnsetType | null;
readonly distance_interval: DistanceInput | UnsetType | null;
static __fields = [["months_interval", UNSET], ["distance_interval", UNSET]];
constructor(months_interval?: number | UnsetType | null, distance_interval?: DistanceInput | UnsetType | null);
constructor(options: { months_interval?: number | UnsetType | null; distance_interval?: DistanceInput | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ReminderInterval, __args);  Object.freeze(this); }
}
$.classType(ReminderInterval);

/** Fields accepted when creating a parts reminder. */
export class CreatePartsReminderInput {
readonly parts: ReadonlyArray<string>;
readonly mileage: DistanceInput | UnsetType | null;
readonly date: $.DateValue | UnsetType | null;
readonly interval: ReminderInterval | UnsetType | null;
static __fields = [["parts", $.MISSING], ["mileage", UNSET], ["date", UNSET], ["interval", UNSET]];
constructor(parts: ReadonlyArray<string>, mileage?: DistanceInput | UnsetType | null, date?: $.DateValue | UnsetType | null, interval?: ReminderInterval | UnsetType | null);
constructor(options: { parts: ReadonlyArray<string>; mileage?: DistanceInput | UnsetType | null; date?: $.DateValue | UnsetType | null; interval?: ReminderInterval | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CreatePartsReminderInput, __args);  Object.freeze(this); }
}
$.classType(CreatePartsReminderInput);

/** Fields accepted when replacing a parts reminder. */
export class UpdatePartsReminderInput {
readonly id: string;
readonly parts: ReadonlyArray<string>;
readonly mileage: DistanceInput | UnsetType | null;
readonly date: $.DateValue | UnsetType | null;
readonly interval: ReminderInterval | UnsetType | null;
static __fields = [["id", $.MISSING], ["parts", $.MISSING], ["mileage", UNSET], ["date", UNSET], ["interval", UNSET]];
constructor(id: string, parts: ReadonlyArray<string>, mileage?: DistanceInput | UnsetType | null, date?: $.DateValue | UnsetType | null, interval?: ReminderInterval | UnsetType | null);
constructor(options: { id: string; parts: ReadonlyArray<string>; mileage?: DistanceInput | UnsetType | null; date?: $.DateValue | UnsetType | null; interval?: ReminderInterval | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdatePartsReminderInput, __args);  Object.freeze(this); }
}
$.classType(UpdatePartsReminderInput);

/** Fields accepted when resetting a parts reminder schedule. */
export class ResetPartsReminderInput {
readonly id: string;
readonly parts: ReadonlyArray<string>;
readonly interval: ReminderInterval | UnsetType | null;
static __fields = [["id", $.MISSING], ["parts", $.MISSING], ["interval", UNSET]];
constructor(id: string, parts: ReadonlyArray<string>, interval?: ReminderInterval | UnsetType | null);
constructor(options: { id: string; parts: ReadonlyArray<string>; interval?: ReminderInterval | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ResetPartsReminderInput, __args);  Object.freeze(this); }
}
$.classType(ResetPartsReminderInput);

export function get_maintenance_timeline_variables(vin: string, mileage_unit: DistanceUnit): Record<string, unknown>;
/** Serialize required GetMaintenanceTimeline variables. */
export function get_maintenance_timeline_variables(...__args: any[]): any {
let {"vin": vin, "mileage_unit": mileage_unit} = $.bind(__args, ["vin", "mileage_unit"], {}, [], null, null);
/** Serialize required GetMaintenanceTimeline variables. */
return Object.assign({}, {["vin"]: vin}, {["mileageUnit"]: $.call(serialize_enum, [mileage_unit], null)});
}

export function get_service_contracts_variables(vin: string, mileage: number): Record<string, unknown>;
/** Serialize required GetServiceContracts variables. */
export function get_service_contracts_variables(...__args: any[]): any {
let {"vin": vin, "mileage": mileage} = $.bind(__args, ["vin", "mileage"], {}, [], null, null);
/** Serialize required GetServiceContracts variables. */
return Object.assign({}, {["vin"]: vin}, {["mileage"]: mileage});
}

export function add_past_service_variables(service?: PastServiceInput | UnsetType | null): Record<string, unknown>;
/** Serialize the nullable and omittable AddPastService input variable. */
export function add_past_service_variables(...__args: any[]): any {
let {"service": service} = $.bind(__args, ["service"], {"service": UNSET}, [], null, null);
/** Serialize the nullable and omittable AddPastService input variable. */
return $.call(optional_input_fields, [], Object.assign({}, {"input": $.call(_optional_serialized, [service, past_service_input], null)}));
}

export function update_past_service_variables(service: UpdatePastServiceInput): Record<string, unknown>;
/** Serialize the required UpdatePastService input variable. */
export function update_past_service_variables(...__args: any[]): any {
let {"service": service} = $.bind(__args, ["service"], {}, [], null, null);
/** Serialize the required UpdatePastService input variable. */
return Object.assign({}, {["input"]: $.call(update_past_service_input, [service], null)});
}

export function parts_reminders_variables(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Record<string, unknown>;
/** Serialize PartsReminders variables while preserving Apollo optionality. */
export function parts_reminders_variables(...__args: any[]): any {
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Serialize PartsReminders variables while preserving Apollo optionality. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"unit": $.call(_optional_distance_unit, [unit], null)}));
}

export function create_parts_reminder_variables(vin: string, reminder: CreatePartsReminderInput): Record<string, unknown>;
/** Serialize required CreatePartsReminder variables. */
export function create_parts_reminder_variables(...__args: any[]): any {
let {"vin": vin, "reminder": reminder} = $.bind(__args, ["vin", "reminder"], {}, [], null, null);
/** Serialize required CreatePartsReminder variables. */
return Object.assign({}, {["vin"]: vin}, {["reminder"]: $.call(create_parts_reminder_input, [reminder], null)});
}

export function update_parts_reminder_variables(vin: string, reminder: UpdatePartsReminderInput): Record<string, unknown>;
/** Serialize required UpdatePartsReminder variables. */
export function update_parts_reminder_variables(...__args: any[]): any {
let {"vin": vin, "reminder": reminder} = $.bind(__args, ["vin", "reminder"], {}, [], null, null);
/** Serialize required UpdatePartsReminder variables. */
return Object.assign({}, {["vin"]: vin}, {["reminder"]: $.call(update_parts_reminder_input, [reminder], null)});
}

export function reset_parts_reminder_variables(vin: string, reminder: ResetPartsReminderInput): Record<string, unknown>;
/** Serialize required ResetPartsReminder variables. */
export function reset_parts_reminder_variables(...__args: any[]): any {
let {"vin": vin, "reminder": reminder} = $.bind(__args, ["vin", "reminder"], {}, [], null, null);
/** Serialize required ResetPartsReminder variables. */
return Object.assign({}, {["vin"]: vin}, {["reminder"]: $.call(reset_parts_reminder_input, [reminder], null)});
}

export function delete_parts_reminder_variables(vin: string, reminder_id: string): Record<string, unknown>;
/** Serialize required DeletePartsReminder variables. */
export function delete_parts_reminder_variables(...__args: any[]): any {
let {"vin": vin, "reminder_id": reminder_id} = $.bind(__args, ["vin", "reminder_id"], {}, [], null, null);
/** Serialize required DeletePartsReminder variables. */
return Object.assign({}, {["vin"]: vin}, {["reminderId"]: reminder_id});
}

export function collision_history_variables(vin: string): Record<string, unknown>;
/** Serialize required CollisionHistory variables. */
export function collision_history_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize required CollisionHistory variables. */
return Object.assign({}, {["vin"]: vin});
}

export function collision_probe_data_variables(vin: string): Record<string, unknown>;
/** Serialize required CollisionProbeData variables. */
export function collision_probe_data_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize required CollisionProbeData variables. */
return Object.assign({}, {["vin"]: vin});
}

export function past_service_input(value: PastServiceInput): Record<string, unknown>;
/** Serialize PastServiceInput without adding application defaults. */
export function past_service_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize PastServiceInput without adding application defaults. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": $.attr(value, "vin")}, {"dealerId": $.attr(value, "dealer_id")}, {"opCodeID": $.attr(value, "op_code_id")}, {"invoiceDate": $.call($.attr($.attr(value, "invoice_date"), "isoformat"), [], null)}, {"odometer": $.attr(value, "odometer")}, {"comment": $.attr(value, "comment")}));
}

export function update_past_service_input(value: UpdatePastServiceInput): Record<string, unknown>;
/** Serialize UpdatePastServiceInput without adding application defaults. */
export function update_past_service_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize UpdatePastServiceInput without adding application defaults. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": $.attr(value, "vin")}, {"dealerId": $.attr(value, "dealer_id")}, {"opCodeID": $.attr(value, "op_code_id")}, {"invoiceDate": $.call($.attr($.attr(value, "invoice_date"), "isoformat"), [], null)}, {"odometer": $.attr(value, "odometer")}, {"comment": $.attr(value, "comment")}, {"maintenanceId": $.attr(value, "maintenance_id")}));
}

export function distance_input(value: DistanceInput): Record<string, unknown>;
/** Serialize DistanceInput while omitting its optional non-null unit. */
export function distance_input(...__args: any[]): any {
let unit;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize DistanceInput while omitting its optional non-null unit. */

if ($.truth($.call($.isinstance, [$.attr(value, "unit"), DistanceUnit], null))) {
unit = $.call(serialize_enum, [$.attr(value, "unit")], null);
} else {
unit = $.attr(value, "unit");
}
return $.call(optional_input_fields, [], Object.assign({}, {"value": $.attr(value, "value")}, {"unit": unit}));
}

export function reminder_interval_input(value: ReminderInterval): Record<string, unknown>;
/** Serialize ReminderInterval while preserving omitted and null fields. */
export function reminder_interval_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize ReminderInterval while preserving omitted and null fields. */
return $.call(optional_input_fields, [], Object.assign({}, {"monthsInterval": $.attr(value, "months_interval")}, {"distanceInterval": $.call(_optional_serialized, [$.attr(value, "distance_interval"), distance_input], null)}));
}

export function create_parts_reminder_input(value: CreatePartsReminderInput): Record<string, unknown>;
/** Serialize CreatePartsReminderInput exactly as supplied. */
export function create_parts_reminder_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize CreatePartsReminderInput exactly as supplied. */
return $.call(optional_input_fields, [], Object.assign({}, {"mileage": $.call(_optional_serialized, [$.attr(value, "mileage"), distance_input], null)}, {"date": $.call(_optional_datetime, [$.attr(value, "date")], null)}, {"interval": $.call(_optional_serialized, [$.attr(value, "interval"), reminder_interval_input], null)}, {"parts": $.call($.list, [$.attr(value, "parts")], null)}));
}

export function update_parts_reminder_input(value: UpdatePartsReminderInput): Record<string, unknown>;
/** Serialize UpdatePartsReminderInput exactly as supplied. */
export function update_parts_reminder_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize UpdatePartsReminderInput exactly as supplied. */
return $.call(optional_input_fields, [], Object.assign({}, {"id": $.attr(value, "id")}, {"mileage": $.call(_optional_serialized, [$.attr(value, "mileage"), distance_input], null)}, {"date": $.call(_optional_datetime, [$.attr(value, "date")], null)}, {"interval": $.call(_optional_serialized, [$.attr(value, "interval"), reminder_interval_input], null)}, {"parts": $.call($.list, [$.attr(value, "parts")], null)}));
}

export function reset_parts_reminder_input(value: ResetPartsReminderInput): Record<string, unknown>;
/** Serialize ResetPartsReminderInput exactly as supplied. */
export function reset_parts_reminder_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize ResetPartsReminderInput exactly as supplied. */
return $.call(optional_input_fields, [], Object.assign({}, {"id": $.attr(value, "id")}, {"interval": $.call(_optional_serialized, [$.attr(value, "interval"), reminder_interval_input], null)}, {"parts": $.call($.list, [$.attr(value, "parts")], null)}));
}

export function _optional_serialized(value: any | UnsetType | null, serializer: ((arg0: any) => unknown)): unknown;
/** Translated upstream _optional_serialized. */
export function _optional_serialized(...__args: any[]): any {
let {"value": value, "serializer": serializer} = $.bind(__args, ["value", "serializer"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call(serializer, [value], null);
}

export function _optional_datetime(value: $.DateValue | UnsetType | null): unknown;
/** Translated upstream _optional_datetime. */
export function _optional_datetime(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call(serialize_datetime, [value], null);
}

export function _optional_distance_unit(value: DistanceUnit | UnsetType | null): unknown;
/** Translated upstream _optional_distance_unit. */
export function _optional_distance_unit(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, DistanceUnit], null))) {
return $.call(serialize_enum, [value], null);
}
return value;
}
