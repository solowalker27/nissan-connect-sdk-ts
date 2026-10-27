// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { OtaBatteryLevel, OtaCampaignDescription, OtaUpdate, OtaUpdateErrorInfo, OtaUpdateProgress, OtaUpdateState, OtaUpdateStatus } from "./ota_models";
export { OtaBatteryLevel, OtaCampaignDescription, OtaUpdate, OtaUpdateErrorInfo, OtaUpdateProgress, OtaUpdateState, OtaUpdateStatus };

export function parse_ota_update(data: Record<string, unknown>): OtaUpdate | null;
/** Parse the OTA campaign exposed by a compatible EVO vehicle. */
export function parse_ota_update(...__args: any[]): any {
let battery, campaign, path, status, value, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the OTA campaign exposed by a compatible EVO vehicle. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "otaUpdate"))))) {
return null;
}
path = "vehicle.otaUpdate";
value = $.call(_object, [$.call($.attr(vehicle, "get"), ["otaUpdate"], null), path], null);
status = $.call(_object, [$.call($.attr(value, "get"), ["status"], null), ($.str(path) + ".status")], null);
campaign = $.call(_object, [$.call($.attr(value, "get"), ["campaignDescription"], null), ($.str(path) + ".campaignDescription")], null);
battery = $.call(_object, [$.call($.attr(value, "get"), ["batteryLevel"], null), ($.str(path) + ".batteryLevel")], null);
return $.call(OtaUpdate, [], Object.assign({}, {"campaign_operation_id": $.call(_string, [$.call($.attr(value, "get"), ["campaignOperationId"], null), ($.str(path) + ".campaignOperationId")], null)}, {"status": $.call(OtaUpdateStatus, [], Object.assign({}, {"status": $.call(_nullable_state, [$.call($.attr(status, "get"), ["status"], null), ($.str(path) + ".status.status")], null)}, {"activation_timer_value": $.call(_nullable_datetime, [$.call($.attr(status, "get"), ["activationTimerValue"], null), ($.str(path) + ".status.activationTimerValue")], null)}, {"progress": $.call(_nullable_int, [$.call($.attr(status, "get"), ["progress"], null), ($.str(path) + ".status.progress")], null)}, {"count_down_time_start": $.call(_nullable_datetime, [$.call($.attr(status, "get"), ["countDownTimeStart"], null), ($.str(path) + ".status.countDownTimeStart")], null)}, {"count_down_delay": $.call(_nullable_int, [$.call($.attr(status, "get"), ["countDownDelay"], null), ($.str(path) + ".status.countDownDelay")], null)}))}, {"campaign_description": $.call(OtaCampaignDescription, [], Object.assign({}, {"global_release_note": $.call(_nullable_string, [$.call($.attr(campaign, "get"), ["globalReleaseNote"], null), ($.str(path) + ".campaignDescription.globalReleaseNote")], null)}, {"download_disclaimer": $.call(_nullable_string, [$.call($.attr(campaign, "get"), ["downloadDisclaimer"], null), ($.str(path) + ".campaignDescription.downloadDisclaimer")], null)}, {"activation_disclaimer": $.call(_nullable_string, [$.call($.attr(campaign, "get"), ["activationDisclaimer"], null), ($.str(path) + ".campaignDescription.activationDisclaimer")], null)}, {"activation_estimated_time": $.call(_nullable_string, [$.call($.attr(campaign, "get"), ["activationEstimatedTime"], null), ($.str(path) + ".campaignDescription.activationEstimatedTime")], null)}))}, {"battery_level": $.call(OtaBatteryLevel, [], Object.assign({}, {"activation_enabled": $.call(_bool, [$.call($.attr(battery, "get"), ["activationEnabled"], null), ($.str(path) + ".batteryLevel.activationEnabled")], null)}, {"state_of_charge": $.call(_nullable_float, [$.call($.attr(battery, "get"), ["stateOfCharge"], null), ($.str(path) + ".batteryLevel.stateOfCharge")], null)}, {"activation_minimum_battery_level": $.call(_nullable_float, [$.call($.attr(battery, "get"), ["activationMinimumBatteryLevel"], null), ($.str(path) + ".batteryLevel.activationMinimumBatteryLevel")], null)}))}, {"size": $.call(_nullable_int, [$.call($.attr(value, "get"), ["size"], null), ($.str(path) + ".size")], null)}, {"last_checked": $.call(_nullable_datetime, [$.call($.attr(value, "get"), ["lastChecked"], null), ($.str(path) + ".lastChecked")], null)}, {"activation_timer_value": $.call(_nullable_datetime, [$.call($.attr(value, "get"), ["activationTimerValue"], null), ($.str(path) + ".activationTimerValue")], null)}));
}

