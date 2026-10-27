// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const date = $.date;
const datetime = $.datetime;

const StrEnum = $.StrEnum;

export const NCFCustomerType = $.enumType("NCFCustomerType", {"PRIMARY": "PRIMARY", "CO_SIGNER": "CO_SIGNER", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type NCFCustomerType = ReturnType<typeof NCFCustomerType>;

export const NCFAccountContractType = $.enumType("NCFAccountContractType", {"RETAIL": "RETAIL", "LEASE": "LEASE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type NCFAccountContractType = ReturnType<typeof NCFAccountContractType>;

/** Future finance union branch selected only by type name. */
export class UnselectedFinanceResult {
readonly typename: string;
static __fields = [["typename", $.MISSING]];
constructor(typename: string);
constructor(options: { typename: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnselectedFinanceResult, __args);  Object.freeze(this); }
}
$.classType(UnselectedFinanceResult);

/** Nullable status returned after linking an NCF account. */
export class NCFConnectAccountSuccess {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFConnectAccountSuccess, __args);  Object.freeze(this); }
}
$.classType(NCFConnectAccountSuccess);

/** Base for finance union branches with nullable messages. */
export class NCFFinanceMessageResult {
readonly message: string | null;
static __fields = [["message", $.MISSING]];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFFinanceMessageResult, __args);  Object.freeze(this); }
}
$.classType(NCFFinanceMessageResult);

/** The co-signer is already registered. */
export class NCFConnectAccountCoSignerAlreadyRegistered extends $.mix(NCFFinanceMessageResult) {
static __fields = [];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NCFConnectAccountCoSignerAlreadyRegistered, __args);  Object.freeze(this); }
}
$.classType(NCFConnectAccountCoSignerAlreadyRegistered);
export interface NCFConnectAccountCoSignerAlreadyRegistered extends NCFFinanceMessageResult {}

/** VIN and account number do not form a valid combination. */
export class NCFConnectAccountInvalidCombination extends $.mix(NCFFinanceMessageResult) {
static __fields = [];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NCFConnectAccountInvalidCombination, __args);  Object.freeze(this); }
}
$.classType(NCFConnectAccountInvalidCombination);
export interface NCFConnectAccountInvalidCombination extends NCFFinanceMessageResult {}

/** Internal account-link failure. */
export class NCFConnectAccountInternalError extends $.mix(NCFFinanceMessageResult) {
static __fields = [];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NCFConnectAccountInternalError, __args);  Object.freeze(this); }
}
$.classType(NCFConnectAccountInternalError);
export interface NCFConnectAccountInternalError extends NCFFinanceMessageResult {}

/** The primary borrower is already registered. */
export class NCFConnectAccountPrimaryAlreadyRegistered extends $.mix(NCFFinanceMessageResult) {
static __fields = [];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NCFConnectAccountPrimaryAlreadyRegistered, __args);  Object.freeze(this); }
}
$.classType(NCFConnectAccountPrimaryAlreadyRegistered);
export interface NCFConnectAccountPrimaryAlreadyRegistered extends NCFFinanceMessageResult {}

export type NCFConnectAccountResult = NCFConnectAccountSuccess | NCFConnectAccountCoSignerAlreadyRegistered | NCFConnectAccountInvalidCombination | NCFConnectAccountInternalError | NCFConnectAccountPrimaryAlreadyRegistered | UnselectedFinanceResult;

/** Successful NCF account disconnection. */
export class NCFDisconnectAccountSuccess extends $.mix(NCFFinanceMessageResult) {
static __fields = [];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NCFDisconnectAccountSuccess, __args);  Object.freeze(this); }
}
$.classType(NCFDisconnectAccountSuccess);
export interface NCFDisconnectAccountSuccess extends NCFFinanceMessageResult {}

/** Failed NCF account disconnection. */
export class NCFDisconnectAccountFailure extends $.mix(NCFFinanceMessageResult) {
static __fields = [];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NCFDisconnectAccountFailure, __args);  Object.freeze(this); }
}
$.classType(NCFDisconnectAccountFailure);
export interface NCFDisconnectAccountFailure extends NCFFinanceMessageResult {}

export type NCFDisconnectAccountResult = NCFDisconnectAccountSuccess | NCFDisconnectAccountFailure | UnselectedFinanceResult;

/** Nullable status returned after updating an NCF account. */
export class NCFUpdateAccountResult {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFUpdateAccountResult, __args);  Object.freeze(this); }
}
$.classType(NCFUpdateAccountResult);

