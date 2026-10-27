import {NissanClient,Tokens,Country,ClimateSettings,TemperatureUnit,VehicleStatus} from '../dist/src/index';
const client = new NissanClient({country:Country.US,tokens:new Tokens({access_token:'x',refresh_token:'y'})});
const status:Promise<VehicleStatus> = client.async_get_vehicle_status('VIN',{temperature_unit:TemperatureUnit.CELSIUS});
client.async_start_climate('VIN',new ClimateSettings(21,TemperatureUnit.CELSIUS));
// @ts-expect-error battery percentage has a numeric value.
status.then(s=>{const value:string = s.battery?.level;});
// @ts-expect-error VIN must be a string.
client.async_get_vehicle_status(42);
// @ts-expect-error target temperature must be numeric.
new ClimateSettings('warm',TemperatureUnit.CELSIUS);
void status;
