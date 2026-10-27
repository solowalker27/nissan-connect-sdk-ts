// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const re = $.re;

const Mapping = $.Mapping;

const UTC = $.UTC;
const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { MYNISSAN_ANDROID_APP_NAME, UNSET, DeviceOS, InVehicleMessage, InVehicleMessageSummary, MobileInfoInput, MobileInput, NissanClient, PushNotificationDatabaseError, PushNotificationSuccess, PushNotificationTokenError, ReadOnlyError, ResponseError, Tokens } from "../src/index";

/** Translated upstream FakeResponse. */
export class FakeResponse {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
let {"payload": payload} = $.bind(__args, ["payload"], {}, [], null, null);
this["status"] = 200;
this["_payload"] = payload;
}
/** Translated upstream __aenter__. */
async __aenter__(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return this;
}
/** Translated upstream __aexit__. */
async __aexit__(...__args: any[]): any {
let {"args": args} = $.bind(__args, [], {}, [], "args", null);
return null;
}
/** Translated upstream json. */
async json(...__args: any[]): any {
let {"content_type": content_type} = $.bind(__args, [], {"content_type": null}, ["content_type"], null, null);
return $.attr(this, "_payload");
}
}
$.classType(FakeResponse);

/** Translated upstream FakeSession. */
export class FakeSession {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
let {"responses": responses} = $.bind(__args, [], {}, [], "responses", null);
this["responses"] = $.call($.list, [responses], null);
this["calls"] = [];
}
/** Translated upstream post. */
post(...__args: any[]): any {
let {"url": url, "kwargs": kwargs} = $.bind(__args, ["url"], {}, [], null, "kwargs");
$.call($.attr($.attr(this, "calls"), "append"), [Object.assign({}, {["url"]: url}, kwargs)], null);
if ($.truth(!$.truth($.attr(this, "responses")))) {
throw $.call($.AssertionError, ["Unexpected HTTP request"], null);
}
return $.call($.attr($.attr(this, "responses"), "pop"), [0], null);
}
}
$.classType(FakeSession);

export let TOKENS = $.call(Tokens, ["access-token", "refresh-token", "id-token"], null);

export let MOBILE_INFO = $.call(MobileInfoInput, [$.call(MobileInput, [], Object.assign({}, {"device_id": "device-id"}, {"device_os": $.attr(DeviceOS, "ANDROID")}, {"app_name": MYNISSAN_ANDROID_APP_NAME}, {"token": "push-token"}))], null);

export let EXPECTED_QUERY_TOKEN_HASHES = Object.assign({}, {["RegisterPushNotifications"]: "118a49693d702b093b1f92efb311cd2ecb42c8697a9ff4cb531316d435447642"}, {["UnregisterPushNotifications"]: "367c95b02f2fd00560fc8f1c8d03d16934b8866a2e2451caf5e587deb5d25d30"}, {["RegisterDeviceForPushNotifications"]: "d356471fbe210816e27877f5985be89b3cdd64921a73251ea6d1712f5973150e"}, {["UnregisterDeviceForPushNotifications"]: "56021d08614d36b731ef64c70791326b275103eb6b34bcf45ff46719784e8d06"}, {["InVehicleMessages"]: "7a7ef1869e65662f33a1c19c74e0294faf8d2d39e6ef8dd5a08563e3493bea49"}, {["InVehicleMessage"]: "65fef6d6be6121fd4fc8805b5938703c70a8087e8fd0a701f12d9bf75ffc909c"});

/** Translated upstream graphql_response. */
export function graphql_response(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
return $.call(FakeResponse, [Object.assign({}, {["data"]: $.call($.dict, [data], null)})], null);
}

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {"read_only": true}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"read_only": read_only}, {"tokens": TOKENS}));
}

