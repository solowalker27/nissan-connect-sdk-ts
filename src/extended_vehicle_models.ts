// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { DistanceUnit, SpeedUnit } from "./models";
export { DistanceUnit, SpeedUnit };

import { PlugConnectorType } from "./navigation_inputs";
export { PlugConnectorType };

export const DrivingHistoryAggregator = $.enumType("DrivingHistoryAggregator", {"DAILY": "DAILY", "MONTHLY": "MONTHLY", "YEARLY": "YEARLY", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type DrivingHistoryAggregator = ReturnType<typeof DrivingHistoryAggregator>;

export const WeightUnit = $.enumType("WeightUnit", {"POUND": "POUND", "KILOGRAM": "KILOGRAM", "GRAM": "GRAM", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type WeightUnit = ReturnType<typeof WeightUnit>;

export const EmpLocationStatus = $.enumType("EmpLocationStatus", {"ON_STREET": "ON_STREET", "PARKING_GARAGE": "PARKING_GARAGE", "UNDERGROUND_GARAGE": "UNDERGROUND_GARAGE", "PARKING_LOT": "PARKING_LOT", "OTHER": "OTHER", "UNKNOWN": "UNKNOWN", "ALONG_MOTORWAY": "ALONG_MOTORWAY", "ON_DRIVEWAY": "ON_DRIVEWAY", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EmpLocationStatus = ReturnType<typeof EmpLocationStatus>;

export const EmpEvseStatus = $.enumType("EmpEvseStatus", {"AVAILABLE": "AVAILABLE", "BLOCKED": "BLOCKED", "CHARGING": "CHARGING", "INOPERATIVE": "INOPERATIVE", "OUT_OF_ORDER": "OUTOFORDER", "PLANNED": "PLANNED", "REMOVED": "REMOVED", "RESERVED": "RESERVED", "UNKNOWN": "UNKNOWN", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EmpEvseStatus = ReturnType<typeof EmpEvseStatus>;

/** Non-null distance fields nested in a driving-history response. */
export class DrivingHistoryDistance {
readonly unit: DistanceUnit;
readonly value: number;
static __fields = [["unit", $.MISSING], ["value", $.MISSING]];
constructor(unit: DistanceUnit, value: number);
constructor(options: { unit: DistanceUnit; value: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DrivingHistoryDistance, __args);  Object.freeze(this); }
}
$.classType(DrivingHistoryDistance);

/** Nullable average-speed fields nested in driving history. */
export class DrivingHistoryAverageSpeed {
readonly type: SpeedUnit | null;
readonly value: number | null;
static __fields = [["type", $.MISSING], ["value", $.MISSING]];
constructor(type: SpeedUnit | null, value: number | null);
constructor(options: { type: SpeedUnit | null; value: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DrivingHistoryAverageSpeed, __args);  Object.freeze(this); }
}
$.classType(DrivingHistoryAverageSpeed);

/** Nullable CO2 saving fields nested in driving history. */
export class DrivingHistoryCo2Saved {
readonly unit: WeightUnit | null;
readonly value: number | null;
static __fields = [["unit", $.MISSING], ["value", $.MISSING]];
constructor(unit: WeightUnit | null, value: number | null);
constructor(options: { unit: WeightUnit | null; value: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DrivingHistoryCo2Saved, __args);  Object.freeze(this); }
}
$.classType(DrivingHistoryCo2Saved);

/** Nullable start or end coordinates for a recorded trip. */
export class DrivingHistoryCoordinate {
readonly latitude: number | null;
readonly longitude: number | null;
static __fields = [["latitude", $.MISSING], ["longitude", $.MISSING]];
constructor(latitude: number | null, longitude: number | null);
constructor(options: { latitude: number | null; longitude: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DrivingHistoryCoordinate, __args);  Object.freeze(this); }
}
$.classType(DrivingHistoryCoordinate);

/** One nullable-field aggregate returned for a driving-history bucket. */
export class DrivingHistoryTripSummary {
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
static __fields = [["user_id", $.MISSING], ["day", $.MISSING], ["month", $.MISSING], ["year", $.MISSING], ["number_of_trips", $.MISSING], ["distance_traveled", $.MISSING], ["duration", $.MISSING], ["average_speed", $.MISSING], ["energy_consumed", $.MISSING], ["co2_saved", $.MISSING]];
constructor(user_id: string | null, day: number | null, month: number | null, year: number | null, number_of_trips: number | null, distance_traveled: DrivingHistoryDistance | null, duration: string | null, average_speed: DrivingHistoryAverageSpeed | null, energy_consumed: number | null, co2_saved: DrivingHistoryCo2Saved | null);
constructor(options: { user_id: string | null; day: number | null; month: number | null; year: number | null; number_of_trips: number | null; distance_traveled: DrivingHistoryDistance | null; duration: string | null; average_speed: DrivingHistoryAverageSpeed | null; energy_consumed: number | null; co2_saved: DrivingHistoryCo2Saved | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DrivingHistoryTripSummary, __args);  Object.freeze(this); }
}
$.classType(DrivingHistoryTripSummary);

/** One individual trip returned by driving history. */
export class DrivingHistoryTrip {
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
static __fields = [["distance", $.MISSING], ["start_date", $.MISSING], ["end_date", $.MISSING], ["duration", $.MISSING], ["start_location", $.MISSING], ["end_location", $.MISSING], ["average_speed", $.MISSING], ["energy_consumed", $.MISSING], ["energy_saved", $.MISSING], ["co2_saved", $.MISSING], ["user_id", $.MISSING]];
constructor(distance: DrivingHistoryDistance | null, start_date: $.DateValue | null, end_date: $.DateValue | null, duration: number | null, start_location: DrivingHistoryCoordinate | null, end_location: DrivingHistoryCoordinate | null, average_speed: DrivingHistoryAverageSpeed | null, energy_consumed: number | null, energy_saved: number | null, co2_saved: DrivingHistoryCo2Saved | null, user_id: string | null);
constructor(options: { distance: DrivingHistoryDistance | null; start_date: $.DateValue | null; end_date: $.DateValue | null; duration: number | null; start_location: DrivingHistoryCoordinate | null; end_location: DrivingHistoryCoordinate | null; average_speed: DrivingHistoryAverageSpeed | null; energy_consumed: number | null; energy_saved: number | null; co2_saved: DrivingHistoryCo2Saved | null; user_id: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DrivingHistoryTrip, __args);  Object.freeze(this); }
}
$.classType(DrivingHistoryTrip);

/** Non-null driving-history collections returned for an electric vehicle. */
export class DrivingHistory {
readonly trip_summaries: ReadonlyArray<DrivingHistoryTripSummary>;
readonly trips: ReadonlyArray<DrivingHistoryTrip>;
static __fields = [["trip_summaries", $.MISSING], ["trips", $.MISSING]];
constructor(trip_summaries: ReadonlyArray<DrivingHistoryTripSummary>, trips: ReadonlyArray<DrivingHistoryTrip>);
constructor(options: { trip_summaries: ReadonlyArray<DrivingHistoryTripSummary>; trips: ReadonlyArray<DrivingHistoryTrip> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DrivingHistory, __args);  Object.freeze(this); }
}
$.classType(DrivingHistory);

/** Nullable address fields for a nearby charging station. */
export class EVChargeStationAddress {
readonly address1: string | null;
readonly address2: string | null;
readonly city: string | null;
readonly country: string | null;
readonly postal_code: string | null;
readonly state: string | null;
static __fields = [["address1", $.MISSING], ["address2", $.MISSING], ["city", $.MISSING], ["country", $.MISSING], ["postal_code", $.MISSING], ["state", $.MISSING]];
constructor(address1: string | null, address2: string | null, city: string | null, country: string | null, postal_code: string | null, state: string | null);
constructor(options: { address1: string | null; address2: string | null; city: string | null; country: string | null; postal_code: string | null; state: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVChargeStationAddress, __args);  Object.freeze(this); }
}
$.classType(EVChargeStationAddress);

/** Nullable coordinates for a nearby charging station. */
export class EVChargeStationCoordinate {
readonly latitude: number | null;
readonly longitude: number | null;
static __fields = [["latitude", $.MISSING], ["longitude", $.MISSING]];
constructor(latitude: number | null, longitude: number | null);
constructor(options: { latitude: number | null; longitude: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVChargeStationCoordinate, __args);  Object.freeze(this); }
}
$.classType(EVChargeStationCoordinate);

/** Nullable connector details advertised by a charging station. */
export class EVChargeStationConnector {
readonly plug_connector_type: PlugConnectorType | null;
readonly rated_power_kw: number | null;
readonly voltage_v: number | null;
readonly current_a: number | null;
readonly current_type: string | null;
static __fields = [["plug_connector_type", $.MISSING], ["rated_power_kw", $.MISSING], ["voltage_v", $.MISSING], ["current_a", $.MISSING], ["current_type", $.MISSING]];
constructor(plug_connector_type: PlugConnectorType | null, rated_power_kw: number | null, voltage_v: number | null, current_a: number | null, current_type: string | null);
constructor(options: { plug_connector_type: PlugConnectorType | null; rated_power_kw: number | null; voltage_v: number | null; current_a: number | null; current_type: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVChargeStationConnector, __args);  Object.freeze(this); }
}
$.classType(EVChargeStationConnector);

/** One nullable-field charging station returned near a coordinate. */
export class EVChargeStation {
readonly id: string | null;
readonly name: string | null;
readonly phone_number: string | null;
readonly address: EVChargeStationAddress | null;
readonly location: EVChargeStationCoordinate | null;
readonly connectors: ReadonlyArray<EVChargeStationConnector | null> | null;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["phone_number", $.MISSING], ["address", $.MISSING], ["location", $.MISSING], ["connectors", $.MISSING]];
constructor(id: string | null, name: string | null, phone_number: string | null, address: EVChargeStationAddress | null, location: EVChargeStationCoordinate | null, connectors: ReadonlyArray<EVChargeStationConnector | null> | null);
constructor(options: { id: string | null; name: string | null; phone_number: string | null; address: EVChargeStationAddress | null; location: EVChargeStationCoordinate | null; connectors: ReadonlyArray<EVChargeStationConnector | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVChargeStation, __args);  Object.freeze(this); }
}
$.classType(EVChargeStation);

/** Nullable V1G eligibility values returned for a VIN. */
export class EVehicleEligibilityData {
readonly vin: string | null;
readonly v1g_eligible: boolean | null;
static __fields = [["vin", $.MISSING], ["v1g_eligible", $.MISSING]];
constructor(vin: string | null, v1g_eligible: boolean | null);
constructor(options: { vin: string | null; v1g_eligible: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVehicleEligibilityData, __args);  Object.freeze(this); }
}
$.classType(EVehicleEligibilityData);

/** Raw status wrapper returned by the eVehicle eligibility endpoint. */
export class EVehicleEligibility {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: EVehicleEligibilityData | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: EVehicleEligibilityData | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: EVehicleEligibilityData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EVehicleEligibility, __args);  Object.freeze(this); }
}
$.classType(EVehicleEligibility);

/** The last camera counter and update time known to Nissan. */
export class LastKnownCameraUsageCounter {
readonly counter: string | null;
readonly last_update_time: $.DateValue | null;
static __fields = [["counter", $.MISSING], ["last_update_time", $.MISSING]];
constructor(counter: string | null, last_update_time: $.DateValue | null);
constructor(options: { counter: string | null; last_update_time: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, LastKnownCameraUsageCounter, __args);  Object.freeze(this); }
}
$.classType(LastKnownCameraUsageCounter);

/** Nullable opening period for one weekday at a charging location. */
export class EmpLocationOpeningTiming {
readonly weekday: number | null;
readonly period_begin: string | null;
readonly period_end: string | null;
static __fields = [["weekday", $.MISSING], ["period_begin", $.MISSING], ["period_end", $.MISSING]];
constructor(weekday: number | null, period_begin: string | null, period_end: string | null);
constructor(options: { weekday: number | null; period_begin: string | null; period_end: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EmpLocationOpeningTiming, __args);  Object.freeze(this); }
}
$.classType(EmpLocationOpeningTiming);

/** String coordinates returned by the EMP location-details endpoint. */
export class EmpLocationCoordinates {
readonly latitude: string | null;
readonly longitude: string | null;
static __fields = [["latitude", $.MISSING], ["longitude", $.MISSING]];
constructor(latitude: string | null, longitude: string | null);
constructor(options: { latitude: string | null; longitude: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EmpLocationCoordinates, __args);  Object.freeze(this); }
}
$.classType(EmpLocationCoordinates);

/** Nullable EMP connector metadata attached to an EVSE. */
export class EmpConnector {
readonly connector_id: string | null;
readonly connector_type: string | null;
readonly connector_power_rating: string | null;
readonly connector_description: string | null;
static __fields = [["connector_id", $.MISSING], ["connector_type", $.MISSING], ["connector_power_rating", $.MISSING], ["connector_description", $.MISSING]];
constructor(connector_id: string | null, connector_type: string | null, connector_power_rating: string | null, connector_description: string | null);
constructor(options: { connector_id: string | null; connector_type: string | null; connector_power_rating: string | null; connector_description: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EmpConnector, __args);  Object.freeze(this); }
}
$.classType(EmpConnector);

/** One nullable-field EVSE returned for an EMP charging location. */
export class EmpEvse {
readonly evse_id: string | null;
readonly evse_location_id: string | null;
readonly evse_status: EmpEvseStatus | null;
readonly evse_capability: ReadonlyArray<string | null> | null;
readonly evse_physical_reference: string | null;
readonly connectors: ReadonlyArray<EmpConnector | null> | null;
static __fields = [["evse_id", $.MISSING], ["evse_location_id", $.MISSING], ["evse_status", $.MISSING], ["evse_capability", $.MISSING], ["evse_physical_reference", $.MISSING], ["connectors", $.MISSING]];
constructor(evse_id: string | null, evse_location_id: string | null, evse_status: EmpEvseStatus | null, evse_capability: ReadonlyArray<string | null> | null, evse_physical_reference: string | null, connectors: ReadonlyArray<EmpConnector | null> | null);
constructor(options: { evse_id: string | null; evse_location_id: string | null; evse_status: EmpEvseStatus | null; evse_capability: ReadonlyArray<string | null> | null; evse_physical_reference: string | null; connectors: ReadonlyArray<EmpConnector | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EmpEvse, __args);  Object.freeze(this); }
}
$.classType(EmpEvse);

/** One charging-network location returned by LocationDetails. */
export class EmpLocation {
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
static __fields = [["location_id", $.MISSING], ["location_type", $.MISSING], ["location_name", $.MISSING], ["location_logo", $.MISSING], ["location_operator_name", $.MISSING], ["location_sub_operator_name", $.MISSING], ["location_address", $.MISSING], ["location_city", $.MISSING], ["location_state", $.MISSING], ["location_country", $.MISSING], ["location_postal_code", $.MISSING], ["location_twenty_four_seven", $.MISSING], ["opening_timings", $.MISSING], ["location_in_network", $.MISSING], ["phone", $.MISSING], ["coordinates", $.MISSING], ["evses", $.MISSING]];
constructor(location_id: string | null, location_type: EmpLocationStatus | null, location_name: string | null, location_logo: string | null, location_operator_name: string | null, location_sub_operator_name: string | null, location_address: string | null, location_city: string | null, location_state: string | null, location_country: string | null, location_postal_code: string | null, location_twenty_four_seven: boolean | null, opening_timings: ReadonlyArray<EmpLocationOpeningTiming | null> | null, location_in_network: boolean | null, phone: string | null, coordinates: EmpLocationCoordinates | null, evses: ReadonlyArray<EmpEvse | null> | null);
constructor(options: { location_id: string | null; location_type: EmpLocationStatus | null; location_name: string | null; location_logo: string | null; location_operator_name: string | null; location_sub_operator_name: string | null; location_address: string | null; location_city: string | null; location_state: string | null; location_country: string | null; location_postal_code: string | null; location_twenty_four_seven: boolean | null; opening_timings: ReadonlyArray<EmpLocationOpeningTiming | null> | null; location_in_network: boolean | null; phone: string | null; coordinates: EmpLocationCoordinates | null; evses: ReadonlyArray<EmpEvse | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, EmpLocation, __args);  Object.freeze(this); }
}
$.classType(EmpLocation);

/** Raw EMP status wrapper and nullable charging-location collection. */
export class LocationDetails {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: ReadonlyArray<EmpLocation | null> | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ReadonlyArray<EmpLocation | null> | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: ReadonlyArray<EmpLocation | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, LocationDetails, __args);  Object.freeze(this); }
}
$.classType(LocationDetails);

/** Nullable parking and congestion chargeability flags for an EVSE. */
export class ParkingChargeableData {
readonly evse_id: string | null;
readonly is_parking_chargeable: boolean | null;
readonly is_congestion_chargeable: boolean | null;
static __fields = [["evse_id", $.MISSING], ["is_parking_chargeable", $.MISSING], ["is_congestion_chargeable", $.MISSING]];
constructor(evse_id: string | null, is_parking_chargeable: boolean | null, is_congestion_chargeable: boolean | null);
constructor(options: { evse_id: string | null; is_parking_chargeable: boolean | null; is_congestion_chargeable: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ParkingChargeableData, __args);  Object.freeze(this); }
}
$.classType(ParkingChargeableData);

/** Raw EMP status wrapper for EVSE parking chargeability. */
export class ParkingChargeable {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: ParkingChargeableData | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ParkingChargeableData | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: ParkingChargeableData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ParkingChargeable, __args);  Object.freeze(this); }
}
$.classType(ParkingChargeable);

/** One capability that may be shared with an additional driver. */
export class ShareableCapability {
readonly id: string;
readonly name: string | null;
readonly shareable: boolean | null;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["shareable", $.MISSING]];
constructor(id: string, name: string | null, shareable: boolean | null);
constructor(options: { id: string; name: string | null; shareable: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ShareableCapability, __args);  Object.freeze(this); }
}
$.classType(ShareableCapability);

