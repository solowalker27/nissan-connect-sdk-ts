// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

import { DistanceUnit } from "./models";
export { DistanceUnit };

export const PhotoSection = $.enumType("PhotoSection", {"ONE": "ONE", "TWO": "TWO", "THREE": "THREE", "FOUR": "FOUR", "FIVE": "FIVE", "SIX": "SIX", "SEVEN": "SEVEN", "EIGHT": "EIGHT", "NINE": "NINE", "TEN": "TEN", "ELEVEN": "ELEVEN", "TWELVE": "TWELVE", "THIRTEEN": "THIRTEEN", "FOURTEEN": "FOURTEEN", "FIFTEEN": "FIFTEEN", "SIXTEEN": "SIXTEEN", "SEVENTEEN": "SEVENTEEN", "EIGHTEEN": "EIGHTEEN", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type PhotoSection = ReturnType<typeof PhotoSection>;

/** Nullable postal address fields for a collision center. */
export class CollisionCenterAddress {
readonly address1: string | null;
readonly address2: string | null;
readonly city: string | null;
readonly state: string | null;
readonly postal_code: string | null;
readonly country: string | null;
static __fields = [["address1", $.MISSING], ["address2", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["postal_code", $.MISSING], ["country", $.MISSING]];
constructor(address1: string | null, address2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null);
constructor(options: { address1: string | null; address2: string | null; city: string | null; state: string | null; postal_code: string | null; country: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionCenterAddress, __args);  Object.freeze(this); }
}
$.classType(CollisionCenterAddress);

/** Nullable distance and driving-time details. */
export class CollisionCenterDistance {
readonly value: number | null;
readonly unit: DistanceUnit | null;
readonly drive_time: number | null;
static __fields = [["value", $.MISSING], ["unit", $.MISSING], ["drive_time", $.MISSING]];
constructor(value: number | null, unit: DistanceUnit | null, drive_time: number | null);
constructor(options: { value: number | null; unit: DistanceUnit | null; drive_time: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionCenterDistance, __args);  Object.freeze(this); }
}
$.classType(CollisionCenterDistance);

/** Nullable collision-center phone fields. */
export class CollisionCenterPhone {
readonly is_primary: boolean | null;
readonly number: string | null;
static __fields = [["is_primary", $.MISSING], ["number", $.MISSING]];
constructor(is_primary: boolean | null, number: string | null);
constructor(options: { is_primary: boolean | null; number: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionCenterPhone, __args);  Object.freeze(this); }
}
$.classType(CollisionCenterPhone);

/** Nullable Nissan certification and search metadata. */
export class CollisionCenterProperties {
readonly nissan_certified: boolean | null;
readonly ev_certified: boolean | null;
readonly p1669718_status: boolean | null;
readonly relevance_score: number | null;
readonly smart_filter_qualified: boolean | null;
readonly participant_profile_status: boolean | null;
readonly nissan_gtr: boolean | null;
readonly type_facility: string | null;
static __fields = [["nissan_certified", $.MISSING], ["ev_certified", $.MISSING], ["p1669718_status", $.MISSING], ["relevance_score", $.MISSING], ["smart_filter_qualified", $.MISSING], ["participant_profile_status", $.MISSING], ["nissan_gtr", $.MISSING], ["type_facility", $.MISSING]];
constructor(nissan_certified: boolean | null, ev_certified: boolean | null, p1669718_status: boolean | null, relevance_score: number | null, smart_filter_qualified: boolean | null, participant_profile_status: boolean | null, nissan_gtr: boolean | null, type_facility: string | null);
constructor(options: { nissan_certified: boolean | null; ev_certified: boolean | null; p1669718_status: boolean | null; relevance_score: number | null; smart_filter_qualified: boolean | null; participant_profile_status: boolean | null; nissan_gtr: boolean | null; type_facility: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionCenterProperties, __args);  Object.freeze(this); }
}
$.classType(CollisionCenterProperties);

/** Collision center returned by Nissan's location search. */
export class CollisionCenter {
readonly id: string;
readonly name: string;
readonly address: CollisionCenterAddress;
readonly distance: CollisionCenterDistance;
readonly phones: ReadonlyArray<CollisionCenterPhone | null>;
readonly emails: ReadonlyArray<string | null>;
readonly website: string | null;
readonly properties: CollisionCenterProperties | null;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["address", $.MISSING], ["distance", $.MISSING], ["phones", $.MISSING], ["emails", $.MISSING], ["website", $.MISSING], ["properties", $.MISSING]];
constructor(id: string, name: string, address: CollisionCenterAddress, distance: CollisionCenterDistance, phones: ReadonlyArray<CollisionCenterPhone | null>, emails: ReadonlyArray<string | null>, website: string | null, properties: CollisionCenterProperties | null);
constructor(options: { id: string; name: string; address: CollisionCenterAddress; distance: CollisionCenterDistance; phones: ReadonlyArray<CollisionCenterPhone | null>; emails: ReadonlyArray<string | null>; website: string | null; properties: CollisionCenterProperties | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionCenter, __args);  Object.freeze(this); }
}
$.classType(CollisionCenter);

/** Successful collision-report creation. */
export class CollisionReportCreated {
readonly collision_id: string;
static __fields = [["collision_id", $.MISSING]];
constructor(collision_id: string);
constructor(options: { collision_id: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportCreated, __args);  Object.freeze(this); }
}
$.classType(CollisionReportCreated);

/** Successful collision-report PDF generation. */
export class CollisionReportPdfCreated {
readonly pdf_url: string;
static __fields = [["pdf_url", $.MISSING]];
constructor(pdf_url: string);
constructor(options: { pdf_url: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportPdfCreated, __args);  Object.freeze(this); }
}
$.classType(CollisionReportPdfCreated);

/** Nullable status returned after deleting a report photo. */
export class CollisionReportPhotoDeleted {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportPhotoDeleted, __args);  Object.freeze(this); }
}
$.classType(CollisionReportPhotoDeleted);

/** Nullable status returned after uploading a report photo. */
export class CollisionReportPhotoUploaded {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportPhotoUploaded, __args);  Object.freeze(this); }
}
$.classType(CollisionReportPhotoUploaded);

/** Required collision-report mutation error message. */
export class CollisionReportError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportError, __args);  Object.freeze(this); }
}
$.classType(CollisionReportError);

/** Nullable collision-report photo deletion error message. */
export class CollisionReportPhotoDeleteError {
readonly message: string | null;
static __fields = [["message", $.MISSING]];
constructor(message: string | null);
constructor(options: { message: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CollisionReportPhotoDeleteError, __args);  Object.freeze(this); }
}
$.classType(CollisionReportPhotoDeleteError);

/** Future collision-report union branch selected only by type name. */
export class UnselectedCollisionReportResult {
readonly typename: string;
static __fields = [["typename", $.MISSING]];
constructor(typename: string);
constructor(options: { typename: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnselectedCollisionReportResult, __args);  Object.freeze(this); }
}
$.classType(UnselectedCollisionReportResult);

export type CreateCollisionReportResult = CollisionReportCreated | CollisionReportError | UnselectedCollisionReportResult;

export type CreateCollisionReportPdfResult = CollisionReportPdfCreated | CollisionReportError | UnselectedCollisionReportResult;

export type DeleteCollisionReportPhotoResult = CollisionReportPhotoDeleted | CollisionReportPhotoDeleteError | UnselectedCollisionReportResult;

export type UploadCollisionReportPhotoResult = CollisionReportPhotoUploaded | CollisionReportError | UnselectedCollisionReportResult;
