import { py as $ } from "./_runtime";
import { _SUCCESSFUL_SERVICE_REQUEST_STATUSES, _TERMINAL_SERVICE_REQUEST_STATUSES, SeatClimateOption, ServiceRequestKind, ServiceRequestStatus, TemperatureUnit, VehicleAlertKind, WeekDay } from "./_core_models";
export { _SUCCESSFUL_SERVICE_REQUEST_STATUSES, _TERMINAL_SERVICE_REQUEST_STATUSES, SeatClimateOption, ServiceRequestKind, ServiceRequestStatus, TemperatureUnit, VehicleAlertKind, WeekDay };
import { VehicleLocation } from "./_vehicle_status_models";
export { VehicleLocation };
/** OAuth tokens issued by the MyNISSAN identity service. */
export declare class Tokens {
    readonly access_token: string;
    readonly refresh_token: string;
    readonly id_token: string | null;
    static __fields: ((string | symbol)[] | (string | null)[])[];
    constructor(access_token: string, refresh_token: string, id_token?: string | null);
    constructor(options: {
        access_token: string;
        refresh_token: string;
        id_token?: string | null;
    });
}
/** Optional climate mode for each supported seat position. */
export declare class SeatClimateSettings {
    readonly front_driver: SeatClimateOption | null;
    readonly front_passenger: SeatClimateOption | null;
    readonly rear_left: SeatClimateOption | null;
    readonly rear_right: SeatClimateOption | null;
    readonly rear_center: SeatClimateOption | null;
    readonly third_left: SeatClimateOption | null;
    readonly third_right: SeatClimateOption | null;
    static __fields: (string | null)[][];
    constructor(front_driver?: SeatClimateOption | null, front_passenger?: SeatClimateOption | null, rear_left?: SeatClimateOption | null, rear_right?: SeatClimateOption | null, rear_center?: SeatClimateOption | null, third_left?: SeatClimateOption | null, third_right?: SeatClimateOption | null);
    constructor(options: {
        front_driver?: SeatClimateOption | null;
        front_passenger?: SeatClimateOption | null;
        rear_left?: SeatClimateOption | null;
        rear_right?: SeatClimateOption | null;
        rear_center?: SeatClimateOption | null;
        third_left?: SeatClimateOption | null;
        third_right?: SeatClimateOption | null;
    });
}
/** Optional cabin accessories applied with a climate command. */
export declare class ClimateParameters {
    readonly seats: SeatClimateSettings | null;
    readonly steering_wheel_heater: boolean | null;
    readonly defrost_and_deicer: boolean | null;
    static __fields: (string | null)[][];
    constructor(seats?: SeatClimateSettings | null, steering_wheel_heater?: boolean | null, defrost_and_deicer?: boolean | null);
    constructor(options: {
        seats?: SeatClimateSettings | null;
        steering_wheel_heater?: boolean | null;
        defrost_and_deicer?: boolean | null;
    });
}
/** Target cabin temperature used by climate and engine commands. */
export declare class ClimateSettings {
    readonly temperature: number;
    readonly unit: TemperatureUnit;
    readonly parameters: ClimateParameters | null;
    static __fields: ((string | symbol)[] | (string | null)[])[];
    constructor(temperature: number, unit: TemperatureUnit, parameters?: ClimateParameters | null);
    constructor(options: {
        temperature: number;
        unit: TemperatureUnit;
        parameters?: ClimateParameters | null;
    });
}
/** Fields used to create or replace a recurring charge schedule. */
export declare class ChargeScheduleInput {
    readonly start_date_time: $.DateValue;
    readonly duration: string;
    readonly week_days: ReadonlyArray<WeekDay>;
    static __fields: (string | symbol)[][];
    constructor(start_date_time: $.DateValue, duration: string, week_days: ReadonlyArray<WeekDay>);
    constructor(options: {
        start_date_time: $.DateValue;
        duration: string;
        week_days: ReadonlyArray<WeekDay>;
    });
}
/** Fields used to create or replace a recurring climate schedule. */
export declare class ClimateScheduleInput {
    readonly start_date_time: $.DateValue;
    readonly week_days: ReadonlyArray<WeekDay>;
    readonly climate: ClimateSettings;
    static __fields: (string | symbol)[][];
    constructor(start_date_time: $.DateValue, week_days: ReadonlyArray<WeekDay>, climate: ClimateSettings);
    constructor(options: {
        start_date_time: $.DateValue;
        week_days: ReadonlyArray<WeekDay>;
        climate: ClimateSettings;
    });
}
/** An asynchronous remote request accepted by Nissan. */
export declare class ServiceRequest {
    readonly id: string;
    readonly kind: ServiceRequestKind;
    readonly climate_defaults_success: boolean | null;
    readonly climate_defaults_error_message: string | null;
    static __fields: ((string | symbol)[] | (string | null)[])[];
    constructor(id: string, kind: ServiceRequestKind, climate_defaults_success?: boolean | null, climate_defaults_error_message?: string | null);
    constructor(options: {
        id: string;
        kind: ServiceRequestKind;
        climate_defaults_success?: boolean | null;
        climate_defaults_error_message?: string | null;
    });
}
/** An asynchronous vehicle-alert change accepted by Nissan. */
export declare class VehicleAlertRequest {
    readonly id: string;
    readonly kind: VehicleAlertKind;
    static __fields: (string | symbol)[][];
    constructor(id: string, kind: VehicleAlertKind);
    constructor(options: {
        id: string;
        kind: VehicleAlertKind;
    });
}
/** The latest upstream state of an asynchronous remote request. */
export declare class ServiceRequestResult {
    readonly status: ServiceRequestStatus | null;
    readonly status_details: string | null;
    readonly location: VehicleLocation | null;
    readonly activation_date_time: $.DateValue | null;
    readonly status_change_date_time: $.DateValue | null;
    static __fields: ((string | symbol)[] | (string | null)[])[];
    constructor(status: ServiceRequestStatus | null, status_details?: string | null, location?: VehicleLocation | null, activation_date_time?: $.DateValue | null, status_change_date_time?: $.DateValue | null);
    constructor(options: {
        status: ServiceRequestStatus | null;
        status_details?: string | null;
        location?: VehicleLocation | null;
        activation_date_time?: $.DateValue | null;
        status_change_date_time?: $.DateValue | null;
    });
    /** Return whether Nissan has finished processing the request. */
    get is_terminal(): boolean;
    /** Return whether the request finished with a successful status. */
    get is_success(): boolean;
}
