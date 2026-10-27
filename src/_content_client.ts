// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import * as operations from "./operations";

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

/** Translated upstream _ContentClientMixin. */
export class _ContentClientMixin extends $.mix(_NissanClientBase) {
constructor(...__args: any[]) { super($.SKIP); if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _ContentClientMixin, __args); }
async_get_contact_us(client_type?: ClientType): Promise<ContactUsInfo>;
/** Return account, ownership, and support contact information. */
async async_get_contact_us(...__args: any[]): any {
let data;
let {"client_type": client_type} = $.bind(__args, ["client_type"], {"client_type": $.attr(ClientType, "ANDROID")}, [], null, null);
/** Return account, ownership, and support contact information. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ContactUs", $.attr(operations, "CONTACT_US"), $.call(contact_us_variables, [client_type], null)], null));
return $.call(parse_contact_us, [data], null);
}
async_get_cpo_details(): Promise<CertifiedPreOwnedDetails | null>;
/** Return certified-pre-owned provider details. */
async async_get_cpo_details(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return certified-pre-owned provider details. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CpoDetails", $.attr(operations, "CPO_DETAILS"), {}], null));
return $.call(parse_cpo_details, [data], null);
}
async_get_faq(categories?: ReadonlyArray<string | null> | UnsetType | null): Promise<ReadonlyArray<FrequentlyAskedQuestionCategory>>;
/** Return FAQ categories, optionally filtered by category name. */
async async_get_faq(...__args: any[]): any {
let data;
let {"categories": categories} = $.bind(__args, ["categories"], {"categories": UNSET}, [], null, null);
/** Return FAQ categories, optionally filtered by category name. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["FAQ", $.attr(operations, "FAQ"), $.call(faq_variables, [categories], null)], null));
return $.call(parse_faq, [data], null);
}
async_get_live_chat_hours(departments?: ReadonlyArray<string | null> | UnsetType | null, enhanced_chat?: boolean | UnsetType | null): Promise<ReadonlyArray<LiveChatHours | null> | null>;
/** Return nullable live-chat hours for selected departments. */
async async_get_live_chat_hours(...__args: any[]): any {
let data;
let {"departments": departments, "enhanced_chat": enhanced_chat} = $.bind(__args, ["departments", "enhanced_chat"], {"departments": UNSET, "enhanced_chat": UNSET}, [], null, null);
/** Return nullable live-chat hours for selected departments. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["LiveChatHours", $.attr(operations, "LIVE_CHAT_HOURS"), $.call(live_chat_hours_variables, [departments, enhanced_chat], null)], null));
return $.call(parse_live_chat_hours, [data], null);
}
async_get_mobile_carriers(): Promise<ReadonlyArray<MobileCarrier>>;
/** Return the mobile-carrier catalog used by account profiles. */
async async_get_mobile_carriers(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return the mobile-carrier catalog used by account profiles. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["MobileCarriers", $.attr(operations, "MOBILE_CARRIERS"), {}], null));
return $.call(parse_mobile_carriers, [data], null);
}
async_add_product_to_nissan_store_cart(config: AddProductToCartInput): Promise<AddProductToCartResult | null>;
/** Add a selected product and selling model to Nissan Store cart. */
async async_add_product_to_nissan_store_cart(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Add a selected product and selling model to Nissan Store cart. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["AddProductToNissanStoreCart", $.attr(operations, "ADD_PRODUCT_TO_NISSAN_STORE_CART"), $.call(add_product_to_cart_variables, [config], null)], null));
return $.call(parse_add_product_to_cart, [data], null);
}
async_cancel_pending_subscription(pending_order_id: string): Promise<CancelPendingSubscriptionResult | UnselectedCommerceResult>;
/** Cancel a pending subscription order. */
async async_cancel_pending_subscription(...__args: any[]): any {
let data;
let {"pending_order_id": pending_order_id} = $.bind(__args, ["pending_order_id"], {}, [], null, null);
/** Cancel a pending subscription order. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CancelPendingSubscription", $.attr(operations, "CANCEL_PENDING_SUBSCRIPTION"), $.call(cancel_pending_subscription_variables, [pending_order_id], null)], null));
return $.call(parse_cancel_pending_subscription, [data], null);
}
async_cancel_subscription(config: CancelSubscriptionInput): Promise<CancelSubscriptionResult | null>;
/** Cancel an active Nissan Store subscription. */
async async_cancel_subscription(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Cancel an active Nissan Store subscription. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CancelSubscription", $.attr(operations, "CANCEL_SUBSCRIPTION"), $.call(cancel_subscription_variables, [config], null)], null));
return $.call(parse_cancel_subscription, [data], null);
}
async_create_nissan_store_fod_trial_checkout_link(vin: string, client_origin?: NissanStoreClientOrigin): Promise<string | null>;
/** Create a feature-on-demand trial checkout link. */
async async_create_nissan_store_fod_trial_checkout_link(...__args: any[]): any {
let data;
let {"vin": vin, "client_origin": client_origin} = $.bind(__args, ["vin", "client_origin"], {"client_origin": $.attr(NissanStoreClientOrigin, "ONE_APP")}, [], null, null);
/** Create a feature-on-demand trial checkout link. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["CreateNissanStoreFODTrialCheckoutLink", $.attr(operations, "CREATE_NISSAN_STORE_FOD_TRIAL_CHECKOUT_LINK"), $.call(nissan_store_link_variables, [vin, client_origin], null)], null));
return $.call(parse_trial_checkout_link, [data], null);
}
async_get_digital_wallet_url(): Promise<string | null>;
/** Return the nullable Nissan Pay digital-wallet URL. */
async async_get_digital_wallet_url(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return the nullable Nissan Pay digital-wallet URL. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["DigitalWalletURL", $.attr(operations, "DIGITAL_WALLET_URL"), {}], null));
return $.call(parse_digital_wallet_url, [data], null);
}
async_get_nissan_pay(): Promise<NissanPayAccount | null>;
/** Return Nissan Pay methods and digital-wallet information. */
async async_get_nissan_pay(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Return Nissan Pay methods and digital-wallet information. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NissanPay", $.attr(operations, "NISSAN_PAY"), {}], null));
return $.call(parse_nissan_pay, [data], null);
}
async_get_nissan_pay_order_history(vin: string, page_cursor?: string | UnsetType | null): Promise<NissanPayOrderHistory | null>;
/** Return paginated Nissan Pay energy order history. */
async async_get_nissan_pay_order_history(...__args: any[]): any {
let data;
let {"vin": vin, "page_cursor": page_cursor} = $.bind(__args, ["vin", "page_cursor"], {"page_cursor": UNSET}, [], null, null);
/** Return paginated Nissan Pay energy order history. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NissanPayOrderHistory", $.attr(operations, "NISSAN_PAY_ORDER_HISTORY"), $.call(nissan_pay_order_history_variables, [vin, page_cursor], null)], null));
return $.call(parse_nissan_pay_order_history, [data], null);
}
async_get_nissan_store_checkout_url(vin: string, client_origin?: NissanStoreClientOrigin): Promise<string | null>;
/** Return the nullable checkout URL for a vehicle. */
async async_get_nissan_store_checkout_url(...__args: any[]): any {
let data;
let {"vin": vin, "client_origin": client_origin} = $.bind(__args, ["vin", "client_origin"], {"client_origin": $.attr(NissanStoreClientOrigin, "ONE_APP")}, [], null, null);
/** Return the nullable checkout URL for a vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["NissanStoreCheckoutURL", $.attr(operations, "NISSAN_STORE_CHECKOUT_URL"), $.call(nissan_store_link_variables, [vin, client_origin], null)], null));
return $.call(parse_nissan_store_checkout_url, [data], null);
}
async_get_product_catalog(config: ProductCatalogInput): Promise<ProductCatalogResult | null>;
/** Return Nissan Store product packages for an optional vehicle. */
async async_get_product_catalog(...__args: any[]): any {
let data;
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Return Nissan Store product packages for an optional vehicle. */
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["ProductCatalog", $.attr(operations, "PRODUCT_CATALOG"), $.call(product_catalog_variables, [config], null)], null));
return $.call(parse_product_catalog, [data], null);
}
async_upsert_nissan_pay_account(): Promise<UpsertNissanPayAccountResult | null>;
/** Create or synchronize the signed-in Nissan Pay account. */
async async_upsert_nissan_pay_account(...__args: any[]): any {
let data;
let {} = $.bind(__args, [], {}, [], null, null);
/** Create or synchronize the signed-in Nissan Pay account. */
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), ["UpsertNissanPayAccount", $.attr(operations, "UPSERT_NISSAN_PAY_ACCOUNT"), {}], null));
return $.call(parse_upsert_nissan_pay_account, [data], null);
}
}
$.classType(_ContentClientMixin);
export interface _ContentClientMixin extends _NissanClientBase {}
