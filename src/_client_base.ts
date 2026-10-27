// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const asyncio = $.asyncio;

const math = $.math;

const Mapping = $.Mapping;

const ClientSession = $.ClientSession;

import * as operations from "./operations";

import { _is_terminal_service_request, _nullable_success, _success } from "./_client_helpers";
export { _is_terminal_service_request, _nullable_success, _success };

import { profile_for } from "./_profile";
export { profile_for };

import { _NissanTransport } from "./_transport";
export { _NissanTransport };

import { RequestProofProvider, TokenListener } from "./callbacks";
export { RequestProofProvider, TokenListener };

import { Country } from "./countries";
export { Country };

import { ReadOnlyError, ResponseError } from "./exceptions";
export { ReadOnlyError, ResponseError };

import { ServiceRequest, ServiceRequestKind, ServiceRequestResult, Tokens, VehicleAlertKind, VehicleAlertRequest } from "./models";
export { ServiceRequest, ServiceRequestKind, ServiceRequestResult, Tokens, VehicleAlertKind, VehicleAlertRequest };

import { parse_service_request, parse_service_request_result, parse_vehicle_alert_request } from "./parsing";
export { parse_service_request, parse_service_request_result, parse_vehicle_alert_request };

import { RequestProof } from "./request_proof";
export { RequestProof };

