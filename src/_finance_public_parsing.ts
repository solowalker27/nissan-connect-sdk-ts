// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _parse_financial_vehicle } from "./_finance_account_parsing";
export { _parse_financial_vehicle };

import { _parse_account_statement_vehicle, _parse_invoice_summary, _parse_payment_history_entry, _parse_statement_summary, _parse_vehicle_credit_info } from "./_finance_statement_parsing";
export { _parse_account_statement_vehicle, _parse_invoice_summary, _parse_payment_history_entry, _parse_statement_summary, _parse_vehicle_credit_info };

import { _nullable_list, _required_bool, _required_nullable_date, _required_nullable_float } from "./_finance_value_parsing";
export { _nullable_list, _required_bool, _required_nullable_date, _required_nullable_float };

import { _required_field, _required_nullable_bool, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typename } from "./account_parsing";
export { _required_field, _required_nullable_bool, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typename };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { FinancialVehicle, NCFAccountStatementPDF, NCFAccountStatementSummary, NCFAccountStatementVehicle, NCFConnectAccountCoSignerAlreadyRegistered, NCFConnectAccountInternalError, NCFConnectAccountInvalidCombination, NCFConnectAccountPrimaryAlreadyRegistered, NCFConnectAccountResult, NCFConnectAccountSuccess, NCFDisconnectAccountFailure, NCFDisconnectAccountResult, NCFDisconnectAccountSuccess, NCFInvoicePDF, NCFInvoiceSummary, NCFNotificationPreferences, NCFPaymentHistoryEntry, NCFPayoutQuote, NCFUpdateAccountResult, NCFUpdateNotificationPreferencesError, NCFUpdateNotificationPreferencesResult, NCFUpdateNotificationPreferencesSuccess, UnselectedFinanceResult, VehicleCreditInfo } from "./finance_models";
export { FinancialVehicle, NCFAccountStatementPDF, NCFAccountStatementSummary, NCFAccountStatementVehicle, NCFConnectAccountCoSignerAlreadyRegistered, NCFConnectAccountInternalError, NCFConnectAccountInvalidCombination, NCFConnectAccountPrimaryAlreadyRegistered, NCFConnectAccountResult, NCFConnectAccountSuccess, NCFDisconnectAccountFailure, NCFDisconnectAccountResult, NCFDisconnectAccountSuccess, NCFInvoicePDF, NCFInvoiceSummary, NCFNotificationPreferences, NCFPaymentHistoryEntry, NCFPayoutQuote, NCFUpdateAccountResult, NCFUpdateNotificationPreferencesError, NCFUpdateNotificationPreferencesResult, NCFUpdateNotificationPreferencesSuccess, UnselectedFinanceResult, VehicleCreditInfo };

