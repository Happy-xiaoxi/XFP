// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
var enumerateDevicesKey = function (done, options) {
  if (!isEnumerateDevicesSupported()) {
    return done(options.NOT_AVAILABLE)
  }
  navigator.mediaDevices.enumerateDevices().then(function (devices) {
    done(devices.map(function (device) {
      return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
    }))
  }).catch(function (error) {
    done(error)
  })
}

var isEnumerateDevicesSupported = function () {
  return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
}

export {
  enumerateDevicesKey,
}
