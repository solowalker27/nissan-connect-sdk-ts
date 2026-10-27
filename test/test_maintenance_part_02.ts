// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const Callable = $.Callable;
const Mapping = $.Mapping;

const UTC = $.UTC;
const datetime = $.datetime;

const pytest = $.pytest;

import { collision_probe_reading, configuration_thresholds, part, parts_reminder, service_contract, vehicle_data, without_field } from "./test_maintenance";

import { ResponseError } from "../src/exceptions";

import { CollisionHistoryEntry, CollisionProbeReading, PartsReminderMutationResult, PartsReminderStatus, VehiclePartsReminders, WarrantyServiceContractStatus } from "../src/maintenance_models";

import { parse_collision_history, parse_collision_probe_data, parse_create_parts_reminder, parse_delete_parts_reminder, parse_maintenance_timeline, parse_parts_reminders, parse_reset_parts_reminder, parse_service_contracts, parse_update_parts_reminder } from "../src/maintenance_parsing";

import { DistanceUnit } from "../src/models";

/** Translated upstream test_parts_reminders_preserve_nullable_fields_and_future_enums. */
export function test_parts_reminders_preserve_nullable_fields_and_future_enums(...__args: any[]): any {
let configuration, nullable_part, nullable_reminder, result;
let {} = $.bind(__args, [], {}, [], null, null);
nullable_part = $.call(part, [], Object.assign({}, {"id": null}, {"reminderConfiguration": Object.assign({}, {["__typename"]: "PartReminderConfiguration"}, {["months"]: $.call(configuration_thresholds, [], Object.assign({}, {"distanceUnit": "FURLONG"}))}, {["distance"]: null})}));
nullable_reminder = $.call(parts_reminder, [], Object.assign({}, {"date": null}, {"monthsInterval": null}, {"distanceInterval": null}, {"nextReminderDistance": null}, {"nextReminderDate": null}, {"status": "FUTURE_STATUS"}, {"parts": []}, {"mileage": null}));
result = $.call(parse_parts_reminders, [$.call(vehicle_data, [], Object.assign({}, {"parts": [nullable_part]}, {"partsReminders": [nullable_reminder]}))], null);
$.assert(((result !== null)), "test_maintenance_part_02.py:63: result is not None");
$.assert((($.attr(result, "parts") !== null)), "test_maintenance_part_02.py:64: result.parts is not None");
$.assert((($.get($.attr(result, "parts"), 0) !== null)), "test_maintenance_part_02.py:65: result.parts[0] is not None");
configuration = $.attr($.get($.attr(result, "parts"), 0), "reminder_configuration");
$.assert(((configuration !== null)), "test_maintenance_part_02.py:67: configuration is not None");
$.assert((($.attr(configuration, "months") !== null)), "test_maintenance_part_02.py:68: configuration.months is not None");
$.assert((($.attr($.attr(configuration, "months"), "distance_unit") === $.attr(DistanceUnit, "UNKNOWN_VALUE"))), "test_maintenance_part_02.py:69: configuration.months.distance_unit is DistanceUnit.UNKNOWN_VALUE");
$.assert((($.attr(result, "reminders") !== null)), "test_maintenance_part_02.py:70: result.reminders is not None");
$.assert((($.get($.attr(result, "reminders"), 0) !== null)), "test_maintenance_part_02.py:71: result.reminders[0] is not None");
$.assert((($.attr($.get($.attr(result, "reminders"), 0), "status") === $.attr(PartsReminderStatus, "UNKNOWN_VALUE"))), "test_maintenance_part_02.py:72: result.reminders[0].status is PartsReminderStatus.UNKNOWN_VALUE");
$.assert(($.eq($.attr($.get($.attr(result, "reminders"), 0), "parts"), [])), "test_maintenance_part_02.py:73: result.reminders[0].parts == ()");
}

