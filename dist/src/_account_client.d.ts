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
declare const _AccountClientMixin_base: any;
/** Translated upstream _AccountClientMixin. */
export declare class _AccountClientMixin extends _AccountClientMixin_base {
    constructor(...__args: any[]);
    async_validate_nissan_id(nissan_id: string): Promise<NissanIdValidationResult | null>;
    async_get_security_questions(): Promise<ReadonlyArray<SecurityQuestion | null> | null>;
    async_get_user_info(): Promise<UserInfo | null>;
    async_get_terms_and_conditions(): Promise<string | null>;
    async_get_marketing_preferences(): Promise<MarketingPreferencesResult | null>;
    async_register_account(config: RegisterAccountInput): Promise<RegisterAccountResult | null>;
    async_register_ncar_icar_account(config: RegisterAccountInput): Promise<RegisterAccountResult | null>;
    async_verify_ncar_icar_account(guid: string): Promise<NcarIcarVerifyAccountResult | null>;
    async_get_ncar_icar_customer_enrollment(guid: string): Promise<NcarIcarCustomerEnrollmentResult | null>;
    async_generate_ncar_icar_otp(guid: string, phone_number: string): Promise<NcarIcarGenerateOtpResult | null>;
    async_verify_ncar_icar_otp(guid: string, phone_number: string, reference_id: string, otp: string): Promise<NcarIcarVerifyOtpResult | null>;
    async_generate_otp(phone_number: string): Promise<GenerateOtpResult | null>;
    async_verify_otp(phone_number: string, otp: string, reference_id: string): Promise<VerifyOtpResult | null>;
    async_create_pin(question_id: string, answer: string, new_pin: string): Promise<CreatePinResult | null>;
    async_update_pin(question_id: string, answer: string, new_pin: string): Promise<UpdatePinResult | null>;
    async_update_account(config?: UpdateAccountInput | UnsetType | null): Promise<UpdateAccountResult | null>;
    async_delete_account(): Promise<DeleteAccountResult | null>;
    async_update_nci_marketing_preferences(marketing_preferences: NCIMarketingPreferenceInput): Promise<MarketingPreferencesResult | null>;
    async_update_nna_marketing_preferences(marketing_preferences?: MarketingPreferenceInput | UnsetType | null): Promise<MarketingPreferencesResult | null>;
}
export interface _AccountClientMixin extends _NissanClientBase {
}
