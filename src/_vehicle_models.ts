// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const datetime = $.datetime;

import { CameraPosition, CameraService, ProductType, PurchaseType } from "./_core_models";
export { CameraPosition, CameraService, ProductType, PurchaseType };

/** Static data for a vehicle attached to the account. */
export class Vehicle {
readonly vin: string;
readonly year: string | null;
readonly model: string | null;
readonly color: string | null;
readonly nickname: string | null;
readonly image_url: string | null;
readonly driver_type: string | null;
readonly plate: string | null;
static __fields = [["vin", $.MISSING], ["year", $.MISSING], ["model", $.MISSING], ["color", $.MISSING], ["nickname", $.MISSING], ["image_url", $.MISSING], ["driver_type", $.MISSING], ["plate", $.MISSING]];
constructor(vin: string, year: string | null, model: string | null, color: string | null, nickname: string | null, image_url: string | null, driver_type: string | null, plate: string | null);
constructor(options: { vin: string; year: string | null; model: string | null; color: string | null; nickname: string | null; image_url: string | null; driver_type: string | null; plate: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, Vehicle, __args);  Object.freeze(this); }
}
$.classType(Vehicle);

/** One remotely captured vehicle photo and its upstream metadata. */
export class VehiclePhoto {
readonly id: string | null;
readonly filename: string | null;
readonly link: string | null;
readonly timestamp: $.DateValue | null;
readonly camera_position: CameraPosition | null;
readonly camera_service: CameraService | null;
static __fields = [["id", $.MISSING], ["filename", $.MISSING], ["link", $.MISSING], ["timestamp", $.MISSING], ["camera_position", $.MISSING], ["camera_service", $.MISSING]];
constructor(id: string | null, filename: string | null, link: string | null, timestamp: $.DateValue | null, camera_position: CameraPosition | null, camera_service: CameraService | null);
constructor(options: { id: string | null; filename: string | null; link: string | null; timestamp: $.DateValue | null; camera_position: CameraPosition | null; camera_service: CameraService | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehiclePhoto, __args);  Object.freeze(this); }
}
$.classType(VehiclePhoto);

/** Photos currently available around one vehicle. */
export class VehiclePhotos {
readonly vin: string;
readonly year: string;
readonly model: string;
readonly photos: ReadonlyArray<VehiclePhoto | null> | null;
static __fields = [["vin", $.MISSING], ["year", $.MISSING], ["model", $.MISSING], ["photos", $.MISSING]];
constructor(vin: string, year: string, model: string, photos: ReadonlyArray<VehiclePhoto | null> | null);
constructor(options: { vin: string; year: string; model: string; photos: ReadonlyArray<VehiclePhoto | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehiclePhotos, __args);  Object.freeze(this); }
}
$.classType(VehiclePhotos);

/** One raw remote-service status transition returned by Nissan. */
export class RemoteServiceHistoryEntry {
readonly service_request_id: string | null;
readonly status: string | null;
readonly service_type: string | null;
readonly status_change_date_time: $.DateValue | null;
static __fields = [["service_request_id", $.MISSING], ["status", $.MISSING], ["service_type", $.MISSING], ["status_change_date_time", $.MISSING]];
constructor(service_request_id: string | null, status: string | null, service_type: string | null, status_change_date_time: $.DateValue | null);
constructor(options: { service_request_id: string | null; status: string | null; service_type: string | null; status_change_date_time: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RemoteServiceHistoryEntry, __args);  Object.freeze(this); }
}
$.classType(RemoteServiceHistoryEntry);

/** One nullable page of vehicle remote-service history. */
export class RemoteServiceHistory {
readonly page_number: number | null;
readonly items_per_page: number | null;
readonly total_items: number | null;
readonly total_pages: number | null;
readonly history: ReadonlyArray<RemoteServiceHistoryEntry | null> | null;
static __fields = [["page_number", $.MISSING], ["items_per_page", $.MISSING], ["total_items", $.MISSING], ["total_pages", $.MISSING], ["history", $.MISSING]];
constructor(page_number: number | null, items_per_page: number | null, total_items: number | null, total_pages: number | null, history: ReadonlyArray<RemoteServiceHistoryEntry | null> | null);
constructor(options: { page_number: number | null; items_per_page: number | null; total_items: number | null; total_pages: number | null; history: ReadonlyArray<RemoteServiceHistoryEntry | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RemoteServiceHistory, __args);  Object.freeze(this); }
}
$.classType(RemoteServiceHistory);

/** Reminder flags returned for supported AVK2 vehicles. */
export class ReminderNotificationsAfterLeavingVehicle {
readonly lock: boolean | null;
readonly door: boolean | null;
readonly trunk: boolean | null;
readonly sunroof: boolean | null;
readonly window: boolean | null;
static __fields = [["lock", $.MISSING], ["door", $.MISSING], ["trunk", $.MISSING], ["sunroof", $.MISSING], ["window", $.MISSING]];
constructor(lock: boolean | null, door: boolean | null, trunk: boolean | null, sunroof: boolean | null, window: boolean | null);
constructor(options: { lock: boolean | null; door: boolean | null; trunk: boolean | null; sunroof: boolean | null; window: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, ReminderNotificationsAfterLeavingVehicle, __args);  Object.freeze(this); }
}
$.classType(ReminderNotificationsAfterLeavingVehicle);

