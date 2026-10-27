export interface HttpRequestOptions {
    data?: Record<string, string> | null;
    json?: Record<string, unknown> | null;
    headers?: Record<string, string> | null;
    timeout?: {
        total?: number;
    };
}
export interface HttpResponse {
    readonly status: number;
    json(options?: unknown): Promise<unknown>;
}
export interface HttpSession {
    post(url: string, options: HttpRequestOptions): HttpResponse | Promise<HttpResponse>;
}
export declare class FetchSession implements HttpSession {
    private readonly fetchImpl;
    private readonly pending;
    private closed;
    constructor(fetchImpl?: typeof fetch);
    post(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    close(): void;
}
/** Adapt the generated keyword-call convention at the native HTTP boundary. */
export declare function adaptHttpSession(session: HttpSession): HttpSession;
