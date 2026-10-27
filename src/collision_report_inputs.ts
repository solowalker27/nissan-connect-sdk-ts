// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

import { PhotoSection } from "./collision_report_models";
export { PhotoSection };

import { CoordinateInput, coordinate_input } from "./common_inputs";
export { CoordinateInput, coordinate_input };

import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };

import { DistanceUnit } from "./models";
export { DistanceUnit };

/** Optional country and postal code for collision-center discovery. */
export class CollisionCenterAddressInput {
readonly country: string | UnsetType | null;
readonly postal_code: string | UnsetType | null;
static __fields = [["country", UNSET], ["postal_code", UNSET]];
constructor(country?: string | UnsetType | null, postal_code?: string | UnsetType | null);
constructor(options: { country?: string | UnsetType | null; postal_code?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionCenterAddressInput, __args);  Object.freeze(this); }
}
$.classType(CollisionCenterAddressInput);

/** Vehicle and optional location or claim filters for collision centers. */
export class CollisionCenterSearchInput {
readonly vin: string;
readonly coordinates: CoordinateInput | UnsetType | null;
readonly address: CollisionCenterAddressInput | UnsetType | null;
readonly claim_id: string | UnsetType | null;
static __fields = [["vin", $.MISSING], ["coordinates", UNSET], ["address", UNSET], ["claim_id", UNSET]];
constructor(vin: string, coordinates?: CoordinateInput | UnsetType | null, address?: CollisionCenterAddressInput | UnsetType | null, claim_id?: string | UnsetType | null);
constructor(options: { vin: string; coordinates?: CoordinateInput | UnsetType | null; address?: CollisionCenterAddressInput | UnsetType | null; claim_id?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionCenterSearchInput, __args);  Object.freeze(this); }
}
$.classType(CollisionCenterSearchInput);

/** Required vehicle identity and optional registration details. */
export class CollisionReportVehicleInput {
readonly make: string;
readonly model: string;
readonly model_year: string;
readonly license_plate: string | UnsetType | null;
readonly color: string | UnsetType | null;
static __fields = [["make", $.MISSING], ["model", $.MISSING], ["model_year", $.MISSING], ["license_plate", UNSET], ["color", UNSET]];
constructor(make: string, model: string, model_year: string, license_plate?: string | UnsetType | null, color?: string | UnsetType | null);
constructor(options: { make: string; model: string; model_year: string; license_plate?: string | UnsetType | null; color?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportVehicleInput, __args);  Object.freeze(this); }
}
$.classType(CollisionReportVehicleInput);

/** Optional driver contact fields included in a collision report. */
export class CollisionReportUserInput {
readonly first_name: string | UnsetType | null;
readonly last_name: string | UnsetType | null;
readonly email: string | UnsetType | null;
readonly phone_number: string | UnsetType | null;
static __fields = [["first_name", UNSET], ["last_name", UNSET], ["email", UNSET], ["phone_number", UNSET]];
constructor(first_name?: string | UnsetType | null, last_name?: string | UnsetType | null, email?: string | UnsetType | null, phone_number?: string | UnsetType | null);
constructor(options: { first_name?: string | UnsetType | null; last_name?: string | UnsetType | null; email?: string | UnsetType | null; phone_number?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportUserInput, __args);  Object.freeze(this); }
}
$.classType(CollisionReportUserInput);

/** Optional collision-center details included in a report. */
export class CollisionReportCollisionCenterInput {
readonly name: string | UnsetType | null;
readonly address: string | UnsetType | null;
readonly phone_number: string | UnsetType | null;
readonly email: string | UnsetType | null;
static __fields = [["name", UNSET], ["address", UNSET], ["phone_number", UNSET], ["email", UNSET]];
constructor(name?: string | UnsetType | null, address?: string | UnsetType | null, phone_number?: string | UnsetType | null, email?: string | UnsetType | null);
constructor(options: { name?: string | UnsetType | null; address?: string | UnsetType | null; phone_number?: string | UnsetType | null; email?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportCollisionCenterInput, __args);  Object.freeze(this); }
}
$.classType(CollisionReportCollisionCenterInput);