/** MIL/DTC maintenance-data sharing preferences for a vehicle. */
export class VehiclePreferences {
readonly enabled: boolean | null;
readonly text: boolean | null;
readonly phone: boolean | null;
readonly email: boolean | null;
static __fields = [["enabled", $.MISSING], ["text", $.MISSING], ["phone", $.MISSING], ["email", $.MISSING]];
constructor(enabled: boolean | null, text: boolean | null, phone: boolean | null, email: boolean | null);
constructor(options: { enabled: boolean | null; text: boolean | null; phone: boolean | null; email: boolean | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehiclePreferences, __args);  Object.freeze(this); }
}
$.classType(VehiclePreferences);

/** Product metadata attached to a vehicle subscription. */
export class VehicleSubscriptionProduct {
readonly product_id: string;
readonly marketing_name: string;
readonly description: string;
readonly services: ReadonlyArray<string | null>;
static __fields = [["product_id", $.MISSING], ["marketing_name", $.MISSING], ["description", $.MISSING], ["services", $.MISSING]];
constructor(product_id: string, marketing_name: string, description: string, services: ReadonlyArray<string | null>);
constructor(options: { product_id: string; marketing_name: string; description: string; services: ReadonlyArray<string | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleSubscriptionProduct, __args);  Object.freeze(this); }
}
$.classType(VehicleSubscriptionProduct);

/** Pending package activation attached to a vehicle subscription. */
export class VehicleSubscriptionPendingOrder {
readonly pending_order_id: string;
readonly package_name: string;
readonly activation_date: $.DateValue | null;
static __fields = [["pending_order_id", $.MISSING], ["package_name", $.MISSING], ["activation_date", $.MISSING]];
constructor(pending_order_id: string, package_name: string, activation_date: $.DateValue | null);
constructor(options: { pending_order_id: string; package_name: string; activation_date: $.DateValue | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleSubscriptionPendingOrder, __args);  Object.freeze(this); }
}
$.classType(VehicleSubscriptionPendingOrder);

/** One subscription returned by Nissan without app-level defaults or filtering. */
export class VehicleSubscription {
readonly subscription_id: string;
readonly subscription_service_type: string;
readonly purchase_type: PurchaseType | string | null;
readonly product_type: ProductType | string | null;
readonly next_billing_date: $.DateValue | null;
readonly goodwill_end_date: $.DateValue | null;
readonly goodwill_start_date: $.DateValue | null;
readonly grace_end_date: $.DateValue | null;
readonly subscription_start_date: $.DateValue;
readonly subscription_end_date: $.DateValue | null;
readonly is_active: boolean | null;
readonly np_subscription_price: string | null;
readonly product: VehicleSubscriptionProduct;
readonly pending_order: VehicleSubscriptionPendingOrder | null;
static __fields = [["subscription_id", $.MISSING], ["subscription_service_type", $.MISSING], ["purchase_type", $.MISSING], ["product_type", $.MISSING], ["next_billing_date", $.MISSING], ["goodwill_end_date", $.MISSING], ["goodwill_start_date", $.MISSING], ["grace_end_date", $.MISSING], ["subscription_start_date", $.MISSING], ["subscription_end_date", $.MISSING], ["is_active", $.MISSING], ["np_subscription_price", $.MISSING], ["product", $.MISSING], ["pending_order", $.MISSING]];
constructor(subscription_id: string, subscription_service_type: string, purchase_type: PurchaseType | string | null, product_type: ProductType | string | null, next_billing_date: $.DateValue | null, goodwill_end_date: $.DateValue | null, goodwill_start_date: $.DateValue | null, grace_end_date: $.DateValue | null, subscription_start_date: $.DateValue, subscription_end_date: $.DateValue | null, is_active: boolean | null, np_subscription_price: string | null, product: VehicleSubscriptionProduct, pending_order: VehicleSubscriptionPendingOrder | null);
constructor(options: { subscription_id: string; subscription_service_type: string; purchase_type: PurchaseType | string | null; product_type: ProductType | string | null; next_billing_date: $.DateValue | null; goodwill_end_date: $.DateValue | null; goodwill_start_date: $.DateValue | null; grace_end_date: $.DateValue | null; subscription_start_date: $.DateValue; subscription_end_date: $.DateValue | null; is_active: boolean | null; np_subscription_price: string | null; product: VehicleSubscriptionProduct; pending_order: VehicleSubscriptionPendingOrder | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleSubscription, __args);  Object.freeze(this); }
}
$.classType(VehicleSubscription);

/** The nullable capability branch containing a vehicle's subscriptions. */
export class VehicleSubscriptions {
readonly vin: string;
readonly subscriptions: ReadonlyArray<VehicleSubscription | null> | null;
static __fields = [["vin", $.MISSING], ["subscriptions", $.MISSING]];
constructor(vin: string, subscriptions: ReadonlyArray<VehicleSubscription | null> | null);
constructor(options: { vin: string; subscriptions: ReadonlyArray<VehicleSubscription | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleSubscriptions, __args);  Object.freeze(this); }
}
$.classType(VehicleSubscriptions);

/** Current in-vehicle Wi-Fi usage and data cap in gigabytes. */
export class VehicleWifiConsumption {
readonly usage_percent: number;
readonly usage_amount_gb: number;
readonly data_cap_amount_gb: number;
readonly updated_at: $.DateValue;
static __fields = [["usage_percent", $.MISSING], ["usage_amount_gb", $.MISSING], ["data_cap_amount_gb", $.MISSING], ["updated_at", $.MISSING]];
constructor(usage_percent: number, usage_amount_gb: number, data_cap_amount_gb: number, updated_at: $.DateValue);
constructor(options: { usage_percent: number; usage_amount_gb: number; data_cap_amount_gb: number; updated_at: $.DateValue });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleWifiConsumption, __args);  Object.freeze(this); }
}
$.classType(VehicleWifiConsumption);
