// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _list, _object, _optional_bool, _optional_datetime, _optional_float, _optional_int, _optional_list, _optional_object, _optional_str, _required_bool, _required_datetime, _required_str } from "./_parsing_values";
export { _list, _object, _optional_bool, _optional_datetime, _optional_float, _optional_int, _optional_list, _optional_object, _optional_str, _required_bool, _required_datetime, _required_str };

import { AlertAddress, AlertDistance, AlertLocation, BoundaryAlert, CurfewAlert, CurfewSchedule, RemoteServiceHistory, RemoteServiceHistoryEntry, SpeedAlert, SpeedThreshold, ValetAlert } from "./models";
export { AlertAddress, AlertDistance, AlertLocation, BoundaryAlert, CurfewAlert, CurfewSchedule, RemoteServiceHistory, RemoteServiceHistoryEntry, SpeedAlert, SpeedThreshold, ValetAlert };

export function _parse_boundary_alerts(value: unknown): ReadonlyArray<BoundaryAlert | null> | null;
/** Translated upstream _parse_boundary_alerts. */
export function _parse_boundary_alerts(...__args: any[]): any {
let address_value, alerts, index, item, location_value, path, radius_value, raw_item, values;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
values = $.call(_optional_list, [value, "vehicle.boundaryAlerts"], null);
if ($.truth(((values === null)))) {
return null;
}
alerts = [];
for ([index, raw_item] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((raw_item === null)))) {
$.call($.attr(alerts, "append"), [null], null);
continue;
}
path = ("vehicle.boundaryAlerts[" + $.str(index) + "]");
item = $.call(_object, [raw_item, path], null);
address_value = $.call(_optional_object, [$.call($.attr(item, "get"), ["address"], null), ($.str(path) + ".address")], null);
location_value = $.call(_optional_object, [$.call($.attr(item, "get"), ["location"], null), ($.str(path) + ".location")], null);
radius_value = $.call(_optional_object, [$.call($.attr(item, "get"), ["radius"], null), ($.str(path) + ".radius")], null);
$.call($.attr(alerts, "append"), [$.call(BoundaryAlert, [], Object.assign({}, {"service_request_id": $.call(_required_str, [$.call($.attr(item, "get"), ["serviceRequestId"], null), ($.str(path) + ".serviceRequestId")], null)}, {"alert_type": $.call(_optional_str, [$.call($.attr(item, "get"), ["alertType"], null)], null)}, {"name": $.call(_required_str, [$.call($.attr(item, "get"), ["name"], null), ($.str(path) + ".name")], null)}, {"enabled": $.call(_required_bool, [$.call($.attr(item, "get"), ["enabled"], null), ($.str(path) + ".enabled")], null)}, {"in_vehicle_warning": $.call(_required_bool, [$.call($.attr(item, "get"), ["inVehicleWarning"], null), ($.str(path) + ".inVehicleWarning")], null)}, {"address": ($.truth(((address_value !== null))) ? $.call(_parse_alert_address, [address_value], null) : null)}, {"location": ($.truth(((location_value !== null))) ? $.call(_parse_alert_location, [location_value], null) : null)}, {"radius": ($.truth(((radius_value !== null))) ? $.call(_parse_alert_distance, [radius_value], null) : null)}))], null);
}
return $.call($.tuple, [alerts], null);
}

export function _parse_curfew_alerts(value: unknown): ReadonlyArray<CurfewAlert | null> | null;
/** Translated upstream _parse_curfew_alerts. */
export function _parse_curfew_alerts(...__args: any[]): any {
let alerts, index, item, path, raw_item, schedule_value, values;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
values = $.call(_optional_list, [value, "vehicle.curfewAlerts"], null);
if ($.truth(((values === null)))) {
return null;
}
alerts = [];
for ([index, raw_item] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((raw_item === null)))) {
$.call($.attr(alerts, "append"), [null], null);
continue;
}
path = ("vehicle.curfewAlerts[" + $.str(index) + "]");
item = $.call(_object, [raw_item, path], null);
schedule_value = $.call(_optional_object, [$.call($.attr(item, "get"), ["schedule"], null), ($.str(path) + ".schedule")], null);
$.call($.attr(alerts, "append"), [$.call(CurfewAlert, [], Object.assign({}, {"service_request_id": $.call(_required_str, [$.call($.attr(item, "get"), ["serviceRequestId"], null), ($.str(path) + ".serviceRequestId")], null)}, {"name": $.call(_required_str, [$.call($.attr(item, "get"), ["name"], null), ($.str(path) + ".name")], null)}, {"enabled": $.call(_required_bool, [$.call($.attr(item, "get"), ["enabled"], null), ($.str(path) + ".enabled")], null)}, {"in_vehicle_warning": $.call(_required_bool, [$.call($.attr(item, "get"), ["inVehicleWarning"], null), ($.str(path) + ".inVehicleWarning")], null)}, {"schedule": ($.truth(((schedule_value !== null))) ? $.call(_parse_curfew_schedule, [schedule_value, ($.str(path) + ".schedule")], null) : null)}))], null);
}
return $.call($.tuple, [alerts], null);
}

