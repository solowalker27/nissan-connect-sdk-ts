// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

export const MarketingPreferenceType = $.enumType("MarketingPreferenceType", {"EMAIL": "EMAIL", "MAIL": "MAIL", "SMS": "SMS", "TELEPHONE": "TELEPHONE", "IVM": "IVM", "IAM": "IAM", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type MarketingPreferenceType = ReturnType<typeof MarketingPreferenceType>;

export const MobileCarrierCode = $.enumType("MobileCarrierCode", {"US_ECIT": "US_ECIT", "US_BOOSTU": "US_BOOSTU", "US_CELLULA": "US_CELLULA", "US_CNSMRCL": "US_CNSMRCL", "US_ALLTEL": "US_ALLTEL", "US_APPALAC": "US_APPALAC", "US_ATT": "US_ATT", "US_BLUEGRA": "US_BLUEGRA", "US_BOOST": "US_BOOST", "US_CELLCOM": "US_CELLCOM", "US_CELLSOU": "US_CELLSOU", "US_CENTENN": "US_CENTENN", "US_CINBELL": "US_CINBELL", "US_CRICKET": "US_CRICKET", "US_DOBSON": "US_DOBSON", "US_IMMIX": "US_IMMIX", "US_METROPC": "US_METROPC", "US_MIDWEST": "US_MIDWEST", "US_NEXTEL": "US_NEXTEL", "US_NTELOS": "US_NTELOS", "US_REVOL": "US_REVOL", "US_SPRINT": "US_SPRINT", "US_TMOBILE": "US_TMOBILE", "US_VERIZON": "US_VERIZON", "US_VIRGIN": "US_VIRGIN", "US_GCI": "US_GCI", "US_GOOGLE": "US_GOOGLE", "CA_ALIANT": "CA_ALIANT", "CA_VIRGIN": "CA_VIRGIN", "CA_VIDEOTR": "CA_VIDEOTR", "CA_KOODO": "CA_KOODO", "CA_WIND": "CA_WIND", "CA_BELL": "CA_BELL", "CA_MTS": "CA_MTS", "CA_PRIMUS": "CA_PRIMUS", "CA_TELUS": "CA_TELUS", "CA_FREEDOM": "CA_FREEDOM", "CA_FIDO": "CA_FIDO", "CA_PUBLIC": "CA_PUBLIC", "CA_ROGERS": "CA_ROGERS", "CA_EASTLINK": "CA_EASTLINK", "CA_SASKTEL": "CA_SASKTEL", "CA_OTHER": "CA_OTHER", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type MobileCarrierCode = ReturnType<typeof MobileCarrierCode>;

/** Validation result for a Nissan ID that already exists. */
export class NissanIdExists {
readonly nissan_id: string;
static __fields = [["nissan_id", $.MISSING]];
constructor(nissan_id: string);
constructor(options: { nissan_id: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanIdExists, __args);  Object.freeze(this); }
}
$.classType(NissanIdExists);

/** Validation result for a Nissan ID that is available. */
export class NissanIdDoesNotExist {
readonly nissan_id: string;
static __fields = [["nissan_id", $.MISSING]];
constructor(nissan_id: string);
constructor(options: { nissan_id: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanIdDoesNotExist, __args);  Object.freeze(this); }
}
$.classType(NissanIdDoesNotExist);

/** Validation result requiring an owner-portal password reset. */
export class NissanIdRequiresOwnerPortalPasswordReset {
readonly nissan_id: string;
readonly link: string;
static __fields = [["nissan_id", $.MISSING], ["link", $.MISSING]];
constructor(nissan_id: string, link: string);
constructor(options: { nissan_id: string; link: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanIdRequiresOwnerPortalPasswordReset, __args);  Object.freeze(this); }
}
$.classType(NissanIdRequiresOwnerPortalPasswordReset);

/** Validation result requiring owner-portal profile completion. */
export class NissanIdRequiresOwnerPortalProfileCompletion {
readonly nissan_id: string;
readonly link: string;
static __fields = [["nissan_id", $.MISSING], ["link", $.MISSING]];
constructor(nissan_id: string, link: string);
constructor(options: { nissan_id: string; link: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanIdRequiresOwnerPortalProfileCompletion, __args);  Object.freeze(this); }
}
$.classType(NissanIdRequiresOwnerPortalProfileCompletion);

/** Validation result requiring an NMAC password reset. */
export class NissanIdRequiresNmacPasswordReset {
readonly nissan_id: string;
readonly link: string;
static __fields = [["nissan_id", $.MISSING], ["link", $.MISSING]];
constructor(nissan_id: string, link: string);
constructor(options: { nissan_id: string; link: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanIdRequiresNmacPasswordReset, __args);  Object.freeze(this); }
}
$.classType(NissanIdRequiresNmacPasswordReset);

/** Union result for which the operation selected only its typename. */
export class UnselectedAccountResult {
readonly typename: string;
static __fields = [["typename", $.MISSING]];
constructor(typename: string);
constructor(options: { typename: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnselectedAccountResult, __args);  Object.freeze(this); }
}
$.classType(UnselectedAccountResult);

export type NissanIdValidationResult = NissanIdExists | NissanIdDoesNotExist | NissanIdRequiresOwnerPortalPasswordReset | NissanIdRequiresOwnerPortalProfileCompletion | NissanIdRequiresNmacPasswordReset | UnselectedAccountResult;

/** One account security question. */
export class SecurityQuestion {
readonly id: string | null;
readonly question: string | null;
static __fields = [["id", $.MISSING], ["question", $.MISSING]];
constructor(id: string | null, question: string | null);
constructor(options: { id: string | null; question: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecurityQuestion, __args);  Object.freeze(this); }
}
$.classType(SecurityQuestion);

/** Security and account-kind flags for the signed-in user. */
export class UserInfo {
readonly pin_configured: boolean | null;
readonly security_question_id: string | null;
readonly is_lite_account: boolean | null;
static __fields = [["pin_configured", $.MISSING], ["security_question_id", $.MISSING], ["is_lite_account", $.MISSING]];
constructor(pin_configured: boolean | null, security_question_id: string | null, is_lite_account: boolean | null);
constructor(options: { pin_configured: boolean | null; security_question_id: string | null; is_lite_account: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UserInfo, __args);  Object.freeze(this); }
}
$.classType(UserInfo);

/** Nullable NCI delivery-channel preferences for one category. */
export class MarketingNotificationPreferences {
readonly email: boolean | null;
readonly text_message: boolean | null;
readonly direct_mail: boolean | null;
readonly in_app: boolean | null;
readonly in_vehicle: boolean | null;
static __fields = [["email", $.MISSING], ["text_message", $.MISSING], ["direct_mail", $.MISSING], ["in_app", $.MISSING], ["in_vehicle", $.MISSING]];
constructor(email: boolean | null, text_message: boolean | null, direct_mail: boolean | null, in_app: boolean | null, in_vehicle: boolean | null);
constructor(options: { email: boolean | null; text_message: boolean | null; direct_mail: boolean | null; in_app: boolean | null; in_vehicle: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MarketingNotificationPreferences, __args);  Object.freeze(this); }
}
$.classType(MarketingNotificationPreferences);

/** NCI account preferences. */
export class NCIMarketingPreferences {
readonly email: boolean | null;
readonly product_updates: MarketingNotificationPreferences | null;
readonly news_events: MarketingNotificationPreferences | null;
readonly offers_promotion: MarketingNotificationPreferences | null;
static __fields = [["email", $.MISSING], ["product_updates", $.MISSING], ["news_events", $.MISSING], ["offers_promotion", $.MISSING]];
constructor(email: boolean | null, product_updates: MarketingNotificationPreferences | null, news_events: MarketingNotificationPreferences | null, offers_promotion: MarketingNotificationPreferences | null);
constructor(options: { email: boolean | null; product_updates: MarketingNotificationPreferences | null; news_events: MarketingNotificationPreferences | null; offers_promotion: MarketingNotificationPreferences | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCIMarketingPreferences, __args);  Object.freeze(this); }
}
$.classType(NCIMarketingPreferences);

/** NNA account preferences. */
export class NNAMarketingPreferences {
readonly newsletter: ReadonlyArray<MarketingPreferenceType | null> | null;
readonly product_offers: ReadonlyArray<MarketingPreferenceType | null> | null;
readonly service_offers: ReadonlyArray<MarketingPreferenceType | null> | null;
readonly scheduled_maintenance: ReadonlyArray<MarketingPreferenceType | null> | null;
readonly feedback: ReadonlyArray<MarketingPreferenceType | null> | null;
static __fields = [["newsletter", $.MISSING], ["product_offers", $.MISSING], ["service_offers", $.MISSING], ["scheduled_maintenance", $.MISSING], ["feedback", $.MISSING]];
constructor(newsletter: ReadonlyArray<MarketingPreferenceType | null> | null, product_offers: ReadonlyArray<MarketingPreferenceType | null> | null, service_offers: ReadonlyArray<MarketingPreferenceType | null> | null, scheduled_maintenance: ReadonlyArray<MarketingPreferenceType | null> | null, feedback: ReadonlyArray<MarketingPreferenceType | null> | null);
constructor(options: { newsletter: ReadonlyArray<MarketingPreferenceType | null> | null; product_offers: ReadonlyArray<MarketingPreferenceType | null> | null; service_offers: ReadonlyArray<MarketingPreferenceType | null> | null; scheduled_maintenance: ReadonlyArray<MarketingPreferenceType | null> | null; feedback: ReadonlyArray<MarketingPreferenceType | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NNAMarketingPreferences, __args);  Object.freeze(this); }
}
$.classType(NNAMarketingPreferences);

export type MarketingPreferencesResult = NCIMarketingPreferences | NNAMarketingPreferences | UnselectedAccountResult;

/** Successful account registration. */
export class RegisterAccountSuccess {
readonly user_id: string;
static __fields = [["user_id", $.MISSING]];
constructor(user_id: string);
constructor(options: { user_id: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountSuccess, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountSuccess);

/** Base for account union branches that contain a message. */
export class AccountMessageResult {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AccountMessageResult, __args);  Object.freeze(this); }
}
$.classType(AccountMessageResult);

/** Registration failure caused by the first name. */
export class RegisterAccountFirstNameError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountFirstNameError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountFirstNameError);
export interface RegisterAccountFirstNameError extends AccountMessageResult {}

/** Registration failure caused by the last name. */
export class RegisterAccountLastNameError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountLastNameError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountLastNameError);
export interface RegisterAccountLastNameError extends AccountMessageResult {}

/** Registration failure caused by the email address. */
export class RegisterAccountEmailError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountEmailError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountEmailError);
export interface RegisterAccountEmailError extends AccountMessageResult {}

/** Registration failure caused by the street address. */
export class RegisterAccountAddressError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountAddressError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountAddressError);
export interface RegisterAccountAddressError extends AccountMessageResult {}