/** Successful NCF notification-preference update. */
export class NCFUpdateNotificationPreferencesSuccess {
readonly success: boolean;
static __fields = [["success", $.MISSING]];
constructor(success: boolean);
constructor(options: { success: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFUpdateNotificationPreferencesSuccess, __args);  Object.freeze(this); }
}
$.classType(NCFUpdateNotificationPreferencesSuccess);

/** Failed NCF notification-preference update. */
export class NCFUpdateNotificationPreferencesError extends $.mix(NCFFinanceMessageResult) {
static __fields = [];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; $.initData(this, NCFUpdateNotificationPreferencesError, __args);  Object.freeze(this); }
}
$.classType(NCFUpdateNotificationPreferencesError);
export interface NCFUpdateNotificationPreferencesError extends NCFFinanceMessageResult {}

export type NCFUpdateNotificationPreferencesResult = NCFUpdateNotificationPreferencesSuccess | NCFUpdateNotificationPreferencesError | UnselectedFinanceResult;

/** Nullable upcoming, recent, and overdue payment amounts. */
export class NCFUpcomingPayment {
readonly amount_due: number | null;
readonly due_date: $.DateValue | null;
readonly recent_payment: number | null;
readonly recent_payment_date: $.DateValue | null;
readonly overdue_balance: number | null;
static __fields = [["amount_due", $.MISSING], ["due_date", $.MISSING], ["recent_payment", $.MISSING], ["recent_payment_date", $.MISSING], ["overdue_balance", $.MISSING]];
constructor(amount_due: number | null, due_date: $.DateValue | null, recent_payment: number | null, recent_payment_date: $.DateValue | null, overdue_balance: number | null);
constructor(options: { amount_due: number | null; due_date: $.DateValue | null; recent_payment: number | null; recent_payment_date: $.DateValue | null; overdue_balance: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFUpcomingPayment, __args);  Object.freeze(this); }
}
$.classType(NCFUpcomingPayment);

/** Nullable billing-address fields for an NCF customer. */
export class NCFBillingAddress {
readonly address: string | null;
readonly city: string | null;
readonly zip_code: string | null;
readonly state: string | null;
static __fields = [["address", $.MISSING], ["city", $.MISSING], ["zip_code", $.MISSING], ["state", $.MISSING]];
constructor(address: string | null, city: string | null, zip_code: string | null, state: string | null);
constructor(options: { address: string | null; city: string | null; zip_code: string | null; state: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFBillingAddress, __args);  Object.freeze(this); }
}
$.classType(NCFBillingAddress);

/** Nullable customer fields attached to a finance contract. */
export class NCFFinancialCustomer {
readonly first_name: string | null;
readonly last_name: string | null;
readonly buyer_type: NCFCustomerType | null;
readonly phone_number: string | null;
readonly billing_address: NCFBillingAddress | null;
static __fields = [["first_name", $.MISSING], ["last_name", $.MISSING], ["buyer_type", $.MISSING], ["phone_number", $.MISSING], ["billing_address", $.MISSING]];
constructor(first_name: string | null, last_name: string | null, buyer_type: NCFCustomerType | null, phone_number: string | null, billing_address: NCFBillingAddress | null);
constructor(options: { first_name: string | null; last_name: string | null; buyer_type: NCFCustomerType | null; phone_number: string | null; billing_address: NCFBillingAddress | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFFinancialCustomer, __args);  Object.freeze(this); }
}
$.classType(NCFFinancialCustomer);

/** Nullable originating dealer details. */
export class NCFFinancialDealer {
readonly name: string | null;
readonly phone_number: string | null;
static __fields = [["name", $.MISSING], ["phone_number", $.MISSING]];
constructor(name: string | null, phone_number: string | null);
constructor(options: { name: string | null; phone_number: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFFinancialDealer, __args);  Object.freeze(this); }
}
$.classType(NCFFinancialDealer);

