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

import { CreatedServiceAppointment, Dealer, DistanceUnit, MaintenanceInterval, MaintenanceMileageInput, MaintenanceVisit, MaintenanceVisitAlignment, MaintenanceVisits, NissanClient, ReadOnlyError, ServiceAppointmentInput, ServiceAppointmentTimeSlot, ServiceCode, ServiceCustomerInput, ServiceLocationType, ServiceOdometerInput, Tokens, UnselectedDealerResult, operations } from "../src/index";

import { all_dealers_variables, dealers_by_search_variables, maintenance_visits_variables, service_appointment_variables, service_time_slots_variables, update_service_appointment_variables } from "../src/dealer_inputs";

import { parse_create_service_appointment, parse_dealers, parse_maintenance_visits, parse_service_appointment_time_slots, parse_update_service_appointment, parse_update_vehicle_preferred_dealer } from "../src/dealer_parsing";

export let EXPECTED_OPERATIONS = Object.assign({}, {["ALL_DEALERS"]: "581b6c84a95b602859bc103577eb32e43e0a4cbbef84bb3c09940dd5d0b1dd2b"}, {["CANCEL_SERVICE_APPOINTMENT"]: "02cf1da9ff930c6352ef4e30309db2a8c4f1e84ab3f265952d85eec590b4bd39"}, {["CREATE_SERVICE_APPOINTMENT"]: "980f2a99cdde6b924e005c338dcc6185f873242f457a0b2fe42fd8d3b00f173d"}, {["DEALERS"]: "99bcf20cccacbd902e4f112827461c5f7dcca0c3b011f3260dcc95c531f4238f"}, {["DEALERS_BY_SEARCH"]: "c4bd356f59315ac2ef1d68fedfe7d578dfd1945386f0aa7ed4bb8f3ca0561e5d"}, {["DEALS_AND_IMAGES_BY_DEALER_ID"]: "52f73c33747c221c3a5de53bf8f19152e9827cc029a837f2de747e05fc4e26e5"}, {["GENERATE_ALL_VISITS"]: "6a4012bcf0ec70ac7d3a36b5b178600b4c5651a2c8105cb019921db11c36b9cb"}, {["GENERATE_NEXT_VISIT"]: "dcef3f6fdab4037776eb0887d24210c2e55113dd5b078578293c0f727b1424e8"}, {["GENERATE_NEXT_VISIT_NO_SEVERITY"]: "c53205b1dd6493a9c7813171c72985d5cb080f12bc2c598a48efb00f95f6fb92"}, {["GET_DEALER_BY_ID"]: "eb2c4869c9e7332631a50a1720e871dc20c66f1f28cd7bdf48c36f4005b003ff"}, {["SERVICE_ADVISORS"]: "dc0c2a11cf2f930d82387960dbbd9ca2de0cb71e72874f35a78de66e5ea44d9d"}, {["SERVICE_APPOINTMENT_TIME_SLOTS"]: "f480da9f36ebfcf7303cf64a43fa317019f79316589173f889adddd25563e644"}, {["SERVICE_APPOINTMENTS"]: "e096a72fdf7c1e4751265df4abc9715e97cd0efa0ce990288f26b26fb70fa77b"}, {["SERVICE_CATEGORIES"]: "7e1c8de493a29b1adeedba76185abd9fc6a75e33be48526d5c764e0780248e36"}, {["SERVICE_OPERATIONS"]: "0b070e2e51e0fb5143aec45d1b128c7fe4dc85a633a7e92ebaac758ed4e4a2e1"}, {["SERVICE_OPERATIONS_BY_MILEAGE"]: "35d58f1328e5fa4e15722fbe3131841850530d23c1a2cad34447ae5819b502f7"}, {["TRANSPORTATION_OPTIONS"]: "dfb82c466e1a2597905a7e83ad944b8d7b7aba30774ec2ee6cbe941ac822e101"}, {["UPDATE_SERVICE_APPOINTMENT"]: "10ea93855682f0dc2d4ea2a50799e6e3086bc24a61ee60c915f1c443f2d1e356"}, {["UPDATE_VEHICLE_PREFERRED_DEALER"]: "ee96579c755162d75f970f3e33d67e58bf8b2e79a36c37c653d24731653cc33d"});

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

