"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValetAlert = exports.SpeedThreshold = exports.SpeedAlert = exports.RemoteServiceHistoryEntry = exports.RemoteServiceHistory = exports.CurfewSchedule = exports.CurfewAlert = exports.BoundaryAlert = exports.AlertLocation = exports.AlertDistance = exports.AlertAddress = exports._required_str = exports._required_datetime = exports._required_bool = exports._optional_str = exports._optional_object = exports._optional_list = exports._optional_int = exports._optional_float = exports._optional_datetime = exports._optional_bool = exports._object = exports._list = void 0;
exports._parse_boundary_alerts = _parse_boundary_alerts;
exports._parse_curfew_alerts = _parse_curfew_alerts;
exports._parse_speed_alerts = _parse_speed_alerts;
exports._parse_valet_alert = _parse_valet_alert;
exports._parse_alert_address = _parse_alert_address;
exports._parse_alert_location = _parse_alert_location;
exports._parse_alert_distance = _parse_alert_distance;
exports._parse_curfew_schedule = _parse_curfew_schedule;
exports.parse_remote_service_history = parse_remote_service_history;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _parsing_values_1 = require("./_parsing_values");
Object.defineProperty(exports, "_list", { enumerable: true, get: function () { return _parsing_values_1._list; } });
Object.defineProperty(exports, "_object", { enumerable: true, get: function () { return _parsing_values_1._object; } });
Object.defineProperty(exports, "_optional_bool", { enumerable: true, get: function () { return _parsing_values_1._optional_bool; } });
Object.defineProperty(exports, "_optional_datetime", { enumerable: true, get: function () { return _parsing_values_1._optional_datetime; } });
Object.defineProperty(exports, "_optional_float", { enumerable: true, get: function () { return _parsing_values_1._optional_float; } });
Object.defineProperty(exports, "_optional_int", { enumerable: true, get: function () { return _parsing_values_1._optional_int; } });
Object.defineProperty(exports, "_optional_list", { enumerable: true, get: function () { return _parsing_values_1._optional_list; } });
Object.defineProperty(exports, "_optional_object", { enumerable: true, get: function () { return _parsing_values_1._optional_object; } });
Object.defineProperty(exports, "_optional_str", { enumerable: true, get: function () { return _parsing_values_1._optional_str; } });
Object.defineProperty(exports, "_required_bool", { enumerable: true, get: function () { return _parsing_values_1._required_bool; } });
Object.defineProperty(exports, "_required_datetime", { enumerable: true, get: function () { return _parsing_values_1._required_datetime; } });
Object.defineProperty(exports, "_required_str", { enumerable: true, get: function () { return _parsing_values_1._required_str; } });
const models_1 = require("./models");
Object.defineProperty(exports, "AlertAddress", { enumerable: true, get: function () { return models_1.AlertAddress; } });
Object.defineProperty(exports, "AlertDistance", { enumerable: true, get: function () { return models_1.AlertDistance; } });
Object.defineProperty(exports, "AlertLocation", { enumerable: true, get: function () { return models_1.AlertLocation; } });
Object.defineProperty(exports, "BoundaryAlert", { enumerable: true, get: function () { return models_1.BoundaryAlert; } });
Object.defineProperty(exports, "CurfewAlert", { enumerable: true, get: function () { return models_1.CurfewAlert; } });
Object.defineProperty(exports, "CurfewSchedule", { enumerable: true, get: function () { return models_1.CurfewSchedule; } });
Object.defineProperty(exports, "RemoteServiceHistory", { enumerable: true, get: function () { return models_1.RemoteServiceHistory; } });
Object.defineProperty(exports, "RemoteServiceHistoryEntry", { enumerable: true, get: function () { return models_1.RemoteServiceHistoryEntry; } });
Object.defineProperty(exports, "SpeedAlert", { enumerable: true, get: function () { return models_1.SpeedAlert; } });
Object.defineProperty(exports, "SpeedThreshold", { enumerable: true, get: function () { return models_1.SpeedThreshold; } });
Object.defineProperty(exports, "ValetAlert", { enumerable: true, get: function () { return models_1.ValetAlert; } });
/** Translated upstream _parse_boundary_alerts. */
function _parse_boundary_alerts(...__args) {
    let address_value, alerts, index, item, location_value, path, radius_value, raw_item, values;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    values = _runtime_1.py.call(_parsing_values_1._optional_list, [value, "vehicle.boundaryAlerts"], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    alerts = [];
    for ([index, raw_item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((raw_item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(alerts, "append"), [null], null);
            continue;
        }
        path = ("vehicle.boundaryAlerts[" + _runtime_1.py.str(index) + "]");
        item = _runtime_1.py.call(_parsing_values_1._object, [raw_item, path], null);
        address_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["address"], null), (_runtime_1.py.str(path) + ".address")], null);
        location_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["location"], null), (_runtime_1.py.str(path) + ".location")], null);
        radius_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["radius"], null), (_runtime_1.py.str(path) + ".radius")], null);
        _runtime_1.py.call(_runtime_1.py.attr(alerts, "append"), [_runtime_1.py.call(models_1.BoundaryAlert, [], Object.assign({}, { "service_request_id": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["serviceRequestId"], null), (_runtime_1.py.str(path) + ".serviceRequestId")], null) }, { "alert_type": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["alertType"], null)], null) }, { "name": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["name"], null), (_runtime_1.py.str(path) + ".name")], null) }, { "enabled": _runtime_1.py.call(_parsing_values_1._required_bool, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["enabled"], null), (_runtime_1.py.str(path) + ".enabled")], null) }, { "in_vehicle_warning": _runtime_1.py.call(_parsing_values_1._required_bool, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["inVehicleWarning"], null), (_runtime_1.py.str(path) + ".inVehicleWarning")], null) }, { "address": (_runtime_1.py.truth(((address_value !== null))) ? _runtime_1.py.call(_parse_alert_address, [address_value], null) : null) }, { "location": (_runtime_1.py.truth(((location_value !== null))) ? _runtime_1.py.call(_parse_alert_location, [location_value], null) : null) }, { "radius": (_runtime_1.py.truth(((radius_value !== null))) ? _runtime_1.py.call(_parse_alert_distance, [radius_value], null) : null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [alerts], null);
}
/** Translated upstream _parse_curfew_alerts. */
function _parse_curfew_alerts(...__args) {
    let alerts, index, item, path, raw_item, schedule_value, values;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    values = _runtime_1.py.call(_parsing_values_1._optional_list, [value, "vehicle.curfewAlerts"], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    alerts = [];
    for ([index, raw_item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((raw_item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(alerts, "append"), [null], null);
            continue;
        }
        path = ("vehicle.curfewAlerts[" + _runtime_1.py.str(index) + "]");
        item = _runtime_1.py.call(_parsing_values_1._object, [raw_item, path], null);
        schedule_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["schedule"], null), (_runtime_1.py.str(path) + ".schedule")], null);
        _runtime_1.py.call(_runtime_1.py.attr(alerts, "append"), [_runtime_1.py.call(models_1.CurfewAlert, [], Object.assign({}, { "service_request_id": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["serviceRequestId"], null), (_runtime_1.py.str(path) + ".serviceRequestId")], null) }, { "name": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["name"], null), (_runtime_1.py.str(path) + ".name")], null) }, { "enabled": _runtime_1.py.call(_parsing_values_1._required_bool, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["enabled"], null), (_runtime_1.py.str(path) + ".enabled")], null) }, { "in_vehicle_warning": _runtime_1.py.call(_parsing_values_1._required_bool, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["inVehicleWarning"], null), (_runtime_1.py.str(path) + ".inVehicleWarning")], null) }, { "schedule": (_runtime_1.py.truth(((schedule_value !== null))) ? _runtime_1.py.call(_parse_curfew_schedule, [schedule_value, (_runtime_1.py.str(path) + ".schedule")], null) : null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [alerts], null);
}
/** Translated upstream _parse_speed_alerts. */
function _parse_speed_alerts(...__args) {
    let alerts, index, item, path, raw_item, threshold_value, values;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    values = _runtime_1.py.call(_parsing_values_1._optional_list, [value, "vehicle.speedAlerts"], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    alerts = [];
    for ([index, raw_item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((raw_item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(alerts, "append"), [null], null);
            continue;
        }
        path = ("vehicle.speedAlerts[" + _runtime_1.py.str(index) + "]");
        item = _runtime_1.py.call(_parsing_values_1._object, [raw_item, path], null);
        threshold_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["speedThreshold"], null), (_runtime_1.py.str(path) + ".speedThreshold")], null);
        _runtime_1.py.call(_runtime_1.py.attr(alerts, "append"), [_runtime_1.py.call(models_1.SpeedAlert, [], Object.assign({}, { "service_request_id": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["serviceRequestId"], null), (_runtime_1.py.str(path) + ".serviceRequestId")], null) }, { "name": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["name"], null), (_runtime_1.py.str(path) + ".name")], null) }, { "enabled": _runtime_1.py.call(_parsing_values_1._required_bool, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["enabled"], null), (_runtime_1.py.str(path) + ".enabled")], null) }, { "in_vehicle_warning": _runtime_1.py.call(_parsing_values_1._required_bool, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["inVehicleWarning"], null), (_runtime_1.py.str(path) + ".inVehicleWarning")], null) }, { "threshold": (_runtime_1.py.truth(((threshold_value !== null))) ? _runtime_1.py.call(models_1.SpeedThreshold, [], Object.assign({}, { "unit": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(threshold_value, "get"), ["type"], null)], null) }, { "value": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(threshold_value, "get"), ["value"], null)], null) })) : null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [alerts], null);
}
/** Translated upstream _parse_valet_alert. */
function _parse_valet_alert(...__args) {
    let radius_value;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    radius_value = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["radius"], null), "vehicle.valetAlert.radius"], null);
    return _runtime_1.py.call(models_1.ValetAlert, [], Object.assign({}, { "service_request_id": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["serviceRequestId"], null)], null) }, { "radius": (_runtime_1.py.truth(((radius_value !== null))) ? _runtime_1.py.call(_parse_alert_distance, [radius_value], null) : null) }));
}
/** Translated upstream _parse_alert_address. */
function _parse_alert_address(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.AlertAddress, [], Object.assign({}, { "address1": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["address1"], null)], null) }, { "address2": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["address2"], null)], null) }, { "city": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["city"], null)], null) }, { "state": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["state"], null)], null) }, { "country": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["country"], null)], null) }, { "postal_code": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["postalCode"], null)], null) }));
}
/** Translated upstream _parse_alert_location. */
function _parse_alert_location(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.AlertLocation, [], Object.assign({}, { "latitude": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["latitude"], null)], null) }, { "longitude": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["longitude"], null)], null) }));
}
/** Translated upstream _parse_alert_distance. */
function _parse_alert_distance(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(models_1.AlertDistance, [], Object.assign({}, { "value": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["value"], null)], null) }, { "unit": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["unit"], null)], null) }));
}
/** Translated upstream _parse_curfew_schedule. */
function _parse_curfew_schedule(...__args) {
    let index, raw_value, raw_week_days, week_days;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_week_days = _runtime_1.py.call(_parsing_values_1._list, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["weekDays"], null), (_runtime_1.py.str(path) + ".weekDays")], null);
    week_days = _runtime_1.py.call(_runtime_1.py.tuple, [(() => { const __out = []; for (const [index, raw_value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_week_days], null))) {
            __out.push((_runtime_1.py.truth(((raw_value === null))) ? null : _runtime_1.py.call(_parsing_values_1._required_str, [raw_value, (_runtime_1.py.str(path) + ".weekDays[" + _runtime_1.py.str(index) + "]")], null)));
        } return __out; })()], null);
    return _runtime_1.py.call(models_1.CurfewSchedule, [], Object.assign({}, { "all_day": _runtime_1.py.call(_parsing_values_1._optional_bool, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["allDay"], null)], null) }, { "start_date_time": _runtime_1.py.call(_parsing_values_1._required_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["startDateTime"], null), (_runtime_1.py.str(path) + ".startDateTime")], null) }, { "duration": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["duration"], null)], null) }, { "week_days": week_days }));
}
/** Parse a page of raw remote-service history. */
function parse_remote_service_history(...__args) {
    let history, index, item, page, parsed_history, value, values, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a page of raw remote-service history. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    page = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["remoteServiceHistory"], null), "vehicle.remoteServiceHistory"], null);
    if (_runtime_1.py.truth(((page === null)))) {
        return null;
    }
    values = _runtime_1.py.call(_parsing_values_1._optional_list, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["history"], null), "vehicle.remoteServiceHistory.history"], null);
    history = null;
    if (_runtime_1.py.truth(((values !== null)))) {
        parsed_history = [];
        for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
            if (_runtime_1.py.truth(((value === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_history, "append"), [null], null);
                continue;
            }
            item = _runtime_1.py.call(_parsing_values_1._object, [value, ("vehicle.remoteServiceHistory.history[" + _runtime_1.py.str(index) + "]")], null);
            _runtime_1.py.call(_runtime_1.py.attr(parsed_history, "append"), [_runtime_1.py.call(models_1.RemoteServiceHistoryEntry, [], Object.assign({}, { "service_request_id": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["serviceRequestId"], null)], null) }, { "status": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["status"], null)], null) }, { "service_type": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["serviceType"], null)], null) }, { "status_change_date_time": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["statusChangeDateTime"], null)], null) }))], null);
        }
        history = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_history], null);
    }
    return _runtime_1.py.call(models_1.RemoteServiceHistory, [], Object.assign({}, { "page_number": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["pageNumber"], null)], null) }, { "items_per_page": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["itemsPerPage"], null)], null) }, { "total_items": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["totalItems"], null)], null) }, { "total_pages": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(page, "get"), ["totalPages"], null)], null) }, { "history": history }));
}
//# sourceMappingURL=_vehicle_alert_parsing.js.map