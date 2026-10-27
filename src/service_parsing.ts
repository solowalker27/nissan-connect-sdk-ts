// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const date = $.date;
const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { ResponseError } from "./exceptions";
export { ResponseError };

import { DistanceUnit } from "./models";
export { DistanceUnit };

import { PreferredDealerAddress, PreferredDealerLocation, RecallType, ServiceHistoryMileage, VehiclePreferredDealer, VehicleRecall, VehicleRoadsideAssistance, VehicleServiceHistoryEntry, VehicleServiceOperation, VehicleWarranty, VehicleWarrantyInfo, VehicleWarrantyPeriod, WarrantyInfoColorStatus, WarrantyInfoWarrantyStatus } from "./service_models";
export { PreferredDealerAddress, PreferredDealerLocation, RecallType, ServiceHistoryMileage, VehiclePreferredDealer, VehicleRecall, VehicleRoadsideAssistance, VehicleServiceHistoryEntry, VehicleServiceOperation, VehicleWarranty, VehicleWarrantyInfo, VehicleWarrantyPeriod, WarrantyInfoColorStatus, WarrantyInfoWarrantyStatus };

export function parse_vehicle_preferred_dealer(data: Record<string, unknown>): VehiclePreferredDealer | null;
/** Parse the nullable preferred dealer associated with a vehicle. */
export function parse_vehicle_preferred_dealer(...__args: any[]): any {
let address, dealer, index, languages, location, path, raw_language, raw_languages, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable preferred dealer associated with a vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
path = "vehicle.preferredDealer";
dealer = $.call(_required_optional_typed_object, [vehicle, "preferredDealer", path], null);
if ($.truth(((dealer === null)))) {
return null;
}
address = $.call(_parse_preferred_dealer_address, [$.call(_required_field, [dealer, "address", ($.str(path) + ".address")], null), ($.str(path) + ".address")], null);
location = $.call(_parse_preferred_dealer_location, [$.call(_required_field, [dealer, "location", ($.str(path) + ".location")], null), ($.str(path) + ".location")], null);
raw_languages = $.call(_list, [$.call(_required_field, [dealer, "languagesSpoken", ($.str(path) + ".languagesSpoken")], null), ($.str(path) + ".languagesSpoken")], null);
languages = [];
for ([index, raw_language] of $.iterable($.call($.enumerate, [raw_languages], null))) {
$.call($.attr(languages, "append"), [$.call(_string, [raw_language, ($.str(path) + ".languagesSpoken[" + $.str(index) + "]")], null)], null);
}
return $.call(VehiclePreferredDealer, [], Object.assign({}, {"id": $.call(_required_nullable_string, [dealer, "id", ($.str(path) + ".id")], null)}, {"hash_id": $.call(_required_nullable_string, [dealer, "hashId", ($.str(path) + ".hashId")], null)}, {"name": $.call(_required_nullable_string, [dealer, "name", ($.str(path) + ".name")], null)}, {"address": address}, {"hours": $.call(_required_nullable_string, [dealer, "hours", ($.str(path) + ".hours")], null)}, {"phone": $.call(_required_nullable_string, [dealer, "phone", ($.str(path) + ".phone")], null)}, {"service_phone": $.call(_required_nullable_string, [dealer, "servicePhone", ($.str(path) + ".servicePhone")], null)}, {"native_service_booking": $.call(_required_nullable_bool, [dealer, "nativeServiceBooking", ($.str(path) + ".nativeServiceBooking")], null)}, {"scheduling_url_mobile": $.call(_required_nullable_string, [dealer, "schedulingUrlMobile", ($.str(path) + ".schedulingUrlMobile")], null)}, {"location": location}, {"languages_spoken": $.call($.tuple, [languages], null)}));
}

