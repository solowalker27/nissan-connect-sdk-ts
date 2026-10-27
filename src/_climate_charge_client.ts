// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const datetime = $.datetime;

import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { _climate_parameters_input, _date_time_input, _optional_variables, _start_climate_input, _success } from "./_client_helpers";
export { _climate_parameters_input, _date_time_input, _optional_variables, _start_climate_input, _success };

import { cancel_charge_plan_variables, enroll_charge_plan_variables } from "./charge_plan_inputs";
export { cancel_charge_plan_variables, enroll_charge_plan_variables };

import { ChargePlanCancellationResult, ChargePlanEnrollmentResult } from "./charge_plan_models";
export { ChargePlanCancellationResult, ChargePlanEnrollmentResult };

import { parse_cancel_charge_plan, parse_enroll_charge_plan } from "./charge_plan_parsing";
export { parse_cancel_charge_plan, parse_enroll_charge_plan };

import { UNSET, UnsetType, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, serialize_enum };

import { ClimateDefaults, ClimateSettings, ServiceRequest, ServiceRequestKind, TemperatureUnit, VehicleClimateSchedules } from "./models";
export { ClimateDefaults, ClimateSettings, ServiceRequest, ServiceRequestKind, TemperatureUnit, VehicleClimateSchedules };

import { parse_climate_defaults, parse_climate_schedules } from "./parsing";
export { parse_climate_defaults, parse_climate_schedules };

import { retry_certificate_install_variables, start_charge_session_variables, stop_charge_session_variables, update_pnc_service_status_variables } from "./pnc_inputs";
export { retry_certificate_install_variables, start_charge_session_variables, stop_charge_session_variables, update_pnc_service_status_variables };

import { PlugAndChargeCertificateRetryResult, PlugAndChargeServiceStatus, PlugAndChargeStatusInput, PublicChargeSessionStartResult, PublicChargeSessionStopResult } from "./pnc_models";
export { PlugAndChargeCertificateRetryResult, PlugAndChargeServiceStatus, PlugAndChargeStatusInput, PublicChargeSessionStartResult, PublicChargeSessionStopResult };

import { parse_retry_certificate_install, parse_start_charge_session, parse_stop_charge_session, parse_update_pnc_service_status } from "./pnc_parsing";
export { parse_retry_certificate_install, parse_start_charge_session, parse_stop_charge_session, parse_update_pnc_service_status };

import { V1GNotificationPreferenceInput, v1g_cancel_monitored_charging_plan_variables, v1g_enroll_monitored_charging_plan_variables, v1g_update_notification_preferences_variables } from "./v1g_inputs";
export { V1GNotificationPreferenceInput, v1g_cancel_monitored_charging_plan_variables, v1g_enroll_monitored_charging_plan_variables, v1g_update_notification_preferences_variables };

import { V1GMonitoredChargingPlanCancellationResult, V1GMonitoredChargingPlanEnrollmentResult, V1GNotificationPreferencesUpdateResult } from "./v1g_models";
export { V1GMonitoredChargingPlanCancellationResult, V1GMonitoredChargingPlanEnrollmentResult, V1GNotificationPreferencesUpdateResult };

import { parse_v1g_cancel_monitored_charging_plan, parse_v1g_enroll_monitored_charging_plan, parse_v1g_update_notification_preferences } from "./v1g_parsing";
export { parse_v1g_cancel_monitored_charging_plan, parse_v1g_enroll_monitored_charging_plan, parse_v1g_update_notification_preferences };

