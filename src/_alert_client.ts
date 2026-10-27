// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const asyncio = $.asyncio;

const math = $.math;

const assert_never = $.assert_never;

import * as operations from "./operations";

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

/** Translated upstream _AlertClientMixin. */
export class _AlertClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _AlertClientMixin, __args); }
async_get_vehicle_alerts(vin: string, options?: { speed_unit?: SpeedUnit | null; distance_unit?: DistanceUnit | null }): Promise<VehicleAlerts | null>;
/** Return all configured vehicle alerts in one cached read. */
async async_get_vehicle_alerts(...__args: any[]): any {
let data;
let {"vin": vin, "speed_unit": speed_unit, "distance_unit": distance_unit} = $.bind(__args, ["vin"], {"speed_unit": null, "distance_unit": null}, ["speed_unit", "distance_unit"], null, null);
/** Return all configured vehicle alerts in one cached read. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehicleAlerts", $.attr(operations, "VEHICLE_ALERTS"), $.call(_optional_variables, [], Object.assign({}, {"vin": vin}, {"speedUnit": $.call(_enum_value, [speed_unit], null)}, {"distanceUnit": $.call(_enum_value, [distance_unit], null)}))], null));
return $.call(parse_vehicle_alerts, [data], null);
}
async_get_breach_alerts(vin: string, options?: { page_number?: number; items_per_page?: number }): Promise<BreachAlerts | null>;
/** Return one page of raw vehicle-alert breach events. */
async async_get_breach_alerts(...__args: any[]): any {
let data;
let {"vin": vin, "page_number": page_number, "items_per_page": items_per_page} = $.bind(__args, ["vin"], {"page_number": 1, "items_per_page": 20}, ["page_number", "items_per_page"], null, null);
/** Return one page of raw vehicle-alert breach events. */
$.call(_validate_positive_integer, [page_number, "page_number"], null);
$.call(_validate_positive_integer, [items_per_page, "items_per_page"], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["BreachAlerts", $.attr(operations, "BREACH_ALERTS"), Object.assign({}, {["vin"]: vin}, {["pageNumber"]: page_number}, {["itemsPerPage"]: items_per_page})], null));
return $.call(parse_breach_alerts, [data], null);
}
async_get_alert_request_status(vin: string, service_request_id: string, alert_kind: VehicleAlertKind): Promise<string | null>;
/** Return the raw status of a vehicle-alert configuration request. */
async async_get_alert_request_status(...__args: any[]): any {
let data, document, operation_name, root_field, status_required;
let {"vin": vin, "service_request_id": service_request_id, "alert_kind": alert_kind} = $.bind(__args, ["vin", "service_request_id", "alert_kind"], {}, [], null, null);
/** Return the raw status of a vehicle-alert configuration request. */
if ($.eq(alert_kind, $.attr(VehicleAlertKind, "BOUNDARY"))) {
operation_name = "VehicleBoundaryAlert";
document = $.attr(operations, "VEHICLE_BOUNDARY_ALERT");
root_field = "boundaryAlert";
status_required = true;
} else if ($.eq(alert_kind, $.attr(VehicleAlertKind, "CURFEW"))) {
operation_name = "VehicleCurfewAlert";
document = $.attr(operations, "VEHICLE_CURFEW_ALERT");
root_field = "curfewAlert";
status_required = true;
} else if ($.eq(alert_kind, $.attr(VehicleAlertKind, "SPEED"))) {
operation_name = "VehicleSpeedAlert";
document = $.attr(operations, "VEHICLE_SPEED_ALERT");
root_field = "speedAlert";
status_required = true;
} else if ($.eq(alert_kind, $.attr(VehicleAlertKind, "VALET"))) {
operation_name = "VehicleValetAlert";
document = $.attr(operations, "VEHICLE_VALET_ALERT");
root_field = "valetAlert";
status_required = false;
} else {
$.call(assert_never, [alert_kind], null);
}
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), [operation_name, document, Object.assign({}, {["vin"]: vin}, {["serviceRequestId"]: service_request_id})], null));
return $.call(parse_alert_request_status, [data, root_field], Object.assign({}, {"status_required": status_required}));
}
async_wait_for_alert_request(vin: string, request: VehicleAlertRequest, options?: { poll_interval_seconds?: number; timeout_seconds?: number }): Promise<string>;
/** Poll a vehicle-alert change until Nissan reports success or failure. */
async async_wait_for_alert_request(...__args: any[]): any {
let status;
let {"vin": vin, "request": request, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds} = $.bind(__args, ["vin", "request"], {"poll_interval_seconds": 1.0, "timeout_seconds": 210.0}, ["poll_interval_seconds", "timeout_seconds"], null, null);
/** Poll a vehicle-alert change until Nissan reports success or failure. */
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
throw $.call($.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
}
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
throw $.call($.ValueError, ["timeout_seconds must be a positive finite number"], null);
}
return await $.timeout(timeout_seconds, async () => {
while ($.truth(true)) {
status = (await $.call($.attr(this, "async_get_alert_request_status"), [vin, $.attr(request, "id"), $.attr(request, "kind")], null));
if ($.truth(($.contains(new Set([$.attr($.attr(ServiceRequestStatus, "SUCCESS"), "value"), $.attr($.attr(ServiceRequestStatus, "FAILED"), "value")]), status)))) {
return status;
}
(await $.call($.attr(asyncio, "sleep"), [poll_interval_seconds], null));
}
});
}
async_create_boundary_alert(vin: string, alert: BoundaryAlertInput): Promise<VehicleAlertRequest>;
/** Create a vehicle entry or exit boundary alert. */
async async_create_boundary_alert(...__args: any[]): any {
let {"vin": vin, "alert": alert} = $.bind(__args, ["vin", "alert"], {}, [], null, null);
/** Create a vehicle entry or exit boundary alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["CreateBoundaryAlert", $.attr(operations, "CREATE_BOUNDARY_ALERT"), "createBoundaryAlert", Object.assign({}, {["vin"]: vin}, {["alert"]: $.call(boundary_alert_input, [alert], null)}), $.attr(VehicleAlertKind, "BOUNDARY")], null));
}
async_update_boundary_alert(vin: string, service_request_id: string, update: BoundaryAlertUpdate): Promise<VehicleAlertRequest>;
/** Patch an existing boundary alert. */
async async_update_boundary_alert(...__args: any[]): any {
let {"vin": vin, "service_request_id": service_request_id, "update": update} = $.bind(__args, ["vin", "service_request_id", "update"], {}, [], null, null);
/** Patch an existing boundary alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["SetBoundaryAlert", $.attr(operations, "UPDATE_BOUNDARY_ALERT"), "setBoundaryAlert", Object.assign({}, {["vin"]: vin}, {["alert"]: $.call(boundary_alert_update_input, [service_request_id, update], null)}), $.attr(VehicleAlertKind, "BOUNDARY")], null));
}
async_delete_boundary_alert(vin: string, service_request_id: string): Promise<VehicleAlertRequest>;
/** Delete an existing boundary alert. */
async async_delete_boundary_alert(...__args: any[]): any {
let {"vin": vin, "service_request_id": service_request_id} = $.bind(__args, ["vin", "service_request_id"], {}, [], null, null);
/** Delete an existing boundary alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["CancelBoundaryAlert", $.attr(operations, "DELETE_BOUNDARY_ALERT"), "cancelBoundaryAlert", Object.assign({}, {["vin"]: vin}, {["serviceRequestId"]: service_request_id}), $.attr(VehicleAlertKind, "BOUNDARY")], null));
}
async_toggle_boundary_alert(vin: string, service_request_id: string, options: { enabled: boolean }): Promise<VehicleAlertRequest>;
/** Enable or disable an existing boundary alert. */
async async_toggle_boundary_alert(...__args: any[]): any {
let {"vin": vin, "service_request_id": service_request_id, "enabled": enabled} = $.bind(__args, ["vin", "service_request_id"], {}, ["enabled"], null, null);
/** Enable or disable an existing boundary alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["ToggleBoundaryAlert", $.attr(operations, "TOGGLE_BOUNDARY_ALERT"), "toggleBoundaryAlert", Object.assign({}, {["vin"]: vin}, {["alert"]: Object.assign({}, {["serviceRequestId"]: service_request_id}, {["enable"]: enabled})}), $.attr(VehicleAlertKind, "BOUNDARY")], null));
}
async_create_curfew_alert(vin: string, alert: CurfewAlertInput): Promise<VehicleAlertRequest>;
/** Create a recurring vehicle curfew alert. */
async async_create_curfew_alert(...__args: any[]): any {
let {"vin": vin, "alert": alert} = $.bind(__args, ["vin", "alert"], {}, [], null, null);
/** Create a recurring vehicle curfew alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["CreateCurfewAlert", $.attr(operations, "CREATE_CURFEW_ALERT"), "createCurfewAlert", Object.assign({}, {["vin"]: vin}, {["alert"]: $.call(curfew_alert_input, [alert], null)}), $.attr(VehicleAlertKind, "CURFEW")], null));
}
async_update_curfew_alert(vin: string, service_request_id: string, alert: CurfewAlertInput): Promise<VehicleAlertRequest>;
/** Replace an existing curfew alert. */
async async_update_curfew_alert(...__args: any[]): any {
let {"vin": vin, "service_request_id": service_request_id, "alert": alert} = $.bind(__args, ["vin", "service_request_id", "alert"], {}, [], null, null);
/** Replace an existing curfew alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["SetCurfewAlert", $.attr(operations, "UPDATE_CURFEW_ALERT"), "setCurfewAlert", Object.assign({}, {["vin"]: vin}, {["serviceRequestId"]: service_request_id}, {["alert"]: $.call(curfew_alert_input, [alert], null)}), $.attr(VehicleAlertKind, "CURFEW")], null));
}
async_delete_curfew_alert(vin: string, service_request_id: string): Promise<VehicleAlertRequest>;
/** Delete an existing curfew alert. */
async async_delete_curfew_alert(...__args: any[]): any {
let {"vin": vin, "service_request_id": service_request_id} = $.bind(__args, ["vin", "service_request_id"], {}, [], null, null);
/** Delete an existing curfew alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["CancelCurfewAlert", $.attr(operations, "DELETE_CURFEW_ALERT"), "cancelCurfewAlert", Object.assign({}, {["vin"]: vin}, {["serviceRequestId"]: service_request_id}), $.attr(VehicleAlertKind, "CURFEW")], null));
}
async_toggle_curfew_alert(vin: string, service_request_id: string, options: { enabled: boolean }): Promise<VehicleAlertRequest>;
/** Enable or disable an existing curfew alert. */
async async_toggle_curfew_alert(...__args: any[]): any {
let {"vin": vin, "service_request_id": service_request_id, "enabled": enabled} = $.bind(__args, ["vin", "service_request_id"], {}, ["enabled"], null, null);
/** Enable or disable an existing curfew alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["ToggleCurfewAlert", $.attr(operations, "TOGGLE_CURFEW_ALERT"), "toggleCurfewAlert", Object.assign({}, {["vin"]: vin}, {["alert"]: Object.assign({}, {["serviceRequestId"]: service_request_id}, {["enable"]: enabled})}), $.attr(VehicleAlertKind, "CURFEW")], null));
}
async_create_speed_alert(vin: string, alert: SpeedAlertInput): Promise<VehicleAlertRequest>;
/** Create a vehicle speed alert. */
async async_create_speed_alert(...__args: any[]): any {
let {"vin": vin, "alert": alert} = $.bind(__args, ["vin", "alert"], {}, [], null, null);
/** Create a vehicle speed alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["CreateSpeedAlert", $.attr(operations, "CREATE_SPEED_ALERT"), "createSpeedAlert", Object.assign({}, {["vin"]: vin}, {["alert"]: $.call(speed_alert_input, [alert], null)}), $.attr(VehicleAlertKind, "SPEED")], null));
}
async_update_speed_alert(vin: string, service_request_id: string, alert: SpeedAlertInput): Promise<VehicleAlertRequest>;
/** Replace an existing speed alert. */
async async_update_speed_alert(...__args: any[]): any {
let speed_update;
let {"vin": vin, "service_request_id": service_request_id, "alert": alert} = $.bind(__args, ["vin", "service_request_id", "alert"], {}, [], null, null);
/** Replace an existing speed alert. */
speed_update = Object.assign({}, {["serviceRequestId"]: service_request_id}, $.call(speed_alert_input, [alert], null));
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["SetSpeedAlert", $.attr(operations, "UPDATE_SPEED_ALERT"), "setSpeedAlert", Object.assign({}, {["vin"]: vin}, {["alert"]: speed_update}), $.attr(VehicleAlertKind, "SPEED")], null));
}
async_delete_speed_alert(vin: string, service_request_id: string): Promise<VehicleAlertRequest>;
/** Delete an existing speed alert. */
async async_delete_speed_alert(...__args: any[]): any {
let {"vin": vin, "service_request_id": service_request_id} = $.bind(__args, ["vin", "service_request_id"], {}, [], null, null);
/** Delete an existing speed alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["CancelSpeedAlert", $.attr(operations, "DELETE_SPEED_ALERT"), "cancelSpeedAlert", Object.assign({}, {["vin"]: vin}, {["serviceRequestId"]: service_request_id}), $.attr(VehicleAlertKind, "SPEED")], null));
}
async_toggle_speed_alert(vin: string, service_request_id: string, options: { enabled: boolean }): Promise<VehicleAlertRequest>;
/** Enable or disable an existing speed alert. */
async async_toggle_speed_alert(...__args: any[]): any {
let {"vin": vin, "service_request_id": service_request_id, "enabled": enabled} = $.bind(__args, ["vin", "service_request_id"], {}, ["enabled"], null, null);
/** Enable or disable an existing speed alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["ToggleSpeedAlert", $.attr(operations, "TOGGLE_SPEED_ALERT"), "toggleSpeedAlert", Object.assign({}, {["vin"]: vin}, {["alert"]: Object.assign({}, {["serviceRequestId"]: service_request_id}, {["enable"]: enabled})}), $.attr(VehicleAlertKind, "SPEED")], null));
}
async_activate_valet_alert(vin: string, options?: { radius?: ValetRadiusInput | UnsetType | null; location?: CoordinateInput | UnsetType | null }): Promise<VehicleAlertRequest>;
/** Activate a valet boundary alert around an optional location. */
async async_activate_valet_alert(...__args: any[]): any {
let variables;
let {"vin": vin, "radius": radius, "location": location} = $.bind(__args, ["vin"], {"radius": UNSET, "location": UNSET}, ["radius", "location"], null, null);
/** Activate a valet boundary alert around an optional location. */
variables = $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"radiusWithUnit": $.call(optional_valet_radius_input, [radius], null)}, {"location": $.call(optional_coordinate_input, [location], null)}));
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["ActivateValetAlert", $.attr(operations, "ACTIVATE_VALET_ALERT"), "activateValetAlert", variables, $.attr(VehicleAlertKind, "VALET")], null));
}
async_deactivate_valet_alert(vin: string, service_request_id: string): Promise<VehicleAlertRequest>;
/** Deactivate the current valet alert. */
async async_deactivate_valet_alert(...__args: any[]): any {
let {"vin": vin, "service_request_id": service_request_id} = $.bind(__args, ["vin", "service_request_id"], {}, [], null, null);
/** Deactivate the current valet alert. */
return (await $.call($.attr(this, "_async_vehicle_alert_request"), ["DeactivateValetAlert", $.attr(operations, "DEACTIVATE_VALET_ALERT"), "deactivateValetAlert", Object.assign({}, {["vin"]: vin}, {["serviceRequestId"]: service_request_id}), $.attr(VehicleAlertKind, "VALET")], null));
}
async_get_reminder_notifications_after_leaving_vehicle(vin: string): Promise<ReminderNotificationsAfterLeavingVehicle | null>;
/** Return after-leaving reminder flags when supported by the vehicle. */
async async_get_reminder_notifications_after_leaving_vehicle(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return after-leaving reminder flags when supported by the vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ReminderNotificationsAfterLeavingVehicle", $.attr(operations, "REMINDER_NOTIFICATIONS_AFTER_LEAVING_VEHICLE"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_reminder_notifications_after_leaving_vehicle, [data], null);
}
async_toggle_reminder_notifications_after_leaving_vehicle(vin: string, options?: { enable_lock?: boolean | null; enable_door?: boolean | null; enable_trunk?: boolean | null; enable_sunroof?: boolean | null; enable_window?: boolean | null }): Promise<boolean | null>;
/** Patch one or more after-leaving reminder flags. */
async async_toggle_reminder_notifications_after_leaving_vehicle(...__args: any[]): any {
let data, reminder_notifications;
let {"vin": vin, "enable_lock": enable_lock, "enable_door": enable_door, "enable_trunk": enable_trunk, "enable_sunroof": enable_sunroof, "enable_window": enable_window} = $.bind(__args, ["vin"], {"enable_lock": null, "enable_door": null, "enable_trunk": null, "enable_sunroof": null, "enable_window": null}, ["enable_lock", "enable_door", "enable_trunk", "enable_sunroof", "enable_window"], null, null);
/** Patch one or more after-leaving reminder flags. */
reminder_notifications = $.call(_optional_variables, [], Object.assign({}, {"enableLock": enable_lock}, {"enableDoor": enable_door}, {"enableTrunk": enable_trunk}, {"enableSunroof": enable_sunroof}, {"enableWindow": enable_window}));
if ($.truth(!$.truth(reminder_notifications))) {
throw $.call($.ValueError, ["At least one reminder notification setting is required"], null);
}
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ToggleReminderNotificationsAfterLeavingVehicle", $.attr(operations, "TOGGLE_REMINDER_NOTIFICATIONS_AFTER_LEAVING_VEHICLE"), Object.assign({}, {["vin"]: vin}, {["reminderNotifications"]: reminder_notifications})], null));
return $.call(parse_toggle_reminder_notifications_after_leaving_vehicle, [data], null);
}
}
$.classType(_AlertClientMixin);
export interface _AlertClientMixin extends _NissanClientBase {}
