import { py as $ } from "./_runtime";
import { DistanceUnit } from "./models";
export { DistanceUnit };
export declare const WarrantyServiceContractStatus: $.EnumType<{
    readonly ACTIVE: "ACTIVE";
    readonly EXPIRED: "EXPIRED";
    readonly CANCELLED: "CANCELLED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type WarrantyServiceContractStatus = ReturnType<typeof WarrantyServiceContractStatus>;
export declare const PartsReminderStatus: $.EnumType<{
    readonly ACTIVE: "ACTIVE";
    readonly OVERDUE: "OVERDUE";
    readonly SYNC_PENDING: "SYNC_PENDING";
    readonly ERROR: "ERROR";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type PartsReminderStatus = ReturnType<typeof PartsReminderStatus>;
/** Current and projected service milestones for a vehicle. */
export declare class MaintenanceTimeline {
    readonly last_service_date: $.DateValue;
    readonly last_service_mileage: number;
    readonly next_service_date: $.DateValue;
    readonly next_service_mileage: number;
    readonly remaining_service_mileage: number;
    readonly remaining_service_months: number;
    readonly mileage_unit: DistanceUnit;
    readonly current_mileage: number;
    static __fields: (string | symbol)[][];
    constructor(last_service_date: $.DateValue, last_service_mileage: number, next_service_date: $.DateValue, next_service_mileage: number, remaining_service_mileage: number, remaining_service_months: number, mileage_unit: DistanceUnit, current_mileage: number);
    constructor(options: {
        last_service_date: $.DateValue;
        last_service_mileage: number;
        next_service_date: $.DateValue;
        next_service_mileage: number;
        remaining_service_mileage: number;
        remaining_service_months: number;
        mileage_unit: DistanceUnit;
        current_mileage: number;
    });
}
/** Nullable coverage details for one vehicle service contract. */
export declare class ServiceContract {
    readonly status: WarrantyServiceContractStatus | null;
    readonly coverage: string | null;
    readonly coverage_description: string | null;
    readonly coverage_name: string | null;
    readonly plan_effective_date: $.DateValue | null;
    readonly plan_effective_miles: number | null;
    readonly plan_expiration_date: $.DateValue | null;
    readonly plan_expiration_odometer: number | null;
    readonly plan_cancelled_date: $.DateValue | null;
    readonly plan_cancelled_odometer: number | null;
    readonly agreement: string | null;
    readonly deductible_amount: number | null;
    readonly expiring_soon: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(status: WarrantyServiceContractStatus | null, coverage: string | null, coverage_description: string | null, coverage_name: string | null, plan_effective_date: $.DateValue | null, plan_effective_miles: number | null, plan_expiration_date: $.DateValue | null, plan_expiration_odometer: number | null, plan_cancelled_date: $.DateValue | null, plan_cancelled_odometer: number | null, agreement: string | null, deductible_amount: number | null, expiring_soon: boolean | null);
    constructor(options: {
        status: WarrantyServiceContractStatus | null;
        coverage: string | null;
        coverage_description: string | null;
        coverage_name: string | null;
        plan_effective_date: $.DateValue | null;
        plan_effective_miles: number | null;
        plan_expiration_date: $.DateValue | null;
        plan_expiration_odometer: number | null;
        plan_cancelled_date: $.DateValue | null;
        plan_cancelled_odometer: number | null;
        agreement: string | null;
        deductible_amount: number | null;
        expiring_soon: boolean | null;
    });
}
/** Successful add or update of a past service record. */
export declare class PastServiceSuccess {
    readonly success: boolean;
    static __fields: (string | symbol)[][];
    constructor(success: boolean);
    constructor(options: {
        success: boolean;
    });
}
/** General registration failure returned for a past service record. */
export declare class PastServiceGeneralError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Conflict returned when an equivalent past service already exists. */
export declare class PastServiceExists {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Future past-service union member not known by this SDK version. */
export declare class UnknownPastServiceResult {
    readonly typename: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string);
    constructor(options: {
        typename: string;
    });
}
export type PastServiceResult = PastServiceSuccess | PastServiceGeneralError | PastServiceExists | UnknownPastServiceResult;
/** Allowed range and step for a configurable reminder interval. */
export declare class PartsReminderConfigurationThresholds {
    readonly min: number;
    readonly max: number;
    readonly interval: number;
    readonly distance_unit: DistanceUnit | null;
    static __fields: (string | symbol)[][];
    constructor(min: number, max: number, interval: number, distance_unit: DistanceUnit | null);
    constructor(options: {
        min: number;
        max: number;
        interval: number;
        distance_unit: DistanceUnit | null;
    });
}
/** Optional month and distance thresholds for one service part. */
export declare class PartReminderConfiguration {
    readonly months: PartsReminderConfigurationThresholds | null;
    readonly distance: PartsReminderConfigurationThresholds | null;
    static __fields: (string | symbol)[][];
    constructor(months: PartsReminderConfigurationThresholds | null, distance: PartsReminderConfigurationThresholds | null);
    constructor(options: {
        months: PartsReminderConfigurationThresholds | null;
        distance: PartsReminderConfigurationThresholds | null;
    });
}
/** A service part that can be attached to a reminder. */
export declare class MaintenancePart {
    readonly id: string | null;
    readonly name: string;
    readonly reminder_configuration: PartReminderConfiguration | null;
    static __fields: (string | symbol)[][];
    constructor(id: string | null, name: string, reminder_configuration: PartReminderConfiguration | null);
    constructor(options: {
        id: string | null;
        name: string;
        reminder_configuration: PartReminderConfiguration | null;
    });
}
/** Integer distance and unit returned for a parts reminder. */
export declare class ReminderDistance {
    readonly unit: DistanceUnit;
    readonly value: number;
    static __fields: (string | symbol)[][];
    constructor(unit: DistanceUnit, value: number);
    constructor(options: {
        unit: DistanceUnit;
        value: number;
    });
}
/** One parts reminder and its current scheduling state. */
export declare class PartsReminder {
    readonly id: string;
    readonly overdue: boolean;
    readonly date: $.DateValue | null;
    readonly months_interval: number | null;
    readonly distance_interval: ReminderDistance | null;
    readonly next_reminder_distance: ReminderDistance | null;
    readonly next_reminder_date: $.DateValue | null;
    readonly status: PartsReminderStatus | null;
    readonly parts: ReadonlyArray<MaintenancePart>;
    readonly mileage: ReminderDistance | null;
    static __fields: (string | symbol)[][];
    constructor(id: string, overdue: boolean, date: $.DateValue | null, months_interval: number | null, distance_interval: ReminderDistance | null, next_reminder_distance: ReminderDistance | null, next_reminder_date: $.DateValue | null, status: PartsReminderStatus | null, parts: ReadonlyArray<MaintenancePart>, mileage: ReminderDistance | null);
    constructor(options: {
        id: string;
        overdue: boolean;
        date: $.DateValue | null;
        months_interval: number | null;
        distance_interval: ReminderDistance | null;
        next_reminder_distance: ReminderDistance | null;
        next_reminder_date: $.DateValue | null;
        status: PartsReminderStatus | null;
        parts: ReadonlyArray<MaintenancePart>;
        mileage: ReminderDistance | null;
    });
}
/** Nullable part catalog and reminders available for an AVK2 vehicle. */
export declare class VehiclePartsReminders {
    readonly parts: ReadonlyArray<MaintenancePart | null> | null;
    readonly reminders: ReadonlyArray<PartsReminder | null> | null;
    static __fields: (string | symbol)[][];
    constructor(parts: ReadonlyArray<MaintenancePart | null> | null, reminders: ReadonlyArray<PartsReminder | null> | null);
    constructor(options: {
        parts: ReadonlyArray<MaintenancePart | null> | null;
        reminders: ReadonlyArray<PartsReminder | null> | null;
    });
}
/** Nullable success flag returned by a parts-reminder mutation. */
export declare class PartsReminderMutationResult {
    readonly typename: string;
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, success: boolean | null);
    constructor(options: {
        typename: string;
        success: boolean | null;
    });
}
/** One collision report known to the vehicle account. */
export declare class CollisionHistoryEntry {
    readonly collision_id: string;
    readonly report_date_time: $.DateValue | null;
    readonly collision_date_time: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(collision_id: string, report_date_time: $.DateValue | null, collision_date_time: $.DateValue | null);
    constructor(options: {
        collision_id: string;
        report_date_time: $.DateValue | null;
        collision_date_time: $.DateValue | null;
    });
}
/** Vehicle telemetry captured at the time of a collision. */
export declare class CollisionProbeReading {
    readonly collision_time: $.DateValue;
    readonly latitude: number;
    readonly longitude: number;
    readonly mil_count: number;
    readonly mil_data: string;
    readonly odometer: number;
    readonly speed: number;
    readonly unit: DistanceUnit;
    static __fields: (string | symbol)[][];
    constructor(collision_time: $.DateValue, latitude: number, longitude: number, mil_count: number, mil_data: string, odometer: number, speed: number, unit: DistanceUnit);
    constructor(options: {
        collision_time: $.DateValue;
        latitude: number;
        longitude: number;
        mil_count: number;
        mil_data: string;
        odometer: number;
        speed: number;
        unit: DistanceUnit;
    });
}
