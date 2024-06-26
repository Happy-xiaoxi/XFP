export function wdGenCID() {
	return wdHash(
	  document.location + document.cookie + document.referrer + curtime.getTime()
	);
  }