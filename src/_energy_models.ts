// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

import { V2LState, WeekDay } from "./_core_models";
export { V2LState, WeekDay };

import { ClimateParameters } from "./_request_models";
export { ClimateParameters };

import { TemperatureReading } from "./_vehicle_status_models";
export { TemperatureReading };

/** A recurring vehicle charging schedule. */
export class ChargeSchedule {
readonly id: string;
readonly state: string | null;
readonly start_date_time: $.DateValue;
readonly duration: string;
readonly week_days: ReadonlyArray<WeekDay>;
static __fields = [["id", $.MISSING], ["state", $.MISSING], ["start_date_time", $.MISSING], ["duration", $.MISSING], ["week_days", $.MISSING]];
constructor(id: string, state: string | null, start_date_time: $.DateValue, duration: string, week_days: ReadonlyArray<WeekDay>);
constructor(options: { id: string; state: string | null; start_date_time: $.DateValue; duration: string; week_days: ReadonlyArray<WeekDay> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargeSchedule, __args);  Object.freeze(this); }
}
$.classType(ChargeSchedule);

/** Configured charging and notification limits, expressed as percentages. */
export class ChargeConfig {
readonly charge_limit_percent: number | null;
readonly notification_threshold_percent: number | null;
static __fields = [["charge_limit_percent", $.MISSING], ["notification_threshold_percent", $.MISSING]];
constructor(charge_limit_percent: number | null, notification_threshold_percent: number | null);
constructor(options: { charge_limit_percent: number | null; notification_threshold_percent: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargeConfig, __args);  Object.freeze(this); }
}
$.classType(ChargeConfig);

/** V2L state and battery reserve levels, expressed as percentages. */
export class V2LStatus {
readonly state: V2LState | null;
readonly charge_limit_percent: number | null;
readonly minimum_charge_limit_percent: number | null;
static __fields = [["state", $.MISSING], ["charge_limit_percent", $.MISSING], ["minimum_charge_limit_percent", $.MISSING]];
constructor(state: V2LState | null, charge_limit_percent: number | null, minimum_charge_limit_percent: number | null);
constructor(options: { state: V2LState | null; charge_limit_percent: number | null; minimum_charge_limit_percent: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, V2LStatus, __args);  Object.freeze(this); }
}
$.classType(V2LStatus);

/** One charging session; recovered energy is expressed in kilowatt-hours. */
export class ChargeSession {
readonly start: $.DateValue | null;
readonly end: $.DateValue | null;
readonly duration: string | null;
readonly recovered_energy_kwh: number | null;
static __fields = [["start", $.MISSING], ["end", $.MISSING], ["duration", $.MISSING], ["recovered_energy_kwh", $.MISSING]];
constructor(start: $.DateValue | null, end: $.DateValue | null, duration: string | null, recovered_energy_kwh: number | null);
constructor(options: { start: $.DateValue | null; end: $.DateValue | null; duration: string | null; recovered_energy_kwh: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargeSession, __args);  Object.freeze(this); }
}
$.classType(ChargeSession);

/** Aggregated charge history; energy is in kWh and duration is in minutes. */
export class ChargeHistorySummary {
readonly day: number | null;
readonly month: number | null;
readonly year: number | null;
readonly number_of_charge_sessions: number | null;
readonly total_energy_recovered_kwh: number | null;
readonly total_duration_minutes: number | null;
readonly number_of_errors: number | null;
readonly user_id: string | null;
readonly role_type: string | null;
static __fields = [["day", $.MISSING], ["month", $.MISSING], ["year", $.MISSING], ["number_of_charge_sessions", $.MISSING], ["total_energy_recovered_kwh", $.MISSING], ["total_duration_minutes", $.MISSING], ["number_of_errors", $.MISSING], ["user_id", $.MISSING], ["role_type", $.MISSING]];
constructor(day: number | null, month: number | null, year: number | null, number_of_charge_sessions: number | null, total_energy_recovered_kwh: number | null, total_duration_minutes: number | null, number_of_errors: number | null, user_id: string | null, role_type: string | null);
constructor(options: { day: number | null; month: number | null; year: number | null; number_of_charge_sessions: number | null; total_energy_recovered_kwh: number | null; total_duration_minutes: number | null; number_of_errors: number | null; user_id: string | null; role_type: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ChargeHistorySummary, __args);  Object.freeze(this); }
}
$.classType(ChargeHistorySummary);

/** Charging sessions and summaries for one requested time aggregation. */
export class VehicleChargeHistory {
readonly charges: ReadonlyArray<ChargeSession>;
readonly charge_summaries: ReadonlyArray<ChargeHistorySummary>;
static __fields = [["charges", $.MISSING], ["charge_summaries", $.MISSING]];
constructor(charges: ReadonlyArray<ChargeSession>, charge_summaries: ReadonlyArray<ChargeHistorySummary>);
constructor(options: { charges: ReadonlyArray<ChargeSession>; charge_summaries: ReadonlyArray<ChargeHistorySummary> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleChargeHistory, __args);  Object.freeze(this); }
}
$.classType(VehicleChargeHistory);

/** A recurring cabin climate schedule. */
export class ClimateSchedule {
readonly id: string;
readonly state: string | null;
readonly start_date_time: $.DateValue;
readonly week_days: ReadonlyArray<WeekDay>;
readonly temperature: TemperatureReading;
static __fields = [["id", $.MISSING], ["state", $.MISSING], ["start_date_time", $.MISSING], ["week_days", $.MISSING], ["temperature", $.MISSING]];
constructor(id: string, state: string | null, start_date_time: $.DateValue, week_days: ReadonlyArray<WeekDay>, temperature: TemperatureReading);
constructor(options: { id: string; state: string | null; start_date_time: $.DateValue; week_days: ReadonlyArray<WeekDay>; temperature: TemperatureReading });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ClimateSchedule, __args);  Object.freeze(this); }
}
$.classType(ClimateSchedule);

/** The one-time delayed climate start configured for an Ariya. */
export class DelayedClimateSchedule {
readonly start_date_time: $.DateValue | null;
static __fields = [["start_date_time", $.MISSING]];
constructor(start_date_time: $.DateValue | null);
constructor(options: { start_date_time: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DelayedClimateSchedule, __args);  Object.freeze(this); }
}
$.classType(DelayedClimateSchedule);

/** Recurring schedules and vehicle-level climate schedule settings. */
export class VehicleClimateSchedules {
readonly schedules: ReadonlyArray<ClimateSchedule>;
readonly accessories: ClimateParameters | null;
readonly delayed_schedule: DelayedClimateSchedule | null;
static __fields = [["schedules", $.MISSING], ["accessories", $.MISSING], ["delayed_schedule", $.MISSING]];
constructor(schedules: ReadonlyArray<ClimateSchedule>, accessories: ClimateParameters | null, delayed_schedule: DelayedClimateSchedule | null);
constructor(options: { schedules: ReadonlyArray<ClimateSchedule>; accessories: ClimateParameters | null; delayed_schedule: DelayedClimateSchedule | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleClimateSchedules, __args);  Object.freeze(this); }
}
$.classType(VehicleClimateSchedules);

/** The vehicle's saved default climate configuration. */
export class ClimateDefaults {
readonly climate: TemperatureReading | null;
readonly parameters: ClimateParameters | null;
static __fields = [["climate", $.MISSING], ["parameters", $.MISSING]];
constructor(climate: TemperatureReading | null, parameters: ClimateParameters | null);
constructor(options: { climate: TemperatureReading | null; parameters: ClimateParameters | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ClimateDefaults, __args);  Object.freeze(this); }
}
$.classType(ClimateDefaults);
