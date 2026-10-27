"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1GTokenizedUrlResult = exports.V1GTokenizedUrlData = exports.V1GNotificationPreferencesUpdateResult = exports.V1GNotificationPreference = exports.V1GMonitoredChargingPlanEnrollmentResult = exports.V1GMonitoredChargingPlanEnrollmentData = exports.V1GMonitoredChargingPlanCancellationResult = exports.V1GMonitoredChargingAccountStatusResult = exports.V1GMonitoredChargingAccountData = exports.V1GAccountStatus = exports.ResponseError = void 0;
exports.parse_v1g_monitored_charging_account_status = parse_v1g_monitored_charging_account_status;
exports.parse_v1g_update_notification_preferences = parse_v1g_update_notification_preferences;
exports.parse_v1g_tokenized_url = parse_v1g_tokenized_url;
exports.parse_v1g_enroll_monitored_charging_plan = parse_v1g_enroll_monitored_charging_plan;
exports.parse_v1g_cancel_monitored_charging_plan = parse_v1g_cancel_monitored_charging_plan;
exports._root = _root;
exports._required_optional_typed_object = _required_optional_typed_object;
exports._typed_object = _typed_object;
exports._required_value = _required_value;
exports._required_notification_preferences = _required_notification_preferences;
exports._parse_notification_preference = _parse_notification_preference;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._nullable_bool = _nullable_bool;
exports._nullable_account_status = _nullable_account_status;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const v1g_models_1 = require("./v1g_models");
Object.defineProperty(exports, "V1GAccountStatus", { enumerable: true, get: function () { return v1g_models_1.V1GAccountStatus; } });
Object.defineProperty(exports, "V1GMonitoredChargingAccountData", { enumerable: true, get: function () { return v1g_models_1.V1GMonitoredChargingAccountData; } });
Object.defineProperty(exports, "V1GMonitoredChargingAccountStatusResult", { enumerable: true, get: function () { return v1g_models_1.V1GMonitoredChargingAccountStatusResult; } });
Object.defineProperty(exports, "V1GMonitoredChargingPlanCancellationResult", { enumerable: true, get: function () { return v1g_models_1.V1GMonitoredChargingPlanCancellationResult; } });
Object.defineProperty(exports, "V1GMonitoredChargingPlanEnrollmentData", { enumerable: true, get: function () { return v1g_models_1.V1GMonitoredChargingPlanEnrollmentData; } });
Object.defineProperty(exports, "V1GMonitoredChargingPlanEnrollmentResult", { enumerable: true, get: function () { return v1g_models_1.V1GMonitoredChargingPlanEnrollmentResult; } });
Object.defineProperty(exports, "V1GNotificationPreference", { enumerable: true, get: function () { return v1g_models_1.V1GNotificationPreference; } });
Object.defineProperty(exports, "V1GNotificationPreferencesUpdateResult", { enumerable: true, get: function () { return v1g_models_1.V1GNotificationPreferencesUpdateResult; } });
Object.defineProperty(exports, "V1GTokenizedUrlData", { enumerable: true, get: function () { return v1g_models_1.V1GTokenizedUrlData; } });
Object.defineProperty(exports, "V1GTokenizedUrlResult", { enumerable: true, get: function () { return v1g_models_1.V1GTokenizedUrlResult; } });
/** Parse the raw nullable V1G monitored-account response. */
function parse_v1g_monitored_charging_account_status(...__args) {
    let account_data, path, raw_data, root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw nullable V1G monitored-account response. */
    root_field = "v1GMonitoredChargingAccountStatus";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    raw_data = _runtime_1.py.call(_required_optional_typed_object, [root, "data", (_runtime_1.py.str(root_field) + ".data")], null);
    account_data = null;
    if (_runtime_1.py.truth(((raw_data !== null)))) {
        path = (_runtime_1.py.str(root_field) + ".data");
        account_data = _runtime_1.py.call(v1g_models_1.V1GMonitoredChargingAccountData, [], Object.assign({}, { "account_status": _runtime_1.py.call(_nullable_account_status, [_runtime_1.py.call(_required_value, [raw_data, "v1GMonitoredChargingAccountStatus", (_runtime_1.py.str(path) + ".v1GMonitoredChargingAccountStatus")], null), (_runtime_1.py.str(path) + ".v1GMonitoredChargingAccountStatus")], null) }, { "notification_preferences": _runtime_1.py.call(_required_notification_preferences, [raw_data, "v1GNotificationPreferences", (_runtime_1.py.str(path) + ".v1GNotificationPreferences")], null) }, { "vin": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_required_value, [raw_data, "vin", (_runtime_1.py.str(path) + ".vin")], null), (_runtime_1.py.str(path) + ".vin")], null) }));
    }
    return _runtime_1.py.call(v1g_models_1.V1GMonitoredChargingAccountStatusResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_required_value, [root, "statusCode", (_runtime_1.py.str(root_field) + ".statusCode")], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "data": account_data }));
}
/** Parse the raw nullable V1G notification-preference update. */
function parse_v1g_update_notification_preferences(...__args) {
    let root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw nullable V1G notification-preference update. */
    root_field = "v1GUpdateNotificationPreferences";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(v1g_models_1.V1GNotificationPreferencesUpdateResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_required_value, [root, "statusCode", (_runtime_1.py.str(root_field) + ".statusCode")], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_required_value, [root, "statusMessage", (_runtime_1.py.str(root_field) + ".statusMessage")], null), (_runtime_1.py.str(root_field) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_required_value, [root, "timestamp", (_runtime_1.py.str(root_field) + ".timestamp")], null), (_runtime_1.py.str(root_field) + ".timestamp")], null) }, { "notification_preferences": _runtime_1.py.call(_required_notification_preferences, [root, "v1GNotificationPreferences", (_runtime_1.py.str(root_field) + ".v1GNotificationPreferences")], null) }));
}
/** Parse the raw nullable V1G tokenized-URL response. */
function parse_v1g_tokenized_url(...__args) {
    let path, raw_data, root, root_field, tokenized_url;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw nullable V1G tokenized-URL response. */
    root_field = "v1GTokenizedUrl";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    raw_data = _runtime_1.py.call(_required_optional_typed_object, [root, "data", (_runtime_1.py.str(root_field) + ".data")], null);
    tokenized_url = null;
    if (_runtime_1.py.truth(((raw_data !== null)))) {
        path = (_runtime_1.py.str(root_field) + ".data");
        tokenized_url = _runtime_1.py.call(v1g_models_1.V1GTokenizedUrlData, [], Object.assign({}, { "url": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_required_value, [raw_data, "url", (_runtime_1.py.str(path) + ".url")], null), (_runtime_1.py.str(path) + ".url")], null) }, { "vin": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_required_value, [raw_data, "vin", (_runtime_1.py.str(path) + ".vin")], null), (_runtime_1.py.str(path) + ".vin")], null) }));
    }
    return _runtime_1.py.call(v1g_models_1.V1GTokenizedUrlResult, [], Object.assign({}, { "data": tokenized_url }));
}
/** Parse the raw nullable V1G monitored-plan enrollment response. */
function parse_v1g_enroll_monitored_charging_plan(...__args) {
    let enrollment, path, raw_data, root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw nullable V1G monitored-plan enrollment response. */
    root_field = "v1GEnrollMonitoredChargingPlan";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    raw_data = _runtime_1.py.call(_required_optional_typed_object, [root, "data", (_runtime_1.py.str(root_field) + ".data")], null);
    enrollment = null;
    if (_runtime_1.py.truth(((raw_data !== null)))) {
        path = (_runtime_1.py.str(root_field) + ".data");
        enrollment = _runtime_1.py.call(v1g_models_1.V1GMonitoredChargingPlanEnrollmentData, [], Object.assign({}, { "account_status": _runtime_1.py.call(_nullable_account_status, [_runtime_1.py.call(_required_value, [raw_data, "v1GMonitoredChargingAccountStatus", (_runtime_1.py.str(path) + ".v1GMonitoredChargingAccountStatus")], null), (_runtime_1.py.str(path) + ".v1GMonitoredChargingAccountStatus")], null) }));
    }
    return _runtime_1.py.call(v1g_models_1.V1GMonitoredChargingPlanEnrollmentResult, [], Object.assign({}, { "data": enrollment }));
}
/** Parse the raw nullable V1G monitored-plan cancellation response. */
function parse_v1g_cancel_monitored_charging_plan(...__args) {
    let root, root_field;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the raw nullable V1G monitored-plan cancellation response. */
    root_field = "v1GCancelMonitoredChargingPlan";
    root = _runtime_1.py.call(_root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(v1g_models_1.V1GMonitoredChargingPlanCancellationResult, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_required_value, [root, "statusCode", (_runtime_1.py.str(root_field) + ".statusCode")], null), (_runtime_1.py.str(root_field) + ".statusCode")], null) }));
}
/** Translated upstream _root. */
function _root(...__args) {
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    return _runtime_1.py.call(_required_optional_typed_object, [data, root_field, root_field], null);
}
/** Translated upstream _required_optional_typed_object. */
function _required_optional_typed_object(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_value, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_typed_object, [value, path], null);
}
/** Translated upstream _typed_object. */
function _typed_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    _runtime_1.py.call(_string, [_runtime_1.py.call(_required_value, [value, "__typename", (_runtime_1.py.str(path) + ".__typename")], null), (_runtime_1.py.str(path) + ".__typename")], null);
    return value;
}
/** Translated upstream _required_value. */
function _required_value(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is missing")], null);
    }
    return _runtime_1.py.get(container, field);
}
/** Translated upstream _required_notification_preferences. */
function _required_notification_preferences(...__args) {
    let index, item, preferences, value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_value, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    preferences = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(preferences, "append"), [null], null);
            continue;
        }
        _runtime_1.py.call(_runtime_1.py.attr(preferences, "append"), [_runtime_1.py.call(_parse_notification_preference, [item, (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [preferences], null);
}
/** Translated upstream _parse_notification_preference. */
function _parse_notification_preference(...__args) {
    let preference;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    preference = _runtime_1.py.call(_typed_object, [value, path], null);
    return _runtime_1.py.call(v1g_models_1.V1GNotificationPreference, [], Object.assign({}, { "notification_category": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_required_value, [preference, "v1GNotificationCategory", (_runtime_1.py.str(path) + ".v1GNotificationCategory")], null), (_runtime_1.py.str(path) + ".v1GNotificationCategory")], null) }, { "email_status": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_required_value, [preference, "v1GEmailStatus", (_runtime_1.py.str(path) + ".v1GEmailStatus")], null), (_runtime_1.py.str(path) + ".v1GEmailStatus")], null) }, { "push_status": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_required_value, [preference, "v1GPushStatus", (_runtime_1.py.str(path) + ".v1GPushStatus")], null), (_runtime_1.py.str(path) + ".v1GPushStatus")], null) }, { "sms_status": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_required_value, [preference, "v1GSmsStatus", (_runtime_1.py.str(path) + ".v1GSmsStatus")], null), (_runtime_1.py.str(path) + ".v1GSmsStatus")], null) }));
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
/** Translated upstream _nullable_bool. */
function _nullable_bool(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _nullable_account_status. */
function _nullable_account_status(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_nullable_string, [value, path], null);
    if (_runtime_1.py.truth(((raw_value === null)))) {
        return null;
    }
    try {
        return _runtime_1.py.call(v1g_models_1.V1GAccountStatus, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(v1g_models_1.V1GAccountStatus, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=v1g_parsing.js.map