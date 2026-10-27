"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlugConnectorType = exports.EVChargeStationCoordinate = exports.EVChargeStationConnector = exports.EVChargeStationAddress = exports.EVChargeStation = exports.EmpLocationStatus = exports.EmpLocationOpeningTiming = exports.EmpLocationCoordinates = exports.EmpLocation = exports.EmpEvseStatus = exports.EmpEvse = exports.EmpConnector = exports._typed_object = exports._parse_nullable_string_items = exports._optional_typed_object = exports._nullable_string = exports._nullable_list = exports._nullable_int = exports._nullable_float = exports._nullable_enum = exports._nullable_bool = void 0;
exports._parse_ev_charge_station = _parse_ev_charge_station;
exports._parse_optional_station_address = _parse_optional_station_address;
exports._parse_optional_station_coordinate = _parse_optional_station_coordinate;
exports._parse_ev_charge_station_connector = _parse_ev_charge_station_connector;
exports._parse_emp_location = _parse_emp_location;
exports._parse_emp_opening_timings = _parse_emp_opening_timings;
exports._parse_optional_emp_coordinates = _parse_optional_emp_coordinates;
exports._parse_emp_evses = _parse_emp_evses;
exports._parse_emp_evse = _parse_emp_evse;
exports._parse_emp_connector = _parse_emp_connector;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const _extended_vehicle_value_parsing_1 = require("./_extended_vehicle_value_parsing");
Object.defineProperty(exports, "_nullable_bool", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_bool; } });
Object.defineProperty(exports, "_nullable_enum", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_enum; } });
Object.defineProperty(exports, "_nullable_float", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_float; } });
Object.defineProperty(exports, "_nullable_int", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_int; } });
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_nullable_string", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._nullable_string; } });
Object.defineProperty(exports, "_optional_typed_object", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._optional_typed_object; } });
Object.defineProperty(exports, "_parse_nullable_string_items", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._parse_nullable_string_items; } });
Object.defineProperty(exports, "_typed_object", { enumerable: true, get: function () { return _extended_vehicle_value_parsing_1._typed_object; } });
const extended_vehicle_models_1 = require("./extended_vehicle_models");
Object.defineProperty(exports, "EmpConnector", { enumerable: true, get: function () { return extended_vehicle_models_1.EmpConnector; } });
Object.defineProperty(exports, "EmpEvse", { enumerable: true, get: function () { return extended_vehicle_models_1.EmpEvse; } });
Object.defineProperty(exports, "EmpEvseStatus", { enumerable: true, get: function () { return extended_vehicle_models_1.EmpEvseStatus; } });
Object.defineProperty(exports, "EmpLocation", { enumerable: true, get: function () { return extended_vehicle_models_1.EmpLocation; } });
Object.defineProperty(exports, "EmpLocationCoordinates", { enumerable: true, get: function () { return extended_vehicle_models_1.EmpLocationCoordinates; } });
Object.defineProperty(exports, "EmpLocationOpeningTiming", { enumerable: true, get: function () { return extended_vehicle_models_1.EmpLocationOpeningTiming; } });
Object.defineProperty(exports, "EmpLocationStatus", { enumerable: true, get: function () { return extended_vehicle_models_1.EmpLocationStatus; } });
Object.defineProperty(exports, "EVChargeStation", { enumerable: true, get: function () { return extended_vehicle_models_1.EVChargeStation; } });
Object.defineProperty(exports, "EVChargeStationAddress", { enumerable: true, get: function () { return extended_vehicle_models_1.EVChargeStationAddress; } });
Object.defineProperty(exports, "EVChargeStationConnector", { enumerable: true, get: function () { return extended_vehicle_models_1.EVChargeStationConnector; } });
Object.defineProperty(exports, "EVChargeStationCoordinate", { enumerable: true, get: function () { return extended_vehicle_models_1.EVChargeStationCoordinate; } });
const navigation_inputs_1 = require("./navigation_inputs");
Object.defineProperty(exports, "PlugConnectorType", { enumerable: true, get: function () { return navigation_inputs_1.PlugConnectorType; } });
/** Translated upstream _parse_ev_charge_station. */
function _parse_ev_charge_station(...__args) {
    let connectors, index, parsed_connectors, raw_connector, raw_connectors, station;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    station = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    raw_connectors = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(station, "get"), ["connectors"], null), (_runtime_1.py.str(path) + ".connectors")], null);
    connectors = null;
    if (_runtime_1.py.truth(((raw_connectors !== null)))) {
        parsed_connectors = [];
        for ([index, raw_connector] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_connectors], null))) {
            if (_runtime_1.py.truth(((raw_connector === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_connectors, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_connectors, "append"), [_runtime_1.py.call(_parse_ev_charge_station_connector, [raw_connector, (_runtime_1.py.str(path) + ".connectors[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        connectors = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_connectors], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.EVChargeStation, [], Object.assign({}, { "id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(station, "get"), ["id"], null), (_runtime_1.py.str(path) + ".id")], null) }, { "name": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(station, "get"), ["name"], null), (_runtime_1.py.str(path) + ".name")], null) }, { "phone_number": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(station, "get"), ["phoneNumber"], null), (_runtime_1.py.str(path) + ".phoneNumber")], null) }, { "address": _runtime_1.py.call(_parse_optional_station_address, [_runtime_1.py.call(_runtime_1.py.attr(station, "get"), ["address"], null), (_runtime_1.py.str(path) + ".address")], null) }, { "location": _runtime_1.py.call(_parse_optional_station_coordinate, [_runtime_1.py.call(_runtime_1.py.attr(station, "get"), ["location"], null), (_runtime_1.py.str(path) + ".location")], null) }, { "connectors": connectors }));
}
/** Translated upstream _parse_optional_station_address. */
function _parse_optional_station_address(...__args) {
    let address;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    address = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((address === null)))) {
        return null;
    }
    return _runtime_1.py.call(extended_vehicle_models_1.EVChargeStationAddress, [], Object.assign({}, { "address1": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["address1"], null), (_runtime_1.py.str(path) + ".address1")], null) }, { "address2": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["address2"], null), (_runtime_1.py.str(path) + ".address2")], null) }, { "city": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["city"], null), (_runtime_1.py.str(path) + ".city")], null) }, { "country": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["country"], null), (_runtime_1.py.str(path) + ".country")], null) }, { "postal_code": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["postalCode"], null), (_runtime_1.py.str(path) + ".postalCode")], null) }, { "state": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(address, "get"), ["state"], null), (_runtime_1.py.str(path) + ".state")], null) }));
}
/** Translated upstream _parse_optional_station_coordinate. */
function _parse_optional_station_coordinate(...__args) {
    let coordinate;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    coordinate = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((coordinate === null)))) {
        return null;
    }
    return _runtime_1.py.call(extended_vehicle_models_1.EVChargeStationCoordinate, [], Object.assign({}, { "latitude": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(coordinate, "get"), ["latitude"], null), (_runtime_1.py.str(path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(coordinate, "get"), ["longitude"], null), (_runtime_1.py.str(path) + ".longitude")], null) }));
}
/** Translated upstream _parse_ev_charge_station_connector. */
function _parse_ev_charge_station_connector(...__args) {
    let connector;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    connector = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(extended_vehicle_models_1.EVChargeStationConnector, [], Object.assign({}, { "plug_connector_type": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["plugConnectorType"], null), navigation_inputs_1.PlugConnectorType, (_runtime_1.py.str(path) + ".plugConnectorType")], null) }, { "rated_power_kw": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_float, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["ratedPowerKW"], null), (_runtime_1.py.str(path) + ".ratedPowerKW")], null) }, { "voltage_v": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["voltageV"], null), (_runtime_1.py.str(path) + ".voltageV")], null) }, { "current_a": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["currentA"], null), (_runtime_1.py.str(path) + ".currentA")], null) }, { "current_type": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["currentType"], null), (_runtime_1.py.str(path) + ".currentType")], null) }));
}
/** Translated upstream _parse_emp_location. */
function _parse_emp_location(...__args) {
    let location;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    location = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(extended_vehicle_models_1.EmpLocation, [], Object.assign({}, { "location_id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationId"], null), (_runtime_1.py.str(path) + ".locationId")], null) }, { "location_type": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationType"], null), extended_vehicle_models_1.EmpLocationStatus, (_runtime_1.py.str(path) + ".locationType")], null) }, { "location_name": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationName"], null), (_runtime_1.py.str(path) + ".locationName")], null) }, { "location_logo": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationLogo"], null), (_runtime_1.py.str(path) + ".locationLogo")], null) }, { "location_operator_name": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationOperatorName"], null), (_runtime_1.py.str(path) + ".locationOperatorName")], null) }, { "location_sub_operator_name": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationSubOperatorName"], null), (_runtime_1.py.str(path) + ".locationSubOperatorName")], null) }, { "location_address": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationAddress"], null), (_runtime_1.py.str(path) + ".locationAddress")], null) }, { "location_city": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationCity"], null), (_runtime_1.py.str(path) + ".locationCity")], null) }, { "location_state": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationState"], null), (_runtime_1.py.str(path) + ".locationState")], null) }, { "location_country": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationCountry"], null), (_runtime_1.py.str(path) + ".locationCountry")], null) }, { "location_postal_code": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationPostalCode"], null), (_runtime_1.py.str(path) + ".locationPostalCode")], null) }, { "location_twenty_four_seven": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationTwentyfourseven"], null), (_runtime_1.py.str(path) + ".locationTwentyfourseven")], null) }, { "opening_timings": _runtime_1.py.call(_parse_emp_opening_timings, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationOpeningTimings"], null), (_runtime_1.py.str(path) + ".locationOpeningTimings")], null) }, { "location_in_network": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_bool, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationInNetwork"], null), (_runtime_1.py.str(path) + ".locationInNetwork")], null) }, { "phone": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["phone"], null), (_runtime_1.py.str(path) + ".phone")], null) }, { "coordinates": _runtime_1.py.call(_parse_optional_emp_coordinates, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["locationCoordinates"], null), (_runtime_1.py.str(path) + ".locationCoordinates")], null) }, { "evses": _runtime_1.py.call(_parse_emp_evses, [_runtime_1.py.call(_runtime_1.py.attr(location, "get"), ["evses"], null), (_runtime_1.py.str(path) + ".evses")], null) }));
}
/** Translated upstream _parse_emp_opening_timings. */
function _parse_emp_opening_timings(...__args) {
    let index, item_path, raw_timing, raw_timings, timing, timings;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_timings = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [value, path], null);
    if (_runtime_1.py.truth(((raw_timings === null)))) {
        return null;
    }
    timings = [];
    for ([index, raw_timing] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_timings], null))) {
        if (_runtime_1.py.truth(((raw_timing === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(timings, "append"), [null], null);
            continue;
        }
        item_path = (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]");
        timing = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [raw_timing, item_path], null);
        _runtime_1.py.call(_runtime_1.py.attr(timings, "append"), [_runtime_1.py.call(extended_vehicle_models_1.EmpLocationOpeningTiming, [], Object.assign({}, { "weekday": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_int, [_runtime_1.py.call(_runtime_1.py.attr(timing, "get"), ["weekday"], null), (_runtime_1.py.str(item_path) + ".weekday")], null) }, { "period_begin": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(timing, "get"), ["periodBegin"], null), (_runtime_1.py.str(item_path) + ".periodBegin")], null) }, { "period_end": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(timing, "get"), ["periodEnd"], null), (_runtime_1.py.str(item_path) + ".periodEnd")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [timings], null);
}
/** Translated upstream _parse_optional_emp_coordinates. */
function _parse_optional_emp_coordinates(...__args) {
    let coordinates;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    coordinates = _runtime_1.py.call(_extended_vehicle_value_parsing_1._optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((coordinates === null)))) {
        return null;
    }
    return _runtime_1.py.call(extended_vehicle_models_1.EmpLocationCoordinates, [], Object.assign({}, { "latitude": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(coordinates, "get"), ["latitude"], null), (_runtime_1.py.str(path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(coordinates, "get"), ["longitude"], null), (_runtime_1.py.str(path) + ".longitude")], null) }));
}
/** Translated upstream _parse_emp_evses. */
function _parse_emp_evses(...__args) {
    let evses, index, raw_evse, raw_evses;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_evses = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [value, path], null);
    if (_runtime_1.py.truth(((raw_evses === null)))) {
        return null;
    }
    evses = [];
    for ([index, raw_evse] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_evses], null))) {
        if (_runtime_1.py.truth(((raw_evse === null)))) {
            _runtime_1.py.call(_runtime_1.py.attr(evses, "append"), [null], null);
            continue;
        }
        _runtime_1.py.call(_runtime_1.py.attr(evses, "append"), [_runtime_1.py.call(_parse_emp_evse, [raw_evse, (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [evses], null);
}
/** Translated upstream _parse_emp_evse. */
function _parse_emp_evse(...__args) {
    let capabilities, connectors, evse, index, parsed_connectors, raw_connector, raw_connectors;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    evse = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    capabilities = _runtime_1.py.call(_extended_vehicle_value_parsing_1._parse_nullable_string_items, [_runtime_1.py.call(_runtime_1.py.attr(evse, "get"), ["evseCapability"], null), (_runtime_1.py.str(path) + ".evseCapability")], null);
    raw_connectors = _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_list, [_runtime_1.py.call(_runtime_1.py.attr(evse, "get"), ["connector"], null), (_runtime_1.py.str(path) + ".connector")], null);
    connectors = null;
    if (_runtime_1.py.truth(((raw_connectors !== null)))) {
        parsed_connectors = [];
        for ([index, raw_connector] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_connectors], null))) {
            if (_runtime_1.py.truth(((raw_connector === null)))) {
                _runtime_1.py.call(_runtime_1.py.attr(parsed_connectors, "append"), [null], null);
                continue;
            }
            _runtime_1.py.call(_runtime_1.py.attr(parsed_connectors, "append"), [_runtime_1.py.call(_parse_emp_connector, [raw_connector, (_runtime_1.py.str(path) + ".connector[" + _runtime_1.py.str(index) + "]")], null)], null);
        }
        connectors = _runtime_1.py.call(_runtime_1.py.tuple, [parsed_connectors], null);
    }
    return _runtime_1.py.call(extended_vehicle_models_1.EmpEvse, [], Object.assign({}, { "evse_id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(evse, "get"), ["evseId"], null), (_runtime_1.py.str(path) + ".evseId")], null) }, { "evse_location_id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(evse, "get"), ["evseLocationId"], null), (_runtime_1.py.str(path) + ".evseLocationId")], null) }, { "evse_status": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_enum, [_runtime_1.py.call(_runtime_1.py.attr(evse, "get"), ["evseStatus"], null), extended_vehicle_models_1.EmpEvseStatus, (_runtime_1.py.str(path) + ".evseStatus")], null) }, { "evse_capability": capabilities }, { "evse_physical_reference": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(evse, "get"), ["evsePhysicalReference"], null), (_runtime_1.py.str(path) + ".evsePhysicalReference")], null) }, { "connectors": connectors }));
}
/** Translated upstream _parse_emp_connector. */
function _parse_emp_connector(...__args) {
    let connector;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    connector = _runtime_1.py.call(_extended_vehicle_value_parsing_1._typed_object, [value, path], null);
    return _runtime_1.py.call(extended_vehicle_models_1.EmpConnector, [], Object.assign({}, { "connector_id": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["connectorId"], null), (_runtime_1.py.str(path) + ".connectorId")], null) }, { "connector_type": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["connectorType"], null), (_runtime_1.py.str(path) + ".connectorType")], null) }, { "connector_power_rating": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["connectorPowerRating"], null), (_runtime_1.py.str(path) + ".connectorPowerRating")], null) }, { "connector_description": _runtime_1.py.call(_extended_vehicle_value_parsing_1._nullable_string, [_runtime_1.py.call(_runtime_1.py.attr(connector, "get"), ["connectorDescription"], null), (_runtime_1.py.str(path) + ".connectorDescription")], null) }));
}
//# sourceMappingURL=_extended_vehicle_location_parsing.js.map