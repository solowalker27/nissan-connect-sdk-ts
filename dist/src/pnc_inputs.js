"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlugAndChargeStatusInput = exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = void 0;
exports.start_charge_session_variables = start_charge_session_variables;
exports.stop_charge_session_variables = stop_charge_session_variables;
exports.update_pnc_service_status_variables = update_pnc_service_status_variables;
exports.retry_certificate_install_variables = retry_certificate_install_variables;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const pnc_models_1 = require("./pnc_models");
Object.defineProperty(exports, "PlugAndChargeStatusInput", { enumerable: true, get: function () { return pnc_models_1.PlugAndChargeStatusInput; } });
/** Build the public-session start input with optional location identity. */
function start_charge_session_variables(...__args) {
    let { "vin": vin, "evse_id": evse_id, "location_id": location_id } = _runtime_1.py.bind(__args, ["vin", "evse_id"], { "location_id": graphql_input_1.UNSET }, ["location_id"], null, null);
    /** Build the public-session start input with optional location identity. */
    return Object.assign({}, { ["config"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "evseId": evse_id }, { "locationId": location_id })) });
}
/** Build the public-session stop input used by every upstream service call site. */
function stop_charge_session_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Build the public-session stop input used by every upstream service call site. */
    return Object.assign({}, { ["config"]: Object.assign({}, { ["vin"]: vin }) });
}
/** Build an enable or disable request for Plug & Charge enrollment. */
function update_pnc_service_status_variables(...__args) {
    let { "vin": vin, "status": status } = _runtime_1.py.bind(__args, ["vin", "status"], {}, [], null, null);
    /** Build an enable or disable request for Plug & Charge enrollment. */
    return Object.assign({}, { ["config"]: Object.assign({}, { ["vin"]: vin }, { ["pncServiceStatus"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [status], null) }) });
}
/** Build the EMP certificate-install retry input. */
function retry_certificate_install_variables(...__args) {
    let { "vin": vin } = _runtime_1.py.bind(__args, ["vin"], {}, [], null, null);
    /** Build the EMP certificate-install retry input. */
    return Object.assign({}, { ["config"]: Object.assign({}, { ["vin"]: vin }) });
}
//# sourceMappingURL=pnc_inputs.js.map