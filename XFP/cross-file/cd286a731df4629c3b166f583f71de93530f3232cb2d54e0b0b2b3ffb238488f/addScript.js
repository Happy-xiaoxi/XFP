export function addScript (d) {
	try {
	  var b;
	  var a = this;
	  if (d === undefined || d.length === 0 || !a.globals) {
		return;
	  }
	  b = window.document.createElement("script");
	  b.type = "text/javascript";
	  b.src = d;
	  b.onerror = function (e) {
		var f = e.target.src;
		if (window.document.head) {
		  window.document.head.removeChild(e.target);
		} else {
		  window.document.getElementsByTagName("head")[0].removeChild(e.target);
		}
		if (
		  a.globals.hasOwnProperty("wlCurrRetry") &&
		  a.globals.hasOwnProperty("wlMaxRetry") &&
		  ++a.globals.wlCurrRetry < a.globals.wlMaxRetry
		) {
		  window.setTimeout(function () {
			a.addScript(f);
		  }, 2000);
		} else {
		  logger("Max number of retries reached in addScript");
		}
	  };
	  b.onload = function (e) {
		a.globals.wlCurrRetry = 0;
		if (window.document.head) {
		  window.document.head.removeChild(e.target);
		} else {
		  window.document.getElementsByTagName("head")[0].removeChild(e.target);
		}
	  };
	  if (window.document.head) {
		window.document.head.appendChild(b);
	  } else {
		window.document.getElementsByTagName("head")[0].appendChild(b);
	  }
	} catch (c) {
	  logger("Failed to execute addScript - " + c.message);
	}
  }