export function _parse_speed_alerts(value: unknown): ReadonlyArray<SpeedAlert | null> | null;
/** Translated upstream _parse_speed_alerts. */
export function _parse_speed_alerts(...__args: any[]): any {
let alerts, index, item, path, raw_item, threshold_value, values;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
values = $.call(_optional_list, [value, "vehicle.speedAlerts"], null);
if ($.truth(((values === null)))) {
return null;
}
alerts = [];
for ([index, raw_item] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((raw_item === null)))) {
$.call($.attr(alerts, "append"), [null], null);
continue;
}
path = ("vehicle.speedAlerts[" + $.str(index) + "]");
item = $.call(_object, [raw_item, path], null);
threshold_value = $.call(_optional_object, [$.call($.attr(item, "get"), ["speedThreshold"], null), ($.str(path) + ".speedThreshold")], null);
$.call($.attr(alerts, "append"), [$.call(SpeedAlert, [], Object.assign({}, {"service_request_id": $.call(_required_str, [$.call($.attr(item, "get"), ["serviceRequestId"], null), ($.str(path) + ".serviceRequestId")], null)}, {"name": $.call(_required_str, [$.call($.attr(item, "get"), ["name"], null), ($.str(path) + ".name")], null)}, {"enabled": $.call(_required_bool, [$.call($.attr(item, "get"), ["enabled"], null), ($.str(path) + ".enabled")], null)}, {"in_vehicle_warning": $.call(_required_bool, [$.call($.attr(item, "get"), ["inVehicleWarning"], null), ($.str(path) + ".inVehicleWarning")], null)}, {"threshold": ($.truth(((threshold_value !== null))) ? $.call(SpeedThreshold, [], Object.assign({}, {"unit": $.call(_optional_str, [$.call($.attr(threshold_value, "get"), ["type"], null)], null)}, {"value": $.call(_optional_float, [$.call($.attr(threshold_value, "get"), ["value"], null)], null)})) : null)}))], null);
}
return $.call($.tuple, [alerts], null);
}

export function _parse_valet_alert(value: Record<string, unknown>): ValetAlert;
/** Translated upstream _parse_valet_alert. */
export function _parse_valet_alert(...__args: any[]): any {
let radius_value;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
radius_value = $.call(_optional_object, [$.call($.attr(value, "get"), ["radius"], null), "vehicle.valetAlert.radius"], null);
return $.call(ValetAlert, [], Object.assign({}, {"service_request_id": $.call(_optional_str, [$.call($.attr(value, "get"), ["serviceRequestId"], null)], null)}, {"radius": ($.truth(((radius_value !== null))) ? $.call(_parse_alert_distance, [radius_value], null) : null)}));
}

export function _parse_alert_address(value: Record<string, unknown>): AlertAddress;
/** Translated upstream _parse_alert_address. */
export function _parse_alert_address(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(AlertAddress, [], Object.assign({}, {"address1": $.call(_optional_str, [$.call($.attr(value, "get"), ["address1"], null)], null)}, {"address2": $.call(_optional_str, [$.call($.attr(value, "get"), ["address2"], null)], null)}, {"city": $.call(_optional_str, [$.call($.attr(value, "get"), ["city"], null)], null)}, {"state": $.call(_optional_str, [$.call($.attr(value, "get"), ["state"], null)], null)}, {"country": $.call(_optional_str, [$.call($.attr(value, "get"), ["country"], null)], null)}, {"postal_code": $.call(_optional_str, [$.call($.attr(value, "get"), ["postalCode"], null)], null)}));
}

