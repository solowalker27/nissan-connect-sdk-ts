"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports._IncidentClientMixin = exports.parse_vehicle_insurance = exports.parse_update_vehicle_insurance = exports.parse_insurers = exports.parse_add_vehicle_insurance = exports.VehicleInsurer = exports.VehicleInsurance = exports.vehicle_insurance_variables = exports.VehicleInsuranceInput = exports.parse_upload_collision_report_photo = exports.parse_delete_collision_report_photo = exports.parse_create_collision_report_pdf = exports.parse_create_collision_report = exports.parse_collision_centers = exports.PhotoSection = exports.CollisionCenter = exports.delete_collision_report_photo_variables = exports.create_collision_report_variables = exports.collision_report_photo_variables = exports.collision_report_pdf_variables = exports.collision_center_variables = exports.CreateCollisionReportInput = exports.CollisionReportPhotoInput = exports.CollisionCenterSearchInput = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const collision_report_inputs_1 = require("./collision_report_inputs");
Object.defineProperty(exports, "CollisionCenterSearchInput", { enumerable: true, get: function () { return collision_report_inputs_1.CollisionCenterSearchInput; } });
Object.defineProperty(exports, "CollisionReportPhotoInput", { enumerable: true, get: function () { return collision_report_inputs_1.CollisionReportPhotoInput; } });
Object.defineProperty(exports, "CreateCollisionReportInput", { enumerable: true, get: function () { return collision_report_inputs_1.CreateCollisionReportInput; } });
Object.defineProperty(exports, "collision_center_variables", { enumerable: true, get: function () { return collision_report_inputs_1.collision_center_variables; } });
Object.defineProperty(exports, "collision_report_pdf_variables", { enumerable: true, get: function () { return collision_report_inputs_1.collision_report_pdf_variables; } });
Object.defineProperty(exports, "collision_report_photo_variables", { enumerable: true, get: function () { return collision_report_inputs_1.collision_report_photo_variables; } });
Object.defineProperty(exports, "create_collision_report_variables", { enumerable: true, get: function () { return collision_report_inputs_1.create_collision_report_variables; } });
Object.defineProperty(exports, "delete_collision_report_photo_variables", { enumerable: true, get: function () { return collision_report_inputs_1.delete_collision_report_photo_variables; } });
const collision_report_models_1 = require("./collision_report_models");
Object.defineProperty(exports, "CollisionCenter", { enumerable: true, get: function () { return collision_report_models_1.CollisionCenter; } });
Object.defineProperty(exports, "PhotoSection", { enumerable: true, get: function () { return collision_report_models_1.PhotoSection; } });
const collision_report_parsing_1 = require("./collision_report_parsing");
Object.defineProperty(exports, "parse_collision_centers", { enumerable: true, get: function () { return collision_report_parsing_1.parse_collision_centers; } });
Object.defineProperty(exports, "parse_create_collision_report", { enumerable: true, get: function () { return collision_report_parsing_1.parse_create_collision_report; } });
Object.defineProperty(exports, "parse_create_collision_report_pdf", { enumerable: true, get: function () { return collision_report_parsing_1.parse_create_collision_report_pdf; } });
Object.defineProperty(exports, "parse_delete_collision_report_photo", { enumerable: true, get: function () { return collision_report_parsing_1.parse_delete_collision_report_photo; } });
Object.defineProperty(exports, "parse_upload_collision_report_photo", { enumerable: true, get: function () { return collision_report_parsing_1.parse_upload_collision_report_photo; } });
const insurance_inputs_1 = require("./insurance_inputs");
Object.defineProperty(exports, "VehicleInsuranceInput", { enumerable: true, get: function () { return insurance_inputs_1.VehicleInsuranceInput; } });
Object.defineProperty(exports, "vehicle_insurance_variables", { enumerable: true, get: function () { return insurance_inputs_1.vehicle_insurance_variables; } });
const insurance_models_1 = require("./insurance_models");
Object.defineProperty(exports, "VehicleInsurance", { enumerable: true, get: function () { return insurance_models_1.VehicleInsurance; } });
Object.defineProperty(exports, "VehicleInsurer", { enumerable: true, get: function () { return insurance_models_1.VehicleInsurer; } });
const insurance_parsing_1 = require("./insurance_parsing");
Object.defineProperty(exports, "parse_add_vehicle_insurance", { enumerable: true, get: function () { return insurance_parsing_1.parse_add_vehicle_insurance; } });
Object.defineProperty(exports, "parse_insurers", { enumerable: true, get: function () { return insurance_parsing_1.parse_insurers; } });
Object.defineProperty(exports, "parse_update_vehicle_insurance", { enumerable: true, get: function () { return insurance_parsing_1.parse_update_vehicle_insurance; } });
Object.defineProperty(exports, "parse_vehicle_insurance", { enumerable: true, get: function () { return insurance_parsing_1.parse_vehicle_insurance; } });
/** Translated upstream _IncidentClientMixin. */
class _IncidentClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _IncidentClientMixin, __args); }
    /** Return the insurer catalog available to the signed-in account. */
    async async_get_insurers(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return the insurer catalog available to the signed-in account. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["Insurers", _runtime_1.py.attr(operations, "INSURERS"), {}], null));
        return _runtime_1.py.call(insurance_parsing_1.parse_insurers, [data], null);
    }
    /** Return the insurance policy attached to a vehicle. */
    async async_get_vehicle_insurance(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return the insurance policy attached to a vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GetVehicleInsurance", _runtime_1.py.attr(operations, "GET_VEHICLE_INSURANCE"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(insurance_parsing_1.parse_vehicle_insurance, [data], null);
    }
    /** Add insurance details to a vehicle. */
    async async_add_vehicle_insurance(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Add insurance details to a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["AddVehicleInsurance", _runtime_1.py.attr(operations, "ADD_VEHICLE_INSURANCE"), _runtime_1.py.call(insurance_inputs_1.vehicle_insurance_variables, [config], null)], null));
        return _runtime_1.py.call(insurance_parsing_1.parse_add_vehicle_insurance, [data], null);
    }
    /** Replace insurance details for a vehicle. */
    async async_update_vehicle_insurance(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Replace insurance details for a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateVehicleInsurance", _runtime_1.py.attr(operations, "UPDATE_VEHICLE_INSURANCE"), _runtime_1.py.call(insurance_inputs_1.vehicle_insurance_variables, [config], null)], null));
        return _runtime_1.py.call(insurance_parsing_1.parse_update_vehicle_insurance, [data], null);
    }
    /** Return collision centers matching vehicle and location filters. */
    async async_get_collision_centers(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Return collision centers matching vehicle and location filters. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CollisionCenters", _runtime_1.py.attr(operations, "COLLISION_CENTERS"), _runtime_1.py.call(collision_report_inputs_1.collision_center_variables, [config], null)], null));
        return _runtime_1.py.call(collision_report_parsing_1.parse_collision_centers, [data], null);
    }
    /** Create a collision report for a vehicle. */
    async async_create_collision_report(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Create a collision report for a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreateCollisionReport", _runtime_1.py.attr(operations, "CREATE_COLLISION_REPORT"), _runtime_1.py.call(collision_report_inputs_1.create_collision_report_variables, [config], null)], null));
        return _runtime_1.py.call(collision_report_parsing_1.parse_create_collision_report, [data], null);
    }
    /** Generate a PDF URL for a collision report. */
    async async_create_collision_report_pdf(...__args) {
        let data;
        let { "collision_id": collision_id } = _runtime_1.py.bind(__args, ["collision_id"], {}, [], null, null);
        /** Generate a PDF URL for a collision report. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreateCollisionReportPDF", _runtime_1.py.attr(operations, "CREATE_COLLISION_REPORT_PDF"), _runtime_1.py.call(collision_report_inputs_1.collision_report_pdf_variables, [collision_id], null)], null));
        return _runtime_1.py.call(collision_report_parsing_1.parse_create_collision_report_pdf, [data], null);
    }
    /** Delete one photo slot from a collision report. */
    async async_delete_photo_for_collision_report(...__args) {
        let data;
        let { "vin": vin, "collision_id": collision_id, "photo_section": photo_section } = _runtime_1.py.bind(__args, ["vin", "collision_id", "photo_section"], {}, [], null, null);
        /** Delete one photo slot from a collision report. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DeletePhotoForCollisionReport", _runtime_1.py.attr(operations, "DELETE_PHOTO_FOR_COLLISION_REPORT"), _runtime_1.py.call(collision_report_inputs_1.delete_collision_report_photo_variables, [vin, collision_id, photo_section], null)], null));
        return _runtime_1.py.call(collision_report_parsing_1.parse_delete_collision_report_photo, [data], null);
    }
    /** Upload a Base64 attachment to one collision-report photo slot. */
    async async_upload_photo_for_collision_report(...__args) {
        let data;
        let { "vin": vin, "collision_id": collision_id, "photo": photo, "photo_section": photo_section } = _runtime_1.py.bind(__args, ["vin", "collision_id", "photo", "photo_section"], {}, [], null, null);
        /** Upload a Base64 attachment to one collision-report photo slot. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UploadPhotoForCollisionReport", _runtime_1.py.attr(operations, "UPLOAD_PHOTO_FOR_COLLISION_REPORT"), _runtime_1.py.call(collision_report_inputs_1.collision_report_photo_variables, [vin, collision_id, photo, photo_section], null)], null));
        return _runtime_1.py.call(collision_report_parsing_1.parse_upload_collision_report_photo, [data], null);
    }
}
exports._IncidentClientMixin = _IncidentClientMixin;
_runtime_1.py.classType(_IncidentClientMixin);
//# sourceMappingURL=_incident_client.js.map