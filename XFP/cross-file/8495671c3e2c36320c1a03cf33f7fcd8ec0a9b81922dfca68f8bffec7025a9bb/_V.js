export function V(e, n){
    return (function (e, n, t, r) {
      return new (t || (t = Promise))(function (i, o) {
        function a(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function c(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var n;
          e.done
            ? i(e.value)
            : ((n = e.value),
              n instanceof t
                ? n
                : new t(function (e) {
                    e(n);
                  })).then(a, c);
        }
        u((r = r.apply(e, n || [])).next());
      });
    })(void 0, void 0, void 0, function () {
      var t, r, i;
      return (function (e, n) {
        var t,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function c(c) {
          return function (u) {
            return (function (c) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), c[0] && (a = 0)), a; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (i =
                        2 & c[0]
                          ? r.return
                          : c[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, c[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                    case 0:
                    case 1:
                      i = c;
                      break;
                    case 4:
                      return a.label++, { value: c[1], done: !1 };
                    case 5:
                      a.label++, (r = c[1]), (c = [0]);
                      continue;
                    case 7:
                      (c = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = a.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== c[0] && 2 !== c[0])
                        )
                      ) {
                        a = 0;
                        continue;
                      }
                      if (
                        3 === c[0] &&
                        (!i || (c[1] > i[0] && c[1] < i[3]))
                      ) {
                        a.label = c[1];
                        break;
                      }
                      if (6 === c[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = c);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(c);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  c = n.call(e, a);
                } catch (e) {
                  (c = [6, e]), (r = 0);
                } finally {
                  t = i = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            })([c, u]);
          };
        }
      })(this, function (o) {
        var a, c;
        return (
          (t = { type: e, value: n }),
          (a = document.querySelector("#netlify-rum-container")),
          (r = {
            site_id:
              (null == a
                ? void 0
                : a.getAttribute("data-netlify-rum-site-id")) || "",
            branch:
              (null == a
                ? void 0
                : a.getAttribute("data-netlify-deploy-branch")) || "",
            context:
              (null == a
                ? void 0
                : a.getAttribute("data-netlify-deploy-context")) || "",
          }),
          (i = (function (e) {
            var n = e.browser,
              t = e.device,
              r = e.location,
              i = e.os,
              o = e.size,
              a = e.events;
            return U(U({}, e.netlifyData), {
              timestamp_ms: Date.now(),
              request: { hostname: r.hostname, path: r.pathname },
              client: { browser: n, os: i, size: o, device: t },
              events: a,
            });
          })({
            browser:
              ((c = window.navigator.userAgent),
              c.match(/chrome|chromium|crios/i)
                ? "Chrome"
                : c.match(/firefox|fxios/i)
                ? "Firefox"
                : c.match(/safari/i)
                ? "Safari"
                : c.match(/opr\//i)
                ? "Opera"
                : c.match(/edg/i)
                ? "Edge"
                : "Other"),
            device:
              Math.min(window.screen.availWidth, window.screen.availHeight) <
                768 || navigator.userAgent.indexOf("Mobi") > -1
                ? "mobile"
                : "desktop",
            location: N(),
            netlifyData: r,
            os: G(),
            size: J(),
            events: [t],
          })),
          (function (e) {
            K.push(e);
          })(i),
          [2]
        );
      });
    });
  }