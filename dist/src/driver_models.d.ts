import { py as $ } from "./_runtime";
export declare const EmergencyContactRelationship: $.EnumType<{
    readonly ASSISTANT: "ASSISTANT";
    readonly BROTHER: "BROTHER";
    readonly BUSINESS_CONTACT: "BUSINESS_CONTACT";
    readonly CHAUFFEUR: "CHAUFFEUR";
    readonly CO_WORKER: "CO_WORKER";
    readonly DAUGHTER: "DAUGHTER";
    readonly DOCTOR: "DOCTOR";
    readonly EMPLOYEE: "EMPLOYEE";
    readonly FATHER: "FATHER";
    readonly FIANCE: "FIANCE";
    readonly FIANCEE: "FIANCEE";
    readonly FRIEND: "FRIEND";
    readonly GRANDFATHER: "GRANDFATHER";
    readonly GRANDMOTHER: "GRANDMOTHER";
    readonly MOTHER: "MOTHER";
    readonly OTHER: "OTHER";
    readonly PARENTS: "PARENTS";
    readonly PARTNER: "PARTNER";
    readonly RELATIVE: "RELATIVE";
    readonly SIGNIFICANT_OTHER: "SIGNIFICANT_OTHER";
    readonly SISTER: "SISTER";
    readonly SON: "SON";
    readonly SPOUSE: "SPOUSE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type EmergencyContactRelationship = ReturnType<typeof EmergencyContactRelationship>;
export declare const InviteNotificationType: $.EnumType<{
    readonly SMS: "SMS";
    readonly EMAIL: "EMAIL";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type InviteNotificationType = ReturnType<typeof InviteNotificationType>;
export declare const InviteStatus: $.EnumType<{
    readonly ACCEPTED: "ACCEPTED";
    readonly PENDING: "PENDING";
    readonly DECLINE: "DECLINE";
    readonly REMOVED: "REMOVED";
    readonly CANCEL: "CANCEL";
    readonly EXPIRED: "EXPIRED";
    readonly INVALIDATE: "INVALIDATE";
    readonly NONE: "NONE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type InviteStatus = ReturnType<typeof InviteStatus>;
export declare const DriverInviteAction: $.EnumType<{
    readonly DECLINE: "DECLINE";
    readonly ACCEPT: "ACCEPT";
    readonly INVALIDATE: "INVALIDATE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type DriverInviteAction = ReturnType<typeof DriverInviteAction>;
export declare const OwnerInviteAction: $.EnumType<{
    readonly RESEND: "RESEND";
    readonly CANCEL: "CANCEL";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type OwnerInviteAction = ReturnType<typeof OwnerInviteAction>;
/** One nullable-field emergency contact returned for a vehicle. */
export declare class EmergencyContact {
    readonly typename: string;
    readonly id: string | null;
    readonly first_name: string | null;
    readonly last_name: string | null;
    readonly primary_phone: string | null;
    readonly secondary_phone: string | null;
    readonly relationship: EmergencyContactRelationship | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, id: string | null, first_name: string | null, last_name: string | null, primary_phone: string | null, secondary_phone: string | null, relationship: EmergencyContactRelationship | null);
    constructor(options: {
        typename: string;
        id: string | null;
        first_name: string | null;
        last_name: string | null;
        primary_phone: string | null;
        secondary_phone: string | null;
        relationship: EmergencyContactRelationship | null;
    });
}
/** Vehicle type and emergency contacts selected by the vehicle fragment. */
export declare class EmergencyContactsResult {
    readonly typename: string;
    readonly emergency_contacts: ReadonlyArray<EmergencyContact | null> | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, emergency_contacts: ReadonlyArray<EmergencyContact | null> | null);
    constructor(options: {
        typename: string;
        emergency_contacts: ReadonlyArray<EmergencyContact | null> | null;
    });
}
/** Nullable response status returned after creating an emergency contact. */
export declare class CreateEmergencyContactResult {
    readonly typename: string;
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, success: boolean | null);
    constructor(options: {
        typename: string;
        success: boolean | null;
    });
}
/** Nullable response status returned after updating an emergency contact. */
export declare class UpdateEmergencyContactResult {
    readonly typename: string;
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, success: boolean | null);
    constructor(options: {
        typename: string;
        success: boolean | null;
    });
}
/** Nullable response status returned after deleting an emergency contact. */
export declare class DeleteEmergencyContactResult {
    readonly typename: string;
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, success: boolean | null);
    constructor(options: {
        typename: string;
        success: boolean | null;
    });
}
/** A known driver-operation error branch and its server message. */
export declare class DriverOperationError {
    readonly typename: string;
    readonly error_message: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string, error_message: string);
    constructor(options: {
        typename: string;
        error_message: string;
    });
}
/** One current driver invitation returned by Nissan. */
export declare class DriverInvite {
    readonly typename: string;
    readonly invite_id: string;
    readonly driver_first_name: string;
    readonly driver_last_name: string;
    readonly driver_email: string;
    readonly driver_phone_number: string;
    readonly invite_date_time: $.DateValue;
    readonly invite_expiry_date_time: $.DateValue;
    readonly invite_type: InviteNotificationType;
    readonly notifications_to_primary: boolean;
    readonly usage_history: boolean;
    readonly status: InviteStatus;
    readonly cdiid: string | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, invite_id: string, driver_first_name: string, driver_last_name: string, driver_email: string, driver_phone_number: string, invite_date_time: $.DateValue, invite_expiry_date_time: $.DateValue, invite_type: InviteNotificationType, notifications_to_primary: boolean, usage_history: boolean, status: InviteStatus, cdiid: string | null);
    constructor(options: {
        typename: string;
        invite_id: string;
        driver_first_name: string;
        driver_last_name: string;
        driver_email: string;
        driver_phone_number: string;
        invite_date_time: $.DateValue;
        invite_expiry_date_time: $.DateValue;
        invite_type: InviteNotificationType;
        notifications_to_primary: boolean;
        usage_history: boolean;
        status: InviteStatus;
        cdiid: string | null;
    });
}
/** Future-safe union result for the DriverInvites query. */
export declare class DriverInvitesResult {
    readonly typename: string;
    readonly invites: ReadonlyArray<DriverInvite> | null;
    readonly error: DriverOperationError | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, invites: ReadonlyArray<DriverInvite> | null, error: DriverOperationError | null);
    constructor(options: {
        typename: string;
        invites: ReadonlyArray<DriverInvite> | null;
        error: DriverOperationError | null;
    });
}
/** Driver invitation returned by a successful InviteDriver mutation. */
export declare class InviteDriverSuccess {
    readonly vin: string;
    readonly invite_id: string;
    readonly driver_first_name: string;
    readonly driver_last_name: string;
    readonly driver_email: string;
    readonly driver_phone_number: string;
    readonly entitlements: ReadonlyArray<string>;
    readonly invite_type: InviteNotificationType;
    readonly usage_history: boolean;
    readonly notifications_to_primary: boolean;
    readonly invite_date_time: $.DateValue;
    readonly status: InviteStatus;
    static __fields: (string | symbol)[][];
    constructor(vin: string, invite_id: string, driver_first_name: string, driver_last_name: string, driver_email: string, driver_phone_number: string, entitlements: ReadonlyArray<string>, invite_type: InviteNotificationType, usage_history: boolean, notifications_to_primary: boolean, invite_date_time: $.DateValue, status: InviteStatus);
    constructor(options: {
        vin: string;
        invite_id: string;
        driver_first_name: string;
        driver_last_name: string;
        driver_email: string;
        driver_phone_number: string;
        entitlements: ReadonlyArray<string>;
        invite_type: InviteNotificationType;
        usage_history: boolean;
        notifications_to_primary: boolean;
        invite_date_time: $.DateValue;
        status: InviteStatus;
    });
}
/** Future-safe success or validation-error result for InviteDriver. */
export declare class InviteDriverResult {
    readonly typename: string;
    readonly invitation: InviteDriverSuccess | null;
    readonly error: DriverOperationError | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, invitation: InviteDriverSuccess | null, error: DriverOperationError | null);
    constructor(options: {
        typename: string;
        invitation: InviteDriverSuccess | null;
        error: DriverOperationError | null;
    });
}
/** Future-safe result for a prospective driver's invitation action. */
export declare class DriverInviteActionResult {
    readonly typename: string;
    readonly success: boolean | null;
    readonly error: DriverOperationError | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, success: boolean | null, error: DriverOperationError | null);
    constructor(options: {
        typename: string;
        success: boolean | null;
        error: DriverOperationError | null;
    });
}
/** Future-safe result for deleting a driver invitation. */
export declare class DeleteDriverResult {
    readonly typename: string;
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, success: boolean | null);
    constructor(options: {
        typename: string;
        success: boolean | null;
    });
}
/** Driver permissions returned by a successful UpdateDriver mutation. */
export declare class UpdateDriverSuccess {
    readonly entitlements: ReadonlyArray<string>;
    readonly usage_history: boolean;
    readonly notifications_to_primary: boolean;
    readonly success: boolean;
    static __fields: (string | symbol)[][];
    constructor(entitlements: ReadonlyArray<string>, usage_history: boolean, notifications_to_primary: boolean, success: boolean);
    constructor(options: {
        entitlements: ReadonlyArray<string>;
        usage_history: boolean;
        notifications_to_primary: boolean;
        success: boolean;
    });
}
/** Future-safe result for updating a driver's permissions. */
export declare class UpdateDriverResult {
    readonly typename: string;
    readonly driver: UpdateDriverSuccess | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, driver: UpdateDriverSuccess | null);
    constructor(options: {
        typename: string;
        driver: UpdateDriverSuccess | null;
    });
}
/** Future-safe result for an owner's invitation action. */
export declare class OwnerInviteActionResult {
    readonly typename: string;
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, success: boolean | null);
    constructor(options: {
        typename: string;
        success: boolean | null;
    });
}
/** Nullable roadside-assistance link returned for a vehicle. */
export declare class CreateRSALinkResult {
    readonly typename: string;
    readonly link: string | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, link: string | null);
    constructor(options: {
        typename: string;
        link: string | null;
    });
}
