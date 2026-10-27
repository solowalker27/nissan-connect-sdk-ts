// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Callable = $.Callable;

const dataclass = $.dataclass;
const field = $.field;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { AddressInput, CoordinateInput, address_input, coordinate_input } from "./common_inputs";
export { AddressInput, CoordinateInput, address_input, coordinate_input };

import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };

import { DistanceUnit, SpeedUnit, WeekDay } from "./models";
export { DistanceUnit, SpeedUnit, WeekDay };

export const BoundaryAlertType = $.enumType("BoundaryAlertType", {"ON_ENTRY": "ON_ENTRY", "ON_EXIT": "ON_EXIT"}, true);
export type BoundaryAlertType = ReturnType<typeof BoundaryAlertType>;

/** Boundary radius with its required distance unit. */
export class AlertRadiusInput {
readonly value: number;
readonly unit: DistanceUnit;
static __fields = [["value", $.MISSING], ["unit", $.MISSING]];
constructor(value: number, unit: DistanceUnit);
constructor(options: { value: number; unit: DistanceUnit });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AlertRadiusInput, __args);  Object.freeze(this); }
}
$.classType(AlertRadiusInput);

/** Valet radius whose non-null distance unit may be omitted. */
export class ValetRadiusInput {
readonly value: number;
readonly unit: DistanceUnit | UnsetType;
static __fields = [["value", $.MISSING], ["unit", UNSET]];
constructor(value: number, unit?: DistanceUnit | UnsetType);
constructor(options: { value: number; unit?: DistanceUnit | UnsetType });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ValetRadiusInput, __args);  Object.freeze(this); }
}
$.classType(ValetRadiusInput);

/** Complete settings required to create a boundary alert. */
export class BoundaryAlertInput {
readonly name: string;
readonly coordinate: CoordinateInput;
readonly radius: AlertRadiusInput;
readonly in_vehicle_warning: boolean;
readonly alert_type: BoundaryAlertType;
readonly address: AddressInput;
static __fields = [["name", $.MISSING], ["coordinate", $.MISSING], ["radius", $.MISSING], ["in_vehicle_warning", $.MISSING], ["alert_type", $.MISSING], ["address", $.call(field, [], Object.assign({}, {"default_factory": AddressInput}))]];
constructor(name: string, coordinate: CoordinateInput, radius: AlertRadiusInput, in_vehicle_warning: boolean, alert_type: BoundaryAlertType, address?: AddressInput);
constructor(options: { name: string; coordinate: CoordinateInput; radius: AlertRadiusInput; in_vehicle_warning: boolean; alert_type: BoundaryAlertType; address?: AddressInput });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, BoundaryAlertInput, __args);  Object.freeze(this); }
}
$.classType(BoundaryAlertInput);

/** Partial boundary alert update; omitted fields remain unchanged. */
export class BoundaryAlertUpdate {
readonly name: string | UnsetType | null;
readonly coordinate: CoordinateInput | UnsetType | null;
readonly address: AddressInput | UnsetType | null;
readonly radius: AlertRadiusInput | UnsetType | null;
readonly in_vehicle_warning: boolean | UnsetType | null;
readonly alert_type: BoundaryAlertType | UnsetType | null;
static __fields = [["name", UNSET], ["coordinate", UNSET], ["address", UNSET], ["radius", UNSET], ["in_vehicle_warning", UNSET], ["alert_type", UNSET]];
constructor(name?: string | UnsetType | null, coordinate?: CoordinateInput | UnsetType | null, address?: AddressInput | UnsetType | null, radius?: AlertRadiusInput | UnsetType | null, in_vehicle_warning?: boolean | UnsetType | null, alert_type?: BoundaryAlertType | UnsetType | null);
constructor(options: { name?: string | UnsetType | null; coordinate?: CoordinateInput | UnsetType | null; address?: AddressInput | UnsetType | null; radius?: AlertRadiusInput | UnsetType | null; in_vehicle_warning?: boolean | UnsetType | null; alert_type?: BoundaryAlertType | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, BoundaryAlertUpdate, __args);  Object.freeze(this); }
}
$.classType(BoundaryAlertUpdate);

/** Recurring schedule required by a curfew alert. */
export class AlertScheduleInput {
readonly start_date_time: $.DateValue;
readonly duration: string;
readonly week_days: ReadonlyArray<WeekDay>;
static __fields = [["start_date_time", $.MISSING], ["duration", $.MISSING], ["week_days", $.MISSING]];
constructor(start_date_time: $.DateValue, duration: string, week_days: ReadonlyArray<WeekDay>);
constructor(options: { start_date_time: $.DateValue; duration: string; week_days: ReadonlyArray<WeekDay> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AlertScheduleInput, __args);  Object.freeze(this); }
}
$.classType(AlertScheduleInput);

/** Complete settings required to create or replace a curfew alert. */
export class CurfewAlertInput {
readonly name: string;
readonly in_vehicle_warning: boolean;
readonly schedule: AlertScheduleInput;
static __fields = [["name", $.MISSING], ["in_vehicle_warning", $.MISSING], ["schedule", $.MISSING]];
constructor(name: string, in_vehicle_warning: boolean, schedule: AlertScheduleInput);
constructor(options: { name: string; in_vehicle_warning: boolean; schedule: AlertScheduleInput });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CurfewAlertInput, __args);  Object.freeze(this); }
}
$.classType(CurfewAlertInput);

