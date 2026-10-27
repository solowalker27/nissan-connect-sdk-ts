"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarrantyInfoWarrantyStatus = exports.WarrantyInfoColorStatus = exports.VehicleWarrantyPeriod = exports.VehicleWarrantyInfo = exports.VehicleWarranty = exports.VehicleServiceOperation = exports.VehicleServiceHistoryEntry = exports.VehicleRoadsideAssistance = exports.VehicleRecall = exports.VehiclePreferredDealer = exports.ServiceHistoryMileage = exports.RecallType = exports.PreferredDealerLocation = exports.PreferredDealerAddress = exports.DistanceUnit = exports.ResponseError = void 0;
exports.parse_vehicle_preferred_dealer = parse_vehicle_preferred_dealer;
exports.parse_vehicle_recalls = parse_vehicle_recalls;
exports.parse_vehicle_roadside_assistance = parse_vehicle_roadside_assistance;
exports.parse_vehicle_service_history = parse_vehicle_service_history;
exports.parse_warranty_info = parse_warranty_info;
exports._parse_preferred_dealer_address = _parse_preferred_dealer_address;
exports._parse_preferred_dealer_location = _parse_preferred_dealer_location;
exports._parse_service_history_entry = _parse_service_history_entry;
exports._parse_service_operation = _parse_service_operation;
exports._parse_warranty_period = _parse_warranty_period;
exports._vehicle = _vehicle;
exports._required_field = _required_field;
exports._object = _object;
exports._typed_object = _typed_object;
exports._optional_typed_object = _optional_typed_object;
exports._required_typed_object = _required_typed_object;
exports._required_optional_typed_object = _required_optional_typed_object;
exports._list = _list;
exports._string = _string;
exports._required_string = _required_string;
exports._required_nullable_string = _required_nullable_string;
exports._int = _int;
exports._required_int = _required_int;
exports._required_nullable_int = _required_nullable_int;
exports._float = _float;
exports._required_nullable_float = _required_nullable_float;
exports._required_nullable_bool = _required_nullable_bool;
exports._enum = _enum;
exports._datetime = _datetime;
exports._date = _date;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const date = _runtime_1.py.date;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
const service_models_1 = require("./service_models");
Object.defineProperty(exports, "PreferredDealerAddress", { enumerable: true, get: function () { return service_models_1.PreferredDealerAddress; } });
Object.defineProperty(exports, "PreferredDealerLocation", { enumerable: true, get: function () { return service_models_1.PreferredDealerLocation; } });
Object.defineProperty(exports, "RecallType", { enumerable: true, get: function () { return service_models_1.RecallType; } });
Object.defineProperty(exports, "ServiceHistoryMileage", { enumerable: true, get: function () { return service_models_1.ServiceHistoryMileage; } });
Object.defineProperty(exports, "VehiclePreferredDealer", { enumerable: true, get: function () { return service_models_1.VehiclePreferredDealer; } });
Object.defineProperty(exports, "VehicleRecall", { enumerable: true, get: function () { return service_models_1.VehicleRecall; } });
Object.defineProperty(exports, "VehicleRoadsideAssistance", { enumerable: true, get: function () { return service_models_1.VehicleRoadsideAssistance; } });
Object.defineProperty(exports, "VehicleServiceHistoryEntry", { enumerable: true, get: function () { return service_models_1.VehicleServiceHistoryEntry; } });
Object.defineProperty(exports, "VehicleServiceOperation", { enumerable: true, get: function () { return service_models_1.VehicleServiceOperation; } });
Object.defineProperty(exports, "VehicleWarranty", { enumerable: true, get: function () { return service_models_1.VehicleWarranty; } });
Object.defineProperty(exports, "VehicleWarrantyInfo", { enumerable: true, get: function () { return service_models_1.VehicleWarrantyInfo; } });
Object.defineProperty(exports, "VehicleWarrantyPeriod", { enumerable: true, get: function () { return service_models_1.VehicleWarrantyPeriod; } });
Object.defineProperty(exports, "WarrantyInfoColorStatus", { enumerable: true, get: function () { return service_models_1.WarrantyInfoColorStatus; } });
Object.defineProperty(exports, "WarrantyInfoWarrantyStatus", { enumerable: true, get: function () { return service_models_1.WarrantyInfoWarrantyStatus; } });
/** Parse the nullable preferred dealer associated with a vehicle. */
function parse_vehicle_preferred_dealer(...__args) {
    let address, dealer, index, languages, location, path, raw_language, raw_languages, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the nullable preferred dealer associated with a vehicle. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    path = "vehicle.preferredDealer";
    dealer = _runtime_1.py.call(_required_optional_typed_object, [vehicle, "preferredDealer", path], null);
    if (_runtime_1.py.truth(((dealer === null)))) {
        return null;
    }
    address = _runtime_1.py.call(_parse_preferred_dealer_address, [_runtime_1.py.call(_required_field, [dealer, "address", (_runtime_1.py.str(path) + ".address")], null), (_runtime_1.py.str(path) + ".address")], null);
    location = _runtime_1.py.call(_parse_preferred_dealer_location, [_runtime_1.py.call(_required_field, [dealer, "location", (_runtime_1.py.str(path) + ".location")], null), (_runtime_1.py.str(path) + ".location")], null);
    raw_languages = _runtime_1.py.call(_list, [_runtime_1.py.call(_required_field, [dealer, "languagesSpoken", (_runtime_1.py.str(path) + ".languagesSpoken")], null), (_runtime_1.py.str(path) + ".languagesSpoken")], null);
    languages = [];
    for ([index, raw_language] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_languages], null))) {
        _runtime_1.py.call(_runtime_1.py.attr(languages, "append"), [_runtime_1.py.call(_string, [raw_language, (_runtime_1.py.str(path) + ".languagesSpoken[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(service_models_1.VehiclePreferredDealer, [], Object.assign({}, { "id": _runtime_1.py.call(_required_nullable_string, [dealer, "id", (_runtime_1.py.str(path) + ".id")], null) }, { "hash_id": _runtime_1.py.call(_required_nullable_string, [dealer, "hashId", (_runtime_1.py.str(path) + ".hashId")], null) }, { "name": _runtime_1.py.call(_required_nullable_string, [dealer, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "address": address }, { "hours": _runtime_1.py.call(_required_nullable_string, [dealer, "hours", (_runtime_1.py.str(path) + ".hours")], null) }, { "phone": _runtime_1.py.call(_required_nullable_string, [dealer, "phone", (_runtime_1.py.str(path) + ".phone")], null) }, { "service_phone": _runtime_1.py.call(_required_nullable_string, [dealer, "servicePhone", (_runtime_1.py.str(path) + ".servicePhone")], null) }, { "native_service_booking": _runtime_1.py.call(_required_nullable_bool, [dealer, "nativeServiceBooking", (_runtime_1.py.str(path) + ".nativeServiceBooking")], null) }, { "scheduling_url_mobile": _runtime_1.py.call(_required_nullable_string, [dealer, "schedulingUrlMobile", (_runtime_1.py.str(path) + ".schedulingUrlMobile")], null) }, { "location": location }, { "languages_spoken": _runtime_1.py.call(_runtime_1.py.tuple, [languages], null) }));
}
/** Parse the non-null standalone recall list for a nullable vehicle. */
function parse_vehicle_recalls(...__args) {
    let index, path, raw_recall, raw_recalls, recall, recall_path, recalls, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the non-null standalone recall list for a nullable vehicle. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    path = "vehicle.recalls";
    raw_recalls = _runtime_1.py.call(_list, [_runtime_1.py.call(_required_field, [vehicle, "recalls", path], null), path], null);
    recalls = [];
    for ([index, raw_recall] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_recalls], null))) {
        recall_path = (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]");
        recall = _runtime_1.py.call(_typed_object, [raw_recall, recall_path], null);
        _runtime_1.py.call(_runtime_1.py.attr(recalls, "append"), [_runtime_1.py.call(service_models_1.VehicleRecall, [], Object.assign({}, { "effective_date": _runtime_1.py.call(_datetime, [_runtime_1.py.call(_required_field, [recall, "effectiveDate", (_runtime_1.py.str(recall_path) + ".effectiveDate")], null), (_runtime_1.py.str(recall_path) + ".effectiveDate")], null) }, { "nhtsa_id": _runtime_1.py.call(_required_nullable_string, [recall, "nhtsaId", (_runtime_1.py.str(recall_path) + ".nhtsaId")], null) }, { "primary_description": _runtime_1.py.call(_required_string, [recall, "primaryDescription", (_runtime_1.py.str(recall_path) + ".primaryDescription")], null) }, { "remedy_description": _runtime_1.py.call(_required_string, [recall, "remedyDescription", (_runtime_1.py.str(recall_path) + ".remedyDescription")], null) }, { "risk_description": _runtime_1.py.call(_required_string, [recall, "riskDescription", (_runtime_1.py.str(recall_path) + ".riskDescription")], null) }, { "title": _runtime_1.py.call(_required_string, [recall, "title", (_runtime_1.py.str(recall_path) + ".title")], null) }, { "type": _runtime_1.py.call(_enum, [_runtime_1.py.call(_required_field, [recall, "type", (_runtime_1.py.str(recall_path) + ".type")], null), service_models_1.RecallType, (_runtime_1.py.str(recall_path) + ".type")], null) }, { "recall_code": _runtime_1.py.call(_required_nullable_string, [recall, "recallCode", (_runtime_1.py.str(recall_path) + ".recallCode")], null) }))], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [recalls], null);
}
/** Parse nullable roadside-assistance coverage for a vehicle. */
function parse_vehicle_roadside_assistance(...__args) {
    let assistance, path, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable roadside-assistance coverage for a vehicle. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    path = "vehicle.roadsideAssistance";
    assistance = _runtime_1.py.call(_required_optional_typed_object, [vehicle, "roadsideAssistance", path], null);
    if (_runtime_1.py.truth(((assistance === null)))) {
        return null;
    }
    return _runtime_1.py.call(service_models_1.VehicleRoadsideAssistance, [], Object.assign({}, { "roadside_months": _runtime_1.py.call(_required_nullable_int, [assistance, "roadsideMonths", (_runtime_1.py.str(path) + ".roadsideMonths")], null) }, { "roadside_miles": _runtime_1.py.call(_required_nullable_int, [assistance, "roadsideMiles", (_runtime_1.py.str(path) + ".roadsideMiles")], null) }, { "towing_months": _runtime_1.py.call(_required_nullable_int, [assistance, "towingMonths", (_runtime_1.py.str(path) + ".towingMonths")], null) }, { "towing_miles": _runtime_1.py.call(_required_nullable_int, [assistance, "towingMiles", (_runtime_1.py.str(path) + ".towingMiles")], null) }));
}
/** Parse the non-null service-history list for a nullable vehicle. */
function parse_vehicle_service_history(...__args) {
    let entries, entry, entry_path, index, path, raw_entries, raw_entry, vehicle;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse the non-null service-history list for a nullable vehicle. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    path = "vehicle.serviceHistory";
    raw_entries = _runtime_1.py.call(_list, [_runtime_1.py.call(_required_field, [vehicle, "serviceHistory", path], null), path], null);
    entries = [];
    for ([index, raw_entry] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_entries], null))) {
        entry_path = (_runtime_1.py.str(path) + "[" + _runtime_1.py.str(index) + "]");
        entry = _runtime_1.py.call(_typed_object, [raw_entry, entry_path], null);
        _runtime_1.py.call(_runtime_1.py.attr(entries, "append"), [_runtime_1.py.call(_parse_service_history_entry, [entry, entry_path], null)], null);
    }
    return _runtime_1.py.call(_runtime_1.py.tuple, [entries], null);
}
/** Parse nullable warranty information for a vehicle. */
function parse_warranty_info(...__args) {
    let info, info_path, path, vehicle, warranty;
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    /** Parse nullable warranty information for a vehicle. */
    vehicle = _runtime_1.py.call(_vehicle, [data], null);
    if (_runtime_1.py.truth(((vehicle === null)))) {
        return null;
    }
    path = "vehicle.warranty";
    warranty = _runtime_1.py.call(_required_optional_typed_object, [vehicle, "warranty", path], null);
    if (_runtime_1.py.truth(((warranty === null)))) {
        return null;
    }
    info_path = (_runtime_1.py.str(path) + ".warrantyInfo");
    info = _runtime_1.py.call(_required_typed_object, [warranty, "warrantyInfo", info_path], null);
    return _runtime_1.py.call(service_models_1.VehicleWarranty, [], Object.assign({}, { "warranty_info": _runtime_1.py.call(service_models_1.VehicleWarrantyInfo, [], Object.assign({}, { "color_status": _runtime_1.py.call(_enum, [_runtime_1.py.call(_required_field, [info, "colorStatus", (_runtime_1.py.str(info_path) + ".colorStatus")], null), service_models_1.WarrantyInfoColorStatus, (_runtime_1.py.str(info_path) + ".colorStatus")], null) }, { "warranty_status": _runtime_1.py.call(_enum, [_runtime_1.py.call(_required_field, [info, "warrantyStatus", (_runtime_1.py.str(info_path) + ".warrantyStatus")], null), service_models_1.WarrantyInfoWarrantyStatus, (_runtime_1.py.str(info_path) + ".warrantyStatus")], null) }, { "total_mileage": _runtime_1.py.call(_required_int, [info, "totalMileage", (_runtime_1.py.str(info_path) + ".totalMileage")], null) }, { "total_months": _runtime_1.py.call(_required_string, [info, "totalMonths", (_runtime_1.py.str(info_path) + ".totalMonths")], null) })) }, { "start_period": _runtime_1.py.call(_parse_warranty_period, [_runtime_1.py.call(_required_field, [warranty, "startPeriod", (_runtime_1.py.str(path) + ".startPeriod")], null), (_runtime_1.py.str(path) + ".startPeriod")], null) }, { "end_period": _runtime_1.py.call(_parse_warranty_period, [_runtime_1.py.call(_required_field, [warranty, "endPeriod", (_runtime_1.py.str(path) + ".endPeriod")], null), (_runtime_1.py.str(path) + ".endPeriod")], null) }, { "current_period": _runtime_1.py.call(_parse_warranty_period, [_runtime_1.py.call(_required_field, [warranty, "currentPeriod", (_runtime_1.py.str(path) + ".currentPeriod")], null), (_runtime_1.py.str(path) + ".currentPeriod")], null) }));
}
/** Translated upstream _parse_preferred_dealer_address. */
function _parse_preferred_dealer_address(...__args) {
    let address;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    address = _runtime_1.py.call(_optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((address === null)))) {
        return null;
    }
    return _runtime_1.py.call(service_models_1.PreferredDealerAddress, [], Object.assign({}, { "address1": _runtime_1.py.call(_required_nullable_string, [address, "address1", (_runtime_1.py.str(path) + ".address1")], null) }, { "address2": _runtime_1.py.call(_required_nullable_string, [address, "address2", (_runtime_1.py.str(path) + ".address2")], null) }, { "city": _runtime_1.py.call(_required_nullable_string, [address, "city", (_runtime_1.py.str(path) + ".city")], null) }, { "state": _runtime_1.py.call(_required_nullable_string, [address, "state", (_runtime_1.py.str(path) + ".state")], null) }, { "postal_code": _runtime_1.py.call(_required_nullable_string, [address, "postalCode", (_runtime_1.py.str(path) + ".postalCode")], null) }, { "country": _runtime_1.py.call(_required_nullable_string, [address, "country", (_runtime_1.py.str(path) + ".country")], null) }));
}
/** Translated upstream _parse_preferred_dealer_location. */
function _parse_preferred_dealer_location(...__args) {
    let location;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    location = _runtime_1.py.call(_optional_typed_object, [value, path], null);
    if (_runtime_1.py.truth(((location === null)))) {
        return null;
    }
    return _runtime_1.py.call(service_models_1.PreferredDealerLocation, [], Object.assign({}, { "latitude": _runtime_1.py.call(_required_nullable_float, [location, "latitude", (_runtime_1.py.str(path) + ".latitude")], null) }, { "longitude": _runtime_1.py.call(_required_nullable_float, [location, "longitude", (_runtime_1.py.str(path) + ".longitude")], null) }));
}
/** Translated upstream _parse_service_history_entry. */
function _parse_service_history_entry(...__args) {
    let index, mileage, mileage_path, operation, operation_path, raw_service, raw_services, services;
    let { "entry": entry, "path": path } = _runtime_1.py.bind(__args, ["entry", "path"], {}, [], null, null);
    mileage_path = (_runtime_1.py.str(path) + ".mileageWithUnit");
    mileage = _runtime_1.py.call(_required_typed_object, [entry, "mileageWithUnit", mileage_path], null);
    operation_path = (_runtime_1.py.str(path) + ".serviceOperation");
    operation = _runtime_1.py.call(_required_optional_typed_object, [entry, "serviceOperation", operation_path], null);
    raw_services = _runtime_1.py.call(_list, [_runtime_1.py.call(_required_field, [entry, "services", (_runtime_1.py.str(path) + ".services")], null), (_runtime_1.py.str(path) + ".services")], null);
    services = [];
    for ([index, raw_service] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.enumerate, [raw_services], null))) {
        _runtime_1.py.call(_runtime_1.py.attr(services, "append"), [_runtime_1.py.call(_string, [raw_service, (_runtime_1.py.str(path) + ".services[" + _runtime_1.py.str(index) + "]")], null)], null);
    }
    return _runtime_1.py.call(service_models_1.VehicleServiceHistoryEntry, [], Object.assign({}, { "mileage": _runtime_1.py.call(service_models_1.ServiceHistoryMileage, [], Object.assign({}, { "unit": _runtime_1.py.call(_enum, [_runtime_1.py.call(_required_field, [mileage, "unit", (_runtime_1.py.str(mileage_path) + ".unit")], null), models_1.DistanceUnit, (_runtime_1.py.str(mileage_path) + ".unit")], null) }, { "value": _runtime_1.py.call(_required_int, [mileage, "value", (_runtime_1.py.str(mileage_path) + ".value")], null) })) }, { "service_date": _runtime_1.py.call(_datetime, [_runtime_1.py.call(_required_field, [entry, "serviceDate", (_runtime_1.py.str(path) + ".serviceDate")], null), (_runtime_1.py.str(path) + ".serviceDate")], null) }, { "dealer_name": _runtime_1.py.call(_required_string, [entry, "dealerName", (_runtime_1.py.str(path) + ".dealerName")], null) }, { "dealer_code": _runtime_1.py.call(_required_string, [entry, "dealerCode", (_runtime_1.py.str(path) + ".dealerCode")], null) }, { "services": _runtime_1.py.call(_runtime_1.py.tuple, [services], null) }, { "comment": _runtime_1.py.call(_required_nullable_string, [entry, "comment", (_runtime_1.py.str(path) + ".comment")], null) }, { "maintenance_id": _runtime_1.py.call(_required_nullable_int, [entry, "maintenanceId", (_runtime_1.py.str(path) + ".maintenanceId")], null) }, { "service_operation": (_runtime_1.py.truth(((operation !== null))) ? _runtime_1.py.call(_parse_service_operation, [operation, operation_path], null) : null) }));
}
/** Translated upstream _parse_service_operation. */
function _parse_service_operation(...__args) {
    let { "operation": operation, "path": path } = _runtime_1.py.bind(__args, ["operation", "path"], {}, [], null, null);
    return _runtime_1.py.call(service_models_1.VehicleServiceOperation, [], Object.assign({}, { "service_category_id": _runtime_1.py.call(_required_nullable_string, [operation, "serviceCategoryId", (_runtime_1.py.str(path) + ".serviceCategoryId")], null) }, { "service_category_name": _runtime_1.py.call(_required_nullable_string, [operation, "serviceCategoryName", (_runtime_1.py.str(path) + ".serviceCategoryName")], null) }, { "op_code_id": _runtime_1.py.call(_required_nullable_string, [operation, "opCodeID", (_runtime_1.py.str(path) + ".opCodeID")], null) }, { "op_code_description": _runtime_1.py.call(_required_nullable_string, [operation, "opCodeDescription", (_runtime_1.py.str(path) + ".opCodeDescription")], null) }));
}
/** Translated upstream _parse_warranty_period. */
function _parse_warranty_period(...__args) {
    let period;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    period = _runtime_1.py.call(_typed_object, [value, path], null);
    return _runtime_1.py.call(service_models_1.VehicleWarrantyPeriod, [], Object.assign({}, { "mileage": _runtime_1.py.call(_required_int, [period, "mileage", (_runtime_1.py.str(path) + ".mileage")], null) }, { "date": _runtime_1.py.call(_date, [_runtime_1.py.call(_required_field, [period, "date", (_runtime_1.py.str(path) + ".date")], null), (_runtime_1.py.str(path) + ".date")], null) }));
}
/** Translated upstream _vehicle. */
function _vehicle(...__args) {
    let { "data": data } = _runtime_1.py.bind(__args, ["data"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(data, "vehicle")))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, ["vehicle is missing"], null);
    }
    return _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_runtime_1.py.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
}
/** Translated upstream _required_field. */
function _required_field(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    if (_runtime_1.py.truth((!_runtime_1.py.contains(container, field)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is missing")], null);
    }
    return _runtime_1.py.get(container, field);
}
/** Translated upstream _object. */
function _object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, Mapping], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an object")], null);
    }
    return value;
}
/** Translated upstream _typed_object. */
function _typed_object(...__args) {
    let result;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    result = _runtime_1.py.call(_object, [value, path], null);
    _runtime_1.py.call(_required_string, [result, "__typename", (_runtime_1.py.str(path) + ".__typename")], null);
    return result;
}
/** Translated upstream _optional_typed_object. */
function _optional_typed_object(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_typed_object, [value, path], null);
}
/** Translated upstream _required_typed_object. */
function _required_typed_object(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    return _runtime_1.py.call(_typed_object, [_runtime_1.py.call(_required_field, [container, field, path], null), path], null);
}
/** Translated upstream _required_optional_typed_object. */
function _required_optional_typed_object(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    return _runtime_1.py.call(_optional_typed_object, [_runtime_1.py.call(_required_field, [container, field, path], null), path], null);
}
/** Translated upstream _list. */
function _list(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.list], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a list")], null);
    }
    return value;
}
/** Translated upstream _string. */
function _string(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.str], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a string")], null);
    }
    return value;
}
/** Translated upstream _required_string. */
function _required_string(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    return _runtime_1.py.call(_string, [_runtime_1.py.call(_required_field, [container, field, path], null), path], null);
}
/** Translated upstream _required_nullable_string. */
function _required_nullable_string(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_string, [value, path], null);
}
/** Translated upstream _int. */
function _int(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.int], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an integer")], null);
    }
    return value;
}
/** Translated upstream _required_int. */
function _required_int(...__args) {
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    return _runtime_1.py.call(_int, [_runtime_1.py.call(_required_field, [container, field, path], null), path], null);
}
/** Translated upstream _required_nullable_int. */
function _required_nullable_int(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_int, [value, path], null);
}
/** Translated upstream _float. */
function _float(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    if (_runtime_1.py.truth(_runtime_1.py.or(() => !_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, [_runtime_1.py.int, _runtime_1.py.float]], null)), () => _runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not numeric")], null);
    }
    return _runtime_1.py.call(_runtime_1.py.float, [value], null);
}
/** Translated upstream _required_nullable_float. */
function _required_nullable_float(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    return _runtime_1.py.call(_float, [value, path], null);
}
/** Translated upstream _required_nullable_bool. */
function _required_nullable_bool(...__args) {
    let value;
    let { "container": container, "field": field, "path": path } = _runtime_1.py.bind(__args, ["container", "field", "path"], {}, [], null, null);
    value = _runtime_1.py.call(_required_field, [container, field, path], null);
    if (_runtime_1.py.truth(((value === null)))) {
        return null;
    }
    if (_runtime_1.py.truth(!_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [value, _runtime_1.py.bool], null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not a boolean")], null);
    }
    return value;
}
/** Translated upstream _enum. */
function _enum(...__args) {
    let raw_value;
    let { "value": value, "enum_type": enum_type, "path": path } = _runtime_1.py.bind(__args, ["value", "enum_type", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_string, [value, path], null);
    try {
        return _runtime_1.py.call(enum_type, [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            try {
                return _runtime_1.py.call(enum_type, ["UNKNOWN__"], null);
            }
            catch (__error) {
                if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
                    throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " has an unsupported value: " + _runtime_1.py.str(raw_value))], null);
                }
                else {
                    throw __error;
                }
            }
        }
        else {
            throw __error;
        }
    }
}
/** Translated upstream _datetime. */
function _datetime(...__args) {
    let normalized, raw_value, result;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_string, [value, path], null);
    normalized = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.attr(raw_value, "endswith"), ["Z"], null)) ? (_runtime_1.py.str(_runtime_1.py.slice(raw_value, null, -(1), null)) + "+00:00") : raw_value);
    try {
        result = _runtime_1.py.call(_runtime_1.py.attr(datetime, "fromisoformat"), [normalized], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            let error = __error;
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time")], null);
        }
        else {
            throw __error;
        }
    }
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((_runtime_1.py.attr(result, "tzinfo") === null)), () => ((_runtime_1.py.call(_runtime_1.py.attr(result, "utcoffset"), [], null) === null))))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date-time with an offset")], null);
    }
    return result;
}
/** Translated upstream _date. */
function _date(...__args) {
    let raw_value;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    raw_value = _runtime_1.py.call(_string, [value, path], null);
    try {
        return _runtime_1.py.call(_runtime_1.py.attr(date, "fromisoformat"), [raw_value], null);
    }
    catch (__error) {
        if (_runtime_1.py.isinstance(__error, _runtime_1.py.ValueError)) {
            let error = __error;
            throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(path) + " is not an ISO-8601 date")], null);
        }
        else {
            throw __error;
        }
    }
}
//# sourceMappingURL=service_parsing.js.map