"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionProbeReading = exports.CollisionHistoryEntry = exports.PartsReminderMutationResult = exports.VehiclePartsReminders = exports.PartsReminder = exports.ReminderDistance = exports.MaintenancePart = exports.PartReminderConfiguration = exports.PartsReminderConfigurationThresholds = exports.UnknownPastServiceResult = exports.PastServiceExists = exports.PastServiceGeneralError = exports.PastServiceSuccess = exports.ServiceContract = exports.MaintenanceTimeline = exports.PartsReminderStatus = exports.WarrantyServiceContractStatus = exports.DistanceUnit = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const date = _runtime_1.py.date;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
exports.WarrantyServiceContractStatus = _runtime_1.py.enumType("WarrantyServiceContractStatus", { "ACTIVE": "ACTIVE", "EXPIRED": "EXPIRED", "CANCELLED": "CANCELLED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.PartsReminderStatus = _runtime_1.py.enumType("PartsReminderStatus", { "ACTIVE": "ACTIVE", "OVERDUE": "OVERDUE", "SYNC_PENDING": "SYNC_PENDING", "ERROR": "ERROR", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Current and projected service milestones for a vehicle. */
class MaintenanceTimeline {
    last_service_date;
    last_service_mileage;
    next_service_date;
    next_service_mileage;
    remaining_service_mileage;
    remaining_service_months;
    mileage_unit;
    current_mileage;
    static __fields = [["last_service_date", _runtime_1.py.MISSING], ["last_service_mileage", _runtime_1.py.MISSING], ["next_service_date", _runtime_1.py.MISSING], ["next_service_mileage", _runtime_1.py.MISSING], ["remaining_service_mileage", _runtime_1.py.MISSING], ["remaining_service_months", _runtime_1.py.MISSING], ["mileage_unit", _runtime_1.py.MISSING], ["current_mileage", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MaintenanceTimeline, __args); Object.freeze(this); }
}
exports.MaintenanceTimeline = MaintenanceTimeline;
_runtime_1.py.classType(MaintenanceTimeline);
/** Nullable coverage details for one vehicle service contract. */
class ServiceContract {
    status;
    coverage;
    coverage_description;
    coverage_name;
    plan_effective_date;
    plan_effective_miles;
    plan_expiration_date;
    plan_expiration_odometer;
    plan_cancelled_date;
    plan_cancelled_odometer;
    agreement;
    deductible_amount;
    expiring_soon;
    static __fields = [["status", _runtime_1.py.MISSING], ["coverage", _runtime_1.py.MISSING], ["coverage_description", _runtime_1.py.MISSING], ["coverage_name", _runtime_1.py.MISSING], ["plan_effective_date", _runtime_1.py.MISSING], ["plan_effective_miles", _runtime_1.py.MISSING], ["plan_expiration_date", _runtime_1.py.MISSING], ["plan_expiration_odometer", _runtime_1.py.MISSING], ["plan_cancelled_date", _runtime_1.py.MISSING], ["plan_cancelled_odometer", _runtime_1.py.MISSING], ["agreement", _runtime_1.py.MISSING], ["deductible_amount", _runtime_1.py.MISSING], ["expiring_soon", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceContract, __args); Object.freeze(this); }
}
exports.ServiceContract = ServiceContract;
_runtime_1.py.classType(ServiceContract);
/** Successful add or update of a past service record. */
class PastServiceSuccess {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PastServiceSuccess, __args); Object.freeze(this); }
}
exports.PastServiceSuccess = PastServiceSuccess;
_runtime_1.py.classType(PastServiceSuccess);
/** General registration failure returned for a past service record. */
class PastServiceGeneralError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PastServiceGeneralError, __args); Object.freeze(this); }
}
exports.PastServiceGeneralError = PastServiceGeneralError;
_runtime_1.py.classType(PastServiceGeneralError);
/** Conflict returned when an equivalent past service already exists. */
class PastServiceExists {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PastServiceExists, __args); Object.freeze(this); }
}
exports.PastServiceExists = PastServiceExists;
_runtime_1.py.classType(PastServiceExists);
/** Future past-service union member not known by this SDK version. */
class UnknownPastServiceResult {
    typename;
    static __fields = [["typename", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnknownPastServiceResult, __args); Object.freeze(this); }
}
exports.UnknownPastServiceResult = UnknownPastServiceResult;
_runtime_1.py.classType(UnknownPastServiceResult);
/** Allowed range and step for a configurable reminder interval. */
class PartsReminderConfigurationThresholds {
    min;
    max;
    interval;
    distance_unit;
    static __fields = [["min", _runtime_1.py.MISSING], ["max", _runtime_1.py.MISSING], ["interval", _runtime_1.py.MISSING], ["distance_unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PartsReminderConfigurationThresholds, __args); Object.freeze(this); }
}
exports.PartsReminderConfigurationThresholds = PartsReminderConfigurationThresholds;
_runtime_1.py.classType(PartsReminderConfigurationThresholds);
/** Optional month and distance thresholds for one service part. */
class PartReminderConfiguration {
    months;
    distance;
    static __fields = [["months", _runtime_1.py.MISSING], ["distance", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PartReminderConfiguration, __args); Object.freeze(this); }
}
exports.PartReminderConfiguration = PartReminderConfiguration;
_runtime_1.py.classType(PartReminderConfiguration);
/** A service part that can be attached to a reminder. */
class MaintenancePart {
    id;
    name;
    reminder_configuration;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["reminder_configuration", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MaintenancePart, __args); Object.freeze(this); }
}
exports.MaintenancePart = MaintenancePart;
_runtime_1.py.classType(MaintenancePart);
/** Integer distance and unit returned for a parts reminder. */
class ReminderDistance {
    unit;
    value;
    static __fields = [["unit", _runtime_1.py.MISSING], ["value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ReminderDistance, __args); Object.freeze(this); }
}
exports.ReminderDistance = ReminderDistance;
_runtime_1.py.classType(ReminderDistance);
/** One parts reminder and its current scheduling state. */
class PartsReminder {
    id;
    overdue;
    date;
    months_interval;
    distance_interval;
    next_reminder_distance;
    next_reminder_date;
    status;
    parts;
    mileage;
    static __fields = [["id", _runtime_1.py.MISSING], ["overdue", _runtime_1.py.MISSING], ["date", _runtime_1.py.MISSING], ["months_interval", _runtime_1.py.MISSING], ["distance_interval", _runtime_1.py.MISSING], ["next_reminder_distance", _runtime_1.py.MISSING], ["next_reminder_date", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING], ["parts", _runtime_1.py.MISSING], ["mileage", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PartsReminder, __args); Object.freeze(this); }
}
exports.PartsReminder = PartsReminder;
_runtime_1.py.classType(PartsReminder);
/** Nullable part catalog and reminders available for an AVK2 vehicle. */
class VehiclePartsReminders {
    parts;
    reminders;
    static __fields = [["parts", _runtime_1.py.MISSING], ["reminders", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehiclePartsReminders, __args); Object.freeze(this); }
}
exports.VehiclePartsReminders = VehiclePartsReminders;
_runtime_1.py.classType(VehiclePartsReminders);
/** Nullable success flag returned by a parts-reminder mutation. */
class PartsReminderMutationResult {
    typename;
    success;
    static __fields = [["typename", _runtime_1.py.MISSING], ["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PartsReminderMutationResult, __args); Object.freeze(this); }
}
exports.PartsReminderMutationResult = PartsReminderMutationResult;
_runtime_1.py.classType(PartsReminderMutationResult);
/** One collision report known to the vehicle account. */
class CollisionHistoryEntry {
    collision_id;
    report_date_time;
    collision_date_time;
    static __fields = [["collision_id", _runtime_1.py.MISSING], ["report_date_time", _runtime_1.py.MISSING], ["collision_date_time", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionHistoryEntry, __args); Object.freeze(this); }
}
exports.CollisionHistoryEntry = CollisionHistoryEntry;
_runtime_1.py.classType(CollisionHistoryEntry);
/** Vehicle telemetry captured at the time of a collision. */
class CollisionProbeReading {
    collision_time;
    latitude;
    longitude;
    mil_count;
    mil_data;
    odometer;
    speed;
    unit;
    static __fields = [["collision_time", _runtime_1.py.MISSING], ["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING], ["mil_count", _runtime_1.py.MISSING], ["mil_data", _runtime_1.py.MISSING], ["odometer", _runtime_1.py.MISSING], ["speed", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionProbeReading, __args); Object.freeze(this); }
}
exports.CollisionProbeReading = CollisionProbeReading;
_runtime_1.py.classType(CollisionProbeReading);
//# sourceMappingURL=maintenance_models.js.map