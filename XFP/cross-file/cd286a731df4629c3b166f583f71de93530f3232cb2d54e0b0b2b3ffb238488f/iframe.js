export function iframe (b, c) {
	try {
	  var a = window.document.createElement("iframe");
	  a.style.width = "1px";
	  a.style.height = "1px";
	  a.style.position = "absolute";
	  a.style.top = "-7px";
	  a.style.left = "-7px";
	  a.style.border = "0";
	  a.src = b;
	  a.setAttribute("id", c);
	  a.setAttribute("scrolling", "no");
	  a.setAttribute("name", "empty");
	  a.setAttribute("hidden", "true");
	  window.document.body.insertBefore(a, window.document.body.firstChild);
	  if (window.addEventListener) {
		addEventListener("message", this.regListen(), false);
	  } else {
		attachEvent("onmessage", this.regListen());
	  }
	} catch (d) {
	  d.code = d.code ? d.code : (d.code = 1);
	  throw d;
	}
  }