"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleInsuranceInput = exports.optional_input_fields = exports.UnsetType = exports.UNSET = void 0;
exports.vehicle_insurance_variables = vehicle_insurance_variables;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
/** Insurance details accepted by the add and update mutations. */
class VehicleInsuranceInput {
    vin;
    insurer_id;
    policy_number;
    expiry_date;
    custom_insurance_name;
    custom_insurance_phone_number;
    static __fields = [["vin", _runtime_1.py.MISSING], ["insurer_id", _runtime_1.py.MISSING], ["policy_number", _runtime_1.py.MISSING], ["expiry_date", _runtime_1.py.MISSING], ["custom_insurance_name", graphql_input_1.UNSET], ["custom_insurance_phone_number", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleInsuranceInput, __args); Object.freeze(this); }
}
exports.VehicleInsuranceInput = VehicleInsuranceInput;
_runtime_1.py.classType(VehicleInsuranceInput);
/** Serialize a complete vehicle-insurance mutation input. */
function vehicle_insurance_variables(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize a complete vehicle-insurance mutation input. */
    return Object.assign({}, { ["input"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": _runtime_1.py.attr(config, "vin") }, { "insurerId": _runtime_1.py.attr(config, "insurer_id") }, { "policyNumber": _runtime_1.py.attr(config, "policy_number") }, { "expiryDate": _runtime_1.py.attr(config, "expiry_date") }, { "customInsuranceName": _runtime_1.py.attr(config, "custom_insurance_name") }, { "customInsurancePhoneNumber": _runtime_1.py.attr(config, "custom_insurance_phone_number") })) });
}
//# sourceMappingURL=insurance_inputs.js.map