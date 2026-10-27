// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const Callable = $.Callable;
const Mapping = $.Mapping;

const FrozenInstanceError = $.FrozenInstanceError;

const UTC = $.UTC;
const date = $.date;
const datetime = $.datetime;
const timedelta = $.timedelta;
const timezone = $.timezone;

const pytest = $.pytest;

import { EXPECTED_OPERATION_IDS, part, parts_reminder, service_contract, vehicle_data } from "./test_maintenance";

import { operations } from "../src/index";

import { CreatePartsReminderInput, DistanceInput, PastServiceInput, ReminderInterval, ResetPartsReminderInput, UpdatePartsReminderInput, UpdatePastServiceInput, add_past_service_variables, collision_history_variables, collision_probe_data_variables, create_parts_reminder_variables, delete_parts_reminder_variables, distance_input, get_maintenance_timeline_variables, get_service_contracts_variables, parts_reminders_variables, reset_parts_reminder_variables, update_parts_reminder_variables, update_past_service_variables } from "../src/maintenance_inputs";

import { MaintenancePart, MaintenanceTimeline, PartReminderConfiguration, PartsReminder, PartsReminderConfigurationThresholds, PartsReminderStatus, PastServiceExists, PastServiceGeneralError, PastServiceSuccess, ReminderDistance, ServiceContract, UnknownPastServiceResult, VehiclePartsReminders, WarrantyServiceContractStatus } from "../src/maintenance_models";

import { parse_add_past_service, parse_maintenance_timeline, parse_parts_reminders, parse_service_contracts, parse_update_past_service } from "../src/maintenance_parsing";

import { DistanceUnit } from "../src/models";

/** Translated upstream test_maintenance_operation_documents_match_service_persisted_hashes. */
export function test_maintenance_operation_documents_match_service_persisted_hashes(...__args: any[]): any {
let document, expected_id, name, operation_id;
let {} = $.bind(__args, [], {}, [], null, null);
for ([name, expected_id] of $.iterable($.call($.attr(EXPECTED_OPERATION_IDS, "items"), [], null))) {
document = $.call($.getattr, [operations, name], null);
operation_id = $.call($.getattr, [operations, ($.str(name) + "_OPERATION_ID")], null);
$.assert($.call($.isinstance, [document, $.str], null), "test_maintenance_part_01.py:69: isinstance(document, str)");
$.assert(($.eq(operation_id, expected_id)), "test_maintenance_part_01.py:70: operation_id == expected_id");
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), expected_id)), "test_maintenance_part_01.py:71: hashlib.sha256(document.encode()).hexdigest() == expected_id");
}
}

