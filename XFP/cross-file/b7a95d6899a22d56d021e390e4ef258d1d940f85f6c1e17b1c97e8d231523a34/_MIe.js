export function Ie(e) {
  var t,
    n,
    i = [],
    o = {
      pdf: [
        "AcroPDF.PDF",
        "AcroPDF.PDF.1",
        "PDF.PdfCtrl",
        "PDF.PdfCtrl.5",
        "PDF.PdfCtrl.1",
      ],
      flash: ["ShockwaveFlash.ShockwaveFlash"],
      realplayer: [
        "rmocx.RealPlayer G2 Control",
        "rmocx.RealPlayer G2 Control.1",
        "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
        "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
        "RealPlayer",
      ],
      shockwave: ["SWCtl.SWCtl"],
      wmplayer: ["WMPlayer.OCX"],
    },
    a = function (e) {
      for (var t, n = [], i = 0; i < e.length; i += 1)
        "function" == typeof e.item &&
          "object" === c(e.item(i)) &&
          ((t = { t: e.item(i).type, s: e.item(i).suffixes }), n.push(t));
      return n;
    },
    r = function(e, t) {
      var n;
      try {
        "flash" === t
          ? (n = (n = e.GetVariable("$version"))
              .split(" ")[1]
              .replace(/,/g, "."))
          : "realplayer" === t
          ? (n = e.getVersionInfo())
          : "wmplayer" === t
          ? (n = e.versionInfo)
          : "pdf" === t
          ? (n = e.GetVersions().split(",")[0].split("=")[1])
          : "shockwave" === t && (n = e.ShockwaveVersion(""));
      } catch (e) {}
      return n;
    },
    s = function (t, n) {
      var i, o, a, c, s;
      for (i = 0; i < t.length; i += 1)
        try {
          if ((o = new window.ActiveXObject(t[i]))) {
            (s = e.timing.iePlugin.length),
              (e.timing.iePlugin[s] = {}),
              (e.timing.iePlugin[s].name = n),
              (e.timing.iePlugin[s].start = Date.now()),
              (c = r(o, n)),
              (a = { n: n, fn: t[i], v: c });
            break;
          }
          e.timing.iePlugin[i].end = Date.now();
        } catch (e) {}
      return a;
    },
    u = Date.now(),
    d = {};
  if (void 0 !== navigator.plugins && navigator.plugins.length > 0)
    for (var l = 0; l < navigator.plugins.length; l += 1) {
      var f = navigator.plugins[l];
      (d = {
        mT: a(navigator.plugins[l]),
        n: null !== (t = f.name) && void 0 !== t ? t : "",
        v: null !== (n = f.version) && void 0 !== n ? n : "",
        fn: f.filename,
        d: f.description,
      }),
        i.push(d);
    }
  else if (void 0 !== window.ActiveXObject) {
    for (var m in ((e.timing.iePlugin = []), o))
      Object.prototype.hasOwnProperty.call(o, m) &&
        (d = s(o[m], m)) &&
        i.push(d);
    navigator.javaEnabled() && i.push({ n: "Java", fn: "Java" });
  }
  return (
    i.sort(function (e, t) {
      var n,
        i,
        o =
          null === (n = null == e ? void 0 : e.n) || void 0 === n
            ? void 0
            : n.toLowerCase(),
        a =
          null === (i = null == t ? void 0 : t.n) || void 0 === i
            ? void 0
            : i.toLowerCase();
      return o < a ? -1 : o > a ? 1 : 0;
    }),
    (e.timing.pluginsTiming = (Date.now() - u).toFixed(2)),
    i
  );
}