"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionReportPhotoInput = exports.CreateCollisionReportInput = exports.CollisionReportMetadataInput = exports.CollisionReportTowingCompanyInput = exports.CollisionReportCollisionCenterInput = exports.CollisionReportUserInput = exports.CollisionReportVehicleInput = exports.CollisionCenterSearchInput = exports.CollisionCenterAddressInput = exports.DistanceUnit = exports.serialize_enum = exports.serialize_datetime = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.coordinate_input = exports.CoordinateInput = exports.PhotoSection = void 0;
exports.collision_center_variables = collision_center_variables;
exports.create_collision_report_variables = create_collision_report_variables;
exports.collision_report_photo_variables = collision_report_photo_variables;
exports.collision_report_pdf_variables = collision_report_pdf_variables;
exports.delete_collision_report_photo_variables = delete_collision_report_photo_variables;
exports.collision_center_address_input = collision_center_address_input;
exports.collision_report_vehicle_input = collision_report_vehicle_input;
exports.collision_report_user_input = collision_report_user_input;
exports.collision_report_collision_center_input = collision_report_collision_center_input;
exports.collision_report_towing_company_input = collision_report_towing_company_input;
exports.collision_report_metadata_input = collision_report_metadata_input;
exports._optional_datetime = _optional_datetime;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const collision_report_models_1 = require("./collision_report_models");
Object.defineProperty(exports, "PhotoSection", { enumerable: true, get: function () { return collision_report_models_1.PhotoSection; } });
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "CoordinateInput", { enumerable: true, get: function () { return common_inputs_1.CoordinateInput; } });
Object.defineProperty(exports, "coordinate_input", { enumerable: true, get: function () { return common_inputs_1.coordinate_input; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_datetime", { enumerable: true, get: function () { return graphql_input_1.serialize_datetime; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
/** Optional country and postal code for collision-center discovery. */
class CollisionCenterAddressInput {
    country;
    postal_code;
    static __fields = [["country", graphql_input_1.UNSET], ["postal_code", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionCenterAddressInput, __args); Object.freeze(this); }
}
exports.CollisionCenterAddressInput = CollisionCenterAddressInput;
_runtime_1.py.classType(CollisionCenterAddressInput);
/** Vehicle and optional location or claim filters for collision centers. */
class CollisionCenterSearchInput {
    vin;
    coordinates;
    address;
    claim_id;
    static __fields = [["vin", _runtime_1.py.MISSING], ["coordinates", graphql_input_1.UNSET], ["address", graphql_input_1.UNSET], ["claim_id", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionCenterSearchInput, __args); Object.freeze(this); }
}
exports.CollisionCenterSearchInput = CollisionCenterSearchInput;
_runtime_1.py.classType(CollisionCenterSearchInput);
/** Required vehicle identity and optional registration details. */
class CollisionReportVehicleInput {
    make;
    model;
    model_year;
    license_plate;
    color;
    static __fields = [["make", _runtime_1.py.MISSING], ["model", _runtime_1.py.MISSING], ["model_year", _runtime_1.py.MISSING], ["license_plate", graphql_input_1.UNSET], ["color", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportVehicleInput, __args); Object.freeze(this); }
}
exports.CollisionReportVehicleInput = CollisionReportVehicleInput;
_runtime_1.py.classType(CollisionReportVehicleInput);
/** Optional driver contact fields included in a collision report. */
class CollisionReportUserInput {
    first_name;
    last_name;
    email;
    phone_number;
    static __fields = [["first_name", graphql_input_1.UNSET], ["last_name", graphql_input_1.UNSET], ["email", graphql_input_1.UNSET], ["phone_number", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportUserInput, __args); Object.freeze(this); }
}
exports.CollisionReportUserInput = CollisionReportUserInput;
_runtime_1.py.classType(CollisionReportUserInput);
/** Optional collision-center details included in a report. */
class CollisionReportCollisionCenterInput {
    name;
    address;
    phone_number;
    email;
    static __fields = [["name", graphql_input_1.UNSET], ["address", graphql_input_1.UNSET], ["phone_number", graphql_input_1.UNSET], ["email", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportCollisionCenterInput, __args); Object.freeze(this); }
}
exports.CollisionReportCollisionCenterInput = CollisionReportCollisionCenterInput;
_runtime_1.py.classType(CollisionReportCollisionCenterInput);
/** Optional towing-company details included in a report. */
class CollisionReportTowingCompanyInput {
    name;
    email;
    phone_number;
    address;
    static __fields = [["name", graphql_input_1.UNSET], ["email", graphql_input_1.UNSET], ["phone_number", graphql_input_1.UNSET], ["address", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportTowingCompanyInput, __args); Object.freeze(this); }
}
exports.CollisionReportTowingCompanyInput = CollisionReportTowingCompanyInput;
_runtime_1.py.classType(CollisionReportTowingCompanyInput);
/** Optional collision telemetry and report time fields. */
class CollisionReportMetadataInput {
    report_date_time;
    collision_date_time;
    odometer;
    speed;
    unit;
    mil_count;
    mil_data;
    latitude;
    longitude;
    static __fields = [["report_date_time", graphql_input_1.UNSET], ["collision_date_time", graphql_input_1.UNSET], ["odometer", graphql_input_1.UNSET], ["speed", graphql_input_1.UNSET], ["unit", graphql_input_1.UNSET], ["mil_count", graphql_input_1.UNSET], ["mil_data", graphql_input_1.UNSET], ["latitude", graphql_input_1.UNSET], ["longitude", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportMetadataInput, __args); Object.freeze(this); }
}
exports.CollisionReportMetadataInput = CollisionReportMetadataInput;
_runtime_1.py.classType(CollisionReportMetadataInput);
/** Complete input for creating a collision report. */
class CreateCollisionReportInput {
    vin;
    vehicle;
    user;
    insurance_company_name;
    collision_center;
    towing_company;
    collision_metadata;
    static __fields = [["vin", _runtime_1.py.MISSING], ["vehicle", _runtime_1.py.MISSING], ["user", graphql_input_1.UNSET], ["insurance_company_name", graphql_input_1.UNSET], ["collision_center", graphql_input_1.UNSET], ["towing_company", graphql_input_1.UNSET], ["collision_metadata", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CreateCollisionReportInput, __args); Object.freeze(this); }
}
exports.CreateCollisionReportInput = CreateCollisionReportInput;
_runtime_1.py.classType(CreateCollisionReportInput);
/** Base64 attachment and optional filename for a report photo. */
class CollisionReportPhotoInput {
    attachment;
    filename;
    static __fields = [["attachment", _runtime_1.py.MISSING], ["filename", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CollisionReportPhotoInput, __args); Object.freeze(this); }
}
exports.CollisionReportPhotoInput = CollisionReportPhotoInput;
_runtime_1.py.classType(CollisionReportPhotoInput);
/** Serialize collision-center discovery variables. */
function collision_center_variables(...__args) {
    let address, coordinates;
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize collision-center discovery variables. */
    coordinates = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "coordinates"), common_inputs_1.CoordinateInput], null)) ? _runtime_1.py.call(common_inputs_1.coordinate_input, [_runtime_1.py.attr(config, "coordinates")], null) : _runtime_1.py.attr(config, "coordinates"));
    address = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "address"), CollisionCenterAddressInput], null)) ? _runtime_1.py.call(collision_center_address_input, [_runtime_1.py.attr(config, "address")], null) : _runtime_1.py.attr(config, "address"));
    return Object.assign({}, { ["input"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": _runtime_1.py.attr(config, "vin") }, { "coordinates": coordinates }, { "address": address }, { "claimId": _runtime_1.py.attr(config, "claim_id") })) });
}
/** Serialize collision-report creation variables. */
function create_collision_report_variables(...__args) {
    let collision_center, collision_metadata, towing_company, user;
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize collision-report creation variables. */
    user = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "user"), CollisionReportUserInput], null)) ? _runtime_1.py.call(collision_report_user_input, [_runtime_1.py.attr(config, "user")], null) : _runtime_1.py.attr(config, "user"));
    collision_center = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "collision_center"), CollisionReportCollisionCenterInput], null)) ? _runtime_1.py.call(collision_report_collision_center_input, [_runtime_1.py.attr(config, "collision_center")], null) : _runtime_1.py.attr(config, "collision_center"));
    towing_company = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "towing_company"), CollisionReportTowingCompanyInput], null)) ? _runtime_1.py.call(collision_report_towing_company_input, [_runtime_1.py.attr(config, "towing_company")], null) : _runtime_1.py.attr(config, "towing_company"));
    collision_metadata = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "collision_metadata"), CollisionReportMetadataInput], null)) ? _runtime_1.py.call(collision_report_metadata_input, [_runtime_1.py.attr(config, "collision_metadata")], null) : _runtime_1.py.attr(config, "collision_metadata"));
    return Object.assign({}, { ["input"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": _runtime_1.py.attr(config, "vin") }, { "user": user }, { "insuranceCompanyName": _runtime_1.py.attr(config, "insurance_company_name") }, { "vehicle": _runtime_1.py.call(collision_report_vehicle_input, [_runtime_1.py.attr(config, "vehicle")], null) }, { "collisionCenter": collision_center }, { "towingCompany": towing_company }, { "collisionMetadata": collision_metadata })) });
}
/** Serialize collision-report photo upload variables. */
function collision_report_photo_variables(...__args) {
    let { "vin": vin, "collision_id": collision_id, "photo": photo, "photo_section": photo_section } = _runtime_1.py.bind(__args, ["vin", "collision_id", "photo", "photo_section"], {}, [], null, null);
    /** Serialize collision-report photo upload variables. */
    return Object.assign({}, { ["input"]: Object.assign({}, { ["vin"]: vin }, { ["collisionId"]: collision_id }, { ["photo"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "filename": _runtime_1.py.attr(photo, "filename") }, { "attachment": _runtime_1.py.attr(photo, "attachment") })) }, { ["photoSection"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [photo_section], null) }) });
}
/** Serialize collision-report PDF generation variables. */
function collision_report_pdf_variables(...__args) {
    let { "collision_id": collision_id } = _runtime_1.py.bind(__args, ["collision_id"], {}, [], null, null);
    /** Serialize collision-report PDF generation variables. */
    return Object.assign({}, { ["input"]: Object.assign({}, { ["collisionId"]: collision_id }) });
}
/** Serialize collision-report photo deletion variables. */
function delete_collision_report_photo_variables(...__args) {
    let { "vin": vin, "collision_id": collision_id, "photo_section": photo_section } = _runtime_1.py.bind(__args, ["vin", "collision_id", "photo_section"], {}, [], null, null);
    /** Serialize collision-report photo deletion variables. */
    return Object.assign({}, { ["input"]: Object.assign({}, { ["vin"]: vin }, { ["collisionId"]: collision_id }, { ["photoSection"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [photo_section], null) }) });
}
/** Translated upstream collision_center_address_input. */
function collision_center_address_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "country": _runtime_1.py.attr(value, "country") }, { "postalCode": _runtime_1.py.attr(value, "postal_code") }));
}
/** Translated upstream collision_report_vehicle_input. */
function collision_report_vehicle_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "make": _runtime_1.py.attr(value, "make") }, { "model": _runtime_1.py.attr(value, "model") }, { "modelYear": _runtime_1.py.attr(value, "model_year") }, { "licensePlate": _runtime_1.py.attr(value, "license_plate") }, { "color": _runtime_1.py.attr(value, "color") }));
}
/** Translated upstream collision_report_user_input. */
function collision_report_user_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "firstName": _runtime_1.py.attr(value, "first_name") }, { "lastName": _runtime_1.py.attr(value, "last_name") }, { "email": _runtime_1.py.attr(value, "email") }, { "phoneNumber": _runtime_1.py.attr(value, "phone_number") }));
}
/** Translated upstream collision_report_collision_center_input. */
function collision_report_collision_center_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "name": _runtime_1.py.attr(value, "name") }, { "address": _runtime_1.py.attr(value, "address") }, { "phoneNumber": _runtime_1.py.attr(value, "phone_number") }, { "email": _runtime_1.py.attr(value, "email") }));
}
/** Translated upstream collision_report_towing_company_input. */
function collision_report_towing_company_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "name": _runtime_1.py.attr(value, "name") }, { "email": _runtime_1.py.attr(value, "email") }, { "phoneNumber": _runtime_1.py.attr(value, "phone_number") }, { "address": _runtime_1.py.attr(value, "address") }));
}
/** Translated upstream collision_report_metadata_input. */
function collision_report_metadata_input(...__args) {
    let collision_date_time, report_date_time, unit;
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    report_date_time = _runtime_1.py.call(_optional_datetime, [_runtime_1.py.attr(value, "report_date_time")], null);
    collision_date_time = _runtime_1.py.call(_optional_datetime, [_runtime_1.py.attr(value, "collision_date_time")], null);
    unit = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(value, "unit"), models_1.DistanceUnit], null)) ? _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(value, "unit")], null) : _runtime_1.py.attr(value, "unit"));
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "reportDateTime": report_date_time }, { "collisionDateTime": collision_date_time }, { "odometer": _runtime_1.py.attr(value, "odometer") }, { "speed": _runtime_1.py.attr(value, "speed") }, { "unit": unit }, { "milCount": _runtime_1.py.attr(value, "mil_count") }, { "milData": _runtime_1.py.attr(value, "mil_data") }, { "latitude": _runtime_1.py.attr(value, "latitude") }, { "longitude": _runtime_1.py.attr(value, "longitude") }));
}
/** Translated upstream _optional_datetime. */
function _optional_datetime(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, datetime], null)) ? _runtime_1.py.call(graphql_input_1.serialize_datetime, [value], null) : value);
}
//# sourceMappingURL=collision_report_inputs.js.map