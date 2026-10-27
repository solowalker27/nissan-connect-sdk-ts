import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { UNSET, UnsetType, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, serialize_enum };
import { BatteryStatus, BoundaryAlert, ClimateStatus, CurfewAlert, DistanceUnit, DoorsStatus, SpeedAlert, SpeedUnit, TemperatureUnit, ValetAlert, VehicleStatus } from "./models";
export { BatteryStatus, BoundaryAlert, ClimateStatus, CurfewAlert, DistanceUnit, DoorsStatus, SpeedAlert, SpeedUnit, TemperatureUnit, ValetAlert, VehicleStatus };
import { parse_vehicle_status } from "./parsing";
export { parse_vehicle_status };
import { vehicle_battery_status_variables, vehicle_boundary_alerts_variables, vehicle_climate_status_variables, vehicle_curfew_alerts_variables, vehicle_doors_status_variables, vehicle_model_year_variables, vehicle_nickname_variables, vehicle_speed_alerts_variables, vehicle_status_and_recalls_variables, vehicle_status_variables, vehicle_valet_alerts_variables } from "./vehicle_detail_inputs";
export { vehicle_battery_status_variables, vehicle_boundary_alerts_variables, vehicle_climate_status_variables, vehicle_curfew_alerts_variables, vehicle_doors_status_variables, vehicle_model_year_variables, vehicle_nickname_variables, vehicle_speed_alerts_variables, vehicle_status_and_recalls_variables, vehicle_status_variables, vehicle_valet_alerts_variables };
import { VehicleModelYear, VehicleNickname, VehicleStatusAndRecalls } from "./vehicle_detail_models";
export { VehicleModelYear, VehicleNickname, VehicleStatusAndRecalls };
import { parse_vehicle_battery_status, parse_vehicle_boundary_alerts, parse_vehicle_climate_status, parse_vehicle_core_status, parse_vehicle_curfew_alerts, parse_vehicle_doors_status, parse_vehicle_model_year, parse_vehicle_nickname, parse_vehicle_speed_alerts, parse_vehicle_status_and_recalls, parse_vehicle_valet_alert } from "./vehicle_detail_parsing";
export { parse_vehicle_battery_status, parse_vehicle_boundary_alerts, parse_vehicle_climate_status, parse_vehicle_core_status, parse_vehicle_curfew_alerts, parse_vehicle_doors_status, parse_vehicle_model_year, parse_vehicle_nickname, parse_vehicle_speed_alerts, parse_vehicle_status_and_recalls, parse_vehicle_valet_alert };
declare const _VehicleDetailClientMixin_base: any;
/** Translated upstream _VehicleDetailClientMixin. */
export declare class _VehicleDetailClientMixin extends _VehicleDetailClientMixin_base {
    constructor(...__args: any[]);
    async_get_vehicle_status(vin: string, options?: {
        distance_unit?: DistanceUnit;
        temperature_unit?: TemperatureUnit;
    }): Promise<VehicleStatus>;
    async_get_vehicle_battery_status(vin: string, options?: {
        unit?: DistanceUnit | UnsetType | null;
    }): Promise<BatteryStatus | null>;
    async_get_vehicle_boundary_alerts(vin: string, options?: {
        distance_unit?: DistanceUnit | UnsetType | null;
    }): Promise<ReadonlyArray<BoundaryAlert | null> | null>;
    async_get_vehicle_climate_status(vin: string, temperature_unit: TemperatureUnit): Promise<ClimateStatus | null>;
    async_get_vehicle_curfew_alerts(vin: string): Promise<ReadonlyArray<CurfewAlert | null> | null>;
    async_get_vehicle_doors_status(vin: string): Promise<DoorsStatus | null>;
    async_get_vehicle_model_year(vin: string): Promise<VehicleModelYear | null>;
    async_get_vehicle_nickname(vin: string): Promise<VehicleNickname | null>;
    async_get_vehicle_speed_alerts(vin: string, options?: {
        speed_unit?: SpeedUnit | UnsetType | null;
    }): Promise<ReadonlyArray<SpeedAlert | null> | null>;
    async_get_vehicle_core_status(vin: string, options?: {
        unit?: DistanceUnit | UnsetType | null;
    }): Promise<VehicleStatus | null>;
    async_get_vehicle_status_and_recalls(vin: string, options?: {
        unit?: DistanceUnit | UnsetType | null;
    }): Promise<VehicleStatusAndRecalls | null>;
    async_get_vehicle_valet_alert(vin: string, options?: {
        distance_unit?: DistanceUnit | UnsetType | null;
    }): Promise<ValetAlert | null>;
}
export interface _VehicleDetailClientMixin extends _NissanClientBase {
}