/** Nullable values selected for a retail loan contract. */
export class NCFLoanDetails {
readonly original_balance: number | null;
readonly remaining_balance: number | null;
readonly apr: number | null;
readonly principle_paid_amount: number | null;
readonly interest_paid_amount: number | null;
readonly payment_progress_percentage: number | null;
static __fields = [["original_balance", $.MISSING], ["remaining_balance", $.MISSING], ["apr", $.MISSING], ["principle_paid_amount", $.MISSING], ["interest_paid_amount", $.MISSING], ["payment_progress_percentage", $.MISSING]];
constructor(original_balance: number | null, remaining_balance: number | null, apr: number | null, principle_paid_amount: number | null, interest_paid_amount: number | null, payment_progress_percentage: number | null);
constructor(options: { original_balance: number | null; remaining_balance: number | null; apr: number | null; principle_paid_amount: number | null; interest_paid_amount: number | null; payment_progress_percentage: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFLoanDetails, __args);  Object.freeze(this); }
}
$.classType(NCFLoanDetails);

/** Nullable values selected for a lease contract. */
export class NCFLeaseDetails {
readonly term: number | null;
readonly payments_remaining: number | null;
readonly original_mileage: number | null;
readonly contracted_mileage: number | null;
readonly total_mileage_allowance: number | null;
readonly excess_mileage_charge_amount: number | null;
readonly disposition_fee_amount: number | null;
readonly residual_value: number | null;
readonly adjusted_payment_amount: number | null;
readonly total_payment_amount: number | null;
readonly payment_tax_amount: number | null;
readonly payment_tax_rate: number | null;
readonly payment_progress_percentage: number | null;
readonly security_deposit_amount: number | null;
static __fields = [["term", $.MISSING], ["payments_remaining", $.MISSING], ["original_mileage", $.MISSING], ["contracted_mileage", $.MISSING], ["total_mileage_allowance", $.MISSING], ["excess_mileage_charge_amount", $.MISSING], ["disposition_fee_amount", $.MISSING], ["residual_value", $.MISSING], ["adjusted_payment_amount", $.MISSING], ["total_payment_amount", $.MISSING], ["payment_tax_amount", $.MISSING], ["payment_tax_rate", $.MISSING], ["payment_progress_percentage", $.MISSING], ["security_deposit_amount", $.MISSING]];
constructor(term: number | null, payments_remaining: number | null, original_mileage: number | null, contracted_mileage: number | null, total_mileage_allowance: number | null, excess_mileage_charge_amount: number | null, disposition_fee_amount: number | null, residual_value: number | null, adjusted_payment_amount: number | null, total_payment_amount: number | null, payment_tax_amount: number | null, payment_tax_rate: number | null, payment_progress_percentage: number | null, security_deposit_amount: number | null);
constructor(options: { term: number | null; payments_remaining: number | null; original_mileage: number | null; contracted_mileage: number | null; total_mileage_allowance: number | null; excess_mileage_charge_amount: number | null; disposition_fee_amount: number | null; residual_value: number | null; adjusted_payment_amount: number | null; total_payment_amount: number | null; payment_tax_amount: number | null; payment_tax_rate: number | null; payment_progress_percentage: number | null; security_deposit_amount: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFLeaseDetails, __args);  Object.freeze(this); }
}
$.classType(NCFLeaseDetails);

/** Common contract fields and type-specific loan or lease values. */
export class NCFFinancialContract {
readonly typename: string;
readonly maturity_date: $.DateValue | null;
readonly start_date: $.DateValue | null;
readonly number_of_payments_made: number | null;
readonly customers: ReadonlyArray<NCFFinancialCustomer | null> | null;
readonly dealer: NCFFinancialDealer | null;
readonly loan_details: NCFLoanDetails | null;
readonly lease_details: NCFLeaseDetails | null;
static __fields = [["typename", $.MISSING], ["maturity_date", $.MISSING], ["start_date", $.MISSING], ["number_of_payments_made", $.MISSING], ["customers", $.MISSING], ["dealer", $.MISSING], ["loan_details", $.MISSING], ["lease_details", $.MISSING]];
constructor(typename: string, maturity_date: $.DateValue | null, start_date: $.DateValue | null, number_of_payments_made: number | null, customers: ReadonlyArray<NCFFinancialCustomer | null> | null, dealer: NCFFinancialDealer | null, loan_details: NCFLoanDetails | null, lease_details: NCFLeaseDetails | null);
constructor(options: { typename: string; maturity_date: $.DateValue | null; start_date: $.DateValue | null; number_of_payments_made: number | null; customers: ReadonlyArray<NCFFinancialCustomer | null> | null; dealer: NCFFinancialDealer | null; loan_details: NCFLoanDetails | null; lease_details: NCFLeaseDetails | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFFinancialContract, __args);  Object.freeze(this); }
}
$.classType(NCFFinancialContract);

