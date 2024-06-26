export function regLinkOverlay () {
	if (!document.getElementById) {
	  return;
	}
	var b = this;
	var a = document.body.onclick;
	document.body.onclick = function (c) {
	  b.catchLinkOverlay(c);
	  if (a) {
		a(c);
	  }
	};
  }