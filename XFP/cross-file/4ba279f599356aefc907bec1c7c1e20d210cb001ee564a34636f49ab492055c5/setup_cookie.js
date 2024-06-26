export function setup_cookie() {
	var e = document.cookie,
	  t = e.indexOf("wdcid=");
	if (t < 0) {
	  if (
		((_wdBCID = "0"),
		(_wdCID = wdGenCID()),
		(t = ""),
		_wdRDM && _wdRDM != "" && (t = "domain=" + _wdRDM + ";"),
		(document.cookie =
		  "wdcid=" + escape(_wdCID) + ";" + _wdED + t + "path=/;"),
		document.cookie.indexOf("wdcid=") < 0)
	  ) {
		_wdCK = 0;
		return;
	  }
	} else (_wdBCID = "1"), (_wdCID = getCookie("wdcid"));
	(t = document.cookie.indexOf("wdlast=")),
	  t < 0
		? (_wdLS = 0)
		: ((_wdLS = parseInt(getCookie("wdlast"))),
		  (_wdDU = Math.round(curtime.getTime() / 1e3 - _wdLS)),
		  _wdDU <= _wdTimeOut && (_wdTO = "0")),
	  (document.cookie =
		"wdlast=" +
		Math.round(curtime.getTime() / 1e3) +
		";" +
		_wdED +
		"path=/;"),
	  (t = document.cookie.indexOf("wdses=")),
	  t < 0 || _wdTO == "1"
		? ((_wdTO = "1"),
		  (_wdSID = wdGenCID()),
		  (_wdDU = 10),
		  (document.cookie = "wdses=" + _wdSID + ";path=/;"))
		: (_wdSID = getCookie("wdses"));
  }