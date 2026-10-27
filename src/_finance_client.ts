// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const date = $.date;
const datetime = $.datetime;

import * as operations from "./operations";

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

/** Translated upstream _FinanceClientMixin. */
export class _FinanceClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _FinanceClientMixin, __args); }
async_ncf_connect_account(vin: string, account_number: string, options?: { customer_type?: NCFCustomerType | UnsetType | null }): Promise<NCFConnectAccountResult | null>;
/** Link an NCF account to a vehicle. */
async async_ncf_connect_account(...__args: any[]): any {
let data;
let {"vin": vin, "account_number": account_number, "customer_type": customer_type} = $.bind(__args, ["vin", "account_number"], {"customer_type": UNSET}, ["customer_type"], null, null);
/** Link an NCF account to a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NCFConnectAccount", $.attr(operations, "NCF_CONNECT_ACCOUNT"), $.call(ncf_connect_account_variables, [vin, account_number, customer_type], null)], null));
return $.call(parse_ncf_connect_account, [data], null);
}
async_ncf_disconnect_account(account_number: string): Promise<NCFDisconnectAccountResult | null>;
/** Disconnect an NCF account. */
async async_ncf_disconnect_account(...__args: any[]): any {
let data;
let {"account_number": account_number} = $.bind(__args, ["account_number"], {}, [], null, null);
/** Disconnect an NCF account. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NCFDisconnectAccount", $.attr(operations, "NCF_DISCONNECT_ACCOUNT"), $.call(account_number_variables, [account_number], null)], null));
return $.call(parse_ncf_disconnect_account, [data], null);
}
async_ncf_update_account(account_number: string, options?: { address?: AddressInput | UnsetType | null; phone_number?: string | UnsetType | null }): Promise<NCFUpdateAccountResult | null>;
/** Patch optional NCF contact fields. */
async async_ncf_update_account(...__args: any[]): any {
let data;
let {"account_number": account_number, "address": address, "phone_number": phone_number} = $.bind(__args, ["account_number"], {"address": UNSET, "phone_number": UNSET}, ["address", "phone_number"], null, null);
/** Patch optional NCF contact fields. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NCFUpdateAccount", $.attr(operations, "NCF_UPDATE_ACCOUNT"), $.call(ncf_update_account_variables, [account_number, address, phone_number], null)], null));
return $.call(parse_ncf_update_account, [data], null);
}
async_ncf_update_notification_preferences(config: NCFNotificationPreferencesInput): Promise<NCFUpdateNotificationPreferencesResult | null>;
/** Patch NCF notification preferences. */
async async_ncf_update_notification_preferences(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Patch NCF notification preferences. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NCFUpdateNotificationPreferences", $.attr(operations, "NCF_UPDATE_NOTIFICATION_PREFERENCES"), $.call(ncf_notification_preferences_variables, [config], null)], null));
return $.call(parse_ncf_update_notification_preferences, [data], null);
}
async_get_financial_vehicles(): Promise<ReadonlyArray<FinancialVehicle | null> | null>;
/** Return vehicles and contracts linked through financial services. */
async async_get_financial_vehicles(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return vehicles and contracts linked through financial services. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["FinancialVehicles", $.attr(operations, "FINANCIAL_VEHICLES"), {}], null));
return $.call(parse_financial_vehicles, [data], null);
}
async_get_account_statement_pdf(contract_number: string, document_number: string): Promise<NCFAccountStatementPDF | null>;
/** Return one Nissan finance account-statement document. */
async async_get_account_statement_pdf(...__args: any[]): any {
let data;
let {"contract_number": contract_number, "document_number": document_number} = $.bind(__args, ["contract_number", "document_number"], {}, [], null, null);
/** Return one Nissan finance account-statement document. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GetAccountStatementPDF", $.attr(operations, "GET_ACCOUNT_STATEMENT_PDF"), $.call(finance_document_variables, [contract_number, document_number], null)], null));
return $.call(parse_account_statement_pdf, [data], null);
}
async_get_account_statements(contract_number: string): Promise<ReadonlyArray<NCFAccountStatementSummary | null> | null>;
/** Return Nissan finance account-statement summaries. */
async async_get_account_statements(...__args: any[]): any {
let data;
let {"contract_number": contract_number} = $.bind(__args, ["contract_number"], {}, [], null, null);
/** Return Nissan finance account-statement summaries. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GetAccountStatements", $.attr(operations, "GET_ACCOUNT_STATEMENTS"), $.call(contract_number_variables, [contract_number], null)], null));
return $.call(parse_account_statements, [data], null);
}
async_get_vehicle_credit(): Promise<ReadonlyArray<VehicleCreditInfo | null> | null>;
/** Return vehicle credit data exposed by the signed-in account. */
async async_get_vehicle_credit(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return vehicle credit data exposed by the signed-in account. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GetCredit", $.attr(operations, "GET_CREDIT"), {}], null));
return $.call(parse_vehicle_credit, [data], null);
}
async_get_invoice_pdf(contract_number: string, uuid: string): Promise<NCFInvoicePDF | null>;
/** Return one Nissan finance invoice document. */
async async_get_invoice_pdf(...__args: any[]): any {
let data;
let {"contract_number": contract_number, "uuid": uuid} = $.bind(__args, ["contract_number", "uuid"], {}, [], null, null);
/** Return one Nissan finance invoice document. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GetInvoicePDF", $.attr(operations, "GET_INVOICE_PDF"), $.call(invoice_pdf_variables, [contract_number, uuid], null)], null));
return $.call(parse_invoice_pdf, [data], null);
}
async_get_invoices(contract_number: string): Promise<ReadonlyArray<NCFInvoiceSummary | null> | null>;
/** Return Nissan finance invoice summaries. */
async async_get_invoices(...__args: any[]): any {
let data;
let {"contract_number": contract_number} = $.bind(__args, ["contract_number"], {}, [], null, null);
/** Return Nissan finance invoice summaries. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GetInvoices", $.attr(operations, "GET_INVOICES"), $.call(contract_number_variables, [contract_number], null)], null));
return $.call(parse_invoices, [data], null);
}
async_get_ncf_account_statement(start_date: $.DateValue, end_date: $.DateValue, contract_type: NCFAccountContractType): Promise<ReadonlyArray<NCFAccountStatementVehicle | null> | null>;
/** Return detailed NCF statements for a date range. */
async async_get_ncf_account_statement(...__args: any[]): any {
let data;
let {"start_date": start_date, "end_date": end_date, "contract_type": contract_type} = $.bind(__args, ["start_date", "end_date", "contract_type"], {}, [], null, null);
/** Return detailed NCF statements for a date range. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NCFAccountStatement", $.attr(operations, "NCF_ACCOUNT_STATEMENT"), $.call(ncf_account_statement_variables, [start_date, end_date, contract_type], null)], null));
return $.call(parse_ncf_account_statement, [data], null);
}
async_get_ncf_payout_quote(account_number: string, vin: string): Promise<NCFPayoutQuote | null>;
/** Return the current payout quote for a finance account and vehicle. */
async async_get_ncf_payout_quote(...__args: any[]): any {
let data;
let {"account_number": account_number, "vin": vin} = $.bind(__args, ["account_number", "vin"], {}, [], null, null);
/** Return the current payout quote for a finance account and vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NCFPayoutQuote", $.attr(operations, "NCF_PAYOUT_QUOTE"), $.call(ncf_payout_quote_variables, [account_number, vin], null)], null));
return $.call(parse_ncf_payout_quote, [data], null);
}
async_get_ncf_preferences(account_number: string): Promise<NCFNotificationPreferences | null>;
/** Return NCF notification preferences. */
async async_get_ncf_preferences(...__args: any[]): any {
let data;
let {"account_number": account_number} = $.bind(__args, ["account_number"], {}, [], null, null);
/** Return NCF notification preferences. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NCFPreferences", $.attr(operations, "NCF_PREFERENCES"), $.call(account_number_variables, [account_number], null)], null));
return $.call(parse_ncf_preferences, [data], null);
}
async_get_ncf_terms_and_conditions(): Promise<string | null>;
/** Return NCF terms and conditions. */
async async_get_ncf_terms_and_conditions(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return NCF terms and conditions. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NCFTermsAndConditions", $.attr(operations, "NCF_TERMS_AND_CONDITIONS"), {}], null));
return $.call(parse_ncf_terms_and_conditions, [data], null);
}
async_get_payment_history(account_number: string, start_date: $.DateValue, end_date: $.DateValue): Promise<ReadonlyArray<NCFPaymentHistoryEntry | null> | null>;
/** Return NCF payment history for a date-time range. */
async async_get_payment_history(...__args: any[]): any {
let data;
let {"account_number": account_number, "start_date": start_date, "end_date": end_date} = $.bind(__args, ["account_number", "start_date", "end_date"], {}, [], null, null);
/** Return NCF payment history for a date-time range. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["PaymentHistory", $.attr(operations, "PAYMENT_HISTORY"), $.call(payment_history_variables, [account_number, start_date, end_date], null)], null));
return $.call(parse_payment_history, [data], null);
}
}
$.classType(_FinanceClientMixin);
export interface _FinanceClientMixin extends _NissanClientBase {}
