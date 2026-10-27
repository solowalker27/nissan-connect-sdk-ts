import { py as $ } from "./_runtime";
import { AddressInput, CoordinateInput, address_input, coordinate_input } from "./common_inputs";
export { AddressInput, CoordinateInput, address_input, coordinate_input };
import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };
import { DistanceUnit, SpeedUnit, WeekDay } from "./models";
export { DistanceUnit, SpeedUnit, WeekDay };
export declare const BoundaryAlertType: $.EnumType<{
    readonly ON_ENTRY: "ON_ENTRY";
    readonly ON_EXIT: "ON_EXIT";
}>;
export type BoundaryAlertType = ReturnType<typeof BoundaryAlertType>;
/** Boundary radius with its required distance unit. */
export declare class AlertRadiusInput {
    readonly value: number;
    readonly unit: DistanceUnit;
    static __fields: (string | symbol)[][];
    constructor(value: number, unit: DistanceUnit);
    constructor(options: {
        value: number;
        unit: DistanceUnit;
    });
}
/** Valet radius whose non-null distance unit may be omitted. */
export declare class ValetRadiusInput {
    readonly value: number;
    readonly unit: DistanceUnit | UnsetType;
    static __fields: any[][];
    constructor(value: number, unit?: DistanceUnit | UnsetType);
    constructor(options: {
        value: number;
        unit?: DistanceUnit | UnsetType;
    });
}
/** Complete settings required to create a boundary alert. */
export declare class BoundaryAlertInput {
    readonly name: string;
    readonly coordinate: CoordinateInput;
    readonly radius: AlertRadiusInput;
    readonly in_vehicle_warning: boolean;
    readonly alert_type: BoundaryAlertType;
    readonly address: AddressInput;
    static __fields: any[][];
    constructor(name: string, coordinate: CoordinateInput, radius: AlertRadiusInput, in_vehicle_warning: boolean, alert_type: BoundaryAlertType, address?: AddressInput);
    constructor(options: {
        name: string;
        coordinate: CoordinateInput;
        radius: AlertRadiusInput;
        in_vehicle_warning: boolean;
        alert_type: BoundaryAlertType;
        address?: AddressInput;
    });
}
/** Partial boundary alert update; omitted fields remain unchanged. */
export declare class BoundaryAlertUpdate {
    readonly name: string | UnsetType | null;
    readonly coordinate: CoordinateInput | UnsetType | null;
    readonly address: AddressInput | UnsetType | null;
    readonly radius: AlertRadiusInput | UnsetType | null;
    readonly in_vehicle_warning: boolean | UnsetType | null;
    readonly alert_type: BoundaryAlertType | UnsetType | null;
    static __fields: any[][];
    constructor(name?: string | UnsetType | null, coordinate?: CoordinateInput | UnsetType | null, address?: AddressInput | UnsetType | null, radius?: AlertRadiusInput | UnsetType | null, in_vehicle_warning?: boolean | UnsetType | null, alert_type?: BoundaryAlertType | UnsetType | null);
    constructor(options: {
        name?: string | UnsetType | null;
        coordinate?: CoordinateInput | UnsetType | null;
        address?: AddressInput | UnsetType | null;
        radius?: AlertRadiusInput | UnsetType | null;
        in_vehicle_warning?: boolean | UnsetType | null;
        alert_type?: BoundaryAlertType | UnsetType | null;
    });
}
/** Recurring schedule required by a curfew alert. */
export declare class AlertScheduleInput {
    readonly start_date_time: $.DateValue;
    readonly duration: string;
    readonly week_days: ReadonlyArray<WeekDay>;
    static __fields: (string | symbol)[][];
    constructor(start_date_time: $.DateValue, duration: string, week_days: ReadonlyArray<WeekDay>);
    constructor(options: {
        start_date_time: $.DateValue;
        duration: string;
        week_days: ReadonlyArray<WeekDay>;
    });
}
/** Complete settings required to create or replace a curfew alert. */
export declare class CurfewAlertInput {
    readonly name: string;
    readonly in_vehicle_warning: boolean;
    readonly schedule: AlertScheduleInput;
    static __fields: (string | symbol)[][];
    constructor(name: string, in_vehicle_warning: boolean, schedule: AlertScheduleInput);
    constructor(options: {
        name: string;
        in_vehicle_warning: boolean;
        schedule: AlertScheduleInput;
    });
}
/** Unit-aware speed threshold used by current MyNISSAN clients. */
export declare class AlertSpeedInput {
    readonly unit: SpeedUnit;
    readonly value: number;
    static __fields: (string | symbol)[][];
    constructor(unit: SpeedUnit, value: number);
    constructor(options: {
        unit: SpeedUnit;
        value: number;
    });
}
/** Speed alert settings, including the optional legacy MPH field. */
export declare class SpeedAlertInput {
    readonly in_vehicle_warning: boolean;
    readonly speed: AlertSpeedInput | UnsetType | null;
    readonly speed_in_mph: number | UnsetType | null;
    static __fields: any[][];
    constructor(in_vehicle_warning: boolean, speed?: AlertSpeedInput | UnsetType | null, speed_in_mph?: number | UnsetType | null);
    constructor(options: {
        in_vehicle_warning: boolean;
        speed?: AlertSpeedInput | UnsetType | null;
        speed_in_mph?: number | UnsetType | null;
    });
}
export declare function boundary_alert_input(value: BoundaryAlertInput): Record<string, unknown>;
export declare function boundary_alert_update_input(service_request_id: string, value: BoundaryAlertUpdate): Record<string, unknown>;
export declare function curfew_alert_input(value: CurfewAlertInput): Record<string, unknown>;
export declare function speed_alert_input(value: SpeedAlertInput): Record<string, unknown>;
export declare function radius_input(value: AlertRadiusInput): Record<string, unknown>;
export declare function valet_radius_input(value: ValetRadiusInput): Record<string, unknown>;
export declare function optional_coordinate_input(value: CoordinateInput | UnsetType | null): unknown;
export declare function optional_valet_radius_input(value: ValetRadiusInput | UnsetType | null): unknown;
export declare function alert_speed_input(value: AlertSpeedInput): Record<string, unknown>;
export declare function _optional_serialized(value: any | UnsetType | null, serializer: ((arg0: any) => unknown)): unknown;
export declare function _optional_enum(value: $.EnumValue | UnsetType | null): string | UnsetType | null;
