import { V } from './V.js';
import { V } from './V.js';
import { V } from './V.js';
import { A } from './A.js';
import { X } from './X.js';
import { sa } from './sa.js';
import { Z } from './Z.js';
import { A } from './A.js';
import { X } from './X.js';
import { Z } from './Z.js';
import { ta } from './ta.js';
export function qa(a, b) {
  var c = "FORM" === (a.tagName || "").toUpperCase(),
    d = V(b, 1, c),
    e = V(b, 2, c);
  b = V(b, 3, c);
  A(d) && (d = X(d), c ? sa("_gl", d, a) : Z("_gl", d, a, !1));
  !c && A(e) && (c = X(e), Z("_gl", c, a, !0));
  for (var f in b) b.hasOwnProperty(f) && ta(f, b[f], a);
}