"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidSecondDeliveryAddress = exports.UnselectedSecondDeliveryResult = exports.SecondDeliveryEligibility = exports.SecondDeliveryAppointmentNotFound = exports.SecondDeliveryAppointmentForbidden = exports.InvalidSecondDeliveryAddress = exports._typename = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_bool = exports._parse_operation_result = exports._second_delivery_field = exports._second_delivery = exports._parse_time_slots = exports._parse_eligibility_result = exports._parse_call_to_action = exports._parse_booked_appointment = exports._parse_appointment_reference = exports._parse_address = void 0;
exports.parse_second_delivery_appointment = parse_second_delivery_appointment;
exports.parse_second_delivery_home_time_slots = parse_second_delivery_home_time_slots;
exports.parse_second_delivery_hub_time_slots = parse_second_delivery_hub_time_slots;
exports.parse_second_delivery_virtual_time_slots = parse_second_delivery_virtual_time_slots;
exports.parse_second_delivery_eligibility = parse_second_delivery_eligibility;
exports.parse_second_delivery_address_validation = parse_second_delivery_address_validation;
exports.parse_cancel_second_delivery_appointment = parse_cancel_second_delivery_appointment;
exports.parse_create_second_delivery_appointment = parse_create_second_delivery_appointment;
exports.parse_second_delivery_send_auth_code = parse_second_delivery_send_auth_code;
exports.parse_second_delivery_verify_auth_code = parse_second_delivery_verify_auth_code;
exports.parse_update_second_delivery_appointment = parse_update_second_delivery_appointment;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _second_delivery_detail_parsing_1 = require("./_second_delivery_detail_parsing");
Object.defineProperty(exports, "_parse_address", { enumerable: true, get: function () { return _second_delivery_detail_parsing_1._parse_address; } });
Object.defineProperty(exports, "_parse_appointment_reference", { enumerable: true, get: function () { return _second_delivery_detail_parsing_1._parse_appointment_reference; } });
Object.defineProperty(exports, "_parse_booked_appointment", { enumerable: true, get: function () { return _second_delivery_detail_parsing_1._parse_booked_appointment; } });
Object.defineProperty(exports, "_parse_call_to_action", { enumerable: true, get: function () { return _second_delivery_detail_parsing_1._parse_call_to_action; } });
Object.defineProperty(exports, "_parse_eligibility_result", { enumerable: true, get: function () { return _second_delivery_detail_parsing_1._parse_eligibility_result; } });
Object.defineProperty(exports, "_parse_time_slots", { enumerable: true, get: function () { return _second_delivery_detail_parsing_1._parse_time_slots; } });
Object.defineProperty(exports, "_second_delivery", { enumerable: true, get: function () { return _second_delivery_detail_parsing_1._second_delivery; } });
Object.defineProperty(exports, "_second_delivery_field", { enumerable: true, get: function () { return _second_delivery_detail_parsing_1._second_delivery_field; } });
const _second_delivery_value_parsing_1 = require("./_second_delivery_value_parsing");
Object.defineProperty(exports, "_parse_operation_result", { enumerable: true, get: function () { return _second_delivery_value_parsing_1._parse_operation_result; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const second_delivery_models_1 = require("./second_delivery_models");
Object.defineProperty(exports, "InvalidSecondDeliveryAddress", { enumerable: true, get: function () { return second_delivery_models_1.InvalidSecondDeliveryAddress; } });
Object.defineProperty(exports, "SecondDeliveryAppointmentForbidden", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryAppointmentForbidden; } });
Object.defineProperty(exports, "SecondDeliveryAppointmentNotFound", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryAppointmentNotFound; } });
Object.defineProperty(exports, "SecondDeliveryEligibility", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryEligibility; } });
Object.defineProperty(exports, "UnselectedSecondDeliveryResult", { enumerable: true, get: function () { return second_delivery_models_1.UnselectedSecondDeliveryResult; } });
Object.defineProperty(exports, "ValidSecondDeliveryAddress", { enumerable: true, get: function () { return second_delivery_models_1.ValidSecondDeliveryAddress; } });
/** Parse every selected existing second-delivery appointment branch. */
function parse_second_delivery_appointment(...__args) {
    let appointment, appointment_path, path, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected existing second-delivery appointment branch. */
    root = _runtime_1.py.call(_second_delivery_detail_parsing_1._second_delivery_field, [data, "appointment"], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, "vehicle.secondDelivery.appointment"], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "SecondDeliveryExistingBookedAppointment")))) {
        return _runtime_1.py.call(_second_delivery_detail_parsing_1._parse_booked_appointment, [root, "vehicle.secondDelivery.appointment"], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "SecondDeliveryBookedAppointmentNotExistError")))) {
        return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryAppointmentNotFound, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", "vehicle.secondDelivery.appointment.message"], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "SecondDeliveryForbiddenError")))) {
        path = "vehicle.secondDelivery.appointment";
        appointment_path = (_runtime_1.py.str(path) + ".appointment");
        appointment = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "appointment", appointment_path], null);
        return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryAppointmentForbidden, [], Object.assign({}, { "message": _runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(path) + ".message")], null) }, { "redacted_email": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "redactedEmail", (_runtime_1.py.str(path) + ".redactedEmail")], null) }, { "redacted_phone_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "redactedPhoneNumber", (_runtime_1.py.str(path) + ".redactedPhoneNumber")], null) }, { "appointment": _runtime_1.py.call(_second_delivery_detail_parsing_1._parse_appointment_reference, [appointment, appointment_path], null) }));
    }
    return _runtime_1.py.call(second_delivery_models_1.UnselectedSecondDeliveryResult, [typename], null);
}
/** Parse at-home second-delivery time slots. */
function parse_second_delivery_home_time_slots(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse at-home second-delivery time slots. */
    return _runtime_1.py.call(_second_delivery_detail_parsing_1._parse_time_slots, [data, "atHome"], null);
}
/** Parse at-hub second-delivery time slots. */
function parse_second_delivery_hub_time_slots(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse at-hub second-delivery time slots. */
    return _runtime_1.py.call(_second_delivery_detail_parsing_1._parse_time_slots, [data, "atHub"], null);
}
/** Parse virtual second-delivery time slots. */
function parse_second_delivery_virtual_time_slots(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse virtual second-delivery time slots. */
    return _runtime_1.py.call(_second_delivery_detail_parsing_1._parse_time_slots, [data, "atVirtual"], null);
}
/** Parse second-delivery eligibility and CTA state. */
function parse_second_delivery_eligibility(...__args) {
    let cta, cta_path, eligibility, eligibility_path, second_delivery;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse second-delivery eligibility and CTA state. */
    second_delivery = _runtime_1.py.call(_second_delivery_detail_parsing_1._second_delivery, [data], null);
    if (_runtime_1.py.truth(((second_delivery === null)))) {
        return null;
    }
    eligibility_path = "vehicle.secondDelivery.eligibility";
    eligibility = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [second_delivery, "eligibility", eligibility_path], null);
    cta_path = "vehicle.secondDelivery.cta";
    cta = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [second_delivery, "cta", cta_path], null);
    return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryEligibility, [], Object.assign({}, { "result": _runtime_1.py.call(_second_delivery_detail_parsing_1._parse_eligibility_result, [eligibility, eligibility_path], null) }, { "call_to_action": _runtime_1.py.call(_second_delivery_detail_parsing_1._parse_call_to_action, [cta, cta_path], null) }));
}
/** Parse every selected second-delivery address-validation branch. */
function parse_second_delivery_address_validation(...__args) {
    let address, address_path, path, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected second-delivery address-validation branch. */
    path = "vehicle.secondDelivery.validateAddress";
    root = _runtime_1.py.call(_second_delivery_detail_parsing_1._second_delivery_field, [data, "validateAddress"], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, path], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ValidSecondDeliveryAddress")))) {
        return _runtime_1.py.call(second_delivery_models_1.ValidSecondDeliveryAddress, [_runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "valid", (_runtime_1.py.str(path) + ".valid")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "InvalidSecondDeliveryAddress")))) {
        address_path = (_runtime_1.py.str(path) + ".dealerAddress");
        address = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "dealerAddress", address_path], null);
        return _runtime_1.py.call(second_delivery_models_1.InvalidSecondDeliveryAddress, [], Object.assign({}, { "valid": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "valid", (_runtime_1.py.str(path) + ".valid")], null) }, { "dealer_address": _runtime_1.py.call(_second_delivery_detail_parsing_1._parse_address, [address, address_path], null) }));
    }
    return _runtime_1.py.call(second_delivery_models_1.UnselectedSecondDeliveryResult, [typename], null);
}
/** Parse every selected second-delivery cancellation branch. */
function parse_cancel_second_delivery_appointment(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected second-delivery cancellation branch. */
    return _runtime_1.py.call(_second_delivery_value_parsing_1._parse_operation_result, [data, "cancelSecondDeliveryAppointment", "CancelSecondDeliveryAppointmentSuccessResponse", new Set(["CancelSecondDeliveryAppointmentUnknownErrorResponse"])], null);
}
/** Parse every selected second-delivery creation branch. */
function parse_create_second_delivery_appointment(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected second-delivery creation branch. */
    return _runtime_1.py.call(_second_delivery_value_parsing_1._parse_operation_result, [data, "createSecondDeliveryAppointment", "CreateSecondDeliveryAppointmentSuccessResponse", new Set(["CreateSecondDeliveryInvalidTimeSlotErrorResponse", "CreateSecondDeliveryAppointmentUnknownErrorResponse"])], null);
}
/** Parse every selected authentication-code delivery branch. */
function parse_second_delivery_send_auth_code(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected authentication-code delivery branch. */
    return _runtime_1.py.call(_second_delivery_value_parsing_1._parse_operation_result, [data, "secondDeliverySendAuthCode", "SecondDeliverySendAuthCodeSuccessResponse", new Set(["SecondDeliverySendAuthCodeErrorInvalidAccessTokenResponse"])], null);
}
/** Parse every selected authentication-code verification branch. */
function parse_second_delivery_verify_auth_code(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected authentication-code verification branch. */
    return _runtime_1.py.call(_second_delivery_value_parsing_1._parse_operation_result, [data, "secondDeliveryVerifyAuthCode", "SecondDeliveryVerifyAuthCodeSuccessResponse", new Set(["SecondDeliveryVerifyAuthCodeErrorInvalidAuthResponse"])], null);
}
/** Parse every selected second-delivery update branch. */
function parse_update_second_delivery_appointment(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected second-delivery update branch. */
    return _runtime_1.py.call(_second_delivery_value_parsing_1._parse_operation_result, [data, "updateSecondDeliveryAppointment", "UpdateSecondDeliveryAppointmentSuccessResponse", new Set(["UpdateSecondDeliveryUpdateAppointmentTooSoonErrorResponse", "UpdateSecondDeliveryAppointmentUnknownErrorResponse"])], null);
}
//# sourceMappingURL=_second_delivery_public_parsing.js.map