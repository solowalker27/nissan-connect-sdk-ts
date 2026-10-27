// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _parse_address, _parse_appointment_reference, _parse_booked_appointment, _parse_call_to_action, _parse_eligibility_result, _parse_time_slots, _second_delivery, _second_delivery_field } from "./_second_delivery_detail_parsing";
export { _parse_address, _parse_appointment_reference, _parse_booked_appointment, _parse_call_to_action, _parse_eligibility_result, _parse_time_slots, _second_delivery, _second_delivery_field };

import { _parse_operation_result } from "./_second_delivery_value_parsing";
export { _parse_operation_result };

import { _required_nullable_bool, _required_nullable_string, _required_optional_typed_object, _required_string, _typename } from "./account_parsing";
export { _required_nullable_bool, _required_nullable_string, _required_optional_typed_object, _required_string, _typename };

import { InvalidSecondDeliveryAddress, SecondDeliveryAddressValidationResult, SecondDeliveryAppointmentForbidden, SecondDeliveryAppointmentNotFound, SecondDeliveryAppointmentResult, SecondDeliveryEligibility, SecondDeliveryOperationResult, SecondDeliveryTimeSlotsResult, UnselectedSecondDeliveryResult, ValidSecondDeliveryAddress } from "./second_delivery_models";
export { InvalidSecondDeliveryAddress, SecondDeliveryAddressValidationResult, SecondDeliveryAppointmentForbidden, SecondDeliveryAppointmentNotFound, SecondDeliveryAppointmentResult, SecondDeliveryEligibility, SecondDeliveryOperationResult, SecondDeliveryTimeSlotsResult, UnselectedSecondDeliveryResult, ValidSecondDeliveryAddress };

export function parse_second_delivery_appointment(data: Record<string, unknown>): SecondDeliveryAppointmentResult | null;
/** Parse every selected existing second-delivery appointment branch. */
export function parse_second_delivery_appointment(...__args: any[]): any {
let appointment, appointment_path, path, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected existing second-delivery appointment branch. */
root = $.call(_second_delivery_field, [data, "appointment"], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, "vehicle.secondDelivery.appointment"], null);
if ($.truth(($.eq(typename, "SecondDeliveryExistingBookedAppointment")))) {
return $.call(_parse_booked_appointment, [root, "vehicle.secondDelivery.appointment"], null);
}
if ($.truth(($.eq(typename, "SecondDeliveryBookedAppointmentNotExistError")))) {
return $.call(SecondDeliveryAppointmentNotFound, [$.call(_required_string, [root, "message", "vehicle.secondDelivery.appointment.message"], null)], null);
}
if ($.truth(($.eq(typename, "SecondDeliveryForbiddenError")))) {
path = "vehicle.secondDelivery.appointment";
appointment_path = ($.str(path) + ".appointment");
appointment = $.call(_required_optional_typed_object, [root, "appointment", appointment_path], null);
return $.call(SecondDeliveryAppointmentForbidden, [], Object.assign({}, {"message": $.call(_required_string, [root, "message", ($.str(path) + ".message")], null)}, {"redacted_email": $.call(_required_nullable_string, [root, "redactedEmail", ($.str(path) + ".redactedEmail")], null)}, {"redacted_phone_number": $.call(_required_nullable_string, [root, "redactedPhoneNumber", ($.str(path) + ".redactedPhoneNumber")], null)}, {"appointment": $.call(_parse_appointment_reference, [appointment, appointment_path], null)}));
}
return $.call(UnselectedSecondDeliveryResult, [typename], null);
}

export function parse_second_delivery_home_time_slots(data: Record<string, unknown>): SecondDeliveryTimeSlotsResult | null;
/** Parse at-home second-delivery time slots. */
export function parse_second_delivery_home_time_slots(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse at-home second-delivery time slots. */
return $.call(_parse_time_slots, [data, "atHome"], null);
}

export function parse_second_delivery_hub_time_slots(data: Record<string, unknown>): SecondDeliveryTimeSlotsResult | null;
/** Parse at-hub second-delivery time slots. */
export function parse_second_delivery_hub_time_slots(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse at-hub second-delivery time slots. */
return $.call(_parse_time_slots, [data, "atHub"], null);
}

export function parse_second_delivery_virtual_time_slots(data: Record<string, unknown>): SecondDeliveryTimeSlotsResult | null;
/** Parse virtual second-delivery time slots. */
export function parse_second_delivery_virtual_time_slots(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse virtual second-delivery time slots. */
return $.call(_parse_time_slots, [data, "atVirtual"], null);
}

