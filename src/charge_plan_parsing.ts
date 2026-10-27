// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { ChargePlanAccountStatus, ChargePlanCancellationResult, ChargePlanEnrollmentData, ChargePlanEnrollmentResult, ChargePlanPricingConnector, ChargePlanPricingDetails, ChargePlanPricingEvse, ChargeProductData, ChargeProductResult } from "./charge_plan_models";
export { ChargePlanAccountStatus, ChargePlanCancellationResult, ChargePlanEnrollmentData, ChargePlanEnrollmentResult, ChargePlanPricingConnector, ChargePlanPricingDetails, ChargePlanPricingEvse, ChargeProductData, ChargeProductResult };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function parse_charge_product(data: Record<string, unknown>): ChargeProductResult | null;
/** Parse the nullable EMP charge product and status envelope. */
export function parse_charge_product(...__args: any[]): any {
let product, raw_product, root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable EMP charge product and status envelope. */
root_field = "chargeProduct";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
raw_product = $.call(_optional_typed_object, [$.call($.attr(root, "get"), ["data"], null), ($.str(root_field) + ".data")], null);
product = null;
if ($.truth(((raw_product !== null)))) {
product = $.call(ChargeProductData, [], Object.assign({}, {"product_sku": $.call(_nullable_string, [$.call($.attr(raw_product, "get"), ["productSKU"], null), ($.str(root_field) + ".data.productSKU")], null)}, {"price": $.call(_nullable_string, [$.call($.attr(raw_product, "get"), ["price"], null), ($.str(root_field) + ".data.price")], null)}, {"description": $.call(_nullable_string, [$.call($.attr(raw_product, "get"), ["description"], null), ($.str(root_field) + ".data.description")], null)}));
}
return $.call(ChargeProductResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(root, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": product}));
}

export function parse_pricing_details(data: Record<string, unknown>): ChargePlanPricingDetails | null;
/** Parse nullable charging-location fees and connector tariffs. */
export function parse_pricing_details(...__args: any[]): any {
let evses, evses_path, index, parsed_evses, raw_details, raw_evse, raw_evses, root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable charging-location fees and connector tariffs. */
root_field = "pricingDetails";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
raw_details = $.call(_optional_typed_object, [$.call($.attr(root, "get"), ["data"], null), ($.str(root_field) + ".data")], null);
if ($.truth(((raw_details === null)))) {
return null;
}
evses_path = ($.str(root_field) + ".data.evses");
raw_evses = $.call(_nullable_list, [$.call($.attr(raw_details, "get"), ["evses"], null), evses_path], null);
evses = null;
if ($.truth(((raw_evses !== null)))) {
parsed_evses = [];
for ([index, raw_evse] of $.iterable($.call($.enumerate, [raw_evses], null))) {
if ($.truth(((raw_evse === null)))) {
$.call($.attr(parsed_evses, "append"), [null], null);
continue;
}
$.call($.attr(parsed_evses, "append"), [$.call(_parse_pricing_evse, [raw_evse, ($.str(evses_path) + "[" + $.str(index) + "]")], null)], null);
}
evses = $.call($.tuple, [parsed_evses], null);
}
return $.call(ChargePlanPricingDetails, [], Object.assign({}, {"parking_tariff": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["parkingTariff"], null), ($.str(root_field) + ".data.parkingTariff")], null)}, {"flat_fee": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["flatFee"], null), ($.str(root_field) + ".data.flatFee")], null)}, {"congestion_fee": $.call(_nullable_string, [$.call($.attr(raw_details, "get"), ["congestionFee"], null), ($.str(root_field) + ".data.congestionFee")], null)}, {"evses": evses}));
}

export function parse_enroll_charge_plan(data: Record<string, unknown>): ChargePlanEnrollmentResult | null;
/** Parse the nullable EMP charge-plan enrollment result. */
export function parse_enroll_charge_plan(...__args: any[]): any {
let enrollment, raw_enrollment, root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable EMP charge-plan enrollment result. */
root_field = "enrollChargePlan";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
raw_enrollment = $.call(_optional_typed_object, [$.call($.attr(root, "get"), ["data"], null), ($.str(root_field) + ".data")], null);
enrollment = null;
if ($.truth(((raw_enrollment !== null)))) {
enrollment = $.call(ChargePlanEnrollmentData, [], Object.assign({}, {"vin": $.call(_nullable_string, [$.call($.attr(raw_enrollment, "get"), ["vin"], null), ($.str(root_field) + ".data.vin")], null)}, {"status": $.call(_nullable_account_status, [$.call($.attr(raw_enrollment, "get"), ["status"], null), ($.str(root_field) + ".data.status")], null)}));
}
return $.call(ChargePlanEnrollmentResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(root, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}, {"data": enrollment}));
}

