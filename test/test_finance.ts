// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const hashlib = $.hashlib;

const Awaitable = $.Awaitable;
const Mapping = $.Mapping;

const UTC = $.UTC;
const date = $.date;
const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { AddressInput, NCFAccountContractType, NCFConnectAccountSuccess, NCFCustomerType, NCFDisconnectAccountFailure, NCFNotificationPreferences, NCFNotificationPreferencesInput, NCFPaymentHistoryEntry, NCFPaymentHistoryLoanDetails, NCFPayoutQuote, NissanClient, ReadOnlyError, Tokens, UnselectedFinanceResult, UnselectedFinancialVehicle, VehicleCreditInfo, operations } from "../src/index";

import { account_number_variables, finance_document_variables, invoice_pdf_variables, ncf_account_statement_variables, ncf_connect_account_variables, ncf_notification_preferences_variables, ncf_payout_quote_variables, ncf_update_account_variables, payment_history_variables } from "../src/finance_inputs";

import { parse_financial_vehicles, parse_ncf_account_statement, parse_ncf_connect_account, parse_ncf_disconnect_account, parse_ncf_payout_quote, parse_ncf_preferences, parse_ncf_update_notification_preferences, parse_payment_history, parse_vehicle_credit } from "../src/finance_parsing";

export let EXPECTED_OPERATIONS = Object.assign({}, {["NCF_CONNECT_ACCOUNT"]: "eb64b6703fe148c55e26a59b0dc29e2d28e67267a3f064cb48a59064a77b896c"}, {["NCF_DISCONNECT_ACCOUNT"]: "c0e92d64f6cc319f2c804299427bcbf2de2a094f82dd022d515e8bb0d96332d0"}, {["NCF_UPDATE_ACCOUNT"]: "512e60cf7ad47cd898ced786aef9ab42fe1023fa8a8f09fae4f07b0a91eef316"}, {["NCF_UPDATE_NOTIFICATION_PREFERENCES"]: "8ff2643cb091a5b5dfddd33452c8d2d124783dfc6f5955d453cbf1b66ec0e417"}, {["FINANCIAL_VEHICLES"]: "0c26aa2fb725bcc6da1c91b0dfe3eee90657faaca9419810dafca51466b2e68b"}, {["GET_ACCOUNT_STATEMENT_PDF"]: "d0d9a460125763f1a1852344d1c30980d1c8c58b7032a30cfe4926bbd9c3f75a"}, {["GET_ACCOUNT_STATEMENTS"]: "e6f8bbd7df344e1429f53bc161765b7f69f0da026ddf15ea0d4b6ce65a1d8a7d"}, {["GET_CREDIT"]: "94266501084837bf2d4ef0dca3326b9f2147b9a88902b5e7218e284d19b014c8"}, {["GET_INVOICE_PDF"]: "0f581c8c6fc0e1f6b5ed701196184afff1b5bb161d89d7a1ffbfe301fbb3824d"}, {["GET_INVOICES"]: "e4b0e0348ae8cd5963e937d776663a762b14a449293976bda828735374cd840b"}, {["NCF_ACCOUNT_STATEMENT"]: "2a82edfc8dbacadf95e6c82b52ce0180b67f5e9baacbf5ef392ebdac36e285b8"}, {["NCF_PAYOUT_QUOTE"]: "6bf94c15258881030f6ec40d2054288401edf79f617d945e7b27bf8e552ab3e9"}, {["NCF_PREFERENCES"]: "4484a489220beb655e170a914b0a35ca8255f164809e8e15f3b29a298a5eebe1"}, {["NCF_TERMS_AND_CONDITIONS"]: "f16189ddf5a2c23f7ee3766aa043656a33a302bffe6657759ecc8d8b9b4116a8"}, {["PAYMENT_HISTORY"]: "e269c3294ba09c2c42850aeb06a57ed0681b1f97d492a1424f360b636319bb07"});