/** Translated upstream test_parts_reminder_mutation_response_shapes_are_preserved. */
export function test_parts_reminder_mutation_response_shapes_are_preserved(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_create_parts_reminder, [Object.assign({}, {["createPartsReminder"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: true})})], null), $.call(PartsReminderMutationResult, ["ResponseStatus", true], null))), "test_maintenance_part_02.py:77: parse_create_parts_reminder({'createPartsReminder': {'__typename': 'ResponseStatus', 'success': True}}) == PartsReminderMutationResult('ResponseStatus', True)");
$.assert(($.eq($.call(parse_update_parts_reminder, [Object.assign({}, {["updatePartsReminder"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: null})})], null), $.call(PartsReminderMutationResult, ["ResponseStatus", null], null))), "test_maintenance_part_02.py:80: parse_update_parts_reminder({'updatePartsReminder': {'__typename': 'ResponseStatus', 'success': None}}) == PartsReminderMutationResult('ResponseStatus', None)");
$.assert(($.eq($.call(parse_update_parts_reminder, [Object.assign({}, {["updatePartsReminder"]: Object.assign({}, {["__typename"]: "FutureUpdateError"})})], null), $.call(PartsReminderMutationResult, ["FutureUpdateError", null], null))), "test_maintenance_part_02.py:83: parse_update_parts_reminder({'updatePartsReminder': {'__typename': 'FutureUpdateError'}}) == PartsReminderMutationResult('FutureUpdateError', None)");
$.assert(($.eq($.call(parse_reset_parts_reminder, [Object.assign({}, {["resetPartsReminder"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: false})})], null), $.call(PartsReminderMutationResult, ["ResponseStatus", false], null))), "test_maintenance_part_02.py:86: parse_reset_parts_reminder({'resetPartsReminder': {'__typename': 'ResponseStatus', 'success': False}}) == PartsReminderMutationResult('ResponseStatus', False)");
$.assert(($.eq($.call(parse_delete_parts_reminder, [Object.assign({}, {["deletePartsReminder"]: Object.assign({}, {["__typename"]: "FutureDeleteError"})})], null), $.call(PartsReminderMutationResult, ["FutureDeleteError", null], null))), "test_maintenance_part_02.py:89: parse_delete_parts_reminder({'deletePartsReminder': {'__typename': 'FutureDeleteError'}}) == PartsReminderMutationResult('FutureDeleteError', None)");
}

/** Translated upstream test_collision_history_and_probe_data_parse_exact_scalars. */
export function test_collision_history_and_probe_data_parse_exact_scalars(...__args: any[]): any {
let history, readings;
let {} = $.bind(__args, [], {}, [], null, null);
history = $.call(parse_collision_history, [$.call(vehicle_data, [], Object.assign({}, {"collisionHistory": [Object.assign({}, {["__typename"]: "CollisionHistory"}, {["collisionId"]: "collision-1"}, {["reportDateTime"]: "2026-07-29T02:03:04-07:00"}, {["collisionDateTime"]: null}), null]}))], null);
readings = $.call(parse_collision_probe_data, [$.call(vehicle_data, [], Object.assign({}, {"collisionProbeReadings": [$.call(collision_probe_reading, [], null), null]}))], null);
$.assert(($.eq(history, [$.call(CollisionHistoryEntry, [], Object.assign({}, {"collision_id": "collision-1"}, {"report_date_time": $.call($.attr(datetime, "fromisoformat"), ["2026-07-29T02:03:04-07:00"], null)}, {"collision_date_time": null})), null])), "test_maintenance_part_02.py:112: history == (CollisionHistoryEntry(collision_id='collision-1', report_date_time=datetime.fromisoformat('2026-07-29T02:03:04-07:00'), collision_date_time=None), None)");
$.assert(($.eq(readings, [$.call(CollisionProbeReading, [], Object.assign({}, {"collision_time": $.call(datetime, [2026, 7, 29, 1, 2, 3], Object.assign({}, {"tzinfo": UTC}))}, {"latitude": 32.7157}, {"longitude": -(117.1611)}, {"mil_count": 2}, {"mil_data": "P0001,P0002"}, {"odometer": 12345.5}, {"speed": 21.25}, {"unit": $.attr(DistanceUnit, "MILE")})), null])), "test_maintenance_part_02.py:120: readings == (CollisionProbeReading(collision_time=datetime(2026, 7, 29, 1, 2, 3, tzinfo=UTC), latitude=32.7157, longitude=-117.1611, mil_count=2, mil_data='P0001,P0002', odometer=12345.5, speed=21.25, unit=DistanceUnit.MILE), None)");
}

