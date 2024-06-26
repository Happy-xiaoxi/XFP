export function P() {
	return fromIframe
	  ? (function () {
		  "enable" != optinStatus ||
			("box" !== g.optInType &&
			  "bell" !== g.optInType &&
			  "top_bar" !== g.optInType) ||
			truepush.HideOptin();
		  var t;
		  t =
			"false" == EnableHTTPLocalTest
			  ? window.open(
				  g.altUrl + "/subscribe/" + g._id,
				  "HTTPSubscriptionWindow",
				  "location=yes,height=570,width=520,scrollbars=yes,status=yes"
				)
			  : window.open(
				  host + "sub-domain/subscribe/" + g._id,
				  "HTTPSubscriptionWindow",
				  "location=yes,height=570,width=520,scrollbars=yes,status=yes"
				);
		  setTimeout(() => {
			J(t);
		  }, 1e3);
		})()
	  : browserData &&
		browserData.browser &&
		"Safari" === browserData.browser.name
	  ? void W()
	  : truepush.subscribeUserVapid();
  }