/** Translated upstream FakeResponse. */
export class FakeResponse {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeResponse, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"field": field, "value": value} = $.bind(__args, ["field", "value"], {}, [], null, null);
this["status"] = 200;
this["_payload"] = Object.assign({}, {["data"]: Object.assign({}, {[field]: value})});
}
/** Translated upstream __aenter__. */
async __aenter__(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return this;
}
/** Translated upstream __aexit__. */
async __aexit__(...__args: any[]): any {
let {"args": args} = $.bind(__args, [], {}, [], "args", null);
return null;
}
/** Translated upstream json. */
async json(...__args: any[]): any {
let {"content_type": content_type} = $.bind(__args, [], {"content_type": null}, ["content_type"], null, null);
return $.attr(this, "_payload");
}
}
$.classType(FakeResponse);

/** Translated upstream FakeSession. */
export class FakeSession {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeSession, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"responses": responses} = $.bind(__args, [], {}, [], "responses", null);
this["responses"] = $.call($.list, [responses], null);
this["calls"] = [];
}
/** Translated upstream post. */
post(...__args: any[]): any {
let {"url": url, "kwargs": kwargs} = $.bind(__args, ["url"], {}, [], null, "kwargs");
$.call($.attr($.attr(this, "calls"), "append"), [Object.assign({}, {["url"]: url}, kwargs)], null);
if ($.truth(!$.truth($.attr(this, "responses")))) {
throw $.call($.AssertionError, ["Unexpected HTTP request"], null);
}
return $.call($.attr($.attr(this, "responses"), "pop"), [0], null);
}
}
$.classType(FakeSession);

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token", "id-token"], null)}, {"read_only": read_only}));
}

/** Translated upstream test_finance_operations_match_service_documents. */
export function test_finance_operations_match_service_documents(...__args: any[]): any {
let constant, document, expected_id, operation_id;
let {} = $.bind(__args, [], {}, [], null, null);
for ([constant, expected_id] of $.iterable($.call($.attr(EXPECTED_OPERATIONS, "items"), [], null))) {
document = $.call($.getattr, [operations, constant], null);
operation_id = $.call($.getattr, [operations, ($.str(constant) + "_OPERATION_ID")], null);
$.assertEqual(operation_id, expected_id, "test_finance.py:117: operation_id == expected_id");
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), expected_id, "test_finance.py:118: hashlib.sha256(document.encode()).hexdigest() == expected_id");
}
}

