"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = void 0;
exports.dateTime = dateTime;
exports.dateOnly = dateOnly;
/** Date helpers preserving Nissan's explicit timezone offsets. */
const _runtime_1 = require("./_runtime");
exports.DateTime = _runtime_1.py.DateValue;
/** Parse an ISO timestamp with its original offset, or convert a JavaScript Date to UTC. */
function dateTime(value) { return _runtime_1.py.datetime.fromisoformat(value instanceof Date ? value.toISOString() : value); }
/** Parse an ISO calendar date without a time component. */
function dateOnly(value) { return _runtime_1.py.date.fromisoformat(value); }
//# sourceMappingURL=dates.js.map