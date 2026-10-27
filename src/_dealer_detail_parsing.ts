// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _nullable_list, _optional_selected_nullable_bool, _optional_selected_nullable_list, _optional_selected_nullable_string, _required_bool, _required_nullable_float, _required_string_list } from "./_dealer_value_parsing";
export { _nullable_list, _optional_selected_nullable_bool, _optional_selected_nullable_list, _optional_selected_nullable_string, _required_bool, _required_nullable_float, _required_string_list };

import { _enum, _required_field, _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string } from "./account_parsing";
export { _enum, _required_field, _required_nullable_bool, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string };

import { Dealer, DealerCoupon, DealerCouponImage, DealerSchedule, DealerServiceSchedule, DealerSummary, MaintenanceInterval, MaintenanceServiceOccurrence, MaintenanceVisit, MaintenanceVisitAlignment } from "./dealer_models";
export { Dealer, DealerCoupon, DealerCouponImage, DealerSchedule, DealerServiceSchedule, DealerSummary, MaintenanceInterval, MaintenanceServiceOccurrence, MaintenanceVisit, MaintenanceVisitAlignment };

import { ResponseError } from "./exceptions";
export { ResponseError };

export function _parse_dealer_summary(value: Record<string, unknown>, path: string): DealerSummary;
/** Translated upstream _parse_dealer_summary. */
export function _parse_dealer_summary(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(DealerSummary, [], Object.assign({}, {"dealer_id": $.call(_required_nullable_string, [value, "dealerId", ($.str(path) + ".dealerId")], null)}, {"name": $.call(_required_nullable_string, [value, "dealerName", ($.str(path) + ".dealerName")], null)}, {"address_line_1": $.call(_required_nullable_string, [value, "dealerAddressLine1", ($.str(path) + ".dealerAddressLine1")], null)}));
}

export function _parse_dealer(value: Record<string, unknown>, path: string): Dealer;
/** Translated upstream _parse_dealer. */
export function _parse_dealer(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(Dealer, [], Object.assign({}, {"dealer_id": $.call(_required_nullable_string, [value, "dealerId", ($.str(path) + ".dealerId")], null)}, {"name": $.call(_required_nullable_string, [value, "dealerName", ($.str(path) + ".dealerName")], null)}, {"preferred": $.call(_optional_selected_nullable_bool, [value, "isDealerPreferred", path], null)}, {"address_line_1": $.call(_required_nullable_string, [value, "dealerAddressLine1", ($.str(path) + ".dealerAddressLine1")], null)}, {"address_line_2": $.call(_optional_selected_nullable_string, [value, "dealerAddressLine2", path], null)}, {"latitude": $.call(_required_nullable_float, [value, "dealerLatitude", ($.str(path) + ".dealerLatitude")], null)}, {"longitude": $.call(_required_nullable_float, [value, "dealerLongitude", ($.str(path) + ".dealerLongitude")], null)}, {"postal_code": $.call(_optional_selected_nullable_string, [value, "dealerZip", path], null)}, {"country": $.call(_optional_selected_nullable_string, [value, "dealerCountry", path], null)}, {"state_code": $.call(_optional_selected_nullable_string, [value, "dealerStateCode", path], null)}, {"native_service_booking": $.call(_required_bool, [value, "nativeServiceBooking", ($.str(path) + ".nativeServiceBooking")], null)}, {"online_scheduling_mobile_url": $.call(_optional_selected_nullable_string, [value, "dealerOnlineSchedulingMobileUrl", path], null)}, {"city_name": $.call(_optional_selected_nullable_string, [value, "dealerCityName", path], null)}, {"phone_number": $.call(_optional_selected_nullable_string, [value, "dealerPhoneNumber", path], null)}, {"service_phone": $.call(_optional_selected_nullable_string, [value, "dealerServicePhone", path], null)}, {"website": $.call(_optional_selected_nullable_string, [value, "dealerWebsite", path], null)}, {"languages_spoken": ($.truth((!$.contains(value, "languagesSpoken"))) ? null : $.call(_required_string_list, [value, "languagesSpoken", path], null))}, {"email_address": $.call(_optional_selected_nullable_string, [value, "dealerEmailAddress", path], null)}, {"service_hours": $.call(_optional_selected_nullable_string, [value, "dealerServiceHours", path], null)}, {"service_schedules": $.call(_optional_selected_nullable_list, [value, "dealerServicesSchedules", path, _parse_dealer_service_schedule], null)}));
}

export function _parse_dealer_service_schedule(value: Record<string, unknown>, path: string): DealerServiceSchedule;
/** Translated upstream _parse_dealer_service_schedule. */
export function _parse_dealer_service_schedule(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(DealerServiceSchedule, [], Object.assign({}, {"code": $.call(_optional_selected_nullable_string, [value, "code", path], null)}, {"name": $.call(_required_nullable_string, [value, "name", ($.str(path) + ".name")], null)}, {"schedules": $.call(_nullable_list, [value, "schedules", ($.str(path) + ".schedules"), _parse_dealer_schedule], null)}));
}

