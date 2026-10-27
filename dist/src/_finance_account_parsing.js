"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnselectedFinancialVehicle = exports.NCFUpcomingPayment = exports.NCFLoanDetails = exports.NCFLeaseDetails = exports.NCFFinancialVehicle = exports.NCFFinancialRules = exports.NCFFinancialDealer = exports.NCFFinancialCustomer = exports.NCFFinancialContract = exports.NCFFinancialAccount = exports.NCFCustomerType = exports.NCFBillingAddress = exports._typename = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_int = exports._required_nullable_bool = exports._required_field = exports._enum = exports._required_nullable_float = exports._required_nullable_datetime = exports._nullable_list = void 0;
exports._parse_financial_vehicle = _parse_financial_vehicle;
exports._parse_financial_account = _parse_financial_account;
exports._parse_upcoming_payment = _parse_upcoming_payment;
exports._parse_financial_contract = _parse_financial_contract;
exports._parse_financial_customer = _parse_financial_customer;
exports._parse_billing_address = _parse_billing_address;
exports._parse_financial_dealer = _parse_financial_dealer;
exports._parse_financial_rules = _parse_financial_rules;
exports._parse_lease_details = _parse_lease_details;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _finance_value_parsing_1 = require("./_finance_value_parsing");
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _finance_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_required_nullable_datetime", { enumerable: true, get: function () { return _finance_value_parsing_1._required_nullable_datetime; } });
Object.defineProperty(exports, "_required_nullable_float", { enumerable: true, get: function () { return _finance_value_parsing_1._required_nullable_float; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_enum", { enumerable: true, get: function () { return account_parsing_1._enum; } });
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return account_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const finance_models_1 = require("./finance_models");
Object.defineProperty(exports, "NCFBillingAddress", { enumerable: true, get: function () { return finance_models_1.NCFBillingAddress; } });
Object.defineProperty(exports, "NCFCustomerType", { enumerable: true, get: function () { return finance_models_1.NCFCustomerType; } });
Object.defineProperty(exports, "NCFFinancialAccount", { enumerable: true, get: function () { return finance_models_1.NCFFinancialAccount; } });
Object.defineProperty(exports, "NCFFinancialContract", { enumerable: true, get: function () { return finance_models_1.NCFFinancialContract; } });
Object.defineProperty(exports, "NCFFinancialCustomer", { enumerable: true, get: function () { return finance_models_1.NCFFinancialCustomer; } });
Object.defineProperty(exports, "NCFFinancialDealer", { enumerable: true, get: function () { return finance_models_1.NCFFinancialDealer; } });
Object.defineProperty(exports, "NCFFinancialRules", { enumerable: true, get: function () { return finance_models_1.NCFFinancialRules; } });
Object.defineProperty(exports, "NCFFinancialVehicle", { enumerable: true, get: function () { return finance_models_1.NCFFinancialVehicle; } });
Object.defineProperty(exports, "NCFLeaseDetails", { enumerable: true, get: function () { return finance_models_1.NCFLeaseDetails; } });
Object.defineProperty(exports, "NCFLoanDetails", { enumerable: true, get: function () { return finance_models_1.NCFLoanDetails; } });
Object.defineProperty(exports, "NCFUpcomingPayment", { enumerable: true, get: function () { return finance_models_1.NCFUpcomingPayment; } });
Object.defineProperty(exports, "UnselectedFinancialVehicle", { enumerable: true, get: function () { return finance_models_1.UnselectedFinancialVehicle; } });
/** Translated upstream _parse_financial_vehicle. */
function _parse_financial_vehicle(...__args) {
    let account, account_path, typename, vin;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    typename = _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    vin = _runtime_1.py.call(account_parsing_1._required_string, [value, "vin", (_runtime_1.py.str(path) + ".vin")], null);
    if (_runtime_1.py.truth((!_runtime_1.py.eq(typename, "NCFFinancialVehicle")))) {
        return _runtime_1.py.call(finance_models_1.UnselectedFinancialVehicle, [typename, vin], null);
    }
    account_path = (_runtime_1.py.str(path) + ".account");
    account = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "account", account_path], null);
    return _runtime_1.py.call(finance_models_1.NCFFinancialVehicle, [], Object.assign({}, { "vin": vin }, { "model": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "model", (_runtime_1.py.str(path) + ".model")], null) }, { "year": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "year", (_runtime_1.py.str(path) + ".year")], null) }, { "image": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "image", (_runtime_1.py.str(path) + ".image")], null) }, { "account": _runtime_1.py.call(_parse_financial_account, [account, account_path], null) }));
}
/** Translated upstream _parse_financial_account. */
function _parse_financial_account(...__args) {
    let contract, contract_path, customer_type, payment, payment_path, rules, rules_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    payment_path = (_runtime_1.py.str(path) + ".upcomingPayment");
    payment = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "upcomingPayment", payment_path], null);
    contract_path = (_runtime_1.py.str(path) + ".contract");
    contract = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "contract", contract_path], null);
    rules_path = (_runtime_1.py.str(path) + ".rules");
    rules = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "rules", rules_path], null);
    customer_type = _runtime_1.py.call(account_parsing_1._required_field, [value, "customerType", (_runtime_1.py.str(path) + ".customerType")], null);
    return _runtime_1.py.call(finance_models_1.NCFFinancialAccount, [], Object.assign({}, { "account_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "accountNumber", (_runtime_1.py.str(path) + ".accountNumber")], null) }, { "upcoming_payment": _runtime_1.py.call(_parse_upcoming_payment, [payment, payment_path], null) }, { "customer_type": (_runtime_1.py.truth(((customer_type === null))) ? null : _runtime_1.py.call(account_parsing_1._enum, [customer_type, finance_models_1.NCFCustomerType, (_runtime_1.py.str(path) + ".customerType")], null)) }, { "contract": _runtime_1.py.call(_parse_financial_contract, [contract, contract_path], null) }, { "rules": _runtime_1.py.call(_parse_financial_rules, [rules, rules_path], null) }));
}
/** Translated upstream _parse_upcoming_payment. */
function _parse_upcoming_payment(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.NCFUpcomingPayment, [], Object.assign({}, { "amount_due": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "upcomingPaymentDue", (_runtime_1.py.str(path) + ".upcomingPaymentDue")], null) }, { "due_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_datetime, [value, "dueDate", (_runtime_1.py.str(path) + ".dueDate")], null) }, { "recent_payment": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "recentPayment", (_runtime_1.py.str(path) + ".recentPayment")], null) }, { "recent_payment_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_datetime, [value, "recentPaymentDate", (_runtime_1.py.str(path) + ".recentPaymentDate")], null) }, { "overdue_balance": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "overdueBalance", (_runtime_1.py.str(path) + ".overdueBalance")], null) }));
}
/** Translated upstream _parse_financial_contract. */
function _parse_financial_contract(...__args) {
    let customers, dealer, dealer_path, lease_details, loan_details, typename;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    customers = _runtime_1.py.call(_finance_value_parsing_1._nullable_list, [value, "customers", (_runtime_1.py.str(path) + ".customers"), _parse_financial_customer], null);
    dealer_path = (_runtime_1.py.str(path) + ".dealer");
    dealer = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "dealer", dealer_path], null);
    loan_details = null;
    lease_details = null;
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFContractLoan")))) {
        loan_details = _runtime_1.py.call(finance_models_1.NCFLoanDetails, [], Object.assign({}, { "original_balance": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "originalBalance", (_runtime_1.py.str(path) + ".originalBalance")], null) }, { "remaining_balance": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "remainingBalance", (_runtime_1.py.str(path) + ".remainingBalance")], null) }, { "apr": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "apr", (_runtime_1.py.str(path) + ".apr")], null) }, { "principle_paid_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "principlePaidAmount", (_runtime_1.py.str(path) + ".principlePaidAmount")], null) }, { "interest_paid_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "interestPaidAmount", (_runtime_1.py.str(path) + ".interestPaidAmount")], null) }, { "payment_progress_percentage": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "paymentProgressPercentage", (_runtime_1.py.str(path) + ".paymentProgressPercentage")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFContractLease")))) {
        lease_details = _runtime_1.py.call(_parse_lease_details, [value, path], null);
    }
    return _runtime_1.py.call(finance_models_1.NCFFinancialContract, [], Object.assign({}, { "typename": typename }, { "maturity_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_datetime, [value, "maturityDate", (_runtime_1.py.str(path) + ".maturityDate")], null) }, { "start_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_datetime, [value, "startDate", (_runtime_1.py.str(path) + ".startDate")], null) }, { "number_of_payments_made": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "numberOfPaymentsMade", (_runtime_1.py.str(path) + ".numberOfPaymentsMade")], null) }, { "customers": customers }, { "dealer": _runtime_1.py.call(_parse_financial_dealer, [dealer, dealer_path], null) }, { "loan_details": loan_details }, { "lease_details": lease_details }));
}
/** Translated upstream _parse_financial_customer. */
function _parse_financial_customer(...__args) {
    let address, address_path, buyer_type;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    address_path = (_runtime_1.py.str(path) + ".billingAddress");
    address = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "billingAddress", address_path], null);
    buyer_type = _runtime_1.py.call(account_parsing_1._required_field, [value, "buyerType", (_runtime_1.py.str(path) + ".buyerType")], null);
    return _runtime_1.py.call(finance_models_1.NCFFinancialCustomer, [], Object.assign({}, { "first_name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "firstName", (_runtime_1.py.str(path) + ".firstName")], null) }, { "last_name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "lastName", (_runtime_1.py.str(path) + ".lastName")], null) }, { "buyer_type": (_runtime_1.py.truth(((buyer_type === null))) ? null : _runtime_1.py.call(account_parsing_1._enum, [buyer_type, finance_models_1.NCFCustomerType, (_runtime_1.py.str(path) + ".buyerType")], null)) }, { "phone_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "phoneNumber", (_runtime_1.py.str(path) + ".phoneNumber")], null) }, { "billing_address": _runtime_1.py.call(_parse_billing_address, [address, address_path], null) }));
}
/** Translated upstream _parse_billing_address. */
function _parse_billing_address(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.NCFBillingAddress, [], Object.assign({}, { "address": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "address", (_runtime_1.py.str(path) + ".address")], null) }, { "city": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "city", (_runtime_1.py.str(path) + ".city")], null) }, { "zip_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "zipCode", (_runtime_1.py.str(path) + ".zipCode")], null) }, { "state": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "state", (_runtime_1.py.str(path) + ".state")], null) }));
}
/** Translated upstream _parse_financial_dealer. */
function _parse_financial_dealer(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.NCFFinancialDealer, [], Object.assign({}, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "phone_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "phoneNumber", (_runtime_1.py.str(path) + ".phoneNumber")], null) }));
}
/** Translated upstream _parse_financial_rules. */
function _parse_financial_rules(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.NCFFinancialRules, [], Object.assign({}, { "static_text": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "staticText", (_runtime_1.py.str(path) + ".staticText")], null) }, { "get_payoff_quote": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "getPayoffQuote", (_runtime_1.py.str(path) + ".getPayoffQuote")], null) }, { "payment_history": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "paymentHistory", (_runtime_1.py.str(path) + ".paymentHistory")], null) }, { "contract_details": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "contractDetails", (_runtime_1.py.str(path) + ".contractDetails")], null) }, { "progress_bar_maturity": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "progressBarMaturity", (_runtime_1.py.str(path) + ".progressBarMaturity")], null) }));
}
/** Translated upstream _parse_lease_details. */
function _parse_lease_details(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(finance_models_1.NCFLeaseDetails, [], Object.assign({}, { "term": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "term", (_runtime_1.py.str(path) + ".term")], null) }, { "payments_remaining": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "paymentsRemaining", (_runtime_1.py.str(path) + ".paymentsRemaining")], null) }, { "original_mileage": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "originalMileage", (_runtime_1.py.str(path) + ".originalMileage")], null) }, { "contracted_mileage": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "contractedMileage", (_runtime_1.py.str(path) + ".contractedMileage")], null) }, { "total_mileage_allowance": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "totalMileageAllowance", (_runtime_1.py.str(path) + ".totalMileageAllowance")], null) }, { "excess_mileage_charge_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "excessMileageChargeAmount", (_runtime_1.py.str(path) + ".excessMileageChargeAmount")], null) }, { "disposition_fee_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "dispositionFeeAmount", (_runtime_1.py.str(path) + ".dispositionFeeAmount")], null) }, { "residual_value": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "residualValue", (_runtime_1.py.str(path) + ".residualValue")], null) }, { "adjusted_payment_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "adjustedPaymentAmount", (_runtime_1.py.str(path) + ".adjustedPaymentAmount")], null) }, { "total_payment_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "totalPaymentAmount", (_runtime_1.py.str(path) + ".totalPaymentAmount")], null) }, { "payment_tax_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "paymentTaxAmount", (_runtime_1.py.str(path) + ".paymentTaxAmount")], null) }, { "payment_tax_rate": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "paymentTaxRate", (_runtime_1.py.str(path) + ".paymentTaxRate")], null) }, { "payment_progress_percentage": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "paymentProgressPercentage", (_runtime_1.py.str(path) + ".paymentProgressPercentage")], null) }, { "security_deposit_amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [value, "securityDepositAmount", (_runtime_1.py.str(path) + ".securityDepositAmount")], null) }));
}
//# sourceMappingURL=_finance_account_parsing.js.map