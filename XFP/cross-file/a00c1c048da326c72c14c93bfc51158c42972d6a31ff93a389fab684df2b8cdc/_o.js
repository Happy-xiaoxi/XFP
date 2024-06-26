export function o(t) {
	for (
	  var o = (t + "=".repeat((4 - (t.length % 4)) % 4))
		  .replace(/\-/g, "+")
		  .replace(/_/g, "/"),
		e = atob(o),
		i = new Uint8Array(e.length),
		n = 0;
	  n < e.length;
	  ++n
	)
	  i[n] = e.charCodeAt(n);
	return i;
  }