"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports._ContentClientMixin = exports.UnsetType = exports.UNSET = exports.parse_mobile_carriers = exports.parse_live_chat_hours = exports.parse_faq = exports.parse_cpo_details = exports.parse_contact_us = exports.MobileCarrier = exports.LiveChatHours = exports.FrequentlyAskedQuestionCategory = exports.ContactUsInfo = exports.ClientType = exports.CertifiedPreOwnedDetails = exports.live_chat_hours_variables = exports.faq_variables = exports.contact_us_variables = exports.parse_upsert_nissan_pay_account = exports.parse_trial_checkout_link = exports.parse_product_catalog = exports.parse_nissan_store_checkout_url = exports.parse_nissan_pay_order_history = exports.parse_nissan_pay = exports.parse_digital_wallet_url = exports.parse_cancel_subscription = exports.parse_cancel_pending_subscription = exports.parse_add_product_to_cart = exports.UnselectedCommerceResult = exports.NissanStoreClientOrigin = exports.NissanPayOrderHistory = exports.NissanPayAccount = exports.CancelPendingSubscriptionResult = exports.product_catalog_variables = exports.nissan_store_link_variables = exports.nissan_pay_order_history_variables = exports.cancel_subscription_variables = exports.cancel_pending_subscription_variables = exports.add_product_to_cart_variables = exports.ProductCatalogInput = exports.CancelSubscriptionInput = exports.AddProductToCartInput = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const commerce_inputs_1 = require("./commerce_inputs");
Object.defineProperty(exports, "AddProductToCartInput", { enumerable: true, get: function () { return commerce_inputs_1.AddProductToCartInput; } });
Object.defineProperty(exports, "CancelSubscriptionInput", { enumerable: true, get: function () { return commerce_inputs_1.CancelSubscriptionInput; } });
Object.defineProperty(exports, "ProductCatalogInput", { enumerable: true, get: function () { return commerce_inputs_1.ProductCatalogInput; } });
Object.defineProperty(exports, "add_product_to_cart_variables", { enumerable: true, get: function () { return commerce_inputs_1.add_product_to_cart_variables; } });
Object.defineProperty(exports, "cancel_pending_subscription_variables", { enumerable: true, get: function () { return commerce_inputs_1.cancel_pending_subscription_variables; } });
Object.defineProperty(exports, "cancel_subscription_variables", { enumerable: true, get: function () { return commerce_inputs_1.cancel_subscription_variables; } });
Object.defineProperty(exports, "nissan_pay_order_history_variables", { enumerable: true, get: function () { return commerce_inputs_1.nissan_pay_order_history_variables; } });
Object.defineProperty(exports, "nissan_store_link_variables", { enumerable: true, get: function () { return commerce_inputs_1.nissan_store_link_variables; } });
Object.defineProperty(exports, "product_catalog_variables", { enumerable: true, get: function () { return commerce_inputs_1.product_catalog_variables; } });
const commerce_models_1 = require("./commerce_models");
Object.defineProperty(exports, "CancelPendingSubscriptionResult", { enumerable: true, get: function () { return commerce_models_1.CancelPendingSubscriptionResult; } });
Object.defineProperty(exports, "NissanPayAccount", { enumerable: true, get: function () { return commerce_models_1.NissanPayAccount; } });
Object.defineProperty(exports, "NissanPayOrderHistory", { enumerable: true, get: function () { return commerce_models_1.NissanPayOrderHistory; } });
Object.defineProperty(exports, "NissanStoreClientOrigin", { enumerable: true, get: function () { return commerce_models_1.NissanStoreClientOrigin; } });
Object.defineProperty(exports, "UnselectedCommerceResult", { enumerable: true, get: function () { return commerce_models_1.UnselectedCommerceResult; } });
const commerce_parsing_1 = require("./commerce_parsing");
Object.defineProperty(exports, "parse_add_product_to_cart", { enumerable: true, get: function () { return commerce_parsing_1.parse_add_product_to_cart; } });
Object.defineProperty(exports, "parse_cancel_pending_subscription", { enumerable: true, get: function () { return commerce_parsing_1.parse_cancel_pending_subscription; } });
Object.defineProperty(exports, "parse_cancel_subscription", { enumerable: true, get: function () { return commerce_parsing_1.parse_cancel_subscription; } });
Object.defineProperty(exports, "parse_digital_wallet_url", { enumerable: true, get: function () { return commerce_parsing_1.parse_digital_wallet_url; } });
Object.defineProperty(exports, "parse_nissan_pay", { enumerable: true, get: function () { return commerce_parsing_1.parse_nissan_pay; } });
Object.defineProperty(exports, "parse_nissan_pay_order_history", { enumerable: true, get: function () { return commerce_parsing_1.parse_nissan_pay_order_history; } });
Object.defineProperty(exports, "parse_nissan_store_checkout_url", { enumerable: true, get: function () { return commerce_parsing_1.parse_nissan_store_checkout_url; } });
Object.defineProperty(exports, "parse_product_catalog", { enumerable: true, get: function () { return commerce_parsing_1.parse_product_catalog; } });
Object.defineProperty(exports, "parse_trial_checkout_link", { enumerable: true, get: function () { return commerce_parsing_1.parse_trial_checkout_link; } });
Object.defineProperty(exports, "parse_upsert_nissan_pay_account", { enumerable: true, get: function () { return commerce_parsing_1.parse_upsert_nissan_pay_account; } });
const content_inputs_1 = require("./content_inputs");
Object.defineProperty(exports, "contact_us_variables", { enumerable: true, get: function () { return content_inputs_1.contact_us_variables; } });
Object.defineProperty(exports, "faq_variables", { enumerable: true, get: function () { return content_inputs_1.faq_variables; } });
Object.defineProperty(exports, "live_chat_hours_variables", { enumerable: true, get: function () { return content_inputs_1.live_chat_hours_variables; } });
const content_models_1 = require("./content_models");
Object.defineProperty(exports, "CertifiedPreOwnedDetails", { enumerable: true, get: function () { return content_models_1.CertifiedPreOwnedDetails; } });
Object.defineProperty(exports, "ClientType", { enumerable: true, get: function () { return content_models_1.ClientType; } });
Object.defineProperty(exports, "ContactUsInfo", { enumerable: true, get: function () { return content_models_1.ContactUsInfo; } });
Object.defineProperty(exports, "FrequentlyAskedQuestionCategory", { enumerable: true, get: function () { return content_models_1.FrequentlyAskedQuestionCategory; } });
Object.defineProperty(exports, "LiveChatHours", { enumerable: true, get: function () { return content_models_1.LiveChatHours; } });
Object.defineProperty(exports, "MobileCarrier", { enumerable: true, get: function () { return content_models_1.MobileCarrier; } });
const content_parsing_1 = require("./content_parsing");
Object.defineProperty(exports, "parse_contact_us", { enumerable: true, get: function () { return content_parsing_1.parse_contact_us; } });
Object.defineProperty(exports, "parse_cpo_details", { enumerable: true, get: function () { return content_parsing_1.parse_cpo_details; } });
Object.defineProperty(exports, "parse_faq", { enumerable: true, get: function () { return content_parsing_1.parse_faq; } });
Object.defineProperty(exports, "parse_live_chat_hours", { enumerable: true, get: function () { return content_parsing_1.parse_live_chat_hours; } });
Object.defineProperty(exports, "parse_mobile_carriers", { enumerable: true, get: function () { return content_parsing_1.parse_mobile_carriers; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
/** Translated upstream _ContentClientMixin. */
class _ContentClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _ContentClientMixin, __args); }
    /** Return account, ownership, and support contact information. */
    async async_get_contact_us(...__args) {
        let data;
        let { "client_type": client_type } = _runtime_1.py.bind(__args, ["client_type"], { "client_type": _runtime_1.py.attr(content_models_1.ClientType, "ANDROID") }, [], null, null);
        /** Return account, ownership, and support contact information. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ContactUs", _runtime_1.py.attr(operations, "CONTACT_US"), _runtime_1.py.call(content_inputs_1.contact_us_variables, [client_type], null)], null));
        return _runtime_1.py.call(content_parsing_1.parse_contact_us, [data], null);
    }
    /** Return certified-pre-owned provider details. */
    async async_get_cpo_details(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return certified-pre-owned provider details. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CpoDetails", _runtime_1.py.attr(operations, "CPO_DETAILS"), {}], null));
        return _runtime_1.py.call(content_parsing_1.parse_cpo_details, [data], null);
    }
    /** Return FAQ categories, optionally filtered by category name. */
    async async_get_faq(...__args) {
        let data;
        let { "categories": categories } = _runtime_1.py.bind(__args, ["categories"], { "categories": graphql_input_1.UNSET }, [], null, null);
        /** Return FAQ categories, optionally filtered by category name. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["FAQ", _runtime_1.py.attr(operations, "FAQ"), _runtime_1.py.call(content_inputs_1.faq_variables, [categories], null)], null));
        return _runtime_1.py.call(content_parsing_1.parse_faq, [data], null);
    }
    /** Return nullable live-chat hours for selected departments. */
    async async_get_live_chat_hours(...__args) {
        let data;
        let { "departments": departments, "enhanced_chat": enhanced_chat } = _runtime_1.py.bind(__args, ["departments", "enhanced_chat"], { "departments": graphql_input_1.UNSET, "enhanced_chat": graphql_input_1.UNSET }, [], null, null);
        /** Return nullable live-chat hours for selected departments. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["LiveChatHours", _runtime_1.py.attr(operations, "LIVE_CHAT_HOURS"), _runtime_1.py.call(content_inputs_1.live_chat_hours_variables, [departments, enhanced_chat], null)], null));
        return _runtime_1.py.call(content_parsing_1.parse_live_chat_hours, [data], null);
    }
    /** Return the mobile-carrier catalog used by account profiles. */
    async async_get_mobile_carriers(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return the mobile-carrier catalog used by account profiles. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["MobileCarriers", _runtime_1.py.attr(operations, "MOBILE_CARRIERS"), {}], null));
        return _runtime_1.py.call(content_parsing_1.parse_mobile_carriers, [data], null);
    }
    /** Add a selected product and selling model to Nissan Store cart. */
    async async_add_product_to_nissan_store_cart(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Add a selected product and selling model to Nissan Store cart. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["AddProductToNissanStoreCart", _runtime_1.py.attr(operations, "ADD_PRODUCT_TO_NISSAN_STORE_CART"), _runtime_1.py.call(commerce_inputs_1.add_product_to_cart_variables, [config], null)], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_add_product_to_cart, [data], null);
    }
    /** Cancel a pending subscription order. */
    async async_cancel_pending_subscription(...__args) {
        let data;
        let { "pending_order_id": pending_order_id } = _runtime_1.py.bind(__args, ["pending_order_id"], {}, [], null, null);
        /** Cancel a pending subscription order. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CancelPendingSubscription", _runtime_1.py.attr(operations, "CANCEL_PENDING_SUBSCRIPTION"), _runtime_1.py.call(commerce_inputs_1.cancel_pending_subscription_variables, [pending_order_id], null)], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_cancel_pending_subscription, [data], null);
    }
    /** Cancel an active Nissan Store subscription. */
    async async_cancel_subscription(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Cancel an active Nissan Store subscription. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CancelSubscription", _runtime_1.py.attr(operations, "CANCEL_SUBSCRIPTION"), _runtime_1.py.call(commerce_inputs_1.cancel_subscription_variables, [config], null)], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_cancel_subscription, [data], null);
    }
    /** Create a feature-on-demand trial checkout link. */
    async async_create_nissan_store_fod_trial_checkout_link(...__args) {
        let data;
        let { "vin": vin, "client_origin": client_origin } = _runtime_1.py.bind(__args, ["vin", "client_origin"], { "client_origin": _runtime_1.py.attr(commerce_models_1.NissanStoreClientOrigin, "ONE_APP") }, [], null, null);
        /** Create a feature-on-demand trial checkout link. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreateNissanStoreFODTrialCheckoutLink", _runtime_1.py.attr(operations, "CREATE_NISSAN_STORE_FOD_TRIAL_CHECKOUT_LINK"), _runtime_1.py.call(commerce_inputs_1.nissan_store_link_variables, [vin, client_origin], null)], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_trial_checkout_link, [data], null);
    }
    /** Return the nullable Nissan Pay digital-wallet URL. */
    async async_get_digital_wallet_url(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return the nullable Nissan Pay digital-wallet URL. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DigitalWalletURL", _runtime_1.py.attr(operations, "DIGITAL_WALLET_URL"), {}], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_digital_wallet_url, [data], null);
    }
    /** Return Nissan Pay methods and digital-wallet information. */
    async async_get_nissan_pay(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Return Nissan Pay methods and digital-wallet information. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NissanPay", _runtime_1.py.attr(operations, "NISSAN_PAY"), {}], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_nissan_pay, [data], null);
    }
    /** Return paginated Nissan Pay energy order history. */
    async async_get_nissan_pay_order_history(...__args) {
        let data;
        let { "vin": vin, "page_cursor": page_cursor } = _runtime_1.py.bind(__args, ["vin", "page_cursor"], { "page_cursor": graphql_input_1.UNSET }, [], null, null);
        /** Return paginated Nissan Pay energy order history. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NissanPayOrderHistory", _runtime_1.py.attr(operations, "NISSAN_PAY_ORDER_HISTORY"), _runtime_1.py.call(commerce_inputs_1.nissan_pay_order_history_variables, [vin, page_cursor], null)], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_nissan_pay_order_history, [data], null);
    }
    /** Return the nullable checkout URL for a vehicle. */
    async async_get_nissan_store_checkout_url(...__args) {
        let data;
        let { "vin": vin, "client_origin": client_origin } = _runtime_1.py.bind(__args, ["vin", "client_origin"], { "client_origin": _runtime_1.py.attr(commerce_models_1.NissanStoreClientOrigin, "ONE_APP") }, [], null, null);
        /** Return the nullable checkout URL for a vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["NissanStoreCheckoutURL", _runtime_1.py.attr(operations, "NISSAN_STORE_CHECKOUT_URL"), _runtime_1.py.call(commerce_inputs_1.nissan_store_link_variables, [vin, client_origin], null)], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_nissan_store_checkout_url, [data], null);
    }
    /** Return Nissan Store product packages for an optional vehicle. */
    async async_get_product_catalog(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Return Nissan Store product packages for an optional vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["ProductCatalog", _runtime_1.py.attr(operations, "PRODUCT_CATALOG"), _runtime_1.py.call(commerce_inputs_1.product_catalog_variables, [config], null)], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_product_catalog, [data], null);
    }
    /** Create or synchronize the signed-in Nissan Pay account. */
    async async_upsert_nissan_pay_account(...__args) {
        let data;
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        /** Create or synchronize the signed-in Nissan Pay account. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpsertNissanPayAccount", _runtime_1.py.attr(operations, "UPSERT_NISSAN_PAY_ACCOUNT"), {}], null));
        return _runtime_1.py.call(commerce_parsing_1.parse_upsert_nissan_pay_account, [data], null);
    }
}
exports._ContentClientMixin = _ContentClientMixin;
_runtime_1.py.classType(_ContentClientMixin);
//# sourceMappingURL=_content_client.js.map