import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };
import { CreatePartsReminderInput, PastServiceInput, ResetPartsReminderInput, UpdatePartsReminderInput, UpdatePastServiceInput, add_past_service_variables, collision_history_variables, collision_probe_data_variables, create_parts_reminder_variables, delete_parts_reminder_variables, get_maintenance_timeline_variables, get_service_contracts_variables, parts_reminders_variables, reset_parts_reminder_variables, update_parts_reminder_variables, update_past_service_variables } from "./maintenance_inputs";
export { CreatePartsReminderInput, PastServiceInput, ResetPartsReminderInput, UpdatePartsReminderInput, UpdatePastServiceInput, add_past_service_variables, collision_history_variables, collision_probe_data_variables, create_parts_reminder_variables, delete_parts_reminder_variables, get_maintenance_timeline_variables, get_service_contracts_variables, parts_reminders_variables, reset_parts_reminder_variables, update_parts_reminder_variables, update_past_service_variables };
import { CollisionHistoryEntry, CollisionProbeReading, MaintenanceTimeline, PartsReminderMutationResult, PastServiceResult, ServiceContract, VehiclePartsReminders } from "./maintenance_models";
export { CollisionHistoryEntry, CollisionProbeReading, MaintenanceTimeline, PartsReminderMutationResult, PastServiceResult, ServiceContract, VehiclePartsReminders };
import { parse_add_past_service, parse_collision_history, parse_collision_probe_data, parse_create_parts_reminder, parse_delete_parts_reminder, parse_maintenance_timeline, parse_parts_reminders, parse_reset_parts_reminder, parse_service_contracts, parse_update_parts_reminder, parse_update_past_service } from "./maintenance_parsing";
export { parse_add_past_service, parse_collision_history, parse_collision_probe_data, parse_create_parts_reminder, parse_delete_parts_reminder, parse_maintenance_timeline, parse_parts_reminders, parse_reset_parts_reminder, parse_service_contracts, parse_update_parts_reminder, parse_update_past_service };
import { DataPrivacyMode, DistanceUnit, RemoteServiceHistory, VehiclePreferences, VehicleSubscriptions, VehicleWifiConsumption } from "./models";
export { DataPrivacyMode, DistanceUnit, RemoteServiceHistory, VehiclePreferences, VehicleSubscriptions, VehicleWifiConsumption };
import { parse_remote_service_history, parse_vehicle_data_privacy_mode, parse_vehicle_preferences, parse_vehicle_subscriptions, parse_vehicle_wifi_consumption } from "./parsing";
export { parse_remote_service_history, parse_vehicle_data_privacy_mode, parse_vehicle_preferences, parse_vehicle_subscriptions, parse_vehicle_wifi_consumption };
declare const _VehicleDataClientMixin_base: any;
/** Translated upstream _VehicleDataClientMixin. */
export declare class _VehicleDataClientMixin extends _VehicleDataClientMixin_base {
    constructor(...__args: any[]);
    async_get_vehicle_data_privacy_mode(vin: string): Promise<DataPrivacyMode | null>;
    async_get_vehicle_wifi_consumption(vin: string): Promise<VehicleWifiConsumption | null>;
    async_get_vehicle_preferences(vin: string): Promise<VehiclePreferences | null>;
    async_get_vehicle_subscriptions(vin: string): Promise<VehicleSubscriptions | null>;
    async_update_vehicle_preferences(vin: string, preferences: VehiclePreferences): Promise<boolean>;
    async_get_remote_service_history(vin: string, options: {
        page_number: number;
        items_per_page: number;
    }): Promise<RemoteServiceHistory | null>;
    async_get_maintenance_timeline(vin: string, mileage_unit?: DistanceUnit): Promise<MaintenanceTimeline | null>;
    async_get_service_contracts(vin: string, mileage: number): Promise<ReadonlyArray<ServiceContract | null> | null>;
    async_add_past_service(service?: PastServiceInput | UnsetType | null): Promise<PastServiceResult | null>;
    async_update_past_service(service: UpdatePastServiceInput): Promise<PastServiceResult | null>;
    async_get_parts_reminders(vin: string, options?: {
        unit?: DistanceUnit | UnsetType | null;
    }): Promise<VehiclePartsReminders | null>;
    async_create_parts_reminder(vin: string, reminder: CreatePartsReminderInput): Promise<PartsReminderMutationResult | null>;
    async_update_parts_reminder(vin: string, reminder: UpdatePartsReminderInput): Promise<PartsReminderMutationResult | null>;
    async_reset_parts_reminder(vin: string, reminder: ResetPartsReminderInput): Promise<PartsReminderMutationResult | null>;
    async_delete_parts_reminder(vin: string, reminder_id: string): Promise<PartsReminderMutationResult | null>;
    async_get_collision_history(vin: string): Promise<ReadonlyArray<CollisionHistoryEntry | null> | null>;
    async_get_collision_probe_data(vin: string): Promise<ReadonlyArray<CollisionProbeReading | null> | null>;
}
export interface _VehicleDataClientMixin extends _NissanClientBase {
}
