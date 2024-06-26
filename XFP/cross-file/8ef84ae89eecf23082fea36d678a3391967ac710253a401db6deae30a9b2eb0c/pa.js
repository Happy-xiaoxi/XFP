import { W } from './W.js';
export function pa(a, b) {
  if (a = W(a).exec(b)) {
    var c = a[2],
      d = a[4];
    b = a[1];
    d && (b = b + c + d);
  }
  return b;
}