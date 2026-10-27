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
exports._SecondDeliveryClientMixin = exports.parse_update_second_delivery_appointment = exports.parse_second_delivery_virtual_time_slots = exports.parse_second_delivery_verify_auth_code = exports.parse_second_delivery_send_auth_code = exports.parse_second_delivery_hub_time_slots = exports.parse_second_delivery_home_time_slots = exports.parse_second_delivery_eligibility = exports.parse_second_delivery_appointment = exports.parse_second_delivery_address_validation = exports.parse_create_second_delivery_appointment = exports.parse_cancel_second_delivery_appointment = exports.SecondDeliveryEligibility = exports.update_second_delivery_appointment_variables = exports.second_delivery_verify_auth_code_variables = exports.second_delivery_send_auth_code_variables = exports.second_delivery_location_slots_variables = exports.second_delivery_home_slots_variables = exports.second_delivery_appointment_variables = exports.SecondDeliveryAppointmentInput = exports.address_input = exports.AddressInput = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const datetime = _runtime_1.py.datetime;
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "AddressInput", { enumerable: true, get: function () { return common_inputs_1.AddressInput; } });
Object.defineProperty(exports, "address_input", { enumerable: true, get: function () { return common_inputs_1.address_input; } });
const second_delivery_inputs_1 = require("./second_delivery_inputs");
Object.defineProperty(exports, "SecondDeliveryAppointmentInput", { enumerable: true, get: function () { return second_delivery_inputs_1.SecondDeliveryAppointmentInput; } });
Object.defineProperty(exports, "second_delivery_appointment_variables", { enumerable: true, get: function () { return second_delivery_inputs_1.second_delivery_appointment_variables; } });
Object.defineProperty(exports, "second_delivery_home_slots_variables", { enumerable: true, get: function () { return second_delivery_inputs_1.second_delivery_home_slots_variables; } });
Object.defineProperty(exports, "second_delivery_location_slots_variables", { enumerable: true, get: function () { return second_delivery_inputs_1.second_delivery_location_slots_variables; } });
Object.defineProperty(exports, "second_delivery_send_auth_code_variables", { enumerable: true, get: function () { return second_delivery_inputs_1.second_delivery_send_auth_code_variables; } });
Object.defineProperty(exports, "second_delivery_verify_auth_code_variables", { enumerable: true, get: function () { return second_delivery_inputs_1.second_delivery_verify_auth_code_variables; } });
Object.defineProperty(exports, "update_second_delivery_appointment_variables", { enumerable: true, get: function () { return second_delivery_inputs_1.update_second_delivery_appointment_variables; } });
const second_delivery_models_1 = require("./second_delivery_models");
Object.defineProperty(exports, "SecondDeliveryEligibility", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryEligibility; } });
const second_delivery_parsing_1 = require("./second_delivery_parsing");
Object.defineProperty(exports, "parse_cancel_second_delivery_appointment", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_cancel_second_delivery_appointment; } });
Object.defineProperty(exports, "parse_create_second_delivery_appointment", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_create_second_delivery_appointment; } });
Object.defineProperty(exports, "parse_second_delivery_address_validation", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_second_delivery_address_validation; } });
Object.defineProperty(exports, "parse_second_delivery_appointment", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_second_delivery_appointment; } });
Object.defineProperty(exports, "parse_second_delivery_eligibility", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_second_delivery_eligibility; } });
Object.defineProperty(exports, "parse_second_delivery_home_time_slots", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_second_delivery_home_time_slots; } });
Object.defineProperty(exports, "parse_second_delivery_hub_time_slots", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_second_delivery_hub_time_slots; } });
Object.defineProperty(exports, "parse_second_delivery_send_auth_code", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_second_delivery_send_auth_code; } });
Object.defineProperty(exports, "parse_second_delivery_verify_auth_code", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_second_delivery_verify_auth_code; } });
Object.defineProperty(exports, "parse_second_delivery_virtual_time_slots", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_second_delivery_virtual_time_slots; } });
Object.defineProperty(exports, "parse_update_second_delivery_appointment", { enumerable: true, get: function () { return second_delivery_parsing_1.parse_update_second_delivery_appointment; } });
/** Translated upstream _SecondDeliveryClientMixin. */
class _SecondDeliveryClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _SecondDeliveryClientMixin, __args); }
    /** Return the existing second-delivery appointment state. */
    async async_get_second_delivery_appointment(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the existing second-delivery appointment state. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryAppointment", _runtime_1.py.attr(operations, "SECOND_DELIVERY_APPOINTMENT"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_second_delivery_appointment, [data], null);
    }
    /** Return at-home second-delivery appointment time slots. */
    async async_get_second_delivery_home_time_slots(...__args) {
        let data;
        let { "vin": vin, "address": address, "hub_id": hub_id, "start": start, "end": end } = _runtime_1.py.bind(__args, ["vin", "address", "hub_id", "start", "end"], {}, [], null, null);
        /** Return at-home second-delivery appointment time slots. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryAppointmentsAtHome", _runtime_1.py.attr(operations, "SECOND_DELIVERY_APPOINTMENTS_AT_HOME"), _runtime_1.py.call(second_delivery_inputs_1.second_delivery_home_slots_variables, [vin, address, hub_id, start, end], null)], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_second_delivery_home_time_slots, [data], null);
    }
    /** Return in-hub second-delivery appointment time slots. */
    async async_get_second_delivery_hub_time_slots(...__args) {
        let data;
        let { "hub_id": hub_id, "postal_code": postal_code, "start": start, "end": end, "vin": vin } = _runtime_1.py.bind(__args, ["hub_id", "postal_code", "start", "end", "vin"], {}, [], null, null);
        /** Return in-hub second-delivery appointment time slots. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryAppointmentsAtHub", _runtime_1.py.attr(operations, "SECOND_DELIVERY_APPOINTMENTS_AT_HUB"), _runtime_1.py.call(second_delivery_inputs_1.second_delivery_location_slots_variables, [hub_id, postal_code, start, end, vin], null)], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_second_delivery_hub_time_slots, [data], null);
    }
    /** Return virtual second-delivery appointment time slots. */
    async async_get_second_delivery_virtual_time_slots(...__args) {
        let data;
        let { "hub_id": hub_id, "postal_code": postal_code, "start": start, "end": end, "vin": vin } = _runtime_1.py.bind(__args, ["hub_id", "postal_code", "start", "end", "vin"], {}, [], null, null);
        /** Return virtual second-delivery appointment time slots. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryAppointmentsAtVirtual", _runtime_1.py.attr(operations, "SECOND_DELIVERY_APPOINTMENTS_AT_VIRTUAL"), _runtime_1.py.call(second_delivery_inputs_1.second_delivery_location_slots_variables, [hub_id, postal_code, start, end, vin], null)], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_second_delivery_virtual_time_slots, [data], null);
    }
    /** Return second-delivery eligibility and CTA state. */
    async async_get_second_delivery_eligibility(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return second-delivery eligibility and CTA state. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryEligibility", _runtime_1.py.attr(operations, "SECOND_DELIVERY_ELIGIBILITY"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_second_delivery_eligibility, [data], null);
    }
    /** Validate an address for at-home second delivery. */
    async async_validate_second_delivery_address(...__args) {
        let data;
        let { "vin": vin, "address": address } = _runtime_1.py.bind(__args, ["vin", "address"], {}, [], null, null);
        /** Validate an address for at-home second delivery. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ValidateSecondDeliveryAddress", _runtime_1.py.attr(operations, "VALIDATE_SECOND_DELIVERY_ADDRESS"), Object.assign({}, { ["vin"]: vin }, { ["address"]: _runtime_1.py.call(common_inputs_1.address_input, [address], null) })], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_second_delivery_address_validation, [data], null);
    }
    /** Cancel a second-delivery appointment. */
    async async_cancel_second_delivery_appointment(...__args) {
        let data;
        let { "activity_id": activity_id } = _runtime_1.py.bind(__args, ["activity_id"], {}, [], null, null);
        /** Cancel a second-delivery appointment. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CancelSecondDeliveryAppointment", _runtime_1.py.attr(operations, "CANCEL_SECOND_DELIVERY_APPOINTMENT"), Object.assign({}, { ["activityId"]: activity_id })], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_cancel_second_delivery_appointment, [data], null);
    }
    /** Create a second-delivery appointment. */
    async async_create_second_delivery_appointment(...__args) {
        let data;
        let { "appointment": appointment } = _runtime_1.py.bind(__args, ["appointment"], {}, [], null, null);
        /** Create a second-delivery appointment. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreateSecondDeliveryAppointment", _runtime_1.py.attr(operations, "CREATE_SECOND_DELIVERY_APPOINTMENT"), _runtime_1.py.call(second_delivery_inputs_1.second_delivery_appointment_variables, [appointment], null)], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_create_second_delivery_appointment, [data], null);
    }
    /** Send a second-delivery appointment authentication code. */
    async async_second_delivery_send_auth_code(...__args) {
        let data;
        let { "appointment_id": appointment_id, "access_token": access_token, "send_via_email": send_via_email, "send_via_sms": send_via_sms } = _runtime_1.py.bind(__args, ["appointment_id", "access_token"], {}, ["send_via_email", "send_via_sms"], null, null);
        /** Send a second-delivery appointment authentication code. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SecondDeliverySendAuthCode", _runtime_1.py.attr(operations, "SECOND_DELIVERY_SEND_AUTH_CODE"), _runtime_1.py.call(second_delivery_inputs_1.second_delivery_send_auth_code_variables, [appointment_id, access_token, send_via_email, send_via_sms], null)], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_second_delivery_send_auth_code, [data], null);
    }
    /** Verify a second-delivery appointment authentication code. */
    async async_second_delivery_verify_auth_code(...__args) {
        let data;
        let { "appointment_id": appointment_id, "access_token": access_token, "auth_code": auth_code } = _runtime_1.py.bind(__args, ["appointment_id", "access_token", "auth_code"], {}, [], null, null);
        /** Verify a second-delivery appointment authentication code. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryVerifyAuthCode", _runtime_1.py.attr(operations, "SECOND_DELIVERY_VERIFY_AUTH_CODE"), _runtime_1.py.call(second_delivery_inputs_1.second_delivery_verify_auth_code_variables, [appointment_id, access_token, auth_code], null)], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_second_delivery_verify_auth_code, [data], null);
    }
    /** Replace a second-delivery appointment's selected details. */
    async async_update_second_delivery_appointment(...__args) {
        let data;
        let { "activity_id": activity_id, "appointment": appointment } = _runtime_1.py.bind(__args, ["activity_id", "appointment"], {}, [], null, null);
        /** Replace a second-delivery appointment's selected details. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateSecondDeliveryAppointment", _runtime_1.py.attr(operations, "UPDATE_SECOND_DELIVERY_APPOINTMENT"), _runtime_1.py.call(second_delivery_inputs_1.update_second_delivery_appointment_variables, [activity_id, appointment], null)], null));
        return _runtime_1.py.call(second_delivery_parsing_1.parse_update_second_delivery_appointment, [data], null);
    }
}
exports._SecondDeliveryClientMixin = _SecondDeliveryClientMixin;
_runtime_1.py.classType(_SecondDeliveryClientMixin);
//# sourceMappingURL=_second_delivery_client.js.map