/** Date helpers preserving Nissan's explicit timezone offsets. */
import {py} from './_runtime';
export const DateTime=py.DateValue;
export type DateTime=py.DateValue;
/** Parse an ISO timestamp with its original offset, or convert a JavaScript Date to UTC. */
export function dateTime(value:string|Date):DateTime {return py.datetime.fromisoformat(value instanceof Date?value.toISOString():value);}
/** Parse an ISO calendar date without a time component. */
export function dateOnly(value:string):DateTime {return py.date.fromisoformat(value);}
