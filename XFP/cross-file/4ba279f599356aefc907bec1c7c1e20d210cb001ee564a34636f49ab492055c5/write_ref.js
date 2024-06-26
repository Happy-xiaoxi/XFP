export function write_ref(e) {
	_wdCK == "0"
	  ? (_dgURL = getGeneralInfo() + getLocalInfo())
	  : (_dgURL = getGeneralInfo() + getCookieInfo() + getLocalInfo()),
	  send_ref(_dgURL, e);
  }