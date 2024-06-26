export function postEventTrack () {
	this.postEvent(arguments && arguments.length > 0 ? arguments[0] : null);
	return this;
  }