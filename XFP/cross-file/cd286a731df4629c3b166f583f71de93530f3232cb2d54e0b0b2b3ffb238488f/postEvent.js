export function postEvent () {
	var c = arguments && arguments.length > 0 ? arguments[0] : null;
	var a = [this.prefix({ content: c ? c.content : "" })];
	var b =
	  (c ? c.page_url : null) ||
	  (this.pvar ? this.pvar.page_url : "") ||
	  this.page_url;
	if (c && c.event_type) {
	  var d = [
		c.event_type,
		encodeURIComponent(b),
		encodeURIComponent(this.pvar.page_url || this.page_url),
	  ].join("_");
	  a.push("&cc=1", "&si=", d, "&rp=", this.previousEventPage || this.page_url);
	  if (this.cookie_overwrite) {
		a.push("&id=", this.cookie_overwrite);
	  }
	  this.previousEventPage = d;
	} else {
	  a.push(
		"&cc=0",
		"&si=",
		this.pvar ? this.pvar.cid : "",
		"-ctgw-",
		encodeURIComponent(b),
		"&rp=",
		encodeURIComponent(window.location)
	  );
	}
	this.postData(a.join(""));
	return this;
  }