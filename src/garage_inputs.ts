// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

import { VehicleHologram } from "./garage_models";
export { VehicleHologram };

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

/** Complete non-null address required by an NCAR/ICAR account registration. */
export class NcarIcarRegisterAccountAddressInput {
readonly address_1: string;
readonly address_2: string;
readonly city: string;
readonly state: string;
readonly postal_code: string;
readonly country: string;
static __fields = [["address_1", $.MISSING], ["address_2", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["postal_code", $.MISSING], ["country", $.MISSING]];
constructor(address_1: string, address_2: string, city: string, state: string, postal_code: string, country: string);
constructor(options: { address_1: string; address_2: string; city: string; state: string; postal_code: string; country: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarRegisterAccountAddressInput, __args);  Object.freeze(this); }
}
$.classType(NcarIcarRegisterAccountAddressInput);

/** Complete non-null account accepted by NCAR/ICAR vehicle registration. */
export class NcarIcarRegisterAccountInput {
readonly first_name: string;
readonly last_name: string;
readonly email: string;
readonly phone_number: string;
readonly address: NcarIcarRegisterAccountAddressInput;
static __fields = [["first_name", $.MISSING], ["last_name", $.MISSING], ["email", $.MISSING], ["phone_number", $.MISSING], ["address", $.MISSING]];
constructor(first_name: string, last_name: string, email: string, phone_number: string, address: NcarIcarRegisterAccountAddressInput);
constructor(options: { first_name: string; last_name: string; email: string; phone_number: string; address: NcarIcarRegisterAccountAddressInput });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NcarIcarRegisterAccountInput, __args);  Object.freeze(this); }
}
$.classType(NcarIcarRegisterAccountInput);

export function add_vehicle_variables(vin: string, terms_and_conditions_accepted: boolean): Record<string, unknown>;
/** Serialize direct garage registration variables. */
export function add_vehicle_variables(...__args: any[]): any {
let {"vin": vin, "terms_and_conditions_accepted": terms_and_conditions_accepted} = $.bind(__args, ["vin", "terms_and_conditions_accepted"], {}, [], null, null);
/** Serialize direct garage registration variables. */
return Object.assign({}, {["vin"]: vin}, {["termsAndConditionsAccepted"]: terms_and_conditions_accepted});
}

export function delete_vehicle_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for garage deletion. */
export function delete_vehicle_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for garage deletion. */
return Object.assign({}, {["vin"]: vin});
}

export function ncar_icar_add_vehicle_variables(terms_and_conditions_accepted: boolean, guid: string, options?: { account?: NcarIcarRegisterAccountInput | UnsetType | null }): Record<string, unknown>;
/** Serialize NCAR/ICAR registration while preserving account omission and null. */
export function ncar_icar_add_vehicle_variables(...__args: any[]): any {
let {"terms_and_conditions_accepted": terms_and_conditions_accepted, "guid": guid, "account": account} = $.bind(__args, ["terms_and_conditions_accepted", "guid"], {"account": UNSET}, ["account"], null, null);
/** Serialize NCAR/ICAR registration while preserving account omission and null. */
return $.call(optional_input_fields, [], Object.assign({}, {"termsAndConditionsAccepted": terms_and_conditions_accepted}, {"guid": guid}, {"account": $.call(_optional_ncar_icar_account, [account], null)}));
}

export function pending_vehicles_variables(): Record<string, unknown>;
/** Return the empty variables object used by PendingVehicles. */
export function pending_vehicles_variables(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
/** Return the empty variables object used by PendingVehicles. */
return {};
}

export function ownership_status_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for ownership status. */
export function ownership_status_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for ownership status. */
return Object.assign({}, {["vin"]: vin});
}

export function apc_agreement_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for APC agreement status. */
export function apc_agreement_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for APC agreement status. */
return Object.assign({}, {["vin"]: vin});
}

export function apc_document_url_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for the APC document URL. */
export function apc_document_url_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for the APC document URL. */
return Object.assign({}, {["vin"]: vin});
}

export function create_apc_agreement_variables(vin: string, opt_in: boolean): Record<string, unknown>;
/** Serialize APC agreement creation variables. */
export function create_apc_agreement_variables(...__args: any[]): any {
let {"vin": vin, "opt_in": opt_in} = $.bind(__args, ["vin", "opt_in"], {}, [], null, null);
/** Serialize APC agreement creation variables. */
return Object.assign({}, {["optIn"]: opt_in}, {["vin"]: vin});
}

export function update_apc_agreement_variables(vin: string, opt_in: boolean): Record<string, unknown>;
/** Serialize APC agreement update variables. */
export function update_apc_agreement_variables(...__args: any[]): any {
let {"vin": vin, "opt_in": opt_in} = $.bind(__args, ["vin", "opt_in"], {}, [], null, null);
/** Serialize APC agreement update variables. */
return Object.assign({}, {["optIn"]: opt_in}, {["vin"]: vin});
}

