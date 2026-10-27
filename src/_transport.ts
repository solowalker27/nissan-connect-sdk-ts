// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";

import {adaptHttpSession} from "./http";



const asyncio = $.asyncio;

const base64 = $.base64;

const inspect = $.inspect;

const json = $.json;

const time = $.time;

const Mapping = $.Mapping;

const dataclass = $.dataclass;

const cast = $.cast;

const uuid4 = $.uuid4;

const ClientError = $.ClientError;
const ClientSession = $.ClientSession;
const ClientTimeout = $.ClientTimeout;

import { _CountryProfile } from "./_profile";
export { _CountryProfile };

import { RequestProofProvider, TokenListener } from "./callbacks";
export { RequestProofProvider, TokenListener };

import { ApiError, AuthenticationError, GraphQLError, NetworkError, ResponseError } from "./exceptions";
export { ApiError, AuthenticationError, GraphQLError, NetworkError, ResponseError };

import { Tokens } from "./models";
export { Tokens };

import { RequestProof } from "./request_proof";
export { RequestProof };

export type JsonObject = Record<string, unknown>;

/** Translated upstream _ApplicationToken. */
export class _ApplicationToken {
readonly access_token: string;
static __fields = [["access_token", $.MISSING]];
constructor(access_token: string);
constructor(options: { access_token: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, _ApplicationToken, __args);  Object.freeze(this); }
}
$.classType(_ApplicationToken);

