// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

const StrEnum = $.StrEnum;

import { CreatePinError, CreatePinResult, DeleteAccountResult, MarketingNotificationPreferences, MarketingPreferencesResult, MarketingPreferenceType, MobileCarrierCode, MobileNetworkOperator, NCIMarketingPreferences, NissanIdDoesNotExist, NissanIdExists, NissanIdRequiresNmacPasswordReset, NissanIdRequiresOwnerPortalPasswordReset, NissanIdRequiresOwnerPortalProfileCompletion, NissanIdValidationResult, NNAMarketingPreferences, PinOperationSuccess, PinValidationError, SecurityQuestion, UnselectedAccountResult, UpdateAccountAddressError, UpdateAccountFirstNameError, UpdateAccountGeneralError, UpdateAccountLandlineNumberError, UpdateAccountLastNameError, UpdateAccountMobileNumberError, UpdateAccountPostalCodeError, UpdateAccountResult, UpdateAccountSuccess, UpdatedAccountAddress, UpdatePinResult, UserInfo } from "./account_models";
export { CreatePinError, CreatePinResult, DeleteAccountResult, MarketingNotificationPreferences, MarketingPreferencesResult, MarketingPreferenceType, MobileCarrierCode, MobileNetworkOperator, NCIMarketingPreferences, NissanIdDoesNotExist, NissanIdExists, NissanIdRequiresNmacPasswordReset, NissanIdRequiresOwnerPortalPasswordReset, NissanIdRequiresOwnerPortalProfileCompletion, NissanIdValidationResult, NNAMarketingPreferences, PinOperationSuccess, PinValidationError, SecurityQuestion, UnselectedAccountResult, UpdateAccountAddressError, UpdateAccountFirstNameError, UpdateAccountGeneralError, UpdateAccountLandlineNumberError, UpdateAccountLastNameError, UpdateAccountMobileNumberError, UpdateAccountPostalCodeError, UpdateAccountResult, UpdateAccountSuccess, UpdatedAccountAddress, UpdatePinResult, UserInfo };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function parse_validate_nissan_id(data: Record<string, unknown>): NissanIdValidationResult | null;
/** Parse every generated Nissan ID validation union branch. */
export function parse_validate_nissan_id(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated Nissan ID validation union branch. */
root_field = "validateNissanID";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "NissanIdExists")))) {
return $.call(NissanIdExists, [$.call(_required_string, [root, "nissanId", ($.str(root_field) + ".nissanId")], null)], null);
}
if ($.truth(($.eq(typename, "NissanIdDoesNotExist")))) {
return $.call(NissanIdDoesNotExist, [$.call(_required_string, [root, "nissanId", ($.str(root_field) + ".nissanId")], null)], null);
}
if ($.truth(($.eq(typename, "NissanIdRequiresOwnerPortalPWReset")))) {
return $.call(NissanIdRequiresOwnerPortalPasswordReset, [$.call(_required_string, [root, "nissanId", ($.str(root_field) + ".nissanId")], null), $.call(_required_string, [root, "link", ($.str(root_field) + ".link")], null)], null);
}
if ($.truth(($.eq(typename, "NissanIdRequiresOwnerPortalProfileCompletion")))) {
return $.call(NissanIdRequiresOwnerPortalProfileCompletion, [$.call(_required_string, [root, "nissanId", ($.str(root_field) + ".nissanId")], null), $.call(_required_string, [root, "link", ($.str(root_field) + ".link")], null)], null);
}
if ($.truth(($.eq(typename, "NissanIdRequiresNMACPWReset")))) {
return $.call(NissanIdRequiresNmacPasswordReset, [$.call(_required_string, [root, "nissanId", ($.str(root_field) + ".nissanId")], null), $.call(_required_string, [root, "link", ($.str(root_field) + ".link")], null)], null);
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function parse_security_questions(data: Record<string, unknown>): ReadonlyArray<SecurityQuestion | null> | null;
/** Parse nullable security questions and nullable list items. */
export function parse_security_questions(...__args: any[]): any {
let field, index, item, path, question, questions, value;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable security questions and nullable list items. */
field = "securityQuestions";
value = $.call(_required_field, [data, field, field], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(field) + " is not a list")], null);
}
questions = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(questions, "append"), [null], null);
continue;
}
path = ($.str(field) + "[" + $.str(index) + "]");
question = $.call(_typed_object, [item, path], null);
$.call($.attr(questions, "append"), [$.call(SecurityQuestion, [$.call(_required_nullable_string, [question, "id", ($.str(path) + ".id")], null), $.call(_required_nullable_string, [question, "question", ($.str(path) + ".question")], null)], null)], null);
}
return $.call($.tuple, [questions], null);
}

