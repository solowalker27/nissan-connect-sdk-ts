// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const dataclass = $.dataclass;

import { ServiceCapability } from "./models";
export { ServiceCapability };

/** Watch-optimized connected-service capability subset for one vehicle. */
export class VehicleCapabilitySummary {
readonly telematics_program: string;
readonly enrollment_status: string;
readonly services: ReadonlyArray<ServiceCapability | null> | null;
static __fields = [["telematics_program", $.MISSING], ["enrollment_status", $.MISSING], ["services", $.MISSING]];
constructor(telematics_program: string, enrollment_status: string, services: ReadonlyArray<ServiceCapability | null> | null);
constructor(options: { telematics_program: string; enrollment_status: string; services: ReadonlyArray<ServiceCapability | null> | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleCapabilitySummary, __args);  Object.freeze(this); }
}
$.classType(VehicleCapabilitySummary);

/** Static vehicle data and the capability subset returned to wearable clients. */
export class VehicleWithCapabilities {
readonly vin: string;
readonly nickname: string | null;
readonly image_url: string;
readonly year: string;
readonly model: string;
readonly driver_type: string | null;
readonly capabilities: VehicleCapabilitySummary | null;
static __fields = [["vin", $.MISSING], ["nickname", $.MISSING], ["image_url", $.MISSING], ["year", $.MISSING], ["model", $.MISSING], ["driver_type", $.MISSING], ["capabilities", $.MISSING]];
constructor(vin: string, nickname: string | null, image_url: string, year: string, model: string, driver_type: string | null, capabilities: VehicleCapabilitySummary | null);
constructor(options: { vin: string; nickname: string | null; image_url: string; year: string; model: string; driver_type: string | null; capabilities: VehicleCapabilitySummary | null });
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; $.initData(this, VehicleWithCapabilities, __args);  Object.freeze(this); }
}
$.classType(VehicleWithCapabilities);
