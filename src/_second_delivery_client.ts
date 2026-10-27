// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const datetime = $.datetime;

import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { AddressInput, address_input } from "./common_inputs";
export { AddressInput, address_input };

import { SecondDeliveryAppointmentInput, second_delivery_appointment_variables, second_delivery_home_slots_variables, second_delivery_location_slots_variables, second_delivery_send_auth_code_variables, second_delivery_verify_auth_code_variables, update_second_delivery_appointment_variables } from "./second_delivery_inputs";
export { SecondDeliveryAppointmentInput, second_delivery_appointment_variables, second_delivery_home_slots_variables, second_delivery_location_slots_variables, second_delivery_send_auth_code_variables, second_delivery_verify_auth_code_variables, update_second_delivery_appointment_variables };

import { SecondDeliveryAddressValidationResult, SecondDeliveryAppointmentResult, SecondDeliveryEligibility, SecondDeliveryOperationResult, SecondDeliveryTimeSlotsResult } from "./second_delivery_models";
export { SecondDeliveryAddressValidationResult, SecondDeliveryAppointmentResult, SecondDeliveryEligibility, SecondDeliveryOperationResult, SecondDeliveryTimeSlotsResult };

import { parse_cancel_second_delivery_appointment, parse_create_second_delivery_appointment, parse_second_delivery_address_validation, parse_second_delivery_appointment, parse_second_delivery_eligibility, parse_second_delivery_home_time_slots, parse_second_delivery_hub_time_slots, parse_second_delivery_send_auth_code, parse_second_delivery_verify_auth_code, parse_second_delivery_virtual_time_slots, parse_update_second_delivery_appointment } from "./second_delivery_parsing";
export { parse_cancel_second_delivery_appointment, parse_create_second_delivery_appointment, parse_second_delivery_address_validation, parse_second_delivery_appointment, parse_second_delivery_eligibility, parse_second_delivery_home_time_slots, parse_second_delivery_hub_time_slots, parse_second_delivery_send_auth_code, parse_second_delivery_verify_auth_code, parse_second_delivery_virtual_time_slots, parse_update_second_delivery_appointment };

