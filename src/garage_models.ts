// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

export const AgreementStatus = $.enumType("AgreementStatus", {"ACTIVATED": "ACTIVATED", "DEACTIVATED": "DEACTIVATED", "NO_STATUS": "NO_STATUS", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type AgreementStatus = ReturnType<typeof AgreementStatus>;

export const VehicleHologram = $.enumType("VehicleHologram", {"SINGLE_ZERO": "SINGLE_ZERO", "DOUBLE_ZERO": "DOUBLE_ZERO", "ONE": "ONE", "TWO": "TWO", "E": "E", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type VehicleHologram = ReturnType<typeof VehicleHologram>;

export const OnboardingFeatureImageType = $.enumType("OnboardingFeatureImageType", {"INFO": "INFO", "TELEMATICS": "TELEMATICS", "NECN": "NECN", "V1G": "V1G", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type OnboardingFeatureImageType = ReturnType<typeof OnboardingFeatureImageType>;

/** Successful garage registration result. */
export class AddVehicleSuccess {
readonly vin: string;
static __fields = [["vin", $.MISSING]];
constructor(vin: string);
constructor(options: { vin: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AddVehicleSuccess, __args);  Object.freeze(this); }
}
$.classType(AddVehicleSuccess);

/** General registration failure returned by garage operations. */
export class RegisterGeneralError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RegisterGeneralError, __args);  Object.freeze(this); }
}
$.classType(RegisterGeneralError);

/** Registration result that requires ownership verification. */
export class RequireOwnershipVerification {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RequireOwnershipVerification, __args);  Object.freeze(this); }
}
$.classType(RequireOwnershipVerification);

/** Corporate registration result awaiting the primary owner's email action. */
export class RegisterCorporateVehicleEmailSentToPrimaryOwnerError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RegisterCorporateVehicleEmailSentToPrimaryOwnerError, __args);  Object.freeze(this); }
}
$.classType(RegisterCorporateVehicleEmailSentToPrimaryOwnerError);

/** Corporate registration result awaiting the primary owner's consent. */
export class RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError, __args);  Object.freeze(this); }
}
$.classType(RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError);

/** Registration failure for a VIN already assigned to another garage. */
export class VINAlreadyExistsInAnotherGarageError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VINAlreadyExistsInAnotherGarageError, __args);  Object.freeze(this); }
}
$.classType(VINAlreadyExistsInAnotherGarageError);

/** Union result for which the operation selected only its GraphQL typename. */
export class UnselectedGarageResult {
readonly typename: string;
static __fields = [["typename", $.MISSING]];
constructor(typename: string);
constructor(options: { typename: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnselectedGarageResult, __args);  Object.freeze(this); }
}
$.classType(UnselectedGarageResult);

export type AddVehicleResult = AddVehicleSuccess | RegisterGeneralError | RequireOwnershipVerification | RegisterCorporateVehicleEmailSentToPrimaryOwnerError | RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError | VINAlreadyExistsInAnotherGarageError | UnselectedGarageResult;

export type NcarIcarAddVehicleResult = AddVehicleSuccess | RegisterGeneralError | RequireOwnershipVerification | UnselectedGarageResult;

/** Successful garage deletion result. */
export class DeleteVehicleSuccess {
readonly vin: string;
static __fields = [["vin", $.MISSING]];
constructor(vin: string);
constructor(options: { vin: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DeleteVehicleSuccess, __args);  Object.freeze(this); }
}
$.classType(DeleteVehicleSuccess);

/** Garage deletion failure returned by Nissan. */
export class DeleteVehicleError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DeleteVehicleError, __args);  Object.freeze(this); }
}
$.classType(DeleteVehicleError);

export type DeleteVehicleResult = DeleteVehicleSuccess | DeleteVehicleError | UnselectedGarageResult;

