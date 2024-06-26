export function isEnumerateDevicesSupported() {
    return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;
}
