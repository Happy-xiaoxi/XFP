export function e(t) {
	return (t = (t = (t = t.split("=")[0]).replace(/\+/g, "-")).replace(
	  /\//g,
	  "_"
	));
  }