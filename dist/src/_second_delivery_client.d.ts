import { py as $ } from "./_runtime";
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
declare const _SecondDeliveryClientMixin_base: any;
/** Translated upstream _SecondDeliveryClientMixin. */
export declare class _SecondDeliveryClientMixin extends _SecondDeliveryClientMixin_base {
    constructor(...__args: any[]);
    async_get_second_delivery_appointment(vin: string): Promise<SecondDeliveryAppointmentResult | null>;
    async_get_second_delivery_home_time_slots(vin: string, address: AddressInput, hub_id: string, start: $.DateValue, end: $.DateValue): Promise<SecondDeliveryTimeSlotsResult | null>;
    async_get_second_delivery_hub_time_slots(hub_id: string, postal_code: string, start: $.DateValue, end: $.DateValue, vin: string): Promise<SecondDeliveryTimeSlotsResult | null>;
    async_get_second_delivery_virtual_time_slots(hub_id: string, postal_code: string, start: $.DateValue, end: $.DateValue, vin: string): Promise<SecondDeliveryTimeSlotsResult | null>;
    async_get_second_delivery_eligibility(vin: string): Promise<SecondDeliveryEligibility | null>;
    async_validate_second_delivery_address(vin: string, address: AddressInput): Promise<SecondDeliveryAddressValidationResult | null>;
    async_cancel_second_delivery_appointment(activity_id: number): Promise<SecondDeliveryOperationResult | null>;
    async_create_second_delivery_appointment(appointment: SecondDeliveryAppointmentInput): Promise<SecondDeliveryOperationResult | null>;
    async_second_delivery_send_auth_code(appointment_id: number, access_token: string, options: {
        send_via_email: boolean;
        send_via_sms: boolean;
    }): Promise<SecondDeliveryOperationResult | null>;
    async_second_delivery_verify_auth_code(appointment_id: number, access_token: string, auth_code: string): Promise<SecondDeliveryOperationResult | null>;
    async_update_second_delivery_appointment(activity_id: number, appointment: SecondDeliveryAppointmentInput): Promise<SecondDeliveryOperationResult | null>;
}
export interface _SecondDeliveryClientMixin extends _NissanClientBase {
}
