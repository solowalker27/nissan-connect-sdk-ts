// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const datetime = $.datetime;

import { _nullable_list, _optional_selected_nullable_string, _required_bool, _required_datetime, _required_nullable_float } from "./_dealer_value_parsing";
export { _nullable_list, _optional_selected_nullable_string, _required_bool, _required_datetime, _required_nullable_float };

import { _enum, _required_field, _required_int, _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _typed_object } from "./account_parsing";
export { _enum, _required_field, _required_int, _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _typed_object };

import { AppointmentServiceOperation, DealerServiceOperation, ServiceAddress, ServiceAdvisor, ServiceAppointment, ServiceAppointmentTimeSlot, ServiceCategory, ServiceCategoryOperation, ServiceContactMethod, ServiceContactMethodType, ServiceDealership, ServiceDiscount, ServiceOperationsAtInterval, ServiceTransportationOption } from "./dealer_models";
export { AppointmentServiceOperation, DealerServiceOperation, ServiceAddress, ServiceAdvisor, ServiceAppointment, ServiceAppointmentTimeSlot, ServiceCategory, ServiceCategoryOperation, ServiceContactMethod, ServiceContactMethodType, ServiceDealership, ServiceDiscount, ServiceOperationsAtInterval, ServiceTransportationOption };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function _parse_service_advisor(value: Record<string, unknown>, path: string): ServiceAdvisor;
/** Translated upstream _parse_service_advisor. */
export function _parse_service_advisor(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(ServiceAdvisor, [], Object.assign({}, {"advisor_id": $.call(_required_nullable_string, [value, "advisorId", ($.str(path) + ".advisorId")], null)}, {"name": $.call(_required_nullable_string, [value, "name", ($.str(path) + ".name")], null)}, {"job_title": $.call(_required_nullable_string, [value, "jobTitle", ($.str(path) + ".jobTitle")], null)}, {"email": $.call(_required_nullable_string, [value, "email", ($.str(path) + ".email")], null)}, {"image_url": $.call(_required_nullable_string, [value, "imageUrl", ($.str(path) + ".imageUrl")], null)}));
}

