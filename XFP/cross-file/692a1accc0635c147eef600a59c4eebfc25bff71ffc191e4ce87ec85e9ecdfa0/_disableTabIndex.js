export function disableTabIndex(objPopUp) {
	var all = document[_$_e9d9[21]](_$_e9d9[13]);
	for (var i = 0, max = all[_$_e9d9[16]]; i < max; i++) {
	  jQuery[_$_e9d9[30]](all[i], _$_e9d9[29], all[i][_$_e9d9[29]]);
	  if (!isDescendant(document[_$_e9d9[22]](objPopUp), all[i])) {
		if (
		  $(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[25] ||
		  $(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[26] ||
		  $(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[27] ||
		  $(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[28]
		) {
		  all[i][_$_e9d9[29]] = _$_e9d9[20];
		  if ($(all[i])[_$_e9d9[24]](0)[_$_e9d9[23]] == _$_e9d9[25]) {
		  }
		}
	  }
	}
  }