export function parse_user_info(data: Record<string, unknown>): UserInfo | null;
/** Parse nullable signed-in user security flags. */
export function parse_user_info(...__args: any[]): any {
let root;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse nullable signed-in user security flags. */
root = $.call(_root, [data, "user"], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(UserInfo, [], Object.assign({}, {"pin_configured": $.call(_required_nullable_bool, [root, "pinConfigured", "user.pinConfigured"], null)}, {"security_question_id": $.call(_required_nullable_string, [root, "securityQuestionId", "user.securityQuestionId"], null)}, {"is_lite_account": $.call(_required_nullable_bool, [root, "isLiteAccount", "user.isLiteAccount"], null)}));
}

export function parse_terms_and_conditions(data: Record<string, unknown>): string | null;
/** Parse the nullable account terms scalar. */
export function parse_terms_and_conditions(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable account terms scalar. */
return $.call(_required_nullable_string, [data, "termsAndConditions", "termsAndConditions"], null);
}

export function parse_marketing_preferences(data: Record<string, unknown>): MarketingPreferencesResult | null;
/** Parse the signed-in user's country-specific marketing preferences. */
export function parse_marketing_preferences(...__args: any[]): any {
let preferences, user;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the signed-in user's country-specific marketing preferences. */
user = $.call(_root, [data, "user"], null);
if ($.truth(((user === null)))) {
return null;
}
preferences = $.call(_required_optional_typed_object, [user, "countryMarketingPreferences", "user.countryMarketingPreferences"], null);
if ($.truth(((preferences === null)))) {
return null;
}
return $.call(_parse_country_marketing_preferences, [preferences, "user.countryMarketingPreferences"], null);
}

export function parse_create_pin(data: Record<string, unknown>): CreatePinResult | null;
/** Parse every generated CreatePin union branch. */
export function parse_create_pin(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated CreatePin union branch. */
root_field = "createPin";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "ResponseStatus")))) {
return $.call(PinOperationSuccess, [$.call(_required_nullable_bool, [root, "success", ($.str(root_field) + ".success")], null)], null);
}
if ($.truth(($.eq(typename, "CreatePINError")))) {
return $.call(CreatePinError, [$.call(_required_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function parse_update_pin(data: Record<string, unknown>): UpdatePinResult | null;
/** Parse every generated UpdatePin union branch. */
export function parse_update_pin(...__args: any[]): any {
let root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated UpdatePin union branch. */
root_field = "updatePin";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
if ($.truth(($.eq(typename, "ResponseStatus")))) {
return $.call(PinOperationSuccess, [$.call(_required_nullable_bool, [root, "success", ($.str(root_field) + ".success")], null)], null);
}
if ($.truth(($.eq(typename, "ValidationError")))) {
return $.call(PinValidationError, [$.call(_required_nullable_string, [root, "message", ($.str(root_field) + ".message")], null)], null);
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function parse_update_account(data: Record<string, unknown>): UpdateAccountResult | null;
/** Parse every generated account-update union branch. */
export function parse_update_account(...__args: any[]): any {
let address, carrier, message_path, root, root_field, typename;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse every generated account-update union branch. */
root_field = "updateAccount";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
typename = $.call(_typename, [root, root_field], null);
message_path = ($.str(root_field) + ".message");
if ($.truth(($.eq(typename, "UpdateAccountFirstNameError")))) {
return $.call(UpdateAccountFirstNameError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "UpdateAccountLastNameError")))) {
return $.call(UpdateAccountLastNameError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "UpdateAccountAddressError")))) {
return $.call(UpdateAccountAddressError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "UpdateAccountPostalCodeError")))) {
return $.call(UpdateAccountPostalCodeError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "UpdateAccountMobileNumberError")))) {
return $.call(UpdateAccountMobileNumberError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "UpdateAccountLandlineNumberError")))) {
return $.call(UpdateAccountLandlineNumberError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth(($.eq(typename, "UpdateAccountGeneralError")))) {
return $.call(UpdateAccountGeneralError, [$.call(_required_string, [root, "message", message_path], null)], null);
}
if ($.truth((!$.eq(typename, "User")))) {
return $.call(UnselectedAccountResult, [typename], null);
}
address = $.call(_required_optional_typed_object, [root, "address", ($.str(root_field) + ".address")], null);
carrier = $.call(_required_optional_typed_object, [root, "mobileNetworkOperator", ($.str(root_field) + ".mobileNetworkOperator")], null);
return $.call(UpdateAccountSuccess, [], Object.assign({}, {"first_name": $.call(_required_string, [root, "firstName", ($.str(root_field) + ".firstName")], null)}, {"last_name": $.call(_required_string, [root, "lastName", ($.str(root_field) + ".lastName")], null)}, {"email": $.call(_required_string, [root, "email", ($.str(root_field) + ".email")], null)}, {"mobile_number": $.call(_required_nullable_string, [root, "mobileNumber", ($.str(root_field) + ".mobileNumber")], null)}, {"address": $.call(_parse_updated_address, [address, ($.str(root_field) + ".address")], null)}, {"mobile_network_operator": $.call(_parse_mobile_network_operator, [carrier, ($.str(root_field) + ".mobileNetworkOperator")], null)}));
}

