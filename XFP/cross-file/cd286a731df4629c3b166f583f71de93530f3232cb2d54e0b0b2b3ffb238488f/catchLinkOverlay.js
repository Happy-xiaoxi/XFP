export function catchLinkOverlay (b) {
	var a = b ? b.target : window.event.srcElement;
	if (
	  (a.tagName === "INPUT" || a.tagName === "BUTTON") &&
	  (a.type === "image" || a.type === "submit" || a.type === "button")
	) {
	  this.sendForm(a);
	} else {
	  for (; a !== null && a.tagName !== "BODY"; a = a.parentNode) {
		if (a.tagName === "A" && a.href.length > 0) {
		  this.sendALink(a);
		  break;
		}
	  }
	}
  }