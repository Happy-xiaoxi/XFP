export function getSchemeHost () {
	var a = [
	  location.protocol.indexOf("https") !== -1 ? "https://" : "http://",
	  this.pvar ? this.pvar.server : "",
	  this.pvar &&
	  this.pvar.server &&
	  this.pvar.server.indexOf("imrworldwide.com") === -1
		? ".imrworldwide.com"
		: "",
	  "/",
	];
	return a.join("");
  }