export function parse_delete_account(data: Record<string, unknown>): DeleteAccountResult | null;
/** Parse the nullable account-deletion status. */
export function parse_delete_account(...__args: any[]): any {
let root, root_field;
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse the nullable account-deletion status. */
root_field = "deleteAccount";
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
return $.call(DeleteAccountResult, [$.call(_required_nullable_bool, [root, "success", ($.str(root_field) + ".success")], null)], null);
}

export function parse_update_nci_marketing_preferences(data: Record<string, unknown>): MarketingPreferencesResult | null;
/** Parse country preferences returned after an NCI update. */
export function parse_update_nci_marketing_preferences(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse country preferences returned after an NCI update. */
return $.call(_parse_updated_marketing_preferences, [data, "updateNCIAccountPreferences"], null);
}

export function parse_update_nna_marketing_preferences(data: Record<string, unknown>): MarketingPreferencesResult | null;
/** Parse country preferences returned after an NNA update. */
export function parse_update_nna_marketing_preferences(...__args: any[]): any {
let {"data": data} = $.bind(__args, ["data"], {}, [], null, null);
/** Parse country preferences returned after an NNA update. */
return $.call(_parse_updated_marketing_preferences, [data, "updateAccountPreferences"], null);
}

export function _parse_updated_marketing_preferences(data: Record<string, unknown>, root_field: string): MarketingPreferencesResult | null;
/** Translated upstream _parse_updated_marketing_preferences. */
export function _parse_updated_marketing_preferences(...__args: any[]): any {
let path, preferences, root;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
root = $.call(_root, [data, root_field], null);
if ($.truth(((root === null)))) {
return null;
}
path = ($.str(root_field) + ".countryMarketingPreferences");
preferences = $.call(_required_optional_typed_object, [root, "countryMarketingPreferences", path], null);
if ($.truth(((preferences === null)))) {
return null;
}
return $.call(_parse_country_marketing_preferences, [preferences, path], null);
}

export function _parse_country_marketing_preferences(value: Record<string, unknown>, path: string): MarketingPreferencesResult;
/** Translated upstream _parse_country_marketing_preferences. */
export function _parse_country_marketing_preferences(...__args: any[]): any {
let typename;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
typename = $.call(_typename, [value, path], null);
if ($.truth(($.eq(typename, "NCIMarketingPreferences")))) {
return $.call(NCIMarketingPreferences, [], Object.assign({}, {"email": $.call(_required_nullable_bool, [value, "email", ($.str(path) + ".email")], null)}, {"product_updates": $.call(_parse_notification_preferences, [value, "productUpdates", ($.str(path) + ".productUpdates")], null)}, {"news_events": $.call(_parse_notification_preferences, [value, "newsEvents", ($.str(path) + ".newsEvents")], null)}, {"offers_promotion": $.call(_parse_notification_preferences, [value, "offersPromotion", ($.str(path) + ".offersPromotion")], null)}));
}
if ($.truth(($.eq(typename, "NNAMarketingPreferences")))) {
return $.call(NNAMarketingPreferences, [], Object.assign({}, {"newsletter": $.call(_marketing_preference_list, [value, "newsletter", path], null)}, {"product_offers": $.call(_marketing_preference_list, [value, "productOffers", path], null)}, {"service_offers": $.call(_marketing_preference_list, [value, "serviceOffers", path], null)}, {"scheduled_maintenance": $.call(_marketing_preference_list, [value, "scheduledMaintenance", path], null)}, {"feedback": $.call(_marketing_preference_list, [value, "feedback", path], null)}));
}
return $.call(UnselectedAccountResult, [typename], null);
}

