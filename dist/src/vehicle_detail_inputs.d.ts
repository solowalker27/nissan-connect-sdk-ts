import { py as $ } from "./_runtime";
import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
import { DistanceUnit, SpeedUnit, TemperatureUnit } from "./models";
export { DistanceUnit, SpeedUnit, TemperatureUnit };
export declare function vehicle_battery_status_variables(vin: string, options?: {
    unit?: DistanceUnit | UnsetType | null;
}): Record<string, unknown>;
export declare function vehicle_boundary_alerts_variables(vin: string, options?: {
    distance_unit?: DistanceUnit | UnsetType | null;
}): Record<string, unknown>;
export declare function vehicle_climate_status_variables(vin: string, temperature_unit: TemperatureUnit): Record<string, unknown>;
export declare function vehicle_curfew_alerts_variables(vin: string): Record<string, unknown>;
export declare function vehicle_doors_status_variables(vin: string): Record<string, unknown>;
export declare function vehicle_model_year_variables(vin: string): Record<string, unknown>;
export declare function vehicle_nickname_variables(vin: string): Record<string, unknown>;
export declare function vehicle_speed_alerts_variables(vin: string, options?: {
    speed_unit?: SpeedUnit | UnsetType | null;
}): Record<string, unknown>;
export declare function vehicle_status_variables(vin: string, options?: {
    unit?: DistanceUnit | UnsetType | null;
}): Record<string, unknown>;
export declare function vehicle_status_and_recalls_variables(vin: string, options?: {
    unit?: DistanceUnit | UnsetType | null;
}): Record<string, unknown>;
export declare function vehicle_valet_alerts_variables(vin: string, options?: {
    distance_unit?: DistanceUnit | UnsetType | null;
}): Record<string, unknown>;
export declare function _optional_enum(value: $.EnumValue | UnsetType | null): unknown;
