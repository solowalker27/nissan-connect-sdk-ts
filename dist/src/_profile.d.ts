import { Country } from "./countries";
export { Country };
/** Service endpoints and application metadata for one country. */
export declare class _CountryProfile {
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
    static __fields: ((string | symbol)[] | (string | number)[])[];
    constructor(token_endpoint: string, graphql_endpoint: string, account_namespace: string, client_id: string, client_secret: string, oauth_scope: string, app_package: string, app_version: string, application_client_id: string, application_client_secret: string, application_oauth_scope: string, application_app_package: string, application_app_version: string, brand: string, country: Country, accept_language: string, user_agent: string, request_timeout_seconds?: number);
    constructor(options: {
        token_endpoint: string;
        graphql_endpoint: string;
        account_namespace: string;
        client_id: string;
        client_secret: string;
        oauth_scope: string;
        app_package: string;
        app_version: string;
        application_client_id: string;
        application_client_secret: string;
        application_oauth_scope: string;
        application_app_package: string;
        application_app_version: string;
        brand: string;
        country: Country;
        accept_language: string;
        user_agent: string;
        request_timeout_seconds?: number;
    });
    /** Return the Apollo client identifier sent with GraphQL requests. */
    get apollo_client_name(): string;
    /** Return the Apollo identifier used before account authentication. */
    get application_apollo_client_name(): string;
}
export declare let _ACCOUNT_NAMESPACE: string;
export declare let _MOBILE_CLIENT_ID: string;
export declare let _MOBILE_CLIENT_SECRET: string;
export declare let _MOBILE_OAUTH_SCOPE: string;
export declare let _MOBILE_APP_PACKAGE: string;
export declare let _MOBILE_APP_VERSION: string;
export declare let _MOBILE_USER_AGENT: string;
export declare function _https_endpoint(host: ReadonlyArray<string>, ...path: ReadonlyArray<string>): string;
export declare let _TOKEN_ENDPOINT: any;
export declare let _GRAPHQL_ENDPOINT: any;
export declare let _US_PROFILE: any;
export declare let _CA_PROFILE: any;
export declare let _MX_PROFILE: any;
export declare function profile_for(country: Country): _CountryProfile;