/** Translated upstream assert_graphql_call. */
export function assert_graphql_call(...__args: any[]): any {
let document, payload, tokens;
let {"session": session, "index": index, "operation_name": operation_name, "variables": variables} = $.bind(__args, ["session", "index", "operation_name", "variables"], {}, [], null, null);
payload = $.call($.attr($.get($.attr(session, "calls"), index), "get"), ["json"], null);
$.assert($.call($.isinstance, [payload, Mapping], null), "test_device_notifications.py:101: isinstance(payload, Mapping)");
$.assert(($.eq($.get(payload, "operationName"), operation_name)), "test_device_notifications.py:102: payload['operationName'] == operation_name");
$.assert(($.eq($.get(payload, "variables"), variables)), "test_device_notifications.py:103: payload['variables'] == variables");
document = $.get(payload, "query");
$.assert($.call($.isinstance, [document, $.str], null), "test_device_notifications.py:105: isinstance(document, str)");
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), $.get(EXPECTED_QUERY_TOKEN_HASHES, operation_name))), "test_device_notifications.py:107: hashlib.sha256(tokens.encode()).hexdigest() == EXPECTED_QUERY_TOKEN_HASHES[operation_name]");
}

/** Translated upstream test_legacy_push_mutations_use_exact_contracts_and_nullable_results. */
export async function test_legacy_push_mutations_use_exact_contracts_and_nullable_results(...__args: any[]): any {
let client, register_variables, session, unregister_variables;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["registerNotifications"]: true})], null), $.call(graphql_response, [Object.assign({}, {["registerNotifications"]: null})], null), $.call(graphql_response, [Object.assign({}, {["unregisterNotifications"]: false})], null), $.call(graphql_response, [Object.assign({}, {["unregisterNotifications"]: null})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
$.assert((((await $.call($.attr(client, "async_register_push_notifications"), ["device-id", "push-token", $.attr(DeviceOS, "ANDROID")], null)) === true)), "test_device_notifications.py:121: await client.async_register_push_notifications('device-id', 'push-token', DeviceOS.ANDROID) is True");
$.assert((((await $.call($.attr(client, "async_register_push_notifications"), ["device-id", "push-token", $.attr(DeviceOS, "ANDROID")], null)) === null)), "test_device_notifications.py:129: await client.async_register_push_notifications('device-id', 'push-token', DeviceOS.ANDROID) is None");
$.assert((((await $.call($.attr(client, "async_unregister_push_notifications"), ["device-id", $.attr(DeviceOS, "IOS")], null)) === false)), "test_device_notifications.py:137: await client.async_unregister_push_notifications('device-id', DeviceOS.IOS) is False");
$.assert((((await $.call($.attr(client, "async_unregister_push_notifications"), ["device-id", $.attr(DeviceOS, "IOS")], null)) === null)), "test_device_notifications.py:138: await client.async_unregister_push_notifications('device-id', DeviceOS.IOS) is None");
register_variables = Object.assign({}, {["deviceId"]: "device-id"}, {["token"]: "push-token"}, {["deviceOS"]: "ANDROID"});
unregister_variables = Object.assign({}, {["deviceId"]: "device-id"}, {["deviceOS"]: "IOS"});
$.call(assert_graphql_call, [session, 0, "RegisterPushNotifications", register_variables], null);
$.call(assert_graphql_call, [session, 1, "RegisterPushNotifications", register_variables], null);
$.call(assert_graphql_call, [session, 2, "UnregisterPushNotifications", unregister_variables], null);
$.call(assert_graphql_call, [session, 3, "UnregisterPushNotifications", unregister_variables], null);
}

/** Translated upstream test_register_device_push_parses_every_union_type_and_nullable_result. */
export async function test_register_device_push_parses_every_union_type_and_nullable_result(...__args: any[]): any {
let client, index, root_field, session, variables;
let {} = $.bind(__args, [], {}, [], null, null);
root_field = "registerDeviceForPushNotifications";
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "GeneralMessage"}, {["message"]: "registered"})})], null), $.call(graphql_response, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "DatabaseError"}, {["errorMessage"]: "database"})})], null), $.call(graphql_response, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "TokenError"}, {["errorMessage"]: "token"})})], null), $.call(graphql_response, [Object.assign({}, {[root_field]: null})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
$.assert(($.eq((await $.call($.attr(client, "async_register_device_for_push_notifications"), [MOBILE_INFO], null)), $.call(PushNotificationSuccess, ["registered"], null))), "test_device_notifications.py:162: await client.async_register_device_for_push_notifications(MOBILE_INFO) == PushNotificationSuccess('registered')");
$.assert(($.eq((await $.call($.attr(client, "async_register_device_for_push_notifications"), [MOBILE_INFO], null)), $.call(PushNotificationDatabaseError, ["database"], null))), "test_device_notifications.py:165: await client.async_register_device_for_push_notifications(MOBILE_INFO) == PushNotificationDatabaseError('database')");
$.assert(($.eq((await $.call($.attr(client, "async_register_device_for_push_notifications"), [MOBILE_INFO], null)), $.call(PushNotificationTokenError, ["token"], null))), "test_device_notifications.py:168: await client.async_register_device_for_push_notifications(MOBILE_INFO) == PushNotificationTokenError('token')");
$.assert((((await $.call($.attr(client, "async_register_device_for_push_notifications"), [MOBILE_INFO], null)) === null)), "test_device_notifications.py:171: await client.async_register_device_for_push_notifications(MOBILE_INFO) is None");
variables = Object.assign({}, {["mobileInfoInput"]: Object.assign({}, {["mobile"]: Object.assign({}, {["deviceId"]: "device-id"}, {["deviceType"]: "Android"}, {["appName"]: "mynissan-android"}, {["token"]: "push-token"})})});
for (index of $.iterable($.call($.range, [4], null))) {
$.call(assert_graphql_call, [session, index, "RegisterDeviceForPushNotifications", variables], null);
}
}

/** Translated upstream test_unregister_device_push_parses_every_union_type_and_nullable_result. */
export async function test_unregister_device_push_parses_every_union_type_and_nullable_result(...__args: any[]): any {
let client, index, root_field, session, variables;
let {} = $.bind(__args, [], {}, [], null, null);
root_field = "unregisterDeviceForPushNotifications";
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "GeneralMessage"}, {["message"]: "unregistered"})})], null), $.call(graphql_response, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "DatabaseError"}, {["errorMessage"]: "database"})})], null), $.call(graphql_response, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "TokenError"}, {["errorMessage"]: "token"})})], null), $.call(graphql_response, [Object.assign({}, {[root_field]: null})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
$.assert(($.eq((await $.call($.attr(client, "async_unregister_device_for_push_notifications"), [MYNISSAN_ANDROID_APP_NAME, "device-id", $.attr(DeviceOS, "ANDROID")], null)), $.call(PushNotificationSuccess, ["unregistered"], null))), "test_device_notifications.py:202: await client.async_unregister_device_for_push_notifications(MYNISSAN_ANDROID_APP_NAME, 'device-id', DeviceOS.ANDROID) == PushNotificationSuccess('unregistered')");
$.assert(($.eq((await $.call($.attr(client, "async_unregister_device_for_push_notifications"), [MYNISSAN_ANDROID_APP_NAME, "device-id", $.attr(DeviceOS, "ANDROID")], null)), $.call(PushNotificationDatabaseError, ["database"], null))), "test_device_notifications.py:207: await client.async_unregister_device_for_push_notifications(MYNISSAN_ANDROID_APP_NAME, 'device-id', DeviceOS.ANDROID) == PushNotificationDatabaseError('database')");
$.assert(($.eq((await $.call($.attr(client, "async_unregister_device_for_push_notifications"), [MYNISSAN_ANDROID_APP_NAME, "device-id", $.attr(DeviceOS, "ANDROID")], null)), $.call(PushNotificationTokenError, ["token"], null))), "test_device_notifications.py:212: await client.async_unregister_device_for_push_notifications(MYNISSAN_ANDROID_APP_NAME, 'device-id', DeviceOS.ANDROID) == PushNotificationTokenError('token')");
$.assert((((await $.call($.attr(client, "async_unregister_device_for_push_notifications"), [MYNISSAN_ANDROID_APP_NAME, "device-id", $.attr(DeviceOS, "ANDROID")], null)) === null)), "test_device_notifications.py:217: await client.async_unregister_device_for_push_notifications(MYNISSAN_ANDROID_APP_NAME, 'device-id', DeviceOS.ANDROID) is None");
variables = Object.assign({}, {["appName"]: "mynissan-android"}, {["deviceId"]: "device-id"}, {["deviceType"]: "Android"});
for (index of $.iterable($.call($.range, [4], null))) {
$.call(assert_graphql_call, [session, index, "UnregisterDeviceForPushNotifications", variables], null);
}
}

/** Translated upstream test_current_push_api_maps_ios_to_the_service_device_type_string. */
export async function test_current_push_api_maps_ios_to_the_service_device_type_string(...__args: any[]): any {
let client, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["unregisterDeviceForPushNotifications"]: Object.assign({}, {["__typename"]: "GeneralMessage"}, {["message"]: "unregistered"})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
result = (await $.call($.attr(client, "async_unregister_device_for_push_notifications"), [MYNISSAN_ANDROID_APP_NAME, "device-id", $.attr(DeviceOS, "IOS")], null));
$.assert(($.eq(result, $.call(PushNotificationSuccess, ["unregistered"], null))), "test_device_notifications.py:259: result == PushNotificationSuccess('unregistered')");
$.call(assert_graphql_call, [session, 0, "UnregisterDeviceForPushNotifications", Object.assign({}, {["appName"]: "mynissan-android"}, {["deviceId"]: "device-id"}, {["deviceType"]: "Ios"})], null);
}

/** Translated upstream test_device_push_rejects_unknown_union_typenames. */
export async function test_device_push_rejects_unknown_union_typenames(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["registerDeviceForPushNotifications"]: Object.assign({}, {["__typename"]: "UnexpectedPushResult"})})], null), $.call(graphql_response, [Object.assign({}, {["unregisterDeviceForPushNotifications"]: Object.assign({}, {["__typename"]: "UnexpectedPushResult"})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
await $.raises(ResponseError, "Unsupported registerDeviceForPush", async () => {
(await $.call($.attr(client, "async_register_device_for_push_notifications"), [MOBILE_INFO], null));
});
await $.raises(ResponseError, "Unsupported unregisterDeviceForPush", async () => {
(await $.call($.attr(client, "async_unregister_device_for_push_notifications"), [MYNISSAN_ANDROID_APP_NAME, "device-id", $.attr(DeviceOS, "ANDROID")], null));
});
}

/** Translated upstream test_in_vehicle_messages_preserve_nullable_list_items_fields_and_dates. */
export async function test_in_vehicle_messages_preserve_nullable_list_items_fields_and_dates(...__args: any[]): any {
let client, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"}, {["inVehicleMessages"]: [null, Object.assign({}, {["__typename"]: "InVehicleMessage"}, {["campaignId"]: null}, {["createdDateTime"]: null}, {["title"]: null}, {["viewed"]: null}), Object.assign({}, {["__typename"]: "InVehicleMessage"}, {["campaignId"]: "campaign-id"}, {["createdDateTime"]: "2026-07-31T10:20:30Z"}, {["title"]: "Service notice"}, {["viewed"]: false})]})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_get_in_vehicle_messages"), ["VIN"], null));
$.assert(($.eq(result, [null, $.call(InVehicleMessageSummary, [null, null, null, null], null), $.call(InVehicleMessageSummary, ["campaign-id", $.call(datetime, [2026, 7, 31, 10, 20, 30], Object.assign({}, {"tzinfo": UTC})), "Service notice", false], null)])), "test_device_notifications.py:324: result == (None, InVehicleMessageSummary(None, None, None, None), InVehicleMessageSummary('campaign-id', datetime(2026, 7, 31, 10, 20, 30, tzinfo=UTC), 'Service notice', False))");
$.call(assert_graphql_call, [session, 0, "InVehicleMessages", Object.assign({}, {["vin"]: "VIN"})], null);
}

