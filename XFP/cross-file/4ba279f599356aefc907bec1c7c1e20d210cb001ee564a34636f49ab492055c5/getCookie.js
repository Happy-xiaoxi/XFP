export function getCookie(e) {
	var t = null,
	  w = document.cookie,
	  u = w.indexOf(e);
	return (
	  u != -1 &&
		((u += e.length + 1),
		(e = w.indexOf(";", u)),
		e == -1 && (e = w.length),
		(t = w.substring(u, e))),
	  t
	);
  }