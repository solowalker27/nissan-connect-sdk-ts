import { NissanStoreClientOrigin } from "./commerce_models";
export { NissanStoreClientOrigin };
import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
/** Required product selection and optional promotion for Nissan Store. */
export declare class AddProductToCartInput {
    readonly product_id: string;
    readonly quantity: number;
    readonly vin: string;
    readonly product_selling_model_id: string;
    readonly promotion_id: string | UnsetType | null;
    static __fields: any[][];
    constructor(product_id: string, quantity: number, vin: string, product_selling_model_id: string, promotion_id?: string | UnsetType | null);
    constructor(options: {
        product_id: string;
        quantity: number;
        vin: string;
        product_selling_model_id: string;
        promotion_id?: string | UnsetType | null;
    });
}
/** Optional nullable subscription identifier accepted by cancellation. */
export declare class CancelSubscriptionInput {
    readonly subscription_id: string | UnsetType | null;
    static __fields: any[][];
    constructor(subscription_id?: string | UnsetType | null);
    constructor(options: {
        subscription_id?: string | UnsetType | null;
    });
}
/** Optional nullable VIN filter accepted by Nissan Store catalog. */
export declare class ProductCatalogInput {
    readonly vin: string | UnsetType | null;
    static __fields: any[][];
    constructor(vin?: string | UnsetType | null);
    constructor(options: {
        vin?: string | UnsetType | null;
    });
}
export declare function add_product_to_cart_variables(config: AddProductToCartInput): Record<string, unknown>;
export declare function cancel_pending_subscription_variables(pending_order_id: string): Record<string, unknown>;
export declare function cancel_subscription_variables(config: CancelSubscriptionInput): Record<string, unknown>;
export declare function nissan_store_link_variables(vin: string, client_origin: NissanStoreClientOrigin): Record<string, unknown>;
export declare function nissan_pay_order_history_variables(vin: string, page_cursor?: string | UnsetType | null): Record<string, unknown>;
export declare function product_catalog_variables(config: ProductCatalogInput): Record<string, unknown>;
