// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

import { FakeResponse, FakeSession, make_client } from "./test_client";

import { ChargeHistoryAggregator, ClimateSettings, GraphQLError, ReadOnlyError, SeatClimateOption, ServiceRequest, ServiceRequestKind, TemperatureUnit, Tokens } from "../src/index";

/** Translated upstream test_get_charge_history_parses_all_service_fields_and_units. */
export async function test_get_charge_history_parses_all_service_fields_and_units(...__args: any[]): any {
let charge, client, history, payload, session, summary;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["chargeHistory"]: Object.assign({}, {["charges"]: [Object.assign({}, {["start"]: "2026-07-01T08:15:00Z"}, {["end"]: "2026-07-01T09:45:00Z"}, {["duration"]: "PT1H30M"}, {["recoveredEnergy"]: 31.25})]}, {["chargeSummaries"]: [Object.assign({}, {["day"]: 1}, {["month"]: 7}, {["year"]: 2026}, {["numberOfChargeSessions"]: 2}, {["totalEnergyRecovered"]: 44.5}, {["totalDuration"]: 135}, {["numberOfErrors"]: 1}, {["userId"]: "driver-1"}, {["roleType"]: "PRIMARY"})]})})})})], null)], null);
client = $.call(make_client, [session], null);
history = (await $.call($.attr(client, "async_get_charge_history"), ["JN1TESTVIN", $.attr(ChargeHistoryAggregator, "DAILY")], null));
$.assert(((history !== null)), "test_client_part_08.py:69: history is not None");
$.assertEqual($.call($.len, [$.attr(history, "charges")], null), 1, "test_client_part_08.py:70: len(history.charges) == 1");
charge = $.get($.attr(history, "charges"), 0);
$.assert((($.attr(charge, "start") !== null)), "test_client_part_08.py:72: charge.start is not None");
$.assertEqual($.call($.attr($.attr(charge, "start"), "isoformat"), [], null), "2026-07-01T08:15:00+00:00", "test_client_part_08.py:73: charge.start.isoformat() == '2026-07-01T08:15:00+00:00'");
$.assert((($.attr(charge, "end") !== null)), "test_client_part_08.py:74: charge.end is not None");
$.assertEqual($.call($.attr($.attr(charge, "end"), "isoformat"), [], null), "2026-07-01T09:45:00+00:00", "test_client_part_08.py:75: charge.end.isoformat() == '2026-07-01T09:45:00+00:00'");
$.assertEqual($.attr(charge, "duration"), "PT1H30M", "test_client_part_08.py:76: charge.duration == 'PT1H30M'");
$.assertEqual($.attr(charge, "recovered_energy_kwh"), 31.25, "test_client_part_08.py:77: charge.recovered_energy_kwh == 31.25");
$.assertEqual($.call($.len, [$.attr(history, "charge_summaries")], null), 1, "test_client_part_08.py:79: len(history.charge_summaries) == 1");
summary = $.get($.attr(history, "charge_summaries"), 0);
$.assertEqual($.attr(summary, "day"), 1, "test_client_part_08.py:81: summary.day == 1");
$.assertEqual($.attr(summary, "month"), 7, "test_client_part_08.py:82: summary.month == 7");
$.assertEqual($.attr(summary, "year"), 2026, "test_client_part_08.py:83: summary.year == 2026");
$.assertEqual($.attr(summary, "number_of_charge_sessions"), 2, "test_client_part_08.py:84: summary.number_of_charge_sessions == 2");
$.assertEqual($.attr(summary, "total_energy_recovered_kwh"), 44.5, "test_client_part_08.py:85: summary.total_energy_recovered_kwh == 44.5");
$.assertEqual($.attr(summary, "total_duration_minutes"), 135, "test_client_part_08.py:86: summary.total_duration_minutes == 135");
$.assertEqual($.attr(summary, "number_of_errors"), 1, "test_client_part_08.py:87: summary.number_of_errors == 1");
$.assertEqual($.attr(summary, "user_id"), "driver-1", "test_client_part_08.py:88: summary.user_id == 'driver-1'");
$.assertEqual($.attr(summary, "role_type"), "PRIMARY", "test_client_part_08.py:89: summary.role_type == 'PRIMARY'");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "VehicleChargeHistory", "test_client_part_08.py:92: payload['operationName'] == 'VehicleChargeHistory'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["aggregator"]: "DAILY"}), "test_client_part_08.py:93: payload['variables'] == {'vin': 'JN1TESTVIN', 'aggregator': 'DAILY'}");
}