/** OAuth and GraphQL transport using a caller-owned aiohttp session. */
export class _NissanTransport {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _NissanTransport, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"session": session, "profile": profile, "tokens": tokens, "token_listener": token_listener, "oauth_device_id": oauth_device_id, "request_proof": request_proof, "request_proof_provider": request_proof_provider} = $.bind(__args, ["session"], {"tokens": null, "token_listener": null, "oauth_device_id": null, "request_proof": null, "request_proof_provider": null}, ["profile", "tokens", "token_listener", "oauth_device_id", "request_proof", "request_proof_provider"], null, null);
if ($.truth($.and(() => ((request_proof !== null)), () => ((request_proof_provider !== null))))) {
throw $.call($.ValueError, ["request_proof cannot be combined with request_proof_provider"], null);
}
this["_session"] = adaptHttpSession(session);
this["_profile"] = profile;
this["_tokens"] = tokens;
this["_token_listener"] = token_listener;
this["_oauth_device_id"] = $.or(() => oauth_device_id, () => $.call($.str, [$.call(uuid4, [], null)], null));
this["_static_request_proof"] = request_proof;
this["_request_proof_provider"] = request_proof_provider;
this["_latest_request_proof"] = request_proof;
this["_application_token"] = null;
this["_refresh_lock"] = $.call($.attr(asyncio, "Lock"), [], null);
this["_application_token_lock"] = $.call($.attr(asyncio, "Lock"), [], null);
this["_request_proof_refresh_lock"] = $.call($.attr(asyncio, "Lock"), [], null);
}
/** Return the currently active token set, if authenticated. */
get tokens(): Tokens | null {
/** Return the currently active token set, if authenticated. */
return $.attr(this, "_tokens");
}
/** Return the device identifier used to build mobile OAuth scopes. */
get oauth_device_id(): string {
/** Return the device identifier used to build mobile OAuth scopes. */
return $.attr(this, "_oauth_device_id");
}
async_authenticate(email: string, password: string): Promise<Tokens>;
/** Authenticate with MyNISSAN credentials. */
async async_authenticate(...__args: any[]): any {
let {"email": email, "password": password} = $.bind(__args, ["email", "password"], {}, [], null, null);
/** Authenticate with MyNISSAN credentials. */
return (await $.call($.attr(this, "_async_request_tokens"), [Object.assign({}, {["username"]: ($.str($.attr($.attr(this, "_profile"), "account_namespace")) + "/" + $.str($.call($.attr($.call($.attr(email, "strip"), [], null), "lower"), [], null)))}, {["password"]: password}, {["scope"]: $.attr(this, "_oauth_scope")}, {["grant_type"]: "password"})], null));
}
async_refresh_tokens(options?: { expired_access_token?: string | null }): Promise<Tokens>;
/** Refresh the current token set, coalescing concurrent refresh attempts. */
async async_refresh_tokens(...__args: any[]): any {
let current;
let {"expired_access_token": expired_access_token} = $.bind(__args, [], {"expired_access_token": null}, ["expired_access_token"], null, null);
/** Refresh the current token set, coalescing concurrent refresh attempts. */
return await $.locked($.attr(this, "_refresh_lock"), async () => {
current = $.call($.attr(this, "_require_tokens"), [], null);
if ($.truth($.and(() => ((expired_access_token !== null)), () => (!$.eq($.attr(current, "access_token"), expired_access_token))))) {
return current;
}
return (await $.call($.attr(this, "_async_request_tokens"), [Object.assign({}, {["refresh_token"]: $.attr(current, "refresh_token")}, {["grant_type"]: "refresh_token"})], Object.assign({}, {"previous": current})));
});
}
async_graphql(operation_name: string, document: string, variables: Record<string, unknown>, options?: { extra_headers?: Record<string, string> | null }): Promise<Record<string, unknown>>;
/** Execute one authenticated GraphQL operation. */
async async_graphql(...__args: any[]): any {
let payload, refreshed_proof, request_proof, status, tokens;
let {"operation_name": operation_name, "document": document, "variables": variables, "extra_headers": extra_headers} = $.bind(__args, ["operation_name", "document", "variables"], {"extra_headers": null}, ["extra_headers"], null, null);
/** Execute one authenticated GraphQL operation. */
tokens = $.call($.attr(this, "_require_tokens"), [], null);
if ($.truth($.call(_tokens_have_expired_jwt, [tokens], null))) {
tokens = (await $.call($.attr(this, "async_refresh_tokens"), [], Object.assign({}, {"expired_access_token": $.attr(tokens, "access_token")})));
}
request_proof = (await $.call($.attr(this, "_async_get_request_proof"), [], Object.assign({}, {"force_refresh": false})));
[status, payload] = (await $.call($.attr(this, "_async_graphql_request"), [operation_name, document, variables], Object.assign({}, {"access_token": $.attr(tokens, "access_token")}, {"id_token": $.attr(tokens, "id_token")}, {"request_proof": request_proof}, {"apollo_client_name": $.attr($.attr(this, "_profile"), "apollo_client_name")}, {"apollo_client_version": $.attr($.attr(this, "_profile"), "app_version")}, {"extra_headers": extra_headers})));
if ($.truth($.or(() => ($.eq(status, 401)), () => $.and(() => ($.eq(status, 403)), () => $.call(_tokens_have_expired_jwt, [tokens], null))))) {
tokens = (await $.call($.attr(this, "async_refresh_tokens"), [], Object.assign({}, {"expired_access_token": $.attr(tokens, "access_token")})));
[status, payload] = (await $.call($.attr(this, "_async_graphql_request"), [operation_name, document, variables], Object.assign({}, {"access_token": $.attr(tokens, "access_token")}, {"id_token": $.attr(tokens, "id_token")}, {"request_proof": request_proof}, {"apollo_client_name": $.attr($.attr(this, "_profile"), "apollo_client_name")}, {"apollo_client_version": $.attr($.attr(this, "_profile"), "app_version")}, {"extra_headers": extra_headers})));
}
if ($.truth($.and(() => ($.eq(status, 403)), () => (($.attr(this, "_request_proof_provider") !== null))))) {
refreshed_proof = (await $.call($.attr(this, "_async_refresh_request_proof"), [request_proof], null));
if ($.truth((!$.eq(refreshed_proof, request_proof)))) {
[status, payload] = (await $.call($.attr(this, "_async_graphql_request"), [operation_name, document, variables], Object.assign({}, {"access_token": $.attr(tokens, "access_token")}, {"id_token": $.attr(tokens, "id_token")}, {"request_proof": refreshed_proof}, {"apollo_client_name": $.attr($.attr(this, "_profile"), "apollo_client_name")}, {"apollo_client_version": $.attr($.attr(this, "_profile"), "app_version")}, {"extra_headers": extra_headers})));
}
}
return $.call(_extract_graphql_data, [status, payload], null);
}
async_application_graphql(operation_name: string, document: string, variables: Record<string, unknown>): Promise<Record<string, unknown>>;
/** Execute one request requiring proof before account authentication. */
async async_application_graphql(...__args: any[]): any {
let payload, refreshed_proof, request_proof, status, token;
let {"operation_name": operation_name, "document": document, "variables": variables} = $.bind(__args, ["operation_name", "document", "variables"], {}, [], null, null);
/** Execute one request requiring proof before account authentication. */
request_proof = (await $.call($.attr(this, "_async_get_request_proof"), [], Object.assign({}, {"force_refresh": false})));
if ($.truth(((request_proof === null)))) {
throw $.call(AuthenticationError, [403, "This operation requires request proof"], null);
}
token = (await $.call($.attr(this, "_async_get_application_token"), [], null));
[status, payload] = (await $.call($.attr(this, "_async_application_graphql_request"), [operation_name, document, variables, token, request_proof], null));
if ($.truth($.or(() => ($.eq(status, 401)), () => $.and(() => ($.eq(status, 403)), () => $.call(_jwt_is_expired, [$.attr(token, "access_token")], null))))) {
token = (await $.call($.attr(this, "_async_get_application_token"), [], Object.assign({}, {"force_refresh": true}, {"rejected_access_token": $.attr(token, "access_token")})));
[status, payload] = (await $.call($.attr(this, "_async_application_graphql_request"), [operation_name, document, variables, token, request_proof], null));
}
if ($.truth($.and(() => ($.eq(status, 403)), () => (($.attr(this, "_request_proof_provider") !== null))))) {
refreshed_proof = (await $.call($.attr(this, "_async_refresh_request_proof"), [request_proof], null));
if ($.truth((!$.eq(refreshed_proof, request_proof)))) {
[status, payload] = (await $.call($.attr(this, "_async_application_graphql_request"), [operation_name, document, variables, token, refreshed_proof], null));
}
}
return $.call(_extract_graphql_data, [status, payload], null);
}
_async_get_application_token(options?: { force_refresh?: boolean; rejected_access_token?: string | null }): Promise<_ApplicationToken>;
/** Translated upstream _async_get_application_token. */
async _async_get_application_token(...__args: any[]): any {
let access_token, current, payload, status, token;
let {"force_refresh": force_refresh, "rejected_access_token": rejected_access_token} = $.bind(__args, [], {"force_refresh": false, "rejected_access_token": null}, ["force_refresh", "rejected_access_token"], null, null);
return await $.locked($.attr(this, "_application_token_lock"), async () => {
current = $.attr(this, "_application_token");
if ($.truth($.and(() => ((current !== null)), () => ((rejected_access_token !== null)), () => (!$.eq($.attr(current, "access_token"), rejected_access_token))))) {
return current;
}
if ($.truth($.and(() => ((current !== null)), () => !$.truth(force_refresh), () => !$.truth($.call(_jwt_is_expired, [$.attr(current, "access_token")], null))))) {
return current;
}
[status, payload] = (await $.call($.attr(this, "_async_post_json"), [$.attr($.attr(this, "_profile"), "token_endpoint")], Object.assign({}, {"data": Object.assign({}, {["client_id"]: $.attr($.attr(this, "_profile"), "application_client_id")}, {["client_secret"]: $.attr($.attr(this, "_profile"), "application_client_secret")}, {["scope"]: $.attr(this, "_application_oauth_scope")}, {["grant_type"]: "client_credentials"})})));
if ($.truth($.or(() => ((status < 200)), () => ((status >= 300))))) {
throw $.call(AuthenticationError, [status, $.call(_error_message, [payload, "MyNISSAN application authentication failed"], null)], null);
}
access_token = $.call($.attr(payload, "get"), ["access_token"], null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [access_token, $.str], null)), () => !$.truth(access_token)))) {
throw $.call(ResponseError, ["Application token response does not contain an access token"], null);
}
token = $.call(_ApplicationToken, [access_token], null);
this["_application_token"] = token;
return token;
});
}
_async_application_graphql_request(operation_name: string, document: string, variables: Record<string, unknown>, token: _ApplicationToken, request_proof: RequestProof): Promise<readonly [number, JsonObject]>;
/** Translated upstream _async_application_graphql_request. */
async _async_application_graphql_request(...__args: any[]): any {
let {"operation_name": operation_name, "document": document, "variables": variables, "token": token, "request_proof": request_proof} = $.bind(__args, ["operation_name", "document", "variables", "token", "request_proof"], {}, [], null, null);
return (await $.call($.attr(this, "_async_graphql_request"), [operation_name, document, variables], Object.assign({}, {"access_token": $.attr(token, "access_token")}, {"id_token": null}, {"request_proof": request_proof}, {"apollo_client_name": $.attr($.attr(this, "_profile"), "application_apollo_client_name")}, {"apollo_client_version": $.attr($.attr(this, "_profile"), "application_app_version")}, {"extra_headers": null})));
}
_async_request_tokens(form: Record<string, string>, options?: { previous?: Tokens | null }): Promise<Tokens>;
/** Translated upstream _async_request_tokens. */
async _async_request_tokens(...__args: any[]): any {
let access_token, credentials, headers, id_token, payload, refresh_token, status, tokens;
let {"form": form, "previous": previous} = $.bind(__args, ["form"], {"previous": null}, ["previous"], null, null);
credentials = $.call($.attr(($.str($.attr($.attr(this, "_profile"), "client_id")) + ":" + $.str($.attr($.attr(this, "_profile"), "client_secret"))), "encode"), [], null);
headers = Object.assign({}, {["Authorization"]: ("Basic " + $.str($.call($.attr($.call($.attr(base64, "b64encode"), [credentials], null), "decode"), [], null)))});
[status, payload] = (await $.call($.attr(this, "_async_post_json"), [$.attr($.attr(this, "_profile"), "token_endpoint")], Object.assign({}, {"data": form}, {"headers": headers})));
if ($.truth($.or(() => ((status < 200)), () => ((status >= 300))))) {
throw $.call(AuthenticationError, [status, $.call(_error_message, [payload, "MyNISSAN authentication failed"], null)], null);
}
access_token = $.call($.attr(payload, "get"), ["access_token"], null);
refresh_token = $.call($.attr(payload, "get"), ["refresh_token"], null);
id_token = $.call($.attr(payload, "get"), ["id_token"], null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [access_token, $.str], null)), () => !$.truth(access_token)))) {
throw $.call(ResponseError, ["Token response does not contain an access token"], null);
}
if ($.truth($.or(() => !$.truth($.call($.isinstance, [refresh_token, $.str], null)), () => !$.truth(refresh_token)))) {
refresh_token = ($.truth(((previous !== null))) ? $.attr(previous, "refresh_token") : null);
}
if ($.truth($.or(() => !$.truth($.call($.isinstance, [id_token, $.str], null)), () => !$.truth(id_token)))) {
id_token = ($.truth(((previous !== null))) ? $.attr(previous, "id_token") : null);
}
if ($.truth(((refresh_token === null)))) {
throw $.call(ResponseError, ["Token response does not contain reusable Nissan tokens"], null);
}
tokens = $.call(Tokens, [], Object.assign({}, {"access_token": access_token}, {"refresh_token": refresh_token}, {"id_token": id_token}));
this["_tokens"] = tokens;
(await $.call($.attr(this, "_async_publish_tokens"), [tokens], null));
return tokens;
}
_async_graphql_request(operation_name: string, document: string, variables: Record<string, unknown>, options: { access_token: string; id_token: string | null; request_proof: RequestProof | null; apollo_client_name: string; apollo_client_version: string; extra_headers: Record<string, string> | null }): Promise<readonly [number, JsonObject]>;
/** Translated upstream _async_graphql_request. */
async _async_graphql_request(...__args: any[]): any {
let headers;
let {"operation_name": operation_name, "document": document, "variables": variables, "access_token": access_token, "id_token": id_token, "request_proof": request_proof, "apollo_client_name": apollo_client_name, "apollo_client_version": apollo_client_version, "extra_headers": extra_headers} = $.bind(__args, ["operation_name", "document", "variables"], {}, ["access_token", "id_token", "request_proof", "apollo_client_name", "apollo_client_version", "extra_headers"], null, null);
headers = $.call($.dict, [$.or(() => extra_headers, () => {})], null);
$.call($.attr(headers, "update"), [Object.assign({}, {["Authorization"]: ("Bearer " + $.str(access_token))}, {["User-Agent"]: $.attr($.attr(this, "_profile"), "user_agent")}, {["Brand"]: $.attr($.attr(this, "_profile"), "brand")}, {["Country"]: $.attr($.attr(this, "_profile"), "country")}, {["Accept-Language"]: $.attr($.attr(this, "_profile"), "accept_language")}, {["x-correlation-id"]: $.call($.str, [$.call(uuid4, [], null)], null)}, {["apollographql-client-name"]: apollo_client_name}, {["apollographql-client-version"]: apollo_client_version})], null);
if ($.truth(((id_token !== null)))) {
headers["id-token"] = id_token;
}
if ($.truth(((request_proof !== null)))) {
headers["X-API-Attestation"] = $.attr(request_proof, "api_attestation");
headers["X-Device-Status"] = $.attr(request_proof, "device_status");
}
return (await $.call($.attr(this, "_async_post_json"), [$.attr($.attr(this, "_profile"), "graphql_endpoint")], Object.assign({}, {"json": Object.assign({}, {["operationName"]: operation_name}, {["query"]: document}, {["variables"]: $.call($.dict, [variables], null)})}, {"headers": headers})));
}
_async_get_request_proof(options: { force_refresh: boolean }): Promise<RequestProof | null>;
/** Translated upstream _async_get_request_proof. */
async _async_get_request_proof(...__args: any[]): any {
let provider, request_proof;
let {"force_refresh": force_refresh} = $.bind(__args, [], {}, ["force_refresh"], null, null);
provider = $.attr(this, "_request_proof_provider");
if ($.truth(((provider === null)))) {
return $.attr(this, "_static_request_proof");
}
request_proof = (await $.call(provider, [force_refresh], null));
this["_latest_request_proof"] = request_proof;
return request_proof;
}
_async_refresh_request_proof(rejected_proof: RequestProof | null): Promise<RequestProof>;
/** Translated upstream _async_refresh_request_proof. */
async _async_refresh_request_proof(...__args: any[]): any {
let provider, request_proof;
let {"rejected_proof": rejected_proof} = $.bind(__args, ["rejected_proof"], {}, [], null, null);
provider = $.attr(this, "_request_proof_provider");
if ($.truth(((provider === null)))) {
throw $.call($.RuntimeError, ["Request proof refresh requires a provider"], null);
}
return await $.locked($.attr(this, "_request_proof_refresh_lock"), async () => {
if ($.truth($.and(() => (($.attr(this, "_latest_request_proof") !== null)), () => (!$.eq($.attr(this, "_latest_request_proof"), rejected_proof))))) {
return $.attr(this, "_latest_request_proof");
}
request_proof = (await $.call(provider, [true], null));
this["_latest_request_proof"] = request_proof;
return request_proof;
});
}
_async_post_json(url: string, options?: { data?: Record<string, string> | null; json?: Record<string, unknown> | null; headers?: Record<string, string> | null }): Promise<readonly [number, JsonObject]>;
/** Translated upstream _async_post_json. */
async _async_post_json(...__args: any[]): any {
let payload, request_headers, response, status;
let {"url": url, "data": data, "json": json, "headers": headers} = $.bind(__args, ["url"], {"data": null, "json": null, "headers": null}, ["data", "json", "headers"], null, null);
request_headers = Object.assign({}, {["User-Agent"]: $.attr($.attr(this, "_profile"), "user_agent")});
if ($.truth(((headers !== null)))) {
$.call($.attr(request_headers, "update"), [headers], null);
}
try {
{ const response = await $.call($.attr($.attr(this, "_session"), "post"), [url], Object.assign({}, {"data": data}, {"json": json}, {"headers": request_headers}, {"timeout": $.call(ClientTimeout, [], Object.assign({}, {"total": $.attr($.attr(this, "_profile"), "request_timeout_seconds")}))}));
status = $.attr(response, "status");
try {
payload = (await $.call($.attr(response, "json"), [], Object.assign({}, {"content_type": null})));
} catch (__error) {
if ($.isinstance(__error, $.TypeError) || $.isinstance(__error, $.ValueError)) { let error = __error; throw $.call(ResponseError, [("Nissan returned a non-JSON response with HTTP " + $.str(status))], null); } else { throw __error; }
}
}
} catch (__error) {
if ($.isinstance(__error, $.TimeoutError) || $.isinstance(__error, ClientError)) { let error = __error; throw $.call(NetworkError, ["Unable to reach the Nissan service"], null); } else { throw __error; }
}
if ($.truth(!$.truth($.call($.isinstance, [payload, $.dict], null)))) {
throw $.call(ResponseError, ["Nissan returned a non-object JSON response"], null);
}
return [status, payload];
}
_async_publish_tokens(tokens: Tokens): Promise<null>;
/** Translated upstream _async_publish_tokens. */
async _async_publish_tokens(...__args: any[]): any {
let result;
let {"tokens": tokens} = $.bind(__args, ["tokens"], {}, [], null, null);
if ($.truth((($.attr(this, "_token_listener") === null)))) {
return null;
}
result = $.call($.attr(this, "_token_listener"), [tokens], null);
if ($.truth($.call($.attr(inspect, "isawaitable"), [result], null))) {
(await result);
}
}
_require_tokens(): Tokens;
/** Translated upstream _require_tokens. */
_require_tokens(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
if ($.truth((($.attr(this, "_tokens") === null)))) {
throw $.call(AuthenticationError, [401, "The client is not authenticated"], null);
}
return $.attr(this, "_tokens");
}
/** Translated upstream _oauth_scope. */
get _oauth_scope(): string {
return $.call($.attr($.attr($.attr(this, "_profile"), "oauth_scope"), "format"), [], Object.assign({}, {"device_id": $.attr(this, "_oauth_device_id")}));
}
/** Translated upstream _application_oauth_scope. */
get _application_oauth_scope(): string {
return $.call($.attr($.attr($.attr(this, "_profile"), "application_oauth_scope"), "format"), [], Object.assign({}, {"device_id": $.attr(this, "_oauth_device_id")}));
}
}
$.classType(_NissanTransport);

