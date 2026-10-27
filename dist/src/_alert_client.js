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
exports._AlertClientMixin = exports.parse_vehicle_alerts = exports.parse_toggle_reminder_notifications_after_leaving_vehicle = exports.parse_reminder_notifications_after_leaving_vehicle = exports.parse_breach_alerts = exports.parse_alert_request_status = exports.VehicleAlerts = exports.VehicleAlertRequest = exports.VehicleAlertKind = exports.SpeedUnit = exports.ServiceRequestStatus = exports.ReminderNotificationsAfterLeavingVehicle = exports.DistanceUnit = exports.BreachAlerts = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.CoordinateInput = exports.speed_alert_input = exports.optional_valet_radius_input = exports.optional_coordinate_input = exports.curfew_alert_input = exports.boundary_alert_update_input = exports.boundary_alert_input = exports.ValetRadiusInput = exports.SpeedAlertInput = exports.CurfewAlertInput = exports.BoundaryAlertUpdate = exports.BoundaryAlertInput = exports._validate_positive_integer = exports._optional_variables = exports._enum_value = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const asyncio = _runtime_1.py.asyncio;
const math = _runtime_1.py.math;
const assert_never = _runtime_1.py.assert_never;
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const _client_helpers_1 = require("./_client_helpers");
Object.defineProperty(exports, "_enum_value", { enumerable: true, get: function () { return _client_helpers_1._enum_value; } });
Object.defineProperty(exports, "_optional_variables", { enumerable: true, get: function () { return _client_helpers_1._optional_variables; } });
Object.defineProperty(exports, "_validate_positive_integer", { enumerable: true, get: function () { return _client_helpers_1._validate_positive_integer; } });
const alert_inputs_1 = require("./alert_inputs");
Object.defineProperty(exports, "BoundaryAlertInput", { enumerable: true, get: function () { return alert_inputs_1.BoundaryAlertInput; } });
Object.defineProperty(exports, "BoundaryAlertUpdate", { enumerable: true, get: function () { return alert_inputs_1.BoundaryAlertUpdate; } });
Object.defineProperty(exports, "CurfewAlertInput", { enumerable: true, get: function () { return alert_inputs_1.CurfewAlertInput; } });
Object.defineProperty(exports, "SpeedAlertInput", { enumerable: true, get: function () { return alert_inputs_1.SpeedAlertInput; } });
Object.defineProperty(exports, "ValetRadiusInput", { enumerable: true, get: function () { return alert_inputs_1.ValetRadiusInput; } });
Object.defineProperty(exports, "boundary_alert_input", { enumerable: true, get: function () { return alert_inputs_1.boundary_alert_input; } });
Object.defineProperty(exports, "boundary_alert_update_input", { enumerable: true, get: function () { return alert_inputs_1.boundary_alert_update_input; } });
Object.defineProperty(exports, "curfew_alert_input", { enumerable: true, get: function () { return alert_inputs_1.curfew_alert_input; } });
Object.defineProperty(exports, "optional_coordinate_input", { enumerable: true, get: function () { return alert_inputs_1.optional_coordinate_input; } });
Object.defineProperty(exports, "optional_valet_radius_input", { enumerable: true, get: function () { return alert_inputs_1.optional_valet_radius_input; } });
Object.defineProperty(exports, "speed_alert_input", { enumerable: true, get: function () { return alert_inputs_1.speed_alert_input; } });
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "CoordinateInput", { enumerable: true, get: function () { return common_inputs_1.CoordinateInput; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
const models_1 = require("./models");
Object.defineProperty(exports, "BreachAlerts", { enumerable: true, get: function () { return models_1.BreachAlerts; } });
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
Object.defineProperty(exports, "ReminderNotificationsAfterLeavingVehicle", { enumerable: true, get: function () { return models_1.ReminderNotificationsAfterLeavingVehicle; } });
Object.defineProperty(exports, "ServiceRequestStatus", { enumerable: true, get: function () { return models_1.ServiceRequestStatus; } });
Object.defineProperty(exports, "SpeedUnit", { enumerable: true, get: function () { return models_1.SpeedUnit; } });
Object.defineProperty(exports, "VehicleAlertKind", { enumerable: true, get: function () { return models_1.VehicleAlertKind; } });
Object.defineProperty(exports, "VehicleAlertRequest", { enumerable: true, get: function () { return models_1.VehicleAlertRequest; } });
Object.defineProperty(exports, "VehicleAlerts", { enumerable: true, get: function () { return models_1.VehicleAlerts; } });
const parsing_1 = require("./parsing");
Object.defineProperty(exports, "parse_alert_request_status", { enumerable: true, get: function () { return parsing_1.parse_alert_request_status; } });
Object.defineProperty(exports, "parse_breach_alerts", { enumerable: true, get: function () { return parsing_1.parse_breach_alerts; } });
Object.defineProperty(exports, "parse_reminder_notifications_after_leaving_vehicle", { enumerable: true, get: function () { return parsing_1.parse_reminder_notifications_after_leaving_vehicle; } });
Object.defineProperty(exports, "parse_toggle_reminder_notifications_after_leaving_vehicle", { enumerable: true, get: function () { return parsing_1.parse_toggle_reminder_notifications_after_leaving_vehicle; } });
Object.defineProperty(exports, "parse_vehicle_alerts", { enumerable: true, get: function () { return parsing_1.parse_vehicle_alerts; } });
/** Translated upstream _AlertClientMixin. */
class _AlertClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _AlertClientMixin, __args); }
    /** Return all configured vehicle alerts in one cached read. */
    async async_get_vehicle_alerts(...__args) {
        let data;
        let { "vin": vin, "speed_unit": speed_unit, "distance_unit": distance_unit } = _runtime_1.py.bind(__args, ["vin"], { "speed_unit": null, "distance_unit": null }, ["speed_unit", "distance_unit"], null, null);
        /** Return all configured vehicle alerts in one cached read. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["VehicleAlerts", _runtime_1.py.attr(operations, "VEHICLE_ALERTS"), _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "vin": vin }, { "speedUnit": _runtime_1.py.call(_client_helpers_1._enum_value, [speed_unit], null) }, { "distanceUnit": _runtime_1.py.call(_client_helpers_1._enum_value, [distance_unit], null) }))], null));
        return _runtime_1.py.call(parsing_1.parse_vehicle_alerts, [data], null);
    }
    /** Return one page of raw vehicle-alert breach events. */
    async async_get_breach_alerts(...__args) {
        let data;
        let { "vin": vin, "page_number": page_number, "items_per_page": items_per_page } = _runtime_1.py.bind(__args, ["vin"], { "page_number": 1, "items_per_page": 20 }, ["page_number", "items_per_page"], null, null);
        /** Return one page of raw vehicle-alert breach events. */
        _runtime_1.py.call(_client_helpers_1._validate_positive_integer, [page_number, "page_number"], null);
        _runtime_1.py.call(_client_helpers_1._validate_positive_integer, [items_per_page, "items_per_page"], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["BreachAlerts", _runtime_1.py.attr(operations, "BREACH_ALERTS"), Object.assign({}, { ["vin"]: vin }, { ["pageNumber"]: page_number }, { ["itemsPerPage"]: items_per_page })], null));
        return _runtime_1.py.call(parsing_1.parse_breach_alerts, [data], null);
    }
    /** Return the raw status of a vehicle-alert configuration request. */
    async async_get_alert_request_status(...__args) {
        let data, document, operation_name, root_field, status_required;
        let { "vin": vin, "service_request_id": service_request_id, "alert_kind": alert_kind } = _runtime_1.py.bind(__args, ["vin", "service_request_id", "alert_kind"], {}, [], null, null);
        /** Return the raw status of a vehicle-alert configuration request. */
        if (_runtime_1.py.eq(alert_kind, _runtime_1.py.attr(models_1.VehicleAlertKind, "BOUNDARY"))) {
            operation_name = "VehicleBoundaryAlert";
            document = _runtime_1.py.attr(operations, "VEHICLE_BOUNDARY_ALERT");
            root_field = "boundaryAlert";
            status_required = true;
        }
        else if (_runtime_1.py.eq(alert_kind, _runtime_1.py.attr(models_1.VehicleAlertKind, "CURFEW"))) {
            operation_name = "VehicleCurfewAlert";
            document = _runtime_1.py.attr(operations, "VEHICLE_CURFEW_ALERT");
            root_field = "curfewAlert";
            status_required = true;
        }
        else if (_runtime_1.py.eq(alert_kind, _runtime_1.py.attr(models_1.VehicleAlertKind, "SPEED"))) {
            operation_name = "VehicleSpeedAlert";
            document = _runtime_1.py.attr(operations, "VEHICLE_SPEED_ALERT");
            root_field = "speedAlert";
            status_required = true;
        }
        else if (_runtime_1.py.eq(alert_kind, _runtime_1.py.attr(models_1.VehicleAlertKind, "VALET"))) {
            operation_name = "VehicleValetAlert";
            document = _runtime_1.py.attr(operations, "VEHICLE_VALET_ALERT");
            root_field = "valetAlert";
            status_required = false;
        }
        else {
            _runtime_1.py.call(assert_never, [alert_kind], null);
        }
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), [operation_name, document, Object.assign({}, { ["vin"]: vin }, { ["serviceRequestId"]: service_request_id })], null));
        return _runtime_1.py.call(parsing_1.parse_alert_request_status, [data, root_field], Object.assign({}, { "status_required": status_required }));
    }
    /** Poll a vehicle-alert change until Nissan reports success or failure. */
    async async_wait_for_alert_request(...__args) {
        let status;
        let { "vin": vin, "request": request, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds } = _runtime_1.py.bind(__args, ["vin", "request"], { "poll_interval_seconds": 1.0, "timeout_seconds": 210.0 }, ["poll_interval_seconds", "timeout_seconds"], null, null);
        /** Poll a vehicle-alert change until Nissan reports success or failure. */
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
        }
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["timeout_seconds must be a positive finite number"], null);
        }
        return await _runtime_1.py.timeout(timeout_seconds, async () => {
            while (_runtime_1.py.truth(true)) {
                status = (await _runtime_1.py.call(_runtime_1.py.attr(this, "async_get_alert_request_status"), [vin, _runtime_1.py.attr(request, "id"), _runtime_1.py.attr(request, "kind")], null));
                if (_runtime_1.py.truth((_runtime_1.py.contains(new Set([_runtime_1.py.attr(_runtime_1.py.attr(models_1.ServiceRequestStatus, "SUCCESS"), "value"), _runtime_1.py.attr(_runtime_1.py.attr(models_1.ServiceRequestStatus, "FAILED"), "value")]), status)))) {
                    return status;
                }
                (await _runtime_1.py.call(_runtime_1.py.attr(asyncio, "sleep"), [poll_interval_seconds], null));
            }
        });
    }
    /** Create a vehicle entry or exit boundary alert. */
    async async_create_boundary_alert(...__args) {
        let { "vin": vin, "alert": alert } = _runtime_1.py.bind(__args, ["vin", "alert"], {}, [], null, null);
        /** Create a vehicle entry or exit boundary alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["CreateBoundaryAlert", _runtime_1.py.attr(operations, "CREATE_BOUNDARY_ALERT"), "createBoundaryAlert", Object.assign({}, { ["vin"]: vin }, { ["alert"]: _runtime_1.py.call(alert_inputs_1.boundary_alert_input, [alert], null) }), _runtime_1.py.attr(models_1.VehicleAlertKind, "BOUNDARY")], null));
    }
    /** Patch an existing boundary alert. */
    async async_update_boundary_alert(...__args) {
        let { "vin": vin, "service_request_id": service_request_id, "update": update } = _runtime_1.py.bind(__args, ["vin", "service_request_id", "update"], {}, [], null, null);
        /** Patch an existing boundary alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["SetBoundaryAlert", _runtime_1.py.attr(operations, "UPDATE_BOUNDARY_ALERT"), "setBoundaryAlert", Object.assign({}, { ["vin"]: vin }, { ["alert"]: _runtime_1.py.call(alert_inputs_1.boundary_alert_update_input, [service_request_id, update], null) }), _runtime_1.py.attr(models_1.VehicleAlertKind, "BOUNDARY")], null));
    }
    /** Delete an existing boundary alert. */
    async async_delete_boundary_alert(...__args) {
        let { "vin": vin, "service_request_id": service_request_id } = _runtime_1.py.bind(__args, ["vin", "service_request_id"], {}, [], null, null);
        /** Delete an existing boundary alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["CancelBoundaryAlert", _runtime_1.py.attr(operations, "DELETE_BOUNDARY_ALERT"), "cancelBoundaryAlert", Object.assign({}, { ["vin"]: vin }, { ["serviceRequestId"]: service_request_id }), _runtime_1.py.attr(models_1.VehicleAlertKind, "BOUNDARY")], null));
    }
    /** Enable or disable an existing boundary alert. */
    async async_toggle_boundary_alert(...__args) {
        let { "vin": vin, "service_request_id": service_request_id, "enabled": enabled } = _runtime_1.py.bind(__args, ["vin", "service_request_id"], {}, ["enabled"], null, null);
        /** Enable or disable an existing boundary alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["ToggleBoundaryAlert", _runtime_1.py.attr(operations, "TOGGLE_BOUNDARY_ALERT"), "toggleBoundaryAlert", Object.assign({}, { ["vin"]: vin }, { ["alert"]: Object.assign({}, { ["serviceRequestId"]: service_request_id }, { ["enable"]: enabled }) }), _runtime_1.py.attr(models_1.VehicleAlertKind, "BOUNDARY")], null));
    }
    /** Create a recurring vehicle curfew alert. */
    async async_create_curfew_alert(...__args) {
        let { "vin": vin, "alert": alert } = _runtime_1.py.bind(__args, ["vin", "alert"], {}, [], null, null);
        /** Create a recurring vehicle curfew alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["CreateCurfewAlert", _runtime_1.py.attr(operations, "CREATE_CURFEW_ALERT"), "createCurfewAlert", Object.assign({}, { ["vin"]: vin }, { ["alert"]: _runtime_1.py.call(alert_inputs_1.curfew_alert_input, [alert], null) }), _runtime_1.py.attr(models_1.VehicleAlertKind, "CURFEW")], null));
    }
    /** Replace an existing curfew alert. */
    async async_update_curfew_alert(...__args) {
        let { "vin": vin, "service_request_id": service_request_id, "alert": alert } = _runtime_1.py.bind(__args, ["vin", "service_request_id", "alert"], {}, [], null, null);
        /** Replace an existing curfew alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["SetCurfewAlert", _runtime_1.py.attr(operations, "UPDATE_CURFEW_ALERT"), "setCurfewAlert", Object.assign({}, { ["vin"]: vin }, { ["serviceRequestId"]: service_request_id }, { ["alert"]: _runtime_1.py.call(alert_inputs_1.curfew_alert_input, [alert], null) }), _runtime_1.py.attr(models_1.VehicleAlertKind, "CURFEW")], null));
    }
    /** Delete an existing curfew alert. */
    async async_delete_curfew_alert(...__args) {
        let { "vin": vin, "service_request_id": service_request_id } = _runtime_1.py.bind(__args, ["vin", "service_request_id"], {}, [], null, null);
        /** Delete an existing curfew alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["CancelCurfewAlert", _runtime_1.py.attr(operations, "DELETE_CURFEW_ALERT"), "cancelCurfewAlert", Object.assign({}, { ["vin"]: vin }, { ["serviceRequestId"]: service_request_id }), _runtime_1.py.attr(models_1.VehicleAlertKind, "CURFEW")], null));
    }
    /** Enable or disable an existing curfew alert. */
    async async_toggle_curfew_alert(...__args) {
        let { "vin": vin, "service_request_id": service_request_id, "enabled": enabled } = _runtime_1.py.bind(__args, ["vin", "service_request_id"], {}, ["enabled"], null, null);
        /** Enable or disable an existing curfew alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["ToggleCurfewAlert", _runtime_1.py.attr(operations, "TOGGLE_CURFEW_ALERT"), "toggleCurfewAlert", Object.assign({}, { ["vin"]: vin }, { ["alert"]: Object.assign({}, { ["serviceRequestId"]: service_request_id }, { ["enable"]: enabled }) }), _runtime_1.py.attr(models_1.VehicleAlertKind, "CURFEW")], null));
    }
    /** Create a vehicle speed alert. */
    async async_create_speed_alert(...__args) {
        let { "vin": vin, "alert": alert } = _runtime_1.py.bind(__args, ["vin", "alert"], {}, [], null, null);
        /** Create a vehicle speed alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["CreateSpeedAlert", _runtime_1.py.attr(operations, "CREATE_SPEED_ALERT"), "createSpeedAlert", Object.assign({}, { ["vin"]: vin }, { ["alert"]: _runtime_1.py.call(alert_inputs_1.speed_alert_input, [alert], null) }), _runtime_1.py.attr(models_1.VehicleAlertKind, "SPEED")], null));
    }
    /** Replace an existing speed alert. */
    async async_update_speed_alert(...__args) {
        let speed_update;
        let { "vin": vin, "service_request_id": service_request_id, "alert": alert } = _runtime_1.py.bind(__args, ["vin", "service_request_id", "alert"], {}, [], null, null);
        /** Replace an existing speed alert. */
        speed_update = Object.assign({}, { ["serviceRequestId"]: service_request_id }, _runtime_1.py.call(alert_inputs_1.speed_alert_input, [alert], null));
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["SetSpeedAlert", _runtime_1.py.attr(operations, "UPDATE_SPEED_ALERT"), "setSpeedAlert", Object.assign({}, { ["vin"]: vin }, { ["alert"]: speed_update }), _runtime_1.py.attr(models_1.VehicleAlertKind, "SPEED")], null));
    }
    /** Delete an existing speed alert. */
    async async_delete_speed_alert(...__args) {
        let { "vin": vin, "service_request_id": service_request_id } = _runtime_1.py.bind(__args, ["vin", "service_request_id"], {}, [], null, null);
        /** Delete an existing speed alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["CancelSpeedAlert", _runtime_1.py.attr(operations, "DELETE_SPEED_ALERT"), "cancelSpeedAlert", Object.assign({}, { ["vin"]: vin }, { ["serviceRequestId"]: service_request_id }), _runtime_1.py.attr(models_1.VehicleAlertKind, "SPEED")], null));
    }
    /** Enable or disable an existing speed alert. */
    async async_toggle_speed_alert(...__args) {
        let { "vin": vin, "service_request_id": service_request_id, "enabled": enabled } = _runtime_1.py.bind(__args, ["vin", "service_request_id"], {}, ["enabled"], null, null);
        /** Enable or disable an existing speed alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["ToggleSpeedAlert", _runtime_1.py.attr(operations, "TOGGLE_SPEED_ALERT"), "toggleSpeedAlert", Object.assign({}, { ["vin"]: vin }, { ["alert"]: Object.assign({}, { ["serviceRequestId"]: service_request_id }, { ["enable"]: enabled }) }), _runtime_1.py.attr(models_1.VehicleAlertKind, "SPEED")], null));
    }
    /** Activate a valet boundary alert around an optional location. */
    async async_activate_valet_alert(...__args) {
        let variables;
        let { "vin": vin, "radius": radius, "location": location } = _runtime_1.py.bind(__args, ["vin"], { "radius": graphql_input_1.UNSET, "location": graphql_input_1.UNSET }, ["radius", "location"], null, null);
        /** Activate a valet boundary alert around an optional location. */
        variables = _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "radiusWithUnit": _runtime_1.py.call(alert_inputs_1.optional_valet_radius_input, [radius], null) }, { "location": _runtime_1.py.call(alert_inputs_1.optional_coordinate_input, [location], null) }));
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["ActivateValetAlert", _runtime_1.py.attr(operations, "ACTIVATE_VALET_ALERT"), "activateValetAlert", variables, _runtime_1.py.attr(models_1.VehicleAlertKind, "VALET")], null));
    }
    /** Deactivate the current valet alert. */
    async async_deactivate_valet_alert(...__args) {
        let { "vin": vin, "service_request_id": service_request_id } = _runtime_1.py.bind(__args, ["vin", "service_request_id"], {}, [], null, null);
        /** Deactivate the current valet alert. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_vehicle_alert_request"), ["DeactivateValetAlert", _runtime_1.py.attr(operations, "DEACTIVATE_VALET_ALERT"), "deactivateValetAlert", Object.assign({}, { ["vin"]: vin }, { ["serviceRequestId"]: service_request_id }), _runtime_1.py.attr(models_1.VehicleAlertKind, "VALET")], null));
    }
    /** Return after-leaving reminder flags when supported by the vehicle. */
    async async_get_reminder_notifications_after_leaving_vehicle(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return after-leaving reminder flags when supported by the vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ReminderNotificationsAfterLeavingVehicle", _runtime_1.py.attr(operations, "REMINDER_NOTIFICATIONS_AFTER_LEAVING_VEHICLE"), Object.assign({}, { ["vin"]: vin })], null));
        return _runtime_1.py.call(parsing_1.parse_reminder_notifications_after_leaving_vehicle, [data], null);
    }
    /** Patch one or more after-leaving reminder flags. */
    async async_toggle_reminder_notifications_after_leaving_vehicle(...__args) {
        let data, reminder_notifications;
        let { "vin": vin, "enable_lock": enable_lock, "enable_door": enable_door, "enable_trunk": enable_trunk, "enable_sunroof": enable_sunroof, "enable_window": enable_window } = _runtime_1.py.bind(__args, ["vin"], { "enable_lock": null, "enable_door": null, "enable_trunk": null, "enable_sunroof": null, "enable_window": null }, ["enable_lock", "enable_door", "enable_trunk", "enable_sunroof", "enable_window"], null, null);
        /** Patch one or more after-leaving reminder flags. */
        reminder_notifications = _runtime_1.py.call(_client_helpers_1._optional_variables, [], Object.assign({}, { "enableLock": enable_lock }, { "enableDoor": enable_door }, { "enableTrunk": enable_trunk }, { "enableSunroof": enable_sunroof }, { "enableWindow": enable_window }));
        if (_runtime_1.py.truth(!_runtime_1.py.truth(reminder_notifications))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["At least one reminder notification setting is required"], null);
        }
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ToggleReminderNotificationsAfterLeavingVehicle", _runtime_1.py.attr(operations, "TOGGLE_REMINDER_NOTIFICATIONS_AFTER_LEAVING_VEHICLE"), Object.assign({}, { ["vin"]: vin }, { ["reminderNotifications"]: reminder_notifications })], null));
        return _runtime_1.py.call(parsing_1.parse_toggle_reminder_notifications_after_leaving_vehicle, [data], null);
    }
}
exports._AlertClientMixin = _AlertClientMixin;
_runtime_1.py.classType(_AlertClientMixin);
//# sourceMappingURL=_alert_client.js.map