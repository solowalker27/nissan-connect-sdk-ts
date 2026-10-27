// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

const pytest = $.pytest;

import { UNSET, AddressInput, MarketingNotificationPreferences, MarketingPreferenceInput, MarketingPreferenceType, NCIMarketingPreferenceInput, NCIMarketingPreferences, NissanIdExists, NissanIdRequiresOwnerPortalPasswordReset, NNAMarketingPreferences, NotificationPreferenceTogglesInput, RegisterAccountAddressInput, RegisterAccountInput, SecurityQuestion, UnselectedAccountResult, UpdateAccountInput, UserInfo, operations } from "../src/index";

import { register_account_variables, update_account_variables, update_nci_marketing_preferences_variables, update_nna_marketing_preferences_variables } from "../src/account_inputs";

import { parse_marketing_preferences, parse_security_questions, parse_terms_and_conditions, parse_user_info, parse_validate_nissan_id } from "../src/account_parsing";

import { ResponseError } from "../src/exceptions";

export let EXPECTED_OPERATIONS = Object.assign({}, {["VALIDATE_NISSAN_ID"]: "b5f146397db98fabeae691a05a8f2105d5f0467f6249d8d9aa2e3cbf2f78b496"}, {["SECURITY_QUESTIONS"]: "0f4e903f6e7aaab9f1d395f63389b5e851a620b7aae75fb0f2c2590c832eb3ee"}, {["USER_INFO"]: "e90c04b6e66bda2df2f3017a3ddfae4c3ca8780c1f883d199c74390acc786287"}, {["TERMS_AND_CONDITIONS"]: "7ce8d6e19ea35543909809c8eb0c221a29dab74eb312b4a54ca251964bd70c17"}, {["MARKETING_PREFERENCES"]: "281cf505506de3bb2011c410413cad23f6e12baae9097c4089aa0d55c6461a7d"}, {["REGISTER_ACCOUNT"]: "f3306b7a7b99ae529b4bf40cf2d4dc89aff592ffa27d71950bdda418a138a76a"}, {["NCAR_ICAR_REGISTER_ACCOUNT"]: "75e5b49f52d986ba013048f306a24dfb97bbaf72fb5f5ca3573d2f27b93a76d2"}, {["NCAR_ICAR_VERIFY_ACCOUNT"]: "7e26704ab9c5bf1cb164adb26e2173cb00e2c936a378648c1034f33d5fe34c3c"}, {["NCAR_ICAR_CUSTOMER_ENROLLMENT"]: "d857de7c920940fa00b5cf4dfedf51805a55c1156954b5016144a7f1ba54cbf9"}, {["NCAR_ICAR_GENERATE_OTP"]: "50f54a2e7c81b43e91dcf0f223c9f962d34f93bdeda9a4b7021d975dc6370625"}, {["NCAR_ICAR_VERIFY_OTP"]: "9efcc780691e03a32ee58344f4017a28008c8e2735ff4e0c67ed756f05ab5eb2"}, {["GENERATE_OTP"]: "c6c7a86861f37af8adb5376d3d73cc42e2ec045fe064c6d39d7c0de07ec9c612"}, {["VERIFY_OTP"]: "7d165e2df809afaf6ba02224431b4d829cb1938d09487574643814ec99980f64"}, {["CREATE_PIN"]: "181d5a83c7afa1cbae2b5b778b722fbc37c76f971ca572dbba1e395dd306c98a"}, {["UPDATE_PIN"]: "b99a8380729759799933da39704f52703b4cab6131cf45ed9211d3730fd218a8"}, {["UPDATE_ACCOUNT"]: "aad3256b184b448f93a68f725ba963908f532d6f381e1e5fa2a99851b3d81d14"}, {["DELETE_ACCOUNT"]: "c82dce2ce140e41c131860bc25d3c2c67b91d3c8f4cb7cae0fdb9e0d3e70597e"}, {["UPDATE_NCI_MARKETING_PREFERENCES"]: "fcb00c4f6a74e8e25da1764e2fcc61866b924f9bf8b18bd317e866e2757568d2"}, {["UPDATE_NNA_MARKETING_PREFERENCES"]: "b1e334a1e2b9a92e58ad12d0ad10a967ea17d3c7dc7c4de73a88bb74607c3cf8"});

