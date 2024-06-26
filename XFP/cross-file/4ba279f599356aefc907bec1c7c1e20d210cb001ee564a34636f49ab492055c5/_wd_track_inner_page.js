export function _wd_track_inner_page(e, t) {
	if (!(typeof e == "undefined" || typeof t == "undefined")) {
	  curtime = new Date();
	  var w = {};
	  (w.sub_page_id = e), (w.title = t), setup_data(w), setup_metadata(w);
	  var u = _webdigObj.url;
	  u && u != "" && (_wdSL += _wdSL.indexOf("?") == -1 ? "?" + u : "&" + u),
		write_ref();
	}
  }