// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const pytest = $.pytest;

import { Parser, _union_payload } from "./test_garage";

import { ResponseError } from "../src/exceptions";

import { APCAgreementMutationResult, InvalidVINError, NonConnectedVehicleResponse, OnboardingFeature, OnboardingFeatureImageType, RegisterGeneralError, TermsAndConditionsResponse, UpdateVehicleGeneralError, UpdateVehicleHologramInvalidLengthError, UpdateVehicleInvalidLicensePlateError, UpdateVehicleInvalidMileageError, UpdateVehicleManualMileageSuccess, UpdateVehicleNicknameMalformedError, UpdateVehicleNicknameSuccess, UpdateVehicleSuccess, UploadOwnershipVerificationSuccess, ValidVINResponse, VehicleHologram, VINNotFoundError } from "../src/garage_models";

import { parse_add_vehicle, parse_apc_agreement, parse_apc_document_url, parse_connected_terms_and_conditions_by_vin, parse_create_apc_agreement, parse_delete_vehicle, parse_ncar_icar_add_vehicle, parse_onboarding_features, parse_ownership_status, parse_pending_vehicles, parse_update_apc_agreement, parse_update_vehicle, parse_update_vehicle_manual_mileage, parse_update_vehicle_nickname, parse_upload_ownership_verification } from "../src/garage_parsing";

/** Translated upstream test_parse_apc_mutations_preserve_service_success_semantics. */
export function test_parse_apc_mutations_preserve_service_success_semantics(...__args: any[]): any {
let {"parser": parser, "root_field": root_field, "success": success} = $.bind(__args, ["parser", "root_field", "success"], {}, [], null, null);
$.assertEqual($.call(parser, [Object.assign({}, {[root_field]: Object.assign({}, {["__typename"]: "ResponseStatus"}, {["success"]: success})})], null), $.call(APCAgreementMutationResult, [success], null), "test_garage_part_02.py:63: parser({root_field: {'__typename': 'ResponseStatus', 'success': success}}) == APCAgreementMutationResult(success)");
}

/** Translated upstream test_parse_connected_terms_maps_every_service_outcome. */
export function test_parse_connected_terms_maps_every_service_outcome(...__args: any[]): any {
let {"typename": typename, "fields": fields, "expected": expected} = $.bind(__args, ["typename", "fields", "expected"], {}, [], null, null);
$.assertEqual($.call(parse_connected_terms_and_conditions_by_vin, [$.call(_union_payload, ["connectedTermsAndConditionsByVIN", typename, fields], null)], null), expected, "test_garage_part_02.py:95: parse_connected_terms_and_conditions_by_vin(_union_payload('connectedTermsAndConditionsByVIN', typename, fields)) == expected");
}

/** Translated upstream test_parse_onboarding_features_preserves_lists_and_future_enums. */
export function test_parse_onboarding_features_preserves_lists_and_future_enums(...__args: any[]): any {
let {"raw_image_type": raw_image_type, "expected": expected} = $.bind(__args, ["raw_image_type", "expected"], {}, [], null, null);
$.assertEqual($.call(parse_onboarding_features, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["onboardingFeatures"]: [null, Object.assign({}, {["__typename"]: "OnboardingFeature"}, {["position"]: 2}, {["title"]: null}, {["body"]: "Body"}, {["imageType"]: raw_image_type})]})})], null), [null, $.call(OnboardingFeature, [2, null, "Body", expected], null)], "test_garage_part_02.py:118: parse_onboarding_features({'vehicle': {'__typename': 'AVK2Vehicle', 'onboardingFeatures': [None, {'__typename': 'OnboardingFeature', 'position': 2, 'title': None, 'body': 'Body', 'imageType': raw_image_type}]}}) == (None, OnboardingFeature(2, None, 'Body', expected))");
}

/** Translated upstream test_onboarding_features_distinguishes_null_and_empty_lists. */
export function test_onboarding_features_distinguishes_null_and_empty_lists(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert((($.call(parse_onboarding_features, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["onboardingFeatures"]: null})})], null) === null)), "test_garage_part_02.py:138: parse_onboarding_features({'vehicle': {'__typename': 'AVK2Vehicle', 'onboardingFeatures': None}}) is None");
$.assertEqual($.call(parse_onboarding_features, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["onboardingFeatures"]: []})})], null), [], "test_garage_part_02.py:149: parse_onboarding_features({'vehicle': {'__typename': 'AVK2Vehicle', 'onboardingFeatures': []}}) == ()");
}

