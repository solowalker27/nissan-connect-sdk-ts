import { UNSET, UnsetType, optional_input_fields } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields };
/** Insurance details accepted by the add and update mutations. */
export declare class VehicleInsuranceInput {
    readonly vin: string;
    readonly insurer_id: string;
    readonly policy_number: string;
    readonly expiry_date: string;
    readonly custom_insurance_name: string | UnsetType | null;
    readonly custom_insurance_phone_number: string | UnsetType | null;
    static __fields: any[][];
    constructor(vin: string, insurer_id: string, policy_number: string, expiry_date: string, custom_insurance_name?: string | UnsetType | null, custom_insurance_phone_number?: string | UnsetType | null);
    constructor(options: {
        vin: string;
        insurer_id: string;
        policy_number: string;
        expiry_date: string;
        custom_insurance_name?: string | UnsetType | null;
        custom_insurance_phone_number?: string | UnsetType | null;
    });
}
export declare function vehicle_insurance_variables(config: VehicleInsuranceInput): Record<string, unknown>;
