import { Q } from './Q.js';
import { R } from './R.js';
import { qa } from './qa.js';
export function ha(a) {
  try {
    if (a.action) {
      var b = Q(R(a.action), "host");
      qa(a, b);
    }
  } catch (c) {}
}