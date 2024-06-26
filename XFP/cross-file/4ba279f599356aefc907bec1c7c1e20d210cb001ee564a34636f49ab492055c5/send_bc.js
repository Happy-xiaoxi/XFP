export function send_bc(e) {
	navigator.sendBeacon
	  ? ((e = _wdCA + e), navigator.sendBeacon(e))
	  : send_ref(e);
  }