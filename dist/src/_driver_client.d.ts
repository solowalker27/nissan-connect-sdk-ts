import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { CreateEmergencyContactInput, DriverInviteActionInput, DriverInviteInput, OwnerInviteActionInput, UpdateDriverInput, UpdateEmergencyContactInput, create_emergency_contact_variables, create_rsa_link_variables, delete_driver_variables, delete_emergency_contact_variables, driver_invite_action_variables, driver_invites_variables, emergency_contacts_variables, invite_driver_variables, owner_invite_action_variables, update_driver_variables, update_emergency_contact_variables } from "./driver_inputs";
export { CreateEmergencyContactInput, DriverInviteActionInput, DriverInviteInput, OwnerInviteActionInput, UpdateDriverInput, UpdateEmergencyContactInput, create_emergency_contact_variables, create_rsa_link_variables, delete_driver_variables, delete_emergency_contact_variables, driver_invite_action_variables, driver_invites_variables, emergency_contacts_variables, invite_driver_variables, owner_invite_action_variables, update_driver_variables, update_emergency_contact_variables };
import { CreateEmergencyContactResult, CreateRSALinkResult, DeleteDriverResult, DeleteEmergencyContactResult, DriverInviteActionResult, DriverInvitesResult, EmergencyContactsResult, InviteDriverResult, OwnerInviteActionResult, UpdateDriverResult, UpdateEmergencyContactResult } from "./driver_models";
export { CreateEmergencyContactResult, CreateRSALinkResult, DeleteDriverResult, DeleteEmergencyContactResult, DriverInviteActionResult, DriverInvitesResult, EmergencyContactsResult, InviteDriverResult, OwnerInviteActionResult, UpdateDriverResult, UpdateEmergencyContactResult };
import { parse_create_emergency_contact, parse_create_rsa_link, parse_delete_driver, parse_delete_emergency_contact, parse_driver_invite_action, parse_driver_invites, parse_emergency_contacts, parse_invite_driver, parse_owner_invite_action, parse_update_driver, parse_update_emergency_contact } from "./driver_parsing";
export { parse_create_emergency_contact, parse_create_rsa_link, parse_delete_driver, parse_delete_emergency_contact, parse_driver_invite_action, parse_driver_invites, parse_emergency_contacts, parse_invite_driver, parse_owner_invite_action, parse_update_driver, parse_update_emergency_contact };
import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };
declare const _DriverClientMixin_base: any;
/** Translated upstream _DriverClientMixin. */
export declare class _DriverClientMixin extends _DriverClientMixin_base {
    constructor(...__args: any[]);
    async_get_emergency_contacts(vin: string): Promise<EmergencyContactsResult | null>;
    async_create_emergency_contact(vin: string, contact: CreateEmergencyContactInput): Promise<CreateEmergencyContactResult | null>;
    async_update_emergency_contact(vin: string, contact: UpdateEmergencyContactInput): Promise<UpdateEmergencyContactResult | null>;
    async_delete_emergency_contact(vin: string, emergency_contact_id: string): Promise<DeleteEmergencyContactResult | null>;
    async_get_driver_invites(vin: string): Promise<DriverInvitesResult | null>;
    async_invite_driver(config?: DriverInviteInput | UnsetType | null): Promise<InviteDriverResult | null>;
    async_driver_invite_action(config?: DriverInviteActionInput | UnsetType | null): Promise<DriverInviteActionResult | null>;
    async_delete_driver(invite_id: string): Promise<DeleteDriverResult | null>;
    async_update_driver(config: UpdateDriverInput): Promise<UpdateDriverResult | null>;
    async_owner_invite_action(config?: OwnerInviteActionInput | UnsetType | null): Promise<OwnerInviteActionResult | null>;
    async_create_rsa_link(vin: string): Promise<CreateRSALinkResult | null>;
}
export interface _DriverClientMixin extends _NissanClientBase {
}
