export function _wd_track_external(e) {
	if (!!e.url) {
	  (curtime = new Date()), setup_data(e), setup_metadata(e);
	  var t = "_wdxid=000000000000000000000000000000000000000000&_wdt=112";
	  (_wdSL += _wdSL.indexOf("?") == -1 ? "?" + t : "&" + t), write_bc();
	}
  }