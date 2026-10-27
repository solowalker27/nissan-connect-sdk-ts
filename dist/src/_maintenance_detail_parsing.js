"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AVK2_VEHICLE_TYPENAMES = exports.DistanceUnit = exports.WarrantyServiceContractStatus = exports.UnknownPastServiceResult = exports.ServiceContract = exports.ReminderDistance = exports.PastServiceSuccess = exports.PastServiceGeneralError = exports.PastServiceExists = exports.PartsReminderStatus = exports.PartsReminderMutationResult = exports.PartsReminderConfigurationThresholds = exports.PartsReminder = exports.PartReminderConfiguration = exports.MaintenancePart = exports._typename = exports._typed_object = exports._root = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_int = exports._required_nullable_enum = exports._required_nullable_datetime = exports._required_nullable_date = exports._required_nullable_bool = exports._required_list = exports._required_int = exports._required_field = exports._required_enum = exports._required_bool = void 0;
exports._parse_service_contract = _parse_service_contract;
exports._parse_past_service_result = _parse_past_service_result;
exports._parse_part = _parse_part;
exports._parse_configuration_thresholds = _parse_configuration_thresholds;
exports._parse_parts_reminder = _parse_parts_reminder;
exports._required_nullable_distance = _required_nullable_distance;
exports._parse_parts_reminder_mutation = _parse_parts_reminder_mutation;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _maintenance_value_parsing_1 = require("./_maintenance_value_parsing");
Object.defineProperty(exports, "_required_bool", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_bool; } });
Object.defineProperty(exports, "_required_enum", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_enum; } });
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_int", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_int; } });
Object.defineProperty(exports, "_required_list", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_list; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_date", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_nullable_date; } });
Object.defineProperty(exports, "_required_nullable_datetime", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_nullable_datetime; } });
Object.defineProperty(exports, "_required_nullable_enum", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_nullable_enum; } });
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_string; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return _maintenance_value_parsing_1._root; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return _maintenance_value_parsing_1._typed_object; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return _maintenance_value_parsing_1._typename; } });
const maintenance_models_1 = require("./maintenance_models");
Object.defineProperty(exports, "MaintenancePart", { enumerable: true, get: function () { return maintenance_models_1.MaintenancePart; } });
Object.defineProperty(exports, "PartReminderConfiguration", { enumerable: true, get: function () { return maintenance_models_1.PartReminderConfiguration; } });
Object.defineProperty(exports, "PartsReminder", { enumerable: true, get: function () { return maintenance_models_1.PartsReminder; } });
Object.defineProperty(exports, "PartsReminderConfigurationThresholds", { enumerable: true, get: function () { return maintenance_models_1.PartsReminderConfigurationThresholds; } });
Object.defineProperty(exports, "PartsReminderMutationResult", { enumerable: true, get: function () { return maintenance_models_1.PartsReminderMutationResult; } });
Object.defineProperty(exports, "PartsReminderStatus", { enumerable: true, get: function () { return maintenance_models_1.PartsReminderStatus; } });
Object.defineProperty(exports, "PastServiceExists", { enumerable: true, get: function () { return maintenance_models_1.PastServiceExists; } });
Object.defineProperty(exports, "PastServiceGeneralError", { enumerable: true, get: function () { return maintenance_models_1.PastServiceGeneralError; } });
Object.defineProperty(exports, "PastServiceSuccess", { enumerable: true, get: function () { return maintenance_models_1.PastServiceSuccess; } });
Object.defineProperty(exports, "ReminderDistance", { enumerable: true, get: function () { return maintenance_models_1.ReminderDistance; } });
Object.defineProperty(exports, "ServiceContract", { enumerable: true, get: function () { return maintenance_models_1.ServiceContract; } });
Object.defineProperty(exports, "UnknownPastServiceResult", { enumerable: true, get: function () { return maintenance_models_1.UnknownPastServiceResult; } });
Object.defineProperty(exports, "WarrantyServiceContractStatus", { enumerable: true, get: function () { return maintenance_models_1.WarrantyServiceContractStatus; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
exports._AVK2_VEHICLE_TYPENAMES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["AVK2Vehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "EVOVehicle"])], null);
/** Translated upstream _parse_service_contract. */
function _parse_service_contract(...__args) {
    let contract;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    contract = _runtime_1.py.call(_maintenance_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(maintenance_models_1.ServiceContract, [], Object.assign({}, { "status": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_enum, [contract, "status", maintenance_models_1.WarrantyServiceContractStatus, (_runtime_1.py.str(path) + ".status")], null) }, { "coverage": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_string, [contract, "coverage", (_runtime_1.py.str(path) + ".coverage")], null) }, { "coverage_description": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_string, [contract, "coverageDescription", (_runtime_1.py.str(path) + ".coverageDescription")], null) }, { "coverage_name": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_string, [contract, "coverageName", (_runtime_1.py.str(path) + ".coverageName")], null) }, { "plan_effective_date": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_date, [contract, "planEffectiveDate", (_runtime_1.py.str(path) + ".planEffectiveDate")], null) }, { "plan_effective_miles": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_int, [contract, "planEffectiveMiles", (_runtime_1.py.str(path) + ".planEffectiveMiles")], null) }, { "plan_expiration_date": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_date, [contract, "planExpirationDate", (_runtime_1.py.str(path) + ".planExpirationDate")], null) }, { "plan_expiration_odometer": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_int, [contract, "planExpirationOdometer", (_runtime_1.py.str(path) + ".planExpirationOdometer")], null) }, { "plan_cancelled_date": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_date, [contract, "planCancelledDate", (_runtime_1.py.str(path) + ".planCancelledDate")], null) }, { "plan_cancelled_odometer": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_int, [contract, "planCancelledOdometer", (_runtime_1.py.str(path) + ".planCancelledOdometer")], null) }, { "agreement": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_string, [contract, "agreement", (_runtime_1.py.str(path) + ".agreement")], null) }, { "deductible_amount": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_int, [contract, "deductibleAmount", (_runtime_1.py.str(path) + ".deductibleAmount")], null) }, { "expiring_soon": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_bool, [contract, "expiringSoon", (_runtime_1.py.str(path) + ".expiringSoon")], null) }));
}
/** Translated upstream _parse_past_service_result. */
function _parse_past_service_result(...__args) {
    let root, typename;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    root = _runtime_1.py.call(_maintenance_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_maintenance_value_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "PastServiceSuccess")))) {
        return _runtime_1.py.call(maintenance_models_1.PastServiceSuccess, [_runtime_1.py.call(_maintenance_value_parsing_1._required_bool, [root, "success", (_runtime_1.py.str(root_field) + ".success")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterGeneralError")))) {
        return _runtime_1.py.call(maintenance_models_1.PastServiceGeneralError, [_runtime_1.py.call(_maintenance_value_parsing_1._required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "PastServiceExists")))) {
        return _runtime_1.py.call(maintenance_models_1.PastServiceExists, [_runtime_1.py.call(_maintenance_value_parsing_1._required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(maintenance_models_1.UnknownPastServiceResult, [typename], null);
}
/** Translated upstream _parse_part. */
function _parse_part(...__args) {
    let configuration, configuration_path, distance_path, months_path, part, raw_configuration, raw_distance, raw_months;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    part = _runtime_1.py.call(_maintenance_value_parsing_1._typed_object, [value, path], null);
    configuration_path = (_runtime_1.py.str(path) + ".reminderConfiguration");
    raw_configuration = _runtime_1.py.call(_maintenance_value_parsing_1._required_optional_typed_object, [part, "reminderConfiguration", configuration_path], null);
    configuration = null;
    if (_runtime_1.py.truth(((raw_configuration !== null)))) {
        months_path = (_runtime_1.py.str(configuration_path) + ".months");
        distance_path = (_runtime_1.py.str(configuration_path) + ".distance");
        raw_months = _runtime_1.py.call(_maintenance_value_parsing_1._required_optional_typed_object, [raw_configuration, "months", months_path], null);
        raw_distance = _runtime_1.py.call(_maintenance_value_parsing_1._required_optional_typed_object, [raw_configuration, "distance", distance_path], null);
        configuration = _runtime_1.py.call(maintenance_models_1.PartReminderConfiguration, [], Object.assign({}, { "months": (_runtime_1.py.truth(((raw_months !== null))) ? _runtime_1.py.call(_parse_configuration_thresholds, [raw_months, months_path], null) : null) }, { "distance": (_runtime_1.py.truth(((raw_distance !== null))) ? _runtime_1.py.call(_parse_configuration_thresholds, [raw_distance, distance_path], null) : null) }));
    }
    return _runtime_1.py.call(maintenance_models_1.MaintenancePart, [], Object.assign({}, { "id": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_string, [part, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(_maintenance_value_parsing_1._required_string, [part, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "reminder_configuration": configuration }));
}
/** Translated upstream _parse_configuration_thresholds. */
function _parse_configuration_thresholds(...__args) {
    let thresholds;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    thresholds = _runtime_1.py.call(_maintenance_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(maintenance_models_1.PartsReminderConfigurationThresholds, [], Object.assign({}, { "min": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [thresholds, "min", (_runtime_1.py.str(path) + ".min")], null) }, { "max": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [thresholds, "max", (_runtime_1.py.str(path) + ".max")], null) }, { "interval": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [thresholds, "interval", (_runtime_1.py.str(path) + ".interval")], null) }, { "distance_unit": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_enum, [thresholds, "distanceUnit", models_1.DistanceUnit, (_runtime_1.py.str(path) + ".distanceUnit")], null) }));
}
/** Translated upstream _parse_parts_reminder. */
function _parse_parts_reminder(...__args) {
    let index, parts, parts_path, raw_part, raw_parts, reminder;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    reminder = _runtime_1.py.call(_maintenance_value_parsing_1._typed_object, [value, path], null);
    parts_path = (_runtime_1.py.str(path) + ".parts");
    raw_parts = _runtime_1.py.call(_maintenance_value_parsing_1._required_list, [reminder, "parts", parts_path], null);
    parts = [];
    for ([index, raw_part] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_parts], null))) {
        _runtime_1.py.call(_runtime_1.py.attr(parts, "append"), [_runtime_1.py.call(_parse_part, [raw_part, (_runtime_1.py.str(parts_path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(maintenance_models_1.PartsReminder, [], Object.assign({}, { "id": _runtime_1.py.call(_maintenance_value_parsing_1._required_string, [reminder, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "overdue": _runtime_1.py.call(_maintenance_value_parsing_1._required_bool, [reminder, "overdue", (_runtime_1.py.str(path) + ".overdue")], null) }, { "date": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_datetime, [reminder, "date", (_runtime_1.py.str(path) + ".date")], null) }, { "months_interval": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_int, [reminder, "monthsInterval", (_runtime_1.py.str(path) + ".monthsInterval")], null) }, { "distance_interval": _runtime_1.py.call(_required_nullable_distance, [reminder, "distanceInterval", (_runtime_1.py.str(path) + ".distanceInterval")], null) }, { "next_reminder_distance": _runtime_1.py.call(_required_nullable_distance, [reminder, "nextReminderDistance", (_runtime_1.py.str(path) + ".nextReminderDistance")], null) }, { "next_reminder_date": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_datetime, [reminder, "nextReminderDate", (_runtime_1.py.str(path) + ".nextReminderDate")], null) }, { "status": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_enum, [reminder, "status", maintenance_models_1.PartsReminderStatus, (_runtime_1.py.str(path) + ".status")], null) }, { "parts": _runtime_1.py.call(_runtime_1.py.tuple, [parts], null) }, { "mileage": _runtime_1.py.call(_required_nullable_distance, [reminder, "mileage", (_runtime_1.py.str(path) + ".mileage")], null) }));
}
/** Translated upstream _required_nullable_distance. */
function _required_nullable_distance(...__args) {
    let distance, value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_maintenance_value_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    distance = _runtime_1.py.call(_maintenance_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(maintenance_models_1.ReminderDistance, [], Object.assign({}, { "unit": _runtime_1.py.call(_maintenance_value_parsing_1._required_enum, [distance, "unit", models_1.DistanceUnit, (_runtime_1.py.str(path) + ".unit")], null) }, { "value": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [distance, "value", (_runtime_1.py.str(path) + ".value")], null) }));
}
/** Translated upstream _parse_parts_reminder_mutation. */
function _parse_parts_reminder_mutation(...__args) {
    let root, typename;
    let { "data": data, "root_field": root_field, "conditional_response_status": conditional_response_status } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, ["conditional_response_status"], null, null);
    root = _runtime_1.py.call(_maintenance_value_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_maintenance_value_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth(_runtime_1.py.and(() => conditional_response_status, () => (!_runtime_1.py.eq(typename, "ResponseStatus"))))) {
        return _runtime_1.py.call(maintenance_models_1.PartsReminderMutationResult, [], Object.assign({}, { "typename": typename }, { "success": null }));
    }
    return _runtime_1.py.call(maintenance_models_1.PartsReminderMutationResult, [], Object.assign({}, { "typename": typename }, { "success": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_bool, [root, "success", (_runtime_1.py.str(root_field) + ".success")], null) }));
}
//# sourceMappingURL=_maintenance_detail_parsing.js.map