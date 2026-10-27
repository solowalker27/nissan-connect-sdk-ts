// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const b64decode = $.b64decode;

const Mapping = $.Mapping;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { TOKENS, FakeResponse, FakeSession, make_client } from "./test_client";

import { AuthenticationError, CameraPosition, CameraService, Country, DistanceUnit, EngineOilDrainRange, NissanClient, RequestProof, Tokens, VehiclePhoto } from "../src/index";

/** Translated upstream test_request_proof_and_provider_are_mutually_exclusive. */
export function test_request_proof_and_provider_are_mutually_exclusive(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
/** Translated upstream provider. */
async function provider(...__args: any[]): any {
let {"force_refresh": force_refresh} = $.bind(__args, ["force_refresh"], {}, [], null, null);
return $.call(RequestProof, ["provided-attestation", $.call($.str, [force_refresh], null)], null);
}
$.raises($.ValueError, "cannot be combined", () => {
$.call(NissanClient, [$.call(FakeSession, [], null)], Object.assign({}, {"request_proof": $.call(RequestProof, ["static-attestation", "device-status"], null)}, {"request_proof_provider": provider}));
});
}

/** Translated upstream test_application_graphql_uses_application_token_and_request_proof. */
export async function test_application_graphql_uses_application_token_and_request_proof(...__args: any[]): any {
let client, graphql_call, headers, session, token_call;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["access_token"]: "application-access"})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["validateNissanID"]: null})})], null)], null);
client = $.call(NissanClient, [session], Object.assign({}, {"oauth_device_id": "device-123"}, {"request_proof": $.call(RequestProof, ["api-attestation", "device-status"], null)}));
$.assert((((await $.call($.attr(client, "async_validate_nissan_id"), ["owner@example.test"], null)) === null)), "test_client_part_01.py:54: await client.async_validate_nissan_id('owner@example.test') is None");
[token_call, graphql_call] = $.attr(session, "calls");
$.assertEqual($.get(token_call, "data"), Object.assign({}, {["client_id"]: "6wYMOME6Rs4kWVxS4i6b2RUsR4Ma"}, {["client_secret"]: "fWp6esCzsq3vCY6RLf3p_CV_ukAa"}, {["scope"]: "openid device_device-123"}, {["grant_type"]: "client_credentials"}), "test_client_part_01.py:57: token_call['data'] == {'client_id': '6wYMOME6Rs4kWVxS4i6b2RUsR4Ma', 'client_secret': 'fWp6esCzsq3vCY6RLf3p_CV_ukAa', 'scope': 'openid device_device-123', 'grant_type': 'client_credentials'}");
headers = $.get(graphql_call, "headers");
$.assertEqual($.get(headers, "Authorization"), "Bearer application-access", "test_client_part_01.py:64: headers['Authorization'] == 'Bearer application-access'");
$.assertEqual($.get(headers, "X-API-Attestation"), "api-attestation", "test_client_part_01.py:65: headers['X-API-Attestation'] == 'api-attestation'");
$.assertEqual($.get(headers, "X-Device-Status"), "device-status", "test_client_part_01.py:66: headers['X-Device-Status'] == 'device-status'");
$.assertEqual($.get(headers, "apollographql-client-name"), "com.nissan.mynissan:android", "test_client_part_01.py:67: headers['apollographql-client-name'] == 'com.nissan.mynissan:android'");
$.assertEqual($.get(headers, "apollographql-client-version"), "6.9.110", "test_client_part_01.py:68: headers['apollographql-client-version'] == '6.9.110'");
$.assert((!$.contains(headers, "id-token")), "test_client_part_01.py:69: 'id-token' not in headers");
}

/** Translated upstream test_application_graphql_requires_request_proof_before_network. */
export async function test_application_graphql_requires_request_proof_before_network(...__args: any[]): any {
let client, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
client = $.call(NissanClient, [session], null);
await $.raises(AuthenticationError, "requires request proof", async () => {
(await $.call($.attr(client, "async_validate_nissan_id"), ["owner@example.test"], null));
});
$.assertEqual($.attr(session, "calls"), [], "test_client_part_01.py:80: session.calls == []");
}

