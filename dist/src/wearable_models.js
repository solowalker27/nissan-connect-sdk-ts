"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleWithCapabilities = exports.VehicleCapabilitySummary = exports.ServiceCapability = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const models_1 = require("./models");
Object.defineProperty(exports, "ServiceCapability", { enumerable: true, get: function () { return models_1.ServiceCapability; } });
/** Watch-optimized connected-service capability subset for one vehicle. */
class VehicleCapabilitySummary {
    telematics_program;
    enrollment_status;
    services;
    static __fields = [["telematics_program", _runtime_1.py.MISSING], ["enrollment_status", _runtime_1.py.MISSING], ["services", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleCapabilitySummary, __args); Object.freeze(this); }
}
exports.VehicleCapabilitySummary = VehicleCapabilitySummary;
_runtime_1.py.classType(VehicleCapabilitySummary);
/** Static vehicle data and the capability subset returned to wearable clients. */
class VehicleWithCapabilities {
    vin;
    nickname;
    image_url;
    year;
    model;
    driver_type;
    capabilities;
    static __fields = [["vin", _runtime_1.py.MISSING], ["nickname", _runtime_1.py.MISSING], ["image_url", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING], ["model", _runtime_1.py.MISSING], ["driver_type", _runtime_1.py.MISSING], ["capabilities", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleWithCapabilities, __args); Object.freeze(this); }
}
exports.VehicleWithCapabilities = VehicleWithCapabilities;
_runtime_1.py.classType(VehicleWithCapabilities);
//# sourceMappingURL=wearable_models.js.map