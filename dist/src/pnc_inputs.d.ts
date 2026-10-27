import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
import { PlugAndChargeStatusInput } from "./pnc_models";
export { PlugAndChargeStatusInput };
export declare function start_charge_session_variables(vin: string, evse_id: string, options?: {
    location_id?: string | UnsetType | null;
}): Record<string, unknown>;
export declare function stop_charge_session_variables(vin: string): Record<string, unknown>;
export declare function update_pnc_service_status_variables(vin: string, status: PlugAndChargeStatusInput): Record<string, unknown>;
export declare function retry_certificate_install_variables(vin: string): Record<string, unknown>;
