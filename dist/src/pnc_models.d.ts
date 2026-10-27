import { py as $ } from "./_runtime";
export declare const PlugAndChargeStatusInput: $.EnumType<{
    readonly ENABLE: "ENABLE";
    readonly DISABLE: "DISABLE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type PlugAndChargeStatusInput = ReturnType<typeof PlugAndChargeStatusInput>;
export declare const PlugAndChargeServiceState: $.EnumType<{
    readonly PENDING: "PENDING";
    readonly ENABLING: "ENABLING";
    readonly ENABLED: "ENABLED";
    readonly DISABLING: "DISABLING";
    readonly DISABLED: "DISABLED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type PlugAndChargeServiceState = ReturnType<typeof PlugAndChargeServiceState>;
export declare const PublicChargeSessionState: $.EnumType<{
    readonly ACTIVE: "ACTIVE";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly PENDING: "PENDING";
    readonly RESERVATION: "RESERVATION";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type PublicChargeSessionState = ReturnType<typeof PublicChargeSessionState>;
export declare const PlugAndChargeUpdateOutcome: $.EnumType<{
    readonly SUCCESS: "SUCCESS";
    readonly PENDING: "PENDING";
    readonly FAILED: "FAILED";
    readonly DISABLE_ERROR: "DISABLE_ERROR";
    readonly UNKNOWN: "UNKNOWN";
}>;
export type PlugAndChargeUpdateOutcome = ReturnType<typeof PlugAndChargeUpdateOutcome>;
export declare const PublicChargeSessionStopOutcome: $.EnumType<{
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly UNEXPECTED_ERROR: "UNEXPECTED_ERROR";
    readonly UNKNOWN: "UNKNOWN";
}>;
export type PublicChargeSessionStopOutcome = ReturnType<typeof PublicChargeSessionStopOutcome>;
export declare const PlugAndChargeCertificateRetryOutcome: $.EnumType<{
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly UNKNOWN: "UNKNOWN";
}>;
export type PlugAndChargeCertificateRetryOutcome = ReturnType<typeof PlugAndChargeCertificateRetryOutcome>;
/** Nullable vehicle and enrollment fields in a Plug & Charge response. */
export declare class PlugAndChargeServiceData {
    readonly vin: string | null;
    readonly state: PlugAndChargeServiceState | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string | null, state: PlugAndChargeServiceState | null);
    constructor(options: {
        vin: string | null;
        state: PlugAndChargeServiceState | null;
    });
}
/** Status envelope returned by Plug & Charge reads and updates. */
export declare class PlugAndChargeServiceStatus {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: PlugAndChargeServiceData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: PlugAndChargeServiceData | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: PlugAndChargeServiceData | null;
    });
    update_outcome(requested_status: PlugAndChargeStatusInput): PlugAndChargeUpdateOutcome;
}
/** Nullable details returned after starting a public charging session. */
export declare class PublicChargeSessionStartData {
    readonly vin: string | null;
    readonly evse_id: string | null;
    readonly status: PublicChargeSessionState | null;
    readonly message: string | null;
    readonly stop_session_allowed: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string | null, evse_id: string | null, status: PublicChargeSessionState | null, message: string | null, stop_session_allowed: boolean | null);
    constructor(options: {
        vin: string | null;
        evse_id: string | null;
        status: PublicChargeSessionState | null;
        message: string | null;
        stop_session_allowed: boolean | null;
    });
}
/** Status envelope returned by the public-session start mutation. */
export declare class PublicChargeSessionStartResult {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: PublicChargeSessionStartData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: PublicChargeSessionStartData | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: PublicChargeSessionStartData | null;
    });
}
/** Status envelope returned by the public-session stop mutation. */
export declare class PublicChargeSessionStopResult {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
    });
    /** Return the upstream service's interpretation of the EMP status code. */
    get outcome(): PublicChargeSessionStopOutcome;
}
/** Nullable string coordinates reported for a public charging session. */
export declare class PublicChargeLocationCoordinates {
    readonly latitude: string | null;
    readonly longitude: string | null;
    static __fields: (string | symbol)[][];
    constructor(latitude: string | null, longitude: string | null);
    constructor(options: {
        latitude: string | null;
        longitude: string | null;
    });
}
/** Nullable details for the current Nissan Energy charging session. */
export declare class PublicChargeSessionData {
    readonly session_uid: string | null;
    readonly status: PublicChargeSessionState | null;
    readonly message: string | null;
    readonly stop_session_allowed: boolean | null;
    readonly cpo_name: string | null;
    readonly physical_reference: string | null;
    readonly location_address: string | null;
    readonly location_city: string | null;
    readonly location_state: string | null;
    readonly location_coordinates: PublicChargeLocationCoordinates | null;
    static __fields: (string | symbol)[][];
    constructor(session_uid: string | null, status: PublicChargeSessionState | null, message: string | null, stop_session_allowed: boolean | null, cpo_name: string | null, physical_reference: string | null, location_address: string | null, location_city: string | null, location_state: string | null, location_coordinates: PublicChargeLocationCoordinates | null);
    constructor(options: {
        session_uid: string | null;
        status: PublicChargeSessionState | null;
        message: string | null;
        stop_session_allowed: boolean | null;
        cpo_name: string | null;
        physical_reference: string | null;
        location_address: string | null;
        location_city: string | null;
        location_state: string | null;
        location_coordinates: PublicChargeLocationCoordinates | null;
    });
}
/** Status envelope for the current Nissan Energy charging session. */
export declare class PublicChargeSessionStatus {
    readonly status_code: string | null;
    readonly status_message: string | null;
    readonly timestamp: string | null;
    readonly data: PublicChargeSessionData | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null, status_message: string | null, timestamp: string | null, data: PublicChargeSessionData | null);
    constructor(options: {
        status_code: string | null;
        status_message: string | null;
        timestamp: string | null;
        data: PublicChargeSessionData | null;
    });
}
/** Nullable EMP status code returned by certificate-install retry. */
export declare class PlugAndChargeCertificateRetryResult {
    readonly status_code: string | null;
    static __fields: (string | symbol)[][];
    constructor(status_code: string | null);
    constructor(options: {
        status_code: string | null;
    });
    /** Return the upstream service's interpretation of certificate-retry status. */
    get outcome(): PlugAndChargeCertificateRetryOutcome;
}
