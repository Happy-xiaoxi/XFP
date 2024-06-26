export function wdHash(e) {
	if (!e || e == "") return 1;
	for (var t = 1732584193, w = 4023233417, u = 0; u < e.length; u++) {
	  var g = parseInt(e.charCodeAt(u));
	  (t = ((t << 6) | (w >>> 26)) + ((t << 16) | (w >>> 16)) - t),
		(w = (g + (w << 6) - w + (w << 16)) & 4294967295);
	}
	return wdhex(t & 2147483647) + wdhex(w);
  }