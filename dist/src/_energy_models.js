"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimateDefaults = exports.VehicleClimateSchedules = exports.DelayedClimateSchedule = exports.ClimateSchedule = exports.VehicleChargeHistory = exports.ChargeHistorySummary = exports.ChargeSession = exports.V2LStatus = exports.ChargeConfig = exports.ChargeSchedule = exports.TemperatureReading = exports.ClimateParameters = exports.WeekDay = exports.V2LState = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const _core_models_1 = require("./_core_models");
Object.defineProperty(exports, "V2LState", { enumerable: true, get: function () { return _core_models_1.V2LState; } });
Object.defineProperty(exports, "WeekDay", { enumerable: true, get: function () { return _core_models_1.WeekDay; } });
const _request_models_1 = require("./_request_models");
Object.defineProperty(exports, "ClimateParameters", { enumerable: true, get: function () { return _request_models_1.ClimateParameters; } });
const _vehicle_status_models_1 = require("./_vehicle_status_models");
Object.defineProperty(exports, "TemperatureReading", { enumerable: true, get: function () { return _vehicle_status_models_1.TemperatureReading; } });
/** A recurring vehicle charging schedule. */
class ChargeSchedule {
    id;
    state;
    start_date_time;
    duration;
    week_days;
    static __fields = [["id", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["start_date_time", _runtime_1.py.MISSING], ["duration", _runtime_1.py.MISSING], ["week_days", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargeSchedule, __args); Object.freeze(this); }
}
exports.ChargeSchedule = ChargeSchedule;
_runtime_1.py.classType(ChargeSchedule);
/** Configured charging and notification limits, expressed as percentages. */
class ChargeConfig {
    charge_limit_percent;
    notification_threshold_percent;
    static __fields = [["charge_limit_percent", _runtime_1.py.MISSING], ["notification_threshold_percent", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargeConfig, __args); Object.freeze(this); }
}
exports.ChargeConfig = ChargeConfig;
_runtime_1.py.classType(ChargeConfig);
/** V2L state and battery reserve levels, expressed as percentages. */
class V2LStatus {
    state;
    charge_limit_percent;
    minimum_charge_limit_percent;
    static __fields = [["state", _runtime_1.py.MISSING], ["charge_limit_percent", _runtime_1.py.MISSING], ["minimum_charge_limit_percent", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V2LStatus, __args); Object.freeze(this); }
}
exports.V2LStatus = V2LStatus;
_runtime_1.py.classType(V2LStatus);
/** One charging session; recovered energy is expressed in kilowatt-hours. */
class ChargeSession {
    start;
    end;
    duration;
    recovered_energy_kwh;
    static __fields = [["start", _runtime_1.py.MISSING], ["end", _runtime_1.py.MISSING], ["duration", _runtime_1.py.MISSING], ["recovered_energy_kwh", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargeSession, __args); Object.freeze(this); }
}
exports.ChargeSession = ChargeSession;
_runtime_1.py.classType(ChargeSession);
/** Aggregated charge history; energy is in kWh and duration is in minutes. */
class ChargeHistorySummary {
    day;
    month;
    year;
    number_of_charge_sessions;
    total_energy_recovered_kwh;
    total_duration_minutes;
    number_of_errors;
    user_id;
    role_type;
    static __fields = [["day", _runtime_1.py.MISSING], ["month", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING], ["number_of_charge_sessions", _runtime_1.py.MISSING], ["total_energy_recovered_kwh", _runtime_1.py.MISSING], ["total_duration_minutes", _runtime_1.py.MISSING], ["number_of_errors", _runtime_1.py.MISSING], ["user_id", _runtime_1.py.MISSING], ["role_type", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargeHistorySummary, __args); Object.freeze(this); }
}
exports.ChargeHistorySummary = ChargeHistorySummary;
_runtime_1.py.classType(ChargeHistorySummary);
/** Charging sessions and summaries for one requested time aggregation. */
class VehicleChargeHistory {
    charges;
    charge_summaries;
    static __fields = [["charges", _runtime_1.py.MISSING], ["charge_summaries", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleChargeHistory, __args); Object.freeze(this); }
}
exports.VehicleChargeHistory = VehicleChargeHistory;
_runtime_1.py.classType(VehicleChargeHistory);
/** A recurring cabin climate schedule. */
class ClimateSchedule {
    id;
    state;
    start_date_time;
    week_days;
    temperature;
    static __fields = [["id", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["start_date_time", _runtime_1.py.MISSING], ["week_days", _runtime_1.py.MISSING], ["temperature", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ClimateSchedule, __args); Object.freeze(this); }
}
exports.ClimateSchedule = ClimateSchedule;
_runtime_1.py.classType(ClimateSchedule);
/** The one-time delayed climate start configured for an Ariya. */
class DelayedClimateSchedule {
    start_date_time;
    static __fields = [["start_date_time", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DelayedClimateSchedule, __args); Object.freeze(this); }
}
exports.DelayedClimateSchedule = DelayedClimateSchedule;
_runtime_1.py.classType(DelayedClimateSchedule);
/** Recurring schedules and vehicle-level climate schedule settings. */
class VehicleClimateSchedules {
    schedules;
    accessories;
    delayed_schedule;
    static __fields = [["schedules", _runtime_1.py.MISSING], ["accessories", _runtime_1.py.MISSING], ["delayed_schedule", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleClimateSchedules, __args); Object.freeze(this); }
}
exports.VehicleClimateSchedules = VehicleClimateSchedules;
_runtime_1.py.classType(VehicleClimateSchedules);
/** The vehicle's saved default climate configuration. */
class ClimateDefaults {
    climate;
    parameters;
    static __fields = [["climate", _runtime_1.py.MISSING], ["parameters", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ClimateDefaults, __args); Object.freeze(this); }
}
exports.ClimateDefaults = ClimateDefaults;
_runtime_1.py.classType(ClimateDefaults);
//# sourceMappingURL=_energy_models.js.map