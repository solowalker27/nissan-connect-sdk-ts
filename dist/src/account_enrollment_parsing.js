"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports._typename = exports._root = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_int = exports._required_int = exports.VerifyOtpSuccess = exports.VerifyOtpRetryExhausted = exports.VerifyOtpFailed = exports.UnselectedAccountResult = exports.RegisterAccountSuccess = exports.RegisterAccountStateError = exports.RegisterAccountPostalCodeError = exports.RegisterAccountPhoneError = exports.RegisterAccountPasswordError = exports.RegisterAccountLastNameError = exports.RegisterAccountGeneralError = exports.RegisterAccountFirstNameError = exports.RegisterAccountEmailError = exports.RegisterAccountDuplicateEmailError = exports.RegisterAccountCityError = exports.RegisterAccountAddressError = exports.NcarIcarVerifyOtpRetryExhausted = exports.NcarIcarVerifyOtpFailed = exports.NcarIcarGuidDeactivated = exports.NcarIcarGenerateOtpExhausted = exports.NcarIcarCustomerEnrollmentGeneralError = exports.NcarIcarCustomerEnrollmentExpiredError = exports.NcarIcarCustomerEnrollment = exports.NcarIcarAccountUnavailable = exports.NcarIcarAccountAvailable = exports.GenerateOtpSuccess = exports.AccountGeneralError = exports.AccountAddress = void 0;
exports.parse_register_account = parse_register_account;
exports.parse_ncar_icar_register_account = parse_ncar_icar_register_account;
exports.parse_ncar_icar_verify_account = parse_ncar_icar_verify_account;
exports.parse_ncar_icar_customer_enrollment = parse_ncar_icar_customer_enrollment;
exports.parse_ncar_icar_generate_otp = parse_ncar_icar_generate_otp;
exports.parse_ncar_icar_verify_otp = parse_ncar_icar_verify_otp;
exports.parse_generate_otp = parse_generate_otp;
exports.parse_verify_otp = parse_verify_otp;
exports._parse_register_account = _parse_register_account;
exports._known_enrollment_error = _known_enrollment_error;
exports._parse_customer_enrollment = _parse_customer_enrollment;
exports._parse_customer_address = _parse_customer_address;
exports._parse_generate_otp_success = _parse_generate_otp_success;
exports._required_bool = _required_bool;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const account_models_1 = require("./account_models");
Object.defineProperty(exports, "AccountAddress", { enumerable: true, get: function () { return account_models_1.AccountAddress; } });
Object.defineProperty(exports, "AccountGeneralError", { enumerable: true, get: function () { return account_models_1.AccountGeneralError; } });
Object.defineProperty(exports, "GenerateOtpSuccess", { enumerable: true, get: function () { return account_models_1.GenerateOtpSuccess; } });
Object.defineProperty(exports, "NcarIcarAccountAvailable", { enumerable: true, get: function () { return account_models_1.NcarIcarAccountAvailable; } });
Object.defineProperty(exports, "NcarIcarAccountUnavailable", { enumerable: true, get: function () { return account_models_1.NcarIcarAccountUnavailable; } });
Object.defineProperty(exports, "NcarIcarCustomerEnrollment", { enumerable: true, get: function () { return account_models_1.NcarIcarCustomerEnrollment; } });
Object.defineProperty(exports, "NcarIcarCustomerEnrollmentExpiredError", { enumerable: true, get: function () { return account_models_1.NcarIcarCustomerEnrollmentExpiredError; } });
Object.defineProperty(exports, "NcarIcarCustomerEnrollmentGeneralError", { enumerable: true, get: function () { return account_models_1.NcarIcarCustomerEnrollmentGeneralError; } });
Object.defineProperty(exports, "NcarIcarGenerateOtpExhausted", { enumerable: true, get: function () { return account_models_1.NcarIcarGenerateOtpExhausted; } });
Object.defineProperty(exports, "NcarIcarGuidDeactivated", { enumerable: true, get: function () { return account_models_1.NcarIcarGuidDeactivated; } });
Object.defineProperty(exports, "NcarIcarVerifyOtpFailed", { enumerable: true, get: function () { return account_models_1.NcarIcarVerifyOtpFailed; } });
Object.defineProperty(exports, "NcarIcarVerifyOtpRetryExhausted", { enumerable: true, get: function () { return account_models_1.NcarIcarVerifyOtpRetryExhausted; } });
Object.defineProperty(exports, "RegisterAccountAddressError", { enumerable: true, get: function () { return account_models_1.RegisterAccountAddressError; } });
Object.defineProperty(exports, "RegisterAccountCityError", { enumerable: true, get: function () { return account_models_1.RegisterAccountCityError; } });
Object.defineProperty(exports, "RegisterAccountDuplicateEmailError", { enumerable: true, get: function () { return account_models_1.RegisterAccountDuplicateEmailError; } });
Object.defineProperty(exports, "RegisterAccountEmailError", { enumerable: true, get: function () { return account_models_1.RegisterAccountEmailError; } });
Object.defineProperty(exports, "RegisterAccountFirstNameError", { enumerable: true, get: function () { return account_models_1.RegisterAccountFirstNameError; } });
Object.defineProperty(exports, "RegisterAccountGeneralError", { enumerable: true, get: function () { return account_models_1.RegisterAccountGeneralError; } });
Object.defineProperty(exports, "RegisterAccountLastNameError", { enumerable: true, get: function () { return account_models_1.RegisterAccountLastNameError; } });
Object.defineProperty(exports, "RegisterAccountPasswordError", { enumerable: true, get: function () { return account_models_1.RegisterAccountPasswordError; } });
Object.defineProperty(exports, "RegisterAccountPhoneError", { enumerable: true, get: function () { return account_models_1.RegisterAccountPhoneError; } });
Object.defineProperty(exports, "RegisterAccountPostalCodeError", { enumerable: true, get: function () { return account_models_1.RegisterAccountPostalCodeError; } });
Object.defineProperty(exports, "RegisterAccountStateError", { enumerable: true, get: function () { return account_models_1.RegisterAccountStateError; } });
Object.defineProperty(exports, "RegisterAccountSuccess", { enumerable: true, get: function () { return account_models_1.RegisterAccountSuccess; } });
Object.defineProperty(exports, "UnselectedAccountResult", { enumerable: true, get: function () { return account_models_1.UnselectedAccountResult; } });
Object.defineProperty(exports, "VerifyOtpFailed", { enumerable: true, get: function () { return account_models_1.VerifyOtpFailed; } });
Object.defineProperty(exports, "VerifyOtpRetryExhausted", { enumerable: true, get: function () { return account_models_1.VerifyOtpRetryExhausted; } });
Object.defineProperty(exports, "VerifyOtpSuccess", { enumerable: true, get: function () { return account_models_1.VerifyOtpSuccess; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_int", { enumerable: true, get: function () { return account_parsing_1._required_int; } });
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return account_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return account_parsing_1._root; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Parse every generated direct account-registration branch. */
function parse_register_account(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated direct account-registration branch. */
    return _runtime_1.py.call(_parse_register_account, [data, "registerAccount"], null);
}
/** Parse every generated NCAR/ICAR account-registration branch. */
function parse_ncar_icar_register_account(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated NCAR/ICAR account-registration branch. */
    return _runtime_1.py.call(_parse_register_account, [data, "ncarIcarRegisterAccount"], null);
}
/** Parse every generated NCAR/ICAR account-availability branch. */
function parse_ncar_icar_verify_account(...__args) {
    let message, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated NCAR/ICAR account-availability branch. */
    root_field = "ncarIcarVerifyAccount";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARAccountAvailable")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarAccountAvailable, [], Object.assign({}, { "email": _runtime_1.py.call(account_parsing_1._required_string, [root, "email", (_runtime_1.py.str(root_field) + ".email")], null) }, { "phone_number": _runtime_1.py.call(account_parsing_1._required_string, [root, "phoneNumber", (_runtime_1.py.str(root_field) + ".phoneNumber")], null) }, { "is_otp_required": _runtime_1.py.call(_required_bool, [root, "isOTPRequired", (_runtime_1.py.str(root_field) + ".isOTPRequired")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARAccountUnavailable")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarAccountUnavailable, [], Object.assign({}, { "email": _runtime_1.py.call(account_parsing_1._required_string, [root, "email", (_runtime_1.py.str(root_field) + ".email")], null) }, { "vin": _runtime_1.py.call(account_parsing_1._required_string, [root, "vin", (_runtime_1.py.str(root_field) + ".vin")], null) }));
    }
    message = _runtime_1.py.call(_known_enrollment_error, [root, root_field, typename], null);
    if (_runtime_1.py.truth(((message !== null)))) {
        return message;
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Parse customer details recovered from an NCAR/ICAR link. */
function parse_ncar_icar_customer_enrollment(...__args) {
    let error, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse customer details recovered from an NCAR/ICAR link. */
    root_field = "ncarIcarCustomerEnrollment";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARCustomerEnrollmentResponse")))) {
        return _runtime_1.py.call(_parse_customer_enrollment, [root, root_field], null);
    }
    error = _runtime_1.py.call(_known_enrollment_error, [root, root_field, typename], null);
    if (_runtime_1.py.truth(((error !== null)))) {
        return error;
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Parse every generated NCAR/ICAR OTP-generation branch. */
function parse_ncar_icar_generate_otp(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated NCAR/ICAR OTP-generation branch. */
    root_field = "ncarIcarGenerateOTP";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "GenerateOTPResponse")))) {
        return _runtime_1.py.call(_parse_generate_otp_success, [root, root_field], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARGuidDeactivated")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarGuidDeactivated, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARGenerateOTPExhausted")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarGenerateOtpExhausted, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Parse every generated NCAR/ICAR OTP-verification branch. */
function parse_ncar_icar_verify_otp(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated NCAR/ICAR OTP-verification branch. */
    root_field = "ncarIcarVerifyOTP";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARCustomerEnrollmentResponse")))) {
        return _runtime_1.py.call(_parse_customer_enrollment, [root, root_field], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARCustomerEnrollmentExpiredError")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarCustomerEnrollmentExpiredError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARCustomerEnrollmentGeneralError")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarCustomerEnrollmentGeneralError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARVerifyOTPFailed")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarVerifyOtpFailed, [], Object.assign({}, { "reference_id": _runtime_1.py.call(account_parsing_1._required_string, [root, "referenceId", (_runtime_1.py.str(root_field) + ".referenceId")], null) }, { "retry_available": _runtime_1.py.call(account_parsing_1._required_int, [root, "retryAvailable", (_runtime_1.py.str(root_field) + ".retryAvailable")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARVerifyOTPRetryExhausted")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarVerifyOtpRetryExhausted, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARGuidDeactivated")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarGuidDeactivated, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Parse the direct OTP-generation result. */
function parse_generate_otp(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the direct OTP-generation result. */
    root_field = "nissanGenerateOTP";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "GenerateOTPResponse")))) {
        return _runtime_1.py.call(_parse_generate_otp_success, [root, root_field], null);
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Parse every generated direct OTP-verification branch. */
function parse_verify_otp(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated direct OTP-verification branch. */
    root_field = "nissanVerifyOTP";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "VerifyOTPSuccess")))) {
        return _runtime_1.py.call(account_models_1.VerifyOtpSuccess, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "VerifyOTPFailed")))) {
        return _runtime_1.py.call(account_models_1.VerifyOtpFailed, [], Object.assign({}, { "message": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null) }, { "retry_available": _runtime_1.py.call(account_parsing_1._required_nullable_int, [root, "retryAvailable", (_runtime_1.py.str(root_field) + ".retryAvailable")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "VerifyOTPRetryExhausted")))) {
        return _runtime_1.py.call(account_models_1.VerifyOtpRetryExhausted, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Translated upstream _parse_register_account. */
function _parse_register_account(...__args) {
    let message_path, root, typename;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountSuccessResponse")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountSuccess, [_runtime_1.py.call(account_parsing_1._required_string, [root, "userId", (_runtime_1.py.str(root_field) + ".userId")], null)], null);
    }
    message_path = (_runtime_1.py.str(root_field) + ".message");
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountFirstNameError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountFirstNameError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountLastNameError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountLastNameError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountEmailError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountEmailError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountAddressError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountAddressError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountCityError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountCityError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountStateError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountStateError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountPostalCodeError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountPostalCodeError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountPhoneError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountPhoneError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountPasswordError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountPasswordError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterAccountDuplicateEmailError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountDuplicateEmailError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "RegisterGeneralError")))) {
        return _runtime_1.py.call(account_models_1.RegisterAccountGeneralError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message_path], null)], null);
    }
    return _runtime_1.py.call(account_models_1.UnselectedAccountResult, [typename], null);
}
/** Translated upstream _known_enrollment_error. */
function _known_enrollment_error(...__args) {
    let message;
    let { "root": root, "root_field": root_field, "typename": typename } = _runtime_1.py.bind(__args, ["root", "root_field", "typename"], {}, [], null, null);
    message = (_runtime_1.py.str(root_field) + ".message");
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARCustomerEnrollmentExpiredError")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarCustomerEnrollmentExpiredError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCARICARCustomerEnrollmentGeneralError")))) {
        return _runtime_1.py.call(account_models_1.NcarIcarCustomerEnrollmentGeneralError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "GeneralError")))) {
        return _runtime_1.py.call(account_models_1.AccountGeneralError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", message], null)], null);
    }
    return null;
}
/** Translated upstream _parse_customer_enrollment. */
function _parse_customer_enrollment(...__args) {
    let address, address_path;
    let { "root": root, "root_field": root_field } = _runtime_1.py.bind(__args, ["root", "root_field"], {}, [], null, null);
    address_path = (_runtime_1.py.str(root_field) + ".address");
    address = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "address", address_path], null);
    return _runtime_1.py.call(account_models_1.NcarIcarCustomerEnrollment, [], Object.assign({}, { "vin": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "vin", (_runtime_1.py.str(root_field) + ".vin")], null) }, { "first_name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "firstName", (_runtime_1.py.str(root_field) + ".firstName")], null) }, { "last_name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "lastName", (_runtime_1.py.str(root_field) + ".lastName")], null) }, { "email": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "email", (_runtime_1.py.str(root_field) + ".email")], null) }, { "phone_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "phoneNumber", (_runtime_1.py.str(root_field) + ".phoneNumber")], null) }, { "address": _runtime_1.py.call(_parse_customer_address, [address, address_path], null) }));
}
/** Translated upstream _parse_customer_address. */
function _parse_customer_address(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_models_1.AccountAddress, [], Object.assign({}, { "address_1": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "address1", (_runtime_1.py.str(path) + ".address1")], null) }, { "address_2": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "address2", (_runtime_1.py.str(path) + ".address2")], null) }, { "city": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "city", (_runtime_1.py.str(path) + ".city")], null) }, { "state": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "state", (_runtime_1.py.str(path) + ".state")], null) }, { "postal_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "postalCode", (_runtime_1.py.str(path) + ".postalCode")], null) }, { "country": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "country", (_runtime_1.py.str(path) + ".country")], null) }));
}
/** Translated upstream _parse_generate_otp_success. */
function _parse_generate_otp_success(...__args) {
    let { "root": root, "root_field": root_field } = _runtime_1.py.bind(__args, ["root", "root_field"], {}, [], null, null);
    return _runtime_1.py.call(account_models_1.GenerateOtpSuccess, [], Object.assign({}, { "reference_id": _runtime_1.py.call(account_parsing_1._required_string, [root, "referenceId", (_runtime_1.py.str(root_field) + ".referenceId")], null) }, { "retry_available": _runtime_1.py.call(account_parsing_1._required_int, [root, "retryAvailable", (_runtime_1.py.str(root_field) + ".retryAvailable")], null) }));
}
/** Translated upstream _required_bool. */
function _required_bool(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_runtime_1.py.attr(container, "get"), [field], null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is missing")], null);
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
//# sourceMappingURL=account_enrollment_parsing.js.map