import { py as $ } from "./_runtime";
export declare const UnsetType: $.EnumType<{
    readonly UNSET: "UNSET";
}>;
export type UnsetType = ReturnType<typeof UnsetType>;
export declare let UNSET: any;
export declare function serialize_datetime(value: $.DateValue): string;
export declare function serialize_enum(value: $.EnumValue): string;
export declare function optional_input_fields(): Record<string, unknown>;
