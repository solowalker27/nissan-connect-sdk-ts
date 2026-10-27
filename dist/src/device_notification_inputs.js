"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileInfoInput = exports.MobileInput = exports.MYNISSAN_ANDROID_APP_NAME = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.DeviceOS = void 0;
exports.device_os_input = device_os_input;
exports.current_device_type_input = current_device_type_input;
exports.mobile_input = mobile_input;
exports.mobile_info_input = mobile_info_input;
exports.register_push_notifications_variables = register_push_notifications_variables;
exports.unregister_push_notifications_variables = unregister_push_notifications_variables;
exports.register_device_for_push_notifications_variables = register_device_for_push_notifications_variables;
exports.unregister_device_for_push_notifications_variables = unregister_device_for_push_notifications_variables;
exports.in_vehicle_messages_variables = in_vehicle_messages_variables;
exports.in_vehicle_message_variables = in_vehicle_message_variables;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const Final = _runtime_1.py.Final;
const device_notification_models_1 = require("./device_notification_models");
Object.defineProperty(exports, "DeviceOS", { enumerable: true, get: function () { return device_notification_models_1.DeviceOS; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
exports.MYNISSAN_ANDROID_APP_NAME = "mynissan-android";
/** One mobile device registered to receive Nissan push notifications. */
class MobileInput {
    device_id;
    device_os;
    app_name;
    token;
    static __fields = [["device_id", _runtime_1.py.MISSING], ["device_os", _runtime_1.py.MISSING], ["app_name", _runtime_1.py.MISSING], ["token", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MobileInput, __args); Object.freeze(this); }
}
exports.MobileInput = MobileInput;
_runtime_1.py.classType(MobileInput);
/** Top-level device input accepted by Nissan's current push API. */
class MobileInfoInput {
    mobile;
    static __fields = [["mobile", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MobileInfoInput, __args); Object.freeze(this); }
}
exports.MobileInfoInput = MobileInfoInput;
_runtime_1.py.classType(MobileInfoInput);
/** Serialize a schema-valid mobile operating system. */
function device_os_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize a schema-valid mobile operating system. */
    return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
}
/** Map the schema enum to the title-cased string used by the current API. */
function current_device_type_input(...__args) {
    let raw_value;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Map the schema enum to the title-cased string used by the current API. */
    raw_value = _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
    return _runtime_1.py.get(Object.assign({}, { ["ANDROID"]: "Android" }, { ["IOS"]: "Ios" }), raw_value);
}
/** Serialize one mobile device using Nissan's GraphQL field names. */
function mobile_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize one mobile device using Nissan's GraphQL field names. */
    return Object.assign({}, { ["deviceId"]: _runtime_1.py.attr(value, "device_id") }, { ["deviceType"]: _runtime_1.py.call(current_device_type_input, [_runtime_1.py.attr(value, "device_os")], null) }, { ["appName"]: _runtime_1.py.attr(value, "app_name") }, { ["token"]: _runtime_1.py.attr(value, "token") });
}
/** Serialize the wrapper required by device push registration. */
function mobile_info_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize the wrapper required by device push registration. */
    return Object.assign({}, { ["mobile"]: _runtime_1.py.call(mobile_input, [_runtime_1.py.attr(value, "mobile")], null) });
}
/** Build variables for the legacy push registration mutation. */
function register_push_notifications_variables(...__args) {
    let { "device_id": device_id, "token": token, "device_os": device_os } = _runtime_1.py.bind(__args, ["device_id", "token", "device_os"], {}, [], null, null);
    /** Build variables for the legacy push registration mutation. */
    return Object.assign({}, { ["deviceId"]: device_id }, { ["token"]: token }, { ["deviceOS"]: _runtime_1.py.call(device_os_input, [device_os], null) });
}
/** Build variables for the legacy push unregistration mutation. */
function unregister_push_notifications_variables(...__args) {
    let { "device_id": device_id, "device_os": device_os } = _runtime_1.py.bind(__args, ["device_id", "device_os"], {}, [], null, null);
    /** Build variables for the legacy push unregistration mutation. */
    return Object.assign({}, { ["deviceId"]: device_id }, { ["deviceOS"]: _runtime_1.py.call(device_os_input, [device_os], null) });
}
/** Build variables for the current device push registration mutation. */
function register_device_for_push_notifications_variables(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Build variables for the current device push registration mutation. */
    return Object.assign({}, { ["mobileInfoInput"]: _runtime_1.py.call(mobile_info_input, [value], null) });
}
/** Build variables for the current device push unregistration mutation. */
function unregister_device_for_push_notifications_variables(...__args) {
    let { "app_name": app_name, "device_id": device_id, "device_os": device_os } = _runtime_1.py.bind(__args, ["app_name", "device_id", "device_os"], {}, [], null, null);
    /** Build variables for the current device push unregistration mutation. */
    return Object.assign({}, { ["appName"]: app_name }, { ["deviceId"]: device_id }, { ["deviceType"]: _runtime_1.py.call(current_device_type_input, [device_os], null) });
}
/** Build variables for the in-vehicle message list query. */
function in_vehicle_messages_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Build variables for the in-vehicle message list query. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Build detail-query variables while preserving omitted and null push values. */
function in_vehicle_message_variables(...__args) {
    let { "vin": vin, "campaign_id": campaign_id, "push": push } = _runtime_1.py.bind(__args, ["vin", "campaign_id", "push"], { "push": graphql_input_1.UNSET }, [], null, null);
    /** Build detail-query variables while preserving omitted and null push values. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "campaignId": campaign_id }, { "push": push }));
}
//# sourceMappingURL=device_notification_inputs.js.map