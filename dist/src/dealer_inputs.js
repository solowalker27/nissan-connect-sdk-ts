"use strict";
// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAppointmentInput = exports.ServiceOdometerInput = exports.TransportationOptionInput = exports.TransportationPreferencesInput = exports.ServiceAdvisorInput = exports.ServiceOperationInput = exports.ServiceDiscountInput = exports.ServiceCustomerInput = exports.MaintenanceMileageInput = exports.ServiceLocationType = exports.ServiceCode = exports.DistanceUnit = exports.serialize_enum = exports.serialize_datetime = exports.optional_input_fields = exports.UnsetType = exports.UNSET = exports.address_input = exports.AddressInput = void 0;
exports.all_dealers_variables = all_dealers_variables;
exports.dealers_by_search_variables = dealers_by_search_variables;
exports.maintenance_visits_variables = maintenance_visits_variables;
exports.service_advisors_variables = service_advisors_variables;
exports.service_time_slots_variables = service_time_slots_variables;
exports.service_appointments_variables = service_appointments_variables;
exports.service_appointment_variables = service_appointment_variables;
exports.update_service_appointment_variables = update_service_appointment_variables;
exports.cancel_service_appointment_variables = cancel_service_appointment_variables;
exports._service_operation_input = _service_operation_input;
exports._service_advisor_input = _service_advisor_input;
exports._transportation_option_input = _transportation_option_input;
// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.
const _runtime_1 = require("./_runtime");
const dataclass = _runtime_1.py.dataclass;
const datetime = _runtime_1.py.datetime;
const StrEnum = _runtime_1.py.StrEnum;
const common_inputs_1 = require("./common_inputs");
Object.defineProperty(exports, "AddressInput", { enumerable: true, get: function () { return common_inputs_1.AddressInput; } });
Object.defineProperty(exports, "address_input", { enumerable: true, get: function () { return common_inputs_1.address_input; } });
const graphql_input_1 = require("./graphql_input");
Object.defineProperty(exports, "UNSET", { enumerable: true, get: function () { return graphql_input_1.UNSET; } });
Object.defineProperty(exports, "UnsetType", { enumerable: true, get: function () { return graphql_input_1.UnsetType; } });
Object.defineProperty(exports, "optional_input_fields", { enumerable: true, get: function () { return graphql_input_1.optional_input_fields; } });
Object.defineProperty(exports, "serialize_datetime", { enumerable: true, get: function () { return graphql_input_1.serialize_datetime; } });
Object.defineProperty(exports, "serialize_enum", { enumerable: true, get: function () { return graphql_input_1.serialize_enum; } });
const models_1 = require("./models");
Object.defineProperty(exports, "DistanceUnit", { enumerable: true, get: function () { return models_1.DistanceUnit; } });
exports.ServiceCode = _runtime_1.py.enumType("ServiceCode", { "SERVICE": "SERVICE", "NISSAN_SALES": "NISSAN_SALES", "BODY_AND_PAINT": "BODY_AND_PAINT", "CUSTOMER_SERVICE": "CUSTOMER_SERVICE", "ONLINE_SUPPORT": "ONLINE_SUPPORT", "CLOSED_SALES": "CLOSED_SALES", "CLOSED_DISTRIBUTOR": "CLOSED_DISTRIBUTOR", "FLEET": "FLEET", "SERVICE_LEAF": "SERVICE_LEAF", "VALUE_ADVANTAGE": "VALUE_ADVANTAGE", "NITROGEN": "NITROGEN", "SALES": "SALES", "SHOWROOM": "SHOWROOM", "TEST_DRIVE": "TEST_DRIVE", "GENERAL": "GENERAL", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
exports.ServiceLocationType = _runtime_1.py.enumType("ServiceLocationType", { "PICK_UP": "pick_up", "DROP_OFF": "drop_off", "UNKNOWN_VALUE": "UNKNOWN__" }, true);
/** Optional metric and imperial maintenance mileage values. */
class MaintenanceMileageInput {
    monthly_km;
    total_km;
    monthly_mile;
    total_mile;
    static __fields = [["monthly_km", graphql_input_1.UNSET], ["total_km", graphql_input_1.UNSET], ["monthly_mile", graphql_input_1.UNSET], ["total_mile", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, MaintenanceMileageInput, __args); Object.freeze(this); }
}
exports.MaintenanceMileageInput = MaintenanceMileageInput;
_runtime_1.py.classType(MaintenanceMileageInput);
/** Required customer phone and email for a service appointment. */
class ServiceCustomerInput {
    phone;
    email;
    static __fields = [["phone", _runtime_1.py.MISSING], ["email", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceCustomerInput, __args); Object.freeze(this); }
}
exports.ServiceCustomerInput = ServiceCustomerInput;
_runtime_1.py.classType(ServiceCustomerInput);
/** Optional nullable discount fields copied into an appointment operation. */
class ServiceDiscountInput {
    code;
    description;
    price;
    static __fields = [["code", graphql_input_1.UNSET], ["description", graphql_input_1.UNSET], ["price", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceDiscountInput, __args); Object.freeze(this); }
}
exports.ServiceDiscountInput = ServiceDiscountInput;
_runtime_1.py.classType(ServiceDiscountInput);
/** Optional nullable fields for one requested service operation. */
class ServiceOperationInput {
    operation_code_id;
    operation_code_description;
    customer_comments;
    description;
    $package;
    maintenance;
    validation;
    price;
    labor_hours;
    discounts;
    static __fields = [["operation_code_id", graphql_input_1.UNSET], ["operation_code_description", graphql_input_1.UNSET], ["customer_comments", graphql_input_1.UNSET], ["description", graphql_input_1.UNSET], ["package", graphql_input_1.UNSET], ["maintenance", graphql_input_1.UNSET], ["validation", graphql_input_1.UNSET], ["price", graphql_input_1.UNSET], ["labor_hours", graphql_input_1.UNSET], ["discounts", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceOperationInput, __args); Object.freeze(this); }
}
exports.ServiceOperationInput = ServiceOperationInput;
_runtime_1.py.classType(ServiceOperationInput);
/** Optional nullable advisor fields copied into an appointment. */
class ServiceAdvisorInput {
    advisor_id;
    name;
    job_title;
    email;
    image_url;
    static __fields = [["advisor_id", graphql_input_1.UNSET], ["name", graphql_input_1.UNSET], ["job_title", graphql_input_1.UNSET], ["email", graphql_input_1.UNSET], ["image_url", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceAdvisorInput, __args); Object.freeze(this); }
}
exports.ServiceAdvisorInput = ServiceAdvisorInput;
_runtime_1.py.classType(ServiceAdvisorInput);
/** Optional nullable appointment transportation preferences. */
class TransportationPreferencesInput {
    valet_required;
    loaner_required;
    pick_up_required;
    drop_off_required;
    reminders;
    static __fields = [["valet_required", graphql_input_1.UNSET], ["loaner_required", graphql_input_1.UNSET], ["pick_up_required", graphql_input_1.UNSET], ["drop_off_required", graphql_input_1.UNSET], ["reminders", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TransportationPreferencesInput, __args); Object.freeze(this); }
}
exports.TransportationPreferencesInput = TransportationPreferencesInput;
_runtime_1.py.classType(TransportationPreferencesInput);
/** Required transportation identity and optional preference details. */
class TransportationOptionInput {
    code;
    name;
    is_valet;
    is_loaner_available;
    comments;
    preferences;
    static __fields = [["code", _runtime_1.py.MISSING], ["name", _runtime_1.py.MISSING], ["is_valet", graphql_input_1.UNSET], ["is_loaner_available", graphql_input_1.UNSET], ["comments", graphql_input_1.UNSET], ["preferences", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, TransportationOptionInput, __args); Object.freeze(this); }
}
exports.TransportationOptionInput = TransportationOptionInput;
_runtime_1.py.classType(TransportationOptionInput);
/** Required appointment odometer value and unit. */
class ServiceOdometerInput {
    unit;
    value;
    static __fields = [["unit", _runtime_1.py.MISSING], ["value", _runtime_1.py.MISSING]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceOdometerInput, __args); Object.freeze(this); }
}
exports.ServiceOdometerInput = ServiceOdometerInput;
_runtime_1.py.classType(ServiceOdometerInput);
/** Complete service appointment input from the mobile schema. */
class ServiceAppointmentInput {
    vin;
    dealer_id;
    appointment_date;
    contact_methods;
    service_operations;
    odometer;
    drop_off_address;
    pick_up_address;
    transport;
    advisor;
    additional_comments;
    static __fields = [["vin", _runtime_1.py.MISSING], ["dealer_id", _runtime_1.py.MISSING], ["appointment_date", _runtime_1.py.MISSING], ["contact_methods", _runtime_1.py.MISSING], ["service_operations", _runtime_1.py.MISSING], ["odometer", _runtime_1.py.MISSING], ["drop_off_address", graphql_input_1.UNSET], ["pick_up_address", graphql_input_1.UNSET], ["transport", graphql_input_1.UNSET], ["advisor", graphql_input_1.UNSET], ["additional_comments", graphql_input_1.UNSET]];
    constructor(...__args) { if (__args[0] === _runtime_1.py.SKIP)
        return; _runtime_1.py.initData(this, ServiceAppointmentInput, __args); Object.freeze(this); }
}
exports.ServiceAppointmentInput = ServiceAppointmentInput;
_runtime_1.py.classType(ServiceAppointmentInput);
/** Serialize optional compact dealer-list filters. */
function all_dealers_variables(...__args) {
    let { "vin": vin, "page_size": page_size } = _runtime_1.py.bind(__args, ["vin", "page_size"], { "vin": graphql_input_1.UNSET, "page_size": graphql_input_1.UNSET }, [], null, null);
    /** Serialize optional compact dealer-list filters. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "pageSize": page_size }));
}
/** Serialize independently optional dealer search filters. */
function dealers_by_search_variables(...__args) {
    let serialized_service_code;
    let { "vin": vin, "service_code": service_code, "radius": radius, "latitude": latitude, "longitude": longitude } = _runtime_1.py.bind(__args, [], { "vin": graphql_input_1.UNSET, "service_code": graphql_input_1.UNSET, "radius": graphql_input_1.UNSET, "latitude": graphql_input_1.UNSET, "longitude": graphql_input_1.UNSET }, ["vin", "service_code", "radius", "latitude", "longitude"], null, null);
    /** Serialize independently optional dealer search filters. */
    serialized_service_code = service_code;
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [service_code, exports.ServiceCode], null))) {
        serialized_service_code = _runtime_1.py.call(graphql_input_1.serialize_enum, [service_code], null);
    }
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "serviceCode": serialized_service_code }, { "radius": radius }, { "latitude": latitude }, { "longitude": longitude }));
}
/** Serialize maintenance-visit generation variables. */
function maintenance_visits_variables(...__args) {
    let { "vin": vin, "mileage": mileage, "severity_id": severity_id, "past_visits": past_visits, "future_visits": future_visits } = _runtime_1.py.bind(__args, ["vin", "mileage", "severity_id", "past_visits", "future_visits"], {}, [], null, null);
    /** Serialize maintenance-visit generation variables. */
    return Object.assign({}, { ["vin"]: vin }, { ["mileage"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "monthlyKM": _runtime_1.py.attr(mileage, "monthly_km") }, { "totalKM": _runtime_1.py.attr(mileage, "total_km") }, { "monthlyMile": _runtime_1.py.attr(mileage, "monthly_mile") }, { "totalMile": _runtime_1.py.attr(mileage, "total_mile") })) }, { ["severityId"]: severity_id }, { ["pastVisits"]: past_visits }, { ["futureVisits"]: future_visits });
}
/** Serialize advisor and transportation-option lookup variables. */
function service_advisors_variables(...__args) {
    let { "dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "vin": vin } = _runtime_1.py.bind(__args, ["dealer_id", "service_operation_ids", "vin"], { "vin": graphql_input_1.UNSET }, [], null, null);
    /** Serialize advisor and transportation-option lookup variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "dealerId": dealer_id }, { "serviceOperationIds": _runtime_1.py.call(_runtime_1.py.list, [service_operation_ids], null) }, { "vin": vin }));
}
/** Serialize service appointment time-slot filters. */
function service_time_slots_variables(...__args) {
    let serialized_location_type;
    let { "dealer_id": dealer_id, "service_operation_ids": service_operation_ids, "start_date": start_date, "advisor_id": advisor_id, "transportation_code": transportation_code, "location_type": location_type, "vin": vin } = _runtime_1.py.bind(__args, ["dealer_id", "service_operation_ids", "start_date"], { "advisor_id": graphql_input_1.UNSET, "transportation_code": graphql_input_1.UNSET, "location_type": graphql_input_1.UNSET, "vin": graphql_input_1.UNSET }, ["advisor_id", "transportation_code", "location_type", "vin"], null, null);
    /** Serialize service appointment time-slot filters. */
    serialized_location_type = location_type;
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [location_type, exports.ServiceLocationType], null))) {
        serialized_location_type = _runtime_1.py.call(graphql_input_1.serialize_enum, [location_type], null);
    }
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "dealerId": dealer_id }, { "serviceOperationIds": _runtime_1.py.call(_runtime_1.py.list, [service_operation_ids], null) }, { "startDate": _runtime_1.py.call(graphql_input_1.serialize_datetime, [start_date], null) }, { "advisorId": advisor_id }, { "transportationCode": transportation_code }, { "locationType": serialized_location_type }, { "vin": vin }));
}
/** Serialize a vehicle and optional appointment date-time range. */
function service_appointments_variables(...__args) {
    let serialized_end, serialized_start;
    let { "vin": vin, "start_date": start_date, "end_date": end_date } = _runtime_1.py.bind(__args, ["vin", "start_date", "end_date"], { "start_date": graphql_input_1.UNSET, "end_date": graphql_input_1.UNSET }, [], null, null);
    /** Serialize a vehicle and optional appointment date-time range. */
    serialized_start = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [start_date, datetime], null)) ? _runtime_1.py.call(graphql_input_1.serialize_datetime, [start_date], null) : start_date);
    serialized_end = (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [end_date, datetime], null)) ? _runtime_1.py.call(graphql_input_1.serialize_datetime, [end_date], null) : end_date);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": vin }, { "startDate": serialized_start }, { "endDate": serialized_end }));
}
/** Serialize a complete appointment input. */
function service_appointment_variables(...__args) {
    let advisor, drop_off, operation, pick_up, transport;
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    /** Serialize a complete appointment input. */
    drop_off = _runtime_1.py.attr(config, "drop_off_address");
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "drop_off_address"), common_inputs_1.AddressInput], null))) {
        drop_off = _runtime_1.py.call(common_inputs_1.address_input, [_runtime_1.py.attr(config, "drop_off_address")], null);
    }
    pick_up = _runtime_1.py.attr(config, "pick_up_address");
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "pick_up_address"), common_inputs_1.AddressInput], null))) {
        pick_up = _runtime_1.py.call(common_inputs_1.address_input, [_runtime_1.py.attr(config, "pick_up_address")], null);
    }
    transport = _runtime_1.py.attr(config, "transport");
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "transport"), TransportationOptionInput], null))) {
        transport = _runtime_1.py.call(_transportation_option_input, [_runtime_1.py.attr(config, "transport")], null);
    }
    advisor = _runtime_1.py.attr(config, "advisor");
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "advisor"), ServiceAdvisorInput], null))) {
        advisor = _runtime_1.py.call(_service_advisor_input, [_runtime_1.py.attr(config, "advisor")], null);
    }
    return Object.assign({}, { ["appointment"]: _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "vin": _runtime_1.py.attr(config, "vin") }, { "dealerId": _runtime_1.py.attr(config, "dealer_id") }, { "appointmentDate": _runtime_1.py.call(graphql_input_1.serialize_datetime, [_runtime_1.py.attr(config, "appointment_date")], null) }, { "contactMethods": Object.assign({}, { ["phone"]: _runtime_1.py.attr(_runtime_1.py.attr(config, "contact_methods"), "phone") }, { ["email"]: _runtime_1.py.attr(_runtime_1.py.attr(config, "contact_methods"), "email") }) }, { "dropOffAddress": drop_off }, { "pickUpAddress": pick_up }, { "transport": transport }, { "serviceOperations": (() => { const __out = []; for (const operation of _runtime_1.py.iterable(_runtime_1.py.attr(config, "service_operations"))) {
                __out.push((_runtime_1.py.truth(((operation === null))) ? null : _runtime_1.py.call(_service_operation_input, [operation], null)));
            } return __out; })() }, { "advisor": advisor }, { "odometer": Object.assign({}, { ["unit"]: _runtime_1.py.call(graphql_input_1.serialize_enum, [_runtime_1.py.attr(_runtime_1.py.attr(config, "odometer"), "unit")], null) }, { ["value"]: _runtime_1.py.attr(_runtime_1.py.attr(config, "odometer"), "value") }) }, { "additionalComments": _runtime_1.py.attr(config, "additional_comments") })) });
}
/** Serialize an appointment ID and replacement appointment fields. */
function update_service_appointment_variables(...__args) {
    let { "appointment_id": appointment_id, "config": config } = _runtime_1.py.bind(__args, ["appointment_id", "config"], {}, [], null, null);
    /** Serialize an appointment ID and replacement appointment fields. */
    return Object.assign({}, { ["appointmentId"]: appointment_id }, _runtime_1.py.call(service_appointment_variables, [config], null));
}
/** Serialize service appointment cancellation variables. */
function cancel_service_appointment_variables(...__args) {
    let { "appointment_id": appointment_id, "dealer_id": dealer_id, "vin": vin } = _runtime_1.py.bind(__args, ["appointment_id", "dealer_id", "vin"], { "vin": graphql_input_1.UNSET }, [], null, null);
    /** Serialize service appointment cancellation variables. */
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "appointmentId": appointment_id }, { "dealerId": dealer_id }, { "vin": vin }));
}
/** Translated upstream _service_operation_input. */
function _service_operation_input(...__args) {
    let discount, discounts;
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    discounts = _runtime_1.py.attr(config, "discounts");
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "discounts"), _runtime_1.py.tuple], null))) {
        discounts = (() => { const __out = []; for (const discount of _runtime_1.py.iterable(_runtime_1.py.attr(config, "discounts"))) {
            __out.push((_runtime_1.py.truth(((discount === null))) ? null : _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "code": _runtime_1.py.attr(discount, "code") }, { "description": _runtime_1.py.attr(discount, "description") }, { "price": _runtime_1.py.attr(discount, "price") }))));
        } return __out; })();
    }
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "opCodeID": _runtime_1.py.attr(config, "operation_code_id") }, { "opCodeDescription": _runtime_1.py.attr(config, "operation_code_description") }, { "customerComments": _runtime_1.py.attr(config, "customer_comments") }, { "serviceOperationsDescription": _runtime_1.py.attr(config, "description") }, { "package": _runtime_1.py.attr(config, "package") }, { "maintenance": _runtime_1.py.attr(config, "maintenance") }, { "validation": _runtime_1.py.attr(config, "validation") }, { "price": _runtime_1.py.attr(config, "price") }, { "laborHours": _runtime_1.py.attr(config, "labor_hours") }, { "discounts": discounts }));
}
/** Translated upstream _service_advisor_input. */
function _service_advisor_input(...__args) {
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "advisorId": _runtime_1.py.attr(config, "advisor_id") }, { "name": _runtime_1.py.attr(config, "name") }, { "jobTitle": _runtime_1.py.attr(config, "job_title") }, { "email": _runtime_1.py.attr(config, "email") }, { "imageUrl": _runtime_1.py.attr(config, "image_url") }));
}
/** Translated upstream _transportation_option_input. */
function _transportation_option_input(...__args) {
    let preferences;
    let { "config": config } = _runtime_1.py.bind(__args, ["config"], {}, [], null, null);
    preferences = _runtime_1.py.attr(config, "preferences");
    if (_runtime_1.py.truth(_runtime_1.py.call(_runtime_1.py.isinstance, [_runtime_1.py.attr(config, "preferences"), TransportationPreferencesInput], null))) {
        preferences = _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "isValetRequired": _runtime_1.py.attr(_runtime_1.py.attr(config, "preferences"), "valet_required") }, { "isLoanerRequired": _runtime_1.py.attr(_runtime_1.py.attr(config, "preferences"), "loaner_required") }, { "isPickUpRequired": _runtime_1.py.attr(_runtime_1.py.attr(config, "preferences"), "pick_up_required") }, { "isDropOffRequired": _runtime_1.py.attr(_runtime_1.py.attr(config, "preferences"), "drop_off_required") }, { "reminders": _runtime_1.py.attr(_runtime_1.py.attr(config, "preferences"), "reminders") }));
    }
    return _runtime_1.py.call(graphql_input_1.optional_input_fields, [], Object.assign({}, { "code": _runtime_1.py.attr(config, "code") }, { "name": _runtime_1.py.attr(config, "name") }, { "isValet": _runtime_1.py.attr(config, "is_valet") }, { "isLoanerAvailable": _runtime_1.py.attr(config, "is_loaner_available") }, { "comments": _runtime_1.py.attr(config, "comments") }, { "preferences": preferences }));
}
//# sourceMappingURL=dealer_inputs.js.map