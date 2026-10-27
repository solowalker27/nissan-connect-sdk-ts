/** Verification values attached to requests that require them. */
export declare class RequestProof {
    readonly api_attestation: string;
    readonly device_status: string;
    static __fields: (string | symbol)[][];
    constructor(api_attestation: string, device_status: string);
    constructor(options: {
        api_attestation: string;
        device_status: string;
    });
    __post_init__(): null;
}
