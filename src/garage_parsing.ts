// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { AddVehicleResult, AddVehicleSuccess, AgreementStatus, APCAgreement, APCAgreementMutationResult, APCDocument, ConnectedTermsAndConditionsResult, DeleteVehicleError, DeleteVehicleResult, DeleteVehicleSuccess, InvalidVINError, NcarIcarAddVehicleResult, NonConnectedVehicleResponse, OnboardingFeature, OnboardingFeatureImageType, OwnershipStatus, PendingVehicle, RegisterCorporateVehicleEmailSentToPrimaryOwnerError, RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError, RegisterGeneralError, RequireOwnershipVerification, TermsAndConditionsResponse, UnselectedGarageResult, UpdateVehicleGeneralError, UpdateVehicleHologramInvalidLengthError, UpdateVehicleInvalidLicensePlateError, UpdateVehicleInvalidMileageError, UpdateVehicleManualMileageResult, UpdateVehicleManualMileageSuccess, UpdateVehicleNicknameMalformedError, UpdateVehicleNicknameResult, UpdateVehicleNicknameSuccess, UpdateVehicleResult, UpdateVehicleSuccess, UploadOwnershipVerificationResult, UploadOwnershipVerificationSuccess, ValidVINResponse, VehicleHologram, VINAlreadyExistsInAnotherGarageError, VINNotFoundError } from "./garage_models";
export { AddVehicleResult, AddVehicleSuccess, AgreementStatus, APCAgreement, APCAgreementMutationResult, APCDocument, ConnectedTermsAndConditionsResult, DeleteVehicleError, DeleteVehicleResult, DeleteVehicleSuccess, InvalidVINError, NcarIcarAddVehicleResult, NonConnectedVehicleResponse, OnboardingFeature, OnboardingFeatureImageType, OwnershipStatus, PendingVehicle, RegisterCorporateVehicleEmailSentToPrimaryOwnerError, RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError, RegisterGeneralError, RequireOwnershipVerification, TermsAndConditionsResponse, UnselectedGarageResult, UpdateVehicleGeneralError, UpdateVehicleHologramInvalidLengthError, UpdateVehicleInvalidLicensePlateError, UpdateVehicleInvalidMileageError, UpdateVehicleManualMileageResult, UpdateVehicleManualMileageSuccess, UpdateVehicleNicknameMalformedError, UpdateVehicleNicknameResult, UpdateVehicleNicknameSuccess, UpdateVehicleResult, UpdateVehicleSuccess, UploadOwnershipVerificationResult, UploadOwnershipVerificationSuccess, ValidVINResponse, VehicleHologram, VINAlreadyExistsInAnotherGarageError, VINNotFoundError };

export type RegistrationCommonResult = AddVehicleSuccess | RegisterGeneralError | RequireOwnershipVerification;

export type CommonVehicleUpdateError = InvalidVINError | VINNotFoundError | UpdateVehicleGeneralError;

export function parse_add_vehicle(data: Record<string, unknown>): AddVehicleResult | null;
/** Parse every generated AddVehicle union branch. */
export function parse_add_vehicle(...__args: any[]): any {
let common_result, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated AddVehicle union branch. */
root_field = "addVehicle";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
common_result = $.call(_parse_registration_common_result, [root, root_field, typename], null);
if ($.truth(((common_result !== null)))) {
return common_result;
}
if ($.truth(($.eq(typename, "RegisterCorporateVehicleEmailSentToPrimaryOwnerError")))) {
return $.call(RegisterCorporateVehicleEmailSentToPrimaryOwnerError, [$.call(_message, [root, root_field], null)], null);
}
if ($.truth(($.eq(typename, "RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError")))) {
return $.call(RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError, [$.call(_message, [root, root_field], null)], null);
}
if ($.truth(($.eq(typename, "VINAlreadyExistsInAnotherGarageError")))) {
return $.call(VINAlreadyExistsInAnotherGarageError, [$.call(_message, [root, root_field], null)], null);
}
return $.call(UnselectedGarageResult, [typename], null);
}

export function parse_delete_vehicle(data: Record<string, unknown>): DeleteVehicleResult | null;
/** Parse the generated DeleteVehicle union branches. */
export function parse_delete_vehicle(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the generated DeleteVehicle union branches. */
root_field = "deleteVehicle";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "DeleteVehicleSuccessResponse")))) {
return $.call(DeleteVehicleSuccess, [$.call(_string, [$.call($.attr(root, "get"), ["vin"], null), ($.str(root_field) + ".vin")], null)], null);
}
if ($.truth(($.eq(typename, "DeleteVehicleError")))) {
return $.call(DeleteVehicleError, [$.call(_message, [root, root_field], null)], null);
}
return $.call(UnselectedGarageResult, [typename], null);
}

