// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";

const dataclass = $.dataclass;

/** Verification values attached to requests that require them. */
export class RequestProof {
readonly api_attestation: string;
readonly device_status: string;
static __fields = [["api_attestation", $.MISSING], ["device_status", $.MISSING]];
constructor(api_attestation: string, device_status: string);
constructor(options: { api_attestation: string; device_status: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, RequestProof, __args); this.__post_init__(); Object.freeze(this); }
__post_init__(): null;
/** Translated upstream __post_init__. */
__post_init__(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
if ($.truth($.or(() => !$.truth($.attr(this, "api_attestation")), () => !$.truth($.attr(this, "device_status"))))) {
throw $.call($.ValueError, ["Request proof values must not be empty"], null);
}
}
}
$.classType(RequestProof);