export function _parse_alert_location(value: Record<string, unknown>): AlertLocation;
/** Translated upstream _parse_alert_location. */
export function _parse_alert_location(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(AlertLocation, [], Object.assign({}, {"latitude": $.call(_optional_float, [$.call($.attr(value, "get"), ["latitude"], null)], null)}, {"longitude": $.call(_optional_float, [$.call($.attr(value, "get"), ["longitude"], null)], null)}));
}

export function _parse_alert_distance(value: Record<string, unknown>): AlertDistance;
/** Translated upstream _parse_alert_distance. */
export function _parse_alert_distance(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(AlertDistance, [], Object.assign({}, {"value": $.call(_optional_float, [$.call($.attr(value, "get"), ["value"], null)], null)}, {"unit": $.call(_optional_str, [$.call($.attr(value, "get"), ["unit"], null)], null)}));
}

export function _parse_curfew_schedule(value: Record<string, unknown>, path: string): CurfewSchedule;
/** Translated upstream _parse_curfew_schedule. */
export function _parse_curfew_schedule(...__args: any[]): any {
let index, raw_value, raw_week_days, week_days;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_week_days = $.call(_list, [$.call($.attr(value, "get"), ["weekDays"], null), ($.str(path) + ".weekDays")], null);
week_days = $.call($.tuple, [(() => { const __out: any = []; for (const [index, raw_value] of $.iterable($.call($.enumerate, [raw_week_days], null))) { __out.push(($.truth(((raw_value === null))) ? null : $.call(_required_str, [raw_value, ($.str(path) + ".weekDays[" + $.str(index) + "]")], null))); } return __out; })()], null);
return $.call(CurfewSchedule, [], Object.assign({}, {"all_day": $.call(_optional_bool, [$.call($.attr(value, "get"), ["allDay"], null)], null)}, {"start_date_time": $.call(_required_datetime, [$.call($.attr(value, "get"), ["startDateTime"], null), ($.str(path) + ".startDateTime")], null)}, {"duration": $.call(_optional_str, [$.call($.attr(value, "get"), ["duration"], null)], null)}, {"week_days": week_days}));
}

export function parse_remote_service_history(data: Record<string, unknown>): RemoteServiceHistory | null;
/** Parse a page of raw remote-service history. */
export function parse_remote_service_history(...__args: any[]): any {
let history, index, item, page, parsed_history, value, values, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse a page of raw remote-service history. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth(((vehicle === null)))) {
return null;
}
page = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["remoteServiceHistory"], null), "vehicle.remoteServiceHistory"], null);
if ($.truth(((page === null)))) {
return null;
}
values = $.call(_optional_list, [$.call($.attr(page, "get"), ["history"], null), "vehicle.remoteServiceHistory.history"], null);
history = null;
if ($.truth(((values !== null)))) {
parsed_history = [];
for ([index, value] of $.iterable($.call($.enumerate, [values], null))) {
if ($.truth(((value === null)))) {
$.call($.attr(parsed_history, "append"), [null], null);
continue;
}
item = $.call(_object, [value, ("vehicle.remoteServiceHistory.history[" + $.str(index) + "]")], null);
$.call($.attr(parsed_history, "append"), [$.call(RemoteServiceHistoryEntry, [], Object.assign({}, {"service_request_id": $.call(_optional_str, [$.call($.attr(item, "get"), ["serviceRequestId"], null)], null)}, {"status": $.call(_optional_str, [$.call($.attr(item, "get"), ["status"], null)], null)}, {"service_type": $.call(_optional_str, [$.call($.attr(item, "get"), ["serviceType"], null)], null)}, {"status_change_date_time": $.call(_optional_datetime, [$.call($.attr(item, "get"), ["statusChangeDateTime"], null)], null)}))], null);
}
history = $.call($.tuple, [parsed_history], null);
}
return $.call(RemoteServiceHistory, [], Object.assign({}, {"page_number": $.call(_optional_int, [$.call($.attr(page, "get"), ["pageNumber"], null)], null)}, {"items_per_page": $.call(_optional_int, [$.call($.attr(page, "get"), ["itemsPerPage"], null)], null)}, {"total_items": $.call(_optional_int, [$.call($.attr(page, "get"), ["totalItems"], null)], null)}, {"total_pages": $.call(_optional_int, [$.call($.attr(page, "get"), ["totalPages"], null)], null)}, {"history": history}));
}
