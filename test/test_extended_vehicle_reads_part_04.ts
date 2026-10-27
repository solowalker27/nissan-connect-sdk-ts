// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const pytest = $.pytest;

import { ResponseError } from "../src/index";

import { parse_driving_history, parse_e_vehicle_eligibility, parse_last_known_camera_usage_counter, parse_location_details, parse_shareable_capabilities, parse_tariff_pricing } from "../src/extended_vehicle_parsing";

/** Translated upstream test_non_null_driving_history_and_shareable_lists_are_enforced. */
export function test_non_null_driving_history_and_shareable_lists_are_enforced(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.raises(ResponseError, "tripSummaries is not a list", () => {
$.call(parse_driving_history, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricVehicle"}, {["drivingHistory"]: Object.assign({}, {["__typename"]: "DrivingHistory"}, {["tripSummaries"]: null}, {["trips"]: []})})})], null);
});
$.raises(ResponseError, "tripSummaries\\[0\\] is not an object", () => {
$.call(parse_driving_history, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricVehicle"}, {["drivingHistory"]: Object.assign({}, {["__typename"]: "DrivingHistory"}, {["tripSummaries"]: [null]}, {["trips"]: []})})})], null);
});
$.raises(ResponseError, "shareableCapabilities.group is not a list", () => {
$.call(parse_shareable_capabilities, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["shareableCapabilities"]: Object.assign({}, {["__typename"]: "ShareableCapabilities"}, {["group"]: null})})})], null);
});
$.raises(ResponseError, "capabilities is not a list", () => {
$.call(parse_shareable_capabilities, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["shareableCapabilities"]: Object.assign({}, {["__typename"]: "ShareableCapabilities"}, {["group"]: [Object.assign({}, {["__typename"]: "CapabilityGroup"}, {["id"]: "group-1"}, {["name"]: null}, {["shared"]: null}, {["capabilities"]: null})]})})})], null);
});
}

/** Translated upstream test_nullable_nested_list_items_are_preserved. */
export function test_nullable_nested_list_items_are_preserved(...__args: any[]): any {
let detail, evse, location, location_details, tariff_pricing, tier;
let {} = $.bind(__args, [], {}, [], null, null);
location_details = $.call(parse_location_details, [Object.assign({}, {["locationDetails"]: Object.assign({}, {["__typename"]: "LocationDetailsResponse"}, {["statusCode"]: null}, {["statusMessage"]: null}, {["timestamp"]: null}, {["data"]: [Object.assign({}, {["__typename"]: "LocationData"}, {["evses"]: [Object.assign({}, {["__typename"]: "Evse"}, {["evseCapability"]: [null, "REMOTE_START"]})]})]})})], null);
$.assert(((location_details !== null)), "test_extended_vehicle_reads_part_04.py:102: location_details is not None");
$.assert((($.attr(location_details, "data") !== null)), "test_extended_vehicle_reads_part_04.py:103: location_details.data is not None");
location = $.get($.attr(location_details, "data"), 0);
$.assert(((location !== null)), "test_extended_vehicle_reads_part_04.py:105: location is not None");
$.assert((($.attr(location, "evses") !== null)), "test_extended_vehicle_reads_part_04.py:106: location.evses is not None");
evse = $.get($.attr(location, "evses"), 0);
$.assert(((evse !== null)), "test_extended_vehicle_reads_part_04.py:108: evse is not None");
$.assertEqual($.attr(evse, "evse_capability"), [null, "REMOTE_START"], "test_extended_vehicle_reads_part_04.py:109: evse.evse_capability == (None, 'REMOTE_START')");
tariff_pricing = $.call(parse_tariff_pricing, [Object.assign({}, {["tariffPricing"]: Object.assign({}, {["__typename"]: "TariffPricingResponse"}, {["statusCode"]: null}, {["statusMessage"]: null}, {["timestamp"]: null}, {["data"]: Object.assign({}, {["__typename"]: "TariffPricingData"}, {["tariffDetails"]: [Object.assign({}, {["__typename"]: "TariffDetail"}, {["energyFees"]: Object.assign({}, {["__typename"]: "EnergyFees"}, {["energyFeeTier"]: [Object.assign({}, {["__typename"]: "EnergyFeeTier"}, {["applicableDay"]: [1, null]})]})})]})})})], null);
$.assert(((tariff_pricing !== null)), "test_extended_vehicle_reads_part_04.py:138: tariff_pricing is not None");
$.assert((($.attr(tariff_pricing, "data") !== null)), "test_extended_vehicle_reads_part_04.py:139: tariff_pricing.data is not None");
$.assert((($.attr($.attr(tariff_pricing, "data"), "tariff_details") !== null)), "test_extended_vehicle_reads_part_04.py:140: tariff_pricing.data.tariff_details is not None");
detail = $.get($.attr($.attr(tariff_pricing, "data"), "tariff_details"), 0);
$.assert(((detail !== null)), "test_extended_vehicle_reads_part_04.py:142: detail is not None");
$.assert((($.attr(detail, "energy_fees") !== null)), "test_extended_vehicle_reads_part_04.py:143: detail.energy_fees is not None");
$.assert((($.attr($.attr(detail, "energy_fees"), "tiers") !== null)), "test_extended_vehicle_reads_part_04.py:144: detail.energy_fees.tiers is not None");
tier = $.get($.attr($.attr(detail, "energy_fees"), "tiers"), 0);
$.assert(((tier !== null)), "test_extended_vehicle_reads_part_04.py:146: tier is not None");
$.assertEqual($.attr(tier, "applicable_day"), [1, null], "test_extended_vehicle_reads_part_04.py:147: tier.applicable_day == (1, None)");
}

/** Translated upstream test_extended_parsers_reject_naive_datetime_and_wrong_nullable_scalar_type. */
export function test_extended_parsers_reject_naive_datetime_and_wrong_nullable_scalar_type(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.raises(ResponseError, "date-time with an offset", () => {
$.call(parse_last_known_camera_usage_counter, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["lastKnownCameraUsageCounter"]: Object.assign({}, {["__typename"]: "CameraUsageCounter"}, {["counter"]: null}, {["lastUpdateTime"]: "2026-07-31T19:30:00"})})})], null);
});
$.raises(ResponseError, "statusCode is not a string", () => {
$.call(parse_e_vehicle_eligibility, [Object.assign({}, {["eVehicleEligibility"]: Object.assign({}, {["__typename"]: "EVehicleEligibilityResponse"}, {["statusCode"]: 1000}, {["statusMessage"]: null}, {["timestamp"]: null}, {["data"]: null})})], null);
});
}

$.register("test_extended_vehicle_reads_part_04.py::test_non_null_driving_history_and_shareable_lists_are_enforced", test_non_null_driving_history_and_shareable_lists_are_enforced, []);

$.register("test_extended_vehicle_reads_part_04.py::test_nullable_nested_list_items_are_preserved", test_nullable_nested_list_items_are_preserved, []);

$.register("test_extended_vehicle_reads_part_04.py::test_extended_parsers_reject_naive_datetime_and_wrong_nullable_scalar_type", test_extended_parsers_reject_naive_datetime_and_wrong_nullable_scalar_type, []);
