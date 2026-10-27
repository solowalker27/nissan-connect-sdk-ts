"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleChargeHistory = exports.VehicleCapabilities = exports.V2LStatus = exports.TemperatureUnit = exports.SpeedUnit = exports.DistanceUnit = exports.ChargeSchedule = exports.ChargeHistoryAggregator = exports.ChargeConfig = exports.serialize_enum = exports.UnsetType = exports.UNSET = exports.parse_tariff_pricing = exports.parse_shareable_capabilities = exports.parse_parking_chargeable = exports.parse_location_details = exports.parse_last_known_camera_usage_counter = exports.parse_ev_charge_stations = exports.parse_e_vehicle_eligibility = exports.parse_driving_history = exports.WeightUnit = exports.TariffPricing = exports.ShareableCapabilities = exports.ParkingChargeable = exports.LocationDetails = exports.LastKnownCameraUsageCounter = exports.EVehicleEligibility = exports.EVChargeStation = exports.DrivingHistoryAggregator = exports.DrivingHistory = exports.tariff_pricing_variables = exports.shareable_capabilities_variables = exports.parking_chargeable_variables = exports.location_details_variables = exports.last_known_camera_usage_counter_variables = exports.ev_charge_stations_variables = exports.e_vehicle_eligibility_variables = exports.driving_history_variables = exports.EmpEvseStatusInput = exports.EmpConnectorLevelInput = exports.parse_account_status = exports.EnergyAccountStatusResult = exports.CoordinateInput = exports.parse_pricing_details = exports.parse_charge_product = exports.ChargeProductResult = exports.ChargePlanPricingDetails = exports.pricing_details_variables = exports.charge_product_variables = exports._NissanClientBase = void 0;
exports._EnergyClientMixin = exports.parse_v1g_tokenized_url = exports.parse_v1g_monitored_charging_account_status = exports.V1GTokenizedUrlResult = exports.V1GMonitoredChargingAccountStatusResult = exports.v1g_tokenized_url_variables = exports.v1g_monitored_charging_account_status_variables = exports.parse_warranty_info = exports.parse_vehicle_service_history = exports.parse_vehicle_roadside_assistance = exports.parse_vehicle_recalls = exports.parse_vehicle_preferred_dealer = exports.VehicleWarranty = exports.VehicleServiceHistoryEntry = exports.VehicleRoadsideAssistance = exports.VehicleRecall = exports.VehiclePreferredDealer = exports.warranty_info_variables = exports.vehicle_service_history_variables = exports.vehicle_roadside_assistance_variables = exports.vehicle_recalls_variables = exports.vehicle_preferred_dealer_variables = exports.parse_pnc_service_status = exports.parse_charge_session_status = exports.PublicChargeSessionStatus = exports.PlugAndChargeServiceStatus = exports.parse_vehicle_charge_history = exports.parse_vehicle_capabilities = exports.parse_v2l_status = exports.parse_charge_schedules = exports.parse_charge_config = exports.PlugConnectorType = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const charge_plan_inputs_1 = require("./charge_plan_inputs");
Object.defineProperty(exports, "charge_product_variables", { enumerable: true, get: function () { return charge_plan_inputs_1.charge_product_variables; } });
Object.defineProperty(exports, "pricing_details_variables", { enumerable: true, get: function () { return charge_plan_inputs_1.pricing_details_variables; } });
const charge_plan_models_1 = require("./charge_plan_models");
Object.defineProperty(exports, "ChargePlanPricingDetails", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanPricingDetails; } });
Object.defineProperty(exports, "ChargeProductResult", { enumerable: true, get: function () { return charge_plan_models_1.ChargeProductResult; } });
const charge_plan_parsing_1 = require("./charge_plan_parsing");
Object.defineProperty(exports, "parse_charge_product", { enumerable: true, get: function () { return charge_plan_parsing_1.parse_charge_product; } });
Object.defineProperty(exports, "parse_pricing_details", { enumerable: true, get: function () { return charge_plan_parsing_1.parse_pricing_details; } });
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "CoordinateInput", { enumerable: true, get: function () { return common_inputs_1.CoordinateInput; } });
const energy_account_models_1 = require("./energy_account_models");
Object.defineProperty(exports, "EnergyAccountStatusResult", { enumerable: true, get: function () { return energy_account_models_1.EnergyAccountStatusResult; } });
const energy_account_parsing_1 = require("./energy_account_parsing");
Object.defineProperty(exports, "parse_account_status", { enumerable: true, get: function () { return energy_account_parsing_1.parse_account_status; } });
const extended_vehicle_inputs_1 = require("./extended_vehicle_inputs");
Object.defineProperty(exports, "EmpConnectorLevelInput", { enumerable: true, get: function () { return extended_vehicle_inputs_1.EmpConnectorLevelInput; } });
Object.defineProperty(exports, "EmpEvseStatusInput", { enumerable: true, get: function () { return extended_vehicle_inputs_1.EmpEvseStatusInput; } });
Object.defineProperty(exports, "driving_history_variables", { enumerable: true, get: function () { return extended_vehicle_inputs_1.driving_history_variables; } });
Object.defineProperty(exports, "e_vehicle_eligibility_variables", { enumerable: true, get: function () { return extended_vehicle_inputs_1.e_vehicle_eligibility_variables; } });
Object.defineProperty(exports, "ev_charge_stations_variables", { enumerable: true, get: function () { return extended_vehicle_inputs_1.ev_charge_stations_variables; } });
Object.defineProperty(exports, "last_known_camera_usage_counter_variables", { enumerable: true, get: function () { return extended_vehicle_inputs_1.last_known_camera_usage_counter_variables; } });
Object.defineProperty(exports, "location_details_variables", { enumerable: true, get: function () { return extended_vehicle_inputs_1.location_details_variables; } });
Object.defineProperty(exports, "parking_chargeable_variables", { enumerable: true, get: function () { return extended_vehicle_inputs_1.parking_chargeable_variables; } });
Object.defineProperty(exports, "shareable_capabilities_variables", { enumerable: true, get: function () { return extended_vehicle_inputs_1.shareable_capabilities_variables; } });
Object.defineProperty(exports, "tariff_pricing_variables", { enumerable: true, get: function () { return extended_vehicle_inputs_1.tariff_pricing_variables; } });
const extended_vehicle_models_1 = require("./extended_vehicle_models");
Object.defineProperty(exports, "DrivingHistory", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistory; } });
Object.defineProperty(exports, "DrivingHistoryAggregator", { enumerable: true, get: function () { return extended_vehicle_models_1.DrivingHistoryAggregator; } });
Object.defineProperty(exports, "EVChargeStation", { enumerable: true, get: function () { return extended_vehicle_models_1.EVChargeStation; } });
Object.defineProperty(exports, "EVehicleEligibility", { enumerable: true, get: function () { return extended_vehicle_models_1.EVehicleEligibility; } });
Object.defineProperty(exports, "LastKnownCameraUsageCounter", { enumerable: true, get: function () { return extended_vehicle_models_1.LastKnownCameraUsageCounter; } });
Object.defineProperty(exports, "LocationDetails", { enumerable: true, get: function () { return extended_vehicle_models_1.LocationDetails; } });
Object.defineProperty(exports, "ParkingChargeable", { enumerable: true, get: function () { return extended_vehicle_models_1.ParkingChargeable; } });
Object.defineProperty(exports, "ShareableCapabilities", { enumerable: true, get: function () { return extended_vehicle_models_1.ShareableCapabilities; } });
Object.defineProperty(exports, "TariffPricing", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffPricing; } });
Object.defineProperty(exports, "WeightUnit", { enumerable: true, get: function () { return extended_vehicle_models_1.WeightUnit; } });
const extended_vehicle_parsing_1 = require("./extended_vehicle_parsing");
Object.defineProperty(exports, "parse_driving_history", { enumerable: true, get: function () { return extended_vehicle_parsing_1.parse_driving_history; } });
Object.defineProperty(exports, "parse_e_vehicle_eligibility", { enumerable: true, get: function () { return extended_vehicle_parsing_1.parse_e_vehicle_eligibility; } });
Object.defineProperty(exports, "parse_ev_charge_stations", { enumerable: true, get: function () { return extended_vehicle_parsing_1.parse_ev_charge_stations; } });
Object.defineProperty(exports, "parse_last_known_camera_usage_counter", { enumerable: true, get: function () { return extended_vehicle_parsing_1.parse_last_known_camera_usage_counter; } });
Object.defineProperty(exports, "parse_location_details", { enumerable: true, get: function () { return extended_vehicle_parsing_1.parse_location_details; } });
Object.defineProperty(exports, "parse_parking_chargeable", { enumerable: true, get: function () { return extended_vehicle_parsing_1.parse_parking_chargeable; } });
Object.defineProperty(exports, "parse_shareable_capabilities", { enumerable: true, get: function () { return extended_vehicle_parsing_1.parse_shareable_capabilities; } });
Object.defineProperty(exports, "parse_tariff_pricing", { enumerable: true, get: function () { return extended_vehicle_parsing_1.parse_tariff_pricing; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "ChargeConfig", { enumerable: true, get: function () { return models_1.ChargeConfig; } });
Object.defineProperty(exports, "ChargeHistoryAggregator", { enumerable: true, get: function () { return models_1.ChargeHistoryAggregator; } });
Object.defineProperty(exports, "ChargeSchedule", { enumerable: true, get: function () { return models_1.ChargeSchedule; } });
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "SpeedUnit", { enumerable: true, get: function () { return models_1.SpeedUnit; } });
Object.defineProperty(exports, "TemperatureUnit", { enumerable: true, get: function () { return models_1.TemperatureUnit; } });
Object.defineProperty(exports, "V2LStatus", { enumerable: true, get: function () { return models_1.V2LStatus; } });
Object.defineProperty(exports, "VehicleCapabilities", { enumerable: true, get: function () { return models_1.VehicleCapabilities; } });
Object.defineProperty(exports, "VehicleChargeHistory", { enumerable: true, get: function () { return models_1.VehicleChargeHistory; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "PlugConnectorType", { enumerable: true, get: function () { return navigation_inputs_1.PlugConnectorType; } });
const parsing_1 = require("./parsing");
Object.defineProperty(exports, "parse_charge_config", { enumerable: true, get: function () { return parsing_1.parse_charge_config; } });
Object.defineProperty(exports, "parse_charge_schedules", { enumerable: true, get: function () { return parsing_1.parse_charge_schedules; } });
Object.defineProperty(exports, "parse_v2l_status", { enumerable: true, get: function () { return parsing_1.parse_v2l_status; } });
Object.defineProperty(exports, "parse_vehicle_capabilities", { enumerable: true, get: function () { return parsing_1.parse_vehicle_capabilities; } });
Object.defineProperty(exports, "parse_vehicle_charge_history", { enumerable: true, get: function () { return parsing_1.parse_vehicle_charge_history; } });
const pnc_models_1 = require("./pnc_models");
Object.defineProperty(exports, "PlugAndChargeServiceStatus", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeServiceStatus; } });
Object.defineProperty(exports, "PublicChargeSessionStatus", { enumerable: true, get: function () { return pnc_models_1.PublicChargeSessionStatus; } });
const pnc_parsing_1 = require("./pnc_parsing");
Object.defineProperty(exports, "parse_charge_session_status", { enumerable: true, get: function () { return pnc_parsing_1.parse_charge_session_status; } });
Object.defineProperty(exports, "parse_pnc_service_status", { enumerable: true, get: function () { return pnc_parsing_1.parse_pnc_service_status; } });
const service_inputs_1 = require("./service_inputs");
Object.defineProperty(exports, "vehicle_preferred_dealer_variables", { enumerable: true, get: function () { return service_inputs_1.vehicle_preferred_dealer_variables; } });
Object.defineProperty(exports, "vehicle_recalls_variables", { enumerable: true, get: function () { return service_inputs_1.vehicle_recalls_variables; } });
Object.defineProperty(exports, "vehicle_roadside_assistance_variables", { enumerable: true, get: function () { return service_inputs_1.vehicle_roadside_assistance_variables; } });
Object.defineProperty(exports, "vehicle_service_history_variables", { enumerable: true, get: function () { return service_inputs_1.vehicle_service_history_variables; } });
Object.defineProperty(exports, "warranty_info_variables", { enumerable: true, get: function () { return service_inputs_1.warranty_info_variables; } });
const service_models_1 = require("./service_models");
Object.defineProperty(exports, "VehiclePreferredDealer", { enumerable: true, get: function () { return service_models_1.VehiclePreferredDealer; } });
Object.defineProperty(exports, "VehicleRecall", { enumerable: true, get: function () { return service_models_1.VehicleRecall; } });
Object.defineProperty(exports, "VehicleRoadsideAssistance", { enumerable: true, get: function () { return service_models_1.VehicleRoadsideAssistance; } });
Object.defineProperty(exports, "VehicleServiceHistoryEntry", { enumerable: true, get: function () { return service_models_1.VehicleServiceHistoryEntry; } });
Object.defineProperty(exports, "VehicleWarranty", { enumerable: true, get: function () { return service_models_1.VehicleWarranty; } });
const service_parsing_1 = require("./service_parsing");
Object.defineProperty(exports, "parse_vehicle_preferred_dealer", { enumerable: true, get: function () { return service_parsing_1.parse_vehicle_preferred_dealer; } });
Object.defineProperty(exports, "parse_vehicle_recalls", { enumerable: true, get: function () { return service_parsing_1.parse_vehicle_recalls; } });
Object.defineProperty(exports, "parse_vehicle_roadside_assistance", { enumerable: true, get: function () { return service_parsing_1.parse_vehicle_roadside_assistance; } });
Object.defineProperty(exports, "parse_vehicle_service_history", { enumerable: true, get: function () { return service_parsing_1.parse_vehicle_service_history; } });
Object.defineProperty(exports, "parse_warranty_info", { enumerable: true, get: function () { return service_parsing_1.parse_warranty_info; } });
const v1g_inputs_1 = require("./v1g_inputs");
Object.defineProperty(exports, "v1g_monitored_charging_account_status_variables", { enumerable: true, get: function () { return v1g_inputs_1.v1g_monitored_charging_account_status_variables; } });
Object.defineProperty(exports, "v1g_tokenized_url_variables", { enumerable: true, get: function () { return v1g_inputs_1.v1g_tokenized_url_variables; } });
const v1g_models_1 = require("./v1g_models");
Object.defineProperty(exports, "V1GMonitoredChargingAccountStatusResult", { enumerable: true, get: function () { return v1g_models_1.V1GMonitoredChargingAccountStatusResult; } });
Object.defineProperty(exports, "V1GTokenizedUrlResult", { enumerable: true, get: function () { return v1g_models_1.V1GTokenizedUrlResult; } });
const v1g_parsing_1 = require("./v1g_parsing");
Object.defineProperty(exports, "parse_v1g_monitored_charging_account_status", { enumerable: true, get: function () { return v1g_parsing_1.parse_v1g_monitored_charging_account_status; } });
Object.defineProperty(exports, "parse_v1g_tokenized_url", { enumerable: true, get: function () { return v1g_parsing_1.parse_v1g_tokenized_url; } });
/** Translated upstream _EnergyClientMixin. */
class _EnergyClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _EnergyClientMixin, __args); }
    /** Return the connected services advertised for a vehicle. */
    async async_get_vehicle_capabilities(...__args) {
        let data;
        let { "vin": vin, "temperature_unit": temperature_unit } = _runtime_1.py.bind(__args, ["vin", "temperature_unit"], { "temperature_unit": _runtime_1.py.attr(models_1.TemperatureUnit, "FAHRENHEIT") }, [], null, null);
        /** Return the connected services advertised for a vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleCapabilities", _runtime_1.py.attr(operations, "VEHICLE_CAPABILITIES"), Object.assign({}, { ["vin"]: vin }, { ["unit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [temperature_unit], null) })], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_capabilities, [data, vin], null);
    }
    /** Return the vehicle's recurring charge schedules. */
    async async_get_charge_schedules(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the vehicle's recurring charge schedules. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleChargeSchedules", _runtime_1.py.attr(operations, "VEHICLE_CHARGE_SCHEDULES"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_charge_schedules, [data], null);
    }
    /** Return configured charging limits when supported by the vehicle. */
    async async_get_charge_config(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return configured charging limits when supported by the vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ChargeConfig", _runtime_1.py.attr(operations, "CHARGE_CONFIG"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_charge_config, [data], null);
    }
    /** Return V2L state and battery reserve levels when supported. */
    async async_get_v2l_status(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return V2L state and battery reserve levels when supported. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["V2lStatus", _runtime_1.py.attr(operations, "V2L_STATUS"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_v2l_status, [data], null);
    }
    /** Return charging sessions and summaries for a requested aggregation. */
    async async_get_charge_history(...__args) {
        let data;
        let { "vin": vin, "aggregator": aggregator } = _runtime_1.py.bind(__args, ["vin", "aggregator"], {}, [], null, null);
        /** Return charging sessions and summaries for a requested aggregation. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleChargeHistory", _runtime_1.py.attr(operations, "VEHICLE_CHARGE_HISTORY"), Object.assign({}, { ["vin"]: vin }, { ["aggregator"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [aggregator], null) })], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_charge_history, [data], null);
    }
    /** Return Nissan Energy account, PnC, toggle, and NACS status. */
    async async_get_energy_account_status(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return Nissan Energy account, PnC, toggle, and NACS status. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["AccountStatus", _runtime_1.py.attr(operations, "ACCOUNT_STATUS"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(energy_account_parsing_1.parse_account_status, [data], null);
    }
    /** Return the EMP charge-plan product offered for the vehicle. */
    async async_get_charge_product(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the EMP charge-plan product offered for the vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ChargeProduct", _runtime_1.py.attr(operations, "CHARGE_PRODUCT"), _runtime_1.py.call(charge_plan_inputs_1.charge_product_variables, [vin], null)], null));
        return _runtime_1.py.call(charge_plan_parsing_1.parse_charge_product, [data], null);
    }
    /** Return EMP parking and connector tariffs for a charging location. */
    async async_get_charge_plan_pricing_details(...__args) {
        let data;
        let { "vin": vin, "location_id": location_id } = _runtime_1.py.bind(__args, ["vin", "location_id"], {}, [], null, null);
        /** Return EMP parking and connector tariffs for a charging location. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["PricingDetails", _runtime_1.py.attr(operations, "PRICING_DETAILS"), _runtime_1.py.call(charge_plan_inputs_1.pricing_details_variables, [vin, location_id], null)], null));
        return _runtime_1.py.call(charge_plan_parsing_1.parse_pricing_details, [data], null);
    }
    /** Return trip summaries and individual trips for an electric vehicle. */
    async async_get_driving_history(...__args) {
        let data;
        let { "vin": vin, "aggregator": aggregator, "distance_unit": distance_unit, "weight_unit": weight_unit, "speed_unit": speed_unit } = _runtime_1.py.bind(__args, ["vin", "aggregator"], { "distance_unit": graphql_input_1.UNSET, "weight_unit": graphql_input_1.UNSET, "speed_unit": graphql_input_1.UNSET }, ["distance_unit", "weight_unit", "speed_unit"], null, null);
        /** Return trip summaries and individual trips for an electric vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DrivingHistory", _runtime_1.py.attr(operations, "DRIVING_HISTORY"), _runtime_1.py.call(extended_vehicle_inputs_1.driving_history_variables, [vin, aggregator], Object.assign({}, { "distance_unit": distance_unit }, { "weight_unit": weight_unit }, { "speed_unit": speed_unit }))], null));
        return _runtime_1.py.call(extended_vehicle_parsing_1.parse_driving_history, [data], null);
    }
    /** Return charging stations near a coordinate for the vehicle. */
    async async_get_ev_charge_stations(...__args) {
        let data;
        let { "vin": vin, "coordinate": coordinate, "plug_connector_types": plug_connector_types, "enable_within_range_restriction": enable_within_range_restriction } = _runtime_1.py.bind(__args, ["vin", "coordinate"], { "plug_connector_types": graphql_input_1.UNSET, "enable_within_range_restriction": graphql_input_1.UNSET }, ["plug_connector_types", "enable_within_range_restriction"], null, null);
        /** Return charging stations near a coordinate for the vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["EVChargeStations", _runtime_1.py.attr(operations, "EV_CHARGE_STATIONS"), _runtime_1.py.call(extended_vehicle_inputs_1.ev_charge_stations_variables, [vin, coordinate], Object.assign({}, { "plug_connector_types": plug_connector_types }, { "enable_within_range_restriction": enable_within_range_restriction }))], null));
        return _runtime_1.py.call(extended_vehicle_parsing_1.parse_ev_charge_stations, [data], null);
    }
    /** Return the Nissan Energy eligibility response for the vehicle. */
    async async_get_e_vehicle_eligibility(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the Nissan Energy eligibility response for the vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["eVehicleEligibility", _runtime_1.py.attr(operations, "E_VEHICLE_ELIGIBILITY"), _runtime_1.py.call(extended_vehicle_inputs_1.e_vehicle_eligibility_variables, [vin], null)], null));
        return _runtime_1.py.call(extended_vehicle_parsing_1.parse_e_vehicle_eligibility, [data], null);
    }
    /** Return the last known camera usage counter and update time. */
    async async_get_last_known_camera_usage_counter(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the last known camera usage counter and update time. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["LastKnownCameraUsageCounter", _runtime_1.py.attr(operations, "LAST_KNOWN_CAMERA_USAGE_COUNTER"), _runtime_1.py.call(extended_vehicle_inputs_1.last_known_camera_usage_counter_variables, [vin], null)], null));
        return _runtime_1.py.call(extended_vehicle_parsing_1.parse_last_known_camera_usage_counter, [data], null);
    }
    /** Return Nissan Energy charging-location details for a search area. */
    async async_get_location_details(...__args) {
        let data;
        let { "vin": vin, "latitude": latitude, "longitude": longitude, "in_network_only": in_network_only, "range_value": range_value, "operator_names": operator_names, "evse": evse, "plug_types": plug_types, "charge_level": charge_level, "pnc_stations_only": pnc_stations_only } = _runtime_1.py.bind(__args, ["vin", "latitude", "longitude", "in_network_only", "range_value"], { "operator_names": graphql_input_1.UNSET, "evse": graphql_input_1.UNSET, "plug_types": graphql_input_1.UNSET, "charge_level": graphql_input_1.UNSET, "pnc_stations_only": graphql_input_1.UNSET }, ["operator_names", "evse", "plug_types", "charge_level", "pnc_stations_only"], null, null);
        /** Return Nissan Energy charging-location details for a search area. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["LocationDetails", _runtime_1.py.attr(operations, "LOCATION_DETAILS"), _runtime_1.py.call(extended_vehicle_inputs_1.location_details_variables, [vin, latitude, longitude, in_network_only, range_value], Object.assign({}, { "operator_names": operator_names }, { "evse": evse }, { "plug_types": plug_types }, { "charge_level": charge_level }, { "pnc_stations_only": pnc_stations_only }))], null));
        return _runtime_1.py.call(extended_vehicle_parsing_1.parse_location_details, [data], null);
    }
    /** Return whether parking fees can be charged for an EVSE. */
    async async_get_parking_chargeable(...__args) {
        let data;
        let { "evse_id": evse_id } = _runtime_1.py.bind(__args, ["evse_id"], {}, [], null, null);
        /** Return whether parking fees can be charged for an EVSE. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ParkingChargeable", _runtime_1.py.attr(operations, "PARKING_CHARGEABLE"), _runtime_1.py.call(extended_vehicle_inputs_1.parking_chargeable_variables, [evse_id], null)], null));
        return _runtime_1.py.call(extended_vehicle_parsing_1.parse_parking_chargeable, [data], null);
    }
    /** Return capabilities that can be shared with another driver. */
    async async_get_shareable_capabilities(...__args) {
        let data;
        let { "vin": vin, "driver_id": driver_id } = _runtime_1.py.bind(__args, ["vin"], { "driver_id": graphql_input_1.UNSET }, ["driver_id"], null, null);
        /** Return capabilities that can be shared with another driver. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ShareableCapabilities", _runtime_1.py.attr(operations, "SHAREABLE_CAPABILITIES"), _runtime_1.py.call(extended_vehicle_inputs_1.shareable_capabilities_variables, [vin], Object.assign({}, { "driver_id": driver_id }))], null));
        return _runtime_1.py.call(extended_vehicle_parsing_1.parse_shareable_capabilities, [data], null);
    }
    /** Return Nissan Energy tariff pricing for one charging location. */
    async async_get_tariff_pricing(...__args) {
        let data;
        let { "vin": vin, "location_id": location_id } = _runtime_1.py.bind(__args, ["vin", "location_id"], {}, [], null, null);
        /** Return Nissan Energy tariff pricing for one charging location. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["TariffPricing", _runtime_1.py.attr(operations, "TARIFF_PRICING"), _runtime_1.py.call(extended_vehicle_inputs_1.tariff_pricing_variables, [vin, location_id], null)], null));
        return _runtime_1.py.call(extended_vehicle_parsing_1.parse_tariff_pricing, [data], null);
    }
    /** Return the vehicle's Nissan Energy Plug & Charge enrollment state. */
    async async_get_pnc_service_status(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the vehicle's Nissan Energy Plug & Charge enrollment state. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["PNCServiceStatus", _runtime_1.py.attr(operations, "PNC_SERVICE_STATUS"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(pnc_parsing_1.parse_pnc_service_status, [data], null);
    }
    /** Return raw V1G Charging Insights enrollment and notification state. */
    async async_get_v1g_monitored_charging_account_status(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return raw V1G Charging Insights enrollment and notification state. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["V1GMonitoredChargingAccountStatus", _runtime_1.py.attr(operations, "V1G_MONITORED_CHARGING_ACCOUNT_STATUS"), _runtime_1.py.call(v1g_inputs_1.v1g_monitored_charging_account_status_variables, [vin], null)], null));
        return _runtime_1.py.call(v1g_parsing_1.parse_v1g_monitored_charging_account_status, [data], null);
    }
    /** Return the sensitive, potentially ephemeral V1G web-view URL. */
    async async_get_v1g_tokenized_url(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the sensitive, potentially ephemeral V1G web-view URL. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["V1GTokenizedUrl", _runtime_1.py.attr(operations, "V1G_TOKENIZED_URL"), _runtime_1.py.call(v1g_inputs_1.v1g_tokenized_url_variables, [vin], null)], null));
        return _runtime_1.py.call(v1g_parsing_1.parse_v1g_tokenized_url, [data], null);
    }
    /** Return the current Nissan Energy public charging-session state. */
    async async_get_public_charge_session_status(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the current Nissan Energy public charging-session state. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ChargeSessionStatus", _runtime_1.py.attr(operations, "CHARGE_SESSION_STATUS"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(pnc_parsing_1.parse_charge_session_status, [data], null);
    }
    /** Return the preferred dealer currently associated with the vehicle. */
    async async_get_vehicle_preferred_dealer(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the preferred dealer currently associated with the vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehiclePreferredDealer", _runtime_1.py.attr(operations, "VEHICLE_PREFERRED_DEALER"), _runtime_1.py.call(service_inputs_1.vehicle_preferred_dealer_variables, [vin], null)], null));
        return _runtime_1.py.call(service_parsing_1.parse_vehicle_preferred_dealer, [data], null);
    }
    /** Return the vehicle's non-null recall and service-campaign list. */
    async async_get_vehicle_recalls(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the vehicle's non-null recall and service-campaign list. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleRecalls", _runtime_1.py.attr(operations, "VEHICLE_RECALLS"), _runtime_1.py.call(service_inputs_1.vehicle_recalls_variables, [vin], null)], null));
        return _runtime_1.py.call(service_parsing_1.parse_vehicle_recalls, [data], null);
    }
    /** Return roadside and towing coverage limits reported by Nissan. */
    async async_get_vehicle_roadside_assistance(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return roadside and towing coverage limits reported by Nissan. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleRoadsideAssistance", _runtime_1.py.attr(operations, "VEHICLE_ROADSIDE_ASSISTANCE"), _runtime_1.py.call(service_inputs_1.vehicle_roadside_assistance_variables, [vin], null)], null));
        return _runtime_1.py.call(service_parsing_1.parse_vehicle_roadside_assistance, [data], null);
    }
    /** Return completed service records in the requested distance unit. */
    async async_get_vehicle_service_history(...__args) {
        let data;
        let { "vin": vin, "unit": unit } = _runtime_1.py.bind(__args, ["vin"], { "unit": graphql_input_1.UNSET }, ["unit"], null, null);
        /** Return completed service records in the requested distance unit. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleServiceHistory", _runtime_1.py.attr(operations, "VEHICLE_SERVICE_HISTORY"), _runtime_1.py.call(service_inputs_1.vehicle_service_history_variables, [vin], Object.assign({}, { "unit": unit }))], null));
        return _runtime_1.py.call(service_parsing_1.parse_vehicle_service_history, [data], null);
    }
    /** Return the vehicle warranty at an optional caller-supplied mileage. */
    async async_get_warranty_info(...__args) {
        let data;
        let { "vin": vin, "mileage": mileage } = _runtime_1.py.bind(__args, ["vin"], { "mileage": graphql_input_1.UNSET }, ["mileage"], null, null);
        /** Return the vehicle warranty at an optional caller-supplied mileage. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["WarrantyInfo", _runtime_1.py.attr(operations, "WARRANTY_INFO"), _runtime_1.py.call(service_inputs_1.warranty_info_variables, [vin], Object.assign({}, { "mileage": mileage }))], null));
        return _runtime_1.py.call(service_parsing_1.parse_warranty_info, [data], null);
    }
}
exports._EnergyClientMixin = _EnergyClientMixin;
_runtime_1.py.classType(_EnergyClientMixin);
//# sourceMappingURL=_energy_client.js.map