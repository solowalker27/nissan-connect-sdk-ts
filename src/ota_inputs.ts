// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const datetime = $.datetime;

import { serialize_datetime, serialize_enum } from "./graphql_input";
export { serialize_datetime, serialize_enum };

import { DataWipeType } from "./ota_models";
export { DataWipeType };

export function download_ota_update_input(ota_update_id: string): Record<string, unknown>;
/** Serialize a download request using Nissan's GraphQL field names. */
export function download_ota_update_input(...__args: any[]): any {
let {"ota_update_id": ota_update_id} = $.bind(__args, ["ota_update_id"], {}, [], null, null);
/** Serialize a download request using Nissan's GraphQL field names. */
return Object.assign({}, {["otaUpdateId"]: ota_update_id});
}

export function ota_activation_schedule_input(ota_update_id: string, scheduled_date: $.DateValue): Record<string, unknown>;
/** Serialize a scheduled OTA activation input. */
export function ota_activation_schedule_input(...__args: any[]): any {
let {"ota_update_id": ota_update_id, "scheduled_date": scheduled_date} = $.bind(__args, ["ota_update_id", "scheduled_date"], {}, [], null, null);
/** Serialize a scheduled OTA activation input. */
return Object.assign({}, {["otaUpdateId"]: ota_update_id}, {["scheduledDate"]: $.call(serialize_datetime, [scheduled_date], null)});
}

export function data_wipe_type_input(value: DataWipeType): string;
/** Serialize a schema-valid data-wipe target. */
export function data_wipe_type_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize a schema-valid data-wipe target. */
return $.call(serialize_enum, [value], null);
}