/** Translated upstream test_finance_inputs_preserve_omitted_and_explicit_null_fields. */
export function test_finance_inputs_preserve_omitted_and_explicit_null_fields(...__args: any[]): any {
let end, preferences, start;
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(ncf_connect_account_variables, ["VIN", "ACCOUNT"], null), Object.assign({}, {["vin"]: "VIN"}, {["accountNumber"]: "ACCOUNT"}), "test_finance.py:122: ncf_connect_account_variables('VIN', 'ACCOUNT') == {'vin': 'VIN', 'accountNumber': 'ACCOUNT'}");
$.assertEqual($.call(ncf_connect_account_variables, ["VIN", "ACCOUNT", $.attr(NCFCustomerType, "CO_SIGNER")], null), Object.assign({}, {["vin"]: "VIN"}, {["customerType"]: "CO_SIGNER"}, {["accountNumber"]: "ACCOUNT"}), "test_finance.py:126: ncf_connect_account_variables('VIN', 'ACCOUNT', NCFCustomerType.CO_SIGNER) == {'vin': 'VIN', 'customerType': 'CO_SIGNER', 'accountNumber': 'ACCOUNT'}");
$.assertEqual($.call(ncf_update_account_variables, ["ACCOUNT", $.call(AddressInput, [], Object.assign({}, {"city": "Franklin"}, {"state": null})), null], null), Object.assign({}, {["accountNumber"]: "ACCOUNT"}, {["address"]: Object.assign({}, {["city"]: "Franklin"}, {["state"]: null})}, {["phoneNumber"]: null}), "test_finance.py:131: ncf_update_account_variables('ACCOUNT', AddressInput(city='Franklin', state=None), None) == {'accountNumber': 'ACCOUNT', 'address': {'city': 'Franklin', 'state': None}, 'phoneNumber': None}");
preferences = $.call(NCFNotificationPreferencesInput, ["ACCOUNT"], Object.assign({}, {"is_payment_received": true}, {"is_statement_available": null}));
$.assertEqual($.call(ncf_notification_preferences_variables, [preferences], null), Object.assign({}, {["input"]: Object.assign({}, {["accountNumber"]: "ACCOUNT"}, {["isPaymentReceived"]: true}, {["isStatementAvailable"]: null})}), "test_finance.py:145: ncf_notification_preferences_variables(preferences) == {'input': {'accountNumber': 'ACCOUNT', 'isPaymentReceived': True, 'isStatementAvailable': None}}");
$.assertEqual($.call(ncf_account_statement_variables, [$.call(date, [2026, 1, 1], null), $.call(date, [2026, 1, 31], null), $.attr(NCFAccountContractType, "LEASE")], null), Object.assign({}, {["startDate"]: "2026-01-01"}, {["endDate"]: "2026-01-31"}, {["contractType"]: "LEASE"}), "test_finance.py:152: ncf_account_statement_variables(date(2026, 1, 1), date(2026, 1, 31), NCFAccountContractType.LEASE) == {'startDate': '2026-01-01', 'endDate': '2026-01-31', 'contractType': 'LEASE'}");
start = $.call(datetime, [2026, 1, 1], Object.assign({}, {"tzinfo": UTC}));
end = $.call(datetime, [2026, 2, 1], Object.assign({}, {"tzinfo": UTC}));
$.assertEqual($.call(payment_history_variables, ["ACCOUNT", start, end], null), Object.assign({}, {["accountNumber"]: "ACCOUNT"}, {["startDate"]: "2026-01-01T00:00:00+00:00"}, {["endDate"]: "2026-02-01T00:00:00+00:00"}), "test_finance.py:159: payment_history_variables('ACCOUNT', start, end) == {'accountNumber': 'ACCOUNT', 'startDate': '2026-01-01T00:00:00+00:00', 'endDate': '2026-02-01T00:00:00+00:00'}");
$.raises($.ValueError, "UNKNOWN_VALUE cannot be sent", () => {
$.call(ncf_connect_account_variables, ["VIN", "ACCOUNT", $.attr(NCFCustomerType, "UNKNOWN_VALUE")], null);
});
}