/** Registration failure caused by the city. */
export class RegisterAccountCityError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountCityError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountCityError);
export interface RegisterAccountCityError extends AccountMessageResult {}

/** Registration failure caused by the state or province. */
export class RegisterAccountStateError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountStateError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountStateError);
export interface RegisterAccountStateError extends AccountMessageResult {}

/** Registration failure caused by the postal code. */
export class RegisterAccountPostalCodeError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountPostalCodeError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountPostalCodeError);
export interface RegisterAccountPostalCodeError extends AccountMessageResult {}

/** Registration failure caused by the phone number. */
export class RegisterAccountPhoneError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountPhoneError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountPhoneError);
export interface RegisterAccountPhoneError extends AccountMessageResult {}

/** Registration failure caused by the password. */
export class RegisterAccountPasswordError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountPasswordError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountPasswordError);
export interface RegisterAccountPasswordError extends AccountMessageResult {}

/** Registration failure for an email already in use. */
export class RegisterAccountDuplicateEmailError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountDuplicateEmailError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountDuplicateEmailError);
export interface RegisterAccountDuplicateEmailError extends AccountMessageResult {}

/** General account-registration failure. */
export class RegisterAccountGeneralError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountGeneralError, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountGeneralError);
export interface RegisterAccountGeneralError extends AccountMessageResult {}