export function _parse_dealer_schedule(value: Record<string, unknown>, path: string): DealerSchedule;
/** Translated upstream _parse_dealer_schedule. */
export function _parse_dealer_schedule(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(DealerSchedule, [], Object.assign({}, {"day_of_week": $.call(_required_string, [value, "dayOfWeek", ($.str(path) + ".dayOfWeek")], null)}, {"end_time": $.call(_required_nullable_string, [value, "endTime", ($.str(path) + ".endTime")], null)}, {"opened": $.call(_required_bool, [value, "opened", ($.str(path) + ".opened")], null)}, {"start_time": $.call(_required_nullable_string, [value, "startTime", ($.str(path) + ".startTime")], null)}));
}

export function _parse_coupon(value: Record<string, unknown>, path: string): DealerCoupon;
/** Translated upstream _parse_coupon. */
export function _parse_coupon(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(DealerCoupon, [], Object.assign({}, {"coupon_id": $.call(_required_nullable_string, [value, "couponId", ($.str(path) + ".couponId")], null)}, {"title": $.call(_required_nullable_string, [value, "couponTitle", ($.str(path) + ".couponTitle")], null)}, {"disclaimer": $.call(_required_nullable_string, [value, "standardDisclaimer", ($.str(path) + ".standardDisclaimer")], null)}));
}

export function _parse_coupon_image(value: Record<string, unknown>, path: string): DealerCouponImage;
/** Translated upstream _parse_coupon_image. */
export function _parse_coupon_image(...__args: any[]): any {
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
return $.call(DealerCouponImage, [], Object.assign({}, {"coupon_id": $.call(_required_nullable_string, [value, "couponId", ($.str(path) + ".couponId")], null)}, {"image_url": $.call(_required_nullable_string, [value, "couponImageUrl", ($.str(path) + ".couponImageUrl")], null)}));
}

export function _parse_maintenance_visit(value: Record<string, unknown>, path: string): MaintenanceVisit;
/** Translated upstream _parse_maintenance_visit. */
export function _parse_maintenance_visit(...__args: any[]): any {
let alignment, interval, interval_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
alignment = $.call(_required_field, [value, "Alignment", ($.str(path) + ".Alignment")], null);
interval_path = ($.str(path) + ".Interval");
interval = $.call(_required_optional_typed_object, [value, "Interval", interval_path], null);
return $.call(MaintenanceVisit, [], Object.assign({}, {"alignment": ($.truth(((alignment === null))) ? null : $.call(_enum, [alignment, MaintenanceVisitAlignment, ($.str(path) + ".Alignment")], null))}, {"interval": ($.truth(((interval === null))) ? null : $.call(MaintenanceInterval, [], Object.assign({}, {"month": $.call(_required_nullable_int, [interval, "Month", ($.str(interval_path) + ".Month")], null)}, {"year": $.call(_required_nullable_int, [interval, "Year", ($.str(interval_path) + ".Year")], null)}, {"next": $.call(_required_nullable_bool, [interval, "Next", ($.str(interval_path) + ".Next")], null)}, {"distance_miles": $.call(_required_nullable_int, [interval, "DistanceMiles", ($.str(interval_path) + ".DistanceMiles")], null)}, {"distance_km": $.call(_required_nullable_int, [interval, "DistanceKMs", ($.str(interval_path) + ".DistanceKMs")], null)})))}, {"service_occurrences": $.call(_nullable_list, [value, "ServiceOccurrences", ($.str(path) + ".ServiceOccurrences"), _parse_maintenance_occurrence], null)}));
}

export function _parse_maintenance_occurrence(value: Record<string, unknown>, path: string): MaintenanceServiceOccurrence;
/** Translated upstream _parse_maintenance_occurrence. */
export function _parse_maintenance_occurrence(...__args: any[]): any {
let category, category_name, category_path, component, component_name, component_path, group, group_path, service_type, service_type_path;
let {"value": value, "path": path} = $.bind(__args, ["value", "path"], {}, [], null, null);
component_path = ($.str(path) + ".ServiceComponent");
component = $.call(_required_optional_typed_object, [value, "ServiceComponent", component_path], null);
component_name = null;
category_name = null;
if ($.truth(((component !== null)))) {
component_name = $.call(_required_nullable_string, [component, "ServiceComponentName", ($.str(component_path) + ".ServiceComponentName")], null);
category_path = ($.str(component_path) + ".ServiceCategory");
category = $.call(_required_optional_typed_object, [component, "ServiceCategory", category_path], null);
if ($.truth(((category !== null)))) {
category_name = $.call(_required_string, [category, "ServiceCategoryName", ($.str(category_path) + ".ServiceCategoryName")], null);
}
}
service_type_path = ($.str(path) + ".ServiceType");
service_type = $.call(_required_optional_typed_object, [value, "ServiceType", service_type_path], null);
if ($.truth(((service_type === null)))) {
throw $.call(ResponseError, [($.str(service_type_path) + " is null")], null);
}
group_path = ($.str(service_type_path) + ".ServiceTypeGroup");
group = $.call(_required_optional_typed_object, [service_type, "ServiceTypeGroup", group_path], null);
if ($.truth(((group === null)))) {
throw $.call(ResponseError, [($.str(group_path) + " is null")], null);
}
return $.call(MaintenanceServiceOccurrence, [component_name, category_name, $.call(_required_string, [service_type, "ServiceTypeName", ($.str(service_type_path) + ".ServiceTypeName")], null), $.call(_required_string, [group, "ServiceTypeGroupName", ($.str(group_path) + ".ServiceTypeGroupName")], null)], null);
}