/** Translated upstream appointment. */
export function appointment(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(ServiceAppointmentInput, [], Object.assign({}, {"vin": "VIN"}, {"dealer_id": "DEALER"}, {"appointment_date": $.call(datetime, [2026, 8, 5, 10], Object.assign({}, {"tzinfo": UTC}))}, {"contact_methods": $.call(ServiceCustomerInput, ["+15555550100", "owner@example.test"], null)}, {"service_operations": []}, {"odometer": $.call(ServiceOdometerInput, [$.attr(DistanceUnit, "MILE"), 12000], null)}));
}

/** Translated upstream test_dealer_and_service_operations_match_service_documents. */
export function test_dealer_and_service_operations_match_service_documents(...__args: any[]): any {
let constant, document, expected_id, operation_id;
let {} = $.bind(__args, [], {}, [], null, null);
for ([constant, expected_id] of $.iterable($.call($.attr(EXPECTED_OPERATIONS, "items"), [], null))) {
document = $.call($.getattr, [operations, constant], null);
operation_id = $.call($.getattr, [operations, ($.str(constant) + "_OPERATION_ID")], null);
$.assertEqual(operation_id, expected_id, "test_dealers_and_service_appointments.py:138: operation_id == expected_id");
$.assertEqual($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), expected_id, "test_dealers_and_service_appointments.py:139: hashlib.sha256(document.encode()).hexdigest() == expected_id");
}
}

/** Translated upstream test_dealer_and_service_inputs_preserve_generated_shapes. */
export function test_dealer_and_service_inputs_preserve_generated_shapes(...__args: any[]): any {
let mileage;
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(all_dealers_variables, [], Object.assign({}, {"vin": null})), Object.assign({}, {["vin"]: null}), "test_dealers_and_service_appointments.py:143: all_dealers_variables(vin=None) == {'vin': None}");
$.assertEqual($.call(dealers_by_search_variables, [], Object.assign({}, {"service_code": $.attr(ServiceCode, "SERVICE")}, {"radius": 50}, {"latitude": 35.9}, {"longitude": -(86.8)})), Object.assign({}, {["serviceCode"]: "SERVICE"}, {["radius"]: 50}, {["latitude"]: 35.9}, {["longitude"]: -(86.8)}), "test_dealers_and_service_appointments.py:144: dealers_by_search_variables(service_code=ServiceCode.SERVICE, radius=50, latitude=35.9, longitude=-86.8) == {'serviceCode': 'SERVICE', 'radius': 50, 'latitude': 35.9, 'longitude': -86.8}");
mileage = $.call(MaintenanceMileageInput, [], Object.assign({}, {"total_mile": 12000}));
$.assertEqual($.call(maintenance_visits_variables, ["VIN", mileage, "SEVERITY", 1, 2], null), Object.assign({}, {["vin"]: "VIN"}, {["mileage"]: Object.assign({}, {["totalMile"]: 12000})}, {["severityId"]: "SEVERITY"}, {["pastVisits"]: 1}, {["futureVisits"]: 2}), "test_dealers_and_service_appointments.py:156: maintenance_visits_variables('VIN', mileage, 'SEVERITY', 1, 2) == {'vin': 'VIN', 'mileage': {'totalMile': 12000}, 'severityId': 'SEVERITY', 'pastVisits': 1, 'futureVisits': 2}");
$.assertEqual($.call(service_appointment_variables, [$.call(appointment, [], null)], null), Object.assign({}, {["appointment"]: Object.assign({}, {["vin"]: "VIN"}, {["dealerId"]: "DEALER"}, {["appointmentDate"]: "2026-08-05T10:00:00+00:00"}, {["contactMethods"]: Object.assign({}, {["phone"]: "+15555550100"}, {["email"]: "owner@example.test"})}, {["serviceOperations"]: []}, {["odometer"]: Object.assign({}, {["unit"]: "MILE"}, {["value"]: 12000})})}), "test_dealers_and_service_appointments.py:163: service_appointment_variables(appointment()) == {'appointment': {'vin': 'VIN', 'dealerId': 'DEALER', 'appointmentDate': '2026-08-05T10:00:00+00:00', 'contactMethods': {'phone': '+15555550100', 'email': 'owner@example.test'}, 'serviceOperations': [], 'odometer': {'unit': 'MILE', 'value': 12000}}}");
$.raises($.ValueError, "UNKNOWN_VALUE cannot be sent", () => {
$.call(dealers_by_search_variables, [], Object.assign({}, {"service_code": $.attr(ServiceCode, "UNKNOWN_VALUE")}));
});
}

