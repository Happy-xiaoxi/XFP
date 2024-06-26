export function getRandomId() {
	var text = _$_e9d9[51];
	var possible = _$_e9d9[155];
	for (var i = 0; i < 10; i++) {
	  text += possible[_$_e9d9[65]](
		Math[_$_e9d9[157]](Math[_$_e9d9[156]]() * possible[_$_e9d9[16]])
	  );
	}
	return text;
  }