export function parse_vehicle_recalls(data: Record<string, unknown>): ReadonlyArray<VehicleRecall> | null;
/** Parse the non-null standalone recall list for a nullable vehicle. */
export function parse_vehicle_recalls(...__args: any[]): any {
let index, path, raw_recall, raw_recalls, recall, recall_path, recalls, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the non-null standalone recall list for a nullable vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
path = "vehicle.recalls";
raw_recalls = $.call(_list, [$.call(_required_field, [vehicle, "recalls", path], null), path], null);
recalls = [];
for ([index, raw_recall] of $.iterable($.call($.enumerate, [raw_recalls], null))) {
recall_path = ($.str(path) + "[" + $.str(index) + "]");
recall = $.call(_typed_object, [raw_recall, recall_path], null);
$.call($.attr(recalls, "append"), [$.call(VehicleRecall, [], Object.assign({}, {"effective_date": $.call(_datetime, [$.call(_required_field, [recall, "effectiveDate", ($.str(recall_path) + ".effectiveDate")], null), ($.str(recall_path) + ".effectiveDate")], null)}, {"nhtsa_id": $.call(_required_nullable_string, [recall, "nhtsaId", ($.str(recall_path) + ".nhtsaId")], null)}, {"primary_description": $.call(_required_string, [recall, "primaryDescription", ($.str(recall_path) + ".primaryDescription")], null)}, {"remedy_description": $.call(_required_string, [recall, "remedyDescription", ($.str(recall_path) + ".remedyDescription")], null)}, {"risk_description": $.call(_required_string, [recall, "riskDescription", ($.str(recall_path) + ".riskDescription")], null)}, {"title": $.call(_required_string, [recall, "title", ($.str(recall_path) + ".title")], null)}, {"type": $.call(_enum, [$.call(_required_field, [recall, "type", ($.str(recall_path) + ".type")], null), RecallType, ($.str(recall_path) + ".type")], null)}, {"recall_code": $.call(_required_nullable_string, [recall, "recallCode", ($.str(recall_path) + ".recallCode")], null)}))], null);
}
return $.call($.tuple, [recalls], null);
}

export function parse_vehicle_roadside_assistance(data: Record<string, unknown>): VehicleRoadsideAssistance | null;
/** Parse nullable roadside-assistance coverage for a vehicle. */
export function parse_vehicle_roadside_assistance(...__args: any[]): any {
let assistance, path, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable roadside-assistance coverage for a vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
path = "vehicle.roadsideAssistance";
assistance = $.call(_required_optional_typed_object, [vehicle, "roadsideAssistance", path], null);
if ($.truth(((assistance === null)))) {
return null;
}
return $.call(VehicleRoadsideAssistance, [], Object.assign({}, {"roadside_months": $.call(_required_nullable_int, [assistance, "roadsideMonths", ($.str(path) + ".roadsideMonths")], null)}, {"roadside_miles": $.call(_required_nullable_int, [assistance, "roadsideMiles", ($.str(path) + ".roadsideMiles")], null)}, {"towing_months": $.call(_required_nullable_int, [assistance, "towingMonths", ($.str(path) + ".towingMonths")], null)}, {"towing_miles": $.call(_required_nullable_int, [assistance, "towingMiles", ($.str(path) + ".towingMiles")], null)}));
}

export function parse_vehicle_service_history(data: Record<string, unknown>): ReadonlyArray<VehicleServiceHistoryEntry> | null;
/** Parse the non-null service-history list for a nullable vehicle. */
export function parse_vehicle_service_history(...__args: any[]): any {
let entries, entry, entry_path, index, path, raw_entries, raw_entry, vehicle;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the non-null service-history list for a nullable vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
path = "vehicle.serviceHistory";
raw_entries = $.call(_list, [$.call(_required_field, [vehicle, "serviceHistory", path], null), path], null);
entries = [];
for ([index, raw_entry] of $.iterable($.call($.enumerate, [raw_entries], null))) {
entry_path = ($.str(path) + "[" + $.str(index) + "]");
entry = $.call(_typed_object, [raw_entry, entry_path], null);
$.call($.attr(entries, "append"), [$.call(_parse_service_history_entry, [entry, entry_path], null)], null);
}
return $.call($.tuple, [entries], null);
}