/** Translated upstream test_in_vehicle_message_preserves_unset_null_and_boolean_push_values. */
export async function test_in_vehicle_message_preserves_unset_null_and_boolean_push_values(...__args: any[]): any {
let base_variables, client, detail, session;
let {} = $.bind(__args, [], {}, [], null, null);
detail = Object.assign({}, {["__typename"]: "InVehicleMessage"}, {["title"]: "Campaign"}, {["campaignId"]: "campaign-id"}, {["viewed"]: null}, {["text"]: null}, {["expireDate"]: "2026-08-01T12:30:00-07:00"});
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"}, {["inVehicleMessage"]: detail})})], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: null})], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: null})], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: null})], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: null})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
$.assert(($.eq((await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], null)), $.call(InVehicleMessage, [], Object.assign({}, {"title": "Campaign"}, {"campaign_id": "campaign-id"}, {"viewed": null}, {"text": null}, {"expire_date": $.call($.attr(datetime, "fromisoformat"), ["2026-08-01T12:30:00-07:00"], null)})))), "test_device_notifications.py:362: await client.async_get_in_vehicle_message('VIN', 'campaign-id') == InVehicleMessage(title='Campaign', campaign_id='campaign-id', viewed=None, text=None, expire_date=datetime.fromisoformat('2026-08-01T12:30:00-07:00'))");
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], Object.assign({}, {"push": UNSET}))) === null)), "test_device_notifications.py:369: await client.async_get_in_vehicle_message('VIN', 'campaign-id', push=UNSET) is None");
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], Object.assign({}, {"push": null}))) === null)), "test_device_notifications.py:370: await client.async_get_in_vehicle_message('VIN', 'campaign-id', push=None) is None");
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], Object.assign({}, {"push": false}))) === null)), "test_device_notifications.py:371: await client.async_get_in_vehicle_message('VIN', 'campaign-id', push=False) is None");
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], Object.assign({}, {"push": true}))) === null)), "test_device_notifications.py:372: await client.async_get_in_vehicle_message('VIN', 'campaign-id', push=True) is None");
base_variables = Object.assign({}, {["vin"]: "VIN"}, {["campaignId"]: "campaign-id"});
$.call(assert_graphql_call, [session, 0, "InVehicleMessage", Object.assign({}, base_variables, {["push"]: false})], null);
$.call(assert_graphql_call, [session, 1, "InVehicleMessage", base_variables], null);
$.call(assert_graphql_call, [session, 2, "InVehicleMessage", Object.assign({}, base_variables, {["push"]: null})], null);
$.call(assert_graphql_call, [session, 3, "InVehicleMessage", Object.assign({}, base_variables, {["push"]: false})], null);
$.call(assert_graphql_call, [session, 4, "InVehicleMessage", Object.assign({}, base_variables, {["push"]: true})], null);
}

