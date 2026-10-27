"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VINNotFoundError = exports.VINAlreadyExistsInAnotherGarageError = exports.VehicleHologram = exports.ValidVINResponse = exports.UploadOwnershipVerificationSuccess = exports.UpdateVehicleSuccess = exports.UpdateVehicleNicknameSuccess = exports.UpdateVehicleNicknameMalformedError = exports.UpdateVehicleManualMileageSuccess = exports.UpdateVehicleInvalidMileageError = exports.UpdateVehicleInvalidLicensePlateError = exports.UpdateVehicleHologramInvalidLengthError = exports.UpdateVehicleGeneralError = exports.UnselectedGarageResult = exports.TermsAndConditionsResponse = exports.RequireOwnershipVerification = exports.RegisterGeneralError = exports.RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError = exports.RegisterCorporateVehicleEmailSentToPrimaryOwnerError = exports.PendingVehicle = exports.OwnershipStatus = exports.OnboardingFeatureImageType = exports.OnboardingFeature = exports.NonConnectedVehicleResponse = exports.InvalidVINError = exports.DeleteVehicleSuccess = exports.DeleteVehicleError = exports.APCDocument = exports.APCAgreementMutationResult = exports.APCAgreement = exports.AgreementStatus = exports.AddVehicleSuccess = exports.ResponseError = void 0;
exports.parse_add_vehicle = parse_add_vehicle;
exports.parse_delete_vehicle = parse_delete_vehicle;
exports.parse_ncar_icar_add_vehicle = parse_ncar_icar_add_vehicle;
exports.parse_pending_vehicles = parse_pending_vehicles;
exports.parse_ownership_status = parse_ownership_status;
exports.parse_apc_agreement = parse_apc_agreement;
exports.parse_apc_document_url = parse_apc_document_url;
exports.parse_create_apc_agreement = parse_create_apc_agreement;
exports.parse_update_apc_agreement = parse_update_apc_agreement;
exports.parse_connected_terms_and_conditions_by_vin = parse_connected_terms_and_conditions_by_vin;
exports.parse_onboarding_features = parse_onboarding_features;
exports.parse_update_vehicle = parse_update_vehicle;
exports.parse_update_vehicle_manual_mileage = parse_update_vehicle_manual_mileage;
exports.parse_update_vehicle_nickname = parse_update_vehicle_nickname;
exports.parse_upload_ownership_verification = parse_upload_ownership_verification;
exports._parse_registration_common_result = _parse_registration_common_result;
exports._parse_common_vehicle_update_error = _parse_common_vehicle_update_error;
exports._parse_apc_agreement_mutation = _parse_apc_agreement_mutation;
exports._vehicle = _vehicle;
exports._root = _root;
exports._typed_object = _typed_object;
exports._optional_typed_object = _optional_typed_object;
exports._typename = _typename;
exports._message = _message;
exports._nullable_list = _nullable_list;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._nullable_bool = _nullable_bool;
exports._nullable_int = _nullable_int;
exports._nullable_agreement_status = _nullable_agreement_status;
exports._nullable_vehicle_hologram = _nullable_vehicle_hologram;
exports._nullable_onboarding_feature_image_type = _nullable_onboarding_feature_image_type;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const garage_models_1 = require("./garage_models");
Object.defineProperty(exports, "AddVehicleSuccess", { enumerable: true, get: function () { return garage_models_1.AddVehicleSuccess; } });
Object.defineProperty(exports, "AgreementStatus", { enumerable: true, get: function () { return garage_models_1.AgreementStatus; } });
Object.defineProperty(exports, "APCAgreement", { enumerable: true, get: function () { return garage_models_1.APCAgreement; } });
Object.defineProperty(exports, "APCAgreementMutationResult", { enumerable: true, get: function () { return garage_models_1.APCAgreementMutationResult; } });
Object.defineProperty(exports, "APCDocument", { enumerable: true, get: function () { return garage_models_1.APCDocument; } });
Object.defineProperty(exports, "DeleteVehicleError", { enumerable: true, get: function () { return garage_models_1.DeleteVehicleError; } });
Object.defineProperty(exports, "DeleteVehicleSuccess", { enumerable: true, get: function () { return garage_models_1.DeleteVehicleSuccess; } });
Object.defineProperty(exports, "InvalidVINError", { enumerable: true, get: function () { return garage_models_1.InvalidVINError; } });
Object.defineProperty(exports, "NonConnectedVehicleResponse", { enumerable: true, get: function () { return garage_models_1.NonConnectedVehicleResponse; } });
Object.defineProperty(exports, "OnboardingFeature", { enumerable: true, get: function () { return garage_models_1.OnboardingFeature; } });
Object.defineProperty(exports, "OnboardingFeatureImageType", { enumerable: true, get: function () { return garage_models_1.OnboardingFeatureImageType; } });
Object.defineProperty(exports, "OwnershipStatus", { enumerable: true, get: function () { return garage_models_1.OwnershipStatus; } });
Object.defineProperty(exports, "PendingVehicle", { enumerable: true, get: function () { return garage_models_1.PendingVehicle; } });
Object.defineProperty(exports, "RegisterCorporateVehicleEmailSentToPrimaryOwnerError", { enumerable: true, get: function () { return garage_models_1.RegisterCorporateVehicleEmailSentToPrimaryOwnerError; } });
Object.defineProperty(exports, "RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError", { enumerable: true, get: function () { return garage_models_1.RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError; } });
Object.defineProperty(exports, "RegisterGeneralError", { enumerable: true, get: function () { return garage_models_1.RegisterGeneralError; } });
Object.defineProperty(exports, "RequireOwnershipVerification", { enumerable: true, get: function () { return garage_models_1.RequireOwnershipVerification; } });
Object.defineProperty(exports, "TermsAndConditionsResponse", { enumerable: true, get: function () { return garage_models_1.TermsAndConditionsResponse; } });
Object.defineProperty(exports, "UnselectedGarageResult", { enumerable: true, get: function () { return garage_models_1.UnselectedGarageResult; } });
Object.defineProperty(exports, "UpdateVehicleGeneralError", { enumerable: true, get: function () { return garage_models_1.UpdateVehicleGeneralError; } });
Object.defineProperty(exports, "UpdateVehicleHologramInvalidLengthError", { enumerable: true, get: function () { return garage_models_1.UpdateVehicleHologramInvalidLengthError; } });
Object.defineProperty(exports, "UpdateVehicleInvalidLicensePlateError", { enumerable: true, get: function () { return garage_models_1.UpdateVehicleInvalidLicensePlateError; } });
Object.defineProperty(exports, "UpdateVehicleInvalidMileageError", { enumerable: true, get: function () { return garage_models_1.UpdateVehicleInvalidMileageError; } });
Object.defineProperty(exports, "UpdateVehicleManualMileageSuccess", { enumerable: true, get: function () { return garage_models_1.UpdateVehicleManualMileageSuccess; } });
Object.defineProperty(exports, "UpdateVehicleNicknameMalformedError", { enumerable: true, get: function () { return garage_models_1.UpdateVehicleNicknameMalformedError; } });
Object.defineProperty(exports, "UpdateVehicleNicknameSuccess", { enumerable: true, get: function () { return garage_models_1.UpdateVehicleNicknameSuccess; } });
Object.defineProperty(exports, "UpdateVehicleSuccess", { enumerable: true, get: function () { return garage_models_1.UpdateVehicleSuccess; } });
Object.defineProperty(exports, "UploadOwnershipVerificationSuccess", { enumerable: true, get: function () { return garage_models_1.UploadOwnershipVerificationSuccess; } });
Object.defineProperty(exports, "ValidVINResponse", { enumerable: true, get: function () { return garage_models_1.ValidVINResponse; } });
Object.defineProperty(exports, "VehicleHologram", { enumerable: true, get: function () { return garage_models_1.VehicleHologram; } });
Object.defineProperty(exports, "VINAlreadyExistsInAnotherGarageError", { enumerable: true, get: function () { return garage_models_1.VINAlreadyExistsInAnotherGarageError; } });
Object.defineProperty(exports, "VINNotFoundError", { enumerable: true, get: function () { return garage_models_1.VINNotFoundError; } });
/** Parse every generated AddVehicle union branch. */
function parse_add_vehicle(...__args) {
    let common_result, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated AddVehicle union branch. */
    root_field = "addVehicle";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    common_result = _runtime_1.py.call(_parse_registration_common_result, [root, root_field, typename], null);
    if (_runtime_1.py.truth(((common_result !== null)))) {
        return common_result;
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterCorporateVehicleEmailSentToPrimaryOwnerError")))) {
        return _runtime_1.py.call(garage_models_1.RegisterCorporateVehicleEmailSentToPrimaryOwnerError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError")))) {
        return _runtime_1.py.call(garage_models_1.RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "VINAlreadyExistsInAnotherGarageError")))) {
        return _runtime_1.py.call(garage_models_1.VINAlreadyExistsInAnotherGarageError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    return _runtime_1.py.call(garage_models_1.UnselectedGarageResult, [typename], null);
}
/** Parse the generated DeleteVehicle union branches. */
function parse_delete_vehicle(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the generated DeleteVehicle union branches. */
    root_field = "deleteVehicle";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "DeleteVehicleSuccessResponse")))) {
        return _runtime_1.py.call(garage_models_1.DeleteVehicleSuccess, [_runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["vin"], null), (_runtime_1.py.str(root_field) + ".vin")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "DeleteVehicleError")))) {
        return _runtime_1.py.call(garage_models_1.DeleteVehicleError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    return _runtime_1.py.call(garage_models_1.UnselectedGarageResult, [typename], null);
}
/** Parse every generated NCAR/ICAR registration union branch. */
function parse_ncar_icar_add_vehicle(...__args) {
    let result, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated NCAR/ICAR registration union branch. */
    root_field = "ncarIcarAddVehicle";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    result = _runtime_1.py.call(_parse_registration_common_result, [root, root_field, typename], null);
    if (_runtime_1.py.truth(((result !== null)))) {
        return result;
    }
    return _runtime_1.py.call(garage_models_1.UnselectedGarageResult, [typename], null);
}
/** Parse nullable pending vehicles and nullable list entries. */
function parse_pending_vehicles(...__args) {
    let index, path, root_field, value, values, vehicle, vehicles;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable pending vehicles and nullable list entries. */
    root_field = "pendingVehicles";
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    values = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    vehicles = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((value === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(vehicles, "append"), [null], null);
            continue;
        }
        path = (_runtime_1.py.str(root_field) + "[" + _runtime_1.py.str(index) + "]");
        vehicle = _runtime_1.py.call(_typed_object, [value, path], null);
        _runtime_1.py.call(_runtime_1.py.attr(vehicles, "append"), [_runtime_1.py.call(garage_models_1.PendingVehicle, [], Object.assign({}, { "vin": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["vin"], null), (_runtime_1.py.str(path) + ".vin")], null) }, { "case_status": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["caseStatus"], null), (_runtime_1.py.str(path) + ".caseStatus")], null) }, { "model": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["model"], null), (_runtime_1.py.str(path) + ".model")], null) }, { "case_id": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["caseId"], null), (_runtime_1.py.str(path) + ".caseId")], null) }, { "case_number": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["caseNumber"], null), (_runtime_1.py.str(path) + ".caseNumber")], null) }, { "year": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["year"], null), (_runtime_1.py.str(path) + ".year")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [vehicles], null);
}
/** Parse the nullable AVK2 ownership status without a UI default. */
function parse_ownership_status(...__args) {
    let path, status, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable AVK2 ownership status without a UI default. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "ownershipStatus"))))) {
        return null;
    }
    path = "vehicle.ownershipStatus";
    status = _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["ownershipStatus"], null), path], null);
    if (_runtime_1.py.truth(((status === null)))) {
        return null;
    }
    return _runtime_1.py.call(garage_models_1.OwnershipStatus, [], Object.assign({}, { "is_signed_in": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(status, "get"), ["isSignedIn"], null), (_runtime_1.py.str(path) + ".isSignedIn")], null) }));
}
/** Parse the nullable APC agreement state. */
function parse_apc_agreement(...__args) {
    let agreement, path, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable APC agreement state. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "apcAgreement"))))) {
        return null;
    }
    path = "vehicle.apcAgreement";
    agreement = _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["apcAgreement"], null), path], null);
    if (_runtime_1.py.truth(((agreement === null)))) {
        return null;
    }
    return _runtime_1.py.call(garage_models_1.APCAgreement, [], Object.assign({}, { "opt_in": _runtime_1.py.call(_nullable_agreement_status, [_runtime_1.py.call(_runtime_1.py.attr(agreement, "get"), ["optIn"], null), (_runtime_1.py.str(path) + ".optIn")], null) }));
}
/** Parse the raw nullable APC document URL, including an empty string. */
function parse_apc_document_url(...__args) {
    let agreement, path, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw nullable APC document URL, including an empty string. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "apcAgreement"))))) {
        return null;
    }
    path = "vehicle.apcAgreement";
    agreement = _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["apcAgreement"], null), path], null);
    if (_runtime_1.py.truth(((agreement === null)))) {
        return null;
    }
    return _runtime_1.py.call(garage_models_1.APCDocument, [], Object.assign({}, { "document_url": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(agreement, "get"), ["documentURL"], null), (_runtime_1.py.str(path) + ".documentURL")], null) }));
}
/** Parse APC agreement creation without coercing a null success flag. */
function parse_create_apc_agreement(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse APC agreement creation without coercing a null success flag. */
    return _runtime_1.py.call(_parse_apc_agreement_mutation, [data, "createAPCAgreement"], null);
}
/** Parse APC agreement update without coercing a null success flag. */
function parse_update_apc_agreement(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse APC agreement update without coercing a null success flag. */
    return _runtime_1.py.call(_parse_apc_agreement_mutation, [data, "updateAPCAgreement"], null);
}
/** Parse every generated connected-terms union branch. */
function parse_connected_terms_and_conditions_by_vin(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated connected-terms union branch. */
    root_field = "connectedTermsAndConditionsByVIN";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "TermsAndConditionsResponse")))) {
        return _runtime_1.py.call(garage_models_1.TermsAndConditionsResponse, [], Object.assign({}, { "title": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["title"], null), (_runtime_1.py.str(root_field) + ".title")], null) }, { "body": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["body"], null), (_runtime_1.py.str(root_field) + ".body")], null) }, { "url": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["url"], null), (_runtime_1.py.str(root_field) + ".url")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "InvalidVINError")))) {
        return _runtime_1.py.call(garage_models_1.InvalidVINError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NonConnectedVehicleResponse")))) {
        return _runtime_1.py.call(garage_models_1.NonConnectedVehicleResponse, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ValidVINResponse")))) {
        return _runtime_1.py.call(garage_models_1.ValidVINResponse, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    return _runtime_1.py.call(garage_models_1.UnselectedGarageResult, [typename], null);
}
/** Parse nullable onboarding features and nullable list entries. */
function parse_onboarding_features(...__args) {
    let feature, feature_path, features, index, path, value, values, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable onboarding features and nullable list entries. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "onboardingFeatures"))))) {
        return null;
    }
    path = "vehicle.onboardingFeatures";
    values = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["onboardingFeatures"], null), path], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    features = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((value === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(features, "append"), [null], null);
            continue;
        }
        feature_path = (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]");
        feature = _runtime_1.py.call(_typed_object, [value, feature_path], null);
        _runtime_1.py.call(_runtime_1.py.attr(features, "append"), [_runtime_1.py.call(garage_models_1.OnboardingFeature, [], Object.assign({}, { "position": _runtime_1.py.call(_nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(feature, "get"), ["position"], null), (_runtime_1.py.str(feature_path) + ".position")], null) }, { "title": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(feature, "get"), ["title"], null), (_runtime_1.py.str(feature_path) + ".title")], null) }, { "body": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(feature, "get"), ["body"], null), (_runtime_1.py.str(feature_path) + ".body")], null) }, { "image_type": _runtime_1.py.call(_nullable_onboarding_feature_image_type, [_runtime_1.py.call(_runtime_1.py.attr(feature, "get"), ["imageType"], null), (_runtime_1.py.str(feature_path) + ".imageType")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [features], null);
}
/** Parse every generated license-plate and hologram update branch. */
function parse_update_vehicle(...__args) {
    let common_error, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated license-plate and hologram update branch. */
    root_field = "updateVehicle";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateVehicleSuccessResponse")))) {
        return _runtime_1.py.call(garage_models_1.UpdateVehicleSuccess, [], Object.assign({}, { "license_plate": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["licensePlate"], null), (_runtime_1.py.str(root_field) + ".licensePlate")], null) }, { "hologram": _runtime_1.py.call(_nullable_vehicle_hologram, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["hologram"], null), (_runtime_1.py.str(root_field) + ".hologram")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateVehicleInvalidLicensePlateError")))) {
        return _runtime_1.py.call(garage_models_1.UpdateVehicleInvalidLicensePlateError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateVehicleHologramInvalidLengthError")))) {
        return _runtime_1.py.call(garage_models_1.UpdateVehicleHologramInvalidLengthError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    common_error = _runtime_1.py.call(_parse_common_vehicle_update_error, [root, root_field, typename], null);
    if (_runtime_1.py.truth(((common_error !== null)))) {
        return common_error;
    }
    return _runtime_1.py.call(garage_models_1.UnselectedGarageResult, [typename], null);
}
/** Parse every generated manual-mileage update branch. */
function parse_update_vehicle_manual_mileage(...__args) {
    let common_error, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated manual-mileage update branch. */
    root_field = "updateVehicle";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateVehicleSuccessResponse")))) {
        return _runtime_1.py.call(garage_models_1.UpdateVehicleManualMileageSuccess, [], Object.assign({}, { "manual_mileage": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["manualMileage"], null), (_runtime_1.py.str(root_field) + ".manualMileage")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateVehicleInvalidMileageError")))) {
        return _runtime_1.py.call(garage_models_1.UpdateVehicleInvalidMileageError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    common_error = _runtime_1.py.call(_parse_common_vehicle_update_error, [root, root_field, typename], null);
    if (_runtime_1.py.truth(((common_error !== null)))) {
        return common_error;
    }
    return _runtime_1.py.call(garage_models_1.UnselectedGarageResult, [typename], null);
}
/** Parse every generated nickname update branch. */
function parse_update_vehicle_nickname(...__args) {
    let common_error, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated nickname update branch. */
    root_field = "updateVehicle";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateVehicleSuccessResponse")))) {
        return _runtime_1.py.call(garage_models_1.UpdateVehicleNicknameSuccess, [], Object.assign({}, { "nickname": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["nickname"], null), (_runtime_1.py.str(root_field) + ".nickname")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateVehicleNicknameMalformedError")))) {
        return _runtime_1.py.call(garage_models_1.UpdateVehicleNicknameMalformedError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    common_error = _runtime_1.py.call(_parse_common_vehicle_update_error, [root, root_field, typename], null);
    if (_runtime_1.py.truth(((common_error !== null)))) {
        return common_error;
    }
    return _runtime_1.py.call(garage_models_1.UnselectedGarageResult, [typename], null);
}
/** Parse every generated ownership-verification upload branch. */
function parse_upload_ownership_verification(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated ownership-verification upload branch. */
    root_field = "uploadOwnershipVerification";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UploadOwnershipVerificationSuccess")))) {
        return _runtime_1.py.call(garage_models_1.UploadOwnershipVerificationSuccess, [], Object.assign({}, { "case_number": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["caseNumber"], null), (_runtime_1.py.str(root_field) + ".caseNumber")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterGeneralError")))) {
        return _runtime_1.py.call(garage_models_1.RegisterGeneralError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    return _runtime_1.py.call(garage_models_1.UnselectedGarageResult, [typename], null);
}
/** Translated upstream _parse_registration_common_result. */
function _parse_registration_common_result(...__args) {
    let { "root": root, "root_field": root_field, "typename": typename } = _runtime_1.py.bind(__args, ["root", "root_field", "typename"], {}, [], null, null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "AddVehicleSuccessResponse")))) {
        return _runtime_1.py.call(garage_models_1.AddVehicleSuccess, [_runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["vin"], null), (_runtime_1.py.str(root_field) + ".vin")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterGeneralError")))) {
        return _runtime_1.py.call(garage_models_1.RegisterGeneralError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RequireOwnershipVerification")))) {
        return _runtime_1.py.call(garage_models_1.RequireOwnershipVerification, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    return null;
}
/** Translated upstream _parse_common_vehicle_update_error. */
function _parse_common_vehicle_update_error(...__args) {
    let { "root": root, "root_field": root_field, "typename": typename } = _runtime_1.py.bind(__args, ["root", "root_field", "typename"], {}, [], null, null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "InvalidVINError")))) {
        return _runtime_1.py.call(garage_models_1.InvalidVINError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "VINNotFoundError")))) {
        return _runtime_1.py.call(garage_models_1.VINNotFoundError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateVehicleGeneralError")))) {
        return _runtime_1.py.call(garage_models_1.UpdateVehicleGeneralError, [_runtime_1.py.call(_message, [root, root_field], null)], null);
    }
    return null;
}
/** Translated upstream _parse_apc_agreement_mutation. */
function _parse_apc_agreement_mutation(...__args) {
    let root;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(garage_models_1.APCAgreementMutationResult, [], Object.assign({}, { "success": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(root, "get"), ["success"], null), (_runtime_1.py.str(root_field) + ".success")], null) }));
}
/** Translated upstream _vehicle. */
function _vehicle(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    return _runtime_1.py.call(_root, [data, "vehicle"], null);
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
    _runtime_1.py.call(_typename, [value, path], null);
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
/** Translated upstream _typename. */
function _typename(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
}
/** Translated upstream _message. */
function _message(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["message"], null), (_runtime_1.py.str(path) + ".message")], null);
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
/** Translated upstream _nullable_bool. */
function _nullable_bool(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _nullable_int. */
function _nullable_int(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.int], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an integer")], null);
    }
    return value;
}
/** Translated upstream _nullable_agreement_status. */
function _nullable_agreement_status(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_nullable_string, [value, path], null);
    if (_runtime_1.py.truth(((raw_value === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(garage_models_1.AgreementStatus, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(garage_models_1.AgreementStatus, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _nullable_vehicle_hologram. */
function _nullable_vehicle_hologram(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_nullable_string, [value, path], null);
    if (_runtime_1.py.truth(((raw_value === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(garage_models_1.VehicleHologram, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(garage_models_1.VehicleHologram, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _nullable_onboarding_feature_image_type. */
function _nullable_onboarding_feature_image_type(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_nullable_string, [value, path], null);
    if (_runtime_1.py.truth(((raw_value === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(garage_models_1.OnboardingFeatureImageType, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(garage_models_1.OnboardingFeatureImageType, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=garage_parsing.js.map