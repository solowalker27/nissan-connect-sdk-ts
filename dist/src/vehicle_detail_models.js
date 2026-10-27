"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleStatusAndRecalls = exports.VehicleNickname = exports.VehicleModelYear = exports.VehicleRecall = exports.VehicleStatus = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const models_1 = require("./models");
Object.defineProperty(exports, "VehicleStatus", { enumerable: true, get: function () { return models_1.VehicleStatus; } });
const service_models_1 = require("./service_models");
Object.defineProperty(exports, "VehicleRecall", { enumerable: true, get: function () { return service_models_1.VehicleRecall; } });
/** Required model and year returned for a nullable vehicle. */
class VehicleModelYear {
    vehicle_type;
    model;
    year;
    static __fields = [["vehicle_type", _runtime_1.py.MISSING], ["model", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleModelYear, __args); Object.freeze(this); }
}
exports.VehicleModelYear = VehicleModelYear;
_runtime_1.py.classType(VehicleModelYear);
/** Nullable nickname returned for a nullable vehicle. */
class VehicleNickname {
    vehicle_type;
    nickname;
    static __fields = [["vehicle_type", _runtime_1.py.MISSING], ["nickname", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleNickname, __args); Object.freeze(this); }
}
exports.VehicleNickname = VehicleNickname;
_runtime_1.py.classType(VehicleNickname);
/** Cached non-EV dynamic status together with vehicle recalls. */
class VehicleStatusAndRecalls {
    status;
    recalls;
    static __fields = [["status", _runtime_1.py.MISSING], ["recalls", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleStatusAndRecalls, __args); Object.freeze(this); }
}
exports.VehicleStatusAndRecalls = VehicleStatusAndRecalls;
_runtime_1.py.classType(VehicleStatusAndRecalls);
//# sourceMappingURL=vehicle_detail_models.js.map