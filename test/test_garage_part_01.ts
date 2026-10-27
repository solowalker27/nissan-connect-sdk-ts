// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const re = $.re;

const pytest = $.pytest;

import { EXPECTED_OPERATIONS, _union_payload } from "./test_garage";

import { NcarIcarRegisterAccountAddressInput, NcarIcarRegisterAccountInput, add_vehicle_variables, apc_agreement_variables, apc_document_url_variables, connected_terms_and_conditions_by_vin_variables, create_apc_agreement_variables, delete_vehicle_variables, ncar_icar_add_vehicle_variables, ncar_icar_register_account_address_input, ncar_icar_register_account_input, onboarding_features_variables, ownership_status_variables, pending_vehicles_variables, update_apc_agreement_variables, update_vehicle_manual_mileage_variables, update_vehicle_nickname_variables, update_vehicle_variables, upload_ownership_verification_variables } from "../src/garage_inputs";

import { AddVehicleSuccess, AgreementStatus, APCAgreement, APCDocument, DeleteVehicleError, DeleteVehicleSuccess, OwnershipStatus, PendingVehicle, RegisterCorporateVehicleEmailSentToPrimaryOwnerError, RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError, RegisterGeneralError, RequireOwnershipVerification, VehicleHologram, VINAlreadyExistsInAnotherGarageError } from "../src/garage_models";

import { parse_add_vehicle, parse_apc_agreement, parse_apc_document_url, parse_delete_vehicle, parse_ncar_icar_add_vehicle, parse_ownership_status, parse_pending_vehicles } from "../src/garage_parsing";

/** Translated upstream test_garage_operations_match_service_documents_and_ids. */
export function test_garage_operations_match_service_documents_and_ids(...__args: any[]): any {
let tokens;
let {"operation_name": operation_name, "document": document, "operation_id": operation_id, "token_hash": token_hash} = $.bind(__args, ["operation_name", "document", "operation_id", "token_hash"], {}, [], null, null);
$.assert($.call($.attr(document, "startswith"), [[("query " + $.str(operation_name)), ("mutation " + $.str(operation_name))]], null), "test_garage_part_01.py:70: document.startswith((f'query {operation_name}', f'mutation {operation_name}'))");
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), operation_id)), "test_garage_part_01.py:71: hashlib.sha256(document.encode()).hexdigest() == operation_id");
tokens = $.call($.attr(" ", "join"), [$.call($.attr(re, "findall"), ["\\.\\.\\.|[_A-Za-z][_0-9A-Za-z]*|[$!():{}\\[\\]]", document], null)], null);
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(tokens, "encode"), [], null)], null), "hexdigest"), [], null), token_hash)), "test_garage_part_01.py:73: hashlib.sha256(tokens.encode()).hexdigest() == token_hash");
}

