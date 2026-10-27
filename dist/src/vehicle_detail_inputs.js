"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureUnit = exports.SpeedUnit = exports.DistanceUnit = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = void 0;
exports.vehicle_battery_status_variables = vehicle_battery_status_variables;
exports.vehicle_boundary_alerts_variables = vehicle_boundary_alerts_variables;
exports.vehicle_climate_status_variables = vehicle_climate_status_variables;
exports.vehicle_curfew_alerts_variables = vehicle_curfew_alerts_variables;
exports.vehicle_doors_status_variables = vehicle_doors_status_variables;
exports.vehicle_model_year_variables = vehicle_model_year_variables;
exports.vehicle_nickname_variables = vehicle_nickname_variables;
exports.vehicle_speed_alerts_variables = vehicle_speed_alerts_variables;
exports.vehicle_status_variables = vehicle_status_variables;
exports.vehicle_status_and_recalls_variables = vehicle_status_and_recalls_variables;
exports.vehicle_valet_alerts_variables = vehicle_valet_alerts_variables;
exports._optional_enum = _optional_enum;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const StrEnum = _runtime_1.py.StrEnum;
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "SpeedUnit", { enumerable: true, get: function () { return models_1.SpeedUnit; } });
Object.defineProperty(exports, "TemperatureUnit", { enumerable: true, get: function () { return models_1.TemperatureUnit; } });
/** Serialize the exact VehicleBatteryStatus variables. */
function vehicle_battery_status_variables(...__args) {
    let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
    /** Serialize the exact VehicleBatteryStatus variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "unit": _runtime_1.py.call(_optional_enum, [unit], null) }));
}
/** Serialize the exact VehicleBoundaryAlerts variables. */
function vehicle_boundary_alerts_variables(...__args) {
    let { "vin": vin, "distance_unit": distance_unit } = _runtime_1.py.bind(__args, ["vin"], { "distance_unit": graphql_input_1.UNSET }, ["distance_unit"], null, null);
    /** Serialize the exact VehicleBoundaryAlerts variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "distanceUnit": _runtime_1.py.call(_optional_enum, [distance_unit], null) }));
}
/** Serialize the required VehicleClimateStatus variables. */
function vehicle_climate_status_variables(...__args) {
    let { "vin": vin, "temperature_unit": temperature_unit } = _runtime_1.py.bind(__args, ["vin", "temperature_unit"], {}, [], null, null);
    /** Serialize the required VehicleClimateStatus variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["temperatureUnit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [temperature_unit], null) });
}
/** Serialize the required VehicleCurfewAlerts VIN. */
function vehicle_curfew_alerts_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VehicleCurfewAlerts VIN. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize the required VehicleDoorsStatus VIN. */
function vehicle_doors_status_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VehicleDoorsStatus VIN. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize the required VehicleModelYear VIN. */
function vehicle_model_year_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VehicleModelYear VIN. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize the required VehicleNickname VIN. */
function vehicle_nickname_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VehicleNickname VIN. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize the exact VehicleSpeedAlerts variables. */
function vehicle_speed_alerts_variables(...__args) {
    let { "vin": vin, "speed_unit": speed_unit } = _runtime_1.py.bind(__args, ["vin"], { "speed_unit": graphql_input_1.UNSET }, ["speed_unit"], null, null);
    /** Serialize the exact VehicleSpeedAlerts variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "speedUnit": _runtime_1.py.call(_optional_enum, [speed_unit], null) }));
}
/** Serialize the exact VehicleStatus variables. */
function vehicle_status_variables(...__args) {
    let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
    /** Serialize the exact VehicleStatus variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "unit": _runtime_1.py.call(_optional_enum, [unit], null) }));
}
/** Serialize the exact VehicleStatusAndRecalls variables. */
function vehicle_status_and_recalls_variables(...__args) {
    let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
    /** Serialize the exact VehicleStatusAndRecalls variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "unit": _runtime_1.py.call(_optional_enum, [unit], null) }));
}
/** Serialize the exact VehicleValetAlerts variables. */
function vehicle_valet_alerts_variables(...__args) {
    let { "vin": vin, "distance_unit": distance_unit } = _runtime_1.py.bind(__args, ["vin"], { "distance_unit": graphql_input_1.UNSET }, ["distance_unit"], null, null);
    /** Serialize the exact VehicleValetAlerts variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "distanceUnit": _runtime_1.py.call(_optional_enum, [distance_unit], null) }));
}
/** Translated upstream _optional_enum. */
function _optional_enum(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
}
//# sourceMappingURL=vehicle_detail_inputs.js.map