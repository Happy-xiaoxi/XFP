export function utf8Encode(a) {
  a = a.replace(/\r\n/g, "\n");
  for (var b = "", c = 0; c < a.length; c++) {
    var f = a.charCodeAt(c);
    128 > f
      ? (b += String.fromCharCode(f))
      : (127 < f && 2048 > f
          ? (b += String.fromCharCode((f >> 6) | 192))
          : ((b += String.fromCharCode((f >> 12) | 224)),
            (b += String.fromCharCode(((f >> 6) & 63) | 128))),
        (b += String.fromCharCode((f & 63) | 128)));
  }
  return b;
}