/** Translated upstream test_in_vehicle_messages_handle_missing_and_null_response_chains. */
export async function test_in_vehicle_messages_handle_missing_and_null_response_chains(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [{}], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: null})], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"})})], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"}, {["inVehicleMessages"]: null})})], null)], null);
client = $.call(make_client, [session], null);
await $.raises(ResponseError, "vehicle is missing", async () => {
(await $.call($.attr(client, "async_get_in_vehicle_messages"), ["VIN"], null));
});
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_messages"), ["VIN"], null)) === null)), "test_device_notifications.py:400: await client.async_get_in_vehicle_messages('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_messages"), ["VIN"], null)) === null)), "test_device_notifications.py:401: await client.async_get_in_vehicle_messages('VIN') is None");
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_messages"), ["VIN"], null)) === null)), "test_device_notifications.py:402: await client.async_get_in_vehicle_messages('VIN') is None");
}

/** Translated upstream test_in_vehicle_message_handles_missing_and_null_response_chains. */
export async function test_in_vehicle_message_handles_missing_and_null_response_chains(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [{}], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: null})], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"})})], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"}, {["inVehicleMessage"]: null})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
await $.raises(ResponseError, "vehicle is missing", async () => {
(await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], null));
});
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], null)) === null)), "test_device_notifications.py:423: await client.async_get_in_vehicle_message('VIN', 'campaign-id') is None");
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], null)) === null)), "test_device_notifications.py:424: await client.async_get_in_vehicle_message('VIN', 'campaign-id') is None");
$.assert((((await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], null)) === null)), "test_device_notifications.py:425: await client.async_get_in_vehicle_message('VIN', 'campaign-id') is None");
}

