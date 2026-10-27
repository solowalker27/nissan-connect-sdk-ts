"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports._GarageClientMixin = exports.parse_vehicles_with_capabilities = exports.VehicleWithCapabilities = exports.parse_vehicles = exports.Vehicle = exports.UnsetType = exports.UNSET = exports.parse_upload_ownership_verification = exports.parse_update_vehicle_nickname = exports.parse_update_vehicle_manual_mileage = exports.parse_update_vehicle = exports.parse_update_apc_agreement = exports.parse_pending_vehicles = exports.parse_ownership_status = exports.parse_onboarding_features = exports.parse_ncar_icar_add_vehicle = exports.parse_delete_vehicle = exports.parse_create_apc_agreement = exports.parse_connected_terms_and_conditions_by_vin = exports.parse_apc_document_url = exports.parse_apc_agreement = exports.parse_add_vehicle = exports.VehicleHologram = exports.PendingVehicle = exports.OwnershipStatus = exports.OnboardingFeature = exports.APCDocument = exports.APCAgreementMutationResult = exports.APCAgreement = exports.upload_ownership_verification_variables = exports.update_vehicle_variables = exports.update_vehicle_nickname_variables = exports.update_vehicle_manual_mileage_variables = exports.update_apc_agreement_variables = exports.pending_vehicles_variables = exports.ownership_status_variables = exports.onboarding_features_variables = exports.ncar_icar_add_vehicle_variables = exports.delete_vehicle_variables = exports.create_apc_agreement_variables = exports.connected_terms_and_conditions_by_vin_variables = exports.apc_document_url_variables = exports.apc_agreement_variables = exports.add_vehicle_variables = exports.NcarIcarRegisterAccountInput = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const garage_inputs_1 = require("./garage_inputs");
Object.defineProperty(exports, "NcarIcarRegisterAccountInput", { enumerable: true, get: function () { return garage_inputs_1.NcarIcarRegisterAccountInput; } });
Object.defineProperty(exports, "add_vehicle_variables", { enumerable: true, get: function () { return garage_inputs_1.add_vehicle_variables; } });
Object.defineProperty(exports, "apc_agreement_variables", { enumerable: true, get: function () { return garage_inputs_1.apc_agreement_variables; } });
Object.defineProperty(exports, "apc_document_url_variables", { enumerable: true, get: function () { return garage_inputs_1.apc_document_url_variables; } });
Object.defineProperty(exports, "connected_terms_and_conditions_by_vin_variables", { enumerable: true, get: function () { return garage_inputs_1.connected_terms_and_conditions_by_vin_variables; } });
Object.defineProperty(exports, "create_apc_agreement_variables", { enumerable: true, get: function () { return garage_inputs_1.create_apc_agreement_variables; } });
Object.defineProperty(exports, "delete_vehicle_variables", { enumerable: true, get: function () { return garage_inputs_1.delete_vehicle_variables; } });
Object.defineProperty(exports, "ncar_icar_add_vehicle_variables", { enumerable: true, get: function () { return garage_inputs_1.ncar_icar_add_vehicle_variables; } });
Object.defineProperty(exports, "onboarding_features_variables", { enumerable: true, get: function () { return garage_inputs_1.onboarding_features_variables; } });
Object.defineProperty(exports, "ownership_status_variables", { enumerable: true, get: function () { return garage_inputs_1.ownership_status_variables; } });
Object.defineProperty(exports, "pending_vehicles_variables", { enumerable: true, get: function () { return garage_inputs_1.pending_vehicles_variables; } });
Object.defineProperty(exports, "update_apc_agreement_variables", { enumerable: true, get: function () { return garage_inputs_1.update_apc_agreement_variables; } });
Object.defineProperty(exports, "update_vehicle_manual_mileage_variables", { enumerable: true, get: function () { return garage_inputs_1.update_vehicle_manual_mileage_variables; } });
Object.defineProperty(exports, "update_vehicle_nickname_variables", { enumerable: true, get: function () { return garage_inputs_1.update_vehicle_nickname_variables; } });
Object.defineProperty(exports, "update_vehicle_variables", { enumerable: true, get: function () { return garage_inputs_1.update_vehicle_variables; } });
Object.defineProperty(exports, "upload_ownership_verification_variables", { enumerable: true, get: function () { return garage_inputs_1.upload_ownership_verification_variables; } });
const garage_models_1 = require("./garage_models");
Object.defineProperty(exports, "APCAgreement", { enumerable: true, get: function () { return garage_models_1.APCAgreement; } });
Object.defineProperty(exports, "APCAgreementMutationResult", { enumerable: true, get: function () { return garage_models_1.APCAgreementMutationResult; } });
Object.defineProperty(exports, "APCDocument", { enumerable: true, get: function () { return garage_models_1.APCDocument; } });
Object.defineProperty(exports, "OnboardingFeature", { enumerable: true, get: function () { return garage_models_1.OnboardingFeature; } });
Object.defineProperty(exports, "OwnershipStatus", { enumerable: true, get: function () { return garage_models_1.OwnershipStatus; } });
Object.defineProperty(exports, "PendingVehicle", { enumerable: true, get: function () { return garage_models_1.PendingVehicle; } });
Object.defineProperty(exports, "VehicleHologram", { enumerable: true, get: function () { return garage_models_1.VehicleHologram; } });
const garage_parsing_1 = require("./garage_parsing");
Object.defineProperty(exports, "parse_add_vehicle", { enumerable: true, get: function () { return garage_parsing_1.parse_add_vehicle; } });
Object.defineProperty(exports, "parse_apc_agreement", { enumerable: true, get: function () { return garage_parsing_1.parse_apc_agreement; } });
Object.defineProperty(exports, "parse_apc_document_url", { enumerable: true, get: function () { return garage_parsing_1.parse_apc_document_url; } });
Object.defineProperty(exports, "parse_connected_terms_and_conditions_by_vin", { enumerable: true, get: function () { return garage_parsing_1.parse_connected_terms_and_conditions_by_vin; } });
Object.defineProperty(exports, "parse_create_apc_agreement", { enumerable: true, get: function () { return garage_parsing_1.parse_create_apc_agreement; } });
Object.defineProperty(exports, "parse_delete_vehicle", { enumerable: true, get: function () { return garage_parsing_1.parse_delete_vehicle; } });
Object.defineProperty(exports, "parse_ncar_icar_add_vehicle", { enumerable: true, get: function () { return garage_parsing_1.parse_ncar_icar_add_vehicle; } });
Object.defineProperty(exports, "parse_onboarding_features", { enumerable: true, get: function () { return garage_parsing_1.parse_onboarding_features; } });
Object.defineProperty(exports, "parse_ownership_status", { enumerable: true, get: function () { return garage_parsing_1.parse_ownership_status; } });
Object.defineProperty(exports, "parse_pending_vehicles", { enumerable: true, get: function () { return garage_parsing_1.parse_pending_vehicles; } });
Object.defineProperty(exports, "parse_update_apc_agreement", { enumerable: true, get: function () { return garage_parsing_1.parse_update_apc_agreement; } });
Object.defineProperty(exports, "parse_update_vehicle", { enumerable: true, get: function () { return garage_parsing_1.parse_update_vehicle; } });
Object.defineProperty(exports, "parse_update_vehicle_manual_mileage", { enumerable: true, get: function () { return garage_parsing_1.parse_update_vehicle_manual_mileage; } });
Object.defineProperty(exports, "parse_update_vehicle_nickname", { enumerable: true, get: function () { return garage_parsing_1.parse_update_vehicle_nickname; } });
Object.defineProperty(exports, "parse_upload_ownership_verification", { enumerable: true, get: function () { return garage_parsing_1.parse_upload_ownership_verification; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
const models_1 = require("./models");
Object.defineProperty(exports, "Vehicle", { enumerable: true, get: function () { return models_1.Vehicle; } });
const parsing_1 = require("./parsing");
Object.defineProperty(exports, "parse_vehicles", { enumerable: true, get: function () { return parsing_1.parse_vehicles; } });
const wearable_models_1 = require("./wearable_models");
Object.defineProperty(exports, "VehicleWithCapabilities", { enumerable: true, get: function () { return wearable_models_1.VehicleWithCapabilities; } });
const wearable_parsing_1 = require("./wearable_parsing");
Object.defineProperty(exports, "parse_vehicles_with_capabilities", { enumerable: true, get: function () { return wearable_parsing_1.parse_vehicles_with_capabilities; } });
/** Translated upstream _GarageClientMixin. */
class _GarageClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _GarageClientMixin, __args); }
    /** Return vehicles attached to the account. */
    async async_get_vehicles(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return vehicles attached to the account. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehiclesStaticData", _runtime_1.py.attr(operations, "VEHICLES_STATIC_DATA"), {}], null));
        return _runtime_1.py.call(parsing_1.parse_vehicles, [data], null);
    }
    /** Return the wearable client's batch vehicle and capability summary. */
    async async_get_vehicles_with_capabilities(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return the wearable client's batch vehicle and capability summary. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["WearableVehicles", _runtime_1.py.attr(operations, "WEARABLE_VEHICLES"), {}], null));
        return _runtime_1.py.call(wearable_parsing_1.parse_vehicles_with_capabilities, [data], null);
    }
    /** Register a vehicle in the signed-in account's garage. */
    async async_add_vehicle(...__args) {
        let data;
        let { "vin": vin, "terms_and_conditions_accepted": terms_and_conditions_accepted } = _runtime_1.py.bind(__args, ["vin", "terms_and_conditions_accepted"], {}, [], null, null);
        /** Register a vehicle in the signed-in account's garage. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["AddVehicle", _runtime_1.py.attr(operations, "ADD_VEHICLE"), _runtime_1.py.call(garage_inputs_1.add_vehicle_variables, [vin, terms_and_conditions_accepted], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_add_vehicle, [data], null);
    }
    /** Remove a vehicle from the signed-in account's garage. */
    async async_delete_vehicle(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Remove a vehicle from the signed-in account's garage. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DeleteVehicle", _runtime_1.py.attr(operations, "DELETE_VEHICLE"), _runtime_1.py.call(garage_inputs_1.delete_vehicle_variables, [vin], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_delete_vehicle, [data], null);
    }
    /** Register a vehicle through the NCAR/ICAR garage flow. */
    async async_add_ncar_icar_vehicle(...__args) {
        let data;
        let { "terms_and_conditions_accepted": terms_and_conditions_accepted, "guid": guid, "account": account } = _runtime_1.py.bind(__args, ["terms_and_conditions_accepted", "guid"], { "account": graphql_input_1.UNSET }, ["account"], null, null);
        /** Register a vehicle through the NCAR/ICAR garage flow. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NcarIcarAddVehicle", _runtime_1.py.attr(operations, "NCAR_ICAR_ADD_VEHICLE"), _runtime_1.py.call(garage_inputs_1.ncar_icar_add_vehicle_variables, [terms_and_conditions_accepted, guid], Object.assign({}, { "account": account }))], null));
        return _runtime_1.py.call(garage_parsing_1.parse_ncar_icar_add_vehicle, [data], null);
    }
    /** Return garage registrations awaiting ownership verification. */
    async async_get_pending_vehicles(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return garage registrations awaiting ownership verification. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["PendingVehicles", _runtime_1.py.attr(operations, "PENDING_VEHICLES"), _runtime_1.py.call(garage_inputs_1.pending_vehicles_variables, [], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_pending_vehicles, [data], null);
    }
    /** Return the vehicle's account ownership sign-in state. */
    async async_get_ownership_status(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the vehicle's account ownership sign-in state. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["OwnershipStatus", _runtime_1.py.attr(operations, "OWNERSHIP_STATUS"), _runtime_1.py.call(garage_inputs_1.ownership_status_variables, [vin], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_ownership_status, [data], null);
    }
    /** Return the vehicle's APC agreement state. */
    async async_get_apc_agreement(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the vehicle's APC agreement state. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["APCAgreement", _runtime_1.py.attr(operations, "APC_AGREEMENT"), _runtime_1.py.call(garage_inputs_1.apc_agreement_variables, [vin], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_apc_agreement, [data], null);
    }
    /** Return the vehicle's APC agreement document URL. */
    async async_get_apc_document_url(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the vehicle's APC agreement document URL. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["APCDocumentURL", _runtime_1.py.attr(operations, "APC_DOCUMENT_URL"), _runtime_1.py.call(garage_inputs_1.apc_document_url_variables, [vin], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_apc_document_url, [data], null);
    }
    /** Create the vehicle's APC agreement selection. */
    async async_create_apc_agreement(...__args) {
        let data;
        let { "vin": vin, "opt_in": opt_in } = _runtime_1.py.bind(__args, ["vin", "opt_in"], {}, [], null, null);
        /** Create the vehicle's APC agreement selection. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreateAPCAgreement", _runtime_1.py.attr(operations, "CREATE_APC_AGREEMENT"), _runtime_1.py.call(garage_inputs_1.create_apc_agreement_variables, [vin, opt_in], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_create_apc_agreement, [data], null);
    }
    /** Update the vehicle's APC agreement selection. */
    async async_update_apc_agreement(...__args) {
        let data;
        let { "vin": vin, "opt_in": opt_in } = _runtime_1.py.bind(__args, ["vin", "opt_in"], {}, [], null, null);
        /** Update the vehicle's APC agreement selection. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateAPCAgreement", _runtime_1.py.attr(operations, "UPDATE_APC_AGREEMENT"), _runtime_1.py.call(garage_inputs_1.update_apc_agreement_variables, [vin, opt_in], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_update_apc_agreement, [data], null);
    }
    /** Request connected-services terms for a VIN through Nissan's mutation. */
    async async_get_connected_terms_and_conditions_by_vin(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Request connected-services terms for a VIN through Nissan's mutation. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ConnectedTermsAndConditionsByVIN", _runtime_1.py.attr(operations, "CONNECTED_TERMS_AND_CONDITIONS_BY_VIN"), _runtime_1.py.call(garage_inputs_1.connected_terms_and_conditions_by_vin_variables, [vin], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_connected_terms_and_conditions_by_vin, [data], null);
    }
    /** Return feature cards used while onboarding a vehicle. */
    async async_get_onboarding_features(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return feature cards used while onboarding a vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["OnboardingFeatures", _runtime_1.py.attr(operations, "ONBOARDING_FEATURES"), _runtime_1.py.call(garage_inputs_1.onboarding_features_variables, [vin], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_onboarding_features, [data], null);
    }
    /** Update optional license-plate and hologram garage metadata. */
    async async_update_vehicle(...__args) {
        let data;
        let { "vin": vin, "license_plate": license_plate, "hologram": hologram } = _runtime_1.py.bind(__args, ["vin"], { "license_plate": graphql_input_1.UNSET, "hologram": graphql_input_1.UNSET }, ["license_plate", "hologram"], null, null);
        /** Update optional license-plate and hologram garage metadata. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateVehicle", _runtime_1.py.attr(operations, "UPDATE_VEHICLE"), _runtime_1.py.call(garage_inputs_1.update_vehicle_variables, [vin], Object.assign({}, { "license_plate": license_plate }, { "hologram": hologram }))], null));
        return _runtime_1.py.call(garage_parsing_1.parse_update_vehicle, [data], null);
    }
    /** Update or clear the vehicle's manually recorded mileage. */
    async async_update_vehicle_manual_mileage(...__args) {
        let data;
        let { "vin": vin, "manual_mileage": manual_mileage } = _runtime_1.py.bind(__args, ["vin"], { "manual_mileage": graphql_input_1.UNSET }, ["manual_mileage"], null, null);
        /** Update or clear the vehicle's manually recorded mileage. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateVehicleManualMileage", _runtime_1.py.attr(operations, "UPDATE_VEHICLE_MANUAL_MILEAGE"), _runtime_1.py.call(garage_inputs_1.update_vehicle_manual_mileage_variables, [vin], Object.assign({}, { "manual_mileage": manual_mileage }))], null));
        return _runtime_1.py.call(garage_parsing_1.parse_update_vehicle_manual_mileage, [data], null);
    }
    /** Update the vehicle nickname shown in the account garage. */
    async async_update_vehicle_nickname(...__args) {
        let data;
        let { "vin": vin, "nickname": nickname } = _runtime_1.py.bind(__args, ["vin", "nickname"], {}, [], null, null);
        /** Update the vehicle nickname shown in the account garage. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateVehicleNickname", _runtime_1.py.attr(operations, "UPDATE_VEHICLE_NICKNAME"), _runtime_1.py.call(garage_inputs_1.update_vehicle_nickname_variables, [vin, nickname], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_update_vehicle_nickname, [data], null);
    }
    /** Upload an ownership-verification attachment for a pending vehicle. */
    async async_upload_ownership_verification(...__args) {
        let data;
        let { "vin": vin, "filename": filename, "attachment": attachment, "opt_in_sms": opt_in_sms } = _runtime_1.py.bind(__args, ["vin", "filename", "attachment", "opt_in_sms"], {}, [], null, null);
        /** Upload an ownership-verification attachment for a pending vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UploadOwnershipVerification", _runtime_1.py.attr(operations, "UPLOAD_OWNERSHIP_VERIFICATION"), _runtime_1.py.call(garage_inputs_1.upload_ownership_verification_variables, [vin, filename, attachment, opt_in_sms], null)], null));
        return _runtime_1.py.call(garage_parsing_1.parse_upload_ownership_verification, [data], null);
    }
}
exports._GarageClientMixin = _GarageClientMixin;
_runtime_1.py.classType(_GarageClientMixin);
//# sourceMappingURL=_garage_client.js.map