export function connected_terms_and_conditions_by_vin_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for connected-services terms lookup. */
export function connected_terms_and_conditions_by_vin_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for connected-services terms lookup. */
return Object.assign({}, {["vin"]: vin});
}

export function onboarding_features_variables(vin: string): Record<string, unknown>;
/** Serialize the required VIN for onboarding features. */
export function onboarding_features_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize the required VIN for onboarding features. */
return Object.assign({}, {["vin"]: vin});
}

export function update_vehicle_variables(vin: string, options?: { license_plate?: string | UnsetType | null; hologram?: VehicleHologram | UnsetType | null }): Record<string, unknown>;
/** Serialize vehicle metadata updates with Apollo omission semantics. */
export function update_vehicle_variables(...__args: any[]): any {
let {"vin": vin, "license_plate": license_plate, "hologram": hologram} = $.bind(__args, ["vin"], {"license_plate": UNSET, "hologram": UNSET}, ["license_plate", "hologram"], null, null);
/** Serialize vehicle metadata updates with Apollo omission semantics. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"licensePlate": license_plate}, {"hologram": $.call(_optional_hologram, [hologram], null)}));
}

export function update_vehicle_manual_mileage_variables(vin: string, options?: { manual_mileage?: number | UnsetType | null }): Record<string, unknown>;
/** Serialize a nullable or omitted manual-mileage update. */
export function update_vehicle_manual_mileage_variables(...__args: any[]): any {
let {"vin": vin, "manual_mileage": manual_mileage} = $.bind(__args, ["vin"], {"manual_mileage": UNSET}, ["manual_mileage"], null, null);
/** Serialize a nullable or omitted manual-mileage update. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"manualMileage": manual_mileage}));
}

export function update_vehicle_nickname_variables(vin: string, nickname: string): Record<string, unknown>;
/** Serialize the required nickname update variables. */
export function update_vehicle_nickname_variables(...__args: any[]): any {
let {"vin": vin, "nickname": nickname} = $.bind(__args, ["vin", "nickname"], {}, [], null, null);
/** Serialize the required nickname update variables. */
return Object.assign({}, {["vin"]: vin}, {["nickname"]: nickname});
}

export function upload_ownership_verification_variables(vin: string, filename: string, attachment: string, opt_in_sms: boolean): Record<string, unknown>;
/** Serialize the complete ownership-verification upload variables. */
export function upload_ownership_verification_variables(...__args: any[]): any {
let {"vin": vin, "filename": filename, "attachment": attachment, "opt_in_sms": opt_in_sms} = $.bind(__args, ["vin", "filename", "attachment", "opt_in_sms"], {}, [], null, null);
/** Serialize the complete ownership-verification upload variables. */
return Object.assign({}, {["vin"]: vin}, {["filename"]: filename}, {["attachment"]: attachment}, {["optInSMS"]: opt_in_sms});
}

export function ncar_icar_register_account_address_input(value: NcarIcarRegisterAccountAddressInput): Record<string, unknown>;
/** Serialize an NCAR/ICAR account address with schema field names. */
export function ncar_icar_register_account_address_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize an NCAR/ICAR account address with schema field names. */
return Object.assign({}, {["address1"]: $.attr(value, "address_1")}, {["address2"]: $.attr(value, "address_2")}, {["city"]: $.attr(value, "city")}, {["state"]: $.attr(value, "state")}, {["postalCode"]: $.attr(value, "postal_code")}, {["country"]: $.attr(value, "country")});
}

export function ncar_icar_register_account_input(value: NcarIcarRegisterAccountInput): Record<string, unknown>;
/** Serialize the nested NCAR/ICAR account input. */
export function ncar_icar_register_account_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize the nested NCAR/ICAR account input. */
return Object.assign({}, {["firstName"]: $.attr(value, "first_name")}, {["lastName"]: $.attr(value, "last_name")}, {["email"]: $.attr(value, "email")}, {["phoneNumber"]: $.attr(value, "phone_number")}, {["address"]: $.call(ncar_icar_register_account_address_input, [$.attr(value, "address")], null)});
}

export function _optional_ncar_icar_account(value: NcarIcarRegisterAccountInput | UnsetType | null): unknown;
/** Translated upstream _optional_ncar_icar_account. */
export function _optional_ncar_icar_account(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call(ncar_icar_register_account_input, [value], null);
}

export function _optional_hologram(value: VehicleHologram | UnsetType | null): unknown;
/** Translated upstream _optional_hologram. */
export function _optional_hologram(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, VehicleHologram], null))) {
return $.call(serialize_enum, [value], null);
}
return value;
}
