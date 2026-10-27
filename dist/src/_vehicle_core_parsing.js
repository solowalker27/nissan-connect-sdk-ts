"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleStatus = exports.VehiclePhotos = exports.VehiclePhoto = exports.VehicleLocation = exports.VehicleAlerts = exports.VehicleAlertRequest = exports.VehicleAlertKind = exports.Vehicle = exports.ReminderNotificationsAfterLeavingVehicle = exports.DataPrivacyMode = exports.BreachAlerts = exports.BreachAlert = exports.ResponseError = exports._parse_tires = exports._parse_mileage = exports._parse_maintenance_indicator = exports._parse_location = exports._parse_engine_oil_drain_range = exports._parse_doors = exports._parse_distance = exports._parse_climate_status = exports._parse_battery = exports._parse_valet_alert = exports._parse_speed_alerts = exports._parse_curfew_alerts = exports._parse_boundary_alerts = exports._parse_alert_location = exports._required_str = exports._optional_str = exports._optional_object = exports._optional_list = exports._optional_int = exports._optional_datetime = exports._optional_camera_service = exports._optional_camera_position = exports._optional_bool = exports._object = exports._list = void 0;
exports.parse_vehicles = parse_vehicles;
exports.parse_vehicle_status = parse_vehicle_status;
exports.parse_vehicle_location = parse_vehicle_location;
exports.parse_photos_around_vehicle = parse_photos_around_vehicle;
exports.parse_vehicle_alerts = parse_vehicle_alerts;
exports.parse_breach_alerts = parse_breach_alerts;
exports.parse_alert_request_status = parse_alert_request_status;
exports.parse_vehicle_alert_request = parse_vehicle_alert_request;
exports.parse_reminder_notifications_after_leaving_vehicle = parse_reminder_notifications_after_leaving_vehicle;
exports.parse_toggle_reminder_notifications_after_leaving_vehicle = parse_toggle_reminder_notifications_after_leaving_vehicle;
exports.parse_vehicle_data_privacy_mode = parse_vehicle_data_privacy_mode;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _parsing_values_1 = require("./_parsing_values");
Object.defineProperty(exports, "_list", { enumerable: true, get: function () { return _parsing_values_1._list; } });
Object.defineProperty(exports, "_object", { enumerable: true, get: function () { return _parsing_values_1._object; } });
Object.defineProperty(exports, "_optional_bool", { enumerable: true, get: function () { return _parsing_values_1._optional_bool; } });
Object.defineProperty(exports, "_optional_camera_position", { enumerable: true, get: function () { return _parsing_values_1._optional_camera_position; } });
Object.defineProperty(exports, "_optional_camera_service", { enumerable: true, get: function () { return _parsing_values_1._optional_camera_service; } });
Object.defineProperty(exports, "_optional_datetime", { enumerable: true, get: function () { return _parsing_values_1._optional_datetime; } });
Object.defineProperty(exports, "_optional_int", { enumerable: true, get: function () { return _parsing_values_1._optional_int; } });
Object.defineProperty(exports, "_optional_list", { enumerable: true, get: function () { return _parsing_values_1._optional_list; } });
Object.defineProperty(exports, "_optional_object", { enumerable: true, get: function () { return _parsing_values_1._optional_object; } });
Object.defineProperty(exports, "_optional_str", { enumerable: true, get: function () { return _parsing_values_1._optional_str; } });
Object.defineProperty(exports, "_required_str", { enumerable: true, get: function () { return _parsing_values_1._required_str; } });
const _vehicle_alert_parsing_1 = require("./_vehicle_alert_parsing");
Object.defineProperty(exports, "_parse_alert_location", { enumerable: true, get: function () { return _vehicle_alert_parsing_1._parse_alert_location; } });
Object.defineProperty(exports, "_parse_boundary_alerts", { enumerable: true, get: function () { return _vehicle_alert_parsing_1._parse_boundary_alerts; } });
Object.defineProperty(exports, "_parse_curfew_alerts", { enumerable: true, get: function () { return _vehicle_alert_parsing_1._parse_curfew_alerts; } });
Object.defineProperty(exports, "_parse_speed_alerts", { enumerable: true, get: function () { return _vehicle_alert_parsing_1._parse_speed_alerts; } });
Object.defineProperty(exports, "_parse_valet_alert", { enumerable: true, get: function () { return _vehicle_alert_parsing_1._parse_valet_alert; } });
const _vehicle_response_parsing_1 = require("./_vehicle_response_parsing");
Object.defineProperty(exports, "_parse_battery", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_battery; } });
Object.defineProperty(exports, "_parse_climate_status", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_climate_status; } });
Object.defineProperty(exports, "_parse_distance", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_distance; } });
Object.defineProperty(exports, "_parse_doors", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_doors; } });
Object.defineProperty(exports, "_parse_engine_oil_drain_range", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_engine_oil_drain_range; } });
Object.defineProperty(exports, "_parse_location", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_location; } });
Object.defineProperty(exports, "_parse_maintenance_indicator", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_maintenance_indicator; } });
Object.defineProperty(exports, "_parse_mileage", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_mileage; } });
Object.defineProperty(exports, "_parse_tires", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_tires; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "BreachAlert", { enumerable: true, get: function () { return models_1.BreachAlert; } });
Object.defineProperty(exports, "BreachAlerts", { enumerable: true, get: function () { return models_1.BreachAlerts; } });
Object.defineProperty(exports, "DataPrivacyMode", { enumerable: true, get: function () { return models_1.DataPrivacyMode; } });
Object.defineProperty(exports, "ReminderNotificationsAfterLeavingVehicle", { enumerable: true, get: function () { return models_1.ReminderNotificationsAfterLeavingVehicle; } });
Object.defineProperty(exports, "Vehicle", { enumerable: true, get: function () { return models_1.Vehicle; } });
Object.defineProperty(exports, "VehicleAlertKind", { enumerable: true, get: function () { return models_1.VehicleAlertKind; } });
Object.defineProperty(exports, "VehicleAlertRequest", { enumerable: true, get: function () { return models_1.VehicleAlertRequest; } });
Object.defineProperty(exports, "VehicleAlerts", { enumerable: true, get: function () { return models_1.VehicleAlerts; } });
Object.defineProperty(exports, "VehicleLocation", { enumerable: true, get: function () { return models_1.VehicleLocation; } });
Object.defineProperty(exports, "VehiclePhoto", { enumerable: true, get: function () { return models_1.VehiclePhoto; } });
Object.defineProperty(exports, "VehiclePhotos", { enumerable: true, get: function () { return models_1.VehiclePhotos; } });
Object.defineProperty(exports, "VehicleStatus", { enumerable: true, get: function () { return models_1.VehicleStatus; } });
/** Parse the account vehicle list. */
function parse_vehicles(...__args) {
    let index, item, value, values, vehicles;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the account vehicle list. */
    values = _runtime_1.py.call(_parsing_values_1._list, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicles"], null), "vehicles"], null);
    vehicles = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        item = _runtime_1.py.call(_parsing_values_1._object, [value, ("vehicles[" + _runtime_1.py.str(index) + "]")], null);
        _runtime_1.py.call(_runtime_1.py.attr(vehicles, "append"), [_runtime_1.py.call(models_1.Vehicle, [], Object.assign({}, { "vin": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["vin"], null), ("vehicles[" + _runtime_1.py.str(index) + "].vin")], null) }, { "year": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["year"], null)], null) }, { "model": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["model"], null)], null) }, { "color": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["color"], null)], null) }, { "nickname": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["nickname"], null)], null) }, { "image_url": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["image"], null)], null) }, { "driver_type": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["driverType"], null)], null) }, { "plate": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["plate"], null)], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [vehicles], null);
}
/** Parse dynamic status for one vehicle. */
function parse_vehicle_status(...__args) {
    let battery_value, climate_value, doors_value, engine_oil_value, fuel_value, index, indicators, mileage_value, mils, tires_value, value, vehicle;
    let { "data": data, "vin": vin } = _runtime_1.py.bind(__args, ["data", "vin"], {}, [], null, null);
    /** Parse dynamic status for one vehicle. */
    vehicle = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    battery_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["batteryStatus"], null), "vehicle.batteryStatus"], null);
    climate_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["climateStatus"], null), "vehicle.climateStatus"], null);
    doors_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["doorsStatus"], null), "vehicle.doorsStatus"], null);
    fuel_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["fuelAutonomy"], null), "vehicle.fuelAutonomy"], null);
    mileage_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["mileage"], null), "vehicle.mileage"], null);
    tires_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["tirePressure"], null), "vehicle.tirePressure"], null);
    engine_oil_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["engineOilDrainRange"], null), "vehicle.engineOilDrainRange"], null);
    mils = _runtime_1.py.or(() => _runtime_1.py.call(_parsing_values_1._optional_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["mils"], null), "vehicle.mils"], null), () => []);
    indicators = _runtime_1.py.call(_runtime_1.py.tuple, [(() => { const __out = []; for (const [index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [mils], null))) {
            __out.push(_runtime_1.py.call(_vehicle_response_parsing_1._parse_maintenance_indicator, [_runtime_1.py.call(_parsing_values_1._object, [value, ("vehicle.mils[" + _runtime_1.py.str(index) + "]")], null)], null));
        } return __out; })()], null);
    return _runtime_1.py.call(models_1.VehicleStatus, [], Object.assign({}, { "vin": vin }, { "vehicle_type": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["__typename"], null)], null) }, { "battery": (_runtime_1.py.truth(((battery_value !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_battery, [battery_value], null) : null) }, { "climate": (_runtime_1.py.truth(((climate_value !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_climate_status, [climate_value], null) : null) }, { "doors": (_runtime_1.py.truth(((doors_value !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_doors, [doors_value], null) : null) }, { "fuel_range": (_runtime_1.py.truth(((fuel_value !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_distance, [fuel_value], null) : null) }, { "mileage": (_runtime_1.py.truth(((mileage_value !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_mileage, [mileage_value], null) : null) }, { "tire_pressure": (_runtime_1.py.truth(((tires_value !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_tires, [tires_value], null) : null) }, { "maintenance_indicators": indicators }, { "engine_oil_drain_range": (_runtime_1.py.truth(((engine_oil_value !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_engine_oil_drain_range, [engine_oil_value], null) : null) }));
}
/** Parse the cached vehicle location query. */
function parse_vehicle_location(...__args) {
    let location, vehicle;
    let { "data": data, "vin": vin } = _runtime_1.py.bind(__args, ["data", "vin"], {}, [], null, null);
    /** Parse the cached vehicle location query. */
    vehicle = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    location = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["location"], null), "vehicle.location"], null);
    if (_runtime_1.py.truth(((location === null)))) {
        return _runtime_1.py.call(models_1.VehicleLocation, [], Object.assign({}, { "vin": vin }, { "latitude": null }, { "longitude": null }, { "last_updated_at": null }));
    }
    return _runtime_1.py.call(_vehicle_response_parsing_1._parse_location, [location, vin], null);
}
/** Parse photos currently available around a vehicle. */
function parse_photos_around_vehicle(...__args) {
    let index, item, parsed_photos, photos, value, values, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse photos currently available around a vehicle. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    values = _runtime_1.py.call(_parsing_values_1._optional_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["photosAroundVehicle"], null), "vehicle.photosAroundVehicle"], null);
    photos = null;
    if (_runtime_1.py.truth(((values !== null)))) {
        parsed_photos = [];
        for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
            if (_runtime_1.py.truth(((value === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_photos, "append"), [null], null);
                continue;
            }
            item = _runtime_1.py.call(_parsing_values_1._object, [value, ("vehicle.photosAroundVehicle[" + _runtime_1.py.str(index) + "]")], null);
            _runtime_1.py.call(_runtime_1.py.attr(parsed_photos, "append"), [_runtime_1.py.call(models_1.VehiclePhoto, [], Object.assign({}, { "id": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["id"], null)], null) }, { "filename": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["filename"], null)], null) }, { "link": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["link"], null)], null) }, { "timestamp": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["timeStamp"], null)], null) }, { "camera_position": _runtime_1.py.call(_parsing_values_1._optional_camera_position, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["cameraPosition"], null)], null) }, { "camera_service": _runtime_1.py.call(_parsing_values_1._optional_camera_service, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["cameraService"], null)], null) }))], null);
        }
        photos = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_photos], null);
    }
    return _runtime_1.py.call(models_1.VehiclePhotos, [], Object.assign({}, { "vin": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["vin"], null), "vehicle.vin"], null) }, { "year": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["year"], null), "vehicle.year"], null) }, { "model": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["model"], null), "vehicle.model"], null) }, { "photos": photos }));
}
/** Parse all configured alerts for one connected vehicle. */
function parse_vehicle_alerts(...__args) {
    let alert_fields, field, valet_value, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse all configured alerts for one connected vehicle. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    alert_fields = ["boundaryAlerts", "curfewAlerts", "speedAlerts", "valetAlert"];
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.any, [(() => { const __out = []; for (const field of _runtime_1.py.iterable(alert_fields)) {
            __out.push((_runtime_1.py.contains(vehicle, field)));
        } return __out; })()], null)))) {
        return null;
    }
    valet_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["valetAlert"], null), "vehicle.valetAlert"], null);
    return _runtime_1.py.call(models_1.VehicleAlerts, [], Object.assign({}, { "boundary_alerts": _runtime_1.py.call(_vehicle_alert_parsing_1._parse_boundary_alerts, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["boundaryAlerts"], null)], null) }, { "curfew_alerts": _runtime_1.py.call(_vehicle_alert_parsing_1._parse_curfew_alerts, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["curfewAlerts"], null)], null) }, { "speed_alerts": _runtime_1.py.call(_vehicle_alert_parsing_1._parse_speed_alerts, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["speedAlerts"], null)], null) }, { "valet_alert": (_runtime_1.py.truth(((valet_value !== null))) ? _runtime_1.py.call(_vehicle_alert_parsing_1._parse_valet_alert, [valet_value], null) : null) }));
}
/** Parse one page of raw vehicle-alert breach events. */
function parse_breach_alerts(...__args) {
    let alerts, index, item, location_value, page, parsed_alerts, path, value, values, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse one page of raw vehicle-alert breach events. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    page = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["breachAlerts"], null), "vehicle.breachAlerts"], null);
    if (_runtime_1.py.truth(((page === null)))) {
        return null;
    }
    values = _runtime_1.py.call(_parsing_values_1._optional_list, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["alerts"], null), "vehicle.breachAlerts.alerts"], null);
    alerts = null;
    if (_runtime_1.py.truth(((values !== null)))) {
        parsed_alerts = [];
        for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
            if (_runtime_1.py.truth(((value === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_alerts, "append"), [null], null);
                continue;
            }
            path = ("vehicle.breachAlerts.alerts[" + _runtime_1.py.str(index) + "]");
            item = _runtime_1.py.call(_parsing_values_1._object, [value, path], null);
            location_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["location"], null), (_runtime_1.py.str(path) + ".location")], null);
            _runtime_1.py.call(_runtime_1.py.attr(parsed_alerts, "append"), [_runtime_1.py.call(models_1.BreachAlert, [], Object.assign({}, { "service_type": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["serviceType"], null)], null) }, { "breach_date_time": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["breachDateTime"], null)], null) }, { "name": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["name"], null)], null) }, { "location": (_runtime_1.py.truth(((location_value !== null))) ? _runtime_1.py.call(_vehicle_alert_parsing_1._parse_alert_location, [location_value], null) : null) }))], null);
        }
        alerts = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_alerts], null);
    }
    return _runtime_1.py.call(models_1.BreachAlerts, [], Object.assign({}, { "items_per_page": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["itemsPerPage"], null)], null) }, { "page_number": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["pageNumber"], null)], null) }, { "total_items": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["totalItems"], null)], null) }, { "total_pages": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["totalPages"], null)], null) }, { "alerts": alerts }));
}
/** Parse the raw status returned by one vehicle-alert detail query. */
function parse_alert_request_status(...__args) {
    let alert, vehicle;
    let { "data": data, "root_field": root_field, "status_required": status_required } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, ["status_required"], null, null);
    /** Parse the raw status returned by one vehicle-alert detail query. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    alert = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), [root_field], null), ("vehicle." + _runtime_1.py.str(root_field))], null);
    if (_runtime_1.py.truth(((alert === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(status_required)) {
        return _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(alert, "get"), ["status"], null), ("vehicle." + _runtime_1.py.str(root_field) + ".status")], null);
    }
    return _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(alert, "get"), ["status"], null)], null);
}
/** Parse an accepted asynchronous vehicle-alert change. */
function parse_vehicle_alert_request(...__args) {
    let message, request_id, result;
    let { "data": data, "root_field": root_field, "kind": kind } = _runtime_1.py.bind(__args, ["data", "root_field", "kind"], {}, [], null, null);
    /** Parse an accepted asynchronous vehicle-alert change. */
    result = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    request_id = _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["serviceRequestId"], null)], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(request_id))) {
        message = _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["message"], null)], null);
        if (_runtime_1.py.truth(message)) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [message], null);
        }
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " did not return a service request id")], null);
    }
    return _runtime_1.py.call(models_1.VehicleAlertRequest, [request_id, kind], null);
}
/** Parse nullable after-leaving reminder flags for an AVK2 vehicle. */
function parse_reminder_notifications_after_leaving_vehicle(...__args) {
    let reminders, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable after-leaving reminder flags for an AVK2 vehicle. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    reminders = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["reminderNotificationsAfterLeavingVehicle"], null), "vehicle.reminderNotificationsAfterLeavingVehicle"], null);
    if (_runtime_1.py.truth(((reminders === null)))) {
        return null;
    }
    return _runtime_1.py.call(models_1.ReminderNotificationsAfterLeavingVehicle, [], Object.assign({}, { "lock": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(reminders, "get"), ["lock"], null)], null) }, { "door": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(reminders, "get"), ["door"], null)], null) }, { "trunk": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(reminders, "get"), ["trunk"], null)], null) }, { "sunroof": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(reminders, "get"), ["sunroof"], null)], null) }, { "window": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(reminders, "get"), ["window"], null)], null) }));
}
/** Parse the nullable success value returned by the reminder mutation. */
function parse_toggle_reminder_notifications_after_leaving_vehicle(...__args) {
    let result;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable success value returned by the reminder mutation. */
    result = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["toggleReminderNotificationsAfterLeavingVehicle"], null), "toggleReminderNotificationsAfterLeavingVehicle"], null);
    return (_runtime_1.py.truth(((result !== null))) ? _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["success"], null)], null) : null);
}
/** Parse a vehicle's required privacy mode when the vehicle exists. */
function parse_vehicle_data_privacy_mode(...__args) {
    let raw_mode, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a vehicle's required privacy mode when the vehicle exists. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    raw_mode = _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["dataPrivacyMode"], null), "vehicle.dataPrivacyMode"], null);
    try {
        return _runtime_1.py.call(models_1.DataPrivacyMode, [raw_mode], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(models_1.DataPrivacyMode, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=_vehicle_core_parsing.js.map