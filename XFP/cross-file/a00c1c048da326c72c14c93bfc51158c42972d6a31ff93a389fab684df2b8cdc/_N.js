export function N(t) {
	try {
	  for (
		var o = t + "=",
		  e = decodeURIComponent(document.cookie),
		  i = e.split(";"),
		  n = 0;
		n < i.length;
		n++
	  ) {
		for (var a = i[n]; " " == a.charAt(0); ) a = a.substring(1);
		if (0 == a.indexOf(o)) return a.substring(o.length, a.length);
	  }
	  return "";
	} catch (t) {
	  return console.log(t), "";
	}
  }