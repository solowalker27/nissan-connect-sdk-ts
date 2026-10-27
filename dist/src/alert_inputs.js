"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeedAlertInput = exports.AlertSpeedInput = exports.CurfewAlertInput = exports.AlertScheduleInput = exports.BoundaryAlertUpdate = exports.BoundaryAlertInput = exports.ValetRadiusInput = exports.AlertRadiusInput = exports.BoundaryAlertType = exports.WeekDay = exports.SpeedUnit = exports.DistanceUnit = exports.serialize_enum = exports.serialize_datetime = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.coordinate_input = exports.address_input = exports.CoordinateInput = exports.AddressInput = void 0;
exports.boundary_alert_input = boundary_alert_input;
exports.boundary_alert_update_input = boundary_alert_update_input;
exports.curfew_alert_input = curfew_alert_input;
exports.speed_alert_input = speed_alert_input;
exports.radius_input = radius_input;
exports.valet_radius_input = valet_radius_input;
exports.optional_coordinate_input = optional_coordinate_input;
exports.optional_valet_radius_input = optional_valet_radius_input;
exports.alert_speed_input = alert_speed_input;
exports._optional_serialized = _optional_serialized;
exports._optional_enum = _optional_enum;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Callable = _runtime_1.py.Callable;
const dataclass = _runtime_1.py.dataclass;
const field = _runtime_1.py.field;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "AddressInput", { enumerable: true, get: function () { return common_inputs_1.AddressInput; } });
Object.defineProperty(exports, "CoordinateInput", { enumerable: true, get: function () { return common_inputs_1.CoordinateInput; } });
Object.defineProperty(exports, "address_input", { enumerable: true, get: function () { return common_inputs_1.address_input; } });
Object.defineProperty(exports, "coordinate_input", { enumerable: true, get: function () { return common_inputs_1.coordinate_input; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_datetime", { enumerable: true, get: function () { return graphql_input_1.serialize_datetime; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "SpeedUnit", { enumerable: true, get: function () { return models_1.SpeedUnit; } });
Object.defineProperty(exports, "WeekDay", { enumerable: true, get: function () { return models_1.WeekDay; } });
exports.BoundaryAlertType = _runtime_1.py.enumType("BoundaryAlertType", { "ON_ENTRY": "ON_ENTRY", "ON_EXIT": "ON_EXIT" }, true);
/** Boundary radius with its required distance unit. */
class AlertRadiusInput {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AlertRadiusInput, __args); Object.freeze(this); }
}
exports.AlertRadiusInput = AlertRadiusInput;
_runtime_1.py.classType(AlertRadiusInput);
/** Valet radius whose non-null distance unit may be omitted. */
class ValetRadiusInput {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ValetRadiusInput, __args); Object.freeze(this); }
}
exports.ValetRadiusInput = ValetRadiusInput;
_runtime_1.py.classType(ValetRadiusInput);
/** Complete settings required to create a boundary alert. */
class BoundaryAlertInput {
    name;
    coordinate;
    radius;
    in_vehicle_warning;
    alert_type;
    address;
    static __fields = [["name", _runtime_1.py.MISSING], ["coordinate", _runtime_1.py.MISSING], ["radius", _runtime_1.py.MISSING], ["in_vehicle_warning", _runtime_1.py.MISSING], ["alert_type", _runtime_1.py.MISSING], ["address", _runtime_1.py.call(field, [], Object.assign({}, { "default_factory": common_inputs_1.AddressInput }))]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, BoundaryAlertInput, __args); Object.freeze(this); }
}
exports.BoundaryAlertInput = BoundaryAlertInput;
_runtime_1.py.classType(BoundaryAlertInput);
/** Partial boundary alert update; omitted fields remain unchanged. */
class BoundaryAlertUpdate {
    name;
    coordinate;
    address;
    radius;
    in_vehicle_warning;
    alert_type;
    static __fields = [["name", graphql_input_1.UNSET], ["coordinate", graphql_input_1.UNSET], ["address", graphql_input_1.UNSET], ["radius", graphql_input_1.UNSET], ["in_vehicle_warning", graphql_input_1.UNSET], ["alert_type", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, BoundaryAlertUpdate, __args); Object.freeze(this); }
}
exports.BoundaryAlertUpdate = BoundaryAlertUpdate;
_runtime_1.py.classType(BoundaryAlertUpdate);
/** Recurring schedule required by a curfew alert. */
class AlertScheduleInput {
    start_date_time;
    duration;
    week_days;
    static __fields = [["start_date_time", _runtime_1.py.MISSING], ["duration", _runtime_1.py.MISSING], ["week_days", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AlertScheduleInput, __args); Object.freeze(this); }
}
exports.AlertScheduleInput = AlertScheduleInput;
_runtime_1.py.classType(AlertScheduleInput);
/** Complete settings required to create or replace a curfew alert. */
class CurfewAlertInput {
    name;
    in_vehicle_warning;
    schedule;
    static __fields = [["name", _runtime_1.py.MISSING], ["in_vehicle_warning", _runtime_1.py.MISSING], ["schedule", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CurfewAlertInput, __args); Object.freeze(this); }
}
exports.CurfewAlertInput = CurfewAlertInput;
_runtime_1.py.classType(CurfewAlertInput);
/** Unit-aware speed threshold used by current MyNISSAN clients. */
class AlertSpeedInput {
    unit;
    value;
    static __fields = [["unit", _runtime_1.py.MISSING], ["value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AlertSpeedInput, __args); Object.freeze(this); }
}
exports.AlertSpeedInput = AlertSpeedInput;
_runtime_1.py.classType(AlertSpeedInput);
/** Speed alert settings, including the optional legacy MPH field. */
class SpeedAlertInput {
    in_vehicle_warning;
    speed;
    speed_in_mph;
    static __fields = [["in_vehicle_warning", _runtime_1.py.MISSING], ["speed", graphql_input_1.UNSET], ["speed_in_mph", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SpeedAlertInput, __args); Object.freeze(this); }
}
exports.SpeedAlertInput = SpeedAlertInput;
_runtime_1.py.classType(SpeedAlertInput);
/** Translated upstream boundary_alert_input. */
function boundary_alert_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return Object.assign({}, { ["name"]: _runtime_1.py.attr(value, "name") }, { ["coordinate"]: _runtime_1.py.call(common_inputs_1.coordinate_input, [_runtime_1.py.attr(value, "coordinate")], null) }, { ["address"]: _runtime_1.py.call(common_inputs_1.address_input, [_runtime_1.py.attr(value, "address")], null) }, { ["radius"]: _runtime_1.py.call(radius_input, [_runtime_1.py.attr(value, "radius")], null) }, { ["inVehicleWarning"]: _runtime_1.py.attr(value, "in_vehicle_warning") }, { ["alertType"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "alert_type")], null) });
}
/** Translated upstream boundary_alert_update_input. */
function boundary_alert_update_input(...__args) {
    let { "service_request_id": service_request_id, "value": value } = _runtime_1.py.bind(__args, ["service_request_id", "value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "serviceRequestId": service_request_id }, { "name": _runtime_1.py.attr(value, "name") }, { "coordinate": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "coordinate"), common_inputs_1.coordinate_input], null) }, { "address": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "address"), common_inputs_1.address_input], null) }, { "radius": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "radius"), radius_input], null) }, { "inVehicleWarning": _runtime_1.py.attr(value, "in_vehicle_warning") }, { "alertType": _runtime_1.py.call(_optional_enum, [_runtime_1.py.attr(value, "alert_type")], null) }));
}
/** Translated upstream curfew_alert_input. */
function curfew_alert_input(...__args) {
    let day;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return Object.assign({}, { ["name"]: _runtime_1.py.attr(value, "name") }, { ["inVehicleWarning"]: _runtime_1.py.attr(value, "in_vehicle_warning") }, { ["schedule"]: Object.assign({}, { ["startDateTime"]: _runtime_1.py.call(graphql_input_1.serialize_datetime, [_runtime_1.py.attr(_runtime_1.py.attr(value, "schedule"), "start_date_time")], null) }, { ["duration"]: _runtime_1.py.attr(_runtime_1.py.attr(value, "schedule"), "duration") }, { ["weekDays"]: (() => { const __out = []; for (const day of _runtime_1.py.iterable(_runtime_1.py.attr(_runtime_1.py.attr(value, "schedule"), "week_days"))) {
                __out.push(_runtime_1.py.call(graphql_input_1.serialize_enum, [day], null));
            } return __out; })() }) });
}
/** Translated upstream speed_alert_input. */
function speed_alert_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "speedInMPH": _runtime_1.py.attr(value, "speed_in_mph") }, { "inVehicleWarning": _runtime_1.py.attr(value, "in_vehicle_warning") }, { "speed": _runtime_1.py.call(_optional_serialized, [_runtime_1.py.attr(value, "speed"), alert_speed_input], null) }));
}
/** Translated upstream radius_input. */
function radius_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return Object.assign({}, { ["value"]: _runtime_1.py.attr(value, "value") }, { ["unit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "unit")], null) });
}
/** Translated upstream valet_radius_input. */
function valet_radius_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "value": _runtime_1.py.attr(value, "value") }, { "unit": _runtime_1.py.call(_optional_enum, [_runtime_1.py.attr(value, "unit")], null) }));
}
/** Translated upstream optional_coordinate_input. */
function optional_coordinate_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(_optional_serialized, [value, common_inputs_1.coordinate_input], null);
}
/** Translated upstream optional_valet_radius_input. */
function optional_valet_radius_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(_optional_serialized, [value, valet_radius_input], null);
}
/** Translated upstream alert_speed_input. */
function alert_speed_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return Object.assign({}, { ["type"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "unit")], null) }, { ["value"]: _runtime_1.py.attr(value, "value") });
}
/** Translated upstream _optional_serialized. */
function _optional_serialized(...__args) {
    let { "value": value, "serializer": serializer } = _runtime_1.py.bind(__args, ["value", "serializer"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(serializer, [value], null);
}
/** Translated upstream _optional_enum. */
function _optional_enum(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, StrEnum], null))) {
        return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
    }
    return value;
}
//# sourceMappingURL=alert_inputs.js.map