/** Translated upstream test_required_garage_variables_match_generated_operations. */
export function test_required_garage_variables_match_generated_operations(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(add_vehicle_variables, ["VIN", true], null), Object.assign({}, {["vin"]: "VIN"}, {["termsAndConditionsAccepted"]: true}))), "test_garage_part_01.py:77: add_vehicle_variables('VIN', True) == {'vin': 'VIN', 'termsAndConditionsAccepted': True}");
$.assert(($.eq($.call(delete_vehicle_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_garage_part_01.py:81: delete_vehicle_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(pending_vehicles_variables, [], null), {})), "test_garage_part_01.py:82: pending_vehicles_variables() == {}");
$.assert(($.eq($.call(ownership_status_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_garage_part_01.py:83: ownership_status_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(apc_agreement_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_garage_part_01.py:84: apc_agreement_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(apc_document_url_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_garage_part_01.py:85: apc_document_url_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(create_apc_agreement_variables, ["VIN", true], null), Object.assign({}, {["optIn"]: true}, {["vin"]: "VIN"}))), "test_garage_part_01.py:86: create_apc_agreement_variables('VIN', True) == {'optIn': True, 'vin': 'VIN'}");
$.assert(($.eq($.call(update_apc_agreement_variables, ["VIN", false], null), Object.assign({}, {["optIn"]: false}, {["vin"]: "VIN"}))), "test_garage_part_01.py:90: update_apc_agreement_variables('VIN', False) == {'optIn': False, 'vin': 'VIN'}");
$.assert(($.eq($.call(connected_terms_and_conditions_by_vin_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_garage_part_01.py:94: connected_terms_and_conditions_by_vin_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(onboarding_features_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_garage_part_01.py:95: onboarding_features_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(update_vehicle_nickname_variables, ["VIN", "Ariya"], null), Object.assign({}, {["vin"]: "VIN"}, {["nickname"]: "Ariya"}))), "test_garage_part_01.py:96: update_vehicle_nickname_variables('VIN', 'Ariya') == {'vin': 'VIN', 'nickname': 'Ariya'}");
$.assert(($.eq($.call(upload_ownership_verification_variables, ["VIN", "title.pdf", "BASE64", true], null), Object.assign({}, {["vin"]: "VIN"}, {["filename"]: "title.pdf"}, {["attachment"]: "BASE64"}, {["optInSMS"]: true}))), "test_garage_part_01.py:100: upload_ownership_verification_variables('VIN', 'title.pdf', 'BASE64', True) == {'vin': 'VIN', 'filename': 'title.pdf', 'attachment': 'BASE64', 'optInSMS': True}");
}

/** Translated upstream test_ncar_icar_account_input_matches_all_non_null_generated_fields. */
export function test_ncar_icar_account_input_matches_all_non_null_generated_fields(...__args: any[]): any {
let account, address, expected_account, expected_address;
let {} = $.bind(__args, [], {}, [], null, null);
address = $.call(NcarIcarRegisterAccountAddressInput, [], Object.assign({}, {"address_1": "1 Main St"}, {"address_2": "Unit 2"}, {"city": "Franklin"}, {"state": "TN"}, {"postal_code": "37064"}, {"country": "US"}));
account = $.call(NcarIcarRegisterAccountInput, [], Object.assign({}, {"first_name": "Ada"}, {"last_name": "Lovelace"}, {"email": "ada@example.test"}, {"phone_number": "+15555550100"}, {"address": address}));
expected_address = Object.assign({}, {["address1"]: "1 Main St"}, {["address2"]: "Unit 2"}, {["city"]: "Franklin"}, {["state"]: "TN"}, {["postalCode"]: "37064"}, {["country"]: "US"});
expected_account = Object.assign({}, {["firstName"]: "Ada"}, {["lastName"]: "Lovelace"}, {["email"]: "ada@example.test"}, {["phoneNumber"]: "+15555550100"}, {["address"]: expected_address});
$.assert(($.eq($.call(ncar_icar_register_account_address_input, [address], null), expected_address)), "test_garage_part_01.py:145: ncar_icar_register_account_address_input(address) == expected_address");
$.assert(($.eq($.call(ncar_icar_register_account_input, [account], null), expected_account)), "test_garage_part_01.py:146: ncar_icar_register_account_input(account) == expected_account");
$.assert(($.eq($.call(ncar_icar_add_vehicle_variables, [true, "GUID"], Object.assign({}, {"account": account})), Object.assign({}, {["termsAndConditionsAccepted"]: true}, {["guid"]: "GUID"}, {["account"]: expected_account}))), "test_garage_part_01.py:147: ncar_icar_add_vehicle_variables(True, 'GUID', account=account) == {'termsAndConditionsAccepted': True, 'guid': 'GUID', 'account': expected_account}");
}

/** Translated upstream test_ncar_icar_nullable_account_preserves_omission_and_explicit_null. */
export function test_ncar_icar_nullable_account_preserves_omission_and_explicit_null(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(ncar_icar_add_vehicle_variables, [false, "GUID"], null), Object.assign({}, {["termsAndConditionsAccepted"]: false}, {["guid"]: "GUID"}))), "test_garage_part_01.py:155: ncar_icar_add_vehicle_variables(False, 'GUID') == {'termsAndConditionsAccepted': False, 'guid': 'GUID'}");
$.assert(($.eq($.call(ncar_icar_add_vehicle_variables, [false, "GUID"], Object.assign({}, {"account": null})), Object.assign({}, {["termsAndConditionsAccepted"]: false}, {["guid"]: "GUID"}, {["account"]: null}))), "test_garage_part_01.py:159: ncar_icar_add_vehicle_variables(False, 'GUID', account=None) == {'termsAndConditionsAccepted': False, 'guid': 'GUID', 'account': None}");
}

/** Translated upstream test_update_vehicle_serializes_every_known_hologram. */
export function test_update_vehicle_serializes_every_known_hologram(...__args: any[]): any {
let {"hologram": hologram} = $.bind(__args, ["hologram"], {}, [], null, null);
$.assert(($.eq($.call(update_vehicle_variables, ["VIN"], Object.assign({}, {"license_plate": "ABC123"}, {"hologram": hologram})), Object.assign({}, {["vin"]: "VIN"}, {["licensePlate"]: "ABC123"}, {["hologram"]: $.attr(hologram, "value")}))), "test_garage_part_01.py:168: update_vehicle_variables('VIN', license_plate='ABC123', hologram=hologram) == {'vin': 'VIN', 'licensePlate': 'ABC123', 'hologram': hologram.value}");
}

/** Translated upstream test_update_vehicle_preserves_optional_input_states. */
export function test_update_vehicle_preserves_optional_input_states(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(update_vehicle_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_garage_part_01.py:180: update_vehicle_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(update_vehicle_variables, ["VIN"], Object.assign({}, {"license_plate": null}, {"hologram": null})), Object.assign({}, {["vin"]: "VIN"}, {["licensePlate"]: null}, {["hologram"]: null}))), "test_garage_part_01.py:181: update_vehicle_variables('VIN', license_plate=None, hologram=None) == {'vin': 'VIN', 'licensePlate': None, 'hologram': None}");
$.raises($.ValueError, "UNKNOWN_VALUE cannot be sent", () => {
$.call(update_vehicle_variables, ["VIN"], Object.assign({}, {"hologram": $.attr(VehicleHologram, "UNKNOWN_VALUE")}));
});
}

