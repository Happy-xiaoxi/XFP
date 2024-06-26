export function getCookie(cname) {
	var name = cname + _$_e9d9[60];
	var ca = document[_$_e9d9[54]][_$_e9d9[63]](_$_e9d9[61]);
	for (var i = 0; i < ca[_$_e9d9[16]]; i++) {
	  var c = ca[i];
	  while (c[_$_e9d9[65]](0) == _$_e9d9[66]) {
		c = c[_$_e9d9[64]](1);
	  }
	  if (c[_$_e9d9[17]](name) == 0) {
		return c[_$_e9d9[64]](name[_$_e9d9[16]], c[_$_e9d9[16]]);
	  }
	}
	return _$_e9d9[51];
  }