export function parse_ncf_connect_account(data: Record<string, unknown>): NCFConnectAccountResult | null;
/** Parse every generated NCF account-link union branch. */
export function parse_ncf_connect_account(...__args: any[]): any {
let field, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated NCF account-link union branch. */
field = "ncfConnectAccount";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "NCFConnectAccountSuccessResponse")))) {
return $.call(NCFConnectAccountSuccess, [$.call(_required_nullable_bool, [root, "success", ($.str(field) + ".success")], null)], null);
}
if ($.truth(($.eq(typename, "NCFConnectAccountCoSignerAlreadyRegisteredErrorResponse")))) {
return $.call(NCFConnectAccountCoSignerAlreadyRegistered, [$.call(_required_nullable_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "NCFConnectAccountInvalidVinAndAccountCombinationErrorResponse")))) {
return $.call(NCFConnectAccountInvalidCombination, [$.call(_required_nullable_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "NCFConnectAccountInternalErrorResponse")))) {
return $.call(NCFConnectAccountInternalError, [$.call(_required_nullable_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "NCFConnectAccountPrimaryAlreadyRegisteredErrorResponse")))) {
return $.call(NCFConnectAccountPrimaryAlreadyRegistered, [$.call(_required_nullable_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedFinanceResult, [typename], null);
}

export function parse_ncf_disconnect_account(data: Record<string, unknown>): NCFDisconnectAccountResult | null;
/** Parse every generated NCF account-disconnection union branch. */
export function parse_ncf_disconnect_account(...__args: any[]): any {
let field, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated NCF account-disconnection union branch. */
field = "ncfDisconnectAccount";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "NCFDisconnectAccountSuccessResponse")))) {
return $.call(NCFDisconnectAccountSuccess, [$.call(_required_nullable_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
if ($.truth(($.eq(typename, "NCFDisconnectAccountFailureResponse")))) {
return $.call(NCFDisconnectAccountFailure, [$.call(_required_nullable_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedFinanceResult, [typename], null);
}

export function parse_ncf_update_account(data: Record<string, unknown>): NCFUpdateAccountResult | null;
/** Parse the nullable NCF profile-update status. */
export function parse_ncf_update_account(...__args: any[]): any {
let field, root;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable NCF profile-update status. */
field = "ncfUpdateAccount";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(NCFUpdateAccountResult, [$.call(_required_nullable_bool, [root, "success", ($.str(field) + ".success")], null)], null);
}

export function parse_ncf_update_notification_preferences(data: Record<string, unknown>): NCFUpdateNotificationPreferencesResult | null;
/** Parse every generated NCF notification-update union branch. */
export function parse_ncf_update_notification_preferences(...__args: any[]): any {
let field, root, success, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated NCF notification-update union branch. */
field = "ncfUpdateNotificationPreferences";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "NCFUpdateNotificationPreferencesSuccessResponse")))) {
success = $.call(_required_field, [root, "success", ($.str(field) + ".success")], null);
if ($.truth(!$.truth($.call($.isinstance, [success, $.bool], null)))) {
throw $.call(ResponseError, [($.str(field) + ".success is not a boolean")], null);
}
return $.call(NCFUpdateNotificationPreferencesSuccess, [success], null);
}
if ($.truth(($.eq(typename, "NCFUpdateNotificationPreferencesErrorResponse")))) {
return $.call(NCFUpdateNotificationPreferencesError, [$.call(_required_nullable_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedFinanceResult, [typename], null);
}

export function parse_financial_vehicles(data: Record<string, unknown>): ReadonlyArray<FinancialVehicle | null> | null;
/** Parse nullable NCF vehicles. */
export function parse_financial_vehicles(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable NCF vehicles. */
return $.call(_nullable_list, [data, "financialVehicles", "financialVehicles", _parse_financial_vehicle], null);
}

export function parse_account_statement_pdf(data: Record<string, unknown>): NCFAccountStatementPDF | null;
/** Parse a nullable account-statement PDF payload. */
export function parse_account_statement_pdf(...__args: any[]): any {
let field, root;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a nullable account-statement PDF payload. */
field = "accountStatementPDF";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(NCFAccountStatementPDF, [], Object.assign({}, {"document": $.call(_required_string, [root, "document", ($.str(field) + ".document")], null)}, {"document_url": $.call(_required_string, [root, "documentUrl", ($.str(field) + ".documentUrl")], null)}));
}

export function parse_account_statements(data: Record<string, unknown>): ReadonlyArray<NCFAccountStatementSummary | null> | null;
/** Parse nullable account-statement summaries. */
export function parse_account_statements(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable account-statement summaries. */
return $.call(_nullable_list, [data, "accountStatements", "accountStatements", _parse_statement_summary], null);
}

export function parse_vehicle_credit(data: Record<string, unknown>): ReadonlyArray<VehicleCreditInfo | null> | null;
/** Parse nullable vehicle credit details. */
export function parse_vehicle_credit(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable vehicle credit details. */
return $.call(_nullable_list, [data, "vehicles", "vehicles", _parse_vehicle_credit_info], null);
}

export function parse_invoice_pdf(data: Record<string, unknown>): NCFInvoicePDF | null;
/** Parse a nullable invoice PDF payload. */
export function parse_invoice_pdf(...__args: any[]): any {
let field, root;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a nullable invoice PDF payload. */
field = "invoicePDF";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(NCFInvoicePDF, [], Object.assign({}, {"uuid": $.call(_required_string, [root, "uuid", ($.str(field) + ".uuid")], null)}, {"file": $.call(_required_string, [root, "file", ($.str(field) + ".file")], null)}));
}

export function parse_invoices(data: Record<string, unknown>): ReadonlyArray<NCFInvoiceSummary | null> | null;
/** Parse nullable invoice summaries. */
export function parse_invoices(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable invoice summaries. */
return $.call(_nullable_list, [data, "invoices", "invoices", _parse_invoice_summary], null);
}

export function parse_ncf_account_statement(data: Record<string, unknown>): ReadonlyArray<NCFAccountStatementVehicle | null> | null;
/** Parse nullable per-vehicle NCF billing statements. */
export function parse_ncf_account_statement(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable per-vehicle NCF billing statements. */
return $.call(_nullable_list, [data, "financialVehicles", "financialVehicles", _parse_account_statement_vehicle], null);
}

export function parse_ncf_payout_quote(data: Record<string, unknown>): NCFPayoutQuote | null;
/** Parse a nullable NCF loan or lease payout quote. */
export function parse_ncf_payout_quote(...__args: any[]): any {
let early_termination_amount, field, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a nullable NCF loan or lease payout quote. */
field = "ncfPayoutQuote";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
early_termination_amount = null;
if ($.truth(($.eq(typename, "NCFPayoutQuoteLease")))) {
early_termination_amount = $.call(_required_nullable_float, [root, "earlyTerminationAmount", ($.str(field) + ".earlyTerminationAmount")], null);
}
return $.call(NCFPayoutQuote, [], Object.assign({}, {"amount": $.call(_required_nullable_float, [root, "amount", ($.str(field) + ".amount")], null)}, {"good_through_date": $.call(_required_nullable_date, [root, "goodThroughDate", ($.str(field) + ".goodThroughDate")], null)}, {"early_termination_amount": early_termination_amount}));
}

export function parse_ncf_preferences(data: Record<string, unknown>): NCFNotificationPreferences | null;
/** Parse nullable NCF notification preferences. */
export function parse_ncf_preferences(...__args: any[]): any {
let field, preferences, root;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable NCF notification preferences. */
root = $.call(_root, [data, "ncfPreferences"], null);
if ($.truth(((root === null)))) {
return null;
}
field = "ncfPreferences.notificationPreferences";
preferences = $.call(_required_optional_typed_object, [root, "notificationPreferences", field], null);
if ($.truth(((preferences === null)))) {
return null;
}
return $.call(NCFNotificationPreferences, [], Object.assign({}, {"paperless_statement": $.call(_required_bool, [preferences, "isPaperlessStatement", ($.str(field) + ".isPaperlessStatement")], null)}, {"payment_due_in_one_day": $.call(_required_bool, [preferences, "isPaymentDueInOneDay", ($.str(field) + ".isPaymentDueInOneDay")], null)}, {"payment_received": $.call(_required_bool, [preferences, "isPaymentReceived", ($.str(field) + ".isPaymentReceived")], null)}, {"payment_past_due": $.call(_required_bool, [preferences, "isPaymentPastDue", ($.str(field) + ".isPaymentPastDue")], null)}, {"statement_available": $.call(_required_bool, [preferences, "isStatementAvailable", ($.str(field) + ".isStatementAvailable")], null)}));
}

export function parse_ncf_terms_and_conditions(data: Record<string, unknown>): string | null;
/** Parse nullable NCF terms. */
export function parse_ncf_terms_and_conditions(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable NCF terms. */
return $.call(_required_nullable_string, [data, "ncfTermsAndConditions", "ncfTermsAndConditions"], null);
}

export function parse_payment_history(data: Record<string, unknown>): ReadonlyArray<NCFPaymentHistoryEntry | null> | null;
/** Parse nullable NCF payment history. */
export function parse_payment_history(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable NCF payment history. */
return $.call(_nullable_list, [data, "paymentHistory", "paymentHistory", _parse_payment_history_entry], null);
}
