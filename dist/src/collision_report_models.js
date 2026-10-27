"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnselectedCollisionReportResult = exports.CollisionReportPhotoDeleteError = exports.CollisionReportError = exports.CollisionReportPhotoUploaded = exports.CollisionReportPhotoDeleted = exports.CollisionReportPdfCreated = exports.CollisionReportCreated = exports.CollisionCenter = exports.CollisionCenterProperties = exports.CollisionCenterPhone = exports.CollisionCenterDistance = exports.CollisionCenterAddress = exports.PhotoSection = exports.DistanceUnit = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
exports.PhotoSection = _runtime_1.py.enumType("PhotoSection", { "ONE": "ONE", "TWO": "TWO", "THREE": "THREE", "FOUR": "FOUR", "FIVE": "FIVE", "SIX": "SIX", "SEVEN": "SEVEN", "EIGHT": "EIGHT", "NINE": "NINE", "TEN": "TEN", "ELEVEN": "ELEVEN", "TWELVE": "TWELVE", "THIRTEEN": "THIRTEEN", "FOURTEEN": "FOURTEEN", "FIFTEEN": "FIFTEEN", "SIXTEEN": "SIXTEEN", "SEVENTEEN": "SEVENTEEN", "EIGHTEEN": "EIGHTEEN", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Nullable postal address fields for a collision center. */
class CollisionCenterAddress {
    address1;
    address2;
    city;
    state;
    postal_code;
    country;
    static __fields = [["address1", _runtime_1.py.MISSING], ["address2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionCenterAddress, __args); Object.freeze(this); }
}
exports.CollisionCenterAddress = CollisionCenterAddress;
_runtime_1.py.classType(CollisionCenterAddress);
/** Nullable distance and driving-time details. */
class CollisionCenterDistance {
    value;
    unit;
    drive_time;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING], ["drive_time", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionCenterDistance, __args); Object.freeze(this); }
}
exports.CollisionCenterDistance = CollisionCenterDistance;
_runtime_1.py.classType(CollisionCenterDistance);
/** Nullable collision-center phone fields. */
class CollisionCenterPhone {
    is_primary;
    number;
    static __fields = [["is_primary", _runtime_1.py.MISSING], ["number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionCenterPhone, __args); Object.freeze(this); }
}
exports.CollisionCenterPhone = CollisionCenterPhone;
_runtime_1.py.classType(CollisionCenterPhone);
/** Nullable Nissan certification and search metadata. */
class CollisionCenterProperties {
    nissan_certified;
    ev_certified;
    p1669718_status;
    relevance_score;
    smart_filter_qualified;
    participant_profile_status;
    nissan_gtr;
    type_facility;
    static __fields = [["nissan_certified", _runtime_1.py.MISSING], ["ev_certified", _runtime_1.py.MISSING], ["p1669718_status", _runtime_1.py.MISSING], ["relevance_score", _runtime_1.py.MISSING], ["smart_filter_qualified", _runtime_1.py.MISSING], ["participant_profile_status", _runtime_1.py.MISSING], ["nissan_gtr", _runtime_1.py.MISSING], ["type_facility", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionCenterProperties, __args); Object.freeze(this); }
}
exports.CollisionCenterProperties = CollisionCenterProperties;
_runtime_1.py.classType(CollisionCenterProperties);
/** Collision center returned by Nissan's location search. */
class CollisionCenter {
    id;
    name;
    address;
    distance;
    phones;
    emails;
    website;
    properties;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["distance", _runtime_1.py.MISSING], ["phones", _runtime_1.py.MISSING], ["emails", _runtime_1.py.MISSING], ["website", _runtime_1.py.MISSING], ["properties", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionCenter, __args); Object.freeze(this); }
}
exports.CollisionCenter = CollisionCenter;
_runtime_1.py.classType(CollisionCenter);
/** Successful collision-report creation. */
class CollisionReportCreated {
    collision_id;
    static __fields = [["collision_id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportCreated, __args); Object.freeze(this); }
}
exports.CollisionReportCreated = CollisionReportCreated;
_runtime_1.py.classType(CollisionReportCreated);
/** Successful collision-report PDF generation. */
class CollisionReportPdfCreated {
    pdf_url;
    static __fields = [["pdf_url", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportPdfCreated, __args); Object.freeze(this); }
}
exports.CollisionReportPdfCreated = CollisionReportPdfCreated;
_runtime_1.py.classType(CollisionReportPdfCreated);
/** Nullable status returned after deleting a report photo. */
class CollisionReportPhotoDeleted {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportPhotoDeleted, __args); Object.freeze(this); }
}
exports.CollisionReportPhotoDeleted = CollisionReportPhotoDeleted;
_runtime_1.py.classType(CollisionReportPhotoDeleted);
/** Nullable status returned after uploading a report photo. */
class CollisionReportPhotoUploaded {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportPhotoUploaded, __args); Object.freeze(this); }
}
exports.CollisionReportPhotoUploaded = CollisionReportPhotoUploaded;
_runtime_1.py.classType(CollisionReportPhotoUploaded);
/** Required collision-report mutation error message. */
class CollisionReportError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportError, __args); Object.freeze(this); }
}
exports.CollisionReportError = CollisionReportError;
_runtime_1.py.classType(CollisionReportError);
/** Nullable collision-report photo deletion error message. */
class CollisionReportPhotoDeleteError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportPhotoDeleteError, __args); Object.freeze(this); }
}
exports.CollisionReportPhotoDeleteError = CollisionReportPhotoDeleteError;
_runtime_1.py.classType(CollisionReportPhotoDeleteError);
/** Future collision-report union branch selected only by type name. */
class UnselectedCollisionReportResult {
    typename;
    static __fields = [["typename", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnselectedCollisionReportResult, __args); Object.freeze(this); }
}
exports.UnselectedCollisionReportResult = UnselectedCollisionReportResult;
_runtime_1.py.classType(UnselectedCollisionReportResult);
//# sourceMappingURL=collision_report_models.js.map