/** Translated upstream test_get_climate_schedules_parses_accessories_and_delayed_schedule. */
export async function test_get_climate_schedules_parses_accessories_and_delayed_schedule(...__args: any[]): any {
let client, day, payload, result, schedule, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["climateSchedules"]: [Object.assign({}, {["id"]: "schedule-1"}, {["state"]: "ON"}, {["startDateTime"]: "2026-08-01T07:30:00Z"}, {["weekDays"]: ["MO", "WE"]}, {["temperature"]: Object.assign({}, {["value"]: 21.5}, {["unit"]: "CELSIUS"})})]}, {["climateSchedulesAccessories"]: Object.assign({}, {["defrostAndDeicerState"]: "ON"}, {["steeringWheelHeaterState"]: "OFF"}, {["seatsClimate"]: Object.assign({}, {["frontDriverState"]: "HEAT"}, {["frontPassengerState"]: "OFF"}, {["rearLeftPassengerState"]: "COOL"}, {["rearRightPassengerState"]: null}, {["rearCenterPassengerState"]: null}, {["thirdLeftState"]: null}, {["thirdRightState"]: null})})}, {["delayedClimateSchedule"]: Object.assign({}, {["startDateTime"]: "2026-08-01T08:15:00Z"})})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_get_climate_schedules"), ["JN1TESTVIN"], Object.assign({}, {"temperature_unit": $.attr(TemperatureUnit, "CELSIUS")})));
$.assertEqual($.call($.len, [$.attr(result, "schedules")], null), 1, "test_client_part_08.py:145: len(result.schedules) == 1");
schedule = $.get($.attr(result, "schedules"), 0);
$.assertEqual($.attr(schedule, "id"), "schedule-1", "test_client_part_08.py:147: schedule.id == 'schedule-1'");
$.assertEqual($.attr(schedule, "state"), "ON", "test_client_part_08.py:148: schedule.state == 'ON'");
$.assertEqual($.call($.attr($.attr(schedule, "start_date_time"), "isoformat"), [], null), "2026-08-01T07:30:00+00:00", "test_client_part_08.py:149: schedule.start_date_time.isoformat() == '2026-08-01T07:30:00+00:00'");
$.assertEqual($.call($.tuple, [(() => { const __out: any = []; for (const day of $.iterable($.attr(schedule, "week_days"))) { __out.push($.attr(day, "value")); } return __out; })()], null), ["MO", "WE"], "test_client_part_08.py:150: tuple((day.value for day in schedule.week_days)) == ('MO', 'WE')");
$.assertEqual($.attr($.attr(schedule, "temperature"), "value"), 21.5, "test_client_part_08.py:151: schedule.temperature.value == 21.5");
$.assertEqual($.attr($.attr(schedule, "temperature"), "unit"), "CELSIUS", "test_client_part_08.py:152: schedule.temperature.unit == 'CELSIUS'");
$.assert((($.attr(result, "accessories") !== null)), "test_client_part_08.py:154: result.accessories is not None");
$.assert((($.attr($.attr(result, "accessories"), "defrost_and_deicer") === true)), "test_client_part_08.py:155: result.accessories.defrost_and_deicer is True");
$.assert((($.attr($.attr(result, "accessories"), "steering_wheel_heater") === false)), "test_client_part_08.py:156: result.accessories.steering_wheel_heater is False");
$.assert((($.attr($.attr(result, "accessories"), "seats") !== null)), "test_client_part_08.py:157: result.accessories.seats is not None");
$.assert((($.attr($.attr($.attr(result, "accessories"), "seats"), "front_driver") === $.attr(SeatClimateOption, "HEAT"))), "test_client_part_08.py:158: result.accessories.seats.front_driver is SeatClimateOption.HEAT");
$.assert((($.attr($.attr($.attr(result, "accessories"), "seats"), "front_passenger") === $.attr(SeatClimateOption, "OFF"))), "test_client_part_08.py:159: result.accessories.seats.front_passenger is SeatClimateOption.OFF");
$.assert((($.attr($.attr($.attr(result, "accessories"), "seats"), "rear_left") === $.attr(SeatClimateOption, "COOL"))), "test_client_part_08.py:160: result.accessories.seats.rear_left is SeatClimateOption.COOL");
$.assert((($.attr($.attr($.attr(result, "accessories"), "seats"), "rear_right") === null)), "test_client_part_08.py:161: result.accessories.seats.rear_right is None");
$.assert((($.attr($.attr($.attr(result, "accessories"), "seats"), "rear_center") === null)), "test_client_part_08.py:162: result.accessories.seats.rear_center is None");
$.assert((($.attr($.attr($.attr(result, "accessories"), "seats"), "third_left") === null)), "test_client_part_08.py:163: result.accessories.seats.third_left is None");
$.assert((($.attr($.attr($.attr(result, "accessories"), "seats"), "third_right") === null)), "test_client_part_08.py:164: result.accessories.seats.third_right is None");
$.assert((($.attr(result, "delayed_schedule") !== null)), "test_client_part_08.py:166: result.delayed_schedule is not None");
$.assert((($.attr($.attr(result, "delayed_schedule"), "start_date_time") !== null)), "test_client_part_08.py:167: result.delayed_schedule.start_date_time is not None");
$.assertEqual($.call($.attr($.attr($.attr(result, "delayed_schedule"), "start_date_time"), "isoformat"), [], null), "2026-08-01T08:15:00+00:00", "test_client_part_08.py:168: result.delayed_schedule.start_date_time.isoformat() == '2026-08-01T08:15:00+00:00'");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "VehicleClimateSchedules", "test_client_part_08.py:171: payload['operationName'] == 'VehicleClimateSchedules'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["temperatureUnit"]: "CELSIUS"}), "test_client_part_08.py:172: payload['variables'] == {'vin': 'JN1TESTVIN', 'temperatureUnit': 'CELSIUS'}");
}

