// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Callable = $.Callable;
const Mapping = $.Mapping;

const FrozenInstanceError = $.FrozenInstanceError;

const UTC = $.UTC;
const date = $.date;
const datetime = $.datetime;

const pytest = $.pytest;

import { FakeSession, assert_graphql_call, graphql_response, make_client, preferred_dealer, recall, service_history_entry, vehicle_data, warranty } from "./test_service_reads";

import { UNSET, DistanceUnit, PreferredDealerAddress, PreferredDealerLocation, RecallType, ServiceHistoryMileage, VehiclePreferredDealer, VehicleRecall, VehicleRoadsideAssistance, VehicleServiceHistoryEntry, VehicleServiceOperation, VehicleWarranty, VehicleWarrantyInfo, VehicleWarrantyPeriod, WarrantyInfoColorStatus, WarrantyInfoWarrantyStatus } from "../src/index";

import { parse_vehicle_preferred_dealer, parse_vehicle_recalls, parse_vehicle_roadside_assistance, parse_vehicle_service_history, parse_warranty_info } from "../src/service_parsing";

/** Translated upstream test_service_reads_use_exact_operations_and_parse_full_responses. */
export async function test_service_reads_use_exact_operations_and_parse_full_responses(...__args: any[]): any {
let client, dealer_result, expected_calls, history_result, index, operation_name, recalls_result, roadside_result, session, variables, warranty_result;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"preferredDealer": $.call(preferred_dealer, [], null)}))], null), $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"recalls": [$.call(recall, [], null)]}))], null), $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"roadsideAssistance": Object.assign({}, {["__typename"]: "RoadsideAssistance"}, {["roadsideMonths"]: 36}, {["roadsideMiles"]: 36000}, {["towingMonths"]: 60}, {["towingMiles"]: 60000})}))], null), $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"serviceHistory": [$.call(service_history_entry, [], null)]}))], null), $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"warranty": $.call(warranty, [], null)}))], null)], null);
client = $.call(make_client, [session], null);
dealer_result = (await $.call($.attr(client, "async_get_vehicle_preferred_dealer"), ["VIN"], null));
recalls_result = (await $.call($.attr(client, "async_get_vehicle_recalls"), ["VIN"], null));
roadside_result = (await $.call($.attr(client, "async_get_vehicle_roadside_assistance"), ["VIN"], null));
history_result = (await $.call($.attr(client, "async_get_vehicle_service_history"), ["VIN"], null));
warranty_result = (await $.call($.attr(client, "async_get_warranty_info"), ["VIN"], null));
$.assertEqual(dealer_result, $.call(VehiclePreferredDealer, [], Object.assign({}, {"id": "dealer-id"}, {"hash_id": "dealer-hash"}, {"name": "Nissan San Diego"}, {"address": $.call(PreferredDealerAddress, [], Object.assign({}, {"address1": "1 Main St"}, {"address2": "Suite 2"}, {"city": "San Diego"}, {"state": "CA"}, {"postal_code": "92101"}, {"country": "US"}))}, {"hours": "Mon-Fri"}, {"phone": "555-0100"}, {"service_phone": "555-0101"}, {"native_service_booking": true}, {"scheduling_url_mobile": "https://example.test/service"}, {"location": $.call(PreferredDealerLocation, [], Object.assign({}, {"latitude": 32.7157}, {"longitude": -(117.1611)}))}, {"languages_spoken": ["English", "Spanish"]})), "test_service_reads_part_01.py:73: dealer_result == VehiclePreferredDealer(id='dealer-id', hash_id='dealer-hash', name='Nissan San Diego', address=PreferredDealerAddress(address1='1 Main St', address2='Suite 2', city='San Diego', state='CA', postal_code='92101', country='US'), hours='Mon-Fri', phone='555-0100', service_phone='555-0101', native_service_booking=True, scheduling_url_mobile='https://example.test/service', location=PreferredDealerLocation(latitude=32.7157, longitude=-117.1611), languages_spoken=('English', 'Spanish'))");
$.assertEqual(recalls_result, [$.call(VehicleRecall, [], Object.assign({}, {"effective_date": $.call($.attr(datetime, "fromisoformat"), ["2026-02-03T04:05:06-08:00"], null)}, {"nhtsa_id": "26V001"}, {"primary_description": "Primary description"}, {"remedy_description": "Remedy description"}, {"risk_description": "Risk description"}, {"title": "Campaign title"}, {"type": $.attr(RecallType, "RECALL")}, {"recall_code": "PC001"}))], "test_service_reads_part_01.py:93: recalls_result == (VehicleRecall(effective_date=datetime.fromisoformat('2026-02-03T04:05:06-08:00'), nhtsa_id='26V001', primary_description='Primary description', remedy_description='Remedy description', risk_description='Risk description', title='Campaign title', type=RecallType.RECALL, recall_code='PC001'),)");
$.assertEqual(roadside_result, $.call(VehicleRoadsideAssistance, [36, 36000, 60, 60000], null), "test_service_reads_part_01.py:105: roadside_result == VehicleRoadsideAssistance(36, 36000, 60, 60000)");
$.assertEqual(history_result, [$.call(VehicleServiceHistoryEntry, [], Object.assign({}, {"mileage": $.call(ServiceHistoryMileage, [$.attr(DistanceUnit, "MILE"), 12345], null)}, {"service_date": $.call(datetime, [2026, 3, 4, 5, 6, 7], Object.assign({}, {"tzinfo": UTC}))}, {"dealer_name": "Nissan San Diego"}, {"dealer_code": "CA001"}, {"services": ["Inspection", "Tire rotation"]}, {"comment": "Completed"}, {"maintenance_id": 42}, {"service_operation": $.call(VehicleServiceOperation, [], Object.assign({}, {"service_category_id": "category-id"}, {"service_category_name": "Maintenance"}, {"op_code_id": "OP-1"}, {"op_code_description": "Scheduled service"}))}))], "test_service_reads_part_01.py:106: history_result == (VehicleServiceHistoryEntry(mileage=ServiceHistoryMileage(DistanceUnit.MILE, 12345), service_date=datetime(2026, 3, 4, 5, 6, 7, tzinfo=UTC), dealer_name='Nissan San Diego', dealer_code='CA001', services=('Inspection', 'Tire rotation'), comment='Completed', maintenance_id=42, service_operation=VehicleServiceOperation(service_category_id='category-id', service_category_name='Maintenance', op_code_id='OP-1', op_code_description='Scheduled service')),)");
$.assertEqual(warranty_result, $.call(VehicleWarranty, [], Object.assign({}, {"warranty_info": $.call(VehicleWarrantyInfo, [], Object.assign({}, {"color_status": $.attr(WarrantyInfoColorStatus, "GREEN")}, {"warranty_status": $.attr(WarrantyInfoWarrantyStatus, "ACTIVE")}, {"total_mileage": 36000}, {"total_months": "36"}))}, {"start_period": $.call(VehicleWarrantyPeriod, [0, $.call(date, [2024, 1, 2], null)], null)}, {"end_period": $.call(VehicleWarrantyPeriod, [36000, $.call(date, [2027, 1, 2], null)], null)}, {"current_period": $.call(VehicleWarrantyPeriod, [12000, $.call(date, [2026, 7, 31], null)], null)})), "test_service_reads_part_01.py:123: warranty_result == VehicleWarranty(warranty_info=VehicleWarrantyInfo(color_status=WarrantyInfoColorStatus.GREEN, warranty_status=WarrantyInfoWarrantyStatus.ACTIVE, total_mileage=36000, total_months='36'), start_period=VehicleWarrantyPeriod(0, date(2024, 1, 2)), end_period=VehicleWarrantyPeriod(36000, date(2027, 1, 2)), current_period=VehicleWarrantyPeriod(12000, date(2026, 7, 31)))");
$.assert($.call($.isinstance, [$.attr($.attr(warranty_result, "current_period"), "date"), date], null), "test_service_reads_part_01.py:134: isinstance(warranty_result.current_period.date, date)");
$.assert((($.call($.attr($.attr($.get(recalls_result, 0), "effective_date"), "utcoffset"), [], null) !== null)), "test_service_reads_part_01.py:135: recalls_result[0].effective_date.utcoffset() is not None");
$.assert((($.call($.attr($.attr($.get(history_result, 0), "service_date"), "utcoffset"), [], null) !== null)), "test_service_reads_part_01.py:136: history_result[0].service_date.utcoffset() is not None");
$.raises(FrozenInstanceError, null, () => {
dealer_result["name"] = "Changed";
});
expected_calls = [["VehiclePreferredDealer", Object.assign({}, {["vin"]: "VIN"})], ["VehicleRecalls", Object.assign({}, {["vin"]: "VIN"})], ["VehicleRoadsideAssistance", Object.assign({}, {["vin"]: "VIN"})], ["VehicleServiceHistory", Object.assign({}, {["vin"]: "VIN"})], ["WarrantyInfo", Object.assign({}, {["vin"]: "VIN"})]];
for ([index, [operation_name, variables]] of $.iterable($.call($.enumerate, [expected_calls], null))) {
$.call(assert_graphql_call, [session, index, operation_name, variables], null);
}
}

