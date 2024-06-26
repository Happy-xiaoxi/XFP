export function reSetTabIndex(landingDiv) {
	if (landingDiv[_$_e9d9[16]] != 0) {
	  var all = document[_$_e9d9[22]](landingDiv)[_$_e9d9[21]](_$_e9d9[13]);
	} else {
	  var all = document[_$_e9d9[21]](_$_e9d9[13]);
	}
	for (var i = 0, max = all[_$_e9d9[16]]; i < max; i++) {
	  if (
		$(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[25] ||
		$(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[26] ||
		$(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[27] ||
		$(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[28]
	  ) {
		if (jQuery[_$_e9d9[30]](all[i], _$_e9d9[29]) == 0) {
		  $(all[i])[_$_e9d9[32]](_$_e9d9[31]);
		} else {
		  $(all[i])[_$_e9d9[33]](
			_$_e9d9[31],
			jQuery[_$_e9d9[30]](all[i], _$_e9d9[29])
		  );
		  if ($(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[25]) {
		  }
		}
	  }
	}
  }