/** Unit-aware speed threshold used by current MyNISSAN clients. */
export class AlertSpeedInput {
readonly unit: SpeedUnit;
readonly value: number;
static __fields = [["unit", $.MISSING], ["value", $.MISSING]];
constructor(unit: SpeedUnit, value: number);
constructor(options: { unit: SpeedUnit; value: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AlertSpeedInput, __args);  Object.freeze(this); }
}
$.classType(AlertSpeedInput);

/** Speed alert settings, including the optional legacy MPH field. */
export class SpeedAlertInput {
readonly in_vehicle_warning: boolean;
readonly speed: AlertSpeedInput | UnsetType | null;
readonly speed_in_mph: number | UnsetType | null;
static __fields = [["in_vehicle_warning", $.MISSING], ["speed", UNSET], ["speed_in_mph", UNSET]];
constructor(in_vehicle_warning: boolean, speed?: AlertSpeedInput | UnsetType | null, speed_in_mph?: number | UnsetType | null);
constructor(options: { in_vehicle_warning: boolean; speed?: AlertSpeedInput | UnsetType | null; speed_in_mph?: number | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SpeedAlertInput, __args);  Object.freeze(this); }
}
$.classType(SpeedAlertInput);

export function boundary_alert_input(value: BoundaryAlertInput): Record<string, unknown>;
/** Translated upstream boundary_alert_input. */
export function boundary_alert_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return Object.assign({}, {["name"]: $.attr(value, "name")}, {["coordinate"]: $.call(coordinate_input, [$.attr(value, "coordinate")], null)}, {["address"]: $.call(address_input, [$.attr(value, "address")], null)}, {["radius"]: $.call(radius_input, [$.attr(value, "radius")], null)}, {["inVehicleWarning"]: $.attr(value, "in_vehicle_warning")}, {["alertType"]: $.call(serialize_enum, [$.attr(value, "alert_type")], null)});
}

export function boundary_alert_update_input(service_request_id: string, value: BoundaryAlertUpdate): Record<string, unknown>;
/** Translated upstream boundary_alert_update_input. */
export function boundary_alert_update_input(...__args: any[]): any {
let {"service_request_id": service_request_id, "value": value} = $.bind(__args, ["service_request_id", "value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"serviceRequestId": service_request_id}, {"name": $.attr(value, "name")}, {"coordinate": $.call(_optional_serialized, [$.attr(value, "coordinate"), coordinate_input], null)}, {"address": $.call(_optional_serialized, [$.attr(value, "address"), address_input], null)}, {"radius": $.call(_optional_serialized, [$.attr(value, "radius"), radius_input], null)}, {"inVehicleWarning": $.attr(value, "in_vehicle_warning")}, {"alertType": $.call(_optional_enum, [$.attr(value, "alert_type")], null)}));
}

export function curfew_alert_input(value: CurfewAlertInput): Record<string, unknown>;
/** Translated upstream curfew_alert_input. */
export function curfew_alert_input(...__args: any[]): any {
let day;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return Object.assign({}, {["name"]: $.attr(value, "name")}, {["inVehicleWarning"]: $.attr(value, "in_vehicle_warning")}, {["schedule"]: Object.assign({}, {["startDateTime"]: $.call(serialize_datetime, [$.attr($.attr(value, "schedule"), "start_date_time")], null)}, {["duration"]: $.attr($.attr(value, "schedule"), "duration")}, {["weekDays"]: (() => { const __out: any = []; for (const day of $.iterable($.attr($.attr(value, "schedule"), "week_days"))) { __out.push($.call(serialize_enum, [day], null)); } return __out; })()})});
}

export function speed_alert_input(value: SpeedAlertInput): Record<string, unknown>;
/** Translated upstream speed_alert_input. */
export function speed_alert_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"speedInMPH": $.attr(value, "speed_in_mph")}, {"inVehicleWarning": $.attr(value, "in_vehicle_warning")}, {"speed": $.call(_optional_serialized, [$.attr(value, "speed"), alert_speed_input], null)}));
}

export function radius_input(value: AlertRadiusInput): Record<string, unknown>;
/** Translated upstream radius_input. */
export function radius_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return Object.assign({}, {["value"]: $.attr(value, "value")}, {["unit"]: $.call(serialize_enum, [$.attr(value, "unit")], null)});
}

export function valet_radius_input(value: ValetRadiusInput): Record<string, unknown>;
/** Translated upstream valet_radius_input. */
export function valet_radius_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"value": $.attr(value, "value")}, {"unit": $.call(_optional_enum, [$.attr(value, "unit")], null)}));
}

export function optional_coordinate_input(value: CoordinateInput | UnsetType | null): unknown;
/** Translated upstream optional_coordinate_input. */
export function optional_coordinate_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(_optional_serialized, [value, coordinate_input], null);
}

export function optional_valet_radius_input(value: ValetRadiusInput | UnsetType | null): unknown;
/** Translated upstream optional_valet_radius_input. */
export function optional_valet_radius_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(_optional_serialized, [value, valet_radius_input], null);
}

export function alert_speed_input(value: AlertSpeedInput): Record<string, unknown>;
/** Translated upstream alert_speed_input. */
export function alert_speed_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return Object.assign({}, {["type"]: $.call(serialize_enum, [$.attr(value, "unit")], null)}, {["value"]: $.attr(value, "value")});
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

export function _optional_enum(value: $.EnumValue | UnsetType | null): string | UnsetType | null;
/** Translated upstream _optional_enum. */
export function _optional_enum(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, StrEnum], null))) {
return $.call(serialize_enum, [value], null);
}
return value;
}