/** Translated upstream test_service_read_variables_preserve_unset_null_and_values. */
export async function test_service_read_variables_preserve_unset_null_and_values(...__args: any[]): any {
let call_count, client, expected_calls, history_response, index, operation_name, session, variables, warranty_response;
let {} = $.bind(__args, [], {}, [], null, null);
history_response = $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"serviceHistory": []}))], null);
warranty_response = $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"warranty": null}))], null);
session = $.call(FakeSession, [history_response, $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"serviceHistory": []}))], null), $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"serviceHistory": []}))], null), warranty_response, $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"warranty": null}))], null), $.call(graphql_response, [$.call(vehicle_data, [], Object.assign({}, {"warranty": null}))], null)], null);
client = $.call(make_client, [session], null);
$.assertEqual((await $.call($.attr(client, "async_get_vehicle_service_history"), ["VIN"], Object.assign({}, {"unit": UNSET}))), [], "test_service_reads_part_01.py:164: await client.async_get_vehicle_service_history('VIN', unit=UNSET) == ()");
$.assertEqual((await $.call($.attr(client, "async_get_vehicle_service_history"), ["VIN"], Object.assign({}, {"unit": null}))), [], "test_service_reads_part_01.py:165: await client.async_get_vehicle_service_history('VIN', unit=None) == ()");
$.assertEqual((await $.call($.attr(client, "async_get_vehicle_service_history"), ["VIN"], Object.assign({}, {"unit": $.attr(DistanceUnit, "KILOMETER")}))), [], "test_service_reads_part_01.py:166: await client.async_get_vehicle_service_history('VIN', unit=DistanceUnit.KILOMETER) == ()");
$.assert((((await $.call($.attr(client, "async_get_warranty_info"), ["VIN"], Object.assign({}, {"mileage": UNSET}))) === null)), "test_service_reads_part_01.py:167: await client.async_get_warranty_info('VIN', mileage=UNSET) is None");
$.assert((((await $.call($.attr(client, "async_get_warranty_info"), ["VIN"], Object.assign({}, {"mileage": null}))) === null)), "test_service_reads_part_01.py:168: await client.async_get_warranty_info('VIN', mileage=None) is None");
$.assert((((await $.call($.attr(client, "async_get_warranty_info"), ["VIN"], Object.assign({}, {"mileage": 12345}))) === null)), "test_service_reads_part_01.py:169: await client.async_get_warranty_info('VIN', mileage=12345) is None");
expected_calls = [["VehicleServiceHistory", Object.assign({}, {["vin"]: "VIN"})], ["VehicleServiceHistory", Object.assign({}, {["vin"]: "VIN"}, {["unit"]: null})], ["VehicleServiceHistory", Object.assign({}, {["vin"]: "VIN"}, {["unit"]: "KILOMETER"})], ["WarrantyInfo", Object.assign({}, {["vin"]: "VIN"})], ["WarrantyInfo", Object.assign({}, {["vin"]: "VIN"}, {["mileage"]: null})], ["WarrantyInfo", Object.assign({}, {["vin"]: "VIN"}, {["mileage"]: 12345})]];
for ([index, [operation_name, variables]] of $.iterable($.call($.enumerate, [expected_calls], null))) {
$.call(assert_graphql_call, [session, index, operation_name, variables], null);
}
call_count = $.call($.len, [$.attr(session, "calls")], null);
await $.raises($.ValueError, "UNKNOWN_VALUE", async () => {
(await $.call($.attr(client, "async_get_vehicle_service_history"), ["VIN"], Object.assign({}, {"unit": $.attr(DistanceUnit, "UNKNOWN_VALUE")})));
});
$.assertEqual($.call($.len, [$.attr(session, "calls")], null), call_count, "test_service_reads_part_01.py:188: len(session.calls) == call_count");
}

