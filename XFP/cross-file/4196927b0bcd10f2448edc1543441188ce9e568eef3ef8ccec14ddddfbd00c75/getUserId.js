import {getTrackerData} from './getTrackerData.js';
import {getCookie} from './getCookie.js';
export function getUserId() {
  return getTrackerData("user_id") || getCookie("eqxiu_user_id");
}