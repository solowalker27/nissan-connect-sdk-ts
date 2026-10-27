import { py as $ } from "./_runtime";
import { DistanceUnit, SpeedUnit } from "./models";
export { DistanceUnit, SpeedUnit };
import { PlugConnectorType } from "./navigation_inputs";
export { PlugConnectorType };
export declare const DrivingHistoryAggregator: $.EnumType<{
    readonly DAILY: "DAILY";
    readonly MONTHLY: "MONTHLY";
    readonly YEARLY: "YEARLY";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type DrivingHistoryAggregator = ReturnType<typeof DrivingHistoryAggregator>;
export declare const WeightUnit: $.EnumType<{
    readonly POUND: "POUND";
    readonly KILOGRAM: "KILOGRAM";
    readonly GRAM: "GRAM";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type WeightUnit = ReturnType<typeof WeightUnit>;
export declare const EmpLocationStatus: $.EnumType<{
    readonly ON_STREET: "ON_STREET";
    readonly PARKING_GARAGE: "PARKING_GARAGE";
    readonly UNDERGROUND_GARAGE: "UNDERGROUND_GARAGE";
    readonly PARKING_LOT: "PARKING_LOT";
    readonly OTHER: "OTHER";
    readonly UNKNOWN: "UNKNOWN";
    readonly ALONG_MOTORWAY: "ALONG_MOTORWAY";
    readonly ON_DRIVEWAY: "ON_DRIVEWAY";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EmpLocationStatus = ReturnType<typeof EmpLocationStatus>;
export declare const EmpEvseStatus: $.EnumType<{
    readonly AVAILABLE: "AVAILABLE";
    readonly BLOCKED: "BLOCKED";
    readonly CHARGING: "CHARGING";
    readonly INOPERATIVE: "INOPERATIVE";
    readonly OUT_OF_ORDER: "OUTOFORDER";
    readonly PLANNED: "PLANNED";
    readonly REMOVED: "REMOVED";
    readonly RESERVED: "RESERVED";
    readonly UNKNOWN: "UNKNOWN";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EmpEvseStatus = ReturnType<typeof EmpEvseStatus>;
/** Non-null distance fields nested in a driving-history response. */
export declare class DrivingHistoryDistance {
    readonly unit: DistanceUnit;
    readonly value: number;
    static __fields: (string | symbol)[][];
    constructor(unit: DistanceUnit, value: number);
    constructor(options: {
        unit: DistanceUnit;
        value: number;
    });
}
/** Nullable average-speed fields nested in driving history. */
export declare class DrivingHistoryAverageSpeed {
    readonly type: SpeedUnit | null;
    readonly value: number | null;
    static __fields: (string | symbol)[][];
    constructor(type: SpeedUnit | null, value: number | null);
    constructor(options: {
        type: SpeedUnit | null;
        value: number | null;
    });
}
/** Nullable CO2 saving fields nested in driving history. */
export declare class DrivingHistoryCo2Saved {
    readonly unit: WeightUnit | null;
    readonly value: number | null;
    static __fields: (string | symbol)[][];
    constructor(unit: WeightUnit | null, value: number | null);
    constructor(options: {
        unit: WeightUnit | null;
        value: number | null;
    });
}
/** Nullable start or end coordinates for a recorded trip. */
export declare class DrivingHistoryCoordinate {
    readonly latitude: number | null;
    readonly longitude: number | null;
    static __fields: (string | symbol)[][];
    constructor(latitude: number | null, longitude: number | null);
    constructor(options: {
        latitude: number | null;
        longitude: number | null;
    });
}
/** One nullable-field aggregate returned for a driving-history bucket. */
export declare class DrivingHistoryTripSummary {
    readonly user_id: string | null;
    readonly day: number | null;
    readonly month: number | null;
    readonly year: number | null;
    readonly number_of_trips: number | null;
    readonly distance_traveled: DrivingHistoryDistance | null;
    readonly duration: string | null;
    readonly average_speed: DrivingHistoryAverageSpeed | null;
    readonly energy_consumed: number | null;
    readonly co2_saved: DrivingHistoryCo2Saved | null;
    static __fields: (string | symbol)[][];
    constructor(user_id: string | null, day: number | null, month: number | null, year: number | null, number_of_trips: number | null, distance_traveled: DrivingHistoryDistance | null, duration: string | null, average_speed: DrivingHistoryAverageSpeed | null, energy_consumed: number | null, co2_saved: DrivingHistoryCo2Saved | null);
    constructor(options: {
        user_id: string | null;
        day: number | null;
        month: number | null;
        year: number | null;
        number_of_trips: number | null;
        distance_traveled: DrivingHistoryDistance | null;
        duration: string | null;
        average_speed: DrivingHistoryAverageSpeed | null;
        energy_consumed: number | null;
        co2_saved: DrivingHistoryCo2Saved | null;
    });
}
/** One individual trip returned by driving history. */
export declare class DrivingHistoryTrip {
    readonly distance: DrivingHistoryDistance | null;
    readonly start_date: $.DateValue | null;
    readonly end_date: $.DateValue | null;
    readonly duration: number | null;
    readonly start_location: DrivingHistoryCoordinate | null;
    readonly end_location: DrivingHistoryCoordinate | null;
    readonly average_speed: DrivingHistoryAverageSpeed | null;
    readonly energy_consumed: number | null;
    readonly energy_saved: number | null;
    readonly co2_saved: DrivingHistoryCo2Saved | null;
    readonly user_id: string | null;
    static __fields: (string | symbol)[][];
    constructor(distance: DrivingHistoryDistance | null, start_date: $.DateValue | null, end_date: $.DateValue | null, duration: number | null, start_location: DrivingHistoryCoordinate | null, end_location: DrivingHistoryCoordinate | null, average_speed: DrivingHistoryAverageSpeed | null, energy_consumed: number | null, energy_saved: number | null, co2_saved: DrivingHistoryCo2Saved | null, user_id: string | null);
    constructor(options: {
        distance: DrivingHistoryDistance | null;
        start_date: $.DateValue | null;
        end_date: $.DateValue | null;
        duration: number | null;
        start_location: DrivingHistoryCoordinate | null;
        end_location: DrivingHistoryCoordinate | null;
        average_speed: DrivingHistoryAverageSpeed | null;
        energy_consumed: number | null;
        energy_saved: number | null;
        co2_saved: DrivingHistoryCo2Saved | null;
        user_id: string | null;
    });
}
/** Non-null driving-history collections returned for an electric vehicle. */
export declare class DrivingHistory {
    readonly trip_summaries: ReadonlyArray<DrivingHistoryTripSummary>;
    readonly trips: ReadonlyArray<DrivingHistoryTrip>;
    static __fields: (string | symbol)[][];
    constructor(trip_summaries: ReadonlyArray<DrivingHistoryTripSummary>, trips: ReadonlyArray<DrivingHistoryTrip>);
    constructor(options: {
        trip_summaries: ReadonlyArray<DrivingHistoryTripSummary>;
        trips: ReadonlyArray<DrivingHistoryTrip>;
    });
}
/** Nullable address fields for a nearby charging station. */
export declare class EVChargeStationAddress {
    readonly address1: string | null;
    readonly address2: string | null;
    readonly city: string | null;
    readonly country: string | null;
    readonly postal_code: string | null;
    readonly state: string | null;
    static __fields: (string | symbol)[][];
    constructor(address1: string | null, address2: string | null, city: string | null, country: string | null, postal_code: string | null, state: string | null);
    constructor(options: {
        address1: string | null;
        address2: string | null;
        city: string | null;
        country: string | null;
        postal_code: string | null;
        state: string | null;
    });
}
/** Nullable coordinates for a nearby charging station. */
export declare class EVChargeStationCoordinate {
    readonly latitude: number | null;
    readonly longitude: number | null;
    static __fields: (string | symbol)[][];
    constructor(latitude: number | null, longitude: number | null);
    constructor(options: {
        latitude: number | null;
        longitude: number | null;
    });
}
/** Nullable connector details advertised by a charging station. */
export declare class EVChargeStationConnector {
    readonly plug_connector_type: PlugConnectorType | null;
    readonly rated_power_kw: number | null;
    readonly voltage_v: number | null;
    readonly current_a: number | null;
    readonly current_type: string | null;
    static __fields: (string | symbol)[][];
    constructor(plug_connector_type: PlugConnectorType | null, rated_power_kw: number | null, voltage_v: number | null, current_a: number | null, current_type: string | null);
    constructor(options: {
        plug_connector_type: PlugConnectorType | null;
        rated_power_kw: number | null;
        voltage_v: number | null;
        current_a: number | null;
        current_type: string | null;
    });
}
/** One nullable-field charging station returned near a coordinate. */
export declare class EVChargeStation {
    readonly id: string | null;
    readonly name: string | null;
    readonly phone_number: string | null;
    readonly address: EVChargeStationAddress | null;
    readonly location: EVChargeStationCoordinate | null;
    readonly connectors: ReadonlyArray<EVChargeStationConnector | null> | null;
    static __fields: (string | symbol)[][];
    constructor(id: string | null, name: string | null, phone_number: string | null, address: EVChargeStationAddress | null, location: EVChargeStationCoordinate | null, connectors: ReadonlyArray<EVChargeStationConnector | null> | null);
    constructor(options: {
        id: string | null;
        name: string | null;
        phone_number: string | null;
        address: EVChargeStationAddress | null;
        location: EVChargeStationCoordinate | null;
        connectors: ReadonlyArray<EVChargeStationConnector | null> | null;
    });
}
/** Nullable V1G eligibility values returned for a VIN. */
export declare class EVehicleEligibilityData {
    readonly vin: string | null;
    readonly v1g_eligible: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string | null, v1g_eligible: boolean | null);
    constructor(options: {
        vin: string | null;
        v1g_eligible: boolean | null;
    });
}
/** Raw status wrapper returned by the eVehicle eligibility endpoint. */
export declare class EVehicleEligibility {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: EVehicleEligibilityData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: EVehicleEligibilityData | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: EVehicleEligibilityData | null;
    });
}
/** The last camera counter and update time known to Nissan. */
export declare class LastKnownCameraUsageCounter {
    readonly counter: string | null;
    readonly last_update_time: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(counter: string | null, last_update_time: $.DateValue | null);
    constructor(options: {
        counter: string | null;
        last_update_time: $.DateValue | null;
    });
}
/** Nullable opening period for one weekday at a charging location. */
export declare class EmpLocationOpeningTiming {
    readonly weekday: number | null;
    readonly period_begin: string | null;
    readonly period_end: string | null;
    static __fields: (string | symbol)[][];
    constructor(weekday: number | null, period_begin: string | null, period_end: string | null);
    constructor(options: {
        weekday: number | null;
        period_begin: string | null;
        period_end: string | null;
    });
}
/** String coordinates returned by the EMP location-details endpoint. */
export declare class EmpLocationCoordinates {
    readonly latitude: string | null;
    readonly longitude: string | null;
    static __fields: (string | symbol)[][];
    constructor(latitude: string | null, longitude: string | null);
    constructor(options: {
        latitude: string | null;
        longitude: string | null;
    });
}
/** Nullable EMP connector metadata attached to an EVSE. */
export declare class EmpConnector {
    readonly connector_id: string | null;
    readonly connector_type: string | null;
    readonly connector_power_rating: string | null;
    readonly connector_description: string | null;
    static __fields: (string | symbol)[][];
    constructor(connector_id: string | null, connector_type: string | null, connector_power_rating: string | null, connector_description: string | null);
    constructor(options: {
        connector_id: string | null;
        connector_type: string | null;
        connector_power_rating: string | null;
        connector_description: string | null;
    });
}
/** One nullable-field EVSE returned for an EMP charging location. */
export declare class EmpEvse {
    readonly evse_id: string | null;
    readonly evse_location_id: string | null;
    readonly evse_status: EmpEvseStatus | null;
    readonly evse_capability: ReadonlyArray<string | null> | null;
    readonly evse_physical_reference: string | null;
    readonly connectors: ReadonlyArray<EmpConnector | null> | null;
    static __fields: (string | symbol)[][];
    constructor(evse_id: string | null, evse_location_id: string | null, evse_status: EmpEvseStatus | null, evse_capability: ReadonlyArray<string | null> | null, evse_physical_reference: string | null, connectors: ReadonlyArray<EmpConnector | null> | null);
    constructor(options: {
        evse_id: string | null;
        evse_location_id: string | null;
        evse_status: EmpEvseStatus | null;
        evse_capability: ReadonlyArray<string | null> | null;
        evse_physical_reference: string | null;
        connectors: ReadonlyArray<EmpConnector | null> | null;
    });
}
/** One charging-network location returned by LocationDetails. */
export declare class EmpLocation {
    readonly location_id: string | null;
    readonly location_type: EmpLocationStatus | null;
    readonly location_name: string | null;
    readonly location_logo: string | null;
    readonly location_operator_name: string | null;
    readonly location_sub_operator_name: string | null;
    readonly location_address: string | null;
    readonly location_city: string | null;
    readonly location_state: string | null;
    readonly location_country: string | null;
    readonly location_postal_code: string | null;
    readonly location_twenty_four_seven: boolean | null;
    readonly opening_timings: ReadonlyArray<EmpLocationOpeningTiming | null> | null;
    readonly location_in_network: boolean | null;
    readonly phone: string | null;
    readonly coordinates: EmpLocationCoordinates | null;
    readonly evses: ReadonlyArray<EmpEvse | null> | null;
    static __fields: (string | symbol)[][];
    constructor(location_id: string | null, location_type: EmpLocationStatus | null, location_name: string | null, location_logo: string | null, location_operator_name: string | null, location_sub_operator_name: string | null, location_address: string | null, location_city: string | null, location_state: string | null, location_country: string | null, location_postal_code: string | null, location_twenty_four_seven: boolean | null, opening_timings: ReadonlyArray<EmpLocationOpeningTiming | null> | null, location_in_network: boolean | null, phone: string | null, coordinates: EmpLocationCoordinates | null, evses: ReadonlyArray<EmpEvse | null> | null);
    constructor(options: {
        location_id: string | null;
        location_type: EmpLocationStatus | null;
        location_name: string | null;
        location_logo: string | null;
        location_operator_name: string | null;
        location_sub_operator_name: string | null;
        location_address: string | null;
        location_city: string | null;
        location_state: string | null;
        location_country: string | null;
        location_postal_code: string | null;
        location_twenty_four_seven: boolean | null;
        opening_timings: ReadonlyArray<EmpLocationOpeningTiming | null> | null;
        location_in_network: boolean | null;
        phone: string | null;
        coordinates: EmpLocationCoordinates | null;
        evses: ReadonlyArray<EmpEvse | null> | null;
    });
}
/** Raw EMP status wrapper and nullable charging-location collection. */
export declare class LocationDetails {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: ReadonlyArray<EmpLocation | null> | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ReadonlyArray<EmpLocation | null> | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: ReadonlyArray<EmpLocation | null> | null;
    });
}
/** Nullable parking and congestion chargeability flags for an EVSE. */
export declare class ParkingChargeableData {
    readonly evse_id: string | null;
    readonly is_parking_chargeable: boolean | null;
    readonly is_congestion_chargeable: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(evse_id: string | null, is_parking_chargeable: boolean | null, is_congestion_chargeable: boolean | null);
    constructor(options: {
        evse_id: string | null;
        is_parking_chargeable: boolean | null;
        is_congestion_chargeable: boolean | null;
    });
}
/** Raw EMP status wrapper for EVSE parking chargeability. */
export declare class ParkingChargeable {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: ParkingChargeableData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ParkingChargeableData | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: ParkingChargeableData | null;
    });
}
/** One capability that may be shared with an additional driver. */
export declare class ShareableCapability {
    readonly id: string;
    readonly name: string | null;
    readonly shareable: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(id: string, name: string | null, shareable: boolean | null);
    constructor(options: {
        id: string;
        name: string | null;
        shareable: boolean | null;
    });
}
/** One capability group and its non-null capability collection. */
export declare class ShareableCapabilityGroup {
    readonly id: string;
    readonly name: string | null;
    readonly shared: boolean | null;
    readonly capabilities: ReadonlyArray<ShareableCapability | null>;
    static __fields: (string | symbol)[][];
    constructor(id: string, name: string | null, shared: boolean | null, capabilities: ReadonlyArray<ShareableCapability | null>);
    constructor(options: {
        id: string;
        name: string | null;
        shared: boolean | null;
        capabilities: ReadonlyArray<ShareableCapability | null>;
    });
}
/** Non-null group collection exposed by an AVK2 vehicle. */
export declare class ShareableCapabilities {
    readonly groups: ReadonlyArray<ShareableCapabilityGroup | null>;
    static __fields: (string | symbol)[][];
    constructor(groups: ReadonlyArray<ShareableCapabilityGroup | null>);
    constructor(options: {
        groups: ReadonlyArray<ShareableCapabilityGroup | null>;
    });
}
/** Nullable English and French tariff text. */
export declare class TariffLocalizedText {
    readonly en: string | null;
    readonly fr: string | null;
    static __fields: (string | symbol)[][];
    constructor(en: string | null, fr: string | null);
    constructor(options: {
        en: string | null;
        fr: string | null;
    });
}
/** One nullable-field idle-fee tier. */
export declare class TariffIdleFeeTier {
    readonly congestion_level: string | null;
    readonly time_start: string | null;
    readonly time_end: string | null;
    readonly duration_start: string | null;
    readonly duration_end: string | null;
    readonly duration_unit: string | null;
    readonly price: string | null;
    readonly unit: string | null;
    static __fields: (string | symbol)[][];
    constructor(congestion_level: string | null, time_start: string | null, time_end: string | null, duration_start: string | null, duration_end: string | null, duration_unit: string | null, price: string | null, unit: string | null);
    constructor(options: {
        congestion_level: string | null;
        time_start: string | null;
        time_end: string | null;
        duration_start: string | null;
        duration_end: string | null;
        duration_unit: string | null;
        price: string | null;
        unit: string | null;
    });
}
/** Idle-fee grace period and nullable tiers. */
export declare class TariffIdleFees {
    readonly grace_period: string | null;
    readonly tiers: ReadonlyArray<TariffIdleFeeTier | null> | null;
    static __fields: (string | symbol)[][];
    constructor(grace_period: string | null, tiers: ReadonlyArray<TariffIdleFeeTier | null> | null);
    constructor(options: {
        grace_period: string | null;
        tiers: ReadonlyArray<TariffIdleFeeTier | null> | null;
    });
}
/** One nullable-field congestion-fee tier. */
export declare class TariffCongestionFeeTier {
    readonly congestion_level: string | null;
    readonly vehicle_soc_limit: string | null;
    readonly price: string | null;
    readonly unit: string | null;
    static __fields: (string | symbol)[][];
    constructor(congestion_level: string | null, vehicle_soc_limit: string | null, price: string | null, unit: string | null);
    constructor(options: {
        congestion_level: string | null;
        vehicle_soc_limit: string | null;
        price: string | null;
        unit: string | null;
    });
}
/** Congestion-fee grace period and nullable tiers. */
export declare class TariffCongestionFees {
    readonly grace_period: string | null;
    readonly tiers: ReadonlyArray<TariffCongestionFeeTier | null> | null;
    static __fields: (string | symbol)[][];
    constructor(grace_period: string | null, tiers: ReadonlyArray<TariffCongestionFeeTier | null> | null);
    constructor(options: {
        grace_period: string | null;
        tiers: ReadonlyArray<TariffCongestionFeeTier | null> | null;
    });
}
/** One nullable-field energy-fee tier. */
export declare class TariffEnergyFeeTier {
    readonly applicable_day: ReadonlyArray<number | null> | null;
    readonly time_start: string | null;
    readonly time_end: string | null;
    readonly duration_start: string | null;
    readonly duration_end: string | null;
    readonly duration_unit: string | null;
    readonly min_range: string | null;
    readonly max_range: string | null;
    readonly range_unit: string | null;
    readonly price: string | null;
    readonly unit: string | null;
    static __fields: (string | symbol)[][];
    constructor(applicable_day: ReadonlyArray<number | null> | null, time_start: string | null, time_end: string | null, duration_start: string | null, duration_end: string | null, duration_unit: string | null, min_range: string | null, max_range: string | null, range_unit: string | null, price: string | null, unit: string | null);
    constructor(options: {
        applicable_day: ReadonlyArray<number | null> | null;
        time_start: string | null;
        time_end: string | null;
        duration_start: string | null;
        duration_end: string | null;
        duration_unit: string | null;
        min_range: string | null;
        max_range: string | null;
        range_unit: string | null;
        price: string | null;
        unit: string | null;
    });
}
/** Nullable energy-fee tiers for one charging tariff. */
export declare class TariffEnergyFees {
    readonly tiers: ReadonlyArray<TariffEnergyFeeTier | null> | null;
    static __fields: (string | symbol)[][];
    constructor(tiers: ReadonlyArray<TariffEnergyFeeTier | null> | null);
    constructor(options: {
        tiers: ReadonlyArray<TariffEnergyFeeTier | null> | null;
    });
}
/** Tariff details for one connector category. */
export declare class TariffDetail {
    readonly connector_type: string | null;
    readonly connector_power: string | null;
    readonly session_fee: string | null;
    readonly alternative_text: TariffLocalizedText | null;
    readonly idle_fees: TariffIdleFees | null;
    readonly congestion_fees: TariffCongestionFees | null;
    readonly energy_fees: TariffEnergyFees | null;
    static __fields: (string | symbol)[][];
    constructor(connector_type: string | null, connector_power: string | null, session_fee: string | null, alternative_text: TariffLocalizedText | null, idle_fees: TariffIdleFees | null, congestion_fees: TariffCongestionFees | null, energy_fees: TariffEnergyFees | null);
    constructor(options: {
        connector_type: string | null;
        connector_power: string | null;
        session_fee: string | null;
        alternative_text: TariffLocalizedText | null;
        idle_fees: TariffIdleFees | null;
        congestion_fees: TariffCongestionFees | null;
        energy_fees: TariffEnergyFees | null;
    });
}
/** Nullable tariff fields returned for a charging location. */
export declare class TariffPricingData {
    readonly location_id: string | null;
    readonly max_charge_limit: string | null;
    readonly tariff_details: ReadonlyArray<TariffDetail | null> | null;
    static __fields: (string | symbol)[][];
    constructor(location_id: string | null, max_charge_limit: string | null, tariff_details: ReadonlyArray<TariffDetail | null> | null);
    constructor(options: {
        location_id: string | null;
        max_charge_limit: string | null;
        tariff_details: ReadonlyArray<TariffDetail | null> | null;
    });
}
/** Raw EMP status wrapper for location tariff pricing. */
export declare class TariffPricing {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: TariffPricingData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: TariffPricingData | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: TariffPricingData | null;
    });
}