/** Translated upstream test_rejected_request_proof_is_refreshed_once. */
export async function test_rejected_request_proof_is_refreshed_once(...__args: any[]): any {
let client, requests, retry_headers, session, suffix;
let {} = $.bind(__args, [], {}, [], null, null);
requests = [];
/** Translated upstream provider. */
async function provider(...__args: any[]): any {
let suffix;
let {"force_refresh": force_refresh} = $.bind(__args, ["force_refresh"], {}, [], null, null);
$.call($.attr(requests, "append"), [force_refresh], null);
suffix = ($.truth(force_refresh) ? "fresh" : "initial");
return $.call(RequestProof, [("attestation-" + $.str(suffix)), ("status-" + $.str(suffix))], null);
}
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["access_token"]: "application-access"})], null), $.call(FakeResponse, [403, Object.assign({}, {["message"]: "request rejected"})], null), $.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["validateNissanID"]: null})})], null)], null);
client = $.call(NissanClient, [session], Object.assign({}, {"request_proof_provider": provider}));
$.assert((((await $.call($.attr(client, "async_validate_nissan_id"), ["owner@example.test"], null)) === null)), "test_client_part_01.py:102: await client.async_validate_nissan_id('owner@example.test') is None");
$.assertEqual(requests, [false, true], "test_client_part_01.py:104: requests == [False, True]");
retry_headers = $.get($.get($.attr(session, "calls"), 2), "headers");
$.assertEqual($.get(retry_headers, "X-API-Attestation"), "attestation-fresh", "test_client_part_01.py:106: retry_headers['X-API-Attestation'] == 'attestation-fresh'");
$.assertEqual($.get(retry_headers, "X-Device-Status"), "status-fresh", "test_client_part_01.py:107: retry_headers['X-Device-Status'] == 'status-fresh'");
}

/** Translated upstream test_client_uses_requested_country. */
export function test_client_uses_requested_country(...__args: any[]): any {
let client;
let {"country": country} = $.bind(__args, ["country"], {}, [], null, null);
client = $.call(NissanClient, [$.call(FakeSession, [], null)], Object.assign({}, {"country": country}, {"tokens": TOKENS}));
$.assert((($.attr(client, "country") === country)), "test_client_part_01.py:118: client.country is country");
}

/** Translated upstream test_authenticate_normalizes_credentials_and_publishes_tokens. */
export async function test_authenticate_normalizes_credentials_and_publishes_tokens(...__args: any[]): any {
let call, client, client_id, client_secret, encoded_credentials, headers, published, separator, session, tokens;
let {"country": country, "expected_client_id": expected_client_id, "expected_scope": expected_scope, "expected_user_agent": expected_user_agent} = $.bind(__args, ["country", "expected_client_id", "expected_scope", "expected_user_agent"], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["access_token"]: "new-access"}, {["refresh_token"]: "new-refresh"}, {["id_token"]: "new-id"})], null)], null);
published = [];
client = $.call(NissanClient, [session], Object.assign({}, {"country": country}, {"oauth_device_id": "device-123"}, {"token_listener": $.attr(published, "append")}));
tokens = (await $.call($.attr(client, "async_authenticate"), ["OWNER@EXAMPLE.COM", "secret"], null));
$.assertEqual(tokens, $.call(Tokens, ["new-access", "new-refresh", "new-id"], null), "test_client_part_01.py:171: tokens == Tokens('new-access', 'new-refresh', 'new-id')");
$.assertEqual(published, [tokens], "test_client_part_01.py:172: published == [tokens]");
call = $.get($.attr(session, "calls"), 0);
$.assert($.call($.attr($.call($.str, [$.get(call, "url")], null), "endswith"), ["/token"], null), "test_client_part_01.py:174: str(call['url']).endswith('/token')");
$.assertEqual($.get(call, "data"), Object.assign({}, {["username"]: "NISNNAVCS/owner@example.com"}, {["password"]: "secret"}, {["scope"]: expected_scope}, {["grant_type"]: "password"}), "test_client_part_01.py:175: call['data'] == {'username': 'NISNNAVCS/owner@example.com', 'password': 'secret', 'scope': expected_scope, 'grant_type': 'password'}");
headers = $.get(call, "headers");
encoded_credentials = $.call($.attr($.get(headers, "Authorization"), "removeprefix"), ["Basic "], null);
[client_id, separator, client_secret] = $.call($.attr($.call($.attr($.call(b64decode, [encoded_credentials], null), "decode"), [], null), "partition"), [":"], null);
$.assertEqual(client_id, expected_client_id, "test_client_part_01.py:184: client_id == expected_client_id");
$.assertEqual(separator, ":", "test_client_part_01.py:185: separator == ':'");
$.assert(client_secret, "test_client_part_01.py:186: client_secret");
$.assertEqual($.get(headers, "User-Agent"), expected_user_agent, "test_client_part_01.py:187: headers['User-Agent'] == expected_user_agent");
}

