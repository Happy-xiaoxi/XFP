export function runMediaDeviceInfo(a) {
  var c = this,
    d = new Date().getTime();
  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
    try {
      navigator.mediaDevices.enumerateDevices().then(function (b) {
        c.experimentalFP.mediaDeviceInfo = [];
        for (var e = 0; e < b.length; e++)
          c.experimentalFP.mediaDeviceInfo.push({
            deviceId: b[e].deviceId,
            groupId: b[e].groupId,
            kind: b[e].kind,
            label: b[e].label,
          });
        c.experimentalFP.mediaDeviceInfo = c.sortByProperty(
          c.experimentalFP.mediaDeviceInfo,
          "kind",
          "desc"
        );
        c.clientInfoTimingData.mediaDeviceInfoTime =
          new Date().getTime() - d;
        e = c.experimentalFP;
        for (var f = [], k = 0; k < b.length; k++) {
          for (var n = !1, m = 0; m < f.length; m++)
            f[m].type === b[k].kind && ((n = !0), f[m].count++);
          n || f.push({ type: b[k].kind, count: 1 });
        }
        b = c.sortByProperty(f, "type", "desc");
        e.mediaDeviceInfoCount = b;
        a();
      });
    } catch (f) {
      a(), this.sendScriptError(f);
    }
}