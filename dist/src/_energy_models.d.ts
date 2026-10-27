import { py as $ } from "./_runtime";
import { V2LState, WeekDay } from "./_core_models";
export { V2LState, WeekDay };
import { ClimateParameters } from "./_request_models";
export { ClimateParameters };
import { TemperatureReading } from "./_vehicle_status_models";
export { TemperatureReading };
/** A recurring vehicle charging schedule. */
export declare class ChargeSchedule {
    readonly id: string;
    readonly state: string | null;
    readonly start_date_time: $.DateValue;
    readonly duration: string;
    readonly week_days: ReadonlyArray<WeekDay>;
    static __fields: (string | symbol)[][];
    constructor(id: string, state: string | null, start_date_time: $.DateValue, duration: string, week_days: ReadonlyArray<WeekDay>);
    constructor(options: {
        id: string;
        state: string | null;
        start_date_time: $.DateValue;
        duration: string;
        week_days: ReadonlyArray<WeekDay>;
    });
}
/** Configured charging and notification limits, expressed as percentages. */
export declare class ChargeConfig {
    readonly charge_limit_percent: number | null;
    readonly notification_threshold_percent: number | null;
    static __fields: (string | symbol)[][];
    constructor(charge_limit_percent: number | null, notification_threshold_percent: number | null);
    constructor(options: {
        charge_limit_percent: number | null;
        notification_threshold_percent: number | null;
    });
}
/** V2L state and battery reserve levels, expressed as percentages. */
export declare class V2LStatus {
    readonly state: V2LState | null;
    readonly charge_limit_percent: number | null;
    readonly minimum_charge_limit_percent: number | null;
    static __fields: (string | symbol)[][];
    constructor(state: V2LState | null, charge_limit_percent: number | null, minimum_charge_limit_percent: number | null);
    constructor(options: {
        state: V2LState | null;
        charge_limit_percent: number | null;
        minimum_charge_limit_percent: number | null;
    });
}
/** One charging session; recovered energy is expressed in kilowatt-hours. */
export declare class ChargeSession {
    readonly start: $.DateValue | null;
    readonly end: $.DateValue | null;
    readonly duration: string | null;
    readonly recovered_energy_kwh: number | null;
    static __fields: (string | symbol)[][];
    constructor(start: $.DateValue | null, end: $.DateValue | null, duration: string | null, recovered_energy_kwh: number | null);
    constructor(options: {
        start: $.DateValue | null;
        end: $.DateValue | null;
        duration: string | null;
        recovered_energy_kwh: number | null;
    });
}
/** Aggregated charge history; energy is in kWh and duration is in minutes. */
export declare class ChargeHistorySummary {
    readonly day: number | null;
    readonly month: number | null;
    readonly year: number | null;
    readonly number_of_charge_sessions: number | null;
    readonly total_energy_recovered_kwh: number | null;
    readonly total_duration_minutes: number | null;
    readonly number_of_errors: number | null;
    readonly user_id: string | null;
    readonly role_type: string | null;
    static __fields: (string | symbol)[][];
    constructor(day: number | null, month: number | null, year: number | null, number_of_charge_sessions: number | null, total_energy_recovered_kwh: number | null, total_duration_minutes: number | null, number_of_errors: number | null, user_id: string | null, role_type: string | null);
    constructor(options: {
        day: number | null;
        month: number | null;
        year: number | null;
        number_of_charge_sessions: number | null;
        total_energy_recovered_kwh: number | null;
        total_duration_minutes: number | null;
        number_of_errors: number | null;
        user_id: string | null;
        role_type: string | null;
    });
}
/** Charging sessions and summaries for one requested time aggregation. */
export declare class VehicleChargeHistory {
    readonly charges: ReadonlyArray<ChargeSession>;
    readonly charge_summaries: ReadonlyArray<ChargeHistorySummary>;
    static __fields: (string | symbol)[][];
    constructor(charges: ReadonlyArray<ChargeSession>, charge_summaries: ReadonlyArray<ChargeHistorySummary>);
    constructor(options: {
        charges: ReadonlyArray<ChargeSession>;
        charge_summaries: ReadonlyArray<ChargeHistorySummary>;
    });
}
/** A recurring cabin climate schedule. */
export declare class ClimateSchedule {
    readonly id: string;
    readonly state: string | null;
    readonly start_date_time: $.DateValue;
    readonly week_days: ReadonlyArray<WeekDay>;
    readonly temperature: TemperatureReading;
    static __fields: (string | symbol)[][];
    constructor(id: string, state: string | null, start_date_time: $.DateValue, week_days: ReadonlyArray<WeekDay>, temperature: TemperatureReading);
    constructor(options: {
        id: string;
        state: string | null;
        start_date_time: $.DateValue;
        week_days: ReadonlyArray<WeekDay>;
        temperature: TemperatureReading;
    });
}
/** The one-time delayed climate start configured for an Ariya. */
export declare class DelayedClimateSchedule {
    readonly start_date_time: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(start_date_time: $.DateValue | null);
    constructor(options: {
        start_date_time: $.DateValue | null;
    });
}
/** Recurring schedules and vehicle-level climate schedule settings. */
export declare class VehicleClimateSchedules {
    readonly schedules: ReadonlyArray<ClimateSchedule>;
    readonly accessories: ClimateParameters | null;
    readonly delayed_schedule: DelayedClimateSchedule | null;
    static __fields: (string | symbol)[][];
    constructor(schedules: ReadonlyArray<ClimateSchedule>, accessories: ClimateParameters | null, delayed_schedule: DelayedClimateSchedule | null);
    constructor(options: {
        schedules: ReadonlyArray<ClimateSchedule>;
        accessories: ClimateParameters | null;
        delayed_schedule: DelayedClimateSchedule | null;
    });
}
/** The vehicle's saved default climate configuration. */
export declare class ClimateDefaults {
    readonly climate: TemperatureReading | null;
    readonly parameters: ClimateParameters | null;
    static __fields: (string | symbol)[][];
    constructor(climate: TemperatureReading | null, parameters: ClimateParameters | null);
    constructor(options: {
        climate: TemperatureReading | null;
        parameters: ClimateParameters | null;
    });
}
