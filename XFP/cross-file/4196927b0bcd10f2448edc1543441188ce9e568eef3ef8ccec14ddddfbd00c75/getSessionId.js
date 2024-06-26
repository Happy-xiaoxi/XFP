import {getCookie} from './getCookie.js';

export function getSessionId() {
  return getCookie("_tracker_session_id_");
}