export function validateDomain() {
	var valid = false;
	var domains = [_$_e9d9[14], _$_e9d9[15]];
	for (i = 0; i < domains[_$_e9d9[16]]; i++) {
	  if (
		window[_$_e9d9[19]][_$_e9d9[18]][_$_e9d9[17]](domains[i]) != _$_e9d9[20]
	  ) {
		valid = true;
		break;
	  }
	}
	return valid;
  }