// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

import { MarketingPreferenceType } from "./account_models";
export { MarketingPreferenceType };

import { AddressInput, address_input } from "./common_inputs";
export { AddressInput, address_input };

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

/** Optional delivery-channel toggles accepted by NCI preferences. */
export class NotificationPreferenceTogglesInput {
readonly email: boolean | UnsetType | null;
readonly text_message: boolean | UnsetType | null;
readonly direct_mail: boolean | UnsetType | null;
readonly in_vehicle: boolean | UnsetType | null;
readonly in_app: boolean | UnsetType | null;
static __fields = [["email", UNSET], ["text_message", UNSET], ["direct_mail", UNSET], ["in_vehicle", UNSET], ["in_app", UNSET]];
constructor(email?: boolean | UnsetType | null, text_message?: boolean | UnsetType | null, direct_mail?: boolean | UnsetType | null, in_vehicle?: boolean | UnsetType | null, in_app?: boolean | UnsetType | null);
constructor(options: { email?: boolean | UnsetType | null; text_message?: boolean | UnsetType | null; direct_mail?: boolean | UnsetType | null; in_vehicle?: boolean | UnsetType | null; in_app?: boolean | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NotificationPreferenceTogglesInput, __args);  Object.freeze(this); }
}
$.classType(NotificationPreferenceTogglesInput);

/** Required email choice and optional NCI preference categories. */
export class NCIMarketingPreferenceInput {
readonly email: boolean;
readonly offers_promotion: NotificationPreferenceTogglesInput | UnsetType | null;
readonly news_events: NotificationPreferenceTogglesInput | UnsetType | null;
readonly product_updates: NotificationPreferenceTogglesInput | UnsetType | null;
static __fields = [["email", $.MISSING], ["offers_promotion", UNSET], ["news_events", UNSET], ["product_updates", UNSET]];
constructor(email: boolean, offers_promotion?: NotificationPreferenceTogglesInput | UnsetType | null, news_events?: NotificationPreferenceTogglesInput | UnsetType | null, product_updates?: NotificationPreferenceTogglesInput | UnsetType | null);
constructor(options: { email: boolean; offers_promotion?: NotificationPreferenceTogglesInput | UnsetType | null; news_events?: NotificationPreferenceTogglesInput | UnsetType | null; product_updates?: NotificationPreferenceTogglesInput | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, NCIMarketingPreferenceInput, __args);  Object.freeze(this); }
}
$.classType(NCIMarketingPreferenceInput);

/** NNA marketing channels grouped by communication category. */
export class MarketingPreferenceInput {
readonly newsletter: ReadonlyArray<MarketingPreferenceType>;
readonly product_offers: ReadonlyArray<MarketingPreferenceType>;
readonly service_offers: ReadonlyArray<MarketingPreferenceType>;
readonly scheduled_maintenance: ReadonlyArray<MarketingPreferenceType>;
readonly feedback: ReadonlyArray<MarketingPreferenceType>;
readonly promotion_offers: ReadonlyArray<MarketingPreferenceType> | UnsetType | null;
static __fields = [["newsletter", $.MISSING], ["product_offers", $.MISSING], ["service_offers", $.MISSING], ["scheduled_maintenance", $.MISSING], ["feedback", $.MISSING], ["promotion_offers", UNSET]];
constructor(newsletter: ReadonlyArray<MarketingPreferenceType>, product_offers: ReadonlyArray<MarketingPreferenceType>, service_offers: ReadonlyArray<MarketingPreferenceType>, scheduled_maintenance: ReadonlyArray<MarketingPreferenceType>, feedback: ReadonlyArray<MarketingPreferenceType>, promotion_offers?: ReadonlyArray<MarketingPreferenceType> | UnsetType | null);
constructor(options: { newsletter: ReadonlyArray<MarketingPreferenceType>; product_offers: ReadonlyArray<MarketingPreferenceType>; service_offers: ReadonlyArray<MarketingPreferenceType>; scheduled_maintenance: ReadonlyArray<MarketingPreferenceType>; feedback: ReadonlyArray<MarketingPreferenceType>; promotion_offers?: ReadonlyArray<MarketingPreferenceType> | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, MarketingPreferenceInput, __args);  Object.freeze(this); }
}
$.classType(MarketingPreferenceInput);

