// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";

const dataclass = $.dataclass;

const assert_never = $.assert_never;

const urlunsplit = $.urlunsplit;

import { Country } from "./countries";
export { Country };

/** Service endpoints and application metadata for one country. */
export class _CountryProfile {
readonly token_endpoint: string;
readonly graphql_endpoint: string;
readonly account_namespace: string;
readonly client_id: string;
readonly client_secret: string;
readonly oauth_scope: string;
readonly app_package: string;
readonly app_version: string;
readonly application_client_id: string;
readonly application_client_secret: string;
readonly application_oauth_scope: string;
readonly application_app_package: string;
readonly application_app_version: string;
readonly brand: string;
readonly country: Country;
readonly accept_language: string;
readonly user_agent: string;
readonly request_timeout_seconds: number;
static __fields = [["token_endpoint", $.MISSING], ["graphql_endpoint", $.MISSING], ["account_namespace", $.MISSING], ["client_id", $.MISSING], ["client_secret", $.MISSING], ["oauth_scope", $.MISSING], ["app_package", $.MISSING], ["app_version", $.MISSING], ["application_client_id", $.MISSING], ["application_client_secret", $.MISSING], ["application_oauth_scope", $.MISSING], ["application_app_package", $.MISSING], ["application_app_version", $.MISSING], ["brand", $.MISSING], ["country", $.MISSING], ["accept_language", $.MISSING], ["user_agent", $.MISSING], ["request_timeout_seconds", 30.0]];
constructor(token_endpoint: string, graphql_endpoint: string, account_namespace: string, client_id: string, client_secret: string, oauth_scope: string, app_package: string, app_version: string, application_client_id: string, application_client_secret: string, application_oauth_scope: string, application_app_package: string, application_app_version: string, brand: string, country: Country, accept_language: string, user_agent: string, request_timeout_seconds?: number);
constructor(options: { token_endpoint: string; graphql_endpoint: string; account_namespace: string; client_id: string; client_secret: string; oauth_scope: string; app_package: string; app_version: string; application_client_id: string; application_client_secret: string; application_oauth_scope: string; application_app_package: string; application_app_version: string; brand: string; country: Country; accept_language: string; user_agent: string; request_timeout_seconds?: number });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, _CountryProfile, __args);  Object.freeze(this); }
/** Return the Apollo client identifier sent with GraphQL requests. */
get apollo_client_name(): string {
/** Return the Apollo client identifier sent with GraphQL requests. */
return ($.str($.attr(this, "app_package")) + ":android");
}
/** Return the Apollo identifier used before account authentication. */
get application_apollo_client_name(): string {
/** Return the Apollo identifier used before account authentication. */
return ($.str($.attr(this, "application_app_package")) + ":android");
}
}
$.classType(_CountryProfile);

export let _ACCOUNT_NAMESPACE = "NISNNAVCS";

export let _MOBILE_CLIENT_ID = "v9no_nW7GqHYsfAKkki6_N5AFVIa";

export let _MOBILE_CLIENT_SECRET = "Ynn56ncVx0yVffnDHIIMTWVYiuAa";

export let _MOBILE_OAUTH_SCOPE = "openid device_{device_id}+internal_login";

export let _MOBILE_APP_PACKAGE = "ca.nissan.nissanconnectservices";

export let _MOBILE_APP_VERSION = "9.9.91";

export let _MOBILE_USER_AGENT = "okhttp/5.2.1";

export function _https_endpoint(host: ReadonlyArray<string>, ...path: ReadonlyArray<string>): string;
/** Translated upstream _https_endpoint. */
export function _https_endpoint(...__args: any[]): any {
let {"host": host, "path": path} = $.bind(__args, ["host"], {}, [], "path", null);
return $.call(urlunsplit, [["https", $.call($.attr(".", "join"), [host], null), $.call($.attr("/", "join"), [path], null), "", ""]], null);
}

export let _TOKEN_ENDPOINT = $.call(_https_endpoint, [["services", "nissanusa", "com"], "token"], null);

