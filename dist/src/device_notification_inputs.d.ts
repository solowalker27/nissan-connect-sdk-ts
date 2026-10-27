import { DeviceOS } from "./device_notification_models";
export { DeviceOS };
import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
export declare let MYNISSAN_ANDROID_APP_NAME: string;
/** One mobile device registered to receive Nissan push notifications. */
export declare class MobileInput {
    readonly device_id: string;
    readonly device_os: DeviceOS;
    readonly app_name: string;
    readonly token: string;
    static __fields: (string | symbol)[][];
    constructor(device_id: string, device_os: DeviceOS, app_name: string, token: string);
    constructor(options: {
        device_id: string;
        device_os: DeviceOS;
        app_name: string;
        token: string;
    });
}
/** Top-level device input accepted by Nissan's current push API. */
export declare class MobileInfoInput {
    readonly mobile: MobileInput;
    static __fields: (string | symbol)[][];
    constructor(mobile: MobileInput);
    constructor(options: {
        mobile: MobileInput;
    });
}
export declare function device_os_input(value: DeviceOS): string;
export declare function current_device_type_input(value: DeviceOS): string;
export declare function mobile_input(value: MobileInput): Record<string, unknown>;
export declare function mobile_info_input(value: MobileInfoInput): Record<string, unknown>;
export declare function register_push_notifications_variables(device_id: string, token: string, device_os: DeviceOS): Record<string, unknown>;
export declare function unregister_push_notifications_variables(device_id: string, device_os: DeviceOS): Record<string, unknown>;
export declare function register_device_for_push_notifications_variables(value: MobileInfoInput): Record<string, unknown>;
export declare function unregister_device_for_push_notifications_variables(app_name: string, device_id: string, device_os: DeviceOS): Record<string, unknown>;
export declare function in_vehicle_messages_variables(vin: string): Record<string, unknown>;
export declare function in_vehicle_message_variables(vin: string, campaign_id: string, push?: boolean | UnsetType | null): Record<string, unknown>;