/** Translated upstream test_manual_mileage_preserves_optional_input_states. */
export function test_manual_mileage_preserves_optional_input_states(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(update_vehicle_manual_mileage_variables, ["VIN"], null), Object.assign({}, {["vin"]: "VIN"}))), "test_garage_part_01.py:191: update_vehicle_manual_mileage_variables('VIN') == {'vin': 'VIN'}");
$.assert(($.eq($.call(update_vehicle_manual_mileage_variables, ["VIN"], Object.assign({}, {"manual_mileage": null})), Object.assign({}, {["vin"]: "VIN"}, {["manualMileage"]: null}))), "test_garage_part_01.py:192: update_vehicle_manual_mileage_variables('VIN', manual_mileage=None) == {'vin': 'VIN', 'manualMileage': None}");
$.assert(($.eq($.call(update_vehicle_manual_mileage_variables, ["VIN"], Object.assign({}, {"manual_mileage": 12345})), Object.assign({}, {["vin"]: "VIN"}, {["manualMileage"]: 12345}))), "test_garage_part_01.py:196: update_vehicle_manual_mileage_variables('VIN', manual_mileage=12345) == {'vin': 'VIN', 'manualMileage': 12345}");
}

/** Translated upstream test_parse_add_vehicle_maps_every_service_outcome. */
export function test_parse_add_vehicle_maps_every_service_outcome(...__args: any[]): any {
let {"typename": typename, "fields": fields, "expected": expected} = $.bind(__args, ["typename", "fields", "expected"], {}, [], null, null);
$.assert(($.eq($.call(parse_add_vehicle, [$.call(_union_payload, ["addVehicle", typename, fields], null)], null), expected)), "test_garage_part_01.py:234: parse_add_vehicle(_union_payload('addVehicle', typename, fields)) == expected");
}