export function _parse_notification_preferences(container: Record<string, unknown>, field: string, path: string): MarketingNotificationPreferences | null;
/** Translated upstream _parse_notification_preferences. */
export function _parse_notification_preferences(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_optional_typed_object, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(MarketingNotificationPreferences, [], Object.assign({}, {"email": $.call(_required_nullable_bool, [value, "email", ($.str(path) + ".email")], null)}, {"text_message": $.call(_required_nullable_bool, [value, "textMessage", ($.str(path) + ".textMessage")], null)}, {"direct_mail": $.call(_required_nullable_bool, [value, "directMail", ($.str(path) + ".directMail")], null)}, {"in_app": $.call(_required_nullable_bool, [value, "inApp", ($.str(path) + ".inApp")], null)}, {"in_vehicle": $.call(_required_nullable_bool, [value, "inVehicle", ($.str(path) + ".inVehicle")], null)}));
}

export function _marketing_preference_list(container: Record<string, unknown>, field: string, parent_path: string): ReadonlyArray<MarketingPreferenceType | null> | null;
/** Translated upstream _marketing_preference_list. */
export function _marketing_preference_list(...__args: any[]): any {
let index, item, path, result, value;
let {"container": container, "field": field, "parent_path": parent_path} = $.bind(__args, ["container", "field", "parent_path"], {}, [], null, null);
path = ($.str(parent_path) + "." + $.str(field));
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.list], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a list")], null);
}
result = [];
for ([index, item] of $.iterable($.call($.enumerate, [value], null))) {
if ($.truth(((item === null)))) {
$.call($.attr(result, "append"), [null], null);
continue;
}
$.call($.attr(result, "append"), [$.call(_enum, [item, MarketingPreferenceType, ($.str(path) + "[" + $.str(index) + "]")], null)], null);
}
return $.call($.tuple, [result], null);
}

export function _parse_updated_address(value: Record<string, unknown> | null, path: string): UpdatedAccountAddress | null;
/** Translated upstream _parse_updated_address. */
export function _parse_updated_address(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(UpdatedAccountAddress, [], Object.assign({}, {"address_1": $.call(_required_nullable_string, [value, "address1", ($.str(path) + ".address1")], null)}, {"address_2": $.call(_required_nullable_string, [value, "address2", ($.str(path) + ".address2")], null)}, {"city": $.call(_required_nullable_string, [value, "city", ($.str(path) + ".city")], null)}, {"state": $.call(_required_nullable_string, [value, "state", ($.str(path) + ".state")], null)}, {"country": $.call(_required_nullable_string, [value, "country", ($.str(path) + ".country")], null)}, {"postal_code": $.call(_required_nullable_string, [value, "postalCode", ($.str(path) + ".postalCode")], null)}, {"district": $.call(_required_nullable_string, [value, "district", ($.str(path) + ".district")], null)}, {"street_number": $.call(_required_nullable_string, [value, "streetNumber", ($.str(path) + ".streetNumber")], null)}));
}

export function _parse_mobile_network_operator(value: Record<string, unknown> | null, path: string): MobileNetworkOperator | null;
/** Translated upstream _parse_mobile_network_operator. */
export function _parse_mobile_network_operator(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(MobileNetworkOperator, [], Object.assign({}, {"code": $.call(_required_enum, [value, "code", MobileCarrierCode, ($.str(path) + ".code")], null)}, {"id": $.call(_required_int, [value, "id", ($.str(path) + ".id")], null)}, {"name": $.call(_required_string, [value, "name", ($.str(path) + ".name")], null)}));
}

