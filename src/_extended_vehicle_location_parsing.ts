// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



import { _nullable_bool, _nullable_enum, _nullable_float, _nullable_int, _nullable_list, _nullable_string, _optional_typed_object, _parse_nullable_string_items, _typed_object } from "./_extended_vehicle_value_parsing";
export { _nullable_bool, _nullable_enum, _nullable_float, _nullable_int, _nullable_list, _nullable_string, _optional_typed_object, _parse_nullable_string_items, _typed_object };

import { EmpConnector, EmpEvse, EmpEvseStatus, EmpLocation, EmpLocationCoordinates, EmpLocationOpeningTiming, EmpLocationStatus, EVChargeStation, EVChargeStationAddress, EVChargeStationConnector, EVChargeStationCoordinate } from "./extended_vehicle_models";
export { EmpConnector, EmpEvse, EmpEvseStatus, EmpLocation, EmpLocationCoordinates, EmpLocationOpeningTiming, EmpLocationStatus, EVChargeStation, EVChargeStationAddress, EVChargeStationConnector, EVChargeStationCoordinate };

import { PlugConnectorType } from "./navigation_inputs";
export { PlugConnectorType };

export function _parse_ev_charge_station(value: unknown, path: string): EVChargeStation;
/** Translated upstream _parse_ev_charge_station. */
export function _parse_ev_charge_station(...__args: any[]): any {
let connectors, index, parsed_connectors, raw_connector, raw_connectors, station;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
station = $.call(_typed_object, [value, path], null);
raw_connectors = $.call(_nullable_list, [$.call($.attr(station, "get"), ["connectors"], null), ($.str(path) + ".connectors")], null);
connectors = null;
if ($.truth(((raw_connectors !== null)))) {
parsed_connectors = [];
for ([index, raw_connector] of $.iterable($.call($.enumerate, [raw_connectors], null))) {
if ($.truth(((raw_connector === null)))) {
$.call($.attr(parsed_connectors, "append"), [null], null);
continue;
}
$.call($.attr(parsed_connectors, "append"), [$.call(_parse_ev_charge_station_connector, [raw_connector, ($.str(path) + ".connectors[" + $.str(index) + "]")], null)], null);
}
connectors = $.call($.tuple, [parsed_connectors], null);
}
return $.call(EVChargeStation, [], Object.assign({}, {"id": $.call(_nullable_string, [$.call($.attr(station, "get"), ["id"], null), ($.str(path) + ".id")], null)}, {"name": $.call(_nullable_string, [$.call($.attr(station, "get"), ["name"], null), ($.str(path) + ".name")], null)}, {"phone_number": $.call(_nullable_string, [$.call($.attr(station, "get"), ["phoneNumber"], null), ($.str(path) + ".phoneNumber")], null)}, {"address": $.call(_parse_optional_station_address, [$.call($.attr(station, "get"), ["address"], null), ($.str(path) + ".address")], null)}, {"location": $.call(_parse_optional_station_coordinate, [$.call($.attr(station, "get"), ["location"], null), ($.str(path) + ".location")], null)}, {"connectors": connectors}));
}

export function _parse_optional_station_address(value: unknown, path: string): EVChargeStationAddress | null;
/** Translated upstream _parse_optional_station_address. */
export function _parse_optional_station_address(...__args: any[]): any {
let address;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
address = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((address === null)))) {
return null;
}
return $.call(EVChargeStationAddress, [], Object.assign({}, {"address1": $.call(_nullable_string, [$.call($.attr(address, "get"), ["address1"], null), ($.str(path) + ".address1")], null)}, {"address2": $.call(_nullable_string, [$.call($.attr(address, "get"), ["address2"], null), ($.str(path) + ".address2")], null)}, {"city": $.call(_nullable_string, [$.call($.attr(address, "get"), ["city"], null), ($.str(path) + ".city")], null)}, {"country": $.call(_nullable_string, [$.call($.attr(address, "get"), ["country"], null), ($.str(path) + ".country")], null)}, {"postal_code": $.call(_nullable_string, [$.call($.attr(address, "get"), ["postalCode"], null), ($.str(path) + ".postalCode")], null)}, {"state": $.call(_nullable_string, [$.call($.attr(address, "get"), ["state"], null), ($.str(path) + ".state")], null)}));
}

export function _parse_optional_station_coordinate(value: unknown, path: string): EVChargeStationCoordinate | null;
/** Translated upstream _parse_optional_station_coordinate. */
export function _parse_optional_station_coordinate(...__args: any[]): any {
let coordinate;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
coordinate = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((coordinate === null)))) {
return null;
}
return $.call(EVChargeStationCoordinate, [], Object.assign({}, {"latitude": $.call(_nullable_float, [$.call($.attr(coordinate, "get"), ["latitude"], null), ($.str(path) + ".latitude")], null)}, {"longitude": $.call(_nullable_float, [$.call($.attr(coordinate, "get"), ["longitude"], null), ($.str(path) + ".longitude")], null)}));
}

