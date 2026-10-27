import { _NissanClientBase } from "./_client_base";
export { _NissanClientBase };
import { NcarIcarRegisterAccountInput, add_vehicle_variables, apc_agreement_variables, apc_document_url_variables, connected_terms_and_conditions_by_vin_variables, create_apc_agreement_variables, delete_vehicle_variables, ncar_icar_add_vehicle_variables, onboarding_features_variables, ownership_status_variables, pending_vehicles_variables, update_apc_agreement_variables, update_vehicle_manual_mileage_variables, update_vehicle_nickname_variables, update_vehicle_variables, upload_ownership_verification_variables } from "./garage_inputs";
export { NcarIcarRegisterAccountInput, add_vehicle_variables, apc_agreement_variables, apc_document_url_variables, connected_terms_and_conditions_by_vin_variables, create_apc_agreement_variables, delete_vehicle_variables, ncar_icar_add_vehicle_variables, onboarding_features_variables, ownership_status_variables, pending_vehicles_variables, update_apc_agreement_variables, update_vehicle_manual_mileage_variables, update_vehicle_nickname_variables, update_vehicle_variables, upload_ownership_verification_variables };
import { AddVehicleResult, APCAgreement, APCAgreementMutationResult, APCDocument, ConnectedTermsAndConditionsResult, DeleteVehicleResult, NcarIcarAddVehicleResult, OnboardingFeature, OwnershipStatus, PendingVehicle, UpdateVehicleManualMileageResult, UpdateVehicleNicknameResult, UpdateVehicleResult, UploadOwnershipVerificationResult, VehicleHologram } from "./garage_models";
export { AddVehicleResult, APCAgreement, APCAgreementMutationResult, APCDocument, ConnectedTermsAndConditionsResult, DeleteVehicleResult, NcarIcarAddVehicleResult, OnboardingFeature, OwnershipStatus, PendingVehicle, UpdateVehicleManualMileageResult, UpdateVehicleNicknameResult, UpdateVehicleResult, UploadOwnershipVerificationResult, VehicleHologram };
import { parse_add_vehicle, parse_apc_agreement, parse_apc_document_url, parse_connected_terms_and_conditions_by_vin, parse_create_apc_agreement, parse_delete_vehicle, parse_ncar_icar_add_vehicle, parse_onboarding_features, parse_ownership_status, parse_pending_vehicles, parse_update_apc_agreement, parse_update_vehicle, parse_update_vehicle_manual_mileage, parse_update_vehicle_nickname, parse_upload_ownership_verification } from "./garage_parsing";
export { parse_add_vehicle, parse_apc_agreement, parse_apc_document_url, parse_connected_terms_and_conditions_by_vin, parse_create_apc_agreement, parse_delete_vehicle, parse_ncar_icar_add_vehicle, parse_onboarding_features, parse_ownership_status, parse_pending_vehicles, parse_update_apc_agreement, parse_update_vehicle, parse_update_vehicle_manual_mileage, parse_update_vehicle_nickname, parse_upload_ownership_verification };
import { UNSET, UnsetType } from "./graphql_input";
export { UNSET, UnsetType };
import { Vehicle } from "./models";
export { Vehicle };
import { parse_vehicles } from "./parsing";
export { parse_vehicles };
import { VehicleWithCapabilities } from "./wearable_models";
export { VehicleWithCapabilities };
import { parse_vehicles_with_capabilities } from "./wearable_parsing";
export { parse_vehicles_with_capabilities };
declare const _GarageClientMixin_base: any;
/** Translated upstream _GarageClientMixin. */
export declare class _GarageClientMixin extends _GarageClientMixin_base {
    constructor(...__args: any[]);
    async_get_vehicles(): Promise<ReadonlyArray<Vehicle>>;
    async_get_vehicles_with_capabilities(): Promise<ReadonlyArray<VehicleWithCapabilities | null> | null>;
    async_add_vehicle(vin: string, terms_and_conditions_accepted: boolean): Promise<AddVehicleResult | null>;
    async_delete_vehicle(vin: string): Promise<DeleteVehicleResult | null>;
    async_add_ncar_icar_vehicle(terms_and_conditions_accepted: boolean, guid: string, options?: {
        account?: NcarIcarRegisterAccountInput | UnsetType | null;
    }): Promise<NcarIcarAddVehicleResult | null>;
    async_get_pending_vehicles(): Promise<ReadonlyArray<PendingVehicle | null> | null>;
    async_get_ownership_status(vin: string): Promise<OwnershipStatus | null>;
    async_get_apc_agreement(vin: string): Promise<APCAgreement | null>;
    async_get_apc_document_url(vin: string): Promise<APCDocument | null>;
    async_create_apc_agreement(vin: string, opt_in: boolean): Promise<APCAgreementMutationResult | null>;
    async_update_apc_agreement(vin: string, opt_in: boolean): Promise<APCAgreementMutationResult | null>;
    async_get_connected_terms_and_conditions_by_vin(vin: string): Promise<ConnectedTermsAndConditionsResult | null>;
    async_get_onboarding_features(vin: string): Promise<ReadonlyArray<OnboardingFeature | null> | null>;
    async_update_vehicle(vin: string, options?: {
        license_plate?: string | UnsetType | null;
        hologram?: VehicleHologram | UnsetType | null;
    }): Promise<UpdateVehicleResult | null>;
    async_update_vehicle_manual_mileage(vin: string, options?: {
        manual_mileage?: number | UnsetType | null;
    }): Promise<UpdateVehicleManualMileageResult | null>;
    async_update_vehicle_nickname(vin: string, nickname: string): Promise<UpdateVehicleNicknameResult | null>;
    async_upload_ownership_verification(vin: string, filename: string, attachment: string, opt_in_sms: boolean): Promise<UploadOwnershipVerificationResult | null>;
}
export interface _GarageClientMixin extends _NissanClientBase {
}
