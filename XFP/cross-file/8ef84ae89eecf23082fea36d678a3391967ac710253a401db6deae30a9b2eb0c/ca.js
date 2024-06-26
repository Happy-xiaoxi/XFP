import { ba } from './ba.js';
import { b } from './b.js';
export function ca(a, b) {
  if (a && ba(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
}