// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const re = $.re;

const Mapping = $.Mapping;

const FrozenInstanceError = $.FrozenInstanceError;

const pytest = $.pytest;

import { Parser, _union_payload } from "./test_garage";

import { ResponseError } from "../src/exceptions";

import { PendingVehicle, UnselectedGarageResult } from "../src/garage_models";

import { parse_add_vehicle, parse_apc_agreement, parse_apc_document_url, parse_connected_terms_and_conditions_by_vin, parse_create_apc_agreement, parse_delete_vehicle, parse_ncar_icar_add_vehicle, parse_onboarding_features, parse_ownership_status, parse_pending_vehicles, parse_update_apc_agreement, parse_update_vehicle, parse_update_vehicle_manual_mileage, parse_update_vehicle_nickname, parse_upload_ownership_verification } from "../src/garage_parsing";

/** Translated upstream test_union_parsers_preserve_unselected_typenames. */
export function test_union_parsers_preserve_unselected_typenames(...__args: any[]): any {
let {"parser": parser, "root_field": root_field, "typename": typename} = $.bind(__args, ["parser", "root_field", "typename"], {}, [], null, null);
$.assert(($.eq($.call(parser, [$.call(_union_payload, [root_field, typename, {}], null)], null), $.call(UnselectedGarageResult, [typename], null))), "test_garage_part_03.py:71: parser(_union_payload(root_field, typename, {})) == UnselectedGarageResult(typename)");
}

/** Translated upstream test_garage_parsers_reject_malformed_responses. */
export function test_garage_parsers_reject_malformed_responses(...__args: any[]): any {
let {"parser": parser, "payload": payload, "message": message} = $.bind(__args, ["parser", "payload", "message"], {}, [], null, null);
$.raises(ResponseError, $.call($.attr(re, "escape"), [message], null), () => {
$.call(parser, [payload], null);
});
}

/** Translated upstream test_garage_models_are_frozen. */
export function test_garage_models_are_frozen(...__args: any[]): any {
let vehicle;
let {} = $.bind(__args, [], {}, [], null, null);
vehicle = $.call(PendingVehicle, ["VIN", null, null, null, null, null], null);
$.raises(FrozenInstanceError, null, () => {
vehicle["vin"] = "OTHER";
});
}

$.register("test_garage_part_03.py::test_union_parsers_preserve_unselected_typenames", test_union_parsers_preserve_unselected_typenames, [[["parser", "root_field", "typename"], [[parse_add_vehicle, "addVehicle", "VINAlreadyExistsInYourGarageError"], [parse_delete_vehicle, "deleteVehicle", "FutureResult"], [parse_ncar_icar_add_vehicle, "ncarIcarAddVehicle", "InvalidVINError"], [parse_connected_terms_and_conditions_by_vin, "connectedTermsAndConditionsByVIN", "FutureResult"], [parse_update_vehicle, "updateVehicle", "RequiresAtLeastOneArgumentError"], [parse_update_vehicle_manual_mileage, "updateVehicle", "UpdateVehicleInvalidNicknameError"], [parse_update_vehicle_nickname, "updateVehicle", "UpdateVehicleNicknameExcessCharactersError"], [parse_upload_ownership_verification, "uploadOwnershipVerification", "FutureResult"]]]]);

$.register("test_garage_part_03.py::test_garage_parsers_reject_malformed_responses", test_garage_parsers_reject_malformed_responses, [[["parser", "payload", "message"], [[parse_add_vehicle, Object.assign({}, {["addVehicle"]: {}}), "addVehicle.__typename is not a string"], [parse_delete_vehicle, $.call(_union_payload, ["deleteVehicle", "DeleteVehicleError", Object.assign({}, {["message"]: 500})], null), "deleteVehicle.message is not a string"], [parse_ncar_icar_add_vehicle, $.call(_union_payload, ["ncarIcarAddVehicle", "AddVehicleSuccessResponse", Object.assign({}, {["vin"]: null})], null), "ncarIcarAddVehicle.vin is not a string"], [parse_pending_vehicles, Object.assign({}, {["pendingVehicles"]: "not-a-list"}), "pendingVehicles is not a list"], [parse_pending_vehicles, Object.assign({}, {["pendingVehicles"]: [Object.assign({}, {["__typename"]: "PendingVehicle"}, {["vin"]: 7})]}), "pendingVehicles[0].vin is not a string"], [parse_ownership_status, Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["ownershipStatus"]: Object.assign({}, {["__typename"]: "OwnershipStatus"}, {["isSignedIn"]: "yes"})})}), "vehicle.ownershipStatus.isSignedIn is not a boolean"], [parse_apc_agreement, Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["apcAgreement"]: Object.assign({}, {["__typename"]: "APCAgreement"}, {["optIn"]: true})})}), "vehicle.apcAgreement.optIn is not a string"], [parse_apc_document_url, Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["apcAgreement"]: Object.assign({}, {["__typename"]: "APCAgreement"}, {["documentURL"]: 3})})}), "vehicle.apcAgreement.documentURL is not a string"], [parse_create_apc_agreement, Object.assign({}, {["createAPCAgreement"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: "yes"})}), "createAPCAgreement.success is not a boolean"], [parse_update_apc_agreement, Object.assign({}, {["updateAPCAgreement"]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: 1})}), "updateAPCAgreement.success is not a boolean"], [parse_connected_terms_and_conditions_by_vin, $.call(_union_payload, ["connectedTermsAndConditionsByVIN", "TermsAndConditionsResponse", Object.assign({}, {["title"]: 1})], null), "connectedTermsAndConditionsByVIN.title is not a string"], [parse_onboarding_features, Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["onboardingFeatures"]: [Object.assign({}, {["__typename"]: "OnboardingFeature"}, {["position"]: true})]})}), "vehicle.onboardingFeatures[0].position is not an integer"], [parse_update_vehicle, $.call(_union_payload, ["updateVehicle", "UpdateVehicleSuccessResponse", Object.assign({}, {["licensePlate"]: 1})], null), "updateVehicle.licensePlate is not a string"], [parse_update_vehicle_manual_mileage, $.call(_union_payload, ["updateVehicle", "UpdateVehicleSuccessResponse", Object.assign({}, {["manualMileage"]: 12345})], null), "updateVehicle.manualMileage is not a string"], [parse_update_vehicle_nickname, $.call(_union_payload, ["updateVehicle", "UpdateVehicleSuccessResponse", Object.assign({}, {["nickname"]: null})], null), "updateVehicle.nickname is not a string"], [parse_upload_ownership_verification, $.call(_union_payload, ["uploadOwnershipVerification", "UploadOwnershipVerificationSuccess", Object.assign({}, {["caseNumber"]: 1})], null), "uploadOwnershipVerification.caseNumber is not a string"]]]]);

$.register("test_garage_part_03.py::test_garage_models_are_frozen", test_garage_models_are_frozen, []);