/** Translated upstream test_in_vehicle_message_dates_require_an_explicit_offset. */
export async function test_in_vehicle_message_dates_require_an_explicit_offset(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"}, {["inVehicleMessages"]: [Object.assign({}, {["__typename"]: "InVehicleMessage"}, {["createdDateTime"]: "2026-07-31T10:20:30"})]})})], null), $.call(graphql_response, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "BaseConnectedVehicle"}, {["inVehicleMessage"]: Object.assign({}, {["__typename"]: "InVehicleMessage"}, {["expireDate"]: "2026-08-01T12:30:00"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
await $.raises(ResponseError, "createdDateTime.*with an offset", async () => {
(await $.call($.attr(client, "async_get_in_vehicle_messages"), ["VIN"], null));
});
await $.raises(ResponseError, "expireDate.*with an offset", async () => {
(await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], null));
});
}

/** Translated upstream test_state_changing_notification_operations_respect_read_only_mode. */
export async function test_state_changing_notification_operations_respect_read_only_mode(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_register_push_notifications"), ["device-id", "push-token", $.attr(DeviceOS, "ANDROID")], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_unregister_push_notifications"), ["device-id", $.attr(DeviceOS, "ANDROID")], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_register_device_for_push_notifications"), [MOBILE_INFO], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_unregister_device_for_push_notifications"), [MYNISSAN_ANDROID_APP_NAME, "device-id", $.attr(DeviceOS, "ANDROID")], null));
});
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_get_in_vehicle_message"), ["VIN", "campaign-id"], null));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_device_notifications.py:486: session.calls == []");
}

