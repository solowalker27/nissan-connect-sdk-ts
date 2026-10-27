// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _list, _nullable_bool, _nullable_list, _nullable_string, _optional_typed_object, _parse_nullable_int_items, _string, _typed_object } from "./_extended_vehicle_value_parsing";
export { _list, _nullable_bool, _nullable_list, _nullable_string, _optional_typed_object, _parse_nullable_int_items, _string, _typed_object };

import { ShareableCapability, ShareableCapabilityGroup, TariffCongestionFees, TariffCongestionFeeTier, TariffDetail, TariffEnergyFees, TariffEnergyFeeTier, TariffIdleFees, TariffIdleFeeTier, TariffLocalizedText, TariffPricingData } from "./extended_vehicle_models";
export { ShareableCapability, ShareableCapabilityGroup, TariffCongestionFees, TariffCongestionFeeTier, TariffDetail, TariffEnergyFees, TariffEnergyFeeTier, TariffIdleFees, TariffIdleFeeTier, TariffLocalizedText, TariffPricingData };

export function _parse_shareable_capability_group(value: unknown, path: string): ShareableCapabilityGroup;
/** Translated upstream _parse_shareable_capability_group. */
export function _parse_shareable_capability_group(...__args: any[]): any {
let capabilities, capability, group, index, item_path, raw_capabilities, raw_capability;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
group = $.call(_typed_object, [value, path], null);
raw_capabilities = $.call(_list, [$.call($.attr(group, "get"), ["capabilities"], null), ($.str(path) + ".capabilities")], null);
capabilities = [];
for ([index, raw_capability] of $.iterable($.call($.enumerate, [raw_capabilities], null))) {
if ($.truth(((raw_capability === null)))) {
$.call($.attr(capabilities, "append"), [null], null);
continue;
}
item_path = ($.str(path) + ".capabilities[" + $.str(index) + "]");
capability = $.call(_typed_object, [raw_capability, item_path], null);
$.call($.attr(capabilities, "append"), [$.call(ShareableCapability, [], Object.assign({}, {"id": $.call(_string, [$.call($.attr(capability, "get"), ["id"], null), ($.str(item_path) + ".id")], null)}, {"name": $.call(_nullable_string, [$.call($.attr(capability, "get"), ["name"], null), ($.str(item_path) + ".name")], null)}, {"shareable": $.call(_nullable_bool, [$.call($.attr(capability, "get"), ["shareable"], null), ($.str(item_path) + ".shareable")], null)}))], null);
}
return $.call(ShareableCapabilityGroup, [], Object.assign({}, {"id": $.call(_string, [$.call($.attr(group, "get"), ["id"], null), ($.str(path) + ".id")], null)}, {"name": $.call(_nullable_string, [$.call($.attr(group, "get"), ["name"], null), ($.str(path) + ".name")], null)}, {"shared": $.call(_nullable_bool, [$.call($.attr(group, "get"), ["shared"], null), ($.str(path) + ".shared")], null)}, {"capabilities": $.call($.tuple, [capabilities], null)}));
}

export function _parse_tariff_pricing_data(value: Record<string, unknown>, path: string): TariffPricingData;
/** Translated upstream _parse_tariff_pricing_data. */
export function _parse_tariff_pricing_data(...__args: any[]): any {
let details, index, parsed_details, raw_detail, raw_details;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_details = $.call(_nullable_list, [$.call($.attr(value, "get"), ["tariffDetails"], null), ($.str(path) + ".tariffDetails")], null);
details = null;
if ($.truth(((raw_details !== null)))) {
parsed_details = [];
for ([index, raw_detail] of $.iterable($.call($.enumerate, [raw_details], null))) {
if ($.truth(((raw_detail === null)))) {
$.call($.attr(parsed_details, "append"), [null], null);
continue;
}
$.call($.attr(parsed_details, "append"), [$.call(_parse_tariff_detail, [raw_detail, ($.str(path) + ".tariffDetails[" + $.str(index) + "]")], null)], null);
}
details = $.call($.tuple, [parsed_details], null);
}
return $.call(TariffPricingData, [], Object.assign({}, {"location_id": $.call(_nullable_string, [$.call($.attr(value, "get"), ["locationId"], null), ($.str(path) + ".locationId")], null)}, {"max_charge_limit": $.call(_nullable_string, [$.call($.attr(value, "get"), ["maxChargeLimit"], null), ($.str(path) + ".maxChargeLimit")], null)}, {"tariff_details": details}));
}