/** Translated upstream test_graphql_uses_country_profile_and_identity_token. */
export async function test_graphql_uses_country_profile_and_identity_token(...__args: any[]): any {
let client, headers, session;
let {"country": country, "expected_language": expected_language, "expected_client_name": expected_client_name, "expected_client_version": expected_client_version, "expected_user_agent": expected_user_agent} = $.bind(__args, ["country", "expected_language", "expected_client_name", "expected_client_version", "expected_user_agent"], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicles"]: []})})], null)], null);
client = $.call(NissanClient, [session], Object.assign({}, {"country": country}, {"tokens": TOKENS}));
$.assertEqual((await $.call($.attr(client, "async_get_vehicles"), [], null)), [], "test_client_part_01.py:237: await client.async_get_vehicles() == ()");
headers = $.get($.get($.attr(session, "calls"), 0), "headers");
$.assertEqual($.get(headers, "Country"), country, "test_client_part_01.py:240: headers['Country'] == country");
$.assertEqual($.get(headers, "Accept-Language"), expected_language, "test_client_part_01.py:241: headers['Accept-Language'] == expected_language");
$.assertEqual($.get(headers, "id-token"), "id-token", "test_client_part_01.py:242: headers['id-token'] == 'id-token'");
$.assertEqual($.get(headers, "apollographql-client-name"), expected_client_name, "test_client_part_01.py:243: headers['apollographql-client-name'] == expected_client_name");
$.assertEqual($.get(headers, "apollographql-client-version"), expected_client_version, "test_client_part_01.py:244: headers['apollographql-client-version'] == expected_client_version");
$.assertEqual($.get(headers, "User-Agent"), expected_user_agent, "test_client_part_01.py:245: headers['User-Agent'] == expected_user_agent");
}

/** Translated upstream test_get_vehicle_status_parses_ariya_battery. */
export async function test_get_vehicle_status_parses_ariya_battery(...__args: any[]): any {
let call, client, headers, session, status;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "ElectricAVK2Vehicle"}, {["batteryStatus"]: Object.assign({}, {["level"]: 73}, {["isPluggedIn"]: true}, {["isCharging"]: false}, {["remainingChargeTime"]: 42}, {["remainingMileage"]: Object.assign({}, {["value"]: 181}, {["unit"]: "MILE"})})}, {["climateStatus"]: Object.assign({}, {["state"]: "OFF"}, {["temperature"]: Object.assign({}, {["value"]: 72.0}, {["unit"]: "FAHRENHEIT"})})}, {["doorsStatus"]: null}, {["fuelAutonomy"]: null}, {["mileage"]: Object.assign({}, {["total"]: 1200}, {["unit"]: "MILE"}, {["recordedTime"]: null})}, {["tirePressure"]: null}, {["mils"]: []})})})], null)], null);
client = $.call(make_client, [session], null);
status = (await $.call($.attr(client, "async_get_vehicle_status"), ["JN1TESTVIN"], null));
$.assertEqual($.attr(status, "vehicle_type"), "ElectricAVK2Vehicle", "test_client_part_01.py:282: status.vehicle_type == 'ElectricAVK2Vehicle'");
$.assert((($.attr(status, "battery") !== null)), "test_client_part_01.py:283: status.battery is not None");
$.assertEqual($.attr($.attr(status, "battery"), "level"), 73, "test_client_part_01.py:284: status.battery.level == 73");
$.assert((($.attr($.attr(status, "battery"), "is_plugged_in") === true)), "test_client_part_01.py:285: status.battery.is_plugged_in is True");
$.assert((($.attr($.attr(status, "battery"), "is_charging") === false)), "test_client_part_01.py:286: status.battery.is_charging is False");
$.assertEqual($.attr($.attr(status, "battery"), "remaining_charge_time"), 42, "test_client_part_01.py:287: status.battery.remaining_charge_time == 42");
$.assert((($.attr($.attr(status, "battery"), "remaining_mileage") !== null)), "test_client_part_01.py:288: status.battery.remaining_mileage is not None");
$.assertEqual($.attr($.attr($.attr(status, "battery"), "remaining_mileage"), "value"), 181, "test_client_part_01.py:289: status.battery.remaining_mileage.value == 181");
$.assert((($.attr(status, "engine_oil_drain_range") === null)), "test_client_part_01.py:290: status.engine_oil_drain_range is None");
call = $.get($.attr(session, "calls"), 0);
headers = $.get(call, "headers");
$.assertEqual($.get(headers, "Brand"), "Nissan", "test_client_part_01.py:293: headers['Brand'] == 'Nissan'");
$.assertEqual($.get(headers, "Country"), "US", "test_client_part_01.py:294: headers['Country'] == 'US'");
$.assertEqual($.get(headers, "id-token"), "id-token", "test_client_part_01.py:295: headers['id-token'] == 'id-token'");
$.assertEqual($.get(headers, "User-Agent"), "okhttp/5.2.1", "test_client_part_01.py:296: headers['User-Agent'] == 'okhttp/5.2.1'");
}

