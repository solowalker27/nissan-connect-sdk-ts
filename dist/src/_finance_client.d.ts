import { py as $ } from "./_runtime";
import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { AddressInput } from "./common_inputs";
export { AddressInput };
import { NCFNotificationPreferencesInput, account_number_variables, contract_number_variables, finance_document_variables, invoice_pdf_variables, ncf_account_statement_variables, ncf_connect_account_variables, ncf_notification_preferences_variables, ncf_payout_quote_variables, ncf_update_account_variables, payment_history_variables } from "./finance_inputs";
export { NCFNotificationPreferencesInput, account_number_variables, contract_number_variables, finance_document_variables, invoice_pdf_variables, ncf_account_statement_variables, ncf_connect_account_variables, ncf_notification_preferences_variables, ncf_payout_quote_variables, ncf_update_account_variables, payment_history_variables };
import { FinancialVehicle, NCFAccountContractType, NCFAccountStatementPDF, NCFAccountStatementSummary, NCFAccountStatementVehicle, NCFConnectAccountResult, NCFCustomerType, NCFDisconnectAccountResult, NCFInvoicePDF, NCFInvoiceSummary, NCFNotificationPreferences, NCFPaymentHistoryEntry, NCFPayoutQuote, NCFUpdateAccountResult, NCFUpdateNotificationPreferencesResult, VehicleCreditInfo } from "./finance_models";
export { FinancialVehicle, NCFAccountContractType, NCFAccountStatementPDF, NCFAccountStatementSummary, NCFAccountStatementVehicle, NCFConnectAccountResult, NCFCustomerType, NCFDisconnectAccountResult, NCFInvoicePDF, NCFInvoiceSummary, NCFNotificationPreferences, NCFPaymentHistoryEntry, NCFPayoutQuote, NCFUpdateAccountResult, NCFUpdateNotificationPreferencesResult, VehicleCreditInfo };
import { parse_account_statement_pdf, parse_account_statements, parse_financial_vehicles, parse_invoice_pdf, parse_invoices, parse_ncf_account_statement, parse_ncf_connect_account, parse_ncf_disconnect_account, parse_ncf_payout_quote, parse_ncf_preferences, parse_ncf_terms_and_conditions, parse_ncf_update_account, parse_ncf_update_notification_preferences, parse_payment_history, parse_vehicle_credit } from "./finance_parsing";
export { parse_account_statement_pdf, parse_account_statements, parse_financial_vehicles, parse_invoice_pdf, parse_invoices, parse_ncf_account_statement, parse_ncf_connect_account, parse_ncf_disconnect_account, parse_ncf_payout_quote, parse_ncf_preferences, parse_ncf_terms_and_conditions, parse_ncf_update_account, parse_ncf_update_notification_preferences, parse_payment_history, parse_vehicle_credit };
import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };
declare const _FinanceClientMixin_base: any;
/** Translated upstream _FinanceClientMixin. */
export declare class _FinanceClientMixin extends _FinanceClientMixin_base {
    constructor(...__args: any[]);
    async_ncf_connect_account(vin: string, account_number: string, options?: {
        customer_type?: NCFCustomerType | UnsetType | null;
    }): Promise<NCFConnectAccountResult | null>;
    async_ncf_disconnect_account(account_number: string): Promise<NCFDisconnectAccountResult | null>;
    async_ncf_update_account(account_number: string, options?: {
        address?: AddressInput | UnsetType | null;
        phone_number?: string | UnsetType | null;
    }): Promise<NCFUpdateAccountResult | null>;
    async_ncf_update_notification_preferences(config: NCFNotificationPreferencesInput): Promise<NCFUpdateNotificationPreferencesResult | null>;
    async_get_financial_vehicles(): Promise<ReadonlyArray<FinancialVehicle | null> | null>;
    async_get_account_statement_pdf(contract_number: string, document_number: string): Promise<NCFAccountStatementPDF | null>;
    async_get_account_statements(contract_number: string): Promise<ReadonlyArray<NCFAccountStatementSummary | null> | null>;
    async_get_vehicle_credit(): Promise<ReadonlyArray<VehicleCreditInfo | null> | null>;
    async_get_invoice_pdf(contract_number: string, uuid: string): Promise<NCFInvoicePDF | null>;
    async_get_invoices(contract_number: string): Promise<ReadonlyArray<NCFInvoiceSummary | null> | null>;
    async_get_ncf_account_statement(start_date: $.DateValue, end_date: $.DateValue, contract_type: NCFAccountContractType): Promise<ReadonlyArray<NCFAccountStatementVehicle | null> | null>;
    async_get_ncf_payout_quote(account_number: string, vin: string): Promise<NCFPayoutQuote | null>;
    async_get_ncf_preferences(account_number: string): Promise<NCFNotificationPreferences | null>;
    async_get_ncf_terms_and_conditions(): Promise<string | null>;
    async_get_payment_history(account_number: string, start_date: $.DateValue, end_date: $.DateValue): Promise<ReadonlyArray<NCFPaymentHistoryEntry | null> | null>;
}
export interface _FinanceClientMixin extends _NissanClientBase {
}
