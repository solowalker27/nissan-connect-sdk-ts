// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

import { _SUCCESSFUL_SERVICE_REQUEST_STATUSES, _TERMINAL_SERVICE_REQUEST_STATUSES, SeatClimateOption, ServiceRequestKind, ServiceRequestStatus, TemperatureUnit, VehicleAlertKind, WeekDay } from "./_core_models";
export { _SUCCESSFUL_SERVICE_REQUEST_STATUSES, _TERMINAL_SERVICE_REQUEST_STATUSES, SeatClimateOption, ServiceRequestKind, ServiceRequestStatus, TemperatureUnit, VehicleAlertKind, WeekDay };

import { VehicleLocation } from "./_vehicle_status_models";
export { VehicleLocation };

/** OAuth tokens issued by the MyNISSAN identity service. */
export class Tokens {
readonly access_token: string;
readonly refresh_token: string;
readonly id_token: string | null;
static __fields = [["access_token", $.MISSING], ["refresh_token", $.MISSING], ["id_token", null]];
constructor(access_token: string, refresh_token: string, id_token?: string | null);
constructor(options: { access_token: string; refresh_token: string; id_token?: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, Tokens, __args);  Object.freeze(this); }
}
$.classType(Tokens);

/** Optional climate mode for each supported seat position. */
export class SeatClimateSettings {
readonly front_driver: SeatClimateOption | null;
readonly front_passenger: SeatClimateOption | null;
readonly rear_left: SeatClimateOption | null;
readonly rear_right: SeatClimateOption | null;
readonly rear_center: SeatClimateOption | null;
readonly third_left: SeatClimateOption | null;
readonly third_right: SeatClimateOption | null;
static __fields = [["front_driver", null], ["front_passenger", null], ["rear_left", null], ["rear_right", null], ["rear_center", null], ["third_left", null], ["third_right", null]];
constructor(front_driver?: SeatClimateOption | null, front_passenger?: SeatClimateOption | null, rear_left?: SeatClimateOption | null, rear_right?: SeatClimateOption | null, rear_center?: SeatClimateOption | null, third_left?: SeatClimateOption | null, third_right?: SeatClimateOption | null);
constructor(options: { front_driver?: SeatClimateOption | null; front_passenger?: SeatClimateOption | null; rear_left?: SeatClimateOption | null; rear_right?: SeatClimateOption | null; rear_center?: SeatClimateOption | null; third_left?: SeatClimateOption | null; third_right?: SeatClimateOption | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SeatClimateSettings, __args);  Object.freeze(this); }
}
$.classType(SeatClimateSettings);

/** Optional cabin accessories applied with a climate command. */
export class ClimateParameters {
readonly seats: SeatClimateSettings | null;
readonly steering_wheel_heater: boolean | null;
readonly defrost_and_deicer: boolean | null;
static __fields = [["seats", null], ["steering_wheel_heater", null], ["defrost_and_deicer", null]];
constructor(seats?: SeatClimateSettings | null, steering_wheel_heater?: boolean | null, defrost_and_deicer?: boolean | null);
constructor(options: { seats?: SeatClimateSettings | null; steering_wheel_heater?: boolean | null; defrost_and_deicer?: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ClimateParameters, __args);  Object.freeze(this); }
}
$.classType(ClimateParameters);

/** Target cabin temperature used by climate and engine commands. */
export class ClimateSettings {
readonly temperature: number;
readonly unit: TemperatureUnit;
readonly parameters: ClimateParameters | null;
static __fields = [["temperature", $.MISSING], ["unit", $.MISSING], ["parameters", null]];
constructor(temperature: number, unit: TemperatureUnit, parameters?: ClimateParameters | null);
constructor(options: { temperature: number; unit: TemperatureUnit; parameters?: ClimateParameters | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ClimateSettings, __args);  Object.freeze(this); }
}
$.classType(ClimateSettings);

