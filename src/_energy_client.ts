// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { charge_product_variables, pricing_details_variables } from "./charge_plan_inputs";
export { charge_product_variables, pricing_details_variables };

import { ChargePlanPricingDetails, ChargeProductResult } from "./charge_plan_models";
export { ChargePlanPricingDetails, ChargeProductResult };

import { parse_charge_product, parse_pricing_details } from "./charge_plan_parsing";
export { parse_charge_product, parse_pricing_details };

import { CoordinateInput } from "./common_inputs";
export { CoordinateInput };

import { EnergyAccountStatusResult } from "./energy_account_models";
export { EnergyAccountStatusResult };

import { parse_account_status } from "./energy_account_parsing";
export { parse_account_status };

import { EmpConnectorLevelInput, EmpEvseStatusInput, driving_history_variables, e_vehicle_eligibility_variables, ev_charge_stations_variables, last_known_camera_usage_counter_variables, location_details_variables, parking_chargeable_variables, shareable_capabilities_variables, tariff_pricing_variables } from "./extended_vehicle_inputs";
export { EmpConnectorLevelInput, EmpEvseStatusInput, driving_history_variables, e_vehicle_eligibility_variables, ev_charge_stations_variables, last_known_camera_usage_counter_variables, location_details_variables, parking_chargeable_variables, shareable_capabilities_variables, tariff_pricing_variables };

import { DrivingHistory, DrivingHistoryAggregator, EVChargeStation, EVehicleEligibility, LastKnownCameraUsageCounter, LocationDetails, ParkingChargeable, ShareableCapabilities, TariffPricing, WeightUnit } from "./extended_vehicle_models";
export { DrivingHistory, DrivingHistoryAggregator, EVChargeStation, EVehicleEligibility, LastKnownCameraUsageCounter, LocationDetails, ParkingChargeable, ShareableCapabilities, TariffPricing, WeightUnit };

import { parse_driving_history, parse_e_vehicle_eligibility, parse_ev_charge_stations, parse_last_known_camera_usage_counter, parse_location_details, parse_parking_chargeable, parse_shareable_capabilities, parse_tariff_pricing } from "./extended_vehicle_parsing";
export { parse_driving_history, parse_e_vehicle_eligibility, parse_ev_charge_stations, parse_last_known_camera_usage_counter, parse_location_details, parse_parking_chargeable, parse_shareable_capabilities, parse_tariff_pricing };

import { UNSET, UnsetType, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, serialize_enum };

import { ChargeConfig, ChargeHistoryAggregator, ChargeSchedule, DistanceUnit, SpeedUnit, TemperatureUnit, V2LStatus, VehicleCapabilities, VehicleChargeHistory } from "./models";
export { ChargeConfig, ChargeHistoryAggregator, ChargeSchedule, DistanceUnit, SpeedUnit, TemperatureUnit, V2LStatus, VehicleCapabilities, VehicleChargeHistory };

import { PlugConnectorType } from "./navigation_inputs";
export { PlugConnectorType };

import { parse_charge_config, parse_charge_schedules, parse_v2l_status, parse_vehicle_capabilities, parse_vehicle_charge_history } from "./parsing";
export { parse_charge_config, parse_charge_schedules, parse_v2l_status, parse_vehicle_capabilities, parse_vehicle_charge_history };

import { PlugAndChargeServiceStatus, PublicChargeSessionStatus } from "./pnc_models";
export { PlugAndChargeServiceStatus, PublicChargeSessionStatus };

import { parse_charge_session_status, parse_pnc_service_status } from "./pnc_parsing";
export { parse_charge_session_status, parse_pnc_service_status };

import { vehicle_preferred_dealer_variables, vehicle_recalls_variables, vehicle_roadside_assistance_variables, vehicle_service_history_variables, warranty_info_variables } from "./service_inputs";
export { vehicle_preferred_dealer_variables, vehicle_recalls_variables, vehicle_roadside_assistance_variables, vehicle_service_history_variables, warranty_info_variables };

import { VehiclePreferredDealer, VehicleRecall, VehicleRoadsideAssistance, VehicleServiceHistoryEntry, VehicleWarranty } from "./service_models";
export { VehiclePreferredDealer, VehicleRecall, VehicleRoadsideAssistance, VehicleServiceHistoryEntry, VehicleWarranty };

