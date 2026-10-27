// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _required_datetime, _required_nullable_datetime, _required_nullable_float } from "./_second_delivery_value_parsing";
export { _required_datetime, _required_nullable_datetime, _required_nullable_float };

import { _enum, _required_field, _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _root, _typed_object, _typename } from "./account_parsing";
export { _enum, _required_field, _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _root, _typed_object, _typename };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { SecondDeliveryAppointmentMode } from "./second_delivery_inputs";
export { SecondDeliveryAppointmentMode };

import { SecondDeliveryAddress, SecondDeliveryAddressNotServiced, SecondDeliveryAppointmentBooked, SecondDeliveryAppointmentCompleted, SecondDeliveryAppointmentReference, SecondDeliveryAppointmentStatus, SecondDeliveryBookedAppointment, SecondDeliveryCallToAction, SecondDeliveryContact, SecondDeliveryCoordinates, SecondDeliveryDealer, SecondDeliveryEligibilityError, SecondDeliveryEligibilityResult, SecondDeliveryEligible, SecondDeliveryHub, SecondDeliveryLeadCar, SecondDeliveryMarketingMessage, SecondDeliveryMarketingVersion, SecondDeliverySlotsByDate, SecondDeliveryTimeSlot, SecondDeliveryTimeSlots, SecondDeliveryTimeSlotsResult, UnselectedSecondDeliveryResult } from "./second_delivery_models";
export { SecondDeliveryAddress, SecondDeliveryAddressNotServiced, SecondDeliveryAppointmentBooked, SecondDeliveryAppointmentCompleted, SecondDeliveryAppointmentReference, SecondDeliveryAppointmentStatus, SecondDeliveryBookedAppointment, SecondDeliveryCallToAction, SecondDeliveryContact, SecondDeliveryCoordinates, SecondDeliveryDealer, SecondDeliveryEligibilityError, SecondDeliveryEligibilityResult, SecondDeliveryEligible, SecondDeliveryHub, SecondDeliveryLeadCar, SecondDeliveryMarketingMessage, SecondDeliveryMarketingVersion, SecondDeliverySlotsByDate, SecondDeliveryTimeSlot, SecondDeliveryTimeSlots, SecondDeliveryTimeSlotsResult, UnselectedSecondDeliveryResult };

