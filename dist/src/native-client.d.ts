/** Native Node.js entry point; accepts the original session argument or a single options object. */
import { NissanClient as GeneratedClient } from './client';
import { type HttpSession } from './http';
import { Country } from './countries';
import { Tokens } from './models';
import { RequestProof } from './request_proof';
export interface NissanClientOptions {
    country?: Country;
    tokens?: Tokens | null;
    token_listener?: (tokens: Tokens) => void | Promise<void>;
    read_only?: boolean;
    oauth_device_id?: string | null;
    request_proof?: RequestProof | null;
    request_proof_provider?: ((force_refresh: boolean) => Promise<RequestProof>) | null;
}
export declare class NissanClient extends GeneratedClient {
    private readonly ownedSession;
    constructor(options?: NissanClientOptions);
    constructor(session: HttpSession, options?: NissanClientOptions);
    /** Abort requests made by the default session; supplied sessions remain caller-owned. */
    close(): void;
}
