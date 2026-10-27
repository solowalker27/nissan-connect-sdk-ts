import { Tokens } from "./models";
export { Tokens };
import { RequestProof } from "./request_proof";
export { RequestProof };
export type TokenListener = ((arg0: Tokens) => Promise<void> | null);
/** Return request verification values, refreshing them when requested. */
export type RequestProofProvider = (force_refresh: boolean) => Promise<RequestProof>;
