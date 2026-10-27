import { py as $ } from "./_runtime";
export declare const ServiceContactMethodType: $.EnumType<{
    readonly PHONE: "phone";
    readonly EMAIL: "email";
    readonly MAIL: "mail";
    readonly PAGER: "pager";
    readonly URL: "url";
    readonly SMS: "sms";
    readonly OTHER: "other";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type ServiceContactMethodType = ReturnType<typeof ServiceContactMethodType>;
export declare const MaintenanceVisitAlignment: $.EnumType<{
    readonly DISTANCE_BASED: "DistanceBased";
    readonly TIME_BASED: "TimeBased";
    readonly DISTANCE_AND_TIME_BASED: "DistanceAndTimeBased";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type MaintenanceVisitAlignment = ReturnType<typeof MaintenanceVisitAlignment>;
/** Compact nullable dealer fields. */
export declare class DealerSummary {
    readonly dealer_id: string | null;
    readonly name: string | null;
    readonly address_line_1: string | null;
    static __fields: (string | symbol)[][];
    constructor(dealer_id: string | null, name: string | null, address_line_1: string | null);
    constructor(options: {
        dealer_id: string | null;
        name: string | null;
        address_line_1: string | null;
    });
}
/** One dealer service schedule entry. */
export declare class DealerSchedule {
    readonly day_of_week: string;
    readonly end_time: string | null;
    readonly opened: boolean;
    readonly start_time: string | null;
    static __fields: (string | symbol)[][];
    constructor(day_of_week: string, end_time: string | null, opened: boolean, start_time: string | null);
    constructor(options: {
        day_of_week: string;
        end_time: string | null;
        opened: boolean;
        start_time: string | null;
    });
}
/** Named dealer service and its nullable schedules. */
export declare class DealerServiceSchedule {
    readonly code: string | null;
    readonly name: string | null;
    readonly schedules: ReadonlyArray<DealerSchedule | null> | null;
    static __fields: (string | symbol)[][];
    constructor(code: string | null, name: string | null, schedules: ReadonlyArray<DealerSchedule | null> | null);
    constructor(options: {
        code: string | null;
        name: string | null;
        schedules: ReadonlyArray<DealerSchedule | null> | null;
    });
}
/** Dealer search result with generated nullable fields. */
export declare class Dealer {
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
    static __fields: (string | symbol)[][];
    constructor(dealer_id: string | null, name: string | null, preferred: boolean | null, address_line_1: string | null, address_line_2: string | null, latitude: number | null, longitude: number | null, postal_code: string | null, country: string | null, state_code: string | null, native_service_booking: boolean, online_scheduling_mobile_url: string | null, city_name: string | null, phone_number: string | null, service_phone: string | null, website: string | null, languages_spoken: ReadonlyArray<string> | null, email_address: string | null, service_hours: string | null, service_schedules: ReadonlyArray<DealerServiceSchedule | null> | null);
    constructor(options: {
        dealer_id: string | null;
        name: string | null;
        preferred: boolean | null;
        address_line_1: string | null;
        address_line_2: string | null;
        latitude: number | null;
        longitude: number | null;
        postal_code: string | null;
        country: string | null;
        state_code: string | null;
        native_service_booking: boolean;
        online_scheduling_mobile_url: string | null;
        city_name: string | null;
        phone_number: string | null;
        service_phone: string | null;
        website: string | null;
        languages_spoken: ReadonlyArray<string> | null;
        email_address: string | null;
        service_hours: string | null;
        service_schedules: ReadonlyArray<DealerServiceSchedule | null> | null;
    });
}
/** Nullable dealer coupon text fields. */
export declare class DealerCoupon {
    readonly coupon_id: string | null;
    readonly title: string | null;
    readonly disclaimer: string | null;
    static __fields: (string | symbol)[][];
    constructor(coupon_id: string | null, title: string | null, disclaimer: string | null);
    constructor(options: {
        coupon_id: string | null;
        title: string | null;
        disclaimer: string | null;
    });
}
/** Nullable dealer coupon image fields. */
export declare class DealerCouponImage {
    readonly coupon_id: string | null;
    readonly image_url: string | null;
    static __fields: (string | symbol)[][];
    constructor(coupon_id: string | null, image_url: string | null);
    constructor(options: {
        coupon_id: string | null;
        image_url: string | null;
    });
}
/** Nullable coupon and coupon-image lists returned for a dealer. */
export declare class DealerDealsAndImages {
    readonly coupons: ReadonlyArray<DealerCoupon | null> | null;
    readonly images: ReadonlyArray<DealerCouponImage | null> | null;
    static __fields: (string | symbol)[][];
    constructor(coupons: ReadonlyArray<DealerCoupon | null> | null, images: ReadonlyArray<DealerCouponImage | null> | null);
    constructor(options: {
        coupons: ReadonlyArray<DealerCoupon | null> | null;
        images: ReadonlyArray<DealerCouponImage | null> | null;
    });
}
/** Nullable service advisor details. */
export declare class ServiceAdvisor {
    readonly advisor_id: string | null;
    readonly name: string | null;
    readonly job_title: string | null;
    readonly email: string | null;
    readonly image_url: string | null;
    static __fields: (string | symbol)[][];
    constructor(advisor_id: string | null, name: string | null, job_title: string | null, email: string | null, image_url: string | null);
    constructor(options: {
        advisor_id: string | null;
        name: string | null;
        job_title: string | null;
        email: string | null;
        image_url: string | null;
    });
}
/** Appointment day, opening status, and available times. */
export declare class ServiceAppointmentTimeSlot {
    readonly is_open: boolean | null;
    readonly date: $.DateValue;
    readonly times: ReadonlyArray<$.DateValue | null>;
    static __fields: (string | symbol)[][];
    constructor(is_open: boolean | null, date: $.DateValue, times: ReadonlyArray<$.DateValue | null>);
    constructor(options: {
        is_open: boolean | null;
        date: $.DateValue;
        times: ReadonlyArray<$.DateValue | null>;
    });
}
/** Required dealership object with nullable selected fields. */
export declare class ServiceDealership {
    readonly name: string | null;
    readonly address_line_1: string | null;
    readonly address_line_2: string | null;
    readonly city_name: string | null;
    readonly state_code: string | null;
    readonly phone_number: string | null;
    static __fields: (string | symbol)[][];
    constructor(name: string | null, address_line_1: string | null, address_line_2: string | null, city_name: string | null, state_code: string | null, phone_number: string | null);
    constructor(options: {
        name: string | null;
        address_line_1: string | null;
        address_line_2: string | null;
        city_name: string | null;
        state_code: string | null;
        phone_number: string | null;
    });
}
/** Nullable service pick-up or drop-off address fields. */
export declare class ServiceAddress {
    readonly address_1: string | null;
    readonly address_2: string | null;
    readonly city: string | null;
    readonly state: string | null;
    readonly postal_code: string | null;
    readonly country: string | null;
    readonly neighbourhood: string | null;
    readonly district: string | null;
    readonly street_number: string | null;
    static __fields: (string | symbol)[][];
    constructor(address_1: string | null, address_2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null, neighbourhood: string | null, district: string | null, street_number: string | null);
    constructor(options: {
        address_1: string | null;
        address_2: string | null;
        city: string | null;
        state: string | null;
        postal_code: string | null;
        country: string | null;
        neighbourhood: string | null;
        district: string | null;
        street_number: string | null;
    });
}
/** Required transportation option fields. */
export declare class ServiceTransportationOption {
    readonly code: string;
    readonly name: string;
    readonly is_valet: boolean;
    readonly is_loaner_available: boolean;
    static __fields: (string | symbol)[][];
    constructor(code: string, name: string, is_valet: boolean, is_loaner_available: boolean);
    constructor(options: {
        code: string;
        name: string;
        is_valet: boolean;
        is_loaner_available: boolean;
    });
}
/** Required customer contact method and value. */
export declare class ServiceContactMethod {
    readonly type: ServiceContactMethodType;
    readonly value: string;
    static __fields: (string | symbol)[][];
    constructor(type: ServiceContactMethodType, value: string);
    constructor(options: {
        type: ServiceContactMethodType;
        value: string;
    });
}
/** Nullable operation details attached to an existing appointment. */
export declare class AppointmentServiceOperation {
    readonly operation_code_description: string | null;
    readonly operation_code_id: string | null;
    readonly customer_comments: string | null;
    readonly category_name: string | null;
    readonly description: string | null;
    static __fields: (string | symbol)[][];
    constructor(operation_code_description: string | null, operation_code_id: string | null, customer_comments: string | null, category_name: string | null, description: string | null);
    constructor(options: {
        operation_code_description: string | null;
        operation_code_id: string | null;
        customer_comments: string | null;
        category_name: string | null;
        description: string | null;
    });
}
/** Existing service appointment and selected related data. */
export declare class ServiceAppointment {
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
    static __fields: (string | symbol)[][];
    constructor(appointment_id: string | null, appointment_date: $.DateValue, dealer_id: string, editable: boolean | null, dealership: ServiceDealership, pick_up_address: ServiceAddress | null, drop_off_address: ServiceAddress | null, transport: ServiceTransportationOption | null, contact_methods: ReadonlyArray<ServiceContactMethod | null> | null, service_operations: ReadonlyArray<AppointmentServiceOperation | null>, advisor: ServiceAdvisor | null, additional_comments: string | null);
    constructor(options: {
        appointment_id: string | null;
        appointment_date: $.DateValue;
        dealer_id: string;
        editable: boolean | null;
        dealership: ServiceDealership;
        pick_up_address: ServiceAddress | null;
        drop_off_address: ServiceAddress | null;
        transport: ServiceTransportationOption | null;
        contact_methods: ReadonlyArray<ServiceContactMethod | null> | null;
        service_operations: ReadonlyArray<AppointmentServiceOperation | null>;
        advisor: ServiceAdvisor | null;
        additional_comments: string | null;
    });
}
/** Required service-category operation identity. */
export declare class ServiceCategoryOperation {
    readonly operation_code_id: number;
    readonly description: string;
    static __fields: (string | symbol)[][];
    constructor(operation_code_id: number, description: string);
    constructor(options: {
        operation_code_id: number;
        description: string;
    });
}
/** Required service category and operations. */
export declare class ServiceCategory {
    readonly category_id: number;
    readonly name: string;
    readonly description: string;
    readonly operations: ReadonlyArray<ServiceCategoryOperation | null>;
    static __fields: (string | symbol)[][];
    constructor(category_id: number, name: string, description: string, operations: ReadonlyArray<ServiceCategoryOperation | null>);
    constructor(options: {
        category_id: number;
        name: string;
        description: string;
        operations: ReadonlyArray<ServiceCategoryOperation | null>;
    });
}
/** Nullable service operation discount fields. */
export declare class ServiceDiscount {
    readonly code: string | null;
    readonly description: string | null;
    readonly price: number | null;
    static __fields: (string | symbol)[][];
    constructor(code: string | null, description: string | null, price: number | null);
    constructor(options: {
        code: string | null;
        description: string | null;
        price: number | null;
    });
}
/** Dealer service operation with generated nullable fields. */
export declare class DealerServiceOperation {
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
    static __fields: (string | symbol)[][];
    constructor(operation_code_id: string | null, operation_code_description: string | null, customer_comments: string | null, description: string | null, $package: string, maintenance: boolean | null, validation: boolean | null, price: number | null, labor_hours: number | null, discounts: ReadonlyArray<ServiceDiscount | null> | null);
    constructor(options: {
        operation_code_id: string | null;
        operation_code_description: string | null;
        customer_comments: string | null;
        description: string | null;
        $package: string;
        maintenance: boolean | null;
        validation: boolean | null;
        price: number | null;
        labor_hours: number | null;
        discounts: ReadonlyArray<ServiceDiscount | null> | null;
    });
}
/** Nullable mileage interval and its nullable service operations. */
export declare class ServiceOperationsAtInterval {
    readonly mileage: number | null;
    readonly operations: ReadonlyArray<DealerServiceOperation | null> | null;
    static __fields: (string | symbol)[][];
    constructor(mileage: number | null, operations: ReadonlyArray<DealerServiceOperation | null> | null);
    constructor(options: {
        mileage: number | null;
        operations: ReadonlyArray<DealerServiceOperation | null> | null;
    });
}
/** Nullable interval values for one generated maintenance visit. */
export declare class MaintenanceInterval {
    readonly month: number | null;
    readonly year: number | null;
    readonly next: boolean | null;
    readonly distance_miles: number | null;
    readonly distance_km: number | null;
    static __fields: (string | symbol)[][];
    constructor(month: number | null, year: number | null, next: boolean | null, distance_miles: number | null, distance_km: number | null);
    constructor(options: {
        month: number | null;
        year: number | null;
        next: boolean | null;
        distance_miles: number | null;
        distance_km: number | null;
    });
}
/** Nullable maintenance component and required service-type details. */
export declare class MaintenanceServiceOccurrence {
    readonly component_name: string | null;
    readonly category_name: string | null;
    readonly type_name: string;
    readonly type_group_name: string;
    static __fields: (string | symbol)[][];
    constructor(component_name: string | null, category_name: string | null, type_name: string, type_group_name: string);
    constructor(options: {
        component_name: string | null;
        category_name: string | null;
        type_name: string;
        type_group_name: string;
    });
}
/** One generated maintenance visit. */
export declare class MaintenanceVisit {
    readonly alignment: MaintenanceVisitAlignment | null;
    readonly interval: MaintenanceInterval | null;
    readonly service_occurrences: ReadonlyArray<MaintenanceServiceOccurrence | null> | null;
    static __fields: (string | symbol)[][];
    constructor(alignment: MaintenanceVisitAlignment | null, interval: MaintenanceInterval | null, service_occurrences: ReadonlyArray<MaintenanceServiceOccurrence | null> | null);
    constructor(options: {
        alignment: MaintenanceVisitAlignment | null;
        interval: MaintenanceInterval | null;
        service_occurrences: ReadonlyArray<MaintenanceServiceOccurrence | null> | null;
    });
}
/** Nullable generated maintenance visits. */
export declare class MaintenanceVisits {
    readonly visits: ReadonlyArray<MaintenanceVisit | null> | null;
    static __fields: (string | symbol)[][];
    constructor(visits: ReadonlyArray<MaintenanceVisit | null> | null);
    constructor(options: {
        visits: ReadonlyArray<MaintenanceVisit | null> | null;
    });
}
/** Nullable service appointment cancellation status. */
export declare class CancelServiceAppointmentResult {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
/** Created service appointment identifier. */
export declare class CreatedServiceAppointment {
    readonly appointment_id: string | null;
    static __fields: (string | symbol)[][];
    constructor(appointment_id: string | null);
    constructor(options: {
        appointment_id: string | null;
    });
}
/** Selected fields returned after updating an appointment. */
export declare class UpdatedServiceAppointment {
    readonly dealer_id: string;
    readonly appointment_id: string | null;
    readonly appointment_date: $.DateValue;
    readonly additional_comments: string | null;
    readonly pick_up_address: ServiceAddress | null;
    readonly transport_name: string | null;
    readonly type: string;
    readonly vin: string;
    static __fields: (string | symbol)[][];
    constructor(dealer_id: string, appointment_id: string | null, appointment_date: $.DateValue, additional_comments: string | null, pick_up_address: ServiceAddress | null, transport_name: string | null, type: string, vin: string);
    constructor(options: {
        dealer_id: string;
        appointment_id: string | null;
        appointment_date: $.DateValue;
        additional_comments: string | null;
        pick_up_address: ServiceAddress | null;
        transport_name: string | null;
        type: string;
        vin: string;
    });
}
/** Service appointment update error fields. */
export declare class ServiceAppointmentUpdateError {
    readonly message: string;
    readonly error: string | null;
    static __fields: (string | symbol)[][];
    constructor(message: string, error: string | null);
    constructor(options: {
        message: string;
        error: string | null;
    });
}
/** Future dealer or appointment union branch selected only by type name. */
export declare class UnselectedDealerResult {
    readonly typename: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string);
    constructor(options: {
        typename: string;
    });
}
export type ServiceAppointmentCreateResult = CreatedServiceAppointment | UnselectedDealerResult;
export type ServiceAppointmentUpdateResult = UpdatedServiceAppointment | ServiceAppointmentUpdateError | UnselectedDealerResult;
/** Nullable preferred dealer returned by a vehicle update. */
export declare class PreferredDealerUpdated {
    readonly preferred_dealer: string | null;
    static __fields: (string | symbol)[][];
    constructor(preferred_dealer: string | null);
    constructor(options: {
        preferred_dealer: string | null;
    });
}
/** Known preferred-dealer update error and required message. */
export declare class PreferredDealerUpdateError {
    readonly typename: string;
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string, message: string);
    constructor(options: {
        typename: string;
        message: string;
    });
}
export type PreferredDealerUpdateResult = PreferredDealerUpdated | PreferredDealerUpdateError | UnselectedDealerResult;
