export function injectBsdk (b) {
	try {
	  var i = 0,
		j = this,
		g = {
		  nol_sdkDebug: false,
		  apn: "v60Bsdk",
		  nsdkv: "600",
		  sfcode: j.pvar.server.replace("secure-", ""),
		  si: this.globals.si,
		},
		h = {
		  type: "static",
		  assetid: j.globals.content,
		  section: j.globals.content,
		},
		c = j.globals.defaultApidFile,
		a = "v60Bsdk__" + Date.now();
	  if (j.pvar.hasOwnProperty("subdomain") && j.pvar.subdomain.length > 0) {
		g.subdomain = j.pvar.subdomain;
	  }
	  if (b && b.hasOwnProperty("nolparams")) {
		if (
		  b.hasOwnProperty("apidFile") &&
		  b.apidFile !== undefined &&
		  b.apidFile.length > 0
		) {
		  c = b.apidFile;
		}
		for (key in b.nolparams) {
		  g[key] = b.nolparams[key];
		}
	  } else {
		g.nol_override = g.nol_override || {};
		g.nol_override.nol_clientid = this.globals.cid;
	  }
	  if (
		(this.globals.fpidSfCodeList &&
		  this.globals.fpidSfCodeList.indexOf(g.sfcode.toLowerCase()) > -1) ||
		this.globals.cid === "ziffdavis" ||
		this.globals.cid === "au-ziffdavis"
	  ) {
		g.enableFpid = true;
	  }
	  var d = NOLBUNDLE.nlsQ(c, a, g);
	  setTimeout(function () {
		d.ggPM("14", h);
	  }, 2000);
	} catch (f) {
	  logger("Failed to execute injectBsdk - " + f.message);
	}
  }