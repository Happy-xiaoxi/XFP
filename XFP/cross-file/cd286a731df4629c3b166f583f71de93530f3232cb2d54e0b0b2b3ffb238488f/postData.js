export function postData (a) {
	try {
	  if (this.detected_fraud || a.indexOf("secure-it") !== -1) {
		return;
	  }
	  if (this.feat && this.feat.filters) {
		a = this.filter(a);
	  }
	  var c = new Image(1, 1);
	  c.onerror = c.onload = function () {
		c.onerror = c.onload = null;
	  };
	  c.src = a;
	} catch (b) {}
  }