// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _nullable_list, _required_nullable_datetime, _required_nullable_float } from "./_finance_value_parsing";
export { _nullable_list, _required_nullable_datetime, _required_nullable_float };

import { _enum, _required_field, _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _typename } from "./account_parsing";
export { _enum, _required_field, _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _typename };

import { FinancialVehicle, NCFBillingAddress, NCFCustomerType, NCFFinancialAccount, NCFFinancialContract, NCFFinancialCustomer, NCFFinancialDealer, NCFFinancialRules, NCFFinancialVehicle, NCFLeaseDetails, NCFLoanDetails, NCFUpcomingPayment, UnselectedFinancialVehicle } from "./finance_models";
export { FinancialVehicle, NCFBillingAddress, NCFCustomerType, NCFFinancialAccount, NCFFinancialContract, NCFFinancialCustomer, NCFFinancialDealer, NCFFinancialRules, NCFFinancialVehicle, NCFLeaseDetails, NCFLoanDetails, NCFUpcomingPayment, UnselectedFinancialVehicle };

export function _parse_financial_vehicle(value: Record<string, unknown>, path: string): FinancialVehicle;
/** Translated upstream _parse_financial_vehicle. */
export function _parse_financial_vehicle(...__args: any[]): any {
let account, account_path, typename, vin;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
typename = $.call(_typename, [value, path], null);
vin = $.call(_required_string, [value, "vin", ($.str(path) + ".vin")], null);
if ($.truth((!$.eq(typename, "NCFFinancialVehicle")))) {
return $.call(UnselectedFinancialVehicle, [typename, vin], null);
}
account_path = ($.str(path) + ".account");
account = $.call(_required_optional_typed_object, [value, "account", account_path], null);
return $.call(NCFFinancialVehicle, [], Object.assign({}, {"vin": vin}, {"model": $.call(_required_nullable_string, [value, "model", ($.str(path) + ".model")], null)}, {"year": $.call(_required_nullable_string, [value, "year", ($.str(path) + ".year")], null)}, {"image": $.call(_required_nullable_string, [value, "image", ($.str(path) + ".image")], null)}, {"account": $.call(_parse_financial_account, [account, account_path], null)}));
}

export function _parse_financial_account(value: Record<string, unknown> | null, path: string): NCFFinancialAccount | null;
/** Translated upstream _parse_financial_account. */
export function _parse_financial_account(...__args: any[]): any {
let contract, contract_path, customer_type, payment, payment_path, rules, rules_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
payment_path = ($.str(path) + ".upcomingPayment");
payment = $.call(_required_optional_typed_object, [value, "upcomingPayment", payment_path], null);
contract_path = ($.str(path) + ".contract");
contract = $.call(_required_optional_typed_object, [value, "contract", contract_path], null);
rules_path = ($.str(path) + ".rules");
rules = $.call(_required_optional_typed_object, [value, "rules", rules_path], null);
customer_type = $.call(_required_field, [value, "customerType", ($.str(path) + ".customerType")], null);
return $.call(NCFFinancialAccount, [], Object.assign({}, {"account_number": $.call(_required_nullable_string, [value, "accountNumber", ($.str(path) + ".accountNumber")], null)}, {"upcoming_payment": $.call(_parse_upcoming_payment, [payment, payment_path], null)}, {"customer_type": ($.truth(((customer_type === null))) ? null : $.call(_enum, [customer_type, NCFCustomerType, ($.str(path) + ".customerType")], null))}, {"contract": $.call(_parse_financial_contract, [contract, contract_path], null)}, {"rules": $.call(_parse_financial_rules, [rules, rules_path], null)}));
}

export function _parse_upcoming_payment(value: Record<string, unknown> | null, path: string): NCFUpcomingPayment | null;
/** Translated upstream _parse_upcoming_payment. */
export function _parse_upcoming_payment(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(NCFUpcomingPayment, [], Object.assign({}, {"amount_due": $.call(_required_nullable_float, [value, "upcomingPaymentDue", ($.str(path) + ".upcomingPaymentDue")], null)}, {"due_date": $.call(_required_nullable_datetime, [value, "dueDate", ($.str(path) + ".dueDate")], null)}, {"recent_payment": $.call(_required_nullable_float, [value, "recentPayment", ($.str(path) + ".recentPayment")], null)}, {"recent_payment_date": $.call(_required_nullable_datetime, [value, "recentPaymentDate", ($.str(path) + ".recentPaymentDate")], null)}, {"overdue_balance": $.call(_required_nullable_float, [value, "overdueBalance", ($.str(path) + ".overdueBalance")], null)}));
}

