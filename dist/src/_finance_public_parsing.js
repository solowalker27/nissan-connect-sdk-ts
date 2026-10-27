"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleCreditInfo = exports.UnselectedFinanceResult = exports.NCFUpdateNotificationPreferencesSuccess = exports.NCFUpdateNotificationPreferencesError = exports.NCFUpdateAccountResult = exports.NCFPayoutQuote = exports.NCFPaymentHistoryEntry = exports.NCFNotificationPreferences = exports.NCFInvoiceSummary = exports.NCFInvoicePDF = exports.NCFDisconnectAccountSuccess = exports.NCFDisconnectAccountFailure = exports.NCFConnectAccountSuccess = exports.NCFConnectAccountPrimaryAlreadyRegistered = exports.NCFConnectAccountInvalidCombination = exports.NCFConnectAccountInternalError = exports.NCFConnectAccountCoSignerAlreadyRegistered = exports.NCFAccountStatementSummary = exports.NCFAccountStatementPDF = exports.ResponseError = exports._typename = exports._root = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_bool = exports._required_field = exports._required_nullable_float = exports._required_nullable_date = exports._required_bool = exports._nullable_list = exports._parse_vehicle_credit_info = exports._parse_statement_summary = exports._parse_payment_history_entry = exports._parse_invoice_summary = exports._parse_account_statement_vehicle = exports._parse_financial_vehicle = void 0;
exports.parse_ncf_connect_account = parse_ncf_connect_account;
exports.parse_ncf_disconnect_account = parse_ncf_disconnect_account;
exports.parse_ncf_update_account = parse_ncf_update_account;
exports.parse_ncf_update_notification_preferences = parse_ncf_update_notification_preferences;
exports.parse_financial_vehicles = parse_financial_vehicles;
exports.parse_account_statement_pdf = parse_account_statement_pdf;
exports.parse_account_statements = parse_account_statements;
exports.parse_vehicle_credit = parse_vehicle_credit;
exports.parse_invoice_pdf = parse_invoice_pdf;
exports.parse_invoices = parse_invoices;
exports.parse_ncf_account_statement = parse_ncf_account_statement;
exports.parse_ncf_payout_quote = parse_ncf_payout_quote;
exports.parse_ncf_preferences = parse_ncf_preferences;
exports.parse_ncf_terms_and_conditions = parse_ncf_terms_and_conditions;
exports.parse_payment_history = parse_payment_history;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _finance_account_parsing_1 = require("./_finance_account_parsing");
Object.defineProperty(exports, "_parse_financial_vehicle", { enumerable: true, get: function () { return _finance_account_parsing_1._parse_financial_vehicle; } });
const _finance_statement_parsing_1 = require("./_finance_statement_parsing");
Object.defineProperty(exports, "_parse_account_statement_vehicle", { enumerable: true, get: function () { return _finance_statement_parsing_1._parse_account_statement_vehicle; } });
Object.defineProperty(exports, "_parse_invoice_summary", { enumerable: true, get: function () { return _finance_statement_parsing_1._parse_invoice_summary; } });
Object.defineProperty(exports, "_parse_payment_history_entry", { enumerable: true, get: function () { return _finance_statement_parsing_1._parse_payment_history_entry; } });
Object.defineProperty(exports, "_parse_statement_summary", { enumerable: true, get: function () { return _finance_statement_parsing_1._parse_statement_summary; } });
Object.defineProperty(exports, "_parse_vehicle_credit_info", { enumerable: true, get: function () { return _finance_statement_parsing_1._parse_vehicle_credit_info; } });
const _finance_value_parsing_1 = require("./_finance_value_parsing");
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _finance_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_required_bool", { enumerable: true, get: function () { return _finance_value_parsing_1._required_bool; } });
Object.defineProperty(exports, "_required_nullable_date", { enumerable: true, get: function () { return _finance_value_parsing_1._required_nullable_date; } });
Object.defineProperty(exports, "_required_nullable_float", { enumerable: true, get: function () { return _finance_value_parsing_1._required_nullable_float; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return account_parsing_1._root; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const finance_models_1 = require("./finance_models");
Object.defineProperty(exports, "NCFAccountStatementPDF", { enumerable: true, get: function () { return finance_models_1.NCFAccountStatementPDF; } });
Object.defineProperty(exports, "NCFAccountStatementSummary", { enumerable: true, get: function () { return finance_models_1.NCFAccountStatementSummary; } });
Object.defineProperty(exports, "NCFConnectAccountCoSignerAlreadyRegistered", { enumerable: true, get: function () { return finance_models_1.NCFConnectAccountCoSignerAlreadyRegistered; } });
Object.defineProperty(exports, "NCFConnectAccountInternalError", { enumerable: true, get: function () { return finance_models_1.NCFConnectAccountInternalError; } });
Object.defineProperty(exports, "NCFConnectAccountInvalidCombination", { enumerable: true, get: function () { return finance_models_1.NCFConnectAccountInvalidCombination; } });
Object.defineProperty(exports, "NCFConnectAccountPrimaryAlreadyRegistered", { enumerable: true, get: function () { return finance_models_1.NCFConnectAccountPrimaryAlreadyRegistered; } });
Object.defineProperty(exports, "NCFConnectAccountSuccess", { enumerable: true, get: function () { return finance_models_1.NCFConnectAccountSuccess; } });
Object.defineProperty(exports, "NCFDisconnectAccountFailure", { enumerable: true, get: function () { return finance_models_1.NCFDisconnectAccountFailure; } });
Object.defineProperty(exports, "NCFDisconnectAccountSuccess", { enumerable: true, get: function () { return finance_models_1.NCFDisconnectAccountSuccess; } });
Object.defineProperty(exports, "NCFInvoicePDF", { enumerable: true, get: function () { return finance_models_1.NCFInvoicePDF; } });
Object.defineProperty(exports, "NCFInvoiceSummary", { enumerable: true, get: function () { return finance_models_1.NCFInvoiceSummary; } });
Object.defineProperty(exports, "NCFNotificationPreferences", { enumerable: true, get: function () { return finance_models_1.NCFNotificationPreferences; } });
Object.defineProperty(exports, "NCFPaymentHistoryEntry", { enumerable: true, get: function () { return finance_models_1.NCFPaymentHistoryEntry; } });
Object.defineProperty(exports, "NCFPayoutQuote", { enumerable: true, get: function () { return finance_models_1.NCFPayoutQuote; } });
Object.defineProperty(exports, "NCFUpdateAccountResult", { enumerable: true, get: function () { return finance_models_1.NCFUpdateAccountResult; } });
Object.defineProperty(exports, "NCFUpdateNotificationPreferencesError", { enumerable: true, get: function () { return finance_models_1.NCFUpdateNotificationPreferencesError; } });
Object.defineProperty(exports, "NCFUpdateNotificationPreferencesSuccess", { enumerable: true, get: function () { return finance_models_1.NCFUpdateNotificationPreferencesSuccess; } });
Object.defineProperty(exports, "UnselectedFinanceResult", { enumerable: true, get: function () { return finance_models_1.UnselectedFinanceResult; } });
Object.defineProperty(exports, "VehicleCreditInfo", { enumerable: true, get: function () { return finance_models_1.VehicleCreditInfo; } });
/** Parse every generated NCF account-link union branch. */
function parse_ncf_connect_account(...__args) {
    let field, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated NCF account-link union branch. */
    field = "ncfConnectAccount";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFConnectAccountSuccessResponse")))) {
        return _runtime_1.py.call(finance_models_1.NCFConnectAccountSuccess, [_runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "success", (_runtime_1.py.str(field) + ".success")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFConnectAccountCoSignerAlreadyRegisteredErrorResponse")))) {
        return _runtime_1.py.call(finance_models_1.NCFConnectAccountCoSignerAlreadyRegistered, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFConnectAccountInvalidVinAndAccountCombinationErrorResponse")))) {
        return _runtime_1.py.call(finance_models_1.NCFConnectAccountInvalidCombination, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFConnectAccountInternalErrorResponse")))) {
        return _runtime_1.py.call(finance_models_1.NCFConnectAccountInternalError, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFConnectAccountPrimaryAlreadyRegisteredErrorResponse")))) {
        return _runtime_1.py.call(finance_models_1.NCFConnectAccountPrimaryAlreadyRegistered, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(finance_models_1.UnselectedFinanceResult, [typename], null);
}
/** Parse every generated NCF account-disconnection union branch. */
function parse_ncf_disconnect_account(...__args) {
    let field, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated NCF account-disconnection union branch. */
    field = "ncfDisconnectAccount";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFDisconnectAccountSuccessResponse")))) {
        return _runtime_1.py.call(finance_models_1.NCFDisconnectAccountSuccess, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFDisconnectAccountFailureResponse")))) {
        return _runtime_1.py.call(finance_models_1.NCFDisconnectAccountFailure, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(finance_models_1.UnselectedFinanceResult, [typename], null);
}
/** Parse the nullable NCF profile-update status. */
function parse_ncf_update_account(...__args) {
    let field, root;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable NCF profile-update status. */
    field = "ncfUpdateAccount";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.NCFUpdateAccountResult, [_runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "success", (_runtime_1.py.str(field) + ".success")], null)], null);
}
/** Parse every generated NCF notification-update union branch. */
function parse_ncf_update_notification_preferences(...__args) {
    let field, root, success, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated NCF notification-update union branch. */
    field = "ncfUpdateNotificationPreferences";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFUpdateNotificationPreferencesSuccessResponse")))) {
        success = _runtime_1.py.call(account_parsing_1._required_field, [root, "success", (_runtime_1.py.str(field) + ".success")], null);
        if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [success, _runtime_1.py.bool], null)))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(field) + ".success is not a boolean")], null);
        }
        return _runtime_1.py.call(finance_models_1.NCFUpdateNotificationPreferencesSuccess, [success], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFUpdateNotificationPreferencesErrorResponse")))) {
        return _runtime_1.py.call(finance_models_1.NCFUpdateNotificationPreferencesError, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(finance_models_1.UnselectedFinanceResult, [typename], null);
}
/** Parse nullable NCF vehicles. */
function parse_financial_vehicles(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable NCF vehicles. */
    return _runtime_1.py.call(_finance_value_parsing_1._nullable_list, [data, "financialVehicles", "financialVehicles", _finance_account_parsing_1._parse_financial_vehicle], null);
}
/** Parse a nullable account-statement PDF payload. */
function parse_account_statement_pdf(...__args) {
    let field, root;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a nullable account-statement PDF payload. */
    field = "accountStatementPDF";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.NCFAccountStatementPDF, [], Object.assign({}, { "document": _runtime_1.py.call(account_parsing_1._required_string, [root, "document", (_runtime_1.py.str(field) + ".document")], null) }, { "document_url": _runtime_1.py.call(account_parsing_1._required_string, [root, "documentUrl", (_runtime_1.py.str(field) + ".documentUrl")], null) }));
}
/** Parse nullable account-statement summaries. */
function parse_account_statements(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable account-statement summaries. */
    return _runtime_1.py.call(_finance_value_parsing_1._nullable_list, [data, "accountStatements", "accountStatements", _finance_statement_parsing_1._parse_statement_summary], null);
}
/** Parse nullable vehicle credit details. */
function parse_vehicle_credit(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable vehicle credit details. */
    return _runtime_1.py.call(_finance_value_parsing_1._nullable_list, [data, "vehicles", "vehicles", _finance_statement_parsing_1._parse_vehicle_credit_info], null);
}
/** Parse a nullable invoice PDF payload. */
function parse_invoice_pdf(...__args) {
    let field, root;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a nullable invoice PDF payload. */
    field = "invoicePDF";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.NCFInvoicePDF, [], Object.assign({}, { "uuid": _runtime_1.py.call(account_parsing_1._required_string, [root, "uuid", (_runtime_1.py.str(field) + ".uuid")], null) }, { "file": _runtime_1.py.call(account_parsing_1._required_string, [root, "file", (_runtime_1.py.str(field) + ".file")], null) }));
}
/** Parse nullable invoice summaries. */
function parse_invoices(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable invoice summaries. */
    return _runtime_1.py.call(_finance_value_parsing_1._nullable_list, [data, "invoices", "invoices", _finance_statement_parsing_1._parse_invoice_summary], null);
}
/** Parse nullable per-vehicle NCF billing statements. */
function parse_ncf_account_statement(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable per-vehicle NCF billing statements. */
    return _runtime_1.py.call(_finance_value_parsing_1._nullable_list, [data, "financialVehicles", "financialVehicles", _finance_statement_parsing_1._parse_account_statement_vehicle], null);
}
/** Parse a nullable NCF loan or lease payout quote. */
function parse_ncf_payout_quote(...__args) {
    let early_termination_amount, field, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a nullable NCF loan or lease payout quote. */
    field = "ncfPayoutQuote";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    early_termination_amount = null;
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NCFPayoutQuoteLease")))) {
        early_termination_amount = _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [root, "earlyTerminationAmount", (_runtime_1.py.str(field) + ".earlyTerminationAmount")], null);
    }
    return _runtime_1.py.call(finance_models_1.NCFPayoutQuote, [], Object.assign({}, { "amount": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_float, [root, "amount", (_runtime_1.py.str(field) + ".amount")], null) }, { "good_through_date": _runtime_1.py.call(_finance_value_parsing_1._required_nullable_date, [root, "goodThroughDate", (_runtime_1.py.str(field) + ".goodThroughDate")], null) }, { "early_termination_amount": early_termination_amount }));
}
/** Parse nullable NCF notification preferences. */
function parse_ncf_preferences(...__args) {
    let field, preferences, root;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable NCF notification preferences. */
    root = _runtime_1.py.call(account_parsing_1._root, [data, "ncfPreferences"], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    field = "ncfPreferences.notificationPreferences";
    preferences = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "notificationPreferences", field], null);
    if (_runtime_1.py.truth(((preferences === null)))) {
        return null;
    }
    return _runtime_1.py.call(finance_models_1.NCFNotificationPreferences, [], Object.assign({}, { "paperless_statement": _runtime_1.py.call(_finance_value_parsing_1._required_bool, [preferences, "isPaperlessStatement", (_runtime_1.py.str(field) + ".isPaperlessStatement")], null) }, { "payment_due_in_one_day": _runtime_1.py.call(_finance_value_parsing_1._required_bool, [preferences, "isPaymentDueInOneDay", (_runtime_1.py.str(field) + ".isPaymentDueInOneDay")], null) }, { "payment_received": _runtime_1.py.call(_finance_value_parsing_1._required_bool, [preferences, "isPaymentReceived", (_runtime_1.py.str(field) + ".isPaymentReceived")], null) }, { "payment_past_due": _runtime_1.py.call(_finance_value_parsing_1._required_bool, [preferences, "isPaymentPastDue", (_runtime_1.py.str(field) + ".isPaymentPastDue")], null) }, { "statement_available": _runtime_1.py.call(_finance_value_parsing_1._required_bool, [preferences, "isStatementAvailable", (_runtime_1.py.str(field) + ".isStatementAvailable")], null) }));
}
/** Parse nullable NCF terms. */
function parse_ncf_terms_and_conditions(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable NCF terms. */
    return _runtime_1.py.call(account_parsing_1._required_nullable_string, [data, "ncfTermsAndConditions", "ncfTermsAndConditions"], null);
}
/** Parse nullable NCF payment history. */
function parse_payment_history(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable NCF payment history. */
    return _runtime_1.py.call(_finance_value_parsing_1._nullable_list, [data, "paymentHistory", "paymentHistory", _finance_statement_parsing_1._parse_payment_history_entry], null);
}
//# sourceMappingURL=_finance_public_parsing.js.map