// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { NcarIcarRegisterAccountInput, add_vehicle_variables, apc_agreement_variables, apc_document_url_variables, connected_terms_and_conditions_by_vin_variables, create_apc_agreement_variables, delete_vehicle_variables, ncar_icar_add_vehicle_variables, onboarding_features_variables, ownership_status_variables, pending_vehicles_variables, update_apc_agreement_variables, update_vehicle_manual_mileage_variables, update_vehicle_nickname_variables, update_vehicle_variables, upload_ownership_verification_variables } from "./garage_inputs";
export { NcarIcarRegisterAccountInput, add_vehicle_variables, apc_agreement_variables, apc_document_url_variables, connected_terms_and_conditions_by_vin_variables, create_apc_agreement_variables, delete_vehicle_variables, ncar_icar_add_vehicle_variables, onboarding_features_variables, ownership_status_variables, pending_vehicles_variables, update_apc_agreement_variables, update_vehicle_manual_mileage_variables, update_vehicle_nickname_variables, update_vehicle_variables, upload_ownership_verification_variables };

import { AddVehicleResult, APCAgreement, APCAgreementMutationResult, APCDocument, ConnectedTermsAndConditionsResult, DeleteVehicleResult, NcarIcarAddVehicleResult, OnboardingFeature, OwnershipStatus, PendingVehicle, UpdateVehicleManualMileageResult, UpdateVehicleNicknameResult, UpdateVehicleResult, UploadOwnershipVerificationResult, VehicleHologram } from "./garage_models";
export { AddVehicleResult, APCAgreement, APCAgreementMutationResult, APCDocument, ConnectedTermsAndConditionsResult, DeleteVehicleResult, NcarIcarAddVehicleResult, OnboardingFeature, OwnershipStatus, PendingVehicle, UpdateVehicleManualMileageResult, UpdateVehicleNicknameResult, UpdateVehicleResult, UploadOwnershipVerificationResult, VehicleHologram };

import { parse_add_vehicle, parse_apc_agreement, parse_apc_document_url, parse_connected_terms_and_conditions_by_vin, parse_create_apc_agreement, parse_delete_vehicle, parse_ncar_icar_add_vehicle, parse_onboarding_features, parse_ownership_status, parse_pending_vehicles, parse_update_apc_agreement, parse_update_vehicle, parse_update_vehicle_manual_mileage, parse_update_vehicle_nickname, parse_upload_ownership_verification } from "./garage_parsing";
export { parse_add_vehicle, parse_apc_agreement, parse_apc_document_url, parse_connected_terms_and_conditions_by_vin, parse_create_apc_agreement, parse_delete_vehicle, parse_ncar_icar_add_vehicle, parse_onboarding_features, parse_ownership_status, parse_pending_vehicles, parse_update_apc_agreement, parse_update_vehicle, parse_update_vehicle_manual_mileage, parse_update_vehicle_nickname, parse_upload_ownership_verification };

import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };

import { Vehicle } from "./models";
export { Vehicle };

import { parse_vehicles } from "./parsing";
export { parse_vehicles };

import { VehicleWithCapabilities } from "./wearable_models";
export { VehicleWithCapabilities };

import { parse_vehicles_with_capabilities } from "./wearable_parsing";
export { parse_vehicles_with_capabilities };