export function _parse_time_slot(value: Record<string, unknown>, path: string): ServiceAppointmentTimeSlot;
/** Translated upstream _parse_time_slot. */
export function _parse_time_slot(...__args: any[]): any {
let index, item, item_path, parsed_times, times, timeslot;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
times = $.call(_required_field, [value, "timeslots", ($.str(path) + ".timeslots")], null);
if ($.truth(!$.truth($.call($.isinstance, [times, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + ".timeslots is not a list")], null);
}
parsed_times = [];
for ([index, item] of $.iterable($.call($.enumerate, [times], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(parsed_times, "append"), [null], null);
continue;
}
item_path = ($.str(path) + ".timeslots[" + $.str(index) + "]");
timeslot = $.call(_typed_object, [item, item_path], null);
$.call($.attr(parsed_times, "append"), [$.call(_required_datetime, [timeslot, "time", ($.str(item_path) + ".time")], null)], null);
}
return $.call(ServiceAppointmentTimeSlot, [], Object.assign({}, {"is_open": $.call(_required_nullable_bool, [value, "isOpen", ($.str(path) + ".isOpen")], null)}, {"date": $.call(_required_datetime, [value, "date", ($.str(path) + ".date")], null)}, {"times": $.call($.tuple, [parsed_times], null)}));
}

export function _parse_service_appointment(value: Record<string, unknown>, path: string): ServiceAppointment;
/** Translated upstream _parse_service_appointment. */
export function _parse_service_appointment(...__args: any[]): any {
let advisor, advisor_path, customer, customer_path, dealership, dealership_path, drop_off, drop_off_path, operations, pick_up, pick_up_path, transport, transport_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
dealership_path = ($.str(path) + ".dealership");
dealership = $.call(_required_optional_typed_object, [value, "dealership", dealership_path], null);
if ($.truth(((dealership === null)))) {
throw $.call(ResponseError, [($.str(dealership_path) + " is null")], null);
}
customer_path = ($.str(path) + ".customer");
customer = $.call(_required_optional_typed_object, [value, "customer", customer_path], null);
if ($.truth(((customer === null)))) {
throw $.call(ResponseError, [($.str(customer_path) + " is null")], null);
}
pick_up_path = ($.str(path) + ".pickUpAddress");
pick_up = $.call(_required_optional_typed_object, [value, "pickUpAddress", pick_up_path], null);
drop_off_path = ($.str(path) + ".dropOffAddress");
drop_off = $.call(_required_optional_typed_object, [value, "dropOffAddress", drop_off_path], null);
transport_path = ($.str(path) + ".transport");
transport = $.call(_required_optional_typed_object, [value, "transport", transport_path], null);
advisor_path = ($.str(path) + ".advisor");
advisor = $.call(_required_optional_typed_object, [value, "advisor", advisor_path], null);
operations = $.call(_nullable_list, [value, "serviceOperations", ($.str(path) + ".serviceOperations"), _parse_appointment_operation], null);
if ($.truth(((operations === null)))) {
throw $.call(ResponseError, [($.str(path) + ".serviceOperations is null")], null);
}
return $.call(ServiceAppointment, [], Object.assign({}, {"appointment_id": $.call(_required_nullable_string, [value, "appointmentId", ($.str(path) + ".appointmentId")], null)}, {"appointment_date": $.call(_required_datetime, [value, "appointmentDate", ($.str(path) + ".appointmentDate")], null)}, {"dealer_id": $.call(_required_string, [value, "dealerId", ($.str(path) + ".dealerId")], null)}, {"editable": $.call(_required_nullable_bool, [value, "isEditable", ($.str(path) + ".isEditable")], null)}, {"dealership": $.call(_parse_dealership, [dealership, dealership_path], null)}, {"pick_up_address": $.call(_parse_service_address, [pick_up, pick_up_path], Object.assign({}, {"pick_up": true}))}, {"drop_off_address": $.call(_parse_service_address, [drop_off, drop_off_path], Object.assign({}, {"pick_up": false}))}, {"transport": ($.truth(((transport === null))) ? null : $.call(_parse_transportation_option, [transport, transport_path], null))}, {"contact_methods": $.call(_nullable_list, [customer, "contactMethod", ($.str(customer_path) + ".contactMethod"), _parse_contact_method], null)}, {"service_operations": operations}, {"advisor": ($.truth(((advisor === null))) ? null : $.call(_parse_service_advisor, [advisor, advisor_path], null))}, {"additional_comments": $.call(_required_nullable_string, [value, "additionalComments", ($.str(path) + ".additionalComments")], null)}));
}

export function _parse_dealership(value: Record<string, unknown>, path: string): ServiceDealership;
/** Translated upstream _parse_dealership. */
export function _parse_dealership(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(ServiceDealership, [], Object.assign({}, {"name": $.call(_required_nullable_string, [value, "dealerName", ($.str(path) + ".dealerName")], null)}, {"address_line_1": $.call(_required_nullable_string, [value, "dealerAddressLine1", ($.str(path) + ".dealerAddressLine1")], null)}, {"address_line_2": $.call(_required_nullable_string, [value, "dealerAddressLine2", ($.str(path) + ".dealerAddressLine2")], null)}, {"city_name": $.call(_required_nullable_string, [value, "dealerCityName", ($.str(path) + ".dealerCityName")], null)}, {"state_code": $.call(_required_nullable_string, [value, "dealerStateCode", ($.str(path) + ".dealerStateCode")], null)}, {"phone_number": $.call(_required_nullable_string, [value, "dealerPhoneNumber", ($.str(path) + ".dealerPhoneNumber")], null)}));
}

export function _parse_service_address(value: Record<string, unknown> | null, path: string, options: { pick_up: boolean }): ServiceAddress | null;
/** Translated upstream _parse_service_address. */
export function _parse_service_address(...__args: any[]): any {
let {"value": value, "path": path, "pick_up": pick_up} = $.bind(__args, ["value", "path"], {}, ["pick_up"], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(ServiceAddress, [], Object.assign({}, {"address_1": $.call(_required_nullable_string, [value, "address1", ($.str(path) + ".address1")], null)}, {"address_2": $.call(_required_nullable_string, [value, "address2", ($.str(path) + ".address2")], null)}, {"city": $.call(_required_nullable_string, [value, "city", ($.str(path) + ".city")], null)}, {"state": $.call(_required_nullable_string, [value, "state", ($.str(path) + ".state")], null)}, {"postal_code": $.call(_required_nullable_string, [value, "postalCode", ($.str(path) + ".postalCode")], null)}, {"country": $.call(_required_nullable_string, [value, "country", ($.str(path) + ".country")], null)}, {"neighbourhood": ($.truth(pick_up) ? $.call(_optional_selected_nullable_string, [value, "neighbourhood", path], null) : null)}, {"district": $.call(_optional_selected_nullable_string, [value, "district", path], null)}, {"street_number": $.call(_optional_selected_nullable_string, [value, "streetNumber", path], null)}));
}

export function _parse_transportation_option(value: Record<string, unknown>, path: string): ServiceTransportationOption;
/** Translated upstream _parse_transportation_option. */
export function _parse_transportation_option(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(ServiceTransportationOption, [], Object.assign({}, {"code": $.call(_required_string, [value, "code", ($.str(path) + ".code")], null)}, {"name": $.call(_required_string, [value, "name", ($.str(path) + ".name")], null)}, {"is_valet": $.call(_required_bool, [value, "isValet", ($.str(path) + ".isValet")], null)}, {"is_loaner_available": $.call(_required_bool, [value, "isLoanerAvailable", ($.str(path) + ".isLoanerAvailable")], null)}));
}

export function _parse_contact_method(value: Record<string, unknown>, path: string): ServiceContactMethod;
/** Translated upstream _parse_contact_method. */
export function _parse_contact_method(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(ServiceContactMethod, [], Object.assign({}, {"type": $.call(_enum, [$.call(_required_field, [value, "type", ($.str(path) + ".type")], null), ServiceContactMethodType, ($.str(path) + ".type")], null)}, {"value": $.call(_required_string, [value, "value", ($.str(path) + ".value")], null)}));
}

export function _parse_appointment_operation(value: Record<string, unknown>, path: string): AppointmentServiceOperation;
/** Translated upstream _parse_appointment_operation. */
export function _parse_appointment_operation(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(AppointmentServiceOperation, [], Object.assign({}, {"operation_code_description": $.call(_required_nullable_string, [value, "opCodeDescription", ($.str(path) + ".opCodeDescription")], null)}, {"operation_code_id": $.call(_required_nullable_string, [value, "opCodeID", ($.str(path) + ".opCodeID")], null)}, {"customer_comments": $.call(_required_nullable_string, [value, "customerComments", ($.str(path) + ".customerComments")], null)}, {"category_name": $.call(_required_nullable_string, [value, "serviceCategoryName", ($.str(path) + ".serviceCategoryName")], null)}, {"description": $.call(_required_nullable_string, [value, "serviceOperationsDescription", ($.str(path) + ".serviceOperationsDescription")], null)}));
}

export function _parse_service_category(value: Record<string, unknown>, path: string): ServiceCategory;
/** Translated upstream _parse_service_category. */
export function _parse_service_category(...__args: any[]): any {
let operations;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
operations = $.call(_nullable_list, [value, "serviceOperations", ($.str(path) + ".serviceOperations"), _parse_category_operation], null);
if ($.truth(((operations === null)))) {
throw $.call(ResponseError, [($.str(path) + ".serviceOperations is null")], null);
}
return $.call(ServiceCategory, [], Object.assign({}, {"category_id": $.call(_required_int, [value, "serviceCategoryId", ($.str(path) + ".serviceCategoryId")], null)}, {"name": $.call(_required_string, [value, "serviceCategoryName", ($.str(path) + ".serviceCategoryName")], null)}, {"description": $.call(_required_string, [value, "serviceCategoryDescription", ($.str(path) + ".serviceCategoryDescription")], null)}, {"operations": operations}));
}

export function _parse_category_operation(value: Record<string, unknown>, path: string): ServiceCategoryOperation;
/** Translated upstream _parse_category_operation. */
export function _parse_category_operation(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(ServiceCategoryOperation, [], Object.assign({}, {"operation_code_id": $.call(_required_int, [value, "opCodeID", ($.str(path) + ".opCodeID")], null)}, {"description": $.call(_required_string, [value, "opCodeDescription", ($.str(path) + ".opCodeDescription")], null)}));
}

export function _parse_service_operation(value: Record<string, unknown>, path: string): DealerServiceOperation;
/** Translated upstream _parse_service_operation. */
export function _parse_service_operation(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(DealerServiceOperation, [], Object.assign({}, {"operation_code_id": $.call(_required_nullable_string, [value, "opCodeID", ($.str(path) + ".opCodeID")], null)}, {"operation_code_description": $.call(_required_nullable_string, [value, "opCodeDescription", ($.str(path) + ".opCodeDescription")], null)}, {"customer_comments": $.call(_required_nullable_string, [value, "customerComments", ($.str(path) + ".customerComments")], null)}, {"description": $.call(_required_nullable_string, [value, "serviceOperationsDescription", ($.str(path) + ".serviceOperationsDescription")], null)}, {"package": $.call(_required_string, [value, "package", ($.str(path) + ".package")], null)}, {"maintenance": $.call(_required_nullable_bool, [value, "maintenance", ($.str(path) + ".maintenance")], null)}, {"validation": $.call(_required_nullable_bool, [value, "validation", ($.str(path) + ".validation")], null)}, {"price": $.call(_required_nullable_float, [value, "price", ($.str(path) + ".price")], null)}, {"labor_hours": $.call(_required_nullable_float, [value, "laborHours", ($.str(path) + ".laborHours")], null)}, {"discounts": $.call(_nullable_list, [value, "discounts", ($.str(path) + ".discounts"), _parse_discount], null)}));
}

export function _parse_discount(value: Record<string, unknown>, path: string): ServiceDiscount;
/** Translated upstream _parse_discount. */
export function _parse_discount(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(ServiceDiscount, [], Object.assign({}, {"code": $.call(_required_nullable_string, [value, "code", ($.str(path) + ".code")], null)}, {"description": $.call(_required_nullable_string, [value, "description", ($.str(path) + ".description")], null)}, {"price": $.call(_required_nullable_float, [value, "price", ($.str(path) + ".price")], null)}));
}

export function _parse_service_operations_at_interval(value: Record<string, unknown>, path: string): ServiceOperationsAtInterval;
/** Translated upstream _parse_service_operations_at_interval. */
export function _parse_service_operations_at_interval(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(ServiceOperationsAtInterval, [], Object.assign({}, {"mileage": $.call(_required_nullable_int, [value, "intervalMileage", ($.str(path) + ".intervalMileage")], null)}, {"operations": $.call(_nullable_list, [value, "serviceOperations", ($.str(path) + ".serviceOperations"), _parse_service_operation], null)}));
}
