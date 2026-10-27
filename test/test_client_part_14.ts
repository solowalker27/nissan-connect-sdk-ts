// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { CoordinateInput, DestinationInput, NotificationCategory, NotificationDestination, NotificationPreference, NotificationPreferenceInput, NotificationTypeInput, NotificationTypePreference, OtaBatteryLevel, OtaCampaignDescription, OtaUpdate, OtaUpdateErrorInfo, OtaUpdateProgress, OtaUpdateState, OtaUpdateStatus, PlugConnectorType, PointOfInterestFolder, RouteStatus, ServiceRequest, ServiceRequestKind } from "../src/index";

/** Translated upstream test_navigation_unknown_input_enums_are_rejected_before_network. */
export async function test_navigation_unknown_input_enums_are_rejected_before_network(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_get_vehicle_routes_history"), ["JN1TESTVIN"], Object.assign({}, {"status": $.attr(RouteStatus, "UNKNOWN_VALUE")})));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_get_vehicle_ev_waypoints"), ["JN1TESTVIN", [], [$.attr(PlugConnectorType, "UNKNOWN_VALUE")]], null));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_send_point_of_interest"), ["JN1TESTVIN", $.attr(PointOfInterestFolder, "UNKNOWN_VALUE"), $.call(DestinationInput, ["Home", $.call(CoordinateInput, [32.7, -(117.1)], null)], null)], null));
});
$.assert(($.eq($.attr(session, "calls"), [])), "test_client_part_14.py:61: session.calls == []");
}

/** Translated upstream test_get_ota_update_parses_exact_service_contract. */
export async function test_get_ota_update_parses_exact_service_contract(...__args: any[]): any {
let payload, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["otaUpdate"]: Object.assign({}, {["campaignOperationId"]: "campaign-1"}, {["status"]: Object.assign({}, {["status"]: "READY_FOR_ACTIVATION"}, {["activationTimerValue"]: "2026-08-01T10:00:00Z"}, {["progress"]: 82}, {["countDownTimeStart"]: null}, {["countDownDelay"]: 30})}, {["campaignDescription"]: Object.assign({}, {["globalReleaseNote"]: "Release notes"}, {["downloadDisclaimer"]: null}, {["activationDisclaimer"]: "Park the vehicle"}, {["activationEstimatedTime"]: "20 minutes"})}, {["batteryLevel"]: Object.assign({}, {["activationEnabled"]: true}, {["stateOfCharge"]: 78.5}, {["activationMinimumBatteryLevel"]: 20})}, {["size"]: 1048576}, {["lastChecked"]: "2026-08-01T09:30:00-07:00"}, {["activationTimerValue"]: null})})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_get_ota_update"), ["JN1TESTVIN"], null));
$.assert(($.eq(result, $.call(OtaUpdate, [], Object.assign({}, {"campaign_operation_id": "campaign-1"}, {"status": $.call(OtaUpdateStatus, [], Object.assign({}, {"status": $.attr(OtaUpdateState, "READY_FOR_ACTIVATION")}, {"activation_timer_value": $.call($.attr(datetime, "fromisoformat"), ["2026-08-01T10:00:00+00:00"], null)}, {"progress": 82}, {"count_down_time_start": null}, {"count_down_delay": 30}))}, {"campaign_description": $.call(OtaCampaignDescription, [], Object.assign({}, {"global_release_note": "Release notes"}, {"download_disclaimer": null}, {"activation_disclaimer": "Park the vehicle"}, {"activation_estimated_time": "20 minutes"}))}, {"battery_level": $.call(OtaBatteryLevel, [], Object.assign({}, {"activation_enabled": true}, {"state_of_charge": 78.5}, {"activation_minimum_battery_level": 20.0}))}, {"size": 1048576}, {"last_checked": $.call($.attr(datetime, "fromisoformat"), ["2026-08-01T09:30:00-07:00"], null)}, {"activation_timer_value": null})))), "test_client_part_14.py:104: result == OtaUpdate(campaign_operation_id='campaign-1', status=OtaUpdateStatus(status=OtaUpdateState.READY_FOR_ACTIVATION, activation_timer_value=datetime.fromisoformat('2026-08-01T10:00:00+00:00'), progress=82, count_down_time_start=None, count_down_delay=30), campaign_description=OtaCampaignDescription(global_release_note='Release notes', download_disclaimer=None, activation_disclaimer='Park the vehicle', activation_estimated_time='20 minutes'), battery_level=OtaBatteryLevel(activation_enabled=True, state_of_charge=78.5, activation_minimum_battery_level=20.0), size=1048576, last_checked=datetime.fromisoformat('2026-08-01T09:30:00-07:00'), activation_timer_value=None)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(payload, "operationName"), "OtaUpdate")), "test_client_part_14.py:129: payload['operationName'] == 'OtaUpdate'");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}))), "test_client_part_14.py:130: payload['variables'] == {'vin': 'JN1TESTVIN'}");
}