/** Translated upstream test_parse_finance_unions_and_future_branches. */
export function test_parse_finance_unions_and_future_branches(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_ncf_connect_account, [Object.assign({}, {["ncfConnectAccount"]: Object.assign({}, {["__typename"]: "NCFConnectAccountSuccessResponse"}, {["success"]: null})})], null), $.call(NCFConnectAccountSuccess, [null], null), "test_finance.py:169: parse_ncf_connect_account({'ncfConnectAccount': {'__typename': 'NCFConnectAccountSuccessResponse', 'success': None}}) == NCFConnectAccountSuccess(None)");
$.assertEqual($.call(parse_ncf_disconnect_account, [Object.assign({}, {["ncfDisconnectAccount"]: Object.assign({}, {["__typename"]: "NCFDisconnectAccountFailureResponse"}, {["message"]: "Unable to disconnect"})})], null), $.call(NCFDisconnectAccountFailure, ["Unable to disconnect"], null), "test_finance.py:177: parse_ncf_disconnect_account({'ncfDisconnectAccount': {'__typename': 'NCFDisconnectAccountFailureResponse', 'message': 'Unable to disconnect'}}) == NCFDisconnectAccountFailure('Unable to disconnect')");
$.assertEqual($.call(parse_ncf_update_notification_preferences, [Object.assign({}, {["ncfUpdateNotificationPreferences"]: Object.assign({}, {["__typename"]: "FutureResult"})})], null), $.call(UnselectedFinanceResult, ["FutureResult"], null), "test_finance.py:185: parse_ncf_update_notification_preferences({'ncfUpdateNotificationPreferences': {'__typename': 'FutureResult'}}) == UnselectedFinanceResult('FutureResult')");
$.assertEqual($.call(parse_financial_vehicles, [Object.assign({}, {["financialVehicles"]: [null, Object.assign({}, {["__typename"]: "FutureVehicle"}, {["vin"]: "VIN"})]})], null), [null, $.call(UnselectedFinancialVehicle, ["FutureVehicle", "VIN"], null)], "test_finance.py:188: parse_financial_vehicles({'financialVehicles': [None, {'__typename': 'FutureVehicle', 'vin': 'VIN'}]}) == (None, UnselectedFinancialVehicle('FutureVehicle', 'VIN'))");
$.assertEqual($.call(parse_ncf_account_statement, [Object.assign({}, {["financialVehicles"]: [Object.assign({}, {["__typename"]: "FutureVehicle"})]})], null), [$.call(UnselectedFinanceResult, ["FutureVehicle"], null)], "test_finance.py:191: parse_ncf_account_statement({'financialVehicles': [{'__typename': 'FutureVehicle'}]}) == (UnselectedFinanceResult('FutureVehicle'),)");
}

/** Translated upstream test_parse_credit_quote_preferences_and_payment_history. */
export function test_parse_credit_quote_preferences_and_payment_history(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_vehicle_credit, [Object.assign({}, {["vehicles"]: [Object.assign({}, {["__typename"]: "Vehicle"}, {["vin"]: "VIN"}, {["credit"]: null})]})], null), [$.call(VehicleCreditInfo, ["VIN", null], null)], "test_finance.py:197: parse_vehicle_credit({'vehicles': [{'__typename': 'Vehicle', 'vin': 'VIN', 'credit': None}]}) == (VehicleCreditInfo('VIN', None),)");
$.assertEqual($.call(parse_ncf_payout_quote, [Object.assign({}, {["ncfPayoutQuote"]: Object.assign({}, {["__typename"]: "NCFPayoutQuoteLease"}, {["amount"]: 12500}, {["goodThroughDate"]: "2026-08-15"}, {["earlyTerminationAmount"]: 250.5})})], null), $.call(NCFPayoutQuote, [12500.0, $.call(date, [2026, 8, 15], null), 250.5], null), "test_finance.py:200: parse_ncf_payout_quote({'ncfPayoutQuote': {'__typename': 'NCFPayoutQuoteLease', 'amount': 12500, 'goodThroughDate': '2026-08-15', 'earlyTerminationAmount': 250.5}}) == NCFPayoutQuote(12500.0, date(2026, 8, 15), 250.5)");
$.assertEqual($.call(parse_ncf_preferences, [Object.assign({}, {["ncfPreferences"]: Object.assign({}, {["__typename"]: "NCFPreferences"}, {["notificationPreferences"]: Object.assign({}, {["__typename"]: "NCFNotificationPreferences"}, {["isPaperlessStatement"]: true}, {["isPaymentDueInOneDay"]: false}, {["isPaymentReceived"]: true}, {["isPaymentPastDue"]: false}, {["isStatementAvailable"]: true})})})], null), $.call(NCFNotificationPreferences, [true, false, true, false, true], null), "test_finance.py:210: parse_ncf_preferences({'ncfPreferences': {'__typename': 'NCFPreferences', 'notificationPreferences': {'__typename': 'NCFNotificationPreferences', 'isPaperlessStatement': True, 'isPaymentDueInOneDay': False, 'isPaymentReceived': True, 'isPaymentPastDue': False, 'isStatementAvailable': True}}}) == NCFNotificationPreferences(True, False, True, False, True)");
$.assertEqual($.call(parse_payment_history, [Object.assign({}, {["paymentHistory"]: [null, Object.assign({}, {["__typename"]: "NCFPaymentHistoryTransactionLoan"}, {["type"]: "PAYMENT"}, {["description"]: null}, {["effectiveDate"]: "2026-07-01T12:00:00Z"}, {["processDate"]: null}, {["totalPaymentAmount"]: 500}, {["miscellaneousFees"]: null}, {["baseRentAmount"]: null}, {["taxAmount"]: 10}, {["lateFees"]: 0}, {["adminFees"]: null}, {["registrationFees"]: null}, {["principleAmount"]: 400}, {["interestAmount"]: 90})]})], null), [null, $.call(NCFPaymentHistoryEntry, ["NCFPaymentHistoryTransactionLoan", "PAYMENT", null, $.call(datetime, [2026, 7, 1, 12], Object.assign({}, {"tzinfo": UTC})), null, 500.0, null, null, 10.0, 0.0, null, null, $.call(NCFPaymentHistoryLoanDetails, [400.0, 90.0], null)], null)], "test_finance.py:225: parse_payment_history({'paymentHistory': [None, {'__typename': 'NCFPaymentHistoryTransactionLoan', 'type': 'PAYMENT', 'description': None, 'effectiveDate': '2026-07-01T12:00:00Z', 'processDate': None, 'totalPaymentAmount': 500, 'miscellaneousFees': None, 'baseRentAmount': None, 'taxAmount': 10, 'lateFees': 0, 'adminFees': None, 'registrationFees': None, 'principleAmount': 400, 'interestAmount': 90}]}) == (None, NCFPaymentHistoryEntry('NCFPaymentHistoryTransactionLoan', 'PAYMENT', None, datetime(2026, 7, 1, 12, tzinfo=UTC), None, 500.0, None, None, 10.0, 0.0, None, None, NCFPaymentHistoryLoanDetails(400.0, 90.0)))");
}

