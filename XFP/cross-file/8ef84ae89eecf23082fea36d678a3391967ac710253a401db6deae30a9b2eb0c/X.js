import { String } from './String.js';
import { u } from './u.js';
import { q } from './q.js';
import { la } from './la.js';
export function X(a) {
  var b = [],
    c;
  for (c in a) if (a.hasOwnProperty(c)) {
    var d = a[c];
    if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
      b.push(c);
      var e = b,
        f = e.push;
      d = String(d);
      r = r || u();
      v = v || q();
      for (var h = [], g = 0; g < d.length; g += 3) {
        var k = g + 1 < d.length,
          m = g + 2 < d.length,
          l = d.charCodeAt(g),
          t = k ? d.charCodeAt(g + 1) : 0,
          x = m ? d.charCodeAt(g + 2) : 0,
          ra = l >> 2;
        l = (l & 3) << 4 | t >> 4;
        t = (t & 15) << 2 | x >> 6;
        x &= 63;
        m || (x = 64, k || (t = 64));
        h.push(r[ra], r[l], r[t], r[x]);
      }
      f.call(e, h.join(""));
    }
  }
  a = b.join("*");
  return ["1", la(a), a].join("*");
}