export function _error_message(payload: Record<string, unknown>, fallback: string): string;
/** Translated upstream _error_message. */
export function _error_message(...__args: any[]): any {
let key, value;
let {"payload": payload, "fallback": fallback} = $.bind(__args, ["payload", "fallback"], {}, [], null, null);
for (key of $.iterable(["error_description", "message", "error"])) {
value = $.call($.attr(payload, "get"), [key], null);
if ($.truth($.and(() => $.call($.isinstance, [value, $.str], null), () => value))) {
return value;
}
}
return fallback;
}

export function _extract_graphql_data(status: number, payload: Record<string, unknown>): Record<string, unknown>;
/** Translated upstream _extract_graphql_data. */
export function _extract_graphql_data(...__args: any[]): any {
let data, error, errors, messages, value;
let {"status": status, "payload": payload} = $.bind(__args, ["status", "payload"], {}, [], null, null);
if ($.truth($.or(() => ((status < 200)), () => ((status >= 300))))) {
throw $.call(ApiError, [status, $.call(_error_message, [payload, "Nissan API request failed"], null)], null);
}
data = $.call($.attr(payload, "get"), ["data"], null);
errors = $.call($.attr(payload, "get"), ["errors"], null);
if ($.truth($.and(() => $.call($.isinstance, [errors, $.list], null), () => errors, () => $.or(() => !$.truth($.call($.isinstance, [data, Mapping], null)), () => !$.truth($.call($.any, [(() => { const __out: any = []; for (const value of $.iterable($.call($.attr(data, "values"), [], null))) { __out.push(((value !== null))); } return __out; })()], null)))))) {
messages = $.call($.tuple, [(() => { const __out: any = []; for (const error of $.iterable(errors)) { if ($.truth($.call($.isinstance, [error, Mapping], null))) { __out.push($.call($.str, [$.call($.attr(error, "get"), ["message", "Unknown GraphQL error"], null)], null)); } } return __out; })()], null);
throw $.call(GraphQLError, [$.or(() => messages, () => ["Unknown GraphQL error"])], null);
}
if ($.truth(!$.truth($.call($.isinstance, [data, Mapping], null)))) {
throw $.call(ResponseError, ["GraphQL response does not contain an object data field"], null);
}
return data;
}

