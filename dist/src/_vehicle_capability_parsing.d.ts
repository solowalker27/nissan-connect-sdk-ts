import { _object, _optional_bool, _optional_int, _optional_list, _optional_object, _optional_str, _required_bool, _required_float, _required_str } from "./_parsing_values";
export { _object, _optional_bool, _optional_int, _optional_list, _optional_object, _optional_str, _required_bool, _required_float, _required_str };
import { AccessoryCapability, HvacTemperatureCapabilities, SeatHeaterAccessories, SeatHeaterCapability, ServiceCapability, SunRoofCapability, VehicleAccessoriesDetails, VehicleCapabilities, WayPointCapability } from "./models";
export { AccessoryCapability, HvacTemperatureCapabilities, SeatHeaterAccessories, SeatHeaterCapability, ServiceCapability, SunRoofCapability, VehicleAccessoriesDetails, VehicleCapabilities, WayPointCapability };
export declare function parse_vehicle_capabilities(data: Record<string, unknown>, vin: string): VehicleCapabilities;
export declare function _parse_vehicle_accessories_details(value: unknown): VehicleAccessoriesDetails | null;
export declare function _parse_seat_heater_capability(value: Record<string, unknown>): SeatHeaterCapability;
