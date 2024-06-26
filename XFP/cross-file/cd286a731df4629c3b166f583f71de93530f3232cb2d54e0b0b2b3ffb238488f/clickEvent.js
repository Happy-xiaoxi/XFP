export function clickEvent () {
	this.postClickTrack({
	  event_type: "click_link",
	  page_url: arguments && arguments.length > 0 ? arguments[0] : "",
	  content: arguments && arguments.length > 1 ? arguments[1] : "",
	});
  }