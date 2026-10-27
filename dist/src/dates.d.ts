/** Date helpers preserving Nissan's explicit timezone offsets. */
import { py } from './_runtime';
export declare const DateTime: typeof py.DateValue;
export type DateTime = py.DateValue;
/** Parse an ISO timestamp with its original offset, or convert a JavaScript Date to UTC. */
export declare function dateTime(value: string | Date): DateTime;
/** Parse an ISO calendar date without a time component. */
export declare function dateOnly(value: string): DateTime;