/** One capability group and its non-null capability collection. */
export class ShareableCapabilityGroup {
readonly id: string;
readonly name: string | null;
readonly shared: boolean | null;
readonly capabilities: ReadonlyArray<ShareableCapability | null>;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["shared", $.MISSING], ["capabilities", $.MISSING]];
constructor(id: string, name: string | null, shared: boolean | null, capabilities: ReadonlyArray<ShareableCapability | null>);
constructor(options: { id: string; name: string | null; shared: boolean | null; capabilities: ReadonlyArray<ShareableCapability | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ShareableCapabilityGroup, __args);  Object.freeze(this); }
}
$.classType(ShareableCapabilityGroup);

/** Non-null group collection exposed by an AVK2 vehicle. */
export class ShareableCapabilities {
readonly groups: ReadonlyArray<ShareableCapabilityGroup | null>;
static __fields = [["groups", $.MISSING]];
constructor(groups: ReadonlyArray<ShareableCapabilityGroup | null>);
constructor(options: { groups: ReadonlyArray<ShareableCapabilityGroup | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ShareableCapabilities, __args);  Object.freeze(this); }
}
$.classType(ShareableCapabilities);

/** Nullable English and French tariff text. */
export class TariffLocalizedText {
readonly en: string | null;
readonly fr: string | null;
static __fields = [["en", $.MISSING], ["fr", $.MISSING]];
constructor(en: string | null, fr: string | null);
constructor(options: { en: string | null; fr: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffLocalizedText, __args);  Object.freeze(this); }
}
$.classType(TariffLocalizedText);

