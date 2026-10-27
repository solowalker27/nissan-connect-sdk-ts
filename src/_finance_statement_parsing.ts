// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _nullable_list, _required_date, _required_nullable_date, _required_nullable_datetime, _required_nullable_float } from "./_finance_value_parsing";
export { _nullable_list, _required_date, _required_nullable_date, _required_nullable_datetime, _required_nullable_float };

import { _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _typename } from "./account_parsing";
export { _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _typename };

import { NCFAccountStatement, NCFAccountStatementAccount, NCFAccountStatementSummary, NCFAccountStatementVehicle, NCFBillingStatement, NCFInvoiceSummary, NCFLeaseBillingStatementDetails, NCFLeaseTransactionDetails, NCFPaymentHistoryEntry, NCFPaymentHistoryLoanDetails, NCFStatementTransaction, UnselectedFinanceResult, VehicleCredit, VehicleCreditInfo } from "./finance_models";
export { NCFAccountStatement, NCFAccountStatementAccount, NCFAccountStatementSummary, NCFAccountStatementVehicle, NCFBillingStatement, NCFInvoiceSummary, NCFLeaseBillingStatementDetails, NCFLeaseTransactionDetails, NCFPaymentHistoryEntry, NCFPaymentHistoryLoanDetails, NCFStatementTransaction, UnselectedFinanceResult, VehicleCredit, VehicleCreditInfo };

export function _parse_statement_summary(value: Record<string, unknown>, path: string): NCFAccountStatementSummary;
/** Translated upstream _parse_statement_summary. */
export function _parse_statement_summary(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NCFAccountStatementSummary, [], Object.assign({}, {"date": $.call(_required_date, [value, "date", ($.str(path) + ".date")], null)}, {"document_number": $.call(_required_string, [value, "documentNumber", ($.str(path) + ".documentNumber")], null)}));
}

export function _parse_vehicle_credit_info(value: Record<string, unknown>, path: string): VehicleCreditInfo;
/** Translated upstream _parse_vehicle_credit_info. */
export function _parse_vehicle_credit_info(...__args: any[]): any {
let credit, credit_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
credit_path = ($.str(path) + ".credit");
credit = $.call(_required_optional_typed_object, [value, "credit", credit_path], null);
return $.call(VehicleCreditInfo, [], Object.assign({}, {"vin": $.call(_required_string, [value, "vin", ($.str(path) + ".vin")], null)}, {"credit": $.call(_parse_credit, [credit, credit_path], null)}));
}

export function _parse_credit(value: Record<string, unknown> | null, path: string): VehicleCredit | null;
/** Translated upstream _parse_credit. */
export function _parse_credit(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(VehicleCredit, [], Object.assign({}, {"current_quota": $.call(_required_nullable_int, [value, "currentQuota", ($.str(path) + ".currentQuota")], null)}, {"credit_type": $.call(_required_nullable_string, [value, "creditType", ($.str(path) + ".creditType")], null)}, {"credit_status": $.call(_required_nullable_string, [value, "creditStatus", ($.str(path) + ".creditStatus")], null)}, {"status_text": $.call(_required_nullable_string, [value, "statusText", ($.str(path) + ".statusText")], null)}, {"next_payment_amount": $.call(_required_nullable_float, [value, "nextPaymentAmount", ($.str(path) + ".nextPaymentAmount")], null)}, {"next_payment_date": $.call(_required_nullable_date, [value, "nextPaymentDate", ($.str(path) + ".nextPaymentDate")], null)}, {"contract_number": $.call(_required_nullable_string, [value, "contractNumber", ($.str(path) + ".contractNumber")], null)}, {"term": $.call(_required_nullable_int, [value, "term", ($.str(path) + ".term")], null)}, {"overdue_quotas": $.call(_required_nullable_string, [value, "overdueQuotas", ($.str(path) + ".overdueQuotas")], null)}, {"id": $.call(_required_nullable_string, [value, "id", ($.str(path) + ".id")], null)}, {"balance": $.call(_required_nullable_float, [value, "balance", ($.str(path) + ".balance")], null)}, {"account_domiciliation": $.call(_required_nullable_string, [value, "accountDomiciliation", ($.str(path) + ".accountDomiciliation")], null)}, {"last_update": $.call(_required_nullable_date, [value, "lastUpdate", ($.str(path) + ".lastUpdate")], null)}, {"overdue_amount": $.call(_required_nullable_float, [value, "overdueAmount", ($.str(path) + ".overdueAmount")], null)}, {"start_date": $.call(_required_nullable_date, [value, "startDate", ($.str(path) + ".startDate")], null)}, {"end_date": $.call(_required_nullable_date, [value, "endDate", ($.str(path) + ".endDate")], null)}, {"total_overdue_amount": $.call(_required_nullable_float, [value, "totalOverdueAmount", ($.str(path) + ".totalOverdueAmount")], null)}, {"extended_rent": $.call(_required_nullable_float, [value, "extendedRent", ($.str(path) + ".extendedRent")], null)}, {"support_email": $.call(_required_nullable_string, [value, "supportEmail", ($.str(path) + ".supportEmail")], null)}, {"support_phone_number": $.call(_required_nullable_string, [value, "supportPhoneNumber", ($.str(path) + ".supportPhoneNumber")], null)}, {"terms_and_conditions": $.call(_required_nullable_string, [value, "termsAndConditions", ($.str(path) + ".termsAndConditions")], null)}, {"end_contract_email": $.call(_required_nullable_string, [value, "endContractEmail", ($.str(path) + ".endContractEmail")], null)}, {"credits_portal": $.call(_required_nullable_string, [value, "creditsPortal", ($.str(path) + ".creditsPortal")], null)}));
}

