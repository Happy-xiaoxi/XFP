export function prefix () {
	var b = arguments && arguments.length > 0 ? arguments[0] : null;
	var c = b && b.api ? b.api : "m";
	var a = [
	  this.getSchemeHost(),
	  "cgi-bin/",
	  c,
	  "?",
	  "rnd=",
	  new Date().getTime(),
	  "&ci=",
	  this.pvar ? this.pvar.cid : "",
	  "&js=1",
	];
	if (c === "m") {
	  if (typeof _rsCI == "string") {
		a.push(
		  "&cg=",
		  encodeURIComponent(
			b && b.content
			  ? b.content
			  : (this.pvar ? this.pvar.content : null) ||
				  (this.pvar.content == "" ? "" : "0")
		  )
		);
	  } else {
		a.push(
		  "&cg=",
		  encodeURIComponent(
			b && b.content
			  ? b.content
			  : (this.pvar ? this.pvar.content : null) || "0"
		  )
		);
	  }
	}
	if (this.scriptName) {
	  a.push("&ts=", this.scriptName);
	}
	if (this.version) {
	  a.push("&vn=", this.version);
	}
	return a.join("");
  }