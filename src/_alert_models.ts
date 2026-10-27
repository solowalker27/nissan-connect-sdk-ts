// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

/** Nullable address fields attached to a configured boundary alert. */
export class AlertAddress {
readonly address1: string | null;
readonly address2: string | null;
readonly city: string | null;
readonly state: string | null;
readonly country: string | null;
readonly postal_code: string | null;
static __fields = [["address1", $.MISSING], ["address2", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["country", $.MISSING], ["postal_code", $.MISSING]];
constructor(address1: string | null, address2: string | null, city: string | null, state: string | null, country: string | null, postal_code: string | null);
constructor(options: { address1: string | null; address2: string | null; city: string | null; state: string | null; country: string | null; postal_code: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AlertAddress, __args);  Object.freeze(this); }
}
$.classType(AlertAddress);

/** Coordinates attached to an alert configuration or breach event. */
export class AlertLocation {
readonly latitude: number | null;
readonly longitude: number | null;
static __fields = [["latitude", $.MISSING], ["longitude", $.MISSING]];
constructor(latitude: number | null, longitude: number | null);
constructor(options: { latitude: number | null; longitude: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AlertLocation, __args);  Object.freeze(this); }
}
$.classType(AlertLocation);

/** A nullable distance value and its raw upstream unit. */
export class AlertDistance {
readonly value: number | null;
readonly unit: string | null;
static __fields = [["value", $.MISSING], ["unit", $.MISSING]];
constructor(value: number | null, unit: string | null);
constructor(options: { value: number | null; unit: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, AlertDistance, __args);  Object.freeze(this); }
}
$.classType(AlertDistance);

/** A configured entry or exit boundary alert. */
export class BoundaryAlert {
readonly service_request_id: string;
readonly alert_type: string | null;
readonly name: string;
readonly enabled: boolean;
readonly in_vehicle_warning: boolean;
readonly address: AlertAddress | null;
readonly location: AlertLocation | null;
readonly radius: AlertDistance | null;
static __fields = [["service_request_id", $.MISSING], ["alert_type", $.MISSING], ["name", $.MISSING], ["enabled", $.MISSING], ["in_vehicle_warning", $.MISSING], ["address", $.MISSING], ["location", $.MISSING], ["radius", $.MISSING]];
constructor(service_request_id: string, alert_type: string | null, name: string, enabled: boolean, in_vehicle_warning: boolean, address: AlertAddress | null, location: AlertLocation | null, radius: AlertDistance | null);
constructor(options: { service_request_id: string; alert_type: string | null; name: string; enabled: boolean; in_vehicle_warning: boolean; address: AlertAddress | null; location: AlertLocation | null; radius: AlertDistance | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, BoundaryAlert, __args);  Object.freeze(this); }
}
$.classType(BoundaryAlert);

/** Schedule attached to a configured curfew alert. */
export class CurfewSchedule {
readonly all_day: boolean | null;
readonly start_date_time: $.DateValue;
readonly duration: string | null;
readonly week_days: ReadonlyArray<string | null>;
static __fields = [["all_day", $.MISSING], ["start_date_time", $.MISSING], ["duration", $.MISSING], ["week_days", $.MISSING]];
constructor(all_day: boolean | null, start_date_time: $.DateValue, duration: string | null, week_days: ReadonlyArray<string | null>);
constructor(options: { all_day: boolean | null; start_date_time: $.DateValue; duration: string | null; week_days: ReadonlyArray<string | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CurfewSchedule, __args);  Object.freeze(this); }
}
$.classType(CurfewSchedule);

/** A configured vehicle curfew alert. */
export class CurfewAlert {
readonly service_request_id: string;
readonly name: string;
readonly enabled: boolean;
readonly in_vehicle_warning: boolean;
readonly schedule: CurfewSchedule | null;
static __fields = [["service_request_id", $.MISSING], ["name", $.MISSING], ["enabled", $.MISSING], ["in_vehicle_warning", $.MISSING], ["schedule", $.MISSING]];
constructor(service_request_id: string, name: string, enabled: boolean, in_vehicle_warning: boolean, schedule: CurfewSchedule | null);
constructor(options: { service_request_id: string; name: string; enabled: boolean; in_vehicle_warning: boolean; schedule: CurfewSchedule | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, CurfewAlert, __args);  Object.freeze(this); }
}
$.classType(CurfewAlert);

/** Speed threshold with its raw upstream unit. */
export class SpeedThreshold {
readonly unit: string | null;
readonly value: number | null;
static __fields = [["unit", $.MISSING], ["value", $.MISSING]];
constructor(unit: string | null, value: number | null);
constructor(options: { unit: string | null; value: number | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SpeedThreshold, __args);  Object.freeze(this); }
}
$.classType(SpeedThreshold);

/** A configured vehicle speed alert. */
export class SpeedAlert {
readonly service_request_id: string;
readonly name: string;
readonly enabled: boolean;
readonly in_vehicle_warning: boolean;
readonly threshold: SpeedThreshold | null;
static __fields = [["service_request_id", $.MISSING], ["name", $.MISSING], ["enabled", $.MISSING], ["in_vehicle_warning", $.MISSING], ["threshold", $.MISSING]];
constructor(service_request_id: string, name: string, enabled: boolean, in_vehicle_warning: boolean, threshold: SpeedThreshold | null);
constructor(options: { service_request_id: string; name: string; enabled: boolean; in_vehicle_warning: boolean; threshold: SpeedThreshold | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, SpeedAlert, __args);  Object.freeze(this); }
}
$.classType(SpeedAlert);

/** The currently configured valet boundary alert. */
export class ValetAlert {
readonly service_request_id: string | null;
readonly radius: AlertDistance | null;
static __fields = [["service_request_id", $.MISSING], ["radius", $.MISSING]];
constructor(service_request_id: string | null, radius: AlertDistance | null);
constructor(options: { service_request_id: string | null; radius: AlertDistance | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ValetAlert, __args);  Object.freeze(this); }
}
$.classType(ValetAlert);

/** Nullable alert configurations returned for one connected vehicle. */
export class VehicleAlerts {
readonly boundary_alerts: ReadonlyArray<BoundaryAlert | null> | null;
readonly curfew_alerts: ReadonlyArray<CurfewAlert | null> | null;
readonly speed_alerts: ReadonlyArray<SpeedAlert | null> | null;
readonly valet_alert: ValetAlert | null;
static __fields = [["boundary_alerts", $.MISSING], ["curfew_alerts", $.MISSING], ["speed_alerts", $.MISSING], ["valet_alert", $.MISSING]];
constructor(boundary_alerts: ReadonlyArray<BoundaryAlert | null> | null, curfew_alerts: ReadonlyArray<CurfewAlert | null> | null, speed_alerts: ReadonlyArray<SpeedAlert | null> | null, valet_alert: ValetAlert | null);
constructor(options: { boundary_alerts: ReadonlyArray<BoundaryAlert | null> | null; curfew_alerts: ReadonlyArray<CurfewAlert | null> | null; speed_alerts: ReadonlyArray<SpeedAlert | null> | null; valet_alert: ValetAlert | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleAlerts, __args);  Object.freeze(this); }
}
$.classType(VehicleAlerts);

/** One raw vehicle-alert breach event. */
export class BreachAlert {
readonly service_type: string | null;
readonly breach_date_time: $.DateValue | null;
readonly name: string | null;
readonly location: AlertLocation | null;
static __fields = [["service_type", $.MISSING], ["breach_date_time", $.MISSING], ["name", $.MISSING], ["location", $.MISSING]];
constructor(service_type: string | null, breach_date_time: $.DateValue | null, name: string | null, location: AlertLocation | null);
constructor(options: { service_type: string | null; breach_date_time: $.DateValue | null; name: string | null; location: AlertLocation | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, BreachAlert, __args);  Object.freeze(this); }
}
$.classType(BreachAlert);

/** One nullable page of vehicle-alert breach events. */
export class BreachAlerts {
readonly items_per_page: number | null;
readonly page_number: number | null;
readonly total_items: number | null;
readonly total_pages: number | null;
readonly alerts: ReadonlyArray<BreachAlert | null> | null;
static __fields = [["items_per_page", $.MISSING], ["page_number", $.MISSING], ["total_items", $.MISSING], ["total_pages", $.MISSING], ["alerts", $.MISSING]];
constructor(items_per_page: number | null, page_number: number | null, total_items: number | null, total_pages: number | null, alerts: ReadonlyArray<BreachAlert | null> | null);
constructor(options: { items_per_page: number | null; page_number: number | null; total_items: number | null; total_pages: number | null; alerts: ReadonlyArray<BreachAlert | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, BreachAlerts, __args);  Object.freeze(this); }
}
$.classType(BreachAlerts);
