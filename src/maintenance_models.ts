// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const date = $.date;
const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { DistanceUnit } from "./models";
export { DistanceUnit };

export const WarrantyServiceContractStatus = $.enumType("WarrantyServiceContractStatus", {"ACTIVE": "ACTIVE", "EXPIRED": "EXPIRED", "CANCELLED": "CANCELLED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type WarrantyServiceContractStatus = ReturnType<typeof WarrantyServiceContractStatus>;

export const PartsReminderStatus = $.enumType("PartsReminderStatus", {"ACTIVE": "ACTIVE", "OVERDUE": "OVERDUE", "SYNC_PENDING": "SYNC_PENDING", "ERROR": "ERROR", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type PartsReminderStatus = ReturnType<typeof PartsReminderStatus>;

/** Current and projected service milestones for a vehicle. */
export class MaintenanceTimeline {
readonly last_service_date: $.DateValue;
readonly last_service_mileage: number;
readonly next_service_date: $.DateValue;
readonly next_service_mileage: number;
readonly remaining_service_mileage: number;
readonly remaining_service_months: number;
readonly mileage_unit: DistanceUnit;
readonly current_mileage: number;
static __fields = [["last_service_date", $.MISSING], ["last_service_mileage", $.MISSING], ["next_service_date", $.MISSING], ["next_service_mileage", $.MISSING], ["remaining_service_mileage", $.MISSING], ["remaining_service_months", $.MISSING], ["mileage_unit", $.MISSING], ["current_mileage", $.MISSING]];
constructor(last_service_date: $.DateValue, last_service_mileage: number, next_service_date: $.DateValue, next_service_mileage: number, remaining_service_mileage: number, remaining_service_months: number, mileage_unit: DistanceUnit, current_mileage: number);
constructor(options: { last_service_date: $.DateValue; last_service_mileage: number; next_service_date: $.DateValue; next_service_mileage: number; remaining_service_mileage: number; remaining_service_months: number; mileage_unit: DistanceUnit; current_mileage: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MaintenanceTimeline, __args);  Object.freeze(this); }
}
$.classType(MaintenanceTimeline);

/** Nullable coverage details for one vehicle service contract. */
export class ServiceContract {
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
static __fields = [["status", $.MISSING], ["coverage", $.MISSING], ["coverage_description", $.MISSING], ["coverage_name", $.MISSING], ["plan_effective_date", $.MISSING], ["plan_effective_miles", $.MISSING], ["plan_expiration_date", $.MISSING], ["plan_expiration_odometer", $.MISSING], ["plan_cancelled_date", $.MISSING], ["plan_cancelled_odometer", $.MISSING], ["agreement", $.MISSING], ["deductible_amount", $.MISSING], ["expiring_soon", $.MISSING]];
constructor(status: WarrantyServiceContractStatus | null, coverage: string | null, coverage_description: string | null, coverage_name: string | null, plan_effective_date: $.DateValue | null, plan_effective_miles: number | null, plan_expiration_date: $.DateValue | null, plan_expiration_odometer: number | null, plan_cancelled_date: $.DateValue | null, plan_cancelled_odometer: number | null, agreement: string | null, deductible_amount: number | null, expiring_soon: boolean | null);
constructor(options: { status: WarrantyServiceContractStatus | null; coverage: string | null; coverage_description: string | null; coverage_name: string | null; plan_effective_date: $.DateValue | null; plan_effective_miles: number | null; plan_expiration_date: $.DateValue | null; plan_expiration_odometer: number | null; plan_cancelled_date: $.DateValue | null; plan_cancelled_odometer: number | null; agreement: string | null; deductible_amount: number | null; expiring_soon: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceContract, __args);  Object.freeze(this); }
}
$.classType(ServiceContract);

/** Successful add or update of a past service record. */
export class PastServiceSuccess {
readonly success: boolean;
static __fields = [["success", $.MISSING]];
constructor(success: boolean);
constructor(options: { success: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PastServiceSuccess, __args);  Object.freeze(this); }
}
$.classType(PastServiceSuccess);

/** General registration failure returned for a past service record. */
export class PastServiceGeneralError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PastServiceGeneralError, __args);  Object.freeze(this); }
}
$.classType(PastServiceGeneralError);

/** Conflict returned when an equivalent past service already exists. */
export class PastServiceExists {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PastServiceExists, __args);  Object.freeze(this); }
}
$.classType(PastServiceExists);

/** Future past-service union member not known by this SDK version. */
export class UnknownPastServiceResult {
readonly typename: string;
static __fields = [["typename", $.MISSING]];
constructor(typename: string);
constructor(options: { typename: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnknownPastServiceResult, __args);  Object.freeze(this); }
}
$.classType(UnknownPastServiceResult);

export type PastServiceResult = PastServiceSuccess | PastServiceGeneralError | PastServiceExists | UnknownPastServiceResult;

/** Allowed range and step for a configurable reminder interval. */
export class PartsReminderConfigurationThresholds {
readonly min: number;
readonly max: number;
readonly interval: number;
readonly distance_unit: DistanceUnit | null;
static __fields = [["min", $.MISSING], ["max", $.MISSING], ["interval", $.MISSING], ["distance_unit", $.MISSING]];
constructor(min: number, max: number, interval: number, distance_unit: DistanceUnit | null);
constructor(options: { min: number; max: number; interval: number; distance_unit: DistanceUnit | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PartsReminderConfigurationThresholds, __args);  Object.freeze(this); }
}
$.classType(PartsReminderConfigurationThresholds);

