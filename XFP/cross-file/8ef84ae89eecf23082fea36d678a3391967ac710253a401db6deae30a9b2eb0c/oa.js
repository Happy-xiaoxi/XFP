import { pa } from './pa.js';
import { W } from './W.js';
import { Q } from './Q.js';
import { d } from './d.js';
import { d } from './d.js';
export function oa(a, b, c) {
  function d(f, h) {
    f = pa("_gl", f);
    f.length && (f = h + f);
    return f;
  }
  if (H && H.replaceState) {
    var e = W("_gl");
    if (e.test(b) || e.test(c)) a = Q(a, "path"), b = d(b, "?"), c = d(c, "#"), H.replaceState({}, void 0, "" + a + b + c);
  }
}