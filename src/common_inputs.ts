// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

import { UNSET, UnsetType, optional_input_fields } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields };

/** Optional postal address fields accepted by Nissan input objects. */
export class AddressInput {
readonly address1: string | UnsetType | null;
readonly address2: string | UnsetType | null;
readonly city: string | UnsetType | null;
readonly state: string | UnsetType | null;
readonly postal_code: string | UnsetType | null;
readonly country: string | UnsetType | null;
readonly neighbourhood: string | UnsetType | null;
readonly district: string | UnsetType | null;
readonly street_number: string | UnsetType | null;
static __fields = [["address1", UNSET], ["address2", UNSET], ["city", UNSET], ["state", UNSET], ["postal_code", UNSET], ["country", UNSET], ["neighbourhood", UNSET], ["district", UNSET], ["street_number", UNSET]];
constructor(address1?: string | UnsetType | null, address2?: string | UnsetType | null, city?: string | UnsetType | null, state?: string | UnsetType | null, postal_code?: string | UnsetType | null, country?: string | UnsetType | null, neighbourhood?: string | UnsetType | null, district?: string | UnsetType | null, street_number?: string | UnsetType | null);
constructor(options: { address1?: string | UnsetType | null; address2?: string | UnsetType | null; city?: string | UnsetType | null; state?: string | UnsetType | null; postal_code?: string | UnsetType | null; country?: string | UnsetType | null; neighbourhood?: string | UnsetType | null; district?: string | UnsetType | null; street_number?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AddressInput, __args);  Object.freeze(this); }
}
$.classType(AddressInput);

/** Required latitude and longitude accepted by Nissan input objects. */
export class CoordinateInput {
readonly latitude: number;
readonly longitude: number;
static __fields = [["latitude", $.MISSING], ["longitude", $.MISSING]];
constructor(latitude: number, longitude: number);
constructor(options: { latitude: number; longitude: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CoordinateInput, __args);  Object.freeze(this); }
}
$.classType(CoordinateInput);

export function address_input(value: AddressInput): Record<string, unknown>;
/** Translated upstream address_input. */
export function address_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"address1": $.attr(value, "address1")}, {"address2": $.attr(value, "address2")}, {"city": $.attr(value, "city")}, {"state": $.attr(value, "state")}, {"postalCode": $.attr(value, "postal_code")}, {"country": $.attr(value, "country")}, {"neighbourhood": $.attr(value, "neighbourhood")}, {"district": $.attr(value, "district")}, {"streetNumber": $.attr(value, "street_number")}));
}

export function coordinate_input(value: CoordinateInput): Record<string, unknown>;
/** Translated upstream coordinate_input. */
export function coordinate_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return Object.assign({}, {["latitude"]: $.attr(value, "latitude")}, {["longitude"]: $.attr(value, "longitude")});
}