/** Translated upstream test_account_operations_match_service_documents. */
export function test_account_operations_match_service_documents(...__args: any[]): any {
let document, operation_id;
let {"constant": constant, "expected_id": expected_id} = $.bind(__args, ["constant", "expected_id"], {}, [], null, null);
document = $.call($.getattr, [operations, constant], null);
operation_id = $.call($.getattr, [operations, ($.str(constant) + "_OPERATION_ID")], null);
$.assert(($.eq(operation_id, expected_id)), "test_account_inputs_and_queries.py:80: operation_id == expected_id");
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), expected_id)), "test_account_inputs_and_queries.py:81: hashlib.sha256(document.encode()).hexdigest() == expected_id");
}

/** Translated upstream test_register_account_variables_preserve_nested_apollo_optionality. */
export function test_register_account_variables_preserve_nested_apollo_optionality(...__args: any[]): any {
let config;
let {} = $.bind(__args, [], {}, [], null, null);
config = $.call(RegisterAccountInput, [], Object.assign({}, {"first_name": "Ada"}, {"last_name": "Lovelace"}, {"email": "ada@example.test"}, {"phone_number": "+15555550100"}, {"password": "secret"}, {"address": $.call(RegisterAccountAddressInput, [], Object.assign({}, {"address_1": "1 Main St"}, {"city": "Franklin"}, {"state": "TN"}, {"postal_code": "37064"}, {"country": "US"}, {"address_2": null}))}, {"second_last_name": null}, {"mobile_carrier_id": 7}, {"marketing_preferences": $.call(MarketingPreferenceInput, [], Object.assign({}, {"newsletter": [$.attr(MarketingPreferenceType, "EMAIL")]}, {"product_offers": []}, {"service_offers": [$.attr(MarketingPreferenceType, "SMS")]}, {"scheduled_maintenance": [$.attr(MarketingPreferenceType, "IAM")]}, {"feedback": [$.attr(MarketingPreferenceType, "TELEPHONE")]}))}));
$.assert(($.eq($.call(register_account_variables, [config], null), Object.assign({}, {["config"]: Object.assign({}, {["firstName"]: "Ada"}, {["lastName"]: "Lovelace"}, {["secondLastName"]: null}, {["email"]: "ada@example.test"}, {["phoneNumber"]: "+15555550100"}, {["mobileCarrierId"]: 7}, {["password"]: "secret"}, {["address"]: Object.assign({}, {["address1"]: "1 Main St"}, {["address2"]: null}, {["city"]: "Franklin"}, {["state"]: "TN"}, {["postalCode"]: "37064"}, {["country"]: "US"})}, {["marketingPreferences"]: Object.assign({}, {["newsletter"]: ["EMAIL"]}, {["productOffers"]: []}, {["serviceOffers"]: ["SMS"]}, {["scheduledMaintenance"]: ["IAM"]}, {["feedback"]: ["TELEPHONE"]})})}))), "test_account_inputs_and_queries.py:110: register_account_variables(config) == {'config': {'firstName': 'Ada', 'lastName': 'Lovelace', 'secondLastName': None, 'email': 'ada@example.test', 'phoneNumber': '+15555550100', 'mobileCarrierId': 7, 'password': 'secret', 'address': {'address1': '1 Main St', 'address2': None, 'city': 'Franklin', 'state': 'TN', 'postalCode': '37064', 'country': 'US'}, 'marketingPreferences': {'newsletter': ['EMAIL'], 'productOffers': [], 'serviceOffers': ['SMS'], 'scheduledMaintenance': ['IAM'], 'feedback': ['TELEPHONE']}}}");
}

/** Translated upstream test_account_update_variables_distinguish_omission_and_null. */
export function test_account_update_variables_distinguish_omission_and_null(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(update_account_variables, [], null), {})), "test_account_inputs_and_queries.py:139: update_account_variables() == {}");
$.assert(($.eq($.call(update_account_variables, [null], null), Object.assign({}, {["config"]: null}))), "test_account_inputs_and_queries.py:140: update_account_variables(None) == {'config': None}");
$.assert(($.eq($.call(update_account_variables, [$.call(UpdateAccountInput, [], Object.assign({}, {"first_name": "Ada"}, {"email": null}, {"address": $.call(AddressInput, [], Object.assign({}, {"city": "Franklin"}))}))], null), Object.assign({}, {["config"]: Object.assign({}, {["firstName"]: "Ada"}, {["email"]: null}, {["address"]: Object.assign({}, {["city"]: "Franklin"})})}))), "test_account_inputs_and_queries.py:141: update_account_variables(UpdateAccountInput(first_name='Ada', email=None, address=AddressInput(city='Franklin'))) == {'config': {'firstName': 'Ada', 'email': None, 'address': {'city': 'Franklin'}}}");
}

