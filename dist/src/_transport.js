"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports._NissanTransport = exports._ApplicationToken = exports.RequestProof = exports.Tokens = exports.ResponseError = exports.NetworkError = exports.GraphQLError = exports.AuthenticationError = exports.ApiError = exports._CountryProfile = void 0;
exports._error_message = _error_message;
exports._extract_graphql_data = _extract_graphql_data;
exports._jwt_is_expired = _jwt_is_expired;
exports._tokens_have_expired_jwt = _tokens_have_expired_jwt;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const http_1 = require("./http");
const asyncio = _runtime_1.py.asyncio;
const base64 = _runtime_1.py.base64;
const inspect = _runtime_1.py.inspect;
const json = _runtime_1.py.json;
const time = _runtime_1.py.time;
const Mapping = _runtime_1.py.Mapping;
const dataclass = _runtime_1.py.dataclass;
const cast = _runtime_1.py.cast;
const uuid4 = _runtime_1.py.uuid4;
const ClientError = _runtime_1.py.ClientError;
const ClientSession = _runtime_1.py.ClientSession;
const ClientTimeout = _runtime_1.py.ClientTimeout;
const _profile_1 = require("./_profile");
Object.defineProperty(exports, "_CountryProfile", { enumerable: true, get: function () { return _profile_1._CountryProfile; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return exceptions_1.ApiError; } });
Object.defineProperty(exports, "AuthenticationError", { enumerable: true, get: function () { return exceptions_1.AuthenticationError; } });
Object.defineProperty(exports, "GraphQLError", { enumerable: true, get: function () { return exceptions_1.GraphQLError; } });
Object.defineProperty(exports, "NetworkError", { enumerable: true, get: function () { return exceptions_1.NetworkError; } });
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "Tokens", { enumerable: true, get: function () { return models_1.Tokens; } });
const request_proof_1 = require("./request_proof");
Object.defineProperty(exports, "RequestProof", { enumerable: true, get: function () { return request_proof_1.RequestProof; } });
/** Translated upstream _ApplicationToken. */
class _ApplicationToken {
    access_token;
    static __fields = [["access_token", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, _ApplicationToken, __args); Object.freeze(this); }
}
exports._ApplicationToken = _ApplicationToken;
_runtime_1.py.classType(_ApplicationToken);
/** OAuth and GraphQL transport using a caller-owned aiohttp session. */
class _NissanTransport {
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _NissanTransport, __args); }
    /** Translated upstream __init__. */
    __init__(...__args) {
        let { "session": session, "profile": profile, "tokens": tokens, "token_listener": token_listener, "oauth_device_id": oauth_device_id, "request_proof": request_proof, "request_proof_provider": request_proof_provider } = _runtime_1.py.bind(__args, ["session"], { "tokens": null, "token_listener": null, "oauth_device_id": null, "request_proof": null, "request_proof_provider": null }, ["profile", "tokens", "token_listener", "oauth_device_id", "request_proof", "request_proof_provider"], null, null);
        if (_runtime_1.py.truth(_runtime_1.py.and(() => ((request_proof !== null)), () => ((request_proof_provider !== null))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["request_proof cannot be combined with request_proof_provider"], null);
        }
        this["_session"] = (0, http_1.adaptHttpSession)(session);
        this["_profile"] = profile;
        this["_tokens"] = tokens;
        this["_token_listener"] = token_listener;
        this["_oauth_device_id"] = _runtime_1.py.or(() => oauth_device_id, () => _runtime_1.py.call(_runtime_1.py.str, [_runtime_1.py.call(uuid4, [], null)], null));
        this["_static_request_proof"] = request_proof;
        this["_request_proof_provider"] = request_proof_provider;
        this["_latest_request_proof"] = request_proof;
        this["_application_token"] = null;
        this["_refresh_lock"] = _runtime_1.py.call(_runtime_1.py.attr(asyncio, "Lock"), [], null);
        this["_application_token_lock"] = _runtime_1.py.call(_runtime_1.py.attr(asyncio, "Lock"), [], null);
        this["_request_proof_refresh_lock"] = _runtime_1.py.call(_runtime_1.py.attr(asyncio, "Lock"), [], null);
    }
    /** Return the currently active token set, if authenticated. */
    get tokens() {
        /** Return the currently active token set, if authenticated. */
        return _runtime_1.py.attr(this, "_tokens");
    }
    /** Return the device identifier used to build mobile OAuth scopes. */
    get oauth_device_id() {
        /** Return the device identifier used to build mobile OAuth scopes. */
        return _runtime_1.py.attr(this, "_oauth_device_id");
    }
    /** Authenticate with MyNISSAN credentials. */
    async async_authenticate(...__args) {
        let { "email": email, "password": password } = _runtime_1.py.bind(__args, ["email", "password"], {}, [], null, null);
        /** Authenticate with MyNISSAN credentials. */
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_request_tokens"), [Object.assign({}, { ["username"]: (_runtime_1.py.str(_runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "account_namespace")) + "/" + _runtime_1.py.str(_runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.call(_runtime_1.py.attr(email, "strip"), [], null), "lower"), [], null))) }, { ["password"]: password }, { ["scope"]: _runtime_1.py.attr(this, "_oauth_scope") }, { ["grant_type"]: "password" })], null));
    }
    /** Refresh the current token set, coalescing concurrent refresh attempts. */
    async async_refresh_tokens(...__args) {
        let current;
        let { "expired_access_token": expired_access_token } = _runtime_1.py.bind(__args, [], { "expired_access_token": null }, ["expired_access_token"], null, null);
        /** Refresh the current token set, coalescing concurrent refresh attempts. */
        return await _runtime_1.py.locked(_runtime_1.py.attr(this, "_refresh_lock"), async () => {
            current = _runtime_1.py.call(_runtime_1.py.attr(this, "_require_tokens"), [], null);
            if (_runtime_1.py.truth(_runtime_1.py.and(() => ((expired_access_token !== null)), () => (!_runtime_1.py.eq(_runtime_1.py.attr(current, "access_token"), expired_access_token))))) {
                return current;
            }
            return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_request_tokens"), [Object.assign({}, { ["refresh_token"]: _runtime_1.py.attr(current, "refresh_token") }, { ["grant_type"]: "refresh_token" })], Object.assign({}, { "previous": current })));
        });
    }
    /** Execute one authenticated GraphQL operation. */
    async async_graphql(...__args) {
        let payload, refreshed_proof, request_proof, status, tokens;
        let { "operation_name": operation_name, "document": document, "variables": variables, "extra_headers": extra_headers } = _runtime_1.py.bind(__args, ["operation_name", "document", "variables"], { "extra_headers": null }, ["extra_headers"], null, null);
        /** Execute one authenticated GraphQL operation. */
        tokens = _runtime_1.py.call(_runtime_1.py.attr(this, "_require_tokens"), [], null);
        if (_runtime_1.py.truth(_runtime_1.py.call(_tokens_have_expired_jwt, [tokens], null))) {
            tokens = (await _runtime_1.py.call(_runtime_1.py.attr(this, "async_refresh_tokens"), [], Object.assign({}, { "expired_access_token": _runtime_1.py.attr(tokens, "access_token") })));
        }
        request_proof = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_get_request_proof"), [], Object.assign({}, { "force_refresh": false })));
        [status, payload] = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_graphql_request"), [operation_name, document, variables], Object.assign({}, { "access_token": _runtime_1.py.attr(tokens, "access_token") }, { "id_token": _runtime_1.py.attr(tokens, "id_token") }, { "request_proof": request_proof }, { "apollo_client_name": _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "apollo_client_name") }, { "apollo_client_version": _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "app_version") }, { "extra_headers": extra_headers })));
        if (_runtime_1.py.truth(_runtime_1.py.or(() => (_runtime_1.py.eq(status, 401)), () => _runtime_1.py.and(() => (_runtime_1.py.eq(status, 403)), () => _runtime_1.py.call(_tokens_have_expired_jwt, [tokens], null))))) {
            tokens = (await _runtime_1.py.call(_runtime_1.py.attr(this, "async_refresh_tokens"), [], Object.assign({}, { "expired_access_token": _runtime_1.py.attr(tokens, "access_token") })));
            [status, payload] = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_graphql_request"), [operation_name, document, variables], Object.assign({}, { "access_token": _runtime_1.py.attr(tokens, "access_token") }, { "id_token": _runtime_1.py.attr(tokens, "id_token") }, { "request_proof": request_proof }, { "apollo_client_name": _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "apollo_client_name") }, { "apollo_client_version": _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "app_version") }, { "extra_headers": extra_headers })));
        }
        if (_runtime_1.py.truth(_runtime_1.py.and(() => (_runtime_1.py.eq(status, 403)), () => ((_runtime_1.py.attr(this, "_request_proof_provider") !== null))))) {
            refreshed_proof = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_refresh_request_proof"), [request_proof], null));
            if (_runtime_1.py.truth((!_runtime_1.py.eq(refreshed_proof, request_proof)))) {
                [status, payload] = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_graphql_request"), [operation_name, document, variables], Object.assign({}, { "access_token": _runtime_1.py.attr(tokens, "access_token") }, { "id_token": _runtime_1.py.attr(tokens, "id_token") }, { "request_proof": refreshed_proof }, { "apollo_client_name": _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "apollo_client_name") }, { "apollo_client_version": _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "app_version") }, { "extra_headers": extra_headers })));
            }
        }
        return _runtime_1.py.call(_extract_graphql_data, [status, payload], null);
    }
    /** Execute one request requiring proof before account authentication. */
    async async_application_graphql(...__args) {
        let payload, refreshed_proof, request_proof, status, token;
        let { "operation_name": operation_name, "document": document, "variables": variables } = _runtime_1.py.bind(__args, ["operation_name", "document", "variables"], {}, [], null, null);
        /** Execute one request requiring proof before account authentication. */
        request_proof = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_get_request_proof"), [], Object.assign({}, { "force_refresh": false })));
        if (_runtime_1.py.truth(((request_proof === null)))) {
            throw _runtime_1.py.call(exceptions_1.AuthenticationError, [403, "This operation requires request proof"], null);
        }
        token = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_get_application_token"), [], null));
        [status, payload] = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_application_graphql_request"), [operation_name, document, variables, token, request_proof], null));
        if (_runtime_1.py.truth(_runtime_1.py.or(() => (_runtime_1.py.eq(status, 401)), () => _runtime_1.py.and(() => (_runtime_1.py.eq(status, 403)), () => _runtime_1.py.call(_jwt_is_expired, [_runtime_1.py.attr(token, "access_token")], null))))) {
            token = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_get_application_token"), [], Object.assign({}, { "force_refresh": true }, { "rejected_access_token": _runtime_1.py.attr(token, "access_token") })));
            [status, payload] = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_application_graphql_request"), [operation_name, document, variables, token, request_proof], null));
        }
        if (_runtime_1.py.truth(_runtime_1.py.and(() => (_runtime_1.py.eq(status, 403)), () => ((_runtime_1.py.attr(this, "_request_proof_provider") !== null))))) {
            refreshed_proof = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_refresh_request_proof"), [request_proof], null));
            if (_runtime_1.py.truth((!_runtime_1.py.eq(refreshed_proof, request_proof)))) {
                [status, payload] = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_application_graphql_request"), [operation_name, document, variables, token, refreshed_proof], null));
            }
        }
        return _runtime_1.py.call(_extract_graphql_data, [status, payload], null);
    }
    /** Translated upstream _async_get_application_token. */
    async _async_get_application_token(...__args) {
        let access_token, current, payload, status, token;
        let { "force_refresh": force_refresh, "rejected_access_token": rejected_access_token } = _runtime_1.py.bind(__args, [], { "force_refresh": false, "rejected_access_token": null }, ["force_refresh", "rejected_access_token"], null, null);
        return await _runtime_1.py.locked(_runtime_1.py.attr(this, "_application_token_lock"), async () => {
            current = _runtime_1.py.attr(this, "_application_token");
            if (_runtime_1.py.truth(_runtime_1.py.and(() => ((current !== null)), () => ((rejected_access_token !== null)), () => (!_runtime_1.py.eq(_runtime_1.py.attr(current, "access_token"), rejected_access_token))))) {
                return current;
            }
            if (_runtime_1.py.truth(_runtime_1.py.and(() => ((current !== null)), () => !_runtime_1.py.truth(force_refresh), () => !_runtime_1.py.truth(_runtime_1.py.call(_jwt_is_expired, [_runtime_1.py.attr(current, "access_token")], null))))) {
                return current;
            }
            [status, payload] = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_post_json"), [_runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "token_endpoint")], Object.assign({}, { "data": Object.assign({}, { ["client_id"]: _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "application_client_id") }, { ["client_secret"]: _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "application_client_secret") }, { ["scope"]: _runtime_1.py.attr(this, "_application_oauth_scope") }, { ["grant_type"]: "client_credentials" }) })));
            if (_runtime_1.py.truth(_runtime_1.py.or(() => ((status < 200)), () => ((status >= 300))))) {
                throw _runtime_1.py.call(exceptions_1.AuthenticationError, [status, _runtime_1.py.call(_error_message, [payload, "MyNISSAN application authentication failed"], null)], null);
            }
            access_token = _runtime_1.py.call(_runtime_1.py.attr(payload, "get"), ["access_token"], null);
            if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [access_token, _runtime_1.py.str], null)), () => !_runtime_1.py.truth(access_token)))) {
                throw _runtime_1.py.call(exceptions_1.ResponseError, ["Application token response does not contain an access token"], null);
            }
            token = _runtime_1.py.call(_ApplicationToken, [access_token], null);
            this["_application_token"] = token;
            return token;
        });
    }
    /** Translated upstream _async_application_graphql_request. */
    async _async_application_graphql_request(...__args) {
        let { "operation_name": operation_name, "document": document, "variables": variables, "token": token, "request_proof": request_proof } = _runtime_1.py.bind(__args, ["operation_name", "document", "variables", "token", "request_proof"], {}, [], null, null);
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_graphql_request"), [operation_name, document, variables], Object.assign({}, { "access_token": _runtime_1.py.attr(token, "access_token") }, { "id_token": null }, { "request_proof": request_proof }, { "apollo_client_name": _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "application_apollo_client_name") }, { "apollo_client_version": _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "application_app_version") }, { "extra_headers": null })));
    }
    /** Translated upstream _async_request_tokens. */
    async _async_request_tokens(...__args) {
        let access_token, credentials, headers, id_token, payload, refresh_token, status, tokens;
        let { "form": form, "previous": previous } = _runtime_1.py.bind(__args, ["form"], { "previous": null }, ["previous"], null, null);
        credentials = _runtime_1.py.call(_runtime_1.py.attr((_runtime_1.py.str(_runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "client_id")) + ":" + _runtime_1.py.str(_runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "client_secret"))), "encode"), [], null);
        headers = Object.assign({}, { ["Authorization"]: ("Basic " + _runtime_1.py.str(_runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.call(_runtime_1.py.attr(base64, "b64encode"), [credentials], null), "decode"), [], null))) });
        [status, payload] = (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_post_json"), [_runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "token_endpoint")], Object.assign({}, { "data": form }, { "headers": headers })));
        if (_runtime_1.py.truth(_runtime_1.py.or(() => ((status < 200)), () => ((status >= 300))))) {
            throw _runtime_1.py.call(exceptions_1.AuthenticationError, [status, _runtime_1.py.call(_error_message, [payload, "MyNISSAN authentication failed"], null)], null);
        }
        access_token = _runtime_1.py.call(_runtime_1.py.attr(payload, "get"), ["access_token"], null);
        refresh_token = _runtime_1.py.call(_runtime_1.py.attr(payload, "get"), ["refresh_token"], null);
        id_token = _runtime_1.py.call(_runtime_1.py.attr(payload, "get"), ["id_token"], null);
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [access_token, _runtime_1.py.str], null)), () => !_runtime_1.py.truth(access_token)))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, ["Token response does not contain an access token"], null);
        }
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [refresh_token, _runtime_1.py.str], null)), () => !_runtime_1.py.truth(refresh_token)))) {
            refresh_token = (_runtime_1.py.truth(((previous !== null))) ? _runtime_1.py.attr(previous, "refresh_token") : null);
        }
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [id_token, _runtime_1.py.str], null)), () => !_runtime_1.py.truth(id_token)))) {
            id_token = (_runtime_1.py.truth(((previous !== null))) ? _runtime_1.py.attr(previous, "id_token") : null);
        }
        if (_runtime_1.py.truth(((refresh_token === null)))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, ["Token response does not contain reusable Nissan tokens"], null);
        }
        tokens = _runtime_1.py.call(models_1.Tokens, [], Object.assign({}, { "access_token": access_token }, { "refresh_token": refresh_token }, { "id_token": id_token }));
        this["_tokens"] = tokens;
        (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_publish_tokens"), [tokens], null));
        return tokens;
    }
    /** Translated upstream _async_graphql_request. */
    async _async_graphql_request(...__args) {
        let headers;
        let { "operation_name": operation_name, "document": document, "variables": variables, "access_token": access_token, "id_token": id_token, "request_proof": request_proof, "apollo_client_name": apollo_client_name, "apollo_client_version": apollo_client_version, "extra_headers": extra_headers } = _runtime_1.py.bind(__args, ["operation_name", "document", "variables"], {}, ["access_token", "id_token", "request_proof", "apollo_client_name", "apollo_client_version", "extra_headers"], null, null);
        headers = _runtime_1.py.call(_runtime_1.py.dict, [_runtime_1.py.or(() => extra_headers, () => { })], null);
        _runtime_1.py.call(_runtime_1.py.attr(headers, "update"), [Object.assign({}, { ["Authorization"]: ("Bearer " + _runtime_1.py.str(access_token)) }, { ["User-Agent"]: _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "user_agent") }, { ["Brand"]: _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "brand") }, { ["Country"]: _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "country") }, { ["Accept-Language"]: _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "accept_language") }, { ["x-correlation-id"]: _runtime_1.py.call(_runtime_1.py.str, [_runtime_1.py.call(uuid4, [], null)], null) }, { ["apollographql-client-name"]: apollo_client_name }, { ["apollographql-client-version"]: apollo_client_version })], null);
        if (_runtime_1.py.truth(((id_token !== null)))) {
            headers["id-token"] = id_token;
        }
        if (_runtime_1.py.truth(((request_proof !== null)))) {
            headers["X-API-Attestation"] = _runtime_1.py.attr(request_proof, "api_attestation");
            headers["X-Device-Status"] = _runtime_1.py.attr(request_proof, "device_status");
        }
        return (await _runtime_1.py.call(_runtime_1.py.attr(this, "_async_post_json"), [_runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "graphql_endpoint")], Object.assign({}, { "json": Object.assign({}, { ["operationName"]: operation_name }, { ["query"]: document }, { ["variables"]: _runtime_1.py.call(_runtime_1.py.dict, [variables], null) }) }, { "headers": headers })));
    }
    /** Translated upstream _async_get_request_proof. */
    async _async_get_request_proof(...__args) {
        let provider, request_proof;
        let { "force_refresh": force_refresh } = _runtime_1.py.bind(__args, [], {}, ["force_refresh"], null, null);
        provider = _runtime_1.py.attr(this, "_request_proof_provider");
        if (_runtime_1.py.truth(((provider === null)))) {
            return _runtime_1.py.attr(this, "_static_request_proof");
        }
        request_proof = (await _runtime_1.py.call(provider, [force_refresh], null));
        this["_latest_request_proof"] = request_proof;
        return request_proof;
    }
    /** Translated upstream _async_refresh_request_proof. */
    async _async_refresh_request_proof(...__args) {
        let provider, request_proof;
        let { "rejected_proof": rejected_proof } = _runtime_1.py.bind(__args, ["rejected_proof"], {}, [], null, null);
        provider = _runtime_1.py.attr(this, "_request_proof_provider");
        if (_runtime_1.py.truth(((provider === null)))) {
            throw _runtime_1.py.call(_runtime_1.py.RuntimeError, ["Request proof refresh requires a provider"], null);
        }
        return await _runtime_1.py.locked(_runtime_1.py.attr(this, "_request_proof_refresh_lock"), async () => {
            if (_runtime_1.py.truth(_runtime_1.py.and(() => ((_runtime_1.py.attr(this, "_latest_request_proof") !== null)), () => (!_runtime_1.py.eq(_runtime_1.py.attr(this, "_latest_request_proof"), rejected_proof))))) {
                return _runtime_1.py.attr(this, "_latest_request_proof");
            }
            request_proof = (await _runtime_1.py.call(provider, [true], null));
            this["_latest_request_proof"] = request_proof;
            return request_proof;
        });
    }
    /** Translated upstream _async_post_json. */
    async _async_post_json(...__args) {
        let payload, request_headers, response, status;
        let { "url": url, "data": data, "json": json, "headers": headers } = _runtime_1.py.bind(__args, ["url"], { "data": null, "json": null, "headers": null }, ["data", "json", "headers"], null, null);
        request_headers = Object.assign({}, { ["User-Agent"]: _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "user_agent") });
        if (_runtime_1.py.truth(((headers !== null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(request_headers, "update"), [headers], null);
        }
        try {
            {
                const response = await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_session"), "post"), [url], Object.assign({}, { "data": data }, { "json": json }, { "headers": request_headers }, { "timeout": _runtime_1.py.call(ClientTimeout, [], Object.assign({}, { "total": _runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "request_timeout_seconds") })) }));
                status = _runtime_1.py.attr(response, "status");
                try {
                    payload = (await _runtime_1.py.call(_runtime_1.py.attr(response, "json"), [], Object.assign({}, { "content_type": null })));
                }
                catch (__error) {
                    if (_runtime_1.py.isinstance(__error, _runtime_1.py.TypeError) || _runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
                        let error = __error;
                        throw _runtime_1.py.call(exceptions_1.ResponseError, [("Nissan returned a non-JSON response with HTTP " + _runtime_1.py.str(status))], null);
                    }
                    else {
                        throw __error;
                    }
                }
            }
        }
        catch (__error) {
            if (_runtime_1.py.isinstance(__error, _runtime_1.py.TimeoutError) || _runtime_1.py.isinstance(__error, ClientError)) {
                let error = __error;
                throw _runtime_1.py.call(exceptions_1.NetworkError, ["Unable to reach the Nissan service"], null);
            }
            else {
                throw __error;
            }
        }
        if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [payload, _runtime_1.py.dict], null)))) {
            throw _runtime_1.py.call(exceptions_1.ResponseError, ["Nissan returned a non-object JSON response"], null);
        }
        return [status, payload];
    }
    /** Translated upstream _async_publish_tokens. */
    async _async_publish_tokens(...__args) {
        let result;
        let { "tokens": tokens } = _runtime_1.py.bind(__args, ["tokens"], {}, [], null, null);
        if (_runtime_1.py.truth(((_runtime_1.py.attr(this, "_token_listener") === null)))) {
            return null;
        }
        result = _runtime_1.py.call(_runtime_1.py.attr(this, "_token_listener"), [tokens], null);
        if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(inspect, "isawaitable"), [result], null))) {
            (await result);
        }
    }
    /** Translated upstream _require_tokens. */
    _require_tokens(...__args) {
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        if (_runtime_1.py.truth(((_runtime_1.py.attr(this, "_tokens") === null)))) {
            throw _runtime_1.py.call(exceptions_1.AuthenticationError, [401, "The client is not authenticated"], null);
        }
        return _runtime_1.py.attr(this, "_tokens");
    }
    /** Translated upstream _oauth_scope. */
    get _oauth_scope() {
        return _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "oauth_scope"), "format"), [], Object.assign({}, { "device_id": _runtime_1.py.attr(this, "_oauth_device_id") }));
    }
    /** Translated upstream _application_oauth_scope. */
    get _application_oauth_scope() {
        return _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(_runtime_1.py.attr(this, "_profile"), "application_oauth_scope"), "format"), [], Object.assign({}, { "device_id": _runtime_1.py.attr(this, "_oauth_device_id") }));
    }
}
exports._NissanTransport = _NissanTransport;
_runtime_1.py.classType(_NissanTransport);
/** Translated upstream _error_message. */
function _error_message(...__args) {
    let key, value;
    let { "payload": payload, "fallback": fallback } = _runtime_1.py.bind(__args, ["payload", "fallback"], {}, [], null, null);
    for (key of _runtime_1.py.iterable(["error_description", "message", "error"])) {
        value = _runtime_1.py.call(_runtime_1.py.attr(payload, "get"), [key], null);
        if (_runtime_1.py.truth(_runtime_1.py.and(() => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null), () => value))) {
            return value;
        }
    }
    return fallback;
}
/** Translated upstream _extract_graphql_data. */
function _extract_graphql_data(...__args) {
    let data, error, errors, messages, value;
    let { "status": status, "payload": payload } = _runtime_1.py.bind(__args, ["status", "payload"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((status < 200)), () => ((status >= 300))))) {
        throw _runtime_1.py.call(exceptions_1.ApiError, [status, _runtime_1.py.call(_error_message, [payload, "Nissan API request failed"], null)], null);
    }
    data = _runtime_1.py.call(_runtime_1.py.attr(payload, "get"), ["data"], null);
    errors = _runtime_1.py.call(_runtime_1.py.attr(payload, "get"), ["errors"], null);
    if (_runtime_1.py.truth(_runtime_1.py.and(() => _runtime_1.py.call(_runtime_1.py.isinstance, [errors, _runtime_1.py.list], null), () => errors, () => _runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [data, Mapping], null)), () => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.any, [(() => { const __out = []; for (const value of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.attr(data, "values"), [], null))) {
            __out.push(((value !== null)));
        } return __out; })()], null)))))) {
        messages = _runtime_1.py.call(_runtime_1.py.tuple, [(() => { const __out = []; for (const error of _runtime_1.py.iterable(errors)) {
                if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [error, Mapping], null))) {
                    __out.push(_runtime_1.py.call(_runtime_1.py.str, [_runtime_1.py.call(_runtime_1.py.attr(error, "get"), ["message", "Unknown GraphQL error"], null)], null));
                }
            } return __out; })()], null);
        throw _runtime_1.py.call(exceptions_1.GraphQLError, [_runtime_1.py.or(() => messages, () => ["Unknown GraphQL error"])], null);
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [data, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, ["GraphQL response does not contain an object data field"], null);
    }
    return data;
}
/** Translated upstream _jwt_is_expired. */
function _jwt_is_expired(...__args) {
    let encoded_payload, expires_at, payload;
    let { "token": token, "leeway_seconds": leeway_seconds } = _runtime_1.py.bind(__args, ["token"], { "leeway_seconds": 30 }, ["leeway_seconds"], null, null);
    try {
        encoded_payload = _runtime_1.py.get(_runtime_1.py.call(_runtime_1.py.attr(token, "split"), ["."], null), 1);
        encoded_payload = _runtime_1.py.add(encoded_payload, _runtime_1.py.mul("=", _runtime_1.py.mod(-(_runtime_1.py.call(_runtime_1.py.len, [encoded_payload], null)), 4)));
        payload = _runtime_1.py.call(_runtime_1.py.attr(json, "loads"), [_runtime_1.py.call(_runtime_1.py.attr(base64, "urlsafe_b64decode"), [encoded_payload], null)], null);
        expires_at = _runtime_1.py.call(_runtime_1.py.attr(payload, "get"), ["exp"], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.IndexError) || _runtime_1.py.isinstance(__error, _runtime_1.py.ValueError) || _runtime_1.py.isinstance(__error, _runtime_1.py.TypeError) || _runtime_1.py.isinstance(__error, _runtime_1.py.attr(json, "JSONDecodeError"))) {
            return false;
        }
        else {
            throw __error;
        }
    }
    return _runtime_1.py.and(() => _runtime_1.py.call(_runtime_1.py.isinstance, [expires_at, _runtime_1.py.int], null), () => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [expires_at, _runtime_1.py.bool], null)), () => ((expires_at <= _runtime_1.py.add(_runtime_1.py.call(_runtime_1.py.attr(time, "time"), [], null), leeway_seconds))));
}
/** Translated upstream _tokens_have_expired_jwt. */
function _tokens_have_expired_jwt(...__args) {
    let { "tokens": tokens } = _runtime_1.py.bind(__args, ["tokens"], {}, [], null, null);
    return _runtime_1.py.or(() => _runtime_1.py.call(_jwt_is_expired, [_runtime_1.py.attr(tokens, "access_token")], null), () => _runtime_1.py.and(() => ((_runtime_1.py.attr(tokens, "id_token") !== null)), () => _runtime_1.py.call(_jwt_is_expired, [_runtime_1.py.attr(tokens, "id_token")], null)));
}
//# sourceMappingURL=_transport.js.map