/** Vehicle whose ownership-verification case is still pending. */
export class PendingVehicle {
readonly vin: string;
readonly case_status: string | null;
readonly model: string | null;
readonly case_id: string | null;
readonly case_number: string | null;
readonly year: string | null;
static __fields = [["vin", $.MISSING], ["case_status", $.MISSING], ["model", $.MISSING], ["case_id", $.MISSING], ["case_number", $.MISSING], ["year", $.MISSING]];
constructor(vin: string, case_status: string | null, model: string | null, case_id: string | null, case_number: string | null, year: string | null);
constructor(options: { vin: string; case_status: string | null; model: string | null; case_id: string | null; case_number: string | null; year: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PendingVehicle, __args);  Object.freeze(this); }
}
$.classType(PendingVehicle);

/** Nullable signed-in ownership state for an AVK2 vehicle. */
export class OwnershipStatus {
readonly is_signed_in: boolean | null;
static __fields = [["is_signed_in", $.MISSING]];
constructor(is_signed_in: boolean | null);
constructor(options: { is_signed_in: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OwnershipStatus, __args);  Object.freeze(this); }
}
$.classType(OwnershipStatus);

/** Nullable APC enrollment state for a vehicle. */
export class APCAgreement {
readonly opt_in: AgreementStatus | null;
static __fields = [["opt_in", $.MISSING]];
constructor(opt_in: AgreementStatus | null);
constructor(options: { opt_in: AgreementStatus | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, APCAgreement, __args);  Object.freeze(this); }
}
$.classType(APCAgreement);

/** Nullable APC agreement document URL. */
export class APCDocument {
readonly document_url: string | null;
static __fields = [["document_url", $.MISSING]];
constructor(document_url: string | null);
constructor(options: { document_url: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, APCDocument, __args);  Object.freeze(this); }
}
$.classType(APCDocument);

/** Nullable success flag returned by APC create and update mutations. */
export class APCAgreementMutationResult {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, APCAgreementMutationResult, __args);  Object.freeze(this); }
}
$.classType(APCAgreementMutationResult);

/** Nullable connected-services terms content for a VIN. */
export class TermsAndConditionsResponse {
readonly title: string | null;
readonly body: string | null;
readonly url: string | null;
static __fields = [["title", $.MISSING], ["body", $.MISSING], ["url", $.MISSING]];
constructor(title: string | null, body: string | null, url: string | null);
constructor(options: { title: string | null; body: string | null; url: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TermsAndConditionsResponse, __args);  Object.freeze(this); }
}
$.classType(TermsAndConditionsResponse);

/** Operation failure caused by an invalid VIN. */
export class InvalidVINError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, InvalidVINError, __args);  Object.freeze(this); }
}
$.classType(InvalidVINError);

/** Terms lookup result for a vehicle without connected services. */
export class NonConnectedVehicleResponse {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NonConnectedVehicleResponse, __args);  Object.freeze(this); }
}
$.classType(NonConnectedVehicleResponse);

/** Terms lookup result indicating a valid VIN without returned terms. */
export class ValidVINResponse {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ValidVINResponse, __args);  Object.freeze(this); }
}
$.classType(ValidVINResponse);

export type ConnectedTermsAndConditionsResult = TermsAndConditionsResponse | InvalidVINError | NonConnectedVehicleResponse | ValidVINResponse | UnselectedGarageResult;

/** One nullable-field onboarding feature returned for a vehicle. */
export class OnboardingFeature {
readonly position: number | null;
readonly title: string | null;
readonly body: string | null;
readonly image_type: OnboardingFeatureImageType | null;
static __fields = [["position", $.MISSING], ["title", $.MISSING], ["body", $.MISSING], ["image_type", $.MISSING]];
constructor(position: number | null, title: string | null, body: string | null, image_type: OnboardingFeatureImageType | null);
constructor(options: { position: number | null; title: string | null; body: string | null; image_type: OnboardingFeatureImageType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, OnboardingFeature, __args);  Object.freeze(this); }
}
$.classType(OnboardingFeature);

