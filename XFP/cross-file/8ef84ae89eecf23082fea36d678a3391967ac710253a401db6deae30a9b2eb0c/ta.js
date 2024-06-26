import { Z } from './Z.js';
import { sa } from './sa.js';
import { Y } from './Y.js';
export function ta(a, b, c, d) {
  if (c.tagName) {
    if ("a" === c.tagName.toLowerCase()) return Z(a, b, c, d);
    if ("form" === c.tagName.toLowerCase()) return sa(a, b, c);
  }
  if ("string" == typeof c) return Y(a, b, c, d);
}