/** Nullable presentation and feature rules for a finance account. */
export class NCFFinancialRules {
readonly static_text: string | null;
readonly get_payoff_quote: boolean | null;
readonly payment_history: boolean | null;
readonly contract_details: boolean | null;
readonly progress_bar_maturity: boolean | null;
static __fields = [["static_text", $.MISSING], ["get_payoff_quote", $.MISSING], ["payment_history", $.MISSING], ["contract_details", $.MISSING], ["progress_bar_maturity", $.MISSING]];
constructor(static_text: string | null, get_payoff_quote: boolean | null, payment_history: boolean | null, contract_details: boolean | null, progress_bar_maturity: boolean | null);
constructor(options: { static_text: string | null; get_payoff_quote: boolean | null; payment_history: boolean | null; contract_details: boolean | null; progress_bar_maturity: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFFinancialRules, __args);  Object.freeze(this); }
}
$.classType(NCFFinancialRules);

/** Finance account, payment, contract, and rule details. */
export class NCFFinancialAccount {
readonly account_number: string | null;
readonly upcoming_payment: NCFUpcomingPayment | null;
readonly customer_type: NCFCustomerType | null;
readonly contract: NCFFinancialContract | null;
readonly rules: NCFFinancialRules | null;
static __fields = [["account_number", $.MISSING], ["upcoming_payment", $.MISSING], ["customer_type", $.MISSING], ["contract", $.MISSING], ["rules", $.MISSING]];
constructor(account_number: string | null, upcoming_payment: NCFUpcomingPayment | null, customer_type: NCFCustomerType | null, contract: NCFFinancialContract | null, rules: NCFFinancialRules | null);
constructor(options: { account_number: string | null; upcoming_payment: NCFUpcomingPayment | null; customer_type: NCFCustomerType | null; contract: NCFFinancialContract | null; rules: NCFFinancialRules | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFFinancialAccount, __args);  Object.freeze(this); }
}
$.classType(NCFFinancialAccount);

/** Vehicle data linked to an NCF account. */
export class NCFFinancialVehicle {
readonly vin: string;
readonly model: string | null;
readonly year: string | null;
readonly image: string | null;
readonly account: NCFFinancialAccount | null;
static __fields = [["vin", $.MISSING], ["model", $.MISSING], ["year", $.MISSING], ["image", $.MISSING], ["account", $.MISSING]];
constructor(vin: string, model: string | null, year: string | null, image: string | null, account: NCFFinancialAccount | null);
constructor(options: { vin: string; model: string | null; year: string | null; image: string | null; account: NCFFinancialAccount | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFFinancialVehicle, __args);  Object.freeze(this); }
}
$.classType(NCFFinancialVehicle);

/** Future financial-vehicle type with its universally selected VIN. */
export class UnselectedFinancialVehicle {
readonly typename: string;
readonly vin: string;
static __fields = [["typename", $.MISSING], ["vin", $.MISSING]];
constructor(typename: string, vin: string);
constructor(options: { typename: string; vin: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnselectedFinancialVehicle, __args);  Object.freeze(this); }
}
$.classType(UnselectedFinancialVehicle);

export type FinancialVehicle = NCFFinancialVehicle | UnselectedFinancialVehicle;

/** Required account-statement document and URL. */
export class NCFAccountStatementPDF {
readonly document: string;
readonly document_url: string;
static __fields = [["document", $.MISSING], ["document_url", $.MISSING]];
constructor(document: string, document_url: string);
constructor(options: { document: string; document_url: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFAccountStatementPDF, __args);  Object.freeze(this); }
}
$.classType(NCFAccountStatementPDF);

/** Account-statement date and document number. */
export class NCFAccountStatementSummary {
readonly date: $.DateValue;
readonly document_number: string;
static __fields = [["date", $.MISSING], ["document_number", $.MISSING]];
constructor(date: $.DateValue, document_number: string);
constructor(options: { date: $.DateValue; document_number: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFAccountStatementSummary, __args);  Object.freeze(this); }
}
$.classType(NCFAccountStatementSummary);

