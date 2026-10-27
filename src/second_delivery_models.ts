// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { SecondDeliveryAppointmentMode } from "./second_delivery_inputs";
export { SecondDeliveryAppointmentMode };

export const SecondDeliveryAppointmentStatus = $.enumType("SecondDeliveryAppointmentStatus", {"BOOKED": "BOOKED", "COMPLETED": "COMPLETED", "CANCELLED": "CANCELLED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type SecondDeliveryAppointmentStatus = ReturnType<typeof SecondDeliveryAppointmentStatus>;

export const SecondDeliveryMarketingVersion = $.enumType("SecondDeliveryMarketingVersion", {"REMIND_ME_LATER": "REMIND_ME_LATER", "NO_THANKS": "NO_THANKS", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type SecondDeliveryMarketingVersion = ReturnType<typeof SecondDeliveryMarketingVersion>;

/** Nullable second-delivery address coordinates. */
export class SecondDeliveryCoordinates {
readonly latitude: number | null;
readonly longitude: number | null;
static __fields = [["latitude", $.MISSING], ["longitude", $.MISSING]];
constructor(latitude: number | null, longitude: number | null);
constructor(options: { latitude: number | null; longitude: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryCoordinates, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryCoordinates);

/** Nullable address fields selected by second-delivery operations. */
export class SecondDeliveryAddress {
readonly address_1: string | null;
readonly address_2: string | null;
readonly city: string | null;
readonly state: string | null;
readonly postal_code: string | null;
readonly country: string | null;
readonly id: number | null;
readonly coordinates: SecondDeliveryCoordinates | null;
static __fields = [["address_1", $.MISSING], ["address_2", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["postal_code", $.MISSING], ["country", $.MISSING], ["id", null], ["coordinates", null]];
constructor(address_1: string | null, address_2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null, id?: number | null, coordinates?: SecondDeliveryCoordinates | null);
constructor(options: { address_1: string | null; address_2: string | null; city: string | null; state: string | null; postal_code: string | null; country: string | null; id?: number | null; coordinates?: SecondDeliveryCoordinates | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryAddress, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryAddress);

/** Nullable second-delivery dealer details. */
export class SecondDeliveryDealer {
readonly code: string | null;
readonly address: SecondDeliveryAddress | null;
static __fields = [["code", $.MISSING], ["address", $.MISSING]];
constructor(code: string | null, address: SecondDeliveryAddress | null);
constructor(options: { code: string | null; address: SecondDeliveryAddress | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryDealer, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryDealer);

/** Nullable second-delivery hub details. */
export class SecondDeliveryHub {
readonly id: number | null;
readonly timezone: string | null;
readonly dealer: SecondDeliveryDealer | null;
static __fields = [["id", $.MISSING], ["timezone", $.MISSING], ["dealer", null]];
constructor(id: number | null, timezone: string | null, dealer?: SecondDeliveryDealer | null);
constructor(options: { id: number | null; timezone: string | null; dealer?: SecondDeliveryDealer | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryHub, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryHub);

/** Nullable booked-appointment contact fields. */
export class SecondDeliveryContact {
readonly first_name: string | null;
readonly last_name: string | null;
readonly phone_number: string | null;
readonly email: string | null;
static __fields = [["first_name", $.MISSING], ["last_name", $.MISSING], ["phone_number", $.MISSING], ["email", $.MISSING]];
constructor(first_name: string | null, last_name: string | null, phone_number: string | null, email: string | null);
constructor(options: { first_name: string | null; last_name: string | null; phone_number: string | null; email: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryContact, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryContact);

/** Nullable appointment identity returned by restricted flows. */
export class SecondDeliveryAppointmentReference {
readonly id: number | null;
readonly access_token: string | null;
readonly status: SecondDeliveryAppointmentStatus | null;
static __fields = [["id", $.MISSING], ["access_token", $.MISSING], ["status", $.MISSING]];
constructor(id: number | null, access_token: string | null, status: SecondDeliveryAppointmentStatus | null);
constructor(options: { id: number | null; access_token: string | null; status: SecondDeliveryAppointmentStatus | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryAppointmentReference, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryAppointmentReference);

/** Existing booked second-delivery appointment. */
export class SecondDeliveryBookedAppointment {
readonly id: number | null;
readonly activity_id: number | null;
readonly begins_at: $.DateValue | null;
readonly address: SecondDeliveryAddress | null;
readonly contact: SecondDeliveryContact | null;
readonly redelivery_notes: string | null;
readonly feature_notes: string | null;
readonly hub: SecondDeliveryHub | null;
readonly mode: SecondDeliveryAppointmentMode | null;
static __fields = [["id", $.MISSING], ["activity_id", $.MISSING], ["begins_at", $.MISSING], ["address", $.MISSING], ["contact", $.MISSING], ["redelivery_notes", $.MISSING], ["feature_notes", $.MISSING], ["hub", $.MISSING], ["mode", $.MISSING]];
constructor(id: number | null, activity_id: number | null, begins_at: $.DateValue | null, address: SecondDeliveryAddress | null, contact: SecondDeliveryContact | null, redelivery_notes: string | null, feature_notes: string | null, hub: SecondDeliveryHub | null, mode: SecondDeliveryAppointmentMode | null);
constructor(options: { id: number | null; activity_id: number | null; begins_at: $.DateValue | null; address: SecondDeliveryAddress | null; contact: SecondDeliveryContact | null; redelivery_notes: string | null; feature_notes: string | null; hub: SecondDeliveryHub | null; mode: SecondDeliveryAppointmentMode | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryBookedAppointment, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryBookedAppointment);

/** No booked second-delivery appointment exists. */
export class SecondDeliveryAppointmentNotFound {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryAppointmentNotFound, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryAppointmentNotFound);

/** Appointment requires an additional authorization flow. */
export class SecondDeliveryAppointmentForbidden {
readonly message: string;
readonly redacted_email: string | null;
readonly redacted_phone_number: string | null;
readonly appointment: SecondDeliveryAppointmentReference | null;
static __fields = [["message", $.MISSING], ["redacted_email", $.MISSING], ["redacted_phone_number", $.MISSING], ["appointment", $.MISSING]];
constructor(message: string, redacted_email: string | null, redacted_phone_number: string | null, appointment: SecondDeliveryAppointmentReference | null);
constructor(options: { message: string; redacted_email: string | null; redacted_phone_number: string | null; appointment: SecondDeliveryAppointmentReference | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryAppointmentForbidden, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryAppointmentForbidden);

/** Future second-delivery union branch selected only by type name. */
export class UnselectedSecondDeliveryResult {
readonly typename: string;
static __fields = [["typename", $.MISSING]];
constructor(typename: string);
constructor(options: { typename: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnselectedSecondDeliveryResult, __args);  Object.freeze(this); }
}
$.classType(UnselectedSecondDeliveryResult);

export type SecondDeliveryAppointmentResult = SecondDeliveryBookedAppointment | SecondDeliveryAppointmentNotFound | SecondDeliveryAppointmentForbidden | UnselectedSecondDeliveryResult;

/** Nullable second-delivery time-slot fields. */
export class SecondDeliveryTimeSlot {
readonly time: $.DateValue | null;
readonly id: number | null;
static __fields = [["time", $.MISSING], ["id", $.MISSING]];
constructor(time: $.DateValue | null, id: number | null);
constructor(options: { time: $.DateValue | null; id: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryTimeSlot, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryTimeSlot);

/** Required date and nullable slots for that date. */
export class SecondDeliverySlotsByDate {
readonly date: $.DateValue;
readonly time_slots: ReadonlyArray<SecondDeliveryTimeSlot | null> | null;
static __fields = [["date", $.MISSING], ["time_slots", $.MISSING]];
constructor(date: $.DateValue, time_slots: ReadonlyArray<SecondDeliveryTimeSlot | null> | null);
constructor(options: { date: $.DateValue; time_slots: ReadonlyArray<SecondDeliveryTimeSlot | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliverySlotsByDate, __args);  Object.freeze(this); }
}
$.classType(SecondDeliverySlotsByDate);

/** Successful second-delivery time-slot search. */
export class SecondDeliveryTimeSlots {
readonly hub: SecondDeliveryHub | null;
readonly slots_by_date: ReadonlyArray<SecondDeliverySlotsByDate | null>;
static __fields = [["hub", $.MISSING], ["slots_by_date", $.MISSING]];
constructor(hub: SecondDeliveryHub | null, slots_by_date: ReadonlyArray<SecondDeliverySlotsByDate | null>);
constructor(options: { hub: SecondDeliveryHub | null; slots_by_date: ReadonlyArray<SecondDeliverySlotsByDate | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryTimeSlots, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryTimeSlots);

/** The supplied address is outside the second-delivery service area. */
export class SecondDeliveryAddressNotServiced {
readonly message: string | null;
static __fields = [["message", $.MISSING]];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryAddressNotServiced, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryAddressNotServiced);

export type SecondDeliveryTimeSlotsResult = SecondDeliveryTimeSlots | SecondDeliveryAddressNotServiced | UnselectedSecondDeliveryResult;

/** Nullable lead-vehicle fields used by second-delivery eligibility. */
export class SecondDeliveryLeadCar {
readonly trim: string | null;
readonly deleted: boolean | null;
readonly interior_color: string | null;
readonly retail_sales_date: string | null;
readonly plate: string | null;
readonly brand: string | null;
readonly year: string | null;
readonly model: string | null;
readonly mileage: number | null;
readonly lead_id: number | null;
readonly exterior_color: string | null;
readonly name: string | null;
readonly vin: string | null;
readonly id: number | null;
static __fields = [["trim", $.MISSING], ["deleted", $.MISSING], ["interior_color", $.MISSING], ["retail_sales_date", $.MISSING], ["plate", $.MISSING], ["brand", $.MISSING], ["year", $.MISSING], ["model", $.MISSING], ["mileage", $.MISSING], ["lead_id", $.MISSING], ["exterior_color", $.MISSING], ["name", $.MISSING], ["vin", $.MISSING], ["id", $.MISSING]];
constructor(trim: string | null, deleted: boolean | null, interior_color: string | null, retail_sales_date: string | null, plate: string | null, brand: string | null, year: string | null, model: string | null, mileage: number | null, lead_id: number | null, exterior_color: string | null, name: string | null, vin: string | null, id: number | null);
constructor(options: { trim: string | null; deleted: boolean | null; interior_color: string | null; retail_sales_date: string | null; plate: string | null; brand: string | null; year: string | null; model: string | null; mileage: number | null; lead_id: number | null; exterior_color: string | null; name: string | null; vin: string | null; id: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryLeadCar, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryLeadCar);

/** Eligible retail-delivery record details. */
export class SecondDeliveryEligible {
readonly hub: SecondDeliveryHub | null;
readonly lead_car: SecondDeliveryLeadCar | null;
readonly redelivery_lead_id: number | null;
readonly days_since_retail_sales_date: number | null;
static __fields = [["hub", $.MISSING], ["lead_car", $.MISSING], ["redelivery_lead_id", $.MISSING], ["days_since_retail_sales_date", $.MISSING]];
constructor(hub: SecondDeliveryHub | null, lead_car: SecondDeliveryLeadCar | null, redelivery_lead_id: number | null, days_since_retail_sales_date: number | null);
constructor(options: { hub: SecondDeliveryHub | null; lead_car: SecondDeliveryLeadCar | null; redelivery_lead_id: number | null; days_since_retail_sales_date: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryEligible, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryEligible);

/** Eligibility indicates an appointment is already booked. */
export class SecondDeliveryAppointmentBooked {
readonly appointment: SecondDeliveryAppointmentReference | null;
static __fields = [["appointment", $.MISSING]];
constructor(appointment: SecondDeliveryAppointmentReference | null);
constructor(options: { appointment: SecondDeliveryAppointmentReference | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryAppointmentBooked, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryAppointmentBooked);

/** Eligibility indicates the appointment was completed. */
export class SecondDeliveryAppointmentCompleted {
readonly appointment: SecondDeliveryAppointmentReference | null;
static __fields = [["appointment", $.MISSING]];
constructor(appointment: SecondDeliveryAppointmentReference | null);
constructor(options: { appointment: SecondDeliveryAppointmentReference | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryAppointmentCompleted, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryAppointmentCompleted);

/** Known eligibility error branch with nullable message. */
export class SecondDeliveryEligibilityError {
readonly typename: string;
readonly message: string | null;
static __fields = [["typename", $.MISSING], ["message", $.MISSING]];
constructor(typename: string, message: string | null);
constructor(options: { typename: string; message: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryEligibilityError, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryEligibilityError);

export type SecondDeliveryEligibilityResult = SecondDeliveryEligible | SecondDeliveryAppointmentBooked | SecondDeliveryAppointmentCompleted | SecondDeliveryEligibilityError | UnselectedSecondDeliveryResult;

/** Nullable marketing message CTA configuration. */
export class SecondDeliveryMarketingMessage {
readonly version: SecondDeliveryMarketingVersion | null;
readonly display_threshold_days: number | null;
readonly remind_later_threshold_days: number | null;
static __fields = [["version", $.MISSING], ["display_threshold_days", $.MISSING], ["remind_later_threshold_days", $.MISSING]];
constructor(version: SecondDeliveryMarketingVersion | null, display_threshold_days: number | null, remind_later_threshold_days: number | null);
constructor(options: { version: SecondDeliveryMarketingVersion | null; display_threshold_days: number | null; remind_later_threshold_days: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryMarketingMessage, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryMarketingMessage);

/** Nullable second-delivery CTA state. */
export class SecondDeliveryCallToAction {
readonly marketing_message: SecondDeliveryMarketingMessage | null;
readonly discover_prioritized: boolean | null;
readonly days_since_purchased: number | null;
static __fields = [["marketing_message", $.MISSING], ["discover_prioritized", $.MISSING], ["days_since_purchased", $.MISSING]];
constructor(marketing_message: SecondDeliveryMarketingMessage | null, discover_prioritized: boolean | null, days_since_purchased: number | null);
constructor(options: { marketing_message: SecondDeliveryMarketingMessage | null; discover_prioritized: boolean | null; days_since_purchased: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryCallToAction, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryCallToAction);

/** Eligibility union and independent CTA state. */
export class SecondDeliveryEligibility {
readonly result: SecondDeliveryEligibilityResult | null;
readonly call_to_action: SecondDeliveryCallToAction | null;
static __fields = [["result", $.MISSING], ["call_to_action", $.MISSING]];
constructor(result: SecondDeliveryEligibilityResult | null, call_to_action: SecondDeliveryCallToAction | null);
constructor(options: { result: SecondDeliveryEligibilityResult | null; call_to_action: SecondDeliveryCallToAction | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryEligibility, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryEligibility);

/** Nullable positive address-validation flag. */
export class ValidSecondDeliveryAddress {
readonly valid: boolean | null;
static __fields = [["valid", $.MISSING]];
constructor(valid: boolean | null);
constructor(options: { valid: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ValidSecondDeliveryAddress, __args);  Object.freeze(this); }
}
$.classType(ValidSecondDeliveryAddress);

/** Nullable negative flag and the dealer address to use instead. */
export class InvalidSecondDeliveryAddress {
readonly valid: boolean | null;
readonly dealer_address: SecondDeliveryAddress | null;
static __fields = [["valid", $.MISSING], ["dealer_address", $.MISSING]];
constructor(valid: boolean | null, dealer_address: SecondDeliveryAddress | null);
constructor(options: { valid: boolean | null; dealer_address: SecondDeliveryAddress | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, InvalidSecondDeliveryAddress, __args);  Object.freeze(this); }
}
$.classType(InvalidSecondDeliveryAddress);

export type SecondDeliveryAddressValidationResult = ValidSecondDeliveryAddress | InvalidSecondDeliveryAddress | UnselectedSecondDeliveryResult;

/** Required success flag returned by a second-delivery mutation. */
export class SecondDeliveryOperationSuccess {
readonly success: boolean;
static __fields = [["success", $.MISSING]];
constructor(success: boolean);
constructor(options: { success: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryOperationSuccess, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryOperationSuccess);

/** Known second-delivery mutation error with nullable message. */
export class SecondDeliveryOperationError {
readonly typename: string;
readonly message: string | null;
static __fields = [["typename", $.MISSING], ["message", $.MISSING]];
constructor(typename: string, message: string | null);
constructor(options: { typename: string; message: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryOperationError, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryOperationError);

export type SecondDeliveryOperationResult = SecondDeliveryOperationSuccess | SecondDeliveryOperationError | UnselectedSecondDeliveryResult;