/** Translated upstream test_marketing_input_variables_preserve_every_schema_shape. */
export function test_marketing_input_variables_preserve_every_schema_shape(...__args: any[]): any {
let nci;
let {} = $.bind(__args, [], {}, [], null, null);
nci = $.call(NCIMarketingPreferenceInput, [], Object.assign({}, {"email": true}, {"offers_promotion": $.call(NotificationPreferenceTogglesInput, [], Object.assign({}, {"email": false}, {"text_message": null}, {"in_app": true}))}, {"news_events": null}));
$.assert(($.eq($.call(update_nci_marketing_preferences_variables, [nci], null), Object.assign({}, {["marketingPreferences"]: Object.assign({}, {["email"]: true}, {["offersPromotion"]: Object.assign({}, {["email"]: false}, {["textMessage"]: null}, {["inApp"]: true})}, {["newsEvents"]: null})}))), "test_account_inputs_and_queries.py:162: update_nci_marketing_preferences_variables(nci) == {'marketingPreferences': {'email': True, 'offersPromotion': {'email': False, 'textMessage': None, 'inApp': True}, 'newsEvents': None}}");
$.assert(($.eq($.call(update_nna_marketing_preferences_variables, [], null), {})), "test_account_inputs_and_queries.py:173: update_nna_marketing_preferences_variables() == {}");
$.assert(($.eq($.call(update_nna_marketing_preferences_variables, [null], null), Object.assign({}, {["marketingPreferences"]: null}))), "test_account_inputs_and_queries.py:174: update_nna_marketing_preferences_variables(None) == {'marketingPreferences': None}");
}

/** Translated upstream test_marketing_inputs_reject_unknown_enum_values. */
export function test_marketing_inputs_reject_unknown_enum_values(...__args: any[]): any {
let config;
let {} = $.bind(__args, [], {}, [], null, null);
config = $.call(MarketingPreferenceInput, [], Object.assign({}, {"newsletter": [$.attr(MarketingPreferenceType, "UNKNOWN_VALUE")]}, {"product_offers": []}, {"service_offers": []}, {"scheduled_maintenance": []}, {"feedback": []}, {"promotion_offers": UNSET}));
$.raises($.ValueError, "UNKNOWN_VALUE cannot be sent", () => {
$.call(update_nna_marketing_preferences_variables, [config], null);
});
}

/** Translated upstream test_parse_nissan_id_validation_known_reset_and_future_results. */
export function test_parse_nissan_id_validation_known_reset_and_future_results(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_validate_nissan_id, [Object.assign({}, {["validateNissanID"]: Object.assign({}, {["__typename"]: "NissanIdExists"}, {["nissanId"]: "ada"})})], null), $.call(NissanIdExists, ["ada"], null))), "test_account_inputs_and_queries.py:191: parse_validate_nissan_id({'validateNissanID': {'__typename': 'NissanIdExists', 'nissanId': 'ada'}}) == NissanIdExists('ada')");
$.assert(($.eq($.call(parse_validate_nissan_id, [Object.assign({}, {["validateNissanID"]: Object.assign({}, {["__typename"]: "NissanIdRequiresOwnerPortalPWReset"}, {["nissanId"]: "ada"}, {["link"]: "https://example.test/reset"})})], null), $.call(NissanIdRequiresOwnerPortalPasswordReset, ["ada", "https://example.test/reset"], null))), "test_account_inputs_and_queries.py:194: parse_validate_nissan_id({'validateNissanID': {'__typename': 'NissanIdRequiresOwnerPortalPWReset', 'nissanId': 'ada', 'link': 'https://example.test/reset'}}) == NissanIdRequiresOwnerPortalPasswordReset('ada', 'https://example.test/reset')");
$.assert(($.eq($.call(parse_validate_nissan_id, [Object.assign({}, {["validateNissanID"]: Object.assign({}, {["__typename"]: "FutureValidationResult"})})], null), $.call(UnselectedAccountResult, ["FutureValidationResult"], null))), "test_account_inputs_and_queries.py:206: parse_validate_nissan_id({'validateNissanID': {'__typename': 'FutureValidationResult'}}) == UnselectedAccountResult('FutureValidationResult')");
}

