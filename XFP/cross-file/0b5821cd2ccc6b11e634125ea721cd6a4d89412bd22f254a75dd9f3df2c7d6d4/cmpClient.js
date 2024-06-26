export function cmpClient(
    {
      apiName: n,
      apiVersion: t,
      apiArgs: e = ["command", "callback", "parameter", "version"],
      callbackArgs: o = ["returnValue", "success"],
    },
    a = window
  ) {
    const r = {},
      c = `${n}Call`,
      i = `${n}Return`;
    const [s, p] = (function () {
      let t,
        e = a,
        o = !1;
      for (; null != e; ) {
        try {
          if ("function" == typeof e[n]) {
            (t = e), (o = !0);
            break;
          }
        } catch (n) {}
        try {
          if (e.frames[`${n}Locator`]) {
            t = e;
            break;
          }
        } catch (n) {}
        if (e === a.top) break;
        e = e.parent;
      }
      return [t, o];
    })();
    if (!s) return;
    function u(n) {
      return (n = Object.assign({ version: t }, n)), e.map((t) => [t, n[t]]);
    }
    function l(n, t, e, o) {
      return function (a, r) {
        o && o();
        const c = null == r || r ? t : e;
        if ("function" == typeof n) return c(), n.apply(this, arguments);
        c(a);
      };
    }
    let f;
    return (
      p
        ? (f = function (t = {}) {
            return new Promise((e, o) => {
              const a = s[n](
                ...u({ ...t, callback: t.callback && l(t.callback, e, o) }).map(
                  ([n, t]) => t
                )
              );
              null == t.callback && e(a);
            });
          })
        : (a.addEventListener(
            "message",
            function (n) {
              const t =
                "string" == typeof n.data && n.data.includes(i)
                  ? JSON.parse(n.data)
                  : n.data;
              if (t?.[i]?.callId) {
                const n = t[i];
                r.hasOwnProperty(n.callId) &&
                  r[n.callId](...o.map((t) => n[t]));
              }
            },
            !1
          ),
          (f = function (n) {
            return new Promise((t, e) => {
              const o = Math.random().toString(),
                a = {
                  [c]: {
                    ...Object.fromEntries(
                      u(n).filter(([n]) => "callback" !== n)
                    ),
                    callId: o,
                  },
                };
              (r[o] = l(
                n?.callback,
                t,
                e,
                null == n?.callback &&
                  (() => {
                    delete r[o];
                  })
              )),
                s.postMessage(a, "*");
            });
          })),
      (f.isDirect = p),
      f
    );
  }