/** Translated upstream test_nullable_vehicle_and_service_response_chains_are_preserved. */
export function test_nullable_vehicle_and_service_response_chains_are_preserved(...__args: any[]): any {
let dealer_result, history_result, null_vehicle, parser, parsers, recalls_result, roadside_result;
let {} = $.bind(__args, [], {}, [], null, null);
null_vehicle = Object.assign({}, {["vehicle"]: null});
parsers = [parse_vehicle_preferred_dealer, parse_vehicle_recalls, parse_vehicle_roadside_assistance, parse_vehicle_service_history, parse_warranty_info];
for (parser of $.iterable(parsers)) {
$.assert((($.call(parser, [null_vehicle], null) === null)), "test_service_reads_part_01.py:201: parser(null_vehicle) is None");
}
$.assert((($.call(parse_vehicle_preferred_dealer, [$.call(vehicle_data, [], Object.assign({}, {"preferredDealer": null}))], null) === null)), "test_service_reads_part_01.py:203: parse_vehicle_preferred_dealer(vehicle_data(preferredDealer=None)) is None");
$.assert((($.call(parse_vehicle_roadside_assistance, [$.call(vehicle_data, [], Object.assign({}, {"roadsideAssistance": null}))], null) === null)), "test_service_reads_part_01.py:204: parse_vehicle_roadside_assistance(vehicle_data(roadsideAssistance=None)) is None");
$.assert((($.call(parse_warranty_info, [$.call(vehicle_data, [], Object.assign({}, {"warranty": null}))], null) === null)), "test_service_reads_part_01.py:205: parse_warranty_info(vehicle_data(warranty=None)) is None");
dealer_result = $.call(parse_vehicle_preferred_dealer, [$.call(vehicle_data, [], Object.assign({}, {"preferredDealer": $.call(preferred_dealer, [], Object.assign({}, {"id": null}, {"hashId": null}, {"name": null}, {"address": null}, {"hours": null}, {"phone": null}, {"servicePhone": null}, {"nativeServiceBooking": null}, {"schedulingUrlMobile": null}, {"location": null}, {"languagesSpoken": []}))}))], null);
recalls_result = $.call(parse_vehicle_recalls, [$.call(vehicle_data, [], Object.assign({}, {"recalls": [$.call(recall, [], Object.assign({}, {"nhtsaId": null}, {"recallCode": null}))]}))], null);
roadside_result = $.call(parse_vehicle_roadside_assistance, [$.call(vehicle_data, [], Object.assign({}, {"roadsideAssistance": Object.assign({}, {["__typename"]: "RoadsideAssistance"}, {["roadsideMonths"]: null}, {["roadsideMiles"]: null}, {["towingMonths"]: null}, {["towingMiles"]: null})}))], null);
history_result = $.call(parse_vehicle_service_history, [$.call(vehicle_data, [], Object.assign({}, {"serviceHistory": [$.call(service_history_entry, [], Object.assign({}, {"services": []}, {"comment": null}, {"maintenanceId": null}, {"serviceOperation": null}))]}))], null);
$.assertEqual(dealer_result, $.call(VehiclePreferredDealer, [], Object.assign({}, {"id": null}, {"hash_id": null}, {"name": null}, {"address": null}, {"hours": null}, {"phone": null}, {"service_phone": null}, {"native_service_booking": null}, {"scheduling_url_mobile": null}, {"location": null}, {"languages_spoken": []})), "test_service_reads_part_01.py:251: dealer_result == VehiclePreferredDealer(id=None, hash_id=None, name=None, address=None, hours=None, phone=None, service_phone=None, native_service_booking=None, scheduling_url_mobile=None, location=None, languages_spoken=())");
$.assert(((recalls_result !== null)), "test_service_reads_part_01.py:264: recalls_result is not None");
$.assert((($.attr($.get(recalls_result, 0), "nhtsa_id") === null)), "test_service_reads_part_01.py:265: recalls_result[0].nhtsa_id is None");
$.assert((($.attr($.get(recalls_result, 0), "recall_code") === null)), "test_service_reads_part_01.py:266: recalls_result[0].recall_code is None");
$.assertEqual(roadside_result, $.call(VehicleRoadsideAssistance, [null, null, null, null], null), "test_service_reads_part_01.py:267: roadside_result == VehicleRoadsideAssistance(None, None, None, None)");
$.assert(((history_result !== null)), "test_service_reads_part_01.py:268: history_result is not None");
$.assertEqual($.attr($.get(history_result, 0), "services"), [], "test_service_reads_part_01.py:269: history_result[0].services == ()");
$.assert((($.attr($.get(history_result, 0), "comment") === null)), "test_service_reads_part_01.py:270: history_result[0].comment is None");
$.assert((($.attr($.get(history_result, 0), "maintenance_id") === null)), "test_service_reads_part_01.py:271: history_result[0].maintenance_id is None");
$.assert((($.attr($.get(history_result, 0), "service_operation") === null)), "test_service_reads_part_01.py:272: history_result[0].service_operation is None");
}

