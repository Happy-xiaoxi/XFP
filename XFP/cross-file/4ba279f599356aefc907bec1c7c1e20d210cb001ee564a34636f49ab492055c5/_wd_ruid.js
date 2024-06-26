export function _wd_ruid(e) {
	var t = 1;
	if (self == top && e > _wdRUTimeout) {
	  for (var w = "", u = navigator.userAgent, g = 0, s = 0; s < u.length; s++) {
		var m = u.charCodeAt(s);
		if ((m <= 127 && ((w += u.charAt(s)), g++), g >= 64)) break;
	  }
	  var O = Math.random().toString(36).substring(2),
		y = "r-" + wdHash(w) + "-" + O + "-" + t + "-" + e,
		v = _wdCA.replace("1.gif", y),
		j = new Image();
	  j.src = v;
	}
  }