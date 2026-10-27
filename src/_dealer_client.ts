// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const datetime = $.datetime;

import * as operations from "./operations";

import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };

import { MaintenanceMileageInput, ServiceAppointmentInput, ServiceCode, ServiceLocationType, all_dealers_variables, cancel_service_appointment_variables, dealers_by_search_variables, maintenance_visits_variables, service_advisors_variables, service_appointment_variables, service_appointments_variables, service_time_slots_variables, update_service_appointment_variables } from "./dealer_inputs";
export { MaintenanceMileageInput, ServiceAppointmentInput, ServiceCode, ServiceLocationType, all_dealers_variables, cancel_service_appointment_variables, dealers_by_search_variables, maintenance_visits_variables, service_advisors_variables, service_appointment_variables, service_appointments_variables, service_time_slots_variables, update_service_appointment_variables };

import { CancelServiceAppointmentResult, Dealer, DealerDealsAndImages, DealerServiceOperation, DealerSummary, MaintenanceVisits, PreferredDealerUpdateResult, ServiceAdvisor, ServiceAppointment, ServiceAppointmentCreateResult, ServiceAppointmentTimeSlot, ServiceAppointmentUpdateResult, ServiceCategory, ServiceOperationsAtInterval, ServiceTransportationOption } from "./dealer_models";
export { CancelServiceAppointmentResult, Dealer, DealerDealsAndImages, DealerServiceOperation, DealerSummary, MaintenanceVisits, PreferredDealerUpdateResult, ServiceAdvisor, ServiceAppointment, ServiceAppointmentCreateResult, ServiceAppointmentTimeSlot, ServiceAppointmentUpdateResult, ServiceCategory, ServiceOperationsAtInterval, ServiceTransportationOption };

import { parse_all_dealers, parse_cancel_service_appointment, parse_create_service_appointment, parse_dealer, parse_dealer_deals_and_images, parse_dealers, parse_maintenance_visits, parse_service_advisors, parse_service_appointment_time_slots, parse_service_appointments, parse_service_categories, parse_service_operations, parse_service_operations_by_mileage, parse_transportation_options, parse_update_service_appointment, parse_update_vehicle_preferred_dealer } from "./dealer_parsing";
export { parse_all_dealers, parse_cancel_service_appointment, parse_create_service_appointment, parse_dealer, parse_dealer_deals_and_images, parse_dealers, parse_maintenance_visits, parse_service_advisors, parse_service_appointment_time_slots, parse_service_appointments, parse_service_categories, parse_service_operations, parse_service_operations_by_mileage, parse_transportation_options, parse_update_service_appointment, parse_update_vehicle_preferred_dealer };

import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };

