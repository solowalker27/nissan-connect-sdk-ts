"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleStatusAndRecalls = exports.VehicleNickname = exports.VehicleModelYear = exports.parse_vehicle_recalls = exports.parse_vehicle_status = exports.parse_vehicle_alerts = exports.VehicleStatus = exports.ValetAlert = exports.SpeedAlert = exports.DoorsStatus = exports.CurfewAlert = exports.ClimateStatus = exports.BoundaryAlert = exports.BatteryStatus = exports.ResponseError = void 0;
exports.parse_vehicle_battery_status = parse_vehicle_battery_status;
exports.parse_vehicle_boundary_alerts = parse_vehicle_boundary_alerts;
exports.parse_vehicle_climate_status = parse_vehicle_climate_status;
exports.parse_vehicle_curfew_alerts = parse_vehicle_curfew_alerts;
exports.parse_vehicle_doors_status = parse_vehicle_doors_status;
exports.parse_vehicle_model_year = parse_vehicle_model_year;
exports.parse_vehicle_nickname = parse_vehicle_nickname;
exports.parse_vehicle_speed_alerts = parse_vehicle_speed_alerts;
exports.parse_vehicle_core_status = parse_vehicle_core_status;
exports.parse_vehicle_status_and_recalls = parse_vehicle_status_and_recalls;
exports.parse_vehicle_valet_alert = parse_vehicle_valet_alert;
exports._nullable_vehicle = _nullable_vehicle;
exports._required_string = _required_string;
exports._required_nullable_string = _required_nullable_string;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "BatteryStatus", { enumerable: true, get: function () { return models_1.BatteryStatus; } });
Object.defineProperty(exports, "BoundaryAlert", { enumerable: true, get: function () { return models_1.BoundaryAlert; } });
Object.defineProperty(exports, "ClimateStatus", { enumerable: true, get: function () { return models_1.ClimateStatus; } });
Object.defineProperty(exports, "CurfewAlert", { enumerable: true, get: function () { return models_1.CurfewAlert; } });
Object.defineProperty(exports, "DoorsStatus", { enumerable: true, get: function () { return models_1.DoorsStatus; } });
Object.defineProperty(exports, "SpeedAlert", { enumerable: true, get: function () { return models_1.SpeedAlert; } });
Object.defineProperty(exports, "ValetAlert", { enumerable: true, get: function () { return models_1.ValetAlert; } });
Object.defineProperty(exports, "VehicleStatus", { enumerable: true, get: function () { return models_1.VehicleStatus; } });
const parsing_1 = require("./parsing");
Object.defineProperty(exports, "parse_vehicle_alerts", { enumerable: true, get: function () { return parsing_1.parse_vehicle_alerts; } });
Object.defineProperty(exports, "parse_vehicle_status", { enumerable: true, get: function () { return parsing_1.parse_vehicle_status; } });
const service_parsing_1 = require("./service_parsing");
Object.defineProperty(exports, "parse_vehicle_recalls", { enumerable: true, get: function () { return service_parsing_1.parse_vehicle_recalls; } });
const vehicle_detail_models_1 = require("./vehicle_detail_models");
Object.defineProperty(exports, "VehicleModelYear", { enumerable: true, get: function () { return vehicle_detail_models_1.VehicleModelYear; } });
Object.defineProperty(exports, "VehicleNickname", { enumerable: true, get: function () { return vehicle_detail_models_1.VehicleNickname; } });
Object.defineProperty(exports, "VehicleStatusAndRecalls", { enumerable: true, get: function () { return vehicle_detail_models_1.VehicleStatusAndRecalls; } });
/** Parse the nullable battery fragment from VehicleBatteryStatus. */
function parse_vehicle_battery_status(...__args) {
    let { "data": data, "vin": vin } = _runtime_1.py.bind(__args, ["data", "vin"], {}, [], null, null);
    /** Parse the nullable battery fragment from VehicleBatteryStatus. */
    if (_runtime_1.py.truth(((_runtime_1.py.call(_nullable_vehicle, [data], null) === null)))) {
        return null;
    }
    return _runtime_1.py.attr(_runtime_1.py.call(parsing_1.parse_vehicle_status, [data, vin], null), "battery");
}
/** Parse the nullable boundary-alert collection. */
function parse_vehicle_boundary_alerts(...__args) {
    let alerts;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable boundary-alert collection. */
    alerts = _runtime_1.py.call(parsing_1.parse_vehicle_alerts, [data], null);
    return (_runtime_1.py.truth(((alerts !== null))) ? _runtime_1.py.attr(alerts, "boundary_alerts") : null);
}
/** Parse the nullable climate fragment from VehicleClimateStatus. */
function parse_vehicle_climate_status(...__args) {
    let { "data": data, "vin": vin } = _runtime_1.py.bind(__args, ["data", "vin"], {}, [], null, null);
    /** Parse the nullable climate fragment from VehicleClimateStatus. */
    if (_runtime_1.py.truth(((_runtime_1.py.call(_nullable_vehicle, [data], null) === null)))) {
        return null;
    }
    return _runtime_1.py.attr(_runtime_1.py.call(parsing_1.parse_vehicle_status, [data, vin], null), "climate");
}
/** Parse the nullable curfew-alert collection. */
function parse_vehicle_curfew_alerts(...__args) {
    let alerts;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable curfew-alert collection. */
    alerts = _runtime_1.py.call(parsing_1.parse_vehicle_alerts, [data], null);
    return (_runtime_1.py.truth(((alerts !== null))) ? _runtime_1.py.attr(alerts, "curfew_alerts") : null);
}
/** Parse the nullable doors fragment from VehicleDoorsStatus. */
function parse_vehicle_doors_status(...__args) {
    let { "data": data, "vin": vin } = _runtime_1.py.bind(__args, ["data", "vin"], {}, [], null, null);
    /** Parse the nullable doors fragment from VehicleDoorsStatus. */
    if (_runtime_1.py.truth(((_runtime_1.py.call(_nullable_vehicle, [data], null) === null)))) {
        return null;
    }
    return _runtime_1.py.attr(_runtime_1.py.call(parsing_1.parse_vehicle_status, [data, vin], null), "doors");
}
/** Parse the required model and year for a nullable vehicle. */
function parse_vehicle_model_year(...__args) {
    let vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the required model and year for a nullable vehicle. */
    vehicle = _runtime_1.py.call(_nullable_vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    return _runtime_1.py.call(vehicle_detail_models_1.VehicleModelYear, [], Object.assign({}, { "vehicle_type": _runtime_1.py.call(_required_string, [vehicle, "__typename", "vehicle.__typename"], null) }, { "model": _runtime_1.py.call(_required_string, [vehicle, "model", "vehicle.model"], null) }, { "year": _runtime_1.py.call(_required_string, [vehicle, "year", "vehicle.year"], null) }));
}
/** Parse the nullable nickname for a nullable vehicle. */
function parse_vehicle_nickname(...__args) {
    let vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable nickname for a nullable vehicle. */
    vehicle = _runtime_1.py.call(_nullable_vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    return _runtime_1.py.call(vehicle_detail_models_1.VehicleNickname, [], Object.assign({}, { "vehicle_type": _runtime_1.py.call(_required_string, [vehicle, "__typename", "vehicle.__typename"], null) }, { "nickname": _runtime_1.py.call(_required_nullable_string, [vehicle, "nickname", "vehicle.nickname"], null) }));
}
/** Parse the nullable speed-alert collection. */
function parse_vehicle_speed_alerts(...__args) {
    let alerts;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable speed-alert collection. */
    alerts = _runtime_1.py.call(parsing_1.parse_vehicle_alerts, [data], null);
    return (_runtime_1.py.truth(((alerts !== null))) ? _runtime_1.py.attr(alerts, "speed_alerts") : null);
}
/** Parse the nullable non-EV dynamic VehicleStatus response. */
function parse_vehicle_core_status(...__args) {
    let { "data": data, "vin": vin } = _runtime_1.py.bind(__args, ["data", "vin"], {}, [], null, null);
    /** Parse the nullable non-EV dynamic VehicleStatus response. */
    if (_runtime_1.py.truth(((_runtime_1.py.call(_nullable_vehicle, [data], null) === null)))) {
        return null;
    }
    return _runtime_1.py.call(parsing_1.parse_vehicle_status, [data, vin], null);
}
/** Parse cached dynamic status and the non-null recall list. */
function parse_vehicle_status_and_recalls(...__args) {
    let recalls;
    let { "data": data, "vin": vin } = _runtime_1.py.bind(__args, ["data", "vin"], {}, [], null, null);
    /** Parse cached dynamic status and the non-null recall list. */
    if (_runtime_1.py.truth(((_runtime_1.py.call(_nullable_vehicle, [data], null) === null)))) {
        return null;
    }
    recalls = _runtime_1.py.call(service_parsing_1.parse_vehicle_recalls, [data], null);
    if (_runtime_1.py.truth(((recalls === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, ["vehicle.recalls is missing"], null);
    }
    return _runtime_1.py.call(vehicle_detail_models_1.VehicleStatusAndRecalls, [], Object.assign({}, { "status": _runtime_1.py.call(parsing_1.parse_vehicle_status, [data, vin], null) }, { "recalls": recalls }));
}
/** Parse the nullable valet-alert object. */
function parse_vehicle_valet_alert(...__args) {
    let alerts;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable valet-alert object. */
    alerts = _runtime_1.py.call(parsing_1.parse_vehicle_alerts, [data], null);
    return (_runtime_1.py.truth(((alerts !== null))) ? _runtime_1.py.attr(alerts, "valet_alert") : null);
}
/** Translated upstream _nullable_vehicle. */
function _nullable_vehicle(...__args) {
    let value;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, "vehicle")))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, ["vehicle is missing"], null);
    }
    value = _runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, ["vehicle is not an object"], null);
    }
    return value;
}
/** Translated upstream _required_string. */
function _required_string(...__args) {
    let raw;
    let { "value": value, "field": field, "path": path } = _runtime_1.py.bind(__args, ["value", "field", "path"], {}, [], null, null);
    raw = _runtime_1.py.call(_runtime_1.py.attr(value, "get"), [field], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [raw, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return raw;
}
/** Translated upstream _required_nullable_string. */
function _required_nullable_string(...__args) {
    let raw;
    let { "value": value, "field": field, "path": path } = _runtime_1.py.bind(__args, ["value", "field", "path"], {}, [], null, null);
    raw = _runtime_1.py.call(_runtime_1.py.attr(value, "get"), [field], null);
    if (_runtime_1.py.truth(((raw === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [raw, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return raw;
}
//# sourceMappingURL=vehicle_detail_parsing.js.map