import { py as $ } from "./_runtime";
import { CoordinateInput, coordinate_input } from "./common_inputs";
export { CoordinateInput, coordinate_input };
import { DrivingHistoryAggregator, WeightUnit } from "./extended_vehicle_models";
export { DrivingHistoryAggregator, WeightUnit };
import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
import { DistanceUnit, SpeedUnit } from "./models";
export { DistanceUnit, SpeedUnit };
import { PlugConnectorType } from "./navigation_inputs";
export { PlugConnectorType };
export declare const EmpEvseStatusInput: $.EnumType<{
    readonly AVAILABLE: "AVAILABLE";
    readonly ALL: "ALL";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EmpEvseStatusInput = ReturnType<typeof EmpEvseStatusInput>;
export declare const EmpConnectorLevelInput: $.EnumType<{
    readonly L1: "L1";
    readonly L2: "L2";
    readonly L3: "L3";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EmpConnectorLevelInput = ReturnType<typeof EmpConnectorLevelInput>;
export declare function driving_history_variables(vin: string, aggregator: DrivingHistoryAggregator, options?: {
    distance_unit?: DistanceUnit | UnsetType | null;
    weight_unit?: WeightUnit | UnsetType | null;
    speed_unit?: SpeedUnit | UnsetType | null;
}): Record<string, unknown>;
export declare function ev_charge_stations_variables(vin: string, coordinate: CoordinateInput, options?: {
    plug_connector_types?: ReadonlyArray<PlugConnectorType | null> | UnsetType | null;
    enable_within_range_restriction?: boolean | UnsetType | null;
}): Record<string, unknown>;
export declare function e_vehicle_eligibility_variables(vin: string): Record<string, unknown>;
export declare function last_known_camera_usage_counter_variables(vin: string): Record<string, unknown>;
export declare function location_details_variables(vin: string, latitude: string, longitude: string, in_network_only: boolean, range_value: number, options?: {
    operator_names?: ReadonlyArray<string | null> | UnsetType | null;
    evse?: EmpEvseStatusInput | UnsetType | null;
    plug_types?: ReadonlyArray<string | null> | UnsetType | null;
    charge_level?: EmpConnectorLevelInput | UnsetType | null;
    pnc_stations_only?: boolean | UnsetType | null;
}): Record<string, unknown>;
export declare function parking_chargeable_variables(evse_id: string): Record<string, unknown>;
export declare function shareable_capabilities_variables(vin: string, options?: {
    driver_id?: string | UnsetType | null;
}): Record<string, unknown>;
export declare function tariff_pricing_variables(vin: string, location_id: string): Record<string, unknown>;
export declare function _optional_enum(value: $.EnumValue | UnsetType | null): unknown;
export declare function _optional_nullable_enum_list(value: ReadonlyArray<any | null> | UnsetType | null): unknown;
export declare function _optional_nullable_string_list(value: ReadonlyArray<string | null> | UnsetType | null): unknown;
