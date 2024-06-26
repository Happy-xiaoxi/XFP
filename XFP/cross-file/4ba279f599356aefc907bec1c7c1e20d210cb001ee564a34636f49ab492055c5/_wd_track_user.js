export function _wd_track_user(e, t, w) {
	if (typeof e != "undefined") {
	  curtime = new Date();
	  var u = {};
	  (u.username = e), (u.to = w), (u.title = t), _wd_setup_perf(u);
	}
  }