export function parse_second_delivery_eligibility(data: Record<string, unknown>): SecondDeliveryEligibility | null;
/** Parse second-delivery eligibility and CTA state. */
export function parse_second_delivery_eligibility(...__args: any[]): any {
let cta, cta_path, eligibility, eligibility_path, second_delivery;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse second-delivery eligibility and CTA state. */
second_delivery = $.call(_second_delivery, [data], null);
if ($.truth(((second_delivery === null)))) {
return null;
}
eligibility_path = "vehicle.secondDelivery.eligibility";
eligibility = $.call(_required_optional_typed_object, [second_delivery, "eligibility", eligibility_path], null);
cta_path = "vehicle.secondDelivery.cta";
cta = $.call(_required_optional_typed_object, [second_delivery, "cta", cta_path], null);
return $.call(SecondDeliveryEligibility, [], Object.assign({}, {"result": $.call(_parse_eligibility_result, [eligibility, eligibility_path], null)}, {"call_to_action": $.call(_parse_call_to_action, [cta, cta_path], null)}));
}

export function parse_second_delivery_address_validation(data: Record<string, unknown>): SecondDeliveryAddressValidationResult | null;
/** Parse every selected second-delivery address-validation branch. */
export function parse_second_delivery_address_validation(...__args: any[]): any {
let address, address_path, path, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected second-delivery address-validation branch. */
path = "vehicle.secondDelivery.validateAddress";
root = $.call(_second_delivery_field, [data, "validateAddress"], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, path], null);
if ($.truth(($.eq(typename, "ValidSecondDeliveryAddress")))) {
return $.call(ValidSecondDeliveryAddress, [$.call(_required_nullable_bool, [root, "valid", ($.str(path) + ".valid")], null)], null);
}
if ($.truth(($.eq(typename, "InvalidSecondDeliveryAddress")))) {
address_path = ($.str(path) + ".dealerAddress");
address = $.call(_required_optional_typed_object, [root, "dealerAddress", address_path], null);
return $.call(InvalidSecondDeliveryAddress, [], Object.assign({}, {"valid": $.call(_required_nullable_bool, [root, "valid", ($.str(path) + ".valid")], null)}, {"dealer_address": $.call(_parse_address, [address, address_path], null)}));
}
return $.call(UnselectedSecondDeliveryResult, [typename], null);
}

export function parse_cancel_second_delivery_appointment(data: Record<string, unknown>): SecondDeliveryOperationResult | null;
/** Parse every selected second-delivery cancellation branch. */
export function parse_cancel_second_delivery_appointment(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected second-delivery cancellation branch. */
return $.call(_parse_operation_result, [data, "cancelSecondDeliveryAppointment", "CancelSecondDeliveryAppointmentSuccessResponse", new Set(["CancelSecondDeliveryAppointmentUnknownErrorResponse"])], null);
}

export function parse_create_second_delivery_appointment(data: Record<string, unknown>): SecondDeliveryOperationResult | null;
/** Parse every selected second-delivery creation branch. */
export function parse_create_second_delivery_appointment(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected second-delivery creation branch. */
return $.call(_parse_operation_result, [data, "createSecondDeliveryAppointment", "CreateSecondDeliveryAppointmentSuccessResponse", new Set(["CreateSecondDeliveryInvalidTimeSlotErrorResponse", "CreateSecondDeliveryAppointmentUnknownErrorResponse"])], null);
}

export function parse_second_delivery_send_auth_code(data: Record<string, unknown>): SecondDeliveryOperationResult | null;
/** Parse every selected authentication-code delivery branch. */
export function parse_second_delivery_send_auth_code(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected authentication-code delivery branch. */
return $.call(_parse_operation_result, [data, "secondDeliverySendAuthCode", "SecondDeliverySendAuthCodeSuccessResponse", new Set(["SecondDeliverySendAuthCodeErrorInvalidAccessTokenResponse"])], null);
}

export function parse_second_delivery_verify_auth_code(data: Record<string, unknown>): SecondDeliveryOperationResult | null;
/** Parse every selected authentication-code verification branch. */
export function parse_second_delivery_verify_auth_code(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected authentication-code verification branch. */
return $.call(_parse_operation_result, [data, "secondDeliveryVerifyAuthCode", "SecondDeliveryVerifyAuthCodeSuccessResponse", new Set(["SecondDeliveryVerifyAuthCodeErrorInvalidAuthResponse"])], null);
}

export function parse_update_second_delivery_appointment(data: Record<string, unknown>): SecondDeliveryOperationResult | null;
/** Parse every selected second-delivery update branch. */
export function parse_update_second_delivery_appointment(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected second-delivery update branch. */
return $.call(_parse_operation_result, [data, "updateSecondDeliveryAppointment", "UpdateSecondDeliveryAppointmentSuccessResponse", new Set(["UpdateSecondDeliveryUpdateAppointmentTooSoonErrorResponse", "UpdateSecondDeliveryAppointmentUnknownErrorResponse"])], null);
}
