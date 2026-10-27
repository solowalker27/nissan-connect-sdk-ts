// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _list, _object, _optional_bool, _optional_camera_position, _optional_camera_service, _optional_datetime, _optional_int, _optional_list, _optional_object, _optional_str, _required_str } from "./_parsing_values";
export { _list, _object, _optional_bool, _optional_camera_position, _optional_camera_service, _optional_datetime, _optional_int, _optional_list, _optional_object, _optional_str, _required_str };

import { _parse_alert_location, _parse_boundary_alerts, _parse_curfew_alerts, _parse_speed_alerts, _parse_valet_alert } from "./_vehicle_alert_parsing";
export { _parse_alert_location, _parse_boundary_alerts, _parse_curfew_alerts, _parse_speed_alerts, _parse_valet_alert };

import { _parse_battery, _parse_climate_status, _parse_distance, _parse_doors, _parse_engine_oil_drain_range, _parse_location, _parse_maintenance_indicator, _parse_mileage, _parse_tires } from "./_vehicle_response_parsing";
export { _parse_battery, _parse_climate_status, _parse_distance, _parse_doors, _parse_engine_oil_drain_range, _parse_location, _parse_maintenance_indicator, _parse_mileage, _parse_tires };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { BreachAlert, BreachAlerts, DataPrivacyMode, ReminderNotificationsAfterLeavingVehicle, Vehicle, VehicleAlertKind, VehicleAlertRequest, VehicleAlerts, VehicleLocation, VehiclePhoto, VehiclePhotos, VehicleStatus } from "./models";
export { BreachAlert, BreachAlerts, DataPrivacyMode, ReminderNotificationsAfterLeavingVehicle, Vehicle, VehicleAlertKind, VehicleAlertRequest, VehicleAlerts, VehicleLocation, VehiclePhoto, VehiclePhotos, VehicleStatus };

export function parse_vehicles(data: Record<string, unknown>): ReadonlyArray<Vehicle>;
/** Parse the account vehicle list. */
export function parse_vehicles(...__args: any[]): any {
let index, item, value, values, vehicles;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the account vehicle list. */
values = $.call(_list, [$.call($.attr(data, "get"), ["vehicles"], null), "vehicles"], null);
vehicles = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
item = $.call(_object, [value, ("vehicles[" + $.str(index) + "]")], null);
$.call($.attr(vehicles, "append"), [$.call(Vehicle, [], Object.assign({}, {"vin": $.call(_required_str, [$.call($.attr(item, "get"), ["vin"], null), ("vehicles[" + $.str(index) + "].vin")], null)}, {"year": $.call(_optional_str, [$.call($.attr(item, "get"), ["year"], null)], null)}, {"model": $.call(_optional_str, [$.call($.attr(item, "get"), ["model"], null)], null)}, {"color": $.call(_optional_str, [$.call($.attr(item, "get"), ["color"], null)], null)}, {"nickname": $.call(_optional_str, [$.call($.attr(item, "get"), ["nickname"], null)], null)}, {"image_url": $.call(_optional_str, [$.call($.attr(item, "get"), ["image"], null)], null)}, {"driver_type": $.call(_optional_str, [$.call($.attr(item, "get"), ["driverType"], null)], null)}, {"plate": $.call(_optional_str, [$.call($.attr(item, "get"), ["plate"], null)], null)}))], null);
}
return $.call($.tuple, [vehicles], null);
}

