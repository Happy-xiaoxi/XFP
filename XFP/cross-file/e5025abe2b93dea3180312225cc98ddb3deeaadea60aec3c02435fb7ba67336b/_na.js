export function a(e) {
  var t = [window.screen.width, window.screen.height];
  return e.screen.detectScreenOrientation && t.sort().reverse(), t;
}