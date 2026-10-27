import { py as $ } from "./_runtime";
import { DistanceUnit } from "./_core_models";
export { DistanceUnit };
/** A distance value returned by the connected vehicle service. */
export declare class DistanceReading {
    readonly value: number | null;
    readonly unit: string | null;
    readonly last_updated_at: $.DateValue | null;
    static __fields: ((string | symbol)[] | (string | null)[])[];
    constructor(value: number | null, unit: string | null, last_updated_at?: $.DateValue | null);
    constructor(options: {
        value: number | null;
        unit: string | null;
        last_updated_at?: $.DateValue | null;
    });
}
/** The vehicle odometer reading. */
export declare class Mileage {
    readonly total: number | null;
    readonly unit: string | null;
    readonly recorded_at: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(total: number | null, unit: string | null, recorded_at: $.DateValue | null);
    constructor(options: {
        total: number | null;
        unit: string | null;
        recorded_at: $.DateValue | null;
    });
}
/** Reported state of a door and its window and lock. */
export declare class DoorState {
    readonly ajar: string | null;
    readonly window: string | null;
    readonly lock: string | null;
    static __fields: (string | symbol)[][];
    constructor(ajar: string | null, window: string | null, lock: string | null);
    constructor(options: {
        ajar: string | null;
        window: string | null;
        lock: string | null;
    });
}
/** Reported state of the vehicle openings and locks. */
export declare class DoorsStatus {
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
    static __fields: (string | symbol)[][];
    constructor(last_updated_at: $.DateValue | null, front_left: DoorState | null, front_right: DoorState | null, rear_left: DoorState | null, rear_right: DoorState | null, engine_hood_ajar: string | null, hatch_ajar: string | null, sunroof_ajar: string | null, trunk_lock: string | null, overall_lock: string | null);
    constructor(options: {
        last_updated_at: $.DateValue | null;
        front_left: DoorState | null;
        front_right: DoorState | null;
        rear_left: DoorState | null;
        rear_right: DoorState | null;
        engine_hood_ajar: string | null;
        hatch_ajar: string | null;
        sunroof_ajar: string | null;
        trunk_lock: string | null;
        overall_lock: string | null;
    });
}
/** Reported electric vehicle battery status. */
export declare class BatteryStatus {
    readonly level: number | null;
    readonly is_plugged_in: boolean | null;
    readonly is_charging: boolean | null;
    readonly remaining_charge_time: number | null;
    readonly remaining_mileage: DistanceReading | null;
    static __fields: (string | symbol)[][];
    constructor(level: number | null, is_plugged_in: boolean | null, is_charging: boolean | null, remaining_charge_time: number | null, remaining_mileage: DistanceReading | null);
    constructor(options: {
        level: number | null;
        is_plugged_in: boolean | null;
        is_charging: boolean | null;
        remaining_charge_time: number | null;
        remaining_mileage: DistanceReading | null;
    });
}
/** Raw tire pressure and status values returned by the API. */
export declare class TirePressure {
    readonly last_updated_at: $.DateValue | null;
    readonly front_left: number | null;
    readonly front_right: number | null;
    readonly rear_left: number | null;
    readonly rear_right: number | null;
    readonly front_left_status: number | null;
    readonly front_right_status: number | null;
    readonly rear_left_status: number | null;
    readonly rear_right_status: number | null;
    static __fields: (string | symbol)[][];
    constructor(last_updated_at: $.DateValue | null, front_left: number | null, front_right: number | null, rear_left: number | null, rear_right: number | null, front_left_status: number | null, front_right_status: number | null, rear_left_status: number | null, rear_right_status: number | null);
    constructor(options: {
        last_updated_at: $.DateValue | null;
        front_left: number | null;
        front_right: number | null;
        rear_left: number | null;
        rear_right: number | null;
        front_left_status: number | null;
        front_right_status: number | null;
        rear_left_status: number | null;
        rear_right_status: number | null;
    });
}
/** A vehicle malfunction or maintenance indicator. */
export declare class MaintenanceIndicator {
    readonly active: boolean | null;
    readonly detailed_message: string | null;
    readonly type: string | null;
    static __fields: (string | symbol)[][];
    constructor(active: boolean | null, detailed_message: string | null, type: string | null);
    constructor(options: {
        active: boolean | null;
        detailed_message: string | null;
        type: string | null;
    });
}
/** A temperature value returned by the API. */
export declare class TemperatureReading {
    readonly value: number;
    readonly unit: string;
    static __fields: (string | symbol)[][];
    constructor(value: number, unit: string);
    constructor(options: {
        value: number;
        unit: string;
    });
}
/** Reported climate control state. */
export declare class ClimateStatus {
    readonly state: string | null;
    readonly temperature: TemperatureReading | null;
    static __fields: (string | symbol)[][];
    constructor(state: string | null, temperature: TemperatureReading | null);
    constructor(options: {
        state: string | null;
        temperature: TemperatureReading | null;
    });
}
/** Remaining engine-oil service range reported by a combustion vehicle. */
export declare class EngineOilDrainRange {
    readonly range: number;
    readonly unit: DistanceUnit;
    readonly last_updated_at: $.DateValue;
    static __fields: (string | symbol)[][];
    constructor(range: number, unit: DistanceUnit, last_updated_at: $.DateValue);
    constructor(options: {
        range: number;
        unit: DistanceUnit;
        last_updated_at: $.DateValue;
    });
}
/** Cached dynamic data for one vehicle. */
export declare class VehicleStatus {
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
    static __fields: ((string | symbol)[] | (string | null)[])[];
    constructor(vin: string, vehicle_type: string | null, battery: BatteryStatus | null, climate: ClimateStatus | null, doors: DoorsStatus | null, fuel_range: DistanceReading | null, mileage: Mileage | null, tire_pressure: TirePressure | null, maintenance_indicators: ReadonlyArray<MaintenanceIndicator>, engine_oil_drain_range?: EngineOilDrainRange | null);
    constructor(options: {
        vin: string;
        vehicle_type: string | null;
        battery: BatteryStatus | null;
        climate: ClimateStatus | null;
        doors: DoorsStatus | null;
        fuel_range: DistanceReading | null;
        mileage: Mileage | null;
        tire_pressure: TirePressure | null;
        maintenance_indicators: ReadonlyArray<MaintenanceIndicator>;
        engine_oil_drain_range?: EngineOilDrainRange | null;
    });
}
/** The last reported location of a vehicle. */
export declare class VehicleLocation {
    readonly vin: string;
    readonly latitude: number | null;
    readonly longitude: number | null;
    readonly last_updated_at: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string, latitude: number | null, longitude: number | null, last_updated_at: $.DateValue | null);
    constructor(options: {
        vin: string;
        latitude: number | null;
        longitude: number | null;
        last_updated_at: $.DateValue | null;
    });
}
