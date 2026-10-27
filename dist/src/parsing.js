"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.__all__ = exports.parse_vehicle_wifi_consumption = exports.parse_vehicle_subscriptions = exports.parse_vehicle_preferences = exports.parse_service_request_result = exports.parse_service_request = exports.parse_vehicle_charge_history = exports.parse_v2l_status = exports.parse_climate_schedules = exports.parse_climate_defaults = exports.parse_charge_schedules = exports.parse_charge_config = exports.parse_vehicles = exports.parse_vehicle_status = exports.parse_vehicle_location = exports.parse_vehicle_data_privacy_mode = exports.parse_vehicle_alerts = exports.parse_vehicle_alert_request = exports.parse_toggle_reminder_notifications_after_leaving_vehicle = exports.parse_reminder_notifications_after_leaving_vehicle = exports.parse_photos_around_vehicle = exports.parse_breach_alerts = exports.parse_alert_request_status = exports.parse_vehicle_capabilities = exports.parse_remote_service_history = void 0;
/** Core vehicle response parsers. */
const _vehicle_alert_parsing_1 = require("./_vehicle_alert_parsing");
Object.defineProperty(exports, "parse_remote_service_history", { enumerable: true, get: function () { return _vehicle_alert_parsing_1.parse_remote_service_history; } });
const _vehicle_capability_parsing_1 = require("./_vehicle_capability_parsing");
Object.defineProperty(exports, "parse_vehicle_capabilities", { enumerable: true, get: function () { return _vehicle_capability_parsing_1.parse_vehicle_capabilities; } });
const _vehicle_core_parsing_1 = require("./_vehicle_core_parsing");
Object.defineProperty(exports, "parse_alert_request_status", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_alert_request_status; } });
Object.defineProperty(exports, "parse_breach_alerts", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_breach_alerts; } });
Object.defineProperty(exports, "parse_photos_around_vehicle", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_photos_around_vehicle; } });
Object.defineProperty(exports, "parse_reminder_notifications_after_leaving_vehicle", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_reminder_notifications_after_leaving_vehicle; } });
Object.defineProperty(exports, "parse_toggle_reminder_notifications_after_leaving_vehicle", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_toggle_reminder_notifications_after_leaving_vehicle; } });
Object.defineProperty(exports, "parse_vehicle_alert_request", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_vehicle_alert_request; } });
Object.defineProperty(exports, "parse_vehicle_alerts", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_vehicle_alerts; } });
Object.defineProperty(exports, "parse_vehicle_data_privacy_mode", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_vehicle_data_privacy_mode; } });
Object.defineProperty(exports, "parse_vehicle_location", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_vehicle_location; } });
Object.defineProperty(exports, "parse_vehicle_status", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_vehicle_status; } });
Object.defineProperty(exports, "parse_vehicles", { enumerable: true, get: function () { return _vehicle_core_parsing_1.parse_vehicles; } });
const _vehicle_energy_parsing_1 = require("./_vehicle_energy_parsing");
Object.defineProperty(exports, "parse_charge_config", { enumerable: true, get: function () { return _vehicle_energy_parsing_1.parse_charge_config; } });
Object.defineProperty(exports, "parse_charge_schedules", { enumerable: true, get: function () { return _vehicle_energy_parsing_1.parse_charge_schedules; } });
Object.defineProperty(exports, "parse_climate_defaults", { enumerable: true, get: function () { return _vehicle_energy_parsing_1.parse_climate_defaults; } });
Object.defineProperty(exports, "parse_climate_schedules", { enumerable: true, get: function () { return _vehicle_energy_parsing_1.parse_climate_schedules; } });
Object.defineProperty(exports, "parse_v2l_status", { enumerable: true, get: function () { return _vehicle_energy_parsing_1.parse_v2l_status; } });
Object.defineProperty(exports, "parse_vehicle_charge_history", { enumerable: true, get: function () { return _vehicle_energy_parsing_1.parse_vehicle_charge_history; } });
const _vehicle_response_parsing_1 = require("./_vehicle_response_parsing");
Object.defineProperty(exports, "parse_service_request", { enumerable: true, get: function () { return _vehicle_response_parsing_1.parse_service_request; } });
Object.defineProperty(exports, "parse_service_request_result", { enumerable: true, get: function () { return _vehicle_response_parsing_1.parse_service_request_result; } });
const _vehicle_subscription_parsing_1 = require("./_vehicle_subscription_parsing");
Object.defineProperty(exports, "parse_vehicle_preferences", { enumerable: true, get: function () { return _vehicle_subscription_parsing_1.parse_vehicle_preferences; } });
Object.defineProperty(exports, "parse_vehicle_subscriptions", { enumerable: true, get: function () { return _vehicle_subscription_parsing_1.parse_vehicle_subscriptions; } });
Object.defineProperty(exports, "parse_vehicle_wifi_consumption", { enumerable: true, get: function () { return _vehicle_subscription_parsing_1.parse_vehicle_wifi_consumption; } });
exports.__all__ = ["parse_alert_request_status", "parse_breach_alerts", "parse_charge_config", "parse_charge_schedules", "parse_climate_defaults", "parse_climate_schedules", "parse_photos_around_vehicle", "parse_reminder_notifications_after_leaving_vehicle", "parse_remote_service_history", "parse_service_request", "parse_service_request_result", "parse_toggle_reminder_notifications_after_leaving_vehicle", "parse_v2l_status", "parse_vehicle_alert_request", "parse_vehicle_alerts", "parse_vehicle_capabilities", "parse_vehicle_charge_history", "parse_vehicle_data_privacy_mode", "parse_vehicle_location", "parse_vehicle_preferences", "parse_vehicle_status", "parse_vehicle_subscriptions", "parse_vehicle_wifi_consumption", "parse_vehicles"];
//# sourceMappingURL=parsing.js.map