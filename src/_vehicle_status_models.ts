// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

import { DistanceUnit } from "./_core_models";
export { DistanceUnit };

/** A distance value returned by the connected vehicle service. */
export class DistanceReading {
readonly value: number | null;
readonly unit: string | null;
readonly last_updated_at: $.DateValue | null;
static __fields = [["value", $.MISSING], ["unit", $.MISSING], ["last_updated_at", null]];
constructor(value: number | null, unit: string | null, last_updated_at?: $.DateValue | null);
constructor(options: { value: number | null; unit: string | null; last_updated_at?: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DistanceReading, __args);  Object.freeze(this); }
}
$.classType(DistanceReading);

/** The vehicle odometer reading. */
export class Mileage {
readonly total: number | null;
readonly unit: string | null;
readonly recorded_at: $.DateValue | null;
static __fields = [["total", $.MISSING], ["unit", $.MISSING], ["recorded_at", $.MISSING]];
constructor(total: number | null, unit: string | null, recorded_at: $.DateValue | null);
constructor(options: { total: number | null; unit: string | null; recorded_at: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, Mileage, __args);  Object.freeze(this); }
}
$.classType(Mileage);

/** Reported state of a door and its window and lock. */
export class DoorState {
readonly ajar: string | null;
readonly window: string | null;
readonly lock: string | null;
static __fields = [["ajar", $.MISSING], ["window", $.MISSING], ["lock", $.MISSING]];
constructor(ajar: string | null, window: string | null, lock: string | null);
constructor(options: { ajar: string | null; window: string | null; lock: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DoorState, __args);  Object.freeze(this); }
}
$.classType(DoorState);

/** Reported state of the vehicle openings and locks. */
export class DoorsStatus {
readonly last_updated_at: $.DateValue | null;
readonly front_left: DoorState | null;
readonly front_right: DoorState | null;
readonly rear_left: DoorState | null;
readonly rear_right: DoorState | null;
readonly engine_hood_ajar: string | null;
readonly hatch_ajar: string | null;
readonly sunroof_ajar: string | null;
readonly trunk_lock: string | null;
readonly overall_lock: string | null;
static __fields = [["last_updated_at", $.MISSING], ["front_left", $.MISSING], ["front_right", $.MISSING], ["rear_left", $.MISSING], ["rear_right", $.MISSING], ["engine_hood_ajar", $.MISSING], ["hatch_ajar", $.MISSING], ["sunroof_ajar", $.MISSING], ["trunk_lock", $.MISSING], ["overall_lock", $.MISSING]];
constructor(last_updated_at: $.DateValue | null, front_left: DoorState | null, front_right: DoorState | null, rear_left: DoorState | null, rear_right: DoorState | null, engine_hood_ajar: string | null, hatch_ajar: string | null, sunroof_ajar: string | null, trunk_lock: string | null, overall_lock: string | null);
constructor(options: { last_updated_at: $.DateValue | null; front_left: DoorState | null; front_right: DoorState | null; rear_left: DoorState | null; rear_right: DoorState | null; engine_hood_ajar: string | null; hatch_ajar: string | null; sunroof_ajar: string | null; trunk_lock: string | null; overall_lock: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DoorsStatus, __args);  Object.freeze(this); }
}
$.classType(DoorsStatus);

/** Reported electric vehicle battery status. */
export class BatteryStatus {
readonly level: number | null;
readonly is_plugged_in: boolean | null;
readonly is_charging: boolean | null;
readonly remaining_charge_time: number | null;
readonly remaining_mileage: DistanceReading | null;
static __fields = [["level", $.MISSING], ["is_plugged_in", $.MISSING], ["is_charging", $.MISSING], ["remaining_charge_time", $.MISSING], ["remaining_mileage", $.MISSING]];
constructor(level: number | null, is_plugged_in: boolean | null, is_charging: boolean | null, remaining_charge_time: number | null, remaining_mileage: DistanceReading | null);
constructor(options: { level: number | null; is_plugged_in: boolean | null; is_charging: boolean | null; remaining_charge_time: number | null; remaining_mileage: DistanceReading | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, BatteryStatus, __args);  Object.freeze(this); }
}
$.classType(BatteryStatus);

/** Raw tire pressure and status values returned by the API. */
export class TirePressure {
readonly last_updated_at: $.DateValue | null;
readonly front_left: number | null;
readonly front_right: number | null;
readonly rear_left: number | null;
readonly rear_right: number | null;
readonly front_left_status: number | null;
readonly front_right_status: number | null;
readonly rear_left_status: number | null;
readonly rear_right_status: number | null;
static __fields = [["last_updated_at", $.MISSING], ["front_left", $.MISSING], ["front_right", $.MISSING], ["rear_left", $.MISSING], ["rear_right", $.MISSING], ["front_left_status", $.MISSING], ["front_right_status", $.MISSING], ["rear_left_status", $.MISSING], ["rear_right_status", $.MISSING]];
constructor(last_updated_at: $.DateValue | null, front_left: number | null, front_right: number | null, rear_left: number | null, rear_right: number | null, front_left_status: number | null, front_right_status: number | null, rear_left_status: number | null, rear_right_status: number | null);
constructor(options: { last_updated_at: $.DateValue | null; front_left: number | null; front_right: number | null; rear_left: number | null; rear_right: number | null; front_left_status: number | null; front_right_status: number | null; rear_left_status: number | null; rear_right_status: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TirePressure, __args);  Object.freeze(this); }
}
$.classType(TirePressure);

