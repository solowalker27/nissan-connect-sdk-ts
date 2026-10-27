"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequestResult = exports.VehicleAlertRequest = exports.ServiceRequest = exports.ClimateScheduleInput = exports.ChargeScheduleInput = exports.ClimateSettings = exports.ClimateParameters = exports.SeatClimateSettings = exports.Tokens = exports.VehicleLocation = exports.WeekDay = exports.VehicleAlertKind = exports.TemperatureUnit = exports.ServiceRequestStatus = exports.ServiceRequestKind = exports.SeatClimateOption = exports._TERMINAL_SERVICE_REQUEST_STATUSES = exports._SUCCESSFUL_SERVICE_REQUEST_STATUSES = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const _core_models_1 = require("./_core_models");
Object.defineProperty(exports, "_SUCCESSFUL_SERVICE_REQUEST_STATUSES", { enumerable: true, get: function () { return _core_models_1._SUCCESSFUL_SERVICE_REQUEST_STATUSES; } });
Object.defineProperty(exports, "_TERMINAL_SERVICE_REQUEST_STATUSES", { enumerable: true, get: function () { return _core_models_1._TERMINAL_SERVICE_REQUEST_STATUSES; } });
Object.defineProperty(exports, "SeatClimateOption", { enumerable: true, get: function () { return _core_models_1.SeatClimateOption; } });
Object.defineProperty(exports, "ServiceRequestKind", { enumerable: true, get: function () { return _core_models_1.ServiceRequestKind; } });
Object.defineProperty(exports, "ServiceRequestStatus", { enumerable: true, get: function () { return _core_models_1.ServiceRequestStatus; } });
Object.defineProperty(exports, "TemperatureUnit", { enumerable: true, get: function () { return _core_models_1.TemperatureUnit; } });
Object.defineProperty(exports, "VehicleAlertKind", { enumerable: true, get: function () { return _core_models_1.VehicleAlertKind; } });
Object.defineProperty(exports, "WeekDay", { enumerable: true, get: function () { return _core_models_1.WeekDay; } });
const _vehicle_status_models_1 = require("./_vehicle_status_models");
Object.defineProperty(exports, "VehicleLocation", { enumerable: true, get: function () { return _vehicle_status_models_1.VehicleLocation; } });
/** OAuth tokens issued by the MyNISSAN identity service. */
class Tokens {
    access_token;
    refresh_token;
    id_token;
    static __fields = [["access_token", _runtime_1.py.MISSING], ["refresh_token", _runtime_1.py.MISSING], ["id_token", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, Tokens, __args); Object.freeze(this); }
}
exports.Tokens = Tokens;
_runtime_1.py.classType(Tokens);
/** Optional climate mode for each supported seat position. */
class SeatClimateSettings {
    front_driver;
    front_passenger;
    rear_left;
    rear_right;
    rear_center;
    third_left;
    third_right;
    static __fields = [["front_driver", null], ["front_passenger", null], ["rear_left", null], ["rear_right", null], ["rear_center", null], ["third_left", null], ["third_right", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SeatClimateSettings, __args); Object.freeze(this); }
}
exports.SeatClimateSettings = SeatClimateSettings;
_runtime_1.py.classType(SeatClimateSettings);
/** Optional cabin accessories applied with a climate command. */
class ClimateParameters {
    seats;
    steering_wheel_heater;
    defrost_and_deicer;
    static __fields = [["seats", null], ["steering_wheel_heater", null], ["defrost_and_deicer", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ClimateParameters, __args); Object.freeze(this); }
}
exports.ClimateParameters = ClimateParameters;
_runtime_1.py.classType(ClimateParameters);
/** Target cabin temperature used by climate and engine commands. */
class ClimateSettings {
    temperature;
    unit;
    parameters;
    static __fields = [["temperature", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING], ["parameters", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ClimateSettings, __args); Object.freeze(this); }
}
exports.ClimateSettings = ClimateSettings;
_runtime_1.py.classType(ClimateSettings);
/** Fields used to create or replace a recurring charge schedule. */
class ChargeScheduleInput {
    start_date_time;
    duration;
    week_days;
    static __fields = [["start_date_time", _runtime_1.py.MISSING], ["duration", _runtime_1.py.MISSING], ["week_days", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ChargeScheduleInput, __args); Object.freeze(this); }
}
exports.ChargeScheduleInput = ChargeScheduleInput;
_runtime_1.py.classType(ChargeScheduleInput);
/** Fields used to create or replace a recurring climate schedule. */
class ClimateScheduleInput {
    start_date_time;
    week_days;
    climate;
    static __fields = [["start_date_time", _runtime_1.py.MISSING], ["week_days", _runtime_1.py.MISSING], ["climate", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ClimateScheduleInput, __args); Object.freeze(this); }
}
exports.ClimateScheduleInput = ClimateScheduleInput;
_runtime_1.py.classType(ClimateScheduleInput);
/** An asynchronous remote request accepted by Nissan. */
class ServiceRequest {
    id;
    kind;
    climate_defaults_success;
    climate_defaults_error_message;
    static __fields = [["id", _runtime_1.py.MISSING], ["kind", _runtime_1.py.MISSING], ["climate_defaults_success", null], ["climate_defaults_error_message", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceRequest, __args); Object.freeze(this); }
}
exports.ServiceRequest = ServiceRequest;
_runtime_1.py.classType(ServiceRequest);
/** An asynchronous vehicle-alert change accepted by Nissan. */
class VehicleAlertRequest {
    id;
    kind;
    static __fields = [["id", _runtime_1.py.MISSING], ["kind", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleAlertRequest, __args); Object.freeze(this); }
}
exports.VehicleAlertRequest = VehicleAlertRequest;
_runtime_1.py.classType(VehicleAlertRequest);
/** The latest upstream state of an asynchronous remote request. */
class ServiceRequestResult {
    status;
    status_details;
    location;
    activation_date_time;
    status_change_date_time;
    static __fields = [["status", _runtime_1.py.MISSING], ["status_details", null], ["location", null], ["activation_date_time", null], ["status_change_date_time", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceRequestResult, __args); Object.freeze(this); }
    /** Return whether Nissan has finished processing the request. */
    get is_terminal() {
        /** Return whether Nissan has finished processing the request. */
        return (_runtime_1.py.contains(_core_models_1._TERMINAL_SERVICE_REQUEST_STATUSES, _runtime_1.py.attr(this, "status")));
    }
    /** Return whether the request finished with a successful status. */
    get is_success() {
        /** Return whether the request finished with a successful status. */
        return _runtime_1.py.and(() => ((_runtime_1.py.attr(this, "status") !== null)), () => (_runtime_1.py.contains(_core_models_1._SUCCESSFUL_SERVICE_REQUEST_STATUSES, _runtime_1.py.attr(this, "status"))));
    }
}
exports.ServiceRequestResult = ServiceRequestResult;
_runtime_1.py.classType(ServiceRequestResult);
//# sourceMappingURL=_request_models.js.map