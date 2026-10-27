import { py as $ } from "./_runtime";
export declare const DistanceUnit: $.EnumType<{
    readonly MILE: "MILE";
    readonly KILOMETER: "KILOMETER";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type DistanceUnit = ReturnType<typeof DistanceUnit>;
export declare const SpeedUnit: $.EnumType<{
    readonly KPH: "KPH";
    readonly MPH: "MPH";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type SpeedUnit = ReturnType<typeof SpeedUnit>;
export declare const TemperatureUnit: $.EnumType<{
    readonly CELSIUS: "CELSIUS";
    readonly FAHRENHEIT: "FAHRENHEIT";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type TemperatureUnit = ReturnType<typeof TemperatureUnit>;
export declare const PurchaseType: $.EnumType<{
    readonly PURCHASE: "PURCHASE";
    readonly TRIAL: "TRIAL";
    readonly SUBSCRIPTION: "SUBSCRIPTION";
}>;
export type PurchaseType = ReturnType<typeof PurchaseType>;
export declare const ProductType: $.EnumType<{
    readonly TELEMATICS: "TELEMATICS";
    readonly FEATURE_ON_DEMAND: "FEATURE_ON_DEMAND";
}>;
export type ProductType = ReturnType<typeof ProductType>;
export declare const DataPrivacyMode: $.EnumType<{
    readonly ON: "ON";
    readonly OFF: "OFF";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type DataPrivacyMode = ReturnType<typeof DataPrivacyMode>;
export declare const ChargeHistoryAggregator: $.EnumType<{
    readonly DAILY: "DAILY";
    readonly MONTHLY: "MONTHLY";
    readonly YEARLY: "YEARLY";
}>;
export type ChargeHistoryAggregator = ReturnType<typeof ChargeHistoryAggregator>;
export declare const WeekDay: $.EnumType<{
    readonly MONDAY: "MO";
    readonly TUESDAY: "TU";
    readonly WEDNESDAY: "WE";
    readonly THURSDAY: "TH";
    readonly FRIDAY: "FR";
    readonly SATURDAY: "SA";
    readonly SUNDAY: "SU";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type WeekDay = ReturnType<typeof WeekDay>;
export declare const SeatClimateOption: $.EnumType<{
    readonly COOL: "COOL";
    readonly HEAT: "HEAT";
    readonly OFF: "OFF";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type SeatClimateOption = ReturnType<typeof SeatClimateOption>;
export declare const V2LState: $.EnumType<{
    readonly NO_DISPLAY: "NO_DISPLAY";
    readonly ALL_OFF: "ALL_OFF";
    readonly ALL_ON: "ALL_ON";
    readonly INSIDE_ON: "INSIDE_ON";
    readonly OUTSIDE_ON: "OUTSIDE_ON";
    readonly DISABLED: "DISABLED";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type V2LState = ReturnType<typeof V2LState>;
export declare const CameraPosition: $.EnumType<{
    readonly OUTSIDE_REAR_CAMERA: "OUTSIDE_REAR_CAMERA";
    readonly OUTSIDE_FRONT_CAMERA: "OUTSIDE_FRONT_CAMERA";
    readonly INSIDE_CAMERA: "INSIDE_CAMERA";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type CameraPosition = ReturnType<typeof CameraPosition>;
export declare const CameraService: $.EnumType<{
    readonly DVR_REMOTE_PHOTO: "DVR_REMOTE_PHOTO";
    readonly DVR_CRASH_PHOTO: "DVR_CRASH_PHOTO";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type CameraService = ReturnType<typeof CameraService>;
export declare const ServiceRequestStatus: $.EnumType<{
    readonly SUCCESS: "SUCCESS";
    readonly INITIATED: "INITIATED";
    readonly PENDING: "PENDING";
    readonly SCHEDULED: "SCHEDULED";
    readonly FAILED: "FAILED";
    readonly SENT: "SENT";
    readonly CANCELLATION_SUCCESS: "CANCELLATION_SUCCESS";
    readonly CANCELLATION_INITIATED: "CANCELLATION_INITIATED";
    readonly CANCELLATION_SENT: "CANCELLATION_SENT";
    readonly CANCELLATION_FAILED: "CANCELLATION_FAILED";
    readonly CANCEL_UPDATE_FAILED: "CANCEL_UPDATE_FAILED";
    readonly CANCEL_UPDATE_INITIATED: "CANCEL_UPDATE_INITIATED";
    readonly CANCEL_UPDATE_SUCCESS: "CANCEL_UPDATE_SUCCESS";
    readonly CANCEL_UPDATE_SENT: "CANCEL_UPDATE_SENT";
    readonly UPDATE_SENT: "UPDATE_SENT";
    readonly UPDATE_INITIATED: "UPDATE_INITIATED";
    readonly UPDATE_SUCCESS: "UPDATE_SUCCESS";
    readonly UPDATE_FAILED: "UPDATE_FAILED";
    readonly SUCCESS_EXECUTION_CONFIRMED: "SUCCESS_EXECUTION_CONFIRMED";
    readonly UNKNOWN: "UNKNOWN";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type ServiceRequestStatus = ReturnType<typeof ServiceRequestStatus>;
export declare let _SUCCESSFUL_SERVICE_REQUEST_STATUSES: any;
export declare let _TERMINAL_SERVICE_REQUEST_STATUSES: any;
export declare const ServiceRequestKind: $.EnumType<{
    readonly CHARGE: "charge";
    readonly CHARGE_CONFIGURATION: "charge_configuration";
    readonly CLIMATE: "climate";
    readonly DATA_WIPE: "data_wipe";
    readonly DOOR: "door";
    readonly ENGINE: "engine";
    readonly HORN_LIGHT: "horn_light";
    readonly LOCATION: "location";
    readonly OTA: "ota";
    readonly PHOTO: "photo";
    readonly ROUTE: "route";
    readonly T_JUNCTION: "t_junction";
    readonly V2L: "v2l";
    readonly VEHICLE_STATUS: "vehicle_status";
}>;
export type ServiceRequestKind = ReturnType<typeof ServiceRequestKind>;
export declare const VehicleAlertKind: $.EnumType<{
    readonly BOUNDARY: "boundary";
    readonly CURFEW: "curfew";
    readonly SPEED: "speed";
    readonly VALET: "valet";
}>;
export type VehicleAlertKind = ReturnType<typeof VehicleAlertKind>;
