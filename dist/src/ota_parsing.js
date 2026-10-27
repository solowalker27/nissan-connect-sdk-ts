"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtaUpdateStatus = exports.OtaUpdateState = exports.OtaUpdateProgress = exports.OtaUpdateErrorInfo = exports.OtaUpdate = exports.OtaCampaignDescription = exports.OtaBatteryLevel = exports.ResponseError = void 0;
exports.parse_ota_update = parse_ota_update;
exports.parse_ota_update_progress = parse_ota_update_progress;
exports._object = _object;
exports._optional_object = _optional_object;
exports._nullable_list = _nullable_list;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._bool = _bool;
exports._nullable_int = _nullable_int;
exports._nullable_float = _nullable_float;
exports._nullable_state = _nullable_state;
exports._nullable_datetime = _nullable_datetime;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const ota_models_1 = require("./ota_models");
Object.defineProperty(exports, "OtaBatteryLevel", { enumerable: true, get: function () { return ota_models_1.OtaBatteryLevel; } });
Object.defineProperty(exports, "OtaCampaignDescription", { enumerable: true, get: function () { return ota_models_1.OtaCampaignDescription; } });
Object.defineProperty(exports, "OtaUpdate", { enumerable: true, get: function () { return ota_models_1.OtaUpdate; } });
Object.defineProperty(exports, "OtaUpdateErrorInfo", { enumerable: true, get: function () { return ota_models_1.OtaUpdateErrorInfo; } });
Object.defineProperty(exports, "OtaUpdateProgress", { enumerable: true, get: function () { return ota_models_1.OtaUpdateProgress; } });
Object.defineProperty(exports, "OtaUpdateState", { enumerable: true, get: function () { return ota_models_1.OtaUpdateState; } });
Object.defineProperty(exports, "OtaUpdateStatus", { enumerable: true, get: function () { return ota_models_1.OtaUpdateStatus; } });
/** Parse the OTA campaign exposed by a compatible EVO vehicle. */
function parse_ota_update(...__args) {
    let battery, campaign, path, status, value, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the OTA campaign exposed by a compatible EVO vehicle. */
    vehicle = _runtime_1.py.call(_optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "otaUpdate"))))) {
        return null;
    }
    path = "vehicle.otaUpdate";
    value = _runtime_1.py.call(_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["otaUpdate"], null), path], null);
    status = _runtime_1.py.call(_object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["status"], null), (_runtime_1.py.str(path) + ".status")], null);
    campaign = _runtime_1.py.call(_object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["campaignDescription"], null), (_runtime_1.py.str(path) + ".campaignDescription")], null);
    battery = _runtime_1.py.call(_object, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["batteryLevel"], null), (_runtime_1.py.str(path) + ".batteryLevel")], null);
    return _runtime_1.py.call(ota_models_1.OtaUpdate, [], Object.assign({}, { "campaign_operation_id": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["campaignOperationId"], null), (_runtime_1.py.str(path) + ".campaignOperationId")], null) }, { "status": _runtime_1.py.call(ota_models_1.OtaUpdateStatus, [], Object.assign({}, { "status": _runtime_1.py.call(_nullable_state, [_runtime_1.py.call(_runtime_1.py.attr(status, "get"), ["status"], null), (_runtime_1.py.str(path) + ".status.status")], null) }, { "activation_timer_value": _runtime_1.py.call(_nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(status, "get"), ["activationTimerValue"], null), (_runtime_1.py.str(path) + ".status.activationTimerValue")], null) }, { "progress": _runtime_1.py.call(_nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(status, "get"), ["progress"], null), (_runtime_1.py.str(path) + ".status.progress")], null) }, { "count_down_time_start": _runtime_1.py.call(_nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(status, "get"), ["countDownTimeStart"], null), (_runtime_1.py.str(path) + ".status.countDownTimeStart")], null) }, { "count_down_delay": _runtime_1.py.call(_nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(status, "get"), ["countDownDelay"], null), (_runtime_1.py.str(path) + ".status.countDownDelay")], null) })) }, { "campaign_description": _runtime_1.py.call(ota_models_1.OtaCampaignDescription, [], Object.assign({}, { "global_release_note": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(campaign, "get"), ["globalReleaseNote"], null), (_runtime_1.py.str(path) + ".campaignDescription.globalReleaseNote")], null) }, { "download_disclaimer": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(campaign, "get"), ["downloadDisclaimer"], null), (_runtime_1.py.str(path) + ".campaignDescription.downloadDisclaimer")], null) }, { "activation_disclaimer": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(campaign, "get"), ["activationDisclaimer"], null), (_runtime_1.py.str(path) + ".campaignDescription.activationDisclaimer")], null) }, { "activation_estimated_time": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(campaign, "get"), ["activationEstimatedTime"], null), (_runtime_1.py.str(path) + ".campaignDescription.activationEstimatedTime")], null) })) }, { "battery_level": _runtime_1.py.call(ota_models_1.OtaBatteryLevel, [], Object.assign({}, { "activation_enabled": _runtime_1.py.call(_bool, [_runtime_1.py.call(_runtime_1.py.attr(battery, "get"), ["activationEnabled"], null), (_runtime_1.py.str(path) + ".batteryLevel.activationEnabled")], null) }, { "state_of_charge": _runtime_1.py.call(_nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(battery, "get"), ["stateOfCharge"], null), (_runtime_1.py.str(path) + ".batteryLevel.stateOfCharge")], null) }, { "activation_minimum_battery_level": _runtime_1.py.call(_nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(battery, "get"), ["activationMinimumBatteryLevel"], null), (_runtime_1.py.str(path) + ".batteryLevel.activationMinimumBatteryLevel")], null) })) }, { "size": _runtime_1.py.call(_nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["size"], null), (_runtime_1.py.str(path) + ".size")], null) }, { "last_checked": _runtime_1.py.call(_nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["lastChecked"], null), (_runtime_1.py.str(path) + ".lastChecked")], null) }, { "activation_timer_value": _runtime_1.py.call(_nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["activationTimerValue"], null), (_runtime_1.py.str(path) + ".activationTimerValue")], null) }));
}
/** Parse progress for one OTA campaign on a compatible EVO vehicle. */
function parse_ota_update_progress(...__args) {
    let error, error_path, errors, index, parsed_errors, path, raw_error, raw_errors, value, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse progress for one OTA campaign on a compatible EVO vehicle. */
    vehicle = _runtime_1.py.call(_optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "otaUpdateProgress"))))) {
        return null;
    }
    path = "vehicle.otaUpdateProgress";
    value = _runtime_1.py.call(_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["otaUpdateProgress"], null), path], null);
    raw_errors = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["errorInfo"], null), (_runtime_1.py.str(path) + ".errorInfo")], null);
    errors = null;
    if (_runtime_1.py.truth(((raw_errors !== null)))) {
        parsed_errors = [];
        for ([index, raw_error] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_errors], null))) {
            error_path = (_runtime_1.py.str(path) + ".errorInfo[" + _runtime_1.py.str(index) + "]");
            error = _runtime_1.py.call(_object, [raw_error, error_path], null);
            _runtime_1.py.call(_runtime_1.py.attr(parsed_errors, "append"), [_runtime_1.py.call(ota_models_1.OtaUpdateErrorInfo, [], Object.assign({}, { "error_code": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(error, "get"), ["errorCode"], null), (_runtime_1.py.str(error_path) + ".errorCode")], null) }, { "error_message": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(error, "get"), ["errorMessage"], null), (_runtime_1.py.str(error_path) + ".errorMessage")], null) }, { "is_retryable": _runtime_1.py.call(_bool, [_runtime_1.py.call(_runtime_1.py.attr(error, "get"), ["isRetryable"], null), (_runtime_1.py.str(error_path) + ".isRetryable")], null) }))], null);
        }
        errors = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_errors], null);
    }
    return _runtime_1.py.call(ota_models_1.OtaUpdateProgress, [], Object.assign({}, { "status": _runtime_1.py.call(_nullable_state, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["status"], null), (_runtime_1.py.str(path) + ".status")], null) }, { "percentage": _runtime_1.py.call(_nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["percentage"], null), (_runtime_1.py.str(path) + ".percentage")], null) }, { "error_info": errors }));
}
/** Translated upstream _object. */
function _object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    return value;
}
/** Translated upstream _optional_object. */
function _optional_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_object, [value, path], null);
}
/** Translated upstream _nullable_list. */
function _nullable_list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _string. */
function _string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return value;
}
/** Translated upstream _nullable_string. */
function _nullable_string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_string, [value, path], null);
}
/** Translated upstream _bool. */
function _bool(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _nullable_int. */
function _nullable_int(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.int], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an integer")], null);
    }
    return value;
}
/** Translated upstream _nullable_float. */
function _nullable_float(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, [_runtime_1.py.int, _runtime_1.py.float]], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not numeric")], null);
    }
    return _runtime_1.py.call(_runtime_1.py.float, [value], null);
}
/** Translated upstream _nullable_state. */
function _nullable_state(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    raw_value = _runtime_1.py.call(_string, [value, path], null);
    try {
        return _runtime_1.py.call(ota_models_1.OtaUpdateState, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(ota_models_1.OtaUpdateState, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _nullable_datetime. */
function _nullable_datetime(...__args) {
    let normalized, parsed;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time with an offset")], null);
    }
    normalized = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(value, "endswith"), ["Z"], null)) ? (_runtime_1.py.str(_runtime_1.py.slice(value, null, -(1), null)) + "+00:00") : value);
    try {
        parsed = _runtime_1.py.call(_runtime_1.py.attr(datetime, "fromisoformat"), [normalized], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            let error = __error;
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time with an offset")], null);
        }
        else {
            throw __error;
        }
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((_runtime_1.py.attr(parsed, "tzinfo") === null)), () => ((_runtime_1.py.call(_runtime_1.py.attr(parsed, "utcoffset"), [], null) === null))))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time with an offset")], null);
    }
    return parsed;
}
//# sourceMappingURL=ota_parsing.js.map