/** Translated upstream test_required_read_and_identity_variables_are_exact. */
export function test_required_read_and_identity_variables_are_exact(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(get_maintenance_timeline_variables, ["VIN", $.attr(DistanceUnit, "MILE")], null), Object.assign({}, {["vin"]: "VIN"}, {["mileageUnit"]: "MILE"}))), "test_maintenance_part_01.py:75: get_maintenance_timeline_variables('VIN', DistanceUnit.MILE) == {'vin': 'VIN', 'mileageUnit': 'MILE'}");
$.assert(($.eq($.call(get_service_contracts_variables, ["VIN", 12345], null), Object.assign({}, {["vin"]: "VIN"}, {["mileage"]: 12345}))), "test_maintenance_part_01.py:79: get_service_contracts_variables('VIN', 12345) == {'vin': 'VIN', 'mileage': 12345}");
$.assert(($.eq($.call(collision_history_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_maintenance_part_01.py:83: collision_history_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(collision_probe_data_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_maintenance_part_01.py:84: collision_probe_data_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(delete_parts_reminder_variables, ["VIN", "reminder-id"], null), Object.assign({}, {["vin"]: "VIN"}, {["reminderId"]: "reminder-id"}))), "test_maintenance_part_01.py:85: delete_parts_reminder_variables('VIN', 'reminder-id') == {'vin': 'VIN', 'reminderId': 'reminder-id'}");
}

/** Translated upstream test_past_service_inputs_preserve_omitted_null_and_date_values. */
export function test_past_service_inputs_preserve_omitted_null_and_date_values(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(add_past_service_variables, [], null), {})), "test_maintenance_part_01.py:92: add_past_service_variables() == {}");
$.assert(($.eq($.call(add_past_service_variables, [null], null), Object.assign({}, {["input"]: null}))), "test_maintenance_part_01.py:93: add_past_service_variables(None) == {'input': None}");
$.assert(($.eq($.call(add_past_service_variables, [$.call(PastServiceInput, [], Object.assign({}, {"vin": "VIN"}, {"dealer_id": 42}, {"invoice_date": $.call(date, [2026, 7, 30], null)}, {"odometer": 12345}))], null), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "VIN"}, {["dealerId"]: 42}, {["invoiceDate"]: "2026-07-30"}, {["odometer"]: 12345})}))), "test_maintenance_part_01.py:94: add_past_service_variables(PastServiceInput(vin='VIN', dealer_id=42, invoice_date=date(2026, 7, 30), odometer=12345)) == {'input': {'vin': 'VIN', 'dealerId': 42, 'invoiceDate': '2026-07-30', 'odometer': 12345}}");
$.assert(($.eq($.call(add_past_service_variables, [$.call(PastServiceInput, [], Object.assign({}, {"vin": "VIN"}, {"dealer_id": 42}, {"invoice_date": $.call(date, [2026, 7, 30], null)}, {"odometer": 12345}, {"op_code_id": null}, {"comment": "Done"}))], null), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "VIN"}, {["dealerId"]: 42}, {["opCodeID"]: null}, {["invoiceDate"]: "2026-07-30"}, {["odometer"]: 12345}, {["comment"]: "Done"})}))), "test_maintenance_part_01.py:109: add_past_service_variables(PastServiceInput(vin='VIN', dealer_id=42, invoice_date=date(2026, 7, 30), odometer=12345, op_code_id=None, comment='Done')) == {'input': {'vin': 'VIN', 'dealerId': 42, 'opCodeID': None, 'invoiceDate': '2026-07-30', 'odometer': 12345, 'comment': 'Done'}}");
$.assert(($.eq($.call(update_past_service_variables, [$.call(UpdatePastServiceInput, [], Object.assign({}, {"vin": "VIN"}, {"dealer_id": 42}, {"invoice_date": $.call(date, [2026, 7, 31], null)}, {"odometer": 12350}, {"maintenance_id": 7}, {"op_code_id": "OP-1"}, {"comment": null}))], null), Object.assign({}, {["input"]: Object.assign({}, {["vin"]: "VIN"}, {["dealerId"]: 42}, {["opCodeID"]: "OP-1"}, {["invoiceDate"]: "2026-07-31"}, {["odometer"]: 12350}, {["comment"]: null}, {["maintenanceId"]: 7})}))), "test_maintenance_part_01.py:128: update_past_service_variables(UpdatePastServiceInput(vin='VIN', dealer_id=42, invoice_date=date(2026, 7, 31), odometer=12350, maintenance_id=7, op_code_id='OP-1', comment=None)) == {'input': {'vin': 'VIN', 'dealerId': 42, 'opCodeID': 'OP-1', 'invoiceDate': '2026-07-31', 'odometer': 12350, 'comment': None, 'maintenanceId': 7}}");
}