/** Translated upstream test_graphql_keeps_partial_vehicle_data. */
export async function test_graphql_keeps_partial_vehicle_data(...__args: any[]): any {
let client, session, status;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["batteryStatus"]: Object.assign({}, {["level"]: 11})})})}, {["errors"]: [Object.assign({}, {["message"]: "An unrelated field could not be resolved"})]})], null)], null);
client = $.call(make_client, [session], null);
status = (await $.call($.attr(client, "async_get_vehicle_status"), ["JN1TESTVIN"], null));
$.assert((($.attr(status, "battery") !== null)), "test_client_part_08.py:198: status.battery is not None");
$.assertEqual($.attr($.attr(status, "battery"), "level"), 11, "test_client_part_08.py:199: status.battery.level == 11");
}

/** Translated upstream test_graphql_raises_operation_error_when_all_data_is_null. */
export async function test_graphql_raises_operation_error_when_all_data_is_null(...__args: any[]): any {
let client, raised, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["startClimate"]: null})}, {["errors"]: [Object.assign({}, {["message"]: "Unauthorized field or type"})]})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
raised = await $.raises(GraphQLError, null, async () => {
(await $.call($.attr(client, "async_start_climate"), ["JN1TESTVIN", $.call(ClimateSettings, [72.0, $.attr(TemperatureUnit, "FAHRENHEIT")], null)], null));
});
$.assertEqual($.attr($.attr(raised, "value"), "messages"), ["Unauthorized field or type"], "test_client_part_08.py:221: raised.value.messages == ('Unauthorized field or type',)");
}

/** Translated upstream test_graphql_omits_id_token_header_when_not_issued. */
export async function test_graphql_omits_id_token_header_when_not_issued(...__args: any[]): any {
let client, headers, session, vehicles;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicles"]: []})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token"], null)}));
vehicles = (await $.call($.attr(client, "async_get_vehicles"), [], null));
$.assertEqual(vehicles, [], "test_client_part_08.py:231: vehicles == ()");
headers = $.get($.get($.attr(session, "calls"), 0), "headers");
$.assert((!$.contains(headers, "id-token")), "test_client_part_08.py:233: 'id-token' not in headers");
}

/** Translated upstream test_read_only_blocks_commands_before_network_request. */
export async function test_read_only_blocks_commands_before_network_request(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_start_climate"), ["JN1TESTVIN", $.call(ClimateSettings, [72.0, $.attr(TemperatureUnit, "FAHRENHEIT")], null)], null));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_08.py:247: session.calls == []");
}

