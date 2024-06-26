export function postClickTrack () {
	var b = arguments && arguments.length > 0 ? arguments[0] : null;
	this.postEvent(b);
	if (b && b.page_url) {
	  var a = encodeURIComponent(b.page_url);
	  setTimeout(
		function () {
		  window.location = a;
		},
		this.feat ? this.feat.pause_time : 0
	  );
	}
	return this;
  }