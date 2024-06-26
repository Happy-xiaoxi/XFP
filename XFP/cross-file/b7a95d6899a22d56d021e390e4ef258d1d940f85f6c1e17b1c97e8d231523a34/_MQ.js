export function Q() {
  if (window)
    return {
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      devicePixelRatio: window.devicePixelRatio,
    };
}