/** Translated upstream test_get_vehicle_status_parses_engine_oil_drain_range. */
export async function test_get_vehicle_status_parses_engine_oil_drain_range(...__args: any[]): any {
let client, engine_oil_drain_range, payload, query, session, status;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["batteryStatus"]: null}, {["climateStatus"]: null}, {["doorsStatus"]: null}, {["fuelAutonomy"]: null}, {["mileage"]: null}, {["tirePressure"]: null}, {["mils"]: []}, {["engineOilDrainRange"]: Object.assign({}, {["range"]: 4321}, {["unit"]: "MILE"}, {["lastUpdatedAt"]: "2026-07-31T21:45:00Z"})})})})], null)], null);
client = $.call(make_client, [session], null);
status = (await $.call($.attr(client, "async_get_vehicle_status"), ["JN1TESTVIN"], null));
engine_oil_drain_range = $.attr(status, "engine_oil_drain_range");
$.assert(((engine_oil_drain_range !== null)), "test_client_part_01.py:330: engine_oil_drain_range is not None");
$.assertEqual(engine_oil_drain_range, $.call(EngineOilDrainRange, [], Object.assign({}, {"range": 4321}, {"unit": $.attr(DistanceUnit, "MILE")}, {"last_updated_at": $.attr(engine_oil_drain_range, "last_updated_at")})), "test_client_part_01.py:331: engine_oil_drain_range == EngineOilDrainRange(range=4321, unit=DistanceUnit.MILE, last_updated_at=engine_oil_drain_range.last_updated_at)");
$.assertEqual($.call($.attr($.attr(engine_oil_drain_range, "last_updated_at"), "isoformat"), [], null), "2026-07-31T21:45:00+00:00", "test_client_part_01.py:336: engine_oil_drain_range.last_updated_at.isoformat() == '2026-07-31T21:45:00+00:00'");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
query = $.get(payload, "query");
$.assert(($.contains(query, "... on AVK2Vehicle")), "test_client_part_01.py:339: '... on AVK2Vehicle' in query");
$.assert(($.contains(query, "... on EVOVehicle")), "test_client_part_01.py:340: '... on EVOVehicle' in query");
$.assert(($.contains(query, "engineOilDrainRange(unit: $unit)")), "test_client_part_01.py:341: 'engineOilDrainRange(unit: $unit)' in query");
$.assert(($.contains(query, "lastUpdatedAt")), "test_client_part_01.py:342: 'lastUpdatedAt' in query");
}

