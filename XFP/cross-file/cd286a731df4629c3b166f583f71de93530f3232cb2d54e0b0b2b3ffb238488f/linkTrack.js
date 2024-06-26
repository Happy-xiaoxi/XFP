export function linkTrack () {
	this.postLinkTrack({
	  page_url: arguments && arguments.length > 0 ? arguments[0] : "",
	  content: arguments && arguments.length > 1 ? arguments[1] : "",
	});
  }