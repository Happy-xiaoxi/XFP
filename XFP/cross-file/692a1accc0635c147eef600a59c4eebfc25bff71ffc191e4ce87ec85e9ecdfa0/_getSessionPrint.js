export function getSessionPrint() {
	var sp = getCookie(_$_e9d9[97]);
	if (sp) {
	  sp = Base64[_$_e9d9[94]](sp);
	}
	return sp;
  }