/** Optional towing-company details included in a report. */
export class CollisionReportTowingCompanyInput {
readonly name: string | UnsetType | null;
readonly email: string | UnsetType | null;
readonly phone_number: string | UnsetType | null;
readonly address: string | UnsetType | null;
static __fields = [["name", UNSET], ["email", UNSET], ["phone_number", UNSET], ["address", UNSET]];
constructor(name?: string | UnsetType | null, email?: string | UnsetType | null, phone_number?: string | UnsetType | null, address?: string | UnsetType | null);
constructor(options: { name?: string | UnsetType | null; email?: string | UnsetType | null; phone_number?: string | UnsetType | null; address?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportTowingCompanyInput, __args);  Object.freeze(this); }
}
$.classType(CollisionReportTowingCompanyInput);

/** Optional collision telemetry and report time fields. */
export class CollisionReportMetadataInput {
readonly report_date_time: $.DateValue | UnsetType | null;
readonly collision_date_time: $.DateValue | UnsetType | null;
readonly odometer: number | UnsetType | null;
readonly speed: number | UnsetType | null;
readonly unit: DistanceUnit | UnsetType | null;
readonly mil_count: number | UnsetType | null;
readonly mil_data: string | UnsetType | null;
readonly latitude: number | UnsetType | null;
readonly longitude: number | UnsetType | null;
static __fields = [["report_date_time", UNSET], ["collision_date_time", UNSET], ["odometer", UNSET], ["speed", UNSET], ["unit", UNSET], ["mil_count", UNSET], ["mil_data", UNSET], ["latitude", UNSET], ["longitude", UNSET]];
constructor(report_date_time?: $.DateValue | UnsetType | null, collision_date_time?: $.DateValue | UnsetType | null, odometer?: number | UnsetType | null, speed?: number | UnsetType | null, unit?: DistanceUnit | UnsetType | null, mil_count?: number | UnsetType | null, mil_data?: string | UnsetType | null, latitude?: number | UnsetType | null, longitude?: number | UnsetType | null);
constructor(options: { report_date_time?: $.DateValue | UnsetType | null; collision_date_time?: $.DateValue | UnsetType | null; odometer?: number | UnsetType | null; speed?: number | UnsetType | null; unit?: DistanceUnit | UnsetType | null; mil_count?: number | UnsetType | null; mil_data?: string | UnsetType | null; latitude?: number | UnsetType | null; longitude?: number | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportMetadataInput, __args);  Object.freeze(this); }
}
$.classType(CollisionReportMetadataInput);

/** Complete input for creating a collision report. */
export class CreateCollisionReportInput {
readonly vin: string;
readonly vehicle: CollisionReportVehicleInput;
readonly user: CollisionReportUserInput | UnsetType | null;
readonly insurance_company_name: string | UnsetType | null;
readonly collision_center: CollisionReportCollisionCenterInput | UnsetType | null;
readonly towing_company: CollisionReportTowingCompanyInput | UnsetType | null;
readonly collision_metadata: CollisionReportMetadataInput | UnsetType | null;
static __fields = [["vin", $.MISSING], ["vehicle", $.MISSING], ["user", UNSET], ["insurance_company_name", UNSET], ["collision_center", UNSET], ["towing_company", UNSET], ["collision_metadata", UNSET]];
constructor(vin: string, vehicle: CollisionReportVehicleInput, user?: CollisionReportUserInput | UnsetType | null, insurance_company_name?: string | UnsetType | null, collision_center?: CollisionReportCollisionCenterInput | UnsetType | null, towing_company?: CollisionReportTowingCompanyInput | UnsetType | null, collision_metadata?: CollisionReportMetadataInput | UnsetType | null);
constructor(options: { vin: string; vehicle: CollisionReportVehicleInput; user?: CollisionReportUserInput | UnsetType | null; insurance_company_name?: string | UnsetType | null; collision_center?: CollisionReportCollisionCenterInput | UnsetType | null; towing_company?: CollisionReportTowingCompanyInput | UnsetType | null; collision_metadata?: CollisionReportMetadataInput | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CreateCollisionReportInput, __args);  Object.freeze(this); }
}
$.classType(CreateCollisionReportInput);

