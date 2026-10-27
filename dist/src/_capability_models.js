"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleCapabilities = exports.VehicleAccessoriesDetails = exports.HvacTemperatureCapabilities = exports.WayPointCapability = exports.SunRoofCapability = exports.SeatHeaterCapability = exports.SeatHeaterAccessories = exports.AccessoryCapability = exports.ServiceCapability = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
/** A connected service advertised for a vehicle. */
class ServiceCapability {
    type;
    enabled;
    subscribed;
    static __fields = [["type", _runtime_1.py.MISSING], ["enabled", _runtime_1.py.MISSING], ["subscribed", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceCapability, __args); Object.freeze(this); }
}
exports.ServiceCapability = ServiceCapability;
_runtime_1.py.classType(ServiceCapability);
/** Whether a vehicle accessory is available. */
class AccessoryCapability {
    enabled;
    static __fields = [["enabled", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AccessoryCapability, __args); Object.freeze(this); }
}
exports.AccessoryCapability = AccessoryCapability;
_runtime_1.py.classType(AccessoryCapability);
/** Heating or heating-and-cooling support by seat position. */
class SeatHeaterAccessories {
    assistant_seat;
    driver_seat;
    second_centre_seat;
    second_left_seat;
    second_right_seat;
    third_left_seat;
    third_right_seat;
    static __fields = [["assistant_seat", _runtime_1.py.MISSING], ["driver_seat", _runtime_1.py.MISSING], ["second_centre_seat", _runtime_1.py.MISSING], ["second_left_seat", _runtime_1.py.MISSING], ["second_right_seat", _runtime_1.py.MISSING], ["third_left_seat", _runtime_1.py.MISSING], ["third_right_seat", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SeatHeaterAccessories, __args); Object.freeze(this); }
}
exports.SeatHeaterAccessories = SeatHeaterAccessories;
_runtime_1.py.classType(SeatHeaterAccessories);
/** Seat climate accessory support advertised by the vehicle. */
class SeatHeaterCapability {
    enabled;
    accessories;
    static __fields = [["enabled", _runtime_1.py.MISSING], ["accessories", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SeatHeaterCapability, __args); Object.freeze(this); }
}
exports.SeatHeaterCapability = SeatHeaterCapability;
_runtime_1.py.classType(SeatHeaterCapability);
/** Sun roof type and availability advertised by the vehicle. */
class SunRoofCapability {
    type;
    enabled;
    static __fields = [["type", _runtime_1.py.MISSING], ["enabled", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SunRoofCapability, __args); Object.freeze(this); }
}
exports.SunRoofCapability = SunRoofCapability;
_runtime_1.py.classType(SunRoofCapability);
/** Waypoint support and the maximum number accepted by the vehicle. */
class WayPointCapability {
    enabled;
    max_number;
    static __fields = [["enabled", _runtime_1.py.MISSING], ["max_number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, WayPointCapability, __args); Object.freeze(this); }
}
exports.WayPointCapability = WayPointCapability;
_runtime_1.py.classType(WayPointCapability);
/** Supported HVAC temperature range in the requested unit. */
class HvacTemperatureCapabilities {
    unit;
    $default;
    minimum;
    maximum;
    resolution;
    static __fields = [["unit", _runtime_1.py.MISSING], ["default", _runtime_1.py.MISSING], ["minimum", _runtime_1.py.MISSING], ["maximum", _runtime_1.py.MISSING], ["resolution", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, HvacTemperatureCapabilities, __args); Object.freeze(this); }
}
exports.HvacTemperatureCapabilities = HvacTemperatureCapabilities;
_runtime_1.py.classType(HvacTemperatureCapabilities);
/** Accessory capabilities advertised for a vehicle. */
class VehicleAccessoriesDetails {
    seat_heater;
    steering_heat;
    sun_roof;
    window_status;
    way_point;
    hvac_temperatures;
    static __fields = [["seat_heater", _runtime_1.py.MISSING], ["steering_heat", _runtime_1.py.MISSING], ["sun_roof", _runtime_1.py.MISSING], ["window_status", _runtime_1.py.MISSING], ["way_point", _runtime_1.py.MISSING], ["hvac_temperatures", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleAccessoriesDetails, __args); Object.freeze(this); }
}
exports.VehicleAccessoriesDetails = VehicleAccessoriesDetails;
_runtime_1.py.classType(VehicleAccessoriesDetails);
/** Connected service capabilities for a vehicle. */
class VehicleCapabilities {
    vin;
    telematics_program;
    enrollment_status;
    services;
    accessories_details;
    static __fields = [["vin", _runtime_1.py.MISSING], ["telematics_program", _runtime_1.py.MISSING], ["enrollment_status", _runtime_1.py.MISSING], ["services", _runtime_1.py.MISSING], ["accessories_details", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleCapabilities, __args); Object.freeze(this); }
}
exports.VehicleCapabilities = VehicleCapabilities;
_runtime_1.py.classType(VehicleCapabilities);
//# sourceMappingURL=_capability_models.js.map