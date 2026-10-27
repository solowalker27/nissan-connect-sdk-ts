// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _parse_service_address, _parse_service_advisor, _parse_service_appointment, _parse_service_category, _parse_service_operation, _parse_service_operations_at_interval, _parse_time_slot, _parse_transportation_option } from "./_dealer_appointment_parsing";
export { _parse_service_address, _parse_service_advisor, _parse_service_appointment, _parse_service_category, _parse_service_operation, _parse_service_operations_at_interval, _parse_time_slot, _parse_transportation_option };

import { _parse_coupon, _parse_coupon_image, _parse_dealer, _parse_dealer_summary, _parse_maintenance_visit } from "./_dealer_detail_parsing";
export { _parse_coupon, _parse_coupon_image, _parse_dealer, _parse_dealer_summary, _parse_maintenance_visit };

import { _nullable_list, _required_datetime } from "./_dealer_value_parsing";
export { _nullable_list, _required_datetime };

import { _required_field, _required_nullable_bool, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename } from "./account_parsing";
export { _required_field, _required_nullable_bool, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename };

import { CancelServiceAppointmentResult, CreatedServiceAppointment, Dealer, DealerDealsAndImages, DealerServiceOperation, DealerSummary, MaintenanceVisits, PreferredDealerUpdated, PreferredDealerUpdateError, PreferredDealerUpdateResult, ServiceAdvisor, ServiceAppointment, ServiceAppointmentCreateResult, ServiceAppointmentTimeSlot, ServiceAppointmentUpdateError, ServiceAppointmentUpdateResult, ServiceCategory, ServiceOperationsAtInterval, ServiceTransportationOption, UnselectedDealerResult, UpdatedServiceAppointment } from "./dealer_models";
export { CancelServiceAppointmentResult, CreatedServiceAppointment, Dealer, DealerDealsAndImages, DealerServiceOperation, DealerSummary, MaintenanceVisits, PreferredDealerUpdated, PreferredDealerUpdateError, PreferredDealerUpdateResult, ServiceAdvisor, ServiceAppointment, ServiceAppointmentCreateResult, ServiceAppointmentTimeSlot, ServiceAppointmentUpdateError, ServiceAppointmentUpdateResult, ServiceCategory, ServiceOperationsAtInterval, ServiceTransportationOption, UnselectedDealerResult, UpdatedServiceAppointment };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function parse_all_dealers(data: Record<string, unknown>): ReadonlyArray<DealerSummary | null> | null;
/** Parse the nullable compact dealer list. */
export function parse_all_dealers(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable compact dealer list. */
return $.call(_nullable_list, [data, "dealers", "dealers", _parse_dealer_summary], null);
}

export function parse_dealers(data: Record<string, unknown>): ReadonlyArray<Dealer | null> | null;
/** Parse nullable full dealer search results. */
export function parse_dealers(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable full dealer search results. */
return $.call(_nullable_list, [data, "dealers", "dealers", _parse_dealer], null);
}

export function parse_dealer(data: Record<string, unknown>): Dealer | null;
/** Parse one nullable full dealer result. */
export function parse_dealer(...__args: any[]): any {
let root;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse one nullable full dealer result. */
root = $.call(_root, [data, "dealer"], null);
return ($.truth(((root === null))) ? null : $.call(_parse_dealer, [root, "dealer"], null));
}

export function parse_dealer_deals_and_images(data: Record<string, unknown>): DealerDealsAndImages;
/** Parse the two nullable dealer coupon collections. */
export function parse_dealer_deals_and_images(...__args: any[]): any {
let coupon_images, coupons, deals, images;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the two nullable dealer coupon collections. */
deals = $.call(_root, [data, "dealsByDealerId"], null);
images = $.call(_root, [data, "dealsImagesByDealerId"], null);
coupons = null;
if ($.truth(((deals !== null)))) {
coupons = $.call(_nullable_list, [deals, "coupon", "dealsByDealerId.coupon", _parse_coupon], null);
}
coupon_images = null;
if ($.truth(((images !== null)))) {
coupon_images = $.call(_nullable_list, [images, "coupons", "dealsImagesByDealerId.coupons", _parse_coupon_image], null);
}
return $.call(DealerDealsAndImages, [coupons, coupon_images], null);
}

