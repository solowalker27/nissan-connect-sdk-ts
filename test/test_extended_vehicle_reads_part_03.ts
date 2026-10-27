// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



import { EmpEvseStatus, EmpLocationStatus } from "../src/extended_vehicle_models";

import { parse_driving_history, parse_e_vehicle_eligibility, parse_ev_charge_stations, parse_last_known_camera_usage_counter, parse_location_details, parse_parking_chargeable, parse_shareable_capabilities, parse_tariff_pricing } from "../src/extended_vehicle_parsing";

/** Translated upstream test_location_details_preserves_emp_status_and_nested_nullable_lists. */
export function test_location_details_preserves_emp_status_and_nested_nullable_lists(...__args: any[]): any {
let connector, details, evse, location;
let {} = $.bind(__args, [], {}, [], null, null);
details = $.call(parse_location_details, [Object.assign({}, {["locationDetails"]: Object.assign({}, {["__typename"]: "LocationDetailsResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "raw-location-timestamp"}, {["data"]: [null, Object.assign({}, {["__typename"]: "LocationData"}, {["locationId"]: "location-1"}, {["locationType"]: "FUTURE_LOCATION_TYPE"}, {["locationName"]: "Charging Plaza"}, {["locationLogo"]: null}, {["locationOperatorName"]: "Operator"}, {["locationSubOperatorName"]: null}, {["locationAddress"]: "1 Main St"}, {["locationCity"]: "San Diego"}, {["locationState"]: "CA"}, {["locationCountry"]: "US"}, {["locationPostalCode"]: "92101"}, {["locationTwentyfourseven"]: true}, {["locationOpeningTimings"]: [null, Object.assign({}, {["__typename"]: "OpeningTiming"}, {["weekday"]: 5}, {["periodBegin"]: "08:00"}, {["periodEnd"]: null})]}, {["locationInNetwork"]: false}, {["phone"]: null}, {["locationCoordinates"]: Object.assign({}, {["__typename"]: "Coordinates"}, {["latitude"]: "32.7157"}, {["longitude"]: "-117.1611"})}, {["evses"]: [null, Object.assign({}, {["__typename"]: "Evse"}, {["evseId"]: "EVSE-1"}, {["evseLocationId"]: null}, {["evseStatus"]: "FUTURE_EVSE_STATUS"}, {["evseCapability"]: ["PLUG_AND_CHARGE_CAPABLE"]}, {["evsePhysicalReference"]: "A-1"}, {["connector"]: [null, Object.assign({}, {["__typename"]: "Connector"}, {["connectorId"]: "connector-1"}, {["connectorType"]: "CCS"}, {["connectorPowerRating"]: "150 kW"}, {["connectorDescription"]: null})]})]})]})})], null);
$.assert(((details !== null)), "test_extended_vehicle_reads_part_03.py:86: details is not None");
$.assert(($.eq($.attr(details, "status_code"), "1000")), "test_extended_vehicle_reads_part_03.py:87: details.status_code == '1000'");
$.assert((($.attr(details, "status_message") === null)), "test_extended_vehicle_reads_part_03.py:88: details.status_message is None");
$.assert(($.eq($.attr(details, "timestamp"), "raw-location-timestamp")), "test_extended_vehicle_reads_part_03.py:89: details.timestamp == 'raw-location-timestamp'");
$.assert((($.attr(details, "data") !== null)), "test_extended_vehicle_reads_part_03.py:90: details.data is not None");
$.assert($.call($.isinstance, [$.attr(details, "data"), $.tuple], null), "test_extended_vehicle_reads_part_03.py:91: isinstance(details.data, tuple)");
$.assert((($.get($.attr(details, "data"), 0) === null)), "test_extended_vehicle_reads_part_03.py:92: details.data[0] is None");
location = $.get($.attr(details, "data"), 1);
$.assert(((location !== null)), "test_extended_vehicle_reads_part_03.py:94: location is not None");
$.assert((($.attr(location, "location_type") === $.attr(EmpLocationStatus, "UNKNOWN_VALUE"))), "test_extended_vehicle_reads_part_03.py:95: location.location_type is EmpLocationStatus.UNKNOWN_VALUE");
$.assert((($.attr(location, "location_twenty_four_seven") === true)), "test_extended_vehicle_reads_part_03.py:96: location.location_twenty_four_seven is True");
$.assert((($.attr(location, "opening_timings") !== null)), "test_extended_vehicle_reads_part_03.py:97: location.opening_timings is not None");
$.assert((($.get($.attr(location, "opening_timings"), 0) === null)), "test_extended_vehicle_reads_part_03.py:98: location.opening_timings[0] is None");
$.assert((($.attr(location, "coordinates") !== null)), "test_extended_vehicle_reads_part_03.py:99: location.coordinates is not None");
$.assert(($.eq($.attr($.attr(location, "coordinates"), "latitude"), "32.7157")), "test_extended_vehicle_reads_part_03.py:100: location.coordinates.latitude == '32.7157'");
$.assert((($.attr(location, "evses") !== null)), "test_extended_vehicle_reads_part_03.py:101: location.evses is not None");
$.assert((($.get($.attr(location, "evses"), 0) === null)), "test_extended_vehicle_reads_part_03.py:102: location.evses[0] is None");
evse = $.get($.attr(location, "evses"), 1);
$.assert(((evse !== null)), "test_extended_vehicle_reads_part_03.py:104: evse is not None");
$.assert((($.attr(evse, "evse_status") === $.attr(EmpEvseStatus, "UNKNOWN_VALUE"))), "test_extended_vehicle_reads_part_03.py:105: evse.evse_status is EmpEvseStatus.UNKNOWN_VALUE");
$.assert(($.eq($.attr(evse, "evse_capability"), ["PLUG_AND_CHARGE_CAPABLE"])), "test_extended_vehicle_reads_part_03.py:106: evse.evse_capability == ('PLUG_AND_CHARGE_CAPABLE',)");
$.assert((($.attr(evse, "connectors") !== null)), "test_extended_vehicle_reads_part_03.py:107: evse.connectors is not None");
$.assert((($.get($.attr(evse, "connectors"), 0) === null)), "test_extended_vehicle_reads_part_03.py:108: evse.connectors[0] is None");
connector = $.get($.attr(evse, "connectors"), 1);
$.assert(((connector !== null)), "test_extended_vehicle_reads_part_03.py:110: connector is not None");
$.assert(($.eq($.attr(connector, "connector_power_rating"), "150 kW")), "test_extended_vehicle_reads_part_03.py:111: connector.connector_power_rating == '150 kW'");
}

/** Translated upstream test_tariff_pricing_preserves_raw_status_and_every_nullable_tier_list. */
export function test_tariff_pricing_preserves_raw_status_and_every_nullable_tier_list(...__args: any[]): any {
let detail, energy_tier, pricing;
let {} = $.bind(__args, [], {}, [], null, null);
pricing = $.call(parse_tariff_pricing, [Object.assign({}, {["tariffPricing"]: Object.assign({}, {["__typename"]: "TariffPricingResponse"}, {["statusCode"]: "1000"}, {["statusMessage"]: null}, {["timestamp"]: "raw-tariff-timestamp"}, {["data"]: Object.assign({}, {["__typename"]: "TariffPricingData"}, {["locationId"]: "location-1"}, {["maxChargeLimit"]: "80"}, {["tariffDetails"]: [null, Object.assign({}, {["__typename"]: "TariffDetail"}, {["connectorType"]: "CCS"}, {["connectorPower"]: "150 kW"}, {["sessionFee"]: "1.00"}, {["tariffAltText"]: Object.assign({}, {["__typename"]: "TariffAltText"}, {["en"]: "English"}, {["fr"]: null})}, {["idleFees"]: Object.assign({}, {["__typename"]: "IdleFees"}, {["gracePeriod"]: "10"}, {["idleFeesTier"]: [null, Object.assign({}, {["__typename"]: "IdleFeeTier"}, {["congestionLevel"]: "HIGH"}, {["timeStart"]: "08:00"}, {["timeEnd"]: "18:00"}, {["durationStart"]: "0"}, {["durationEnd"]: "60"}, {["durationUnit"]: "MINUTE"}, {["price"]: "0.50"}, {["unit"]: "USD_PER_MINUTE"})]})}, {["congestionFees"]: Object.assign({}, {["__typename"]: "CongestionFees"}, {["gracePeriod"]: null}, {["congestionTier"]: [null, Object.assign({}, {["__typename"]: "CongestionTier"}, {["congestionLevel"]: "MEDIUM"}, {["vehicleSOCLimit"]: "90"}, {["price"]: "2.00"}, {["unit"]: "USD"})]})}, {["energyFees"]: Object.assign({}, {["__typename"]: "EnergyFees"}, {["energyFeeTier"]: [null, Object.assign({}, {["__typename"]: "EnergyFeeTier"}, {["applicableDay"]: [1, 2, 3]}, {["timeStart"]: "00:00"}, {["timeEnd"]: "23:59"}, {["durationStart"]: null}, {["durationEnd"]: null}, {["durationUnit"]: null}, {["minRange"]: "0"}, {["maxRange"]: "100"}, {["rangeUnit"]: "KWH"}, {["price"]: "0.40"}, {["unit"]: "USD_PER_KWH"})]})})]})})})], null);
$.assert(((pricing !== null)), "test_extended_vehicle_reads_part_03.py:197: pricing is not None");
$.assert(($.eq($.attr(pricing, "status_code"), "1000")), "test_extended_vehicle_reads_part_03.py:198: pricing.status_code == '1000'");
$.assert((($.attr(pricing, "status_message") === null)), "test_extended_vehicle_reads_part_03.py:199: pricing.status_message is None");
$.assert(($.eq($.attr(pricing, "timestamp"), "raw-tariff-timestamp")), "test_extended_vehicle_reads_part_03.py:200: pricing.timestamp == 'raw-tariff-timestamp'");
$.assert((($.attr(pricing, "data") !== null)), "test_extended_vehicle_reads_part_03.py:201: pricing.data is not None");
$.assert((($.attr($.attr(pricing, "data"), "tariff_details") !== null)), "test_extended_vehicle_reads_part_03.py:202: pricing.data.tariff_details is not None");
$.assert((($.get($.attr($.attr(pricing, "data"), "tariff_details"), 0) === null)), "test_extended_vehicle_reads_part_03.py:203: pricing.data.tariff_details[0] is None");
detail = $.get($.attr($.attr(pricing, "data"), "tariff_details"), 1);
$.assert(((detail !== null)), "test_extended_vehicle_reads_part_03.py:205: detail is not None");
$.assert((($.attr(detail, "alternative_text") !== null)), "test_extended_vehicle_reads_part_03.py:206: detail.alternative_text is not None");
$.assert((($.attr($.attr(detail, "alternative_text"), "fr") === null)), "test_extended_vehicle_reads_part_03.py:207: detail.alternative_text.fr is None");
$.assert((($.attr(detail, "idle_fees") !== null)), "test_extended_vehicle_reads_part_03.py:208: detail.idle_fees is not None");
$.assert((($.attr($.attr(detail, "idle_fees"), "tiers") !== null)), "test_extended_vehicle_reads_part_03.py:209: detail.idle_fees.tiers is not None");
$.assert((($.get($.attr($.attr(detail, "idle_fees"), "tiers"), 0) === null)), "test_extended_vehicle_reads_part_03.py:210: detail.idle_fees.tiers[0] is None");
$.assert((($.attr(detail, "congestion_fees") !== null)), "test_extended_vehicle_reads_part_03.py:211: detail.congestion_fees is not None");
$.assert((($.attr($.attr(detail, "congestion_fees"), "tiers") !== null)), "test_extended_vehicle_reads_part_03.py:212: detail.congestion_fees.tiers is not None");
$.assert((($.get($.attr($.attr(detail, "congestion_fees"), "tiers"), 0) === null)), "test_extended_vehicle_reads_part_03.py:213: detail.congestion_fees.tiers[0] is None");
$.assert((($.attr(detail, "energy_fees") !== null)), "test_extended_vehicle_reads_part_03.py:214: detail.energy_fees is not None");
$.assert((($.attr($.attr(detail, "energy_fees"), "tiers") !== null)), "test_extended_vehicle_reads_part_03.py:215: detail.energy_fees.tiers is not None");
$.assert((($.get($.attr($.attr(detail, "energy_fees"), "tiers"), 0) === null)), "test_extended_vehicle_reads_part_03.py:216: detail.energy_fees.tiers[0] is None");
energy_tier = $.get($.attr($.attr(detail, "energy_fees"), "tiers"), 1);
$.assert(((energy_tier !== null)), "test_extended_vehicle_reads_part_03.py:218: energy_tier is not None");
$.assert(($.eq($.attr(energy_tier, "applicable_day"), [1, 2, 3])), "test_extended_vehicle_reads_part_03.py:219: energy_tier.applicable_day == (1, 2, 3)");
}

/** Translated upstream test_nullable_roots_fragments_lists_and_items_are_preserved. */
export function test_nullable_roots_fragments_lists_and_items_are_preserved(...__args: any[]): any {
let location_details;
let {} = $.bind(__args, [], {}, [], null, null);
$.assert((($.call(parse_driving_history, [Object.assign({}, {["vehicle"]: null})], null) === null)), "test_extended_vehicle_reads_part_03.py:223: parse_driving_history({'vehicle': None}) is None");
$.assert((($.call(parse_driving_history, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "Vehicle"})})], null) === null)), "test_extended_vehicle_reads_part_03.py:224: parse_driving_history({'vehicle': {'__typename': 'Vehicle'}}) is None");
$.assert((($.call(parse_ev_charge_stations, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricVehicle"}, {["evChargeStations"]: null})})], null) === null)), "test_extended_vehicle_reads_part_03.py:225: parse_ev_charge_stations({'vehicle': {'__typename': 'ElectricVehicle', 'evChargeStations': None}}) is None");
$.assert(($.eq($.call(parse_ev_charge_stations, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricVehicle"}, {["evChargeStations"]: []})})], null), [])), "test_extended_vehicle_reads_part_03.py:236: parse_ev_charge_stations({'vehicle': {'__typename': 'ElectricVehicle', 'evChargeStations': []}}) == ()");
$.assert((($.call(parse_e_vehicle_eligibility, [Object.assign({}, {["eVehicleEligibility"]: null})], null) === null)), "test_extended_vehicle_reads_part_03.py:247: parse_e_vehicle_eligibility({'eVehicleEligibility': None}) is None");
$.assert((($.call(parse_last_known_camera_usage_counter, [Object.assign({}, {["vehicle"]: null})], null) === null)), "test_extended_vehicle_reads_part_03.py:248: parse_last_known_camera_usage_counter({'vehicle': None}) is None");
$.assert((($.call(parse_location_details, [Object.assign({}, {["locationDetails"]: null})], null) === null)), "test_extended_vehicle_reads_part_03.py:249: parse_location_details({'locationDetails': None}) is None");
$.assert((($.call(parse_parking_chargeable, [Object.assign({}, {["parkingChargeable"]: null})], null) === null)), "test_extended_vehicle_reads_part_03.py:250: parse_parking_chargeable({'parkingChargeable': None}) is None");
$.assert((($.call(parse_shareable_capabilities, [Object.assign({}, {["vehicle"]: null})], null) === null)), "test_extended_vehicle_reads_part_03.py:251: parse_shareable_capabilities({'vehicle': None}) is None");
$.assert((($.call(parse_tariff_pricing, [Object.assign({}, {["tariffPricing"]: null})], null) === null)), "test_extended_vehicle_reads_part_03.py:252: parse_tariff_pricing({'tariffPricing': None}) is None");
location_details = $.call(parse_location_details, [Object.assign({}, {["locationDetails"]: Object.assign({}, {["__typename"]: "LocationDetailsResponse"}, {["statusCode"]: null}, {["statusMessage"]: null}, {["timestamp"]: null}, {["data"]: null})})], null);
$.assert(((location_details !== null)), "test_extended_vehicle_reads_part_03.py:265: location_details is not None");
$.assert((($.attr(location_details, "data") === null)), "test_extended_vehicle_reads_part_03.py:266: location_details.data is None");
}

$.register("test_extended_vehicle_reads_part_03.py::test_location_details_preserves_emp_status_and_nested_nullable_lists", test_location_details_preserves_emp_status_and_nested_nullable_lists, []);

$.register("test_extended_vehicle_reads_part_03.py::test_tariff_pricing_preserves_raw_status_and_every_nullable_tier_list", test_tariff_pricing_preserves_raw_status_and_every_nullable_tier_list, []);

$.register("test_extended_vehicle_reads_part_03.py::test_nullable_roots_fragments_lists_and_items_are_preserved", test_nullable_roots_fragments_lists_and_items_are_preserved, []);