export function _second_delivery(data: Record<string, unknown>): Record<string, unknown> | null;
/** Translated upstream _second_delivery. */
export function _second_delivery(...__args: any[]): any {
let vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
vehicle = $.call(_root, [data, "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
return $.call(_required_optional_typed_object, [vehicle, "secondDelivery", "vehicle.secondDelivery"], null);
}

export function _second_delivery_field(data: Record<string, unknown>, field: string): Record<string, unknown> | null;
/** Translated upstream _second_delivery_field. */
export function _second_delivery_field(...__args: any[]): any {
let second_delivery;
let {"data": data, "field": field} = $.bind(__args, ["data", "field"], {}, [], null, null);
second_delivery = $.call(_second_delivery, [data], null);
if ($.truth(((second_delivery === null)))) {
return null;
}
return $.call(_required_optional_typed_object, [second_delivery, field, ("vehicle.secondDelivery." + $.str(field))], null);
}

export function _parse_booked_appointment(value: Record<string, unknown>, path: string): SecondDeliveryBookedAppointment;
/** Translated upstream _parse_booked_appointment. */
export function _parse_booked_appointment(...__args: any[]): any {
let address, address_path, contact, contact_path, hub, hub_path, mode;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
address_path = ($.str(path) + ".address");
address = $.call(_required_optional_typed_object, [value, "address", address_path], null);
contact_path = ($.str(path) + ".contact");
contact = $.call(_required_optional_typed_object, [value, "contact", contact_path], null);
hub_path = ($.str(path) + ".hub");
hub = $.call(_required_optional_typed_object, [value, "hub", hub_path], null);
mode = $.call(_required_field, [value, "mode", ($.str(path) + ".mode")], null);
return $.call(SecondDeliveryBookedAppointment, [], Object.assign({}, {"id": $.call(_required_nullable_int, [value, "id", ($.str(path) + ".id")], null)}, {"activity_id": $.call(_required_nullable_int, [value, "activityId", ($.str(path) + ".activityId")], null)}, {"begins_at": $.call(_required_nullable_datetime, [value, "beginsAt", ($.str(path) + ".beginsAt")], null)}, {"address": $.call(_parse_address, [address, address_path], null)}, {"contact": ($.truth(((contact === null))) ? null : $.call(SecondDeliveryContact, [], Object.assign({}, {"first_name": $.call(_required_nullable_string, [contact, "firstName", ($.str(contact_path) + ".firstName")], null)}, {"last_name": $.call(_required_nullable_string, [contact, "lastName", ($.str(contact_path) + ".lastName")], null)}, {"phone_number": $.call(_required_nullable_string, [contact, "phoneNumber", ($.str(contact_path) + ".phoneNumber")], null)}, {"email": $.call(_required_nullable_string, [contact, "email", ($.str(contact_path) + ".email")], null)})))}, {"redelivery_notes": $.call(_required_nullable_string, [value, "redeliveryNotes", ($.str(path) + ".redeliveryNotes")], null)}, {"feature_notes": $.call(_required_nullable_string, [value, "featureNotes", ($.str(path) + ".featureNotes")], null)}, {"hub": $.call(_parse_hub, [hub, hub_path], Object.assign({}, {"include_dealer": true}))}, {"mode": ($.truth(((mode === null))) ? null : $.call(_enum, [mode, SecondDeliveryAppointmentMode, ($.str(path) + ".mode")], null))}));
}

export function _parse_appointment_reference(value: Record<string, unknown> | null, path: string): SecondDeliveryAppointmentReference | null;
/** Translated upstream _parse_appointment_reference. */
export function _parse_appointment_reference(...__args: any[]): any {
let status;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
status = $.call(_required_field, [value, "status", ($.str(path) + ".status")], null);
return $.call(SecondDeliveryAppointmentReference, [], Object.assign({}, {"id": $.call(_required_nullable_int, [value, "id", ($.str(path) + ".id")], null)}, {"access_token": $.call(_required_nullable_string, [value, "accessToken", ($.str(path) + ".accessToken")], null)}, {"status": ($.truth(((status === null))) ? null : $.call(_enum, [status, SecondDeliveryAppointmentStatus, ($.str(path) + ".status")], null))}));
}

export function _parse_time_slots(data: Record<string, unknown>, mode_field: string): SecondDeliveryTimeSlotsResult | null;
/** Translated upstream _parse_time_slots. */
export function _parse_time_slots(...__args: any[]): any {
let appointments, appointments_path, hub, hub_path, index, item, item_path, path, root, second_delivery, slots, slots_value, typename;
let {"data": data, "mode_field": mode_field} = $.bind(__args, ["data", "mode_field"], {}, [], null, null);
second_delivery = $.call(_second_delivery, [data], null);
if ($.truth(((second_delivery === null)))) {
return null;
}
appointments_path = "vehicle.secondDelivery.appointments";
appointments = $.call(_required_optional_typed_object, [second_delivery, "appointments", appointments_path], null);
if ($.truth(((appointments === null)))) {
return null;
}
path = ($.str(appointments_path) + "." + $.str(mode_field));
root = $.call(_required_optional_typed_object, [appointments, mode_field, path], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, path], null);
if ($.truth(($.eq(typename, "SecondDeliveryAppointmentTimeSlotsErrorAddressNotServicedResponse")))) {
return $.call(SecondDeliveryAddressNotServiced, [$.call(_required_nullable_string, [root, "message", ($.str(path) + ".message")], null)], null);
}
if ($.truth((!$.eq(typename, "SecondDeliveryAppointmentTimeSlotsSuccessResponse")))) {
return $.call(UnselectedSecondDeliveryResult, [typename], null);
}
hub_path = ($.str(path) + ".hub");
hub = $.call(_required_optional_typed_object, [root, "hub", hub_path], null);
slots_value = $.call(_required_field, [root, "slotsByDate", ($.str(path) + ".slotsByDate")], null);
if ($.truth(!$.truth($.call($.isinstance, [slots_value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + ".slotsByDate is not a list")], null);
}
slots = [];
for ([index, item] of $.iterable($.call($.enumerate, [slots_value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(slots, "append"), [null], null);
continue;
}
item_path = ($.str(path) + ".slotsByDate[" + $.str(index) + "]");
$.call($.attr(slots, "append"), [$.call(_parse_slots_by_date, [$.call(_typed_object, [item, item_path], null), item_path], null)], null);
}
return $.call(SecondDeliveryTimeSlots, [$.call(_parse_hub, [hub, hub_path], Object.assign({}, {"include_dealer": false})), $.call($.tuple, [slots], null)], null);
}

export function _parse_slots_by_date(value: Record<string, unknown>, path: string): SecondDeliverySlotsByDate;
/** Translated upstream _parse_slots_by_date. */
export function _parse_slots_by_date(...__args: any[]): any {
let index, item, item_path, parsed, time_slot, time_slots, time_slots_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
time_slots_value = $.call(_required_field, [value, "timeslots", ($.str(path) + ".timeslots")], null);
time_slots = null;
if ($.truth(((time_slots_value !== null)))) {
if ($.truth(!$.truth($.call($.isinstance, [time_slots_value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + ".timeslots is not a list")], null);
}
parsed = [];
for ([index, item] of $.iterable($.call($.enumerate, [time_slots_value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(parsed, "append"), [null], null);
continue;
}
item_path = ($.str(path) + ".timeslots[" + $.str(index) + "]");
time_slot = $.call(_typed_object, [item, item_path], null);
$.call($.attr(parsed, "append"), [$.call(SecondDeliveryTimeSlot, [], Object.assign({}, {"time": $.call(_required_nullable_datetime, [time_slot, "time", ($.str(item_path) + ".time")], null)}, {"id": $.call(_required_nullable_int, [time_slot, "id", ($.str(item_path) + ".id")], null)}))], null);
}
time_slots = $.call($.tuple, [parsed], null);
}
return $.call(SecondDeliverySlotsByDate, [], Object.assign({}, {"date": $.call(_required_datetime, [value, "date", ($.str(path) + ".date")], null)}, {"time_slots": time_slots}));
}

export function _parse_eligibility_result(value: Record<string, unknown> | null, path: string): SecondDeliveryEligibilityResult | null;
/** Translated upstream _parse_eligibility_result. */
export function _parse_eligibility_result(...__args: any[]): any {
let appointment, appointment_path, hub, hub_path, lead_car, lead_car_path, reference, typename;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
typename = $.call(_typename, [value, path], null);
if ($.truth(($.eq(typename, "SecondDeliveryEligibilityResponseRDRRecordFound")))) {
hub_path = ($.str(path) + ".hub");
hub = $.call(_required_optional_typed_object, [value, "hub", hub_path], null);
lead_car_path = ($.str(path) + ".leadCar");
lead_car = $.call(_required_optional_typed_object, [value, "leadCar", lead_car_path], null);
return $.call(SecondDeliveryEligible, [], Object.assign({}, {"hub": $.call(_parse_hub, [hub, hub_path], Object.assign({}, {"include_dealer": true}))}, {"lead_car": $.call(_parse_lead_car, [lead_car, lead_car_path], null)}, {"redelivery_lead_id": $.call(_required_nullable_int, [value, "redeliveryLeadId", ($.str(path) + ".redeliveryLeadId")], null)}, {"days_since_retail_sales_date": $.call(_required_nullable_int, [value, "daysSinceRetailSalesDate", ($.str(path) + ".daysSinceRetailSalesDate")], null)}));
}
if ($.truth(($.contains(new Set(["SecondDeliveryEligibilityResponseAppointmentBooked", "SecondDeliveryEligibilityResponseAppointmentCompleted"]), typename)))) {
appointment_path = ($.str(path) + ".appointment");
appointment = $.call(_required_optional_typed_object, [value, "appointment", appointment_path], null);
reference = $.call(_parse_appointment_reference, [appointment, appointment_path], null);
if ($.truth(($.eq(typename, "SecondDeliveryEligibilityResponseAppointmentBooked")))) {
return $.call(SecondDeliveryAppointmentBooked, [reference], null);
}
return $.call(SecondDeliveryAppointmentCompleted, [reference], null);
}
if ($.truth(($.contains(new Set(["SecondDeliveryEligibilityResponseNonParticipatingDealer", "SecondDeliveryEligibilityResponseVinNotFound"]), typename)))) {
return $.call(SecondDeliveryEligibilityError, [typename, $.call(_required_nullable_string, [value, "message", ($.str(path) + ".message")], null)], null);
}
return $.call(UnselectedSecondDeliveryResult, [typename], null);
}

export function _parse_call_to_action(value: Record<string, unknown> | null, path: string): SecondDeliveryCallToAction | null;
/** Translated upstream _parse_call_to_action. */
export function _parse_call_to_action(...__args: any[]): any {
let discover, discover_path, marketing, marketing_path, marketing_result, version;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
marketing_path = ($.str(path) + ".marketingMessage");
marketing = $.call(_required_optional_typed_object, [value, "marketingMessage", marketing_path], null);
discover_path = ($.str(path) + ".discover");
discover = $.call(_required_optional_typed_object, [value, "discover", discover_path], null);
marketing_result = null;
if ($.truth(((marketing !== null)))) {
version = $.call(_required_field, [marketing, "versionToDisplay", ($.str(marketing_path) + ".versionToDisplay")], null);
marketing_result = $.call(SecondDeliveryMarketingMessage, [], Object.assign({}, {"version": ($.truth(((version === null))) ? null : $.call(_enum, [version, SecondDeliveryMarketingVersion, ($.str(marketing_path) + ".versionToDisplay")], null))}, {"display_threshold_days": $.call(_required_nullable_int, [marketing, "displayMarketingMessageThresholdInDays", ($.str(marketing_path) + ".displayMarketingMessageThresholdInDays")], null)}, {"remind_later_threshold_days": $.call(_required_nullable_int, [marketing, "remindMeLaterThresholdInDays", ($.str(marketing_path) + ".remindMeLaterThresholdInDays")], null)}));
}
return $.call(SecondDeliveryCallToAction, [], Object.assign({}, {"marketing_message": marketing_result}, {"discover_prioritized": ($.truth(((discover === null))) ? null : $.call(_required_nullable_bool, [discover, "prioritized", ($.str(discover_path) + ".prioritized")], null))}, {"days_since_purchased": $.call(_required_nullable_int, [value, "daysSincePurchased", ($.str(path) + ".daysSincePurchased")], null)}));
}

export function _parse_lead_car(value: Record<string, unknown> | null, path: string): SecondDeliveryLeadCar | null;
/** Translated upstream _parse_lead_car. */
export function _parse_lead_car(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(SecondDeliveryLeadCar, [], Object.assign({}, {"trim": $.call(_required_nullable_string, [value, "trim", ($.str(path) + ".trim")], null)}, {"deleted": $.call(_required_nullable_bool, [value, "deleted", ($.str(path) + ".deleted")], null)}, {"interior_color": $.call(_required_nullable_string, [value, "interiorColor", ($.str(path) + ".interiorColor")], null)}, {"retail_sales_date": $.call(_required_nullable_string, [value, "retailSalesDate", ($.str(path) + ".retailSalesDate")], null)}, {"plate": $.call(_required_nullable_string, [value, "plate", ($.str(path) + ".plate")], null)}, {"brand": $.call(_required_nullable_string, [value, "brand", ($.str(path) + ".brand")], null)}, {"year": $.call(_required_nullable_string, [value, "year", ($.str(path) + ".year")], null)}, {"model": $.call(_required_nullable_string, [value, "model", ($.str(path) + ".model")], null)}, {"mileage": $.call(_required_nullable_int, [value, "mileage", ($.str(path) + ".mileage")], null)}, {"lead_id": $.call(_required_nullable_int, [value, "leadId", ($.str(path) + ".leadId")], null)}, {"exterior_color": $.call(_required_nullable_string, [value, "exteriorColor", ($.str(path) + ".exteriorColor")], null)}, {"name": $.call(_required_nullable_string, [value, "name", ($.str(path) + ".name")], null)}, {"vin": $.call(_required_nullable_string, [value, "vin", ($.str(path) + ".vin")], null)}, {"id": $.call(_required_nullable_int, [value, "id", ($.str(path) + ".id")], null)}));
}

export function _parse_hub(value: Record<string, unknown> | null, path: string, options: { include_dealer: boolean }): SecondDeliveryHub | null;
/** Translated upstream _parse_hub. */
export function _parse_hub(...__args: any[]): any {
let address, address_path, dealer, dealer_path, dealer_value;
let {"value": value, "path": path, "include_dealer": include_dealer} = $.bind(__args, ["value", "path"], {}, ["include_dealer"], null, null);
if ($.truth(((value === null)))) {
return null;
}
dealer = null;
if ($.truth(include_dealer)) {
dealer_path = ($.str(path) + ".dealer");
dealer_value = $.call(_required_optional_typed_object, [value, "dealer", dealer_path], null);
if ($.truth(((dealer_value !== null)))) {
address_path = ($.str(dealer_path) + ".address");
address = $.call(_required_optional_typed_object, [dealer_value, "address", address_path], null);
dealer = $.call(SecondDeliveryDealer, [], Object.assign({}, {"code": $.call(_required_nullable_string, [dealer_value, "code", ($.str(dealer_path) + ".code")], null)}, {"address": $.call(_parse_address, [address, address_path], null)}));
}
}
return $.call(SecondDeliveryHub, [], Object.assign({}, {"id": $.call(_required_nullable_int, [value, "id", ($.str(path) + ".id")], null)}, {"timezone": $.call(_required_nullable_string, [value, "timezone", ($.str(path) + ".timezone")], null)}, {"dealer": dealer}));
}

export function _parse_address(value: Record<string, unknown> | null, path: string): SecondDeliveryAddress | null;
/** Translated upstream _parse_address. */
export function _parse_address(...__args: any[]): any {
let coordinate_path, coordinate_value, coordinates;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
coordinates = null;
if ($.truth(($.contains(value, "coordinates")))) {
coordinate_path = ($.str(path) + ".coordinates");
coordinate_value = $.call(_required_optional_typed_object, [value, "coordinates", coordinate_path], null);
if ($.truth(((coordinate_value !== null)))) {
coordinates = $.call(SecondDeliveryCoordinates, [], Object.assign({}, {"latitude": $.call(_required_nullable_float, [coordinate_value, "latitude", ($.str(coordinate_path) + ".latitude")], null)}, {"longitude": $.call(_required_nullable_float, [coordinate_value, "longitude", ($.str(coordinate_path) + ".longitude")], null)}));
}
}
return $.call(SecondDeliveryAddress, [], Object.assign({}, {"address_1": $.call(_required_nullable_string, [value, "address1", ($.str(path) + ".address1")], null)}, {"address_2": $.call(_required_nullable_string, [value, "address2", ($.str(path) + ".address2")], null)}, {"city": $.call(_required_nullable_string, [value, "city", ($.str(path) + ".city")], null)}, {"state": $.call(_required_nullable_string, [value, "state", ($.str(path) + ".state")], null)}, {"postal_code": $.call(_required_nullable_string, [value, "postalCode", ($.str(path) + ".postalCode")], null)}, {"country": ($.truth((!$.contains(value, "country"))) ? null : $.call(_required_nullable_string, [value, "country", ($.str(path) + ".country")], null))}, {"id": ($.truth((!$.contains(value, "id"))) ? null : $.call(_required_nullable_int, [value, "id", ($.str(path) + ".id")], null))}, {"coordinates": coordinates}));
}
