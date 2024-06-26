export function sendALink (b) {
	var a =
	  b && b.innerHTML && b.innerHTML.toLowerCase().indexOf("img") > -1
		? "image"
		: "text";
	this.sendIt(b ? b.href : "", b ? b.tagName : "", a, b ? b.innerHTML : "");
  }