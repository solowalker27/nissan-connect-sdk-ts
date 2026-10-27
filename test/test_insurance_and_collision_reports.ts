// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const hashlib = $.hashlib;

const Awaitable = $.Awaitable;
const Mapping = $.Mapping;

const UTC = $.UTC;
const datetime = $.datetime;

const cast = $.cast;

const pytest = $.pytest;

const ClientSession = $.ClientSession;

import { CollisionCenter, CollisionCenterAddress, CollisionCenterAddressInput, CollisionCenterDistance, CollisionCenterPhone, CollisionCenterProperties, CollisionCenterSearchInput, CollisionReportCreated, CollisionReportMetadataInput, CollisionReportPhotoDeleteError, CollisionReportPhotoInput, CollisionReportUserInput, CollisionReportVehicleInput, CoordinateInput, CreateCollisionReportInput, DistanceUnit, InsuranceContact, InsuranceStatus, NissanClient, PhotoSection, ReadOnlyError, Tokens, UnselectedCollisionReportResult, VehicleInsurance, VehicleInsuranceInput, VehicleInsuranceMutationSuccess, VehicleInsurer, operations } from "../src/index";

import { collision_center_variables, collision_report_photo_variables, create_collision_report_variables, delete_collision_report_photo_variables } from "../src/collision_report_inputs";

import { parse_collision_centers, parse_create_collision_report, parse_delete_collision_report_photo } from "../src/collision_report_parsing";

import { vehicle_insurance_variables } from "../src/insurance_inputs";

import { parse_add_vehicle_insurance, parse_insurers, parse_vehicle_insurance } from "../src/insurance_parsing";

export let EXPECTED_OPERATIONS = Object.assign({}, {["ADD_VEHICLE_INSURANCE"]: "c8a675f1bbfc0b0dd24aa9df7b1f7226baf678b0ef4bd9b41dae463104220ed8"}, {["GET_VEHICLE_INSURANCE"]: "98d754f8f84559168c53b6c10eed74518518f7fcbcbcc724c19a9540059ae045"}, {["INSURERS"]: "2da75bceb5084402739f948c14cc97a94ef50b9ed3541de666efc7f34f83f83f"}, {["UPDATE_VEHICLE_INSURANCE"]: "22e782bf419449844d927d69e0ebd38f7dfe52215ed063e0cb235146d08341a9"}, {["COLLISION_CENTERS"]: "b25799de489658f0d5a885c3d2ba31797db31166c9b37082f06e1daa39b9b27c"}, {["CREATE_COLLISION_REPORT"]: "3f4166b52642a9c8045bb9de06031ebe984e25c3f66f0bd38ebdf552f1ea6bfa"}, {["CREATE_COLLISION_REPORT_PDF"]: "19ca3ecdbedb59fb22a511c38b2515e6a2f3d342fd2a05905a72d74dfa75aee8"}, {["DELETE_PHOTO_FOR_COLLISION_REPORT"]: "c00cb1ae4ed0e9c46ddb6a9513265c5dc8c2f982ee4a74f7d97ac9e309fa107c"}, {["UPLOAD_PHOTO_FOR_COLLISION_REPORT"]: "3a98f3817495f4fc58c78d4a3127f53582c255f1aeb17b92998ffceb9537057e"});

/** Translated upstream FakeResponse. */
export class FakeResponse {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeResponse, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
this["status"] = 200;
this["_payload"] = Object.assign({}, {["data"]: data});
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
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeSession, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
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

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token", "id-token"], null)}, {"read_only": read_only}));
}

/** Translated upstream insurance_input. */
export function insurance_input(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(VehicleInsuranceInput, ["VIN", "insurer-id", "policy-number", "2027-08-01"], Object.assign({}, {"custom_insurance_name": null}));
}

/** Translated upstream collision_report_input. */
export function collision_report_input(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(CreateCollisionReportInput, [], Object.assign({}, {"vin": "VIN"}, {"vehicle": $.call(CollisionReportVehicleInput, ["Nissan", "Ariya", "2025"], Object.assign({}, {"license_plate": null}))}, {"user": $.call(CollisionReportUserInput, [], Object.assign({}, {"first_name": "Owner"}, {"email": null}))}, {"insurance_company_name": "Example Insurance"}, {"collision_metadata": $.call(CollisionReportMetadataInput, [], Object.assign({}, {"report_date_time": $.call(datetime, [2026, 7, 31, 16, 0], Object.assign({}, {"tzinfo": UTC}))}, {"odometer": 1234.5}, {"unit": $.attr(DistanceUnit, "MILE")}))}));
}

