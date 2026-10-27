"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreachAlerts = exports.BreachAlert = exports.VehicleAlerts = exports.ValetAlert = exports.SpeedAlert = exports.SpeedThreshold = exports.CurfewAlert = exports.CurfewSchedule = exports.BoundaryAlert = exports.AlertDistance = exports.AlertLocation = exports.AlertAddress = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
/** Nullable address fields attached to a configured boundary alert. */
class AlertAddress {
    address1;
    address2;
    city;
    state;
    country;
    postal_code;
    static __fields = [["address1", _runtime_1.py.MISSING], ["address2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AlertAddress, __args); Object.freeze(this); }
}
exports.AlertAddress = AlertAddress;
_runtime_1.py.classType(AlertAddress);
/** Coordinates attached to an alert configuration or breach event. */
class AlertLocation {
    latitude;
    longitude;
    static __fields = [["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AlertLocation, __args); Object.freeze(this); }
}
exports.AlertLocation = AlertLocation;
_runtime_1.py.classType(AlertLocation);
/** A nullable distance value and its raw upstream unit. */
class AlertDistance {
    value;
    unit;
    static __fields = [["value", _runtime_1.py.MISSING], ["unit", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AlertDistance, __args); Object.freeze(this); }
}
exports.AlertDistance = AlertDistance;
_runtime_1.py.classType(AlertDistance);
/** A configured entry or exit boundary alert. */
class BoundaryAlert {
    service_request_id;
    alert_type;
    name;
    enabled;
    in_vehicle_warning;
    address;
    location;
    radius;
    static __fields = [["service_request_id", _runtime_1.py.MISSING], ["alert_type", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["enabled", _runtime_1.py.MISSING], ["in_vehicle_warning", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["location", _runtime_1.py.MISSING], ["radius", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, BoundaryAlert, __args); Object.freeze(this); }
}
exports.BoundaryAlert = BoundaryAlert;
_runtime_1.py.classType(BoundaryAlert);
/** Schedule attached to a configured curfew alert. */
class CurfewSchedule {
    all_day;
    start_date_time;
    duration;
    week_days;
    static __fields = [["all_day", _runtime_1.py.MISSING], ["start_date_time", _runtime_1.py.MISSING], ["duration", _runtime_1.py.MISSING], ["week_days", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CurfewSchedule, __args); Object.freeze(this); }
}
exports.CurfewSchedule = CurfewSchedule;
_runtime_1.py.classType(CurfewSchedule);
/** A configured vehicle curfew alert. */
class CurfewAlert {
    service_request_id;
    name;
    enabled;
    in_vehicle_warning;
    schedule;
    static __fields = [["service_request_id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["enabled", _runtime_1.py.MISSING], ["in_vehicle_warning", _runtime_1.py.MISSING], ["schedule", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CurfewAlert, __args); Object.freeze(this); }
}
exports.CurfewAlert = CurfewAlert;
_runtime_1.py.classType(CurfewAlert);
/** Speed threshold with its raw upstream unit. */
class SpeedThreshold {
    unit;
    value;
    static __fields = [["unit", _runtime_1.py.MISSING], ["value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SpeedThreshold, __args); Object.freeze(this); }
}
exports.SpeedThreshold = SpeedThreshold;
_runtime_1.py.classType(SpeedThreshold);
/** A configured vehicle speed alert. */
class SpeedAlert {
    service_request_id;
    name;
    enabled;
    in_vehicle_warning;
    threshold;
    static __fields = [["service_request_id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["enabled", _runtime_1.py.MISSING], ["in_vehicle_warning", _runtime_1.py.MISSING], ["threshold", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, SpeedAlert, __args); Object.freeze(this); }
}
exports.SpeedAlert = SpeedAlert;
_runtime_1.py.classType(SpeedAlert);
/** The currently configured valet boundary alert. */
class ValetAlert {
    service_request_id;
    radius;
    static __fields = [["service_request_id", _runtime_1.py.MISSING], ["radius", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ValetAlert, __args); Object.freeze(this); }
}
exports.ValetAlert = ValetAlert;
_runtime_1.py.classType(ValetAlert);
/** Nullable alert configurations returned for one connected vehicle. */
class VehicleAlerts {
    boundary_alerts;
    curfew_alerts;
    speed_alerts;
    valet_alert;
    static __fields = [["boundary_alerts", _runtime_1.py.MISSING], ["curfew_alerts", _runtime_1.py.MISSING], ["speed_alerts", _runtime_1.py.MISSING], ["valet_alert", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleAlerts, __args); Object.freeze(this); }
}
exports.VehicleAlerts = VehicleAlerts;
_runtime_1.py.classType(VehicleAlerts);
/** One raw vehicle-alert breach event. */
class BreachAlert {
    service_type;
    breach_date_time;
    name;
    location;
    static __fields = [["service_type", _runtime_1.py.MISSING], ["breach_date_time", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["location", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, BreachAlert, __args); Object.freeze(this); }
}
exports.BreachAlert = BreachAlert;
_runtime_1.py.classType(BreachAlert);
/** One nullable page of vehicle-alert breach events. */
class BreachAlerts {
    items_per_page;
    page_number;
    total_items;
    total_pages;
    alerts;
    static __fields = [["items_per_page", _runtime_1.py.MISSING], ["page_number", _runtime_1.py.MISSING], ["total_items", _runtime_1.py.MISSING], ["total_pages", _runtime_1.py.MISSING], ["alerts", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, BreachAlerts, __args); Object.freeze(this); }
}
exports.BreachAlerts = BreachAlerts;
_runtime_1.py.classType(BreachAlerts);
//# sourceMappingURL=_alert_models.js.map