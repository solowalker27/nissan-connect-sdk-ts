// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const Callable = $.Callable;
const Mapping = $.Mapping;

import { operations } from "../src/index";

export let Parser = Callable;

export let EXPECTED_OPERATIONS = Object.assign({}, {["AddVehicle"]: [$.attr(operations, "ADD_VEHICLE"), $.attr(operations, "ADD_VEHICLE_OPERATION_ID"), "0b5b92ab96ca9516d63423c56fa08bc01bcdcf15fb644e2907a3aae7253262c0"]}, {["DeleteVehicle"]: [$.attr(operations, "DELETE_VEHICLE"), $.attr(operations, "DELETE_VEHICLE_OPERATION_ID"), "d7b9f78e719fd1d5809ad60ddf083c1bebb87b5825fc7f6f7a75fee25b7b066e"]}, {["NcarIcarAddVehicle"]: [$.attr(operations, "NCAR_ICAR_ADD_VEHICLE"), $.attr(operations, "NCAR_ICAR_ADD_VEHICLE_OPERATION_ID"), "2f1580533da2b2669ebd416ef4f63d3e66dba01761849c352d03ed8b9bb6ba8a"]}, {["PendingVehicles"]: [$.attr(operations, "PENDING_VEHICLES"), $.attr(operations, "PENDING_VEHICLES_OPERATION_ID"), "e41202c3f1905f5ee4e93b9760b88c9e0e574d60ff553af4fb4bd918e2e58f25"]}, {["OwnershipStatus"]: [$.attr(operations, "OWNERSHIP_STATUS"), $.attr(operations, "OWNERSHIP_STATUS_OPERATION_ID"), "6cff2455b8b5d0d9b9589de1dcc16adaf591b4c38137ffb4dbb88669c2f6ab65"]}, {["APCAgreement"]: [$.attr(operations, "APC_AGREEMENT"), $.attr(operations, "APC_AGREEMENT_OPERATION_ID"), "e18952fd53569fd51e8891599c90b06157805dcafe21853939fb814a7c628a61"]}, {["APCDocumentURL"]: [$.attr(operations, "APC_DOCUMENT_URL"), $.attr(operations, "APC_DOCUMENT_URL_OPERATION_ID"), "250c59bfc322084506f261759f5ab9bc53244f76f5bcae8e5adf7c09e245ca5c"]}, {["CreateAPCAgreement"]: [$.attr(operations, "CREATE_APC_AGREEMENT"), $.attr(operations, "CREATE_APC_AGREEMENT_OPERATION_ID"), "8e54166633dcbcddb8671492d93c7ec82a97a95d78d122ccd8e5512c87076d0e"]}, {["UpdateAPCAgreement"]: [$.attr(operations, "UPDATE_APC_AGREEMENT"), $.attr(operations, "UPDATE_APC_AGREEMENT_OPERATION_ID"), "abb4343cde0806b62e956b6184f7cba008987d8b9305975c3ec60243e59237e3"]}, {["ConnectedTermsAndConditionsByVIN"]: [$.attr(operations, "CONNECTED_TERMS_AND_CONDITIONS_BY_VIN"), $.attr(operations, "CONNECTED_TERMS_AND_CONDITIONS_BY_VIN_OPERATION_ID"), "085f39d8b511343fc60438624974a97c89c7d24d94ed1468b98e1824e96a0c06"]}, {["OnboardingFeatures"]: [$.attr(operations, "ONBOARDING_FEATURES"), $.attr(operations, "ONBOARDING_FEATURES_OPERATION_ID"), "70dff9f83252dce0973a7b2461f3581b3a80944e850bcdd63e81447fbd9e702b"]}, {["UpdateVehicle"]: [$.attr(operations, "UPDATE_VEHICLE"), $.attr(operations, "UPDATE_VEHICLE_OPERATION_ID"), "1bb299061736d5b8e14d1814bb5c967af7748c41de29443b84a73719ac272ce8"]}, {["UpdateVehicleManualMileage"]: [$.attr(operations, "UPDATE_VEHICLE_MANUAL_MILEAGE"), $.attr(operations, "UPDATE_VEHICLE_MANUAL_MILEAGE_OPERATION_ID"), "177a7dbf7956abdd7d1382d8aec8c73ddaf043d21ea9de05d481a846cb2058fe"]}, {["UpdateVehicleNickname"]: [$.attr(operations, "UPDATE_VEHICLE_NICKNAME"), $.attr(operations, "UPDATE_VEHICLE_NICKNAME_OPERATION_ID"), "62444ee58449f5f4ccc5a6881e9069b89e7e717293ffa8de2f66b8981562bb81"]}, {["UploadOwnershipVerification"]: [$.attr(operations, "UPLOAD_OWNERSHIP_VERIFICATION"), $.attr(operations, "UPLOAD_OWNERSHIP_VERIFICATION_OPERATION_ID"), "9b24a6900530b63e6117409728b3114e8b0c8875ec21d023a7200f6b739d91ba"]});

/** Translated upstream _union_payload. */
export function _union_payload(...__args: any[]): any {
let {"root_field": root_field, "typename": typename, "fields": fields} = $.bind(__args, ["root_field", "typename", "fields"], {}, [], null, null);
return Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: typename}, fields)});
}
