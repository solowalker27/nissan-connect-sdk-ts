"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceUnit = exports.ResponseError = exports.UnselectedCollisionReportResult = exports.CollisionReportPhotoUploaded = exports.CollisionReportPhotoDeleteError = exports.CollisionReportPhotoDeleted = exports.CollisionReportPdfCreated = exports.CollisionReportError = exports.CollisionReportCreated = exports.CollisionCenterProperties = exports.CollisionCenterPhone = exports.CollisionCenterDistance = exports.CollisionCenterAddress = exports.CollisionCenter = exports._typename = exports._typed_object = exports._root = exports._required_string = exports._required_nullable_string = exports._required_nullable_bool = exports._required_field = exports._enum = void 0;
exports.parse_collision_centers = parse_collision_centers;
exports.parse_create_collision_report = parse_create_collision_report;
exports.parse_create_collision_report_pdf = parse_create_collision_report_pdf;
exports.parse_delete_collision_report_photo = parse_delete_collision_report_photo;
exports.parse_upload_collision_report_photo = parse_upload_collision_report_photo;
exports._parse_collision_center = _parse_collision_center;
exports._parse_address = _parse_address;
exports._parse_distance = _parse_distance;
exports._parse_nullable_phones = _parse_nullable_phones;
exports._parse_nullable_strings = _parse_nullable_strings;
exports._parse_properties = _parse_properties;
exports._required_nullable_float = _required_nullable_float;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_enum", { enumerable: true, get: function () { return account_parsing_1._enum; } });
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return account_parsing_1._root; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return account_parsing_1._typed_object; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const collision_report_models_1 = require("./collision_report_models");
Object.defineProperty(exports, "CollisionCenter", { enumerable: true, get: function () { return collision_report_models_1.CollisionCenter; } });
Object.defineProperty(exports, "CollisionCenterAddress", { enumerable: true, get: function () { return collision_report_models_1.CollisionCenterAddress; } });
Object.defineProperty(exports, "CollisionCenterDistance", { enumerable: true, get: function () { return collision_report_models_1.CollisionCenterDistance; } });
Object.defineProperty(exports, "CollisionCenterPhone", { enumerable: true, get: function () { return collision_report_models_1.CollisionCenterPhone; } });
Object.defineProperty(exports, "CollisionCenterProperties", { enumerable: true, get: function () { return collision_report_models_1.CollisionCenterProperties; } });
Object.defineProperty(exports, "CollisionReportCreated", { enumerable: true, get: function () { return collision_report_models_1.CollisionReportCreated; } });
Object.defineProperty(exports, "CollisionReportError", { enumerable: true, get: function () { return collision_report_models_1.CollisionReportError; } });
Object.defineProperty(exports, "CollisionReportPdfCreated", { enumerable: true, get: function () { return collision_report_models_1.CollisionReportPdfCreated; } });
Object.defineProperty(exports, "CollisionReportPhotoDeleted", { enumerable: true, get: function () { return collision_report_models_1.CollisionReportPhotoDeleted; } });
Object.defineProperty(exports, "CollisionReportPhotoDeleteError", { enumerable: true, get: function () { return collision_report_models_1.CollisionReportPhotoDeleteError; } });
Object.defineProperty(exports, "CollisionReportPhotoUploaded", { enumerable: true, get: function () { return collision_report_models_1.CollisionReportPhotoUploaded; } });
Object.defineProperty(exports, "UnselectedCollisionReportResult", { enumerable: true, get: function () { return collision_report_models_1.UnselectedCollisionReportResult; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
/** Parse the nullable collision-center list and nullable entries. */
function parse_collision_centers(...__args) {
    let centers, field, index, item, path, value;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable collision-center list and nullable entries. */
    field = "collisionCenters";
    value = _runtime_1.py.call(account_parsing_1._required_field, [data, field, field], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(field) + " is not a list")], null);
    }
    centers = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(centers, "append"), [null], null);
            continue;
        }
        path = (_runtime_1.py.str(field) + "[" + _runtime_1.py.str(index) + "]");
        _runtime_1.py.call(_runtime_1.py.attr(centers, "append"), [_runtime_1.py.call(_parse_collision_center, [_runtime_1.py.call(account_parsing_1._typed_object, [item, path], null), path], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [centers], null);
}
/** Parse every generated collision-report creation branch. */
function parse_create_collision_report(...__args) {
    let field, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated collision-report creation branch. */
    field = "createCollisionReport";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "CreateCollisionReportSuccess")))) {
        return _runtime_1.py.call(collision_report_models_1.CollisionReportCreated, [_runtime_1.py.call(account_parsing_1._required_string, [root, "collisionId", (_runtime_1.py.str(field) + ".collisionId")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "CreateCollisionReportError")))) {
        return _runtime_1.py.call(collision_report_models_1.CollisionReportError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(collision_report_models_1.UnselectedCollisionReportResult, [typename], null);
}
/** Parse every generated collision-report PDF branch. */
function parse_create_collision_report_pdf(...__args) {
    let field, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated collision-report PDF branch. */
    field = "createCollisionReportPDF";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "CreateCollisionReportPDFSuccess")))) {
        return _runtime_1.py.call(collision_report_models_1.CollisionReportPdfCreated, [_runtime_1.py.call(account_parsing_1._required_string, [root, "pdfUrl", (_runtime_1.py.str(field) + ".pdfUrl")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "CreateCollisionReportPDFError")))) {
        return _runtime_1.py.call(collision_report_models_1.CollisionReportError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(collision_report_models_1.UnselectedCollisionReportResult, [typename], null);
}
/** Parse every generated collision-report photo deletion branch. */
function parse_delete_collision_report_photo(...__args) {
    let field, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated collision-report photo deletion branch. */
    field = "deletePhotoForCollisionReport";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "DeletePhotoForCollisionReportSuccess")))) {
        return _runtime_1.py.call(collision_report_models_1.CollisionReportPhotoDeleted, [_runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "success", (_runtime_1.py.str(field) + ".success")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "DeletePhotoForCollisionReportError")))) {
        return _runtime_1.py.call(collision_report_models_1.CollisionReportPhotoDeleteError, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(collision_report_models_1.UnselectedCollisionReportResult, [typename], null);
}
/** Parse every generated collision-report photo upload branch. */
function parse_upload_collision_report_photo(...__args) {
    let field, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated collision-report photo upload branch. */
    field = "uploadPhotoForCollisionReport";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UploadPhotoForCollisionReportSuccess")))) {
        return _runtime_1.py.call(collision_report_models_1.CollisionReportPhotoUploaded, [_runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "success", (_runtime_1.py.str(field) + ".success")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UploadPhotoForCollisionReportError")))) {
        return _runtime_1.py.call(collision_report_models_1.CollisionReportError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(collision_report_models_1.UnselectedCollisionReportResult, [typename], null);
}
/** Translated upstream _parse_collision_center. */
function _parse_collision_center(...__args) {
    let address, address_path, distance, distance_path, properties, properties_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    address_path = (_runtime_1.py.str(path) + ".address");
    distance_path = (_runtime_1.py.str(path) + ".distance");
    address = _runtime_1.py.call(account_parsing_1._typed_object, [_runtime_1.py.call(account_parsing_1._required_field, [value, "address", address_path], null), address_path], null);
    distance = _runtime_1.py.call(account_parsing_1._typed_object, [_runtime_1.py.call(account_parsing_1._required_field, [value, "distance", distance_path], null), distance_path], null);
    properties_value = _runtime_1.py.call(account_parsing_1._required_field, [value, "properties", (_runtime_1.py.str(path) + ".properties")], null);
    properties = (_runtime_1.py.truth(((properties_value === null))) ? null : _runtime_1.py.call(_parse_properties, [_runtime_1.py.call(account_parsing_1._typed_object, [properties_value, (_runtime_1.py.str(path) + ".properties")], null), (_runtime_1.py.str(path) + ".properties")], null));
    return _runtime_1.py.call(collision_report_models_1.CollisionCenter, [], Object.assign({}, { "id": _runtime_1.py.call(account_parsing_1._required_string, [value, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "address": _runtime_1.py.call(_parse_address, [address, address_path], null) }, { "distance": _runtime_1.py.call(_parse_distance, [distance, distance_path], null) }, { "phones": _runtime_1.py.call(_parse_nullable_phones, [value, path], null) }, { "emails": _runtime_1.py.call(_parse_nullable_strings, [value, "emails", (_runtime_1.py.str(path) + ".emails")], null) }, { "website": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "website", (_runtime_1.py.str(path) + ".website")], null) }, { "properties": properties }));
}
/** Translated upstream _parse_address. */
function _parse_address(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    return _runtime_1.py.call(collision_report_models_1.CollisionCenterAddress, [], Object.assign({}, { "address1": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "address1", (_runtime_1.py.str(path) + ".address1")], null) }, { "address2": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "address2", (_runtime_1.py.str(path) + ".address2")], null) }, { "city": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "city", (_runtime_1.py.str(path) + ".city")], null) }, { "state": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "state", (_runtime_1.py.str(path) + ".state")], null) }, { "postal_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "postalCode", (_runtime_1.py.str(path) + ".postalCode")], null) }, { "country": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "country", (_runtime_1.py.str(path) + ".country")], null) }));
}
/** Translated upstream _parse_distance. */
function _parse_distance(...__args) {
    let raw_unit;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    raw_unit = _runtime_1.py.call(account_parsing_1._required_field, [value, "unit", (_runtime_1.py.str(path) + ".unit")], null);
    return _runtime_1.py.call(collision_report_models_1.CollisionCenterDistance, [], Object.assign({}, { "value": _runtime_1.py.call(_required_nullable_float, [value, "value", (_runtime_1.py.str(path) + ".value")], null) }, { "unit": (_runtime_1.py.truth(((raw_unit === null))) ? null : _runtime_1.py.call(account_parsing_1._enum, [raw_unit, models_1.DistanceUnit, (_runtime_1.py.str(path) + ".unit")], null)) }, { "drive_time": _runtime_1.py.call(_required_nullable_float, [value, "driveTime", (_runtime_1.py.str(path) + ".driveTime")], null) }));
}
/** Translated upstream _parse_nullable_phones. */
function _parse_nullable_phones(...__args) {
    let field_path, index, item, item_path, phone, phones, phones_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    field_path = (_runtime_1.py.str(path) + ".phones");
    phones_value = _runtime_1.py.call(account_parsing_1._required_field, [value, "phones", field_path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [phones_value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(field_path) + " is not a list")], null);
    }
    phones = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [phones_value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(phones, "append"), [null], null);
            continue;
        }
        item_path = (_runtime_1.py.str(field_path) + "[" + _runtime_1.py.str(index) + "]");
        phone = _runtime_1.py.call(account_parsing_1._typed_object, [item, item_path], null);
        _runtime_1.py.call(account_parsing_1._typename, [phone, item_path], null);
        _runtime_1.py.call(_runtime_1.py.attr(phones, "append"), [_runtime_1.py.call(collision_report_models_1.CollisionCenterPhone, [_runtime_1.py.call(account_parsing_1._required_nullable_bool, [phone, "isPrimary", (_runtime_1.py.str(item_path) + ".isPrimary")], null), _runtime_1.py.call(account_parsing_1._required_nullable_string, [phone, "number", (_runtime_1.py.str(item_path) + ".number")], null)], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [phones], null);
}
/** Translated upstream _parse_nullable_strings. */
function _parse_nullable_strings(...__args) {
    let index, item, items, value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    items = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [value], null))) {
        if (_runtime_1.py.truth(_runtime_1.py.and(() => ((item !== null)), () => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [item, _runtime_1.py.str], null))))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "] is not a string")], null);
        }
        _runtime_1.py.call(_runtime_1.py.attr(items, "append"), [item], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [items], null);
}
/** Translated upstream _parse_properties. */
function _parse_properties(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    _runtime_1.py.call(account_parsing_1._typename, [value, path], null);
    return _runtime_1.py.call(collision_report_models_1.CollisionCenterProperties, [], Object.assign({}, { "nissan_certified": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "nissanCertified", (_runtime_1.py.str(path) + ".nissanCertified")], null) }, { "ev_certified": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "evCertified", (_runtime_1.py.str(path) + ".evCertified")], null) }, { "p1669718_status": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "p1669718Status", (_runtime_1.py.str(path) + ".p1669718Status")], null) }, { "relevance_score": _runtime_1.py.call(_required_nullable_float, [value, "relevanceScore", (_runtime_1.py.str(path) + ".relevanceScore")], null) }, { "smart_filter_qualified": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "smartFilterQualified", (_runtime_1.py.str(path) + ".smartFilterQualified")], null) }, { "participant_profile_status": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "participantProfileStatus", (_runtime_1.py.str(path) + ".participantProfileStatus")], null) }, { "nissan_gtr": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "nissanGTR", (_runtime_1.py.str(path) + ".nissanGTR")], null) }, { "type_facility": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "typeFacility", (_runtime_1.py.str(path) + ".typeFacility")], null) }));
}
/** Translated upstream _required_nullable_float. */
function _required_nullable_float(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(account_parsing_1._required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.union(_runtime_1.py.int, _runtime_1.py.float)], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a number")], null);
    }
    return _runtime_1.py.call(_runtime_1.py.float, [value], null);
}
//# sourceMappingURL=collision_report_parsing.js.map