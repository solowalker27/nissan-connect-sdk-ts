// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";



const Mapping = $.Mapping;

import { _object, _optional_bool, _optional_int, _optional_list, _optional_object, _optional_str, _required_bool, _required_float, _required_str } from "./_parsing_values";
export { _object, _optional_bool, _optional_int, _optional_list, _optional_object, _optional_str, _required_bool, _required_float, _required_str };

import { AccessoryCapability, HvacTemperatureCapabilities, SeatHeaterAccessories, SeatHeaterCapability, ServiceCapability, SunRoofCapability, VehicleAccessoriesDetails, VehicleCapabilities, WayPointCapability } from "./models";
export { AccessoryCapability, HvacTemperatureCapabilities, SeatHeaterAccessories, SeatHeaterCapability, ServiceCapability, SunRoofCapability, VehicleAccessoriesDetails, VehicleCapabilities, WayPointCapability };

export function parse_vehicle_capabilities(data: Record<string, unknown>, vin: string): VehicleCapabilities;
/** Parse connected services advertised for one vehicle. */
export function parse_vehicle_capabilities(...__args: any[]): any {
let capabilities, index, item, service_values, services, value, vehicle;
let {"data": data, "vin": vin} = $.bind(__args, ["data", "vin"], {}, [], null, null);
/** Parse connected services advertised for one vehicle. */
vehicle = $.call(_object, [$.call($.attr(data, "get"), ["vehicle"], null), "vehicle"], null);
capabilities = $.call(_optional_object, [$.call($.attr(vehicle, "get"), ["capabilities"], null), "vehicle.capabilities"], null);
if ($.truth(((capabilities === null)))) {
return $.call(VehicleCapabilities, [vin, null, null, []], null);
}
service_values = $.or(() => $.call(_optional_list, [$.call($.attr(capabilities, "get"), ["serviceCapability"], null), "vehicle.capabilities.serviceCapability"], null), () => []);
services = [];
for ([index, value] of $.iterable($.call($.enumerate, [service_values], null))) {
item = $.call(_object, [value, ("vehicle.capabilities.serviceCapability[" + $.str(index) + "]")], null);
$.call($.attr(services, "append"), [$.call(ServiceCapability, [], Object.assign({}, {"type": $.call(_required_str, [$.call($.attr(item, "get"), ["type"], null), "serviceCapability.type"], null)}, {"enabled": $.call(_required_bool, [$.call($.attr(item, "get"), ["enabled"], null), "serviceCapability.enabled"], null)}, {"subscribed": $.call(_optional_bool, [$.call($.attr(item, "get"), ["subscribed"], null)], null)}))], null);
}
return $.call(VehicleCapabilities, [], Object.assign({}, {"vin": vin}, {"telematics_program": $.call(_optional_str, [$.call($.attr(capabilities, "get"), ["telematicsProgram"], null)], null)}, {"enrollment_status": $.call(_optional_str, [$.call($.attr(capabilities, "get"), ["status"], null)], null)}, {"services": $.call($.tuple, [services], null)}, {"accessories_details": $.call(_parse_vehicle_accessories_details, [$.call($.attr(capabilities, "get"), ["accessoriesDetails"], null)], null)}));
}

