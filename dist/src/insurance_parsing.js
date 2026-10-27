"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleInsurer = exports.VehicleInsuranceMutationSuccess = exports.VehicleInsuranceMutationError = exports.VehicleInsurance = exports.UnselectedInsuranceResult = exports.InsuranceStatus = exports.InsuranceContact = exports.ResponseError = exports._typename = exports._typed_object = exports._root = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_field = exports._required_enum = void 0;
exports.parse_add_vehicle_insurance = parse_add_vehicle_insurance;
exports.parse_update_vehicle_insurance = parse_update_vehicle_insurance;
exports.parse_vehicle_insurance = parse_vehicle_insurance;
exports.parse_insurers = parse_insurers;
exports._parse_insurance_mutation = _parse_insurance_mutation;
exports._parse_vehicle_insurance = _parse_vehicle_insurance;
exports._parse_insurer = _parse_insurer;
exports._required_bool = _required_bool;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_enum", { enumerable: true, get: function () { return account_parsing_1._required_enum; } });
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return account_parsing_1._root; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return account_parsing_1._typed_object; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const insurance_models_1 = require("./insurance_models");
Object.defineProperty(exports, "InsuranceContact", { enumerable: true, get: function () { return insurance_models_1.InsuranceContact; } });
Object.defineProperty(exports, "InsuranceStatus", { enumerable: true, get: function () { return insurance_models_1.InsuranceStatus; } });
Object.defineProperty(exports, "UnselectedInsuranceResult", { enumerable: true, get: function () { return insurance_models_1.UnselectedInsuranceResult; } });
Object.defineProperty(exports, "VehicleInsurance", { enumerable: true, get: function () { return insurance_models_1.VehicleInsurance; } });
Object.defineProperty(exports, "VehicleInsuranceMutationError", { enumerable: true, get: function () { return insurance_models_1.VehicleInsuranceMutationError; } });
Object.defineProperty(exports, "VehicleInsuranceMutationSuccess", { enumerable: true, get: function () { return insurance_models_1.VehicleInsuranceMutationSuccess; } });
Object.defineProperty(exports, "VehicleInsurer", { enumerable: true, get: function () { return insurance_models_1.VehicleInsurer; } });
/** Parse every generated add-insurance union branch. */
function parse_add_vehicle_insurance(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated add-insurance union branch. */
    return _runtime_1.py.call(_parse_insurance_mutation, [data, "addVehicleInsurance", "AddVehicleInsuranceSuccess", "AddVehicleInsuranceGeneralError"], null);
}
/** Parse every generated update-insurance union branch. */
function parse_update_vehicle_insurance(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated update-insurance union branch. */
    return _runtime_1.py.call(_parse_insurance_mutation, [data, "updateVehicleInsurance", "UpdateVehicleInsuranceSuccess", "UpdateVehicleInsuranceGeneralError"], null);
}
/** Parse the nullable insurance policy attached to a nullable vehicle. */
function parse_vehicle_insurance(...__args) {
    let insurance, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable insurance policy attached to a nullable vehicle. */
    vehicle = _runtime_1.py.call(account_parsing_1._root, [data, "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    _runtime_1.py.call(account_parsing_1._typename, [vehicle, "vehicle"], null);
    insurance = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [vehicle, "insurance", "vehicle.insurance"], null);
    if (_runtime_1.py.truth(((insurance === null)))) {
        return null;
    }
    return _runtime_1.py.call(_parse_vehicle_insurance, [insurance, "vehicle.insurance"], null);
}
/** Parse the nullable insurer catalog and nullable list entries. */
function parse_insurers(...__args) {
    let field, index, insurers, item, path, value;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable insurer catalog and nullable list entries. */
    field = "insurers";
    value = _runtime_1.py.call(account_parsing_1._required_field, [data, field, field], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(field) + " is not a list")], null);
    }
    insurers = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(insurers, "append"), [null], null);
            continue;
        }
        path = (_runtime_1.py.str(field) + "[" + _runtime_1.py.str(index) + "]");
        _runtime_1.py.call(_runtime_1.py.attr(insurers, "append"), [_runtime_1.py.call(_parse_insurer, [_runtime_1.py.call(account_parsing_1._typed_object, [item, path], null), path], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [insurers], null);
}
/** Translated upstream _parse_insurance_mutation. */
function _parse_insurance_mutation(...__args) {
    let root, typename;
    let { "data": data, "field": field, "success_typename": success_typename, "error_typename": error_typename } = _runtime_1.py.bind(__args, ["data", "field", "success_typename", "error_typename"], {}, [], null, null);
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, success_typename)))) {
        return _runtime_1.py.call(insurance_models_1.VehicleInsuranceMutationSuccess, [_runtime_1.py.call(_required_bool, [root, "success", (_runtime_1.py.str(field) + ".success")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, error_typename)))) {
        return _runtime_1.py.call(insurance_models_1.VehicleInsuranceMutationError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(insurance_models_1.UnselectedInsuranceResult, [typename], null);
}
/** Translated upstream _parse_vehicle_insurance. */
function _parse_vehicle_insurance(...__args) {
    let insurer;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    insurer = _runtime_1.py.call(account_parsing_1._typed_object, [_runtime_1.py.call(account_parsing_1._required_field, [value, "insurer", (_runtime_1.py.str(path) + ".insurer")], null), (_runtime_1.py.str(path) + ".insurer")], null);
    return _runtime_1.py.call(insurance_models_1.VehicleInsurance, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_string, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "policy_number": _runtime_1.py.call(account_parsing_1._required_string, [value, "policyNumber", (_runtime_1.py.str(path) + ".policyNumber")], null) }, { "expiration_date": _runtime_1.py.call(account_parsing_1._required_string, [value, "expirationDate", (_runtime_1.py.str(path) + ".expirationDate")], null) }, { "status": _runtime_1.py.call(account_parsing_1._required_enum, [value, "status", insurance_models_1.InsuranceStatus, (_runtime_1.py.str(path) + ".status")], null) }, { "insurer": _runtime_1.py.call(_parse_insurer, [insurer, (_runtime_1.py.str(path) + ".insurer")], null) }));
}
/** Translated upstream _parse_insurer. */
function _parse_insurer(...__args) {
    let contact, contacts, contacts_value, index, item, item_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    contacts_value = _runtime_1.py.call(account_parsing_1._required_field, [value, "contacts", (_runtime_1.py.str(path) + ".contacts")], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [contacts_value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + ".contacts is not a list")], null);
    }
    contacts = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [contacts_value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(contacts, "append"), [null], null);
            continue;
        }
        item_path = (_runtime_1.py.str(path) + ".contacts[" + _runtime_1.py.str(index) + "]");
        contact = _runtime_1.py.call(account_parsing_1._typed_object, [item, item_path], null);
        _runtime_1.py.call(account_parsing_1._typename, [contact, item_path], null);
        _runtime_1.py.call(_runtime_1.py.attr(contacts, "append"), [_runtime_1.py.call(insurance_models_1.InsuranceContact, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [contact, "location", (_runtime_1.py.str(item_path) + ".location")], null), _runtime_1.py.call(account_parsing_1._required_nullable_string, [contact, "phoneNumber", (_runtime_1.py.str(item_path) + ".phoneNumber")], null)], null)], null);
    }
    return _runtime_1.py.call(insurance_models_1.VehicleInsurer, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_string, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "contacts": _runtime_1.py.call(_runtime_1.py.tuple, [contacts], null) }));
}
/** Translated upstream _required_bool. */
function _required_bool(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
//# sourceMappingURL=insurance_parsing.js.map