export function parse_ncar_icar_add_vehicle(data: Record<string, unknown>): NcarIcarAddVehicleResult | null;
/** Parse every generated NCAR/ICAR registration union branch. */
export function parse_ncar_icar_add_vehicle(...__args: any[]): any {
let result, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated NCAR/ICAR registration union branch. */
root_field = "ncarIcarAddVehicle";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
result = $.call(_parse_registration_common_result, [root, root_field, typename], null);
if ($.truth(((result !== null)))) {
return result;
}
return $.call(UnselectedGarageResult, [typename], null);
}

export function parse_pending_vehicles(data: Record<string, unknown>): ReadonlyArray<PendingVehicle | null> | null;
/** Parse nullable pending vehicles and nullable list entries. */
export function parse_pending_vehicles(...__args: any[]): any {
let index, path, root_field, value, values, vehicle, vehicles;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable pending vehicles and nullable list entries. */
root_field = "pendingVehicles";
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
values = $.call(_nullable_list, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
if ($.truth(((values === null)))) {
return null;
}
vehicles = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(vehicles, "append"), [null], null);
continue;
}
path = ($.str(root_field) + "[" + $.str(index) + "]");
vehicle = $.call(_typed_object, [value, path], null);
$.call($.attr(vehicles, "append"), [$.call(PendingVehicle, [], Object.assign({}, {"vin": $.call(_string, [$.call($.attr(vehicle, "get"), ["vin"], null), ($.str(path) + ".vin")], null)}, {"case_status": $.call(_nullable_string, [$.call($.attr(vehicle, "get"), ["caseStatus"], null), ($.str(path) + ".caseStatus")], null)}, {"model": $.call(_nullable_string, [$.call($.attr(vehicle, "get"), ["model"], null), ($.str(path) + ".model")], null)}, {"case_id": $.call(_nullable_string, [$.call($.attr(vehicle, "get"), ["caseId"], null), ($.str(path) + ".caseId")], null)}, {"case_number": $.call(_nullable_string, [$.call($.attr(vehicle, "get"), ["caseNumber"], null), ($.str(path) + ".caseNumber")], null)}, {"year": $.call(_nullable_string, [$.call($.attr(vehicle, "get"), ["year"], null), ($.str(path) + ".year")], null)}))], null);
}
return $.call($.tuple, [vehicles], null);
}

export function parse_ownership_status(data: Record<string, unknown>): OwnershipStatus | null;
/** Parse the nullable AVK2 ownership status without a UI default. */
export function parse_ownership_status(...__args: any[]): any {
let path, status, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable AVK2 ownership status without a UI default. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "ownershipStatus"))))) {
return null;
}
path = "vehicle.ownershipStatus";
status = $.call(_optional_typed_object, [$.call($.attr(vehicle, "get"), ["ownershipStatus"], null), path], null);
if ($.truth(((status === null)))) {
return null;
}
return $.call(OwnershipStatus, [], Object.assign({}, {"is_signed_in": $.call(_nullable_bool, [$.call($.attr(status, "get"), ["isSignedIn"], null), ($.str(path) + ".isSignedIn")], null)}));
}

export function parse_apc_agreement(data: Record<string, unknown>): APCAgreement | null;
/** Parse the nullable APC agreement state. */
export function parse_apc_agreement(...__args: any[]): any {
let agreement, path, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable APC agreement state. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "apcAgreement"))))) {
return null;
}
path = "vehicle.apcAgreement";
agreement = $.call(_optional_typed_object, [$.call($.attr(vehicle, "get"), ["apcAgreement"], null), path], null);
if ($.truth(((agreement === null)))) {
return null;
}
return $.call(APCAgreement, [], Object.assign({}, {"opt_in": $.call(_nullable_agreement_status, [$.call($.attr(agreement, "get"), ["optIn"], null), ($.str(path) + ".optIn")], null)}));
}