/** Postal address required for direct account registration. */
export class RegisterAccountAddressInput {
readonly address_1: string;
readonly city: string;
readonly state: string;
readonly postal_code: string;
readonly country: string;
readonly address_2: string | UnsetType | null;
static __fields = [["address_1", $.MISSING], ["city", $.MISSING], ["state", $.MISSING], ["postal_code", $.MISSING], ["country", $.MISSING], ["address_2", UNSET]];
constructor(address_1: string, city: string, state: string, postal_code: string, country: string, address_2?: string | UnsetType | null);
constructor(options: { address_1: string; city: string; state: string; postal_code: string; country: string; address_2?: string | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountAddressInput, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountAddressInput);

/** Complete account-registration input accepted by Nissan. */
export class RegisterAccountInput {
readonly first_name: string;
readonly last_name: string;
readonly email: string;
readonly phone_number: string;
readonly password: string;
readonly address: RegisterAccountAddressInput;
readonly second_last_name: string | UnsetType | null;
readonly mobile_carrier_id: number | UnsetType | null;
readonly marketing_preferences: MarketingPreferenceInput | UnsetType | null;
static __fields = [["first_name", $.MISSING], ["last_name", $.MISSING], ["email", $.MISSING], ["phone_number", $.MISSING], ["password", $.MISSING], ["address", $.MISSING], ["second_last_name", UNSET], ["mobile_carrier_id", UNSET], ["marketing_preferences", UNSET]];
constructor(first_name: string, last_name: string, email: string, phone_number: string, password: string, address: RegisterAccountAddressInput, second_last_name?: string | UnsetType | null, mobile_carrier_id?: number | UnsetType | null, marketing_preferences?: MarketingPreferenceInput | UnsetType | null);
constructor(options: { first_name: string; last_name: string; email: string; phone_number: string; password: string; address: RegisterAccountAddressInput; second_last_name?: string | UnsetType | null; mobile_carrier_id?: number | UnsetType | null; marketing_preferences?: MarketingPreferenceInput | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RegisterAccountInput, __args);  Object.freeze(this); }
}
$.classType(RegisterAccountInput);

/** Nullable, independently optional account fields accepted by updates. */
export class UpdateAccountInput {
readonly first_name: string | UnsetType | null;
readonly last_name: string | UnsetType | null;
readonly email: string | UnsetType | null;
readonly landline_number: string | UnsetType | null;
readonly mobile_number: string | UnsetType | null;
readonly mobile_carrier_id: number | UnsetType | null;
readonly address: AddressInput | UnsetType | null;
static __fields = [["first_name", UNSET], ["last_name", UNSET], ["email", UNSET], ["landline_number", UNSET], ["mobile_number", UNSET], ["mobile_carrier_id", UNSET], ["address", UNSET]];
constructor(first_name?: string | UnsetType | null, last_name?: string | UnsetType | null, email?: string | UnsetType | null, landline_number?: string | UnsetType | null, mobile_number?: string | UnsetType | null, mobile_carrier_id?: number | UnsetType | null, address?: AddressInput | UnsetType | null);
constructor(options: { first_name?: string | UnsetType | null; last_name?: string | UnsetType | null; email?: string | UnsetType | null; landline_number?: string | UnsetType | null; mobile_number?: string | UnsetType | null; mobile_carrier_id?: number | UnsetType | null; address?: AddressInput | UnsetType | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UpdateAccountInput, __args);  Object.freeze(this); }
}
$.classType(UpdateAccountInput);

export function notification_preference_toggles_input(value: NotificationPreferenceTogglesInput): Record<string, unknown>;
/** Serialize NCI notification toggles with Apollo omission semantics. */
export function notification_preference_toggles_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize NCI notification toggles with Apollo omission semantics. */
return $.call(optional_input_fields, [], Object.assign({}, {"email": $.attr(value, "email")}, {"textMessage": $.attr(value, "text_message")}, {"directMail": $.attr(value, "direct_mail")}, {"inVehicle": $.attr(value, "in_vehicle")}, {"inApp": $.attr(value, "in_app")}));
}

export function nci_marketing_preference_input(value: NCIMarketingPreferenceInput): Record<string, unknown>;
/** Serialize an NCI marketing-preference input. */
export function nci_marketing_preference_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize an NCI marketing-preference input. */
return $.call(optional_input_fields, [], Object.assign({}, {"email": $.attr(value, "email")}, {"offersPromotion": $.call(_optional_notification_toggles, [$.attr(value, "offers_promotion")], null)}, {"newsEvents": $.call(_optional_notification_toggles, [$.attr(value, "news_events")], null)}, {"productUpdates": $.call(_optional_notification_toggles, [$.attr(value, "product_updates")], null)}));
}

