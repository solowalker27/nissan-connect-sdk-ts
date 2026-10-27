// @ts-nocheck — generated implementation uses a dynamic keyword adapter; public overloads are checked by consumer tests.

// AUTO-GENERATED from bvdcode/nissan-connect-sdk @ 828bde6. MIT, Copyright (c) 2026 Vadim Belov.

import { py as $ } from "./_runtime";

const Awaitable = $.Awaitable;
const Callable = $.Callable;

const Protocol = $.Protocol;

import { Tokens } from "./models";
export { Tokens };

import { RequestProof } from "./request_proof";
export { RequestProof };

export type TokenListener = (tokens: Tokens) => void | Promise<void>; 

/** Return request verification values, refreshing them when requested. */
export type RequestProofProvider = (force_refresh: boolean) => Promise<RequestProof>;
