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
exports._AccountClientMixin = exports.UnsetType = exports.UNSET = exports.parse_validate_nissan_id = exports.parse_user_info = exports.parse_update_pin = exports.parse_update_nna_marketing_preferences = exports.parse_update_nci_marketing_preferences = exports.parse_update_account = exports.parse_terms_and_conditions = exports.parse_security_questions = exports.parse_marketing_preferences = exports.parse_delete_account = exports.parse_create_pin = exports.UserInfo = exports.SecurityQuestion = exports.DeleteAccountResult = exports.verify_otp_variables = exports.validate_nissan_id_variables = exports.update_nna_marketing_preferences_variables = exports.update_nci_marketing_preferences_variables = exports.update_account_variables = exports.register_account_variables = exports.pin_variables = exports.ncar_icar_verify_otp_variables = exports.ncar_icar_verify_account_variables = exports.ncar_icar_generate_otp_variables = exports.generate_otp_variables = exports.UpdateAccountInput = exports.RegisterAccountInput = exports.NCIMarketingPreferenceInput = exports.MarketingPreferenceInput = exports.parse_verify_otp = exports.parse_register_account = exports.parse_ncar_icar_verify_otp = exports.parse_ncar_icar_verify_account = exports.parse_ncar_icar_register_account = exports.parse_ncar_icar_generate_otp = exports.parse_ncar_icar_customer_enrollment = exports.parse_generate_otp = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const account_enrollment_parsing_1 = require("./account_enrollment_parsing");
Object.defineProperty(exports, "parse_generate_otp", { enumerable: true, get: function () { return account_enrollment_parsing_1.parse_generate_otp; } });
Object.defineProperty(exports, "parse_ncar_icar_customer_enrollment", { enumerable: true, get: function () { return account_enrollment_parsing_1.parse_ncar_icar_customer_enrollment; } });
Object.defineProperty(exports, "parse_ncar_icar_generate_otp", { enumerable: true, get: function () { return account_enrollment_parsing_1.parse_ncar_icar_generate_otp; } });
Object.defineProperty(exports, "parse_ncar_icar_register_account", { enumerable: true, get: function () { return account_enrollment_parsing_1.parse_ncar_icar_register_account; } });
Object.defineProperty(exports, "parse_ncar_icar_verify_account", { enumerable: true, get: function () { return account_enrollment_parsing_1.parse_ncar_icar_verify_account; } });
Object.defineProperty(exports, "parse_ncar_icar_verify_otp", { enumerable: true, get: function () { return account_enrollment_parsing_1.parse_ncar_icar_verify_otp; } });
Object.defineProperty(exports, "parse_register_account", { enumerable: true, get: function () { return account_enrollment_parsing_1.parse_register_account; } });
Object.defineProperty(exports, "parse_verify_otp", { enumerable: true, get: function () { return account_enrollment_parsing_1.parse_verify_otp; } });
const account_inputs_1 = require("./account_inputs");
Object.defineProperty(exports, "MarketingPreferenceInput", { enumerable: true, get: function () { return account_inputs_1.MarketingPreferenceInput; } });
Object.defineProperty(exports, "NCIMarketingPreferenceInput", { enumerable: true, get: function () { return account_inputs_1.NCIMarketingPreferenceInput; } });
Object.defineProperty(exports, "RegisterAccountInput", { enumerable: true, get: function () { return account_inputs_1.RegisterAccountInput; } });
Object.defineProperty(exports, "UpdateAccountInput", { enumerable: true, get: function () { return account_inputs_1.UpdateAccountInput; } });
Object.defineProperty(exports, "generate_otp_variables", { enumerable: true, get: function () { return account_inputs_1.generate_otp_variables; } });
Object.defineProperty(exports, "ncar_icar_generate_otp_variables", { enumerable: true, get: function () { return account_inputs_1.ncar_icar_generate_otp_variables; } });
Object.defineProperty(exports, "ncar_icar_verify_account_variables", { enumerable: true, get: function () { return account_inputs_1.ncar_icar_verify_account_variables; } });
Object.defineProperty(exports, "ncar_icar_verify_otp_variables", { enumerable: true, get: function () { return account_inputs_1.ncar_icar_verify_otp_variables; } });
Object.defineProperty(exports, "pin_variables", { enumerable: true, get: function () { return account_inputs_1.pin_variables; } });
Object.defineProperty(exports, "register_account_variables", { enumerable: true, get: function () { return account_inputs_1.register_account_variables; } });
Object.defineProperty(exports, "update_account_variables", { enumerable: true, get: function () { return account_inputs_1.update_account_variables; } });
Object.defineProperty(exports, "update_nci_marketing_preferences_variables", { enumerable: true, get: function () { return account_inputs_1.update_nci_marketing_preferences_variables; } });
Object.defineProperty(exports, "update_nna_marketing_preferences_variables", { enumerable: true, get: function () { return account_inputs_1.update_nna_marketing_preferences_variables; } });
Object.defineProperty(exports, "validate_nissan_id_variables", { enumerable: true, get: function () { return account_inputs_1.validate_nissan_id_variables; } });
Object.defineProperty(exports, "verify_otp_variables", { enumerable: true, get: function () { return account_inputs_1.verify_otp_variables; } });
const account_models_1 = require("./account_models");
Object.defineProperty(exports, "DeleteAccountResult", { enumerable: true, get: function () { return account_models_1.DeleteAccountResult; } });
Object.defineProperty(exports, "SecurityQuestion", { enumerable: true, get: function () { return account_models_1.SecurityQuestion; } });
Object.defineProperty(exports, "UserInfo", { enumerable: true, get: function () { return account_models_1.UserInfo; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "parse_create_pin", { enumerable: true, get: function () { return account_parsing_1.parse_create_pin; } });
Object.defineProperty(exports, "parse_delete_account", { enumerable: true, get: function () { return account_parsing_1.parse_delete_account; } });
Object.defineProperty(exports, "parse_marketing_preferences", { enumerable: true, get: function () { return account_parsing_1.parse_marketing_preferences; } });
Object.defineProperty(exports, "parse_security_questions", { enumerable: true, get: function () { return account_parsing_1.parse_security_questions; } });
Object.defineProperty(exports, "parse_terms_and_conditions", { enumerable: true, get: function () { return account_parsing_1.parse_terms_and_conditions; } });
Object.defineProperty(exports, "parse_update_account", { enumerable: true, get: function () { return account_parsing_1.parse_update_account; } });
Object.defineProperty(exports, "parse_update_nci_marketing_preferences", { enumerable: true, get: function () { return account_parsing_1.parse_update_nci_marketing_preferences; } });
Object.defineProperty(exports, "parse_update_nna_marketing_preferences", { enumerable: true, get: function () { return account_parsing_1.parse_update_nna_marketing_preferences; } });
Object.defineProperty(exports, "parse_update_pin", { enumerable: true, get: function () { return account_parsing_1.parse_update_pin; } });
Object.defineProperty(exports, "parse_user_info", { enumerable: true, get: function () { return account_parsing_1.parse_user_info; } });
Object.defineProperty(exports, "parse_validate_nissan_id", { enumerable: true, get: function () { return account_parsing_1.parse_validate_nissan_id; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
/** Translated upstream _AccountClientMixin. */
class _AccountClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _AccountClientMixin, __args); }
    /** Return the account state associated with a Nissan ID. */
    async async_validate_nissan_id(...__args) {
        let data;
        let { "nissan_id": nissan_id } = _runtime_1.py.bind(__args, ["nissan_id"], {}, [], null, null);
        /** Return the account state associated with a Nissan ID. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_application_graphql"), ["ValidateNissanID", _runtime_1.py.attr(operations, "VALIDATE_NISSAN_ID"), _runtime_1.py.call(account_inputs_1.validate_nissan_id_variables, [nissan_id], null)], null));
        return _runtime_1.py.call(account_parsing_1.parse_validate_nissan_id, [data], null);
    }
    /** Return the account security-question catalog. */
    async async_get_security_questions(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return the account security-question catalog. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SecurityQuestions", _runtime_1.py.attr(operations, "SECURITY_QUESTIONS"), {}], null));
        return _runtime_1.py.call(account_parsing_1.parse_security_questions, [data], null);
    }
    /** Return the signed-in user's PIN and account-kind flags. */
    async async_get_user_info(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return the signed-in user's PIN and account-kind flags. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UserInfo", _runtime_1.py.attr(operations, "USER_INFO"), {}], null));
        return _runtime_1.py.call(account_parsing_1.parse_user_info, [data], null);
    }
    /** Return the nullable account terms content. */
    async async_get_terms_and_conditions(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return the nullable account terms content. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["TermsAndConditions", _runtime_1.py.attr(operations, "TERMS_AND_CONDITIONS"), {}], null));
        return _runtime_1.py.call(account_parsing_1.parse_terms_and_conditions, [data], null);
    }
    /** Return country-specific marketing preferences. */
    async async_get_marketing_preferences(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return country-specific marketing preferences. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["MarketingPreferences", _runtime_1.py.attr(operations, "MARKETING_PREFERENCES"), {}], null));
        return _runtime_1.py.call(account_parsing_1.parse_marketing_preferences, [data], null);
    }
    /** Register a MyNISSAN account. */
    async async_register_account(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Register a MyNISSAN account. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_application_graphql"), ["RegisterAccount", _runtime_1.py.attr(operations, "REGISTER_ACCOUNT"), _runtime_1.py.call(account_inputs_1.register_account_variables, [config], null)], null));
        return _runtime_1.py.call(account_enrollment_parsing_1.parse_register_account, [data], null);
    }
    /** Register an account through the NCAR/ICAR flow. */
    async async_register_ncar_icar_account(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Register an account through the NCAR/ICAR flow. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarRegisterAccount", _runtime_1.py.attr(operations, "NCAR_ICAR_REGISTER_ACCOUNT"), _runtime_1.py.call(account_inputs_1.register_account_variables, [config], null)], null));
        return _runtime_1.py.call(account_enrollment_parsing_1.parse_ncar_icar_register_account, [data], null);
    }
    /** Check account availability for an NCAR/ICAR enrollment. */
    async async_verify_ncar_icar_account(...__args) {
        let data;
        let { "guid": guid } = _runtime_1.py.bind(__args, ["guid"], {}, [], null, null);
        /** Check account availability for an NCAR/ICAR enrollment. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarVerifyAccount", _runtime_1.py.attr(operations, "NCAR_ICAR_VERIFY_ACCOUNT"), _runtime_1.py.call(account_inputs_1.ncar_icar_verify_account_variables, [guid], null)], null));
        return _runtime_1.py.call(account_enrollment_parsing_1.parse_ncar_icar_verify_account, [data], null);
    }
    /** Recover customer details from an NCAR/ICAR enrollment link. */
    async async_get_ncar_icar_customer_enrollment(...__args) {
        let data;
        let { "guid": guid } = _runtime_1.py.bind(__args, ["guid"], {}, [], null, null);
        /** Recover customer details from an NCAR/ICAR enrollment link. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarCustomerEnrollment", _runtime_1.py.attr(operations, "NCAR_ICAR_CUSTOMER_ENROLLMENT"), _runtime_1.py.call(account_inputs_1.ncar_icar_verify_account_variables, [guid], null)], null));
        return _runtime_1.py.call(account_enrollment_parsing_1.parse_ncar_icar_customer_enrollment, [data], null);
    }
    /** Generate a one-time password for NCAR/ICAR enrollment. */
    async async_generate_ncar_icar_otp(...__args) {
        let data;
        let { "guid": guid, "phone_number": phone_number } = _runtime_1.py.bind(__args, ["guid", "phone_number"], {}, [], null, null);
        /** Generate a one-time password for NCAR/ICAR enrollment. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarGenerateOTP", _runtime_1.py.attr(operations, "NCAR_ICAR_GENERATE_OTP"), _runtime_1.py.call(account_inputs_1.ncar_icar_generate_otp_variables, [guid, phone_number], null)], null));
        return _runtime_1.py.call(account_enrollment_parsing_1.parse_ncar_icar_generate_otp, [data], null);
    }
    /** Verify an NCAR/ICAR enrollment one-time password. */
    async async_verify_ncar_icar_otp(...__args) {
        let data;
        let { "guid": guid, "phone_number": phone_number, "reference_id": reference_id, "otp": otp } = _runtime_1.py.bind(__args, ["guid", "phone_number", "reference_id", "otp"], {}, [], null, null);
        /** Verify an NCAR/ICAR enrollment one-time password. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_application_graphql"), ["NcarIcarVerifyOTP", _runtime_1.py.attr(operations, "NCAR_ICAR_VERIFY_OTP"), _runtime_1.py.call(account_inputs_1.ncar_icar_verify_otp_variables, [guid, phone_number, reference_id, otp], null)], null));
        return _runtime_1.py.call(account_enrollment_parsing_1.parse_ncar_icar_verify_otp, [data], null);
    }
    /** Generate a one-time password for direct account verification. */
    async async_generate_otp(...__args) {
        let data;
        let { "phone_number": phone_number } = _runtime_1.py.bind(__args, ["phone_number"], {}, [], null, null);
        /** Generate a one-time password for direct account verification. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GenerateOTP", _runtime_1.py.attr(operations, "GENERATE_OTP"), _runtime_1.py.call(account_inputs_1.generate_otp_variables, [phone_number], null)], null));
        return _runtime_1.py.call(account_enrollment_parsing_1.parse_generate_otp, [data], null);
    }
    /** Verify a direct account one-time password. */
    async async_verify_otp(...__args) {
        let data;
        let { "phone_number": phone_number, "otp": otp, "reference_id": reference_id } = _runtime_1.py.bind(__args, ["phone_number", "otp", "reference_id"], {}, [], null, null);
        /** Verify a direct account one-time password. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VerifyOTP", _runtime_1.py.attr(operations, "VERIFY_OTP"), _runtime_1.py.call(account_inputs_1.verify_otp_variables, [phone_number, otp, reference_id], null)], null));
        return _runtime_1.py.call(account_enrollment_parsing_1.parse_verify_otp, [data], null);
    }
    /** Create the account PIN and security answer. */
    async async_create_pin(...__args) {
        let data;
        let { "question_id": question_id, "answer": answer, "new_pin": new_pin } = _runtime_1.py.bind(__args, ["question_id", "answer", "new_pin"], {}, [], null, null);
        /** Create the account PIN and security answer. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreatePin", _runtime_1.py.attr(operations, "CREATE_PIN"), _runtime_1.py.call(account_inputs_1.pin_variables, [question_id, answer, new_pin], null)], null));
        return _runtime_1.py.call(account_parsing_1.parse_create_pin, [data], null);
    }
    /** Replace the account PIN and security answer. */
    async async_update_pin(...__args) {
        let data;
        let { "question_id": question_id, "answer": answer, "new_pin": new_pin } = _runtime_1.py.bind(__args, ["question_id", "answer", "new_pin"], {}, [], null, null);
        /** Replace the account PIN and security answer. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdatePin", _runtime_1.py.attr(operations, "UPDATE_PIN"), _runtime_1.py.call(account_inputs_1.pin_variables, [question_id, answer, new_pin], null)], null));
        return _runtime_1.py.call(account_parsing_1.parse_update_pin, [data], null);
    }
    /** Update independently optional account profile fields. */
    async async_update_account(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], { "config": graphql_input_1.UNSET }, [], null, null);
        /** Update independently optional account profile fields. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateAccount", _runtime_1.py.attr(operations, "UPDATE_ACCOUNT"), _runtime_1.py.call(account_inputs_1.update_account_variables, [config], null)], null));
        return _runtime_1.py.call(account_parsing_1.parse_update_account, [data], null);
    }
    /** Permanently delete the signed-in MyNISSAN account. */
    async async_delete_account(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Permanently delete the signed-in MyNISSAN account. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DeleteAccount", _runtime_1.py.attr(operations, "DELETE_ACCOUNT"), {}], null));
        return _runtime_1.py.call(account_parsing_1.parse_delete_account, [data], null);
    }
    /** Replace NCI account preferences. */
    async async_update_nci_marketing_preferences(...__args) {
        let data;
        let { "marketing_preferences": marketing_preferences } = _runtime_1.py.bind(__args, ["marketing_preferences"], {}, [], null, null);
        /** Replace NCI account preferences. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateNCIMarketingPreferences", _runtime_1.py.attr(operations, "UPDATE_NCI_MARKETING_PREFERENCES"), _runtime_1.py.call(account_inputs_1.update_nci_marketing_preferences_variables, [marketing_preferences], null)], null));
        return _runtime_1.py.call(account_parsing_1.parse_update_nci_marketing_preferences, [data], null);
    }
    /** Replace NNA account preferences. */
    async async_update_nna_marketing_preferences(...__args) {
        let data;
        let { "marketing_preferences": marketing_preferences } = _runtime_1.py.bind(__args, ["marketing_preferences"], { "marketing_preferences": graphql_input_1.UNSET }, [], null, null);
        /** Replace NNA account preferences. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateNNAMarketingPreferences", _runtime_1.py.attr(operations, "UPDATE_NNA_MARKETING_PREFERENCES"), _runtime_1.py.call(account_inputs_1.update_nna_marketing_preferences_variables, [marketing_preferences], null)], null));
        return _runtime_1.py.call(account_parsing_1.parse_update_nna_marketing_preferences, [data], null);
    }
}
exports._AccountClientMixin = _AccountClientMixin;
_runtime_1.py.classType(_AccountClientMixin);
//# sourceMappingURL=_account_client.js.map