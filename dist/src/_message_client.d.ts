import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { in_vehicle_message_variables, in_vehicle_messages_variables } from "./device_notification_inputs";
export { in_vehicle_message_variables, in_vehicle_messages_variables };
import { InVehicleMessage, InVehicleMessageSummary } from "./device_notification_models";
export { InVehicleMessage, InVehicleMessageSummary };
import { parse_in_vehicle_message, parse_in_vehicle_messages } from "./device_notification_parsing";
export { parse_in_vehicle_message, parse_in_vehicle_messages };
import { UnsetType } from "./graphql_input";
export { UnsetType };
import { NissanEnergyNotificationPreferences, NotificationPreference } from "./notification_models";
export { NissanEnergyNotificationPreferences, NotificationPreference };
import { parse_nissan_energy_notification_preferences, parse_notification_preferences } from "./notification_parsing";
export { parse_nissan_energy_notification_preferences, parse_notification_preferences };
import { OtaUpdate, OtaUpdateProgress } from "./ota_models";
export { OtaUpdate, OtaUpdateProgress };
import { parse_ota_update, parse_ota_update_progress } from "./ota_parsing";
export { parse_ota_update, parse_ota_update_progress };
declare const _MessageClientMixin_base: any;
/** Translated upstream _MessageClientMixin. */
export declare class _MessageClientMixin extends _MessageClientMixin_base {
    constructor(...__args: any[]);
    async_get_ota_update(vin: string): Promise<OtaUpdate | null>;
    async_get_ota_update_progress(vin: string, campaign_operation_id: string): Promise<OtaUpdateProgress | null>;
    async_get_notification_preferences(vin: string): Promise<ReadonlyArray<NotificationPreference | null> | null>;
    async_get_nissan_energy_notification_preferences(vin: string): Promise<NissanEnergyNotificationPreferences | null>;
    async_get_in_vehicle_messages(vin: string): Promise<ReadonlyArray<InVehicleMessageSummary | null> | null>;
    async_get_in_vehicle_message(vin: string, campaign_id: string, options?: {
        push?: boolean | UnsetType | null;
    }): Promise<InVehicleMessage | null>;
}
export interface _MessageClientMixin extends _NissanClientBase {
}
