export function send_ref(e, t) {
	var w = !1,
	  u = function () {
		w || ((w = !0), typeof t == "function" && t());
	  };
	(e = _wdCA + e),
	  (Aimg = new Image()),
	  (Aimg.onload = function () {
		u(), (_wdGidT = Aimg.height), Aimg.height == 1 && _wd_ruid(_wdDU);
	  }),
	  (Aimg.onerror = u),
	  (Aimg.src = e);
  }