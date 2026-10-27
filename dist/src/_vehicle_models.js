"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleWifiConsumption = exports.VehicleSubscriptions = exports.VehicleSubscription = exports.VehicleSubscriptionPendingOrder = exports.VehicleSubscriptionProduct = exports.VehiclePreferences = exports.ReminderNotificationsAfterLeavingVehicle = exports.RemoteServiceHistory = exports.RemoteServiceHistoryEntry = exports.VehiclePhotos = exports.VehiclePhoto = exports.Vehicle = exports.PurchaseType = exports.ProductType = exports.CameraService = exports.CameraPosition = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const _core_models_1 = require("./_core_models");
Object.defineProperty(exports, "CameraPosition", { enumerable: true, get: function () { return _core_models_1.CameraPosition; } });
Object.defineProperty(exports, "CameraService", { enumerable: true, get: function () { return _core_models_1.CameraService; } });
Object.defineProperty(exports, "ProductType", { enumerable: true, get: function () { return _core_models_1.ProductType; } });
Object.defineProperty(exports, "PurchaseType", { enumerable: true, get: function () { return _core_models_1.PurchaseType; } });
/** Static data for a vehicle attached to the account. */
class Vehicle {
    vin;
    year;
    model;
    color;
    nickname;
    image_url;
    driver_type;
    plate;
    static __fields = [["vin", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING], ["model", _runtime_1.py.MISSING], ["color", _runtime_1.py.MISSING], ["nickname", _runtime_1.py.MISSING], ["image_url", _runtime_1.py.MISSING], ["driver_type", _runtime_1.py.MISSING], ["plate", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, Vehicle, __args); Object.freeze(this); }
}
exports.Vehicle = Vehicle;
_runtime_1.py.classType(Vehicle);
/** One remotely captured vehicle photo and its upstream metadata. */
class VehiclePhoto {
    id;
    filename;
    link;
    timestamp;
    camera_position;
    camera_service;
    static __fields = [["id", _runtime_1.py.MISSING], ["filename", _runtime_1.py.MISSING], ["link", _runtime_1.py.MISSING], ["timestamp", _runtime_1.py.MISSING], ["camera_position", _runtime_1.py.MISSING], ["camera_service", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehiclePhoto, __args); Object.freeze(this); }
}
exports.VehiclePhoto = VehiclePhoto;
_runtime_1.py.classType(VehiclePhoto);
/** Photos currently available around one vehicle. */
class VehiclePhotos {
    vin;
    year;
    model;
    photos;
    static __fields = [["vin", _runtime_1.py.MISSING], ["year", _runtime_1.py.MISSING], ["model", _runtime_1.py.MISSING], ["photos", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehiclePhotos, __args); Object.freeze(this); }
}
exports.VehiclePhotos = VehiclePhotos;
_runtime_1.py.classType(VehiclePhotos);
/** One raw remote-service status transition returned by Nissan. */
class RemoteServiceHistoryEntry {
    service_request_id;
    status;
    service_type;
    status_change_date_time;
    static __fields = [["service_request_id", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING], ["service_type", _runtime_1.py.MISSING], ["status_change_date_time", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RemoteServiceHistoryEntry, __args); Object.freeze(this); }
}
exports.RemoteServiceHistoryEntry = RemoteServiceHistoryEntry;
_runtime_1.py.classType(RemoteServiceHistoryEntry);
/** One nullable page of vehicle remote-service history. */
class RemoteServiceHistory {
    page_number;
    items_per_page;
    total_items;
    total_pages;
    history;
    static __fields = [["page_number", _runtime_1.py.MISSING], ["items_per_page", _runtime_1.py.MISSING], ["total_items", _runtime_1.py.MISSING], ["total_pages", _runtime_1.py.MISSING], ["history", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RemoteServiceHistory, __args); Object.freeze(this); }
}
exports.RemoteServiceHistory = RemoteServiceHistory;
_runtime_1.py.classType(RemoteServiceHistory);
/** Reminder flags returned for supported AVK2 vehicles. */
class ReminderNotificationsAfterLeavingVehicle {
    lock;
    door;
    trunk;
    sunroof;
    window;
    static __fields = [["lock", _runtime_1.py.MISSING], ["door", _runtime_1.py.MISSING], ["trunk", _runtime_1.py.MISSING], ["sunroof", _runtime_1.py.MISSING], ["window", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ReminderNotificationsAfterLeavingVehicle, __args); Object.freeze(this); }
}
exports.ReminderNotificationsAfterLeavingVehicle = ReminderNotificationsAfterLeavingVehicle;
_runtime_1.py.classType(ReminderNotificationsAfterLeavingVehicle);
/** MIL/DTC maintenance-data sharing preferences for a vehicle. */
class VehiclePreferences {
    enabled;
    text;
    phone;
    email;
    static __fields = [["enabled", _runtime_1.py.MISSING], ["text", _runtime_1.py.MISSING], ["phone", _runtime_1.py.MISSING], ["email", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehiclePreferences, __args); Object.freeze(this); }
}
exports.VehiclePreferences = VehiclePreferences;
_runtime_1.py.classType(VehiclePreferences);
/** Product metadata attached to a vehicle subscription. */
class VehicleSubscriptionProduct {
    product_id;
    marketing_name;
    description;
    services;
    static __fields = [["product_id", _runtime_1.py.MISSING], ["marketing_name", _runtime_1.py.MISSING], ["description", _runtime_1.py.MISSING], ["services", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleSubscriptionProduct, __args); Object.freeze(this); }
}
exports.VehicleSubscriptionProduct = VehicleSubscriptionProduct;
_runtime_1.py.classType(VehicleSubscriptionProduct);
/** Pending package activation attached to a vehicle subscription. */
class VehicleSubscriptionPendingOrder {
    pending_order_id;
    package_name;
    activation_date;
    static __fields = [["pending_order_id", _runtime_1.py.MISSING], ["package_name", _runtime_1.py.MISSING], ["activation_date", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleSubscriptionPendingOrder, __args); Object.freeze(this); }
}
exports.VehicleSubscriptionPendingOrder = VehicleSubscriptionPendingOrder;
_runtime_1.py.classType(VehicleSubscriptionPendingOrder);
/** One subscription returned by Nissan without app-level defaults or filtering. */
class VehicleSubscription {
    subscription_id;
    subscription_service_type;
    purchase_type;
    product_type;
    next_billing_date;
    goodwill_end_date;
    goodwill_start_date;
    grace_end_date;
    subscription_start_date;
    subscription_end_date;
    is_active;
    np_subscription_price;
    product;
    pending_order;
    static __fields = [["subscription_id", _runtime_1.py.MISSING], ["subscription_service_type", _runtime_1.py.MISSING], ["purchase_type", _runtime_1.py.MISSING], ["product_type", _runtime_1.py.MISSING], ["next_billing_date", _runtime_1.py.MISSING], ["goodwill_end_date", _runtime_1.py.MISSING], ["goodwill_start_date", _runtime_1.py.MISSING], ["grace_end_date", _runtime_1.py.MISSING], ["subscription_start_date", _runtime_1.py.MISSING], ["subscription_end_date", _runtime_1.py.MISSING], ["is_active", _runtime_1.py.MISSING], ["np_subscription_price", _runtime_1.py.MISSING], ["product", _runtime_1.py.MISSING], ["pending_order", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleSubscription, __args); Object.freeze(this); }
}
exports.VehicleSubscription = VehicleSubscription;
_runtime_1.py.classType(VehicleSubscription);
/** The nullable capability branch containing a vehicle's subscriptions. */
class VehicleSubscriptions {
    vin;
    subscriptions;
    static __fields = [["vin", _runtime_1.py.MISSING], ["subscriptions", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleSubscriptions, __args); Object.freeze(this); }
}
exports.VehicleSubscriptions = VehicleSubscriptions;
_runtime_1.py.classType(VehicleSubscriptions);
/** Current in-vehicle Wi-Fi usage and data cap in gigabytes. */
class VehicleWifiConsumption {
    usage_percent;
    usage_amount_gb;
    data_cap_amount_gb;
    updated_at;
    static __fields = [["usage_percent", _runtime_1.py.MISSING], ["usage_amount_gb", _runtime_1.py.MISSING], ["data_cap_amount_gb", _runtime_1.py.MISSING], ["updated_at", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleWifiConsumption, __args); Object.freeze(this); }
}
exports.VehicleWifiConsumption = VehicleWifiConsumption;
_runtime_1.py.classType(VehicleWifiConsumption);
//# sourceMappingURL=_vehicle_models.js.map