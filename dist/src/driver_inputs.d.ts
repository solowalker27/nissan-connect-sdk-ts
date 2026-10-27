import { py as $ } from "./_runtime";
import { DriverInviteAction, EmergencyContactRelationship, InviteNotificationType, OwnerInviteAction } from "./driver_models";
export { DriverInviteAction, EmergencyContactRelationship, InviteNotificationType, OwnerInviteAction };
import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
/** Required and optional fields for a new emergency contact. */
export declare class CreateEmergencyContactInput {
    readonly first_name: string;
    readonly last_name: string;
    readonly primary_phone: string;
    readonly relationship: EmergencyContactRelationship;
    readonly secondary_phone: string | UnsetType | null;
    static __fields: any[][];
    constructor(first_name: string, last_name: string, primary_phone: string, relationship: EmergencyContactRelationship, secondary_phone?: string | UnsetType | null);
    constructor(options: {
        first_name: string;
        last_name: string;
        primary_phone: string;
        relationship: EmergencyContactRelationship;
        secondary_phone?: string | UnsetType | null;
    });
}
/** Emergency-contact patch with Apollo omission semantics. */
export declare class UpdateEmergencyContactInput {
    readonly emergency_contact_id: string;
    readonly first_name: string | UnsetType | null;
    readonly last_name: string | UnsetType | null;
    readonly primary_phone: string | UnsetType | null;
    readonly secondary_phone: string | UnsetType | null;
    readonly relationship: EmergencyContactRelationship | UnsetType | null;
    static __fields: any[][];
    constructor(emergency_contact_id: string, first_name?: string | UnsetType | null, last_name?: string | UnsetType | null, primary_phone?: string | UnsetType | null, secondary_phone?: string | UnsetType | null, relationship?: EmergencyContactRelationship | UnsetType | null);
    constructor(options: {
        emergency_contact_id: string;
        first_name?: string | UnsetType | null;
        last_name?: string | UnsetType | null;
        primary_phone?: string | UnsetType | null;
        secondary_phone?: string | UnsetType | null;
        relationship?: EmergencyContactRelationship | UnsetType | null;
    });
}
/** Required identity, permissions, and delivery channel for a driver invite. */
export declare class DriverInviteInput {
    readonly driver_first_name: string;
    readonly driver_last_name: string;
    readonly driver_email: string;
    readonly driver_phone_number: string;
    readonly vin: string;
    readonly entitlements: ReadonlyArray<string>;
    readonly invite_type: InviteNotificationType;
    readonly usage_history: boolean;
    readonly notifications_to_primary: boolean;
    static __fields: (string | symbol)[][];
    constructor(driver_first_name: string, driver_last_name: string, driver_email: string, driver_phone_number: string, vin: string, entitlements: ReadonlyArray<string>, invite_type: InviteNotificationType, usage_history: boolean, notifications_to_primary: boolean);
    constructor(options: {
        driver_first_name: string;
        driver_last_name: string;
        driver_email: string;
        driver_phone_number: string;
        vin: string;
        entitlements: ReadonlyArray<string>;
        invite_type: InviteNotificationType;
        usage_history: boolean;
        notifications_to_primary: boolean;
    });
}
/** Prospective-driver action with optional terms acceptance. */
export declare class DriverInviteActionInput {
    readonly invite_id: string;
    readonly action: DriverInviteAction;
    readonly terms_and_conditions: boolean | UnsetType | null;
    static __fields: any[][];
    constructor(invite_id: string, action: DriverInviteAction, terms_and_conditions?: boolean | UnsetType | null);
    constructor(options: {
        invite_id: string;
        action: DriverInviteAction;
        terms_and_conditions?: boolean | UnsetType | null;
    });
}
/** Required replacement permissions for an invited driver. */
export declare class UpdateDriverInput {
    readonly invite_id: string;
    readonly entitlements: ReadonlyArray<string>;
    readonly usage_history: boolean;
    readonly notifications_to_primary: boolean;
    static __fields: (string | symbol)[][];
    constructor(invite_id: string, entitlements: ReadonlyArray<string>, usage_history: boolean, notifications_to_primary: boolean);
    constructor(options: {
        invite_id: string;
        entitlements: ReadonlyArray<string>;
        usage_history: boolean;
        notifications_to_primary: boolean;
    });
}
/** Owner action and notification channel for a driver invitation. */
export declare class OwnerInviteActionInput {
    readonly invite_id: string;
    readonly action: OwnerInviteAction;
    readonly notification_type: InviteNotificationType;
    static __fields: (string | symbol)[][];
    constructor(invite_id: string, action: OwnerInviteAction, notification_type: InviteNotificationType);
    constructor(options: {
        invite_id: string;
        action: OwnerInviteAction;
        notification_type: InviteNotificationType;
    });
}
export declare function emergency_contacts_variables(vin: string): Record<string, unknown>;
export declare function create_emergency_contact_variables(vin: string, contact: CreateEmergencyContactInput): Record<string, unknown>;
export declare function update_emergency_contact_variables(vin: string, contact: UpdateEmergencyContactInput): Record<string, unknown>;
export declare function delete_emergency_contact_variables(vin: string, emergency_contact_id: string): Record<string, unknown>;
export declare function driver_invites_variables(vin: string): Record<string, unknown>;
export declare function invite_driver_variables(config?: DriverInviteInput | UnsetType | null): Record<string, unknown>;
export declare function driver_invite_action_variables(config?: DriverInviteActionInput | UnsetType | null): Record<string, unknown>;
export declare function delete_driver_variables(invite_id: string): Record<string, unknown>;
export declare function update_driver_variables(config: UpdateDriverInput): Record<string, unknown>;
export declare function owner_invite_action_variables(config?: OwnerInviteActionInput | UnsetType | null): Record<string, unknown>;
export declare function create_rsa_link_variables(vin: string): Record<string, unknown>;
export declare function create_emergency_contact_input(value: CreateEmergencyContactInput): Record<string, unknown>;
export declare function update_emergency_contact_input(value: UpdateEmergencyContactInput): Record<string, unknown>;
export declare function driver_invite_input(value: DriverInviteInput): Record<string, unknown>;
export declare function driver_invite_action_input(value: DriverInviteActionInput): Record<string, unknown>;
export declare function update_driver_input(value: UpdateDriverInput): Record<string, unknown>;
export declare function owner_invite_action_input(value: OwnerInviteActionInput): Record<string, unknown>;
export declare function _optional_enum(value: $.EnumValue | UnsetType | null): unknown;
export declare function _optional_input(value: any | UnsetType | null, serializer: ((arg0: any) => Record<string, unknown>)): unknown;