export type RegisterAccountResult = RegisterAccountSuccess | RegisterAccountFirstNameError | RegisterAccountLastNameError | RegisterAccountEmailError | RegisterAccountAddressError | RegisterAccountCityError | RegisterAccountStateError | RegisterAccountPostalCodeError | RegisterAccountPhoneError | RegisterAccountPasswordError | RegisterAccountDuplicateEmailError | RegisterAccountGeneralError | UnselectedAccountResult;

/** NCAR/ICAR account that can continue enrollment. */
export class NcarIcarAccountAvailable {
readonly email: string;
readonly phone_number: string;
readonly is_otp_required: boolean;
static __fields = [["email", $.MISSING], ["phone_number", $.MISSING], ["is_otp_required", $.MISSING]];
constructor(email: string, phone_number: string, is_otp_required: boolean);
constructor(options: { email: string; phone_number: string; is_otp_required: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarAccountAvailable, __args);  Object.freeze(this); }
}
$.classType(NcarIcarAccountAvailable);

/** NCAR/ICAR account that cannot continue enrollment. */
export class NcarIcarAccountUnavailable {
readonly email: string;
readonly vin: string;
static __fields = [["email", $.MISSING], ["vin", $.MISSING]];
constructor(email: string, vin: string);
constructor(options: { email: string; vin: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarAccountUnavailable, __args);  Object.freeze(this); }
}
$.classType(NcarIcarAccountUnavailable);

