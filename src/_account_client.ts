// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { parse_generate_otp, parse_ncar_icar_customer_enrollment, parse_ncar_icar_generate_otp, parse_ncar_icar_register_account, parse_ncar_icar_verify_account, parse_ncar_icar_verify_otp, parse_register_account, parse_verify_otp } from "./account_enrollment_parsing";
export { parse_generate_otp, parse_ncar_icar_customer_enrollment, parse_ncar_icar_generate_otp, parse_ncar_icar_register_account, parse_ncar_icar_verify_account, parse_ncar_icar_verify_otp, parse_register_account, parse_verify_otp };

import { MarketingPreferenceInput, NCIMarketingPreferenceInput, RegisterAccountInput, UpdateAccountInput, generate_otp_variables, ncar_icar_generate_otp_variables, ncar_icar_verify_account_variables, ncar_icar_verify_otp_variables, pin_variables, register_account_variables, update_account_variables, update_nci_marketing_preferences_variables, update_nna_marketing_preferences_variables, validate_nissan_id_variables, verify_otp_variables } from "./account_inputs";
export { MarketingPreferenceInput, NCIMarketingPreferenceInput, RegisterAccountInput, UpdateAccountInput, generate_otp_variables, ncar_icar_generate_otp_variables, ncar_icar_verify_account_variables, ncar_icar_verify_otp_variables, pin_variables, register_account_variables, update_account_variables, update_nci_marketing_preferences_variables, update_nna_marketing_preferences_variables, validate_nissan_id_variables, verify_otp_variables };

import { CreatePinResult, DeleteAccountResult, GenerateOtpResult, MarketingPreferencesResult, NcarIcarCustomerEnrollmentResult, NcarIcarGenerateOtpResult, NcarIcarVerifyAccountResult, NcarIcarVerifyOtpResult, NissanIdValidationResult, RegisterAccountResult, SecurityQuestion, UpdateAccountResult, UpdatePinResult, UserInfo, VerifyOtpResult } from "./account_models";
export { CreatePinResult, DeleteAccountResult, GenerateOtpResult, MarketingPreferencesResult, NcarIcarCustomerEnrollmentResult, NcarIcarGenerateOtpResult, NcarIcarVerifyAccountResult, NcarIcarVerifyOtpResult, NissanIdValidationResult, RegisterAccountResult, SecurityQuestion, UpdateAccountResult, UpdatePinResult, UserInfo, VerifyOtpResult };

import { parse_create_pin, parse_delete_account, parse_marketing_preferences, parse_security_questions, parse_terms_and_conditions, parse_update_account, parse_update_nci_marketing_preferences, parse_update_nna_marketing_preferences, parse_update_pin, parse_user_info, parse_validate_nissan_id } from "./account_parsing";
export { parse_create_pin, parse_delete_account, parse_marketing_preferences, parse_security_questions, parse_terms_and_conditions, parse_update_account, parse_update_nci_marketing_preferences, parse_update_nna_marketing_preferences, parse_update_pin, parse_user_info, parse_validate_nissan_id };

import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };

