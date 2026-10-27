"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCFPaymentHistoryEntry = exports.NCFPaymentHistoryLoanDetails = exports.NCFNotificationPreferences = exports.NCFPayoutQuote = exports.NCFAccountStatementAccount = exports.NCFAccountStatement = exports.NCFStatementTransaction = exports.NCFLeaseTransactionDetails = exports.NCFBillingStatement = exports.NCFLeaseBillingStatementDetails = exports.NCFInvoiceSummary = exports.NCFInvoicePDF = exports.VehicleCreditInfo = exports.VehicleCredit = exports.NCFAccountStatementSummary = exports.NCFAccountStatementPDF = exports.UnselectedFinancialVehicle = exports.NCFFinancialVehicle = exports.NCFFinancialAccount = exports.NCFFinancialRules = exports.NCFFinancialContract = exports.NCFLeaseDetails = exports.NCFLoanDetails = exports.NCFFinancialDealer = exports.NCFFinancialCustomer = exports.NCFBillingAddress = exports.NCFUpcomingPayment = exports.NCFUpdateNotificationPreferencesError = exports.NCFUpdateNotificationPreferencesSuccess = exports.NCFUpdateAccountResult = exports.NCFDisconnectAccountFailure = exports.NCFDisconnectAccountSuccess = exports.NCFConnectAccountPrimaryAlreadyRegistered = exports.NCFConnectAccountInternalError = exports.NCFConnectAccountInvalidCombination = exports.NCFConnectAccountCoSignerAlreadyRegistered = exports.NCFFinanceMessageResult = exports.NCFConnectAccountSuccess = exports.UnselectedFinanceResult = exports.NCFAccountContractType = exports.NCFCustomerType = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const date = _runtime_1.py.date;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
exports.NCFCustomerType = _runtime_1.py.enumType("NCFCustomerType", { "PRIMARY": "PRIMARY", "CO_SIGNER": "CO_SIGNER", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.NCFAccountContractType = _runtime_1.py.enumType("NCFAccountContractType", { "RETAIL": "RETAIL", "LEASE": "LEASE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Future finance union branch selected only by type name. */
class UnselectedFinanceResult {
    typename;
    static __fields = [["typename", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnselectedFinanceResult, __args); Object.freeze(this); }
}
exports.UnselectedFinanceResult = UnselectedFinanceResult;
_runtime_1.py.classType(UnselectedFinanceResult);
/** Nullable status returned after linking an NCF account. */
class NCFConnectAccountSuccess {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFConnectAccountSuccess, __args); Object.freeze(this); }
}
exports.NCFConnectAccountSuccess = NCFConnectAccountSuccess;
_runtime_1.py.classType(NCFConnectAccountSuccess);
/** Base for finance union branches with nullable messages. */
class NCFFinanceMessageResult {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFFinanceMessageResult, __args); Object.freeze(this); }
}
exports.NCFFinanceMessageResult = NCFFinanceMessageResult;
_runtime_1.py.classType(NCFFinanceMessageResult);
/** The co-signer is already registered. */
class NCFConnectAccountCoSignerAlreadyRegistered extends _runtime_1.py.mix(NCFFinanceMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFConnectAccountCoSignerAlreadyRegistered, __args); Object.freeze(this); }
}
exports.NCFConnectAccountCoSignerAlreadyRegistered = NCFConnectAccountCoSignerAlreadyRegistered;
_runtime_1.py.classType(NCFConnectAccountCoSignerAlreadyRegistered);
/** VIN and account number do not form a valid combination. */
class NCFConnectAccountInvalidCombination extends _runtime_1.py.mix(NCFFinanceMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFConnectAccountInvalidCombination, __args); Object.freeze(this); }
}
exports.NCFConnectAccountInvalidCombination = NCFConnectAccountInvalidCombination;
_runtime_1.py.classType(NCFConnectAccountInvalidCombination);
/** Internal account-link failure. */
class NCFConnectAccountInternalError extends _runtime_1.py.mix(NCFFinanceMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFConnectAccountInternalError, __args); Object.freeze(this); }
}
exports.NCFConnectAccountInternalError = NCFConnectAccountInternalError;
_runtime_1.py.classType(NCFConnectAccountInternalError);
/** The primary borrower is already registered. */
class NCFConnectAccountPrimaryAlreadyRegistered extends _runtime_1.py.mix(NCFFinanceMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFConnectAccountPrimaryAlreadyRegistered, __args); Object.freeze(this); }
}
exports.NCFConnectAccountPrimaryAlreadyRegistered = NCFConnectAccountPrimaryAlreadyRegistered;
_runtime_1.py.classType(NCFConnectAccountPrimaryAlreadyRegistered);
/** Successful NCF account disconnection. */
class NCFDisconnectAccountSuccess extends _runtime_1.py.mix(NCFFinanceMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFDisconnectAccountSuccess, __args); Object.freeze(this); }
}
exports.NCFDisconnectAccountSuccess = NCFDisconnectAccountSuccess;
_runtime_1.py.classType(NCFDisconnectAccountSuccess);
/** Failed NCF account disconnection. */
class NCFDisconnectAccountFailure extends _runtime_1.py.mix(NCFFinanceMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFDisconnectAccountFailure, __args); Object.freeze(this); }
}
exports.NCFDisconnectAccountFailure = NCFDisconnectAccountFailure;
_runtime_1.py.classType(NCFDisconnectAccountFailure);
/** Nullable status returned after updating an NCF account. */
class NCFUpdateAccountResult {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFUpdateAccountResult, __args); Object.freeze(this); }
}
exports.NCFUpdateAccountResult = NCFUpdateAccountResult;
_runtime_1.py.classType(NCFUpdateAccountResult);
/** Successful NCF notification-preference update. */
class NCFUpdateNotificationPreferencesSuccess {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFUpdateNotificationPreferencesSuccess, __args); Object.freeze(this); }
}
exports.NCFUpdateNotificationPreferencesSuccess = NCFUpdateNotificationPreferencesSuccess;
_runtime_1.py.classType(NCFUpdateNotificationPreferencesSuccess);
/** Failed NCF notification-preference update. */
class NCFUpdateNotificationPreferencesError extends _runtime_1.py.mix(NCFFinanceMessageResult) {
    static __fields = [];
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFUpdateNotificationPreferencesError, __args); Object.freeze(this); }
}
exports.NCFUpdateNotificationPreferencesError = NCFUpdateNotificationPreferencesError;
_runtime_1.py.classType(NCFUpdateNotificationPreferencesError);
/** Nullable upcoming, recent, and overdue payment amounts. */
class NCFUpcomingPayment {
    amount_due;
    due_date;
    recent_payment;
    recent_payment_date;
    overdue_balance;
    static __fields = [["amount_due", _runtime_1.py.MISSING], ["due_date", _runtime_1.py.MISSING], ["recent_payment", _runtime_1.py.MISSING], ["recent_payment_date", _runtime_1.py.MISSING], ["overdue_balance", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFUpcomingPayment, __args); Object.freeze(this); }
}
exports.NCFUpcomingPayment = NCFUpcomingPayment;
_runtime_1.py.classType(NCFUpcomingPayment);
/** Nullable billing-address fields for an NCF customer. */
class NCFBillingAddress {
    address;
    city;
    zip_code;
    state;
    static __fields = [["address", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["zip_code", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFBillingAddress, __args); Object.freeze(this); }
}
exports.NCFBillingAddress = NCFBillingAddress;
_runtime_1.py.classType(NCFBillingAddress);
/** Nullable customer fields attached to a finance contract. */
class NCFFinancialCustomer {
    first_name;
    last_name;
    buyer_type;
    phone_number;
    billing_address;
    static __fields = [["first_name", _runtime_1.py.MISSING], ["last_name", _runtime_1.py.MISSING], ["buyer_type", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["billing_address", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFFinancialCustomer, __args); Object.freeze(this); }
}
exports.NCFFinancialCustomer = NCFFinancialCustomer;
_runtime_1.py.classType(NCFFinancialCustomer);
/** Nullable originating dealer details. */
class NCFFinancialDealer {
    name;
    phone_number;
    static __fields = [["name", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFFinancialDealer, __args); Object.freeze(this); }
}
exports.NCFFinancialDealer = NCFFinancialDealer;
_runtime_1.py.classType(NCFFinancialDealer);
/** Nullable values selected for a retail loan contract. */
class NCFLoanDetails {
    original_balance;
    remaining_balance;
    apr;
    principle_paid_amount;
    interest_paid_amount;
    payment_progress_percentage;
    static __fields = [["original_balance", _runtime_1.py.MISSING], ["remaining_balance", _runtime_1.py.MISSING], ["apr", _runtime_1.py.MISSING], ["principle_paid_amount", _runtime_1.py.MISSING], ["interest_paid_amount", _runtime_1.py.MISSING], ["payment_progress_percentage", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFLoanDetails, __args); Object.freeze(this); }
}
exports.NCFLoanDetails = NCFLoanDetails;
_runtime_1.py.classType(NCFLoanDetails);
/** Nullable values selected for a lease contract. */
class NCFLeaseDetails {
    term;
    payments_remaining;
    original_mileage;
    contracted_mileage;
    total_mileage_allowance;
    excess_mileage_charge_amount;
    disposition_fee_amount;
    residual_value;
    adjusted_payment_amount;
    total_payment_amount;
    payment_tax_amount;
    payment_tax_rate;
    payment_progress_percentage;
    security_deposit_amount;
    static __fields = [["term", _runtime_1.py.MISSING], ["payments_remaining", _runtime_1.py.MISSING], ["original_mileage", _runtime_1.py.MISSING], ["contracted_mileage", _runtime_1.py.MISSING], ["total_mileage_allowance", _runtime_1.py.MISSING], ["excess_mileage_charge_amount", _runtime_1.py.MISSING], ["disposition_fee_amount", _runtime_1.py.MISSING], ["residual_value", _runtime_1.py.MISSING], ["adjusted_payment_amount", _runtime_1.py.MISSING], ["total_payment_amount", _runtime_1.py.MISSING], ["payment_tax_amount", _runtime_1.py.MISSING], ["payment_tax_rate", _runtime_1.py.MISSING], ["payment_progress_percentage", _runtime_1.py.MISSING], ["security_deposit_amount", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFLeaseDetails, __args); Object.freeze(this); }
}
exports.NCFLeaseDetails = NCFLeaseDetails;
_runtime_1.py.classType(NCFLeaseDetails);
/** Common contract fields and type-specific loan or lease values. */
class NCFFinancialContract {
    typename;
    maturity_date;
    start_date;
    number_of_payments_made;
    customers;
    dealer;
    loan_details;
    lease_details;
    static __fields = [["typename", _runtime_1.py.MISSING], ["maturity_date", _runtime_1.py.MISSING], ["start_date", _runtime_1.py.MISSING], ["number_of_payments_made", _runtime_1.py.MISSING], ["customers", _runtime_1.py.MISSING], ["dealer", _runtime_1.py.MISSING], ["loan_details", _runtime_1.py.MISSING], ["lease_details", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFFinancialContract, __args); Object.freeze(this); }
}
exports.NCFFinancialContract = NCFFinancialContract;
_runtime_1.py.classType(NCFFinancialContract);
/** Nullable presentation and feature rules for a finance account. */
class NCFFinancialRules {
    static_text;
    get_payoff_quote;
    payment_history;
    contract_details;
    progress_bar_maturity;
    static __fields = [["static_text", _runtime_1.py.MISSING], ["get_payoff_quote", _runtime_1.py.MISSING], ["payment_history", _runtime_1.py.MISSING], ["contract_details", _runtime_1.py.MISSING], ["progress_bar_maturity", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFFinancialRules, __args); Object.freeze(this); }
}
exports.NCFFinancialRules = NCFFinancialRules;
_runtime_1.py.classType(NCFFinancialRules);
/** Finance account, payment, contract, and rule details. */
class NCFFinancialAccount {
    account_number;
    upcoming_payment;
    customer_type;
    contract;
    rules;
    static __fields = [["account_number", _runtime_1.py.MISSING], ["upcoming_payment", _runtime_1.py.MISSING], ["customer_type", _runtime_1.py.MISSING], ["contract", _runtime_1.py.MISSING], ["rules", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFFinancialAccount, __args); Object.freeze(this); }
}
exports.NCFFinancialAccount = NCFFinancialAccount;
_runtime_1.py.classType(NCFFinancialAccount);
/** Vehicle data linked to an NCF account. */
class NCFFinancialVehicle {
    vin;
    model;
    year;
    image;
    account;
    static __fields = [["vin", _runtime_1.py.MISSING], ["model", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING], ["image", _runtime_1.py.MISSING], ["account", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFFinancialVehicle, __args); Object.freeze(this); }
}
exports.NCFFinancialVehicle = NCFFinancialVehicle;
_runtime_1.py.classType(NCFFinancialVehicle);
/** Future financial-vehicle type with its universally selected VIN. */
class UnselectedFinancialVehicle {
    typename;
    vin;
    static __fields = [["typename", _runtime_1.py.MISSING], ["vin", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnselectedFinancialVehicle, __args); Object.freeze(this); }
}
exports.UnselectedFinancialVehicle = UnselectedFinancialVehicle;
_runtime_1.py.classType(UnselectedFinancialVehicle);
/** Required account-statement document and URL. */
class NCFAccountStatementPDF {
    document;
    document_url;
    static __fields = [["document", _runtime_1.py.MISSING], ["document_url", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFAccountStatementPDF, __args); Object.freeze(this); }
}
exports.NCFAccountStatementPDF = NCFAccountStatementPDF;
_runtime_1.py.classType(NCFAccountStatementPDF);
/** Account-statement date and document number. */
class NCFAccountStatementSummary {
    date;
    document_number;
    static __fields = [["date", _runtime_1.py.MISSING], ["document_number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFAccountStatementSummary, __args); Object.freeze(this); }
}
exports.NCFAccountStatementSummary = NCFAccountStatementSummary;
_runtime_1.py.classType(NCFAccountStatementSummary);
/** Nullable credit fields attached to a vehicle. */
class VehicleCredit {
    current_quota;
    credit_type;
    credit_status;
    status_text;
    next_payment_amount;
    next_payment_date;
    contract_number;
    term;
    overdue_quotas;
    id;
    balance;
    account_domiciliation;
    last_update;
    overdue_amount;
    start_date;
    end_date;
    total_overdue_amount;
    extended_rent;
    support_email;
    support_phone_number;
    terms_and_conditions;
    end_contract_email;
    credits_portal;
    static __fields = [["current_quota", _runtime_1.py.MISSING], ["credit_type", _runtime_1.py.MISSING], ["credit_status", _runtime_1.py.MISSING], ["status_text", _runtime_1.py.MISSING], ["next_payment_amount", _runtime_1.py.MISSING], ["next_payment_date", _runtime_1.py.MISSING], ["contract_number", _runtime_1.py.MISSING], ["term", _runtime_1.py.MISSING], ["overdue_quotas", _runtime_1.py.MISSING], ["id", _runtime_1.py.MISSING], ["balance", _runtime_1.py.MISSING], ["account_domiciliation", _runtime_1.py.MISSING], ["last_update", _runtime_1.py.MISSING], ["overdue_amount", _runtime_1.py.MISSING], ["start_date", _runtime_1.py.MISSING], ["end_date", _runtime_1.py.MISSING], ["total_overdue_amount", _runtime_1.py.MISSING], ["extended_rent", _runtime_1.py.MISSING], ["support_email", _runtime_1.py.MISSING], ["support_phone_number", _runtime_1.py.MISSING], ["terms_and_conditions", _runtime_1.py.MISSING], ["end_contract_email", _runtime_1.py.MISSING], ["credits_portal", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleCredit, __args); Object.freeze(this); }
}
exports.VehicleCredit = VehicleCredit;
_runtime_1.py.classType(VehicleCredit);
/** Vehicle VIN and its nullable credit details. */
class VehicleCreditInfo {
    vin;
    credit;
    static __fields = [["vin", _runtime_1.py.MISSING], ["credit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleCreditInfo, __args); Object.freeze(this); }
}
exports.VehicleCreditInfo = VehicleCreditInfo;
_runtime_1.py.classType(VehicleCreditInfo);
/** Required invoice UUID and file content. */
class NCFInvoicePDF {
    uuid;
    file;
    static __fields = [["uuid", _runtime_1.py.MISSING], ["file", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFInvoicePDF, __args); Object.freeze(this); }
}
exports.NCFInvoicePDF = NCFInvoicePDF;
_runtime_1.py.classType(NCFInvoicePDF);
/** Invoice date and UUID. */
class NCFInvoiceSummary {
    date;
    uuid;
    static __fields = [["date", _runtime_1.py.MISSING], ["uuid", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFInvoiceSummary, __args); Object.freeze(this); }
}
exports.NCFInvoiceSummary = NCFInvoiceSummary;
_runtime_1.py.classType(NCFInvoiceSummary);
/** Nullable lease-only billing-statement details. */
class NCFLeaseBillingStatementDetails {
    prior_balance_amount;
    vehicle_year;
    vehicle_model;
    vehicle_make;
    static __fields = [["prior_balance_amount", _runtime_1.py.MISSING], ["vehicle_year", _runtime_1.py.MISSING], ["vehicle_model", _runtime_1.py.MISSING], ["vehicle_make", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFLeaseBillingStatementDetails, __args); Object.freeze(this); }
}
exports.NCFLeaseBillingStatementDetails = NCFLeaseBillingStatementDetails;
_runtime_1.py.classType(NCFLeaseBillingStatementDetails);
/** Common statement fields and optional lease details. */
class NCFBillingStatement {
    typename;
    current_balance_amount;
    payment_due_date;
    financial_account_id;
    statement_date;
    total_amount_due;
    lease_details;
    static __fields = [["typename", _runtime_1.py.MISSING], ["current_balance_amount", _runtime_1.py.MISSING], ["payment_due_date", _runtime_1.py.MISSING], ["financial_account_id", _runtime_1.py.MISSING], ["statement_date", _runtime_1.py.MISSING], ["total_amount_due", _runtime_1.py.MISSING], ["lease_details", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFBillingStatement, __args); Object.freeze(this); }
}
exports.NCFBillingStatement = NCFBillingStatement;
_runtime_1.py.classType(NCFBillingStatement);
/** Nullable lease-only transaction values. */
class NCFLeaseTransactionDetails {
    payment_total_amount;
    payment_tax_amount;
    payment_description;
    static __fields = [["payment_total_amount", _runtime_1.py.MISSING], ["payment_tax_amount", _runtime_1.py.MISSING], ["payment_description", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFLeaseTransactionDetails, __args); Object.freeze(this); }
}
exports.NCFLeaseTransactionDetails = NCFLeaseTransactionDetails;
_runtime_1.py.classType(NCFLeaseTransactionDetails);
/** Common statement transaction fields and optional lease details. */
class NCFStatementTransaction {
    typename;
    payment_amount;
    financial_account_id;
    statement_date;
    sequence_number;
    lease_details;
    static __fields = [["typename", _runtime_1.py.MISSING], ["payment_amount", _runtime_1.py.MISSING], ["financial_account_id", _runtime_1.py.MISSING], ["statement_date", _runtime_1.py.MISSING], ["sequence_number", _runtime_1.py.MISSING], ["lease_details", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFStatementTransaction, __args); Object.freeze(this); }
}
exports.NCFStatementTransaction = NCFStatementTransaction;
_runtime_1.py.classType(NCFStatementTransaction);
/** Nullable billing statement and transaction lists. */
class NCFAccountStatement {
    billing_statements;
    transactions;
    static __fields = [["billing_statements", _runtime_1.py.MISSING], ["transactions", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFAccountStatement, __args); Object.freeze(this); }
}
exports.NCFAccountStatement = NCFAccountStatement;
_runtime_1.py.classType(NCFAccountStatement);
/** Account number and nullable generated statement. */
class NCFAccountStatementAccount {
    account_number;
    statement;
    static __fields = [["account_number", _runtime_1.py.MISSING], ["statement", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFAccountStatementAccount, __args); Object.freeze(this); }
}
exports.NCFAccountStatementAccount = NCFAccountStatementAccount;
_runtime_1.py.classType(NCFAccountStatementAccount);
/** Nullable payout amount, date, and lease termination amount. */
class NCFPayoutQuote {
    amount;
    good_through_date;
    early_termination_amount;
    static __fields = [["amount", _runtime_1.py.MISSING], ["good_through_date", _runtime_1.py.MISSING], ["early_termination_amount", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFPayoutQuote, __args); Object.freeze(this); }
}
exports.NCFPayoutQuote = NCFPayoutQuote;
_runtime_1.py.classType(NCFPayoutQuote);
/** Required finance notification switches. */
class NCFNotificationPreferences {
    paperless_statement;
    payment_due_in_one_day;
    payment_received;
    payment_past_due;
    statement_available;
    static __fields = [["paperless_statement", _runtime_1.py.MISSING], ["payment_due_in_one_day", _runtime_1.py.MISSING], ["payment_received", _runtime_1.py.MISSING], ["payment_past_due", _runtime_1.py.MISSING], ["statement_available", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFNotificationPreferences, __args); Object.freeze(this); }
}
exports.NCFNotificationPreferences = NCFNotificationPreferences;
_runtime_1.py.classType(NCFNotificationPreferences);
/** Nullable loan-only payment allocation. */
class NCFPaymentHistoryLoanDetails {
    principle_amount;
    interest_amount;
    static __fields = [["principle_amount", _runtime_1.py.MISSING], ["interest_amount", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFPaymentHistoryLoanDetails, __args); Object.freeze(this); }
}
exports.NCFPaymentHistoryLoanDetails = NCFPaymentHistoryLoanDetails;
_runtime_1.py.classType(NCFPaymentHistoryLoanDetails);
/** Common payment-history fields and optional loan details. */
class NCFPaymentHistoryEntry {
    typename;
    type;
    description;
    effective_date;
    process_date;
    total_payment_amount;
    miscellaneous_fees;
    base_rent_amount;
    tax_amount;
    late_fees;
    admin_fees;
    registration_fees;
    loan_details;
    static __fields = [["typename", _runtime_1.py.MISSING], ["type", _runtime_1.py.MISSING], ["description", _runtime_1.py.MISSING], ["effective_date", _runtime_1.py.MISSING], ["process_date", _runtime_1.py.MISSING], ["total_payment_amount", _runtime_1.py.MISSING], ["miscellaneous_fees", _runtime_1.py.MISSING], ["base_rent_amount", _runtime_1.py.MISSING], ["tax_amount", _runtime_1.py.MISSING], ["late_fees", _runtime_1.py.MISSING], ["admin_fees", _runtime_1.py.MISSING], ["registration_fees", _runtime_1.py.MISSING], ["loan_details", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFPaymentHistoryEntry, __args); Object.freeze(this); }
}
exports.NCFPaymentHistoryEntry = NCFPaymentHistoryEntry;
_runtime_1.py.classType(NCFPaymentHistoryEntry);
//# sourceMappingURL=finance_models.js.map