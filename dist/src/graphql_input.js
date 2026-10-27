"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSET = exports.UnsetType = void 0;
exports.serialize_datetime = serialize_datetime;
exports.serialize_enum = serialize_enum;
exports.optional_input_fields = optional_input_fields;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const datetime = _runtime_1.py.datetime;
const Enum = _runtime_1.py.Enum;
const StrEnum = _runtime_1.py.StrEnum;
const Final = _runtime_1.py.Final;
exports.UnsetType = _runtime_1.py.enumType("UnsetType", { "UNSET": "UNSET" }, false);
exports.UNSET = _runtime_1.py.attr(exports.UnsetType, "UNSET");
/** Serialize an offset-aware date-time for Nissan's GraphQL API. */
function serialize_datetime(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize an offset-aware date-time for Nissan's GraphQL API. */
    if (_runtime_1.py.truth(_runtime_1.py.or(() => ((_runtime_1.py.attr(value, "tzinfo") === null)), () => ((_runtime_1.py.call(_runtime_1.py.attr(value, "utcoffset"), [], null) === null))))) {
        throw _runtime_1.py.call(_runtime_1.py.ValueError, ["Nissan date-time inputs must include a UTC offset"], null);
    }
    return _runtime_1.py.call(_runtime_1.py.attr(value, "isoformat"), [], null);
}
/** Serialize a schema-valid GraphQL enum value. */
function serialize_enum(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    /** Serialize a schema-valid GraphQL enum value. */
    if (_runtime_1.py.truth((_runtime_1.py.eq(_runtime_1.py.attr(value, "value"), "UNKNOWN__")))) {
        throw _runtime_1.py.call(_runtime_1.py.ValueError, ["UNKNOWN_VALUE cannot be sent to Nissan as an input enum"], null);
    }
    return _runtime_1.py.attr(value, "value");
}
/** Keep explicitly supplied GraphQL fields, including explicit nulls. */
function optional_input_fields(...__args) {
    let key, value;
    let { "values": values } = _runtime_1.py.bind(__args, [], {}, [], null, "values");
    /** Keep explicitly supplied GraphQL fields, including explicit nulls. */
    return (() => { const __out = {}; for (const [key, value] of _runtime_1.py.iterable(_runtime_1.py.call(_runtime_1.py.attr(values, "items"), [], null))) {
        if (_runtime_1.py.truth(((value !== exports.UNSET)))) {
            __out[key] = value;
        }
    } return __out; })();
}
//# sourceMappingURL=graphql_input.js.map