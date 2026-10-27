import { py as $ } from "./_runtime";
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
declare const _DealerClientMixin_base: any;
/** Translated upstream _DealerClientMixin. */
export declare class _DealerClientMixin extends _DealerClientMixin_base {
    constructor(...__args: any[]);
    async_get_all_dealers(options?: {
        vin?: string | UnsetType | null;
        page_size?: number | UnsetType | null;
    }): Promise<ReadonlyArray<DealerSummary | null> | null>;
    async_get_dealers(postal_code: string): Promise<ReadonlyArray<Dealer | null> | null>;
    async_search_dealers(options?: {
        vin?: string | UnsetType | null;
        service_code?: ServiceCode | UnsetType | null;
        radius?: number | UnsetType | null;
        latitude?: number | UnsetType | null;
        longitude?: number | UnsetType | null;
    }): Promise<ReadonlyArray<Dealer | null> | null>;
    async_get_dealer_deals_and_images(dealer_id: string): Promise<DealerDealsAndImages>;
    async_get_dealer(dealer_id: string): Promise<Dealer | null>;
    async_generate_all_maintenance_visits(vin: string, mileage: MaintenanceMileageInput, severity_id: string, past_visits: number, future_visits: number): Promise<MaintenanceVisits | null>;
    async_generate_next_maintenance_visit(vin: string, mileage: MaintenanceMileageInput, severity_id: string, past_visits: number, future_visits: number): Promise<MaintenanceVisits | null>;
    async_generate_next_maintenance_visit_no_severity(vin: string, mileage: MaintenanceMileageInput, severity_id: string, past_visits: number, future_visits: number): Promise<MaintenanceVisits | null>;
    async_get_service_advisors(dealer_id: string, service_operation_ids: ReadonlyArray<string>, options?: {
        vin?: string | UnsetType | null;
    }): Promise<ReadonlyArray<ServiceAdvisor | null> | null>;
    async_get_service_appointment_time_slots(dealer_id: string, service_operation_ids: ReadonlyArray<string>, start_date: $.DateValue, options?: {
        advisor_id?: string | UnsetType | null;
        transportation_code?: string | UnsetType | null;
        location_type?: ServiceLocationType | UnsetType | null;
        vin?: string | UnsetType | null;
    }): Promise<ReadonlyArray<ServiceAppointmentTimeSlot | null>>;
    async_get_service_appointments(vin: string, options?: {
        start_date?: $.DateValue | UnsetType | null;
        end_date?: $.DateValue | UnsetType | null;
    }): Promise<ReadonlyArray<ServiceAppointment | null> | null>;
    async_get_service_categories(): Promise<ReadonlyArray<ServiceCategory | null> | null>;
    async_get_service_operations(vin: string, dealer_id: string): Promise<ReadonlyArray<DealerServiceOperation | null> | null>;
    async_get_service_operations_by_mileage(vin: string, dealer_id: string, mileage: number): Promise<ReadonlyArray<ServiceOperationsAtInterval | null> | null>;
    async_get_transportation_options(dealer_id: string, service_operation_ids: ReadonlyArray<string>, options?: {
        vin?: string | UnsetType | null;
    }): Promise<ReadonlyArray<ServiceTransportationOption | null> | null>;
    async_cancel_service_appointment(appointment_id: string, dealer_id: string, options?: {
        vin?: string | UnsetType | null;
    }): Promise<CancelServiceAppointmentResult | null>;
    async_create_service_appointment(appointment: ServiceAppointmentInput): Promise<ServiceAppointmentCreateResult | null>;
    async_update_service_appointment(appointment_id: string, appointment: ServiceAppointmentInput): Promise<ServiceAppointmentUpdateResult | null>;
    async_update_vehicle_preferred_dealer(vin: string, preferred_dealer_id: string): Promise<PreferredDealerUpdateResult | null>;
}
export interface _DealerClientMixin extends _NissanClientBase {
}