/** Translated upstream test_parse_security_questions_preserves_nullable_list_and_items. */
export function test_parse_security_questions_preserves_nullable_list_and_items(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert((($.call(parse_security_questions, [Object.assign({}, {["securityQuestions"]: null})], null) === null)), "test_account_inputs_and_queries.py:212: parse_security_questions({'securityQuestions': None}) is None");
$.assert(($.eq($.call(parse_security_questions, [Object.assign({}, {["securityQuestions"]: [null, Object.assign({}, {["__typename"]: "SecurityQuestion"}, {["id"]: null}, {["question"]: "First car?"})]})], null), [null, $.call(SecurityQuestion, [null, "First car?"], null)])), "test_account_inputs_and_queries.py:213: parse_security_questions({'securityQuestions': [None, {'__typename': 'SecurityQuestion', 'id': None, 'question': 'First car?'}]}) == (None, SecurityQuestion(None, 'First car?'))");
}

/** Translated upstream test_parse_user_info_and_terms_preserve_nullability. */
export function test_parse_user_info_and_terms_preserve_nullability(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_user_info, [Object.assign({}, {["user"]: Object.assign({}, {["__typename"]: "User"}, {["pinConfigured"]: null}, {["securityQuestionId"]: "42"}, {["isLiteAccount"]: false})})], null), $.call(UserInfo, [null, "42", false], null))), "test_account_inputs_and_queries.py:228: parse_user_info({'user': {'__typename': 'User', 'pinConfigured': None, 'securityQuestionId': '42', 'isLiteAccount': False}}) == UserInfo(None, '42', False)");
$.assert((($.call(parse_user_info, [Object.assign({}, {["user"]: null})], null) === null)), "test_account_inputs_and_queries.py:238: parse_user_info({'user': None}) is None");
$.assert((($.call(parse_terms_and_conditions, [Object.assign({}, {["termsAndConditions"]: null})], null) === null)), "test_account_inputs_and_queries.py:239: parse_terms_and_conditions({'termsAndConditions': None}) is None");
$.assert(($.eq($.call(parse_terms_and_conditions, [Object.assign({}, {["termsAndConditions"]: "Terms"})], null), "Terms")), "test_account_inputs_and_queries.py:240: parse_terms_and_conditions({'termsAndConditions': 'Terms'}) == 'Terms'");
}

/** Translated upstream test_parse_nci_marketing_preferences_preserves_nullable_toggles. */
export function test_parse_nci_marketing_preferences_preserves_nullable_toggles(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_marketing_preferences, [Object.assign({}, {["user"]: Object.assign({}, {["__typename"]: "User"}, {["countryMarketingPreferences"]: Object.assign({}, {["__typename"]: "NCIMarketingPreferences"}, {["email"]: true}, {["productUpdates"]: Object.assign({}, {["__typename"]: "NCIMarketingPreferenceProductUpdates"}, {["email"]: true}, {["textMessage"]: null}, {["directMail"]: false}, {["inApp"]: true}, {["inVehicle"]: null})}, {["newsEvents"]: null}, {["offersPromotion"]: null})})})], null), $.call(NCIMarketingPreferences, [true, $.call(MarketingNotificationPreferences, [true, null, false, true, null], null), null, null], null))), "test_account_inputs_and_queries.py:244: parse_marketing_preferences({'user': {'__typename': 'User', 'countryMarketingPreferences': {'__typename': 'NCIMarketingPreferences', 'email': True, 'productUpdates': {'__typename': 'NCIMarketingPreferenceProductUpdates', 'email': True, 'textMessage': None, 'directMail': False, 'inApp': True, 'inVehicle': None}, 'newsEvents': None, 'offersPromotion': None}}}) == NCIMarketingPreferences(True, MarketingNotificationPreferences(True, None, False, True, None), None, None)");
}

