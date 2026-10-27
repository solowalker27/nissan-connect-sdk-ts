"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpConnectorLevelInput = exports.EmpEvseStatusInput = exports.PlugConnectorType = exports.SpeedUnit = exports.DistanceUnit = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.WeightUnit = exports.DrivingHistoryAggregator = exports.coordinate_input = exports.CoordinateInput = void 0;
exports.driving_history_variables = driving_history_variables;
exports.ev_charge_stations_variables = ev_charge_stations_variables;
exports.e_vehicle_eligibility_variables = e_vehicle_eligibility_variables;
exports.last_known_camera_usage_counter_variables = last_known_camera_usage_counter_variables;
exports.location_details_variables = location_details_variables;
exports.parking_chargeable_variables = parking_chargeable_variables;
exports.shareable_capabilities_variables = shareable_capabilities_variables;
exports.tariff_pricing_variables = tariff_pricing_variables;
exports._optional_enum = _optional_enum;
exports._optional_nullable_enum_list = _optional_nullable_enum_list;
exports._optional_nullable_string_list = _optional_nullable_string_list;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const StrEnum = _runtime_1.py.StrEnum;
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "CoordinateInput", { enumerable: true, get: function () { return common_inputs_1.CoordinateInput; } });
Object.defineProperty(exports, "coordinate_input", { enumerable: true, get: function () { return common_inputs_1.coordinate_input; } });
const extended_vehicle_models_1 = require("./extended_vehicle_models");
Object.defineProperty(exports, "DrivingHistoryAggregator", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryAggregator; } });
Object.defineProperty(exports, "WeightUnit", { enumerable: true, get: function () { return extended_vehicle_models_1.WeightUnit; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "SpeedUnit", { enumerable: true, get: function () { return models_1.SpeedUnit; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "PlugConnectorType", { enumerable: true, get: function () { return navigation_inputs_1.PlugConnectorType; } });
exports.EmpEvseStatusInput = _runtime_1.py.enumType("EmpEvseStatusInput", { "AVAILABLE": "AVAILABLE", "ALL": "ALL", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.EmpConnectorLevelInput = _runtime_1.py.enumType("EmpConnectorLevelInput", { "L1": "L1", "L2": "L2", "L3": "L3", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Serialize DrivingHistory variables with Apollo omission semantics. */
function driving_history_variables(...__args) {
    let { "vin": vin, "aggregator": aggregator, "distance_unit": distance_unit, "weight_unit": weight_unit, "speed_unit": speed_unit } = _runtime_1.py.bind(__args, ["vin", "aggregator"], { "distance_unit": graphql_input_1.UNSET, "weight_unit": graphql_input_1.UNSET, "speed_unit": graphql_input_1.UNSET }, ["distance_unit", "weight_unit", "speed_unit"], null, null);
    /** Serialize DrivingHistory variables with Apollo omission semantics. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "aggregator": _runtime_1.py.call(graphql_input_1.serialize_enum, [aggregator], null) }, { "distanceUnit": _runtime_1.py.call(_optional_enum, [distance_unit], null) }, { "weightUnit": _runtime_1.py.call(_optional_enum, [weight_unit], null) }, { "speedUnit": _runtime_1.py.call(_optional_enum, [speed_unit], null) }));
}
/** Serialize EVChargeStations variables while retaining explicit nulls. */
function ev_charge_stations_variables(...__args) {
    let { "vin": vin, "coordinate": coordinate, "plug_connector_types": plug_connector_types, "enable_within_range_restriction": enable_within_range_restriction } = _runtime_1.py.bind(__args, ["vin", "coordinate"], { "plug_connector_types": graphql_input_1.UNSET, "enable_within_range_restriction": graphql_input_1.UNSET }, ["plug_connector_types", "enable_within_range_restriction"], null, null);
    /** Serialize EVChargeStations variables while retaining explicit nulls. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "coordinate": _runtime_1.py.call(common_inputs_1.coordinate_input, [coordinate], null) }, { "plugConnectorTypes": _runtime_1.py.call(_optional_nullable_enum_list, [plug_connector_types], null) }, { "enableWithinRangeRestriction": enable_within_range_restriction }));
}
/** Serialize eVehicleEligibility variables. */
function e_vehicle_eligibility_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize eVehicleEligibility variables. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize LastKnownCameraUsageCounter variables. */
function last_known_camera_usage_counter_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize LastKnownCameraUsageCounter variables. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize LocationDetails variables with nullable filters preserved. */
function location_details_variables(...__args) {
    let { "vin": vin, "latitude": latitude, "longitude": longitude, "in_network_only": in_network_only, "range_value": range_value, "operator_names": operator_names, "evse": evse, "plug_types": plug_types, "charge_level": charge_level, "pnc_stations_only": pnc_stations_only } = _runtime_1.py.bind(__args, ["vin", "latitude", "longitude", "in_network_only", "range_value"], { "operator_names": graphql_input_1.UNSET, "evse": graphql_input_1.UNSET, "plug_types": graphql_input_1.UNSET, "charge_level": graphql_input_1.UNSET, "pnc_stations_only": graphql_input_1.UNSET }, ["operator_names", "evse", "plug_types", "charge_level", "pnc_stations_only"], null, null);
    /** Serialize LocationDetails variables with nullable filters preserved. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "latitude": latitude }, { "longitude": longitude }, { "inNetworkOnly": in_network_only }, { "range": range_value }, { "operatorName": _runtime_1.py.call(_optional_nullable_string_list, [operator_names], null) }, { "evse": _runtime_1.py.call(_optional_enum, [evse], null) }, { "plugType": _runtime_1.py.call(_optional_nullable_string_list, [plug_types], null) }, { "chargeLevel": _runtime_1.py.call(_optional_enum, [charge_level], null) }, { "pncStationsOnly": pnc_stations_only }));
}
/** Serialize ParkingChargeable variables. */
function parking_chargeable_variables(...__args) {
    let { "evse_id": evse_id } = _runtime_1.py.bind(__args, ["evse_id"], {}, [], null, null);
    /** Serialize ParkingChargeable variables. */
    return Object.assign({}, { ["evseId"]: evse_id });
}
/** Serialize ShareableCapabilities variables while preserving null versus omission. */
function shareable_capabilities_variables(...__args) {
    let { "vin": vin, "driver_id": driver_id } = _runtime_1.py.bind(__args, ["vin"], { "driver_id": graphql_input_1.UNSET }, ["driver_id"], null, null);
    /** Serialize ShareableCapabilities variables while preserving null versus omission. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "driverId": driver_id }));
}
/** Serialize TariffPricing variables. */
function tariff_pricing_variables(...__args) {
    let { "vin": vin, "location_id": location_id } = _runtime_1.py.bind(__args, ["vin", "location_id"], {}, [], null, null);
    /** Serialize TariffPricing variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["locationId"]: location_id });
}
/** Translated upstream _optional_enum. */
function _optional_enum(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, StrEnum], null))) {
        return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
    }
    return value;
}
/** Translated upstream _optional_nullable_enum_list. */
function _optional_nullable_enum_list(...__args) {
    let item;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return (() => { const __out = []; for (const item of _runtime_1.py.iterable(value)) {
        __out.push((_runtime_1.py.truth(((item !== null))) ? _runtime_1.py.call(graphql_input_1.serialize_enum, [item], null) : null));
    } return __out; })();
}
/** Translated upstream _optional_nullable_string_list. */
function _optional_nullable_string_list(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(_runtime_1.py.list, [value], null);
}
//# sourceMappingURL=extended_vehicle_inputs.js.map