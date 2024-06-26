export function fireToUrl (a) {
	try {
	  if (
		typeof a === "undefined" ||
		(a && (!a.hasOwnProperty("url") || a.url.length === 0)) ||
		!a.hasOwnProperty("retryDelay") ||
		!a.hasOwnProperty("currRetry") ||
		!a.hasOwnProperty("maxRetry")
	  ) {
		return;
	  }
	  var b = {
		requestUrl: function () {
		  try {
			var d = this;
			return ++a.currRetry > a.maxRetry
			  ? d.logErr("maxRetry reached")
			  : d.sendUrlRequest(a.url);
		  } catch (e) {
			d.logErr("Error in fireToUrl requestUrl: " + e);
		  }
		},
		sendUrlRequest: function (f) {
		  var e = this;
		  try {
			if (typeof f === "undefined") {
			  return;
			}
			var d = new Image();
			d.onerror = function (h) {
			  window.setTimeout(function () {
				e.requestUrl();
			  }, a.retryDelay);
			};
			d.onload = function (h) {};
			d.src = f + "&r=" + Math.round(Math.random() * 1000000);
		  } catch (g) {
			e.logErr("Error in fireToUrl sendUrlRequest: " + g);
		  }
		},
		logErr: function (d) {
		  if (d && window.console && window.console.log) {
			console.log("Error: ", d);
		  }
		},
	  };
	  b.requestUrl();
	} catch (c) {
	  logger("Failed to execute fireUrl - " + c.message);
	}
  }