import {getCookie} from './getCookie.js';
export function getCanvasId() {
  let canvasId = getCookie("canvasId");
  if (canvasId) {
    return canvasId;
  } else {
    if (!navigator.cookieEnabled) {
      return "cookieDisabled";
    } else {
      return "has_not_generated";
    }
  }
}