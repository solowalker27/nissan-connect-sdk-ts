import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
import { DistanceUnit } from "./models";
export { DistanceUnit };
export declare function vehicle_preferred_dealer_variables(vin: string): Record<string, unknown>;
export declare function vehicle_recalls_variables(vin: string): Record<string, unknown>;
export declare function vehicle_roadside_assistance_variables(vin: string): Record<string, unknown>;
export declare function vehicle_service_history_variables(vin: string, options?: {
    unit?: DistanceUnit | UnsetType | null;
}): Record<string, unknown>;
export declare function warranty_info_variables(vin: string, options?: {
    mileage?: number | UnsetType | null;
}): Record<string, unknown>;
export declare function _optional_distance_unit(value: DistanceUnit | UnsetType | null): unknown;
