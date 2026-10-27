"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceUnit = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = void 0;
exports.vehicle_preferred_dealer_variables = vehicle_preferred_dealer_variables;
exports.vehicle_recalls_variables = vehicle_recalls_variables;
exports.vehicle_roadside_assistance_variables = vehicle_roadside_assistance_variables;
exports.vehicle_service_history_variables = vehicle_service_history_variables;
exports.warranty_info_variables = warranty_info_variables;
exports._optional_distance_unit = _optional_distance_unit;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
/** Serialize variables for the preferred-dealer query. */
function vehicle_preferred_dealer_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize variables for the preferred-dealer query. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize variables for the standalone vehicle-recalls query. */
function vehicle_recalls_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize variables for the standalone vehicle-recalls query. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize variables for the roadside-assistance query. */
function vehicle_roadside_assistance_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize variables for the roadside-assistance query. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize service-history variables while preserving Apollo optionality. */
function vehicle_service_history_variables(...__args) {
    let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
    /** Serialize service-history variables while preserving Apollo optionality. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "unit": _runtime_1.py.call(_optional_distance_unit, [unit], null) }));
}
/** Serialize warranty variables while preserving omitted and null mileage. */
function warranty_info_variables(...__args) {
    let { "vin": vin, "mileage": mileage } = _runtime_1.py.bind(__args, ["vin"], { "mileage": graphql_input_1.UNSET }, ["mileage"], null, null);
    /** Serialize warranty variables while preserving omitted and null mileage. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "mileage": mileage }));
}
/** Translated upstream _optional_distance_unit. */
function _optional_distance_unit(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, models_1.DistanceUnit], null))) {
        return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
    }
    return value;
}
//# sourceMappingURL=service_inputs.js.map