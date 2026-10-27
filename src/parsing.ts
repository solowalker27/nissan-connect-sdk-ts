// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";

/** Core vehicle response parsers. */

import { parse_remote_service_history } from "./_vehicle_alert_parsing";
export { parse_remote_service_history };

import { parse_vehicle_capabilities } from "./_vehicle_capability_parsing";
export { parse_vehicle_capabilities };

import { parse_alert_request_status, parse_breach_alerts, parse_photos_around_vehicle, parse_reminder_notifications_after_leaving_vehicle, parse_toggle_reminder_notifications_after_leaving_vehicle, parse_vehicle_alert_request, parse_vehicle_alerts, parse_vehicle_data_privacy_mode, parse_vehicle_location, parse_vehicle_status, parse_vehicles } from "./_vehicle_core_parsing";
export { parse_alert_request_status, parse_breach_alerts, parse_photos_around_vehicle, parse_reminder_notifications_after_leaving_vehicle, parse_toggle_reminder_notifications_after_leaving_vehicle, parse_vehicle_alert_request, parse_vehicle_alerts, parse_vehicle_data_privacy_mode, parse_vehicle_location, parse_vehicle_status, parse_vehicles };

import { parse_charge_config, parse_charge_schedules, parse_climate_defaults, parse_climate_schedules, parse_v2l_status, parse_vehicle_charge_history } from "./_vehicle_energy_parsing";
export { parse_charge_config, parse_charge_schedules, parse_climate_defaults, parse_climate_schedules, parse_v2l_status, parse_vehicle_charge_history };

import { parse_service_request, parse_service_request_result } from "./_vehicle_response_parsing";
export { parse_service_request, parse_service_request_result };

import { parse_vehicle_preferences, parse_vehicle_subscriptions, parse_vehicle_wifi_consumption } from "./_vehicle_subscription_parsing";
export { parse_vehicle_preferences, parse_vehicle_subscriptions, parse_vehicle_wifi_consumption };

export let __all__ = ["parse_alert_request_status", "parse_breach_alerts", "parse_charge_config", "parse_charge_schedules", "parse_climate_defaults", "parse_climate_schedules", "parse_photos_around_vehicle", "parse_reminder_notifications_after_leaving_vehicle", "parse_remote_service_history", "parse_service_request", "parse_service_request_result", "parse_toggle_reminder_notifications_after_leaving_vehicle", "parse_v2l_status", "parse_vehicle_alert_request", "parse_vehicle_alerts", "parse_vehicle_capabilities", "parse_vehicle_charge_history", "parse_vehicle_data_privacy_mode", "parse_vehicle_location", "parse_vehicle_preferences", "parse_vehicle_status", "parse_vehicle_subscriptions", "parse_vehicle_wifi_consumption", "parse_vehicles"];
