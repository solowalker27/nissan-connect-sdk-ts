"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleCreditInfo = exports.VehicleCredit = exports.UnselectedFinanceResult = exports.NCFStatementTransaction = exports.NCFPaymentHistoryLoanDetails = exports.NCFPaymentHistoryEntry = exports.NCFLeaseTransactionDetails = exports.NCFLeaseBillingStatementDetails = exports.NCFInvoiceSummary = exports.NCFBillingStatement = exports.NCFAccountStatementSummary = exports.NCFAccountStatementAccount = exports.NCFAccountStatement = exports._typename = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_int = exports._required_nullable_float = exports._required_nullable_datetime = exports._required_nullable_date = exports._required_date = exports._nullable_list = void 0;
exports._parse_statement_summary = _parse_statement_summary;
exports._parse_vehicle_credit_info = _parse_vehicle_credit_info;
exports._parse_credit = _parse_credit;
exports._parse_invoice_summary = _parse_invoice_summary;
exports._parse_account_statement_vehicle = _parse_account_statement_vehicle;
exports._parse_account_statement = _parse_account_statement;
exports._parse_billing_statement = _parse_billing_statement;
exports._parse_statement_transaction = _parse_statement_transaction;
exports._parse_payment_history_entry = _parse_payment_history_entry;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _finance_value_parsing_1 = require("./_finance_value_parsing");
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _finance_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_required_date", { enumerable: true, get: function () { return _finance_value_parsing_1._required_date; } });
Object.defineProperty(exports, "_required_nullable_date", { enumerable: true, get: function () { return _finance_value_parsing_1._required_nullable_date; } });
Object.defineProperty(exports, "_required_nullable_datetime", { enumerable: true, get: function () { return _finance_value_parsing_1._required_nullable_datetime; } });
Object.defineProperty(exports, "_required_nullable_float", { enumerable: true, get: function () { return _finance_value_parsing_1._required_nullable_float; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return account_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const finance_models_1 = require("./finance_models");
Object.defineProperty(exports, "NCFAccountStatement", { enumerable: true, get: function () { return finance_models_1.NCFAccountStatement; } });
Object.defineProperty(exports, "NCFAccountStatementAccount", { enumerable: true, get: function () { return finance_models_1.NCFAccountStatementAccount; } });
Object.defineProperty(exports, "NCFAccountStatementSummary", { enumerable: true, get: function () { return finance_models_1.NCFAccountStatementSummary; } });
Object.defineProperty(exports, "NCFBillingStatement", { enumerable: true, get: function () { return finance_models_1.NCFBillingStatement; } });
Object.defineProperty(exports, "NCFInvoiceSummary", { enumerable: true, get: function () { return finance_models_1.NCFInvoiceSummary; } });
Object.defineProperty(exports, "NCFLeaseBillingStatementDetails", { enumerable: true, get: function () { return finance_models_1.NCFLeaseBillingStatementDetails; } });
Object.defineProperty(exports, "NCFLeaseTransactionDetails", { enumerable: true, get: function () { return finance_models_1.NCFLeaseTransactionDetails; } });
Object.defineProperty(exports, "NCFPaymentHistoryEntry", { enumerable: true, get: function () { return finance_models_1.NCFPaymentHistoryEntry; } });
Object.defineProperty(exports, "NCFPaymentHistoryLoanDetails", { enumerable: true, get: function () { return finance_models_1.NCFPaymentHistoryLoanDetails; } });
Object.defineProperty(exports, "NCFStatementTransaction", { enumerable: true, get: function () { return finance_models_1.NCFStatementTransaction; } });
Object.defineProperty(exports, "UnselectedFinanceResult", { enumerable: true, get: function () { return finance_models_1.UnselectedFinanceResult; } });
Object.defineProperty(exports, "VehicleCredit", { enumerable: true, get: function () { return finance_models_1.VehicleCredit; } });
Object.defineProperty(exports, "VehicleCreditInfo", { enumerable: true, get: function () { return finance_models_1.VehicleCreditInfo; } });
/** Translated upstream _parse_statement_summary. */
function _parse_statement_summary(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(finance_models_1.NCFAccountStatementSummary, [], Object.assign({}, { "date": _runtime_1.py.call(_finance_value_parsing_1._required_date, [value, "date", (_runtime_1.py.str(path) + ".date")], null) }, { "document_number": _runtime_1.py.call(account_parsing_1._required_string, [value, "documentNumber", (_runtime_1.py.str(path) + ".documentNumber")], null) }));
}
/** Translated upstream _parse_vehicle_credit_info. */
function _parse_vehicle_credit_info(...__args) {
    let credit, credit_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    credit_path = (_runtime_1.py.str(path) + ".credit");
    credit = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "credit", credit_path], null);
    return _runtime_1.py.call(finance_models_1.VehicleCreditInfo, [], Object.assign({}, { "vin": _runtime_1.py.call(account_parsing_1._required_string, [value, "vin", (_runtime_1.py.str(path) + ".vin")], null) }, { "credit": _runtime_1.py.call(_parse_credit, [credit, credit_path], null) }));
}
/** Translated upstream _parse_credit. */
function _parse_credit(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.VehicleCredit, [], Object.assign({}, { "current_quota": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "currentQuota", (_runtime_1.py.str(path) + ".currentQuota")], null) }, { "credit_type": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "creditType", (_runtime_1.py.str(path) + ".creditType")], null) }, { "credit_status": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "creditStatus", (_runtime_1.py.str(path) + ".creditStatus")], null) }, { "status_text": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "statusText", (_runtime_1.py.str(path) + ".statusText")], null) }, { "next_payment_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "nextPaymentAmount", (_runtime_1.py.str(path) + ".nextPaymentAmount")], null) }, { "next_payment_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_date, [value, "nextPaymentDate", (_runtime_1.py.str(path) + ".nextPaymentDate")], null) }, { "contract_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "contractNumber", (_runtime_1.py.str(path) + ".contractNumber")], null) }, { "term": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "term", (_runtime_1.py.str(path) + ".term")], null) }, { "overdue_quotas": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "overdueQuotas", (_runtime_1.py.str(path) + ".overdueQuotas")], null) }, { "id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "balance": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "balance", (_runtime_1.py.str(path) + ".balance")], null) }, { "account_domiciliation": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "accountDomiciliation", (_runtime_1.py.str(path) + ".accountDomiciliation")], null) }, { "last_update": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_date, [value, "lastUpdate", (_runtime_1.py.str(path) + ".lastUpdate")], null) }, { "overdue_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "overdueAmount", (_runtime_1.py.str(path) + ".overdueAmount")], null) }, { "start_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_date, [value, "startDate", (_runtime_1.py.str(path) + ".startDate")], null) }, { "end_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_date, [value, "endDate", (_runtime_1.py.str(path) + ".endDate")], null) }, { "total_overdue_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "totalOverdueAmount", (_runtime_1.py.str(path) + ".totalOverdueAmount")], null) }, { "extended_rent": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "extendedRent", (_runtime_1.py.str(path) + ".extendedRent")], null) }, { "support_email": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "supportEmail", (_runtime_1.py.str(path) + ".supportEmail")], null) }, { "support_phone_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "supportPhoneNumber", (_runtime_1.py.str(path) + ".supportPhoneNumber")], null) }, { "terms_and_conditions": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "termsAndConditions", (_runtime_1.py.str(path) + ".termsAndConditions")], null) }, { "end_contract_email": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "endContractEmail", (_runtime_1.py.str(path) + ".endContractEmail")], null) }, { "credits_portal": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "creditsPortal", (_runtime_1.py.str(path) + ".creditsPortal")], null) }));
}
/** Translated upstream _parse_invoice_summary. */
function _parse_invoice_summary(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(finance_models_1.NCFInvoiceSummary, [], Object.assign({}, { "date": _runtime_1.py.call(_finance_value_parsing_1._required_date, [value, "date", (_runtime_1.py.str(path) + ".date")], null) }, { "uuid": _runtime_1.py.call(account_parsing_1._required_string, [value, "uuid", (_runtime_1.py.str(path) + ".uuid")], null) }));
}
/** Translated upstream _parse_account_statement_vehicle. */
function _parse_account_statement_vehicle(...__args) {
    let account, account_path, statement, statement_path, typename;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    typename = _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    if (_runtime_1.py.truth((!_runtime_1.py.eq(typename, "NCFFinancialVehicle")))) {
        return _runtime_1.py.call(finance_models_1.UnselectedFinanceResult, [typename], null);
    }
    account_path = (_runtime_1.py.str(path) + ".account");
    account = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "account", account_path], null);
    if (_runtime_1.py.truth(((account === null)))) {
        return _runtime_1.py.call(finance_models_1.NCFAccountStatementAccount, [null, null], null);
    }
    statement_path = (_runtime_1.py.str(account_path) + ".statement");
    statement = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [account, "statement", statement_path], null);
    return _runtime_1.py.call(finance_models_1.NCFAccountStatementAccount, [], Object.assign({}, { "account_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [account, "accountNumber", (_runtime_1.py.str(account_path) + ".accountNumber")], null) }, { "statement": _runtime_1.py.call(_parse_account_statement, [statement, statement_path], null) }));
}
/** Translated upstream _parse_account_statement. */
function _parse_account_statement(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.NCFAccountStatement, [], Object.assign({}, { "billing_statements": _runtime_1.py.call(_finance_value_parsing_1._nullable_list, [value, "billingStatements", (_runtime_1.py.str(path) + ".billingStatements"), _parse_billing_statement], null) }, { "transactions": _runtime_1.py.call(_finance_value_parsing_1._nullable_list, [value, "transactions", (_runtime_1.py.str(path) + ".transactions"), _parse_statement_transaction], null) }));
}
/** Translated upstream _parse_billing_statement. */
function _parse_billing_statement(...__args) {
    let lease_details, typename;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    typename = _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    lease_details = null;
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFAccountBillingStatementLease")))) {
        lease_details = _runtime_1.py.call(finance_models_1.NCFLeaseBillingStatementDetails, [], Object.assign({}, { "prior_balance_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "priorBalanceAmount", (_runtime_1.py.str(path) + ".priorBalanceAmount")], null) }, { "vehicle_year": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "vehicleYear", (_runtime_1.py.str(path) + ".vehicleYear")], null) }, { "vehicle_model": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "vehicleModel", (_runtime_1.py.str(path) + ".vehicleModel")], null) }, { "vehicle_make": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "vehicleMake", (_runtime_1.py.str(path) + ".vehicleMake")], null) }));
    }
    return _runtime_1.py.call(finance_models_1.NCFBillingStatement, [], Object.assign({}, { "typename": typename }, { "current_balance_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "currentBalanceAmount", (_runtime_1.py.str(path) + ".currentBalanceAmount")], null) }, { "payment_due_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_date, [value, "paymentDueDate", (_runtime_1.py.str(path) + ".paymentDueDate")], null) }, { "financial_account_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "financialAccountId", (_runtime_1.py.str(path) + ".financialAccountId")], null) }, { "statement_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_date, [value, "statementDate", (_runtime_1.py.str(path) + ".statementDate")], null) }, { "total_amount_due": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "totalAmountDue", (_runtime_1.py.str(path) + ".totalAmountDue")], null) }, { "lease_details": lease_details }));
}
/** Translated upstream _parse_statement_transaction. */
function _parse_statement_transaction(...__args) {
    let lease_details, typename;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    typename = _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    lease_details = null;
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFAccountTransactionLease")))) {
        lease_details = _runtime_1.py.call(finance_models_1.NCFLeaseTransactionDetails, [], Object.assign({}, { "payment_total_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "paymentTotalAmount", (_runtime_1.py.str(path) + ".paymentTotalAmount")], null) }, { "payment_tax_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "paymentTaxAmount", (_runtime_1.py.str(path) + ".paymentTaxAmount")], null) }, { "payment_description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "paymentDescription", (_runtime_1.py.str(path) + ".paymentDescription")], null) }));
    }
    return _runtime_1.py.call(finance_models_1.NCFStatementTransaction, [], Object.assign({}, { "typename": typename }, { "payment_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "paymentAmount", (_runtime_1.py.str(path) + ".paymentAmount")], null) }, { "financial_account_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "financialAccountId", (_runtime_1.py.str(path) + ".financialAccountId")], null) }, { "statement_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_date, [value, "statementDate", (_runtime_1.py.str(path) + ".statementDate")], null) }, { "sequence_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "sequenceNo", (_runtime_1.py.str(path) + ".sequenceNo")], null) }, { "lease_details": lease_details }));
}
/** Translated upstream _parse_payment_history_entry. */
function _parse_payment_history_entry(...__args) {
    let loan_details, typename;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    typename = _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    loan_details = null;
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFPaymentHistoryTransactionLoan")))) {
        loan_details = _runtime_1.py.call(finance_models_1.NCFPaymentHistoryLoanDetails, [], Object.assign({}, { "principle_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "principleAmount", (_runtime_1.py.str(path) + ".principleAmount")], null) }, { "interest_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "interestAmount", (_runtime_1.py.str(path) + ".interestAmount")], null) }));
    }
    return _runtime_1.py.call(finance_models_1.NCFPaymentHistoryEntry, [], Object.assign({}, { "typename": typename }, { "type": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "type", (_runtime_1.py.str(path) + ".type")], null) }, { "description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "description", (_runtime_1.py.str(path) + ".description")], null) }, { "effective_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_datetime, [value, "effectiveDate", (_runtime_1.py.str(path) + ".effectiveDate")], null) }, { "process_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_datetime, [value, "processDate", (_runtime_1.py.str(path) + ".processDate")], null) }, { "total_payment_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "totalPaymentAmount", (_runtime_1.py.str(path) + ".totalPaymentAmount")], null) }, { "miscellaneous_fees": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "miscellaneousFees", (_runtime_1.py.str(path) + ".miscellaneousFees")], null) }, { "base_rent_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "baseRentAmount", (_runtime_1.py.str(path) + ".baseRentAmount")], null) }, { "tax_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "taxAmount", (_runtime_1.py.str(path) + ".taxAmount")], null) }, { "late_fees": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "lateFees", (_runtime_1.py.str(path) + ".lateFees")], null) }, { "admin_fees": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "adminFees", (_runtime_1.py.str(path) + ".adminFees")], null) }, { "registration_fees": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "registrationFees", (_runtime_1.py.str(path) + ".registrationFees")], null) }, { "loan_details": loan_details }));
}
//# sourceMappingURL=_finance_statement_parsing.js.map