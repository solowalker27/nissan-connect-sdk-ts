// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "../src/_runtime";



const hashlib = $.hashlib;

import { operations } from "../src/index";

/** Translated upstream test_full_operation_catalog_has_exact_hash_identifiers. */
export function test_full_operation_catalog_has_exact_hash_identifiers(...__args: any[]): any {
let _, constant, document, documents, operation_id, value;
let {} = $.bind(__args, [], {}, [], null, null);
documents = [];
for ([constant, value] of $.iterable($.call($.attr($.call($.vars, [operations], null), "items"), [], null))) {
if ($.truth($.and(() => $.call($.isinstance, [value, $.str], null), () => $.call($.attr(value, "startswith"), [["query ", "mutation "]], null)))) {
$.call($.attr(documents, "append"), [[constant, value]], null);
}
}
$.assert(($.eq($.call($.len, [documents], null), 285)), "test_operation_catalog.py:14: len(documents) == 285");
$.assert(($.eq($.call($.sum, [(() => { const __out: any = []; for (const [_, document] of $.iterable(documents)) { __out.push($.call($.attr(document, "startswith"), ["query "], null)); } return __out; })()], null), 129)), "test_operation_catalog.py:15: sum((document.startswith('query ') for _, document in documents)) == 129");
$.assert(($.eq($.call($.sum, [(() => { const __out: any = []; for (const [_, document] of $.iterable(documents)) { __out.push($.call($.attr(document, "startswith"), ["mutation "], null)); } return __out; })()], null), 156)), "test_operation_catalog.py:16: sum((document.startswith('mutation ') for _, document in documents)) == 156");
for ([constant, document] of $.iterable(documents)) {
operation_id = $.call($.getattr, [operations, ($.str(constant) + "_OPERATION_ID")], null);
$.assert(($.eq($.call($.attr($.call($.attr(hashlib, "sha256"), [$.call($.attr(document, "encode"), [], null)], null), "hexdigest"), [], null), operation_id)), "test_operation_catalog.py:19: hashlib.sha256(document.encode()).hexdigest() == operation_id");
}
}

$.register("test_operation_catalog.py::test_full_operation_catalog_has_exact_hash_identifiers", test_full_operation_catalog_has_exact_hash_identifiers, []);
