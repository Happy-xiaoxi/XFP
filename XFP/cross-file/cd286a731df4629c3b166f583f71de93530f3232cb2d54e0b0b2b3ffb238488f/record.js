export function record () {
	this.postChk = false;
	this.page_url = "" + window.location;
	this.referrer = "" + document.referrer;
	try {
	  if (
		this.feat &&
		this.feat.check_fraud &&
		top.location.href.indexOf(document.domain) === -1
	  ) {
		this.detected_fraud = true;
		return this;
	  }
	  this.detected_fraud = false;
	} catch (h) {
	  this.detected_fraud = true;
	  return this;
	}
	if (this.feat && this.feat.detect_technical) {
	  this.java_enabled = navigator.javaEnabled() === true ? "y" : "n";
	  if (document.body.addBehavior) {
		document.body.addBehavior("#default#clientCaps");
		document.body.addBehavior("#default#homePage");
		this.conn_type = document.body.connectionType;
		this.is_hp = document.body.isHomePage(location.href) ? "y" : "n";
	  }
	  if (window.screen) {
		this.screen_res = window.screen.width + "x" + window.screen.height;
		this.col_depth = window.screen.colorDepth;
	  }
	  if (navigator.userLanguage) {
		this.language = navigator.userLanguage;
	  } else {
		if (navigator.language) {
		  this.language = navigator.language;
		}
	  }
	  if (navigator.cookieEnabled) {
		this.pvar.cookies_enabled = navigator.cookieEnabled === true ? "y" : "n";
	  }
	  this.timezone = new Date().getTimezoneOffset() / -60;
	}
	if (this.feat && this.feat.detect_flash) {
	  if (navigator.mimeTypes && navigator.mimeTypes.length > 0) {
		var d = "application/x-shockwave-flash";
		if (navigator.mimeTypes[d] && navigator.mimeTypes[d].enabledPlugin) {
		  var b = this.getVersion(
			navigator.mimeTypes[d].enabledPlugin.description,
			1
		  );
		  if (b) {
			this.flash = b;
		  }
		}
	  } else {
		if (window.ActiveXObject) {
		  for (var c = 15; c > 0; c--) {
			try {
			  if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + c)) {
				this.flash = c;
				break;
			  }
			} catch (g) {}
		  }
		}
	  }
	}
	if (this.feat && this.feat.link_overlay) {
	  this.regLinkOverlay();
	}
	try {
	  if (typeof window.localStorage === "undefined") {
		this.feat.useLocalStorage = 0;
	  } else {
		localStorage.cHJpdmF0ZV9icm93c2luZ190ZXN0 = "private_browsing_test";
		localStorage.removeItem("cHJpdmF0ZV9icm93c2luZ190ZXN0");
	  }
	} catch (a) {
	  this.feat.useLocalStorage = 0;
	}
	if (this.feat && this.feat.useLocalStorage) {
	  localstorageframe = [this.getSchemeHost(), "storageframe.html"].join("");
	  this.iframe(localstorageframe, "LOCSTORAGE");
	}
	return this;
  }