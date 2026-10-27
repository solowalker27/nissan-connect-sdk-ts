// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

/** A connected service advertised for a vehicle. */
export class ServiceCapability {
readonly type: string;
readonly enabled: boolean;
readonly subscribed: boolean | null;
static __fields = [["type", $.MISSING], ["enabled", $.MISSING], ["subscribed", $.MISSING]];
constructor(type: string, enabled: boolean, subscribed: boolean | null);
constructor(options: { type: string; enabled: boolean; subscribed: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceCapability, __args);  Object.freeze(this); }
}
$.classType(ServiceCapability);

/** Whether a vehicle accessory is available. */
export class AccessoryCapability {
readonly enabled: boolean | null;
static __fields = [["enabled", $.MISSING]];
constructor(enabled: boolean | null);
constructor(options: { enabled: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AccessoryCapability, __args);  Object.freeze(this); }
}
$.classType(AccessoryCapability);

/** Heating or heating-and-cooling support by seat position. */
export class SeatHeaterAccessories {
readonly assistant_seat: string | null;
readonly driver_seat: string | null;
readonly second_centre_seat: string | null;
readonly second_left_seat: string | null;
readonly second_right_seat: string | null;
readonly third_left_seat: string | null;
readonly third_right_seat: string | null;
static __fields = [["assistant_seat", $.MISSING], ["driver_seat", $.MISSING], ["second_centre_seat", $.MISSING], ["second_left_seat", $.MISSING], ["second_right_seat", $.MISSING], ["third_left_seat", $.MISSING], ["third_right_seat", $.MISSING]];
constructor(assistant_seat: string | null, driver_seat: string | null, second_centre_seat: string | null, second_left_seat: string | null, second_right_seat: string | null, third_left_seat: string | null, third_right_seat: string | null);
constructor(options: { assistant_seat: string | null; driver_seat: string | null; second_centre_seat: string | null; second_left_seat: string | null; second_right_seat: string | null; third_left_seat: string | null; third_right_seat: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SeatHeaterAccessories, __args);  Object.freeze(this); }
}
$.classType(SeatHeaterAccessories);

/** Seat climate accessory support advertised by the vehicle. */
export class SeatHeaterCapability {
readonly enabled: boolean | null;
readonly accessories: SeatHeaterAccessories | null;
static __fields = [["enabled", $.MISSING], ["accessories", $.MISSING]];
constructor(enabled: boolean | null, accessories: SeatHeaterAccessories | null);
constructor(options: { enabled: boolean | null; accessories: SeatHeaterAccessories | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SeatHeaterCapability, __args);  Object.freeze(this); }
}
$.classType(SeatHeaterCapability);

/** Sun roof type and availability advertised by the vehicle. */
export class SunRoofCapability {
readonly type: string | null;
readonly enabled: boolean | null;
static __fields = [["type", $.MISSING], ["enabled", $.MISSING]];
constructor(type: string | null, enabled: boolean | null);
constructor(options: { type: string | null; enabled: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SunRoofCapability, __args);  Object.freeze(this); }
}
$.classType(SunRoofCapability);

/** Waypoint support and the maximum number accepted by the vehicle. */
export class WayPointCapability {
readonly enabled: boolean | null;
readonly max_number: number | null;
static __fields = [["enabled", $.MISSING], ["max_number", $.MISSING]];
constructor(enabled: boolean | null, max_number: number | null);
constructor(options: { enabled: boolean | null; max_number: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, WayPointCapability, __args);  Object.freeze(this); }
}
$.classType(WayPointCapability);

/** Supported HVAC temperature range in the requested unit. */
export class HvacTemperatureCapabilities {
readonly unit: string;
readonly $default: number;
readonly minimum: number;
readonly maximum: number;
readonly resolution: number;
static __fields = [["unit", $.MISSING], ["default", $.MISSING], ["minimum", $.MISSING], ["maximum", $.MISSING], ["resolution", $.MISSING]];
constructor(unit: string, $default: number, minimum: number, maximum: number, resolution: number);
constructor(options: { unit: string; $default: number; minimum: number; maximum: number; resolution: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, HvacTemperatureCapabilities, __args);  Object.freeze(this); }
}
$.classType(HvacTemperatureCapabilities);

/** Accessory capabilities advertised for a vehicle. */
export class VehicleAccessoriesDetails {
readonly seat_heater: SeatHeaterCapability | null;
readonly steering_heat: AccessoryCapability | null;
readonly sun_roof: SunRoofCapability | null;
readonly window_status: AccessoryCapability | null;
readonly way_point: WayPointCapability | null;
readonly hvac_temperatures: HvacTemperatureCapabilities | null;
static __fields = [["seat_heater", $.MISSING], ["steering_heat", $.MISSING], ["sun_roof", $.MISSING], ["window_status", $.MISSING], ["way_point", $.MISSING], ["hvac_temperatures", $.MISSING]];
constructor(seat_heater: SeatHeaterCapability | null, steering_heat: AccessoryCapability | null, sun_roof: SunRoofCapability | null, window_status: AccessoryCapability | null, way_point: WayPointCapability | null, hvac_temperatures: HvacTemperatureCapabilities | null);
constructor(options: { seat_heater: SeatHeaterCapability | null; steering_heat: AccessoryCapability | null; sun_roof: SunRoofCapability | null; window_status: AccessoryCapability | null; way_point: WayPointCapability | null; hvac_temperatures: HvacTemperatureCapabilities | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleAccessoriesDetails, __args);  Object.freeze(this); }
}
$.classType(VehicleAccessoriesDetails);

/** Connected service capabilities for a vehicle. */
export class VehicleCapabilities {
readonly vin: string;
readonly telematics_program: string | null;
readonly enrollment_status: string | null;
readonly services: ReadonlyArray<ServiceCapability>;
readonly accessories_details: VehicleAccessoriesDetails | null;
static __fields = [["vin", $.MISSING], ["telematics_program", $.MISSING], ["enrollment_status", $.MISSING], ["services", $.MISSING], ["accessories_details", null]];
constructor(vin: string, telematics_program: string | null, enrollment_status: string | null, services: ReadonlyArray<ServiceCapability>, accessories_details?: VehicleAccessoriesDetails | null);
constructor(options: { vin: string; telematics_program: string | null; enrollment_status: string | null; services: ReadonlyArray<ServiceCapability>; accessories_details?: VehicleAccessoriesDetails | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleCapabilities, __args);  Object.freeze(this); }
}
$.classType(VehicleCapabilities);
