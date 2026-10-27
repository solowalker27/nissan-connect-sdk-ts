"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestProof = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
/** Verification values attached to requests that require them. */
class RequestProof {
    api_attestation;
    device_status;
    static __fields = [["api_attestation", _runtime_1.py.MISSING], ["device_status", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, RequestProof, __args); this.__post_init__(); Object.freeze(this); }
    /** Translated upstream __post_init__. */
    __post_init__(...__args) {
        let {} = _runtime_1.py.bind(__args, [], {}, [], null, null);
        if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.attr(this, "api_attestation")), () => !_runtime_1.py.truth(_runtime_1.py.attr(this, "device_status"))))) {
            throw _runtime_1.py.call(_runtime_1.py.ValueError, ["Request proof values must not be empty"], null);
        }
    }
}
exports.RequestProof = RequestProof;
_runtime_1.py.classType(RequestProof);
//# sourceMappingURL=request_proof.js.map