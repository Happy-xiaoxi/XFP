export function _wd_write_perf(e, t) {
	var w, u, g;
	if (e) {
	  let v = function (h) {
		return m > t.to * 1e3
		  ? -1
		  : h > 0 && h < t.to * 1e3
		  ? h
		  : h == 0
		  ? 1
		  : -1;
	  };
	  var y = v,
		m = Date.now() - t.start,
		w = v(e.loadEventEnd - e.navigationStart),
		u = v(e.responseEnd - e.requestStart),
		g = v(e.domComplete - e.domLoading);
	} else if (typeof wdPerfLogStart != "undefined") {
	  var s = new Date() - wdPerfLogStart;
	  s <= t.to * 1e3
		? ((w = s), (u = s), (g = s))
		: ((w = -1), (u = -1), (g = -1));
	} else (w = -2), (u = -2), (g = -2);
	var O = "_wdplt=" + w + "&_wdrrt=" + u + "&_wdprt=" + g;
	t && t.username && (O += "&_wduser=" + escape(t.username)),
	  _wd_write_ref(O, t);
  }