/** Translated upstream test_parse_update_vehicle_success_preserves_nullable_fields_and_future_enum. */
export function test_parse_update_vehicle_success_preserves_nullable_fields_and_future_enum(...__args: any[]): any {
let {"raw_hologram": raw_hologram, "expected": expected} = $.bind(__args, ["raw_hologram", "expected"], {}, [], null, null);
$.assertEqual($.call(parse_update_vehicle, [$.call(_union_payload, ["updateVehicle", "UpdateVehicleSuccessResponse", Object.assign({}, {["licensePlate"]: null}, {["hologram"]: raw_hologram})], null)], null), $.call(UpdateVehicleSuccess, [null, expected], null), "test_garage_part_02.py:178: parse_update_vehicle(_union_payload('updateVehicle', 'UpdateVehicleSuccessResponse', {'licensePlate': None, 'hologram': raw_hologram})) == UpdateVehicleSuccess(None, expected)");
}

/** Translated upstream test_parse_update_vehicle_maps_every_error_outcome. */
export function test_parse_update_vehicle_maps_every_error_outcome(...__args: any[]): any {
let {"typename": typename, "expected": expected} = $.bind(__args, ["typename", "expected"], {}, [], null, null);
$.assertEqual($.call(parse_update_vehicle, [$.call(_union_payload, ["updateVehicle", typename, Object.assign({}, {["message"]: "error"})], null)], null), expected, "test_garage_part_02.py:207: parse_update_vehicle(_union_payload('updateVehicle', typename, {'message': 'error'})) == expected");
}

/** Translated upstream test_parse_manual_mileage_success_preserves_string_scalar_and_null. */
export function test_parse_manual_mileage_success_preserves_string_scalar_and_null(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_update_vehicle_manual_mileage, [$.call(_union_payload, ["updateVehicle", "UpdateVehicleSuccessResponse", Object.assign({}, {["manualMileage"]: "12345"})], null)], null), $.call(UpdateVehicleManualMileageSuccess, ["12345"], null), "test_garage_part_02.py:214: parse_update_vehicle_manual_mileage(_union_payload('updateVehicle', 'UpdateVehicleSuccessResponse', {'manualMileage': '12345'})) == UpdateVehicleManualMileageSuccess('12345')");
$.assertEqual($.call(parse_update_vehicle_manual_mileage, [$.call(_union_payload, ["updateVehicle", "UpdateVehicleSuccessResponse", Object.assign({}, {["manualMileage"]: null})], null)], null), $.call(UpdateVehicleManualMileageSuccess, [null], null), "test_garage_part_02.py:221: parse_update_vehicle_manual_mileage(_union_payload('updateVehicle', 'UpdateVehicleSuccessResponse', {'manualMileage': None})) == UpdateVehicleManualMileageSuccess(None)");
}

/** Translated upstream test_parse_manual_mileage_maps_every_error_outcome. */
export function test_parse_manual_mileage_maps_every_error_outcome(...__args: any[]): any {
let {"typename": typename, "expected": expected} = $.bind(__args, ["typename", "expected"], {}, [], null, null);
$.assertEqual($.call(parse_update_vehicle_manual_mileage, [$.call(_union_payload, ["updateVehicle", typename, Object.assign({}, {["message"]: "error"})], null)], null), expected, "test_garage_part_02.py:246: parse_update_vehicle_manual_mileage(_union_payload('updateVehicle', typename, {'message': 'error'})) == expected");
}

/** Translated upstream test_parse_nickname_success_matches_service_success_outcome. */
export function test_parse_nickname_success_matches_service_success_outcome(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assertEqual($.call(parse_update_vehicle_nickname, [$.call(_union_payload, ["updateVehicle", "UpdateVehicleSuccessResponse", Object.assign({}, {["nickname"]: "Ariya"})], null)], null), $.call(UpdateVehicleNicknameSuccess, ["Ariya"], null), "test_garage_part_02.py:255: parse_update_vehicle_nickname(_union_payload('updateVehicle', 'UpdateVehicleSuccessResponse', {'nickname': 'Ariya'})) == UpdateVehicleNicknameSuccess('Ariya')");
}

