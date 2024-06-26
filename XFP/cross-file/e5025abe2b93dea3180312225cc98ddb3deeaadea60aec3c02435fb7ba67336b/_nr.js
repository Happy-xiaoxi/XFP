export function r(e) {
  if (window.screen.availWidth && window.screen.availHeight) {
    var t = [window.screen.availHeight, window.screen.availWidth];
    return e.screen.detectScreenOrientation && t.sort().reverse(), t;
  }
  return e.NOT_AVAILABLE;
}