/** Translated upstream test_get_photos_around_vehicle_parses_service_contract. */
export async function test_get_photos_around_vehicle_parses_service_contract(...__args: any[]): any {
let client, first_photo, payload, query, result, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [200, Object.assign({}, {["data"]: Object.assign({}, {["vehicle"]: Object.assign({}, {["year"]: "2026"}, {["model"]: "ARIYA"}, {["vin"]: "JN1TESTVIN"}, {["photosAroundVehicle"]: [Object.assign({}, {["id"]: "photo-1"}, {["filename"]: "front.jpg"}, {["link"]: "https://example.invalid/front.jpg"}, {["timeStamp"]: "2026-07-31T20:15:00Z"}, {["cameraPosition"]: "OUTSIDE_FRONT_CAMERA"}, {["cameraService"]: "DVR_REMOTE_PHOTO"}), null, Object.assign({}, {["id"]: null}, {["filename"]: null}, {["link"]: null}, {["timeStamp"]: null}, {["cameraPosition"]: "FUTURE_CAMERA"}, {["cameraService"]: "FUTURE_SERVICE"})]})})})], null)], null);
client = $.call(make_client, [session], null);
result = (await $.call($.attr(client, "async_get_photos_around_vehicle"), ["JN1TESTVIN"], null));
$.assert(((result !== null)), "test_client_part_01.py:384: result is not None");
$.assertEqual($.attr(result, "vin"), "JN1TESTVIN", "test_client_part_01.py:385: result.vin == 'JN1TESTVIN'");
$.assertEqual($.attr(result, "year"), "2026", "test_client_part_01.py:386: result.year == '2026'");
$.assertEqual($.attr(result, "model"), "ARIYA", "test_client_part_01.py:387: result.model == 'ARIYA'");
$.assert((($.attr(result, "photos") !== null)), "test_client_part_01.py:388: result.photos is not None");
$.assertEqual($.call($.len, [$.attr(result, "photos")], null), 3, "test_client_part_01.py:389: len(result.photos) == 3");
first_photo = $.get($.attr(result, "photos"), 0);
$.assert(((first_photo !== null)), "test_client_part_01.py:391: first_photo is not None");
$.assertEqual($.attr(first_photo, "id"), "photo-1", "test_client_part_01.py:392: first_photo.id == 'photo-1'");
$.assertEqual($.attr(first_photo, "filename"), "front.jpg", "test_client_part_01.py:393: first_photo.filename == 'front.jpg'");
$.assertEqual($.attr(first_photo, "link"), "https://example.invalid/front.jpg", "test_client_part_01.py:394: first_photo.link == 'https://example.invalid/front.jpg'");
$.assert((($.attr(first_photo, "camera_position") === $.attr(CameraPosition, "OUTSIDE_FRONT_CAMERA"))), "test_client_part_01.py:395: first_photo.camera_position is CameraPosition.OUTSIDE_FRONT_CAMERA");
$.assert((($.attr(first_photo, "camera_service") === $.attr(CameraService, "DVR_REMOTE_PHOTO"))), "test_client_part_01.py:396: first_photo.camera_service is CameraService.DVR_REMOTE_PHOTO");
$.assert((($.attr(first_photo, "timestamp") !== null)), "test_client_part_01.py:397: first_photo.timestamp is not None");
$.assertEqual($.call($.attr($.attr(first_photo, "timestamp"), "isoformat"), [], null), "2026-07-31T20:15:00+00:00", "test_client_part_01.py:398: first_photo.timestamp.isoformat() == '2026-07-31T20:15:00+00:00'");
$.assert((($.get($.attr(result, "photos"), 1) === null)), "test_client_part_01.py:399: result.photos[1] is None");
$.assertEqual($.get($.attr(result, "photos"), 2), $.call(VehiclePhoto, [], Object.assign({}, {"id": null}, {"filename": null}, {"link": null}, {"timestamp": null}, {"camera_position": $.attr(CameraPosition, "UNKNOWN_VALUE")}, {"camera_service": $.attr(CameraService, "UNKNOWN_VALUE")})), "test_client_part_01.py:400: result.photos[2] == VehiclePhoto(id=None, filename=None, link=None, timestamp=None, camera_position=CameraPosition.UNKNOWN_VALUE, camera_service=CameraService.UNKNOWN_VALUE)");
payload = $.get($.get($.attr(session, "calls"), 0), "json");
$.assertEqual($.get(payload, "operationName"), "PhotosAroundVehicle", "test_client_part_01.py:410: payload['operationName'] == 'PhotosAroundVehicle'");
$.assertEqual($.get(payload, "variables"), Object.assign({}, {["vin"]: "JN1TESTVIN"}), "test_client_part_01.py:411: payload['variables'] == {'vin': 'JN1TESTVIN'}");
query = $.get(payload, "query");
$.assert(($.contains(query, "photosAroundVehicle")), "test_client_part_01.py:413: 'photosAroundVehicle' in query");
$.assert(($.contains(query, "timeStamp")), "test_client_part_01.py:414: 'timeStamp' in query");
}

