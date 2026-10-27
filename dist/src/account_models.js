"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountAddressError = exports.UpdateAccountLastNameError = exports.UpdateAccountFirstNameError = exports.UpdateAccountSuccess = exports.UpdatedAccountAddress = exports.MobileNetworkOperator = exports.PinValidationError = exports.CreatePinError = exports.PinOperationSuccess = exports.NcarIcarVerifyOtpRetryExhausted = exports.NcarIcarVerifyOtpFailed = exports.VerifyOtpRetryExhausted = exports.VerifyOtpFailed = exports.VerifyOtpSuccess = exports.NcarIcarGenerateOtpExhausted = exports.NcarIcarGuidDeactivated = exports.GenerateOtpSuccess = exports.NcarIcarCustomerEnrollment = exports.AccountAddress = exports.AccountGeneralError = exports.NcarIcarCustomerEnrollmentGeneralError = exports.NcarIcarCustomerEnrollmentExpiredError = exports.NcarIcarAccountUnavailable = exports.NcarIcarAccountAvailable = exports.RegisterAccountGeneralError = exports.RegisterAccountDuplicateEmailError = exports.RegisterAccountPasswordError = exports.RegisterAccountPhoneError = exports.RegisterAccountPostalCodeError = exports.RegisterAccountStateError = exports.RegisterAccountCityError = exports.RegisterAccountAddressError = exports.RegisterAccountEmailError = exports.RegisterAccountLastNameError = exports.RegisterAccountFirstNameError = exports.AccountMessageResult = exports.RegisterAccountSuccess = exports.NNAMarketingPreferences = exports.NCIMarketingPreferences = exports.MarketingNotificationPreferences = exports.UserInfo = exports.SecurityQuestion = exports.UnselectedAccountResult = exports.NissanIdRequiresNmacPasswordReset = exports.NissanIdRequiresOwnerPortalProfileCompletion = exports.NissanIdRequiresOwnerPortalPasswordReset = exports.NissanIdDoesNotExist = exports.NissanIdExists = exports.MobileCarrierCode = exports.MarketingPreferenceType = void 0;
exports.DeleteAccountResult = exports.UpdateAccountGeneralError = exports.UpdateAccountLandlineNumberError = exports.UpdateAccountMobileNumberError = exports.UpdateAccountPostalCodeError = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
exports.MarketingPreferenceType = _runtime_1.py.enumType("MarketingPreferenceType", { "EMAIL": "EMAIL", "MAIL": "MAIL", "SMS": "SMS", "TELEPHONE": "TELEPHONE", "IVM": "IVM", "IAM": "IAM", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.MobileCarrierCode = _runtime_1.py.enumType("MobileCarrierCode", { "US_ECIT": "US_ECIT", "US_BOOSTU": "US_BOOSTU", "US_CELLULA": "US_CELLULA", "US_CNSMRCL": "US_CNSMRCL", "US_ALLTEL": "US_ALLTEL", "US_APPALAC": "US_APPALAC", "US_ATT": "US_ATT", "US_BLUEGRA": "US_BLUEGRA", "US_BOOST": "US_BOOST", "US_CELLCOM": "US_CELLCOM", "US_CELLSOU": "US_CELLSOU", "US_CENTENN": "US_CENTENN", "US_CINBELL": "US_CINBELL", "US_CRICKET": "US_CRICKET", "US_DOBSON": "US_DOBSON", "US_IMMIX": "US_IMMIX", "US_METROPC": "US_METROPC", "US_MIDWEST": "US_MIDWEST", "US_NEXTEL": "US_NEXTEL", "US_NTELOS": "US_NTELOS", "US_REVOL": "US_REVOL", "US_SPRINT": "US_SPRINT", "US_TMOBILE": "US_TMOBILE", "US_VERIZON": "US_VERIZON", "US_VIRGIN": "US_VIRGIN", "US_GCI": "US_GCI", "US_GOOGLE": "US_GOOGLE", "CA_ALIANT": "CA_ALIANT", "CA_VIRGIN": "CA_VIRGIN", "CA_VIDEOTR": "CA_VIDEOTR", "CA_KOODO": "CA_KOODO", "CA_WIND": "CA_WIND", "CA_BELL": "CA_BELL", "CA_MTS": "CA_MTS", "CA_PRIMUS": "CA_PRIMUS", "CA_TELUS": "CA_TELUS", "CA_FREEDOM": "CA_FREEDOM", "CA_FIDO": "CA_FIDO", "CA_PUBLIC": "CA_PUBLIC", "CA_ROGERS": "CA_ROGERS", "CA_EASTLINK": "CA_EASTLINK", "CA_SASKTEL": "CA_SASKTEL", "CA_OTHER": "CA_OTHER", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Validation result for a Nissan ID that already exists. */
class NissanIdExists {
    nissan_id;
    static __fields = [["nissan_id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanIdExists, __args); Object.freeze(this); }
}
exports.NissanIdExists = NissanIdExists;
_runtime_1.py.classType(NissanIdExists);
/** Validation result for a Nissan ID that is available. */
class NissanIdDoesNotExist {
    nissan_id;
    static __fields = [["nissan_id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanIdDoesNotExist, __args); Object.freeze(this); }
}
exports.NissanIdDoesNotExist = NissanIdDoesNotExist;
_runtime_1.py.classType(NissanIdDoesNotExist);
/** Validation result requiring an owner-portal password reset. */
class NissanIdRequiresOwnerPortalPasswordReset {
    nissan_id;
    link;
    static __fields = [["nissan_id", _runtime_1.py.MISSING], ["link", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanIdRequiresOwnerPortalPasswordReset, __args); Object.freeze(this); }
}
exports.NissanIdRequiresOwnerPortalPasswordReset = NissanIdRequiresOwnerPortalPasswordReset;
_runtime_1.py.classType(NissanIdRequiresOwnerPortalPasswordReset);
/** Validation result requiring owner-portal profile completion. */
class NissanIdRequiresOwnerPortalProfileCompletion {
    nissan_id;
    link;
    static __fields = [["nissan_id", _runtime_1.py.MISSING], ["link", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanIdRequiresOwnerPortalProfileCompletion, __args); Object.freeze(this); }
}
exports.NissanIdRequiresOwnerPortalProfileCompletion = NissanIdRequiresOwnerPortalProfileCompletion;
_runtime_1.py.classType(NissanIdRequiresOwnerPortalProfileCompletion);
/** Validation result requiring an NMAC password reset. */
class NissanIdRequiresNmacPasswordReset {
    nissan_id;
    link;
    static __fields = [["nissan_id", _runtime_1.py.MISSING], ["link", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanIdRequiresNmacPasswordReset, __args); Object.freeze(this); }
}
exports.NissanIdRequiresNmacPasswordReset = NissanIdRequiresNmacPasswordReset;
_runtime_1.py.classType(NissanIdRequiresNmacPasswordReset);
/** Union result for which the operation selected only its typename. */
class UnselectedAccountResult {
    typename;
    static __fields = [["typename", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnselectedAccountResult, __args); Object.freeze(this); }
}
exports.UnselectedAccountResult = UnselectedAccountResult;
_runtime_1.py.classType(UnselectedAccountResult);
/** One account security question. */
class SecurityQuestion {
    id;
    question;
    static __fields = [["id", _runtime_1.py.MISSING], ["question", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecurityQuestion, __args); Object.freeze(this); }
}
exports.SecurityQuestion = SecurityQuestion;
_runtime_1.py.classType(SecurityQuestion);
/** Security and account-kind flags for the signed-in user. */
class UserInfo {
    pin_configured;
    security_question_id;
    is_lite_account;
    static __fields = [["pin_configured", _runtime_1.py.MISSING], ["security_question_id", _runtime_1.py.MISSING], ["is_lite_account", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UserInfo, __args); Object.freeze(this); }
}
exports.UserInfo = UserInfo;
_runtime_1.py.classType(UserInfo);
/** Nullable NCI delivery-channel preferences for one category. */
class MarketingNotificationPreferences {
    email;
    text_message;
    direct_mail;
    in_app;
    in_vehicle;
    static __fields = [["email", _runtime_1.py.MISSING], ["text_message", _runtime_1.py.MISSING], ["direct_mail", _runtime_1.py.MISSING], ["in_app", _runtime_1.py.MISSING], ["in_vehicle", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MarketingNotificationPreferences, __args); Object.freeze(this); }
}
exports.MarketingNotificationPreferences = MarketingNotificationPreferences;
_runtime_1.py.classType(MarketingNotificationPreferences);
/** NCI account preferences. */
class NCIMarketingPreferences {
    email;
    product_updates;
    news_events;
    offers_promotion;
    static __fields = [["email", _runtime_1.py.MISSING], ["product_updates", _runtime_1.py.MISSING], ["news_events", _runtime_1.py.MISSING], ["offers_promotion", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCIMarketingPreferences, __args); Object.freeze(this); }
}
exports.NCIMarketingPreferences = NCIMarketingPreferences;
_runtime_1.py.classType(NCIMarketingPreferences);
/** NNA account preferences. */
class NNAMarketingPreferences {
    newsletter;
    product_offers;
    service_offers;
    scheduled_maintenance;
    feedback;
    static __fields = [["newsletter", _runtime_1.py.MISSING], ["product_offers", _runtime_1.py.MISSING], ["service_offers", _runtime_1.py.MISSING], ["scheduled_maintenance", _runtime_1.py.MISSING], ["feedback", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NNAMarketingPreferences, __args); Object.freeze(this); }
}
exports.NNAMarketingPreferences = NNAMarketingPreferences;
_runtime_1.py.classType(NNAMarketingPreferences);
/** Successful account registration. */
class RegisterAccountSuccess {
    user_id;
    static __fields = [["user_id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountSuccess, __args); Object.freeze(this); }
}
exports.RegisterAccountSuccess = RegisterAccountSuccess;
_runtime_1.py.classType(RegisterAccountSuccess);
/** Base for account union branches that contain a message. */
class AccountMessageResult {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AccountMessageResult, __args); Object.freeze(this); }
}
exports.AccountMessageResult = AccountMessageResult;
_runtime_1.py.classType(AccountMessageResult);
/** Registration failure caused by the first name. */
class RegisterAccountFirstNameError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountFirstNameError, __args); Object.freeze(this); }
}
exports.RegisterAccountFirstNameError = RegisterAccountFirstNameError;
_runtime_1.py.classType(RegisterAccountFirstNameError);
/** Registration failure caused by the last name. */
class RegisterAccountLastNameError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountLastNameError, __args); Object.freeze(this); }
}
exports.RegisterAccountLastNameError = RegisterAccountLastNameError;
_runtime_1.py.classType(RegisterAccountLastNameError);
/** Registration failure caused by the email address. */
class RegisterAccountEmailError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountEmailError, __args); Object.freeze(this); }
}
exports.RegisterAccountEmailError = RegisterAccountEmailError;
_runtime_1.py.classType(RegisterAccountEmailError);
/** Registration failure caused by the street address. */
class RegisterAccountAddressError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountAddressError, __args); Object.freeze(this); }
}
exports.RegisterAccountAddressError = RegisterAccountAddressError;
_runtime_1.py.classType(RegisterAccountAddressError);
/** Registration failure caused by the city. */
class RegisterAccountCityError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountCityError, __args); Object.freeze(this); }
}
exports.RegisterAccountCityError = RegisterAccountCityError;
_runtime_1.py.classType(RegisterAccountCityError);
/** Registration failure caused by the state or province. */
class RegisterAccountStateError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountStateError, __args); Object.freeze(this); }
}
exports.RegisterAccountStateError = RegisterAccountStateError;
_runtime_1.py.classType(RegisterAccountStateError);
/** Registration failure caused by the postal code. */
class RegisterAccountPostalCodeError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountPostalCodeError, __args); Object.freeze(this); }
}
exports.RegisterAccountPostalCodeError = RegisterAccountPostalCodeError;
_runtime_1.py.classType(RegisterAccountPostalCodeError);
/** Registration failure caused by the phone number. */
class RegisterAccountPhoneError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountPhoneError, __args); Object.freeze(this); }
}
exports.RegisterAccountPhoneError = RegisterAccountPhoneError;
_runtime_1.py.classType(RegisterAccountPhoneError);
/** Registration failure caused by the password. */
class RegisterAccountPasswordError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountPasswordError, __args); Object.freeze(this); }
}
exports.RegisterAccountPasswordError = RegisterAccountPasswordError;
_runtime_1.py.classType(RegisterAccountPasswordError);
/** Registration failure for an email already in use. */
class RegisterAccountDuplicateEmailError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountDuplicateEmailError, __args); Object.freeze(this); }
}
exports.RegisterAccountDuplicateEmailError = RegisterAccountDuplicateEmailError;
_runtime_1.py.classType(RegisterAccountDuplicateEmailError);
/** General account-registration failure. */
class RegisterAccountGeneralError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RegisterAccountGeneralError, __args); Object.freeze(this); }
}
exports.RegisterAccountGeneralError = RegisterAccountGeneralError;
_runtime_1.py.classType(RegisterAccountGeneralError);
/** NCAR/ICAR account that can continue enrollment. */
class NcarIcarAccountAvailable {
    email;
    phone_number;
    is_otp_required;
    static __fields = [["email", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["is_otp_required", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarAccountAvailable, __args); Object.freeze(this); }
}
exports.NcarIcarAccountAvailable = NcarIcarAccountAvailable;
_runtime_1.py.classType(NcarIcarAccountAvailable);
/** NCAR/ICAR account that cannot continue enrollment. */
class NcarIcarAccountUnavailable {
    email;
    vin;
    static __fields = [["email", _runtime_1.py.MISSING], ["vin", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarAccountUnavailable, __args); Object.freeze(this); }
}
exports.NcarIcarAccountUnavailable = NcarIcarAccountUnavailable;
_runtime_1.py.classType(NcarIcarAccountUnavailable);
/** Enrollment failure caused by an expired NCAR/ICAR link. */
class NcarIcarCustomerEnrollmentExpiredError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarCustomerEnrollmentExpiredError, __args); Object.freeze(this); }
}
exports.NcarIcarCustomerEnrollmentExpiredError = NcarIcarCustomerEnrollmentExpiredError;
_runtime_1.py.classType(NcarIcarCustomerEnrollmentExpiredError);
/** General NCAR/ICAR enrollment failure. */
class NcarIcarCustomerEnrollmentGeneralError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarCustomerEnrollmentGeneralError, __args); Object.freeze(this); }
}
exports.NcarIcarCustomerEnrollmentGeneralError = NcarIcarCustomerEnrollmentGeneralError;
_runtime_1.py.classType(NcarIcarCustomerEnrollmentGeneralError);
/** General account operation failure. */
class AccountGeneralError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AccountGeneralError, __args); Object.freeze(this); }
}
exports.AccountGeneralError = AccountGeneralError;
_runtime_1.py.classType(AccountGeneralError);
/** Nullable postal fields returned by account operations. */
class AccountAddress {
    address_1;
    address_2;
    city;
    state;
    postal_code;
    country;
    static __fields = [["address_1", _runtime_1.py.MISSING], ["address_2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AccountAddress, __args); Object.freeze(this); }
}
exports.AccountAddress = AccountAddress;
_runtime_1.py.classType(AccountAddress);
/** Nullable customer details recovered from an NCAR/ICAR enrollment. */
class NcarIcarCustomerEnrollment {
    vin;
    first_name;
    last_name;
    email;
    phone_number;
    address;
    static __fields = [["vin", _runtime_1.py.MISSING], ["first_name", _runtime_1.py.MISSING], ["last_name", _runtime_1.py.MISSING], ["email", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarCustomerEnrollment, __args); Object.freeze(this); }
}
exports.NcarIcarCustomerEnrollment = NcarIcarCustomerEnrollment;
_runtime_1.py.classType(NcarIcarCustomerEnrollment);
/** Successful one-time password generation. */
class GenerateOtpSuccess {
    reference_id;
    retry_available;
    static __fields = [["reference_id", _runtime_1.py.MISSING], ["retry_available", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, GenerateOtpSuccess, __args); Object.freeze(this); }
}
exports.GenerateOtpSuccess = GenerateOtpSuccess;
_runtime_1.py.classType(GenerateOtpSuccess);
/** NCAR/ICAR OTP failure caused by a deactivated identifier. */
class NcarIcarGuidDeactivated extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarGuidDeactivated, __args); Object.freeze(this); }
}
exports.NcarIcarGuidDeactivated = NcarIcarGuidDeactivated;
_runtime_1.py.classType(NcarIcarGuidDeactivated);
/** NCAR/ICAR OTP generation failure after all retries. */
class NcarIcarGenerateOtpExhausted extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarGenerateOtpExhausted, __args); Object.freeze(this); }
}
exports.NcarIcarGenerateOtpExhausted = NcarIcarGenerateOtpExhausted;
_runtime_1.py.classType(NcarIcarGenerateOtpExhausted);
/** Successful direct OTP verification. */
class VerifyOtpSuccess {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VerifyOtpSuccess, __args); Object.freeze(this); }
}
exports.VerifyOtpSuccess = VerifyOtpSuccess;
_runtime_1.py.classType(VerifyOtpSuccess);
/** Failed direct OTP verification with nullable retry information. */
class VerifyOtpFailed {
    message;
    retry_available;
    static __fields = [["message", _runtime_1.py.MISSING], ["retry_available", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VerifyOtpFailed, __args); Object.freeze(this); }
}
exports.VerifyOtpFailed = VerifyOtpFailed;
_runtime_1.py.classType(VerifyOtpFailed);
/** Direct OTP verification failure after all retries. */
class VerifyOtpRetryExhausted {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VerifyOtpRetryExhausted, __args); Object.freeze(this); }
}
exports.VerifyOtpRetryExhausted = VerifyOtpRetryExhausted;
_runtime_1.py.classType(VerifyOtpRetryExhausted);
/** Failed NCAR/ICAR OTP verification with its next reference. */
class NcarIcarVerifyOtpFailed {
    reference_id;
    retry_available;
    static __fields = [["reference_id", _runtime_1.py.MISSING], ["retry_available", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarVerifyOtpFailed, __args); Object.freeze(this); }
}
exports.NcarIcarVerifyOtpFailed = NcarIcarVerifyOtpFailed;
_runtime_1.py.classType(NcarIcarVerifyOtpFailed);
/** NCAR/ICAR OTP verification failure after all retries. */
class NcarIcarVerifyOtpRetryExhausted extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NcarIcarVerifyOtpRetryExhausted, __args); Object.freeze(this); }
}
exports.NcarIcarVerifyOtpRetryExhausted = NcarIcarVerifyOtpRetryExhausted;
_runtime_1.py.classType(NcarIcarVerifyOtpRetryExhausted);
/** Nullable success flag returned by PIN operations. */
class PinOperationSuccess {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PinOperationSuccess, __args); Object.freeze(this); }
}
exports.PinOperationSuccess = PinOperationSuccess;
_runtime_1.py.classType(PinOperationSuccess);
/** PIN creation failure. */
class CreatePinError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CreatePinError, __args); Object.freeze(this); }
}
exports.CreatePinError = CreatePinError;
_runtime_1.py.classType(CreatePinError);
/** PIN update validation failure. */
class PinValidationError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PinValidationError, __args); Object.freeze(this); }
}
exports.PinValidationError = PinValidationError;
_runtime_1.py.classType(PinValidationError);
/** Mobile carrier attached to an updated account. */
class MobileNetworkOperator {
    code;
    id;
    name;
    static __fields = [["code", _runtime_1.py.MISSING], ["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MobileNetworkOperator, __args); Object.freeze(this); }
}
exports.MobileNetworkOperator = MobileNetworkOperator;
_runtime_1.py.classType(MobileNetworkOperator);
/** Nullable address fields returned after an account update. */
class UpdatedAccountAddress {
    address_1;
    address_2;
    city;
    state;
    country;
    postal_code;
    district;
    street_number;
    static __fields = [["address_1", _runtime_1.py.MISSING], ["address_2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["district", _runtime_1.py.MISSING], ["street_number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdatedAccountAddress, __args); Object.freeze(this); }
}
exports.UpdatedAccountAddress = UpdatedAccountAddress;
_runtime_1.py.classType(UpdatedAccountAddress);
/** Account profile returned after a successful update. */
class UpdateAccountSuccess {
    first_name;
    last_name;
    email;
    mobile_number;
    address;
    mobile_network_operator;
    static __fields = [["first_name", _runtime_1.py.MISSING], ["last_name", _runtime_1.py.MISSING], ["email", _runtime_1.py.MISSING], ["mobile_number", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["mobile_network_operator", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateAccountSuccess, __args); Object.freeze(this); }
}
exports.UpdateAccountSuccess = UpdateAccountSuccess;
_runtime_1.py.classType(UpdateAccountSuccess);
/** Account update failure caused by the first name. */
class UpdateAccountFirstNameError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateAccountFirstNameError, __args); Object.freeze(this); }
}
exports.UpdateAccountFirstNameError = UpdateAccountFirstNameError;
_runtime_1.py.classType(UpdateAccountFirstNameError);
/** Account update failure caused by the last name. */
class UpdateAccountLastNameError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateAccountLastNameError, __args); Object.freeze(this); }
}
exports.UpdateAccountLastNameError = UpdateAccountLastNameError;
_runtime_1.py.classType(UpdateAccountLastNameError);
/** Account update failure caused by the address. */
class UpdateAccountAddressError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateAccountAddressError, __args); Object.freeze(this); }
}
exports.UpdateAccountAddressError = UpdateAccountAddressError;
_runtime_1.py.classType(UpdateAccountAddressError);
/** Account update failure caused by the postal code. */
class UpdateAccountPostalCodeError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateAccountPostalCodeError, __args); Object.freeze(this); }
}
exports.UpdateAccountPostalCodeError = UpdateAccountPostalCodeError;
_runtime_1.py.classType(UpdateAccountPostalCodeError);
/** Account update failure caused by the mobile number. */
class UpdateAccountMobileNumberError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateAccountMobileNumberError, __args); Object.freeze(this); }
}
exports.UpdateAccountMobileNumberError = UpdateAccountMobileNumberError;
_runtime_1.py.classType(UpdateAccountMobileNumberError);
/** Account update failure caused by the landline number. */
class UpdateAccountLandlineNumberError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateAccountLandlineNumberError, __args); Object.freeze(this); }
}
exports.UpdateAccountLandlineNumberError = UpdateAccountLandlineNumberError;
_runtime_1.py.classType(UpdateAccountLandlineNumberError);
/** General account-update failure. */
class UpdateAccountGeneralError extends _runtime_1.py.mix(AccountMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdateAccountGeneralError, __args); Object.freeze(this); }
}
exports.UpdateAccountGeneralError = UpdateAccountGeneralError;
_runtime_1.py.classType(UpdateAccountGeneralError);
/** Nullable success flag returned by account deletion. */
class DeleteAccountResult {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DeleteAccountResult, __args); Object.freeze(this); }
}
exports.DeleteAccountResult = DeleteAccountResult;
_runtime_1.py.classType(DeleteAccountResult);
//# sourceMappingURL=account_models.js.map