// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

const StrEnum = $.StrEnum;

export const ServiceContactMethodType = $.enumType("ServiceContactMethodType", {"PHONE": "phone", "EMAIL": "email", "MAIL": "mail", "PAGER": "pager", "URL": "url", "SMS": "sms", "OTHER": "other", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type ServiceContactMethodType = ReturnType<typeof ServiceContactMethodType>;

export const MaintenanceVisitAlignment = $.enumType("MaintenanceVisitAlignment", {"DISTANCE_BASED": "DistanceBased", "TIME_BASED": "TimeBased", "DISTANCE_AND_TIME_BASED": "DistanceAndTimeBased", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type MaintenanceVisitAlignment = ReturnType<typeof MaintenanceVisitAlignment>;

/** Compact nullable dealer fields. */
export class DealerSummary {
readonly dealer_id: string | null;
readonly name: string | null;
readonly address_line_1: string | null;
static __fields = [["dealer_id", $.MISSING], ["name", $.MISSING], ["address_line_1", $.MISSING]];
constructor(dealer_id: string | null, name: string | null, address_line_1: string | null);
constructor(options: { dealer_id: string | null; name: string | null; address_line_1: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DealerSummary, __args);  Object.freeze(this); }
}
$.classType(DealerSummary);

/** One dealer service schedule entry. */
export class DealerSchedule {
readonly day_of_week: string;
readonly end_time: string | null;
readonly opened: boolean;
readonly start_time: string | null;
static __fields = [["day_of_week", $.MISSING], ["end_time", $.MISSING], ["opened", $.MISSING], ["start_time", $.MISSING]];
constructor(day_of_week: string, end_time: string | null, opened: boolean, start_time: string | null);
constructor(options: { day_of_week: string; end_time: string | null; opened: boolean; start_time: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DealerSchedule, __args);  Object.freeze(this); }
}
$.classType(DealerSchedule);

/** Named dealer service and its nullable schedules. */
export class DealerServiceSchedule {
readonly code: string | null;
readonly name: string | null;
readonly schedules: ReadonlyArray<DealerSchedule | null> | null;
static __fields = [["code", $.MISSING], ["name", $.MISSING], ["schedules", $.MISSING]];
constructor(code: string | null, name: string | null, schedules: ReadonlyArray<DealerSchedule | null> | null);
constructor(options: { code: string | null; name: string | null; schedules: ReadonlyArray<DealerSchedule | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DealerServiceSchedule, __args);  Object.freeze(this); }
}
$.classType(DealerServiceSchedule);

/** Dealer search result with generated nullable fields. */
export class Dealer {
readonly dealer_id: string | null;
readonly name: string | null;
readonly preferred: boolean | null;
readonly address_line_1: string | null;
readonly address_line_2: string | null;
readonly latitude: number | null;
readonly longitude: number | null;
readonly postal_code: string | null;
readonly country: string | null;
readonly state_code: string | null;
readonly native_service_booking: boolean;
readonly online_scheduling_mobile_url: string | null;
readonly city_name: string | null;
readonly phone_number: string | null;
readonly service_phone: string | null;
readonly website: string | null;
readonly languages_spoken: ReadonlyArray<string> | null;
readonly email_address: string | null;
readonly service_hours: string | null;
readonly service_schedules: ReadonlyArray<DealerServiceSchedule | null> | null;
static __fields = [["dealer_id", $.MISSING], ["name", $.MISSING], ["preferred", $.MISSING], ["address_line_1", $.MISSING], ["address_line_2", $.MISSING], ["latitude", $.MISSING], ["longitude", $.MISSING], ["postal_code", $.MISSING], ["country", $.MISSING], ["state_code", $.MISSING], ["native_service_booking", $.MISSING], ["online_scheduling_mobile_url", $.MISSING], ["city_name", $.MISSING], ["phone_number", $.MISSING], ["service_phone", $.MISSING], ["website", $.MISSING], ["languages_spoken", $.MISSING], ["email_address", $.MISSING], ["service_hours", $.MISSING], ["service_schedules", $.MISSING]];
constructor(dealer_id: string | null, name: string | null, preferred: boolean | null, address_line_1: string | null, address_line_2: string | null, latitude: number | null, longitude: number | null, postal_code: string | null, country: string | null, state_code: string | null, native_service_booking: boolean, online_scheduling_mobile_url: string | null, city_name: string | null, phone_number: string | null, service_phone: string | null, website: string | null, languages_spoken: ReadonlyArray<string> | null, email_address: string | null, service_hours: string | null, service_schedules: ReadonlyArray<DealerServiceSchedule | null> | null);
constructor(options: { dealer_id: string | null; name: string | null; preferred: boolean | null; address_line_1: string | null; address_line_2: string | null; latitude: number | null; longitude: number | null; postal_code: string | null; country: string | null; state_code: string | null; native_service_booking: boolean; online_scheduling_mobile_url: string | null; city_name: string | null; phone_number: string | null; service_phone: string | null; website: string | null; languages_spoken: ReadonlyArray<string> | null; email_address: string | null; service_hours: string | null; service_schedules: ReadonlyArray<DealerServiceSchedule | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, Dealer, __args);  Object.freeze(this); }
}
$.classType(Dealer);

/** Nullable dealer coupon text fields. */
export class DealerCoupon {
readonly coupon_id: string | null;
readonly title: string | null;
readonly disclaimer: string | null;
static __fields = [["coupon_id", $.MISSING], ["title", $.MISSING], ["disclaimer", $.MISSING]];
constructor(coupon_id: string | null, title: string | null, disclaimer: string | null);
constructor(options: { coupon_id: string | null; title: string | null; disclaimer: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DealerCoupon, __args);  Object.freeze(this); }
}
$.classType(DealerCoupon);

/** Nullable dealer coupon image fields. */
export class DealerCouponImage {
readonly coupon_id: string | null;
readonly image_url: string | null;
static __fields = [["coupon_id", $.MISSING], ["image_url", $.MISSING]];
constructor(coupon_id: string | null, image_url: string | null);
constructor(options: { coupon_id: string | null; image_url: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DealerCouponImage, __args);  Object.freeze(this); }
}
$.classType(DealerCouponImage);

/** Nullable coupon and coupon-image lists returned for a dealer. */
export class DealerDealsAndImages {
readonly coupons: ReadonlyArray<DealerCoupon | null> | null;
readonly images: ReadonlyArray<DealerCouponImage | null> | null;
static __fields = [["coupons", $.MISSING], ["images", $.MISSING]];
constructor(coupons: ReadonlyArray<DealerCoupon | null> | null, images: ReadonlyArray<DealerCouponImage | null> | null);
constructor(options: { coupons: ReadonlyArray<DealerCoupon | null> | null; images: ReadonlyArray<DealerCouponImage | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DealerDealsAndImages, __args);  Object.freeze(this); }
}
$.classType(DealerDealsAndImages);

/** Nullable service advisor details. */
export class ServiceAdvisor {
readonly advisor_id: string | null;
readonly name: string | null;
readonly job_title: string | null;
readonly email: string | null;
readonly image_url: string | null;
static __fields = [["advisor_id", $.MISSING], ["name", $.MISSING], ["job_title", $.MISSING], ["email", $.MISSING], ["image_url", $.MISSING]];
constructor(advisor_id: string | null, name: string | null, job_title: string | null, email: string | null, image_url: string | null);
constructor(options: { advisor_id: string | null; name: string | null; job_title: string | null; email: string | null; image_url: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceAdvisor, __args);  Object.freeze(this); }
}
$.classType(ServiceAdvisor);

/** Appointment day, opening status, and available times. */
export class ServiceAppointmentTimeSlot {
readonly is_open: boolean | null;
readonly date: $.DateValue;
readonly times: ReadonlyArray<$.DateValue | null>;
static __fields = [["is_open", $.MISSING], ["date", $.MISSING], ["times", $.MISSING]];
constructor(is_open: boolean | null, date: $.DateValue, times: ReadonlyArray<$.DateValue | null>);
constructor(options: { is_open: boolean | null; date: $.DateValue; times: ReadonlyArray<$.DateValue | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceAppointmentTimeSlot, __args);  Object.freeze(this); }
}
$.classType(ServiceAppointmentTimeSlot);

/** Required dealership object with nullable selected fields. */
export class ServiceDealership {
readonly name: string | null;
readonly address_line_1: string | null;
readonly address_line_2: string | null;
readonly city_name: string | null;
readonly state_code: string | null;
readonly phone_number: string | null;
static __fields = [["name", $.MISSING], ["address_line_1", $.MISSING], ["address_line_2", $.MISSING], ["city_name", $.MISSING], ["state_code", $.MISSING], ["phone_number", $.MISSING]];
constructor(name: string | null, address_line_1: string | null, address_line_2: string | null, city_name: string | null, state_code: string | null, phone_number: string | null);
constructor(options: { name: string | null; address_line_1: string | null; address_line_2: string | null; city_name: string | null; state_code: string | null; phone_number: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceDealership, __args);  Object.freeze(this); }
}
$.classType(ServiceDealership);

/** Nullable service pick-up or drop-off address fields. */
export class ServiceAddress {
readonly address_1: string | null;
readonly address_2: string | null;
readonly city: string | null;
readonly state: string | null;
readonly postal_code: string | null;
readonly country: string | null;
readonly neighbourhood: string | null;
readonly district: string | null;
readonly street_number: string | null;
static __fields = [["address_1", $.MISSING], ["address_2", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["postal_code", $.MISSING], ["country", $.MISSING], ["neighbourhood", $.MISSING], ["district", $.MISSING], ["street_number", $.MISSING]];
constructor(address_1: string | null, address_2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null, neighbourhood: string | null, district: string | null, street_number: string | null);
constructor(options: { address_1: string | null; address_2: string | null; city: string | null; state: string | null; postal_code: string | null; country: string | null; neighbourhood: string | null; district: string | null; street_number: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceAddress, __args);  Object.freeze(this); }
}
$.classType(ServiceAddress);

/** Required transportation option fields. */
export class ServiceTransportationOption {
readonly code: string;
readonly name: string;
readonly is_valet: boolean;
readonly is_loaner_available: boolean;
static __fields = [["code", $.MISSING], ["name", $.MISSING], ["is_valet", $.MISSING], ["is_loaner_available", $.MISSING]];
constructor(code: string, name: string, is_valet: boolean, is_loaner_available: boolean);
constructor(options: { code: string; name: string; is_valet: boolean; is_loaner_available: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceTransportationOption, __args);  Object.freeze(this); }
}
$.classType(ServiceTransportationOption);

/** Required customer contact method and value. */
export class ServiceContactMethod {
readonly type: ServiceContactMethodType;
readonly value: string;
static __fields = [["type", $.MISSING], ["value", $.MISSING]];
constructor(type: ServiceContactMethodType, value: string);
constructor(options: { type: ServiceContactMethodType; value: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceContactMethod, __args);  Object.freeze(this); }
}
$.classType(ServiceContactMethod);

/** Nullable operation details attached to an existing appointment. */
export class AppointmentServiceOperation {
readonly operation_code_description: string | null;
readonly operation_code_id: string | null;
readonly customer_comments: string | null;
readonly category_name: string | null;
readonly description: string | null;
static __fields = [["operation_code_description", $.MISSING], ["operation_code_id", $.MISSING], ["customer_comments", $.MISSING], ["category_name", $.MISSING], ["description", $.MISSING]];
constructor(operation_code_description: string | null, operation_code_id: string | null, customer_comments: string | null, category_name: string | null, description: string | null);
constructor(options: { operation_code_description: string | null; operation_code_id: string | null; customer_comments: string | null; category_name: string | null; description: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AppointmentServiceOperation, __args);  Object.freeze(this); }
}
$.classType(AppointmentServiceOperation);

/** Existing service appointment and selected related data. */
export class ServiceAppointment {
readonly appointment_id: string | null;
readonly appointment_date: $.DateValue;
readonly dealer_id: string;
readonly editable: boolean | null;
readonly dealership: ServiceDealership;
readonly pick_up_address: ServiceAddress | null;
readonly drop_off_address: ServiceAddress | null;
readonly transport: ServiceTransportationOption | null;
readonly contact_methods: ReadonlyArray<ServiceContactMethod | null> | null;
readonly service_operations: ReadonlyArray<AppointmentServiceOperation | null>;
readonly advisor: ServiceAdvisor | null;
readonly additional_comments: string | null;
static __fields = [["appointment_id", $.MISSING], ["appointment_date", $.MISSING], ["dealer_id", $.MISSING], ["editable", $.MISSING], ["dealership", $.MISSING], ["pick_up_address", $.MISSING], ["drop_off_address", $.MISSING], ["transport", $.MISSING], ["contact_methods", $.MISSING], ["service_operations", $.MISSING], ["advisor", $.MISSING], ["additional_comments", $.MISSING]];
constructor(appointment_id: string | null, appointment_date: $.DateValue, dealer_id: string, editable: boolean | null, dealership: ServiceDealership, pick_up_address: ServiceAddress | null, drop_off_address: ServiceAddress | null, transport: ServiceTransportationOption | null, contact_methods: ReadonlyArray<ServiceContactMethod | null> | null, service_operations: ReadonlyArray<AppointmentServiceOperation | null>, advisor: ServiceAdvisor | null, additional_comments: string | null);
constructor(options: { appointment_id: string | null; appointment_date: $.DateValue; dealer_id: string; editable: boolean | null; dealership: ServiceDealership; pick_up_address: ServiceAddress | null; drop_off_address: ServiceAddress | null; transport: ServiceTransportationOption | null; contact_methods: ReadonlyArray<ServiceContactMethod | null> | null; service_operations: ReadonlyArray<AppointmentServiceOperation | null>; advisor: ServiceAdvisor | null; additional_comments: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceAppointment, __args);  Object.freeze(this); }
}
$.classType(ServiceAppointment);

/** Required service-category operation identity. */
export class ServiceCategoryOperation {
readonly operation_code_id: number;
readonly description: string;
static __fields = [["operation_code_id", $.MISSING], ["description", $.MISSING]];
constructor(operation_code_id: number, description: string);
constructor(options: { operation_code_id: number; description: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceCategoryOperation, __args);  Object.freeze(this); }
}
$.classType(ServiceCategoryOperation);

/** Required service category and operations. */
export class ServiceCategory {
readonly category_id: number;
readonly name: string;
readonly description: string;
readonly operations: ReadonlyArray<ServiceCategoryOperation | null>;
static __fields = [["category_id", $.MISSING], ["name", $.MISSING], ["description", $.MISSING], ["operations", $.MISSING]];
constructor(category_id: number, name: string, description: string, operations: ReadonlyArray<ServiceCategoryOperation | null>);
constructor(options: { category_id: number; name: string; description: string; operations: ReadonlyArray<ServiceCategoryOperation | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceCategory, __args);  Object.freeze(this); }
}
$.classType(ServiceCategory);

/** Nullable service operation discount fields. */
export class ServiceDiscount {
readonly code: string | null;
readonly description: string | null;
readonly price: number | null;
static __fields = [["code", $.MISSING], ["description", $.MISSING], ["price", $.MISSING]];
constructor(code: string | null, description: string | null, price: number | null);
constructor(options: { code: string | null; description: string | null; price: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceDiscount, __args);  Object.freeze(this); }
}
$.classType(ServiceDiscount);

/** Dealer service operation with generated nullable fields. */
export class DealerServiceOperation {
readonly operation_code_id: string | null;
readonly operation_code_description: string | null;
readonly customer_comments: string | null;
readonly description: string | null;
readonly $package: string;
readonly maintenance: boolean | null;
readonly validation: boolean | null;
readonly price: number | null;
readonly labor_hours: number | null;
readonly discounts: ReadonlyArray<ServiceDiscount | null> | null;
static __fields = [["operation_code_id", $.MISSING], ["operation_code_description", $.MISSING], ["customer_comments", $.MISSING], ["description", $.MISSING], ["package", $.MISSING], ["maintenance", $.MISSING], ["validation", $.MISSING], ["price", $.MISSING], ["labor_hours", $.MISSING], ["discounts", $.MISSING]];
constructor(operation_code_id: string | null, operation_code_description: string | null, customer_comments: string | null, description: string | null, $package: string, maintenance: boolean | null, validation: boolean | null, price: number | null, labor_hours: number | null, discounts: ReadonlyArray<ServiceDiscount | null> | null);
constructor(options: { operation_code_id: string | null; operation_code_description: string | null; customer_comments: string | null; description: string | null; $package: string; maintenance: boolean | null; validation: boolean | null; price: number | null; labor_hours: number | null; discounts: ReadonlyArray<ServiceDiscount | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, DealerServiceOperation, __args);  Object.freeze(this); }
}
$.classType(DealerServiceOperation);

/** Nullable mileage interval and its nullable service operations. */
export class ServiceOperationsAtInterval {
readonly mileage: number | null;
readonly operations: ReadonlyArray<DealerServiceOperation | null> | null;
static __fields = [["mileage", $.MISSING], ["operations", $.MISSING]];
constructor(mileage: number | null, operations: ReadonlyArray<DealerServiceOperation | null> | null);
constructor(options: { mileage: number | null; operations: ReadonlyArray<DealerServiceOperation | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceOperationsAtInterval, __args);  Object.freeze(this); }
}
$.classType(ServiceOperationsAtInterval);

/** Nullable interval values for one generated maintenance visit. */
export class MaintenanceInterval {
readonly month: number | null;
readonly year: number | null;
readonly next: boolean | null;
readonly distance_miles: number | null;
readonly distance_km: number | null;
static __fields = [["month", $.MISSING], ["year", $.MISSING], ["next", $.MISSING], ["distance_miles", $.MISSING], ["distance_km", $.MISSING]];
constructor(month: number | null, year: number | null, next: boolean | null, distance_miles: number | null, distance_km: number | null);
constructor(options: { month: number | null; year: number | null; next: boolean | null; distance_miles: number | null; distance_km: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MaintenanceInterval, __args);  Object.freeze(this); }
}
$.classType(MaintenanceInterval);

/** Nullable maintenance component and required service-type details. */
export class MaintenanceServiceOccurrence {
readonly component_name: string | null;
readonly category_name: string | null;
readonly type_name: string;
readonly type_group_name: string;
static __fields = [["component_name", $.MISSING], ["category_name", $.MISSING], ["type_name", $.MISSING], ["type_group_name", $.MISSING]];
constructor(component_name: string | null, category_name: string | null, type_name: string, type_group_name: string);
constructor(options: { component_name: string | null; category_name: string | null; type_name: string; type_group_name: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MaintenanceServiceOccurrence, __args);  Object.freeze(this); }
}
$.classType(MaintenanceServiceOccurrence);

/** One generated maintenance visit. */
export class MaintenanceVisit {
readonly alignment: MaintenanceVisitAlignment | null;
readonly interval: MaintenanceInterval | null;
readonly service_occurrences: ReadonlyArray<MaintenanceServiceOccurrence | null> | null;
static __fields = [["alignment", $.MISSING], ["interval", $.MISSING], ["service_occurrences", $.MISSING]];
constructor(alignment: MaintenanceVisitAlignment | null, interval: MaintenanceInterval | null, service_occurrences: ReadonlyArray<MaintenanceServiceOccurrence | null> | null);
constructor(options: { alignment: MaintenanceVisitAlignment | null; interval: MaintenanceInterval | null; service_occurrences: ReadonlyArray<MaintenanceServiceOccurrence | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MaintenanceVisit, __args);  Object.freeze(this); }
}
$.classType(MaintenanceVisit);

/** Nullable generated maintenance visits. */
export class MaintenanceVisits {
readonly visits: ReadonlyArray<MaintenanceVisit | null> | null;
static __fields = [["visits", $.MISSING]];
constructor(visits: ReadonlyArray<MaintenanceVisit | null> | null);
constructor(options: { visits: ReadonlyArray<MaintenanceVisit | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MaintenanceVisits, __args);  Object.freeze(this); }
}
$.classType(MaintenanceVisits);

/** Nullable service appointment cancellation status. */
export class CancelServiceAppointmentResult {
readonly success: boolean | null;
static __fields = [["success", $.MISSING]];
constructor(success: boolean | null);
constructor(options: { success: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CancelServiceAppointmentResult, __args);  Object.freeze(this); }
}
$.classType(CancelServiceAppointmentResult);

/** Created service appointment identifier. */
export class CreatedServiceAppointment {
readonly appointment_id: string | null;
static __fields = [["appointment_id", $.MISSING]];
constructor(appointment_id: string | null);
constructor(options: { appointment_id: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CreatedServiceAppointment, __args);  Object.freeze(this); }
}
$.classType(CreatedServiceAppointment);

/** Selected fields returned after updating an appointment. */
export class UpdatedServiceAppointment {
readonly dealer_id: string;
readonly appointment_id: string | null;
readonly appointment_date: $.DateValue;
readonly additional_comments: string | null;
readonly pick_up_address: ServiceAddress | null;
readonly transport_name: string | null;
readonly type: string;
readonly vin: string;
static __fields = [["dealer_id", $.MISSING], ["appointment_id", $.MISSING], ["appointment_date", $.MISSING], ["additional_comments", $.MISSING], ["pick_up_address", $.MISSING], ["transport_name", $.MISSING], ["type", $.MISSING], ["vin", $.MISSING]];
constructor(dealer_id: string, appointment_id: string | null, appointment_date: $.DateValue, additional_comments: string | null, pick_up_address: ServiceAddress | null, transport_name: string | null, type: string, vin: string);
constructor(options: { dealer_id: string; appointment_id: string | null; appointment_date: $.DateValue; additional_comments: string | null; pick_up_address: ServiceAddress | null; transport_name: string | null; type: string; vin: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdatedServiceAppointment, __args);  Object.freeze(this); }
}
$.classType(UpdatedServiceAppointment);

/** Service appointment update error fields. */
export class ServiceAppointmentUpdateError {
readonly message: string;
readonly error: string | null;
static __fields = [["message", $.MISSING], ["error", $.MISSING]];
constructor(message: string, error: string | null);
constructor(options: { message: string; error: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ServiceAppointmentUpdateError, __args);  Object.freeze(this); }
}
$.classType(ServiceAppointmentUpdateError);

/** Future dealer or appointment union branch selected only by type name. */
export class UnselectedDealerResult {
readonly typename: string;
static __fields = [["typename", $.MISSING]];
constructor(typename: string);
constructor(options: { typename: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnselectedDealerResult, __args);  Object.freeze(this); }
}
$.classType(UnselectedDealerResult);

export type ServiceAppointmentCreateResult = CreatedServiceAppointment | UnselectedDealerResult;

export type ServiceAppointmentUpdateResult = UpdatedServiceAppointment | ServiceAppointmentUpdateError | UnselectedDealerResult;

/** Nullable preferred dealer returned by a vehicle update. */
export class PreferredDealerUpdated {
readonly preferred_dealer: string | null;
static __fields = [["preferred_dealer", $.MISSING]];
constructor(preferred_dealer: string | null);
constructor(options: { preferred_dealer: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PreferredDealerUpdated, __args);  Object.freeze(this); }
}
$.classType(PreferredDealerUpdated);

/** Known preferred-dealer update error and required message. */
export class PreferredDealerUpdateError {
readonly typename: string;
readonly message: string;
static __fields = [["typename", $.MISSING], ["message", $.MISSING]];
constructor(typename: string, message: string);
constructor(options: { typename: string; message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, PreferredDealerUpdateError, __args);  Object.freeze(this); }
}
$.classType(PreferredDealerUpdateError);

export type PreferredDealerUpdateResult = PreferredDealerUpdated | PreferredDealerUpdateError | UnselectedDealerResult;