/** Translated upstream _AccountClientMixin. */
export class _AccountClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _AccountClientMixin, __args); }
async_validate_nissan_id(nissan_id: string): Promise<NissanIdValidationResult | null>;
/** Return the account state associated with a Nissan ID. */
async async_validate_nissan_id(...__args: any[]): any {
let data;
let {"nissan_id": nissan_id} = $.bind(__args, ["nissan_id"], {}, [], null, null);
/** Return the account state associated with a Nissan ID. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_application_graphql"), ["ValidateNissanID", $.attr(operations, "VALIDATE_NISSAN_ID"), $.call(validate_nissan_id_variables, [nissan_id], null)], null));
return $.call(parse_validate_nissan_id, [data], null);
}
async_get_security_questions(): Promise<ReadonlyArray<SecurityQuestion | null> | null>;
/** Return the account security-question catalog. */
async async_get_security_questions(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return the account security-question catalog. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SecurityQuestions", $.attr(operations, "SECURITY_QUESTIONS"), {}], null));
return $.call(parse_security_questions, [data], null);
}
async_get_user_info(): Promise<UserInfo | null>;
/** Return the signed-in user's PIN and account-kind flags. */
async async_get_user_info(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return the signed-in user's PIN and account-kind flags. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UserInfo", $.attr(operations, "USER_INFO"), {}], null));
return $.call(parse_user_info, [data], null);
}
async_get_terms_and_conditions(): Promise<string | null>;
/** Return the nullable account terms content. */
async async_get_terms_and_conditions(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return the nullable account terms content. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["TermsAndConditions", $.attr(operations, "TERMS_AND_CONDITIONS"), {}], null));
return $.call(parse_terms_and_conditions, [data], null);
}
async_get_marketing_preferences(): Promise<MarketingPreferencesResult | null>;
/** Return country-specific marketing preferences. */
async async_get_marketing_preferences(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return country-specific marketing preferences. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["MarketingPreferences", $.attr(operations, "MARKETING_PREFERENCES"), {}], null));
return $.call(parse_marketing_preferences, [data], null);
}
async_register_account(config: RegisterAccountInput): Promise<RegisterAccountResult | null>;
/** Register a MyNISSAN account. */
async async_register_account(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Register a MyNISSAN account. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_application_graphql"), ["RegisterAccount", $.attr(operations, "REGISTER_ACCOUNT"), $.call(register_account_variables, [config], null)], null));
return $.call(parse_register_account, [data], null);
}
async_register_ncar_icar_account(config: RegisterAccountInput): Promise<RegisterAccountResult | null>;
/** Register an account through the NCAR/ICAR flow. */
async async_register_ncar_icar_account(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Register an account through the NCAR/ICAR flow. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarRegisterAccount", $.attr(operations, "NCAR_ICAR_REGISTER_ACCOUNT"), $.call(register_account_variables, [config], null)], null));
return $.call(parse_ncar_icar_register_account, [data], null);
}
async_verify_ncar_icar_account(guid: string): Promise<NcarIcarVerifyAccountResult | null>;
/** Check account availability for an NCAR/ICAR enrollment. */
async async_verify_ncar_icar_account(...__args: any[]): any {
let data;
let {"guid": guid} = $.bind(__args, ["guid"], {}, [], null, null);
/** Check account availability for an NCAR/ICAR enrollment. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarVerifyAccount", $.attr(operations, "NCAR_ICAR_VERIFY_ACCOUNT"), $.call(ncar_icar_verify_account_variables, [guid], null)], null));
return $.call(parse_ncar_icar_verify_account, [data], null);
}
async_get_ncar_icar_customer_enrollment(guid: string): Promise<NcarIcarCustomerEnrollmentResult | null>;
/** Recover customer details from an NCAR/ICAR enrollment link. */
async async_get_ncar_icar_customer_enrollment(...__args: any[]): any {
let data;
let {"guid": guid} = $.bind(__args, ["guid"], {}, [], null, null);
/** Recover customer details from an NCAR/ICAR enrollment link. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarCustomerEnrollment", $.attr(operations, "NCAR_ICAR_CUSTOMER_ENROLLMENT"), $.call(ncar_icar_verify_account_variables, [guid], null)], null));
return $.call(parse_ncar_icar_customer_enrollment, [data], null);
}
async_generate_ncar_icar_otp(guid: string, phone_number: string): Promise<NcarIcarGenerateOtpResult | null>;
/** Generate a one-time password for NCAR/ICAR enrollment. */
async async_generate_ncar_icar_otp(...__args: any[]): any {
let data;
let {"guid": guid, "phone_number": phone_number} = $.bind(__args, ["guid", "phone_number"], {}, [], null, null);
/** Generate a one-time password for NCAR/ICAR enrollment. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarGenerateOTP", $.attr(operations, "NCAR_ICAR_GENERATE_OTP"), $.call(ncar_icar_generate_otp_variables, [guid, phone_number], null)], null));
return $.call(parse_ncar_icar_generate_otp, [data], null);
}
async_verify_ncar_icar_otp(guid: string, phone_number: string, reference_id: string, otp: string): Promise<NcarIcarVerifyOtpResult | null>;
/** Verify an NCAR/ICAR enrollment one-time password. */
async async_verify_ncar_icar_otp(...__args: any[]): any {
let data;
let {"guid": guid, "phone_number": phone_number, "reference_id": reference_id, "otp": otp} = $.bind(__args, ["guid", "phone_number", "reference_id", "otp"], {}, [], null, null);
/** Verify an NCAR/ICAR enrollment one-time password. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarVerifyOTP", $.attr(operations, "NCAR_ICAR_VERIFY_OTP"), $.call(ncar_icar_verify_otp_variables, [guid, phone_number, reference_id, otp], null)], null));
return $.call(parse_ncar_icar_verify_otp, [data], null);
}
async_generate_otp(phone_number: string): Promise<GenerateOtpResult | null>;
/** Generate a one-time password for direct account verification. */
async async_generate_otp(...__args: any[]): any {
let data;
let {"phone_number": phone_number} = $.bind(__args, ["phone_number"], {}, [], null, null);
/** Generate a one-time password for direct account verification. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GenerateOTP", $.attr(operations, "GENERATE_OTP"), $.call(generate_otp_variables, [phone_number], null)], null));
return $.call(parse_generate_otp, [data], null);
}
async_verify_otp(phone_number: string, otp: string, reference_id: string): Promise<VerifyOtpResult | null>;
/** Verify a direct account one-time password. */
async async_verify_otp(...__args: any[]): any {
let data;
let {"phone_number": phone_number, "otp": otp, "reference_id": reference_id} = $.bind(__args, ["phone_number", "otp", "reference_id"], {}, [], null, null);
/** Verify a direct account one-time password. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VerifyOTP", $.attr(operations, "VERIFY_OTP"), $.call(verify_otp_variables, [phone_number, otp, reference_id], null)], null));
return $.call(parse_verify_otp, [data], null);
}
async_create_pin(question_id: string, answer: string, new_pin: string): Promise<CreatePinResult | null>;
/** Create the account PIN and security answer. */
async async_create_pin(...__args: any[]): any {
let data;
let {"question_id": question_id, "answer": answer, "new_pin": new_pin} = $.bind(__args, ["question_id", "answer", "new_pin"], {}, [], null, null);
/** Create the account PIN and security answer. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreatePin", $.attr(operations, "CREATE_PIN"), $.call(pin_variables, [question_id, answer, new_pin], null)], null));
return $.call(parse_create_pin, [data], null);
}
async_update_pin(question_id: string, answer: string, new_pin: string): Promise<UpdatePinResult | null>;
/** Replace the account PIN and security answer. */
async async_update_pin(...__args: any[]): any {
let data;
let {"question_id": question_id, "answer": answer, "new_pin": new_pin} = $.bind(__args, ["question_id", "answer", "new_pin"], {}, [], null, null);
/** Replace the account PIN and security answer. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdatePin", $.attr(operations, "UPDATE_PIN"), $.call(pin_variables, [question_id, answer, new_pin], null)], null));
return $.call(parse_update_pin, [data], null);
}
async_update_account(config?: UpdateAccountInput | UnsetType | null): Promise<UpdateAccountResult | null>;
/** Update independently optional account profile fields. */
async async_update_account(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {"config": UNSET}, [], null, null);
/** Update independently optional account profile fields. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateAccount", $.attr(operations, "UPDATE_ACCOUNT"), $.call(update_account_variables, [config], null)], null));
return $.call(parse_update_account, [data], null);
}
async_delete_account(): Promise<DeleteAccountResult | null>;
/** Permanently delete the signed-in MyNISSAN account. */
async async_delete_account(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Permanently delete the signed-in MyNISSAN account. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DeleteAccount", $.attr(operations, "DELETE_ACCOUNT"), {}], null));
return $.call(parse_delete_account, [data], null);
}
async_update_nci_marketing_preferences(marketing_preferences: NCIMarketingPreferenceInput): Promise<MarketingPreferencesResult | null>;
/** Replace NCI account preferences. */
async async_update_nci_marketing_preferences(...__args: any[]): any {
let data;
let {"marketing_preferences": marketing_preferences} = $.bind(__args, ["marketing_preferences"], {}, [], null, null);
/** Replace NCI account preferences. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateNCIMarketingPreferences", $.attr(operations, "UPDATE_NCI_MARKETING_PREFERENCES"), $.call(update_nci_marketing_preferences_variables, [marketing_preferences], null)], null));
return $.call(parse_update_nci_marketing_preferences, [data], null);
}
async_update_nna_marketing_preferences(marketing_preferences?: MarketingPreferenceInput | UnsetType | null): Promise<MarketingPreferencesResult | null>;
/** Replace NNA account preferences. */
async async_update_nna_marketing_preferences(...__args: any[]): any {
let data;
let {"marketing_preferences": marketing_preferences} = $.bind(__args, ["marketing_preferences"], {"marketing_preferences": UNSET}, [], null, null);
/** Replace NNA account preferences. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateNNAMarketingPreferences", $.attr(operations, "UPDATE_NNA_MARKETING_PREFERENCES"), $.call(update_nna_marketing_preferences_variables, [marketing_preferences], null)], null));
return $.call(parse_update_nna_marketing_preferences, [data], null);
}
}
$.classType(_AccountClientMixin);
export interface _AccountClientMixin extends _NissanClientBase {}