export function marketing_preference_input(value: MarketingPreferenceInput): Record<string, unknown>;
/** Serialize an NNA marketing-preference input. */
export function marketing_preference_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize an NNA marketing-preference input. */
return $.call(optional_input_fields, [], Object.assign({}, {"newsletter": $.call(_marketing_channels, [$.attr(value, "newsletter")], null)}, {"productOffers": $.call(_marketing_channels, [$.attr(value, "product_offers")], null)}, {"serviceOffers": $.call(_marketing_channels, [$.attr(value, "service_offers")], null)}, {"scheduledMaintenance": $.call(_marketing_channels, [$.attr(value, "scheduled_maintenance")], null)}, {"feedback": $.call(_marketing_channels, [$.attr(value, "feedback")], null)}, {"promotionOffers": $.call(_optional_marketing_channels, [$.attr(value, "promotion_offers")], null)}));
}

export function register_account_address_input(value: RegisterAccountAddressInput): Record<string, unknown>;
/** Serialize the required registration address. */
export function register_account_address_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize the required registration address. */
return $.call(optional_input_fields, [], Object.assign({}, {"address1": $.attr(value, "address_1")}, {"address2": $.attr(value, "address_2")}, {"city": $.attr(value, "city")}, {"state": $.attr(value, "state")}, {"postalCode": $.attr(value, "postal_code")}, {"country": $.attr(value, "country")}));
}

export function register_account_input(value: RegisterAccountInput): Record<string, unknown>;
/** Serialize the direct account-registration input. */
export function register_account_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize the direct account-registration input. */
return $.call(optional_input_fields, [], Object.assign({}, {"firstName": $.attr(value, "first_name")}, {"lastName": $.attr(value, "last_name")}, {"secondLastName": $.attr(value, "second_last_name")}, {"email": $.attr(value, "email")}, {"phoneNumber": $.attr(value, "phone_number")}, {"mobileCarrierId": $.attr(value, "mobile_carrier_id")}, {"password": $.attr(value, "password")}, {"address": $.call(register_account_address_input, [$.attr(value, "address")], null)}, {"marketingPreferences": $.call(_optional_marketing_preference, [$.attr(value, "marketing_preferences")], null)}));
}

export function update_account_input(value: UpdateAccountInput): Record<string, unknown>;
/** Serialize independently optional account fields. */
export function update_account_input(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
/** Serialize independently optional account fields. */
return $.call(optional_input_fields, [], Object.assign({}, {"firstName": $.attr(value, "first_name")}, {"lastName": $.attr(value, "last_name")}, {"email": $.attr(value, "email")}, {"landlineNumber": $.attr(value, "landline_number")}, {"mobileNumber": $.attr(value, "mobile_number")}, {"mobileCarrierId": $.attr(value, "mobile_carrier_id")}, {"address": $.call(_optional_address, [$.attr(value, "address")], null)}));
}