/** One nullable-field idle-fee tier. */
export class TariffIdleFeeTier {
readonly congestion_level: string | null;
readonly time_start: string | null;
readonly time_end: string | null;
readonly duration_start: string | null;
readonly duration_end: string | null;
readonly duration_unit: string | null;
readonly price: string | null;
readonly unit: string | null;
static __fields = [["congestion_level", $.MISSING], ["time_start", $.MISSING], ["time_end", $.MISSING], ["duration_start", $.MISSING], ["duration_end", $.MISSING], ["duration_unit", $.MISSING], ["price", $.MISSING], ["unit", $.MISSING]];
constructor(congestion_level: string | null, time_start: string | null, time_end: string | null, duration_start: string | null, duration_end: string | null, duration_unit: string | null, price: string | null, unit: string | null);
constructor(options: { congestion_level: string | null; time_start: string | null; time_end: string | null; duration_start: string | null; duration_end: string | null; duration_unit: string | null; price: string | null; unit: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffIdleFeeTier, __args);  Object.freeze(this); }
}
$.classType(TariffIdleFeeTier);

/** Idle-fee grace period and nullable tiers. */
export class TariffIdleFees {
readonly grace_period: string | null;
readonly tiers: ReadonlyArray<TariffIdleFeeTier | null> | null;
static __fields = [["grace_period", $.MISSING], ["tiers", $.MISSING]];
constructor(grace_period: string | null, tiers: ReadonlyArray<TariffIdleFeeTier | null> | null);
constructor(options: { grace_period: string | null; tiers: ReadonlyArray<TariffIdleFeeTier | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffIdleFees, __args);  Object.freeze(this); }
}
$.classType(TariffIdleFees);

