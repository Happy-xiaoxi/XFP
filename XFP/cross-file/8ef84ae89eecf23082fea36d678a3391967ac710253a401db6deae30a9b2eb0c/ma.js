import { R } from './R.js';
import { decodeURIComponent } from './decodeURIComponent.js';
import { na } from './na.js';
import { Q } from './Q.js';
import { W } from './W.js';
import { na } from './na.js';
import { oa } from './oa.js';
export function ma(a) {
  return function (b) {
    var c = R(G.location.href),
      d = c.search.replace("?", "");
    a: {
      var e = d.split("&");
      for (var f = 0; f < e.length; f++) {
        var h = e[f].split("=");
        if ("_gl" === decodeURIComponent(h[0]).replace(/\+/g, " ")) {
          e = h.slice(1).join("=");
          break a;
        }
      }
      e = void 0;
    }
    b.query = na(e || "") || {};
    e = Q(c, "fragment");
    f = e.match(W("_gl"));
    b.fragment = na(f && f[3] || "") || {};
    a && oa(c, d, e);
  };
}