/** Translated upstream test_insurance_and_collision_operations_match_service_documents. */
export function test_insurance_and_collision_operations_match_service_documents(...__args: any[]): any {
let constant, document, expected_id, operation_id;
let {} = $.bind(__args, [], {}, [], null, null);
for ([constant, expected_id] of $.iterable($.call($.attr(EXPECTED_OPERATIONS, "items"), [], null))) {
document = $.call($.getattr, [operations, constant], null);
operation_id = $.call($.getattr, [operations, ($.str(constant) + "_OPERATION_ID")], null);
$.assertEqual(operation_id, expected_id, "test_insurance_and_collision_reports.py:148: operation_id == expected_id");
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), expected_id, "test_insurance_and_collision_reports.py:149: hashlib.sha256(document.encode()).hexdigest() == expected_id");
}
}

/** Translated upstream test_insurance_and_collision_inputs_preserve_omitted_and_null_fields. */
export function test_insurance_and_collision_inputs_preserve_omitted_and_null_fields(...__args: any[]): any {
let photo, search;
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(vehicle_insurance_variables, [$.call(insurance_input, [], null)], null), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "VIN"}, {["insurerId"]: "insurer-id"}, {["policyNumber"]: "policy-number"}, {["expiryDate"]: "2027-08-01"}, {["customInsuranceName"]: null})}), "test_insurance_and_collision_reports.py:153: vehicle_insurance_variables(insurance_input()) == {'input': {'vin': 'VIN', 'insurerId': 'insurer-id', 'policyNumber': 'policy-number', 'expiryDate': '2027-08-01', 'customInsuranceName': None}}");
search = $.call(CollisionCenterSearchInput, ["VIN"], Object.assign({}, {"coordinates": $.call(CoordinateInput, [35.9, -(86.9)], null)}, {"address": $.call(CollisionCenterAddressInput, [], Object.assign({}, {"country": "US"}, {"postal_code": null}))}));
$.assertEqual($.call(collision_center_variables, [search], null), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "VIN"}, {["coordinates"]: Object.assign({}, {["latitude"]: 35.9}, {["longitude"]: -(86.9)})}, {["address"]: Object.assign({}, {["country"]: "US"}, {["postalCode"]: null})})}), "test_insurance_and_collision_reports.py:167: collision_center_variables(search) == {'input': {'vin': 'VIN', 'coordinates': {'latitude': 35.9, 'longitude': -86.9}, 'address': {'country': 'US', 'postalCode': None}}}");
$.assertEqual($.call(create_collision_report_variables, [$.call(collision_report_input, [], null)], null), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "VIN"}, {["user"]: Object.assign({}, {["firstName"]: "Owner"}, {["email"]: null})}, {["insuranceCompanyName"]: "Example Insurance"}, {["vehicle"]: Object.assign({}, {["make"]: "Nissan"}, {["model"]: "Ariya"}, {["modelYear"]: "2025"}, {["licensePlate"]: null})}, {["collisionMetadata"]: Object.assign({}, {["reportDateTime"]: "2026-07-31T16:00:00+00:00"}, {["odometer"]: 1234.5}, {["unit"]: "MILE"})})}), "test_insurance_and_collision_reports.py:174: create_collision_report_variables(collision_report_input()) == {'input': {'vin': 'VIN', 'user': {'firstName': 'Owner', 'email': None}, 'insuranceCompanyName': 'Example Insurance', 'vehicle': {'make': 'Nissan', 'model': 'Ariya', 'modelYear': '2025', 'licensePlate': None}, 'collisionMetadata': {'reportDateTime': '2026-07-31T16:00:00+00:00', 'odometer': 1234.5, 'unit': 'MILE'}}}");
photo = $.call(CollisionReportPhotoInput, ["base64-image"], Object.assign({}, {"filename": null}));
$.assertEqual($.call(collision_report_photo_variables, ["VIN", "claim", photo, $.attr(PhotoSection, "THREE")], null), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "VIN"}, {["collisionId"]: "claim"}, {["photo"]: Object.assign({}, {["filename"]: null}, {["attachment"]: "base64-image"})}, {["photoSection"]: "THREE"})}), "test_insurance_and_collision_reports.py:193: collision_report_photo_variables('VIN', 'claim', photo, PhotoSection.THREE) == {'input': {'vin': 'VIN', 'collisionId': 'claim', 'photo': {'filename': None, 'attachment': 'base64-image'}, 'photoSection': 'THREE'}}");
$.raises($.ValueError, "UNKNOWN_VALUE cannot be sent", () => {
$.call(delete_collision_report_photo_variables, ["VIN", "claim", $.attr(PhotoSection, "UNKNOWN_VALUE")], null);
});
}