export function parse_apc_document_url(data: Record<string, unknown>): APCDocument | null;
/** Parse the raw nullable APC document URL, including an empty string. */
export function parse_apc_document_url(...__args: any[]): any {
let agreement, path, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the raw nullable APC document URL, including an empty string. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "apcAgreement"))))) {
return null;
}
path = "vehicle.apcAgreement";
agreement = $.call(_optional_typed_object, [$.call($.attr(vehicle, "get"), ["apcAgreement"], null), path], null);
if ($.truth(((agreement === null)))) {
return null;
}
return $.call(APCDocument, [], Object.assign({}, {"document_url": $.call(_nullable_string, [$.call($.attr(agreement, "get"), ["documentURL"], null), ($.str(path) + ".documentURL")], null)}));
}

export function parse_create_apc_agreement(data: Record<string, unknown>): APCAgreementMutationResult | null;
/** Parse APC agreement creation without coercing a null success flag. */
export function parse_create_apc_agreement(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse APC agreement creation without coercing a null success flag. */
return $.call(_parse_apc_agreement_mutation, [data, "createAPCAgreement"], null);
}

export function parse_update_apc_agreement(data: Record<string, unknown>): APCAgreementMutationResult | null;
/** Parse APC agreement update without coercing a null success flag. */
export function parse_update_apc_agreement(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse APC agreement update without coercing a null success flag. */
return $.call(_parse_apc_agreement_mutation, [data, "updateAPCAgreement"], null);
}

export function parse_connected_terms_and_conditions_by_vin(data: Record<string, unknown>): ConnectedTermsAndConditionsResult | null;
/** Parse every generated connected-terms union branch. */
export function parse_connected_terms_and_conditions_by_vin(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated connected-terms union branch. */
root_field = "connectedTermsAndConditionsByVIN";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "TermsAndConditionsResponse")))) {
return $.call(TermsAndConditionsResponse, [], Object.assign({}, {"title": $.call(_nullable_string, [$.call($.attr(root, "get"), ["title"], null), ($.str(root_field) + ".title")], null)}, {"body": $.call(_nullable_string, [$.call($.attr(root, "get"), ["body"], null), ($.str(root_field) + ".body")], null)}, {"url": $.call(_nullable_string, [$.call($.attr(root, "get"), ["url"], null), ($.str(root_field) + ".url")], null)}));
}
if ($.truth(($.eq(typename, "InvalidVINError")))) {
return $.call(InvalidVINError, [$.call(_message, [root, root_field], null)], null);
}
if ($.truth(($.eq(typename, "NonConnectedVehicleResponse")))) {
return $.call(NonConnectedVehicleResponse, [$.call(_message, [root, root_field], null)], null);
}
if ($.truth(($.eq(typename, "ValidVINResponse")))) {
return $.call(ValidVINResponse, [$.call(_message, [root, root_field], null)], null);
}
return $.call(UnselectedGarageResult, [typename], null);
}

export function parse_onboarding_features(data: Record<string, unknown>): ReadonlyArray<OnboardingFeature | null> | null;
/** Parse nullable onboarding features and nullable list entries. */
export function parse_onboarding_features(...__args: any[]): any {
let feature, feature_path, features, index, path, value, values, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable onboarding features and nullable list entries. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "onboardingFeatures"))))) {
return null;
}
path = "vehicle.onboardingFeatures";
values = $.call(_nullable_list, [$.call($.attr(vehicle, "get"), ["onboardingFeatures"], null), path], null);
if ($.truth(((values === null)))) {
return null;
}
features = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(features, "append"), [null], null);
continue;
}
feature_path = ($.str(path) + "[" + $.str(index) + "]");
feature = $.call(_typed_object, [value, feature_path], null);
$.call($.attr(features, "append"), [$.call(OnboardingFeature, [], Object.assign({}, {"position": $.call(_nullable_int, [$.call($.attr(feature, "get"), ["position"], null), ($.str(feature_path) + ".position")], null)}, {"title": $.call(_nullable_string, [$.call($.attr(feature, "get"), ["title"], null), ($.str(feature_path) + ".title")], null)}, {"body": $.call(_nullable_string, [$.call($.attr(feature, "get"), ["body"], null), ($.str(feature_path) + ".body")], null)}, {"image_type": $.call(_nullable_onboarding_feature_image_type, [$.call($.attr(feature, "get"), ["imageType"], null), ($.str(feature_path) + ".imageType")], null)}))], null);
}
return $.call($.tuple, [features], null);
}