export function _parse_invoice_summary(value: Record<string, unknown>, path: string): NCFInvoiceSummary;
/** Translated upstream _parse_invoice_summary. */
export function _parse_invoice_summary(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NCFInvoiceSummary, [], Object.assign({}, {"date": $.call(_required_date, [value, "date", ($.str(path) + ".date")], null)}, {"uuid": $.call(_required_string, [value, "uuid", ($.str(path) + ".uuid")], null)}));
}

export function _parse_account_statement_vehicle(value: Record<string, unknown>, path: string): NCFAccountStatementVehicle;
/** Translated upstream _parse_account_statement_vehicle. */
export function _parse_account_statement_vehicle(...__args: any[]): any {
let account, account_path, statement, statement_path, typename;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
typename = $.call(_typename, [value, path], null);
if ($.truth((!$.eq(typename, "NCFFinancialVehicle")))) {
return $.call(UnselectedFinanceResult, [typename], null);
}
account_path = ($.str(path) + ".account");
account = $.call(_required_optional_typed_object, [value, "account", account_path], null);
if ($.truth(((account === null)))) {
return $.call(NCFAccountStatementAccount, [null, null], null);
}
statement_path = ($.str(account_path) + ".statement");
statement = $.call(_required_optional_typed_object, [account, "statement", statement_path], null);
return $.call(NCFAccountStatementAccount, [], Object.assign({}, {"account_number": $.call(_required_nullable_string, [account, "accountNumber", ($.str(account_path) + ".accountNumber")], null)}, {"statement": $.call(_parse_account_statement, [statement, statement_path], null)}));
}

export function _parse_account_statement(value: Record<string, unknown> | null, path: string): NCFAccountStatement | null;
/** Translated upstream _parse_account_statement. */
export function _parse_account_statement(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(NCFAccountStatement, [], Object.assign({}, {"billing_statements": $.call(_nullable_list, [value, "billingStatements", ($.str(path) + ".billingStatements"), _parse_billing_statement], null)}, {"transactions": $.call(_nullable_list, [value, "transactions", ($.str(path) + ".transactions"), _parse_statement_transaction], null)}));
}

export function _parse_billing_statement(value: Record<string, unknown>, path: string): NCFBillingStatement;
/** Translated upstream _parse_billing_statement. */
export function _parse_billing_statement(...__args: any[]): any {
let lease_details, typename;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
typename = $.call(_typename, [value, path], null);
lease_details = null;
if ($.truth(($.eq(typename, "NCFAccountBillingStatementLease")))) {
lease_details = $.call(NCFLeaseBillingStatementDetails, [], Object.assign({}, {"prior_balance_amount": $.call(_required_nullable_float, [value, "priorBalanceAmount", ($.str(path) + ".priorBalanceAmount")], null)}, {"vehicle_year": $.call(_required_nullable_string, [value, "vehicleYear", ($.str(path) + ".vehicleYear")], null)}, {"vehicle_model": $.call(_required_nullable_string, [value, "vehicleModel", ($.str(path) + ".vehicleModel")], null)}, {"vehicle_make": $.call(_required_nullable_string, [value, "vehicleMake", ($.str(path) + ".vehicleMake")], null)}));
}
return $.call(NCFBillingStatement, [], Object.assign({}, {"typename": typename}, {"current_balance_amount": $.call(_required_nullable_float, [value, "currentBalanceAmount", ($.str(path) + ".currentBalanceAmount")], null)}, {"payment_due_date": $.call(_required_nullable_date, [value, "paymentDueDate", ($.str(path) + ".paymentDueDate")], null)}, {"financial_account_id": $.call(_required_nullable_string, [value, "financialAccountId", ($.str(path) + ".financialAccountId")], null)}, {"statement_date": $.call(_required_nullable_date, [value, "statementDate", ($.str(path) + ".statementDate")], null)}, {"total_amount_due": $.call(_required_nullable_float, [value, "totalAmountDue", ($.str(path) + ".totalAmountDue")], null)}, {"lease_details": lease_details}));
}

