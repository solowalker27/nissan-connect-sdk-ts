"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports._DriverClientMixin = exports.UnsetType = exports.UNSET = exports.parse_update_emergency_contact = exports.parse_update_driver = exports.parse_owner_invite_action = exports.parse_invite_driver = exports.parse_emergency_contacts = exports.parse_driver_invites = exports.parse_driver_invite_action = exports.parse_delete_emergency_contact = exports.parse_delete_driver = exports.parse_create_rsa_link = exports.parse_create_emergency_contact = exports.UpdateEmergencyContactResult = exports.UpdateDriverResult = exports.OwnerInviteActionResult = exports.InviteDriverResult = exports.EmergencyContactsResult = exports.DriverInvitesResult = exports.DriverInviteActionResult = exports.DeleteEmergencyContactResult = exports.DeleteDriverResult = exports.CreateRSALinkResult = exports.CreateEmergencyContactResult = exports.update_emergency_contact_variables = exports.update_driver_variables = exports.owner_invite_action_variables = exports.invite_driver_variables = exports.emergency_contacts_variables = exports.driver_invites_variables = exports.driver_invite_action_variables = exports.delete_emergency_contact_variables = exports.delete_driver_variables = exports.create_rsa_link_variables = exports.create_emergency_contact_variables = exports.UpdateEmergencyContactInput = exports.UpdateDriverInput = exports.OwnerInviteActionInput = exports.DriverInviteInput = exports.DriverInviteActionInput = exports.CreateEmergencyContactInput = exports._NissanClientBase = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const operations = __importStar(require("./operations"));
const _client_base_1 = require("./_client_base");
Object.defineProperty(exports, "_NissanClientBase", { enumerable: true, get: function () { return _client_base_1._NissanClientBase; } });
const driver_inputs_1 = require("./driver_inputs");
Object.defineProperty(exports, "CreateEmergencyContactInput", { enumerable: true, get: function () { return driver_inputs_1.CreateEmergencyContactInput; } });
Object.defineProperty(exports, "DriverInviteActionInput", { enumerable: true, get: function () { return driver_inputs_1.DriverInviteActionInput; } });
Object.defineProperty(exports, "DriverInviteInput", { enumerable: true, get: function () { return driver_inputs_1.DriverInviteInput; } });
Object.defineProperty(exports, "OwnerInviteActionInput", { enumerable: true, get: function () { return driver_inputs_1.OwnerInviteActionInput; } });
Object.defineProperty(exports, "UpdateDriverInput", { enumerable: true, get: function () { return driver_inputs_1.UpdateDriverInput; } });
Object.defineProperty(exports, "UpdateEmergencyContactInput", { enumerable: true, get: function () { return driver_inputs_1.UpdateEmergencyContactInput; } });
Object.defineProperty(exports, "create_emergency_contact_variables", { enumerable: true, get: function () { return driver_inputs_1.create_emergency_contact_variables; } });
Object.defineProperty(exports, "create_rsa_link_variables", { enumerable: true, get: function () { return driver_inputs_1.create_rsa_link_variables; } });
Object.defineProperty(exports, "delete_driver_variables", { enumerable: true, get: function () { return driver_inputs_1.delete_driver_variables; } });
Object.defineProperty(exports, "delete_emergency_contact_variables", { enumerable: true, get: function () { return driver_inputs_1.delete_emergency_contact_variables; } });
Object.defineProperty(exports, "driver_invite_action_variables", { enumerable: true, get: function () { return driver_inputs_1.driver_invite_action_variables; } });
Object.defineProperty(exports, "driver_invites_variables", { enumerable: true, get: function () { return driver_inputs_1.driver_invites_variables; } });
Object.defineProperty(exports, "emergency_contacts_variables", { enumerable: true, get: function () { return driver_inputs_1.emergency_contacts_variables; } });
Object.defineProperty(exports, "invite_driver_variables", { enumerable: true, get: function () { return driver_inputs_1.invite_driver_variables; } });
Object.defineProperty(exports, "owner_invite_action_variables", { enumerable: true, get: function () { return driver_inputs_1.owner_invite_action_variables; } });
Object.defineProperty(exports, "update_driver_variables", { enumerable: true, get: function () { return driver_inputs_1.update_driver_variables; } });
Object.defineProperty(exports, "update_emergency_contact_variables", { enumerable: true, get: function () { return driver_inputs_1.update_emergency_contact_variables; } });
const driver_models_1 = require("./driver_models");
Object.defineProperty(exports, "CreateEmergencyContactResult", { enumerable: true, get: function () { return driver_models_1.CreateEmergencyContactResult; } });
Object.defineProperty(exports, "CreateRSALinkResult", { enumerable: true, get: function () { return driver_models_1.CreateRSALinkResult; } });
Object.defineProperty(exports, "DeleteDriverResult", { enumerable: true, get: function () { return driver_models_1.DeleteDriverResult; } });
Object.defineProperty(exports, "DeleteEmergencyContactResult", { enumerable: true, get: function () { return driver_models_1.DeleteEmergencyContactResult; } });
Object.defineProperty(exports, "DriverInviteActionResult", { enumerable: true, get: function () { return driver_models_1.DriverInviteActionResult; } });
Object.defineProperty(exports, "DriverInvitesResult", { enumerable: true, get: function () { return driver_models_1.DriverInvitesResult; } });
Object.defineProperty(exports, "EmergencyContactsResult", { enumerable: true, get: function () { return driver_models_1.EmergencyContactsResult; } });
Object.defineProperty(exports, "InviteDriverResult", { enumerable: true, get: function () { return driver_models_1.InviteDriverResult; } });
Object.defineProperty(exports, "OwnerInviteActionResult", { enumerable: true, get: function () { return driver_models_1.OwnerInviteActionResult; } });
Object.defineProperty(exports, "UpdateDriverResult", { enumerable: true, get: function () { return driver_models_1.UpdateDriverResult; } });
Object.defineProperty(exports, "UpdateEmergencyContactResult", { enumerable: true, get: function () { return driver_models_1.UpdateEmergencyContactResult; } });
const driver_parsing_1 = require("./driver_parsing");
Object.defineProperty(exports, "parse_create_emergency_contact", { enumerable: true, get: function () { return driver_parsing_1.parse_create_emergency_contact; } });
Object.defineProperty(exports, "parse_create_rsa_link", { enumerable: true, get: function () { return driver_parsing_1.parse_create_rsa_link; } });
Object.defineProperty(exports, "parse_delete_driver", { enumerable: true, get: function () { return driver_parsing_1.parse_delete_driver; } });
Object.defineProperty(exports, "parse_delete_emergency_contact", { enumerable: true, get: function () { return driver_parsing_1.parse_delete_emergency_contact; } });
Object.defineProperty(exports, "parse_driver_invite_action", { enumerable: true, get: function () { return driver_parsing_1.parse_driver_invite_action; } });
Object.defineProperty(exports, "parse_driver_invites", { enumerable: true, get: function () { return driver_parsing_1.parse_driver_invites; } });
Object.defineProperty(exports, "parse_emergency_contacts", { enumerable: true, get: function () { return driver_parsing_1.parse_emergency_contacts; } });
Object.defineProperty(exports, "parse_invite_driver", { enumerable: true, get: function () { return driver_parsing_1.parse_invite_driver; } });
Object.defineProperty(exports, "parse_owner_invite_action", { enumerable: true, get: function () { return driver_parsing_1.parse_owner_invite_action; } });
Object.defineProperty(exports, "parse_update_driver", { enumerable: true, get: function () { return driver_parsing_1.parse_update_driver; } });
Object.defineProperty(exports, "parse_update_emergency_contact", { enumerable: true, get: function () { return driver_parsing_1.parse_update_emergency_contact; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
/** Translated upstream _DriverClientMixin. */
class _DriverClientMixin extends _runtime_1.py.mix(_client_base_1._NissanClientBase) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, _DriverClientMixin, __args); }
    /** Return emergency contacts configured for a vehicle. */
    async async_get_emergency_contacts(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return emergency contacts configured for a vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["EmergencyContacts", _runtime_1.py.attr(operations, "EMERGENCY_CONTACTS"), _runtime_1.py.call(driver_inputs_1.emergency_contacts_variables, [vin], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_emergency_contacts, [data], null);
    }
    /** Create an emergency contact for a vehicle. */
    async async_create_emergency_contact(...__args) {
        let data;
        let { "vin": vin, "contact": contact } = _runtime_1.py.bind(__args, ["vin", "contact"], {}, [], null, null);
        /** Create an emergency contact for a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreateEmergencyContact", _runtime_1.py.attr(operations, "CREATE_EMERGENCY_CONTACT"), _runtime_1.py.call(driver_inputs_1.create_emergency_contact_variables, [vin, contact], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_create_emergency_contact, [data], null);
    }
    /** Update an emergency contact configured for a vehicle. */
    async async_update_emergency_contact(...__args) {
        let data;
        let { "vin": vin, "contact": contact } = _runtime_1.py.bind(__args, ["vin", "contact"], {}, [], null, null);
        /** Update an emergency contact configured for a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateEmergencyContact", _runtime_1.py.attr(operations, "UPDATE_EMERGENCY_CONTACT"), _runtime_1.py.call(driver_inputs_1.update_emergency_contact_variables, [vin, contact], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_update_emergency_contact, [data], null);
    }
    /** Delete an emergency contact configured for a vehicle. */
    async async_delete_emergency_contact(...__args) {
        let data;
        let { "vin": vin, "emergency_contact_id": emergency_contact_id } = _runtime_1.py.bind(__args, ["vin", "emergency_contact_id"], {}, [], null, null);
        /** Delete an emergency contact configured for a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DeleteEmergencyContact", _runtime_1.py.attr(operations, "DELETE_EMERGENCY_CONTACT"), _runtime_1.py.call(driver_inputs_1.delete_emergency_contact_variables, [vin, emergency_contact_id], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_delete_emergency_contact, [data], null);
    }
    /** Return shared-driver invitations for a vehicle. */
    async async_get_driver_invites(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Return shared-driver invitations for a vehicle. */
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DriverInvites", _runtime_1.py.attr(operations, "DRIVER_INVITES"), _runtime_1.py.call(driver_inputs_1.driver_invites_variables, [vin], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_driver_invites, [data], null);
    }
    /** Invite another account to drive a vehicle with selected permissions. */
    async async_invite_driver(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], { "config": graphql_input_1.UNSET }, [], null, null);
        /** Invite another account to drive a vehicle with selected permissions. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["InviteDriver", _runtime_1.py.attr(operations, "INVITE_DRIVER"), _runtime_1.py.call(driver_inputs_1.invite_driver_variables, [config], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_invite_driver, [data], null);
    }
    /** Accept, decline, or invalidate a received driver invitation. */
    async async_driver_invite_action(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], { "config": graphql_input_1.UNSET }, [], null, null);
        /** Accept, decline, or invalidate a received driver invitation. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DriverInviteAction", _runtime_1.py.attr(operations, "DRIVER_INVITE_ACTION"), _runtime_1.py.call(driver_inputs_1.driver_invite_action_variables, [config], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_driver_invite_action, [data], null);
    }
    /** Remove a shared driver or invitation from the account. */
    async async_delete_driver(...__args) {
        let data;
        let { "invite_id": invite_id } = _runtime_1.py.bind(__args, ["invite_id"], {}, [], null, null);
        /** Remove a shared driver or invitation from the account. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["DeleteDriver", _runtime_1.py.attr(operations, "DELETE_DRIVER"), _runtime_1.py.call(driver_inputs_1.delete_driver_variables, [invite_id], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_delete_driver, [data], null);
    }
    /** Replace a shared driver's permissions and notification settings. */
    async async_update_driver(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
        /** Replace a shared driver's permissions and notification settings. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["UpdateDriver", _runtime_1.py.attr(operations, "UPDATE_DRIVER"), _runtime_1.py.call(driver_inputs_1.update_driver_variables, [config], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_update_driver, [data], null);
    }
    /** Resend or cancel a shared-driver invitation as the vehicle owner. */
    async async_owner_invite_action(...__args) {
        let data;
        let { "config": config } = _runtime_1.py.bind(__args, ["config"], { "config": graphql_input_1.UNSET }, [], null, null);
        /** Resend or cancel a shared-driver invitation as the vehicle owner. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["OwnerInviteAction", _runtime_1.py.attr(operations, "OWNER_INVITE_ACTION"), _runtime_1.py.call(driver_inputs_1.owner_invite_action_variables, [config], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_owner_invite_action, [data], null);
    }
    /** Create the roadside-assistance link associated with a vehicle. */
    async async_create_rsa_link(...__args) {
        let data;
        let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
        /** Create the roadside-assistance link associated with a vehicle. */
        _runtime_1.py.call(_runtime_1.py.attr(this, "_ensure_write_allowed"), [], null);
        data = (await _runtime_1.py.call(_runtime_1.py.attr(_runtime_1.py.attr(this, "_transport"), "async_graphql"), ["CreateRSALink", _runtime_1.py.attr(operations, "CREATE_RSA_LINK"), _runtime_1.py.call(driver_inputs_1.create_rsa_link_variables, [vin], null)], null));
        return _runtime_1.py.call(driver_parsing_1.parse_create_rsa_link, [data], null);
    }
}
exports._DriverClientMixin = _DriverClientMixin;
_runtime_1.py.classType(_DriverClientMixin);
//# sourceMappingURL=_driver_client.js.map