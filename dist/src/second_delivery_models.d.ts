import { py as $ } from "./_runtime";
import { SecondDeliveryAppointmentMode } from "./second_delivery_inputs";
export { SecondDeliveryAppointmentMode };
export declare const SecondDeliveryAppointmentStatus: $.EnumType<{
    readonly BOOKED: "BOOKED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type SecondDeliveryAppointmentStatus = ReturnType<typeof SecondDeliveryAppointmentStatus>;
export declare const SecondDeliveryMarketingVersion: $.EnumType<{
    readonly REMIND_ME_LATER: "REMIND_ME_LATER";
    readonly NO_THANKS: "NO_THANKS";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type SecondDeliveryMarketingVersion = ReturnType<typeof SecondDeliveryMarketingVersion>;
/** Nullable second-delivery address coordinates. */
export declare class SecondDeliveryCoordinates {
    readonly latitude: number | null;
    readonly longitude: number | null;
    static __fields: (string | symbol)[][];
    constructor(latitude: number | null, longitude: number | null);
    constructor(options: {
        latitude: number | null;
        longitude: number | null;
    });
}
/** Nullable address fields selected by second-delivery operations. */
export declare class SecondDeliveryAddress {
    readonly address_1: string | null;
    readonly address_2: string | null;
    readonly city: string | null;
    readonly state: string | null;
    readonly postal_code: string | null;
    readonly country: string | null;
    readonly id: number | null;
    readonly coordinates: SecondDeliveryCoordinates | null;
    static __fields: ((string | symbol)[] | (string | null)[])[];
    constructor(address_1: string | null, address_2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null, id?: number | null, coordinates?: SecondDeliveryCoordinates | null);
    constructor(options: {
        address_1: string | null;
        address_2: string | null;
        city: string | null;
        state: string | null;
        postal_code: string | null;
        country: string | null;
        id?: number | null;
        coordinates?: SecondDeliveryCoordinates | null;
    });
}
/** Nullable second-delivery dealer details. */
export declare class SecondDeliveryDealer {
    readonly code: string | null;
    readonly address: SecondDeliveryAddress | null;
    static __fields: (string | symbol)[][];
    constructor(code: string | null, address: SecondDeliveryAddress | null);
    constructor(options: {
        code: string | null;
        address: SecondDeliveryAddress | null;
    });
}
/** Nullable second-delivery hub details. */
export declare class SecondDeliveryHub {
    readonly id: number | null;
    readonly timezone: string | null;
    readonly dealer: SecondDeliveryDealer | null;
    static __fields: ((string | symbol)[] | (string | null)[])[];
    constructor(id: number | null, timezone: string | null, dealer?: SecondDeliveryDealer | null);
    constructor(options: {
        id: number | null;
        timezone: string | null;
        dealer?: SecondDeliveryDealer | null;
    });
}
/** Nullable booked-appointment contact fields. */
export declare class SecondDeliveryContact {
    readonly first_name: string | null;
    readonly last_name: string | null;
    readonly phone_number: string | null;
    readonly email: string | null;
    static __fields: (string | symbol)[][];
    constructor(first_name: string | null, last_name: string | null, phone_number: string | null, email: string | null);
    constructor(options: {
        first_name: string | null;
        last_name: string | null;
        phone_number: string | null;
        email: string | null;
    });
}
/** Nullable appointment identity returned by restricted flows. */
export declare class SecondDeliveryAppointmentReference {
    readonly id: number | null;
    readonly access_token: string | null;
    readonly status: SecondDeliveryAppointmentStatus | null;
    static __fields: (string | symbol)[][];
    constructor(id: number | null, access_token: string | null, status: SecondDeliveryAppointmentStatus | null);
    constructor(options: {
        id: number | null;
        access_token: string | null;
        status: SecondDeliveryAppointmentStatus | null;
    });
}
/** Existing booked second-delivery appointment. */
export declare class SecondDeliveryBookedAppointment {
    readonly id: number | null;
    readonly activity_id: number | null;
    readonly begins_at: $.DateValue | null;
    readonly address: SecondDeliveryAddress | null;
    readonly contact: SecondDeliveryContact | null;
    readonly redelivery_notes: string | null;
    readonly feature_notes: string | null;
    readonly hub: SecondDeliveryHub | null;
    readonly mode: SecondDeliveryAppointmentMode | null;
    static __fields: (string | symbol)[][];
    constructor(id: number | null, activity_id: number | null, begins_at: $.DateValue | null, address: SecondDeliveryAddress | null, contact: SecondDeliveryContact | null, redelivery_notes: string | null, feature_notes: string | null, hub: SecondDeliveryHub | null, mode: SecondDeliveryAppointmentMode | null);
    constructor(options: {
        id: number | null;
        activity_id: number | null;
        begins_at: $.DateValue | null;
        address: SecondDeliveryAddress | null;
        contact: SecondDeliveryContact | null;
        redelivery_notes: string | null;
        feature_notes: string | null;
        hub: SecondDeliveryHub | null;
        mode: SecondDeliveryAppointmentMode | null;
    });
}
/** No booked second-delivery appointment exists. */
export declare class SecondDeliveryAppointmentNotFound {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Appointment requires an additional authorization flow. */
export declare class SecondDeliveryAppointmentForbidden {
    readonly message: string;
    readonly redacted_email: string | null;
    readonly redacted_phone_number: string | null;
    readonly appointment: SecondDeliveryAppointmentReference | null;
    static __fields: (string | symbol)[][];
    constructor(message: string, redacted_email: string | null, redacted_phone_number: string | null, appointment: SecondDeliveryAppointmentReference | null);
    constructor(options: {
        message: string;
        redacted_email: string | null;
        redacted_phone_number: string | null;
        appointment: SecondDeliveryAppointmentReference | null;
    });
}
/** Future second-delivery union branch selected only by type name. */
export declare class UnselectedSecondDeliveryResult {
    readonly typename: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string);
    constructor(options: {
        typename: string;
    });
}
export type SecondDeliveryAppointmentResult = SecondDeliveryBookedAppointment | SecondDeliveryAppointmentNotFound | SecondDeliveryAppointmentForbidden | UnselectedSecondDeliveryResult;
/** Nullable second-delivery time-slot fields. */
export declare class SecondDeliveryTimeSlot {
    readonly time: $.DateValue | null;
    readonly id: number | null;
    static __fields: (string | symbol)[][];
    constructor(time: $.DateValue | null, id: number | null);
    constructor(options: {
        time: $.DateValue | null;
        id: number | null;
    });
}
/** Required date and nullable slots for that date. */
export declare class SecondDeliverySlotsByDate {
    readonly date: $.DateValue;
    readonly time_slots: ReadonlyArray<SecondDeliveryTimeSlot | null> | null;
    static __fields: (string | symbol)[][];
    constructor(date: $.DateValue, time_slots: ReadonlyArray<SecondDeliveryTimeSlot | null> | null);
    constructor(options: {
        date: $.DateValue;
        time_slots: ReadonlyArray<SecondDeliveryTimeSlot | null> | null;
    });
}
/** Successful second-delivery time-slot search. */
export declare class SecondDeliveryTimeSlots {
    readonly hub: SecondDeliveryHub | null;
    readonly slots_by_date: ReadonlyArray<SecondDeliverySlotsByDate | null>;
    static __fields: (string | symbol)[][];
    constructor(hub: SecondDeliveryHub | null, slots_by_date: ReadonlyArray<SecondDeliverySlotsByDate | null>);
    constructor(options: {
        hub: SecondDeliveryHub | null;
        slots_by_date: ReadonlyArray<SecondDeliverySlotsByDate | null>;
    });
}
/** The supplied address is outside the second-delivery service area. */
export declare class SecondDeliveryAddressNotServiced {
    readonly message: string | null;
    static __fields: (string | symbol)[][];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export type SecondDeliveryTimeSlotsResult = SecondDeliveryTimeSlots | SecondDeliveryAddressNotServiced | UnselectedSecondDeliveryResult;
/** Nullable lead-vehicle fields used by second-delivery eligibility. */
export declare class SecondDeliveryLeadCar {
    readonly trim: string | null;
    readonly deleted: boolean | null;
    readonly interior_color: string | null;
    readonly retail_sales_date: string | null;
    readonly plate: string | null;
    readonly brand: string | null;
    readonly year: string | null;
    readonly model: string | null;
    readonly mileage: number | null;
    readonly lead_id: number | null;
    readonly exterior_color: string | null;
    readonly name: string | null;
    readonly vin: string | null;
    readonly id: number | null;
    static __fields: (string | symbol)[][];
    constructor(trim: string | null, deleted: boolean | null, interior_color: string | null, retail_sales_date: string | null, plate: string | null, brand: string | null, year: string | null, model: string | null, mileage: number | null, lead_id: number | null, exterior_color: string | null, name: string | null, vin: string | null, id: number | null);
    constructor(options: {
        trim: string | null;
        deleted: boolean | null;
        interior_color: string | null;
        retail_sales_date: string | null;
        plate: string | null;
        brand: string | null;
        year: string | null;
        model: string | null;
        mileage: number | null;
        lead_id: number | null;
        exterior_color: string | null;
        name: string | null;
        vin: string | null;
        id: number | null;
    });
}
/** Eligible retail-delivery record details. */
export declare class SecondDeliveryEligible {
    readonly hub: SecondDeliveryHub | null;
    readonly lead_car: SecondDeliveryLeadCar | null;
    readonly redelivery_lead_id: number | null;
    readonly days_since_retail_sales_date: number | null;
    static __fields: (string | symbol)[][];
    constructor(hub: SecondDeliveryHub | null, lead_car: SecondDeliveryLeadCar | null, redelivery_lead_id: number | null, days_since_retail_sales_date: number | null);
    constructor(options: {
        hub: SecondDeliveryHub | null;
        lead_car: SecondDeliveryLeadCar | null;
        redelivery_lead_id: number | null;
        days_since_retail_sales_date: number | null;
    });
}
/** Eligibility indicates an appointment is already booked. */
export declare class SecondDeliveryAppointmentBooked {
    readonly appointment: SecondDeliveryAppointmentReference | null;
    static __fields: (string | symbol)[][];
    constructor(appointment: SecondDeliveryAppointmentReference | null);
    constructor(options: {
        appointment: SecondDeliveryAppointmentReference | null;
    });
}
/** Eligibility indicates the appointment was completed. */
export declare class SecondDeliveryAppointmentCompleted {
    readonly appointment: SecondDeliveryAppointmentReference | null;
    static __fields: (string | symbol)[][];
    constructor(appointment: SecondDeliveryAppointmentReference | null);
    constructor(options: {
        appointment: SecondDeliveryAppointmentReference | null;
    });
}
/** Known eligibility error branch with nullable message. */
export declare class SecondDeliveryEligibilityError {
    readonly typename: string;
    readonly message: string | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, message: string | null);
    constructor(options: {
        typename: string;
        message: string | null;
    });
}
export type SecondDeliveryEligibilityResult = SecondDeliveryEligible | SecondDeliveryAppointmentBooked | SecondDeliveryAppointmentCompleted | SecondDeliveryEligibilityError | UnselectedSecondDeliveryResult;
/** Nullable marketing message CTA configuration. */
export declare class SecondDeliveryMarketingMessage {
    readonly version: SecondDeliveryMarketingVersion | null;
    readonly display_threshold_days: number | null;
    readonly remind_later_threshold_days: number | null;
    static __fields: (string | symbol)[][];
    constructor(version: SecondDeliveryMarketingVersion | null, display_threshold_days: number | null, remind_later_threshold_days: number | null);
    constructor(options: {
        version: SecondDeliveryMarketingVersion | null;
        display_threshold_days: number | null;
        remind_later_threshold_days: number | null;
    });
}
/** Nullable second-delivery CTA state. */
export declare class SecondDeliveryCallToAction {
    readonly marketing_message: SecondDeliveryMarketingMessage | null;
    readonly discover_prioritized: boolean | null;
    readonly days_since_purchased: number | null;
    static __fields: (string | symbol)[][];
    constructor(marketing_message: SecondDeliveryMarketingMessage | null, discover_prioritized: boolean | null, days_since_purchased: number | null);
    constructor(options: {
        marketing_message: SecondDeliveryMarketingMessage | null;
        discover_prioritized: boolean | null;
        days_since_purchased: number | null;
    });
}
/** Eligibility union and independent CTA state. */
export declare class SecondDeliveryEligibility {
    readonly result: SecondDeliveryEligibilityResult | null;
    readonly call_to_action: SecondDeliveryCallToAction | null;
    static __fields: (string | symbol)[][];
    constructor(result: SecondDeliveryEligibilityResult | null, call_to_action: SecondDeliveryCallToAction | null);
    constructor(options: {
        result: SecondDeliveryEligibilityResult | null;
        call_to_action: SecondDeliveryCallToAction | null;
    });
}
/** Nullable positive address-validation flag. */
export declare class ValidSecondDeliveryAddress {
    readonly valid: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(valid: boolean | null);
    constructor(options: {
        valid: boolean | null;
    });
}
/** Nullable negative flag and the dealer address to use instead. */
export declare class InvalidSecondDeliveryAddress {
    readonly valid: boolean | null;
    readonly dealer_address: SecondDeliveryAddress | null;
    static __fields: (string | symbol)[][];
    constructor(valid: boolean | null, dealer_address: SecondDeliveryAddress | null);
    constructor(options: {
        valid: boolean | null;
        dealer_address: SecondDeliveryAddress | null;
    });
}
export type SecondDeliveryAddressValidationResult = ValidSecondDeliveryAddress | InvalidSecondDeliveryAddress | UnselectedSecondDeliveryResult;
/** Required success flag returned by a second-delivery mutation. */
export declare class SecondDeliveryOperationSuccess {
    readonly success: boolean;
    static __fields: (string | symbol)[][];
    constructor(success: boolean);
    constructor(options: {
        success: boolean;
    });
}
/** Known second-delivery mutation error with nullable message. */
export declare class SecondDeliveryOperationError {
    readonly typename: string;
    readonly message: string | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, message: string | null);
    constructor(options: {
        typename: string;
        message: string | null;
    });
}
export type SecondDeliveryOperationResult = SecondDeliveryOperationSuccess | SecondDeliveryOperationError | UnselectedSecondDeliveryResult;