/** Translated upstream test_nullable_response_chains_and_non_applicable_vehicle_unions. */
export function test_nullable_response_chains_and_non_applicable_vehicle_unions(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert((($.call(parse_maintenance_timeline, [Object.assign({}, {["vehicle"]: null})], null) === null)), "test_maintenance_part_02.py:136: parse_maintenance_timeline({'vehicle': None}) is None");
$.assert((($.call(parse_maintenance_timeline, [$.call(vehicle_data, [], Object.assign({}, {"maintenanceTimeline": null}))], null) === null)), "test_maintenance_part_02.py:137: parse_maintenance_timeline(vehicle_data(maintenanceTimeline=None)) is None");
$.assert((($.call(parse_service_contracts, [$.call(vehicle_data, [], Object.assign({}, {"warranty": null}))], null) === null)), "test_maintenance_part_02.py:138: parse_service_contracts(vehicle_data(warranty=None)) is None");
$.assert((($.call(parse_service_contracts, [$.call(vehicle_data, [], Object.assign({}, {"warranty": Object.assign({}, {["__typename"]: "Warranty"}, {["serviceContracts"]: null})}))], null) === null)), "test_maintenance_part_02.py:139: parse_service_contracts(vehicle_data(warranty={'__typename': 'Warranty', 'serviceContracts': None})) is None");
$.assert((($.call(parse_parts_reminders, [$.call(vehicle_data, [], Object.assign({}, {"typename": "LegacyVehicle"}))], null) === null)), "test_maintenance_part_02.py:145: parse_parts_reminders(vehicle_data(typename='LegacyVehicle')) is None");
$.assert(($.eq($.call(parse_parts_reminders, [$.call(vehicle_data, [], Object.assign({}, {"parts": null}, {"partsReminders": null}))], null), $.call(VehiclePartsReminders, [], Object.assign({}, {"parts": null}, {"reminders": null})))), "test_maintenance_part_02.py:146: parse_parts_reminders(vehicle_data(parts=None, partsReminders=None)) == VehiclePartsReminders(parts=None, reminders=None)");
$.assert((($.call(parse_collision_history, [$.call(vehicle_data, [], Object.assign({}, {"collisionHistory": null}))], null) === null)), "test_maintenance_part_02.py:149: parse_collision_history(vehicle_data(collisionHistory=None)) is None");
$.assert((($.call(parse_collision_probe_data, [$.call(vehicle_data, [], Object.assign({}, {"typename": "LegacyVehicle"}))], null) === null)), "test_maintenance_part_02.py:150: parse_collision_probe_data(vehicle_data(typename='LegacyVehicle')) is None");
$.assert((($.call(parse_collision_probe_data, [$.call(vehicle_data, [], Object.assign({}, {"collisionProbeReadings": null}))], null) === null)), "test_maintenance_part_02.py:151: parse_collision_probe_data(vehicle_data(collisionProbeReadings=None)) is None");
$.assert((($.call(parse_create_parts_reminder, [Object.assign({}, {["createPartsReminder"]: null})], null) === null)), "test_maintenance_part_02.py:152: parse_create_parts_reminder({'createPartsReminder': None}) is None");
$.assert((($.call(parse_update_parts_reminder, [Object.assign({}, {["updatePartsReminder"]: null})], null) === null)), "test_maintenance_part_02.py:153: parse_update_parts_reminder({'updatePartsReminder': None}) is None");
$.assert((($.call(parse_reset_parts_reminder, [Object.assign({}, {["resetPartsReminder"]: null})], null) === null)), "test_maintenance_part_02.py:154: parse_reset_parts_reminder({'resetPartsReminder': None}) is None");
$.assert((($.call(parse_delete_parts_reminder, [Object.assign({}, {["deletePartsReminder"]: null})], null) === null)), "test_maintenance_part_02.py:155: parse_delete_parts_reminder({'deletePartsReminder': None}) is None");
}

