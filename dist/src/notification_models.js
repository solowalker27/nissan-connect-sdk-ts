"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NissanEnergyNotificationPreferencesUpdate = exports.NissanEnergyNotificationPreferences = exports.NotificationPreference = exports.NotificationTypePreference = exports.NotificationDestination = exports.NotificationCategory = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
exports.NotificationCategory = _runtime_1.py.enumType("NotificationCategory", { "DOOR_LOCK": "DOOR_LOCK", "DOOR_UNLOCK": "DOOR_UNLOCK", "ENGINE": "ENGINE", "HORN_LIGHTS": "HORN_LIGHTS", "LOCATION": "LOCATION", "BOUNDARY_ALERTS": "BOUNDARY_ALERTS", "CURFEW_ALERTS": "CURFEW_ALERTS", "SPEED_ALERTS": "SPEED_ALERTS", "STOLEN_VEHICLE": "STOLEN_VEHICLE", "THEFT_ALARM": "THEFT_ALARM", "MIL": "MIL", "LAST_MILE_NAVIGATION": "LAST_MILE_NAVIGATION", "VEHICLE_HEALTH_REPORT": "VEHICLE_HEALTH_REPORT", "T_JUNCTION": "T_JUNCTION", "EV_ROUTE_PLAN": "EV_ROUTE_PLAN", "REMOTE_HVAC": "REMOTE_HVAC", "VEHICLE_CHARGE": "VEHICLE_CHARGE", "PLUGIN_REMINDER": "PLUGIN_REMINDER", "ECALL_AUTOMATIC": "ECALL_AUTOMATIC", "IRP_PRECONDITION_REMINDER": "IRP_PRECONDITION_REMINDER", "MECHANICAL_ALERT": "MECHANICAL_ALERT", "FIRMWARE_OVER_THE_AIR": "FIRMWARE_OVER_THE_AIR", "BATTERY_HEATING": "BATTERY_HEATING", "PREDICTIVE_MAINTENANCE_REMINDER": "PREDICTIVE_MAINTENANCE_REMINDER", "PROACTIVE_MAINTENANCE_REMINDER": "PROACTIVE_MAINTENANCE_REMINDER", "LEAVING_VEHICLE_REMINDER": "LEAVING_VEHICLE_REMINDER", "INAPP_MESSAGING": "INAPP_MESSAGING", "SMART_CHARGE": "SMART_CHARGE", "POWER_STEERING_WARNING_ALERT": "POWER_STEERING_WARNING_ALERT", "ELECTRIC_SHIFT_CONTROL_ALERT": "ELECTRIC_SHIFT_CONTROL_ALERT", "AIRBAG_ALERT": "AIRBAG_ALERT", "TWELVE_VOLT_BATTERY_WARNING_ALERT": "TWELVE_VOLT_BATTERY_WARNING_ALERT", "OIL_PRESSURE_ALERT": "OIL_PRESSURE_ALERT", "TIRE_PRESSURE_ALERT": "TIRE_PRESSURE_ALERT", "BRAKES_ALERT": "BRAKES_ALERT", "POWER_LIMITATION_ALERT": "POWER_LIMITATION_ALERT", "CHECK_ENGINE_ALERT": "CHECK_ENGINE_ALERT", "ABS_ALERT": "ABS_ALERT", "OTA": "OTA", "FOD": "FOD", "VEHICLE_DYNAMIC_CONTROL_ALERT": "VEHICLE_DYNAMIC_CONTROL_ALERT", "E_PARKING_BRAKE_ALERT": "E_PARKING_BRAKE_ALERT", "AWD_ALERT": "AWD_ALERT", "ENGINE_COOLANT_ALERT": "ENGINE_COOLANT_ALERT", "I_KEY_ALERT": "I_KEY_ALERT", "LOW_BEAM_ALERT": "LOW_BEAM_ALERT", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.NotificationDestination = _runtime_1.py.enumType("NotificationDestination", { "EMAIL": "EMAIL", "SMS": "SMS", "PUSH": "PUSH", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Opt-in state for one notification delivery channel. */
class NotificationTypePreference {
    destination;
    opt_in;
    static __fields = [["destination", _runtime_1.py.MISSING], ["opt_in", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NotificationTypePreference, __args); Object.freeze(this); }
}
exports.NotificationTypePreference = NotificationTypePreference;
_runtime_1.py.classType(NotificationTypePreference);
/** Delivery preferences for one vehicle-notification category. */
class NotificationPreference {
    notification_category;
    notification_type;
    static __fields = [["notification_category", _runtime_1.py.MISSING], ["notification_type", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NotificationPreference, __args); Object.freeze(this); }
}
exports.NotificationPreference = NotificationPreference;
_runtime_1.py.classType(NotificationPreference);
/** Delivery flags for Nissan Energy Charge Network notifications. */
class NissanEnergyNotificationPreferences {
    email_status;
    push_status;
    sms_status;
    static __fields = [["email_status", _runtime_1.py.MISSING], ["push_status", _runtime_1.py.MISSING], ["sms_status", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanEnergyNotificationPreferences, __args); Object.freeze(this); }
}
exports.NissanEnergyNotificationPreferences = NissanEnergyNotificationPreferences;
_runtime_1.py.classType(NissanEnergyNotificationPreferences);
/** Status and resulting preferences returned by the Nissan Energy mutation. */
class NissanEnergyNotificationPreferencesUpdate {
    status_code;
    status_message;
    timestamp;
    preferences;
    static __fields = [["status_code", _runtime_1.py.MISSING], ["status_message", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["preferences", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NissanEnergyNotificationPreferencesUpdate, __args); Object.freeze(this); }
}
exports.NissanEnergyNotificationPreferencesUpdate = NissanEnergyNotificationPreferencesUpdate;
_runtime_1.py.classType(NissanEnergyNotificationPreferencesUpdate);
//# sourceMappingURL=notification_models.js.map