export function validate_nissan_id_variables(nissan_id: string): Record<string, unknown>;
/** Serialize a Nissan ID validation request. */
export function validate_nissan_id_variables(...__args: any[]): any {
let {"nissan_id": nissan_id} = $.bind(__args, ["nissan_id"], {}, [], null, null);
/** Serialize a Nissan ID validation request. */
return Object.assign({}, {["nissanId"]: nissan_id});
}

export function register_account_variables(config: RegisterAccountInput): Record<string, unknown>;
/** Serialize account-registration variables. */
export function register_account_variables(...__args: any[]): any {
let {"config": config} = $.bind(__args, ["config"], {}, [], null, null);
/** Serialize account-registration variables. */
return Object.assign({}, {["config"]: $.call(register_account_input, [config], null)});
}

export function ncar_icar_verify_account_variables(guid: string): Record<string, unknown>;
/** Serialize an NCAR/ICAR enrollment identifier. */
export function ncar_icar_verify_account_variables(...__args: any[]): any {
let {"guid": guid} = $.bind(__args, ["guid"], {}, [], null, null);
/** Serialize an NCAR/ICAR enrollment identifier. */
return Object.assign({}, {["guid"]: guid});
}

export function ncar_icar_generate_otp_variables(guid: string, phone_number: string): Record<string, unknown>;
/** Serialize NCAR/ICAR OTP generation variables. */
export function ncar_icar_generate_otp_variables(...__args: any[]): any {
let {"guid": guid, "phone_number": phone_number} = $.bind(__args, ["guid", "phone_number"], {}, [], null, null);
/** Serialize NCAR/ICAR OTP generation variables. */
return Object.assign({}, {["guid"]: guid}, {["phoneNumber"]: phone_number});
}

export function ncar_icar_verify_otp_variables(guid: string, phone_number: string, reference_id: string, otp: string): Record<string, unknown>;
/** Serialize NCAR/ICAR OTP verification variables. */
export function ncar_icar_verify_otp_variables(...__args: any[]): any {
let {"guid": guid, "phone_number": phone_number, "reference_id": reference_id, "otp": otp} = $.bind(__args, ["guid", "phone_number", "reference_id", "otp"], {}, [], null, null);
/** Serialize NCAR/ICAR OTP verification variables. */
return Object.assign({}, {["guid"]: guid}, {["phoneNumber"]: phone_number}, {["referenceId"]: reference_id}, {["otp"]: otp});
}

export function generate_otp_variables(phone_number: string): Record<string, unknown>;
/** Serialize direct OTP generation variables. */
export function generate_otp_variables(...__args: any[]): any {
let {"phone_number": phone_number} = $.bind(__args, ["phone_number"], {}, [], null, null);
/** Serialize direct OTP generation variables. */
return Object.assign({}, {["phoneNumber"]: phone_number});
}

export function verify_otp_variables(phone_number: string, otp: string, reference_id: string): Record<string, unknown>;
/** Serialize direct OTP verification variables. */
export function verify_otp_variables(...__args: any[]): any {
let {"phone_number": phone_number, "otp": otp, "reference_id": reference_id} = $.bind(__args, ["phone_number", "otp", "reference_id"], {}, [], null, null);
/** Serialize direct OTP verification variables. */
return Object.assign({}, {["phoneNumber"]: phone_number}, {["otp"]: otp}, {["referenceId"]: reference_id});
}

export function pin_variables(question_id: string, answer: string, new_pin: string): Record<string, unknown>;
/** Serialize PIN creation or update variables. */
export function pin_variables(...__args: any[]): any {
let {"question_id": question_id, "answer": answer, "new_pin": new_pin} = $.bind(__args, ["question_id", "answer", "new_pin"], {}, [], null, null);
/** Serialize PIN creation or update variables. */
return Object.assign({}, {["questionId"]: question_id}, {["answer"]: answer}, {["newPin"]: new_pin});
}