/** Translated upstream test_future_required_response_enums_map_to_unknown_sentinels. */
export function test_future_required_response_enums_map_to_unknown_sentinels(...__args: any[]): any {
let contracts, readings, timeline;
let {} = $.bind(__args, [], {}, [], null, null);
timeline = $.call(parse_maintenance_timeline, [$.call(vehicle_data, [], Object.assign({}, {"maintenanceTimeline": Object.assign({}, {["__typename"]: "MaintenanceTimeline"}, {["lastServiceDate"]: "2026-01-02"}, {["lastServiceMileage"]: 1}, {["nextServiceDate"]: "2026-02-02"}, {["nextServiceMileage"]: 2}, {["remainingServiceMileage"]: 1}, {["remainingServiceMonths"]: 1}, {["mileageUnit"]: "FURLONG"}, {["currentMileage"]: 1})}))], null);
contracts = $.call(parse_service_contracts, [$.call(vehicle_data, [], Object.assign({}, {"warranty": Object.assign({}, {["__typename"]: "Warranty"}, {["serviceContracts"]: [$.call(service_contract, [], Object.assign({}, {"status": "PAUSED"}))]})}))], null);
readings = $.call(parse_collision_probe_data, [$.call(vehicle_data, [], Object.assign({}, {"collisionProbeReadings": [$.call(collision_probe_reading, [], Object.assign({}, {"unit": "FURLONG"}))]}))], null);
$.assert(((timeline !== null)), "test_maintenance_part_02.py:186: timeline is not None");
$.assert((($.attr(timeline, "mileage_unit") === $.attr(DistanceUnit, "UNKNOWN_VALUE"))), "test_maintenance_part_02.py:187: timeline.mileage_unit is DistanceUnit.UNKNOWN_VALUE");
$.assert(((contracts !== null)), "test_maintenance_part_02.py:188: contracts is not None");
$.assert((($.get(contracts, 0) !== null)), "test_maintenance_part_02.py:189: contracts[0] is not None");
$.assert((($.attr($.get(contracts, 0), "status") === $.attr(WarrantyServiceContractStatus, "UNKNOWN_VALUE"))), "test_maintenance_part_02.py:190: contracts[0].status is WarrantyServiceContractStatus.UNKNOWN_VALUE");
$.assert(((readings !== null)), "test_maintenance_part_02.py:191: readings is not None");
$.assert((($.get(readings, 0) !== null)), "test_maintenance_part_02.py:192: readings[0] is not None");
$.assert((($.attr($.get(readings, 0), "unit") === $.attr(DistanceUnit, "UNKNOWN_VALUE"))), "test_maintenance_part_02.py:193: readings[0].unit is DistanceUnit.UNKNOWN_VALUE");
}

/** Translated upstream test_missing_or_invalid_selected_fields_are_rejected. */
export function test_missing_or_invalid_selected_fields_are_rejected(...__args: any[]): any {
let {"parser": parser, "payload": payload} = $.bind(__args, ["parser", "payload"], {}, [], null, null);
$.raises(ResponseError, null, () => {
$.call(parser, [payload], null);
});
}

/** Translated upstream test_date_and_datetime_scalars_reject_invalid_wire_values. */
export function test_date_and_datetime_scalars_reject_invalid_wire_values(...__args: any[]): any {
let {"parser": parser, "payload": payload} = $.bind(__args, ["parser", "payload"], {}, [], null, null);
$.raises(ResponseError, null, () => {
$.call(parser, [payload], null);
});
}

$.register("test_maintenance_part_02.py::test_parts_reminders_preserve_nullable_fields_and_future_enums", test_parts_reminders_preserve_nullable_fields_and_future_enums, []);

$.register("test_maintenance_part_02.py::test_parts_reminder_mutation_response_shapes_are_preserved", test_parts_reminder_mutation_response_shapes_are_preserved, []);

$.register("test_maintenance_part_02.py::test_collision_history_and_probe_data_parse_exact_scalars", test_collision_history_and_probe_data_parse_exact_scalars, []);