/** Translated upstream test_parse_dealer_search_and_time_slots. */
export function test_parse_dealer_search_and_time_slots(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_dealers, [Object.assign({}, {["dealers"]: [Object.assign({}, {["__typename"]: "Dealer"}, {["dealerId"]: "DEALER"}, {["dealerName"]: "Nissan Dealer"}, {["dealerAddressLine1"]: "1 Main St"}, {["dealerAddressLine2"]: null}, {["dealerCityName"]: "Franklin"}, {["dealerStateCode"]: "TN"}, {["dealerCountry"]: "US"}, {["dealerZip"]: "37064"}, {["dealerLatitude"]: 35.9}, {["dealerLongitude"]: -(86.8)}, {["dealerPhoneNumber"]: null}, {["dealerServicePhone"]: null}, {["dealerServiceHours"]: null}, {["dealerOnlineSchedulingMobileUrl"]: null}, {["nativeServiceBooking"]: true}, {["languagesSpoken"]: ["English"]})]})], null), [$.call(Dealer, ["DEALER", "Nissan Dealer", null, "1 Main St", null, 35.9, -(86.8), "37064", "US", "TN", true, null, "Franklin", null, null, null, ["English"], null, null, null], null)], "test_dealers_and_service_appointments.py:181: parse_dealers({'dealers': [{'__typename': 'Dealer', 'dealerId': 'DEALER', 'dealerName': 'Nissan Dealer', 'dealerAddressLine1': '1 Main St', 'dealerAddressLine2': None, 'dealerCityName': 'Franklin', 'dealerStateCode': 'TN', 'dealerCountry': 'US', 'dealerZip': '37064', 'dealerLatitude': 35.9, 'dealerLongitude': -86.8, 'dealerPhoneNumber': None, 'dealerServicePhone': None, 'dealerServiceHours': None, 'dealerOnlineSchedulingMobileUrl': None, 'nativeServiceBooking': True, 'languagesSpoken': ['English']}]}) == (Dealer('DEALER', 'Nissan Dealer', None, '1 Main St', None, 35.9, -86.8, '37064', 'US', 'TN', True, None, 'Franklin', None, None, None, ('English',), None, None, None),)");
$.assertEqual($.call(parse_service_appointment_time_slots, [Object.assign({}, {["serviceAppointmentTimeSlots"]: [Object.assign({}, {["__typename"]: "ServiceAppointmentTimeSlot"}, {["isOpen"]: true}, {["date"]: "2026-08-05T00:00:00Z"}, {["timeslots"]: [Object.assign({}, {["__typename"]: "Timeslot"}, {["time"]: "2026-08-05T10:00:00Z"})]})]})], null), [$.call(ServiceAppointmentTimeSlot, [true, $.call(datetime, [2026, 8, 5], Object.assign({}, {"tzinfo": UTC})), [$.call(datetime, [2026, 8, 5, 10], Object.assign({}, {"tzinfo": UTC}))]], null)], "test_dealers_and_service_appointments.py:229: parse_service_appointment_time_slots({'serviceAppointmentTimeSlots': [{'__typename': 'ServiceAppointmentTimeSlot', 'isOpen': True, 'date': '2026-08-05T00:00:00Z', 'timeslots': [{'__typename': 'Timeslot', 'time': '2026-08-05T10:00:00Z'}]}]}) == (ServiceAppointmentTimeSlot(True, datetime(2026, 8, 5, tzinfo=UTC), (datetime(2026, 8, 5, 10, tzinfo=UTC),)),)");
}

