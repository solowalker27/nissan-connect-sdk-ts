"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertNissanPayAccountSuccess = exports.UpsertNissanPayAccountFailure = exports.UnselectedCommerceResult = exports.ProductAddedToNissanStoreCart = exports.NissanStoreProductCatalog = exports.NissanStoreCatalogPackage = exports.NissanPayOrderHistoryPagination = exports.NissanPayOrderHistory = exports.NissanPayAccount = exports.CancelSubscriptionSuccess = exports.CancelSubscriptionStatus = exports.CancelSubscriptionGeneralError = exports.CancelPendingSubscriptionResult = exports._typename = exports._typed_object = exports._root = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_int = exports._required_nullable_bool = exports._required_typed_object = exports._required_nullable_datetime = exports._required_list = exports._nullable_list = exports._parse_payment_card = exports._parse_energy_charge_session = exports._parse_added_product = exports._parse_added_cart = exports._parse_catalog_package = void 0;
exports.parse_add_product_to_cart = parse_add_product_to_cart;
exports.parse_cancel_pending_subscription = parse_cancel_pending_subscription;
exports.parse_cancel_subscription = parse_cancel_subscription;
exports.parse_trial_checkout_link = parse_trial_checkout_link;
exports.parse_digital_wallet_url = parse_digital_wallet_url;
exports.parse_nissan_pay = parse_nissan_pay;
exports.parse_nissan_pay_order_history = parse_nissan_pay_order_history;
exports.parse_nissan_store_checkout_url = parse_nissan_store_checkout_url;
exports.parse_product_catalog = parse_product_catalog;
exports.parse_upsert_nissan_pay_account = parse_upsert_nissan_pay_account;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _commerce_catalog_parsing_1 = require("./_commerce_catalog_parsing");
Object.defineProperty(exports, "_parse_catalog_package", { enumerable: true, get: function () { return _commerce_catalog_parsing_1._parse_catalog_package; } });
const _commerce_payment_parsing_1 = require("./_commerce_payment_parsing");
Object.defineProperty(exports, "_parse_added_cart", { enumerable: true, get: function () { return _commerce_payment_parsing_1._parse_added_cart; } });
Object.defineProperty(exports, "_parse_added_product", { enumerable: true, get: function () { return _commerce_payment_parsing_1._parse_added_product; } });
Object.defineProperty(exports, "_parse_energy_charge_session", { enumerable: true, get: function () { return _commerce_payment_parsing_1._parse_energy_charge_session; } });
Object.defineProperty(exports, "_parse_payment_card", { enumerable: true, get: function () { return _commerce_payment_parsing_1._parse_payment_card; } });
const _commerce_value_parsing_1 = require("./_commerce_value_parsing");
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _commerce_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_required_list", { enumerable: true, get: function () { return _commerce_value_parsing_1._required_list; } });
Object.defineProperty(exports, "_required_nullable_datetime", { enumerable: true, get: function () { return _commerce_value_parsing_1._required_nullable_datetime; } });
Object.defineProperty(exports, "_required_typed_object", { enumerable: true, get: function () { return _commerce_value_parsing_1._required_typed_object; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return account_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
Object.defineProperty(exports, "_root", { enumerable: true, get: function () { return account_parsing_1._root; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return account_parsing_1._typed_object; } });
Object.defineProperty(exports, "_typename", { enumerable: true, get: function () { return account_parsing_1._typename; } });
const commerce_models_1 = require("./commerce_models");
Object.defineProperty(exports, "CancelPendingSubscriptionResult", { enumerable: true, get: function () { return commerce_models_1.CancelPendingSubscriptionResult; } });
Object.defineProperty(exports, "CancelSubscriptionGeneralError", { enumerable: true, get: function () { return commerce_models_1.CancelSubscriptionGeneralError; } });
Object.defineProperty(exports, "CancelSubscriptionStatus", { enumerable: true, get: function () { return commerce_models_1.CancelSubscriptionStatus; } });
Object.defineProperty(exports, "CancelSubscriptionSuccess", { enumerable: true, get: function () { return commerce_models_1.CancelSubscriptionSuccess; } });
Object.defineProperty(exports, "NissanPayAccount", { enumerable: true, get: function () { return commerce_models_1.NissanPayAccount; } });
Object.defineProperty(exports, "NissanPayOrderHistory", { enumerable: true, get: function () { return commerce_models_1.NissanPayOrderHistory; } });
Object.defineProperty(exports, "NissanPayOrderHistoryPagination", { enumerable: true, get: function () { return commerce_models_1.NissanPayOrderHistoryPagination; } });
Object.defineProperty(exports, "NissanStoreCatalogPackage", { enumerable: true, get: function () { return commerce_models_1.NissanStoreCatalogPackage; } });
Object.defineProperty(exports, "NissanStoreProductCatalog", { enumerable: true, get: function () { return commerce_models_1.NissanStoreProductCatalog; } });
Object.defineProperty(exports, "ProductAddedToNissanStoreCart", { enumerable: true, get: function () { return commerce_models_1.ProductAddedToNissanStoreCart; } });
Object.defineProperty(exports, "UnselectedCommerceResult", { enumerable: true, get: function () { return commerce_models_1.UnselectedCommerceResult; } });
Object.defineProperty(exports, "UpsertNissanPayAccountFailure", { enumerable: true, get: function () { return commerce_models_1.UpsertNissanPayAccountFailure; } });
Object.defineProperty(exports, "UpsertNissanPayAccountSuccess", { enumerable: true, get: function () { return commerce_models_1.UpsertNissanPayAccountSuccess; } });
/** Parse every selected Nissan Store add-to-cart union branch. */
function parse_add_product_to_cart(...__args) {
    let cart, product, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected Nissan Store add-to-cart union branch. */
    root_field = "addProductToNissanStoreCart";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((!_runtime_1.py.eq(typename, "AddProductToNissanStoreCartOutput")))) {
        return _runtime_1.py.call(commerce_models_1.UnselectedCommerceResult, [typename], null);
    }
    cart = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "cart", (_runtime_1.py.str(root_field) + ".cart")], null);
    product = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "product", (_runtime_1.py.str(root_field) + ".product")], null);
    return _runtime_1.py.call(commerce_models_1.ProductAddedToNissanStoreCart, [], Object.assign({}, { "cart": (_runtime_1.py.truth(((cart !== null))) ? _runtime_1.py.call(_commerce_payment_parsing_1._parse_added_cart, [cart, (_runtime_1.py.str(root_field) + ".cart")], null) : null) }, { "product": (_runtime_1.py.truth(((product !== null))) ? _runtime_1.py.call(_commerce_payment_parsing_1._parse_added_product, [product, (_runtime_1.py.str(root_field) + ".product")], null) : null) }));
}
/** Parse pending-subscription cancellation status. */
function parse_cancel_pending_subscription(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse pending-subscription cancellation status. */
    root_field = "cancelPendingSubscription";
    root = _runtime_1.py.call(_commerce_value_parsing_1._required_typed_object, [data, root_field, root_field], null);
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ResponseStatusType")))) {
        return _runtime_1.py.call(commerce_models_1.CancelPendingSubscriptionResult, [_runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "success", (_runtime_1.py.str(root_field) + ".success")], null)], null);
    }
    return _runtime_1.py.call(commerce_models_1.UnselectedCommerceResult, [typename], null);
}
/** Parse every selected subscription-cancellation union branch. */
function parse_cancel_subscription(...__args) {
    let root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected subscription-cancellation union branch. */
    root_field = "cancelSubscription";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "ResponseStatus")))) {
        return _runtime_1.py.call(commerce_models_1.CancelSubscriptionStatus, [_runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "success", (_runtime_1.py.str(root_field) + ".success")], null)], null);
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "CancelSubscriptionSuccessResponse")))) {
        return _runtime_1.py.call(commerce_models_1.CancelSubscriptionSuccess, [], Object.assign({}, { "success": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [root, "success", (_runtime_1.py.str(root_field) + ".success")], null) }, { "subscription_end_date": _runtime_1.py.call(_commerce_value_parsing_1._required_nullable_datetime, [root, "subscriptionEndDate", (_runtime_1.py.str(root_field) + ".subscriptionEndDate")], null) }));
    }
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "CancelSubscriptionGeneralError")))) {
        return _runtime_1.py.call(commerce_models_1.CancelSubscriptionGeneralError, [_runtime_1.py.call(account_parsing_1._required_string, [root, "message", (_runtime_1.py.str(root_field) + ".message")], null)], null);
    }
    return _runtime_1.py.call(commerce_models_1.UnselectedCommerceResult, [typename], null);
}
/** Parse the nullable feature-on-demand trial checkout link. */
function parse_trial_checkout_link(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable feature-on-demand trial checkout link. */
    return _runtime_1.py.call(account_parsing_1._required_nullable_string, [data, "createNissanStoreFODTrialCheckoutLink", "createNissanStoreFODTrialCheckoutLink"], null);
}
/** Parse the nullable Nissan Pay digital-wallet URL. */
function parse_digital_wallet_url(...__args) {
    let nissan_pay, wallet;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable Nissan Pay digital-wallet URL. */
    nissan_pay = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [data, "nissanPay", "nissanPay"], null);
    if (_runtime_1.py.truth(((nissan_pay === null)))) {
        return null;
    }
    wallet = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [nissan_pay, "digitalWallet", "nissanPay.digitalWallet"], null);
    if (_runtime_1.py.truth(((wallet === null)))) {
        return null;
    }
    return _runtime_1.py.call(account_parsing_1._required_nullable_string, [wallet, "url", "nissanPay.digitalWallet.url"], null);
}
/** Parse Nissan Pay methods and the nullable digital-wallet URL. */
function parse_nissan_pay(...__args) {
    let index, item, methods, parsed_methods, path, root, typename, value, values, wallet;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse Nissan Pay methods and the nullable digital-wallet URL. */
    root = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [data, "nissanPay", "nissanPay"], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    methods = _runtime_1.py.call(_commerce_value_parsing_1._nullable_list, [root, "paymentMethods", "nissanPay.paymentMethods"], null);
    parsed_methods = null;
    if (_runtime_1.py.truth(((methods !== null)))) {
        values = [];
        for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [methods], null))) {
            if (_runtime_1.py.truth(((value === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(values, "append"), [null], null);
                continue;
            }
            path = ("nissanPay.paymentMethods[" + _runtime_1.py.str(index) + "]");
            item = _runtime_1.py.call(account_parsing_1._typed_object, [value, path], null);
            typename = _runtime_1.py.call(account_parsing_1._typename, [item, path], null);
            if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NissanPayPaymentMethodCard")))) {
                _runtime_1.py.call(_runtime_1.py.attr(values, "append"), [_runtime_1.py.call(_commerce_payment_parsing_1._parse_payment_card, [item, path], null)], null);
            }
            else {
                _runtime_1.py.call(_runtime_1.py.attr(values, "append"), [_runtime_1.py.call(commerce_models_1.UnselectedCommerceResult, [typename], null)], null);
            }
        }
        parsed_methods = _runtime_1.py.call(_runtime_1.py.tuple, [values], null);
    }
    wallet = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [root, "digitalWallet", "nissanPay.digitalWallet"], null);
    return _runtime_1.py.call(commerce_models_1.NissanPayAccount, [], Object.assign({}, { "payment_methods": parsed_methods }, { "digital_wallet_url": (_runtime_1.py.truth(((wallet !== null))) ? _runtime_1.py.call(account_parsing_1._required_nullable_string, [wallet, "url", "nissanPay.digitalWallet.url"], null) : null) }));
}
/** Parse the nullable Nissan Pay energy order history. */
function parse_nissan_pay_order_history(...__args) {
    let history, index, item, item_values, items, nissan_pay, pagination, path, typename, value;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable Nissan Pay energy order history. */
    nissan_pay = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [data, "nissanPay", "nissanPay"], null);
    if (_runtime_1.py.truth(((nissan_pay === null)))) {
        return null;
    }
    history = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [nissan_pay, "orderHistory", "nissanPay.orderHistory"], null);
    if (_runtime_1.py.truth(((history === null)))) {
        return null;
    }
    item_values = _runtime_1.py.call(_commerce_value_parsing_1._required_list, [history, "items", "nissanPay.orderHistory.items"], null);
    items = [];
    for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [item_values], null))) {
        if (_runtime_1.py.truth(((value === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(items, "append"), [null], null);
            continue;
        }
        path = ("nissanPay.orderHistory.items[" + _runtime_1.py.str(index) + "]");
        item = _runtime_1.py.call(account_parsing_1._typed_object, [value, path], null);
        typename = _runtime_1.py.call(account_parsing_1._typename, [item, path], null);
        if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "NissanPayEnergyChargeSession")))) {
            _runtime_1.py.call(_runtime_1.py.attr(items, "append"), [_runtime_1.py.call(_commerce_payment_parsing_1._parse_energy_charge_session, [item, path], null)], null);
        }
        else {
            _runtime_1.py.call(_runtime_1.py.attr(items, "append"), [_runtime_1.py.call(commerce_models_1.UnselectedCommerceResult, [typename], null)], null);
        }
    }
    pagination = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [history, "pagination", "nissanPay.orderHistory.pagination"], null);
    return _runtime_1.py.call(commerce_models_1.NissanPayOrderHistory, [], Object.assign({}, { "items": _runtime_1.py.call(_runtime_1.py.tuple, [items], null) }, { "pagination": (_runtime_1.py.truth(((pagination !== null))) ? _runtime_1.py.call(commerce_models_1.NissanPayOrderHistoryPagination, [], Object.assign({}, { "next_page_cursor": _runtime_1.py.call(account_parsing_1._required_nullable_string, [pagination, "nextPageCursor", "nissanPay.orderHistory.pagination.nextPageCursor"], null) }, { "total_size": _runtime_1.py.call(account_parsing_1._required_nullable_int, [pagination, "totalSize", "nissanPay.orderHistory.pagination.totalSize"], null) })) : null) }));
}
/** Parse the nullable Nissan Store checkout URL. */
function parse_nissan_store_checkout_url(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable Nissan Store checkout URL. */
    return _runtime_1.py.call(account_parsing_1._required_nullable_string, [data, "nissanStoreCheckoutURL", "nissanStoreCheckoutURL"], null);
}
/** Parse every selected Nissan Store product-catalog union branch. */
function parse_product_catalog(...__args) {
    let index, packages, parsed_packages, path, root, root_field, typename, value, values;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected Nissan Store product-catalog union branch. */
    root_field = "productCatalog";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((!_runtime_1.py.eq(typename, "NSProductCatalog")))) {
        return _runtime_1.py.call(commerce_models_1.UnselectedCommerceResult, [typename], null);
    }
    packages = _runtime_1.py.call(_commerce_value_parsing_1._nullable_list, [root, "packages", (_runtime_1.py.str(root_field) + ".packages")], null);
    parsed_packages = null;
    if (_runtime_1.py.truth(((packages !== null)))) {
        values = [];
        for ([index, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [packages], null))) {
            if (_runtime_1.py.truth(((value === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(values, "append"), [null], null);
                continue;
            }
            path = (_runtime_1.py.str(root_field) + ".packages[" + _runtime_1.py.str(index) + "]");
            _runtime_1.py.call(_runtime_1.py.attr(values, "append"), [_runtime_1.py.call(_commerce_catalog_parsing_1._parse_catalog_package, [_runtime_1.py.call(account_parsing_1._typed_object, [value, path], null), path], null)], null);
        }
        parsed_packages = _runtime_1.py.call(_runtime_1.py.tuple, [values], null);
    }
    return _runtime_1.py.call(commerce_models_1.NissanStoreProductCatalog, [parsed_packages], null);
}
/** Parse every selected Nissan Pay account-upsert union branch. */
function parse_upsert_nissan_pay_account(...__args) {
    let response, response_code, response_message, root, root_field, typename;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse every selected Nissan Pay account-upsert union branch. */
    root_field = "upsertNissanPayAccount";
    root = _runtime_1.py.call(account_parsing_1._root, [data, root_field], null);
    if (_runtime_1.py.truth(((root === null)))) {
        return null;
    }
    typename = _runtime_1.py.call(account_parsing_1._typename, [root, root_field], null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(new Set(["UpsertNissanPayAccountSuccessResponse", "UpsertNissanPayAccountFailureResponse"]), typename)))) {
        return _runtime_1.py.call(commerce_models_1.UnselectedCommerceResult, [typename], null);
    }
    response_message = _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "responseMessage", (_runtime_1.py.str(root_field) + ".responseMessage")], null);
    response_code = _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "responseCode", (_runtime_1.py.str(root_field) + ".responseCode")], null);
    response = _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "response", (_runtime_1.py.str(root_field) + ".response")], null);
    if (_runtime_1.py.truth((_runtime_1.py.eq(typename, "UpsertNissanPayAccountSuccessResponse")))) {
        return _runtime_1.py.call(commerce_models_1.UpsertNissanPayAccountSuccess, [response_message, response_code, response, _runtime_1.py.call(account_parsing_1._required_nullable_string, [root, "customerId", (_runtime_1.py.str(root_field) + ".customerId")], null)], null);
    }
    return _runtime_1.py.call(commerce_models_1.UpsertNissanPayAccountFailure, [response_message, response_code, response], null);
}
//# sourceMappingURL=_commerce_public_parsing.js.map