export function parse_vehicle_status(data: Record<string, unknown>, vin: string): VehicleStatus;
/** Parse dynamic status for one vehicle. */
export function parse_vehicle_status(...__args: any[]): any {
let battery_value, climate_value, doors_value, engine_oil_value, fuel_value, index, indicators, mileage_value, mils, tires_value, value, vehicle;
let {"data": data, "vin": vin} = $.bind(__args, ["data", "vin"], {}, [], null, null);
/** Parse dynamic status for one vehicle. */
vehicle = $.call(_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
battery_value = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["batteryStatus"], null), "vehicle.batteryStatus"], null);
climate_value = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["climateStatus"], null), "vehicle.climateStatus"], null);
doors_value = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["doorsStatus"], null), "vehicle.doorsStatus"], null);
fuel_value = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["fuelAutonomy"], null), "vehicle.fuelAutonomy"], null);
mileage_value = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["mileage"], null), "vehicle.mileage"], null);
tires_value = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["tirePressure"], null), "vehicle.tirePressure"], null);
engine_oil_value = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["engineOilDrainRange"], null), "vehicle.engineOilDrainRange"], null);
mils = $.or(() => $.call(_optional_list, [$.call($.attr(vehicle, "get"), ["mils"], null), "vehicle.mils"], null), () => []);
indicators = $.call($.tuple, [(() => { const __out: any = []; for (const [index, value] of $.iterable($.call($.enumerate, [mils], null))) { __out.push($.call(_parse_maintenance_indicator, [$.call(_object, [value, ("vehicle.mils[" + $.str(index) + "]")], null)], null)); } return __out; })()], null);
return $.call(VehicleStatus, [], Object.assign({}, {"vin": vin}, {"vehicle_type": $.call(_optional_str, [$.call($.attr(vehicle, "get"), ["__typename"], null)], null)}, {"battery": ($.truth(((battery_value !== null))) ? $.call(_parse_battery, [battery_value], null) : null)}, {"climate": ($.truth(((climate_value !== null))) ? $.call(_parse_climate_status, [climate_value], null) : null)}, {"doors": ($.truth(((doors_value !== null))) ? $.call(_parse_doors, [doors_value], null) : null)}, {"fuel_range": ($.truth(((fuel_value !== null))) ? $.call(_parse_distance, [fuel_value], null) : null)}, {"mileage": ($.truth(((mileage_value !== null))) ? $.call(_parse_mileage, [mileage_value], null) : null)}, {"tire_pressure": ($.truth(((tires_value !== null))) ? $.call(_parse_tires, [tires_value], null) : null)}, {"maintenance_indicators": indicators}, {"engine_oil_drain_range": ($.truth(((engine_oil_value !== null))) ? $.call(_parse_engine_oil_drain_range, [engine_oil_value], null) : null)}));
}

export function parse_vehicle_location(data: Record<string, unknown>, vin: string): VehicleLocation;
/** Parse the cached vehicle location query. */
export function parse_vehicle_location(...__args: any[]): any {
let location, vehicle;
let {"data": data, "vin": vin} = $.bind(__args, ["data", "vin"], {}, [], null, null);
/** Parse the cached vehicle location query. */
vehicle = $.call(_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
location = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["location"], null), "vehicle.location"], null);
if ($.truth(((location === null)))) {
return $.call(VehicleLocation, [], Object.assign({}, {"vin": vin}, {"latitude": null}, {"longitude": null}, {"last_updated_at": null}));
}
return $.call(_parse_location, [location, vin], null);
}

export function parse_photos_around_vehicle(data: Record<string, unknown>): VehiclePhotos | null;
/** Parse photos currently available around a vehicle. */
export function parse_photos_around_vehicle(...__args: any[]): any {
let index, item, parsed_photos, photos, value, values, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse photos currently available around a vehicle. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
values = $.call(_optional_list, [$.call($.attr(vehicle, "get"), ["photosAroundVehicle"], null), "vehicle.photosAroundVehicle"], null);
photos = null;
if ($.truth(((values !== null)))) {
parsed_photos = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(parsed_photos, "append"), [null], null);
continue;
}
item = $.call(_object, [value, ("vehicle.photosAroundVehicle[" + $.str(index) + "]")], null);
$.call($.attr(parsed_photos, "append"), [$.call(VehiclePhoto, [], Object.assign({}, {"id": $.call(_optional_str, [$.call($.attr(item, "get"), ["id"], null)], null)}, {"filename": $.call(_optional_str, [$.call($.attr(item, "get"), ["filename"], null)], null)}, {"link": $.call(_optional_str, [$.call($.attr(item, "get"), ["link"], null)], null)}, {"timestamp": $.call(_optional_datetime, [$.call($.attr(item, "get"), ["timeStamp"], null)], null)}, {"camera_position": $.call(_optional_camera_position, [$.call($.attr(item, "get"), ["cameraPosition"], null)], null)}, {"camera_service": $.call(_optional_camera_service, [$.call($.attr(item, "get"), ["cameraService"], null)], null)}))], null);
}
photos = $.call($.tuple, [parsed_photos], null);
}
return $.call(VehiclePhotos, [], Object.assign({}, {"vin": $.call(_required_str, [$.call($.attr(vehicle, "get"), ["vin"], null), "vehicle.vin"], null)}, {"year": $.call(_required_str, [$.call($.attr(vehicle, "get"), ["year"], null), "vehicle.year"], null)}, {"model": $.call(_required_str, [$.call($.attr(vehicle, "get"), ["model"], null), "vehicle.model"], null)}, {"photos": photos}));
}

