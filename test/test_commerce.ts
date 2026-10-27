// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const cast = $.cast;

const ClientSession = $.ClientSession;

import { AddProductToCartInput, NissanClient, Tokens } from "../src/index";

export let EXPECTED_OPERATIONS = Object.assign({}, {["ADD_PRODUCT_TO_NISSAN_STORE_CART"]: "eed0e98dfe2cc937bc49082ee698ec7c5a160f7e1ede1aa0006f79cb5bfdd4af"}, {["CANCEL_PENDING_SUBSCRIPTION"]: "7c58341746585b1af72ceb9d106da15c99d9660016b35fab59cdf3b6ae27e20f"}, {["CANCEL_SUBSCRIPTION"]: "582a6770133943805e710c65e4b27ade68e9f81530f88b417e2623e9cac277d2"}, {["CREATE_NISSAN_STORE_FOD_TRIAL_CHECKOUT_LINK"]: "9c6c28d802fca574a547c921840ebb9397093a213d6f4dfd05c522e12757b990"}, {["DIGITAL_WALLET_URL"]: "6ebdf2e75a646b0905f99afa77af67e9e6b6b58461b0d2bce71be4bc072fd30e"}, {["NISSAN_PAY"]: "6f08f0f64f7bebe3ce087dcdda08ef0198d3f926dec70c43941dd54e84fc660b"}, {["NISSAN_PAY_ORDER_HISTORY"]: "03eceb4c138de1b971d5c1415b29327cd990c4ba5392a82504aa429ded0c96bb"}, {["NISSAN_STORE_CHECKOUT_URL"]: "814f25c745f3e438233e812c89e1a9dc67bdf8c7416b54e983c1e5f9a3872cfe"}, {["PRODUCT_CATALOG"]: "03e4214e129ea35a0a2d8255aaac2481373ef478c611cfb9684e7281d812f30f"}, {["UPSERT_NISSAN_PAY_ACCOUNT"]: "f4483575cf435a5fa6693606a4915b97cb609fe110a74a58dbc162ba41feb0a4"});

/** Translated upstream FakeResponse. */
export class FakeResponse {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
let {"field": field, "value": value} = $.bind(__args, ["field", "value"], {}, [], null, null);
this["status"] = 200;
this["_payload"] = Object.assign({}, {["data"]: Object.assign({}, {[field]: value})});
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
}
$.classType(FakeResponse);

/** Translated upstream FakeSession. */
export class FakeSession {
/** Translated upstream __init__. */
constructor(...__args: any[]) {
let {"responses": responses} = $.bind(__args, [], {}, [], "responses", null);
this["responses"] = $.call($.list, [responses], null);
this["calls"] = [];
}
/** Translated upstream post. */
post(...__args: any[]): any {
let {"url": url, "kwargs": kwargs} = $.bind(__args, ["url"], {}, [], null, "kwargs");
$.call($.attr($.attr(this, "calls"), "append"), [Object.assign({}, {["url"]: url}, kwargs)], null);
if ($.truth(!$.truth($.attr(this, "responses")))) {
throw $.call($.AssertionError, ["Unexpected HTTP request"], null);
}
return $.call($.attr($.attr(this, "responses"), "pop"), [0], null);
}
}
$.classType(FakeSession);

/** Translated upstream make_client. */
export function make_client(...__args: any[]): any {
let {"session": session, "read_only": read_only} = $.bind(__args, ["session"], {}, ["read_only"], null, null);
return $.call(NissanClient, [session], Object.assign({}, {"tokens": $.call(Tokens, ["access-token", "refresh-token", "id-token"], null)}, {"read_only": read_only}));
}

/** Translated upstream product_input. */
export function product_input(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
return $.call(AddProductToCartInput, [], Object.assign({}, {"product_id": "product-id"}, {"quantity": 1}, {"vin": "VIN"}, {"product_selling_model_id": "selling-model-id"}, {"promotion_id": null}));
}