/** Translated upstream test_parse_nna_marketing_preferences_preserves_nullable_lists_and_items. */
export function test_parse_nna_marketing_preferences_preserves_nullable_lists_and_items(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.assert(($.eq($.call(parse_marketing_preferences, [Object.assign({}, {["user"]: Object.assign({}, {["__typename"]: "User"}, {["countryMarketingPreferences"]: Object.assign({}, {["__typename"]: "NNAMarketingPreferences"}, {["newsletter"]: ["EMAIL", null, "FUTURE"]}, {["productOffers"]: null}, {["serviceOffers"]: []}, {["scheduledMaintenance"]: ["SMS"]}, {["feedback"]: ["IAM"]})})})], null), $.call(NNAMarketingPreferences, [[$.attr(MarketingPreferenceType, "EMAIL"), null, $.attr(MarketingPreferenceType, "UNKNOWN_VALUE")], null, [], [$.attr(MarketingPreferenceType, "SMS")], [$.attr(MarketingPreferenceType, "IAM")]], null))), "test_account_inputs_and_queries.py:273: parse_marketing_preferences({'user': {'__typename': 'User', 'countryMarketingPreferences': {'__typename': 'NNAMarketingPreferences', 'newsletter': ['EMAIL', None, 'FUTURE'], 'productOffers': None, 'serviceOffers': [], 'scheduledMaintenance': ['SMS'], 'feedback': ['IAM']}}}) == NNAMarketingPreferences((MarketingPreferenceType.EMAIL, None, MarketingPreferenceType.UNKNOWN_VALUE), None, (), (MarketingPreferenceType.SMS,), (MarketingPreferenceType.IAM,))");
}

/** Translated upstream test_account_query_parsers_reject_missing_or_malformed_fields. */
export function test_account_query_parsers_reject_missing_or_malformed_fields(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
$.raises(ResponseError, "securityQuestions is missing", () => {
$.call(parse_security_questions, [{}], null);
});
$.raises(ResponseError, "user\\.pinConfigured is not a boolean", () => {
$.call(parse_user_info, [Object.assign({}, {["user"]: Object.assign({}, {["__typename"]: "User"}, {["pinConfigured"]: "yes"}, {["securityQuestionId"]: null}, {["isLiteAccount"]: null})})], null);
});
}

$.register("test_account_inputs_and_queries.py::test_account_operations_match_service_documents", test_account_operations_match_service_documents, [[["constant", "expected_id"], $.call($.attr(EXPECTED_OPERATIONS, "items"), [], null)]]);

$.register("test_account_inputs_and_queries.py::test_register_account_variables_preserve_nested_apollo_optionality", test_register_account_variables_preserve_nested_apollo_optionality, []);

$.register("test_account_inputs_and_queries.py::test_account_update_variables_distinguish_omission_and_null", test_account_update_variables_distinguish_omission_and_null, []);

$.register("test_account_inputs_and_queries.py::test_marketing_input_variables_preserve_every_schema_shape", test_marketing_input_variables_preserve_every_schema_shape, []);

$.register("test_account_inputs_and_queries.py::test_marketing_inputs_reject_unknown_enum_values", test_marketing_inputs_reject_unknown_enum_values, []);

$.register("test_account_inputs_and_queries.py::test_parse_nissan_id_validation_known_reset_and_future_results", test_parse_nissan_id_validation_known_reset_and_future_results, []);

$.register("test_account_inputs_and_queries.py::test_parse_security_questions_preserves_nullable_list_and_items", test_parse_security_questions_preserves_nullable_list_and_items, []);

$.register("test_account_inputs_and_queries.py::test_parse_user_info_and_terms_preserve_nullability", test_parse_user_info_and_terms_preserve_nullability, []);

$.register("test_account_inputs_and_queries.py::test_parse_nci_marketing_preferences_preserves_nullable_toggles", test_parse_nci_marketing_preferences_preserves_nullable_toggles, []);

$.register("test_account_inputs_and_queries.py::test_parse_nna_marketing_preferences_preserves_nullable_lists_and_items", test_parse_nna_marketing_preferences_preserves_nullable_lists_and_items, []);

$.register("test_account_inputs_and_queries.py::test_account_query_parsers_reject_missing_or_malformed_fields", test_account_query_parsers_reject_missing_or_malformed_fields, []);
