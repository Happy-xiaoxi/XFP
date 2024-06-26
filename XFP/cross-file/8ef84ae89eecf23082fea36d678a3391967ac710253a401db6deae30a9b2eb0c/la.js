import { Array } from './Array.js';
export function la(a, b) {
  a = [J.userAgent, new Date().getTimezoneOffset(), J.userLanguage || J.language, Math.floor(new Date(Date.now()).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
  if (!(b = S)) {
    b = Array(256);
    for (var c = 0; 256 > c; c++) {
      for (var d = c, e = 0; 8 > e; e++) d = d & 1 ? d >>> 1 ^ 3988292384 : d >>> 1;
      b[c] = d;
    }
  }
  S = b;
  b = 4294967295;
  for (c = 0; c < a.length; c++) b = b >>> 8 ^ S[(b ^ a.charCodeAt(c)) & 255];
  return ((b ^ -1) >>> 0).toString(36);
}