// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { AddressInput, address_input } from "./common_inputs";
export { AddressInput, address_input };

import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };

export const SecondDeliveryAppointmentMode = $.enumType("SecondDeliveryAppointmentMode", {"AT_HOME": "AT_HOME", "AT_DEALER": "AT_DEALER", "VIRTUAL": "VIRTUAL", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type SecondDeliveryAppointmentMode = ReturnType<typeof SecondDeliveryAppointmentMode>;

/** Required second-delivery customer contact fields. */
export class SecondDeliveryContactInput {
readonly first_name: string;
readonly last_name: string;
readonly phone_number: string;
readonly email: string;
static __fields = [["first_name", $.MISSING], ["last_name", $.MISSING], ["phone_number", $.MISSING], ["email", $.MISSING]];
constructor(first_name: string, last_name: string, phone_number: string, email: string);
constructor(options: { first_name: string; last_name: string; phone_number: string; email: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryContactInput, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryContactInput);

/** Fields used to create or replace a second-delivery appointment. */
export class SecondDeliveryAppointmentInput {
readonly vin: string;
readonly address: AddressInput;
readonly contact: SecondDeliveryContactInput;
readonly time_slot_id: number;
readonly redelivery_notes: string | UnsetType | null;
readonly feature_notes: string | UnsetType | null;
readonly mode: SecondDeliveryAppointmentMode | UnsetType | null;
static __fields = [["vin", $.MISSING], ["address", $.MISSING], ["contact", $.MISSING], ["time_slot_id", $.MISSING], ["redelivery_notes", UNSET], ["feature_notes", UNSET], ["mode", UNSET]];
constructor(vin: string, address: AddressInput, contact: SecondDeliveryContactInput, time_slot_id: number, redelivery_notes?: string | UnsetType | null, feature_notes?: string | UnsetType | null, mode?: SecondDeliveryAppointmentMode | UnsetType | null);
constructor(options: { vin: string; address: AddressInput; contact: SecondDeliveryContactInput; time_slot_id: number; redelivery_notes?: string | UnsetType | null; feature_notes?: string | UnsetType | null; mode?: SecondDeliveryAppointmentMode | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SecondDeliveryAppointmentInput, __args);  Object.freeze(this); }
}
$.classType(SecondDeliveryAppointmentInput);

export function second_delivery_appointment_variables(config: SecondDeliveryAppointmentInput): Record<string, unknown>;
/** Serialize second-delivery appointment creation variables. */
export function second_delivery_appointment_variables(...__args: any[]): any {
let mode;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize second-delivery appointment creation variables. */
mode = $.attr(config, "mode");
if ($.truth($.call($.isinstance, [$.attr(config, "mode"), SecondDeliveryAppointmentMode], null))) {
mode = $.call(serialize_enum, [$.attr(config, "mode")], null);
}
return $.call(optional_input_fields, [], Object.assign({}, {"vin": $.attr(config, "vin")}, {"address": $.call(address_input, [$.attr(config, "address")], null)}, {"contactInformation": $.call(_contact_input, [$.attr(config, "contact")], null)}, {"timeSlotId": $.attr(config, "time_slot_id")}, {"redeliveryNotes": $.attr(config, "redelivery_notes")}, {"featureNotes": $.attr(config, "feature_notes")}, {"mode": mode}));
}

export function update_second_delivery_appointment_variables(activity_id: number, config: SecondDeliveryAppointmentInput): Record<string, unknown>;
/** Serialize second-delivery appointment replacement variables. */
export function update_second_delivery_appointment_variables(...__args: any[]): any {
let {"activity_id": activity_id, "config": config} = $.bind(__args, ["activity_id", "config"], {}, [], null, null);
/** Serialize second-delivery appointment replacement variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": $.attr(config, "vin")}, {"activityId": activity_id}, {"address": $.call(address_input, [$.attr(config, "address")], null)}, {"contactInformation": $.call(_contact_input, [$.attr(config, "contact")], null)}, {"timeSlotId": $.attr(config, "time_slot_id")}, {"redeliveryNotes": $.attr(config, "redelivery_notes")}, {"featureNotes": $.attr(config, "feature_notes")}));
}

export function second_delivery_home_slots_variables(vin: string, address: AddressInput, hub_id: string, start: $.DateValue, end: $.DateValue): Record<string, unknown>;
/** Serialize second-delivery at-home time-slot variables. */
export function second_delivery_home_slots_variables(...__args: any[]): any {
let {"vin": vin, "address": address, "hub_id": hub_id, "start": start, "end": end} = $.bind(__args, ["vin", "address", "hub_id", "start", "end"], {}, [], null, null);
/** Serialize second-delivery at-home time-slot variables. */
return Object.assign({}, {["vin"]: vin}, {["address"]: $.call(address_input, [address], null)}, {["hubId"]: hub_id}, {["start"]: $.call(serialize_datetime, [start], null)}, {["end"]: $.call(serialize_datetime, [end], null)});
}

export function second_delivery_location_slots_variables(hub_id: string, postal_code: string, start: $.DateValue, end: $.DateValue, vin: string): Record<string, unknown>;
/** Serialize at-hub or virtual second-delivery time-slot variables. */
export function second_delivery_location_slots_variables(...__args: any[]): any {
let {"hub_id": hub_id, "postal_code": postal_code, "start": start, "end": end, "vin": vin} = $.bind(__args, ["hub_id", "postal_code", "start", "end", "vin"], {}, [], null, null);
/** Serialize at-hub or virtual second-delivery time-slot variables. */
return Object.assign({}, {["hubId"]: hub_id}, {["zipCode"]: postal_code}, {["start"]: $.call(serialize_datetime, [start], null)}, {["end"]: $.call(serialize_datetime, [end], null)}, {["vin"]: vin});
}

export function second_delivery_send_auth_code_variables(appointment_id: number, access_token: string, send_via_email: boolean, send_via_sms: boolean): Record<string, unknown>;
/** Serialize second-delivery authentication-code delivery variables. */
export function second_delivery_send_auth_code_variables(...__args: any[]): any {
let {"appointment_id": appointment_id, "access_token": access_token, "send_via_email": send_via_email, "send_via_sms": send_via_sms} = $.bind(__args, ["appointment_id", "access_token", "send_via_email", "send_via_sms"], {}, [], null, null);
/** Serialize second-delivery authentication-code delivery variables. */
return Object.assign({}, {["appointmentId"]: appointment_id}, {["accessToken"]: access_token}, {["sendViaEmail"]: send_via_email}, {["sendViaSMS"]: send_via_sms});
}

export function second_delivery_verify_auth_code_variables(appointment_id: number, access_token: string, auth_code: string): Record<string, unknown>;
/** Serialize second-delivery authentication-code verification variables. */
export function second_delivery_verify_auth_code_variables(...__args: any[]): any {
let {"appointment_id": appointment_id, "access_token": access_token, "auth_code": auth_code} = $.bind(__args, ["appointment_id", "access_token", "auth_code"], {}, [], null, null);
/** Serialize second-delivery authentication-code verification variables. */
return Object.assign({}, {["appointmentId"]: appointment_id}, {["accessToken"]: access_token}, {["authCode"]: auth_code});
}

export function _contact_input(value: SecondDeliveryContactInput): Record<string, unknown>;
/** Translated upstream _contact_input. */
export function _contact_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return Object.assign({}, {["firstName"]: $.attr(value, "first_name")}, {["lastName"]: $.attr(value, "last_name")}, {["phoneNumber"]: $.attr(value, "phone_number")}, {["email"]: $.attr(value, "email")});
}
