import { MarketingPreferenceType } from "./account_models";
export { MarketingPreferenceType };
import { AddressInput, address_input } from "./common_inputs";
export { AddressInput, address_input };
import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
/** Optional delivery-channel toggles accepted by NCI preferences. */
export declare class NotificationPreferenceTogglesInput {
    readonly email: boolean | UnsetType | null;
    readonly text_message: boolean | UnsetType | null;
    readonly direct_mail: boolean | UnsetType | null;
    readonly in_vehicle: boolean | UnsetType | null;
    readonly in_app: boolean | UnsetType | null;
    static __fields: any[][];
    constructor(email?: boolean | UnsetType | null, text_message?: boolean | UnsetType | null, direct_mail?: boolean | UnsetType | null, in_vehicle?: boolean | UnsetType | null, in_app?: boolean | UnsetType | null);
    constructor(options: {
        email?: boolean | UnsetType | null;
        text_message?: boolean | UnsetType | null;
        direct_mail?: boolean | UnsetType | null;
        in_vehicle?: boolean | UnsetType | null;
        in_app?: boolean | UnsetType | null;
    });
}
/** Required email choice and optional NCI preference categories. */
export declare class NCIMarketingPreferenceInput {
    readonly email: boolean;
    readonly offers_promotion: NotificationPreferenceTogglesInput | UnsetType | null;
    readonly news_events: NotificationPreferenceTogglesInput | UnsetType | null;
    readonly product_updates: NotificationPreferenceTogglesInput | UnsetType | null;
    static __fields: any[][];
    constructor(email: boolean, offers_promotion?: NotificationPreferenceTogglesInput | UnsetType | null, news_events?: NotificationPreferenceTogglesInput | UnsetType | null, product_updates?: NotificationPreferenceTogglesInput | UnsetType | null);
    constructor(options: {
        email: boolean;
        offers_promotion?: NotificationPreferenceTogglesInput | UnsetType | null;
        news_events?: NotificationPreferenceTogglesInput | UnsetType | null;
        product_updates?: NotificationPreferenceTogglesInput | UnsetType | null;
    });
}
/** NNA marketing channels grouped by communication category. */
export declare class MarketingPreferenceInput {
    readonly newsletter: ReadonlyArray<MarketingPreferenceType>;
    readonly product_offers: ReadonlyArray<MarketingPreferenceType>;
    readonly service_offers: ReadonlyArray<MarketingPreferenceType>;
    readonly scheduled_maintenance: ReadonlyArray<MarketingPreferenceType>;
    readonly feedback: ReadonlyArray<MarketingPreferenceType>;
    readonly promotion_offers: ReadonlyArray<MarketingPreferenceType> | UnsetType | null;
    static __fields: any[][];
    constructor(newsletter: ReadonlyArray<MarketingPreferenceType>, product_offers: ReadonlyArray<MarketingPreferenceType>, service_offers: ReadonlyArray<MarketingPreferenceType>, scheduled_maintenance: ReadonlyArray<MarketingPreferenceType>, feedback: ReadonlyArray<MarketingPreferenceType>, promotion_offers?: ReadonlyArray<MarketingPreferenceType> | UnsetType | null);
    constructor(options: {
        newsletter: ReadonlyArray<MarketingPreferenceType>;
        product_offers: ReadonlyArray<MarketingPreferenceType>;
        service_offers: ReadonlyArray<MarketingPreferenceType>;
        scheduled_maintenance: ReadonlyArray<MarketingPreferenceType>;
        feedback: ReadonlyArray<MarketingPreferenceType>;
        promotion_offers?: ReadonlyArray<MarketingPreferenceType> | UnsetType | null;
    });
}
/** Postal address required for direct account registration. */
export declare class RegisterAccountAddressInput {
    readonly address_1: string;
    readonly city: string;
    readonly state: string;
    readonly postal_code: string;
    readonly country: string;
    readonly address_2: string | UnsetType | null;
    static __fields: any[][];
    constructor(address_1: string, city: string, state: string, postal_code: string, country: string, address_2?: string | UnsetType | null);
    constructor(options: {
        address_1: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
        address_2?: string | UnsetType | null;
    });
}
/** Complete account-registration input accepted by Nissan. */
export declare class RegisterAccountInput {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly phone_number: string;
    readonly password: string;
    readonly address: RegisterAccountAddressInput;
    readonly second_last_name: string | UnsetType | null;
    readonly mobile_carrier_id: number | UnsetType | null;
    readonly marketing_preferences: MarketingPreferenceInput | UnsetType | null;
    static __fields: any[][];
    constructor(first_name: string, last_name: string, email: string, phone_number: string, password: string, address: RegisterAccountAddressInput, second_last_name?: string | UnsetType | null, mobile_carrier_id?: number | UnsetType | null, marketing_preferences?: MarketingPreferenceInput | UnsetType | null);
    constructor(options: {
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        password: string;
        address: RegisterAccountAddressInput;
        second_last_name?: string | UnsetType | null;
        mobile_carrier_id?: number | UnsetType | null;
        marketing_preferences?: MarketingPreferenceInput | UnsetType | null;
    });
}
/** Nullable, independently optional account fields accepted by updates. */
export declare class UpdateAccountInput {
    readonly first_name: string | UnsetType | null;
    readonly last_name: string | UnsetType | null;
    readonly email: string | UnsetType | null;
    readonly landline_number: string | UnsetType | null;
    readonly mobile_number: string | UnsetType | null;
    readonly mobile_carrier_id: number | UnsetType | null;
    readonly address: AddressInput | UnsetType | null;
    static __fields: any[][];
    constructor(first_name?: string | UnsetType | null, last_name?: string | UnsetType | null, email?: string | UnsetType | null, landline_number?: string | UnsetType | null, mobile_number?: string | UnsetType | null, mobile_carrier_id?: number | UnsetType | null, address?: AddressInput | UnsetType | null);
    constructor(options: {
        first_name?: string | UnsetType | null;
        last_name?: string | UnsetType | null;
        email?: string | UnsetType | null;
        landline_number?: string | UnsetType | null;
        mobile_number?: string | UnsetType | null;
        mobile_carrier_id?: number | UnsetType | null;
        address?: AddressInput | UnsetType | null;
    });
}
export declare function notification_preference_toggles_input(value: NotificationPreferenceTogglesInput): Record<string, unknown>;
export declare function nci_marketing_preference_input(value: NCIMarketingPreferenceInput): Record<string, unknown>;
export declare function marketing_preference_input(value: MarketingPreferenceInput): Record<string, unknown>;
export declare function register_account_address_input(value: RegisterAccountAddressInput): Record<string, unknown>;
export declare function register_account_input(value: RegisterAccountInput): Record<string, unknown>;
export declare function update_account_input(value: UpdateAccountInput): Record<string, unknown>;
export declare function validate_nissan_id_variables(nissan_id: string): Record<string, unknown>;
export declare function register_account_variables(config: RegisterAccountInput): Record<string, unknown>;
export declare function ncar_icar_verify_account_variables(guid: string): Record<string, unknown>;
export declare function ncar_icar_generate_otp_variables(guid: string, phone_number: string): Record<string, unknown>;
export declare function ncar_icar_verify_otp_variables(guid: string, phone_number: string, reference_id: string, otp: string): Record<string, unknown>;
export declare function generate_otp_variables(phone_number: string): Record<string, unknown>;
export declare function verify_otp_variables(phone_number: string, otp: string, reference_id: string): Record<string, unknown>;
export declare function pin_variables(question_id: string, answer: string, new_pin: string): Record<string, unknown>;
export declare function update_account_variables(config?: UpdateAccountInput | UnsetType | null): Record<string, unknown>;
export declare function update_nci_marketing_preferences_variables(marketing_preferences: NCIMarketingPreferenceInput): Record<string, unknown>;
export declare function update_nna_marketing_preferences_variables(marketing_preferences?: MarketingPreferenceInput | UnsetType | null): Record<string, unknown>;
export declare function _marketing_channels(values: ReadonlyArray<MarketingPreferenceType>): ReadonlyArray<string>;
export declare function _optional_marketing_channels(values: ReadonlyArray<MarketingPreferenceType> | UnsetType | null): unknown;
export declare function _optional_notification_toggles(value: NotificationPreferenceTogglesInput | UnsetType | null): unknown;
export declare function _optional_marketing_preference(value: MarketingPreferenceInput | UnsetType | null): unknown;
export declare function _optional_address(value: AddressInput | UnsetType | null): unknown;