/** One nullable-field congestion-fee tier. */
export class TariffCongestionFeeTier {
readonly congestion_level: string | null;
readonly vehicle_soc_limit: string | null;
readonly price: string | null;
readonly unit: string | null;
static __fields = [["congestion_level", $.MISSING], ["vehicle_soc_limit", $.MISSING], ["price", $.MISSING], ["unit", $.MISSING]];
constructor(congestion_level: string | null, vehicle_soc_limit: string | null, price: string | null, unit: string | null);
constructor(options: { congestion_level: string | null; vehicle_soc_limit: string | null; price: string | null; unit: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffCongestionFeeTier, __args);  Object.freeze(this); }
}
$.classType(TariffCongestionFeeTier);

/** Congestion-fee grace period and nullable tiers. */
export class TariffCongestionFees {
readonly grace_period: string | null;
readonly tiers: ReadonlyArray<TariffCongestionFeeTier | null> | null;
static __fields = [["grace_period", $.MISSING], ["tiers", $.MISSING]];
constructor(grace_period: string | null, tiers: ReadonlyArray<TariffCongestionFeeTier | null> | null);
constructor(options: { grace_period: string | null; tiers: ReadonlyArray<TariffCongestionFeeTier | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffCongestionFees, __args);  Object.freeze(this); }
}
$.classType(TariffCongestionFees);

