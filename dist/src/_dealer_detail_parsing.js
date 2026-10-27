"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = exports.MaintenanceVisitAlignment = exports.MaintenanceVisit = exports.MaintenanceServiceOccurrence = exports.MaintenanceInterval = exports.DealerSummary = exports.DealerServiceSchedule = exports.DealerSchedule = exports.DealerCouponImage = exports.DealerCoupon = exports.Dealer = exports._required_string = exports._required_optional_typed_object = exports._required_nullable_string = exports._required_nullable_int = exports._required_nullable_bool = exports._required_field = exports._enum = exports._required_string_list = exports._required_nullable_float = exports._required_bool = exports._optional_selected_nullable_string = exports._optional_selected_nullable_list = exports._optional_selected_nullable_bool = exports._nullable_list = void 0;
exports._parse_dealer_summary = _parse_dealer_summary;
exports._parse_dealer = _parse_dealer;
exports._parse_dealer_service_schedule = _parse_dealer_service_schedule;
exports._parse_dealer_schedule = _parse_dealer_schedule;
exports._parse_coupon = _parse_coupon;
exports._parse_coupon_image = _parse_coupon_image;
exports._parse_maintenance_visit = _parse_maintenance_visit;
exports._parse_maintenance_occurrence = _parse_maintenance_occurrence;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const Mapping = _runtime_1.py.Mapping;
const _dealer_value_parsing_1 = require("./_dealer_value_parsing");
Object.defineProperty(exports, "_nullable_list", { enumerable: true, get: function () { return _dealer_value_parsing_1._nullable_list; } });
Object.defineProperty(exports, "_optional_selected_nullable_bool", { enumerable: true, get: function () { return _dealer_value_parsing_1._optional_selected_nullable_bool; } });
Object.defineProperty(exports, "_optional_selected_nullable_list", { enumerable: true, get: function () { return _dealer_value_parsing_1._optional_selected_nullable_list; } });
Object.defineProperty(exports, "_optional_selected_nullable_string", { enumerable: true, get: function () { return _dealer_value_parsing_1._optional_selected_nullable_string; } });
Object.defineProperty(exports, "_required_bool", { enumerable: true, get: function () { return _dealer_value_parsing_1._required_bool; } });
Object.defineProperty(exports, "_required_nullable_float", { enumerable: true, get: function () { return _dealer_value_parsing_1._required_nullable_float; } });
Object.defineProperty(exports, "_required_string_list", { enumerable: true, get: function () { return _dealer_value_parsing_1._required_string_list; } });
const account_parsing_1 = require("./account_parsing");
Object.defineProperty(exports, "_enum", { enumerable: true, get: function () { return account_parsing_1._enum; } });
Object.defineProperty(exports, "_required_field", { enumerable: true, get: function () { return account_parsing_1._required_field; } });
Object.defineProperty(exports, "_required_nullable_bool", { enumerable: true, get: function () { return account_parsing_1._required_nullable_bool; } });
Object.defineProperty(exports, "_required_nullable_int", { enumerable: true, get: function () { return account_parsing_1._required_nullable_int; } });
Object.defineProperty(exports, "_required_nullable_string", { enumerable: true, get: function () { return account_parsing_1._required_nullable_string; } });
Object.defineProperty(exports, "_required_optional_typed_object", { enumerable: true, get: function () { return account_parsing_1._required_optional_typed_object; } });
Object.defineProperty(exports, "_required_string", { enumerable: true, get: function () { return account_parsing_1._required_string; } });
const dealer_models_1 = require("./dealer_models");
Object.defineProperty(exports, "Dealer", { enumerable: true, get: function () { return dealer_models_1.Dealer; } });
Object.defineProperty(exports, "DealerCoupon", { enumerable: true, get: function () { return dealer_models_1.DealerCoupon; } });
Object.defineProperty(exports, "DealerCouponImage", { enumerable: true, get: function () { return dealer_models_1.DealerCouponImage; } });
Object.defineProperty(exports, "DealerSchedule", { enumerable: true, get: function () { return dealer_models_1.DealerSchedule; } });
Object.defineProperty(exports, "DealerServiceSchedule", { enumerable: true, get: function () { return dealer_models_1.DealerServiceSchedule; } });
Object.defineProperty(exports, "DealerSummary", { enumerable: true, get: function () { return dealer_models_1.DealerSummary; } });
Object.defineProperty(exports, "MaintenanceInterval", { enumerable: true, get: function () { return dealer_models_1.MaintenanceInterval; } });
Object.defineProperty(exports, "MaintenanceServiceOccurrence", { enumerable: true, get: function () { return dealer_models_1.MaintenanceServiceOccurrence; } });
Object.defineProperty(exports, "MaintenanceVisit", { enumerable: true, get: function () { return dealer_models_1.MaintenanceVisit; } });
Object.defineProperty(exports, "MaintenanceVisitAlignment", { enumerable: true, get: function () { return dealer_models_1.MaintenanceVisitAlignment; } });
const exceptions_1 = require("./exceptions");
Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return exceptions_1.ResponseError; } });
/** Translated upstream _parse_dealer_summary. */
function _parse_dealer_summary(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.DealerSummary, [], Object.assign({}, { "dealer_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerId", (_runtime_1.py.str(path) + ".dealerId")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerName", (_runtime_1.py.str(path) + ".dealerName")], null) }, { "address_line_1": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerAddressLine1", (_runtime_1.py.str(path) + ".dealerAddressLine1")], null) }));
}
/** Translated upstream _parse_dealer. */
function _parse_dealer(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.Dealer, [], Object.assign({}, { "dealer_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerId", (_runtime_1.py.str(path) + ".dealerId")], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerName", (_runtime_1.py.str(path) + ".dealerName")], null) }, { "preferred": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_bool, [value, "isDealerPreferred", path], null) }, { "address_line_1": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "dealerAddressLine1", (_runtime_1.py.str(path) + ".dealerAddressLine1")], null) }, { "address_line_2": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerAddressLine2", path], null) }, { "latitude": _runtime_1.py.call(_dealer_value_parsing_1._required_nullable_float, [value, "dealerLatitude", (_runtime_1.py.str(path) + ".dealerLatitude")], null) }, { "longitude": _runtime_1.py.call(_dealer_value_parsing_1._required_nullable_float, [value, "dealerLongitude", (_runtime_1.py.str(path) + ".dealerLongitude")], null) }, { "postal_code": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerZip", path], null) }, { "country": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerCountry", path], null) }, { "state_code": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerStateCode", path], null) }, { "native_service_booking": _runtime_1.py.call(_dealer_value_parsing_1._required_bool, [value, "nativeServiceBooking", (_runtime_1.py.str(path) + ".nativeServiceBooking")], null) }, { "online_scheduling_mobile_url": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerOnlineSchedulingMobileUrl", path], null) }, { "city_name": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerCityName", path], null) }, { "phone_number": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerPhoneNumber", path], null) }, { "service_phone": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerServicePhone", path], null) }, { "website": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerWebsite", path], null) }, { "languages_spoken": (_runtime_1.py.truth((!_runtime_1.py.contains(value, "languagesSpoken"))) ? null : _runtime_1.py.call(_dealer_value_parsing_1._required_string_list, [value, "languagesSpoken", path], null)) }, { "email_address": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerEmailAddress", path], null) }, { "service_hours": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "dealerServiceHours", path], null) }, { "service_schedules": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_list, [value, "dealerServicesSchedules", path, _parse_dealer_service_schedule], null) }));
}
/** Translated upstream _parse_dealer_service_schedule. */
function _parse_dealer_service_schedule(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.DealerServiceSchedule, [], Object.assign({}, { "code": _runtime_1.py.call(_dealer_value_parsing_1._optional_selected_nullable_string, [value, "code", path], null) }, { "name": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "name", (_runtime_1.py.str(path) + ".name")], null) }, { "schedules": _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [value, "schedules", (_runtime_1.py.str(path) + ".schedules"), _parse_dealer_schedule], null) }));
}
/** Translated upstream _parse_dealer_schedule. */
function _parse_dealer_schedule(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.DealerSchedule, [], Object.assign({}, { "day_of_week": _runtime_1.py.call(account_parsing_1._required_string, [value, "dayOfWeek", (_runtime_1.py.str(path) + ".dayOfWeek")], null) }, { "end_time": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "endTime", (_runtime_1.py.str(path) + ".endTime")], null) }, { "opened": _runtime_1.py.call(_dealer_value_parsing_1._required_bool, [value, "opened", (_runtime_1.py.str(path) + ".opened")], null) }, { "start_time": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "startTime", (_runtime_1.py.str(path) + ".startTime")], null) }));
}
/** Translated upstream _parse_coupon. */
function _parse_coupon(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.DealerCoupon, [], Object.assign({}, { "coupon_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "couponId", (_runtime_1.py.str(path) + ".couponId")], null) }, { "title": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "couponTitle", (_runtime_1.py.str(path) + ".couponTitle")], null) }, { "disclaimer": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "standardDisclaimer", (_runtime_1.py.str(path) + ".standardDisclaimer")], null) }));
}
/** Translated upstream _parse_coupon_image. */
function _parse_coupon_image(...__args) {
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    return _runtime_1.py.call(dealer_models_1.DealerCouponImage, [], Object.assign({}, { "coupon_id": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "couponId", (_runtime_1.py.str(path) + ".couponId")], null) }, { "image_url": _runtime_1.py.call(account_parsing_1._required_nullable_string, [value, "couponImageUrl", (_runtime_1.py.str(path) + ".couponImageUrl")], null) }));
}
/** Translated upstream _parse_maintenance_visit. */
function _parse_maintenance_visit(...__args) {
    let alignment, interval, interval_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    alignment = _runtime_1.py.call(account_parsing_1._required_field, [value, "Alignment", (_runtime_1.py.str(path) + ".Alignment")], null);
    interval_path = (_runtime_1.py.str(path) + ".Interval");
    interval = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "Interval", interval_path], null);
    return _runtime_1.py.call(dealer_models_1.MaintenanceVisit, [], Object.assign({}, { "alignment": (_runtime_1.py.truth(((alignment === null))) ? null : _runtime_1.py.call(account_parsing_1._enum, [alignment, dealer_models_1.MaintenanceVisitAlignment, (_runtime_1.py.str(path) + ".Alignment")], null)) }, { "interval": (_runtime_1.py.truth(((interval === null))) ? null : _runtime_1.py.call(dealer_models_1.MaintenanceInterval, [], Object.assign({}, { "month": _runtime_1.py.call(account_parsing_1._required_nullable_int, [interval, "Month", (_runtime_1.py.str(interval_path) + ".Month")], null) }, { "year": _runtime_1.py.call(account_parsing_1._required_nullable_int, [interval, "Year", (_runtime_1.py.str(interval_path) + ".Year")], null) }, { "next": _runtime_1.py.call(account_parsing_1._required_nullable_bool, [interval, "Next", (_runtime_1.py.str(interval_path) + ".Next")], null) }, { "distance_miles": _runtime_1.py.call(account_parsing_1._required_nullable_int, [interval, "DistanceMiles", (_runtime_1.py.str(interval_path) + ".DistanceMiles")], null) }, { "distance_km": _runtime_1.py.call(account_parsing_1._required_nullable_int, [interval, "DistanceKMs", (_runtime_1.py.str(interval_path) + ".DistanceKMs")], null) }))) }, { "service_occurrences": _runtime_1.py.call(_dealer_value_parsing_1._nullable_list, [value, "ServiceOccurrences", (_runtime_1.py.str(path) + ".ServiceOccurrences"), _parse_maintenance_occurrence], null) }));
}
/** Translated upstream _parse_maintenance_occurrence. */
function _parse_maintenance_occurrence(...__args) {
    let category, category_name, category_path, component, component_name, component_path, group, group_path, service_type, service_type_path;
    let { "value": value, "path": path } = _runtime_1.py.bind(__args, ["value", "path"], {}, [], null, null);
    component_path = (_runtime_1.py.str(path) + ".ServiceComponent");
    component = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "ServiceComponent", component_path], null);
    component_name = null;
    category_name = null;
    if (_runtime_1.py.truth(((component !== null)))) {
        component_name = _runtime_1.py.call(account_parsing_1._required_nullable_string, [component, "ServiceComponentName", (_runtime_1.py.str(component_path) + ".ServiceComponentName")], null);
        category_path = (_runtime_1.py.str(component_path) + ".ServiceCategory");
        category = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [component, "ServiceCategory", category_path], null);
        if (_runtime_1.py.truth(((category !== null)))) {
            category_name = _runtime_1.py.call(account_parsing_1._required_string, [category, "ServiceCategoryName", (_runtime_1.py.str(category_path) + ".ServiceCategoryName")], null);
        }
    }
    service_type_path = (_runtime_1.py.str(path) + ".ServiceType");
    service_type = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [value, "ServiceType", service_type_path], null);
    if (_runtime_1.py.truth(((service_type === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(service_type_path) + " is null")], null);
    }
    group_path = (_runtime_1.py.str(service_type_path) + ".ServiceTypeGroup");
    group = _runtime_1.py.call(account_parsing_1._required_optional_typed_object, [service_type, "ServiceTypeGroup", group_path], null);
    if (_runtime_1.py.truth(((group === null)))) {
        throw _runtime_1.py.call(exceptions_1.ResponseError, [(_runtime_1.py.str(group_path) + " is null")], null);
    }
    return _runtime_1.py.call(dealer_models_1.MaintenanceServiceOccurrence, [component_name, category_name, _runtime_1.py.call(account_parsing_1._required_string, [service_type, "ServiceTypeName", (_runtime_1.py.str(service_type_path) + ".ServiceTypeName")], null), _runtime_1.py.call(account_parsing_1._required_string, [group, "ServiceTypeGroupName", (_runtime_1.py.str(group_path) + ".ServiceTypeGroupName")], null)], null);
}
//# sourceMappingURL=_dealer_detail_parsing.js.map