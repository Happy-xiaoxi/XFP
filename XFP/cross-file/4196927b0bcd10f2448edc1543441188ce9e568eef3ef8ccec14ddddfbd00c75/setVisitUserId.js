
import {setCookie} from './setCookie.js';
export function setVisitUserId(a) {
  setCookie("_tracker_distinct_id_", a, 100 * 365 * 24 * 60 * 60 * 1000);
}