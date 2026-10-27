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
declare const _IncidentClientMixin_base: any;
/** Translated upstream _IncidentClientMixin. */
export declare class _IncidentClientMixin extends _IncidentClientMixin_base {
    constructor(...__args: any[]);
    async_get_insurers(): Promise<ReadonlyArray<VehicleInsurer | null> | null>;
    async_get_vehicle_insurance(vin: string): Promise<VehicleInsurance | null>;
    async_add_vehicle_insurance(config: VehicleInsuranceInput): Promise<VehicleInsuranceMutationResult | null>;
    async_update_vehicle_insurance(config: VehicleInsuranceInput): Promise<VehicleInsuranceMutationResult | null>;
    async_get_collision_centers(config: CollisionCenterSearchInput): Promise<ReadonlyArray<CollisionCenter | null> | null>;
    async_create_collision_report(config: CreateCollisionReportInput): Promise<CreateCollisionReportResult | null>;
    async_create_collision_report_pdf(collision_id: string): Promise<CreateCollisionReportPdfResult | null>;
    async_delete_photo_for_collision_report(vin: string, collision_id: string, photo_section: PhotoSection): Promise<DeleteCollisionReportPhotoResult | null>;
    async_upload_photo_for_collision_report(vin: string, collision_id: string, photo: CollisionReportPhotoInput, photo_section: PhotoSection): Promise<UploadCollisionReportPhotoResult | null>;
}
export interface _IncidentClientMixin extends _NissanClientBase {
}
