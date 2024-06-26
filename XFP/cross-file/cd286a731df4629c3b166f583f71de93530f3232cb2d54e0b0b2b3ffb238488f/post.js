export function post () {
	if (
	  this.feat &&
	  this.feat.useLocalStorage &&
	  typeof this.cookie_overwrite === "undefined"
	) {
	  this.postChk = true;
	  return this;
	}
	this.postChk = false;
	var a = [this.prefix()];
	if (typeof _rsCI == "string") {
	  a.push("&cc=", this.pvar._rsCC);
	} else {
	  a.push("&cc=", this.feat && this.feat.check_cookie ? "1" : "0");
	}
	if (this.feat && this.feat.document_title) {
	  var o = encodeURIComponent(document.title);
	  if (o) {
		a.push("&tl=", o);
	  }
	}
	if (
	  this.feat &&
	  this.feat.landing_page &&
	  this.referrer &&
	  document.location.search.search(/[&?]nol\./) !== -1
	) {
	  var b = [];
	  var m = document.location.search
		.substring(document.location.search.lastIndexOf("?") + 1)
		.split("&");
	  for (var g in m) {
		if (m.hasOwnProperty(g) && m[g].search(/^nol\./) !== -1) {
		  b.push("&", m[g]);
		}
	  }
	  if (b.length > 0) {
		a.push("&lp=1");
		a = a.concat(b);
	  }
	  this.page_url = this.page_url
		.replace(/[&?]nol\..*?=[^&]*/g, "")
		.replace(/&&/g, "&")
		.replace(/\?&/, "?")
		.replace(/[&\?]$/, "");
	  if (this.referrer.search(/[&?]nol\./)) {
		this.referrer = this.referrer
		  .replace(/[&?]nol\..*?=[^&]*/g, "")
		  .replace(/&&/g, "&")
		  .replace(/\?&/, "?")
		  .replace(/[&\?]$/, "");
	  }
	}
	var c = null,
	  p = null,
	  h = null,
	  e = null;
	for (var k = 0, f = this.pmap.length; k < f; k++) {
	  c = this.pmap[k][0];
	  p = this.pmap[k][1];
	  h = this.pmap[k][2];
	  e = null;
	  if (this.pvar[c]) {
		e = this.pvar[c];
	  } else {
		if (this[c]) {
		  e = this[c];
		}
	  }
	  if (e) {
		a.push("&", p, "=", h ? encodeURIComponent(e) : e);
	  }
	}
	if (this.pvar && this.pvar.custom) {
	  var n = 0;
	  for (var d in this.pvar.custom) {
		if (this.pvar.custom.hasOwnProperty(d)) {
		  if (n >= this.CONST.max_tags) {
			break;
		  }
		  var l = this.pvar.custom[d];
		  a.push("&c", n, "=", encodeURIComponent(d), ",", encodeURIComponent(l));
		  n++;
		}
	  }
	}
	this.postData(a.join(""));
	return this;
  }