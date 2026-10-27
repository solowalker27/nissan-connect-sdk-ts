import { py as $ } from "./_runtime";
import { AddressInput, address_input } from "./common_inputs";
export { AddressInput, address_input };
import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };
export declare const SecondDeliveryAppointmentMode: $.EnumType<{
    readonly AT_HOME: "AT_HOME";
    readonly AT_DEALER: "AT_DEALER";
    readonly VIRTUAL: "VIRTUAL";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type SecondDeliveryAppointmentMode = ReturnType<typeof SecondDeliveryAppointmentMode>;
/** Required second-delivery customer contact fields. */
export declare class SecondDeliveryContactInput {
    readonly first_name: string;
    readonly last_name: string;
    readonly phone_number: string;
    readonly email: string;
    static __fields: (string | symbol)[][];
    constructor(first_name: string, last_name: string, phone_number: string, email: string);
    constructor(options: {
        first_name: string;
        last_name: string;
        phone_number: string;
        email: string;
    });
}
/** Fields used to create or replace a second-delivery appointment. */
export declare class SecondDeliveryAppointmentInput {
    readonly vin: string;
    readonly address: AddressInput;
    readonly contact: SecondDeliveryContactInput;
    readonly time_slot_id: number;
    readonly redelivery_notes: string | UnsetType | null;
    readonly feature_notes: string | UnsetType | null;
    readonly mode: SecondDeliveryAppointmentMode | UnsetType | null;
    static __fields: any[][];
    constructor(vin: string, address: AddressInput, contact: SecondDeliveryContactInput, time_slot_id: number, redelivery_notes?: string | UnsetType | null, feature_notes?: string | UnsetType | null, mode?: SecondDeliveryAppointmentMode | UnsetType | null);
    constructor(options: {
        vin: string;
        address: AddressInput;
        contact: SecondDeliveryContactInput;
        time_slot_id: number;
        redelivery_notes?: string | UnsetType | null;
        feature_notes?: string | UnsetType | null;
        mode?: SecondDeliveryAppointmentMode | UnsetType | null;
    });
}
export declare function second_delivery_appointment_variables(config: SecondDeliveryAppointmentInput): Record<string, unknown>;
export declare function update_second_delivery_appointment_variables(activity_id: number, config: SecondDeliveryAppointmentInput): Record<string, unknown>;
export declare function second_delivery_home_slots_variables(vin: string, address: AddressInput, hub_id: string, start: $.DateValue, end: $.DateValue): Record<string, unknown>;
export declare function second_delivery_location_slots_variables(hub_id: string, postal_code: string, start: $.DateValue, end: $.DateValue, vin: string): Record<string, unknown>;
export declare function second_delivery_send_auth_code_variables(appointment_id: number, access_token: string, send_via_email: boolean, send_via_sms: boolean): Record<string, unknown>;
export declare function second_delivery_verify_auth_code_variables(appointment_id: number, access_token: string, auth_code: string): Record<string, unknown>;
export declare function _contact_input(value: SecondDeliveryContactInput): Record<string, unknown>;
