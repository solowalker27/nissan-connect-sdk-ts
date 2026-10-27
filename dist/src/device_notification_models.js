"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationTokenError = exports.PushNotificationDatabaseError = exports.PushNotificationSuccess = exports.InVehicleMessage = exports.InVehicleMessageSummary = exports.DeviceOS = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
exports.DeviceOS = _runtime_1.py.enumType("DeviceOS", { "IOS": "IOS", "ANDROID": "ANDROID", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Nullable summary fields returned for one in-vehicle message. */
class InVehicleMessageSummary {
    campaign_id;
    created_date_time;
    title;
    viewed;
    static __fields = [["campaign_id", _runtime_1.py.MISSING], ["created_date_time", _runtime_1.py.MISSING], ["title", _runtime_1.py.MISSING], ["viewed", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, InVehicleMessageSummary, __args); Object.freeze(this); }
}
exports.InVehicleMessageSummary = InVehicleMessageSummary;
_runtime_1.py.classType(InVehicleMessageSummary);
/** Nullable detail fields returned for one in-vehicle message. */
class InVehicleMessage {
    title;
    campaign_id;
    viewed;
    text;
    expire_date;
    static __fields = [["title", _runtime_1.py.MISSING], ["campaign_id", _runtime_1.py.MISSING], ["viewed", _runtime_1.py.MISSING], ["text", _runtime_1.py.MISSING], ["expire_date", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, InVehicleMessage, __args); Object.freeze(this); }
}
exports.InVehicleMessage = InVehicleMessage;
_runtime_1.py.classType(InVehicleMessage);
/** Successful result from the current device push API. */
class PushNotificationSuccess {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PushNotificationSuccess, __args); Object.freeze(this); }
}
exports.PushNotificationSuccess = PushNotificationSuccess;
_runtime_1.py.classType(PushNotificationSuccess);
/** Database failure returned by the current device push API. */
class PushNotificationDatabaseError {
    error_message;
    static __fields = [["error_message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PushNotificationDatabaseError, __args); Object.freeze(this); }
}
exports.PushNotificationDatabaseError = PushNotificationDatabaseError;
_runtime_1.py.classType(PushNotificationDatabaseError);
/** Push-token failure returned by the current device push API. */
class PushNotificationTokenError {
    error_message;
    static __fields = [["error_message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PushNotificationTokenError, __args); Object.freeze(this); }
}
exports.PushNotificationTokenError = PushNotificationTokenError;
_runtime_1.py.classType(PushNotificationTokenError);
//# sourceMappingURL=device_notification_models.js.map