export function getVersion (e, b) {
	e = e || "";
	var d = 0;
	var c = 0;
	for (var a = 0; a < b && d >= 0; a++) {
	  if (d > 0) {
		c = d + 1;
	  }
	  d = e.indexOf(".", c);
	}
	return d > 0 ? e.substring(c, d).match(/\d+$/) : null;
  }