/** Translated upstream test_parse_maintenance_visits_and_union_results. */
export function test_parse_maintenance_visits_and_union_results(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_maintenance_visits, [Object.assign({}, {["viewer"]: Object.assign({}, {["__typename"]: "MS_Viewer"}, {["Schedule"]: Object.assign({}, {["__typename"]: "MS_Schedule"}, {["Visits"]: [Object.assign({}, {["__typename"]: "MS_Visit"}, {["Alignment"]: "DistanceBased"}, {["Interval"]: Object.assign({}, {["__typename"]: "MS_Interval"}, {["Month"]: 12}, {["Year"]: 1}, {["Next"]: true}, {["DistanceMiles"]: 15000}, {["DistanceKMs"]: null})}, {["ServiceOccurrences"]: null})]})})})], null), $.call(MaintenanceVisits, [[$.call(MaintenanceVisit, [$.attr(MaintenanceVisitAlignment, "DISTANCE_BASED"), $.call(MaintenanceInterval, [12, 1, true, 15000, null], null), null], null)]], null), "test_dealers_and_service_appointments.py:255: parse_maintenance_visits({'viewer': {'__typename': 'MS_Viewer', 'Schedule': {'__typename': 'MS_Schedule', 'Visits': [{'__typename': 'MS_Visit', 'Alignment': 'DistanceBased', 'Interval': {'__typename': 'MS_Interval', 'Month': 12, 'Year': 1, 'Next': True, 'DistanceMiles': 15000, 'DistanceKMs': None}, 'ServiceOccurrences': None}]}}}) == MaintenanceVisits((MaintenanceVisit(MaintenanceVisitAlignment.DISTANCE_BASED, MaintenanceInterval(12, 1, True, 15000, None), None),))");
$.assertEqual($.call(parse_create_service_appointment, [Object.assign({}, {["createServiceAppointment"]: Object.assign({}, {["__typename"]: "ServiceAppointment"}, {["appointmentId"]: null})})], null), $.call(CreatedServiceAppointment, [null], null), "test_dealers_and_service_appointments.py:288: parse_create_service_appointment({'createServiceAppointment': {'__typename': 'ServiceAppointment', 'appointmentId': None}}) == CreatedServiceAppointment(None)");
$.assertEqual($.call(parse_update_service_appointment, [Object.assign({}, {["updateServiceAppointment"]: Object.assign({}, {["__typename"]: "FutureAppointment"})})], null), $.call(UnselectedDealerResult, ["FutureAppointment"], null), "test_dealers_and_service_appointments.py:296: parse_update_service_appointment({'updateServiceAppointment': {'__typename': 'FutureAppointment'}}) == UnselectedDealerResult('FutureAppointment')");
$.assertEqual($.call(parse_update_vehicle_preferred_dealer, [Object.assign({}, {["updateVehicle"]: Object.assign({}, {["__typename"]: "FutureVehicleUpdate"})})], null), $.call(UnselectedDealerResult, ["FutureVehicleUpdate"], null), "test_dealers_and_service_appointments.py:299: parse_update_vehicle_preferred_dealer({'updateVehicle': {'__typename': 'FutureVehicleUpdate'}}) == UnselectedDealerResult('FutureVehicleUpdate')");
}

