export function isNotifAllowed() {
	return (promise = new Promise(function (t, o) {
	  browserData.ua.startsWith("WordPress") && t(),
		CheckBrowserCampatability()
		  ? isPrivateMode(browserData.browser.name.toLowerCase())
			  .then(function (o) {
				t();
			  })
			  .catch(function (t) {
				o("not allowed");
			  })
		  : o("not allowed");
	}));
  }