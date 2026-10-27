import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { AddProductToCartInput, CancelSubscriptionInput, ProductCatalogInput, add_product_to_cart_variables, cancel_pending_subscription_variables, cancel_subscription_variables, nissan_pay_order_history_variables, nissan_store_link_variables, product_catalog_variables } from "./commerce_inputs";
export { AddProductToCartInput, CancelSubscriptionInput, ProductCatalogInput, add_product_to_cart_variables, cancel_pending_subscription_variables, cancel_subscription_variables, nissan_pay_order_history_variables, nissan_store_link_variables, product_catalog_variables };
import { AddProductToCartResult, CancelPendingSubscriptionResult, CancelSubscriptionResult, NissanPayAccount, NissanPayOrderHistory, NissanStoreClientOrigin, ProductCatalogResult, UnselectedCommerceResult, UpsertNissanPayAccountResult } from "./commerce_models";
export { AddProductToCartResult, CancelPendingSubscriptionResult, CancelSubscriptionResult, NissanPayAccount, NissanPayOrderHistory, NissanStoreClientOrigin, ProductCatalogResult, UnselectedCommerceResult, UpsertNissanPayAccountResult };
import { parse_add_product_to_cart, parse_cancel_pending_subscription, parse_cancel_subscription, parse_digital_wallet_url, parse_nissan_pay, parse_nissan_pay_order_history, parse_nissan_store_checkout_url, parse_product_catalog, parse_trial_checkout_link, parse_upsert_nissan_pay_account } from "./commerce_parsing";
export { parse_add_product_to_cart, parse_cancel_pending_subscription, parse_cancel_subscription, parse_digital_wallet_url, parse_nissan_pay, parse_nissan_pay_order_history, parse_nissan_store_checkout_url, parse_product_catalog, parse_trial_checkout_link, parse_upsert_nissan_pay_account };
import { contact_us_variables, faq_variables, live_chat_hours_variables } from "./content_inputs";
export { contact_us_variables, faq_variables, live_chat_hours_variables };
import { CertifiedPreOwnedDetails, ClientType, ContactUsInfo, FrequentlyAskedQuestionCategory, LiveChatHours, MobileCarrier } from "./content_models";
export { CertifiedPreOwnedDetails, ClientType, ContactUsInfo, FrequentlyAskedQuestionCategory, LiveChatHours, MobileCarrier };
import { parse_contact_us, parse_cpo_details, parse_faq, parse_live_chat_hours, parse_mobile_carriers } from "./content_parsing";
export { parse_contact_us, parse_cpo_details, parse_faq, parse_live_chat_hours, parse_mobile_carriers };
import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };
declare const _ContentClientMixin_base: any;
/** Translated upstream _ContentClientMixin. */
export declare class _ContentClientMixin extends _ContentClientMixin_base {
    constructor(...__args: any[]);
    async_get_contact_us(client_type?: ClientType): Promise<ContactUsInfo>;
    async_get_cpo_details(): Promise<CertifiedPreOwnedDetails | null>;
    async_get_faq(categories?: ReadonlyArray<string | null> | UnsetType | null): Promise<ReadonlyArray<FrequentlyAskedQuestionCategory>>;
    async_get_live_chat_hours(departments?: ReadonlyArray<string | null> | UnsetType | null, enhanced_chat?: boolean | UnsetType | null): Promise<ReadonlyArray<LiveChatHours | null> | null>;
    async_get_mobile_carriers(): Promise<ReadonlyArray<MobileCarrier>>;
    async_add_product_to_nissan_store_cart(config: AddProductToCartInput): Promise<AddProductToCartResult | null>;
    async_cancel_pending_subscription(pending_order_id: string): Promise<CancelPendingSubscriptionResult | UnselectedCommerceResult>;
    async_cancel_subscription(config: CancelSubscriptionInput): Promise<CancelSubscriptionResult | null>;
    async_create_nissan_store_fod_trial_checkout_link(vin: string, client_origin?: NissanStoreClientOrigin): Promise<string | null>;
    async_get_digital_wallet_url(): Promise<string | null>;
    async_get_nissan_pay(): Promise<NissanPayAccount | null>;
    async_get_nissan_pay_order_history(vin: string, page_cursor?: string | UnsetType | null): Promise<NissanPayOrderHistory | null>;
    async_get_nissan_store_checkout_url(vin: string, client_origin?: NissanStoreClientOrigin): Promise<string | null>;
    async_get_product_catalog(config: ProductCatalogInput): Promise<ProductCatalogResult | null>;
    async_upsert_nissan_pay_account(): Promise<UpsertNissanPayAccountResult | null>;
}
export interface _ContentClientMixin extends _NissanClientBase {
}
