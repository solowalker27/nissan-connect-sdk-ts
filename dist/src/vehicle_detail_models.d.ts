import { VehicleStatus } from "./models";
export { VehicleStatus };
import { VehicleRecall } from "./service_models";
export { VehicleRecall };
/** Required model and year returned for a nullable vehicle. */
export declare class VehicleModelYear {
    readonly vehicle_type: string;
    readonly model: string;
    readonly year: string;
    static __fields: (string | symbol)[][];
    constructor(vehicle_type: string, model: string, year: string);
    constructor(options: {
        vehicle_type: string;
        model: string;
        year: string;
    });
}
/** Nullable nickname returned for a nullable vehicle. */
export declare class VehicleNickname {
    readonly vehicle_type: string;
    readonly nickname: string | null;
    static __fields: (string | symbol)[][];
    constructor(vehicle_type: string, nickname: string | null);
    constructor(options: {
        vehicle_type: string;
        nickname: string | null;
    });
}
/** Cached non-EV dynamic status together with vehicle recalls. */
export declare class VehicleStatusAndRecalls {
    readonly status: VehicleStatus;
    readonly recalls: ReadonlyArray<VehicleRecall>;
    static __fields: (string | symbol)[][];
    constructor(status: VehicleStatus, recalls: ReadonlyArray<VehicleRecall>);
    constructor(options: {
        status: VehicleStatus;
        recalls: ReadonlyArray<VehicleRecall>;
    });
}