export function parse_vehicle_alerts(data: Record<string, unknown>): VehicleAlerts | null;
/** Parse all configured alerts for one connected vehicle. */
export function parse_vehicle_alerts(...__args: any[]): any {
let alert_fields, field, valet_value, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse all configured alerts for one connected vehicle. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
alert_fields = ["boundaryAlerts", "curfewAlerts", "speedAlerts", "valetAlert"];
if ($.truth(!$.truth($.call($.any, [(() => { const __out: any = []; for (const field of $.iterable(alert_fields)) { __out.push(($.contains(vehicle, field))); } return __out; })()], null)))) {
return null;
}
valet_value = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["valetAlert"], null), "vehicle.valetAlert"], null);
return $.call(VehicleAlerts, [], Object.assign({}, {"boundary_alerts": $.call(_parse_boundary_alerts, [$.call($.attr(vehicle, "get"), ["boundaryAlerts"], null)], null)}, {"curfew_alerts": $.call(_parse_curfew_alerts, [$.call($.attr(vehicle, "get"), ["curfewAlerts"], null)], null)}, {"speed_alerts": $.call(_parse_speed_alerts, [$.call($.attr(vehicle, "get"), ["speedAlerts"], null)], null)}, {"valet_alert": ($.truth(((valet_value !== null))) ? $.call(_parse_valet_alert, [valet_value], null) : null)}));
}

export function parse_breach_alerts(data: Record<string, unknown>): BreachAlerts | null;
/** Parse one page of raw vehicle-alert breach events. */
export function parse_breach_alerts(...__args: any[]): any {
let alerts, index, item, location_value, page, parsed_alerts, path, value, values, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse one page of raw vehicle-alert breach events. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
page = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["breachAlerts"], null), "vehicle.breachAlerts"], null);
if ($.truth(((page === null)))) {
return null;
}
values = $.call(_optional_list, [$.call($.attr(page, "get"), ["alerts"], null), "vehicle.breachAlerts.alerts"], null);
alerts = null;
if ($.truth(((values !== null)))) {
parsed_alerts = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(parsed_alerts, "append"), [null], null);
continue;
}
path = ("vehicle.breachAlerts.alerts[" + $.str(index) + "]");
item = $.call(_object, [value, path], null);
location_value = $.call(_optional_object, [$.call($.attr(item, "get"), ["location"], null), ($.str(path) + ".location")], null);
$.call($.attr(parsed_alerts, "append"), [$.call(BreachAlert, [], Object.assign({}, {"service_type": $.call(_optional_str, [$.call($.attr(item, "get"), ["serviceType"], null)], null)}, {"breach_date_time": $.call(_optional_datetime, [$.call($.attr(item, "get"), ["breachDateTime"], null)], null)}, {"name": $.call(_optional_str, [$.call($.attr(item, "get"), ["name"], null)], null)}, {"location": ($.truth(((location_value !== null))) ? $.call(_parse_alert_location, [location_value], null) : null)}))], null);
}
alerts = $.call($.tuple, [parsed_alerts], null);
}
return $.call(BreachAlerts, [], Object.assign({}, {"items_per_page": $.call(_optional_int, [$.call($.attr(page, "get"), ["itemsPerPage"], null)], null)}, {"page_number": $.call(_optional_int, [$.call($.attr(page, "get"), ["pageNumber"], null)], null)}, {"total_items": $.call(_optional_int, [$.call($.attr(page, "get"), ["totalItems"], null)], null)}, {"total_pages": $.call(_optional_int, [$.call($.attr(page, "get"), ["totalPages"], null)], null)}, {"alerts": alerts}));
}

