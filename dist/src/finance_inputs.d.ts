import { py as $ } from "./_runtime";
import { AddressInput, address_input } from "./common_inputs";
export { AddressInput, address_input };
import { NCFAccountContractType, NCFCustomerType } from "./finance_models";
export { NCFAccountContractType, NCFCustomerType };
import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };
/** Required account and optional nullable NCF notification switches. */
export declare class NCFNotificationPreferencesInput {
    readonly account_number: string;
    readonly is_payment_received: boolean | UnsetType | null;
    readonly is_statement_available: boolean | UnsetType | null;
    readonly is_payment_past_due: boolean | UnsetType | null;
    readonly is_payment_due_in_one_day: boolean | UnsetType | null;
    static __fields: any[][];
    constructor(account_number: string, is_payment_received?: boolean | UnsetType | null, is_statement_available?: boolean | UnsetType | null, is_payment_past_due?: boolean | UnsetType | null, is_payment_due_in_one_day?: boolean | UnsetType | null);
    constructor(options: {
        account_number: string;
        is_payment_received?: boolean | UnsetType | null;
        is_statement_available?: boolean | UnsetType | null;
        is_payment_past_due?: boolean | UnsetType | null;
        is_payment_due_in_one_day?: boolean | UnsetType | null;
    });
}
export declare function ncf_connect_account_variables(vin: string, account_number: string, customer_type?: NCFCustomerType | UnsetType | null): Record<string, unknown>;
export declare function account_number_variables(account_number: string): Record<string, unknown>;
export declare function ncf_update_account_variables(account_number: string, address?: AddressInput | UnsetType | null, phone_number?: string | UnsetType | null): Record<string, unknown>;
export declare function ncf_notification_preferences_variables(config: NCFNotificationPreferencesInput): Record<string, unknown>;
export declare function finance_document_variables(contract_number: string, document_number: string): Record<string, unknown>;
export declare function contract_number_variables(contract_number: string): Record<string, unknown>;
export declare function invoice_pdf_variables(contract_number: string, uuid: string): Record<string, unknown>;
export declare function ncf_account_statement_variables(start_date: $.DateValue, end_date: $.DateValue, contract_type: NCFAccountContractType): Record<string, unknown>;
export declare function ncf_payout_quote_variables(account_number: string, vin: string): Record<string, unknown>;
export declare function payment_history_variables(account_number: string, start_date: $.DateValue, end_date: $.DateValue): Record<string, unknown>;