/** Translated upstream test_parse_insurance_catalog_policy_and_mutation. */
export function test_parse_insurance_catalog_policy_and_mutation(...__args: any[]): any {
let contact, insurer, insurer_data;
let {} = $.bind(__args, [], {}, [], null, null);
contact = $.call(InsuranceContact, ["Claims", "+15555550100"], null);
insurer = $.call(VehicleInsurer, ["insurer-id", "Example Insurance", [contact, null]], null);
insurer_data = Object.assign({}, {["__typename"]: "Insurer"}, {["id"]: "insurer-id"}, {["name"]: "Example Insurance"}, {["contacts"]: [Object.assign({}, {["__typename"]: "Contact"}, {["location"]: "Claims"}, {["phoneNumber"]: "+15555550100"}), null]});
$.assertEqual($.call(parse_insurers, [Object.assign({}, {["insurers"]: [insurer_data, null]})], null), [insurer, null], "test_insurance_and_collision_reports.py:225: parse_insurers({'insurers': [insurer_data, None]}) == (insurer, None)");
$.assertEqual($.call(parse_vehicle_insurance, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "Vehicle"}, {["insurance"]: Object.assign({}, {["__typename"]: "Insurance"}, {["id"]: "insurance-id"}, {["policyNumber"]: "policy-number"}, {["expirationDate"]: "2027-08-01"}, {["status"]: "active"}, {["insurer"]: insurer_data})})})], null), $.call(VehicleInsurance, ["insurance-id", "policy-number", "2027-08-01", $.attr(InsuranceStatus, "ACTIVE"), insurer], null), "test_insurance_and_collision_reports.py:226: parse_vehicle_insurance({'vehicle': {'__typename': 'Vehicle', 'insurance': {'__typename': 'Insurance', 'id': 'insurance-id', 'policyNumber': 'policy-number', 'expirationDate': '2027-08-01', 'status': 'active', 'insurer': insurer_data}}}) == VehicleInsurance('insurance-id', 'policy-number', '2027-08-01', InsuranceStatus.ACTIVE, insurer)");
$.assertEqual($.call(parse_add_vehicle_insurance, [Object.assign({}, {["addVehicleInsurance"]: Object.assign({}, {["__typename"]: "AddVehicleInsuranceSuccess"}, {["success"]: true})})], null), $.call(VehicleInsuranceMutationSuccess, [true], null), "test_insurance_and_collision_reports.py:247: parse_add_vehicle_insurance({'addVehicleInsurance': {'__typename': 'AddVehicleInsuranceSuccess', 'success': True}}) == VehicleInsuranceMutationSuccess(True)");
}

