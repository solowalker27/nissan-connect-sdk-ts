/** A connected service advertised for a vehicle. */
export declare class ServiceCapability {
    readonly type: string;
    readonly enabled: boolean;
    readonly subscribed: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(type: string, enabled: boolean, subscribed: boolean | null);
    constructor(options: {
        type: string;
        enabled: boolean;
        subscribed: boolean | null;
    });
}
/** Whether a vehicle accessory is available. */
export declare class AccessoryCapability {
    readonly enabled: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(enabled: boolean | null);
    constructor(options: {
        enabled: boolean | null;
    });
}
/** Heating or heating-and-cooling support by seat position. */
export declare class SeatHeaterAccessories {
    readonly assistant_seat: string | null;
    readonly driver_seat: string | null;
    readonly second_centre_seat: string | null;
    readonly second_left_seat: string | null;
    readonly second_right_seat: string | null;
    readonly third_left_seat: string | null;
    readonly third_right_seat: string | null;
    static __fields: (string | symbol)[][];
    constructor(assistant_seat: string | null, driver_seat: string | null, second_centre_seat: string | null, second_left_seat: string | null, second_right_seat: string | null, third_left_seat: string | null, third_right_seat: string | null);
    constructor(options: {
        assistant_seat: string | null;
        driver_seat: string | null;
        second_centre_seat: string | null;
        second_left_seat: string | null;
        second_right_seat: string | null;
        third_left_seat: string | null;
        third_right_seat: string | null;
    });
}
/** Seat climate accessory support advertised by the vehicle. */
export declare class SeatHeaterCapability {
    readonly enabled: boolean | null;
    readonly accessories: SeatHeaterAccessories | null;
    static __fields: (string | symbol)[][];
    constructor(enabled: boolean | null, accessories: SeatHeaterAccessories | null);
    constructor(options: {
        enabled: boolean | null;
        accessories: SeatHeaterAccessories | null;
    });
}
/** Sun roof type and availability advertised by the vehicle. */
export declare class SunRoofCapability {
    readonly type: string | null;
    readonly enabled: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(type: string | null, enabled: boolean | null);
    constructor(options: {
        type: string | null;
        enabled: boolean | null;
    });
}
/** Waypoint support and the maximum number accepted by the vehicle. */
export declare class WayPointCapability {
    readonly enabled: boolean | null;
    readonly max_number: number | null;
    static __fields: (string | symbol)[][];
    constructor(enabled: boolean | null, max_number: number | null);
    constructor(options: {
        enabled: boolean | null;
        max_number: number | null;
    });
}
/** Supported HVAC temperature range in the requested unit. */
export declare class HvacTemperatureCapabilities {
    readonly unit: string;
    readonly $default: number;
    readonly minimum: number;
    readonly maximum: number;
    readonly resolution: number;
    static __fields: (string | symbol)[][];
    constructor(unit: string, $default: number, minimum: number, maximum: number, resolution: number);
    constructor(options: {
        unit: string;
        $default: number;
        minimum: number;
        maximum: number;
        resolution: number;
    });
}
/** Accessory capabilities advertised for a vehicle. */
export declare class VehicleAccessoriesDetails {
    readonly seat_heater: SeatHeaterCapability | null;
    readonly steering_heat: AccessoryCapability | null;
    readonly sun_roof: SunRoofCapability | null;
    readonly window_status: AccessoryCapability | null;
    readonly way_point: WayPointCapability | null;
    readonly hvac_temperatures: HvacTemperatureCapabilities | null;
    static __fields: (string | symbol)[][];
    constructor(seat_heater: SeatHeaterCapability | null, steering_heat: AccessoryCapability | null, sun_roof: SunRoofCapability | null, window_status: AccessoryCapability | null, way_point: WayPointCapability | null, hvac_temperatures: HvacTemperatureCapabilities | null);
    constructor(options: {
        seat_heater: SeatHeaterCapability | null;
        steering_heat: AccessoryCapability | null;
        sun_roof: SunRoofCapability | null;
        window_status: AccessoryCapability | null;
        way_point: WayPointCapability | null;
        hvac_temperatures: HvacTemperatureCapabilities | null;
    });
}
/** Connected service capabilities for a vehicle. */
export declare class VehicleCapabilities {
    readonly vin: string;
    readonly telematics_program: string | null;
    readonly enrollment_status: string | null;
    readonly services: ReadonlyArray<ServiceCapability>;
    readonly accessories_details: VehicleAccessoriesDetails | null;
    static __fields: ((string | symbol)[] | (string | null)[])[];
    constructor(vin: string, telematics_program: string | null, enrollment_status: string | null, services: ReadonlyArray<ServiceCapability>, accessories_details?: VehicleAccessoriesDetails | null);
    constructor(options: {
        vin: string;
        telematics_program: string | null;
        enrollment_status: string | null;
        services: ReadonlyArray<ServiceCapability>;
        accessories_details?: VehicleAccessoriesDetails | null;
    });
}
