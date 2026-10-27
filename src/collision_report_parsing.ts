// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _enum, _required_field, _required_nullable_bool, _required_nullable_string, _required_string, _root, _typed_object, _typename } from "./account_parsing";
export { _enum, _required_field, _required_nullable_bool, _required_nullable_string, _required_string, _root, _typed_object, _typename };

import { CollisionCenter, CollisionCenterAddress, CollisionCenterDistance, CollisionCenterPhone, CollisionCenterProperties, CollisionReportCreated, CollisionReportError, CollisionReportPdfCreated, CollisionReportPhotoDeleted, CollisionReportPhotoDeleteError, CollisionReportPhotoUploaded, CreateCollisionReportPdfResult, CreateCollisionReportResult, DeleteCollisionReportPhotoResult, UnselectedCollisionReportResult, UploadCollisionReportPhotoResult } from "./collision_report_models";
export { CollisionCenter, CollisionCenterAddress, CollisionCenterDistance, CollisionCenterPhone, CollisionCenterProperties, CollisionReportCreated, CollisionReportError, CollisionReportPdfCreated, CollisionReportPhotoDeleted, CollisionReportPhotoDeleteError, CollisionReportPhotoUploaded, CreateCollisionReportPdfResult, CreateCollisionReportResult, DeleteCollisionReportPhotoResult, UnselectedCollisionReportResult, UploadCollisionReportPhotoResult };

import { ResponseError } from "./exceptions";
export { ResponseError };

import { DistanceUnit } from "./models";
export { DistanceUnit };

export function parse_collision_centers(data: Record<string, unknown>): ReadonlyArray<CollisionCenter | null> | null;
/** Parse the nullable collision-center list and nullable entries. */
export function parse_collision_centers(...__args: any[]): any {
let centers, field, index, item, path, value;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable collision-center list and nullable entries. */
field = "collisionCenters";
value = $.call(_required_field, [data, field, field], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(field) + " is not a list")], null);
}
centers = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(centers, "append"), [null], null);
continue;
}
path = ($.str(field) + "[" + $.str(index) + "]");
$.call($.attr(centers, "append"), [$.call(_parse_collision_center, [$.call(_typed_object, [item, path], null), path], null)], null);
}
return $.call($.tuple, [centers], null);
}

