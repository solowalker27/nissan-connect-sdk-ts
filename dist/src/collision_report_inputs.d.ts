import { py as $ } from "./_runtime";
import { PhotoSection } from "./collision_report_models";
export { PhotoSection };
import { CoordinateInput, coordinate_input } from "./common_inputs";
export { CoordinateInput, coordinate_input };
import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };
import { DistanceUnit } from "./models";
export { DistanceUnit };
/** Optional country and postal code for collision-center discovery. */
export declare class CollisionCenterAddressInput {
    readonly country: string | UnsetType | null;
    readonly postal_code: string | UnsetType | null;
    static __fields: any[][];
    constructor(country?: string | UnsetType | null, postal_code?: string | UnsetType | null);
    constructor(options: {
        country?: string | UnsetType | null;
        postal_code?: string | UnsetType | null;
    });
}
/** Vehicle and optional location or claim filters for collision centers. */
export declare class CollisionCenterSearchInput {
    readonly vin: string;
    readonly coordinates: CoordinateInput | UnsetType | null;
    readonly address: CollisionCenterAddressInput | UnsetType | null;
    readonly claim_id: string | UnsetType | null;
    static __fields: any[][];
    constructor(vin: string, coordinates?: CoordinateInput | UnsetType | null, address?: CollisionCenterAddressInput | UnsetType | null, claim_id?: string | UnsetType | null);
    constructor(options: {
        vin: string;
        coordinates?: CoordinateInput | UnsetType | null;
        address?: CollisionCenterAddressInput | UnsetType | null;
        claim_id?: string | UnsetType | null;
    });
}
/** Required vehicle identity and optional registration details. */
export declare class CollisionReportVehicleInput {
    readonly make: string;
    readonly model: string;
    readonly model_year: string;
    readonly license_plate: string | UnsetType | null;
    readonly color: string | UnsetType | null;
    static __fields: any[][];
    constructor(make: string, model: string, model_year: string, license_plate?: string | UnsetType | null, color?: string | UnsetType | null);
    constructor(options: {
        make: string;
        model: string;
        model_year: string;
        license_plate?: string | UnsetType | null;
        color?: string | UnsetType | null;
    });
}
/** Optional driver contact fields included in a collision report. */
export declare class CollisionReportUserInput {
    readonly first_name: string | UnsetType | null;
    readonly last_name: string | UnsetType | null;
    readonly email: string | UnsetType | null;
    readonly phone_number: string | UnsetType | null;
    static __fields: any[][];
    constructor(first_name?: string | UnsetType | null, last_name?: string | UnsetType | null, email?: string | UnsetType | null, phone_number?: string | UnsetType | null);
    constructor(options: {
        first_name?: string | UnsetType | null;
        last_name?: string | UnsetType | null;
        email?: string | UnsetType | null;
        phone_number?: string | UnsetType | null;
    });
}
/** Optional collision-center details included in a report. */
export declare class CollisionReportCollisionCenterInput {
    readonly name: string | UnsetType | null;
    readonly address: string | UnsetType | null;
    readonly phone_number: string | UnsetType | null;
    readonly email: string | UnsetType | null;
    static __fields: any[][];
    constructor(name?: string | UnsetType | null, address?: string | UnsetType | null, phone_number?: string | UnsetType | null, email?: string | UnsetType | null);
    constructor(options: {
        name?: string | UnsetType | null;
        address?: string | UnsetType | null;
        phone_number?: string | UnsetType | null;
        email?: string | UnsetType | null;
    });
}
/** Optional towing-company details included in a report. */
export declare class CollisionReportTowingCompanyInput {
    readonly name: string | UnsetType | null;
    readonly email: string | UnsetType | null;
    readonly phone_number: string | UnsetType | null;
    readonly address: string | UnsetType | null;
    static __fields: any[][];
    constructor(name?: string | UnsetType | null, email?: string | UnsetType | null, phone_number?: string | UnsetType | null, address?: string | UnsetType | null);
    constructor(options: {
        name?: string | UnsetType | null;
        email?: string | UnsetType | null;
        phone_number?: string | UnsetType | null;
        address?: string | UnsetType | null;
    });
}
/** Optional collision telemetry and report time fields. */
export declare class CollisionReportMetadataInput {
    readonly report_date_time: $.DateValue | UnsetType | null;
    readonly collision_date_time: $.DateValue | UnsetType | null;
    readonly odometer: number | UnsetType | null;
    readonly speed: number | UnsetType | null;
    readonly unit: DistanceUnit | UnsetType | null;
    readonly mil_count: number | UnsetType | null;
    readonly mil_data: string | UnsetType | null;
    readonly latitude: number | UnsetType | null;
    readonly longitude: number | UnsetType | null;
    static __fields: any[][];
    constructor(report_date_time?: $.DateValue | UnsetType | null, collision_date_time?: $.DateValue | UnsetType | null, odometer?: number | UnsetType | null, speed?: number | UnsetType | null, unit?: DistanceUnit | UnsetType | null, mil_count?: number | UnsetType | null, mil_data?: string | UnsetType | null, latitude?: number | UnsetType | null, longitude?: number | UnsetType | null);
    constructor(options: {
        report_date_time?: $.DateValue | UnsetType | null;
        collision_date_time?: $.DateValue | UnsetType | null;
        odometer?: number | UnsetType | null;
        speed?: number | UnsetType | null;
        unit?: DistanceUnit | UnsetType | null;
        mil_count?: number | UnsetType | null;
        mil_data?: string | UnsetType | null;
        latitude?: number | UnsetType | null;
        longitude?: number | UnsetType | null;
    });
}
/** Complete input for creating a collision report. */
export declare class CreateCollisionReportInput {
    readonly vin: string;
    readonly vehicle: CollisionReportVehicleInput;
    readonly user: CollisionReportUserInput | UnsetType | null;
    readonly insurance_company_name: string | UnsetType | null;
    readonly collision_center: CollisionReportCollisionCenterInput | UnsetType | null;
    readonly towing_company: CollisionReportTowingCompanyInput | UnsetType | null;
    readonly collision_metadata: CollisionReportMetadataInput | UnsetType | null;
    static __fields: any[][];
    constructor(vin: string, vehicle: CollisionReportVehicleInput, user?: CollisionReportUserInput | UnsetType | null, insurance_company_name?: string | UnsetType | null, collision_center?: CollisionReportCollisionCenterInput | UnsetType | null, towing_company?: CollisionReportTowingCompanyInput | UnsetType | null, collision_metadata?: CollisionReportMetadataInput | UnsetType | null);
    constructor(options: {
        vin: string;
        vehicle: CollisionReportVehicleInput;
        user?: CollisionReportUserInput | UnsetType | null;
        insurance_company_name?: string | UnsetType | null;
        collision_center?: CollisionReportCollisionCenterInput | UnsetType | null;
        towing_company?: CollisionReportTowingCompanyInput | UnsetType | null;
        collision_metadata?: CollisionReportMetadataInput | UnsetType | null;
    });
}
/** Base64 attachment and optional filename for a report photo. */
export declare class CollisionReportPhotoInput {
    readonly attachment: string;
    readonly filename: string | UnsetType | null;
    static __fields: any[][];
    constructor(attachment: string, filename?: string | UnsetType | null);
    constructor(options: {
        attachment: string;
        filename?: string | UnsetType | null;
    });
}
export declare function collision_center_variables(config: CollisionCenterSearchInput): Record<string, unknown>;
export declare function create_collision_report_variables(config: CreateCollisionReportInput): Record<string, unknown>;
export declare function collision_report_photo_variables(vin: string, collision_id: string, photo: CollisionReportPhotoInput, photo_section: PhotoSection): Record<string, unknown>;
export declare function collision_report_pdf_variables(collision_id: string): Record<string, unknown>;
export declare function delete_collision_report_photo_variables(vin: string, collision_id: string, photo_section: PhotoSection): Record<string, unknown>;
export declare function collision_center_address_input(value: CollisionCenterAddressInput): Record<string, unknown>;
export declare function collision_report_vehicle_input(value: CollisionReportVehicleInput): Record<string, unknown>;
export declare function collision_report_user_input(value: CollisionReportUserInput): Record<string, unknown>;
export declare function collision_report_collision_center_input(value: CollisionReportCollisionCenterInput): Record<string, unknown>;
export declare function collision_report_towing_company_input(value: CollisionReportTowingCompanyInput): Record<string, unknown>;
export declare function collision_report_metadata_input(value: CollisionReportMetadataInput): Record<string, unknown>;
export declare function _optional_datetime(value: $.DateValue | UnsetType | null): unknown;
