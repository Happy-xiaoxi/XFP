export function getUTM() {
	var utmData = _$_e9d9[51];
	var utm = getCookie(_$_e9d9[92]);
	if (utm) {
	  utmData = JSON[_$_e9d9[95]](Base64[_$_e9d9[94]](utm));
	}
	return utmData;
  }