/** Translated upstream _NissanClientBase. */
export class _NissanClientBase {
constructor(...__args: any[]) { if (__args[0] === $.SKIP) return; if (this.__init__) this.__init__(...__args); else $.superInit(this, _NissanClientBase, __args); }
/** Translated upstream __init__. */
__init__(...__args: any[]): any {
let {"session": session, "country": country, "tokens": tokens, "token_listener": token_listener, "read_only": read_only, "oauth_device_id": oauth_device_id, "request_proof": request_proof, "request_proof_provider": request_proof_provider} = $.bind(__args, ["session"], {"country": $.attr(Country, "US"), "tokens": null, "token_listener": null, "read_only": true, "oauth_device_id": null, "request_proof": null, "request_proof_provider": null}, ["country", "tokens", "token_listener", "read_only", "oauth_device_id", "request_proof", "request_proof_provider"], null, null);
this["_transport"] = $.call(_NissanTransport, [session], Object.assign({}, {"profile": $.call(profile_for, [country], null)}, {"tokens": tokens}, {"token_listener": token_listener}, {"oauth_device_id": oauth_device_id}, {"request_proof": request_proof}, {"request_proof_provider": request_proof_provider}));
this["_country"] = country;
this["_read_only"] = read_only;
}
/** Return the country selected for this client. */
get country(): Country {
/** Return the country selected for this client. */
return $.attr(this, "_country");
}
/** Return whether state-changing operations are blocked. */
get read_only(): boolean {
/** Return whether state-changing operations are blocked. */
return $.attr(this, "_read_only");
}
/** Return the currently active OAuth tokens. */
get tokens(): Tokens | null {
/** Return the currently active OAuth tokens. */
return $.attr($.attr(this, "_transport"), "tokens");
}
/** Return the identifier used for a mobile OAuth authorization scope. */
get oauth_device_id(): string {
/** Return the identifier used for a mobile OAuth authorization scope. */
return $.attr($.attr(this, "_transport"), "oauth_device_id");
}
async_authenticate(email: string, password: string): Promise<Tokens>;
/** Authenticate with MyNISSAN credentials. */
async async_authenticate(...__args: any[]): any {
let {"email": email, "password": password} = $.bind(__args, ["email", "password"], {}, [], null, null);
/** Authenticate with MyNISSAN credentials. */
return (await $.call($.attr($.attr(this, "_transport"), "async_authenticate"), [email, password], null));
}
async_refresh_tokens(): Promise<Tokens>;
/** Refresh and publish the active OAuth token set. */
async async_refresh_tokens(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
/** Refresh and publish the active OAuth token set. */
return (await $.call($.attr($.attr(this, "_transport"), "async_refresh_tokens"), [], null));
}
async_check_service_request(vin: string, request: ServiceRequest): Promise<ServiceRequestResult>;
/** Check an asynchronous request using its matching Nissan operation. */
async async_check_service_request(...__args: any[]): any {
let check, checks, data, document, operation_name, root_field;
let {"vin": vin, "request": request} = $.bind(__args, ["vin", "request"], {}, [], null, null);
/** Check an asynchronous request using its matching Nissan operation. */
checks = Object.assign({}, {[$.attr(ServiceRequestKind, "CHARGE")]: ["CheckChargeServiceRequest", $.attr(operations, "CHECK_CHARGE_REQUEST"), "checkChargeServiceRequest"]}, {[$.attr(ServiceRequestKind, "CHARGE_CONFIGURATION")]: ["CheckChargeConfigServiceRequest", $.attr(operations, "CHECK_CHARGE_CONFIGURATION_REQUEST"), "checkChargeConfigServiceRequest"]}, {[$.attr(ServiceRequestKind, "CLIMATE")]: ["CheckRemoteClimateRequest", $.attr(operations, "CHECK_CLIMATE_REQUEST"), "checkRemoteClimateRequest"]}, {[$.attr(ServiceRequestKind, "DOOR")]: ["CheckDoorServiceRequest", $.attr(operations, "CHECK_DOOR_REQUEST"), "checkDoorServiceRequest"]}, {[$.attr(ServiceRequestKind, "ENGINE")]: ["CheckEngineServiceRequest", $.attr(operations, "CHECK_ENGINE_REQUEST"), "checkEngineServiceRequest"]}, {[$.attr(ServiceRequestKind, "HORN_LIGHT")]: ["CheckHornLightServiceRequest", $.attr(operations, "CHECK_HORN_LIGHT_REQUEST"), "checkHornLightServiceRequest"]}, {[$.attr(ServiceRequestKind, "LOCATION")]: ["CheckLocationServiceRequest", $.attr(operations, "CHECK_LOCATION_REQUEST"), "checkLocationServiceRequest"]}, {[$.attr(ServiceRequestKind, "OTA")]: ["CheckOtaUpdateServiceRequest", $.attr(operations, "CHECK_OTA_UPDATE_REQUEST"), "checkOtaUpdateServiceRequest"]}, {[$.attr(ServiceRequestKind, "PHOTO")]: ["CheckTakePhotosAroundVehicleServiceRequest", $.attr(operations, "CHECK_PHOTO_REQUEST"), "checkTakePhotosAroundVehicleServiceRequest"]}, {[$.attr(ServiceRequestKind, "ROUTE")]: ["CheckRouteServiceRequest", $.attr(operations, "CHECK_ROUTE_REQUEST"), "checkRouteServiceRequest"]}, {[$.attr(ServiceRequestKind, "T_JUNCTION")]: ["CheckTJunctionServiceRequest", $.attr(operations, "CHECK_T_JUNCTION_REQUEST"), "checkTJunctionServiceRequest"]}, {[$.attr(ServiceRequestKind, "V2L")]: ["CheckV2LServiceRequest", $.attr(operations, "CHECK_V2L_REQUEST"), "checkV2LServiceRequest"]}, {[$.attr(ServiceRequestKind, "VEHICLE_STATUS")]: ["CheckRefreshVehicleStatusRequest", $.attr(operations, "CHECK_REFRESH_VEHICLE_STATUS_REQUEST"), "checkRefreshVehicleStatusRequest"]});
check = $.call($.attr(checks, "get"), [$.attr(request, "kind")], null);
if ($.truth(((check === null)))) {
throw $.call(ResponseError, [("Nissan does not expose a status operation for " + $.str($.attr($.attr(request, "kind"), "value")) + " requests")], null);
}
[operation_name, document, root_field] = check;
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), [operation_name, document, Object.assign({}, {["vin"]: vin}, {["serviceRequestId"]: $.attr(request, "id")})], null));
return $.call(parse_service_request_result, [data, root_field, vin], null);
}
async_wait_for_service_request(vin: string, request: ServiceRequest, options?: { poll_interval_seconds?: number; timeout_seconds?: number }): Promise<ServiceRequestResult>;
/** Poll a remote request until Nissan returns a terminal status. */
async async_wait_for_service_request(...__args: any[]): any {
let result;
let {"vin": vin, "request": request, "poll_interval_seconds": poll_interval_seconds, "timeout_seconds": timeout_seconds} = $.bind(__args, ["vin", "request"], {"poll_interval_seconds": 3.0, "timeout_seconds": 210.0}, ["poll_interval_seconds", "timeout_seconds"], null, null);
/** Poll a remote request until Nissan returns a terminal status. */
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [poll_interval_seconds], null)), () => ((poll_interval_seconds <= 0))))) {
throw $.call($.ValueError, ["poll_interval_seconds must be a positive finite number"], null);
}
if ($.truth($.or(() => !$.truth($.call($.attr(math, "isfinite"), [timeout_seconds], null)), () => ((timeout_seconds <= 0))))) {
throw $.call($.ValueError, ["timeout_seconds must be a positive finite number"], null);
}
return await $.timeout(timeout_seconds, async () => {
while ($.truth(true)) {
result = (await $.call($.attr(this, "async_check_service_request"), [vin, request], null));
if ($.truth($.call(_is_terminal_service_request, [$.attr(request, "kind"), result], null))) {
return result;
}
(await $.call($.attr(asyncio, "sleep"), [poll_interval_seconds], null));
}
});
}
_async_simple_service_request(operation_name: string, document: string, root_field: string, vin: string, kind: ServiceRequestKind): Promise<ServiceRequest>;
/** Translated upstream _async_simple_service_request. */
async _async_simple_service_request(...__args: any[]): any {
let {"operation_name": operation_name, "document": document, "root_field": root_field, "vin": vin, "kind": kind} = $.bind(__args, ["operation_name", "document", "root_field", "vin", "kind"], {}, [], null, null);
return (await $.call($.attr(this, "_async_service_request"), [operation_name, document, root_field, Object.assign({}, {["vin"]: vin}), kind], null));
}
_async_service_request(operation_name: string, document: string, root_field: string, variables: Record<string, unknown>, kind: ServiceRequestKind, options?: { extra_headers?: Record<string, string> | null }): Promise<ServiceRequest>;
/** Translated upstream _async_service_request. */
async _async_service_request(...__args: any[]): any {
let data;
let {"operation_name": operation_name, "document": document, "root_field": root_field, "variables": variables, "kind": kind, "extra_headers": extra_headers} = $.bind(__args, ["operation_name", "document", "root_field", "variables", "kind"], {"extra_headers": null}, ["extra_headers"], null, null);
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), [operation_name, document, variables], Object.assign({}, {"extra_headers": extra_headers})));
return $.call(parse_service_request, [data, root_field, kind], null);
}
_async_vehicle_alert_request(operation_name: string, document: string, root_field: string, variables: Record<string, unknown>, kind: VehicleAlertKind): Promise<VehicleAlertRequest>;
/** Translated upstream _async_vehicle_alert_request. */
async _async_vehicle_alert_request(...__args: any[]): any {
let data;
let {"operation_name": operation_name, "document": document, "root_field": root_field, "variables": variables, "kind": kind} = $.bind(__args, ["operation_name", "document", "root_field", "variables", "kind"], {}, [], null, null);
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), [operation_name, document, variables], null));
return $.call(parse_vehicle_alert_request, [data, root_field, kind], null);
}
_async_success_operation(operation_name: string, document: string, root_field: string, variables: Record<string, unknown>): Promise<boolean>;
/** Translated upstream _async_success_operation. */
async _async_success_operation(...__args: any[]): any {
let data;
let {"operation_name": operation_name, "document": document, "root_field": root_field, "variables": variables} = $.bind(__args, ["operation_name", "document", "root_field", "variables"], {}, [], null, null);
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), [operation_name, document, variables], null));
return $.call(_success, [data, root_field], null);
}
_async_nullable_success_operation(operation_name: string, document: string, root_field: string, variables: Record<string, unknown>, options?: { extra_headers?: Record<string, string> | null }): Promise<boolean>;
/** Translated upstream _async_nullable_success_operation. */
async _async_nullable_success_operation(...__args: any[]): any {
let data;
let {"operation_name": operation_name, "document": document, "root_field": root_field, "variables": variables, "extra_headers": extra_headers} = $.bind(__args, ["operation_name", "document", "root_field", "variables"], {"extra_headers": null}, ["extra_headers"], null, null);
$.call($.attr(this, "_ensure_write_allowed"), [], null);
data = (await $.call($.attr($.attr(this, "_transport"), "async_graphql"), [operation_name, document, variables], Object.assign({}, {"extra_headers": extra_headers})));
return $.call(_nullable_success, [data, root_field], null);
}
_ensure_write_allowed(): null;
/** Translated upstream _ensure_write_allowed. */
_ensure_write_allowed(...__args: any[]): any {
let {} = $.bind(__args, [], {}, [], null, null);
if ($.truth($.attr(this, "_read_only"))) {
throw $.call(ReadOnlyError, ["State-changing operations are disabled; construct the client with read_only=False"], null);
}
}
}
$.classType(_NissanClientBase);