export function _parse_vehicle_accessories_details(value: unknown): VehicleAccessoriesDetails | null;
/** Translated upstream _parse_vehicle_accessories_details. */
export function _parse_vehicle_accessories_details(...__args: any[]): any {
let details, hvac_temperatures, seat_heater, steering_heat, sun_roof, way_point, window_status;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
details = $.call(_optional_object, [value, "vehicle.capabilities.accessoriesDetails"], null);
if ($.truth(((details === null)))) {
return null;
}
seat_heater = $.call(_optional_object, [$.call($.attr(details, "get"), ["seatHeater"], null), "vehicle.capabilities.accessoriesDetails.seatHeater"], null);
steering_heat = $.call(_optional_object, [$.call($.attr(details, "get"), ["steeringHeat"], null), "vehicle.capabilities.accessoriesDetails.steeringHeat"], null);
sun_roof = $.call(_optional_object, [$.call($.attr(details, "get"), ["sunRoof"], null), "vehicle.capabilities.accessoriesDetails.sunRoof"], null);
window_status = $.call(_optional_object, [$.call($.attr(details, "get"), ["windowStatus"], null), "vehicle.capabilities.accessoriesDetails.windowStatus"], null);
way_point = $.call(_optional_object, [$.call($.attr(details, "get"), ["wayPoint"], null), "vehicle.capabilities.accessoriesDetails.wayPoint"], null);
hvac_temperatures = $.call(_optional_object, [$.call($.attr(details, "get"), ["hvacTemperatures"], null), "vehicle.capabilities.accessoriesDetails.hvacTemperatures"], null);
return $.call(VehicleAccessoriesDetails, [], Object.assign({}, {"seat_heater": ($.truth(((seat_heater !== null))) ? $.call(_parse_seat_heater_capability, [seat_heater], null) : null)}, {"steering_heat": ($.truth(((steering_heat !== null))) ? $.call(AccessoryCapability, [], Object.assign({}, {"enabled": $.call(_optional_bool, [$.call($.attr(steering_heat, "get"), ["enabled"], null)], null)})) : null)}, {"sun_roof": ($.truth(((sun_roof !== null))) ? $.call(SunRoofCapability, [], Object.assign({}, {"type": $.call(_optional_str, [$.call($.attr(sun_roof, "get"), ["type"], null)], null)}, {"enabled": $.call(_optional_bool, [$.call($.attr(sun_roof, "get"), ["enabled"], null)], null)})) : null)}, {"window_status": ($.truth(((window_status !== null))) ? $.call(AccessoryCapability, [], Object.assign({}, {"enabled": $.call(_optional_bool, [$.call($.attr(window_status, "get"), ["enabled"], null)], null)})) : null)}, {"way_point": ($.truth(((way_point !== null))) ? $.call(WayPointCapability, [], Object.assign({}, {"enabled": $.call(_optional_bool, [$.call($.attr(way_point, "get"), ["enabled"], null)], null)}, {"max_number": $.call(_optional_int, [$.call($.attr(way_point, "get"), ["maxNumber"], null)], null)})) : null)}, {"hvac_temperatures": ($.truth(((hvac_temperatures !== null))) ? $.call(HvacTemperatureCapabilities, [], Object.assign({}, {"unit": $.call(_required_str, [$.call($.attr(hvac_temperatures, "get"), ["unit"], null), "hvacTemperatures.unit"], null)}, {"default": $.call(_required_float, [$.call($.attr(hvac_temperatures, "get"), ["default"], null), "hvacTemperatures.default"], null)}, {"minimum": $.call(_required_float, [$.call($.attr(hvac_temperatures, "get"), ["min"], null), "hvacTemperatures.min"], null)}, {"maximum": $.call(_required_float, [$.call($.attr(hvac_temperatures, "get"), ["max"], null), "hvacTemperatures.max"], null)}, {"resolution": $.call(_required_float, [$.call($.attr(hvac_temperatures, "get"), ["resolution"], null), "hvacTemperatures.resolution"], null)})) : null)}));
}

export function _parse_seat_heater_capability(value: Record<string, unknown>): SeatHeaterCapability;
/** Translated upstream _parse_seat_heater_capability. */
export function _parse_seat_heater_capability(...__args: any[]): any {
let accessories, parsed_accessories;
let {"value": value} = $.bind(__args, ["value"], {}, [], null, null);
accessories = $.call(_optional_object, [$.call($.attr(value, "get"), ["accessories"], null), "vehicle.capabilities.accessoriesDetails.seatHeater.accessories"], null);
parsed_accessories = null;
if ($.truth(((accessories !== null)))) {
parsed_accessories = $.call(SeatHeaterAccessories, [], Object.assign({}, {"assistant_seat": $.call(_optional_str, [$.call($.attr(accessories, "get"), ["assistantSeat"], null)], null)}, {"driver_seat": $.call(_optional_str, [$.call($.attr(accessories, "get"), ["driverSeat"], null)], null)}, {"second_centre_seat": $.call(_optional_str, [$.call($.attr(accessories, "get"), ["secondCentreSeat"], null)], null)}, {"second_left_seat": $.call(_optional_str, [$.call($.attr(accessories, "get"), ["secondLeftSeat"], null)], null)}, {"second_right_seat": $.call(_optional_str, [$.call($.attr(accessories, "get"), ["secondRightSeat"], null)], null)}, {"third_left_seat": $.call(_optional_str, [$.call($.attr(accessories, "get"), ["thirdLeftSeat"], null)], null)}, {"third_right_seat": $.call(_optional_str, [$.call($.attr(accessories, "get"), ["thirdRightSeat"], null)], null)}));
}
return $.call(SeatHeaterCapability, [], Object.assign({}, {"enabled": $.call(_optional_bool, [$.call($.attr(value, "get"), ["enabled"], null)], null)}, {"accessories": parsed_accessories}));
}
