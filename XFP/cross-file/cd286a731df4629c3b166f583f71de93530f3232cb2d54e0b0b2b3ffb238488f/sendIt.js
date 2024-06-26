export function sendIt (c, d, e, a) {
	var b = [
	  this.prefix(),
	  "&cc=0",
	  "&si=",
	  this.pvar ? this.pvar.cid : null,
	  "-ctpo-",
	  encodeURIComponent(
		decodeURIComponent(c)
		  .replace(/^\s+|\s+$/g, "")
		  .replace(/\s+/g, " ")
	  ),
	  "&rp=",
	  encodeURIComponent(
		(this.pvar ? this.pvar.link_url : null) || window.location
	  ),
	  "&tt=",
	  encodeURIComponent(d ? d.toLowerCase() : ""),
	  "&cn=",
	  encodeURIComponent(e ? e.toLowerCase() : ""),
	  "&cv=",
	  encodeURIComponent(
		decodeURIComponent(a)
		  .replace(/^\s+|\s+$/g, "")
		  .replace(/\s+/g, " ")
	  ),
	];
	this.postData(b.join(""));
	this.pause(this.feat ? this.feat.pause_time : 0);
  }