/** Translated upstream test_parse_nickname_maps_every_error_outcome. */
export function test_parse_nickname_maps_every_error_outcome(...__args: any[]): any {
let {"typename": typename, "expected": expected} = $.bind(__args, ["typename", "expected"], {}, [], null, null);
$.assertEqual($.call(parse_update_vehicle_nickname, [$.call(_union_payload, ["updateVehicle", typename, Object.assign({}, {["message"]: "error"})], null)], null), expected, "test_garage_part_02.py:280: parse_update_vehicle_nickname(_union_payload('updateVehicle', typename, {'message': 'error'})) == expected");
}

/** Translated upstream test_parse_ownership_verification_maps_every_service_outcome. */
export function test_parse_ownership_verification_maps_every_service_outcome(...__args: any[]): any {
let {"typename": typename, "fields": fields, "expected": expected} = $.bind(__args, ["typename", "fields", "expected"], {}, [], null, null);
$.assertEqual($.call(parse_upload_ownership_verification, [$.call(_union_payload, ["uploadOwnershipVerification", typename, fields], null)], null), expected, "test_garage_part_02.py:304: parse_upload_ownership_verification(_union_payload('uploadOwnershipVerification', typename, fields)) == expected");
}

/** Translated upstream test_garage_parsers_preserve_nullable_roots_and_reject_missing_roots. */
export function test_garage_parsers_preserve_nullable_roots_and_reject_missing_roots(...__args: any[]): any {
let {"parser": parser, "root_field": root_field} = $.bind(__args, ["parser", "root_field"], {}, [], null, null);
$.assert((($.call(parser, [Object.assign({}, {[root_field]: null})], null) === null)), "test_garage_part_02.py:336: parser({root_field: None}) is None");
$.raises(ResponseError, ("^" + $.str(root_field) + " is missing$"), () => {
$.call(parser, [{}], null);
});
}

$.register("test_garage_part_02.py::test_parse_apc_mutations_preserve_service_success_semantics", test_parse_apc_mutations_preserve_service_success_semantics, [[["parser", "root_field"], [[parse_create_apc_agreement, "createAPCAgreement"], [parse_update_apc_agreement, "updateAPCAgreement"]]], ["success", [true, false, null]]]);

$.register("test_garage_part_02.py::test_parse_connected_terms_maps_every_service_outcome", test_parse_connected_terms_maps_every_service_outcome, [[["typename", "fields", "expected"], [["TermsAndConditionsResponse", Object.assign({}, {["title"]: null}, {["body"]: "Terms"}, {["url"]: null}), $.call(TermsAndConditionsResponse, [null, "Terms", null], null)], ["InvalidVINError", Object.assign({}, {["message"]: "invalid"}), $.call(InvalidVINError, ["invalid"], null)], ["NonConnectedVehicleResponse", Object.assign({}, {["message"]: "not connected"}), $.call(NonConnectedVehicleResponse, ["not connected"], null)], ["ValidVINResponse", Object.assign({}, {["message"]: "valid"}), $.call(ValidVINResponse, ["valid"], null)]]]]);

$.register("test_garage_part_02.py::test_parse_onboarding_features_preserves_lists_and_future_enums", test_parse_onboarding_features_preserves_lists_and_future_enums, [[["raw_image_type", "expected"], [["INFO", $.attr(OnboardingFeatureImageType, "INFO")], ["TELEMATICS", $.attr(OnboardingFeatureImageType, "TELEMATICS")], ["NECN", $.attr(OnboardingFeatureImageType, "NECN")], ["V1G", $.attr(OnboardingFeatureImageType, "V1G")], ["FUTURE_IMAGE", $.attr(OnboardingFeatureImageType, "UNKNOWN_VALUE")], [null, null]]]]);

$.register("test_garage_part_02.py::test_onboarding_features_distinguishes_null_and_empty_lists", test_onboarding_features_distinguishes_null_and_empty_lists, []);

