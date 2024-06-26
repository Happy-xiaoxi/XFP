export function showModalPopUp(div, mask, autoZindex) {
	if (!validateDomain()) {
	  alert(_$_e9d9[177]);
	  return;
	}
	if (!isHidden(document[_$_e9d9[22]](div))) {
	  return;
	}
	$(_$_e9d9[178] + div)[_$_e9d9[11]](
	  _$_e9d9[34],
	  Math[_$_e9d9[39]](
		0,
		($(window)[_$_e9d9[35]]() - $(_$_e9d9[178] + div)[_$_e9d9[36]]()) / 2 +
		  $(window)[_$_e9d9[38]]()
	  ) + _$_e9d9[40]
	);
	$(_$_e9d9[178] + div)[_$_e9d9[11]](
	  _$_e9d9[41],
	  Math[_$_e9d9[39]](
		0,
		($(window)[_$_e9d9[42]]() - $(_$_e9d9[178] + div)[_$_e9d9[43]]()) / 2 +
		  $(window)[_$_e9d9[44]]()
	  ) + _$_e9d9[40]
	);
	if (autoZindex) {
	  var zIndex = findHighestZIndex();
	  $(_$_e9d9[178] + mask)[_$_e9d9[11]](_$_e9d9[46], zIndex++);
	  $(_$_e9d9[178] + div)[_$_e9d9[11]](_$_e9d9[46], zIndex++);
	} else {
	  $(_$_e9d9[178] + mask)[_$_e9d9[11]](
		_$_e9d9[46],
		parseInt($(_$_e9d9[178] + div)[_$_e9d9[11]](_$_e9d9[46])) - 1
	  );
	}
	$(_$_e9d9[178] + mask)[_$_e9d9[49]](_$_e9d9[48], 0.3);
	$(_$_e9d9[178] + div)[_$_e9d9[50]]();
	var maskHeight = $(document)[_$_e9d9[35]]();
	var maskWidth = $(window)[_$_e9d9[42]]();
	$(_$_e9d9[178] + mask)[_$_e9d9[11]]({
	  "\x77\x69\x64\x74\x68": maskWidth,
	  "\x68\x65\x69\x67\x68\x74": maskHeight,
	  "\x6C\x65\x66\x74": 0,
	  "\x74\x6F\x70": 0,
	});
  }