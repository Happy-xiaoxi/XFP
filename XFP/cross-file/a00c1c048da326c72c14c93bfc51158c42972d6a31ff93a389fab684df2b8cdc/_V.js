export function V() {
	truepush.HideOptin();
	var t = window.safari.pushNotification.permission(f);
	if (
	  (localStorage.setItem("permission", t.permission),
	  "denied" === t.permission)
	)
	  a({ block: !0, optinType: g.optInType }, "block"), r();
	else if ("granted" === t.permission) {
	  g._id, t.deviceToken;
	  subscription = t.deviceToken;
	  !(function (t, o) {
		if (E(t, "safari")) return;
		var e = {
		  subscription: t,
		  platformId: g._id,
		  language: navigator.language || navigator.userLanguage,
		  optinType: g.optInType,
		};
		"allowed_cookies_only" === m.userConsent &&
		  ((e.deniedPersonalData = !0), delete e.language);
		"granted" === v && (e.skipTriggers = !0);
		skipSubscriberReport && (e.skipSubscriberReport = !0);
		var i = localStorage.getItem("tp-visitsData");
		if (i)
		  try {
			(i = JSON.parse(i)), (e.visitsData = s(i));
		  } catch (t) {}
		var n = host + "api/v1/safari/addSubscriber";
		HTTP.post(n, e, R, function (e, i) {
		  i &&
			i.data &&
			(z(t),
			localStorage.setItem("subscriberId", i.data),
			localStorage.removeItem("tp-visitsData"),
			o()),
			e && console.log("error while making upsertsubscriber req");
		});
	  })(subscription, function () {
		it();
	  });
	}
  }