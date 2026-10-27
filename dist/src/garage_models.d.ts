import { py as $ } from "./_runtime";
export declare const AgreementStatus: $.EnumType<{
    readonly ACTIVATED: "ACTIVATED";
    readonly DEACTIVATED: "DEACTIVATED";
    readonly NO_STATUS: "NO_STATUS";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type AgreementStatus = ReturnType<typeof AgreementStatus>;
export declare const VehicleHologram: $.EnumType<{
    readonly SINGLE_ZERO: "SINGLE_ZERO";
    readonly DOUBLE_ZERO: "DOUBLE_ZERO";
    readonly ONE: "ONE";
    readonly TWO: "TWO";
    readonly E: "E";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type VehicleHologram = ReturnType<typeof VehicleHologram>;
export declare const OnboardingFeatureImageType: $.EnumType<{
    readonly INFO: "INFO";
    readonly TELEMATICS: "TELEMATICS";
    readonly NECN: "NECN";
    readonly V1G: "V1G";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type OnboardingFeatureImageType = ReturnType<typeof OnboardingFeatureImageType>;
/** Successful garage registration result. */
export declare class AddVehicleSuccess {
    readonly vin: string;
    static __fields: (string | symbol)[][];
    constructor(vin: string);
    constructor(options: {
        vin: string;
    });
}
/** General registration failure returned by garage operations. */
export declare class RegisterGeneralError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Registration result that requires ownership verification. */
export declare class RequireOwnershipVerification {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Corporate registration result awaiting the primary owner's email action. */
export declare class RegisterCorporateVehicleEmailSentToPrimaryOwnerError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Corporate registration result awaiting the primary owner's consent. */
export declare class RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Registration failure for a VIN already assigned to another garage. */
export declare class VINAlreadyExistsInAnotherGarageError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Union result for which the operation selected only its GraphQL typename. */
export declare class UnselectedGarageResult {
    readonly typename: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string);
    constructor(options: {
        typename: string;
    });
}
export type AddVehicleResult = AddVehicleSuccess | RegisterGeneralError | RequireOwnershipVerification | RegisterCorporateVehicleEmailSentToPrimaryOwnerError | RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError | VINAlreadyExistsInAnotherGarageError | UnselectedGarageResult;
export type NcarIcarAddVehicleResult = AddVehicleSuccess | RegisterGeneralError | RequireOwnershipVerification | UnselectedGarageResult;
/** Successful garage deletion result. */
export declare class DeleteVehicleSuccess {
    readonly vin: string;
    static __fields: (string | symbol)[][];
    constructor(vin: string);
    constructor(options: {
        vin: string;
    });
}
/** Garage deletion failure returned by Nissan. */
export declare class DeleteVehicleError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export type DeleteVehicleResult = DeleteVehicleSuccess | DeleteVehicleError | UnselectedGarageResult;
/** Vehicle whose ownership-verification case is still pending. */
export declare class PendingVehicle {
    readonly vin: string;
    readonly case_status: string | null;
    readonly model: string | null;
    readonly case_id: string | null;
    readonly case_number: string | null;
    readonly year: string | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string, case_status: string | null, model: string | null, case_id: string | null, case_number: string | null, year: string | null);
    constructor(options: {
        vin: string;
        case_status: string | null;
        model: string | null;
        case_id: string | null;
        case_number: string | null;
        year: string | null;
    });
}
/** Nullable signed-in ownership state for an AVK2 vehicle. */
export declare class OwnershipStatus {
    readonly is_signed_in: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(is_signed_in: boolean | null);
    constructor(options: {
        is_signed_in: boolean | null;
    });
}
/** Nullable APC enrollment state for a vehicle. */
export declare class APCAgreement {
    readonly opt_in: AgreementStatus | null;
    static __fields: (string | symbol)[][];
    constructor(opt_in: AgreementStatus | null);
    constructor(options: {
        opt_in: AgreementStatus | null;
    });
}
/** Nullable APC agreement document URL. */
export declare class APCDocument {
    readonly document_url: string | null;
    static __fields: (string | symbol)[][];
    constructor(document_url: string | null);
    constructor(options: {
        document_url: string | null;
    });
}
/** Nullable success flag returned by APC create and update mutations. */
export declare class APCAgreementMutationResult {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
/** Nullable connected-services terms content for a VIN. */
export declare class TermsAndConditionsResponse {
    readonly title: string | null;
    readonly body: string | null;
    readonly url: string | null;
    static __fields: (string | symbol)[][];
    constructor(title: string | null, body: string | null, url: string | null);
    constructor(options: {
        title: string | null;
        body: string | null;
        url: string | null;
    });
}
/** Operation failure caused by an invalid VIN. */
export declare class InvalidVINError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Terms lookup result for a vehicle without connected services. */
export declare class NonConnectedVehicleResponse {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Terms lookup result indicating a valid VIN without returned terms. */
export declare class ValidVINResponse {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export type ConnectedTermsAndConditionsResult = TermsAndConditionsResponse | InvalidVINError | NonConnectedVehicleResponse | ValidVINResponse | UnselectedGarageResult;
/** One nullable-field onboarding feature returned for a vehicle. */
export declare class OnboardingFeature {
    readonly position: number | null;
    readonly title: string | null;
    readonly body: string | null;
    readonly image_type: OnboardingFeatureImageType | null;
    static __fields: (string | symbol)[][];
    constructor(position: number | null, title: string | null, body: string | null, image_type: OnboardingFeatureImageType | null);
    constructor(options: {
        position: number | null;
        title: string | null;
        body: string | null;
        image_type: OnboardingFeatureImageType | null;
    });
}
/** Successful license-plate or hologram update. */
export declare class UpdateVehicleSuccess {
    readonly license_plate: string | null;
    readonly hologram: VehicleHologram | null;
    static __fields: (string | symbol)[][];
    constructor(license_plate: string | null, hologram: VehicleHologram | null);
    constructor(options: {
        license_plate: string | null;
        hologram: VehicleHologram | null;
    });
}
/** Vehicle update failure caused by an invalid license plate. */
export declare class UpdateVehicleInvalidLicensePlateError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Vehicle update failure caused by an invalid hologram length. */
export declare class UpdateVehicleHologramInvalidLengthError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Vehicle update failure for a VIN absent from the account. */
export declare class VINNotFoundError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** General vehicle update failure returned by Nissan. */
export declare class UpdateVehicleGeneralError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export type UpdateVehicleResult = UpdateVehicleSuccess | UpdateVehicleInvalidLicensePlateError | UpdateVehicleHologramInvalidLengthError | InvalidVINError | VINNotFoundError | UpdateVehicleGeneralError | UnselectedGarageResult;
/** Successful manual-mileage update with Nissan's string response scalar. */
export declare class UpdateVehicleManualMileageSuccess {
    readonly manual_mileage: string | null;
    static __fields: (string | symbol)[][];
    constructor(manual_mileage: string | null);
    constructor(options: {
        manual_mileage: string | null;
    });
}
/** Vehicle update failure caused by an invalid manual mileage. */
export declare class UpdateVehicleInvalidMileageError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export type UpdateVehicleManualMileageResult = UpdateVehicleManualMileageSuccess | UpdateVehicleInvalidMileageError | InvalidVINError | VINNotFoundError | UpdateVehicleGeneralError | UnselectedGarageResult;
/** Successful nickname update. */
export declare class UpdateVehicleNicknameSuccess {
    readonly nickname: string;
    static __fields: (string | symbol)[][];
    constructor(nickname: string);
    constructor(options: {
        nickname: string;
    });
}
/** Vehicle update failure caused by a malformed nickname. */
export declare class UpdateVehicleNicknameMalformedError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export type UpdateVehicleNicknameResult = UpdateVehicleNicknameSuccess | UpdateVehicleNicknameMalformedError | InvalidVINError | VINNotFoundError | UpdateVehicleGeneralError | UnselectedGarageResult;
/** Successful ownership-verification upload. */
export declare class UploadOwnershipVerificationSuccess {
    readonly case_number: string;
    static __fields: (string | symbol)[][];
    constructor(case_number: string);
    constructor(options: {
        case_number: string;
    });
}
export type UploadOwnershipVerificationResult = UploadOwnershipVerificationSuccess | RegisterGeneralError | UnselectedGarageResult;
