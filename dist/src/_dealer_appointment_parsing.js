"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports.ServiceTransportationOption = exports.ServiceOperationsAtInterval = exports.ServiceDiscount = exports.ServiceDealership = exports.ServiceContactMethodType = exports.ServiceContactMethod = exports.ServiceCategoryOperation = exports.ServiceCategory = exports.ServiceAppointmentTimeSlot = exports.ServiceAppointment = exports.ServiceAdvisor = exports.ServiceAddress = exports.DealerServiceOperation = exports.AppointmentServiceOperation = exports._typed_object = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_int = exports._required_nullable_bool = exports._required_int = exports._required_field = exports._enum = exports._required_nullable_float = exports._required_datetime = exports._required_bool = exports._optional_selected_nullable_string = exports._nullable_list = void 0;
exports._parse_service_advisor = _parse_service_advisor;
exports._parse_time_slot = _parse_time_slot;
exports._parse_service_appointment = _parse_service_appointment;
exports._parse_dealership = _parse_dealership;
exports._parse_service_address = _parse_service_address;
exports._parse_transportation_option = _parse_transportation_option;
exports._parse_contact_method = _parse_contact_method;
exports._parse_appointment_operation = _parse_appointment_operation;
exports._parse_service_category = _parse_service_category;
exports._parse_category_operation = _parse_category_operation;
exports._parse_service_operation = _parse_service_operation;
exports._parse_discount = _parse_discount;
exports._parse_service_operations_at_interval = _parse_service_operations_at_interval;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const datetime = _runtime_1.py.datetime;
const _dealer_value_parsing_1 = require("./_dealer_value_parsing");
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _dealer_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_optional_selected_nullable_string", { enumerable: true, get: function () { return _dealer_value_parsing_1._optional_selected_nullable_string; } });
Object.defineProperty(exports, "_required_bool", { enumerable: true, get: function () { return _dealer_value_parsing_1._required_bool; } });
Object.defineProperty(exports, "_required_datetime", { enumerable: true, get: function () { return _dealer_value_parsing_1._required_datetime; } });
Object.defineProperty(exports, "_required_nullable_float", { enumerable: true, get: function () { return _dealer_value_parsing_1._required_nullable_float; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_enum", { enumerable: true, get: function () { return account_parsing_1._enum; } });
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_int", { enumerable: true, get: function () { return account_parsing_1._required_int; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return account_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return account_parsing_1._typed_object; } });
const dealer_models_1 = require("./dealer_models");
Object.defineProperty(exports, "AppointmentServiceOperation", { enumerable: true, get: function () { return dealer_models_1.AppointmentServiceOperation; } });
Object.defineProperty(exports, "DealerServiceOperation", { enumerable: true, get: function () { return dealer_models_1.DealerServiceOperation; } });
Object.defineProperty(exports, "ServiceAddress", { enumerable: true, get: function () { return dealer_models_1.ServiceAddress; } });
Object.defineProperty(exports, "ServiceAdvisor", { enumerable: true, get: function () { return dealer_models_1.ServiceAdvisor; } });
Object.defineProperty(exports, "ServiceAppointment", { enumerable: true, get: function () { return dealer_models_1.ServiceAppointment; } });
Object.defineProperty(exports, "ServiceAppointmentTimeSlot", { enumerable: true, get: function () { return dealer_models_1.ServiceAppointmentTimeSlot; } });
Object.defineProperty(exports, "ServiceCategory", { enumerable: true, get: function () { return dealer_models_1.ServiceCategory; } });
Object.defineProperty(exports, "ServiceCategoryOperation", { enumerable: true, get: function () { return dealer_models_1.ServiceCategoryOperation; } });
Object.defineProperty(exports, "ServiceContactMethod", { enumerable: true, get: function () { return dealer_models_1.ServiceContactMethod; } });
Object.defineProperty(exports, "ServiceContactMethodType", { enumerable: true, get: function () { return dealer_models_1.ServiceContactMethodType; } });
Object.defineProperty(exports, "ServiceDealership", { enumerable: true, get: function () { return dealer_models_1.ServiceDealership; } });
Object.defineProperty(exports, "ServiceDiscount", { enumerable: true, get: function () { return dealer_models_1.ServiceDiscount; } });
Object.defineProperty(exports, "ServiceOperationsAtInterval", { enumerable: true, get: function () { return dealer_models_1.ServiceOperationsAtInterval; } });
Object.defineProperty(exports, "ServiceTransportationOption", { enumerable: true, get: function () { return dealer_models_1.ServiceTransportationOption; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Translated upstream _parse_service_advisor. */
function _parse_service_advisor(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.ServiceAdvisor, [], Object.assign({}, { "advisor_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "advisorId", (_runtime_1.py.str(path) + ".advisorId")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "job_title": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "jobTitle", (_runtime_1.py.str(path) + ".jobTitle")], null) }, { "email": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "email", (_runtime_1.py.str(path) + ".email")], null) }, { "image_url": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "imageUrl", (_runtime_1.py.str(path) + ".imageUrl")], null) }));
}
/** Translated upstream _parse_time_slot. */
function _parse_time_slot(...__args) {
    let index, item, item_path, parsed_times, times, timeslot;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    times = _runtime_1.py.call(account_parsing_1._required_field, [value, "timeslots", (_runtime_1.py.str(path) + ".timeslots")], null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [times, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + ".timeslots is not a list")], null);
    }
    parsed_times = [];
    for ([index, item] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [times], null))) {
        if (_runtime_1.py.truth(((item === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(parsed_times, "append"), [null], null);
            continue;
        }
        item_path = (_runtime_1.py.str(path) + ".timeslots[" + _runtime_1.py.str(index) + "]");
        timeslot = _runtime_1.py.call(account_parsing_1._typed_object, [item, item_path], null);
        _runtime_1.py.call(_runtime_1.py.attr(parsed_times, "append"), [_runtime_1.py.call(_dealer_value_parsing_1._required_datetime, [timeslot, "time", (_runtime_1.py.str(item_path) + ".time")], null)], null);
    }
    return _runtime_1.py.call(dealer_models_1.ServiceAppointmentTimeSlot, [], Object.assign({}, { "is_open": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "isOpen", (_runtime_1.py.str(path) + ".isOpen")], null) }, { "date": _runtime_1.py.call(_dealer_value_parsing_1._required_datetime, [value, "date", (_runtime_1.py.str(path) + ".date")], null) }, { "times": _runtime_1.py.call(_runtime_1.py.tuple, [parsed_times], null) }));
}
/** Translated upstream _parse_service_appointment. */
function _parse_service_appointment(...__args) {
    let advisor, advisor_path, customer, customer_path, dealership, dealership_path, drop_off, drop_off_path, operations, pick_up, pick_up_path, transport, transport_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    dealership_path = (_runtime_1.py.str(path) + ".dealership");
    dealership = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "dealership", dealership_path], null);
    if (_runtime_1.py.truth(((dealership === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(dealership_path) + " is null")], null);
    }
    customer_path = (_runtime_1.py.str(path) + ".customer");
    customer = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "customer", customer_path], null);
    if (_runtime_1.py.truth(((customer === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(customer_path) + " is null")], null);
    }
    pick_up_path = (_runtime_1.py.str(path) + ".pickUpAddress");
    pick_up = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "pickUpAddress", pick_up_path], null);
    drop_off_path = (_runtime_1.py.str(path) + ".dropOffAddress");
    drop_off = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "dropOffAddress", drop_off_path], null);
    transport_path = (_runtime_1.py.str(path) + ".transport");
    transport = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "transport", transport_path], null);
    advisor_path = (_runtime_1.py.str(path) + ".advisor");
    advisor = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "advisor", advisor_path], null);
    operations = _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [value, "serviceOperations", (_runtime_1.py.str(path) + ".serviceOperations"), _parse_appointment_operation], null);
    if (_runtime_1.py.truth(((operations === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + ".serviceOperations is null")], null);
    }
    return _runtime_1.py.call(dealer_models_1.ServiceAppointment, [], Object.assign({}, { "appointment_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "appointmentId", (_runtime_1.py.str(path) + ".appointmentId")], null) }, { "appointment_date": _runtime_1.py.call(_dealer_value_parsing_1._required_datetime, [value, "appointmentDate", (_runtime_1.py.str(path) + ".appointmentDate")], null) }, { "dealer_id": _runtime_1.py.call(account_parsing_1._required_string, [value, "dealerId", (_runtime_1.py.str(path) + ".dealerId")], null) }, { "editable": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "isEditable", (_runtime_1.py.str(path) + ".isEditable")], null) }, { "dealership": _runtime_1.py.call(_parse_dealership, [dealership, dealership_path], null) }, { "pick_up_address": _runtime_1.py.call(_parse_service_address, [pick_up, pick_up_path], Object.assign({}, { "pick_up": true })) }, { "drop_off_address": _runtime_1.py.call(_parse_service_address, [drop_off, drop_off_path], Object.assign({}, { "pick_up": false })) }, { "transport": (_runtime_1.py.truth(((transport === null))) ? null : _runtime_1.py.call(_parse_transportation_option, [transport, transport_path], null)) }, { "contact_methods": _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [customer, "contactMethod", (_runtime_1.py.str(customer_path) + ".contactMethod"), _parse_contact_method], null) }, { "service_operations": operations }, { "advisor": (_runtime_1.py.truth(((advisor === null))) ? null : _runtime_1.py.call(_parse_service_advisor, [advisor, advisor_path], null)) }, { "additional_comments": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "additionalComments", (_runtime_1.py.str(path) + ".additionalComments")], null) }));
}
/** Translated upstream _parse_dealership. */
function _parse_dealership(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.ServiceDealership, [], Object.assign({}, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerName", (_runtime_1.py.str(path) + ".dealerName")], null) }, { "address_line_1": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerAddressLine1", (_runtime_1.py.str(path) + ".dealerAddressLine1")], null) }, { "address_line_2": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerAddressLine2", (_runtime_1.py.str(path) + ".dealerAddressLine2")], null) }, { "city_name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerCityName", (_runtime_1.py.str(path) + ".dealerCityName")], null) }, { "state_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerStateCode", (_runtime_1.py.str(path) + ".dealerStateCode")], null) }, { "phone_number": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerPhoneNumber", (_runtime_1.py.str(path) + ".dealerPhoneNumber")], null) }));
}
/** Translated upstream _parse_service_address. */
function _parse_service_address(...__args) {
    let { "value": value, "path": path, "pick_up": pick_up } = _runtime_1.py.bind(__args, ["value", "path"], {}, ["pick_up"], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(dealer_models_1.ServiceAddress, [], Object.assign({}, { "address_1": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "address1", (_runtime_1.py.str(path) + ".address1")], null) }, { "address_2": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "address2", (_runtime_1.py.str(path) + ".address2")], null) }, { "city": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "city", (_runtime_1.py.str(path) + ".city")], null) }, { "state": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "state", (_runtime_1.py.str(path) + ".state")], null) }, { "postal_code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "postalCode", (_runtime_1.py.str(path) + ".postalCode")], null) }, { "country": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "country", (_runtime_1.py.str(path) + ".country")], null) }, { "neighbourhood": (_runtime_1.py.truth(pick_up) ? _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "neighbourhood", path], null) : null) }, { "district": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "district", path], null) }, { "street_number": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "streetNumber", path], null) }));
}
/** Translated upstream _parse_transportation_option. */
function _parse_transportation_option(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.ServiceTransportationOption, [], Object.assign({}, { "code": _runtime_1.py.call(account_parsing_1._required_string, [value, "code", (_runtime_1.py.str(path) + ".code")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "is_valet": _runtime_1.py.call(_dealer_value_parsing_1._required_bool, [value, "isValet", (_runtime_1.py.str(path) + ".isValet")], null) }, { "is_loaner_available": _runtime_1.py.call(_dealer_value_parsing_1._required_bool, [value, "isLoanerAvailable", (_runtime_1.py.str(path) + ".isLoanerAvailable")], null) }));
}
/** Translated upstream _parse_contact_method. */
function _parse_contact_method(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.ServiceContactMethod, [], Object.assign({}, { "type": _runtime_1.py.call(account_parsing_1._enum, [_runtime_1.py.call(account_parsing_1._required_field, [value, "type", (_runtime_1.py.str(path) + ".type")], null), dealer_models_1.ServiceContactMethodType, (_runtime_1.py.str(path) + ".type")], null) }, { "value": _runtime_1.py.call(account_parsing_1._required_string, [value, "value", (_runtime_1.py.str(path) + ".value")], null) }));
}
/** Translated upstream _parse_appointment_operation. */
function _parse_appointment_operation(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.AppointmentServiceOperation, [], Object.assign({}, { "operation_code_description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "opCodeDescription", (_runtime_1.py.str(path) + ".opCodeDescription")], null) }, { "operation_code_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "opCodeID", (_runtime_1.py.str(path) + ".opCodeID")], null) }, { "customer_comments": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "customerComments", (_runtime_1.py.str(path) + ".customerComments")], null) }, { "category_name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "serviceCategoryName", (_runtime_1.py.str(path) + ".serviceCategoryName")], null) }, { "description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "serviceOperationsDescription", (_runtime_1.py.str(path) + ".serviceOperationsDescription")], null) }));
}
/** Translated upstream _parse_service_category. */
function _parse_service_category(...__args) {
    let operations;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    operations = _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [value, "serviceOperations", (_runtime_1.py.str(path) + ".serviceOperations"), _parse_category_operation], null);
    if (_runtime_1.py.truth(((operations === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + ".serviceOperations is null")], null);
    }
    return _runtime_1.py.call(dealer_models_1.ServiceCategory, [], Object.assign({}, { "category_id": _runtime_1.py.call(account_parsing_1._required_int, [value, "serviceCategoryId", (_runtime_1.py.str(path) + ".serviceCategoryId")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_string, [value, "serviceCategoryName", (_runtime_1.py.str(path) + ".serviceCategoryName")], null) }, { "description": _runtime_1.py.call(account_parsing_1._required_string, [value, "serviceCategoryDescription", (_runtime_1.py.str(path) + ".serviceCategoryDescription")], null) }, { "operations": operations }));
}
/** Translated upstream _parse_category_operation. */
function _parse_category_operation(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.ServiceCategoryOperation, [], Object.assign({}, { "operation_code_id": _runtime_1.py.call(account_parsing_1._required_int, [value, "opCodeID", (_runtime_1.py.str(path) + ".opCodeID")], null) }, { "description": _runtime_1.py.call(account_parsing_1._required_string, [value, "opCodeDescription", (_runtime_1.py.str(path) + ".opCodeDescription")], null) }));
}
/** Translated upstream _parse_service_operation. */
function _parse_service_operation(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.DealerServiceOperation, [], Object.assign({}, { "operation_code_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "opCodeID", (_runtime_1.py.str(path) + ".opCodeID")], null) }, { "operation_code_description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "opCodeDescription", (_runtime_1.py.str(path) + ".opCodeDescription")], null) }, { "customer_comments": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "customerComments", (_runtime_1.py.str(path) + ".customerComments")], null) }, { "description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "serviceOperationsDescription", (_runtime_1.py.str(path) + ".serviceOperationsDescription")], null) }, { "package": _runtime_1.py.call(account_parsing_1._required_string, [value, "package", (_runtime_1.py.str(path) + ".package")], null) }, { "maintenance": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "maintenance", (_runtime_1.py.str(path) + ".maintenance")], null) }, { "validation": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [value, "validation", (_runtime_1.py.str(path) + ".validation")], null) }, { "price": _runtime_1.py.call(_dealer_value_parsing_1._required_nullable_float, [value, "price", (_runtime_1.py.str(path) + ".price")], null) }, { "labor_hours": _runtime_1.py.call(_dealer_value_parsing_1._required_nullable_float, [value, "laborHours", (_runtime_1.py.str(path) + ".laborHours")], null) }, { "discounts": _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [value, "discounts", (_runtime_1.py.str(path) + ".discounts"), _parse_discount], null) }));
}
/** Translated upstream _parse_discount. */
function _parse_discount(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.ServiceDiscount, [], Object.assign({}, { "code": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "code", (_runtime_1.py.str(path) + ".code")], null) }, { "description": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "description", (_runtime_1.py.str(path) + ".description")], null) }, { "price": _runtime_1.py.call(_dealer_value_parsing_1._required_nullable_float, [value, "price", (_runtime_1.py.str(path) + ".price")], null) }));
}
/** Translated upstream _parse_service_operations_at_interval. */
function _parse_service_operations_at_interval(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.ServiceOperationsAtInterval, [], Object.assign({}, { "mileage": _runtime_1.py.call(account_parsing_1._required_nullable_int, [value, "intervalMileage", (_runtime_1.py.str(path) + ".intervalMileage")], null) }, { "operations": _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [value, "serviceOperations", (_runtime_1.py.str(path) + ".serviceOperations"), _parse_service_operation], null) }));
}
//# sourceMappingURL=_dealer_appointment_parsing.js.map