/** Translated upstream test_unknown_device_os_is_rejected_before_io. */
export async function test_unknown_device_os_is_rejected_before_io(...__args: any[]): any {
let client, session, unknown_mobile_info;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_register_push_notifications"), ["device-id", "push-token", $.attr(DeviceOS, "UNKNOWN_VALUE")], null));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_unregister_push_notifications"), ["device-id", $.attr(DeviceOS, "UNKNOWN_VALUE")], null));
});
unknown_mobile_info = $.call(MobileInfoInput, [$.call(MobileInput, [], Object.assign({}, {"device_id": "device-id"}, {"device_os": $.attr(DeviceOS, "UNKNOWN_VALUE")}, {"app_name": MYNISSAN_ANDROID_APP_NAME}, {"token": "push-token"}))], null);
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_register_device_for_push_notifications"), [unknown_mobile_info], null));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_unregister_device_for_push_notifications"), [MYNISSAN_ANDROID_APP_NAME, "device-id", $.attr(DeviceOS, "UNKNOWN_VALUE")], null));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_device_notifications.py:521: session.calls == []");
}

$.register("test_device_notifications.py::test_legacy_push_mutations_use_exact_contracts_and_nullable_results", test_legacy_push_mutations_use_exact_contracts_and_nullable_results, []);

$.register("test_device_notifications.py::test_register_device_push_parses_every_union_type_and_nullable_result", test_register_device_push_parses_every_union_type_and_nullable_result, []);

$.register("test_device_notifications.py::test_unregister_device_push_parses_every_union_type_and_nullable_result", test_unregister_device_push_parses_every_union_type_and_nullable_result, []);

$.register("test_device_notifications.py::test_current_push_api_maps_ios_to_the_service_device_type_string", test_current_push_api_maps_ios_to_the_service_device_type_string, []);

$.register("test_device_notifications.py::test_device_push_rejects_unknown_union_typenames", test_device_push_rejects_unknown_union_typenames, []);

$.register("test_device_notifications.py::test_in_vehicle_messages_preserve_nullable_list_items_fields_and_dates", test_in_vehicle_messages_preserve_nullable_list_items_fields_and_dates, []);

$.register("test_device_notifications.py::test_in_vehicle_message_preserves_unset_null_and_boolean_push_values", test_in_vehicle_message_preserves_unset_null_and_boolean_push_values, []);

$.register("test_device_notifications.py::test_in_vehicle_messages_handle_missing_and_null_response_chains", test_in_vehicle_messages_handle_missing_and_null_response_chains, []);

$.register("test_device_notifications.py::test_in_vehicle_message_handles_missing_and_null_response_chains", test_in_vehicle_message_handles_missing_and_null_response_chains, []);

$.register("test_device_notifications.py::test_in_vehicle_message_dates_require_an_explicit_offset", test_in_vehicle_message_dates_require_an_explicit_offset, []);

$.register("test_device_notifications.py::test_state_changing_notification_operations_respect_read_only_mode", test_state_changing_notification_operations_respect_read_only_mode, []);

$.register("test_device_notifications.py::test_unknown_device_os_is_rejected_before_io", test_unknown_device_os_is_rejected_before_io, []);
