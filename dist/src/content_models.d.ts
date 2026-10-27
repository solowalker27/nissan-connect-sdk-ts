import { py as $ } from "./_runtime";
import { MobileCarrierCode } from "./account_models";
export { MobileCarrierCode };
export declare const ClientType: $.EnumType<{
    readonly IOS: "IOS";
    readonly ANDROID: "ANDROID";
    readonly OTHER: "OTHER";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type ClientType = ReturnType<typeof ClientType>;
/** Nullable account, ownership, assistance, and informational links. */
export declare class ContactLinks {
    readonly privacy_policy: string | null;
    readonly data_privacy: string | null;
    readonly collision_repair: string | null;
    readonly accident_helper: string | null;
    readonly check_owners_portal: string | null;
    readonly warranty: string | null;
    readonly forgot_password: string | null;
    readonly edit_contact_information_and_change_password: string | null;
    readonly parts_and_accessories: string | null;
    readonly ifs_account: string | null;
    readonly ncesi_insurance: string | null;
    readonly roadside_aid: string | null;
    readonly buy_protection: string | null;
    readonly nissan_added_security_plan_video: string | null;
    readonly nissan_certified_pre_owned_video: string | null;
    readonly nissan_prepaid_maintenance_plan_video: string | null;
    readonly second_delivery_marketing_video: string | null;
    readonly disconnect_remote_access: string | null;
    readonly delete_account: string | null;
    readonly aries_app: string | null;
    static __fields: (string | symbol)[][];
    constructor(privacy_policy: string | null, data_privacy: string | null, collision_repair: string | null, accident_helper: string | null, check_owners_portal: string | null, warranty: string | null, forgot_password: string | null, edit_contact_information_and_change_password: string | null, parts_and_accessories: string | null, ifs_account: string | null, ncesi_insurance: string | null, roadside_aid: string | null, buy_protection: string | null, nissan_added_security_plan_video: string | null, nissan_certified_pre_owned_video: string | null, nissan_prepaid_maintenance_plan_video: string | null, second_delivery_marketing_video: string | null, disconnect_remote_access: string | null, delete_account: string | null, aries_app: string | null);
    constructor(options: {
        privacy_policy: string | null;
        data_privacy: string | null;
        collision_repair: string | null;
        accident_helper: string | null;
        check_owners_portal: string | null;
        warranty: string | null;
        forgot_password: string | null;
        edit_contact_information_and_change_password: string | null;
        parts_and_accessories: string | null;
        ifs_account: string | null;
        ncesi_insurance: string | null;
        roadside_aid: string | null;
        buy_protection: string | null;
        nissan_added_security_plan_video: string | null;
        nissan_certified_pre_owned_video: string | null;
        nissan_prepaid_maintenance_plan_video: string | null;
        second_delivery_marketing_video: string | null;
        disconnect_remote_access: string | null;
        delete_account: string | null;
        aries_app: string | null;
    });
}
/** Nullable support phone numbers published by Nissan. */
export declare class ContactPhoneNumbers {
    readonly customer_care: string | null;
    readonly stolen_vehicle_locator: string | null;
    readonly stolen_vehicle_info: string | null;
    readonly personal_assistant: string | null;
    readonly roadside_assistant: string | null;
    readonly ownership_verification: string | null;
    readonly reset_voice_pin: string | null;
    readonly second_delivery_customer_support: string | null;
    readonly plug_and_charge_support: string | null;
    readonly nissan_store: string | null;
    static __fields: (string | symbol)[][];
    constructor(customer_care: string | null, stolen_vehicle_locator: string | null, stolen_vehicle_info: string | null, personal_assistant: string | null, roadside_assistant: string | null, ownership_verification: string | null, reset_voice_pin: string | null, second_delivery_customer_support: string | null, plug_and_charge_support: string | null, nissan_store: string | null);
    constructor(options: {
        customer_care: string | null;
        stolen_vehicle_locator: string | null;
        stolen_vehicle_info: string | null;
        personal_assistant: string | null;
        roadside_assistant: string | null;
        ownership_verification: string | null;
        reset_voice_pin: string | null;
        second_delivery_customer_support: string | null;
        plug_and_charge_support: string | null;
        nissan_store: string | null;
    });
}
/** Nullable support email addresses published by Nissan. */
export declare class ContactEmailAddresses {
    readonly second_delivery_customer_support: string | null;
    static __fields: (string | symbol)[][];
    constructor(second_delivery_customer_support: string | null);
    constructor(options: {
        second_delivery_customer_support: string | null;
    });
}
/** Contact links, phone numbers, and email addresses. */
export declare class ContactUsInfo {
    readonly links: ContactLinks | null;
    readonly phone_numbers: ContactPhoneNumbers | null;
    readonly email_addresses: ContactEmailAddresses | null;
    static __fields: (string | symbol)[][];
    constructor(links: ContactLinks | null, phone_numbers: ContactPhoneNumbers | null, email_addresses: ContactEmailAddresses | null);
    constructor(options: {
        links: ContactLinks | null;
        phone_numbers: ContactPhoneNumbers | null;
        email_addresses: ContactEmailAddresses | null;
    });
}
/** Nullable certified-pre-owned brand and preferred provider. */
export declare class CertifiedPreOwnedProvider {
    readonly brand_name: string | null;
    readonly preferred_provider: string | null;
    static __fields: (string | symbol)[][];
    constructor(brand_name: string | null, preferred_provider: string | null);
    constructor(options: {
        brand_name: string | null;
        preferred_provider: string | null;
    });
}
/** Certified-pre-owned service response. */
export declare class CertifiedPreOwnedDetails {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: ReadonlyArray<CertifiedPreOwnedProvider | null> | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: ReadonlyArray<CertifiedPreOwnedProvider | null> | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: ReadonlyArray<CertifiedPreOwnedProvider | null> | null;
    });
}
/** A required question and answer. */
export declare class FrequentlyAskedQuestion {
    readonly question: string;
    readonly answer: string;
    static __fields: (string | symbol)[][];
    constructor(question: string, answer: string);
    constructor(options: {
        question: string;
        answer: string;
    });
}
/** FAQ category and its required entries. */
export declare class FrequentlyAskedQuestionCategory {
    readonly category: string;
    readonly entries: ReadonlyArray<FrequentlyAskedQuestion>;
    static __fields: (string | symbol)[][];
    constructor(category: string, entries: ReadonlyArray<FrequentlyAskedQuestion>);
    constructor(options: {
        category: string;
        entries: ReadonlyArray<FrequentlyAskedQuestion>;
    });
}
/** Nullable availability window for one support department. */
export declare class LiveChatHours {
    readonly department_name: string | null;
    readonly opening_time: $.DateValue | null;
    readonly closing_time: $.DateValue | null;
    readonly after_hour_message: string | null;
    readonly available_now: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(department_name: string | null, opening_time: $.DateValue | null, closing_time: $.DateValue | null, after_hour_message: string | null, available_now: boolean | null);
    constructor(options: {
        department_name: string | null;
        opening_time: $.DateValue | null;
        closing_time: $.DateValue | null;
        after_hour_message: string | null;
        available_now: boolean | null;
    });
}
/** Mobile carrier accepted by account registration and updates. */
export declare class MobileCarrier {
    readonly id: number;
    readonly code: MobileCarrierCode;
    readonly name: string;
    static __fields: (string | symbol)[][];
    constructor(id: number, code: MobileCarrierCode, name: string);
    constructor(options: {
        id: number;
        code: MobileCarrierCode;
        name: string;
    });
}
