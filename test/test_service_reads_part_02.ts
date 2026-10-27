// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const Callable = $.Callable;
const Mapping = $.Mapping;

const pytest = $.pytest;

import { preferred_dealer, recall, service_history_entry, vehicle_data, warranty, without_field } from "./test_service_reads";

import { ResponseError } from "../src/index";

import { parse_vehicle_preferred_dealer, parse_vehicle_recalls, parse_vehicle_roadside_assistance, parse_vehicle_service_history, parse_warranty_info } from "../src/service_parsing";

/** Translated upstream test_required_fields_and_non_null_lists_reject_invalid_responses. */
export function test_required_fields_and_non_null_lists_reject_invalid_responses(...__args: any[]): any {
let {"parser": parser, "payload": payload} = $.bind(__args, ["parser", "payload"], {}, [], null, null);
$.raises(ResponseError, null, () => {
$.call(parser, [payload], null);
});
}

/** Translated upstream test_datetime_scalars_require_an_explicit_offset. */
export function test_datetime_scalars_require_an_explicit_offset(...__args: any[]): any {
let {"parser": parser, "payload": payload} = $.bind(__args, ["parser", "payload"], {}, [], null, null);
$.raises(ResponseError, "with an offset", () => {
$.call(parser, [payload], null);
});
}

/** Translated upstream test_warranty_date_scalars_reject_invalid_dates. */
export function test_warranty_date_scalars_reject_invalid_dates(...__args: any[]): any {
let invalid_period;
let {"raw_date": raw_date} = $.bind(__args, ["raw_date"], {}, [], null, null);
invalid_period = Object.assign({}, {["__typename"]: "WarrantyPeriod"}, {["mileage"]: 0}, {["date"]: raw_date});
$.raises(ResponseError, "ISO-8601 date", () => {
$.call(parse_warranty_info, [$.call(vehicle_data, [], Object.assign({}, {"warranty": $.call(warranty, [], Object.assign({}, {"startPeriod": invalid_period}))}))], null);
});
}

$.register("test_service_reads_part_02.py::test_required_fields_and_non_null_lists_reject_invalid_responses", test_required_fields_and_non_null_lists_reject_invalid_responses, [[["parser", "payload"], [[parse_vehicle_preferred_dealer, {}], [parse_vehicle_preferred_dealer, $.call(vehicle_data, [], Object.assign({}, {"preferredDealer": $.call(preferred_dealer, [], Object.assign({}, {"languagesSpoken": null}))}))], [parse_vehicle_preferred_dealer, $.call(vehicle_data, [], Object.assign({}, {"preferredDealer": $.call(preferred_dealer, [], Object.assign({}, {"languagesSpoken": [null]}))}))], [parse_vehicle_recalls, $.call(vehicle_data, [], Object.assign({}, {"recalls": null}))], [parse_vehicle_recalls, $.call(vehicle_data, [], Object.assign({}, {"recalls": [null]}))], [parse_vehicle_recalls, $.call(vehicle_data, [], Object.assign({}, {"recalls": [$.call(without_field, [$.call(recall, [], null), "title"], null)]}))], [parse_vehicle_roadside_assistance, $.call(vehicle_data, [], Object.assign({}, {"roadsideAssistance": Object.assign({}, {["__typename"]: "RoadsideAssistance"}, {["roadsideMonths"]: null}, {["roadsideMiles"]: null}, {["towingMonths"]: null})}))], [parse_vehicle_service_history, $.call(vehicle_data, [], Object.assign({}, {"serviceHistory": null}))], [parse_vehicle_service_history, $.call(vehicle_data, [], Object.assign({}, {"serviceHistory": [null]}))], [parse_vehicle_service_history, $.call(vehicle_data, [], Object.assign({}, {"serviceHistory": [$.call(service_history_entry, [], Object.assign({}, {"services": null}))]}))], [parse_vehicle_service_history, $.call(vehicle_data, [], Object.assign({}, {"serviceHistory": [$.call(service_history_entry, [], Object.assign({}, {"services": [null]}))]}))], [parse_warranty_info, $.call(vehicle_data, [], Object.assign({}, {"warranty": $.call(warranty, [], Object.assign({}, {"warrantyInfo": null}))}))], [parse_warranty_info, $.call(vehicle_data, [], Object.assign({}, {"warranty": $.call(warranty, [], Object.assign({}, {"startPeriod": null}))}))]]]]);

$.register("test_service_reads_part_02.py::test_datetime_scalars_require_an_explicit_offset", test_datetime_scalars_require_an_explicit_offset, [[["parser", "payload"], [[parse_vehicle_recalls, $.call(vehicle_data, [], Object.assign({}, {"recalls": [$.call(recall, [], Object.assign({}, {"effectiveDate": "2026-02-03T04:05:06"}))]}))], [parse_vehicle_service_history, $.call(vehicle_data, [], Object.assign({}, {"serviceHistory": [$.call(service_history_entry, [], Object.assign({}, {"serviceDate": "2026-03-04T05:06:07"}))]}))]]]]);

$.register("test_service_reads_part_02.py::test_warranty_date_scalars_reject_invalid_dates", test_warranty_date_scalars_reject_invalid_dates, [["raw_date", ["2026-02-30", "2026-03-04T05:06:07Z"]]]);
