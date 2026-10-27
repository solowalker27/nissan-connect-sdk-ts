"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports.UpdatedServiceAppointment = exports.UnselectedDealerResult = exports.ServiceTransportationOption = exports.ServiceOperationsAtInterval = exports.ServiceCategory = exports.ServiceAppointmentUpdateError = exports.ServiceAppointmentTimeSlot = exports.ServiceAppointment = exports.ServiceAdvisor = exports.PreferredDealerUpdateError = exports.PreferredDealerUpdated = exports.MaintenanceVisits = exports.DealerSummary = exports.DealerServiceOperation = exports.DealerDealsAndImages = exports.Dealer = exports.CreatedServiceAppointment = exports.CancelServiceAppointmentResult = exports._typename = exports._typed_object = exports._root = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_bool = exports._required_field = exports._required_datetime = exports._nullable_list = exports._parse_maintenance_visit = exports._parse_dealer_summary = exports._parse_dealer = exports._parse_coupon_image = exports._parse_coupon = exports._parse_transportation_option = exports._parse_time_slot = exports._parse_service_operations_at_interval = exports._parse_service_operation = exports._parse_service_category = exports._parse_service_appointment = exports._parse_service_advisor = exports._parse_service_address = void 0;
exports.parse_all_dealers = parse_all_dealers;
exports.parse_dealers = parse_dealers;
exports.parse_dealer = parse_dealer;
exports.parse_dealer_deals_and_images = parse_dealer_deals_and_images;
exports.parse_maintenance_visits = parse_maintenance_visits;
exports.parse_service_advisors = parse_service_advisors;
exports.parse_service_appointment_time_slots = parse_service_appointment_time_slots;
exports.parse_service_appointments = parse_service_appointments;
exports.parse_service_categories = parse_service_categories;
exports.parse_service_operations = parse_service_operations;
exports.parse_service_operations_by_mileage = parse_service_operations_by_mileage;
exports.parse_transportation_options = parse_transportation_options;
exports.parse_cancel_service_appointment = parse_cancel_service_appointment;
exports.parse_create_service_appointment = parse_create_service_appointment;
exports.parse_update_service_appointment = parse_update_service_appointment;
exports.parse_update_vehicle_preferred_dealer = parse_update_vehicle_preferred_dealer;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _dealer_appointment_parsing_1 = require("./_dealer_appointment_parsing");
Object.defineProperty(exports, "_parse_service_address", { enumerable: true, get: function () { return _dealer_appointment_parsing_1._parse_service_address; } });
Object.defineProperty(exports, "_parse_service_advisor", { enumerable: true, get: function () { return _dealer_appointment_parsing_1._parse_service_advisor; } });
Object.defineProperty(exports, "_parse_service_appointment", { enumerable: true, get: function () { return _dealer_appointment_parsing_1._parse_service_appointment; } });
Object.defineProperty(exports, "_parse_service_category", { enumerable: true, get: function () { return _dealer_appointment_parsing_1._parse_service_category; } });
Object.defineProperty(exports, "_parse_service_operation", { enumerable: true, get: function () { return _dealer_appointment_parsing_1._parse_service_operation; } });
Object.defineProperty(exports, "_parse_service_operations_at_interval", { enumerable: true, get: function () { return _dealer_appointment_parsing_1._parse_service_operations_at_interval; } });
Object.defineProperty(exports, "_parse_time_slot", { enumerable: true, get: function () { return _dealer_appointment_parsing_1._parse_time_slot; } });
Object.defineProperty(exports, "_parse_transportation_option", { enumerable: true, get: function () { return _dealer_appointment_parsing_1._parse_transportation_option; } });
const _dealer_detail_parsing_1 = require("./_dealer_detail_parsing");
Object.defineProperty(exports, "_parse_coupon", { enumerable: true, get: function () { return _dealer_detail_parsing_1._parse_coupon; } });
Object.defineProperty(exports, "_parse_coupon_image", { enumerable: true, get: function () { return _dealer_detail_parsing_1._parse_coupon_image; } });
Object.defineProperty(exports, "_parse_dealer", { enumerable: true, get: function () { return _dealer_detail_parsing_1._parse_dealer; } });
Object.defineProperty(exports, "_parse_dealer_summary", { enumerable: true, get: function () { return _dealer_detail_parsing_1._parse_dealer_summary; } });
Object.defineProperty(exports, "_parse_maintenance_visit", { enumerable: true, get: function () { return _dealer_detail_parsing_1._parse_maintenance_visit; } });
const _dealer_value_parsing_1 = require("./_dealer_value_parsing");
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _dealer_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_required_datetime", { enumerable: true, get: function () { return _dealer_value_parsing_1._required_datetime; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return account_parsing_1._root; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return account_parsing_1._typed_object; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const dealer_models_1 = require("./dealer_models");
Object.defineProperty(exports, "CancelServiceAppointmentResult", { enumerable: true, get: function () { return dealer_models_1.CancelServiceAppointmentResult; } });
Object.defineProperty(exports, "CreatedServiceAppointment", { enumerable: true, get: function () { return dealer_models_1.CreatedServiceAppointment; } });
Object.defineProperty(exports, "Dealer", { enumerable: true, get: function () { return dealer_models_1.Dealer; } });
Object.defineProperty(exports, "DealerDealsAndImages", { enumerable: true, get: function () { return dealer_models_1.DealerDealsAndImages; } });
Object.defineProperty(exports, "DealerServiceOperation", { enumerable: true, get: function () { return dealer_models_1.DealerServiceOperation; } });
Object.defineProperty(exports, "DealerSummary", { enumerable: true, get: function () { return dealer_models_1.DealerSummary; } });
Object.defineProperty(exports, "MaintenanceVisits", { enumerable: true, get: function () { return dealer_models_1.MaintenanceVisits; } });
Object.defineProperty(exports, "PreferredDealerUpdated", { enumerable: true, get: function () { return dealer_models_1.PreferredDealerUpdated; } });
Object.defineProperty(exports, "PreferredDealerUpdateError", { enumerable: true, get: function () { return dealer_models_1.PreferredDealerUpdateError; } });
Object.defineProperty(exports, "ServiceAdvisor", { enumerable: true, get: function () { return dealer_models_1.ServiceAdvisor; } });
Object.defineProperty(exports, "ServiceAppointment", { enumerable: true, get: function () { return dealer_models_1.ServiceAppointment; } });
Object.defineProperty(exports, "ServiceAppointmentTimeSlot", { enumerable: true, get: function () { return dealer_models_1.ServiceAppointmentTimeSlot; } });
Object.defineProperty(exports, "ServiceAppointmentUpdateError", { enumerable: true, get: function () { return dealer_models_1.ServiceAppointmentUpdateError; } });
Object.defineProperty(exports, "ServiceCategory", { enumerable: true, get: function () { return dealer_models_1.ServiceCategory; } });
Object.defineProperty(exports, "ServiceOperationsAtInterval", { enumerable: true, get: function () { return dealer_models_1.ServiceOperationsAtInterval; } });
Object.defineProperty(exports, "ServiceTransportationOption", { enumerable: true, get: function () { return dealer_models_1.ServiceTransportationOption; } });
Object.defineProperty(exports, "UnselectedDealerResult", { enumerable: true, get: function () { return dealer_models_1.UnselectedDealerResult; } });
Object.defineProperty(exports, "UpdatedServiceAppointment", { enumerable: true, get: function () { return dealer_models_1.UpdatedServiceAppointment; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Parse the nullable compact dealer list. */
function parse_all_dealers(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable compact dealer list. */
    return _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [data, "dealers", "dealers", _dealer_detail_parsing_1._parse_dealer_summary], null);
}
/** Parse nullable full dealer search results. */
function parse_dealers(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable full dealer search results. */
    return _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [data, "dealers", "dealers", _dealer_detail_parsing_1._parse_dealer], null);
}
/** Parse one nullable full dealer result. */
function parse_dealer(...__args) {
    let root;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse one nullable full dealer result. */
    root = _runtime_1.py.call(account_parsing_1._root, [data, "dealer"], null);
    return (_runtime_1.py.truth(((root === null))) ? null : _runtime_1.py.call(_dealer_detail_parsing_1._parse_dealer, [root, "dealer"], null));
}
/** Parse the two nullable dealer coupon collections. */
function parse_dealer_deals_and_images(...__args) {
    let coupon_images, coupons, deals, images;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the two nullable dealer coupon collections. */
    deals = _runtime_1.py.call(account_parsing_1._root, [data, "dealsByDealerId"], null);
    images = _runtime_1.py.call(account_parsing_1._root, [data, "dealsImagesByDealerId"], null);
    coupons = null;
    if (_runtime_1.py.truth(((deals !== null)))) {
        coupons = _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [deals, "coupon", "dealsByDealerId.coupon", _dealer_detail_parsing_1._parse_coupon], null);
    }
    coupon_images = null;
    if (_runtime_1.py.truth(((images !== null)))) {
        coupon_images = _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [images, "coupons", "dealsImagesByDealerId.coupons", _dealer_detail_parsing_1._parse_coupon_image], null);
    }
    return _runtime_1.py.call(dealer_models_1.DealerDealsAndImages, [coupons, coupon_images], null);
}
/** Parse generated maintenance schedule visits. */
function parse_maintenance_visits(...__args) {
    let schedule, schedule_path, viewer;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse generated maintenance schedule visits. */
    viewer = _runtime_1.py.call(account_parsing_1._root, [data, "viewer"], null);
    if (_runtime_1.py.truth(((viewer === null)))) {
        return null;
    }
    schedule_path = "viewer.Schedule";
    schedule = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [viewer, "Schedule", schedule_path], null);
    if (_runtime_1.py.truth(((schedule === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(schedule_path) + " is null")], null);
    }
    return _runtime_1.py.call(dealer_models_1.MaintenanceVisits, [_runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [schedule, "Visits", (_runtime_1.py.str(schedule_path) + ".Visits"), _dealer_detail_parsing_1._parse_maintenance_visit], null)], null);
}
/** Parse nullable service advisor results. */
function parse_service_advisors(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable service advisor results. */
    return _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [data, "serviceAdvisors", "serviceAdvisors", _dealer_appointment_parsing_1._parse_service_advisor], null);
}
/** Parse the required service appointment time-slot list. */
function parse_service_appointment_time_slots(...__args) {
    let index, item, path, result, value;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the required service appointment time-slot list. */
    value = _runtime_1.py.call(account_parsing_1._required_field, [data, "serviceAppointmentTimeSlots", "serviceAppointmentTimeSlots"], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, ["serviceAppointmentTimeSlots is not a list"], null);
    }
    result = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [value], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(result, "append"), [null], null);
            continue;
        }
        path = ("serviceAppointmentTimeSlots[" + _runtime_1.py.str(index) + "]");
        _runtime_1.py.call(_runtime_1.py.attr(result, "append"), [_runtime_1.py.call(_dealer_appointment_parsing_1._parse_time_slot, [_runtime_1.py.call(account_parsing_1._typed_object, [item, path], null), path], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [result], null);
}
/** Parse nullable existing service appointments. */
function parse_service_appointments(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable existing service appointments. */
    return _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [data, "serviceAppointments", "serviceAppointments", _dealer_appointment_parsing_1._parse_service_appointment], null);
}
/** Parse nullable service categories. */
function parse_service_categories(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable service categories. */
    return _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [data, "serviceCategories", "serviceCategories", _dealer_appointment_parsing_1._parse_service_category], null);
}
/** Parse nullable service operations. */
function parse_service_operations(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable service operations. */
    return _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [data, "serviceOperations", "serviceOperations", _dealer_appointment_parsing_1._parse_service_operation], null);
}
/** Parse service operations grouped by closest mileage intervals. */
function parse_service_operations_by_mileage(...__args) {
    let root;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse service operations grouped by closest mileage intervals. */
    root = _runtime_1.py.call(account_parsing_1._root, [data, "serviceOperationsByMileage"], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [root, "servicesAtClosestIntervals", "serviceOperationsByMileage.servicesAtClosestIntervals", _dealer_appointment_parsing_1._parse_service_operations_at_interval], null);
}
/** Parse nullable appointment transportation options. */
function parse_transportation_options(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable appointment transportation options. */
    return _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [data, "transportationOptions", "transportationOptions", _dealer_appointment_parsing_1._parse_transportation_option], null);
}
/** Parse nullable service appointment cancellation status. */
function parse_cancel_service_appointment(...__args) {
    let field, root;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable service appointment cancellation status. */
    field = "cancelServiceAppointment";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    return _runtime_1.py.call(dealer_models_1.CancelServiceAppointmentResult, [_runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "success", (_runtime_1.py.str(field) + ".success")], null)], null);
}
/** Parse the selected service appointment creation branch. */
function parse_create_service_appointment(...__args) {
    let field, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the selected service appointment creation branch. */
    field = "createServiceAppointment";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ServiceAppointment")))) {
        return _runtime_1.py.call(dealer_models_1.CreatedServiceAppointment, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "appointmentId", (_runtime_1.py.str(field) + ".appointmentId")], null)], null);
    }
    return _runtime_1.py.call(dealer_models_1.UnselectedDealerResult, [typename], null);
}
/** Parse every selected service appointment update union branch. */
function parse_update_service_appointment(...__args) {
    let field, pick_up, pick_up_path, root, transport, transport_path, typename, vehicle, vehicle_path;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected service appointment update union branch. */
    field = "updateServiceAppointment";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ServiceAppointmentError")))) {
        return _runtime_1.py.call(dealer_models_1.ServiceAppointmentUpdateError, [], Object.assign({}, { "message": _runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null) }, { "error": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "error", (_runtime_1.py.str(field) + ".error")], null) }));
    }
    if (_runtime_1.py.truth((!_runtime_1.py.eq(typename, "ServiceAppointment")))) {
        return _runtime_1.py.call(dealer_models_1.UnselectedDealerResult, [typename], null);
    }
    pick_up_path = (_runtime_1.py.str(field) + ".pickUpAddress");
    pick_up = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "pickUpAddress", pick_up_path], null);
    transport_path = (_runtime_1.py.str(field) + ".transport");
    transport = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "transport", transport_path], null);
    vehicle_path = (_runtime_1.py.str(field) + ".vehicle");
    vehicle = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "vehicle", vehicle_path], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(vehicle_path) + " is null")], null);
    }
    return _runtime_1.py.call(dealer_models_1.UpdatedServiceAppointment, [], Object.assign({}, { "dealer_id": _runtime_1.py.call(account_parsing_1._required_string, [root, "dealerId", (_runtime_1.py.str(field) + ".dealerId")], null) }, { "appointment_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "appointmentId", (_runtime_1.py.str(field) + ".appointmentId")], null) }, { "appointment_date": _runtime_1.py.call(_dealer_value_parsing_1._required_datetime, [root, "appointmentDate", (_runtime_1.py.str(field) + ".appointmentDate")], null) }, { "additional_comments": _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "additionalComments", (_runtime_1.py.str(field) + ".additionalComments")], null) }, { "pick_up_address": _runtime_1.py.call(_dealer_appointment_parsing_1._parse_service_address, [pick_up, pick_up_path], Object.assign({}, { "pick_up": true })) }, { "transport_name": (_runtime_1.py.truth(((transport === null))) ? null : _runtime_1.py.call(account_parsing_1._required_string, [transport, "name", (_runtime_1.py.str(transport_path) + ".name")], null)) }, { "type": _runtime_1.py.call(account_parsing_1._required_string, [root, "type", (_runtime_1.py.str(field) + ".type")], null) }, { "vin": _runtime_1.py.call(account_parsing_1._required_string, [vehicle, "vin", (_runtime_1.py.str(vehicle_path) + ".vin")], null) }));
}
/** Parse every generated preferred-dealer update union branch. */
function parse_update_vehicle_preferred_dealer(...__args) {
    let field, root, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every generated preferred-dealer update union branch. */
    field = "updateVehicle";
    root = _runtime_1.py.call(account_parsing_1._root, [data, field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpdateVehicleSuccessResponse")))) {
        return _runtime_1.py.call(dealer_models_1.PreferredDealerUpdated, [_runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "preferredDealer", (_runtime_1.py.str(field) + ".preferredDealer")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.contains(new Set(["RequiresAtLeastOneArgumentError", "InvalidVINError", "VINNotFoundError", "UpdateVehicleGeneralError"]), typename)))) {
        return _runtime_1.py.call(dealer_models_1.PreferredDealerUpdateError, [typename, _runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(dealer_models_1.UnselectedDealerResult, [typename], null);
}
//# sourceMappingURL=_dealer_public_parsing.js.map