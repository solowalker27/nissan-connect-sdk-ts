import { UNSET, UnsetType, optional_input_fields } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields };
/** Optional postal address fields accepted by Nissan input objects. */
export declare class AddressInput {
    readonly address1: string | UnsetType | null;
    readonly address2: string | UnsetType | null;
    readonly city: string | UnsetType | null;
    readonly state: string | UnsetType | null;
    readonly postal_code: string | UnsetType | null;
    readonly country: string | UnsetType | null;
    readonly neighbourhood: string | UnsetType | null;
    readonly district: string | UnsetType | null;
    readonly street_number: string | UnsetType | null;
    static __fields: any[][];
    constructor(address1?: string | UnsetType | null, address2?: string | UnsetType | null, city?: string | UnsetType | null, state?: string | UnsetType | null, postal_code?: string | UnsetType | null, country?: string | UnsetType | null, neighbourhood?: string | UnsetType | null, district?: string | UnsetType | null, street_number?: string | UnsetType | null);
    constructor(options: {
        address1?: string | UnsetType | null;
        address2?: string | UnsetType | null;
        city?: string | UnsetType | null;
        state?: string | UnsetType | null;
        postal_code?: string | UnsetType | null;
        country?: string | UnsetType | null;
        neighbourhood?: string | UnsetType | null;
        district?: string | UnsetType | null;
        street_number?: string | UnsetType | null;
    });
}
/** Required latitude and longitude accepted by Nissan input objects. */
export declare class CoordinateInput {
    readonly latitude: number;
    readonly longitude: number;
    static __fields: (string | symbol)[][];
    constructor(latitude: number, longitude: number);
    constructor(options: {
        latitude: number;
        longitude: number;
    });
}
export declare function address_input(value: AddressInput): Record<string, unknown>;
export declare function coordinate_input(value: CoordinateInput): Record<string, unknown>;