export function parse_update_vehicle(data: Record<string, unknown>): UpdateVehicleResult | null;
/** Parse every generated license-plate and hologram update branch. */
export function parse_update_vehicle(...__args: any[]): any {
let common_error, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated license-plate and hologram update branch. */
root_field = "updateVehicle";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "UpdateVehicleSuccessResponse")))) {
return $.call(UpdateVehicleSuccess, [], Object.assign({}, {"license_plate": $.call(_nullable_string, [$.call($.attr(root, "get"), ["licensePlate"], null), ($.str(root_field) + ".licensePlate")], null)}, {"hologram": $.call(_nullable_vehicle_hologram, [$.call($.attr(root, "get"), ["hologram"], null), ($.str(root_field) + ".hologram")], null)}));
}
if ($.truth(($.eq(typename, "UpdateVehicleInvalidLicensePlateError")))) {
return $.call(UpdateVehicleInvalidLicensePlateError, [$.call(_message, [root, root_field], null)], null);
}
if ($.truth(($.eq(typename, "UpdateVehicleHologramInvalidLengthError")))) {
return $.call(UpdateVehicleHologramInvalidLengthError, [$.call(_message, [root, root_field], null)], null);
}
common_error = $.call(_parse_common_vehicle_update_error, [root, root_field, typename], null);
if ($.truth(((common_error !== null)))) {
return common_error;
}
return $.call(UnselectedGarageResult, [typename], null);
}

export function parse_update_vehicle_manual_mileage(data: Record<string, unknown>): UpdateVehicleManualMileageResult | null;
/** Parse every generated manual-mileage update branch. */
export function parse_update_vehicle_manual_mileage(...__args: any[]): any {
let common_error, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated manual-mileage update branch. */
root_field = "updateVehicle";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "UpdateVehicleSuccessResponse")))) {
return $.call(UpdateVehicleManualMileageSuccess, [], Object.assign({}, {"manual_mileage": $.call(_nullable_string, [$.call($.attr(root, "get"), ["manualMileage"], null), ($.str(root_field) + ".manualMileage")], null)}));
}
if ($.truth(($.eq(typename, "UpdateVehicleInvalidMileageError")))) {
return $.call(UpdateVehicleInvalidMileageError, [$.call(_message, [root, root_field], null)], null);
}
common_error = $.call(_parse_common_vehicle_update_error, [root, root_field, typename], null);
if ($.truth(((common_error !== null)))) {
return common_error;
}
return $.call(UnselectedGarageResult, [typename], null);
}

export function parse_update_vehicle_nickname(data: Record<string, unknown>): UpdateVehicleNicknameResult | null;
/** Parse every generated nickname update branch. */
export function parse_update_vehicle_nickname(...__args: any[]): any {
let common_error, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated nickname update branch. */
root_field = "updateVehicle";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "UpdateVehicleSuccessResponse")))) {
return $.call(UpdateVehicleNicknameSuccess, [], Object.assign({}, {"nickname": $.call(_string, [$.call($.attr(root, "get"), ["nickname"], null), ($.str(root_field) + ".nickname")], null)}));
}
if ($.truth(($.eq(typename, "UpdateVehicleNicknameMalformedError")))) {
return $.call(UpdateVehicleNicknameMalformedError, [$.call(_message, [root, root_field], null)], null);
}
common_error = $.call(_parse_common_vehicle_update_error, [root, root_field, typename], null);
if ($.truth(((common_error !== null)))) {
return common_error;
}
return $.call(UnselectedGarageResult, [typename], null);
}

export function parse_upload_ownership_verification(data: Record<string, unknown>): UploadOwnershipVerificationResult | null;
/** Parse every generated ownership-verification upload branch. */
export function parse_upload_ownership_verification(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated ownership-verification upload branch. */
root_field = "uploadOwnershipVerification";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "UploadOwnershipVerificationSuccess")))) {
return $.call(UploadOwnershipVerificationSuccess, [], Object.assign({}, {"case_number": $.call(_string, [$.call($.attr(root, "get"), ["caseNumber"], null), ($.str(root_field) + ".caseNumber")], null)}));
}
if ($.truth(($.eq(typename, "RegisterGeneralError")))) {
return $.call(RegisterGeneralError, [$.call(_message, [root, root_field], null)], null);
}
return $.call(UnselectedGarageResult, [typename], null);
}

