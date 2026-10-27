import { py as $ } from "./_runtime";
import { DistanceUnit } from "./models";
export { DistanceUnit };
export declare const RecallType: $.EnumType<{
    readonly RECALL: "RECALL";
    readonly SERVICE: "SERVICE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type RecallType = ReturnType<typeof RecallType>;
export declare const WarrantyInfoColorStatus: $.EnumType<{
    readonly GREEN: "GREEN";
    readonly YELLOW: "YELLOW";
    readonly RED: "RED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type WarrantyInfoColorStatus = ReturnType<typeof WarrantyInfoColorStatus>;
export declare const WarrantyInfoWarrantyStatus: $.EnumType<{
    readonly ACTIVE: "ACTIVE";
    readonly EXPIRED: "EXPIRED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type WarrantyInfoWarrantyStatus = ReturnType<typeof WarrantyInfoWarrantyStatus>;
/** Nullable postal address fields returned for a preferred dealer. */
export declare class PreferredDealerAddress {
    readonly address1: string | null;
    readonly address2: string | null;
    readonly city: string | null;
    readonly state: string | null;
    readonly postal_code: string | null;
    readonly country: string | null;
    static __fields: (string | symbol)[][];
    constructor(address1: string | null, address2: string | null, city: string | null, state: string | null, postal_code: string | null, country: string | null);
    constructor(options: {
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        postal_code: string | null;
        country: string | null;
    });
}
/** Nullable coordinates returned for a preferred dealer. */
export declare class PreferredDealerLocation {
    readonly latitude: number | null;
    readonly longitude: number | null;
    static __fields: (string | symbol)[][];
    constructor(latitude: number | null, longitude: number | null);
    constructor(options: {
        latitude: number | null;
        longitude: number | null;
    });
}
/** The preferred dealer currently associated with a vehicle. */
export declare class VehiclePreferredDealer {
    readonly id: string | null;
    readonly hash_id: string | null;
    readonly name: string | null;
    readonly address: PreferredDealerAddress | null;
    readonly hours: string | null;
    readonly phone: string | null;
    readonly service_phone: string | null;
    readonly native_service_booking: boolean | null;
    readonly scheduling_url_mobile: string | null;
    readonly location: PreferredDealerLocation | null;
    readonly languages_spoken: ReadonlyArray<string>;
    static __fields: (string | symbol)[][];
    constructor(id: string | null, hash_id: string | null, name: string | null, address: PreferredDealerAddress | null, hours: string | null, phone: string | null, service_phone: string | null, native_service_booking: boolean | null, scheduling_url_mobile: string | null, location: PreferredDealerLocation | null, languages_spoken: ReadonlyArray<string>);
    constructor(options: {
        id: string | null;
        hash_id: string | null;
        name: string | null;
        address: PreferredDealerAddress | null;
        hours: string | null;
        phone: string | null;
        service_phone: string | null;
        native_service_booking: boolean | null;
        scheduling_url_mobile: string | null;
        location: PreferredDealerLocation | null;
        languages_spoken: ReadonlyArray<string>;
    });
}
/** One recall or service campaign associated with a vehicle. */
export declare class VehicleRecall {
    readonly effective_date: $.DateValue;
    readonly nhtsa_id: string | null;
    readonly primary_description: string;
    readonly remedy_description: string;
    readonly risk_description: string;
    readonly title: string;
    readonly type: RecallType;
    readonly recall_code: string | null;
    static __fields: (string | symbol)[][];
    constructor(effective_date: $.DateValue, nhtsa_id: string | null, primary_description: string, remedy_description: string, risk_description: string, title: string, type: RecallType, recall_code: string | null);
    constructor(options: {
        effective_date: $.DateValue;
        nhtsa_id: string | null;
        primary_description: string;
        remedy_description: string;
        risk_description: string;
        title: string;
        type: RecallType;
        recall_code: string | null;
    });
}
/** Nullable roadside-assistance and towing coverage limits. */
export declare class VehicleRoadsideAssistance {
    readonly roadside_months: number | null;
    readonly roadside_miles: number | null;
    readonly towing_months: number | null;
    readonly towing_miles: number | null;
    static __fields: (string | symbol)[][];
    constructor(roadside_months: number | null, roadside_miles: number | null, towing_months: number | null, towing_miles: number | null);
    constructor(options: {
        roadside_months: number | null;
        roadside_miles: number | null;
        towing_months: number | null;
        towing_miles: number | null;
    });
}
/** Non-null mileage and unit recorded for a service-history entry. */
export declare class ServiceHistoryMileage {
    readonly unit: DistanceUnit;
    readonly value: number;
    static __fields: (string | symbol)[][];
    constructor(unit: DistanceUnit, value: number);
    constructor(options: {
        unit: DistanceUnit;
        value: number;
    });
}
/** Nullable operation metadata attached to a service-history entry. */
export declare class VehicleServiceOperation {
    readonly service_category_id: string | null;
    readonly service_category_name: string | null;
    readonly op_code_id: string | null;
    readonly op_code_description: string | null;
    static __fields: (string | symbol)[][];
    constructor(service_category_id: string | null, service_category_name: string | null, op_code_id: string | null, op_code_description: string | null);
    constructor(options: {
        service_category_id: string | null;
        service_category_name: string | null;
        op_code_id: string | null;
        op_code_description: string | null;
    });
}
/** One completed vehicle service event returned by Nissan. */
export declare class VehicleServiceHistoryEntry {
    readonly mileage: ServiceHistoryMileage;
    readonly service_date: $.DateValue;
    readonly dealer_name: string;
    readonly dealer_code: string;
    readonly services: ReadonlyArray<string>;
    readonly comment: string | null;
    readonly maintenance_id: number | null;
    readonly service_operation: VehicleServiceOperation | null;
    static __fields: (string | symbol)[][];
    constructor(mileage: ServiceHistoryMileage, service_date: $.DateValue, dealer_name: string, dealer_code: string, services: ReadonlyArray<string>, comment: string | null, maintenance_id: number | null, service_operation: VehicleServiceOperation | null);
    constructor(options: {
        mileage: ServiceHistoryMileage;
        service_date: $.DateValue;
        dealer_name: string;
        dealer_code: string;
        services: ReadonlyArray<string>;
        comment: string | null;
        maintenance_id: number | null;
        service_operation: VehicleServiceOperation | null;
    });
}
/** Current vehicle warranty status and overall coverage limits. */
export declare class VehicleWarrantyInfo {
    readonly color_status: WarrantyInfoColorStatus;
    readonly warranty_status: WarrantyInfoWarrantyStatus;
    readonly total_mileage: number;
    readonly total_months: string;
    static __fields: (string | symbol)[][];
    constructor(color_status: WarrantyInfoColorStatus, warranty_status: WarrantyInfoWarrantyStatus, total_mileage: number, total_months: string);
    constructor(options: {
        color_status: WarrantyInfoColorStatus;
        warranty_status: WarrantyInfoWarrantyStatus;
        total_mileage: number;
        total_months: string;
    });
}
/** Mileage and calendar boundary for a vehicle warranty period. */
export declare class VehicleWarrantyPeriod {
    readonly mileage: number;
    readonly date: $.DateValue;
    static __fields: (string | symbol)[][];
    constructor(mileage: number, date: $.DateValue);
    constructor(options: {
        mileage: number;
        date: $.DateValue;
    });
}
/** Warranty summary and its non-null start, end, and current periods. */
export declare class VehicleWarranty {
    readonly warranty_info: VehicleWarrantyInfo;
    readonly start_period: VehicleWarrantyPeriod;
    readonly end_period: VehicleWarrantyPeriod;
    readonly current_period: VehicleWarrantyPeriod;
    static __fields: (string | symbol)[][];
    constructor(warranty_info: VehicleWarrantyInfo, start_period: VehicleWarrantyPeriod, end_period: VehicleWarrantyPeriod, current_period: VehicleWarrantyPeriod);
    constructor(options: {
        warranty_info: VehicleWarrantyInfo;
        start_period: VehicleWarrantyPeriod;
        end_period: VehicleWarrantyPeriod;
        current_period: VehicleWarrantyPeriod;
    });
}
