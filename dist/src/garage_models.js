"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadOwnershipVerificationSuccess = exports.UpdateVehicleNicknameMalformedError = exports.UpdateVehicleNicknameSuccess = exports.UpdateVehicleInvalidMileageError = exports.UpdateVehicleManualMileageSuccess = exports.UpdateVehicleGeneralError = exports.VINNotFoundError = exports.UpdateVehicleHologramInvalidLengthError = exports.UpdateVehicleInvalidLicensePlateError = exports.UpdateVehicleSuccess = exports.OnboardingFeature = exports.ValidVINResponse = exports.NonConnectedVehicleResponse = exports.InvalidVINError = exports.TermsAndConditionsResponse = exports.APCAgreementMutationResult = exports.APCDocument = exports.APCAgreement = exports.OwnershipStatus = exports.PendingVehicle = exports.DeleteVehicleError = exports.DeleteVehicleSuccess = exports.UnselectedGarageResult = exports.VINAlreadyExistsInAnotherGarageError = exports.RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError = exports.RegisterCorporateVehicleEmailSentToPrimaryOwnerError = exports.RequireOwnershipVerification = exports.RegisterGeneralError = exports.AddVehicleSuccess = exports.OnboardingFeatureImageType = exports.VehicleHologram = exports.AgreementStatus = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
exports.AgreementStatus = _runtime_1.py.enumType("AgreementStatus", { "ACTIVATED": "ACTIVATED", "DEACTIVATED": "DEACTIVATED", "NO_STATUS": "NO_STATUS", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.VehicleHologram = _runtime_1.py.enumType("VehicleHologram", { "SINGLE_ZERO": "SINGLE_ZERO", "DOUBLE_ZERO": "DOUBLE_ZERO", "ONE": "ONE", "TWO": "TWO", "E": "E", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.OnboardingFeatureImageType = _runtime_1.py.enumType("OnboardingFeatureImageType", { "INFO": "INFO", "TELEMATICS": "TELEMATICS", "NECN": "NECN", "V1G": "V1G", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Successful garage registration result. */
class AddVehicleSuccess {
    vin;
    static __fields = [["vin", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AddVehicleSuccess, __args); Object.freeze(this); }
}
exports.AddVehicleSuccess = AddVehicleSuccess;
_runtime_1.py.classType(AddVehicleSuccess);
/** General registration failure returned by garage operations. */
class RegisterGeneralError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterGeneralError, __args); Object.freeze(this); }
}
exports.RegisterGeneralError = RegisterGeneralError;
_runtime_1.py.classType(RegisterGeneralError);
/** Registration result that requires ownership verification. */
class RequireOwnershipVerification {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RequireOwnershipVerification, __args); Object.freeze(this); }
}
exports.RequireOwnershipVerification = RequireOwnershipVerification;
_runtime_1.py.classType(RequireOwnershipVerification);
/** Corporate registration result awaiting the primary owner's email action. */
class RegisterCorporateVehicleEmailSentToPrimaryOwnerError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterCorporateVehicleEmailSentToPrimaryOwnerError, __args); Object.freeze(this); }
}
exports.RegisterCorporateVehicleEmailSentToPrimaryOwnerError = RegisterCorporateVehicleEmailSentToPrimaryOwnerError;
_runtime_1.py.classType(RegisterCorporateVehicleEmailSentToPrimaryOwnerError);
/** Corporate registration result awaiting the primary owner's consent. */
class RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError, __args); Object.freeze(this); }
}
exports.RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError = RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError;
_runtime_1.py.classType(RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError);
/** Registration failure for a VIN already assigned to another garage. */
class VINAlreadyExistsInAnotherGarageError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VINAlreadyExistsInAnotherGarageError, __args); Object.freeze(this); }
}
exports.VINAlreadyExistsInAnotherGarageError = VINAlreadyExistsInAnotherGarageError;
_runtime_1.py.classType(VINAlreadyExistsInAnotherGarageError);
/** Union result for which the operation selected only its GraphQL typename. */
class UnselectedGarageResult {
    typename;
    static __fields = [["typename", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnselectedGarageResult, __args); Object.freeze(this); }
}
exports.UnselectedGarageResult = UnselectedGarageResult;
_runtime_1.py.classType(UnselectedGarageResult);
/** Successful garage deletion result. */
class DeleteVehicleSuccess {
    vin;
    static __fields = [["vin", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DeleteVehicleSuccess, __args); Object.freeze(this); }
}
exports.DeleteVehicleSuccess = DeleteVehicleSuccess;
_runtime_1.py.classType(DeleteVehicleSuccess);
/** Garage deletion failure returned by Nissan. */
class DeleteVehicleError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DeleteVehicleError, __args); Object.freeze(this); }
}
exports.DeleteVehicleError = DeleteVehicleError;
_runtime_1.py.classType(DeleteVehicleError);
/** Vehicle whose ownership-verification case is still pending. */
class PendingVehicle {
    vin;
    case_status;
    model;
    case_id;
    case_number;
    year;
    static __fields = [["vin", _runtime_1.py.MISSING], ["case_status", _runtime_1.py.MISSING], ["model", _runtime_1.py.MISSING], ["case_id", _runtime_1.py.MISSING], ["case_number", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PendingVehicle, __args); Object.freeze(this); }
}
exports.PendingVehicle = PendingVehicle;
_runtime_1.py.classType(PendingVehicle);
/** Nullable signed-in ownership state for an AVK2 vehicle. */
class OwnershipStatus {
    is_signed_in;
    static __fields = [["is_signed_in", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OwnershipStatus, __args); Object.freeze(this); }
}
exports.OwnershipStatus = OwnershipStatus;
_runtime_1.py.classType(OwnershipStatus);
/** Nullable APC enrollment state for a vehicle. */
class APCAgreement {
    opt_in;
    static __fields = [["opt_in", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, APCAgreement, __args); Object.freeze(this); }
}
exports.APCAgreement = APCAgreement;
_runtime_1.py.classType(APCAgreement);
/** Nullable APC agreement document URL. */
class APCDocument {
    document_url;
    static __fields = [["document_url", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, APCDocument, __args); Object.freeze(this); }
}
exports.APCDocument = APCDocument;
_runtime_1.py.classType(APCDocument);
/** Nullable success flag returned by APC create and update mutations. */
class APCAgreementMutationResult {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, APCAgreementMutationResult, __args); Object.freeze(this); }
}
exports.APCAgreementMutationResult = APCAgreementMutationResult;
_runtime_1.py.classType(APCAgreementMutationResult);
/** Nullable connected-services terms content for a VIN. */
class TermsAndConditionsResponse {
    title;
    body;
    url;
    static __fields = [["title", _runtime_1.py.MISSING], ["body", _runtime_1.py.MISSING], ["url", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TermsAndConditionsResponse, __args); Object.freeze(this); }
}
exports.TermsAndConditionsResponse = TermsAndConditionsResponse;
_runtime_1.py.classType(TermsAndConditionsResponse);
/** Operation failure caused by an invalid VIN. */
class InvalidVINError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, InvalidVINError, __args); Object.freeze(this); }
}
exports.InvalidVINError = InvalidVINError;
_runtime_1.py.classType(InvalidVINError);
/** Terms lookup result for a vehicle without connected services. */
class NonConnectedVehicleResponse {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NonConnectedVehicleResponse, __args); Object.freeze(this); }
}
exports.NonConnectedVehicleResponse = NonConnectedVehicleResponse;
_runtime_1.py.classType(NonConnectedVehicleResponse);
/** Terms lookup result indicating a valid VIN without returned terms. */
class ValidVINResponse {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ValidVINResponse, __args); Object.freeze(this); }
}
exports.ValidVINResponse = ValidVINResponse;
_runtime_1.py.classType(ValidVINResponse);
/** One nullable-field onboarding feature returned for a vehicle. */
class OnboardingFeature {
    position;
    title;
    body;
    image_type;
    static __fields = [["position", _runtime_1.py.MISSING], ["title", _runtime_1.py.MISSING], ["body", _runtime_1.py.MISSING], ["image_type", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, OnboardingFeature, __args); Object.freeze(this); }
}
exports.OnboardingFeature = OnboardingFeature;
_runtime_1.py.classType(OnboardingFeature);
/** Successful license-plate or hologram update. */
class UpdateVehicleSuccess {
    license_plate;
    hologram;
    static __fields = [["license_plate", _runtime_1.py.MISSING], ["hologram", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateVehicleSuccess, __args); Object.freeze(this); }
}
exports.UpdateVehicleSuccess = UpdateVehicleSuccess;
_runtime_1.py.classType(UpdateVehicleSuccess);
/** Vehicle update failure caused by an invalid license plate. */
class UpdateVehicleInvalidLicensePlateError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateVehicleInvalidLicensePlateError, __args); Object.freeze(this); }
}
exports.UpdateVehicleInvalidLicensePlateError = UpdateVehicleInvalidLicensePlateError;
_runtime_1.py.classType(UpdateVehicleInvalidLicensePlateError);
/** Vehicle update failure caused by an invalid hologram length. */
class UpdateVehicleHologramInvalidLengthError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateVehicleHologramInvalidLengthError, __args); Object.freeze(this); }
}
exports.UpdateVehicleHologramInvalidLengthError = UpdateVehicleHologramInvalidLengthError;
_runtime_1.py.classType(UpdateVehicleHologramInvalidLengthError);
/** Vehicle update failure for a VIN absent from the account. */
class VINNotFoundError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VINNotFoundError, __args); Object.freeze(this); }
}
exports.VINNotFoundError = VINNotFoundError;
_runtime_1.py.classType(VINNotFoundError);
/** General vehicle update failure returned by Nissan. */
class UpdateVehicleGeneralError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateVehicleGeneralError, __args); Object.freeze(this); }
}
exports.UpdateVehicleGeneralError = UpdateVehicleGeneralError;
_runtime_1.py.classType(UpdateVehicleGeneralError);
/** Successful manual-mileage update with Nissan's string response scalar. */
class UpdateVehicleManualMileageSuccess {
    manual_mileage;
    static __fields = [["manual_mileage", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateVehicleManualMileageSuccess, __args); Object.freeze(this); }
}
exports.UpdateVehicleManualMileageSuccess = UpdateVehicleManualMileageSuccess;
_runtime_1.py.classType(UpdateVehicleManualMileageSuccess);
/** Vehicle update failure caused by an invalid manual mileage. */
class UpdateVehicleInvalidMileageError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateVehicleInvalidMileageError, __args); Object.freeze(this); }
}
exports.UpdateVehicleInvalidMileageError = UpdateVehicleInvalidMileageError;
_runtime_1.py.classType(UpdateVehicleInvalidMileageError);
/** Successful nickname update. */
class UpdateVehicleNicknameSuccess {
    nickname;
    static __fields = [["nickname", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateVehicleNicknameSuccess, __args); Object.freeze(this); }
}
exports.UpdateVehicleNicknameSuccess = UpdateVehicleNicknameSuccess;
_runtime_1.py.classType(UpdateVehicleNicknameSuccess);
/** Vehicle update failure caused by a malformed nickname. */
class UpdateVehicleNicknameMalformedError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateVehicleNicknameMalformedError, __args); Object.freeze(this); }
}
exports.UpdateVehicleNicknameMalformedError = UpdateVehicleNicknameMalformedError;
_runtime_1.py.classType(UpdateVehicleNicknameMalformedError);
/** Successful ownership-verification upload. */
class UploadOwnershipVerificationSuccess {
    case_number;
    static __fields = [["case_number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UploadOwnershipVerificationSuccess, __args); Object.freeze(this); }
}
exports.UploadOwnershipVerificationSuccess = UploadOwnershipVerificationSuccess;
_runtime_1.py.classType(UploadOwnershipVerificationSuccess);
//# sourceMappingURL=garage_models.js.map