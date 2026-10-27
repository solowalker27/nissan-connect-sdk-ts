"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NissanStoreCatalogSellingModel = exports.NissanStoreCatalogPromotion = exports.NissanStoreCatalogPackage = exports.NissanStoreCatalogChildProduct = exports._required_nullable_string = exports._required_nullable_int = exports._required_nullable_bool = exports._required_nullable_float = exports._parse_nullable_object_list = void 0;
exports._parse_catalog_package = _parse_catalog_package;
exports._parse_catalog_selling_model = _parse_catalog_selling_model;
exports._parse_catalog_child_product = _parse_catalog_child_product;
exports._parse_catalog_promotion = _parse_catalog_promotion;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _commerce_value_parsing_1 = require("./_commerce_value_parsing");
Object.defineProperty(exports, "_parse_nullable_object_list", { enumerable: true, get: function () { return _commerce_value_parsing_1._parse_nullable_object_list; } });
Object.defineProperty(exports, "_required_nullable_float", { enumerable: true, get: function () { return _commerce_value_parsing_1._required_nullable_float; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return account_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
const commerce_models_1 = require("./commerce_models");
Object.defineProperty(exports, "NissanStoreCatalogChildProduct", { enumerable: true, get: function () { return commerce_models_1.NissanStoreCatalogChildProduct; } });
Object.defineProperty(exports, "NissanStoreCatalogPackage", { enumerable: true, get: function () { return commerce_models_1.NissanStoreCatalogPackage; } });
Object.defineProperty(exports, "NissanStoreCatalogPromotion", { enumerable: true, get: function () { return commerce_models_1.NissanStoreCatalogPromotion; } });
Object.defineProperty(exports, "NissanStoreCatalogSellingModel", { enumerable: true, get: function () { return commerce_models_1.NissanStoreCatalogSellingModel; } });
/** Translated upstream _parse_catalog_package. */
function _parse_catalog_package(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(commerce_models_1.NissanStoreCatalogPackage, [], Object.assign({}, { "short_description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "shortDescription", (_runtime_1.py.str(path) + ".shortDescription")], null) }, { "trial_duration": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "npTrialDuration", (_runtime_1.py.str(path) + ".npTrialDuration")], null) }, { "product_image_url": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "productImageUrl", (_runtime_1.py.str(path) + ".productImageUrl")], null) }, { "long_description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "longDescription", (_runtime_1.py.str(path) + ".longDescription")], null) }, { "selling_models": _runtime_1.py.call(_commerce_value_parsing_1._parse_nullable_object_list, [value, "sellingModels", path, _parse_catalog_selling_model], null) }, { "product_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "productId", (_runtime_1.py.str(path) + ".productId")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "child_products": _runtime_1.py.call(_commerce_value_parsing_1._parse_nullable_object_list, [value, "childProducts", path, _parse_catalog_child_product], null) }, { "is_feature_on_demand": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "isFoD", (_runtime_1.py.str(path) + ".isFoD")], null) }, { "promotions": _runtime_1.py.call(_commerce_value_parsing_1._parse_nullable_object_list, [value, "promotions", path, _parse_catalog_promotion], null) }));
}
/** Translated upstream _parse_catalog_selling_model. */
function _parse_catalog_selling_model(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(commerce_models_1.NissanStoreCatalogSellingModel, [], Object.assign({}, { "pricing_term_unit": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "sellingModelPricingTermUnit", (_runtime_1.py.str(path) + ".sellingModelPricingTermUnit")], null) }, { "retail_price": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "retailPrice", (_runtime_1.py.str(path) + ".retailPrice")], null) }, { "discounted_price": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "discountedPrice", (_runtime_1.py.str(path) + ".discountedPrice")], null) }, { "selling_model_type": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "sellingModelType", (_runtime_1.py.str(path) + ".sellingModelType")], null) }, { "selling_model_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "sellingModelId", (_runtime_1.py.str(path) + ".sellingModelId")], null) }));
}
/** Translated upstream _parse_catalog_child_product. */
function _parse_catalog_child_product(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(commerce_models_1.NissanStoreCatalogChildProduct, [], Object.assign({}, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "customer_facing": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "npCustomerFacing", (_runtime_1.py.str(path) + ".npCustomerFacing")], null) }));
}
/** Translated upstream _parse_catalog_promotion. */
function _parse_catalog_promotion(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(commerce_models_1.NissanStoreCatalogPromotion, [], Object.assign({}, { "promotion_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "promotionId", (_runtime_1.py.str(path) + ".promotionId")], null) }, { "priority": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "priority", (_runtime_1.py.str(path) + ".priority")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "monthly_price": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "monthlyPromotionPrice", (_runtime_1.py.str(path) + ".monthlyPromotionPrice")], null) }, { "annual_price": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_float, [value, "annualPromotionPrice", (_runtime_1.py.str(path) + ".annualPromotionPrice")], null) }, { "end_date": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "endDate", (_runtime_1.py.str(path) + ".endDate")], null) }, { "description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "description", (_runtime_1.py.str(path) + ".description")], null) }));
}
//# sourceMappingURL=_commerce_catalog_parsing.js.map