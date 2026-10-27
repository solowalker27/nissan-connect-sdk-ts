"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NissanClient = void 0;
/** Native Node.js entry point; accepts the original session argument or a single options object. */
const client_1 = require("./client");
const http_1 = require("./http");
const _runtime_1 = require("./_runtime");
class NissanClient extends client_1.NissanClient {
    ownedSession;
    constructor(sessionOrOptions = {}, options = {}) {
        const isSession = typeof sessionOrOptions.post === 'function';
        const session = isSession ? sessionOrOptions : new http_1.FetchSession();
        // Translated tests and generated internal calls already carry a keyword marker.
        const opts = isSession ? options : sessionOrOptions;
        super(session, _runtime_1.py.isKw(opts) ? opts : _runtime_1.py.kw(opts));
        this.ownedSession = isSession ? null : session;
    }
    /** Abort requests made by the default session; supplied sessions remain caller-owned. */
    close() { this.ownedSession?.close(); }
}
exports.NissanClient = NissanClient;
//# sourceMappingURL=native-client.js.map