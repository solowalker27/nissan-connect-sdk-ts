"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPartsReminderInput = exports.UpdatePartsReminderInput = exports.CreatePartsReminderInput = exports.ReminderInterval = exports.DistanceInput = exports.UpdatePastServiceInput = exports.PastServiceInput = exports.DistanceUnit = exports.serialize_enum = exports.serialize_datetime = exports.optional_input_fields = exports.UnsetType = exports.UNSET = void 0;
exports.get_maintenance_timeline_variables = get_maintenance_timeline_variables;
exports.get_service_contracts_variables = get_service_contracts_variables;
exports.add_past_service_variables = add_past_service_variables;
exports.update_past_service_variables = update_past_service_variables;
exports.parts_reminders_variables = parts_reminders_variables;
exports.create_parts_reminder_variables = create_parts_reminder_variables;
exports.update_parts_reminder_variables = update_parts_reminder_variables;
exports.reset_parts_reminder_variables = reset_parts_reminder_variables;
exports.delete_parts_reminder_variables = delete_parts_reminder_variables;
exports.collision_history_variables = collision_history_variables;
exports.collision_probe_data_variables = collision_probe_data_variables;
exports.past_service_input = past_service_input;
exports.update_past_service_input = update_past_service_input;
exports.distance_input = distance_input;
exports.reminder_interval_input = reminder_interval_input;
exports.create_parts_reminder_input = create_parts_reminder_input;
exports.update_parts_reminder_input = update_parts_reminder_input;
exports.reset_parts_reminder_input = reset_parts_reminder_input;
exports._optional_serialized = _optional_serialized;
exports._optional_datetime = _optional_datetime;
exports._optional_distance_unit = _optional_distance_unit;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Callable = _runtime_1.py.Callable;
const dataclass = _runtime_1.py.dataclass;
const date = _runtime_1.py.date;
const datetime = _runtime_1.py.datetime;
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_datetime", { enumerable: true, get: function () { return graphql_input_1.serialize_datetime; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
/** Fields accepted when adding a completed service record. */
class PastServiceInput {
    vin;
    dealer_id;
    invoice_date;
    odometer;
    op_code_id;
    comment;
    static __fields = [["vin", _runtime_1.py.MISSING], ["dealer_id", _runtime_1.py.MISSING], ["invoice_date", _runtime_1.py.MISSING], ["odometer", _runtime_1.py.MISSING], ["op_code_id", graphql_input_1.UNSET], ["comment", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PastServiceInput, __args); Object.freeze(this); }
}
exports.PastServiceInput = PastServiceInput;
_runtime_1.py.classType(PastServiceInput);
/** Fields accepted when replacing a completed service record. */
class UpdatePastServiceInput {
    vin;
    dealer_id;
    invoice_date;
    odometer;
    maintenance_id;
    op_code_id;
    comment;
    static __fields = [["vin", _runtime_1.py.MISSING], ["dealer_id", _runtime_1.py.MISSING], ["invoice_date", _runtime_1.py.MISSING], ["odometer", _runtime_1.py.MISSING], ["maintenance_id", _runtime_1.py.MISSING], ["op_code_id", graphql_input_1.UNSET], ["comment", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdatePastServiceInput, __args); Object.freeze(this); }
}
exports.UpdatePastServiceInput = UpdatePastServiceInput;
_runtime_1.py.classType(UpdatePastServiceInput);
/** Integer reminder distance whose non-null unit may be omitted. */
class DistanceInput {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DistanceInput, __args); Object.freeze(this); }
}
exports.DistanceInput = DistanceInput;
_runtime_1.py.classType(DistanceInput);
/** Optional calendar and distance intervals for a parts reminder. */
class ReminderInterval {
    months_interval;
    distance_interval;
    static __fields = [["months_interval", graphql_input_1.UNSET], ["distance_interval", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ReminderInterval, __args); Object.freeze(this); }
}
exports.ReminderInterval = ReminderInterval;
_runtime_1.py.classType(ReminderInterval);
/** Fields accepted when creating a parts reminder. */
class CreatePartsReminderInput {
    parts;
    mileage;
    date;
    interval;
    static __fields = [["parts", _runtime_1.py.MISSING], ["mileage", graphql_input_1.UNSET], ["date", graphql_input_1.UNSET], ["interval", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CreatePartsReminderInput, __args); Object.freeze(this); }
}
exports.CreatePartsReminderInput = CreatePartsReminderInput;
_runtime_1.py.classType(CreatePartsReminderInput);
/** Fields accepted when replacing a parts reminder. */
class UpdatePartsReminderInput {
    id;
    parts;
    mileage;
    date;
    interval;
    static __fields = [["id", _runtime_1.py.MISSING], ["parts", _runtime_1.py.MISSING], ["mileage", graphql_input_1.UNSET], ["date", graphql_input_1.UNSET], ["interval", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdatePartsReminderInput, __args); Object.freeze(this); }
}
exports.UpdatePartsReminderInput = UpdatePartsReminderInput;
_runtime_1.py.classType(UpdatePartsReminderInput);
/** Fields accepted when resetting a parts reminder schedule. */
class ResetPartsReminderInput {
    id;
    parts;
    interval;
    static __fields = [["id", _runtime_1.py.MISSING], ["parts", _runtime_1.py.MISSING], ["interval", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ResetPartsReminderInput, __args); Object.freeze(this); }
}
exports.ResetPartsReminderInput = ResetPartsReminderInput;
_runtime_1.py.classType(ResetPartsReminderInput);
/** Serialize required GetMaintenanceTimeline variables. */
function get_maintenance_timeline_variables(...__args) {
    let { "vin": vin, "mileage_unit": mileage_unit } = _runtime_1.py.bind(__args, ["vin", "mileage_unit"], {}, [], null, null);
    /** Serialize required GetMaintenanceTimeline variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["mileageUnit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [mileage_unit], null) });
}
/** Serialize required GetServiceContracts variables. */
function get_service_contracts_variables(...__args) {
    let { "vin": vin, "mileage": mileage } = _runtime_1.py.bind(__args, ["vin", "mileage"], {}, [], null, null);
    /** Serialize required GetServiceContracts variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["mileage"]: mileage });
}
/** Serialize the nullable and omittable AddPastService input variable. */
function add_past_service_variables(...__args) {
    let { "service": service } = _runtime_1.py.bind(__args, ["service"], { "service": graphql_input_1.UNSET }, [], null, null);
    /** Serialize the nullable and omittable AddPastService input variable. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "input": _runtime_1.py.call(_optional_serialized, [service, past_service_input], null) }));
}
/** Serialize the required UpdatePastService input variable. */
function update_past_service_variables(...__args) {
    let { "service": service } = _runtime_1.py.bind(__args, ["service"], {}, [], null, null);
    /** Serialize the required UpdatePastService input variable. */
    return Object.assign({}, { ["input"]: _runtime_1.py.call(update_past_service_input, [service], null) });
}
/** Serialize PartsReminders variables while preserving Apollo optionality. */
function parts_reminders_variables(...__args) {
    let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
    /** Serialize PartsReminders variables while preserving Apollo optionality. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "unit": _runtime_1.py.call(_optional_distance_unit, [unit], null) }));
}
/** Serialize required CreatePartsReminder variables. */
function create_parts_reminder_variables(...__args) {
    let { "vin": vin, "reminder": reminder } = _runtime_1.py.bind(__args, ["vin", "reminder"], {}, [], null, null);
    /** Serialize required CreatePartsReminder variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["reminder"]: _runtime_1.py.call(create_parts_reminder_input, [reminder], null) });
}
/** Serialize required UpdatePartsReminder variables. */
function update_parts_reminder_variables(...__args) {
    let { "vin": vin, "reminder": reminder } = _runtime_1.py.bind(__args, ["vin", "reminder"], {}, [], null, null);
    /** Serialize required UpdatePartsReminder variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["reminder"]: _runtime_1.py.call(update_parts_reminder_input, [reminder], null) });
}
/** Serialize required ResetPartsReminder variables. */
function reset_parts_reminder_variables(...__args) {
    let { "vin": vin, "reminder": reminder } = _runtime_1.py.bind(__args, ["vin", "reminder"], {}, [], null, null);
    /** Serialize required ResetPartsReminder variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["reminder"]: _runtime_1.py.call(reset_parts_reminder_input, [reminder], null) });
}
/** Serialize required DeletePartsReminder variables. */
function delete_parts_reminder_variables(...__args) {
    let { "vin": vin, "reminder_id": reminder_id } = _runtime_1.py.bind(__args, ["vin", "reminder_id"], {}, [], null, null);
    /** Serialize required DeletePartsReminder variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["reminderId"]: reminder_id });
}
/** Serialize required CollisionHistory variables. */
function collision_history_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize required CollisionHistory variables. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize required CollisionProbeData variables. */
function collision_probe_data_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize required CollisionProbeData variables. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize PastServiceInput without adding application defaults. */
function past_service_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize PastServiceInput without adding application defaults. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": _runtime_1.py.attr(value, "vin") }, { "dealerId": _runtime_1.py.attr(value, "dealer_id") }, { "opCodeID": _runtime_1.py.attr(value, "op_code_id") }, { "invoiceDate": _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(value, "invoice_date"), "isoformat"), [], null) }, { "odometer": _runtime_1.py.attr(value, "odometer") }, { "comment": _runtime_1.py.attr(value, "comment") }));
}
/** Serialize UpdatePastServiceInput without adding application defaults. */
function update_past_service_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize UpdatePastServiceInput without adding application defaults. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": _runtime_1.py.attr(value, "vin") }, { "dealerId": _runtime_1.py.attr(value, "dealer_id") }, { "opCodeID": _runtime_1.py.attr(value, "op_code_id") }, { "invoiceDate": _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(value, "invoice_date"), "isoformat"), [], null) }, { "odometer": _runtime_1.py.attr(value, "odometer") }, { "comment": _runtime_1.py.attr(value, "comment") }, { "maintenanceId": _runtime_1.py.attr(value, "maintenance_id") }));
}
/** Serialize DistanceInput while omitting its optional non-null unit. */
function distance_input(...__args) {
    let unit;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize DistanceInput while omitting its optional non-null unit. */
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(value, "unit"), models_1.DistanceUnit], null))) {
        unit = _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "unit")], null);
    }
    else {
        unit = _runtime_1.py.attr(value, "unit");
    }
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "value": _runtime_1.py.attr(value, "value") }, { "unit": unit }));
}
/** Serialize ReminderInterval while preserving omitted and null fields. */
function reminder_interval_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize ReminderInterval while preserving omitted and null fields. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "monthsInterval": _runtime_1.py.attr(value, "months_interval") }, { "distanceInterval": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "distance_interval"), distance_input], null) }));
}
/** Serialize CreatePartsReminderInput exactly as supplied. */
function create_parts_reminder_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize CreatePartsReminderInput exactly as supplied. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "mileage": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "mileage"), distance_input], null) }, { "date": _runtime_1.py.call(_optional_datetime, [_runtime_1.py.attr(value, "date")], null) }, { "interval": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "interval"), reminder_interval_input], null) }, { "parts": _runtime_1.py.call(_runtime_1.py.list, [_runtime_1.py.attr(value, "parts")], null) }));
}
/** Serialize UpdatePartsReminderInput exactly as supplied. */
function update_parts_reminder_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize UpdatePartsReminderInput exactly as supplied. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "id": _runtime_1.py.attr(value, "id") }, { "mileage": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "mileage"), distance_input], null) }, { "date": _runtime_1.py.call(_optional_datetime, [_runtime_1.py.attr(value, "date")], null) }, { "interval": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "interval"), reminder_interval_input], null) }, { "parts": _runtime_1.py.call(_runtime_1.py.list, [_runtime_1.py.attr(value, "parts")], null) }));
}
/** Serialize ResetPartsReminderInput exactly as supplied. */
function reset_parts_reminder_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize ResetPartsReminderInput exactly as supplied. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "id": _runtime_1.py.attr(value, "id") }, { "interval": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "interval"), reminder_interval_input], null) }, { "parts": _runtime_1.py.call(_runtime_1.py.list, [_runtime_1.py.attr(value, "parts")], null) }));
}
/** Translated upstream _optional_serialized. */
function _optional_serialized(...__args) {
    let { "value": value, "serializer": serializer } = _runtime_1.py.bind(__args, ["value", "serializer"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(serializer, [value], null);
}
/** Translated upstream _optional_datetime. */
function _optional_datetime(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(graphql_input_1.serialize_datetime, [value], null);
}
/** Translated upstream _optional_distance_unit. */
function _optional_distance_unit(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, models_1.DistanceUnit], null))) {
        return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
    }
    return value;
}
//# sourceMappingURL=maintenance_inputs.js.map