/** Nullable credit fields attached to a vehicle. */
export class VehicleCredit {
readonly current_quota: number | null;
readonly credit_type: string | null;
readonly credit_status: string | null;
readonly status_text: string | null;
readonly next_payment_amount: number | null;
readonly next_payment_date: $.DateValue | null;
readonly contract_number: string | null;
readonly term: number | null;
readonly overdue_quotas: string | null;
readonly id: string | null;
readonly balance: number | null;
readonly account_domiciliation: string | null;
readonly last_update: $.DateValue | null;
readonly overdue_amount: number | null;
readonly start_date: $.DateValue | null;
readonly end_date: $.DateValue | null;
readonly total_overdue_amount: number | null;
readonly extended_rent: number | null;
readonly support_email: string | null;
readonly support_phone_number: string | null;
readonly terms_and_conditions: string | null;
readonly end_contract_email: string | null;
readonly credits_portal: string | null;
static __fields = [["current_quota", $.MISSING], ["credit_type", $.MISSING], ["credit_status", $.MISSING], ["status_text", $.MISSING], ["next_payment_amount", $.MISSING], ["next_payment_date", $.MISSING], ["contract_number", $.MISSING], ["term", $.MISSING], ["overdue_quotas", $.MISSING], ["id", $.MISSING], ["balance", $.MISSING], ["account_domiciliation", $.MISSING], ["last_update", $.MISSING], ["overdue_amount", $.MISSING], ["start_date", $.MISSING], ["end_date", $.MISSING], ["total_overdue_amount", $.MISSING], ["extended_rent", $.MISSING], ["support_email", $.MISSING], ["support_phone_number", $.MISSING], ["terms_and_conditions", $.MISSING], ["end_contract_email", $.MISSING], ["credits_portal", $.MISSING]];
constructor(current_quota: number | null, credit_type: string | null, credit_status: string | null, status_text: string | null, next_payment_amount: number | null, next_payment_date: $.DateValue | null, contract_number: string | null, term: number | null, overdue_quotas: string | null, id: string | null, balance: number | null, account_domiciliation: string | null, last_update: $.DateValue | null, overdue_amount: number | null, start_date: $.DateValue | null, end_date: $.DateValue | null, total_overdue_amount: number | null, extended_rent: number | null, support_email: string | null, support_phone_number: string | null, terms_and_conditions: string | null, end_contract_email: string | null, credits_portal: string | null);
constructor(options: { current_quota: number | null; credit_type: string | null; credit_status: string | null; status_text: string | null; next_payment_amount: number | null; next_payment_date: $.DateValue | null; contract_number: string | null; term: number | null; overdue_quotas: string | null; id: string | null; balance: number | null; account_domiciliation: string | null; last_update: $.DateValue | null; overdue_amount: number | null; start_date: $.DateValue | null; end_date: $.DateValue | null; total_overdue_amount: number | null; extended_rent: number | null; support_email: string | null; support_phone_number: string | null; terms_and_conditions: string | null; end_contract_email: string | null; credits_portal: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleCredit, __args);  Object.freeze(this); }
}
$.classType(VehicleCredit);

/** Vehicle VIN and its nullable credit details. */
export class VehicleCreditInfo {
readonly vin: string;
readonly credit: VehicleCredit | null;
static __fields = [["vin", $.MISSING], ["credit", $.MISSING]];
constructor(vin: string, credit: VehicleCredit | null);
constructor(options: { vin: string; credit: VehicleCredit | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleCreditInfo, __args);  Object.freeze(this); }
}
$.classType(VehicleCreditInfo);

/** Required invoice UUID and file content. */
export class NCFInvoicePDF {
readonly uuid: string;
readonly file: string;
static __fields = [["uuid", $.MISSING], ["file", $.MISSING]];
constructor(uuid: string, file: string);
constructor(options: { uuid: string; file: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFInvoicePDF, __args);  Object.freeze(this); }
}
$.classType(NCFInvoicePDF);

/** Invoice date and UUID. */
export class NCFInvoiceSummary {
readonly date: $.DateValue;
readonly uuid: string;
static __fields = [["date", $.MISSING], ["uuid", $.MISSING]];
constructor(date: $.DateValue, uuid: string);
constructor(options: { date: $.DateValue; uuid: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFInvoiceSummary, __args);  Object.freeze(this); }
}
$.classType(NCFInvoiceSummary);

