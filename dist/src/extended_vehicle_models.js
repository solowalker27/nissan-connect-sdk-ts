"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TariffPricing = exports.TariffPricingData = exports.TariffDetail = exports.TariffEnergyFees = exports.TariffEnergyFeeTier = exports.TariffCongestionFees = exports.TariffCongestionFeeTier = exports.TariffIdleFees = exports.TariffIdleFeeTier = exports.TariffLocalizedText = exports.ShareableCapabilities = exports.ShareableCapabilityGroup = exports.ShareableCapability = exports.ParkingChargeable = exports.ParkingChargeableData = exports.LocationDetails = exports.EmpLocation = exports.EmpEvse = exports.EmpConnector = exports.EmpLocationCoordinates = exports.EmpLocationOpeningTiming = exports.LastKnownCameraUsageCounter = exports.EVehicleEligibility = exports.EVehicleEligibilityData = exports.EVChargeStation = exports.EVChargeStationConnector = exports.EVChargeStationCoordinate = exports.EVChargeStationAddress = exports.DrivingHistory = exports.DrivingHistoryTrip = exports.DrivingHistoryTripSummary = exports.DrivingHistoryCoordinate = exports.DrivingHistoryCo2Saved = exports.DrivingHistoryAverageSpeed = exports.DrivingHistoryDistance = exports.EmpEvseStatus = exports.EmpLocationStatus = exports.WeightUnit = exports.DrivingHistoryAggregator = exports.PlugConnectorType = exports.SpeedUnit = exports.DistanceUnit = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "SpeedUnit", { enumerable: true, get: function () { return models_1.SpeedUnit; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "PlugConnectorType", { enumerable: true, get: function () { return navigation_inputs_1.PlugConnectorType; } });
exports.DrivingHistoryAggregator = _runtime_1.py.enumType("DrivingHistoryAggregator", { "DAILY": "DAILY", "MONTHLY": "MONTHLY", "YEARLY": "YEARLY", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.WeightUnit = _runtime_1.py.enumType("WeightUnit", { "POUND": "POUND", "KILOGRAM": "KILOGRAM", "GRAM": "GRAM", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.EmpLocationStatus = _runtime_1.py.enumType("EmpLocationStatus", { "ON_STREET": "ON_STREET", "PARKING_GARAGE": "PARKING_GARAGE", "UNDERGROUND_GARAGE": "UNDERGROUND_GARAGE", "PARKING_LOT": "PARKING_LOT", "OTHER": "OTHER", "UNKNOWN": "UNKNOWN", "ALONG_MOTORWAY": "ALONG_MOTORWAY", "ON_DRIVEWAY": "ON_DRIVEWAY", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.EmpEvseStatus = _runtime_1.py.enumType("EmpEvseStatus", { "AVAILABLE": "AVAILABLE", "BLOCKED": "BLOCKED", "CHARGING": "CHARGING", "INOPERATIVE": "INOPERATIVE", "OUT_OF_ORDER": "OUTOFORDER", "PLANNED": "PLANNED", "REMOVED": "REMOVED", "RESERVED": "RESERVED", "UNKNOWN": "UNKNOWN", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Non-null distance fields nested in a driving-history response. */
class DrivingHistoryDistance {
    unit;
    value;
    static __fields = [["unit", _runtime_1.py.MISSING], ["value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DrivingHistoryDistance, __args); Object.freeze(this); }
}
exports.DrivingHistoryDistance = DrivingHistoryDistance;
_runtime_1.py.classType(DrivingHistoryDistance);
/** Nullable average-speed fields nested in driving history. */
class DrivingHistoryAverageSpeed {
    type;
    value;
    static __fields = [["type", _runtime_1.py.MISSING], ["value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DrivingHistoryAverageSpeed, __args); Object.freeze(this); }
}
exports.DrivingHistoryAverageSpeed = DrivingHistoryAverageSpeed;
_runtime_1.py.classType(DrivingHistoryAverageSpeed);
/** Nullable CO2 saving fields nested in driving history. */
class DrivingHistoryCo2Saved {
    unit;
    value;
    static __fields = [["unit", _runtime_1.py.MISSING], ["value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DrivingHistoryCo2Saved, __args); Object.freeze(this); }
}
exports.DrivingHistoryCo2Saved = DrivingHistoryCo2Saved;
_runtime_1.py.classType(DrivingHistoryCo2Saved);
/** Nullable start or end coordinates for a recorded trip. */
class DrivingHistoryCoordinate {
    latitude;
    longitude;
    static __fields = [["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DrivingHistoryCoordinate, __args); Object.freeze(this); }
}
exports.DrivingHistoryCoordinate = DrivingHistoryCoordinate;
_runtime_1.py.classType(DrivingHistoryCoordinate);
/** One nullable-field aggregate returned for a driving-history bucket. */
class DrivingHistoryTripSummary {
    user_id;
    day;
    month;
    year;
    number_of_trips;
    distance_traveled;
    duration;
    average_speed;
    energy_consumed;
    co2_saved;
    static __fields = [["user_id", _runtime_1.py.MISSING], ["day", _runtime_1.py.MISSING], ["month", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING], ["number_of_trips", _runtime_1.py.MISSING], ["distance_traveled", _runtime_1.py.MISSING], ["duration", _runtime_1.py.MISSING], ["average_speed", _runtime_1.py.MISSING], ["energy_consumed", _runtime_1.py.MISSING], ["co2_saved", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DrivingHistoryTripSummary, __args); Object.freeze(this); }
}
exports.DrivingHistoryTripSummary = DrivingHistoryTripSummary;
_runtime_1.py.classType(DrivingHistoryTripSummary);
/** One individual trip returned by driving history. */
class DrivingHistoryTrip {
    distance;
    start_date;
    end_date;
    duration;
    start_location;
    end_location;
    average_speed;
    energy_consumed;
    energy_saved;
    co2_saved;
    user_id;
    static __fields = [["distance", _runtime_1.py.MISSING], ["start_date", _runtime_1.py.MISSING], ["end_date", _runtime_1.py.MISSING], ["duration", _runtime_1.py.MISSING], ["start_location", _runtime_1.py.MISSING], ["end_location", _runtime_1.py.MISSING], ["average_speed", _runtime_1.py.MISSING], ["energy_consumed", _runtime_1.py.MISSING], ["energy_saved", _runtime_1.py.MISSING], ["co2_saved", _runtime_1.py.MISSING], ["user_id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DrivingHistoryTrip, __args); Object.freeze(this); }
}
exports.DrivingHistoryTrip = DrivingHistoryTrip;
_runtime_1.py.classType(DrivingHistoryTrip);
/** Non-null driving-history collections returned for an electric vehicle. */
class DrivingHistory {
    trip_summaries;
    trips;
    static __fields = [["trip_summaries", _runtime_1.py.MISSING], ["trips", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DrivingHistory, __args); Object.freeze(this); }
}
exports.DrivingHistory = DrivingHistory;
_runtime_1.py.classType(DrivingHistory);
/** Nullable address fields for a nearby charging station. */
class EVChargeStationAddress {
    address1;
    address2;
    city;
    country;
    postal_code;
    state;
    static __fields = [["address1", _runtime_1.py.MISSING], ["address2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVChargeStationAddress, __args); Object.freeze(this); }
}
exports.EVChargeStationAddress = EVChargeStationAddress;
_runtime_1.py.classType(EVChargeStationAddress);
/** Nullable coordinates for a nearby charging station. */
class EVChargeStationCoordinate {
    latitude;
    longitude;
    static __fields = [["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVChargeStationCoordinate, __args); Object.freeze(this); }
}
exports.EVChargeStationCoordinate = EVChargeStationCoordinate;
_runtime_1.py.classType(EVChargeStationCoordinate);
/** Nullable connector details advertised by a charging station. */
class EVChargeStationConnector {
    plug_connector_type;
    rated_power_kw;
    voltage_v;
    current_a;
    current_type;
    static __fields = [["plug_connector_type", _runtime_1.py.MISSING], ["rated_power_kw", _runtime_1.py.MISSING], ["voltage_v", _runtime_1.py.MISSING], ["current_a", _runtime_1.py.MISSING], ["current_type", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVChargeStationConnector, __args); Object.freeze(this); }
}
exports.EVChargeStationConnector = EVChargeStationConnector;
_runtime_1.py.classType(EVChargeStationConnector);
/** One nullable-field charging station returned near a coordinate. */
class EVChargeStation {
    id;
    name;
    phone_number;
    address;
    location;
    connectors;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["location", _runtime_1.py.MISSING], ["connectors", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVChargeStation, __args); Object.freeze(this); }
}
exports.EVChargeStation = EVChargeStation;
_runtime_1.py.classType(EVChargeStation);
/** Nullable V1G eligibility values returned for a VIN. */
class EVehicleEligibilityData {
    vin;
    v1g_eligible;
    static __fields = [["vin", _runtime_1.py.MISSING], ["v1g_eligible", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVehicleEligibilityData, __args); Object.freeze(this); }
}
exports.EVehicleEligibilityData = EVehicleEligibilityData;
_runtime_1.py.classType(EVehicleEligibilityData);
/** Raw status wrapper returned by the eVehicle eligibility endpoint. */
class EVehicleEligibility {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EVehicleEligibility, __args); Object.freeze(this); }
}
exports.EVehicleEligibility = EVehicleEligibility;
_runtime_1.py.classType(EVehicleEligibility);
/** The last camera counter and update time known to Nissan. */
class LastKnownCameraUsageCounter {
    counter;
    last_update_time;
    static __fields = [["counter", _runtime_1.py.MISSING], ["last_update_time", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, LastKnownCameraUsageCounter, __args); Object.freeze(this); }
}
exports.LastKnownCameraUsageCounter = LastKnownCameraUsageCounter;
_runtime_1.py.classType(LastKnownCameraUsageCounter);
/** Nullable opening period for one weekday at a charging location. */
class EmpLocationOpeningTiming {
    weekday;
    period_begin;
    period_end;
    static __fields = [["weekday", _runtime_1.py.MISSING], ["period_begin", _runtime_1.py.MISSING], ["period_end", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EmpLocationOpeningTiming, __args); Object.freeze(this); }
}
exports.EmpLocationOpeningTiming = EmpLocationOpeningTiming;
_runtime_1.py.classType(EmpLocationOpeningTiming);
/** String coordinates returned by the EMP location-details endpoint. */
class EmpLocationCoordinates {
    latitude;
    longitude;
    static __fields = [["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EmpLocationCoordinates, __args); Object.freeze(this); }
}
exports.EmpLocationCoordinates = EmpLocationCoordinates;
_runtime_1.py.classType(EmpLocationCoordinates);
/** Nullable EMP connector metadata attached to an EVSE. */
class EmpConnector {
    connector_id;
    connector_type;
    connector_power_rating;
    connector_description;
    static __fields = [["connector_id", _runtime_1.py.MISSING], ["connector_type", _runtime_1.py.MISSING], ["connector_power_rating", _runtime_1.py.MISSING], ["connector_description", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EmpConnector, __args); Object.freeze(this); }
}
exports.EmpConnector = EmpConnector;
_runtime_1.py.classType(EmpConnector);
/** One nullable-field EVSE returned for an EMP charging location. */
class EmpEvse {
    evse_id;
    evse_location_id;
    evse_status;
    evse_capability;
    evse_physical_reference;
    connectors;
    static __fields = [["evse_id", _runtime_1.py.MISSING], ["evse_location_id", _runtime_1.py.MISSING], ["evse_status", _runtime_1.py.MISSING], ["evse_capability", _runtime_1.py.MISSING], ["evse_physical_reference", _runtime_1.py.MISSING], ["connectors", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EmpEvse, __args); Object.freeze(this); }
}
exports.EmpEvse = EmpEvse;
_runtime_1.py.classType(EmpEvse);
/** One charging-network location returned by LocationDetails. */
class EmpLocation {
    location_id;
    location_type;
    location_name;
    location_logo;
    location_operator_name;
    location_sub_operator_name;
    location_address;
    location_city;
    location_state;
    location_country;
    location_postal_code;
    location_twenty_four_seven;
    opening_timings;
    location_in_network;
    phone;
    coordinates;
    evses;
    static __fields = [["location_id", _runtime_1.py.MISSING], ["location_type", _runtime_1.py.MISSING], ["location_name", _runtime_1.py.MISSING], ["location_logo", _runtime_1.py.MISSING], ["location_operator_name", _runtime_1.py.MISSING], ["location_sub_operator_name", _runtime_1.py.MISSING], ["location_address", _runtime_1.py.MISSING], ["location_city", _runtime_1.py.MISSING], ["location_state", _runtime_1.py.MISSING], ["location_country", _runtime_1.py.MISSING], ["location_postal_code", _runtime_1.py.MISSING], ["location_twenty_four_seven", _runtime_1.py.MISSING], ["opening_timings", _runtime_1.py.MISSING], ["location_in_network", _runtime_1.py.MISSING], ["phone", _runtime_1.py.MISSING], ["coordinates", _runtime_1.py.MISSING], ["evses", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, EmpLocation, __args); Object.freeze(this); }
}
exports.EmpLocation = EmpLocation;
_runtime_1.py.classType(EmpLocation);
/** Raw EMP status wrapper and nullable charging-location collection. */
class LocationDetails {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, LocationDetails, __args); Object.freeze(this); }
}
exports.LocationDetails = LocationDetails;
_runtime_1.py.classType(LocationDetails);
/** Nullable parking and congestion chargeability flags for an EVSE. */
class ParkingChargeableData {
    evse_id;
    is_parking_chargeable;
    is_congestion_chargeable;
    static __fields = [["evse_id", _runtime_1.py.MISSING], ["is_parking_chargeable", _runtime_1.py.MISSING], ["is_congestion_chargeable", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ParkingChargeableData, __args); Object.freeze(this); }
}
exports.ParkingChargeableData = ParkingChargeableData;
_runtime_1.py.classType(ParkingChargeableData);
/** Raw EMP status wrapper for EVSE parking chargeability. */
class ParkingChargeable {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ParkingChargeable, __args); Object.freeze(this); }
}
exports.ParkingChargeable = ParkingChargeable;
_runtime_1.py.classType(ParkingChargeable);
/** One capability that may be shared with an additional driver. */
class ShareableCapability {
    id;
    name;
    shareable;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["shareable", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ShareableCapability, __args); Object.freeze(this); }
}
exports.ShareableCapability = ShareableCapability;
_runtime_1.py.classType(ShareableCapability);
/** One capability group and its non-null capability collection. */
class ShareableCapabilityGroup {
    id;
    name;
    shared;
    capabilities;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["shared", _runtime_1.py.MISSING], ["capabilities", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ShareableCapabilityGroup, __args); Object.freeze(this); }
}
exports.ShareableCapabilityGroup = ShareableCapabilityGroup;
_runtime_1.py.classType(ShareableCapabilityGroup);
/** Non-null group collection exposed by an AVK2 vehicle. */
class ShareableCapabilities {
    groups;
    static __fields = [["groups", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ShareableCapabilities, __args); Object.freeze(this); }
}
exports.ShareableCapabilities = ShareableCapabilities;
_runtime_1.py.classType(ShareableCapabilities);
/** Nullable English and French tariff text. */
class TariffLocalizedText {
    en;
    fr;
    static __fields = [["en", _runtime_1.py.MISSING], ["fr", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffLocalizedText, __args); Object.freeze(this); }
}
exports.TariffLocalizedText = TariffLocalizedText;
_runtime_1.py.classType(TariffLocalizedText);
/** One nullable-field idle-fee tier. */
class TariffIdleFeeTier {
    congestion_level;
    time_start;
    time_end;
    duration_start;
    duration_end;
    duration_unit;
    price;
    unit;
    static __fields = [["congestion_level", _runtime_1.py.MISSING], ["time_start", _runtime_1.py.MISSING], ["time_end", _runtime_1.py.MISSING], ["duration_start", _runtime_1.py.MISSING], ["duration_end", _runtime_1.py.MISSING], ["duration_unit", _runtime_1.py.MISSING], ["price", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffIdleFeeTier, __args); Object.freeze(this); }
}
exports.TariffIdleFeeTier = TariffIdleFeeTier;
_runtime_1.py.classType(TariffIdleFeeTier);
/** Idle-fee grace period and nullable tiers. */
class TariffIdleFees {
    grace_period;
    tiers;
    static __fields = [["grace_period", _runtime_1.py.MISSING], ["tiers", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffIdleFees, __args); Object.freeze(this); }
}
exports.TariffIdleFees = TariffIdleFees;
_runtime_1.py.classType(TariffIdleFees);
/** One nullable-field congestion-fee tier. */
class TariffCongestionFeeTier {
    congestion_level;
    vehicle_soc_limit;
    price;
    unit;
    static __fields = [["congestion_level", _runtime_1.py.MISSING], ["vehicle_soc_limit", _runtime_1.py.MISSING], ["price", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffCongestionFeeTier, __args); Object.freeze(this); }
}
exports.TariffCongestionFeeTier = TariffCongestionFeeTier;
_runtime_1.py.classType(TariffCongestionFeeTier);
/** Congestion-fee grace period and nullable tiers. */
class TariffCongestionFees {
    grace_period;
    tiers;
    static __fields = [["grace_period", _runtime_1.py.MISSING], ["tiers", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffCongestionFees, __args); Object.freeze(this); }
}
exports.TariffCongestionFees = TariffCongestionFees;
_runtime_1.py.classType(TariffCongestionFees);
/** One nullable-field energy-fee tier. */
class TariffEnergyFeeTier {
    applicable_day;
    time_start;
    time_end;
    duration_start;
    duration_end;
    duration_unit;
    min_range;
    max_range;
    range_unit;
    price;
    unit;
    static __fields = [["applicable_day", _runtime_1.py.MISSING], ["time_start", _runtime_1.py.MISSING], ["time_end", _runtime_1.py.MISSING], ["duration_start", _runtime_1.py.MISSING], ["duration_end", _runtime_1.py.MISSING], ["duration_unit", _runtime_1.py.MISSING], ["min_range", _runtime_1.py.MISSING], ["max_range", _runtime_1.py.MISSING], ["range_unit", _runtime_1.py.MISSING], ["price", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffEnergyFeeTier, __args); Object.freeze(this); }
}
exports.TariffEnergyFeeTier = TariffEnergyFeeTier;
_runtime_1.py.classType(TariffEnergyFeeTier);
/** Nullable energy-fee tiers for one charging tariff. */
class TariffEnergyFees {
    tiers;
    static __fields = [["tiers", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffEnergyFees, __args); Object.freeze(this); }
}
exports.TariffEnergyFees = TariffEnergyFees;
_runtime_1.py.classType(TariffEnergyFees);
/** Tariff details for one connector category. */
class TariffDetail {
    connector_type;
    connector_power;
    session_fee;
    alternative_text;
    idle_fees;
    congestion_fees;
    energy_fees;
    static __fields = [["connector_type", _runtime_1.py.MISSING], ["connector_power", _runtime_1.py.MISSING], ["session_fee", _runtime_1.py.MISSING], ["alternative_text", _runtime_1.py.MISSING], ["idle_fees", _runtime_1.py.MISSING], ["congestion_fees", _runtime_1.py.MISSING], ["energy_fees", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffDetail, __args); Object.freeze(this); }
}
exports.TariffDetail = TariffDetail;
_runtime_1.py.classType(TariffDetail);
/** Nullable tariff fields returned for a charging location. */
class TariffPricingData {
    location_id;
    max_charge_limit;
    tariff_details;
    static __fields = [["location_id", _runtime_1.py.MISSING], ["max_charge_limit", _runtime_1.py.MISSING], ["tariff_details", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffPricingData, __args); Object.freeze(this); }
}
exports.TariffPricingData = TariffPricingData;
_runtime_1.py.classType(TariffPricingData);
/** Raw EMP status wrapper for location tariff pricing. */
class TariffPricing {
    status_code;
    status_message;
    timestamp;
    data;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["data", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TariffPricing, __args); Object.freeze(this); }
}
exports.TariffPricing = TariffPricing;
_runtime_1.py.classType(TariffPricing);
//# sourceMappingURL=extended_vehicle_models.js.map