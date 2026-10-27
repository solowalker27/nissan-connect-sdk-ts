// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _parse_nullable_object_list, _required_nullable_float } from "./_commerce_value_parsing";
export { _parse_nullable_object_list, _required_nullable_float };

import { _required_nullable_bool, _required_nullable_int, _required_nullable_string } from "./account_parsing";
export { _required_nullable_bool, _required_nullable_int, _required_nullable_string };

import { NissanStoreCatalogChildProduct, NissanStoreCatalogPackage, NissanStoreCatalogPromotion, NissanStoreCatalogSellingModel } from "./commerce_models";
export { NissanStoreCatalogChildProduct, NissanStoreCatalogPackage, NissanStoreCatalogPromotion, NissanStoreCatalogSellingModel };

export function _parse_catalog_package(value: Record<string, unknown>, path: string): NissanStoreCatalogPackage;
/** Translated upstream _parse_catalog_package. */
export function _parse_catalog_package(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NissanStoreCatalogPackage, [], Object.assign({}, {"short_description": $.call(_required_nullable_string, [value, "shortDescription", ($.str(path) + ".shortDescription")], null)}, {"trial_duration": $.call(_required_nullable_int, [value, "npTrialDuration", ($.str(path) + ".npTrialDuration")], null)}, {"product_image_url": $.call(_required_nullable_string, [value, "productImageUrl", ($.str(path) + ".productImageUrl")], null)}, {"long_description": $.call(_required_nullable_string, [value, "longDescription", ($.str(path) + ".longDescription")], null)}, {"selling_models": $.call(_parse_nullable_object_list, [value, "sellingModels", path, _parse_catalog_selling_model], null)}, {"product_id": $.call(_required_nullable_string, [value, "productId", ($.str(path) + ".productId")], null)}, {"name": $.call(_required_nullable_string, [value, "name", ($.str(path) + ".name")], null)}, {"child_products": $.call(_parse_nullable_object_list, [value, "childProducts", path, _parse_catalog_child_product], null)}, {"is_feature_on_demand": $.call(_required_nullable_bool, [value, "isFoD", ($.str(path) + ".isFoD")], null)}, {"promotions": $.call(_parse_nullable_object_list, [value, "promotions", path, _parse_catalog_promotion], null)}));
}

export function _parse_catalog_selling_model(value: Record<string, unknown>, path: string): NissanStoreCatalogSellingModel;
/** Translated upstream _parse_catalog_selling_model. */
export function _parse_catalog_selling_model(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NissanStoreCatalogSellingModel, [], Object.assign({}, {"pricing_term_unit": $.call(_required_nullable_string, [value, "sellingModelPricingTermUnit", ($.str(path) + ".sellingModelPricingTermUnit")], null)}, {"retail_price": $.call(_required_nullable_float, [value, "retailPrice", ($.str(path) + ".retailPrice")], null)}, {"discounted_price": $.call(_required_nullable_float, [value, "discountedPrice", ($.str(path) + ".discountedPrice")], null)}, {"selling_model_type": $.call(_required_nullable_string, [value, "sellingModelType", ($.str(path) + ".sellingModelType")], null)}, {"selling_model_id": $.call(_required_nullable_string, [value, "sellingModelId", ($.str(path) + ".sellingModelId")], null)}));
}

export function _parse_catalog_child_product(value: Record<string, unknown>, path: string): NissanStoreCatalogChildProduct;
/** Translated upstream _parse_catalog_child_product. */
export function _parse_catalog_child_product(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NissanStoreCatalogChildProduct, [], Object.assign({}, {"name": $.call(_required_nullable_string, [value, "name", ($.str(path) + ".name")], null)}, {"customer_facing": $.call(_required_nullable_bool, [value, "npCustomerFacing", ($.str(path) + ".npCustomerFacing")], null)}));
}

export function _parse_catalog_promotion(value: Record<string, unknown>, path: string): NissanStoreCatalogPromotion;
/** Translated upstream _parse_catalog_promotion. */
export function _parse_catalog_promotion(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NissanStoreCatalogPromotion, [], Object.assign({}, {"promotion_id": $.call(_required_nullable_string, [value, "promotionId", ($.str(path) + ".promotionId")], null)}, {"priority": $.call(_required_nullable_int, [value, "priority", ($.str(path) + ".priority")], null)}, {"name": $.call(_required_nullable_string, [value, "name", ($.str(path) + ".name")], null)}, {"monthly_price": $.call(_required_nullable_float, [value, "monthlyPromotionPrice", ($.str(path) + ".monthlyPromotionPrice")], null)}, {"annual_price": $.call(_required_nullable_float, [value, "annualPromotionPrice", ($.str(path) + ".annualPromotionPrice")], null)}, {"end_date": $.call(_required_nullable_string, [value, "endDate", ($.str(path) + ".endDate")], null)}, {"description": $.call(_required_nullable_string, [value, "description", ($.str(path) + ".description")], null)}));
}
