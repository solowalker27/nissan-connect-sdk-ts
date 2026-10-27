declare const NissanError_base: any;
/** Base exception raised by pynissan. */
export declare class NissanError extends NissanError_base {
    constructor(...__args: any[]);
}
declare const ReadOnlyError_base: any;
/** Raised when a state-changing operation is blocked by read-only mode. */
export declare class ReadOnlyError extends ReadOnlyError_base {
    constructor(...__args: any[]);
}
export interface ReadOnlyError extends NissanError {
}
declare const NetworkError_base: any;
/** Raised when the upstream service cannot be reached. */
export declare class NetworkError extends NetworkError_base {
    constructor(...__args: any[]);
}
export interface NetworkError extends NissanError {
}
declare const ResponseError_base: any;
/** Raised when an upstream response has an unexpected shape. */
export declare class ResponseError extends ResponseError_base {
    constructor(...__args: any[]);
}
export interface ResponseError extends NissanError {
}
declare const AuthenticationError_base: any;
/** Raised when authentication or token refresh fails. */
export declare class AuthenticationError extends AuthenticationError_base {
    constructor(...__args: any[]);
    /** Translated upstream __init__. */
    __init__(...__args: any[]): any;
}
export interface AuthenticationError extends NissanError {
}
declare const ApiError_base: any;
/** Raised when the connected vehicle API rejects a request. */
export declare class ApiError extends ApiError_base {
    constructor(...__args: any[]);
    /** Translated upstream __init__. */
    __init__(...__args: any[]): any;
}
export interface ApiError extends NissanError {
}
declare const GraphQLError_base: any;
/** Raised when a GraphQL response contains operation errors. */
export declare class GraphQLError extends GraphQLError_base {
    constructor(...__args: any[]);
    /** Translated upstream __init__. */
    __init__(...__args: any[]): any;
}
export interface GraphQLError extends NissanError {
}
export {};
