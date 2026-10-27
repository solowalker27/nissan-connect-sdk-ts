// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_support";



const base64 = $.base64;

const json = $.json;

const Mapping = $.Mapping;

const Any = $.Any;
const cast = $.cast;

const ClientSession = $.ClientSession;

import { NissanClient, Tokens } from "../src/index";

/** Translated upstream FakeResponse. */
export class FakeResponse {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeResponse, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"status": status, "payload": payload, "body": body, "url": url, "headers": headers} = $.bind(__args, ["status", "payload"], {"payload": null, "body": "", "url": "", "headers": null}, ["body", "url", "headers"], null, null);
this["status"] = status;
this["_payload"] = payload;
this["_body"] = body;
this["url"] = url;
this["headers"] = $.call($.dict, [$.or(() => headers, () => {})], null);
}
/** Translated upstream __aenter__. */
async __aenter__(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return this;
}
/** Translated upstream __aexit__. */
async __aexit__(...__args: any[]): any {
let {"args": args} = $.bind(__args, [], {}, [], "args", null);
return null;
}
/** Translated upstream json. */
async json(...__args: any[]): any {
let {"content_type": content_type} = $.bind(__args, [], {"content_type": null}, ["content_type"], null, null);
return $.attr(this, "_payload");
}
/** Translated upstream text. */
async text(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.attr(this, "_body");
}
}
$.classType(FakeResponse);

/** Translated upstream FakeSession. */
export class FakeSession {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, FakeSession, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"responses": responses} = $.bind(__args, [], {}, [], "responses", null);
this["responses"] = $.call($.list, [responses], null);
this["calls"] = [];
}
/** Translated upstream get. */
get(...__args: any[]): any {
let {"url": url, "kwargs": kwargs} = $.bind(__args, ["url"], {}, [], null, "kwargs");
return $.call($.attr(this, "_request"), ["GET", url, kwargs], null);
}
/** Translated upstream post. */
post(...__args: any[]): any {
let {"url": url, "kwargs": kwargs} = $.bind(__args, ["url"], {}, [], null, "kwargs");
return $.call($.attr(this, "_request"), ["POST", url, kwargs], null);
}
/** Translated upstream _request. */
_request(...__args: any[]): any {
let response;
let {"method": method, "url": url, "kwargs": kwargs} = $.bind(__args, ["method", "url", "kwargs"], {}, [], null, null);
$.call($.attr($.attr(this, "calls"), "append"), [Object.assign({}, {["method"]: method}, {["url"]: url}, kwargs)], null);
response = $.call($.attr($.attr(this, "responses"), "pop"), [0], null);
if ($.truth(!$.truth($.attr(response, "url")))) {
response["url"] = url;
}
return response;
}
}
$.classType(FakeSession);

export let TOKENS = $.call(Tokens, ["access-token", "refresh-token", "id-token"], null);

/** Translated upstream jwt_with_expiration. */
export function jwt_with_expiration(...__args: any[]): any {
let encoded_payload;
let {"expires_at": expires_at} = $.bind(__args, ["expires_at"], {}, [], null, null);
encoded_payload = $.call($.attr($.call($.attr($.call($.attr(base64, "urlsafe_b64encode"), [$.call($.attr($.call($.attr(json, "dumps"), [Object.assign({}, {["exp"]: expires_at})], null), "encode"), [], null)], null), "decode"), [], null), "rstrip"), ["="], null);
return ("header." + $.str(encoded_payload) + ".signature");
}

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session, "read_only": read_only, "tokens": tokens} = $.bind(__args, ["session"], {"read_only": true, "tokens": TOKENS}, ["read_only", "tokens"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"read_only": read_only}, {"tokens": tokens}));
}

/** Translated upstream vehicle_subscription_product_payload. */
export function vehicle_subscription_product_payload(...__args: any[]): any {
let payload;
let {"overrides": overrides} = $.bind(__args, [], {}, [], null, "overrides");
payload = Object.assign({}, {["__typename"]: "VehicleSubscriptionProduct"}, {["productId"]: "product-1"}, {["marketingName"]: "Premium"}, {["description"]: "Connected services"}, {["services"]: ["REMOTE_ENGINE"]});
$.call($.attr(payload, "update"), [overrides], null);
return payload;
}

/** Translated upstream vehicle_subscription_payload. */
export function vehicle_subscription_payload(...__args: any[]): any {
let payload;
let {"overrides": overrides} = $.bind(__args, [], {}, [], null, "overrides");
payload = Object.assign({}, {["__typename"]: "VehicleSubscription"}, {["subscriptionId"]: "subscription-1"}, {["subscriptionServiceType"]: "Paid"}, {["purchaseType"]: "SUBSCRIPTION"}, {["productType"]: "TELEMATICS"}, {["nextBillingDate"]: null}, {["goodwillEndDate"]: null}, {["goodwillStartDate"]: null}, {["graceEndDate"]: null}, {["subscriptionStartDate"]: "2026-01-01T12:00:00Z"}, {["subscriptionEndDate"]: null}, {["isActive"]: true}, {["npSubscriptionPrice"]: null}, {["product"]: $.call(vehicle_subscription_product_payload, [], null)}, {["pendingOrder"]: null});
$.call($.attr(payload, "update"), [overrides], null);
return payload;
}
