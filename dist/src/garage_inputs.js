"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NcarIcarRegisterAccountInput = exports.NcarIcarRegisterAccountAddressInput = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.VehicleHologram = void 0;
exports.add_vehicle_variables = add_vehicle_variables;
exports.delete_vehicle_variables = delete_vehicle_variables;
exports.ncar_icar_add_vehicle_variables = ncar_icar_add_vehicle_variables;
exports.pending_vehicles_variables = pending_vehicles_variables;
exports.ownership_status_variables = ownership_status_variables;
exports.apc_agreement_variables = apc_agreement_variables;
exports.apc_document_url_variables = apc_document_url_variables;
exports.create_apc_agreement_variables = create_apc_agreement_variables;
exports.update_apc_agreement_variables = update_apc_agreement_variables;
exports.connected_terms_and_conditions_by_vin_variables = connected_terms_and_conditions_by_vin_variables;
exports.onboarding_features_variables = onboarding_features_variables;
exports.update_vehicle_variables = update_vehicle_variables;
exports.update_vehicle_manual_mileage_variables = update_vehicle_manual_mileage_variables;
exports.update_vehicle_nickname_variables = update_vehicle_nickname_variables;
exports.upload_ownership_verification_variables = upload_ownership_verification_variables;
exports.ncar_icar_register_account_address_input = ncar_icar_register_account_address_input;
exports.ncar_icar_register_account_input = ncar_icar_register_account_input;
exports._optional_ncar_icar_account = _optional_ncar_icar_account;
exports._optional_hologram = _optional_hologram;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const garage_models_1 = require("./garage_models");
Object.defineProperty(exports, "VehicleHologram", { enumerable: true, get: function () { return garage_models_1.VehicleHologram; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
/** Complete non-null address required by an NCAR/ICAR account registration. */
class NcarIcarRegisterAccountAddressInput {
    address_1;
    address_2;
    city;
    state;
    postal_code;
    country;
    static __fields = [["address_1", _runtime_1.py.MISSING], ["address_2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarRegisterAccountAddressInput, __args); Object.freeze(this); }
}
exports.NcarIcarRegisterAccountAddressInput = NcarIcarRegisterAccountAddressInput;
_runtime_1.py.classType(NcarIcarRegisterAccountAddressInput);
/** Complete non-null account accepted by NCAR/ICAR vehicle registration. */
class NcarIcarRegisterAccountInput {
    first_name;
    last_name;
    email;
    phone_number;
    address;
    static __fields = [["first_name", _runtime_1.py.MISSING], ["last_name", _runtime_1.py.MISSING], ["email", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarRegisterAccountInput, __args); Object.freeze(this); }
}
exports.NcarIcarRegisterAccountInput = NcarIcarRegisterAccountInput;
_runtime_1.py.classType(NcarIcarRegisterAccountInput);
/** Serialize direct garage registration variables. */
function add_vehicle_variables(...__args) {
    let { "vin": vin, "terms_and_conditions_accepted": terms_and_conditions_accepted } = _runtime_1.py.bind(__args, ["vin", "terms_and_conditions_accepted"], {}, [], null, null);
    /** Serialize direct garage registration variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["termsAndConditionsAccepted"]: terms_and_conditions_accepted });
}
/** Serialize the required VIN for garage deletion. */
function delete_vehicle_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for garage deletion. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize NCAR/ICAR registration while preserving account omission and null. */
function ncar_icar_add_vehicle_variables(...__args) {
    let { "terms_and_conditions_accepted": terms_and_conditions_accepted, "guid": guid, "account": account } = _runtime_1.py.bind(__args, ["terms_and_conditions_accepted", "guid"], { "account": graphql_input_1.UNSET }, ["account"], null, null);
    /** Serialize NCAR/ICAR registration while preserving account omission and null. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "termsAndConditionsAccepted": terms_and_conditions_accepted }, { "guid": guid }, { "account": _runtime_1.py.call(_optional_ncar_icar_account, [account], null) }));
}
/** Return the empty variables object used by PendingVehicles. */
function pending_vehicles_variables(...__args) {
    let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
    /** Return the empty variables object used by PendingVehicles. */
    return {};
}
/** Serialize the required VIN for ownership status. */
function ownership_status_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for ownership status. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize the required VIN for APC agreement status. */
function apc_agreement_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for APC agreement status. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize the required VIN for the APC document URL. */
function apc_document_url_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for the APC document URL. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize APC agreement creation variables. */
function create_apc_agreement_variables(...__args) {
    let { "vin": vin, "opt_in": opt_in } = _runtime_1.py.bind(__args, ["vin", "opt_in"], {}, [], null, null);
    /** Serialize APC agreement creation variables. */
    return Object.assign({}, { ["optIn"]: opt_in }, { ["vin"]: vin });
}
/** Serialize APC agreement update variables. */
function update_apc_agreement_variables(...__args) {
    let { "vin": vin, "opt_in": opt_in } = _runtime_1.py.bind(__args, ["vin", "opt_in"], {}, [], null, null);
    /** Serialize APC agreement update variables. */
    return Object.assign({}, { ["optIn"]: opt_in }, { ["vin"]: vin });
}
/** Serialize the required VIN for connected-services terms lookup. */
function connected_terms_and_conditions_by_vin_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for connected-services terms lookup. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize the required VIN for onboarding features. */
function onboarding_features_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for onboarding features. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize vehicle metadata updates with Apollo omission semantics. */
function update_vehicle_variables(...__args) {
    let { "vin": vin, "license_plate": license_plate, "hologram": hologram } = _runtime_1.py.bind(__args, ["vin"], { "license_plate": graphql_input_1.UNSET, "hologram": graphql_input_1.UNSET }, ["license_plate", "hologram"], null, null);
    /** Serialize vehicle metadata updates with Apollo omission semantics. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "licensePlate": license_plate }, { "hologram": _runtime_1.py.call(_optional_hologram, [hologram], null) }));
}
/** Serialize a nullable or omitted manual-mileage update. */
function update_vehicle_manual_mileage_variables(...__args) {
    let { "vin": vin, "manual_mileage": manual_mileage } = _runtime_1.py.bind(__args, ["vin"], { "manual_mileage": graphql_input_1.UNSET }, ["manual_mileage"], null, null);
    /** Serialize a nullable or omitted manual-mileage update. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "manualMileage": manual_mileage }));
}
/** Serialize the required nickname update variables. */
function update_vehicle_nickname_variables(...__args) {
    let { "vin": vin, "nickname": nickname } = _runtime_1.py.bind(__args, ["vin", "nickname"], {}, [], null, null);
    /** Serialize the required nickname update variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["nickname"]: nickname });
}
/** Serialize the complete ownership-verification upload variables. */
function upload_ownership_verification_variables(...__args) {
    let { "vin": vin, "filename": filename, "attachment": attachment, "opt_in_sms": opt_in_sms } = _runtime_1.py.bind(__args, ["vin", "filename", "attachment", "opt_in_sms"], {}, [], null, null);
    /** Serialize the complete ownership-verification upload variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["filename"]: filename }, { ["attachment"]: attachment }, { ["optInSMS"]: opt_in_sms });
}
/** Serialize an NCAR/ICAR account address with schema field names. */
function ncar_icar_register_account_address_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize an NCAR/ICAR account address with schema field names. */
    return Object.assign({}, { ["address1"]: _runtime_1.py.attr(value, "address_1") }, { ["address2"]: _runtime_1.py.attr(value, "address_2") }, { ["city"]: _runtime_1.py.attr(value, "city") }, { ["state"]: _runtime_1.py.attr(value, "state") }, { ["postalCode"]: _runtime_1.py.attr(value, "postal_code") }, { ["country"]: _runtime_1.py.attr(value, "country") });
}
/** Serialize the nested NCAR/ICAR account input. */
function ncar_icar_register_account_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize the nested NCAR/ICAR account input. */
    return Object.assign({}, { ["firstName"]: _runtime_1.py.attr(value, "first_name") }, { ["lastName"]: _runtime_1.py.attr(value, "last_name") }, { ["email"]: _runtime_1.py.attr(value, "email") }, { ["phoneNumber"]: _runtime_1.py.attr(value, "phone_number") }, { ["address"]: _runtime_1.py.call(ncar_icar_register_account_address_input, [_runtime_1.py.attr(value, "address")], null) });
}
/** Translated upstream _optional_ncar_icar_account. */
function _optional_ncar_icar_account(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return _runtime_1.py.call(ncar_icar_register_account_input, [value], null);
}
/** Translated upstream _optional_hologram. */
function _optional_hologram(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, garage_models_1.VehicleHologram], null))) {
        return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
    }
    return value;
}
//# sourceMappingURL=garage_inputs.js.map