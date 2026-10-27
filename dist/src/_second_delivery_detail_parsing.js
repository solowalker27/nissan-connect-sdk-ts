"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnselectedSecondDeliveryResult = exports.SecondDeliveryTimeSlots = exports.SecondDeliveryTimeSlot = exports.SecondDeliverySlotsByDate = exports.SecondDeliveryMarketingVersion = exports.SecondDeliveryMarketingMessage = exports.SecondDeliveryLeadCar = exports.SecondDeliveryHub = exports.SecondDeliveryEligible = exports.SecondDeliveryEligibilityError = exports.SecondDeliveryDealer = exports.SecondDeliveryCoordinates = exports.SecondDeliveryContact = exports.SecondDeliveryCallToAction = exports.SecondDeliveryBookedAppointment = exports.SecondDeliveryAppointmentStatus = exports.SecondDeliveryAppointmentReference = exports.SecondDeliveryAppointmentCompleted = exports.SecondDeliveryAppointmentBooked = exports.SecondDeliveryAddressNotServiced = exports.SecondDeliveryAddress = exports.SecondDeliveryAppointmentMode = exports.ResponseError = exports._typename = exports._typed_object = exports._root = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_int = exports._required_nullable_bool = exports._required_field = exports._enum = exports._required_nullable_float = exports._required_nullable_datetime = exports._required_datetime = void 0;
exports._second_delivery = _second_delivery;
exports._second_delivery_field = _second_delivery_field;
exports._parse_booked_appointment = _parse_booked_appointment;
exports._parse_appointment_reference = _parse_appointment_reference;
exports._parse_time_slots = _parse_time_slots;
exports._parse_slots_by_date = _parse_slots_by_date;
exports._parse_eligibility_result = _parse_eligibility_result;
exports._parse_call_to_action = _parse_call_to_action;
exports._parse_lead_car = _parse_lead_car;
exports._parse_hub = _parse_hub;
exports._parse_address = _parse_address;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _second_delivery_value_parsing_1 = require("./_second_delivery_value_parsing");
Object.defineProperty(exports, "_required_datetime", { enumerable: true, get: function () { return _second_delivery_value_parsing_1._required_datetime; } });
Object.defineProperty(exports, "_required_nullable_datetime", { enumerable: true, get: function () { return _second_delivery_value_parsing_1._required_nullable_datetime; } });
Object.defineProperty(exports, "_required_nullable_float", { enumerable: true, get: function () { return _second_delivery_value_parsing_1._required_nullable_float; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_enum", { enumerable: true, get: function () { return account_parsing_1._enum; } });
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return account_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return account_parsing_1._root; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return account_parsing_1._typed_object; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const second_delivery_inputs_1 = require("./second_delivery_inputs");
Object.defineProperty(exports, "SecondDeliveryAppointmentMode", { enumerable: true, get: function () { return second_delivery_inputs_1.SecondDeliveryAppointmentMode; } });
const second_delivery_models_1 = require("./second_delivery_models");
Object.defineProperty(exports, "SecondDeliveryAddress", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryAddress; } });
Object.defineProperty(exports, "SecondDeliveryAddressNotServiced", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryAddressNotServiced; } });
Object.defineProperty(exports, "SecondDeliveryAppointmentBooked", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryAppointmentBooked; } });
Object.defineProperty(exports, "SecondDeliveryAppointmentCompleted", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryAppointmentCompleted; } });
Object.defineProperty(exports, "SecondDeliveryAppointmentReference", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryAppointmentReference; } });
Object.defineProperty(exports, "SecondDeliveryAppointmentStatus", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryAppointmentStatus; } });
Object.defineProperty(exports, "SecondDeliveryBookedAppointment", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryBookedAppointment; } });
Object.defineProperty(exports, "SecondDeliveryCallToAction", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryCallToAction; } });
Object.defineProperty(exports, "SecondDeliveryContact", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryContact; } });
Object.defineProperty(exports, "SecondDeliveryCoordinates", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryCoordinates; } });
Object.defineProperty(exports, "SecondDeliveryDealer", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryDealer; } });
Object.defineProperty(exports, "SecondDeliveryEligibilityError", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryEligibilityError; } });
Object.defineProperty(exports, "SecondDeliveryEligible", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryEligible; } });
Object.defineProperty(exports, "SecondDeliveryHub", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryHub; } });
Object.defineProperty(exports, "SecondDeliveryLeadCar", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryLeadCar; } });
Object.defineProperty(exports, "SecondDeliveryMarketingMessage", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryMarketingMessage; } });
Object.defineProperty(exports, "SecondDeliveryMarketingVersion", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryMarketingVersion; } });
Object.defineProperty(exports, "SecondDeliverySlotsByDate", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliverySlotsByDate; } });
Object.defineProperty(exports, "SecondDeliveryTimeSlot", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryTimeSlot; } });
Object.defineProperty(exports, "SecondDeliveryTimeSlots", { enumerable: true, get: function () { return second_delivery_models_1.SecondDeliveryTimeSlots; } });
Object.defineProperty(exports, "UnselectedSecondDeliveryResult", { enumerable: true, get: function () { return second_delivery_models_1.UnselectedSecondDeliveryResult; } });
/** Translated upstream _second_delivery. */
function _second_delivery(...__args) {
    let vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    vehicle = _runtime_1.py.call(account_parsing_1._root, [data, "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [vehicle, "secondDelivery", "vehicle.secondDelivery"], null);
}
/** Translated upstream _second_delivery_field. */
function _second_delivery_field(...__args) {
    let second_delivery;
    let { "data": data, "field": field } = _runtime_1.py.bind(__args, ["data", "field"], {}, [], null, null);
    second_delivery = _runtime_1.py.call(_second_delivery, [data], null);
    if (_runtime_1.py.truth(((second_delivery === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [second_delivery, field, ("vehicle.secondDelivery." + _runtime_1.py.str(field))], null);
}
/** Translated upstream _parse_booked_appointment. */
function _parse_booked_appointment(...__args) {
    let address, address_path, contact, contact_path, hub, hub_path, mode;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    address_path = (_runtime_1.py.str(path) + ".address");
    address = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "address", address_path], null);
    contact_path = (_runtime_1.py.str(path) + ".contact");
    contact = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "contact", contact_path], null);
    hub_path = (_runtime_1.py.str(path) + ".hub");
    hub = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "hub", hub_path], null);
    mode = _runtime_1.py.call(account_parsing_1._required_field, [value, "mode", (_runtime_1.py.str(path) + ".mode")], null);
    return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryBookedAppointment, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "activity_id": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "activityId", (_runtime_1.py.str(path) + ".activityId")], null) }, { "begins_at": _runtime_1.py.call(_second_delivery_value_parsing_1._required_nullable_datetime, [value, "beginsAt", (_runtime_1.py.str(path) + ".beginsAt")], null) }, { "address": _runtime_1.py.call(_parse_address, [address, address_path], null) }, { "contact": (_runtime_1.py.truth(((contact === null))) ? null : _runtime_1.py.call(second_delivery_models_1.SecondDeliveryContact, [], Object.assign({}, { "first_name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [contact, "firstName", (_runtime_1.py.str(contact_path) + ".firstName")], null) }, { "last_name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [contact, "lastName", (_runtime_1.py.str(contact_path) + ".lastName")], null) }, { "phone_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [contact, "phoneNumber", (_runtime_1.py.str(contact_path) + ".phoneNumber")], null) }, { "email": _runtime_1.py.call(account_parsing_1._required_nullable_string, [contact, "email", (_runtime_1.py.str(contact_path) + ".email")], null) }))) }, { "redelivery_notes": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "redeliveryNotes", (_runtime_1.py.str(path) + ".redeliveryNotes")], null) }, { "feature_notes": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "featureNotes", (_runtime_1.py.str(path) + ".featureNotes")], null) }, { "hub": _runtime_1.py.call(_parse_hub, [hub, hub_path], Object.assign({}, { "include_dealer": true })) }, { "mode": (_runtime_1.py.truth(((mode === null))) ? null : _runtime_1.py.call(account_parsing_1._enum, [mode, second_delivery_inputs_1.SecondDeliveryAppointmentMode, (_runtime_1.py.str(path) + ".mode")], null)) }));
}
/** Translated upstream _parse_appointment_reference. */
function _parse_appointment_reference(...__args) {
    let status;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    status = _runtime_1.py.call(account_parsing_1._required_field, [value, "status", (_runtime_1.py.str(path) + ".status")], null);
    return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryAppointmentReference, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "access_token": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "accessToken", (_runtime_1.py.str(path) + ".accessToken")], null) }, { "status": (_runtime_1.py.truth(((status === null))) ? null : _runtime_1.py.call(account_parsing_1._enum, [status, second_delivery_models_1.SecondDeliveryAppointmentStatus, (_runtime_1.py.str(path) + ".status")], null)) }));
}
/** Translated upstream _parse_time_slots. */
function _parse_time_slots(...__args) {
    let appointments, appointments_path, hub, hub_path, index, item, item_path, path, root, second_delivery, slots, slots_value, typename;
    let { "data": data, "mode_field": mode_field } = _runtime_1.py.bind(__args, ["data", "mode_field"], {}, [], null, null);
    second_delivery = _runtime_1.py.call(_second_delivery, [data], null);
    if (_runtime_1.py.truth(((second_delivery === null)))) {
        return null;
    }
    appointments_path = "vehicle.secondDelivery.appointments";
    appointments = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [second_delivery, "appointments", appointments_path], null);
    if (_runtime_1.py.truth(((appointments === null)))) {
        return null;
    }
    path = (_runtime_1.py.str(appointments_path) + "." + _runtime_1.py.str(mode_field));
    root = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [appointments, mode_field, path], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, path], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "SecondDeliveryAppointmentTimeSlotsErrorAddressNotServicedResponse")))) {
        return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryAddressNotServiced, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(path) + ".message")], null)], null);
    }
    if (_runtime_1.py.truth((!_runtime_1.py.eq(typename, "SecondDeliveryAppointmentTimeSlotsSuccessResponse")))) {
        return _runtime_1.py.call(second_delivery_models_1.UnselectedSecondDeliveryResult, [typename], null);
    }
    hub_path = (_runtime_1.py.str(path) + ".hub");
    hub = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "hub", hub_path], null);
    slots_value = _runtime_1.py.call(account_parsing_1._required_field, [root, "slotsByDate", (_runtime_1.py.str(path) + ".slotsByDate")], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [slots_value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + ".slotsByDate is not a list")], null);
    }
    slots = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [slots_value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(slots, "append"), [null], null);
            continue;
        }
        item_path = (_runtime_1.py.str(path) + ".slotsByDate[" + _runtime_1.py.str(index) + "]");
        _runtime_1.py.call(_runtime_1.py.attr(slots, "append"), [_runtime_1.py.call(_parse_slots_by_date, [_runtime_1.py.call(account_parsing_1._typed_object, [item, item_path], null), item_path], null)], null);
    }
    return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryTimeSlots, [_runtime_1.py.call(_parse_hub, [hub, hub_path], Object.assign({}, { "include_dealer": false })), _runtime_1.py.call(_runtime_1.py.tuple, [slots], null)], null);
}
/** Translated upstream _parse_slots_by_date. */
function _parse_slots_by_date(...__args) {
    let index, item, item_path, parsed, time_slot, time_slots, time_slots_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    time_slots_value = _runtime_1.py.call(account_parsing_1._required_field, [value, "timeslots", (_runtime_1.py.str(path) + ".timeslots")], null);
    time_slots = null;
    if (_runtime_1.py.truth(((time_slots_value !== null)))) {
        if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [time_slots_value, _runtime_1.py.list], null)))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + ".timeslots is not a list")], null);
        }
        parsed = [];
        for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [time_slots_value], null))) {
            if (_runtime_1.py.truth(((item === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed, "append"), [null], null);
                continue;
            }
            item_path = (_runtime_1.py.str(path) + ".timeslots[" + _runtime_1.py.str(index) + "]");
            time_slot = _runtime_1.py.call(account_parsing_1._typed_object, [item, item_path], null);
            _runtime_1.py.call(_runtime_1.py.attr(parsed, "append"), [_runtime_1.py.call(second_delivery_models_1.SecondDeliveryTimeSlot, [], Object.assign({}, { "time": _runtime_1.py.call(_second_delivery_value_parsing_1._required_nullable_datetime, [time_slot, "time", (_runtime_1.py.str(item_path) + ".time")], null) }, { "id": _runtime_1.py.call(account_parsing_1._required_nullable_int, [time_slot, "id", (_runtime_1.py.str(item_path) + ".id")], null) }))], null);
        }
        time_slots = _runtime_1.py.call(_runtime_1.py.tuple, [parsed], null);
    }
    return _runtime_1.py.call(second_delivery_models_1.SecondDeliverySlotsByDate, [], Object.assign({}, { "date": _runtime_1.py.call(_second_delivery_value_parsing_1._required_datetime, [value, "date", (_runtime_1.py.str(path) + ".date")], null) }, { "time_slots": time_slots }));
}
/** Translated upstream _parse_eligibility_result. */
function _parse_eligibility_result(...__args) {
    let appointment, appointment_path, hub, hub_path, lead_car, lead_car_path, reference, typename;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "SecondDeliveryEligibilityResponseRDRRecordFound")))) {
        hub_path = (_runtime_1.py.str(path) + ".hub");
        hub = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "hub", hub_path], null);
        lead_car_path = (_runtime_1.py.str(path) + ".leadCar");
        lead_car = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "leadCar", lead_car_path], null);
        return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryEligible, [], Object.assign({}, { "hub": _runtime_1.py.call(_parse_hub, [hub, hub_path], Object.assign({}, { "include_dealer": true })) }, { "lead_car": _runtime_1.py.call(_parse_lead_car, [lead_car, lead_car_path], null) }, { "redelivery_lead_id": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "redeliveryLeadId", (_runtime_1.py.str(path) + ".redeliveryLeadId")], null) }, { "days_since_retail_sales_date": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "daysSinceRetailSalesDate", (_runtime_1.py.str(path) + ".daysSinceRetailSalesDate")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.contains(new Set(["SecondDeliveryEligibilityResponseAppointmentBooked", "SecondDeliveryEligibilityResponseAppointmentCompleted"]), typename)))) {
        appointment_path = (_runtime_1.py.str(path) + ".appointment");
        appointment = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "appointment", appointment_path], null);
        reference = _runtime_1.py.call(_parse_appointment_reference, [appointment, appointment_path], null);
        if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "SecondDeliveryEligibilityResponseAppointmentBooked")))) {
            return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryAppointmentBooked, [reference], null);
        }
        return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryAppointmentCompleted, [reference], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.contains(new Set(["SecondDeliveryEligibilityResponseNonParticipatingDealer", "SecondDeliveryEligibilityResponseVinNotFound"]), typename)))) {
        return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryEligibilityError, [typename, _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "message", (_runtime_1.py.str(path) + ".message")], null)], null);
    }
    return _runtime_1.py.call(second_delivery_models_1.UnselectedSecondDeliveryResult, [typename], null);
}
/** Translated upstream _parse_call_to_action. */
function _parse_call_to_action(...__args) {
    let discover, discover_path, marketing, marketing_path, marketing_result, version;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    marketing_path = (_runtime_1.py.str(path) + ".marketingMessage");
    marketing = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "marketingMessage", marketing_path], null);
    discover_path = (_runtime_1.py.str(path) + ".discover");
    discover = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "discover", discover_path], null);
    marketing_result = null;
    if (_runtime_1.py.truth(((marketing !== null)))) {
        version = _runtime_1.py.call(account_parsing_1._required_field, [marketing, "versionToDisplay", (_runtime_1.py.str(marketing_path) + ".versionToDisplay")], null);
        marketing_result = _runtime_1.py.call(second_delivery_models_1.SecondDeliveryMarketingMessage, [], Object.assign({}, { "version": (_runtime_1.py.truth(((version === null))) ? null : _runtime_1.py.call(account_parsing_1._enum, [version, second_delivery_models_1.SecondDeliveryMarketingVersion, (_runtime_1.py.str(marketing_path) + ".versionToDisplay")], null)) }, { "display_threshold_days": _runtime_1.py.call(account_parsing_1._required_nullable_int, [marketing, "displayMarketingMessageThresholdInDays", (_runtime_1.py.str(marketing_path) + ".displayMarketingMessageThresholdInDays")], null) }, { "remind_later_threshold_days": _runtime_1.py.call(account_parsing_1._required_nullable_int, [marketing, "remindMeLaterThresholdInDays", (_runtime_1.py.str(marketing_path) + ".remindMeLaterThresholdInDays")], null) }));
    }
    return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryCallToAction, [], Object.assign({}, { "marketing_message": marketing_result }, { "discover_prioritized": (_runtime_1.py.truth(((discover === null))) ? null : _runtime_1.py.call(account_parsing_1._required_nullable_bool, [discover, "prioritized", (_runtime_1.py.str(discover_path) + ".prioritized")], null)) }, { "days_since_purchased": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "daysSincePurchased", (_runtime_1.py.str(path) + ".daysSincePurchased")], null) }));
}
/** Translated upstream _parse_lead_car. */
function _parse_lead_car(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryLeadCar, [], Object.assign({}, { "trim": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "trim", (_runtime_1.py.str(path) + ".trim")], null) }, { "deleted": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "deleted", (_runtime_1.py.str(path) + ".deleted")], null) }, { "interior_color": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "interiorColor", (_runtime_1.py.str(path) + ".interiorColor")], null) }, { "retail_sales_date": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "retailSalesDate", (_runtime_1.py.str(path) + ".retailSalesDate")], null) }, { "plate": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "plate", (_runtime_1.py.str(path) + ".plate")], null) }, { "brand": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "brand", (_runtime_1.py.str(path) + ".brand")], null) }, { "year": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "year", (_runtime_1.py.str(path) + ".year")], null) }, { "model": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "model", (_runtime_1.py.str(path) + ".model")], null) }, { "mileage": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "mileage", (_runtime_1.py.str(path) + ".mileage")], null) }, { "lead_id": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "leadId", (_runtime_1.py.str(path) + ".leadId")], null) }, { "exterior_color": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "exteriorColor", (_runtime_1.py.str(path) + ".exteriorColor")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "vin": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "vin", (_runtime_1.py.str(path) + ".vin")], null) }, { "id": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }));
}
/** Translated upstream _parse_hub. */
function _parse_hub(...__args) {
    let address, address_path, dealer, dealer_path, dealer_value;
    let { "value": value, "path": path, "include_dealer": include_dealer } = _runtime_1.py.bind(__args, ["value", "path"], {}, ["include_dealer"], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    dealer = null;
    if (_runtime_1.py.truth(include_dealer)) {
        dealer_path = (_runtime_1.py.str(path) + ".dealer");
        dealer_value = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "dealer", dealer_path], null);
        if (_runtime_1.py.truth(((dealer_value !== null)))) {
            address_path = (_runtime_1.py.str(dealer_path) + ".address");
            address = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [dealer_value, "address", address_path], null);
            dealer = _runtime_1.py.call(second_delivery_models_1.SecondDeliveryDealer, [], Object.assign({}, { "code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [dealer_value, "code", (_runtime_1.py.str(dealer_path) + ".code")], null) }, { "address": _runtime_1.py.call(_parse_address, [address, address_path], null) }));
        }
    }
    return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryHub, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "timezone": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "timezone", (_runtime_1.py.str(path) + ".timezone")], null) }, { "dealer": dealer }));
}
/** Translated upstream _parse_address. */
function _parse_address(...__args) {
    let coordinate_path, coordinate_value, coordinates;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    coordinates = null;
    if (_runtime_1.py.truth((_runtime_1.py.contains(value, "coordinates")))) {
        coordinate_path = (_runtime_1.py.str(path) + ".coordinates");
        coordinate_value = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "coordinates", coordinate_path], null);
        if (_runtime_1.py.truth(((coordinate_value !== null)))) {
            coordinates = _runtime_1.py.call(second_delivery_models_1.SecondDeliveryCoordinates, [], Object.assign({}, { "latitude": _runtime_1.py.call(_second_delivery_value_parsing_1._required_nullable_float, [coordinate_value, "latitude", (_runtime_1.py.str(coordinate_path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_second_delivery_value_parsing_1._required_nullable_float, [coordinate_value, "longitude", (_runtime_1.py.str(coordinate_path) + ".longitude")], null) }));
        }
    }
    return _runtime_1.py.call(second_delivery_models_1.SecondDeliveryAddress, [], Object.assign({}, { "address_1": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "address1", (_runtime_1.py.str(path) + ".address1")], null) }, { "address_2": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "address2", (_runtime_1.py.str(path) + ".address2")], null) }, { "city": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "city", (_runtime_1.py.str(path) + ".city")], null) }, { "state": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "state", (_runtime_1.py.str(path) + ".state")], null) }, { "postal_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "postalCode", (_runtime_1.py.str(path) + ".postalCode")], null) }, { "country": (_runtime_1.py.truth((!_runtime_1.py.contains(value, "country"))) ? null : _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "country", (_runtime_1.py.str(path) + ".country")], null)) }, { "id": (_runtime_1.py.truth((!_runtime_1.py.contains(value, "id"))) ? null : _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "id", (_runtime_1.py.str(path) + ".id")], null)) }, { "coordinates": coordinates }));
}
//# sourceMappingURL=_second_delivery_detail_parsing.js.map