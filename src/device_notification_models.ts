// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

export const DeviceOS = $.enumType("DeviceOS", {"IOS": "IOS", "ANDROID": "ANDROID", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type DeviceOS = ReturnType<typeof DeviceOS>;

/** Nullable summary fields returned for one in-vehicle message. */
export class InVehicleMessageSummary {
readonly campaign_id: string | null;
readonly created_date_time: $.DateValue | null;
readonly title: string | null;
readonly viewed: boolean | null;
static __fields = [["campaign_id", $.MISSING], ["created_date_time", $.MISSING], ["title", $.MISSING], ["viewed", $.MISSING]];
constructor(campaign_id: string | null, created_date_time: $.DateValue | null, title: string | null, viewed: boolean | null);
constructor(options: { campaign_id: string | null; created_date_time: $.DateValue | null; title: string | null; viewed: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, InVehicleMessageSummary, __args);  Object.freeze(this); }
}
$.classType(InVehicleMessageSummary);

/** Nullable detail fields returned for one in-vehicle message. */
export class InVehicleMessage {
readonly title: string | null;
readonly campaign_id: string | null;
readonly viewed: boolean | null;
readonly text: string | null;
readonly expire_date: $.DateValue | null;
static __fields = [["title", $.MISSING], ["campaign_id", $.MISSING], ["viewed", $.MISSING], ["text", $.MISSING], ["expire_date", $.MISSING]];
constructor(title: string | null, campaign_id: string | null, viewed: boolean | null, text: string | null, expire_date: $.DateValue | null);
constructor(options: { title: string | null; campaign_id: string | null; viewed: boolean | null; text: string | null; expire_date: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, InVehicleMessage, __args);  Object.freeze(this); }
}
$.classType(InVehicleMessage);

/** Successful result from the current device push API. */
export class PushNotificationSuccess {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PushNotificationSuccess, __args);  Object.freeze(this); }
}
$.classType(PushNotificationSuccess);

/** Database failure returned by the current device push API. */
export class PushNotificationDatabaseError {
readonly error_message: string;
static __fields = [["error_message", $.MISSING]];
constructor(error_message: string);
constructor(options: { error_message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PushNotificationDatabaseError, __args);  Object.freeze(this); }
}
$.classType(PushNotificationDatabaseError);

/** Push-token failure returned by the current device push API. */
export class PushNotificationTokenError {
readonly error_message: string;
static __fields = [["error_message", $.MISSING]];
constructor(error_message: string);
constructor(options: { error_message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PushNotificationTokenError, __args);  Object.freeze(this); }
}
$.classType(PushNotificationTokenError);

export type PushNotificationResult = PushNotificationSuccess | PushNotificationDatabaseError | PushNotificationTokenError;
