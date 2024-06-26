import { T } from "./_T.js";
import { E } from "./_E.js";
import { f } from "./_nf.js";
export function S(e, n){
    (n = n || {}),
      T(function () {
        var t,
          r = [1800, 3e3],
          i = E(),
          o = f("FCP"),
          a = d("paint", function (e) {
            e.forEach(function (e) {
              "first-contentful-paint" === e.name &&
                (a.disconnect(),
                e.startTime < i.firstHiddenTime &&
                  ((o.value = Math.max(e.startTime - s(), 0)),
                  o.entries.push(e),
                  t(!0)));
            });
          });
        a &&
          ((t = l(e, o, r, n.reportAllChanges)),
          c(function (i) {
            (o = f("FCP")),
              (t = l(e, o, r, n.reportAllChanges)),
              v(function () {
                (o.value = performance.now() - i.timeStamp), t(!0);
              });
          }));
      });
  }