export function parse_warranty_info(data: Record<string, unknown>): VehicleWarranty | null;
/** Parse nullable warranty information for a vehicle. */
export function parse_warranty_info(...__args: any[]): any {
let info, info_path, path, vehicle, warranty;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable warranty information for a vehicle. */
vehicle = $.call(_vehicle, [data], null);
if ($.truth(((vehicle === null)))) {
return null;
}
path = "vehicle.warranty";
warranty = $.call(_required_optional_typed_object, [vehicle, "warranty", path], null);
if ($.truth(((warranty === null)))) {
return null;
}
info_path = ($.str(path) + ".warrantyInfo");
info = $.call(_required_typed_object, [warranty, "warrantyInfo", info_path], null);
return $.call(VehicleWarranty, [], Object.assign({}, {"warranty_info": $.call(VehicleWarrantyInfo, [], Object.assign({}, {"color_status": $.call(_enum, [$.call(_required_field, [info, "colorStatus", ($.str(info_path) + ".colorStatus")], null), WarrantyInfoColorStatus, ($.str(info_path) + ".colorStatus")], null)}, {"warranty_status": $.call(_enum, [$.call(_required_field, [info, "warrantyStatus", ($.str(info_path) + ".warrantyStatus")], null), WarrantyInfoWarrantyStatus, ($.str(info_path) + ".warrantyStatus")], null)}, {"total_mileage": $.call(_required_int, [info, "totalMileage", ($.str(info_path) + ".totalMileage")], null)}, {"total_months": $.call(_required_string, [info, "totalMonths", ($.str(info_path) + ".totalMonths")], null)}))}, {"start_period": $.call(_parse_warranty_period, [$.call(_required_field, [warranty, "startPeriod", ($.str(path) + ".startPeriod")], null), ($.str(path) + ".startPeriod")], null)}, {"end_period": $.call(_parse_warranty_period, [$.call(_required_field, [warranty, "endPeriod", ($.str(path) + ".endPeriod")], null), ($.str(path) + ".endPeriod")], null)}, {"current_period": $.call(_parse_warranty_period, [$.call(_required_field, [warranty, "currentPeriod", ($.str(path) + ".currentPeriod")], null), ($.str(path) + ".currentPeriod")], null)}));
}

export function _parse_preferred_dealer_address(value: unknown, path: string): PreferredDealerAddress | null;
/** Translated upstream _parse_preferred_dealer_address. */
export function _parse_preferred_dealer_address(...__args: any[]): any {
let address;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
address = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((address === null)))) {
return null;
}
return $.call(PreferredDealerAddress, [], Object.assign({}, {"address1": $.call(_required_nullable_string, [address, "address1", ($.str(path) + ".address1")], null)}, {"address2": $.call(_required_nullable_string, [address, "address2", ($.str(path) + ".address2")], null)}, {"city": $.call(_required_nullable_string, [address, "city", ($.str(path) + ".city")], null)}, {"state": $.call(_required_nullable_string, [address, "state", ($.str(path) + ".state")], null)}, {"postal_code": $.call(_required_nullable_string, [address, "postalCode", ($.str(path) + ".postalCode")], null)}, {"country": $.call(_required_nullable_string, [address, "country", ($.str(path) + ".country")], null)}));
}

export function _parse_preferred_dealer_location(value: unknown, path: string): PreferredDealerLocation | null;
/** Translated upstream _parse_preferred_dealer_location. */
export function _parse_preferred_dealer_location(...__args: any[]): any {
let location;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
location = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((location === null)))) {
return null;
}
return $.call(PreferredDealerLocation, [], Object.assign({}, {"latitude": $.call(_required_nullable_float, [location, "latitude", ($.str(path) + ".latitude")], null)}, {"longitude": $.call(_required_nullable_float, [location, "longitude", ($.str(path) + ".longitude")], null)}));
}