/** One nullable-field energy-fee tier. */
export class TariffEnergyFeeTier {
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
static __fields = [["applicable_day", $.MISSING], ["time_start", $.MISSING], ["time_end", $.MISSING], ["duration_start", $.MISSING], ["duration_end", $.MISSING], ["duration_unit", $.MISSING], ["min_range", $.MISSING], ["max_range", $.MISSING], ["range_unit", $.MISSING], ["price", $.MISSING], ["unit", $.MISSING]];
constructor(applicable_day: ReadonlyArray<number | null> | null, time_start: string | null, time_end: string | null, duration_start: string | null, duration_end: string | null, duration_unit: string | null, min_range: string | null, max_range: string | null, range_unit: string | null, price: string | null, unit: string | null);
constructor(options: { applicable_day: ReadonlyArray<number | null> | null; time_start: string | null; time_end: string | null; duration_start: string | null; duration_end: string | null; duration_unit: string | null; min_range: string | null; max_range: string | null; range_unit: string | null; price: string | null; unit: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffEnergyFeeTier, __args);  Object.freeze(this); }
}
$.classType(TariffEnergyFeeTier);

/** Nullable energy-fee tiers for one charging tariff. */
export class TariffEnergyFees {
readonly tiers: ReadonlyArray<TariffEnergyFeeTier | null> | null;
static __fields = [["tiers", $.MISSING]];
constructor(tiers: ReadonlyArray<TariffEnergyFeeTier | null> | null);
constructor(options: { tiers: ReadonlyArray<TariffEnergyFeeTier | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffEnergyFees, __args);  Object.freeze(this); }
}
$.classType(TariffEnergyFees);

