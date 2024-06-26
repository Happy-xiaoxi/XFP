export function a(t, o) {
	if (
	  g.browserData &&
	  g.browserData.browser &&
	  "Safari" === g.browserData.browser.name
	) {
	  var e = window.safari.pushNotification.permission(
		g.safariDetails.webPushId
	  );
	  e &&
		"granted" === e.permission &&
		e.deviceToken &&
		(t.deviceToken = e.deviceToken);
	}
	if (
	  (subscription && (t.subscription = subscription),
	  "optin" == o || "show" == o)
	) {
	  var i = localStorage.getItem("tp-uniqueShow");
	  i ||
		(localStorage.setItem("tp-uniqueShow", !0),
		a({ uniqueShow: !0 }, "uniqueShow"));
	}
	(navigator.language ||
	  (navigator.userLanguage &&
		"allowed_cookies_personal_data" ===
		  window.truepushSDKInfo.userConsent)) &&
	  (t.language = navigator.language || navigator.userLanguage),
	  "allowed_cookies_only" === m.userConsent && (t.deniedPersonalData = !0),
	  (function (t, o) {
		var e = localStorage.getItem("tp-visitsData");
		try {
		  if ((e = e ? JSON.parse(e) : {})[o]) {
			var i = e[o].count ? e[o].count : 0;
			try {
			  (e[o] = t), (e[o].count = ++i);
			} catch (t) {
			  console.log("visitData error");
			}
		  } else (e[o] = t), (e[o].count = 1);
		  localStorage.setItem("tp-visitsData", JSON.stringify(e));
		} catch (t) {}
	  })(t, o);
  }