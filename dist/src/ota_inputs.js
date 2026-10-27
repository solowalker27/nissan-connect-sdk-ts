"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataWipeType = exports.serialize_enum = exports.serialize_datetime = void 0;
exports.download_ota_update_input = download_ota_update_input;
exports.ota_activation_schedule_input = ota_activation_schedule_input;
exports.data_wipe_type_input = data_wipe_type_input;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const datetime = _runtime_1.py.datetime;
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "serialize_datetime", { enumerable: true, get: function () { return graphql_input_1.serialize_datetime; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const ota_models_1 = require("./ota_models");
Object.defineProperty(exports, "DataWipeType", { enumerable: true, get: function () { return ota_models_1.DataWipeType; } });
/** Serialize a download request using Nissan's GraphQL field names. */
function download_ota_update_input(...__args) {
    let { "ota_update_id": ota_update_id } = _runtime_1.py.bind(__args, ["ota_update_id"], {}, [], null, null);
    /** Serialize a download request using Nissan's GraphQL field names. */
    return Object.assign({}, { ["otaUpdateId"]: ota_update_id });
}
/** Serialize a scheduled OTA activation input. */
function ota_activation_schedule_input(...__args) {
    let { "ota_update_id": ota_update_id, "scheduled_date": scheduled_date } = _runtime_1.py.bind(__args, ["ota_update_id", "scheduled_date"], {}, [], null, null);
    /** Serialize a scheduled OTA activation input. */
    return Object.assign({}, { ["otaUpdateId"]: ota_update_id }, { ["scheduledDate"]: _runtime_1.py.call(graphql_input_1.serialize_datetime, [scheduled_date], null) });
}
/** Serialize a schema-valid data-wipe target. */
function data_wipe_type_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize a schema-valid data-wipe target. */
    return _runtime_1.py.call(graphql_input_1.serialize_enum, [value], null);
}
//# sourceMappingURL=ota_inputs.js.map