export function parse_cancel_charge_plan(data: Record<string, unknown>): ChargePlanCancellationResult | null;
/** Parse the nullable EMP charge-plan cancellation result. */
export function parse_cancel_charge_plan(...__args: any[]): any {
let root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable EMP charge-plan cancellation result. */
root_field = "cancelChargePlan";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(ChargePlanCancellationResult, [], Object.assign({}, {"status_code": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusCode"], null), ($.str(root_field) + ".statusCode")], null)}, {"status_message": $.call(_nullable_string, [$.call($.attr(root, "get"), ["statusMessage"], null), ($.str(root_field) + ".statusMessage")], null)}, {"timestamp": $.call(_nullable_string, [$.call($.attr(root, "get"), ["timestamp"], null), ($.str(root_field) + ".timestamp")], null)}));
}

export function _parse_pricing_evse(value: unknown, path: string): ChargePlanPricingEvse;
/** Translated upstream _parse_pricing_evse. */
export function _parse_pricing_evse(...__args: any[]): any {
let connector, connector_path, connectors, connectors_path, evse, index, parsed_connectors, raw_connector, raw_connectors;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
evse = $.call(_typed_object, [value, path], null);
connectors_path = ($.str(path) + ".connectors");
raw_connectors = $.call(_nullable_list, [$.call($.attr(evse, "get"), ["connectors"], null), connectors_path], null);
connectors = null;
if ($.truth(((raw_connectors !== null)))) {
parsed_connectors = [];
for ([index, raw_connector] of $.iterable($.call($.enumerate, [raw_connectors], null))) {
if ($.truth(((raw_connector === null)))) {
$.call($.attr(parsed_connectors, "append"), [null], null);
continue;
}
connector_path = ($.str(connectors_path) + "[" + $.str(index) + "]");
connector = $.call(_typed_object, [raw_connector, connector_path], null);
$.call($.attr(parsed_connectors, "append"), [$.call(ChargePlanPricingConnector, [], Object.assign({}, {"connector_id": $.call(_nullable_string, [$.call($.attr(connector, "get"), ["connectorId"], null), ($.str(connector_path) + ".connectorId")], null)}, {"tariff": $.call(_nullable_string, [$.call($.attr(connector, "get"), ["tariff"], null), ($.str(connector_path) + ".tariff")], null)}))], null);
}
connectors = $.call($.tuple, [parsed_connectors], null);
}
return $.call(ChargePlanPricingEvse, [connectors], null);
}

export function _root(data: Record<string, unknown>, root_field: string): Record<string, unknown> | null;
/** Translated upstream _root. */
export function _root(...__args: any[]): any {
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
return $.call(_optional_typed_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
}

export function _typed_object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _typed_object. */
export function _typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
$.call(_string, [$.call($.attr(value, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
return value;
}

export function _optional_typed_object(value: unknown, path: string): Record<string, unknown> | null;
/** Translated upstream _optional_typed_object. */
export function _optional_typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_typed_object, [value, path], null);
}

export function _nullable_list(value: unknown, path: string): ReadonlyArray<unknown> | null;
/** Translated upstream _nullable_list. */
export function _nullable_list(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _string(value: unknown, path: string): string;
/** Translated upstream _string. */
export function _string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return value;
}

export function _nullable_string(value: unknown, path: string): string | null;
/** Translated upstream _nullable_string. */
export function _nullable_string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_string, [value, path], null);
}

export function _nullable_account_status(value: unknown, path: string): ChargePlanAccountStatus | null;
/** Translated upstream _nullable_account_status. */
export function _nullable_account_status(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_nullable_string, [value, path], null);
if ($.truth(((raw_value === null)))) {
return null;
}
try {
return $.call(ChargePlanAccountStatus, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(ChargePlanAccountStatus, "UNKNOWN_VALUE"); } else { throw __error; }
}
}
