"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleLocation = exports.VehicleStatus = exports.EngineOilDrainRange = exports.ClimateStatus = exports.TemperatureReading = exports.MaintenanceIndicator = exports.TirePressure = exports.BatteryStatus = exports.DoorsStatus = exports.DoorState = exports.Mileage = exports.DistanceReading = exports.DistanceUnit = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const _core_models_1 = require("./_core_models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return _core_models_1.DistanceUnit; } });
/** A distance value returned by the connected vehicle service. */
class DistanceReading {
    value;
    unit;
    last_updated_at;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING], ["last_updated_at", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DistanceReading, __args); Object.freeze(this); }
}
exports.DistanceReading = DistanceReading;
_runtime_1.py.classType(DistanceReading);
/** The vehicle odometer reading. */
class Mileage {
    total;
    unit;
    recorded_at;
    static __fields = [["total", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING], ["recorded_at", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, Mileage, __args); Object.freeze(this); }
}
exports.Mileage = Mileage;
_runtime_1.py.classType(Mileage);
/** Reported state of a door and its window and lock. */
class DoorState {
    ajar;
    window;
    lock;
    static __fields = [["ajar", _runtime_1.py.MISSING], ["window", _runtime_1.py.MISSING], ["lock", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DoorState, __args); Object.freeze(this); }
}
exports.DoorState = DoorState;
_runtime_1.py.classType(DoorState);
/** Reported state of the vehicle openings and locks. */
class DoorsStatus {
    last_updated_at;
    front_left;
    front_right;
    rear_left;
    rear_right;
    engine_hood_ajar;
    hatch_ajar;
    sunroof_ajar;
    trunk_lock;
    overall_lock;
    static __fields = [["last_updated_at", _runtime_1.py.MISSING], ["front_left", _runtime_1.py.MISSING], ["front_right", _runtime_1.py.MISSING], ["rear_left", _runtime_1.py.MISSING], ["rear_right", _runtime_1.py.MISSING], ["engine_hood_ajar", _runtime_1.py.MISSING], ["hatch_ajar", _runtime_1.py.MISSING], ["sunroof_ajar", _runtime_1.py.MISSING], ["trunk_lock", _runtime_1.py.MISSING], ["overall_lock", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DoorsStatus, __args); Object.freeze(this); }
}
exports.DoorsStatus = DoorsStatus;
_runtime_1.py.classType(DoorsStatus);
/** Reported electric vehicle battery status. */
class BatteryStatus {
    level;
    is_plugged_in;
    is_charging;
    remaining_charge_time;
    remaining_mileage;
    static __fields = [["level", _runtime_1.py.MISSING], ["is_plugged_in", _runtime_1.py.MISSING], ["is_charging", _runtime_1.py.MISSING], ["remaining_charge_time", _runtime_1.py.MISSING], ["remaining_mileage", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, BatteryStatus, __args); Object.freeze(this); }
}
exports.BatteryStatus = BatteryStatus;
_runtime_1.py.classType(BatteryStatus);
/** Raw tire pressure and status values returned by the API. */
class TirePressure {
    last_updated_at;
    front_left;
    front_right;
    rear_left;
    rear_right;
    front_left_status;
    front_right_status;
    rear_left_status;
    rear_right_status;
    static __fields = [["last_updated_at", _runtime_1.py.MISSING], ["front_left", _runtime_1.py.MISSING], ["front_right", _runtime_1.py.MISSING], ["rear_left", _runtime_1.py.MISSING], ["rear_right", _runtime_1.py.MISSING], ["front_left_status", _runtime_1.py.MISSING], ["front_right_status", _runtime_1.py.MISSING], ["rear_left_status", _runtime_1.py.MISSING], ["rear_right_status", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TirePressure, __args); Object.freeze(this); }
}
exports.TirePressure = TirePressure;
_runtime_1.py.classType(TirePressure);
/** A vehicle malfunction or maintenance indicator. */
class MaintenanceIndicator {
    active;
    detailed_message;
    type;
    static __fields = [["active", _runtime_1.py.MISSING], ["detailed_message", _runtime_1.py.MISSING], ["type", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MaintenanceIndicator, __args); Object.freeze(this); }
}
exports.MaintenanceIndicator = MaintenanceIndicator;
_runtime_1.py.classType(MaintenanceIndicator);
/** A temperature value returned by the API. */
class TemperatureReading {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TemperatureReading, __args); Object.freeze(this); }
}
exports.TemperatureReading = TemperatureReading;
_runtime_1.py.classType(TemperatureReading);
/** Reported climate control state. */
class ClimateStatus {
    state;
    temperature;
    static __fields = [["state", _runtime_1.py.MISSING], ["temperature", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ClimateStatus, __args); Object.freeze(this); }
}
exports.ClimateStatus = ClimateStatus;
_runtime_1.py.classType(ClimateStatus);
/** Remaining engine-oil service range reported by a combustion vehicle. */
class EngineOilDrainRange {
    range;
    unit;
    last_updated_at;
    static __fields = [["range", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING], ["last_updated_at", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EngineOilDrainRange, __args); Object.freeze(this); }
}
exports.EngineOilDrainRange = EngineOilDrainRange;
_runtime_1.py.classType(EngineOilDrainRange);
/** Cached dynamic data for one vehicle. */
class VehicleStatus {
    vin;
    vehicle_type;
    battery;
    climate;
    doors;
    fuel_range;
    mileage;
    tire_pressure;
    maintenance_indicators;
    engine_oil_drain_range;
    static __fields = [["vin", _runtime_1.py.MISSING], ["vehicle_type", _runtime_1.py.MISSING], ["battery", _runtime_1.py.MISSING], ["climate", _runtime_1.py.MISSING], ["doors", _runtime_1.py.MISSING], ["fuel_range", _runtime_1.py.MISSING], ["mileage", _runtime_1.py.MISSING], ["tire_pressure", _runtime_1.py.MISSING], ["maintenance_indicators", _runtime_1.py.MISSING], ["engine_oil_drain_range", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleStatus, __args); Object.freeze(this); }
}
exports.VehicleStatus = VehicleStatus;
_runtime_1.py.classType(VehicleStatus);
/** The last reported location of a vehicle. */
class VehicleLocation {
    vin;
    latitude;
    longitude;
    last_updated_at;
    static __fields = [["vin", _runtime_1.py.MISSING], ["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING], ["last_updated_at", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleLocation, __args); Object.freeze(this); }
}
exports.VehicleLocation = VehicleLocation;
_runtime_1.py.classType(VehicleLocation);
//# sourceMappingURL=_vehicle_status_models.js.map