import { py as $ } from "./_runtime";
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
declare const _ClimateChargeClientMixin_base: any;
/** Translated upstream _ClimateChargeClientMixin. */
export declare class _ClimateChargeClientMixin extends _ClimateChargeClientMixin_base {
    constructor(...__args: any[]);
    async_get_climate_schedules(vin: string, options?: {
        temperature_unit?: TemperatureUnit;
    }): Promise<VehicleClimateSchedules>;
    async_get_climate_defaults(vin: string, options?: {
        temperature_unit?: TemperatureUnit;
    }): Promise<ClimateDefaults | null>;
    async_start_climate(vin: string, climate: ClimateSettings, options?: {
        set_as_default?: boolean | null;
    }): Promise<ServiceRequest>;
    async_adjust_climate(vin: string, climate: ClimateSettings, options?: {
        set_as_default?: boolean | null;
    }): Promise<ServiceRequest>;
    async_stop_climate(vin: string): Promise<ServiceRequest>;
    async_set_climate_defaults(vin: string, climate: ClimateSettings): Promise<boolean>;
    async_set_delayed_climate(vin: string, start_date_time: $.DateValue, climate: ClimateSettings): Promise<ServiceRequest>;
    async_cancel_delayed_climate(vin: string): Promise<ServiceRequest>;
    async_start_charge(vin: string): Promise<ServiceRequest>;
    async_stop_charge(vin: string): Promise<ServiceRequest>;
    async_start_public_charge_session(vin: string, evse_id: string, options?: {
        location_id?: string | UnsetType | null;
    }): Promise<PublicChargeSessionStartResult | null>;
    async_enroll_charge_plan(vin: string, product_sku: string, model: string, year: string): Promise<ChargePlanEnrollmentResult | null>;
    async_cancel_charge_plan(vin: string): Promise<ChargePlanCancellationResult | null>;
    async_stop_public_charge_session(vin: string): Promise<PublicChargeSessionStopResult | null>;
    async_update_pnc_service_status(vin: string, status: PlugAndChargeStatusInput): Promise<PlugAndChargeServiceStatus | null>;
    async_retry_pnc_certificate_install(vin: string): Promise<PlugAndChargeCertificateRetryResult | null>;
    async_enroll_v1g_monitored_charging_plan(vin: string, model: string, year: string, options?: {
        plan?: string | UnsetType | null;
    }): Promise<V1GMonitoredChargingPlanEnrollmentResult | null>;
    async_cancel_v1g_monitored_charging_plan(vin: string): Promise<V1GMonitoredChargingPlanCancellationResult | null>;
    async_update_v1g_notification_preferences(vin: string, options?: {
        preferences?: ReadonlyArray<V1GNotificationPreferenceInput | null> | UnsetType | null;
    }): Promise<V1GNotificationPreferencesUpdateResult | null>;
    async_set_charge_limit(vin: string, percent: number): Promise<ServiceRequest>;
    async_set_charge_notification_threshold(vin: string, percent: number): Promise<ServiceRequest>;
    async_set_v2l_minimum_battery_charge_level(vin: string, percent: number): Promise<ServiceRequest>;
}
export interface _ClimateChargeClientMixin extends _NissanClientBase {
}
