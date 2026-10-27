// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const re = $.re;

const Mapping = $.Mapping;

const cast = $.cast;

const ClientSession = $.ClientSession;

import { NissanClient, Tokens } from "../src/index";

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

export let EXPECTED_QUERY_TOKEN_HASHES = Object.assign({}, {["VehiclePreferredDealer"]: "0f31228d3c3f194d4951c8eda4477e79a4f59f44006a6b2a9299f1f7d8f57f41"}, {["VehicleRecalls"]: "7990ac9acf158db899f2bec6ba65034216db0f4c660078572c41a8c3b30f9748"}, {["VehicleRoadsideAssistance"]: "be0546f4ee9a7eab4243b1378caa301d15fcc02ee6bedccc33c5b6e8720252b3"}, {["VehicleServiceHistory"]: "6df1797f48fb3832587e2d9407c38106632cc3c4ac40056d26223a0359ec4b11"}, {["WarrantyInfo"]: "4be940f109c5d0f868acf7f8700da4d332bd34cf52bc28300811d6524512f26a"});

/** Translated upstream graphql_response. */
export function graphql_response(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
return $.call(FakeResponse, [Object.assign({}, {["data"]: $.call($.dict, [data], null)})], null);
}

/** Translated upstream vehicle_data. */
export function vehicle_data(...__args: any[]): any {
let {"fields": fields} = $.bind(__args, [], {}, [], null, "fields");
return Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVKVehicle"}, fields)});
}

/** Translated upstream preferred_dealer. */
export function preferred_dealer(...__args: any[]): any {
let result;
let {"overrides": overrides} = $.bind(__args, [], {}, [], null, "overrides");
result = Object.assign({}, {["__typename"]: "Dealer"}, {["id"]: "dealer-id"}, {["hashId"]: "dealer-hash"}, {["name"]: "Nissan San Diego"}, {["address"]: Object.assign({}, {["__typename"]: "Address"}, {["address1"]: "1 Main St"}, {["address2"]: "Suite 2"}, {["city"]: "San Diego"}, {["state"]: "CA"}, {["postalCode"]: "92101"}, {["country"]: "US"})}, {["hours"]: "Mon-Fri"}, {["phone"]: "555-0100"}, {["servicePhone"]: "555-0101"}, {["nativeServiceBooking"]: true}, {["schedulingUrlMobile"]: "https://example.test/service"}, {["location"]: Object.assign({}, {["__typename"]: "Location"}, {["latitude"]: 32.7157}, {["longitude"]: -(117.1611)})}, {["languagesSpoken"]: ["English", "Spanish"]});
$.call($.attr(result, "update"), [overrides], null);
return result;
}

/** Translated upstream recall. */
export function recall(...__args: any[]): any {
let result;
let {"overrides": overrides} = $.bind(__args, [], {}, [], null, "overrides");
result = Object.assign({}, {["__typename"]: "Recall"}, {["effectiveDate"]: "2026-02-03T04:05:06-08:00"}, {["nhtsaId"]: "26V001"}, {["primaryDescription"]: "Primary description"}, {["remedyDescription"]: "Remedy description"}, {["riskDescription"]: "Risk description"}, {["title"]: "Campaign title"}, {["type"]: "RECALL"}, {["recallCode"]: "PC001"});
$.call($.attr(result, "update"), [overrides], null);
return result;
}

/** Translated upstream service_history_entry. */
export function service_history_entry(...__args: any[]): any {
let result;
let {"overrides": overrides} = $.bind(__args, [], {}, [], null, "overrides");
result = Object.assign({}, {["__typename"]: "ServiceHistory"}, {["mileageWithUnit"]: Object.assign({}, {["__typename"]: "Mileage"}, {["unit"]: "MILE"}, {["value"]: 12345})}, {["serviceDate"]: "2026-03-04T05:06:07Z"}, {["dealerName"]: "Nissan San Diego"}, {["dealerCode"]: "CA001"}, {["services"]: ["Inspection", "Tire rotation"]}, {["comment"]: "Completed"}, {["maintenanceId"]: 42}, {["serviceOperation"]: Object.assign({}, {["__typename"]: "ServiceOperation"}, {["serviceCategoryId"]: "category-id"}, {["serviceCategoryName"]: "Maintenance"}, {["opCodeID"]: "OP-1"}, {["opCodeDescription"]: "Scheduled service"})});
$.call($.attr(result, "update"), [overrides], null);
return result;
}

/** Translated upstream warranty. */
export function warranty(...__args: any[]): any {
let result;
let {"overrides": overrides} = $.bind(__args, [], {}, [], null, "overrides");
result = Object.assign({}, {["__typename"]: "Warranty"}, {["warrantyInfo"]: Object.assign({}, {["__typename"]: "WarrantyInfo"}, {["colorStatus"]: "GREEN"}, {["warrantyStatus"]: "ACTIVE"}, {["totalMileage"]: 36000}, {["totalMonths"]: "36"})}, {["startPeriod"]: Object.assign({}, {["__typename"]: "WarrantyPeriod"}, {["mileage"]: 0}, {["date"]: "2024-01-02"})}, {["endPeriod"]: Object.assign({}, {["__typename"]: "WarrantyPeriod"}, {["mileage"]: 36000}, {["date"]: "2027-01-02"})}, {["currentPeriod"]: Object.assign({}, {["__typename"]: "WarrantyPeriod"}, {["mileage"]: 12000}, {["date"]: "2026-07-31"})});
$.call($.attr(result, "update"), [overrides], null);
return result;
}

/** Translated upstream without_field. */
export function without_field(...__args: any[]): any {
let result;
let {"value": value, "field": field} = $.bind(__args, ["value", "field"], {}, [], null, null);
result = $.call($.dict, [value], null);
delete result[field];
return result;
}

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session} = $.bind(__args, ["session"], {}, [], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"read_only": true}, {"tokens": TOKENS}));
}

/** Translated upstream assert_graphql_call. */
export function assert_graphql_call(...__args: any[]): any {
let document, payload, tokens;
let {"session": session, "index": index, "operation_name": operation_name, "variables": variables} = $.bind(__args, ["session", "index", "operation_name", "variables"], {}, [], null, null);
payload = $.call($.attr($.get($.attr(session, "calls"), index), "get"), ["json"], null);
$.assert($.call($.isinstance, [payload, Mapping], null), "test_service_reads.py:188: isinstance(payload, Mapping)");
$.assert(($.eq($.get(payload, "operationName"), operation_name)), "test_service_reads.py:189: payload['operationName'] == operation_name");
$.assert(($.eq($.get(payload, "variables"), variables)), "test_service_reads.py:190: payload['variables'] == variables");
document = $.get(payload, "query");
$.assert($.call($.isinstance, [document, $.str], null), "test_service_reads.py:192: isinstance(document, str)");
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), $.get(EXPECTED_QUERY_TOKEN_HASHES, operation_name))), "test_service_reads.py:194: hashlib.sha256(tokens.encode()).hexdigest() == EXPECTED_QUERY_TOKEN_HASHES[operation_name]");
}
