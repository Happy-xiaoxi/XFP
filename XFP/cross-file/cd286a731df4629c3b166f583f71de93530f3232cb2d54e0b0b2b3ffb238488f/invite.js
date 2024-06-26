export function invite () {
	if (this.detected_fraud || (this.feat && this.feat.surveys_enabled !== 1)) {
	  return this;
	}
	var f = [
	  this.prefix({ api: "j" }),
	  "&cc=0",
	  "&se=",
	  this.feat && this.feat.surveys_enabled ? "1" : "0",
	  "&te=0",
	];
	var e = null,
	  a = null,
	  c = null,
	  h = null;
	for (var g = 0, d = this.pmap.length; g < d; g++) {
	  e = this.pmap[g][0];
	  a = this.pmap[g][1];
	  c = this.pmap[g][2];
	  h = null;
	  if (this.pvar[e]) {
		h = this.pvar[e];
	  } else {
		if (this[e]) {
		  h = this[e];
		}
	  }
	  if (h) {
		f.push("&", a, "=", c ? encodeURIComponent(h) : h);
	  }
	}
	var b = [
	  "<scr",
	  'ipt type="text/javascript" src="',
	  f.join(""),
	  '"></scr',
	  "ipt>",
	].join("");
	document.write(b);
	return this;
  }