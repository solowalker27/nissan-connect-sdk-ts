// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

import { DistanceUnit } from "./models";
export { DistanceUnit };

export function vehicle_preferred_dealer_variables(vin: string): Record<string, unknown>;
/** Serialize variables for the preferred-dealer query. */
export function vehicle_preferred_dealer_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize variables for the preferred-dealer query. */
return Object.assign({}, {["vin"]: vin});
}

export function vehicle_recalls_variables(vin: string): Record<string, unknown>;
/** Serialize variables for the standalone vehicle-recalls query. */
export function vehicle_recalls_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize variables for the standalone vehicle-recalls query. */
return Object.assign({}, {["vin"]: vin});
}

export function vehicle_roadside_assistance_variables(vin: string): Record<string, unknown>;
/** Serialize variables for the roadside-assistance query. */
export function vehicle_roadside_assistance_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize variables for the roadside-assistance query. */
return Object.assign({}, {["vin"]: vin});
}

export function vehicle_service_history_variables(vin: string, options?: { unit?: DistanceUnit | UnsetType | null }): Record<string, unknown>;
/** Serialize service-history variables while preserving Apollo optionality. */
export function vehicle_service_history_variables(...__args: any[]): any {
let {"vin": vin, "unit": unit} = $.bind(__args, ["vin"], {"unit": UNSET}, ["unit"], null, null);
/** Serialize service-history variables while preserving Apollo optionality. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"unit": $.call(_optional_distance_unit, [unit], null)}));
}

export function warranty_info_variables(vin: string, options?: { mileage?: number | UnsetType | null }): Record<string, unknown>;
/** Serialize warranty variables while preserving omitted and null mileage. */
export function warranty_info_variables(...__args: any[]): any {
let {"vin": vin, "mileage": mileage} = $.bind(__args, ["vin"], {"mileage": UNSET}, ["mileage"], null, null);
/** Serialize warranty variables while preserving omitted and null mileage. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"mileage": mileage}));
}

export function _optional_distance_unit(value: DistanceUnit | UnsetType | null): unknown;
/** Translated upstream _optional_distance_unit. */
export function _optional_distance_unit(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, DistanceUnit], null))) {
return $.call(serialize_enum, [value], null);
}
return value;
}