export function _parse_service_history_entry(entry: Record<string, unknown>, path: string): VehicleServiceHistoryEntry;
/** Translated upstream _parse_service_history_entry. */
export function _parse_service_history_entry(...__args: any[]): any {
let index, mileage, mileage_path, operation, operation_path, raw_service, raw_services, services;
let {"entry": entry, "path": path} = $.bind(__args, ["entry", "path"], {}, [], null, null);
mileage_path = ($.str(path) + ".mileageWithUnit");
mileage = $.call(_required_typed_object, [entry, "mileageWithUnit", mileage_path], null);
operation_path = ($.str(path) + ".serviceOperation");
operation = $.call(_required_optional_typed_object, [entry, "serviceOperation", operation_path], null);
raw_services = $.call(_list, [$.call(_required_field, [entry, "services", ($.str(path) + ".services")], null), ($.str(path) + ".services")], null);
services = [];
for ([index, raw_service] of $.iterable($.call($.enumerate, [raw_services], null))) {
$.call($.attr(services, "append"), [$.call(_string, [raw_service, ($.str(path) + ".services[" + $.str(index) + "]")], null)], null);
}
return $.call(VehicleServiceHistoryEntry, [], Object.assign({}, {"mileage": $.call(ServiceHistoryMileage, [], Object.assign({}, {"unit": $.call(_enum, [$.call(_required_field, [mileage, "unit", ($.str(mileage_path) + ".unit")], null), DistanceUnit, ($.str(mileage_path) + ".unit")], null)}, {"value": $.call(_required_int, [mileage, "value", ($.str(mileage_path) + ".value")], null)}))}, {"service_date": $.call(_datetime, [$.call(_required_field, [entry, "serviceDate", ($.str(path) + ".serviceDate")], null), ($.str(path) + ".serviceDate")], null)}, {"dealer_name": $.call(_required_string, [entry, "dealerName", ($.str(path) + ".dealerName")], null)}, {"dealer_code": $.call(_required_string, [entry, "dealerCode", ($.str(path) + ".dealerCode")], null)}, {"services": $.call($.tuple, [services], null)}, {"comment": $.call(_required_nullable_string, [entry, "comment", ($.str(path) + ".comment")], null)}, {"maintenance_id": $.call(_required_nullable_int, [entry, "maintenanceId", ($.str(path) + ".maintenanceId")], null)}, {"service_operation": ($.truth(((operation !== null))) ? $.call(_parse_service_operation, [operation, operation_path], null) : null)}));
}

export function _parse_service_operation(operation: Record<string, unknown>, path: string): VehicleServiceOperation;
/** Translated upstream _parse_service_operation. */
export function _parse_service_operation(...__args: any[]): any {
let {"operation": operation, "path": path} = $.bind(__args, ["operation", "path"], {}, [], null, null);
return $.call(VehicleServiceOperation, [], Object.assign({}, {"service_category_id": $.call(_required_nullable_string, [operation, "serviceCategoryId", ($.str(path) + ".serviceCategoryId")], null)}, {"service_category_name": $.call(_required_nullable_string, [operation, "serviceCategoryName", ($.str(path) + ".serviceCategoryName")], null)}, {"op_code_id": $.call(_required_nullable_string, [operation, "opCodeID", ($.str(path) + ".opCodeID")], null)}, {"op_code_description": $.call(_required_nullable_string, [operation, "opCodeDescription", ($.str(path) + ".opCodeDescription")], null)}));
}

export function _parse_warranty_period(value: unknown, path: string): VehicleWarrantyPeriod;
/** Translated upstream _parse_warranty_period. */
export function _parse_warranty_period(...__args: any[]): any {
let period;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
period = $.call(_typed_object, [value, path], null);
return $.call(VehicleWarrantyPeriod, [], Object.assign({}, {"mileage": $.call(_required_int, [period, "mileage", ($.str(path) + ".mileage")], null)}, {"date": $.call(_date, [$.call(_required_field, [period, "date", ($.str(path) + ".date")], null), ($.str(path) + ".date")], null)}));
}

export function _vehicle(data: Record<string, unknown>): Record<string, unknown> | null;
/** Translated upstream _vehicle. */
export function _vehicle(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
if ($.truth((!$.contains(data, "vehicle")))) {
throw $.call(ResponseError, ["vehicle is missing"], null);
}
return $.call(_optional_typed_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
}

export function _required_field(container: Record<string, unknown>, field: string, path: string): unknown;
/** Translated upstream _required_field. */
export function _required_field(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
if ($.truth((!$.contains(container, field)))) {
throw $.call(ResponseError, [($.str(path) + " is missing")], null);
}
return $.get(container, field);
}

export function _object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _object. */
export function _object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
return value;
}

export function _typed_object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _typed_object. */
export function _typed_object(...__args: any[]): any {
let result;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
result = $.call(_object, [value, path], null);
$.call(_required_string, [result, "__typename", ($.str(path) + ".__typename")], null);
return result;
}