export function parse_maintenance_visits(data: Record<string, unknown>): MaintenanceVisits | null;
/** Parse generated maintenance schedule visits. */
export function parse_maintenance_visits(...__args: any[]): any {
let schedule, schedule_path, viewer;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse generated maintenance schedule visits. */
viewer = $.call(_root, [data, "viewer"], null);
if ($.truth(((viewer === null)))) {
return null;
}
schedule_path = "viewer.Schedule";
schedule = $.call(_required_optional_typed_object, [viewer, "Schedule", schedule_path], null);
if ($.truth(((schedule === null)))) {
throw $.call(ResponseError, [($.str(schedule_path) + " is null")], null);
}
return $.call(MaintenanceVisits, [$.call(_nullable_list, [schedule, "Visits", ($.str(schedule_path) + ".Visits"), _parse_maintenance_visit], null)], null);
}

export function parse_service_advisors(data: Record<string, unknown>): ReadonlyArray<ServiceAdvisor | null> | null;
/** Parse nullable service advisor results. */
export function parse_service_advisors(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable service advisor results. */
return $.call(_nullable_list, [data, "serviceAdvisors", "serviceAdvisors", _parse_service_advisor], null);
}

export function parse_service_appointment_time_slots(data: Record<string, unknown>): ReadonlyArray<ServiceAppointmentTimeSlot | null>;
/** Parse the required service appointment time-slot list. */
export function parse_service_appointment_time_slots(...__args: any[]): any {
let index, item, path, result, value;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the required service appointment time-slot list. */
value = $.call(_required_field, [data, "serviceAppointmentTimeSlots", "serviceAppointmentTimeSlots"], null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, ["serviceAppointmentTimeSlots is not a list"], null);
}
result = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(result, "append"), [null], null);
continue;
}
path = ("serviceAppointmentTimeSlots[" + $.str(index) + "]");
$.call($.attr(result, "append"), [$.call(_parse_time_slot, [$.call(_typed_object, [item, path], null), path], null)], null);
}
return $.call($.tuple, [result], null);
}

export function parse_service_appointments(data: Record<string, unknown>): ReadonlyArray<ServiceAppointment | null> | null;
/** Parse nullable existing service appointments. */
export function parse_service_appointments(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable existing service appointments. */
return $.call(_nullable_list, [data, "serviceAppointments", "serviceAppointments", _parse_service_appointment], null);
}

export function parse_service_categories(data: Record<string, unknown>): ReadonlyArray<ServiceCategory | null> | null;
/** Parse nullable service categories. */
export function parse_service_categories(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable service categories. */
return $.call(_nullable_list, [data, "serviceCategories", "serviceCategories", _parse_service_category], null);
}

export function parse_service_operations(data: Record<string, unknown>): ReadonlyArray<DealerServiceOperation | null> | null;
/** Parse nullable service operations. */
export function parse_service_operations(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable service operations. */
return $.call(_nullable_list, [data, "serviceOperations", "serviceOperations", _parse_service_operation], null);
}

export function parse_service_operations_by_mileage(data: Record<string, unknown>): ReadonlyArray<ServiceOperationsAtInterval | null> | null;
/** Parse service operations grouped by closest mileage intervals. */
export function parse_service_operations_by_mileage(...__args: any[]): any {
let root;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse service operations grouped by closest mileage intervals. */
root = $.call(_root, [data, "serviceOperationsByMileage"], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(_nullable_list, [root, "servicesAtClosestIntervals", "serviceOperationsByMileage.servicesAtClosestIntervals", _parse_service_operations_at_interval], null);
}

export function parse_transportation_options(data: Record<string, unknown>): ReadonlyArray<ServiceTransportationOption | null> | null;
/** Parse nullable appointment transportation options. */
export function parse_transportation_options(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable appointment transportation options. */
return $.call(_nullable_list, [data, "transportationOptions", "transportationOptions", _parse_transportation_option], null);
}

export function parse_cancel_service_appointment(data: Record<string, unknown>): CancelServiceAppointmentResult | null;
/** Parse nullable service appointment cancellation status. */
export function parse_cancel_service_appointment(...__args: any[]): any {
let field, root;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable service appointment cancellation status. */
field = "cancelServiceAppointment";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(CancelServiceAppointmentResult, [$.call(_required_nullable_bool, [root, "success", ($.str(field) + ".success")], null)], null);
}

export function parse_create_service_appointment(data: Record<string, unknown>): ServiceAppointmentCreateResult | null;
/** Parse the selected service appointment creation branch. */
export function parse_create_service_appointment(...__args: any[]): any {
let field, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the selected service appointment creation branch. */
field = "createServiceAppointment";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "ServiceAppointment")))) {
return $.call(CreatedServiceAppointment, [$.call(_required_nullable_string, [root, "appointmentId", ($.str(field) + ".appointmentId")], null)], null);
}
return $.call(UnselectedDealerResult, [typename], null);
}