/** Tariff details for one connector category. */
export class TariffDetail {
readonly connector_type: string | null;
readonly connector_power: string | null;
readonly session_fee: string | null;
readonly alternative_text: TariffLocalizedText | null;
readonly idle_fees: TariffIdleFees | null;
readonly congestion_fees: TariffCongestionFees | null;
readonly energy_fees: TariffEnergyFees | null;
static __fields = [["connector_type", $.MISSING], ["connector_power", $.MISSING], ["session_fee", $.MISSING], ["alternative_text", $.MISSING], ["idle_fees", $.MISSING], ["congestion_fees", $.MISSING], ["energy_fees", $.MISSING]];
constructor(connector_type: string | null, connector_power: string | null, session_fee: string | null, alternative_text: TariffLocalizedText | null, idle_fees: TariffIdleFees | null, congestion_fees: TariffCongestionFees | null, energy_fees: TariffEnergyFees | null);
constructor(options: { connector_type: string | null; connector_power: string | null; session_fee: string | null; alternative_text: TariffLocalizedText | null; idle_fees: TariffIdleFees | null; congestion_fees: TariffCongestionFees | null; energy_fees: TariffEnergyFees | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffDetail, __args);  Object.freeze(this); }
}
$.classType(TariffDetail);

/** Nullable tariff fields returned for a charging location. */
export class TariffPricingData {
readonly location_id: string | null;
readonly max_charge_limit: string | null;
readonly tariff_details: ReadonlyArray<TariffDetail | null> | null;
static __fields = [["location_id", $.MISSING], ["max_charge_limit", $.MISSING], ["tariff_details", $.MISSING]];
constructor(location_id: string | null, max_charge_limit: string | null, tariff_details: ReadonlyArray<TariffDetail | null> | null);
constructor(options: { location_id: string | null; max_charge_limit: string | null; tariff_details: ReadonlyArray<TariffDetail | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffPricingData, __args);  Object.freeze(this); }
}
$.classType(TariffPricingData);

/** Raw EMP status wrapper for location tariff pricing. */
export class TariffPricing {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly data: TariffPricingData | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["data", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: TariffPricingData | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; data: TariffPricingData | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TariffPricing, __args);  Object.freeze(this); }
}
$.classType(TariffPricing);
