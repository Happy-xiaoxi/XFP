export function getDeviceMemory() {
  return navigator.deviceMemory ? navigator.deviceMemory : 0;
}