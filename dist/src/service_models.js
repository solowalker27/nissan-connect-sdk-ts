"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleWarranty = exports.VehicleWarrantyPeriod = exports.VehicleWarrantyInfo = exports.VehicleServiceHistoryEntry = exports.VehicleServiceOperation = exports.ServiceHistoryMileage = exports.VehicleRoadsideAssistance = exports.VehicleRecall = exports.VehiclePreferredDealer = exports.PreferredDealerLocation = exports.PreferredDealerAddress = exports.WarrantyInfoWarrantyStatus = exports.WarrantyInfoColorStatus = exports.RecallType = exports.DistanceUnit = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const date = _runtime_1.py.date;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
exports.RecallType = _runtime_1.py.enumType("RecallType", { "RECALL": "RECALL", "SERVICE": "SERVICE", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.WarrantyInfoColorStatus = _runtime_1.py.enumType("WarrantyInfoColorStatus", { "GREEN": "GREEN", "YELLOW": "YELLOW", "RED": "RED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.WarrantyInfoWarrantyStatus = _runtime_1.py.enumType("WarrantyInfoWarrantyStatus", { "ACTIVE": "ACTIVE", "EXPIRED": "EXPIRED", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Nullable postal address fields returned for a preferred dealer. */
class PreferredDealerAddress {
    address1;
    address2;
    city;
    state;
    postal_code;
    country;
    static __fields = [["address1", _runtime_1.py.MISSING], ["address2", _runtime_1.py.MISSING], ["city", _runtime_1.py.MISSING], ["state", _runtime_1.py.MISSING], ["postal_code", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PreferredDealerAddress, __args); Object.freeze(this); }
}
exports.PreferredDealerAddress = PreferredDealerAddress;
_runtime_1.py.classType(PreferredDealerAddress);
/** Nullable coordinates returned for a preferred dealer. */
class PreferredDealerLocation {
    latitude;
    longitude;
    static __fields = [["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, PreferredDealerLocation, __args); Object.freeze(this); }
}
exports.PreferredDealerLocation = PreferredDealerLocation;
_runtime_1.py.classType(PreferredDealerLocation);
/** The preferred dealer currently associated with a vehicle. */
class VehiclePreferredDealer {
    id;
    hash_id;
    name;
    address;
    hours;
    phone;
    service_phone;
    native_service_booking;
    scheduling_url_mobile;
    location;
    languages_spoken;
    static __fields = [["id", _runtime_1.py.MISSING], ["hash_id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["address", _runtime_1.py.MISSING], ["hours", _runtime_1.py.MISSING], ["phone", _runtime_1.py.MISSING], ["service_phone", _runtime_1.py.MISSING], ["native_service_booking", _runtime_1.py.MISSING], ["scheduling_url_mobile", _runtime_1.py.MISSING], ["location", _runtime_1.py.MISSING], ["languages_spoken", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehiclePreferredDealer, __args); Object.freeze(this); }
}
exports.VehiclePreferredDealer = VehiclePreferredDealer;
_runtime_1.py.classType(VehiclePreferredDealer);
/** One recall or service campaign associated with a vehicle. */
class VehicleRecall {
    effective_date;
    nhtsa_id;
    primary_description;
    remedy_description;
    risk_description;
    title;
    type;
    recall_code;
    static __fields = [["effective_date", _runtime_1.py.MISSING], ["nhtsa_id", _runtime_1.py.MISSING], ["primary_description", _runtime_1.py.MISSING], ["remedy_description", _runtime_1.py.MISSING], ["risk_description", _runtime_1.py.MISSING], ["title", _runtime_1.py.MISSING], ["type", _runtime_1.py.MISSING], ["recall_code", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleRecall, __args); Object.freeze(this); }
}
exports.VehicleRecall = VehicleRecall;
_runtime_1.py.classType(VehicleRecall);
/** Nullable roadside-assistance and towing coverage limits. */
class VehicleRoadsideAssistance {
    roadside_months;
    roadside_miles;
    towing_months;
    towing_miles;
    static __fields = [["roadside_months", _runtime_1.py.MISSING], ["roadside_miles", _runtime_1.py.MISSING], ["towing_months", _runtime_1.py.MISSING], ["towing_miles", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleRoadsideAssistance, __args); Object.freeze(this); }
}
exports.VehicleRoadsideAssistance = VehicleRoadsideAssistance;
_runtime_1.py.classType(VehicleRoadsideAssistance);
/** Non-null mileage and unit recorded for a service-history entry. */
class ServiceHistoryMileage {
    unit;
    value;
    static __fields = [["unit", _runtime_1.py.MISSING], ["value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceHistoryMileage, __args); Object.freeze(this); }
}
exports.ServiceHistoryMileage = ServiceHistoryMileage;
_runtime_1.py.classType(ServiceHistoryMileage);
/** Nullable operation metadata attached to a service-history entry. */
class VehicleServiceOperation {
    service_category_id;
    service_category_name;
    op_code_id;
    op_code_description;
    static __fields = [["service_category_id", _runtime_1.py.MISSING], ["service_category_name", _runtime_1.py.MISSING], ["op_code_id", _runtime_1.py.MISSING], ["op_code_description", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleServiceOperation, __args); Object.freeze(this); }
}
exports.VehicleServiceOperation = VehicleServiceOperation;
_runtime_1.py.classType(VehicleServiceOperation);
/** One completed vehicle service event returned by Nissan. */
class VehicleServiceHistoryEntry {
    mileage;
    service_date;
    dealer_name;
    dealer_code;
    services;
    comment;
    maintenance_id;
    service_operation;
    static __fields = [["mileage", _runtime_1.py.MISSING], ["service_date", _runtime_1.py.MISSING], ["dealer_name", _runtime_1.py.MISSING], ["dealer_code", _runtime_1.py.MISSING], ["services", _runtime_1.py.MISSING], ["comment", _runtime_1.py.MISSING], ["maintenance_id", _runtime_1.py.MISSING], ["service_operation", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleServiceHistoryEntry, __args); Object.freeze(this); }
}
exports.VehicleServiceHistoryEntry = VehicleServiceHistoryEntry;
_runtime_1.py.classType(VehicleServiceHistoryEntry);
/** Current vehicle warranty status and overall coverage limits. */
class VehicleWarrantyInfo {
    color_status;
    warranty_status;
    total_mileage;
    total_months;
    static __fields = [["color_status", _runtime_1.py.MISSING], ["warranty_status", _runtime_1.py.MISSING], ["total_mileage", _runtime_1.py.MISSING], ["total_months", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleWarrantyInfo, __args); Object.freeze(this); }
}
exports.VehicleWarrantyInfo = VehicleWarrantyInfo;
_runtime_1.py.classType(VehicleWarrantyInfo);
/** Mileage and calendar boundary for a vehicle warranty period. */
class VehicleWarrantyPeriod {
    mileage;
    date;
    static __fields = [["mileage", _runtime_1.py.MISSING], ["date", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleWarrantyPeriod, __args); Object.freeze(this); }
}
exports.VehicleWarrantyPeriod = VehicleWarrantyPeriod;
_runtime_1.py.classType(VehicleWarrantyPeriod);
/** Warranty summary and its non-null start, end, and current periods. */
class VehicleWarranty {
    warranty_info;
    start_period;
    end_period;
    current_period;
    static __fields = [["warranty_info", _runtime_1.py.MISSING], ["start_period", _runtime_1.py.MISSING], ["end_period", _runtime_1.py.MISSING], ["current_period", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleWarranty, __args); Object.freeze(this); }
}
exports.VehicleWarranty = VehicleWarranty;
_runtime_1.py.classType(VehicleWarranty);
//# sourceMappingURL=service_models.js.map