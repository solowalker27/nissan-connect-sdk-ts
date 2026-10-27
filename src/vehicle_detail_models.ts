// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

import { VehicleStatus } from "./models";
export { VehicleStatus };

import { VehicleRecall } from "./service_models";
export { VehicleRecall };

/** Required model and year returned for a nullable vehicle. */
export class VehicleModelYear {
readonly vehicle_type: string;
readonly model: string;
readonly year: string;
static __fields = [["vehicle_type", $.MISSING], ["model", $.MISSING], ["year", $.MISSING]];
constructor(vehicle_type: string, model: string, year: string);
constructor(options: { vehicle_type: string; model: string; year: string });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleModelYear, __args);  Object.freeze(this); }
}
$.classType(VehicleModelYear);

/** Nullable nickname returned for a nullable vehicle. */
export class VehicleNickname {
readonly vehicle_type: string;
readonly nickname: string | null;
static __fields = [["vehicle_type", $.MISSING], ["nickname", $.MISSING]];
constructor(vehicle_type: string, nickname: string | null);
constructor(options: { vehicle_type: string; nickname: string | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleNickname, __args);  Object.freeze(this); }
}
$.classType(VehicleNickname);

/** Cached non-EV dynamic status together with vehicle recalls. */
export class VehicleStatusAndRecalls {
readonly status: VehicleStatus;
readonly recalls: ReadonlyArray<VehicleRecall>;
static __fields = [["status", $.MISSING], ["recalls", $.MISSING]];
constructor(status: VehicleStatus, recalls: ReadonlyArray<VehicleRecall>);
constructor(options: { status: VehicleStatus; recalls: ReadonlyArray<VehicleRecall> });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleStatusAndRecalls, __args);  Object.freeze(this); }
}
$.classType(VehicleStatusAndRecalls);
