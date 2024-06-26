export function _wd_write_ref(e, t, w) {
	typeof t == "undefined" && (t = {}),
	  (curtime = new Date()),
	  setup_data(t),
	  setup_metadata(t);
	var u = "";
	for (k in t)
	  (typeof k == "string" && k.startsWith("wd")) ||
		(u += encodeURIComponent(k) + "=" + encodeURIComponent(t[k]) + "&");
	(e = u + e),
	  _webdigObj.url && (e += "&" + _webdigObj.url),
	  (_wdSL = _wdSL.indexOf("?") == -1 ? _wdSL + "?" + e : _wdSL + "&" + e),
	  write_ref(w);
  }