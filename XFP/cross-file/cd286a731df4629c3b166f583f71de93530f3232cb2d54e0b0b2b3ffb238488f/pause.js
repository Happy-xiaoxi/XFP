export function pause (a) {
	if (!window.ActiveXObject) {
	  if (
		navigator.userAgent.indexOf("Safari") !== -1 &&
		navigator.userAgent.indexOf("Chrome") === -1
	  ) {
		return;
	  }
	  var b = new Date().getTime() + a;
	  while (new Date() < b) {}
	}
  }