/** Translated upstream test_ota_reads_preserve_branch_absence_and_unknown_state. */
export async function test_ota_reads_preserve_branch_absence_and_unknown_state(...__args: any[]): any {
let client, payload, progress, session, update;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: {}})})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["otaUpdateProgress"]: Object.assign({}, {["status"]: "FUTURE_STATE"}, {["percentage"]: null}, {["errorInfo"]: [Object.assign({}, {["errorCode"]: "E1"}, {["errorMessage"]: "Retry later"}, {["isRetryable"]: true})]})})})})], null)], null);
client = $.call(make_client, [session], null);
update = (await $.call($.attr(client, "async_get_ota_update"), ["JN1TESTVIN"], null));
progress = (await $.call($.attr(client, "async_get_ota_update_progress"), ["JN1TESTVIN", "campaign-1"], null));
$.assert(((update === null)), "test_client_part_14.py:163: update is None");
$.assert(($.eq(progress, $.call(OtaUpdateProgress, [], Object.assign({}, {"status": $.attr(OtaUpdateState, "UNKNOWN_VALUE")}, {"percentage": null}, {"error_info": [$.call(OtaUpdateErrorInfo, ["E1", "Retry later", true], null)]})))), "test_client_part_14.py:164: progress == OtaUpdateProgress(status=OtaUpdateState.UNKNOWN_VALUE, percentage=None, error_info=(OtaUpdateErrorInfo('E1', 'Retry later', True),))");
payload = $.get($.get($.attr(session, "calls"), 1), "json");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["campaignOperationId"]: "campaign-1"}, {["vin"]: "JN1TESTVIN"}))), "test_client_part_14.py:170: payload['variables'] == {'campaignOperationId': 'campaign-1', 'vin': 'JN1TESTVIN'}");
}

/** Translated upstream test_get_notification_preferences_preserves_nullable_items. */
export async function test_get_notification_preferences_preserves_nullable_items(...__args: any[]): any {
let result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["notificationPreferences"]: [null, Object.assign({}, {["notificationCategory"]: "FUTURE_CATEGORY"}, {["notificationType"]: [null, Object.assign({}, {["destination"]: "FUTURE_DESTINATION"}, {["optIn"]: true})]})]})})})], null)], null);
result = (await $.call($.attr($.call(make_client, [session], null), "async_get_notification_preferences"), ["JN1TESTVIN"], null));
$.assert(($.eq(result, [null, $.call(NotificationPreference, [], Object.assign({}, {"notification_category": $.attr(NotificationCategory, "UNKNOWN_VALUE")}, {"notification_type": [null, $.call(NotificationTypePreference, [$.attr(NotificationDestination, "UNKNOWN_VALUE"), true], null)]}))])), "test_client_part_14.py:205: result == (None, NotificationPreference(notification_category=NotificationCategory.UNKNOWN_VALUE, notification_type=(None, NotificationTypePreference(NotificationDestination.UNKNOWN_VALUE, True))))");
}

