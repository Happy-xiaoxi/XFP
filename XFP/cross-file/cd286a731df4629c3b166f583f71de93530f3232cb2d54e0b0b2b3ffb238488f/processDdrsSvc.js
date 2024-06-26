export function processDdrsSvc (f) {
	var b = this,
	  a = {
		apidFile: undefined,
		nolparams: {
		  nol_override: {
			nol_pageURL:
			  this.globals.si && this.globals.si.length > 0
				? this.globals.si
				: "",
		  },
		},
	  };
	try {
	  function d(g) {
		if (g.client && g.client.cid) {
		  a.nolparams.nol_override.nol_clientid = g.client.cid;
		  a.nolparams.nol_override.nol_vcid = g.client.vc_id;
		}
		for (var e in g) {
		  if (e === "cid") {
			a.nolparams.nol_override.nol_clientid = g[e];
		  } else {
			if (["client"].indexOf(e) === -1) {
			  a.nolparams.nol_override[e] = g[e];
			}
		  }
		}
	  }
	  if (f && f.hasOwnProperty("processError")) {
		d(f.processError);
		return a;
	  } else {
		if (["ok", "nomatch", "notfound"].indexOf(f.status.toLowerCase()) > -1) {
		  d(f);
		  a.apidFile = true;
		  return a;
		} else {
		  return {};
		}
	  }
	} catch (c) {
	  logger("Failed to execute processDdrsSvc - " + c.message);
	}
  }