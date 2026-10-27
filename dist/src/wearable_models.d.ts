import { ServiceCapability } from "./models";
export { ServiceCapability };
/** Watch-optimized connected-service capability subset for one vehicle. */
export declare class VehicleCapabilitySummary {
    readonly telematics_program: string;
    readonly enrollment_status: string;
    readonly services: ReadonlyArray<ServiceCapability | null> | null;
    static __fields: (string | symbol)[][];
    constructor(telematics_program: string, enrollment_status: string, services: ReadonlyArray<ServiceCapability | null> | null);
    constructor(options: {
        telematics_program: string;
        enrollment_status: string;
        services: ReadonlyArray<ServiceCapability | null> | null;
    });
}
/** Static vehicle data and the capability subset returned to wearable clients. */
export declare class VehicleWithCapabilities {
    readonly vin: string;
    readonly nickname: string | null;
    readonly image_url: string;
    readonly year: string;
    readonly model: string;
    readonly driver_type: string | null;
    readonly capabilities: VehicleCapabilitySummary | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string, nickname: string | null, image_url: string, year: string, model: string, driver_type: string | null, capabilities: VehicleCapabilitySummary | null);
    constructor(options: {
        vin: string;
        nickname: string | null;
        image_url: string;
        year: string;
        model: string;
        driver_type: string | null;
        capabilities: VehicleCapabilitySummary | null;
    });
}
