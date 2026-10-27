"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1GNotificationPreferenceInput = exports.V1GNotificationCategory = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = void 0;
exports.v1g_monitored_charging_account_status_variables = v1g_monitored_charging_account_status_variables;
exports.v1g_tokenized_url_variables = v1g_tokenized_url_variables;
exports.v1g_update_notification_preferences_variables = v1g_update_notification_preferences_variables;
exports.v1g_enroll_monitored_charging_plan_variables = v1g_enroll_monitored_charging_plan_variables;
exports.v1g_cancel_monitored_charging_plan_variables = v1g_cancel_monitored_charging_plan_variables;
exports.v1g_notification_preference_input = v1g_notification_preference_input;
exports._notification_category_input = _notification_category_input;
exports._optional_preferences = _optional_preferences;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
exports.V1GNotificationCategory = _runtime_1.py.enumType("V1GNotificationCategory", { "NEW_PRIME_TIME_HOURS": "New PrimeTime Hours", "PRIME_TIME_UPCOMING_REMINDER": "PrimeTime Upcoming Reminder", "MONTHLY_INSIGHTS": "Monthly Insights", "PRIME_TIME_STATS_UPDATES": "PrimeTime Stats Updates" }, true);
/** One V1G category patch with independently optional channel flags. */
class V1GNotificationPreferenceInput {
    notification_category;
    email_status;
    push_status;
    sms_status;
    static __fields = [["notification_category", _runtime_1.py.MISSING], ["email_status", graphql_input_1.UNSET], ["push_status", graphql_input_1.UNSET], ["sms_status", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, V1GNotificationPreferenceInput, __args); Object.freeze(this); }
}
exports.V1GNotificationPreferenceInput = V1GNotificationPreferenceInput;
_runtime_1.py.classType(V1GNotificationPreferenceInput);
/** Serialize the required VIN for the V1G account-status query. */
function v1g_monitored_charging_account_status_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for the V1G account-status query. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize the required VIN for the V1G tokenized-URL query. */
function v1g_tokenized_url_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required VIN for the V1G tokenized-URL query. */
    return Object.assign({}, { ["vin"]: vin });
}
/** Serialize a V1G preference patch with Apollo omission semantics. */
function v1g_update_notification_preferences_variables(...__args) {
    let { "vin": vin, "preferences": preferences } = _runtime_1.py.bind(__args, ["vin"], { "preferences": graphql_input_1.UNSET }, ["preferences"], null, null);
    /** Serialize a V1G preference patch with Apollo omission semantics. */
    return Object.assign({}, { ["config"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "v1GNotificationPreferences": _runtime_1.py.call(_optional_preferences, [preferences], null) })) });
}
/** Serialize V1G enrollment without supplying an implicit plan. */
function v1g_enroll_monitored_charging_plan_variables(...__args) {
    let { "vin": vin, "model": model, "year": year, "plan": plan } = _runtime_1.py.bind(__args, ["vin", "model", "year"], { "plan": graphql_input_1.UNSET }, ["plan"], null, null);
    /** Serialize V1G enrollment without supplying an implicit plan. */
    return Object.assign({}, { ["config"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "plan": plan }, { "model": model }, { "year": year })) });
}
/** Serialize the required V1G plan-cancellation input. */
function v1g_cancel_monitored_charging_plan_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Serialize the required V1G plan-cancellation input. */
    return Object.assign({}, { ["config"]: Object.assign({}, { ["vin"]: vin }) });
}
/** Serialize one nullable-field V1G notification preference. */
function v1g_notification_preference_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize one nullable-field V1G notification preference. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "v1GNotificationCategory": _runtime_1.py.call(_notification_category_input, [_runtime_1.py.attr(value, "notification_category")], null) }, { "v1GEmailStatus": _runtime_1.py.attr(value, "email_status") }, { "v1GPushStatus": _runtime_1.py.attr(value, "push_status") }, { "v1GSmsStatus": _runtime_1.py.attr(value, "sms_status") }));
}
/** Translated upstream _notification_category_input. */
function _notification_category_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, exports.V1GNotificationCategory], null))) {
        return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
    }
    return value;
}
/** Translated upstream _optional_preferences. */
function _optional_preferences(...__args) {
    let item;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, graphql_input_1.UnsetType], null), () => ((value === null))))) {
        return value;
    }
    return (() => { const __out = []; for (const item of _runtime_1.py.iterable(value)) {
        __out.push((_runtime_1.py.truth(((item !== null))) ? _runtime_1.py.call(v1g_notification_preference_input, [item], null) : null));
    } return __out; })();
}
//# sourceMappingURL=v1g_inputs.js.map