// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const date = $.date;
const datetime = $.datetime;

import { AddressInput, address_input } from "./common_inputs";
export { AddressInput, address_input };

import { NCFAccountContractType, NCFCustomerType } from "./finance_models";
export { NCFAccountContractType, NCFCustomerType };

import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };

/** Required account and optional nullable NCF notification switches. */
export class NCFNotificationPreferencesInput {
readonly account_number: string;
readonly is_payment_received: boolean | UnsetType | null;
readonly is_statement_available: boolean | UnsetType | null;
readonly is_payment_past_due: boolean | UnsetType | null;
readonly is_payment_due_in_one_day: boolean | UnsetType | null;
static __fields = [["account_number", $.MISSING], ["is_payment_received", UNSET], ["is_statement_available", UNSET], ["is_payment_past_due", UNSET], ["is_payment_due_in_one_day", UNSET]];
constructor(account_number: string, is_payment_received?: boolean | UnsetType | null, is_statement_available?: boolean | UnsetType | null, is_payment_past_due?: boolean | UnsetType | null, is_payment_due_in_one_day?: boolean | UnsetType | null);
constructor(options: { account_number: string; is_payment_received?: boolean | UnsetType | null; is_statement_available?: boolean | UnsetType | null; is_payment_past_due?: boolean | UnsetType | null; is_payment_due_in_one_day?: boolean | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCFNotificationPreferencesInput, __args);  Object.freeze(this); }
}
$.classType(NCFNotificationPreferencesInput);

export function ncf_connect_account_variables(vin: string, account_number: string, customer_type?: NCFCustomerType | UnsetType | null): Record<string, unknown>;
/** Serialize NCF account-link variables. */
export function ncf_connect_account_variables(...__args: any[]): any {
let serialized_customer_type;
let {"vin": vin, "account_number": account_number, "customer_type": customer_type} = $.bind(__args, ["vin", "account_number", "customer_type"], {"customer_type": UNSET}, [], null, null);
/** Serialize NCF account-link variables. */
serialized_customer_type = ($.truth($.call($.isinstance, [customer_type, NCFCustomerType], null)) ? $.call(serialize_enum, [customer_type], null) : customer_type);
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"customerType": serialized_customer_type}, {"accountNumber": account_number}));
}

export function account_number_variables(account_number: string): Record<string, unknown>;
/** Serialize a required finance account number. */
export function account_number_variables(...__args: any[]): any {
let {"account_number": account_number} = $.bind(__args, ["account_number"], {}, [], null, null);
/** Serialize a required finance account number. */
return Object.assign({}, {["accountNumber"]: account_number});
}

export function ncf_update_account_variables(account_number: string, address?: AddressInput | UnsetType | null, phone_number?: string | UnsetType | null): Record<string, unknown>;
/** Serialize independently optional NCF profile updates. */
export function ncf_update_account_variables(...__args: any[]): any {
let serialized_address;
let {"account_number": account_number, "address": address, "phone_number": phone_number} = $.bind(__args, ["account_number", "address", "phone_number"], {"address": UNSET, "phone_number": UNSET}, [], null, null);
/** Serialize independently optional NCF profile updates. */
serialized_address = ($.truth($.call($.isinstance, [address, AddressInput], null)) ? $.call(address_input, [address], null) : address);
return $.call(optional_input_fields, [], Object.assign({}, {"accountNumber": account_number}, {"address": serialized_address}, {"phoneNumber": phone_number}));
}

export function ncf_notification_preferences_variables(config: NCFNotificationPreferencesInput): Record<string, unknown>;
/** Serialize NCF notification-preference updates. */
export function ncf_notification_preferences_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize NCF notification-preference updates. */
return Object.assign({}, {["input"]: $.call(optional_input_fields, [], Object.assign({}, {"accountNumber": $.attr(config, "account_number")}, {"isPaymentReceived": $.attr(config, "is_payment_received")}, {"isStatementAvailable": $.attr(config, "is_statement_available")}, {"isPaymentPastDue": $.attr(config, "is_payment_past_due")}, {"isPaymentDueInOneDay": $.attr(config, "is_payment_due_in_one_day")}))});
}

export function finance_document_variables(contract_number: string, document_number: string): Record<string, unknown>;
/** Serialize account-statement PDF variables. */
export function finance_document_variables(...__args: any[]): any {
let {"contract_number": contract_number, "document_number": document_number} = $.bind(__args, ["contract_number", "document_number"], {}, [], null, null);
/** Serialize account-statement PDF variables. */
return Object.assign({}, {["contractNumber"]: contract_number}, {["documentNumber"]: document_number});
}

export function contract_number_variables(contract_number: string): Record<string, unknown>;
/** Serialize a required finance contract number. */
export function contract_number_variables(...__args: any[]): any {
let {"contract_number": contract_number} = $.bind(__args, ["contract_number"], {}, [], null, null);
/** Serialize a required finance contract number. */
return Object.assign({}, {["contractNumber"]: contract_number});
}

export function invoice_pdf_variables(contract_number: string, uuid: string): Record<string, unknown>;
/** Serialize invoice PDF variables. */
export function invoice_pdf_variables(...__args: any[]): any {
let {"contract_number": contract_number, "uuid": uuid} = $.bind(__args, ["contract_number", "uuid"], {}, [], null, null);
/** Serialize invoice PDF variables. */
return Object.assign({}, {["contractNumber"]: contract_number}, {["uuid"]: uuid});
}

export function ncf_account_statement_variables(start_date: $.DateValue, end_date: $.DateValue, contract_type: NCFAccountContractType): Record<string, unknown>;
/** Serialize an NCF statement period and contract type. */
export function ncf_account_statement_variables(...__args: any[]): any {
let {"start_date": start_date, "end_date": end_date, "contract_type": contract_type} = $.bind(__args, ["start_date", "end_date", "contract_type"], {}, [], null, null);
/** Serialize an NCF statement period and contract type. */
return Object.assign({}, {["startDate"]: $.call($.attr(start_date, "isoformat"), [], null)}, {["endDate"]: $.call($.attr(end_date, "isoformat"), [], null)}, {["contractType"]: $.call(serialize_enum, [contract_type], null)});
}

export function ncf_payout_quote_variables(account_number: string, vin: string): Record<string, unknown>;
/** Serialize NCF payout-quote variables. */
export function ncf_payout_quote_variables(...__args: any[]): any {
let {"account_number": account_number, "vin": vin} = $.bind(__args, ["account_number", "vin"], {}, [], null, null);
/** Serialize NCF payout-quote variables. */
return Object.assign({}, {["accountNumber"]: account_number}, {["vin"]: vin});
}

export function payment_history_variables(account_number: string, start_date: $.DateValue, end_date: $.DateValue): Record<string, unknown>;
/** Serialize an offset-aware payment-history period. */
export function payment_history_variables(...__args: any[]): any {
let {"account_number": account_number, "start_date": start_date, "end_date": end_date} = $.bind(__args, ["account_number", "start_date", "end_date"], {}, [], null, null);
/** Serialize an offset-aware payment-history period. */
return Object.assign({}, {["accountNumber"]: account_number}, {["startDate"]: $.call(serialize_datetime, [start_date], null)}, {["endDate"]: $.call(serialize_datetime, [end_date], null)});
}