$.register("test_client_part_01.py::test_request_proof_and_provider_are_mutually_exclusive", test_request_proof_and_provider_are_mutually_exclusive, []);

$.register("test_client_part_01.py::test_application_graphql_uses_application_token_and_request_proof", test_application_graphql_uses_application_token_and_request_proof, []);

$.register("test_client_part_01.py::test_application_graphql_requires_request_proof_before_network", test_application_graphql_requires_request_proof_before_network, []);

$.register("test_client_part_01.py::test_rejected_request_proof_is_refreshed_once", test_rejected_request_proof_is_refreshed_once, []);

$.register("test_client_part_01.py::test_client_uses_requested_country", test_client_uses_requested_country, [["country", $.call($.tuple, [Country], null)]]);

$.register("test_client_part_01.py::test_authenticate_normalizes_credentials_and_publishes_tokens", test_authenticate_normalizes_credentials_and_publishes_tokens, [[["country", "expected_client_id", "expected_scope", "expected_user_agent"], [[$.attr(Country, "US"), "v9no_nW7GqHYsfAKkki6_N5AFVIa", "openid device_device-123+internal_login", "okhttp/5.2.1"], [$.attr(Country, "CA"), "v9no_nW7GqHYsfAKkki6_N5AFVIa", "openid device_device-123+internal_login", "okhttp/5.2.1"], [$.attr(Country, "MX"), "v9no_nW7GqHYsfAKkki6_N5AFVIa", "openid device_device-123+internal_login", "okhttp/5.2.1"]]]]);

$.register("test_client_part_01.py::test_graphql_uses_country_profile_and_identity_token", test_graphql_uses_country_profile_and_identity_token, [[["country", "expected_language", "expected_client_name", "expected_client_version", "expected_user_agent"], [[$.attr(Country, "US"), "en-US", "ca.nissan.nissanconnectservices:android", "9.9.91", "okhttp/5.2.1"], [$.attr(Country, "CA"), "en-CA", "ca.nissan.nissanconnectservices:android", "9.9.91", "okhttp/5.2.1"], [$.attr(Country, "MX"), "es-MX", "ca.nissan.nissanconnectservices:android", "9.9.91", "okhttp/5.2.1"]]]]);

$.register("test_client_part_01.py::test_get_vehicle_status_parses_ariya_battery", test_get_vehicle_status_parses_ariya_battery, []);

$.register("test_client_part_01.py::test_get_vehicle_status_parses_engine_oil_drain_range", test_get_vehicle_status_parses_engine_oil_drain_range, []);

$.register("test_client_part_01.py::test_get_photos_around_vehicle_parses_service_contract", test_get_photos_around_vehicle_parses_service_contract, []);