export function update_account_variables(config?: UpdateAccountInput | UnsetType | null): Record<string, unknown>;
/** Serialize an optional nullable account update input. */
export function update_account_variables(...__args: any[]): any {
let serialized;
let {"config": config} = $.bind(__args, ["config"], {"config": UNSET}, [], null, null);
/** Serialize an optional nullable account update input. */
if ($.truth($.call($.isinstance, [config, UpdateAccountInput], null))) {
serialized = $.call(update_account_input, [config], null);
} else {
serialized = config;
}
return $.call(optional_input_fields, [], Object.assign({}, {"config": serialized}));
}

export function update_nci_marketing_preferences_variables(marketing_preferences: NCIMarketingPreferenceInput): Record<string, unknown>;
/** Serialize required NCI marketing preferences. */
export function update_nci_marketing_preferences_variables(...__args: any[]): any {
let {"marketing_preferences": marketing_preferences} = $.bind(__args, ["marketing_preferences"], {}, [], null, null);
/** Serialize required NCI marketing preferences. */
return Object.assign({}, {["marketingPreferences"]: $.call(nci_marketing_preference_input, [marketing_preferences], null)});
}

export function update_nna_marketing_preferences_variables(marketing_preferences?: MarketingPreferenceInput | UnsetType | null): Record<string, unknown>;
/** Serialize optional nullable NNA marketing preferences. */
export function update_nna_marketing_preferences_variables(...__args: any[]): any {
let serialized;
let {"marketing_preferences": marketing_preferences} = $.bind(__args, ["marketing_preferences"], {"marketing_preferences": UNSET}, [], null, null);
/** Serialize optional nullable NNA marketing preferences. */
if ($.truth($.call($.isinstance, [marketing_preferences, MarketingPreferenceInput], null))) {
serialized = $.call(marketing_preference_input, [marketing_preferences], null);
} else {
serialized = marketing_preferences;
}
return $.call(optional_input_fields, [], Object.assign({}, {"marketingPreferences": serialized}));
}

export function _marketing_channels(values: ReadonlyArray<MarketingPreferenceType>): ReadonlyArray<string>;
/** Translated upstream _marketing_channels. */
export function _marketing_channels(...__args: any[]): any {
let value;
let {"values": values} = $.bind(__args, ["values"], {}, [], null, null);
return (() => { const __out: any = []; for (const value of $.iterable(values)) { __out.push($.call(serialize_enum, [value], null)); } return __out; })();
}

export function _optional_marketing_channels(values: ReadonlyArray<MarketingPreferenceType> | UnsetType | null): unknown;
/** Translated upstream _optional_marketing_channels. */
export function _optional_marketing_channels(...__args: any[]): any {
let {"values": values} = $.bind(__args, ["values"], {}, [], null, null);
if ($.truth($.call($.isinstance, [values, $.tuple], null))) {
return $.call(_marketing_channels, [values], null);
}
return values;
}

export function _optional_notification_toggles(value: NotificationPreferenceTogglesInput | UnsetType | null): unknown;
/** Translated upstream _optional_notification_toggles. */
export function _optional_notification_toggles(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, NotificationPreferenceTogglesInput], null))) {
return $.call(notification_preference_toggles_input, [value], null);
}
return value;
}

export function _optional_marketing_preference(value: MarketingPreferenceInput | UnsetType | null): unknown;
/** Translated upstream _optional_marketing_preference. */
export function _optional_marketing_preference(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, MarketingPreferenceInput], null))) {
return $.call(marketing_preference_input, [value], null);
}
return value;
}

export function _optional_address(value: AddressInput | UnsetType | null): unknown;
/** Translated upstream _optional_address. */
export function _optional_address(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, AddressInput], null))) {
return $.call(address_input, [value], null);
}
return value;
}