/** Nullable lease-only billing-statement details. */
export class NCFLeaseBillingStatementDetails {
readonly prior_balance_amount: number | null;
readonly vehicle_year: string | null;
readonly vehicle_model: string | null;
readonly vehicle_make: string | null;
static __fields = [["prior_balance_amount", $.MISSING], ["vehicle_year", $.MISSING], ["vehicle_model", $.MISSING], ["vehicle_make", $.MISSING]];
constructor(prior_balance_amount: number | null, vehicle_year: string | null, vehicle_model: string | null, vehicle_make: string | null);
constructor(options: { prior_balance_amount: number | null; vehicle_year: string | null; vehicle_model: string | null; vehicle_make: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFLeaseBillingStatementDetails, __args);  Object.freeze(this); }
}
$.classType(NCFLeaseBillingStatementDetails);

/** Common statement fields and optional lease details. */
export class NCFBillingStatement {
readonly typename: string;
readonly current_balance_amount: number | null;
readonly payment_due_date: $.DateValue | null;
readonly financial_account_id: string | null;
readonly statement_date: $.DateValue | null;
readonly total_amount_due: number | null;
readonly lease_details: NCFLeaseBillingStatementDetails | null;
static __fields = [["typename", $.MISSING], ["current_balance_amount", $.MISSING], ["payment_due_date", $.MISSING], ["financial_account_id", $.MISSING], ["statement_date", $.MISSING], ["total_amount_due", $.MISSING], ["lease_details", $.MISSING]];
constructor(typename: string, current_balance_amount: number | null, payment_due_date: $.DateValue | null, financial_account_id: string | null, statement_date: $.DateValue | null, total_amount_due: number | null, lease_details: NCFLeaseBillingStatementDetails | null);
constructor(options: { typename: string; current_balance_amount: number | null; payment_due_date: $.DateValue | null; financial_account_id: string | null; statement_date: $.DateValue | null; total_amount_due: number | null; lease_details: NCFLeaseBillingStatementDetails | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFBillingStatement, __args);  Object.freeze(this); }
}
$.classType(NCFBillingStatement);

/** Nullable lease-only transaction values. */
export class NCFLeaseTransactionDetails {
readonly payment_total_amount: number | null;
readonly payment_tax_amount: number | null;
readonly payment_description: string | null;
static __fields = [["payment_total_amount", $.MISSING], ["payment_tax_amount", $.MISSING], ["payment_description", $.MISSING]];
constructor(payment_total_amount: number | null, payment_tax_amount: number | null, payment_description: string | null);
constructor(options: { payment_total_amount: number | null; payment_tax_amount: number | null; payment_description: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFLeaseTransactionDetails, __args);  Object.freeze(this); }
}
$.classType(NCFLeaseTransactionDetails);

/** Common statement transaction fields and optional lease details. */
export class NCFStatementTransaction {
readonly typename: string;
readonly payment_amount: number | null;
readonly financial_account_id: string | null;
readonly statement_date: $.DateValue | null;
readonly sequence_number: string | null;
readonly lease_details: NCFLeaseTransactionDetails | null;
static __fields = [["typename", $.MISSING], ["payment_amount", $.MISSING], ["financial_account_id", $.MISSING], ["statement_date", $.MISSING], ["sequence_number", $.MISSING], ["lease_details", $.MISSING]];
constructor(typename: string, payment_amount: number | null, financial_account_id: string | null, statement_date: $.DateValue | null, sequence_number: string | null, lease_details: NCFLeaseTransactionDetails | null);
constructor(options: { typename: string; payment_amount: number | null; financial_account_id: string | null; statement_date: $.DateValue | null; sequence_number: string | null; lease_details: NCFLeaseTransactionDetails | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFStatementTransaction, __args);  Object.freeze(this); }
}
$.classType(NCFStatementTransaction);

/** Nullable billing statement and transaction lists. */
export class NCFAccountStatement {
readonly billing_statements: ReadonlyArray<NCFBillingStatement | null> | null;
readonly transactions: ReadonlyArray<NCFStatementTransaction | null> | null;
static __fields = [["billing_statements", $.MISSING], ["transactions", $.MISSING]];
constructor(billing_statements: ReadonlyArray<NCFBillingStatement | null> | null, transactions: ReadonlyArray<NCFStatementTransaction | null> | null);
constructor(options: { billing_statements: ReadonlyArray<NCFBillingStatement | null> | null; transactions: ReadonlyArray<NCFStatementTransaction | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFAccountStatement, __args);  Object.freeze(this); }
}
$.classType(NCFAccountStatement);

