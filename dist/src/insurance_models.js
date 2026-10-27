"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnselectedInsuranceResult = exports.VehicleInsuranceMutationError = exports.VehicleInsuranceMutationSuccess = exports.VehicleInsurance = exports.VehicleInsurer = exports.InsuranceContact = exports.InsuranceStatus = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const StrEnum = _runtime_1.py.StrEnum;
exports.InsuranceStatus = _runtime_1.py.enumType("InsuranceStatus", { "ACTIVE": "active", "EXPIRED": "expired", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Nullable contact details published by an insurer. */
class InsuranceContact {
    location;
    phone_number;
    static __fields = [["location", _runtime_1.py.MISSING], ["phone_number", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, InsuranceContact, __args); Object.freeze(this); }
}
exports.InsuranceContact = InsuranceContact;
_runtime_1.py.classType(InsuranceContact);
/** Insurer identity and required nullable-item contact list. */
class VehicleInsurer {
    id;
    name;
    contacts;
    static __fields = [["id", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["contacts", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleInsurer, __args); Object.freeze(this); }
}
exports.VehicleInsurer = VehicleInsurer;
_runtime_1.py.classType(VehicleInsurer);
/** Insurance policy attached to a vehicle. */
class VehicleInsurance {
    id;
    policy_number;
    expiration_date;
    status;
    insurer;
    static __fields = [["id", _runtime_1.py.MISSING], ["policy_number", _runtime_1.py.MISSING], ["expiration_date", _runtime_1.py.MISSING], ["status", _runtime_1.py.MISSING], ["insurer", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleInsurance, __args); Object.freeze(this); }
}
exports.VehicleInsurance = VehicleInsurance;
_runtime_1.py.classType(VehicleInsurance);
/** Successful insurance add or update result. */
class VehicleInsuranceMutationSuccess {
    success;
    static __fields = [["success", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleInsuranceMutationSuccess, __args); Object.freeze(this); }
}
exports.VehicleInsuranceMutationSuccess = VehicleInsuranceMutationSuccess;
_runtime_1.py.classType(VehicleInsuranceMutationSuccess);
/** Insurance add or update failure. */
class VehicleInsuranceMutationError {
    message;
    static __fields = [["message", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, VehicleInsuranceMutationError, __args); Object.freeze(this); }
}
exports.VehicleInsuranceMutationError = VehicleInsuranceMutationError;
_runtime_1.py.classType(VehicleInsuranceMutationError);
/** Future insurance union branch selected only by type name. */
class UnselectedInsuranceResult {
    typename;
    static __fields = [["typename", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, UnselectedInsuranceResult, __args); Object.freeze(this); }
}
exports.UnselectedInsuranceResult = UnselectedInsuranceResult;
_runtime_1.py.classType(UnselectedInsuranceResult);
//# sourceMappingURL=insurance_models.js.map