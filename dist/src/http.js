"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchSession = void 0;
/** Native Node.js fetch transport. A session can be closed to abort all in-flight requests. */
const _runtime_1 = require("./_runtime");
class FetchSession {
    fetchImpl;
    pending = new Set();
    closed = false;
    constructor(fetchImpl = globalThis.fetch) {
        this.fetchImpl = fetchImpl;
    }
    async post(url, options = {}) {
        if (this.closed)
            throw new _runtime_1.py.ClientError('Session is closed');
        const controller = new AbortController();
        this.pending.add(controller);
        const external = _runtime_1.py.currentSignal();
        const signal = external ? AbortSignal.any([controller.signal, external]) : controller.signal;
        const timer = setTimeout(() => controller.abort(), (options.timeout?.total ?? 30) * 1000);
        const done = () => { clearTimeout(timer); this.pending.delete(controller); };
        const headers = new Headers(options.headers ?? {});
        let body;
        if (options.data != null) {
            headers.set('Content-Type', 'application/x-www-form-urlencoded');
            body = new URLSearchParams(options.data).toString();
        }
        else if (options.json != null) {
            headers.set('Content-Type', 'application/json');
            body = JSON.stringify(options.json);
        }
        try {
            const response = await this.fetchImpl(url, { method: 'POST', headers, body, signal, redirect: 'error' });
            return { status: response.status, json: async () => {
                    try {
                        let text;
                        try {
                            text = await response.text();
                        }
                        catch {
                            throw new _runtime_1.py.ClientError('Unable to read Nissan response');
                        }
                        try {
                            return JSON.parse(text);
                        }
                        catch {
                            throw new _runtime_1.py.ValueError('Invalid JSON response');
                        }
                    }
                    finally {
                        done();
                    }
                } };
        }
        catch {
            done();
            throw new _runtime_1.py.ClientError('Unable to reach Nissan service');
        }
    }
    close() { this.closed = true; for (const controller of this.pending)
        controller.abort(); this.pending.clear(); }
}
exports.FetchSession = FetchSession;
//# sourceMappingURL=http.js.map