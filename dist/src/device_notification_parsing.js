"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports.PushNotificationTokenError = exports.PushNotificationSuccess = exports.PushNotificationDatabaseError = exports.InVehicleMessageSummary = exports.InVehicleMessage = void 0;
exports.parse_register_push_notifications = parse_register_push_notifications;
exports.parse_unregister_push_notifications = parse_unregister_push_notifications;
exports.parse_register_device_for_push_notifications = parse_register_device_for_push_notifications;
exports.parse_unregister_device_for_push_notifications = parse_unregister_device_for_push_notifications;
exports.parse_in_vehicle_messages = parse_in_vehicle_messages;
exports.parse_in_vehicle_message = parse_in_vehicle_message;
exports._parse_legacy_push_result = _parse_legacy_push_result;
exports._parse_device_push_result = _parse_device_push_result;
exports._vehicle = _vehicle;
exports._object = _object;
exports._optional_object = _optional_object;
exports._nullable_list = _nullable_list;
exports._string = _string;
exports._nullable_string = _nullable_string;
exports._nullable_bool = _nullable_bool;
exports._nullable_datetime = _nullable_datetime;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const device_notification_models_1 = require("./device_notification_models");
Object.defineProperty(exports, "InVehicleMessage", { enumerable: true, get: function () { return device_notification_models_1.InVehicleMessage; } });
Object.defineProperty(exports, "InVehicleMessageSummary", { enumerable: true, get: function () { return device_notification_models_1.InVehicleMessageSummary; } });
Object.defineProperty(exports, "PushNotificationDatabaseError", { enumerable: true, get: function () { return device_notification_models_1.PushNotificationDatabaseError; } });
Object.defineProperty(exports, "PushNotificationSuccess", { enumerable: true, get: function () { return device_notification_models_1.PushNotificationSuccess; } });
Object.defineProperty(exports, "PushNotificationTokenError", { enumerable: true, get: function () { return device_notification_models_1.PushNotificationTokenError; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Parse the nullable scalar returned by legacy push registration. */
function parse_register_push_notifications(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable scalar returned by legacy push registration. */
    return _runtime_1.py.call(_parse_legacy_push_result, [data, "registerNotifications"], null);
}
/** Parse the nullable scalar returned by legacy push unregistration. */
function parse_unregister_push_notifications(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable scalar returned by legacy push unregistration. */
    return _runtime_1.py.call(_parse_legacy_push_result, [data, "unregisterNotifications"], null);
}
/** Parse the typed union returned by current device push registration. */
function parse_register_device_for_push_notifications(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the typed union returned by current device push registration. */
    return _runtime_1.py.call(_parse_device_push_result, [data, "registerDeviceForPushNotifications"], null);
}
/** Parse the typed union returned by current device push unregistration. */
function parse_unregister_device_for_push_notifications(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the typed union returned by current device push unregistration. */
    return _runtime_1.py.call(_parse_device_push_result, [data, "unregisterDeviceForPushNotifications"], null);
}
/** Parse a nullable message list while preserving nullable list items. */
function parse_in_vehicle_messages(...__args) {
    let index, message, messages, path, raw_message, values, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse a nullable message list while preserving nullable list items. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "inVehicleMessages"))))) {
        return null;
    }
    values = _runtime_1.py.call(_nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["inVehicleMessages"], null), "vehicle.inVehicleMessages"], null);
    if (_runtime_1.py.truth(((values === null)))) {
        return null;
    }
    messages = [];
    for ([index, raw_message] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [values], null))) {
        if (_runtime_1.py.truth(((raw_message === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(messages, "append"), [null], null);
            continue;
        }
        path = ("vehicle.inVehicleMessages[" + _runtime_1.py.str(index) + "]");
        message = _runtime_1.py.call(_object, [raw_message, path], null);
        _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
        _runtime_1.py.call(_runtime_1.py.attr(messages, "append"), [_runtime_1.py.call(device_notification_models_1.InVehicleMessageSummary, [], Object.assign({}, { "campaign_id": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["campaignId"], null), (_runtime_1.py.str(path) + ".campaignId")], null) }, { "created_date_time": _runtime_1.py.call(_nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["createdDateTime"], null), (_runtime_1.py.str(path) + ".createdDateTime")], null) }, { "title": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["title"], null), (_runtime_1.py.str(path) + ".title")], null) }, { "viewed": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["viewed"], null), (_runtime_1.py.str(path) + ".viewed")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [messages], null);
}
/** Parse nullable detail for one in-vehicle message. */
function parse_in_vehicle_message(...__args) {
    let message, path, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable detail for one in-vehicle message. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((vehicle === null)), () => (!_runtime_1.py.contains(vehicle, "inVehicleMessage"))))) {
        return null;
    }
    path = "vehicle.inVehicleMessage";
    message = _runtime_1.py.call(_optional_object, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["inVehicleMessage"], null), path], null);
    if (_runtime_1.py.truth(((message === null)))) {
        return null;
    }
    _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["__typename"], null), (_runtime_1.py.str(path) + ".__typename")], null);
    return _runtime_1.py.call(device_notification_models_1.InVehicleMessage, [], Object.assign({}, { "title": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["title"], null), (_runtime_1.py.str(path) + ".title")], null) }, { "campaign_id": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["campaignId"], null), (_runtime_1.py.str(path) + ".campaignId")], null) }, { "viewed": _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["viewed"], null), (_runtime_1.py.str(path) + ".viewed")], null) }, { "text": _runtime_1.py.call(_nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["text"], null), (_runtime_1.py.str(path) + ".text")], null) }, { "expire_date": _runtime_1.py.call(_nullable_datetime, [_runtime_1.py.call(_runtime_1.py.attr(message, "get"), ["expireDate"], null), (_runtime_1.py.str(path) + ".expireDate")], null) }));
}
/** Translated upstream _parse_legacy_push_result. */
function _parse_legacy_push_result(...__args) {
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    return _runtime_1.py.call(_nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
}
/** Translated upstream _parse_device_push_result. */
function _parse_device_push_result(...__args) {
    let result, typename;
    let { "data": data, "root_field": root_field } = _runtime_1.py.bind(__args, ["data", "root_field"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, root_field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(root_field) + " is missing")], null);
    }
    result = _runtime_1.py.call(_optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), [root_field], null), root_field], null);
    if (_runtime_1.py.truth(((result === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["__typename"], null), (_runtime_1.py.str(root_field) + ".__typename")], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "GeneralMessage")))) {
        return _runtime_1.py.call(device_notification_models_1.PushNotificationSuccess, [], Object.assign({}, { "message": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["message"], null), (_runtime_1.py.str(root_field) + ".message")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "DatabaseError")))) {
        return _runtime_1.py.call(device_notification_models_1.PushNotificationDatabaseError, [], Object.assign({}, { "error_message": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["errorMessage"], null), (_runtime_1.py.str(root_field) + ".errorMessage")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "TokenError")))) {
        return _runtime_1.py.call(device_notification_models_1.PushNotificationTokenError, [], Object.assign({}, { "error_message": _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(result, "get"), ["errorMessage"], null), (_runtime_1.py.str(root_field) + ".errorMessage")], null) }));
    }
    throw _runtime_1.py.call(exceptions_1.ResponseError, [("Unsupported " + _runtime_1.py.str(root_field) + " type: " + _runtime_1.py.str(typename))], null);
}
/** Translated upstream _vehicle. */
function _vehicle(...__args) {
    let vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, "vehicle")))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, ["vehicle is missing"], null);
    }
    vehicle = _runtime_1.py.call(_optional_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
    if (_runtime_1.py.truth(((vehicle !== null)))) {
        _runtime_1.py.call(_string, [_runtime_1.py.call(_runtime_1.py.attr(vehicle, "get"), ["__typename"], null), "vehicle.__typename"], null);
    }
    return vehicle;
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
/** Translated upstream _nullable_datetime. */
function _nullable_datetime(...__args) {
    let normalized, raw_value, result;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    raw_value = _runtime_1.py.call(_string, [value, path], null);
    normalized = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(raw_value, "endswith"), ["Z"], null)) ? (_runtime_1.py.str(_runtime_1.py.slice(raw_value, null, -(1), null)) + "+00:00") : raw_value);
    try {
        result = _runtime_1.py.call(_runtime_1.py.attr(datetime, "fromisoformat"), [normalized], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            let error = __error;
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time")], null);
        }
        else {
            throw __error;
        }
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((_runtime_1.py.attr(result, "tzinfo") === null)), () => ((_runtime_1.py.call(_runtime_1.py.attr(result, "utcoffset"), [], null) === null))))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time with an offset")], null);
    }
    return result;
}
//# sourceMappingURL=device_notification_parsing.js.map