/** Translated upstream test_client_wires_all_finance_operations. */
export async function test_client_wires_all_finance_operations(...__args: any[]): any {
let call, end_date, end_time, payload, payloads, preferences, sdk, session, start_date, start_time;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, ["ncfConnectAccount", null], null), $.call(FakeResponse, ["ncfDisconnectAccount", null], null), $.call(FakeResponse, ["ncfUpdateAccount", null], null), $.call(FakeResponse, ["ncfUpdateNotificationPreferences", null], null), $.call(FakeResponse, ["financialVehicles", null], null), $.call(FakeResponse, ["accountStatementPDF", null], null), $.call(FakeResponse, ["accountStatements", null], null), $.call(FakeResponse, ["vehicles", null], null), $.call(FakeResponse, ["invoicePDF", null], null), $.call(FakeResponse, ["invoices", null], null), $.call(FakeResponse, ["financialVehicles", null], null), $.call(FakeResponse, ["ncfPayoutQuote", null], null), $.call(FakeResponse, ["ncfPreferences", null], null), $.call(FakeResponse, ["ncfTermsAndConditions", null], null), $.call(FakeResponse, ["paymentHistory", null], null)], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
start_date = $.call(date, [2026, 1, 1], null);
end_date = $.call(date, [2026, 1, 31], null);
start_time = $.call(datetime, [2026, 1, 1], Object.assign({}, {"tzinfo": UTC}));
end_time = $.call(datetime, [2026, 2, 1], Object.assign({}, {"tzinfo": UTC}));
preferences = $.call(NCFNotificationPreferencesInput, ["ACCOUNT"], null);
$.assert((((await $.call($.attr(sdk, "async_ncf_connect_account"), ["VIN", "ACCOUNT"], null)) === null)), "test_finance.py:292: await sdk.async_ncf_connect_account('VIN', 'ACCOUNT') is None");
$.assert((((await $.call($.attr(sdk, "async_ncf_disconnect_account"), ["ACCOUNT"], null)) === null)), "test_finance.py:293: await sdk.async_ncf_disconnect_account('ACCOUNT') is None");
$.assert((((await $.call($.attr(sdk, "async_ncf_update_account"), ["ACCOUNT"], null)) === null)), "test_finance.py:294: await sdk.async_ncf_update_account('ACCOUNT') is None");
$.assert((((await $.call($.attr(sdk, "async_ncf_update_notification_preferences"), [preferences], null)) === null)), "test_finance.py:295: await sdk.async_ncf_update_notification_preferences(preferences) is None");
$.assert((((await $.call($.attr(sdk, "async_get_financial_vehicles"), [], null)) === null)), "test_finance.py:296: await sdk.async_get_financial_vehicles() is None");
$.assert((((await $.call($.attr(sdk, "async_get_account_statement_pdf"), ["CONTRACT", "DOCUMENT"], null)) === null)), "test_finance.py:297: await sdk.async_get_account_statement_pdf('CONTRACT', 'DOCUMENT') is None");
$.assert((((await $.call($.attr(sdk, "async_get_account_statements"), ["CONTRACT"], null)) === null)), "test_finance.py:298: await sdk.async_get_account_statements('CONTRACT') is None");
$.assert((((await $.call($.attr(sdk, "async_get_vehicle_credit"), [], null)) === null)), "test_finance.py:299: await sdk.async_get_vehicle_credit() is None");
$.assert((((await $.call($.attr(sdk, "async_get_invoice_pdf"), ["CONTRACT", "UUID"], null)) === null)), "test_finance.py:300: await sdk.async_get_invoice_pdf('CONTRACT', 'UUID') is None");
$.assert((((await $.call($.attr(sdk, "async_get_invoices"), ["CONTRACT"], null)) === null)), "test_finance.py:301: await sdk.async_get_invoices('CONTRACT') is None");
$.assert((((await $.call($.attr(sdk, "async_get_ncf_account_statement"), [start_date, end_date, $.attr(NCFAccountContractType, "LEASE")], null)) === null)), "test_finance.py:302: await sdk.async_get_ncf_account_statement(start_date, end_date, NCFAccountContractType.LEASE) is None");
$.assert((((await $.call($.attr(sdk, "async_get_ncf_payout_quote"), ["ACCOUNT", "VIN"], null)) === null)), "test_finance.py:310: await sdk.async_get_ncf_payout_quote('ACCOUNT', 'VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_get_ncf_preferences"), ["ACCOUNT"], null)) === null)), "test_finance.py:311: await sdk.async_get_ncf_preferences('ACCOUNT') is None");
$.assert((((await $.call($.attr(sdk, "async_get_ncf_terms_and_conditions"), [], null)) === null)), "test_finance.py:312: await sdk.async_get_ncf_terms_and_conditions() is None");
$.assert((((await $.call($.attr(sdk, "async_get_payment_history"), ["ACCOUNT", start_time, end_time], null)) === null)), "test_finance.py:313: await sdk.async_get_payment_history('ACCOUNT', start_time, end_time) is None");
payloads = [];
for (call of $.iterable($.attr(session, "calls"))) {
payload = $.get(call, "json");
$.assert($.call($.isinstance, [payload, Mapping], null), "test_finance.py:318: isinstance(payload, Mapping)");
$.call($.attr(payloads, "append"), [payload], null);
}
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "operationName")); } return __out; })(), ["NCFConnectAccount", "NCFDisconnectAccount", "NCFUpdateAccount", "NCFUpdateNotificationPreferences", "FinancialVehicles", "GetAccountStatementPDF", "GetAccountStatements", "GetCredit", "GetInvoicePDF", "GetInvoices", "NCFAccountStatement", "NCFPayoutQuote", "NCFPreferences", "NCFTermsAndConditions", "PaymentHistory"], "test_finance.py:320: [payload['operationName'] for payload in payloads] == ['NCFConnectAccount', 'NCFDisconnectAccount', 'NCFUpdateAccount', 'NCFUpdateNotificationPreferences', 'FinancialVehicles', 'GetAccountStatementPDF', 'GetAccountStatements', 'GetCredit', 'GetInvoicePDF', 'GetInvoices', 'NCFAccountStatement', 'NCFPayoutQuote', 'NCFPreferences', 'NCFTermsAndConditions', 'PaymentHistory']");
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "variables")); } return __out; })(), [$.call(ncf_connect_account_variables, ["VIN", "ACCOUNT"], null), $.call(account_number_variables, ["ACCOUNT"], null), $.call(ncf_update_account_variables, ["ACCOUNT"], null), $.call(ncf_notification_preferences_variables, [preferences], null), {}, $.call(finance_document_variables, ["CONTRACT", "DOCUMENT"], null), Object.assign({}, {["contractNumber"]: "CONTRACT"}), {}, $.call(invoice_pdf_variables, ["CONTRACT", "UUID"], null), Object.assign({}, {["contractNumber"]: "CONTRACT"}), $.call(ncf_account_statement_variables, [start_date, end_date, $.attr(NCFAccountContractType, "LEASE")], null), $.call(ncf_payout_quote_variables, ["ACCOUNT", "VIN"], null), $.call(account_number_variables, ["ACCOUNT"], null), {}, $.call(payment_history_variables, ["ACCOUNT", start_time, end_time], null)], "test_finance.py:337: [payload['variables'] for payload in payloads] == [ncf_connect_account_variables('VIN', 'ACCOUNT'), account_number_variables('ACCOUNT'), ncf_update_account_variables('ACCOUNT'), ncf_notification_preferences_variables(preferences), {}, finance_document_variables('CONTRACT', 'DOCUMENT'), {'contractNumber': 'CONTRACT'}, {}, invoice_pdf_variables('CONTRACT', 'UUID'), {'contractNumber': 'CONTRACT'}, ncf_account_statement_variables(start_date, end_date, NCFAccountContractType.LEASE), ncf_payout_quote_variables('ACCOUNT', 'VIN'), account_number_variables('ACCOUNT'), {}, payment_history_variables('ACCOUNT', start_time, end_time)]");
}