/** Translated upstream _SecondDeliveryClientMixin. */
export class _SecondDeliveryClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _SecondDeliveryClientMixin, __args); }
async_get_second_delivery_appointment(vin: string): Promise<SecondDeliveryAppointmentResult | null>;
/** Return the existing second-delivery appointment state. */
async async_get_second_delivery_appointment(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the existing second-delivery appointment state. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryAppointment", $.attr(operations, "SECOND_DELIVERY_APPOINTMENT"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_second_delivery_appointment, [data], null);
}
async_get_second_delivery_home_time_slots(vin: string, address: AddressInput, hub_id: string, start: $.DateValue, end: $.DateValue): Promise<SecondDeliveryTimeSlotsResult | null>;
/** Return at-home second-delivery appointment time slots. */
async async_get_second_delivery_home_time_slots(...__args: any[]): any {
let data;
let {"vin": vin, "address": address, "hub_id": hub_id, "start": start, "end": end} = $.bind(__args, ["vin", "address", "hub_id", "start", "end"], {}, [], null, null);
/** Return at-home second-delivery appointment time slots. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryAppointmentsAtHome", $.attr(operations, "SECOND_DELIVERY_APPOINTMENTS_AT_HOME"), $.call(second_delivery_home_slots_variables, [vin, address, hub_id, start, end], null)], null));
return $.call(parse_second_delivery_home_time_slots, [data], null);
}
async_get_second_delivery_hub_time_slots(hub_id: string, postal_code: string, start: $.DateValue, end: $.DateValue, vin: string): Promise<SecondDeliveryTimeSlotsResult | null>;
/** Return in-hub second-delivery appointment time slots. */
async async_get_second_delivery_hub_time_slots(...__args: any[]): any {
let data;
let {"hub_id": hub_id, "postal_code": postal_code, "start": start, "end": end, "vin": vin} = $.bind(__args, ["hub_id", "postal_code", "start", "end", "vin"], {}, [], null, null);
/** Return in-hub second-delivery appointment time slots. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryAppointmentsAtHub", $.attr(operations, "SECOND_DELIVERY_APPOINTMENTS_AT_HUB"), $.call(second_delivery_location_slots_variables, [hub_id, postal_code, start, end, vin], null)], null));
return $.call(parse_second_delivery_hub_time_slots, [data], null);
}
async_get_second_delivery_virtual_time_slots(hub_id: string, postal_code: string, start: $.DateValue, end: $.DateValue, vin: string): Promise<SecondDeliveryTimeSlotsResult | null>;
/** Return virtual second-delivery appointment time slots. */
async async_get_second_delivery_virtual_time_slots(...__args: any[]): any {
let data;
let {"hub_id": hub_id, "postal_code": postal_code, "start": start, "end": end, "vin": vin} = $.bind(__args, ["hub_id", "postal_code", "start", "end", "vin"], {}, [], null, null);
/** Return virtual second-delivery appointment time slots. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryAppointmentsAtVirtual", $.attr(operations, "SECOND_DELIVERY_APPOINTMENTS_AT_VIRTUAL"), $.call(second_delivery_location_slots_variables, [hub_id, postal_code, start, end, vin], null)], null));
return $.call(parse_second_delivery_virtual_time_slots, [data], null);
}
async_get_second_delivery_eligibility(vin: string): Promise<SecondDeliveryEligibility | null>;
/** Return second-delivery eligibility and CTA state. */
async async_get_second_delivery_eligibility(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return second-delivery eligibility and CTA state. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryEligibility", $.attr(operations, "SECOND_DELIVERY_ELIGIBILITY"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_second_delivery_eligibility, [data], null);
}
async_validate_second_delivery_address(vin: string, address: AddressInput): Promise<SecondDeliveryAddressValidationResult | null>;
/** Validate an address for at-home second delivery. */
async async_validate_second_delivery_address(...__args: any[]): any {
let data;
let {"vin": vin, "address": address} = $.bind(__args, ["vin", "address"], {}, [], null, null);
/** Validate an address for at-home second delivery. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ValidateSecondDeliveryAddress", $.attr(operations, "VALIDATE_SECOND_DELIVERY_ADDRESS"), Object.assign({}, {["vin"]: vin}, {["address"]: $.call(address_input, [address], null)})], null));
return $.call(parse_second_delivery_address_validation, [data], null);
}
async_cancel_second_delivery_appointment(activity_id: number): Promise<SecondDeliveryOperationResult | null>;
/** Cancel a second-delivery appointment. */
async async_cancel_second_delivery_appointment(...__args: any[]): any {
let data;
let {"activity_id": activity_id} = $.bind(__args, ["activity_id"], {}, [], null, null);
/** Cancel a second-delivery appointment. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CancelSecondDeliveryAppointment", $.attr(operations, "CANCEL_SECOND_DELIVERY_APPOINTMENT"), Object.assign({}, {["activityId"]: activity_id})], null));
return $.call(parse_cancel_second_delivery_appointment, [data], null);
}
async_create_second_delivery_appointment(appointment: SecondDeliveryAppointmentInput): Promise<SecondDeliveryOperationResult | null>;
/** Create a second-delivery appointment. */
async async_create_second_delivery_appointment(...__args: any[]): any {
let data;
let {"appointment": appointment} = $.bind(__args, ["appointment"], {}, [], null, null);
/** Create a second-delivery appointment. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreateSecondDeliveryAppointment", $.attr(operations, "CREATE_SECOND_DELIVERY_APPOINTMENT"), $.call(second_delivery_appointment_variables, [appointment], null)], null));
return $.call(parse_create_second_delivery_appointment, [data], null);
}
async_second_delivery_send_auth_code(appointment_id: number, access_token: string, options: { send_via_email: boolean; send_via_sms: boolean }): Promise<SecondDeliveryOperationResult | null>;
/** Send a second-delivery appointment authentication code. */
async async_second_delivery_send_auth_code(...__args: any[]): any {
let data;
let {"appointment_id": appointment_id, "access_token": access_token, "send_via_email": send_via_email, "send_via_sms": send_via_sms} = $.bind(__args, ["appointment_id", "access_token"], {}, ["send_via_email", "send_via_sms"], null, null);
/** Send a second-delivery appointment authentication code. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SecondDeliverySendAuthCode", $.attr(operations, "SECOND_DELIVERY_SEND_AUTH_CODE"), $.call(second_delivery_send_auth_code_variables, [appointment_id, access_token, send_via_email, send_via_sms], null)], null));
return $.call(parse_second_delivery_send_auth_code, [data], null);
}
async_second_delivery_verify_auth_code(appointment_id: number, access_token: string, auth_code: string): Promise<SecondDeliveryOperationResult | null>;
/** Verify a second-delivery appointment authentication code. */
async async_second_delivery_verify_auth_code(...__args: any[]): any {
let data;
let {"appointment_id": appointment_id, "access_token": access_token, "auth_code": auth_code} = $.bind(__args, ["appointment_id", "access_token", "auth_code"], {}, [], null, null);
/** Verify a second-delivery appointment authentication code. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SecondDeliveryVerifyAuthCode", $.attr(operations, "SECOND_DELIVERY_VERIFY_AUTH_CODE"), $.call(second_delivery_verify_auth_code_variables, [appointment_id, access_token, auth_code], null)], null));
return $.call(parse_second_delivery_verify_auth_code, [data], null);
}
async_update_second_delivery_appointment(activity_id: number, appointment: SecondDeliveryAppointmentInput): Promise<SecondDeliveryOperationResult | null>;
/** Replace a second-delivery appointment's selected details. */
async async_update_second_delivery_appointment(...__args: any[]): any {
let data;
let {"activity_id": activity_id, "appointment": appointment} = $.bind(__args, ["activity_id", "appointment"], {}, [], null, null);
/** Replace a second-delivery appointment's selected details. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateSecondDeliveryAppointment", $.attr(operations, "UPDATE_SECOND_DELIVERY_APPOINTMENT"), $.call(update_second_delivery_appointment_variables, [activity_id, appointment], null)], null));
return $.call(parse_update_second_delivery_appointment, [data], null);
}
}
$.classType(_SecondDeliveryClientMixin);
export interface _SecondDeliveryClientMixin extends _NissanClientBase {}
