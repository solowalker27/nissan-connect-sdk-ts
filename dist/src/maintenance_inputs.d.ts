import { py as $ } from "./_runtime";
import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };
import { DistanceUnit } from "./models";
export { DistanceUnit };
/** Fields accepted when adding a completed service record. */
export declare class PastServiceInput {
    readonly vin: string;
    readonly dealer_id: number;
    readonly invoice_date: $.DateValue;
    readonly odometer: number;
    readonly op_code_id: string | UnsetType | null;
    readonly comment: string | UnsetType | null;
    static __fields: any[][];
    constructor(vin: string, dealer_id: number, invoice_date: $.DateValue, odometer: number, op_code_id?: string | UnsetType | null, comment?: string | UnsetType | null);
    constructor(options: {
        vin: string;
        dealer_id: number;
        invoice_date: $.DateValue;
        odometer: number;
        op_code_id?: string | UnsetType | null;
        comment?: string | UnsetType | null;
    });
}
/** Fields accepted when replacing a completed service record. */
export declare class UpdatePastServiceInput {
    readonly vin: string;
    readonly dealer_id: number;
    readonly invoice_date: $.DateValue;
    readonly odometer: number;
    readonly maintenance_id: number;
    readonly op_code_id: string | UnsetType | null;
    readonly comment: string | UnsetType | null;
    static __fields: any[][];
    constructor(vin: string, dealer_id: number, invoice_date: $.DateValue, odometer: number, maintenance_id: number, op_code_id?: string | UnsetType | null, comment?: string | UnsetType | null);
    constructor(options: {
        vin: string;
        dealer_id: number;
        invoice_date: $.DateValue;
        odometer: number;
        maintenance_id: number;
        op_code_id?: string | UnsetType | null;
        comment?: string | UnsetType | null;
    });
}
/** Integer reminder distance whose non-null unit may be omitted. */
export declare class DistanceInput {
    readonly value: number;
    readonly unit: DistanceUnit | UnsetType;
    static __fields: any[][];
    constructor(value: number, unit?: DistanceUnit | UnsetType);
    constructor(options: {
        value: number;
        unit?: DistanceUnit | UnsetType;
    });
}
/** Optional calendar and distance intervals for a parts reminder. */
export declare class ReminderInterval {
    readonly months_interval: number | UnsetType | null;
    readonly distance_interval: DistanceInput | UnsetType | null;
    static __fields: any[][];
    constructor(months_interval?: number | UnsetType | null, distance_interval?: DistanceInput | UnsetType | null);
    constructor(options: {
        months_interval?: number | UnsetType | null;
        distance_interval?: DistanceInput | UnsetType | null;
    });
}
/** Fields accepted when creating a parts reminder. */
export declare class CreatePartsReminderInput {
    readonly parts: ReadonlyArray<string>;
    readonly mileage: DistanceInput | UnsetType | null;
    readonly date: $.DateValue | UnsetType | null;
    readonly interval: ReminderInterval | UnsetType | null;
    static __fields: any[][];
    constructor(parts: ReadonlyArray<string>, mileage?: DistanceInput | UnsetType | null, date?: $.DateValue | UnsetType | null, interval?: ReminderInterval | UnsetType | null);
    constructor(options: {
        parts: ReadonlyArray<string>;
        mileage?: DistanceInput | UnsetType | null;
        date?: $.DateValue | UnsetType | null;
        interval?: ReminderInterval | UnsetType | null;
    });
}
/** Fields accepted when replacing a parts reminder. */
export declare class UpdatePartsReminderInput {
    readonly id: string;
    readonly parts: ReadonlyArray<string>;
    readonly mileage: DistanceInput | UnsetType | null;
    readonly date: $.DateValue | UnsetType | null;
    readonly interval: ReminderInterval | UnsetType | null;
    static __fields: any[][];
    constructor(id: string, parts: ReadonlyArray<string>, mileage?: DistanceInput | UnsetType | null, date?: $.DateValue | UnsetType | null, interval?: ReminderInterval | UnsetType | null);
    constructor(options: {
        id: string;
        parts: ReadonlyArray<string>;
        mileage?: DistanceInput | UnsetType | null;
        date?: $.DateValue | UnsetType | null;
        interval?: ReminderInterval | UnsetType | null;
    });
}
/** Fields accepted when resetting a parts reminder schedule. */
export declare class ResetPartsReminderInput {
    readonly id: string;
    readonly parts: ReadonlyArray<string>;
    readonly interval: ReminderInterval | UnsetType | null;
    static __fields: any[][];
    constructor(id: string, parts: ReadonlyArray<string>, interval?: ReminderInterval | UnsetType | null);
    constructor(options: {
        id: string;
        parts: ReadonlyArray<string>;
        interval?: ReminderInterval | UnsetType | null;
    });
}
export declare function get_maintenance_timeline_variables(vin: string, mileage_unit: DistanceUnit): Record<string, unknown>;
export declare function get_service_contracts_variables(vin: string, mileage: number): Record<string, unknown>;
export declare function add_past_service_variables(service?: PastServiceInput | UnsetType | null): Record<string, unknown>;
export declare function update_past_service_variables(service: UpdatePastServiceInput): Record<string, unknown>;
export declare function parts_reminders_variables(vin: string, options?: {
    unit?: DistanceUnit | UnsetType | null;
}): Record<string, unknown>;
export declare function create_parts_reminder_variables(vin: string, reminder: CreatePartsReminderInput): Record<string, unknown>;
export declare function update_parts_reminder_variables(vin: string, reminder: UpdatePartsReminderInput): Record<string, unknown>;
export declare function reset_parts_reminder_variables(vin: string, reminder: ResetPartsReminderInput): Record<string, unknown>;
export declare function delete_parts_reminder_variables(vin: string, reminder_id: string): Record<string, unknown>;
export declare function collision_history_variables(vin: string): Record<string, unknown>;
export declare function collision_probe_data_variables(vin: string): Record<string, unknown>;
export declare function past_service_input(value: PastServiceInput): Record<string, unknown>;
export declare function update_past_service_input(value: UpdatePastServiceInput): Record<string, unknown>;
export declare function distance_input(value: DistanceInput): Record<string, unknown>;
export declare function reminder_interval_input(value: ReminderInterval): Record<string, unknown>;
export declare function create_parts_reminder_input(value: CreatePartsReminderInput): Record<string, unknown>;
export declare function update_parts_reminder_input(value: UpdatePartsReminderInput): Record<string, unknown>;
export declare function reset_parts_reminder_input(value: ResetPartsReminderInput): Record<string, unknown>;
export declare function _optional_serialized(value: any | UnsetType | null, serializer: ((arg0: any) => unknown)): unknown;
export declare function _optional_datetime(value: $.DateValue | UnsetType | null): unknown;
export declare function _optional_distance_unit(value: DistanceUnit | UnsetType | null): unknown;
