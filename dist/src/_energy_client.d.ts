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
declare const _EnergyClientMixin_base: any;
/** Translated upstream _EnergyClientMixin. */
export declare class _EnergyClientMixin extends _EnergyClientMixin_base {
    constructor(...__args: any[]);
    async_get_vehicle_capabilities(vin: string, temperature_unit?: TemperatureUnit): Promise<VehicleCapabilities>;
    async_get_charge_schedules(vin: string): Promise<ReadonlyArray<ChargeSchedule>>;
    async_get_charge_config(vin: string): Promise<ChargeConfig | null>;
    async_get_v2l_status(vin: string): Promise<V2LStatus | null>;
    async_get_charge_history(vin: string, aggregator: ChargeHistoryAggregator): Promise<VehicleChargeHistory | null>;
    async_get_energy_account_status(vin: string): Promise<EnergyAccountStatusResult | null>;
    async_get_charge_product(vin: string): Promise<ChargeProductResult | null>;
    async_get_charge_plan_pricing_details(vin: string, location_id: string): Promise<ChargePlanPricingDetails | null>;
    async_get_driving_history(vin: string, aggregator: DrivingHistoryAggregator, options?: {
        distance_unit?: DistanceUnit | UnsetType | null;
        weight_unit?: WeightUnit | UnsetType | null;
        speed_unit?: SpeedUnit | UnsetType | null;
    }): Promise<DrivingHistory | null>;
    async_get_ev_charge_stations(vin: string, coordinate: CoordinateInput, options?: {
        plug_connector_types?: ReadonlyArray<PlugConnectorType | null> | UnsetType | null;
        enable_within_range_restriction?: boolean | UnsetType | null;
    }): Promise<ReadonlyArray<EVChargeStation | null> | null>;
    async_get_e_vehicle_eligibility(vin: string): Promise<EVehicleEligibility | null>;
    async_get_last_known_camera_usage_counter(vin: string): Promise<LastKnownCameraUsageCounter | null>;
    async_get_location_details(vin: string, latitude: string, longitude: string, in_network_only: boolean, range_value: number, options?: {
        operator_names?: ReadonlyArray<string | null> | UnsetType | null;
        evse?: EmpEvseStatusInput | UnsetType | null;
        plug_types?: ReadonlyArray<string | null> | UnsetType | null;
        charge_level?: EmpConnectorLevelInput | UnsetType | null;
        pnc_stations_only?: boolean | UnsetType | null;
    }): Promise<LocationDetails | null>;
    async_get_parking_chargeable(evse_id: string): Promise<ParkingChargeable | null>;
    async_get_shareable_capabilities(vin: string, options?: {
        driver_id?: string | UnsetType | null;
    }): Promise<ShareableCapabilities | null>;
    async_get_tariff_pricing(vin: string, location_id: string): Promise<TariffPricing | null>;
    async_get_pnc_service_status(vin: string): Promise<PlugAndChargeServiceStatus | null>;
    async_get_v1g_monitored_charging_account_status(vin: string): Promise<V1GMonitoredChargingAccountStatusResult | null>;
    async_get_v1g_tokenized_url(vin: string): Promise<V1GTokenizedUrlResult | null>;
    async_get_public_charge_session_status(vin: string): Promise<PublicChargeSessionStatus | null>;
    async_get_vehicle_preferred_dealer(vin: string): Promise<VehiclePreferredDealer | null>;
    async_get_vehicle_recalls(vin: string): Promise<ReadonlyArray<VehicleRecall> | null>;
    async_get_vehicle_roadside_assistance(vin: string): Promise<VehicleRoadsideAssistance | null>;
    async_get_vehicle_service_history(vin: string, options?: {
        unit?: DistanceUnit | UnsetType | null;
    }): Promise<ReadonlyArray<VehicleServiceHistoryEntry> | null>;
    async_get_warranty_info(vin: string, options?: {
        mileage?: number | UnsetType | null;
    }): Promise<VehicleWarranty | null>;
}
export interface _EnergyClientMixin extends _NissanClientBase {
}
