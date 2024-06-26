export function K() {
  if (window && window.screen) {
    var e = window.screen;
    return {
      colorDepth: e.colorDepth,
      pixelDepth: e.pixelDepth,
      height: e.height,
      width: e.width,
      availHeight: e.availHeight,
      availWidth: e.availWidth,
    };
  }
}