// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const StrEnum = $.StrEnum;

import { CoordinateInput, coordinate_input } from "./common_inputs";
export { CoordinateInput, coordinate_input };

import { DrivingHistoryAggregator, WeightUnit } from "./extended_vehicle_models";
export { DrivingHistoryAggregator, WeightUnit };

import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };

import { DistanceUnit, SpeedUnit } from "./models";
export { DistanceUnit, SpeedUnit };

import { PlugConnectorType } from "./navigation_inputs";
export { PlugConnectorType };

export const EmpEvseStatusInput = $.enumType("EmpEvseStatusInput", {"AVAILABLE": "AVAILABLE", "ALL": "ALL", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EmpEvseStatusInput = ReturnType<typeof EmpEvseStatusInput>;

export const EmpConnectorLevelInput = $.enumType("EmpConnectorLevelInput", {"L1": "L1", "L2": "L2", "L3": "L3", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type EmpConnectorLevelInput = ReturnType<typeof EmpConnectorLevelInput>;

export function driving_history_variables(vin: string, aggregator: DrivingHistoryAggregator, options?: { distance_unit?: DistanceUnit | UnsetType | null; weight_unit?: WeightUnit | UnsetType | null; speed_unit?: SpeedUnit | UnsetType | null }): Record<string, unknown>;
/** Serialize DrivingHistory variables with Apollo omission semantics. */
export function driving_history_variables(...__args: any[]): any {
let {"vin": vin, "aggregator": aggregator, "distance_unit": distance_unit, "weight_unit": weight_unit, "speed_unit": speed_unit} = $.bind(__args, ["vin", "aggregator"], {"distance_unit": UNSET, "weight_unit": UNSET, "speed_unit": UNSET}, ["distance_unit", "weight_unit", "speed_unit"], null, null);
/** Serialize DrivingHistory variables with Apollo omission semantics. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"aggregator": $.call(serialize_enum, [aggregator], null)}, {"distanceUnit": $.call(_optional_enum, [distance_unit], null)}, {"weightUnit": $.call(_optional_enum, [weight_unit], null)}, {"speedUnit": $.call(_optional_enum, [speed_unit], null)}));
}

export function ev_charge_stations_variables(vin: string, coordinate: CoordinateInput, options?: { plug_connector_types?: ReadonlyArray<PlugConnectorType | null> | UnsetType | null; enable_within_range_restriction?: boolean | UnsetType | null }): Record<string, unknown>;
/** Serialize EVChargeStations variables while retaining explicit nulls. */
export function ev_charge_stations_variables(...__args: any[]): any {
let {"vin": vin, "coordinate": coordinate, "plug_connector_types": plug_connector_types, "enable_within_range_restriction": enable_within_range_restriction} = $.bind(__args, ["vin", "coordinate"], {"plug_connector_types": UNSET, "enable_within_range_restriction": UNSET}, ["plug_connector_types", "enable_within_range_restriction"], null, null);
/** Serialize EVChargeStations variables while retaining explicit nulls. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"coordinate": $.call(coordinate_input, [coordinate], null)}, {"plugConnectorTypes": $.call(_optional_nullable_enum_list, [plug_connector_types], null)}, {"enableWithinRangeRestriction": enable_within_range_restriction}));
}

export function e_vehicle_eligibility_variables(vin: string): Record<string, unknown>;
/** Serialize eVehicleEligibility variables. */
export function e_vehicle_eligibility_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize eVehicleEligibility variables. */
return Object.assign({}, {["vin"]: vin});
}

export function last_known_camera_usage_counter_variables(vin: string): Record<string, unknown>;
/** Serialize LastKnownCameraUsageCounter variables. */
export function last_known_camera_usage_counter_variables(...__args: any[]): any {
let {"vin": vin} = $.bind(__args, ["vin"], {}, [], null, null);
/** Serialize LastKnownCameraUsageCounter variables. */
return Object.assign({}, {["vin"]: vin});
}

export function location_details_variables(vin: string, latitude: string, longitude: string, in_network_only: boolean, range_value: number, options?: { operator_names?: ReadonlyArray<string | null> | UnsetType | null; evse?: EmpEvseStatusInput | UnsetType | null; plug_types?: ReadonlyArray<string | null> | UnsetType | null; charge_level?: EmpConnectorLevelInput | UnsetType | null; pnc_stations_only?: boolean | UnsetType | null }): Record<string, unknown>;
/** Serialize LocationDetails variables with nullable filters preserved. */
export function location_details_variables(...__args: any[]): any {
let {"vin": vin, "latitude": latitude, "longitude": longitude, "in_network_only": in_network_only, "range_value": range_value, "operator_names": operator_names, "evse": evse, "plug_types": plug_types, "charge_level": charge_level, "pnc_stations_only": pnc_stations_only} = $.bind(__args, ["vin", "latitude", "longitude", "in_network_only", "range_value"], {"operator_names": UNSET, "evse": UNSET, "plug_types": UNSET, "charge_level": UNSET, "pnc_stations_only": UNSET}, ["operator_names", "evse", "plug_types", "charge_level", "pnc_stations_only"], null, null);
/** Serialize LocationDetails variables with nullable filters preserved. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"latitude": latitude}, {"longitude": longitude}, {"inNetworkOnly": in_network_only}, {"range": range_value}, {"operatorName": $.call(_optional_nullable_string_list, [operator_names], null)}, {"evse": $.call(_optional_enum, [evse], null)}, {"plugType": $.call(_optional_nullable_string_list, [plug_types], null)}, {"chargeLevel": $.call(_optional_enum, [charge_level], null)}, {"pncStationsOnly": pnc_stations_only}));
}

export function parking_chargeable_variables(evse_id: string): Record<string, unknown>;
/** Serialize ParkingChargeable variables. */
export function parking_chargeable_variables(...__args: any[]): any {
let {"evse_id": evse_id} = $.bind(__args, ["evse_id"], {}, [], null, null);
/** Serialize ParkingChargeable variables. */
return Object.assign({}, {["evseId"]: evse_id});
}

export function shareable_capabilities_variables(vin: string, options?: { driver_id?: string | UnsetType | null }): Record<string, unknown>;
/** Serialize ShareableCapabilities variables while preserving null versus omission. */
export function shareable_capabilities_variables(...__args: any[]): any {
let {"vin": vin, "driver_id": driver_id} = $.bind(__args, ["vin"], {"driver_id": UNSET}, ["driver_id"], null, null);
/** Serialize ShareableCapabilities variables while preserving null versus omission. */
return $.call(optional_input_fields, [], Object.assign({}, {"vin": vin}, {"driverId": driver_id}));
}

export function tariff_pricing_variables(vin: string, location_id: string): Record<string, unknown>;
/** Serialize TariffPricing variables. */
export function tariff_pricing_variables(...__args: any[]): any {
let {"vin": vin, "location_id": location_id} = $.bind(__args, ["vin", "location_id"], {}, [], null, null);
/** Serialize TariffPricing variables. */
return Object.assign({}, {["vin"]: vin}, {["locationId"]: location_id});
}

export function _optional_enum(value: $.EnumValue | UnsetType | null): unknown;
/** Translated upstream _optional_enum. */
export function _optional_enum(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.call($.isinstance, [value, StrEnum], null))) {
return $.call(serialize_enum, [value], null);
}
return value;
}

export function _optional_nullable_enum_list(value: ReadonlyArray<any | null> | UnsetType | null): unknown;
/** Translated upstream _optional_nullable_enum_list. */
export function _optional_nullable_enum_list(...__args: any[]): any {
let item;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return (() => { const __out: any = []; for (const item of $.iterable(value)) { __out.push(($.truth(((item !== null))) ? $.call(serialize_enum, [item], null) : null)); } return __out; })();
}

export function _optional_nullable_string_list(value: ReadonlyArray<string | null> | UnsetType | null): unknown;
/** Translated upstream _optional_nullable_string_list. */
export function _optional_nullable_string_list(...__args: any[]): any {
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
if ($.truth($.or(() => $.call($.isinstance, [value, UnsetType], null), () => ((value === null))))) {
return value;
}
return $.call($.list, [value], null);
}