/** Translated upstream _ClimateChargeClientMixin. */
export class _ClimateChargeClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _ClimateChargeClientMixin, __args); }
async_get_climate_schedules(vin: string, options?: { temperature_unit?: TemperatureUnit }): Promise<VehicleClimateSchedules>;
/** Return recurring and one-time climate schedules and their accessories. */
async async_get_climate_schedules(...__args: any[]): any {
let data;
let {"vin": vin, "temperature_unit": temperature_unit} = $.bind(__args, ["vin"], {"temperature_unit": $.attr(TemperatureUnit, "FAHRENHEIT")}, ["temperature_unit"], null, null);
/** Return recurring and one-time climate schedules and their accessories. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleClimateSchedules", $.attr(operations, "VEHICLE_CLIMATE_SCHEDULES"), Object.assign({}, {["vin"]: vin}, {["temperatureUnit"]: $.call(serialize_enum, [temperature_unit], null)})], null));
return $.call(parse_climate_schedules, [data], null);
}
async_get_climate_defaults(vin: string, options?: { temperature_unit?: TemperatureUnit }): Promise<ClimateDefaults | null>;
/** Return saved climate defaults when supported by the vehicle. */
async async_get_climate_defaults(...__args: any[]): any {
let data;
let {"vin": vin, "temperature_unit": temperature_unit} = $.bind(__args, ["vin"], {"temperature_unit": $.attr(TemperatureUnit, "FAHRENHEIT")}, ["temperature_unit"], null, null);
/** Return saved climate defaults when supported by the vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleClimateDefaults", $.attr(operations, "VEHICLE_CLIMATE_DEFAULTS"), Object.assign({}, {["vin"]: vin}, {["temperatureUnit"]: $.call(serialize_enum, [temperature_unit], null)})], null));
return $.call(parse_climate_defaults, [data], null);
}
async_start_climate(vin: string, climate: ClimateSettings, options?: { set_as_default?: boolean | null }): Promise<ServiceRequest>;
/** Start cabin climate control. */
async async_start_climate(...__args: any[]): any {
let variables;
let {"vin": vin, "climate": climate, "set_as_default": set_as_default} = $.bind(__args, ["vin", "climate"], {"set_as_default": null}, ["set_as_default"], null, null);
/** Start cabin climate control. */
variables = $.call(_optional_variables, [], Object.assign({}, {"vin": vin}, {"climate": $.call(_start_climate_input, [climate], null)}, {"parameters": $.call(_climate_parameters_input, [$.attr(climate, "parameters")], null)}, {"setAsDefault": set_as_default}));
return (await $.call($.attr(this, "_async_service_request"), ["StartClimate", $.attr(operations, "START_CLIMATE"), "startClimate", variables, $.attr(ServiceRequestKind, "CLIMATE")], null));
}
async_adjust_climate(vin: string, climate: ClimateSettings, options?: { set_as_default?: boolean | null }): Promise<ServiceRequest>;
/** Adjust climate settings while remote climate is active. */
async async_adjust_climate(...__args: any[]): any {
let variables;
let {"vin": vin, "climate": climate, "set_as_default": set_as_default} = $.bind(__args, ["vin", "climate"], {"set_as_default": null}, ["set_as_default"], null, null);
/** Adjust climate settings while remote climate is active. */
variables = $.call(_optional_variables, [], Object.assign({}, {"vin": vin}, {"climate": $.call(_start_climate_input, [climate], null)}, {"parameters": $.call(_climate_parameters_input, [$.attr(climate, "parameters")], null)}, {"setAsDefault": set_as_default}));
return (await $.call($.attr(this, "_async_service_request"), ["AdjustClimate", $.attr(operations, "ADJUST_CLIMATE"), "adjustClimate", variables, $.attr(ServiceRequestKind, "CLIMATE")], null));
}
async_stop_climate(vin: string): Promise<ServiceRequest>;
/** Stop remote cabin climate control. */
async async_stop_climate(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Stop remote cabin climate control. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["StopClimate", $.attr(operations, "STOP_CLIMATE"), "stopClimate", vin, $.attr(ServiceRequestKind, "CLIMATE")], null));
}
async_set_climate_defaults(vin: string, climate: ClimateSettings): Promise<boolean>;
/** Save the vehicle's default climate temperature and accessories. */
async async_set_climate_defaults(...__args: any[]): any {
let data;
let {"vin": vin, "climate": climate} = $.bind(__args, ["vin", "climate"], {}, [], null, null);
/** Save the vehicle's default climate temperature and accessories. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["SetClimateDefaults", $.attr(operations, "SET_CLIMATE_DEFAULTS"), $.call(_optional_variables, [], Object.assign({}, {"vin": vin}, {"climate": $.call(_start_climate_input, [climate], null)}, {"parameters": $.call(_climate_parameters_input, [$.attr(climate, "parameters")], null)}))], null));
return $.call(_success, [data, "setClimateDefaults"], null);
}
async_set_delayed_climate(vin: string, start_date_time: $.DateValue, climate: ClimateSettings): Promise<ServiceRequest>;
/** Schedule a one-time delayed climate start. */
async async_set_delayed_climate(...__args: any[]): any {
let {"vin": vin, "start_date_time": start_date_time, "climate": climate} = $.bind(__args, ["vin", "start_date_time", "climate"], {}, [], null, null);
/** Schedule a one-time delayed climate start. */
return (await $.call($.attr(this, "_async_service_request"), ["SetDelayedClimate", $.attr(operations, "SET_DELAYED_CLIMATE"), "setDelayedClimate", $.call(_optional_variables, [], Object.assign({}, {"vin": vin}, {"startDateTime": $.call(_date_time_input, [start_date_time], null)}, {"climate": $.call(_start_climate_input, [climate], null)}, {"climateAccessories": $.call(_climate_parameters_input, [$.attr(climate, "parameters")], null)})), $.attr(ServiceRequestKind, "CLIMATE")], null));
}
async_cancel_delayed_climate(vin: string): Promise<ServiceRequest>;
/** Cancel the one-time delayed climate request. */
async async_cancel_delayed_climate(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Cancel the one-time delayed climate request. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["CancelDelayedClimate", $.attr(operations, "CANCEL_DELAYED_CLIMATE"), "cancelDelayedClimate", vin, $.attr(ServiceRequestKind, "CLIMATE")], null));
}
async_start_charge(vin: string): Promise<ServiceRequest>;
/** Start charging an attached electric vehicle. */
async async_start_charge(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Start charging an attached electric vehicle. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["StartCharge", $.attr(operations, "START_CHARGE"), "startCharge", vin, $.attr(ServiceRequestKind, "CHARGE")], null));
}
async_stop_charge(vin: string): Promise<ServiceRequest>;
/** Stop charging an attached electric vehicle. */
async async_stop_charge(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Stop charging an attached electric vehicle. */
return (await $.call($.attr(this, "_async_simple_service_request"), ["StopCharge", $.attr(operations, "STOP_CHARGE"), "stopCharge", vin, $.attr(ServiceRequestKind, "CHARGE")], null));
}
async_start_public_charge_session(vin: string, evse_id: string, options?: { location_id?: string | UnsetType | null }): Promise<PublicChargeSessionStartResult | null>;
/** Start a Nissan Energy public charging session at one EVSE. */
async async_start_public_charge_session(...__args: any[]): any {
let data;
let {"vin": vin, "evse_id": evse_id, "location_id": location_id} = $.bind(__args, ["vin", "evse_id"], {"location_id": UNSET}, ["location_id"], null, null);
/** Start a Nissan Energy public charging session at one EVSE. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["StartChargeSession", $.attr(operations, "START_CHARGE_SESSION"), $.call(start_charge_session_variables, [vin, evse_id], Object.assign({}, {"location_id": location_id}))], null));
return $.call(parse_start_charge_session, [data], null);
}
async_enroll_charge_plan(vin: string, product_sku: string, model: string, year: string): Promise<ChargePlanEnrollmentResult | null>;
/** Enroll the vehicle in an EMP charging product. */
async async_enroll_charge_plan(...__args: any[]): any {
let data;
let {"vin": vin, "product_sku": product_sku, "model": model, "year": year} = $.bind(__args, ["vin", "product_sku", "model", "year"], {}, [], null, null);
/** Enroll the vehicle in an EMP charging product. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["EnrollChargePlan", $.attr(operations, "ENROLL_CHARGE_PLAN"), $.call(enroll_charge_plan_variables, [vin, product_sku, model, year], null)], null));
return $.call(parse_enroll_charge_plan, [data], null);
}
async_cancel_charge_plan(vin: string): Promise<ChargePlanCancellationResult | null>;
/** Cancel the vehicle's EMP charging-product enrollment. */
async async_cancel_charge_plan(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Cancel the vehicle's EMP charging-product enrollment. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CancelChargePlan", $.attr(operations, "CANCEL_CHARGE_PLAN"), $.call(cancel_charge_plan_variables, [vin], null)], null));
return $.call(parse_cancel_charge_plan, [data], null);
}
async_stop_public_charge_session(vin: string): Promise<PublicChargeSessionStopResult | null>;
/** Stop the active Nissan Energy public charging session. */
async async_stop_public_charge_session(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Stop the active Nissan Energy public charging session. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["StopChargeSession", $.attr(operations, "STOP_CHARGE_SESSION"), $.call(stop_charge_session_variables, [vin], null)], null));
return $.call(parse_stop_charge_session, [data], null);
}
async_update_pnc_service_status(vin: string, status: PlugAndChargeStatusInput): Promise<PlugAndChargeServiceStatus | null>;
/** Enable or disable Nissan Energy Plug & Charge enrollment. */
async async_update_pnc_service_status(...__args: any[]): any {
let data;
let {"vin": vin, "status": status} = $.bind(__args, ["vin", "status"], {}, [], null, null);
/** Enable or disable Nissan Energy Plug & Charge enrollment. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdatePnCServiceStatus", $.attr(operations, "UPDATE_PNC_SERVICE_STATUS"), $.call(update_pnc_service_status_variables, [vin, status], null)], null));
return $.call(parse_update_pnc_service_status, [data], null);
}
async_retry_pnc_certificate_install(vin: string): Promise<PlugAndChargeCertificateRetryResult | null>;
/** Retry installation of the vehicle's Plug & Charge certificate. */
async async_retry_pnc_certificate_install(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Retry installation of the vehicle's Plug & Charge certificate. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["RetryCertInstall", $.attr(operations, "RETRY_CERT_INSTALL"), $.call(retry_certificate_install_variables, [vin], null)], null));
return $.call(parse_retry_certificate_install, [data], null);
}
async_enroll_v1g_monitored_charging_plan(vin: string, model: string, year: string, options?: { plan?: string | UnsetType | null }): Promise<V1GMonitoredChargingPlanEnrollmentResult | null>;
/** Enroll in V1G Charging Insights with an explicit caller-selected plan. */
async async_enroll_v1g_monitored_charging_plan(...__args: any[]): any {
let data;
let {"vin": vin, "model": model, "year": year, "plan": plan} = $.bind(__args, ["vin", "model", "year"], {"plan": UNSET}, ["plan"], null, null);
/** Enroll in V1G Charging Insights with an explicit caller-selected plan. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["V1GEnrollMonitoredChargingPlan", $.attr(operations, "V1G_ENROLL_MONITORED_CHARGING_PLAN"), $.call(v1g_enroll_monitored_charging_plan_variables, [vin, model, year], Object.assign({}, {"plan": plan}))], null));
return $.call(parse_v1g_enroll_monitored_charging_plan, [data], null);
}
async_cancel_v1g_monitored_charging_plan(vin: string): Promise<V1GMonitoredChargingPlanCancellationResult | null>;
/** Permanently cancel V1G Charging Insights enrollment for a vehicle. */
async async_cancel_v1g_monitored_charging_plan(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Permanently cancel V1G Charging Insights enrollment for a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["V1GCancelMonitoredChargingPlan", $.attr(operations, "V1G_CANCEL_MONITORED_CHARGING_PLAN"), $.call(v1g_cancel_monitored_charging_plan_variables, [vin], null)], null));
return $.call(parse_v1g_cancel_monitored_charging_plan, [data], null);
}
async_update_v1g_notification_preferences(vin: string, options?: { preferences?: ReadonlyArray<V1GNotificationPreferenceInput | null> | UnsetType | null }): Promise<V1GNotificationPreferencesUpdateResult | null>;
/** Patch V1G Charging Insights notification channels. */
async async_update_v1g_notification_preferences(...__args: any[]): any {
let data;
let {"vin": vin, "preferences": preferences} = $.bind(__args, ["vin"], {"preferences": UNSET}, ["preferences"], null, null);
/** Patch V1G Charging Insights notification channels. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["V1GUpdateNotificationPreferences", $.attr(operations, "V1G_UPDATE_NOTIFICATION_PREFERENCES"), $.call(v1g_update_notification_preferences_variables, [vin], Object.assign({}, {"preferences": preferences}))], null));
return $.call(parse_v1g_update_notification_preferences, [data], null);
}
async_set_charge_limit(vin: string, percent: number): Promise<ServiceRequest>;
/** Set the electric vehicle charging limit. */
async async_set_charge_limit(...__args: any[]): any {
let {"vin": vin, "percent": percent} = $.bind(__args, ["vin", "percent"], {}, [], null, null);
/** Set the electric vehicle charging limit. */
return (await $.call($.attr(this, "_async_service_request"), ["SetChargeLimit", $.attr(operations, "SET_CHARGE_LIMIT"), "setChargeLimit", Object.assign({}, {["vin"]: vin}, {["percent"]: percent}), $.attr(ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
}
async_set_charge_notification_threshold(vin: string, percent: number): Promise<ServiceRequest>;
/** Set the battery percentage that triggers a charge notification. */
async async_set_charge_notification_threshold(...__args: any[]): any {
let {"vin": vin, "percent": percent} = $.bind(__args, ["vin", "percent"], {}, [], null, null);
/** Set the battery percentage that triggers a charge notification. */
return (await $.call($.attr(this, "_async_service_request"), ["SetNotificationLimit", $.attr(operations, "SET_NOTIFICATION_LIMIT"), "setChargeNotificationThreshold", Object.assign({}, {["vin"]: vin}, {["percent"]: percent}), $.attr(ServiceRequestKind, "CHARGE_CONFIGURATION")], null));
}
async_set_v2l_minimum_battery_charge_level(vin: string, percent: number): Promise<ServiceRequest>;
/** Set the minimum battery percentage reserved while using V2L. */
async async_set_v2l_minimum_battery_charge_level(...__args: any[]): any {
let {"vin": vin, "percent": percent} = $.bind(__args, ["vin", "percent"], {}, [], null, null);
/** Set the minimum battery percentage reserved while using V2L. */
return (await $.call($.attr(this, "_async_service_request"), ["SetV2L", $.attr(operations, "SET_V2L"), "setV2L", Object.assign({}, {["vin"]: vin}, {["input"]: Object.assign({}, {["minimumBatteryChargeLevel"]: percent})}), $.attr(ServiceRequestKind, "V2L")], null));
}
}
$.classType(_ClimateChargeClientMixin);
export interface _ClimateChargeClientMixin extends _NissanClientBase {}