/** A vehicle malfunction or maintenance indicator. */
export class MaintenanceIndicator {
readonly active: boolean | null;
readonly detailed_message: string | null;
readonly type: string | null;
static __fields = [["active", $.MISSING], ["detailed_message", $.MISSING], ["type", $.MISSING]];
constructor(active: boolean | null, detailed_message: string | null, type: string | null);
constructor(options: { active: boolean | null; detailed_message: string | null; type: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MaintenanceIndicator, __args);  Object.freeze(this); }
}
$.classType(MaintenanceIndicator);

/** A temperature value returned by the API. */
export class TemperatureReading {
readonly value: number;
readonly unit: string;
static __fields = [["value", $.MISSING], ["unit", $.MISSING]];
constructor(value: number, unit: string);
constructor(options: { value: number; unit: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TemperatureReading, __args);  Object.freeze(this); }
}
$.classType(TemperatureReading);

/** Reported climate control state. */
export class ClimateStatus {
readonly state: string | null;
readonly temperature: TemperatureReading | null;
static __fields = [["state", $.MISSING], ["temperature", $.MISSING]];
constructor(state: string | null, temperature: TemperatureReading | null);
constructor(options: { state: string | null; temperature: TemperatureReading | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ClimateStatus, __args);  Object.freeze(this); }
}
$.classType(ClimateStatus);

/** Remaining engine-oil service range reported by a combustion vehicle. */
export class EngineOilDrainRange {
readonly range: number;
readonly unit: DistanceUnit;
readonly last_updated_at: $.DateValue;
static __fields = [["range", $.MISSING], ["unit", $.MISSING], ["last_updated_at", $.MISSING]];
constructor(range: number, unit: DistanceUnit, last_updated_at: $.DateValue);
constructor(options: { range: number; unit: DistanceUnit; last_updated_at: $.DateValue });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EngineOilDrainRange, __args);  Object.freeze(this); }
}
$.classType(EngineOilDrainRange);

/** Cached dynamic data for one vehicle. */
export class VehicleStatus {
readonly vin: string;
readonly vehicle_type: string | null;
readonly battery: BatteryStatus | null;
readonly climate: ClimateStatus | null;
readonly doors: DoorsStatus | null;
readonly fuel_range: DistanceReading | null;
readonly mileage: Mileage | null;
readonly tire_pressure: TirePressure | null;
readonly maintenance_indicators: ReadonlyArray<MaintenanceIndicator>;
readonly engine_oil_drain_range: EngineOilDrainRange | null;
static __fields = [["vin", $.MISSING], ["vehicle_type", $.MISSING], ["battery", $.MISSING], ["climate", $.MISSING], ["doors", $.MISSING], ["fuel_range", $.MISSING], ["mileage", $.MISSING], ["tire_pressure", $.MISSING], ["maintenance_indicators", $.MISSING], ["engine_oil_drain_range", null]];
constructor(vin: string, vehicle_type: string | null, battery: BatteryStatus | null, climate: ClimateStatus | null, doors: DoorsStatus | null, fuel_range: DistanceReading | null, mileage: Mileage | null, tire_pressure: TirePressure | null, maintenance_indicators: ReadonlyArray<MaintenanceIndicator>, engine_oil_drain_range?: EngineOilDrainRange | null);
constructor(options: { vin: string; vehicle_type: string | null; battery: BatteryStatus | null; climate: ClimateStatus | null; doors: DoorsStatus | null; fuel_range: DistanceReading | null; mileage: Mileage | null; tire_pressure: TirePressure | null; maintenance_indicators: ReadonlyArray<MaintenanceIndicator>; engine_oil_drain_range?: EngineOilDrainRange | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleStatus, __args);  Object.freeze(this); }
}
$.classType(VehicleStatus);

/** The last reported location of a vehicle. */
export class VehicleLocation {
readonly vin: string;
readonly latitude: number | null;
readonly longitude: number | null;
readonly last_updated_at: $.DateValue | null;
static __fields = [["vin", $.MISSING], ["latitude", $.MISSING], ["longitude", $.MISSING], ["last_updated_at", $.MISSING]];
constructor(vin: string, latitude: number | null, longitude: number | null, last_updated_at: $.DateValue | null);
constructor(options: { vin: string; latitude: number | null; longitude: number | null; last_updated_at: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleLocation, __args);  Object.freeze(this); }
}
$.classType(VehicleLocation);
