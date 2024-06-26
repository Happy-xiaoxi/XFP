export  function setup_data(e) {
	if (
	  ((_wdDT = document.title == "" ? location.href : document.title),
	  e.title && (_wdDT = e.title),
	  e.sub_page_id)
	) {
	  var t = window.location.href;
	  _wdSL =
		t.indexOf("?") == -1
		  ? t + "?_spid=" + e.sub_page_id
		  : t + "&_spid=" + sub_page_id;
	} else
	  e.url
		? ((_wdSL = e.url), (_wdRP = e.referer))
		: (_wdSL = window.location.href);
	if (
	  ((_wdHost = document.location.host),
	  document.location.host == "mipcache.bdstatic.com")
	) {
	  var w = document.location.pathname,
		u = document.location.search,
		g = document.location.hash,
		s = w.split("/");
	  s.length >= 3 &&
		s[1] == "c" &&
		(s[2] == "s"
		  ? ((s = s.splice(2, s.length)), (s[0] = "https:/"))
		  : ((s = s.splice(1, s.length)), (s[0] = "http:/")),
		(_wdSL = s.join("/") + u + g),
		(_wdHost = s[1]));
	}
	if (document.location.protocol != "file:") {
	  if (
		(document.characterSet
		  ? (_wdCS = fesc(document.characterSet))
		  : document.charset && (_wdCS = fesc(document.charset)),
		INCLUDESUBHOST && INCLUDESUBHOST != null && INCLUDESUBHOST.length != 0)
	  ) {
		for (i = 0; i < INCLUDESUBHOST.length; i++)
		  if (
			INCLUDESUBHOST[i] &&
			_wdHost &&
			INCLUDESUBHOST[i].indexOf(_wdHost) != -1
		  ) {
			_wdErr = "0";
			break;
		  }
	  } else _wdErr = "0";
	  if (!(_wdErr == "1" && SHOWERRHOST != null && SHOWERRHOST != 1)) {
		if (
		  (_wdErr == "1" && println(""),
		  ROOTDM &&
			ROOTDM != null &&
			ROOTDM.length != 0 &&
			_wdHost &&
			_wdHost != "")
		)
		  for (i = 0; i < ROOTDM.length; i++)
			_wdHost.indexOf(ROOTDM[i]) != -1 && (_wdRDM = ROOTDM[i]);
		println("_wdRP=" + _wdRP),
		  !_wdRP || _wdRP == ""
			? (_wdRP = "")
			: ((r = _wdRP.indexOf(document.domain)),
			  (r >= 0 && r <= 8) ||
				(_wdRP.indexOf("[") == 0 &&
				  _wdRP.lastIndexOf("]") == _wdRP.length - 1 &&
				  (_wdRP = ""))),
		  println("_wdRP=" + _wdRP),
		  println("_wdUA=" + _wdUA),
		  println("_wdRUA=" + _wdRUA),
		  _wdIE && (_wdIEV = parseInt(_wdUA.substr(_wdUA.indexOf("MSIE") + 5))),
		  _wdIE &&
			_wdIEV >= 5 &&
			(document.body.addBehavior("#default#clientCaps"),
			(_wdCT = document.body.connectionType),
			document.body.addBehavior("#default#homePage"),
			(_wdHP = document.body.isHomePage(location.href) ? "1" : "0"));
		try {
		  _wdIE && (_wdFS = document.fileSize);
		} catch (m) {
		  _wdFS = 0;
		}
		(_wdFl = wdFlash()),
		  (_wdTZ = new Date().getTimezoneOffset() / -60),
		  typeof _wdWS != "undefined" &&
			_wdWS != null &&
			((_wdSW = _wdWS.width),
			(_wdSH = _wdWS.height),
			(_wdCD = _wdWS.colorDepth),
			(_wdSR = _wdSW + "x" + _wdSH),
			_wdNN && _wdBV >= 4 && (_wdCD = _wdWS.pixelDepth)),
		  ((_wdNN && _wdBV >= 4) || _wdOP) && (_wdLG = navigator.language),
		  _wdIE && _wdBV >= 4 && !_wdOP && (_wdLG = navigator.userLanguage),
		  (_wdJE = navigator.javaEnabled() == !0 ? "1" : "0"),
		  navigator.cookieEnabled &&
			(_wdCK = navigator.cookieEnabled == !0 ? "1" : "0"),
		  _wdCK == 1 && setup_cookie();
	  }
	}
  }