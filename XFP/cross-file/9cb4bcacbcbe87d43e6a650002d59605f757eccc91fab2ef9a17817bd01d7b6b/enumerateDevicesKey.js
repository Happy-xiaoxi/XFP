

export function enumerateDevicesKey(done, options) {
    if (!isEnumerateDevicesSupported()) {
        return done(options.NOT_AVAILABLE);
    }
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        done(devices.map(function (device) {
            return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label;
        }));
    })['catch'](function (error) {
        done(error);
    });
}
