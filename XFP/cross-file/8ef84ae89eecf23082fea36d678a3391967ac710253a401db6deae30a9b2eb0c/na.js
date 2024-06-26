import { decodeURIComponent } from './decodeURIComponent.js';
import { la } from './la.js';
import { y } from './y.js';
import { aa } from './aa.js';
import { y } from './y.js';
import { y } from './y.js';
export function na(a) {
  try {
    a: {
      if (a) {
        b: {
          for (var b = 0; 3 > b; ++b) {
            var c = ja.exec(a);
            if (c) {
              var d = c;
              break b;
            }
            a = decodeURIComponent(a);
          }
          d = void 0;
        }
        if (d && "1" === d[1]) {
          var e = d[2],
            f = d[3];
          b: {
            for (d = 0; 3 > d; ++d) if (e === la(f, d)) {
              var h = !0;
              break b;
            }
            h = !1;
          }
          if (h) {
            var g = f;
            break a;
          }
          y(7);
        }
      }
      g = void 0;
    }
    e = g;
    if (void 0 !== e) {
      g = {};
      var k = e ? e.split("*") : [];
      for (e = 0; e + 1 < k.length; e += 2) {
        var m = k[e],
          l = aa(k[e + 1]);
        g[m] = l;
      }
      y(6);
      return g;
    }
  } catch (t) {
    y(8);
  }
}