/** Translated upstream test_future_response_enums_map_to_unknown_sentinels. */
export function test_future_response_enums_map_to_unknown_sentinels(...__args: any[]): any {
let future_info, history_result, recalls_result, warranty_result;
let {} = $.bind(__args, [], {}, [], null, null);
recalls_result = $.call(parse_vehicle_recalls, [$.call(vehicle_data, [], Object.assign({}, {"recalls": [$.call(recall, [], Object.assign({}, {"type": "FUTURE_RECALL_TYPE"}))]}))], null);
history_result = $.call(parse_vehicle_service_history, [$.call(vehicle_data, [], Object.assign({}, {"serviceHistory": [$.call(service_history_entry, [], Object.assign({}, {"mileageWithUnit": Object.assign({}, {["__typename"]: "Mileage"}, {["unit"]: "FURLONG"}, {["value"]: 1})}))]}))], null);
future_info = Object.assign({}, {["__typename"]: "WarrantyInfo"}, {["colorStatus"]: "BLUE"}, {["warrantyStatus"]: "PAUSED"}, {["totalMileage"]: 1}, {["totalMonths"]: "1"});
warranty_result = $.call(parse_warranty_info, [$.call(vehicle_data, [], Object.assign({}, {"warranty": $.call(warranty, [], Object.assign({}, {"warrantyInfo": future_info}))}))], null);
$.assert(((recalls_result !== null)), "test_service_reads_part_01.py:301: recalls_result is not None");
$.assert((($.attr($.get(recalls_result, 0), "type") === $.attr(RecallType, "UNKNOWN_VALUE"))), "test_service_reads_part_01.py:302: recalls_result[0].type is RecallType.UNKNOWN_VALUE");
$.assert(((history_result !== null)), "test_service_reads_part_01.py:303: history_result is not None");
$.assert((($.attr($.attr($.get(history_result, 0), "mileage"), "unit") === $.attr(DistanceUnit, "UNKNOWN_VALUE"))), "test_service_reads_part_01.py:304: history_result[0].mileage.unit is DistanceUnit.UNKNOWN_VALUE");
$.assert(((warranty_result !== null)), "test_service_reads_part_01.py:305: warranty_result is not None");
$.assert((($.attr($.attr(warranty_result, "warranty_info"), "color_status") === $.attr(WarrantyInfoColorStatus, "UNKNOWN_VALUE"))), "test_service_reads_part_01.py:306: warranty_result.warranty_info.color_status is WarrantyInfoColorStatus.UNKNOWN_VALUE");
$.assert((($.attr($.attr(warranty_result, "warranty_info"), "warranty_status") === $.attr(WarrantyInfoWarrantyStatus, "UNKNOWN_VALUE"))), "test_service_reads_part_01.py:307: warranty_result.warranty_info.warranty_status is WarrantyInfoWarrantyStatus.UNKNOWN_VALUE");
}