/** Optional month and distance thresholds for one service part. */
export class PartReminderConfiguration {
readonly months: PartsReminderConfigurationThresholds | null;
readonly distance: PartsReminderConfigurationThresholds | null;
static __fields = [["months", $.MISSING], ["distance", $.MISSING]];
constructor(months: PartsReminderConfigurationThresholds | null, distance: PartsReminderConfigurationThresholds | null);
constructor(options: { months: PartsReminderConfigurationThresholds | null; distance: PartsReminderConfigurationThresholds | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PartReminderConfiguration, __args);  Object.freeze(this); }
}
$.classType(PartReminderConfiguration);

/** A service part that can be attached to a reminder. */
export class MaintenancePart {
readonly id: string | null;
readonly name: string;
readonly reminder_configuration: PartReminderConfiguration | null;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["reminder_configuration", $.MISSING]];
constructor(id: string | null, name: string, reminder_configuration: PartReminderConfiguration | null);
constructor(options: { id: string | null; name: string; reminder_configuration: PartReminderConfiguration | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MaintenancePart, __args);  Object.freeze(this); }
}
$.classType(MaintenancePart);

/** Integer distance and unit returned for a parts reminder. */
export class ReminderDistance {
readonly unit: DistanceUnit;
readonly value: number;
static __fields = [["unit", $.MISSING], ["value", $.MISSING]];
constructor(unit: DistanceUnit, value: number);
constructor(options: { unit: DistanceUnit; value: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ReminderDistance, __args);  Object.freeze(this); }
}
$.classType(ReminderDistance);

/** One parts reminder and its current scheduling state. */
export class PartsReminder {
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
static __fields = [["id", $.MISSING], ["overdue", $.MISSING], ["date", $.MISSING], ["months_interval", $.MISSING], ["distance_interval", $.MISSING], ["next_reminder_distance", $.MISSING], ["next_reminder_date", $.MISSING], ["status", $.MISSING], ["parts", $.MISSING], ["mileage", $.MISSING]];
constructor(id: string, overdue: boolean, date: $.DateValue | null, months_interval: number | null, distance_interval: ReminderDistance | null, next_reminder_distance: ReminderDistance | null, next_reminder_date: $.DateValue | null, status: PartsReminderStatus | null, parts: ReadonlyArray<MaintenancePart>, mileage: ReminderDistance | null);
constructor(options: { id: string; overdue: boolean; date: $.DateValue | null; months_interval: number | null; distance_interval: ReminderDistance | null; next_reminder_distance: ReminderDistance | null; next_reminder_date: $.DateValue | null; status: PartsReminderStatus | null; parts: ReadonlyArray<MaintenancePart>; mileage: ReminderDistance | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PartsReminder, __args);  Object.freeze(this); }
}
$.classType(PartsReminder);

/** Nullable part catalog and reminders available for an AVK2 vehicle. */
export class VehiclePartsReminders {
readonly parts: ReadonlyArray<MaintenancePart | null> | null;
readonly reminders: ReadonlyArray<PartsReminder | null> | null;
static __fields = [["parts", $.MISSING], ["reminders", $.MISSING]];
constructor(parts: ReadonlyArray<MaintenancePart | null> | null, reminders: ReadonlyArray<PartsReminder | null> | null);
constructor(options: { parts: ReadonlyArray<MaintenancePart | null> | null; reminders: ReadonlyArray<PartsReminder | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehiclePartsReminders, __args);  Object.freeze(this); }
}
$.classType(VehiclePartsReminders);

/** Nullable success flag returned by a parts-reminder mutation. */
export class PartsReminderMutationResult {
readonly typename: string;
readonly success: boolean | null;
static __fields = [["typename", $.MISSING], ["success", $.MISSING]];
constructor(typename: string, success: boolean | null);
constructor(options: { typename: string; success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PartsReminderMutationResult, __args);  Object.freeze(this); }
}
$.classType(PartsReminderMutationResult);

/** One collision report known to the vehicle account. */
export class CollisionHistoryEntry {
readonly collision_id: string;
readonly report_date_time: $.DateValue | null;
readonly collision_date_time: $.DateValue | null;
static __fields = [["collision_id", $.MISSING], ["report_date_time", $.MISSING], ["collision_date_time", $.MISSING]];
constructor(collision_id: string, report_date_time: $.DateValue | null, collision_date_time: $.DateValue | null);
constructor(options: { collision_id: string; report_date_time: $.DateValue | null; collision_date_time: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionHistoryEntry, __args);  Object.freeze(this); }
}
$.classType(CollisionHistoryEntry);

/** Vehicle telemetry captured at the time of a collision. */
export class CollisionProbeReading {
readonly collision_time: $.DateValue;
readonly latitude: number;
readonly longitude: number;
readonly mil_count: number;
readonly mil_data: string;
readonly odometer: number;
readonly speed: number;
readonly unit: DistanceUnit;
static __fields = [["collision_time", $.MISSING], ["latitude", $.MISSING], ["longitude", $.MISSING], ["mil_count", $.MISSING], ["mil_data", $.MISSING], ["odometer", $.MISSING], ["speed", $.MISSING], ["unit", $.MISSING]];
constructor(collision_time: $.DateValue, latitude: number, longitude: number, mil_count: number, mil_data: string, odometer: number, speed: number, unit: DistanceUnit);
constructor(options: { collision_time: $.DateValue; latitude: number; longitude: number; mil_count: number; mil_data: string; odometer: number; speed: number; unit: DistanceUnit });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionProbeReading, __args);  Object.freeze(this); }
}
$.classType(CollisionProbeReading);
