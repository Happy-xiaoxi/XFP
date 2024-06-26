export function getRefURL() {
	var refData = _$_e9d9[51];
	var ref = getCookie(_$_e9d9[96]);
	if (ref) {
	  refData = Base64[_$_e9d9[94]](ref);
	}
	return refData;
  }