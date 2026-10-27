"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondDeliveryOperationError = exports.SecondDeliveryOperationSuccess = exports.InvalidSecondDeliveryAddress = exports.ValidSecondDeliveryAddress = exports.SecondDeliveryEligibility = exports.SecondDeliveryCallToAction = exports.SecondDeliveryMarketingMessage = exports.SecondDeliveryEligibilityError = exports.SecondDeliveryAppointmentCompleted = exports.SecondDeliveryAppointmentBooked = exports.SecondDeliveryEligible = exports.SecondDeliveryLeadCar = exports.SecondDeliveryAddressNotServiced = exports.SecondDeliveryTimeSlots = exports.SecondDeliverySlotsByDate = exports.SecondDeliveryTimeSlot = exports.UnselectedSecondDeliveryResult = exports.SecondDeliveryAppointmentForbidden = exports.SecondDeliveryAppointmentNotFound = exports.SecondDeliveryBookedAppointment = exports.SecondDeliveryAppointmentReference = exports.SecondDeliveryContact = exports.SecondDeliveryHub = exports.SecondDeliveryDealer = exports.SecondDeliveryAddress = exports.SecondDeliveryCoordinates = exports.SecondDeliveryMarketingVersion = exports.SecondDeliveryAppointmentStatus = exports.SecondDeliveryAppointmentMode = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const second_delivery_inputs_1 = require("./second_delivery_inputs");
Object.defineProperty(exports, "SecondDeliveryAppointmentMode", { enumerable: true, get: function () { return second_delivery_inputs_1.SecondDeliveryAppointmentMode; } });
exports.SecondDeliveryAppointmentStatus = _runtime_1.py.enumType("SecondDeliveryAppointmentStatus", { "BOOKED": "BOOKED", "COMPLETED": "COMPLETED", "CANCELLED": "CANCELLED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.SecondDeliveryMarketingVersion = _runtime_1.py.enumType("SecondDeliveryMarketingVersion", { "REMIND_ME_LATER": "REMIND_ME_LATER", "NO_THANKS": "NO_THANKS", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Nullable second-delivery address coordinates. */
class SecondDeliveryCoordinates {
    latitude;
    longitude;
    static __fields = [["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryCoordinates, __args); Object.freeze(this); }
}
exports.SecondDeliveryCoordinates = SecondDeliveryCoordinates;
_runtime_1.py.classType(SecondDeliveryCoordinates);
/** Nullable address fields selected by second-delivery operations. */
class SecondDeliveryAddress {
    address_1;
    address_2;
    city;
    state;
    postal_code;
    country;
    id;
    coordinates;
    static __fields = [["address_1", _runtime_1.py.MISSING], ["address_2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING], ["id", null], ["coordinates", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryAddress, __args); Object.freeze(this); }
}
exports.SecondDeliveryAddress = SecondDeliveryAddress;
_runtime_1.py.classType(SecondDeliveryAddress);
/** Nullable second-delivery dealer details. */
class SecondDeliveryDealer {
    code;
    address;
    static __fields = [["code", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryDealer, __args); Object.freeze(this); }
}
exports.SecondDeliveryDealer = SecondDeliveryDealer;
_runtime_1.py.classType(SecondDeliveryDealer);
/** Nullable second-delivery hub details. */
class SecondDeliveryHub {
    id;
    timezone;
    dealer;
    static __fields = [["id", _runtime_1.py.MISSING], ["timezone", _runtime_1.py.MISSING], ["dealer", null]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryHub, __args); Object.freeze(this); }
}
exports.SecondDeliveryHub = SecondDeliveryHub;
_runtime_1.py.classType(SecondDeliveryHub);
/** Nullable booked-appointment contact fields. */
class SecondDeliveryContact {
    first_name;
    last_name;
    phone_number;
    email;
    static __fields = [["first_name", _runtime_1.py.MISSING], ["last_name", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["email", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryContact, __args); Object.freeze(this); }
}
exports.SecondDeliveryContact = SecondDeliveryContact;
_runtime_1.py.classType(SecondDeliveryContact);
/** Nullable appointment identity returned by restricted flows. */
class SecondDeliveryAppointmentReference {
    id;
    access_token;
    status;
    static __fields = [["id", _runtime_1.py.MISSING], ["access_token", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryAppointmentReference, __args); Object.freeze(this); }
}
exports.SecondDeliveryAppointmentReference = SecondDeliveryAppointmentReference;
_runtime_1.py.classType(SecondDeliveryAppointmentReference);
/** Existing booked second-delivery appointment. */
class SecondDeliveryBookedAppointment {
    id;
    activity_id;
    begins_at;
    address;
    contact;
    redelivery_notes;
    feature_notes;
    hub;
    mode;
    static __fields = [["id", _runtime_1.py.MISSING], ["activity_id", _runtime_1.py.MISSING], ["begins_at", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["contact", _runtime_1.py.MISSING], ["redelivery_notes", _runtime_1.py.MISSING], ["feature_notes", _runtime_1.py.MISSING], ["hub", _runtime_1.py.MISSING], ["mode", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryBookedAppointment, __args); Object.freeze(this); }
}
exports.SecondDeliveryBookedAppointment = SecondDeliveryBookedAppointment;
_runtime_1.py.classType(SecondDeliveryBookedAppointment);
/** No booked second-delivery appointment exists. */
class SecondDeliveryAppointmentNotFound {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryAppointmentNotFound, __args); Object.freeze(this); }
}
exports.SecondDeliveryAppointmentNotFound = SecondDeliveryAppointmentNotFound;
_runtime_1.py.classType(SecondDeliveryAppointmentNotFound);
/** Appointment requires an additional authorization flow. */
class SecondDeliveryAppointmentForbidden {
    message;
    redacted_email;
    redacted_phone_number;
    appointment;
    static __fields = [["message", _runtime_1.py.MISSING], ["redacted_email", _runtime_1.py.MISSING], ["redacted_phone_number", _runtime_1.py.MISSING], ["appointment", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryAppointmentForbidden, __args); Object.freeze(this); }
}
exports.SecondDeliveryAppointmentForbidden = SecondDeliveryAppointmentForbidden;
_runtime_1.py.classType(SecondDeliveryAppointmentForbidden);
/** Future second-delivery union branch selected only by type name. */
class UnselectedSecondDeliveryResult {
    typename;
    static __fields = [["typename", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnselectedSecondDeliveryResult, __args); Object.freeze(this); }
}
exports.UnselectedSecondDeliveryResult = UnselectedSecondDeliveryResult;
_runtime_1.py.classType(UnselectedSecondDeliveryResult);
/** Nullable second-delivery time-slot fields. */
class SecondDeliveryTimeSlot {
    time;
    id;
    static __fields = [["time", _runtime_1.py.MISSING], ["id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryTimeSlot, __args); Object.freeze(this); }
}
exports.SecondDeliveryTimeSlot = SecondDeliveryTimeSlot;
_runtime_1.py.classType(SecondDeliveryTimeSlot);
/** Required date and nullable slots for that date. */
class SecondDeliverySlotsByDate {
    date;
    time_slots;
    static __fields = [["date", _runtime_1.py.MISSING], ["time_slots", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliverySlotsByDate, __args); Object.freeze(this); }
}
exports.SecondDeliverySlotsByDate = SecondDeliverySlotsByDate;
_runtime_1.py.classType(SecondDeliverySlotsByDate);
/** Successful second-delivery time-slot search. */
class SecondDeliveryTimeSlots {
    hub;
    slots_by_date;
    static __fields = [["hub", _runtime_1.py.MISSING], ["slots_by_date", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryTimeSlots, __args); Object.freeze(this); }
}
exports.SecondDeliveryTimeSlots = SecondDeliveryTimeSlots;
_runtime_1.py.classType(SecondDeliveryTimeSlots);
/** The supplied address is outside the second-delivery service area. */
class SecondDeliveryAddressNotServiced {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryAddressNotServiced, __args); Object.freeze(this); }
}
exports.SecondDeliveryAddressNotServiced = SecondDeliveryAddressNotServiced;
_runtime_1.py.classType(SecondDeliveryAddressNotServiced);
/** Nullable lead-vehicle fields used by second-delivery eligibility. */
class SecondDeliveryLeadCar {
    trim;
    deleted;
    interior_color;
    retail_sales_date;
    plate;
    brand;
    year;
    model;
    mileage;
    lead_id;
    exterior_color;
    name;
    vin;
    id;
    static __fields = [["trim", _runtime_1.py.MISSING], ["deleted", _runtime_1.py.MISSING], ["interior_color", _runtime_1.py.MISSING], ["retail_sales_date", _runtime_1.py.MISSING], ["plate", _runtime_1.py.MISSING], ["brand", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING], ["model", _runtime_1.py.MISSING], ["mileage", _runtime_1.py.MISSING], ["lead_id", _runtime_1.py.MISSING], ["exterior_color", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["vin", _runtime_1.py.MISSING], ["id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryLeadCar, __args); Object.freeze(this); }
}
exports.SecondDeliveryLeadCar = SecondDeliveryLeadCar;
_runtime_1.py.classType(SecondDeliveryLeadCar);
/** Eligible retail-delivery record details. */
class SecondDeliveryEligible {
    hub;
    lead_car;
    redelivery_lead_id;
    days_since_retail_sales_date;
    static __fields = [["hub", _runtime_1.py.MISSING], ["lead_car", _runtime_1.py.MISSING], ["redelivery_lead_id", _runtime_1.py.MISSING], ["days_since_retail_sales_date", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryEligible, __args); Object.freeze(this); }
}
exports.SecondDeliveryEligible = SecondDeliveryEligible;
_runtime_1.py.classType(SecondDeliveryEligible);
/** Eligibility indicates an appointment is already booked. */
class SecondDeliveryAppointmentBooked {
    appointment;
    static __fields = [["appointment", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryAppointmentBooked, __args); Object.freeze(this); }
}
exports.SecondDeliveryAppointmentBooked = SecondDeliveryAppointmentBooked;
_runtime_1.py.classType(SecondDeliveryAppointmentBooked);
/** Eligibility indicates the appointment was completed. */
class SecondDeliveryAppointmentCompleted {
    appointment;
    static __fields = [["appointment", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryAppointmentCompleted, __args); Object.freeze(this); }
}
exports.SecondDeliveryAppointmentCompleted = SecondDeliveryAppointmentCompleted;
_runtime_1.py.classType(SecondDeliveryAppointmentCompleted);
/** Known eligibility error branch with nullable message. */
class SecondDeliveryEligibilityError {
    typename;
    message;
    static __fields = [["typename", _runtime_1.py.MISSING], ["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryEligibilityError, __args); Object.freeze(this); }
}
exports.SecondDeliveryEligibilityError = SecondDeliveryEligibilityError;
_runtime_1.py.classType(SecondDeliveryEligibilityError);
/** Nullable marketing message CTA configuration. */
class SecondDeliveryMarketingMessage {
    version;
    display_threshold_days;
    remind_later_threshold_days;
    static __fields = [["version", _runtime_1.py.MISSING], ["display_threshold_days", _runtime_1.py.MISSING], ["remind_later_threshold_days", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryMarketingMessage, __args); Object.freeze(this); }
}
exports.SecondDeliveryMarketingMessage = SecondDeliveryMarketingMessage;
_runtime_1.py.classType(SecondDeliveryMarketingMessage);
/** Nullable second-delivery CTA state. */
class SecondDeliveryCallToAction {
    marketing_message;
    discover_prioritized;
    days_since_purchased;
    static __fields = [["marketing_message", _runtime_1.py.MISSING], ["discover_prioritized", _runtime_1.py.MISSING], ["days_since_purchased", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryCallToAction, __args); Object.freeze(this); }
}
exports.SecondDeliveryCallToAction = SecondDeliveryCallToAction;
_runtime_1.py.classType(SecondDeliveryCallToAction);
/** Eligibility union and independent CTA state. */
class SecondDeliveryEligibility {
    result;
    call_to_action;
    static __fields = [["result", _runtime_1.py.MISSING], ["call_to_action", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryEligibility, __args); Object.freeze(this); }
}
exports.SecondDeliveryEligibility = SecondDeliveryEligibility;
_runtime_1.py.classType(SecondDeliveryEligibility);
/** Nullable positive address-validation flag. */
class ValidSecondDeliveryAddress {
    valid;
    static __fields = [["valid", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ValidSecondDeliveryAddress, __args); Object.freeze(this); }
}
exports.ValidSecondDeliveryAddress = ValidSecondDeliveryAddress;
_runtime_1.py.classType(ValidSecondDeliveryAddress);
/** Nullable negative flag and the dealer address to use instead. */
class InvalidSecondDeliveryAddress {
    valid;
    dealer_address;
    static __fields = [["valid", _runtime_1.py.MISSING], ["dealer_address", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, InvalidSecondDeliveryAddress, __args); Object.freeze(this); }
}
exports.InvalidSecondDeliveryAddress = InvalidSecondDeliveryAddress;
_runtime_1.py.classType(InvalidSecondDeliveryAddress);
/** Required success flag returned by a second-delivery mutation. */
class SecondDeliveryOperationSuccess {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryOperationSuccess, __args); Object.freeze(this); }
}
exports.SecondDeliveryOperationSuccess = SecondDeliveryOperationSuccess;
_runtime_1.py.classType(SecondDeliveryOperationSuccess);
/** Known second-delivery mutation error with nullable message. */
class SecondDeliveryOperationError {
    typename;
    message;
    static __fields = [["typename", _runtime_1.py.MISSING], ["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SecondDeliveryOperationError, __args); Object.freeze(this); }
}
exports.SecondDeliveryOperationError = SecondDeliveryOperationError;
_runtime_1.py.classType(SecondDeliveryOperationError);
//# sourceMappingURL=second_delivery_models.js.map