/** Translated upstream _DealerClientMixin. */
export class _DealerClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _DealerClientMixin, __args); }
async_get_all_dealers(options?: { vin?: string | UnsetType | null; page_size?: number | UnsetType | null }): Promise<ReadonlyArray<DealerSummary | null> | null>;
/** Return the compact dealer list with optional vehicle and page filters. */
async async_get_all_dealers(...__args: any[]): any {
let data;
let {"vin": vin, "page_size": page_size} = $.bind(__args, [], {"vin": UNSET, "page_size": UNSET}, ["vin", "page_size"], null, null);
/** Return the compact dealer list with optional vehicle and page filters. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["AllDealers", $.attr(operations, "ALL_DEALERS"), $.call(all_dealers_variables, [vin, page_size], null)], null));
return $.call(parse_all_dealers, [data], null);
}
async_get_dealers(postal_code: string): Promise<ReadonlyArray<Dealer | null> | null>;
/** Return dealers matching a postal code. */
async async_get_dealers(...__args: any[]): any {
let data;
let {"postal_code": postal_code} = $.bind(__args, ["postal_code"], {}, [], null, null);
/** Return dealers matching a postal code. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["Dealers", $.attr(operations, "DEALERS"), Object.assign({}, {["zip"]: postal_code})], null));
return $.call(parse_dealers, [data], null);
}
async_search_dealers(options?: { vin?: string | UnsetType | null; service_code?: ServiceCode | UnsetType | null; radius?: number | UnsetType | null; latitude?: number | UnsetType | null; longitude?: number | UnsetType | null }): Promise<ReadonlyArray<Dealer | null> | null>;
/** Search dealers with independently optional vehicle and location filters. */
async async_search_dealers(...__args: any[]): any {
let data;
let {"vin": vin, "service_code": service_code, "radius": radius, "latitude": latitude, "longitude": longitude} = $.bind(__args, [], {"vin": UNSET, "service_code": UNSET, "radius": UNSET, "latitude": UNSET, "longitude": UNSET}, ["vin", "service_code", "radius", "latitude", "longitude"], null, null);
/** Search dealers with independently optional vehicle and location filters. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DealersBySearch", $.attr(operations, "DEALERS_BY_SEARCH"), $.call(dealers_by_search_variables, [], Object.assign({}, {"vin": vin}, {"service_code": service_code}, {"radius": radius}, {"latitude": latitude}, {"longitude": longitude}))], null));
return $.call(parse_dealers, [data], null);
}
async_get_dealer_deals_and_images(dealer_id: string): Promise<DealerDealsAndImages>;
/** Return coupons and coupon images for a dealer. */
async async_get_dealer_deals_and_images(...__args: any[]): any {
let data;
let {"dealer_id": dealer_id} = $.bind(__args, ["dealer_id"], {}, [], null, null);
/** Return coupons and coupon images for a dealer. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DealsAndImagesByDealerId", $.attr(operations, "DEALS_AND_IMAGES_BY_DEALER_ID"), Object.assign({}, {["dealerId"]: dealer_id})], null));
return $.call(parse_dealer_deals_and_images, [data], null);
}
async_get_dealer(dealer_id: string): Promise<Dealer | null>;
/** Return one dealer by identifier. */
async async_get_dealer(...__args: any[]): any {
let data;
let {"dealer_id": dealer_id} = $.bind(__args, ["dealer_id"], {}, [], null, null);
/** Return one dealer by identifier. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GetDealerById", $.attr(operations, "GET_DEALER_BY_ID"), Object.assign({}, {["dealerId"]: dealer_id})], null));
return $.call(parse_dealer, [data], null);
}
async_generate_all_maintenance_visits(vin: string, mileage: MaintenanceMileageInput, severity_id: string, past_visits: number, future_visits: number): Promise<MaintenanceVisits | null>;
/** Generate the requested past and future maintenance visits. */
async async_generate_all_maintenance_visits(...__args: any[]): any {
let data;
let {"vin": vin, "mileage": mileage, "severity_id": severity_id, "past_visits": past_visits, "future_visits": future_visits} = $.bind(__args, ["vin", "mileage", "severity_id", "past_visits", "future_visits"], {}, [], null, null);
/** Generate the requested past and future maintenance visits. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GenerateAllVisits", $.attr(operations, "GENERATE_ALL_VISITS"), $.call(maintenance_visits_variables, [vin, mileage, severity_id, past_visits, future_visits], null)], null));
return $.call(parse_maintenance_visits, [data], null);
}
async_generate_next_maintenance_visit(vin: string, mileage: MaintenanceMileageInput, severity_id: string, past_visits: number, future_visits: number): Promise<MaintenanceVisits | null>;
/** Generate the next maintenance visit with a severity identifier. */
async async_generate_next_maintenance_visit(...__args: any[]): any {
let data;
let {"vin": vin, "mileage": mileage, "severity_id": severity_id, "past_visits": past_visits, "future_visits": future_visits} = $.bind(__args, ["vin", "mileage", "severity_id", "past_visits", "future_visits"], {}, [], null, null);
/** Generate the next maintenance visit with a severity identifier. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GenerateNextVisit", $.attr(operations, "GENERATE_NEXT_VISIT"), $.call(maintenance_visits_variables, [vin, mileage, severity_id, past_visits, future_visits], null)], null));
return $.call(parse_maintenance_visits, [data], null);
}
async_generate_next_maintenance_visit_no_severity(vin: string, mileage: MaintenanceMileageInput, severity_id: string, past_visits: number, future_visits: number): Promise<MaintenanceVisits | null>;
/** Call Nissan's separately named no-severity maintenance operation. */
async async_generate_next_maintenance_visit_no_severity(...__args: any[]): any {
let data;
let {"vin": vin, "mileage": mileage, "severity_id": severity_id, "past_visits": past_visits, "future_visits": future_visits} = $.bind(__args, ["vin", "mileage", "severity_id", "past_visits", "future_visits"], {}, [], null, null);
/** Call Nissan's separately named no-severity maintenance operation. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["GenerateNextVisitNoSeverity", $.attr(operations, "GENERATE_NEXT_VISIT_NO_SEVERITY"), $.call(maintenance_visits_variables, [vin, mileage, severity_id, past_visits, future_visits], null)], null));
return $.call(parse_maintenance_visits, [data], null);
}
async_get_service_advisors(dealer_id: string, service_operation_ids: ReadonlyArray<string>, options?: { vin?: string | UnsetType | null }): Promise<ReadonlyArray<ServiceAdvisor | null> | null>;
/** Return service advisors for selected dealer operations. */
async async_get_service_advisors(...__args: any[]): any {
let data;
let {"dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "vin": vin} = $.bind(__args, ["dealer_id", "service_operation_ids"], {"vin": UNSET}, ["vin"], null, null);
/** Return service advisors for selected dealer operations. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ServiceAdvisors", $.attr(operations, "SERVICE_ADVISORS"), $.call(service_advisors_variables, [dealer_id, service_operation_ids, vin], null)], null));
return $.call(parse_service_advisors, [data], null);
}
async_get_service_appointment_time_slots(dealer_id: string, service_operation_ids: ReadonlyArray<string>, start_date: $.DateValue, options?: { advisor_id?: string | UnsetType | null; transportation_code?: string | UnsetType | null; location_type?: ServiceLocationType | UnsetType | null; vin?: string | UnsetType | null }): Promise<ReadonlyArray<ServiceAppointmentTimeSlot | null>>;
/** Return available service appointment time slots. */
async async_get_service_appointment_time_slots(...__args: any[]): any {
let data;
let {"dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "start_date": start_date, "advisor_id": advisor_id, "transportation_code": transportation_code, "location_type": location_type, "vin": vin} = $.bind(__args, ["dealer_id", "service_operation_ids", "start_date"], {"advisor_id": UNSET, "transportation_code": UNSET, "location_type": UNSET, "vin": UNSET}, ["advisor_id", "transportation_code", "location_type", "vin"], null, null);
/** Return available service appointment time slots. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ServiceAppointmentTimeSlots", $.attr(operations, "SERVICE_APPOINTMENT_TIME_SLOTS"), $.call(service_time_slots_variables, [dealer_id, service_operation_ids, start_date], Object.assign({}, {"advisor_id": advisor_id}, {"transportation_code": transportation_code}, {"location_type": location_type}, {"vin": vin}))], null));
return $.call(parse_service_appointment_time_slots, [data], null);
}
async_get_service_appointments(vin: string, options?: { start_date?: $.DateValue | UnsetType | null; end_date?: $.DateValue | UnsetType | null }): Promise<ReadonlyArray<ServiceAppointment | null> | null>;
/** Return service appointments for a vehicle and optional date-time range. */
async async_get_service_appointments(...__args: any[]): any {
let data;
let {"vin": vin, "start_date": start_date, "end_date": end_date} = $.bind(__args, ["vin"], {"start_date": UNSET, "end_date": UNSET}, ["start_date", "end_date"], null, null);
/** Return service appointments for a vehicle and optional date-time range. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ServiceAppointments", $.attr(operations, "SERVICE_APPOINTMENTS"), $.call(service_appointments_variables, [vin, start_date, end_date], null)], null));
return $.call(parse_service_appointments, [data], null);
}
async_get_service_categories(): Promise<ReadonlyArray<ServiceCategory | null> | null>;
/** Return service categories and their operations. */
async async_get_service_categories(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return service categories and their operations. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ServiceCategories", $.attr(operations, "SERVICE_CATEGORIES"), {}], null));
return $.call(parse_service_categories, [data], null);
}
async_get_service_operations(vin: string, dealer_id: string): Promise<ReadonlyArray<DealerServiceOperation | null> | null>;
/** Return the service operations available for a vehicle and dealer. */
async async_get_service_operations(...__args: any[]): any {
let data;
let {"vin": vin, "dealer_id": dealer_id} = $.bind(__args, ["vin", "dealer_id"], {}, [], null, null);
/** Return the service operations available for a vehicle and dealer. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ServiceOperations", $.attr(operations, "SERVICE_OPERATIONS"), Object.assign({}, {["vin"]: vin}, {["dealerId"]: dealer_id})], null));
return $.call(parse_service_operations, [data], null);
}
async_get_service_operations_by_mileage(vin: string, dealer_id: string, mileage: number): Promise<ReadonlyArray<ServiceOperationsAtInterval | null> | null>;
/** Return service operations grouped around the supplied mileage. */
async async_get_service_operations_by_mileage(...__args: any[]): any {
let data;
let {"vin": vin, "dealer_id": dealer_id, "mileage": mileage} = $.bind(__args, ["vin", "dealer_id", "mileage"], {}, [], null, null);
/** Return service operations grouped around the supplied mileage. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ServiceOperationsByMileage", $.attr(operations, "SERVICE_OPERATIONS_BY_MILEAGE"), Object.assign({}, {["vin"]: vin}, {["dealerId"]: dealer_id}, {["mileage"]: mileage})], null));
return $.call(parse_service_operations_by_mileage, [data], null);
}
async_get_transportation_options(dealer_id: string, service_operation_ids: ReadonlyArray<string>, options?: { vin?: string | UnsetType | null }): Promise<ReadonlyArray<ServiceTransportationOption | null> | null>;
/** Return transportation options for selected dealer operations. */
async async_get_transportation_options(...__args: any[]): any {
let data;
let {"dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "vin": vin} = $.bind(__args, ["dealer_id", "service_operation_ids"], {"vin": UNSET}, ["vin"], null, null);
/** Return transportation options for selected dealer operations. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["TransportationOptions", $.attr(operations, "TRANSPORTATION_OPTIONS"), $.call(service_advisors_variables, [dealer_id, service_operation_ids, vin], null)], null));
return $.call(parse_transportation_options, [data], null);
}
async_cancel_service_appointment(appointment_id: string, dealer_id: string, options?: { vin?: string | UnsetType | null }): Promise<CancelServiceAppointmentResult | null>;
/** Cancel a service appointment. */
async async_cancel_service_appointment(...__args: any[]): any {
let data;
let {"appointment_id": appointment_id, "dealer_id": dealer_id, "vin": vin} = $.bind(__args, ["appointment_id", "dealer_id"], {"vin": UNSET}, ["vin"], null, null);
/** Cancel a service appointment. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CancelServiceAppointment", $.attr(operations, "CANCEL_SERVICE_APPOINTMENT"), $.call(cancel_service_appointment_variables, [appointment_id, dealer_id, vin], null)], null));
return $.call(parse_cancel_service_appointment, [data], null);
}
async_create_service_appointment(appointment: ServiceAppointmentInput): Promise<ServiceAppointmentCreateResult | null>;
/** Create a service appointment. */
async async_create_service_appointment(...__args: any[]): any {
let data;
let {"appointment": appointment} = $.bind(__args, ["appointment"], {}, [], null, null);
/** Create a service appointment. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreateServiceAppointment", $.attr(operations, "CREATE_SERVICE_APPOINTMENT"), $.call(service_appointment_variables, [appointment], null)], null));
return $.call(parse_create_service_appointment, [data], null);
}
async_update_service_appointment(appointment_id: string, appointment: ServiceAppointmentInput): Promise<ServiceAppointmentUpdateResult | null>;
/** Replace a service appointment's selected details. */
async async_update_service_appointment(...__args: any[]): any {
let data;
let {"appointment_id": appointment_id, "appointment": appointment} = $.bind(__args, ["appointment_id", "appointment"], {}, [], null, null);
/** Replace a service appointment's selected details. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateServiceAppointment", $.attr(operations, "UPDATE_SERVICE_APPOINTMENT"), $.call(update_service_appointment_variables, [appointment_id, appointment], null)], null));
return $.call(parse_update_service_appointment, [data], null);
}
async_update_vehicle_preferred_dealer(vin: string, preferred_dealer_id: string): Promise<PreferredDealerUpdateResult | null>;
/** Set the preferred dealer for a vehicle. */
async async_update_vehicle_preferred_dealer(...__args: any[]): any {
let data;
let {"vin": vin, "preferred_dealer_id": preferred_dealer_id} = $.bind(__args, ["vin", "preferred_dealer_id"], {}, [], null, null);
/** Set the preferred dealer for a vehicle. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpdateVehiclePreferredDealer", $.attr(operations, "UPDATE_VEHICLE_PREFERRED_DEALER"), Object.assign({}, {["vin"]: vin}, {["preferredDealerId"]: preferred_dealer_id})], null));
return $.call(parse_update_vehicle_preferred_dealer, [data], null);
}
}
$.classType(_DealerClientMixin);
export interface _DealerClientMixin extends _NissanClientBase {}