/** Base64 attachment and optional filename for a report photo. */
export class CollisionReportPhotoInput {
readonly attachment: string;
readonly filename: string | UnsetType | null;
static __fields = [["attachment", $.MISSING], ["filename", UNSET]];
constructor(attachment: string, filename?: string | UnsetType | null);
constructor(options: { attachment: string; filename?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportPhotoInput, __args);  Object.freeze(this); }
}
$.classType(CollisionReportPhotoInput);

export function collision_center_variables(config: CollisionCenterSearchInput): Record<string, unknown>;
/** Serialize collision-center discovery variables. */
export function collision_center_variables(...__args: any[]): any {
let address, coordinates;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize collision-center discovery variables. */
coordinates = ($.truth($.call($.isinstance, [$.attr(config, "coordinates"), CoordinateInput], null)) ? $.call(coordinate_input, [$.attr(config, "coordinates")], null) : $.attr(config, "coordinates"));
address = ($.truth($.call($.isinstance, [$.attr(config, "address"), CollisionCenterAddressInput], null)) ? $.call(collision_center_address_input, [$.attr(config, "address")], null) : $.attr(config, "address"));
return Object.assign({}, {["input"]: $.call(optional_input_fields, [], Object.assign({}, {"vin": $.attr(config, "vin")}, {"coordinates": coordinates}, {"address": address}, {"claimId": $.attr(config, "claim_id")}))});
}

export function create_collision_report_variables(config: CreateCollisionReportInput): Record<string, unknown>;
/** Serialize collision-report creation variables. */
export function create_collision_report_variables(...__args: any[]): any {
let collision_center, collision_metadata, towing_company, user;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize collision-report creation variables. */
user = ($.truth($.call($.isinstance, [$.attr(config, "user"), CollisionReportUserInput], null)) ? $.call(collision_report_user_input, [$.attr(config, "user")], null) : $.attr(config, "user"));
collision_center = ($.truth($.call($.isinstance, [$.attr(config, "collision_center"), CollisionReportCollisionCenterInput], null)) ? $.call(collision_report_collision_center_input, [$.attr(config, "collision_center")], null) : $.attr(config, "collision_center"));
towing_company = ($.truth($.call($.isinstance, [$.attr(config, "towing_company"), CollisionReportTowingCompanyInput], null)) ? $.call(collision_report_towing_company_input, [$.attr(config, "towing_company")], null) : $.attr(config, "towing_company"));
collision_metadata = ($.truth($.call($.isinstance, [$.attr(config, "collision_metadata"), CollisionReportMetadataInput], null)) ? $.call(collision_report_metadata_input, [$.attr(config, "collision_metadata")], null) : $.attr(config, "collision_metadata"));
return Object.assign({}, {["input"]: $.call(optional_input_fields, [], Object.assign({}, {"vin": $.attr(config, "vin")}, {"user": user}, {"insuranceCompanyName": $.attr(config, "insurance_company_name")}, {"vehicle": $.call(collision_report_vehicle_input, [$.attr(config, "vehicle")], null)}, {"collisionCenter": collision_center}, {"towingCompany": towing_company}, {"collisionMetadata": collision_metadata}))});
}

export function collision_report_photo_variables(vin: string, collision_id: string, photo: CollisionReportPhotoInput, photo_section: PhotoSection): Record<string, unknown>;
/** Serialize collision-report photo upload variables. */
export function collision_report_photo_variables(...__args: any[]): any {
let {"vin": vin, "collision_id": collision_id, "photo": photo, "photo_section": photo_section} = $.bind(__args, ["vin", "collision_id", "photo", "photo_section"], {}, [], null, null);
/** Serialize collision-report photo upload variables. */
return Object.assign({}, {["input"]: Object.assign({}, {["vin"]: vin}, {["collisionId"]: collision_id}, {["photo"]: $.call(optional_input_fields, [], Object.assign({}, {"filename": $.attr(photo, "filename")}, {"attachment": $.attr(photo, "attachment")}))}, {["photoSection"]: $.call(serialize_enum, [photo_section], null)})});
}

