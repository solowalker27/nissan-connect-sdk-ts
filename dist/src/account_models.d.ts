import { py as $ } from "./_runtime";
export declare const MarketingPreferenceType: $.EnumType<{
    readonly EMAIL: "EMAIL";
    readonly MAIL: "MAIL";
    readonly SMS: "SMS";
    readonly TELEPHONE: "TELEPHONE";
    readonly IVM: "IVM";
    readonly IAM: "IAM";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type MarketingPreferenceType = ReturnType<typeof MarketingPreferenceType>;
export declare const MobileCarrierCode: $.EnumType<{
    readonly US_ECIT: "US_ECIT";
    readonly US_BOOSTU: "US_BOOSTU";
    readonly US_CELLULA: "US_CELLULA";
    readonly US_CNSMRCL: "US_CNSMRCL";
    readonly US_ALLTEL: "US_ALLTEL";
    readonly US_APPALAC: "US_APPALAC";
    readonly US_ATT: "US_ATT";
    readonly US_BLUEGRA: "US_BLUEGRA";
    readonly US_BOOST: "US_BOOST";
    readonly US_CELLCOM: "US_CELLCOM";
    readonly US_CELLSOU: "US_CELLSOU";
    readonly US_CENTENN: "US_CENTENN";
    readonly US_CINBELL: "US_CINBELL";
    readonly US_CRICKET: "US_CRICKET";
    readonly US_DOBSON: "US_DOBSON";
    readonly US_IMMIX: "US_IMMIX";
    readonly US_METROPC: "US_METROPC";
    readonly US_MIDWEST: "US_MIDWEST";
    readonly US_NEXTEL: "US_NEXTEL";
    readonly US_NTELOS: "US_NTELOS";
    readonly US_REVOL: "US_REVOL";
    readonly US_SPRINT: "US_SPRINT";
    readonly US_TMOBILE: "US_TMOBILE";
    readonly US_VERIZON: "US_VERIZON";
    readonly US_VIRGIN: "US_VIRGIN";
    readonly US_GCI: "US_GCI";
    readonly US_GOOGLE: "US_GOOGLE";
    readonly CA_ALIANT: "CA_ALIANT";
    readonly CA_VIRGIN: "CA_VIRGIN";
    readonly CA_VIDEOTR: "CA_VIDEOTR";
    readonly CA_KOODO: "CA_KOODO";
    readonly CA_WIND: "CA_WIND";
    readonly CA_BELL: "CA_BELL";
    readonly CA_MTS: "CA_MTS";
    readonly CA_PRIMUS: "CA_PRIMUS";
    readonly CA_TELUS: "CA_TELUS";
    readonly CA_FREEDOM: "CA_FREEDOM";
    readonly CA_FIDO: "CA_FIDO";
    readonly CA_PUBLIC: "CA_PUBLIC";
    readonly CA_ROGERS: "CA_ROGERS";
    readonly CA_EASTLINK: "CA_EASTLINK";
    readonly CA_SASKTEL: "CA_SASKTEL";
    readonly CA_OTHER: "CA_OTHER";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type MobileCarrierCode = ReturnType<typeof MobileCarrierCode>;
/** Validation result for a Nissan ID that already exists. */
export declare class NissanIdExists {
    readonly nissan_id: string;
    static __fields: (string | symbol)[][];
    constructor(nissan_id: string);
    constructor(options: {
        nissan_id: string;
    });
}
/** Validation result for a Nissan ID that is available. */
export declare class NissanIdDoesNotExist {
    readonly nissan_id: string;
    static __fields: (string | symbol)[][];
    constructor(nissan_id: string);
    constructor(options: {
        nissan_id: string;
    });
}
/** Validation result requiring an owner-portal password reset. */
export declare class NissanIdRequiresOwnerPortalPasswordReset {
    readonly nissan_id: string;
    readonly link: string;
    static __fields: (string | symbol)[][];
    constructor(nissan_id: string, link: string);
    constructor(options: {
        nissan_id: string;
        link: string;
    });
}
/** Validation result requiring owner-portal profile completion. */
export declare class NissanIdRequiresOwnerPortalProfileCompletion {
    readonly nissan_id: string;
    readonly link: string;
    static __fields: (string | symbol)[][];
    constructor(nissan_id: string, link: string);
    constructor(options: {
        nissan_id: string;
        link: string;
    });
}
/** Validation result requiring an NMAC password reset. */
export declare class NissanIdRequiresNmacPasswordReset {
    readonly nissan_id: string;
    readonly link: string;
    static __fields: (string | symbol)[][];
    constructor(nissan_id: string, link: string);
    constructor(options: {
        nissan_id: string;
        link: string;
    });
}
/** Union result for which the operation selected only its typename. */
export declare class UnselectedAccountResult {
    readonly typename: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string);
    constructor(options: {
        typename: string;
    });
}
export type NissanIdValidationResult = NissanIdExists | NissanIdDoesNotExist | NissanIdRequiresOwnerPortalPasswordReset | NissanIdRequiresOwnerPortalProfileCompletion | NissanIdRequiresNmacPasswordReset | UnselectedAccountResult;
/** One account security question. */
export declare class SecurityQuestion {
    readonly id: string | null;
    readonly question: string | null;
    static __fields: (string | symbol)[][];
    constructor(id: string | null, question: string | null);
    constructor(options: {
        id: string | null;
        question: string | null;
    });
}
/** Security and account-kind flags for the signed-in user. */
export declare class UserInfo {
    readonly pin_configured: boolean | null;
    readonly security_question_id: string | null;
    readonly is_lite_account: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(pin_configured: boolean | null, security_question_id: string | null, is_lite_account: boolean | null);
    constructor(options: {
        pin_configured: boolean | null;
        security_question_id: string | null;
        is_lite_account: boolean | null;
    });
}
/** Nullable NCI delivery-channel preferences for one category. */
export declare class MarketingNotificationPreferences {
    readonly email: boolean | null;
    readonly text_message: boolean | null;
    readonly direct_mail: boolean | null;
    readonly in_app: boolean | null;
    readonly in_vehicle: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(email: boolean | null, text_message: boolean | null, direct_mail: boolean | null, in_app: boolean | null, in_vehicle: boolean | null);
    constructor(options: {
        email: boolean | null;
        text_message: boolean | null;
        direct_mail: boolean | null;
        in_app: boolean | null;
        in_vehicle: boolean | null;
    });
}
/** NCI account preferences. */
export declare class NCIMarketingPreferences {
    readonly email: boolean | null;
    readonly product_updates: MarketingNotificationPreferences | null;
    readonly news_events: MarketingNotificationPreferences | null;
    readonly offers_promotion: MarketingNotificationPreferences | null;
    static __fields: (string | symbol)[][];
    constructor(email: boolean | null, product_updates: MarketingNotificationPreferences | null, news_events: MarketingNotificationPreferences | null, offers_promotion: MarketingNotificationPreferences | null);
    constructor(options: {
        email: boolean | null;
        product_updates: MarketingNotificationPreferences | null;
        news_events: MarketingNotificationPreferences | null;
        offers_promotion: MarketingNotificationPreferences | null;
    });
}
/** NNA account preferences. */
export declare class NNAMarketingPreferences {
    readonly newsletter: ReadonlyArray<MarketingPreferenceType | null> | null;
    readonly product_offers: ReadonlyArray<MarketingPreferenceType | null> | null;
    readonly service_offers: ReadonlyArray<MarketingPreferenceType | null> | null;
    readonly scheduled_maintenance: ReadonlyArray<MarketingPreferenceType | null> | null;
    readonly feedback: ReadonlyArray<MarketingPreferenceType | null> | null;
    static __fields: (string | symbol)[][];
    constructor(newsletter: ReadonlyArray<MarketingPreferenceType | null> | null, product_offers: ReadonlyArray<MarketingPreferenceType | null> | null, service_offers: ReadonlyArray<MarketingPreferenceType | null> | null, scheduled_maintenance: ReadonlyArray<MarketingPreferenceType | null> | null, feedback: ReadonlyArray<MarketingPreferenceType | null> | null);
    constructor(options: {
        newsletter: ReadonlyArray<MarketingPreferenceType | null> | null;
        product_offers: ReadonlyArray<MarketingPreferenceType | null> | null;
        service_offers: ReadonlyArray<MarketingPreferenceType | null> | null;
        scheduled_maintenance: ReadonlyArray<MarketingPreferenceType | null> | null;
        feedback: ReadonlyArray<MarketingPreferenceType | null> | null;
    });
}
export type MarketingPreferencesResult = NCIMarketingPreferences | NNAMarketingPreferences | UnselectedAccountResult;
/** Successful account registration. */
export declare class RegisterAccountSuccess {
    readonly user_id: string;
    static __fields: (string | symbol)[][];
    constructor(user_id: string);
    constructor(options: {
        user_id: string;
    });
}
/** Base for account union branches that contain a message. */
export declare class AccountMessageResult {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
declare const RegisterAccountFirstNameError_base: any;
/** Registration failure caused by the first name. */
export declare class RegisterAccountFirstNameError extends RegisterAccountFirstNameError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountFirstNameError extends AccountMessageResult {
}
declare const RegisterAccountLastNameError_base: any;
/** Registration failure caused by the last name. */
export declare class RegisterAccountLastNameError extends RegisterAccountLastNameError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountLastNameError extends AccountMessageResult {
}
declare const RegisterAccountEmailError_base: any;
/** Registration failure caused by the email address. */
export declare class RegisterAccountEmailError extends RegisterAccountEmailError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountEmailError extends AccountMessageResult {
}
declare const RegisterAccountAddressError_base: any;
/** Registration failure caused by the street address. */
export declare class RegisterAccountAddressError extends RegisterAccountAddressError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountAddressError extends AccountMessageResult {
}
declare const RegisterAccountCityError_base: any;
/** Registration failure caused by the city. */
export declare class RegisterAccountCityError extends RegisterAccountCityError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountCityError extends AccountMessageResult {
}
declare const RegisterAccountStateError_base: any;
/** Registration failure caused by the state or province. */
export declare class RegisterAccountStateError extends RegisterAccountStateError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountStateError extends AccountMessageResult {
}
declare const RegisterAccountPostalCodeError_base: any;
/** Registration failure caused by the postal code. */
export declare class RegisterAccountPostalCodeError extends RegisterAccountPostalCodeError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountPostalCodeError extends AccountMessageResult {
}
declare const RegisterAccountPhoneError_base: any;
/** Registration failure caused by the phone number. */
export declare class RegisterAccountPhoneError extends RegisterAccountPhoneError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountPhoneError extends AccountMessageResult {
}
declare const RegisterAccountPasswordError_base: any;
/** Registration failure caused by the password. */
export declare class RegisterAccountPasswordError extends RegisterAccountPasswordError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountPasswordError extends AccountMessageResult {
}
declare const RegisterAccountDuplicateEmailError_base: any;
/** Registration failure for an email already in use. */
export declare class RegisterAccountDuplicateEmailError extends RegisterAccountDuplicateEmailError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountDuplicateEmailError extends AccountMessageResult {
}
declare const RegisterAccountGeneralError_base: any;
/** General account-registration failure. */
export declare class RegisterAccountGeneralError extends RegisterAccountGeneralError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface RegisterAccountGeneralError extends AccountMessageResult {
}
export type RegisterAccountResult = RegisterAccountSuccess | RegisterAccountFirstNameError | RegisterAccountLastNameError | RegisterAccountEmailError | RegisterAccountAddressError | RegisterAccountCityError | RegisterAccountStateError | RegisterAccountPostalCodeError | RegisterAccountPhoneError | RegisterAccountPasswordError | RegisterAccountDuplicateEmailError | RegisterAccountGeneralError | UnselectedAccountResult;
/** NCAR/ICAR account that can continue enrollment. */
export declare class NcarIcarAccountAvailable {
    readonly email: string;
    readonly phone_number: string;
    readonly is_otp_required: boolean;
    static __fields: (string | symbol)[][];
    constructor(email: string, phone_number: string, is_otp_required: boolean);
    constructor(options: {
        email: string;
        phone_number: string;
        is_otp_required: boolean;
    });
}
/** NCAR/ICAR account that cannot continue enrollment. */
export declare class NcarIcarAccountUnavailable {
    readonly email: string;
    readonly vin: string;
    static __fields: (string | symbol)[][];
    constructor(email: string, vin: string);
    constructor(options: {
        email: string;
        vin: string;
    });
}
declare const NcarIcarCustomerEnrollmentExpiredError_base: any;
/** Enrollment failure caused by an expired NCAR/ICAR link. */
export declare class NcarIcarCustomerEnrollmentExpiredError extends NcarIcarCustomerEnrollmentExpiredError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface NcarIcarCustomerEnrollmentExpiredError extends AccountMessageResult {
}
declare const NcarIcarCustomerEnrollmentGeneralError_base: any;
/** General NCAR/ICAR enrollment failure. */
export declare class NcarIcarCustomerEnrollmentGeneralError extends NcarIcarCustomerEnrollmentGeneralError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface NcarIcarCustomerEnrollmentGeneralError extends AccountMessageResult {
}
declare const AccountGeneralError_base: any;
/** General account operation failure. */
export declare class AccountGeneralError extends AccountGeneralError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface AccountGeneralError extends AccountMessageResult {
}
export type NcarIcarVerifyAccountResult = NcarIcarAccountAvailable | NcarIcarAccountUnavailable | NcarIcarCustomerEnrollmentExpiredError | NcarIcarCustomerEnrollmentGeneralError | AccountGeneralError | UnselectedAccountResult;
/** Nullable postal fields returned by account operations. */
export declare class AccountAddress {
    readonly address_1: string | null;
    readonly address_2: string | null;
    readonly city: string | null;
    readonly state: string | null;
    readonly postal_code: string | null;
    readonly country: string | null;
    static __fields: (string | symbol)[][];
    constructor(address_1: string | null, address_2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null);
    constructor(options: {
        address_1: string | null;
        address_2: string | null;
        city: string | null;
        state: string | null;
        postal_code: string | null;
        country: string | null;
    });
}
/** Nullable customer details recovered from an NCAR/ICAR enrollment. */
export declare class NcarIcarCustomerEnrollment {
    readonly vin: string | null;
    readonly first_name: string | null;
    readonly last_name: string | null;
    readonly email: string | null;
    readonly phone_number: string | null;
    readonly address: AccountAddress | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string | null, first_name: string | null, last_name: string | null, email: string | null, phone_number: string | null, address: AccountAddress | null);
    constructor(options: {
        vin: string | null;
        first_name: string | null;
        last_name: string | null;
        email: string | null;
        phone_number: string | null;
        address: AccountAddress | null;
    });
}
export type NcarIcarCustomerEnrollmentResult = NcarIcarCustomerEnrollment | NcarIcarCustomerEnrollmentExpiredError | NcarIcarCustomerEnrollmentGeneralError | AccountGeneralError | UnselectedAccountResult;
/** Successful one-time password generation. */
export declare class GenerateOtpSuccess {
    readonly reference_id: string;
    readonly retry_available: number;
    static __fields: (string | symbol)[][];
    constructor(reference_id: string, retry_available: number);
    constructor(options: {
        reference_id: string;
        retry_available: number;
    });
}
declare const NcarIcarGuidDeactivated_base: any;
/** NCAR/ICAR OTP failure caused by a deactivated identifier. */
export declare class NcarIcarGuidDeactivated extends NcarIcarGuidDeactivated_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface NcarIcarGuidDeactivated extends AccountMessageResult {
}
declare const NcarIcarGenerateOtpExhausted_base: any;
/** NCAR/ICAR OTP generation failure after all retries. */
export declare class NcarIcarGenerateOtpExhausted extends NcarIcarGenerateOtpExhausted_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface NcarIcarGenerateOtpExhausted extends AccountMessageResult {
}
export type GenerateOtpResult = GenerateOtpSuccess | UnselectedAccountResult;
export type NcarIcarGenerateOtpResult = GenerateOtpSuccess | NcarIcarGuidDeactivated | NcarIcarGenerateOtpExhausted | UnselectedAccountResult;
/** Successful direct OTP verification. */
export declare class VerifyOtpSuccess {
    readonly message: string | null;
    static __fields: (string | symbol)[][];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
/** Failed direct OTP verification with nullable retry information. */
export declare class VerifyOtpFailed {
    readonly message: string | null;
    readonly retry_available: number | null;
    static __fields: (string | symbol)[][];
    constructor(message: string | null, retry_available: number | null);
    constructor(options: {
        message: string | null;
        retry_available: number | null;
    });
}
/** Direct OTP verification failure after all retries. */
export declare class VerifyOtpRetryExhausted {
    readonly message: string | null;
    static __fields: (string | symbol)[][];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export type VerifyOtpResult = VerifyOtpSuccess | VerifyOtpFailed | VerifyOtpRetryExhausted | UnselectedAccountResult;
/** Failed NCAR/ICAR OTP verification with its next reference. */
export declare class NcarIcarVerifyOtpFailed {
    readonly reference_id: string;
    readonly retry_available: number;
    static __fields: (string | symbol)[][];
    constructor(reference_id: string, retry_available: number);
    constructor(options: {
        reference_id: string;
        retry_available: number;
    });
}
declare const NcarIcarVerifyOtpRetryExhausted_base: any;
/** NCAR/ICAR OTP verification failure after all retries. */
export declare class NcarIcarVerifyOtpRetryExhausted extends NcarIcarVerifyOtpRetryExhausted_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface NcarIcarVerifyOtpRetryExhausted extends AccountMessageResult {
}
export type NcarIcarVerifyOtpResult = NcarIcarCustomerEnrollment | NcarIcarCustomerEnrollmentExpiredError | NcarIcarCustomerEnrollmentGeneralError | NcarIcarVerifyOtpFailed | NcarIcarVerifyOtpRetryExhausted | NcarIcarGuidDeactivated | UnselectedAccountResult;
/** Nullable success flag returned by PIN operations. */
export declare class PinOperationSuccess {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
declare const CreatePinError_base: any;
/** PIN creation failure. */
export declare class CreatePinError extends CreatePinError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface CreatePinError extends AccountMessageResult {
}
/** PIN update validation failure. */
export declare class PinValidationError {
    readonly message: string | null;
    static __fields: (string | symbol)[][];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export type CreatePinResult = PinOperationSuccess | CreatePinError | UnselectedAccountResult;
export type UpdatePinResult = PinOperationSuccess | PinValidationError | UnselectedAccountResult;
/** Mobile carrier attached to an updated account. */
export declare class MobileNetworkOperator {
    readonly code: MobileCarrierCode;
    readonly id: number;
    readonly name: string;
    static __fields: (string | symbol)[][];
    constructor(code: MobileCarrierCode, id: number, name: string);
    constructor(options: {
        code: MobileCarrierCode;
        id: number;
        name: string;
    });
}
/** Nullable address fields returned after an account update. */
export declare class UpdatedAccountAddress {
    readonly address_1: string | null;
    readonly address_2: string | null;
    readonly city: string | null;
    readonly state: string | null;
    readonly country: string | null;
    readonly postal_code: string | null;
    readonly district: string | null;
    readonly street_number: string | null;
    static __fields: (string | symbol)[][];
    constructor(address_1: string | null, address_2: string | null, city: string | null, state: string | null, country: string | null, postal_code: string | null, district: string | null, street_number: string | null);
    constructor(options: {
        address_1: string | null;
        address_2: string | null;
        city: string | null;
        state: string | null;
        country: string | null;
        postal_code: string | null;
        district: string | null;
        street_number: string | null;
    });
}
/** Account profile returned after a successful update. */
export declare class UpdateAccountSuccess {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly mobile_number: string | null;
    readonly address: UpdatedAccountAddress | null;
    readonly mobile_network_operator: MobileNetworkOperator | null;
    static __fields: (string | symbol)[][];
    constructor(first_name: string, last_name: string, email: string, mobile_number: string | null, address: UpdatedAccountAddress | null, mobile_network_operator: MobileNetworkOperator | null);
    constructor(options: {
        first_name: string;
        last_name: string;
        email: string;
        mobile_number: string | null;
        address: UpdatedAccountAddress | null;
        mobile_network_operator: MobileNetworkOperator | null;
    });
}
declare const UpdateAccountFirstNameError_base: any;
/** Account update failure caused by the first name. */
export declare class UpdateAccountFirstNameError extends UpdateAccountFirstNameError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface UpdateAccountFirstNameError extends AccountMessageResult {
}
declare const UpdateAccountLastNameError_base: any;
/** Account update failure caused by the last name. */
export declare class UpdateAccountLastNameError extends UpdateAccountLastNameError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface UpdateAccountLastNameError extends AccountMessageResult {
}
declare const UpdateAccountAddressError_base: any;
/** Account update failure caused by the address. */
export declare class UpdateAccountAddressError extends UpdateAccountAddressError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface UpdateAccountAddressError extends AccountMessageResult {
}
declare const UpdateAccountPostalCodeError_base: any;
/** Account update failure caused by the postal code. */
export declare class UpdateAccountPostalCodeError extends UpdateAccountPostalCodeError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface UpdateAccountPostalCodeError extends AccountMessageResult {
}
declare const UpdateAccountMobileNumberError_base: any;
/** Account update failure caused by the mobile number. */
export declare class UpdateAccountMobileNumberError extends UpdateAccountMobileNumberError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface UpdateAccountMobileNumberError extends AccountMessageResult {
}
declare const UpdateAccountLandlineNumberError_base: any;
/** Account update failure caused by the landline number. */
export declare class UpdateAccountLandlineNumberError extends UpdateAccountLandlineNumberError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface UpdateAccountLandlineNumberError extends AccountMessageResult {
}
declare const UpdateAccountGeneralError_base: any;
/** General account-update failure. */
export declare class UpdateAccountGeneralError extends UpdateAccountGeneralError_base {
    static __fields: never[];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
export interface UpdateAccountGeneralError extends AccountMessageResult {
}
export type UpdateAccountResult = UpdateAccountSuccess | UpdateAccountFirstNameError | UpdateAccountLastNameError | UpdateAccountAddressError | UpdateAccountPostalCodeError | UpdateAccountMobileNumberError | UpdateAccountLandlineNumberError | UpdateAccountGeneralError | UnselectedAccountResult;
/** Nullable success flag returned by account deletion. */
export declare class DeleteAccountResult {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
export {};
