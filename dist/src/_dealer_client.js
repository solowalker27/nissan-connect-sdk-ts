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
exports._DealerClientMixin = exports.UnsetType = exports.UNSET = exports.parse_update_vehicle_preferred_dealer = exports.parse_update_service_appointment = exports.parse_transportation_options = exports.parse_service_operations_by_mileage = exports.parse_service_operations = exports.parse_service_categories = exports.parse_service_appointments = exports.parse_service_appointment_time_slots = exports.parse_service_advisors = exports.parse_maintenance_visits = exports.parse_dealers = exports.parse_dealer_deals_and_images = exports.parse_dealer = exports.parse_create_service_appointment = exports.parse_cancel_service_appointment = exports.parse_all_dealers = exports.ServiceTransportationOption = exports.ServiceOperationsAtInterval = exports.ServiceCategory = exports.ServiceAppointmentTimeSlot = exports.ServiceAppointment = exports.ServiceAdvisor = exports.MaintenanceVisits = exports.DealerSummary = exports.DealerServiceOperation = exports.DealerDealsAndImages = exports.Dealer = exports.CancelServiceAppointmentResult = exports.update_service_appointment_variables = exports.service_time_slots_variables = exports.service_appointments_variables = exports.service_appointment_variables = exports.service_advisors_variables = exports.maintenance_visits_variables = exports.dealers_by_search_variables = exports.cancel_service_appointment_variables = exports.all_dealers_variables = exports.ServiceLocationType = exports.ServiceCode = exports.ServiceAppointmentInput = exports.MaintenanceMileageInput = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const datetime = _runtime_1.py.datetime;
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const dealer_inputs_1 = require("./dealer_inputs");
Object.defineProperty(exports, "MaintenanceMileageInput", { enumerable: true, get: function () { return dealer_inputs_1.MaintenanceMileageInput; } });
Object.defineProperty(exports, "ServiceAppointmentInput", { enumerable: true, get: function () { return dealer_inputs_1.ServiceAppointmentInput; } });
Object.defineProperty(exports, "ServiceCode", { enumerable: true, get: function () { return dealer_inputs_1.ServiceCode; } });
Object.defineProperty(exports, "ServiceLocationType", { enumerable: true, get: function () { return dealer_inputs_1.ServiceLocationType; } });
Object.defineProperty(exports, "all_dealers_variables", { enumerable: true, get: function () { return dealer_inputs_1.all_dealers_variables; } });
Object.defineProperty(exports, "cancel_service_appointment_variables", { enumerable: true, get: function () { return dealer_inputs_1.cancel_service_appointment_variables; } });
Object.defineProperty(exports, "dealers_by_search_variables", { enumerable: true, get: function () { return dealer_inputs_1.dealers_by_search_variables; } });
Object.defineProperty(exports, "maintenance_visits_variables", { enumerable: true, get: function () { return dealer_inputs_1.maintenance_visits_variables; } });
Object.defineProperty(exports, "service_advisors_variables", { enumerable: true, get: function () { return dealer_inputs_1.service_advisors_variables; } });
Object.defineProperty(exports, "service_appointment_variables", { enumerable: true, get: function () { return dealer_inputs_1.service_appointment_variables; } });
Object.defineProperty(exports, "service_appointments_variables", { enumerable: true, get: function () { return dealer_inputs_1.service_appointments_variables; } });
Object.defineProperty(exports, "service_time_slots_variables", { enumerable: true, get: function () { return dealer_inputs_1.service_time_slots_variables; } });
Object.defineProperty(exports, "update_service_appointment_variables", { enumerable: true, get: function () { return dealer_inputs_1.update_service_appointment_variables; } });
const dealer_models_1 = require("./dealer_models");
Object.defineProperty(exports, "CancelServiceAppointmentResult", { enumerable: true, get: function () { return dealer_models_1.CancelServiceAppointmentResult; } });
Object.defineProperty(exports, "Dealer", { enumerable: true, get: function () { return dealer_models_1.Dealer; } });
Object.defineProperty(exports, "DealerDealsAndImages", { enumerable: true, get: function () { return dealer_models_1.DealerDealsAndImages; } });
Object.defineProperty(exports, "DealerServiceOperation", { enumerable: true, get: function () { return dealer_models_1.DealerServiceOperation; } });
Object.defineProperty(exports, "DealerSummary", { enumerable: true, get: function () { return dealer_models_1.DealerSummary; } });
Object.defineProperty(exports, "MaintenanceVisits", { enumerable: true, get: function () { return dealer_models_1.MaintenanceVisits; } });
Object.defineProperty(exports, "ServiceAdvisor", { enumerable: true, get: function () { return dealer_models_1.ServiceAdvisor; } });
Object.defineProperty(exports, "ServiceAppointment", { enumerable: true, get: function () { return dealer_models_1.ServiceAppointment; } });
Object.defineProperty(exports, "ServiceAppointmentTimeSlot", { enumerable: true, get: function () { return dealer_models_1.ServiceAppointmentTimeSlot; } });
Object.defineProperty(exports, "ServiceCategory", { enumerable: true, get: function () { return dealer_models_1.ServiceCategory; } });
Object.defineProperty(exports, "ServiceOperationsAtInterval", { enumerable: true, get: function () { return dealer_models_1.ServiceOperationsAtInterval; } });
Object.defineProperty(exports, "ServiceTransportationOption", { enumerable: true, get: function () { return dealer_models_1.ServiceTransportationOption; } });
const dealer_parsing_1 = require("./dealer_parsing");
Object.defineProperty(exports, "parse_all_dealers", { enumerable: true, get: function () { return dealer_parsing_1.parse_all_dealers; } });
Object.defineProperty(exports, "parse_cancel_service_appointment", { enumerable: true, get: function () { return dealer_parsing_1.parse_cancel_service_appointment; } });
Object.defineProperty(exports, "parse_create_service_appointment", { enumerable: true, get: function () { return dealer_parsing_1.parse_create_service_appointment; } });
Object.defineProperty(exports, "parse_dealer", { enumerable: true, get: function () { return dealer_parsing_1.parse_dealer; } });
Object.defineProperty(exports, "parse_dealer_deals_and_images", { enumerable: true, get: function () { return dealer_parsing_1.parse_dealer_deals_and_images; } });
Object.defineProperty(exports, "parse_dealers", { enumerable: true, get: function () { return dealer_parsing_1.parse_dealers; } });
Object.defineProperty(exports, "parse_maintenance_visits", { enumerable: true, get: function () { return dealer_parsing_1.parse_maintenance_visits; } });
Object.defineProperty(exports, "parse_service_advisors", { enumerable: true, get: function () { return dealer_parsing_1.parse_service_advisors; } });
Object.defineProperty(exports, "parse_service_appointment_time_slots", { enumerable: true, get: function () { return dealer_parsing_1.parse_service_appointment_time_slots; } });
Object.defineProperty(exports, "parse_service_appointments", { enumerable: true, get: function () { return dealer_parsing_1.parse_service_appointments; } });
Object.defineProperty(exports, "parse_service_categories", { enumerable: true, get: function () { return dealer_parsing_1.parse_service_categories; } });
Object.defineProperty(exports, "parse_service_operations", { enumerable: true, get: function () { return dealer_parsing_1.parse_service_operations; } });
Object.defineProperty(exports, "parse_service_operations_by_mileage", { enumerable: true, get: function () { return dealer_parsing_1.parse_service_operations_by_mileage; } });
Object.defineProperty(exports, "parse_transportation_options", { enumerable: true, get: function () { return dealer_parsing_1.parse_transportation_options; } });
Object.defineProperty(exports, "parse_update_service_appointment", { enumerable: true, get: function () { return dealer_parsing_1.parse_update_service_appointment; } });
Object.defineProperty(exports, "parse_update_vehicle_preferred_dealer", { enumerable: true, get: function () { return dealer_parsing_1.parse_update_vehicle_preferred_dealer; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
/** Translated upstream _DealerClientMixin. */
class _DealerClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _DealerClientMixin, __args); }
    /** Return the compact dealer list with optional vehicle and page filters. */
    async async_get_all_dealers(...__args) {
        let data;
        let { "vin": vin, "page_size": page_size } = _runtime_1.py.bind(__args, [], { "vin": graphql_input_1.UNSET, "page_size": graphql_input_1.UNSET }, ["vin", "page_size"], null, null);
        /** Return the compact dealer list with optional vehicle and page filters. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["AllDealers", _runtime_1.py.attr(operations, "ALL_DEALERS"), _runtime_1.py.call(dealer_inputs_1.all_dealers_variables, [vin, page_size], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_all_dealers, [data], null);
    }
    /** Return dealers matching a postal code. */
    async async_get_dealers(...__args) {
        let data;
        let { "postal_code": postal_code } = _runtime_1.py.bind(__args, ["postal_code"], {}, [], null, null);
        /** Return dealers matching a postal code. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["Dealers", _runtime_1.py.attr(operations, "DEALERS"), Object.assign({}, { ["zip"]: postal_code })], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_dealers, [data], null);
    }
    /** Search dealers with independently optional vehicle and location filters. */
    async async_search_dealers(...__args) {
        let data;
        let { "vin": vin, "service_code": service_code, "radius": radius, "latitude": latitude, "longitude": longitude } = _runtime_1.py.bind(__args, [], { "vin": graphql_input_1.UNSET, "service_code": graphql_input_1.UNSET, "radius": graphql_input_1.UNSET, "latitude": graphql_input_1.UNSET, "longitude": graphql_input_1.UNSET }, ["vin", "service_code", "radius", "latitude", "longitude"], null, null);
        /** Search dealers with independently optional vehicle and location filters. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DealersBySearch", _runtime_1.py.attr(operations, "DEALERS_BY_SEARCH"), _runtime_1.py.call(dealer_inputs_1.dealers_by_search_variables, [], Object.assign({}, { "vin": vin }, { "service_code": service_code }, { "radius": radius }, { "latitude": latitude }, { "longitude": longitude }))], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_dealers, [data], null);
    }
    /** Return coupons and coupon images for a dealer. */
    async async_get_dealer_deals_and_images(...__args) {
        let data;
        let { "dealer_id": dealer_id } = _runtime_1.py.bind(__args, ["dealer_id"], {}, [], null, null);
        /** Return coupons and coupon images for a dealer. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DealsAndImagesByDealerId", _runtime_1.py.attr(operations, "DEALS_AND_IMAGES_BY_DEALER_ID"), Object.assign({}, { ["dealerId"]: dealer_id })], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_dealer_deals_and_images, [data], null);
    }
    /** Return one dealer by identifier. */
    async async_get_dealer(...__args) {
        let data;
        let { "dealer_id": dealer_id } = _runtime_1.py.bind(__args, ["dealer_id"], {}, [], null, null);
        /** Return one dealer by identifier. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GetDealerById", _runtime_1.py.attr(operations, "GET_DEALER_BY_ID"), Object.assign({}, { ["dealerId"]: dealer_id })], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_dealer, [data], null);
    }
    /** Generate the requested past and future maintenance visits. */
    async async_generate_all_maintenance_visits(...__args) {
        let data;
        let { "vin": vin, "mileage": mileage, "severity_id": severity_id, "past_visits": past_visits, "future_visits": future_visits } = _runtime_1.py.bind(__args, ["vin", "mileage", "severity_id", "past_visits", "future_visits"], {}, [], null, null);
        /** Generate the requested past and future maintenance visits. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GenerateAllVisits", _runtime_1.py.attr(operations, "GENERATE_ALL_VISITS"), _runtime_1.py.call(dealer_inputs_1.maintenance_visits_variables, [vin, mileage, severity_id, past_visits, future_visits], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_maintenance_visits, [data], null);
    }
    /** Generate the next maintenance visit with a severity identifier. */
    async async_generate_next_maintenance_visit(...__args) {
        let data;
        let { "vin": vin, "mileage": mileage, "severity_id": severity_id, "past_visits": past_visits, "future_visits": future_visits } = _runtime_1.py.bind(__args, ["vin", "mileage", "severity_id", "past_visits", "future_visits"], {}, [], null, null);
        /** Generate the next maintenance visit with a severity identifier. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GenerateNextVisit", _runtime_1.py.attr(operations, "GENERATE_NEXT_VISIT"), _runtime_1.py.call(dealer_inputs_1.maintenance_visits_variables, [vin, mileage, severity_id, past_visits, future_visits], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_maintenance_visits, [data], null);
    }
    /** Call Nissan's separately named no-severity maintenance operation. */
    async async_generate_next_maintenance_visit_no_severity(...__args) {
        let data;
        let { "vin": vin, "mileage": mileage, "severity_id": severity_id, "past_visits": past_visits, "future_visits": future_visits } = _runtime_1.py.bind(__args, ["vin", "mileage", "severity_id", "past_visits", "future_visits"], {}, [], null, null);
        /** Call Nissan's separately named no-severity maintenance operation. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["GenerateNextVisitNoSeverity", _runtime_1.py.attr(operations, "GENERATE_NEXT_VISIT_NO_SEVERITY"), _runtime_1.py.call(dealer_inputs_1.maintenance_visits_variables, [vin, mileage, severity_id, past_visits, future_visits], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_maintenance_visits, [data], null);
    }
    /** Return service advisors for selected dealer operations. */
    async async_get_service_advisors(...__args) {
        let data;
        let { "dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "vin": vin } = _runtime_1.py.bind(__args, ["dealer_id", "service_operation_ids"], { "vin": graphql_input_1.UNSET }, ["vin"], null, null);
        /** Return service advisors for selected dealer operations. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ServiceAdvisors", _runtime_1.py.attr(operations, "SERVICE_ADVISORS"), _runtime_1.py.call(dealer_inputs_1.service_advisors_variables, [dealer_id, service_operation_ids, vin], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_service_advisors, [data], null);
    }
    /** Return available service appointment time slots. */
    async async_get_service_appointment_time_slots(...__args) {
        let data;
        let { "dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "start_date": start_date, "advisor_id": advisor_id, "transportation_code": transportation_code, "location_type": location_type, "vin": vin } = _runtime_1.py.bind(__args, ["dealer_id", "service_operation_ids", "start_date"], { "advisor_id": graphql_input_1.UNSET, "transportation_code": graphql_input_1.UNSET, "location_type": graphql_input_1.UNSET, "vin": graphql_input_1.UNSET }, ["advisor_id", "transportation_code", "location_type", "vin"], null, null);
        /** Return available service appointment time slots. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ServiceAppointmentTimeSlots", _runtime_1.py.attr(operations, "SERVICE_APPOINTMENT_TIME_SLOTS"), _runtime_1.py.call(dealer_inputs_1.service_time_slots_variables, [dealer_id, service_operation_ids, start_date], Object.assign({}, { "advisor_id": advisor_id }, { "transportation_code": transportation_code }, { "location_type": location_type }, { "vin": vin }))], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_service_appointment_time_slots, [data], null);
    }
    /** Return service appointments for a vehicle and optional date-time range. */
    async async_get_service_appointments(...__args) {
        let data;
        let { "vin": vin, "start_date": start_date, "end_date": end_date } = _runtime_1.py.bind(__args, ["vin"], { "start_date": graphql_input_1.UNSET, "end_date": graphql_input_1.UNSET }, ["start_date", "end_date"], null, null);
        /** Return service appointments for a vehicle and optional date-time range. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ServiceAppointments", _runtime_1.py.attr(operations, "SERVICE_APPOINTMENTS"), _runtime_1.py.call(dealer_inputs_1.service_appointments_variables, [vin, start_date, end_date], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_service_appointments, [data], null);
    }
    /** Return service categories and their operations. */
    async async_get_service_categories(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return service categories and their operations. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ServiceCategories", _runtime_1.py.attr(operations, "SERVICE_CATEGORIES"), {}], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_service_categories, [data], null);
    }
    /** Return the service operations available for a vehicle and dealer. */
    async async_get_service_operations(...__args) {
        let data;
        let { "vin": vin, "dealer_id": dealer_id } = _runtime_1.py.bind(__args, ["vin", "dealer_id"], {}, [], null, null);
        /** Return the service operations available for a vehicle and dealer. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ServiceOperations", _runtime_1.py.attr(operations, "SERVICE_OPERATIONS"), Object.assign({}, { ["vin"]: vin }, { ["dealerId"]: dealer_id })], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_service_operations, [data], null);
    }
    /** Return service operations grouped around the supplied mileage. */
    async async_get_service_operations_by_mileage(...__args) {
        let data;
        let { "vin": vin, "dealer_id": dealer_id, "mileage": mileage } = _runtime_1.py.bind(__args, ["vin", "dealer_id", "mileage"], {}, [], null, null);
        /** Return service operations grouped around the supplied mileage. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ServiceOperationsByMileage", _runtime_1.py.attr(operations, "SERVICE_OPERATIONS_BY_MILEAGE"), Object.assign({}, { ["vin"]: vin }, { ["dealerId"]: dealer_id }, { ["mileage"]: mileage })], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_service_operations_by_mileage, [data], null);
    }
    /** Return transportation options for selected dealer operations. */
    async async_get_transportation_options(...__args) {
        let data;
        let { "dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "vin": vin } = _runtime_1.py.bind(__args, ["dealer_id", "service_operation_ids"], { "vin": graphql_input_1.UNSET }, ["vin"], null, null);
        /** Return transportation options for selected dealer operations. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["TransportationOptions", _runtime_1.py.attr(operations, "TRANSPORTATION_OPTIONS"), _runtime_1.py.call(dealer_inputs_1.service_advisors_variables, [dealer_id, service_operation_ids, vin], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_transportation_options, [data], null);
    }
    /** Cancel a service appointment. */
    async async_cancel_service_appointment(...__args) {
        let data;
        let { "appointment_id": appointment_id, "dealer_id": dealer_id, "vin": vin } = _runtime_1.py.bind(__args, ["appointment_id", "dealer_id"], { "vin": graphql_input_1.UNSET }, ["vin"], null, null);
        /** Cancel a service appointment. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CancelServiceAppointment", _runtime_1.py.attr(operations, "CANCEL_SERVICE_APPOINTMENT"), _runtime_1.py.call(dealer_inputs_1.cancel_service_appointment_variables, [appointment_id, dealer_id, vin], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_cancel_service_appointment, [data], null);
    }
    /** Create a service appointment. */
    async async_create_service_appointment(...__args) {
        let data;
        let { "appointment": appointment } = _runtime_1.py.bind(__args, ["appointment"], {}, [], null, null);
        /** Create a service appointment. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreateServiceAppointment", _runtime_1.py.attr(operations, "CREATE_SERVICE_APPOINTMENT"), _runtime_1.py.call(dealer_inputs_1.service_appointment_variables, [appointment], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_create_service_appointment, [data], null);
    }
    /** Replace a service appointment's selected details. */
    async async_update_service_appointment(...__args) {
        let data;
        let { "appointment_id": appointment_id, "appointment": appointment } = _runtime_1.py.bind(__args, ["appointment_id", "appointment"], {}, [], null, null);
        /** Replace a service appointment's selected details. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateServiceAppointment", _runtime_1.py.attr(operations, "UPDATE_SERVICE_APPOINTMENT"), _runtime_1.py.call(dealer_inputs_1.update_service_appointment_variables, [appointment_id, appointment], null)], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_update_service_appointment, [data], null);
    }
    /** Set the preferred dealer for a vehicle. */
    async async_update_vehicle_preferred_dealer(...__args) {
        let data;
        let { "vin": vin, "preferred_dealer_id": preferred_dealer_id } = _runtime_1.py.bind(__args, ["vin", "preferred_dealer_id"], {}, [], null, null);
        /** Set the preferred dealer for a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateVehiclePreferredDealer", _runtime_1.py.attr(operations, "UPDATE_VEHICLE_PREFERRED_DEALER"), Object.assign({}, { ["vin"]: vin }, { ["preferredDealerId"]: preferred_dealer_id })], null));
        return _runtime_1.py.call(dealer_parsing_1.parse_update_vehicle_preferred_dealer, [data], null);
    }
}
exports._DealerClientMixin = _DealerClientMixin;
_runtime_1.py.classType(_DealerClientMixin);
//# sourceMappingURL=_dealer_client.js.map