export let _GRAPHQL_ENDPOINT = $.call(_https_endpoint, [["api-ccs", "na", "nissancloud", "com"], "iotmw-hades-ccs", "graphql"], null);

export let _US_PROFILE = $.call(_CountryProfile, [], Object.assign({}, {"token_endpoint": _TOKEN_ENDPOINT}, {"graphql_endpoint": _GRAPHQL_ENDPOINT}, {"account_namespace": _ACCOUNT_NAMESPACE}, {"client_id": _MOBILE_CLIENT_ID}, {"client_secret": _MOBILE_CLIENT_SECRET}, {"oauth_scope": _MOBILE_OAUTH_SCOPE}, {"app_package": _MOBILE_APP_PACKAGE}, {"app_version": _MOBILE_APP_VERSION}, {"application_client_id": "6wYMOME6Rs4kWVxS4i6b2RUsR4Ma"}, {"application_client_secret": "fWp6esCzsq3vCY6RLf3p_CV_ukAa"}, {"application_oauth_scope": "openid device_{device_id}"}, {"application_app_package": "com.nissan.mynissan"}, {"application_app_version": "6.9.110"}, {"brand": "Nissan"}, {"country": $.attr(Country, "US")}, {"accept_language": "en-US"}, {"user_agent": _MOBILE_USER_AGENT}));

export let _CA_PROFILE = $.call(_CountryProfile, [], Object.assign({}, {"token_endpoint": _TOKEN_ENDPOINT}, {"graphql_endpoint": _GRAPHQL_ENDPOINT}, {"account_namespace": _ACCOUNT_NAMESPACE}, {"client_id": _MOBILE_CLIENT_ID}, {"client_secret": _MOBILE_CLIENT_SECRET}, {"oauth_scope": _MOBILE_OAUTH_SCOPE}, {"app_package": _MOBILE_APP_PACKAGE}, {"app_version": _MOBILE_APP_VERSION}, {"application_client_id": _MOBILE_CLIENT_ID}, {"application_client_secret": _MOBILE_CLIENT_SECRET}, {"application_oauth_scope": "openid device_{device_id}"}, {"application_app_package": _MOBILE_APP_PACKAGE}, {"application_app_version": _MOBILE_APP_VERSION}, {"brand": "Nissan"}, {"country": $.attr(Country, "CA")}, {"accept_language": "en-CA"}, {"user_agent": _MOBILE_USER_AGENT}));

export let _MX_PROFILE = $.call(_CountryProfile, [], Object.assign({}, {"token_endpoint": _TOKEN_ENDPOINT}, {"graphql_endpoint": _GRAPHQL_ENDPOINT}, {"account_namespace": _ACCOUNT_NAMESPACE}, {"client_id": _MOBILE_CLIENT_ID}, {"client_secret": _MOBILE_CLIENT_SECRET}, {"oauth_scope": _MOBILE_OAUTH_SCOPE}, {"app_package": _MOBILE_APP_PACKAGE}, {"app_version": _MOBILE_APP_VERSION}, {"application_client_id": "5RVUrd6tfV61TtlWFpLGm6UYoDka"}, {"application_client_secret": "vI_X2L2trvXhg94Q9DxAJdHXyJ0a"}, {"application_oauth_scope": "openid device_{device_id}"}, {"application_app_package": "com.nissan.droid.mynissan"}, {"application_app_version": "6.2.31"}, {"brand": "Nissan"}, {"country": $.attr(Country, "MX")}, {"accept_language": "es-MX"}, {"user_agent": _MOBILE_USER_AGENT}));

export function profile_for(country: Country): _CountryProfile;
/** Return the service profile for a supported country. */
export function profile_for(...__args: any[]): any {
let {"country": country} = $.bind(__args, ["country"], {}, [], null, null);
/** Return the service profile for a supported country. */
if ($.eq(country, $.attr(Country, "US"))) {
return _US_PROFILE;
} else if ($.eq(country, $.attr(Country, "CA"))) {
return _CA_PROFILE;
} else if ($.eq(country, $.attr(Country, "MX"))) {
return _MX_PROFILE;
}
$.call(assert_never, [country], null);
}
