import { VehicleHologram } from "./garage_models";
export { VehicleHologram };
import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
/** Complete non-null address required by an NCAR/ICAR account registration. */
export declare class NcarIcarRegisterAccountAddressInput {
    readonly address_1: string;
    readonly address_2: string;
    readonly city: string;
    readonly state: string;
    readonly postal_code: string;
    readonly country: string;
    static __fields: (string | symbol)[][];
    constructor(address_1: string, address_2: string, city: string, state: string, postal_code: string, country: string);
    constructor(options: {
        address_1: string;
        address_2: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
    });
}
/** Complete non-null account accepted by NCAR/ICAR vehicle registration. */
export declare class NcarIcarRegisterAccountInput {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly phone_number: string;
    readonly address: NcarIcarRegisterAccountAddressInput;
    static __fields: (string | symbol)[][];
    constructor(first_name: string, last_name: string, email: string, phone_number: string, address: NcarIcarRegisterAccountAddressInput);
    constructor(options: {
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        address: NcarIcarRegisterAccountAddressInput;
    });
}
export declare function add_vehicle_variables(vin: string, terms_and_conditions_accepted: boolean): Record<string, unknown>;
export declare function delete_vehicle_variables(vin: string): Record<string, unknown>;
export declare function ncar_icar_add_vehicle_variables(terms_and_conditions_accepted: boolean, guid: string, options?: {
    account?: NcarIcarRegisterAccountInput | UnsetType | null;
}): Record<string, unknown>;
export declare function pending_vehicles_variables(): Record<string, unknown>;
export declare function ownership_status_variables(vin: string): Record<string, unknown>;
export declare function apc_agreement_variables(vin: string): Record<string, unknown>;
export declare function apc_document_url_variables(vin: string): Record<string, unknown>;
export declare function create_apc_agreement_variables(vin: string, opt_in: boolean): Record<string, unknown>;
export declare function update_apc_agreement_variables(vin: string, opt_in: boolean): Record<string, unknown>;
export declare function connected_terms_and_conditions_by_vin_variables(vin: string): Record<string, unknown>;
export declare function onboarding_features_variables(vin: string): Record<string, unknown>;
export declare function update_vehicle_variables(vin: string, options?: {
    license_plate?: string | UnsetType | null;
    hologram?: VehicleHologram | UnsetType | null;
}): Record<string, unknown>;
export declare function update_vehicle_manual_mileage_variables(vin: string, options?: {
    manual_mileage?: number | UnsetType | null;
}): Record<string, unknown>;
export declare function update_vehicle_nickname_variables(vin: string, nickname: string): Record<string, unknown>;
export declare function upload_ownership_verification_variables(vin: string, filename: string, attachment: string, opt_in_sms: boolean): Record<string, unknown>;
export declare function ncar_icar_register_account_address_input(value: NcarIcarRegisterAccountAddressInput): Record<string, unknown>;
export declare function ncar_icar_register_account_input(value: NcarIcarRegisterAccountInput): Record<string, unknown>;
export declare function _optional_ncar_icar_account(value: NcarIcarRegisterAccountInput | UnsetType | null): unknown;
export declare function _optional_hologram(value: VehicleHologram | UnsetType | null): unknown;
