"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondDeliveryAppointmentInput = exports.SecondDeliveryContactInput = exports.SecondDeliveryAppointmentMode = exports.serialize_enum = exports.serialize_datetime = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.address_input = exports.AddressInput = void 0;
exports.second_delivery_appointment_variables = second_delivery_appointment_variables;
exports.update_second_delivery_appointment_variables = update_second_delivery_appointment_variables;
exports.second_delivery_home_slots_variables = second_delivery_home_slots_variables;
exports.second_delivery_location_slots_variables = second_delivery_location_slots_variables;
exports.second_delivery_send_auth_code_variables = second_delivery_send_auth_code_variables;
exports.second_delivery_verify_auth_code_variables = second_delivery_verify_auth_code_variables;
exports._contact_input = _contact_input;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "AddressInput", { enumerable: true, get: function () { return common_inputs_1.AddressInput; } });
Object.defineProperty(exports, "address_input", { enumerable: true, get: function () { return common_inputs_1.address_input; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_datetime", { enumerable: true, get: function () { return graphql_input_1.serialize_datetime; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
exports.SecondDeliveryAppointmentMode = _runtime_1.py.enumType("SecondDeliveryAppointmentMode", { "AT_HOME": "AT_HOME", "AT_DEALER": "AT_DEALER", "VIRTUAL": "VIRTUAL", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Required second-delivery customer contact fields. */
class SecondDeliveryContactInput {
    first_name;
    last_name;
    phone_number;
    email;
    static __fields = [["first_name", _runtime_1.py.MISSING], ["last_name", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["email", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryContactInput, __args); Object.freeze(this); }
}
exports.SecondDeliveryContactInput = SecondDeliveryContactInput;
_runtime_1.py.classType(SecondDeliveryContactInput);
/** Fields used to create or replace a second-delivery appointment. */
class SecondDeliveryAppointmentInput {
    vin;
    address;
    contact;
    time_slot_id;
    redelivery_notes;
    feature_notes;
    mode;
    static __fields = [["vin", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["contact", _runtime_1.py.MISSING], ["time_slot_id", _runtime_1.py.MISSING], ["redelivery_notes", graphql_input_1.UNSET], ["feature_notes", graphql_input_1.UNSET], ["mode", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryAppointmentInput, __args); Object.freeze(this); }
}
exports.SecondDeliveryAppointmentInput = SecondDeliveryAppointmentInput;
_runtime_1.py.classType(SecondDeliveryAppointmentInput);
/** Serialize second-delivery appointment creation variables. */
function second_delivery_appointment_variables(...__args) {
    let mode;
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize second-delivery appointment creation variables. */
    mode = _runtime_1.py.attr(config, "mode");
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "mode"), exports.SecondDeliveryAppointmentMode], null))) {
        mode = _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(config, "mode")], null);
    }
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": _runtime_1.py.attr(config, "vin") }, { "address": _runtime_1.py.call(common_inputs_1.address_input, [_runtime_1.py.attr(config, "address")], null) }, { "contactInformation": _runtime_1.py.call(_contact_input, [_runtime_1.py.attr(config, "contact")], null) }, { "timeSlotId": _runtime_1.py.attr(config, "time_slot_id") }, { "redeliveryNotes": _runtime_1.py.attr(config, "redelivery_notes") }, { "featureNotes": _runtime_1.py.attr(config, "feature_notes") }, { "mode": mode }));
}
/** Serialize second-delivery appointment replacement variables. */
function update_second_delivery_appointment_variables(...__args) {
    let { "activity_id": activity_id, "config": config } = _runtime_1.py.bind(__args, ["activity_id", "config"], {}, [], null, null);
    /** Serialize second-delivery appointment replacement variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": _runtime_1.py.attr(config, "vin") }, { "activityId": activity_id }, { "address": _runtime_1.py.call(common_inputs_1.address_input, [_runtime_1.py.attr(config, "address")], null) }, { "contactInformation": _runtime_1.py.call(_contact_input, [_runtime_1.py.attr(config, "contact")], null) }, { "timeSlotId": _runtime_1.py.attr(config, "time_slot_id") }, { "redeliveryNotes": _runtime_1.py.attr(config, "redelivery_notes") }, { "featureNotes": _runtime_1.py.attr(config, "feature_notes") }));
}
/** Serialize second-delivery at-home time-slot variables. */
function second_delivery_home_slots_variables(...__args) {
    let { "vin": vin, "address": address, "hub_id": hub_id, "start": start, "end": end } = _runtime_1.py.bind(__args, ["vin", "address", "hub_id", "start", "end"], {}, [], null, null);
    /** Serialize second-delivery at-home time-slot variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["address"]: _runtime_1.py.call(common_inputs_1.address_input, [address], null) }, { ["hubId"]: hub_id }, { ["start"]: _runtime_1.py.call(graphql_input_1.serialize_datetime, [start], null) }, { ["end"]: _runtime_1.py.call(graphql_input_1.serialize_datetime, [end], null) });
}
/** Serialize at-hub or virtual second-delivery time-slot variables. */
function second_delivery_location_slots_variables(...__args) {
    let { "hub_id": hub_id, "postal_code": postal_code, "start": start, "end": end, "vin": vin } = _runtime_1.py.bind(__args, ["hub_id", "postal_code", "start", "end", "vin"], {}, [], null, null);
    /** Serialize at-hub or virtual second-delivery time-slot variables. */
    return Object.assign({}, { ["hubId"]: hub_id }, { ["zipCode"]: postal_code }, { ["start"]: _runtime_1.py.call(graphql_input_1.serialize_datetime, [start], null) }, { ["end"]: _runtime_1.py.call(graphql_input_1.serialize_datetime, [end], null) }, { ["vin"]: vin });
}
/** Serialize second-delivery authentication-code delivery variables. */
function second_delivery_send_auth_code_variables(...__args) {
    let { "appointment_id": appointment_id, "access_token": access_token, "send_via_email": send_via_email, "send_via_sms": send_via_sms } = _runtime_1.py.bind(__args, ["appointment_id", "access_token", "send_via_email", "send_via_sms"], {}, [], null, null);
    /** Serialize second-delivery authentication-code delivery variables. */
    return Object.assign({}, { ["appointmentId"]: appointment_id }, { ["accessToken"]: access_token }, { ["sendViaEmail"]: send_via_email }, { ["sendViaSMS"]: send_via_sms });
}
/** Serialize second-delivery authentication-code verification variables. */
function second_delivery_verify_auth_code_variables(...__args) {
    let { "appointment_id": appointment_id, "access_token": access_token, "auth_code": auth_code } = _runtime_1.py.bind(__args, ["appointment_id", "access_token", "auth_code"], {}, [], null, null);
    /** Serialize second-delivery authentication-code verification variables. */
    return Object.assign({}, { ["appointmentId"]: appointment_id }, { ["accessToken"]: access_token }, { ["authCode"]: auth_code });
}
/** Translated upstream _contact_input. */
function _contact_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return Object.assign({}, { ["firstName"]: _runtime_1.py.attr(value, "first_name") }, { ["lastName"]: _runtime_1.py.attr(value, "last_name") }, { ["phoneNumber"]: _runtime_1.py.attr(value, "phone_number") }, { ["email"]: _runtime_1.py.attr(value, "email") });
}
//# sourceMappingURL=second_delivery_inputs.js.map