/** Enrollment failure caused by an expired NCAR/ICAR link. */
export class NcarIcarCustomerEnrollmentExpiredError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarCustomerEnrollmentExpiredError, __args);  Object.freeze(this); }
}
$.classType(NcarIcarCustomerEnrollmentExpiredError);
export interface NcarIcarCustomerEnrollmentExpiredError extends AccountMessageResult {}

/** General NCAR/ICAR enrollment failure. */
export class NcarIcarCustomerEnrollmentGeneralError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarCustomerEnrollmentGeneralError, __args);  Object.freeze(this); }
}
$.classType(NcarIcarCustomerEnrollmentGeneralError);
export interface NcarIcarCustomerEnrollmentGeneralError extends AccountMessageResult {}

/** General account operation failure. */
export class AccountGeneralError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, AccountGeneralError, __args);  Object.freeze(this); }
}
$.classType(AccountGeneralError);
export interface AccountGeneralError extends AccountMessageResult {}

export type NcarIcarVerifyAccountResult = NcarIcarAccountAvailable | NcarIcarAccountUnavailable | NcarIcarCustomerEnrollmentExpiredError | NcarIcarCustomerEnrollmentGeneralError | AccountGeneralError | UnselectedAccountResult;

/** Nullable postal fields returned by account operations. */
export class AccountAddress {
readonly address_1: string | null;
readonly address_2: string | null;
readonly city: string | null;
readonly state: string | null;
readonly postal_code: string | null;
readonly country: string | null;
static __fields = [["address_1", $.MISSING], ["address_2", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["postal_code", $.MISSING], ["country", $.MISSING]];
constructor(address_1: string | null, address_2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null);
constructor(options: { address_1: string | null; address_2: string | null; city: string | null; state: string | null; postal_code: string | null; country: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AccountAddress, __args);  Object.freeze(this); }
}
$.classType(AccountAddress);

/** Nullable customer details recovered from an NCAR/ICAR enrollment. */
export class NcarIcarCustomerEnrollment {
readonly vin: string | null;
readonly first_name: string | null;
readonly last_name: string | null;
readonly email: string | null;
readonly phone_number: string | null;
readonly address: AccountAddress | null;
static __fields = [["vin", $.MISSING], ["first_name", $.MISSING], ["last_name", $.MISSING], ["email", $.MISSING], ["phone_number", $.MISSING], ["address", $.MISSING]];
constructor(vin: string | null, first_name: string | null, last_name: string | null, email: string | null, phone_number: string | null, address: AccountAddress | null);
constructor(options: { vin: string | null; first_name: string | null; last_name: string | null; email: string | null; phone_number: string | null; address: AccountAddress | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarCustomerEnrollment, __args);  Object.freeze(this); }
}
$.classType(NcarIcarCustomerEnrollment);

export type NcarIcarCustomerEnrollmentResult = NcarIcarCustomerEnrollment | NcarIcarCustomerEnrollmentExpiredError | NcarIcarCustomerEnrollmentGeneralError | AccountGeneralError | UnselectedAccountResult;

/** Successful one-time password generation. */
export class GenerateOtpSuccess {
readonly reference_id: string;
readonly retry_available: number;
static __fields = [["reference_id", $.MISSING], ["retry_available", $.MISSING]];
constructor(reference_id: string, retry_available: number);
constructor(options: { reference_id: string; retry_available: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, GenerateOtpSuccess, __args);  Object.freeze(this); }
}
$.classType(GenerateOtpSuccess);

/** NCAR/ICAR OTP failure caused by a deactivated identifier. */
export class NcarIcarGuidDeactivated extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarGuidDeactivated, __args);  Object.freeze(this); }
}
$.classType(NcarIcarGuidDeactivated);
export interface NcarIcarGuidDeactivated extends AccountMessageResult {}

