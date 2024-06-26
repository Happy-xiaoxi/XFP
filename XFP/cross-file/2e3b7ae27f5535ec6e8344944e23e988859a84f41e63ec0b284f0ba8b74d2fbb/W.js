import { G } from './K.js'
export function W() {
  if (G()) return !0;
  var t = navigator.userAgent;
  return (
    (function (t) {
      if (/Chrom[[e|ium]+/i.test(t)) {
        var e = t.match(/Chrom[^ /]+\/(\d+)/i),
          n = e && e[1] && y(e[1], 10);
        return !!n && (n < 51 || n >= 67);
      }
      return !1;
    })(t) ||
    (function (t) {
      var e = /iP.+;\sCPU\s.*OS\s12/i.test(t),
        n = /Mac\sOS\sX\s10_14/i.test(t),
        r =
          /^Mozilla\/[.\d].*\(Macintosh;.*Mac OS X\s*(?:\S.*)?\) AppleWebKit\/[.\d].*\(KHTML, like Gecko.*\)/i.test(
            t
          );
      return (K() || r) && !e && !n;
    })(t) ||
    (function (t) {
      if (/UCBrowser/i.test(t)) {
        var e = t.match(/UCBrowser\/(\d+)\.(\d+)\.(\d+)/i);
        if (e && e.length >= 4) {
          var n = y(e[1], 10),
            r = y(e[2], 10),
            o = y(e[3], 10);
          return !(
            n < 12 ||
            (12 === n && r < 13) ||
            (12 === n && 13 === r && o < 2)
          );
        }
      }
      return !1;
    })(t)
  );
}