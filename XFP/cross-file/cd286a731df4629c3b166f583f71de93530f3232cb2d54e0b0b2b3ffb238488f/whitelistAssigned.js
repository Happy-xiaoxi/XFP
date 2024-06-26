export function whitelistAssigned (a) {
	try {
	  if (
		window.V60 &&
		window.V60.hasOwnProperty("ciWhitelist") &&
		window.V60.ciWhitelist.hasOwnProperty("nol_clients") &&
		Object.keys(window.V60.ciWhitelist.nol_clients).length > 0
	  ) {
		var a = this;
		var f =
		  a.pvar &&
		  a.pvar.hasOwnProperty("cid") &&
		  typeof a.pvar.cid !== "undefined"
			? String(a.pvar.cid).toLowerCase()
			: "";
		if (window.V60.ciWhitelist.nol_clients.hasOwnProperty(f)) {
		  var d = window.V60.ciWhitelist.nol_clients[f],
			c =
			  window.V60.ciWhitelist && window.V60.ciWhitelist.nol_clients
				? window.V60.ciWhitelist.nol_clients
				: {};
		  if (Object.keys(c).length > 0 && c.hasOwnProperty(f)) {
			a.retrieveCiFileViaCors(function (e) {
			  a.injectBsdk(e);
			});
		  }
		  if (d.hasOwnProperty("nol_xl8Url") && d.nol_xl8Url.length > 0) {
			a.fireToUrl({
			  url: d.nol_xl8Url,
			  retryDelay: 1000,
			  currRetry: a.globals.tagCurrRetry,
			  maxRetry: a.globals.tagMaxRetry,
			});
		  }
		}
	  } else {
		if (typeof console !== "undefined" && console && console.warn) {
		  console.warn("Failed to execute initFromWhitelist", b.message);
		}
	  }
	} catch (b) {
	  logger("Failed to execute whitelistAssigned - " + b.message);
	}
  }