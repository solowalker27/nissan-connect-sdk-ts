// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

const StrEnum = $.StrEnum;

export const InsuranceStatus = $.enumType("InsuranceStatus", {"ACTIVE": "active", "EXPIRED": "expired", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type InsuranceStatus = ReturnType<typeof InsuranceStatus>;

/** Nullable contact details published by an insurer. */
export class InsuranceContact {
readonly location: string | null;
readonly phone_number: string | null;
static __fields = [["location", $.MISSING], ["phone_number", $.MISSING]];
constructor(location: string | null, phone_number: string | null);
constructor(options: { location: string | null; phone_number: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, InsuranceContact, __args);  Object.freeze(this); }
}
$.classType(InsuranceContact);

/** Insurer identity and required nullable-item contact list. */
export class VehicleInsurer {
readonly id: string;
readonly name: string;
readonly contacts: ReadonlyArray<InsuranceContact | null>;
static __fields = [["id", $.MISSING], ["name", $.MISSING], ["contacts", $.MISSING]];
constructor(id: string, name: string, contacts: ReadonlyArray<InsuranceContact | null>);
constructor(options: { id: string; name: string; contacts: ReadonlyArray<InsuranceContact | null> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleInsurer, __args);  Object.freeze(this); }
}
$.classType(VehicleInsurer);

/** Insurance policy attached to a vehicle. */
export class VehicleInsurance {
readonly id: string;
readonly policy_number: string;
readonly expiration_date: string;
readonly status: InsuranceStatus;
readonly insurer: VehicleInsurer;
static __fields = [["id", $.MISSING], ["policy_number", $.MISSING], ["expiration_date", $.MISSING], ["status", $.MISSING], ["insurer", $.MISSING]];
constructor(id: string, policy_number: string, expiration_date: string, status: InsuranceStatus, insurer: VehicleInsurer);
constructor(options: { id: string; policy_number: string; expiration_date: string; status: InsuranceStatus; insurer: VehicleInsurer });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleInsurance, __args);  Object.freeze(this); }
}
$.classType(VehicleInsurance);

/** Successful insurance add or update result. */
export class VehicleInsuranceMutationSuccess {
readonly success: boolean;
static __fields = [["success", $.MISSING]];
constructor(success: boolean);
constructor(options: { success: boolean });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleInsuranceMutationSuccess, __args);  Object.freeze(this); }
}
$.classType(VehicleInsuranceMutationSuccess);

/** Insurance add or update failure. */
export class VehicleInsuranceMutationError {
readonly message: string;
static __fields = [["message", $.MISSING]];
constructor(message: string);
constructor(options: { message: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleInsuranceMutationError, __args);  Object.freeze(this); }
}
$.classType(VehicleInsuranceMutationError);

/** Future insurance union branch selected only by type name. */
export class UnselectedInsuranceResult {
readonly typename: string;
static __fields = [["typename", $.MISSING]];
constructor(typename: string);
constructor(options: { typename: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, UnselectedInsuranceResult, __args);  Object.freeze(this); }
}
$.classType(UnselectedInsuranceResult);

export type VehicleInsuranceMutationResult = VehicleInsuranceMutationSuccess | VehicleInsuranceMutationError | UnselectedInsuranceResult;
