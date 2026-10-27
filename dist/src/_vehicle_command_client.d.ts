import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { _charge_schedule_input, _climate_parameters_input, _climate_schedule_input, _optional_variables, _temperature_input } from "./_client_helpers";
export { _charge_schedule_input, _climate_parameters_input, _climate_schedule_input, _optional_variables, _temperature_input };
import { ChargeScheduleInput, ClimateScheduleInput, ClimateSettings, ServiceRequest, ServiceRequestKind } from "./models";
export { ChargeScheduleInput, ClimateScheduleInput, ClimateSettings, ServiceRequest, ServiceRequestKind };
declare const _VehicleCommandClientMixin_base: any;
/** Translated upstream _VehicleCommandClientMixin. */
export declare class _VehicleCommandClientMixin extends _VehicleCommandClientMixin_base {
    constructor(...__args: any[]);
    async_lock_doors(vin: string): Promise<ServiceRequest>;
    async_unlock_doors(vin: string): Promise<ServiceRequest>;
    async_flash_lights(vin: string): Promise<ServiceRequest>;
    async_flash_lights_and_horn(vin: string): Promise<ServiceRequest>;
    async_locate_vehicle(vin: string): Promise<ServiceRequest>;
    async_start_engine(vin: string, options?: {
        climate?: ClimateSettings | null;
        set_as_default?: boolean | null;
    }): Promise<ServiceRequest>;
    async_stop_engine(vin: string): Promise<ServiceRequest>;
    async_refresh_vehicle_status(vin: string): Promise<ServiceRequest>;
    async_refresh_battery_status(vin: string): Promise<boolean>;
    async_refresh_climate_status(vin: string): Promise<boolean>;
    async_wake_up_vehicle(vin: string): Promise<boolean>;
    async_take_photos_around_vehicle(vin: string): Promise<ServiceRequest>;
    async_create_charge_schedule(vin: string, schedule: ChargeScheduleInput): Promise<ServiceRequest>;
    async_update_charge_schedule(vin: string, schedule_id: string, schedule: ChargeScheduleInput): Promise<ServiceRequest>;
    async_delete_charge_schedule(vin: string, schedule_id: string): Promise<ServiceRequest>;
    async_toggle_charge_schedule(vin: string, schedule_id: string, options: {
        enabled: boolean;
    }): Promise<ServiceRequest>;
    async_create_climate_schedule(vin: string, schedule: ClimateScheduleInput): Promise<ServiceRequest>;
    async_update_climate_schedule(vin: string, schedule_id: string, schedule: ClimateScheduleInput): Promise<ServiceRequest>;
    async_delete_climate_schedule(vin: string, schedule_id: string): Promise<ServiceRequest>;
    async_toggle_climate_schedule(vin: string, schedule_id: string, options: {
        enabled: boolean;
    }): Promise<ServiceRequest>;
}
export interface _VehicleCommandClientMixin extends _NissanClientBase {
}
