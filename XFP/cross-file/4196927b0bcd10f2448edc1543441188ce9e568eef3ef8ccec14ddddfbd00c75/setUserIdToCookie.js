import {setCookie} from './setCookie.js';
export function setUserIdToCookie(a) {
  setCookie("_tracker_user_id_", a, 100 * 365 * 24 * 60 * 60 * 1000);
}