export function _optional_typed_object(value: unknown, path: string): Record<string, unknown> | null;
/** Translated upstream _optional_typed_object. */
export function _optional_typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_typed_object, [value, path], null);
}

export function _required_typed_object(container: Record<string, unknown>, field: string, path: string): Record<string, unknown>;
/** Translated upstream _required_typed_object. */
export function _required_typed_object(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_typed_object, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _required_optional_typed_object(container: Record<string, unknown>, field: string, path: string): Record<string, unknown> | null;
/** Translated upstream _required_optional_typed_object. */
export function _required_optional_typed_object(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_optional_typed_object, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _list(value: unknown, path: string): ReadonlyArray<unknown>;
/** Translated upstream _list. */
export function _list(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
return value;
}

export function _string(value: unknown, path: string): string;
/** Translated upstream _string. */
export function _string(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return value;
}

export function _required_string(container: Record<string, unknown>, field: string, path: string): string;
/** Translated upstream _required_string. */
export function _required_string(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_string, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _required_nullable_string(container: Record<string, unknown>, field: string, path: string): string | null;
/** Translated upstream _required_nullable_string. */
export function _required_nullable_string(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_string, [value, path], null);
}

export function _int(value: unknown, path: string): number;
/** Translated upstream _int. */
export function _int(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.int], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an integer")], null);
}
return value;
}

export function _required_int(container: Record<string, unknown>, field: string, path: string): number;
/** Translated upstream _required_int. */
export function _required_int(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
return $.call(_int, [$.call(_required_field, [container, field, path], null), path], null);
}

export function _required_nullable_int(container: Record<string, unknown>, field: string, path: string): number | null;
/** Translated upstream _required_nullable_int. */
export function _required_nullable_int(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_int, [value, path], null);
}

export function _float(value: unknown, path: string): number;
/** Translated upstream _float. */
export function _float(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, [$.int, $.float]], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not numeric")], null);
}
return $.call($.float, [value], null);
}

export function _required_nullable_float(container: Record<string, unknown>, field: string, path: string): number | null;
/** Translated upstream _required_nullable_float. */
export function _required_nullable_float(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_float, [value, path], null);
}

export function _required_nullable_bool(container: Record<string, unknown>, field: string, path: string): boolean | null;
/** Translated upstream _required_nullable_bool. */
export function _required_nullable_bool(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _enum(value: unknown, enum_type: any, path: string): any;
/** Translated upstream _enum. */
export function _enum(...__args: any[]): any {
let raw_value;
let {"value": value, "enum_type": enum_type, "path": path} = $.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
raw_value = $.call(_string, [value, path], null);
try {
return $.call(enum_type, [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { try {
return $.call(enum_type, ["UNKNOWN__"], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { throw $.call(ResponseError, [($.str(path) + " has an unsupported value: " + $.str(raw_value))], null); } else { throw __error; }
} } else { throw __error; }
}
}

export function _datetime(value: unknown, path: string): $.DateValue;
/** Translated upstream _datetime. */
export function _datetime(...__args: any[]): any {
let normalized, raw_value, result;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_string, [value, path], null);
normalized = ($.truth($.call($.attr(raw_value, "endswith"), ["Z"], null)) ? ($.str($.slice(raw_value, null, -(1), null)) + "+00:00") : raw_value);
try {
result = $.call($.attr(datetime, "fromisoformat"), [normalized], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { let error = __error; throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time")], null); } else { throw __error; }
}
if ($.truth($.or(() => (($.attr(result, "tzinfo") === null)), () => (($.call($.attr(result, "utcoffset"), [], null) === null))))) {
throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date-time with an offset")], null);
}
return result;
}

export function _date(value: unknown, path: string): $.DateValue;
/** Translated upstream _date. */
export function _date(...__args: any[]): any {
let raw_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_value = $.call(_string, [value, path], null);
try {
return $.call($.attr(date, "fromisoformat"), [raw_value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { let error = __error; throw $.call(ResponseError, [($.str(path) + " is not an ISO-8601 date")], null); } else { throw __error; }
}
}