export function parse_create_collision_report(data: Record<string, unknown>): CreateCollisionReportResult | null;
/** Parse every generated collision-report creation branch. */
export function parse_create_collision_report(...__args: any[]): any {
let field, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated collision-report creation branch. */
field = "createCollisionReport";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "CreateCollisionReportSuccess")))) {
return $.call(CollisionReportCreated, [$.call(_required_string, [root, "collisionId", ($.str(field) + ".collisionId")], null)], null);
}
if ($.truth(($.eq(typename, "CreateCollisionReportError")))) {
return $.call(CollisionReportError, [$.call(_required_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedCollisionReportResult, [typename], null);
}

export function parse_create_collision_report_pdf(data: Record<string, unknown>): CreateCollisionReportPdfResult | null;
/** Parse every generated collision-report PDF branch. */
export function parse_create_collision_report_pdf(...__args: any[]): any {
let field, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated collision-report PDF branch. */
field = "createCollisionReportPDF";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "CreateCollisionReportPDFSuccess")))) {
return $.call(CollisionReportPdfCreated, [$.call(_required_string, [root, "pdfUrl", ($.str(field) + ".pdfUrl")], null)], null);
}
if ($.truth(($.eq(typename, "CreateCollisionReportPDFError")))) {
return $.call(CollisionReportError, [$.call(_required_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedCollisionReportResult, [typename], null);
}

export function parse_delete_collision_report_photo(data: Record<string, unknown>): DeleteCollisionReportPhotoResult | null;
/** Parse every generated collision-report photo deletion branch. */
export function parse_delete_collision_report_photo(...__args: any[]): any {
let field, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated collision-report photo deletion branch. */
field = "deletePhotoForCollisionReport";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "DeletePhotoForCollisionReportSuccess")))) {
return $.call(CollisionReportPhotoDeleted, [$.call(_required_nullable_bool, [root, "success", ($.str(field) + ".success")], null)], null);
}
if ($.truth(($.eq(typename, "DeletePhotoForCollisionReportError")))) {
return $.call(CollisionReportPhotoDeleteError, [$.call(_required_nullable_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedCollisionReportResult, [typename], null);
}

export function parse_upload_collision_report_photo(data: Record<string, unknown>): UploadCollisionReportPhotoResult | null;
/** Parse every generated collision-report photo upload branch. */
export function parse_upload_collision_report_photo(...__args: any[]): any {
let field, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated collision-report photo upload branch. */
field = "uploadPhotoForCollisionReport";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "UploadPhotoForCollisionReportSuccess")))) {
return $.call(CollisionReportPhotoUploaded, [$.call(_required_nullable_bool, [root, "success", ($.str(field) + ".success")], null)], null);
}
if ($.truth(($.eq(typename, "UploadPhotoForCollisionReportError")))) {
return $.call(CollisionReportError, [$.call(_required_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedCollisionReportResult, [typename], null);
}

export function _parse_collision_center(value: Record<string, unknown>, path: string): CollisionCenter;
/** Translated upstream _parse_collision_center. */
export function _parse_collision_center(...__args: any[]): any {
let address, address_path, distance, distance_path, properties, properties_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_typename, [value, path], null);
address_path = ($.str(path) + ".address");
distance_path = ($.str(path) + ".distance");
address = $.call(_typed_object, [$.call(_required_field, [value, "address", address_path], null), address_path], null);
distance = $.call(_typed_object, [$.call(_required_field, [value, "distance", distance_path], null), distance_path], null);
properties_value = $.call(_required_field, [value, "properties", ($.str(path) + ".properties")], null);
properties = ($.truth(((properties_value === null))) ? null : $.call(_parse_properties, [$.call(_typed_object, [properties_value, ($.str(path) + ".properties")], null), ($.str(path) + ".properties")], null));
return $.call(CollisionCenter, [], Object.assign({}, {"id": $.call(_required_string, [value, "id", ($.str(path) + ".id")], null)}, {"name": $.call(_required_string, [value, "name", ($.str(path) + ".name")], null)}, {"address": $.call(_parse_address, [address, address_path], null)}, {"distance": $.call(_parse_distance, [distance, distance_path], null)}, {"phones": $.call(_parse_nullable_phones, [value, path], null)}, {"emails": $.call(_parse_nullable_strings, [value, "emails", ($.str(path) + ".emails")], null)}, {"website": $.call(_required_nullable_string, [value, "website", ($.str(path) + ".website")], null)}, {"properties": properties}));
}

export function _parse_address(value: Record<string, unknown>, path: string): CollisionCenterAddress;
/** Translated upstream _parse_address. */
export function _parse_address(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_typename, [value, path], null);
return $.call(CollisionCenterAddress, [], Object.assign({}, {"address1": $.call(_required_nullable_string, [value, "address1", ($.str(path) + ".address1")], null)}, {"address2": $.call(_required_nullable_string, [value, "address2", ($.str(path) + ".address2")], null)}, {"city": $.call(_required_nullable_string, [value, "city", ($.str(path) + ".city")], null)}, {"state": $.call(_required_nullable_string, [value, "state", ($.str(path) + ".state")], null)}, {"postal_code": $.call(_required_nullable_string, [value, "postalCode", ($.str(path) + ".postalCode")], null)}, {"country": $.call(_required_nullable_string, [value, "country", ($.str(path) + ".country")], null)}));
}

