import { py as $ } from "./_runtime";
import { CameraPosition, CameraService, ProductType, PurchaseType } from "./_core_models";
export { CameraPosition, CameraService, ProductType, PurchaseType };
/** Static data for a vehicle attached to the account. */
export declare class Vehicle {
    readonly vin: string;
    readonly year: string | null;
    readonly model: string | null;
    readonly color: string | null;
    readonly nickname: string | null;
    readonly image_url: string | null;
    readonly driver_type: string | null;
    readonly plate: string | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string, year: string | null, model: string | null, color: string | null, nickname: string | null, image_url: string | null, driver_type: string | null, plate: string | null);
    constructor(options: {
        vin: string;
        year: string | null;
        model: string | null;
        color: string | null;
        nickname: string | null;
        image_url: string | null;
        driver_type: string | null;
        plate: string | null;
    });
}
/** One remotely captured vehicle photo and its upstream metadata. */
export declare class VehiclePhoto {
    readonly id: string | null;
    readonly filename: string | null;
    readonly link: string | null;
    readonly timestamp: $.DateValue | null;
    readonly camera_position: CameraPosition | null;
    readonly camera_service: CameraService | null;
    static __fields: (string | symbol)[][];
    constructor(id: string | null, filename: string | null, link: string | null, timestamp: $.DateValue | null, camera_position: CameraPosition | null, camera_service: CameraService | null);
    constructor(options: {
        id: string | null;
        filename: string | null;
        link: string | null;
        timestamp: $.DateValue | null;
        camera_position: CameraPosition | null;
        camera_service: CameraService | null;
    });
}
/** Photos currently available around one vehicle. */
export declare class VehiclePhotos {
    readonly vin: string;
    readonly year: string;
    readonly model: string;
    readonly photos: ReadonlyArray<VehiclePhoto | null> | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string, year: string, model: string, photos: ReadonlyArray<VehiclePhoto | null> | null);
    constructor(options: {
        vin: string;
        year: string;
        model: string;
        photos: ReadonlyArray<VehiclePhoto | null> | null;
    });
}
/** One raw remote-service status transition returned by Nissan. */
export declare class RemoteServiceHistoryEntry {
    readonly service_request_id: string | null;
    readonly status: string | null;
    readonly service_type: string | null;
    readonly status_change_date_time: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(service_request_id: string | null, status: string | null, service_type: string | null, status_change_date_time: $.DateValue | null);
    constructor(options: {
        service_request_id: string | null;
        status: string | null;
        service_type: string | null;
        status_change_date_time: $.DateValue | null;
    });
}
/** One nullable page of vehicle remote-service history. */
export declare class RemoteServiceHistory {
    readonly page_number: number | null;
    readonly items_per_page: number | null;
    readonly total_items: number | null;
    readonly total_pages: number | null;
    readonly history: ReadonlyArray<RemoteServiceHistoryEntry | null> | null;
    static __fields: (string | symbol)[][];
    constructor(page_number: number | null, items_per_page: number | null, total_items: number | null, total_pages: number | null, history: ReadonlyArray<RemoteServiceHistoryEntry | null> | null);
    constructor(options: {
        page_number: number | null;
        items_per_page: number | null;
        total_items: number | null;
        total_pages: number | null;
        history: ReadonlyArray<RemoteServiceHistoryEntry | null> | null;
    });
}
/** Reminder flags returned for supported AVK2 vehicles. */
export declare class ReminderNotificationsAfterLeavingVehicle {
    readonly lock: boolean | null;
    readonly door: boolean | null;
    readonly trunk: boolean | null;
    readonly sunroof: boolean | null;
    readonly window: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(lock: boolean | null, door: boolean | null, trunk: boolean | null, sunroof: boolean | null, window: boolean | null);
    constructor(options: {
        lock: boolean | null;
        door: boolean | null;
        trunk: boolean | null;
        sunroof: boolean | null;
        window: boolean | null;
    });
}
/** MIL/DTC maintenance-data sharing preferences for a vehicle. */
export declare class VehiclePreferences {
    readonly enabled: boolean | null;
    readonly text: boolean | null;
    readonly phone: boolean | null;
    readonly email: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(enabled: boolean | null, text: boolean | null, phone: boolean | null, email: boolean | null);
    constructor(options: {
        enabled: boolean | null;
        text: boolean | null;
        phone: boolean | null;
        email: boolean | null;
    });
}
/** Product metadata attached to a vehicle subscription. */
export declare class VehicleSubscriptionProduct {
    readonly product_id: string;
    readonly marketing_name: string;
    readonly description: string;
    readonly services: ReadonlyArray<string | null>;
    static __fields: (string | symbol)[][];
    constructor(product_id: string, marketing_name: string, description: string, services: ReadonlyArray<string | null>);
    constructor(options: {
        product_id: string;
        marketing_name: string;
        description: string;
        services: ReadonlyArray<string | null>;
    });
}
/** Pending package activation attached to a vehicle subscription. */
export declare class VehicleSubscriptionPendingOrder {
    readonly pending_order_id: string;
    readonly package_name: string;
    readonly activation_date: $.DateValue | null;
    static __fields: (string | symbol)[][];
    constructor(pending_order_id: string, package_name: string, activation_date: $.DateValue | null);
    constructor(options: {
        pending_order_id: string;
        package_name: string;
        activation_date: $.DateValue | null;
    });
}
/** One subscription returned by Nissan without app-level defaults or filtering. */
export declare class VehicleSubscription {
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
    static __fields: (string | symbol)[][];
    constructor(subscription_id: string, subscription_service_type: string, purchase_type: PurchaseType | string | null, product_type: ProductType | string | null, next_billing_date: $.DateValue | null, goodwill_end_date: $.DateValue | null, goodwill_start_date: $.DateValue | null, grace_end_date: $.DateValue | null, subscription_start_date: $.DateValue, subscription_end_date: $.DateValue | null, is_active: boolean | null, np_subscription_price: string | null, product: VehicleSubscriptionProduct, pending_order: VehicleSubscriptionPendingOrder | null);
    constructor(options: {
        subscription_id: string;
        subscription_service_type: string;
        purchase_type: PurchaseType | string | null;
        product_type: ProductType | string | null;
        next_billing_date: $.DateValue | null;
        goodwill_end_date: $.DateValue | null;
        goodwill_start_date: $.DateValue | null;
        grace_end_date: $.DateValue | null;
        subscription_start_date: $.DateValue;
        subscription_end_date: $.DateValue | null;
        is_active: boolean | null;
        np_subscription_price: string | null;
        product: VehicleSubscriptionProduct;
        pending_order: VehicleSubscriptionPendingOrder | null;
    });
}
/** The nullable capability branch containing a vehicle's subscriptions. */
export declare class VehicleSubscriptions {
    readonly vin: string;
    readonly subscriptions: ReadonlyArray<VehicleSubscription | null> | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string, subscriptions: ReadonlyArray<VehicleSubscription | null> | null);
    constructor(options: {
        vin: string;
        subscriptions: ReadonlyArray<VehicleSubscription | null> | null;
    });
}
/** Current in-vehicle Wi-Fi usage and data cap in gigabytes. */
export declare class VehicleWifiConsumption {
    readonly usage_percent: number;
    readonly usage_amount_gb: number;
    readonly data_cap_amount_gb: number;
    readonly updated_at: $.DateValue;
    static __fields: (string | symbol)[][];
    constructor(usage_percent: number, usage_amount_gb: number, data_cap_amount_gb: number, updated_at: $.DateValue);
    constructor(options: {
        usage_percent: number;
        usage_amount_gb: number;
        data_cap_amount_gb: number;
        updated_at: $.DateValue;
    });
}
