export function j() {
	d ||
	  ((d = !0),
	  fromSubDomain || u(),
	  fromIframe && !fromSubDomain
		? (("granted" == Notification.permission ||
			!localStorage ||
			(localStorage.getItem("permission") &&
			  "default" !== localStorage.getItem("permission"))) &&
			"default" !== Notification.permission) ||
		  ("custom" != g.optInType &&
			setTimeout(function () {
			  "default" != g.optInType && "default+" != g.optInType
				? ("bell" === g.optInType ||
					("spec_time" === g.optInFrequencyType &&
					  localStorage.getItem("optinShow") <= Date.now()) ||
					(!sessionStorage.getItem("new_session") &&
					  "new_session" === g.optInFrequencyType) ||
					"page_refresh" === g.optInFrequencyType) &&
				  (c(g),
				  a({ optin: !0, optinType: g.optInType }, "optin"),
				  (optinStatus = "enable"))
				: (("spec_time" === g.optInFrequencyType &&
					localStorage.getItem("optinShow") <= Date.now()) ||
					(!sessionStorage.getItem("new_session") &&
					  "new_session" === g.optInFrequencyType) ||
					"page_refresh" === g.optInFrequencyType) &&
				  (c(g), P());
			}, 1e3 * g.optinShowInterval),
		  (isSubscribed = !1))
		: (g.websiteSSL || fromSubDomain) &&
		  "safari" != browserData.browser.name.toLowerCase()
		? C()
		: "safari" == browserData.browser.name.toLowerCase()
		? (function (t) {
			if ("all" === t.browserSupport || "safari" === t.browserSupport) {
			  if (t.safariDetails && t.safariDetails.webPushId) return !0;
			  console.log("No safari certificate found", t);
			} else console.log("not opted for safari");
		  })(g) &&
		  (function () {
			if ("safari" in window && "pushNotification" in window.safari) {
			  var t = window.safari.pushNotification.permission(f);
			  "default" === t.permission
				? "custom" != g.optInType &&
				  setTimeout(function () {
					"default" != g.optInType && "default+" != g.optInType
					  ? ("bell" === g.optInType ||
						  ("spec_time" === g.optInFrequencyType &&
							localStorage.getItem("optinShow") <=
							  Date.now()) ||
						  (!sessionStorage.getItem("new_session") &&
							"new_session" === g.optInFrequencyType) ||
						  "page_refresh" === g.optInFrequencyType) &&
						(a({ optin: !0, optinType: g.optInType }, "optin"),
						c(g),
						(optinStatus = "enable"))
					  : (("spec_time" === g.optInFrequencyType &&
						  localStorage.getItem("optinShow") <= Date.now()) ||
						  (!sessionStorage.getItem("new_session") &&
							"new_session" === g.optInFrequencyType) ||
						  "page_refresh" === g.optInFrequencyType) &&
						((g.optInType = "bell"),
						c(g),
						(optinStatus = "enable"));
				  }, 1e3 * g.optinShowInterval)
				: "granted" === t.permission &&
				  (subscription = t.deviceToken);
			}
		  })()
		: (function () {
			try {
			  !(function () {
				var t = "box+" === g.optInType ? "box2" : g.optInType;
				t = "default+" === t ? "default2" : t;
				var o = document.createElement("div"),
				  e = "";
				"bell" === t
				  ? (e = "iframe_optinbell_tp")
				  : "top_bar" === t
				  ? (e = "iframe_optinbar_tp")
				  : "box" === t
				  ? (e = "iframe_optinbox_tp")
				  : "box2" === t && (e = "iframe_optinboxplus_tp");
				o.innerHTML =
				  "<iframe id='tp-iframe' onload='truepush.Iframloaded()' class=" +
				  e +
				  " style='display:none;bottom:" +
				  g.customStyles.bottom +
				  "px;top:" +
				  g.customStyles.top +
				  "px' src='" +
				  g.altUrl +
				  "/subscribe/" +
				  g._id +
				  "?fromIframe=true'>";
				var i = document.createElement("div");
				(i.innerHTML =
				  "<iframe id='tp-iframe' onload='truepush.Iframloaded()' class=" +
				  e +
				  " style='display:none;bottom:" +
				  g.customStyles.bottom +
				  "px;top:" +
				  g.customStyles.top +
				  "px' src='" +
				  host +
				  "sub-domain/subscribe/" +
				  g._id +
				  "?fromIframe=true'>"),
				  "true" == EnableHTTPLocalTest && (o = i);
				document.body.appendChild(o);
			  })();
			} catch (t) {}
		  })());
  }