export function _parse_tariff_detail(value: unknown, path: string): TariffDetail;
/** Translated upstream _parse_tariff_detail. */
export function _parse_tariff_detail(...__args: any[]): any {
let detail;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
detail = $.call(_typed_object, [value, path], null);
return $.call(TariffDetail, [], Object.assign({}, {"connector_type": $.call(_nullable_string, [$.call($.attr(detail, "get"), ["connectorType"], null), ($.str(path) + ".connectorType")], null)}, {"connector_power": $.call(_nullable_string, [$.call($.attr(detail, "get"), ["connectorPower"], null), ($.str(path) + ".connectorPower")], null)}, {"session_fee": $.call(_nullable_string, [$.call($.attr(detail, "get"), ["sessionFee"], null), ($.str(path) + ".sessionFee")], null)}, {"alternative_text": $.call(_parse_optional_tariff_text, [$.call($.attr(detail, "get"), ["tariffAltText"], null), ($.str(path) + ".tariffAltText")], null)}, {"idle_fees": $.call(_parse_optional_idle_fees, [$.call($.attr(detail, "get"), ["idleFees"], null), ($.str(path) + ".idleFees")], null)}, {"congestion_fees": $.call(_parse_optional_congestion_fees, [$.call($.attr(detail, "get"), ["congestionFees"], null), ($.str(path) + ".congestionFees")], null)}, {"energy_fees": $.call(_parse_optional_energy_fees, [$.call($.attr(detail, "get"), ["energyFees"], null), ($.str(path) + ".energyFees")], null)}));
}

export function _parse_optional_tariff_text(value: unknown, path: string): TariffLocalizedText | null;
/** Translated upstream _parse_optional_tariff_text. */
export function _parse_optional_tariff_text(...__args: any[]): any {
let text;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
text = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((text === null)))) {
return null;
}
return $.call(TariffLocalizedText, [], Object.assign({}, {"en": $.call(_nullable_string, [$.call($.attr(text, "get"), ["en"], null), ($.str(path) + ".en")], null)}, {"fr": $.call(_nullable_string, [$.call($.attr(text, "get"), ["fr"], null), ($.str(path) + ".fr")], null)}));
}

export function _parse_optional_idle_fees(value: unknown, path: string): TariffIdleFees | null;
/** Translated upstream _parse_optional_idle_fees. */
export function _parse_optional_idle_fees(...__args: any[]): any {
let fees, index, parsed_tiers, raw_tier, raw_tiers, tiers;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
fees = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((fees === null)))) {
return null;
}
raw_tiers = $.call(_nullable_list, [$.call($.attr(fees, "get"), ["idleFeesTier"], null), ($.str(path) + ".idleFeesTier")], null);
tiers = null;
if ($.truth(((raw_tiers !== null)))) {
parsed_tiers = [];
for ([index, raw_tier] of $.iterable($.call($.enumerate, [raw_tiers], null))) {
if ($.truth(((raw_tier === null)))) {
$.call($.attr(parsed_tiers, "append"), [null], null);
continue;
}
$.call($.attr(parsed_tiers, "append"), [$.call(_parse_idle_fee_tier, [raw_tier, ($.str(path) + ".idleFeesTier[" + $.str(index) + "]")], null)], null);
}
tiers = $.call($.tuple, [parsed_tiers], null);
}
return $.call(TariffIdleFees, [], Object.assign({}, {"grace_period": $.call(_nullable_string, [$.call($.attr(fees, "get"), ["gracePeriod"], null), ($.str(path) + ".gracePeriod")], null)}, {"tiers": tiers}));
}

export function _parse_idle_fee_tier(value: unknown, path: string): TariffIdleFeeTier;
/** Translated upstream _parse_idle_fee_tier. */
export function _parse_idle_fee_tier(...__args: any[]): any {
let tier;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
tier = $.call(_typed_object, [value, path], null);
return $.call(TariffIdleFeeTier, [], Object.assign({}, {"congestion_level": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["congestionLevel"], null), ($.str(path) + ".congestionLevel")], null)}, {"time_start": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["timeStart"], null), ($.str(path) + ".timeStart")], null)}, {"time_end": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["timeEnd"], null), ($.str(path) + ".timeEnd")], null)}, {"duration_start": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["durationStart"], null), ($.str(path) + ".durationStart")], null)}, {"duration_end": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["durationEnd"], null), ($.str(path) + ".durationEnd")], null)}, {"duration_unit": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["durationUnit"], null), ($.str(path) + ".durationUnit")], null)}, {"price": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["price"], null), ($.str(path) + ".price")], null)}, {"unit": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["unit"], null), ($.str(path) + ".unit")], null)}));
}

