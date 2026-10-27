"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleClimateSchedules = exports.VehicleChargeHistory = exports.V2LStatus = exports.DelayedClimateSchedule = exports.ClimateSchedule = exports.ClimateDefaults = exports.ChargeSession = exports.ChargeSchedule = exports.ChargeHistorySummary = exports.ChargeConfig = exports._parse_temperature = exports._parse_climate_parameters = exports._required_str = exports._required_datetime = exports._parse_week_days = exports._optional_v2l_state = exports._optional_str = exports._optional_object = exports._optional_list = exports._optional_int = exports._optional_float = exports._optional_datetime = exports._object = exports._list = void 0;
exports.parse_charge_schedules = parse_charge_schedules;
exports.parse_charge_config = parse_charge_config;
exports.parse_v2l_status = parse_v2l_status;
exports.parse_vehicle_charge_history = parse_vehicle_charge_history;
exports.parse_climate_schedules = parse_climate_schedules;
exports.parse_climate_defaults = parse_climate_defaults;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _parsing_values_1 = require("./_parsing_values");
Object.defineProperty(exports, "_list", { enumerable: true, get: function () { return _parsing_values_1._list; } });
Object.defineProperty(exports, "_object", { enumerable: true, get: function () { return _parsing_values_1._object; } });
Object.defineProperty(exports, "_optional_datetime", { enumerable: true, get: function () { return _parsing_values_1._optional_datetime; } });
Object.defineProperty(exports, "_optional_float", { enumerable: true, get: function () { return _parsing_values_1._optional_float; } });
Object.defineProperty(exports, "_optional_int", { enumerable: true, get: function () { return _parsing_values_1._optional_int; } });
Object.defineProperty(exports, "_optional_list", { enumerable: true, get: function () { return _parsing_values_1._optional_list; } });
Object.defineProperty(exports, "_optional_object", { enumerable: true, get: function () { return _parsing_values_1._optional_object; } });
Object.defineProperty(exports, "_optional_str", { enumerable: true, get: function () { return _parsing_values_1._optional_str; } });
Object.defineProperty(exports, "_optional_v2l_state", { enumerable: true, get: function () { return _parsing_values_1._optional_v2l_state; } });
Object.defineProperty(exports, "_parse_week_days", { enumerable: true, get: function () { return _parsing_values_1._parse_week_days; } });
Object.defineProperty(exports, "_required_datetime", { enumerable: true, get: function () { return _parsing_values_1._required_datetime; } });
Object.defineProperty(exports, "_required_str", { enumerable: true, get: function () { return _parsing_values_1._required_str; } });
const _vehicle_response_parsing_1 = require("./_vehicle_response_parsing");
Object.defineProperty(exports, "_parse_climate_parameters", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_climate_parameters; } });
Object.defineProperty(exports, "_parse_temperature", { enumerable: true, get: function () { return _vehicle_response_parsing_1._parse_temperature; } });
const models_1 = require("./models");
Object.defineProperty(exports, "ChargeConfig", { enumerable: true, get: function () { return models_1.ChargeConfig; } });
Object.defineProperty(exports, "ChargeHistorySummary", { enumerable: true, get: function () { return models_1.ChargeHistorySummary; } });
Object.defineProperty(exports, "ChargeSchedule", { enumerable: true, get: function () { return models_1.ChargeSchedule; } });
Object.defineProperty(exports, "ChargeSession", { enumerable: true, get: function () { return models_1.ChargeSession; } });
Object.defineProperty(exports, "ClimateDefaults", { enumerable: true, get: function () { return models_1.ClimateDefaults; } });
Object.defineProperty(exports, "ClimateSchedule", { enumerable: true, get: function () { return models_1.ClimateSchedule; } });
Object.defineProperty(exports, "DelayedClimateSchedule", { enumerable: true, get: function () { return models_1.DelayedClimateSchedule; } });
Object.defineProperty(exports, "V2LStatus", { enumerable: true, get: function () { return models_1.V2LStatus; } });
Object.defineProperty(exports, "VehicleChargeHistory", { enumerable: true, get: function () { return models_1.VehicleChargeHistory; } });
Object.defineProperty(exports, "VehicleClimateSchedules", { enumerable: true, get: function () { return models_1.VehicleClimateSchedules; } });
/** Parse charge schedules. */
function parse_charge_schedules(...__args) {
    let index, item, schedules, value, values, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse charge schedules. */
    vehicle = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    values = _runtime_1.py.or(() => _runtime_1.py.call(_parsing_values_1._optional_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["chargeSchedules"], null), "vehicle.chargeSchedules"], null), () => []);
    schedules = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        item = _runtime_1.py.call(_parsing_values_1._object, [value, ("vehicle.chargeSchedules[" + _runtime_1.py.str(index) + "]")], null);
        _runtime_1.py.call(_runtime_1.py.attr(schedules, "append"), [_runtime_1.py.call(models_1.ChargeSchedule, [], Object.assign({}, { "id": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["id"], null), "chargeSchedule.id"], null) }, { "state": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["state"], null)], null) }, { "start_date_time": _runtime_1.py.call(_parsing_values_1._required_datetime, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["startDateTime"], null), "chargeSchedule.startDateTime"], null) }, { "duration": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["duration"], null), "chargeSchedule.duration"], null) }, { "week_days": _runtime_1.py.call(_parsing_values_1._parse_week_days, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["weekDays"], null), "chargeSchedule.weekDays"], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [schedules], null);
}
/** Parse configured charging limits, if supported by the vehicle. */
function parse_charge_config(...__args) {
    let charge, config, limits, notification, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse configured charging limits, if supported by the vehicle. */
    vehicle = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    config = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["chargeConfig"], null), "vehicle.chargeConfig"], null);
    if (_runtime_1.py.truth(((config === null)))) {
        return null;
    }
    limits = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(config, "get"), ["limits"], null), "vehicle.chargeConfig.limits"], null);
    if (_runtime_1.py.truth(((limits === null)))) {
        return _runtime_1.py.call(models_1.ChargeConfig, [null, null], null);
    }
    charge = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(limits, "get"), ["charge"], null), "vehicle.chargeConfig.limits.charge"], null);
    notification = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(limits, "get"), ["notification"], null), "vehicle.chargeConfig.limits.notification"], null);
    return _runtime_1.py.call(models_1.ChargeConfig, [], Object.assign({}, { "charge_limit_percent": (_runtime_1.py.truth(((charge !== null))) ? _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(charge, "get"), ["percent"], null)], null) : null) }, { "notification_threshold_percent": (_runtime_1.py.truth(((notification !== null))) ? _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(notification, "get"), ["percent"], null)], null) : null) }));
}
/** Parse V2L state and battery reserve percentages. */
function parse_v2l_status(...__args) {
    let status, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse V2L state and battery reserve percentages. */
    vehicle = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    status = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["v2lStatus"], null), "vehicle.v2lStatus"], null);
    if (_runtime_1.py.truth(((status === null)))) {
        return null;
    }
    return _runtime_1.py.call(models_1.V2LStatus, [], Object.assign({}, { "state": _runtime_1.py.call(_parsing_values_1._optional_v2l_state, [_runtime_1.py.call(_runtime_1.py.attr(status, "get"), ["state"], null)], null) }, { "charge_limit_percent": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(status, "get"), ["chargeLimitationLevel"], null)], null) }, { "minimum_charge_limit_percent": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(status, "get"), ["chargeMinimumLimitationLevel"], null)], null) }));
}
/** Parse charging sessions and aggregate summaries, if supported. */
function parse_vehicle_charge_history(...__args) {
    let charge_values, charges, history, index, item, summaries, summary_values, value, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse charging sessions and aggregate summaries, if supported. */
    vehicle = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    history = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["chargeHistory"], null), "vehicle.chargeHistory"], null);
    if (_runtime_1.py.truth(((history === null)))) {
        return null;
    }
    charge_values = _runtime_1.py.call(_parsing_values_1._list, [_runtime_1.py.call(_runtime_1.py.attr(history, "get"), ["charges"], null), "vehicle.chargeHistory.charges"], null);
    charges = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [charge_values], null))) {
        item = _runtime_1.py.call(_parsing_values_1._object, [value, ("vehicle.chargeHistory.charges[" + _runtime_1.py.str(index) + "]")], null);
        _runtime_1.py.call(_runtime_1.py.attr(charges, "append"), [_runtime_1.py.call(models_1.ChargeSession, [], Object.assign({}, { "start": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["start"], null)], null) }, { "end": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["end"], null)], null) }, { "duration": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["duration"], null)], null) }, { "recovered_energy_kwh": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["recoveredEnergy"], null)], null) }))], null);
    }
    summary_values = _runtime_1.py.call(_parsing_values_1._list, [_runtime_1.py.call(_runtime_1.py.attr(history, "get"), ["chargeSummaries"], null), "vehicle.chargeHistory.chargeSummaries"], null);
    summaries = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [summary_values], null))) {
        item = _runtime_1.py.call(_parsing_values_1._object, [value, ("vehicle.chargeHistory.chargeSummaries[" + _runtime_1.py.str(index) + "]")], null);
        _runtime_1.py.call(_runtime_1.py.attr(summaries, "append"), [_runtime_1.py.call(models_1.ChargeHistorySummary, [], Object.assign({}, { "day": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["day"], null)], null) }, { "month": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["month"], null)], null) }, { "year": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["year"], null)], null) }, { "number_of_charge_sessions": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["numberOfChargeSessions"], null)], null) }, { "total_energy_recovered_kwh": _runtime_1.py.call(_parsing_values_1._optional_float, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["totalEnergyRecovered"], null)], null) }, { "total_duration_minutes": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["totalDuration"], null)], null) }, { "number_of_errors": _runtime_1.py.call(_parsing_values_1._optional_int, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["numberOfErrors"], null)], null) }, { "user_id": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["userId"], null)], null) }, { "role_type": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["roleType"], null)], null) }))], null);
    }
    return _runtime_1.py.call(models_1.VehicleChargeHistory, [_runtime_1.py.call(_runtime_1.py.tuple, [charges], null), _runtime_1.py.call(_runtime_1.py.tuple, [summaries], null)], null);
}
/** Parse recurring and one-time climate schedules and their accessories. */
function parse_climate_schedules(...__args) {
    let accessories, delayed, index, item, schedules, temperature, value, values, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse recurring and one-time climate schedules and their accessories. */
    vehicle = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    values = _runtime_1.py.or(() => _runtime_1.py.call(_parsing_values_1._optional_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["climateSchedules"], null), "vehicle.climateSchedules"], null), () => []);
    schedules = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        item = _runtime_1.py.call(_parsing_values_1._object, [value, ("vehicle.climateSchedules[" + _runtime_1.py.str(index) + "]")], null);
        temperature = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["temperature"], null), "climateSchedule.temperature"], null);
        _runtime_1.py.call(_runtime_1.py.attr(schedules, "append"), [_runtime_1.py.call(models_1.ClimateSchedule, [], Object.assign({}, { "id": _runtime_1.py.call(_parsing_values_1._required_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["id"], null), "climateSchedule.id"], null) }, { "state": _runtime_1.py.call(_parsing_values_1._optional_str, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["state"], null)], null) }, { "start_date_time": _runtime_1.py.call(_parsing_values_1._required_datetime, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["startDateTime"], null), "climateSchedule.startDateTime"], null) }, { "week_days": _runtime_1.py.call(_parsing_values_1._parse_week_days, [_runtime_1.py.call(_runtime_1.py.attr(item, "get"), ["weekDays"], null), "climateSchedule.weekDays"], null) }, { "temperature": _runtime_1.py.call(_vehicle_response_parsing_1._parse_temperature, [temperature], null) }))], null);
    }
    accessories = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["climateSchedulesAccessories"], null), "vehicle.climateSchedulesAccessories"], null);
    delayed = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["delayedClimateSchedule"], null), "vehicle.delayedClimateSchedule"], null);
    return _runtime_1.py.call(models_1.VehicleClimateSchedules, [], Object.assign({}, { "schedules": _runtime_1.py.call(_runtime_1.py.tuple, [schedules], null) }, { "accessories": (_runtime_1.py.truth(((accessories !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_climate_parameters, [accessories], null) : null) }, { "delayed_schedule": (_runtime_1.py.truth(((delayed !== null))) ? _runtime_1.py.call(models_1.DelayedClimateSchedule, [], Object.assign({}, { "start_date_time": _runtime_1.py.call(_parsing_values_1._optional_datetime, [_runtime_1.py.call(_runtime_1.py.attr(delayed, "get"), ["startDateTime"], null)], null) })) : null) }));
}
/** Parse saved climate defaults, if supported by the vehicle. */
function parse_climate_defaults(...__args) {
    let climate, defaults, parameters, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse saved climate defaults, if supported by the vehicle. */
    vehicle = _runtime_1.py.call(_parsing_values_1._object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    defaults = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["climateDefaults"], null), "vehicle.climateDefaults"], null);
    if (_runtime_1.py.truth(((defaults === null)))) {
        return null;
    }
    climate = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(defaults, "get"), ["climate"], null), "vehicle.climateDefaults.climate"], null);
    parameters = _runtime_1.py.call(_parsing_values_1._optional_object, [_runtime_1.py.call(_runtime_1.py.attr(defaults, "get"), ["parameters"], null), "vehicle.climateDefaults.parameters"], null);
    return _runtime_1.py.call(models_1.ClimateDefaults, [], Object.assign({}, { "climate": (_runtime_1.py.truth(((climate !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_temperature, [climate], null) : null) }, { "parameters": (_runtime_1.py.truth(((parameters !== null))) ? _runtime_1.py.call(_vehicle_response_parsing_1._parse_climate_parameters, [parameters], null) : null) }));
}
//# sourceMappingURL=_vehicle_energy_parsing.js.map