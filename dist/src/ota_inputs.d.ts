import { py as $ } from "./_runtime";
import { serialize_datetime, serialize_enum } from "./graphql_input";
export { serialize_datetime, serialize_enum };
import { DataWipeType } from "./ota_models";
export { DataWipeType };
export declare function download_ota_update_input(ota_update_id: string): Record<string, unknown>;
export declare function ota_activation_schedule_input(ota_update_id: string, scheduled_date: $.DateValue): Record<string, unknown>;
export declare function data_wipe_type_input(value: DataWipeType): string;