export function _parse_optional_congestion_fees(value: unknown, path: string): TariffCongestionFees | null;
/** Translated upstream _parse_optional_congestion_fees. */
export function _parse_optional_congestion_fees(...__args: any[]): any {
let fees, index, parsed_tiers, raw_tier, raw_tiers, tiers;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
fees = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((fees === null)))) {
return null;
}
raw_tiers = $.call(_nullable_list, [$.call($.attr(fees, "get"), ["congestionTier"], null), ($.str(path) + ".congestionTier")], null);
tiers = null;
if ($.truth(((raw_tiers !== null)))) {
parsed_tiers = [];
for ([index, raw_tier] of $.iterable($.call($.enumerate, [raw_tiers], null))) {
if ($.truth(((raw_tier === null)))) {
$.call($.attr(parsed_tiers, "append"), [null], null);
continue;
}
$.call($.attr(parsed_tiers, "append"), [$.call(_parse_congestion_fee_tier, [raw_tier, ($.str(path) + ".congestionTier[" + $.str(index) + "]")], null)], null);
}
tiers = $.call($.tuple, [parsed_tiers], null);
}
return $.call(TariffCongestionFees, [], Object.assign({}, {"grace_period": $.call(_nullable_string, [$.call($.attr(fees, "get"), ["gracePeriod"], null), ($.str(path) + ".gracePeriod")], null)}, {"tiers": tiers}));
}

export function _parse_congestion_fee_tier(value: unknown, path: string): TariffCongestionFeeTier;
/** Translated upstream _parse_congestion_fee_tier. */
export function _parse_congestion_fee_tier(...__args: any[]): any {
let tier;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
tier = $.call(_typed_object, [value, path], null);
return $.call(TariffCongestionFeeTier, [], Object.assign({}, {"congestion_level": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["congestionLevel"], null), ($.str(path) + ".congestionLevel")], null)}, {"vehicle_soc_limit": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["vehicleSOCLimit"], null), ($.str(path) + ".vehicleSOCLimit")], null)}, {"price": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["price"], null), ($.str(path) + ".price")], null)}, {"unit": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["unit"], null), ($.str(path) + ".unit")], null)}));
}

export function _parse_optional_energy_fees(value: unknown, path: string): TariffEnergyFees | null;
/** Translated upstream _parse_optional_energy_fees. */
export function _parse_optional_energy_fees(...__args: any[]): any {
let fees, index, parsed_tiers, raw_tier, raw_tiers, tiers;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
fees = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((fees === null)))) {
return null;
}
raw_tiers = $.call(_nullable_list, [$.call($.attr(fees, "get"), ["energyFeeTier"], null), ($.str(path) + ".energyFeeTier")], null);
tiers = null;
if ($.truth(((raw_tiers !== null)))) {
parsed_tiers = [];
for ([index, raw_tier] of $.iterable($.call($.enumerate, [raw_tiers], null))) {
if ($.truth(((raw_tier === null)))) {
$.call($.attr(parsed_tiers, "append"), [null], null);
continue;
}
$.call($.attr(parsed_tiers, "append"), [$.call(_parse_energy_fee_tier, [raw_tier, ($.str(path) + ".energyFeeTier[" + $.str(index) + "]")], null)], null);
}
tiers = $.call($.tuple, [parsed_tiers], null);
}
return $.call(TariffEnergyFees, [], Object.assign({}, {"tiers": tiers}));
}

export function _parse_energy_fee_tier(value: unknown, path: string): TariffEnergyFeeTier;
/** Translated upstream _parse_energy_fee_tier. */
export function _parse_energy_fee_tier(...__args: any[]): any {
let applicable_day, tier;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
tier = $.call(_typed_object, [value, path], null);
applicable_day = $.call(_parse_nullable_int_items, [$.call($.attr(tier, "get"), ["applicableDay"], null), ($.str(path) + ".applicableDay")], null);
return $.call(TariffEnergyFeeTier, [], Object.assign({}, {"applicable_day": applicable_day}, {"time_start": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["timeStart"], null), ($.str(path) + ".timeStart")], null)}, {"time_end": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["timeEnd"], null), ($.str(path) + ".timeEnd")], null)}, {"duration_start": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["durationStart"], null), ($.str(path) + ".durationStart")], null)}, {"duration_end": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["durationEnd"], null), ($.str(path) + ".durationEnd")], null)}, {"duration_unit": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["durationUnit"], null), ($.str(path) + ".durationUnit")], null)}, {"min_range": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["minRange"], null), ($.str(path) + ".minRange")], null)}, {"max_range": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["maxRange"], null), ($.str(path) + ".maxRange")], null)}, {"range_unit": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["rangeUnit"], null), ($.str(path) + ".rangeUnit")], null)}, {"price": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["price"], null), ($.str(path) + ".price")], null)}, {"unit": $.call(_nullable_string, [$.call($.attr(tier, "get"), ["unit"], null), ($.str(path) + ".unit")], null)}));
}
