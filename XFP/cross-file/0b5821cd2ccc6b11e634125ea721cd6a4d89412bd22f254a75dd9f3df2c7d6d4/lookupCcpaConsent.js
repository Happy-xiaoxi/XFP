export function lookupCcpaConsent(n, t) {
    var e,
      o = "getUSPData",
      a = { uspData: "", success: !1 };
    try {
      e = window.__uspapi || window.top.__uspapi;
    } catch (n) {
      t(n);
    }
    if ("function" == typeof e)
      e(o, 1, function (e, o) {
        (a.uspData = (e && e.uspString) || ""), (a.success = o), o ? n(a) : t();
      });
    else {
      for (var r, c = window, i = new Date().getTime(); !r; ) {
        try {
          c.frames.__uspapiLocator && (r = c);
        } catch (n) {
          return void t(n);
        }
        if (c === window.top) return void t();
        c = c.parent;
      }
      var s = {
        __uspapiCall: { command: o, version: 1, parameter: null, callId: i },
      };
      r.postMessage(s, "*"),
        window.addEventListener(
          "message",
          function (e) {
            e.data &&
              e.data.__uspapiReturn &&
              e.data.__uspapiReturn.callId === i &&
              (e.data.__uspapiReturn.success
                ? n(e.data.__uspapiReturn.returnValue)
                : t());
          },
          !1
        );
    }
  }