/** Translated upstream test_set_charge_notification_threshold_respects_read_only_mode. */
export async function test_set_charge_notification_threshold_respects_read_only_mode(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_set_charge_notification_threshold"), ["JN1TESTVIN", 25], null));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_08.py:258: session.calls == []");
}

/** Translated upstream test_set_charge_notification_threshold_returns_request. */
export async function test_set_charge_notification_threshold_returns_request(...__args: any[]): any {
let client, payload, request, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["setChargeNotificationThreshold"]: Object.assign({}, {["serviceRequestId"]: "request-456"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
request = (await $.call($.attr(client, "async_set_charge_notification_threshold"), ["JN1TESTVIN", 25], null));
$.assertEqual(request, $.call(ServiceRequest, ["request-456", $.attr(ServiceRequestKind, "CHARGE_CONFIGURATION")], null), "test_client_part_08.py:273: request == ServiceRequest('request-456', ServiceRequestKind.CHARGE_CONFIGURATION)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "SetNotificationLimit", "test_client_part_08.py:278: payload['operationName'] == 'SetNotificationLimit'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["percent"]: 25}), "test_client_part_08.py:279: payload['variables'] == {'vin': 'JN1TESTVIN', 'percent': 25}");
}

/** Translated upstream test_set_v2l_minimum_battery_level_respects_read_only_mode. */
export async function test_set_v2l_minimum_battery_level_respects_read_only_mode(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(make_client, [session], null);
await $.raises(ReadOnlyError, null, async () => {
(await $.call($.attr(client, "async_set_v2l_minimum_battery_charge_level"), ["JN1TESTVIN", 30], null));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_08.py:290: session.calls == []");
}

/** Translated upstream test_set_v2l_minimum_battery_level_returns_request. */
export async function test_set_v2l_minimum_battery_level_returns_request(...__args: any[]): any {
let client, payload, request, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["setV2L"]: Object.assign({}, {["serviceRequestId"]: "request-v2l"})})})], null)], null);
client = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
request = (await $.call($.attr(client, "async_set_v2l_minimum_battery_charge_level"), ["JN1TESTVIN", 30], null));
$.assertEqual(request, $.call(ServiceRequest, ["request-v2l", $.attr(ServiceRequestKind, "V2L")], null), "test_client_part_08.py:308: request == ServiceRequest('request-v2l', ServiceRequestKind.V2L)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "SetV2L", "test_client_part_08.py:310: payload['operationName'] == 'SetV2L'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}, {["input"]: Object.assign({}, {["minimumBatteryChargeLevel"]: 30})}), "test_client_part_08.py:311: payload['variables'] == {'vin': 'JN1TESTVIN', 'input': {'minimumBatteryChargeLevel': 30}}");
}

$.register("test_client_part_08.py::test_get_charge_history_parses_all_service_fields_and_units", test_get_charge_history_parses_all_service_fields_and_units, []);

$.register("test_client_part_08.py::test_get_climate_schedules_parses_accessories_and_delayed_schedule", test_get_climate_schedules_parses_accessories_and_delayed_schedule, []);

$.register("test_client_part_08.py::test_graphql_keeps_partial_vehicle_data", test_graphql_keeps_partial_vehicle_data, []);

$.register("test_client_part_08.py::test_graphql_raises_operation_error_when_all_data_is_null", test_graphql_raises_operation_error_when_all_data_is_null, []);

$.register("test_client_part_08.py::test_graphql_omits_id_token_header_when_not_issued", test_graphql_omits_id_token_header_when_not_issued, []);

$.register("test_client_part_08.py::test_read_only_blocks_commands_before_network_request", test_read_only_blocks_commands_before_network_request, []);

$.register("test_client_part_08.py::test_set_charge_notification_threshold_respects_read_only_mode", test_set_charge_notification_threshold_respects_read_only_mode, []);

$.register("test_client_part_08.py::test_set_charge_notification_threshold_returns_request", test_set_charge_notification_threshold_returns_request, []);

$.register("test_client_part_08.py::test_set_v2l_minimum_battery_level_respects_read_only_mode", test_set_v2l_minimum_battery_level_respects_read_only_mode, []);

$.register("test_client_part_08.py::test_set_v2l_minimum_battery_level_returns_request", test_set_v2l_minimum_battery_level_returns_request, []);