export function _parse_ev_charge_station_connector(value: unknown, path: string): EVChargeStationConnector;
/** Translated upstream _parse_ev_charge_station_connector. */
export function _parse_ev_charge_station_connector(...__args: any[]): any {
let connector;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
connector = $.call(_typed_object, [value, path], null);
return $.call(EVChargeStationConnector, [], Object.assign({}, {"plug_connector_type": $.call(_nullable_enum, [$.call($.attr(connector, "get"), ["plugConnectorType"], null), PlugConnectorType, ($.str(path) + ".plugConnectorType")], null)}, {"rated_power_kw": $.call(_nullable_float, [$.call($.attr(connector, "get"), ["ratedPowerKW"], null), ($.str(path) + ".ratedPowerKW")], null)}, {"voltage_v": $.call(_nullable_int, [$.call($.attr(connector, "get"), ["voltageV"], null), ($.str(path) + ".voltageV")], null)}, {"current_a": $.call(_nullable_int, [$.call($.attr(connector, "get"), ["currentA"], null), ($.str(path) + ".currentA")], null)}, {"current_type": $.call(_nullable_string, [$.call($.attr(connector, "get"), ["currentType"], null), ($.str(path) + ".currentType")], null)}));
}

export function _parse_emp_location(value: unknown, path: string): EmpLocation;
/** Translated upstream _parse_emp_location. */
export function _parse_emp_location(...__args: any[]): any {
let location;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
location = $.call(_typed_object, [value, path], null);
return $.call(EmpLocation, [], Object.assign({}, {"location_id": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationId"], null), ($.str(path) + ".locationId")], null)}, {"location_type": $.call(_nullable_enum, [$.call($.attr(location, "get"), ["locationType"], null), EmpLocationStatus, ($.str(path) + ".locationType")], null)}, {"location_name": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationName"], null), ($.str(path) + ".locationName")], null)}, {"location_logo": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationLogo"], null), ($.str(path) + ".locationLogo")], null)}, {"location_operator_name": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationOperatorName"], null), ($.str(path) + ".locationOperatorName")], null)}, {"location_sub_operator_name": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationSubOperatorName"], null), ($.str(path) + ".locationSubOperatorName")], null)}, {"location_address": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationAddress"], null), ($.str(path) + ".locationAddress")], null)}, {"location_city": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationCity"], null), ($.str(path) + ".locationCity")], null)}, {"location_state": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationState"], null), ($.str(path) + ".locationState")], null)}, {"location_country": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationCountry"], null), ($.str(path) + ".locationCountry")], null)}, {"location_postal_code": $.call(_nullable_string, [$.call($.attr(location, "get"), ["locationPostalCode"], null), ($.str(path) + ".locationPostalCode")], null)}, {"location_twenty_four_seven": $.call(_nullable_bool, [$.call($.attr(location, "get"), ["locationTwentyfourseven"], null), ($.str(path) + ".locationTwentyfourseven")], null)}, {"opening_timings": $.call(_parse_emp_opening_timings, [$.call($.attr(location, "get"), ["locationOpeningTimings"], null), ($.str(path) + ".locationOpeningTimings")], null)}, {"location_in_network": $.call(_nullable_bool, [$.call($.attr(location, "get"), ["locationInNetwork"], null), ($.str(path) + ".locationInNetwork")], null)}, {"phone": $.call(_nullable_string, [$.call($.attr(location, "get"), ["phone"], null), ($.str(path) + ".phone")], null)}, {"coordinates": $.call(_parse_optional_emp_coordinates, [$.call($.attr(location, "get"), ["locationCoordinates"], null), ($.str(path) + ".locationCoordinates")], null)}, {"evses": $.call(_parse_emp_evses, [$.call($.attr(location, "get"), ["evses"], null), ($.str(path) + ".evses")], null)}));
}

export function _parse_emp_opening_timings(value: unknown, path: string): ReadonlyArray<EmpLocationOpeningTiming | null> | null;
/** Translated upstream _parse_emp_opening_timings. */
export function _parse_emp_opening_timings(...__args: any[]): any {
let index, item_path, raw_timing, raw_timings, timing, timings;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_timings = $.call(_nullable_list, [value, path], null);
if ($.truth(((raw_timings === null)))) {
return null;
}
timings = [];
for ([index, raw_timing] of $.iterable($.call($.enumerate, [raw_timings], null))) {
if ($.truth(((raw_timing === null)))) {
$.call($.attr(timings, "append"), [null], null);
continue;
}
item_path = ($.str(path) + "[" + $.str(index) + "]");
timing = $.call(_typed_object, [raw_timing, item_path], null);
$.call($.attr(timings, "append"), [$.call(EmpLocationOpeningTiming, [], Object.assign({}, {"weekday": $.call(_nullable_int, [$.call($.attr(timing, "get"), ["weekday"], null), ($.str(item_path) + ".weekday")], null)}, {"period_begin": $.call(_nullable_string, [$.call($.attr(timing, "get"), ["periodBegin"], null), ($.str(item_path) + ".periodBegin")], null)}, {"period_end": $.call(_nullable_string, [$.call($.attr(timing, "get"), ["periodEnd"], null), ($.str(item_path) + ".periodEnd")], null)}))], null);
}
return $.call($.tuple, [timings], null);
}

