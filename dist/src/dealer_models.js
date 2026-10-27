"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferredDealerUpdateError = exports.PreferredDealerUpdated = exports.UnselectedDealerResult = exports.ServiceAppointmentUpdateError = exports.UpdatedServiceAppointment = exports.CreatedServiceAppointment = exports.CancelServiceAppointmentResult = exports.MaintenanceVisits = exports.MaintenanceVisit = exports.MaintenanceServiceOccurrence = exports.MaintenanceInterval = exports.ServiceOperationsAtInterval = exports.DealerServiceOperation = exports.ServiceDiscount = exports.ServiceCategory = exports.ServiceCategoryOperation = exports.ServiceAppointment = exports.AppointmentServiceOperation = exports.ServiceContactMethod = exports.ServiceTransportationOption = exports.ServiceAddress = exports.ServiceDealership = exports.ServiceAppointmentTimeSlot = exports.ServiceAdvisor = exports.DealerDealsAndImages = exports.DealerCouponImage = exports.DealerCoupon = exports.Dealer = exports.DealerServiceSchedule = exports.DealerSchedule = exports.DealerSummary = exports.MaintenanceVisitAlignment = exports.ServiceContactMethodType = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
exports.ServiceContactMethodType = _runtime_1.py.enumType("ServiceContactMethodType", { "PHONE": "phone", "EMAIL": "email", "MAIL": "mail", "PAGER": "pager", "URL": "url", "SMS": "sms", "OTHER": "other", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.MaintenanceVisitAlignment = _runtime_1.py.enumType("MaintenanceVisitAlignment", { "DISTANCE_BASED": "DistanceBased", "TIME_BASED": "TimeBased", "DISTANCE_AND_TIME_BASED": "DistanceAndTimeBased", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Compact nullable dealer fields. */
class DealerSummary {
    dealer_id;
    name;
    address_line_1;
    static __fields = [["dealer_id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["address_line_1", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DealerSummary, __args); Object.freeze(this); }
}
exports.DealerSummary = DealerSummary;
_runtime_1.py.classType(DealerSummary);
/** One dealer service schedule entry. */
class DealerSchedule {
    day_of_week;
    end_time;
    opened;
    start_time;
    static __fields = [["day_of_week", _runtime_1.py.MISSING], ["end_time", _runtime_1.py.MISSING], ["opened", _runtime_1.py.MISSING], ["start_time", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DealerSchedule, __args); Object.freeze(this); }
}
exports.DealerSchedule = DealerSchedule;
_runtime_1.py.classType(DealerSchedule);
/** Named dealer service and its nullable schedules. */
class DealerServiceSchedule {
    code;
    name;
    schedules;
    static __fields = [["code", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["schedules", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DealerServiceSchedule, __args); Object.freeze(this); }
}
exports.DealerServiceSchedule = DealerServiceSchedule;
_runtime_1.py.classType(DealerServiceSchedule);
/** Dealer search result with generated nullable fields. */
class Dealer {
    dealer_id;
    name;
    preferred;
    address_line_1;
    address_line_2;
    latitude;
    longitude;
    postal_code;
    country;
    state_code;
    native_service_booking;
    online_scheduling_mobile_url;
    city_name;
    phone_number;
    service_phone;
    website;
    languages_spoken;
    email_address;
    service_hours;
    service_schedules;
    static __fields = [["dealer_id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["preferred", _runtime_1.py.MISSING], ["address_line_1", _runtime_1.py.MISSING], ["address_line_2", _runtime_1.py.MISSING], ["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING], ["state_code", _runtime_1.py.MISSING], ["native_service_booking", _runtime_1.py.MISSING], ["online_scheduling_mobile_url", _runtime_1.py.MISSING], ["city_name", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING], ["service_phone", _runtime_1.py.MISSING], ["website", _runtime_1.py.MISSING], ["languages_spoken", _runtime_1.py.MISSING], ["email_address", _runtime_1.py.MISSING], ["service_hours", _runtime_1.py.MISSING], ["service_schedules", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, Dealer, __args); Object.freeze(this); }
}
exports.Dealer = Dealer;
_runtime_1.py.classType(Dealer);
/** Nullable dealer coupon text fields. */
class DealerCoupon {
    coupon_id;
    title;
    disclaimer;
    static __fields = [["coupon_id", _runtime_1.py.MISSING], ["title", _runtime_1.py.MISSING], ["disclaimer", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DealerCoupon, __args); Object.freeze(this); }
}
exports.DealerCoupon = DealerCoupon;
_runtime_1.py.classType(DealerCoupon);
/** Nullable dealer coupon image fields. */
class DealerCouponImage {
    coupon_id;
    image_url;
    static __fields = [["coupon_id", _runtime_1.py.MISSING], ["image_url", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DealerCouponImage, __args); Object.freeze(this); }
}
exports.DealerCouponImage = DealerCouponImage;
_runtime_1.py.classType(DealerCouponImage);
/** Nullable coupon and coupon-image lists returned for a dealer. */
class DealerDealsAndImages {
    coupons;
    images;
    static __fields = [["coupons", _runtime_1.py.MISSING], ["images", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DealerDealsAndImages, __args); Object.freeze(this); }
}
exports.DealerDealsAndImages = DealerDealsAndImages;
_runtime_1.py.classType(DealerDealsAndImages);
/** Nullable service advisor details. */
class ServiceAdvisor {
    advisor_id;
    name;
    job_title;
    email;
    image_url;
    static __fields = [["advisor_id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["job_title", _runtime_1.py.MISSING], ["email", _runtime_1.py.MISSING], ["image_url", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceAdvisor, __args); Object.freeze(this); }
}
exports.ServiceAdvisor = ServiceAdvisor;
_runtime_1.py.classType(ServiceAdvisor);
/** Appointment day, opening status, and available times. */
class ServiceAppointmentTimeSlot {
    is_open;
    date;
    times;
    static __fields = [["is_open", _runtime_1.py.MISSING], ["date", _runtime_1.py.MISSING], ["times", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceAppointmentTimeSlot, __args); Object.freeze(this); }
}
exports.ServiceAppointmentTimeSlot = ServiceAppointmentTimeSlot;
_runtime_1.py.classType(ServiceAppointmentTimeSlot);
/** Required dealership object with nullable selected fields. */
class ServiceDealership {
    name;
    address_line_1;
    address_line_2;
    city_name;
    state_code;
    phone_number;
    static __fields = [["name", _runtime_1.py.MISSING], ["address_line_1", _runtime_1.py.MISSING], ["address_line_2", _runtime_1.py.MISSING], ["city_name", _runtime_1.py.MISSING], ["state_code", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceDealership, __args); Object.freeze(this); }
}
exports.ServiceDealership = ServiceDealership;
_runtime_1.py.classType(ServiceDealership);
/** Nullable service pick-up or drop-off address fields. */
class ServiceAddress {
    address_1;
    address_2;
    city;
    state;
    postal_code;
    country;
    neighbourhood;
    district;
    street_number;
    static __fields = [["address_1", _runtime_1.py.MISSING], ["address_2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING], ["neighbourhood", _runtime_1.py.MISSING], ["district", _runtime_1.py.MISSING], ["street_number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceAddress, __args); Object.freeze(this); }
}
exports.ServiceAddress = ServiceAddress;
_runtime_1.py.classType(ServiceAddress);
/** Required transportation option fields. */
class ServiceTransportationOption {
    code;
    name;
    is_valet;
    is_loaner_available;
    static __fields = [["code", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["is_valet", _runtime_1.py.MISSING], ["is_loaner_available", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceTransportationOption, __args); Object.freeze(this); }
}
exports.ServiceTransportationOption = ServiceTransportationOption;
_runtime_1.py.classType(ServiceTransportationOption);
/** Required customer contact method and value. */
class ServiceContactMethod {
    type;
    value;
    static __fields = [["type", _runtime_1.py.MISSING], ["value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceContactMethod, __args); Object.freeze(this); }
}
exports.ServiceContactMethod = ServiceContactMethod;
_runtime_1.py.classType(ServiceContactMethod);
/** Nullable operation details attached to an existing appointment. */
class AppointmentServiceOperation {
    operation_code_description;
    operation_code_id;
    customer_comments;
    category_name;
    description;
    static __fields = [["operation_code_description", _runtime_1.py.MISSING], ["operation_code_id", _runtime_1.py.MISSING], ["customer_comments", _runtime_1.py.MISSING], ["category_name", _runtime_1.py.MISSING], ["description", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AppointmentServiceOperation, __args); Object.freeze(this); }
}
exports.AppointmentServiceOperation = AppointmentServiceOperation;
_runtime_1.py.classType(AppointmentServiceOperation);
/** Existing service appointment and selected related data. */
class ServiceAppointment {
    appointment_id;
    appointment_date;
    dealer_id;
    editable;
    dealership;
    pick_up_address;
    drop_off_address;
    transport;
    contact_methods;
    service_operations;
    advisor;
    additional_comments;
    static __fields = [["appointment_id", _runtime_1.py.MISSING], ["appointment_date", _runtime_1.py.MISSING], ["dealer_id", _runtime_1.py.MISSING], ["editable", _runtime_1.py.MISSING], ["dealership", _runtime_1.py.MISSING], ["pick_up_address", _runtime_1.py.MISSING], ["drop_off_address", _runtime_1.py.MISSING], ["transport", _runtime_1.py.MISSING], ["contact_methods", _runtime_1.py.MISSING], ["service_operations", _runtime_1.py.MISSING], ["advisor", _runtime_1.py.MISSING], ["additional_comments", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceAppointment, __args); Object.freeze(this); }
}
exports.ServiceAppointment = ServiceAppointment;
_runtime_1.py.classType(ServiceAppointment);
/** Required service-category operation identity. */
class ServiceCategoryOperation {
    operation_code_id;
    description;
    static __fields = [["operation_code_id", _runtime_1.py.MISSING], ["description", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceCategoryOperation, __args); Object.freeze(this); }
}
exports.ServiceCategoryOperation = ServiceCategoryOperation;
_runtime_1.py.classType(ServiceCategoryOperation);
/** Required service category and operations. */
class ServiceCategory {
    category_id;
    name;
    description;
    operations;
    static __fields = [["category_id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["description", _runtime_1.py.MISSING], ["operations", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceCategory, __args); Object.freeze(this); }
}
exports.ServiceCategory = ServiceCategory;
_runtime_1.py.classType(ServiceCategory);
/** Nullable service operation discount fields. */
class ServiceDiscount {
    code;
    description;
    price;
    static __fields = [["code", _runtime_1.py.MISSING], ["description", _runtime_1.py.MISSING], ["price", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceDiscount, __args); Object.freeze(this); }
}
exports.ServiceDiscount = ServiceDiscount;
_runtime_1.py.classType(ServiceDiscount);
/** Dealer service operation with generated nullable fields. */
class DealerServiceOperation {
    operation_code_id;
    operation_code_description;
    customer_comments;
    description;
    $package;
    maintenance;
    validation;
    price;
    labor_hours;
    discounts;
    static __fields = [["operation_code_id", _runtime_1.py.MISSING], ["operation_code_description", _runtime_1.py.MISSING], ["customer_comments", _runtime_1.py.MISSING], ["description", _runtime_1.py.MISSING], ["package", _runtime_1.py.MISSING], ["maintenance", _runtime_1.py.MISSING], ["validation", _runtime_1.py.MISSING], ["price", _runtime_1.py.MISSING], ["labor_hours", _runtime_1.py.MISSING], ["discounts", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, DealerServiceOperation, __args); Object.freeze(this); }
}
exports.DealerServiceOperation = DealerServiceOperation;
_runtime_1.py.classType(DealerServiceOperation);
/** Nullable mileage interval and its nullable service operations. */
class ServiceOperationsAtInterval {
    mileage;
    operations;
    static __fields = [["mileage", _runtime_1.py.MISSING], ["operations", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceOperationsAtInterval, __args); Object.freeze(this); }
}
exports.ServiceOperationsAtInterval = ServiceOperationsAtInterval;
_runtime_1.py.classType(ServiceOperationsAtInterval);
/** Nullable interval values for one generated maintenance visit. */
class MaintenanceInterval {
    month;
    year;
    next;
    distance_miles;
    distance_km;
    static __fields = [["month", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING], ["next", _runtime_1.py.MISSING], ["distance_miles", _runtime_1.py.MISSING], ["distance_km", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MaintenanceInterval, __args); Object.freeze(this); }
}
exports.MaintenanceInterval = MaintenanceInterval;
_runtime_1.py.classType(MaintenanceInterval);
/** Nullable maintenance component and required service-type details. */
class MaintenanceServiceOccurrence {
    component_name;
    category_name;
    type_name;
    type_group_name;
    static __fields = [["component_name", _runtime_1.py.MISSING], ["category_name", _runtime_1.py.MISSING], ["type_name", _runtime_1.py.MISSING], ["type_group_name", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MaintenanceServiceOccurrence, __args); Object.freeze(this); }
}
exports.MaintenanceServiceOccurrence = MaintenanceServiceOccurrence;
_runtime_1.py.classType(MaintenanceServiceOccurrence);
/** One generated maintenance visit. */
class MaintenanceVisit {
    alignment;
    interval;
    service_occurrences;
    static __fields = [["alignment", _runtime_1.py.MISSING], ["interval", _runtime_1.py.MISSING], ["service_occurrences", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MaintenanceVisit, __args); Object.freeze(this); }
}
exports.MaintenanceVisit = MaintenanceVisit;
_runtime_1.py.classType(MaintenanceVisit);
/** Nullable generated maintenance visits. */
class MaintenanceVisits {
    visits;
    static __fields = [["visits", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MaintenanceVisits, __args); Object.freeze(this); }
}
exports.MaintenanceVisits = MaintenanceVisits;
_runtime_1.py.classType(MaintenanceVisits);
/** Nullable service appointment cancellation status. */
class CancelServiceAppointmentResult {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CancelServiceAppointmentResult, __args); Object.freeze(this); }
}
exports.CancelServiceAppointmentResult = CancelServiceAppointmentResult;
_runtime_1.py.classType(CancelServiceAppointmentResult);
/** Created service appointment identifier. */
class CreatedServiceAppointment {
    appointment_id;
    static __fields = [["appointment_id", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CreatedServiceAppointment, __args); Object.freeze(this); }
}
exports.CreatedServiceAppointment = CreatedServiceAppointment;
_runtime_1.py.classType(CreatedServiceAppointment);
/** Selected fields returned after updating an appointment. */
class UpdatedServiceAppointment {
    dealer_id;
    appointment_id;
    appointment_date;
    additional_comments;
    pick_up_address;
    transport_name;
    type;
    vin;
    static __fields = [["dealer_id", _runtime_1.py.MISSING], ["appointment_id", _runtime_1.py.MISSING], ["appointment_date", _runtime_1.py.MISSING], ["additional_comments", _runtime_1.py.MISSING], ["pick_up_address", _runtime_1.py.MISSING], ["transport_name", _runtime_1.py.MISSING], ["type", _runtime_1.py.MISSING], ["vin", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UpdatedServiceAppointment, __args); Object.freeze(this); }
}
exports.UpdatedServiceAppointment = UpdatedServiceAppointment;
_runtime_1.py.classType(UpdatedServiceAppointment);
/** Service appointment update error fields. */
class ServiceAppointmentUpdateError {
    message;
    error;
    static __fields = [["message", _runtime_1.py.MISSING], ["error", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceAppointmentUpdateError, __args); Object.freeze(this); }
}
exports.ServiceAppointmentUpdateError = ServiceAppointmentUpdateError;
_runtime_1.py.classType(ServiceAppointmentUpdateError);
/** Future dealer or appointment union branch selected only by type name. */
class UnselectedDealerResult {
    typename;
    static __fields = [["typename", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnselectedDealerResult, __args); Object.freeze(this); }
}
exports.UnselectedDealerResult = UnselectedDealerResult;
_runtime_1.py.classType(UnselectedDealerResult);
/** Nullable preferred dealer returned by a vehicle update. */
class PreferredDealerUpdated {
    preferred_dealer;
    static __fields = [["preferred_dealer", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PreferredDealerUpdated, __args); Object.freeze(this); }
}
exports.PreferredDealerUpdated = PreferredDealerUpdated;
_runtime_1.py.classType(PreferredDealerUpdated);
/** Known preferred-dealer update error and required message. */
class PreferredDealerUpdateError {
    typename;
    message;
    static __fields = [["typename", _runtime_1.py.MISSING], ["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PreferredDealerUpdateError, __args); Object.freeze(this); }
}
exports.PreferredDealerUpdateError = PreferredDealerUpdateError;
_runtime_1.py.classType(PreferredDealerUpdateError);
//# sourceMappingURL=dealer_models.js.map