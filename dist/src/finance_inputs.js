"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCFNotificationPreferencesInput = exports.serialize_enum = exports.serialize_datetime = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.NCFCustomerType = exports.NCFAccountContractType = exports.address_input = exports.AddressInput = void 0;
exports.ncf_connect_account_variables = ncf_connect_account_variables;
exports.account_number_variables = account_number_variables;
exports.ncf_update_account_variables = ncf_update_account_variables;
exports.ncf_notification_preferences_variables = ncf_notification_preferences_variables;
exports.finance_document_variables = finance_document_variables;
exports.contract_number_variables = contract_number_variables;
exports.invoice_pdf_variables = invoice_pdf_variables;
exports.ncf_account_statement_variables = ncf_account_statement_variables;
exports.ncf_payout_quote_variables = ncf_payout_quote_variables;
exports.payment_history_variables = payment_history_variables;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const date = _runtime_1.py.date;
const datetime = _runtime_1.py.datetime;
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "AddressInput", { enumerable: true, get: function () { return common_inputs_1.AddressInput; } });
Object.defineProperty(exports, "address_input", { enumerable: true, get: function () { return common_inputs_1.address_input; } });
const finance_models_1 = require("./finance_models");
Object.defineProperty(exports, "NCFAccountContractType", { enumerable: true, get: function () { return finance_models_1.NCFAccountContractType; } });
Object.defineProperty(exports, "NCFCustomerType", { enumerable: true, get: function () { return finance_models_1.NCFCustomerType; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_datetime", { enumerable: true, get: function () { return graphql_input_1.serialize_datetime; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
/** Required account and optional nullable NCF notification switches. */
class NCFNotificationPreferencesInput {
    account_number;
    is_payment_received;
    is_statement_available;
    is_payment_past_due;
    is_payment_due_in_one_day;
    static __fields = [["account_number", _runtime_1.py.MISSING], ["is_payment_received", graphql_input_1.UNSET], ["is_statement_available", graphql_input_1.UNSET], ["is_payment_past_due", graphql_input_1.UNSET], ["is_payment_due_in_one_day", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NCFNotificationPreferencesInput, __args); Object.freeze(this); }
}
exports.NCFNotificationPreferencesInput = NCFNotificationPreferencesInput;
_runtime_1.py.classType(NCFNotificationPreferencesInput);
/** Serialize NCF account-link variables. */
function ncf_connect_account_variables(...__args) {
    let serialized_customer_type;
    let { "vin": vin, "account_number": account_number, "customer_type": customer_type } = _runtime_1.py.bind(__args, ["vin", "account_number", "customer_type"], { "customer_type": graphql_input_1.UNSET }, [], null, null);
    /** Serialize NCF account-link variables. */
    serialized_customer_type = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [customer_type, finance_models_1.NCFCustomerType], null)) ? _runtime_1.py.call(graphql_input_1.serialize_enum, [customer_type], null) : customer_type);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "customerType": serialized_customer_type }, { "accountNumber": account_number }));
}
/** Serialize a required finance account number. */
function account_number_variables(...__args) {
    let { "account_number": account_number } = _runtime_1.py.bind(__args, ["account_number"], {}, [], null, null);
    /** Serialize a required finance account number. */
    return Object.assign({}, { ["accountNumber"]: account_number });
}
/** Serialize independently optional NCF profile updates. */
function ncf_update_account_variables(...__args) {
    let serialized_address;
    let { "account_number": account_number, "address": address, "phone_number": phone_number } = _runtime_1.py.bind(__args, ["account_number", "address", "phone_number"], { "address": graphql_input_1.UNSET, "phone_number": graphql_input_1.UNSET }, [], null, null);
    /** Serialize independently optional NCF profile updates. */
    serialized_address = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [address, common_inputs_1.AddressInput], null)) ? _runtime_1.py.call(common_inputs_1.address_input, [address], null) : address);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "accountNumber": account_number }, { "address": serialized_address }, { "phoneNumber": phone_number }));
}
/** Serialize NCF notification-preference updates. */
function ncf_notification_preferences_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize NCF notification-preference updates. */
    return Object.assign({}, { ["input"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "accountNumber": _runtime_1.py.attr(config, "account_number") }, { "isPaymentReceived": _runtime_1.py.attr(config, "is_payment_received") }, { "isStatementAvailable": _runtime_1.py.attr(config, "is_statement_available") }, { "isPaymentPastDue": _runtime_1.py.attr(config, "is_payment_past_due") }, { "isPaymentDueInOneDay": _runtime_1.py.attr(config, "is_payment_due_in_one_day") })) });
}
/** Serialize account-statement PDF variables. */
function finance_document_variables(...__args) {
    let { "contract_number": contract_number, "document_number": document_number } = _runtime_1.py.bind(__args, ["contract_number", "document_number"], {}, [], null, null);
    /** Serialize account-statement PDF variables. */
    return Object.assign({}, { ["contractNumber"]: contract_number }, { ["documentNumber"]: document_number });
}
/** Serialize a required finance contract number. */
function contract_number_variables(...__args) {
    let { "contract_number": contract_number } = _runtime_1.py.bind(__args, ["contract_number"], {}, [], null, null);
    /** Serialize a required finance contract number. */
    return Object.assign({}, { ["contractNumber"]: contract_number });
}
/** Serialize invoice PDF variables. */
function invoice_pdf_variables(...__args) {
    let { "contract_number": contract_number, "uuid": uuid } = _runtime_1.py.bind(__args, ["contract_number", "uuid"], {}, [], null, null);
    /** Serialize invoice PDF variables. */
    return Object.assign({}, { ["contractNumber"]: contract_number }, { ["uuid"]: uuid });
}
/** Serialize an NCF statement period and contract type. */
function ncf_account_statement_variables(...__args) {
    let { "start_date": start_date, "end_date": end_date, "contract_type": contract_type } = _runtime_1.py.bind(__args, ["start_date", "end_date", "contract_type"], {}, [], null, null);
    /** Serialize an NCF statement period and contract type. */
    return Object.assign({}, { ["startDate"]: _runtime_1.py.call(_runtime_1.py.attr(start_date, "isoformat"), [], null) }, { ["endDate"]: _runtime_1.py.call(_runtime_1.py.attr(end_date, "isoformat"), [], null) }, { ["contractType"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [contract_type], null) });
}
/** Serialize NCF payout-quote variables. */
function ncf_payout_quote_variables(...__args) {
    let { "account_number": account_number, "vin": vin } = _runtime_1.py.bind(__args, ["account_number", "vin"], {}, [], null, null);
    /** Serialize NCF payout-quote variables. */
    return Object.assign({}, { ["accountNumber"]: account_number }, { ["vin"]: vin });
}
/** Serialize an offset-aware payment-history period. */
function payment_history_variables(...__args) {
    let { "account_number": account_number, "start_date": start_date, "end_date": end_date } = _runtime_1.py.bind(__args, ["account_number", "start_date", "end_date"], {}, [], null, null);
    /** Serialize an offset-aware payment-history period. */
    return Object.assign({}, { ["accountNumber"]: account_number }, { ["startDate"]: _runtime_1.py.call(graphql_input_1.serialize_datetime, [start_date], null) }, { ["endDate"]: _runtime_1.py.call(graphql_input_1.serialize_datetime, [end_date], null) });
}
//# sourceMappingURL=finance_inputs.js.map