/** Translated upstream test_parse_ncar_icar_add_vehicle_maps_every_service_outcome. */
export function test_parse_ncar_icar_add_vehicle_maps_every_service_outcome(...__args: any[]): any {
let {"typename": typename, "fields": fields, "expected": expected} = $.bind(__args, ["typename", "fields", "expected"], {}, [], null, null);
$.assert(($.eq($.call(parse_ncar_icar_add_vehicle, [$.call(_union_payload, ["ncarIcarAddVehicle", typename, fields], null)], null), expected)), "test_garage_part_01.py:254: parse_ncar_icar_add_vehicle(_union_payload('ncarIcarAddVehicle', typename, fields)) == expected");
}

/** Translated upstream test_parse_delete_vehicle_maps_every_service_outcome. */
export function test_parse_delete_vehicle_maps_every_service_outcome(...__args: any[]): any {
let {"typename": typename, "fields": fields, "expected": expected} = $.bind(__args, ["typename", "fields", "expected"], {}, [], null, null);
$.assert(($.eq($.call(parse_delete_vehicle, [$.call(_union_payload, ["deleteVehicle", typename, fields], null)], null), expected)), "test_garage_part_01.py:272: parse_delete_vehicle(_union_payload('deleteVehicle', typename, fields)) == expected");
}

/** Translated upstream test_parse_pending_vehicles_preserves_nullable_list_items_and_fields. */
export function test_parse_pending_vehicles_preserves_nullable_list_items_and_fields(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert((($.call(parse_pending_vehicles, [Object.assign({}, {["pendingVehicles"]: null})], null) === null)), "test_garage_part_01.py:276: parse_pending_vehicles({'pendingVehicles': None}) is None");
$.assert(($.eq($.call(parse_pending_vehicles, [Object.assign({}, {["pendingVehicles"]: []})], null), [])), "test_garage_part_01.py:277: parse_pending_vehicles({'pendingVehicles': []}) == ()");
$.assert(($.eq($.call(parse_pending_vehicles, [Object.assign({}, {["pendingVehicles"]: [null, Object.assign({}, {["__typename"]: "PendingVehicle"}, {["vin"]: "VIN"}, {["caseStatus"]: "OPEN"}, {["model"]: null}, {["caseId"]: "CASE-ID"}, {["caseNumber"]: null}, {["year"]: "2026"})]})], null), [null, $.call(PendingVehicle, ["VIN", "OPEN", null, "CASE-ID", null, "2026"], null)])), "test_garage_part_01.py:278: parse_pending_vehicles({'pendingVehicles': [None, {'__typename': 'PendingVehicle', 'vin': 'VIN', 'caseStatus': 'OPEN', 'model': None, 'caseId': 'CASE-ID', 'caseNumber': None, 'year': '2026'}]}) == (None, PendingVehicle('VIN', 'OPEN', None, 'CASE-ID', None, '2026'))");
}