export function _root(data: Record<string, unknown>, root_field: string): Record<string, unknown> | null;
/** Translated upstream _root. */
export function _root(...__args: any[]): any {
let value;
let {"data": data, "root_field": root_field} = $.bind(__args, ["data", "root_field"], {}, [], null, null);
if ($.truth((!$.contains(data, root_field)))) {
throw $.call(ResponseError, [($.str(root_field) + " is missing")], null);
}
value = $.get(data, root_field);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_typed_object, [value, root_field], null);
}

export function _typed_object(value: unknown, path: string): Record<string, unknown>;
/** Translated upstream _typed_object. */
export function _typed_object(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, Mapping], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an object")], null);
}
$.call(_typename, [value, path], null);
return value;
}

export function _required_optional_typed_object(container: Record<string, unknown>, field: string, path: string): Record<string, unknown> | null;
/** Translated upstream _required_optional_typed_object. */
export function _required_optional_typed_object(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
return $.call(_typed_object, [value, path], null);
}

export function _typename(container: Record<string, unknown>, path: string): string;
/** Translated upstream _typename. */
export function _typename(...__args: any[]): any {
let {"container": container, "path": path} = $.bind(__args, ["container", "path"], {}, [], null, null);
return $.call(_required_string, [container, "__typename", ($.str(path) + ".__typename")], null);
}

export function _required_field(container: Record<string, unknown>, field: string, path: string): unknown;
/** Translated upstream _required_field. */
export function _required_field(...__args: any[]): any {
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
if ($.truth((!$.contains(container, field)))) {
throw $.call(ResponseError, [($.str(path) + " is missing")], null);
}
return $.get(container, field);
}

export function _required_string(container: Record<string, unknown>, field: string, path: string): string;
/** Translated upstream _required_string. */
export function _required_string(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return value;
}

export function _required_nullable_string(container: Record<string, unknown>, field: string, path: string): string | null;
/** Translated upstream _required_nullable_string. */
export function _required_nullable_string(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
return value;
}

export function _required_nullable_bool(container: Record<string, unknown>, field: string, path: string): boolean | null;
/** Translated upstream _required_nullable_bool. */
export function _required_nullable_bool(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth(!$.truth($.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a boolean")], null);
}
return value;
}

export function _required_int(container: Record<string, unknown>, field: string, path: string): number;
/** Translated upstream _required_int. */
export function _required_int(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.int], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an integer")], null);
}
return value;
}

export function _required_nullable_int(container: Record<string, unknown>, field: string, path: string): number | null;
/** Translated upstream _required_nullable_int. */
export function _required_nullable_int(...__args: any[]): any {
let value;
let {"container": container, "field": field, "path": path} = $.bind(__args, ["container", "field", "path"], {}, [], null, null);
value = $.call(_required_field, [container, field, path], null);
if ($.truth(((value === null)))) {
return null;
}
if ($.truth($.or(() => !$.truth($.call($.isinstance, [value, $.int], null)), () => $.call($.isinstance, [value, $.bool], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not an integer")], null);
}
return value;
}

export function _required_enum(container: Record<string, unknown>, field: string, enum_type: any, path: string): any;
/** Translated upstream _required_enum. */
export function _required_enum(...__args: any[]): any {
let {"container": container, "field": field, "enum_type": enum_type, "path": path} = $.bind(__args, ["container", "field", "enum_type", "path"], {}, [], null, null);
return $.call(_enum, [$.call(_required_field, [container, field, path], null), enum_type, path], null);
}

export function _enum(value: unknown, enum_type: any, path: string): any;
/** Translated upstream _enum. */
export function _enum(...__args: any[]): any {
let {"value": value, "enum_type": enum_type, "path": path} = $.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
if ($.truth(!$.truth($.call($.isinstance, [value, $.str], null)))) {
throw $.call(ResponseError, [($.str(path) + " is not a string")], null);
}
try {
return $.call(enum_type, [value], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { try {
return $.call(enum_type, ["UNKNOWN__"], null);
} catch (__error) {
if ($.isinstance(__error, $.ValueError)) { throw $.call(ResponseError, [($.str(path) + " has an unsupported value: " + $.str(value))], null); } else { throw __error; }
} } else { throw __error; }
}
}