/** Account number and nullable generated statement. */
export class NCFAccountStatementAccount {
readonly account_number: string | null;
readonly statement: NCFAccountStatement | null;
static __fields = [["account_number", $.MISSING], ["statement", $.MISSING]];
constructor(account_number: string | null, statement: NCFAccountStatement | null);
constructor(options: { account_number: string | null; statement: NCFAccountStatement | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFAccountStatementAccount, __args);  Object.freeze(this); }
}
$.classType(NCFAccountStatementAccount);

export type NCFAccountStatementVehicle = NCFAccountStatementAccount | UnselectedFinanceResult;

/** Nullable payout amount, date, and lease termination amount. */
export class NCFPayoutQuote {
readonly amount: number | null;
readonly good_through_date: $.DateValue | null;
readonly early_termination_amount: number | null;
static __fields = [["amount", $.MISSING], ["good_through_date", $.MISSING], ["early_termination_amount", $.MISSING]];
constructor(amount: number | null, good_through_date: $.DateValue | null, early_termination_amount: number | null);
constructor(options: { amount: number | null; good_through_date: $.DateValue | null; early_termination_amount: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFPayoutQuote, __args);  Object.freeze(this); }
}
$.classType(NCFPayoutQuote);

/** Required finance notification switches. */
export class NCFNotificationPreferences {
readonly paperless_statement: boolean;
readonly payment_due_in_one_day: boolean;
readonly payment_received: boolean;
readonly payment_past_due: boolean;
readonly statement_available: boolean;
static __fields = [["paperless_statement", $.MISSING], ["payment_due_in_one_day", $.MISSING], ["payment_received", $.MISSING], ["payment_past_due", $.MISSING], ["statement_available", $.MISSING]];
constructor(paperless_statement: boolean, payment_due_in_one_day: boolean, payment_received: boolean, payment_past_due: boolean, statement_available: boolean);
constructor(options: { paperless_statement: boolean; payment_due_in_one_day: boolean; payment_received: boolean; payment_past_due: boolean; statement_available: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFNotificationPreferences, __args);  Object.freeze(this); }
}
$.classType(NCFNotificationPreferences);

/** Nullable loan-only payment allocation. */
export class NCFPaymentHistoryLoanDetails {
readonly principle_amount: number | null;
readonly interest_amount: number | null;
static __fields = [["principle_amount", $.MISSING], ["interest_amount", $.MISSING]];
constructor(principle_amount: number | null, interest_amount: number | null);
constructor(options: { principle_amount: number | null; interest_amount: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFPaymentHistoryLoanDetails, __args);  Object.freeze(this); }
}
$.classType(NCFPaymentHistoryLoanDetails);

/** Common payment-history fields and optional loan details. */
export class NCFPaymentHistoryEntry {
readonly typename: string;
readonly type: string | null;
readonly description: string | null;
readonly effective_date: $.DateValue | null;
readonly process_date: $.DateValue | null;
readonly total_payment_amount: number | null;
readonly miscellaneous_fees: number | null;
readonly base_rent_amount: number | null;
readonly tax_amount: number | null;
readonly late_fees: number | null;
readonly admin_fees: number | null;
readonly registration_fees: number | null;
readonly loan_details: NCFPaymentHistoryLoanDetails | null;
static __fields = [["typename", $.MISSING], ["type", $.MISSING], ["description", $.MISSING], ["effective_date", $.MISSING], ["process_date", $.MISSING], ["total_payment_amount", $.MISSING], ["miscellaneous_fees", $.MISSING], ["base_rent_amount", $.MISSING], ["tax_amount", $.MISSING], ["late_fees", $.MISSING], ["admin_fees", $.MISSING], ["registration_fees", $.MISSING], ["loan_details", $.MISSING]];
constructor(typename: string, type: string | null, description: string | null, effective_date: $.DateValue | null, process_date: $.DateValue | null, total_payment_amount: number | null, miscellaneous_fees: number | null, base_rent_amount: number | null, tax_amount: number | null, late_fees: number | null, admin_fees: number | null, registration_fees: number | null, loan_details: NCFPaymentHistoryLoanDetails | null);
constructor(options: { typename: string; type: string | null; description: string | null; effective_date: $.DateValue | null; process_date: $.DateValue | null; total_payment_amount: number | null; miscellaneous_fees: number | null; base_rent_amount: number | null; tax_amount: number | null; late_fees: number | null; admin_fees: number | null; registration_fees: number | null; loan_details: NCFPaymentHistoryLoanDetails | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFPaymentHistoryEntry, __args);  Object.freeze(this); }
}
$.classType(NCFPaymentHistoryEntry);
