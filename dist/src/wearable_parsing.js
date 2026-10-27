"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleWithCapabilities = exports.VehicleCapabilitySummary = exports.ServiceCapability = exports.ResponseError = void 0;
exports.parse_vehicles_with_capabilities = parse_vehicles_with_capabilities;
exports._parse_vehicle = _parse_vehicle;
exports._parse_optional_capabilities = _parse_optional_capabilities;
exports._parse_service_capability = _parse_service_capability;
exports._typed_object = _typed_object;
exports._nullable_list = _nullable_list;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._bool = _bool;
exports._nullable_bool = _nullable_bool;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "ServiceCapability", { enumerable: true, get: function () { return models_1.ServiceCapability; } });
const wearable_models_1 = require("./wearable_models");
Object.defineProperty(exports, "VehicleCapabilitySummary", { enumerable: true, get: function () { return wearable_models_1.VehicleCapabilitySummary; } });
Object.defineProperty(exports, "VehicleWithCapabilities", { enumerable: true, get: function () { return wearable_models_1.VehicleWithCapabilities; } });
/** Parse the wearable client's nullable batch vehicle response. */
function parse_vehicles_with_capabilities(...__args) {
    let index, value, values, vehicles;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the wearable client's nullable batch vehicle response. */
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, "vehicles")))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, ["vehicles is missing"], null);
    }
    values = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicles"], null), "vehicles"], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    vehicles = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((value === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(vehicles, "append"), [null], null);
            continue;
        }
        _runtime_1.py.call(_runtime_1.py.attr(vehicles, "append"), [_runtime_1.py.call(_parse_vehicle, [value, ("vehicles[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [vehicles], null);
}
/** Translated upstream _parse_vehicle. */
function _parse_vehicle(...__args) {
    let vehicle;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    vehicle = _runtime_1.py.call(_typed_object, [value, path], null);
    return _runtime_1.py.call(wearable_models_1.VehicleWithCapabilities, [], Object.assign({}, { "vin": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["vin"], null), (_runtime_1.py.str(path) + ".vin")], null) }, { "nickname": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["nickname"], null), (_runtime_1.py.str(path) + ".nickname")], null) }, { "image_url": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["image"], null), (_runtime_1.py.str(path) + ".image")], null) }, { "year": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["year"], null), (_runtime_1.py.str(path) + ".year")], null) }, { "model": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["model"], null), (_runtime_1.py.str(path) + ".model")], null) }, { "driver_type": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["driverType"], null), (_runtime_1.py.str(path) + ".driverType")], null) }, { "capabilities": _runtime_1.py.call(_parse_optional_capabilities, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["capabilities"], null), (_runtime_1.py.str(path) + ".capabilities")], null) }));
}
/** Translated upstream _parse_optional_capabilities. */
function _parse_optional_capabilities(...__args) {
    let capabilities, index, parsed_services, raw_service, raw_services, services;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    capabilities = _runtime_1.py.call(_typed_object, [value, path], null);
    raw_services = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["serviceCapability"], null), (_runtime_1.py.str(path) + ".serviceCapability")], null);
    services = null;
    if (_runtime_1.py.truth(((raw_services !== null)))) {
        parsed_services = [];
        for ([index, raw_service] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_services], null))) {
            if (_runtime_1.py.truth(((raw_service === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_services, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_services, "append"), [_runtime_1.py.call(_parse_service_capability, [raw_service, (_runtime_1.py.str(path) + ".serviceCapability[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        services = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_services], null);
    }
    return _runtime_1.py.call(wearable_models_1.VehicleCapabilitySummary, [], Object.assign({}, { "telematics_program": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["telematicsProgram"], null), (_runtime_1.py.str(path) + ".telematicsProgram")], null) }, { "enrollment_status": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["status"], null), (_runtime_1.py.str(path) + ".status")], null) }, { "services": services }));
}
/** Translated upstream _parse_service_capability. */
function _parse_service_capability(...__args) {
    let service;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    service = _runtime_1.py.call(_typed_object, [value, path], null);
    return _runtime_1.py.call(models_1.ServiceCapability, [], Object.assign({}, { "type": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(service, "get"), ["type"], null), (_runtime_1.py.str(path) + ".type")], null) }, { "enabled": _runtime_1.py.call(_bool, [_runtime_1.py.call(_runtime_1.py.attr(service, "get"), ["enabled"], null), (_runtime_1.py.str(path) + ".enabled")], null) }, { "subscribed": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(service, "get"), ["subscribed"], null), (_runtime_1.py.str(path) + ".subscribed")], null) }));
}
/** Translated upstream _typed_object. */
function _typed_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
    return value;
}
/** Translated upstream _nullable_list. */
function _nullable_list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _string. */
function _string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return value;
}
/** Translated upstream _nullable_string. */
function _nullable_string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_string, [value, path], null);
}
/** Translated upstream _bool. */
function _bool(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _nullable_bool. */
function _nullable_bool(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_bool, [value, path], null);
}
//# sourceMappingURL=wearable_parsing.js.map