export function parse_alert_request_status(data: Record<string, unknown>, root_field: string, options: { status_required: boolean }): string | null;
/** Parse the raw status returned by one vehicle-alert detail query. */
export function parse_alert_request_status(...__args: any[]): any {
let alert, vehicle;
let {"data": data, "root_field": root_field, "status_required": status_required} = $.bind(__args, ["data", "root_field"], {}, ["status_required"], null, null);
/** Parse the raw status returned by one vehicle-alert detail query. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
alert = $.call(_optional_object, [$.call($.attr(vehicle, "get"), [root_field], null), ("vehicle." + $.str(root_field))], null);
if ($.truth(((alert === null)))) {
return null;
}
if ($.truth(status_required)) {
return $.call(_required_str, [$.call($.attr(alert, "get"), ["status"], null), ("vehicle." + $.str(root_field) + ".status")], null);
}
return $.call(_optional_str, [$.call($.attr(alert, "get"), ["status"], null)], null);
}

export function parse_vehicle_alert_request(data: Record<string, unknown>, root_field: string, kind: VehicleAlertKind): VehicleAlertRequest;
/** Parse an accepted asynchronous vehicle-alert change. */
export function parse_vehicle_alert_request(...__args: any[]): any {
let message, request_id, result;
let {"data": data, "root_field": root_field, "kind": kind} = $.bind(__args, ["data", "root_field", "kind"], {}, [], null, null);
/** Parse an accepted asynchronous vehicle-alert change. */
result = $.call(_object, [$.call($.attr(data, "get"), [root_field], null), root_field], null);
request_id = $.call(_optional_str, [$.call($.attr(result, "get"), ["serviceRequestId"], null)], null);
if ($.truth(!$.truth(request_id))) {
message = $.call(_optional_str, [$.call($.attr(result, "get"), ["message"], null)], null);
if ($.truth(message)) {
throw $.call(ResponseError, [message], null);
}
throw $.call(ResponseError, [($.str(root_field) + " did not return a service request id")], null);
}
return $.call(VehicleAlertRequest, [request_id, kind], null);
}

export function parse_reminder_notifications_after_leaving_vehicle(data: Record<string, unknown>): ReminderNotificationsAfterLeavingVehicle | null;
/** Parse nullable after-leaving reminder flags for an AVK2 vehicle. */
export function parse_reminder_notifications_after_leaving_vehicle(...__args: any[]): any {
let reminders, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable after-leaving reminder flags for an AVK2 vehicle. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
reminders = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["reminderNotificationsAfterLeavingVehicle"], null), "vehicle.reminderNotificationsAfterLeavingVehicle"], null);
if ($.truth(((reminders === null)))) {
return null;
}
return $.call(ReminderNotificationsAfterLeavingVehicle, [], Object.assign({}, {"lock": $.call(_optional_bool, [$.call($.attr(reminders, "get"), ["lock"], null)], null)}, {"door": $.call(_optional_bool, [$.call($.attr(reminders, "get"), ["door"], null)], null)}, {"trunk": $.call(_optional_bool, [$.call($.attr(reminders, "get"), ["trunk"], null)], null)}, {"sunroof": $.call(_optional_bool, [$.call($.attr(reminders, "get"), ["sunroof"], null)], null)}, {"window": $.call(_optional_bool, [$.call($.attr(reminders, "get"), ["window"], null)], null)}));
}

export function parse_toggle_reminder_notifications_after_leaving_vehicle(data: Record<string, unknown>): boolean | null;
/** Parse the nullable success value returned by the reminder mutation. */
export function parse_toggle_reminder_notifications_after_leaving_vehicle(...__args: any[]): any {
let result;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable success value returned by the reminder mutation. */
result = $.call(_optional_object, [$.call($.attr(data, "get"), ["toggleReminderNotificationsAfterLeavingVehicle"], null), "toggleReminderNotificationsAfterLeavingVehicle"], null);
return ($.truth(((result !== null))) ? $.call(_optional_bool, [$.call($.attr(result, "get"), ["success"], null)], null) : null);
}

export function parse_vehicle_data_privacy_mode(data: Record<string, unknown>): DataPrivacyMode | null;
/** Parse a vehicle's required privacy mode when the vehicle exists. */
export function parse_vehicle_data_privacy_mode(...__args: any[]): any {
let raw_mode, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a vehicle's required privacy mode when the vehicle exists. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
raw_mode = $.call(_required_str, [$.call($.attr(vehicle, "get"), ["dataPrivacyMode"], null), "vehicle.dataPrivacyMode"], null);
try {
return $.call(DataPrivacyMode, [raw_mode], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(DataPrivacyMode, "UNKNOWN_VALUE"); } else { throw __error; }
}
}
