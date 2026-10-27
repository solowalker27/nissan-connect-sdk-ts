// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const date = $.date;
const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { DistanceUnit } from "./models";
export { DistanceUnit };

export const RecallType = $.enumType("RecallType", {"RECALL": "RECALL", "SERVICE": "SERVICE", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type RecallType = ReturnType<typeof RecallType>;

export const WarrantyInfoColorStatus = $.enumType("WarrantyInfoColorStatus", {"GREEN": "GREEN", "YELLOW": "YELLOW", "RED": "RED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type WarrantyInfoColorStatus = ReturnType<typeof WarrantyInfoColorStatus>;

export const WarrantyInfoWarrantyStatus = $.enumType("WarrantyInfoWarrantyStatus", {"ACTIVE": "ACTIVE", "EXPIRED": "EXPIRED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type WarrantyInfoWarrantyStatus = ReturnType<typeof WarrantyInfoWarrantyStatus>;

/** Nullable postal address fields returned for a preferred dealer. */
export class PreferredDealerAddress {
readonly address1: string | null;
readonly address2: string | null;
readonly city: string | null;
readonly state: string | null;
readonly postal_code: string | null;
readonly country: string | null;
static __fields = [["address1", $.MISSING], ["address2", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["postal_code", $.MISSING], ["country", $.MISSING]];
constructor(address1: string | null, address2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null);
constructor(options: { address1: string | null; address2: string | null; city: string | null; state: string | null; postal_code: string | null; country: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PreferredDealerAddress, __args);  Object.freeze(this); }
}
$.classType(PreferredDealerAddress);

/** Nullable coordinates returned for a preferred dealer. */
export class PreferredDealerLocation {
readonly latitude: number | null;
readonly longitude: number | null;
static __fields = [["latitude", $.MISSING], ["longitude", $.MISSING]];
constructor(latitude: number | null, longitude: number | null);
constructor(options: { latitude: number | null; longitude: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PreferredDealerLocation, __args);  Object.freeze(this); }
}
$.classType(PreferredDealerLocation);

/** The preferred dealer currently associated with a vehicle. */
export class VehiclePreferredDealer {
readonly id: string | null;
readonly hash_id: string | null;
readonly name: string | null;
readonly address: PreferredDealerAddress | null;
readonly hours: string | null;
readonly phone: string | null;
readonly service_phone: string | null;
readonly native_service_booking: boolean | null;
readonly scheduling_url_mobile: string | null;
readonly location: PreferredDealerLocation | null;
readonly languages_spoken: ReadonlyArray<string>;
static __fields = [["id", $.MISSING], ["hash_id", $.MISSING], ["name", $.MISSING], ["address", $.MISSING], ["hours", $.MISSING], ["phone", $.MISSING], ["service_phone", $.MISSING], ["native_service_booking", $.MISSING], ["scheduling_url_mobile", $.MISSING], ["location", $.MISSING], ["languages_spoken", $.MISSING]];
constructor(id: string | null, hash_id: string | null, name: string | null, address: PreferredDealerAddress | null, hours: string | null, phone: string | null, service_phone: string | null, native_service_booking: boolean | null, scheduling_url_mobile: string | null, location: PreferredDealerLocation | null, languages_spoken: ReadonlyArray<string>);
constructor(options: { id: string | null; hash_id: string | null; name: string | null; address: PreferredDealerAddress | null; hours: string | null; phone: string | null; service_phone: string | null; native_service_booking: boolean | null; scheduling_url_mobile: string | null; location: PreferredDealerLocation | null; languages_spoken: ReadonlyArray<string> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehiclePreferredDealer, __args);  Object.freeze(this); }
}
$.classType(VehiclePreferredDealer);

/** One recall or service campaign associated with a vehicle. */
export class VehicleRecall {
readonly effective_date: $.DateValue;
readonly nhtsa_id: string | null;
readonly primary_description: string;
readonly remedy_description: string;
readonly risk_description: string;
readonly title: string;
readonly type: RecallType;
readonly recall_code: string | null;
static __fields = [["effective_date", $.MISSING], ["nhtsa_id", $.MISSING], ["primary_description", $.MISSING], ["remedy_description", $.MISSING], ["risk_description", $.MISSING], ["title", $.MISSING], ["type", $.MISSING], ["recall_code", $.MISSING]];
constructor(effective_date: $.DateValue, nhtsa_id: string | null, primary_description: string, remedy_description: string, risk_description: string, title: string, type: RecallType, recall_code: string | null);
constructor(options: { effective_date: $.DateValue; nhtsa_id: string | null; primary_description: string; remedy_description: string; risk_description: string; title: string; type: RecallType; recall_code: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleRecall, __args);  Object.freeze(this); }
}
$.classType(VehicleRecall);

/** Nullable roadside-assistance and towing coverage limits. */
export class VehicleRoadsideAssistance {
readonly roadside_months: number | null;
readonly roadside_miles: number | null;
readonly towing_months: number | null;
readonly towing_miles: number | null;
static __fields = [["roadside_months", $.MISSING], ["roadside_miles", $.MISSING], ["towing_months", $.MISSING], ["towing_miles", $.MISSING]];
constructor(roadside_months: number | null, roadside_miles: number | null, towing_months: number | null, towing_miles: number | null);
constructor(options: { roadside_months: number | null; roadside_miles: number | null; towing_months: number | null; towing_miles: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleRoadsideAssistance, __args);  Object.freeze(this); }
}
$.classType(VehicleRoadsideAssistance);

/** Non-null mileage and unit recorded for a service-history entry. */
export class ServiceHistoryMileage {
readonly unit: DistanceUnit;
readonly value: number;
static __fields = [["unit", $.MISSING], ["value", $.MISSING]];
constructor(unit: DistanceUnit, value: number);
constructor(options: { unit: DistanceUnit; value: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceHistoryMileage, __args);  Object.freeze(this); }
}
$.classType(ServiceHistoryMileage);

/** Nullable operation metadata attached to a service-history entry. */
export class VehicleServiceOperation {
readonly service_category_id: string | null;
readonly service_category_name: string | null;
readonly op_code_id: string | null;
readonly op_code_description: string | null;
static __fields = [["service_category_id", $.MISSING], ["service_category_name", $.MISSING], ["op_code_id", $.MISSING], ["op_code_description", $.MISSING]];
constructor(service_category_id: string | null, service_category_name: string | null, op_code_id: string | null, op_code_description: string | null);
constructor(options: { service_category_id: string | null; service_category_name: string | null; op_code_id: string | null; op_code_description: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleServiceOperation, __args);  Object.freeze(this); }
}
$.classType(VehicleServiceOperation);

/** One completed vehicle service event returned by Nissan. */
export class VehicleServiceHistoryEntry {
readonly mileage: ServiceHistoryMileage;
readonly service_date: $.DateValue;
readonly dealer_name: string;
readonly dealer_code: string;
readonly services: ReadonlyArray<string>;
readonly comment: string | null;
readonly maintenance_id: number | null;
readonly service_operation: VehicleServiceOperation | null;
static __fields = [["mileage", $.MISSING], ["service_date", $.MISSING], ["dealer_name", $.MISSING], ["dealer_code", $.MISSING], ["services", $.MISSING], ["comment", $.MISSING], ["maintenance_id", $.MISSING], ["service_operation", $.MISSING]];
constructor(mileage: ServiceHistoryMileage, service_date: $.DateValue, dealer_name: string, dealer_code: string, services: ReadonlyArray<string>, comment: string | null, maintenance_id: number | null, service_operation: VehicleServiceOperation | null);
constructor(options: { mileage: ServiceHistoryMileage; service_date: $.DateValue; dealer_name: string; dealer_code: string; services: ReadonlyArray<string>; comment: string | null; maintenance_id: number | null; service_operation: VehicleServiceOperation | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleServiceHistoryEntry, __args);  Object.freeze(this); }
}
$.classType(VehicleServiceHistoryEntry);

/** Current vehicle warranty status and overall coverage limits. */
export class VehicleWarrantyInfo {
readonly color_status: WarrantyInfoColorStatus;
readonly warranty_status: WarrantyInfoWarrantyStatus;
readonly total_mileage: number;
readonly total_months: string;
static __fields = [["color_status", $.MISSING], ["warranty_status", $.MISSING], ["total_mileage", $.MISSING], ["total_months", $.MISSING]];
constructor(color_status: WarrantyInfoColorStatus, warranty_status: WarrantyInfoWarrantyStatus, total_mileage: number, total_months: string);
constructor(options: { color_status: WarrantyInfoColorStatus; warranty_status: WarrantyInfoWarrantyStatus; total_mileage: number; total_months: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleWarrantyInfo, __args);  Object.freeze(this); }
}
$.classType(VehicleWarrantyInfo);

/** Mileage and calendar boundary for a vehicle warranty period. */
export class VehicleWarrantyPeriod {
readonly mileage: number;
readonly date: $.DateValue;
static __fields = [["mileage", $.MISSING], ["date", $.MISSING]];
constructor(mileage: number, date: $.DateValue);
constructor(options: { mileage: number; date: $.DateValue });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleWarrantyPeriod, __args);  Object.freeze(this); }
}
$.classType(VehicleWarrantyPeriod);

/** Warranty summary and its non-null start, end, and current periods. */
export class VehicleWarranty {
readonly warranty_info: VehicleWarrantyInfo;
readonly start_period: VehicleWarrantyPeriod;
readonly end_period: VehicleWarrantyPeriod;
readonly current_period: VehicleWarrantyPeriod;
static __fields = [["warranty_info", $.MISSING], ["start_period", $.MISSING], ["end_period", $.MISSING], ["current_period", $.MISSING]];
constructor(warranty_info: VehicleWarrantyInfo, start_period: VehicleWarrantyPeriod, end_period: VehicleWarrantyPeriod, current_period: VehicleWarrantyPeriod);
constructor(options: { warranty_info: VehicleWarrantyInfo; start_period: VehicleWarrantyPeriod; end_period: VehicleWarrantyPeriod; current_period: VehicleWarrantyPeriod });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleWarranty, __args);  Object.freeze(this); }
}
$.classType(VehicleWarranty);
