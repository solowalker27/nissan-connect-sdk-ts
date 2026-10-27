// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

import { AddressInput, address_input } from "./common_inputs";
export { AddressInput, address_input };

import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };

import { DistanceUnit } from "./models";
export { DistanceUnit };

export const ServiceCode = $.enumType("ServiceCode", {"SERVICE": "SERVICE", "NISSAN_SALES": "NISSAN_SALES", "BODY_AND_PAINT": "BODY_AND_PAINT", "CUSTOMER_SERVICE": "CUSTOMER_SERVICE", "ONLINE_SUPPORT": "ONLINE_SUPPORT", "CLOSED_SALES": "CLOSED_SALES", "CLOSED_DISTRIBUTOR": "CLOSED_DISTRIBUTOR", "FLEET": "FLEET", "SERVICE_LEAF": "SERVICE_LEAF", "VALUE_ADVANTAGE": "VALUE_ADVANTAGE", "NITROGEN": "NITROGEN", "SALES": "SALES", "SHOWROOM": "SHOWROOM", "TEST_DRIVE": "TEST_DRIVE", "GENERAL": "GENERAL", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type ServiceCode = ReturnType<typeof ServiceCode>;

export const ServiceLocationType = $.enumType("ServiceLocationType", {"PICK_UP": "pick_up", "DROP_OFF": "drop_off", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type ServiceLocationType = ReturnType<typeof ServiceLocationType>;

/** Optional metric and imperial maintenance mileage values. */
export class MaintenanceMileageInput {
readonly monthly_km: number | UnsetType | null;
readonly total_km: number | UnsetType | null;
readonly monthly_mile: number | UnsetType | null;
readonly total_mile: number | UnsetType | null;
static __fields = [["monthly_km", UNSET], ["total_km", UNSET], ["monthly_mile", UNSET], ["total_mile", UNSET]];
constructor(monthly_km?: number | UnsetType | null, total_km?: number | UnsetType | null, monthly_mile?: number | UnsetType | null, total_mile?: number | UnsetType | null);
constructor(options: { monthly_km?: number | UnsetType | null; total_km?: number | UnsetType | null; monthly_mile?: number | UnsetType | null; total_mile?: number | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MaintenanceMileageInput, __args);  Object.freeze(this); }
}
$.classType(MaintenanceMileageInput);

/** Required customer phone and email for a service appointment. */
export class ServiceCustomerInput {
readonly phone: string;
readonly email: string;
static __fields = [["phone", $.MISSING], ["email", $.MISSING]];
constructor(phone: string, email: string);
constructor(options: { phone: string; email: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceCustomerInput, __args);  Object.freeze(this); }
}
$.classType(ServiceCustomerInput);

/** Optional nullable discount fields copied into an appointment operation. */
export class ServiceDiscountInput {
readonly code: string | UnsetType | null;
readonly description: string | UnsetType | null;
readonly price: number | UnsetType | null;
static __fields = [["code", UNSET], ["description", UNSET], ["price", UNSET]];
constructor(code?: string | UnsetType | null, description?: string | UnsetType | null, price?: number | UnsetType | null);
constructor(options: { code?: string | UnsetType | null; description?: string | UnsetType | null; price?: number | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceDiscountInput, __args);  Object.freeze(this); }
}
$.classType(ServiceDiscountInput);

/** Optional nullable fields for one requested service operation. */
export class ServiceOperationInput {
readonly operation_code_id: string | UnsetType | null;
readonly operation_code_description: string | UnsetType | null;
readonly customer_comments: string | UnsetType | null;
readonly description: string | UnsetType | null;
readonly $package: string | UnsetType | null;
readonly maintenance: boolean | UnsetType | null;
readonly validation: boolean | UnsetType | null;
readonly price: number | UnsetType | null;
readonly labor_hours: number | UnsetType | null;
readonly discounts: ReadonlyArray<ServiceDiscountInput | null> | UnsetType | null;
static __fields = [["operation_code_id", UNSET], ["operation_code_description", UNSET], ["customer_comments", UNSET], ["description", UNSET], ["package", UNSET], ["maintenance", UNSET], ["validation", UNSET], ["price", UNSET], ["labor_hours", UNSET], ["discounts", UNSET]];
constructor(operation_code_id?: string | UnsetType | null, operation_code_description?: string | UnsetType | null, customer_comments?: string | UnsetType | null, description?: string | UnsetType | null, $package?: string | UnsetType | null, maintenance?: boolean | UnsetType | null, validation?: boolean | UnsetType | null, price?: number | UnsetType | null, labor_hours?: number | UnsetType | null, discounts?: ReadonlyArray<ServiceDiscountInput | null> | UnsetType | null);
constructor(options: { operation_code_id?: string | UnsetType | null; operation_code_description?: string | UnsetType | null; customer_comments?: string | UnsetType | null; description?: string | UnsetType | null; $package?: string | UnsetType | null; maintenance?: boolean | UnsetType | null; validation?: boolean | UnsetType | null; price?: number | UnsetType | null; labor_hours?: number | UnsetType | null; discounts?: ReadonlyArray<ServiceDiscountInput | null> | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceOperationInput, __args);  Object.freeze(this); }
}
$.classType(ServiceOperationInput);

/** Optional nullable advisor fields copied into an appointment. */
export class ServiceAdvisorInput {
readonly advisor_id: string | UnsetType | null;
readonly name: string | UnsetType | null;
readonly job_title: string | UnsetType | null;
readonly email: string | UnsetType | null;
readonly image_url: string | UnsetType | null;
static __fields = [["advisor_id", UNSET], ["name", UNSET], ["job_title", UNSET], ["email", UNSET], ["image_url", UNSET]];
constructor(advisor_id?: string | UnsetType | null, name?: string | UnsetType | null, job_title?: string | UnsetType | null, email?: string | UnsetType | null, image_url?: string | UnsetType | null);
constructor(options: { advisor_id?: string | UnsetType | null; name?: string | UnsetType | null; job_title?: string | UnsetType | null; email?: string | UnsetType | null; image_url?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceAdvisorInput, __args);  Object.freeze(this); }
}
$.classType(ServiceAdvisorInput);

/** Optional nullable appointment transportation preferences. */
export class TransportationPreferencesInput {
readonly valet_required: boolean | UnsetType | null;
readonly loaner_required: boolean | UnsetType | null;
readonly pick_up_required: boolean | UnsetType | null;
readonly drop_off_required: boolean | UnsetType | null;
readonly reminders: string | UnsetType | null;
static __fields = [["valet_required", UNSET], ["loaner_required", UNSET], ["pick_up_required", UNSET], ["drop_off_required", UNSET], ["reminders", UNSET]];
constructor(valet_required?: boolean | UnsetType | null, loaner_required?: boolean | UnsetType | null, pick_up_required?: boolean | UnsetType | null, drop_off_required?: boolean | UnsetType | null, reminders?: string | UnsetType | null);
constructor(options: { valet_required?: boolean | UnsetType | null; loaner_required?: boolean | UnsetType | null; pick_up_required?: boolean | UnsetType | null; drop_off_required?: boolean | UnsetType | null; reminders?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TransportationPreferencesInput, __args);  Object.freeze(this); }
}
$.classType(TransportationPreferencesInput);

/** Required transportation identity and optional preference details. */
export class TransportationOptionInput {
readonly code: string;
readonly name: string;
readonly is_valet: boolean | UnsetType | null;
readonly is_loaner_available: boolean | UnsetType | null;
readonly comments: string | UnsetType | null;
readonly preferences: TransportationPreferencesInput | UnsetType | null;
static __fields = [["code", $.MISSING], ["name", $.MISSING], ["is_valet", UNSET], ["is_loaner_available", UNSET], ["comments", UNSET], ["preferences", UNSET]];
constructor(code: string, name: string, is_valet?: boolean | UnsetType | null, is_loaner_available?: boolean | UnsetType | null, comments?: string | UnsetType | null, preferences?: TransportationPreferencesInput | UnsetType | null);
constructor(options: { code: string; name: string; is_valet?: boolean | UnsetType | null; is_loaner_available?: boolean | UnsetType | null; comments?: string | UnsetType | null; preferences?: TransportationPreferencesInput | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, TransportationOptionInput, __args);  Object.freeze(this); }
}
$.classType(TransportationOptionInput);

/** Required appointment odometer value and unit. */
export class ServiceOdometerInput {
readonly unit: DistanceUnit;
readonly value: number;
static __fields = [["unit", $.MISSING], ["value", $.MISSING]];
constructor(unit: DistanceUnit, value: number);
constructor(options: { unit: DistanceUnit; value: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceOdometerInput, __args);  Object.freeze(this); }
}
$.classType(ServiceOdometerInput);

/** Complete service appointment input from the mobile schema. */
export class ServiceAppointmentInput {
readonly vin: string;
readonly dealer_id: string;
readonly appointment_date: $.DateValue;
readonly contact_methods: ServiceCustomerInput;
readonly service_operations: ReadonlyArray<ServiceOperationInput | null>;
readonly odometer: ServiceOdometerInput;
readonly drop_off_address: AddressInput | UnsetType | null;
readonly pick_up_address: AddressInput | UnsetType | null;
readonly transport: TransportationOptionInput | UnsetType | null;
readonly advisor: ServiceAdvisorInput | UnsetType | null;
readonly additional_comments: string | UnsetType | null;
static __fields = [["vin", $.MISSING], ["dealer_id", $.MISSING], ["appointment_date", $.MISSING], ["contact_methods", $.MISSING], ["service_operations", $.MISSING], ["odometer", $.MISSING], ["drop_off_address", UNSET], ["pick_up_address", UNSET], ["transport", UNSET], ["advisor", UNSET], ["additional_comments", UNSET]];
constructor(vin: string, dealer_id: string, appointment_date: $.DateValue, contact_methods: ServiceCustomerInput, service_operations: ReadonlyArray<ServiceOperationInput | null>, odometer: ServiceOdometerInput, drop_off_address?: AddressInput | UnsetType | null, pick_up_address?: AddressInput | UnsetType | null, transport?: TransportationOptionInput | UnsetType | null, advisor?: ServiceAdvisorInput | UnsetType | null, additional_comments?: string | UnsetType | null);
constructor(options: { vin: string; dealer_id: string; appointment_date: $.DateValue; contact_methods: ServiceCustomerInput; service_operations: ReadonlyArray<ServiceOperationInput | null>; odometer: ServiceOdometerInput; drop_off_address?: AddressInput | UnsetType | null; pick_up_address?: AddressInput | UnsetType | null; transport?: TransportationOptionInput | UnsetType | null; advisor?: ServiceAdvisorInput | UnsetType | null; additional_comments?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceAppointmentInput, __args);  Object.freeze(this); }
}
$.classType(ServiceAppointmentInput);

export function all_dealers_variables(vin?: string | UnsetType | null, page_size?: number | UnsetType | null): Record<string, unknown>;
/** Serialize optional compact dealer-list filters. */
export function all_dealers_variables(...__args: any[]): any {
let {"vin": vin, "page_size": page_size} = $.bind(__args, ["vin", "page_size"], {"vin": UNSET, "page_size": UNSET}, [], null, null);
/** Serialize optional compact dealer-list filters. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"pageSize": page_size}));
}

export function dealers_by_search_variables(options?: { vin?: string | UnsetType | null; service_code?: ServiceCode | UnsetType | null; radius?: number | UnsetType | null; latitude?: number | UnsetType | null; longitude?: number | UnsetType | null }): Record<string, unknown>;
/** Serialize independently optional dealer search filters. */
export function dealers_by_search_variables(...__args: any[]): any {
let serialized_service_code;
let {"vin": vin, "service_code": service_code, "radius": radius, "latitude": latitude, "longitude": longitude} = $.bind(__args, [], {"vin": UNSET, "service_code": UNSET, "radius": UNSET, "latitude": UNSET, "longitude": UNSET}, ["vin", "service_code", "radius", "latitude", "longitude"], null, null);
/** Serialize independently optional dealer search filters. */
serialized_service_code = service_code;
if ($.truth($.call($.isinstance, [service_code, ServiceCode], null))) {
serialized_service_code = $.call(serialize_enum, [service_code], null);
}
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"serviceCode": serialized_service_code}, {"radius": radius}, {"latitude": latitude}, {"longitude": longitude}));
}

export function maintenance_visits_variables(vin: string, mileage: MaintenanceMileageInput, severity_id: string, past_visits: number, future_visits: number): Record<string, unknown>;
/** Serialize maintenance-visit generation variables. */
export function maintenance_visits_variables(...__args: any[]): any {
let {"vin": vin, "mileage": mileage, "severity_id": severity_id, "past_visits": past_visits, "future_visits": future_visits} = $.bind(__args, ["vin", "mileage", "severity_id", "past_visits", "future_visits"], {}, [], null, null);
/** Serialize maintenance-visit generation variables. */
return Object.assign({}, {["vin"]: vin}, {["mileage"]: $.call(optional_input_fields, [], Object.assign({}, {"monthlyKM": $.attr(mileage, "monthly_km")}, {"totalKM": $.attr(mileage, "total_km")}, {"monthlyMile": $.attr(mileage, "monthly_mile")}, {"totalMile": $.attr(mileage, "total_mile")}))}, {["severityId"]: severity_id}, {["pastVisits"]: past_visits}, {["futureVisits"]: future_visits});
}

export function service_advisors_variables(dealer_id: string, service_operation_ids: ReadonlyArray<string>, vin?: string | UnsetType | null): Record<string, unknown>;
/** Serialize advisor and transportation-option lookup variables. */
export function service_advisors_variables(...__args: any[]): any {
let {"dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "vin": vin} = $.bind(__args, ["dealer_id", "service_operation_ids", "vin"], {"vin": UNSET}, [], null, null);
/** Serialize advisor and transportation-option lookup variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"dealerId": dealer_id}, {"serviceOperationIds": $.call($.list, [service_operation_ids], null)}, {"vin": vin}));
}

export function service_time_slots_variables(dealer_id: string, service_operation_ids: ReadonlyArray<string>, start_date: $.DateValue, options?: { advisor_id?: string | UnsetType | null; transportation_code?: string | UnsetType | null; location_type?: ServiceLocationType | UnsetType | null; vin?: string | UnsetType | null }): Record<string, unknown>;
/** Serialize service appointment time-slot filters. */
export function service_time_slots_variables(...__args: any[]): any {
let serialized_location_type;
let {"dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "start_date": start_date, "advisor_id": advisor_id, "transportation_code": transportation_code, "location_type": location_type, "vin": vin} = $.bind(__args, ["dealer_id", "service_operation_ids", "start_date"], {"advisor_id": UNSET, "transportation_code": UNSET, "location_type": UNSET, "vin": UNSET}, ["advisor_id", "transportation_code", "location_type", "vin"], null, null);
/** Serialize service appointment time-slot filters. */
serialized_location_type = location_type;
if ($.truth($.call($.isinstance, [location_type, ServiceLocationType], null))) {
serialized_location_type = $.call(serialize_enum, [location_type], null);
}
return $.call(optional_input_fields, [], Object.assign({}, {"dealerId": dealer_id}, {"serviceOperationIds": $.call($.list, [service_operation_ids], null)}, {"startDate": $.call(serialize_datetime, [start_date], null)}, {"advisorId": advisor_id}, {"transportationCode": transportation_code}, {"locationType": serialized_location_type}, {"vin": vin}));
}

export function service_appointments_variables(vin: string, start_date?: $.DateValue | UnsetType | null, end_date?: $.DateValue | UnsetType | null): Record<string, unknown>;
/** Serialize a vehicle and optional appointment date-time range. */
export function service_appointments_variables(...__args: any[]): any {
let serialized_end, serialized_start;
let {"vin": vin, "start_date": start_date, "end_date": end_date} = $.bind(__args, ["vin", "start_date", "end_date"], {"start_date": UNSET, "end_date": UNSET}, [], null, null);
/** Serialize a vehicle and optional appointment date-time range. */
serialized_start = ($.truth($.call($.isinstance, [start_date, datetime], null)) ? $.call(serialize_datetime, [start_date], null) : start_date);
serialized_end = ($.truth($.call($.isinstance, [end_date, datetime], null)) ? $.call(serialize_datetime, [end_date], null) : end_date);
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"startDate": serialized_start}, {"endDate": serialized_end}));
}

export function service_appointment_variables(config: ServiceAppointmentInput): Record<string, unknown>;
/** Serialize a complete appointment input. */
export function service_appointment_variables(...__args: any[]): any {
let advisor, drop_off, operation, pick_up, transport;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize a complete appointment input. */
drop_off = $.attr(config, "drop_off_address");
if ($.truth($.call($.isinstance, [$.attr(config, "drop_off_address"), AddressInput], null))) {
drop_off = $.call(address_input, [$.attr(config, "drop_off_address")], null);
}
pick_up = $.attr(config, "pick_up_address");
if ($.truth($.call($.isinstance, [$.attr(config, "pick_up_address"), AddressInput], null))) {
pick_up = $.call(address_input, [$.attr(config, "pick_up_address")], null);
}
transport = $.attr(config, "transport");
if ($.truth($.call($.isinstance, [$.attr(config, "transport"), TransportationOptionInput], null))) {
transport = $.call(_transportation_option_input, [$.attr(config, "transport")], null);
}
advisor = $.attr(config, "advisor");
if ($.truth($.call($.isinstance, [$.attr(config, "advisor"), ServiceAdvisorInput], null))) {
advisor = $.call(_service_advisor_input, [$.attr(config, "advisor")], null);
}
return Object.assign({}, {["appointment"]: $.call(optional_input_fields, [], Object.assign({}, {"vin": $.attr(config, "vin")}, {"dealerId": $.attr(config, "dealer_id")}, {"appointmentDate": $.call(serialize_datetime, [$.attr(config, "appointment_date")], null)}, {"contactMethods": Object.assign({}, {["phone"]: $.attr($.attr(config, "contact_methods"), "phone")}, {["email"]: $.attr($.attr(config, "contact_methods"), "email")})}, {"dropOffAddress": drop_off}, {"pickUpAddress": pick_up}, {"transport": transport}, {"serviceOperations": (() => { const __out: any = []; for (const operation of $.iterable($.attr(config, "service_operations"))) { __out.push(($.truth(((operation === null))) ? null : $.call(_service_operation_input, [operation], null))); } return __out; })()}, {"advisor": advisor}, {"odometer": Object.assign({}, {["unit"]: $.call(serialize_enum, [$.attr($.attr(config, "odometer"), "unit")], null)}, {["value"]: $.attr($.attr(config, "odometer"), "value")})}, {"additionalComments": $.attr(config, "additional_comments")}))});
}

export function update_service_appointment_variables(appointment_id: string, config: ServiceAppointmentInput): Record<string, unknown>;
/** Serialize an appointment ID and replacement appointment fields. */
export function update_service_appointment_variables(...__args: any[]): any {
let {"appointment_id": appointment_id, "config": config} = $.bind(__args, ["appointment_id", "config"], {}, [], null, null);
/** Serialize an appointment ID and replacement appointment fields. */
return Object.assign({}, {["appointmentId"]: appointment_id}, $.call(service_appointment_variables, [config], null));
}

export function cancel_service_appointment_variables(appointment_id: string, dealer_id: string, vin?: string | UnsetType | null): Record<string, unknown>;
/** Serialize service appointment cancellation variables. */
export function cancel_service_appointment_variables(...__args: any[]): any {
let {"appointment_id": appointment_id, "dealer_id": dealer_id, "vin": vin} = $.bind(__args, ["appointment_id", "dealer_id", "vin"], {"vin": UNSET}, [], null, null);
/** Serialize service appointment cancellation variables. */
return $.call(optional_input_fields, [], Object.assign({}, {"appointmentId": appointment_id}, {"dealerId": dealer_id}, {"vin": vin}));
}

export function _service_operation_input(config: ServiceOperationInput): Record<string, unknown>;
/** Translated upstream _service_operation_input. */
export function _service_operation_input(...__args: any[]): any {
let discount, discounts;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
discounts = $.attr(config, "discounts");
if ($.truth($.call($.isinstance, [$.attr(config, "discounts"), $.tuple], null))) {
discounts = (() => { const __out: any = []; for (const discount of $.iterable($.attr(config, "discounts"))) { __out.push(($.truth(((discount === null))) ? null : $.call(optional_input_fields, [], Object.assign({}, {"code": $.attr(discount, "code")}, {"description": $.attr(discount, "description")}, {"price": $.attr(discount, "price")})))); } return __out; })();
}
return $.call(optional_input_fields, [], Object.assign({}, {"opCodeID": $.attr(config, "operation_code_id")}, {"opCodeDescription": $.attr(config, "operation_code_description")}, {"customerComments": $.attr(config, "customer_comments")}, {"serviceOperationsDescription": $.attr(config, "description")}, {"package": $.attr(config, "package")}, {"maintenance": $.attr(config, "maintenance")}, {"validation": $.attr(config, "validation")}, {"price": $.attr(config, "price")}, {"laborHours": $.attr(config, "labor_hours")}, {"discounts": discounts}));
}

export function _service_advisor_input(config: ServiceAdvisorInput): Record<string, unknown>;
/** Translated upstream _service_advisor_input. */
export function _service_advisor_input(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
return $.call(optional_input_fields, [], Object.assign({}, {"advisorId": $.attr(config, "advisor_id")}, {"name": $.attr(config, "name")}, {"jobTitle": $.attr(config, "job_title")}, {"email": $.attr(config, "email")}, {"imageUrl": $.attr(config, "image_url")}));
}

export function _transportation_option_input(config: TransportationOptionInput): Record<string, unknown>;
/** Translated upstream _transportation_option_input. */
export function _transportation_option_input(...__args: any[]): any {
let preferences;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
preferences = $.attr(config, "preferences");
if ($.truth($.call($.isinstance, [$.attr(config, "preferences"), TransportationPreferencesInput], null))) {
preferences = $.call(optional_input_fields, [], Object.assign({}, {"isValetRequired": $.attr($.attr(config, "preferences"), "valet_required")}, {"isLoanerRequired": $.attr($.attr(config, "preferences"), "loaner_required")}, {"isPickUpRequired": $.attr($.attr(config, "preferences"), "pick_up_required")}, {"isDropOffRequired": $.attr($.attr(config, "preferences"), "drop_off_required")}, {"reminders": $.attr($.attr(config, "preferences"), "reminders")}));
}
return $.call(optional_input_fields, [], Object.assign({}, {"code": $.attr(config, "code")}, {"name": $.attr(config, "name")}, {"isValet": $.attr(config, "is_valet")}, {"isLoanerAvailable": $.attr(config, "is_loaner_available")}, {"comments": $.attr(config, "comments")}, {"preferences": preferences}));
}