/** Translated upstream test_parts_reminder_inputs_preserve_nested_apollo_optionality. */
export function test_parts_reminder_inputs_preserve_nested_apollo_optionality(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parts_reminders_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_maintenance_part_01.py:152: parts_reminders_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(parts_reminders_variables, ["VIN"], Object.assign({}, {"unit": null})), Object.assign({}, {["vin"]: "VIN"}, {["unit"]: null}))), "test_maintenance_part_01.py:153: parts_reminders_variables('VIN', unit=None) == {'vin': 'VIN', 'unit': None}");
$.assert(($.eq($.call(parts_reminders_variables, ["VIN"], Object.assign({}, {"unit": $.attr(DistanceUnit, "KILOMETER")})), Object.assign({}, {["vin"]: "VIN"}, {["unit"]: "KILOMETER"}))), "test_maintenance_part_01.py:154: parts_reminders_variables('VIN', unit=DistanceUnit.KILOMETER) == {'vin': 'VIN', 'unit': 'KILOMETER'}");
$.assert(($.eq($.call(create_parts_reminder_variables, ["VIN", $.call(CreatePartsReminderInput, [], Object.assign({}, {"parts": ["part-1"]}))], null), Object.assign({}, {["vin"]: "VIN"}, {["reminder"]: Object.assign({}, {["parts"]: ["part-1"]})}))), "test_maintenance_part_01.py:159: create_parts_reminder_variables('VIN', CreatePartsReminderInput(parts=('part-1',))) == {'vin': 'VIN', 'reminder': {'parts': ['part-1']}}");
$.assert(($.eq($.call(create_parts_reminder_variables, ["VIN", $.call(CreatePartsReminderInput, [], Object.assign({}, {"parts": ["part-1", "part-2"]}, {"mileage": $.call(DistanceInput, [12345, $.attr(DistanceUnit, "MILE")], null)}, {"date": $.call(datetime, [2026, 7, 31, 8, 9, 10], Object.assign({}, {"tzinfo": $.call(timezone, [$.call(timedelta, [], Object.assign({}, {"hours": -(7)}))], null)}))}, {"interval": $.call(ReminderInterval, [], Object.assign({}, {"months_interval": null}, {"distance_interval": $.call(DistanceInput, [5000], null)}))}))], null), Object.assign({}, {["vin"]: "VIN"}, {["reminder"]: Object.assign({}, {["mileage"]: Object.assign({}, {["value"]: 12345}, {["unit"]: "MILE"})}, {["date"]: "2026-07-31T08:09:10-07:00"}, {["interval"]: Object.assign({}, {["monthsInterval"]: null}, {["distanceInterval"]: Object.assign({}, {["value"]: 5000})})}, {["parts"]: ["part-1", "part-2"]})}))), "test_maintenance_part_01.py:163: create_parts_reminder_variables('VIN', CreatePartsReminderInput(parts=('part-1', 'part-2'), mileage=DistanceInput(12345, DistanceUnit.MILE), date=datetime(2026, 7, 31, 8, 9, 10, tzinfo=timezone(timedelta(hours=-7))), interval=ReminderInterval(months_interval=None, distance_interval=DistanceInput(5000)))) == {'vin': 'VIN', 'reminder': {'mileage': {'value': 12345, 'unit': 'MILE'}, 'date': '2026-07-31T08:09:10-07:00', 'interval': {'monthsInterval': None, 'distanceInterval': {'value': 5000}}, 'parts': ['part-1', 'part-2']}}");
$.assert(($.eq($.call(update_parts_reminder_variables, ["VIN", $.call(UpdatePartsReminderInput, [], Object.assign({}, {"id": "reminder-1"}, {"parts": []}, {"mileage": null}, {"date": null}, {"interval": null}))], null), Object.assign({}, {["vin"]: "VIN"}, {["reminder"]: Object.assign({}, {["id"]: "reminder-1"}, {["mileage"]: null}, {["date"]: null}, {["interval"]: null}, {["parts"]: []})}))), "test_maintenance_part_01.py:186: update_parts_reminder_variables('VIN', UpdatePartsReminderInput(id='reminder-1', parts=(), mileage=None, date=None, interval=None)) == {'vin': 'VIN', 'reminder': {'id': 'reminder-1', 'mileage': None, 'date': None, 'interval': None, 'parts': []}}");
$.assert(($.eq($.call(reset_parts_reminder_variables, ["VIN", $.call(ResetPartsReminderInput, [], Object.assign({}, {"id": "reminder-1"}, {"parts": ["part-1"]}, {"interval": $.call(ReminderInterval, [], Object.assign({}, {"months_interval": 12}, {"distance_interval": null}))}))], null), Object.assign({}, {["vin"]: "VIN"}, {["reminder"]: Object.assign({}, {["id"]: "reminder-1"}, {["interval"]: Object.assign({}, {["monthsInterval"]: 12}, {["distanceInterval"]: null})}, {["parts"]: ["part-1"]})}))), "test_maintenance_part_01.py:205: reset_parts_reminder_variables('VIN', ResetPartsReminderInput(id='reminder-1', parts=('part-1',), interval=ReminderInterval(months_interval=12, distance_interval=None))) == {'vin': 'VIN', 'reminder': {'id': 'reminder-1', 'interval': {'monthsInterval': 12, 'distanceInterval': None}, 'parts': ['part-1']}}");
}