export function _parse_statement_transaction(value: Record<string, unknown>, path: string): NCFStatementTransaction;
/** Translated upstream _parse_statement_transaction. */
export function _parse_statement_transaction(...__args: any[]): any {
let lease_details, typename;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
typename = $.call(_typename, [value, path], null);
lease_details = null;
if ($.truth(($.eq(typename, "NCFAccountTransactionLease")))) {
lease_details = $.call(NCFLeaseTransactionDetails, [], Object.assign({}, {"payment_total_amount": $.call(_required_nullable_float, [value, "paymentTotalAmount", ($.str(path) + ".paymentTotalAmount")], null)}, {"payment_tax_amount": $.call(_required_nullable_float, [value, "paymentTaxAmount", ($.str(path) + ".paymentTaxAmount")], null)}, {"payment_description": $.call(_required_nullable_string, [value, "paymentDescription", ($.str(path) + ".paymentDescription")], null)}));
}
return $.call(NCFStatementTransaction, [], Object.assign({}, {"typename": typename}, {"payment_amount": $.call(_required_nullable_float, [value, "paymentAmount", ($.str(path) + ".paymentAmount")], null)}, {"financial_account_id": $.call(_required_nullable_string, [value, "financialAccountId", ($.str(path) + ".financialAccountId")], null)}, {"statement_date": $.call(_required_nullable_date, [value, "statementDate", ($.str(path) + ".statementDate")], null)}, {"sequence_number": $.call(_required_nullable_string, [value, "sequenceNo", ($.str(path) + ".sequenceNo")], null)}, {"lease_details": lease_details}));
}

export function _parse_payment_history_entry(value: Record<string, unknown>, path: string): NCFPaymentHistoryEntry;
/** Translated upstream _parse_payment_history_entry. */
export function _parse_payment_history_entry(...__args: any[]): any {
let loan_details, typename;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
typename = $.call(_typename, [value, path], null);
loan_details = null;
if ($.truth(($.eq(typename, "NCFPaymentHistoryTransactionLoan")))) {
loan_details = $.call(NCFPaymentHistoryLoanDetails, [], Object.assign({}, {"principle_amount": $.call(_required_nullable_float, [value, "principleAmount", ($.str(path) + ".principleAmount")], null)}, {"interest_amount": $.call(_required_nullable_float, [value, "interestAmount", ($.str(path) + ".interestAmount")], null)}));
}
return $.call(NCFPaymentHistoryEntry, [], Object.assign({}, {"typename": typename}, {"type": $.call(_required_nullable_string, [value, "type", ($.str(path) + ".type")], null)}, {"description": $.call(_required_nullable_string, [value, "description", ($.str(path) + ".description")], null)}, {"effective_date": $.call(_required_nullable_datetime, [value, "effectiveDate", ($.str(path) + ".effectiveDate")], null)}, {"process_date": $.call(_required_nullable_datetime, [value, "processDate", ($.str(path) + ".processDate")], null)}, {"total_payment_amount": $.call(_required_nullable_float, [value, "totalPaymentAmount", ($.str(path) + ".totalPaymentAmount")], null)}, {"miscellaneous_fees": $.call(_required_nullable_float, [value, "miscellaneousFees", ($.str(path) + ".miscellaneousFees")], null)}, {"base_rent_amount": $.call(_required_nullable_float, [value, "baseRentAmount", ($.str(path) + ".baseRentAmount")], null)}, {"tax_amount": $.call(_required_nullable_float, [value, "taxAmount", ($.str(path) + ".taxAmount")], null)}, {"late_fees": $.call(_required_nullable_float, [value, "lateFees", ($.str(path) + ".lateFees")], null)}, {"admin_fees": $.call(_required_nullable_float, [value, "adminFees", ($.str(path) + ".adminFees")], null)}, {"registration_fees": $.call(_required_nullable_float, [value, "registrationFees", ($.str(path) + ".registrationFees")], null)}, {"loan_details": loan_details}));
}
