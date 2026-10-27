"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypePreference = exports.NotificationPreference = exports.NotificationDestination = exports.NotificationCategory = exports.NissanEnergyNotificationPreferencesUpdate = exports.NissanEnergyNotificationPreferences = exports.ResponseError = void 0;
exports.parse_nissan_energy_notification_preferences = parse_nissan_energy_notification_preferences;
exports.parse_update_nissan_energy_notification_preferences = parse_update_nissan_energy_notification_preferences;
exports.parse_notification_preferences = parse_notification_preferences;
exports._object = _object;
exports._optional_object = _optional_object;
exports._required_optional_object = _required_optional_object;
exports._list = _list;
exports._nullable_list = _nullable_list;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._bool = _bool;
exports._nullable_bool = _nullable_bool;
exports._parse_nissan_energy_preferences = _parse_nissan_energy_preferences;
exports._category = _category;
exports._destination = _destination;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const notification_models_1 = require("./notification_models");
Object.defineProperty(exports, "NissanEnergyNotificationPreferences", { enumerable: true, get: function () { return notification_models_1.NissanEnergyNotificationPreferences; } });
Object.defineProperty(exports, "NissanEnergyNotificationPreferencesUpdate", { enumerable: true, get: function () { return notification_models_1.NissanEnergyNotificationPreferencesUpdate; } });
Object.defineProperty(exports, "NotificationCategory", { enumerable: true, get: function () { return notification_models_1.NotificationCategory; } });
Object.defineProperty(exports, "NotificationDestination", { enumerable: true, get: function () { return notification_models_1.NotificationDestination; } });
Object.defineProperty(exports, "NotificationPreference", { enumerable: true, get: function () { return notification_models_1.NotificationPreference; } });
Object.defineProperty(exports, "NotificationTypePreference", { enumerable: true, get: function () { return notification_models_1.NotificationTypePreference; } });
/** Parse the nullable Nissan Energy notification-preference chain. */
function parse_nissan_energy_notification_preferences(...__args) {
    let account_data, account_status, preferences;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable Nissan Energy notification-preference chain. */
    account_status = _runtime_1.py.call(_required_optional_object, [data, "accountStatus", "accountStatus"], null);
    if (_runtime_1.py.truth(((account_status === null)))) {
        return null;
    }
    _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(account_status, "get"), ["__typename"], null), "accountStatus.__typename"], null);
    account_data = _runtime_1.py.call(_required_optional_object, [account_status, "data", "accountStatus.data"], null);
    if (_runtime_1.py.truth(((account_data === null)))) {
        return null;
    }
    _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(account_data, "get"), ["__typename"], null), "accountStatus.data.__typename"], null);
    preferences = _runtime_1.py.call(_required_optional_object, [account_data, "notificationPreferences", "accountStatus.data.notificationPreferences"], null);
    if (_runtime_1.py.truth(((preferences === null)))) {
        return null;
    }
    return _runtime_1.py.call(_parse_nissan_energy_preferences, [preferences, "accountStatus.data.notificationPreferences"], null);
}
/** Parse status and nullable result from the Nissan Energy mutation. */
function parse_update_nissan_energy_notification_preferences(...__args) {
    let path, preferences, preferences_data, result;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse status and nullable result from the Nissan Energy mutation. */
    path = "updateNotificationPreferences";
    result = _runtime_1.py.call(_required_optional_object, [data, path, path], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
    preferences_data = _runtime_1.py.call(_required_optional_object, [result, "data", (_runtime_1.py.str(path) + ".data")], null);
    preferences = (_runtime_1.py.truth(((preferences_data !== null))) ? _runtime_1.py.call(_parse_nissan_energy_preferences, [preferences_data, (_runtime_1.py.str(path) + ".data")], null) : null);
    return _runtime_1.py.call(notification_models_1.NissanEnergyNotificationPreferencesUpdate, [], Object.assign({}, { "status_code": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusCode"], null), (_runtime_1.py.str(path) + ".statusCode")], null) }, { "status_message": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["statusMessage"], null), (_runtime_1.py.str(path) + ".statusMessage")], null) }, { "timestamp": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["timestamp"], null), (_runtime_1.py.str(path) + ".timestamp")], null) }, { "preferences": preferences }));
}
/** Parse preferences from the vehicle query or preference mutation. */
function parse_notification_preferences(...__args) {
    let container, index, notification_type, notification_types, path, preference, preferences, raw_preference, raw_type, raw_types, type_index, type_path, values;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], { "root_field": "vehicle" }, [], null, null);
    /** Parse preferences from the vehicle query or preference mutation. */
    container = _runtime_1.py.call(_optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((container === null)), () => (!_runtime_1.py.contains(container, "notificationPreferences"))))) {
        return null;
    }
    values = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(container, "get"), ["notificationPreferences"], null), (_runtime_1.py.str(root_field) + ".notificationPreferences")], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    preferences = [];
    for ([index, raw_preference] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((raw_preference === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(preferences, "append"), [null], null);
            continue;
        }
        path = (_runtime_1.py.str(root_field) + ".notificationPreferences[" + _runtime_1.py.str(index) + "]");
        preference = _runtime_1.py.call(_object, [raw_preference, path], null);
        raw_types = _runtime_1.py.call(_list, [_runtime_1.py.call(_runtime_1.py.attr(preference, "get"), ["notificationType"], null), (_runtime_1.py.str(path) + ".notificationType")], null);
        notification_types = [];
        for ([type_index, raw_type] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_types], null))) {
            if (_runtime_1.py.truth(((raw_type === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(notification_types, "append"), [null], null);
                continue;
            }
            type_path = (_runtime_1.py.str(path) + ".notificationType[" + _runtime_1.py.str(type_index) + "]");
            notification_type = _runtime_1.py.call(_object, [raw_type, type_path], null);
            _runtime_1.py.call(_runtime_1.py.attr(notification_types, "append"), [_runtime_1.py.call(notification_models_1.NotificationTypePreference, [], Object.assign({}, { "destination": _runtime_1.py.call(_destination, [_runtime_1.py.call(_runtime_1.py.attr(notification_type, "get"), ["destination"], null), (_runtime_1.py.str(type_path) + ".destination")], null) }, { "opt_in": _runtime_1.py.call(_bool, [_runtime_1.py.call(_runtime_1.py.attr(notification_type, "get"), ["optIn"], null), (_runtime_1.py.str(type_path) + ".optIn")], null) }))], null);
        }
        _runtime_1.py.call(_runtime_1.py.attr(preferences, "append"), [_runtime_1.py.call(notification_models_1.NotificationPreference, [], Object.assign({}, { "notification_category": _runtime_1.py.call(_category, [_runtime_1.py.call(_runtime_1.py.attr(preference, "get"), ["notificationCategory"], null), (_runtime_1.py.str(path) + ".notificationCategory")], null) }, { "notification_type": _runtime_1.py.call(_runtime_1.py.tuple, [notification_types], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [preferences], null);
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
/** Translated upstream _required_optional_object. */
function _required_optional_object(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is missing")], null);
    }
    return _runtime_1.py.call(_optional_object, [_runtime_1.py.call(_runtime_1.py.attr(container, "get"), [field], null), path], null);
}
/** Translated upstream _list. */
function _list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _nullable_list. */
function _nullable_list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_list, [value, path], null);
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
/** Translated upstream _nullable_bool. */
function _nullable_bool(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_bool, [value, path], null);
}
/** Translated upstream _parse_nissan_energy_preferences. */
function _parse_nissan_energy_preferences(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
    return _runtime_1.py.call(notification_models_1.NissanEnergyNotificationPreferences, [], Object.assign({}, { "email_status": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["emailStatus"], null), (_runtime_1.py.str(path) + ".emailStatus")], null) }, { "push_status": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["pushStatus"], null), (_runtime_1.py.str(path) + ".pushStatus")], null) }, { "sms_status": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(value, "get"), ["smsStatus"], null), (_runtime_1.py.str(path) + ".smsStatus")], null) }));
}
/** Translated upstream _category. */
function _category(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_string, [value, path], null);
    try {
        return _runtime_1.py.call(notification_models_1.NotificationCategory, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(notification_models_1.NotificationCategory, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _destination. */
function _destination(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_string, [value, path], null);
    try {
        return _runtime_1.py.call(notification_models_1.NotificationDestination, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            return _runtime_1.py.attr(notification_models_1.NotificationDestination, "UNKNOWN_VALUE");
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=notification_parsing.js.map