$.register("test_maintenance_part_02.py::test_nullable_response_chains_and_non_applicable_vehicle_unions", test_nullable_response_chains_and_non_applicable_vehicle_unions, []);

$.register("test_maintenance_part_02.py::test_future_required_response_enums_map_to_unknown_sentinels", test_future_required_response_enums_map_to_unknown_sentinels, []);

$.register("test_maintenance_part_02.py::test_missing_or_invalid_selected_fields_are_rejected", test_missing_or_invalid_selected_fields_are_rejected, [[["parser", "payload"], [[parse_maintenance_timeline, {}], [parse_maintenance_timeline, $.call(vehicle_data, [], Object.assign({}, {"maintenanceTimeline": Object.assign({}, {["__typename"]: "MaintenanceTimeline"}, {["lastServiceDate"]: "2026-01-02"}, {["lastServiceMileage"]: 1}, {["nextServiceDate"]: "2026-02-02"}, {["nextServiceMileage"]: 2}, {["remainingServiceMileage"]: 1}, {["remainingServiceMonths"]: 1}, {["mileageUnit"]: "MILE"})}))], [parse_service_contracts, $.call(vehicle_data, [], Object.assign({}, {"warranty": Object.assign({}, {["__typename"]: "Warranty"})}))], [parse_service_contracts, $.call(vehicle_data, [], Object.assign({}, {"warranty": Object.assign({}, {["__typename"]: "Warranty"}, {["serviceContracts"]: [$.call(without_field, [$.call(service_contract, [], null), "agreement"], null)]})}))], [parse_parts_reminders, $.call(vehicle_data, [], Object.assign({}, {"parts": []}, {"partsReminders": [$.call(parts_reminder, [], Object.assign({}, {"parts": [null]}))]}))], [parse_parts_reminders, $.call(vehicle_data, [], Object.assign({}, {"parts": []}, {"partsReminders": [$.call(parts_reminder, [], Object.assign({}, {"overdue": null}))]}))], [parse_collision_history, $.call(vehicle_data, [], Object.assign({}, {"collisionHistory": [Object.assign({}, {["__typename"]: "CollisionHistory"}, {["collisionId"]: "collision-1"}, {["reportDateTime"]: null})]}))], [parse_collision_probe_data, $.call(vehicle_data, [], Object.assign({}, {"collisionProbeReadings": [$.call(collision_probe_reading, [], Object.assign({}, {"milCount": true}))]}))], [parse_create_parts_reminder, Object.assign({}, {["createPartsReminder"]: Object.assign({}, {["__typename"]: "ResponseStatus"})})], [parse_update_parts_reminder, Object.assign({}, {["updatePartsReminder"]: Object.assign({}, {["__typename"]: "ResponseStatus"})})]]]]);

$.register("test_maintenance_part_02.py::test_date_and_datetime_scalars_reject_invalid_wire_values", test_date_and_datetime_scalars_reject_invalid_wire_values, [[["parser", "payload"], [[parse_maintenance_timeline, $.call(vehicle_data, [], Object.assign({}, {"maintenanceTimeline": Object.assign({}, {["__typename"]: "MaintenanceTimeline"}, {["lastServiceDate"]: "2026-02-30"}, {["lastServiceMileage"]: 1}, {["nextServiceDate"]: "2026-03-01"}, {["nextServiceMileage"]: 2}, {["remainingServiceMileage"]: 1}, {["remainingServiceMonths"]: 1}, {["mileageUnit"]: "MILE"}, {["currentMileage"]: 1})}))], [parse_collision_history, $.call(vehicle_data, [], Object.assign({}, {"collisionHistory": [Object.assign({}, {["__typename"]: "CollisionHistory"}, {["collisionId"]: "collision-1"}, {["reportDateTime"]: "2026-07-29T02:03:04"}, {["collisionDateTime"]: null})]}))], [parse_collision_probe_data, $.call(vehicle_data, [], Object.assign({}, {"collisionProbeReadings": [$.call(collision_probe_reading, [], Object.assign({}, {"collisionTime": "2026-07-29T01:02:03"}))]}))]]]]);
