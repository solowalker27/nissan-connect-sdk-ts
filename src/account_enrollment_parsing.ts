// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { AccountAddress, AccountGeneralError, GenerateOtpResult, GenerateOtpSuccess, NcarIcarAccountAvailable, NcarIcarAccountUnavailable, NcarIcarCustomerEnrollment, NcarIcarCustomerEnrollmentExpiredError, NcarIcarCustomerEnrollmentGeneralError, NcarIcarCustomerEnrollmentResult, NcarIcarGenerateOtpExhausted, NcarIcarGenerateOtpResult, NcarIcarGuidDeactivated, NcarIcarVerifyAccountResult, NcarIcarVerifyOtpFailed, NcarIcarVerifyOtpResult, NcarIcarVerifyOtpRetryExhausted, RegisterAccountAddressError, RegisterAccountCityError, RegisterAccountDuplicateEmailError, RegisterAccountEmailError, RegisterAccountFirstNameError, RegisterAccountGeneralError, RegisterAccountLastNameError, RegisterAccountPasswordError, RegisterAccountPhoneError, RegisterAccountPostalCodeError, RegisterAccountResult, RegisterAccountStateError, RegisterAccountSuccess, UnselectedAccountResult, VerifyOtpFailed, VerifyOtpResult, VerifyOtpRetryExhausted, VerifyOtpSuccess } from "./account_models";
export { AccountAddress, AccountGeneralError, GenerateOtpResult, GenerateOtpSuccess, NcarIcarAccountAvailable, NcarIcarAccountUnavailable, NcarIcarCustomerEnrollment, NcarIcarCustomerEnrollmentExpiredError, NcarIcarCustomerEnrollmentGeneralError, NcarIcarCustomerEnrollmentResult, NcarIcarGenerateOtpExhausted, NcarIcarGenerateOtpResult, NcarIcarGuidDeactivated, NcarIcarVerifyAccountResult, NcarIcarVerifyOtpFailed, NcarIcarVerifyOtpResult, NcarIcarVerifyOtpRetryExhausted, RegisterAccountAddressError, RegisterAccountCityError, RegisterAccountDuplicateEmailError, RegisterAccountEmailError, RegisterAccountFirstNameError, RegisterAccountGeneralError, RegisterAccountLastNameError, RegisterAccountPasswordError, RegisterAccountPhoneError, RegisterAccountPostalCodeError, RegisterAccountResult, RegisterAccountStateError, RegisterAccountSuccess, UnselectedAccountResult, VerifyOtpFailed, VerifyOtpResult, VerifyOtpRetryExhausted, VerifyOtpSuccess };

import { _required_int, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typename } from "./account_parsing";
export { _required_int, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typename };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function parse_register_account(data: Record<string, unknown>): RegisterAccountResult | null;
/** Parse every generated direct account-registration branch. */
export function parse_register_account(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated direct account-registration branch. */
return $.call(_parse_register_account, [data, "registerAccount"], null);
}

export function parse_ncar_icar_register_account(data: Record<string, unknown>): RegisterAccountResult | null;
/** Parse every generated NCAR/ICAR account-registration branch. */
export function parse_ncar_icar_register_account(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated NCAR/ICAR account-registration branch. */
return $.call(_parse_register_account, [data, "ncarIcarRegisterAccount"], null);
}