/** Translated upstream test_input_enums_and_datetime_scalars_are_validated. */
export function test_input_enums_and_datetime_scalars_are_validated(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.raises($.ValueError, "UNKNOWN_VALUE", () => {
$.call(get_maintenance_timeline_variables, ["VIN", $.attr(DistanceUnit, "UNKNOWN_VALUE")], null);
});
$.raises($.ValueError, "UNKNOWN_VALUE", () => {
$.call(parts_reminders_variables, ["VIN"], Object.assign({}, {"unit": $.attr(DistanceUnit, "UNKNOWN_VALUE")}));
});
$.raises($.ValueError, "UNKNOWN_VALUE", () => {
$.call(distance_input, [$.call(DistanceInput, [1, $.attr(DistanceUnit, "UNKNOWN_VALUE")], null)], null);
});
$.raises($.ValueError, "UTC offset", () => {
$.call(create_parts_reminder_variables, ["VIN", $.call(CreatePartsReminderInput, [], Object.assign({}, {"parts": []}, {"date": $.call(datetime, [2026, 7, 31, 8, 9, 10], null)}))], null);
});
}

/** Translated upstream test_maintenance_input_models_are_immutable. */
export function test_maintenance_input_models_are_immutable(...__args: any[]): any {
let value;
let {} = $.bind(__args, [], {}, [], null, null);
value = $.call(DistanceInput, [100], null);
$.raises(FrozenInstanceError, null, () => {
value["value"] = 200;
});
}

/** Translated upstream test_maintenance_timeline_and_service_contracts_parse_exact_scalars. */
export function test_maintenance_timeline_and_service_contracts_parse_exact_scalars(...__args: any[]): any {
let contracts, timeline;
let {} = $.bind(__args, [], {}, [], null, null);
timeline = $.call(parse_maintenance_timeline, [$.call(vehicle_data, [], Object.assign({}, {"maintenanceTimeline": Object.assign({}, {["__typename"]: "MaintenanceTimeline"}, {["lastServiceDate"]: "2026-01-02"}, {["lastServiceMileage"]: 10000}, {["nextServiceDate"]: "2026-07-02"}, {["nextServiceMileage"]: 15000}, {["remainingServiceMileage"]: 2500}, {["remainingServiceMonths"]: 3}, {["mileageUnit"]: "MILE"}, {["currentMileage"]: 12500})}))], null);
contracts = $.call(parse_service_contracts, [$.call(vehicle_data, [], Object.assign({}, {"warranty": Object.assign({}, {["__typename"]: "Warranty"}, {["serviceContracts"]: [$.call(service_contract, [], null), null]})}))], null);
$.assert(($.eq(timeline, $.call(MaintenanceTimeline, [], Object.assign({}, {"last_service_date": $.call(date, [2026, 1, 2], null)}, {"last_service_mileage": 10000}, {"next_service_date": $.call(date, [2026, 7, 2], null)}, {"next_service_mileage": 15000}, {"remaining_service_mileage": 2500}, {"remaining_service_months": 3}, {"mileage_unit": $.attr(DistanceUnit, "MILE")}, {"current_mileage": 12500})))), "test_maintenance_part_01.py:270: timeline == MaintenanceTimeline(last_service_date=date(2026, 1, 2), last_service_mileage=10000, next_service_date=date(2026, 7, 2), next_service_mileage=15000, remaining_service_mileage=2500, remaining_service_months=3, mileage_unit=DistanceUnit.MILE, current_mileage=12500)");
$.assert(($.eq(contracts, [$.call(ServiceContract, [], Object.assign({}, {"status": $.attr(WarrantyServiceContractStatus, "ACTIVE")}, {"coverage": "FULL"}, {"coverage_description": "Scheduled maintenance"}, {"coverage_name": "Maintenance Care"}, {"plan_effective_date": $.call(date, [2025, 1, 2], null)}, {"plan_effective_miles": 10}, {"plan_expiration_date": $.call(date, [2028, 1, 2], null)}, {"plan_expiration_odometer": 36010}, {"plan_cancelled_date": null}, {"plan_cancelled_odometer": null}, {"agreement": "AG-1"}, {"deductible_amount": 25}, {"expiring_soon": false})), null])), "test_maintenance_part_01.py:280: contracts == (ServiceContract(status=WarrantyServiceContractStatus.ACTIVE, coverage='FULL', coverage_description='Scheduled maintenance', coverage_name='Maintenance Care', plan_effective_date=date(2025, 1, 2), plan_effective_miles=10, plan_expiration_date=date(2028, 1, 2), plan_expiration_odometer=36010, plan_cancelled_date=None, plan_cancelled_odometer=None, agreement='AG-1', deductible_amount=25, expiring_soon=False), None)");
}

