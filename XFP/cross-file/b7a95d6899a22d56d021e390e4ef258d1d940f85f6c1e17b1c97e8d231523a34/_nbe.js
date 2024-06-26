export function be(i) {
  var r,
    c,
    u,
    d = i.configuration.trt,
    l = {
      tz: -6e4 * new Date().getTimezoneOffset(),
      tzName: Z.determine().name(),
      dst: !0,
    },
    f = {
      trt: d,
      connectionData: J(),
      navigator: q(i),
      ch: i.configuration.ch,
      screen: K(),
      window: Q(),
      referer: i.configuration.referer,
      URL: i.configuration.u || i.configuration.url,
      rvr: n.FN_RELEASE_VERSION,
      activeXDefined: void 0 !== window.ActiveXObject,
      flashVersion: $(),
      fp: i.configuration.fp,
      lst:
        ((r = {
          ddiLst:
            null === (c = null == i ? void 0 : i.configuration) ||
            void 0 === c
              ? void 0
              : c.sc,
        }),
        s(r, o, W(i, o)),
        s(r, a, W(i, a)),
        r),
      tz: l.tz,
      tzName: l.tzName,
      dst: l.dst,
    },
    m = (function (e) {
      var t,
        n,
        i,
        o,
        a,
        r,
        c,
        s,
        u = Date.now();
      return {
        time: u,
        pt1: {
          i: (e.timing.iframeLoadEnd - e.timing.iframeLoadStart).toFixed(2),
          pp1: (u - e.timing.start).toFixed(2),
          cd1: (u - e.timing.p1Start).toFixed(2),
          tb: ee(e),
          sf:
            ((t = [0, 0, 0, 0]),
            (n = 0),
            (i = 1),
            (o = 2),
            (a = 3),
            (r = 4),
            (c = 5),
            (s = 6),
            (function () {
              try {
                window.navigator.userAgent
                  .toLowerCase()
                  .indexOf(
                    decodeURIComponent("%70%68%61%6E%74%6F%6D%6A%73")
                  ) > -1
                  ? (t[0] = i)
                  : (t[0] = n);
              } catch (e) {
                t[0] = n;
              }
            })(),
            (function () {
              try {
                if (
                  window.phantom &&
                  "string" == typeof window.phantom.libraryPath &&
                  "function" == typeof window.phantom.injectJs
                )
                  return void (t[1] = o);
                if (window.Buffer) return void (t[1] = a);
                if (window.emit) return void (t[1] = r);
                if (window.spawn) return void (t[1] = c);
                if (window.doAutomation || window.domAutomationController)
                  return void (t[1] = s);
                t[1] = n;
              } catch (e) {
                t[1] = n;
              }
            })(),
            (function () {
              try {
                if (0 === window.outerWidth && 0 === window.outerHeight)
                  return void (t[2] = i);
                t[2] = n;
              } catch (e) {
                t[2] = n;
              }
            })(),
            (function () {
              try {
                if (window.document.$cdc_asdjflasutopfhvcZLmcfl_.cache_)
                  return void (t[3] = i);
              } catch (e) {}
              try {
                if (
                  window.document.documentElement.getAttribute(
                    decodeURIComponent("%77%65%62%64%72%69%76%65%72")
                  )
                )
                  return void (t[3] = i);
              } catch (e) {}
              try {
                if (
                  decodeURIComponent(
                    "%5F%53%65%6C%65%6E%69%75%6D%5F%49%44%45%5F%52%65%63%6F%72%64%65%72"
                  ) in window
                )
                  return void (t[3] = i);
              } catch (e) {}
              try {
                if (
                  decodeURIComponent(
                    "%5F%5F%77%65%62%64%72%69%76%65%72%5F%73%63%72%69%70%74%5F%66%6E"
                  ) in document
                )
                  return void (t[3] = i);
              } catch (e) {}
              t[3] = n;
            })(),
            t.join("")),
        },
      };
    })(i);
  (f.time = m.time), (f.pt1 = m.pt1);
  try {
    var v = (function (e, t) {
      var n,
        i = "",
        o = "",
        a = [];
      if (e.navigator && e.navigator.userAgent) {
        var r = e.navigator.userAgent;
        (i = Se(i, r)), (n = we(1, 5));
        for (
          var c = "",
            s = r.substring(0, r.length <= 100 ? r.length : 100),
            u = 0;
          u <= s.length / n;
          u++
        )
          c += s.substring(n * u - 1, n * u);
        var d = ye("ua", c, o, a);
        (a = d.asyncChecksumKeys), (o = d.asyncNewChecksumString);
      }
      if (e.screen) {
        var l = e.screen;
        if (B(l.colorDepth)) {
          i = Se(i, l.colorDepth.toString());
          var f = ye("colorDepth", l.colorDepth.toString(), o, a);
          (a = f.asyncChecksumKeys), (o = f.asyncNewChecksumString);
        }
        if (B(l.width)) {
          i = Se(i, l.width.toString());
          var m = ye("width", l.width.toString(), o, a);
          (a = m.asyncChecksumKeys), (o = m.asyncNewChecksumString);
        }
      }
      if (e.tzName) {
        i = Se(i, e.tzName);
        var v = ye("tz", e.tz.toString(), o, a);
        (a = v.asyncChecksumKeys), (o = v.asyncNewChecksumString);
      }
      if (e.time) {
        i = Se(i, e.time.toString());
        var p = ye("time", e.time.toString(), o, a);
        (a = p.asyncChecksumKeys), (o = p.asyncNewChecksumString);
      }
      return { ph1: Ae(i), asynchk: Ee(t, a, o, n) };
    })(f, i);
    (f.pt1.ph1 = v.ph1), (f.asynchk = v.asynchk);
  } catch (n) {
    S(n, i, t.gCF, e.P1);
  }
  try {
    f.hlb =
      ((u = {}),
      void 0 !== navigator.webdriver && (u.wd = navigator.webdriver),
      (u.chromeWSRT = Boolean(
        window.chrome && (window.chrome.webstore || window.chrome.runtime)
      )),
      void 0 !== navigator.plugins && (u.plgSize = navigator.plugins.length),
      void 0 !== navigator.languages &&
        (u.lgSize = navigator.languages.length),
      void 0 !== navigator.connection &&
        navigator.connection.rtt &&
        (u.rtt = String(navigator.connection.rtt)),
      u);
  } catch (n) {
    S(n, i, t.sHA, e.P1);
  }
  return i.configuration.wv && (f.wv = !0), f;
}