/** NCAR/ICAR OTP generation failure after all retries. */
export class NcarIcarGenerateOtpExhausted extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarGenerateOtpExhausted, __args);  Object.freeze(this); }
}
$.classType(NcarIcarGenerateOtpExhausted);
export interface NcarIcarGenerateOtpExhausted extends AccountMessageResult {}

export type GenerateOtpResult = GenerateOtpSuccess | UnselectedAccountResult;

export type NcarIcarGenerateOtpResult = GenerateOtpSuccess | NcarIcarGuidDeactivated | NcarIcarGenerateOtpExhausted | UnselectedAccountResult;

/** Successful direct OTP verification. */
export class VerifyOtpSuccess {
readonly message: string | null;
static __fields = [["message", $.MISSING]];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VerifyOtpSuccess, __args);  Object.freeze(this); }
}
$.classType(VerifyOtpSuccess);

/** Failed direct OTP verification with nullable retry information. */
export class VerifyOtpFailed {
readonly message: string | null;
readonly retry_available: number | null;
static __fields = [["message", $.MISSING], ["retry_available", $.MISSING]];
constructor(message: string | null, retry_available: number | null);
constructor(options: { message: string | null; retry_available: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VerifyOtpFailed, __args);  Object.freeze(this); }
}
$.classType(VerifyOtpFailed);

/** Direct OTP verification failure after all retries. */
export class VerifyOtpRetryExhausted {
readonly message: string | null;
static __fields = [["message", $.MISSING]];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VerifyOtpRetryExhausted, __args);  Object.freeze(this); }
}
$.classType(VerifyOtpRetryExhausted);

export type VerifyOtpResult = VerifyOtpSuccess | VerifyOtpFailed | VerifyOtpRetryExhausted | UnselectedAccountResult;

/** Failed NCAR/ICAR OTP verification with its next reference. */
export class NcarIcarVerifyOtpFailed {
readonly reference_id: string;
readonly retry_available: number;
static __fields = [["reference_id", $.MISSING], ["retry_available", $.MISSING]];
constructor(reference_id: string, retry_available: number);
constructor(options: { reference_id: string; retry_available: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarVerifyOtpFailed, __args);  Object.freeze(this); }
}
$.classType(NcarIcarVerifyOtpFailed);

/** NCAR/ICAR OTP verification failure after all retries. */
export class NcarIcarVerifyOtpRetryExhausted extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarVerifyOtpRetryExhausted, __args);  Object.freeze(this); }
}
$.classType(NcarIcarVerifyOtpRetryExhausted);
export interface NcarIcarVerifyOtpRetryExhausted extends AccountMessageResult {}

export type NcarIcarVerifyOtpResult = NcarIcarCustomerEnrollment | NcarIcarCustomerEnrollmentExpiredError | NcarIcarCustomerEnrollmentGeneralError | NcarIcarVerifyOtpFailed | NcarIcarVerifyOtpRetryExhausted | NcarIcarGuidDeactivated | UnselectedAccountResult;

/** Nullable success flag returned by PIN operations. */
export class PinOperationSuccess {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PinOperationSuccess, __args);  Object.freeze(this); }
}
$.classType(PinOperationSuccess);

/** PIN creation failure. */
export class CreatePinError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, CreatePinError, __args);  Object.freeze(this); }
}
$.classType(CreatePinError);
export interface CreatePinError extends AccountMessageResult {}

/** PIN update validation failure. */
export class PinValidationError {
readonly message: string | null;
static __fields = [["message", $.MISSING]];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PinValidationError, __args);  Object.freeze(this); }
}
$.classType(PinValidationError);

export type CreatePinResult = PinOperationSuccess | CreatePinError | UnselectedAccountResult;

export type UpdatePinResult = PinOperationSuccess | PinValidationError | UnselectedAccountResult;

/** Mobile carrier attached to an updated account. */
export class MobileNetworkOperator {
readonly code: MobileCarrierCode;
readonly id: number;
readonly name: string;
static __fields = [["code", $.MISSING], ["id", $.MISSING], ["name", $.MISSING]];
constructor(code: MobileCarrierCode, id: number, name: string);
constructor(options: { code: MobileCarrierCode; id: number; name: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MobileNetworkOperator, __args);  Object.freeze(this); }
}
$.classType(MobileNetworkOperator);

