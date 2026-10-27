"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports._MX_PROFILE = exports._CA_PROFILE = exports._US_PROFILE = exports._GRAPHQL_ENDPOINT = exports._TOKEN_ENDPOINT = exports._MOBILE_USER_AGENT = exports._MOBILE_APP_VERSION = exports._MOBILE_APP_PACKAGE = exports._MOBILE_OAUTH_SCOPE = exports._MOBILE_CLIENT_SECRET = exports._MOBILE_CLIENT_ID = exports._ACCOUNT_NAMESPACE = exports._CountryProfile = exports.Country = void 0;
exports._https_endpoint = _https_endpoint;
exports.profile_for = profile_for;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const assert_never = _runtime_1.py.assert_never;
const urlunsplit = _runtime_1.py.urlunsplit;
const countries_1 = require("./countries");
Object.defineProperty(exports, "Country", { enumerable: true, get: function () { return countries_1.Country; } });
/** Service endpoints and application metadata for one country. */
class _CountryProfile {
    token_endpoint;
    graphql_endpoint;
    account_namespace;
    client_id;
    client_secret;
    oauth_scope;
    app_package;
    app_version;
    application_client_id;
    application_client_secret;
    application_oauth_scope;
    application_app_package;
    application_app_version;
    brand;
    country;
    accept_language;
    user_agent;
    request_timeout_seconds;
    static __fields = [["token_endpoint", _runtime_1.py.MISSING], ["graphql_endpoint", _runtime_1.py.MISSING], ["account_namespace", _runtime_1.py.MISSING], ["client_id", _runtime_1.py.MISSING], ["client_secret", _runtime_1.py.MISSING], ["oauth_scope", _runtime_1.py.MISSING], ["app_package", _runtime_1.py.MISSING], ["app_version", _runtime_1.py.MISSING], ["application_client_id", _runtime_1.py.MISSING], ["application_client_secret", _runtime_1.py.MISSING], ["application_oauth_scope", _runtime_1.py.MISSING], ["application_app_package", _runtime_1.py.MISSING], ["application_app_version", _runtime_1.py.MISSING], ["brand", _runtime_1.py.MISSING], ["country", _runtime_1.py.MISSING], ["accept_language", _runtime_1.py.MISSING], ["user_agent", _runtime_1.py.MISSING], ["request_timeout_seconds", 30.0]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, _CountryProfile, __args); Object.freeze(this); }
    /** Return the Apollo client identifier sent with GraphQL requests. */
    get apollo_client_name() {
        /** Return the Apollo client identifier sent with GraphQL requests. */
        return (_runtime_1.py.str(_runtime_1.py.attr(this, "app_package")) + ":android");
    }
    /** Return the Apollo identifier used before account authentication. */
    get application_apollo_client_name() {
        /** Return the Apollo identifier used before account authentication. */
        return (_runtime_1.py.str(_runtime_1.py.attr(this, "application_app_package")) + ":android");
    }
}
exports._CountryProfile = _CountryProfile;
_runtime_1.py.classType(_CountryProfile);
exports._ACCOUNT_NAMESPACE = "NISNNAVCS";
exports._MOBILE_CLIENT_ID = "v9no_nW7GqHYsfAKkki6_N5AFVIa";
exports._MOBILE_CLIENT_SECRET = "Ynn56ncVx0yVffnDHIIMTWVYiuAa";
exports._MOBILE_OAUTH_SCOPE = "openid device_{device_id}+internal_login";
exports._MOBILE_APP_PACKAGE = "ca.nissan.nissanconnectservices";
exports._MOBILE_APP_VERSION = "9.9.91";
exports._MOBILE_USER_AGENT = "okhttp/5.2.1";
/** Translated upstream _https_endpoint. */
function _https_endpoint(...__args) {
    let { "host": host, "path": path } = _runtime_1.py.bind(__args, ["host"], {}, [], "path", null);
    return _runtime_1.py.call(urlunsplit, [["https", _runtime_1.py.call(_runtime_1.py.attr(".", "join"), [host], null), _runtime_1.py.call(_runtime_1.py.attr("/", "join"), [path], null), "", ""]], null);
}
exports._TOKEN_ENDPOINT = _runtime_1.py.call(_https_endpoint, [["services", "nissanusa", "com"], "token"], null);
exports._GRAPHQL_ENDPOINT = _runtime_1.py.call(_https_endpoint, [["api-ccs", "na", "nissancloud", "com"], "iotmw-hades-ccs", "graphql"], null);
exports._US_PROFILE = _runtime_1.py.call(_CountryProfile, [], Object.assign({}, { "token_endpoint": exports._TOKEN_ENDPOINT }, { "graphql_endpoint": exports._GRAPHQL_ENDPOINT }, { "account_namespace": exports._ACCOUNT_NAMESPACE }, { "client_id": exports._MOBILE_CLIENT_ID }, { "client_secret": exports._MOBILE_CLIENT_SECRET }, { "oauth_scope": exports._MOBILE_OAUTH_SCOPE }, { "app_package": exports._MOBILE_APP_PACKAGE }, { "app_version": exports._MOBILE_APP_VERSION }, { "application_client_id": "6wYMOME6Rs4kWVxS4i6b2RUsR4Ma" }, { "application_client_secret": "fWp6esCzsq3vCY6RLf3p_CV_ukAa" }, { "application_oauth_scope": "openid device_{device_id}" }, { "application_app_package": "com.nissan.mynissan" }, { "application_app_version": "6.9.110" }, { "brand": "Nissan" }, { "country": _runtime_1.py.attr(countries_1.Country, "US") }, { "accept_language": "en-US" }, { "user_agent": exports._MOBILE_USER_AGENT }));
exports._CA_PROFILE = _runtime_1.py.call(_CountryProfile, [], Object.assign({}, { "token_endpoint": exports._TOKEN_ENDPOINT }, { "graphql_endpoint": exports._GRAPHQL_ENDPOINT }, { "account_namespace": exports._ACCOUNT_NAMESPACE }, { "client_id": exports._MOBILE_CLIENT_ID }, { "client_secret": exports._MOBILE_CLIENT_SECRET }, { "oauth_scope": exports._MOBILE_OAUTH_SCOPE }, { "app_package": exports._MOBILE_APP_PACKAGE }, { "app_version": exports._MOBILE_APP_VERSION }, { "application_client_id": exports._MOBILE_CLIENT_ID }, { "application_client_secret": exports._MOBILE_CLIENT_SECRET }, { "application_oauth_scope": "openid device_{device_id}" }, { "application_app_package": exports._MOBILE_APP_PACKAGE }, { "application_app_version": exports._MOBILE_APP_VERSION }, { "brand": "Nissan" }, { "country": _runtime_1.py.attr(countries_1.Country, "CA") }, { "accept_language": "en-CA" }, { "user_agent": exports._MOBILE_USER_AGENT }));
exports._MX_PROFILE = _runtime_1.py.call(_CountryProfile, [], Object.assign({}, { "token_endpoint": exports._TOKEN_ENDPOINT }, { "graphql_endpoint": exports._GRAPHQL_ENDPOINT }, { "account_namespace": exports._ACCOUNT_NAMESPACE }, { "client_id": exports._MOBILE_CLIENT_ID }, { "client_secret": exports._MOBILE_CLIENT_SECRET }, { "oauth_scope": exports._MOBILE_OAUTH_SCOPE }, { "app_package": exports._MOBILE_APP_PACKAGE }, { "app_version": exports._MOBILE_APP_VERSION }, { "application_client_id": "5RVUrd6tfV61TtlWFpLGm6UYoDka" }, { "application_client_secret": "vI_X2L2trvXhg94Q9DxAJdHXyJ0a" }, { "application_oauth_scope": "openid device_{device_id}" }, { "application_app_package": "com.nissan.droid.mynissan" }, { "application_app_version": "6.2.31" }, { "brand": "Nissan" }, { "country": _runtime_1.py.attr(countries_1.Country, "MX") }, { "accept_language": "es-MX" }, { "user_agent": exports._MOBILE_USER_AGENT }));
/** Return the service profile for a supported country. */
function profile_for(...__args) {
    let { "country": country } = _runtime_1.py.bind(__args, ["country"], {}, [], null, null);
    /** Return the service profile for a supported country. */
    if (_runtime_1.py.eq(country, _runtime_1.py.attr(countries_1.Country, "US"))) {
        return exports._US_PROFILE;
    }
    else if (_runtime_1.py.eq(country, _runtime_1.py.attr(countries_1.Country, "CA"))) {
        return exports._CA_PROFILE;
    }
    else if (_runtime_1.py.eq(country, _runtime_1.py.attr(countries_1.Country, "MX"))) {
        return exports._MX_PROFILE;
    }
    _runtime_1.py.call(assert_never, [country], null);
}
//# sourceMappingURL=_profile.js.map