export function collision_report_pdf_variables(collision_id: string): Record<string, unknown>;
/** Serialize collision-report PDF generation variables. */
export function collision_report_pdf_variables(...__args: any[]): any {
let {"collision_id": collision_id} = $.bind(__args, ["collision_id"], {}, [], null, null);
/** Serialize collision-report PDF generation variables. */
return Object.assign({}, {["input"]: Object.assign({}, {["collisionId"]: collision_id})});
}

export function delete_collision_report_photo_variables(vin: string, collision_id: string, photo_section: PhotoSection): Record<string, unknown>;
/** Serialize collision-report photo deletion variables. */
export function delete_collision_report_photo_variables(...__args: any[]): any {
let {"vin": vin, "collision_id": collision_id, "photo_section": photo_section} = $.bind(__args, ["vin", "collision_id", "photo_section"], {}, [], null, null);
/** Serialize collision-report photo deletion variables. */
return Object.assign({}, {["input"]: Object.assign({}, {["vin"]: vin}, {["collisionId"]: collision_id}, {["photoSection"]: $.call(serialize_enum, [photo_section], null)})});
}

export function collision_center_address_input(value: CollisionCenterAddressInput): Record<string, unknown>;
/** Translated upstream collision_center_address_input. */
export function collision_center_address_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"country": $.attr(value, "country")}, {"postalCode": $.attr(value, "postal_code")}));
}

export function collision_report_vehicle_input(value: CollisionReportVehicleInput): Record<string, unknown>;
/** Translated upstream collision_report_vehicle_input. */
export function collision_report_vehicle_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"make": $.attr(value, "make")}, {"model": $.attr(value, "model")}, {"modelYear": $.attr(value, "model_year")}, {"licensePlate": $.attr(value, "license_plate")}, {"color": $.attr(value, "color")}));
}

export function collision_report_user_input(value: CollisionReportUserInput): Record<string, unknown>;
/** Translated upstream collision_report_user_input. */
export function collision_report_user_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"firstName": $.attr(value, "first_name")}, {"lastName": $.attr(value, "last_name")}, {"email": $.attr(value, "email")}, {"phoneNumber": $.attr(value, "phone_number")}));
}

export function collision_report_collision_center_input(value: CollisionReportCollisionCenterInput): Record<string, unknown>;
/** Translated upstream collision_report_collision_center_input. */
export function collision_report_collision_center_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"name": $.attr(value, "name")}, {"address": $.attr(value, "address")}, {"phoneNumber": $.attr(value, "phone_number")}, {"email": $.attr(value, "email")}));
}

export function collision_report_towing_company_input(value: CollisionReportTowingCompanyInput): Record<string, unknown>;
/** Translated upstream collision_report_towing_company_input. */
export function collision_report_towing_company_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"name": $.attr(value, "name")}, {"email": $.attr(value, "email")}, {"phoneNumber": $.attr(value, "phone_number")}, {"address": $.attr(value, "address")}));
}

export function collision_report_metadata_input(value: CollisionReportMetadataInput): Record<string, unknown>;
/** Translated upstream collision_report_metadata_input. */
export function collision_report_metadata_input(...__args: any[]): any {
let collision_date_time, report_date_time, unit;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
report_date_time = $.call(_optional_datetime, [$.attr(value, "report_date_time")], null);
collision_date_time = $.call(_optional_datetime, [$.attr(value, "collision_date_time")], null);
unit = ($.truth($.call($.isinstance, [$.attr(value, "unit"), DistanceUnit], null)) ? $.call(serialize_enum, [$.attr(value, "unit")], null) : $.attr(value, "unit"));
return $.call(optional_input_fields, [], Object.assign({}, {"reportDateTime": report_date_time}, {"collisionDateTime": collision_date_time}, {"odometer": $.attr(value, "odometer")}, {"speed": $.attr(value, "speed")}, {"unit": unit}, {"milCount": $.attr(value, "mil_count")}, {"milData": $.attr(value, "mil_data")}, {"latitude": $.attr(value, "latitude")}, {"longitude": $.attr(value, "longitude")}));
}

export function _optional_datetime(value: $.DateValue | UnsetType | null): unknown;
/** Translated upstream _optional_datetime. */
export function _optional_datetime(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
return ($.truth($.call($.isinstance, [value, datetime], null)) ? $.call(serialize_datetime, [value], null) : value);
}