/** Translated upstream test_client_wires_all_dealer_and_service_operations. */
export async function test_client_wires_all_dealer_and_service_operations(...__args: any[]): any {
let call, config, mileage, payload, payloads, sdk, session, start;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [$.call(FakeResponse, [Object.assign({}, {["dealers"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["dealers"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["dealers"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["dealsByDealerId"]: null}, {["dealsImagesByDealerId"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["dealer"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["viewer"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["viewer"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["viewer"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["serviceAdvisors"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["serviceAppointmentTimeSlots"]: []})], null), $.call(FakeResponse, [Object.assign({}, {["serviceAppointments"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["serviceCategories"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["serviceOperations"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["serviceOperationsByMileage"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["transportationOptions"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["cancelServiceAppointment"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["createServiceAppointment"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["updateServiceAppointment"]: null})], null), $.call(FakeResponse, [Object.assign({}, {["updateVehicle"]: null})], null)], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": false}));
mileage = $.call(MaintenanceMileageInput, [], Object.assign({}, {"total_mile": 12000}));
start = $.call(datetime, [2026, 8, 5], Object.assign({}, {"tzinfo": UTC}));
config = $.call(appointment, [], null);
$.assert((((await $.call($.attr(sdk, "async_get_all_dealers"), [], null)) === null)), "test_dealers_and_service_appointments.py:331: await sdk.async_get_all_dealers() is None");
$.assert((((await $.call($.attr(sdk, "async_get_dealers"), ["37064"], null)) === null)), "test_dealers_and_service_appointments.py:332: await sdk.async_get_dealers('37064') is None");
$.assert((((await $.call($.attr(sdk, "async_search_dealers"), [], null)) === null)), "test_dealers_and_service_appointments.py:333: await sdk.async_search_dealers() is None");
(await $.call($.attr(sdk, "async_get_dealer_deals_and_images"), ["DEALER"], null));
$.assert((((await $.call($.attr(sdk, "async_get_dealer"), ["DEALER"], null)) === null)), "test_dealers_and_service_appointments.py:335: await sdk.async_get_dealer('DEALER') is None");
$.assert((((await $.call($.attr(sdk, "async_generate_all_maintenance_visits"), ["VIN", mileage, "S", 1, 2], null)) === null)), "test_dealers_and_service_appointments.py:336: await sdk.async_generate_all_maintenance_visits('VIN', mileage, 'S', 1, 2) is None");
$.assert((((await $.call($.attr(sdk, "async_generate_next_maintenance_visit"), ["VIN", mileage, "S", 1, 2], null)) === null)), "test_dealers_and_service_appointments.py:337: await sdk.async_generate_next_maintenance_visit('VIN', mileage, 'S', 1, 2) is None");
$.assert((((await $.call($.attr(sdk, "async_generate_next_maintenance_visit_no_severity"), ["VIN", mileage, "S", 1, 2], null)) === null)), "test_dealers_and_service_appointments.py:338: await sdk.async_generate_next_maintenance_visit_no_severity('VIN', mileage, 'S', 1, 2) is None");
$.assert((((await $.call($.attr(sdk, "async_get_service_advisors"), ["DEALER", ["OP"]], null)) === null)), "test_dealers_and_service_appointments.py:342: await sdk.async_get_service_advisors('DEALER', ('OP',)) is None");
$.assertEqual((await $.call($.attr(sdk, "async_get_service_appointment_time_slots"), ["DEALER", ["OP"], start], Object.assign({}, {"location_type": $.attr(ServiceLocationType, "PICK_UP")}))), [], "test_dealers_and_service_appointments.py:343: await sdk.async_get_service_appointment_time_slots('DEALER', ('OP',), start, location_type=ServiceLocationType.PICK_UP) == ()");
$.assert((((await $.call($.attr(sdk, "async_get_service_appointments"), ["VIN"], null)) === null)), "test_dealers_and_service_appointments.py:352: await sdk.async_get_service_appointments('VIN') is None");
$.assert((((await $.call($.attr(sdk, "async_get_service_categories"), [], null)) === null)), "test_dealers_and_service_appointments.py:353: await sdk.async_get_service_categories() is None");
$.assert((((await $.call($.attr(sdk, "async_get_service_operations"), ["VIN", "DEALER"], null)) === null)), "test_dealers_and_service_appointments.py:354: await sdk.async_get_service_operations('VIN', 'DEALER') is None");
$.assert((((await $.call($.attr(sdk, "async_get_service_operations_by_mileage"), ["VIN", "DEALER", 12000], null)) === null)), "test_dealers_and_service_appointments.py:355: await sdk.async_get_service_operations_by_mileage('VIN', 'DEALER', 12000) is None");
$.assert((((await $.call($.attr(sdk, "async_get_transportation_options"), ["DEALER", ["OP"]], null)) === null)), "test_dealers_and_service_appointments.py:356: await sdk.async_get_transportation_options('DEALER', ('OP',)) is None");
$.assert((((await $.call($.attr(sdk, "async_cancel_service_appointment"), ["APPOINTMENT", "DEALER"], null)) === null)), "test_dealers_and_service_appointments.py:357: await sdk.async_cancel_service_appointment('APPOINTMENT', 'DEALER') is None");
$.assert((((await $.call($.attr(sdk, "async_create_service_appointment"), [config], null)) === null)), "test_dealers_and_service_appointments.py:358: await sdk.async_create_service_appointment(config) is None");
$.assert((((await $.call($.attr(sdk, "async_update_service_appointment"), ["APPOINTMENT", config], null)) === null)), "test_dealers_and_service_appointments.py:359: await sdk.async_update_service_appointment('APPOINTMENT', config) is None");
$.assert((((await $.call($.attr(sdk, "async_update_vehicle_preferred_dealer"), ["VIN", "DEALER"], null)) === null)), "test_dealers_and_service_appointments.py:360: await sdk.async_update_vehicle_preferred_dealer('VIN', 'DEALER') is None");
payloads = [];
for (call of $.iterable($.attr(session, "calls"))) {
payload = $.get(call, "json");
$.assert($.call($.isinstance, [payload, Mapping], null), "test_dealers_and_service_appointments.py:365: isinstance(payload, Mapping)");
$.call($.attr(payloads, "append"), [payload], null);
}
$.assertEqual((() => { const __out: any = []; for (const payload of $.iterable(payloads)) { __out.push($.get(payload, "operationName")); } return __out; })(), ["AllDealers", "Dealers", "DealersBySearch", "DealsAndImagesByDealerId", "GetDealerById", "GenerateAllVisits", "GenerateNextVisit", "GenerateNextVisitNoSeverity", "ServiceAdvisors", "ServiceAppointmentTimeSlots", "ServiceAppointments", "ServiceCategories", "ServiceOperations", "ServiceOperationsByMileage", "TransportationOptions", "CancelServiceAppointment", "CreateServiceAppointment", "UpdateServiceAppointment", "UpdateVehiclePreferredDealer"], "test_dealers_and_service_appointments.py:367: [payload['operationName'] for payload in payloads] == ['AllDealers', 'Dealers', 'DealersBySearch', 'DealsAndImagesByDealerId', 'GetDealerById', 'GenerateAllVisits', 'GenerateNextVisit', 'GenerateNextVisitNoSeverity', 'ServiceAdvisors', 'ServiceAppointmentTimeSlots', 'ServiceAppointments', 'ServiceCategories', 'ServiceOperations', 'ServiceOperationsByMileage', 'TransportationOptions', 'CancelServiceAppointment', 'CreateServiceAppointment', 'UpdateServiceAppointment', 'UpdateVehiclePreferredDealer']");
$.assertEqual($.get($.get(payloads, 9), "variables"), $.call(service_time_slots_variables, ["DEALER", ["OP"], start], Object.assign({}, {"location_type": $.attr(ServiceLocationType, "PICK_UP")})), "test_dealers_and_service_appointments.py:388: payloads[9]['variables'] == service_time_slots_variables('DEALER', ('OP',), start, location_type=ServiceLocationType.PICK_UP)");
$.assertEqual($.get($.get(payloads, 16), "variables"), $.call(service_appointment_variables, [config], null), "test_dealers_and_service_appointments.py:394: payloads[16]['variables'] == service_appointment_variables(config)");
$.assertEqual($.get($.get(payloads, 17), "variables"), $.call(update_service_appointment_variables, ["APPOINTMENT", config], null), "test_dealers_and_service_appointments.py:395: payloads[17]['variables'] == update_service_appointment_variables('APPOINTMENT', config)");
}

/** Translated upstream test_read_only_mode_blocks_all_service_mutations_before_network. */
export async function test_read_only_mode_blocks_all_service_mutations_before_network(...__args: any[]): any {
let call, calls, config, sdk, session;
let {} = $.bind(__args, [], {}, [], null, null);
session = $.call(FakeSession, [], null);
sdk = $.call(make_client, [session], Object.assign({}, {"read_only": true}));
config = $.call(appointment, [], null);
calls = [$.call($.attr(sdk, "async_cancel_service_appointment"), ["APPOINTMENT", "DEALER"], null), $.call($.attr(sdk, "async_create_service_appointment"), [config], null), $.call($.attr(sdk, "async_update_service_appointment"), ["APPOINTMENT", config], null), $.call($.attr(sdk, "async_update_vehicle_preferred_dealer"), ["VIN", "DEALER"], null)];
for (call of $.iterable(calls)) {
await $.raises(ReadOnlyError, null, async () => {
(await call);
});
}
$.assertEqual($.attr(session, "calls"), [], "test_dealers_and_service_appointments.py:416: session.calls == []");
}

$.register("test_dealers_and_service_appointments.py::test_dealer_and_service_operations_match_service_documents", test_dealer_and_service_operations_match_service_documents, []);

$.register("test_dealers_and_service_appointments.py::test_dealer_and_service_inputs_preserve_generated_shapes", test_dealer_and_service_inputs_preserve_generated_shapes, []);

$.register("test_dealers_and_service_appointments.py::test_parse_dealer_search_and_time_slots", test_parse_dealer_search_and_time_slots, []);

$.register("test_dealers_and_service_appointments.py::test_parse_maintenance_visits_and_union_results", test_parse_maintenance_visits_and_union_results, []);

$.register("test_dealers_and_service_appointments.py::test_client_wires_all_dealer_and_service_operations", test_client_wires_all_dealer_and_service_operations, []);

$.register("test_dealers_and_service_appointments.py::test_read_only_mode_blocks_all_service_mutations_before_network", test_read_only_mode_blocks_all_service_mutations_before_network, []);
