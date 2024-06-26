export function retrieveCiFileViaCors (c) {
	try {
	  var f,
		b = true,
		j = this,
		k = [200, 302],
		a =
		  "https://bee.imrworldwide.com/v1/clients/match?client_id=" +
		  this.globals.cid +
		  "&url=" +
		  encodeURI(window.location.href),
		i = function (e) {
		  logger("Error parsing DDRS <ci>.json response - " + e.message);
		  c(j.processDdrsSvc({ processError: j.globals.defaultErrorParams }));
		  return;
		},
		g = function () {
		  c(j.processDdrsSvc({ processError: j.globals.defaultErrorParams }));
		};
	  if (window.XDomainRequest) {
		var f = new XDomainRequest();
		f.open("get", a);
		f.onload = function () {
		  try {
			var n = new ActiveXObject("Microsoft.XMLDOM"),
			  m = JSON.parse(f.responseText);
			n.async = false;
		  } catch (l) {
			i(l);
		  }
		  c(j.processDdrsSvc(m));
		};
		f.onerror = function () {
		  g();
		};
		try {
		  f.send();
		} catch (d) {
		  g();
		}
	  } else {
		if (window.XMLHttpRequest) {
		  f = new XMLHttpRequest();
		  f.onerror = function () {
			g();
		  };
		  f.onreadystatechange = function () {
			if (this.readyState == 4) {
			  if (k.indexOf(this.status) !== -1) {
				try {
				  ciDdrs = JSON.parse(this.responseText);
				} catch (l) {
				  i(l);
				  return;
				}
				c(j.processDdrsSvc(ciDdrs));
			  } else {
				if ([404, 403].indexOf(this.status) > -1) {
				  g();
				}
			  }
			}
		  };
		  f.open("GET", a, b);
		  try {
			f.send();
		  } catch (d) {
			g();
		  }
		}
	  }
	} catch (h) {
	  logger("Failed to execute retrieveCiFileViaCors - " + h.message);
	}
  }