export function _parse_optional_emp_coordinates(value: unknown, path: string): EmpLocationCoordinates | null;
/** Translated upstream _parse_optional_emp_coordinates. */
export function _parse_optional_emp_coordinates(...__args: any[]): any {
let coordinates;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
coordinates = $.call(_optional_typed_object, [value, path], null);
if ($.truth(((coordinates === null)))) {
return null;
}
return $.call(EmpLocationCoordinates, [], Object.assign({}, {"latitude": $.call(_nullable_string, [$.call($.attr(coordinates, "get"), ["latitude"], null), ($.str(path) + ".latitude")], null)}, {"longitude": $.call(_nullable_string, [$.call($.attr(coordinates, "get"), ["longitude"], null), ($.str(path) + ".longitude")], null)}));
}

export function _parse_emp_evses(value: unknown, path: string): ReadonlyArray<EmpEvse | null> | null;
/** Translated upstream _parse_emp_evses. */
export function _parse_emp_evses(...__args: any[]): any {
let evses, index, raw_evse, raw_evses;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
raw_evses = $.call(_nullable_list, [value, path], null);
if ($.truth(((raw_evses === null)))) {
return null;
}
evses = [];
for ([index, raw_evse] of $.iterable($.call($.enumerate, [raw_evses], null))) {
if ($.truth(((raw_evse === null)))) {
$.call($.attr(evses, "append"), [null], null);
continue;
}
$.call($.attr(evses, "append"), [$.call(_parse_emp_evse, [raw_evse, ($.str(path) + "[" + $.str(index) + "]")], null)], null);
}
return $.call($.tuple, [evses], null);
}

export function _parse_emp_evse(value: unknown, path: string): EmpEvse;
/** Translated upstream _parse_emp_evse. */
export function _parse_emp_evse(...__args: any[]): any {
let capabilities, connectors, evse, index, parsed_connectors, raw_connector, raw_connectors;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
evse = $.call(_typed_object, [value, path], null);
capabilities = $.call(_parse_nullable_string_items, [$.call($.attr(evse, "get"), ["evseCapability"], null), ($.str(path) + ".evseCapability")], null);
raw_connectors = $.call(_nullable_list, [$.call($.attr(evse, "get"), ["connector"], null), ($.str(path) + ".connector")], null);
connectors = null;
if ($.truth(((raw_connectors !== null)))) {
parsed_connectors = [];
for ([index, raw_connector] of $.iterable($.call($.enumerate, [raw_connectors], null))) {
if ($.truth(((raw_connector === null)))) {
$.call($.attr(parsed_connectors, "append"), [null], null);
continue;
}
$.call($.attr(parsed_connectors, "append"), [$.call(_parse_emp_connector, [raw_connector, ($.str(path) + ".connector[" + $.str(index) + "]")], null)], null);
}
connectors = $.call($.tuple, [parsed_connectors], null);
}
return $.call(EmpEvse, [], Object.assign({}, {"evse_id": $.call(_nullable_string, [$.call($.attr(evse, "get"), ["evseId"], null), ($.str(path) + ".evseId")], null)}, {"evse_location_id": $.call(_nullable_string, [$.call($.attr(evse, "get"), ["evseLocationId"], null), ($.str(path) + ".evseLocationId")], null)}, {"evse_status": $.call(_nullable_enum, [$.call($.attr(evse, "get"), ["evseStatus"], null), EmpEvseStatus, ($.str(path) + ".evseStatus")], null)}, {"evse_capability": capabilities}, {"evse_physical_reference": $.call(_nullable_string, [$.call($.attr(evse, "get"), ["evsePhysicalReference"], null), ($.str(path) + ".evsePhysicalReference")], null)}, {"connectors": connectors}));
}

export function _parse_emp_connector(value: unknown, path: string): EmpConnector;
/** Translated upstream _parse_emp_connector. */
export function _parse_emp_connector(...__args: any[]): any {
let connector;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
connector = $.call(_typed_object, [value, path], null);
return $.call(EmpConnector, [], Object.assign({}, {"connector_id": $.call(_nullable_string, [$.call($.attr(connector, "get"), ["connectorId"], null), ($.str(path) + ".connectorId")], null)}, {"connector_type": $.call(_nullable_string, [$.call($.attr(connector, "get"), ["connectorType"], null), ($.str(path) + ".connectorType")], null)}, {"connector_power_rating": $.call(_nullable_string, [$.call($.attr(connector, "get"), ["connectorPowerRating"], null), ($.str(path) + ".connectorPowerRating")], null)}, {"connector_description": $.call(_nullable_string, [$.call($.attr(connector, "get"), ["connectorDescription"], null), ($.str(path) + ".connectorDescription")], null)}));
}
