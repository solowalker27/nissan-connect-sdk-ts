import { py as $ } from "./_runtime";
import { DistanceUnit } from "./models";
export { DistanceUnit };
export declare const PhotoSection: $.EnumType<{
    readonly ONE: "ONE";
    readonly TWO: "TWO";
    readonly THREE: "THREE";
    readonly FOUR: "FOUR";
    readonly FIVE: "FIVE";
    readonly SIX: "SIX";
    readonly SEVEN: "SEVEN";
    readonly EIGHT: "EIGHT";
    readonly NINE: "NINE";
    readonly TEN: "TEN";
    readonly ELEVEN: "ELEVEN";
    readonly TWELVE: "TWELVE";
    readonly THIRTEEN: "THIRTEEN";
    readonly FOURTEEN: "FOURTEEN";
    readonly FIFTEEN: "FIFTEEN";
    readonly SIXTEEN: "SIXTEEN";
    readonly SEVENTEEN: "SEVENTEEN";
    readonly EIGHTEEN: "EIGHTEEN";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type PhotoSection = ReturnType<typeof PhotoSection>;
/** Nullable postal address fields for a collision center. */
export declare class CollisionCenterAddress {
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
/** Nullable distance and driving-time details. */
export declare class CollisionCenterDistance {
    readonly value: number | null;
    readonly unit: DistanceUnit | null;
    readonly drive_time: number | null;
    static __fields: (string | symbol)[][];
    constructor(value: number | null, unit: DistanceUnit | null, drive_time: number | null);
    constructor(options: {
        value: number | null;
        unit: DistanceUnit | null;
        drive_time: number | null;
    });
}
/** Nullable collision-center phone fields. */
export declare class CollisionCenterPhone {
    readonly is_primary: boolean | null;
    readonly number: string | null;
    static __fields: (string | symbol)[][];
    constructor(is_primary: boolean | null, number: string | null);
    constructor(options: {
        is_primary: boolean | null;
        number: string | null;
    });
}
/** Nullable Nissan certification and search metadata. */
export declare class CollisionCenterProperties {
    readonly nissan_certified: boolean | null;
    readonly ev_certified: boolean | null;
    readonly p1669718_status: boolean | null;
    readonly relevance_score: number | null;
    readonly smart_filter_qualified: boolean | null;
    readonly participant_profile_status: boolean | null;
    readonly nissan_gtr: boolean | null;
    readonly type_facility: string | null;
    static __fields: (string | symbol)[][];
    constructor(nissan_certified: boolean | null, ev_certified: boolean | null, p1669718_status: boolean | null, relevance_score: number | null, smart_filter_qualified: boolean | null, participant_profile_status: boolean | null, nissan_gtr: boolean | null, type_facility: string | null);
    constructor(options: {
        nissan_certified: boolean | null;
        ev_certified: boolean | null;
        p1669718_status: boolean | null;
        relevance_score: number | null;
        smart_filter_qualified: boolean | null;
        participant_profile_status: boolean | null;
        nissan_gtr: boolean | null;
        type_facility: string | null;
    });
}
/** Collision center returned by Nissan's location search. */
export declare class CollisionCenter {
    readonly id: string;
    readonly name: string;
    readonly address: CollisionCenterAddress;
    readonly distance: CollisionCenterDistance;
    readonly phones: ReadonlyArray<CollisionCenterPhone | null>;
    readonly emails: ReadonlyArray<string | null>;
    readonly website: string | null;
    readonly properties: CollisionCenterProperties | null;
    static __fields: (string | symbol)[][];
    constructor(id: string, name: string, address: CollisionCenterAddress, distance: CollisionCenterDistance, phones: ReadonlyArray<CollisionCenterPhone | null>, emails: ReadonlyArray<string | null>, website: string | null, properties: CollisionCenterProperties | null);
    constructor(options: {
        id: string;
        name: string;
        address: CollisionCenterAddress;
        distance: CollisionCenterDistance;
        phones: ReadonlyArray<CollisionCenterPhone | null>;
        emails: ReadonlyArray<string | null>;
        website: string | null;
        properties: CollisionCenterProperties | null;
    });
}
/** Successful collision-report creation. */
export declare class CollisionReportCreated {
    readonly collision_id: string;
    static __fields: (string | symbol)[][];
    constructor(collision_id: string);
    constructor(options: {
        collision_id: string;
    });
}
/** Successful collision-report PDF generation. */
export declare class CollisionReportPdfCreated {
    readonly pdf_url: string;
    static __fields: (string | symbol)[][];
    constructor(pdf_url: string);
    constructor(options: {
        pdf_url: string;
    });
}
/** Nullable status returned after deleting a report photo. */
export declare class CollisionReportPhotoDeleted {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
/** Nullable status returned after uploading a report photo. */
export declare class CollisionReportPhotoUploaded {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
/** Required collision-report mutation error message. */
export declare class CollisionReportError {
    readonly message: string;
    static __fields: (string | symbol)[][];
    constructor(message: string);
    constructor(options: {
        message: string;
    });
}
/** Nullable collision-report photo deletion error message. */
export declare class CollisionReportPhotoDeleteError {
    readonly message: string | null;
    static __fields: (string | symbol)[][];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
/** Future collision-report union branch selected only by type name. */
export declare class UnselectedCollisionReportResult {
    readonly typename: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string);
    constructor(options: {
        typename: string;
    });
}
export type CreateCollisionReportResult = CollisionReportCreated | CollisionReportError | UnselectedCollisionReportResult;
export type CreateCollisionReportPdfResult = CollisionReportPdfCreated | CollisionReportError | UnselectedCollisionReportResult;
export type DeleteCollisionReportPhotoResult = CollisionReportPhotoDeleted | CollisionReportPhotoDeleteError | UnselectedCollisionReportResult;
export type UploadCollisionReportPhotoResult = CollisionReportPhotoUploaded | CollisionReportError | UnselectedCollisionReportResult;
