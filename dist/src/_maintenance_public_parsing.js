"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AVK2_VEHICLE_TYPENAMES = exports.DistanceUnit = exports.VehiclePartsReminders = exports.ServiceContract = exports.PartsReminderMutationResult = exports.PartsReminder = exports.MaintenanceTimeline = exports.MaintenancePart = exports.CollisionProbeReading = exports.CollisionHistoryEntry = exports._vehicle = exports._typename = exports._typed_object = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_list = exports._required_nullable_datetime = exports._required_int = exports._required_float = exports._required_enum = exports._required_datetime = exports._required_date = exports._parse_service_contract = exports._parse_past_service_result = exports._parse_parts_reminder_mutation = exports._parse_parts_reminder = exports._parse_part = void 0;
exports.parse_maintenance_timeline = parse_maintenance_timeline;
exports.parse_service_contracts = parse_service_contracts;
exports.parse_add_past_service = parse_add_past_service;
exports.parse_update_past_service = parse_update_past_service;
exports.parse_parts_reminders = parse_parts_reminders;
exports.parse_create_parts_reminder = parse_create_parts_reminder;
exports.parse_update_parts_reminder = parse_update_parts_reminder;
exports.parse_reset_parts_reminder = parse_reset_parts_reminder;
exports.parse_delete_parts_reminder = parse_delete_parts_reminder;
exports.parse_collision_history = parse_collision_history;
exports.parse_collision_probe_data = parse_collision_probe_data;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _maintenance_detail_parsing_1 = require("./_maintenance_detail_parsing");
Object.defineProperty(exports, "_parse_part", { enumerable: true, get: function () { return _maintenance_detail_parsing_1._parse_part; } });
Object.defineProperty(exports, "_parse_parts_reminder", { enumerable: true, get: function () { return _maintenance_detail_parsing_1._parse_parts_reminder; } });
Object.defineProperty(exports, "_parse_parts_reminder_mutation", { enumerable: true, get: function () { return _maintenance_detail_parsing_1._parse_parts_reminder_mutation; } });
Object.defineProperty(exports, "_parse_past_service_result", { enumerable: true, get: function () { return _maintenance_detail_parsing_1._parse_past_service_result; } });
Object.defineProperty(exports, "_parse_service_contract", { enumerable: true, get: function () { return _maintenance_detail_parsing_1._parse_service_contract; } });
const _maintenance_value_parsing_1 = require("./_maintenance_value_parsing");
Object.defineProperty(exports, "_required_date", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_date; } });
Object.defineProperty(exports, "_required_datetime", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_datetime; } });
Object.defineProperty(exports, "_required_enum", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_enum; } });
Object.defineProperty(exports, "_required_float", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_float; } });
Object.defineProperty(exports, "_required_int", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_int; } });
Object.defineProperty(exports, "_required_nullable_datetime", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_nullable_datetime; } });
Object.defineProperty(exports, "_required_nullable_list", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_nullable_list; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return _maintenance_value_parsing_1._required_string; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return _maintenance_value_parsing_1._typed_object; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return _maintenance_value_parsing_1._typename; } });
Object.defineProperty(exports, "_vehicle", { enumerable: true, get: function () { return _maintenance_value_parsing_1._vehicle; } });
const maintenance_models_1 = require("./maintenance_models");
Object.defineProperty(exports, "CollisionHistoryEntry", { enumerable: true, get: function () { return maintenance_models_1.CollisionHistoryEntry; } });
Object.defineProperty(exports, "CollisionProbeReading", { enumerable: true, get: function () { return maintenance_models_1.CollisionProbeReading; } });
Object.defineProperty(exports, "MaintenancePart", { enumerable: true, get: function () { return maintenance_models_1.MaintenancePart; } });
Object.defineProperty(exports, "MaintenanceTimeline", { enumerable: true, get: function () { return maintenance_models_1.MaintenanceTimeline; } });
Object.defineProperty(exports, "PartsReminder", { enumerable: true, get: function () { return maintenance_models_1.PartsReminder; } });
Object.defineProperty(exports, "PartsReminderMutationResult", { enumerable: true, get: function () { return maintenance_models_1.PartsReminderMutationResult; } });
Object.defineProperty(exports, "ServiceContract", { enumerable: true, get: function () { return maintenance_models_1.ServiceContract; } });
Object.defineProperty(exports, "VehiclePartsReminders", { enumerable: true, get: function () { return maintenance_models_1.VehiclePartsReminders; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
exports._AVK2_VEHICLE_TYPENAMES = _runtime_1.py.call(_runtime_1.py.frozenset, [new Set(["AVK2Vehicle", "ElectricAVK2Vehicle", "ElectricEVOVehicle", "EVOVehicle"])], null);
/** Parse the nullable maintenance timeline for a vehicle. */
function parse_maintenance_timeline(...__args) {
    let path, timeline, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable maintenance timeline for a vehicle. */
    vehicle = _runtime_1.py.call(_maintenance_value_parsing_1._vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    path = "vehicle.maintenanceTimeline";
    timeline = _runtime_1.py.call(_maintenance_value_parsing_1._required_optional_typed_object, [vehicle, "maintenanceTimeline", path], null);
    if (_runtime_1.py.truth(((timeline === null)))) {
        return null;
    }
    return _runtime_1.py.call(maintenance_models_1.MaintenanceTimeline, [], Object.assign({}, { "last_service_date": _runtime_1.py.call(_maintenance_value_parsing_1._required_date, [timeline, "lastServiceDate", (_runtime_1.py.str(path) + ".lastServiceDate")], null) }, { "last_service_mileage": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [timeline, "lastServiceMileage", (_runtime_1.py.str(path) + ".lastServiceMileage")], null) }, { "next_service_date": _runtime_1.py.call(_maintenance_value_parsing_1._required_date, [timeline, "nextServiceDate", (_runtime_1.py.str(path) + ".nextServiceDate")], null) }, { "next_service_mileage": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [timeline, "nextServiceMileage", (_runtime_1.py.str(path) + ".nextServiceMileage")], null) }, { "remaining_service_mileage": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [timeline, "remainingServiceMileage", (_runtime_1.py.str(path) + ".remainingServiceMileage")], null) }, { "remaining_service_months": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [timeline, "remainingServiceMonths", (_runtime_1.py.str(path) + ".remainingServiceMonths")], null) }, { "mileage_unit": _runtime_1.py.call(_maintenance_value_parsing_1._required_enum, [timeline, "mileageUnit", models_1.DistanceUnit, (_runtime_1.py.str(path) + ".mileageUnit")], null) }, { "current_mileage": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [timeline, "currentMileage", (_runtime_1.py.str(path) + ".currentMileage")], null) }));
}
/** Parse the nullable service-contract list for a vehicle. */
function parse_service_contracts(...__args) {
    let contracts, contracts_path, index, path, raw_contract, raw_contracts, vehicle, warranty, warranty_path;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable service-contract list for a vehicle. */
    vehicle = _runtime_1.py.call(_maintenance_value_parsing_1._vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    warranty_path = "vehicle.warranty";
    warranty = _runtime_1.py.call(_maintenance_value_parsing_1._required_optional_typed_object, [vehicle, "warranty", warranty_path], null);
    if (_runtime_1.py.truth(((warranty === null)))) {
        return null;
    }
    contracts_path = (_runtime_1.py.str(warranty_path) + ".serviceContracts");
    raw_contracts = _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_list, [warranty, "serviceContracts", contracts_path], null);
    if (_runtime_1.py.truth(((raw_contracts === null)))) {
        return null;
    }
    contracts = [];
    for ([index, raw_contract] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_contracts], null))) {
        if (_runtime_1.py.truth(((raw_contract === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(contracts, "append"), [null], null);
            continue;
        }
        path = (_runtime_1.py.str(contracts_path) + "[" + _runtime_1.py.str(index) + "]");
        _runtime_1.py.call(_runtime_1.py.attr(contracts, "append"), [_runtime_1.py.call(_maintenance_detail_parsing_1._parse_service_contract, [raw_contract, path], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [contracts], null);
}
/** Parse the nullable AddPastService union result. */
function parse_add_past_service(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable AddPastService union result. */
    return _runtime_1.py.call(_maintenance_detail_parsing_1._parse_past_service_result, [data, "addPastService"], null);
}
/** Parse the nullable UpdatePastService union result. */
function parse_update_past_service(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable UpdatePastService union result. */
    return _runtime_1.py.call(_maintenance_detail_parsing_1._parse_past_service_result, [data, "updatePastService"], null);
}
/** Parse the nullable AVK2 part catalog and reminder list. */
function parse_parts_reminders(...__args) {
    let index, parsed_parts, parsed_reminders, parts, parts_path, raw_part, raw_parts, raw_reminder, raw_reminders, reminders, reminders_path, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable AVK2 part catalog and reminder list. */
    vehicle = _runtime_1.py.call(_maintenance_value_parsing_1._vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    if (_runtime_1.py.truth((!_runtime_1.py.contains(exports._AVK2_VEHICLE_TYPENAMES, _runtime_1.py.call(_maintenance_value_parsing_1._typename, [vehicle, "vehicle"], null))))) {
        return null;
    }
    parts_path = "vehicle.parts";
    raw_parts = _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_list, [vehicle, "parts", parts_path], null);
    parts = null;
    if (_runtime_1.py.truth(((raw_parts !== null)))) {
        parsed_parts = [];
        for ([index, raw_part] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_parts], null))) {
            if (_runtime_1.py.truth(((raw_part === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_parts, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_parts, "append"), [_runtime_1.py.call(_maintenance_detail_parsing_1._parse_part, [raw_part, (_runtime_1.py.str(parts_path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        parts = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_parts], null);
    }
    reminders_path = "vehicle.partsReminders";
    raw_reminders = _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_list, [vehicle, "partsReminders", reminders_path], null);
    reminders = null;
    if (_runtime_1.py.truth(((raw_reminders !== null)))) {
        parsed_reminders = [];
        for ([index, raw_reminder] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_reminders], null))) {
            if (_runtime_1.py.truth(((raw_reminder === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_reminders, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_reminders, "append"), [_runtime_1.py.call(_maintenance_detail_parsing_1._parse_parts_reminder, [raw_reminder, (_runtime_1.py.str(reminders_path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        reminders = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_reminders], null);
    }
    return _runtime_1.py.call(maintenance_models_1.VehiclePartsReminders, [], Object.assign({}, { "parts": parts }, { "reminders": reminders }));
}
/** Parse the nullable CreatePartsReminder response. */
function parse_create_parts_reminder(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable CreatePartsReminder response. */
    return _runtime_1.py.call(_maintenance_detail_parsing_1._parse_parts_reminder_mutation, [data, "createPartsReminder"], Object.assign({}, { "conditional_response_status": false }));
}
/** Parse the nullable UpdatePartsReminder union response. */
function parse_update_parts_reminder(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable UpdatePartsReminder union response. */
    return _runtime_1.py.call(_maintenance_detail_parsing_1._parse_parts_reminder_mutation, [data, "updatePartsReminder"], Object.assign({}, { "conditional_response_status": true }));
}
/** Parse the nullable ResetPartsReminder response. */
function parse_reset_parts_reminder(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable ResetPartsReminder response. */
    return _runtime_1.py.call(_maintenance_detail_parsing_1._parse_parts_reminder_mutation, [data, "resetPartsReminder"], Object.assign({}, { "conditional_response_status": false }));
}
/** Parse the nullable DeletePartsReminder union response. */
function parse_delete_parts_reminder(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable DeletePartsReminder union response. */
    return _runtime_1.py.call(_maintenance_detail_parsing_1._parse_parts_reminder_mutation, [data, "deletePartsReminder"], Object.assign({}, { "conditional_response_status": true }));
}
/** Parse nullable collision reports for a vehicle. */
function parse_collision_history(...__args) {
    let entry, history, history_path, index, path, raw_entry, raw_history, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable collision reports for a vehicle. */
    vehicle = _runtime_1.py.call(_maintenance_value_parsing_1._vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    history_path = "vehicle.collisionHistory";
    raw_history = _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_list, [vehicle, "collisionHistory", history_path], null);
    if (_runtime_1.py.truth(((raw_history === null)))) {
        return null;
    }
    history = [];
    for ([index, raw_entry] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_history], null))) {
        if (_runtime_1.py.truth(((raw_entry === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(history, "append"), [null], null);
            continue;
        }
        path = (_runtime_1.py.str(history_path) + "[" + _runtime_1.py.str(index) + "]");
        entry = _runtime_1.py.call(_maintenance_value_parsing_1._typed_object, [raw_entry, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(history, "append"), [_runtime_1.py.call(maintenance_models_1.CollisionHistoryEntry, [], Object.assign({}, { "collision_id": _runtime_1.py.call(_maintenance_value_parsing_1._required_string, [entry, "collisionId", (_runtime_1.py.str(path) + ".collisionId")], null) }, { "report_date_time": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_datetime, [entry, "reportDateTime", (_runtime_1.py.str(path) + ".reportDateTime")], null) }, { "collision_date_time": _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_datetime, [entry, "collisionDateTime", (_runtime_1.py.str(path) + ".collisionDateTime")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [history], null);
}
/** Parse nullable AVK2 collision probe readings for a vehicle. */
function parse_collision_probe_data(...__args) {
    let index, path, raw_reading, raw_readings, reading, readings, readings_path, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable AVK2 collision probe readings for a vehicle. */
    vehicle = _runtime_1.py.call(_maintenance_value_parsing_1._vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    if (_runtime_1.py.truth((!_runtime_1.py.contains(exports._AVK2_VEHICLE_TYPENAMES, _runtime_1.py.call(_maintenance_value_parsing_1._typename, [vehicle, "vehicle"], null))))) {
        return null;
    }
    readings_path = "vehicle.collisionProbeReadings";
    raw_readings = _runtime_1.py.call(_maintenance_value_parsing_1._required_nullable_list, [vehicle, "collisionProbeReadings", readings_path], null);
    if (_runtime_1.py.truth(((raw_readings === null)))) {
        return null;
    }
    readings = [];
    for ([index, raw_reading] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_readings], null))) {
        if (_runtime_1.py.truth(((raw_reading === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(readings, "append"), [null], null);
            continue;
        }
        path = (_runtime_1.py.str(readings_path) + "[" + _runtime_1.py.str(index) + "]");
        reading = _runtime_1.py.call(_maintenance_value_parsing_1._typed_object, [raw_reading, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(readings, "append"), [_runtime_1.py.call(maintenance_models_1.CollisionProbeReading, [], Object.assign({}, { "collision_time": _runtime_1.py.call(_maintenance_value_parsing_1._required_datetime, [reading, "collisionTime", (_runtime_1.py.str(path) + ".collisionTime")], null) }, { "latitude": _runtime_1.py.call(_maintenance_value_parsing_1._required_float, [reading, "latitude", (_runtime_1.py.str(path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_maintenance_value_parsing_1._required_float, [reading, "longitude", (_runtime_1.py.str(path) + ".longitude")], null) }, { "mil_count": _runtime_1.py.call(_maintenance_value_parsing_1._required_int, [reading, "milCount", (_runtime_1.py.str(path) + ".milCount")], null) }, { "mil_data": _runtime_1.py.call(_maintenance_value_parsing_1._required_string, [reading, "milData", (_runtime_1.py.str(path) + ".milData")], null) }, { "odometer": _runtime_1.py.call(_maintenance_value_parsing_1._required_float, [reading, "odometer", (_runtime_1.py.str(path) + ".odometer")], null) }, { "speed": _runtime_1.py.call(_maintenance_value_parsing_1._required_float, [reading, "speed", (_runtime_1.py.str(path) + ".speed")], null) }, { "unit": _runtime_1.py.call(_maintenance_value_parsing_1._required_enum, [reading, "unit", models_1.DistanceUnit, (_runtime_1.py.str(path) + ".unit")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [readings], null);
}
//# sourceMappingURL=_maintenance_public_parsing.js.map