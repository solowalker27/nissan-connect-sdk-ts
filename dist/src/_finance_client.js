"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports._FinanceClientMixin = exports.UnsetType = exports.UNSET = exports.parse_vehicle_credit = exports.parse_payment_history = exports.parse_ncf_update_notification_preferences = exports.parse_ncf_update_account = exports.parse_ncf_terms_and_conditions = exports.parse_ncf_preferences = exports.parse_ncf_payout_quote = exports.parse_ncf_disconnect_account = exports.parse_ncf_connect_account = exports.parse_ncf_account_statement = exports.parse_invoices = exports.parse_invoice_pdf = exports.parse_financial_vehicles = exports.parse_account_statements = exports.parse_account_statement_pdf = exports.VehicleCreditInfo = exports.NCFUpdateAccountResult = exports.NCFPayoutQuote = exports.NCFPaymentHistoryEntry = exports.NCFNotificationPreferences = exports.NCFInvoiceSummary = exports.NCFInvoicePDF = exports.NCFCustomerType = exports.NCFAccountStatementSummary = exports.NCFAccountStatementPDF = exports.NCFAccountContractType = exports.payment_history_variables = exports.ncf_update_account_variables = exports.ncf_payout_quote_variables = exports.ncf_notification_preferences_variables = exports.ncf_connect_account_variables = exports.ncf_account_statement_variables = exports.invoice_pdf_variables = exports.finance_document_variables = exports.contract_number_variables = exports.account_number_variables = exports.NCFNotificationPreferencesInput = exports.AddressInput = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const date = _runtime_1.py.date;
const datetime = _runtime_1.py.datetime;
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "AddressInput", { enumerable: true, get: function () { return common_inputs_1.AddressInput; } });
const finance_inputs_1 = require("./finance_inputs");
Object.defineProperty(exports, "NCFNotificationPreferencesInput", { enumerable: true, get: function () { return finance_inputs_1.NCFNotificationPreferencesInput; } });
Object.defineProperty(exports, "account_number_variables", { enumerable: true, get: function () { return finance_inputs_1.account_number_variables; } });
Object.defineProperty(exports, "contract_number_variables", { enumerable: true, get: function () { return finance_inputs_1.contract_number_variables; } });
Object.defineProperty(exports, "finance_document_variables", { enumerable: true, get: function () { return finance_inputs_1.finance_document_variables; } });
Object.defineProperty(exports, "invoice_pdf_variables", { enumerable: true, get: function () { return finance_inputs_1.invoice_pdf_variables; } });
Object.defineProperty(exports, "ncf_account_statement_variables", { enumerable: true, get: function () { return finance_inputs_1.ncf_account_statement_variables; } });
Object.defineProperty(exports, "ncf_connect_account_variables", { enumerable: true, get: function () { return finance_inputs_1.ncf_connect_account_variables; } });
Object.defineProperty(exports, "ncf_notification_preferences_variables", { enumerable: true, get: function () { return finance_inputs_1.ncf_notification_preferences_variables; } });
Object.defineProperty(exports, "ncf_payout_quote_variables", { enumerable: true, get: function () { return finance_inputs_1.ncf_payout_quote_variables; } });
Object.defineProperty(exports, "ncf_update_account_variables", { enumerable: true, get: function () { return finance_inputs_1.ncf_update_account_variables; } });
Object.defineProperty(exports, "payment_history_variables", { enumerable: true, get: function () { return finance_inputs_1.payment_history_variables; } });
const finance_models_1 = require("./finance_models");
Object.defineProperty(exports, "NCFAccountContractType", { enumerable: true, get: function () { return finance_models_1.NCFAccountContractType; } });
Object.defineProperty(exports, "NCFAccountStatementPDF", { enumerable: true, get: function () { return finance_models_1.NCFAccountStatementPDF; } });
Object.defineProperty(exports, "NCFAccountStatementSummary", { enumerable: true, get: function () { return finance_models_1.NCFAccountStatementSummary; } });
Object.defineProperty(exports, "NCFCustomerType", { enumerable: true, get: function () { return finance_models_1.NCFCustomerType; } });
Object.defineProperty(exports, "NCFInvoicePDF", { enumerable: true, get: function () { return finance_models_1.NCFInvoicePDF; } });
Object.defineProperty(exports, "NCFInvoiceSummary", { enumerable: true, get: function () { return finance_models_1.NCFInvoiceSummary; } });
Object.defineProperty(exports, "NCFNotificationPreferences", { enumerable: true, get: function () { return finance_models_1.NCFNotificationPreferences; } });
Object.defineProperty(exports, "NCFPaymentHistoryEntry", { enumerable: true, get: function () { return finance_models_1.NCFPaymentHistoryEntry; } });
Object.defineProperty(exports, "NCFPayoutQuote", { enumerable: true, get: function () { return finance_models_1.NCFPayoutQuote; } });
Object.defineProperty(exports, "NCFUpdateAccountResult", { enumerable: true, get: function () { return finance_models_1.NCFUpdateAccountResult; } });
Object.defineProperty(exports, "VehicleCreditInfo", { enumerable: true, get: function () { return finance_models_1.VehicleCreditInfo; } });
const finance_parsing_1 = require("./finance_parsing");
Object.defineProperty(exports, "parse_account_statement_pdf", { enumerable: true, get: function () { return finance_parsing_1.parse_account_statement_pdf; } });
Object.defineProperty(exports, "parse_account_statements", { enumerable: true, get: function () { return finance_parsing_1.parse_account_statements; } });
Object.defineProperty(exports, "parse_financial_vehicles", { enumerable: true, get: function () { return finance_parsing_1.parse_financial_vehicles; } });
Object.defineProperty(exports, "parse_invoice_pdf", { enumerable: true, get: function () { return finance_parsing_1.parse_invoice_pdf; } });
Object.defineProperty(exports, "parse_invoices", { enumerable: true, get: function () { return finance_parsing_1.parse_invoices; } });
Object.defineProperty(exports, "parse_ncf_account_statement", { enumerable: true, get: function () { return finance_parsing_1.parse_ncf_account_statement; } });
Object.defineProperty(exports, "parse_ncf_connect_account", { enumerable: true, get: function () { return finance_parsing_1.parse_ncf_connect_account; } });
Object.defineProperty(exports, "parse_ncf_disconnect_account", { enumerable: true, get: function () { return finance_parsing_1.parse_ncf_disconnect_account; } });
Object.defineProperty(exports, "parse_ncf_payout_quote", { enumerable: true, get: function () { return finance_parsing_1.parse_ncf_payout_quote; } });
Object.defineProperty(exports, "parse_ncf_preferences", { enumerable: true, get: function () { return finance_parsing_1.parse_ncf_preferences; } });
Object.defineProperty(exports, "parse_ncf_terms_and_conditions", { enumerable: true, get: function () { return finance_parsing_1.parse_ncf_terms_and_conditions; } });
Object.defineProperty(exports, "parse_ncf_update_account", { enumerable: true, get: function () { return finance_parsing_1.parse_ncf_update_account; } });
Object.defineProperty(exports, "parse_ncf_update_notification_preferences", { enumerable: true, get: function () { return finance_parsing_1.parse_ncf_update_notification_preferences; } });
Object.defineProperty(exports, "parse_payment_history", { enumerable: true, get: function () { return finance_parsing_1.parse_payment_history; } });
Object.defineProperty(exports, "parse_vehicle_credit", { enumerable: true, get: function () { return finance_parsing_1.parse_vehicle_credit; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
/** Translated upstream _FinanceClientMixin. */
class _FinanceClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _FinanceClientMixin, __args); }
    /** Link an NCF account to a vehicle. */
    async async_ncf_connect_account(...__args) {
        let data;
        let { "vin": vin, "account_number": account_number, "customer_type": customer_type } = _runtime_1.py.bind(__args, ["vin", "account_number"], { "customer_type": graphql_input_1.UNSET }, ["customer_type"], null, null);
        /** Link an NCF account to a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NCFConnectAccount", _runtime_1.py.attr(operations, "NCF_CONNECT_ACCOUNT"), _runtime_1.py.call(finance_inputs_1.ncf_connect_account_variables, [vin, account_number, customer_type], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_ncf_connect_account, [data], null);
    }
    /** Disconnect an NCF account. */
    async async_ncf_disconnect_account(...__args) {
        let data;
        let { "account_number": account_number } = _runtime_1.py.bind(__args, ["account_number"], {}, [], null, null);
        /** Disconnect an NCF account. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NCFDisconnectAccount", _runtime_1.py.attr(operations, "NCF_DISCONNECT_ACCOUNT"), _runtime_1.py.call(finance_inputs_1.account_number_variables, [account_number], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_ncf_disconnect_account, [data], null);
    }
    /** Patch optional NCF contact fields. */
    async async_ncf_update_account(...__args) {
        let data;
        let { "account_number": account_number, "address": address, "phone_number": phone_number } = _runtime_1.py.bind(__args, ["account_number"], { "address": graphql_input_1.UNSET, "phone_number": graphql_input_1.UNSET }, ["address", "phone_number"], null, null);
        /** Patch optional NCF contact fields. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NCFUpdateAccount", _runtime_1.py.attr(operations, "NCF_UPDATE_ACCOUNT"), _runtime_1.py.call(finance_inputs_1.ncf_update_account_variables, [account_number, address, phone_number], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_ncf_update_account, [data], null);
    }
    /** Patch NCF notification preferences. */
    async async_ncf_update_notification_preferences(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Patch NCF notification preferences. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NCFUpdateNotificationPreferences", _runtime_1.py.attr(operations, "NCF_UPDATE_NOTIFICATION_PREFERENCES"), _runtime_1.py.call(finance_inputs_1.ncf_notification_preferences_variables, [config], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_ncf_update_notification_preferences, [data], null);
    }
    /** Return vehicles and contracts linked through financial services. */
    async async_get_financial_vehicles(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return vehicles and contracts linked through financial services. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["FinancialVehicles", _runtime_1.py.attr(operations, "FINANCIAL_VEHICLES"), {}], null));
        return _runtime_1.py.call(finance_parsing_1.parse_financial_vehicles, [data], null);
    }
    /** Return one Nissan finance account-statement document. */
    async async_get_account_statement_pdf(...__args) {
        let data;
        let { "contract_number": contract_number, "document_number": document_number } = _runtime_1.py.bind(__args, ["contract_number", "document_number"], {}, [], null, null);
        /** Return one Nissan finance account-statement document. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GetAccountStatementPDF", _runtime_1.py.attr(operations, "GET_ACCOUNT_STATEMENT_PDF"), _runtime_1.py.call(finance_inputs_1.finance_document_variables, [contract_number, document_number], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_account_statement_pdf, [data], null);
    }
    /** Return Nissan finance account-statement summaries. */
    async async_get_account_statements(...__args) {
        let data;
        let { "contract_number": contract_number } = _runtime_1.py.bind(__args, ["contract_number"], {}, [], null, null);
        /** Return Nissan finance account-statement summaries. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GetAccountStatements", _runtime_1.py.attr(operations, "GET_ACCOUNT_STATEMENTS"), _runtime_1.py.call(finance_inputs_1.contract_number_variables, [contract_number], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_account_statements, [data], null);
    }
    /** Return vehicle credit data exposed by the signed-in account. */
    async async_get_vehicle_credit(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return vehicle credit data exposed by the signed-in account. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GetCredit", _runtime_1.py.attr(operations, "GET_CREDIT"), {}], null));
        return _runtime_1.py.call(finance_parsing_1.parse_vehicle_credit, [data], null);
    }
    /** Return one Nissan finance invoice document. */
    async async_get_invoice_pdf(...__args) {
        let data;
        let { "contract_number": contract_number, "uuid": uuid } = _runtime_1.py.bind(__args, ["contract_number", "uuid"], {}, [], null, null);
        /** Return one Nissan finance invoice document. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GetInvoicePDF", _runtime_1.py.attr(operations, "GET_INVOICE_PDF"), _runtime_1.py.call(finance_inputs_1.invoice_pdf_variables, [contract_number, uuid], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_invoice_pdf, [data], null);
    }
    /** Return Nissan finance invoice summaries. */
    async async_get_invoices(...__args) {
        let data;
        let { "contract_number": contract_number } = _runtime_1.py.bind(__args, ["contract_number"], {}, [], null, null);
        /** Return Nissan finance invoice summaries. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GetInvoices", _runtime_1.py.attr(operations, "GET_INVOICES"), _runtime_1.py.call(finance_inputs_1.contract_number_variables, [contract_number], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_invoices, [data], null);
    }
    /** Return detailed NCF statements for a date range. */
    async async_get_ncf_account_statement(...__args) {
        let data;
        let { "start_date": start_date, "end_date": end_date, "contract_type": contract_type } = _runtime_1.py.bind(__args, ["start_date", "end_date", "contract_type"], {}, [], null, null);
        /** Return detailed NCF statements for a date range. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NCFAccountStatement", _runtime_1.py.attr(operations, "NCF_ACCOUNT_STATEMENT"), _runtime_1.py.call(finance_inputs_1.ncf_account_statement_variables, [start_date, end_date, contract_type], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_ncf_account_statement, [data], null);
    }
    /** Return the current payout quote for a finance account and vehicle. */
    async async_get_ncf_payout_quote(...__args) {
        let data;
        let { "account_number": account_number, "vin": vin } = _runtime_1.py.bind(__args, ["account_number", "vin"], {}, [], null, null);
        /** Return the current payout quote for a finance account and vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NCFPayoutQuote", _runtime_1.py.attr(operations, "NCF_PAYOUT_QUOTE"), _runtime_1.py.call(finance_inputs_1.ncf_payout_quote_variables, [account_number, vin], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_ncf_payout_quote, [data], null);
    }
    /** Return NCF notification preferences. */
    async async_get_ncf_preferences(...__args) {
        let data;
        let { "account_number": account_number } = _runtime_1.py.bind(__args, ["account_number"], {}, [], null, null);
        /** Return NCF notification preferences. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NCFPreferences", _runtime_1.py.attr(operations, "NCF_PREFERENCES"), _runtime_1.py.call(finance_inputs_1.account_number_variables, [account_number], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_ncf_preferences, [data], null);
    }
    /** Return NCF terms and conditions. */
    async async_get_ncf_terms_and_conditions(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return NCF terms and conditions. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NCFTermsAndConditions", _runtime_1.py.attr(operations, "NCF_TERMS_AND_CONDITIONS"), {}], null));
        return _runtime_1.py.call(finance_parsing_1.parse_ncf_terms_and_conditions, [data], null);
    }
    /** Return NCF payment history for a date-time range. */
    async async_get_payment_history(...__args) {
        let data;
        let { "account_number": account_number, "start_date": start_date, "end_date": end_date } = _runtime_1.py.bind(__args, ["account_number", "start_date", "end_date"], {}, [], null, null);
        /** Return NCF payment history for a date-time range. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["PaymentHistory", _runtime_1.py.attr(operations, "PAYMENT_HISTORY"), _runtime_1.py.call(finance_inputs_1.payment_history_variables, [account_number, start_date, end_date], null)], null));
        return _runtime_1.py.call(finance_parsing_1.parse_payment_history, [data], null);
    }
}
exports._FinanceClientMixin = _FinanceClientMixin;
_runtime_1.py.classType(_FinanceClientMixin);
//# sourceMappingURL=_finance_client.js.map