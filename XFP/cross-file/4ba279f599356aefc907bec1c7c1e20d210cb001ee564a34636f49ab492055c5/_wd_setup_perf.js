export function _wd_setup_perf(e) {
	if (
	  (e.to || (e.to = _wdPerfTimeOut), typeof window.performance != "undefined")
	) {
	  let s = function () {
		  w || (_wd_write_perf(t, e), (w = !0));
		},
		m = function () {
		  document.readyState == "complete" && setTimeout(s, 0);
		};
	  var g = s,
		u = m;
	  e.start = Date.now();
	  var t = window.performance.timing,
		w = !1;
	  document.readyState == "complete"
		? m()
		: (document.addEventListener
			? document.addEventListener("readystatechange", m)
			: document.attachEvent("onreadystatechange", m),
		  setTimeout(s, e.to * 1e3));
	} else _wd_write_perf(null, e);
  }