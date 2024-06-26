export function write_bc() {
	_wdCK == "0"
	  ? (_dgURL = getGeneralInfo() + getLocalInfo())
	  : (_dgURL = getGeneralInfo() + getCookieInfo() + getLocalInfo()),
	  send_bc(_dgURL);
  }