$.register("test_garage_part_02.py::test_parse_update_vehicle_success_preserves_nullable_fields_and_future_enum", test_parse_update_vehicle_success_preserves_nullable_fields_and_future_enum, [[["raw_hologram", "expected"], [["SINGLE_ZERO", $.attr(VehicleHologram, "SINGLE_ZERO")], ["DOUBLE_ZERO", $.attr(VehicleHologram, "DOUBLE_ZERO")], ["ONE", $.attr(VehicleHologram, "ONE")], ["TWO", $.attr(VehicleHologram, "TWO")], ["E", $.attr(VehicleHologram, "E")], ["FUTURE_HOLOGRAM", $.attr(VehicleHologram, "UNKNOWN_VALUE")], [null, null]]]]);

$.register("test_garage_part_02.py::test_parse_update_vehicle_maps_every_error_outcome", test_parse_update_vehicle_maps_every_error_outcome, [[["typename", "expected"], [["UpdateVehicleInvalidLicensePlateError", $.call(UpdateVehicleInvalidLicensePlateError, ["error"], null)], ["UpdateVehicleHologramInvalidLengthError", $.call(UpdateVehicleHologramInvalidLengthError, ["error"], null)], ["InvalidVINError", $.call(InvalidVINError, ["error"], null)], ["VINNotFoundError", $.call(VINNotFoundError, ["error"], null)], ["UpdateVehicleGeneralError", $.call(UpdateVehicleGeneralError, ["error"], null)]]]]);

$.register("test_garage_part_02.py::test_parse_manual_mileage_success_preserves_string_scalar_and_null", test_parse_manual_mileage_success_preserves_string_scalar_and_null, []);

$.register("test_garage_part_02.py::test_parse_manual_mileage_maps_every_error_outcome", test_parse_manual_mileage_maps_every_error_outcome, [[["typename", "expected"], [["UpdateVehicleInvalidMileageError", $.call(UpdateVehicleInvalidMileageError, ["error"], null)], ["InvalidVINError", $.call(InvalidVINError, ["error"], null)], ["VINNotFoundError", $.call(VINNotFoundError, ["error"], null)], ["UpdateVehicleGeneralError", $.call(UpdateVehicleGeneralError, ["error"], null)]]]]);

$.register("test_garage_part_02.py::test_parse_nickname_success_matches_service_success_outcome", test_parse_nickname_success_matches_service_success_outcome, []);

$.register("test_garage_part_02.py::test_parse_nickname_maps_every_error_outcome", test_parse_nickname_maps_every_error_outcome, [[["typename", "expected"], [["UpdateVehicleNicknameMalformedError", $.call(UpdateVehicleNicknameMalformedError, ["error"], null)], ["InvalidVINError", $.call(InvalidVINError, ["error"], null)], ["VINNotFoundError", $.call(VINNotFoundError, ["error"], null)], ["UpdateVehicleGeneralError", $.call(UpdateVehicleGeneralError, ["error"], null)]]]]);

$.register("test_garage_part_02.py::test_parse_ownership_verification_maps_every_service_outcome", test_parse_ownership_verification_maps_every_service_outcome, [[["typename", "fields", "expected"], [["UploadOwnershipVerificationSuccess", Object.assign({}, {["caseNumber"]: "CASE-1"}), $.call(UploadOwnershipVerificationSuccess, ["CASE-1"], null)], ["RegisterGeneralError", Object.assign({}, {["message"]: "failed"}), $.call(RegisterGeneralError, ["failed"], null)]]]]);

$.register("test_garage_part_02.py::test_garage_parsers_preserve_nullable_roots_and_reject_missing_roots", test_garage_parsers_preserve_nullable_roots_and_reject_missing_roots, [[["parser", "root_field"], [[parse_add_vehicle, "addVehicle"], [parse_delete_vehicle, "deleteVehicle"], [parse_ncar_icar_add_vehicle, "ncarIcarAddVehicle"], [parse_pending_vehicles, "pendingVehicles"], [parse_ownership_status, "vehicle"], [parse_apc_agreement, "vehicle"], [parse_apc_document_url, "vehicle"], [parse_create_apc_agreement, "createAPCAgreement"], [parse_update_apc_agreement, "updateAPCAgreement"], [parse_connected_terms_and_conditions_by_vin, "connectedTermsAndConditionsByVIN"], [parse_onboarding_features, "vehicle"], [parse_update_vehicle, "updateVehicle"], [parse_update_vehicle_manual_mileage, "updateVehicle"], [parse_update_vehicle_nickname, "updateVehicle"], [parse_upload_ownership_verification, "uploadOwnershipVerification"]]]]);