/** Translated upstream test_parse_collision_centers_and_mutation_unions. */
export function test_parse_collision_centers_and_mutation_unions(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_collision_centers, [Object.assign({}, {["collisionCenters"]: [Object.assign({}, {["__typename"]: "CollisionCenter"}, {["id"]: "center-id"}, {["name"]: "Nissan Collision"}, {["address"]: Object.assign({}, {["__typename"]: "Address"}, {["address1"]: "1 Main St"}, {["address2"]: null}, {["city"]: "Franklin"}, {["state"]: "TN"}, {["postalCode"]: "37064"}, {["country"]: "US"})}, {["distance"]: Object.assign({}, {["__typename"]: "Distance"}, {["value"]: 8}, {["unit"]: "MILE"}, {["driveTime"]: null})}, {["phones"]: [Object.assign({}, {["__typename"]: "Phone"}, {["isPrimary"]: true}, {["number"]: "+15555550101"}), null]}, {["emails"]: ["claims@example.test", null]}, {["website"]: null}, {["properties"]: Object.assign({}, {["__typename"]: "Properties"}, {["nissanCertified"]: true}, {["evCertified"]: null}, {["p1669718Status"]: null}, {["relevanceScore"]: 0.9}, {["smartFilterQualified"]: null}, {["participantProfileStatus"]: null}, {["nissanGTR"]: false}, {["typeFacility"]: null})}), null]})], null), [$.call(CollisionCenter, ["center-id", "Nissan Collision", $.call(CollisionCenterAddress, ["1 Main St", null, "Franklin", "TN", "37064", "US"], null), $.call(CollisionCenterDistance, [8.0, $.attr(DistanceUnit, "MILE"), null], null), [$.call(CollisionCenterPhone, [true, "+15555550101"], null), null], ["claims@example.test", null], null, $.call(CollisionCenterProperties, [true, null, null, 0.9, null, null, false, null], null)], null), null], "test_insurance_and_collision_reports.py:258: parse_collision_centers({'collisionCenters': [{'__typename': 'CollisionCenter', 'id': 'center-id', 'name': 'Nissan Collision', 'address': {'__typename': 'Address', 'address1': '1 Main St', 'address2': None, 'city': 'Franklin', 'state': 'TN', 'postalCode': '37064', 'country': 'US'}, 'distance': {'__typename': 'Distance', 'value': 8, 'unit': 'MILE', 'driveTime': None}, 'phones': [{'__typename': 'Phone', 'isPrimary': True, 'number': '+15555550101'}, None], 'emails': ['claims@example.test', None], 'website': None, 'properties': {'__typename': 'Properties', 'nissanCertified': True, 'evCertified': None, 'p1669718Status': None, 'relevanceScore': 0.9, 'smartFilterQualified': None, 'participantProfileStatus': None, 'nissanGTR': False, 'typeFacility': None}}, None]}) == (CollisionCenter('center-id', 'Nissan Collision', CollisionCenterAddress('1 Main St', None, 'Franklin', 'TN', '37064', 'US'), CollisionCenterDistance(8.0, DistanceUnit.MILE, None), (CollisionCenterPhone(True, '+15555550101'), None), ('claims@example.test', None), None, CollisionCenterProperties(True, None, None, 0.9, None, None, False, None)), None)");
$.assertEqual($.call(parse_create_collision_report, [Object.assign({}, {["createCollisionReport"]: Object.assign({}, {["__typename"]: "CreateCollisionReportSuccess"}, {["collisionId"]: "claim"})})], null), $.call(CollisionReportCreated, ["claim"], null), "test_insurance_and_collision_reports.py:318: parse_create_collision_report({'createCollisionReport': {'__typename': 'CreateCollisionReportSuccess', 'collisionId': 'claim'}}) == CollisionReportCreated('claim')");
$.assertEqual($.call(parse_delete_collision_report_photo, [Object.assign({}, {["deletePhotoForCollisionReport"]: Object.assign({}, {["__typename"]: "DeletePhotoForCollisionReportError"}, {["message"]: null})})], null), $.call(CollisionReportPhotoDeleteError, [null], null), "test_insurance_and_collision_reports.py:326: parse_delete_collision_report_photo({'deletePhotoForCollisionReport': {'__typename': 'DeletePhotoForCollisionReportError', 'message': None}}) == CollisionReportPhotoDeleteError(None)");
$.assertEqual($.call(parse_create_collision_report, [Object.assign({}, {["createCollisionReport"]: Object.assign({}, {["__typename"]: "FutureCollisionResult"})})], null), $.call(UnselectedCollisionReportResult, ["FutureCollisionResult"], null), "test_insurance_and_collision_reports.py:334: parse_create_collision_report({'createCollisionReport': {'__typename': 'FutureCollisionResult'}}) == UnselectedCollisionReportResult('FutureCollisionResult')");
}