export function _parse_registration_common_result(root: Record<string, unknown>, root_field: string, typename: string): RegistrationCommonResult | null;
/** Translated upstream _parse_registration_common_result. */
export function _parse_registration_common_result(...__args: any[]): any {
let {"root": root, "root_field": root_field, "typename": typename} = $.bind(__args, ["root", "root_field", "typename"], {}, [], null, null);
if ($.truth(($.eq(typename, "AddVehicleSuccessResponse")))) {
return $.call(AddVehicleSuccess, [$.call(_string, [$.call($.attr(root, "get"), ["vin"], null), ($.str(root_field) + ".vin")], null)], null);
}
if ($.truth(($.eq(typename, "RegisterGeneralError")))) {
return $.call(RegisterGeneralError, [$.call(_message, [root, root_field], null)], null);
}
if ($.truth(($.eq(typename, "RequireOwnershipVerification")))) {
return $.call(RequireOwnershipVerification, [$.call(_message, [root, root_field], null)], null);
}
return null;
}

export function _parse_common_vehicle_update_error(root: Record<string, unknown>, root_field: string, typename: string): CommonVehicleUpdateError | null;
/** Translated upstream _parse_common_vehicle_update_error. */
export function _parse_common_vehicle_update_error(...__args: any[]): any {
let {"root": root, "root_field": root_field, "typename": typename} = $.bind(__args, ["root", "root_field", "typename"], {}, [], null, null);
if ($.truth(($.eq(typename, "InvalidVINError")))) {
return $.call(InvalidVINError, [$.call(_message, [root, root_field], null)], null);
}
if ($.truth(($.eq(typename, "VINNotFoundError")))) {
return $.call(VINNotFoundError, [$.call(_message, [root, root_field], null)], null);
}
if ($.truth(($.eq(typename, "UpdateVehicleGeneralError")))) {
return $.call(UpdateVehicleGeneralError, [$.call(_message, [root, root_field], null)], null);
}
return null;
}

export function _parse_apc_agreement_mutation(data: Record<string, unknown>, root_field: string): APCAgreementMutationResult | null;
/** Translated upstream _parse_apc_agreement_mutation. */
export function _parse_apc_agreement_mutation(...__args: any[]): any {
let root;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(APCAgreementMutationResult, [], Object.assign({}, {"success": $.call(_nullable_bool, [$.call($.attr(root, "get"), ["success"], null), ($.str(root_field) + ".success")], null)}));
}

export function _vehicle(data: Record<string, unknown>): Record<string, unknown> | null;
/** Translated upstream _vehicle. */
export function _vehicle(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
return $.call(_root, [data, "vehicle"], null);
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
$.call(_typename, [value, path], null);
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

export function _typename(value: Record<string, unknown>, path: string): string;
/** Translated upstream _typename. */
export function _typename(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(_string, [$.call($.attr(value, "get"), ["__typename"], null), ($.str(path) + ".__typename")], null);
}

export function _message(value: Record<string, unknown>, path: string): string;
/** Translated upstream _message. */
export function _message(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(_string, [$.call($.attr(value, "get"), ["message"], null), ($.str(path) + ".message")], null);
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

export function _nullable_bool(value: unknown, path: string): boolean | null;
/** Translated upstream _nullable_bool. */
export function _nullable_bool(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _nullable_int(value: unknown, path: string): number | null;
/** Translated upstream _nullable_int. */
export function _nullable_int(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.int], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an integer")], null);
}
return value;
}

export function _nullable_agreement_status(value: unknown, path: string): AgreementStatus | null;
/** Translated upstream _nullable_agreement_status. */
export function _nullable_agreement_status(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_nullable_string, [value, path], null);
if ($.truth(((raw_value === null)))) {
return null;
}
try {
return $.call(AgreementStatus, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(AgreementStatus, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _nullable_vehicle_hologram(value: unknown, path: string): VehicleHologram | null;
/** Translated upstream _nullable_vehicle_hologram. */
export function _nullable_vehicle_hologram(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_nullable_string, [value, path], null);
if ($.truth(((raw_value === null)))) {
return null;
}
try {
return $.call(VehicleHologram, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(VehicleHologram, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _nullable_onboarding_feature_image_type(value: unknown, path: string): OnboardingFeatureImageType | null;
/** Translated upstream _nullable_onboarding_feature_image_type. */
export function _nullable_onboarding_feature_image_type(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_nullable_string, [value, path], null);
if ($.truth(((raw_value === null)))) {
return null;
}
try {
return $.call(OnboardingFeatureImageType, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(OnboardingFeatureImageType, "UNKNOWN_VALUE"); } else { throw __error; }
}
}
