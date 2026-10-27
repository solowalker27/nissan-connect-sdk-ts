// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const StrEnum = $.StrEnum;

export const DistanceUnit = $.enumType("DistanceUnit", {"MILE": "MILE", "KILOMETER": "KILOMETER", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type DistanceUnit = ReturnType<typeof DistanceUnit>;

export const SpeedUnit = $.enumType("SpeedUnit", {"KPH": "KPH", "MPH": "MPH", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type SpeedUnit = ReturnType<typeof SpeedUnit>;

export const TemperatureUnit = $.enumType("TemperatureUnit", {"CELSIUS": "CELSIUS", "FAHRENHEIT": "FAHRENHEIT", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type TemperatureUnit = ReturnType<typeof TemperatureUnit>;

export const PurchaseType = $.enumType("PurchaseType", {"PURCHASE": "PURCHASE", "TRIAL": "TRIAL", "SUBSCRIPTION": "SUBSCRIPTION"}, true);
export type PurchaseType = ReturnType<typeof PurchaseType>;

export const ProductType = $.enumType("ProductType", {"TELEMATICS": "TELEMATICS", "FEATURE_ON_DEMAND": "FEATURE_ON_DEMAND"}, true);
export type ProductType = ReturnType<typeof ProductType>;

export const DataPrivacyMode = $.enumType("DataPrivacyMode", {"ON": "ON", "OFF": "OFF", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type DataPrivacyMode = ReturnType<typeof DataPrivacyMode>;

export const ChargeHistoryAggregator = $.enumType("ChargeHistoryAggregator", {"DAILY": "DAILY", "MONTHLY": "MONTHLY", "YEARLY": "YEARLY"}, true);
export type ChargeHistoryAggregator = ReturnType<typeof ChargeHistoryAggregator>;

export const WeekDay = $.enumType("WeekDay", {"MONDAY": "MO", "TUESDAY": "TU", "WEDNESDAY": "WE", "THURSDAY": "TH", "FRIDAY": "FR", "SATURDAY": "SA", "SUNDAY": "SU", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type WeekDay = ReturnType<typeof WeekDay>;

export const SeatClimateOption = $.enumType("SeatClimateOption", {"COOL": "COOL", "HEAT": "HEAT", "OFF": "OFF", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type SeatClimateOption = ReturnType<typeof SeatClimateOption>;

export const V2LState = $.enumType("V2LState", {"NO_DISPLAY": "NO_DISPLAY", "ALL_OFF": "ALL_OFF", "ALL_ON": "ALL_ON", "INSIDE_ON": "INSIDE_ON", "OUTSIDE_ON": "OUTSIDE_ON", "DISABLED": "DISABLED", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type V2LState = ReturnType<typeof V2LState>;

export const CameraPosition = $.enumType("CameraPosition", {"OUTSIDE_REAR_CAMERA": "OUTSIDE_REAR_CAMERA", "OUTSIDE_FRONT_CAMERA": "OUTSIDE_FRONT_CAMERA", "INSIDE_CAMERA": "INSIDE_CAMERA", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type CameraPosition = ReturnType<typeof CameraPosition>;

export const CameraService = $.enumType("CameraService", {"DVR_REMOTE_PHOTO": "DVR_REMOTE_PHOTO", "DVR_CRASH_PHOTO": "DVR_CRASH_PHOTO", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type CameraService = ReturnType<typeof CameraService>;

export const ServiceRequestStatus = $.enumType("ServiceRequestStatus", {"SUCCESS": "SUCCESS", "INITIATED": "INITIATED", "PENDING": "PENDING", "SCHEDULED": "SCHEDULED", "FAILED": "FAILED", "SENT": "SENT", "CANCELLATION_SUCCESS": "CANCELLATION_SUCCESS", "CANCELLATION_INITIATED": "CANCELLATION_INITIATED", "CANCELLATION_SENT": "CANCELLATION_SENT", "CANCELLATION_FAILED": "CANCELLATION_FAILED", "CANCEL_UPDATE_FAILED": "CANCEL_UPDATE_FAILED", "CANCEL_UPDATE_INITIATED": "CANCEL_UPDATE_INITIATED", "CANCEL_UPDATE_SUCCESS": "CANCEL_UPDATE_SUCCESS", "CANCEL_UPDATE_SENT": "CANCEL_UPDATE_SENT", "UPDATE_SENT": "UPDATE_SENT", "UPDATE_INITIATED": "UPDATE_INITIATED", "UPDATE_SUCCESS": "UPDATE_SUCCESS", "UPDATE_FAILED": "UPDATE_FAILED", "SUCCESS_EXECUTION_CONFIRMED": "SUCCESS_EXECUTION_CONFIRMED", "UNKNOWN": "UNKNOWN", "UNKNOWN_VALUE": "UNKNOWN__"}, true);
export type ServiceRequestStatus = ReturnType<typeof ServiceRequestStatus>;

export let _SUCCESSFUL_SERVICE_REQUEST_STATUSES = $.call($.frozenset, [new Set([$.attr(ServiceRequestStatus, "SUCCESS"), $.attr(ServiceRequestStatus, "SUCCESS_EXECUTION_CONFIRMED"), $.attr(ServiceRequestStatus, "CANCELLATION_SUCCESS"), $.attr(ServiceRequestStatus, "CANCEL_UPDATE_SUCCESS"), $.attr(ServiceRequestStatus, "UPDATE_SUCCESS")])], null);

export let _TERMINAL_SERVICE_REQUEST_STATUSES = $.call($.frozenset, [new Set([...$.iterable(_SUCCESSFUL_SERVICE_REQUEST_STATUSES), $.attr(ServiceRequestStatus, "FAILED"), $.attr(ServiceRequestStatus, "CANCELLATION_FAILED"), $.attr(ServiceRequestStatus, "CANCEL_UPDATE_FAILED"), $.attr(ServiceRequestStatus, "UPDATE_FAILED")])], null);

export const ServiceRequestKind = $.enumType("ServiceRequestKind", {"CHARGE": "charge", "CHARGE_CONFIGURATION": "charge_configuration", "CLIMATE": "climate", "DATA_WIPE": "data_wipe", "DOOR": "door", "ENGINE": "engine", "HORN_LIGHT": "horn_light", "LOCATION": "location", "OTA": "ota", "PHOTO": "photo", "ROUTE": "route", "T_JUNCTION": "t_junction", "V2L": "v2l", "VEHICLE_STATUS": "vehicle_status"}, true);
export type ServiceRequestKind = ReturnType<typeof ServiceRequestKind>;

export const VehicleAlertKind = $.enumType("VehicleAlertKind", {"BOUNDARY": "boundary", "CURFEW": "curfew", "SPEED": "speed", "VALET": "valet"}, true);
export type VehicleAlertKind = ReturnType<typeof VehicleAlertKind>;