export function parse_ota_update_progress(data: Record<string, unknown>): OtaUpdateProgress | null;
/** Parse progress for one OTA campaign on a compatible EVO vehicle. */
export function parse_ota_update_progress(...__args: any[]): any {
let error, error_path, errors, index, parsed_errors, path, raw_error, raw_errors, value, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse progress for one OTA campaign on a compatible EVO vehicle. */
vehicle = $.call(_optional_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
if ($.truth($.or(() => ((vehicle === null)), () => (!$.contains(vehicle, "otaUpdateProgress"))))) {
return null;
}
path = "vehicle.otaUpdateProgress";
value = $.call(_object, [$.call($.attr(vehicle, "get"), ["otaUpdateProgress"], null), path], null);
raw_errors = $.call(_nullable_list, [$.call($.attr(value, "get"), ["errorInfo"], null), ($.str(path) + ".errorInfo")], null);
errors = null;
if ($.truth(((raw_errors !== null)))) {
parsed_errors = [];
for ([index, raw_error] of $.iterable($.call($.enumerate, [raw_errors], null))) {
error_path = ($.str(path) + ".errorInfo[" + $.str(index) + "]");
error = $.call(_object, [raw_error, error_path], null);
$.call($.attr(parsed_errors, "append"), [$.call(OtaUpdateErrorInfo, [], Object.assign({}, {"error_code": $.call(_string, [$.call($.attr(error, "get"), ["errorCode"], null), ($.str(error_path) + ".errorCode")], null)}, {"error_message": $.call(_string, [$.call($.attr(error, "get"), ["errorMessage"], null), ($.str(error_path) + ".errorMessage")], null)}, {"is_retryable": $.call(_bool, [$.call($.attr(error, "get"), ["isRetryable"], null), ($.str(error_path) + ".isRetryable")], null)}))], null);
}
errors = $.call($.tuple, [parsed_errors], null);
}
return $.call(OtaUpdateProgress, [], Object.assign({}, {"status": $.call(_nullable_state, [$.call($.attr(value, "get"), ["status"], null), ($.str(path) + ".status")], null)}, {"percentage": $.call(_nullable_int, [$.call($.attr(value, "get"), ["percentage"], null), ($.str(path) + ".percentage")], null)}, {"error_info": errors}));
}

export function _object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _object. */
export function _object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
return value;
}

export function _optional_object(value: unknown, path: string): Record<string, unknown> | null;
/** Translated upstream _optional_object. */
export function _optional_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_object, [value, path], null);
}

export function _nullable_list(value: unknown, path: string): ReadonlyArray<unknown> | null;
/** Translated upstream _nullable_list. */
export function _nullable_list(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _string(value: unknown, path: string): string;
/** Translated upstream _string. */
export function _string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return value;
}

export function _nullable_string(value: unknown, path: string): string | null;
/** Translated upstream _nullable_string. */
export function _nullable_string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_string, [value, path], null);
}

export function _bool(value: unknown, path: string): boolean;
/** Translated upstream _bool. */
export function _bool(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _nullable_int(value: unknown, path: string): number | null;
/** Translated upstream _nullable_int. */
export function _nullable_int(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.int], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an integer")], null);
}
return value;
}

export function _nullable_float(value: unknown, path: string): number | null;
/** Translated upstream _nullable_float. */
export function _nullable_float(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, [$.int, $.float]], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not numeric")], null);
}
return $.call($.float, [value], null);
}

export function _nullable_state(value: unknown, path: string): OtaUpdateState | null;
/** Translated upstream _nullable_state. */
export function _nullable_state(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
raw_value = $.call(_string, [value, path], null);
try {
return $.call(OtaUpdateState, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { return $.attr(OtaUpdateState, "UNKNOWN_VALUE"); } else { throw __error; }
}
}

export function _nullable_datetime(value: unknown, path: string): $.DateValue | null;
/** Translated upstream _nullable_datetime. */
export function _nullable_datetime(...__args: any[]): any {
let normalized, parsed;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time with an offset")], null);
}
normalized = ($.truth($.call($.attr(value, "endswith"), ["Z"], null)) ? ($.str($.slice(value, null, -(1), null)) + "+00:00") : value);
try {
parsed = $.call($.attr(datetime, "fromisoformat"), [normalized], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { let error = __error; throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time with an offset")], null); } else { throw __error; }
}
if ($.truth($.or(() => (($.attr(parsed, "tzinfo") === null)), () => (($.call($.attr(parsed, "utcoffset"), [], null) === null))))) {
throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time with an offset")], null);
}
return parsed;
}