export function parse_ncar_icar_verify_account(data: Record<string, unknown>): NcarIcarVerifyAccountResult | null;
/** Parse every generated NCAR/ICAR account-availability branch. */
export function parse_ncar_icar_verify_account(...__args: any[]): any {
let message, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated NCAR/ICAR account-availability branch. */
root_field = "ncarIcarVerifyAccount";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "NCARICARAccountAvailable")))) {
return $.call(NcarIcarAccountAvailable, [], Object.assign({}, {"email": $.call(_required_string, [root, "email", ($.str(root_field) + ".email")], null)}, {"phone_number": $.call(_required_string, [root, "phoneNumber", ($.str(root_field) + ".phoneNumber")], null)}, {"is_otp_required": $.call(_required_bool, [root, "isOTPRequired", ($.str(root_field) + ".isOTPRequired")], null)}));
}
if ($.truth(($.eq(typename, "NCARICARAccountUnavailable")))) {
return $.call(NcarIcarAccountUnavailable, [], Object.assign({}, {"email": $.call(_required_string, [root, "email", ($.str(root_field) + ".email")], null)}, {"vin": $.call(_required_string, [root, "vin", ($.str(root_field) + ".vin")], null)}));
}
message = $.call(_known_enrollment_error, [root, root_field, typename], null);
if ($.truth(((message !== null)))) {
return message;
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function parse_ncar_icar_customer_enrollment(data: Record<string, unknown>): NcarIcarCustomerEnrollmentResult | null;
/** Parse customer details recovered from an NCAR/ICAR link. */
export function parse_ncar_icar_customer_enrollment(...__args: any[]): any {
let error, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse customer details recovered from an NCAR/ICAR link. */
root_field = "ncarIcarCustomerEnrollment";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "NCARICARCustomerEnrollmentResponse")))) {
return $.call(_parse_customer_enrollment, [root, root_field], null);
}
error = $.call(_known_enrollment_error, [root, root_field, typename], null);
if ($.truth(((error !== null)))) {
return error;
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function parse_ncar_icar_generate_otp(data: Record<string, unknown>): NcarIcarGenerateOtpResult | null;
/** Parse every generated NCAR/ICAR OTP-generation branch. */
export function parse_ncar_icar_generate_otp(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated NCAR/ICAR OTP-generation branch. */
root_field = "ncarIcarGenerateOTP";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "GenerateOTPResponse")))) {
return $.call(_parse_generate_otp_success, [root, root_field], null);
}
if ($.truth(($.eq(typename, "NCARICARGuidDeactivated")))) {
return $.call(NcarIcarGuidDeactivated, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "NCARICARGenerateOTPExhausted")))) {
return $.call(NcarIcarGenerateOtpExhausted, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function parse_ncar_icar_verify_otp(data: Record<string, unknown>): NcarIcarVerifyOtpResult | null;
/** Parse every generated NCAR/ICAR OTP-verification branch. */
export function parse_ncar_icar_verify_otp(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated NCAR/ICAR OTP-verification branch. */
root_field = "ncarIcarVerifyOTP";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "NCARICARCustomerEnrollmentResponse")))) {
return $.call(_parse_customer_enrollment, [root, root_field], null);
}
if ($.truth(($.eq(typename, "NCARICARCustomerEnrollmentExpiredError")))) {
return $.call(NcarIcarCustomerEnrollmentExpiredError, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "NCARICARCustomerEnrollmentGeneralError")))) {
return $.call(NcarIcarCustomerEnrollmentGeneralError, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "NCARICARVerifyOTPFailed")))) {
return $.call(NcarIcarVerifyOtpFailed, [], Object.assign({}, {"reference_id": $.call(_required_string, [root, "referenceId", ($.str(root_field) + ".referenceId")], null)}, {"retry_available": $.call(_required_int, [root, "retryAvailable", ($.str(root_field) + ".retryAvailable")], null)}));
}
if ($.truth(($.eq(typename, "NCARICARVerifyOTPRetryExhausted")))) {
return $.call(NcarIcarVerifyOtpRetryExhausted, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "NCARICARGuidDeactivated")))) {
return $.call(NcarIcarGuidDeactivated, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function parse_generate_otp(data: Record<string, unknown>): GenerateOtpResult | null;
/** Parse the direct OTP-generation result. */
export function parse_generate_otp(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the direct OTP-generation result. */
root_field = "nissanGenerateOTP";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "GenerateOTPResponse")))) {
return $.call(_parse_generate_otp_success, [root, root_field], null);
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function parse_verify_otp(data: Record<string, unknown>): VerifyOtpResult | null;
/** Parse every generated direct OTP-verification branch. */
export function parse_verify_otp(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated direct OTP-verification branch. */
root_field = "nissanVerifyOTP";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "VerifyOTPSuccess")))) {
return $.call(VerifyOtpSuccess, [$.call(_required_nullable_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "VerifyOTPFailed")))) {
return $.call(VerifyOtpFailed, [], Object.assign({}, {"message": $.call(_required_nullable_string, [root, "message", ($.str(root_field) + ".message")], null)}, {"retry_available": $.call(_required_nullable_int, [root, "retryAvailable", ($.str(root_field) + ".retryAvailable")], null)}));
}
if ($.truth(($.eq(typename, "VerifyOTPRetryExhausted")))) {
return $.call(VerifyOtpRetryExhausted, [$.call(_required_nullable_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function _parse_register_account(data: Record<string, unknown>, root_field: string): RegisterAccountResult | null;
/** Translated upstream _parse_register_account. */
export function _parse_register_account(...__args: any[]): any {
let message_path, root, typename;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "RegisterAccountSuccessResponse")))) {
return $.call(RegisterAccountSuccess, [$.call(_required_string, [root, "userId", ($.str(root_field) + ".userId")], null)], null);
}
message_path = ($.str(root_field) + ".message");
if ($.truth(($.eq(typename, "RegisterAccountFirstNameError")))) {
return $.call(RegisterAccountFirstNameError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterAccountLastNameError")))) {
return $.call(RegisterAccountLastNameError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterAccountEmailError")))) {
return $.call(RegisterAccountEmailError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterAccountAddressError")))) {
return $.call(RegisterAccountAddressError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterAccountCityError")))) {
return $.call(RegisterAccountCityError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterAccountStateError")))) {
return $.call(RegisterAccountStateError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterAccountPostalCodeError")))) {
return $.call(RegisterAccountPostalCodeError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterAccountPhoneError")))) {
return $.call(RegisterAccountPhoneError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterAccountPasswordError")))) {
return $.call(RegisterAccountPasswordError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterAccountDuplicateEmailError")))) {
return $.call(RegisterAccountDuplicateEmailError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "RegisterGeneralError")))) {
return $.call(RegisterAccountGeneralError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function _known_enrollment_error(root: Record<string, unknown>, root_field: string, typename: string): NcarIcarCustomerEnrollmentExpiredError | NcarIcarCustomerEnrollmentGeneralError | AccountGeneralError | null;
/** Translated upstream _known_enrollment_error. */
export function _known_enrollment_error(...__args: any[]): any {
let message;
let {"root": root, "root_field": root_field, "typename": typename} = $.bind(__args, ["root", "root_field", "typename"], {}, [], null, null);
message = ($.str(root_field) + ".message");
if ($.truth(($.eq(typename, "NCARICARCustomerEnrollmentExpiredError")))) {
return $.call(NcarIcarCustomerEnrollmentExpiredError, [$.call(_required_string, [root, "message", message], null)], null);
}
if ($.truth(($.eq(typename, "NCARICARCustomerEnrollmentGeneralError")))) {
return $.call(NcarIcarCustomerEnrollmentGeneralError, [$.call(_required_string, [root, "message", message], null)], null);
}
if ($.truth(($.eq(typename, "GeneralError")))) {
return $.call(AccountGeneralError, [$.call(_required_string, [root, "message", message], null)], null);
}
return null;
}

export function _parse_customer_enrollment(root: Record<string, unknown>, root_field: string): NcarIcarCustomerEnrollment;
/** Translated upstream _parse_customer_enrollment. */
export function _parse_customer_enrollment(...__args: any[]): any {
let address, address_path;
let {"root": root, "root_field": root_field} = $.bind(__args, ["root", "root_field"], {}, [], null, null);
address_path = ($.str(root_field) + ".address");
address = $.call(_required_optional_typed_object, [root, "address", address_path], null);
return $.call(NcarIcarCustomerEnrollment, [], Object.assign({}, {"vin": $.call(_required_nullable_string, [root, "vin", ($.str(root_field) + ".vin")], null)}, {"first_name": $.call(_required_nullable_string, [root, "firstName", ($.str(root_field) + ".firstName")], null)}, {"last_name": $.call(_required_nullable_string, [root, "lastName", ($.str(root_field) + ".lastName")], null)}, {"email": $.call(_required_nullable_string, [root, "email", ($.str(root_field) + ".email")], null)}, {"phone_number": $.call(_required_nullable_string, [root, "phoneNumber", ($.str(root_field) + ".phoneNumber")], null)}, {"address": $.call(_parse_customer_address, [address, address_path], null)}));
}

export function _parse_customer_address(value: Record<string, unknown> | null, path: string): AccountAddress | null;
/** Translated upstream _parse_customer_address. */
export function _parse_customer_address(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(AccountAddress, [], Object.assign({}, {"address_1": $.call(_required_nullable_string, [value, "address1", ($.str(path) + ".address1")], null)}, {"address_2": $.call(_required_nullable_string, [value, "address2", ($.str(path) + ".address2")], null)}, {"city": $.call(_required_nullable_string, [value, "city", ($.str(path) + ".city")], null)}, {"state": $.call(_required_nullable_string, [value, "state", ($.str(path) + ".state")], null)}, {"postal_code": $.call(_required_nullable_string, [value, "postalCode", ($.str(path) + ".postalCode")], null)}, {"country": $.call(_required_nullable_string, [value, "country", ($.str(path) + ".country")], null)}));
}

export function _parse_generate_otp_success(root: Record<string, unknown>, root_field: string): GenerateOtpSuccess;
/** Translated upstream _parse_generate_otp_success. */
export function _parse_generate_otp_success(...__args: any[]): any {
let {"root": root, "root_field": root_field} = $.bind(__args, ["root", "root_field"], {}, [], null, null);
return $.call(GenerateOtpSuccess, [], Object.assign({}, {"reference_id": $.call(_required_string, [root, "referenceId", ($.str(root_field) + ".referenceId")], null)}, {"retry_available": $.call(_required_int, [root, "retryAvailable", ($.str(root_field) + ".retryAvailable")], null)}));
}

export function _required_bool(container: Record<string, unknown>, field: string, path: string): boolean;
/** Translated upstream _required_bool. */
export function _required_bool(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call($.attr(container, "get"), [field], null);
if ($.truth((!$.contains(container, field)))) {
throw $.call(ResponseError, [($.str(path) + " is missing")], null);
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}
