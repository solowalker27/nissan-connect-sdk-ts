import { _is_terminal_service_request, _nullable_success, _success } from "./_client_helpers";
export { _is_terminal_service_request, _nullable_success, _success };
import { profile_for } from "./_profile";
export { profile_for };
import { _NissanTransport } from "./_transport";
export { _NissanTransport };
import { RequestProofProvider, TokenListener } from "./callbacks";
export { RequestProofProvider, TokenListener };
import { Country } from "./countries";
export { Country };
import { ReadOnlyError, ResponseError } from "./exceptions";
export { ReadOnlyError, ResponseError };
import { ServiceRequest, ServiceRequestKind, ServiceRequestResult, Tokens, VehicleAlertKind, VehicleAlertRequest } from "./models";
export { ServiceRequest, ServiceRequestKind, ServiceRequestResult, Tokens, VehicleAlertKind, VehicleAlertRequest };
import { parse_service_request, parse_service_request_result, parse_vehicle_alert_request } from "./parsing";
export { parse_service_request, parse_service_request_result, parse_vehicle_alert_request };
import { RequestProof } from "./request_proof";
export { RequestProof };
/** Translated upstream _NissanClientBase. */
export declare class _NissanClientBase {
    constructor(...__args: any[]);
    /** Translated upstream __init__. */
    __init__(...__args: any[]): any;
    /** Return the country selected for this client. */
    get country(): Country;
    /** Return whether state-changing operations are blocked. */
    get read_only(): boolean;
    /** Return the currently active OAuth tokens. */
    get tokens(): Tokens | null;
    /** Return the identifier used for a mobile OAuth authorization scope. */
    get oauth_device_id(): string;
    async_authenticate(email: string, password: string): Promise<Tokens>;
    async_refresh_tokens(): Promise<Tokens>;
    async_check_service_request(vin: string, request: ServiceRequest): Promise<ServiceRequestResult>;
    async_wait_for_service_request(vin: string, request: ServiceRequest, options?: {
        poll_interval_seconds?: number;
        timeout_seconds?: number;
    }): Promise<ServiceRequestResult>;
    _async_simple_service_request(operation_name: string, document: string, root_field: string, vin: string, kind: ServiceRequestKind): Promise<ServiceRequest>;
    _async_service_request(operation_name: string, document: string, root_field: string, variables: Record<string, unknown>, kind: ServiceRequestKind, options?: {
        extra_headers?: Record<string, string> | null;
    }): Promise<ServiceRequest>;
    _async_vehicle_alert_request(operation_name: string, document: string, root_field: string, variables: Record<string, unknown>, kind: VehicleAlertKind): Promise<VehicleAlertRequest>;
    _async_success_operation(operation_name: string, document: string, root_field: string, variables: Record<string, unknown>): Promise<boolean>;
    _async_nullable_success_operation(operation_name: string, document: string, root_field: string, variables: Record<string, unknown>, options?: {
        extra_headers?: Record<string, string> | null;
    }): Promise<boolean>;
    _ensure_write_allowed(): null;
}
