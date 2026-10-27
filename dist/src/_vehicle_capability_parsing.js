"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WayPointCapability = exports.VehicleCapabilities = exports.VehicleAccessoriesDetails = exports.SunRoofCapability = exports.ServiceCapability = exports.SeatHeaterCapability = exports.SeatHeaterAccessories = exports.HvacTemperatureCapabilities = exports.AccessoryCapability = exports._required_str = exports._required_float = exports._required_bool = exports._optional_str = exports._optional_object = exports._optional_list = exports._optional_int = exports._optional_bool = exports._object = void 0;
exports.parse_vehicle_capabilities = parse_vehicle_capabilities;
exports._parse_vehicle_accessories_details = _parse_vehicle_accessories_details;
exports._parse_seat_heater_capability = _parse_seat_heater_capability;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _parsing_values_1 = require("./_parsing_values");
Object.defineProperty(exports, "_object", { enumerable: true, get: function () { return _parsing_values_1._object; } });
Object.defineProperty(exports, "_optional_bool", { enumerable: true, get: function () { return _parsing_values_1._optional_bool; } });
Object.defineProperty(exports, "_optional_int", { enumerable: true, get: function () { return _parsing_values_1._optional_int; } });
Object.defineProperty(exports, "_optional_list", { enumerable: true, get: function () { return _parsing_values_1._optional_list; } });
Object.defineProperty(exports, "_optional_object", { enumerable: true, get: function () { return _parsing_values_1._optional_object; } });
Object.defineProperty(exports, "_optional_str", { enumerable: true, get: function () { return _parsing_values_1._optional_str; } });
Object.defineProperty(exports, "_required_bool", { enumerable: true, get: function () { return _parsing_values_1._required_bool; } });
Object.defineProperty(exports, "_required_float", { enumerable: true, get: function () { return _parsing_values_1._required_float; } });
Object.defineProperty(exports, "_required_str", { enumerable: true, get: function () { return _parsing_values_1._required_str; } });
const models_1 = require("./models");
Object.defineProperty(exports, "AccessoryCapability", { enumerable: true, get: function () { return models_1.AccessoryCapability; } });
Object.defineProperty(exports, "HvacTemperatureCapabilities", { enumerable: true, get: function () { return models_1.HvacTemperatureCapabilities; } });
Object.defineProperty(exports, "SeatHeaterAccessories", { enumerable: true, get: function () { return models_1.SeatHeaterAccessories; } });
Object.defineProperty(exports, "SeatHeaterCapability", { enumerable: true, get: function () { return models_1.SeatHeaterCapability; } });
Object.defineProperty(exports, "ServiceCapability", { enumerable: true, get: function () { return models_1.ServiceCapability; } });
Object.defineProperty(exports, "SunRoofCapability", { enumerable: true, get: function () { return models_1.SunRoofCapability; } });
Object.defineProperty(exports, "VehicleAccessoriesDetails", { enumerable: true, get: function () { return models_1.VehicleAccessoriesDetails; } });
Object.defineProperty(exports, "VehicleCapabilities", { enumerable: true, get: function () { return models_1.VehicleCapabilities; } });
Object.defineProperty(exports, "WayPointCapability", { enumerable: true, get: function () { return models_1.WayPointCapability; } });
/** Parse connected services advertised for one vehicle. */
function parse_vehicle_capabilities(...__args) {
    let capabilities, index, item, service_values, services, value, vehicle;
    let { "data": data, "vin": vin } = _runtime_1.py.bind(__args, ["data", "vin"], {}, [], null, null);
    /** Parse connected services advertised for one vehicle. */
    vehicle = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    capabilities = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["capabilities"], null), "vehicle.capabilities"], null);
    if (_runtime_1.py.truth(((capabilities === null)))) {
        return _runtime_1.py.call(models_1.VehicleCapabilities, [vin, null, null, []], null);
    }
    service_values = _runtime_1.py.or(() => _runtime_1.py.call(_parsing_values_1._optional_list, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["serviceCapability"], null), "vehicle.capabilities.serviceCapability"], null), () => []);
    services = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [service_values], null))) {
        item = _runtime_1.py.call(_parsing_values_1._object, [value, ("vehicle.capabilities.serviceCapability[" + _runtime_1.py.str(index) + "]")], null);
        _runtime_1.py.call(_runtime_1.py.attr(services, "append"), [_runtime_1.py.call(models_1.ServiceCapability, [], Object.assign({}, { "type": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["type"], null), "serviceCapability.type"], null) }, { "enabled": _runtime_1.py.call(_parsing_values_1._required_bool, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["enabled"], null), "serviceCapability.enabled"], null) }, { "subscribed": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["subscribed"], null)], null) }))], null);
    }
    return _runtime_1.py.call(models_1.VehicleCapabilities, [], Object.assign({}, { "vin": vin }, { "telematics_program": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["telematicsProgram"], null)], null) }, { "enrollment_status": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["status"], null)], null) }, { "services": _runtime_1.py.call(_runtime_1.py.tuple, [services], null) }, { "accessories_details": _runtime_1.py.call(_parse_vehicle_accessories_details, [_runtime_1.py.call(_runtime_1.py.attr(capabilities, "get"), ["accessoriesDetails"], null)], null) }));
}
/** Translated upstream _parse_vehicle_accessories_details. */
function _parse_vehicle_accessories_details(...__args) {
    let details, hvac_temperatures, seat_heater, steering_heat, sun_roof, way_point, window_status;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    details = _runtime_1.py.call(_parsing_values_1._optional_object, [value, "vehicle.capabilities.accessoriesDetails"], null);
    if (_runtime_1.py.truth(((details === null)))) {
        return null;
    }
    seat_heater = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["seatHeater"], null), "vehicle.capabilities.accessoriesDetails.seatHeater"], null);
    steering_heat = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["steeringHeat"], null), "vehicle.capabilities.accessoriesDetails.steeringHeat"], null);
    sun_roof = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["sunRoof"], null), "vehicle.capabilities.accessoriesDetails.sunRoof"], null);
    window_status = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["windowStatus"], null), "vehicle.capabilities.accessoriesDetails.windowStatus"], null);
    way_point = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["wayPoint"], null), "vehicle.capabilities.accessoriesDetails.wayPoint"], null);
    hvac_temperatures = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(details, "get"), ["hvacTemperatures"], null), "vehicle.capabilities.accessoriesDetails.hvacTemperatures"], null);
    return _runtime_1.py.call(models_1.VehicleAccessoriesDetails, [], Object.assign({}, { "seat_heater": (_runtime_1.py.truth(((seat_heater !== null))) ? _runtime_1.py.call(_parse_seat_heater_capability, [seat_heater], null) : null) }, { "steering_heat": (_runtime_1.py.truth(((steering_heat !== null))) ? _runtime_1.py.call(models_1.AccessoryCapability, [], Object.assign({}, { "enabled": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(steering_heat, "get"), ["enabled"], null)], null) })) : null) }, { "sun_roof": (_runtime_1.py.truth(((sun_roof !== null))) ? _runtime_1.py.call(models_1.SunRoofCapability, [], Object.assign({}, { "type": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(sun_roof, "get"), ["type"], null)], null) }, { "enabled": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(sun_roof, "get"), ["enabled"], null)], null) })) : null) }, { "window_status": (_runtime_1.py.truth(((window_status !== null))) ? _runtime_1.py.call(models_1.AccessoryCapability, [], Object.assign({}, { "enabled": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(window_status, "get"), ["enabled"], null)], null) })) : null) }, { "way_point": (_runtime_1.py.truth(((way_point !== null))) ? _runtime_1.py.call(models_1.WayPointCapability, [], Object.assign({}, { "enabled": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(way_point, "get"), ["enabled"], null)], null) }, { "max_number": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(way_point, "get"), ["maxNumber"], null)], null) })) : null) }, { "hvac_temperatures": (_runtime_1.py.truth(((hvac_temperatures !== null))) ? _runtime_1.py.call(models_1.HvacTemperatureCapabilities, [], Object.assign({}, { "unit": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(hvac_temperatures, "get"), ["unit"], null), "hvacTemperatures.unit"], null) }, { "default": _runtime_1.py.call(_parsing_values_1._required_float, [_runtime_1.py.call(_runtime_1.py.attr(hvac_temperatures, "get"), ["default"], null), "hvacTemperatures.default"], null) }, { "minimum": _runtime_1.py.call(_parsing_values_1._required_float, [_runtime_1.py.call(_runtime_1.py.attr(hvac_temperatures, "get"), ["min"], null), "hvacTemperatures.min"], null) }, { "maximum": _runtime_1.py.call(_parsing_values_1._required_float, [_runtime_1.py.call(_runtime_1.py.attr(hvac_temperatures, "get"), ["max"], null), "hvacTemperatures.max"], null) }, { "resolution": _runtime_1.py.call(_parsing_values_1._required_float, [_runtime_1.py.call(_runtime_1.py.attr(hvac_temperatures, "get"), ["resolution"], null), "hvacTemperatures.resolution"], null) })) : null) }));
}
/** Translated upstream _parse_seat_heater_capability. */
function _parse_seat_heater_capability(...__args) {
    let accessories, parsed_accessories;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    accessories = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["accessories"], null), "vehicle.capabilities.accessoriesDetails.seatHeater.accessories"], null);
    parsed_accessories = null;
    if (_runtime_1.py.truth(((accessories !== null)))) {
        parsed_accessories = _runtime_1.py.call(models_1.SeatHeaterAccessories, [], Object.assign({}, { "assistant_seat": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(accessories, "get"), ["assistantSeat"], null)], null) }, { "driver_seat": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(accessories, "get"), ["driverSeat"], null)], null) }, { "second_centre_seat": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(accessories, "get"), ["secondCentreSeat"], null)], null) }, { "second_left_seat": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(accessories, "get"), ["secondLeftSeat"], null)], null) }, { "second_right_seat": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(accessories, "get"), ["secondRightSeat"], null)], null) }, { "third_left_seat": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(accessories, "get"), ["thirdLeftSeat"], null)], null) }, { "third_right_seat": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(accessories, "get"), ["thirdRightSeat"], null)], null) }));
    }
    return _runtime_1.py.call(models_1.SeatHeaterCapability, [], Object.assign({}, { "enabled": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["enabled"], null)], null) }, { "accessories": parsed_accessories }));
}
//# sourceMappingURL=_vehicle_capability_parsing.js.map