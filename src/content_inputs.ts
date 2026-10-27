// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import { ClientType } from "./content_models";
export { ClientType };

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

export function contact_us_variables(client_type: ClientType): Record<string, unknown>;
/** Serialize the required contact-link client type. */
export function contact_us_variables(...__args: any[]): any {
let {"client_type": client_type} = $.bind(__args, ["client_type"], {}, [], null, null);
/** Serialize the required contact-link client type. */
return Object.assign({}, {["clientType"]: $.call(serialize_enum, [client_type], null)});
}

export function faq_variables(categories?: ReadonlyArray<string | null> | UnsetType | null): Record<string, unknown>;
/** Serialize optional nullable FAQ category filters. */
export function faq_variables(...__args: any[]): any {
let serialized;
let {"categories": categories} = $.bind(__args, ["categories"], {"categories": UNSET}, [], null, null);
/** Serialize optional nullable FAQ category filters. */
serialized = ($.truth($.call($.isinstance, [categories, $.tuple], null)) ? $.call($.list, [categories], null) : categories);
return $.call(optional_input_fields, [], Object.assign({}, {"categories": serialized}));
}

export function live_chat_hours_variables(departments?: ReadonlyArray<string | null> | UnsetType | null, enhanced_chat?: boolean | UnsetType | null): Record<string, unknown>;
/** Serialize optional live-chat department and implementation filters. */
export function live_chat_hours_variables(...__args: any[]): any {
let serialized;
let {"departments": departments, "enhanced_chat": enhanced_chat} = $.bind(__args, ["departments", "enhanced_chat"], {"departments": UNSET, "enhanced_chat": UNSET}, [], null, null);
/** Serialize optional live-chat department and implementation filters. */
serialized = ($.truth($.call($.isinstance, [departments, $.tuple], null)) ? $.call($.list, [departments], null) : departments);
return $.call(optional_input_fields, [], Object.assign({}, {"departments": serialized}, {"enhancedChat": enhanced_chat}));
}
