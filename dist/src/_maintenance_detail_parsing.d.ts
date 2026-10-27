import { _required_bool, _required_enum, _required_field, _required_int, _required_list, _required_nullable_bool, _required_nullable_date, _required_nullable_datetime, _required_nullable_enum, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename } from "./_maintenance_value_parsing";
export { _required_bool, _required_enum, _required_field, _required_int, _required_list, _required_nullable_bool, _required_nullable_date, _required_nullable_datetime, _required_nullable_enum, _required_nullable_int, _required_nullable_string, _required_optional_typed_object, _required_string, _root, _typed_object, _typename };
import { MaintenancePart, PartReminderConfiguration, PartsReminder, PartsReminderConfigurationThresholds, PartsReminderMutationResult, PartsReminderStatus, PastServiceExists, PastServiceGeneralError, PastServiceResult, PastServiceSuccess, ReminderDistance, ServiceContract, UnknownPastServiceResult, WarrantyServiceContractStatus } from "./maintenance_models";
export { MaintenancePart, PartReminderConfiguration, PartsReminder, PartsReminderConfigurationThresholds, PartsReminderMutationResult, PartsReminderStatus, PastServiceExists, PastServiceGeneralError, PastServiceResult, PastServiceSuccess, ReminderDistance, ServiceContract, UnknownPastServiceResult, WarrantyServiceContractStatus };
import { DistanceUnit } from "./models";
export { DistanceUnit };
export declare let _AVK2_VEHICLE_TYPENAMES: any;
export declare function _parse_service_contract(value: unknown, path: string): ServiceContract;
export declare function _parse_past_service_result(data: Record<string, unknown>, root_field: string): PastServiceResult | null;
export declare function _parse_part(value: unknown, path: string): MaintenancePart;
export declare function _parse_configuration_thresholds(value: unknown, path: string): PartsReminderConfigurationThresholds;
export declare function _parse_parts_reminder(value: unknown, path: string): PartsReminder;
export declare function _required_nullable_distance(container: Record<string, unknown>, field: string, path: string): ReminderDistance | null;
export declare function _parse_parts_reminder_mutation(data: Record<string, unknown>, root_field: string, options: {
    conditional_response_status: boolean;
}): PartsReminderMutationResult | null;
