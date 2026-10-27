// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const UTC = $.UTC;
const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { AlertScheduleInput, ChargeScheduleInput, ClimateSettings, CurfewAlertInput, DistanceUnit, NissanClient, ServiceRequestStatus, SpeedUnit, TemperatureUnit, Tokens, WeekDay } from "../src/index";

import { parse_service_request_result } from "../src/parsing";

/** Translated upstream NoNetworkSession. */
export class NoNetworkSession {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, NoNetworkSession, __args); }
/** Translated upstream post. */
post(...__args: any[]): any {
let {"url": url, "kwargs": kwargs} = $.bind(__args, ["url"], {}, [], null, "kwargs");
throw $.call($.AssertionError, [("unexpected network request to " + $.str(url))], null);
}
}
$.classType(NoNetworkSession);

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(NissanClient, [$.call(NoNetworkSession, [], null)], Object.assign({}, {"tokens": $.call(Tokens, ["access", "refresh", "identity"], null)}, {"read_only": false}));
}

/** Translated upstream test_core_unknown_input_enums_are_rejected_before_network. */
export async function test_core_unknown_input_enums_are_rejected_before_network(...__args: any[]): any {
let client;
let {} = $.bind(__args, [], {}, [], null, null);
client = $.call(make_client, [], null);
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_get_vehicle_status"), ["VIN"], Object.assign({}, {"distance_unit": $.attr(DistanceUnit, "UNKNOWN_VALUE")})));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_get_vehicle_alerts"), ["VIN"], Object.assign({}, {"speed_unit": $.attr(SpeedUnit, "UNKNOWN_VALUE")})));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_start_climate"), ["VIN", $.call(ClimateSettings, [72, $.attr(TemperatureUnit, "UNKNOWN_VALUE")], null)], null));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_create_charge_schedule"), ["VIN", $.call(ChargeScheduleInput, [$.call(datetime, [2026, 8, 1], Object.assign({}, {"tzinfo": UTC})), "PT1H", [$.attr(WeekDay, "UNKNOWN_VALUE")]], null)], null));
});
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_create_curfew_alert"), ["VIN", $.call(CurfewAlertInput, ["Night", true, $.call(AlertScheduleInput, [$.call(datetime, [2026, 8, 1], Object.assign({}, {"tzinfo": UTC})), "PT1H", [$.attr(WeekDay, "UNKNOWN_VALUE")]], null)], null)], null));
});
}

/** Translated upstream test_unrecognized_service_request_status_is_not_terminal. */
export function test_unrecognized_service_request_status_is_not_terminal(...__args: any[]): any {
let result;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_service_request_result, [Object.assign({}, {["checkDoorRequest"]: Object.assign({}, {["status"]: "FUTURE_IN_PROGRESS_STATUS"})}), "checkDoorRequest", "VIN"], null);
$.assert((($.attr(result, "status") === $.attr(ServiceRequestStatus, "UNKNOWN_VALUE"))), "test_safety_contracts.py:82: result.status is ServiceRequestStatus.UNKNOWN_VALUE");
$.assert((($.attr(result, "is_terminal") === false)), "test_safety_contracts.py:83: result.is_terminal is False");
$.assert((($.attr(result, "is_success") === false)), "test_safety_contracts.py:84: result.is_success is False");
}

$.register("test_safety_contracts.py::test_core_unknown_input_enums_are_rejected_before_network", test_core_unknown_input_enums_are_rejected_before_network, []);

$.register("test_safety_contracts.py::test_unrecognized_service_request_status_is_not_terminal", test_unrecognized_service_request_status_is_not_terminal, []);
