// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

import { PlugAndChargeStatusInput } from "./pnc_models";
export { PlugAndChargeStatusInput };

export function start_charge_session_variables(vin: string, evse_id: string, options?: { location_id?: string | UnsetType | null }): Record<string, unknown>;
/** Build the public-session start input with optional location identity. */
export function start_charge_session_variables(...__args: any[]): any {
let {"vin": vin, "evse_id": evse_id, "location_id": location_id} = $.bind(__args, ["vin", "evse_id"], {"location_id": UNSET}, ["location_id"], null, null);
/** Build the public-session start input with optional location identity. */
return Object.assign({}, {["config"]: $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"evseId": evse_id}, {"locationId": location_id}))});
}

export function stop_charge_session_variables(vin: string): Record<string, unknown>;
/** Build the public-session stop input used by every upstream service call site. */
export function stop_charge_session_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Build the public-session stop input used by every upstream service call site. */
return Object.assign({}, {["config"]: Object.assign({}, {["vin"]: vin})});
}

export function update_pnc_service_status_variables(vin: string, status: PlugAndChargeStatusInput): Record<string, unknown>;
/** Build an enable or disable request for Plug & Charge enrollment. */
export function update_pnc_service_status_variables(...__args: any[]): any {
let {"vin": vin, "status": status} = $.bind(__args, ["vin", "status"], {}, [], null, null);
/** Build an enable or disable request for Plug & Charge enrollment. */
return Object.assign({}, {["config"]: Object.assign({}, {["vin"]: vin}, {["pncServiceStatus"]: $.call(serialize_enum, [status], null)})});
}

export function retry_certificate_install_variables(vin: string): Record<string, unknown>;
/** Build the EMP certificate-install retry input. */
export function retry_certificate_install_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Build the EMP certificate-install retry input. */
return Object.assign({}, {["config"]: Object.assign({}, {["vin"]: vin})});
}
