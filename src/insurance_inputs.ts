// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

import { UNSET, UnsetType, optional_input_fields } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields };

/** Insurance details accepted by the add and update mutations. */
export class VehicleInsuranceInput {
readonly vin: string;
readonly insurer_id: string;
readonly policy_number: string;
readonly expiry_date: string;
readonly custom_insurance_name: string | UnsetType | null;
readonly custom_insurance_phone_number: string | UnsetType | null;
static __fields = [["vin", $.MISSING], ["insurer_id", $.MISSING], ["policy_number", $.MISSING], ["expiry_date", $.MISSING], ["custom_insurance_name", UNSET], ["custom_insurance_phone_number", UNSET]];
constructor(vin: string, insurer_id: string, policy_number: string, expiry_date: string, custom_insurance_name?: string | UnsetType | null, custom_insurance_phone_number?: string | UnsetType | null);
constructor(options: { vin: string; insurer_id: string; policy_number: string; expiry_date: string; custom_insurance_name?: string | UnsetType | null; custom_insurance_phone_number?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleInsuranceInput, __args);  Object.freeze(this); }
}
$.classType(VehicleInsuranceInput);

export function vehicle_insurance_variables(config: VehicleInsuranceInput): Record<string, unknown>;
/** Serialize a complete vehicle-insurance mutation input. */
export function vehicle_insurance_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize a complete vehicle-insurance mutation input. */
return Object.assign({}, {["input"]: $.call(optional_input_fields, [], Object.assign({}, {"vin": $.attr(config, "vin")}, {"insurerId": $.attr(config, "insurer_id")}, {"policyNumber": $.attr(config, "policy_number")}, {"expiryDate": $.attr(config, "expiry_date")}, {"customInsuranceName": $.attr(config, "custom_insurance_name")}, {"customInsurancePhoneNumber": $.attr(config, "custom_insurance_phone_number")}))});
}
