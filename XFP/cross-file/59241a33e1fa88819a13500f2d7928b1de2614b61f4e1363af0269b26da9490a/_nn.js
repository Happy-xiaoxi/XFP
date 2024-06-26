export function n() {
  return window.upscope___currentLocation
    ? window.upscope___currentLocation()
    : location;
}