export function parse_update_service_appointment(data: Record<string, unknown>): ServiceAppointmentUpdateResult | null;
/** Parse every selected service appointment update union branch. */
export function parse_update_service_appointment(...__args: any[]): any {
let field, pick_up, pick_up_path, root, transport, transport_path, typename, vehicle, vehicle_path;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every selected service appointment update union branch. */
field = "updateServiceAppointment";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "ServiceAppointmentError")))) {
return $.call(ServiceAppointmentUpdateError, [], Object.assign({}, {"message": $.call(_required_string, [root, "message", ($.str(field) + ".message")], null)}, {"error": $.call(_required_nullable_string, [root, "error", ($.str(field) + ".error")], null)}));
}
if ($.truth((!$.eq(typename, "ServiceAppointment")))) {
return $.call(UnselectedDealerResult, [typename], null);
}
pick_up_path = ($.str(field) + ".pickUpAddress");
pick_up = $.call(_required_optional_typed_object, [root, "pickUpAddress", pick_up_path], null);
transport_path = ($.str(field) + ".transport");
transport = $.call(_required_optional_typed_object, [root, "transport", transport_path], null);
vehicle_path = ($.str(field) + ".vehicle");
vehicle = $.call(_required_optional_typed_object, [root, "vehicle", vehicle_path], null);
if ($.truth(((vehicle === null)))) {
throw $.call(ResponseError, [($.str(vehicle_path) + " is null")], null);
}
return $.call(UpdatedServiceAppointment, [], Object.assign({}, {"dealer_id": $.call(_required_string, [root, "dealerId", ($.str(field) + ".dealerId")], null)}, {"appointment_id": $.call(_required_nullable_string, [root, "appointmentId", ($.str(field) + ".appointmentId")], null)}, {"appointment_date": $.call(_required_datetime, [root, "appointmentDate", ($.str(field) + ".appointmentDate")], null)}, {"additional_comments": $.call(_required_nullable_string, [root, "additionalComments", ($.str(field) + ".additionalComments")], null)}, {"pick_up_address": $.call(_parse_service_address, [pick_up, pick_up_path], Object.assign({}, {"pick_up": true}))}, {"transport_name": ($.truth(((transport === null))) ? null : $.call(_required_string, [transport, "name", ($.str(transport_path) + ".name")], null))}, {"type": $.call(_required_string, [root, "type", ($.str(field) + ".type")], null)}, {"vin": $.call(_required_string, [vehicle, "vin", ($.str(vehicle_path) + ".vin")], null)}));
}

export function parse_update_vehicle_preferred_dealer(data: Record<string, unknown>): PreferredDealerUpdateResult | null;
/** Parse every generated preferred-dealer update union branch. */
export function parse_update_vehicle_preferred_dealer(...__args: any[]): any {
let field, root, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated preferred-dealer update union branch. */
field = "updateVehicle";
root = $.call(_root, [data, field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, field], null);
if ($.truth(($.eq(typename, "UpdateVehicleSuccessResponse")))) {
return $.call(PreferredDealerUpdated, [$.call(_required_nullable_string, [root, "preferredDealer", ($.str(field) + ".preferredDealer")], null)], null);
}
if ($.truth(($.contains(new Set(["RequiresAtLeastOneArgumentError", "InvalidVINError", "VINNotFoundError", "UpdateVehicleGeneralError"]), typename)))) {
return $.call(PreferredDealerUpdateError, [typename, $.call(_required_string, [root, "message", ($.str(field) + ".message")], null)], null);
}
return $.call(UnselectedDealerResult, [typename], null);
}
