export function getDynamicParameters() {
	var sp = getCookie(_$_e9d9[97]);
	if (!sp) {
	  setCookie(_$_e9d9[97], Base64[_$_e9d9[83]](getRandomId()), 90);
	}
	var fp = getCookie(_$_e9d9[98]);
	if (!fp) {
	  new Fingerprint2()[_$_e9d9[24]](function (result, components) {
		setCookie(_$_e9d9[98], Base64[_$_e9d9[83]](result), 90);
		getLocation();
	  });
	} else {
	  getLocation();
	}
  }