// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

export const NotificationCategory = $.enumType("NotificationCategory", {"DOOR_LOCK": "DOOR_LOCK", "DOOR_UNLOCK": "DOOR_UNLOCK", "ENGINE": "ENGINE", "HORN_LIGHTS": "HORN_LIGHTS", "LOCATION": "LOCATION", "BOUNDARY_ALERTS": "BOUNDARY_ALERTS", "CURFEW_ALERTS": "CURFEW_ALERTS", "SPEED_ALERTS": "SPEED_ALERTS", "STOLEN_VEHICLE": "STOLEN_VEHICLE", "THEFT_ALARM": "THEFT_ALARM", "MIL": "MIL", "LAST_MILE_NAVIGATION": "LAST_MILE_NAVIGATION", "VEHICLE_HEALTH_REPORT": "VEHICLE_HEALTH_REPORT", "T_JUNCTION": "T_JUNCTION", "EV_ROUTE_PLAN": "EV_ROUTE_PLAN", "REMOTE_HVAC": "REMOTE_HVAC", "VEHICLE_CHARGE": "VEHICLE_CHARGE", "PLUGIN_REMINDER": "PLUGIN_REMINDER", "ECALL_AUTOMATIC": "ECALL_AUTOMATIC", "IRP_PRECONDITION_REMINDER": "IRP_PRECONDITION_REMINDER", "MECHANICAL_ALERT": "MECHANICAL_ALERT", "FIRMWARE_OVER_THE_AIR": "FIRMWARE_OVER_THE_AIR", "BATTERY_HEATING": "BATTERY_HEATING", "PREDICTIVE_MAINTENANCE_REMINDER": "PREDICTIVE_MAINTENANCE_REMINDER", "PROACTIVE_MAINTENANCE_REMINDER": "PROACTIVE_MAINTENANCE_REMINDER", "LEAVING_VEHICLE_REMINDER": "LEAVING_VEHICLE_REMINDER", "INAPP_MESSAGING": "INAPP_MESSAGING", "SMART_CHARGE": "SMART_CHARGE", "POWER_STEERING_WARNING_ALERT": "POWER_STEERING_WARNING_ALERT", "ELECTRIC_SHIFT_CONTROL_ALERT": "ELECTRIC_SHIFT_CONTROL_ALERT", "AIRBAG_ALERT": "AIRBAG_ALERT", "TWELVE_VOLT_BATTERY_WARNING_ALERT": "TWELVE_VOLT_BATTERY_WARNING_ALERT", "OIL_PRESSURE_ALERT": "OIL_PRESSURE_ALERT", "TIRE_PRESSURE_ALERT": "TIRE_PRESSURE_ALERT", "BRAKES_ALERT": "BRAKES_ALERT", "POWER_LIMITATION_ALERT": "POWER_LIMITATION_ALERT", "CHECK_ENGINE_ALERT": "CHECK_ENGINE_ALERT", "ABS_ALERT": "ABS_ALERT", "OTA": "OTA", "FOD": "FOD", "VEHICLE_DYNAMIC_CONTROL_ALERT": "VEHICLE_DYNAMIC_CONTROL_ALERT", "E_PARKING_BRAKE_ALERT": "E_PARKING_BRAKE_ALERT", "AWD_ALERT": "AWD_ALERT", "ENGINE_COOLANT_ALERT": "ENGINE_COOLANT_ALERT", "I_KEY_ALERT": "I_KEY_ALERT", "LOW_BEAM_ALERT": "LOW_BEAM_ALERT", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type NotificationCategory = ReturnType<typeof NotificationCategory>;

export const NotificationDestination = $.enumType("NotificationDestination", {"EMAIL": "EMAIL", "SMS": "SMS", "PUSH": "PUSH", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type NotificationDestination = ReturnType<typeof NotificationDestination>;

/** Opt-in state for one notification delivery channel. */
export class NotificationTypePreference {
readonly destination: NotificationDestination;
readonly opt_in: boolean;
static __fields = [["destination", $.MISSING], ["opt_in", $.MISSING]];
constructor(destination: NotificationDestination, opt_in: boolean);
constructor(options: { destination: NotificationDestination; opt_in: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NotificationTypePreference, __args);  Object.freeze(this); }
}
$.classType(NotificationTypePreference);

/** Delivery preferences for one vehicle-notification category. */
export class NotificationPreference {
readonly notification_category: NotificationCategory;
readonly notification_type: ReadonlyArray<NotificationTypePreference | null>;
static __fields = [["notification_category", $.MISSING], ["notification_type", $.MISSING]];
constructor(notification_category: NotificationCategory, notification_type: ReadonlyArray<NotificationTypePreference | null>);
constructor(options: { notification_category: NotificationCategory; notification_type: ReadonlyArray<NotificationTypePreference | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NotificationPreference, __args);  Object.freeze(this); }
}
$.classType(NotificationPreference);

/** Delivery flags for Nissan Energy Charge Network notifications. */
export class NissanEnergyNotificationPreferences {
readonly email_status: boolean | null;
readonly push_status: boolean | null;
readonly sms_status: boolean | null;
static __fields = [["email_status", $.MISSING], ["push_status", $.MISSING], ["sms_status", $.MISSING]];
constructor(email_status: boolean | null, push_status: boolean | null, sms_status: boolean | null);
constructor(options: { email_status: boolean | null; push_status: boolean | null; sms_status: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanEnergyNotificationPreferences, __args);  Object.freeze(this); }
}
$.classType(NissanEnergyNotificationPreferences);

/** Status and resulting preferences returned by the Nissan Energy mutation. */
export class NissanEnergyNotificationPreferencesUpdate {
readonly status_code: string | null;
readonly status_message: string | null;
readonly timestamp: string | null;
readonly preferences: NissanEnergyNotificationPreferences | null;
static __fields = [["status_code", $.MISSING], ["status_message", $.MISSING], ["timestamp", $.MISSING], ["preferences", $.MISSING]];
constructor(status_code: string | null, status_message: string | null, timestamp: string | null, preferences: NissanEnergyNotificationPreferences | null);
constructor(options: { status_code: string | null; status_message: string | null; timestamp: string | null; preferences: NissanEnergyNotificationPreferences | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NissanEnergyNotificationPreferencesUpdate, __args);  Object.freeze(this); }
}
$.classType(NissanEnergyNotificationPreferencesUpdate);
