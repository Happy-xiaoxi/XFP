export function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d[_$_e9d9[57]](d[_$_e9d9[56]]() + exdays * 24 * 60 * 60 * 1000);
	var expires = _$_e9d9[58] + d[_$_e9d9[59]]();
	document[_$_e9d9[54]] =
	  cname + _$_e9d9[60] + cvalue + _$_e9d9[61] + expires + _$_e9d9[62];
  }