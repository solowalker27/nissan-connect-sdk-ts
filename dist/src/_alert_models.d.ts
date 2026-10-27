import { py as $ } from "./_runtime";
/** Nullable address fields attached to a configured boundary alert. */
export declare class AlertAddress {
    readonly address1: string | null;
    readonly address2: string | null;
    readonly city: string | null;
    readonly state: string | null;
    readonly country: string | null;
    readonly postal_code: string | null;
    static __fields: (string | symbol)[][];
    constructor(address1: string | null, address2: string | null, city: string | null, state: string | null, country: string | null, postal_code: string | null);
    constructor(options: {
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        country: string | null;
        postal_code: string | null;
    });
}
/** Coordinates attached to an alert configuration or breach event. */
export declare class AlertLocation {
    readonly latitude: number | null;
    readonly longitude: number | null;
    static __fields: (string | symbol)[][];
    constructor(latitude: number | null, longitude: number | null);
    constructor(options: {
        latitude: number | null;
        longitude: number | null;
    });
}
/** A nullable distance value and its raw upstream unit. */
export declare class AlertDistance {
    readonly value: number | null;
    readonly unit: string | null;
    static __fields: (string | symbol)[][];
    constructor(value: number | null, unit: string | null);
    constructor(options: {
        value: number | null;
        unit: string | null;
    });
}
/** A configured entry or exit boundary alert. */
export declare class BoundaryAlert {
    readonly service_request_id: string;
    readonly alert_type: string | null;
    readonly name: string;
    readonly enabled: boolean;
    readonly in_vehicle_warning: boolean;
    readonly address: AlertAddress | null;
    readonly location: AlertLocation | null;
    readonly radius: AlertDistance | null;
    static __fields: (string | symbol)[][];
    constructor(service_request_id: string, alert_type: string | null, name: string, enabled: boolean, in_vehicle_warning: boolean, address: AlertAddress | null, location: AlertLocation | null, radius: AlertDistance | null);
    constructor(options: {
        service_request_id: string;
        alert_type: string | null;
        name: string;
        enabled: boolean;
        in_vehicle_warning: boolean;
        address: AlertAddress | null;
        location: AlertLocation | null;
        radius: AlertDistance | null;
    });
}
/** Schedule attached to a configured curfew alert. */
export declare class CurfewSchedule {
    readonly all_day: boolean | null;
    readonly start_date_time: $.DateValue;
    readonly duration: string | null;
    readonly week_days: ReadonlyArray<string | null>;
    static __fields: (string | symbol)[][];
    constructor(all_day: boolean | null, start_date_time: $.DateValue, duration: string | null, week_days: ReadonlyArray<string | null>);
    constructor(options: {
        all_day: boolean | null;
        start_date_time: $.DateValue;
        duration: string | null;
        week_days: ReadonlyArray<string | null>;
    });
}
/** A configured vehicle curfew alert. */
export declare class CurfewAlert {
    readonly service_request_id: string;
    readonly name: string;
    readonly enabled: boolean;
    readonly in_vehicle_warning: boolean;
    readonly schedule: CurfewSchedule | null;
    static __fields: (string | symbol)[][];
    constructor(service_request_id: string, name: string, enabled: boolean, in_vehicle_warning: boolean, schedule: CurfewSchedule | null);
    constructor(options: {
        service_request_id: string;
        name: string;
        enabled: boolean;
        in_vehicle_warning: boolean;
        schedule: CurfewSchedule | null;
    });
}
/** Speed threshold with its raw upstream unit. */
export declare class SpeedThreshold {
    readonly unit: string | null;
    readonly value: number | null;
    static __fields: (string | symbol)[][];
    constructor(unit: string | null, value: number | null);
    constructor(options: {
        unit: string | null;
        value: number | null;
    });
}
/** A configured vehicle speed alert. */
export declare class SpeedAlert {
    readonly service_request_id: string;
    readonly name: string;
    readonly enabled: boolean;
    readonly in_vehicle_warning: boolean;
    readonly threshold: SpeedThreshold | null;
    static __fields: (string | symbol)[][];
    constructor(service_request_id: string, name: string, enabled: boolean, in_vehicle_warning: boolean, threshold: SpeedThreshold | null);
    constructor(options: {
        service_request_id: string;
        name: string;
        enabled: boolean;
        in_vehicle_warning: boolean;
        threshold: SpeedThreshold | null;
    });
}
/** The currently configured valet boundary alert. */
export declare class ValetAlert {
    readonly service_request_id: string | null;
    readonly radius: AlertDistance | null;
    static __fields: (string | symbol)[][];
    constructor(service_request_id: string | null, radius: AlertDistance | null);
    constructor(options: {
        service_request_id: string | null;
        radius: AlertDistance | null;
    });
}
/** Nullable alert configurations returned for one connected vehicle. */
export declare class VehicleAlerts {
    readonly boundary_alerts: ReadonlyArray<BoundaryAlert | null> | null;
    readonly curfew_alerts: ReadonlyArray<CurfewAlert | null> | null;
    readonly speed_alerts: ReadonlyArray<SpeedAlert | null> | null;
    readonly valet_alert: ValetAlert | null;
    static __fields: (string | symbol)[][];
    constructor(boundary_alerts: ReadonlyArray<BoundaryAlert | null> | null, curfew_alerts: ReadonlyArray<CurfewAlert | null> | null, speed_alerts: ReadonlyArray<SpeedAlert | null> | null, valet_alert: ValetAlert | null);
    constructor(options: {
        boundary_alerts: ReadonlyArray<BoundaryAlert | null> | null;
        curfew_alerts: ReadonlyArray<CurfewAlert | null> | null;
        speed_alerts: ReadonlyArray<SpeedAlert | null> | null;
        valet_alert: ValetAlert | null;
    });
}
/** One raw vehicle-alert breach event. */
export declare class BreachAlert {
    readonly service_type: string | null;
    readonly breach_date_time: $.DateValue | null;
    readonly name: string | null;
    readonly location: AlertLocation | null;
    static __fields: (string | symbol)[][];
    constructor(service_type: string | null, breach_date_time: $.DateValue | null, name: string | null, location: AlertLocation | null);
    constructor(options: {
        service_type: string | null;
        breach_date_time: $.DateValue | null;
        name: string | null;
        location: AlertLocation | null;
    });
}
/** One nullable page of vehicle-alert breach events. */
export declare class BreachAlerts {
    readonly items_per_page: number | null;
    readonly page_number: number | null;
    readonly total_items: number | null;
    readonly total_pages: number | null;
    readonly alerts: ReadonlyArray<BreachAlert | null> | null;
    static __fields: (string | symbol)[][];
    constructor(items_per_page: number | null, page_number: number | null, total_items: number | null, total_pages: number | null, alerts: ReadonlyArray<BreachAlert | null> | null);
    constructor(options: {
        items_per_page: number | null;
        page_number: number | null;
        total_items: number | null;
        total_pages: number | null;
        alerts: ReadonlyArray<BreachAlert | null> | null;
    });
}