/** Fields used to create or replace a recurring charge schedule. */
export class ChargeScheduleInput {
readonly start_date_time: $.DateValue;
readonly duration: string;
readonly week_days: ReadonlyArray<WeekDay>;
static __fields = [["start_date_time", $.MISSING], ["duration", $.MISSING], ["week_days", $.MISSING]];
constructor(start_date_time: $.DateValue, duration: string, week_days: ReadonlyArray<WeekDay>);
constructor(options: { start_date_time: $.DateValue; duration: string; week_days: ReadonlyArray<WeekDay> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargeScheduleInput, __args);  Object.freeze(this); }
}
$.classType(ChargeScheduleInput);

/** Fields used to create or replace a recurring climate schedule. */
export class ClimateScheduleInput {
readonly start_date_time: $.DateValue;
readonly week_days: ReadonlyArray<WeekDay>;
readonly climate: ClimateSettings;
static __fields = [["start_date_time", $.MISSING], ["week_days", $.MISSING], ["climate", $.MISSING]];
constructor(start_date_time: $.DateValue, week_days: ReadonlyArray<WeekDay>, climate: ClimateSettings);
constructor(options: { start_date_time: $.DateValue; week_days: ReadonlyArray<WeekDay>; climate: ClimateSettings });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ClimateScheduleInput, __args);  Object.freeze(this); }
}
$.classType(ClimateScheduleInput);

/** An asynchronous remote request accepted by Nissan. */
export class ServiceRequest {
readonly id: string;
readonly kind: ServiceRequestKind;
readonly climate_defaults_success: boolean | null;
readonly climate_defaults_error_message: string | null;
static __fields = [["id", $.MISSING], ["kind", $.MISSING], ["climate_defaults_success", null], ["climate_defaults_error_message", null]];
constructor(id: string, kind: ServiceRequestKind, climate_defaults_success?: boolean | null, climate_defaults_error_message?: string | null);
constructor(options: { id: string; kind: ServiceRequestKind; climate_defaults_success?: boolean | null; climate_defaults_error_message?: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceRequest, __args);  Object.freeze(this); }
}
$.classType(ServiceRequest);

/** An asynchronous vehicle-alert change accepted by Nissan. */
export class VehicleAlertRequest {
readonly id: string;
readonly kind: VehicleAlertKind;
static __fields = [["id", $.MISSING], ["kind", $.MISSING]];
constructor(id: string, kind: VehicleAlertKind);
constructor(options: { id: string; kind: VehicleAlertKind });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleAlertRequest, __args);  Object.freeze(this); }
}
$.classType(VehicleAlertRequest);

/** The latest upstream state of an asynchronous remote request. */
export class ServiceRequestResult {
readonly status: ServiceRequestStatus | null;
readonly status_details: string | null;
readonly location: VehicleLocation | null;
readonly activation_date_time: $.DateValue | null;
readonly status_change_date_time: $.DateValue | null;
static __fields = [["status", $.MISSING], ["status_details", null], ["location", null], ["activation_date_time", null], ["status_change_date_time", null]];
constructor(status: ServiceRequestStatus | null, status_details?: string | null, location?: VehicleLocation | null, activation_date_time?: $.DateValue | null, status_change_date_time?: $.DateValue | null);
constructor(options: { status: ServiceRequestStatus | null; status_details?: string | null; location?: VehicleLocation | null; activation_date_time?: $.DateValue | null; status_change_date_time?: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceRequestResult, __args);  Object.freeze(this); }
/** Return whether Nissan has finished processing the request. */
get is_terminal(): boolean {
/** Return whether Nissan has finished processing the request. */
return ($.contains(_TERMINAL_SERVICE_REQUEST_STATUSES, $.attr(this, "status")));
}
/** Return whether the request finished with a successful status. */
get is_success(): boolean {
/** Return whether the request finished with a successful status. */
return $.and(() => (($.attr(this, "status") !== null)), () => ($.contains(_SUCCESSFUL_SERVICE_REQUEST_STATUSES, $.attr(this, "status"))));
}
}
$.classType(ServiceRequestResult);