/** Translated upstream test_client_wires_all_insurance_and_collision_report_operations. */
export async function test_client_wires_all_insurance_and_collision_report_operations(...__args: any[]): any {
let call, insurance, payload, payloads, photo, report, sdk, search, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [Object.assign({}, {["insurers"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["vehicle"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["addVehicleInsurance"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["updateVehicleInsurance"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["collisionCenters"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["createCollisionReport"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["createCollisionReportPDF"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["deletePhotoForCollisionReport"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["uploadPhotoForCollisionReport"]: null})], null)], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
insurance = $.call(insurance_input, [], null);
search = $.call(CollisionCenterSearchInput, ["VIN"], Object.assign({}, {"claim_id": "claim"}));
report = $.call(collision_report_input, [], null);
photo = $.call(CollisionReportPhotoInput, ["base64-image"], null);
$.assert((((await $.call($.attr(sdk, "async_get_insurers"), [], null)) === null)), "test_insurance_and_collision_reports.py:357: await sdk.async_get_insurers() is None");
$.assert((((await $.call($.attr(sdk, "async_get_vehicle_insurance"), ["VIN"], null)) === null)), "test_insurance_and_collision_reports.py:358: await sdk.async_get_vehicle_insurance('VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_add_vehicle_insurance"), [insurance], null)) === null)), "test_insurance_and_collision_reports.py:359: await sdk.async_add_vehicle_insurance(insurance) is None");
$.assert((((await $.call($.attr(sdk, "async_update_vehicle_insurance"), [insurance], null)) === null)), "test_insurance_and_collision_reports.py:360: await sdk.async_update_vehicle_insurance(insurance) is None");
$.assert((((await $.call($.attr(sdk, "async_get_collision_centers"), [search], null)) === null)), "test_insurance_and_collision_reports.py:361: await sdk.async_get_collision_centers(search) is None");
$.assert((((await $.call($.attr(sdk, "async_create_collision_report"), [report], null)) === null)), "test_insurance_and_collision_reports.py:362: await sdk.async_create_collision_report(report) is None");
$.assert((((await $.call($.attr(sdk, "async_create_collision_report_pdf"), ["claim"], null)) === null)), "test_insurance_and_collision_reports.py:363: await sdk.async_create_collision_report_pdf('claim') is None");
$.assert((((await $.call($.attr(sdk, "async_delete_photo_for_collision_report"), ["VIN", "claim", $.attr(PhotoSection, "ONE")], null)) === null)), "test_insurance_and_collision_reports.py:364: await sdk.async_delete_photo_for_collision_report('VIN', 'claim', PhotoSection.ONE) is None");
$.assert((((await $.call($.attr(sdk, "async_upload_photo_for_collision_report"), ["VIN", "claim", photo, $.attr(PhotoSection, "ONE")], null)) === null)), "test_insurance_and_collision_reports.py:367: await sdk.async_upload_photo_for_collision_report('VIN', 'claim', photo, PhotoSection.ONE) is None");
payloads = [];
for (call of $.iterable($.attr(session, "calls"))) {
payload = $.get(call, "json");
$.assert($.call($.isinstance, [payload, Mapping], null), "test_insurance_and_collision_reports.py:380: isinstance(payload, Mapping)");
$.call($.attr(payloads, "append"), [payload], null);
}
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "operationName")); } return __out; })(), ["Insurers", "GetVehicleInsurance", "AddVehicleInsurance", "UpdateVehicleInsurance", "CollisionCenters", "CreateCollisionReport", "CreateCollisionReportPDF", "DeletePhotoForCollisionReport", "UploadPhotoForCollisionReport"], "test_insurance_and_collision_reports.py:382: [payload['operationName'] for payload in payloads] == ['Insurers', 'GetVehicleInsurance', 'AddVehicleInsurance', 'UpdateVehicleInsurance', 'CollisionCenters', 'CreateCollisionReport', 'CreateCollisionReportPDF', 'DeletePhotoForCollisionReport', 'UploadPhotoForCollisionReport']");
}

/** Translated upstream test_read_only_mode_blocks_all_insurance_and_collision_mutations. */
export async function test_read_only_mode_blocks_all_insurance_and_collision_mutations(...__args: any[]): any {
let call, calls, photo, sdk, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": true}));
photo = $.call(CollisionReportPhotoInput, ["base64-image"], null);
calls = [$.call($.attr(sdk, "async_add_vehicle_insurance"), [$.call(insurance_input, [], null)], null), $.call($.attr(sdk, "async_update_vehicle_insurance"), [$.call(insurance_input, [], null)], null), $.call($.attr(sdk, "async_create_collision_report"), [$.call(collision_report_input, [], null)], null), $.call($.attr(sdk, "async_create_collision_report_pdf"), ["claim"], null), $.call($.attr(sdk, "async_delete_photo_for_collision_report"), ["VIN", "claim", $.attr(PhotoSection, "ONE")], null), $.call($.attr(sdk, "async_upload_photo_for_collision_report"), ["VIN", "claim", photo, $.attr(PhotoSection, "ONE")], null)];
for (call of $.iterable(calls)) {
await $.raises(ReadOnlyError, null, async () => {
(await call);
});
}
$.assertEqual($.attr(session, "calls"), [], "test_insurance_and_collision_reports.py:417: session.calls == []");
}

$.register("test_insurance_and_collision_reports.py::test_insurance_and_collision_operations_match_service_documents", test_insurance_and_collision_operations_match_service_documents, []);

$.register("test_insurance_and_collision_reports.py::test_insurance_and_collision_inputs_preserve_omitted_and_null_fields", test_insurance_and_collision_inputs_preserve_omitted_and_null_fields, []);

$.register("test_insurance_and_collision_reports.py::test_parse_insurance_catalog_policy_and_mutation", test_parse_insurance_catalog_policy_and_mutation, []);

$.register("test_insurance_and_collision_reports.py::test_parse_collision_centers_and_mutation_unions", test_parse_collision_centers_and_mutation_unions, []);

$.register("test_insurance_and_collision_reports.py::test_client_wires_all_insurance_and_collision_report_operations", test_client_wires_all_insurance_and_collision_report_operations, []);

$.register("test_insurance_and_collision_reports.py::test_read_only_mode_blocks_all_insurance_and_collision_mutations", test_read_only_mode_blocks_all_insurance_and_collision_mutations, []);