/** Successful license-plate or hologram update. */
export class UpdateVehicleSuccess {
readonly license_plate: string | null;
readonly hologram: VehicleHologram | null;
static __fields = [["license_plate", $.MISSING], ["hologram", $.MISSING]];
constructor(license_plate: string | null, hologram: VehicleHologram | null);
constructor(options: { license_plate: string | null; hologram: VehicleHologram | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateVehicleSuccess, __args);  Object.freeze(this); }
}
$.classType(UpdateVehicleSuccess);

/** Vehicle update failure caused by an invalid license plate. */
export class UpdateVehicleInvalidLicensePlateError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateVehicleInvalidLicensePlateError, __args);  Object.freeze(this); }
}
$.classType(UpdateVehicleInvalidLicensePlateError);

/** Vehicle update failure caused by an invalid hologram length. */
export class UpdateVehicleHologramInvalidLengthError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateVehicleHologramInvalidLengthError, __args);  Object.freeze(this); }
}
$.classType(UpdateVehicleHologramInvalidLengthError);

/** Vehicle update failure for a VIN absent from the account. */
export class VINNotFoundError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VINNotFoundError, __args);  Object.freeze(this); }
}
$.classType(VINNotFoundError);

/** General vehicle update failure returned by Nissan. */
export class UpdateVehicleGeneralError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateVehicleGeneralError, __args);  Object.freeze(this); }
}
$.classType(UpdateVehicleGeneralError);

export type UpdateVehicleResult = UpdateVehicleSuccess | UpdateVehicleInvalidLicensePlateError | UpdateVehicleHologramInvalidLengthError | InvalidVINError | VINNotFoundError | UpdateVehicleGeneralError | UnselectedGarageResult;

/** Successful manual-mileage update with Nissan's string response scalar. */
export class UpdateVehicleManualMileageSuccess {
readonly manual_mileage: string | null;
static __fields = [["manual_mileage", $.MISSING]];
constructor(manual_mileage: string | null);
constructor(options: { manual_mileage: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateVehicleManualMileageSuccess, __args);  Object.freeze(this); }
}
$.classType(UpdateVehicleManualMileageSuccess);

/** Vehicle update failure caused by an invalid manual mileage. */
export class UpdateVehicleInvalidMileageError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateVehicleInvalidMileageError, __args);  Object.freeze(this); }
}
$.classType(UpdateVehicleInvalidMileageError);

export type UpdateVehicleManualMileageResult = UpdateVehicleManualMileageSuccess | UpdateVehicleInvalidMileageError | InvalidVINError | VINNotFoundError | UpdateVehicleGeneralError | UnselectedGarageResult;

/** Successful nickname update. */
export class UpdateVehicleNicknameSuccess {
readonly nickname: string;
static __fields = [["nickname", $.MISSING]];
constructor(nickname: string);
constructor(options: { nickname: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateVehicleNicknameSuccess, __args);  Object.freeze(this); }
}
$.classType(UpdateVehicleNicknameSuccess);

/** Vehicle update failure caused by a malformed nickname. */
export class UpdateVehicleNicknameMalformedError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateVehicleNicknameMalformedError, __args);  Object.freeze(this); }
}
$.classType(UpdateVehicleNicknameMalformedError);

export type UpdateVehicleNicknameResult = UpdateVehicleNicknameSuccess | UpdateVehicleNicknameMalformedError | InvalidVINError | VINNotFoundError | UpdateVehicleGeneralError | UnselectedGarageResult;

/** Successful ownership-verification upload. */
export class UploadOwnershipVerificationSuccess {
readonly case_number: string;
static __fields = [["case_number", $.MISSING]];
constructor(case_number: string);
constructor(options: { case_number: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UploadOwnershipVerificationSuccess, __args);  Object.freeze(this); }
}
$.classType(UploadOwnershipVerificationSuccess);

export type UploadOwnershipVerificationResult = UploadOwnershipVerificationSuccess | RegisterGeneralError | UnselectedGarageResult;