/** Translated upstream test_past_service_union_members_are_preserved. */
export function test_past_service_union_members_are_preserved(...__args: any[]): any {
let {"parser": parser, "root_field": root_field} = $.bind(__args, ["parser", "root_field"], {}, [], null, null);
$.assert(($.eq($.call(parser, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "PastServiceSuccess"}, {["success"]: true})})], null), $.call(PastServiceSuccess, [true], null))), "test_maintenance_part_01.py:311: parser({root_field: {'__typename': 'PastServiceSuccess', 'success': True}}) == PastServiceSuccess(True)");
$.assert(($.eq($.call(parser, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "RegisterGeneralError"}, {["message"]: "Failed"})})], null), $.call(PastServiceGeneralError, ["Failed"], null))), "test_maintenance_part_01.py:314: parser({root_field: {'__typename': 'RegisterGeneralError', 'message': 'Failed'}}) == PastServiceGeneralError('Failed')");
$.assert(($.eq($.call(parser, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "PastServiceExists"}, {["message"]: "Exists"})})], null), $.call(PastServiceExists, ["Exists"], null))), "test_maintenance_part_01.py:317: parser({root_field: {'__typename': 'PastServiceExists', 'message': 'Exists'}}) == PastServiceExists('Exists')");
$.assert(($.eq($.call(parser, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "FuturePastServiceResult"})})], null), $.call(UnknownPastServiceResult, ["FuturePastServiceResult"], null))), "test_maintenance_part_01.py:320: parser({root_field: {'__typename': 'FuturePastServiceResult'}}) == UnknownPastServiceResult('FuturePastServiceResult')");
$.assert((($.call(parser, [Object.assign({}, {[root_field]: null})], null) === null)), "test_maintenance_part_01.py:323: parser({root_field: None}) is None");
}

