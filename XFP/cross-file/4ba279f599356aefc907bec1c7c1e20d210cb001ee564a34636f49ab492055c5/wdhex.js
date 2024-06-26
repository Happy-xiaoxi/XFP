export function wdhex(e) {
	for (var t = "", w, u = 7; u >= 0; u--)
	  (w = (e >>> (u * 4)) & 15), (t += w.toString(16));
	return t;
  }