/** Translated upstream test_parse_ownership_status_preserves_nullable_state_and_fragment_absence. */
export function test_parse_ownership_status_preserves_nullable_state_and_fragment_absence(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert((($.call(parse_ownership_status, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "Vehicle"})})], null) === null)), "test_garage_part_01.py:300: parse_ownership_status({'vehicle': {'__typename': 'Vehicle'}}) is None");
$.assert(($.eq($.call(parse_ownership_status, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["ownershipStatus"]: Object.assign({}, {["__typename"]: "OwnershipStatus"}, {["isSignedIn"]: true})})})], null), $.call(OwnershipStatus, [true], null))), "test_garage_part_01.py:301: parse_ownership_status({'vehicle': {'__typename': 'AVK2Vehicle', 'ownershipStatus': {'__typename': 'OwnershipStatus', 'isSignedIn': True}}}) == OwnershipStatus(True)");
$.assert(($.eq($.call(parse_ownership_status, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["ownershipStatus"]: Object.assign({}, {["__typename"]: "OwnershipStatus"}, {["isSignedIn"]: null})})})], null), $.call(OwnershipStatus, [null], null))), "test_garage_part_01.py:312: parse_ownership_status({'vehicle': {'__typename': 'AVK2Vehicle', 'ownershipStatus': {'__typename': 'OwnershipStatus', 'isSignedIn': None}}}) == OwnershipStatus(None)");
}

/** Translated upstream test_parse_apc_agreement_maps_known_and_future_statuses. */
export function test_parse_apc_agreement_maps_known_and_future_statuses(...__args: any[]): any {
let {"raw_status": raw_status, "expected": expected} = $.bind(__args, ["raw_status", "expected"], {}, [], null, null);
$.assert(($.eq($.call(parse_apc_agreement, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["apcAgreement"]: Object.assign({}, {["__typename"]: "APCAgreement"}, {["optIn"]: raw_status})})})], null), $.call(APCAgreement, [expected], null))), "test_garage_part_01.py:339: parse_apc_agreement({'vehicle': {'__typename': 'AVK2Vehicle', 'apcAgreement': {'__typename': 'APCAgreement', 'optIn': raw_status}}}) == APCAgreement(expected)");
}

/** Translated upstream test_parse_apc_document_url_preserves_null_and_blank_values. */
export function test_parse_apc_document_url_preserves_null_and_blank_values(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_apc_document_url, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["apcAgreement"]: Object.assign({}, {["__typename"]: "APCAgreement"}, {["documentURL"]: ""})})})], null), $.call(APCDocument, [""], null))), "test_garage_part_01.py:353: parse_apc_document_url({'vehicle': {'__typename': 'AVK2Vehicle', 'apcAgreement': {'__typename': 'APCAgreement', 'documentURL': ''}}}) == APCDocument('')");
$.assert(($.eq($.call(parse_apc_document_url, [Object.assign({}, {["vehicle"]: Object.assign({}, {["__typename"]: "AVK2Vehicle"}, {["apcAgreement"]: Object.assign({}, {["__typename"]: "APCAgreement"}, {["documentURL"]: null})})})], null), $.call(APCDocument, [null], null))), "test_garage_part_01.py:364: parse_apc_document_url({'vehicle': {'__typename': 'AVK2Vehicle', 'apcAgreement': {'__typename': 'APCAgreement', 'documentURL': None}}}) == APCDocument(None)");
}

$.register("test_garage_part_01.py::test_garage_operations_match_service_documents_and_ids", test_garage_operations_match_service_documents_and_ids, [[["operation_name", "document", "operation_id", "token_hash"], (() => { const __out: any = []; for (const [operation_name, values] of $.iterable($.call($.attr(EXPECTED_OPERATIONS, "items"), [], null))) { __out.push([operation_name, ...$.iterable(values)]); } return __out; })()]]);

$.register("test_garage_part_01.py::test_required_garage_variables_match_generated_operations", test_required_garage_variables_match_generated_operations, []);

$.register("test_garage_part_01.py::test_ncar_icar_account_input_matches_all_non_null_generated_fields", test_ncar_icar_account_input_matches_all_non_null_generated_fields, []);

$.register("test_garage_part_01.py::test_ncar_icar_nullable_account_preserves_omission_and_explicit_null", test_ncar_icar_nullable_account_preserves_omission_and_explicit_null, []);

$.register("test_garage_part_01.py::test_update_vehicle_serializes_every_known_hologram", test_update_vehicle_serializes_every_known_hologram, [["hologram", $.slice($.call($.list, [VehicleHologram], null), null, -(1), null)]]);

