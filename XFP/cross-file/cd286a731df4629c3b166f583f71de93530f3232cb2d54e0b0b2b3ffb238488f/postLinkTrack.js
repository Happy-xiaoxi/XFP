export function postLinkTrack () {
	this.postEvent(arguments && arguments.length > 0 ? arguments[0] : null);
	this.pause(this.feat.pause_time);
	return this;
  }