import { parse_vehicle_preferred_dealer, parse_vehicle_recalls, parse_vehicle_roadside_assistance, parse_vehicle_service_history, parse_warranty_info } from "./service_parsing";
export { parse_vehicle_preferred_dealer, parse_vehicle_recalls, parse_vehicle_roadside_assistance, parse_vehicle_service_history, parse_warranty_info };

import { v1g_monitored_charging_account_status_variables, v1g_tokenized_url_variables } from "./v1g_inputs";
export { v1g_monitored_charging_account_status_variables, v1g_tokenized_url_variables };

import { V1GMonitoredChargingAccountStatusResult, V1GTokenizedUrlResult } from "./v1g_models";
export { V1GMonitoredChargingAccountStatusResult, V1GTokenizedUrlResult };

import { parse_v1g_monitored_charging_account_status, parse_v1g_tokenized_url } from "./v1g_parsing";
export { parse_v1g_monitored_charging_account_status, parse_v1g_tokenized_url };

/** Translated upstream _EnergyClientMixin. */
export class _EnergyClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _EnergyClientMixin, __args); }
async_get_vehicle_capabilities(vin: string, temperature_unit?: TemperatureUnit): Promise<VehicleCapabilities>;
/** Return the connected services advertised for a vehicle. */
async async_get_vehicle_capabilities(...__args: any[]): any {
let data;
let {"vin": vin, "temperature_unit": temperature_unit} = $.bind(__args, ["vin", "temperature_unit"], {"temperature_unit": $.attr(TemperatureUnit, "FAHRENHEIT")}, [], null, null);
/** Return the connected services advertised for a vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleCapabilities", $.attr(operations, "VEHICLE_CAPABILITIES"), Object.assign({}, {["vin"]: vin}, {["unit"]: $.call(serialize_enum, [temperature_unit], null)})], null));
return $.call(parse_vehicle_capabilities, [data, vin], null);
}
async_get_charge_schedules(vin: string): Promise<ReadonlyArray<ChargeSchedule>>;
/** Return the vehicle's recurring charge schedules. */
async async_get_charge_schedules(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the vehicle's recurring charge schedules. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleChargeSchedules", $.attr(operations, "VEHICLE_CHARGE_SCHEDULES"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_charge_schedules, [data], null);
}
async_get_charge_config(vin: string): Promise<ChargeConfig | null>;
/** Return configured charging limits when supported by the vehicle. */
async async_get_charge_config(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return configured charging limits when supported by the vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ChargeConfig", $.attr(operations, "CHARGE_CONFIG"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_charge_config, [data], null);
}
async_get_v2l_status(vin: string): Promise<V2LStatus | null>;
/** Return V2L state and battery reserve levels when supported. */
async async_get_v2l_status(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return V2L state and battery reserve levels when supported. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["V2lStatus", $.attr(operations, "V2L_STATUS"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_v2l_status, [data], null);
}
async_get_charge_history(vin: string, aggregator: ChargeHistoryAggregator): Promise<VehicleChargeHistory | null>;
/** Return charging sessions and summaries for a requested aggregation. */
async async_get_charge_history(...__args: any[]): any {
let data;
let {"vin": vin, "aggregator": aggregator} = $.bind(__args, ["vin", "aggregator"], {}, [], null, null);
/** Return charging sessions and summaries for a requested aggregation. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleChargeHistory", $.attr(operations, "VEHICLE_CHARGE_HISTORY"), Object.assign({}, {["vin"]: vin}, {["aggregator"]: $.call(serialize_enum, [aggregator], null)})], null));
return $.call(parse_vehicle_charge_history, [data], null);
}
async_get_energy_account_status(vin: string): Promise<EnergyAccountStatusResult | null>;
/** Return Nissan Energy account, PnC, toggle, and NACS status. */
async async_get_energy_account_status(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return Nissan Energy account, PnC, toggle, and NACS status. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["AccountStatus", $.attr(operations, "ACCOUNT_STATUS"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_account_status, [data], null);
}
async_get_charge_product(vin: string): Promise<ChargeProductResult | null>;
/** Return the EMP charge-plan product offered for the vehicle. */
async async_get_charge_product(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the EMP charge-plan product offered for the vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ChargeProduct", $.attr(operations, "CHARGE_PRODUCT"), $.call(charge_product_variables, [vin], null)], null));
return $.call(parse_charge_product, [data], null);
}
async_get_charge_plan_pricing_details(vin: string, location_id: string): Promise<ChargePlanPricingDetails | null>;
/** Return EMP parking and connector tariffs for a charging location. */
async async_get_charge_plan_pricing_details(...__args: any[]): any {
let data;
let {"vin": vin, "location_id": location_id} = $.bind(__args, ["vin", "location_id"], {}, [], null, null);
/** Return EMP parking and connector tariffs for a charging location. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["PricingDetails", $.attr(operations, "PRICING_DETAILS"), $.call(pricing_details_variables, [vin, location_id], null)], null));
return $.call(parse_pricing_details, [data], null);
}
async_get_driving_history(vin: string, aggregator: DrivingHistoryAggregator, options?: { distance_unit?: DistanceUnit | UnsetType | null; weight_unit?: WeightUnit | UnsetType | null; speed_unit?: SpeedUnit | UnsetType | null }): Promise<DrivingHistory | null>;
/** Return trip summaries and individual trips for an electric vehicle. */
async async_get_driving_history(...__args: any[]): any {
let data;
let {"vin": vin, "aggregator": aggregator, "distance_unit": distance_unit, "weight_unit": weight_unit, "speed_unit": speed_unit} = $.bind(__args, ["vin", "aggregator"], {"distance_unit": UNSET, "weight_unit": UNSET, "speed_unit": UNSET}, ["distance_unit", "weight_unit", "speed_unit"], null, null);
/** Return trip summaries and individual trips for an electric vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DrivingHistory", $.attr(operations, "DRIVING_HISTORY"), $.call(driving_history_variables, [vin, aggregator], Object.assign({}, {"distance_unit": distance_unit}, {"weight_unit": weight_unit}, {"speed_unit": speed_unit}))], null));
return $.call(parse_driving_history, [data], null);
}
async_get_ev_charge_stations(vin: string, coordinate: CoordinateInput, options?: { plug_connector_types?: ReadonlyArray<PlugConnectorType | null> | UnsetType | null; enable_within_range_restriction?: boolean | UnsetType | null }): Promise<ReadonlyArray<EVChargeStation | null> | null>;
/** Return charging stations near a coordinate for the vehicle. */
async async_get_ev_charge_stations(...__args: any[]): any {
let data;
let {"vin": vin, "coordinate": coordinate, "plug_connector_types": plug_connector_types, "enable_within_range_restriction": enable_within_range_restriction} = $.bind(__args, ["vin", "coordinate"], {"plug_connector_types": UNSET, "enable_within_range_restriction": UNSET}, ["plug_connector_types", "enable_within_range_restriction"], null, null);
/** Return charging stations near a coordinate for the vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["EVChargeStations", $.attr(operations, "EV_CHARGE_STATIONS"), $.call(ev_charge_stations_variables, [vin, coordinate], Object.assign({}, {"plug_connector_types": plug_connector_types}, {"enable_within_range_restriction": enable_within_range_restriction}))], null));
return $.call(parse_ev_charge_stations, [data], null);
}
async_get_e_vehicle_eligibility(vin: string): Promise<EVehicleEligibility | null>;
/** Return the Nissan Energy eligibility response for the vehicle. */
async async_get_e_vehicle_eligibility(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the Nissan Energy eligibility response for the vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["eVehicleEligibility", $.attr(operations, "E_VEHICLE_ELIGIBILITY"), $.call(e_vehicle_eligibility_variables, [vin], null)], null));
return $.call(parse_e_vehicle_eligibility, [data], null);
}
async_get_last_known_camera_usage_counter(vin: string): Promise<LastKnownCameraUsageCounter | null>;
/** Return the last known camera usage counter and update time. */
async async_get_last_known_camera_usage_counter(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the last known camera usage counter and update time. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["LastKnownCameraUsageCounter", $.attr(operations, "LAST_KNOWN_CAMERA_USAGE_COUNTER"), $.call(last_known_camera_usage_counter_variables, [vin], null)], null));
return $.call(parse_last_known_camera_usage_counter, [data], null);
}
async_get_location_details(vin: string, latitude: string, longitude: string, in_network_only: boolean, range_value: number, options?: { operator_names?: ReadonlyArray<string | null> | UnsetType | null; evse?: EmpEvseStatusInput | UnsetType | null; plug_types?: ReadonlyArray<string | null> | UnsetType | null; charge_level?: EmpConnectorLevelInput | UnsetType | null; pnc_stations_only?: boolean | UnsetType | null }): Promise<LocationDetails | null>;
/** Return Nissan Energy charging-location details for a search area. */
async async_get_location_details(...__args: any[]): any {
let data;
let {"vin": vin, "latitude": latitude, "longitude": longitude, "in_network_only": in_network_only, "range_value": range_value, "operator_names": operator_names, "evse": evse, "plug_types": plug_types, "charge_level": charge_level, "pnc_stations_only": pnc_stations_only} = $.bind(__args, ["vin", "latitude", "longitude", "in_network_only", "range_value"], {"operator_names": UNSET, "evse": UNSET, "plug_types": UNSET, "charge_level": UNSET, "pnc_stations_only": UNSET}, ["operator_names", "evse", "plug_types", "charge_level", "pnc_stations_only"], null, null);
/** Return Nissan Energy charging-location details for a search area. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["LocationDetails", $.attr(operations, "LOCATION_DETAILS"), $.call(location_details_variables, [vin, latitude, longitude, in_network_only, range_value], Object.assign({}, {"operator_names": operator_names}, {"evse": evse}, {"plug_types": plug_types}, {"charge_level": charge_level}, {"pnc_stations_only": pnc_stations_only}))], null));
return $.call(parse_location_details, [data], null);
}
async_get_parking_chargeable(evse_id: string): Promise<ParkingChargeable | null>;
/** Return whether parking fees can be charged for an EVSE. */
async async_get_parking_chargeable(...__args: any[]): any {
let data;
let {"evse_id": evse_id} = $.bind(__args, ["evse_id"], {}, [], null, null);
/** Return whether parking fees can be charged for an EVSE. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ParkingChargeable", $.attr(operations, "PARKING_CHARGEABLE"), $.call(parking_chargeable_variables, [evse_id], null)], null));
return $.call(parse_parking_chargeable, [data], null);
}
async_get_shareable_capabilities(vin: string, options?: { driver_id?: string | UnsetType | null }): Promise<ShareableCapabilities | null>;
/** Return capabilities that can be shared with another driver. */
async async_get_shareable_capabilities(...__args: any[]): any {
let data;
let {"vin": vin, "driver_id": driver_id} = $.bind(__args, ["vin"], {"driver_id": UNSET}, ["driver_id"], null, null);
/** Return capabilities that can be shared with another driver. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ShareableCapabilities", $.attr(operations, "SHAREABLE_CAPABILITIES"), $.call(shareable_capabilities_variables, [vin], Object.assign({}, {"driver_id": driver_id}))], null));
return $.call(parse_shareable_capabilities, [data], null);
}
async_get_tariff_pricing(vin: string, location_id: string): Promise<TariffPricing | null>;
/** Return Nissan Energy tariff pricing for one charging location. */
async async_get_tariff_pricing(...__args: any[]): any {
let data;
let {"vin": vin, "location_id": location_id} = $.bind(__args, ["vin", "location_id"], {}, [], null, null);
/** Return Nissan Energy tariff pricing for one charging location. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["TariffPricing", $.attr(operations, "TARIFF_PRICING"), $.call(tariff_pricing_variables, [vin, location_id], null)], null));
return $.call(parse_tariff_pricing, [data], null);
}
async_get_pnc_service_status(vin: string): Promise<PlugAndChargeServiceStatus | null>;
/** Return the vehicle's Nissan Energy Plug & Charge enrollment state. */
async async_get_pnc_service_status(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the vehicle's Nissan Energy Plug & Charge enrollment state. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["PNCServiceStatus", $.attr(operations, "PNC_SERVICE_STATUS"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_pnc_service_status, [data], null);
}
async_get_v1g_monitored_charging_account_status(vin: string): Promise<V1GMonitoredChargingAccountStatusResult | null>;
/** Return raw V1G Charging Insights enrollment and notification state. */
async async_get_v1g_monitored_charging_account_status(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return raw V1G Charging Insights enrollment and notification state. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["V1GMonitoredChargingAccountStatus", $.attr(operations, "V1G_MONITORED_CHARGING_ACCOUNT_STATUS"), $.call(v1g_monitored_charging_account_status_variables, [vin], null)], null));
return $.call(parse_v1g_monitored_charging_account_status, [data], null);
}
async_get_v1g_tokenized_url(vin: string): Promise<V1GTokenizedUrlResult | null>;
/** Return the sensitive, potentially ephemeral V1G web-view URL. */
async async_get_v1g_tokenized_url(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the sensitive, potentially ephemeral V1G web-view URL. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["V1GTokenizedUrl", $.attr(operations, "V1G_TOKENIZED_URL"), $.call(v1g_tokenized_url_variables, [vin], null)], null));
return $.call(parse_v1g_tokenized_url, [data], null);
}
async_get_public_charge_session_status(vin: string): Promise<PublicChargeSessionStatus | null>;
/** Return the current Nissan Energy public charging-session state. */
async async_get_public_charge_session_status(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the current Nissan Energy public charging-session state. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ChargeSessionStatus", $.attr(operations, "CHARGE_SESSION_STATUS"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_charge_session_status, [data], null);
}
async_get_vehicle_preferred_dealer(vin: string): Promise<VehiclePreferredDealer | null>;
/** Return the preferred dealer currently associated with the vehicle. */
async async_get_vehicle_preferred_dealer(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the preferred dealer currently associated with the vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehiclePreferredDealer", $.attr(operations, "VEHICLE_PREFERRED_DEALER"), $.call(vehicle_preferred_dealer_variables, [vin], null)], null));
return $.call(parse_vehicle_preferred_dealer, [data], null);
}
async_get_vehicle_recalls(vin: string): Promise<ReadonlyArray<VehicleRecall> | null>;
/** Return the vehicle's non-null recall and service-campaign list. */
async async_get_vehicle_recalls(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the vehicle's non-null recall and service-campaign list. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleRecalls", $.attr(operations, "VEHICLE_RECALLS"), $.call(vehicle_recalls_variables, [vin], null)], null));
return $.call(parse_vehicle_recalls, [data], null);
}
async_get_vehicle_roadside_assistance(vin: string): Promise<VehicleRoadsideAssistance | null>;
/** Return roadside and towing coverage limits reported by Nissan. */
async async_get_vehicle_roadside_assistance(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return roadside and towing coverage limits reported by Nissan. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleRoadsideAssistance", $.attr(operations, "VEHICLE_ROADSIDE_ASSISTANCE"), $.call(vehicle_roadside_assistance_variables, [vin], null)], null));
return $.call(parse_vehicle_roadside_assistance, [data], null);
}
async_get_vehicle_service_history(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Promise<ReadonlyArray<VehicleServiceHistoryEntry> | null>;
/** Return completed service records in the requested distance unit. */
async async_get_vehicle_service_history(...__args: any[]): any {
let data;
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Return completed service records in the requested distance unit. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleServiceHistory", $.attr(operations, "VEHICLE_SERVICE_HISTORY"), $.call(vehicle_service_history_variables, [vin], Object.assign({}, {"unit": unit}))], null));
return $.call(parse_vehicle_service_history, [data], null);
}
async_get_warranty_info(vin: string, options?: { mileage?: number | UnsetType | null }): Promise<VehicleWarranty | null>;
/** Return the vehicle warranty at an optional caller-supplied mileage. */
async async_get_warranty_info(...__args: any[]): any {
let data;
let {"vin": vin, "mileage": mileage} = $.bind(__args, ["vin"], {"mileage": UNSET}, ["mileage"], null, null);
/** Return the vehicle warranty at an optional caller-supplied mileage. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["WarrantyInfo", $.attr(operations, "WARRANTY_INFO"), $.call(warranty_info_variables, [vin], Object.assign({}, {"mileage": mileage}))], null));
return $.call(parse_warranty_info, [data], null);
}
}
$.classType(_EnergyClientMixin);
export interface _EnergyClientMixin extends _NissanClientBase {}