export function _parse_financial_contract(value: Record<string, unknown> | null, path: string): NCFFinancialContract | null;
/** Translated upstream _parse_financial_contract. */
export function _parse_financial_contract(...__args: any[]): any {
let customers, dealer, dealer_path, lease_details, loan_details, typename;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
typename = $.call(_typename, [value, path], null);
customers = $.call(_nullable_list, [value, "customers", ($.str(path) + ".customers"), _parse_financial_customer], null);
dealer_path = ($.str(path) + ".dealer");
dealer = $.call(_required_optional_typed_object, [value, "dealer", dealer_path], null);
loan_details = null;
lease_details = null;
if ($.truth(($.eq(typename, "NCFContractLoan")))) {
loan_details = $.call(NCFLoanDetails, [], Object.assign({}, {"original_balance": $.call(_required_nullable_float, [value, "originalBalance", ($.str(path) + ".originalBalance")], null)}, {"remaining_balance": $.call(_required_nullable_float, [value, "remainingBalance", ($.str(path) + ".remainingBalance")], null)}, {"apr": $.call(_required_nullable_float, [value, "apr", ($.str(path) + ".apr")], null)}, {"principle_paid_amount": $.call(_required_nullable_float, [value, "principlePaidAmount", ($.str(path) + ".principlePaidAmount")], null)}, {"interest_paid_amount": $.call(_required_nullable_float, [value, "interestPaidAmount", ($.str(path) + ".interestPaidAmount")], null)}, {"payment_progress_percentage": $.call(_required_nullable_int, [value, "paymentProgressPercentage", ($.str(path) + ".paymentProgressPercentage")], null)}));
}
if ($.truth(($.eq(typename, "NCFContractLease")))) {
lease_details = $.call(_parse_lease_details, [value, path], null);
}
return $.call(NCFFinancialContract, [], Object.assign({}, {"typename": typename}, {"maturity_date": $.call(_required_nullable_datetime, [value, "maturityDate", ($.str(path) + ".maturityDate")], null)}, {"start_date": $.call(_required_nullable_datetime, [value, "startDate", ($.str(path) + ".startDate")], null)}, {"number_of_payments_made": $.call(_required_nullable_int, [value, "numberOfPaymentsMade", ($.str(path) + ".numberOfPaymentsMade")], null)}, {"customers": customers}, {"dealer": $.call(_parse_financial_dealer, [dealer, dealer_path], null)}, {"loan_details": loan_details}, {"lease_details": lease_details}));
}

export function _parse_financial_customer(value: Record<string, unknown>, path: string): NCFFinancialCustomer;
/** Translated upstream _parse_financial_customer. */
export function _parse_financial_customer(...__args: any[]): any {
let address, address_path, buyer_type;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
address_path = ($.str(path) + ".billingAddress");
address = $.call(_required_optional_typed_object, [value, "billingAddress", address_path], null);
buyer_type = $.call(_required_field, [value, "buyerType", ($.str(path) + ".buyerType")], null);
return $.call(NCFFinancialCustomer, [], Object.assign({}, {"first_name": $.call(_required_nullable_string, [value, "firstName", ($.str(path) + ".firstName")], null)}, {"last_name": $.call(_required_nullable_string, [value, "lastName", ($.str(path) + ".lastName")], null)}, {"buyer_type": ($.truth(((buyer_type === null))) ? null : $.call(_enum, [buyer_type, NCFCustomerType, ($.str(path) + ".buyerType")], null))}, {"phone_number": $.call(_required_nullable_string, [value, "phoneNumber", ($.str(path) + ".phoneNumber")], null)}, {"billing_address": $.call(_parse_billing_address, [address, address_path], null)}));
}

