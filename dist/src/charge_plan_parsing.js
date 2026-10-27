"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports.ChargeProductResult = exports.ChargeProductData = exports.ChargePlanPricingEvse = exports.ChargePlanPricingDetails = exports.ChargePlanPricingConnector = exports.ChargePlanEnrollmentResult = exports.ChargePlanEnrollmentData = exports.ChargePlanCancellationResult = exports.ChargePlanAccountStatus = void 0;
exports.parse_charge_product = parse_charge_product;
exports.parse_pricing_details = parse_pricing_details;
exports.parse_enroll_charge_plan = parse_enroll_charge_plan;
exports.parse_cancel_charge_plan = parse_cancel_charge_plan;
exports._parse_pricing_evse = _parse_pricing_evse;
exports._root = _root;
exports._typed_object = _typed_object;
exports._optional_typed_object = _optional_typed_object;
exports._nullable_list = _nullable_list;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._nullable_account_status = _nullable_account_status;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const charge_plan_models_1 = require("./charge_plan_models");
Object.defineProperty(exports, "ChargePlanAccountStatus", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanAccountStatus; } });
Object.defineProperty(exports, "ChargePlanCancellationResult", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanCancellationResult; } });
Object.defineProperty(exports, "ChargePlanEnrollmentData", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanEnrollmentData; } });
Object.defineProperty(exports, "ChargePlanEnrollmentResult", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanEnrollmentResult; } });
Object.defineProperty(exports, "ChargePlanPricingConnector", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanPricingConnector; } });
Object.defineProperty(exports, "ChargePlanPricingDetails", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanPricingDetails; } });
Object.defineProperty(exports, "ChargePlanPricingEvse", { enumerable: true, get: function () { return charge_plan_models_1.ChargePlanPricingEvse; } });
Object.defineProperty(exports, "ChargeProductData", { enumerable: true, get: function () { return charge_plan_models_1.ChargeProductData; } });
Object.defineProperty(exports, "ChargeProductResult", { enumerable: true, get: function () { return charge_plan_models_1.ChargeProductResult; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Parse the nullable EMP charge product and status envelope. */
function parse_charge_product(...__args) {
    let product, raw_product, root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable EMP charge product and status envelope. */
    root_field = "chargeProduct";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    raw_product = _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["data"], null), (_runtime_1.py.str(root_field) + ".data")], null);
    product = null;
    if (_runtime_1.py.truth(((raw_product !== null)))) {
        product = _runtime_1.py.call(charge_plan_models_1.ChargeProductData, [], Object.assign({}, { "product_sku": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_product, "get"), ["productSKU"], null), (_runtime_1.py.str(root_field) + ".data.productSKU")], null) }, { "price": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_product, "get"), ["price"], null), (_runtime_1.py.str(root_field) + ".data.price")], null) }, { "description": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_product, "get"), ["description"], null), (_runtime_1.py.str(root_field) + ".data.description")], null) }));
    }
    return _runtime_1.py.call(charge_plan_models_1.ChargeProductResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": product }));
}
/** Parse nullable charging-location fees and connector tariffs. */
function parse_pricing_details(...__args) {
    let evses, evses_path, index, parsed_evses, raw_details, raw_evse, raw_evses, root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable charging-location fees and connector tariffs. */
    root_field = "pricingDetails";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    raw_details = _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["data"], null), (_runtime_1.py.str(root_field) + ".data")], null);
    if (_runtime_1.py.truth(((raw_details === null)))) {
        return null;
    }
    evses_path = (_runtime_1.py.str(root_field) + ".data.evses");
    raw_evses = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["evses"], null), evses_path], null);
    evses = null;
    if (_runtime_1.py.truth(((raw_evses !== null)))) {
        parsed_evses = [];
        for ([index, raw_evse] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_evses], null))) {
            if (_runtime_1.py.truth(((raw_evse === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_evses, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_evses, "append"), [_runtime_1.py.call(_parse_pricing_evse, [raw_evse, (_runtime_1.py.str(evses_path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        evses = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_evses], null);
    }
    return _runtime_1.py.call(charge_plan_models_1.ChargePlanPricingDetails, [], Object.assign({}, { "parking_tariff": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["parkingTariff"], null), (_runtime_1.py.str(root_field) + ".data.parkingTariff")], null) }, { "flat_fee": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["flatFee"], null), (_runtime_1.py.str(root_field) + ".data.flatFee")], null) }, { "congestion_fee": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_details, "get"), ["congestionFee"], null), (_runtime_1.py.str(root_field) + ".data.congestionFee")], null) }, { "evses": evses }));
}
/** Parse the nullable EMP charge-plan enrollment result. */
function parse_enroll_charge_plan(...__args) {
    let enrollment, raw_enrollment, root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable EMP charge-plan enrollment result. */
    root_field = "enrollChargePlan";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    raw_enrollment = _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["data"], null), (_runtime_1.py.str(root_field) + ".data")], null);
    enrollment = null;
    if (_runtime_1.py.truth(((raw_enrollment !== null)))) {
        enrollment = _runtime_1.py.call(charge_plan_models_1.ChargePlanEnrollmentData, [], Object.assign({}, { "vin": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(raw_enrollment, "get"), ["vin"], null), (_runtime_1.py.str(root_field) + ".data.vin")], null) }, { "status": _runtime_1.py.call(_nullable_account_status, [_runtime_1.py.call(_runtime_1.py.attr(raw_enrollment, "get"), ["status"], null), (_runtime_1.py.str(root_field) + ".data.status")], null) }));
    }
    return _runtime_1.py.call(charge_plan_models_1.ChargePlanEnrollmentResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "data": enrollment }));
}
/** Parse the nullable EMP charge-plan cancellation result. */
function parse_cancel_charge_plan(...__args) {
    let root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable EMP charge-plan cancellation result. */
    root_field = "cancelChargePlan";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(charge_plan_models_1.ChargePlanCancellationResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusCode"], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["statusMessage"], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["timestamp"], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }));
}
/** Translated upstream _parse_pricing_evse. */
function _parse_pricing_evse(...__args) {
    let connector, connector_path, connectors, connectors_path, evse, index, parsed_connectors, raw_connector, raw_connectors;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    evse = _runtime_1.py.call(_typed_object, [value, path], null);
    connectors_path = (_runtime_1.py.str(path) + ".connectors");
    raw_connectors = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(evse, "get"), ["connectors"], null), connectors_path], null);
    connectors = null;
    if (_runtime_1.py.truth(((raw_connectors !== null)))) {
        parsed_connectors = [];
        for ([index, raw_connector] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_connectors], null))) {
            if (_runtime_1.py.truth(((raw_connector === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_connectors, "append"), [null], null);
                continue;
            }
            connector_path = (_runtime_1.py.str(connectors_path) + "[" + _runtime_1.py.str(index) + "]");
            connector = _runtime_1.py.call(_typed_object, [raw_connector, connector_path], null);
            _runtime_1.py.call(_runtime_1.py.attr(parsed_connectors, "append"), [_runtime_1.py.call(charge_plan_models_1.ChargePlanPricingConnector, [], Object.assign({}, { "connector_id": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["connectorId"], null), (_runtime_1.py.str(connector_path) + ".connectorId")], null) }, { "tariff": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["tariff"], null), (_runtime_1.py.str(connector_path) + ".tariff")], null) }))], null);
        }
        connectors = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_connectors], null);
    }
    return _runtime_1.py.call(charge_plan_models_1.ChargePlanPricingEvse, [connectors], null);
}
/** Translated upstream _root. */
function _root(...__args) {
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    return _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
}
/** Translated upstream _typed_object. */
function _typed_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
    return value;
}
/** Translated upstream _optional_typed_object. */
function _optional_typed_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_typed_object, [value, path], null);
}
/** Translated upstream _nullable_list. */
function _nullable_list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _string. */
function _string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return value;
}
/** Translated upstream _nullable_string. */
function _nullable_string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_string, [value, path], null);
}
/** Translated upstream _nullable_account_status. */
function _nullable_account_status(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_nullable_string, [value, path], null);
    if (_runtime_1.py.truth(((raw_value === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(charge_plan_models_1.ChargePlanAccountStatus, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(charge_plan_models_1.ChargePlanAccountStatus, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=charge_plan_parsing.js.map