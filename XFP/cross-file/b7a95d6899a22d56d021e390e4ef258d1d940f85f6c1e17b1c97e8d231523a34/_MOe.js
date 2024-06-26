export function Oe() {
  var e = {};
  void 0 !== navigator.deviceMemory &&
    (e.dm = navigator.deviceMemory.toString());
  var t = screen.orientation || screen.msOrientation || screen.mozOrientation;
  void 0 !== t && ((e.screenAngle = t.angle), (e.screenType = t.type));
  var n = [];
  if (void 0 !== navigator.mimeTypes && navigator.mimeTypes.length > 0)
    for (var i = 0; i < navigator.mimeTypes.length; i++)
      n.push(navigator.mimeTypes[i].type);
  e.mime = n;
  try {
    void 0 !== navigator.buildID && (e.buildID = navigator.buildID);
  } catch (t) {
    e.buildID = "err";
  }
  void 0 !== window.length && (e.wl = window.length),
    void 0 !== navigator.webdriver && (e.wd = navigator.webdriver),
    (void 0 === navigator.mozPay &&
      void 0 === navigator.mozContact &&
      void 0 === navigator.mozGetUserMedia &&
      void 0 === window.mozGetUserMedia &&
      void 0 === screen.mozLockOrientation) ||
      (e.moz = !0);
  var o = window.RTCPeerConnection || window.mozRTCPeerConnection;
  void 0 !== o && (e.rtc = o.toString());
  try {
    null[0]();
  } catch (t) {
    e.err = t.message;
  }
  var a = "";
  for (var r in window.screen) a += r;
  e.screenOrder = D(a).toFixed(2);
  for (
    var c = [
        "width",
        "height",
        "availWidth",
        "availHeight",
        "availTop",
        "availLeft",
        "colorDepth",
        "pixelDepth",
      ],
      s = "",
      u = 0;
    u < c.length;
    u++
  )
    void 0 !== Object.getOwnPropertyDescriptor(screen, c[u]) &&
      (s += "-" + u);
  e.screenOver = s;
  for (
    var d = ["platform", "vendor", "doNotTrack", "language", "onLine"],
      l = "",
      f = 0;
    f < d.length;
    f++
  )
    void 0 !== Object.getOwnPropertyDescriptor(navigator, d[f]) &&
      (l += "-" + f);
  return (e.navOver = l), e;
}