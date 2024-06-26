import { Error } from './Error.js';
import { u } from './u.js';
import { q } from './q.js';
import { b } from './b.js';
import { b } from './b.js';
import { b } from './b.js';
import { b } from './b.js';
export function aa(a) {
  function b(k) {
    for (; d < a.length;) {
      var m = a.charAt(d++),
        l = v[m];
      if (null != l) return l;
      if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
    }
    return k;
  }
  r = r || u();
  v = v || q();
  for (var c = "", d = 0;;) {
    var e = b(-1),
      f = b(0),
      h = b(64),
      g = b(64);
    if (64 === g && -1 === e) return c;
    c += String.fromCharCode(e << 2 | f >> 4);
    64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != g && (c += String.fromCharCode(h << 6 & 192 | g)));
  }
}