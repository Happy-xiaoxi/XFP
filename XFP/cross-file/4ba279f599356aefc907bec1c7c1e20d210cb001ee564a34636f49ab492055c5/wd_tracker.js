export function wd_tracker(e) {
	if ((setup_data({}), e && e != "")) {
	  var t = _wdSL;
	  e.toLowerCase().indexOf("http") != 0 && (e = _wdLP + "//" + _wdHost + e),
		(_wdSL = e),
		(_wdRP = t);
	}
	write_ref();
  }