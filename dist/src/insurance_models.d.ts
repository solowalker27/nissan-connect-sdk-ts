import { py as $ } from "./_runtime";
export declare const InsuranceStatus: $.EnumType<{
    readonly ACTIVE: "active";
    readonly EXPIRED: "expired";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type InsuranceStatus = ReturnType<typeof InsuranceStatus>;
/** Nullable contact details published by an insurer. */
export declare class InsuranceContact {
    readonly location: string | null;
    readonly phone_number: string | null;
    static __fields: (string | symbol)[][];
    constructor(location: string | null, phone_number: string | null);
    constructor(options: {
        location: string | null;
        phone_number: string | null;
    });
}
/** Insurer identity and required nullable-item contact list. */
export declare class VehicleInsurer {
    readonly id: string;
    readonly name: string;
    readonly contacts: ReadonlyArray<InsuranceContact | null>;
    static __fields: (string | symbol)[][];
    constructor(id: string, name: string, contacts: ReadonlyArray<InsuranceContact | null>);
    constructor(options: {
        id: string;
        name: string;
        contacts: ReadonlyArray<InsuranceContact | null>;
    });
}
/** Insurance policy attached to a vehicle. */
export declare class VehicleInsurance {
    readonly id: string;
    readonly policy_number: string;
    readonly expiration_date: string;
    readonly status: InsuranceStatus;
    readonly insurer: VehicleInsurer;
    static __fields: (string | symbol)[][];
    constructor(id: string, policy_number: string, expiration_date: string, status: InsuranceStatus, insurer: VehicleInsurer);
    constructor(options: {
        id: string;
        policy_number: string;
        expiration_date: string;
        status: InsuranceStatus;
        insurer: VehicleInsurer;
    });
}
/** Successful insurance add or update result. */
export declare class VehicleInsuranceMutationSuccess {
    readonly success: boolean;
    static __fields: (string | symbol)[][];
    constructor(success: boolean);
    constructor(options: {
        success: boolean;
    });
}
/** Insurance add or update failure. */
export declare class VehicleInsuranceMutationError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Future insurance union branch selected only by type name. */
export declare class UnselectedInsuranceResult {
    readonly typename: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string);
    constructor(options: {
        typename: string;
    });
}
export type VehicleInsuranceMutationResult = VehicleInsuranceMutationSuccess | VehicleInsuranceMutationError | UnselectedInsuranceResult;
