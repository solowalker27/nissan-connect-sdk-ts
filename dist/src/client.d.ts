/** Public connected-vehicle client. */
import { _AccountClientMixin } from "./_account_client";
export { _AccountClientMixin };
import { _AlertClientMixin } from "./_alert_client";
export { _AlertClientMixin };
import { _ClimateChargeClientMixin } from "./_climate_charge_client";
export { _ClimateChargeClientMixin };
import { _ContentClientMixin } from "./_content_client";
export { _ContentClientMixin };
import { _DealerClientMixin } from "./_dealer_client";
export { _DealerClientMixin };
import { _DriverClientMixin } from "./_driver_client";
export { _DriverClientMixin };
import { _FinanceClientMixin } from "./_finance_client";
export { _FinanceClientMixin };
import { _GarageClientMixin } from "./_garage_client";
export { _GarageClientMixin };
import { _IncidentClientMixin } from "./_incident_client";
export { _IncidentClientMixin };
import { _MessageClientMixin } from "./_message_client";
export { _MessageClientMixin };
import { _NavigationCommandClientMixin } from "./_navigation_command_client";
export { _NavigationCommandClientMixin };
import { _NavigationReadClientMixin } from "./_navigation_read_client";
export { _NavigationReadClientMixin };
import { _OtaNotificationClientMixin } from "./_ota_notification_client";
export { _OtaNotificationClientMixin };
import { _PollingClientMixin } from "./_polling_client";
export { _PollingClientMixin };
import { _SecondDeliveryClientMixin } from "./_second_delivery_client";
export { _SecondDeliveryClientMixin };
import { _VehicleCommandClientMixin } from "./_vehicle_command_client";
export { _VehicleCommandClientMixin };
import { _VehicleDataClientMixin } from "./_vehicle_data_client";
export { _VehicleDataClientMixin };
import { _VehicleDetailClientMixin } from "./_vehicle_detail_client";
export { _VehicleDetailClientMixin };
declare const NissanClient_base: any;
/** Async client for MyNISSAN connected vehicles. */
export declare class NissanClient extends NissanClient_base {
    constructor(...__args: any[]);
}
export interface NissanClient extends _AccountClientMixin, _ContentClientMixin, _FinanceClientMixin, _DealerClientMixin, _SecondDeliveryClientMixin, _IncidentClientMixin, _GarageClientMixin, _DriverClientMixin, _VehicleDetailClientMixin, _NavigationReadClientMixin, _MessageClientMixin, _AlertClientMixin, _VehicleDataClientMixin, _PollingClientMixin, _ClimateChargeClientMixin, _VehicleCommandClientMixin, _NavigationCommandClientMixin, _OtaNotificationClientMixin {
}
