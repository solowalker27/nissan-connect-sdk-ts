import { py as $ } from "./_runtime";
import { AddressInput, address_input } from "./common_inputs";
export { AddressInput, address_input };
import { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_datetime, serialize_enum };
import { DistanceUnit } from "./models";
export { DistanceUnit };
export declare const ServiceCode: $.EnumType<{
    readonly SERVICE: "SERVICE";
    readonly NISSAN_SALES: "NISSAN_SALES";
    readonly BODY_AND_PAINT: "BODY_AND_PAINT";
    readonly CUSTOMER_SERVICE: "CUSTOMER_SERVICE";
    readonly ONLINE_SUPPORT: "ONLINE_SUPPORT";
    readonly CLOSED_SALES: "CLOSED_SALES";
    readonly CLOSED_DISTRIBUTOR: "CLOSED_DISTRIBUTOR";
    readonly FLEET: "FLEET";
    readonly SERVICE_LEAF: "SERVICE_LEAF";
    readonly VALUE_ADVANTAGE: "VALUE_ADVANTAGE";
    readonly NITROGEN: "NITROGEN";
    readonly SALES: "SALES";
    readonly SHOWROOM: "SHOWROOM";
    readonly TEST_DRIVE: "TEST_DRIVE";
    readonly GENERAL: "GENERAL";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type ServiceCode = ReturnType<typeof ServiceCode>;
export declare const ServiceLocationType: $.EnumType<{
    readonly PICK_UP: "pick_up";
    readonly DROP_OFF: "drop_off";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type ServiceLocationType = ReturnType<typeof ServiceLocationType>;
/** Optional metric and imperial maintenance mileage values. */
export declare class MaintenanceMileageInput {
    readonly monthly_km: number | UnsetType | null;
    readonly total_km: number | UnsetType | null;
    readonly monthly_mile: number | UnsetType | null;
    readonly total_mile: number | UnsetType | null;
    static __fields: any[][];
    constructor(monthly_km?: number | UnsetType | null, total_km?: number | UnsetType | null, monthly_mile?: number | UnsetType | null, total_mile?: number | UnsetType | null);
    constructor(options: {
        monthly_km?: number | UnsetType | null;
        total_km?: number | UnsetType | null;
        monthly_mile?: number | UnsetType | null;
        total_mile?: number | UnsetType | null;
    });
}
/** Required customer phone and email for a service appointment. */
export declare class ServiceCustomerInput {
    readonly phone: string;
    readonly email: string;
    static __fields: (string | symbol)[][];
    constructor(phone: string, email: string);
    constructor(options: {
        phone: string;
        email: string;
    });
}
/** Optional nullable discount fields copied into an appointment operation. */
export declare class ServiceDiscountInput {
    readonly code: string | UnsetType | null;
    readonly description: string | UnsetType | null;
    readonly price: number | UnsetType | null;
    static __fields: any[][];
    constructor(code?: string | UnsetType | null, description?: string | UnsetType | null, price?: number | UnsetType | null);
    constructor(options: {
        code?: string | UnsetType | null;
        description?: string | UnsetType | null;
        price?: number | UnsetType | null;
    });
}
/** Optional nullable fields for one requested service operation. */
export declare class ServiceOperationInput {
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
    static __fields: any[][];
    constructor(operation_code_id?: string | UnsetType | null, operation_code_description?: string | UnsetType | null, customer_comments?: string | UnsetType | null, description?: string | UnsetType | null, $package?: string | UnsetType | null, maintenance?: boolean | UnsetType | null, validation?: boolean | UnsetType | null, price?: number | UnsetType | null, labor_hours?: number | UnsetType | null, discounts?: ReadonlyArray<ServiceDiscountInput | null> | UnsetType | null);
    constructor(options: {
        operation_code_id?: string | UnsetType | null;
        operation_code_description?: string | UnsetType | null;
        customer_comments?: string | UnsetType | null;
        description?: string | UnsetType | null;
        $package?: string | UnsetType | null;
        maintenance?: boolean | UnsetType | null;
        validation?: boolean | UnsetType | null;
        price?: number | UnsetType | null;
        labor_hours?: number | UnsetType | null;
        discounts?: ReadonlyArray<ServiceDiscountInput | null> | UnsetType | null;
    });
}
/** Optional nullable advisor fields copied into an appointment. */
export declare class ServiceAdvisorInput {
    readonly advisor_id: string | UnsetType | null;
    readonly name: string | UnsetType | null;
    readonly job_title: string | UnsetType | null;
    readonly email: string | UnsetType | null;
    readonly image_url: string | UnsetType | null;
    static __fields: any[][];
    constructor(advisor_id?: string | UnsetType | null, name?: string | UnsetType | null, job_title?: string | UnsetType | null, email?: string | UnsetType | null, image_url?: string | UnsetType | null);
    constructor(options: {
        advisor_id?: string | UnsetType | null;
        name?: string | UnsetType | null;
        job_title?: string | UnsetType | null;
        email?: string | UnsetType | null;
        image_url?: string | UnsetType | null;
    });
}
/** Optional nullable appointment transportation preferences. */
export declare class TransportationPreferencesInput {
    readonly valet_required: boolean | UnsetType | null;
    readonly loaner_required: boolean | UnsetType | null;
    readonly pick_up_required: boolean | UnsetType | null;
    readonly drop_off_required: boolean | UnsetType | null;
    readonly reminders: string | UnsetType | null;
    static __fields: any[][];
    constructor(valet_required?: boolean | UnsetType | null, loaner_required?: boolean | UnsetType | null, pick_up_required?: boolean | UnsetType | null, drop_off_required?: boolean | UnsetType | null, reminders?: string | UnsetType | null);
    constructor(options: {
        valet_required?: boolean | UnsetType | null;
        loaner_required?: boolean | UnsetType | null;
        pick_up_required?: boolean | UnsetType | null;
        drop_off_required?: boolean | UnsetType | null;
        reminders?: string | UnsetType | null;
    });
}
/** Required transportation identity and optional preference details. */
export declare class TransportationOptionInput {
    readonly code: string;
    readonly name: string;
    readonly is_valet: boolean | UnsetType | null;
    readonly is_loaner_available: boolean | UnsetType | null;
    readonly comments: string | UnsetType | null;
    readonly preferences: TransportationPreferencesInput | UnsetType | null;
    static __fields: any[][];
    constructor(code: string, name: string, is_valet?: boolean | UnsetType | null, is_loaner_available?: boolean | UnsetType | null, comments?: string | UnsetType | null, preferences?: TransportationPreferencesInput | UnsetType | null);
    constructor(options: {
        code: string;
        name: string;
        is_valet?: boolean | UnsetType | null;
        is_loaner_available?: boolean | UnsetType | null;
        comments?: string | UnsetType | null;
        preferences?: TransportationPreferencesInput | UnsetType | null;
    });
}
/** Required appointment odometer value and unit. */
export declare class ServiceOdometerInput {
    readonly unit: DistanceUnit;
    readonly value: number;
    static __fields: (string | symbol)[][];
    constructor(unit: DistanceUnit, value: number);
    constructor(options: {
        unit: DistanceUnit;
        value: number;
    });
}
/** Complete service appointment input from the mobile schema. */
export declare class ServiceAppointmentInput {
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
    static __fields: any[][];
    constructor(vin: string, dealer_id: string, appointment_date: $.DateValue, contact_methods: ServiceCustomerInput, service_operations: ReadonlyArray<ServiceOperationInput | null>, odometer: ServiceOdometerInput, drop_off_address?: AddressInput | UnsetType | null, pick_up_address?: AddressInput | UnsetType | null, transport?: TransportationOptionInput | UnsetType | null, advisor?: ServiceAdvisorInput | UnsetType | null, additional_comments?: string | UnsetType | null);
    constructor(options: {
        vin: string;
        dealer_id: string;
        appointment_date: $.DateValue;
        contact_methods: ServiceCustomerInput;
        service_operations: ReadonlyArray<ServiceOperationInput | null>;
        odometer: ServiceOdometerInput;
        drop_off_address?: AddressInput | UnsetType | null;
        pick_up_address?: AddressInput | UnsetType | null;
        transport?: TransportationOptionInput | UnsetType | null;
        advisor?: ServiceAdvisorInput | UnsetType | null;
        additional_comments?: string | UnsetType | null;
    });
}
export declare function all_dealers_variables(vin?: string | UnsetType | null, page_size?: number | UnsetType | null): Record<string, unknown>;
export declare function dealers_by_search_variables(options?: {
    vin?: string | UnsetType | null;
    service_code?: ServiceCode | UnsetType | null;
    radius?: number | UnsetType | null;
    latitude?: number | UnsetType | null;
    longitude?: number | UnsetType | null;
}): Record<string, unknown>;
export declare function maintenance_visits_variables(vin: string, mileage: MaintenanceMileageInput, severity_id: string, past_visits: number, future_visits: number): Record<string, unknown>;
export declare function service_advisors_variables(dealer_id: string, service_operation_ids: ReadonlyArray<string>, vin?: string | UnsetType | null): Record<string, unknown>;
export declare function service_time_slots_variables(dealer_id: string, service_operation_ids: ReadonlyArray<string>, start_date: $.DateValue, options?: {
    advisor_id?: string | UnsetType | null;
    transportation_code?: string | UnsetType | null;
    location_type?: ServiceLocationType | UnsetType | null;
    vin?: string | UnsetType | null;
}): Record<string, unknown>;
export declare function service_appointments_variables(vin: string, start_date?: $.DateValue | UnsetType | null, end_date?: $.DateValue | UnsetType | null): Record<string, unknown>;
export declare function service_appointment_variables(config: ServiceAppointmentInput): Record<string, unknown>;
export declare function update_service_appointment_variables(appointment_id: string, config: ServiceAppointmentInput): Record<string, unknown>;
export declare function cancel_service_appointment_variables(appointment_id: string, dealer_id: string, vin?: string | UnsetType | null): Record<string, unknown>;
export declare function _service_operation_input(config: ServiceOperationInput): Record<string, unknown>;
export declare function _service_advisor_input(config: ServiceAdvisorInput): Record<string, unknown>;
export declare function _transportation_option_input(config: TransportationOptionInput): Record<string, unknown>;
