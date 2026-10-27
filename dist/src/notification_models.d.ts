import { py as $ } from "./_runtime";
export declare const NotificationCategory: $.EnumType<{
    readonly DOOR_LOCK: "DOOR_LOCK";
    readonly DOOR_UNLOCK: "DOOR_UNLOCK";
    readonly ENGINE: "ENGINE";
    readonly HORN_LIGHTS: "HORN_LIGHTS";
    readonly LOCATION: "LOCATION";
    readonly BOUNDARY_ALERTS: "BOUNDARY_ALERTS";
    readonly CURFEW_ALERTS: "CURFEW_ALERTS";
    readonly SPEED_ALERTS: "SPEED_ALERTS";
    readonly STOLEN_VEHICLE: "STOLEN_VEHICLE";
    readonly THEFT_ALARM: "THEFT_ALARM";
    readonly MIL: "MIL";
    readonly LAST_MILE_NAVIGATION: "LAST_MILE_NAVIGATION";
    readonly VEHICLE_HEALTH_REPORT: "VEHICLE_HEALTH_REPORT";
    readonly T_JUNCTION: "T_JUNCTION";
    readonly EV_ROUTE_PLAN: "EV_ROUTE_PLAN";
    readonly REMOTE_HVAC: "REMOTE_HVAC";
    readonly VEHICLE_CHARGE: "VEHICLE_CHARGE";
    readonly PLUGIN_REMINDER: "PLUGIN_REMINDER";
    readonly ECALL_AUTOMATIC: "ECALL_AUTOMATIC";
    readonly IRP_PRECONDITION_REMINDER: "IRP_PRECONDITION_REMINDER";
    readonly MECHANICAL_ALERT: "MECHANICAL_ALERT";
    readonly FIRMWARE_OVER_THE_AIR: "FIRMWARE_OVER_THE_AIR";
    readonly BATTERY_HEATING: "BATTERY_HEATING";
    readonly PREDICTIVE_MAINTENANCE_REMINDER: "PREDICTIVE_MAINTENANCE_REMINDER";
    readonly PROACTIVE_MAINTENANCE_REMINDER: "PROACTIVE_MAINTENANCE_REMINDER";
    readonly LEAVING_VEHICLE_REMINDER: "LEAVING_VEHICLE_REMINDER";
    readonly INAPP_MESSAGING: "INAPP_MESSAGING";
    readonly SMART_CHARGE: "SMART_CHARGE";
    readonly POWER_STEERING_WARNING_ALERT: "POWER_STEERING_WARNING_ALERT";
    readonly ELECTRIC_SHIFT_CONTROL_ALERT: "ELECTRIC_SHIFT_CONTROL_ALERT";
    readonly AIRBAG_ALERT: "AIRBAG_ALERT";
    readonly TWELVE_VOLT_BATTERY_WARNING_ALERT: "TWELVE_VOLT_BATTERY_WARNING_ALERT";
    readonly OIL_PRESSURE_ALERT: "OIL_PRESSURE_ALERT";
    readonly TIRE_PRESSURE_ALERT: "TIRE_PRESSURE_ALERT";
    readonly BRAKES_ALERT: "BRAKES_ALERT";
    readonly POWER_LIMITATION_ALERT: "POWER_LIMITATION_ALERT";
    readonly CHECK_ENGINE_ALERT: "CHECK_ENGINE_ALERT";
    readonly ABS_ALERT: "ABS_ALERT";
    readonly OTA: "OTA";
    readonly FOD: "FOD";
    readonly VEHICLE_DYNAMIC_CONTROL_ALERT: "VEHICLE_DYNAMIC_CONTROL_ALERT";
    readonly E_PARKING_BRAKE_ALERT: "E_PARKING_BRAKE_ALERT";
    readonly AWD_ALERT: "AWD_ALERT";
    readonly ENGINE_COOLANT_ALERT: "ENGINE_COOLANT_ALERT";
    readonly I_KEY_ALERT: "I_KEY_ALERT";
    readonly LOW_BEAM_ALERT: "LOW_BEAM_ALERT";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type NotificationCategory = ReturnType<typeof NotificationCategory>;
export declare const NotificationDestination: $.EnumType<{
    readonly EMAIL: "EMAIL";
    readonly SMS: "SMS";
    readonly PUSH: "PUSH";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type NotificationDestination = ReturnType<typeof NotificationDestination>;
/** Opt-in state for one notification delivery channel. */
export declare class NotificationTypePreference {
    readonly destination: NotificationDestination;
    readonly opt_in: boolean;
    static __fields: (string | symbol)[][];
    constructor(destination: NotificationDestination, opt_in: boolean);
    constructor(options: {
        destination: NotificationDestination;
        opt_in: boolean;
    });
}
/** Delivery preferences for one vehicle-notification category. */
export declare class NotificationPreference {
    readonly notification_category: NotificationCategory;
    readonly notification_type: ReadonlyArray<NotificationTypePreference | null>;
    static __fields: (string | symbol)[][];
    constructor(notification_category: NotificationCategory, notification_type: ReadonlyArray<NotificationTypePreference | null>);
    constructor(options: {
        notification_category: NotificationCategory;
        notification_type: ReadonlyArray<NotificationTypePreference | null>;
    });
}
/** Delivery flags for Nissan Energy Charge Network notifications. */
export declare class NissanEnergyNotificationPreferences {
    readonly email_status: boolean | null;
    readonly push_status: boolean | null;
    readonly sms_status: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(email_status: boolean | null, push_status: boolean | null, sms_status: boolean | null);
    constructor(options: {
        email_status: boolean | null;
        push_status: boolean | null;
        sms_status: boolean | null;
    });
}
/** Status and resulting preferences returned by the Nissan Energy mutation. */
export declare class NissanEnergyNotificationPreferencesUpdate {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly preferences: NissanEnergyNotificationPreferences | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, preferences: NissanEnergyNotificationPreferences | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        preferences: NissanEnergyNotificationPreferences | null;
    });
}