/** Translated upstream test_nullable_top_level_service_branches_are_valid. */
export function test_nullable_top_level_service_branches_are_valid(...__args: any[]): any {
let {"parser": parser, "payload": payload} = $.bind(__args, ["parser", "payload"], {}, [], null, null);
$.call(parser, [payload], null);
}

$.register("test_service_reads_part_01.py::test_service_reads_use_exact_operations_and_parse_full_responses", test_service_reads_use_exact_operations_and_parse_full_responses, []);

$.register("test_service_reads_part_01.py::test_service_read_variables_preserve_unset_null_and_values", test_service_read_variables_preserve_unset_null_and_values, []);

$.register("test_service_reads_part_01.py::test_nullable_vehicle_and_service_response_chains_are_preserved", test_nullable_vehicle_and_service_response_chains_are_preserved, []);

$.register("test_service_reads_part_01.py::test_future_response_enums_map_to_unknown_sentinels", test_future_response_enums_map_to_unknown_sentinels, []);

$.register("test_service_reads_part_01.py::test_nullable_top_level_service_branches_are_valid", test_nullable_top_level_service_branches_are_valid, [[["parser", "payload"], [[parse_vehicle_preferred_dealer, $.call(vehicle_data, [], Object.assign({}, {"preferredDealer": null}))], [parse_vehicle_recalls, $.call(vehicle_data, [], Object.assign({}, {"recalls": []}))], [parse_vehicle_roadside_assistance, $.call(vehicle_data, [], Object.assign({}, {"roadsideAssistance": null}))], [parse_vehicle_service_history, $.call(vehicle_data, [], Object.assign({}, {"serviceHistory": []}))], [parse_warranty_info, $.call(vehicle_data, [], Object.assign({}, {"warranty": null}))]]]]);
