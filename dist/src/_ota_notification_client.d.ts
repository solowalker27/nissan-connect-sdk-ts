import { py as $ } from "./_runtime";
import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { MobileInfoInput, register_device_for_push_notifications_variables, register_push_notifications_variables, unregister_device_for_push_notifications_variables, unregister_push_notifications_variables } from "./device_notification_inputs";
export { MobileInfoInput, register_device_for_push_notifications_variables, register_push_notifications_variables, unregister_device_for_push_notifications_variables, unregister_push_notifications_variables };
import { DeviceOS, PushNotificationResult } from "./device_notification_models";
export { DeviceOS, PushNotificationResult };
import { parse_register_device_for_push_notifications, parse_register_push_notifications, parse_unregister_device_for_push_notifications, parse_unregister_push_notifications } from "./device_notification_parsing";
export { parse_register_device_for_push_notifications, parse_register_push_notifications, parse_unregister_device_for_push_notifications, parse_unregister_push_notifications };
import { UNSET, UnsetType, optional_input_fields } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields };
import { ServiceRequest, ServiceRequestKind } from "./models";
export { ServiceRequest, ServiceRequestKind };
import { NotificationPreferenceInput, notification_preferences_input, update_nissan_energy_notification_preferences_variables } from "./notification_inputs";
export { NotificationPreferenceInput, notification_preferences_input, update_nissan_energy_notification_preferences_variables };
import { NissanEnergyNotificationPreferencesUpdate, NotificationPreference } from "./notification_models";
export { NissanEnergyNotificationPreferencesUpdate, NotificationPreference };
import { parse_notification_preferences, parse_update_nissan_energy_notification_preferences } from "./notification_parsing";
export { parse_notification_preferences, parse_update_nissan_energy_notification_preferences };
import { data_wipe_type_input, download_ota_update_input, ota_activation_schedule_input } from "./ota_inputs";
export { data_wipe_type_input, download_ota_update_input, ota_activation_schedule_input };
import { DataWipeType } from "./ota_models";
export { DataWipeType };
declare const _OtaNotificationClientMixin_base: any;
/** Translated upstream _OtaNotificationClientMixin. */
export declare class _OtaNotificationClientMixin extends _OtaNotificationClientMixin_base {
    constructor(...__args: any[]);
    async_download_ota_update(vin: string, ota_update_id: string): Promise<ServiceRequest>;
    async_activate_ota_update(vin: string, ota_update_id: string): Promise<ServiceRequest>;
    async_cancel_ota_activation(vin: string, ota_update_id: string): Promise<ServiceRequest>;
    async_schedule_ota_activation(vin: string, ota_update_id: string, scheduled_date: $.DateValue): Promise<ServiceRequest>;
    async_update_scheduled_ota_activation(vin: string, ota_update_id: string, scheduled_date: $.DateValue): Promise<ServiceRequest>;
    async_cancel_scheduled_ota_activation(vin: string, ota_update_id: string): Promise<ServiceRequest>;
    async_wipe_vehicle_data(vin: string, options?: {
        data_wipe_type?: DataWipeType | UnsetType | null;
    }): Promise<ServiceRequest>;
    async_set_notification_preferences(vin: string, preferences: ReadonlyArray<NotificationPreferenceInput | null>): Promise<ReadonlyArray<NotificationPreference | null> | null>;
    async_update_nissan_energy_notification_preferences(vin: string, options?: {
        email_status?: boolean | UnsetType | null;
        push_status?: boolean | UnsetType | null;
        sms_status?: boolean | UnsetType | null;
    }): Promise<NissanEnergyNotificationPreferencesUpdate | null>;
    async_register_push_notifications(device_id: string, token: string, device_os: DeviceOS): Promise<boolean | null>;
    async_unregister_push_notifications(device_id: string, device_os: DeviceOS): Promise<boolean | null>;
    async_register_device_for_push_notifications(mobile_info: MobileInfoInput): Promise<PushNotificationResult | null>;
    async_unregister_device_for_push_notifications(app_name: string, device_id: string, device_os: DeviceOS): Promise<PushNotificationResult | null>;
}
export interface _OtaNotificationClientMixin extends _NissanClientBase {
}
