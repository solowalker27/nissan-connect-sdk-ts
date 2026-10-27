"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinateInput = exports.AddressInput = exports.optional_input_fields = exports.UnsetType = exports.UNSET = void 0;
exports.address_input = address_input;
exports.coordinate_input = coordinate_input;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
/** Optional postal address fields accepted by Nissan input objects. */
class AddressInput {
    address1;
    address2;
    city;
    state;
    postal_code;
    country;
    neighbourhood;
    district;
    street_number;
    static __fields = [["address1", graphql_input_1.UNSET], ["address2", graphql_input_1.UNSET], ["city", graphql_input_1.UNSET], ["state", graphql_input_1.UNSET], ["postal_code", graphql_input_1.UNSET], ["country", graphql_input_1.UNSET], ["neighbourhood", graphql_input_1.UNSET], ["district", graphql_input_1.UNSET], ["street_number", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, AddressInput, __args); Object.freeze(this); }
}
exports.AddressInput = AddressInput;
_runtime_1.py.classType(AddressInput);
/** Required latitude and longitude accepted by Nissan input objects. */
class CoordinateInput {
    latitude;
    longitude;
    static __fields = [["latitude", _runtime_1.py.MISSING], ["longitude", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, CoordinateInput, __args); Object.freeze(this); }
}
exports.CoordinateInput = CoordinateInput;
_runtime_1.py.classType(CoordinateInput);
/** Translated upstream address_input. */
function address_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "address1": _runtime_1.py.attr(value, "address1") }, { "address2": _runtime_1.py.attr(value, "address2") }, { "city": _runtime_1.py.attr(value, "city") }, { "state": _runtime_1.py.attr(value, "state") }, { "postalCode": _runtime_1.py.attr(value, "postal_code") }, { "country": _runtime_1.py.attr(value, "country") }, { "neighbourhood": _runtime_1.py.attr(value, "neighbourhood") }, { "district": _runtime_1.py.attr(value, "district") }, { "streetNumber": _runtime_1.py.attr(value, "street_number") }));
}
/** Translated upstream coordinate_input. */
function coordinate_input(...__args) {
    let { "value": value } = _runtime_1.py.bind(__args, ["value"], {}, [], null, null);
    return Object.assign({}, { ["latitude"]: _runtime_1.py.attr(value, "latitude") }, { ["longitude"]: _runtime_1.py.attr(value, "longitude") });
}
//# sourceMappingURL=common_inputs.js.map