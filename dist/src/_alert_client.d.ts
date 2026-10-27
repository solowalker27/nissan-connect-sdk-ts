import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { _enum_value, _optional_variables, _validate_positive_integer } from "./_client_helpers";
export { _enum_value, _optional_variables, _validate_positive_integer };
import { BoundaryAlertInput, BoundaryAlertUpdate, CurfewAlertInput, SpeedAlertInput, ValetRadiusInput, boundary_alert_input, boundary_alert_update_input, curfew_alert_input, optional_coordinate_input, optional_valet_radius_input, speed_alert_input } from "./alert_inputs";
export { BoundaryAlertInput, BoundaryAlertUpdate, CurfewAlertInput, SpeedAlertInput, ValetRadiusInput, boundary_alert_input, boundary_alert_update_input, curfew_alert_input, optional_coordinate_input, optional_valet_radius_input, speed_alert_input };
import { CoordinateInput } from "./common_inputs";
export { CoordinateInput };
import { UNSET, UnsetType, optional_input_fields } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields };
import { BreachAlerts, DistanceUnit, ReminderNotificationsAfterLeavingVehicle, ServiceRequestStatus, SpeedUnit, VehicleAlertKind, VehicleAlertRequest, VehicleAlerts } from "./models";
export { BreachAlerts, DistanceUnit, ReminderNotificationsAfterLeavingVehicle, ServiceRequestStatus, SpeedUnit, VehicleAlertKind, VehicleAlertRequest, VehicleAlerts };
import { parse_alert_request_status, parse_breach_alerts, parse_reminder_notifications_after_leaving_vehicle, parse_toggle_reminder_notifications_after_leaving_vehicle, parse_vehicle_alerts } from "./parsing";
export { parse_alert_request_status, parse_breach_alerts, parse_reminder_notifications_after_leaving_vehicle, parse_toggle_reminder_notifications_after_leaving_vehicle, parse_vehicle_alerts };
declare const _AlertClientMixin_base: any;
/** Translated upstream _AlertClientMixin. */
export declare class _AlertClientMixin extends _AlertClientMixin_base {
    constructor(...__args: any[]);
    async_get_vehicle_alerts(vin: string, options?: {
        speed_unit?: SpeedUnit | null;
        distance_unit?: DistanceUnit | null;
    }): Promise<VehicleAlerts | null>;
    async_get_breach_alerts(vin: string, options?: {
        page_number?: number;
        items_per_page?: number;
    }): Promise<BreachAlerts | null>;
    async_get_alert_request_status(vin: string, service_request_id: string, alert_kind: VehicleAlertKind): Promise<string | null>;
    async_wait_for_alert_request(vin: string, request: VehicleAlertRequest, options?: {
        poll_interval_seconds?: number;
        timeout_seconds?: number;
    }): Promise<string>;
    async_create_boundary_alert(vin: string, alert: BoundaryAlertInput): Promise<VehicleAlertRequest>;
    async_update_boundary_alert(vin: string, service_request_id: string, update: BoundaryAlertUpdate): Promise<VehicleAlertRequest>;
    async_delete_boundary_alert(vin: string, service_request_id: string): Promise<VehicleAlertRequest>;
    async_toggle_boundary_alert(vin: string, service_request_id: string, options: {
        enabled: boolean;
    }): Promise<VehicleAlertRequest>;
    async_create_curfew_alert(vin: string, alert: CurfewAlertInput): Promise<VehicleAlertRequest>;
    async_update_curfew_alert(vin: string, service_request_id: string, alert: CurfewAlertInput): Promise<VehicleAlertRequest>;
    async_delete_curfew_alert(vin: string, service_request_id: string): Promise<VehicleAlertRequest>;
    async_toggle_curfew_alert(vin: string, service_request_id: string, options: {
        enabled: boolean;
    }): Promise<VehicleAlertRequest>;
    async_create_speed_alert(vin: string, alert: SpeedAlertInput): Promise<VehicleAlertRequest>;
    async_update_speed_alert(vin: string, service_request_id: string, alert: SpeedAlertInput): Promise<VehicleAlertRequest>;
    async_delete_speed_alert(vin: string, service_request_id: string): Promise<VehicleAlertRequest>;
    async_toggle_speed_alert(vin: string, service_request_id: string, options: {
        enabled: boolean;
    }): Promise<VehicleAlertRequest>;
    async_activate_valet_alert(vin: string, options?: {
        radius?: ValetRadiusInput | UnsetType | null;
        location?: CoordinateInput | UnsetType | null;
    }): Promise<VehicleAlertRequest>;
    async_deactivate_valet_alert(vin: string, service_request_id: string): Promise<VehicleAlertRequest>;
    async_get_reminder_notifications_after_leaving_vehicle(vin: string): Promise<ReminderNotificationsAfterLeavingVehicle | null>;
    async_toggle_reminder_notifications_after_leaving_vehicle(vin: string, options?: {
        enable_lock?: boolean | null;
        enable_door?: boolean | null;
        enable_trunk?: boolean | null;
        enable_sunroof?: boolean | null;
        enable_window?: boolean | null;
    }): Promise<boolean | null>;
}
export interface _AlertClientMixin extends _NissanClientBase {
}
