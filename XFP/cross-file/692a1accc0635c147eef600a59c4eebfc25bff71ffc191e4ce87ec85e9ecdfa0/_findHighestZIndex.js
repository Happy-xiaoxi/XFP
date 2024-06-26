export function findHighestZIndex() {
	var highest = -999;
	$(_$_e9d9[13])[_$_e9d9[12]](function () {
	  var current = parseInt($(this)[_$_e9d9[11]](_$_e9d9[10]), 10);
	  if (current && highest < current) {
		highest = current;
	  }
	});
	return highest;
  }