/** Translated upstream test_read_only_mode_blocks_every_finance_mutation_before_network. */
export async function test_read_only_mode_blocks_every_finance_mutation_before_network(...__args: any[]): any {
let call, calls, sdk, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": true}));
calls = [$.call($.attr(sdk, "async_ncf_connect_account"), ["VIN", "ACCOUNT"], null), $.call($.attr(sdk, "async_ncf_disconnect_account"), ["ACCOUNT"], null), $.call($.attr(sdk, "async_ncf_update_account"), ["ACCOUNT"], null), $.call($.attr(sdk, "async_ncf_update_notification_preferences"), [$.call(NCFNotificationPreferencesInput, ["ACCOUNT"], null)], null)];
for (call of $.iterable(calls)) {
await $.raises(ReadOnlyError, null, async () => {
(await call);
});
}
$.assertEqual($.attr(session, "calls"), [], "test_finance.py:370: session.calls == []");
}

$.register("test_finance.py::test_finance_operations_match_service_documents", test_finance_operations_match_service_documents, []);

$.register("test_finance.py::test_finance_inputs_preserve_omitted_and_explicit_null_fields", test_finance_inputs_preserve_omitted_and_explicit_null_fields, []);

$.register("test_finance.py::test_parse_finance_unions_and_future_branches", test_parse_finance_unions_and_future_branches, []);

$.register("test_finance.py::test_parse_credit_quote_preferences_and_payment_history", test_parse_credit_quote_preferences_and_payment_history, []);

$.register("test_finance.py::test_client_wires_all_finance_operations", test_client_wires_all_finance_operations, []);

$.register("test_finance.py::test_read_only_mode_blocks_every_finance_mutation_before_network", test_read_only_mode_blocks_every_finance_mutation_before_network, []);