/** Translated upstream test_parts_reminders_parse_full_nested_response. */
export function test_parts_reminders_parse_full_nested_response(...__args: any[]): any {
let distance_thresholds, expected_part, result, thresholds;
let {} = $.bind(__args, [], {}, [], null, null);
result = $.call(parse_parts_reminders, [$.call(vehicle_data, [], Object.assign({}, {"parts": [$.call(part, [], null), null]}, {"partsReminders": [$.call(parts_reminder, [], null), null]}))], null);
thresholds = $.call(PartsReminderConfigurationThresholds, [], Object.assign({}, {"min": 1}, {"max": 24}, {"interval": 1}, {"distance_unit": $.attr(DistanceUnit, "MILE")}));
distance_thresholds = $.call(PartsReminderConfigurationThresholds, [], Object.assign({}, {"min": 500}, {"max": 30000}, {"interval": 500}, {"distance_unit": $.attr(DistanceUnit, "MILE")}));
expected_part = $.call(MaintenancePart, [], Object.assign({}, {"id": "engine-air-filter"}, {"name": "Engine air filter"}, {"reminder_configuration": $.call(PartReminderConfiguration, [], Object.assign({}, {"months": thresholds}, {"distance": distance_thresholds}))}));
$.assert(($.eq(result, $.call(VehiclePartsReminders, [], Object.assign({}, {"parts": [expected_part, null]}, {"reminders": [$.call(PartsReminder, [], Object.assign({}, {"id": "reminder-1"}, {"overdue": true}, {"date": $.call(datetime, [2026, 7, 30, 10, 20, 30], Object.assign({}, {"tzinfo": UTC}))}, {"months_interval": 6}, {"distance_interval": $.call(ReminderDistance, [$.attr(DistanceUnit, "MILE"), 5000], null)}, {"next_reminder_distance": $.call(ReminderDistance, [$.attr(DistanceUnit, "MILE"), 17000], null)}, {"next_reminder_date": $.call($.attr(datetime, "fromisoformat"), ["2027-01-30T10:20:30-08:00"], null)}, {"status": $.attr(PartsReminderStatus, "OVERDUE")}, {"parts": [expected_part]}, {"mileage": $.call(ReminderDistance, [$.attr(DistanceUnit, "MILE"), 12000], null)})), null]})))), "test_maintenance_part_01.py:351: result == VehiclePartsReminders(parts=(expected_part, None), reminders=(PartsReminder(id='reminder-1', overdue=True, date=datetime(2026, 7, 30, 10, 20, 30, tzinfo=UTC), months_interval=6, distance_interval=ReminderDistance(DistanceUnit.MILE, 5000), next_reminder_distance=ReminderDistance(DistanceUnit.MILE, 17000), next_reminder_date=datetime.fromisoformat('2027-01-30T10:20:30-08:00'), status=PartsReminderStatus.OVERDUE, parts=(expected_part,), mileage=ReminderDistance(DistanceUnit.MILE, 12000)), None))");
}

$.register("test_maintenance_part_01.py::test_maintenance_operation_documents_match_service_persisted_hashes", test_maintenance_operation_documents_match_service_persisted_hashes, []);

$.register("test_maintenance_part_01.py::test_required_read_and_identity_variables_are_exact", test_required_read_and_identity_variables_are_exact, []);

$.register("test_maintenance_part_01.py::test_past_service_inputs_preserve_omitted_null_and_date_values", test_past_service_inputs_preserve_omitted_null_and_date_values, []);

$.register("test_maintenance_part_01.py::test_parts_reminder_inputs_preserve_nested_apollo_optionality", test_parts_reminder_inputs_preserve_nested_apollo_optionality, []);

$.register("test_maintenance_part_01.py::test_input_enums_and_datetime_scalars_are_validated", test_input_enums_and_datetime_scalars_are_validated, []);

$.register("test_maintenance_part_01.py::test_maintenance_input_models_are_immutable", test_maintenance_input_models_are_immutable, []);

$.register("test_maintenance_part_01.py::test_maintenance_timeline_and_service_contracts_parse_exact_scalars", test_maintenance_timeline_and_service_contracts_parse_exact_scalars, []);

$.register("test_maintenance_part_01.py::test_past_service_union_members_are_preserved", test_past_service_union_members_are_preserved, [[["parser", "root_field"], [[parse_add_past_service, "addPastService"], [parse_update_past_service, "updatePastService"]]]]);

$.register("test_maintenance_part_01.py::test_parts_reminders_parse_full_nested_response", test_parts_reminders_parse_full_nested_response, []);