/** Translated upstream test_set_notification_preferences_serializes_and_returns_server_state. */
export async function test_set_notification_preferences_serializes_and_returns_server_state(...__args: any[]): any {
let client, payload, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["setNotificationPreferences"]: Object.assign({}, {["notificationPreferences"]: [Object.assign({}, {["notificationCategory"]: "ENGINE"}, {["notificationType"]: [Object.assign({}, {["destination"]: "PUSH"}, {["optIn"]: false})]})]})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
result = (await $.call($.attr(client, "async_set_notification_preferences"), ["JN1TESTVIN", [null, $.call(NotificationPreferenceInput, [$.attr(NotificationCategory, "ENGINE"), [null, $.call(NotificationTypeInput, [$.attr(NotificationDestination, "PUSH"), false], null)]], null)]], null));
$.assert(($.eq(result, [$.call(NotificationPreference, [$.attr(NotificationCategory, "ENGINE"), [$.call(NotificationTypePreference, [$.attr(NotificationDestination, "PUSH"), false], null)]], null)])), "test_client_part_14.py:252: result == (NotificationPreference(NotificationCategory.ENGINE, (NotificationTypePreference(NotificationDestination.PUSH, False),)),)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assert(($.eq($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["preferences"]: [null, Object.assign({}, {["notificationCategory"]: "ENGINE"}, {["notificationType"]: [null, Object.assign({}, {["destination"]: "PUSH"}, {["optIn"]: false})]})]}))), "test_client_part_14.py:259: payload['variables'] == {'vin': 'JN1TESTVIN', 'preferences': [None, {'notificationCategory': 'ENGINE', 'notificationType': [None, {'destination': 'PUSH', 'optIn': False}]}]}");
}

/** Translated upstream test_ota_commands_serialize_inputs_and_return_service_requests. */
export async function test_ota_commands_serialize_inputs_and_return_service_requests(...__args: any[]): any {
let accepted_fields, client, download_payload, field, index, requests, schedule_payload, scheduled_date, session;
let {} = $.bind(__args, [], {}, [], null, null);
accepted_fields = ["downloadOTAUpdate", "activateOTAUpdate", "cancelActivationOTAUpdate", "scheduleActivationOTAUpdate", "updateScheduledActivationOTAUpdate", "cancelScheduledActivationOTAUpdate"];
session = $.call(FakeSession, [...$.iterable((() => { const __out: any = []; for (const [index, field] of $.iterable($.call($.enumerate, [accepted_fields], Object.assign({}, {"start": 1})))) { __out.push($.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {[field]: Object.assign({}, {["serviceRequestId"]: ("request-" + $.str(index))})})})], null)); } return __out; })())], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
scheduled_date = $.call($.attr(datetime, "fromisoformat"), ["2026-08-05T18:00:00-07:00"], null);
requests = [(await $.call($.attr(client, "async_download_ota_update"), ["JN1TESTVIN", "ota-1"], null)), (await $.call($.attr(client, "async_activate_ota_update"), ["JN1TESTVIN", "ota-1"], null)), (await $.call($.attr(client, "async_cancel_ota_activation"), ["JN1TESTVIN", "ota-1"], null)), (await $.call($.attr(client, "async_schedule_ota_activation"), ["JN1TESTVIN", "ota-1", scheduled_date], null)), (await $.call($.attr(client, "async_update_scheduled_ota_activation"), ["JN1TESTVIN", "ota-1", scheduled_date], null)), (await $.call($.attr(client, "async_cancel_scheduled_ota_activation"), ["JN1TESTVIN", "ota-1"], null))];
$.assert(($.eq(requests, $.call($.tuple, [(() => { const __out: any = []; for (const index of $.iterable($.call($.range, [1, 7], null))) { __out.push($.call(ServiceRequest, [("request-" + $.str(index)), $.attr(ServiceRequestKind, "OTA")], null)); } return __out; })()], null))), "test_client_part_14.py:313: requests == tuple((ServiceRequest(f'request-{index}', ServiceRequestKind.OTA) for index in range(1, 7)))");
download_payload = $.get($.get($.attr(session, "calls"), 0), "json");
schedule_payload = $.get($.get($.attr(session, "calls"), 3), "json");
$.assert(($.eq($.get(download_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["input"]: Object.assign({}, {["otaUpdateId"]: "ota-1"})}))), "test_client_part_14.py:318: download_payload['variables'] == {'vin': 'JN1TESTVIN', 'input': {'otaUpdateId': 'ota-1'}}");
$.assert(($.eq($.get(schedule_payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["input"]: Object.assign({}, {["otaUpdateId"]: "ota-1"}, {["scheduledDate"]: "2026-08-05T18:00:00-07:00"})}))), "test_client_part_14.py:322: schedule_payload['variables'] == {'vin': 'JN1TESTVIN', 'input': {'otaUpdateId': 'ota-1', 'scheduledDate': '2026-08-05T18:00:00-07:00'}}");
}

$.register("test_client_part_14.py::test_navigation_unknown_input_enums_are_rejected_before_network", test_navigation_unknown_input_enums_are_rejected_before_network, []);

$.register("test_client_part_14.py::test_get_ota_update_parses_exact_service_contract", test_get_ota_update_parses_exact_service_contract, []);

$.register("test_client_part_14.py::test_ota_reads_preserve_branch_absence_and_unknown_state", test_ota_reads_preserve_branch_absence_and_unknown_state, []);

$.register("test_client_part_14.py::test_get_notification_preferences_preserves_nullable_items", test_get_notification_preferences_preserves_nullable_items, []);

$.register("test_client_part_14.py::test_set_notification_preferences_serializes_and_returns_server_state", test_set_notification_preferences_serializes_and_returns_server_state, []);

$.register("test_client_part_14.py::test_ota_commands_serialize_inputs_and_return_service_requests", test_ota_commands_serialize_inputs_and_return_service_requests, []);