export function _parse_distance(value: Record<string, unknown>, path: string): CollisionCenterDistance;
/** Translated upstream _parse_distance. */
export function _parse_distance(...__args: any[]): any {
let raw_unit;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_typename, [value, path], null);
raw_unit = $.call(_required_field, [value, "unit", ($.str(path) + ".unit")], null);
return $.call(CollisionCenterDistance, [], Object.assign({}, {"value": $.call(_required_nullable_float, [value, "value", ($.str(path) + ".value")], null)}, {"unit": ($.truth(((raw_unit === null))) ? null : $.call(_enum, [raw_unit, DistanceUnit, ($.str(path) + ".unit")], null))}, {"drive_time": $.call(_required_nullable_float, [value, "driveTime", ($.str(path) + ".driveTime")], null)}));
}

export function _parse_nullable_phones(value: Record<string, unknown>, path: string): ReadonlyArray<CollisionCenterPhone | null>;
/** Translated upstream _parse_nullable_phones. */
export function _parse_nullable_phones(...__args: any[]): any {
let field_path, index, item, item_path, phone, phones, phones_value;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
field_path = ($.str(path) + ".phones");
phones_value = $.call(_required_field, [value, "phones", field_path], null);
if ($.truth(!$.truth($.call($.isinstance, [phones_value, $.list], null)))) {
throw $.call(ResponseError, [($.str(field_path) + " is not a list")], null);
}
phones = [];
for ([index, item] of $.iterable($.call($.enumerate, [phones_value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(phones, "append"), [null], null);
continue;
}
item_path = ($.str(field_path) + "[" + $.str(index) + "]");
phone = $.call(_typed_object, [item, item_path], null);
$.call(_typename, [phone, item_path], null);
$.call($.attr(phones, "append"), [$.call(CollisionCenterPhone, [$.call(_required_nullable_bool, [phone, "isPrimary", ($.str(item_path) + ".isPrimary")], null), $.call(_required_nullable_string, [phone, "number", ($.str(item_path) + ".number")], null)], null)], null);
}
return $.call($.tuple, [phones], null);
}

export function _parse_nullable_strings(container: Record<string, unknown>, field: string, path: string): ReadonlyArray<string | null>;
/** Translated upstream _parse_nullable_strings. */
export function _parse_nullable_strings(...__args: any[]): any {
let index, item, items, value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
items = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth($.and(() => ((item !== null)), () => !$.truth($.call($.isinstance, [item, $.str], null))))) {
throw $.call(ResponseError, [($.str(path) + "[" + $.str(index) + "] is not a string")], null);
}
$.call($.attr(items, "append"), [item], null);
}
return $.call($.tuple, [items], null);
}

export function _parse_properties(value: Record<string, unknown>, path: string): CollisionCenterProperties;
/** Translated upstream _parse_properties. */
export function _parse_properties(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
$.call(_typename, [value, path], null);
return $.call(CollisionCenterProperties, [], Object.assign({}, {"nissan_certified": $.call(_required_nullable_bool, [value, "nissanCertified", ($.str(path) + ".nissanCertified")], null)}, {"ev_certified": $.call(_required_nullable_bool, [value, "evCertified", ($.str(path) + ".evCertified")], null)}, {"p1669718_status": $.call(_required_nullable_bool, [value, "p1669718Status", ($.str(path) + ".p1669718Status")], null)}, {"relevance_score": $.call(_required_nullable_float, [value, "relevanceScore", ($.str(path) + ".relevanceScore")], null)}, {"smart_filter_qualified": $.call(_required_nullable_bool, [value, "smartFilterQualified", ($.str(path) + ".smartFilterQualified")], null)}, {"participant_profile_status": $.call(_required_nullable_bool, [value, "participantProfileStatus", ($.str(path) + ".participantProfileStatus")], null)}, {"nissan_gtr": $.call(_required_nullable_bool, [value, "nissanGTR", ($.str(path) + ".nissanGTR")], null)}, {"type_facility": $.call(_required_nullable_string, [value, "typeFacility", ($.str(path) + ".typeFacility")], null)}));
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
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.union($.int, $.float)], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a number")], null);
}
return $.call($.float, [value], null);
}
