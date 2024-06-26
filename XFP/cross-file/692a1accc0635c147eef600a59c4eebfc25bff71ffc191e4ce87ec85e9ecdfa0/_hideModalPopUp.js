export function hideModalPopUp(div, mask, landingDiv, hideType, easingType) {
	if (typeof hideType === _$_e9d9[124]) {
	  var hideType = _$_e9d9[48];
	}
	if (typeof easingType === _$_e9d9[124]) {
	  var easingType = _$_e9d9[179];
	}
	$(_$_e9d9[178] + div)[_$_e9d9[11]](_$_e9d9[10], _$_e9d9[51]);
	if (hideType == _$_e9d9[48]) {
	  $(_$_e9d9[178] + div)[_$_e9d9[52]]();
	} else {
	  var left = $(_$_e9d9[178] + div)[_$_e9d9[180]]()[_$_e9d9[41]];
	  $(_$_e9d9[178] + div)
		[_$_e9d9[11]]({ left: left })
		[_$_e9d9[183]](
		  {
			"\x6C\x65\x66\x74":
			  _$_e9d9[181] + $(_$_e9d9[178] + div)[_$_e9d9[42]]() + _$_e9d9[40],
		  },
		  _$_e9d9[182],
		  easingType,
		  function () {
			$(_$_e9d9[178] + div)[_$_e9d9[52]]();
		  }
		);
	}
	$(_$_e9d9[178] + mask)[_$_e9d9[11]](_$_e9d9[10], _$_e9d9[51]);
	$(_$_e9d9[178] + mask + _$_e9d9[184])[_$_e9d9[52]]();
	reSetTabIndex(landingDiv);
  }