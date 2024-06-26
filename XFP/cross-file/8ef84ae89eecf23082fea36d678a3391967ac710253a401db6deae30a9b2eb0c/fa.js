import { qa } from './qa.js';
export function fa(a) {
  try {
    a: {
      for (var b = 100; a && 0 < b;) {
        if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) {
          var c = a;
          break a;
        }
        a = a.parentNode;
        b--;
      }
      c = null;
    }
    if (c) {
      var d = c.protocol;
      "http:" !== d && "https:" !== d || qa(c, c.hostname);
    }
  } catch (e) {}
}