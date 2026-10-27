"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPreferenceInput = exports.NotificationTypeInput = exports.NotificationDestination = exports.NotificationCategory = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = void 0;
exports.notification_type_input = notification_type_input;
exports.notification_preference_input = notification_preference_input;
exports.notification_preferences_input = notification_preferences_input;
exports.notification_category_input = notification_category_input;
exports.notification_destination_input = notification_destination_input;
exports.update_nissan_energy_notification_preferences_variables = update_nissan_energy_notification_preferences_variables;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const notification_models_1 = require("./notification_models");
Object.defineProperty(exports, "NotificationCategory", { enumerable: true, get: function () { return notification_models_1.NotificationCategory; } });
Object.defineProperty(exports, "NotificationDestination", { enumerable: true, get: function () { return notification_models_1.NotificationDestination; } });
/** Required opt-in value for one notification delivery channel. */
class NotificationTypeInput {
    destination;
    opt_in;
    static __fields = [["destination", _runtime_1.py.MISSING], ["opt_in", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NotificationTypeInput, __args); Object.freeze(this); }
}
exports.NotificationTypeInput = NotificationTypeInput;
_runtime_1.py.classType(NotificationTypeInput);
/** Required notification category and its channel preferences. */
class NotificationPreferenceInput {
    notification_category;
    notification_type;
    static __fields = [["notification_category", _runtime_1.py.MISSING], ["notification_type", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, NotificationPreferenceInput, __args); Object.freeze(this); }
}
exports.NotificationPreferenceInput = NotificationPreferenceInput;
_runtime_1.py.classType(NotificationPreferenceInput);
/** Serialize one notification-channel preference. */
function notification_type_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize one notification-channel preference. */
    return Object.assign({}, { ["destination"]: _runtime_1.py.call(notification_destination_input, [_runtime_1.py.attr(value, "destination")], null) }, { ["optIn"]: _runtime_1.py.attr(value, "opt_in") });
}
/** Serialize one notification-category preference. */
function notification_preference_input(...__args) {
    let item;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize one notification-category preference. */
    return Object.assign({}, { ["notificationCategory"]: _runtime_1.py.call(notification_category_input, [_runtime_1.py.attr(value, "notification_category")], null) }, { ["notificationType"]: (() => { const __out = []; for (const item of _runtime_1.py.iterable(_runtime_1.py.attr(value, "notification_type"))) {
            __out.push((_runtime_1.py.truth(((item !== null))) ? _runtime_1.py.call(notification_type_input, [item], null) : null));
        } return __out; })() });
}
/** Serialize the non-null preferences list accepted by Nissan. */
function notification_preferences_input(...__args) {
    let value;
    let { "values": values } = _runtime_1.py.bind(__args, ["values"], {}, [], null, null);
    /** Serialize the non-null preferences list accepted by Nissan. */
    return (() => { const __out = []; for (const value of _runtime_1.py.iterable(values)) {
        __out.push((_runtime_1.py.truth(((value !== null))) ? _runtime_1.py.call(notification_preference_input, [value], null) : null));
    } return __out; })();
}
/** Serialize a schema-valid notification category. */
function notification_category_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize a schema-valid notification category. */
    return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
}
/** Serialize a schema-valid notification destination. */
function notification_destination_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize a schema-valid notification destination. */
    return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
}
/** Build the Nissan Energy patch while preserving omitted and null values. */
function update_nissan_energy_notification_preferences_variables(...__args) {
    let { "vin": vin, "email_status": email_status, "push_status": push_status, "sms_status": sms_status } = _runtime_1.py.bind(__args, ["vin"], { "email_status": graphql_input_1.UNSET, "push_status": graphql_input_1.UNSET, "sms_status": graphql_input_1.UNSET }, ["email_status", "push_status", "sms_status"], null, null);
    /** Build the Nissan Energy patch while preserving omitted and null values. */
    return Object.assign({}, { ["config"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "emailStatus": email_status }, { "pushStatus": push_status }, { "smsStatus": sms_status })) });
}
//# sourceMappingURL=notification_inputs.js.map