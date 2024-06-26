import { pa } from './pa.js';
import { e } from './e.js';
import { e } from './e.js';
export function Y(a, b, c, d) {
  function e(k) {
    k = pa(a, k);
    var m = k.charAt(k.length - 1);
    k && "&" !== m && (k += "&");
    return k + g;
  }
  d = void 0 === d ? !1 : d;
  var f = ka.exec(c);
  if (!f) return "";
  c = f[1];
  var h = f[2] || "";
  f = f[3] || "";
  var g = a + "=" + b;
  d ? f = "#" + e(f.substring(1)) : h = "?" + e(h.substring(1));
  return "" + c + h + f;
}