/** Translated upstream _GarageClientMixin. */
export class _GarageClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _GarageClientMixin, __args); }
async_get_vehicles(): Promise<ReadonlyArray<Vehicle>>;
/** Return vehicles attached to the account. */
async async_get_vehicles(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return vehicles attached to the account. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["VehiclesStaticData", $.attr(operations, "VEHICLES_STATIC_DATA"), {}], null));
return $.call(parse_vehicles, [data], null);
}
async_get_vehicles_with_capabilities(): Promise<ReadonlyArray<VehicleWithCapabilities | null> | null>;
/** Return the wearable client's batch vehicle and capability summary. */
async async_get_vehicles_with_capabilities(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return the wearable client's batch vehicle and capability summary. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["WearableVehicles", $.attr(operations, "WEARABLE_VEHICLES"), {}], null));
return $.call(parse_vehicles_with_capabilities, [data], null);
}
async_add_vehicle(vin: string, terms_and_conditions_accepted: boolean): Promise<AddVehicleResult | null>;
/** Register a vehicle in the signed-in account's garage. */
async async_add_vehicle(...__args: any[]): any {
let data;
let {"vin": vin, "terms_and_conditions_accepted": terms_and_conditions_accepted} = $.bind(__args, ["vin", "terms_and_conditions_accepted"], {}, [], null, null);
/** Register a vehicle in the signed-in account's garage. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["AddVehicle", $.attr(operations, "ADD_VEHICLE"), $.call(add_vehicle_variables, [vin, terms_and_conditions_accepted], null)], null));
return $.call(parse_add_vehicle, [data], null);
}
async_delete_vehicle(vin: string): Promise<DeleteVehicleResult | null>;
/** Remove a vehicle from the signed-in account's garage. */
async async_delete_vehicle(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Remove a vehicle from the signed-in account's garage. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DeleteVehicle", $.attr(operations, "DELETE_VEHICLE"), $.call(delete_vehicle_variables, [vin], null)], null));
return $.call(parse_delete_vehicle, [data], null);
}
async_add_ncar_icar_vehicle(terms_and_conditions_accepted: boolean, guid: string, options?: { account?: NcarIcarRegisterAccountInput | UnsetType | null }): Promise<NcarIcarAddVehicleResult | null>;
/** Register a vehicle through the NCAR/ICAR garage flow. */
async async_add_ncar_icar_vehicle(...__args: any[]): any {
let data;
let {"terms_and_conditions_accepted": terms_and_conditions_accepted, "guid": guid, "account": account} = $.bind(__args, ["terms_and_conditions_accepted", "guid"], {"account": UNSET}, ["account"], null, null);
/** Register a vehicle through the NCAR/ICAR garage flow. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NcarIcarAddVehicle", $.attr(operations, "NCAR_ICAR_ADD_VEHICLE"), $.call(ncar_icar_add_vehicle_variables, [terms_and_conditions_accepted, guid], Object.assign({}, {"account": account}))], null));
return $.call(parse_ncar_icar_add_vehicle, [data], null);
}
async_get_pending_vehicles(): Promise<ReadonlyArray<PendingVehicle | null> | null>;
/** Return garage registrations awaiting ownership verification. */
async async_get_pending_vehicles(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return garage registrations awaiting ownership verification. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["PendingVehicles", $.attr(operations, "PENDING_VEHICLES"), $.call(pending_vehicles_variables, [], null)], null));
return $.call(parse_pending_vehicles, [data], null);
}
async_get_ownership_status(vin: string): Promise<OwnershipStatus | null>;
/** Return the vehicle's account ownership sign-in state. */
async async_get_ownership_status(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the vehicle's account ownership sign-in state. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["OwnershipStatus", $.attr(operations, "OWNERSHIP_STATUS"), $.call(ownership_status_variables, [vin], null)], null));
return $.call(parse_ownership_status, [data], null);
}
async_get_apc_agreement(vin: string): Promise<APCAgreement | null>;
/** Return the vehicle's APC agreement state. */
async async_get_apc_agreement(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the vehicle's APC agreement state. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["APCAgreement", $.attr(operations, "APC_AGREEMENT"), $.call(apc_agreement_variables, [vin], null)], null));
return $.call(parse_apc_agreement, [data], null);
}
async_get_apc_document_url(vin: string): Promise<APCDocument | null>;
/** Return the vehicle's APC agreement document URL. */
async async_get_apc_document_url(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the vehicle's APC agreement document URL. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["APCDocumentURL", $.attr(operations, "APC_DOCUMENT_URL"), $.call(apc_document_url_variables, [vin], null)], null));
return $.call(parse_apc_document_url, [data], null);
}
async_create_apc_agreement(vin: string, opt_in: boolean): Promise<APCAgreementMutationResult | null>;
/** Create the vehicle's APC agreement selection. */
async async_create_apc_agreement(...__args: any[]): any {
let data;
let {"vin": vin, "opt_in": opt_in} = $.bind(__args, ["vin", "opt_in"], {}, [], null, null);
/** Create the vehicle's APC agreement selection. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreateAPCAgreement", $.attr(operations, "CREATE_APC_AGREEMENT"), $.call(create_apc_agreement_variables, [vin, opt_in], null)], null));
return $.call(parse_create_apc_agreement, [data], null);
}
async_update_apc_agreement(vin: string, opt_in: boolean): Promise<APCAgreementMutationResult | null>;
/** Update the vehicle's APC agreement selection. */
async async_update_apc_agreement(...__args: any[]): any {
let data;
let {"vin": vin, "opt_in": opt_in} = $.bind(__args, ["vin", "opt_in"], {}, [], null, null);
/** Update the vehicle's APC agreement selection. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateAPCAgreement", $.attr(operations, "UPDATE_APC_AGREEMENT"), $.call(update_apc_agreement_variables, [vin, opt_in], null)], null));
return $.call(parse_update_apc_agreement, [data], null);
}
async_get_connected_terms_and_conditions_by_vin(vin: string): Promise<ConnectedTermsAndConditionsResult | null>;
/** Request connected-services terms for a VIN through Nissan's mutation. */
async async_get_connected_terms_and_conditions_by_vin(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Request connected-services terms for a VIN through Nissan's mutation. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ConnectedTermsAndConditionsByVIN", $.attr(operations, "CONNECTED_TERMS_AND_CONDITIONS_BY_VIN"), $.call(connected_terms_and_conditions_by_vin_variables, [vin], null)], null));
return $.call(parse_connected_terms_and_conditions_by_vin, [data], null);
}
async_get_onboarding_features(vin: string): Promise<ReadonlyArray<OnboardingFeature | null> | null>;
/** Return feature cards used while onboarding a vehicle. */
async async_get_onboarding_features(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return feature cards used while onboarding a vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["OnboardingFeatures", $.attr(operations, "ONBOARDING_FEATURES"), $.call(onboarding_features_variables, [vin], null)], null));
return $.call(parse_onboarding_features, [data], null);
}
async_update_vehicle(vin: string, options?: { license_plate?: string | UnsetType | null; hologram?: VehicleHologram | UnsetType | null }): Promise<UpdateVehicleResult | null>;
/** Update optional license-plate and hologram garage metadata. */
async async_update_vehicle(...__args: any[]): any {
let data;
let {"vin": vin, "license_plate": license_plate, "hologram": hologram} = $.bind(__args, ["vin"], {"license_plate": UNSET, "hologram": UNSET}, ["license_plate", "hologram"], null, null);
/** Update optional license-plate and hologram garage metadata. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateVehicle", $.attr(operations, "UPDATE_VEHICLE"), $.call(update_vehicle_variables, [vin], Object.assign({}, {"license_plate": license_plate}, {"hologram": hologram}))], null));
return $.call(parse_update_vehicle, [data], null);
}
async_update_vehicle_manual_mileage(vin: string, options?: { manual_mileage?: number | UnsetType | null }): Promise<UpdateVehicleManualMileageResult | null>;
/** Update or clear the vehicle's manually recorded mileage. */
async async_update_vehicle_manual_mileage(...__args: any[]): any {
let data;
let {"vin": vin, "manual_mileage": manual_mileage} = $.bind(__args, ["vin"], {"manual_mileage": UNSET}, ["manual_mileage"], null, null);
/** Update or clear the vehicle's manually recorded mileage. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateVehicleManualMileage", $.attr(operations, "UPDATE_VEHICLE_MANUAL_MILEAGE"), $.call(update_vehicle_manual_mileage_variables, [vin], Object.assign({}, {"manual_mileage": manual_mileage}))], null));
return $.call(parse_update_vehicle_manual_mileage, [data], null);
}
async_update_vehicle_nickname(vin: string, nickname: string): Promise<UpdateVehicleNicknameResult | null>;
/** Update the vehicle nickname shown in the account garage. */
async async_update_vehicle_nickname(...__args: any[]): any {
let data;
let {"vin": vin, "nickname": nickname} = $.bind(__args, ["vin", "nickname"], {}, [], null, null);
/** Update the vehicle nickname shown in the account garage. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateVehicleNickname", $.attr(operations, "UPDATE_VEHICLE_NICKNAME"), $.call(update_vehicle_nickname_variables, [vin, nickname], null)], null));
return $.call(parse_update_vehicle_nickname, [data], null);
}
async_upload_ownership_verification(vin: string, filename: string, attachment: string, opt_in_sms: boolean): Promise<UploadOwnershipVerificationResult | null>;
/** Upload an ownership-verification attachment for a pending vehicle. */
async async_upload_ownership_verification(...__args: any[]): any {
let data;
let {"vin": vin, "filename": filename, "attachment": attachment, "opt_in_sms": opt_in_sms} = $.bind(__args, ["vin", "filename", "attachment", "opt_in_sms"], {}, [], null, null);
/** Upload an ownership-verification attachment for a pending vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UploadOwnershipVerification", $.attr(operations, "UPLOAD_OWNERSHIP_VERIFICATION"), $.call(upload_ownership_verification_variables, [vin, filename, attachment, opt_in_sms], null)], null));
return $.call(parse_upload_ownership_verification, [data], null);
}
}
$.classType(_GarageClientMixin);
export interface _GarageClientMixin extends _NissanClientBase {}
