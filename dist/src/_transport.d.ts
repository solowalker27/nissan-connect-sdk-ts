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
export declare class _ApplicationToken {
    readonly access_token: string;
    static __fields: (string | symbol)[][];
    constructor(access_token: string);
    constructor(options: {
        access_token: string;
    });
}
/** OAuth and GraphQL transport using a caller-owned aiohttp session. */
export declare class _NissanTransport {
    constructor(...__args: any[]);
    /** Translated upstream __init__. */
    __init__(...__args: any[]): any;
    /** Return the currently active token set, if authenticated. */
    get tokens(): Tokens | null;
    /** Return the device identifier used to build mobile OAuth scopes. */
    get oauth_device_id(): string;
    async_authenticate(email: string, password: string): Promise<Tokens>;
    async_refresh_tokens(options?: {
        expired_access_token?: string | null;
    }): Promise<Tokens>;
    async_graphql(operation_name: string, document: string, variables: Record<string, unknown>, options?: {
        extra_headers?: Record<string, string> | null;
    }): Promise<Record<string, unknown>>;
    async_application_graphql(operation_name: string, document: string, variables: Record<string, unknown>): Promise<Record<string, unknown>>;
    _async_get_application_token(options?: {
        force_refresh?: boolean;
        rejected_access_token?: string | null;
    }): Promise<_ApplicationToken>;
    _async_application_graphql_request(operation_name: string, document: string, variables: Record<string, unknown>, token: _ApplicationToken, request_proof: RequestProof): Promise<readonly [number, JsonObject]>;
    _async_request_tokens(form: Record<string, string>, options?: {
        previous?: Tokens | null;
    }): Promise<Tokens>;
    _async_graphql_request(operation_name: string, document: string, variables: Record<string, unknown>, options: {
        access_token: string;
        id_token: string | null;
        request_proof: RequestProof | null;
        apollo_client_name: string;
        apollo_client_version: string;
        extra_headers: Record<string, string> | null;
    }): Promise<readonly [number, JsonObject]>;
    _async_get_request_proof(options: {
        force_refresh: boolean;
    }): Promise<RequestProof | null>;
    _async_refresh_request_proof(rejected_proof: RequestProof | null): Promise<RequestProof>;
    _async_post_json(url: string, options?: {
        data?: Record<string, string> | null;
        json?: Record<string, unknown> | null;
        headers?: Record<string, string> | null;
    }): Promise<readonly [number, JsonObject]>;
    _async_publish_tokens(tokens: Tokens): Promise<null>;
    _require_tokens(): Tokens;
    /** Translated upstream _oauth_scope. */
    get _oauth_scope(): string;
    /** Translated upstream _application_oauth_scope. */
    get _application_oauth_scope(): string;
}
export declare function _error_message(payload: Record<string, unknown>, fallback: string): string;
export declare function _extract_graphql_data(status: number, payload: Record<string, unknown>): Record<string, unknown>;
export declare function _jwt_is_expired(token: string, options?: {
    leeway_seconds?: number;
}): boolean;
export declare function _tokens_have_expired_jwt(tokens: Tokens): boolean;