$.register("test_garage_part_01.py::test_update_vehicle_preserves_optional_input_states", test_update_vehicle_preserves_optional_input_states, []);

$.register("test_garage_part_01.py::test_manual_mileage_preserves_optional_input_states", test_manual_mileage_preserves_optional_input_states, []);

$.register("test_garage_part_01.py::test_parse_add_vehicle_maps_every_service_outcome", test_parse_add_vehicle_maps_every_service_outcome, [[["typename", "fields", "expected"], [["AddVehicleSuccessResponse", Object.assign({}, {["vin"]: "VIN"}), $.call(AddVehicleSuccess, ["VIN"], null)], ["RegisterGeneralError", Object.assign({}, {["message"]: "general"}), $.call(RegisterGeneralError, ["general"], null)], ["RequireOwnershipVerification", Object.assign({}, {["message"]: "verify"}), $.call(RequireOwnershipVerification, ["verify"], null)], ["RegisterCorporateVehicleEmailSentToPrimaryOwnerError", Object.assign({}, {["message"]: "email sent"}), $.call(RegisterCorporateVehicleEmailSentToPrimaryOwnerError, ["email sent"], null)], ["RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError", Object.assign({}, {["message"]: "pending"}), $.call(RegisterCorporateVehiclePrimaryOwnerConsentIsPendingError, ["pending"], null)], ["VINAlreadyExistsInAnotherGarageError", Object.assign({}, {["message"]: "duplicate"}), $.call(VINAlreadyExistsInAnotherGarageError, ["duplicate"], null)]]]]);

$.register("test_garage_part_01.py::test_parse_ncar_icar_add_vehicle_maps_every_service_outcome", test_parse_ncar_icar_add_vehicle_maps_every_service_outcome, [[["typename", "fields", "expected"], [["AddVehicleSuccessResponse", Object.assign({}, {["vin"]: "VIN"}), $.call(AddVehicleSuccess, ["VIN"], null)], ["RegisterGeneralError", Object.assign({}, {["message"]: "general"}), $.call(RegisterGeneralError, ["general"], null)], ["RequireOwnershipVerification", Object.assign({}, {["message"]: "verify"}), $.call(RequireOwnershipVerification, ["verify"], null)]]]]);

$.register("test_garage_part_01.py::test_parse_delete_vehicle_maps_every_service_outcome", test_parse_delete_vehicle_maps_every_service_outcome, [[["typename", "fields", "expected"], [["DeleteVehicleSuccessResponse", Object.assign({}, {["vin"]: "VIN"}), $.call(DeleteVehicleSuccess, ["VIN"], null)], ["DeleteVehicleError", Object.assign({}, {["message"]: "failed"}), $.call(DeleteVehicleError, ["failed"], null)]]]]);

$.register("test_garage_part_01.py::test_parse_pending_vehicles_preserves_nullable_list_items_and_fields", test_parse_pending_vehicles_preserves_nullable_list_items_and_fields, []);

$.register("test_garage_part_01.py::test_parse_ownership_status_preserves_nullable_state_and_fragment_absence", test_parse_ownership_status_preserves_nullable_state_and_fragment_absence, []);

$.register("test_garage_part_01.py::test_parse_apc_agreement_maps_known_and_future_statuses", test_parse_apc_agreement_maps_known_and_future_statuses, [[["raw_status", "expected"], [["ACTIVATED", $.attr(AgreementStatus, "ACTIVATED")], ["DEACTIVATED", $.attr(AgreementStatus, "DEACTIVATED")], ["NO_STATUS", $.attr(AgreementStatus, "NO_STATUS")], ["FUTURE_STATUS", $.attr(AgreementStatus, "UNKNOWN_VALUE")], [null, null]]]]);

$.register("test_garage_part_01.py::test_parse_apc_document_url_preserves_null_and_blank_values", test_parse_apc_document_url_preserves_null_and_blank_values, []);
