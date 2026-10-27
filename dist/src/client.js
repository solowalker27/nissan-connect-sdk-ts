"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NissanClient = exports._VehicleDetailClientMixin = exports._VehicleDataClientMixin = exports._VehicleCommandClientMixin = exports._SecondDeliveryClientMixin = exports._PollingClientMixin = exports._OtaNotificationClientMixin = exports._NavigationReadClientMixin = exports._NavigationCommandClientMixin = exports._MessageClientMixin = exports._IncidentClientMixin = exports._GarageClientMixin = exports._FinanceClientMixin = exports._DriverClientMixin = exports._DealerClientMixin = exports._ContentClientMixin = exports._ClimateChargeClientMixin = exports._AlertClientMixin = exports._AccountClientMixin = void 0;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
/** Public connected-vehicle client. */
const _account_client_1 = require("./_account_client");
Object.defineProperty(exports, "_AccountClientMixin", { enumerable: true, get: function () { return _account_client_1._AccountClientMixin; } });
const _alert_client_1 = require("./_alert_client");
Object.defineProperty(exports, "_AlertClientMixin", { enumerable: true, get: function () { return _alert_client_1._AlertClientMixin; } });
const _climate_charge_client_1 = require("./_climate_charge_client");
Object.defineProperty(exports, "_ClimateChargeClientMixin", { enumerable: true, get: function () { return _climate_charge_client_1._ClimateChargeClientMixin; } });
const _content_client_1 = require("./_content_client");
Object.defineProperty(exports, "_ContentClientMixin", { enumerable: true, get: function () { return _content_client_1._ContentClientMixin; } });
const _dealer_client_1 = require("./_dealer_client");
Object.defineProperty(exports, "_DealerClientMixin", { enumerable: true, get: function () { return _dealer_client_1._DealerClientMixin; } });
const _driver_client_1 = require("./_driver_client");
Object.defineProperty(exports, "_DriverClientMixin", { enumerable: true, get: function () { return _driver_client_1._DriverClientMixin; } });
const _finance_client_1 = require("./_finance_client");
Object.defineProperty(exports, "_FinanceClientMixin", { enumerable: true, get: function () { return _finance_client_1._FinanceClientMixin; } });
const _garage_client_1 = require("./_garage_client");
Object.defineProperty(exports, "_GarageClientMixin", { enumerable: true, get: function () { return _garage_client_1._GarageClientMixin; } });
const _incident_client_1 = require("./_incident_client");
Object.defineProperty(exports, "_IncidentClientMixin", { enumerable: true, get: function () { return _incident_client_1._IncidentClientMixin; } });
const _message_client_1 = require("./_message_client");
Object.defineProperty(exports, "_MessageClientMixin", { enumerable: true, get: function () { return _message_client_1._MessageClientMixin; } });
const _navigation_command_client_1 = require("./_navigation_command_client");
Object.defineProperty(exports, "_NavigationCommandClientMixin", { enumerable: true, get: function () { return _navigation_command_client_1._NavigationCommandClientMixin; } });
const _navigation_read_client_1 = require("./_navigation_read_client");
Object.defineProperty(exports, "_NavigationReadClientMixin", { enumerable: true, get: function () { return _navigation_read_client_1._NavigationReadClientMixin; } });
const _ota_notification_client_1 = require("./_ota_notification_client");
Object.defineProperty(exports, "_OtaNotificationClientMixin", { enumerable: true, get: function () { return _ota_notification_client_1._OtaNotificationClientMixin; } });
const _polling_client_1 = require("./_polling_client");
Object.defineProperty(exports, "_PollingClientMixin", { enumerable: true, get: function () { return _polling_client_1._PollingClientMixin; } });
const _second_delivery_client_1 = require("./_second_delivery_client");
Object.defineProperty(exports, "_SecondDeliveryClientMixin", { enumerable: true, get: function () { return _second_delivery_client_1._SecondDeliveryClientMixin; } });
const _vehicle_command_client_1 = require("./_vehicle_command_client");
Object.defineProperty(exports, "_VehicleCommandClientMixin", { enumerable: true, get: function () { return _vehicle_command_client_1._VehicleCommandClientMixin; } });
const _vehicle_data_client_1 = require("./_vehicle_data_client");
Object.defineProperty(exports, "_VehicleDataClientMixin", { enumerable: true, get: function () { return _vehicle_data_client_1._VehicleDataClientMixin; } });
const _vehicle_detail_client_1 = require("./_vehicle_detail_client");
Object.defineProperty(exports, "_VehicleDetailClientMixin", { enumerable: true, get: function () { return _vehicle_detail_client_1._VehicleDetailClientMixin; } });
/** Async client for MyNISSAN connected vehicles. */
class NissanClient extends _runtime_1.py.mix(_account_client_1._AccountClientMixin, _content_client_1._ContentClientMixin, _finance_client_1._FinanceClientMixin, _dealer_client_1._DealerClientMixin, _second_delivery_client_1._SecondDeliveryClientMixin, _incident_client_1._IncidentClientMixin, _garage_client_1._GarageClientMixin, _driver_client_1._DriverClientMixin, _vehicle_detail_client_1._VehicleDetailClientMixin, _navigation_read_client_1._NavigationReadClientMixin, _message_client_1._MessageClientMixin, _alert_client_1._AlertClientMixin, _vehicle_data_client_1._VehicleDataClientMixin, _polling_client_1._PollingClientMixin, _climate_charge_client_1._ClimateChargeClientMixin, _vehicle_command_client_1._VehicleCommandClientMixin, _navigation_command_client_1._NavigationCommandClientMixin, _ota_notification_client_1._OtaNotificationClientMixin) {
    constructor(...__args) { super(_runtime_1.py.SKIP); if (__args[0] === _runtime_1.py.SKIP)
        return; if (this.__init__)
        this.__init__(...__args);
    else
        _runtime_1.py.superInit(this, NissanClient, __args); }
}
exports.NissanClient = NissanClient;
_runtime_1.py.classType(NissanClient);
//# sourceMappingURL=client.js.map