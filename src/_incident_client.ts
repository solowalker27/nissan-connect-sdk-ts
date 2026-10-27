// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { CollisionCenterSearchInput, CollisionReportPhotoInput, CreateCollisionReportInput, collision_center_variables, collision_report_pdf_variables, collision_report_photo_variables, create_collision_report_variables, delete_collision_report_photo_variables } from "./collision_report_inputs";
export { CollisionCenterSearchInput, CollisionReportPhotoInput, CreateCollisionReportInput, collision_center_variables, collision_report_pdf_variables, collision_report_photo_variables, create_collision_report_variables, delete_collision_report_photo_variables };

import { CollisionCenter, CreateCollisionReportPdfResult, CreateCollisionReportResult, DeleteCollisionReportPhotoResult, PhotoSection, UploadCollisionReportPhotoResult } from "./collision_report_models";
export { CollisionCenter, CreateCollisionReportPdfResult, CreateCollisionReportResult, DeleteCollisionReportPhotoResult, PhotoSection, UploadCollisionReportPhotoResult };

import { parse_collision_centers, parse_create_collision_report, parse_create_collision_report_pdf, parse_delete_collision_report_photo, parse_upload_collision_report_photo } from "./collision_report_parsing";
export { parse_collision_centers, parse_create_collision_report, parse_create_collision_report_pdf, parse_delete_collision_report_photo, parse_upload_collision_report_photo };

import { VehicleInsuranceInput, vehicle_insurance_variables } from "./insurance_inputs";
export { VehicleInsuranceInput, vehicle_insurance_variables };

import { VehicleInsurance, VehicleInsuranceMutationResult, VehicleInsurer } from "./insurance_models";
export { VehicleInsurance, VehicleInsuranceMutationResult, VehicleInsurer };

import { parse_add_vehicle_insurance, parse_insurers, parse_update_vehicle_insurance, parse_vehicle_insurance } from "./insurance_parsing";
export { parse_add_vehicle_insurance, parse_insurers, parse_update_vehicle_insurance, parse_vehicle_insurance };

/** Translated upstream _IncidentClientMixin. */
export class _IncidentClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _IncidentClientMixin, __args); }
async_get_insurers(): Promise<ReadonlyArray<VehicleInsurer | null> | null>;
/** Return the insurer catalog available to the signed-in account. */
async async_get_insurers(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return the insurer catalog available to the signed-in account. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["Insurers", $.attr(operations, "INSURERS"), {}], null));
return $.call(parse_insurers, [data], null);
}
async_get_vehicle_insurance(vin: string): Promise<VehicleInsurance | null>;
/** Return the insurance policy attached to a vehicle. */
async async_get_vehicle_insurance(...__args: any[]): any {
let data;
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Return the insurance policy attached to a vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GetVehicleInsurance", $.attr(operations, "GET_VEHICLE_INSURANCE"), Object.assign({}, {["vin"]: vin})], null));
return $.call(parse_vehicle_insurance, [data], null);
}
async_add_vehicle_insurance(config: VehicleInsuranceInput): Promise<VehicleInsuranceMutationResult | null>;
/** Add insurance details to a vehicle. */
async async_add_vehicle_insurance(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Add insurance details to a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["AddVehicleInsurance", $.attr(operations, "ADD_VEHICLE_INSURANCE"), $.call(vehicle_insurance_variables, [config], null)], null));
return $.call(parse_add_vehicle_insurance, [data], null);
}
async_update_vehicle_insurance(config: VehicleInsuranceInput): Promise<VehicleInsuranceMutationResult | null>;
/** Replace insurance details for a vehicle. */
async async_update_vehicle_insurance(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Replace insurance details for a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateVehicleInsurance", $.attr(operations, "UPDATE_VEHICLE_INSURANCE"), $.call(vehicle_insurance_variables, [config], null)], null));
return $.call(parse_update_vehicle_insurance, [data], null);
}
async_get_collision_centers(config: CollisionCenterSearchInput): Promise<ReadonlyArray<CollisionCenter | null> | null>;
/** Return collision centers matching vehicle and location filters. */
async async_get_collision_centers(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Return collision centers matching vehicle and location filters. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CollisionCenters", $.attr(operations, "COLLISION_CENTERS"), $.call(collision_center_variables, [config], null)], null));
return $.call(parse_collision_centers, [data], null);
}
async_create_collision_report(config: CreateCollisionReportInput): Promise<CreateCollisionReportResult | null>;
/** Create a collision report for a vehicle. */
async async_create_collision_report(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Create a collision report for a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreateCollisionReport", $.attr(operations, "CREATE_COLLISION_REPORT"), $.call(create_collision_report_variables, [config], null)], null));
return $.call(parse_create_collision_report, [data], null);
}
async_create_collision_report_pdf(collision_id: string): Promise<CreateCollisionReportPdfResult | null>;
/** Generate a PDF URL for a collision report. */
async async_create_collision_report_pdf(...__args: any[]): any {
let data;
let {"collision_id": collision_id} = $.bind(__args, ["collision_id"], {}, [], null, null);
/** Generate a PDF URL for a collision report. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreateCollisionReportPDF", $.attr(operations, "CREATE_COLLISION_REPORT_PDF"), $.call(collision_report_pdf_variables, [collision_id], null)], null));
return $.call(parse_create_collision_report_pdf, [data], null);
}
async_delete_photo_for_collision_report(vin: string, collision_id: string, photo_section: PhotoSection): Promise<DeleteCollisionReportPhotoResult | null>;
/** Delete one photo slot from a collision report. */
async async_delete_photo_for_collision_report(...__args: any[]): any {
let data;
let {"vin": vin, "collision_id": collision_id, "photo_section": photo_section} = $.bind(__args, ["vin", "collision_id", "photo_section"], {}, [], null, null);
/** Delete one photo slot from a collision report. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DeletePhotoForCollisionReport", $.attr(operations, "DELETE_PHOTO_FOR_COLLISION_REPORT"), $.call(delete_collision_report_photo_variables, [vin, collision_id, photo_section], null)], null));
return $.call(parse_delete_collision_report_photo, [data], null);
}
async_upload_photo_for_collision_report(vin: string, collision_id: string, photo: CollisionReportPhotoInput, photo_section: PhotoSection): Promise<UploadCollisionReportPhotoResult | null>;
/** Upload a Base64 attachment to one collision-report photo slot. */
async async_upload_photo_for_collision_report(...__args: any[]): any {
let data;
let {"vin": vin, "collision_id": collision_id, "photo": photo, "photo_section": photo_section} = $.bind(__args, ["vin", "collision_id", "photo", "photo_section"], {}, [], null, null);
/** Upload a Base64 attachment to one collision-report photo slot. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UploadPhotoForCollisionReport", $.attr(operations, "UPLOAD_PHOTO_FOR_COLLISION_REPORT"), $.call(collision_report_photo_variables, [vin, collision_id, photo, photo_section], null)], null));
return $.call(parse_upload_collision_report_photo, [data], null);
}
}
$.classType(_IncidentClientMixin);
export interface _IncidentClientMixin extends _NissanClientBase {}