export function _parse_billing_address(value: Record<string, unknown> | null, path: string): NCFBillingAddress | null;
/** Translated upstream _parse_billing_address. */
export function _parse_billing_address(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(NCFBillingAddress, [], Object.assign({}, {"address": $.call(_required_nullable_string, [value, "address", ($.str(path) + ".address")], null)}, {"city": $.call(_required_nullable_string, [value, "city", ($.str(path) + ".city")], null)}, {"zip_code": $.call(_required_nullable_string, [value, "zipCode", ($.str(path) + ".zipCode")], null)}, {"state": $.call(_required_nullable_string, [value, "state", ($.str(path) + ".state")], null)}));
}

export function _parse_financial_dealer(value: Record<string, unknown> | null, path: string): NCFFinancialDealer | null;
/** Translated upstream _parse_financial_dealer. */
export function _parse_financial_dealer(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(NCFFinancialDealer, [], Object.assign({}, {"name": $.call(_required_nullable_string, [value, "name", ($.str(path) + ".name")], null)}, {"phone_number": $.call(_required_nullable_string, [value, "phoneNumber", ($.str(path) + ".phoneNumber")], null)}));
}

export function _parse_financial_rules(value: Record<string, unknown> | null, path: string): NCFFinancialRules | null;
/** Translated upstream _parse_financial_rules. */
export function _parse_financial_rules(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(NCFFinancialRules, [], Object.assign({}, {"static_text": $.call(_required_nullable_string, [value, "staticText", ($.str(path) + ".staticText")], null)}, {"get_payoff_quote": $.call(_required_nullable_bool, [value, "getPayoffQuote", ($.str(path) + ".getPayoffQuote")], null)}, {"payment_history": $.call(_required_nullable_bool, [value, "paymentHistory", ($.str(path) + ".paymentHistory")], null)}, {"contract_details": $.call(_required_nullable_bool, [value, "contractDetails", ($.str(path) + ".contractDetails")], null)}, {"progress_bar_maturity": $.call(_required_nullable_bool, [value, "progressBarMaturity", ($.str(path) + ".progressBarMaturity")], null)}));
}

export function _parse_lease_details(value: Record<string, unknown>, path: string): NCFLeaseDetails;
/** Translated upstream _parse_lease_details. */
export function _parse_lease_details(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(NCFLeaseDetails, [], Object.assign({}, {"term": $.call(_required_nullable_float, [value, "term", ($.str(path) + ".term")], null)}, {"payments_remaining": $.call(_required_nullable_float, [value, "paymentsRemaining", ($.str(path) + ".paymentsRemaining")], null)}, {"original_mileage": $.call(_required_nullable_float, [value, "originalMileage", ($.str(path) + ".originalMileage")], null)}, {"contracted_mileage": $.call(_required_nullable_float, [value, "contractedMileage", ($.str(path) + ".contractedMileage")], null)}, {"total_mileage_allowance": $.call(_required_nullable_float, [value, "totalMileageAllowance", ($.str(path) + ".totalMileageAllowance")], null)}, {"excess_mileage_charge_amount": $.call(_required_nullable_float, [value, "excessMileageChargeAmount", ($.str(path) + ".excessMileageChargeAmount")], null)}, {"disposition_fee_amount": $.call(_required_nullable_float, [value, "dispositionFeeAmount", ($.str(path) + ".dispositionFeeAmount")], null)}, {"residual_value": $.call(_required_nullable_float, [value, "residualValue", ($.str(path) + ".residualValue")], null)}, {"adjusted_payment_amount": $.call(_required_nullable_float, [value, "adjustedPaymentAmount", ($.str(path) + ".adjustedPaymentAmount")], null)}, {"total_payment_amount": $.call(_required_nullable_float, [value, "totalPaymentAmount", ($.str(path) + ".totalPaymentAmount")], null)}, {"payment_tax_amount": $.call(_required_nullable_float, [value, "paymentTaxAmount", ($.str(path) + ".paymentTaxAmount")], null)}, {"payment_tax_rate": $.call(_required_nullable_float, [value, "paymentTaxRate", ($.str(path) + ".paymentTaxRate")], null)}, {"payment_progress_percentage": $.call(_required_nullable_int, [value, "paymentProgressPercentage", ($.str(path) + ".paymentProgressPercentage")], null)}, {"security_deposit_amount": $.call(_required_nullable_float, [value, "securityDepositAmount", ($.str(path) + ".securityDepositAmount")], null)}));
}
