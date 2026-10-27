"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize_enum = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.ClientType = void 0;
exports.contact_us_variables = contact_us_variables;
exports.faq_variables = faq_variables;
exports.live_chat_hours_variables = live_chat_hours_variables;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const content_models_1 = require("./content_models");
Object.defineProperty(exports, "ClientType", { enumerable: true, get: function () { return content_models_1.ClientType; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
/** Serialize the required contact-link client type. */
function contact_us_variables(...__args) {
    let { "client_type": client_type } = _runtime_1.py.bind(__args, ["client_type"], {}, [], null, null);
    /** Serialize the required contact-link client type. */
    return Object.assign({}, { ["clientType"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [client_type], null) });
}
/** Serialize optional nullable FAQ category filters. */
function faq_variables(...__args) {
    let serialized;
    let { "categories": categories } = _runtime_1.py.bind(__args, ["categories"], { "categories": graphql_input_1.UNSET }, [], null, null);
    /** Serialize optional nullable FAQ category filters. */
    serialized = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [categories, _runtime_1.py.tuple], null)) ? _runtime_1.py.call(_runtime_1.py.list, [categories], null) : categories);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "categories": serialized }));
}
/** Serialize optional live-chat department and implementation filters. */
function live_chat_hours_variables(...__args) {
    let serialized;
    let { "departments": departments, "enhanced_chat": enhanced_chat } = _runtime_1.py.bind(__args, ["departments", "enhanced_chat"], { "departments": graphql_input_1.UNSET, "enhanced_chat": graphql_input_1.UNSET }, [], null, null);
    /** Serialize optional live-chat department and implementation filters. */
    serialized = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [departments, _runtime_1.py.tuple], null)) ? _runtime_1.py.call(_runtime_1.py.list, [departments], null) : departments);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "departments": serialized }, { "enhancedChat": enhanced_chat }));
}
//# sourceMappingURL=content_inputs.js.map