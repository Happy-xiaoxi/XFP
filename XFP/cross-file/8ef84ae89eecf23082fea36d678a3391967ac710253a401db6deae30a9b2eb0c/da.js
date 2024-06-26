import { M } from './M.js';
import { ca } from './ca.js';
export function da(a) {
  var b = M();
  b.pending || (b.pending = []);
  ca(b.pending, function (c) {
    return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination;
  }) || b.pending.push({
    target: a,
    onLoad: void 0
  });
}