/** Nullable address fields returned after an account update. */
export class UpdatedAccountAddress {
readonly address_1: string | null;
readonly address_2: string | null;
readonly city: string | null;
readonly state: string | null;
readonly country: string | null;
readonly postal_code: string | null;
readonly district: string | null;
readonly street_number: string | null;
static __fields = [["address_1", $.MISSING], ["address_2", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["country", $.MISSING], ["postal_code", $.MISSING], ["district", $.MISSING], ["street_number", $.MISSING]];
constructor(address_1: string | null, address_2: string | null, city: string | null, state: string | null, country: string | null, postal_code: string | null, district: string | null, street_number: string | null);
constructor(options: { address_1: string | null; address_2: string | null; city: string | null; state: string | null; country: string | null; postal_code: string | null; district: string | null; street_number: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdatedAccountAddress, __args);  Object.freeze(this); }
}
$.classType(UpdatedAccountAddress);

/** Account profile returned after a successful update. */
export class UpdateAccountSuccess {
readonly first_name: string;
readonly last_name: string;
readonly email: string;
readonly mobile_number: string | null;
readonly address: UpdatedAccountAddress | null;
readonly mobile_network_operator: MobileNetworkOperator | null;
static __fields = [["first_name", $.MISSING], ["last_name", $.MISSING], ["email", $.MISSING], ["mobile_number", $.MISSING], ["address", $.MISSING], ["mobile_network_operator", $.MISSING]];
constructor(first_name: string, last_name: string, email: string, mobile_number: string | null, address: UpdatedAccountAddress | null, mobile_network_operator: MobileNetworkOperator | null);
constructor(options: { first_name: string; last_name: string; email: string; mobile_number: string | null; address: UpdatedAccountAddress | null; mobile_network_operator: MobileNetworkOperator | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateAccountSuccess, __args);  Object.freeze(this); }
}
$.classType(UpdateAccountSuccess);

/** Account update failure caused by the first name. */
export class UpdateAccountFirstNameError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, UpdateAccountFirstNameError, __args);  Object.freeze(this); }
}
$.classType(UpdateAccountFirstNameError);
export interface UpdateAccountFirstNameError extends AccountMessageResult {}

/** Account update failure caused by the last name. */
export class UpdateAccountLastNameError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, UpdateAccountLastNameError, __args);  Object.freeze(this); }
}
$.classType(UpdateAccountLastNameError);
export interface UpdateAccountLastNameError extends AccountMessageResult {}

/** Account update failure caused by the address. */
export class UpdateAccountAddressError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, UpdateAccountAddressError, __args);  Object.freeze(this); }
}
$.classType(UpdateAccountAddressError);
export interface UpdateAccountAddressError extends AccountMessageResult {}

/** Account update failure caused by the postal code. */
export class UpdateAccountPostalCodeError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, UpdateAccountPostalCodeError, __args);  Object.freeze(this); }
}
$.classType(UpdateAccountPostalCodeError);
export interface UpdateAccountPostalCodeError extends AccountMessageResult {}

/** Account update failure caused by the mobile number. */
export class UpdateAccountMobileNumberError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, UpdateAccountMobileNumberError, __args);  Object.freeze(this); }
}
$.classType(UpdateAccountMobileNumberError);
export interface UpdateAccountMobileNumberError extends AccountMessageResult {}

/** Account update failure caused by the landline number. */
export class UpdateAccountLandlineNumberError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, UpdateAccountLandlineNumberError, __args);  Object.freeze(this); }
}
$.classType(UpdateAccountLandlineNumberError);
export interface UpdateAccountLandlineNumberError extends AccountMessageResult {}

/** General account-update failure. */
export class UpdateAccountGeneralError extends $.mix(AccountMessageResult) {
static __fields = [];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, UpdateAccountGeneralError, __args);  Object.freeze(this); }
}
$.classType(UpdateAccountGeneralError);
export interface UpdateAccountGeneralError extends AccountMessageResult {}

export type UpdateAccountResult = UpdateAccountSuccess | UpdateAccountFirstNameError | UpdateAccountLastNameError | UpdateAccountAddressError | UpdateAccountPostalCodeError | UpdateAccountMobileNumberError | UpdateAccountLandlineNumberError | UpdateAccountGeneralError | UnselectedAccountResult;

/** Nullable success flag returned by account deletion. */
export class DeleteAccountResult {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DeleteAccountResult, __args);  Object.freeze(this); }
}
$.classType(DeleteAccountResult);
