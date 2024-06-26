export function y(e) {
  return navigator.doNotTrack
    ? navigator.doNotTrack
    : navigator.msDoNotTrack
    ? navigator.msDoNotTrack
    : window.doNotTrack
    ? window.doNotTrack
    : e.NOT_AVAILABLE;
}