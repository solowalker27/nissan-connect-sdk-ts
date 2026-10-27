"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TariffPricingData = exports.TariffLocalizedText = exports.TariffIdleFeeTier = exports.TariffIdleFees = exports.TariffEnergyFeeTier = exports.TariffEnergyFees = exports.TariffDetail = exports.TariffCongestionFeeTier = exports.TariffCongestionFees = exports.ShareableCapabilityGroup = exports.ShareableCapability = exports._typed_object = exports._string = exports._parse_nullable_int_items = exports._optional_typed_object = exports._nullable_string = exports._nullable_list = exports._nullable_bool = exports._list = void 0;
exports._parse_shareable_capability_group = _parse_shareable_capability_group;
exports._parse_tariff_pricing_data = _parse_tariff_pricing_data;
exports._parse_tariff_detail = _parse_tariff_detail;
exports._parse_optional_tariff_text = _parse_optional_tariff_text;
exports._parse_optional_idle_fees = _parse_optional_idle_fees;
exports._parse_idle_fee_tier = _parse_idle_fee_tier;
exports._parse_optional_congestion_fees = _parse_optional_congestion_fees;
exports._parse_congestion_fee_tier = _parse_congestion_fee_tier;
exports._parse_optional_energy_fees = _parse_optional_energy_fees;
exports._parse_energy_fee_tier = _parse_energy_fee_tier;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _extended_vehicle_value_parsing_1 = require("./_extended_vehicle_value_parsing");
Object.defineProperty(exports, "_list", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._list; } });
Object.defineProperty(exports, "_nullable_bool", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_bool; } });
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_nullable_string", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_string; } });
Object.defineProperty(exports, "_optional_typed_object", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._optional_typed_object; } });
Object.defineProperty(exports, "_parse_nullable_int_items", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._parse_nullable_int_items; } });
Object.defineProperty(exports, "_string", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._string; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._typed_object; } });
const extended_vehicle_models_1 = require("./extended_vehicle_models");
Object.defineProperty(exports, "ShareableCapability", { enumerable: true, get: function () { return extended_vehicle_models_1.ShareableCapability; } });
Object.defineProperty(exports, "ShareableCapabilityGroup", { enumerable: true, get: function () { return extended_vehicle_models_1.ShareableCapabilityGroup; } });
Object.defineProperty(exports, "TariffCongestionFees", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffCongestionFees; } });
Object.defineProperty(exports, "TariffCongestionFeeTier", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffCongestionFeeTier; } });
Object.defineProperty(exports, "TariffDetail", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffDetail; } });
Object.defineProperty(exports, "TariffEnergyFees", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffEnergyFees; } });
Object.defineProperty(exports, "TariffEnergyFeeTier", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffEnergyFeeTier; } });
Object.defineProperty(exports, "TariffIdleFees", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffIdleFees; } });
Object.defineProperty(exports, "TariffIdleFeeTier", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffIdleFeeTier; } });
Object.defineProperty(exports, "TariffLocalizedText", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffLocalizedText; } });
Object.defineProperty(exports, "TariffPricingData", { enumerable: true, get: function () { return extended_vehicle_models_1.TariffPricingData; } });
/** Translated upstream _parse_shareable_capability_group. */
function _parse_shareable_capability_group(...__args) {
    let capabilities, capability, group, index, item_path, raw_capabilities, raw_capability;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    group = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    raw_capabilities = _runtime_1.py.call(_extended_vehicle_value_parsing_1._list, [_runtime_1.py.call(_runtime_1.py.attr(group, "get"), ["capabilities"], null), (_runtime_1.py.str(path) + ".capabilities")], null);
    capabilities = [];
    for ([index, raw_capability] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_capabilities], null))) {
        if (_runtime_1.py.truth(((raw_capability === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(capabilities, "append"), [null], null);
            continue;
        }
        item_path = (_runtime_1.py.str(path) + ".capabilities[" + _runtime_1.py.str(index) + "]");
        capability = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [raw_capability, item_path], null);
        _runtime_1.py.call(_runtime_1.py.attr(capabilities, "append"), [_runtime_1.py.call(extended_vehicle_models_1.ShareableCapability, [], Object.assign({}, { "id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(capability, "get"), ["id"], null), (_runtime_1.py.str(item_path) + ".id")], null) }, { "name": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(capability, "get"), ["name"], null), (_runtime_1.py.str(item_path) + ".name")], null) }, { "shareable": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(capability, "get"), ["shareable"], null), (_runtime_1.py.str(item_path) + ".shareable")], null) }))], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.ShareableCapabilityGroup, [], Object.assign({}, { "id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._string, [_runtime_1.py.call(_runtime_1.py.attr(group, "get"), ["id"], null), (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(group, "get"), ["name"], null), (_runtime_1.py.str(path) + ".name")], null) }, { "shared": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(group, "get"), ["shared"], null), (_runtime_1.py.str(path) + ".shared")], null) }, { "capabilities": _runtime_1.py.call(_runtime_1.py.tuple, [capabilities], null) }));
}
/** Translated upstream _parse_tariff_pricing_data. */
function _parse_tariff_pricing_data(...__args) {
    let details, index, parsed_details, raw_detail, raw_details;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_details = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["tariffDetails"], null), (_runtime_1.py.str(path) + ".tariffDetails")], null);
    details = null;
    if (_runtime_1.py.truth(((raw_details !== null)))) {
        parsed_details = [];
        for ([index, raw_detail] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_details], null))) {
            if (_runtime_1.py.truth(((raw_detail === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_details, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_details, "append"), [_runtime_1.py.call(_parse_tariff_detail, [raw_detail, (_runtime_1.py.str(path) + ".tariffDetails[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        details = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_details], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.TariffPricingData, [], Object.assign({}, { "location_id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["locationId"], null), (_runtime_1.py.str(path) + ".locationId")], null) }, { "max_charge_limit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["maxChargeLimit"], null), (_runtime_1.py.str(path) + ".maxChargeLimit")], null) }, { "tariff_details": details }));
}
/** Translated upstream _parse_tariff_detail. */
function _parse_tariff_detail(...__args) {
    let detail;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    detail = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(extended_vehicle_models_1.TariffDetail, [], Object.assign({}, { "connector_type": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(detail, "get"), ["connectorType"], null), (_runtime_1.py.str(path) + ".connectorType")], null) }, { "connector_power": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(detail, "get"), ["connectorPower"], null), (_runtime_1.py.str(path) + ".connectorPower")], null) }, { "session_fee": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(detail, "get"), ["sessionFee"], null), (_runtime_1.py.str(path) + ".sessionFee")], null) }, { "alternative_text": _runtime_1.py.call(_parse_optional_tariff_text, [_runtime_1.py.call(_runtime_1.py.attr(detail, "get"), ["tariffAltText"], null), (_runtime_1.py.str(path) + ".tariffAltText")], null) }, { "idle_fees": _runtime_1.py.call(_parse_optional_idle_fees, [_runtime_1.py.call(_runtime_1.py.attr(detail, "get"), ["idleFees"], null), (_runtime_1.py.str(path) + ".idleFees")], null) }, { "congestion_fees": _runtime_1.py.call(_parse_optional_congestion_fees, [_runtime_1.py.call(_runtime_1.py.attr(detail, "get"), ["congestionFees"], null), (_runtime_1.py.str(path) + ".congestionFees")], null) }, { "energy_fees": _runtime_1.py.call(_parse_optional_energy_fees, [_runtime_1.py.call(_runtime_1.py.attr(detail, "get"), ["energyFees"], null), (_runtime_1.py.str(path) + ".energyFees")], null) }));
}
/** Translated upstream _parse_optional_tariff_text. */
function _parse_optional_tariff_text(...__args) {
    let text;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    text = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((text === null)))) {
        return null;
    }
    return _runtime_1.py.call(extended_vehicle_models_1.TariffLocalizedText, [], Object.assign({}, { "en": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(text, "get"), ["en"], null), (_runtime_1.py.str(path) + ".en")], null) }, { "fr": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(text, "get"), ["fr"], null), (_runtime_1.py.str(path) + ".fr")], null) }));
}
/** Translated upstream _parse_optional_idle_fees. */
function _parse_optional_idle_fees(...__args) {
    let fees, index, parsed_tiers, raw_tier, raw_tiers, tiers;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    fees = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((fees === null)))) {
        return null;
    }
    raw_tiers = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(fees, "get"), ["idleFeesTier"], null), (_runtime_1.py.str(path) + ".idleFeesTier")], null);
    tiers = null;
    if (_runtime_1.py.truth(((raw_tiers !== null)))) {
        parsed_tiers = [];
        for ([index, raw_tier] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_tiers], null))) {
            if (_runtime_1.py.truth(((raw_tier === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_tiers, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_tiers, "append"), [_runtime_1.py.call(_parse_idle_fee_tier, [raw_tier, (_runtime_1.py.str(path) + ".idleFeesTier[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        tiers = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_tiers], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.TariffIdleFees, [], Object.assign({}, { "grace_period": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(fees, "get"), ["gracePeriod"], null), (_runtime_1.py.str(path) + ".gracePeriod")], null) }, { "tiers": tiers }));
}
/** Translated upstream _parse_idle_fee_tier. */
function _parse_idle_fee_tier(...__args) {
    let tier;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    tier = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(extended_vehicle_models_1.TariffIdleFeeTier, [], Object.assign({}, { "congestion_level": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["congestionLevel"], null), (_runtime_1.py.str(path) + ".congestionLevel")], null) }, { "time_start": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["timeStart"], null), (_runtime_1.py.str(path) + ".timeStart")], null) }, { "time_end": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["timeEnd"], null), (_runtime_1.py.str(path) + ".timeEnd")], null) }, { "duration_start": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["durationStart"], null), (_runtime_1.py.str(path) + ".durationStart")], null) }, { "duration_end": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["durationEnd"], null), (_runtime_1.py.str(path) + ".durationEnd")], null) }, { "duration_unit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["durationUnit"], null), (_runtime_1.py.str(path) + ".durationUnit")], null) }, { "price": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["price"], null), (_runtime_1.py.str(path) + ".price")], null) }, { "unit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["unit"], null), (_runtime_1.py.str(path) + ".unit")], null) }));
}
/** Translated upstream _parse_optional_congestion_fees. */
function _parse_optional_congestion_fees(...__args) {
    let fees, index, parsed_tiers, raw_tier, raw_tiers, tiers;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    fees = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((fees === null)))) {
        return null;
    }
    raw_tiers = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(fees, "get"), ["congestionTier"], null), (_runtime_1.py.str(path) + ".congestionTier")], null);
    tiers = null;
    if (_runtime_1.py.truth(((raw_tiers !== null)))) {
        parsed_tiers = [];
        for ([index, raw_tier] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_tiers], null))) {
            if (_runtime_1.py.truth(((raw_tier === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_tiers, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_tiers, "append"), [_runtime_1.py.call(_parse_congestion_fee_tier, [raw_tier, (_runtime_1.py.str(path) + ".congestionTier[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        tiers = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_tiers], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.TariffCongestionFees, [], Object.assign({}, { "grace_period": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(fees, "get"), ["gracePeriod"], null), (_runtime_1.py.str(path) + ".gracePeriod")], null) }, { "tiers": tiers }));
}
/** Translated upstream _parse_congestion_fee_tier. */
function _parse_congestion_fee_tier(...__args) {
    let tier;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    tier = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(extended_vehicle_models_1.TariffCongestionFeeTier, [], Object.assign({}, { "congestion_level": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["congestionLevel"], null), (_runtime_1.py.str(path) + ".congestionLevel")], null) }, { "vehicle_soc_limit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["vehicleSOCLimit"], null), (_runtime_1.py.str(path) + ".vehicleSOCLimit")], null) }, { "price": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["price"], null), (_runtime_1.py.str(path) + ".price")], null) }, { "unit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["unit"], null), (_runtime_1.py.str(path) + ".unit")], null) }));
}
/** Translated upstream _parse_optional_energy_fees. */
function _parse_optional_energy_fees(...__args) {
    let fees, index, parsed_tiers, raw_tier, raw_tiers, tiers;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    fees = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((fees === null)))) {
        return null;
    }
    raw_tiers = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(fees, "get"), ["energyFeeTier"], null), (_runtime_1.py.str(path) + ".energyFeeTier")], null);
    tiers = null;
    if (_runtime_1.py.truth(((raw_tiers !== null)))) {
        parsed_tiers = [];
        for ([index, raw_tier] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_tiers], null))) {
            if (_runtime_1.py.truth(((raw_tier === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_tiers, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_tiers, "append"), [_runtime_1.py.call(_parse_energy_fee_tier, [raw_tier, (_runtime_1.py.str(path) + ".energyFeeTier[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        tiers = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_tiers], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.TariffEnergyFees, [], Object.assign({}, { "tiers": tiers }));
}
/** Translated upstream _parse_energy_fee_tier. */
function _parse_energy_fee_tier(...__args) {
    let applicable_day, tier;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    tier = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    applicable_day = _runtime_1.py.call(_extended_vehicle_value_parsing_1._parse_nullable_int_items, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["applicableDay"], null), (_runtime_1.py.str(path) + ".applicableDay")], null);
    return _runtime_1.py.call(extended_vehicle_models_1.TariffEnergyFeeTier, [], Object.assign({}, { "applicable_day": applicable_day }, { "time_start": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["timeStart"], null), (_runtime_1.py.str(path) + ".timeStart")], null) }, { "time_end": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["timeEnd"], null), (_runtime_1.py.str(path) + ".timeEnd")], null) }, { "duration_start": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["durationStart"], null), (_runtime_1.py.str(path) + ".durationStart")], null) }, { "duration_end": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["durationEnd"], null), (_runtime_1.py.str(path) + ".durationEnd")], null) }, { "duration_unit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["durationUnit"], null), (_runtime_1.py.str(path) + ".durationUnit")], null) }, { "min_range": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["minRange"], null), (_runtime_1.py.str(path) + ".minRange")], null) }, { "max_range": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["maxRange"], null), (_runtime_1.py.str(path) + ".maxRange")], null) }, { "range_unit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["rangeUnit"], null), (_runtime_1.py.str(path) + ".rangeUnit")], null) }, { "price": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["price"], null), (_runtime_1.py.str(path) + ".price")], null) }, { "unit": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(tier, "get"), ["unit"], null), (_runtime_1.py.str(path) + ".unit")], null) }));
}
//# sourceMappingURL=_extended_vehicle_tariff_parsing.js.map