export function _jwt_is_expired(token: string, options?: { leeway_seconds?: number }): boolean;
/** Translated upstream _jwt_is_expired. */
export function _jwt_is_expired(...__args: any[]): any {
let encoded_payload, expires_at, payload;
let {"token": token, "leeway_seconds": leeway_seconds} = $.bind(__args, ["token"], {"leeway_seconds": 30}, ["leeway_seconds"], null, null);
try {
encoded_payload = $.get($.call($.attr(token, "split"), ["."], null), 1);
encoded_payload = $.add(encoded_payload, $.mul("=", $.mod(-($.call($.len, [encoded_payload], null)), 4)));
payload = $.call($.attr(json, "loads"), [$.call($.attr(base64, "urlsafe_b64decode"), [encoded_payload], null)], null);
expires_at = $.call($.attr(payload, "get"), ["exp"], null);
} catch (__error) {
if ($.isinstance(__error, $.IndexError) || $.isinstance(__error, $.ValueError) || $.isinstance(__error, $.TypeError) || $.isinstance(__error, $.attr(json, "JSONDecodeError"))) { return false; } else { throw __error; }
}
return $.and(() => $.call($.isinstance, [expires_at, $.int], null), () => !$.truth($.call($.isinstance, [expires_at, $.bool], null)), () => ((expires_at <= $.add($.call($.attr(time, "time"), [], null), leeway_seconds))));
}

export function _tokens_have_expired_jwt(tokens: Tokens): boolean;
/** Translated upstream _tokens_have_expired_jwt. */
export function _tokens_have_expired_jwt(...__args: any[]): any {
let {"tokens": tokens} = $.bind(__args, ["tokens"], {}, [], null, null);
return $.or(() => $.call(_jwt_is_expired, [$.attr(tokens, "access_token")], null), () => $.and(() => (($.attr(tokens, "id_token") !== null)), () => $.call(_jwt_is_expired, [$.attr(tokens, "id_token")], null)));
}
